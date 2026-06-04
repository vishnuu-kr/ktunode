---
title: "Layers and Protocols"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c42a"
status: "completed"
scrapedAt: "2026-05-20T16:59:51.116Z"
---
# ADVANCED COMPUTER NETWORKS: Module 1 - Review of Computer Networking Fundamentals

## Topic: Layers and Protocols

---

### **1. Introduction to Network Layers and Protocols**

*   **Definition:** A **protocol** is a set of rules and conventions that govern how data is transmitted and received between devices on a network. They define the format, order, timing, and error-checking procedures for communication.

*   **The Need for Layering:**
    *   **Complexity Management:** Breaking down complex network communication into smaller, manageable layers simplifies design, development, and troubleshooting.
    *   **Interoperability:** Standardized layers and protocols allow devices from different manufacturers and operating systems to communicate seamlessly.
    *   **Modularity:** Changes or improvements can be made to one layer without affecting others, as long as the interfaces between layers remain consistent.
    *   **Abstraction:** Each layer provides services to the layer above it, hiding the complexities of the underlying layers.

*   **Key Concepts:**
    *   **Service:** What a layer does for the layer above it.
    *   **Interface:** How a layer communicates with the layer above or below it.
    *   **Protocol:** The set of rules for communication within a specific layer.
    *   **Encapsulation:** As data moves down through the layers, each layer adds its own header (and sometimes a trailer) containing control information. This process is called encapsulation.
    *   **Decapsulation:** As data moves up through the layers on the receiving end, each layer removes its corresponding header (and trailer), processing the control information. This is called decapsulation.

---

### **2. Network Layering Models**

Two primary models are used to describe network layering:

#### **2.1. The OSI (Open Systems Interconnection) Model**

*   **Purpose:** A conceptual framework that standardizes the functions of a telecommunication or computing system in terms of abstraction layers. It's a theoretical model, not directly implemented in its entirety.
*   **Seven Layers:** Ordered from bottom (closest to hardware) to top (closest to user application).

    | Layer Number | Layer Name           | Description                                                                                                                                                                                                | Key Protocols/Examples                                                                                                | PDU (Protocol Data Unit) |
    | :----------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :----------------------- |
    | **7**        | **Application**      | Provides network services directly to end-user applications. Handles user interface, data formatting, and network access.                                                                                      | HTTP, FTP, SMTP, DNS, Telnet                                                                                          | Data                     |
    | **6**        | **Presentation**     | Translates data between the application layer and the network format. Handles data encryption, decryption, compression, and decompression. Ensures data is presented in a usable format.                        | SSL/TLS, JPEG, ASCII                                                                                                  | Data                     |
    | **5**        | **Session**          | Establishes, manages, and terminates communication sessions between applications. Handles dialogue control and synchronization.                                                                               | NetBIOS, RPC (Remote Procedure Call)                                                                                  | Data                     |
    | **4**        | **Transport**        | Provides reliable or unreliable end-to-end data transfer between processes running on different hosts. Handles segmentation, reassembly, flow control, and error control.                                  | TCP (Transmission Control Protocol), UDP (User Datagram Protocol)                                                     | Segment (TCP), Datagram (UDP) |
    | **3**        | **Network**          | Responsible for logical addressing and routing of data packets across different networks. Determines the best path for data to travel.                                                                    | IP (Internet Protocol), ICMP (Internet Control Message Protocol), OSPF, BGP                                           | Packet                   |
    | **2**        | **Data Link**        | Provides reliable data transfer across a physical link. Handles physical addressing (MAC addresses), error detection, and framing. Divided into LLC (Logical Link Control) and MAC (Media Access Control) sublayers. | Ethernet, Wi-Fi (IEEE 802.11), PPP (Point-to-Point Protocol)                                                          | Frame                    |
    | **1**        | **Physical**         | Defines the physical characteristics of the network, including the transmission medium, connectors, voltage levels, and bit synchronization. Responsible for transmitting raw bits over the medium.          | Ethernet (cables/connectors), USB, Bluetooth, Dial-up modems                                                         | Bit                      |

*   **Important Note:** The OSI model is primarily a reference model. Most modern networks are based on the TCP/IP model.

#### **2.2. The TCP/IP Model (Internet Protocol Suite)**

