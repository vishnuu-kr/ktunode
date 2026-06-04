---
title: "Packet scheduling"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36487"
status: "completed"
scrapedAt: "2026-05-23T16:20:14.414Z"
---
# Computer Network Systems - Module 3: Network Layer Design Issues - Packet Scheduling

## 1. Introduction to Packet Scheduling

**Packet scheduling** is a fundamental mechanism in the network layer that determines the order in which packets are transmitted from a queue to the network. In essence, it's a **queue management strategy** that aims to balance different performance goals like throughput, delay, jitter, and fairness.

**Why is Packet Scheduling Necessary?**

*   **Resource Sharing:** Network links are shared resources. Multiple flows of data compete for the same bandwidth.
*   **Congestion Control:** During periods of congestion, queues at routers can grow indefinitely, leading to packet loss and increased delays. Packet scheduling helps manage these queues.
*   **Quality of Service (QoS):** Different applications have varying QoS requirements (e.g., real-time video vs. file transfer). Packet scheduling allows preferential treatment for certain traffic types.
*   **Fairness:** Ensures that no single flow monopolizes the network resources, providing a degree of fairness among competing flows.

**Key Concepts:**

*   **Queues:** Packets arriving at a router are typically stored in queues before being transmitted.
*   **Scheduling Algorithm:** The logic used to select the next packet to transmit from the queue.
*   **Traffic Classes/Flows:** Grouping of packets based on their characteristics (e.g., priority, application type).
*   **Service Discipline:** The overall approach to queue management and packet selection.

**Textbook References:**

*   **Tanenbaum:** Discusses queueing disciplines and their impact on performance.
*   **Forouzan:** Explains different scheduling algorithms and their trade-offs.
*   **Peterson & Davie:** Provides a systems-level perspective on packet scheduling and its role in network performance.
*   **Kurose & Ross:** Covers the fundamentals of scheduling in the context of QoS.

---

## 2. Objectives of Packet Scheduling

Packet scheduling algorithms are designed to achieve various objectives, often by making trade-offs between them:

*   **Maximize Throughput:** Transmit as many packets as possible within a given time.
*   **Minimize Average Delay:** Reduce the time packets spend in queues.
*   **Minimize Jitter:** Ensure consistent delays between packets, crucial for real-time applications like voice and video.
*   **Ensure Fairness:** Distribute network resources equitably among competing flows.
*   **Prioritize Traffic:** Give preferential treatment to certain types of traffic (e.g., delay-sensitive traffic).
*   **Prevent Starvation:** Ensure that no flow is indefinitely denied access to network resources.

**Important Point to Remember:** There's no single "best" packet scheduling algorithm. The optimal choice depends on the specific network requirements and traffic characteristics.

---

## 3. Common Packet Scheduling Algorithms

This section delves into various packet scheduling algorithms, categorized by their complexity and capabilities.

### 3.1. Simple Scheduling Algorithms

These are foundational algorithms, often used as building blocks or in simpler network environments.

#### 3.1.1. First-Come, First-Served (FCFS) / First-In, First-Out (FIFO)

*   **Description:** The most straightforward scheduling algorithm. Packets are transmitted in the exact order they arrive in the queue.
*   **Mechanism:** A single queue is maintained. The packet at the head of the queue is transmitted.
*   **Pros:** Simple to implement, fair in terms of arrival order.
*   **Cons:** Can lead to **head-of-line (HOL) blocking**. If a large packet or a packet with a corrupted header arrives, it can delay the transmission of subsequent smaller, valid packets, even if the link is available. This can significantly increase delay and reduce throughput for certain flows.
*   **Example:** A simple buffer in a switch where packets are processed sequentially.
*   **Textbook Reference:** Tanenbaum (Chapter 4 on Packet Switching) often discusses basic queueing mechanisms.

#### 3.1.2. Priority Scheduling

