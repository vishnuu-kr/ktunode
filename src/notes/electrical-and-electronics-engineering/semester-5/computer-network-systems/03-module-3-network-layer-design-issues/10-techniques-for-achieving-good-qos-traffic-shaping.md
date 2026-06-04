---
title: "Techniques for achieving good QoS – Traffic shaping"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36486"
status: "completed"
scrapedAt: "2026-05-23T16:20:13.650Z"
---
# Computer Network Systems - Module 3: Network Layer Design Issues

## Topic: Techniques for Achieving Good QoS – Traffic Shaping

This module delves into the critical aspects of network layer design, focusing on how to ensure and improve the Quality of Service (QoS) for network traffic. A significant technique for achieving good QoS is **Traffic Shaping**.

---

### 1. Introduction to Quality of Service (QoS)

**Definition:** Quality of Service (QoS) refers to a set of technologies and mechanisms that aim to provide differentiated levels of service to different types of network traffic. It's about guaranteeing certain performance levels, such as low delay, low jitter, and sufficient bandwidth, for specific applications or users.

**Why is QoS important?**
*   **Real-time applications:** Voice over IP (VoIP), video conferencing, and online gaming are highly sensitive to delay and jitter. Poor QoS can render these applications unusable.
*   **Business-critical applications:** Financial transactions, remote surgery, and critical data transfers require guaranteed performance and reliability.
*   **User experience:** Even for non-real-time applications, a good QoS can lead to a more responsive and satisfying user experience.

**Key QoS Parameters:**
*   **Bandwidth:** The rate at which data can be transmitted.
*   **Delay (Latency):** The time it takes for a packet to travel from source to destination.
*   **Jitter:** The variation in delay between successive packets.
*   **Packet Loss:** The percentage of packets that fail to reach their destination.
*   **Throughput:** The actual rate at which data is successfully transmitted.

**(Referenced from Tanenbaum, 5th Ed., Chapter 7: Network Layer; Forouzan, 5th Ed., Chapter 14: Network Layer: Addressing and Routing)**

---

### 2. Network Layer Design Issues and QoS

The network layer is responsible for logical addressing, routing, and forwarding of packets. Many of the design decisions at this layer directly impact QoS.

**Key Design Issues:**
*   **Routing Algorithms:** Determining the best path for packets. (Relates to CO3)
*   **Congestion Control:** Mechanisms to prevent and manage network congestion. (Relates to CO3)
*   **IP Addressing:** How hosts are identified and located. (Relates to CO3)
*   **Packet Forwarding:** How routers handle incoming packets.
*   **Quality of Service (QoS) Provisioning:** Techniques to guarantee performance.

**(Referenced from Tanenbaum, 5th Ed., Chapter 7: Network Layer)**

---

### 3. Traffic Shaping: A Key QoS Technique

**Definition:** Traffic shaping is a mechanism used to control the rate at which data is sent into the network. Its primary goal is to smooth out bursts of traffic, making it more predictable and conforming to predefined traffic profiles, thereby preventing congestion and ensuring better QoS for prioritized traffic.

**How it works:** Traffic shaping involves regulating the flow of packets by buffering excess packets and releasing them at a controlled rate. This prevents sudden spikes in traffic that can overwhelm routers and cause packet loss or increased delay.

**Core Principle:** Instead of allowing a burst of data to enter the network immediately, traffic shaping delays some of the traffic, smoothing out the rate of transmission to comply with a desired traffic pattern.

**(Referenced from Forouzan, 5th Ed., Chapter 14: Network Layer: Addressing and Routing - indirectly related to traffic management concepts; Kurose & Ross, 6th Ed., Chapter 6: Network Support for Applications - discusses principles of network performance)**

---

### 4. Common Traffic Shaping Algorithms

These algorithms define the rules for buffering and releasing traffic.

#### 4.1. Token Bucket Algorithm

**Concept:** This is one of the most widely used traffic shaping algorithms. It's analogous to a bucket that holds tokens. Tokens are added to the bucket at a constant rate. When a packet arrives, it must have a token to be transmitted. If there are no tokens, the packet is either delayed (shaping) or discarded (policing).

**Components:**
*   **Bucket Size (B):** The maximum number of tokens the bucket can hold. This determines the maximum burst size that can be transmitted.
*   **Token Rate (R):** The rate at which tokens are added to the bucket (tokens per second). This determines the average rate of transmission.

