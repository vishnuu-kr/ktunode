---
title: "Congestion Control- Open Loop Vs Closed Loop Congestion Control"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c93b"
status: "completed"
scrapedAt: "2026-05-20T17:02:51.882Z"
---
# Computer Networks: Module 4 - Transport Layer

## Topic: Congestion Control - Open Loop vs. Closed Loop Congestion Control

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Define congestion and its causes in computer networks.
*   Explain the difference between open-loop and closed-loop congestion control.
*   Describe common open-loop congestion control techniques.
*   Describe common closed-loop congestion control techniques.
*   Understand the advantages and disadvantages of each approach.
*   Analyze scenarios to identify which type of congestion control is being applied.

---

### 1. What is Congestion?

Congestion occurs when the **amount of data being sent into the network exceeds the capacity of the network to handle it.** This leads to a significant degradation in network performance, including:

*   **Increased Packet Delay:** Packets spend more time waiting in router queues.
*   **Increased Packet Loss:** Router queues overflow, causing packets to be dropped.
*   **Reduced Throughput:** The effective rate of successful data transfer decreases.
*   **Jitter:** Variation in packet arrival times, affecting real-time applications like voice and video.

**Causes of Congestion:**

*   **Too many senders sending too much data:** A large number of hosts trying to transmit data simultaneously.
*   **Link capacity saturation:** A particular link (e.g., Ethernet cable, Wi-Fi channel) becomes overwhelmed with traffic.
*   **Router buffer overflow:** Routers have finite buffer space to store incoming packets. When these buffers are full, new packets are dropped.
*   **Inefficient routing:** Loops in routing tables or suboptimal path selection can concentrate traffic on certain links.
*   **Bursty traffic:** Sudden spikes in data transmission can temporarily overwhelm network resources.

---

### 2. Approaches to Congestion Control

Congestion control mechanisms are implemented to prevent or alleviate network congestion. These can be broadly categorized into two main approaches:

*   **Open-Loop Congestion Control:** These are preventative measures taken by end hosts or intermediate routers to avoid congestion *before* it happens. They focus on making good use of available resources and avoiding actions that could lead to congestion.
*   **Closed-Loop Congestion Control:** These are reactive measures that detect congestion *after* it has occurred and take steps to reduce the rate of data transmission to alleviate the congestion.

---

### 3. Open-Loop Congestion Control

Open-loop congestion control techniques aim to **prevent congestion by controlling the flow of data at its source**. They are proactive and often implemented at the transport layer or network layer.

#### Key Concepts and Techniques:

*   **Packet Redundancy Control:**
    *   **Discarding Duplicate Packets:** While not strictly a congestion control mechanism, detecting and discarding duplicate packets at the receiver can reduce unnecessary retransmissions, thereby easing network load.
    *   **Forward Error Correction (FEC):** Adding redundant information to packets allows the receiver to reconstruct corrupted packets without retransmission. This can reduce the number of retransmissions, indirectly helping congestion.
*   **Flow Control:**
    *   **Purpose:** To prevent a fast sender from overwhelming a slow receiver. This is distinct from congestion control but can contribute to preventing congestion if the receiver is a bottleneck.
    *   **Mechanisms:**
        *   **Stop-and-Wait:** Sender sends one packet and waits for an acknowledgment before sending the next. Simple but inefficient.
        *   **Sliding Window:** Sender maintains a window of allowed unacknowledged packets. The receiver advertises how much buffer space it has available (window size), allowing the sender to transmit multiple packets before waiting for acknowledgments.
    *   **Example:** TCP's sliding window mechanism is a prime example.
