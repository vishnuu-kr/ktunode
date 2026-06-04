---
title: "Wired LANs - IEEE Standards"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92e"
status: "completed"
scrapedAt: "2026-05-20T17:02:44.175Z"
---
# Computer Networks: Module 2 - Data Link Layer
## Topic: Wired LANs - IEEE Standards

---

### 1. Introduction to Wired LANs

*   **Local Area Network (LAN):** A network that connects computers within a limited area such as a residence, school, laboratory, university campus or office building.
*   **Wired LAN:** A LAN that uses physical cables (e.g., Ethernet cables) to connect devices. This offers higher speeds, better reliability, and more security compared to wireless LANs.
*   **Data Link Layer (Layer 2):** Responsible for node-to-node data transfer between directly connected nodes. It handles physical addressing, framing, error control, and flow control.
*   **IEEE (Institute of Electrical and Electronics Engineers):** A global professional organization that develops standards in many areas, including computer networking.
*   **IEEE 802 Standards:** A family of standards specifically for LANs and Metropolitan Area Networks (MANs). The Data Link Layer is further divided into two sublayers by these standards:
    *   **Logical Link Control (LLC) Sublayer:** Deals with multiplexing protocols and optional error correction. It provides a common interface to the Network Layer, independent of the underlying MAC protocol.
    *   **Media Access Control (MAC) Sublayer:** Deals with accessing the physical medium and physical addressing (MAC addresses).

---

### 2. The Role of the MAC Sublayer

*   **Media Access Control:** Governs how devices share the physical medium (e.g., the Ethernet cable) to transmit data without collisions.
*   **MAC Address (Physical Address):** A unique hardware identifier assigned to each network interface controller (NIC). It's a 48-bit address, usually represented in hexadecimal format (e.g., `00:1A:2B:3C:4D:5E`).
    *   **Structure:** The first 24 bits represent the **Organizationally Unique Identifier (OUI)**, which identifies the manufacturer. The last 24 bits are a **unique serial number** assigned by the manufacturer.
    *   **Unicast:** A MAC address sent to a single network interface.
    *   **Broadcast:** A special MAC address (`FF:FF:FF:FF:FF:FF`) sent to all devices on the network segment.
    *   **Multicast:** A MAC address used to send data to a group of devices.
*   **Framing:** The MAC sublayer encapsulates data from the LLC sublayer into frames. Each frame has a specific structure, including header (source and destination MAC addresses, type/length field) and trailer (error detection code).

---

### 3. IEEE 802.3: Ethernet

*   **Evolution of Ethernet:** Originally developed by Xerox PARC, standardized by IEEE as 802.3.
*   **Original CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** The core MAC protocol for early Ethernet.
    *   **Carrier Sense (CS):** Before transmitting, a station "listens" to the medium to check if it's busy. If busy, it waits.
    *   **Multiple Access (MA):** Multiple stations share the same communication medium.
    *   **Collision Detection (CD):** If two stations transmit simultaneously, a collision occurs. Stations detect this collision, stop transmitting, and wait for a random amount of time before retrying.
    *   **Backoff Algorithm:** When a collision occurs, each colliding station generates a random backoff time before attempting retransmission. This reduces the probability of repeated collisions.
*   **Ethernet Frame Formats:**
    *   **DIX Ethernet Frame (original):** Type field used to identify the Network Layer protocol.
    *   **IEEE 802.3 Frame Formats:**
        *   **802.3 (Ethernet II-like):** Similar to DIX, uses a Type field. Commonly used in TCP/IP networks.
        *   **802.3:** Uses a Length field and the LLC header.
    *   **Modern Ethernet Frames (IEEE 802.3-2008):** Supports larger frame sizes and VLAN tagging.
        *   **Preamble:** Synchronization signal.
        *   **Start Frame Delimiter (SFD):** Marks the beginning of the frame.
        *   **Destination MAC Address:** 6 bytes.
        *   **Source MAC Address:** 6 bytes.
        *   **Length/Type Field:** 2 bytes.
            *   If value < 1536 (0x0600), it's a **Length** field (indicates the number of bytes in the LLC data).
            *   If value >= 1536, it's a **Type** field (indicates the Network Layer protocol, e.g., 0x0800 for IP).
        *   **Payload (Data):** 46-1500 bytes. Minimum 46 bytes to ensure collision detection on the wire. If the actual data is less than 46 bytes, padding is added.
        *   **Frame Check Sequence (FCS):** 4 bytes (CRC-32) for error detection.
