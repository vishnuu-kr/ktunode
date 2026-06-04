---
title: "Router architecture"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff04e"
status: "completed"
scrapedAt: "2026-05-23T18:00:06.178Z"
---
# Computer Networks: Module 3 - Network Layer: Datagram versus Virtual Circuit

## Topic: Router Architecture

This module delves into the fundamental building blocks of the network layer, focusing on the critical role of routers in directing data across networks. We will explore the internal workings of routers and how they manage the flow of datagrams, contrasting this with the principles of virtual circuits.

---

### 1. Introduction to Routers

**Definition:** A router is a networking device that forwards data packets between computer networks. Routers perform the traffic-directing functions on the internet and can be used to connect two or more IP networks. They operate at the Network Layer (Layer 3) of the OSI model.

**Key Function:** To determine the best path for a data packet to travel from its source to its destination across interconnected networks. This is achieved through **routing algorithms**.

**Analogy:** Think of a router as a postal sorting office. It receives mail (packets), reads the destination address, consults its internal routing tables (maps), and then decides which outgoing mailbag (network interface) to put the mail in to get it closer to its destination.

**(Kurose & Ross, Chapter 5)**

---

### 2. Router Functionality: The Core Components

Routers are essentially specialized computers designed for high-speed packet forwarding. Internally, a router consists of several key components:

*   **Input Ports:**
    *   **Function:** Connect to the physical links of the network. They perform the physical layer and data link layer functions for incoming packets.
    *   **Key Actions:**
        *   **Physical Layer:** Receive the bit stream from the incoming link.
        *   **Data Link Layer:** De-encapsulate the packet from the data link frame (e.g., remove Ethernet headers and trailers).
        *   **Lookup:** Perform a lookup in the forwarding table (also known as the routing table or forwarding information base - FIB) to determine the outgoing link interface for the packet.
        *   **Queuing:** If the internal processing speed is slower than the incoming link speed, packets may need to be queued at the input port.

*   **Switching Fabric:**
    *   **Function:** The "heart" of the router, responsible for transferring a packet from an input port to an output port. The speed and architecture of the switching fabric determine the router's overall throughput.
    *   **Types of Switching Fabrics:**
        *   **Memory:** Packets are transferred via the router's memory. This is the slowest but simplest method. (Time: N * Packet_Transmission_Time, where N is the number of ports)
        *   **Bus:** Packets are transferred over a shared bus. Multiple packets can be transferred simultaneously if they are destined for different output ports, but bus contention can be a bottleneck. (Time: Packet_Transmission_Time + Bus_Arbitration_Time)
        *   **Crossbar:** A more sophisticated fabric that uses a grid of switches. It allows N packets to be transferred simultaneously, where N is the number of ports. Offers high throughput but is complex and expensive. (Time: Packet_Transmission_Time)

*   **Output Ports:**
    *   **Function:** Store packets that have been forwarded by the switching fabric and transmit them onto the outgoing link.
    *   **Key Actions:**
        *   **Queuing:** Packets are stored in output buffers before transmission. This is crucial as multiple packets arriving at the switching fabric for the same output port can cause queuing delays. Output queuing is a major source of packet delay and loss.
        *   **Data Link Layer:** Encapsulate the packet into a data link frame for transmission on the outgoing link.
        *   **Physical Layer:** Transmit the frame as a bit stream onto the outgoing link.

*   **Routing Processor (Control Plane):**
    *   **Function:** Responsible for executing routing protocols, maintaining routing tables, and computing forwarding tables. It is the "brain" of the router.
    *   **Key Actions:**
        *   Runs routing protocols (e.g., RIP, OSPF, BGP).
        *   Builds and maintains the **routing table**, which contains information about network destinations and how to reach them.
        *   Computes the **forwarding table (FIB)** from the routing table. The FIB is optimized for fast lookups and is used by the input ports for packet forwarding.
        *   Manages the router's overall operation, including configuration, diagnostics, and logging.

**(Kurose & Ross, Chapter 5; Forouzan, Chapter 6)**

---

### 3. Datagram Routers vs. Virtual Circuit Routers

The core difference lies in how they handle packet forwarding:

#### 3.1. Datagram Routers (e.g., the Internet)

*   **Principle:** Each packet is treated independently. The router only needs to know the destination IP address.
*   **Forwarding Table:** Contains entries mapping network prefixes (destination IP addresses) to outgoing interface(s).
*   **Operation:**
    1.  Packet arrives at an input port.
    2.  Input port extracts the destination IP address.
    3.  Input port performs a lookup in the **forwarding table (FIB)**.
    4.  The FIB guides the packet to the correct output port via the switching fabric.
    5.  The packet is transmitted from the output port.
