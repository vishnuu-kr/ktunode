---
title: "Concurrency Control"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd9"
status: "completed"
scrapedAt: "2026-05-20T16:50:16.927Z"
---
# ADVANCED DATABASE SYSTEMS: Module 2 - Distributed Databases: Concurrency Control

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the challenges of concurrency control in distributed databases.
*   Explain different concurrency control techniques used in distributed databases, including locking protocols (2PL, strict 2PL), timestamp-based protocols, and optimistic concurrency control.
*   Compare and contrast different concurrency control techniques in terms of performance, overhead, and suitability for different application scenarios.
*   Analyze the impact of distributed transactions on concurrency control.
*   Describe distributed deadlock detection and prevention techniques.
*   Understand and describe the concept of multi-version concurrency control.

## 1. Introduction to Concurrency Control in Distributed Databases

*   **Key Concept: Concurrency Control:** Managing simultaneous access to shared data to ensure data consistency and integrity in a multi-user environment.  In a *distributed* database, this becomes significantly more complex.

*   **Challenge: Data Replication & Fragmentation:** Data may be replicated across multiple sites or fragmented and stored at different sites.  Concurrency control must maintain consistency across all copies.

*   **Challenge: Network Communication Delays:** Communication delays between sites introduce significant overhead and latency, impacting performance of concurrency control mechanisms.

*   **Challenge: Site Failures:** Partial failures (one or more sites become unavailable) must be handled gracefully without compromising data consistency.

*   **Challenge: Distributed Transactions:** Transactions may involve data at multiple sites, requiring coordination and synchronization across the network.

*   **Definition: Distributed Transaction:** A transaction that accesses data located at multiple database sites.

## 2. Concurrency Control Techniques

### 2.1 Locking-Based Protocols

*   **Key Concept: Locking:** A concurrency control mechanism that restricts access to data by granting exclusive or shared locks to transactions.

*   **Types of Locks:**
    *   **Shared Lock (S):** Allows multiple transactions to read the data concurrently.
    *   **Exclusive Lock (X):** Allows only one transaction to write (or read) the data.

*   **2 Phase Locking (2PL):** A locking protocol with two phases:
    *   **Growing Phase:** Transactions acquire locks.
    *   **Shrinking Phase:** Transactions release locks.  Once a lock is released, no further locks can be acquired.

*   **Strict 2PL:** A more restrictive version of 2PL. Transactions hold all locks until they commit or abort. This prevents cascading rollbacks.

    *   **Advantage:** Avoids cascading rollbacks and ensures serializability.
    *   **Disadvantage:** Lower concurrency, higher lock contention.

*   **Distributed 2PL:** Extending 2PL to distributed environments.

    *   **Centralized 2PL:** A single site acts as the lock manager.
        *   **Advantage:** Simple to implement.
        *   **Disadvantage:** Single point of failure, bottleneck at the central site.

    *   **Primary Copy 2PL:** One copy of the data item is designated as the primary copy. Locks are acquired on the primary copy.
        *   **Advantage:** Reduces lock contention.
        *   **Disadvantage:** Still has a single point of failure for each data item.

    *   **Distributed 2PL (Decentralized):** Each site manages locks for the data it stores.  Requires agreement between sites for global transaction management.
        *   **Advantage:** Higher concurrency, no single point of failure.
        *   **Disadvantage:** More complex to implement, higher communication overhead, susceptible to deadlocks.

    *   **Example (Distributed 2PL):**
        *   Transaction T1 wants to read data item X at Site A and write data item Y at Site B.
        *   T1 requests a shared lock on X from Site A.
        *   T1 requests an exclusive lock on Y from Site B.
        *   If both locks are granted, T1 proceeds.
        *   After committing or aborting, T1 releases all locks.

*   **Important Point:**  2PL guarantees serializability but is prone to deadlocks.

### 2.2 Timestamp-Based Protocols

*   **Key Concept: Timestamping:** Assigning a unique timestamp to each transaction. Transactions are then ordered based on their timestamps.

*   **Timestamp Order:** Transactions are executed in timestamp order.

*   **Basic Timestamp Ordering (TO):** Each data item has two timestamps:

    *   **Read Timestamp (RTS):** The timestamp of the latest transaction that read the item.
    *   **Write Timestamp (WTS):** The timestamp of the latest transaction that wrote the item.

    *   **Read Rule:** If T tries to read item X and TS(T) < WTS(X), then T is rolled back (violates timestamp order).
    *   **Write Rule:** If T tries to write item X and TS(T) < RTS(X) or TS(T) < WTS(X), then T is rolled back (violates timestamp order).

*   **Advantage:** Deadlock-free.
*   **Disadvantage:** Rollbacks are frequent, starvation possible.

*   **Thomas' Write Rule:** A modification of basic TO that allows ignoring "late writes" to improve performance.  If T tries to write X and TS(T) < WTS(X), the write is ignored (blind write).  Only valid if the late write is superseded.
*   **Important Point:** Timestamp ordering provides serializability but can lead to starvation and requires careful handling of rollbacks.

### 2.3 Optimistic Concurrency Control

