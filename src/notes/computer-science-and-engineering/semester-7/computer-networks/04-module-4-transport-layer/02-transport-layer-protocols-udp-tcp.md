---
title: "Transport Layer Protocols- UDP, TCP"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c93a"
status: "completed"
scrapedAt: "2026-05-20T17:02:51.186Z"
---
# Computer Networks: Module 4 - Transport Layer Protocols: UDP, TCP

This document provides comprehensive study notes for the Transport Layer Protocols, UDP and TCP, as part of Module 4 in Computer Networks.

---

## 1. Introduction to the Transport Layer

*   **Purpose:** The Transport Layer is responsible for providing end-to-end communication services for applications. It sits between the Application Layer and the Network Layer.
*   **Key Functions:**
    *   **Process-to-Process Delivery:** Unlike the Network Layer (host-to-host delivery), the Transport Layer delivers data to the correct application process running on a host. This is achieved using **port numbers**.
    *   **Segmentation and Reassembly:** It breaks down large application messages into smaller segments for transmission and reassembles them at the destination.
    *   **Multiplexing and Demultiplexing:** Allows multiple applications on a host to share the network connection simultaneously.
    *   **Connection Management (for connection-oriented protocols):** Establishing, maintaining, and terminating connections.
    *   **Reliability:** Ensuring data arrives correctly and in order (e.g., error detection, retransmission).
    *   **Flow Control:** Preventing a fast sender from overwhelming a slow receiver.
    *   **Congestion Control:** Managing the rate of data transmission to avoid network congestion.

*   **Key Concepts:**
    *   **Port Number:** A 16-bit number that uniquely identifies a specific process or service on a host.
        *   **Well-known Ports (0-1023):** Reserved for common services (e.g., HTTP on 80, FTP on 21, SSH on 22).
        *   **Registered Ports (1024-49151):** For specific applications registered with IANA.
        *   **Dynamic/Private Ports (49152-65535):** Used for temporary client-side connections.
    *   **Socket:** A combination of an IP address and a port number, representing an endpoint of a communication path. `Socket = (IP Address, Port Number)`

---

## 2. User Datagram Protocol (UDP)

*   **Overview:** UDP is a **connectionless** and **unreliable** transport layer protocol. It's known for its simplicity, speed, and low overhead.

*   **Key Characteristics:**
    *   **Connectionless:** No connection establishment or teardown phases are required. Data is sent immediately.
    *   **Unreliable:**
        *   No guarantee of delivery. Datagrams can be lost, duplicated, or arrive out of order.
        *   No retransmission mechanism. If data is lost, the application must handle it.
    *   **Best-Effort Delivery:** The network layer is responsible for routing, but UDP itself doesn't add reliability.
    *   **Low Overhead:** Minimal header size, making it efficient for small, time-sensitive data.
    *   **No Flow Control:** A sender can send data as fast as it wants, potentially overwhelming the receiver.
    *   **No Congestion Control:** Does not actively manage network congestion.

*   **UDP Header Format:**
    *   **Source Port (16 bits):** Identifies the sender's port.
    *   **Destination Port (16 bits):** Identifies the receiver's port.
    *   **Length (16 bits):** The total length of the UDP datagram (header + data), in bytes. Minimum is 8 bytes (header only).
    *   **Checksum (16 bits):** Optional (but usually used). Used for error detection within the UDP datagram and the pseudo-header. The pseudo-header includes information from the IP header to ensure the datagram has arrived at the correct destination host and protocol.

*   **When to Use UDP:**
    *   **Time-sensitive applications:** Where speed is more critical than guaranteed delivery (e.g., real-time audio/video streaming).
    *   **Applications with built-in reliability:** Applications that handle their own error detection and retransmission (e.g., TFTP).
    *   **Small, frequent requests:** Where the overhead of TCP connection setup is undesirable (e.g., DNS queries).
    *   **Broadcasting and Multicasting:** UDP is suitable for sending the same data to multiple recipients.

*   **Examples:**
    *   **DNS (Domain Name System):** Typically uses UDP for fast query-response cycles. If a DNS response is lost, the client can simply re-send the query.
    *   **DHCP (Dynamic Host Configuration Protocol):** Uses UDP for IP address assignment.
    *   **VoIP (Voice over IP) / Video Conferencing:** Real-time streaming applications. Occasional lost packets are less disruptive than delays caused by retransmissions.
    *   **Online Gaming:** Fast updates are crucial.

---

## 3. Transmission Control Protocol (TCP)

*   **Overview:** TCP is a **connection-oriented**, **reliable**, and **ordered** transport layer protocol. It provides a robust stream of data between applications.

