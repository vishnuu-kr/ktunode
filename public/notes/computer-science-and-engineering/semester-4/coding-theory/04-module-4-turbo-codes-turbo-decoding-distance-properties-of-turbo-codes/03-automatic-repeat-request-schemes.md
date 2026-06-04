---
title: "Automatic repeat request schemes."
subject: "CODING THEORY"
module: "Module 4: Turbo codes: Turbo decoding, Distance properties of turbo codes"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b112"
status: "completed"
scrapedAt: "2026-05-20T16:10:33.544Z"
---
# CODING THEORY - Module 4: Turbo Codes - Automatic Repeat Request (ARQ) Schemes

## Topic: Automatic Repeat Request (ARQ) Schemes

**Learning Outcomes:**

*   Understand the fundamental principles of ARQ schemes.
*   Describe and differentiate between various ARQ protocols (Stop-and-Wait, Go-Back-N, Selective Repeat).
*   Analyze the performance of ARQ schemes in terms of throughput and reliability.
*   Understand the interaction and benefits of using ARQ schemes with channel coding, particularly Turbo Codes.

### 1. Introduction to Automatic Repeat Request (ARQ) Schemes

*   **Definition:** ARQ is an error control method for data transmission that uses acknowledgements (ACK) and timeouts to achieve reliable data delivery over an unreliable channel.  The receiver automatically requests the retransmission of data packets that are detected to be corrupted.

*   **Goal:** To provide reliable data transfer in the presence of transmission errors.

*   **Key Components:**
    *   **Error Detection:**  A method to detect errors in the received data (e.g., CRC, checksum).
    *   **Positive Acknowledgement (ACK):**  A signal sent by the receiver to indicate successful reception of a packet.
    *   **Negative Acknowledgement (NAK) or Timeout:** A signal (NAK) or event (timeout) indicating that a packet was received in error or not received at all.  This triggers retransmission.
    *   **Retransmission Mechanism:** The sender retransmits the packet upon receiving a NAK or after a timeout.

*   **Advantages of ARQ:**
    *   Relatively simple to implement compared to forward error correction (FEC) alone.
    *   High reliability, approaching error-free transmission.
    *   Adaptable to varying channel conditions.

*   **Disadvantages of ARQ:**
    *   Requires a return channel for acknowledgements.
    *   Can introduce variable delay due to retransmissions.
    *   Throughput is affected by error rate and round-trip time (RTT).

### 2. Types of ARQ Protocols

#### 2.1 Stop-and-Wait ARQ

*   **Description:** The simplest ARQ protocol. The sender transmits one packet and then waits for an ACK or NAK before sending the next packet.

*   **Operation:**
    1.  Sender sends a packet.
    2.  Sender waits for an ACK or NAK.
    3.  If ACK is received, sender sends the next packet.
    4.  If NAK is received or timeout occurs, sender retransmits the same packet.

*   **Advantages:**
    *   Simple to implement.
    *   Requires minimal buffering at the sender and receiver.

*   **Disadvantages:**
    *   Low throughput, especially for long round-trip times (RTTs).  Most of the time, the link is idle waiting for the ACK.

*   **Example:** Imagine sending a letter to a friend. You send one letter, wait for their reply (ACK) saying they received it, then send the next letter.

*   **Throughput Analysis:**

    *   Let `T` be the time to transmit one packet.
    *   Let `R` be the round-trip time (time for packet to reach receiver + time for ACK to reach sender).
    *   Let `p` be the probability of a packet error (either the data packet or the ACK/NAK is lost/corrupted).

    *   The probability of successful transmission is `1-p`.
    *   The expected number of transmissions for one packet to be successfully received is `1/(1-p)`.
    *   The time to transmit one packet successfully is `T + R/(1-p)`.
    *   The throughput is approximately `T/(T+R)` when `p` is close to 0 and becomes `T / (T + R/(1-p))` in general.

#### 2.2 Go-Back-N ARQ

*   **Description:**  The sender can transmit up to N packets without waiting for an ACK. The receiver acknowledges packets in order. If a packet is received in error, the receiver discards it and all subsequent packets until the erroneous packet is correctly retransmitted. The sender retransmits all packets from the lost or damaged packet onwards.

*   **Operation:**
    1.  Sender sends up to N packets (Window size = N).
    2.  Receiver acknowledges packets in order (cumulative ACKs).  For example, ACK 5 means packets 1-5 have been received correctly.
    3.  If the sender receives a NAK or timeout for packet *i*, it retransmits packet *i* and all subsequent packets that have been sent.

*   **Advantages:**
    *   Higher throughput than Stop-and-Wait ARQ.
    *   Utilizes the channel more efficiently.

*   **Disadvantages:**
    *   Wastes bandwidth by retransmitting correctly received packets.
    *   Requires more buffering at the receiver (to discard out-of-order packets).

