---
title: "Flow Control- Noiseless Channels"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92a"
status: "completed"
scrapedAt: "2026-05-20T17:02:41.388Z"
---
# Computer Networks: Module 2 - Data Link Layer

## Topic: Flow Control - Noiseless Channels

---

### 1. Introduction to Flow Control

*   **What is Flow Control?**
    *   Flow control is a mechanism used in computer networks to manage the rate at which data is transmitted between two devices.
    *   It prevents a fast sender from overwhelming a slow receiver, ensuring that the receiver can process the incoming data without losing any packets.
    *   Essentially, it's about **matching the sender's transmission rate to the receiver's processing capacity.**

*   **Why is Flow Control Necessary?**
    *   **Receiver Overload:** If a sender transmits data too quickly, the receiver's buffer might overflow, leading to dropped packets.
    *   **Efficiency:** Prevents wasted transmission bandwidth when the receiver is already full.
    *   **Data Integrity:** Ensures that all transmitted data can be received and processed reliably.

*   **Scope:** Flow control primarily operates at the Data Link Layer, but its principles also apply to other layers (e.g., Transport Layer with TCP).

---

### 2. Flow Control on Noiseless Channels

*   **Assumption:** In this context, we assume that the channel is **noiseless**. This means that data packets are transmitted without any errors, corruption, or loss.
*   **Implication of Noiselessness:** The primary concern for flow control in a noiseless channel is **speed mismatch** between the sender and receiver, not data integrity due to errors.
*   **Key Problem:** The sender might produce data faster than the receiver can consume it.

---

### 3. Basic Flow Control Mechanisms

We'll explore two fundamental protocols for flow control on noiseless channels:

#### 3.1. Stop-and-Wait Protocol

*   **Concept:** The sender transmits one frame and then **stops and waits** for an acknowledgment (ACK) from the receiver before sending the next frame.
*   **Mechanism:**
    1.  Sender sends frame `n`.
    2.  Sender waits for ACK for frame `n`.
    3.  Receiver receives frame `n`.
    4.  Receiver sends ACK for frame `n`.
    5.  Sender receives ACK for frame `n`.
    6.  Sender sends frame `n+1`.

*   **Flow:**
    *   Sender -> Frame `n` -> Receiver
    *   Receiver -> ACK `n` -> Sender

*   **Advantages:**
    *   **Simple to implement.**
    *   **Guarantees that the receiver is ready** before the next frame is sent.
    *   **Effective for noiseless channels** where the only issue is speed mismatch.

*   **Disadvantages:**
    *   **Poor channel utilization (throughput):** The channel is idle during the time the sender waits for the ACK. This is especially problematic on high-latency or long-distance links.
    *   **High overhead:** Every frame requires an ACK.

*   **Efficiency Calculation (Noiseless Channel):**
    *   Let `T_frame` be the time to transmit a frame.
    *   Let `T_ack` be the time to transmit an ACK frame.
    *   Let `t_prop` be the propagation delay (time for a signal to travel from sender to receiver).
    *   Let `t_trans_ack` be the transmission delay for the ACK.
    *   Let `t_proc` be the processing delay at the receiver (usually negligible in these models).
    *   Total time for one frame cycle (sender sends, waits, receiver processes, sends ACK, sender receives ACK):
        `T_cycle = T_frame + t_prop + t_trans_ack + t_proc + t_prop`
        Since ACKs are usually much smaller, `T_ack` is very small, and `t_trans_ack` is negligible compared to `T_frame`. So, a simplified cycle time is:
        `T_cycle ≈ T_frame + 2 * t_prop` (assuming ACK transmission time is negligible)
    *   Effective Throughput = `Data_in_frame / T_cycle`
    *   Channel Utilization = `T_frame / T_cycle = T_frame / (T_frame + 2 * t_prop)`

*   **Example:**
    *   A sender sends a 1000-byte frame.
    *   The transmission time for the frame is 0.1 seconds.
    *   The propagation delay is 1 second.
    *   The sender sends the frame and waits for the ACK.
    *   It takes 1 second for the ACK to reach the sender.
    *   Total time for one frame: 0.1s (send frame) + 1s (propagate frame) + 1s (propagate ACK) = 2.1 seconds.
    *   The sender sends only 1000 bytes every 2.1 seconds. This is very inefficient.

#### 3.2. Sliding Window Protocol (Simpler Variants)

While full Sliding Window protocols are more complex and handle errors, the *concept* of allowing the sender to send multiple frames without waiting for individual ACKs is crucial for improving efficiency. For noiseless channels, we can consider simplified scenarios:

*   **Concept:** The sender can transmit a limited number of frames (defined by the **window size**) before it needs to wait for an acknowledgment. The receiver also maintains a window for incoming frames.
*   **Key Idea:** Allows for overlapping of transmission and acknowledgment, improving channel utilization.
*   **Scenario (Simplified for Noiseless):** Imagine a window size of `N`. The sender can send frames 0 to `N-1` without waiting for ACKs. It only waits when it's about to send frame `N`.

*   **How it works (Conceptual):**
    1.  Sender has a window of allowed frames to send.
    2.  Sender sends frames within its window.
    3.  Receiver receives frames and acknowledges them. Acknowledging a frame `k` implies that the receiver is ready for frame `k+1`.
    4.  As ACKs arrive, the sender's window slides forward, allowing more frames to be sent.

*   **Advantages:**
    *   **Improved throughput** compared to Stop-and-Wait, especially on links with higher latency or bandwidth-delay product.
    *   **Allows for pipelining** of frames.

*   **Disadvantages:**
    *   More complex to implement than Stop-and-Wait.
    *   Requires sequence numbers to identify frames.

