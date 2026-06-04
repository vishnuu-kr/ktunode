---
title: "Transport Layer:-"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c939"
status: "completed"
scrapedAt: "2026-05-20T17:02:50.489Z"
---
# COMPUTER NETWORKS: Module 4: Transport Layer

## Topic: Transport Layer

### 1. Introduction to the Transport Layer

The Transport Layer is the **fourth layer** in the TCP/IP model and the **fifth layer** in the OSI model. Its primary responsibility is to provide **logical communication** between applications running on different hosts. While the Network Layer handles host-to-host delivery of packets, the Transport Layer deals with **process-to-process delivery** of data.

**Key Concepts:**

*   **End-to-End Communication:** The Transport Layer establishes a logical connection between the source and destination processes, regardless of the underlying network infrastructure.
*   **Process-to-Process Delivery:** It ensures that data is delivered to the correct application process running on the destination host. This is achieved using **port numbers**.
*   **Segmentation and Reassembly:** Large chunks of data from the application layer are divided into smaller segments by the Transport Layer at the source. These segments are then reassembled into the original data at the destination.
*   **Connection Management:** For connection-oriented protocols, the Transport Layer manages the establishment, maintenance, and termination of connections.
*   **Reliability:** It provides mechanisms to ensure that data is delivered without errors, in the correct order, and without loss.
*   **Flow Control:** It manages the rate at which data is sent to prevent the sender from overwhelming the receiver.
*   **Congestion Control:** It helps to manage the traffic on the network to prevent congestion and ensure efficient data delivery.

**Port Numbers:**

*   Port numbers are **16-bit integers** used to identify specific processes or services running on a host.
*   A host can have multiple applications running simultaneously, each with its own unique port number.
*   The combination of an IP address and a port number creates a **socket**, which uniquely identifies a specific process on a specific host.
*   **Well-known ports (0-1023):** Reserved for standard services like HTTP (port 80), FTP (port 21), DNS (port 53).
*   **Registered ports (1024-49151):** Used for applications registered with IANA.
*   **Dynamic/Private ports (49152-65535):** Used for temporary connections or applications that don't need to be registered.

---

### 2. Transport Layer Protocols

The Transport Layer primarily consists of two major protocols:

*   **Transmission Control Protocol (TCP)**
*   **User Datagram Protocol (UDP)**

#### 2.1. User Datagram Protocol (UDP)

UDP is a **connectionless, unreliable, and lightweight** transport layer protocol. It offers minimal overhead and is suitable for applications where speed is prioritized over reliability.

**Key Features of UDP:**

*   **Connectionless:** No handshake required to establish a connection. Data is sent as datagrams without prior setup.
*   **Unreliable:** No guarantees of delivery, order, or duplicate protection. Datagrams may be lost, duplicated, or arrive out of order.
*   **Datagram Service:** Data is sent in discrete packets called datagrams.
*   **Minimal Overhead:** Smaller header size compared to TCP, leading to faster transmission.
*   **No Flow Control or Congestion Control:** Applications using UDP must implement these mechanisms if needed.
*   **Best Effort Delivery:** UDP tries its best to deliver datagrams but offers no assurance.

**UDP Header Format:**

| Source Port (16 bits) | Destination Port (16 bits) | Length (16 bits) | Checksum (16 bits) |
| :-------------------- | :------------------------- | :--------------- | :----------------- |

*   **Source Port:** Identifies the sending process.
*   **Destination Port:** Identifies the receiving process.
*   **Length:** The total length of the UDP datagram (header + data).
*   **Checksum:** Optional field for error detection. If set to zero, error detection is disabled.

**Applications Using UDP:**

*   **DNS (Domain Name System):** For quick lookups of domain names to IP addresses.
*   **DHCP (Dynamic Host Configuration Protocol):** For obtaining IP addresses.
*   **VoIP (Voice over IP):** Real-time voice communication where slight data loss is acceptable.
*   **Online Gaming:** Where low latency is critical.
*   **Streaming Media:** Where some packet loss might be tolerated for smoother playback.

