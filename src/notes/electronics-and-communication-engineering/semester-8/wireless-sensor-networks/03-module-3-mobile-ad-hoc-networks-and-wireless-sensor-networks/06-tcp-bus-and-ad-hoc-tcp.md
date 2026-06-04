---
title: "TCP-BUS and Ad Hoc TCP"
subject: "WIRELESS SENSOR NETWORKS"
module: "Module 3: Mobile ad hoc networks and wireless sensor networks"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5a6"
status: "completed"
scrapedAt: "2026-05-23T20:16:23.554Z"
---
# WIRELESS SENSOR NETWORKS - Module 3: Mobile ad hoc networks and wireless sensor networks

## Topic: TCP-BUS and Ad Hoc TCP

---

### Introduction

Mobile Ad hoc Networks (MANETs) are a dynamic collection of mobile nodes that communicate with each other without a fixed infrastructure. In such environments, the reliability and efficiency of data transmission are paramount. This module delves into specific transport layer protocols designed to address the unique challenges of MANETs, namely **TCP-BUS** and **Ad Hoc TCP**. These protocols aim to adapt the robust Transmission Control Protocol (TCP) for the lossy and dynamic nature of ad hoc wireless links.

---

### 1. Challenges of TCP in MANETs

Before diving into specific protocols, it's crucial to understand why standard TCP struggles in MANETs. This aligns with **CO4 (Analyze network architecture and communication protocols)** and **CO1 (Explain principles of wireless networks)**.

*   **Wireless Link Errors:** Wireless links are inherently prone to packet loss due to:
    *   **Interference:** From other wireless devices and environmental factors.
    *   **Multipath Fading:** Signal reflections causing constructive and destructive interference.
    *   **Congestion:** Especially at intermediate nodes in multi-hop paths.
*   **TCP's Reaction to Packet Loss:** TCP interprets packet loss as congestion and triggers:
    *   **Congestion Control:** Reduces the sending rate (congestion window `cwnd`).
    *   **Fast Retransmit/Fast Recovery:** Attempts to retransmit lost packets.
*   **Misinterpretation of Loss:** In MANETs, packet loss can be due to wireless errors rather than actual congestion. TCP's aggressive reaction can unnecessarily throttle the sender, leading to reduced throughput and efficiency.
*   **Mobility-Induced Disconnections:** Frequent node movements can lead to route breaks, causing packet loss and prolonged connection disruptions that standard TCP struggles to recover from efficiently.
*   **No End-to-End Path Guarantee:** In ad hoc networks, there might not always be a direct path between sender and receiver. Intermediate nodes act as routers. TCP's end-to-end focus can be problematic.

**(Reference: Murthy & Manoj, Chapter 11: Transport Layer Protocols for Ad Hoc Wireless Networks)**

---

### 2. TCP-BUS (Transport Protocol for Wireless Ad Hoc Networks)

TCP-BUS is a modification of TCP designed to enhance its performance in MANETs. It aims to distinguish between wireless link-layer losses and network-level congestion.

#### 2.1 Key Concepts and Features of TCP-BUS

*   **Explicit Congestion Notification (ECN) Enhancement:** TCP-BUS leverages ECN mechanisms, but with modifications to better handle ad hoc scenarios.
*   **Local Recovery:** One of the key contributions of TCP-BUS is its approach to local recovery. When a packet is lost, instead of relying solely on end-to-end retransmission, TCP-BUS attempts to recover the lost packet at intermediate nodes.
*   **Link-Layer Acknowledgment (L2 ACK):** TCP-BUS may utilize link-layer acknowledgments from the next hop. If an L2 ACK for a segment is not received within a certain timeout, the intermediate node that was supposed to forward the segment can infer a loss.
*   **Hop-by-Hop Retransmission:** Upon detecting a loss (e.g., via a triple duplicate ACK or a timeout with no L2 ACK), the intermediate node responsible for forwarding the packet can attempt a retransmission *to the next hop*. This is a crucial departure from standard TCP's end-to-end retransmission.
*   **Congestion Detection vs. Wireless Loss Detection:** TCP-BUS tries to differentiate between congestion and wireless loss.
    *   **Wireless Loss:** Can be inferred from the absence of L2 ACKs. The sender might be informed of this loss through a special indication from the intermediate node.
    *   **Congestion:** Indicated by sustained packet drops, triple duplicate ACKs without L2 ACK confirmation, or explicit congestion signals.

