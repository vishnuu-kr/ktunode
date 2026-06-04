---
title: "Selective Repeat."
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff048"
status: "completed"
scrapedAt: "2026-05-23T18:00:02.322Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction - Selective Repeat

## 1. Introduction to Reliable Data Transfer (RDT)

Reliable Data Transfer (RDT) is a fundamental service provided by network protocols to ensure that data is transmitted from a sender to a receiver without errors and in the correct order. This module focuses on how RDT is achieved, particularly within the context of the TCP/IP protocol suite.

**Key Concept:** RDT aims to overcome the imperfections of the underlying unreliable network, such as packet loss, corruption, and reordering.

## 2. Selective Repeat Protocol

Selective Repeat is an **efficient** RDT protocol that significantly improves performance over simpler stop-and-wait protocols, especially in networks with high bandwidth and delay. It allows the sender to transmit multiple packets before waiting for an acknowledgment.

### 2.1 How Selective Repeat Works

Selective Repeat operates on the principle of sending multiple packets, but only retransmitting those for which acknowledgments (ACKs) are not received within a specified timeout period.

**Sender Side:**

*   **Window of Sender:** The sender maintains a *sender window*, which defines the set of sequence numbers that the sender is allowed to transmit. The size of this window is denoted by $W_s$.
*   **Sequence Numbers:** Packets are assigned sequence numbers.
*   **Transmitting Packets:** The sender can transmit packets with sequence numbers within its window.
*   **Receiving ACKs:** When the sender receives an ACK for a packet, it marks that packet as received.
*   **Advancing the Sender Window:** The sender window slides forward as packets are acknowledged. The sender can transmit the next packet only when its sequence number falls within the current window.
*   **Timeout and Retransmission:** If the sender does not receive an ACK for a packet before its timeout expires, it retransmits that specific packet.
*   **Buffering:** The sender buffers packets that have been transmitted but not yet acknowledged.

**Receiver Side:**

*   **Window of Receiver:** The receiver also maintains a *receiver window*, which defines the set of sequence numbers that the receiver is prepared to accept. The size of this window is denoted by $W_r$.
*   **Accepting Packets:** The receiver accepts packets whose sequence numbers fall within its window.
*   **Out-of-Order Packets:** A key feature of Selective Repeat is its ability to handle out-of-order packets. If a packet arrives that is within the receiver's window but is *not* the expected next packet, the receiver buffers it.
*   **Sending ACKs:**
    *   If a packet arrives and its sequence number is the *expected* next packet, the receiver accepts it, delivers it to the application layer, and then checks its buffer for any previously buffered packets that can now be delivered.
    *   If a packet arrives out of order but within the receiver's window, the receiver buffers it and sends an ACK for *that specific packet*. This ACK informs the sender that this particular packet has been received correctly.
*   **Advancing the Receiver Window:** The receiver window slides forward only when the expected packet (the one with the lowest sequence number within the window) is received and delivered.

**Key Idea:** Selective Repeat acknowledges packets individually. This allows the sender to retransmit only the lost packets, rather than retransmitting all packets from the point of loss, as in some simpler protocols like Go-Back-N.

### 2.2 Why "Selective" Repeat?

The name "Selective Repeat" comes from the protocol's ability to selectively retransmit only the packets that are determined to be lost (i.e., for which no ACK is received before the timeout).

### 2.3 Window Size Considerations

*   **Sender Window ($W_s$) and Receiver Window ($W_r$):** To avoid ambiguity and ensure correct operation, the window size must be carefully chosen.
*   **Crucial Condition:** For Selective Repeat to work correctly, the product of the window size and the round-trip time (RTT) must be considered. A common recommendation from textbooks like **Kurose & Ross** is that the window size should be no more than half the sequence number space.
    *   Let $N$ be the size of the sequence number space.
    *   Then, $W_s \le N/2$ and $W_r \le N/2$.

