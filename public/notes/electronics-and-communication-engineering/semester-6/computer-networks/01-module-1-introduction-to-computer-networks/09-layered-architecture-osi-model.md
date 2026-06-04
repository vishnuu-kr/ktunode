---
title: "Layered Architecture: OSI model"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff03f"
status: "completed"
scrapedAt: "2026-05-23T17:59:55.768Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Layered Architecture: OSI Model

---

### **1. Introduction to Network Architecture**

*   **What is Network Architecture?**
    *   A network architecture defines the structure and organization of a computer network. It specifies how different components of a network communicate and cooperate to achieve connectivity and data transfer.
    *   It provides a framework for designing, implementing, and managing complex networks.

*   **Why is Layered Architecture Important?**
    *   **Modularity:** Breaks down a complex problem (network communication) into smaller, manageable, and independent sub-problems (layers).
    *   **Abstraction:** Each layer hides the complexities of the layers below it, providing a simpler interface to the layers above.
    *   **Interoperability:** Allows different vendors to develop hardware and software that can work together, as long as they adhere to the standardized interfaces between layers.
    *   **Easier Development and Maintenance:** Changes in one layer do not necessarily affect other layers, simplifying development and troubleshooting.
    *   **Standardization:** Promotes the development of standardized protocols for each layer, ensuring compatibility.

---

### **2. The OSI (Open Systems Interconnection) Model**

*   **Overview:**
    *   Developed by the International Organization for Standardization (ISO).
    *   A conceptual framework that standardizes the functions of a telecommunication or computing system in terms of abstraction layers.
    *   It divides the communication process into seven distinct layers.
    *   **Note:** The OSI model is a **conceptual model** and not a strictly implemented protocol suite. The Internet primarily uses the TCP/IP model, which is simpler and more practical. However, understanding OSI is crucial for grasping fundamental networking concepts.

*   **Key Principles:**
    *   Each layer performs a specific set of functions.
    *   Each layer interacts only with the layer directly above and below it.
    *   Data is passed down through the layers on the sending side and up through the layers on the receiving side.
    *   At each layer, data is encapsulated with its own header (and sometimes a trailer) by a process called **encapsulation**. This header contains control information specific to that layer.
    *   When data arrives at the destination, the headers are stripped off layer by layer in a process called **decapsulation**.

---

### **3. The Seven Layers of the OSI Model**

Let's explore each layer from top to bottom (application to physical):

#### **Layer 7: Application Layer**

*   **Description:** This is the layer closest to the end-user. It provides network services directly to end-user applications. It's responsible for enabling applications to access network services.
*   **Key Functions:**
    *   User interface to the network.
    *   Provides services for file transfer, email, web browsing, and other network applications.
    *   Handles communication between applications running on different hosts.
*   **Protocols:** HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), DNS (Domain Name System), Telnet.
*   **Example:** When you use a web browser to access a website (e.g., `www.example.com`), the Application layer uses HTTP to request the webpage from the server.
*   **Textbook Reference:** Kurose & Ross (Chapter 1, 2) discuss the role of applications and how they interact with the network. Forouzan (Chapter 1) introduces the concept of application-layer protocols.
*   **Alignment:** Directly supports **CO1** (summarizing principles) by providing an interface for user applications.

#### **Layer 6: Presentation Layer**

*   **Description:** This layer is responsible for the translation, encryption, and compression of data. It ensures that data is presented in a format that the Application layer can understand.
*   **Key Functions:**
    *   **Data Translation:** Translates data between the format used by applications and the format used by the network (e.g., ASCII to EBCDIC).
    *   **Data Encryption/Decryption:** Handles security by encrypting data at the sender and decrypting it at the receiver.
    *   **Data Compression/Decompression:** Compresses data to reduce the number of bits to be transmitted, saving bandwidth.
*   **Protocols:** SSL/TLS (Secure Sockets Layer/Transport Layer Security), JPEG, ASCII, EBCDIC.
*   **Example:** When sending an encrypted email, the Presentation layer encrypts the message content before passing it down to the lower layers.
*   **Textbook Reference:** Forouzan (Chapter 1) mentions the role of data representation and security.
*   **Alignment:** Supports **CO2** (demonstrating protocols and functions) by defining how data is formatted for network transmission.

#### **Layer 5: Session Layer**

