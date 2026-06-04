---
title: "Cache coherence"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c623"
status: "completed"
scrapedAt: "2026-05-20T17:07:07.317Z"
---
# HIGH PERFORMANCE COMPUTING: Module 2: Parallel Computers

## Topic: Cache Coherence

### Learning Outcomes:

*   **LO1: Understand the problem of cache incoherence in multiprocessor systems.**
*   **LO2: Differentiate between various cache coherence protocols.**
*   **LO3: Analyze the performance implications of different cache coherence protocols.**
*   **LO4: Understand the role of snooping and directory-based coherence mechanisms.**
*   **LO5: Identify the challenges and techniques for achieving cache coherence in NUMA systems.**

---

### 1. Introduction to Cache Coherence

#### 1.1 The Problem of Cache Incoherence

In multiprocessor systems, each processor often has its own private cache memory. Caches store frequently accessed data to reduce memory access latency. However, when multiple processors share the same memory location, and each processor has a copy of that location in its private cache, problems can arise.

**Definition:** **Cache incoherence** occurs when multiple copies of the same data exist in different caches (or between a cache and main memory), and at least one of these copies is stale or outdated.

**Scenario:**

Consider two processors, P1 and P2, with their respective caches, C1 and C2. They both read a shared variable `X` from main memory, and its initial value is 10.

*   **P1 reads X:** C1 now has a copy of `X` with value 10.
*   **P2 reads X:** C2 now has a copy of `X` with value 10.

Now, if P1 writes a new value, say 20, to `X`:

*   P1's cache (C1) is updated to 20.
*   **Problem:** C2 still holds the old value of `X` (10), and main memory might also still hold 10 (depending on the write policy). If P2 reads `X` again, it will get the stale value 10, leading to incorrect program execution.

**Key Takeaway:** Without a mechanism to ensure consistency, processors can operate on outdated data, violating the principle of **data consistency**.

#### 1.2 Why is Cache Coherence Important?

*   **Correctness:** Ensures that all processors see the most up-to-date value of shared data, preventing logical errors in parallel programs.
*   **Performance:** Efficient cache coherence mechanisms reduce unnecessary memory accesses and improve the overall speed of parallel computations.
*   **Programmer Transparency:** Ideally, cache coherence should be handled by the hardware, allowing programmers to write parallel code without explicitly managing data consistency across caches.

---

### 2. Cache Coherence Protocols

Cache coherence protocols are hardware mechanisms designed to maintain consistency among multiple caches and main memory. They define rules for how data is shared, updated, and invalidated across the system.

Two primary categories of protocols exist:

*   **Snooping Protocols:** Each cache controller "snoops" (monitors) the bus for memory transactions initiated by other processors.
*   **Directory-Based Protocols:** A central directory keeps track of which caches hold copies of which memory blocks and their states.

#### 2.1 Snooping Protocols

In snooping protocols, all cache controllers monitor a shared bus. When a processor performs a memory operation (read or write) that might affect a shared block, it broadcasts this transaction on the bus. Other cache controllers examine these broadcasts and take appropriate actions to maintain coherence.

**Key Concepts:**

*   **Shared Bus:** All processors and memory are connected via a shared bus.
*   **Broadcast:** Transactions are visible to all connected devices.
*   **Cache States:** Each cache line is associated with a state that indicates its status (e.g., valid, modified, shared).

**Common Snooping Protocols:**

##### 2.1.1 MSI Protocol (Modified, Shared, Invalid)

The MSI protocol is a basic snooping protocol with three states for each cache line.

*   **Invalid (I):** The cache line does not contain valid data.
*   **Shared (S):** The cache line contains valid data, and this data is also present in other caches. The data in main memory is also up-to-date.
*   **Modified (M):** The cache line contains valid data, and this is the only valid copy. The data in main memory is outdated (stale).

**Operations and Transitions:**