*   **Example:**  Imagine a team of runners passing batons.  The first runner hands the baton (packet) to the second, third, and fourth runners without waiting for confirmation.  If the third runner drops the baton, they have to restart from where they dropped it, re-running with the baton and the following runners must also restart even if they had successfully received their batons.

*   **Throughput Analysis:**

    *   Let `W` be the window size (maximum number of unacknowledged packets).
    *   Let `T` be the time to transmit one packet.
    *   Let `R` be the round-trip time.
    *   Let `p` be the probability of a packet error.

    *   If `W * T < R`, the throughput is similar to Stop-and-Wait ARQ.
    *   If `W * T > R`, and there are no errors, the throughput approaches `T/T = 1` (full channel utilization).
    *   When there are errors, the throughput decreases due to retransmissions of multiple packets. Specifically, the throughput can be approximated as `(1-p) * min(1, W*T/R)`.

#### 2.3 Selective Repeat ARQ

*   **Description:** The sender can transmit up to N packets without waiting for an ACK.  The receiver acknowledges *each* packet individually (using selective ACKs). The sender only retransmits the packets that were received in error.  The receiver buffers out-of-order packets until the missing packet(s) are received.

*   **Operation:**
    1.  Sender sends up to N packets (Window size = N).
    2.  Receiver acknowledges each packet individually (selective ACKs).  NAKs are also explicit.
    3.  Sender retransmits only the packets that were not acknowledged (identified by NAKs or timeouts).
    4.  Receiver buffers out-of-order packets and reassembles them in the correct sequence.

*   **Advantages:**
    *   Highest throughput of the three ARQ protocols.
    *   Efficient use of bandwidth.

*   **Disadvantages:**
    *   More complex to implement.
    *   Requires significant buffering at the receiver (to store out-of-order packets).
    *   Requires more complex sequence number management to track individual packet acknowledgements.

*   **Example:** Imagine a team of runners passing batons. The first runner hands the baton (packet) to the second, third, and fourth runners without waiting for confirmation. If the third runner drops the baton, only the third runner re-runs with the baton. The second and fourth runners don't have to re-run because they kept hold of their batons successfully. The final "receiver" knows which runners have already completed their baton pass and what order they should be in.

*   **Throughput Analysis:**

    *   Let `W` be the window size.
    *   Let `T` be the time to transmit one packet.
    *   Let `R` be the round-trip time.
    *   Let `p` be the probability of a packet error.

    *   If the window size `W` is chosen appropriately, the throughput approaches `(1-p)`. This is the most efficient ARQ protocol, wasting only the time spent on retransmitting error packets. The upper limit to throughput remains 1.

### 3.  ARQ Schemes and Channel Coding (Turbo Codes)

*   **Complementary Roles:** ARQ and channel coding (like Turbo codes) are often used together to achieve very high reliability.
    *   Channel coding provides forward error correction (FEC) to correct some errors at the receiver *without* retransmission.
    *   ARQ handles the errors that the FEC cannot correct by requesting retransmissions.

*   **Benefits of Combining ARQ and Turbo Codes:**
    *   **Increased Reliability:** The combination of FEC and ARQ provides a very low probability of undetected errors.
    *   **Improved Throughput:**  FEC reduces the number of retransmissions required by ARQ, increasing the overall throughput. This is because FEC corrects *some* errors, meaning fewer packets need to be retransmitted via ARQ.
    *   **Adaptive Error Correction:**  Turbo codes provide excellent error correction capabilities, particularly at low signal-to-noise ratios (SNRs). ARQ ensures reliable communication even when the channel conditions are poor, pushing the communication link to its limits.

*   **Example:**
    1.  The sender encodes the data using a Turbo code.
    2.  The encoded data is transmitted.
    3.  The receiver attempts to decode the received data using the Turbo decoder.
    4.  If the Turbo decoder is successful, an ACK is sent.
    5.  If the Turbo decoder fails (e.g., a CRC check fails after decoding), a NAK is sent or a timeout occurs.
    6.  The sender retransmits the Turbo-encoded data.

*   **Optimizing Performance:**  The performance of ARQ with Turbo codes depends on several factors, including:
    *   The code rate of the Turbo code.
    *   The ARQ protocol used (Stop-and-Wait, Go-Back-N, Selective Repeat).
    *   The window size of the ARQ protocol.
    *   The round-trip time (RTT) of the communication channel.

### 4. Distance Properties of Turbo Codes in the Context of ARQ

*   While the distance properties of Turbo codes don't *directly* dictate the choice of ARQ scheme, they strongly influence *how often* ARQ is invoked. Turbo codes are designed to have good distance properties, meaning that the minimum Hamming distance between codewords is relatively large. This translates to better error correction capabilities.

*   **Relationship to ARQ:**
    *   A Turbo code with good distance properties (i.e., capable of correcting more errors) will result in *fewer* retransmissions by the ARQ scheme.
    *   This is because the Turbo decoder is more likely to successfully correct the errors introduced by the channel, reducing the need for ARQ.

