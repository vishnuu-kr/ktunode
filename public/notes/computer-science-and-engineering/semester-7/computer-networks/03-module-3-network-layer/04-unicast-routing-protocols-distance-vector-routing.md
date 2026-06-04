---
title: "Unicast Routing Protocols- Distance Vector Routing"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c935"
status: "completed"
scrapedAt: "2026-05-20T17:02:48.397Z"
---
# Computer Networks: Module 3 - Network Layer: Unicast Routing Protocols - Distance Vector Routing

## Introduction to Distance Vector Routing

Distance Vector Routing (DVR) is a fundamental class of routing protocols used in computer networks to determine the best path for data packets to travel from a source to a destination. It operates on the principle of exchanging routing information with directly connected neighbors. Each router maintains a "distance vector" table, which lists the destinations it knows about, the "distance" (cost or hop count) to reach them, and the "next hop" router to forward the packet to.

### Learning Outcomes Covered:

*   Understanding the fundamental principles of Distance Vector Routing.
*   Explaining how routers exchange routing information.
*   Discussing the concept of "distance" and its measurement.
*   Analyzing the process of routing table updates and convergence.
*   Identifying and explaining the advantages and disadvantages of Distance Vector Routing.
*   Understanding common Distance Vector Routing protocols like RIP and EIGRP (as an example of advanced DVR).
*   Explaining the "count-to-infinity" problem and its solutions.
*   Describing split horizon and poison reverse as mechanisms to mitigate routing loops.

---

## 1. Fundamental Principles of Distance Vector Routing

*   **Neighbor-to-Neighbor Exchange:** Routers exchange their entire routing tables with their directly connected neighbors periodically (e.g., every 30 seconds for RIP).
*   **"Routing by Rumor":** Routers learn about the network topology from their neighbors, not from direct knowledge of the entire network.
*   **Metric:** A value used to measure the "cost" or "distance" to a destination. The most common metric is **hop count** (the number of routers a packet must pass through). Other metrics can also be used.
*   **Best Path Selection:** Routers select the path with the lowest metric to reach a destination.
*   **Convergence:** The process by which all routers in the network agree on the same routing information. This is crucial for efficient routing.

---

## 2. How Routers Exchange Routing Information

*   **Periodic Updates:** Routers send their entire routing tables to their directly connected neighbors at regular intervals. This is typically a "pull" mechanism, where a router broadcasts its table, and neighbors "pull" the information.
*   **Triggered Updates:** When a change occurs in the network (e.g., a link goes down, a new network is added), routers can send an "out-of-band" update immediately to inform neighbors about the change. This speeds up convergence.

---

## 3. The Concept of "Distance" and its Measurement