*   **Key Concept: Optimistic Approach:** Assume that conflicts are rare. Transactions proceed without locking or timestamp checking and validate their changes at the end.

*   **Phases:**
    *   **Read Phase:** Transaction reads data and performs computations locally.
    *   **Validation Phase:** Check for conflicts.
    *   **Write Phase:** If validation succeeds, write changes to the database.  Otherwise, rollback the transaction.

*   **Validation Criteria:**

    *   **Backward Validation:**  Checks if any conflicting transactions have committed since the transaction started reading.
    *   **Forward Validation:** Checks if any conflicting transactions are active and have written data that the current transaction intends to write.

*   **Advantages:** Higher concurrency, less overhead for transactions that do not conflict.
*   **Disadvantages:** High rollback rate if conflicts are frequent, complex implementation.
*   **Suitability:** Best suited for read-mostly applications where write conflicts are rare.

### 2.4 Multi-version Concurrency Control (MVCC)

*   **Key Concept: MVCC:** Maintains multiple versions of each data item. When a transaction writes to a data item, a new version is created, leaving the old version intact.  Readers can access older versions without blocking writers and vice-versa.
*   **Timestamp-based versioning:** Each version is associated with a timestamp indicating when it was created.

*   **Advantages:**
    *   Improved concurrency: Readers never block writers and vice versa.
    *   Better performance for read-mostly workloads.
    *   Supports snapshot isolation.

*   **Disadvantages:**
    *   Increased storage overhead due to multiple versions.
    *   Garbage collection of old versions is necessary.
    *   More complex implementation.

*   **Example:** A reporting transaction can read a consistent snapshot of the database without being blocked by concurrent update transactions.
*   **Important Point:** MVCC provides high concurrency and is often used in modern database systems, but it requires careful management of storage and garbage collection.

## 3. Distributed Deadlock Detection and Prevention

*   **Key Concept: Deadlock:** A situation where two or more transactions are blocked indefinitely, waiting for each other to release locks.

*   **Challenge in Distributed Databases:** Deadlocks can span multiple sites.

*   **Deadlock Prevention Techniques:**

    *   **Wait-Die:** If a transaction T1 requests a lock held by T2, and TS(T1) < TS(T2), then T1 waits. Otherwise, T1 dies (is rolled back).
        *   **Advantage:** Simple, deadlock-free.
        *   **Disadvantage:** Can lead to starvation, more rollbacks.

    *   **Wound-Wait:** If a transaction T1 requests a lock held by T2, and TS(T1) < TS(T2), then T2 is wounded (rolled back), and T1 gets the lock. Otherwise, T1 waits.
        *   **Advantage:** Prevents starvation, fewer rollbacks than Wait-Die.
        *   **Disadvantage:** More complex to implement.

    *   **Timestamp-based Lock Ordering:** Impose a global ordering on resources (e.g., using timestamps). Transactions must acquire locks in this order.

*   **Deadlock Detection Techniques:**

    *   **Centralized Deadlock Detection:** A central site maintains a global wait-for graph.  Detects cycles in the graph to identify deadlocks.
        *   **Advantage:** Simple to implement.
        *   **Disadvantage:** Single point of failure, bottleneck at the central site.

    *   **Hierarchical Deadlock Detection:** Hierarchical arrangement of deadlock detectors.
        *   **Advantage:** Scalable.
        *   **Disadvantage:** Complex.

    *   **Distributed Deadlock Detection:** Each site maintains a local wait-for graph.  Periodically exchange information with other sites to detect global deadlocks.
        *   **Advantage:** No single point of failure, more scalable.
        *   **Disadvantage:** More complex to implement, can detect phantom deadlocks (false positives).

*   **Edge Chasing:**  A distributed deadlock detection algorithm where a probe (a special message) is sent along edges of the wait-for graph. If the probe returns to its origin, a deadlock is detected.

*   **Phantom Deadlock:** A false deadlock detection caused by delays in communication between sites.

*   **Deadlock Resolution:** Once a deadlock is detected, one or more transactions must be rolled back to break the cycle.

## 4. Impact of Distributed Transactions on Concurrency Control

*   **Atomicity:** All changes made by a distributed transaction are either committed at all sites or aborted at all sites.  Requires a distributed commit protocol (e.g., Two-Phase Commit - 2PC).

*   **Consistency:** The distributed database must remain in a consistent state after the transaction completes.

*   **Isolation:** Concurrent transactions must not interfere with each other.

*   **Durability:** Once a transaction is committed, the changes must be permanent, even in the face of failures.

*   **Two-Phase Commit (2PC):**  A widely used protocol to ensure atomicity in distributed transactions.

    *   **Phase 1 (Prepare Phase):** The coordinator sends a "prepare" message to all participants. Each participant attempts to prepare the transaction and responds with either "vote-commit" or "vote-abort".
    *   **Phase 2 (Commit/Abort Phase):** If all participants voted to commit, the coordinator sends a "commit" message. If any participant voted to abort, the coordinator sends an "abort" message. Participants then commit or abort the transaction accordingly.

*   **Disadvantages of 2PC:** Blocking, single point of failure (coordinator).  If the coordinator fails after sending the prepare messages, the participants are blocked until the coordinator recovers.

