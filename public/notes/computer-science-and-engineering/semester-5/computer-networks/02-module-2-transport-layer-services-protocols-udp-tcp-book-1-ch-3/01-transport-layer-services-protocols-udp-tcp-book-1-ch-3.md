---
title: "Transport Layer: Services, Protocols, UDP, TCP  (Book 1 Ch 3)."
subject: "COMPUTER NETWORKS"
module: "Module 2: Transport Layer: Services, Protocols, UDP, TCP  (Book 1 Ch 3)."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b523"
status: "completed"
scrapedAt: "2026-05-20T16:43:30.384Z"
---
# COMPUTER NETWORKS - MODULE 2: TRANSPORT LAYER: SERVICES, PROTOCOLS, UDP, TCP (Book 1 Ch 3)

## Introduction
This module delves into the transport layer, a crucial layer in the TCP/IP model responsible for providing logical communication between application processes running on different hosts. We'll explore its services, protocols, and specifically focus on UDP (User Datagram Protocol) and TCP (Transmission Control Protocol).

## Learning Outcomes
By the end of this module, you should be able to:

*   Understand the services provided by the transport layer.
*   Describe the roles and responsibilities of the transport layer.
*   Differentiate between connection-oriented and connectionless services.
*   Explain the concepts of multiplexing and demultiplexing.
*   Understand the structure and functionality of UDP headers.
*   Understand the structure and functionality of TCP headers.
*   Describe the three-way handshake process in TCP.
*   Explain the TCP connection termination process.
*   Compare and contrast UDP and TCP, highlighting their strengths and weaknesses.
*   Identify appropriate use cases for UDP and TCP.

## 1. Transport Layer Services and Protocols

### 1.1 Role and Responsibilities

*   **Provides Logical Communication:** The transport layer enables application processes on different hosts to communicate directly with each other as if they were directly connected.
*   **Hides Network Complexity:** It shields applications from the underlying network's complexities, such as routing and packet fragmentation.
*   **Provides Services to Applications:**  It offers various services to applications based on their requirements, like reliability, order, and flow control.
*   **Key Responsibilities Include:**
    *   **Multiplexing/Demultiplexing:** Handling multiple application processes using the same transport layer protocol.
    *   **Error Detection:** Detecting bit errors in the transmitted data.
    *   **Reliable Data Transfer (TCP):** Ensuring data is delivered accurately and in the correct order (if required).
    *   **Flow Control (TCP):** Preventing a fast sender from overwhelming a slow receiver.
    *   **Congestion Control (TCP):** Managing network congestion to prevent performance degradation.
*   **Protocols:** UDP and TCP are the main transport layer protocols.

### 1.2 Multiplexing and Demultiplexing

*   **Multiplexing (Sender):** Gathering data from multiple application processes at the sending host and encapsulating them with header information (port numbers) to create transport layer segments.  These segments are then passed down to the network layer.

    *   **Analogy:**  Think of it as postal sorting at the sender's end.  Multiple letters (data from different applications) are labelled with specific addresses (port numbers) before being sent.

*   **Demultiplexing (Receiver):** Using the header information (port numbers) in received transport layer segments to deliver the data to the correct application process at the receiving host.

    *   **Analogy:**  Think of it as postal delivery at the receiver's end.  Incoming letters are sorted based on their addresses (port numbers) and delivered to the correct recipients (applications).

*   **Port Numbers:**
    *   **Well-known Ports (0-1023):** Reserved for standard application protocols (e.g., HTTP: 80, SMTP: 25, DNS: 53).
    *   **Registered Ports (1024-49151):** Assigned to specific applications but not controlled by IANA.
    *   **Dynamic/Private Ports (49152-65535):**  Temporarily assigned by the operating system to client applications.

### 1.3 Connection-Oriented vs. Connectionless Services

*   **Connection-Oriented (TCP):**
    *   Establishes a connection between sender and receiver before data transmission.
    *   Provides reliable, ordered, and error-free data delivery.
    *   Offers flow control and congestion control.
    *   Guarantees data arrives in the same order it was sent.
    *   **Example:** Web browsing (HTTP), email (SMTP), file transfer (FTP).

*   **Connectionless (UDP):**
    *   No connection is established before data transmission.
    *   Data delivery is unreliable and unordered.
    *   Minimal overhead.
    *   Best effort delivery – no guarantee of delivery.
    *   **Example:** Streaming media, online games, DNS.

## 2. User Datagram Protocol (UDP)

### 2.1 Overview

*   A simple, connectionless transport protocol.
*   Provides a thin layer on top of IP.
*   Unreliable and unordered delivery.
*   Offers minimal overhead, making it suitable for applications that can tolerate some data loss or delay.

### 2.2 UDP Header Format

The UDP header consists of 8 bytes:

