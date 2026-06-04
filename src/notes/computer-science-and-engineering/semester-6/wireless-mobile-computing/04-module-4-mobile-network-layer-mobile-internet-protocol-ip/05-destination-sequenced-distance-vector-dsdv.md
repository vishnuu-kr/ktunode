---
title: "Destination Sequenced Distance Vector (DSDV)"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 4: Mobile network layer – Mobile Internet Protocol (IP)"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb92"
status: "completed"
scrapedAt: "2026-05-20T16:58:09.862Z"
---
## WIRELESS & MOBILE COMPUTING - Module 4: Mobile Network Layer - Mobile IP - Destination Sequenced Distance Vector (DSDV)

**Topic:** Destination Sequenced Distance Vector (DSDV)

**Description:** This module explores the Destination Sequenced Distance Vector (DSDV) routing protocol, a proactive table-driven routing protocol specifically designed for mobile ad hoc networks (MANETs). It addresses challenges of frequently changing network topologies due to node mobility.

**Learning Outcomes:**

*   Understand the fundamental principles of DSDV.
*   Explain how DSDV maintains routing tables and manages route updates.
*   Describe the mechanisms used to prevent routing loops in DSDV.
*   Differentiate between triggered updates and periodic updates in DSDV.
*   Analyze the advantages and disadvantages of DSDV.
*   Compare DSDV with other routing protocols for MANETs (e.g., AODV).

---

### 1. Fundamental Principles of DSDV

*   **Table-Driven Routing Protocol:** DSDV is a proactive routing protocol. This means that each node maintains a routing table containing the best-known route to every other node in the network *before* a route is actually needed.

*   **Distance Vector Protocol:** Like other distance vector protocols (e.g., RIP), DSDV relies on each node periodically sharing its routing table with its neighbors. The routing table contains the distance (typically hop count) to each destination and the next hop to reach that destination.

*   **Sequence Numbers:** The key innovation of DSDV is the use of *sequence numbers* to prevent routing loops. Each destination node maintains a sequence number, and any route advertised to that destination includes the destination's sequence number.

    *   **Even Sequence Numbers:** Assigned by the destination node when it is active and reachable.
    *   **Odd Sequence Numbers:** Assigned by a node when it believes the destination is unreachable (marked as "infinity" distance).  This is crucial for quickly propagating information about broken links.

*   **Metric:** DSDV typically uses hop count as its metric, but other metrics like link quality or delay could be considered.

*   **Routing Table Entries:** Each entry in the routing table contains:
    *   Destination Address
    *   Next Hop
    *   Distance (hop count)
    *   Sequence Number (assigned by the destination)
    *   Settling Time (used for weighted averaging)

---

### 2. Maintaining Routing Tables and Managing Route Updates

*   **Periodic Updates:** Each node periodically broadcasts its routing table to its neighbors. The interval for periodic updates can be configured. These updates ensure that the network maintains reasonably accurate routing information even in the absence of topology changes.

*   **Triggered Updates:** When a node detects a change in the network topology (e.g., a link breaks, a new neighbor appears, a better route is discovered), it immediately broadcasts a triggered update to its neighbors. This allows the network to quickly adapt to changes. Triggered updates are smaller than periodic updates, containing only the changed routes.

*   **Route Update Process:** When a node receives an update from a neighbor:
    1.  It examines each entry in the received routing table.
    2.  For each destination, it compares the received route with the existing route in its own routing table.
    3.  If the received route is *better* (based on sequence number, distance, and settling time), it updates its routing table with the new route.

*   **Better Route Criteria:** A received route is considered better if:
    1.  The sequence number is higher (newer).
    2.  If the sequence numbers are equal, the route with the shorter distance (hop count) is preferred.
    3. If the sequence numbers and distance are the same, a smaller settling time is preferred.

*   **Route Invalidations:** When a node detects a link break, it creates a new route to the unreachable destination with an infinite metric and an odd sequence number (higher than any previous sequence number used for that destination). This route is immediately broadcast to its neighbors, effectively poisoning the route to prevent other nodes from using it.

