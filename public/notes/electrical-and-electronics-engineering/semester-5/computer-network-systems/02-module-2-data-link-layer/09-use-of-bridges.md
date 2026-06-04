---
title: "Use of Bridges"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36476"
status: "completed"
scrapedAt: "2026-05-23T16:20:02.408Z"
---
## Computer Network Systems: Module 2 - Data Link Layer

### Topic: Use of Bridges

**1. Introduction to Bridges**

*   **Definition:** A bridge is a networking device that operates at the Data Link Layer (Layer 2) of the OSI model. Its primary function is to connect two or more network segments and forward data frames between them based on the MAC addresses of the source and destination devices.
*   **Purpose:**
    *   **Extend Network Reach:** Bridges can extend the physical reach of a LAN by connecting segments that are too far apart for a single cable run.
    *   **Reduce Traffic Congestion:** By filtering traffic, bridges isolate segments and prevent unnecessary traffic from propagating across the entire network, thereby reducing congestion.
    *   **Connect Different Media:** Bridges can connect network segments using different physical media (e.g., Ethernet to Fast Ethernet, or Ethernet to Wireless LAN).
    *   **Improve Performance:** By segmenting the network, bridges can improve overall performance by reducing collision domains.
*   **Operating Principle:** Bridges examine the destination MAC address of incoming frames and compare it with their learned MAC address table.
    *   If the destination MAC address is on the same segment as the source, the frame is discarded (filtered).
    *   If the destination MAC address is on a different segment, the frame is forwarded to that segment.
    *   If the destination MAC address is unknown, the frame is flooded (sent to all segments except the source segment).
*   **Learning MAC Addresses:** Bridges learn MAC addresses by examining the source MAC address of incoming frames. They maintain a MAC address table (also known as a forwarding table or bridge table) that maps MAC addresses to the specific network segment (port) on which they were learned.

**Key Concepts & Definitions:**

*   **MAC Address:** A unique 48-bit hardware address assigned to each network interface card (NIC).
*   **Collision Domain:** A network segment where collisions can occur. Devices within a collision domain compete for the shared medium.
*   **Broadcast Domain:** A network segment where broadcast frames are propagated.
*   **Filtering:** The process of discarding a frame that does not need to be forwarded.
*   **Forwarding:** The process of sending a frame to another segment.
*   **Flooding:** The process of sending a frame to all segments except the one it arrived from.
*   **MAC Address Table (Forwarding Table/Bridge Table):** A table maintained by a bridge that maps MAC addresses to the physical port on which the corresponding device is connected.

**2. How Bridges Work: The MAC Address Table**

A bridge builds its MAC address table dynamically. Here's a step-by-step process:

1.  **Frame Arrival:** When a frame arrives at a bridge on a specific port (e.g., Port 1).
2.  **Source MAC Address Examination:** The bridge examines the source MAC address of the frame.
3.  **Table Update:**
    *   If the source MAC address is already in the table, the bridge updates the associated port if the frame arrived on a different port. This accounts for devices moving between network segments.
    *   If the source MAC address is not in the table, the bridge adds an entry to the table, mapping the source MAC address to the port on which the frame arrived (e.g., MAC\_A learned on Port 1).
4.  **Destination MAC Address Examination:** The bridge examines the destination MAC address of the frame.
5.  **Table Lookup:** The bridge searches its MAC address table for the destination MAC address.
    *   **Case 1: Destination MAC Found (On the same port):** If the destination MAC address is found in the table and is associated with the same port from which the frame arrived, the bridge **filters** the frame (discards it). This is because the destination device is assumed to be on the same segment as the source, and sending the frame would cause unnecessary traffic and potential collisions.
    *   **Case 2: Destination MAC Found (On a different port):** If the destination MAC address is found in the table and is associated with a different port than the one from which the frame arrived, the bridge **forwards** the frame to that specific port.
    *   **Case 3: Destination MAC Not Found (or Broadcast/Multicast):** If the destination MAC address is not found in the table, or if it's a broadcast (all F's) or multicast address, the bridge **floods** the frame. This means the frame is sent to all other ports on the bridge except the one it arrived on. This ensures that the frame reaches its intended destination, even if the bridge hasn't learned its location yet.

**Example:**

Consider a bridge with three ports (Port 1, Port 2, Port 3) connecting three different network segments.

*   **Scenario 1:**
    *   A frame arrives at Port 1 with Source MAC: AA, Destination MAC: BB.
    *   Bridge learns: MAC\_AA -> Port 1.
    *   Bridge looks up BB. If MAC\_BB is found on Port 2, the bridge forwards the frame to Port 2.

