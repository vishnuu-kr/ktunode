---
title: "TCP protocol"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36498"
status: "completed"
scrapedAt: "2026-05-23T16:20:26.430Z"
---
# Computer Network Systems - Module 4: Transport Service - TCP Protocol

This module focuses on the Transport Layer, specifically the Transmission Control Protocol (TCP). We will explore the services TCP provides to upper layers and how it achieves reliable and efficient data transfer.

---

## Module 4: Transport Service – Services Provided to the Upper Layers

### 4.1 Introduction to the Transport Layer

The Transport Layer is the fourth layer in the OSI model and the seventh layer in the TCP/IP model. Its primary role is to provide end-to-end communication services for applications. It acts as a bridge between the application layer and the network layer.

**Key Functions of the Transport Layer:**

*   **Process-to-Process Delivery:** Ensures that data is delivered to the correct application process running on the destination host. This is achieved through **port numbers**.
*   **Multiplexing and Demultiplexing:** Allows multiple applications on a host to share the network connection and ensures that data from different applications is delivered to the correct process at the destination.
*   **Connection Management:** Establishes, maintains, and terminates connections between communicating processes.
*   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
*   **Error Control:** Ensures that data arrives at the destination without errors and in the correct order.
*   **Congestion Control:** Manages network traffic to prevent congestion, which can degrade network performance.

**Services Provided to Upper Layers:**

The transport layer can provide two types of services to the upper layers:

1.  **Connection-Oriented Service:** Provides reliable, ordered, and error-checked delivery of a stream of bytes. This is the service provided by TCP.
2.  **Connectionless Service:** Provides unreliable, unordered, and error-checked delivery of individual datagrams. This is the service provided by UDP (User Datagram Protocol).

*(Refer to Tanenbaum, 5th Ed., Chapter 6: Transport Layer; Forouzan, 5th Ed., Chapter 14: Transport Layer)*

---

## 4.2 Transmission Control Protocol (TCP)

TCP is the core protocol of the TCP/IP suite, providing a reliable, connection-oriented, stream-based communication service. It is designed to handle the complexities of network communication, ensuring that data is delivered accurately and efficiently, even in the presence of network errors and congestion.

### 4.2.1 Key Concepts and Definitions

*   **Connection-Oriented:** Before data transfer can begin, TCP establishes a logical connection between the sender and receiver. This connection involves a negotiation process to agree on parameters like sequence numbers and window sizes.
*   **Stream-Based:** TCP treats data as a continuous stream of bytes, rather than discrete messages. It handles the segmentation and reassembly of this stream into packets (segments).
*   **Reliable Delivery:** TCP guarantees that all data sent will arrive at the destination, and in the correct order, without corruption. It uses acknowledgments (ACKs) and retransmissions to achieve reliability.
*   **Full-Duplex:** TCP allows data to be sent and received simultaneously in both directions over a single connection.
*   **Port Numbers:** TCP uses port numbers to differentiate between various applications running on a host. Each application process is assigned a unique port number.
    *   **Well-known ports (0-1023):** Reserved for common services like HTTP (80), FTP (21), SSH (22), SMTP (25), DNS (53).
    *   **Registered ports (1024-49151):** Assigned to specific applications by IANA.
    *   **Dynamic/Private ports (49152-65535):** Used for ephemeral port assignments.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2: TCP; Forouzan, 5th Ed., Chapter 14.1: TCP)*

### 4.2.2 TCP Operation

#### 4.2.2.1 Connection Establishment: The Three-Way Handshake

TCP uses a three-way handshake to establish a reliable connection. This process ensures that both the sender and receiver are ready to communicate and synchronizes their initial sequence numbers.

**Steps:**

1.  **SYN (Synchronize):** The client (initiator) sends a TCP segment with the SYN flag set to 1 and an initial sequence number (ISN). This segment requests a connection.
    *   Example: Client sends `SYN, Seq=X`
