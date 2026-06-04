---
title: "Congestion control algorithms – Approaches to congestion control (Details not required)"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36484"
status: "completed"
scrapedAt: "2026-05-23T16:20:12.149Z"
---
# Computer Network Systems: Module 3 - Network Layer Design Issues

## Topic: Congestion Control Algorithms – Approaches to Congestion Control

This module focuses on understanding the challenges faced by the network layer, particularly the issue of congestion. Congestion occurs when the network is overloaded with traffic, leading to performance degradation. This topic introduces the fundamental approaches used to manage and alleviate network congestion.

---

### 1. Understanding Network Congestion

**Key Concepts:**

*   **Congestion:** A situation in the network where the number of packets being transmitted exceeds the available resources (e.g., router buffer space, link bandwidth), leading to packet loss, increased delay, and reduced throughput.
*   **Factors contributing to Congestion:**
    *   **Too many senders:** Multiple hosts sending data simultaneously.
    *   **Slow receivers:** Receivers unable to process data as fast as it's sent.
    *   **Insufficient router capacity:** Routers having limited buffer space and processing power.
    *   **Link failures:** Rerouting traffic through already congested links.
    *   **Inefficient routing protocols:** Protocols that don't adapt well to changing network conditions.

**Definition:** Congestion is a state where performance degrades because a router or a link is carrying more data than it can handle.

**(Referenced from Tanenbaum, 5th ed., Chapter 6: Network Layer)**

---

### 2. The Need for Congestion Control

**Key Concepts:**

*   **Network Performance Degradation:** Congestion significantly impacts:
    *   **Packet Delay:** Packets spend more time waiting in router queues.
    *   **Packet Loss:** Routers may discard packets when their buffers are full.
    *   **Throughput Reduction:** The effective rate of data transfer decreases.
    *   **Jitter:** Variation in packet delay, crucial for real-time applications.
*   **"Tragedy of the Commons":** Each user/host acts in its own best interest (sending as much data as possible), but collectively, this leads to a breakdown of the network for everyone.
*   **Aim of Congestion Control:** To prevent the network from entering a state of severe congestion and to maintain acceptable performance levels for all users.

**CO3 Alignment:** This topic directly addresses the learning outcome of explaining congestion control algorithms.

**(Referenced from Forouzan, 5th ed., Chapter 15: Congestion Control and Quality of Service)**

---

### 3. Approaches to Congestion Control

Congestion control mechanisms can be broadly categorized into two main approaches: **Open-Loop Congestion Control** and **Closed-Loop Congestion Control**.

#### 3.1 Open-Loop Congestion Control

**Key Concepts:**

*   **Proactive Approach:** Aims to prevent congestion from occurring in the first place.
*   **No Feedback Mechanism:** These techniques do not rely on feedback from the network to adjust sending rates.
*   **Focus on Network Design and Protocols:** Primarily involve proper network design and protocol mechanisms.

**Techniques (Details not required for this specific topic, but understanding the categories is key):**

*   **Retransmission Policy:** How the network handles retransmissions of lost packets.
*   **Flow Control:** Mechanisms to prevent a fast sender from overwhelming a slow receiver. (Note: Flow control and congestion control are related but distinct. Flow control is point-to-point, while congestion control is end-to-end or network-wide).
*   **Connection Setup Policy:** How new connections are established and whether they are accepted based on network conditions.
*   **Window Management:** How window sizes are managed by protocols like TCP.
*   **Discarding Packets:** When and how routers discard packets (e.g., Random Early Detection - RED).

**Example:** A router configured to drop packets from a particular source that is sending excessively can be seen as an open-loop mechanism.

**(Referenced from Tanenbaum, 5th ed., Chapter 6.4: Congestion Control)**

---

#### 3.2 Closed-Loop Congestion Control

**Key Concepts:**

*   **Reactive Approach:** Detects congestion and then takes action to reduce it.
*   **Feedback Mechanism:** Relies on feedback from the network (e.g., acknowledgments, explicit congestion notification) to adjust sending rates.
*   **Dynamic Adjustment:** Sending rates are adjusted dynamically based on detected congestion.

**Techniques (Details not required for this specific topic, but understanding the categories is key):**

*   **Implicit Feedback:** Information about congestion is inferred from other network events, such as packet loss or increased round-trip times.
    *   **Choke Packets:** Routers send special packets back to the source to signal congestion.
    *   **Backpressure:** A mechanism where a congested router signals upstream routers to slow down.
*   **Explicit Feedback:** Routers explicitly inform senders about congestion.
    *   **Explicit Congestion Notification (ECN):** Routers mark packets to indicate congestion, which is then signaled back to the source.

**Example:** TCP's congestion control mechanisms, which reduce the sending rate when packet loss is detected (indicating potential congestion), are a prime example of closed-loop congestion control.

**(Referenced from Forouzan, 5th ed., Chapter 15.2: Congestion control algorithms)**

---

### 4. Key Takeaways and Important Points to Remember

*   **Congestion is a critical network layer issue** that severely degrades performance.
*   **Two primary approaches exist:** Open-loop (preventative) and Closed-loop (reactive).
*   **Open-loop control focuses on design and protocol mechanisms** to avoid congestion.
*   **Closed-loop control uses feedback** to detect and respond to congestion by adjusting sending rates.
*   Understanding these fundamental approaches is crucial for designing and managing efficient networks.
*   **Flow control is not the same as congestion control.** Flow control is about managing the rate between a sender and receiver, while congestion control is about managing the rate to prevent network overload.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary difference between open-loop and closed-loop congestion control approaches?

**Answer 1:**
Open-loop congestion control is a proactive approach that aims to prevent congestion by implementing proper network design and protocol mechanisms without relying on explicit feedback. Closed-loop congestion control is a reactive approach that detects congestion and uses feedback from the network to adjust sending rates and alleviate the problem.

**Question 2:**
Why is congestion control considered a "tragedy of the commons" in networking?

**Answer 2:**
It's considered a tragedy of the commons because individual users acting in their own best interest (sending as much data as possible) can collectively overload the network, leading to a breakdown in performance for everyone.

**Question 3:**
Identify two potential negative impacts of network congestion on users.

**Answer 3:**
Two potential negative impacts are increased packet delay (leading to slower response times) and increased packet loss (leading to retransmissions and further performance degradation).

---
