---
title: "Basic principles of switching - Circuit switching, Packet switching, Message switching."
subject: "DATA COMMUNICATION"
module: "Module 4: Digital data communication techniques "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beed"
status: "completed"
scrapedAt: "2026-05-20T16:51:46.144Z"
---
# Data Communication: Module 4 - Digital Data Communication Techniques

## Topic: Basic Principles of Switching

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental concepts behind different switching techniques used in data communication.
*   Explain the principles of circuit switching, packet switching, and message switching.
*   Differentiate between these switching methods based on their characteristics and applications.
*   Identify the advantages and disadvantages of each switching technique.
*   Recognize scenarios where each switching technique is most suitable.

---

### Introduction to Switching in Data Communication

Switching is a fundamental technique used in telecommunications and computer networks to establish temporary or permanent connections between devices for the purpose of transmitting data. It allows multiple users to share a common communication infrastructure efficiently. The primary goal of switching is to direct data from its source to its destination through a series of intermediate nodes.

---

## 1. Circuit Switching

Circuit switching is a method of communication where a dedicated communication path, or circuit, is established between two devices before any data is transmitted. This circuit is reserved for the entire duration of the communication session.

### Key Concepts and Definitions:

*   **Dedicated Path:** A physical or logical connection that is exclusively allocated to a single communication session.
*   **Connection Setup Phase:** The initial phase where a circuit is established. This involves signaling between the source, destination, and intermediate switching nodes.
*   **Data Transfer Phase:** Once the circuit is established, data can flow freely between the two endpoints without any intermediate processing or delay.
*   **Connection Teardown Phase:** The phase where the dedicated circuit is released and resources are made available for other users.

### How it Works:

1.  **Establishment:** The source device sends a request to establish a connection to the destination device.
2.  **Path Selection:** Intermediate switching nodes along the path receive this request and allocate dedicated resources (e.g., time slots, frequencies, or physical lines) to establish a continuous path.
3.  **Connection Confirmed:** Once the path is established all the way to the destination, a confirmation signal is sent back to the source.
4.  **Data Transmission:** Data can now be transmitted directly from the source to the destination over the established circuit. The bandwidth of this circuit is guaranteed.
5.  **Termination:** When the communication is finished, either party can initiate the teardown of the circuit, releasing the allocated resources.

### Advantages:

*   **Guaranteed Bandwidth:** Once a circuit is established, the bandwidth is dedicated and consistent throughout the communication, leading to predictable performance.
*   **Low Latency:** No queuing or packet processing delays occur during data transfer, as data flows directly.
*   **Simple Data Transfer:** Once set up, data transfer is straightforward, similar to a direct wire.
*   **Suitable for Real-time Applications:** Ideal for applications requiring continuous, uninterrupted data flow, like voice calls and video conferencing (historically).

### Disadvantages:

*   **Inefficient Resource Utilization:** Resources are reserved for the entire duration of the connection, even if no data is being transmitted (idle periods). This can lead to significant waste of bandwidth.
*   **Connection Setup Delay:** Establishing a circuit can take time, especially in large networks, due to the signaling and resource allocation process.
*   **Blocking:** If all available paths or resources are busy, a new connection request may be blocked.
*   **Not Suitable for Bursty Data:** Inefficient for data traffic that is intermittent or "bursty" in nature, as the dedicated circuit would remain idle much of the time.

### Examples:

*   **Traditional Public Switched Telephone Network (PSTN):** When you make a phone call, a dedicated physical circuit is established between your phone and the recipient's phone. This circuit remains active until you hang up.
*   **Early Fax machines:** Similar to phone calls, fax machines established dedicated circuits for transmission.

### Important Points to Remember:

*   **Connection-oriented:** A connection must be established before data transfer.
*   **Fixed bandwidth:** Bandwidth is guaranteed and constant.
*   **Resource reservation:** Resources are held for the entire duration of the session.

---

## 2. Packet Switching

Packet switching is a method of data transmission where data is broken down into smaller units called **packets**. Each packet contains a portion of the data along with header information (source address, destination address, sequence number, etc.). These packets are then routed independently through the network and reassembled at the destination.

### Key Concepts and Definitions:

*   **Packet:** A small, self-contained unit of data that includes a header, payload (data), and sometimes a trailer.
*   **Header:** Contains control information such as source address, destination address, packet number, and error-checking codes.
*   **Payload:** The actual data being transmitted.
*   **Router:** Intermediate nodes in the network that examine the packet headers and forward packets towards their destination.
*   **Store-and-Forward:** Each router temporarily stores a packet before forwarding it to the next hop, typically after examining its header and making a routing decision.
*   **No Dedicated Path:** Packets do not follow a pre-determined path; they can take different routes through the network.

### How it Works:

1.  **Segmentation:** The source host breaks down the message into smaller packets.
2.  **Addressing:** Each packet is given a header with the destination address and other control information.
3.  **Transmission:** Packets are sent out from the source and travel independently across the network.
4.  **Routing:** Routers receive packets, examine their headers, and forward them to the next hop based on their routing tables. Packets from the same message may take different paths.
5.  **Queuing:** If a link is busy, packets may be queued at routers.
6.  **Reassembly:** At the destination, packets are reassembled in the correct order using the sequence numbers in their headers to form the original message.

