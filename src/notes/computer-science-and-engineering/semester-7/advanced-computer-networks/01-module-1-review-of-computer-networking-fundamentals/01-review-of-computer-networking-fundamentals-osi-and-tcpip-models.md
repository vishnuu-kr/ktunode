---
title: "Review of Computer Networking Fundamentals - OSI and TCP/IP Models"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c429"
status: "completed"
scrapedAt: "2026-05-20T16:59:50.415Z"
---
# Advanced Computer Networks: Module 1 - Review of Computer Networking Fundamentals
## Topic: OSI and TCP/IP Models

This module serves as a foundational review of essential computer networking concepts, with a specific focus on understanding the layered architectures of the OSI and TCP/IP models. These models provide a conceptual framework for understanding how data is transmitted across networks.

---

### Learning Outcomes:

*   **LO1:** Differentiate between the OSI and TCP/IP models, including their purpose, structure, and number of layers.
*   **LO2:** Describe the function of each layer in the OSI model and provide examples of protocols and devices associated with each layer.
*   **LO3:** Describe the function of each layer in the TCP/IP model and provide examples of protocols and devices associated with each layer.
*   **LO4:** Map the layers of the OSI model to the layers of the TCP/IP model, understanding the equivalencies and differences.
*   **LO5:** Explain the concept of encapsulation and de-encapsulation as data moves through the network layers.
*   **LO6:** Identify common networking devices and protocols and categorize them within the appropriate layers of both models.

---

### 1. Introduction to Network Models

**Key Concept:** Network models provide a standardized way to describe and understand the complex process of network communication. They break down the communication process into smaller, manageable layers, each with specific functions.

**Purpose of Layered Models:**

*   **Modularity:** Allows for easier development and troubleshooting by isolating functions.
*   **Interoperability:** Enables different vendors to create hardware and software that can work together.
*   **Standardization:** Provides a common language and framework for discussing networking.
*   **Ease of Learning:** Simplifies the understanding of complex networking processes.

---

### 2. The OSI (Open Systems Interconnection) Model

**Key Concept:** The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system in terms of abstraction layers. It is a seven-layer model, developed by the International Organization for Standardization (ISO).

**Purpose:** To promote interoperability between different network systems and to provide a framework for understanding network protocols.

**The Seven Layers of the OSI Model (from top to bottom):**

*   **7. Application Layer**
    *   **Function:** Provides network services directly to end-user applications. Deals with user interface and network-aware applications.
    *   **Examples:**
        *   Protocols: HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, Telnet, SSH.
        *   Applications: Web browsers, email clients, file transfer programs.
    *   **Key Concept:** The layer closest to the user.

*   **6. Presentation Layer**
    *   **Function:** Responsible for data translation, encryption, and compression. Ensures that data is in a usable format for the Application layer.
    *   **Examples:**
        *   Data encryption (e.g., SSL/TLS).
        *   Data compression (e.g., JPEG, ASCII).
        *   Data formatting (e.g., character encoding like ASCII, EBCDIC).
    *   **Key Concept:** "Syntax layer" of the network.

*   **5. Session Layer**
    *   **Function:** Establishes, manages, and terminates communication sessions between applications. Handles dialog control and synchronization.
    *   **Examples:**
        *   APIs for session management.
        *   NetBIOS, RPC (Remote Procedure Call).
    *   **Key Concept:** Manages the conversation between two systems.

*   **4. Transport Layer**
    *   **Function:** Provides reliable or unreliable data transfer between end systems. Handles segmentation, reassembly, flow control, and error control.
    *   **Examples:**
        *   Protocols: TCP (Transmission Control Protocol - reliable, connection-oriented), UDP (User Datagram Protocol - unreliable, connectionless).
        *   Port numbers (e.g., Port 80 for HTTP, Port 25 for SMTP).
    *   **Key Concept:** End-to-end communication and data integrity.

*   **3. Network Layer**
    *   **Function:** Handles logical addressing (IP addresses) and routing of data packets across different networks. Determines the best path for data.
    *   **Examples:**
        *   Protocols: IP (Internet Protocol), ICMP (Internet Control Message Protocol), ARP (Address Resolution Protocol).
        *   Devices: Routers.
        *   Logical Addresses: IP addresses (e.g., 192.168.1.1).
    *   **Key Concept:** Packet forwarding and path determination.