*   **Congestion Control (at the Source):**
    *   **Purpose:** To limit the rate at which a sender injects data into the network, anticipating potential congestion.
    *   **Mechanisms:**
        *   **Traffic Shaping (Leaky Bucket/Token Bucket):**
            *   **Leaky Bucket:** Packets are placed in a bucket. The bucket leaks at a constant rate. If the bucket is full, incoming packets are discarded. This smooths out traffic.
            *   **Token Bucket:** Tokens are generated at a constant rate and stored in a bucket. A sender can transmit a packet only if it has a token. The bucket has a maximum capacity, allowing for short bursts of traffic if tokens accumulate.
            *   **Example:** A network administrator might configure a router to shape traffic from a particular user to prevent them from consuming excessive bandwidth.
        *   **Packet Scheduling:**
            *   **Purpose:** To decide which packets to forward when a router has multiple packets waiting in its queues.
            *   **Mechanisms:**
                *   **First-Come, First-Served (FCFS):** Simplest, but can lead to convoy effects where a slow flow delays faster flows.
                *   **Weighted Fair Queuing (WFQ):** Assigns weights to different traffic flows, ensuring that each flow receives a fair share of bandwidth based on its weight.
                *   **Priority Queuing:** Assigns priorities to different packet types, forwarding higher-priority packets first.
            *   **Example:** A router might prioritize voice packets over file transfer packets to ensure good quality for real-time communication.

#### Advantages of Open-Loop Congestion Control:

*   **Preventative:** Aims to avoid congestion, which is generally more effective than reacting to it.
*   **Simple to implement (for some techniques):** Basic flow control or traffic shaping can be relatively straightforward.
*   **Reduces router burden:** By controlling traffic at the source, it prevents routers from being overwhelmed.

#### Disadvantages of Open-Loop Congestion Control:

*   **Requires cooperation:** Relies on end hosts or network administrators to implement and adhere to the rules.
*   **May limit throughput:** Overly aggressive prevention can unnecessarily limit the usable bandwidth for well-behaved applications.
*   **Can be difficult to tune:** Setting appropriate limits for traffic shaping or flow control can be challenging in dynamic network environments.

---

### 4. Closed-Loop Congestion Control

Closed-loop congestion control techniques **detect congestion and then signal back to the sources to reduce their transmission rate**. They are reactive.

#### Key Concepts and Techniques:

*   **Congestion Detection:** How does the network know congestion is occurring?
    *   **Packet Loss:** The most common indicator. Routers drop packets when their buffers are full. End hosts observe this loss (e.g., through missing acknowledgments).
    *   **Increased Round-Trip Time (RTT):** As queues in routers grow, the time it takes for a packet to travel to the destination and its acknowledgment to return increases.
    *   **Explicit Congestion Notification (ECN):**
        *   **Purpose:** Routers can explicitly mark packets to indicate that congestion is building up, even before packet loss occurs.
        *   **Mechanism:** When a router's queue length exceeds a certain threshold, it can mark a bit in the IP header of packets passing through it (ECN-Echo flag). The receiver then copies this mark to the acknowledgment packet sent back to the sender.
        *   **Example:** ECN allows for more proactive congestion response, preventing outright packet loss.

*   **Congestion Notification:** How is the sender informed about congestion?
    *   **Implicit Notification:**
        *   **Packet Loss (via Timeout or Duplicate ACKs):** If a sender doesn't receive an acknowledgment for a packet within a certain time (timeout), or if it receives multiple duplicate acknowledgments (indicating a packet was lost but subsequent packets arrived), it infers congestion.
    *   **Explicit Notification:**
        *   **ECN Marks:** As described above, the receiver relays the ECN mark to the sender.

*   **Congestion Response (Sender Actions):** What does the sender do upon receiving a congestion notification?
    *   **Reduce Transmission Rate:** The primary response is to slow down.
    *   **TCP Congestion Control Algorithms:** TCP is the most prominent example of a protocol employing closed-loop congestion control. Key algorithms include:
        *   **Slow Start:** When a TCP connection begins, the sender starts with a small congestion window (cwnd) and doubles it for each acknowledged packet. This allows it to quickly probe for available bandwidth.
        *   **Congestion Avoidance:** Once the cwnd reaches a certain threshold (slow start threshold, ssthresh), the sender increases the cwnd more gradually (linearly) for each acknowledgment.
        *   **Fast Retransmit:** If a sender receives three duplicate acknowledgments for the same packet, it assumes the next packet was lost and retransmits it immediately without waiting for a timeout.
        *   **Fast Recovery:** After a Fast Retransmit, the sender reduces its cwnd and ssthresh and enters a congestion avoidance phase, rather than immediately going back to slow start.
        *   **AIMD (Additive Increase, Multiplicative Decrease):** A core principle of many TCP congestion control algorithms.
            *   **Additive Increase:** The cwnd is increased by a small, fixed amount (e.g., 1 Maximum Segment Size - MSS) for each acknowledgment received during the congestion avoidance phase.
            *   **Multiplicative Decrease:** When congestion is detected (e.g., via timeout or Fast Retransmit), the cwnd is halved. This rapid reduction helps to quickly relieve congestion.
        *   **Example:** TCP Reno, TCP NewReno, CUBIC, BBR are all variations of TCP congestion control algorithms that implement these principles.