*   **Evolution of Ethernet Speeds and Mediums:**
    *   **10 Mbps:**
        *   **10BASE5 (Thicknet):** Coaxial cable, max segment length 500m.
        *   **10BASE2 (Thinnet):** Coaxial cable, max segment length 185m.
        *   **10BASE-T:** Twisted-pair cable (Cat 3 or better), uses RJ-45 connectors. Requires hubs or switches.
        *   **10BASE-F:** Fiber optic cable.
    *   **100 Mbps (Fast Ethernet):**
        *   **100BASE-TX:** Twisted-pair cable (Cat 5 or better).
        *   **100BASE-FX:** Fiber optic cable.
        *   **100BASE-T4:** Twisted-pair cable (Cat 3 or better), uses all 4 pairs.
    *   **1000 Mbps (Gigabit Ethernet):**
        *   **1000BASE-T:** Twisted-pair cable (Cat 5e or better), uses all 4 pairs, auto-negotiation.
        *   **1000BASE-SX:** Fiber optic cable (short wavelength).
        *   **1000BASE-LX:** Fiber optic cable (long wavelength).
    *   **10 Gbps, 40 Gbps, 100 Gbps and beyond:** Higher speeds primarily use fiber optic cables, with advancements in signal processing and modulation techniques.
*   **Modern Ethernet (Switched Ethernet):**
    *   **Hubs (obsolete):** Shared bandwidth, broadcast all traffic, susceptible to collisions.
    *   **Switches:**
        *   Create dedicated collision domains for each port.
        *   Learn MAC addresses of connected devices and forward frames only to the intended destination port.
        *   Significantly improves network performance and reduces collisions.
    *   **Full-Duplex:** Allows devices to transmit and receive data simultaneously on a connection (typically between a host and a switch port). This eliminates collisions entirely on that link.

---

### 4. IEEE 802.11: Wireless LANs (Wi-Fi) - Brief Mention

*   While the topic focuses on *wired* LANs, it's important to note that IEEE also defines standards for wireless LANs (WLANs) under the **IEEE 802.11** family (Wi-Fi). These standards also involve MAC sublayer protocols for media access.

---

### 5. Other IEEE 802 Standards (Briefly)

*   **IEEE 802.1:** Network Management.
*   **IEEE 802.2:** Logical Link Control (LLC).
*   **IEEE 802.5:** Token Ring (largely obsolete now).
*   **IEEE 802.6:** Metropolitan Area Network (MAN) - DQDB.
*   **IEEE 802.15:** Wireless Personal Area Networks (WPANs).
*   **IEEE 802.16:** Broadband Wireless Access (WiMAX).
*   **IEEE 802.1D:** Spanning Tree Protocol (STP) for preventing loops in switched networks.
*   **IEEE 802.1Q:** VLAN Tagging.

---

### 6. Key Concepts and Definitions Summary

*   **MAC Address:** Unique hardware identifier for network interfaces.
*   **CSMA/CD:** Media access method used in classic Ethernet to handle shared medium access and collisions.
*   **Collision Domain:** A network segment where collisions can occur. Hubs create large collision domains; switches break them down.
*   **Broadcast Domain:** A network segment where broadcast frames are propagated. Routers separate broadcast domains.
*   **Full-Duplex:** Simultaneous transmission and reception of data, eliminating collisions.
*   **Ethernet Frame:** The unit of data at the MAC layer for Ethernet.
*   **OUI:** Organizationally Unique Identifier, part of a MAC address identifying the manufacturer.
*   **Preamble/SFD:** Synchronization signals at the beginning of an Ethernet frame.
*   **FCS:** Frame Check Sequence (CRC-32) for error detection.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the MAC sublayer in IEEE 802 standards?
a) Error correction and detection
b) Physical addressing and media access control
c) Network layer protocol identification
d) Routing of data packets

