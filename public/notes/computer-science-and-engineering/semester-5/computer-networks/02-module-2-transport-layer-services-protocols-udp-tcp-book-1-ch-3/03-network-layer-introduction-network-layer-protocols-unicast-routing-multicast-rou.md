---
title: "Network Layer: Introduction, Network-layer protocols, Unicast routing, Multicast routing - Multicasting Basics, Intra domain and inter-domain routing,  Next generation IP (Book 1 Ch 4), Quality of Service (Book 1 Ch 8)"
subject: "COMPUTER NETWORKS"
module: "Module 2: Transport Layer: Services, Protocols, UDP, TCP  (Book 1 Ch 3)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b525"
status: "completed"
scrapedAt: "2026-05-20T16:43:31.831Z"
---
## Computer Networks: Network Layer and Quality of Service (Module 2, Book 1, Ch 4 & 8, combined with Ch 3 context)

**Context:** This document covers the Network Layer and Quality of Service (QoS) within the context of the Transport Layer (UDP & TCP) discussed in Chapter 3. We'll explore how the Network Layer delivers segments/datagrams from source to destination hosts, building upon the services provided by the Transport Layer.

**Learning Outcomes:**

*   Understand the fundamental principles and functionalities of the Network Layer.
*   Describe the role of Network Layer protocols, including IP, ICMP, and routing protocols.
*   Explain unicast routing algorithms and protocols (distance-vector and link-state).
*   Describe multicast routing basics, including concepts like group management and tree-based routing.
*   Differentiate between intra-domain and inter-domain routing and the protocols used (RIP, OSPF, BGP).
*   Explain the key features of Next Generation IP (IPv6).
*   Describe different Quality of Service (QoS) techniques and mechanisms.

---

### I. Network Layer: Introduction (Book 1, Ch 4)

*   **Purpose:** To move packets from one host to another (hop-by-hop) across a network.  The transport layer provides end-to-end communication *between processes* on the source and destination hosts, while the network layer provides end-to-end communication *between hosts*.  The network layer is concerned with routing, forwarding, and addressing.

*   **Key Functions:**
    *   **Forwarding:** Moving packets from a router's input link to the appropriate output link.  This is a local action.
    *   **Routing:** Determining the end-to-end path (sequence of routers) that packets should take from source to destination. This is a global action.
    *   **Addressing:** Assigning and managing network addresses (IP addresses) to uniquely identify devices on the network.

*   **Service Models:**
    *   **Connectionless Service:**  Each packet is treated independently.  Packets may take different routes and arrive out of order.  (Example: IP)
    *   **Connection-Oriented Service:** A virtual connection is established before data transfer begins.  Packets follow the same path and are guaranteed to arrive in order. (Example: ATM) (Note: this is less common in modern IP networks)

*   **Relationship to Transport Layer (UDP & TCP):**
    *   **UDP (User Datagram Protocol):** Provides an unreliable, connectionless service.  The network layer delivers UDP datagrams without guarantees. If a datagram is lost, UDP does not attempt to retransmit. The network layer handles the physical delivery.
    *   **TCP (Transmission Control Protocol):** Provides a reliable, connection-oriented service. TCP segments are encapsulated in IP datagrams for delivery by the network layer. TCP provides flow control, congestion control, and error detection/correction, but still relies on IP to route packets. The network layer handles the physical delivery.

*   **Packet Structure (IP Datagram):**  IP encapsulates the transport layer segment (TCP or UDP).
    *   **Header:** Source IP address, Destination IP address, Protocol (TCP or UDP), TTL (Time To Live), Header Checksum, Flags, etc.
    *   **Payload:** The TCP segment or UDP datagram.
    *   **Fragmentation and Reassembly:**  IP can fragment datagrams if they are too large for a particular link (MTU - Maximum Transmission Unit). Reassembly is typically done at the destination host.

---

### II. Network-Layer Protocols (Book 1, Ch 4)

*   **IP (Internet Protocol):** The fundamental protocol for addressing and routing packets across the Internet.
    *   **IPv4:** Uses 32-bit addresses.  Becoming increasingly scarce.
    *   **IPv6:** Uses 128-bit addresses.  Designed to address IPv4's limitations (address exhaustion, security, mobility).

*   **ICMP (Internet Control Message Protocol):** Used for error reporting and network diagnostics.  Carries control messages, not user data.  Examples:
    *   **Ping (Echo Request/Reply):**  Tests network connectivity.
    *   **Traceroute:**  Maps the path a packet takes to a destination.
    *   **Destination Unreachable:** Indicates that a destination is not reachable.
    *   **Time Exceeded:** Indicates that a packet's TTL has reached zero.

*   **ARP (Address Resolution Protocol):** Used to find the MAC address (physical address) associated with a given IP address within the same local network.  ARP operates at the data link layer.

