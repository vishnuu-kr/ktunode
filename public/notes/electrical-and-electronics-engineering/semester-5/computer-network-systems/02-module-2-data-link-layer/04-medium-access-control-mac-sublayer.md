---
title: "Medium Access Control (MAC) sublayer"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36471"
status: "completed"
scrapedAt: "2026-05-23T16:19:58.461Z"
---
## COMPUTER NETWORK SYSTEMS: Module 2: Data Link Layer - Medium Access Control (MAC) Sublayer

This document provides comprehensive study notes on the Medium Access Control (MAC) sublayer of the Data Link Layer, designed to align with the learning outcomes and course outcomes for this module.

---

### 1. Introduction to the MAC Sublayer

**Key Concept:** The Data Link Layer is responsible for reliable data transfer between adjacent nodes on a network. It is typically divided into two sublayers: the Logical Link Control (LLC) sublayer and the Medium Access Control (MAC) sublayer.

**1.1. Role of the MAC Sublayer:**

*   **Purpose:** The MAC sublayer's primary function is to control how devices on a shared network medium gain access to transmit data. This is crucial in broadcast or multi-access networks where multiple devices share the same communication channel.
*   **Controlling Access:** It defines the rules and protocols that govern when a station can transmit, how it detects collisions, and how it recovers from them.
*   **Addressing:** The MAC sublayer is also responsible for physical addressing (MAC addresses) which uniquely identify devices at the hardware level. (This is often closely tied to MAC protocols).
*   **Connection to LLC:** The LLC sublayer sits above the MAC sublayer and provides a uniform interface to the network layer, masking the underlying MAC protocol differences.

**Important Point to Remember:** Without a MAC protocol, devices on a shared medium would constantly collide, leading to chaos and preventing effective communication.

**Textbook Reference:**
*   **Tanenbaum:** Discusses the role of the MAC sublayer in managing access to shared media, particularly in the context of Ethernet.
*   **Forouzan:** Explains the MAC sublayer's responsibility for frame creation, addressing, and controlling access to the physical medium.

**Course Outcome Alignment:**
*   **CO2:** This section directly addresses the role of the MAC sublayer in networks like Ethernet and wireless LANs.

---

### 2. Problems in Shared Media Access

**Key Concept:** In networks where multiple devices share a single communication channel, simultaneous transmissions from different devices can lead to data corruption due to signal interference. This is known as a **collision**.

**2.1. The Collision Problem:**

*   **Scenario:** Imagine two stations, A and B, connected to the same cable. If both A and B decide to transmit data simultaneously, their signals will mix, and neither will be able to receive the data correctly.
*   **Consequences:** Collisions result in corrupted frames and require retransmission, leading to inefficiency and delays.

**Example:** Think of a group of people trying to speak at the same time in a crowded room. No one can understand anyone else.

**2.2. Need for Access Control:**

*   **Requirement:** To overcome the collision problem, a mechanism is needed to regulate when and how stations can transmit. This is the fundamental purpose of MAC protocols.
*   **Objectives of MAC Protocols:**
    *   Minimize collisions.
    *   Maximize channel utilization.
    *   Provide fair access to the medium.
    *   Ensure timely delivery of data.

**Textbook Reference:**
*   **Peterson & Davie:** Elaborates on the challenges of shared network access and the necessity of MAC protocols to manage it.

**Course Outcome Alignment:**
*   **CO2:** Understanding the collision problem is fundamental to understanding the role of MAC in Ethernet and WLANs.

---

### 3. Classification of MAC Protocols

**Key Concept:** MAC protocols can be broadly categorized based on their approach to managing channel access.

**3.1. Categories of MAC Protocols:**

*   **Contention-Based Protocols:**
    *   **Description:** Stations compete for access to the medium. If a collision occurs, stations typically back off and try again later.
    *   **Characteristics:** Simple to implement, efficient under light to moderate load, but performance degrades significantly under heavy load due to increased collisions.
    *   **Examples:** ALOHA, CSMA, CSMA/CD, CSMA/CA.

*   **Controlled-Access Protocols:**
    *   **Description:** Stations are given explicit permission to transmit, often in a scheduled manner. Collisions are either prevented or highly minimized.
    *   **Characteristics:** More complex to implement, predictable performance, but can be inefficient if stations have no data to send when it's their turn.
    *   **Examples:** Token Passing, Polling.

