---
title: "TCP  Connection, segment structure, RTT estimate, Flow control."
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff049"
status: "completed"
scrapedAt: "2026-05-23T18:00:03.262Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction
## Topic: TCP Connection, Segment Structure, RTT Estimate, Flow Control

This module introduces the Transmission Control Protocol (TCP), a fundamental protocol in the TCP/IP suite responsible for reliable, ordered, and error-checked delivery of a stream of bytes. We will explore how TCP establishes and manages connections, the structure of its segments, how it estimates Round Trip Time (RTT), and the mechanisms it employs for flow control.

---

### 1. TCP Connection Establishment

TCP provides a **connection-oriented** service, meaning that a logical connection must be established between the sender and receiver before data transfer can begin. This process is called the **three-way handshake**.

#### 1.1 The Three-Way Handshake

The three-way handshake ensures that both the sender and receiver are ready to exchange data and agree on initial sequence numbers. It involves the exchange of three segments:

1.  **SYN (Synchronize Sequence Numbers):** The client (initiator) sends a SYN segment to the server. This segment contains an initial sequence number (ISN) chosen by the client.
    *   **Purpose:** To initiate a connection and synchronize sequence numbers.
    *   **Flag:** SYN flag is set to 1.

2.  **SYN-ACK (Synchronize-Acknowledge):** The server, upon receiving the SYN segment, responds with a SYN-ACK segment. This segment contains its own ISN and acknowledges the client's ISN by incrementing it by 1.
    *   **Purpose:** To acknowledge the client's SYN and also initiate its own sequence numbers for the connection.
    *   **Flags:** SYN flag is set to 1, ACK flag is set to 1.
    *   **Acknowledgement Number:** `Client's ISN + 1`

3.  **ACK (Acknowledge):** The client receives the SYN-ACK and sends a final ACK segment back to the server. This segment acknowledges the server's SYN.
    *   **Purpose:** To acknowledge the server's SYN and complete the connection establishment.
    *   **Flag:** ACK flag is set to 1.
    *   **Acknowledgement Number:** `Server's ISN + 1`

**Example:**
*   Client sends SYN (Seq=100)
*   Server receives SYN, sends SYN-ACK (Seq=200, Ack=101)
*   Client receives SYN-ACK, sends ACK (Seq=101, Ack=201)

**Important Point:** The three-way handshake ensures that both parties have agreed upon starting sequence numbers, which is crucial for reliable data transfer and reassembly of segments in the correct order. (Kurose & Ross, Chapter 3)

#### 1.2 Connection Termination (Four-Way Handshake)

Closing a TCP connection also involves a handshake, typically a four-way handshake, to ensure that both parties have finished sending data and acknowledge the closing.

1.  **FIN (Finish):** One side (e.g., client) decides to close the connection and sends a FIN segment.
2.  **ACK:** The other side (server) receives the FIN and sends an ACK segment acknowledging it. The server may still have data to send.
3.  **FIN:** Once the server has finished sending data, it also sends a FIN segment.
4.  **ACK:** The client receives the server's FIN and sends a final ACK segment.

**Example:**
*   Client sends FIN (Seq=500)
*   Server receives FIN, sends ACK (Ack=501)
*   Server sends FIN (Seq=700)
*   Client receives FIN, sends ACK (Ack=701)

---

### 2. TCP Segment Structure

A TCP segment is the unit of data exchanged between TCP entities. It carries control information and application data.

**Key Fields in a TCP Segment Header:**

| Field               | Size (bytes) | Description                                                                                                   |
| :------------------ | :----------- | :------------------------------------------------------------------------------------------------------------ |
| **Source Port**     | 2            | Identifies the sending application process.                                                                   |
| **Destination Port**| 2            | Identifies the receiving application process.                                                                 |
| **Sequence Number** | 4            | The sequence number of the first byte of data in this segment (for stream of bytes).                          |
| **Acknowledgement Number** | 4            | If the ACK flag is set, this field contains the sequence number of the next byte the sender expects to receive. |
| **Data Offset**     | 4 bits       | Specifies the number of 32-bit words in the TCP header. (Indicates the start of the data field).              |
| **Reserved**        | 6 bits       | Reserved for future use.                                                                                      |
| **Flags**           | 6 bits       | Control bits that indicate the purpose of the segment (e.g., SYN, ACK, FIN, RST, PSH, URG).                     |
| **Window Size**     | 2            | The number of bytes the receiver is willing to accept, starting from the acknowledgement number. (Flow Control) |
| **Checksum**        | 2            | Used for error checking of the header and data.                                                               |
| **Urgent Pointer**  | 2            | If the URG flag is set, this points to the urgent data.                                                       |
| **Options**         | Variable     | Optional fields, such as Maximum Segment Size (MSS).                                                          |
| **Padding**         | Variable     | Ensures the header ends on a 32-bit boundary.                                                                 |

