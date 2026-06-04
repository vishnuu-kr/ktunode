---
title: "Static routing and Dynamic routing."
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff050"
status: "completed"
scrapedAt: "2026-05-23T18:00:07.677Z"
---
# Computer Networks: Module 3 - Network Layer: Routing Protocols

## Topic: Static Routing vs. Dynamic Routing

This module explores the fundamental mechanisms by which data packets navigate through interconnected networks. Specifically, we will delve into the two primary approaches to routing: **Static Routing** and **Dynamic Routing**. Understanding these concepts is crucial for comprehending how routers make forwarding decisions and for analyzing network performance.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **LO1:** Differentiate between static and dynamic routing approaches.
*   **LO2:** Explain the advantages and disadvantages of static routing.
*   **LO3:** Describe the principles of dynamic routing and its common algorithms.
*   **LO4:** Understand the role of routing protocols in network operation.
*   **LO5:** Analyze scenarios where static or dynamic routing is more appropriate.
*   **LO6:** Summarize how routing information is exchanged and maintained.

---

### Course Outcomes Alignment

This topic directly supports the following Course Outcomes:

*   **CO1 (K2):** Summarize the principles and components of computer networks, including the role of routers and basic concepts of network architecture.
*   **CO2 (K2):** Demonstrate an understanding of protocols and the functions of different layers, with a focus on the Network Layer and its routing functions.
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols in the context of computer networking, comparing static and dynamic approaches.

---

### 1. Introduction to Routing

**Routing** is the process of selecting paths in a network along which to send network traffic. Routers are the key devices responsible for this process. They maintain **routing tables** which contain information about network destinations and the next hop to reach them.

*   **Key Concept:** **Routing Table:** A data structure stored in a router that lists the routes to particular network destinations. Each entry typically includes:
    *   Destination Network Address
    *   Subnet Mask
    *   Next Hop IP Address (or Interface)
    *   Metric (e.g., hop count, bandwidth, delay)

*   **Reference (Kurose & Ross, Sixth Edition, Chapter 5):** The Network Layer is responsible for delivering datagrams from the source host to the destination host. Routing algorithms determine the paths along which these datagrams travel.

---

### 2. Static Routing

**Static routing** is a method where routing table entries are manually configured by a network administrator. Once configured, these routes remain fixed unless manually changed.

#### 2.1. How it Works

*   An administrator directly enters routes into the router's configuration.
*   Each entry specifies the destination network, the subnet mask, and the next-hop address or outgoing interface.
*   The router uses this information to forward packets.

#### 2.2. Advantages of Static Routing

*   **Simplicity:** Easy to configure for small, stable networks.
*   **Predictability:** Routes are fixed, making network behavior predictable.
*   **Security:** Less prone to misconfiguration or malicious route injection compared to dynamic routing.
*   **Resource Efficiency:** Does not consume router CPU or bandwidth for routing protocol updates.
*   **Control:** Administrators have complete control over traffic flow.

#### 2.3. Disadvantages of Static Routing

*   **Scalability Issues:** Becomes unmanageable in large or complex networks.
*   **Lack of Adaptability:** Cannot automatically adapt to network topology changes (e.g., link failures, new routes).
*   **Administrative Overhead:** Requires manual updates for any network changes, which can be time-consuming and error-prone.
*   **No Automatic Load Balancing:** Does not inherently support load balancing across multiple paths.

#### 2.4. When to Use Static Routing

*   **Small, simple networks:** Where topology changes are infrequent.
*   **Stub Networks:** Networks with only one way in or out.
*   **Default Routes:** To specify a default gateway for destinations not explicitly listed in the routing table.
*   **Specific Policy-Based Routing:** To force traffic through particular paths for security or policy reasons.

#### 2.5. Example

Consider a small office network with two routers (R1 and R2) and a central network segment.

**R1 Configuration (simplified):**

```
ip route 192.168.2.0 255.255.255.0 10.0.0.2  // Route to network 192.168.2.0 via R2 (IP 10.0.0.2)
ip route 0.0.0.0 0.0.0.0 10.0.0.2          // Default route via R2
```

**R2 Configuration (simplified):**

```
ip route 192.168.1.0 255.255.255.0 10.0.0.1  // Route to network 192.168.1.0 via R1 (IP 10.0.0.1)
ip route 0.0.0.0 0.0.0.0 10.0.0.1          // Default route via R1
```

In this example, if the link between R1 and R2 fails, the routers will not automatically find an alternative path. The administrator must manually update the routes.

---

### 3. Dynamic Routing

**Dynamic routing** allows routers to automatically learn about network topology changes and update their routing tables accordingly. This is achieved through **routing protocols**.

#### 3.1. How it Works

*   Routers running the same routing protocol exchange routing information with their neighbors.
*   This exchange of information helps routers build and maintain a complete picture of the network.
*   When a network change occurs (e.g., a link goes down), routers detect this and propagate the information, allowing other routers to update their routes.

#### 3.2. Advantages of Dynamic Routing