*   **2. Data Link Layer**
    *   **Function:** Provides reliable data transfer across a physical link. Handles physical addressing (MAC addresses), framing, error detection, and flow control within a local network segment.
    *   **Sub-layers:**
        *   **LLC (Logical Link Control):** Provides an interface to the Network layer.
        *   **MAC (Media Access Control):** Controls access to the physical medium and defines MAC addresses.
    *   **Examples:**
        *   Protocols: Ethernet, Wi-Fi (802.11), PPP.
        *   Devices: Switches, Network Interface Cards (NICs).
        *   Physical Addresses: MAC addresses (e.g., 00:1A:2B:3C:4D:5E).
    *   **Key Concept:** Node-to-node delivery on the same network.

*   **1. Physical Layer**
    *   **Function:** Defines the physical characteristics of the network. Transmits raw bit streams over the physical medium. Deals with voltage levels, cable types, connectors, and transmission rates.
    *   **Examples:**
        *   Transmission Media: Cables (e.g., UTP, Fiber Optic), Wireless signals.
        *   Connectors: RJ-45, SC.
        *   Encoding: Manchester encoding, NRZ.
        *   Devices: Hubs, Repeaters, Cables, Network Interface Cards (physical components).
    *   **Key Concept:** Transmission of raw data bits over a physical medium.

**Important Point to Remember:** The OSI model is a reference model and is not directly implemented in its entirety. However, it's crucial for understanding network concepts.

---

### 3. The TCP/IP Model

**Key Concept:** The TCP/IP model (also known as the Internet Protocol Suite) is a more practical and widely implemented model. It is a four or five-layer model that forms the basis of the internet.

**Purpose:** To enable communication between computers on the internet.

**The TCP/IP Model Layers (Commonly presented as 4 or 5 layers):**

**A. The 4-Layer TCP/IP Model:**

*   **4. Application Layer**
    *   **Function:** Combines the functions of the OSI's Application, Presentation, and Session layers. Provides protocols for specific network applications.
    *   **Examples:** HTTP, FTP, SMTP, DNS, Telnet, SNMP.
    *   **Key Concept:** High-level protocols for network services.

*   **3. Transport Layer**
    *   **Function:** Similar to the OSI Transport layer. Provides end-to-end communication and data transfer.
    *   **Examples:** TCP (reliable, connection-oriented), UDP (unreliable, connectionless).
    *   **Key Concept:** End-to-end data transfer.

*   **2. Internet Layer**
    *   **Function:** Similar to the OSI Network layer. Handles logical addressing (IP) and routing of packets across networks.
    *   **Examples:** IP, ICMP, ARP.
    *   **Devices:** Routers.
    *   **Key Concept:** Packet delivery across networks.

*   **1. Network Access Layer (or Link Layer)**
    *   **Function:** Combines the functions of the OSI's Data Link and Physical layers. Deals with the physical transmission of data over a specific network technology.
    *   **Examples:** Ethernet, Wi-Fi, PPP.
    *   **Devices:** Switches, NICs, Cables.
    *   **Key Concept:** Physical media and local network delivery.

**B. The 5-Layer TCP/IP Model (often used for clearer mapping to OSI):**

*   **5. Application Layer** (Same as OSI Application)
*   **4. Transport Layer** (Same as OSI Transport)
*   **3. Network Layer (or Internet Layer)** (Same as OSI Network)
*   **2. Data Link Layer** (Same as OSI Data Link)
*   **1. Physical Layer** (Same as OSI Physical)

**Important Point to Remember:** The 4-layer model is the traditional TCP/IP model, while the 5-layer model is often used to facilitate comparison with the OSI model. The core functionality remains the same.

---

### 4. Mapping OSI and TCP/IP Models

**Key Concept:** Understanding how the layers of the two models correspond is essential for translating concepts and troubleshooting.