*   **Scenario 2:**
    *   A frame arrives at Port 1 with Source MAC: AA, Destination MAC: CC.
    *   Bridge learns: MAC\_AA -> Port 1.
    *   Bridge looks up CC. If MAC\_CC is also found on Port 1, the bridge filters the frame.

*   **Scenario 3:**
    *   A frame arrives at Port 1 with Source MAC: AA, Destination MAC: DD (DD is unknown to the bridge).
    *   Bridge learns: MAC\_AA -> Port 1.
    *   Bridge looks up DD. DD is not in the table.
    *   Bridge floods the frame to Port 2 and Port 3.

**3. Types of Bridges**

*   **Transparent Bridges:**
    *   **How they work:** The network topology is transparent to the end stations. End stations do not need to be aware of the bridges' presence or the MAC address table. The bridge learns and forwards frames autonomously.
    *   **Operation:** They build their MAC address table automatically and forward frames based on it.
    *   **Advantages:** Easy to implement, no configuration required for end stations.
    *   **Disadvantages:** Can be slow to learn new MAC addresses.
*   **Source-Routing Bridges:**
    *   **How they work:** The transmitting station determines the entire path (route) a frame should take through a series of bridges to reach its destination. This path information is embedded in the frame header.
    *   **Operation:** The source station sends a discovery frame to find a route. Once a route is found, it's included in subsequent frames. The bridges simply forward the frame along the specified route.
    *   **Advantages:** Can be useful in complex topologies where dynamic routing might be challenging.
    *   **Disadvantages:** More complex for the transmitting station, requires changes to end-station software, can be less efficient in dynamic environments.
*   **Hybrid Bridges:**
    *   **How they work:** Combine features of both transparent and source-routing bridges.
    *   **Example:** A bridge might operate as transparent for some traffic and source-routing for others.

**Tanenbaum (5th Ed.):** Discusses transparent bridging as the most common type and the process of learning and forwarding. Mentions that bridges operate at Layer 2 and segment collision domains.

**Forouzan (5th Ed.):** Also emphasizes transparent bridges and the MAC address table's role. Explains how bridges reduce the size of collision domains.

**4. Advantages and Disadvantages of Bridges**

**Advantages:**

*   **Reduces Collisions:** Bridges segment a network into smaller collision domains, significantly reducing the probability of collisions and improving performance.
*   **Increases Throughput:** By segmenting traffic, bridges can isolate traffic to specific segments, leading to higher throughput for each segment.
*   **Connects Different LAN Technologies:** Bridges can connect segments using different physical media and MAC layer protocols (e.g., Ethernet to Token Ring, though this is less common now).
*   **Extends Network Distance:** They can extend the physical reach of a LAN by connecting segments that are physically separated.
*   **Plug-and-Play:** Transparent bridges are generally plug-and-play, requiring no manual configuration.
*   **Reduces Load on Backbone:** By filtering unnecessary traffic, bridges reduce the load on the backbone network.

**Disadvantages:**

*   **Higher Latency:** Each frame must be processed by the bridge, inspected, and potentially regenerated, introducing a small amount of latency.
*   **Single Broadcast Domain:** Bridges do not segment broadcast domains. A broadcast frame sent on one segment will be forwarded to all other connected segments. This can lead to broadcast storms if not managed.
*   **Not Intelligent for Routing:** Bridges only make forwarding decisions based on MAC addresses. They cannot make intelligent decisions about the best path in a complex network or handle routing based on IP addresses.
*   **Limited Scalability for Broadcasts:** As the number of connected segments and devices increases, the amount of broadcast traffic can become a significant problem.
*   **Higher Cost than Hubs:** Bridges are more expensive than simple hubs.

**Kurose & Ross (6th Ed.):** Highlights how bridges create separate collision domains and that a single broadcast domain is maintained. They emphasize the role of bridges in LAN segmentation for performance improvement.

**Peterson & Davie (5th Ed.):** Discusses bridges in the context of connecting LANs and their filtering/forwarding mechanisms. Mentions the potential for loops and the need for loop-free topologies (which is addressed by Spanning Tree Protocol, though STP is not the focus here).

**5. Limitations of Bridges and the Need for Routers**

