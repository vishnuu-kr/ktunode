---
title: "Routing Algorithms Link-State (Dijkstra’s) Algorithm, Distance vector algorithm."
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff055"
status: "completed"
scrapedAt: "2026-05-23T18:00:11.338Z"
---
# Computer Networks: Module 3 - Network Layer: Routing Algorithms

## Introduction to Routing

**What is Routing?**

Routing is the process of selecting paths in a network along which to send data. Routers are responsible for forwarding packets from a source to a destination across one or more networks. The Network Layer is where routing decisions are made.

**Key Concepts:**

*   **Routing Table:** A data structure stored in a router that lists the available routes to various network destinations and, in some cases, the metrics associated with those routes.
*   **Forwarding Table:** A subset of the routing table that contains only the necessary information for the router to forward a packet efficiently.
*   **Routing Algorithm:** The set of rules and procedures used by routers to construct and maintain routing tables. These algorithms determine the "best" path for a packet to travel.
*   **Autonomous System (AS):** A collection of IP networks and routers that are usually under the control of a single entity (e.g., an ISP, a large organization). Routing within an AS is called **Interior Gateway Routing**, and routing between ASes is called **Exterior Gateway Routing**.

**Learning Outcomes Covered:**

*   CO1: Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture. (K2) - Understanding the role of the Network Layer and routing within the overall network architecture.
*   CO2: Demonstrate protocols and the functions of different layers. (K2) - Understanding the protocols that enable routing.
*   CO3: Analyse the concept of routing and addressing protocols in the context of computer networking. (K3) - This entire module is directly relevant to this outcome.

**Textbook References:**

*   Kurose & Ross, Chapter 4 (The Network Layer: Routing)
*   Forouzan, Chapter 8 (Network Layer)

---

## Types of Routing Algorithms

Routing algorithms can be broadly categorized based on how they exchange routing information:

1.  **Link-State Routing Algorithms:** Each router constructs a complete map of the network topology and then independently computes the shortest path to all destinations.
2.  **Distance-Vector Routing Algorithms:** Each router shares its knowledge of the network (distances to destinations) with its directly connected neighbors.

---

## 1. Link-State Routing Algorithms (e.g., Dijkstra's Algorithm)

**Core Idea:**

In link-state routing, each router:
1.  Discovers its neighbors.
2.  Measures the "cost" (e.g., delay, bandwidth, reliability) of its links to those neighbors.
3.  Builds a **link-state packet (LSP)** containing this information.
4.  Floods its LSP to all other routers in the network (or its Autonomous System).
5.  Once a router receives LSPs from all other routers, it has a complete map of the network topology.
6.  Uses Dijkstra's algorithm to calculate the shortest path from itself to every other node in the network.

**Dijkstra's Algorithm:**

*   **Purpose:** To find the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights.
*   **How it works:** It iteratively builds a set of nodes for which the shortest path is known.
    1.  **Initialization:**
        *   Initialize the distance to the source node as 0 and to all other nodes as infinity.
        *   Maintain a set of visited nodes (initially empty) and a set of unvisited nodes (initially all nodes).
    2.  **Iteration:**
        *   Select the unvisited node with the smallest tentative distance from the source.
        *   Mark this node as visited.
        *   For each neighbor of the newly visited node:
            *   Calculate the distance from the source to the neighbor through the current node.
            *   If this calculated distance is shorter than the current tentative distance to the neighbor, update the neighbor's tentative distance and record the current node as its predecessor.
    3.  **Termination:** The algorithm terminates when all nodes have been visited. The final distances are the shortest path distances, and the predecessors can be used to reconstruct the paths.

**Key Concepts in Link-State Routing:**

*   **Link-State Packet (LSP):** Contains information about a router's directly connected links and their costs.
*   **Flooding:** The process of propagating an LSP to all routers in the network. Techniques are used to prevent infinite loops (e.g., sequence numbers, hop counts, aging).
*   **Shortest Path First (SPF) calculation:** Each router independently runs Dijkstra's algorithm using the collected LSPs.
*   **Convergence:** The state where all routers have consistent and up-to-date routing information. Link-state protocols generally converge faster than distance-vector protocols.
*   **Overhead:** LSPs are generated periodically or when topology changes, which can lead to higher bandwidth consumption than distance-vector protocols, especially in large, stable networks.

**Example (Simplified):**

Consider a simple network: A-B, B-C, A-C, B-D

*   **Links and Costs:**
    *   A-B: 2
    *   B-C: 1
    *   A-C: 5
    *   B-D: 3

