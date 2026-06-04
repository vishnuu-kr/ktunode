---
title: "Routers"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3647a"
status: "completed"
scrapedAt: "2026-05-23T16:20:05.373Z"
---
## Computer Network Systems: Module 2 - Data Link Layer

### Topic: Routers

This module delves into the Data Link Layer, a crucial component responsible for reliable data transfer between directly connected nodes. While this module primarily focuses on the Data Link Layer's functions, it's important to acknowledge that devices operating at higher layers, such as routers, rely on Data Link Layer services to perform their network-wide forwarding tasks. This section will explore the role of routers in the context of network connectivity, understanding how they interact with and leverage Data Link Layer mechanisms.

---

### Learning Outcomes Covered:

*   **LO1:** Understand the role of routers in inter-network communication and how they operate at a higher layer than the Data Link Layer.
*   **LO2:** Recognize that routers use Data Link Layer frames to forward packets between networks.
*   **LO3:** Appreciate how routers utilize routing tables, which are built using routing algorithms, to make forwarding decisions.
*   **LO4:** Understand that routers are not end-to-end devices but facilitate communication across multiple networks.

---

### Key Concepts and Definitions:

*   **Router:** A networking device that forwards data packets between computer networks. Routers perform the traffic-directing functions on the Internet. They operate at the Network Layer (Layer 3) of the OSI model.
*   **Network Layer (Layer 3):** The layer responsible for logical addressing (IP addresses) and routing of data packets across multiple networks.
*   **Data Link Layer (Layer 2):** The layer responsible for node-to-node data transfer on the same network segment, using physical addressing (MAC addresses) and framing.
*   **Packet:** A unit of data at the Network Layer.
*   **Frame:** A unit of data at the Data Link Layer.
*   **IP Address:** A logical address assigned to a device, identifying its network and host on that network.
*   **MAC Address:** A physical, hardware-assigned address that uniquely identifies a network interface card (NIC) on a local network segment.
*   **Routing Table:** A data structure stored in a router that lists the routes to particular network destinations. It contains information about the network address, the next hop (the next router or host to send the packet to), and the interface on which to send the packet.
*   **Routing Algorithm:** Algorithms used by routers to determine the best path for data packets to travel from a source to a destination across multiple networks.
*   **Hop:** A traversal from one router to another.
*   **Broadcast Domain:** A network segment where a broadcast message sent by one host is received by all other hosts in that segment. Routers, by default, do not forward broadcast traffic between networks.
*   **Collision Domain:** A network segment where data collisions can occur. Switches create smaller collision domains, while routers isolate collision domains.

---

### 1. Role of Routers in Inter-Network Communication

*   **Connecting Disparate Networks:** Routers are the primary devices responsible for connecting different, independent networks (e.g., your home network to the Internet, different departments within a large organization).
*   **Path Determination:** When a device sends data to a destination outside its local network, the packet first reaches its default gateway (usually a router). The router then consults its routing table to determine the best path to forward the packet towards its ultimate destination.
*   **Network Layer Operation:** Routers operate at the Network Layer (Layer 3). They examine the IP header of packets to make forwarding decisions. This is distinct from devices like switches, which operate at the Data Link Layer (Layer 2) and forward based on MAC addresses.

**Reference (Tanenbaum, 5th Ed.):** Chapter 1.3.3 discusses the role of gateways (routers) in internetworking, emphasizing their function in connecting dissimilar networks and forwarding packets across these boundaries.

---

### 2. Routers and Data Link Layer Frames

*   **Frame Encapsulation/Decapsulation:** Although routers operate at the Network Layer, they must interact with the Data Link Layer to transmit and receive packets.
    *   When a router receives a packet on one of its interfaces, it **decapsulates** the packet from the incoming Data Link Layer frame.
    *   After determining the next hop and output interface based on the routing table, the router **encapsulates** the packet into a new Data Link Layer frame suitable for the medium and network to which it is being sent. This means the MAC address in the frame header will change at each hop.
