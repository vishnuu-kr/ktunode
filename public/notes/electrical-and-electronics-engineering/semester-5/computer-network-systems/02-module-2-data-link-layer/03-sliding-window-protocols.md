---
title: "Sliding window protocols"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36470"
status: "completed"
scrapedAt: "2026-05-23T16:19:57.679Z"
---
# Computer Network Systems: Module 2 - Data Link Layer: Sliding Window Protocols

## Introduction to Sliding Window Protocols

Sliding window protocols are a class of data link layer protocols that enable efficient and reliable data transfer over a network. They address the limitations of simpler stop-and-wait protocols by allowing the sender to transmit multiple frames before waiting for an acknowledgment. This significantly improves throughput, especially in networks with high latency or bandwidth.

**Key Concept:** The core idea is to maintain a "window" of frames that the sender is allowed to transmit without explicit acknowledgment for each individual frame. Similarly, the receiver also maintains a window of frames it is prepared to accept.

**Why Sliding Window?**

*   **Improved Throughput:** Overcomes the inefficiency of stop-and-wait by keeping the network pipeline full.
*   **Efficiency:** Minimizes idle time for the sender.
*   **Reliability:** Mechanisms are in place to handle lost frames, corrupted frames, and duplicate frames.

## Core Concepts of Sliding Window Protocols

### 1. The Window Concept

*   **Sender Window:** A range of sequence numbers for frames that the sender is allowed to transmit but has not yet received an acknowledgment for.
    *   The size of the sender window dictates how many unacknowledged frames can be outstanding.
    *   **Important Point:** The sender cannot send a frame with a sequence number outside its current window.
*   **Receiver Window:** A range of sequence numbers for frames that the receiver is prepared to accept.
    *   The receiver window slides forward as it correctly receives and acknowledges frames.
    *   **Important Point:** The receiver will only accept frames whose sequence numbers fall within its current window.

### 2. Sequence Numbers

*   Each frame sent is assigned a unique sequence number.
*   These sequence numbers are crucial for:
    *   Detecting lost frames.
    *   Detecting duplicate frames.
    *   Enabling the receiver to reassemble frames in the correct order.
*   The range of sequence numbers is typically $0$ to $N-1$, where $N$ is the maximum sequence number.

### 3. Acknowledgments (ACKs)

*   The receiver sends acknowledgments to the sender to indicate that it has successfully received frames.
*   Acknowledgments typically carry the sequence number of the *next* frame the receiver expects. This is often referred to as **cumulative acknowledgment**.
    *   **Example:** If a receiver has successfully received frames 0, 1, and 2, it will send an ACK with the value 3, indicating it expects frame 3 next. This implies frames 0, 1, and 2 were received correctly.

### 4. Timeouts and Retransmission

*   The sender maintains a timer for each transmitted frame.
*   If an acknowledgment for a frame is not received before the timer expires, the sender assumes the frame (or its acknowledgment) was lost.
*   The sender then retransmits the lost frame and restarts the timer.

### 5. Frame Numbering Schemes

*   **Binary:** Sequence numbers are typically binary values (e.g., 0, 1, 2, 3...).
*   **Modulo Arithmetic:** Sequence numbers often wrap around using modulo arithmetic. For example, with 3 bits, the sequence numbers are 0, 1, 2, 3, 4, 5, 6, 7, and then back to 0.

## Types of Sliding Window Protocols

The key differences between sliding window protocols lie in their efficiency and complexity, particularly in how they handle acknowledgments and errors.

### 1. Stop-and-Wait (As a baseline)

*   **Mechanism:** Sender sends one frame, waits for an ACK, then sends the next.
*   **Sender Window:** Size of 1.
*   **Receiver Window:** Size of 1.
*   **Pros:** Simple to implement.
*   **Cons:** Extremely inefficient, especially on high-latency or high-bandwidth links. The sender is idle most of the time.
*   **Textbook Reference:** Tanenbaum, Chapter 3 (Data Link Layer) often introduces stop-and-wait as a fundamental concept before discussing more advanced protocols. Forouzan, Chapter 4 (Data Link Layer) also covers this.

### 2. Go-Back-N (GBN)