**Router A's perspective (using Dijkstra's):**

1.  **Initialization:**
    *   Dist(A) = 0
    *   Dist(B) = ∞
    *   Dist(C) = ∞
    *   Dist(D) = ∞
    *   Visited = {}
    *   Unvisited = {A, B, C, D}

2.  **Iteration 1:**
    *   Select A (Dist=0).
    *   Visited = {A}
    *   Unvisited = {B, C, D}
    *   Neighbors of A: B, C
        *   Update B: Dist(B) = Dist(A) + Cost(A,B) = 0 + 2 = 2. Predecessor(B) = A.
        *   Update C: Dist(C) = Dist(A) + Cost(A,C) = 0 + 5 = 5. Predecessor(C) = A.

3.  **Iteration 2:**
    *   Select B (Dist=2).
    *   Visited = {A, B}
    *   Unvisited = {C, D}
    *   Neighbors of B: A, C, D
        *   A is visited, skip.
        *   Update C: Dist(C) via B = Dist(B) + Cost(B,C) = 2 + 1 = 3. Since 3 < 5 (current Dist(C)), update Dist(C) = 3. Predecessor(C) = B.
        *   Update D: Dist(D) = Dist(B) + Cost(B,D) = 2 + 3 = 5. Predecessor(D) = B.

4.  **Iteration 3:**
    *   Select C (Dist=3).
    *   Visited = {A, B, C}
    *   Unvisited = {D}
    *   Neighbors of C: A, B
        *   A and B are visited, skip.

5.  **Iteration 4:**
    *   Select D (Dist=5).
    *   Visited = {A, B, C, D}
    *   Unvisited = {}
    *   Neighbors of D: B
        *   B is visited, skip.

**Result for Router A:**

*   Shortest path to A: 0 (A)
*   Shortest path to B: 2 (A -> B)
*   Shortest path to C: 3 (A -> B -> C)
*   Shortest path to D: 5 (A -> B -> D)

**Textbook References:**

*   Kurose & Ross, Section 4.3.1 (Link-State Routing)
*   Forouzan, Section 8.4.1 (Link-State Routing)

**Important Points to Remember for Link-State:**

*   **Global knowledge:** Routers have a complete map of the network.
*   **Dijkstra's Algorithm:** The core computation engine.
*   **LSP Flooding:** The mechanism for sharing topology information.
*   **Fast Convergence:** Generally converges quickly after topology changes.
*   **Higher overhead:** More link-state updates can be exchanged.
*   **Examples:** OSPF (Open Shortest Path First) is a widely used link-state routing protocol in IP networks. IS-IS is another.

---

## 2. Distance-Vector Routing Algorithms

**Core Idea:**

In distance-vector routing, each router maintains a **distance vector**, which is a list of distances to all destinations in the network. Routers periodically exchange their distance vectors with their **directly connected neighbors**.

*   **Initialization:** Each router initializes its distance to itself as 0 and to all other destinations as infinity.
*   **Information Exchange:** Routers send their current distance vectors to their neighbors.
*   **Update Rule (Bellman-Ford Equation):** When router X receives a distance vector from its neighbor Y, X updates its own distance vector according to the following rule:
    For each destination Z:
    `Dist_X(Z) = min( Dist_X(Z), Cost(X, Y) + Dist_Y(Z) )`

    Where:
    *   `Dist_X(Z)`: Router X's current distance to destination Z.
    *   `Cost(X, Y)`: The cost of the direct link between router X and router Y.
    *   `Dist_Y(Z)`: Router Y's distance to destination Z (received from Y).

**Key Concepts in Distance-Vector:**

*   **Distance Vector:** A table containing distances (costs) to all destinations and the next hop to reach them.
*   **Periodic Updates:** Routers send their entire distance vector to neighbors at regular intervals (e.g., every 30 seconds).
*   **Message Exchange:** Routers communicate using routing update messages.
*   **Convergence:** Can be slower than link-state routing, especially in large networks with frequent changes.
*   **Count-to-Infinity Problem:** A potential issue where incorrect routing information can propagate for a long time, leading to suboptimal paths or routing loops.
    *   **Solutions:**
        *   **Split Horizon:** A router does not advertise a route back to the neighbor from which it learned the route.
        *   **Poison Reverse:** A router advertises a route with an infinite cost back to the neighbor from which it learned the route.
        *   **Hold-down Timers:** After a router receives new information about a destination (potentially incorrect), it can ignore any further updates for that destination for a certain period.
