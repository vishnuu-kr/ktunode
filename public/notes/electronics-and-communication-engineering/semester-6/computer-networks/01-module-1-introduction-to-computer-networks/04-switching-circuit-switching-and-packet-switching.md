---
title: "Switching: circuit switching and packet switching."
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff03a"
status: "completed"
scrapedAt: "2026-05-23T17:59:52.102Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Switching: Circuit Switching and Packet Switching

This module introduces the fundamental concepts of computer networks, with a specific focus on how data is moved from a source to a destination. We will explore two primary switching techniques: Circuit Switching and Packet Switching. Understanding these techniques is crucial for grasping the core principles of network operation and how different types of networks function.

### Learning Outcomes Covered:

*   **CO1: Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.**
    *   This topic directly addresses the principles of switching, a core component of computer networks. We will discuss how switching mechanisms enable data communication.
*   **CO2: Demonstrate protocols and the functions of different layers.**
    *   While this topic focuses on switching mechanisms, understanding switching is a prerequisite for understanding how protocols at different layers (e.g., network layer for routing) operate.
*   **CO3: Analyse the concept of routing and addressing protocols in the context of computer networking.**
    *   Packet switching relies heavily on routing and addressing to guide data packets. This topic will lay the groundwork for understanding these concepts.
*   **CO4: Make use of different physical communication standards in computer networks.**
    *   The choice of switching technique can influence the requirements and suitability of different physical communication standards.

---

### 1. Introduction to Switching

Switching is the process of forwarding data from one device to another across a network. It involves intermediate devices (switches or routers) that examine the destination of the data and direct it along the most appropriate path. In essence, switching is about establishing connections or forwarding data through a network.

**Key Concept:** A switch is a network device that connects multiple devices in a network and intelligently forwards data packets between them.

**Reference:**
*   **Kurose & Ross (Sixth Edition):** Chapter 1 provides a broad overview of networking, including the role of switches in connecting hosts and the Internet.
*   **Forouzan (Fourth Edition):** Chapter 1 introduces the concept of switching in the context of network topologies and data transmission.

---

### 2. Circuit Switching

**Definition:** Circuit switching is a connection-oriented switching technique where a dedicated physical path (a circuit) is established between the source and destination before data transmission begins. This path is reserved for the entire duration of the communication session.

**Key Characteristics:**

*   **Dedicated Path:** A fixed, end-to-end communication path is set up.
*   **Connection Establishment Phase:** A setup phase is required to establish the circuit. This involves signalling between the switches to allocate resources (e.g., bandwidth, time slots).
*   **Guaranteed Resources:** Once the circuit is established, the resources are exclusively dedicated to the connection. This ensures constant bandwidth and no delay due to congestion within the network during data transfer.
*   **Data Transmission Phase:** Data flows directly over the established circuit without any intermediate delay or processing for path determination.
*   **Connection Teardown Phase:** After the communication is complete, the circuit is released, freeing up the resources.

**How it Works (Step-by-Step):**

1.  **Connection Setup:** The source sends a request to establish a connection to the destination. This request traverses the network, with each intermediate switch reserving resources for the connection.
2.  **Circuit Establishment:** Once the request reaches the destination and is accepted, a dedicated path is formed.
3.  **Data Transfer:** Data flows along this established circuit.
4.  **Connection Teardown:** When the communication is finished, a teardown signal is sent to release the resources allocated to the circuit.

**Advantages:**

*   **Guaranteed Bandwidth:** Provides a constant data rate, ideal for real-time applications like voice and video conferencing.
*   **Low Latency and Jitter:** Since the path is dedicated, there is no queuing delay or jitter experienced during data transfer.
*   **Simple Data Transfer:** Once the circuit is set up, data can be sent without complex addressing or routing overhead for each packet.

**Disadvantages:**

*   **Inefficient Use of Resources:** Resources are allocated for the entire duration of the connection, even if no data is being transmitted (idle periods). This can lead to wasted bandwidth.
*   **Blocking:** If resources are unavailable along any link in the potential path, the connection cannot be established.
*   **Higher Setup Delay:** The connection establishment phase can introduce a significant delay before data transmission can begin.
*   **Less Flexible:** Once a circuit is set up, it's difficult to change the path if a better route becomes available.

**Examples:**

*   **Traditional Telephone Networks (PSTN - Public Switched Telephone Network):** This is the classic example. When you make a phone call, a dedicated circuit is set up between your phone and the recipient's phone for the duration of the call.
*   **Some early data networks:** Certain dedicated leased lines used for specific applications.

**Important Point to Remember:** Circuit switching establishes a *physical path* before data transfer.

**Reference:**
*   **Kurose & Ross (Sixth Edition):** Chapter 1 discusses circuit switching in contrast to packet switching, using the telephone network as an example.
*   **Forouzan (Fourth Edition):** Chapter 1 also provides a good explanation of circuit switching and its characteristics.
*   **Tanenbaum & Wetherall:** Likely covers circuit switching in detail in its early chapters, focusing on the historical context and comparison with packet switching.

