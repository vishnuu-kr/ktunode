---
title: "Connection oriented versus connectionless service"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 1: Introduction – Uses of computer networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36464"
status: "completed"
scrapedAt: "2026-05-23T16:19:49.443Z"
---
# Computer Network Systems - Module 1: Introduction – Uses of Computer Networks

## Topic: Connection-Oriented vs. Connectionless Service

This topic explores two fundamental approaches to providing network services: connection-oriented and connectionless. Understanding these differences is crucial for comprehending how data is reliably transmitted across networks.

---

### Learning Outcomes Covered:

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.** (Knowledge Level: K2)
    *   This topic directly relates to the services provided by different layers, particularly the Transport Layer, and how these services influence network communication.
*   **CO4: Explain the services provided by the transport layer and application layer.** (Knowledge Level: K2)
    *   Connection-oriented and connectionless services are key offerings of the Transport Layer.

---

### Key Concepts and Definitions:

#### 1. Service Types:

Network layers can provide different types of services to the layer above them. These services define how data is transmitted and the guarantees, if any, provided by the network. Two primary service models are:

*   **Connection-Oriented Service:**
    *   **Definition:** A service that establishes a dedicated connection between the source and destination *before* data transmission begins. This connection is maintained throughout the data transfer and is torn down *after* the data transfer is complete.
    *   **Analogy:** Similar to making a phone call. You dial a number, wait for the other party to answer (establishing a connection), have a conversation, and then hang up (tearing down the connection).
    *   **Key Characteristics:**
        *   **Connection Setup:** Requires a handshake process to establish the connection.
        *   **Reliability:** Typically provides guaranteed delivery, in-order delivery, and error checking.
        *   **Stateful:** The network (or the protocol at that layer) maintains state information about the connection.
        *   **Flow Control:** Mechanisms to prevent a fast sender from overwhelming a slow receiver.
        *   **Congestion Control:** Mechanisms to manage network traffic and prevent overload.
        *   **Sequencing:** Data packets are delivered in the order they were sent.
        *   **Error Detection and Correction:** Packets that are lost, corrupted, or duplicated are detected, and often retransmitted or corrected.
        *   **Cost:** Generally more overhead due to connection setup, maintenance, and teardown.

*   **Connectionless Service:**
    *   **Definition:** A service that sends data packets (datagrams) independently without establishing a prior connection. Each packet is routed and delivered to the destination on a best-effort basis.
    *   **Analogy:** Similar to sending a postcard or a letter via postal mail. You write the address on the envelope and drop it in the mailbox. Each postcard travels independently through the postal system and may arrive at different times, or not at all.
    *   **Key Characteristics:**
        *   **No Connection Setup:** Data packets are sent immediately.
        *   **Best-Effort Delivery:** No guarantees of delivery, order, or error-free transmission.
        *   **Stateless:** The network (or the protocol at that layer) does not maintain state information about individual communications.
        *   **No Flow Control:** The sender can send data as fast as it wants.
        *   **No Congestion Control (inherently):** If the network becomes congested, packets may be dropped.
        *   **No Sequencing:** Packets may arrive out of order.
        *   **Minimal Overhead:** Each packet carries all necessary addressing and control information.
        *   **Simplicity and Speed:** Generally faster and simpler than connection-oriented services due to less overhead.

---

### 2. Layers Where These Services Are Found:

*   **Network Layer (Layer 3):**
    *   **Connectionless:** The most common service provided by the Network Layer, exemplified by **IP (Internet Protocol)**. Each IP packet (datagram) is treated independently.
    *   **Connection-Oriented:** Less common at this layer in modern networks, but protocols like **CLNP (Connectionless Network Protocol)** and **X.25** offered connection-oriented services.

