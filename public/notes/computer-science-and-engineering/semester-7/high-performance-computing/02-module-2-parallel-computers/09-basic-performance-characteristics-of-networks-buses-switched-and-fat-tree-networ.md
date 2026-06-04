---
title: "Basic performance characteristics of networks, Buses, Switched and fat-tree networks"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c628"
status: "completed"
scrapedAt: "2026-05-20T17:07:11.040Z"
---
# HIGH PERFORMANCE COMPUTING
## Module 2: Parallel Computers
### Topic: Basic Performance Characteristics of Networks, Buses, Switched and Fat-Tree Networks

---

## 1. Introduction to Interconnection Networks in HPC

In High Performance Computing (HPC), parallel computers rely on interconnection networks to enable communication between processing elements (PEs) or nodes. The efficiency and speed of this communication directly impact the overall performance of the parallel application. This module explores the fundamental performance characteristics of different network topologies commonly used in HPC.

---

## 2. Key Performance Characteristics of Interconnection Networks

Understanding these characteristics is crucial for designing and selecting appropriate networks for specific HPC workloads.

### 2.1. Latency

*   **Definition:** The time taken for a single packet of data to travel from its source to its destination.
*   **Impact:** High latency can significantly slow down applications that involve frequent, small messages between processors. This is especially critical for tightly coupled parallel applications.
*   **Factors Affecting Latency:**
    *   **Propagation Delay:** The time it takes for an electrical signal to travel across the physical medium.
    *   **Queuing Delay:** The time spent waiting in buffers at intermediate nodes or routers due to network congestion.
    *   **Transmission Delay:** The time taken to transmit all bits of a packet onto the link.
    *   **Processing Delay:** The time taken by routers to process packet headers and make forwarding decisions.

### 2.2. Bandwidth

*   **Definition:** The maximum rate at which data can be transferred between two points in the network. It's often measured in bits per second (bps) or bytes per second (Bps).
*   **Impact:** High bandwidth is essential for applications that transfer large amounts of data between processors. This is critical for data-intensive parallel algorithms.
*   **Types of Bandwidth:**
    *   **Link Bandwidth:** The bandwidth of individual communication links (e.g., Ethernet, InfiniBand).
    *   **Aggregate Bandwidth:** The total bandwidth available across all links in the network.
    *   **Bisection Bandwidth:** The minimum bandwidth between two halves of the network. This is a critical measure for parallel systems as it represents the bottleneck for many communication patterns.

### 2.3. Throughput

*   **Definition:** The actual rate at which data is successfully delivered over a period of time. It's often lower than bandwidth due to factors like latency, packet loss, and protocol overhead.
*   **Impact:** Throughput represents the "real-world" performance of data transfer. An application's performance is ultimately limited by the achievable throughput.

### 2.4. Network Topology

*   **Definition:** The physical or logical arrangement of nodes and links in an interconnection network. The topology significantly influences latency, bandwidth, scalability, and cost.
*   **Key Considerations:**
    *   **Diameter:** The maximum distance (in number of hops) between any two nodes in the network. Lower diameter generally leads to lower latency.
    *   **Degree:** The number of links connected to a single node. Higher degree can increase bandwidth and reduce latency but also increases complexity and cost.
    *   **Scalability:** How well the network's performance and cost scale as the number of nodes increases.

---

## 3. Common Network Topologies and Their Characteristics

We will now examine the performance characteristics of specific network types.

### 3.1. Buses

*   **Description:** A shared communication medium where all nodes are connected to a single, common line. Data is broadcast to all nodes, and only the intended recipient accepts the data.
*   **Key Concepts:**
    *   **Shared Medium:** All nodes contend for access to the bus.
    *   **Arbitration:** A mechanism is needed to decide which node gets to transmit at any given time (e.g., Time Division Multiplexing (TDM), Priority Arbitration).
*   **Performance Characteristics:**
    *   **Latency:** Can be relatively low for a small number of nodes as there are no intermediate hops. However, it increases with the number of nodes due to contention and arbitration delays.
    *   **Bandwidth:** **Severely limited**. All nodes share the same bandwidth. As more nodes are added, the effective bandwidth per node decreases significantly.
    *   **Scalability:** **Poor**. Buses are not scalable for a large number of nodes due to bandwidth limitations and contention.
    *   **Cost:** Relatively simple and inexpensive for small systems.
