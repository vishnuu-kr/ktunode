---
title: "Congestion Control in TCP"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c93c"
status: "completed"
scrapedAt: "2026-05-20T17:02:52.579Z"
---
# Computer Networks: Module 4 - Transport Layer
## Topic: Congestion Control in TCP

This document provides comprehensive study notes on Congestion Control in TCP for Module 4 of Computer Networks.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand the problem of congestion** in computer networks and its impact.
*   **Differentiate between connection-oriented and connectionless services** and why congestion control is crucial for connection-oriented protocols like TCP.
*   **Explain the goals of TCP congestion control**.
*   **Describe the key components of TCP congestion control mechanisms**, including the congestion window (cwnd), slow start, congestion avoidance, fast retransmit, and fast recovery.
*   **Analyze different TCP congestion control algorithms** (e.g., TCP Tahoe, TCP Reno, TCP NewReno, TCP CUBIC) and their evolution.
*   **Discuss the role of Active Queue Management (AQM)** in mitigating congestion at the network layer.
*   **Understand the trade-offs and challenges** in designing effective congestion control mechanisms.
*   **Apply the concepts of congestion control** to practical scenarios.

---

### 1. Understanding Congestion in Computer Networks

**Key Concept:** Congestion occurs when the rate at which data arrives at a network element (like a router) exceeds the rate at which it can be processed or forwarded.

*   **What is Congestion?**
    *   When too many packets are sent into the network, routers can become overwhelmed.
    *   This leads to packets being dropped.
    *   The arrival rate exceeds the service rate.

*   **Causes of Congestion:**
    *   **Too many senders:** Multiple hosts sending data simultaneously.
    *   **Link sharing:** Multiple flows sharing a single network link.
    *   **Buffer overflows:** Router buffers fill up, leading to packet loss.
    *   **Protocol design:** Inefficient protocols that don't adapt to network conditions.

*   **Impact of Congestion:**
    *   **Increased Delay:** Packets queue up at routers, increasing end-to-end delay.
    *   **Packet Loss:** Routers drop packets when their buffers are full.
    *   **Reduced Throughput:** Network capacity is not fully utilized as packets are dropped and retransmitted.
    *   **Jitter:** Variation in packet delay.
    *   **Network Instability:** In severe cases, congestion can lead to a "congestion collapse" where the network becomes unusable.

---

### 2. Why Congestion Control is Crucial for TCP

**Key Concept:** TCP is a reliable, connection-oriented protocol. Its reliability mechanisms, while essential, can exacerbate congestion if not managed carefully.

*   **TCP's Role:** TCP provides reliable data transfer, ordered delivery, and flow control.
*   **Reliability and Retransmission:** When TCP detects packet loss (via timeouts or duplicate ACKs), it retransmits the lost packet. If congestion is the cause of loss, retransmissions can worsen the problem by adding more traffic.
*   **Flow Control vs. Congestion Control:**
    *   **Flow Control:** A mechanism between a sender and receiver to prevent the sender from overwhelming the receiver. It's receiver-centric.
        *   **Mechanism:** Receiver advertises its available buffer space in the TCP header's `receive window` field.
        *   **Example:** If a receiver has only 10KB of buffer space left, it advertises a `receive window` of 10KB.
    *   **Congestion Control:** A mechanism between a sender and the network to prevent the sender from overwhelming the network. It's network-centric.
        *   **Problem:** A sender might have a fast receiver but a slow network path between them. Flow control alone wouldn't prevent network congestion.
        *   **Goal:** To probe for available network bandwidth and back off when congestion is detected.

**Important Point to Remember:** TCP congestion control operates at the sender. The sender has to infer the state of the network, as it doesn't directly receive feedback from intermediate routers about congestion.

---

### 3. Goals of TCP Congestion Control

**Key Concept:** TCP congestion control aims to utilize network capacity efficiently and fairly while minimizing packet loss.

*   **Efficiency:** Maximize the network throughput for TCP connections.
*   **Fairness:** Ensure that different TCP connections share the available network bandwidth relatively equally.
*   **Stability:** Prevent network collapse by avoiding excessive packet loss and retransmissions.
*   **Low Delay:** Minimize the queuing delays experienced by packets.

---

### 4. Key Components of TCP Congestion Control