| OSI Layer          | TCP/IP Layer (4-Layer) | TCP/IP Layer (5-Layer) | Function                                                                                                                                                                 |
| :----------------- | :--------------------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **7. Application** | **4. Application**     | **5. Application**     | User interface, application protocols (HTTP, FTP, SMTP, DNS).                                                                                                            |
| **6. Presentation**|                        |                        | Data formatting, encryption, compression.                                                                                                                                |
| **5. Session**     |                        |                        | Session management, dialog control.                                                                                                                                      |
| **4. Transport**   | **3. Transport**       | **4. Transport**       | End-to-end reliable/unreliable delivery, segmentation, reassembly, flow control, error control (TCP, UDP, port numbers).                                               |
| **3. Network**     | **2. Internet**        | **3. Internet**        | Logical addressing (IP), routing, packet forwarding (IP, ICMP, ARP).                                                                                                     |
| **2. Data Link**   | **1. Network Access**  | **2. Data Link**       | Physical addressing (MAC), framing, error detection within a local network (Ethernet, Wi-Fi, PPP).                                                                       |
| **1. Physical**    |                        | **1. Physical**        | Transmission of raw bits, physical media, connectors, voltage levels (Cables, Hubs, NICs).                                                                               |

**Key Observation:** The TCP/IP model is more concise and merges some of the OSI layers, particularly at the upper and lower ends.

---

### 5. Encapsulation and De-encapsulation

**Key Concept:** As data travels down the network layers on the sending host, each layer adds its own header (and sometimes a trailer) to the data. This process is called **encapsulation**. On the receiving host, as the data travels up the layers, these headers are removed, which is called **de-encapsulation**.

**Process Example (Sending Data):**

1.  **Application Layer:** Creates user data.
2.  **Transport Layer (e.g., TCP):** Takes the data, segments it, and adds a TCP header (containing source/destination port numbers, sequence numbers). This creates a **segment**.
3.  **Network Layer (e.g., IP):** Takes the segment, adds an IP header (containing source/destination IP addresses). This creates a **packet**.
4.  **Data Link Layer (e.g., Ethernet):** Takes the packet, adds an Ethernet header (containing source/destination MAC addresses) and an Ethernet trailer (for error checking - Frame Check Sequence). This creates a **frame**.
5.  **Physical Layer:** Takes the frame and converts it into a stream of bits for transmission over the physical medium.

**Process Example (Receiving Data):**

1.  **Physical Layer:** Receives the bit stream and converts it back into a frame.
2.  **Data Link Layer:** Receives the frame, checks the trailer for errors, removes the Ethernet header and trailer. Passes the packet up.
3.  **Network Layer:** Receives the packet, checks the IP header, removes it. Passes the segment up.
4.  **Transport Layer:** Receives the segment, checks the TCP header, reassembles data, and passes the data up.
5.  **Application Layer:** Receives the original data.

**Key Concepts:**

*   **PDU (Protocol Data Unit):** The unit of data at each layer (Data, Segment, Packet, Frame, Bits).
*   **Header:** Control information added by a layer.
*   **Trailer:** Control information added at the end of a PDU (e.g., FCS at Data Link layer).

---

### 6. Networking Devices and Protocols by Layer

| Layer (OSI)      | Layer (TCP/IP)         | Devices                     | Protocols                                     | PDUs          |
| :--------------- | :--------------------- | :-------------------------- | :-------------------------------------------- | :------------ |
| **7. Application** | **4. Application**     | End Devices (PCs, Servers)  | HTTP, FTP, SMTP, DNS, POP3, IMAP, Telnet, SSH | Data          |
| **6. Presentation**|                        |                             | SSL/TLS, JPEG, ASCII                          |               |
| **5. Session**   |                        |                             | NetBIOS, RPC                                  |               |
| **4. Transport** | **3. Transport**       | End Devices                 | TCP, UDP                                      | Segment       |
| **3. Network**   | **2. Internet**        | Routers                     | IP, ICMP, ARP                                 | Packet        |
| **2. Data Link** | **1. Network Access**  | Switches, Bridges, NICs     | Ethernet, Wi-Fi, PPP                          | Frame         |
| **1. Physical**  |                        | Hubs, Repeaters, Cables, NICs | UTP, Fiber Optic, electrical signals          | Bits          |

