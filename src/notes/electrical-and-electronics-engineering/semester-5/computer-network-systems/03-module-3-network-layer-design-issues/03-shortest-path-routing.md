---
title: "Shortest path routing"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3647f"
status: "completed"
scrapedAt: "2026-05-23T16:20:08.373Z"
---
## Computer Network Systems: Module 3 - Network Layer Design Issues: Shortest Path Routing

**Course Outcome Alignment:** This module directly addresses **CO3: Explain routing algorithms and congestion control algorithms...** specifically focusing on the fundamental routing algorithm: shortest path routing. The knowledge level is **K2 (Understand)**.

**Learning Outcomes Covered:**

*   Understanding the fundamental goal of routing in a network.
*   Defining and explaining the concept of a "shortest path."
*   Identifying different metrics used to define "shortest."
*   Exploring common algorithms for finding shortest paths.
*   Discussing the trade-offs and considerations in implementing shortest path routing.

---

### 1. Introduction to Routing and the Need for Shortest Paths

**Key Concept:** Routing is the process of selecting paths in a computer network along which to send network traffic.

**Definition:** In a network, traffic needs to travel from a source to a destination. The path taken is a sequence of interconnected routers.

**Why Shortest Paths?**

*   **Efficiency:** Shorter paths generally mean less latency and faster delivery of packets.
*   **Resource Utilization:** Efficiently using network links and router processing power.
*   **Cost-Effectiveness:** In some scenarios, path length can be directly related to cost (e.g., bandwidth charges).
*   **Predictability:** Shorter paths can contribute to more predictable network behavior.

**Tanenbaum (5th Ed., Ch. 8.1):** Emphasizes that routing algorithms aim to find optimal paths, and "shortest" is a primary definition of optimality.

**Forouzan (5th Ed., Ch. 14.1):** Introduces routing as a fundamental function of the network layer, and shortest path algorithms are a core component.

**Illustrative Example:**

Imagine a simple network of cities (routers) connected by roads (links). Each road has a certain length. We want to find the shortest sequence of roads to get from City A to City G.

```
      (2)---B---(1)
     / |       |
(1) /  |(3)    |(2)
   /   |       |
  A----C-------D----G
  | \  |(1)    |(3)
(3)|  \(2)    |
   |   \       |
   +----E-------F----(1)
      (1)     (1)
```

In this example, a path from A to G could be A->B->D->G (total length 2+1+3=6). Another path could be A->C->D->G (total length 1+1+3=5). The shortest path is A->C->D->G.

---

### 2. Defining "Shortest" - Metrics

The concept of "shortest" is not always about physical distance. In computer networks, various metrics are used to define the "cost" of a path:

*   **Hop Count:** The number of routers a packet traverses.
    *   **Pros:** Simple to implement, often used in distance-vector routing.
    *   **Cons:** Doesn't consider link speeds, congestion, or reliability. A path with fewer hops might be much slower.
    *   **Example:** A path with 3 hops is "shorter" than a path with 5 hops, regardless of link speeds.

*   **Bandwidth:** The maximum data rate of a link.
    *   **Pros:** Directly relates to throughput and data transfer speed.
    *   **Cons:** Can be complex to measure and update dynamically. A high-bandwidth link might be heavily congested.
    *   **Example:** A path using two 100 Mbps links is considered "shorter" than a path using two 10 Mbps links, assuming other factors are equal.

*   **Delay (Latency):** The time it takes for a packet to travel from source to destination. This includes propagation delay, transmission delay, and queuing delay.
    *   **Pros:** Directly impacts perceived performance.
    *   **Cons:** Highly dynamic and difficult to measure accurately in real-time.
    *   **Example:** A path with a total delay of 50 ms is "shorter" than a path with a total delay of 100 ms.

*   **Congestion:** The amount of traffic on a link or router.
    *   **Pros:** Routing around congested areas improves overall network performance.
    *   **Cons:** Very difficult to measure and predict.
    *   **Example:** A path with lightly loaded links is "shorter" than a path with heavily loaded links.