*   **Metric:** The "distance" represents the cost of a path.
*   **Hop Count:** The most common metric for basic Distance Vector protocols. Each router traversed adds 1 to the hop count.
    *   **Example:**
        *   Router A knows network X is 1 hop away.
        *   Router B is directly connected to A.
        *   Router B receives the routing information from A about network X.
        *   Router B's distance to X will be A's distance to X + 1 (B's hop to A). So, B's distance to X becomes 2 hops.
*   **Other Metrics (in more advanced DVRs like EIGRP):** Bandwidth, Delay, Load, Reliability. These provide a more sophisticated measure of path quality.

---

## 4. Routing Table Updates and Convergence

### Routing Table Structure

A typical Distance Vector routing table contains:

*   **Destination Network:** The network address.
*   **Cost/Distance:** The metric value for reaching the destination.
*   **Next Hop:** The IP address or interface of the next router to forward packets to.
*   **Outgoing Interface:** The interface on the local router used to send packets to the next hop.
*   **Timer/Age:** Information about when the route was last updated.

### Update Process

1.  **Initialization:** Routers learn about directly connected networks with a cost of 0.
2.  **Periodic Exchange:** Routers send their routing tables to neighbors.
3.  **Receiving Updates:** When a router receives an update from a neighbor:
    *   It examines each entry in the neighbor's table.
    *   For each destination, it calculates a potential new cost by taking the neighbor's cost to that destination and adding 1 (for the hop to the neighbor).
    *   If this new cost is lower than the current cost in its own table for that destination, it updates its table with the new lower cost and the neighbor as the next hop.
    *   If it doesn't have an entry for a destination, it adds the new entry.

### Convergence

*   **Definition:** The state where all routers in an internetwork have consistent and accurate routing information.
*   **Slow Convergence:** DVR protocols can be slow to converge because information propagates hop by hop. A change in one part of the network can take time to be reflected in all routers.
*   **Factors Affecting Convergence:**
    *   **Update Period:** How often tables are exchanged.
    *   **Metric:** Hop count is simpler but can lead to slower convergence than metrics that consider link state.
    *   **Network Size and Topology:** Larger, more complex networks take longer to converge.
    *   **Network Stability:** Frequent changes slow down convergence.

---

## 5. Advantages and Disadvantages of Distance Vector Routing

### Advantages:

*   **Simplicity:** Easier to understand and implement compared to link-state protocols.
*   **Lower Overhead (initially):** Routers only exchange routing tables, not full link-state information.
*   **Faster Convergence (with triggered updates):** Can react relatively quickly to changes if triggered updates are implemented.

### Disadvantages:

*   **Slow Convergence:** Can be slow to converge, especially in large networks or during frequent topology changes.
*   **Routing Loops:** Prone to routing loops, especially during periods of network instability.
*   **Count-to-Infinity Problem:** A classic issue where a router continues to increment the metric to an unreachable network until it hits a predefined maximum, leading to prolonged incorrect routing information.
*   **"Black Hole" Routing:** A router may advertise a route to an unreachable network through a neighbor that has also learned about this "unreachability" from the first router, creating a loop.
*   **Full Table Exchange:** Sending the entire routing table periodically can consume significant bandwidth, especially in large networks.

---

## 6. Common Distance Vector Routing Protocols

### 1. Routing Information Protocol (RIP)

*   **Type:** Pure Distance Vector.
*   **Metric:** Hop Count.
*   **Maximum Hop Count:** 15. A hop count of 16 is considered "infinity" and indicates an unreachable network.
*   **Update Frequency:** Every 30 seconds.
*   **Timers:**
    *   **Invalid Timer:** If a route is not updated within this time (typically 180 seconds), it's marked as invalid.
    *   **Flush Timer:** If a route is not updated within this time (typically 240 seconds), it's removed from the routing table.
    *   **Holddown Timer:** Used after a route is declared invalid to prevent routers from re-learning the same bad route too quickly.
*   **Split Horizon:** A mechanism to prevent routing loops (explained later).
*   **Poison Reverse:** Used in conjunction with split horizon to further prevent loops (explained later).

### 2. Interior Gateway Routing Protocol (IGRP) - Cisco Proprietary (Historical)

*   **Type:** Advanced Distance Vector.
*   **Metric:** Composite metric based on Bandwidth, Delay, Load, and Reliability.
*   **Maximum Hop Count:** 255.
*   **Update Frequency:** 90 seconds.

### 3. Enhanced Interior Gateway Routing Protocol (EIGRP) - Cisco Proprietary

*   **Type:** Advanced Distance Vector (often referred to as Hybrid).
*   **Metric:** Composite metric based on Bandwidth and Delay (configurable weights).
*   **Convergence:** Significantly faster than RIP due to the use ofDUAL (Diffusing Update Algorithm).
*   **Features:**
    *   **DUAL:** Guarantees loop-free paths and provides feasible successors (backup routes) that can be used immediately if the primary route fails.
    *   **Partial and Bounded Updates:** Only sends updates for changed routes, and only to neighbors affected by the change.
    *   **Reliable Transport Protocol (RTP):** Ensures reliable delivery of routing updates.
    *   **Multicast Updates:** Uses multicast to send updates to neighbors.

---

## 7. The "Count-to-Infinity" Problem and its Solutions

### The Count-to-Infinity Problem

*   **Scenario:** Imagine a network with three routers: A, B, and C, forming a chain. Network X is directly connected to A.
    *   A knows X is 1 hop away.
    *   B learns from A that X is 2 hops away.
    *   C learns from B that X is 3 hops away.
*   **Link Failure:** If the link between A and X fails, A marks X as unreachable (metric 16).
*   **Propagation:**
    *   A sends an update to B: "X is unreachable (16)."
    *   B receives this, updates its table for X to 16, and then sends its own table to C: "X is unreachable (16)."
    *   C receives this, updates its table for X to 16.
*   **The Loop:**
    *   Now, assume a routing update is delayed or misordered. B might not yet have received A's "unreachable" update.
    *   B might still have its old routing table entry for X, say "X is 2 hops away via A."
    *   B sends its table to A: "X is 3 hops away (via B)."
    *   A, which just detected the failure, receives this and incorrectly updates its table: "X is 4 hops away (via B)."
    *   This continues. A, B, and C keep informing each other that X is unreachable, but each time adding 1 to the metric, until they all reach the maximum metric (16). This takes `2 * Diameter` updates in simple cases.
*   **Result:** The network is stuck in an inconsistent state for a prolonged period, with routers believing they can reach an unreachable network, potentially leading to packets being dropped in a "black hole."

### Solutions to Count-to-Infinity:

1.  **Maximum Metric (Hop Count Limit):**
    *   As seen in RIP (max hop count of 15), any metric of 16 is considered infinity. This limits the number of hops a route can have, preventing infinite increments.
    *   **Limitation:** Still takes a long time for the "unreachable" information to propagate across the entire network.

2.  **Split Horizon:**
    *   **Principle:** A router will *not* advertise a route back out of the interface through which it learned that route.
    *   **How it works:** If router B learns about network X from router A (via interface Fa0/1), B will not advertise the route to X back to A out of Fa0/1.
    *   **Benefit:** Prevents simple two-node loops. If A thinks X is down, and B learns this from A, B won't send its (now potentially wrong) route back to A.
    *   **Example:** If A-B-C is a line, and A has network X. A advertises X to B. B will not advertise X back to A. C learns about X from B. C will not advertise X back to B.

3.  **Poison Reverse (in conjunction with Split Horizon):**
    *   **Principle:** Instead of just not advertising a route back, a router advertises the route with an infinite metric (poisoning the route).
    *   **How it works:** If router B learns about network X from router A, B will advertise X back to A, but with a metric of 16 (infinity).
    *   **Benefit:** More aggressive in breaking loops than simple split horizon. When a link fails, the router that directly detects the failure marks the route as invalid and advertises it with an infinite metric to its neighbors. Those neighbors, in turn, advertise it with an infinite metric to their neighbors, and so on. This ensures that all routers quickly learn about the unreachability.
    *   **Example:** If A-B-C, and A knows X.
        *   A advertises X to B (cost 1).
        *   B receives X from A, learns X is 2 via B. B then advertises X back to A with cost 16.
        *   If link A-X fails, A marks X as unreachable (16). A advertises this to B.
        *   B receives this from A. B updates its cost for X to 17 (from A). Since B previously advertised X to A with cost 16, and now A is telling B X is unreachable (16), this is handled.

4.  **Triggered Updates / Flush Timers:**
    *   **Triggered Updates:** As soon as a router detects a change (e.g., link down), it sends an update immediately, rather than waiting for the next periodic update. This speeds up the propagation of correct information.
    *   **Flush Timers (Holddown Timers):** When a router receives a routing update that indicates a metric to a destination has increased, it enters a "holddown" state for that specific route. During holddown, it will not update its routing table for that destination with any information learned from other routers, even if the new information is better. This prevents a flapping route from causing constant updates. Holddown typically starts when a route is declared unreachable and ends after a specified period (e.g., 180 seconds).

---

## 8. Key Points to Remember

*   **Distance Vector vs. Link State:** DVRs use neighbor-to-neighbor routing information (distance vector), while Link State protocols build a complete map of the network and use Dijkstra's algorithm.
*   **Hop Count:** The most basic metric for DVRs like RIP.
*   **Convergence Speed:** A major drawback of basic DVRs, though advanced DVRs like EIGRP improve this significantly.
*   **Routing Loops:** The inherent vulnerability of DVRs, requiring mechanisms like split horizon and poison reverse to mitigate.
*   **Count-to-Infinity:** A classic problem where incorrect routing information persists due to slow propagation of failure notifications.
*   **RIP's Limitations:** Max hop count of 15 makes it unsuitable for large networks. Periodic full table updates can be inefficient.
*   **EIGRP's Advancements:** Uses DUAL for faster convergence and loop prevention, partial/bounded updates, and a composite metric.

---

## Practice Questions and Exercises

**Question 1:**
What is the primary metric used by the Routing Information Protocol (RIP)?
    a) Bandwidth
    b) Delay
    c) Hop Count
    d) Load