**Question 2:**
What is the standard length of a MAC address?
a) 32 bits
b) 48 bits
c) 64 bits
d) 128 bits

**Question 3:**
Which of the following is a characteristic of CSMA/CD?
a) Devices transmit only when the medium is idle.
b) Collisions are detected and resolved through retransmission.
c) It is used in full-duplex environments.
d) It is primarily a contention-free protocol.

**Question 4:**
In an IEEE 802.3 frame, if the Length/Type field has a value of `0x0800`, what does this value signify?
a) The length of the payload is 0x0800 bytes.
b) It indicates the Network Layer protocol is IP (Internet Protocol).
c) It signifies a broadcast frame.
d) It is an error in the frame format.

**Question 5:**
Explain the difference between a collision domain and a broadcast domain.

**Question 6:**
What is the main advantage of using switches over hubs in modern Ethernet networks?

---

### 8. Answers to Practice Questions

**Answer 1:**
b) Physical addressing and media access control.
*Explanation: The MAC sublayer is responsible for assigning unique hardware addresses (MAC addresses) and managing how devices gain access to the shared physical medium.*

**Answer 2:**
b) 48 bits.
*Explanation: MAC addresses are universally 48 bits long, typically represented as six octets separated by colons or hyphens.*

**Answer 3:**
b) Collisions are detected and resolved through retransmission.
*Explanation: CSMA/CD is a probabilistic access method that involves listening before transmitting, and if a collision occurs, the transmitting nodes detect it, stop transmitting, and then retransmit after a random backoff period.*

**Answer 4:**
b) It indicates the Network Layer protocol is IP (Internet Protocol).
*Explanation: The value `0x0800` is the standard EtherType value assigned to the Internet Protocol (IP) by the IEEE.*

**Answer 5:**
*   **Collision Domain:** A network segment where data packets transmitted by one device can collide with data packets transmitted by another device. Devices connected to a hub share a collision domain. Switches create separate collision domains for each port, significantly reducing collisions.
*   **Broadcast Domain:** A network segment where broadcast frames are propagated. All devices within the same subnet belong to the same broadcast domain. Routers are used to separate broadcast domains.

**Answer 6:**
The main advantage of using switches over hubs is that **switches create separate collision domains for each port**. This means that only one device transmits on a port at a time, and collisions are eliminated between devices connected to different ports. Switches also learn MAC addresses and forward frames only to the intended destination port, rather than broadcasting them to all ports like a hub. This leads to much more efficient use of bandwidth, higher network speeds, and reduced latency. Furthermore, switches can operate in full-duplex mode, allowing simultaneous transmission and reception, further eliminating collisions and doubling the effective throughput.

---

### 9. Important Points to Remember

*   **IEEE 802** family of standards governs LANs and MANs.
*   The **Data Link Layer** is divided into **LLC** and **MAC** sublayers.
*   **MAC addresses** are 48-bit hardware addresses unique to each network interface.
*   **Ethernet (IEEE 802.3)** is the dominant wired LAN technology.
*   **CSMA/CD** was the original MAC protocol for Ethernet, designed for shared media.
*   Modern Ethernet relies on **switches** and **full-duplex** communication, which eliminates collisions on switched links.
*   Ethernet frames have a specific structure including **preamble, SFD, MAC addresses, Length/Type field, payload, and FCS**.
*   The **Length/Type field** differentiates between frame length and protocol type.
*   The minimum frame size (46 bytes of data) is crucial for the proper functioning of CSMA/CD's collision detection mechanism.
*   Understanding the evolution of Ethernet speeds and cabling (e.g., 10BASE-T, 100BASE-TX, 1000BASE-T) is important.

---
