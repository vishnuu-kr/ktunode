---
title: "User Datagram Protocol (UDP) – Introduction"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36494"
status: "completed"
scrapedAt: "2026-05-23T16:20:23.477Z"
---
# Computer Network Systems: Module 4 - Transport Service

## Topic: User Datagram Protocol (UDP) – Introduction

---

### **1. Introduction to the Transport Layer and its Services (CO4, K2)**

The transport layer is responsible for providing end-to-end communication services for applications. It acts as an intermediary between the application layer and the network layer, bridging the gap between the diverse needs of applications and the general-purpose service provided by the network layer.

**Key Services Provided by the Transport Layer:**

*   **Process-to-Process Delivery:** Unlike the network layer which delivers packets from one host to another, the transport layer delivers data from a specific process on one host to a specific process on another host. This is achieved through **port numbers**.
*   **Encapsulation/Decapsulation:** The transport layer adds its own header information to the data segment received from the application layer. This header contains control information necessary for end-to-end communication. On the receiving end, the transport layer removes its header.
*   **Multiplexing and Demultiplexing:**
    *   **Multiplexing:** Allows multiple applications running on a host to share the network connection by sending their data through the transport layer.
    *   **Demultiplexing:** On the receiving host, the transport layer identifies which application the incoming data belongs to and forwards it accordingly, based on the port numbers in the transport layer header.
*   **Connection Management (Optional):** Some transport protocols (like TCP) provide connection-oriented services, establishing a virtual connection before data transfer.
*   **Reliability (Optional):** Some protocols ensure that data arrives without errors and in the correct order, using mechanisms like acknowledgments and retransmissions.
*   **Flow Control (Optional):** Prevents a fast sender from overwhelming a slow receiver.
*   **Congestion Control (Optional):** Manages the amount of data sent into the network to prevent network congestion.

**Reference:**
*   **Tanenbaum (5th Ed.):** Chapter 5, "The Transport Layer."
*   **Forouzan (5th Ed.):** Chapter 17, "Transport-Layer Protocols."
*   **Kurose & Ross (6th Ed.):** Chapter 5, "Transport Layer: Reliable Data Transfer."

---

### **2. Understanding the User Datagram Protocol (UDP) (CO4, K2)**

The User Datagram Protocol (UDP) is one of the two fundamental transport layer protocols in the TCP/IP suite, the other being TCP. UDP is a **connectionless, unreliable** transport protocol. It provides a minimal set of services, primarily focusing on **process-to-process delivery** and **multiplexing/demultiplexing**.

**Key Characteristics of UDP:**

*   **Connectionless:** UDP does not establish a dedicated connection before sending data. Each datagram is sent independently of others.
*   **Unreliable:** UDP does not guarantee that datagrams will arrive at the destination. It does not provide:
    *   **Ordered Delivery:** Datagrams may arrive out of order.
    *   **Error Detection and Correction (beyond checksum):** While UDP has a checksum for detecting errors in the header and data, it does not perform retransmissions if an error is detected. The receiver can discard a corrupted datagram.
    *   **Flow Control:** UDP does not have mechanisms to prevent a fast sender from overwhelming a slow receiver.
    *   **Congestion Control:** UDP does not inherently participate in network congestion control.
*   **Minimal Overhead:** Due to its lack of complex features, UDP has a very small header, making it efficient for applications that don't require reliability.
*   **Datagram-Oriented:** Data is sent in discrete packets called datagrams.

**Comparison with TCP:**

| Feature            | UDP                                  | TCP                                   |
| :----------------- | :----------------------------------- | :------------------------------------ |
| Connection Model   | Connectionless                       | Connection-oriented                   |
| Reliability        | Unreliable                           | Reliable                              |
| Ordering           | No guaranteed order                  | Guaranteed order                      |
| Speed              | Faster                               | Slower                                |
| Overhead           | Low (smaller header)                 | High (larger header, state management)|
| Flow Control       | No                                   | Yes                                   |
| Congestion Control | No                                   | Yes                                   |
| Use Cases          | Streaming, DNS, VoIP, Online Gaming  | Web Browsing, Email, File Transfer    |

**Reference:**
*   **Tanenbaum (5th Ed.):** Chapter 5.4, "UDP."
*   **Forouzan (5th Ed.):** Chapter 20, "UDP."
*   **Kurose & Ross (6th Ed.):** Chapter 2, "Application Layer" (brief mention of UDP's role), Chapter 5.5.1, "UDP."
*   **Stevens (Vol 1):** Chapter 20, "UDP."

---

### **3. UDP Header Format (CO4, K2)**

The UDP header is very simple, containing only essential information for demultiplexing and error checking. It is 8 bytes long.

**UDP Header Fields:**

| Field          | Size (bytes) | Description