*   **Key Characteristics:**
    *   **Connection-Oriented:**
        *   **Connection Establishment (3-way handshake):** A three-step process to establish a connection before data transfer.
        *   **Connection Termination (4-way handshake):** A graceful shutdown of the connection.
    *   **Reliable:**
        *   **Acknowledgement (ACK):** Receiver sends acknowledgements for received data.
        *   **Retransmission:** If an ACK is not received within a timeout period, the sender retransmits the data.
        *   **Sequence Numbers:** Each byte of data is numbered, allowing the receiver to reorder segments if they arrive out of order and detect duplicates.
    *   **Ordered Data Delivery:** Ensures data is delivered to the application in the same order it was sent.
    *   **Flow Control:** Uses a **sliding window mechanism** to prevent a fast sender from overwhelming a slow receiver. The receiver advertises its available buffer space (Receive Window).
    *   **Congestion Control:** Implements algorithms to manage the rate of data transmission to avoid overwhelming the network. This includes:
        *   **Slow Start:** Gradually increases the sending rate.
        *   **Congestion Avoidance:** Linearly increases the sending rate.
        *   **Fast Retransmit:** Quickly retransmits lost segments without waiting for a timeout.
        *   **Fast Recovery:** Reduces the sending rate after a fast retransmit.
    *   **Full-Duplex:** Data can be sent and received simultaneously over a single connection.
    *   **Higher Overhead:** Larger header size and more complex state management compared to UDP.

*   **TCP Header Format:**
    *   **Source Port (16 bits):** Identifies the sender's port.
    *   **Destination Port (16 bits):** Identifies the receiver's port.
    *   **Sequence Number (32 bits):** The sequence number of the first data byte in this segment (relative to the connection's initial sequence number).
    *   **Acknowledgement Number (32 bits):** The sequence number of the *next* byte the sender of the ACK is expecting to receive.
    *   **Data Offset (4 bits):** The size of the TCP header in 32-bit words.
    *   **Reserved (6 bits):** For future use.
    *   **Control Bits (6 bits):**
        *   **URG (Urgent Pointer):** Indicates that the Urgent Pointer field is valid.
        *   **ACK (Acknowledgement):** Indicates that the Acknowledgement Number field is valid.
        *   **PSH (Push Function):** Tells the receiving application to push the buffered data to the application immediately.
        *   **RST (Reset Connection):** Abruptly terminates the connection.
        *   **SYN (Synchronize Sequence Numbers):** Used in the handshake to initiate a connection.
        *   **FIN (Finish):** Indicates that the sender has finished sending data.
    *   **Window Size (16 bits):** The number of bytes the sender of the ACK is willing to receive, starting from the Acknowledgement Number. Used for flow control.
    *   **Checksum (16 bits):** Used for error detection in the TCP segment and the pseudo-header.
    *   **Urgent Pointer (16 bits):** Points to the last byte of urgent data.
    *   **Options (Variable):** For additional features like Maximum Segment Size (MSS), Timestamps, etc.

*   **TCP Connection Establishment (3-Way Handshake):**
    1.  **Client -> Server: SYN (Sequence Number = X)**
        *   Client sends a SYN segment to initiate the connection.
    2.  **Server -> Client: SYN-ACK (Sequence Number = Y, Acknowledgement Number = X+1)**
        *   Server receives SYN, acknowledges it, and sends its own SYN to the client.
    3.  **Client -> Server: ACK (Sequence Number = X+1, Acknowledgement Number = Y+1)**
        *   Client receives SYN-ACK, acknowledges it, and the connection is established.

*   **TCP Connection Termination (4-Way Handshake):**
    1.  **Client -> Server: FIN (Sequence Number = U)**
        *   Client finishes sending data and sends a FIN segment.
    2.  **Server -> Client: ACK (Acknowledgement Number = U+1)**
        *   Server acknowledges the FIN. The server can still send data.
    3.  **Server -> Client: FIN (Sequence Number = V)**
        *   Once the server has also finished sending data, it sends its own FIN.
    4.  **Client -> Server: ACK (Acknowledgement Number = V+1)**
        *   Client acknowledges the server's FIN. The connection is now closed.

*   **Sliding Window Mechanism (Flow Control):**
    *   The receiver advertises a **Receive Window (RWND)**, indicating the amount of buffer space available.
    *   The sender maintains a **Send Window**, which is the minimum of the advertised RWND and the receiver's advertised window.
    *   The sender can only send data up to the end of its Send Window.
    *   As the receiver acknowledges data, the window slides forward, allowing the sender to transmit more data.

*   **When to Use TCP:**
    *   **Applications requiring reliable data transfer:** Where all data must arrive correctly and in order.
    *   **Web Browsing (HTTP/HTTPS):** Essential for rendering web pages correctly.
    *   **File Transfer (FTP):** Guarantees that files are transferred without corruption.
    *   **Email (SMTP, POP3, IMAP):** Ensures messages are delivered accurately.
    *   **Secure Shell (SSH):** For reliable remote command execution.

*   **Examples:**
    *   **HTTP/HTTPS:** When you browse a website, TCP ensures all parts of the page (HTML, CSS, images) are received correctly.
    *   **FTP:** When downloading a large file, TCP ensures that the file is complete and not corrupted.
    *   **Email:** When sending an email, TCP ensures that the entire message reaches the recipient's server.

---

## 4. Comparison: UDP vs. TCP

| Feature             | UDP (User Datagram Protocol) | TCP (Transmission Control Protocol) |
| :------------------ | :--------------------------- | :---------------------------------- |
| **Connection**      | Connectionless               | Connection-oriented                 |
| **Reliability**     | Unreliable (best-effort)     | Reliable                            |
| **Ordering**        | Unordered                    | Ordered                             |
| **Speed**           | Faster                       | Slower                              |
| **Overhead**        | Low (minimal header)         | High (larger header, state management) |
| **Flow Control**    | No                           | Yes (sliding window)                |
| **Congestion Control** | No                           | Yes                                 |
| **Data Transfer**   | Datagrams                    | Stream                              |
| **Use Cases**       | DNS, DHCP, VoIP, Streaming, Online Gaming | HTTP, FTP, Email, SSH               |

---

## 5. Practice Questions and Exercises

1.  **What is the primary role of the Transport Layer in a network?**
    *   **Answer:** To provide process-to-process communication between applications running on different hosts. It also handles segmentation, multiplexing/demultiplexing, reliability, flow control, and congestion control (depending on the protocol).

2.  **Explain the concept of a "socket" in the context of network communication.**
    *   **Answer:** A socket is an endpoint of a communication path between two processes. It is represented by an IP address and a port number (e.g., `192.168.1.100:80`).

3.  **Compare and contrast UDP and TCP in terms of reliability and overhead.**
    *   **Answer:**
        *   **Reliability:** TCP is highly reliable, guaranteeing delivery and order using acknowledgements, sequence numbers, and retransmissions. UDP is unreliable, providing best-effort delivery with no guarantees.
        *   **Overhead:** UDP has low overhead due to its simpler header and connectionless nature. TCP has higher overhead due to its connection establishment/termination, larger header, and state management for reliability and flow/congestion control.

4.  **Describe the steps involved in the TCP 3-way handshake.**
    *   **Answer:**
        1.  Client sends SYN.
        2.  Server sends SYN-ACK.
        3.  Client sends ACK.

5.  **For which of the following applications would UDP be a more suitable protocol and why?**
    *   a) Online video streaming
    *   b) Downloading a file via FTP
    *   c) Sending an email via SMTP
    *   **Answer:** a) Online video streaming. UDP is more suitable because real-time applications like video streaming prioritize timely delivery over absolute reliability. Occasional packet loss is often acceptable and less disruptive than the delays introduced by TCP's retransmission mechanisms. FTP and SMTP require reliable transfer of all data, making TCP the preferred choice.