*   **Description:** This layer establishes, manages, and terminates communication sessions between applications. It controls dialogues between communicating hosts.
*   **Key Functions:**
    *   **Session Establishment:** Initiates and establishes a connection (session) between two communicating applications.
    *   **Session Management:** Manages the dialogue between the two hosts, including synchronization and orderly termination of the session.
    *   **Synchronization:** Allows a session to be interrupted and resumed at a synchronization point.
*   **Protocols:** NetBIOS, RPC (Remote Procedure Call), PPTP (Point-to-Point Tunneling Protocol).
*   **Example:** When making a video call, the Session layer manages the start, duration, and end of the call between your computer and the other participant's computer.
*   **Textbook Reference:** Forouzan (Chapter 1) introduces the concept of dialogue control.
*   **Alignment:** Supports **CO1** and **CO2** by managing the communication flow between applications.

#### **Layer 4: Transport Layer**

*   **Description:** This layer provides reliable or unreliable end-to-end data transfer services to the upper layers. It's responsible for segmenting data from the Session layer, managing flow control, and error control.
*   **Key Functions:**
    *   **Segmentation and Reassembly:** Breaks down large messages from the Session layer into smaller segments for transmission and reassembles them at the destination.
    *   **Connection Control:** Establishes and maintains logical connections between processes on different hosts.
    *   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
    *   **Error Control:** Detects and corrects errors that occur during transmission.
    *   **Multiplexing/Demultiplexing:** Allows multiple applications on a host to share a single network connection.
*   **Protocols:** TCP (Transmission Control Protocol) - reliable, connection-oriented; UDP (User Datagram Protocol) - unreliable, connectionless.
*   **Example:** TCP ensures that all packets of a webpage are delivered in the correct order and without errors, making web browsing reliable. UDP is used for real-time applications like streaming or online gaming where some packet loss is acceptable for lower latency.
*   **Textbook Reference:** Kurose & Ross (Chapter 3) extensively cover TCP and UDP, including their features, handshake mechanisms, and reliability aspects. Forouzan (Chapters 1, 17) provides a detailed explanation of the transport layer.
*   **Alignment:** Crucial for **CO2** (demonstrating protocols and functions) and supports **CO1** (principles of delay analysis, as TCP/UDP impact delay).

#### **Layer 3: Network Layer**

*   **Description:** This layer is responsible for **logical addressing** and **routing** of data packets from source to destination across potentially multiple networks.
*   **Key Functions:**
    *   **Logical Addressing:** Assigns unique IP addresses to devices.
    *   **Routing:** Determines the best path for packets to travel across the network.
    *   **Packet Forwarding:** Moves packets from incoming links to outgoing links based on routing decisions.
    *   **Internetworking:** Enables communication between different types of networks.
*   **Protocols:** IP (Internet Protocol), ICMP (Internet Control Message Protocol), ARP (Address Resolution Protocol). Routers operate at this layer.
*   **Example:** When you send an email, the Network layer uses IP addresses to guide the email packets from your computer, through various routers, to the recipient's email server.
*   **Textbook Reference:** Kurose & Ross (Chapter 4) delve into IP addressing, routing algorithms, and the role of routers. Forouzan (Chapters 1, 12) covers logical addressing and routing.
*   **Alignment:** Directly addresses **CO3** (analyzing routing and addressing protocols).

#### **Layer 2: Data Link Layer**

*   **Description:** This layer provides reliable data transfer across a **physical link**. It handles **physical addressing** (MAC addresses) and error detection/correction on a single network segment.
*   **Key Functions:**
    *   **Framing:** Divides the data stream from the Network layer into frames.
    *   **Physical Addressing:** Uses MAC addresses for addressing within a local network.
    *   **Error Detection/Correction:** Detects and potentially corrects errors that occur on the physical link.
    *   **Flow Control:** Manages the rate of data transmission between two directly connected nodes.
    *   **Media Access Control (MAC):** Manages how devices access the shared physical medium (e.g., Ethernet, Wi-Fi).
*   **Protocols:** Ethernet, Wi-Fi (802.11), PPP (Point-to-Point Protocol). Switches operate at this layer.
*   **Example:** Ethernet frames are used to transmit data between devices on the same local area network (LAN). The MAC address ensures that the frame reaches the correct device on that LAN.
*   **Textbook Reference:** Kurose & Ross (Chapter 5) discuss link-layer addressing, error detection, and MAC protocols like Ethernet and Wi-Fi. Forouzan (Chapters 1, 5, 6) provides in-depth coverage of data link layer concepts.
*   **Alignment:** Supports **CO2** (functions of different layers) and **CO4** (physical communication standards) by defining how data is transmitted over a specific link.