**Example Scenario:**

Imagine sending a quick message to a friend. You just type and send it. If a word or two gets garbled, your friend can likely still understand the main message. This is analogous to UDP – fast, but not guaranteed to be perfect.

---

#### 2.2. Transmission Control Protocol (TCP)

TCP is a **connection-oriented, reliable, and feature-rich** transport layer protocol. It guarantees the delivery of data in the correct order and without errors.

**Key Features of TCP:**

*   **Connection-Oriented:** Establishes a reliable connection before data transfer using a **three-way handshake**.
*   **Reliable Delivery:** Guarantees that data will be delivered to the destination process.
    *   **Sequencing:** Segments are numbered so they can be reassembled in the correct order at the destination.
    *   **Acknowledgements (ACKs):** The receiver sends acknowledgments for received segments.
    *   **Retransmission:** If an ACK is not received within a timeout period, the sender retransmits the segment.
*   **Flow Control:** Prevents the sender from overwhelming the receiver by using a **sliding window** mechanism. The receiver advertises its available buffer space.
*   **Congestion Control:** Manages the rate of data transmission to avoid overwhelming the network. It uses algorithms like **slow start**, **congestion avoidance**, **fast retransmit**, and **fast recovery**.
*   **Full-Duplex Communication:** Data can be sent and received simultaneously in both directions.
*   **Stream Delivery:** Data is treated as a continuous stream of bytes, and TCP handles the segmentation and reassembly.

**TCP Header Format:**

| Source Port (16 bits) | Destination Port (16 bits) | Sequence Number (32 bits) | Acknowledgment Number (32 bits) |
| :-------------------- | :------------------------- | :------------------------ | :------------------------------ |
| Data Offset (4 bits)  | Reserved (6 bits)          | Flags (6 bits)            | Window Size (16 bits)           |
| Checksum (16 bits)    | Urgent Pointer (16 bits)   | Options (Variable)        | Padding (Variable)              |
| Data (Variable)       |                            |                           |                                 |

*   **Source Port & Destination Port:** Identifies the sending and receiving processes.
*   **Sequence Number:** The byte number of the first data byte in the segment.
*   **Acknowledgment Number:** The next expected sequence number from the sender.
*   **Data Offset:** The size of the TCP header in 32-bit words.
*   **Flags:** Control bits that indicate the purpose of the segment (SYN, ACK, FIN, RST, PSH, URG).
    *   **SYN:** Synchronize sequence numbers (used to initiate a connection).
    *   **ACK:** Acknowledgment (confirms receipt of data).
    *   **FIN:** Finish (used to terminate a connection).
    *   **RST:** Reset (abruptly terminates a connection).
    *   **PSH:** Push (indicates that the sender wants the receiver to push the data to the application immediately).
    *   **URG:** Urgent (indicates that the data in this segment is urgent).
*   **Window Size:** The number of data bytes the receiver is willing to accept.
*   **Checksum:** Used for error detection in the header and data.
*   **Urgent Pointer:** Points to the urgent data within the segment.
*   **Options:** Additional features like Maximum Segment Size (MSS).

**TCP Three-Way Handshake (Connection Establishment):**