---

### 3. Packet Switching

**Definition:** Packet switching is a data transmission technique where data is broken down into smaller units called **packets**. Each packet is independently routed through the network, and the network's intelligence is used to determine the path for each packet.

**Key Characteristics:**

*   **Packetization:** Data is divided into packets, each containing a header (with destination address, sequence number, etc.) and a payload (the actual data).
*   **No Dedicated Path:** There is no pre-established physical path. Packets are routed dynamically through the network.
*   **Store-and-Forward:** Each intermediate device (router) receives a packet, stores it temporarily, examines its header to determine the next hop, and then forwards it.
*   **Shared Resources:** Network links and switching capacity are shared among multiple users and their packets.
*   **Connectionless or Connection-Oriented:** Packet switching can be implemented in both connectionless (e.g., IP) and connection-oriented (e.g., ATM, Frame Relay) ways, though connectionless is more common for the Internet.

**How it Works (Step-by-Step - Connectionless Example):**

1.  **Packet Creation:** The source host breaks the message into packets. Each packet gets a header with addressing and other control information.
2.  **Independent Routing:** Each packet is sent to the network. Routers along the way examine the destination address in the packet's header and forward it to the next appropriate router.
3.  **Store-and-Forward:** Routers store packets temporarily in buffers before forwarding them. This buffering can lead to delays.
4.  **Arrival at Destination:** Packets may arrive out of order or be lost. The destination host reassembles the packets into the original message, potentially requesting retransmission of lost packets.

**Advantages:**

*   **Efficient Resource Utilization:** Network resources (bandwidth, switch capacity) are shared dynamically, leading to better utilization. Links are used only when there are packets to transmit.
*   **Robustness and Resilience:** If a link or router fails, packets can be rerouted around the failure.
*   **Flexibility:** Allows for efficient transmission of bursty traffic (traffic that comes in irregular bursts).
*   **Cost-Effective:** Generally more cost-effective than circuit switching for data communication.

**Disadvantages:**

*   **Variable Latency and Jitter:** Packets can experience varying delays due to queuing in router buffers, leading to jitter.
*   **Potential for Congestion:** When the volume of traffic exceeds network capacity, buffers can overflow, leading to packet loss.
*   **Overhead:** Each packet requires header information, which adds overhead to the transmission.
*   **Complexity:** Requires complex routing protocols and mechanisms for packet reassembly and error control.

**Types of Packet Switching:**

*   **Datagram Packet Switching (Connectionless):**
    *   Each packet is treated independently by the network.
    *   No prior connection setup is required.
    *   Packets can take different paths to the destination.
    *   Example: **Internet Protocol (IP)**.
*   **Virtual Circuit Packet Switching (Connection-Oriented):**
    *   A logical connection (virtual circuit) is established before data transmission.
    *   All packets belonging to that connection follow the same path.
    *   Provides some of the benefits of circuit switching (e.g., ordered delivery) without a dedicated physical circuit.
    *   Example: **Frame Relay, Asynchronous Transfer Mode (ATM)**.

**Examples:**

*   **The Internet:** The primary example of a packet-switched network.
*   **Ethernet Local Area Networks (LANs).**
*   **Mobile Networks (e.g., 4G, 5G).**

**Important Point to Remember:** Packet switching breaks data into packets that are routed independently.

**Reference:**
*   **Kurose & Ross (Sixth Edition):** Chapter 1 thoroughly explains packet switching, contrasting it with circuit switching and discussing its implications for performance. They delve into datagram and virtual circuit approaches in later chapters.
*   **Forouzan (Fourth Edition):** Chapter 1 provides a clear explanation of packet switching, its advantages, and disadvantages.
*   **Peterson & Davie:** Likely provides a systems-level view of packet switching, focusing on router internals and the protocols involved.
*   **Tanenbaum & Wetherall:** Offers a comprehensive treatment of packet switching, including historical development and technical details.

---

### 4. Comparison: Circuit Switching vs. Packet Switching

| Feature              | Circuit Switching                                | Packet Switching                                     |
| :------------------- | :----------------------------------------------- | :--------------------------------------------------- |
| **Connection Type**  | Connection-Oriented                              | Can be Connectionless or Connection-Oriented       |
| **Path**             | Dedicated physical path                          | No dedicated path; packets routed independently      |
| **Resource Allocation** | Reserved for the entire duration                 | Shared dynamically; used only when needed            |
| **Data Unit**        | Continuous stream of bits                        | Packets (with headers and data)                      |
| **Setup Phase**      | Required                                         | Not required for connectionless; for connection-oriented |
| **Bandwidth**        | Guaranteed, constant                             | Variable, shared; can experience congestion          |
| **Delay**            | Low latency, no jitter (after setup)             | Variable latency, potential jitter due to queuing    |
| **Efficiency**       | Inefficient for bursty traffic; wasted resources | Efficient for bursty traffic; good resource utilization |
| **Robustness**       | Less robust to link/node failures                | More robust; can reroute around failures             |
| **Overhead**         | Minimal during data transfer                     | Header overhead for each packet                      |
| **Examples**         | Traditional Telephone Network (PSTN)             | The Internet (IP), Ethernet, Frame Relay, ATM        |

