---
title: "TCP segment header"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36499"
status: "completed"
scrapedAt: "2026-05-23T16:20:27.178Z"
---
This is a fantastic and detailed request! Here are comprehensive study notes on the TCP Segment Header, designed to align with your specified learning outcomes, course outcomes, and textbooks.

---

# Computer Network Systems - Module 4: Transport Service
## Topic: TCP Segment Header

---

### 1. Introduction to the Transport Layer and TCP

The Transport Layer (Layer 4 of the OSI model, or Layer 4 of the TCP/IP model) is responsible for providing reliable and efficient communication between processes running on different hosts. It sits between the Application Layer and the Network Layer.

**Key Services Provided by the Transport Layer:**

*   **Process-to-Process Delivery:** Unlike the Network Layer, which delivers packets between hosts, the Transport Layer delivers data to specific processes running on those hosts. This is achieved through **port numbers**.
*   **Segmentation and Reassembly:** The Transport Layer breaks down large application messages into smaller segments for transmission and reassembles them at the destination.
*   **Connection Management:** For connection-oriented protocols like TCP, it establishes, maintains, and terminates connections.
*   **Reliability:** Ensures data arrives correctly and in order.
*   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
*   **Congestion Control:** Prevents the network from becoming overloaded.

**Protocols at the Transport Layer:**

*   **TCP (Transmission Control Protocol):** A connection-oriented, reliable, and byte-stream oriented protocol. It provides extensive services, including error checking, retransmission, flow control, and congestion control.
*   **UDP (User Datagram Protocol):** A connectionless, unreliable, and message-oriented protocol. It is simpler and faster than TCP, offering minimal overhead.

---

### 2. TCP Segment Header: A Deep Dive

TCP operates by dividing data into **segments**. Each segment has a header that contains control information necessary for TCP to perform its functions. The TCP header is typically 20 bytes long but can be extended with options (up to 60 bytes).

**Understanding the TCP Header Fields:**

Let's break down each field of the TCP header, referencing information from Tanenbaum and Forouzan.

**Source Port (16 bits):**
*   Identifies the port number of the sending application process.
*   Used by the receiving TCP to identify the process to which the segment should be delivered.
*   *Example:* If a web browser (application) on your machine wants to connect to a web server, the source port might be a high, ephemeral port assigned by your OS.

**Destination Port (16 bits):**
*   Identifies the port number of the receiving application process.
*   *Example:* For a web server, the destination port is typically 80 (for HTTP) or 443 (for HTTPS).

**Sequence Number (32 bits):**
*   This is a critical field for reliability and ordering.
*   It defines the sequence number of the *first data byte* in this segment.
*   In a TCP connection, data is viewed as a continuous stream of bytes. The sequence number is the byte number in this stream.
*   *Example:* If a segment contains 1000 bytes of data, and the sequence number is 5001, it means the data in this segment starts from the 5001st byte of the stream. The next segment from this sender is expected to have a sequence number of 6001 (5001 + 1000).

**Acknowledgment Number (32 bits):**
*   This field is used to acknowledge received data.
*   It contains the sequence number of the *next byte* the sender of this segment expects to receive.
*   It's a cumulative acknowledgment. If a sender receives segments with data up to byte 5000, its acknowledgment number will be 5001.
*   *Example:* If receiver B has received bytes 1-1000 and 1001-2000, and receives a segment with sequence number 2001, it will send an acknowledgment number of 2001 (assuming no gaps).

**Data Offset (4 bits):**
*   Also known as the Header Length.
*   Specifies the size of the TCP header in 32-bit words (i.e., in units of 4 bytes).
*   This field is necessary because the TCP header can contain optional fields.
*   The minimum value is 5 (5 * 4 = 20 bytes). The maximum value is 15 (15 * 4 = 60 bytes).

**Reserved (3 bits):**
*   Reserved for future use. Must be zero.

**Control Bits (6 bits):**
These flags are crucial for managing the TCP connection and data transfer. They are often referred to as the **URG, ACK, PSH, RST, SYN, FIN** flags.

*   **URG (Urgent Pointer field is significant) (1 bit):**
    *   If set, the Urgent Pointer field is valid and indicates the position of an out-of-band data.
    *   This allows for urgent data to be processed before normal data.

*   **ACK (Acknowledgment field is significant) (1 bit):**
    *   If set, the Acknowledgment Number field is valid.
    *   Almost all segments with the ACK flag set are acknowledgments to previous segments.

*   **PSH (Push Function) (1 bit):**
    *   If set, the sender requests the receiver to deliver the data to the application layer as soon as possible, without waiting for the entire buffer to be filled.
    *   Useful for interactive applications where immediate response is needed.