---

### 3. Preventing Routing Loops

*   **Sequence Numbers are Key:** Sequence numbers are the core mechanism for preventing routing loops. Each destination node maintains a sequence number, which is incremented each time the destination experiences a topological change. When advertising a route, the destination's sequence number is included in the routing update.

*   **Loop Prevention Mechanism:**
    1.  When a node receives multiple routes to the same destination, it prefers the route with the highest sequence number. This ensures that the most recent routing information is used.
    2.  If a node receives a route with a *lower* sequence number than the one it already has, it ignores the route, as it is considered stale.
    3.  Odd sequence numbers indicate that a route is unreachable. A node will only accept an unreachable route if it has no other routes to that destination, or if the unreachable route has a higher sequence number than any other unreachable route it knows about.

*   **Example:** Consider Node A, Node B, and Node C.  Node A is the destination.

    1.  Node A is active and has sequence number 2. It sends a route to Node B (A, seq=2, distance=1).
    2.  Node B sends a route to Node C (A, seq=2, distance=2).
    3.  Now, a link breaks between A and B. Node A knows about the break and assigns an odd sequence number 3 to its own route (A, seq=3, distance=infinity). It sends this update.
    4.  Node B receives (A, seq=3, distance=infinity) and updates its routing table. Now B knows A is unreachable.
    5.  Node B sends (A, seq=3, distance=infinity) to Node C.
    6.  Node C receives this, updates its routing table, and no longer tries to reach A through Node B.  The sequence numbers prevent C from thinking it can reach A via B.

---

### 4. Triggered Updates vs. Periodic Updates

| Feature          | Triggered Updates                 | Periodic Updates                      |
|-------------------|-----------------------------------|---------------------------------------|
| **Frequency**     | Occur immediately after a change | Occur at regular intervals             |
| **Purpose**       | Rapidly disseminate changes     | Maintain routing information         |
| **Size**          | Smaller (contain only changed routes)| Larger (contain entire routing table) |
| **Overhead**       | Lower (when few changes occur)   | Higher (regardless of changes)       |
| **Responsiveness** | Higher                           | Lower                                 |

**Benefits of Triggered Updates:**

*   Faster convergence to new routes after topology changes.
*   Reduced overhead when the network is relatively stable.

**Drawbacks of Triggered Updates:**

*   Potential for instability if changes occur very frequently (e.g., high node mobility).
*   Can lead to increased overhead in volatile networks due to frequent broadcasting.

**Benefits of Periodic Updates:**

*   Ensure that routing information is regularly refreshed, even in the absence of topology changes.
*   Can help to correct errors or inconsistencies in routing tables that may arise due to packet loss or other issues.

**Drawbacks of Periodic Updates:**

*   Significant overhead, especially in large networks.
*   Slower convergence to new routes compared to triggered updates.

---

### 5. Advantages and Disadvantages of DSDV

**Advantages:**

*   **Simplicity:** Relatively easy to understand and implement.
*   **Loop-Free Routing:** Guarantees loop-free routing due to the use of sequence numbers.
*   **Low Latency for Established Routes:** Since routes are pre-computed, data packets can be forwarded with minimal delay.  Routing tables are already in place.
*   **Suitable for Smaller Networks:** Performs well in smaller, less dynamic MANETs.

**Disadvantages:**

*   **High Overhead:** Maintaining up-to-date routing tables for all possible destinations results in significant overhead, even when there is no data to send.  This consumes bandwidth and battery power.
*   **Scalability Issues:** The overhead increases significantly as the network size grows, making it less suitable for large MANETs.
*   **Slow Reaction to Topology Changes:** Although triggered updates help, the need to update the entire routing table can slow down the convergence process in highly dynamic networks.
*   **Wasteful Bandwidth Usage:** Periodic broadcasts of routing tables consume bandwidth even when no changes are occurring.

---

### 6. DSDV vs. Other Routing Protocols (e.g., AODV)

