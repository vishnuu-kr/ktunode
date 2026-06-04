---
title: "Transport Layer connectionless and connection-oriented protocols."
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff046"
status: "completed"
scrapedAt: "2026-05-23T18:00:00.642Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction

## Topic: Transport Layer Connectionless and Connection-Oriented Protocols

This module introduces the Transport Layer within the TCP/IP protocol suite. We will explore the fundamental concepts of connection-oriented and connectionless communication and understand how these paradigms are implemented by the protocols at this layer.

---

### **Learning Outcomes Covered:**

*   **Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.** (CO1)
*   **Demonstrate protocols and the functions of different layers.** (CO2)

---

### **1. Introduction to the Transport Layer**

The Transport Layer is the **fourth layer** in the TCP/IP model (and the fifth in the OSI model). Its primary role is to provide **logical communication between application processes** running on different hosts. Unlike the Network Layer which focuses on host-to-host delivery, the Transport Layer handles **process-to-process delivery**.

**Key Functions of the Transport Layer:**

*   **Process-to-Process Delivery:** Identifying the specific application process on a destination host that the data is intended for. This is achieved through **port numbers**.
*   **Multiplexing and Demultiplexing:**
    *   **Multiplexing:** Allowing multiple applications on a sending host to share the network connection.
    *   **Demultiplexing:** Delivering received data segments to the correct application process on the receiving host.
*   **Error Control:** Ensuring that data is transmitted reliably and without errors.
*   **Flow Control:** Preventing a fast sender from overwhelming a slow receiver.
*   **Congestion Control:** Managing the network traffic to prevent congestion and ensure fair resource allocation.

**Kurose & Ross (Chapter 1, Chapter 2):** Emphasize the logical end-to-end communication between applications and the role of multiplexing/demultiplexing using port numbers. They introduce the concept of sockets as the interface between the application layer and the transport layer.

**Forouzan (Chapter 18):** Discusses the role of the transport layer in providing services to the application layer, particularly focusing on the differences between connection-oriented and connectionless services.

---

### **2. Connection-Oriented vs. Connectionless Communication**

The Transport Layer protocols can provide two fundamental types of services: connection-oriented and connectionless.

#### **2.1. Connectionless Communication**

*   **Definition:** In connectionless communication, each data packet (or segment at the transport layer) is sent **independently** of others. There is no prior setup or teardown of a connection.
*   **Analogy:** Similar to sending a postcard. Each postcard is addressed and sent individually, and there's no guarantee of arrival or order.
*   **Characteristics:**
    *   **No connection setup/teardown:** Data is sent immediately.
    *   **No guarantee of delivery:** Packets may be lost, corrupted, or arrive out of order.
    *   **No flow control:** Sender can send data at any rate.
    *   **No congestion control (typically):** May contribute to network congestion.
    *   **Simpler and faster:** Less overhead compared to connection-oriented.
*   **Use Cases:**
    *   Applications where **speed is critical** and occasional data loss is acceptable.
    *   Real-time applications like **streaming media (e.g., VoIP, video conferencing)**, where late data is worse than lost data.
    *   **DNS (Domain Name System) queries**, which are typically small and require quick responses.
    *   **DHCP (Dynamic Host Configuration Protocol)**.

**Kurose & Ross (Chapter 2):** Introduce UDP as the primary example of a connectionless transport protocol. They highlight its "best-effort" delivery.

**Forouzan (Chapter 18):** Defines connectionless communication and its characteristics, typically associated with the User Datagram Protocol (UDP).

#### **2.2. Connection-Oriented Communication**

*   **Definition:** In connection-oriented communication, a **dedicated connection** is established between the sender and receiver before any data is transmitted. This connection is maintained throughout the data transfer and then formally closed.
*   **Analogy:** Similar to making a phone call. You establish a connection (dial the number, both parties answer), have a conversation, and then hang up.
*   **Characteristics:**
    *   **Connection Setup (Three-way Handshake):** A negotiation phase to establish parameters like sequence numbers and window sizes.
    *   **Reliable Data Transfer:** Guarantees that data will arrive at the destination **in order and without errors**. This is achieved through mechanisms like acknowledgements, retransmissions, and sequence numbers.
    *   **Flow Control:** Manages the rate of data transmission to prevent a fast sender from overwhelming a slow receiver.
    *   **Congestion Control:** Mechanisms to reduce transmission rate when network congestion is detected.
    *   **More overhead:** Requires more complex state management and is slower to start due to the connection setup.
*   **Use Cases:**
    *   Applications where **reliability and accuracy are paramount**.
    *   **Web browsing (HTTP)**.
    *   **Email (SMTP)**.
    *   **File transfer (FTP)**.
    *   **Secure shell (SSH)**.

**Kurose & Ross (Chapter 3):** Dedicate significant attention to TCP, the primary connection-oriented protocol. They detail its features like reliable data transfer, flow control, and congestion control.

**Forouzan (Chapter 18, Chapter 19):** Thoroughly explains connection-oriented services and elaborates on the Transmission Control Protocol (TCP), its state diagrams, mechanisms for reliability, flow control, and congestion control.