*   **Example:** Early microprocessors used buses to connect the CPU, memory, and I/O devices. In HPC, simple internal buses within a compute node might connect CPUs to memory or PCIe devices.
*   **Important Point to Remember:** Buses are suitable only for very small, tightly coupled systems where communication is infrequent or data transfer volumes are low. They become a significant bottleneck quickly.

### 3.2. Switched Networks

*   **Description:** Networks where communication between nodes is facilitated by switching elements (switches). Each link connects to a switch port, and switches intelligently route data packets to their destinations. This avoids the contention inherent in buses.
*   **Key Concepts:**
    *   **Switches:** Network devices that receive, buffer, and forward data packets based on destination addresses.
    *   **Routing:** Algorithms used by switches to determine the path a packet takes through the network.
    *   **Congestion:** Occurs when multiple packets arrive at a switch port or buffer simultaneously, leading to queuing delays.
*   **Performance Characteristics:**
    *   **Latency:** Generally lower than buses for larger systems, especially with efficient routing. However, latency can increase with the number of hops and switch contention.
    *   **Bandwidth:** **Much higher than buses**. Each link can operate at its full bandwidth independently, as long as the switch can handle the traffic.
    *   **Scalability:** **Good**, but depends heavily on the switch architecture and how they are interconnected.
    *   **Cost:** More complex and expensive than buses due to the cost of switches and more complex cabling.
*   **Types of Switched Networks (Topology Examples):**
    *   **Point-to-Point Networks:** Each node is connected to a switch, and switches are interconnected to form the network.
    *   **Common Topologies using Switches:**
        *   **Mesh (2D, 3D, etc.):** Nodes are arranged in a grid-like structure. Communication occurs between neighboring nodes.
            *   *Latency:* Increases with distance from the source to destination. Diameter increases with dimension.
            *   *Bandwidth:* Can be good if bisection bandwidth is high, but can be a bottleneck if communication patterns are not localized.
            *   *Scalability:* Moderate.
        *   **Torus:** Similar to a mesh but with wrap-around connections (edges connect to opposite edges), reducing diameter.
            *   *Latency:* Lower than mesh due to reduced diameter.
            *   *Bandwidth:* Similar to mesh.
            *   *Scalability:* Moderate.
        *   **Hypercube:** A highly connected network where nodes represent vertices of a hypercube. Each node differs from its neighbors by only one bit in their binary address.
            *   *Latency:* Very low due to small diameter (log2(N) hops).
            *   *Bandwidth:* High.
            *   *Scalability:* Good, but wiring complexity increases with dimension.
            *   *Cost:* High due to many connections per node.
*   **Example:** Modern HPC clusters often use switched networks like InfiniBand or Ethernet with switches to connect hundreds or thousands of compute nodes.
*   **Important Point to Remember:** Switched networks offer a significant improvement over buses by providing dedicated communication paths and better bandwidth. The choice of switch topology is crucial for performance.

### 3.3. Fat-Tree Networks

*   **Description:** A hierarchical network topology inspired by the structure of biological trees, but with more interconnections at higher levels to provide higher bandwidth. It aims to provide non-blocking or low-blocking communication.
*   **Key Concepts:**
    *   **Hierarchical Structure:** Organized into layers of switches (e.g., edge switches, aggregation switches, core switches).
    *   **Increasing Bandwidth Upwards:** The number of links and bandwidth generally increase as you move from the leaves (connected to PEs) towards the root.
    *   **Uniform Bisection Bandwidth:** A key characteristic is that any cut through the network divides it into two halves with equal total bandwidth. This means no single link is a bottleneck for communication between any two halves of the network.
*   **Performance Characteristics:**
    *   **Latency:** Generally low and predictable. Latency is primarily determined by the number of switch hops, which is logarithmic with the number of nodes.
    *   **Bandwidth:** **Excellent**, particularly the bisection bandwidth. This makes fat-trees ideal for applications with all-to-all communication patterns or those that benefit from high aggregate bandwidth.
    *   **Scalability:** **Excellent**. Fat-trees scale very well to a large number of nodes. Adding more nodes typically involves adding more layers or switches, maintaining predictable performance.
    *   **Cost:** Can be expensive due to the large number of high-speed switches and cables required. The number of switches grows significantly with the number of nodes.
