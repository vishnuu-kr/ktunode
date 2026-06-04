---
title: "Datagram Networks"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c920"
status: "completed"
scrapedAt: "2026-05-20T17:02:35.294Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks
## Topic: Datagram Networks

---

### **1. Introduction to Datagram Networks**

Datagram networks are a fundamental type of computer network architecture where data is transmitted in self-contained units called **datagrams**. Each datagram is routed independently through the network, meaning it doesn't rely on a pre-established connection or path. This approach offers flexibility and robustness but can lead to packets arriving out of order or being duplicated.

**Key Concepts:**

*   **Datagram:** An independent, self-contained unit of data that contains all the information necessary for its routing and delivery. This includes the source and destination addresses, sequence numbers (if applicable), and the actual data payload.
*   **Connectionless:** Datagram networks are connectionless. This means no prior setup or handshake is required before sending data. Each datagram is treated as a new, independent transmission.
*   **Independent Routing:** Each datagram is routed through the network along potentially different paths. Routers make forwarding decisions for each datagram based on its destination address, without knowledge of previous datagrams from the same source.
*   **Packet Switching:** Datagram networks are a form of packet switching, where data is broken down into smaller packets (datagrams) for transmission.

**Analogy:** Imagine sending individual letters through the postal service. Each letter is addressed independently, and the postal service routes each letter through various sorting centers to reach its destination. The letters might not arrive in the order they were sent.

---

### **2. Key Components of Datagram Networks**

Datagram networks rely on several key components working together:

*   **Routers:** These are network devices that connect different networks and are responsible for forwarding datagrams. They examine the destination address of each datagram and consult their **routing tables** to determine the next hop.
    *   **Routing Table:** A data structure within a router that stores information about network destinations and the corresponding next-hop routers or network interfaces to reach them.
*   **End Hosts (Source and Destination):** These are the devices that generate and receive data. They encapsulate data into datagrams before sending and process received datagrams.
*   **Network Links:** The physical or wireless connections that connect routers and end hosts.

**How Datagrams are Routed:**

1.  **Encapsulation:** The source host encapsulates its data into a datagram, adding header information like source IP address, destination IP address, and other control fields.
2.  **Forwarding Decision (Router):** When a datagram arrives at a router:
    *   The router examines the destination IP address in the datagram's header.
    *   It consults its routing table to find the best outgoing link or next-hop router for that destination.
    *   The datagram is then forwarded to the next hop.
3.  **Independent Path:** This process repeats at each router along the path until the datagram reaches its destination network.
4.  **Reassembly (Destination Host):** If the original data was split into multiple datagrams, the destination host is responsible for reassembling them in the correct order to reconstruct the original data.

---

### **3. Characteristics and Implications of Datagram Networks**

Datagram networks have distinct characteristics that influence their behavior and performance:

*   **Flexibility:** Routers can dynamically choose the best available path for each datagram. This allows the network to adapt to congestion or link failures. If one path becomes unavailable, datagrams can be rerouted through alternative paths.
*   **Robustness:** The independent nature of datagrams makes the network resilient to single points of failure. If a router or link fails, only the datagrams currently traversing that path are affected; others can still be routed.
*   **No Guaranteed Delivery:** Datagram networks do not inherently guarantee that datagrams will reach their destination. Datagrams can be:
    *   **Lost:** Due to network congestion, router errors, or link failures.
    *   **Duplicated:** Due to network reconvergence or retransmissions.
    *   **Arrive Out of Order:** Because each datagram can take a different path, they may arrive at the destination in a different sequence than they were sent.
*   **No Guaranteed Arrival Time:** Similarly, there's no guarantee about when a datagram will arrive.
*   **Overhead:** Each datagram requires its own header information, which can contribute to overhead, especially for small data payloads.

**Handling Datagram Network Issues:**

To overcome the challenges of lost, duplicated, or out-of-order datagrams, higher-layer protocols are employed:

*   **Sequence Numbers:** Used to identify the order of datagrams belonging to a single data stream.
*   **Acknowledgements (ACKs):** The receiver sends acknowledgements back to the sender to confirm successful receipt of datagrams.
*   **Retransmission:** If a sender doesn't receive an ACK for a datagram within a certain time, it assumes the datagram was lost and retransmits it.
*   **Reordering:** The receiver buffers incoming datagrams and uses sequence numbers to reorder them before delivering them to the application.

