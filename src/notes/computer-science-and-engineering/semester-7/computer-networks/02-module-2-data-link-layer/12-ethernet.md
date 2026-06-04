---
title: "Ethernet"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92f"
status: "completed"
scrapedAt: "2026-05-20T17:02:44.876Z"
---
# Computer Networks: Module 2 - Data Link Layer

## Topic: Ethernet

### Introduction to Ethernet

Ethernet is a family of wired computer network technologies commonly used in local area networks (LANs), metropolitan area networks (MANs), and wide area networks (WANs). It is the most widely deployed network access technology globally. Developed by Xerox in the 1970s and standardized by the IEEE 802.3 working group, Ethernet defines the physical layer and data link layer of the OSI model.

### Learning Outcomes Covered:

1.  **Understand the fundamental principles of Ethernet operation.**
2.  **Explain the different Ethernet frame formats.**
3.  **Describe the CSMA/CD mechanism and its role in older Ethernet versions.**
4.  **Discuss the evolution of Ethernet speeds and media types.**
5.  **Analyze the concepts of MAC addresses and their function in Ethernet.**
6.  **Explain the operation of switches and bridges in Ethernet networks.**
7.  **Identify common Ethernet topologies and their characteristics.**

---

### 1. Fundamental Principles of Ethernet Operation

Ethernet operates at the **Data Link Layer** (Layer 2) and the **Physical Layer** (Layer 1) of the OSI model.

*   **Data Encapsulation:** Data from higher layers (e.g., IP packets from the Network Layer) is encapsulated into an Ethernet frame.
*   **Addressing:** Each Ethernet network interface card (NIC) has a unique **MAC address**, a hardware address burned into the NIC by the manufacturer. This address is used for local delivery of frames within a network segment.
*   **Transmission:** Frames are transmitted over a physical medium (e.g., twisted-pair cable, fiber optic cable).
*   **Error Detection:** Ethernet frames include a **Frame Check Sequence (FCS)** to detect errors that may occur during transmission.

---

### 2. Ethernet Frame Formats

Ethernet has evolved over time, leading to different frame formats. The most common are:

#### 2.1. Ethernet II (DIX Ethernet)

This is the original Ethernet frame format and is still widely used, especially in IP networks.

*   **Preamble (7 bytes):** A sequence of alternating 1s and 0s used for clock synchronization.
*   **Start Frame Delimiter (SFD) (1 byte):** A specific pattern (10101011) that signals the end of the preamble and the start of the actual frame.
*   **Destination MAC Address (6 bytes):** The MAC address of the intended recipient.
*   **Source MAC Address (6 bytes):** The MAC address of the sender.
*   **EtherType (2 bytes):** Identifies the protocol encapsulated within the frame (e.g., IPv4, IPv6, ARP).
*   **Payload (46-1500 bytes):** The actual data being transmitted (e.g., an IP packet). The minimum payload size is 46 bytes to ensure the minimum frame size of 64 bytes. If the payload is smaller, padding is added.
*   **Frame Check Sequence (FCS) (4 bytes):** A cyclic redundancy check (CRC) value used for error detection.

**Example:** If an IPv4 packet needs to be sent, the EtherType field will be `0x0800`.

#### 2.2. IEEE 802.3 Frame Formats

The IEEE 802.3 standard defines several frame formats.

*   **802.3 Standard Frame (Legacy):** Similar to Ethernet II but uses a "Length" field instead of "EtherType." The Length field indicates the size of the data field. The protocol type is identified by the first few bytes of the data field.
*   **802.3 SNAP (Subnetwork Access Protocol) Frame:** An extension of the 802.3 frame that includes an EtherType-like field by adding a SNAP header, allowing it to carry protocols like IP directly.
*   **802.1Q VLAN Tagging:** Adds a 4-byte tag to the frame to support Virtual LANs (VLANs). This tag includes information like the VLAN ID and priority.

**Key Difference:** The primary distinction between Ethernet II and IEEE 802.3 is how the field after the source MAC address is interpreted. Ethernet II uses it as an **EtherType**, while IEEE 802.3 uses it as a **Length** field. Most modern networks use Ethernet II frames for IP traffic.