*   **Three-Phase Commit (3PC):**  An alternative to 2PC that attempts to reduce blocking.  More complex to implement than 2PC.

*   **Important Point:**  Distributed transactions add significant complexity to concurrency control and require robust commit protocols to ensure atomicity.

## 5. Comparing Concurrency Control Techniques

| Feature               | Locking (2PL)        | Timestamp Ordering  | Optimistic            | MVCC                 |
| --------------------- | --------------------- | -------------------- | --------------------- | -------------------- |
| **Concurrency Level** | Medium                | Medium               | High                  | High                 |
| **Overhead**          | Lock management       | Timestamp management | Validation overhead   | Version management   |
| **Deadlock Potential** | Yes                   | No                   | No                   | No                   |
| **Rollback Frequency**| Low (except deadlocks)| High                 | High (if conflicts)   | Low                  |
| **Suitable For**      | General purpose       | High update rates    | Read-mostly apps      | General purpose, especially read-heavy |
| **Complexity**        | Medium                | Medium               | High                  | High                 |

## Practice Questions & Exercises:

1.  **Explain the difference between strict 2PL and basic 2PL. Why is strict 2PL considered safer?**

    *   **Answer:** Basic 2PL allows transactions to release locks before the end of the transaction. Strict 2PL requires transactions to hold locks until commit or abort. Strict 2PL is safer because it avoids cascading rollbacks, where the rollback of one transaction forces the rollback of other transactions that read data written by the first transaction.

2.  **Describe the Thomas' Write Rule and explain its purpose.**

    *   **Answer:** Thomas' Write Rule allows a transaction to ignore a write request if the timestamp of the transaction is less than the write timestamp of the data item. This prevents unnecessary rollbacks when a "late write" is superseded by a later write, improving performance.

3.  **In optimistic concurrency control, what are the advantages and disadvantages of using backward validation versus forward validation?**

    *   **Answer:**
        *   **Backward Validation:** Checks for committed conflicts. Advantage: Simpler to implement. Disadvantage: Can lead to more rollbacks if conflicts are frequent.
        *   **Forward Validation:** Checks for active conflicting transactions. Advantage: Can reduce rollbacks by identifying conflicts early. Disadvantage: More complex to implement, can lead to unnecessary rollbacks if conflicting transactions ultimately abort.

4.  **What are the advantages and disadvantages of MVCC, and why is garbage collection necessary in MVCC systems?**

    *   **Answer:**
        *   **Advantages:** Improved concurrency, better performance for read-mostly workloads, supports snapshot isolation.
        *   **Disadvantages:** Increased storage overhead, garbage collection of old versions is necessary, more complex implementation.
        *   **Garbage Collection:** Necessary to reclaim storage space occupied by old, no longer needed versions of data items.  Without garbage collection, the database would grow indefinitely.

5.  **Explain the Wait-Die and Wound-Wait deadlock prevention algorithms. Which one is considered to prevent starvation?**

    *   **Answer:**
        *   **Wait-Die:** If T1 requests a lock held by T2, and TS(T1) < TS(T2), then T1 waits. Otherwise, T1 dies (is rolled back).
        *   **Wound-Wait:** If T1 requests a lock held by T2, and TS(T1) < TS(T2), then T2 is wounded (rolled back), and T1 gets the lock. Otherwise, T1 waits.
        *   **Wound-Wait prevents starvation** because older transactions are more likely to wound (rollback) younger transactions, giving the older transactions priority.

6. **Transaction T1 has timestamp 10 and wants to read item X which has WTS(X) = 15. According to basic timestamp ordering, what will happen?**

    * **Answer:** T1 will be rolled back because TS(T1) (10) < WTS(X) (15), violating the timestamp ordering rule. This means that T1 is trying to read a version of X that has already been overwritten by a later transaction.

7. **Explain the two phases of the Two-Phase Commit (2PC) protocol and why it is used in distributed databases.**

    * **Answer:** The two phases of 2PC are:
        * **Phase 1 (Prepare Phase):** The coordinator asks all participants to prepare to commit the transaction. Each participant reserves the necessary resources and votes either to commit or abort.
        * **Phase 2 (Commit/Abort Phase):** Based on the votes received, the coordinator decides whether to commit or abort the transaction. It then instructs all participants to perform the corresponding action.

    * **2PC is used in distributed databases** to ensure that a distributed transaction is either committed at all sites or aborted at all sites, thereby maintaining data consistency and atomicity in a distributed environment.

## Important Points to Remember:

*   Concurrency control is essential for maintaining data consistency and integrity in distributed databases.
*   Different concurrency control techniques have different trade-offs in terms of performance, overhead, and suitability for different application scenarios.
*   Locking-based protocols can lead to deadlocks, while timestamp-based protocols can lead to starvation.
*   Optimistic concurrency control is best suited for read-mostly applications.
*   MVCC provides high concurrency but requires careful management of storage and garbage collection.
*   Distributed transactions add significant complexity to concurrency control and require robust commit protocols to ensure atomicity.
*   Understanding the characteristics of the application and the database system is crucial for choosing the appropriate concurrency control technique.
