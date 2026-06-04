---
title: "Types of delay"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff03d"
status: "completed"
scrapedAt: "2026-05-23T17:59:54.287Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Types of Delay

**Learning Outcomes:**

*   Understand the different types of delays that occur in computer networks.
*   Identify the sources and characteristics of each type of delay.
*   Analyze how these delays impact network performance.
*   Calculate the total delay for a packet traversing a network.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture. (This topic directly contributes to understanding delay analysis.)

---

### 1. Introduction to Delay in Networks

Delay, also known as latency, is a fundamental characteristic of computer networks that affects the perceived performance of applications. It refers to the time it takes for a unit of data (e.g., a bit, a packet, a message) to travel from its source to its destination. Understanding the different types of delay is crucial for network design, troubleshooting, and application development.

**Key Concept:** Delay is an additive metric. The total delay experienced by a packet is the sum of various individual delays encountered along its path.

---

### 2. Types of Delay

There are four primary types of delay that a packet experiences as it travels from a source to a destination through a network:

**2.1. Processing Delay (R)**

*   **Definition:** The time it takes for network hardware at an intermediate node (router, switch) to process the packet's header, check for errors, determine the outgoing link, and perform other necessary tasks.
*   **Sources:**
    *   **Hardware Processing:** CPU cycles, memory access for packet manipulation.
    *   **Software Processing:** Operating system overhead, protocol stack processing.
    *   **Error Checking:** CRC calculations, checksum verification.
*   **Characteristics:**
    *   Typically very small, often measured in microseconds or nanoseconds.
    *   Can vary depending on the complexity of the router and the packet header.
    *   Generally considered relatively constant for a given router and packet type, though it can fluctuate with router load.
*   **Example:** When a router receives a packet, it needs to examine the destination IP address in the header to decide where to forward it. This involves looking up the address in its routing table.
*   **Textbook Reference:** Kurose & Ross, Chapter 1, discusses the role of routers in forwarding packets, implying the processing involved. Forouzan, Chapter 1, also covers basic network devices and their functions.

**2.2. Queuing Delay (Q)**

*   **Definition:** The time a packet spends waiting in a queue at an intermediate node before being transmitted. This occurs when the arrival rate of packets to a node exceeds its service rate (transmission rate).
*   **Sources:**
    *   **Congestion:** When multiple packets arrive at a router for the same output link simultaneously, and the link cannot transmit them all at once.
    *   **Buffer Overflow:** If queues become too full, packets may be dropped (leading to retransmission and further delays).
*   **Characteristics:**
    *   **Highly Variable:** This is the most significant and variable component of delay. It depends heavily on network congestion levels.
    *   Can range from microseconds to milliseconds or even seconds in heavily congested networks.
    *   Affected by the queuing discipline used (e.g., First-In, First-Out - FIFO).
*   **Example:** Imagine a single lane highway (the output link) where cars (packets) arrive from multiple entry points. If more cars arrive than can pass through the lane, they will form a queue.
*   **Textbook Reference:** Kurose & Ross, Chapter 4 (Transport Layer), discusses TCP's congestion control mechanisms which are directly related to managing queuing delay. Forouzan, Chapter 12 (Network Layer), talks about routing and packet forwarding, where congestion in routers leads to queuing.
*   **Important Point:** Queuing delay is the only type of delay that is dependent on the history of the network traffic and not just the characteristics of a single link or device.

**2.3. Transmission Delay (Tr)**

*   **Definition:** The time required to push all the bits of a packet onto the link. This is essentially the "sending" time.
*   **Formula:**
    `Transmission Delay = Packet Length (in bits) / Link Bandwidth (in bits per second)`
*   **Sources:**
    *   The physical act of transmitting each bit of the packet over the communication medium.
*   **Characteristics:**
    *   Dependent on the size of the packet and the bandwidth of the link.
    *   Constant for a given packet and link.
    *   Can be significant on low-bandwidth links or for large packets.
*   **Example:** Sending a 1000-byte packet (8000 bits) over a 10 Mbps (10,000,000 bits per second) Ethernet link takes: `8000 bits / 10,000,000 bits/sec = 0.0008 seconds = 0.8 milliseconds`.
*   **Textbook Reference:** Kurose & Ross, Chapter 1, clearly defines transmission delay and bandwidth. Forouzan, Chapter 1, also explains bandwidth and transmission rate.
*   **Important Point:** Transmission delay is different from propagation delay. Transmission delay is about "pushing" the bits onto the wire, while propagation delay is about "moving" the bits across the wire.

