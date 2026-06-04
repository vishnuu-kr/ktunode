---
title: "TCP congestion control."
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff04b"
status: "completed"
scrapedAt: "2026-05-23T18:00:04.724Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction

## Topic: TCP Congestion Control

### Learning Outcomes Covered:

*   **Understanding the problem of congestion in networks and why it's detrimental.** (CO1, CO2)
*   **Explaining the role of TCP in managing congestion.** (CO2)
*   **Describing the various mechanisms TCP employs to detect and respond to congestion.** (CO2, CO3)
*   **Analyzing the behavior and effectiveness of different TCP congestion control algorithms.** (CO3)
*   **Evaluating the impact of congestion control on network performance.** (CO3)

### 1. Introduction to Network Congestion

**1.1 What is Network Congestion?**

*   **Definition:** Network congestion occurs when the amount of data being transmitted through a network exceeds its capacity to handle it. This leads to a significant degradation of performance.
*   **Analogy (Kurose & Ross):** Imagine a highway with too many cars. Eventually, the highway becomes clogged, and traffic slows down dramatically, leading to long delays and increased travel times for everyone. Similarly, in a network, too many packets arriving at a router simultaneously can overwhelm its buffers, leading to packet loss.

**1.2 Causes of Congestion:**

*   **Too many senders:** Multiple hosts sending data at high rates simultaneously.
*   **Limited bandwidth:** The physical links connecting network devices have a finite capacity.
*   **Insufficient router buffer space:** Routers use buffers to temporarily store incoming packets when the outgoing link is busy. If these buffers fill up, new packets are dropped.
*   **Inefficient routing:** Routing loops or suboptimal paths can lead to traffic concentrating in certain parts of the network.
*   **Lack of flow control:** Senders not being aware of the receiver's capacity, leading to overwhelming the receiver.

**1.3 Consequences of Congestion:**

*   **Increased packet delay:** Packets spend more time waiting in router buffers.
*   **Packet loss:** Routers drop packets when their buffers are full. This is a primary indicator of congestion.
*   **Reduced throughput:** The actual rate of successful data delivery decreases significantly.
*   **Increased retransmissions:** TCP's loss-recovery mechanisms lead to retransmitting lost packets, further exacerbating congestion.
*   **"Congestion Collapse":** A severe state where the network becomes almost unusable due to overwhelming retransmissions and packet loss. This is a critical concept highlighted in network design literature (e.g., Tanenbaum & Wetherall).

### 2. TCP's Role in Congestion Control

**2.1 The Need for Congestion Control in TCP:**

*   TCP is a reliable and end-to-end protocol. It ensures reliable data delivery but needs to be aware of the network's state to avoid overwhelming it.
*   TCP congestion control aims to:
    *   **Prevent congestion:** Proactively avoid situations that lead to congestion.
    *   **Adapt to congestion:** Reduce sending rate when congestion is detected.
    *   **Maximize network utilization:** Utilize available bandwidth as efficiently as possible without causing congestion.
    *   **Ensure fairness:** Share network resources equitably among competing TCP connections.

**2.2 Key Concepts in TCP Congestion Control:**

*   **Congestion Window (cwnd):** A sender-limited variable that restricts the amount of unacknowledged data that can be in transit at any given time. `cwnd` is the primary mechanism TCP uses to control its sending rate. The sending rate is roughly `cwnd / RTT` (Round-Trip Time).
*   **Receiver Window (rwnd):** The receiver advertises its buffer capacity to the sender, limiting the amount of data the sender can send.
*   **Effective Window:** The actual amount of data a TCP sender can have in flight is the minimum of `cwnd` and `rwnd`.
    *   `Effective Window = min(cwnd, rwnd)`
*   **Implicit Signaling:** TCP relies on **packet loss** as the primary signal of congestion. When a packet is dropped, it implies that some router along the path experienced congestion.
*   **Explicit Congestion Notification (ECN):** A more advanced mechanism where routers can explicitly mark packets to signal impending congestion *before* packet loss occurs. This is a more proactive approach.

**2.3 How TCP Detects Congestion:**

*   **Timeout (Triple Duplicate ACKs):**
    *   **Timeout:** If a sender does not receive an acknowledgment (ACK) for a sent segment within a certain timeout period, it assumes the segment (or its ACK) was lost due to congestion. This is a strong indicator of congestion.
    *   **Triple Duplicate ACKs:** When a receiver receives segments out of order, it sends duplicate ACKs for the last *in-order* segment it received. Receiving three duplicate ACKs for the same segment signals that the segment *after* the acknowledged one was likely lost. This is a faster indicator of congestion than a timeout.