| Feature             | DSDV                                     | AODV (Ad hoc On-demand Distance Vector) |
|----------------------|-------------------------------------------|------------------------------------------|
| **Routing Approach** | Proactive (table-driven)                  | Reactive (on-demand)                    |
| **Route Maintenance**| Periodic and triggered updates           | Route discovery and route maintenance      |
| **Overhead**         | Higher (due to periodic updates)          | Lower (unless frequent route requests)   |
| **Latency**          | Lower (for established routes)           | Higher (during route discovery)          |
| **Scalability**      | Lower                                      | Higher                                     |
| **Complexity**       | Simpler                                    | More complex                             |

*   **AODV:** AODV is a reactive routing protocol. It only establishes a route when a node needs to send data to a destination. It uses route request (RREQ) and route reply (RREP) messages to discover routes.

*   **Key Differences:**
    *   **Proactive vs. Reactive:** DSDV proactively maintains routing information, while AODV only establishes routes when needed.
    *   **Overhead:** DSDV typically has higher overhead due to periodic updates, while AODV has lower overhead in relatively stable networks. However, in very dynamic networks with frequent route requests, AODV's overhead can become higher.
    *   **Latency:** DSDV has lower latency for established routes because routing information is readily available. AODV has higher latency during route discovery.
    *   **Scalability:** AODV generally scales better than DSDV because it does not maintain routing information for all possible destinations.

*   **Choosing the Right Protocol:** The choice between DSDV and AODV depends on the specific characteristics of the MANET. DSDV is better suited for smaller, relatively stable networks where low latency is critical. AODV is better suited for larger, more dynamic networks where bandwidth is a major concern.

---

### Practice Questions and Exercises

1.  **What is the main purpose of sequence numbers in DSDV?**
    *   **Answer:** To prevent routing loops and ensure that nodes use the most up-to-date routing information.

2.  **Explain the difference between periodic and triggered updates in DSDV.**
    *   **Answer:** Periodic updates are broadcast regularly to maintain routing information, while triggered updates are broadcast immediately after a topology change to quickly disseminate the change.

3.  **A node receives two routes to the same destination. Route A has sequence number 10 and hop count 3. Route B has sequence number 10 and hop count 5. Which route should the node choose?**
    *   **Answer:** Route A. Since the sequence numbers are equal, the route with the shorter hop count is preferred.

4.  **When does a node assign an odd sequence number to a destination in DSDV?**
    *   **Answer:** When the node believes the destination is unreachable.

5.  **What are the main advantages and disadvantages of DSDV compared to AODV?**
    *   **Answer:** Advantages of DSDV: Simplicity, low latency for established routes. Disadvantages: High overhead, scalability issues.

6. **Scenario:** Node A wants to send data to Node E. The network topology is A-B-C-D-E.  Assume DSDV is running.
    *   a) Describe how Node A would initially determine the route to Node E.  What information would be in Node A's routing table *before* the data transmission?
    *   b) Suppose the link between C and D breaks. Describe how DSDV handles this situation to update the routing tables in the network.
    *   **Answer:**
        *   a) Node A will learn the route to E through routing table exchanges with its neighbors. Its routing table *before* transmission should already have an entry for E with the next hop being B, the hop count being 4, and E's sequence number.
        *   b) Node C detects the link break. C sets its route to E to infinity and assigns a new, odd sequence number to the route. C immediately broadcasts this update. Node B receives the update, updates its table, and propagates the update. Node A receives the update and updates its table, learning that the path through B is no longer viable. A will now need to find a new path (if any exists) through other routing exchanges.

---

### Important Points to Remember

*   DSDV is a proactive, table-driven routing protocol.
*   Sequence numbers are crucial for preventing routing loops.
*   Periodic and triggered updates maintain routing information.
*   DSDV suffers from high overhead, especially in large and dynamic networks.
*   AODV is a reactive routing protocol that offers a different trade-off between overhead and latency.
*  DSDV's use of "settling time" isn't heavily emphasized but is a mechanism for weighted averaging of different route updates.  Smaller settling times are preferred.
