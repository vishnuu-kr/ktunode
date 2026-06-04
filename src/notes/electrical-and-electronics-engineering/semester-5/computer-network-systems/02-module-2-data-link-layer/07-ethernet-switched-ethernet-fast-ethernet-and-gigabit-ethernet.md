---
title: "Ethernet – Switched Ethernet, fast Ethernet and gigabit Ethernet"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36474"
status: "completed"
scrapedAt: "2026-05-23T16:20:00.762Z"
---
# Computer Network Systems: Module 2 - Data Link Layer

## Topic: Ethernet – Switched Ethernet, Fast Ethernet, and Gigabit Ethernet

This module delves into the ubiquitous Ethernet protocol, a cornerstone of modern local area networks (LANs). We will explore its evolution from early shared mediums to the highly efficient switched Ethernet, and then examine the advancements in speed with Fast Ethernet and Gigabit Ethernet. This will directly contribute to our understanding of networking devices and the MAC sub-layer as outlined in CO2.

---

### 1. Introduction to Ethernet

**Ethernet** is a family of wired computer network technologies commonly used in local area networks (LANs), metropolitan area networks (MANs) and wide area networks (WANs). It is standardized in the IEEE 802.3 standards.

**Key Concepts:**

*   **MAC Address (Media Access Control Address):** A unique hardware identifier assigned to each network interface controller (NIC) by the manufacturer. It operates at the Data Link Layer (Layer 2).
    *   **Format:** Typically a 48-bit hexadecimal number (e.g., `00:1A:2B:3C:4D:5E`).
    *   **Structure:** Consists of a manufacturer-assigned Organizational Unique Identifier (OUI) and a device-specific identifier.
*   **Frame Format:** The structure of data packets transmitted over Ethernet. The most common is the **Ethernet II (or DIX)** frame format.
    *   **Fields:**
        *   **Preamble:** 7 bytes of alternating 1s and 0s to synchronize the receiver.
        *   **Start Frame Delimiter (SFD):** 1 byte (10101011) to signal the end of the preamble and the start of the frame.
        *   **Destination MAC Address:** 6 bytes specifying the recipient NIC.
        *   **Source MAC Address:** 6 bytes specifying the sender NIC.
        *   **EtherType:** 2 bytes indicating the protocol of the payload (e.g., IPv4, ARP).
        *   **Payload (Data):** 46-1500 bytes of actual data.
        *   **Frame Check Sequence (FCS):** 4 bytes for Cyclic Redundancy Check (CRC) to detect errors.
*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** The original media access control method used in **half-duplex** Ethernet.
    *   **Carrier Sense:** Nodes listen to the medium before transmitting.
    *   **Multiple Access:** Multiple nodes share the same communication channel.
    *   **Collision Detection:** If two or more nodes transmit simultaneously, a collision occurs, and they stop transmitting and send a jam signal.
    *   **Backoff Algorithm:** After a collision, nodes wait a random amount of time before attempting to retransmit.

**References:**

*   **Tanenbaum:** Chapter 4, "The Data Link Layer" discusses MAC protocols and Ethernet in detail.
*   **Forouzan:** Chapter 5, "Data Link Layer: Control Access to the Medium" explains CSMA/CD and Ethernet frame formats.

---

### 2. Ethernet - Shared Ethernet (Legacy)

Early Ethernet implementations used a shared medium, typically coaxial cable or twisted-pair cable, connected via a hub. All devices on the segment shared the same bandwidth and were susceptible to collisions.

**Key Concepts:**

*   **Hub:** A simple Layer 1 device that connects multiple network segments or devices. It operates in a **half-duplex** mode, meaning data can flow in only one direction at a time on a segment. When a hub receives a frame on one port, it broadcasts it to all other ports.
*   **Collision Domain:** A network segment where collisions can occur. In a hub-based network, the entire hub and all connected devices form a single collision domain.
*   **Bandwidth Sharing:** All devices on a shared Ethernet segment share the available bandwidth. If one device is transmitting, others cannot transmit simultaneously, leading to potential collisions and reduced performance.

**Limitations of Shared Ethernet:**

*   **Scalability Issues:** As more devices are added, the probability of collisions increases, significantly degrading performance.
*   **Performance Bottlenecks:** Bandwidth is not dedicated to any single connection, leading to slow speeds, especially under heavy load.
*   **No Full-Duplex Operation:** Devices cannot send and receive data simultaneously.

**Example:** Imagine a classroom where everyone shares a single telephone line. Only one person can talk at a time, and if two people start talking at once, their voices will overlap (a collision).

---

### 3. Switched Ethernet

Switched Ethernet revolutionized Ethernet by replacing hubs with switches, dramatically improving performance and eliminating collisions.

**Key Concepts:**