#### 2.2 How TCP-BUS Works (Conceptual Flow)

1.  **Sender:** Sends TCP segments as usual.
2.  **Intermediate Node (Forwarding):**
    *   Receives a segment.
    *   Sends an L2 ACK to the sender of that segment (if supported by the MAC layer).
    *   Forwards the segment to the next hop.
    *   Maintains a buffer of recently forwarded segments.
3.  **Loss Detection:**
    *   **Sender:** If it doesn't receive an ACK for a segment within the RTO, it suspects a loss. If it receives triple duplicate ACKs, it also suspects a loss.
    *   **Intermediate Node:** If it forwards a segment but doesn't receive an L2 ACK from the *next hop* within its local timeout, it suspects a loss occurred during transmission to the next hop.
4.  **Recovery:**
    *   **If the intermediate node detects a loss to the next hop:** It can retransmit the lost segment to that next hop immediately, *without waiting for the original sender to time out*. It might also notify the original sender about the loss and that local recovery is attempted.
    *   **If the original sender detects a loss:** It reduces `cwnd` (if it suspects congestion) and attempts retransmission. However, if it was informed of local recovery, it might be more lenient with its retransmission timer.

#### 2.3 Advantages of TCP-BUS

*   **Faster Recovery:** Local retransmissions can be much faster than end-to-end retransmissions, especially in multi-hop paths.
*   **Reduced End-to-End Congestion Signaling:** By handling losses locally, TCP-BUS can prevent unnecessary reduction in the end-to-end sending rate.
*   **Improved Throughput:** Reduced retransmission delays lead to better throughput.

#### 2.4 Disadvantages and Challenges of TCP-BUS

*   **Complexity:** Requires modifications at intermediate nodes, making deployment more complex.
*   **Buffer Overhead:** Intermediate nodes need to buffer segments temporarily to enable local retransmissions, which can be a challenge in resource-constrained sensor nodes.
*   **Coordination:** Requires close coordination between TCP and the underlying MAC/routing layers.
*   **Impact on Routing:** The routing protocol needs to be aware of which nodes are participating in TCP-BUS for local recovery.

**(Reference: Murthy & Manoj, Chapter 11.3: TCP-BUS)**

---

### 3. Ad Hoc TCP

Ad Hoc TCP is another modification of TCP aimed at improving its performance in MANETs. It focuses on making TCP more robust to wireless link failures and mobility.

#### 3.1 Key Concepts and Features of Ad Hoc TCP

*   **TCP Snoop:** A common mechanism incorporated into Ad Hoc TCP and other variants. It involves a "snoop agent" at each hop.
    *   **Snoop Agent Function:** The snoop agent monitors packets leaving its node and ACKs returning to its node.
    *   **Duplicate ACK Detection:** When a snoop agent receives duplicate ACKs for a segment it forwarded, it infers a loss between the upstream node and itself.
    *   **Local Retransmission:** The snoop agent can then retransmit the lost segment to the upstream node *directly*, without waiting for the original sender. This is similar to TCP-BUS's local recovery.
    *   **Explicit Notification:** The snoop agent can also intercept ACK packets that indicate congestion (e.g., duplicate ACKs) and prevent them from reaching the sender, thus preventing an unnecessary `cwnd` reduction.
*   **Explicit Route Change Notification (ERCN):** Ad Hoc TCP can benefit from explicit notifications from the underlying routing protocol. If a route breaks, the routing protocol can inform the affected TCP connections.
*   **Congestion Control Adaptation:** Ad Hoc TCP might adjust its congestion control mechanisms (e.g., `cwnd` and RTT estimation) based on feedback about the nature of packet loss (wireless vs. congestion).
*   **Indirect Sender:** In some Ad Hoc TCP implementations, the intermediate nodes might act as "indirect senders," maintaining their own TCP state with the original sender and forwarding TCP data to the next hop.

#### 3.2 How Ad Hoc TCP Works (Conceptual Flow with Snoop Agents)

1.  **Sender:** Sends TCP segments.
2.  **Intermediate Node A (Snoop Agent):**
    *   Receives segment from Sender.
    *   Forwards segment to Node B.
    *   Monitors ACKs from Node B.