**Why $N/2$?**
Consider a scenario where the sender sends packets with sequence numbers $0, 1, 2, \ldots, W_s-1$. If the receiver acknowledges packet $k$ and the sender receives this ACK, the sender slides its window. However, if the ACK for packet $k$ is lost, and then the sender retransmits packets $0, 1, \ldots, W_s-1$ again, the receiver must be able to distinguish between the first transmission of packet $k$ and the retransmission of packet $k$ using the same sequence number. If the window size is too large (e.g., equal to $N$), the receiver might incorrectly assume a retransmitted packet is a new packet. By keeping the window size to $N/2$, we ensure that sequence numbers do not wrap around and cause confusion within the active windows.

**Example:** If the sequence numbers are $0, 1, 2, 3$, and the window size is 2.
Sender sends 0, 1.
Receiver receives 0 (expected), buffers 1. Sends ACK for 0. Window slides to 1.
Receiver receives 1 (now expected). Delivers 0 and 1. Window slides to 2.
If the sender sends 0, 1 and the receiver receives 1 first, it buffers 1 and sends ACK for 1. Then it receives 0 (expected), delivers 0, then delivers buffered 1. This works.

Now consider a window size of $N$. Sequence numbers $0, 1, 2, 3$. Window size 4.
Sender sends 0, 1, 2, 3.
Suppose all ACKs are lost.
Sender times out for all. Retransmits 0, 1, 2, 3.
If the receiver window is also 4, it can't distinguish the first transmission from the retransmission.

If sequence numbers are $0, 1, 2, 3$ and window size is 2:
Sender sends 0, 1.
Receiver receives 0 (expected), buffers 1. Sends ACK for 0.
Sender receives ACK for 0. Window slides to 1. Sender transmits 2.
Receiver receives 2 (not expected, but within a hypothetical larger window if allowed).
This example highlights the need for careful window sizing relative to the sequence number space.

### 2.4 Advantages of Selective Repeat

*   **High Throughput:** Allows for pipelining of packets, leading to better utilization of the network bandwidth, especially in networks with high Bandwidth-Delay Product (BDP).
*   **Efficient Retransmission:** Only lost packets are retransmitted, minimizing unnecessary traffic.
*   **Handles Out-of-Order Packets:** The receiver buffers out-of-order packets, allowing for smooth data delivery to the application.

### 2.5 Disadvantages of Selective Repeat

*   **Increased Complexity:** Both the sender and receiver need to manage windows, buffer out-of-order packets, and track individual packet acknowledgments. This makes the implementation more complex than stop-and-wait.
*   **Higher Buffer Requirements:** The receiver needs to buffer potentially many out-of-order packets, which can increase memory requirements.
*   **Timer Management:** Each unacknowledged packet requires its own timer, which can be computationally intensive.

## 3. Comparison with Other RDT Protocols

**Stop-and-Wait:**
*   **Mechanism:** Sender sends one packet, waits for an ACK, then sends the next.
*   **Efficiency:** Very inefficient for high BDP networks as the sender is often idle waiting for ACKs.
*   **Complexity:** Simple to implement.
*   **Throughput:** Low.

**Go-Back-N:**
*   **Mechanism:** Sender sends a window of packets. If a packet is lost, the sender retransmits that packet and all subsequent packets in the window.
*   **Efficiency:** Better than stop-and-wait, but can still be inefficient due to retransmitting correctly received packets.
*   **Complexity:** Moderate.
*   **Throughput:** Moderate, but can be degraded by lost packets.

**Selective Repeat:**
*   **Mechanism:** Sender sends a window of packets. Only lost packets are retransmitted. Out-of-order packets are buffered by the receiver.
*   **Efficiency:** Highly efficient for high BDP networks.
*   **Complexity:** High.
*   **Throughput:** High.

**Textbook Reference:** **Kurose & Ross**, Chapter 3, discusses these RDT protocols in detail, highlighting the trade-offs between efficiency and complexity. **Forouzan** also provides comprehensive coverage of these protocols.

## 4. Relevance to TCP/IP

Selective Repeat is a foundational concept that heavily influences the design of reliable transport layer protocols like **TCP (Transmission Control Protocol)** within the TCP/IP suite. While TCP isn't a pure implementation of Selective Repeat, it incorporates many of its core ideas:

*   **Sliding Window:** TCP uses a sliding window mechanism for flow control and congestion control.
*   **Sequence Numbers:** TCP uses sequence numbers to order packets and detect duplicates.
*   **Acknowledgments (ACKs):** TCP uses ACKs to confirm receipt of data.
*   **Retransmission:** TCP retransmits segments that are presumed lost (based on timeouts or duplicate ACKs).
*   **Buffering:** TCP buffers out-of-order segments at the receiver.