### Advantages:

*   **Efficient Bandwidth Utilization:** Network resources are shared dynamically. Bandwidth is used only when packets are being transmitted, making it highly efficient for bursty traffic.
*   **Robustness and Reliability:** If one path fails, packets can be rerouted through alternative paths, making the network more resilient.
*   **Flexibility:** Can handle different types of traffic and varying data rates.
*   **No Blocking (theoretically):** As long as there is capacity on some link, packets can eventually reach their destination. (However, congestion can lead to significant delays).

### Disadvantages:

*   **Variable Latency and Jitter:** Packets can experience varying delays due to queuing at routers and taking different paths. This can be problematic for real-time applications.
*   **Overhead:** Each packet requires a header, which adds overhead and reduces the effective data transmission rate.
*   **Complexity:** Requires more sophisticated routing algorithms and protocols compared to circuit switching.
*   **Out-of-Order Delivery:** Packets may arrive at the destination in a different order than they were sent, requiring reassembly.

### Types of Packet Switching:

*   **Datagram Packet Switching:**
    *   Each packet is treated as an independent unit.
    *   Routers maintain routing tables for each packet.
    *   Packets can take different paths.
    *   No connection setup is required.
    *   **Example:** The Internet Protocol (IP).
*   **Virtual-Circuit Packet Switching:**
    *   A logical connection (virtual circuit) is established between the source and destination before data transmission.
    *   All packets belonging to that virtual circuit follow the same path.
    *   Each node maintains a table of virtual circuit identifiers.
    *   Provides some of the benefits of circuit switching (e.g., ordered delivery) while retaining the efficiency of packet switching.
    *   **Example:** Frame Relay, ATM (Asynchronous Transfer Mode).

### Examples:

*   **The Internet:** The most prominent example of a packet-switched network. Data is broken into IP packets and routed across the global network.
*   **Email:** When you send an email, the message is broken into packets and sent to the destination mail server.
*   **Web Browsing:** When you load a webpage, numerous packets carrying the HTML, CSS, images, etc., are exchanged.

### Important Points to Remember:

*   **Connectionless (Datagram) or Connection-Oriented (Virtual-Circuit):** Can operate in either mode.
*   **Data is broken into packets.**
*   **Packets are routed independently.**
*   **Efficient resource utilization, but variable performance.**

---

## 3. Message Switching

Message switching is an older switching technique where an entire message (which can be of any length) is transmitted as a single unit from source to destination. Like packet switching, it also uses store-and-forward at intermediate nodes, but there's no concept of fixed-size packets or virtual circuits.

### Key Concepts and Definitions:

*   **Message:** An entire unit of data, potentially very large, that is sent as a single entity.
*   **Store-and-Forward:** Intermediate nodes store the entire message before forwarding it to the next destination.
*   **No Connection Setup:** Similar to datagram packet switching, no prior connection establishment is required.
*   **No Fixed Packet Size:** Messages can be of variable length.

### How it Works:

1.  **Message Transmission:** The source sends the entire message to the first intermediate node.
2.  **Storage:** The node stores the entire message in its buffer.
3.  **Routing Decision:** The node examines the destination address in the message header and determines the next hop.
4.  **Forwarding:** The node forwards the entire message to the next node in the path.
5.  **Repeat:** This process repeats at each intermediate node until the message reaches its destination.
6.  **Reassembly (Implicit):** Since the entire message is sent, no reassembly is typically needed at the destination, unless the message itself contains internal segments.

### Advantages:

*   **Simpler than Packet Switching (conceptually):** No need to segment and reassemble data at the application level.
*   **Handles Variable Length Messages:** Can send messages of any size directly.
*   **Efficient for Large, Non-Time-Sensitive Data:** Can be effective if messages are large and don't require immediate delivery.

### Disadvantages:

*   **Significant Storage Requirements:** Intermediate nodes must have enough buffer space to store entire messages, which can be very large.
*   **High Latency:** The store-and-forward delay is experienced for the entire message at each node, leading to substantial end-to-end delays.
*   **Inefficient for Real-time Applications:** The delay makes it unsuitable for interactive or real-time communications.
*   **Potential for Message Blocking:** If a node's buffer is full, subsequent messages might be blocked or rejected.
*   **No Error Control for Segments:** Error detection and correction would typically be at the message level, not individual segments.

### Examples:

*   **Telex Network (Historically):** Used for transmitting text-based messages.
*   **Early Email Systems (in some implementations):** Before widespread adoption of the Internet protocols, some systems might have operated closer to message switching principles.

### Important Points to Remember:

*   **Entire message sent as a unit.**
*   **Store-and-forward at each node.**
*   **No connection setup.**
*   **High latency and storage requirements.**
*   **Largely superseded by packet switching for modern networks.**

---

## Comparison of Switching Techniques

