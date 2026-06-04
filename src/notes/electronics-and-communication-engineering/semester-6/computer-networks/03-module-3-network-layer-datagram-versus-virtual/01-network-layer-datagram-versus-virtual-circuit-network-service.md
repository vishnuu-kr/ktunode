---
title: "Network Layer: Datagram versus virtual-circuit network service"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff04d"
status: "completed"
scrapedAt: "2026-05-23T18:00:05.440Z"
---
# Computer Networks - Module 3: Network Layer: Datagram vs. Virtual-Circuit Network Service

This module delves into the fundamental concepts of the Network Layer, focusing on two primary service models: **Datagram Networks** and **Virtual-Circuit Networks**. Understanding these models is crucial for comprehending how data is routed and transported across interconnected networks.

---

## 1. Introduction to the Network Layer

The Network Layer is responsible for moving packets from a source host to a destination host. It provides an **end-to-end packet delivery service**. This layer is concerned with logical addressing and routing, ensuring that packets find their way through the complex web of interconnected networks.

*   **Key Function:** Packet forwarding (routing) and addressing.
*   **Core Challenge:** How to best map logical addresses to network interfaces and determine the optimal path for packet delivery.
*   **CO1 Alignment:** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture. (This module contributes to understanding the role of the Network Layer in the overall architecture and its principles.)
*   **CO2 Alignment:** Demonstrate protocols and the functions of different layers. (This module focuses on the functions and protocols of the Network Layer.)
*   **CO3 Alignment:** Analyze the concept of routing and addressing protocols in the context of computer networking. (This is the primary focus of this module.)

---

## 2. Network Layer Service Models: Datagram vs. Virtual-Circuit

The Network Layer can offer different types of services to the Transport Layer. The two most prominent service models are:

### 2.1 Datagram Network Service

In a datagram network, the network layer treats each packet (datagram) independently. There is no prior setup or call establishment phase. Each datagram carries the full destination address, and intermediate routers use this address to forward the packet to the next hop.

*   **Analogy:** Sending individual letters through the postal service. Each letter has the full destination address, and mail carriers sort and deliver them based on that address without any prior arrangement between sender and receiver.

*   **Key Characteristics:**
    *   **Connectionless:** No prior setup required before sending data.
    *   **Each datagram is independent:** Routers make forwarding decisions for each datagram individually.
    *   **Best-effort delivery:** No inherent guarantee of delivery, order, or error-free transmission. These are typically provided by higher layers (e.g., Transport Layer).
    *   **Routers maintain forwarding tables:** These tables map destination addresses to outgoing links.
    *   **No call setup phase:** Reduces overhead for short or sporadic communications.
    *   **No state information maintained by the network for connections:** Each router acts independently.

*   **Advantages:**
    *   **Robustness:** If a router or link fails, subsequent datagrams can be rerouted around the failure without affecting previously sent datagrams.
    *   **Simplicity:** The network itself doesn't need to manage connection states.
    *   **Flexibility:** Can handle a mix of traffic types easily.

*   **Disadvantages:**
    *   **No guarantee of delivery order:** Datagrams can arrive out of order due to different paths taken.
    *   **No guarantee of delivery:** Packets can be lost due to congestion, errors, or router failures.
    *   **Potential for higher overhead:** Each datagram needs a full destination address, and routers perform more complex lookups.
    *   **Congestion handling can be challenging:** Without explicit connection state, managing congestion can be less efficient.

*   **Example:** The **Internet Protocol (IP)** is the prime example of a datagram network. Each IP packet contains the source and destination IP addresses. Routers use IP routing tables to forward these packets.

*   **Textbook Reference:**
    *   **Kurose & Ross (Chapter 4):** Discusses the Internet Protocol (IP) and its datagram nature. Explains how routers make forwarding decisions based on destination IP addresses.
    *   **Forouzan (Chapter 7):** Introduces the concept of connectionless services and the role of the network layer in datagram forwarding.

*   **CO3 Alignment:** Datagram networks directly relate to routing and addressing protocols (like IP) and how they enable end-to-end delivery.

### 2.2 Virtual-Circuit Network Service

In a virtual-circuit network, a connection (virtual circuit) is established between the source and destination before any data packets are sent. This connection involves a setup phase where a path is agreed upon and resources (if any) might be allocated. Once established, all packets belonging to that virtual circuit follow the same path.

*   **Analogy:** Making a traditional phone call. You dial a number, the network establishes a connection between you and the other party, and then you can talk. All your voice packets follow the same established circuit.

