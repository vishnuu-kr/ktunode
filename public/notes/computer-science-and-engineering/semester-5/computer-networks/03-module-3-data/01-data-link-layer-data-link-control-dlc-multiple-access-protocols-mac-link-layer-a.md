---
title: "Data-Link Layer: Data link control (DLC), Multiple access protocols (MAC), Link-layer addressing, Ethernet protocol, Connecting devices (Book 1 Ch 5)"
subject: "COMPUTER NETWORKS"
module: "Module 3: Data"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b528"
status: "completed"
scrapedAt: "2026-05-20T16:43:33.223Z"
---
# COMPUTER NETWORKS - Module 3: Data - Data-Link Layer

## Topic: Data Link Layer: Data link control (DLC), Multiple access protocols (MAC), Link-layer addressing, Ethernet protocol, Connecting devices (Book 1 Ch 5)

**Learning Outcomes:**

*   Understand the purpose and functions of the Data Link Layer.
*   Explain different Data Link Control (DLC) protocols.
*   Describe various Multiple Access Control (MAC) protocols.
*   Understand Link-layer addressing (MAC addresses) and their significance.
*   Explain the Ethernet protocol and its different standards.
*   Describe different connecting devices used at the Data Link Layer (Bridges, Switches).

---

## 1. Introduction to the Data Link Layer

*   **Purpose:** The Data Link Layer is the second layer in the OSI model. It's responsible for reliable node-to-node data transfer between two directly connected nodes across a physical link.

*   **Key Functions:**

    *   **Framing:** Divides data received from the Network Layer into frames.  Adds header (containing source and destination MAC addresses, control information) and trailer (containing error detection bits) to the data.
    *   **Error Control:** Detects and potentially corrects errors that occur during transmission.  Uses techniques like checksums and Cyclic Redundancy Checks (CRC).
    *   **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.  Uses techniques like Stop-and-Wait, Go-Back-N, and Selective Repeat.
    *   **Access Control:**  Determines which device has access to the shared communication medium at any given time (especially relevant in shared media networks like older Ethernet implementations).  Handled by MAC protocols.
    *   **Addressing (MAC addressing):**  Uses MAC addresses to identify devices on the local network segment.

*   **Sublayers:**  The Data Link Layer is further divided into two sublayers:

    *   **Logical Link Control (LLC):** Provides an interface to the Network Layer.  Deals with multiplexing protocols, flow control, and error control.
    *   **Media Access Control (MAC):**  Controls access to the physical medium.  Deals with addressing, framing, and access methods.

---

## 2. Data Link Control (DLC) Protocols

DLC protocols provide mechanisms for reliable and efficient data transfer across a single link.

*   **Framing Methods:**

    *   **Character Count:**  The first byte in the frame indicates the total number of characters in the frame. *Problem: Fragile – a single bit error corrupting the count field can lead to significant errors.*
    *   **Flag Bytes with Byte Stuffing:**  Special flag bytes mark the beginning and end of the frame. If the flag byte appears in the data, it's "stuffed" with an escape character (ESC) to distinguish it from the actual frame delimiter.  *Problem: Byte stuffing can add overhead.*
    *   **Starting and Ending Flags with Bit Stuffing:** Uses a specific bit pattern (e.g., 01111110) as a flag.  When the sender encounters five consecutive 1s in the data, it automatically inserts a 0 bit ("bit stuffing"). The receiver removes this inserted 0 bit. *Advantage: More robust than character-based methods, suitable for variable-length frames.*
    *   **Physical Layer Coding Violations:**  Some physical layer coding schemes use invalid or reserved codes to indicate frame boundaries.  Less common.

*   **Error Detection:**

    *   **Parity Check:** Adds a single bit (parity bit) to make the number of 1s in the frame either even (even parity) or odd (odd parity).  *Simple but can only detect an odd number of bit errors.*
    *   **Checksum:**  Adds up all the bytes in the frame and appends the complement of the sum to the frame.  *More robust than parity check.*
    *   **Cyclic Redundancy Check (CRC):** Treats the frame as a large binary number and divides it by a predetermined divisor polynomial. The remainder is appended to the frame as the CRC. The receiver performs the same division and compares the remainder to zero.  *Most widely used and most effective.*

*   **Error Correction:**  Error correction techniques not only detect errors but also attempt to correct them.

    *   **Hamming Code:**  Calculates parity bits and inserts them into the data stream.  Can detect and correct single-bit errors, and detect some double-bit errors.