*   **Broadcast Traffic:** As mentioned, bridges forward all broadcasts. In large networks, this can saturate the network.
*   **No IP-level Intelligence:** Bridges are unaware of IP addresses and network layer protocols. They cannot make decisions based on IP addresses, which are crucial for inter-network communication (e.g., between different subnets).
*   **Loop Formation:** If multiple bridges are connected in a way that creates a loop, frames can circulate endlessly, causing broadcast storms and network outages. This is addressed by the Spanning Tree Protocol (STP), which is often implemented in bridges and switches.
*   **Limited Scalability for Complex Networks:** For large, interconnected networks with diverse subnets and routing requirements, bridges are insufficient.

This is where **routers** come in. Routers operate at the Network Layer (Layer 3) and make forwarding decisions based on IP addresses. They can:

*   Segment broadcast domains.
*   Make intelligent routing decisions.
*   Connect different network types (e.g., LANs to WANs).

**6. Modern Equivalence: Switches**

While the concept of bridges is fundamental, in modern networks, their functionality is primarily replaced by **network switches**.

*   **Switches as Multi-port Bridges:** A switch can be thought of as a multi-port bridge (typically with many more ports than a traditional bridge).
*   **Higher Performance:** Switches typically offer higher port densities and internal switching fabrics that provide higher performance than older bridge designs.
*   **Dedicated Bandwidth:** In full-duplex mode, each port on a switch can have dedicated bandwidth, eliminating collisions on individual ports.
*   **Learning and Forwarding:** Switches also learn MAC addresses and build MAC address tables to forward frames intelligently.
*   **VLANs:** Advanced switches support Virtual LANs (VLANs), which allow logical segmentation of a physical network, creating multiple broadcast domains within a single physical switch.

**Important Point to Remember:**

*   **Bridges operate at Layer 2 (Data Link Layer) and use MAC addresses for forwarding decisions.**
*   **Bridges segment collision domains but not broadcast domains.**
*   **Bridges learn MAC addresses dynamically.**
*   **Switches are essentially multi-port bridges with enhanced performance and features.**

**7. Practice Questions and Answers**

**Question 1:** What layer of the OSI model does a bridge operate on?
    *   **Answer:** Data Link Layer (Layer 2).

**Question 2:** What information does a bridge use to make forwarding decisions?
    *   **Answer:** MAC addresses.

**Question 3:** Explain the difference between filtering and forwarding in the context of a bridge.
    *   **Answer:** Filtering is when a bridge discards a frame because the destination is on the same segment as the source. Forwarding is when a bridge sends a frame to a different segment where the destination is located.

**Question 4:** What is a major limitation of bridges regarding broadcast traffic?
    *   **Answer:** Bridges forward all broadcast traffic, thus not segmenting broadcast domains.

**Question 5:** If a destination MAC address is not found in a bridge's MAC address table, what action does the bridge take?
    *   **Answer:** The bridge floods the frame to all other ports.

**Question 6:** How does a bridge learn MAC addresses?
    *   **Answer:** By examining the source MAC address of incoming frames and associating them with the port on which they arrived.

**Question 7:** Why are switches considered the modern evolution of bridges?
    *   **Answer:** Switches are multi-port devices that perform the same learning and forwarding functions as bridges but with higher port density, improved performance, and features like dedicated bandwidth (full-duplex) and VLANs.

**Question 8:** Differentiate between a collision domain and a broadcast domain. How does a bridge affect each?
    *   **Answer:**
        *   **Collision Domain:** A network segment where devices can collide. A bridge **reduces** the size of collision domains by segmenting the network.
        *   **Broadcast Domain:** A network segment where broadcast frames are propagated. A bridge **does not** segment broadcast domains; it forwards broadcasts to all connected segments.

**8. Alignment with Course Outcomes (COs)**

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network. (Knowledge Level: K2)**
    *   This topic directly supports CO1 by explaining a key networking device (bridge) that operates within the layered architecture (Data Link Layer) and its role in connecting network segments. The understanding of MAC addresses is also fundamental to setting up networks.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs (Knowledge Level: K2)**
    *   This topic is a core component of CO2. It details the role of the Data Link Layer device (bridge) and explains how MAC addresses (handled by the MAC sublayer) are used for forwarding decisions within Ethernet and can be extended to Wireless LANs.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols. (Knowledge Level: K2)**
    *   While bridges themselves don't perform routing, understanding their limitations (especially regarding broadcast traffic and lack of IP-level intelligence) sets the stage for understanding why routers and routing algorithms (covered in CO3) are necessary for more complex network designs and congestion control.
*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)**
    *   This topic indirectly supports CO4 by building the foundational understanding of lower network layers. A well-functioning Data Link Layer, facilitated by devices like bridges, is essential for the upper layers to provide their services effectively.

---
**End of Study Notes: Use of Bridges**