1.  **Client to Server: SYN** (Client sends a segment with the SYN flag set, containing its initial sequence number).
2.  **Server to Client: SYN-ACK** (Server responds with a segment that has both SYN and ACK flags set. The ACK number is the client's sequence number + 1, and the server sends its own initial sequence number).
3.  **Client to Server: ACK** (Client sends an ACK segment to confirm the server's SYN-ACK. The ACK number is the server's sequence number + 1).

**TCP Connection Termination (Four-Way Handshake):**

1.  **Sender A to Receiver B: FIN** (One side initiates termination).
2.  **Receiver B to Sender A: ACK** (The other side acknowledges the FIN).
3.  **Receiver B to Sender A: FIN** (The other side initiates its termination).
4.  **Sender A to Receiver B: ACK** (The first side acknowledges the second FIN).

**Applications Using TCP:**

*   **HTTP/HTTPS:** For web browsing.
*   **FTP:** For file transfer.
*   **SMTP/POP3/IMAP:** For email.
*   **SSH:** For secure remote login.
*   **Telnet:** For remote terminal access.

**Example Scenario:**

Imagine sending a large important document via registered mail. You want to ensure it arrives, and in the correct order, with no missing pages. You might get a receipt when it's sent, and a confirmation of delivery. This is like TCP – reliable, with checks and balances.

---

### 3. Reliable Data Transfer

The Transport Layer, particularly TCP, employs various mechanisms to ensure reliable data transfer.

**Key Mechanisms:**

*   **Sequencing:** Each segment is assigned a sequence number to allow reassembly in the correct order.
*   **Acknowledgements (ACKs):** The receiver sends acknowledgments to the sender to indicate successful receipt of data.
*   **Retransmission:** If the sender does not receive an ACK for a sent segment within a specified timeout period, it assumes the segment was lost and retransmits it.
*   **Flow Control (Sliding Window):**
    *   The sender maintains a **send window**, which represents the range of sequence numbers it can send.
    *   The receiver maintains a **receive window**, which represents the amount of buffer space available.
    *   The sender's effective window is the minimum of its send window and the receiver's advertised window.
    *   As data is received and acknowledged, the window "slides" forward, allowing more data to be sent.

**Example of Sliding Window:**

Let's say the receiver's window size is 4, and the sender has sent segments 1, 2, and 3.

*   **Initial State:** Sender Window: {1, 2, 3, 4}, Receiver Window: 4 bytes.
*   **Sender sends segments 1, 2, 3:** Sender has sent 3 bytes.
*   **Receiver receives segment 1 and sends ACK for 1:** Receiver now has buffer space for 1 more byte. The window slides.
*   **Receiver advertises Window Size: 1.**
*   **Sender receives ACK for 1:** Sender can now send up to sequence number 1 + advertised window size = 1 + 1 = 2. (This is a simplified explanation; actual windows are byte-based).
    *   More accurately, if the sender's next expected byte is 1, and the receiver advertises a window of 4, the sender can send bytes up to 1 + 4 - 1 = 4. As it sends and receives ACKs, the window slides.

---

### 4. Flow Control

Flow control prevents a fast sender from overwhelming a slow receiver.

**Mechanisms:**

*   **Sliding Window (as described above):** The receiver advertises its available buffer space (window size) to the sender. The sender limits the amount of unacknowledged data it sends to this window size.

**Example:**

A sender is sending data at a very high rate. The receiver's buffer is small, and it cannot process data as quickly as the sender is sending it. If there were no flow control, the receiver's buffer would overflow, leading to data loss. Flow control ensures the sender slows down when the receiver indicates it's getting full.

---

### 5. Congestion Control

Congestion control aims to prevent network collapse by managing the rate of data injection into the network. TCP employs several algorithms for this.

**Key Concepts and Algorithms:**

*   **Congestion Window (cwnd):** A sender-limited window that represents the amount of data the sender can have in transit at any given time, based on the perceived congestion in the network. The actual amount of data in transit is the minimum of the congestion window and the receiver's advertised window.
*   **Slow Start:**
    *   Starts with a small `cwnd` (e.g., 1 Maximum Segment Size - MSS).
    *   For each ACK received, `cwnd` is doubled.
    *   This allows the sender to quickly probe the network capacity.
    *   Typically continues until `cwnd` reaches a **slow start threshold (ssthresh)**.
*   **Congestion Avoidance:**
    *   Once `cwnd` exceeds `ssthresh`, it increases additively, typically by 1 MSS per round-trip time (RTT).
    *   This is a more gradual increase to avoid causing congestion.
*   **Congestion Detection:**
    *   **Timeout:** If an ACK is not received within the timeout period, it's assumed that congestion occurred, and the segment was lost.
    *   **Triple Duplicate ACKs:** If the sender receives three duplicate ACKs for the same segment, it infers that the segment immediately following the acknowledged one was lost, but subsequent segments might have arrived.
*   **Fast Retransmit:** Upon receiving three duplicate ACKs, the sender immediately retransmits the missing segment without waiting for the timeout.
*   **Fast Recovery:** After a fast retransmit, the sender sets `ssthresh` to half of the current `cwnd`, sets `cwnd` to `ssthresh` plus the number of duplicate ACKs, and then enters congestion avoidance. This avoids going back to slow start immediately.

**Illustrative Example of Congestion Control:**

Imagine a highway with many cars (data packets).

*   **Slow Start:** When the highway opens, cars start slowly and then accelerate quickly as they see there's space.
*   **Congestion Avoidance:** As the highway gets busy, cars move at a more steady pace, not accelerating too rapidly.
*   **Congestion Detection (Timeout):** A major accident blocks the highway. Cars stop moving. If your car is stuck, you might eventually give up or call for help. (Sender times out).
*   **Congestion Detection (Triple Duplicate ACKs):** Cars are stuck, but a few managed to get past the bottleneck. The toll booth collector (receiver) sees several cars being collected without the car they expected next. They suspect that specific car is stuck. (Receiver sends duplicate ACKs).
*   **Fast Retransmit:** The toll booth collector tells the next car in line (sender) to "skip that missing car and go ahead" instead of waiting for the whole traffic jam to clear.
*   **Fast Recovery:** After the bottleneck is cleared, traffic can resume, but the authorities reduce the speed limit slightly (set `ssthresh` and `cwnd`) to prevent another jam.

---

### 6. Multiplexing and Demultiplexing

The Transport Layer uses port numbers to demultiplex data received from the Network Layer and deliver it to the correct application process. Conversely, it multiplexes data from multiple application processes to send to the Network Layer.

**Multiplexing:**

*   At the sender, the Transport Layer takes data from different application processes (e.g., web browser, email client) and adds its header (including port numbers) to create segments. These segments are then passed to the Network Layer for delivery.

**Demultiplexing:**

*   At the receiver, the Network Layer delivers IP datagrams to the Transport Layer.
*   The Transport Layer examines the destination port number in the received segment's header.
*   Based on the port number, it identifies the target application process and delivers the data to it.

**Example:**

A computer might be running a web server (listening on port 80), an FTP server (port 21), and a DNS client. When incoming packets arrive, the Transport Layer inspects the destination port number in the incoming TCP or UDP segment. If the port is 80, it's delivered to the web server process. If it's 21, it's delivered to the FTP server process.

---

### 7. Learning Outcomes Coverage

*   **Understanding the role of the Transport Layer:** Covered in Section 1 (Introduction).
*   **Differentiating between TCP and UDP:** Covered in Section 2 (Transport Layer Protocols) by detailing their features, headers, and use cases.
*   **Explaining the mechanisms for reliable data transfer (sequencing, acknowledgments, retransmissions):** Covered in Section 3 (Reliable Data Transfer).
*   **Describing flow control and its importance:** Covered in Section 4 (Flow Control).
*   **Explaining congestion control mechanisms (slow start, congestion avoidance, fast retransmit/recovery):** Covered in Section 5 (Congestion Control).
*   **Understanding multiplexing and demultiplexing using port numbers:** Covered in Section 6 (Multiplexing and Demultiplexing).
*   **Identifying applications that use TCP and UDP:** Mentioned within Section 2.

---

### 8. Practice Questions

**Question 1:**
Which of the following is a key responsibility of the Transport Layer?
a) Routing packets between networks
b) Providing end-to-end process-to-process communication
c) Translating domain names to IP addresses
d) Encrypting data for secure transmission