*   **RARP (Reverse Address Resolution Protocol):**  Used to find the IP address associated with a given MAC address.  (Largely obsolete, replaced by DHCP).

---

### III. Unicast Routing (Book 1, Ch 4)

*   **Routing Algorithms:** Determine the "best" path for packets to travel from source to destination.  "Best" can be defined by various metrics (cost, distance, delay, bandwidth, etc.).

*   **Graph Abstraction:**  Networks are often modeled as graphs, where:
    *   **Nodes:** Represent routers.
    *   **Edges:** Represent links between routers.  Edge weights represent the "cost" of using that link.

*   **Routing Algorithm Classification:**
    *   **Static vs. Dynamic:** Static routing uses pre-configured routes that do not change. Dynamic routing adapts to network changes.
    *   **Global vs. Decentralized:** Global routing (e.g., link-state) requires complete network information. Decentralized routing (e.g., distance-vector) relies on information from neighbors.
    *   **Centralized vs. Distributed:** Centralized routing has a single entity compute all routes. Distributed routing involves multiple entities calculating routes.

*   **Distance-Vector Routing:**
    *   Each router maintains a table (distance vector) containing the estimated distances to all other routers in the network.
    *   Routers periodically exchange their distance vectors with their directly connected neighbors.
    *   The Bellman-Ford equation is used to update distance estimates: `Dx(y) = minv{c(x,v) + Dv(y)}`  (The distance from x to y is the minimum of the cost from x to neighbor v plus the distance from v to y).
    *   **Example:** RIP (Routing Information Protocol) is a distance-vector protocol.
    *   **Problem: Count-to-Infinity:**  A major drawback of distance-vector routing.  When a link fails, distance estimates can increase slowly, potentially looping indefinitely.  Solutions include:
        *   **Poison Reverse:**  A router advertises an infinite distance to a destination through the neighbor from which it learned about that destination.
        *   **Split Horizon:**  A router doesn't advertise a route back to the neighbor from which it learned the route.

*   **Link-State Routing:**
    *   Each router maintains a complete map of the network topology (link-state database).
    *   Routers flood link-state advertisements (LSAs) containing information about their directly connected links to all other routers in the network.
    *   Dijkstra's algorithm is used to calculate the shortest paths from each router to all other routers.
    *   **Example:** OSPF (Open Shortest Path First) is a link-state protocol.

*   **Comparison of Distance-Vector and Link-State:**

    | Feature        | Distance-Vector                                 | Link-State                                      |
    |----------------|-------------------------------------------------|--------------------------------------------------|
    | Information    | Distance to destinations                       | Complete network topology                         |
    | Propagation    | Exchange with neighbors                       | Flooding                                         |
    | Algorithm      | Bellman-Ford                                   | Dijkstra's Algorithm                              |
    | Complexity     | Lower computational cost, simpler to implement | Higher computational cost, more complex to implement |
    | Convergence    | Slower, prone to count-to-infinity              | Faster, less prone to looping                    |

---

### IV. Multicast Routing (Book 1, Ch 4)

*   **Multicasting Basics:**
    *   Sending a single data stream to a group of interested receivers.  More efficient than unicasting the same data to each receiver individually.
    *   **Group Management:** Mechanisms for hosts to join and leave multicast groups. (e.g., IGMP - Internet Group Management Protocol).
    *   **Multicast Address:**  A special IP address used to identify a multicast group.
    *   **Multicast Router:** A router that supports multicast forwarding.

*   **Multicast Routing Approaches:**

    *   **Tree-Based Routing:** Construct a distribution tree to efficiently forward multicast data.
        *   **Source-Based Trees:** A separate tree is built for each source-group combination.  (e.g., Reverse Path Forwarding - RPF).
        *   **Group-Shared Trees:** A single tree is used for all sources sending to a particular group. (e.g., Core-Based Trees).

    *   **Reverse Path Forwarding (RPF):**
        *   A simple source-based tree algorithm.
        *   When a router receives a multicast packet, it forwards the packet only if it arrived on the interface that the router uses to reach the source (i.e., the reverse path).
        *   Helps prevent loops.
        *   Can still lead to unnecessary forwarding (broadcast-like behavior) if not optimized.

    *   **Prune and Graft:**  Techniques to optimize multicast trees.
        *   **Prune:**  Routers send "prune" messages upstream to stop forwarding multicast data if there are no interested receivers downstream.
        *   **Graft:** Routers send "graft" messages upstream to request multicast data if a new receiver joins the group downstream.

*   **IGMP (Internet Group Management Protocol):**
    *   Used by hosts to inform their local router that they want to join a specific multicast group.
    *   Used by routers to query hosts about their group memberships.
    *   Operates between hosts and their directly attached routers.