| Operation by Processor | Current State | Memory State | Action                                                               | Next State | Bus Transaction       | Other Caches' Actions                                                    |
| :--------------------- | :------------ | :----------- | :------------------------------------------------------------------- | :--------- | :-------------------- | :----------------------------------------------------------------------- |
| Read                   | I             | Invalid      | Fetch data from memory, place in cache.                              | S          | Read (or Read-Shared) | None                                                                     |
| Read                   | S             | Valid        | Data already in cache.                                               | S          | None                  | None                                                                     |
| Read                   | M             | Invalid      | This shouldn't happen if protocol is followed. Read from memory.     | S          | Read (or Read-Shared) | If snooped, invalidate their copy.                                       |
| Write                  | I             | Invalid      | Fetch data from memory, update to new value, place in cache.         | M          | Read-Modify-Write     | Invalidate their copy.                                                   |
| Write                  | S             | Valid        | Update data in cache. Broadcast an invalidate message.               | M          | Write-Invalidate      | Invalidate their copy.                                                   |
| Write                  | M             | Invalid      | Update data in cache.                                                | M          | None                  | None                                                                     |
| Bus Read (from another processor) | S | Valid        | Pass data from cache to bus if it's the requested block.             | S          | Data Reply            | Cache holds onto data.                                                   |
| Bus Read (from another processor) | M | Invalid      | Supply data from cache to bus and write it back to memory.           | S          | Data Reply & Writeback | Other caches in S state might update their copy if it matches.           |
| Bus Write-Invalidate   | S             | Valid        | Invalidate the cache line.                                           | I          | None                  | Cache line is invalidated.                                               |
| Bus Write-Invalidate   | M             | Invalid      | Write the data back to memory, then invalidate the cache line.       | I          | Write-Back            | Cache line is invalidated.                                               |

**Example:**

1.  P1 reads `X` (value 10). C1: `X` (10) [S].
2.  P2 reads `X` (value 10). C2: `X` (10) [S].
3.  P1 writes 20 to `X`. C1: `X` (20) [M]. P1 broadcasts "Write-Invalidate `X`".
4.  C2 snoops the bus, sees the invalidate message for `X`, and sets its copy of `X` to [I].
5.  P2 reads `X`. C2's copy is invalid. P2 requests `X` from the bus.
6.  C1 snoops the bus, sees the read request for `X`. Since C1 has the block in M state, it supplies `X` (20) to the bus and writes it back to memory. C1 transitions its state to S.
7.  C2 receives the data from C1, places `X` (20) in its cache, and sets its state to S.

##### 2.1.2 MESI Protocol (Modified, Exclusive, Shared, Invalid)

MESI adds an "Exclusive" state to handle read-for-ownership (RFO) operations more efficiently and avoid unnecessary bus transactions.

*   **Invalid (I):** Same as MSI.
*   **Shared (S):** Same as MSI. Data is valid and shared.
*   **Modified (M):** Same as MSI. Data is valid, exclusive, and modified.
*   **Exclusive (E):** The cache line contains valid data, and it is the only copy in any cache. However, the data in main memory is **up-to-date** (not stale). This state is useful because a processor can write to an exclusive block without broadcasting an invalidate message.

**Key Advantages of MESI over MSI:**

*   When a processor has a block in the **Exclusive (E)** state and wants to write to it, it can perform a **local write** without generating a bus transaction. The state simply transitions to Modified (M). This avoids bus traffic and improves performance.
*   If another processor needs to read this block, the current owner can supply it and transition to the Shared (S) state.

**Example of MESI advantage:**