*   **Scalability:** Handles large and complex networks effectively.
*   **Adaptability:** Automatically adapts to network topology changes, ensuring path redundancy and fault tolerance.
*   **Load Balancing:** Can distribute traffic across multiple available paths.
*   **Reduced Administrative Overhead:** Less manual intervention required for route management.

#### 3.3. Disadvantages of Dynamic Routing

*   **Complexity:** More complex to configure and manage than static routing.
*   **Resource Consumption:** Requires router CPU, memory, and bandwidth for routing protocol operations and updates.
*   **Security Risks:** Can be vulnerable to routing loops and malicious attacks if not properly secured.
*   **Convergence Time:** Takes time for all routers to update their routing tables after a network change, during which there might be temporary routing instability.

#### 3.4. When to Use Dynamic Routing

*   **Medium to large networks:** Where manual configuration is impractical.
*   **Networks with frequent topology changes:** Such as those with redundant links or rapid growth.
*   **When fault tolerance and automatic failover are critical.**

---

### 4. Routing Protocols

Routing protocols are the languages that routers use to communicate routing information. They can be broadly classified into:

#### 4.1. Interior Gateway Protocols (IGPs)

IGPs are used for routing within an **Autonomous System (AS)**. An AS is a collection of IP networks and routers that is under the control of a single administrative entity.

##### 4.1.1. Distance-Vector Routing Protocols

*   **Concept:** Routers advertise their entire routing table to their directly connected neighbors. Each router maintains a table containing the "distance" (metric) to destination networks and the "vector" (next-hop router).
*   **Algorithm:**
    1.  Each router knows the distances to networks reachable from itself.
    2.  It periodically sends its entire routing table to its directly connected neighbors.
    3.  When a router receives an update from a neighbor, it compares the advertised distances with its own.
    4.  If a shorter path is found, the router updates its routing table.
    5.  This process continues iteratively until the routing tables stabilize.
*   **Key Characteristics:**
    *   **"Routing by Rumor":** Relies on information received from neighbors.
    *   **Bellman-Ford Algorithm:** The underlying mathematical principle.
    *   **Convergence:** Can be slow, leading to potential routing loops.
    *   **Count-to-Infinity:** A problem where a router's distance to a network keeps increasing, leading to routing loops.
*   **Examples:**
    *   **RIP (Routing Information Protocol):** One of the oldest and simplest distance-vector protocols.
        *   **Metric:** Hop count (maximum 15 hops; 16 is considered infinite).
        *   **Update Period:** Typically every 30 seconds.
        *   **Reference (Forouzan, Fourth Edition, Chapter 10):** RIP uses hop count as its metric and has a maximum hop count of 15.
    *   **IGRP (Interior Gateway Routing Protocol):** A Cisco proprietary protocol (now largely superseded by EIGRP).
        *   **Metric:** Composite metric including bandwidth, delay, load, and reliability.
    *   **EIGRP (Enhanced Interior Gateway Routing Protocol):** A Cisco proprietary protocol that blends features of distance-vector and link-state protocols. It uses the Diffusing Update Algorithm (DUAL) for fast convergence and loop prevention.

##### 4.1.2. Link-State Routing Protocols

*   **Concept:** Each router builds a complete map (topology) of the network and calculates the shortest path to each destination using Dijkstra's algorithm. Routers do not send their entire routing table; instead, they exchange **Link-State Advertisements (LSAs)**, which describe the state of their directly connected links.
*   **Algorithm:**
    1.  Each router establishes neighbor adjacencies.
    2.  When a link state changes, the router floods an LSA describing this change to all other routers in the AS.
    3.  Each router receives all LSAs and builds a complete network topology map (graph).
    4.  Dijkstra's algorithm is executed on this map to calculate the shortest path from the router to all other destinations.
    5.  The routing table is populated based on these shortest paths.
*   **Key Characteristics:**
    *   **"Global Knowledge":** Each router has a complete view of the network.
    *   **Dijkstra's Algorithm:** Used to find the shortest path.
    *   **Faster Convergence:** Generally converges faster than distance-vector protocols.
    *   **Less Prone to Routing Loops:** Due to the complete network view and shortest-path calculation.
    *   **Higher Resource Consumption:** Requires more CPU and memory for LSAs and Dijkstra's algorithm.
*   **Examples:**
    *   **OSPF (Open Shortest Path First):** A widely used, open-standard link-state protocol.
        *   **Metric:** Cost, typically derived from interface bandwidth.
        *   **Operation:** Divides the network into Areas for scalability.
        *   **Reference (Kurose & Ross, Sixth Edition, Chapter 5):** OSPF is a popular IGP that uses link-state principles.
    *   **IS-IS (Intermediate System to Intermediate System):** Another link-state protocol, often used in large service provider networks.

#### 4.2. Exterior Gateway Protocols (EGPs)

EGPs are used for routing between different Autonomous Systems (ASs). The primary EGP in use today is BGP.