*   **RST (Reset the connection) (1 bit):**
    *   If set, the TCP connection is reset. This can happen due to errors or an invalid segment.
    *   A reset connection is immediately terminated.

*   **SYN (Synchronize sequence numbers) (1 bit):**
    *   Used to establish a connection.
    *   When SYN is set, the sequence number field contains the initial sequence number (ISN) for the connection.

*   **FIN (No more data from sender) (1 bit):**
    *   Indicates that the sender has no more data to transmit.
    *   Used in the connection termination process.

**Window Size (16 bits):**
*   Used for **flow control**.
*   Specifies the number of bytes (starting from the acknowledgment number) that the sender of this segment is willing to receive.
*   This is the receiver's **receive window**. A larger window allows for more data to be in flight, potentially improving throughput.
*   *Example:* If the acknowledgment number is 5001 and the window size is 4096, the receiver is willing to accept bytes 5001 through 9096.

**Checksum (16 bits):**
*   Used for **error detection**.
*   Calculated over the TCP header, the TCP data, and a pseudo-header (containing IP addresses, protocol number, and TCP segment length).
*   The sender calculates the checksum and places it in the header. The receiver recalculates the checksum; if it doesn't match, the segment is discarded.

**Urgent Pointer (16 bits):**
*   Used only when the URG flag is set.
*   It is an offset from the sequence number, indicating the position of the urgent data within the segment.

**Options (Variable length):**
*   Optional fields that can extend the TCP header.
*   Common options include:
    *   **Maximum Segment Size (MSS):** Specifies the largest amount of data TCP is willing to receive in a single segment. This helps prevent fragmentation at the IP layer.
    *   **Window Scaling:** Allows for larger window sizes than the 16-bit field normally permits, improving performance on high-bandwidth, high-latency links.
    *   **Timestamps:** Used for more accurate Round Trip Time (RTT) measurements, which aids in congestion control.
    *   **SACK (Selective Acknowledgment):** Allows the receiver to explicitly acknowledge non-contiguous blocks of received data, improving performance when multiple segments are lost.

**Padding (Variable length):**
*   Used to ensure that the TCP header ends on a 32-bit boundary when options are present.

---

### 3. TCP Connection Establishment: The Three-Way Handshake

TCP uses a three-way handshake to establish a reliable connection before data transfer begins. The SYN and ACK flags in the TCP header play a vital role here.

1.  **Client to Server: SYN**
    *   The client sends a TCP segment with the `SYN` flag set.
    *   The `Sequence Number` field contains the client's Initial Sequence Number (ISN), say `X`.
    *   *Header Example:* `SYN=1`, `ACK=0`, `Seq=X`, `Ack=0`

2.  **Server to Client: SYN-ACK**
    *   The server receives the SYN segment.
    *   It allocates resources for the connection.
    *   It sends a TCP segment back with both the `SYN` and `ACK` flags set.
    *   The `Sequence Number` field contains the server's ISN, say `Y`.
    *   The `Acknowledgment Number` field is set to `X + 1`, acknowledging the client's SYN.
    *   *Header Example:* `SYN=1`, `ACK=1`, `Seq=Y`, `Ack=X+1`

3.  **Client to Server: ACK**
    *   The client receives the SYN-ACK segment.
    *   It acknowledges the server's SYN.
    *   The client sends a TCP segment with the `ACK` flag set.
    *   The `Sequence Number` field is set to `X + 1` (the next expected sequence number from the client).
    *   The `Acknowledgment Number` field is set to `Y + 1`, acknowledging the server's SYN.
    *   *Header Example:* `SYN=0`, `ACK=1`, `Seq=X+1`, `Ack=Y+1`

After this third segment, the connection is established, and data transfer can begin.

---

### 4. TCP Data Transfer and Acknowledgments

During data transfer, TCP segments contain data and sequence numbers. The receiver uses acknowledgment numbers to indicate what data it has successfully received.

*   **Sender:** Sends data segments with increasing sequence numbers.
*   **Receiver:** Receives segments and sends back acknowledgment segments.
    *   The `Acknowledgment Number` in the ACK segment indicates the *next expected byte*.
    *   This is a **cumulative acknowledgment**: if the receiver acknowledges byte `N`, it implies it has received all bytes up to `N-1` correctly.
*   **Flow Control (Window Size):** The receiver advertises its `Window Size`, limiting how much data the sender can have in flight.
*   **Retransmission:** If the sender does not receive an acknowledgment for a segment within a certain timeout period, it assumes the segment was lost and retransmits it.

---

### 5. TCP Connection Termination

TCP uses a four-way handshake to gracefully terminate a connection. The `FIN` and `ACK` flags are used.