*   **Channel Partitioning Protocols:**
    *   **Description:** The available bandwidth of the communication channel is divided among stations, either by time or frequency.
    *   **Characteristics:** Eliminates or significantly reduces collisions, but can be inefficient if stations don't utilize their allocated portion of the channel.
    *   **Examples:** Time Division Multiple Access (TDMA), Frequency Division Multiple Access (FDMA), Code Division Multiple Access (CDMA).

**Important Point to Remember:** The choice of MAC protocol significantly impacts the performance and efficiency of a network.

**Textbook Reference:**
*   **Forouzan:** Provides a detailed classification of MAC protocols with explanations of each category.
*   **Tanenbaum:** Covers various MAC techniques, including contention-based and controlled-access methods.

**Course Outcome Alignment:**
*   **CO2:** Understanding these classifications helps in identifying the types of MAC protocols used in Ethernets and wireless LANs.

---

### 4. Contention-Based MAC Protocols

**Key Concept:** These protocols involve stations directly attempting to access the shared medium and dealing with the consequences of simultaneous transmissions (collisions).

**4.1. ALOHA:**

*   **Description:** The simplest MAC protocol. A station transmits whenever it has data to send. If a collision occurs, the station retransmits after a random waiting period.
*   **Types:**
    *   **Pure ALOHA:** Stations transmit whenever they want.
    *   **Slotted ALOHA:** Time is divided into slots. Stations can only transmit at the beginning of a slot. This reduces the probability of collisions.
*   **Vulnerability Window:** The period during which a transmission can collide with another transmission. In Pure ALOHA, it's the entire frame transmission time. In Slotted ALOHA, it's one slot time.
*   **Throughput:** Relatively low, especially for Pure ALOHA. Slotted ALOHA offers better throughput (maximum around 1/e or ~37%).
*   **Formula for Throughput (Slotted ALOHA):** $S = G \cdot e^{-G}$ where S is throughput and G is the average number of transmissions per slot.

**Example:** Imagine a single radio channel. Anyone can talk whenever they want. If two people talk at the same time, they have to wait and try again.

**4.2. Carrier Sense Multiple Access (CSMA):**

*   **Description:** Stations listen to the medium (carrier sense) before transmitting. If the medium is busy, they wait. If it's idle, they transmit.
*   **Purpose:** Reduces the likelihood of collisions by detecting activity on the channel before transmitting.
*   **Types of CSMA:**
    *   **1-Persistent CSMA:** If the medium is idle, transmit immediately. If busy, wait until idle and then transmit with probability 1 (i.e., transmit immediately).
    *   **Non-persistent CSMA:** If the medium is idle, transmit immediately. If busy, wait a random amount of time and then sense again. This reduces the chance of collisions between waiting stations.
    *   **0-Persistent CSMA (p-persistent CSMA):** If the medium is idle, transmit immediately with probability 'p'. If it fails to transmit (with probability 1-p), wait a random amount of time and sense again. If the medium is busy, wait and sense again.

**Example:** Similar to ALOHA, but before speaking, you listen to see if anyone else is already speaking. If the channel is clear, you speak.

**4.3. CSMA with Collision Detection (CSMA/CD):**

*   **Description:** Stations not only listen before transmitting (carrier sense) but also monitor the medium *while* transmitting. If a collision is detected, they immediately stop transmitting, send a jam signal to ensure all other stations detect the collision, and then back off for a random period before attempting retransmission.
*   **Key Mechanism:** Collision Detection (CD).
*   **Backoff Algorithm:** Typically uses a **binary exponential backoff** algorithm. The maximum number of retransmission attempts is limited. If a station fails to transmit successfully after a certain number of attempts, it gives up.
*   **Efficiency:** Much more efficient than ALOHA and basic CSMA because it truncates transmissions early, saving bandwidth.
*   **Used In:** Classic Ethernet (IEEE 802.3).
*   **Frame Size and Collision Domain:** The minimum frame size in Ethernet is related to the propagation delay of the network segment (collision domain). A frame must be long enough for a station to detect a collision if one occurs before the transmission is complete.

**Important Point to Remember:** CSMA/CD is the cornerstone of traditional Ethernet, enabling efficient shared access.

**Textbook Reference:**
*   **Tanenbaum:** Provides an excellent explanation of ALOHA, CSMA, and CSMA/CD, including the backoff mechanism and the relationship between frame size and collision detection.
*   **Forouzan:** Details the workings of CSMA/CD, including the algorithms and their performance.
*   **Kurose & Ross:** Explains the principles of CSMA/CD in the context of Ethernet's evolution.