*   **Transport Layer (Layer 4):**
    *   **Connection-Oriented:** **TCP (Transmission Control Protocol)** is the quintessential example. It provides reliable, ordered, and error-checked delivery of a stream of bytes.
    *   **Connectionless:** **UDP (User Datagram Protocol)** is the primary example. It provides a simple, unreliable datagram service with minimal overhead.

---

### 3. Comparison of Connection-Oriented and Connectionless Services:

| Feature                | Connection-Oriented Service                                  | Connectionless Service                                      |
| :--------------------- | :----------------------------------------------------------- | :---------------------------------------------------------- |
| **Connection Setup**   | Required before data transfer (handshake)                    | Not required; data sent immediately                          |
| **Reliability**        | High (guaranteed delivery, order, error checking)            | Low (best-effort delivery, no guarantees)                   |
| **State Management**   | Stateful (connection state maintained)                       | Stateless (no connection state maintained)                  |
| **Flow Control**       | Yes (prevents sender from overwhelming receiver)             | No (sender can send at its own pace)                        |
| **Congestion Control** | Yes (manages network traffic to avoid overload)              | No (packets may be dropped during congestion)               |
| **Sequencing**         | Yes (packets delivered in order)                             | No (packets may arrive out of order)                        |
| **Packet Loss**        | Handled via retransmission or error correction               | Not handled; application must manage if needed              |
| **Overhead**           | Higher (setup, teardown, state maintenance)                  | Lower (minimal header information)                          |
| **Speed/Efficiency**   | Can be slower due to overhead, but more predictable          | Generally faster and more efficient for simple transmissions |
| **Use Cases**          | File transfer (FTP), web browsing (HTTP), email (SMTP), secure shell (SSH) | Streaming media (video/audio), online gaming, DNS queries   |
| **Examples**           | TCP, SPX (older Novell NetWare)                              | UDP, IP, ICMP                                               |

---

### 4. Examples and Analogies:

*   **Connection-Oriented (TCP):**
    *   **Web Browsing (HTTP):** When you request a web page, your browser establishes a TCP connection to the web server. The server sends the HTML, images, etc., in ordered packets. If any packet is lost, TCP will retransmit it, ensuring you get the complete page correctly. (Tanenbaum, 5th Ed., Chapter 7; Forouzan, 5th Ed., Chapter 7)
    *   **File Transfer (FTP):** Downloading a large file requires a reliable and ordered transfer to ensure the integrity of the file. TCP's features are essential here.

*   **Connectionless (UDP):**
    *   **Video Streaming:** In live video streaming, a few dropped frames or slight out-of-order delivery is often acceptable if it means maintaining a smooth, real-time experience. UDP's speed and low overhead are advantageous. If you missed a frame, it's better to move on than to wait for a retransmission. (Kurose & Ross, 6th Ed., Chapter 3)
    *   **Online Gaming:** Similar to video streaming, speed is paramount. Minor packet loss might cause a slight visual glitch, but waiting for retransmissions would cause lag and disrupt gameplay.
    *   **DNS (Domain Name System):** DNS queries are typically small and need to be fast. If a UDP DNS query is lost, the client simply times out and sends another query. (Stevens, TCP/IP Illustrated Vol. 1, Chapter 1)

---

### 5. Impact on Application Design:

*   **Connection-Oriented:** Applications can assume that data will arrive reliably and in order. This simplifies application development as the burden of reliability is handled by the Transport Layer protocol.
*   **Connectionless:** Applications that use connectionless services must be prepared to handle potential issues like packet loss, duplication, or out-of-order delivery. They might need to implement their own reliability mechanisms if required.

---

### 6. Connection-Oriented vs. Connectionless at Different Layers:

*   **Network Layer (e.g., IP):**
    *   **Connectionless (IP):** IP provides best-effort datagram delivery. It doesn't guarantee delivery, order, or lack of duplication. This simplicity allows IP to be highly scalable and efficient, forming the backbone of the Internet. (Peterson & Davie, 5th Ed., Chapter 4)
    *   **Connection-Oriented (e.g., older protocols like X.25):** These protocols established virtual circuits, allowing for connection-oriented services at the network layer. However, IP's statelessness and the rise of reliable transport protocols like TCP led to their decline.

