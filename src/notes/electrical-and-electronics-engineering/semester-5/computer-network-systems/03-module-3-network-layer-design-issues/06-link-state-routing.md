---
title: "Link State Routing"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36482"
status: "completed"
scrapedAt: "2026-05-23T16:20:10.718Z"
---
# Computer Network Systems: Module 3 - Network Layer Design Issues

## Topic: Link State Routing

**Course Outcome Alignment:** This topic primarily aligns with **CO3**, which focuses on explaining routing algorithms.

**Knowledge Level:** K2 (Understanding)

---

### 1. Introduction to Routing

Routing is the process of selecting paths in a network along which to send network traffic. The network layer is responsible for routing datagrams from source to destination. The core question is: how do routers decide which path to take?

**Key Concepts:**

*   **Routers:** Devices that operate at the network layer, forwarding packets between different networks.
*   **Datagrams:** The basic unit of data exchanged at the network layer.
*   **Routing Table:** A data structure stored in a router that lists the paths to various network destinations.
*   **Routing Algorithm:** The logic used by routers to build and maintain their routing tables.

---

### 2. Classification of Routing Algorithms

Routing algorithms can be broadly classified into two main categories:

*   **Static Routing:** Routes are manually configured by a network administrator. Changes require manual intervention.
    *   **Pros:** Simple to implement in small, stable networks, predictable.
    *   **Cons:** Not scalable, difficult to manage in large or dynamic networks, does not adapt to network changes.
*   **Dynamic Routing:** Routers automatically learn about network topology and available paths through the exchange of routing information with other routers.
    *   **Pros:** Adapts to network changes (link failures, new links), automatically finds optimal paths, scalable.
    *   **Cons:** More complex to implement and manage, requires more processing power and bandwidth.

**Dynamic routing algorithms are further divided based on their approach:**

*   **Distance Vector Routing:** Each router shares its distance vector (a list of distances to all destinations) with its neighbors.
*   **Link State Routing:** Each router builds a complete map (topology) of the network and then calculates the shortest path to all destinations.

**This module focuses on Link State Routing.**

---

### 3. Link State Routing Explained

Link state routing algorithms aim to provide each router with enough information to build a complete picture of the network's topology. Each router then independently computes the shortest path to all destinations using an algorithm like Dijkstra's algorithm.

**Key Concepts:**

*   **Link State:** Information about the immediate neighborhood of a router, including the directly connected networks (links) and the cost (metric) associated with each link.
*   **Link State Packet (LSP) / Link State Advertisement (LSA):** A message broadcast by a router containing its link state information.
*   **Flooding:** The process of distributing LSPs to all other routers in the network.
*   **Dijkstra's Algorithm:** An algorithm used to find the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights.

**How it Works (Step-by-Step):**

1.  **Discovery:** Each router discovers its directly connected neighbors and the cost of the links to them.
    *   *Example:* Router A is connected to Router B with a link cost of 5, and to Router C with a link cost of 2.
2.  **Create Link State Packet (LSP):** Each router creates an LSP containing its own identifier, its list of neighbors, and the cost of each link to those neighbors.
    *   *Example LSP from Router A:* `[Router A, (B, 5), (C, 2)]`
3.  **Broadcast LSP:** Each router broadcasts its LSP to all other routers in the network. This broadcast is typically done using flooding.
4.  **Flooding:** When a router receives an LSP, it:
    *   Checks if it has seen this LSP before (using a sequence number and a unique LSP ID).
    *   If it's a new or updated LSP, it stores a copy of it and forwards it to all its neighbors *except* the one from which it received the LSP. This prevents immediate loops and ensures all routers eventually receive the LSP.
5.  **Build the Network Graph:** Once a router has received LSPs from all other routers, it has enough information to construct a complete map (graph) of the network topology. The nodes of the graph are routers and networks, and the edges represent links with their associated costs.
6.  **Calculate Shortest Paths:** Using Dijkstra's algorithm, each router independently calculates the shortest path from itself to every other destination in the network.
    *   Dijkstra's algorithm builds a shortest-path tree rooted at the current router.
7.  **Build Routing Table:** The shortest paths calculated by Dijkstra's algorithm are used to populate the router's routing table. For each destination network, the table will list the next hop router and the outgoing interface.

**Key Requirements for Link State Routing:**