**Key Concept:** TCP uses several mechanisms and variables to manage congestion, primarily by adjusting its sending rate. The primary tool is the **congestion window (cwnd)**.

*   **Congestion Window (cwnd):**
    *   A sender-limited variable that restricts the amount of unacknowledged data the sender can have in transit at any given time.
    *   The actual amount of data a sender can transmit is the minimum of the `receive window` (from flow control) and the `cwnd` (from congestion control).
    *   `Sender's Sending Rate Limit = min(cwnd, receive window)`
    *   The `cwnd` is typically measured in bytes.

*   **States of TCP Congestion Control:** TCP largely operates in two main phases:
    1.  **Slow Start:** Aggressively increase the sending rate to quickly find available bandwidth.
    2.  **Congestion Avoidance:** Cautiously increase the sending rate to probe for more bandwidth without causing congestion.

*   **Congestion Detection Mechanisms:**
    *   **Timeout:** The sender infers significant congestion when an ACK for a sent packet is not received within a certain timeout period (Retransmission Timeout - RTO). This is a strong indicator of packet loss.
    *   **Duplicate ACKs:** Receiving multiple ACKs for the same packet indicates that subsequent packets are arriving at the receiver, but an earlier packet was lost. Three duplicate ACKs are often used as a signal of packet loss.

---

### 5. TCP Congestion Control Algorithms (Evolution)

TCP congestion control has evolved significantly over time to improve performance and fairness. Here's a look at some key algorithms:

#### 5.1 TCP Tahoe

**Key Concept:** The first widely implemented TCP congestion control algorithm, characterized by its simple response to packet loss.

*   **Mechanisms:**
    *   **Slow Start:** The `cwnd` starts at 1 MSS (Maximum Segment Size) and doubles every Round Trip Time (RTT) until it reaches the slow start threshold (`ssthresh`).
    *   **Congestion Avoidance:** Once `cwnd` >= `ssthresh`, the `cwnd` increases by approximately 1 MSS per RTT (adds 1 MSS for every RTT, effectively `cwnd += MSS` per RTT, or `cwnd += MSS * MSS / cwnd` per segment). This is a linear increase.
    *   **Response to Timeout:** If a timeout occurs, `ssthresh` is set to `cwnd / 2`, and `cwnd` is reset to 1 MSS. The connection re-enters Slow Start.
    *   **Response to Triple Duplicate ACKs:** If three duplicate ACKs are received, it signals loss. `ssthresh` is set to `cwnd / 2`, and `cwnd` is reset to `ssthresh` (this was a slight improvement over earlier versions where it might also reset to 1, but the critical point is the aggressive reduction).

**Diagrammatic Representation of Tahoe:**

```
       cwnd
        ^
        |     /--------- Congestion Avoidance (linear increase)
        |    /
        |   /
        |  /
        | /
        |/
        +---------> RTT
        ^         ^
        |         |
  Slow Start      Triple Duplicate ACK
(exponential      -> ssthresh = cwnd/2, cwnd = ssthresh
  increase)       Timeout
                  -> ssthresh = cwnd/2, cwnd = 1
```

**Limitation:** Tahoe's response to triple duplicate ACKs was still quite aggressive. Resetting `cwnd` to `ssthresh` (or 1 in some descriptions) meant a significant reduction in sending rate even for a single packet loss that might not be due to severe congestion.

#### 5.2 TCP Reno

**Key Concept:** Introduced to improve performance over Tahoe by making a more nuanced response to packet loss detected by triple duplicate ACKs.

*   **Mechanisms:**
    *   **Slow Start and Congestion Avoidance:** Same as Tahoe.
    *   **Response to Timeout:** `ssthresh` is set to `cwnd / 2`, and `cwnd` is reset to 1 MSS. Enters Slow Start.
    *   **Response to Triple Duplicate ACKs (Key difference):**
        1.  `ssthresh` is set to `cwnd / 2`.
        2.  `cwnd` is set to `ssthresh`.
        3.  The algorithm enters **Fast Recovery**.

*   **Fast Recovery:**
    *   When triple duplicate ACKs are received, the sender assumes a single packet is lost.
    *   It sets `cwnd` to `ssthresh` (effectively halving the current `cwnd`).
    *   It then reduces `cwnd` by 1 MSS for each additional duplicate ACK received beyond the initial three. This allows it to "recover" from the loss by transmitting new data packets in place of the lost ones, while still reducing the sending rate.
    *   Once the ACK for the lost packet arrives, `cwnd` is set back to `ssthresh`, and the algorithm re-enters Congestion Avoidance.