#### **Layer 1: Physical Layer**

*   **Description:** This layer is responsible for the transmission of raw bits over the physical medium. It deals with the physical characteristics of the network, such as cables, connectors, and electrical signals.
*   **Key Functions:**
    *   **Bit Transmission:** Defines the electrical, mechanical, procedural, and functional specifications for activating, maintaining, and deactivating the physical link.
    *   **Media Specification:** Specifies the type of transmission medium (e.g., copper wire, fiber optic cable, radio waves).
    *   **Signal Encoding:** Defines how bits (0s and 1s) are represented as electrical or optical signals.
    *   **Data Rate:** Specifies the rate at which bits are transmitted.
*   **Standards:** RS-232, Ethernet physical layer standards (e.g., 100BASE-TX, 1000BASE-T), USB, Bluetooth. Hubs and repeaters operate at this layer.
*   **Example:** When you plug an Ethernet cable into your computer, the Physical layer defines how electrical signals representing the bits are sent and received over that cable.
*   **Textbook Reference:** Kurose & Ross (Chapter 5) touch upon the physical medium and signaling. Forouzan (Chapters 1, 2) covers the physical aspects of data transmission.
*   **Alignment:** Directly addresses **CO4** (making use of different physical communication standards).

---

### **4. Data Encapsulation and Decapsulation**

*   **Encapsulation (Sender Side):**
    *   Data starts at the Application layer.
    *   As it moves down the layers, each layer adds its own header (and potentially a trailer) to the data. This package is called a **Protocol Data Unit (PDU)**.
    *   **Application Layer:** Data
    *   **Presentation Layer:** Data + Presentation Header
    *   **Session Layer:** Data + Presentation Header + Session Header
    *   **Transport Layer:** Data + Presentation Header + Session Header + Transport Header (e.g., TCP Segment/UDP Datagram)
    *   **Network Layer:** Data + ... + Transport Header + Network Header (e.g., IP Packet)
    *   **Data Link Layer:** Data + ... + Network Header + Data Link Header + Data Link Trailer (e.g., Ethernet Frame)
    *   **Physical Layer:** Raw bits

*   **Decapsulation (Receiver Side):**
    *   The reverse process occurs.
    *   The Physical layer receives raw bits and passes them up.
    *   The Data Link layer removes its header and trailer, checks for errors, and passes the packet up.
    *   The Network layer removes its header, makes routing decisions, and passes the segment up.
    *   The Transport layer reassembles segments, performs error/flow control, and passes data up.
    *   The Session, Presentation, and Application layers process the data and present it to the user application.

*   **Example:** Imagine sending a letter.
    *   **Application:** The content of your letter.
    *   **Presentation:** Translating the letter into a language the recipient understands.
    *   **Session:** Deciding on the back-and-forth exchange (e.g., a formal letter or a quick note).
    *   **Transport:** Putting the letter into an envelope with the recipient's address and your return address (reliable delivery service).
    *   **Network:** The postal service deciding which post offices (routers) to go through to get to the destination city.
    *   **Data Link:** The local delivery truck driver (switch) taking the envelope from one mailbox to the next within the same neighborhood (LAN segment).
    *   **Physical:** The actual truck driving on the road, the paper and ink of the letter.

---

### **5. Comparison with the TCP/IP Model**

*   The OSI model is a theoretical reference model. The **TCP/IP model** is the practical model used by the Internet.
*   The TCP/IP model is simpler, typically having four or five layers.

| OSI Layer            | TCP/IP Layer(s)               | Description                                                                |
| :------------------- | :---------------------------- | :------------------------------------------------------------------------- |
| 7. Application       | **Application**               | Combines OSI's Application, Presentation, and Session layers.            |
| 6. Presentation      |                               |                                                                            |
| 5. Session           |                               |                                                                            |
| 4. Transport         | **Transport**                 | Equivalent to OSI Transport layer (TCP, UDP).                              |
| 3. Network           | **Internet**                  | Equivalent to OSI Network layer (IP, ICMP).                                |
| 2. Data Link         | **Network Access** (or Link)  | Combines OSI's Data Link and Physical layers.                              |
| 1. Physical          |                               | Handles physical transmission, media, and addressing on the local network. |

*   **Note:** Some representations of TCP/IP split the Network Access layer into "Data Link" and "Physical" for better comparison.

*   **Textbook Reference:** Kurose & Ross (Chapter 1) introduce the TCP/IP model and compare it to OSI. Forouzan (Chapter 1) also discusses the relationship between the two models.
*   **Alignment:** Provides context for **CO1** and **CO2** by showing the practical implementation versus the conceptual model.