*   **BGP (Border Gateway Protocol):**
    *   **Concept:** BGP is a path-vector routing protocol. Instead of sending distance or link states, BGP routers advertise the **paths** (sequences of ASs) they know to reach specific network prefixes.
    *   **Purpose:** Primarily used on the Internet to exchange reachability information between ASs.
    *   **Policy-Based Routing:** BGP is highly policy-driven, allowing ASs to influence the paths their traffic takes for business or technical reasons.
    *   **Metric:** Based on a set of attributes (e.g., AS-path length, origin, local preference, MED).
    *   **Reference (Kurose & Ross, Sixth Edition, Chapter 5):** BGP is the de facto standard EGP used on the Internet to route between different ASs.

---

### 5. Key Concepts and Terminology

*   **Autonomous System (AS):** A network or set of networks under a single administrative entity.
*   **Router Advertisement:** The process by which routers exchange routing information.
*   **Metric:** A value used by routing protocols to measure the "cost" of a path. Lower metrics generally indicate preferred paths.
*   **Hop Count:** The number of routers a packet must traverse to reach a destination.
*   **Convergence:** The state when all routers in a network have consistent and up-to-date routing tables.
*   **Routing Loop:** A situation where a packet gets stuck in a circular path between routers, never reaching its destination.
*   **Split Horizon:** A technique used in distance-vector routing to prevent routing loops by not advertising a route back to the neighbor from which it was learned.
*   **Poison Reverse:** A technique where a router advertises a route with an infinite metric back to the neighbor from which it was learned, effectively invalidating that route for that neighbor.
*   **Dijkstra's Algorithm:** A greedy algorithm that finds the shortest paths between nodes in a graph.
*   **Link-State Advertisement (LSA):** A packet exchanged by link-state routers describing the state of their links.

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary difference between static routing and dynamic routing in terms of how routing tables are updated?

**Answer 1:**
In static routing, routing table entries are manually configured by a network administrator and remain fixed. In dynamic routing, routers automatically learn about network topology changes and update their routing tables using routing protocols that exchange information with neighboring routers.

**Question 2:**
Name two advantages and two disadvantages of static routing.

**Answer 2:**
*   **Advantages:** Simplicity (for small networks), Security, Predictability, Resource Efficiency.
*   **Disadvantages:** Lack of Adaptability, Scalability Issues, High Administrative Overhead for changes.

**Question 3:**
Which type of routing protocol builds a complete map of the network topology and uses Dijkstra's algorithm?
a) Distance-Vector
b) Path-Vector
c) Link-State
d) Static Routing

**Answer 3:**
c) Link-State

**Question 4:**
What is the main purpose of an Exterior Gateway Protocol (EGP) like BGP?

**Answer 4:**
The main purpose of an EGP like BGP is to exchange routing information between different Autonomous Systems (ASs) on the Internet, allowing them to determine how to reach networks in other ASs.

**Question 5:**
Explain the "Count-to-Infinity" problem in distance-vector routing and how it can be mitigated.

**Answer 5:**
The "Count-to-Infinity" problem occurs when a link failure causes a router to continue receiving updates from a neighbor about a route that is no longer valid, leading to an ever-increasing metric. This can create routing loops. Mitigation techniques include **split horizon** and **poison reverse**. Split horizon prevents a router from advertising a route back to the interface from which it was learned. Poison reverse advertises the route with an infinite metric back to the originating neighbor, effectively invalidating it.

---

### 7. Important Points to Remember

*   **Static routing** is best for small, stable networks or specific policy needs due to its simplicity and control, but it lacks adaptability.
*   **Dynamic routing** is essential for larger, dynamic networks as it offers scalability and automatic adaptation to changes, but it comes with increased complexity and resource consumption.
*   **Distance-vector protocols** ("routing by rumor") are simpler but can be slow to converge and prone to loops.
*   **Link-state protocols** offer faster convergence and better loop prevention but require more router resources.
*   **IGPs** (like RIP, OSPF) are used within an Autonomous System.
*   **EGPs** (like BGP) are used between Autonomous Systems, forming the backbone of the Internet's routing.
*   The choice between static and dynamic routing depends on the size, complexity, and stability requirements of the network.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Further Reading and References

*   **Computer Networking: A Top-Down Approach Featuring the Internet** by Kurose & Ross, Sixth Edition, 2017: Chapter 5 on Network Layer (Routing Algorithms and Management). This book provides a clear, conceptual understanding of routing principles.
*   **Data Communications and Networking** by Behrouz A Forouzan, Fourth Edition, 2008: Chapter 10 on Routing Protocols. This text offers detailed explanations of protocols like RIP and OSPF.
*   **Computer Networks – A Systems Approach** by Peterson & Davie: Offers a systems-level perspective on network design and routing.
*   **Computer Networks** by Tanenbaum & Wetherall: Another classic text providing comprehensive coverage of networking concepts, including routing.

---

This concludes the study notes for Static Routing vs. Dynamic Routing. Understanding these concepts is fundamental to your grasp of network layer operations and how data traverses the internet.