**Diagrammatic Representation of Reno:**

```
       cwnd
        ^
        |     /--------- Congestion Avoidance (linear increase)
        |    /
        |   /
        |  /
        | /
        |/
        +---------> RTT
        ^         ^
        |         |
  Slow Start      Triple Duplicate ACK
(exponential      -> ssthresh = cwnd/2, cwnd = ssthresh
  increase)       -> Enter Fast Recovery (reduce cwnd by 1 per dup ACK)
                  -> When ACK for lost pkt arrives: cwnd = ssthresh, Congestion Avoidance
                  Timeout
                  -> ssthresh = cwnd/2, cwnd = 1, Slow Start
```

**Benefit:** Reno is much more efficient than Tahoe when packet loss is due to congestion and not a complete network outage. It avoids the drastic drop to 1 MSS for a single packet loss and keeps transmitting data.

#### 5.3 TCP NewReno

**Key Concept:** An improvement over Reno to handle multiple packet losses within a single window.

*   **Problem with Reno:** If multiple packets are lost within one window before the ACK for the first lost packet is received, Reno can still perform poorly. It might reduce `cwnd` multiple times based on duplicate ACKs, and then reset `cwnd` to 1 upon timeout.
*   **NewReno's Improvement:** NewReno continues to send new data segments as long as it receives ACKs for segments *after* the first lost segment. It only reduces `cwnd` once it has received an ACK for the *first* lost segment.
*   **Mechanism:**
    *   When a lost packet is detected (via triple duplicate ACKs), `ssthresh` is set to `cwnd / 2`, and `cwnd` is reduced.
    *   NewReno keeps track of the highest sequence number acknowledged.
    *   When it receives duplicate ACKs for a segment *beyond* the first lost segment, it reduces `cwnd` by 1 MSS for each new ACK that advances the acknowledged sequence number.
    *   It enters a state where it only sends a new segment when it has received ACKs for all segments up to the first lost segment.
    *   When the ACK for the first lost segment arrives, `cwnd` is set to `ssthresh`, and it re-enters Congestion Avoidance.

**Benefit:** NewReno performs better than Reno when multiple packets are lost in a single window. It can maintain higher throughput in such scenarios.

#### 5.4 TCP CUBIC

**Key Concept:** A modern congestion control algorithm designed to provide better scalability and performance on high-speed, long-latency networks (often called "long fat networks" or LFNs). It's the default in many Linux distributions.

*   **Problem with Linear Growth:** Reno and NewReno have a linear increase in `cwnd` during Congestion Avoidance. On high-speed, high-latency links, this linear growth is too slow to utilize the available bandwidth quickly.
*   **CUBIC's Approach:** CUBIC uses a cubic function to increase `cwnd`, which grows much faster in the initial phase and then slows down as it approaches the congestion point. This allows it to ramp up to high bandwidths more quickly.
*   **Key Features:**
    *   **Cubic Growth Function:** The growth function is based on `(t/I)^3`, where `t` is time and `I` is an "intrinsic window size" representing the point of congestion.
    *   **Concave and Convex Regions:** The cubic function has a convex (rapid growth) region and a concave (slow growth) region. CUBIC switches between these to probe for bandwidth efficiently.
    *   **Window Reduction:** When congestion is detected, CUBIC reduces `cwnd` by a fixed factor (typically 0.7), which is less aggressive than halving it, preserving more of the achieved throughput.
    *   **Multiplicative Decrease:** The reduction factor is applied to a window size based on the cubic function, aiming for a more stable operating point.

**Benefit:** CUBIC offers significantly better performance on LFNs by reaching high bandwidths faster and maintaining more stable throughput compared to Reno-style algorithms.

---

### 6. Role of Active Queue Management (AQM)

**Key Concept:** While TCP congestion control operates at the sender, AQM mechanisms operate at the router to proactively manage buffer occupancy and signal congestion to senders.