*   **Description:** Packets are assigned priorities, and higher-priority packets are always transmitted before lower-priority packets.
*   **Mechanism:** Multiple queues are maintained, one for each priority level. The scheduler always selects a packet from the highest-priority non-empty queue.
*   **Pros:** Allows preferential treatment for important traffic (e.g., VoIP traffic over FTP traffic).
*   **Cons:** **Starvation** of low-priority packets is a major concern. If there's a continuous stream of high-priority packets, low-priority packets may never be transmitted.
*   **Example:** A router with distinct queues for real-time audio, interactive data, and bulk data. Audio packets would have the highest priority.
*   **Textbook Reference:** Forouzan (Chapter 9 on Network Layer) often introduces priority mechanisms.

### 3.2. Fair Queueing Algorithms

These algorithms aim to provide a more equitable distribution of bandwidth among competing flows.

#### 3.2.1. Weighted Fair Queueing (WFQ)

*   **Description:** Extends the concept of fair queueing by allowing different flows to receive different *weights*, which dictate their share of the bandwidth.
*   **Mechanism:** Each flow is assigned a weight. The scheduler attempts to allocate bandwidth proportionally to these weights. It simulates a **Generalized Processor Sharing (GPS)** model. In GPS, when a packet arrives, it's assigned a "finish tag" based on its size and its flow's weight. The packet with the earliest finish tag is transmitted.
*   **Pros:** Provides fairness and can prioritize flows by assigning them higher weights. Reduces HOL blocking compared to FCFS.
*   **Cons:** More complex to implement than FCFS. Requires maintaining per-flow state and calculating finish tags.
*   **Example:** A router allocating 50% of bandwidth to video conferencing, 30% to web browsing, and 20% to file transfers.
*   **Textbook Reference:** Tanenbaum, Forouzan, and Kurose & Ross all cover WFQ as a key QoS mechanism. Keshav's "An Engineering Approach to Computer Networks" provides a deep dive into fair queueing.

#### 3.2.2. Stochastic Fair Queueing (SFQ)

*   **Description:** Aims to achieve fairness by probabilistically assigning packets to different queues, without explicitly tracking individual flows.
*   **Mechanism:** Packets are assigned to a queue based on a hash function of their source and destination IP addresses and ports. The scheduler then cycles through these queues in a round-robin fashion.
*   **Pros:** Simpler to implement than WFQ as it doesn't require explicit flow tracking. Reduces the overhead of maintaining per-flow state.
*   **Cons:** Fairness is probabilistic, not guaranteed. Poor hash function can lead to unfairness.
*   **Example:** A router using SFQ to distribute bandwidth across many short-lived TCP connections.

#### 3.2.3. Class-Based Weighted Fair Queueing (CBWFQ)

*   **Description:** A hybrid approach that combines the benefits of priority scheduling and WFQ. Traffic is first classified into different classes, and then WFQ is applied within each class.
*   **Mechanism:** Define traffic classes based on criteria like IP precedence, ToS bits, or ACLs. Assign weights to each class. Within each class, packets are scheduled using WFQ or a similar fair mechanism.
*   **Pros:** Offers both prioritization between classes and fairness within classes. More flexible than simple priority scheduling.
*   **Cons:** Requires defining class-matching rules and weights.
*   **Example:** A network administrator defines a "premium" class for VoIP and video conferencing, giving it a higher weight, and a "best-effort" class for general web traffic.

### 3.3. Advanced Scheduling Algorithms

These algorithms are designed to provide more sophisticated QoS guarantees.

#### 3.3.1. Deficit Round Robin (DRR)

*   **Description:** An improvement over basic Round Robin that allows queues to accumulate a "deficit" of bandwidth if they cannot transmit their full share in a given round.
*   **Mechanism:** Each queue is given a quantum (its share of bandwidth for a round). If a queue transmits a packet smaller than its quantum, the remaining quantum is carried over to the next round. If a packet is larger than the quantum, the queue still transmits it but incurs a deficit. In the next round, the quantum is increased by the deficit from the previous round.
*   **Pros:** Handles variable packet sizes efficiently, prevents starvation, and is relatively simple to implement.
*   **Cons:** Fairness is not as precise as WFQ.

#### 3.3.2. Virtual Clock