*   **Cost (Monetary):** In some private networks, links might have different pricing structures.
    *   **Pros:** Directly aligns with business objectives.
    *   **Cons:** Not common in public internet routing.

**Kurose & Ross (6th Ed., Ch. 4.2):** Discusses how different metrics influence the choice of shortest path and how link costs are assigned.

**Peterson & Davie (5th Ed., Ch. 5.1):** Highlights that the choice of metric is crucial for routing algorithm performance.

**Important Point to Remember:** The definition of "shortest" is determined by the metric chosen by the routing algorithm designer.

---

### 3. Shortest Path Routing Algorithms

These algorithms aim to find the path with the minimum total cost between a source router and all other routers in the network.

**Key Algorithms:**

1.  **Dijkstra's Algorithm (Link-State Routing):**
    *   **Type:** Link-state algorithm. Each router has a complete, up-to-date map of the network topology (all routers and links with their costs).
    *   **How it works:**
        *   Starts with a known source router.
        *   Maintains a set of visited routers and a set of unvisited routers.
        *   Iteratively selects the unvisited router with the smallest known distance from the source.
        *   Updates the distances to its neighbors.
        *   Continues until all reachable routers have been visited.
    *   **Data Structures:** Typically uses a priority queue to efficiently select the next closest unvisited node.
    *   **Example:** OSPF (Open Shortest Path First) is a prominent example of a link-state routing protocol that uses Dijkstra's algorithm.
    *   **Tanenbaum (5th Ed., Ch. 8.3.1):** Provides a detailed explanation and pseudocode for Dijkstra's algorithm.
    *   **Forouzan (5th Ed., Ch. 14.3):** Also covers Dijkstra's algorithm in the context of link-state routing.

    **Dijkstra's Algorithm Steps (Conceptual):**

    1.  Initialize distances: Set the distance to the source router to 0 and all other routers to infinity.
    2.  Maintain a set of unvisited routers.
    3.  While the set of unvisited routers is not empty:
        a.  Select the unvisited router `u` with the smallest distance.
        b.  Mark `u` as visited.
        c.  For each unvisited neighbor `v` of `u`:
            i.  If `distance(source, u) + cost(u, v) < distance(source, v)`:
                *   Update `distance(source, v) = distance(source, u) + cost(u, v)`.
                *   Record `u` as the predecessor of `v`.

2.  **Bellman-Ford Algorithm (Distance-Vector Routing):**
    *   **Type:** Distance-vector algorithm. Each router knows the distance to all other routers, but only directly from its neighbors.
    *   **How it works:**
        *   Each router maintains a distance vector (a table of distances to all destinations).
        *   Routers exchange their distance vectors with their neighbors periodically or when a change occurs.
        *   A router updates its own distance vector based on the information received from its neighbors. The update rule is: `Distance(X, Destination) = min(Distance(X, Destination), Distance(X, Neighbor) + Distance(Neighbor, Destination))`.
    *   **Example:** RIP (Routing Information Protocol) is a classic example of a distance-vector routing protocol.
    *   **Tanenbaum (5th Ed., Ch. 8.2.1):** Explains the concept of distance vectors and how they are exchanged.
    *   **Forouzan (5th Ed., Ch. 14.2):** Details the distance-vector approach and the Bellman-Ford algorithm.

    **Bellman-Ford Algorithm Steps (Conceptual):**

    1.  Initialization: Each router sets its distance to itself to 0 and to all other routers to infinity.
    2.  Iteration: Repeat `|V| - 1` times (where `|V|` is the number of routers):
        a.  For every link `(u, v)` with cost `c(u, v)`:
            i.  If `Distance(X, v) > Distance(X, u) + c(u, v)` for some router `X`:
                *   Update `Distance(X, v) = Distance(X, u) + c(u, v)`.
    3.  (Optional) Check for negative cycles: Perform one more iteration. If any distance can be further reduced, a negative cycle exists.

**Comparison of Dijkstra vs. Bellman-Ford:**