**2.4. Propagation Delay (Tp)**

*   **Definition:** The time it takes for a bit to travel from the sender to the receiver across a physical link. This is the time the signal takes to traverse the medium.
*   **Formula:**
    `Propagation Delay = Distance (in meters) / Propagation Speed (in meters per second)`
*   **Sources:**
    *   The speed of light in the transmission medium (e.g., fiber optic cable, copper wire, air).
*   **Characteristics:**
    *   Dependent on the physical distance of the link and the speed of signal propagation.
    *   Constant for a given link and medium.
    *   Not dependent on packet length or bandwidth.
    *   Typically measured in milliseconds.
*   **Example:** Traveling 1000 km (1,000,000 meters) over a fiber optic cable with a propagation speed of 200,000 km/sec (200,000,000 m/sec) takes: `1,000,000 meters / 200,000,000 m/sec = 0.005 seconds = 5 milliseconds`.
*   **Textbook Reference:** Kurose & Ross, Chapter 1, clearly defines propagation delay and propagation speed. Forouzan, Chapter 1, also explains propagation speed and the physical media.
*   **Important Point:** The speed of light in a vacuum is approximately 3 x 10^8 meters per second. However, in physical media, this speed is reduced.

---

### 3. Total End-to-End Delay

The total delay experienced by a packet from source to destination is the sum of all these individual delays accumulated across each hop (router/switch) and each link.

**Total Delay = R + Q + Tr + Tp**

Where:
*   **R:** Processing Delay at the source and each intermediate node.
*   **Q:** Queuing Delay at each intermediate node.
*   **Tr:** Transmission Delay for each link.
*   **Tp:** Propagation Delay for each link.

Let's consider a path with N links and N-1 intermediate nodes.

**Total Delay = (R_source + R_node1 + ... + R_node(N-1)) + (Q_node1 + ... + Q_node(N-1)) + (Tr_link1 + ... + Tr_linkN) + (Tp_link1 + ... + Tp_linkN)**

**Important Point:** For a single packet, transmission delay occurs once for each link, while propagation delay also occurs once for each link. Processing and queuing delays occur at each intermediate device.

**Example Scenario:**

Consider a packet traveling from Host A to Host B, passing through Router R1.

*   **Host A:**
    *   Processing Delay (R_A): 0.1 ms (for starting the transmission)
    *   Transmission Delay (Tr_A): 0.02 ms (to push the first bit onto the link)
*   **Link A-R1:**
    *   Propagation Delay (Tp_AR1): 1 ms (distance and medium)
*   **Router R1:**
    *   Processing Delay (R_R1): 0.5 ms (routing lookup)
    *   Queuing Delay (Q_R1): 2 ms (assuming some congestion)
    *   Transmission Delay (Tr_R1): 0.02 ms (to push the packet onto the next link)
*   **Link R1-Host B:**
    *   Propagation Delay (Tp_R1B): 1 ms (distance and medium)
*   **Host B:**
    *   Processing Delay (R_B): 0.1 ms (for receiving the packet)

**Calculation:**

*   **Total Processing Delay:** R_A + R_R1 + R_B = 0.1 + 0.5 + 0.1 = 0.7 ms
*   **Total Queuing Delay:** Q_R1 = 2 ms
*   **Total Transmission Delay:** Tr_A + Tr_R1 = 0.02 + 0.02 = 0.04 ms
    *   *Note: Transmission delay is only incurred when the packet is actually being sent onto a link. The host sends the packet onto the first link, and the router sends it onto the second link.*
*   **Total Propagation Delay:** Tp_AR1 + Tp_R1B = 1 + 1 = 2 ms

**Total End-to-End Delay = 0.7 ms + 2 ms + 0.04 ms + 2 ms = 4.74 ms**

**Important Point:** The initial transmission delay at the source is often considered part of the end-to-end delay.

---

### 4. Delay vs. Bandwidth

It's important to distinguish between delay and bandwidth:

*   **Bandwidth:** The capacity of a link, measured in bits per second (bps). It determines how quickly bits can be sent.
*   **Delay:** The time it takes for data to travel from source to destination. It determines how quickly the *first* bit arrives and how quickly the *entire message* arrives.

**Analogy:**
Imagine a pipe.
*   **Bandwidth** is the width of the pipe (how much water can flow per second).
*   **Delay** is how long it takes for a drop of water to travel from one end of the pipe to the other.