*   **Example:** InfiniBand HDR and NDR networks often employ fat-tree topologies. Many modern supercomputers utilize fat-tree networks for their high performance and scalability.
*   **Important Point to Remember:** Fat-tree networks are designed to provide uniform, high bisection bandwidth, making them a top choice for demanding HPC workloads that require efficient communication between any pair of nodes.

---

## 4. Practice Questions and Answers

**Question 1:**
Which network topology is characterized by a single shared communication medium where all nodes contend for access, leading to severe bandwidth limitations as the number of nodes increases?
A) Mesh
B) Fat-Tree
C) Bus
D) Hypercube

**Answer 1:**
C) Bus. Buses use a shared medium, which causes contention and limits bandwidth, making them unsuitable for large-scale systems.

---

**Question 2:**
Define "bisection bandwidth" and explain why it is a critical performance metric for parallel computers.

**Answer 2:**
Bisection bandwidth is the minimum bandwidth between two halves of a network. It's critical because many parallel applications require communication between different parts of the system, and a low bisection bandwidth can become a major bottleneck, limiting overall performance.

---

**Question 3:**
What is the primary advantage of a fat-tree network compared to a simple mesh network in terms of performance characteristics?

**Answer 3:**
The primary advantage of a fat-tree network is its uniform and high bisection bandwidth. This means that communication between any two halves of the network is not bottlenecked by a small number of links, which is often the case in mesh networks, especially for non-localized communication patterns.

---

**Question 4:**
List three factors that contribute to the latency of a packet in an interconnection network.

**Answer 4:**
Three factors contributing to packet latency are:
1.  **Propagation Delay:** Time for the signal to travel across the physical link.
2.  **Queuing Delay:** Time spent waiting in buffers at intermediate routers due to congestion.
3.  **Processing Delay:** Time taken by routers to process packet headers and make forwarding decisions.
(Transmission delay is also a valid answer).

---

**Question 5:**
Consider a cluster of 1024 nodes. If you were to design an interconnection network for an application that involves frequent all-to-all communication, which of the following topologies would likely provide the best performance and scalability, and why?
A) A single, large bus
B) A 10x10x11 Mesh
C) A Fat-Tree network
D) A simple ring topology

**Answer 5:**
C) A Fat-Tree network.
**Reasoning:**
*   **A) Single, large bus:** Would suffer from extreme contention and extremely low bandwidth, making it unusable for 1024 nodes.
*   **B) 10x10x11 Mesh:** While better than a bus, a mesh has a diameter that grows with its dimensions. For all-to-all communication, messages would have to traverse many hops, leading to high latency and potential bottlenecks if the bisection bandwidth is not sufficient.
*   **C) Fat-Tree network:** Fat-trees are specifically designed to provide uniform high bisection bandwidth. This is crucial for all-to-all communication, as it ensures that all nodes can communicate with each other efficiently without significant bottlenecks. Their logarithmic diameter also contributes to low latency.
*   **D) Simple ring topology:** A ring has a diameter of N/2, which can be large for 1024 nodes, leading to high latency for non-neighboring communication. Its bisection bandwidth is also limited to the bandwidth of a single link.

---

## 5. Summary and Key Takeaways

*   **Latency and Bandwidth** are the two most critical performance characteristics of interconnection networks.
*   **Buses** are simple and cheap but have **poor scalability and very limited bandwidth** due to shared medium contention.
*   **Switched Networks** offer better performance by using switches to route traffic, providing higher bandwidth and lower latency than buses. Various topologies like **Meshes and Hypercubes** fall under this category.
*   **Fat-Tree Networks** are designed for **high bisection bandwidth and excellent scalability**. They are ideal for applications with heavy communication requirements and are a preferred choice for modern large-scale HPC systems.
*   The **choice of network topology** directly impacts the performance of parallel applications by influencing how efficiently processors can exchange data.

---