*   **Focus for Noiseless Channels:** The primary benefit is reducing the idle time of the sender by allowing it to send multiple frames back-to-back as long as the receiver's buffer capacity is not exceeded. In a noiseless channel, we don't need to worry about retransmissions, so the window size is primarily determined by the available buffer space at the receiver and the need to keep the sender busy.

*   **Example of a simplified sliding window (conceptual, not a full protocol like Go-Back-N or Selective Repeat):**
    *   Window Size = 3.
    *   Sender can send frames 0, 1, 2.
    *   Sender sends: Frame 0, Frame 1, Frame 2.
    *   Receiver receives Frame 0 and sends ACK 0.
    *   Receiver receives Frame 1 and sends ACK 1.
    *   Sender receives ACK 0. Its window slides. Now it can send Frame 3 (if it has one).
    *   Sender sends: Frame 3.
    *   Receiver receives Frame 2 and sends ACK 2.
    *   Sender receives ACK 1. Its window slides. Now it can send Frame 4.
    *   Sender sends: Frame 4.

---

### 4. Key Concepts and Definitions

*   **Sender:** The device transmitting data.
*   **Receiver:** The device receiving data.
*   **Frame:** A unit of data at the Data Link Layer.
*   **Packet:** A unit of data at the Network Layer (often used interchangeably with frame in general discussion).
*   **Acknowledgment (ACK):** A control frame sent by the receiver to confirm successful reception of a data frame.
*   **Buffer:** A temporary storage area in the receiver (or sender) to hold data.
*   **Propagation Delay (t_prop):** The time it takes for a signal to travel from the sender to the receiver.
*   **Transmission Delay (T_frame):** The time it takes to transmit all bits of a frame onto the link.
*   **Channel Utilization:** The ratio of the time the link is busy transmitting useful data to the total time elapsed.
*   **Window Size:** The maximum number of unacknowledged frames that the sender can transmit.

---

### 5. Learning Outcomes Covered

*   **Understanding the need for flow control:** Covered in Section 1.
*   **Analyzing flow control on noiseless channels:** Covered in Section 2.
*   **Explaining the Stop-and-Wait protocol:** Covered in Section 3.1.
*   **Evaluating the efficiency of Stop-and-Wait:** Covered in Section 3.1 (efficiency calculation).
*   **Introducing the concept of sliding window protocols for improved efficiency:** Covered in Section 3.2.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of flow control in a communication network?

**Answer 1:**
The primary purpose of flow control is to prevent a fast sender from overwhelming a slow receiver, ensuring that the receiver can process incoming data without losing packets. It manages the transmission rate to match the receiver's capacity.

---

**Question 2:**
Consider a noiseless channel. A sender transmits a frame and then stops. It waits for an acknowledgment from the receiver before sending the next frame. This is an example of which flow control protocol?

**Answer 2:**
Stop-and-Wait protocol.

---

**Question 3:**
Explain why Stop-and-Wait protocol can lead to poor channel utilization, especially on links with high latency.

**Answer 3:**
In Stop-and-Wait, the sender transmits one frame and then idles until it receives an acknowledgment for that frame. If the propagation delay (time for the frame to reach the receiver and the ACK to return) is significant, the channel remains idle for a large portion of the time, leading to low channel utilization. The sender's time is spent waiting rather than transmitting data.

---

**Question 4:**
Calculate the channel utilization for a Stop-and-Wait protocol if:
*   Frame transmission time ($T_{frame}$) = 10 ms
*   Propagation delay ($t_{prop}$) = 50 ms
*   ACK transmission time ($T_{ack}$) = 1 ms (assume negligible compared to frame transmission)
*   Receiver processing time ($t_{proc}$) = 0 ms (assume negligible)

**Answer 4:**
The total time for one frame cycle is approximately:
$T_{cycle} \approx T_{frame} + 2 \times t_{prop}$
$T_{cycle} \approx 10 \text{ ms} + 2 \times 50 \text{ ms}$
$T_{cycle} \approx 10 \text{ ms} + 100 \text{ ms}$
$T_{cycle} \approx 110 \text{ ms}$

Channel Utilization = $\frac{T_{frame}}{T_{cycle}}$
Channel Utilization = $\frac{10 \text{ ms}}{110 \text{ ms}}$
Channel Utilization $\approx 0.0909$ or 9.09%

This calculation clearly shows low utilization due to the long propagation delay.

---

**Question 5:**
What is the main advantage of using a sliding window approach over Stop-and-Wait for flow control on noiseless channels?

**Answer 5:**
The main advantage of a sliding window approach is improved channel utilization. It allows the sender to transmit multiple frames before waiting for an acknowledgment, effectively pipelining the transmission process and reducing the idle time of the sender and the link, especially in the presence of significant propagation delays.

---

### 7. Important Points to Remember

*   **Flow Control Goal:** Match sender speed to receiver speed.
*   **Noiseless Channel Assumption:** Focus is purely on speed mismatch, not error recovery.
*   **Stop-and-Wait:** Simple, but inefficient due to sender idle time.
*   **Efficiency of Stop-and-Wait:** Heavily impacted by propagation delay. Throughput $\leq \frac{\text{Data\_per\_frame}}{\text{Data\_per\_frame} + 2 \times t_{prop}}$ (if frame transmission time is considered negligible for a moment).
*   **Sliding Window:** Improves efficiency by allowing multiple frames in transit. Reduces sender idle time.
*   The **bandwidth-delay product** (Bandwidth $\times$ Delay) is a key metric that determines how many bits can be in "flight" on the network at any given time. Sliding window protocols are designed to fill this "pipe."

---