2.  **SYN-ACK (Synchronize-Acknowledge):** The server receives the SYN segment, allocates resources for the connection, and sends back a TCP segment with both the SYN and ACK flags set to 1. The ACK number is the client's ISN + 1, and the server's ISN is also included.
    *   Example: Server sends `SYN, ACK, Seq=Y, Ack=X+1`
3.  **ACK (Acknowledge):** The client receives the SYN-ACK segment, sends an ACK segment to the server with the ACK flag set to 1. The ACK number is the server's ISN + 1. The client's sequence number is now ISN + 1.
    *   Example: Client sends `ACK, Seq=X+1, Ack=Y+1`

**Why three steps?**

*   The first SYN ensures the client can send data.
*   The second SYN-ACK ensures the server can send data and acknowledges the client's SYN.
*   The third ACK ensures the client can acknowledge the server's SYN.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.1: Connection Establishment; Forouzan, 5th Ed., Chapter 14.1.1: Process-to-Process Delivery: Connection Establishment)*

#### 4.2.2.2 Data Transfer

Once a connection is established, data transfer begins. TCP segments data into packets and adds sequence numbers and acknowledgment numbers.

**Key Fields in a TCP Segment:**

*   **Source Port:** The port number of the sending application.
*   **Destination Port:** The port number of the receiving application.
*   **Sequence Number:** A 32-bit number that uniquely identifies the position of the first byte of data in the segment within the overall byte stream.
*   **Acknowledgment Number:** A 32-bit number that indicates the sequence number of the *next* byte the sender of the acknowledgment expects to receive. This implies all bytes up to (Acknowledgment Number - 1) have been received correctly.
*   **Header Length:** Specifies the size of the TCP header in 32-bit words.
*   **Flags:** Control bits that indicate the purpose of the segment:
    *   **URG:** Urgent Pointer field is significant.
    *   **ACK:** Acknowledgment field is significant.
    *   **PSH:** Push function; the receiver should deliver the data to the application as soon as possible.
    *   **RST:** Reset the connection.
    *   **SYN:** Synchronize sequence numbers.
    *   **FIN:** No more data from the sender.
*   **Window Size:** A 16-bit field used for flow control. It indicates the number of bytes that the receiver is willing to accept.
*   **Checksum:** Used for error detection in the TCP header and data.
*   **Urgent Pointer:** Used when the URG flag is set to indicate the position of urgent data.
*   **Options:** Used for additional features like Maximum Segment Size (MSS), Timestamps.
*   **Data:** The actual application data.

**Reliability Mechanisms:**

*   **Sequence Numbers:** Each byte of data is assigned a sequence number. This allows the receiver to reorder segments that arrive out of order and detect missing segments.
*   **Acknowledgments (ACKs):** The receiver sends ACKs to confirm the receipt of data. An ACK number indicates the next expected byte.
*   **Retransmission:** If the sender does not receive an ACK for a segment within a certain timeout period, it assumes the segment was lost and retransmits it.
*   **Cumulative Acknowledgments:** TCP typically uses cumulative ACKs. An ACK number `N` means all bytes up to `N-1` have been received. This is more efficient than acknowledging each segment individually.
*   **Fast Retransmit:** If the sender receives multiple duplicate ACKs (typically three), it infers that the segment following the acknowledged one has been lost and retransmits it without waiting for the timeout.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.2: TCP Operation; Forouzan, 5th Ed., Chapter 14.1.2: Process-to-Process Delivery: Data Transfer)*

#### 4.2.2.3 Flow Control

Flow control prevents a fast sender from overwhelming a slow receiver. TCP uses a **sliding window** mechanism for flow control.