#### Advantages of Closed-Loop Congestion Control:

*   **Reactive and Adaptive:** Responds to actual network conditions, making it effective in dynamic environments.
*   **Fairness:** TCP's AIMD approach helps ensure that multiple competing flows share bandwidth relatively fairly.
*   **Self-regulating:** The feedback mechanism from the network to the sender allows the system to adjust automatically.

#### Disadvantages of Closed-Loop Congestion Control:

*   **Reactive, not preventative:** Congestion must occur before the mechanism can react, leading to some packet loss and delay.
*   **Can be slow to respond:** Especially if congestion is caused by sudden bursts, the detection and reaction might lag.
*   **Complex to implement and tune:** The algorithms can be intricate, and their performance can be affected by network characteristics.
*   **"Global Synchronization" problem:** In some scenarios, all TCP flows might reduce their rates simultaneously due to a common congestion event, leading to periods of underutilization.

---

### 5. Open Loop vs. Closed Loop: A Comparison

| Feature           | Open-Loop Congestion Control                                    | Closed-Loop Congestion Control                                        |
| :---------------- | :-------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Approach**      | Preventative (proactive)                                        | Reactive                                                              |
| **Focus**         | Control data flow at the source to avoid congestion.            | Detect congestion and signal sources to reduce transmission rate.      |
| **Mechanism**     | Traffic shaping, packet scheduling, flow control.               | Packet loss detection, RTT monitoring, ECN, AIMD.                     |
| **When it acts**  | Before congestion occurs.                                       | After congestion has begun.                                           |
| **Feedback**      | Minimal or no direct feedback from the network.                 | Relies on feedback from the network (e.g., packet loss, ECN marks).   |
| **Complexity**    | Can range from simple (flow control) to complex (traffic shaping). | Generally more complex due to feedback mechanisms and algorithms.     |
| **Effectiveness** | Good at smoothing traffic and preventing overloads.             | Effective at adapting to dynamic network conditions and sharing resources. |
| **Example**       | Token Bucket, Leaky Bucket, WFQ.                                | TCP Congestion Control (Slow Start, Congestion Avoidance, AIMD).      |
| **Goal**          | Ensure efficient and orderly use of network resources.          | Prevent network collapse due to overload.                             |

**Important Note:** Many real-world networks use a **combination** of both open-loop and closed-loop techniques. For instance, TCP (closed-loop) often runs over networks that employ routers with packet scheduling (open-loop) to manage traffic.

---

### 6. Practice Questions and Exercises

**Question 1:**
Which of the following is a characteristic of **open-loop** congestion control?
a) Reacts to packet loss by reducing transmission rate.
b) Uses feedback from the network to adjust sending speed.
c) Aims to prevent congestion by controlling the source rate.
d) Explicitly marks packets when congestion is detected.

**Answer 1:**
c) Aims to prevent congestion by controlling the source rate.

**Question 2:**
Explain the difference between **traffic shaping** (an open-loop technique) and **TCP's congestion avoidance** (a closed-loop technique).

**Answer 2:**
*   **Traffic Shaping (Open-Loop):** Is a preventative measure where a sender smooths out its traffic flow according to a predefined rate. It doesn't typically get direct feedback from the network about congestion; it just adheres to its own shaping policy (e.g., sending packets at a constant rate). Its goal is to avoid causing congestion in the first place by limiting bursts.
*   **TCP Congestion Avoidance (Closed-Loop):** Is a reactive measure. After initial slow start, TCP enters congestion avoidance, where it increases its sending rate linearly with each acknowledgment. However, if it detects congestion (e.g., packet loss), it drastically reduces its sending rate (multiplicatively). It relies on feedback from the network to know when to increase or decrease its rate.