*   **Protocol Independence:** Routers are designed to be protocol-independent at the Data Link Layer. They can forward packets over various Data Link Layer technologies (e.g., Ethernet, Wi-Fi, PPP) as long as they can establish a connection and exchange packets.

**Example:**
Imagine a packet traveling from a computer on your home Ethernet network to a server on the internet.
1.  Your computer creates a packet with the destination IP address of the server.
2.  Your computer encapsulates this packet in an Ethernet frame with the MAC address of your home router (default gateway).
3.  Your home router receives the Ethernet frame, decapsulates the packet, and looks up the server's IP address in its routing table.
4.  The router determines the next hop is an ISP router. It then creates a *new* Ethernet frame (or PPP frame, depending on the ISP's connection) containing the original packet, but with the MAC address of the ISP router.
5.  This process repeats at each subsequent router until the packet reaches its destination.

**Reference (Forouzan, 5th Ed.):** Chapter 1.4, "The Layered Approach," highlights how each layer relies on the services of the layer below it. While not explicitly about routers, it explains the fundamental concept of encapsulation and decapsulation, which is critical for router operation.

---

### 3. Routing Tables and Routing Algorithms

*   **Function of Routing Tables:** Routers maintain routing tables to store information about network paths. Each entry typically includes:
    *   **Destination Network:** The IP address of the network or host.
    *   **Subnet Mask:** Defines the network portion of the IP address.
    *   **Next Hop:** The IP address of the next router or the interface to send the packet out on if the destination is directly connected.
    *   **Metric:** A value indicating the "cost" or "preference" of a route (e.g., hop count, bandwidth, delay).
    *   **Interface:** The local network interface through which the packet should be sent.
*   **How Routing Tables are Built:** Routing tables are populated by:
    *   **Directly Connected Networks:** Information about networks directly attached to the router's interfaces is automatically added.
    *   **Static Routes:** Manually configured by network administrators. Useful for small, simple networks or specific policy enforcement.
    *   **Dynamic Routing Protocols:** Routers running routing protocols (e.g., RIP, OSPF, BGP) exchange routing information with neighboring routers to automatically learn about available networks and update their routing tables.

**Reference (Kurose & Ross, 6th Ed.):** Chapter 5, "Routing," provides an in-depth explanation of routing principles, including the structure of routing tables and the operation of various routing algorithms like distance-vector and link-state.

*   **Routing Algorithms:** These algorithms enable routers to dynamically discover and maintain information about the network topology.
    *   **Distance-Vector Routing (e.g., RIP):** Routers exchange their entire routing tables with their neighbors. Each router advertises its distance (metric) to each destination network. This can lead to "count-to-infinity" problems.
    *   **Link-State Routing (e.g., OSPF):** Routers broadcast information about their directly connected links (link states) to all other routers in the same routing domain. Each router then builds a complete map of the network topology and runs Dijkstra's algorithm to compute the shortest paths to all destinations.
    *   **Path-Vector Routing (e.g., BGP):** Used for routing between Autonomous Systems (large networks, like ISPs). BGP routers exchange entire paths to destination networks, which helps in enforcing routing policies.

**Reference (Peterson & Davie, 5th Ed.):** Chapter 4, "Routing," covers fundamental routing concepts, including static routing, dynamic routing, and discussions on key routing protocols.

---

### 4. Routers vs. End-to-End Devices

*   **Routers as Intermediate Devices:** Routers are not end-to-end communication devices. They exist *between* networks and facilitate the movement of data packets from the source network to the destination network.
*   **End Devices:** End devices (hosts, servers) are where communication originates and terminates.
*   **Layer 2 vs. Layer 3 Scope:** Data Link Layer operates on a hop-by-hop basis (within a local network segment). Routers, operating at the Network Layer, have an end-to-end perspective of the logical path across multiple networks.
*   **MAC Address Changes:** The MAC address in a frame is relevant only for the current hop. When a packet is forwarded by a router, the MAC addresses in the new frame are updated to reflect the next hop's MAC address. The IP addresses, however, remain unchanged throughout the journey.

**Example:**
When you send an email, your email client (on your host) creates the email. The TCP/IP stack then packages this into segments, then packets (with source and destination IP addresses). These packets are then encapsulated into frames for the local network. When a router forwards the packet, it strips the old frame and creates a new one for the next hop, using the appropriate Data Link Layer technology and MAC addresses for that segment. The original IP packet, however, is passed through unchanged.

**Reference (Kurose & Ross, 6th Ed.):** Chapter 1, "Introduction to Computer Networks," contrasts the roles of end systems (hosts) and intermediate network components like routers, emphasizing the layered architecture.

---

### How Routers Fit with the Data Link Layer (CO2 & CO1 Alignment)

*   **CO2: Identify the role of the MAC sublayer and networking devices in Ethernets and wireless LANs.**
    *   Routers interface with various Data Link Layer technologies (Ethernet, Wi-Fi) to send and receive frames.
    *   When a router needs to send a packet to a host on its directly connected network (e.g., your home network), it needs to know the MAC address of that host. This is typically resolved using the Address Resolution Protocol (ARP), which operates at the Data Link Layer.
    *   Routers encapsulate Network Layer packets into Data Link Layer frames using the appropriate MAC addresses for each hop.
*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   Routers are essential components for setting up larger, interconnected networks.
    *   They demonstrate the layered architecture by operating at Layer 3 while relying on Layer 2 for local delivery.
    *   Routers interact with various physical media (e.g., Ethernet cables, fiber optics) and the Data Link Layer protocols associated with them.

---

### Important Points to Remember:

*   **Routers are Layer 3 devices.** They make forwarding decisions based on IP addresses.
*   **Routers connect different networks.** They are the gateways between subnets.
*   **Routers use routing tables.** These tables are populated by routing algorithms.
*   **Routers change Data Link Layer frames at each hop.** The source and destination MAC addresses are updated.
*   **Routers do not forward broadcast traffic by default.** This helps contain broadcast domains.
*   **Routers are intermediate devices, not end devices.** They facilitate end-to-end communication.
*   **Routers rely on Data Link Layer services** (like framing and MAC addressing) to transmit packets across network segments.

---

### Practice Questions:

1.  What layer of the OSI model do routers primarily operate at, and what information do they use to make forwarding decisions?
    *   **Answer:** Routers primarily operate at the Network Layer (Layer 3). They use IP addresses from the packet header to make forwarding decisions based on their routing tables.

2.  Explain the process of frame encapsulation and decapsulation when a packet travels through a router.
    *   **Answer:** When a router receives a packet, it decapsulates the packet from the incoming Data Link Layer frame. After determining the next hop and output interface, it encapsulates the same packet into a *new* Data Link Layer frame, using the appropriate MAC addresses for the next hop and the outgoing interface's network technology.

3.  Differentiate between a router and a switch in terms of their operating layer and the addressing they use.
    *   **Answer:** Routers operate at Layer 3 (Network Layer) and use IP addresses for forwarding decisions between different networks. Switches operate at Layer 2 (Data Link Layer) and use MAC addresses for forwarding decisions within the same network segment.

4.  What is the purpose of a routing table? How are entries added to it?
    *   **Answer:** A routing table is a data structure in a router that contains information about network paths, including destination network, next hop, and interface. Entries are added manually (static routes) or automatically through dynamic routing protocols (e.g., RIP, OSPF, BGP).

5.  Why are routers considered intermediate devices rather than end-to-end devices?
    *   **Answer:** Routers are intermediate devices because they facilitate the transfer of data packets between different networks but are not the origin or final destination of the communication. End devices (like computers) are the originators and terminators of data.

---

This concludes the notes on Routers within the context of Module 2: Data Link Layer. While routers operate at a higher layer, understanding their interaction with Data Link Layer mechanisms is crucial for comprehending network connectivity.