**Course Outcome Alignment:**
*   **CO2:** CSMA/CD is directly relevant to understanding Ethernets.

**Practice Question 1:**
What is the main advantage of CSMA/CD over CSMA?
*   **Answer:** The main advantage of CSMA/CD over CSMA is its ability to detect and react to collisions *during* transmission, thereby truncating aborted transmissions and significantly improving efficiency compared to CSMA, which only detects collisions after a transmission has completed or when another station starts transmitting.

**4.4. CSMA with Collision Avoidance (CSMA/CA):**

*   **Description:** Stations use methods to *avoid* collisions before they happen, rather than detecting them after they occur. This is particularly useful in wireless networks where it's difficult for a station to listen while transmitting (due to the hidden terminal problem and the near-far problem).
*   **Mechanisms:**
    *   **Interframe Spacing (IFS):** A short period of silence on the medium between frames. Different IFS values are used for different types of frames (e.g., ACK, data frames) to establish priority.
    *   **Contention Window (CW):** A random backoff timer. When a station wants to transmit, it waits for an idle medium, then generates a random backoff time within its CW. It decrements its counter as long as the medium remains idle. When the counter reaches zero, it transmits.
    *   **Acknowledgement (ACK):** The receiver sends an ACK frame for a successfully received data frame. If the sender doesn't receive an ACK within a certain time, it assumes a collision or loss occurred and retransmits.
    *   **Request to Send (RTS)/Clear to Send (CTS) Handshake (Optional):**
        *   A station wanting to transmit sends an RTS frame to the intended receiver.
        *   The receiver responds with a CTS frame.
        *   Other stations hearing the RTS or CTS defer their transmissions, effectively reserving the medium. This helps mitigate the hidden terminal problem.
*   **Used In:** Wireless LANs (Wi-Fi, IEEE 802.11).

**Example:** Imagine walking into a room and wanting to speak. Instead of just speaking, you first wait for a pause, then briefly announce your intention to speak, and only after getting a nod from others do you start your full conversation.

**Important Point to Remember:** CSMA/CA is designed for wireless environments where collision detection is problematic.

**Textbook Reference:**
*   **Forouzan:** Provides a comprehensive explanation of CSMA/CA, its components, and its application in wireless networks.
*   **Kurose & Ross:** Discusses the challenges of wireless MAC protocols like CSMA/CA and the RTS/CTS mechanism.

**Course Outcome Alignment:**
*   **CO2:** CSMA/CA is the primary MAC protocol for wireless LANs.

**Practice Question 2:**
Explain the "hidden terminal problem" and how CSMA/CA with RTS/CTS helps to solve it.
*   **Answer:** The hidden terminal problem occurs in wireless networks when two stations (A and C) are within range of a central station (B), but not within range of each other. If A transmits to B while C also transmits to B, B will experience a collision. However, A and C might not hear each other's transmissions. CSMA/CA with RTS/CTS solves this: Station A sends an RTS to B. If B is free, it sends a CTS back. Other stations (like C) that hear the CTS know that the medium is reserved for B and defer their transmissions, preventing the collision at B.

---

### 5. Controlled-Access MAC Protocols

**Key Concept:** These protocols use specific mechanisms to grant stations access to the medium, avoiding or significantly reducing contention.

**5.1. Token Passing:**

*   **Description:** A special frame, called a **token**, circulates around the network. A station can only transmit data when it possesses the token. After transmitting its data (or if it has nothing to send), it passes the token to the next station.
*   **Operation:**
    1.  A token circulates among the stations.
    2.  A station wanting to transmit must wait until it receives the token.
    3.  When it receives the token, it captures it, appends its data frame, and sends it.
    4.  The destination station copies the data and sets a bit in the frame indicating it has been received.
    5.  The frame continues circulating until it returns to the sender.
    6.  The sender checks the received frame, removes it from the network, and regenerates a new token to pass to the next station.
*   **Advantages:** Eliminates collisions, ensures fair access, predictable performance.
*   **Disadvantages:** If the token is lost or corrupted, the network can stop. If a station holding the token fails to pass it, it can also disrupt the network. Requires overhead for token management.
*   **Used In:** Token Ring (IEEE 802.5), Fiber Distributed Data Interface (FDDI).