### 3. TCP Congestion Control Algorithms: The Core Mechanisms

TCP congestion control has evolved over time. We will focus on the fundamental algorithms that form the basis of modern TCP implementations.

**3.1 Additive Increase, Multiplicative Decrease (AIMD)**

*   **Concept:** This is the core principle behind most TCP congestion control strategies.
    *   **Additive Increase:** When no packet loss is detected (i.e., ACKs are received on time), TCP *linearly* increases its `cwnd`. This is often referred to as "slow start" or "congestion avoidance," depending on the current `cwnd` value.
    *   **Multiplicative Decrease:** When packet loss is detected (timeout or triple duplicate ACKs), TCP *drastically* reduces its `cwnd`. This is typically by half.
*   **Why AIMD?**
    *   **Slow Start (initial phase):** To quickly probe the network capacity and find a reasonable sending rate.
    *   **Congestion Avoidance (stability phase):** To gently probe for more bandwidth without causing significant congestion.
    *   **Rapid Decrease:** To quickly back off when congestion is detected, preventing further degradation.
*   **Fairness (Kurose & Ross):** AIMD, when applied to multiple TCP connections sharing a bottleneck link, tends to converge to an equitable distribution of bandwidth. Each connection increases its window linearly, and when congestion hits, all reduce multiplicatively. This leads to a "sawtooth" pattern in `cwnd` over time.

**3.2 Slow Start**

*   **Purpose:** To rapidly increase the sending rate from zero when a connection begins or after a long idle period. It's an exponential growth phase.
*   **Mechanism:**
    *   Starts with a small `cwnd`, typically 1-4 MSS (Maximum Segment Size).
    *   For every ACK received for a previously unacknowledged segment, `cwnd` is increased by 1 MSS.
    *   This results in `cwnd` doubling approximately every RTT.
*   **Threshold (`ssthresh`):** A variable that defines the boundary between Slow Start and Congestion Avoidance. Initially, `ssthresh` is set to a very large value.
*   **Transition:** When `cwnd` reaches or exceeds `ssthresh`, TCP switches from Slow Start to Congestion Avoidance.

**3.3 Congestion Avoidance**

*   **Purpose:** To increase the sending rate more cautiously once a "reasonable" rate has been reached (indicated by `ssthresh`).
*   **Mechanism:**
    *   When `cwnd` is in the Congestion Avoidance phase, it is increased by approximately 1 MSS per RTT.
    *   More precisely, for each window of data acknowledged (i.e., `cwnd` worth of data acknowledged), `cwnd` is incremented by 1 MSS. This translates to an additive increase.
*   **Transition:**
    *   If packet loss occurs during Congestion Avoidance, `ssthresh` is set to `cwnd / 2`, and `cwnd` is reset to 1 MSS, entering Slow Start again.

**3.4 Fast Retransmit and Fast Recovery**

*   **Fast Retransmit:**
    *   **Problem:** Traditional TCP relied on timeouts, which are slow to detect loss.
    *   **Solution:** If a sender receives three duplicate ACKs for a segment, it infers that the next segment was lost. Instead of waiting for a timeout, it immediately retransmits the presumed lost segment. This significantly reduces the delay in recovering from single-segment losses.
*   **Fast Recovery:**
    *   **Purpose:** To avoid unnecessarily exiting the Congestion Avoidance phase (and thus going back to Slow Start) when a loss is detected via triple duplicate ACKs.
    *   **Mechanism:**
        1.  When three duplicate ACKs are received, set `ssthresh` to `cwnd / 2`.
        2.  Set `cwnd` to `ssthresh` (not back to 1 MSS as in a timeout). This is a less drastic reduction than a timeout.
        3.  Retransmit the lost segment.
        4.  For each subsequent duplicate ACK received, decrement `cwnd` by 1 MSS. This effectively "throttles" the sender while the duplicate ACKs are being generated, compensating for the packets that have left the network but whose ACKs are not yet back.
        5.  When the ACK for the retransmitted segment arrives, set `cwnd` to `ssthresh` (or `cwnd` adjusted by the duplicate ACKs) and enter Congestion Avoidance.