1.  **Side A to Side B: FIN**
    *   When Side A has no more data to send, it sends a segment with the `FIN` flag set.
    *   *Header Example:* `FIN=1`, `ACK=1`, `Seq=A`, `Ack=B`

2.  **Side B to Side A: ACK**
    *   Side B acknowledges Side A's FIN.
    *   *Header Example:* `FIN=0`, `ACK=1`, `Seq=B`, `Ack=A+1`
    *   Side B might still have data to send to Side A.

3.  **Side B to Side A: FIN**
    *   When Side B has no more data to send, it sends its own segment with the `FIN` flag set.
    *   *Header Example:* `FIN=1`, `ACK=1`, `Seq=B_new`, `Ack=A+1`

4.  **Side A to Side B: ACK**
    *   Side A acknowledges Side B's FIN.
    *   *Header Example:* `FIN=0`, `ACK=1`, `Seq=A+1`, `Ack=B_new+1`
    *   The connection is now closed.

---

### 6. Important Points to Remember

*   **TCP is Connection-Oriented:** Requires a handshake for setup and teardown.
*   **TCP provides Reliability:** Achieved through sequence numbers, acknowledgments, and retransmissions.
*   **TCP provides Flow Control:** Using the `Window Size` field to prevent receiver overload.
*   **TCP provides Congestion Control:** Mechanisms to prevent network overload (though not directly visible in basic header fields, it influences window size).
*   **Port Numbers:** Essential for process-to-process communication.
*   **Sequence Numbers:** Track byte order in the data stream.
*   **Acknowledgment Numbers:** Indicate the next expected byte.
*   **Control Flags (SYN, ACK, FIN, RST, PSH, URG):** Govern connection management and data handling.
*   **Checksum:** Ensures data integrity.
*   **Data Offset:** Crucial for parsing variable-length headers.

---

### 7. Linking to Course Outcomes

*   **CO1 (Knowledge Level: K2):** Understanding the TCP segment header directly supports explaining the services provided by the Transport Layer and how protocols like TCP contribute to network communication. The header fields embody the mechanisms for reliable data transfer.
*   **CO2 (Knowledge Level: K2):** While not directly about Data Link Layer, understanding the Transport Layer's role in providing reliable end-to-end service is foundational. TCP's reliability mechanisms help abstract away lower-level network complexities.
*   **CO3 (Knowledge Level: K2):** TCP's header fields (like Window Size) are fundamental to its congestion control and flow control algorithms. Understanding these fields provides insight into how TCP achieves good quality of service by managing network resources.
*   **CO4 (Knowledge Level: K2):** This is the primary focus. The TCP segment header is the concrete embodiment of the reliable, connection-oriented services provided by the Transport Layer to the Application Layer.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of the `Sequence Number` field in a TCP segment header?
    *   **Answer:** To identify the order of bytes within the TCP data stream. It indicates the sequence number of the first data byte in the current segment.

**Question 2:** Explain the role of the `Window Size` field in TCP.
    *   **Answer:** The `Window Size` field is used for flow control. It indicates the number of bytes (starting from the acknowledgment number) that the receiver is willing to accept. This prevents a fast sender from overwhelming a slow receiver.

**Question 3:** Which TCP control flags are used during the connection establishment process (three-way handshake)?
    *   **Answer:** The `SYN` (Synchronize) and `ACK` (Acknowledgment) flags are used. `SYN` initiates the connection, and `ACK` acknowledges the received `SYN`.

**Question 4:** If a TCP sender sends a segment with 1000 bytes of data and a sequence number of 3001, what sequence number would the receiver expect in the next segment from this sender (assuming no data loss)?
    *   **Answer:** The next expected sequence number would be 4001 (3001 + 1000).

**Question 5:** What is the minimum and maximum size of the TCP header in bytes, and how is this indicated in the header?
    *   **Answer:** The minimum size is 20 bytes, and the maximum is 60 bytes. This is indicated by the `Data Offset` field, which specifies the header length in 32-bit words (minimum 5, maximum 15).

**Question 6:** What is the purpose of the `Checksum` field?
    *   **Answer:** The `Checksum` field is used for error detection. It's calculated over the header, data, and a pseudo-header to ensure the integrity of the segment.

**Question 7:** How does TCP ensure that data is delivered in the correct order, even if segments arrive out of sequence?
    *   **Answer:** TCP uses `Sequence Numbers` to identify the order of data bytes. The receiver can buffer out-of-order segments and reassemble them correctly based on these sequence numbers before delivering them to the application.

**Question 8:** What does it mean if a TCP segment has the `PSH` flag set?
    *   **Answer:** The `PSH` (Push Function) flag indicates that the sender wants the receiver to deliver the data to the application layer as soon as possible, without waiting for the buffer to fill. This is important for interactive applications.

---
