---
title: "TCP service model"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36497"
status: "completed"
scrapedAt: "2026-05-23T16:20:25.668Z"
---
# Computer Network Systems: Module 4 - Transport Service

## Topic: TCP Service Model

This module focuses on the Transport Layer, specifically the services it provides to the Application Layer. We will delve into the Transmission Control Protocol (TCP) and its service model, a crucial component for reliable and ordered data delivery.

---

### Learning Outcomes Covered:

*   **Understand the fundamental principles of the TCP service model.**
*   **Identify the key features and characteristics of TCP services.**
*   **Recognize the role of TCP in providing reliable data transfer.**
*   **Explain the concept of a virtual circuit and its implications in TCP.**
*   **Differentiate TCP services from other transport layer protocols (e.g., UDP).**
*   **Relate TCP services to the overall layered architecture of computer networks.**

---

### Course Outcomes Alignment:

This topic directly addresses **CO4: Explain the services provided by the transport layer and application layer.** (Knowledge Level: K2). By understanding the TCP service model, students will grasp how the transport layer facilitates communication between applications running on different hosts.

---

### 1. Introduction to the Transport Layer and TCP

The transport layer is the fourth layer in the OSI model and the corresponding layer in the TCP/IP model. Its primary responsibility is to provide **end-to-end communication services** between processes running on different hosts. It acts as a bridge between the upper application layers and the lower network layers.

**Key Function of the Transport Layer:**

*   **Process-to-Process Delivery:** The network layer provides host-to-host delivery. The transport layer enhances this by delivering data to the correct *process* (or application) on the destination host. This is achieved through **port numbers**.
*   **Abstraction of Network Complexity:** The transport layer hides the underlying network's complexities (like unreliable underlying networks or different network types) from the applications.

**TCP (Transmission Control Protocol):**

TCP is one of the two core protocols of the Internet protocol suite, alongside IP (Internet Protocol). It is a **connection-oriented, reliable, byte-stream protocol**.

*   **Connection-Oriented:** Before data transfer, TCP establishes a connection between the sender and receiver. This connection is maintained throughout the communication session and is terminated afterwards.
*   **Reliable:** TCP guarantees that data sent will be received correctly, in the order it was sent, and without duplication. It achieves this through mechanisms like acknowledgments, retransmissions, and sequence numbers.
*   **Byte-Stream Protocol:** TCP treats data as a continuous stream of bytes, rather than discrete messages. Applications send and receive data as a stream.

---

### 2. The TCP Service Model: A Virtual Circuit Approach

TCP provides its services through a model that can be conceptually understood as a **virtual circuit**.

**What is a Virtual Circuit?**

A virtual circuit is a logical path established between two communicating processes. Although the underlying network might use datagrams (packet-switched, connectionless routing), TCP creates the illusion of a dedicated, private line between the sender and receiver.

**Key Characteristics of the TCP Service Model:**

*   **Connection Establishment:** Before any data is exchanged, a connection must be established. This involves a **three-way handshake** to synchronize sequence numbers and establish parameters for the connection.
    *   **Handshake:**
        1.  **SYN (Synchronize):** The client sends a SYN segment with an initial sequence number (ISN).
        2.  **SYN-ACK (Synchronize-Acknowledge):** The server receives the SYN, acknowledges it, and sends its own SYN segment with its ISN.
        3.  **ACK (Acknowledge):** The client receives the SYN-ACK, acknowledges it, and the connection is established.
*   **Connection Termination:** Once data transfer is complete, the connection is gracefully terminated, ensuring all data has been delivered. This typically involves a **four-way handshake** to manage the closing of the connection from both sides.
*   **Reliable Data Transfer:**
    *   **Sequence Numbers:** Each byte of data in the stream is assigned a sequence number. This allows the receiver to reassemble segments in the correct order and detect missing segments.
    *   **Acknowledgments (ACKs):** The receiver sends ACKs to the sender to confirm the receipt of data. ACKs typically cover a cumulative range of bytes received.
    *   **Retransmission:** If the sender does not receive an ACK for a segment within a certain time (timeout), it assumes the segment was lost and retransmits it.
    *   **Flow Control:** TCP uses a sliding window mechanism to prevent a fast sender from overwhelming a slow receiver. The receiver advertises its available buffer space (window size), and the sender can only send up to that amount of unacknowledged data.
*   **Ordered Data Delivery:** Due to sequence numbers, the receiver can buffer out-of-order segments and deliver them to the application in the correct sequence.
*   **Full-Duplex Communication:** Data can flow in both directions simultaneously over the established connection.
*   **Error Detection:** TCP uses a checksum to detect errors in the header and data of segments. If an error is detected, the segment is discarded, and the sender will eventually retransmit it due to a lack of acknowledgment.
*   **Connection State:** Both the sender and receiver maintain state information for each active connection, including sequence numbers, window sizes, and connection status.

---

### 3. Key Concepts and Definitions

