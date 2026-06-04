---
title: "Routing and Forwarding"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff04f"
status: "completed"
scrapedAt: "2026-05-23T18:00:06.944Z"
---
# Computer Networks: Module 3 - Network Layer: Routing and Forwarding

This module delves into the crucial functions of the Network Layer: **Routing** and **Forwarding**. We will explore how data packets navigate through the internet and the mechanisms that enable this complex process.

---

## 3.1 Introduction to Routing and Forwarding

### 3.1.1 The Goal of the Network Layer

The Network Layer's primary responsibility is to move packets from a source host to a destination host. This often involves traversing multiple intermediate nodes (routers).

### 3.1.2 Key Functions of the Network Layer

*   **Logical Addressing:** Assigning unique IP addresses to hosts and routers. (Relates to CO3)
*   **Routing:** Determining the path that packets take from source to destination. (Relates to CO3)
*   **Forwarding:** Moving a packet from an input link to an output link within a router. (Relates to CO3)
*   **Packet Fragmentation and Reassembly:** Breaking down large packets into smaller ones for transmission and reassembling them at the destination. (Mentioned in textbooks but less focus in this specific topic)

### 3.1.3 Routing vs. Forwarding

It's crucial to distinguish between these two closely related concepts:

*   **Routing:** The **global process** of determining the end-to-end paths that packets should take from source to destination. Routing algorithms operate on **routers** and build **routing tables**. Think of it as planning the entire journey.
    *   **Kurose & Ross:** Emphasize routing as the "network-wide process of finding good paths."
    *   **Forouzan:** Defines routing as "the process of selecting paths in a network along which to send network traffic."
*   **Forwarding:** The **local action** within a router to move a packet from an input link to an output link. This process uses the information stored in the **forwarding table** (often derived from the routing table). Think of it as the immediate step of driving to the next intersection.
    *   **Kurose & Ross:** Describe forwarding as "the router function of sending a packet on its way to its final destination."
    *   **Forouzan:** Defines forwarding as "the process of moving a packet from an incoming link to an outgoing link."

**Analogy:** Imagine sending a letter via postal service.
*   **Routing:** The postal service decides which cities the letter will pass through to reach its final destination. This decision is based on established routes and efficiency.
*   **Forwarding:** When the letter arrives at a post office in a specific city, the postal worker looks at the destination address and places it in the mailbag for the next city on its journey.

---

## 3.2 Routing Algorithms

Routing algorithms are the "brains" behind determining the paths. They can be broadly categorized:

### 3.2.1 Global Routing Algorithms (Link-State)