**Question 2:**
What is the primary difference between UDP and TCP in terms of reliability?
a) UDP is reliable, while TCP is unreliable.
b) UDP is connectionless, while TCP is connection-oriented.
c) UDP offers no guarantees of delivery or order, while TCP provides reliable, ordered delivery.
d) TCP uses port numbers, while UDP does not.

**Question 3:**
A 16-bit number used to identify specific applications or services on a host is called a:
a) IP Address
b) MAC Address
c) Port Number
d) Socket Number

**Question 4:**
Which TCP flag is used to initiate a connection?
a) ACK
b) FIN
c) RST
d) SYN

**Question 5:**
If a sender receives three duplicate ACKs for a segment, what TCP mechanism is typically triggered?
a) Timeout and Retransmission
b) Slow Start
c) Fast Retransmit
d) Congestion Avoidance

**Question 6:**
Explain the purpose of the sliding window mechanism in TCP.

**Question 7:**
Give two examples of applications that typically use UDP and explain why.

**Question 8:**
Describe the three steps involved in a TCP three-way handshake.

---

### 9. Answers to Practice Questions

**Answer 1:**
b) Providing end-to-end process-to-process communication

**Answer 2:**
c) UDP offers no guarantees of delivery or order, while TCP provides reliable, ordered delivery.