*   **Routing by rumor:** Routers only know about their neighbors' knowledge, not the entire network topology.

**Example (Simplified):**

Consider the same network: A-B, B-C, A-C, B-D

*   **Links and Costs:**
    *   A-B: 2
    *   B-C: 1
    *   A-C: 5
    *   B-D: 3

**Initial State:**

*   **Router A:**
    *   Dist(A) = 0
    *   Dist(B) = 2 (via B)
    *   Dist(C) = 5 (via C)
    *   Dist(D) = ∞

*   **Router B:**
    *   Dist(A) = 2 (via A)
    *   Dist(B) = 0
    *   Dist(C) = 1 (via C)
    *   Dist(D) = 3 (via D)

*   **Router C:**
    *   Dist(A) = 5 (via A)
    *   Dist(B) = 1 (via B)
    *   Dist(C) = 0
    *   Dist(D) = ∞

*   **Router D:**
    *   Dist(A) = ∞
    *   Dist(B) = 3 (via B)
    *   Dist(C) = ∞
    *   Dist(D) = 0

**After some updates (assuming A sends to B, B sends to A and C, C sends to B, D sends to B):**

Let's say B receives an update from A.

*   **Router B receives A's vector:**
    *   A's vector: {A:0, B:2, C:5, D:∞}
    *   Cost(B, A) = 2

*   **B updates its vector based on A's info:**
    *   For destination A: `min(Dist_B(A), Cost(B,A) + Dist_A(A)) = min(2, 2 + 0) = 2`. (No change)
    *   For destination B: `min(Dist_B(B), Cost(B,A) + Dist_A(B)) = min(0, 2 + 2) = 0`. (No change)
    *   For destination C: `min(Dist_B(C), Cost(B,A) + Dist_A(C)) = min(1, 2 + 5) = 1`. (No change)
    *   For destination D: `min(Dist_B(D), Cost(B,A) + Dist_A(D)) = min(3, 2 + ∞) = 3`. (No change)

Now, let's say C receives an update from B.

*   **Router C receives B's (potentially updated) vector:**
    *   Assume B's vector is now {A:2, B:0, C:1, D:3}
    *   Cost(C, B) = 1

*   **C updates its vector based on B's info:**
    *   For destination A: `min(Dist_C(A), Cost(C,B) + Dist_B(A)) = min(5, 1 + 2) = 3`. C updates Dist(A) to 3 via B. Predecessor(A) = B.
    *   For destination B: `min(Dist_C(B), Cost(C,B) + Dist_B(B)) = min(1, 1 + 0) = 1`. (No change)
    *   For destination C: `min(Dist_C(C), Cost(C,B) + Dist_B(C)) = min(0, 1 + 1) = 0`. (No change)
    *   For destination D: `min(Dist_C(D), Cost(C,B) + Dist_B(D)) = min(∞, 1 + 3) = 4`. C updates Dist(D) to 4 via B. Predecessor(D) = B.

**Textbook References:**

*   Kurose & Ross, Section 4.3.2 (Distance-Vector Routing)
*   Forouzan, Section 8.4.2 (Distance-Vector Routing)
*   Tanenbaum & Wetherall, Chapter 5 (Routing)

**Important Points to Remember for Distance-Vector:**

*   **Local knowledge:** Routers only know distances to neighbors and their perceived distances to other destinations.
*   **Bellman-Ford equation:** The core update rule.
*   **Periodic updates:** Information is exchanged regularly.
*   **Slower convergence:** Can take longer to stabilize after changes.
*   **Count-to-Infinity:** A significant issue that needs mitigation.
*   **Examples:** RIP (Routing Information Protocol) is a classic example of a distance-vector protocol. EIGRP (Enhanced Interior Gateway Routing Protocol) also has distance-vector characteristics.

---

## Comparison: Link-State vs. Distance-Vector

| Feature             | Link-State Routing                     | Distance-Vector Routing                |
| :------------------ | :------------------------------------- | :------------------------------------- |
| **Topology Knowledge** | Complete map of the network            | Local information from neighbors       |
| **Algorithm**       | Dijkstra's algorithm                   | Bellman-Ford algorithm (update rule) |
| **Information Shared** | Link states (LSPs)                     | Distance vectors                       |
| **Update Trigger**  | Topology change or periodic refresh    | Periodic updates                       |
| **Convergence**     | Faster                                 | Slower                                 |
| **Overhead**        | Potentially higher (LSP flooding)      | Generally lower (vector exchange)      |
| **Complexity**      | More complex to implement              | Simpler to implement                   |
| **Count-to-Infinity** | Not susceptible                        | Susceptible (requires mitigation)      |
| **Best Suited For** | Large, complex networks                | Smaller, simpler networks              |
| **Examples**        | OSPF, IS-IS                            | RIP, EIGRP                             |