---

### **3. Key Transport Layer Protocols in TCP/IP**

The TCP/IP suite primarily features two transport layer protocols:

#### **3.1. User Datagram Protocol (UDP)**

*   **Type:** Connectionless
*   **Purpose:** Provides a **minimalist, best-effort transport service**. It's often described as a "thin layer" on top of IP.
*   **Key Features:**
    *   **No connection setup/teardown:** Data can be sent immediately.
    *   **No reliability:** Does not guarantee delivery, order, or error-free transmission.
    *   **No flow control:** Sender can transmit at any rate.
    *   **No congestion control:** Can contribute to network congestion.
    *   **Low overhead:** Smaller header size, faster transmission.
    *   **Port Numbers:** Used for demultiplexing to deliver data to the correct application process.
    *   **Checksum (Optional):** Can detect errors in the header and data, but corrupted datagrams are discarded without notification.
*   **UDP Header Structure:**
    *   **Source Port (16 bits):** Identifies the sending application.
    *   **Destination Port (16 bits):** Identifies the receiving application.
    *   **Length (16 bits):** Length of the UDP header plus the UDP data.
    *   **Checksum (16 bits):** For error detection.
*   **Example Usage:** DNS, DHCP, SNMP, VoIP, online gaming.

**Kurose & Ross (Chapter 2):** Details the UDP header and its minimalistic service. They explain how UDP leverages IP for addressing and routing.

**Forouzan (Chapter 18):** Provides a detailed breakdown of the UDP header and its functionality, emphasizing its role in applications that prioritize speed and can tolerate some data loss.

#### **3.2. Transmission Control Protocol (TCP)**

*   **Type:** Connection-Oriented
*   **Purpose:** Provides a **reliable, full-featured transport service**.
*   **Key Features:**
    *   **Connection Establishment (Three-way Handshake):**
        1.  **SYN (Synchronize):** Client sends a SYN segment to initiate a connection.
        2.  **SYN-ACK (Synchronize-Acknowledge):** Server responds with a SYN-ACK segment.
        3.  **ACK (Acknowledge):** Client sends an ACK segment to confirm the connection.
    *   **Reliable Data Transfer:**
        *   **Sequence Numbers:** Each byte of data is assigned a sequence number to ensure in-order delivery.
        *   **Acknowledgements (ACKs):** Receiver sends ACKs to confirm receipt of data.
        *   **Retransmission:** Sender retransmits data if an ACK is not received within a timeout period.
        *   **Cumulative Acknowledgements:** An ACK for a sequence number indicates all preceding bytes have been received.
    *   **Flow Control:** Uses a **sliding window** mechanism. The receiver advertises its available buffer space (receive window) to the sender, limiting the amount of unacknowledged data.
    *   **Congestion Control:** Implements algorithms to reduce the transmission rate when network congestion is detected (e.g., Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery).
    *   **Connection Termination:** Gracefully closes the connection using a FIN-ACK exchange.
    *   **Full-Duplex Communication:** Allows data to be sent in both directions simultaneously over the same connection.
*   **TCP Header Structure:**
    *   **Source Port (16 bits)**
    *   **Destination Port (16 bits)**
    *   **Sequence Number (32 bits):** The sequence number of the first byte in this segment.
    *   **Acknowledgement Number (32 bits):** If the ACK flag is set, this is the sequence number of the next byte expected.
    *   **Data Offset (4 bits):** Size of the TCP header in 32-bit words.
    *   **Reserved (6 bits)**
    *   **Control Flags (6 bits):** URG, ACK, PSH, RST, SYN, FIN.
    *   **Window Size (16 bits):** Number of bytes the sender is willing to receive.
    *   **Checksum (16 bits):** For error detection.
    *   **Urgent Pointer (16 bits):** Used with the URG flag.
    *   **Options (Variable):** For additional functionalities like Maximum Segment Size (MSS).
*   **Example Usage:** HTTP, FTP, SMTP, SSH.

**Kurose & Ross (Chapter 3):** Provides an in-depth explanation of TCP's mechanisms for reliable data transfer, flow control, and congestion control, including diagrams of the three-way handshake and sliding window.

**Forouzan (Chapter 19):** Offers a comprehensive treatment of TCP, including its header fields, connection establishment and termination, reliability mechanisms (acknowledgements, retransmissions), flow control, and congestion control algorithms.

---

### **4. Multiplexing and Demultiplexing in the Transport Layer**

This is a crucial function enabling multiple applications to share the network.

*   **Demultiplexing:** When the transport layer receives datagrams (from IP) at the destination host, it needs to deliver the data to the correct application process. This is done by examining the **destination port number** in the transport layer segment header.
*   **Multiplexing:** On the sending host, application processes send data to the transport layer, which then adds the appropriate header (UDP or TCP) containing the source and destination port numbers. This allows multiple application-level messages to be sent over a single network connection.

**Example:**

Imagine a web server and an FTP server running on the same machine.
*   When a web browser requests a page, the TCP segment will have the destination port number `80` (for HTTP).
*   When an FTP client requests a file, the TCP segment will have the destination port number `21` (for FTP).

