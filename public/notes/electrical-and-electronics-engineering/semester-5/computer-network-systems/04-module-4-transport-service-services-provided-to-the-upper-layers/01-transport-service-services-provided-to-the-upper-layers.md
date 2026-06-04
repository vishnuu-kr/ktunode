---
title: "Transport service – Services provided to the upper layers"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36492"
status: "completed"
scrapedAt: "2026-05-23T16:20:22.064Z"
---
# Computer Network Systems - Module 4: Transport Service

## Topic: Transport Service – Services Provided to the Upper Layers

**Course Outcome Alignment:** This topic directly addresses **CO4: Explain the services provided by the transport layer and application layer.** (Knowledge Level: K2)

---

### 1. Introduction to the Transport Layer

The transport layer is the **fourth layer** in the OSI model and the **third layer** in the TCP/IP model. Its primary responsibility is to provide **process-to-process communication** for applications running on different hosts. It acts as a bridge between the application layer (user services) and the network layer (host-to-host delivery).

**Key Concepts:**

*   **Process-to-Process Communication:** Unlike the network layer, which delivers packets to a destination host, the transport layer delivers data to a specific application process running on that host.
*   **End-to-End Communication:** The transport layer provides logical communication between processes running on different machines. This communication is independent of the underlying network topology.
*   **Multiplexing and Demultiplexing:** The transport layer allows multiple applications on a host to share the network connection. It multiplexes data from various applications onto a single network connection and demultiplexes incoming data to the correct application.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Chapter 17 discusses the transport layer's role in providing end-to-end services.
*   **Forouzan (5th ed.):** Chapter 17 covers the fundamental services and protocols of the transport layer.

---

### 2. Services Provided by the Transport Layer

The transport layer offers a variety of services to the application layer, which can be broadly categorized as follows:

#### 2.1 Connection-Oriented vs. Connectionless Service

The transport layer can provide either a connection-oriented or a connectionless service.

**a) Connection-Oriented Service:**

*   **Description:** Before data transfer begins, a connection is established between the two communicating processes. This connection is maintained throughout the communication and is then terminated. This is similar to making a phone call.
*   **Characteristics:**
    *   **Reliability:** Guarantees that data arrives at the destination in the correct order and without errors.
    *   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
    *   **Congestion Control:** Manages the rate of data transmission to avoid overloading the network.
    *   **Sequencing:** Data is delivered in the order it was sent.
    *   **Acknowledgement:** The receiver acknowledges the successful receipt of data.
*   **Advantages:**
    *   High reliability and accuracy.
    *   Suitable for applications requiring guaranteed delivery.
*   **Disadvantages:**
    *   Higher overhead due to connection establishment and teardown.
    *   Can be slower due to the need for acknowledgements.
*   **Example:** **TCP (Transmission Control Protocol)** is the primary connection-oriented transport protocol in the Internet. It is used by applications like web browsing (HTTP), email (SMTP), and file transfer (FTP).

**b) Connectionless Service:**

*   **Description:** Data is sent in independent packets without establishing a prior connection. Each packet is routed and delivered individually. This is similar to sending postcards.
*   **Characteristics:**
    *   **Unreliable:** No guarantee of delivery, order, or absence of duplication.
    *   **No Flow Control:** The sender can send data as fast as it wants.
    *   **No Congestion Control (inherently):** The protocol itself doesn't manage network congestion.
*   **Advantages:**
    *   Lower overhead and faster transmission.
    *   Suitable for applications where speed is critical and some data loss is acceptable.
*   **Disadvantages:**
    *   Unreliable delivery.
    *   Data may arrive out of order or be lost.
*   **Example:** **UDP (User Datagram Protocol)** is the primary connectionless transport protocol in the Internet. It is used by applications like streaming media (VoIP, video conferencing), online gaming, and DNS (Domain Name System).

**Important Point to Remember:** The choice between connection-oriented and connectionless services depends on the requirements of the application.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Section 17.1 discusses the fundamental distinction between connection-oriented and connectionless services.
*   **Forouzan (5th ed.):** Chapter 17.1 elaborates on these two service types.
*   **Kurose & Ross (6th ed.):** Chapter 5 provides a detailed comparison of TCP (connection-oriented) and UDP (connectionless).

---

#### 2.2 Reliable Data Transfer

This service ensures that data sent by the sender is received correctly and in the order it was sent by the receiver.

**Mechanisms for Reliable Data Transfer:**

*   **Sequence Numbers:** Each segment is assigned a sequence number, allowing the receiver to reassemble the data in the correct order.
*   **Acknowledgements (ACKs):** The receiver sends acknowledgements to the sender to confirm the successful receipt of data segments.
*   **Timeouts and Retransmission:** If the sender does not receive an ACK within a certain time limit, it assumes the segment was lost and retransmits it.
*   **Negative Acknowledgements (NACKs):** In some protocols, the receiver can explicitly inform the sender about lost segments.
*   **Checksums:** A checksum is calculated for each segment and transmitted. The receiver recalculates the checksum and compares it with the transmitted one. If they don't match, the segment is considered corrupted and discarded.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Chapter 17.2 covers reliability mechanisms in detail.
*   **Forouzan (5th ed.):** Chapter 17.2 discusses techniques for achieving reliable data transfer.
*   **Stevens (TCP/IP Illustrated Vol. 1):** Chapters 1 and 2 provide in-depth explanations of TCP's reliability features.