**CO3 Alignment:** This comparison directly helps analyze the strengths and weaknesses of different routing approaches, crucial for understanding routing and addressing protocols.

---

## Practice Questions and Answers

**Question 1:**
What is the primary difference in the information exchanged between routers using Link-State versus Distance-Vector routing protocols?

**Answer:**
In **Link-State** routing, routers exchange **link-state packets (LSPs)** that describe their directly connected links and their costs. This allows each router to build a complete map of the network topology.
In **Distance-Vector** routing, routers exchange their **distance vectors**, which are tables of distances (costs) to all reachable destinations and the next hop to reach them. Routers only have knowledge of their neighbors' distance vectors.

**Question 2:**
Which routing algorithm is generally known for faster convergence after a network topology change, and why?

**Answer:**
**Link-State** routing algorithms generally exhibit faster convergence. This is because when a topology change occurs, the affected router immediately floods an LSP describing the change. All other routers receive this information quickly and can independently recalculate their shortest paths using Dijkstra's algorithm. Distance-vector protocols rely on periodic updates and the propagation of information through neighbors, which can take longer to stabilize, especially with the "count-to-infinity" problem.

**Question 3:**
Consider the following network segment: R1 --(cost 2)-- R2 --(cost 5)-- R3. If R1 uses a distance-vector algorithm and learns about R3's distance to a destination 'X' as 10, and the cost from R1 to R2 is 2, and from R2 to R3 is 5, what would be R1's updated distance to 'X' if it receives this information via R2?

**Answer:**
Using the distance-vector update rule:
`Dist_R1(X) = min( Dist_R1(X), Cost(R1, R2) + Dist_R2(X) )`

Assuming R1 currently has `Dist_R1(X)` as infinity (or a much larger value):
`Dist_R1(X) = min( ∞, 2 + 10 )`
`Dist_R1(X) = 12`

R1's updated distance to 'X' would be 12, with the next hop being R2.

**Question 4:**
What is the "count-to-infinity" problem in distance-vector routing, and what are two common techniques used to mitigate it?

**Answer:**
The **"count-to-infinity" problem** occurs in distance-vector routing when a link fails, and incorrect routing information propagates through the network, causing routers to update their distance vectors back and forth with increasing costs (approaching infinity) for a significant period, potentially leading to routing loops.

Two common mitigation techniques are:
1.  **Split Horizon:** A router does not advertise a route back to the neighbor from which it learned that route.
2.  **Poison Reverse:** A router advertises a route with an infinite cost back to the neighbor from which it learned the route. This is a more aggressive form of split horizon.

**Question 5:**
If a router using Dijkstra's algorithm has the following distances to other nodes (where 'U' is the set of unvisited nodes):
Distances: {A:0, B:3, C:5, D:∞}
Visited: {A}
Unvisited: {B, C, D}
The cost from A to B is 3. The cost from A to C is 5. The cost from B to C is 1.

Which node will the algorithm select next to move from the unvisited set to the visited set?

**Answer:**
The algorithm selects the unvisited node with the smallest tentative distance. In this case, **Node B** has the smallest distance (3) among the unvisited nodes (B, C, D). So, Node B will be selected next.

---

## Important Points to Remember

*   **Routing Algorithms are the heart of the Network Layer's forwarding decision.** They enable routers to build and maintain the information needed to forward packets efficiently and reliably.
*   **Link-State vs. Distance-Vector represents a fundamental trade-off** between the level of network knowledge, convergence speed, overhead, and implementation complexity.
*   **Dijkstra's algorithm is a classic shortest-path algorithm** used by link-state protocols. It requires non-negative edge weights.
*   **The Bellman-Ford equation underlies distance-vector updates.**
*   **Count-to-infinity is a significant challenge for distance-vector algorithms,** requiring specific mechanisms like split horizon and poison reverse for mitigation.
*   **Understanding these algorithms is crucial for comprehending how the internet's routing infrastructure works**, as well as the design principles behind interior gateway protocols (IGPs) like OSPF and RIP.

---
This comprehensive set of study notes covers the core concepts of Link-State and Distance-Vector routing algorithms, aligning with the provided learning outcomes and course outcomes. The examples and questions aid in understanding and application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