**Operation:**
1.  Tokens are added to the bucket at a rate `R`.
2.  If the bucket is full, new tokens are discarded.
3.  When a packet arrives, if there is at least one token in the bucket, one token is removed, and the packet is transmitted immediately.
4.  If there are no tokens in the bucket, the packet is buffered (for shaping) or dropped (for policing).

**Traffic Shaping:** If a packet arrives and there are no tokens, it is placed in a queue, and the router waits until a token becomes available. The transmission rate is thus limited to `R`.

**Traffic Policing:** If a packet arrives and there are no tokens, it is dropped. This is used to enforce a rate limit.

**Example:**
Imagine a network link that guarantees a sustained rate of 1 Mbps but can tolerate occasional bursts of up to 5 Mbps.
*   **Token Rate (R):** 1 Mbps (1,000,000 tokens per second).
*   **Bucket Size (B):** 5 Mbps (enough to hold 5 million tokens).

If a large file transfer starts sending data at 5 Mbps, it will consume 5 tokens per second. As long as there are tokens available (up to the bucket size), these bursts will be allowed. If the average rate of the transfer is 1 Mbps, it will consume tokens at that rate, and the bucket will be refilled, allowing for future bursts. If the source sends at a rate consistently above 1 Mbps without long idle periods, it will eventually exhaust the tokens and be forced to slow down or buffer its traffic.

**Advantages:**
*   Allows for controlled bursts.
*   Relatively simple to implement.
*   Effective in smoothing traffic.

**Disadvantages:**
*   The choice of bucket size and token rate is crucial and can be complex.
*   Can introduce delay due to buffering.

**(Referenced from Tanenbaum, 5th Ed., Chapter 7: Network Layer - discusses rate control and traffic management; Forouzan, 5th Ed., Chapter 14: Network Layer: Addressing and Routing)**

#### 4.2. Leaky Bucket Algorithm

**Concept:** This is a simpler, more rigid version of traffic shaping. It's like a bucket with a hole at the bottom that leaks water at a constant rate. Regardless of how much water is poured into the bucket, it can only leak out at a fixed rate.

**Components:**
*   **Bucket Size (S):** The maximum number of packets (or bytes) the bucket can hold.
*   **Leak Rate (R):** The rate at which packets (or bytes) are allowed to exit the bucket.

**Operation:**
1.  Incoming packets are placed in the bucket.
2.  If the bucket is full, incoming packets are discarded.
3.  Packets are removed from the bucket and transmitted at a constant rate `R`.

**Traffic Shaping:** If the bucket is not full, packets are accepted and queued. They are then transmitted at the leak rate `R`. This effectively smooths out traffic by eliminating bursts.

