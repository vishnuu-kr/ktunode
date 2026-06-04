---
title: "Introduction to Computer Networks"
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff037"
status: "completed"
scrapedAt: "2026-05-23T17:59:49.992Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

This module introduces the fundamental concepts of computer networks, their importance, and the building blocks that enable communication between devices. We will explore what constitutes a network, its various applications, and the essential components involved.

**Course Outcomes Alignment:**

*   **CO1:** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture. (Knowledge Level: K2)
*   **CO2:** Demonstrate protocols and the functions of different layers. (Knowledge Level: K2)

---

## 1.1 What is a Computer Network?

A computer network is a collection of interconnected computing devices (such as computers, servers, mobile devices, printers, etc.) that can communicate with each other and share resources. The interconnection allows these devices to exchange data and access services from remote locations.

**Key Concepts & Definitions:**

*   **Node/Host:** Any device connected to a network that can send, receive, or forward information. This includes computers, smartphones, servers, routers, etc.
*   **Link:** The physical or logical medium that connects two or more nodes. Examples include Ethernet cables, Wi-Fi signals, fiber optic cables.
*   **Resource Sharing:** The ability for users to share hardware (e.g., printers, storage), software (e.g., applications), and data across the network.
*   **Communication:** The process of exchanging data between nodes.

**Reference (Kurose & Ross):**
Kurose and Ross (2017) define a computer network as "a set of computers connected by communication links." They emphasize that the primary goal is to allow users to exchange information and share resources.

**Examples:**

*   **Home Network:** Your Wi-Fi router connecting your laptop, smartphone, smart TV, and printer.
*   **Office Network:** Computers in an office connected via Ethernet cables to a central server and printer.
*   **The Internet:** The largest and most complex network, connecting billions of devices worldwide.

---

## 1.2 Network Applications

Computer networks are the backbone of modern digital life, enabling a vast array of applications that have revolutionized how we work, communicate, and entertain ourselves.

**Key Concepts & Definitions:**

*   **World Wide Web (WWW):** A system of interlinked hypertext documents accessed via the Internet.
*   **Email:** Electronic mail, a method of exchanging messages between people using electronic devices.
*   **File Transfer:** Moving files from one computer to another over a network.
*   **Video Conferencing:** Real-time visual and audio communication between multiple people.
*   **Online Gaming:** Playing video games with other people over a network.
*   **E-commerce:** Buying and selling goods and services over the Internet.
*   **VoIP (Voice over Internet Protocol):** Transmitting voice calls over the Internet.
*   **Social Networking:** Platforms that facilitate the creation and sharing of information and ideas among virtual communities.

**Reference (Forouzan):**
Forouzan (2008) highlights that networks enable a wide range of applications, from simple file sharing to complex distributed systems, emphasizing the evolution of network use beyond just data communication.

**Examples:**

*   **Using your smartphone to browse the web:** Accessing websites like Wikipedia or news portals.
*   **Sending an email to a colleague:** Communicating via Gmail, Outlook, etc.
*   **Downloading a file from a server:** Getting software updates or documents.
*   **Participating in a Zoom call:** Real-time communication for meetings or lectures.

---

## 1.3 Network Components

Building and operating a computer network requires various hardware and software components.

**Key Concepts & Definitions:**

*   **End Systems (Hosts):** Devices that initiate or receive network communication (e.g., laptops, smartphones, servers).
*   **Intermediary Network Devices:** Devices that connect end systems and forward data across the network (e.g., routers, switches, access points).
*   **Communication Links (Media):** The physical or wireless pathways that carry data signals between devices (e.g., Ethernet cables, fiber optic cables, Wi-Fi, cellular signals).
*   **Network Protocols:** A set of rules or procedures that govern how data is transmitted and received over a network. They define the format, order, timing, and error checking of messages.
*   **Network Software:** Operating system network functions, network applications, and network management software.

**Reference (Kurose & Ross):**
Kurose and Ross categorize network components into end systems, communication links, and intermediary network devices. They explain the role of each in facilitating communication.

**Examples:**

*   **End Systems:** Your personal computer, a web server hosting a website.
*   **Intermediary Devices:**
    *   **Router:** Connects different networks and directs traffic between them (e.g., your home router connecting your home network to the internet).
    *   **Switch:** Connects multiple devices within the same local area network (LAN) and intelligently forwards data to the intended recipient.
    *   **Access Point (AP):** Allows wireless devices to connect to a wired network.
*   **Communication Links:**
    *   **Ethernet Cable:** Connects computers to routers or switches.
    *   **Wi-Fi Signal:** Connects your laptop to your home router wirelessly.