**Answer 3:**
c) Port Number

**Answer 4:**
d) SYN

**Answer 5:**
c) Fast Retransmit

**Answer 6:**
The sliding window mechanism in TCP is used for **flow control**. It allows the receiver to advertise its available buffer space (the "window size") to the sender. The sender then limits the amount of unacknowledged data it sends to this window size, preventing the sender from overwhelming the receiver's buffer and causing data loss. As data is acknowledged and processed, the window "slides" forward, allowing the sender to send more data.

**Answer 7:**
Two examples of applications that typically use UDP are:
1.  **DNS (Domain Name System):** DNS queries and responses are small and need to be fast. If a DNS request is lost, the application can simply retransmit it. The overhead of establishing a TCP connection for each quick lookup would be inefficient.
2.  **VoIP (Voice over IP):** Real-time voice communication prioritizes low latency. Some packet loss is acceptable and may manifest as minor audio glitches, which are less disruptive than the delays caused by TCP's retransmission mechanisms. If a packet is lost, the conversation can continue with the next packet.

**Answer 8:**
The TCP three-way handshake is used to establish a connection:
1.  **SYN:** The client sends a segment with the SYN flag set to the server, indicating its willingness to connect and providing its initial sequence number.
2.  **SYN-ACK:** The server receives the SYN, acknowledges it by sending back a segment with both SYN and ACK flags set, and provides its own initial sequence number. The acknowledgment number is the client's sequence number + 1.
3.  **ACK:** The client receives the SYN-ACK and sends a final ACK segment back to the server to confirm the connection. The acknowledgment number is the server's sequence number + 1.

---

### 10. Important Points to Remember

*   **Transport Layer = Process-to-Process Delivery.** Network Layer = Host-to-Host Delivery.
*   **Port Numbers** are crucial for demultiplexing and identifying specific applications.
*   **UDP:** Fast, lightweight, connectionless, unreliable. Good for real-time applications where speed > perfect accuracy (DNS, VoIP, Gaming).
*   **TCP:** Reliable, connection-oriented, ordered delivery, flow control, congestion control. Good for applications where data integrity is paramount (Web, Email, File Transfer).
*   **Three-Way Handshake:** SYN -> SYN-ACK -> ACK for TCP connection establishment.
*   **Flow Control:** Prevent receiver overload using receiver's advertised **window size**.
*   **Congestion Control:** Prevent network overload using **congestion window (cwnd)** and algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.
*   **Sequencing and Acknowledgments** are key to TCP's reliability.
*   **Timeout** and **Triple Duplicate ACKs** are signals for packet loss in TCP.