**Question 2:**
Explain the "Count-to-Infinity" problem in Distance Vector Routing.

**Question 3:**
How does the **Split Horizon** rule help in preventing routing loops?

**Question 4:**
What is the maximum hop count considered "infinity" in RIP?
    a) 15
    b) 16
    c) 255
    d) 1

**Question 5:**
Which of the following is a characteristic of Distance Vector Routing?
    a) Each router has complete knowledge of the network topology.
    b) Routers exchange their entire routing tables with neighbors.
    c) Routing decisions are based on local link states.
    d) Convergence is typically very fast.

**Question 6 (Scenario-based):**
Consider three routers A, B, and C connected in a line: A-B-C. Router A is directly connected to network X.
*   Router A's routing table for X: {Destination: X, Cost: 1, Next Hop: Directly Connected}
*   Router B learns about X from A. Its table will be: {Destination: X, Cost: 2, Next Hop: A}
*   Router C learns about X from B. Its table will be: {Destination: X, Cost: 3, Next Hop: B}

Now, suppose the link between A and X fails. Router A marks X as unreachable (Cost: 16).

**a)** If only Split Horizon is implemented, and a routing update occurs, what will router B *not* send back to router A?
**b)** If Poison Reverse is implemented, and router A sends its update about X's unreachability to B, what will router B then send back to A regarding network X?

---

## Answers to Practice Questions

**Answer 1:**
c) Hop Count

**Answer 2:**
The Count-to-Infinity problem occurs in Distance Vector Routing when a network becomes unreachable. Routers continue to exchange routing information, incrementally increasing the metric to the unreachable network with each hop. This process, especially if routing updates are delayed or misordered, can lead to a situation where multiple routers believe they can still reach the network via different paths, creating routing loops and delaying network convergence until the maximum metric limit is reached.

**Answer 3:**
The Split Horizon rule prevents a router from advertising a route back to the same neighbor from which it learned that route. This helps break simple routing loops. For instance, if router B learns about network X from router A, B will not advertise the route to X back to A, preventing B from incorrectly telling A that it can reach X if A's direct path to X has failed.

**Answer 4:**
b) 16

**Answer 5:**
b) Routers exchange their entire routing tables with neighbors.

**Answer 6:**

**a)** If only Split Horizon is implemented, router B will *not* send back the route to network X to router A. Since B learned about X from A, it will not re-advertise that information back to A.

**b)** If Poison Reverse is implemented, and router A sends its update about X's unreachability (Cost: 16) to B, router B will then advertise network X back to router A with an infinite metric (e.g., Cost: 16 in RIP). This aggressively signals the unreachability to A.