*   **Network Protocols:** TCP/IP, HTTP, DNS.

---

## 1.4 Network Architectures and Topologies

The way network components are interconnected and organized is known as network architecture or topology. This affects performance, reliability, and scalability.

**Key Concepts & Definitions:**

*   **Network Architecture:** The overall design and structure of a network, including its hardware, software, protocols, and topology.
*   **Network Topology:** The physical or logical arrangement of nodes and links in a network.

**Common Network Topologies:**

*   **Bus Topology:** All nodes are connected to a single central cable (the bus).
    *   **Pros:** Simple, easy to install, less cable.
    *   **Cons:** If the main cable breaks, the entire network fails. Difficult to troubleshoot. Performance degrades with more nodes.
    *   **Example:** Early Ethernet networks.
*   **Star Topology:** All nodes are connected to a central hub or switch.
    *   **Pros:** Easy to install and manage. If one cable fails, only that node is affected. Easy to add/remove nodes.
    *   **Cons:** If the central hub/switch fails, the entire network fails. Requires more cabling than bus.
    *   **Example:** Most modern wired LANs use a star topology.
*   **Ring Topology:** Nodes are connected in a circular fashion, with each node connected to exactly two other nodes. Data travels in one direction around the ring.
    *   **Pros:** Can handle high traffic volumes.
    *   **Cons:** If one node or cable fails, the entire ring is broken. Adding or removing nodes disrupts the network.
    *   **Example:** Token Ring networks.
*   **Mesh Topology:** Every node is connected to every other node (fully connected) or some nodes are connected to multiple other nodes.
    *   **Pros:** Highly reliable and fault-tolerant. If one link fails, data can be rerouted.
    *   **Cons:** Requires a lot of cabling. Complex to install and manage. Expensive.
    *   **Example:** Internet backbone, some wireless ad-hoc networks.
*   **Hybrid Topology:** A combination of two or more basic topologies.
    *   **Example:** A star-bus topology, where several star networks are connected by a bus.

**Reference (Peterson & Davie):**
Peterson and Davie discuss various network architectures and the trade-offs involved in choosing a particular topology, focusing on reliability and performance.

**Important Point to Remember:** The choice of topology significantly impacts network performance, cost, and resilience.

---

## 1.5 Introduction to Switching and Packet Switching

Switching is a fundamental concept in networking that determines how data is transmitted from a source to a destination. Packet switching is the dominant method used in modern data networks.

**Key Concepts & Definitions:**

*   **Circuit Switching:** A method where a dedicated communication path (circuit) is established between two nodes for the duration of the communication session.
    *   **Characteristics:** Guaranteed bandwidth, connection-oriented.
    *   **Disadvantage:** Inefficient for bursty data traffic as the circuit remains allocated even when no data is being sent.
    *   **Example:** Traditional telephone networks.
*   **Packet Switching:** Data is broken down into small units called **packets**. Each packet contains a portion of the data along with source and destination address information. Packets are routed independently across the network.
    *   **Store-and-Forward:** Each network device (router, switch) receives the entire packet, stores it temporarily, and then forwards it to the next hop.
    *   **Multiplexing:** Allows multiple communication sessions to share the same network link by interleaving their packets.
    *   **No Dedicated Path:** Packets can take different paths to reach the destination.
    *   **Advantages:** Efficient utilization of network resources, robust, flexible.
    *   **Disadvantages:** Can introduce variable delays (jitter) due to variable queuing and routing. Packets can arrive out of order.
    *   **Examples:** The Internet, Ethernet networks.

**Reference (Kurose & Ross):**
Kurose and Ross dedicate a significant portion to explaining packet switching, its store-and-forward mechanism, and how it enables efficient sharing of network links through multiplexing.

**Reference (Forouzan):**
Forouzan also details circuit switching and packet switching, providing analogies to understand their differences, particularly in resource allocation and efficiency for data networks.

**Analogy:**
*   **Circuit Switching:** Like making a direct phone call where a dedicated line is reserved for your conversation.
*   **Packet Switching:** Like sending a letter. You break your message into multiple letters (packets), address each one, and send them. They might travel through different post offices (routers) and arrive out of order. The recipient then reassembles them.

---

## 1.6 Basic Concepts of Delay Analysis

Understanding network delay is crucial for designing and optimizing network performance. Delay refers to the time it takes for a packet to travel from the source to the destination.

**Key Concepts & Definitions:**