1.  P1 reads `X` (10). C1: `X` (10) [E]. (Assuming it's the first read and no other copies exist).
2.  P1 writes 20 to `X`. Since the state is E, P1 performs a local write. C1: `X` (20) [M]. No bus transaction.
3.  P2 reads `X`. C2's copy is invalid. P2 requests `X` from the bus.
4.  C1 snoops the bus, sees the read request for `X`. C1 supplies `X` (20) to the bus, writes it back to memory, and transitions its state to S.
5.  C2 receives data, places `X` (20) in its cache, and sets state to S.

**Comparison to MSI:** In MSI, P1 would have to transition from S to M via a Write-Invalidate bus transaction, even if P2 had not yet read `X`. MESI avoids this extra bus traffic.

##### 2.1.3 MESIF Protocol (Modified, Exclusive, Shared, Invalid, Forward)

MESIF introduces a "Forward" state to optimize bus transactions, particularly in systems with a snooping bus where multiple caches might hold a shared copy.

*   **Modified (M):** Same as MESI.
*   **Exclusive (E):** Same as MESI.
*   **Shared (S):** Data is valid and shared.
*   **Invalid (I):** Same as MESI.
*   **Forward (F):** This state is assigned to *one* of the caches holding a shared copy. When a read miss occurs for a block in the shared state, the cache in the Forward state is responsible for supplying the data to the requesting processor and potentially writing it back to memory if its copy is modified by a previous write. This reduces the number of responses on the bus.

**How it helps:** When a cache snoops a read request for a shared block, if it has the block in the S state, it typically remains in S. If another cache has it in M, it supplies the data and transitions to S. In MESIF, if a cache has the block in S and another cache requests it, one of the S caches is designated as F. This F cache will supply the data, and if it was the only one with a valid copy (even shared), it can transition to S. If the F cache was the only one with a modified copy, it would supply the data and write it back to memory, transitioning to S.

**Benefits:** Reduces bus congestion by having only one cache (the one in F state) respond to read requests for shared data, instead of all caches with shared copies.

##### 2.1.4 MOESI Protocol (Modified, Owned, Exclusive, Shared, Invalid)

MOESI is an extension that adds an "Owned" state.

*   **Modified (M):** Same as MESI.
*   **Exclusive (E):** Same as MESI.
*   **Shared (S):** Data is valid and shared.
*   **Invalid (I):** Same as MESI.
*   **Owned (O):** The cache line contains valid data, and this data may also be present in other caches (in S state). Crucially, the data in main memory is **stale**. The cache in the Owned state has the responsibility to supply the data to other requesting caches and write it back to memory if necessary.

**How it helps:** When a processor writes to a block in the Shared (S) state, it needs to invalidate other copies. Instead of directly going to Modified (M), it can transition to Owned (O). If another processor then reads this block, the Owned cache supplies the data and transitions to Shared (S), while the requesting cache also becomes Shared (S). If a processor has a block in M and another processor needs to read it, the M processor supplies the data and transitions to Owned (O).

**Benefit:** The Owned state allows a cache to hold the only modified copy of a block but allows other caches to have a shared copy from main memory. It also clearly designates which cache is responsible for supplying data and performing writebacks when the block is shared. This can reduce bus traffic compared to protocols that might require writebacks from M states more frequently.

**Performance Implications of Snooping Protocols:**

*   **Scalability:** Snooping protocols do not scale well to a large number of processors. As the number of processors increases, the shared bus becomes a bottleneck. Every bus transaction (read, write, invalidate) needs to be monitored by all caches.
*   **Bus Bandwidth:** High contention on the bus can limit performance.
*   **False Sharing:** Occurs when independent data items that are not actually shared reside in the same cache line. If one processor modifies its data, the entire cache line is invalidated or updated for all processors, even if they only need the other part of the line. This leads to unnecessary cache coherence traffic.

#### 2.2 Directory-Based Protocols

Directory-based protocols overcome the scalability limitations of snooping by using a centralized or distributed directory to keep track of which caches hold copies of which memory blocks and their states. Instead of broadcasting, processors send targeted requests to the directory.

**Key Concepts:**

*   **Directory:** A data structure that stores information about each memory block:
    *   Which caches currently hold a copy of the block.
    *   The state of each cached copy (e.g., shared, exclusive, modified).
*   **No Broadcast:** Transactions are routed through the directory.
*   **Point-to-Point Messages:** Communication occurs between processors, memory, and the directory.

**How it Works:**

When a processor needs to access a memory block:

1.  **Read Miss:**
    *   The processor checks its cache. If not present, it sends a "Read Request" to the directory for that memory block.
    *   The directory checks its state for that block.
        *   If the block is in main memory (no cached copies), it fetches data from memory and sends it to the requesting processor. It updates the directory to indicate the requesting processor has a shared copy.
        *   If the block is cached exclusively by another processor (P_owner), the directory sends a "Read Request" to P_owner. P_owner sends the data to the requesting processor and its own copy's state might change (e.g., to Shared). The directory updates to show both processors have shared copies.
        *   If the block is cached exclusively by another processor and modified (M state), the directory sends a "Read Request" to P_owner. P_owner supplies the data to the requesting processor and writes the data back to main memory. P_owner's state changes to Shared. The directory updates.
2.  **Write Miss:**
    *   The processor sends a "Write Request" (or Read-for-Ownership - RFO) to the directory.
    *   The directory checks its state.
        *   If the block is shared by multiple caches, the directory sends "Invalidate" messages to all sharers. Once acknowledgments are received, it sends the data to the requesting processor and marks its directory entry as exclusive for the requester.
        *   If the block is held exclusively by another processor (E state), the directory sends a "Write Request" to that processor. That processor can then perform the write locally.
        *   If the block is held exclusively and modified (M state), the directory sends a "Write Request" to that processor. That processor writes back to memory, then performs the write.

**Directory States:**

A directory entry for a memory block typically stores:

*   **Sharers:** A list or bitmask indicating which caches have a valid copy of the block.
*   **Owner/State:** Indicates if a cache holds the block in an exclusive or modified state.

**Types of Directories:**

*   **Centralized Directory:** A single directory structure stores information for all memory blocks. Simpler to implement but can be a bottleneck.
*   **Distributed Directory:** The directory information is distributed across the memory modules or cache controllers. More scalable but more complex to manage.

**Common Directory-Based Protocols:**

*   **Scalable Coherence Interface (SCI):** A standard for high-performance bus-based systems that uses a ring topology and a directory-based approach.
*   **Hierarchical Coherence Protocols:** Often used in multi-level cache systems where coherence is maintained within a cluster of processors using snooping, and between clusters using a directory.

**Performance Implications of Directory-Based Protocols:**

*   **Scalability:** Scales much better than snooping protocols to a large number of processors because it avoids bus broadcasts.
*   **Directory Overhead:** Requires significant memory overhead to store the directory information.
*   **Latency:** Directory lookups and multi-hop message passing can introduce higher latency compared to direct snooping for small systems.
*   **Complexity:** More complex to implement and manage.

---

### 3. Cache Coherence in NUMA Systems

**Definition:** **Non-Uniform Memory Access (NUMA)** is an architecture where memory access time depends on the memory location relative to the processor. Processors are grouped into "nodes," and each node has its own local memory. Accessing local memory is faster than accessing remote memory (memory belonging to another node).

**Challenges for Cache Coherence in NUMA:**

1.  **Remote Access Latency:** Accessing remote memory is significantly slower. Cache coherence protocols need to minimize remote accesses.
2.  **Network Topology:** Communication between nodes occurs over an interconnect network, which can have its own latency and bandwidth limitations.
3.  **Directory Placement:** Where to place the directory information becomes crucial for performance.

**Cache Coherence Mechanisms in NUMA:**

1.  **Distributed Directories:** The directory information is typically distributed across the nodes. Each node is responsible for managing the directory entries for a portion of the memory. This avoids a single point of failure or bottleneck.
2.  **Hierarchical Snooping:** Within a node (a cluster of processors), snooping protocols can be used for local coherence. Between nodes, directory-based mechanisms are used.
3.  **Directory States and Remote Access Optimization:** Protocols are designed to efficiently handle remote reads and writes. For example, when a processor needs data from remote memory, the directory can route the request directly to the node holding the data. If the data is in a remote cache, the directory coordinates the transfer and state updates.
4.  **Locality-Awareness:** Ideally, coherence protocols in NUMA systems should leverage data locality. If data is primarily accessed by processors within the same node, coherence traffic should be minimized within that node.
5.  **Directory Entries for Remote Sharers:** Directory entries need to efficiently track sharers that might be on different nodes. This can be done using bitmasks or linked lists.

**Example Scenario in NUMA:**

*   **Node 0:** Processors P0, P1. Memory M0.
*   **Node 1:** Processors P2, P3. Memory M1.

1.  P0 reads data `D` (initially in M1). Directory entry for `D` is managed by Node 1.
2.  P0 requests `D`. Directory on Node 1 is consulted. Node 1 forwards the request to P3 (assuming P3 has a cached copy).
3.  P3 supplies `D` to P0. P3's state might transition from Modified to Shared, or from Exclusive to Shared. The directory entry for `D` is updated to include P0 as a sharer.
4.  P1 (on Node 0) also needs to read `D`. It requests `D`. The directory on Node 1 sees that P0 already has a shared copy and forwards the request to P0.
5.  P0 supplies `D` to P1. Both P0 and P1 have `D` in their caches (Shared state).

**Challenges:**

*   **Migrating Ownership:** When a processor modifies data that was previously shared across nodes, ownership needs to be transferred efficiently, potentially involving multiple invalidations across the network.
*   **Directory State Updates:** Keeping the distributed directory consistent and up-to-date across multiple nodes can be complex.

---

### 4. Performance Implications of Cache Coherence Protocols

The choice of cache coherence protocol has a significant impact on the performance of parallel systems.

#### 4.1 Metrics for Performance Evaluation:

*   **Miss Rate:** The fraction of memory accesses that miss in the cache. Coherence misses are a significant component of the overall miss rate.
*   **Coherence Misses:**
    *   **Compulsory Misses:** First-time access to a block.
    *   **Capacity Misses:** Block evicted due to limited cache size.
    *   **Conflict Misses:** Block maps to an already occupied cache line.
    *   **Coherence Misses:** Misses caused by the need to maintain cache coherence. These include:
        *   **Invalidate Misses:** A processor tries to access a block that was invalidated by another processor.
        *   **Replacement Misses:** A cache line is replaced, and the data is needed again, but another cache now has the valid copy.
        *   **Misses due to Broadcasts:** For snooping protocols, a processor might miss because the bus is busy with other coherence traffic.
*   **Traffic:** The amount of data and control messages transmitted on the interconnect (bus or network). High traffic can saturate bandwidth.
*   **Latency:** The time taken to complete a memory access or a coherence operation.
*   **Scalability:** How well the system's performance scales as the number of processors increases.

#### 4.2 Comparison of Snooping vs. Directory-Based Protocols:

| Feature            | Snooping Protocols                                    | Directory-Based Protocols                                    |
| :----------------- | :---------------------------------------------------- | :----------------------------------------------------------- |
| **Scalability**    | Poor (limited by bus bandwidth)                       | Good (avoids broadcasts)                                     |
| **Bus Traffic**    | High (due to broadcasts)                              | Lower (point-to-point messages)                              |
| **Latency**        | Lower for small systems, higher with contention       | Higher for small systems, more predictable for large systems |
| **Directory Size** | No explicit directory (state in cache tags)           | Significant memory overhead for the directory                |
| **Complexity**     | Relatively simpler                                    | More complex                                                 |
| **Suitability**    | Small to moderate number of processors (SMP systems)  | Large-scale multiprocessor systems (MPP, NUMA)               |

#### 4.3 Protocol Specific Performance Considerations:

*   **MESI vs. MSI:** MESI generally offers better performance due to the Exclusive state, reducing unnecessary bus transactions for writes.
*   **MESIF:** Can improve performance by reducing bus traffic in shared-access scenarios.
*   **MOESI:** The Owned state can optimize data sharing and writeback behavior.
*   **False Sharing Impact:** All coherence protocols are susceptible to false sharing. Techniques like padding cache lines or aligning data structures can mitigate this.

---

### 5. Practice Questions and Exercises

**Question 1:**
Describe the problem of cache incoherence in a multiprocessor system. Provide a simple example illustrating how incorrect results can occur without a coherence mechanism.

**Answer 1:**
Cache incoherence occurs when multiple copies of the same data exist in different caches (or between a cache and main memory), and at least one of these copies is stale or outdated.

**Example:**
Suppose processors P1 and P2 share a variable `X`, initially 10.
1. P1 reads `X`. P1's cache gets `X=10`.
2. P2 reads `X`. P2's cache gets `X=10`.
3. P1 writes `X = 20`. P1's cache gets `X=20`. If no coherence protocol is active, P2's cache still holds `X=10`, and main memory might also hold 10. If P2 then reads `X`, it will incorrectly retrieve 10 instead of the updated value 20.

---

**Question 2:**
Explain the function of the "Exclusive" state in the MESI protocol and how it improves performance compared to the MSI protocol.

**Answer 2:**
In the MESI protocol, the "Exclusive (E)" state indicates that a cache line contains valid data, it is the only copy present in any cache, and the data in main memory is up-to-date.
The performance improvement comes when a processor with a cache line in the Exclusive state needs to write to it. Instead of broadcasting an invalidate message on the bus (as in MSI when transitioning from Shared to Modified), the processor can perform a local write, changing the state directly to Modified (M). This avoids bus traffic, saving bandwidth and reducing latency for that write operation.

---

**Question 3:**
Contrast snooping-based and directory-based cache coherence protocols in terms of scalability. Which type is generally preferred for large-scale multiprocessor systems and why?

**Answer 3:**
*   **Snooping Protocols:** Scalability is poor. All processors monitor a shared bus. As the number of processors increases, the bus becomes a bottleneck due to the high volume of broadcast messages (reads, writes, invalidates).
*   **Directory-Based Protocols:** Scalability is good. Instead of broadcasting, a directory keeps track of sharers and states. Transactions are routed point-to-point via the directory. This significantly reduces traffic on the interconnect, allowing for a larger number of processors.

Directory-based protocols are generally preferred for large-scale multiprocessor systems because of their superior scalability. They avoid the bus bottleneck inherent in snooping protocols, making them more suitable for systems with hundreds or thousands of processors.

---

**Question 4:**
What is false sharing? Provide a scenario where it can occur and negatively impact performance.

**Answer 4:**
False sharing occurs when two or more processors access different data items that happen to reside in the same cache line, and at least one of these accesses is a write. Because cache coherence operates at the granularity of a cache line, a write to one data item in the line will cause the entire line to be invalidated or updated in other caches, even if those caches only need the *other* data items in the line.

**Scenario:**
Consider a cache line that holds two independent integer variables, `A` and `B`.
*   Processor P1 writes to `A`.
*   Processor P2 reads `B`.

If `A` and `B` are in the same cache line:
1.  P1 reads `A`. Cache line containing `A` and `B` is loaded.
2.  P1 writes `A = 10`. The cache line is updated to reflect `A=10`. If using a snooping protocol, an invalidate message for the entire line is broadcast.
3.  P2 attempts to read `B`. If P1's write invalidated the cache line in P2's cache, P2 will experience a cache miss. Even though P2 only needs `B` and didn't modify `A`, it has to fetch the entire line again from memory or another processor's cache, incurring unnecessary latency and traffic.

---

**Question 5:**
How do NUMA systems introduce additional challenges for cache coherence?

**Answer 5:**
NUMA systems introduce challenges for cache coherence primarily due to:
1.  **Non-Uniform Memory Access Latency:** Accessing local memory is fast, but accessing remote memory (belonging to another node) is significantly slower. Cache coherence protocols must be designed to minimize remote accesses and traffic over the interconnect.
2.  **Network Interconnect:** Communication between nodes happens over a network, which adds latency and can become a bottleneck. Protocols need to efficiently route coherence messages.
3.  **Distributed Directory Management:** Directories are typically distributed. This increases complexity in maintaining the global state of memory blocks and coordinating coherence operations across multiple nodes.

---

### 6. Important Points to Remember

*   **Cache Incoherence:** The core problem is multiple stale copies of data in different caches.
*   **Protocols Maintain Consistency:** Snooping and directory-based protocols are the primary mechanisms to ensure cache coherence.
*   **Snooping:** Bus-based, broadcasts all transactions. Good for small systems, poor scalability.
*   **Directory-Based:** Uses a directory to track sharing. Excellent scalability, but higher overhead and complexity.
*   **MESI/MOESI Advantages:** States like Exclusive (E) and Owned (O) can optimize coherence traffic by reducing unnecessary bus transactions for writes.
*   **False Sharing:** A critical performance issue where independent data items in the same cache line cause unnecessary coherence traffic.
*   **NUMA Systems:** Require specialized coherence mechanisms (distributed directories, minimizing remote access) due to non-uniform memory access times and network interconnects.
*   **Performance:** Protocol choice directly impacts miss rates, traffic, latency, and overall system scalability.