*   **Switch:** A Layer 2 device that intelligently forwards frames based on their destination MAC addresses.
    *   **Learning MAC Addresses:** Switches learn the MAC addresses of devices connected to their ports by examining the **source MAC address** of incoming frames. They maintain a **MAC address table** (also known as a CAM table or forwarding table).
    *   **Forwarding:** When a switch receives a frame, it looks up the destination MAC address in its table.
        *   If the destination MAC is in the table, the frame is sent only to the port associated with that MAC address.
        *   If the destination MAC is not in the table, the switch floods the frame to all ports (except the one it arrived on), hoping to find the destination. The destination device will then respond, allowing the switch to learn its MAC address.
        *   If the destination MAC is a broadcast address (FF:FF:FF:FF:FF:FF), the switch floods the frame to all ports.
*   **Collision Domain Reduction:** Each port on a switch represents a separate collision domain. Since switches operate in **full-duplex** mode, collisions are virtually eliminated between devices connected to different ports.
*   **Full-Duplex Operation:** Each connection between a device and a switch port operates independently, allowing simultaneous transmission and reception of data. This means a device can send data while the switch is sending data to it, without collisions.
*   **Dedicated Bandwidth:** Each port on a switch provides dedicated bandwidth to the connected device. A 100 Mbps port provides 100 Mbps to that device, unaffected by other traffic on the network.
*   **Virtual LANs (VLANs):** Switches can segment a physical network into multiple logical broadcast domains, improving security and performance.

**Benefits of Switched Ethernet:**

*   **Eliminates Collisions:** Due to full-duplex and dedicated per-port collision domains.
*   **Increased Performance:** Significantly higher throughput and lower latency.
*   **Improved Scalability:** Handles a larger number of devices and higher traffic loads.
*   **Enhanced Security:** VLANs can isolate traffic between different groups of users.

**Example:** Imagine a modern office building with many private offices, each connected to a central switch. When someone in one office wants to send a message to someone in another office, the switch directs the message only to the recipient's office, like a mailroom operator delivering mail directly to the correct mailbox, rather than shouting it down a hallway.

**References:**

*   **Peterson & Davie:** Chapter 3, "Data Link Layer" discusses switching concepts and Ethernet.
*   **Kurose & Ross:** Chapter 5, "The Network Layer" implicitly builds on the idea of switches forwarding packets, and the earlier chapters cover Layer 2 fundamentals.

---

### 4. Fast Ethernet (100BASE-TX)

Fast Ethernet is an evolution of Ethernet that provides a tenfold increase in speed over standard Ethernet (10 Mbps).

**Key Concepts:**

*   **Speed:** 100 Mbps (Megabits per second).
*   **Standard:** IEEE 802.3u.
*   **Medium:** Primarily uses **Category 5 (Cat 5) or higher twisted-pair cabling**. It also supports fiber optic cabling.
*   **Half-Duplex and Full-Duplex:** Fast Ethernet can operate in both modes.
    *   **Half-Duplex (CSMA/CD still used):** If connected to a hub or operating in half-duplex mode with a switch, CSMA/CD is still employed to manage access and detect collisions.
    *   **Full-Duplex (No CSMA/CD):** When connected to a switch port configured for full-duplex, CSMA/CD is disabled, and devices can send and receive simultaneously without collisions.
*   **MII (Media Independent Interface):** An interface that separates the MAC function from the physical signaling, allowing for different physical layers to be used with the same MAC controller.

**Frame Format:** The Ethernet frame format remains largely the same as standard Ethernet, with minor modifications for higher speed operation.

**Interoperability:** Fast Ethernet is backward compatible with 10 Mbps Ethernet. A 100 Mbps NIC can communicate with a 10 Mbps NIC, but both will operate at the slower 10 Mbps speed.

**Example:** An office upgrading from older 10 Mbps Ethernet to 100 Mbps Fast Ethernet would experience significantly faster file transfers and web browsing.

**References:**

*   **Tanenbaum:** Chapter 4, "The Data Link Layer" likely covers the evolution of Ethernet speeds.
*   **Forouzan:** Chapter 5, "Data Link Layer: Control Access to the Medium" may include sections on different Ethernet speeds.

---

### 5. Gigabit Ethernet (1000BASE-T)

Gigabit Ethernet represents another leap in speed, offering a 100-fold increase over standard Ethernet and a tenfold increase over Fast Ethernet.

**Key Concepts:**

*   **Speed:** 1 Gbps (Gigabits per second) or 1000 Mbps.
*   **Standards:** IEEE 802.3ab (for twisted-pair), IEEE 802.3z (for fiber optic).
*   **Medium:**
    *   **1000BASE-T:** Uses **Category 5e or Category 6 (Cat 6) twisted-pair cabling** over distances up to 100 meters. It uses all four pairs of wires in the cable, with each pair transmitting and receiving data simultaneously using echo cancellation techniques.
    *   **Fiber Optic:** Supports various fiber optic standards like 1000BASE-SX (short wavelength) and 1000BASE-LX (long wavelength) for longer distances.