*   **Impact on Throughput:** By reducing the frequency of retransmissions, Turbo codes with good distance properties contribute to *higher* throughput in ARQ systems.

*   **Key Consideration:** The coding gain achieved by the Turbo code significantly impacts the effectiveness of the ARQ scheme.  A higher coding gain means more errors are corrected by the Turbo code, and less reliance on ARQ.

### 5. Practical Considerations

*   **Sequence Numbers:**  ARQ protocols rely on sequence numbers to keep track of packets and ensure correct ordering. The size of the sequence number field must be sufficient to avoid ambiguity, especially in protocols like Go-Back-N and Selective Repeat.

*   **Timeout Values:** The timeout value should be carefully chosen to be slightly larger than the expected RTT.  Too short, and unnecessary retransmissions will occur. Too long, and the system will be slow to recover from errors.

*   **Window Size:** In Go-Back-N and Selective Repeat ARQ, the window size determines the number of unacknowledged packets that can be outstanding.  The optimal window size depends on the RTT, the channel bandwidth, and the error rate.

### 6. Important Points to Remember

*   ARQ schemes are essential for reliable data transmission over unreliable channels.
*   Different ARQ protocols offer different trade-offs between throughput, complexity, and buffering requirements.
*   ARQ schemes are often used in conjunction with channel coding (like Turbo codes) to further improve reliability and throughput.
*   The distance properties of the channel code affect the frequency with which ARQ is invoked. Better distance properties lead to fewer retransmissions.
*   Proper parameter selection (timeout values, window sizes, sequence number lengths) is crucial for optimizing ARQ performance.

### 7. Practice Questions and Exercises

**Question 1:**

Explain the difference between Go-Back-N ARQ and Selective Repeat ARQ. What are the advantages and disadvantages of each?

**Answer:**

*   **Go-Back-N ARQ:**
    *   Sender retransmits all packets from the first unacknowledged packet onward.
    *   Receiver discards out-of-order packets.
    *   *Advantages:* Simpler implementation.
    *   *Disadvantages:* Inefficient bandwidth utilization due to retransmission of correctly received packets.

*   **Selective Repeat ARQ:**
    *   Sender retransmits only the packets that were received in error.
    *   Receiver buffers out-of-order packets.
    *   *Advantages:* Efficient bandwidth utilization.
    *   *Disadvantages:* More complex implementation, requires more buffering at the receiver.

**Question 2:**

Why is ARQ often used in conjunction with channel coding, such as Turbo codes?

**Answer:**

ARQ and channel coding are complementary error control techniques. Channel coding (e.g., Turbo codes) provides forward error correction (FEC), which can correct some errors at the receiver *without* retransmission. ARQ handles the errors that the FEC cannot correct by requesting retransmissions. Combining them increases reliability and throughput. FEC reduces the number of retransmissions required by ARQ, increasing the overall throughput.

**Question 3:**

In Stop-and-Wait ARQ, what is the impact of a long round-trip time (RTT) on the throughput?

**Answer:**

A long RTT in Stop-and-Wait ARQ significantly reduces the throughput. The sender spends a significant portion of the time idle, waiting for the ACK or NAK for each packet.  The channel utilization is low.  The throughput is approximately `T/(T+R)` where T is the packet transmission time and R is the RTT. Thus a large R significantly decreases throughput.

**Question 4:**

How do the distance properties of Turbo codes affect the performance of an ARQ system?

**Answer:**

Turbo codes with good distance properties (large minimum Hamming distance) have better error correction capabilities. This means that the Turbo decoder is more likely to successfully correct errors, reducing the need for retransmissions by the ARQ scheme. Fewer retransmissions translate to higher overall throughput.  The better the Turbo code's error correction, the less ARQ will be utilized.

**Question 5:**

Assume a Go-Back-N ARQ system.  The window size is 7, the packet transmission time is 1ms, and the round-trip time is 10ms.  If there are no errors, what is the maximum throughput achievable?

**Answer:**

Since W*T (7 * 1ms = 7ms) < R (10ms), the sender will likely be limited by the RTT. In error free scenario the sender can send 7 packets and then waits for the ACK to arrive.  The time to send all packets is 7 * 1ms + 10ms = 17ms. Hence the throughput is 7 / 17 packets/ms.

Alternatively, consider: In 10ms RTT, the sender can send 7 packets, and wait for 10ms to receive ACK. Therefore throughput is bottlenecked at sending 7 packets for every 17ms.

**Important Notes for Exam/Quiz Preparation:**

*   Be able to define and explain the key concepts of ARQ schemes.
*   Be able to compare and contrast the different ARQ protocols (Stop-and-Wait, Go-Back-N, Selective Repeat).  Understand their trade-offs.
*   Be able to analyze the performance of ARQ schemes in terms of throughput.  Understand the factors that affect throughput (RTT, error rate, window size).
*   Understand how ARQ and channel coding (Turbo codes) work together to achieve reliable communication.
*   Be able to solve simple problems involving ARQ throughput calculations.