The transport layer at the server uses these port numbers to direct the incoming data to the correct application process (web server or FTP server).

**Kurose & Ross (Chapter 2):** Explains how sockets are used to identify specific processes on a host. A socket is identified by a pair: (IP address, port number). This allows the transport layer to route segments to the correct process.

**Forouzan (Chapter 18):** Illustrates the process of multiplexing and demultiplexing, showing how port numbers are used to associate incoming segments with specific client processes.

---

### **5. Summary of Key Differences**

| Feature                 | UDP (Connectionless)                      | TCP (Connection-Oriented)                                  |
| :---------------------- | :---------------------------------------- | :--------------------------------------------------------- |
| **Connection Setup**    | No                                        | Yes (Three-way handshake)                                  |
| **Reliability**         | No (Best-effort)                          | Yes (Acknowledgements, retransmissions)                    |
| **Order**               | No guarantee                              | Guaranteed                                                 |
| **Flow Control**        | No                                        | Yes (Sliding window)                                       |
| **Congestion Control**  | No                                        | Yes                                                        |
| **Overhead**            | Low (smaller header)                      | High (larger header, state management)                     |
| **Speed**               | Faster                                    | Slower to start, but can be efficient once established     |
| **Typical Applications**| DNS, DHCP, VoIP, Streaming, Online Games  | HTTP, FTP, SMTP, SSH, Telnet                               |
| **Service Type**        | Datagram service                          | Stream service                                             |

---

### **6. Important Points to Remember:**

*   **Transport Layer:** Provides process-to-process communication.
*   **Port Numbers:** The key to demultiplexing and identifying applications.
*   **UDP:** Simple, fast, but unreliable. Good for real-time applications.
*   **TCP:** Reliable, ordered, and robust, but with more overhead. Essential for applications requiring data integrity.
*   **Connection Establishment (TCP):** The three-way handshake (SYN, SYN-ACK, ACK) is fundamental.
*   **Reliability (TCP):** Achieved through sequence numbers, acknowledgements, and retransmissions.
*   **Flow Control (TCP):** Prevents receiver overload using a sliding window.
*   **Congestion Control (TCP):** Prevents network overload by adjusting sending rate.

---

### **7. Practice Questions and Answers**

**Question 1:** Which transport layer protocol in the TCP/IP suite provides a reliable, connection-oriented service?
    a) UDP
    b) IP
    c) TCP
    d) HTTP

    **Answer:** c) TCP

**Question 2:** Explain the purpose of port numbers in the context of the transport layer. How do they facilitate multiplexing and demultiplexing?

    **Answer:** Port numbers are 16-bit identifiers that uniquely identify specific application processes running on a host. During multiplexing on the sending host, the transport layer associates data from an application with its specific port number and includes this in the segment header. At the receiving host, demultiplexing uses the destination port number in the segment header to deliver the data to the correct application process, allowing multiple applications to share network resources efficiently.

**Question 3:** List three applications that would typically use UDP and explain why.

    **Answer:**
    1.  **DNS (Domain Name System):** Queries are usually small and require a quick response. If a query or response is lost, the client can simply retransmit it.
    2.  **VoIP (Voice over IP):** Real-time audio transmission prioritizes speed. Dropping a few audio packets is less disruptive than delaying subsequent packets due to retransmission.
    3.  **Online Gaming:** Similar to VoIP, low latency is critical. Lost data (e.g., a frame update) is usually less detrimental than delayed data.

**Question 4:** Describe the three-way handshake process used by TCP to establish a connection.

    **Answer:** The TCP three-way handshake involves three steps:
    1.  **Client to Server (SYN):** The client sends a TCP segment with the SYN flag set, indicating a connection request, and includes an initial sequence number (ISN).
    2.  **Server to Client (SYN-ACK):** The server receives the SYN, allocates resources, and responds with a segment that has both the SYN and ACK flags set. It includes its own ISN and an acknowledgement number that is the client's ISN + 1.
    3.  **Client to Server (ACK):** The client receives the SYN-ACK, sends an ACK segment with an acknowledgement number set to the server's ISN + 1, confirming the connection is established.

**Question 5:** What is the primary mechanism TCP uses for flow control?

    **Answer:** TCP uses a **sliding window** mechanism for flow control. The receiver advertises its available buffer space as the "window size" to the sender. The sender limits the amount of unacknowledged data it sends to be no more than this advertised window size, preventing the sender from overwhelming the receiver.

---

### **8. Alignment with Course Outcomes:**

*   **CO1 (Principles and Components):** This topic covers the fundamental principles of the transport layer, its role in layered architecture, and the contrast between connection-oriented and connectionless communication.
*   **CO2 (Protocols and Functions):** We have demonstrated the functions of UDP and TCP, detailing their key features, header structures, and how they provide different services.

---

This concludes our notes on Transport Layer connectionless and connection-oriented protocols. Understanding these fundamental differences is key to grasping how reliable and unreliable data transfer is managed in computer networks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