---

### **6. Key Concepts and Definitions Summary**

*   **Network Architecture:** The overall design and organization of a computer network.
*   **Layered Architecture:** A design approach that divides network functions into discrete, hierarchical layers.
*   **OSI Model:** A 7-layer conceptual model for network communication.
*   **Protocol:** A set of rules governing data exchange between devices.
*   **Encapsulation:** The process of adding headers and trailers to data as it moves down the network layers.
*   **Decapsulation:** The process of removing headers and trailers as data moves up the network layers.
*   **PDU (Protocol Data Unit):** A unit of data at a specific layer (e.g., Segment, Packet, Frame, Bit).
*   **Logical Addressing:** Network-layer addresses (e.g., IP addresses) used for end-to-end delivery across networks.
*   **Physical Addressing:** Data-link layer addresses (e.g., MAC addresses) used for delivery within a local network segment.
*   **Routing:** The process of selecting paths for network traffic.

---

### **7. Important Points to Remember**

*   The OSI model is a **reference model**, not a protocol implementation.
*   Each layer provides services to the layer above it and uses services from the layer below it.
*   Encapsulation is crucial for adding control information at each layer.
*   The Internet largely follows the TCP/IP model, which is a more practical implementation.
*   Understanding the OSI model helps in understanding the functions of various network devices and protocols.

---

### **8. Practice Questions and Exercises**

**Question 1 (K2 - CO1, CO2):**
What are the main advantages of using a layered architecture in computer networks?

**Answer:**
The main advantages include:
*   **Modularity:** Breaking down complex functions into smaller, manageable parts.
*   **Abstraction:** Hiding implementation details of lower layers from upper layers.
*   **Interoperability:** Allowing different vendors to develop compatible hardware and software.
*   **Easier Development and Maintenance:** Isolating changes to specific layers.
*   **Standardization:** Promoting the development of uniform protocols.

**Question 2 (K2 - CO2):**
Name the layer responsible for logical addressing and routing of data packets across multiple networks.

**Answer:**
The **Network Layer**.

**Question 3 (K2 - CO2):**
Which OSI layer is responsible for transmitting raw bits over a physical medium?

**Answer:**
The **Physical Layer**.

**Question 4 (K2 - CO2):**
What is the difference between TCP and UDP in terms of reliability and connection orientation?

**Answer:**
*   **TCP (Transmission Control Protocol):** Reliable, connection-oriented. Guarantees delivery, ordered delivery, and error checking.
*   **UDP (User Datagram Protocol):** Unreliable, connectionless. Offers faster transmission but no guarantees on delivery, order, or error checking.

**Question 5 (K3 - CO3):**
Imagine sending a file from your computer to a server on the Internet. Describe the journey of a single byte of that file through the OSI layers, explaining the type of PDU created at each layer and the main function performed. (Focus on Network, Transport, and Data Link layers).

**Answer:**
1.  **Transport Layer:** The byte is part of a larger message. The Transport layer (e.g., TCP) segments the message, adds a TCP header (containing source/destination port numbers, sequence numbers), and creates a **TCP Segment**.
2.  **Network Layer:** The TCP segment is treated as data. The Network layer adds an IP header (containing source/destination IP addresses), creating an **IP Packet**. This layer decides the next hop for the packet based on the destination IP address.
3.  **Data Link Layer:** The IP packet is treated as data. The Data Link layer adds a Data Link header (containing source/destination MAC addresses for the current network segment) and a trailer (for error checking), creating an **Ethernet Frame**. This frame is then transmitted to the next device on the local network (e.g., a router).
4.  **Physical Layer:** The Ethernet frame is converted into electrical signals (or light pulses) and transmitted over the physical medium (e.g., Ethernet cable).

**Question 6 (K2 - CO4):**
Give two examples of protocols or standards that operate at the Data Link Layer.

**Answer:**
*   Ethernet
*   Wi-Fi (IEEE 802.11)
*   PPP (Point-to-Point Protocol)

**Question 7 (K2 - CO1):**
Which OSI layers are concerned with the end-to-end delivery of data, and which are concerned with the delivery of data across a single network link?

**Answer:**
*   **End-to-end delivery:** Transport Layer and Network Layer.
*   **Delivery across a single network link:** Data Link Layer and Physical Layer.

---

This concludes the study notes for the OSI model. Remember to cross-reference with your textbooks for deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
