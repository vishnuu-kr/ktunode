---
title: "Hubs"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36478"
status: "completed"
scrapedAt: "2026-05-23T16:20:03.935Z"
---
# Computer Network Systems: Module 2 - Data Link Layer
## Topic: Hubs

---

### 1. Introduction to Hubs

*   **Definition:** A hub is a simple, multiport network device that connects multiple computers in a network. It operates at the **Physical Layer (Layer 1)** of the OSI model.
*   **Function:** Its primary function is to act as a central connection point for devices in a Local Area Network (LAN). When a data packet arrives at one port, it is broadcasted to all other ports on the hub.
*   **Historical Significance:** Hubs were commonly used in early Ethernet networks (like 10BASE-T) as an inexpensive way to connect devices. They have largely been replaced by switches due to their inherent inefficiencies.
*   **Relation to Data Link Layer (CO2):** While a hub operates at the Physical Layer, its function has implications for how data is handled at the Data Link Layer. It doesn't understand MAC addresses or frames; it simply repeats electrical signals.

**Important Point to Remember:** Hubs are **Layer 1** devices. They deal with bits, not frames.

---

### 2. How Hubs Work

*   **Signal Regeneration:** When a hub receives an electrical signal (representing bits) on one of its ports, it amplifies and regenerates this signal.
*   **Broadcasting:** The regenerated signal is then transmitted out of *all* other ports, regardless of the intended destination.
*   **No Intelligence:** Hubs have no knowledge of MAC addresses or network topology. They cannot intelligently direct traffic.
*   **Collision Domain:** All devices connected to a hub are in the same **collision domain**. This means that if two or more devices transmit data simultaneously, a collision will occur, corrupting the data. All devices in the collision domain will need to retransmit.

**Example:**
Imagine a hub with four computers (A, B, C, D) connected to it.
1.  Computer A sends data to Computer C.
2.  The hub receives the data on A's port.
3.  The hub broadcasts the data out of ports B, C, and D.
4.  Computer C receives the data. Computers B and D also receive the data but discard it because it's not addressed to them.
5.  If Computer B also tries to send data to Computer D at the same time, a collision occurs on the hub, affecting all connected devices.

---

### 3. Types of Hubs

*   **Passive Hubs:** These do not require external power. They act as simple wire connectors and do not regenerate signals. They are rare in modern networking.
*   **Active Hubs (Repeaters):** These require external power and actively regenerate and retransmit the signal. This allows them to extend the reach of a network segment beyond the typical cable length limitations.
*   **Intelligent Hubs:** These are active hubs that also offer some management features, such as port status monitoring and basic diagnostics.

---

### 4. Hubs vs. Switches (A Key Comparison for CO2)

This comparison is crucial for understanding the evolution of networking devices and why hubs are less common today.

| Feature          | Hub                                     | Switch                                                |
| :--------------- | :-------------------------------------- | :---------------------------------------------------- |
| **OSI Layer**    | Physical Layer (Layer 1)                | Data Link Layer (Layer 2)                             |
| **Operation**    | Broadcasts to all ports                 | Forwards to specific ports based on MAC addresses     |
| **Intelligence** | None (dumb device)                      | Intelligent (builds MAC address tables)               |
| **Collision Domain** | Single large collision domain           | Each port is a separate collision domain              |
| **Bandwidth**    | Shared among all connected devices      | Dedicated bandwidth per port (mostly)                 |
| **Performance**  | Poor (prone to collisions, slow)        | Excellent (reduces collisions, faster)                |
| **Cost (Historically)** | Lower                                   | Higher                                                |
| **Traffic Flow** | Half-duplex only                        | Can operate in half-duplex or full-duplex             |
| **Error Handling** | None                                    | Can detect and discard corrupted frames               |

**Example (Tanenbaum, 5th Ed., Chapter 4.1.3 Repeaters):**
Tanenbaum discusses repeaters (which active hubs are) as devices that regenerate signals. He highlights their simplicity but also their limitation in segmenting networks. A hub, acting as a multi-port repeater, suffers from the same issues of broadcast traffic and collision domains.

**Example (Forouzan, 5th Ed., Chapter 6.3.2 Hubs):**
Forouzan explicitly states that hubs are Layer 1 devices that do not perform any framing or address recognition. They simply repeat bits, which leads to shared bandwidth and a single collision domain.

---

### 5. Advantages and Disadvantages of Hubs

**Advantages:**
*   **Simplicity:** Easy to set up and use.
*   **Cost-Effective (Historically):** Cheaper than switches in the past.
*   **Signal Regeneration:** Active hubs can extend network distance.

**Disadvantages:**
*   **Inefficiency:** Broadcasts all traffic, wasting bandwidth.
*   **Collisions:** All connected devices share a single collision domain, leading to frequent collisions and reduced performance.
*   **Half-Duplex:** Devices connected to a hub can only send or receive data at any given time, not both simultaneously.
*   **Security Risk:** All devices see all traffic, regardless of destination.
*   **Limited Scalability:** Performance degrades significantly as more devices are added.

---

### 6. Impact on Network Performance and Protocols