**Question 3:**
Consider a scenario where a router's buffer is filling up rapidly due to an influx of traffic.
a) Which type of congestion control would be most effective at preventing the buffer from overflowing entirely?
b) If packet loss starts occurring, what type of congestion control mechanism is likely being triggered at the end hosts?

**Answer 3:**
a) **Open-loop congestion control** techniques like traffic shaping or rate limiting at the ingress points of the network could be most effective at preventing the buffer from overflowing entirely by limiting the rate of traffic entering the network or a specific interface before it reaches the buffer.
b) If packet loss starts occurring, **closed-loop congestion control** mechanisms at the end hosts (like TCP) are being triggered. These mechanisms will detect the loss (e.g., via timeouts or duplicate ACKs) and initiate a reduction in the sender's transmission rate.

**Question 4:**
Describe the AIMD principle used in TCP congestion control. What are its advantages and disadvantages?

**Answer 4:**
**AIMD (Additive Increase, Multiplicative Decrease):**
*   **Additive Increase:** When congestion is not detected, the congestion window (cwnd) is increased linearly (additively) for each received acknowledgment. This allows the sender to gradually probe for more bandwidth.
*   **Multiplicative Decrease:** When congestion is detected (e.g., via packet loss), the cwnd is halved (multiplied by 0.5). This is a rapid reduction to quickly alleviate the congestion.

**Advantages of AIMD:**
*   **Fairness:** It tends to provide a fair share of bandwidth among competing TCP flows.
*   **Stability:** The combination of gradual increase and drastic decrease helps to stabilize the network and prevent oscillations.
*   **Efficiency:** It efficiently utilizes available bandwidth by increasing the sending rate when possible.

**Disadvantages of AIMD:**
*   **Slow Response to Congestion:** The multiplicative decrease, while fast, can still be too slow for very rapid bursts of congestion, leading to significant packet loss before the rate is reduced.
*   **Potential for Underutilization:** After a congestion event and reduction, it takes time for the sender to ramp up its rate again, potentially leading to periods of underutilization.
*   **TCP "Reno" behavior:** Classic AIMD (as in TCP Reno) can lead to a phenomenon called "global synchronization" where multiple TCP flows all reduce their rates at the same time, leading to underutilization. Newer algorithms try to mitigate this.

**Question 5:**
Provide an example of a situation where **flow control** is important and how it differs from **congestion control**.

**Answer 5:**
**Example:** Imagine a high-speed server (sender) sending data to a small, low-power IoT device (receiver) with a limited buffer.
*   **Flow Control:** The IoT device needs to tell the server its buffer capacity. If the server sends data too quickly, the IoT device's buffer will overflow, and data will be lost. Flow control mechanisms (like TCP's sliding window) ensure the server only sends data at a rate the receiver can handle. This prevents the receiver from being overwhelmed.
*   **Congestion Control:** Now imagine that the network path *between* the server and the IoT device is also very congested, with many other devices sending data. Even if the IoT device has a large buffer, the network routers along the path might not. Congestion control is needed to reduce the server's sending rate to avoid overwhelming these intermediate routers, which would cause packet loss for *all* users of that part of the network, not just the IoT device.

The key difference is that flow control deals with the capacity of the *receiver*, while congestion control deals with the capacity of the *network*.

---

### 7. Important Points to Remember

*   **Congestion is a network-level problem**, not just an end-to-end problem.
*   **Open-loop methods are proactive**, aiming to prevent congestion by controlling traffic at the source or edge.
*   **Closed-loop methods are reactive**, detecting congestion and signaling sources to reduce their rates.
*   **Packet loss is a primary indicator of congestion** for closed-loop systems.
*   **ECN provides an explicit signal** for congestion before packet loss occurs.
*   **TCP is a prime example of a closed-loop congestion control mechanism**, using algorithms like Slow Start, Congestion Avoidance, and AIMD.
*   **Flow control is distinct from congestion control**; flow control manages the sender-receiver rate, while congestion control manages the network's capacity.
*   **Real-world networks often employ a hybrid approach**, combining both open-loop and closed-loop strategies for robust congestion management.
*   The goal of congestion control is to **maximize network throughput while minimizing delay and packet loss**.