3.  **Intermediate Node B (Snoop Agent):**
    *   Receives segment from Node A.
    *   Forwards segment to Node C (or Receiver).
    *   Monitors ACKs from Node C.
4.  **Loss Detection:**
    *   If Node B doesn't receive ACK for a segment from Node C, it suspects a loss.
    *   If Node B receives duplicate ACKs from Node C for a segment it already forwarded, it strongly suspects a loss in transmission *from B to C*.
5.  **Recovery:**
    *   **Snoop Agent at B:** If it detects loss from B to C, it can retransmit the segment to C directly. It also prevents the duplicate ACKs from reaching Node A, thus preventing Node A from thinking it caused the loss.
    *   **If Node A doesn't receive ACK for a segment:** It might time out or receive duplicate ACKs from Node B. If Node B has already recovered the packet and sent a forward ACK, Node A won't be prematurely throttled.
6.  **Route Break:** If the routing protocol detects a route break, it can notify the relevant TCP connection endpoints. Ad Hoc TCP can then potentially freeze its state or enter a "wait" mode until a new route is established.

#### 3.3 Advantages of Ad Hoc TCP

*   **Improved Performance over Standard TCP:** Better handling of wireless losses and mobility-induced disconnections.
*   **Reduced Congestion Window Shrinking:** Prevents unnecessary throttling due to wireless errors.
*   **Faster Recovery from Local Link Failures:** Snoop agents enable quicker retransmissions.

#### 3.4 Disadvantages and Challenges of Ad Hoc TCP

*   **Snoop Agent Overhead:** Requires modifications to intermediate nodes, which are often resource-constrained in WSNs.
*   **State Management:** Snoop agents need to maintain state about forwarded segments and expected ACKs.
*   **ACK Splitting/Pacing:** Advanced versions might involve splitting ACKs or pacing them to avoid ACK implosion and congestion.
*   **Integration with Routing:** Effective operation depends on tight integration with the underlying MANET routing protocol.

**(Reference: Murthy & Manoj, Chapter 11.4: Ad Hoc TCP)**

---

### 4. Comparison and Relevance to WSNs

Both TCP-BUS and Ad Hoc TCP are designed for MANETs, which share some characteristics with Wireless Sensor Networks (WSNs), particularly in their multi-hop communication and potential for node mobility (though often less dynamic than in general MANETs). However, there are key distinctions:

*   **Resource Constraints:** WSN nodes are typically severely constrained in terms of processing power, memory, and energy. Implementing complex protocols like TCP-BUS or Ad Hoc TCP with extensive buffering and state management at intermediate nodes can be infeasible.
*   **Traffic Patterns:** WSN traffic is often characterized by event-driven data, potentially small packet sizes, and many-to-one communication patterns. This differs from the general-purpose, often bulk data transfer in MANETs.
*   **Reliability Needs:** While WSNs need reliability, the acceptable latency and the criticality of data can vary. For some sensor data, occasional loss might be tolerable if it means significantly extending battery life.
*   **Alternative Protocols for WSNs:** Due to these constraints, specialized transport protocols like **Reliable Multi-segment Transport (RMT)**, **Wireless Transport Layer Security (WTLS)** variants, or custom protocols like **UDP variants with application-level reliability** are often more suitable for WSNs than direct adaptations of TCP. Protocols like **Reliable Data Transport (RDT)** or **Data Gathering Service (DGS)** are common in WSNs.

**(Reference: Karl & Willig, Chapter 8: Transport Protocols, and Dargie & Poellabauer, Chapter 6: Transport Layer)**

Despite the direct applicability challenges, understanding TCP-BUS and Ad Hoc TCP is crucial for understanding the evolution of transport protocols in dynamic wireless environments and the trade-offs involved in adapting established protocols. It helps answer **CO4 (Analyze network architecture and communication protocols)** by highlighting how transport layers adapt to link characteristics. It also relates to **CO2 (Illustrate concepts on WSNs and MANETs)** by showing transport layer challenges common to both.

---

### Important Points to Remember