*   **Description:** Each router has complete knowledge of the network topology (all nodes, all links, and their link costs). This information is obtained by flooding link-state packets (LSPs) to all other routers in the network. Once a router has the complete topology, it can run an algorithm (like Dijkstra's algorithm) to compute the shortest path to all other destinations.
*   **Key Concepts:**
    *   **Link State:** Information about a router's directly connected links (neighbor, link cost).
    *   **Link-State Packet (LSP):** A message containing a router's link-state information.
    *   **Flooding:** The process of sending an LSP to all other routers in the network.
    *   **Dijkstra's Algorithm:** A shortest path algorithm used to compute the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights.
*   **How it works:**
    1.  Each router broadcasts its link state to all other routers in the network (flooding).
    2.  Each router accumulates all LSPs and builds a complete map of the network topology.
    3.  Each router independently runs Dijkstra's algorithm using its topology map to compute the shortest path to every other destination.
    4.  The router then constructs its forwarding table based on these shortest paths.
*   **Advantages:**
    *   All routers have the same view of the network, leading to consistent routing decisions.
    *   Quickly detects and adapts to network changes.
*   **Disadvantages:**
    *   High overhead due to flooding LSPs.
    *   Requires significant computational resources to run Dijkstra's algorithm on a large network.
*   **Examples:**
    *   **Open Shortest Path First (OSPF):** The most widely used link-state routing protocol in the Internet (specifically within an Autonomous System).
    *   **Intermediate System to Intermediate System (IS-IS):** Another link-state protocol used in large service provider networks.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Dedicates a significant portion to link-state routing and Dijkstra's algorithm.
    *   **Forouzan:** Explains the concept and uses OSPF as an example.
*   **CO Alignment:** CO3 (Analyze the concept of routing).

### 3.2.2 Decentralized Routing Algorithms (Distance-Vector)

*   **Description:** Each router only knows about its directly connected neighbors and the distance (cost) to reach them. It receives distance information from its neighbors and uses this to update its own distance-vector table. The "vector" refers to the set of distances to all destinations.
*   **Key Concepts:**
    *   **Distance Vector Table:** A table maintained by each router, containing the estimated distance (cost) to each destination and the next hop to reach that destination.
    *   **Bellman-Ford Algorithm:** The underlying algorithm that distance-vector routing protocols use to compute shortest paths. It iteratively updates distances based on information from neighbors.
    *   **"Information from neighbors":** Each router periodically sends its entire distance-vector table to its direct neighbors.
*   **How it works:**
    1.  Initialization: Each router sets the distance to its directly connected neighbors to the link cost and infinity to all other destinations.
    2.  Periodic Updates: Each router periodically sends its distance-vector table to its direct neighbors.
    3.  Receiving Updates: When a router receives a distance-vector table from a neighbor, it updates its own table using the Bellman-Ford equation:
        `Dx(y) = min {c(x,v) + Dx-1(y)}`
        where:
        *   `Dx(y)` is the distance from router `x` to destination `y` in the current iteration.
        *   `c(x,v)` is the cost of the link between router `x` and router `v`.
        *   `Dx-1(y)` is the distance from router `v` to destination `y` as known by router `v` in the previous iteration.
    4.  The router updates its next-hop entry for `y` to `v` if the path through `v` provides the minimum distance.
*   **Advantages:**
    *   Simpler to implement than link-state algorithms.
    *   Lower overhead in terms of information exchange compared to flooding.
*   **Disadvantages:**
    *   **Count-to-Infinity Problem:** Can be slow to converge, especially in large networks, leading to routing loops where packets are repeatedly forwarded between two or more routers.
    *   **Routing Loops:** A significant drawback that requires mechanisms like split horizon and poison reverse to mitigate.
    *   **Less efficient convergence:** Takes longer to adapt to network changes.
*   **Examples:**
    *   **Routing Information Protocol (RIP):** An older distance-vector protocol used in smaller networks.
    *   **Interior Gateway Routing Protocol (IGRP) / Enhanced IGRP (EIGRP):** Cisco proprietary routing protocols, with EIGRP being a hybrid that incorporates some link-state features.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Explains the Bellman-Ford algorithm and the count-to-infinity problem in detail.
    *   **Forouzan:** Provides a good overview of distance-vector routing, including its update process and limitations.
    *   **Peterson & Davie:** Discusses the fundamental principles of distance-vector routing.
*   **CO Alignment:** CO3 (Analyze the concept of routing).

### 3.2.3 Hybrid Routing Algorithms

*   **Description:** These algorithms combine features of both link-state and distance-vector routing to leverage the advantages of both.
*   **Example:**
    *   **Enhanced Interior Gateway Routing Protocol (EIGRP):** Cisco's proprietary protocol that uses a diffusing update algorithm (DUAL) which is essentially a sophisticated distance-vector algorithm with rapid convergence and loop prevention. It uses a combination of metrics (bandwidth, delay, load, reliability) for path selection.

---

## 3.3 Forwarding in Routers

Forwarding is the core operation of a router: getting a packet from an input port to the correct output port.

### 3.3.1 The Forwarding Table

*   **Description:** A data structure within a router that maps destination IP addresses (or prefixes) to output links. This table is populated by the routing algorithm.
*   **Key Components:**
    *   **Destination Network Prefix:** A range of IP addresses (e.g., 192.168.1.0/24).
    *   **Next Hop:** The IP address of the next router to send the packet to, or the output interface.
    *   **Interface:** The physical or logical interface on the router through which the packet should be sent.
*   **How it's used:** When a packet arrives at a router, the router examines the destination IP address in the packet header. It then consults its forwarding table to find the entry that best matches the destination IP address (usually the longest prefix match). The packet is then sent out the corresponding output interface.

### 3.3.2 The Forwarding Process (Simplified)

1.  **Packet Arrival:** A packet arrives at an input port of the router.
2.  **Header Examination:** The router's control plane (or forwarding engine) examines the destination IP address in the packet header.
3.  **Forwarding Table Lookup:** The destination IP address is used to search the forwarding table.
4.  **Output Interface Selection:** The forwarding table provides the output interface for the packet.
5.  **Packet Transmission:** The packet is queued and transmitted onto the selected output interface.

### 3.3.3 Longest Prefix Match

*   **Description:** When a destination IP address can match multiple entries in the forwarding table, the router selects the entry with the **longest matching network prefix**. This ensures that packets are routed to the most specific destination network.
*   **Example:**
    *   Forwarding Table:
        *   192.168.1.0/24 -> Interface A
        *   192.168.1.0/25 -> Interface B
        *   192.168.0.0/16 -> Interface C
    *   If a packet arrives with destination IP `192.168.1.50`:
        *   `192.168.1.0/24` matches (24 bits).
        *   `192.168.1.0/25` matches (25 bits).
        *   `192.168.0.0/16` matches (16 bits).
    *   The longest prefix match is `192.168.1.0/25`. The packet will be forwarded out **Interface B**.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Explains the importance of the longest prefix match rule.
    *   **Forouzan:** Also highlights this crucial aspect of forwarding.
*   **CO Alignment:** CO3 (Analyze the concept of routing).

### 3.3.4 Router Architecture

A router consists of several key components:

*   **Input Ports:** Where packets enter the router. They perform link-layer and network-layer processing, including IP header lookup.
*   **Switching Fabric:** Connects the input ports to the output ports. This is the heart of the router's speed. The speed of the switching fabric determines the router's overall throughput.
    *   **Memory-based switching:** Packets are copied between memory spaces. Slower.
    *   **Bus-based switching:** Packets are sent over a shared bus. Can be a bottleneck.
    *   **Crossbar switching:** Multiple parallel buses allow simultaneous transfers. Fastest.
*   **Output Ports:** Where packets exit the router. They perform link-layer framing and transmission.
*   **Routing Processor (Control Plane):** Runs routing algorithms, builds the forwarding table, and communicates with other routers.
*   **Forwarding Engine (Data Plane):** Performs the high-speed forwarding of packets based on the forwarding table. This needs to be extremely fast.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Provides a detailed breakdown of router architecture, emphasizing the separation of control and data planes and the performance considerations of the switching fabric.
    *   **Peterson & Davie:** Also offers a comprehensive view of router internal workings.
*   **CO Alignment:** CO1 (Summarize principles and components of computer networks).

---

## 3.4 Routing in Datagram Networks vs. Virtual Circuit Networks

This topic directly addresses the "Datagram versus virtual" aspect of the module.

### 3.4.1 Datagram Networks (e.g., Internet Protocol - IP)

*   **Routing:** Each packet is routed independently. The path taken by a packet can vary even if it's from the same source to the same destination. Routing decisions are made at each router based on the destination IP address in the packet header and the router's current forwarding table.
*   **Forwarding:** The forwarding table is consulted for every packet. Routers do not maintain per-flow state for routing purposes.
*   **Key Characteristics:**
    *   **Connectionless:** No call setup required. Packets can be sent immediately.
    *   **Best-Effort Delivery:** No guarantee of delivery, order, or timeliness.
    *   **Robustness:** If a router fails, subsequent packets can be rerouted.
    *   **Flexibility:** Allows for dynamic path selection and load balancing.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Clearly contrasts datagram and virtual circuit approaches.
    *   **Forouzan:** Explains the datagram approach as used in the Internet.
*   **CO Alignment:** CO2 (Demonstrate protocols and functions of different layers - IP is a key example), CO3 (Analyze routing and addressing).

### 3.4.2 Virtual Circuit Networks (e.g., ATM, Frame Relay)

*   **Routing:** A **virtual circuit (VC)** is established between the source and destination before data transmission begins. This path is fixed for the duration of the connection. During connection setup, a path is chosen, and routers along the path create **forwarding tables** specifically for that VC.
*   **Forwarding:** Each packet belonging to a specific VC carries a **virtual circuit identifier (VCI)**. Routers use the VCI to look up the next hop and the corresponding VCI to forward the packet. This is much faster than a full IP address lookup.
*   **Key Characteristics:**
    *   **Connection-Oriented:** Requires a setup phase to establish the VC.
    *   **Guaranteed Services:** Can provide quality of service (QoS) guarantees (e.g., bandwidth, delay).
    *   **Efficient Forwarding:** Once the VC is established, forwarding is very fast as it uses shorter VCI identifiers.
    *   **Less Robust to Router Failures:** If a router in the VC fails, the entire VC is lost, and a new one must be established.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Provides a good comparison between datagram and virtual circuit networks.
    *   **Forouzan:** Explains virtual circuit networks and protocols like ATM.
    *   **Tanenbaum & Wetherall:** Offers insights into the architecture of virtual circuit networks.
*   **CO Alignment:** CO2 (Demonstrate protocols and functions of different layers), CO3 (Analyze routing and addressing).

---

## 3.5 Interior vs. Exterior Gateway Protocols

Routing occurs within and between networks.

### 3.5.1 Interior Gateway Protocols (IGPs)

*   **Description:** Protocols used for routing within a single **Autonomous System (AS)**. An AS is a collection of networks under a single administrative domain.
*   **Examples:**
    *   **RIP (Routing Information Protocol):** Distance-vector (older).
    *   **OSPF (Open Shortest Path First):** Link-state.
    *   **IS-IS (Intermediate System to Intermediate System):** Link-state.
    *   **EIGRP (Enhanced Interior Gateway Routing Protocol):** Hybrid.
*   **Goal:** To find the best path within the AS, often based on minimizing hop count or link cost.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Details OSPF and RIP as examples of IGPs.
    *   **Forouzan:** Covers RIP and OSPF within the context of internal routing.
*   **CO Alignment:** CO3 (Analyze the concept of routing).

### 3.5.2 Exterior Gateway Protocols (EGPs)

*   **Description:** Protocols used for routing between different **Autonomous Systems (ASs)**. The Internet is composed of thousands of ASs.
*   **Example:**
    *   **BGP (Border Gateway Protocol):** The de facto standard EGP used on the Internet. BGP is a **path-vector routing protocol**.
*   **Goal:** To exchange reachability information between ASs and determine the best path based on policies, not just shortest paths. BGP routers exchange "paths" (sequences of ASs) to reach destination networks.
*   **Key Concepts of BGP:**
    *   **Path Vector:** Instead of just distance, BGP advertises the full path (sequence of ASs) to reach a destination network.
    *   **Policy-Based Routing:** BGP routers make routing decisions based on business agreements and policies between ASs, not just network topology.
    *   **Peering Agreements:** ASs establish peering relationships to exchange routing information.
    *   **External BGP (eBGP):** Used between routers in different ASs.
    *   **Internal BGP (iBGP):** Used between routers within the same AS to propagate eBGP learned routes.
*   **Textbook Reference:**
    *   **Kurose & Ross:** Dedicated sections to BGP and its role in the Internet's inter-AS routing.
    *   **Forouzan:** Explains BGP as the protocol that links ASs together.
    *   **Peterson & Davie:** Offers a deeper dive into BGP's operational aspects.
*   **CO Alignment:** CO3 (Analyze the concept of routing and addressing protocols).

---

## 3.6 Key Points to Remember

*   **Routing** is the process of determining paths, while **Forwarding** is the act of moving packets along those paths.
*   **Link-State** algorithms provide a global view of the network, enabling efficient path computation using Dijkstra's algorithm. OSPF is a prime example.
*   **Distance-Vector** algorithms rely on local information exchanged with neighbors and are prone to convergence issues and loops. RIP is a classic example.
*   The **Forwarding Table** is crucial for forwarding and is often built using the **longest prefix match** rule.
*   Routers have distinct **control planes** (routing decisions) and **data planes** (packet forwarding).
*   **Datagram networks** route packets independently, offering flexibility but no guarantees.
*   **Virtual Circuit networks** establish fixed paths, allowing for QoS but are less robust.
*   **IGPs** (like OSPF, RIP) route within an AS, while **EGPs** (like BGP) route between ASs. BGP uses **path vectors** and **policy-based routing**.

---

## 3.7 Practice Questions and Answers

**Question 1:** Differentiate between routing and forwarding. (CO3, K2)

**Answer:** Routing is the global process of determining the end-to-end paths that packets should take from source to destination by building routing tables. Forwarding is the local action within a router to move a packet from an input link to an output link using the forwarding table.

**Question 2:** What is the primary algorithm used by link-state routing protocols? (CO3, K2)

**Answer:** Dijkstra's algorithm.

**Question 3:** Explain the "count-to-infinity" problem in distance-vector routing and suggest a method to mitigate it. (CO3, K3)

**Answer:** The count-to-infinity problem occurs when routing loops form, causing distance estimates to increase incrementally until they reach infinity. This leads to slow convergence. A mitigation technique is **split horizon**, where a router does not advertise a route back to the neighbor from which it learned that route. Another is **poison reverse**, where a router advertises a route back to the neighbor from which it learned it, but with an infinite metric, effectively "poisoning" the route.

**Question 4:** A router has the following entries in its forwarding table:
    *   10.0.0.0/8 -> Interface A
    *   10.1.0.0/16 -> Interface B
    *   10.1.2.0/24 -> Interface C

    If a packet arrives with the destination IP address 10.1.2.15, which interface will the packet be forwarded to? Explain your reasoning. (CO3, K3)

**Answer:** The packet will be forwarded to **Interface C**. This is because of the **longest prefix match** rule.
*   10.0.0.0/8 matches the first 8 bits.
*   10.1.0.0/16 matches the first 16 bits.
*   10.1.2.0/24 matches the first 24 bits.

The longest matching prefix is 10.1.2.0/24, so the packet is sent out Interface C.

**Question 5:** Briefly describe the fundamental difference in how routing decisions are made in datagram networks versus virtual circuit networks. (CO2, CO3, K2)

**Answer:** In datagram networks, each packet is routed independently at each router based on its destination address and the router's current forwarding table. In virtual circuit networks, a fixed path (virtual circuit) is established first, and packets belonging to that circuit are forwarded using a virtual circuit identifier, which is much faster.

**Question 6:** What is the role of BGP in the internet? Is it an IGP or an EGP? (CO3, K2)

**Answer:** BGP (Border Gateway Protocol) is the Exterior Gateway Protocol (EGP) that routes traffic between different Autonomous Systems (ASs) on the Internet. It determines the best path for inter-AS routing based on policies and path vectors, rather than just shortest paths.

---

This concludes Module 3, covering the foundational concepts of routing and forwarding in computer networks. Understanding these mechanisms is critical to grasping how data traverses the vastness of the internet.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