*   **Key Characteristics:**
    *   **Connection-oriented:** Requires a connection setup phase before data transfer.
    *   **Fixed path:** Once established, all packets for that virtual circuit follow the same pre-determined path.
    *   **Virtual-Circuit Identifiers (VCIs):** Instead of full destination addresses, packets carry a VCI that identifies the virtual circuit. Routers use VCIs to forward packets.
    *   **Network maintains connection state:** Routers store information about each active virtual circuit.
    *   **Potential for guaranteed services:** Can offer better quality of service (QoS) guarantees like bounded delay or bandwidth.

*   **Phases of a Virtual-Circuit Network:**
    1.  **Connection Setup:**
        *   Sender sends a **Setup Request** message.
        *   Network establishes a path and assigns a VCI at each intermediate router.
        *   **Setup Acknowledge** message is sent back to the sender.
    2.  **Data Transfer:**
        *   Sender sends data packets, each containing the VCI.
        *   Routers use the VCI to look up the outgoing link and the new VCI for the next hop.
    3.  **Connection Teardown:**
        *   Sender sends a **Teardown Request** message.
        *   Network tears down the virtual circuit and releases any allocated resources.

*   **Advantages:**
    *   **Orderly delivery:** Packets are guaranteed to arrive in the order they were sent.
    *   **Reduced overhead during data transfer:** Packets only need a VCI, not a full destination address.
    *   **Simplified routing:** Routers only need to look up VCIs, which can be faster than full IP address lookups.
    *   **Support for QoS:** Easier to provide guarantees on delay, jitter, and bandwidth.

*   **Disadvantages:**
    *   **Less robust to failures:** If a router or link in the virtual circuit fails, the entire connection is broken, and a new connection must be established.
    *   **Higher setup overhead:** The connection setup phase adds latency and complexity.
    *   **Network state management:** Routers need to maintain state for each virtual circuit, increasing memory and processing requirements.
    *   **Less flexible:** Not ideal for applications with highly variable traffic patterns or where rerouting is frequently needed.

*   **Examples:**
    *   **Frame Relay:** A popular WAN technology that uses virtual circuits.
    *   **Asynchronous Transfer Mode (ATM):** Another WAN technology that employs virtual circuits with fixed-size cells.
    *   **X.25:** An older packet-switched network protocol that uses virtual circuits.

*   **Textbook Reference:**
    *   **Kurose & Ross (Chapter 4):** Discusses ATM and Frame Relay as examples of virtual-circuit networks.
    *   **Forouzan (Chapter 7):** Explains connection-oriented services and the establishment and maintenance of virtual circuits.

*   **CO3 Alignment:** Virtual-circuit networks illustrate a different approach to routing and addressing, where path selection happens upfront and is identified by VCIs.

---

## 3. Comparison of Datagram and Virtual-Circuit Networks

| Feature            | Datagram Network (e.g., IP)                               | Virtual-Circuit Network (e.g., ATM, Frame Relay)      |
| :----------------- | :-------------------------------------------------------- | :---------------------------------------------------- |
| **Connectionless** | Yes                                                       | No (Connection-oriented)                              |
| **Setup Phase**    | No                                                        | Yes (Connection setup required before data transfer)  |
| **Packet Addressing**| Full destination address in each packet                   | Virtual Circuit Identifier (VCI) in each packet       |
| **Path**           | Each packet can take a different path                     | All packets in a VC follow the same path              |
| **Router State**   | Routers only maintain forwarding tables (destination -> next hop) | Routers maintain state for each active VC             |
| **Delivery Order** | No guarantee                                              | Guaranteed (packets follow the same path)             |
| **Error Handling** | Best-effort; handled by higher layers                     | Can potentially offer better error control within the network |
| **QoS Support**    | Difficult to provide strict guarantees                    | Easier to provide guarantees (e.g., bandwidth, delay) |
| **Robustness**     | Highly robust to network failures (rerouting)             | Less robust (failure breaks the entire VC)            |
| **Overhead**       | Higher addressing overhead per packet                     | Lower addressing overhead per packet (after setup)    |
| **Complexity**     | Simpler network infrastructure                            | More complex network infrastructure (stateful routers)|
| **Flexibility**    | High (handles varied traffic easily)                      | Lower (can be less efficient for bursty traffic)    |

*   **Important Point to Remember:** The Internet's core network layer (IP) is a datagram network, providing a simple, robust, and flexible best-effort service. Higher layers (like TCP) add reliability and ordering. Virtual-circuit networks offer more control and predictability but at the cost of flexibility and robustness to individual component failures.

---

## 4. Routing in Datagram Networks

In datagram networks, each router independently decides the next hop for each incoming packet. This requires:

*   **Routing Algorithms:** Protocols like RIP, OSPF, and BGP are used to build and maintain routing tables.
*   **Forwarding Tables:** These tables map destination network prefixes to the next-hop router or outgoing interface.

*   **CO3 Alignment:** This is a direct application of routing principles in a datagram context.

---

## 5. Routing in Virtual-Circuit Networks