**Example Protocol:** The **Internet Protocol (IP)** is the most prominent example of a datagram network protocol. IP operates at the Network Layer (Layer 3) of the OSI model.

---

### **4. Comparison with Virtual Circuit Networks**

It's helpful to contrast datagram networks with virtual circuit networks to understand their fundamental differences.

| Feature           | Datagram Networks                                     | Virtual Circuit Networks                               |
| :---------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Connection**    | Connectionless                                        | Connection-oriented                                    |
| **Path**          | No pre-established path; each datagram routed independently | Pre-established path (virtual circuit) for a session |
| **Routing**       | Routers make forwarding decisions for each datagram   | Routers use a virtual circuit identifier for forwarding |
| **State**         | Routers do not maintain session state                 | Routers maintain state for each virtual circuit        |
| **Reliability**   | No inherent guarantee of delivery, order, or duplication | Can provide guaranteed delivery, order, and no duplicates |
| **Flexibility**   | High; paths can change dynamically                    | Lower; path is fixed for the duration of the session   |
| **Overhead**      | Per-datagram header overhead                          | Per-connection setup overhead, lower per-packet overhead |
| **Examples**      | IP (Internet Protocol)                                | ATM (Asynchronous Transfer Mode), Frame Relay          |

**Key Takeaway:** Datagram networks prioritize flexibility and robustness by treating each packet independently, while virtual circuit networks prioritize reliability and order by establishing a dedicated path.

---

### **5. Learning Outcomes Coverage**

This section explicitly maps the content covered to the learning outcomes:

*   **Understanding the fundamental principles of datagram networks:** Covered in sections 1 and 2, explaining what datagrams are, the connectionless nature, and the routing process.
*   **Identifying the key components of datagram networks:** Covered in section 2, detailing the roles of routers, end hosts, and network links.
*   **Explaining the process of datagram routing:** Covered in section 2, outlining how routers make forwarding decisions.
*   **Discussing the characteristics and implications of datagram networks:** Covered in section 3, highlighting flexibility, robustness, and potential issues like loss and out-of-order delivery.
*   **Understanding how issues like datagram loss, duplication, and out-of-order arrival are handled:** Covered in section 3, explaining the role of higher-layer protocols.
*   **Differentiating datagram networks from virtual circuit networks:** Covered in section 4, through a comparative table and explanation.

---

### **6. Important Points to Remember**

*   **Datagrams are independent and self-contained.**
*   **Datagram networks are connectionless.**
*   **Routers make forwarding decisions for each datagram based on destination addresses.**
*   **IP is a prime example of a datagram network protocol.**
*   **Datagram networks offer flexibility and robustness but don't guarantee delivery, order, or uniqueness.**
*   **Higher-layer protocols are essential to compensate for the inherent unreliability of datagram networks.**
*   **Virtual circuit networks establish a fixed path, offering better reliability but less flexibility.**

---

### **7. Practice Questions and Exercises**

**Question 1:** What is a datagram in the context of computer networks?
**Answer:** A datagram is an independent, self-contained unit of data that contains all the information necessary for its routing and delivery, including source and destination addresses.

**Question 2:** Is a datagram network connection-oriented or connectionless? Explain why.
**Answer:** Datagram networks are connectionless. This is because no prior setup or handshake is required before sending data; each datagram is treated as a new, independent transmission.

**Question 3:** What are the potential problems that can arise with datagrams during transmission, and what mechanisms are used to address them?
**Answer:** Potential problems include datagram loss, duplication, and out-of-order arrival. These are addressed by higher-layer protocols using sequence numbers, acknowledgements, retransmissions, and reordering mechanisms.

**Question 4:** Briefly explain the role of a router in a datagram network.
**Answer:** A router in a datagram network examines the destination address of each incoming datagram and consults its routing table to determine the best outgoing link or next-hop router to forward the datagram towards its destination.

**Question 5:** Compare and contrast datagram networks with virtual circuit networks in terms of path establishment and reliability.
**Answer:**
*   **Path Establishment:** Datagram networks do not establish a pre-defined path; each datagram is routed independently. Virtual circuit networks establish a fixed path (virtual circuit) before data transmission begins.
*   **Reliability:** Datagram networks do not inherently guarantee delivery, order, or uniqueness of datagrams. Virtual circuit networks can offer these guarantees.

---