---

### 3. CSMA/CD Mechanism (Carrier Sense Multiple Access with Collision Detection)

This mechanism was crucial for shared Ethernet media (like coaxial cable) to manage access and handle collisions. It is less relevant in modern switched Ethernet, which uses full-duplex communication.

*   **Carrier Sense (CS):** Before transmitting, a station listens to the shared medium to check if it is idle. If idle, it can transmit.
*   **Multiple Access (MA):** Multiple stations share the same communication channel.
*   **Collision Detection (CD):** If two or more stations transmit simultaneously, their signals overlap, causing a **collision**. Stations can detect this collision by monitoring the medium during transmission.
*   **Collision Handling:**
    *   When a collision is detected, stations immediately stop transmitting.
    *   They then wait for a random amount of time (using a **backoff algorithm**) before attempting to retransmit. This randomization helps to avoid further collisions.

**Note:** CSMA/CD is designed for **half-duplex** operation on shared media. In modern switched Ethernet, each port on a switch typically provides a dedicated connection to a device, allowing **full-duplex** operation, where devices can send and receive data simultaneously, eliminating the need for CSMA/CD.

---

### 4. Evolution of Ethernet Speeds and Media Types

Ethernet has continuously evolved to provide higher speeds and support different physical media.

| Speed        | Standard   | Media Type              | Connector Type   | Max Segment Length | Year   |
| :----------- | :--------- | :---------------------- | :--------------- | :----------------- | :----- |
| 10 Mbps      | 10BASE5    | Thick Coaxial (Thicknet) | Vampire Tap/BNC  | 500 meters         | 1985   |
| 10 Mbps      | 10BASE2    | Thin Coaxial (Thinnet)  | BNC              | 185 meters         | 1985   |
| 10 Mbps      | 10BASE-T   | Twisted Pair (Cat 3+)   | RJ-45            | 100 meters         | 1990   |
| 10 Mbps      | 10BASE-F   | Fiber Optic             | SC/ST            | 2 km               | 1992   |
| 100 Mbps     | 100BASE-T  | Twisted Pair (Cat 5+)   | RJ-45            | 100 meters         | 1995   |
| 100 Mbps     | 100BASE-TX | Twisted Pair (Cat 5+)   | RJ-45            | 100 meters         | 1995   |
| 100 Mbps     | 100BASE-FX | Fiber Optic             | SC/ST            | 2 km               | 1995   |
| 1 Gbps       | 1000BASE-T | Twisted Pair (Cat 5e+)  | RJ-45            | 100 meters         | 1998   |
| 1 Gbps       | 1000BASE-SX| Fiber Optic (Multimode) | LC/SC            | 550 meters         | 1998   |
| 1 Gbps       | 1000BASE-LX| Fiber Optic (Singlemode)| LC/SC            | 5 km               | 1998   |
| 10 Gbps      | 10GBASE-T  | Twisted Pair (Cat 6a+)  | RJ-45            | 100 meters         | 2002   |
| 10 Gbps      | 10GBASE-SR | Fiber Optic (Multimode) | LC               | 300-400 meters     | 2002   |
| 10 Gbps      | 10GBASE-LR | Fiber Optic (Singlemode)| LC               | 10 km              | 2002   |
| 40 Gbps      | 40GBASE-T  | Twisted Pair (Cat 8)    | RJ-45            | 30 meters          | 2016   |
| 40 Gbps      | 40GBASE-LR4| Fiber Optic (Singlemode)| LC               | 10 km              | 2010   |
| 100 Gbps     | 100GBASE-T | Twisted Pair (Cat 8)    | RJ-45            | 30 meters          | 2016   |
| 100 Gbps     | 100GBASE-LR4| Fiber Optic (Singlemode)| LC               | 10 km              | 2010   |

**Important Points:**

