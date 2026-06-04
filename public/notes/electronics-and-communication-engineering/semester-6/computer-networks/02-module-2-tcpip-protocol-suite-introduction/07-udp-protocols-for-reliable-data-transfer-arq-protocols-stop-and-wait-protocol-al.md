---
title: "UDP- Protocols for reliable data transfer: ARQ protocols, stop-and-wait protocol, alternating-bit protocol, Go-back- N"
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff047"
status: "completed"
scrapedAt: "2026-05-23T18:00:01.449Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction

## Topic: UDP - Protocols for Reliable Data Transfer: ARQ Protocols, Stop-and-Wait, Alternating-Bit, Go-Back-N

---

### 1. Introduction to UDP and the Need for Reliable Data Transfer

**Key Concept:** The User Datagram Protocol (UDP) is a connectionless, unreliable transport layer protocol. While it offers low overhead and fast data transfer, it does not guarantee the delivery of datagrams, their order of arrival, or the absence of duplication.

*   **UDP Characteristics:**
    *   **Connectionless:** No handshake is performed before sending data.
    *   **Unreliable:** No built-in mechanisms for error detection (beyond checksum), error correction, flow control, or congestion control.
    *   **Low Overhead:** Minimal header information, making it efficient for applications where speed is critical.
    *   **Datagram-Oriented:** Data is sent in discrete packets called datagrams.

*   **Why UDP is Used:**
    *   Applications that can tolerate some data loss or out-of-order delivery (e.g., streaming media, online gaming, DNS).
    *   Applications that implement their own reliability mechanisms at the application layer.

*   **The Problem:** Many applications require reliable data transfer. This means ensuring that data arrives at the destination correctly, in the correct order, and without loss. This is where **Automatic Repeat reQuest (ARQ)** protocols come into play.

**Kurose & Ross (Chapter 3):** Emphasizes that TCP provides reliable data transfer, while UDP does not. ARQ protocols are foundational to understanding how reliability is achieved.

**Forouzan (Chapter 13):** Introduces error control and discusses the need for mechanisms to detect and correct errors, which is the basis of ARQ.

---

### 2. Automatic Repeat reQuest (ARQ) Protocols

**Key Concept:** ARQ protocols are techniques used in data link and transport layers to achieve reliable data transfer over an unreliable channel. They rely on the sender retransmitting data if an acknowledgment (ACK) is not received within a certain time, and the receiver sending ACKs for correctly received data.

*   **Core Components of ARQ:**
    *   **Error Detection:** The receiver uses techniques (like checksums or Cyclic Redundancy Checks - CRCs) to detect if a received frame/packet has been corrupted.
    *   **Acknowledgments (ACKs):** The receiver sends a positive acknowledgment to the sender for correctly received frames/packets.
    *   **Negative Acknowledgments (NACKs) - Optional:** Some protocols use NACKs to explicitly inform the sender about a corrupted frame.
    *   **Timeouts:** The sender starts a timer when sending a frame/packet. If an ACK is not received before the timer expires, the sender assumes the frame was lost or corrupted and retransmits it.
    *   **Sequence Numbers:** Each frame/packet is assigned a sequence number to help the receiver detect lost or duplicated frames and to reorder frames if they arrive out of order.

**Forouzan (Chapter 13):** Details error detection methods (parity check, checksum, CRC) and introduces the basic ARQ concept with Stop-and-Wait as a primary example.

---

### 3. Stop-and-Wait Protocol

**Key Concept:** The simplest form of ARQ. The sender sends one frame and waits for an acknowledgment before sending the next frame.

