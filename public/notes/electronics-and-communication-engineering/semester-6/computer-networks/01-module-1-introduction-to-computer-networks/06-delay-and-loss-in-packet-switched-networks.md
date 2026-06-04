---
title: "Delay and loss in packet-switched networks"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff03c"
status: "completed"
scrapedAt: "2026-05-23T17:59:53.543Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Delay and Loss in Packet-Switched Networks

This module introduces the fundamental concepts of computer networks, focusing on the building blocks and inherent challenges in data transmission. This topic specifically delves into the phenomena of delay and loss that occur in packet-switched networks, which are the backbone of the modern internet. Understanding these concepts is crucial for comprehending network performance and the design of efficient communication protocols.

---

### Learning Outcomes Covered:

*   **Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.** (CO1, K2)
*   **Demonstrate protocols and the functions of different layers.** (CO2, K2) - *While this topic doesn't directly detail protocols of different layers, understanding delay and loss is fundamental to the *need* for many layer functions.*
*   **Analyze the concept of routing and addressing protocols in the context of computer networks.** (CO3, K3) - *Delay and loss are critical factors influencing routing decisions and addressing strategies.*
*   **Make use of different physical communication standards in computer networks.** (CO4, K3) - *The physical layer directly impacts the rate and potential for loss, influencing delay.*

---

### Key Concepts and Definitions:

*   **Packet-Switched Network:** A network where data is divided into small, discrete units called packets. Each packet is routed independently through the network, potentially taking different paths. This is in contrast to circuit-switched networks where a dedicated connection is established before data transfer.
    *   **Example:** The Internet is a prime example of a packet-switched network.
    *   **Reference:** Kurose & Ross, Chapter 1.
*   **Delay (Latency):** The time it takes for a packet to travel from its source to its destination. It is a critical performance metric.
*   **Loss:** The event where a packet is discarded by a network device (e.g., router) and therefore does not reach its destination.
*   **Throughput:** The rate at which data is successfully transferred from source to destination. It is directly affected by delay and loss.
*   **Router:** A network device that forwards data packets between computer networks. Routers are key components where delay and loss often occur.
*   **Queueing:** Packets arriving at a router faster than the router can process and forward them will be temporarily stored in a queue.
*   **Bandwidth:** The maximum rate at which data can be transferred over a communication link.

---

### Types of Delay:

Delay in packet-switched networks can be broken down into several components:

1.  **Transmission Delay:**
    *   **Definition:** The time required to push all of the bits of a packet onto the link. It is directly proportional to the packet size and inversely proportional to the bandwidth of the link.
    *   **Formula:** Transmission Delay = (Packet Size in bits) / (Bandwidth in bits/second)
    *   **Example:** If a packet is 1000 bits and the link bandwidth is 100 bits/second, the transmission delay is 10 seconds.
    *   **Impact:** Higher bandwidth leads to lower transmission delay.
    *   **Reference:** Kurose & Ross, Chapter 1; Forouzan, Chapter 1.

2.  **Propagation Delay:**
    *   **Definition:** The time it takes for a bit to travel from the sender to the receiver across the physical medium. It depends on the distance the signal travels and the speed of propagation in the medium.
    *   **Formula:** Propagation Delay = (Distance) / (Propagation Speed)
    *   **Example:** A signal traveling at the speed of light (approximately 3 x 10^8 m/s) across 1000 km (10^6 m) will have a propagation delay of approximately 3.33 milliseconds.
    *   **Impact:** Longer distances and slower propagation speeds increase propagation delay. The speed of light in a medium is typically less than the speed of light in a vacuum.
    *   **Reference:** Kurose & Ross, Chapter 1; Forouzan, Chapter 1.

3.  **Processing Delay:**
    *   **Definition:** The time a router or other network device takes to examine the header of a packet, decide where to forward it, and perform error checks.
    *   **Example:** A router might spend a few microseconds to a few milliseconds processing each packet.
    *   **Impact:** Processing delay is generally small per packet but can accumulate in high-traffic networks or with complex processing.

4.  **Queuing Delay:**
    *   **Definition:** The time a packet spends waiting in a queue at a router before being transmitted. This occurs when packets arrive at the router faster than the output link can transmit them.
    *   **Example:** If a router receives packets at a rate higher than its outgoing link's bandwidth, packets will accumulate in the queue, leading to queuing delay.
    *   **Impact:** This is the *variable* component of delay and is heavily dependent on the network traffic load and the router's buffer capacity. Higher traffic load leads to longer queues and thus longer queuing delays.
    *   **Reference:** Kurose & Ross, Chapter 1; Forouzan, Chapter 1.