| Feature                 | Circuit Switching                          | Packet Switching (Datagram)             | Message Switching                         |
| :---------------------- | :----------------------------------------- | :-------------------------------------- | :---------------------------------------- |
| **Data Unit**           | Continuous stream (circuit)                | Packet                                  | Entire Message                            |
| **Path**                | Dedicated physical or logical path         | No dedicated path; dynamic routing      | No dedicated path; dynamic routing        |
| **Connection Setup**    | Required                                   | Not required                            | Not required                              |
| **Bandwidth**           | Guaranteed and fixed                       | Shared and variable                     | Shared and variable                       |
| **Latency**             | Low (after setup)                          | Variable (due to queuing and routing)   | High (due to full message storage)        |
| **Resource Utilization**| Inefficient (reserved even when idle)      | Efficient (shared dynamically)          | Efficient (shared dynamically)            |
| **Overhead**            | Low during data transfer                   | Header overhead per packet              | Header overhead per message               |
| **Robustness**          | Low (circuit failure isolates communication)| High (rerouting possible)               | High (rerouting possible)                 |
| **Suitability**         | Real-time, continuous data (voice)         | Bursty, non-real-time, variable traffic | Large, non-time-sensitive data (historical) |
| **Examples**            | PSTN, ISDN                                 | Internet (IP), Ethernet                 | Telex, historical messaging systems       |

---

## Practice Questions and Exercises

**Instructions:** Answer the following questions to test your understanding of the switching principles.

---

### Question 1:

Which switching technique establishes a dedicated communication path for the entire duration of a call or data transfer?

a) Packet Switching
b) Message Switching
c) Circuit Switching
d) All of the above

**Answer:** c) Circuit Switching

---

### Question 2:

What is the primary advantage of packet switching over circuit switching for typical internet traffic?

a) Guaranteed low latency
b) Efficient use of network resources
c) Simpler network infrastructure
d) Direct end-to-end connection

**Answer:** b) Efficient use of network resources

---

### Question 3:

In which switching technique are messages broken down into smaller units called packets, each with a header and payload?

a) Circuit Switching
b) Packet Switching
c) Message Switching
d) None of the above

**Answer:** b) Packet Switching

---

### Question 4:

Consider a scenario where you need to transmit a large file (e.g., 100MB) over a network. Which switching technique would be most inefficient if used for this purpose, and why?

**Answer:** Circuit Switching. This is because circuit switching reserves a dedicated path with a fixed bandwidth for the entire duration. For a large file transfer, this would mean holding onto that bandwidth for a potentially long time, even if the transfer isn't actively utilizing it at maximum capacity at every instant. This leads to poor resource utilization, as the dedicated circuit would be idle for significant periods. Packet switching, on the other hand, would efficiently share the network capacity, allowing other users to also transmit data concurrently.

---

### Question 5:

Describe the "store-and-forward" mechanism and explain its role in both packet switching and message switching.

**Answer:** The "store-and-forward" mechanism is a process where an intermediate node (like a router or a message switch) receives a complete unit of data (either a packet or an entire message), stores it temporarily in its buffer, and then forwards it to the next hop in the network.

*   **In Packet Switching:** Routers store each individual packet, examine its header to determine the next destination, and then forward the packet. If a link is congested, packets are queued, leading to potential delays.
*   **In Message Switching:** Intermediate nodes store the entire message before forwarding it. This requires significantly more buffer space and leads to higher latency compared to packet switching because the entire message must be received before forwarding can begin.

---

### Question 6:

What are the main drawbacks of message switching that led to its decline in favor of packet switching?

**Answer:** The main drawbacks of message switching are:
1.  **High Latency:** The entire message must be stored and forwarded at each node, resulting in significant end-to-end delays.
2.  **Large Storage Requirements:** Intermediate nodes need substantial buffer capacity to store entire, potentially very large, messages.
3.  **Inefficiency for Interactive Communication:** The high latency makes it unsuitable for real-time or interactive applications.
4.  **Potential for Message Blocking:** If buffers are full, messages can be blocked or rejected, impacting network reliability.

---

### Question 7:

Differentiate between datagram packet switching and virtual-circuit packet switching.

**Answer:**
*   **Datagram Packet Switching:** Each packet is routed independently based on its destination address. No prior connection setup is required. Routers maintain independent routing tables for each packet. This is the basis of the Internet's IP protocol. Packets from the same message can take different paths and may arrive out of order.
*   **Virtual-Circuit Packet Switching:** A logical connection (virtual circuit) is established between the source and destination before data transmission. All packets belonging to this virtual circuit follow the same path. Each node maintains state information about the virtual circuit. This provides benefits like ordered delivery and can allow for better flow control and error handling compared to pure datagram approach. Examples include Frame Relay and ATM.

---

## Key Takeaways:

*   Switching is essential for efficient resource sharing in communication networks.
*   **Circuit Switching:** Dedicated path, guaranteed bandwidth, low latency (after setup), but inefficient for bursty traffic.
*   **Packet Switching:** Data broken into packets, dynamic routing, efficient resource use, robust, but variable latency.
*   **Message Switching:** Entire message sent as a unit, store-and-forward, high latency, large storage needs, largely historical.
*   The choice of switching technique depends on the nature of the traffic and the desired performance characteristics.