*   **How it Works:**
    1.  **Sender:**
        *   Assigns a sequence number to the frame (e.g., 0 or 1).
        *   Sends the frame.
        *   Starts a timer.
    2.  **Receiver:**
        *   If the frame is received correctly and has the expected sequence number:
            *   Sends an ACK with the sequence number of the *next* expected frame.
            *   Delivers the data to the upper layer.
        *   If the frame is corrupted or has an unexpected sequence number:
            *   Discards the frame.
            *   (Optionally, sends a NACK or simply retransmits the last ACK).
    3.  **Sender (on receiving ACK):**
        *   If the ACK is for the sent frame (i.e., it's the expected ACK number):
            *   Sends the next frame (increments sequence number).
            *   Resets the timer.
    4.  **Sender (on timeout):**
        *   If the timer expires before receiving the ACK:
            *   Resends the same frame.
            *   Restarts the timer.

*   **Pros:**
    *   Simple to implement.
    *   Guarantees in-order delivery.
    *   Guarantees no duplicate delivery (due to sequence numbers and receiver logic).

*   **Cons:**
    *   **Terrible Efficiency (Low Throughput):** The sender spends most of its time waiting for ACKs. If the transmission time of a frame is significantly longer than the propagation delay, the line utilization is very low. The efficiency is limited by the Round Trip Time (RTT).

*   **Example:** Imagine a slow modem sending a small packet over a long distance. The sender sends a packet and waits for the ACK. While waiting, the transmission channel is idle.

**Efficiency Formula:**
Efficiency = $\frac{1}{1 + 2a}$, where $a = \frac{\text{propagation delay}}{\text{transmission time}}$

*   If $a \le 1$ (propagation delay is less than or equal to transmission time), efficiency is $\le 50\%$.
*   If $a \gg 1$ (propagation delay is much larger than transmission time), efficiency approaches 0.

**Kurose & Ross (Chapter 3):** Discusses the efficiency problem of Stop-and-Wait and how sliding window protocols address it.

**Forouzan (Chapter 13):** Provides a detailed explanation and example of the Stop-and-Wait protocol, including the potential issues with duplicate ACKs and frames.

---

### 4. Alternating-Bit Protocol (ABP)

**Key Concept:** An enhancement of Stop-and-Wait that uses sequence numbers 0 and 1 to distinguish between original frames and retransmitted frames, especially when ACKs might also be lost. It's a fundamental step towards more robust ARQ.

*   **How it Works:**
    1.  **Sender:**
        *   Uses alternating sequence numbers (0, 1, 0, 1, ...).
        *   Sends a frame with the current sequence number.
        *   Starts a timer.
    2.  **Receiver:**
        *   If frame $n$ is received correctly:
            *   Sends an ACK with sequence number $n+1$ (modulo 2).
            *   Delivers the data.
        *   If frame $n$ is corrupted or has the *same* sequence number as the previously correctly received frame (meaning it's a duplicate retransmission):
            *   Discards the frame.
            *   Re-sends the ACK for the previously correctly received frame. This is crucial to handle lost ACKs.
    3.  **Sender (on receiving ACK):**
        *   If ACK $n+1$ is received:
            *   Sends the next frame (sequence number $n+1$).
            *   Resets the timer.
    4.  **Sender (on timeout):**
        *   Resends the frame with the *same* sequence number.
        *   Restarts the timer.

*   **Key Improvement over basic Stop-and-Wait:** The receiver's ability to re-send the ACK for a previously acknowledged frame helps the sender recover from lost ACKs. This makes it more robust.

*   **Limitations:** Still suffers from the efficiency problem of Stop-and-Wait. The sender can only have one unacknowledged frame in transit at any given time.

**Forouzan (Chapter 13):** Explains ABP as an improvement over basic Stop-and-Wait, highlighting the role of duplicate ACKs.

---

### 5. Sliding Window Protocols

**Key Concept:** To improve efficiency, sliding window protocols allow the sender to transmit multiple frames without waiting for an acknowledgment for each one. The sender maintains a "window" of sequence numbers for which frames have been sent but not yet acknowledged.

*   **General Principles:**
    *   **Window Size (W):** The maximum number of unacknowledged frames allowed in transit.
    *   **Sender's State:**
        *   `Send_base`: The sequence number of the oldest unacknowledged frame.
        *   `Next_seq_num`: The sequence number of the next frame to be sent.
        *   The window spans from `Send_base` to `Send_base + W - 1`.
    *   **Receiver's State:**
        *   `Expected_seq_num`: The sequence number of the next frame the receiver expects.
    *   **Acknowledgments:** Typically, ACKs acknowledge frames up to a certain sequence number (cumulative ACKs), or acknowledge individual frames.

*   **Advantages:**
    *   Significantly higher throughput compared to Stop-and-Wait, especially on networks with high propagation delays and/or short transmission times.
    *   Allows the sender to keep the channel busy.

**Kurose & Ross (Chapter 3):** Dedicates significant attention to sliding window protocols, explaining their mechanics and benefits over simpler methods.

**Forouzan (Chapter 13):** Also covers sliding window protocols, often discussing Go-Back-N and Selective Repeat as prominent examples.

---

### 6. Go-Back-N Protocol

**Key Concept:** A sliding window protocol where the sender can send up to `N` frames without waiting for acknowledgments. If a frame is lost or corrupted, the sender retransmits that frame and all subsequent frames that have already been sent.

*   **Sender's Actions:**
    *   Maintains a window of size `N`.
    *   Sends frames sequentially with increasing sequence numbers.
    *   For each sent frame, it starts a timer.
    *   Upon receiving an ACK (typically cumulative, e.g., "ACK $k$" means frames $0$ through $k-1$ have been received correctly):
        *   The sender advances its `Send_base` to $k$.
        *   All timers for frames $0$ through $k-1$ are discarded.
    *   If a timeout occurs for a frame with sequence number $j$:
        *   The sender retransmits frame $j$ and all subsequent frames up to the last one sent (effectively going back to sequence number $j$).
        *   All timers are restarted for these retransmitted frames.

*   **Receiver's Actions:**
    *   Maintains `Expected_seq_num`.
    *   If frame $k$ is received correctly and $k == Expected\_seq\_num$:
        *   Accepts frame $k$.
        *   Delivers data to the upper layer.
        *   Increments `Expected_seq_num`.
        *   Sends an ACK $k+1$ (cumulative ACK).
    *   If frame $k$ is received correctly but $k != Expected\_seq\_num$ (meaning it's a duplicate of a frame already accepted and acknowledged, or a frame arriving out-of-order *after* a lost frame):
        *   Discards frame $k$.
        *   Re-sends the last ACK (ACK $Expected\_seq\_num$). This is crucial for the sender to know what the receiver has successfully received.
    *   If frame $k$ is corrupted:
        *   Discards frame $k$.
        *   Re-sends the last ACK (ACK $Expected\_seq\_num$).

*   **Pros:**
    *   Much higher efficiency than Stop-and-Wait.
    *   Sender can keep sending frames as long as they are within its window.

*   **Cons:**
    *   **Wasted Bandwidth:** When a frame is lost, all subsequent correctly received frames by the receiver must be discarded and retransmitted by the sender. This can be inefficient if there are many frames in the window between the lost frame and the next retransmission.

*   **Example:**
    *   Sender window size N=4. Sequence numbers 0, 1, 2, 3, 4, 5, ...
    *   Sender sends frames 0, 1, 2, 3.
    *   Receiver receives 0, 1, 2, 3 correctly. Sends ACK 4.
    *   Sender receives ACK 4, advances window base to 4. Sends frames 4, 5, 6, 7.
    *   Suppose frame 4 is lost. Receiver receives 5, 6, 7 correctly.
    *   Receiver receives 5: Discards it (expects 4), re-sends ACK 4.
    *   Receiver receives 6: Discards it, re-sends ACK 4.
    *   Receiver receives 7: Discards it, re-sends ACK 4.
    *   Sender's timer for frame 4 expires. Sender retransmits frame 4.
    *   Sender then retransmits frames 5, 6, 7 (as part of the Go-Back-N retransmission).

**Kurose & Ross (Chapter 3):** Describes Go-Back-N as an example of a sliding window protocol and contrasts its efficiency and behavior with other protocols like Selective Repeat.

**Forouzan (Chapter 13):** Explains Go-Back-N with diagrams, showing the sender's and receiver's windows and their movement.

---

### 7. Selective Repeat Protocol (Brief Mention, as it's a common ARQ protocol contrasted with Go-Back-N)

**Key Concept:** A more efficient sliding window protocol. The sender retransmits only the specific frames that are lost or corrupted. The receiver buffers out-of-order frames.

*   **Key Difference from Go-Back-N:** The receiver acknowledges individual frames. If a frame is lost, the receiver buffers subsequent frames and sends individual ACKs for them. The sender only retransmits the lost frame.

*   **Pros:** Highly efficient, minimizes retransmissions.
*   **Cons:** More complex implementation for both sender and receiver (requires buffering and more sophisticated state management).

**Kurose & Ross (Chapter 3):** Discusses Selective Repeat as the most efficient ARQ protocol.
**Forouzan (Chapter 13):** Also covers Selective Repeat.

---

### 8. Connection to Course Outcomes

*   **CO1 (Principles and Components, Delay Analysis, Layered Architecture):**
    *   Understanding UDP's role as a transport protocol (layering).
    *   ARQ protocols deal with fundamental networking principles like error control, flow control (implicitly, by regulating transmission), and reliability.
    *   The efficiency of Stop-and-Wait is directly related to delay analysis (RTT, propagation delay).

*   **CO2 (Protocols and Functions of Different Layers):**
    *   This entire topic focuses on protocols, specifically transport layer protocols (or mechanisms that can be used at the transport layer, similar to what UDP might use if it needs reliability).
    *   Understanding how ARQ protocols provide functions like error correction and reliable data transfer at the transport layer.

*   **CO3 (Routing and Addressing Protocols):**
    *   While not directly about routing or addressing, these ARQ protocols operate *over* underlying network layers that handle routing and addressing. The reliability mechanisms ensure that the data, once routed to the correct destination by lower layers, arrives intact.

*   **CO4 (Physical Communication Standards):**
    *   The efficiency of ARQ protocols is heavily influenced by the characteristics of the physical layer (transmission speed, error rates, propagation delay). For example, on a high-bandwidth, low-latency fiber optic link, sliding window protocols are much more effective than on a slow, high-latency dial-up link.

---

### 9. Important Points to Remember

*   **UDP is unreliable.** ARQ protocols are needed to add reliability.
*   **Stop-and-Wait:** Simple, but inefficient. Efficiency $\le \frac{1}{1 + 2a}$.
*   **Alternating-Bit Protocol (ABP):** Improves Stop-and-Wait robustness against lost ACKs.
*   **Sliding Window Protocols:** Increase efficiency by allowing multiple frames in transit.
*   **Go-Back-N:** Sender can send N frames. If a frame is lost, retransmits it and all subsequent frames. Wastes bandwidth on retransmissions.
*   **Selective Repeat:** Retransmits only lost frames. Most efficient but complex.
*   The choice of ARQ protocol depends on the network characteristics (delay, bandwidth, error rate) and application requirements.

---

### 10. Practice Questions and Answers

**Question 1:** Explain why UDP, despite being a transport layer protocol, is considered unreliable. What mechanisms would an application using UDP need to implement if it requires reliable data transfer?

**Answer:** UDP is considered unreliable because it does not provide any built-in mechanisms to guarantee:
1.  **Delivery:** Datagrams might be lost in transit.
2.  **Order:** Datagrams might arrive at the destination in a different order than they were sent.
3.  **Error Correction:** While UDP has a checksum, it's optional and only detects errors, not corrects them. It doesn't handle corrupted packets by requesting retransmission.
4.  **Flow Control:** UDP does not regulate the sending rate to prevent overwhelming the receiver.
5.  **Congestion Control:** UDP does not adapt its sending rate based on network congestion.

If an application using UDP requires reliable data transfer, it would need to implement its own reliability mechanisms, such as:
*   **Sequence numbers:** To detect missing or out-of-order datagrams.
*   **Acknowledgments (ACKs):** For the receiver to confirm successful receipt.
*   **Timeouts and retransmissions:** For the sender to resend lost datagrams.
*   **Buffering:** To reorder received datagrams.

**Question 2:** Calculate the efficiency of the Stop-and-Wait protocol if the propagation delay is 100ms and the transmission time for a frame is 10ms.

**Answer:**
The efficiency of Stop-and-Wait is given by: Efficiency = $\frac{1}{1 + 2a}$, where $a = \frac{\text{propagation delay}}{\text{transmission time}}$.

Given:
Propagation delay = 100ms
Transmission time = 10ms

Calculate $a$:
$a = \frac{100 \text{ms}}{10 \text{ms}} = 10$

Calculate efficiency:
Efficiency = $\frac{1}{1 + 2 \times 10} = \frac{1}{1 + 20} = \frac{1}{21}$

Efficiency $\approx 0.0476$ or $4.76\%$.

This result highlights the extremely poor efficiency of Stop-and-Wait when the propagation delay significantly exceeds the transmission time.

**Question 3:** In the Go-Back-N protocol, if the sender's window size is 4 and frames are numbered 0, 1, 2, 3, 4, 5, 6, ..., what happens if frame 2 is lost, but frames 3 and 4 are received correctly by the receiver?

**Answer:**
Let's trace the events:
1.  **Sender:** Sends frames 0, 1, 2, 3. Let's assume it receives ACKs for 0, 1, and advances its window. It then sends frame 4. So, at some point, frames 0, 1, 2, 3, 4 might be in transit or acknowledged. Let's assume the sender has sent up to frame 4, and its window is `[base, base+N-1]`.
2.  **Frame 2 is lost.**
3.  **Receiver:** Receives frame 0, acknowledges it (e.g., ACK 1). Receives frame 1, acknowledges it (e.g., ACK 2).
4.  **Receiver:** Receives frame 2 (lost). It does not receive frame 2.
5.  **Receiver:** Receives frame 3 correctly. Since it's expecting frame 2, it discards frame 3 and re-sends the last *correctly received* acknowledgment (ACK 2).
6.  **Receiver:** Receives frame 4 correctly. Since it's still expecting frame 2, it discards frame 4 and re-sends the last *correctly received* acknowledgment (ACK 2).
7.  **Sender:** Its timer for frame 2 expires. Because frame 2 was the one that timed out, the sender initiates a Go-Back-N retransmission. It retransmits frame 2.
8.  **Sender:** Immediately after retransmitting frame 2, it also retransmits frames 3 and 4 (because they were sent *after* frame 2 and are within its window).

The crucial point is that frames 3 and 4, although received correctly by the receiver, are discarded because they arrived out of order due to the loss of frame 2. The receiver's repeated ACKs of '2' signal to the sender that only frame '2' and subsequent frames need to be retransmitted.

---

This concludes the study notes for UDP and ARQ protocols. Remember to cross-reference these concepts with the provided textbooks for a deeper understanding and to see specific examples and diagrams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