*   **Reliable Flooding:** LSPs must be reliably delivered to all routers. Mechanisms like sequence numbers, acknowledgments (though often avoided for simplicity and speed), and aging timers are used.
*   **Dijkstra's Algorithm Implementation:** Routers need sufficient processing power to run Dijkstra's algorithm.
*   **Sufficient Memory:** Routers need enough memory to store the LSPs from all other routers and the network topology graph.

---

### 4. Advantages of Link State Routing

*   **Fast Convergence:** Link state routers can detect changes in the network and adapt quickly. When a link fails, an LSP is generated immediately by the adjacent routers, propagating the information rapidly.
*   **Guaranteed Loop-Free Paths:** Dijkstra's algorithm, when correctly implemented, is guaranteed to produce loop-free shortest paths.
*   **Knowledge of Entire Network:** Each router has a complete view of the network, allowing for more informed routing decisions.
*   **Scalability:** Generally scales better than distance vector routing in large networks.

---

### 5. Disadvantages of Link State Routing

*   **Computational Overhead:** Running Dijkstra's algorithm requires significant processing power, especially in large networks.
*   **Memory Requirements:** Storing LSPs and the network topology requires substantial memory.
*   **Bandwidth Consumption (Flooding):** The flooding of LSPs can consume significant network bandwidth, especially during periods of network instability or when LSPs are frequently updated.
*   **Complexity:** More complex to implement and manage than distance vector routing.

---

### 6. Key Components and Mechanisms

*   **Link State Packet (LSP):**
    *   **Router ID:** Unique identifier of the router originating the LSP.
    *   **Sequence Number:** Incremented for each new LSP originating from the same router. Used to detect old LSPs.
    *   **Age/Lifetime:** Timer that indicates how long the LSP is considered valid. Routers periodically re-advertise their LSPs.
    *   **Link State Information:** List of directly connected neighbors and the cost to each.
    *   **Checksum:** For error detection.
*   **Neighbor Discovery:** Routers typically use Hello packets to discover adjacent routers on the same network segment.
*   **Flooding Mechanism:**
    *   **Sequence Numbers:** Essential to prevent re-processing old LSPs and to detect cycles.
    *   **Acks (Optional):** Some protocols use acknowledgments to ensure LSP delivery, but this adds overhead.
    *   **Dampening:** Mechanisms to reduce the frequency of LSP generation for flapping links (links that repeatedly go up and down).
*   **Shortest Path First (SPF) Algorithm (Dijkstra's):**
    *   **Initialization:** Start with a set of visited nodes and an unvisited set. Initialize distances to infinity, except for the source node (distance 0).
    *   **Iteration:** Select the unvisited node with the smallest distance. Mark it as visited. For each neighbor of the visited node, update its distance if a shorter path is found through the current node.
    *   **Termination:** Repeat until all nodes are visited or the destination is reached.

---

### 7. Examples of Link State Routing Protocols

*   **Open Shortest Path First (OSPF):** The most widely used link state routing protocol in IP networks. It divides networks into areas to manage scalability.
    *   OSPF routers exchange LSAs.
    *   LSAs are flooded within an area.
    *   Different types of LSAs exist for different purposes (router LSAs, network LSAs, summary LSAs, etc.).
    *   Uses Dijkstra's algorithm to calculate shortest paths.
    *   Supports hierarchical routing by using areas.
*   **Intermediate System to Intermediate System (IS-IS):** Another link state routing protocol, often used in large service provider networks. It operates at Layer 2.5 (between the data link and network layers).

---

### 8. Comparison with Distance Vector Routing (Brief Recap for Context)

| Feature          | Link State Routing                               | Distance Vector Routing                       |
| :--------------- | :----------------------------------------------- | :-------------------------------------------- |
| **Information**  | Full network topology                            | Distances to destinations                     |
| **Update Trigger** | Any topology change                              | Periodic updates; triggered by neighbor changes |
| **Convergence**  | Fast                                             | Slower                                        |
| **Path Guarantee** | Loop-free (with Dijkstra)                        | Prone to loops (e.g., count-to-infinity)      |
| **Complexity**   | Higher (computational and memory)                | Lower                                         |
| **Bandwidth**    | LSP flooding can be high initially/during changes | Periodic updates can be high                  |
| **Example**      | OSPF, IS-IS                                      | RIP, EIGRP (hybrid)                           |

---