*   **Latency (or Delay):** The time elapsed between sending a packet and receiving it.
*   **Types of Delay:**
    *   **Transmission Delay:** The time required to push all the bits of a packet onto the link.
        *   **Formula:** Transmission Delay = Packet Length (bits) / Transmission Rate (bits/second)
        *   **Example:** Sending a 1000-byte (8000 bits) packet over a 10 Mbps link. Transmission Delay = 8000 bits / 10,000,000 bps = 0.0008 seconds = 0.8 ms.
    *   **Propagation Delay:** The time it takes for a bit to travel from the sender to the receiver across the link.
        *   **Formula:** Propagation Delay = Distance / Propagation Speed (speed of light in the medium)
        *   **Example:** A packet travels 1000 km over a fiber optic cable with a propagation speed of 2 x 10^8 m/s. Propagation Delay = 1,000,000 m / (2 x 10^8 m/s) = 0.005 seconds = 5 ms.
    *   **Queuing Delay:** The time a packet spends waiting in queues (buffers) at network devices (routers, switches) before being transmitted.
        *   **Factors:** Network traffic, router processing speed, link capacity.
        *   **Nature:** Variable, depends on congestion.
    *   **Processing Delay:** The time taken by a network device to process the packet header, check for errors, and determine the outgoing link.
        *   **Factors:** Router hardware and software.
        *   **Nature:** Typically very small, often negligible compared to other delays.

*   **Total Delay:** Sum of all these delays: Total Delay = Transmission Delay + Propagation Delay + Queuing Delay + Processing Delay

**Reference (Kurose & Ross):**
Kurose and Ross provide a detailed breakdown of the different components of delay and their impact on network performance. They emphasize how transmission and propagation delays are per-link delays, while queuing and processing delays are per-router delays.

**Important Point to Remember:**
*   Transmission delay depends on packet size and link bandwidth.
*   Propagation delay depends on the distance and the medium.
*   Queuing delay is the most variable and is highly dependent on network congestion.

---

## 1.7 The Layered Network Architecture (OSI and TCP/IP Models)

To manage the complexity of computer networks, a layered approach is used. Each layer handles specific tasks, and layers communicate with adjacent layers.

**Key Concepts & Definitions:**

*   **Layered Architecture:** A design principle where network functionalities are organized into distinct layers.
*   **Encapsulation:** As data moves down the layers at the sender, each layer adds its own header and sometimes a trailer to the data from the layer above.
*   **Decapsulation:** As data moves up the layers at the receiver, each layer removes its corresponding header/trailer.
*   **Protocol Data Unit (PDU):** The unit of data at each layer (e.g., segment, packet, frame).

**Two Major Models:**

1.  **OSI (Open Systems Interconnection) Model:** A conceptual 7-layer model that provides a framework for understanding network communication. It's a theoretical model.

    | Layer (from Top to Bottom) | Name             | Key Functions                                                                                                                                         | PDU        |
    | :------------------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
    | 7                          | Application      | Network services to end-user applications (e.g., web browsing, email, file transfer).                                                                 | Data       |
    | 6                          | Presentation     | Data formatting, encryption, compression. Ensures data is readable by the receiving system.                                                           | Data       |
    | 5                          | Session          | Manages communication sessions between applications (e.g., establishing, managing, and terminating dialogues).                                        | Data       |
    | 4                          | Transport        | End-to-end reliable or unreliable data transfer, segmentation/reassembly, flow control, error control. (TCP, UDP)                                     | Segment    |
    | 3                          | Network          | Logical addressing, routing, path determination. (IP)                                                                                                 | Packet     |
    | 2                          | Data Link        | Physical addressing (MAC addresses), error detection/correction on the link, framing, flow control on the link. (Ethernet, Wi-Fi)                     | Frame      |
    | 1                          | Physical         | Transmission of raw bit stream over physical medium, defining electrical/mechanical specifications. (Cables, connectors, signal encoding)              | Bit        |

2.  **TCP/IP (Transmission Control Protocol/Internet Protocol) Model:** A more practical 5-layer model that the Internet is based upon.

    | Layer (from Top to Bottom) | Name             | Key Functions                                                                                                    | Corresponds roughly to OSI Layers |
    | :------------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
    | 4                          | Application      | Network services to end-user applications. (HTTP, FTP, SMTP, DNS)                                                | 5, 6, 7                           |
    | 3                          | Transport        | End-to-end reliable or unreliable data transfer, segmentation/reassembly, flow control, error control. (TCP, UDP) | 4                                 |
    | 2                          | Internet         | Logical addressing, routing, path determination. (IP)                                                            | 3                                 |
    | 1                          | Network Access   | Physical addressing (MAC addresses), error detection/correction on the link, framing, flow control on the link.  | 1, 2                              |
    | (Implicit)                 | Physical         | Transmission of raw bit stream over physical medium.                                                             | 1                                 |

    *Note: Some TCP/IP models represent the bottom layer as "Link Layer" or "Network Interface Layer" and combine the OSI Physical and Data Link layers.*