**(Source: Forouzan, Chapter 21; Kurose & Ross, Chapter 3)**

**Example:**
A TCP segment carrying data from a web server to a browser might look like this:
*   **Source Port:** 80 (HTTP)
*   **Destination Port:** 50000 (Client's ephemeral port)
*   **Sequence Number:** 1200 (This segment starts with the 1200th byte of data)
*   **Acknowledgement Number:** 4501 (The receiver is expecting the 4501st byte next)
*   **Flags:** ACK (0x10, decimal 16) - Indicates an acknowledgment is being sent.
*   **Window Size:** 8192 (The receiver can accept 8192 more bytes)

**Important Point:** The sequence and acknowledgment numbers are crucial for TCP's reliability. They allow the receiver to reorder out-of-order segments and detect lost segments.

---

### 3. RTT Estimate (Round Trip Time Estimation)

TCP needs to estimate the Round Trip Time (RTT) to effectively manage timeouts for retransmitting lost segments. Estimating RTT helps in setting an appropriate timeout value.

#### 3.1 Basic RTT Measurement

The RTT is measured by recording the time a segment is sent and the time its acknowledgment is received.

**Example:**
*   Segment sent at time `T_send`.
*   Acknowledgement for that segment received at time `T_receive`.
*   `RTT = T_receive - T_send`

#### 3.2 Averaging RTT

Simply using the measured RTT for each segment can lead to erratic timeout values due to variations in network delay. TCP uses averaging to smooth out these variations.

*   **Simple Average:** A basic approach is to take a running average:
    `SampleRTT = T_receive - T_send`
    `EstimatedRTT = alpha * EstimatedRTT + (1 - alpha) * SampleRTT`
    where `alpha` is a smoothing factor (e.g., 0.125).

*   **Exponentially Weighted Moving Average (EWMA):** This is the most common method used by TCP. It gives more weight to recent samples.
    `EstimatedRTT = (1 - beta) * EstimatedRTT + beta * SampleRTT`
    where `beta` is a smoothing factor (e.g., 0.125). This is equivalent to the formula above with `alpha = 1 - beta`.

**Important Point:** A key challenge is that a single acknowledgment might acknowledge multiple segments. TCP uses a **timestamp option** in the TCP header to accurately measure RTT for specific segments. Without timestamps, the acknowledgment might be for a newer segment than the one initially sent, leading to an inaccurate RTT measurement. (Kurose & Ross, Chapter 3)

#### 3.3 Timeout Calculation

Once RTT is estimated, TCP sets a timeout value to determine when to retransmit a segment.

*   **Timeout = `EstimatedRTT` + `4 * RTT_Variance`**

The variance (or deviation) is also tracked to account for variability in RTT. A larger variance suggests more fluctuating delays, requiring a larger buffer around the estimated RTT.

**Example:**
*   Initial `EstimatedRTT` = 1 second.
*   `RTT_Variance` = 0.5 seconds.
*   `Timeout` = 1 + 4 * 0.5 = 3 seconds.

If a new sample RTT is 1.2 seconds, `EstimatedRTT` and `RTT_Variance` are updated. If the new sample RTT is 2.5 seconds, the `EstimatedRTT` will increase significantly, and `RTT_Variance` will also increase.

**Important Point:** The timeout value is critical for TCP's reliability. If the timeout is too short, spurious retransmissions occur. If it's too long, recovery from lost segments is slow.

---

### 4. TCP Flow Control

Flow control is a mechanism used by TCP to prevent a fast sender from overwhelming a slow receiver. It ensures that the sender does not transmit data faster than the receiver can process it.

#### 4.1 The Sliding Window Mechanism

TCP uses a **sliding window** mechanism for flow control. Each TCP segment header includes a **Receive Window** field.

*   **Receive Window (rwnd):** This field indicates the number of bytes that the receiver is currently willing to accept. It represents the size of the receiver's buffer that is available for incoming data.

The sender maintains a **Send Window**, which is the minimum of the receiver's advertised window and the sender's own congestion window (discussed in later modules).

*   **Send Window Size = min( `rwnd`, `cwnd` )**

The sender can send at most `Send Window Size` bytes of unacknowledged data into the network at any given time.

#### 4.2 How it Works

1.  **Receiver Advertises Window:** The receiver advertises its `rwnd` in the `Window Size` field of its TCP segments (typically ACK segments).
2.  **Sender Adjusts Transmission Rate:** The sender uses the advertised `rwnd` to limit the amount of data it sends.
3.  **Window Slides:** As the sender receives acknowledgments, it can slide its sending window forward, allowing it to send more data.

**Example:**
*   Receiver's buffer is 10000 bytes.
*   Sender has sent 3000 bytes and received acknowledgments for the first 1000 bytes.
*   Receiver advertises `rwnd = 10000 - 3000 = 7000` bytes.
*   The sender's sending window is now 7000 bytes. It can send up to 7000 more bytes.
*   If the sender sends 5000 more bytes, it has now sent a total of 1000 + 5000 = 6000 bytes of data.
*   The receiver now has 10000 - 6000 = 4000 bytes of buffer space left. It will advertise `rwnd = 4000` in the next ACK.

**Important Point:** The Receive Window is crucial. A sender must not send more data than the receiver's advertised window. If the window size is advertised as 0, the sender must stop sending data until it receives a non-zero window advertisement. (Forouzan, Chapter 21; Kurose & Ross, Chapter 3)

#### 4.3 Zero Window

If the receiver's buffer becomes full, it advertises a window size of 0. The sender must then stop sending data. To prevent the connection from stalling permanently if the receiver's buffer remains full, the sender periodically sends a small probe segment (e.g., 1 byte of data) to check if the receiver's window has increased.

**Important Point:** The zero-window probe is a critical mechanism to avoid deadlock when the receiver cannot process data.

---

### Learning Outcomes Addressed:

*   **CO1 (K2):** Summarize the principles and components of computer networks... basic concepts of delay analysis... layered network architecture.
    *   This module covers TCP as a key component of the TCP/IP layered architecture. The concept of RTT estimation is directly related to delay analysis. The connection establishment/termination and flow control are core principles of reliable data transfer.
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers.
    *   This module specifically details the functions of the TCP protocol at the Transport Layer: connection management, segment structure, RTT estimation for reliable transfer, and flow control.

---

### Practice Questions:

1.  **What is the purpose of the three-way handshake in TCP?**
    *   **Answer:** To establish a reliable connection by synchronizing sequence numbers and ensuring both sender and receiver are ready to exchange data.

2.  **Explain the role of the Sequence Number and Acknowledgement Number fields in a TCP segment.**
    *   **Answer:** The Sequence Number tracks the byte order of data sent, and the Acknowledgement Number tells the sender which byte the receiver expects next, facilitating reliable, ordered data delivery and detecting lost segments.

3.  **Why does TCP need to estimate RTT? How is it typically done?**
    *   **Answer:** TCP estimates RTT to dynamically set appropriate timeout values for retransmitting lost segments. It's typically done using an Exponentially Weighted Moving Average (EWMA) of measured RTTs.

4.  **Describe the flow control mechanism in TCP. What field is used for this purpose?**
    *   **Answer:** TCP uses a sliding window mechanism for flow control. The "Window Size" field in the TCP header is used by the receiver to advertise how many bytes of data it can currently accept, preventing the sender from overwhelming the receiver.

5.  **Consider the following scenario:**
    *   A client sends a SYN segment with Sequence Number 1000.
    *   The server responds with a SYN-ACK segment with Sequence Number 5000 and Acknowledgement Number 1001.
    *   The client then sends an ACK segment. What will be the Sequence Number and Acknowledgement Number in this ACK segment?
    *   **Answer:** Sequence Number: 1001, Acknowledgement Number: 5001.

6.  **What happens when a TCP receiver advertises a window size of 0? How does the sender handle this situation?**
    *   **Answer:** When the window size is 0, the sender must stop sending data. To avoid deadlock, the sender periodically sends probe segments to check if the receiver's window has increased.

---

### Important Points to Remember:

*   **Connection-Oriented:** TCP establishes a logical connection before data transfer (three-way handshake).
*   **Reliability:** TCP ensures reliable delivery through sequence numbers, acknowledgments, and retransmissions.
*   **Ordered Delivery:** Sequence numbers allow the receiver to reassemble data in the correct order.
*   **Flow Control:** The sliding window mechanism, using the `Window Size` field, prevents sender overload of the receiver.
*   **RTT Estimation:** EWMA is used to dynamically adjust timeout values for retransmissions.
*   **Segment Header:** Key fields include Source/Destination Ports, Sequence/Acknowledgement Numbers, Flags, and Window Size.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   **Kurose, J. F., & Ross, K. W. (2017).** *Computer Networking: A Top-Down Approach Featuring the Internet* (Sixth Edition). Pearson. (Primarily Chapters 3)
*   **Forouzan, B. A. (2008).** *Data Communications and Networking* (Fourth Edition). Tata McGraw-Hill. (Primarily Chapters 21)
*   **Peterson, L. L., & Davie, B. S.** *Computer Networks – A Systems Approach*. Morgan Kauffman.
*   **Tanenbaum, A. S., & Wetherall, D. J.** *Computer Networks*. Pearson.

---