| Feature         | Dijkstra's Algorithm (Link-State) | Bellman-Ford Algorithm (Distance-Vector) |
| :-------------- | :-------------------------------- | :--------------------------------------- |
| **Information** | Complete network topology         | Distances to destinations from neighbors |
| **Complexity**  | Higher per router (more computation) | Lower per router (simpler updates)       |
| **Convergence** | Faster                           | Slower, prone to routing loops           |
| **Robustness**  | More robust, less prone to loops  | Prone to routing loops (count-to-infinity) |
| **Overhead**    | Higher (flooding link-state info) | Lower (sending distance vectors)         |
| **Scalability** | Scales well                       | Can have issues with very large networks |

**Kurose & Ross (6th Ed., Ch. 4.3):** Contrasts link-state and distance-vector routing, highlighting the trade-offs.

**Peterson & Davie (5th Ed., Ch. 5.2):** Discusses the practical implementation aspects of these algorithms in routing protocols.

---

### 4. Practical Considerations and Challenges

*   **Scalability:** As networks grow, managing and processing routing information becomes challenging.
    *   **Link-State:** Flooding link-state advertisements can consume significant bandwidth in large networks. Hierarchical routing is often employed.
    *   **Distance-Vector:** The "count-to-infinity" problem can lead to routing loops, especially in large or unstable networks.

*   **Convergence Time:** How quickly routing tables are updated after a network change (e.g., a link failure). Faster convergence is desirable.
    *   **Link-State:** Generally converges faster because all routers receive updates quickly.
    *   **Distance-Vector:** Can be slow to converge, especially in large networks, and is susceptible to oscillations.

*   **Routing Loops:** A situation where packets are continuously forwarded between a set of routers without ever reaching their destination.
    *   **Distance-Vector:** More susceptible due to the way information is propagated. Techniques like split horizon and poison reverse are used to mitigate this.
    *   **Link-State:** Less prone to loops because each router has a complete view of the topology and computes its own paths.

*   **Metric Selection:** Choosing the right metric is crucial for optimal routing. A metric that is too simple might lead to inefficient paths, while a complex metric might be difficult to implement and update.

*   **Dynamic Updates:** Networks are dynamic. Links can fail, new routers can be added, and traffic loads can change. Routing algorithms must adapt to these changes.

*   **Security:** Routing information can be a target for malicious attacks. Ensuring the integrity and authenticity of routing updates is important.

**Halsall (5th Ed., Ch. 6.3):** Discusses the practical issues like convergence and loop prevention in routing protocols.

**Stevens (Vol. 1, 2005):** Provides in-depth discussions on the implementation details of routing protocols and their associated challenges.

**Keshav (1998):** Offers an engineering perspective on network design and how routing algorithms fit into the overall system.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary goal of shortest path routing?
**Answer:** To find a path between two nodes in a network such that the sum of the costs of the links along the path is minimized.

**Question 2:** Name two common metrics used to define "shortest" in a network.
**Answer:** Hop count and delay. (Other valid answers include bandwidth, congestion, cost).

**Question 3:** Which routing algorithm type typically uses Dijkstra's algorithm, and what kind of information does each router possess?
**Answer:** Link-state routing. Each router possesses a complete map of the network topology.

**Question 4:** What is the "count-to-infinity" problem, and which type of routing algorithm is it associated with?
**Answer:** The "count-to-infinity" problem is a routing loop that can occur in distance-vector routing where routes are advertised with increasing costs, leading to packets being forwarded indefinitely. It is associated with distance-vector routing.

**Question 5:** Briefly compare the convergence speed of link-state and distance-vector routing algorithms.
**Answer:** Link-state routing generally converges faster than distance-vector routing because link-state updates are flooded to all routers, allowing them to independently calculate new shortest paths. Distance-vector routing relies on neighbor exchanges, which can take longer to propagate changes.

**Exercise 1:**

Consider the following network with link costs:

```
    A --(4)-- B --(2)-- D
    | \       |       /|
   (2) (8)   (1)     (5)
    |   \     |     /  |
    C --(3)-- E --(6)-- F
```

Using Dijkstra's algorithm, find the shortest path from router A to router F. Show your steps.

**Solution Exercise 1:**