*   **Description:** Assigns a "virtual timestamp" to each packet, simulating a virtual clock. The scheduler transmits packets based on their virtual timestamps.
*   **Mechanism:** Each flow has a virtual clock that advances based on the packets it transmits. When a packet arrives, its virtual arrival time is calculated. The packet is then scheduled for transmission based on its virtual departure time (virtual arrival time + packet size / rate).
*   **Pros:** Provides strong fairness guarantees and can bound delays.
*   **Cons:** Complex to implement, requires per-flow state and virtual clock management.

#### 3.3.3. Weighted Round Robin (WRR)

*   **Description:** Similar to WFQ but simpler. Instead of simulating GPS, it gives each queue a specific number of transmission slots in a round based on its weight.
*   **Mechanism:** In each round, queues get a number of transmission opportunities proportional to their weights. For example, if queue A has weight 2 and queue B has weight 1, queue A gets two transmission slots for every one slot queue B gets.
*   **Pros:** Simpler than WFQ, provides weighted fairness.
*   **Cons:** Does not account for packet sizes as effectively as WFQ, can lead to some unfairness if packet sizes vary significantly.

---

## 4. Packet Scheduling and Quality of Service (QoS)

Packet scheduling is a critical component of QoS mechanisms.

*   **How it helps QoS:**
    *   **Prioritization:** Allows real-time applications (VoIP, video conferencing) to be scheduled ahead of non-real-time applications (file transfers), reducing their latency and jitter.
    *   **Bandwidth Allocation:** Guarantees a minimum bandwidth for critical applications using weighted fair queueing or similar methods.
    *   **Delay Bounds:** Some advanced scheduling algorithms can provide probabilistic or deterministic bounds on packet delay.
    *   **Jitter Reduction:** By ensuring consistent service rates for real-time flows, jitter can be minimized.

*   **Mechanisms to Support QoS:**
    *   **IntServ (Integrated Services):** A signaling protocol (RSVP) is used to establish per-flow QoS guarantees. Routers need to maintain per-flow state, which can be a scalability issue. Packet schedulers play a key role in enforcing these guarantees.
    *   **DiffServ (Differentiated Services):** Classifies traffic into a few broad classes (e.g., Expedited Forwarding, Assured Forwarding). Routers use packet scheduling (like CBWFQ) to implement the per-class service levels without needing per-flow state.

**Course Outcome Alignment:**

*   **CO3:** This topic directly addresses "ways to achieve good quality of service" by explaining how packet scheduling algorithms are used to prioritize traffic, manage bandwidth, and reduce delay.

**Textbook Reference:** Kurose & Ross extensively covers QoS and the role of packet scheduling in IntServ and DiffServ.

---

## 5. Implementation Considerations

*   **Complexity:** More sophisticated algorithms (WFQ, Virtual Clock) require more processing power and memory on routers, which can be a significant cost factor.
*   **State Management:** Algorithms that track individual flows (WFQ, IntServ) require substantial per-flow state storage in routers. This can limit scalability in large networks.
*   **Overhead:** The computational overhead of calculating tags, managing queues, and selecting packets can impact the router's forwarding rate.
*   **Configuration:** Implementing QoS policies often involves complex configuration of traffic classes, weights, and matching rules.

**Important Point to Remember:** The choice of packet scheduling algorithm is a trade-off between performance goals and implementation complexity/cost.

---

## 6. Practice Questions and Answers

**Question 1:** What is the main disadvantage of the First-Come, First-Served (FCFS) packet scheduling algorithm?
    a) High implementation complexity
    b) Starvation of some flows
    c) Head-of-Line (HOL) blocking
    d) Requires per-flow state

**Answer 1:** c) Head-of-Line (HOL) blocking. FCFS can cause a large or malformed packet to block smaller, valid packets behind it, even if the network link is available.

**Question 2:** Which packet scheduling algorithm aims to provide fairness by assigning different bandwidth shares to different flows based on assigned weights?
    a) FCFS
    b) Priority Scheduling
    c) Weighted Fair Queueing (WFQ)
    d) Round Robin