**3.5 Putting it Together: TCP Tahoe, Reno, NewReno, SACK**

*   **TCP Tahoe:**
    *   Uses Slow Start and Congestion Avoidance.
    *   If packet loss occurs (timeout or triple duplicate ACK), `ssthresh` is set to `cwnd / 2`, and `cwnd` is reset to 1 MSS. Always goes back to Slow Start.
    *   Does *not* use Fast Retransmit or Fast Recovery.
*   **TCP Reno:**
    *   The most widely deployed and influential TCP variant.
    *   Uses Slow Start, Congestion Avoidance, **Fast Retransmit**, and **Fast Recovery**.
    *   If packet loss occurs via timeout: `ssthresh = cwnd / 2`, `cwnd = 1` (Slow Start).
    *   If packet loss occurs via triple duplicate ACK: `ssthresh = cwnd / 2`, `cwnd = ssthresh` (Fast Recovery).
*   **TCP NewReno:**
    *   An improvement on Reno to handle multiple packet losses within a single window.
    *   Reno can get stuck in Fast Recovery if multiple packets are lost in a window, as it only recovers the first lost packet and the duplicate ACKs might stop.
    *   NewReno continues to perform Fast Recovery until all packets in the window are acknowledged.
*   **TCP SACK (Selective Acknowledgments):**
    *   Further enhancement allowing the receiver to inform the sender which segments have been received *specifically*, not just the last in-order segment.
    *   This enables the sender to retransmit only the truly lost segments, improving efficiency, especially in high-bandwidth, high-latency networks (long fat networks - LFNs).

### 4. Modern TCP Congestion Control (Beyond Reno)

While Reno is foundational, newer algorithms have been developed to address limitations and improve performance in various network conditions.

*   **TCP CUBIC:**
    *   The default congestion control algorithm in Linux and other modern operating systems.
    *   Designed for high-bandwidth, high-latency networks.
    *   Uses a cubic function to control `cwnd` growth, leading to faster convergence to available bandwidth and more stability than exponential growth in the initial phase.
    *   Still employs AIMD principles for reducing `cwnd`.
*   **BBR (Bottleneck Bandwidth and Round-trip propagation time):**
    *   Developed by Google.
    *   A departure from loss-based congestion control.
    *   Assumes congestion is primarily caused by bufferbloat (routers over-buffering traffic).
    *   Tries to estimate the bottleneck bandwidth and minimum RTT, then directly paces sending rate without relying on packet loss as the primary signal.

**Important Note:** Understanding Reno (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery) is crucial as it forms the basis for many subsequent TCP congestion control mechanisms. (Kurose & Ross heavily emphasizes this).

### 5. Fairness and TCP Congestion Control

*   **Problem:** Multiple TCP connections sharing a bottleneck link need to be allocated bandwidth fairly.
*   **How AIMD Achieves Fairness:** As discussed, the linear increase and multiplicative decrease mechanism, when applied across competing flows, tends to equalize their sending rates at the bottleneck. Flows that are more aggressive (e.g., higher RTT) might get slightly more, but it provides a reasonable distribution.
*   **Challenges:**
    *   **Heterogeneous RTTs:** Flows with very different RTTs can experience unfairness.
    *   **Varying `cwnd` behavior:** Different TCP variants might interact in ways that are not perfectly fair.
    *   **Lossless networks:** Congestion control mechanisms that rely solely on loss might perform poorly in environments that try to avoid loss entirely (e.g., with very large buffers).

### 6. Practice Questions and Answers

**Question 1:** Explain the primary signal TCP uses to detect network congestion.
**Answer:** The primary signal TCP uses to detect network congestion is **packet loss**. This is typically inferred through either a **timeout** (not receiving an ACK for a segment within a specified time) or the reception of **three duplicate acknowledgments (ACKs)** for a segment.

**Question 2:** Differentiate between Slow Start and Congestion Avoidance. What triggers the transition between them?
**Answer:**
*   **Slow Start:** TCP aggressively increases its `cwnd` exponentially (doubling approximately every RTT) to quickly find a usable network rate.
*   **Congestion Avoidance:** TCP cautiously increases its `cwnd` linearly (by approximately 1 MSS per RTT) to probe for additional bandwidth without causing congestion.
*   **Transition:** The transition from Slow Start to Congestion Avoidance occurs when `cwnd` reaches or exceeds a threshold value called `ssthresh`. The transition back from Congestion Avoidance to Slow Start (after loss detection) occurs when packet loss is detected (timeout or triple duplicate ACK), setting `ssthresh` to `cwnd/2` and resetting `cwnd` to 1 MSS.