*   **Purpose:** A practical, implemented model that forms the foundation of the internet. It's a more concise model than OSI.
*   **Four or Five Layers:** Different versions exist, with the five-layer model being more granular and closer to OSI.

    | Layer Number (5-layer) | Layer Name           | Description (Similar to OSI)                                                                                                                                                                                                                                                                                             | Key Protocols/Examples                                                     | PDU (Protocol Data Unit) |
    | :--------------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :----------------------- |
    | **5**                  | **Application**      | Combines OSI's Application, Presentation, and Session layers. Provides services to applications and interacts with the user.                                                                                                                                                                                             | HTTP, FTP, SMTP, DNS, SSH, Telnet, SNMP                                    | Data                     |
    | **4**                  | **Transport**        | Similar to OSI's Transport layer. Handles end-to-end communication, segmentation, reassembly, flow control, and error control.                                                                                                                                                                                             | TCP, UDP                                                                   | Segment (TCP), Datagram (UDP) |
    | **3**                  | **Network/Internet** | Similar to OSI's Network layer. Responsible for logical addressing (IP addresses) and routing packets across networks.                                                                                                                                                                                                   | IP, ICMP, ARP                                                              | Packet                   |
    | **2**                  | **Data Link**        | Similar to OSI's Data Link layer. Handles physical addressing (MAC addresses), framing, and error detection on a local network segment (e.g., Ethernet frame).                                                                                                                                                           | Ethernet, Wi-Fi, ARP                                                       | Frame                    |
    | **1**                  | **Physical**         | Similar to OSI's Physical layer. Defines the physical medium and how bits are transmitted over it.                                                                                                                                                                                                                        | Ethernet (cables), Wi-Fi (radio waves)                                     | Bit                      |

*   **Note on 4-layer TCP/IP:** Sometimes, the Data Link and Physical layers are combined into a single "Network Access" or "Link" layer.

---

### **3. Key Protocols and Their Roles**

Here's a deeper dive into some crucial protocols within the TCP/IP model:

#### **3.1. Application Layer Protocols**

*   **HTTP (Hypertext Transfer Protocol):** Used for transferring web pages and resources.
*   **HTTPS (HTTP Secure):** The secure version of HTTP, using SSL/TLS for encryption.
*   **FTP (File Transfer Protocol):** Used for transferring files between computers.
*   **SMTP (Simple Mail Transfer Protocol):** Used for sending email.
*   **POP3 (Post Office Protocol version 3) / IMAP (Internet Message Access Protocol):** Used for receiving email.
*   **DNS (Domain Name System):** Translates human-readable domain names (e.g., google.com) into IP addresses.
*   **SSH (Secure Shell):** Provides secure remote login and command execution.
*   **SNMP (Simple Network Management Protocol):** Used for managing network devices.

#### **3.2. Transport Layer Protocols**

*   **TCP (Transmission Control Protocol):**
    *   **Connection-oriented:** Establishes a reliable connection before data transfer (three-way handshake).
    *   **Reliable:** Guarantees delivery of data through acknowledgments, retransmissions, and sequencing.
    *   **Flow control:** Prevents a sender from overwhelming a receiver.
    *   **Congestion control:** Manages network traffic to avoid congestion.
    *   **Used for:** Web browsing (HTTP/HTTPS), email (SMTP), file transfer (FTP), secure shell (SSH).

    *   **Three-Way Handshake (TCP Connection Establishment):**
        1.  **SYN (Synchronize):** Client sends SYN packet to server.
        2.  **SYN-ACK (Synchronize-Acknowledge):** Server receives SYN, sends back SYN-ACK.
        3.  **ACK (Acknowledge):** Client receives SYN-ACK, sends back ACK. Connection established.

*   **UDP (User Datagram Protocol):**
    *   **Connectionless:** Sends data without establishing a prior connection.
    *   **Unreliable:** No guarantee of delivery, ordering, or duplicate protection.
    *   **Faster:** Lower overhead due to no connection establishment or acknowledgments.
    *   **Used for:** Streaming media (VoIP, video conferencing), online gaming, DNS queries (often).

#### **3.3. Network/Internet Layer Protocols**

*   **IP (Internet Protocol):**
    *   **Logical Addressing:** Assigns unique IP addresses to devices, enabling routing across networks.
    *   **Packet Forwarding:** Directs packets from source to destination based on IP addresses.
    *   **Best-effort delivery:** Does not guarantee delivery or ordering.
    *   **Two versions:** IPv4 (32-bit addresses) and IPv6 (128-bit addresses).