**Answer 2:** c) Weighted Fair Queueing (WFQ). WFQ allows for proportional bandwidth allocation based on weights.

**Question 3:** Explain the concept of "starvation" in the context of priority scheduling.
    a) When a router runs out of memory to store packets.
    b) When a high-priority flow monopolizes the network, preventing low-priority flows from ever being transmitted.
    c) When a packet is lost due to buffer overflow.
    d) When a link experiences excessive congestion.

**Answer 3:** b) When a high-priority flow monopolizes the network, preventing low-priority flows from ever being transmitted.

**Question 4:** How does DiffServ (Differentiated Services) leverage packet scheduling to provide QoS?
    a) By establishing per-flow QoS guarantees using RSVP.
    b) By classifying traffic into broad classes and using scheduling policies (e.g., CBWFQ) to enforce per-class service levels.
    c) By sending control packets to inform senders about network conditions.
    d) By implementing congestion avoidance mechanisms like RED.

**Answer 4:** b) By classifying traffic into broad classes and using scheduling policies (e.g., CBWFQ) to enforce per-class service levels. DiffServ categorizes traffic and uses schedulers to meet the QoS requirements of these categories.

**Question 5 (Exercise):**
Consider a router with a single output link with a capacity of 10 Mbps. It uses Weighted Fair Queueing (WFQ) to schedule traffic from two flows:
*   Flow A: Weight = 2 (e.g., VoIP)
*   Flow B: Weight = 1 (e.g., Web Browsing)

Assume packets arrive at the router. If the scheduler needs to decide which packet to send next, and packets from both flows are available, how would WFQ ideally allocate the bandwidth over a longer period? If Flow A sends packets averaging 1000 bits and Flow B sends packets averaging 5000 bits, how would WFQ attempt to manage this?

**Answer 5 (Exercise):**
Over a longer period, WFQ would aim to allocate the 10 Mbps link such that Flow A receives approximately 2/3 of the bandwidth (roughly 6.67 Mbps) and Flow B receives approximately 1/3 of the bandwidth (roughly 3.33 Mbps).

When considering packet sizes:
*   **Flow A (smaller packets, higher weight):** Since Flow A has a higher weight, it will generally be favored. Even though its packets are smaller, WFQ's mechanism (simulating GPS with finish tags) will ensure that it gets its proportional share of the bandwidth. If Flow A's packets are small, it can send many of them within its allocated time slice, contributing to its 2/3 share.
*   **Flow B (larger packets, lower weight):** Flow B receives less bandwidth. If it sends larger packets, it will consume its allocated bandwidth more quickly with each packet. WFQ will ensure that Flow B's packets are scheduled to maintain its proportional share, but it may experience longer waiting times between its larger packets if high-priority traffic from Flow A is consistently present. The "fairness" is in the *rate* of transmission over time, not necessarily in the number of packets or strict inter-packet arrival times for dissimilar flows.

---

## 7. Important Points to Remember

*   Packet scheduling is essential for managing network resources and providing Quality of Service (QoS).
*   FCFS is simple but suffers from Head-of-Line (HOL) blocking.
*   Priority scheduling offers preferential treatment but risks starvation of low-priority traffic.
*   Fair queueing algorithms (WFQ, SFQ) aim to distribute bandwidth equitably among flows.
*   WFQ is a powerful algorithm that simulates Generalized Processor Sharing (GPS) and provides weighted fairness.
*   CBWFQ combines priority and fair queueing by classifying traffic into classes.
*   Advanced algorithms like Virtual Clock and DRR offer stronger fairness or improved efficiency.
*   The choice of scheduling algorithm involves trade-offs between performance (delay, throughput, fairness) and implementation complexity/cost.
*   Packet scheduling is a key enabler for QoS frameworks like DiffServ.

---

This comprehensive study note covers packet scheduling as discussed in Module 3 of Computer Network Systems, aligning with the provided learning outcomes and course objectives. The references to textbooks are implicitly woven into the explanations of concepts and algorithms.