*   **Transport Layer (e.g., TCP/UDP):**
    *   **Connection-Oriented (TCP):** Offers reliable byte stream service. Its features (flow control, congestion control, acknowledgments, retransmissions) make it suitable for applications where data integrity is critical.
    *   **Connectionless (UDP):** Offers unreliable datagram service. It's ideal for applications prioritizing speed and low latency over perfect reliability.

---

### Important Points to Remember:

*   **Connection-oriented is like a phone call; connectionless is like sending a postcard.**
*   **Reliability and ordering are key differentiators.** Connection-oriented provides them; connectionless does not.
*   **TCP is connection-oriented; UDP is connectionless.** Both operate at the Transport Layer.
*   **IP is connectionless** at the Network Layer.
*   **Overhead is higher for connection-oriented** due to state maintenance and handshake.
*   **The choice between them depends on application requirements:** reliability vs. speed/latency.

---

### Practice Questions and Exercises:

**Question 1:**
Describe the main differences between connection-oriented and connectionless services. Provide an analogy for each.

**Answer 1:**
*   **Connection-Oriented:** Establishes a dedicated connection before data transfer, maintains state, and provides reliable, ordered, and error-checked delivery. Analogy: A phone call.
*   **Connectionless:** Sends data packets independently without a prior connection, offers best-effort delivery with no guarantees on reliability or order. Analogy: Sending a postcard.

**Question 2:**
Which Transport Layer protocol is connection-oriented, and which is connectionless? Give one example application that typically uses each.

**Answer 2:**
*   **Connection-Oriented:** TCP (Transmission Control Protocol). Example application: Web browsing (HTTP).
*   **Connectionless:** UDP (User Datagram Protocol). Example application: Video streaming.

**Question 3:**
Why is IP (Internet Protocol) considered a connectionless protocol? What are the implications of this for applications using IP?

**Answer 3:**
IP is connectionless because each IP packet (datagram) is routed and transmitted independently of other packets. There is no prior establishment of a connection or maintenance of connection state. The implications are that applications using IP directly must be prepared to handle packet loss, duplication, and out-of-order delivery if reliability is required. They might need to implement their own mechanisms for these issues or rely on higher-layer protocols like TCP.

**Question 4:**
Imagine you are designing a network protocol for a voice-over-IP (VoIP) application. Would you lean towards a connection-oriented or connectionless service at the Transport Layer? Justify your answer.

**Answer 4:**
For a VoIP application, a **connectionless** service at the Transport Layer (like UDP) would generally be preferred. This is because real-time voice communication prioritizes low latency and speed. While some packet loss might occur, the overhead and delay associated with establishing and maintaining a connection-oriented service (like TCP) would be detrimental to the real-time nature of voice calls. Missing a few audio packets is often acceptable if it means avoiding noticeable delays or jitter.

**Question 5:**
True or False: Connection-oriented services always have higher overhead than connectionless services. Explain why.

**Answer 5:**
**True.** Connection-oriented services incur higher overhead due to several factors:
1.  **Connection Setup:** A handshake process is required to establish the connection.
2.  **State Maintenance:** The network or protocol must maintain state information for each active connection (e.g., sequence numbers, timers, window sizes).
3.  **Connection Teardown:** A process is needed to gracefully close the connection.
4.  **Acknowledgments and Retransmissions:** For reliability, data packets are often acknowledged, and lost packets are retransmitted, adding to the overhead.
Connectionless services, by contrast, send each packet independently with minimal header information and no state maintenance, resulting in lower overhead.

---

This concludes the study notes for Connection-Oriented versus Connectionless Service. Remember to consult your textbooks for deeper dives into the specifics of protocols like TCP and UDP.