*   **Key Characteristics:**
    *   **Connectionless:** No prior setup is required for communication.
    *   **No End-to-End State:** Routers do not maintain state for individual connections.
    *   **Best-Effort Delivery:** No guarantees on packet delivery order, reliability, or timeliness.
    *   **Flexibility:** Can easily adapt to network changes (e.g., link failures) by rerouting packets.
    *   **Overhead:** Each packet carries its full destination address, leading to higher overhead per packet.
    *   **Example:** The Internet Protocol (IP) is a datagram protocol.

**(Kurose & Ross, Chapter 1 & 5)**

**Example Scenario (Datagram):**
Imagine sending multiple postcards to the same destination. Each postcard is addressed independently, and they might travel through different sorting offices (routers) along different paths, potentially arriving out of order.

#### 3.2. Virtual Circuit Routers (e.g., ATM, Frame Relay)

*   **Principle:** A pre-established "virtual circuit" or path is used for all packets belonging to a particular connection.
*   **Forwarding Table:** Contains entries mapping a virtual circuit identifier (VCI) to an outgoing interface and a new VCI for the next hop.
*   **Operation:**
    1.  **Connection Setup Phase:** A signaling protocol establishes the virtual circuit, reserving resources along the path.
    2.  Packet arrives at an input port.
    3.  Input port extracts the virtual circuit identifier (VCI) from the incoming packet's header.
    4.  Input port performs a lookup in the **virtual circuit table**.
    5.  The table provides the outgoing interface and a new VCI to be used for the next hop.
    6.  The packet is forwarded to the output port with the new VCI.
*   **Key Characteristics:**
    *   **Connection-Oriented:** Requires a connection setup phase before data transfer.
    *   **End-to-End State:** Routers maintain state for each virtual circuit.
    *   **Guaranteed Services:** Can offer Quality of Service (QoS) guarantees (e.g., bandwidth, delay).
    *   **Efficiency:** Once the circuit is established, packets only need a VCI for routing, reducing overhead per packet.
    *   **Less Flexible:** More difficult to adapt to network changes as circuits need to be re-established.
    *   **Example:** Frame Relay, Asynchronous Transfer Mode (ATM).

**(Forouzan, Chapter 6; Peterson & Davie, Chapter 3)**

**Example Scenario (Virtual Circuit):**
Imagine making a phone call. You dial the number, a connection is established (ringing and answering), and then you have a dedicated voice path. All your conversation (packets) travels along this established path.

---

### 4. Router Forwarding vs. Routing

It's important to distinguish between these two related but distinct functions within a router:

*   **Forwarding (Data Plane):**
    *   **Function:** The actual process of moving a packet from an input port to an output port. This is a high-speed operation performed on every packet.
    *   **Components Involved:** Input ports, switching fabric, output ports.
    *   **Decision Basis:** Uses the **forwarding table (FIB)**.
    *   **Speed:** Per-packet operation, requiring very fast hardware.

*   **Routing (Control Plane):**
    *   **Function:** The process of determining the paths over which packets should be sent. This is a slower, more analytical process that influences the forwarding table.
    *   **Components Involved:** Routing processor.
    *   **Decision Basis:** Uses **routing algorithms** and information from routing protocols to build the **routing table**, which is then converted into the FIB.
    *   **Speed:** Done periodically or when network topology changes, not on a per-packet basis.

**(Kurose & Ross, Chapter 5)**

---

### 5. Forwarding Table Structure and Lookup

The efficiency of a router heavily depends on how quickly it can look up the correct outgoing interface for a given destination IP address.

*   **Longest Prefix Match:**
    *   **Concept:** IP addressing uses hierarchical addressing. A destination IP address might match multiple entries in the forwarding table (e.g., a specific host address might match a /24 network prefix, a /16 network prefix, and a /8 network prefix).
    *   **Rule:** The router always chooses the entry in the forwarding table that has the **longest matching network prefix** with the destination IP address. This ensures that the packet is sent to the most specific next hop.
    *   **Example:** If the destination IP is `192.168.1.50` and the forwarding table has entries for `192.168.1.0/24` (next hop A) and `192.168.0.0/16` (next hop B), the router will choose the `/24` entry (next hop A) because it's the longest match.

*   **Hardware Implementation:**
    *   Forwarding tables are often implemented using specialized hardware like **Content Addressable Memory (CAM)** tables or **Trie data structures** for very fast lookups, even with millions of entries.

**(Kurose & Ross, Chapter 5; Forouzan, Chapter 6)**

---

### 6. Packet Delay and Loss in Routers

Routers are significant sources of delay and potential packet loss in a network.

*   **Types of Delay:**
    1.  **Transmission Delay:** Time to push all bits of a packet onto the link. Depends on packet size and link bandwidth.
    2.  **Propagation Delay:** Time for a bit to travel from one end of a link to the other. Depends on the physical distance and speed of signal propagation.
    3.  **Processing Delay:** Time taken by the router to examine the packet header, determine the output link, and perform error checks. Typically very small.
    4.  **Queuing Delay:** **This is the most variable and significant delay component.** It's the time a packet spends waiting in a queue at an input or output port before being processed or transmitted. This delay increases dramatically as the traffic load approaches the router's capacity.