In virtual-circuit networks, routing decisions are made primarily during the **connection setup phase**.

*   **Path Selection:** A path is chosen based on network conditions, QoS requirements, or administrative policies.
*   **VCI Assignment:** At each hop along the chosen path, a new VCI is assigned for the virtual circuit.
*   **Forwarding:** During data transfer, packets are forwarded based on the VCI using simple table lookups, without the need for complex routing algorithms running on every packet.

*   **CO3 Alignment:** This highlights how routing differs significantly when connection-oriented services are employed.

---

## 6. Key Concepts and Definitions

*   **Datagram:** An independent packet that contains the full destination address.
*   **Virtual Circuit (VC):** A pre-established path for a sequence of packets between two endpoints.
*   **Connectionless Service:** A network service where no prior setup is required to send data.
*   **Connection-Oriented Service:** A network service that requires a connection setup phase before data transfer.
*   **Virtual-Circuit Identifier (VCI):** A label or identifier used in virtual-circuit networks to represent a specific connection.
*   **Forwarding Table:** A table in a router that maps destination addresses (or VCIs) to output interfaces or next-hop routers.
*   **Best-Effort Delivery:** A network service that makes a best effort to deliver packets but offers no guarantees on delivery, order, or error rates.
*   **Quality of Service (QoS):** A set of attributes that provide a measure of the performance of a network connection, such as bandwidth, delay, and jitter.

---

## 7. Practice Questions

**Question 1:**
Which of the following is a characteristic of a datagram network?
a) Requires a connection setup phase.
b) Each packet is treated independently.
c) Guarantees ordered delivery of packets.
d) Routers maintain state for each flow.

**Question 2:**
In a virtual-circuit network, what identifies a packet belonging to a specific connection at each router?
a) The full destination IP address.
b) A source IP address.
c) A Virtual-Circuit Identifier (VCI).
d) A MAC address.

**Question 3:**
Which network service model is more robust to network link failures, allowing new paths to be established for subsequent packets?
a) Datagram Network
b) Virtual-Circuit Network
c) Both equally
d) Neither

**Question 4:**
True or False: The Internet Protocol (IP) provides a connection-oriented service.

**Question 5:**
Explain the trade-offs between datagram and virtual-circuit network services in terms of robustness and overhead.

---

## 8. Answers to Practice Questions

**Answer 1:**
b) Each packet is treated independently.
*   **Explanation:** Datagram networks are connectionless, meaning no setup is needed, and each packet is routed based on its own destination address. Ordered delivery and guarantees are not inherent.

**Answer 2:**
c) A Virtual-Circuit Identifier (VCI).
*   **Explanation:** In virtual-circuit networks, a VCI is used to identify the specific virtual circuit a packet belongs to, allowing routers to forward it along the established path.

**Answer 3:**
a) Datagram Network
*   **Explanation:** Datagram networks are more robust because if a link fails, subsequent packets can be rerouted by the routers independently. In a virtual-circuit network, a link failure in the established path breaks the entire connection, requiring a new setup.

**Answer 4:**
False
*   **Explanation:** The Internet Protocol (IP) is a classic example of a datagram network, providing a connectionless, best-effort service. Connection-oriented services are typically provided by higher layers, such as TCP.

**Answer 5:**
*   **Robustness:**
    *   **Datagram Networks:** Highly robust. If a router or link fails, subsequent packets can be dynamically rerouted around the failure without interrupting existing communication (though some packets might be lost and need retransmission by a higher layer).
    *   **Virtual-Circuit Networks:** Less robust. If a router or link in the established virtual circuit fails, the entire connection is broken. A new connection must be set up, potentially with a different path, which can cause significant disruption.
*   **Overhead:**
    *   **Datagram Networks:** Higher overhead per packet. Each packet must carry the full destination address, and routers must perform complex lookups for every packet.
    *   **Virtual-Circuit Networks:** Lower overhead per packet *after* connection setup. Packets only need to carry a VCI, which is much smaller than a full destination address. Router lookups are simpler (VCI to next hop/VCI). However, there is the overhead of the connection setup and teardown phases.

---

## 9. Important Points to Remember

*   **Datagram networks** are connectionless, independent packet forwarding, flexible, and robust but lack inherent guarantees. (Example: IP)
*   **Virtual-circuit networks** are connection-oriented, pre-established paths, efficient forwarding of subsequent packets, can offer QoS but are less robust to failures and have setup overhead. (Examples: ATM, Frame Relay)
*   The choice between datagram and virtual-circuit service impacts network design, performance, and robustness.
*   The Internet's core network layer (IP) is a datagram service, relying on higher layers (like TCP) for reliability and ordered delivery.

---
This concludes Module 3, providing a foundational understanding of the two primary service models offered by the Network Layer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