**Question 3:** What is the purpose of Fast Retransmit and Fast Recovery? How do they differ from a timeout-based recovery?
**Answer:**
*   **Fast Retransmit:** Allows TCP to retransmit a lost segment immediately upon detecting it (via triple duplicate ACKs) rather than waiting for a timeout. This reduces the delay in recovering from a lost packet.
*   **Fast Recovery:** A mechanism that avoids forcing TCP back into the slow start phase after a loss detected by triple duplicate ACKs. Instead, it reduces `cwnd` more moderately (`ssthresh`) and continues sending data.
*   **Difference from Timeout:** Timeouts are a much slower indicator of loss. A timeout implies that at least one RTT has passed without an ACK, and it forces a significant reduction in `cwnd` and a return to slow start. Fast Retransmit/Recovery are faster and less punitive for single packet losses.

**Question 4:** How does TCP Reno handle packet loss detected by triple duplicate ACKs?
**Answer:** When TCP Reno detects packet loss via triple duplicate ACKs:
1.  It sets `ssthresh` to `cwnd / 2`.
2.  It sets `cwnd` to `ssthresh` (a significant reduction, but not to 1 MSS).
3.  It immediately retransmits the presumed lost segment.
4.  For each subsequent duplicate ACK, it decreases `cwnd` by 1 MSS.
5.  When the ACK for the retransmitted segment arrives, it re-enters Congestion Avoidance.

**Question 5:** (Conceptual) If two TCP connections share a bottleneck link, and one connection experiences packet loss, how will AIMD affect the other connection?
**Answer:** If one connection experiences packet loss, its `cwnd` will be multiplicatively decreased (halved). The other connection, not experiencing loss, will continue its additive increase. Over time, the connection that experienced loss will reduce its rate, allowing the other connection to increase its rate, eventually leading to a more equitable sharing of the bottleneck bandwidth. This demonstrates the fairness aspect of AIMD.

### 7. Important Points to Remember

*   **Congestion is a network-level problem, but TCP manages it at the end hosts.**
*   **Packet loss is the primary implicit signal of congestion for TCP.**
*   **`cwnd` is the sender's key tool to control its sending rate.**
*   **AIMD (Additive Increase, Multiplicative Decrease) is the fundamental principle.**
*   **Slow Start is for rapid initial probing; Congestion Avoidance is for stable probing.**
*   **Fast Retransmit and Fast Recovery significantly improve performance over timeout-only recovery.**
*   **TCP Reno is the widely adopted standard that combines these mechanisms.**
*   **TCP congestion control aims for efficiency, fairness, and stability.**
*   **Modern TCP variants (CUBIC, BBR) build upon these foundational concepts to improve performance in specific network environments.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. References and Further Reading

*   **Kurose, J. F., & Ross, K. W. (2017). *Computer Networking: A Top-Down Approach Featuring the Internet* (6th ed.). Pearson.**
    *   Chapter 6 (Transport Layer) is highly relevant, detailing TCP segments, connection establishment/termination, reliability, and congestion control (Slow Start, Congestion Avoidance, Fast Retransmit/Recovery).
*   **Forouzan, B. A. (2008). *Data Communications and Networking* (4th ed.). Tata McGraw-Hill.**
    *   While this book may not go into the same depth on specific TCP algorithms as Kurose & Ross, it provides a solid foundation on transport layer protocols and concepts like flow control and error control, which are prerequisites for understanding congestion control.
*   **Peterson, L. L., & Davie, B. S. *Computer Networks – A Systems Approach*.**
    *   Offers a systems-level perspective on network protocols, including TCP's behavior in real-world environments.
*   **Tanenbaum, A. S., & Wetherall, D. J. *Computer Networks*.**
    *   A classic text providing a comprehensive overview of networking, likely covering congestion control principles and algorithms.
*   **Bertsekas, D., & Gallager, R. G. *Data Networks*.**
    *   This book delves into the analytical aspects of network performance, including congestion control theory and its mathematical underpinnings.

This comprehensive set of notes should provide a strong understanding of TCP congestion control, its importance in computer networks, and the mechanisms it employs. Remember to cross-reference with your textbooks for deeper insights and specific examples.