*   **Port Number:** A 16-bit number used to identify a specific process or service on a host. Allows multiple applications on a single host to communicate simultaneously.
    *   **Well-known ports (0-1023):** Reserved for common services (e.g., HTTP on port 80, FTP on port 21).
    *   **Registered ports (1024-49151):** Used by specific applications.
    *   **Dynamic/Private ports (49152-65535):** Used for ephemeral connections.
*   **Socket:** The combination of an IP address and a port number. It uniquely identifies a communication endpoint. `Socket = (IP Address, Port Number)`
*   **Sequence Number:** A number assigned to each byte of data in the TCP segment's payload, used for ordering and reliability.
*   **Acknowledgment Number:** Indicates the sequence number of the *next* expected byte from the sender.
*   **Sliding Window:** A mechanism for flow control. The sender maintains a window of bytes that can be sent without acknowledgment, and this window "slides" forward as ACKs are received.
*   **Timeout/Retransmission:** A mechanism to recover from lost segments. The sender starts a timer when sending a segment; if the timer expires before an ACK is received, the segment is retransmitted.
*   **Congestion Control:** TCP also incorporates mechanisms to manage network congestion, preventing the network from becoming overloaded. While this is a broader topic, it's an integral part of TCP's robust service.

---

### 4. How TCP Provides its Services (Mechanisms)

Let's look at how TCP implements its virtual circuit and reliability.

#### 4.1 Connection Establishment (Three-Way Handshake)

*   **Scenario:** Client wants to connect to Server.
*   **Client (Sends SYN):**
    *   Picks an initial sequence number (ISN), say `client_isn`.
    *   Sends a TCP segment with `SYN` flag set and `Seq = client_isn`.
*   **Server (Receives SYN, Sends SYN-ACK):**
    *   Upon receiving the SYN, it acknowledges the client's ISN by sending an ACK with `Ack = client_isn + 1`.
    *   It also picks its own ISN, say `server_isn`.
    *   Sends a TCP segment with `SYN` and `ACK` flags set, `Seq = server_isn`, and `Ack = client_isn + 1`.
*   **Client (Receives SYN-ACK, Sends ACK):**
    *   Upon receiving the SYN-ACK, it acknowledges the server's ISN.
    *   Sends a TCP segment with `ACK` flag set, `Seq = client_isn + 1`, and `Ack = server_isn + 1`.
*   **Result:** The connection is established, and both sides know each other's starting sequence numbers.

#### 4.2 Reliable Data Transfer (Sequence Numbers, ACKs, Retransmissions)

*   **Data Transfer:** The client sends data bytes starting with `Seq = client_isn + 1`. Each segment carries a portion of the data.
*   **Receiver's Role:** The receiver buffers incoming data. When it receives a segment, it checks its sequence number.
    *   If the segment is in order, it acknowledges the received bytes. For example, if it received bytes up to sequence number `X`, it sends an ACK with `Ack = X + 1`.
    *   If the segment is out of order, it might buffer it (depending on the implementation) but typically sends an ACK for the last *in-order* byte received. This cumulative ACK helps the sender track progress.
*   **Sender's Role:** The sender maintains a **sending window**.
    *   When a segment is sent, the sender starts a retransmission timer.
    *   If an ACK arrives before the timer expires, the sender updates its window and removes the acknowledged data.
    *   If the timer expires, the sender **retransmits** the unacknowledged segment.

**Example of Reliability:**

1.  Sender sends Segment 1 (Seq=100, Data=10 bytes). Timer starts.
2.  Receiver receives Segment 1. It sends ACK (Ack=110).
3.  Sender receives ACK (110). It knows bytes 100-109 are delivered. It slides its window.
4.  Sender sends Segment 2 (Seq=110, Data=10 bytes). Timer starts.
5.  Segment 2 is lost. Timer for Segment 2 expires.
6.  Sender retransmits Segment 2.
7.  Receiver receives Segment 2. It sends ACK (Ack=120).
8.  Sender receives ACK (120). It knows bytes 110-119 are delivered.

#### 4.3 Flow Control (Sliding Window)

*   **Receiver's Advertisement:** The receiver, when sending an ACK, also advertises its **receive window size (`rwnd`)**. This `rwnd` indicates how many bytes the receiver's buffer can currently accept.
*   **Sender's Restriction:** The sender can only have outstanding (unacknowledged) data within its **send window**, which is limited by the receiver's advertised `rwnd`.
*   **Dynamic Adjustment:** As the receiver processes data and frees up buffer space, it advertises a larger `rwnd`, allowing the sender to transmit more.

**Example of Flow Control:**

1.  Receiver's buffer can hold 5000 bytes. It advertises `rwnd = 5000`.
2.  Sender sends 5000 bytes of data. Its window is full.
3.  Receiver processes 1000 bytes and frees up buffer space. It advertises `rwnd = 1000`.
4.  Sender receives the ACK indicating 1000 bytes are acknowledged and the `rwnd = 1000`.
5.  Sender can now send another 1000 bytes of data.

#### 4.4 Connection Termination (Four-Way Handshake)

*   **Scenario:** Client wants to close the connection.
*   **Client (Sends FIN):**
    *   Sends a TCP segment with `FIN` flag set. This signals that the client has no more data to send.