| Field           | Size (bits) | Description                                                                                                                                                                          |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Source Port     | 16          | The port number of the sending process. Optional.  If not used, set to 0.                                                                                                             |
| Destination Port | 16          | The port number of the receiving process.                                                                                                                                          |
| Length          | 16          | The length, in bytes, of the UDP header and UDP data. The minimum value is 8 bytes (the header itself).                                                                             |
| Checksum        | 16          | An optional checksum used for error detection over the UDP header and data. If not used, it's set to 0.  Provides minimal reliability.                                                  |

### 2.3 When to Use UDP

*   **Applications that can tolerate some data loss:** Real-time streaming, online gaming where occasional dropped packets are acceptable.
*   **Applications that require low latency:** DNS lookups, where quick responses are crucial.
*   **Applications with their own reliability mechanisms:** Some applications implement their own error recovery and retransmission mechanisms.
*   **Multicasting and Broadcasting:** UDP is well-suited for sending data to multiple recipients simultaneously.
*   **Simple Query/Response protocols:** DNS, SNMP.

## 3. Transmission Control Protocol (TCP)

### 3.1 Overview

*   A reliable, connection-oriented transport protocol.
*   Guarantees data delivery in the correct order without errors.
*   Provides flow control and congestion control mechanisms.
*   More complex than UDP, resulting in higher overhead.

### 3.2 TCP Header Format

The TCP header is more complex than UDP. The minimal header size is 20 bytes, but it can be larger due to options.

| Field               | Size (bits) | Description                                                                                                                                                                                                 |
| ------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source Port         | 16          | The port number of the sending process.                                                                                                                                                                    |
| Destination Port    | 16          | The port number of the receiving process.                                                                                                                                                                  |
| Sequence Number     | 32          | The sequence number of the first byte in the segment. Used for ordering and reassembly of data.                                                                                                            |
| Acknowledgment Number | 32          | The sequence number of the next byte the sender *expects* to receive.  Acknowledges receipt of all bytes up to (but not including) this sequence number.                                                      |
| Header Length (HLEN) | 4           | Indicates the size of the TCP header in 32-bit words. The minimum value is 5 (5 * 4 = 20 bytes).                                                                                                                  |
| Reserved            | 6           | Reserved for future use.  Must be zero.                                                                                                                                                                         |
| Flags (Control Bits) | 6           | Various control flags:  **URG, ACK, PSH, RST, SYN, FIN**. These are single-bit flags.                                                                                                                         |
| Window Size         | 16          | The amount of data the receiver is willing to accept. Used for flow control.                                                                                                                               |
| Checksum            | 16          | Error detection field.                                                                                                                                                                                       |
| Urgent Pointer      | 16          | If the URG flag is set, this field indicates the offset from the current sequence number to the location of the last byte of urgent data.                                                                    |
| Options             | Variable      | Optional fields for various TCP functionalities (e.g., Maximum Segment Size (MSS), Window Scale).                                                                                                              |
| Padding             | Variable      | Used to ensure the header ends on a 32-bit boundary.                                                                                                                                                           |

### 3.3 TCP Connection Establishment (Three-Way Handshake)

TCP uses a three-way handshake to establish a connection:

1.  **SYN (Synchronize):** The client sends a TCP segment with the SYN flag set to 1.  It also includes an initial sequence number (client_isn).
2.  **SYN-ACK (Synchronize-Acknowledge):** The server receives the SYN segment and responds with a SYN-ACK segment.  The SYN flag is set to 1, the ACK flag is set to 1, the acknowledgment number is set to client_isn + 1, and the server includes its own initial sequence number (server_isn).
3.  **ACK (Acknowledge):** The client receives the SYN-ACK segment and responds with an ACK segment. The ACK flag is set to 1, and the acknowledgment number is set to server_isn + 1.

*   After the three-way handshake, the connection is established, and data transfer can begin.

### 3.4 TCP Connection Termination

TCP uses a four-way handshake (although some literature refers to it as a 'modified three-way handshake') to terminate a connection:

1. **FIN (Finish):**  The client (or server) sends a TCP segment with the FIN flag set to 1, indicating it has no more data to send.
2. **ACK (Acknowledge):** The server receives the FIN segment and acknowledges it with an ACK segment.  The connection is now half-closed (the server can still send data to the client).
3. **FIN (Finish):** The server, when it has finished sending its data, sends its own FIN segment to the client.
4. **ACK (Acknowledge):** The client receives the server's FIN segment and acknowledges it with an ACK segment.  The connection is now fully terminated.

*   **TIME_WAIT State:** After sending the final ACK, the client enters the TIME_WAIT state for a certain period (typically 2 * Maximum Segment Lifetime (MSL)). This state ensures that any delayed packets are discarded and prevents old connections from interfering with new ones.

### 3.5 TCP Features

*   **Reliable Data Transfer:** Achieved through sequence numbers, acknowledgments, and retransmission of lost packets.
*   **Flow Control:** Prevents the sender from overwhelming the receiver by using a "window size" to indicate how much data the receiver is willing to accept.
*   **Congestion Control:**  Manages network congestion to avoid performance degradation. TCP uses algorithms like Slow Start, Congestion Avoidance, and Fast Recovery to adjust the sending rate based on network conditions.
*   **Ordered Data Delivery:** Ensures data arrives in the same order it was sent.
*   **Error Detection:** Uses a checksum to detect errors in the transmitted data.