*   **Twisted Pair:** The most common medium for LANs, requiring RJ-45 connectors. Categories of cable (Cat 5e, Cat 6, Cat 6a, Cat 8) dictate the supported speeds and bandwidth.
*   **Fiber Optic:** Used for longer distances and higher speeds, offering better immunity to electromagnetic interference. Different types of fiber (multimode, single-mode) and connectors exist.
*   **Auto-negotiation:** Modern Ethernet ports can automatically negotiate speed and duplex mode (half or full) with the connected device.

---

### 5. MAC Addresses and Their Function

*   **MAC (Media Access Control) Address:** A unique hardware identifier assigned to each network interface controller (NIC).
    *   **Format:** 48 bits (6 bytes) represented as 12 hexadecimal digits (e.g., `00:1A:2B:3C:4D:5E`).
    *   **Structure:** The first 3 bytes are the **Organizationally Unique Identifier (OUI)**, assigned to the manufacturer by the IEEE. The last 3 bytes are the **Network Interface Controller (NIC) serial number**, assigned by the manufacturer.
    *   **Uniqueness:** MAC addresses are designed to be globally unique.
    *   **Scope:** MAC addresses are used for **local delivery** within a broadcast domain (e.g., within a LAN segment or a single network connected by a switch). They are not routed across different networks.

*   **Function:**
    *   **Identification:** Uniquely identifies a network interface.
    *   **Frame Delivery:** Used in the destination and source address fields of Ethernet frames to direct frames to the correct device on the local network.
    *   **ARP (Address Resolution Protocol):** Used to map IP addresses (Layer 3) to MAC addresses (Layer 2) within a local network.

**Types of MAC Addresses:**

*   **Unicast:** A single destination MAC address, used to send a frame to a specific device.
*   **Multicast:** The least significant bit of the most significant byte is 1. Used to send a frame to a group of devices.
*   **Broadcast:** All bits are set to 1 (`FF:FF:FF:FF:FF:FF`). Used to send a frame to all devices on the local network.

**Example:** When your computer wants to send an IP packet to another computer on the same LAN, it first uses ARP to find the destination computer's MAC address. Then, it creates an Ethernet frame with the destination MAC address and sends it.

---

### 6. Operation of Switches and Bridges

Switches and bridges are Layer 2 devices that improve network efficiency by segmenting the network and forwarding frames intelligently.

#### 6.1. Bridges

*   **Function:** Connect two or more network segments and filter or forward traffic based on MAC addresses.
*   **Operation:**
    1.  **Learning:** Bridges learn the MAC addresses of devices connected to each of their ports by examining the source MAC address of incoming frames. They build a **MAC address table (or forwarding table)**.
    2.  **Forwarding/Filtering:** When a frame arrives at a port:
        *   If the destination MAC address is in the table and associated with the same port the frame arrived on, the bridge **filters** (discards) the frame, as it's already on the correct segment.
        *   If the destination MAC address is in the table and associated with a *different* port, the bridge **forwards** the frame out of that specific port.
        *   If the destination MAC address is not in the table, the bridge **floods** the frame out of all ports except the one it arrived on.
        *   If the destination is a **broadcast** address, the bridge floods it to all ports except the incoming one.
*   **Redundancy:** Bridges can create loops if not managed carefully, leading to broadcast storms. Spanning Tree Protocol (STP) is used to prevent loops.

#### 6.2. Switches

*   **Function:** Essentially, multi-port bridges. They provide dedicated bandwidth to each port, allowing simultaneous full-duplex communication between devices.
*   **Operation:** Similar to bridges, switches learn MAC addresses and build a MAC address table. However, they operate at much higher speeds and with more ports.
    *   **Store-and-Forward:** Switches receive the entire frame, check for errors (using FCS), and then forward it. This is the most common switching method.
    *   **Cut-Through:** Switches begin forwarding the frame as soon as the destination MAC address is read, without waiting for the entire frame or error checking. This is faster but can forward corrupted frames.
    *   **Fragment-Free:** A hybrid method that waits for the first 64 bytes of the frame (to avoid forwarding fragments).