*   **Initialization:**
    *   Dist(A) = 0
    *   Dist(B) = ∞
    *   Dist(C) = ∞
    *   Dist(D) = ∞
    *   Dist(E) = ∞
    *   Dist(F) = ∞
    *   Visited set: {}
    *   Unvisited set: {A, B, C, D, E, F}

*   **Step 1:**
    *   Select A (Dist=0).
    *   Update neighbors:
        *   Dist(B) = min(∞, Dist(A) + cost(A,B)) = min(∞, 0 + 4) = 4. Predecessor of B is A.
        *   Dist(C) = min(∞, Dist(A) + cost(A,C)) = min(∞, 0 + 2) = 2. Predecessor of C is A.
        *   Dist(E) = min(∞, Dist(A) + cost(A,E)) = min(∞, 0 + 8) = 8. Predecessor of E is A.
    *   Visited set: {A}
    *   Unvisited set: {B, C, D, E, F}

*   **Step 2:**
    *   Select C (Dist=2).
    *   Update neighbors:
        *   Dist(E) = min(8, Dist(C) + cost(C,E)) = min(8, 2 + 3) = 5. Predecessor of E is C.
        *   Dist(B) = min(4, Dist(C) + cost(C,B)) = min(4, 2 + 1) = 3. Predecessor of B is C.
    *   Visited set: {A, C}
    *   Unvisited set: {B, D, E, F}

*   **Step 3:**
    *   Select B (Dist=3).
    *   Update neighbors:
        *   Dist(D) = min(∞, Dist(B) + cost(B,D)) = min(∞, 3 + 2) = 5. Predecessor of D is B.
        *   Dist(E) = min(5, Dist(B) + cost(B,E)) = min(5, 3 + 1) = 4. Predecessor of E is B.
    *   Visited set: {A, C, B}
    *   Unvisited set: {D, E, F}

*   **Step 4:**
    *   Select E (Dist=4).
    *   Update neighbors:
        *   Dist(F) = min(∞, Dist(E) + cost(E,F)) = min(∞, 4 + 6) = 10. Predecessor of F is E.
        *   Dist(D) = min(5, Dist(E) + cost(E,D)) = min(5, 4 + 5) = 5. (No change for D).
    *   Visited set: {A, C, B, E}
    *   Unvisited set: {D, F}

*   **Step 5:**
    *   Select D (Dist=5).
    *   Update neighbors:
        *   Dist(F) = min(10, Dist(D) + cost(D,F)) = min(10, 5 + 5) = 10. (No change for F).
    *   Visited set: {A, C, B, E, D}
    *   Unvisited set: {F}

*   **Step 6:**
    *   Select F (Dist=10).
    *   No unvisited neighbors to update.
    *   Visited set: {A, C, B, E, D, F}
    *   Unvisited set: {}

**Shortest path from A to F:** Reconstruct path using predecessors: F <- E <- B <- C <- A.
**Shortest path:** A -> C -> B -> E -> F
**Total cost:** 2 + 1 + 1 + 6 = 10.

*(Note: There might be multiple shortest paths with the same cost. In this example, A->C->B->E->F cost is 10. A->B->D->F cost is 4+2+5 = 11. A->C->E->F cost is 2+3+6=11)*

---

### 6. Important Points to Remember

*   **Metric Choice is Key:** The definition of "shortest" dictates the performance of the routing algorithm.
*   **Dijkstra's:** Ideal for link-state protocols, requires full network knowledge, generally faster convergence, less prone to loops.
*   **Bellman-Ford:** Suitable for distance-vector protocols, relies on neighbor information, slower convergence, susceptible to loops.
*   **Convergence:** The ability of the routing system to adapt to network changes is crucial.
*   **Routing Loops:** A major problem in distance-vector routing that must be addressed.
*   **Scalability:** Routing in very large networks requires careful design and often hierarchical approaches.

---

This comprehensive study note covers the fundamentals of shortest path routing, its importance in network layer design, the algorithms involved, and practical considerations, drawing upon the specified textbooks and reference books to provide a solid understanding for **CO3 (K2)**.