*   **Packet Loss:**
    *   **Cause:** Occurs when an output port's buffer is full and a new packet arrives. The router must discard (drop) the incoming packet.
    *   **Mitigation:** Buffering is essential, but finite buffer sizes mean loss is inevitable under heavy congestion.

**(Kurose & Ross, Chapter 1; Forouzan, Chapter 2)**

---

### 7. Router Design Considerations

Building efficient and high-performance routers involves several design choices:

*   **Switching Fabric Speed:** The speed of the fabric is critical. A router's throughput cannot exceed the capacity of its switching fabric.
*   **Number of Ports:** The density of ports impacts scalability.
*   **Processing Power:** For the control plane to run routing protocols and update forwarding tables efficiently.
*   **Buffering Capacity:** Sufficient buffering is needed to handle traffic bursts and reduce packet loss, but excessive buffering can increase queuing delay.
*   **Hardware vs. Software Forwarding:** Most modern high-performance routers use hardware (ASICs - Application-Specific Integrated Circuits) for the forwarding plane to achieve line-rate speeds. The control plane typically runs in software.

**(Peterson & Davie, Chapter 3)**

---

### 8. Connecting to Course Outcomes

*   **CO1 (Principles and components, switching, delay analysis, layered architecture):** This topic directly covers router components, switching fabric types, the concept of queuing delay and its impact, and how routers operate at the Network Layer of the layered architecture.
*   **CO2 (Protocols and functions of layers):** We discuss how routers perform functions of the Network Layer (packet forwarding) and Data Link/Physical Layers (framing, de-framing, bit transmission).
*   **CO3 (Routing and addressing protocols):** This is the core of the topic. We examine how routers use addressing (IP addresses) and routing tables to make forwarding decisions, and the distinction between datagram and virtual circuit approaches to routing.
*   **CO4 (Physical communication standards):** While not the primary focus, understanding that input/output ports connect to physical links implies interaction with physical layer standards (e.g., Ethernet, Wi-Fi) to transmit and receive bits.

---

### Important Points to Remember

*   **Routers operate at the Network Layer (Layer 3).**
*   **Key Function: Forwarding packets based on destination IP addresses.**
*   **Datagram Routers (Internet):** Connectionless, independent packet handling, rely on destination IP address and forwarding tables.
*   **Virtual Circuit Routers:** Connection-oriented, pre-established paths, rely on Virtual Circuit Identifiers (VCIs).
*   **Forwarding vs. Routing:** Forwarding is the physical movement of packets; Routing is the calculation of paths.
*   **Forwarding Table (FIB):** Crucial for fast packet lookup, uses longest prefix match.
*   **Queuing Delay:** The most significant and variable delay component in routers.
*   **Packet Loss:** Primarily occurs when output buffers are full.

---

### Practice Questions & Answers

**Question 1:** What is the primary function of a router?
**Answer:** The primary function of a router is to forward data packets between different computer networks based on their destination IP addresses.

**Question 2:** Differentiate between the forwarding plane and the control plane of a router.
**Answer:**
*   **Forwarding Plane (Data Plane):** Responsible for the high-speed movement of packets from input ports to output ports, based on the forwarding table. It's the hardware execution of forwarding decisions.
*   **Control Plane:** Responsible for building and maintaining the forwarding table by running routing protocols and making routing decisions. It's the "brain" of the router, operating in software.

**Question 3:** What is the "longest prefix match" rule, and why is it important in datagram routing?
**Answer:** The longest prefix match rule states that when a destination IP address matches multiple entries in a router's forwarding table, the router selects the entry with the longest matching network prefix. This is important because it ensures that packets are routed to the most specific next hop, leading to more accurate and efficient path selection in hierarchical IP addressing.

**Question 4:** In the context of router components, which part is most responsible for queuing delay, and why?
**Answer:** The output port queues are most responsible for queuing delay. This is because multiple packets arriving at the switching fabric for the same output port must wait their turn to be transmitted, especially if the aggregate traffic rate exceeds the output link's capacity.

**Question 5:** Give one advantage and one disadvantage of virtual circuit routing compared to datagram routing.
**Answer:**
*   **Advantage:** Virtual circuits can offer Quality of Service (QoS) guarantees because resources can be reserved during the connection setup phase.
*   **Disadvantage:** Virtual circuits are less flexible than datagrams. Network changes can require re-establishment of circuits, which is more complex than simply rerouting individual datagrams.

---
This concludes the notes for Router Architecture. Remember to refer to your textbooks for more in-depth explanations and diagrams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