*   **Benefits:**
    *   **Reduced Collisions:** Each port is a separate collision domain, enabling full-duplex operation.
    *   **Increased Bandwidth:** Dedicated bandwidth per port.
    *   **Segmented Network:** Isolates traffic, improving efficiency.

**Example:** Imagine a network with two departments connected by a bridge. If a device in Department A sends a frame to another device in Department A, the bridge learns the MAC address and will only forward frames destined for that device to the port connected to Department A. Frames destined for Department B will be forwarded to the port connected to Department B.

---

### 7. Common Ethernet Topologies

While Ethernet can be used with various physical topologies, its logical operation is often simplified by understanding these.

*   **Bus Topology (Older Ethernet - e.g., 10BASE2, 10BASE5):**
    *   All devices are connected to a single coaxial cable (the bus).
    *   **Characteristics:** Simple, inexpensive, but prone to collisions and network failure if the cable breaks. CSMA/CD is essential.
    *   **Decline:** Largely obsolete due to its limitations.

*   **Star Topology (Modern Ethernet - e.g., 10BASE-T, 100BASE-TX, Gigabit Ethernet):**
    *   All devices are connected to a central hub or switch.
    *   **Characteristics:** More reliable than bus topology. If a cable fails, only that specific device is affected. Hubs broadcast all traffic, while switches intelligently forward traffic. CSMA/CD is not used in switched, full-duplex environments.
    *   **Dominant topology for LANs.**

*   **Ring Topology (Less Common for Ethernet):**
    *   Devices are connected in a circular fashion.
    *   **Characteristics:** Data travels in one direction. Collisions are less of an issue with token-passing mechanisms (like Token Ring, not typical Ethernet).
    *   **Note:** Ethernet is primarily associated with bus (historically) and star topologies.

---

### Practice Questions and Answers

**Question 1:** What is the primary function of the MAC address in Ethernet?
    a) To identify the network on which a device resides.
    b) To provide a unique hardware identifier for network interface cards used for local delivery.
    c) To route traffic between different networks.
    d) To encrypt data before transmission.

**Answer 1:** b) To provide a unique hardware identifier for network interface cards used for local delivery.

**Question 2:** Explain the difference between the "EtherType" field in Ethernet II and the "Length" field in IEEE 802.3 frames.

**Answer 2:** The "EtherType" field in Ethernet II frames indicates the protocol encapsulated within the payload (e.g., IPv4, ARP). The "Length" field in IEEE 802.3 frames specifies the size of the data field that follows.

**Question 3:** In the context of older shared Ethernet, what does CSMA/CD stand for, and why was it necessary?

**Answer 3:** CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection. It was necessary in shared Ethernet media (half-duplex) to manage access to the shared channel and handle situations where multiple stations transmit simultaneously, causing collisions.

**Question 4:** What is the advantage of using a switch over a hub in an Ethernet network?

**Answer 4:** A switch creates separate collision domains for each port, allowing full-duplex communication and dedicated bandwidth per connection, thus significantly reducing collisions and improving network performance compared to a hub, which broadcasts all traffic to all connected devices.

**Question 5:** Which Ethernet standard typically uses Cat 6a or higher twisted-pair cabling and supports speeds of 10 Gbps?
    a) 100BASE-T
    b) 1000BASE-T
    c) 10GBASE-T
    d) 40GBASE-T

**Answer 5:** c) 10GBASE-T

---

### Important Points to Remember

*   **Ethernet defines Layer 1 (Physical) and Layer 2 (Data Link) protocols.**
*   **MAC addresses are 48-bit hardware addresses used for local network communication.**
*   **Ethernet II frames are commonly used for IP traffic, utilizing the EtherType field.**
*   **CSMA/CD was a crucial mechanism for older, shared Ethernet but is generally not used in modern switched, full-duplex Ethernet.**
*   **Switches segment networks into collision domains, enabling higher speeds and efficiency.**
*   **The star topology is the dominant physical topology for modern Ethernet LANs.**
*   **Ethernet has evolved significantly in speed and media capabilities to meet increasing bandwidth demands.**
*   **Error detection in Ethernet is primarily handled by the Frame Check Sequence (FCS).**

---