*   **Full-Duplex Operation:** Gigabit Ethernet primarily operates in **full-duplex** mode. CSMA/CD is not used in full-duplex Gigabit Ethernet.
*   **Auto-Negotiation:** Devices automatically negotiate the highest possible speed and duplex mode supported by both ends of the link (e.g., 10 Mbps, 100 Mbps, 1 Gbps, half-duplex, full-duplex).
*   **Jumbo Frames:** Some Gigabit Ethernet implementations support "jumbo frames," which are Ethernet frames larger than the standard 1500-byte payload. This can improve efficiency for large data transfers by reducing the overhead of frame processing. However, all devices on the segment must support the same jumbo frame size.
*   **MAC Layer Enhancements:** While the frame format is largely the same, Gigabit Ethernet incorporates enhancements to the MAC layer to support higher speeds and efficient transmission.

**Benefits of Gigabit Ethernet:**

*   **Massive Speed Increase:** Enables high-bandwidth applications like video streaming, large file transfers, and server-to-server communication.
*   **Improved Network Backbone Performance:** Essential for connecting switches and routers in larger networks.
*   **Future-Proofing:** Provides ample bandwidth for upcoming applications and network demands.

**Example:** In a server room or for high-performance workstations, Gigabit Ethernet is essential to handle the massive amounts of data being processed and transferred.

**References:**

*   **Stallings:** Chapter on Local Area Networks would cover Gigabit Ethernet advancements.
*   **Halsall:** Chapters on LAN technologies would detail different Ethernet speeds and their evolution.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary difference between a hub and a switch in an Ethernet network?
    *   **Answer:** A hub operates at Layer 1 and broadcasts all incoming frames to all connected devices, creating a single collision domain. A switch operates at Layer 2, learns MAC addresses, and forwards frames intelligently only to the intended recipient's port, creating separate collision domains for each port and enabling full-duplex communication.

**Question 2:** In a full-duplex switched Ethernet environment, is CSMA/CD still used? Explain why or why not.
    *   **Answer:** No, CSMA/CD is not used in a full-duplex switched Ethernet environment. In full-duplex mode, a device can send and receive data simultaneously, and since each port on a switch represents a separate collision domain, collisions are effectively eliminated between devices connected to different ports.

**Question 3:** What are the key advantages of Switched Ethernet over Shared Ethernet?
    *   **Answer:** Key advantages include:
        *   Elimination of collisions.
        *   Increased network performance and throughput.
        *   Improved scalability.
        *   Dedicated bandwidth per port.
        *   Support for full-duplex operation.

**Question 4:** Which category of twisted-pair cabling is typically required for 1000BASE-T (Gigabit Ethernet)?
    *   **Answer:** Category 5e or Category 6 (Cat 6) cabling is typically required for 1000BASE-T.

**Question 5:** What is the purpose of the MAC address table in a switch?
    *   **Answer:** The MAC address table (or CAM table) in a switch stores the MAC addresses of devices connected to each of the switch's ports. This allows the switch to learn where devices are located on the network and to forward frames only to the specific port connected to the destination device, rather than flooding them.

---

### 7. Important Points to Remember

*   **Ethernet** is a family of LAN technologies standardized by IEEE 802.3.
*   **MAC addresses** are crucial for Layer 2 communication in Ethernet.
*   **Shared Ethernet** used hubs and CSMA/CD, leading to collisions and limited performance.
*   **Switched Ethernet** uses switches to intelligently forward frames, eliminating collisions and providing dedicated bandwidth.
*   **Full-duplex** operation is a key feature of modern switched Ethernet, allowing simultaneous sending and receiving.
*   **Fast Ethernet** operates at 100 Mbps, and **Gigabit Ethernet** at 1000 Mbps, offering significant speed improvements.
*   Proper cabling (Cat 5e/Cat 6) is essential for achieving full Gigabit Ethernet speeds.
*   **Auto-negotiation** allows devices to establish the optimal speed and duplex settings.

---

### 8. Alignment with Course Outcomes

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   This topic directly addresses Ethernet as a protocol family and its physical media requirements (twisted-pair, fiber optic), contributing to understanding how networks are set up.
*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   This topic heavily focuses on the Data Link Layer, MAC addresses, MAC sub-layer functions (implied in CSMA/CD and forwarding), and networking devices like hubs and switches, which are fundamental to Ethernet.
*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   While not the primary focus, the performance improvements and collision avoidance mechanisms in Switched, Fast, and Gigabit Ethernet contribute to achieving good quality of service by reducing latency and packet loss due to collisions.
*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   The performance enhancements at the Data Link layer (Ethernet) directly impact the efficiency and speed at which Transport Layer (e.g., TCP, UDP) and Application Layer protocols can operate.

This concludes our exploration of Switched Ethernet, Fast Ethernet, and Gigabit Ethernet. These technologies form the backbone of most wired local area networks and are essential for understanding modern network infrastructure.