*   **Flow Control:**

    *   **Stop-and-Wait:** The sender sends one frame and waits for an acknowledgment (ACK) from the receiver before sending the next.  *Simple but inefficient, especially over long distances.*
    *   **Sliding Window:** Allows the sender to send multiple frames without waiting for individual ACKs. The sender maintains a "window" of frames that have been sent but not yet acknowledged.

        *   **Go-Back-N:**  If a frame is lost or corrupted, the receiver discards all subsequent frames.  The sender retransmits all frames starting from the lost frame.  *Simpler than Selective Repeat.*
        *   **Selective Repeat:**  The receiver only retransmits the specific frames that were lost or corrupted. Requires more buffering at the receiver. *More efficient than Go-Back-N.*

**Example:**

Imagine a scenario where you're sending a file across a network link.  The DLC protocol might use CRC for error detection. It calculates the CRC value for each frame and appends it. The receiver, upon receiving the frame, recalculates the CRC and compares it with the received CRC. If they don't match, it knows there's an error and requests retransmission. For flow control, a sliding window protocol (e.g., Go-Back-N) might be used to improve efficiency by sending multiple frames before waiting for acknowledgements.

---

## 3. Multiple Access Protocols (MAC)

Multiple Access Protocols are used when multiple devices share a single communication channel (like in older Ethernet networks using coaxial cables). These protocols determine which device gets to transmit at any given time, avoiding collisions.

*   **Categories:**

    *   **Random Access Protocols:**  Nodes contend for access to the medium. Collisions can occur. Protocols include mechanisms to detect and resolve collisions.

        *   **ALOHA:** A node transmits whenever it has data to send. If a collision occurs, the sender waits a random amount of time and retransmits.  *Very simple but inefficient.*
        *   **Slotted ALOHA:**  Time is divided into slots, and a node can only transmit at the beginning of a slot. This reduces the probability of collisions compared to pure ALOHA. *Improves efficiency compared to pure ALOHA.*
        *   **Carrier Sense Multiple Access (CSMA):** A node listens to the channel before transmitting.  It only transmits if the channel is idle ("carrier sense").

            *   **1-Persistent CSMA:**  If the channel is idle, the node transmits immediately. If the channel is busy, the node continuously senses the channel and transmits immediately when it becomes idle. *High collision rate.*
            *   **Non-Persistent CSMA:** If the channel is idle, the node transmits immediately. If the channel is busy, the node waits a random amount of time before sensing the channel again. *Reduces collision rate compared to 1-persistent CSMA.*
            *   **p-Persistent CSMA:** If the channel is idle, the node transmits with probability *p*.  With probability 1-*p*, the node defers to the next time slot. *Balances channel utilization and collision rate.*
        *   **CSMA with Collision Detection (CSMA/CD):**  A node listens to the channel while transmitting. If it detects a collision, it immediately stops transmitting and sends a "jam signal" to inform other nodes of the collision.  Ethernet uses CSMA/CD. *More efficient than CSMA because it reduces the time wasted on transmitting a corrupted frame.*
        *   **CSMA with Collision Avoidance (CSMA/CA):**  A node tries to avoid collisions before they occur by using techniques like Request to Send (RTS) and Clear to Send (CTS) frames.  Used in wireless networks (e.g., 802.11 Wi-Fi).

    *   **Controlled Access Protocols:**  Nodes take turns accessing the medium.  Avoids collisions.

        *   **Reservation:**  Nodes reserve time slots for transmission.
        *   **Polling:**  A central controller polls each node in turn to see if it has data to send.
        *   **Token Passing:**  A special frame called a "token" is passed around the network. Only the node holding the token is allowed to transmit.

    *   **Channelization Protocols:**  Divides the available bandwidth into channels that can be used by different nodes simultaneously.

        *   **Frequency Division Multiple Access (FDMA):** Divides the bandwidth into frequency bands, each allocated to a specific user.
        *   **Time Division Multiple Access (TDMA):** Divides the time into slots, each allocated to a specific user.
        *   **Code Division Multiple Access (CDMA):**  Assigns a unique code to each user. Users can transmit simultaneously, and the receiver can separate the signals based on their codes.

**Example:**

In a Wi-Fi network (using CSMA/CA), a node wanting to transmit first sends an RTS (Request to Send) frame. The access point (router) responds with a CTS (Clear to Send) frame if the channel is available. This reserves the channel for the node and helps avoid collisions.