*   **Mechanism:** The sender can transmit up to $W$ frames (where $W$ is the window size) without waiting for an acknowledgment. The receiver only accepts frames in the correct sequential order.
*   **Sender Window:** Size $W$.
*   **Receiver Window:** Size 1.
*   **Acknowledgments:** Cumulative. An ACK for sequence number $k$ implies all frames up to $k-1$ have been received correctly.
*   **Error Handling:**
    *   If the sender receives a duplicate ACK (meaning a frame was lost), it retransmits the *last correctly received frame* and all subsequent frames it had sent.
    *   If the receiver detects a corrupted frame or a frame out of sequence, it discards the frame and all subsequent frames received until the missing frame arrives. It then sends an ACK for the last correctly received *in-sequence* frame.
*   **Pros:** Significantly more efficient than stop-and-wait.
*   **Cons:** Can be inefficient in terms of retransmissions if a single frame loss causes many subsequent frames to be retransmitted unnecessarily.
*   **Example:** Sender sends frames 0, 1, 2. Receiver ACKs 0, 1. Sender sends frame 3. Frame 2 is lost. Receiver receives frame 3, discards it (as it's out of order), and sends an ACK for 2. Sender receives ACK for 2, realizes frame 2 was lost (or it times out), and retransmits 2, 3, 4, etc.
*   **Window Size Constraint:** For GBN to work reliably without ambiguity, the sender's window size ($W$) must be less than $2^m$, where $m$ is the number of bits used for sequence numbers. For example, if using 3 bits for sequence numbers (0-7), the window size must be 7 or less.
*   **Textbook Reference:** Tanenbaum and Forouzan both provide detailed explanations of Go-Back-N.

### 3. Selective Repeat (SR)

*   **Mechanism:** The sender can transmit up to $W$ frames. The receiver also maintains a window of size $W$ and accepts frames *out of order* as long as they fall within its window.
*   **Sender Window:** Size $W$.
*   **Receiver Window:** Size $W$.
*   **Acknowledgments:** Selective or cumulative. Typically, the receiver sends an ACK for each correctly received frame, indicating its sequence number.
*   **Error Handling:**
    *   If a frame is lost or corrupted, the sender retransmits only that specific frame.
    *   The receiver buffers frames that arrive out of order. Once the missing frame arrives, it can be delivered to the upper layer along with any subsequently arrived buffered frames.
*   **Pros:** Most efficient, as it retransmits only the lost frames.
*   **Cons:** More complex to implement due to the need for buffering at the receiver and more sophisticated ACK management.
*   **Example:** Sender sends frames 0, 1, 2, 3. Frame 1 is lost. Receiver receives 0, buffers 2, buffers 3. Receiver sends ACKs for 0, 2, 3. Sender retransmits only frame 1. Receiver gets frame 1, delivers 0, 1, 2, 3 to the upper layer.
*   **Window Size Constraint:** For Selective Repeat to work without ambiguity, the sender's window size ($W$) must be less than or equal to $(2^m)/2$, where $m$ is the number of bits used for sequence numbers. This ensures that there's no overlap between the sender's and receiver's potential sequence number ranges.
*   **Textbook Reference:** Tanenbaum and Forouzan offer in-depth coverage of Selective Repeat.

## Summary of Key Differences

| Feature           | Stop-and-Wait | Go-Back-N (GBN) | Selective Repeat (SR) |
| :---------------- | :------------ | :-------------- | :-------------------- |
| Sender Window     | 1             | $W$             | $W$                   |
| Receiver Window   | 1             | 1               | $W$                   |
| ACKs              | Per Frame     | Cumulative      | Per Frame (usually)   |
| Retransmission    | Always the last sent | Last correctly received frame + subsequent frames | Only the lost/corrupted frame |
| Receiver Buffering| None          | None            | Yes (for out-of-order frames) |
| Complexity        | Low           | Medium          | High                  |
| Efficiency        | Very Low      | Medium          | High                  |
| Window Size Req.  | N/A           | $W < 2^m$       | $W \le 2^m / 2$       |

## Implementing Sliding Window Protocols

### Frame Structure

A typical data link layer frame for sliding window protocols would include:

*   **Start Delimiter:** Marks the beginning of the frame.
*   **Frame Type:** e.g., Data, ACK, Negative ACK (though NAKs are less common in modern sliding window protocols).
*   **Sequence Number:** For data frames, the sequence number of the data it carries. For ACK frames, the sequence number of the *next* expected frame.
*   **Acknowledgment Number:** (Used in cumulative ACK schemes).
*   **Data Payload:** The actual data being transmitted.
*   **Error Detection Code (e.g., CRC):** For ensuring data integrity.
*   **End Delimiter:** Marks the end of the frame.

### Sender Logic

The sender's logic involves managing its window and timers:

1.  **Initialize:** Set the sender's window to cover the first set of allowed sequence numbers. Initialize timers.
2.  **On Timer Expiry:** If a timer for a sent frame expires without an ACK, retransmit that frame and restart its timer. (For GBN, retransmit from the lost frame onwards).
3.  **On Receiving ACK:**
    *   If the ACK is for a frame within the sender's window:
        *   Update the sender's window to slide forward.
        *   Cancel the timer for the acknowledged frame.
        *   If there are new frames to send within the new window, send them and start their timers.
4.  **On Sending Data:**
    *   If the next frame to be sent is within the sender's window:
        *   Send the frame.
        *   Start the timer for this frame.
        *   Advance the "in-flight" pointer.

### Receiver Logic

The receiver's logic involves managing its window and received frames:

1.  **Initialize:** Set the receiver's window to cover the initial expected sequence numbers.
2.  **On Receiving a Frame:**
    *   Check for errors using the CRC. If corrupted, discard the frame.
    *   **If Frame is in Window:**
        *   **GBN:** If the frame's sequence number is exactly the one expected:
            *   Deliver the data to the upper layer.
            *   Send an ACK for this frame (cumulative).
            *   Slide the receiver window forward.
        *   **SR:** If the frame's sequence number is within the receiver's window:
            *   Buffer the frame if it's out of order.
            *   If it's the expected frame, deliver it and any contiguous buffered frames to the upper layer.
            *   Send an ACK for the delivered frame (or range).
            *   Slide the receiver window forward based on delivered frames.
    *   **If Frame is out of Window:**
        *   **GBN:** Discard the frame. Send the ACK for the last correctly received *in-sequence* frame.
        *   **SR:** If it's a duplicate of a frame already delivered, ignore it. If it's an out-of-window frame but not a duplicate, it might be retransmitted data that the sender is still expecting. Generally, it's discarded if not expected.

## Performance Considerations

*   **Link Utilization:** The primary goal of sliding window protocols is to maximize link utilization.
*   **Bandwidth-Delay Product:** A crucial metric is the product of bandwidth and round-trip propagation delay. This determines how much data can be "in flight" at any given time. The sender's window size should ideally be related to this product.
    *   *Window Size $\approx$ Bandwidth $\times$ Round-Trip Delay*
*   **Efficiency Factor (or Utilization):**
    *   For Stop-and-Wait: $E = \frac{1}{1 + 2a}$, where $a = \frac{\text{Propagation Delay}}{\text{Transmission Delay}}$
    *   For GBN/SR (assuming efficient window size and no errors): $E = \min(1, \frac{W}{1 + 2a})$ or $E = \min(1, \frac{W}{1 + a})$ if ACK traffic is considered.
    *   **Important Point:** If the window size $W$ is less than $1+2a$, the efficiency is limited by the window size. If $W$ is greater than or equal to $1+2a$, the efficiency is limited by the network's propagation delay.

## Protocol Examples (Conceptual)

*   **Data Link Layer Protocols:** HDLC (High-Level Data Link Control) and PPP (Point-to-Point Protocol) are examples that often implement variations of sliding window techniques. While specific details can vary, the underlying principles of windowing, sequence numbers, and error control are present.
*   **TCP (Transmission Control Protocol):** While TCP operates at the transport layer, it uses a sophisticated sliding window mechanism. Understanding data link layer sliding window protocols provides a foundation for understanding TCP's flow control and reliability. TCP's window size is dynamic and can be adjusted based on receiver buffer availability and network conditions.

## Course Outcome Alignment

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   This topic directly contributes to explaining data link layer protocols, which are fundamental building blocks of computer networks. Sliding window protocols are a specific type of reliable data link layer protocol.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   Sliding window protocols are a core function of the data link layer's reliable data transfer service. Understanding them helps explain *how* the data link layer ensures data gets from one hop to the next reliably.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   While not directly routing or congestion control, efficient data transfer at the link layer (via sliding window) indirectly contributes to overall network performance and can be contrasted with higher-layer congestion control mechanisms. Flow control (which sliding window protocols provide) is a related concept.
*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   Understanding data link layer sliding window protocols provides a foundational understanding for transport layer protocols like TCP, which also use sliding windows for flow control and reliable data transfer. The principles are transferable.

## Practice Questions and Answers

**Question 1:** In a Go-Back-N protocol with 3 bits for sequence numbers, what is the maximum allowed size of the sender's window to avoid ambiguity?
    *   **Answer:** For GBN, the window size $W$ must be less than $2^m$, where $m$ is the number of bits for sequence numbers. With $m=3$, $2^m = 8$. Therefore, the maximum window size is $7$.

**Question 2:** Explain why Selective Repeat requires the sender's window size to be less than or equal to half the total number of sequence numbers ($W \le 2^m / 2$).
    *   **Answer:** In Selective Repeat, the receiver buffers out-of-order frames. If the window size is too large (e.g., equal to $2^m$), the sender's window and the receiver's window could potentially overlap. This overlap can lead to ambiguity when the sender retransmits a frame and the receiver receives it. For example, if the sender's window covers 0-7 and the receiver's window also covers 0-7, a received frame with sequence number 0 could be either the original frame 0 or retransmitted frame 8 (which wraps around to 0). The $W \le 2^m / 2$ constraint ensures that the sender's window and receiver's window do not overlap in a way that causes this ambiguity.

**Question 3:** Consider a network with a propagation delay of 100ms and a transmission delay of 10ms for a data frame. If a Stop-and-Wait protocol is used, what is the efficiency? (Assume no errors).
    *   **Answer:**
        *   Transmission Delay ($T_t$) = 10ms
        *   Propagation Delay ($T_p$) = 100ms
        *   Round-Trip Propagation Delay ($2T_p$) = 200ms
        *   The sender sends a frame, which takes $T_t$ to transmit. It then waits for the ACK, which travels back, taking $T_p$ to reach the sender. The total time for one frame exchange is $T_t + 2T_p$.
        *   Efficiency ($E$) = $\frac{\text{Transmission Delay}}{\text{Total Time for one frame}}$ = $\frac{T_t}{T_t + 2T_p}$
        *   $E = \frac{10 \text{ms}}{10 \text{ms} + 200 \text{ms}} = \frac{10}{210} \approx 0.0476$ or 4.76%.
        *   Alternatively, using the formula $E = \frac{1}{1 + 2a}$:
            *   $a = \frac{T_p}{T_t} = \frac{100 \text{ms}}{10 \text{ms}} = 10$
            *   $E = \frac{1}{1 + 2 \times 10} = \frac{1}{21} \approx 0.0476$ or 4.76%.

**Question 4:** In Selective Repeat, what happens if the receiver receives frame 5, then frame 7 (assuming frame 6 is lost and the receiver window size is 4, covering sequence numbers 4, 5, 6, 7)?
    *   **Answer:**
        *   The receiver expects frame 4 first.
        *   It receives frame 5. Since frame 5 is within its window (4-7) but not the expected frame (4), it buffers frame 5 and sends an ACK for frame 5.
        *   It then receives frame 7. Frame 7 is also within its window (4-7) but not the expected frame (4). It buffers frame 7 and sends an ACK for frame 7.
        *   The receiver now has frames 5 and 7 buffered, but it's still missing frame 6. It cannot deliver frame 5 to the upper layer yet because frame 4 has not been received. It will continue to wait for frame 4. If frame 4 arrives, it will be delivered, then buffered frame 5 will be delivered, followed by buffered frame 7 (if frame 6 has also arrived by then).

## Important Points to Remember

*   Sliding window protocols improve efficiency by allowing multiple frames to be in transit.
*   Sequence numbers are critical for identifying frames, detecting errors, and reordering.
*   Acknowledgments (ACKs) inform the sender about successful frame reception.
*   Timeouts and retransmissions are the mechanisms for handling lost frames.
*   **Go-Back-N:** Simpler but can retransmit unnecessary frames. Receiver window size is 1.
*   **Selective Repeat:** More complex but more efficient by retransmitting only lost frames. Receiver window size is $W$.
*   The window size is a crucial parameter that affects performance and must be chosen carefully, considering the bandwidth-delay product and the specific protocol (GBN vs. SR).
*   The $2^m$ and $2^m/2$ constraints for window sizes are vital to prevent sequence number ambiguity.
*   These protocols form the basis for reliable data transfer at the data link layer and share principles with transport layer protocols like TCP.