*   **TCP's inherent problem in MANETs:** Interpreting wireless link loss as congestion, leading to unnecessary rate reduction.
*   **TCP-BUS:** Focuses on **local recovery** and differentiating wireless loss from congestion using link-layer acknowledgments.
*   **Ad Hoc TCP:** Often employs **snoop agents** at intermediate nodes for local retransmissions and to mask losses from the end-to-end sender.
*   **Common Goal:** To improve TCP performance in dynamic wireless environments by reducing retransmission delays and preventing spurious congestion signals.
*   **WSN Applicability:** Direct implementation of TCP-BUS and Ad Hoc TCP on resource-constrained WSN nodes is challenging. WSNs often use tailored transport protocols.

---

### Practice Questions and Answers

**Q1. What is the primary reason standard TCP performs poorly in MANETs?**

**Answer:** Standard TCP interprets packet loss caused by wireless link errors (like interference, fading) as network congestion. This triggers TCP's congestion control mechanisms, leading to an unnecessary reduction in the sending rate and hence, poor performance.

**Q2. Explain the concept of "local recovery" in TCP-BUS.**

**Answer:** Local recovery in TCP-BUS refers to the ability of an intermediate node in the path to retransmit a lost packet to the next hop directly. This avoids waiting for the original sender to detect the loss and initiate an end-to-end retransmission, thus speeding up the recovery process.

**Q3. What is a "snoop agent" and what is its role in Ad Hoc TCP?**

**Answer:** A snoop agent is typically located at an intermediate node. Its role is to monitor packets being forwarded and the acknowledgments (ACKs) returning. When it detects a loss between itself and the next hop (e.g., via duplicate ACKs), it can retransmit the lost packet directly to the next hop. It also acts to prevent the duplicate ACKs from reaching the original sender, thus masking the loss and preventing premature congestion control action.

**Q4. While TCP-BUS and Ad Hoc TCP aim to improve transport performance in MANETs, what are the main challenges in directly applying them to Wireless Sensor Networks (WSNs)?**

**Answer:** The main challenges include the severe resource constraints of WSN nodes (processing power, memory, energy). Implementing complex features like buffering and state management required by these protocols at intermediate sensor nodes can be infeasible. WSNs often require simpler, more energy-efficient transport protocols.

**Q5. If a packet is lost due to multipath fading on a wireless link in a MANET, how would standard TCP react, and how might TCP-BUS react differently?**

**Answer:**
*   **Standard TCP:** Would likely detect the loss (via timeout or duplicate ACKs) and interpret it as congestion. It would then reduce its congestion window (`cwnd`) and initiate an end-to-end retransmission.
*   **TCP-BUS:** If equipped with link-layer acknowledgments and local recovery, the intermediate node responsible for forwarding the packet could detect the loss (e.g., no L2 ACK from the next hop). It could then attempt a direct retransmission to the next hop without waiting for the original sender to react. This prevents the end-to-end `cwnd` from being unnecessarily reduced due to a localized wireless issue.

---

### Learning Outcome Alignment

*   **CO1: Explain the principles of wireless networks concepts and their standards.**
    *   Discussed the inherent unreliability of wireless links (interference, fading) that necessitates new transport protocols.
    *   Highlighted how TCP's reaction to loss is a key principle of its operation, which needs adaptation.
*   **CO2: Illustrate various concepts on the basics of wireless sensor networks and mobile adhoc networks.**
    *   Contrasted MANETs and WSNs, explaining why transport layer solutions for MANETs may not be directly transferable to WSNs due to resource constraints and traffic patterns.
    *   Explained the need for robust communication in both MANETs and WSNs.
*   **CO3: Develop single node wireless sensor architecture.**
    *   While not directly about architecture development, understanding transport protocols is crucial for designing the communication stack of a single WSN node. The limitations of TCP-BUS/Ad Hoc TCP highlight the need for custom transport layers for WSNs, influencing node design choices.
*   **CO4: Analyse the network architecture and the communication protocols of wireless sensor networks.**
    *   Analyzed the limitations of standard TCP in MANET environments, which are relevant to multi-hop WSN architectures.
    *   Examined the mechanisms of TCP-BUS and Ad Hoc TCP, detailing how their protocols aim to overcome TCP's shortcomings by modifying the transport layer's behavior and interaction with lower layers.
    *   Discussed the trade-offs and complexities introduced by these protocols.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