**Key Difference:** TCP's window management is more dynamic and intertwined with congestion control, whereas pure Selective Repeat typically has a fixed window size (or one adjusted based on network conditions in advanced versions).

**Course Outcome Alignment:**
*   **CO1:** Summarize principles of RDT and layered architecture.
*   **CO2:** Demonstrate how protocols (like Selective Repeat) ensure reliable data transfer at the transport layer.

## 5. Practice Questions and Answers

**Question 1:** What is the primary advantage of the Selective Repeat protocol over the Go-Back-N protocol?

**Answer 1:** The primary advantage of Selective Repeat is its efficiency in retransmission. It only retransmits the specific packets that are lost, whereas Go-Back-N retransmits the lost packet and all subsequent packets in the current transmission window, even if those subsequent packets were received correctly. This leads to higher throughput for Selective Repeat, especially in networks with high error rates or high latency.

**Question 2:** Why is it important for the sender and receiver window sizes in Selective Repeat to be no more than half the sequence number space ($N/2$)?

**Answer 2:** This constraint is crucial to avoid ambiguity. If the window size is too large, the receiver might not be able to distinguish between a new transmission of a packet and a retransmission of a packet that shares the same sequence number. By limiting the window size to $N/2$, we ensure that sequence numbers used in the current window do not overlap with sequence numbers that have already been acknowledged and their window has moved past. This guarantees that the receiver can correctly identify duplicate packets and distinguish between old and new transmissions.

**Question 3:** Consider a network where the Round Trip Time (RTT) is 100ms. The sender can send 10 packets per second. If a sender window size of 5 is used with Selective Repeat, what is the potential throughput, assuming no packet loss?

**Answer 3:**
*   Sender can send 10 packets per second.
*   Packet size: This information is missing, but throughput is usually measured in bits per second. Let's assume each packet is 1000 bits.
*   Sender sends 5 packets and waits for ACKs for all of them.
*   Time to send 5 packets = 5 packets / (10 packets/second) = 0.5 seconds.
*   By the time the sender sends the 5th packet, the ACK for the first packet should be arriving if RTT is 100ms.
*   Throughput = (Number of packets sent per RTT) / RTT.
*   If the sender window is $W_s$, it can send $W_s$ packets within an RTT (assuming $W_s$ is small enough relative to RTT).
*   Throughput = $W_s$ packets / RTT.
*   In this case, the sender can send 5 packets. Let's assume the time to send 5 packets is less than RTT. If the sender can send 10 packets per second, it takes 0.1 seconds to send 1 packet. So, sending 5 packets takes 0.5 seconds.
*   If RTT is 100ms (0.1 seconds), the sender can send all 5 packets within the time it takes for the first ACK to return.
*   Throughput = (5 packets * 1000 bits/packet) / 0.1 seconds = 5000 bits / 0.1 seconds = 50,000 bits/second = 50 kbps.