*   **Bandwidth Sharing:** In a hub-based network, the total bandwidth is shared among all connected devices. If a hub has a 10 Mbps speed and 10 devices are connected, each device theoretically gets 1 Mbps if they all transmit simultaneously (in practice, it's much worse due to collisions).
*   **Carrier Sense Multiple Access with Collision Detection (CSMA/CD):** This is the core media access control protocol for Ethernet. Hubs are fundamentally reliant on CSMA/CD. When a device wants to transmit, it "listens" to the medium. If clear, it transmits. If a collision is detected, all devices stop transmitting and wait a random backoff period before trying again. Hubs contribute to higher collision rates, meaning CSMA/CD will be invoked more frequently, slowing down the network.
*   **Full-Duplex vs. Half-Duplex:** Hubs only support **half-duplex** communication. This means a device can either send or receive at a time, but not both. This halves the potential throughput compared to full-duplex operation supported by switches.

**Reference (Kurose & Ross, 6th Ed., Chapter 4.2.3 Ethernet):**
Kurose and Ross discuss CSMA/CD in the context of Ethernet. They explain how devices contend for the shared medium and how collisions are handled. The inefficiency of hubs stems directly from their inability to segment collision domains, forcing all devices to participate in the CSMA/CD process for the entire network segment.

---

### 7. Modern Relevance and Alternatives

*   **Obsolete Technology:** Hubs are considered obsolete for most modern networking applications due to their performance limitations.
*   **Switches:** Switches have replaced hubs as the primary connecting device for LANs. Switches create separate collision domains for each port, allowing for dedicated bandwidth and full-duplex communication, leading to significantly higher performance.
*   **Routers:** Routers operate at the Network Layer (Layer 3) and connect different networks together, making intelligent forwarding decisions based on IP addresses.

---

### 8. Practice Questions and Answers

**Question 1:** At which layer of the OSI model does a hub operate?
    a) Network Layer (Layer 3)
    b) Data Link Layer (Layer 2)
    c) Physical Layer (Layer 1)
    d) Transport Layer (Layer 4)

**Answer 1:** c) Physical Layer (Layer 1)

**Question 2:** What is the primary characteristic of a hub's operation regarding data transmission?
    a) Intelligent forwarding based on MAC addresses
    b) Broadcasting data to all connected ports
    c) Creating separate collision domains for each port
    d) Encapsulating data into frames

**Answer 2:** b) Broadcasting data to all connected ports

**Question 3:** Explain why a hub is considered a "dumb" device compared to a switch. (Relates to CO2)

**Answer 3:** A hub is considered "dumb" because it lacks the intelligence to inspect or understand the data passing through it. It operates at Layer 1 and simply regenerates and broadcasts electrical signals (bits) to all connected ports. It does not learn MAC addresses, build forwarding tables, or make any decisions about where traffic should go. A switch, on the other hand, operates at Layer 2, learns MAC addresses, builds a MAC address table, and forwards frames only to the intended destination port, making it an intelligent device.

**Question 4:** If you connect 5 computers to a hub, and all 5 computers are in the same collision domain, what does this imply about network performance, especially when multiple computers try to send data simultaneously? (Relates to CO2)

**Answer 4:** If multiple computers try to send data simultaneously in the same collision domain, a collision will occur. This means the transmitted data will be corrupted. The computers will detect the collision (using CSMA/CD), stop transmitting, and wait for a random amount of time before attempting to retransmit. This significantly degrades network performance, leading to delays and reduced throughput, as devices spend more time detecting and recovering from collisions than transmitting data.

**Question 5:** Can a hub support full-duplex communication? Why or why not?

**Answer 5:** No, a hub cannot support full-duplex communication. Hubs operate in half-duplex mode. This is because they create a single collision domain. If a device could send and receive simultaneously, it would likely cause a collision with another device on the same shared medium. Full-duplex communication requires separate transmit and receive paths, which is achieved by switches creating dedicated connections between ports.

---

### 9. Key Concepts and Definitions Recap

*   **Hub:** A Layer 1 device that connects multiple network devices and broadcasts all incoming traffic to all other ports.
*   **Physical Layer (Layer 1):** Deals with the physical transmission of raw bits over a communication medium.
*   **Collision Domain:** A network segment where data collisions can occur. All devices in a collision domain share the same transmission medium and must contend for it.
*   **Broadcast:** Sending data to all devices on a network segment.
*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** A media access control protocol used in early Ethernet to manage shared bandwidth and handle collisions.
*   **Half-Duplex:** A communication mode where data can be transmitted in only one direction at a time.
*   **Full-Duplex:** A communication mode where data can be transmitted and received simultaneously in both directions.

---

### 10. Alignment with Course Outcomes

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   **Relevance:** Understanding the hub's role at the Physical Layer (Layer 1) demonstrates the layered architecture. CSMA/CD is a protocol relevant to physical media access.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   **Relevance:** This topic directly addresses networking devices (hubs) and their function in Ethernet. Contrasting hubs with switches highlights the role of MAC addresses and the MAC sublayer in efficient network operation, even though hubs themselves don't utilize MAC addresses. The discussion on collision domains is central to understanding MAC sublayer operation.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   **Relevance:** While not directly about routing or congestion control algorithms at higher layers, the discussion on collisions and bandwidth sharing with hubs illustrates fundamental problems that higher-layer protocols (like TCP's congestion control) and better devices (switches) aim to solve to improve Quality of Service (QoS).
*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   **Relevance:** Indirectly, the inefficiencies of hubs at lower layers necessitate robust error detection and recovery mechanisms at the Transport Layer (e.g., TCP's retransmissions) and influence application behavior.

---

### Summary

Hubs are fundamental yet primitive networking devices operating at the Physical Layer. They serve as simple connection points but lack intelligence, broadcasting all traffic and creating a single large collision domain. This leads to shared bandwidth and frequent collisions, significantly impacting network performance. While historically important, hubs have been widely superseded by more efficient switches, which operate at the Data Link Layer and offer segmented collision domains, dedicated bandwidth, and full-duplex capabilities. Understanding hubs is crucial for appreciating the evolution of networking technology and the importance of devices that intelligently manage traffic flow.