**Reference (Kurose & Ross):**
Kurose and Ross strongly advocate for the TCP/IP model's practical relevance while explaining the OSI model as a conceptual framework for understanding network functions. They detail the services and protocols at each layer.

**Reference (Forouzan):**
Forouzan thoroughly explains both models, emphasizing the functions performed at each layer and how they interact. He often uses the OSI model as a reference for understanding the conceptual separation of concerns.

**Encapsulation Example (Sending an HTTP Request):**

1.  **Application Layer (HTTP):** Your browser creates an HTTP GET request message.
2.  **Transport Layer (TCP):** The HTTP message is segmented, and a TCP header (port numbers, sequence numbers) is added, creating a TCP segment.
3.  **Network Layer (IP):** The TCP segment is encapsulated into an IP packet, with an IP header (source and destination IP addresses) added.
4.  **Network Access Layer (Ethernet):** The IP packet is encapsulated into an Ethernet frame, with an Ethernet header (source and destination MAC addresses) and a trailer added.
5.  **Physical Layer:** The Ethernet frame is converted into bits and transmitted over the physical medium.

**Important Point to Remember:** The layered approach promotes modularity, simplifies design, and allows for independent development and evolution of protocols within each layer.

---

## Practice Questions & Exercises

**Question 1 (CO1, K2):**
Define a computer network and list three essential components required for its operation.

**Answer:**
A computer network is a collection of interconnected computing devices that can communicate with each other and share resources. Essential components include:
1.  End Systems (Hosts)
2.  Intermediary Network Devices
3.  Communication Links (Media)
4.  Network Protocols
5.  Network Software

**Question 2 (CO1, K2):**
Differentiate between circuit switching and packet switching. Provide an example for each.

**Answer:**
*   **Circuit Switching:** Establishes a dedicated end-to-end path for the entire duration of a communication session. It's connection-oriented and provides guaranteed bandwidth.
    *   **Example:** Traditional telephone calls.
*   **Packet Switching:** Data is broken into packets, each routed independently. It's connectionless and uses store-and-forward techniques. It's efficient for bursty data traffic.
    *   **Example:** The Internet, sending an email.

**Question 3 (CO1, K2):**
Calculate the transmission delay for a packet of 1500 bytes sent over a 100 Mbps Ethernet link.

**Answer:**
*   Packet Length = 1500 bytes = 1500 * 8 bits = 12000 bits
*   Transmission Rate = 100 Mbps = 100,000,000 bits per second
*   Transmission Delay = Packet Length / Transmission Rate
*   Transmission Delay = 12000 bits / 100,000,000 bps = 0.00012 seconds = 0.12 milliseconds (ms)

**Question 4 (CO1, K2):**
If a packet travels 2000 km over a fiber optic cable with a propagation speed of 2.5 x 10^8 m/s, calculate the propagation delay.

**Answer:**
*   Distance = 2000 km = 2,000,000 meters
*   Propagation Speed = 2.5 x 10^8 m/s
*   Propagation Delay = Distance / Propagation Speed
*   Propagation Delay = 2,000,000 m / (2.5 x 10^8 m/s) = 0.008 seconds = 8 milliseconds (ms)

**Question 5 (CO1, K2 / CO2, K2):**
Which layer in the OSI model is responsible for logical addressing and routing, and what is the PDU at this layer?

**Answer:**
The **Network Layer** (Layer 3) is responsible for logical addressing (e.g., IP addresses) and routing. The PDU at this layer is a **Packet**.

**Question 6 (CO2, K2):**
When you send an email, which transport layer protocol is typically used for reliable delivery, and what is its PDU called?

**Answer:**
For reliable email delivery, **TCP (Transmission Control Protocol)** is typically used. Its PDU is called a **Segment**.

---

## Important Points to Remember

*   **Networks facilitate resource sharing and communication.**
*   **Packet switching is the dominant paradigm for data networks like the Internet.**
*   **Delay is a critical performance metric and has several components: transmission, propagation, queuing, and processing.**
*   **The layered architecture (OSI and TCP/IP models) helps organize network functions.**
*   **Encapsulation and decapsulation are key processes in layered communication.**
*   **Understanding the roles of different network devices (routers, switches) and network media is fundamental.**

---

This concludes Module 1: Introduction to Computer Networks. The next module will delve deeper into specific protocols and the functionalities of each layer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