6.  **How does TCP implement flow control?**
    *   **Answer:** TCP uses a sliding window mechanism. The receiver advertises its available buffer space (Receive Window or RWND) to the sender. The sender limits the amount of unacknowledged data it sends to the receiver's advertised window size, preventing the sender from overwhelming the receiver.

7.  **What is the purpose of the Checksum field in UDP and TCP headers?**
    *   **Answer:** The Checksum field is used for error detection. It verifies the integrity of the UDP datagram or TCP segment by ensuring that no bits have been flipped or corrupted during transmission. It covers the header and data, and often includes a pseudo-header derived from the IP header.

8.  **Imagine you are designing a new real-time gaming application. Would you choose UDP or TCP for the core game data (e.g., player positions, actions)? Justify your choice.**
    *   **Answer:** UDP would likely be the better choice for core game data. In real-time gaming, low latency and timely updates are critical. UDP's speed and lack of connection overhead make it ideal. While UDP is unreliable, the application can implement its own lightweight reliability mechanisms if needed (e.g., sending critical commands multiple times, or having the game server interpolate player positions if a packet is lost). TCP's guaranteed delivery and ordering would introduce unacceptable delays due to retransmissions.

---

## 6. Important Points to Remember

*   **Transport Layer's main goal is Process-to-Process delivery.**
*   **Port numbers identify applications on a host.**
*   **UDP is fast, simple, connectionless, and unreliable.** Use it when speed is paramount and occasional data loss is acceptable.
*   **TCP is reliable, ordered, connection-oriented, and feature-rich (flow/congestion control).** Use it for applications requiring guaranteed data integrity.
*   **TCP's 3-way handshake is crucial for connection establishment.**
*   **TCP's sliding window manages flow control.**
*   **TCP's congestion control prevents network collapse.**
*   The trade-off between UDP and TCP is primarily between **speed/overhead** and **reliability/features**.

---