---

## 4. Link-Layer Addressing (MAC Addresses)

*   **Definition:** A Media Access Control (MAC) address is a unique hardware address that identifies a specific device on a network.  It's burned into the network interface card (NIC) by the manufacturer.

*   **Format:**  Typically represented as a 48-bit (6-byte) hexadecimal number (e.g., 00:1A:2B:3C:4D:5E).

*   **Structure:**

    *   **Organizationally Unique Identifier (OUI):** The first three bytes (24 bits) identify the manufacturer of the NIC.  Assigned by the IEEE.
    *   **NIC-Specific:**  The last three bytes (24 bits) are assigned by the manufacturer to uniquely identify the specific NIC.

*   **Purpose:**  MAC addresses are used for local network communication.  Frames are sent to a specific MAC address within the same network segment.

*   **Address Resolution Protocol (ARP):** ARP is used to resolve IP addresses to MAC addresses.  When a device wants to send data to another device on the same network, it needs to know the destination MAC address. It sends an ARP request, broadcasting it on the network, asking "Who has IP address X.X.X.X?". The device with that IP address responds with its MAC address.

*   **Types of MAC Addresses:**

    *   **Unicast:**  A frame is sent to a specific MAC address.
    *   **Broadcast:** A frame is sent to all devices on the network.  The destination MAC address is FF:FF:FF:FF:FF:FF.
    *   **Multicast:** A frame is sent to a group of devices that have joined a specific multicast group.

**Example:**

When your computer wants to communicate with another computer on your local network, it first checks its ARP cache to see if it already knows the MAC address of the destination computer. If it doesn't, it sends an ARP request. Once it has the MAC address, it can encapsulate the IP packet in an Ethernet frame with the destination MAC address and send it.

---

## 5. Ethernet Protocol

*   **Definition:** Ethernet is a widely used Data Link Layer protocol for local area networks (LANs).

*   **Frame Format:**  The Ethernet frame format defines the structure of the data transmitted over an Ethernet network.

    *   **Preamble (7 bytes):**  Alternating 1s and 0s used for synchronization.
    *   **Start of Frame Delimiter (SFD) (1 byte):**  Indicates the start of the frame (10101011).
    *   **Destination MAC Address (6 bytes):**  The MAC address of the intended recipient.
    *   **Source MAC Address (6 bytes):**  The MAC address of the sender.
    *   **Type/Length (2 bytes):**  Indicates either the type of protocol encapsulated in the data field (e.g., IPv4, IPv6) or the length of the data field.
    *   **Data (46-1500 bytes):**  The actual data being transmitted (e.g., IP packet).  Minimum size ensures proper collision detection.
    *   **Frame Check Sequence (FCS) (4 bytes):**  CRC checksum used for error detection.

*   **Ethernet Standards:**  Different Ethernet standards define different physical layer characteristics (e.g., cabling, data rates).

    *   **10BASE-T:**  10 Mbps, Baseband signaling, Twisted pair cable.
    *   **100BASE-TX:** 100 Mbps, Baseband signaling, Twisted pair cable.  Also known as Fast Ethernet.
    *   **1000BASE-T:** 1000 Mbps (1 Gbps), Baseband signaling, Twisted pair cable.  Also known as Gigabit Ethernet.
    *   **10GBASE-T:** 10 Gbps, Baseband signaling, Twisted pair cable.
    *   **10GBASE-SR:** 10 Gbps, Short Range, Fiber optic cable.
    *   **40GBASE-LR4:** 40 Gbps, Long Range, Fiber optic cable.
    *   *And many more...*

*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):**  Originally used in Ethernet (especially shared media Ethernet).  Modern Ethernet networks using switches use full-duplex communication and no longer require CSMA/CD.

*   **Switching:**  Modern Ethernet networks use switches instead of hubs. Switches learn the MAC addresses of devices connected to their ports and forward frames only to the intended destination port, improving efficiency and security.

**Example:**

A 100BASE-TX Ethernet network uses Category 5 or Category 5e twisted pair cable. When a device sends a frame, the destination MAC address in the Ethernet header is used by the switch to forward the frame only to the port connected to the device with that MAC address.

---

## 6. Connecting Devices