*   **Receive Window (rwnd):** The receiver advertises its available buffer space, known as the receive window, in the `Window Size` field of TCP segments.
*   **Sender's Window:** The sender maintains a sending window, which is the range of sequence numbers it can send without acknowledgment. This window is limited by the receiver's advertised window.
*   **Sliding:** As the sender transmits data and receives ACKs, it slides its window forward. The window size can dynamically adjust based on the receiver's advertised window.
*   **Silly Window Syndrome:** A problem where either the sender or receiver advertises a very small window, leading to inefficient data transfer. TCP employs mechanisms like **Clark's Algorithm** (sender-side) and **Nagle's Algorithm** (sender-side) to mitigate this.

    *   **Nagle's Algorithm:** Combines small amounts of outgoing data into a single TCP segment, especially when the receiver's window is open. It avoids sending tiny packets, improving efficiency.
    *   **Clark's Algorithm (Delayed ACK):** The receiver delays sending an ACK for a short period, hoping to piggyback it on a data segment sent back to the sender. This also helps avoid small segments and improves efficiency.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.3: TCP: Flow Control; Forouzan, 5th Ed., Chapter 14.1.3: Process-to-Process Delivery: Flow Control)*

#### 4.2.2.4 Congestion Control

Congestion control is crucial for maintaining network stability and performance. TCP employs several algorithms to prevent and mitigate network congestion.

*   **Congestion Window (cwnd):** The sender maintains a congestion window, which is an additional limit on the number of bytes that can be in transit. The actual amount of data the sender can transmit is the minimum of the receiver's advertised window (`rwnd`) and the sender's congestion window (`cwnd`).
*   **Algorithms:**
    *   **Slow Start:** When a connection begins or after a timeout, `cwnd` starts small (e.g., 1-2 MSS) and doubles with each successful round-trip time (RTT) until a threshold is reached. This allows the sender to quickly probe the network's capacity.
    *   **Congestion Avoidance:** Once `cwnd` reaches the slow start threshold, it increases more gradually, typically by 1 MSS per RTT. This phase aims to add data to the network cautiously.
    *   **Congestion Detection:** Congestion is typically detected by packet loss, indicated by timeouts or duplicate ACKs.
    *   **Fast Recovery:** When congestion is detected via duplicate ACKs (not a timeout), TCP reduces `cwnd` by half and enters congestion avoidance. It then continues to transmit data. This avoids the drastic reduction in throughput that occurs with a timeout.
    *   **Timeout-Based Retransmission:** If a timeout occurs, it's a strong indication of severe congestion. TCP drastically reduces `cwnd` (often to 1 MSS), resets the slow start threshold to half the current `cwnd`, and restarts the slow start phase.

**Key Metrics:**

*   **Maximum Segment Size (MSS):** The largest amount of data TCP can send in a single segment.
*   **Round-Trip Time (RTT):** The time it takes for a segment to travel from the sender to the receiver and for the acknowledgment to return to the sender. TCP dynamically estimates RTT.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.4: TCP: Congestion Control; Forouzan, 5th Ed., Chapter 14.1.4: Process-to-Process Delivery: Congestion Control)*

#### 4.2.2.5 Connection Termination: The Four-Way Handshake

TCP connections are terminated gracefully to ensure all data is exchanged before closing.

**Steps:**

1.  **FIN (Finish):** One side (say, the client) decides to close the connection. It sends a TCP segment with the FIN flag set to 1.
    *   Example: Client sends `FIN, Seq=X`
2.  **ACK:** The other side (server) receives the FIN and sends an ACK segment acknowledging it.
    *   Example: Server sends `ACK, Seq=Y, Ack=X+1`
    *   At this point, the server can still send data if it hasn't finished.
3.  **FIN:** Once the server has finished sending data, it also sends a FIN segment.
    *   Example: Server sends `FIN, Seq=Y`
4.  **ACK:** The client receives the server's FIN and sends a final ACK segment.
    *   Example: Client sends `ACK, Seq=X+1, Ack=Y+1`
    *   The client waits for a timeout (e.g., 2 * Maximum Segment Lifetime - MSL) to ensure the final ACK is received before fully closing.

**Why four steps?**

Because TCP is full-duplex, each side must separately acknowledge the end of its data transmission. The first FIN indicates the end of data from one side, and the second FIN indicates the end of data from the other side.

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.5: TCP: Connection Termination; Forouzan, 5th Ed., Chapter 14.1.5: Process-to-Process Delivery: Connection Termination)*

### 4.2.3 TCP Header Format

The TCP header is typically 20 bytes long but can be extended with options.