A high-bandwidth pipe doesn't necessarily mean faster travel time for a single drop; it means more drops can travel simultaneously.

**Example:**
*   Link 1: Bandwidth = 1 Mbps, Length = 1 km.
*   Link 2: Bandwidth = 100 Mbps, Length = 1 km.

If you send a 1 MB file (8 Megabits):
*   **Transmission Delay:**
    *   Link 1: 8 Mb / 1 Mbps = 8 seconds
    *   Link 2: 8 Mb / 100 Mbps = 0.08 seconds
*   **Propagation Delay:** Will be the same for both if the physical distance is the same (e.g., 0.005 ms if speed of light is considered).

This example highlights that for large amounts of data, transmission delay can dominate on low-bandwidth links.

---

### 5. Impact of Delay

*   **Application Performance:** High delay can significantly degrade the performance of interactive applications like VoIP, video conferencing, and online gaming.
*   **Throughput:** While bandwidth dictates the maximum rate, delays (especially queuing) can reduce the *effective* throughput experienced by an application.
*   **TCP Performance:** The TCP protocol relies on acknowledgments. High delay means acknowledgments take longer to return, slowing down the rate at which data can be sent.

---

### 6. Practice Questions

1.  **Question:** A packet of 1500 bytes is transmitted over a link with a bandwidth of 10 Mbps. The propagation delay across this link is 5 ms. What is the transmission delay and the total delay across this single link?
    *   **Answer:**
        *   Packet Length: 1500 bytes \* 8 bits/byte = 12000 bits
        *   Transmission Delay = Packet Length / Bandwidth
        *   Transmission Delay = 12000 bits / 10,000,000 bps = 0.0012 seconds = 1.2 ms
        *   Total Delay (for this single link) = Transmission Delay + Propagation Delay
        *   Total Delay = 1.2 ms + 5 ms = 6.2 ms

2.  **Question:** Explain the difference between transmission delay and propagation delay. Which one depends on the packet size, and which one depends on the distance?
    *   **Answer:**
        *   **Transmission Delay:** The time to push all bits of a packet onto a link. It depends on the **packet size** and the link's bandwidth.
        *   **Propagation Delay:** The time for a bit to travel from sender to receiver across a link. It depends on the **distance** of the link and the propagation speed of the signal in the medium.

3.  **Question:** What is the primary cause of queuing delay, and why is it the most variable type of delay?
    *   **Answer:**
        *   The primary cause of queuing delay is **network congestion**. This happens when the rate at which packets arrive at a router (or switch) for a particular output link exceeds the rate at which the link can transmit them.
        *   It is the most variable type of delay because it depends on the real-time traffic load on the network, which fluctuates dynamically. Factors like the number of active users, the size of data transfers, and the efficiency of routing protocols all contribute to its variability.

4.  **Question:** A sender transmits a large file over a path of two routers. List all the types of delays the file's packets will experience from the moment the first bit leaves the source to the moment the last bit arrives at the destination.
    *   **Answer:**
        *   **Processing Delay:** At the source, the first router, and the second router.
        *   **Queuing Delay:** At the first router and the second router.
        *   **Transmission Delay:** On the link from the source to the first router, and on the link from the first router to the second router, and on the link from the second router to the destination. (Technically, transmission delay occurs for each link the packet traverses).
        *   **Propagation Delay:** On the link from the source to the first router, and on the link from the first router to the second router, and on the link from the second router to the destination. (Propagation delay occurs for each link the packet traverses).

---

### 7. Important Points to Remember

*   **Delay is additive:** Total delay is the sum of individual delays.
*   **Queuing delay is king:** It's the most variable and often the largest contributor to overall delay, especially in congested networks.
*   **Bandwidth vs. Delay:** They are distinct concepts. High bandwidth reduces transmission delay but does not affect propagation delay.
*   **End-to-end delay:** Includes delays at the source, intermediate nodes, and over links.
*   **The internet is an "internetwork":** Packets traverse multiple links and routers, accumulating delays at each step.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References

*   **Kurose, J. F., & Ross, K. W. (2017).** *Computer Networking: A Top-Down Approach Featuring the Internet* (6th ed.). Pearson. (Chapters 1, 4, 5)
*   **Forouzan, B. A. (2008).** *Data Communications and Networking* (4th ed.). Tata McGraw-Hill. (Chapters 1, 12)
*   **Tanenbaum, A. S., & Wetherall, D. J.** *Computer Networks*. Pearson. (Relevant chapters on network performance and latency).

---