*   **Server (Receives FIN, Sends ACK):**
    *   Acknowledges the FIN segment. It might still have data to send to the client.
    *   Sends a TCP segment with `ACK` flag set.
*   **Server (Sends FIN):**
    *   When the server has no more data to send, it also sends a `FIN` segment.
*   **Client (Receives FIN, Sends ACK):**
    *   Acknowledges the server's FIN segment.
*   **Result:** The connection is gracefully closed. There's a waiting period (e.g., `TIME_WAIT` state) to ensure any delayed segments are handled.

---

### 5. Importance and Comparison with UDP

*   **Why TCP?**
    *   When applications require guaranteed delivery, ordered data, and a reliable connection (e.g., web browsing (HTTP), file transfer (FTP), email (SMTP), secure shell (SSH)).
    *   It simplifies application development by handling complex reliability and ordering issues.

*   **Comparison with UDP (User Datagram Protocol):**
    | Feature           | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol)       |
    | :---------------- | :---------------------------------- | :--------------------------------- |
    | **Connection**    | Connection-Oriented                 | Connectionless                     |
    | **Reliability**   | Reliable (ACKs, retransmissions)    | Unreliable (Best Effort)           |
    | **Ordering**      | Ordered Delivery                    | Unordered Delivery                 |
    | **Flow Control**  | Yes (Sliding Window)                | No                                 |
    | **Congestion Ctrl**| Yes                                 | No                                 |
    | **Overhead**      | High (larger header, connection setup) | Low (smaller header, no setup)    |
    | **Speed**         | Slower due to reliability mechanisms | Faster                             |
    | **Data Model**    | Byte Stream                         | Datagram (Message-based)           |
    | **Use Cases**     | Web, Email, File Transfer, SSH      | Streaming Media, DNS, VoIP, Games  |

**Reference (Tanenbaum, 5th ed., Chapter 6):** Tanenbaum thoroughly explains the transport layer, including TCP's role as a reliable, connection-oriented protocol and its mechanisms for reliability, flow control, and congestion control. The concept of the virtual circuit is a good analogy for understanding TCP's service.

**Reference (Forouzan, 5th ed., Chapter 18):** Forouzan details TCP's service model, emphasizing its characteristics like connection-oriented service, reliability, ordered delivery, flow control, and congestion control. The three-way handshake for connection establishment and the mechanisms for handling lost packets (timeouts, retransmissions) are well-explained.

---

### 6. Important Points to Remember

*   **TCP is connection-oriented, reliable, and provides ordered delivery.**
*   **Port numbers are crucial for process-to-process communication.**
*   **The virtual circuit model simplifies the application's view of the network.**
*   **Reliability is achieved through sequence numbers, acknowledgments, and retransmissions.**
*   **Flow control prevents buffer overflow at the receiver using a sliding window.**
*   **Connection establishment (3-way handshake) and termination (4-way handshake) are essential steps.**
*   **TCP has higher overhead than UDP but offers significantly more services.**

---

### 7. Practice Questions and Exercises

**Question 1:** What is the primary difference between the service provided by the Network Layer and the Transport Layer regarding data delivery?
**Answer:** The Network Layer provides host-to-host delivery, while the Transport Layer provides process-to-process delivery using port numbers.

**Question 2:** Explain the purpose of the three-way handshake in TCP.
**Answer:** The three-way handshake establishes a reliable connection between two TCP endpoints. It synchronizes sequence numbers and allows both sides to confirm the readiness for communication.

**Question 3:** How does TCP ensure that data is delivered in the correct order, even if underlying network packets arrive out of order?
**Answer:** TCP uses sequence numbers. Each byte of data is assigned a sequence number. The receiver uses these numbers to reorder segments before delivering them to the application, buffering out-of-order segments as needed.

**Question 4:** Describe the function of the sliding window mechanism in TCP.
**Answer:** The sliding window is used for flow control. The receiver advertises its available buffer space (receive window). The sender is restricted to sending only up to that amount of unacknowledged data, preventing it from overwhelming the receiver.

**Question 5:** Differentiate between TCP and UDP in terms of reliability and connection type.
**Answer:** TCP is connection-oriented and reliable, ensuring data delivery. UDP is connectionless and unreliable, offering best-effort delivery without guarantees.

**Exercise 1:**
Imagine a TCP sender sends a segment with sequence number 500 and 100 bytes of data. The receiver receives this segment correctly and sends an acknowledgment. What would be the acknowledgment number in the ACK segment sent by the receiver? If the next segment sent by the sender has sequence number 600 and contains 50 bytes of data, what would be the sequence number of this new segment?

**Exercise 1 Answer:**
*   The receiver received bytes 500 through 599 (100 bytes starting from 500). The next expected byte is 600. Therefore, the acknowledgment number would be **600**.
*   The next segment sent by the sender, containing 50 bytes of data after the first 100 bytes, would have a sequence number of **600**.

---
This concludes the study notes for the TCP service model. Ensure you refer to your textbooks for more in-depth explanations and examples.