```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                     Acknowledgment Number                     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Data |   | | | | | | | | | | | | | | | | | | | | | | | | | |
| Offset|Res|C|E|U|A|P|S|F| | | | | | | | | | | | | | | | | | |
|       |   |O|M|R|C|S|Y|I| | | | | | | | | | | | | | | | | | |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Window Size                           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          Checksum                           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Urgent Pointer                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                           Data...                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

*(Refer to Tanenbaum, 5th Ed., Chapter 6.2.6: TCP Header Format; Forouzan, 5th Ed., Chapter 14.1.6: TCP Header Format)*

---

## Alignment with Course Outcomes

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   TCP is a protocol operating at the Transport Layer, a crucial layer in the layered architecture. Understanding TCP helps explain how reliable communication is achieved across a network.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   While TCP operates at a higher layer, its performance is influenced by the reliability and characteristics of the underlying Data Link and Physical layers.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   TCP's congestion control algorithms are a key part of achieving good Quality of Service (QoS). This section directly addresses congestion control.
*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   This entire topic is dedicated to explaining the services provided by the Transport Layer (specifically TCP) to the Application Layer. It covers reliable data transfer, process-to-process communication, flow control, and error control.

---

## Important Points to Remember

*   **TCP is connection-oriented and stream-based.**
*   **Three-way handshake** for connection establishment (SYN, SYN-ACK, ACK).
*   **Four-way handshake** for connection termination (FIN, ACK, FIN, ACK).
*   **Sequence numbers** for ordering and reliability.
*   **Acknowledgments (ACKs)** and **cumulative ACKs** for confirming receipt.
*   **Retransmission** of lost segments.
*   **Flow control** using the **sliding window** mechanism and advertised `Window Size`.
*   **Congestion control** using **slow start**, **congestion avoidance**, and **fast recovery** to manage network load.
*   **Port numbers** are essential for **process-to-process delivery**.
*   The **TCP header** contains vital information for managing the connection and data transfer.
*   TCP provides **reliable**, **ordered**, and **error-checked** delivery.

---

## Practice Questions and Answers

**Question 1:** What are the two main types of services provided by the Transport Layer?
**Answer:** The two main types of services are connection-oriented service (provided by TCP) and connectionless service (provided by UDP).

**Question 2:** Describe the purpose of the three-way handshake in TCP.
**Answer:** The three-way handshake is used to establish a reliable connection between two hosts. It ensures that both parties are ready to communicate and synchronizes their initial sequence numbers. The steps involve SYN, SYN-ACK, and ACK.

**Question 3:** How does TCP ensure reliable data transfer?
**Answer:** TCP ensures reliable data transfer through several mechanisms: sequence numbers to order segments, acknowledgments to confirm receipt, retransmission of lost segments (triggered by timeouts or duplicate ACKs), and error detection using checksums.

**Question 4:** Explain the concept of a sliding window in TCP flow control.
**Answer:** The sliding window mechanism allows the sender to transmit multiple segments before receiving an acknowledgment. The receiver advertises its available buffer space (receive window), which limits the amount of data the sender can transmit. As data is acknowledged, the window slides forward.

**Question 5:** What is the primary goal of TCP's congestion control mechanisms?
**Answer:** The primary goal of TCP's congestion control is to prevent the network from becoming overloaded by adjusting the rate at which the sender injects data into the network. This helps maintain network stability and improve overall performance.

**Question 6:** If a TCP sender receives three duplicate ACKs for the same sequence number, what is it likely to do, and why?
**Answer:** If a TCP sender receives three duplicate ACKs for the same sequence number, it is likely to perform a "fast retransmit." This means it will retransmit the segment that it believes is lost without waiting for a retransmission timeout. This is because duplicate ACKs indicate that the receiver has received subsequent segments, implying the missing segment has been dropped.

---

This comprehensive set of notes covers the essential aspects of the TCP protocol as it relates to the Transport Layer services, aligning with the provided course outcomes and learning objectives. Remember to cross-reference with your textbooks for a deeper understanding and additional examples.