**Total End-to-End Delay = Transmission Delay + Propagation Delay + Processing Delay + Queuing Delay**

---

### Sources of Packet Loss:

Packet loss is an inevitable aspect of packet-switched networks. The primary reasons for loss are:

1.  **Buffer Overflow (Queueing Loss):**
    *   **Definition:** When the queue in a router becomes full, any incoming packets that arrive cannot be stored and are therefore discarded. This is the most common cause of packet loss.
    *   **Example:** Imagine a router with a small queue. If many packets arrive simultaneously for a particular output link, and the link's bandwidth is insufficient to handle the incoming rate, the queue will quickly fill up, and subsequent packets will be dropped.
    *   **Reference:** Kurose & Ross, Chapter 1; Forouzan, Chapter 1.

2.  **Transmission Errors:**
    *   **Definition:** While less common with modern physical media and error correction techniques, errors can occur during transmission over the physical medium due to noise, interference, or signal degradation. If these errors corrupt the packet so that it cannot be understood, it may be discarded.
    *   **Example:** Electromagnetic interference affecting a wireless transmission can corrupt bits within a packet.
    *   **Reference:** Forouzan, Chapter 1.

3.  **Congestion:**
    *   **Definition:** While often leading to buffer overflow, congestion itself is a state of severe overload in the network. High congestion contributes significantly to increased queuing delays and thus a higher probability of buffer overflow and packet loss.
    *   **Impact:** Congestion management is a critical area in network design and protocols.

---

### Impact of Delay and Loss:

*   **Performance Degradation:** High delay and loss directly impact the perceived performance of applications.
    *   **Interactive Applications (e.g., web browsing, video conferencing):** Sensitive to delay. High delay leads to slow response times and choppy audio/video.
    *   **Bulk Data Transfer (e.g., file downloads):** Sensitive to both delay and loss. Loss necessitates retransmissions, which significantly increase the overall transfer time and reduce throughput.
*   **Throughput Reduction:**
    *   Packet loss requires retransmission of data, consuming additional bandwidth and time.
    *   High queuing delays mean packets spend more time in transit, reducing the rate at which new packets can be sent.
*   **Application Behavior:** Protocols at higher layers (like TCP) are designed to handle delay and loss.
    *   **TCP (Transmission Control Protocol):** Uses acknowledgments and retransmissions to ensure reliable delivery. High loss rates can trigger TCP's congestion control mechanisms, which slow down transmission rates.
    *   **UDP (User Datagram Protocol):** Does not guarantee delivery or order. Applications using UDP (like streaming media) must handle loss and delay at the application layer.

---

### Delay Analysis in the Context of Routing and Addressing (CO3):

