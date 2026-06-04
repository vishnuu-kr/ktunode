---
title: "ELECTRICAL AND ELECTRONICS Transmission Control Protocol (TCP) – Introduction"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36496"
status: "completed"
scrapedAt: "2026-05-23T16:20:24.909Z"
---
# Computer Network Systems - Module 4: Transport Service - Services Provided to Upper Layers

## Topic: Transmission Control Protocol (TCP) - Introduction

**Course Outcomes Addressed:** CO4 (Explain the services provided by the transport layer and application layer.)

**Knowledge Level:** K2 (Understand)

---

### 1. Introduction to the Transport Layer

The Transport Layer is the **fourth layer** in the OSI (Open Systems Interconnection) model and the **third layer** in the TCP/IP model. It acts as a bridge between the application layer and the network layer, providing services to the applications running on a host.

**Key Concepts:**

*   **End-to-End Communication:** The transport layer provides communication between processes running on different hosts, rather than just between devices. This means it deals with the actual delivery of data from a sending application process to a receiving application process.
*   **Process-to-Process Delivery:** The network layer delivers packets to the correct destination host, but the transport layer is responsible for delivering those packets to the correct *process* or *application* on that host. This is achieved using **port numbers**.
*   **Abstraction of the Network:** The transport layer hides the complexities of the underlying network from the application layer. Applications don't need to know if the network is reliable or unreliable, or how it handles packet loss or reordering.

**Tanenbaum (5th Ed., Chapter 5):** Emphasizes the role of the transport layer in providing a logical communication channel between application processes. It highlights that the transport layer is responsible for segmentation, multiplexing, and error control.

**Forouzan (5th Ed., Chapter 18):** Focuses on the services provided by the transport layer, including connection establishment, data transfer, and connection release. It introduces the concept of connectionless versus connection-oriented services.

---

### 2. Services Provided by the Transport Layer

The transport layer offers a range of services to the application layer, broadly categorized into connection-oriented and connectionless.

**2.1. Connection-Oriented Service:**

This service type establishes a virtual connection between the sending and receiving processes before data transfer begins and terminates it after the transfer is complete.

**Key Features:**

*   **Reliable Data Transfer:** Guarantees that data arrives at the destination correctly, in the correct order, and without duplication. This is achieved through mechanisms like sequence numbers, acknowledgments, and retransmissions.
*   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver. It ensures that the sender doesn't transmit data faster than the receiver can process it.
*   **Congestion Control:** Manages the rate at which data is sent into the network to avoid network congestion, which can lead to performance degradation and packet loss.
*   **Ordered Data Transfer:** Ensures that data segments are delivered to the receiving application in the same order they were sent.

**Tanenbaum (5th Ed., Chapter 5):** Describes connection-oriented services as providing a virtual circuit, similar to a telephone call, where a dedicated path is established for the duration of the communication.

**Forouzan (5th Ed., Chapter 18):** Details the three phases of connection-oriented communication: connection establishment, data transfer, and connection termination.

**Example:** Imagine sending a large file over the internet. A connection-oriented service would ensure that every part of the file arrives, in the correct order, without any missing or corrupted pieces.

**2.2. Connectionless Service:**

This service type sends data segments independently, without establishing a prior connection. Each segment is treated as a separate message.

**Key Features:**

*   **Unreliable Data Transfer:** Does not guarantee delivery, order, or freedom from duplication. Packets might be lost, arrive out of order, or be duplicated.
*   **No Flow Control:** The sender can transmit data at any rate it chooses, potentially overwhelming the receiver or the network.
*   **No Congestion Control:** The sender does not inherently manage its transmission rate based on network conditions.
*   **No Guaranteed Order:** Segments may arrive at the destination in a different order than they were sent.

**Tanenbaum (5th Ed., Chapter 5):** Compares connectionless services to sending postcards, where each is sent independently and may or may not arrive.

**Forouzan (5th Ed., Chapter 18):** Highlights the simplicity and speed of connectionless services, suitable for applications where occasional packet loss is acceptable.

**Example:** Think of sending individual text messages in a chat application. If a message is lost or arrives out of order, it might be less critical than in file transfer.

---

### 3. Transmission Control Protocol (TCP) - Introduction

**TCP (Transmission Control Protocol)** is the **primary transport layer protocol** that provides **connection-oriented, reliable, and ordered data delivery**. It is a fundamental protocol in the Internet Protocol Suite (TCP/IP).

**Tanenbaum (5th Ed., Chapter 5):** Positions TCP as the workhorse of the Internet, responsible for delivering almost all reliable data transfer between applications.