**Important Note:** A NIC (Network Interface Card) operates at both the Physical and Data Link layers.

---

### 7. Key Concepts and Definitions to Remember

*   **Protocol:** A set of rules governing data communication.
*   **Encapsulation:** Adding headers/trailers as data moves down the layers.
*   **De-encapsulation:** Removing headers/trailers as data moves up the layers.
*   **PDU:** Protocol Data Unit.
*   **OSI Model:** 7-layer conceptual model for standardization.
*   **TCP/IP Model:** 4 or 5-layer practical model for internet communication.
*   **Logical Addressing:** IP Addresses (Network Layer).
*   **Physical Addressing:** MAC Addresses (Data Link Layer).
*   **Connection-oriented:** Reliable, ordered delivery (e.g., TCP).
*   **Connectionless:** Unreliable, best-effort delivery (e.g., UDP).

---

### Practice Questions and Exercises

**Question 1:**
Which layer of the OSI model is responsible for providing reliable data transfer between end systems?
a) Network Layer
b) Data Link Layer
c) Transport Layer
d) Session Layer

**Question 2:**
What is the primary function of the Network Layer in both the OSI and TCP/IP models?
a) Data encryption and compression
b) Establishing and managing communication sessions
c) Logical addressing and routing of packets
d) Transmission of raw bits over a physical medium

**Question 3:**
Map the following OSI layers to their closest TCP/IP equivalents (using the 4-layer TCP/IP model):
a) OSI Application Layer
b) OSI Network Layer
c) OSI Data Link Layer

**Question 4:**
When data is sent from a web browser (e.g., requesting a webpage), which protocol is typically used at the Application Layer?
a) UDP
b) HTTP
c) IP
d) Ethernet

**Question 5:**
Describe the process of encapsulation for a piece of data as it travels from the Application Layer down to the Physical Layer. What is the PDU at each step?

**Question 6:**
What is the difference between TCP and UDP, and at which layer do they operate?

**Question 7:**
Name two common networking devices that operate primarily at the Data Link layer.

---

### Answers to Practice Questions

**Answer 1:**
c) Transport Layer
*   The Transport layer (specifically TCP) provides reliable, ordered, and error-checked delivery of a segment.

**Answer 2:**
c) Logical addressing and routing of packets
*   The Network layer (or Internet layer in TCP/IP) uses logical addresses (IP addresses) to determine the best path and route packets across networks.

**Answer 3:**
a) OSI Application Layer -> TCP/IP Application Layer
b) OSI Network Layer -> TCP/IP Internet Layer
c) OSI Data Link Layer -> TCP/IP Network Access Layer (or Link Layer)

**Answer 4:**
b) HTTP
*   HTTP (Hypertext Transfer Protocol) is the protocol used for transferring web pages.

**Answer 5:**
1.  **Application Layer:** Creates the original data (e.g., a web page request). PDU: **Data**.
2.  **Transport Layer:** Adds a TCP or UDP header to the data, creating a segment. PDU: **Segment**.
3.  **Network Layer:** Adds an IP header to the segment, creating a packet. PDU: **Packet**.
4.  **Data Link Layer:** Adds an Ethernet header and trailer to the packet, creating a frame. PDU: **Frame**.
5.  **Physical Layer:** Converts the frame into a stream of bits for transmission. PDU: **Bits**.

**Answer 6:**
*   **TCP (Transmission Control Protocol):** Operates at the Transport Layer. It is connection-oriented, provides reliable, ordered, and error-checked delivery of data. Used for applications that require high reliability, like web browsing and email.
*   **UDP (User Datagram Protocol):** Operates at the Transport Layer. It is connectionless, provides unreliable, best-effort delivery without error checking or ordering. Used for applications where speed is critical and some data loss is acceptable, like streaming video and online gaming.

**Answer 7:**
Two common networking devices operating at the Data Link layer are:
*   **Switches:** Forward frames based on MAC addresses.
*   **Bridges:** Connect network segments and filter traffic based on MAC addresses.
    *(Note: NICs also operate here, but they are typically considered interface devices rather than network infrastructure devices in this context, although they are essential.)*