---

#### 2.3 Flow Control

Flow control prevents a fast sender from overwhelming a slow receiver. It ensures that the sender does not transmit data faster than the receiver can process it.

**Mechanisms for Flow Control:**

*   **Sliding Window Protocol:** This is the most common mechanism.
    *   **Description:** The sender and receiver agree on a window size, which represents the maximum number of unacknowledged segments that the sender can have in transit at any given time.
    *   **How it works:**
        *   The sender maintains a "send window," which is the range of sequence numbers it is allowed to send.
        *   The receiver maintains a "receive window," which is the range of sequence numbers it is prepared to accept.
        *   As the sender transmits segments, its send window slides forward.
        *   As the receiver acknowledges segments, its receive window also slides forward.
        *   The receiver advertises its current receive window size to the sender, effectively telling the sender how much buffer space is available.
*   **Stop-and-Wait Protocol (a simpler form of flow control):**
    *   **Description:** The sender sends one segment and waits for an acknowledgement before sending the next. This is highly inefficient for networks with high bandwidth or long delays.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Section 17.3 details flow control mechanisms, including the sliding window.
*   **Forouzan (5th ed.):** Chapter 17.3 explains flow control and its importance.
*   **Kurose & Ross (6th ed.):** Chapter 5.3 provides a good explanation of TCP's flow control using the sliding window.

---

#### 2.4 Congestion Control

Congestion control aims to prevent the network from becoming overloaded with data, which can lead to significant performance degradation (packet loss, increased delays). It is a mechanism that operates at the transport layer to manage the rate at which data is sent into the network.

**Key Concepts:**

*   **Congestion:** Occurs when the rate of packets entering the network exceeds the capacity of routers to handle them, leading to buffer overflows and packet loss.
*   **End-to-End Congestion Control:** The sender infers congestion based on network performance metrics (e.g., packet loss, increased round-trip time) and adjusts its sending rate accordingly.
*   **Network-Assisted Congestion Control:** Routers can signal congestion to end hosts (e.g., using Explicit Congestion Notification - ECN).

**Common Congestion Control Algorithms (primarily used by TCP):**

*   **Slow Start:** Gradually increases the sending rate at the beginning of a connection or after a period of inactivity. The sending rate (congestion window size) doubles with each successful round-trip time.
*   **Congestion Avoidance:** Once a certain threshold is reached, the sending rate is increased more slowly (linearly) to probe for available bandwidth without causing congestion.
*   **Fast Retransmit:** Allows the sender to retransmit a lost segment without waiting for a timeout, typically triggered by receiving multiple duplicate ACKs.
*   **Fast Recovery:** After a fast retransmit, the sender adjusts its congestion window and continues sending without completely restarting the slow start phase.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Chapter 17.4 provides an overview of congestion control.
*   **Forouzan (5th ed.):** Chapter 17.4 discusses congestion control.
*   **Kurose & Ross (6th ed.):** Chapter 5.5 is dedicated to TCP congestion control.
*   **Stevens (TCP/IP Illustrated Vol. 1):** Chapter 17 delves into TCP's congestion control mechanisms.

---

#### 2.5 Multiplexing and Demultiplexing

The transport layer allows multiple application processes on a host to share the network connection.

*   **Multiplexing:** At the sending host, the transport layer takes data from different application processes and appends its header (containing port numbers) before passing it to the network layer.
*   **Demultiplexing:** At the receiving host, the transport layer examines the header of an incoming segment, identifies the destination port number, and forwards the data to the appropriate application process.

**Key Concept: Port Numbers**

*   **Description:** Port numbers are 16-bit identifiers that distinguish between different processes running on a host. They are part of the transport layer header.
*   **Well-Known Ports:** Reserved for common services (e.g., HTTP - 80, FTP - 21, SSH - 22, DNS - 53).
*   **Registered Ports:** Used by specific applications or services.
*   **Dynamic/Private Ports:** Used for ephemeral connections.

**Example:** If a web browser on Host A wants to fetch a webpage from a web server on Host B, the transport layer on Host A will assign a source port number (e.g., 50000) and use the web server's destination port number (80) in the TCP/UDP header. On Host B, the transport layer will receive the segment, see port 80, and deliver the data to the web server process.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Section 17.5 discusses multiplexing and demultiplexing.
*   **Forouzan (5th ed.):** Chapter 17.5 explains these concepts.
*   **Kurose & Ross (6th ed.):** Chapter 5.1 introduces the concept of multiplexing/demultiplexing using port numbers.

---

### 3. Transport Layer Protocols: TCP and UDP

The Internet's transport layer primarily uses two protocols: TCP and UDP.

#### 3.1 TCP (Transmission Control Protocol)