*   **Problem:** Routers using simple **Tail Drop** (dropping packets only when buffers are full) can lead to global synchronization where many TCP flows simultaneously experience packet loss and back off, causing throughput to plummet.
*   **AQM's Goal:** To maintain router queues at a moderate level to reduce delay and jitter, and to signal congestion to TCP senders *before* buffers are completely full, thereby preventing widespread packet loss.
*   **Mechanisms:**
    *   **Random Early Detection (RED):**
        *   RED probabilistically drops packets based on the average queue length.
        *   When the average queue length is low, the packet drop probability is zero.
        *   As the average queue length increases, the drop probability gradually increases.
        *   When the average queue length exceeds a maximum threshold, all packets are dropped (similar to tail drop).
        *   **How it helps TCP:** By dropping packets probabilistically *before* the buffer is full, RED signals congestion to individual TCP flows, causing them to reduce their sending rates. Because it's probabilistic and applies to different flows at different times, it avoids the global synchronization problem.
    *   **Coordinated RED (WRED):** A variation that can be configured on a per-class basis for Quality of Service (QoS).
    *   **Proportional Integral Controller Enhanced (PIE):** A more recent AQM algorithm that aims to be simpler to configure than RED and provide better performance.

**Importance of AQM:** AQM is a crucial complement to TCP congestion control. It helps the network layer signal congestion more effectively, allowing TCP senders to react proactively and avoid severe congestion events.

---

### 7. Trade-offs and Challenges in Congestion Control

**Key Concept:** Designing effective congestion control mechanisms involves balancing competing goals and dealing with complexities of the real network.

*   **Aggressiveness vs. Stability:**
    *   **Aggressive:** Faster ramp-up, higher potential throughput. Risk of causing more congestion and packet loss.
    *   **Conservative:** More stable, less packet loss. Risk of underutilizing network capacity.
*   **Fairness:**
    *   **Across flows:** Ensuring different TCP connections share bandwidth equitably.
    *   **Between TCP and other protocols:** TCP aims to be a "good citizen" and share the network fairly with UDP and other traffic.
*   **Scalability:** Algorithms must perform well on high-speed, high-latency links, which is a challenge for older algorithms.
*   **Complexity:** Implementing and tuning congestion control can be complex.
*   **Interaction with Network Conditions:** Performance is highly dependent on actual network conditions (link speeds, latency, buffer sizes, presence of other traffic).
*   **Lack of explicit network feedback:** TCP senders must infer congestion, which is an indirect process.

---

### 8. Practice Questions and Exercises

**Question 1:**
Explain the difference between flow control and congestion control in TCP. Provide an example scenario where flow control alone would not be sufficient to prevent network issues.

**Answer 1:**
*   **Flow Control:** Manages the rate at which a sender transmits data to a specific receiver to prevent overwhelming the receiver's buffer. It's based on the receiver's advertised `receive window`.
*   **Congestion Control:** Manages the rate at which a sender transmits data into the network to prevent overwhelming the network's resources (routers, links). It's based on the sender's inferred understanding of network congestion.
*   **Example Scenario:** Imagine a sender with a fast network connection to a receiver. The receiver also has a large buffer and advertises a large `receive window` (flow control is not an issue). However, the network path between the sender and receiver includes a series of slow, congested links and routers with small buffers. Without congestion control, the sender would transmit data at the receiver's maximum rate, quickly overwhelming the congested network links, leading to packet loss and network collapse. Congestion control, by sensing this network congestion, would force the sender to reduce its rate.

**Question 2:**
What is the role of the congestion window (cwnd) in TCP? How is it adjusted during Slow Start and Congestion Avoidance?

**Answer 2:**
*   **Role of cwnd:** The congestion window (`cwnd`) is a sender-side variable that limits the amount of unacknowledged data a TCP sender can have in transit. The sender's actual sending rate is limited by `min(cwnd, receive window)`.
*   **Slow Start:** The `cwnd` starts at 1 MSS and *doubles* approximately every Round Trip Time (RTT). This is an exponential increase, aiming to quickly find the available network capacity.
*   **Congestion Avoidance:** Once `cwnd` reaches or exceeds the `ssthresh`, the `cwnd` increases *linearly*, adding approximately 1 MSS per RTT. This is a more cautious probing for additional bandwidth.

**Question 3:**
Describe the behavior of TCP Reno when it detects packet loss through triple duplicate ACKs. What are the key differences from TCP Tahoe?