**Example:** Imagine a speaking stick in a circle. Only the person holding the stick can talk. Once they finish, they pass the stick to the next person.

**Important Point to Remember:** Token passing is a deterministic MAC protocol that prevents collisions by ensuring only one station can transmit at a time.

**Textbook Reference:**
*   **Tanenbaum:** Explains the token passing mechanism in detail, including its implementation in Token Ring.
*   **Forouzan:** Covers token passing as a controlled-access method and its advantages and disadvantages.

**Course Outcome Alignment:**
*   **CO2:** While Ethernet is more prevalent, understanding Token Ring provides a contrasting example of a MAC protocol.

**5.2. Polling:**

*   **Description:** One station acts as a **master**, and all other stations are **slaves**. The master polls the slaves one by one, asking if they have data to send.
*   **Types of Polling:**
    *   **Select (Poll/Send):** The master polls a slave to see if it wants to send data. If it does, the master permits it to transmit.
    *   **Poll/Receive:** The master polls a slave to see if it wants to receive data. If it does, the master sends data to it.
*   **Advantages:** No collisions, predictable performance.
*   **Disadvantages:** Master can be a bottleneck. If the master fails, the network stops. If a slave has no data, there's wasted time when the master polls it.
*   **Used In:** Older master-slave architectures, some modern token-less LANs.

**Example:** A teacher calling on students one by one to ask if they have questions or something to share.

**Textbook Reference:**
*   **Tanenbaum:** Discusses polling as a master-slave access method.

---

### 6. Channel Partitioning MAC Protocols

**Key Concept:** These protocols divide the communication channel into smaller parts, allocating each part to a specific station or time slot.

**6.1. Time Division Multiple Access (TDMA):**

*   **Description:** The channel's time is divided into fixed-length slots. These slots are organized into frames. Each station is assigned a specific time slot in each frame.
*   **Operation:** Stations transmit only during their allocated time slot.
*   **Advantages:** No collisions, efficient if stations have data to send in their slot.
*   **Disadvantages:** Inefficient if a station has no data to send during its slot (the slot goes unused). Requires precise synchronization.
*   **Used In:** Some cellular systems (e.g., GSM), older satellite communication.

**Example:** Imagine a bus route with scheduled stops. Each stop has a fixed time allocated for boarding and alighting.

**6.2. Frequency Division Multiple Access (FDMA):**

*   **Description:** The total bandwidth of the communication channel is divided into distinct frequency bands. Each station is assigned a specific frequency band.
*   **Operation:** Stations transmit on their assigned frequency band, which is separate from other stations' bands.
*   **Advantages:** No collisions, simple concept.
*   **Disadvantages:** Inefficient if a station doesn't utilize its entire allocated frequency band. Requires guard bands between frequencies to prevent interference.
*   **Used In:** Radio broadcasting, early cellular systems.

**Example:** Think of different radio stations broadcasting on different frequencies. You tune your radio to a specific frequency to listen to a particular station.

**6.3. Code Division Multiple Access (CDMA):**