**Forouzan (5th Ed., Chapter 18):** Introduces TCP as one of the two core protocols of the TCP/IP suite, alongside IP. It emphasizes TCP's robustness and its role in supporting applications like web browsing, email, and file transfer.

**Kurose & Ross (6th Ed., Chapter 5):** Explains TCP's goal of providing a reliable byte stream, abstracting away the complexities of packet loss, reordering, and duplication from the application layer.

**Key Characteristics of TCP:**

*   **Connection-Oriented:** Before any data transfer, TCP establishes a connection between the sender and receiver. This involves a **three-way handshake**.
*   **Full-Duplex:** Data can be sent and received simultaneously over an established TCP connection.
*   **Stream-Oriented:** TCP treats data as a continuous stream of bytes. The application layer can send and receive bytes at its own pace.
*   **Reliable:** TCP ensures that data is delivered correctly and completely.
*   **Ordered:** TCP guarantees that data is delivered to the receiving application in the same order it was sent.
*   **Flow Controlled:** TCP manages the rate of data transmission to prevent overwhelming the receiver.
*   **Congestion Controlled:** TCP actively participates in managing network congestion.

---

### 4. Port Numbers: Identifying Processes

To achieve process-to-process delivery, the transport layer uses **port numbers**. These are small integers that uniquely identify a specific process or service running on a host.

**Key Concepts:**

*   **Well-Known Ports (0-1023):** Assigned to standard, well-known services like HTTP (80), FTP (21), SMTP (25), SSH (22). These are generally managed by organizations like IANA (Internet Assigned Numbers Authority).
*   **Registered Ports (1024-49151):** Assigned to specific applications or services registered with IANA.
*   **Dynamic/Private Ports (49152-65535):** Used for ephemeral connections, often assigned automatically by the operating system for temporary client-side connections.

**Tanenbaum (5th Ed., Chapter 5):** Explains port numbers as the addresses used by the transport layer to differentiate between multiple applications running on the same host.

**Forouzan (5th Ed., Chapter 18):** Illustrates how port numbers are used in TCP/IP to direct incoming data to the correct application process.

**Example:** When you browse a website, your browser (client) might connect to a web server on port 80 (HTTP). The server, listening on port 80, receives the request and sends the web page back to your browser's specific ephemeral port number.

---

### 5. TCP vs. UDP (A Glimpse)

While this topic focuses on TCP, it's important to briefly contrast it with UDP (User Datagram Protocol), the other major transport layer protocol.

*   **TCP:** Connection-oriented, reliable, ordered, flow control, congestion control. (e.g., Web browsing, Email, File Transfer)
*   **UDP:** Connectionless, unreliable, unordered, no flow/congestion control. (e.g., DNS, Streaming Media, Online Gaming)

**Forouzan (5th Ed., Chapter 18):** Dedicates a section to comparing TCP and UDP, highlighting their strengths and weaknesses and the types of applications they are best suited for.

**Tanenbaum (5th Ed., Chapter 5):** Also provides a comparative analysis of TCP and UDP.

---

### 6. Important Points to Remember

*   The transport layer provides **end-to-end**, **process-to-process** communication.
*   **Port numbers** are crucial for multiplexing and demultiplexing at the transport layer.
*   TCP offers **reliable, ordered, and connection-oriented** services.
*   UDP offers **unreliable, connectionless** services.
*   TCP's reliability is achieved through mechanisms like sequence numbers, acknowledgments, and retransmissions.
*   Flow control and congestion control are key features of TCP that contribute to network stability and efficiency.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary role of the transport layer in a computer network?

**Answer:** The primary role of the transport layer is to provide logical communication between application processes running on different hosts. It handles process-to-process delivery and abstracts the underlying network complexities.

**Question 2:** Name two key services provided by connection-oriented transport protocols like TCP.

**Answer:** Two key services are reliable data transfer and ordered data delivery. Flow control and congestion control are also important services.

**Question 3:** How does the transport layer ensure that data is delivered to the correct application on a host?

**Answer:** The transport layer uses port numbers to identify specific processes or applications running on a host.

**Question 4:** Briefly describe the difference between TCP and UDP in terms of reliability.

**Answer:** TCP is reliable, guaranteeing data delivery, order, and no duplication. UDP is unreliable and makes no such guarantees.

**Question 5:** If you were designing a real-time video streaming application, would you choose TCP or UDP, and why?

**Answer:** UDP would generally be preferred for real-time video streaming. While it's unreliable, its lower overhead and lack of retransmission delays make it more suitable for time-sensitive applications where occasional packet loss is acceptable (e.g., a dropped frame is less disruptive than a long buffering delay caused by TCP retransmissions).

---