*   **Hubs:**  Operate at the Physical Layer (Layer 1). They simply repeat any signal received on one port to all other ports.  *Not used in modern networks due to inefficiency and security concerns.*

*   **Bridges:**  Operate at the Data Link Layer (Layer 2). They learn the MAC addresses of devices connected to each port and forward frames only to the port where the destination MAC address is located.  Bridges divide a network into collision domains.  *Largely replaced by switches.*

*   **Switches:**  Operate at the Data Link Layer (Layer 2).  They are essentially multi-port bridges.  Switches learn MAC addresses and forward frames intelligently.  Each port on a switch is a separate collision domain.  Switches improve network performance and security.

    *   **Cut-Through Switching:** The switch forwards the frame as soon as it reads the destination MAC address, without waiting for the entire frame to arrive.  *Faster but more prone to forwarding corrupted frames.*
    *   **Store-and-Forward Switching:** The switch receives the entire frame before forwarding it.  This allows the switch to perform error checking and discard corrupted frames.  *More reliable but slower.*

*   **Routers:** Operate at the Network Layer (Layer 3). They connect different networks together and forward packets based on IP addresses.

**Example:**

Imagine a small office network. A switch connects all the computers and printers within the office. Each computer has a unique MAC address. When one computer sends data to another, the switch examines the destination MAC address in the Ethernet frame and forwards the frame only to the port connected to that computer. If the computer wants to access the internet, the switch forwards the traffic to the router, which then forwards the traffic to the internet.

---

## Important Points to Remember:

*   The Data Link Layer provides reliable node-to-node communication.
*   MAC addresses are unique hardware addresses used for local network communication.
*   Ethernet is a widely used Data Link Layer protocol.
*   Switches improve network performance by forwarding frames only to the intended destination.
*   Error detection and flow control mechanisms are crucial for reliable data transfer.

---

## Practice Questions/Exercises:

1.  **Question:** What is the primary function of the Data Link Layer?
    *   **Answer:** Reliable node-to-node data transfer across a physical link.

2.  **Question:** Explain the difference between CSMA/CD and CSMA/CA.
    *   **Answer:** CSMA/CD detects collisions *after* they occur and stops transmission. CSMA/CA tries to *avoid* collisions before they occur using RTS/CTS mechanisms.

3.  **Question:** What is a MAC address and what is its purpose?
    *   **Answer:** A unique hardware address that identifies a device on a network. It's used for local network communication.

4.  **Question:** What is the role of ARP?
    *   **Answer:** ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses.

5.  **Question:** What are the key differences between a hub, a bridge, and a switch?
    *   **Answer:**
        *   **Hub:**  Physical Layer (Layer 1), repeats signals to all ports, creates a single collision domain.
        *   **Bridge:** Data Link Layer (Layer 2), learns MAC addresses and forwards frames selectively, divides the network into collision domains.
        *   **Switch:** Data Link Layer (Layer 2), multi-port bridge, each port is a separate collision domain, improves performance.

6.  **Question:** Explain how CRC works for error detection.
    *   **Answer:** The sender treats the data as a large binary number and divides it by a predetermined divisor polynomial. The remainder (CRC) is appended to the data. The receiver performs the same division and compares the remainder to zero. If the remainder is not zero, an error has occurred.

7.  **Question:** Describe the Ethernet frame format and the purpose of each field.
    *   **Answer:** (See the Ethernet Frame Format section above for details.)

8.  **Question:** What is the purpose of flow control in the Data Link Layer? Give examples of flow control mechanisms.
    *   **Answer:** To prevent a fast sender from overwhelming a slow receiver. Examples include Stop-and-Wait, Go-Back-N, and Selective Repeat.

9.  **Question:** What is the difference between unicast, broadcast, and multicast MAC addresses?
    *   **Answer:**
        *   **Unicast:** Sent to a specific MAC address.
        *   **Broadcast:** Sent to all devices on the network (MAC address FF:FF:FF:FF:FF:FF).
        *   **Multicast:** Sent to a group of devices that have joined a specific multicast group.

10. **Question:** If a host with IP address 192.168.1.10 and MAC address 00:AA:BB:CC:DD:EE wants to send a packet to 192.168.1.20 on the same network, what MAC address will be the destination MAC address in the Ethernet frame?  Assume the host knows the MAC address of 192.168.1.20 is 00:11:22:33:44:55.
     * **Answer:** The destination MAC address in the Ethernet frame will be 00:11:22:33:44:55.