*   **Description:** Multiple stations transmit simultaneously on the same frequency band. Each station uses a unique spreading code to encode its data. The receiver, using the same code, can extract its data from the mixed signals.
*   **Operation:** Spreading codes are designed to be orthogonal, meaning that when one station's signal is multiplied by another station's code, the result is close to zero.
*   **Advantages:** High bandwidth utilization, privacy (as unauthorized users don't have the code), resistance to jamming.
*   **Disadvantages:** More complex signal processing.
*   **Used In:** Some cellular systems (e.g., 3G), military communications.

**Example:** Imagine multiple people talking in a room simultaneously, but each person speaks a different language. You can understand your friend because you speak the same language, and others' conversations fade into the background.

**Important Point to Remember:** Channel partitioning methods allocate specific resources (time or frequency) to prevent collisions.

**Textbook Reference:**
*   **Tanenbaum:** Covers TDMA and FDMA as methods for sharing channels.
*   **Forouzan:** Explains the principles of TDMA, FDMA, and CDMA.

**Course Outcome Alignment:**
*   **CO2:** While less common in typical Ethernet/Wi-Fi LANs, understanding these provides context for broader networking concepts.

---

### 7. MAC Addressing

**Key Concept:** The MAC sublayer uses 48-bit physical addresses, known as MAC addresses or hardware addresses, to uniquely identify network interfaces at the local network level.

**7.1. Structure of a MAC Address:**

*   **Format:** Typically represented as six groups of two hexadecimal digits, separated by colons or hyphens (e.g., 00:1A:2B:3C:4D:5E or 00-1A-2B-3C-4D-5E).
*   **Organizationally Unique Identifier (OUI):** The first 24 bits (three octets) of a MAC address are assigned to the manufacturer by the IEEE.
*   **Network Interface Controller (NIC) Specific:** The remaining 24 bits are assigned by the manufacturer to uniquely identify each network interface card (NIC).
*   **Unicast, Multicast, Broadcast:**
    *   **Unicast:** The least significant bit of the first octet is 0. Used to address a single specific device.
    *   **Multicast:** The least significant bit of the first octet is 1. Used to address a group of devices.
    *   **Broadcast:** A special address (FF:FF:FF:FF:FF:FF) used to address all devices on the local network segment.

**7.2. How MAC Addresses are Used:**

*   **Frame Delivery:** When a frame is sent on a local network segment (like an Ethernet LAN or Wi-Fi network), the MAC address of the destination device is used to direct the frame to the correct interface.
*   **ARP (Address Resolution Protocol):** ARP is used in IPv4 to map an IP address (Layer 3) to a MAC address (Layer 2). When a device needs to send an IP packet to another device on the same network, it first uses ARP to find the destination's MAC address.
*   **NDP (Neighbor Discovery Protocol):** In IPv6, NDP serves a similar purpose to ARP.
*   **Switch Operation:** Network switches use MAC address tables to learn which MAC addresses are connected to which ports and forward frames only to the relevant ports, improving efficiency and reducing collisions in switched networks.

**Important Point to Remember:** MAC addresses are burned into the hardware of network interfaces and are used for local delivery. They are not routable across different networks.

**Textbook Reference:**
*   **Tanenbaum:** Explains MAC addresses as physical addresses and their role in frame addressing.
*   **Forouzan:** Details the structure and usage of MAC addresses.
*   **Kurose & Ross:** Discusses MAC addressing in the context of Ethernet frame structure and switching.

**Course Outcome Alignment:**
*   **CO2:** Identification of the role of MAC sublayer in networking devices like Ethernet switches.

**Practice Question 3:**
What is the primary difference between an IP address and a MAC address in terms of their scope and purpose?
*   **Answer:** An IP address is a logical, hierarchical address used for routing packets across networks (Layer 3). It can change if a device moves to a different network. A MAC address is a physical, flat address assigned to a network interface card (Layer 2). It is globally unique (within its assignment) and generally permanent, used for delivery of frames within a local network segment.

---

### 8. Bridging and Switching

**Key Concept:** Bridges and switches operate at the Data Link Layer (Layer 2) and use MAC addresses to forward frames between network segments.

**8.1. Bridges:**

*   **Function:** Connect two or more network segments and forward frames based on MAC addresses. They operate at the MAC sublayer.
*   **Operation:**
    1.  A bridge learns the MAC addresses of devices connected to each of its ports.
    2.  It maintains a **MAC address table** (also called a forwarding table or bridge table).
    3.  When a frame arrives, the bridge examines the destination MAC address.
    4.  It looks up the destination MAC address in its table.
    5.  If the destination is on the same port the frame came from, the bridge discards it (to prevent loops and redundant traffic).
    6.  If the destination is on a different port, the bridge forwards the frame to that port.
    7.  If the destination MAC address is unknown or is a broadcast address, the bridge floods the frame to all ports except the one it arrived on.
*   **Benefits:**
    *   Reduce collisions: By segmenting the network, bridges create smaller collision domains.
    *   Increase bandwidth: Devices on different segments can transmit simultaneously without colliding.
    *   Connect dissimilar networks (e.g., Ethernet to Token Ring, although less common now).
*   **Spanning Tree Protocol (STP):** Used to prevent loops in networks with redundant paths.

**Example:** Imagine a librarian sorting books. They look at the book's title (destination MAC) and decide which shelf (port) to place it on.

**8.2. Switches:**

*   **Function:** Essentially a multi-port bridge. They provide much higher performance than traditional bridges due to dedicated switching fabrics and faster processing.
*   **Operation:** Similar to bridges, switches learn MAC addresses and build a forwarding table. However, switches typically operate in full-duplex mode, meaning a device can transmit and receive simultaneously without collisions on its connection. Each port on a switch is its own collision domain.
*   **Advantages:**
    *   Each port is a separate collision domain, virtually eliminating collisions in switched networks (especially with full-duplex operation).
    *   Higher performance and throughput than hubs or bridges.
    *   Support for VLANs (Virtual Local Area Networks) for network segmentation.

**Important Point to Remember:** Switches have largely replaced hubs and bridges in modern LANs due to their efficiency and performance.

**Textbook Reference:**
*   **Tanenbaum:** Discusses bridges and their role in segmenting networks.
*   **Forouzan:** Explains the operation of bridges and switches, including MAC address tables and STP.
*   **Kurose & Ross:** Provides a detailed look at Ethernet switching and the forwarding process.

**Course Outcome Alignment:**
*   **CO2:** Directly addresses the role of networking devices (switches) in Ethernets.

**Practice Question 4:**
What is the primary advantage of a switch over a hub in terms of collision management?
*   **Answer:** A hub is a simple repeater that broadcasts all incoming traffic to all other ports, creating a single large collision domain. A switch, however, creates a separate collision domain for each port. By learning MAC addresses and forwarding frames only to the intended destination port, switches significantly reduce or eliminate collisions, especially when operating in full-duplex mode.

---

### 9. Summary of MAC Protocols in Common Networks

*   **Ethernet (IEEE 802.3):** Primarily uses **CSMA/CD** for shared-medium Ethernet (e.g., early coax cable). In modern switched Ethernet, the CSMA/CD collision detection mechanism is largely bypassed by full-duplex operation, but the MAC addressing and frame format remain.
*   **Wi-Fi (IEEE 802.11 Wireless LANs):** Uses **CSMA/CA** with RTS/CTS handshake for collision avoidance in the wireless medium.

**Important Point to Remember:** The choice of MAC protocol is dictated by the characteristics of the network medium and the requirements for access control.

**Course Outcome Alignment:**
*   **CO2:** Reinforces the knowledge of MAC protocols used in Ethernet and WLANs.

---

### 10. Practice Questions and Answers

**Question 1:**
Which MAC protocol is primarily used in modern switched Ethernet networks, and why is collision detection less of a concern in this configuration?
**Answer:** While CSMA/CD is the foundational MAC protocol for Ethernet, modern switched Ethernet networks primarily operate in full-duplex mode. In full-duplex, each port on the switch acts as a separate collision domain, and the communication between the switch and connected devices is bidirectional and dedicated. This eliminates the possibility of collisions occurring between devices connected to different ports or even between the switch and a device on the same link.

**Question 2:**
Describe the role of the "Contention Window" in CSMA/CA.
**Answer:** The Contention Window (CW) in CSMA/CA is a parameter used for the random backoff mechanism. When a station wants to transmit, it waits for the medium to be idle, then generates a random backoff time within the range defined by its current CW. This random delay helps to desynchronize stations and prevent them from transmitting simultaneously after the medium becomes idle. The CW size typically increases with each successive collision experienced by a station, making the backoff periods longer and reducing the likelihood of further collisions.

**Question 3:**
What is the main advantage of a token-passing MAC protocol over a contention-based protocol like CSMA/CD?
**Answer:** The main advantage of a token-passing MAC protocol is its deterministic nature, which eliminates collisions entirely. Unlike CSMA/CD where collisions are possible (though minimized), token passing ensures that only one station can transmit at any given time, leading to predictable performance and guaranteed access to the medium, albeit with potential overhead for token management.

**Question 4:**
Explain how a network switch uses MAC addresses to forward frames.
**Answer:** A network switch maintains a MAC address table (forwarding table). When a frame arrives at a port, the switch inspects the destination MAC address. It then looks up this address in its table.
    *   If the destination MAC address is found in the table and is associated with a different port than the one the frame arrived on, the switch forwards the frame only to that specific destination port.
    *   If the destination MAC address is not in the table (or if it's a broadcast address), the switch floods the frame to all ports except the one it arrived on.
    *   If the destination MAC address is associated with the same port the frame arrived on, the switch discards the frame (preventing loops).

**Question 5:**
What is the IEEE standard for Ethernet, and what is the primary MAC protocol associated with it?
**Answer:** The IEEE standard for Ethernet is **IEEE 802.3**. The primary MAC protocol associated with early or shared-medium Ethernet was **CSMA/CD**.

---

This comprehensive set of notes covers the essential aspects of the MAC sublayer as outlined in the provided learning outcomes and textbooks, ensuring a solid understanding for the Computer Network Systems module.