### 3.6 When to Use TCP

*   **Applications that require reliable data transfer:** Web browsing (HTTP), email (SMTP), file transfer (FTP).
*   **Applications where data order is important:** Web browsing, file transfer.
*   **Applications where data loss is unacceptable:** Financial transactions, database updates.

## 4. UDP vs. TCP: A Comparison

| Feature            | UDP                                     | TCP                                         |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| Connection         | Connectionless                            | Connection-oriented                         |
| Reliability        | Unreliable                                | Reliable                                     |
| Ordering           | Unordered                                 | Ordered                                      |
| Error Detection    | Checksum (optional)                     | Checksum (mandatory)                         |
| Flow Control       | No flow control                           | Flow control                                 |
| Congestion Control | No congestion control                      | Congestion control                           |
| Overhead           | Low                                      | High                                         |
| Speed              | Generally faster                          | Generally slower                            |
| Header Size        | 8 bytes                                   | 20 bytes (minimum)                          |
| Use Cases          | Streaming media, online games, DNS, VoIP | Web browsing, email, file transfer, secure connections |

## 5. Practice Questions and Exercises

1.  **What is the main responsibility of the transport layer?**
    *   Answer: Providing logical communication between application processes.

2.  **Explain the difference between multiplexing and demultiplexing.**
    *   Answer: Multiplexing is gathering data from multiple applications and encapsulating them into transport layer segments. Demultiplexing is delivering the data to the correct application at the receiving host based on port numbers.

3.  **What are the advantages and disadvantages of using UDP?**
    *   Answer: Advantages: Low overhead, faster, suitable for applications that can tolerate data loss. Disadvantages: Unreliable, unordered delivery, no flow or congestion control.

4.  **Describe the TCP three-way handshake.**
    *   Answer:  See Section 3.3

5.  **Why does TCP use a three-way handshake for connection establishment?**
    *   Answer: To synchronize sequence numbers and ensure both sides are ready to transmit data reliably.  The initial sequence numbers (ISNs) are exchanged in the SYN and SYN-ACK packets.  The ACK confirms that the connection can proceed in both directions.

6.  **Explain the purpose of the TCP sequence number and acknowledgment number.**
    *   Answer: The sequence number identifies the first byte of data in a TCP segment, allowing the receiver to reassemble data in the correct order. The acknowledgment number indicates the next expected sequence number, acknowledging receipt of all bytes up to (but not including) that number.

7.  **What are the TCP flags and what do they represent? Give at least 3 examples.**
    *   Answer: The TCP flags control various aspects of the connection. Examples:
        *   **SYN:** Synchronize sequence numbers (used for connection establishment).
        *   **ACK:** Acknowledgment (indicates the segment acknowledges previously received data).
        *   **FIN:** Finish (indicates the sender has no more data to send).
        *   **RST:** Reset (resets a connection).
        *   **PSH:** Push (indicates the data should be delivered to the application immediately).
        *   **URG:** Urgent (indicates urgent data is present).

8.  **What is flow control in TCP and how is it achieved?**
    *   Answer: Flow control prevents the sender from overwhelming the receiver. It's achieved by the receiver advertising a "window size" in the TCP header, indicating how much data it can accept.

9.  **What is congestion control in TCP and what are the common algorithms used?**
    *   Answer: Congestion control manages network congestion. Common algorithms include: Slow Start, Congestion Avoidance, and Fast Recovery.

10. **You're designing an online multiplayer game. Would you choose UDP or TCP? Why?**
    *   Answer: UDP would likely be a better choice. The game can tolerate occasional packet loss (e.g., a missed frame update), and low latency is critical for responsiveness. TCP's reliability mechanisms would add unnecessary overhead.

11. **A client sends a SYN packet with sequence number 1000. The server responds with a SYN-ACK packet with sequence number 5000 and an acknowledgment number of 1001. What will the client's next packet contain as sequence and acknowledgement numbers if the client immediately proceeds to send data?**
    *   Answer: The client will send an ACK packet, where the sequence number is 1001 and the acknowledgement number is 5001. This ACK completes the three way handshake. Following this, the next data segment will be sequence number 1001 plus the number of bytes in the payload, and the ACK number will remain 5001 until the server begins sending data back.

## 6. Important Points to Remember

*   The transport layer provides logical communication between applications.
*   Multiplexing and demultiplexing allow multiple applications to share the same transport layer protocol.
*   UDP is a connectionless, unreliable protocol suitable for applications that can tolerate data loss.
*   TCP is a connection-oriented, reliable protocol suitable for applications that require guaranteed data delivery.
*   The TCP three-way handshake establishes a connection.
*   TCP uses flow control and congestion control mechanisms to optimize network performance.
*   Choose the appropriate transport layer protocol (UDP or TCP) based on the application's requirements.