*   **Service Type:** Connection-oriented, reliable.
*   **Key Features:**
    *   **Full-duplex communication:** Data can be sent and received simultaneously.
    *   **Connection establishment:** Uses a three-way handshake (SYN, SYN-ACK, ACK) to set up a connection.
    *   **Connection termination:** Uses a four-way handshake to gracefully close a connection.
    *   **Reliable data transfer:** Through sequence numbers, ACKs, timeouts, and retransmissions.
    *   **Flow control:** Implements a sliding window mechanism.
    *   **Congestion control:** Employs sophisticated algorithms to manage network congestion.
    *   **Ordered data delivery:** Ensures data arrives in the correct sequence.
*   **Header Size:** 20 bytes (minimum, without options).

**When to use TCP:**

*   When reliability is paramount (e.g., file transfer, email, web browsing).
*   When data integrity and order are critical.

**Textbook References:**

*   **Tanenbaum (5th ed.):** Chapters 17.2, 17.3, 17.4, and 17.5 cover TCP's services and mechanisms.
*   **Forouzan (5th ed.):** Chapter 17.2, 17.3, 17.4, 17.5 describe TCP's features.
*   **Stevens (TCP/IP Illustrated Vol. 1):** Entire book is dedicated to TCP.
*   **Kurose & Ross (6th ed.):** Chapter 5.3, 5.4, 5.5 discuss TCP's reliability, flow control, and congestion control.

#### 3.2 UDP (User Datagram Protocol)

*   **Service Type:** Connectionless, unreliable.
*   **Key Features:**
    *   **Connectionless:** No prior connection establishment.
    *   **Unreliable:** No guarantee of delivery, order, or duplicate prevention.
    *   **Minimal overhead:** Simple header, fast.
    *   **Checksum (optional):** Provides error detection but not correction.
*   **Header Size:** 8 bytes.

**When to use UDP:**

*   When speed and low overhead are more important than reliability (e.g., streaming media, VoIP, online gaming).
*   When the application itself implements reliability mechanisms (e.g., some real-time applications).
*   For simple request-response protocols where retransmission is handled by the application (e.g., DNS).

**Textbook References:**

*   **Tanenbaum (5th ed.):** Section 17.1 mentions UDP as the connectionless alternative.
*   **Forouzan (5th ed.):** Chapter 17.1 introduces UDP.
*   **Kurose & Ross (6th ed.):** Chapter 5.2 explains UDP's services.

---

### 4. Transport Layer Services and Course Outcomes Alignment

This module's content directly contributes to achieving **CO4: Explain the services provided by the transport layer and application layer.**

*   **Understanding Process-to-Process Communication:** The core of the transport layer's services is enabling communication between applications on different hosts, which is crucial for understanding how applications interact across a network.
*   **Reliability, Flow Control, and Congestion Control:** These services are fundamental to ensuring efficient and robust data delivery, directly impacting application performance. Applications rely on these services to function correctly.
*   **TCP vs. UDP:** Understanding the distinct services offered by TCP and UDP helps in comprehending why certain applications choose one over the other, bridging the gap to application layer considerations.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary function of the transport layer?

**Answer:** The primary function of the transport layer is to provide **process-to-process communication** between applications running on different hosts.

**Question 2:** Differentiate between connection-oriented and connectionless transport services. Provide an example of a protocol for each.

**Answer:**
*   **Connection-Oriented:** Establishes a dedicated connection before data transfer, provides reliable delivery, flow control, and ordered data. **Example: TCP.**
*   **Connectionless:** Sends data in independent packets without establishing a connection, offers no guarantees on delivery, order, or error correction. **Example: UDP.**

**Question 3:** Explain the purpose of sequence numbers in reliable data transfer.

**Answer:** Sequence numbers are used to uniquely identify each segment sent. The receiver uses these numbers to **reorder segments** that may have arrived out of order and to detect missing segments, thus ensuring reliable and ordered data delivery.

**Question 4:** How does flow control prevent a fast sender from overwhelming a slow receiver?

**Answer:** Flow control mechanisms, such as the **sliding window protocol**, limit the amount of unacknowledged data a sender can transmit. The receiver advertises its available buffer space (receive window), and the sender respects this limit, ensuring it doesn't send data faster than the receiver can process.

**Question 5:** Name two key features that distinguish TCP from UDP.

**Answer:**
1.  **Reliability:** TCP is reliable, while UDP is unreliable.
2.  **Connection Establishment:** TCP is connection-oriented (requires handshake), while UDP is connectionless.
3.  **Overhead:** TCP has higher overhead (larger header, more complex mechanisms), while UDP has lower overhead.

---

### 6. Important Points to Remember

*   The transport layer is responsible for **process-to-process communication**.
*   The two main service types are **connection-oriented** (like TCP) and **connectionless** (like UDP).
*   **Reliability, flow control, and congestion control** are key services provided by connection-oriented protocols like TCP.
*   **Port numbers** are essential for multiplexing and demultiplexing data to the correct application process.
*   **TCP** is suitable for applications where reliability is critical, while **UDP** is preferred for speed and low overhead when reliability is less of a concern or handled by the application.

---