*   **Correction based on typical throughput calculation:**
    Throughput in terms of packets per unit time: The sender sends 10 packets per second. If the window is 5, and effectively all can be "in flight" due to pipelining, the sender can continue to send at its maximum rate as long as ACKs are arriving in a timely manner to keep the window open.
    If the sender can transmit at 10 packets/sec and the receiver acknowledges packets promptly, the sender will transmit 5 packets, then wait for ACKs. If the ACKs arrive quickly enough, the sender can immediately send the next set of packets.
    The key is the Bandwidth-Delay Product (BDP). Let's assume packet size is $L$ bits.
    Sender transmission rate = $10$ packets/sec $= 10L$ bits/sec.
    RTT = $0.1$ sec.
    The number of packets that can be "in flight" to fill the pipe is $\lceil \frac{BDP}{L} \rceil$, where BDP = Bandwidth * Delay.
    BDP = (10L bits/sec) * 0.1 sec = L bits.
    This calculation suggests the pipeline can hold only 1 packet of size L. This is a bit counter-intuitive with the "10 packets/sec" figure.

    Let's rephrase the "10 packets/sec" as the sender's *capacity* to send packets.
    If the sender window is 5:
    Sender sends packets 0, 1, 2, 3, 4. This takes 5 packets / (10 packets/sec) = 0.5 seconds.
    The RTT is 0.1 seconds.
    After 0.1 seconds, the ACK for packet 0 arrives. The sender can now send packet 5.
    After 0.2 seconds, the ACK for packet 1 arrives. The sender can now send packet 6.
    ...
    After 0.5 seconds, the sender has just sent packet 4. The ACK for packet 0 (sent at t=0) should have arrived at t=0.1. The ACK for packet 1 (sent at t=0.1) should arrive at t=0.2. The ACK for packet 4 (sent at t=0.4) should arrive at t=0.5.
    As long as the sender is not limited by its transmission rate, and ACKs are received promptly, the sender can maintain a pipeline of 5 packets.
    The effective throughput is determined by the sender's sending rate and the window size.
    Throughput = Window Size * Packet Size / RTT.
    Assuming each packet is 1000 bits, sender can send at 10,000 bits/sec.
    Throughput = 5 packets * 1000 bits/packet / 0.1 sec = 5000 bits / 0.1 sec = 50,000 bits/sec = 50 kbps.
    *If the "10 packets/sec" implies the sender's link capacity is 10 packets/sec, then the sender will transmit at this rate.*
    If the sender sends at 10 packets/sec, and window is 5:
    The sender continuously sends packets. After 0.1 sec, it has sent 1 packet (packet 0). It also has the capacity to send more.
    The most efficient way is to fill the pipe.
    Pipeline capacity = Bandwidth * RTT. Let's assume packet size L.
    If bandwidth is X bits/sec, pipeline capacity is X * RTT bits.
    Number of packets in flight = (Bandwidth * RTT) / L.
    If sender can send 10 packets/sec, its bandwidth is effectively 10L bits/sec.
    Number of packets in flight = (10L bits/sec * 0.1 sec) / L = 1 packet.
    This implies that even with a window of 5, the sender can only send 1 packet at a time if its link capacity is limited to 10 packets/sec and L is the packet size.

    Let's assume the "10 packets/sec" is a characteristic of the sender's *processing capability* rather than link capacity, and the link is faster. The key is that the window size of 5 allows 5 packets to be in transit. If the sender can transmit at a rate higher than 1 packet per RTT (0.1s), then the window size limits the throughput.
    Throughput = Window Size / Time to transmit Window = 5 packets / (5 packets / 10 packets/sec) = 5 packets / 0.5 sec = 10 packets/sec.
    This implies the sender is operating at its maximum rate, and the window size isn't the bottleneck.
    If the question implies the sender's *rate* is 10 packets/sec, and window is 5, it means it can send 5 packets, wait for their ACKs, and then send another 5. This is not pipelined.
    Let's assume the standard interpretation of RDT protocols: The sender transmits packets as soon as they are available and the window allows.
    Throughput = (Number of packets that can be in flight) / RTT.
    The number of packets that can be in flight is effectively limited by the window size *or* the bandwidth-delay product, whichever is smaller.
    Let's assume the sender's transmission rate allows it to send packets with negligible inter-packet delay.
    The number of packets that can be in flight to fill the pipe is roughly BDP/L.
    If sender sends at 10 packets/sec, and RTT is 0.1 sec, it means it takes 0.1 sec to send 1 packet. So, it can send 1 packet per RTT.
    The window size is 5. This means it can send 5 packets.
    Sender sends 0, 1, 2, 3, 4. This takes 0.5 seconds.
    After 0.1 seconds, ACK for 0 arrives.
    After 0.2 seconds, ACK for 1 arrives.
    After 0.3 seconds, ACK for 2 arrives.
    After 0.4 seconds, ACK for 3 arrives.
    After 0.5 seconds, ACK for 4 arrives.
    By the time the last ACK arrives (0.5s), the sender has been idle for 0.1s waiting for the last ACK.
    The total time to send 5 packets and get their ACKs is 0.5 seconds.
    Throughput = 5 packets / 0.5 seconds = 10 packets/sec.
    If each packet is 1000 bits, throughput = 10 * 1000 bits/sec = 10,000 bits/sec = 10 kbps.

    **Revisiting the question's premise:** The question is likely trying to test the understanding of window utilization.
    Sender can send 10 packets/sec. RTT = 0.1 sec. Window = 5.
    This means the sender can have up to 5 packets "in flight".
    The time it takes to send 5 packets is 5 packets / (10 packets/sec) = 0.5 sec.
    The ACKs for these 5 packets will arrive at 0.1, 0.2, 0.3, 0.4, 0.5 sec.
    Since the time to send the window (0.5s) is greater than the RTT (0.1s), the sender will effectively be limited by the RTT for getting acknowledgments.
    The number of packets that can be in flight and acknowledged within a period is limited by $\min(W_s, \frac{Bandwidth \times RTT}{L})$.
    If the sender's bandwidth is 10 packets/sec, it means it takes 0.1s to send one packet.
    So, it takes 0.1s to send packet 0, 0.2s for packet 1, ..., 0.5s for packet 4.
    The ACKs arrive at 0.1s, 0.2s, ..., 0.5s.
    The sender can send packet 0 at t=0. It receives ACK for 0 at t=0.1s. It can send packet 5 at t=0.1s.
    It receives ACK for 1 at t=0.2s. It can send packet 6 at t=0.2s.
    ...
    It receives ACK for 4 at t=0.5s. It can send packet 9 at t=0.5s.
    Effectively, the sender is sending at a rate of 1 packet per RTT because its transmission time per packet (0.1s) equals the RTT.
    Throughput = 1 packet / RTT = 1 packet / 0.1 sec = 10 packets/sec.
    If packet size is 1000 bits, throughput is 10,000 bits/sec = 10 kbps.

    **Final Answer Interpretation:** The most straightforward interpretation of "sender can send 10 packets per second" is the sender's transmission rate. If the RTT is 0.1 sec and the sender's transmission rate is 1 packet per 0.1 sec (10 packets/sec), then the sender is always busy sending the next packet. The window size of 5 ensures that it can maintain a pipeline of 5 packets, but the actual rate is limited by how quickly it can send and receive ACKs. Since its sending rate matches the RTT, it effectively sends 1 packet per RTT.