**Example:**
Consider a router receiving traffic that varies from 0 to 10 Mbps. The leaky bucket is configured with a leak rate (R) of 2 Mbps.
*   Any traffic arriving at 2 Mbps or less will be passed through immediately (if there's space in the bucket).
*   If traffic arrives at 10 Mbps, the first 2 Mbps will be transmitted. The remaining 8 Mbps will fill the bucket. If the bucket overflows, the excess packets are dropped. The output will be a steady stream of 2 Mbps.

**Difference from Token Bucket:**
*   **Leaky Bucket:** Emphasizes a constant output rate. Any deviation from the output rate is either discarded or smoothed to meet the rate.
*   **Token Bucket:** Allows for bursts up to the bucket size, as long as tokens are available. The output rate is smoothed but can exceed the average token rate for short periods.

**Advantages:**
*   Simple to understand and implement.
*   Guarantees a constant output rate.

**Disadvantages:**
*   Less flexible than token bucket, as it doesn't allow for bursts.
*   Can discard more packets than necessary if the burst size is small but exceeds the bucket capacity momentarily.
*   Inefficient use of bandwidth if the source has bursts that could be accommodated.

**(Referenced from Tanenbaum, 5th Ed., Chapter 7: Network Layer; Forouzan, 5th Ed., Chapter 14: Network Layer: Addressing and Routing)**

---

### 5. Traffic Shaping in Practice

**Where is it applied?**
*   **Edge Routers/Gateways:** To shape traffic entering a network from a less controlled source or to enforce service level agreements (SLAs) with customers.
*   **Within a Network:** To manage traffic flow between different network segments or for specific classes of service.
*   **Network Access Control:** To limit the bandwidth of certain users or applications.

**Relation to Other QoS Mechanisms:**
Traffic shaping is often used in conjunction with other QoS mechanisms like:
*   **Traffic Policing:** Enforcing rate limits by dropping excess packets. While shaping delays, policing drops.
*   **Queue Management:** Algorithms like Weighted Fair Queuing (WFQ) or Class-Based Weighted Fair Queuing (CBWFQ) are used to manage packets within routers, providing differentiated service. Shaping helps ensure that the traffic entering these queues is more predictable.
*   **Congestion Avoidance:** Techniques that try to prevent congestion before it happens.

**(Referenced from Peterson & Davie, 5th Ed., Chapter 5: Quality of Service; Stallings, 2004, Chapter 12: Quality of Service)**

---

### 6. Key Concepts and Definitions Summary

*   **QoS:** Guarantees performance metrics for network traffic.
*   **Traffic Shaping:** Controls the rate of traffic transmission by buffering and delaying packets to conform to a traffic profile.
*   **Token Bucket:** Allows bursts by consuming tokens generated at a constant rate; tokens represent permission to transmit.
*   **Leaky Bucket:** Enforces a constant output rate by queuing packets and releasing them at a fixed leak rate.
*   **Burst:** A temporary increase in traffic rate.
*   **Rate Limiting:** The process of controlling the rate of data transmission.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the difference between traffic shaping and traffic policing.

**Answer:**
Traffic shaping aims to smooth out traffic by buffering and delaying packets to conform to a desired rate or profile. Its goal is to prevent congestion by making traffic more predictable. Traffic policing, on the other hand, enforces a rate limit by dropping packets that exceed the defined rate. While shaping tries to "shape" the traffic, policing "punishes" excess traffic.

**Question 2:**
Describe the operation of the Token Bucket algorithm. What do the bucket size and token rate represent?

**Answer:**
In the Token Bucket algorithm, tokens are generated at a constant rate (token rate, R) and stored in a bucket with a maximum capacity (bucket size, B). A packet can only be transmitted if a token is available in the bucket. If tokens are available, one is removed, and the packet is transmitted. If no tokens are available, the packet is buffered (for shaping) or dropped (for policing). The bucket size represents the maximum burst size that can be accommodated, while the token rate dictates the average transmission rate.

**Question 3:**
When would you choose a Leaky Bucket algorithm over a Token Bucket algorithm for traffic shaping, and vice-versa?

**Answer:**
*   **Leaky Bucket:** You would choose a Leaky Bucket when a strict, constant output rate is required, and you want to eliminate all bursts. This is useful for applications that are very sensitive to any variation in traffic delivery. However, it can be inefficient as it might discard traffic that a token bucket could have handled.
*   **Token Bucket:** You would choose a Token Bucket when you need to allow for controlled bursts of traffic while maintaining an average rate. This is more flexible and efficient for applications that can tolerate some variability but still need predictable performance. It's generally preferred for providing better bandwidth utilization while still offering QoS.

**Question 4 (Conceptual):**
Imagine you are designing QoS for a video conferencing service. Which traffic shaping technique would likely be more suitable, and why?

**Answer:**
A **Token Bucket** algorithm would likely be more suitable for a video conferencing service. Video conferencing is sensitive to delay and jitter, but it also benefits from the ability to handle short bursts of data that can occur with changes in scene complexity or encoding. The Token Bucket allows for these bursts (up to the bucket size) while ensuring an average rate, which is crucial for maintaining a stable connection. A Leaky Bucket would be too rigid and might discard necessary burst traffic, leading to degraded video quality.

---

### 8. Important Points to Remember

*   **QoS is essential for real-time and critical applications.**
*   **Traffic shaping is a proactive mechanism to improve QoS by controlling traffic flow.**
*   **The Token Bucket allows for bursts, while the Leaky Bucket enforces a constant output rate.**
*   **The choice of algorithm and its parameters (R, B, S) is critical for effective traffic shaping.**
*   **Traffic shaping often works in conjunction with other QoS mechanisms.**
*   **Understanding the trade-offs between smoothing, burst allowance, and potential delay is key.**

---

### 9. Alignment with Course Outcomes

*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   This topic directly addresses "ways to achieve good quality of service" by detailing traffic shaping techniques. It complements the understanding of congestion control by showing how to manage traffic *before* it causes congestion.

---