---

### V. Intra-Domain and Inter-Domain Routing (Book 1, Ch 4)

*   **Intra-Domain Routing (Interior Gateway Protocols - IGPs):**
    *   Routing within a single autonomous system (AS). An AS is a network under a single administrative domain.
    *   Focuses on minimizing cost, optimizing performance *within* the AS.
    *   Examples:
        *   **RIP (Routing Information Protocol):**  Distance-vector, simple, limited scalability.
        *   **OSPF (Open Shortest Path First):**  Link-state, hierarchical, more scalable and robust than RIP.  Uses areas to divide the AS into smaller routing domains.
        *   **IS-IS (Intermediate System to Intermediate System):**  Link-state, similar to OSPF.

*   **Inter-Domain Routing (Exterior Gateway Protocols - EGPs):**
    *   Routing between different autonomous systems (ASes).
    *   Focuses on policy-based routing, reachability, and stability.
    *   **BGP (Border Gateway Protocol):** The dominant inter-domain routing protocol used on the Internet.
        *   **Path-Vector Protocol:**  Similar to distance-vector, but instead of advertising distances, BGP advertises *paths* to destinations (sequences of ASes).
        *   Allows ASes to implement routing policies based on business relationships, security concerns, etc.
        *   BGP sessions are established between BGP speakers (routers) in different ASes.

*   **Key Differences:**

    | Feature           | Intra-Domain Routing                                        | Inter-Domain Routing                                            |
    |-------------------|-------------------------------------------------------------|-----------------------------------------------------------------|
    | Scope             | Within a single AS                                          | Between different ASes                                           |
    | Goal              | Optimize performance (e.g., minimize cost, delay)          | Enforce policies, ensure reachability and stability            |
    | Complexity        | Generally simpler, focuses on technical metrics             | More complex, involves policies and business relationships        |
    | Protocols         | RIP, OSPF, IS-IS                                         | BGP                                                              |

---

### VI. Next Generation IP (IPv6) (Book 1, Ch 4)

*   **Motivation:**  Address the limitations of IPv4:
    *   **Address Exhaustion:**  IPv4's 32-bit address space is running out.
    *   **Lack of Built-in Security:** IPv4 was not designed with security in mind.
    *   **Mobile IP Inefficiencies:**  IPv4's mobility support is complex and inefficient.

*   **Key Features of IPv6:**

    *   **128-bit Addresses:** Vastly increased address space. Provides ample addresses for every device. (2<sup>128</sup> addresses)
    *   **Simplified Header:**  More efficient processing of packets.
    *   **No Checksum:**  Checksum calculation is handled by the link layer and transport layer.
    *   **Flow Label:**  Allows packets belonging to the same "flow" to be easily identified for QoS purposes.
    *   **Authentication and Encryption (IPsec):** Built-in support for security.
    *   **Auto-configuration:** Devices can automatically configure their IPv6 addresses.
    *   **Anycast Addressing:**  Allows multiple devices to share the same IP address; packets are delivered to the "nearest" device.