**Question 4:** Imagine a receiver using Selective Repeat. It has received packets 0, 1, and 3. Packet 2 was lost. What sequence number will the receiver expect next, and what sequence numbers might it buffer?

**Answer 4:**
*   The receiver expects packet 2 next. Since packet 2 was lost, the receiver will buffer packet 3.
*   The receiver will send an ACK for packet 0, an ACK for packet 1, and an ACK for packet 3.
*   When packet 2 finally arrives, the receiver will deliver packets 0, 1, 2, and 3 in order to the application layer. It will then check its buffer and advance its window to expect packet 4.

## 6. Important Points to Remember

*   **Selective Repeat:** Transmits multiple packets, retransmits only lost ones.
*   **Sender Window ($W_s$) and Receiver Window ($W_r$):** Crucial for managing the flow of packets.
*   **Window Size Constraint:** $W_s \le N/2$ and $W_r \le N/2$ (where $N$ is sequence number space size) to prevent ambiguity.
*   **Buffering:** Receiver buffers out-of-order packets within its window.
*   **Efficiency:** High throughput, especially for high Bandwidth-Delay Product (BDP) networks.
*   **Complexity:** Higher than Stop-and-Wait and Go-Back-N due to individual packet management.
*   **TCP Connection:** TCP's reliable data transfer mechanism is heavily influenced by the principles of Selective Repeat.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. Textbook and Reference Integrations

*   **Kurose & Ross (Sixth Edition, 2017):** Provides a detailed explanation of Selective Repeat in Chapter 3. It emphasizes the importance of the window size constraint and the trade-offs involved.
*   **Forouzan (Fourth Edition, 2008):** Offers a clear and concise explanation of Selective Repeat, often using illustrative examples to demonstrate its operation at both the sender and receiver.

These notes synthesize information from the specified textbooks, providing a comprehensive understanding of the Selective Repeat protocol within the context of reliable data transfer in computer networks. The content aligns with the course outcomes by covering fundamental RDT principles (CO1) and demonstrating how a specific protocol functions (CO2).