**Answer 3:**
When TCP Reno detects packet loss via triple duplicate ACKs:
1.  It sets the `ssthresh` (slow start threshold) to half of the current `cwnd` (`ssthresh = cwnd / 2`).
2.  It sets the `cwnd` to `ssthresh`.
3.  It enters **Fast Recovery**. In Fast Recovery, for each additional duplicate ACK received, `cwnd` is decreased by 1 MSS. This allows the sender to continue sending new data packets in place of the lost ones, maintaining some throughput. Once the ACK for the lost packet arrives, `cwnd` is reset to `ssthresh`, and the algorithm enters Congestion Avoidance.

**Key Differences from TCP Tahoe:**
*   **Tahoe's response:** Tahoe, upon detecting loss via triple duplicate ACKs, would reset `cwnd` to 1 MSS and enter Slow Start (or set `cwnd` to `ssthresh` and enter Congestion Avoidance depending on the exact implementation variant, but the reduction was always drastic).
*   **Reno's advantage:** Reno's introduction of Fast Recovery and the reduction to `ssthresh` (rather than 1 MSS) for triple duplicate ACKs allows it to maintain higher throughput and recover more quickly from single packet losses.

**Question 4:**
Why was TCP CUBIC developed, and what is its main advantage over TCP Reno for modern networks?

**Answer 4:**
*   **Why CUBIC was developed:** TCP CUBIC was developed to improve the performance and scalability of TCP on high-speed, long-latency networks (often referred to as "long fat networks" or LFNs). Older algorithms like Reno had a linear increase in their congestion window (`cwnd`) during the congestion avoidance phase. On LFNs, this linear growth is too slow to effectively probe for and utilize the available large bandwidths.
*   **Main advantage:** CUBIC's main advantage is its **faster bandwidth probing and better scalability on LFNs**. It uses a cubic growth function for its `cwnd`, which increases much more rapidly than Reno's linear growth. This allows CUBIC to reach high bandwidths more quickly. Additionally, its reduction mechanism is less aggressive than halving the window, leading to more stable throughput.

**Question 5:**
What is the purpose of Active Queue Management (AQM) like RED, and how does it complement TCP congestion control?

**Answer 5:**
*   **Purpose of AQM (e.g., RED):** AQM mechanisms are deployed in routers to proactively manage buffer occupancy and signal congestion to senders *before* the router's buffers become completely full. Unlike simple "tail drop" (where packets are dropped only when buffers are full), AQM probabilistically drops packets based on the average queue length.
*   **How it complements TCP congestion control:**
    *   **Signals Congestion Earlier:** AQM signals congestion to TCP senders earlier than tail drop, allowing them to reduce their sending rate before significant packet loss occurs.
    *   **Avoids Global Synchronization:** By probabilistically dropping packets for individual flows, AQM prevents the "global synchronization" problem where all TCP flows experience simultaneous packet loss and back off, leading to severe throughput degradation.
    *   **Reduces Delay and Jitter:** By keeping average queue lengths moderate, AQM helps reduce end-to-end delays and jitter.
    *   **Facilitates TCP's Inference:** AQM's probabilistic packet drops provide the necessary signals that TCP senders rely on to infer congestion and adjust their `cwnd`.

---

### Important Points to Remember

*   **Congestion vs. Flow Control:** Congestion control is about the network; flow control is about the receiver.
*   **`cwnd` is key:** The sender's sending rate is limited by `min(cwnd, receive window)`.
*   **Inference:** TCP senders infer network congestion primarily through packet loss (timeouts and triple duplicate ACKs).
*   **Slow Start:** Exponential growth of `cwnd` to find bandwidth quickly.
*   **Congestion Avoidance:** Linear growth of `cwnd` to probe bandwidth cautiously.
*   **Timeout:** Strongest indicator of congestion, leads to drastic reduction in `cwnd`.
*   **Triple Duplicate ACKs:** Indicate likely single packet loss, leading to `ssthresh` adjustment and Fast Recovery (in Reno and later).
*   **Reno's Fast Recovery:** A significant improvement over Tahoe for handling individual packet losses without a full reset.
*   **NewReno:** Handles multiple packet losses within a window better than Reno.
*   **CUBIC:** Designed for LFNs with cubic growth for faster bandwidth utilization.
*   **AQM (RED):** Router-side mechanisms that proactively manage queues and signal congestion to TCP senders, complementing sender-side control.

---