*   **ICMP (Internet Control Message Protocol):**
    *   Used by network devices to send error messages and operational information.
    *   **Examples:** Ping (tests reachability), Traceroute (maps the path to a destination).

*   **ARP (Address Resolution Protocol):**
    *   Maps an IP address to a physical MAC address on a local network.
    *   When a device needs to send data to another device on the same local network, it uses ARP to discover the destination's MAC address.

#### **3.4. Data Link Layer Protocols**

*   **Ethernet:**
    *   The most common protocol for local area networks (LANs).
    *   Defines frame format, MAC addressing, and media access control.
*   **Wi-Fi (IEEE 802.11):**
    *   Wireless equivalent of Ethernet.
    *   Defines protocols for wireless communication, including addressing and security.

---

### **4. Encapsulation and Decapsulation Process**

Let's trace how data flows through the layers:

**Sending Data (e.g., sending an email):**

1.  **Application Layer:** The email client creates an email message (data).
2.  **Transport Layer (TCP):** The TCP layer segments the data, adds a TCP header (source/destination port numbers, sequence numbers), and creates a segment.
3.  **Network Layer (IP):** The IP layer adds an IP header (source/destination IP addresses) to the segment, creating a packet.
4.  **Data Link Layer (Ethernet):** The Ethernet layer adds an Ethernet header (source/destination MAC addresses) and an Ethernet trailer (e.g., CRC for error checking) to the packet, creating a frame.
5.  **Physical Layer:** The frame is converted into bits and transmitted over the physical medium.

**Receiving Data:**

1.  **Physical Layer:** Receives bits and reassembles them into a frame.
2.  **Data Link Layer:** Examines the Ethernet header, checks the CRC for errors. If valid, it removes the header and trailer, passing the packet up.
3.  **Network Layer:** Examines the IP header, checks the destination IP address. If it matches, it removes the IP header, passing the segment up.
4.  **Transport Layer:** Examines the TCP header, checks port numbers, reassembles segments in order, and performs error checking. If valid, it removes the TCP header, passing the data up.
5.  **Application Layer:** Receives the complete data (email message) and presents it to the email client.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What is the primary purpose of network layering?

**Answer:**
The primary purpose of network layering is to manage the complexity of network communication by breaking it down into smaller, manageable, and standardized functions. This facilitates design, development, interoperability, and troubleshooting.

**Question 2:**
Which layer in the OSI model is responsible for logical addressing and routing?
a) Transport Layer
b) Network Layer
c) Data Link Layer
d) Application Layer

**Answer:**
b) Network Layer

**Question 3:**
What is the main difference between TCP and UDP?

**Answer:**
TCP is connection-oriented and provides reliable, ordered, and error-checked delivery of data. UDP is connectionless and offers unreliable, best-effort delivery with lower overhead and faster transmission.

**Question 4:**
Describe the encapsulation process when a web page request is sent over the internet, starting from the Application Layer down to the Data Link Layer.

**Answer:**
1.  **Application Layer:** The web browser sends an HTTP GET request (data).
2.  **Transport Layer (TCP):** TCP segments the HTTP request, adds a TCP header (source/destination ports like 80 for HTTP, sequence numbers), creating a segment.
3.  **Network Layer (IP):** IP adds an IP header (source/destination IP addresses), creating a packet.
4.  **Data Link Layer (e.g., Ethernet):** Ethernet adds an Ethernet header (source/destination MAC addresses) and trailer (CRC), creating a frame.

**Question 5:**
Which protocol is used to translate an IP address into a MAC address on a local network?
a) HTTP
b) DNS
c) ARP
d) ICMP

**Answer:**
c) ARP

---

### **6. Important Points to Remember**

*   **OSI vs. TCP/IP:** Understand the conceptual difference and the practical dominance of the TCP/IP model for the internet.
*   **Encapsulation/Decapsulation:** This is a fundamental concept that explains how data moves through the network stack. Visualize the headers being added and removed.
*   **Protocol Functions:** Know the primary role of key protocols like TCP, UDP, IP, HTTP, and DNS.
*   **PDU Names:** Be aware of the different names for data units at each layer (e.g., segment, packet, frame).
*   **Layer Interdependence:** While layers are distinct, they depend on the services of the layer below and provide services to the layer above.
*   **Abstraction:** Each layer hides the complexities of the layers below it.

---
***End of Module 1: Layers and Protocols Review***