*   **Routing Protocols:** Routing algorithms aim to find the "best" path for packets. "Best" often considers factors like delay.
    *   **Shortest Path Algorithms (e.g., Dijkstra's):** Can use delay as a metric. A path with lower cumulative delay is preferred.
    *   **Congestion-Aware Routing:** Routes packets away from congested links to avoid high queuing delays and loss.
*   **Addressing:** While addressing itself doesn't directly cause delay or loss, the network topology implied by addressing can. For example, a poorly designed network with many hops between widely separated hosts will inherently have higher cumulative delay.

---

### Physical Communication Standards and Delay/Loss (CO4):

The choice of physical communication standard significantly impacts transmission and propagation delays, as well as the susceptibility to loss.

*   **Ethernet (e.g., Gigabit Ethernet, 10 Gigabit Ethernet):** Offers high bandwidth, reducing transmission delay. Generally reliable with low error rates for wired connections.
*   **Wi-Fi (Wireless LAN):** Susceptible to interference and signal degradation, potentially leading to higher loss rates and retransmissions, thus increasing effective delay. Bandwidth can also be more variable.
*   **Fiber Optics:** Offers very high bandwidth and low attenuation (signal loss), reducing transmission and propagation delays and minimizing loss compared to copper cables over long distances.
*   **DSL/Cable Internet:** Bandwidth is shared and can vary, affecting transmission delay. The quality of the physical lines can also influence loss.

---

### Important Points to Remember:

*   **Delay is cumulative:** The total end-to-end delay is the sum of all individual delay components.
*   **Queuing delay is the most variable:** It is highly dependent on network load.
*   **Packet loss is primarily due to buffer overflow:** Caused by network congestion.
*   **High delay and loss impact application performance:** Especially interactive and real-time applications.
*   **Protocols like TCP are designed to mitigate the effects of delay and loss.**
*   **Physical layer choices directly influence transmission delay and potential for loss.**
*   **Throughput is inversely related to end-to-end delay and directly related to the absence of loss.**

---

### Practice Questions and Exercises:

**Question 1:**
Differentiate between transmission delay and propagation delay. Which one is dependent on the packet size? (K2)

**Answer:**
*   **Transmission Delay:** The time to push all bits of a packet onto the link. It is dependent on packet size and link bandwidth.
*   **Propagation Delay:** The time for a bit to travel from source to destination across the physical medium. It is dependent on distance and the speed of propagation in the medium.
*   Transmission delay is dependent on packet size.

**Question 2:**
A router has an output link with a bandwidth of 1 Mbps (1,000,000 bits per second). A packet of 100,000 bits arrives at the router. If the router's processing delay is negligible and there is no other traffic on the link, what is the transmission delay for this packet? (K2)

**Answer:**
Transmission Delay = Packet Size / Bandwidth
Transmission Delay = 100,000 bits / 1,000,000 bits/second
Transmission Delay = 0.1 seconds = 100 milliseconds

**Question 3:**
Explain the primary reason for packet loss in a busy router. How does congestion contribute to this? (K2)

**Answer:**
The primary reason for packet loss in a busy router is **buffer overflow**. Routers have finite buffer (queue) space to store incoming packets awaiting transmission on an output link. When packets arrive at the router faster than the output link can transmit them (due to congestion), the queue fills up. Once the queue is full, any new incoming packets destined for that output link cannot be stored and are therefore **dropped** or **lost**. Congestion exacerbates this by increasing the arrival rate of packets, leading to longer queues and a higher probability of the buffer becoming full.

**Question 4:**
Consider a network link between two routers, Router A and Router B. The distance between them is 1000 km. The speed of signal propagation in the medium is 2.5 x 10^8 m/s. If Router A sends a packet of 10,000 bits over this link, and the link's bandwidth is 10 Mbps (10,000,000 bits per second). Assume processing delay is 1 ms.
a) Calculate the transmission delay.
b) Calculate the propagation delay.
c) Calculate the total end-to-end delay if the queuing delay is 5 ms.
d) What would happen to the packet if the queuing delay exceeded 10 ms? (K3)

**Answer:**
Given:
*   Distance = 1000 km = 1,000,000 meters
*   Propagation Speed = 2.5 x 10^8 m/s
*   Packet Size = 10,000 bits
*   Bandwidth = 10 Mbps = 10,000,000 bits/second
*   Processing Delay = 1 ms = 0.001 seconds
*   Queuing Delay = 5 ms = 0.005 seconds

a) **Transmission Delay:**
   Transmission Delay = Packet Size / Bandwidth
   Transmission Delay = 10,000 bits / 10,000,000 bits/second
   Transmission Delay = 0.001 seconds = 1 ms

b) **Propagation Delay:**
   Propagation Delay = Distance / Propagation Speed
   Propagation Delay = 1,000,000 meters / (2.5 x 10^8 m/s)
   Propagation Delay = 0.004 seconds = 4 ms

c) **Total End-to-End Delay:**
   Total Delay = Transmission Delay + Propagation Delay + Processing Delay + Queuing Delay
   Total Delay = 1 ms + 4 ms + 1 ms + 5 ms
   Total Delay = 11 ms

d) If the queuing delay exceeded 10 ms, and assuming the router's buffer size is designed to hold packets for a maximum of 10 ms of queuing, then any packet experiencing a queuing delay of more than 10 ms would be **dropped** or **lost** due to buffer overflow.

**Question 5:**
How does the choice of physical medium (e.g., fiber optic vs. copper cable) affect network delay and loss? (K3)

**Answer:**
The choice of physical medium significantly impacts network delay and loss:
*   **Fiber Optic:** Offers much higher bandwidth, leading to lower transmission delays for a given packet size. It also has lower signal attenuation (loss of signal strength over distance) and is less susceptible to electromagnetic interference, resulting in lower packet loss rates due to transmission errors. The propagation speed in fiber is also high, contributing to lower propagation delays.
*   **Copper Cable:** Generally has lower bandwidth compared to fiber optics, leading to higher transmission delays. It is more susceptible to electromagnetic interference and signal degradation, which can increase the likelihood of transmission errors and thus packet loss. Propagation speed can also be lower than in fiber optics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