**CO1 Alignment:** This comparison directly summarizes the principles of both switching techniques and highlights key components (dedicated paths vs. packets, resource allocation) and their implications for network performance (delay, efficiency).

---

### 5. Delay Analysis in Switching (Introduction)

Understanding the delays associated with each switching technique is crucial for network design and performance.

*   **Circuit Switching Delays:**
    *   **Circuit Establishment Delay:** The time taken to set up the dedicated path. This is a significant upfront cost.
    *   **Transmission Delay:** The time to push each bit onto the link (depends on link bandwidth and packet size).
    *   **Propagation Delay:** The time for a bit to travel from one end of a link to the other (depends on distance and speed of signal propagation).
    *   **No Queuing Delay** during data transfer once the circuit is established.

*   **Packet Switching Delays:**
    *   **Transmission Delay:** Time to push all bits of a packet onto the link.
    *   **Propagation Delay:** Time for a bit to travel across a link.
    *   **Queuing Delay:** Time a packet waits in a router's buffer before being processed and forwarded. This is the most variable and significant delay in packet switching.
    *   **Processing Delay:** Time taken by a router to examine packet headers, check for errors, and determine the output link.

**CO1 Alignment:** This section introduces basic concepts of delay analysis as they relate to the two switching methods.

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary difference between circuit switching and packet switching in terms of resource allocation?

**Answer 1:**
In circuit switching, resources (like bandwidth) are exclusively reserved for a connection for its entire duration, even if no data is being transmitted. In packet switching, resources are shared dynamically among multiple users and packets, and are used only when there are packets to transmit.

**Question 2:**
Give an example of a communication system that primarily uses circuit switching.

**Answer 2:**
The traditional Public Switched Telephone Network (PSTN) for voice calls is a prime example of circuit switching.

**Question 3:**
What are the potential drawbacks of circuit switching for data communication?

**Answer 3:**
Potential drawbacks include inefficient use of network resources (especially for bursty data traffic), higher setup delay, and blocking if resources are unavailable during the setup phase.

**Question 4:**
What is a "packet" in the context of packet switching?

**Answer 4:**
A packet is a small unit of data that is independently routed through a packet-switched network. It typically contains a header (with addressing and control information) and a payload (the actual data).

**Question 5:**
Explain the "store-and-forward" mechanism in packet switching.

**Answer 5:**
In the store-and-forward mechanism, a router or switch receives an entire packet, temporarily stores it in a buffer, processes its header to determine the next hop, and then forwards it to the next device on the path.

**Question 6:**
Which switching technique is generally more efficient for bursty data traffic like internet browsing, and why?

**Answer 6:**
Packet switching is generally more efficient for bursty data traffic because network resources are shared dynamically. This means that during periods of inactivity (no data being sent), the bandwidth and switch capacity can be used by other users, leading to better overall utilization. Circuit switching, by reserving resources, would waste capacity during these idle periods.

---

### 7. Important Points to Remember

*   **Circuit Switching = Dedicated Path + Guaranteed Resources.** Ideal for constant, real-time traffic.
*   **Packet Switching = Independent Packets + Shared Resources.** More efficient for bursty traffic and robust.
*   The Internet is a prime example of a packet-switched network.
*   The PSTN is a prime example of a circuit-switched network.
*   Packet switching introduces potential for **queuing delay** and **jitter** due to intermediate buffering.
*   Packet switching requires **header overhead** for each packet.

---

### 8. Connection to Course Outcomes

*   **CO1:** This entire topic is fundamental to summarizing the principles and components of computer networks and switching. We've discussed the mechanisms, advantages, and disadvantages of both circuit and packet switching, which are core components. We've also touched upon basic delay analysis related to these techniques.
*   **CO2:** While not directly detailing protocols, understanding switching mechanisms is essential for understanding how higher-layer protocols operate to manage data flow and ensure delivery. For instance, the reliability mechanisms of transport layer protocols become more critical in packet-switched environments.
*   **CO3:** Packet switching directly leads into the concepts of routing and addressing. The independent routing of packets necessitates sophisticated routing protocols to determine the best paths and addressing schemes to identify destinations.
*   **CO4:** The choice between circuit and packet switching influences the design and capabilities of physical communication standards. For instance, circuit-switched networks often utilize TDM (Time Division Multiplexing) for channel sharing, while packet-switched networks rely on statistical multiplexing techniques enabled by packet headers.

---

This concludes our introduction to circuit switching and packet switching. These foundational concepts are vital for understanding the rest of the computer networks curriculum.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