*   **IPv6 Address Format:**

    *   Eight groups of four hexadecimal digits, separated by colons.  (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
    *   **Rules for Shortening:**
        *   Leading zeros within a group can be omitted. (e.g., 0db8 can be written as db8).
        *   One or more consecutive groups of zeros can be replaced with a double colon (::).  This can only be done once in an address. (e.g., 2001:db8:85a3::8a2e:370:7334).

*   **Transition Mechanisms from IPv4 to IPv6:**

    *   **Dual-Stack:**  Devices and networks run both IPv4 and IPv6 simultaneously.
    *   **Tunneling:**  IPv6 packets are encapsulated within IPv4 packets to traverse IPv4 networks.
    *   **Translation (NAT-PT):**  Translates IPv6 addresses to IPv4 addresses and vice versa.  (Less preferred due to complexity and statefulness).

---

### VII. Quality of Service (QoS) (Book 1, Ch 8)

*   **Need for QoS:**  Different applications have different requirements in terms of bandwidth, delay, jitter (delay variation), and packet loss. Best-effort service (the default in IP networks) treats all traffic equally, which may not be suitable for real-time applications like VoIP or video conferencing.

*   **QoS Metrics:**
    *   **Bandwidth:**  The amount of data that can be transmitted per unit of time (e.g., Mbps).
    *   **Delay:**  The time it takes for a packet to travel from source to destination.
    *   **Jitter:**  The variation in delay.
    *   **Packet Loss:**  The percentage of packets that are lost during transmission.

*   **QoS Architectures:**
    *   **Integrated Services (IntServ):**  Provides guaranteed QoS by reserving resources along the entire path.  Uses RSVP (Resource Reservation Protocol).  Complex to implement and scale.
    *   **Differentiated Services (DiffServ):** Provides different levels of service based on traffic classification. More scalable than IntServ.
    *   **Traffic Engineering:** Optimizes network performance by controlling the flow of traffic through the network.

*   **QoS Mechanisms:**

    *   **Traffic Shaping:**  Controls the rate at which traffic is sent into the network to avoid congestion. (e.g., Leaky Bucket, Token Bucket).
    *   **Traffic Policing:** Monitors traffic and takes action (e.g., dropping packets, marking packets) when traffic exceeds a configured rate.
    *   **Scheduling:**  Determines the order in which packets are transmitted.
        *   **FIFO (First-In, First-Out):** Simple, but doesn't prioritize traffic.
        *   **Priority Queuing:**  Higher-priority packets are transmitted before lower-priority packets.
        *   **Weighted Fair Queuing (WFQ):**  Provides fair bandwidth allocation to different traffic flows based on assigned weights.
    *   **Congestion Control:** Mechanisms to prevent or alleviate congestion in the network. (e.g., TCP congestion control, RED - Random Early Detection).
    *   **Resource Reservation:**  Reserving network resources (bandwidth, buffer space) for specific traffic flows (e.g., RSVP).
    *   **Packet Marking:**  Setting bits in the IP header (e.g., DiffServ Codepoint - DSCP) to indicate the traffic class.

*   **Differentiated Services (DiffServ):**

    *   Classifies traffic into different classes based on application requirements.
    *   Uses the DSCP field in the IP header to mark packets with a specific traffic class.
    *   Routers use Per-Hop Behavior (PHB) to treat packets differently based on their DSCP markings.
    *   **Common PHBs:**
        *   **Expedited Forwarding (EF):** Provides low delay and jitter, suitable for real-time applications.
        *   **Assured Forwarding (AF):** Provides different levels of assurance for packet delivery, suitable for data applications.
        *   **Best Effort (BE):** The default service, no special treatment.

---

### VIII. Practice Questions/Exercises

1.  **Describe the difference between forwarding and routing in the Network Layer.**

    *   **Answer:** Forwarding is the local action of moving a packet from an input link to an output link on a router. Routing is the global process of determining the end-to-end path (sequence of routers) that packets should take from source to destination.

2.  **Explain the count-to-infinity problem in distance-vector routing and how poison reverse can help mitigate it.**

    *   **Answer:** Count-to-infinity occurs when a link fails and routers slowly increase their distance estimates to a destination, potentially looping indefinitely. Poison reverse helps by having a router advertise an infinite distance to a destination through the neighbor from which it originally learned the route, preventing the neighbor from continuing to use that broken path.

3.  **What is the primary purpose of IGMP, and between which entities does it operate?**

    *   **Answer:** IGMP (Internet Group Management Protocol) is used by hosts to inform their local multicast router that they want to join a specific multicast group, and by routers to query hosts about their group memberships. It operates between hosts and their directly attached routers.

4.  **Differentiate between intra-domain and inter-domain routing, providing examples of protocols used in each.**

    *   **Answer:** Intra-domain routing occurs within a single autonomous system (AS), focusing on optimizing performance using protocols like RIP, OSPF, and IS-IS. Inter-domain routing occurs between different ASes, focusing on policy-based routing using protocols like BGP.

5.  **Explain why IPv6 was developed and list three key features that address the limitations of IPv4.**

    *   **Answer:** IPv6 was developed to address address exhaustion, lack of built-in security, and mobile IP inefficiencies in IPv4. Three key features are: 128-bit addresses, built-in authentication and encryption (IPsec), and auto-configuration.

6.  **What are the key QoS metrics, and why are they important?**

    *   **Answer:** Key QoS metrics are bandwidth, delay, jitter, and packet loss. They are important because different applications have different requirements, and providing guaranteed levels of these metrics ensures optimal performance for those applications.

7.  **Describe the difference between traffic shaping and traffic policing.**

    *   **Answer:** Traffic shaping controls the rate at which traffic is *sent* into the network, smoothing traffic flow and preventing congestion. Traffic policing *monitors* traffic and takes action (e.g., dropping or marking packets) when traffic exceeds a configured rate, enforcing traffic limits.

---

### IX. Important Points to Remember

*   The Network Layer is responsible for moving packets from source to destination across the network.
*   IP is the fundamental protocol for addressing and routing.
*   Routing algorithms determine the "best" path for packets.
*   Multicasting allows efficient delivery of data to a group of interested receivers.
*   IPv6 is the next generation IP, designed to address the limitations of IPv4.
*   QoS mechanisms are used to provide different levels of service to different traffic flows.
*   Understand the relationship between the Network Layer and the Transport Layer (UDP & TCP).
