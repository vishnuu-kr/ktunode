---
title: "Link layer addressing: MAC address, Ethernet."
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff05c"
status: "completed"
scrapedAt: "2026-05-23T18:00:15.730Z"
---
# Computer Networks: Module 4 - Link Layer Services: Link Layer Addressing (MAC Address, Ethernet)

## Learning Outcomes:

*   Understand the purpose and structure of MAC addresses.
*   Explain the role of MAC addresses in local network communication.
*   Describe the Ethernet standard and its addressing mechanisms.
*   Analyze how MAC addresses are used in data transmission within a local area network (LAN).
*   Differentiate between MAC addresses and IP addresses.
*   Understand the concept of MAC address duplication and its implications.

---

## 1. Introduction to Link Layer Addressing

The Link Layer (Layer 2) is responsible for delivering data between adjacent nodes on a network. While the Network Layer (Layer 3) uses IP addresses for end-to-end delivery across different networks, the Link Layer uses a different addressing scheme to deliver data within a single network segment or "link." This is crucial for local communication between devices connected to the same physical medium.

*   **Purpose:** To uniquely identify network interfaces on a local network segment.
*   **Scope:** Operates within a single network link (e.g., within a LAN).
*   **Relationship with Network Layer:** Link layer addresses are used by protocols like ARP (Address Resolution Protocol) to resolve IP addresses to MAC addresses for local delivery.

---

## 2. MAC Address (Media Access Control Address)

A MAC address is a **unique hardware identifier** assigned to a network interface controller (NIC) by the manufacturer. It is a **globally unique** identifier that is burned into the hardware.

### 2.1 Structure and Format

*   **Length:** 48 bits (6 bytes).
*   **Representation:** Typically represented in hexadecimal format, separated by colons or hyphens.
    *   Example: `00:1A:2B:3C:4D:5E` or `00-1A-2B-3C-4D-5E`.
*   **Components:**
    *   **Organizationally Unique Identifier (OUI):** The first 24 bits (3 bytes) are assigned by the IEEE to hardware manufacturers. This identifies the vendor of the NIC.
    *   **Network Interface Controller Specific Identifier:** The remaining 24 bits (3 bytes) are assigned by the manufacturer to uniquely identify the specific NIC.

### 2.2 Characteristics of MAC Addresses

*   **Uniqueness:** Theoretically, each MAC address is unique worldwide.
*   **Hardware-Bound:** It's embedded in the NIC's firmware.
*   **Layer 2 Addressing:** Used by link-layer protocols (e.g., Ethernet, Wi-Fi) for frame delivery.
*   **Not Routable:** MAC addresses are not used for routing packets across different networks; routers operate at the Network Layer (Layer 3) using IP addresses.

### 2.3 MAC Address Types

*   **Unicast:** Sent to a single specific network interface.
*   **Multicast:** Sent to a group of network interfaces. The least significant bit of the most significant byte is set to '1' (e.g., `01:00:5E:XX:XX:XX`).
*   **Broadcast:** Sent to all network interfaces on the local network. The MAC address `FF:FF:FF:FF:FF:FF` is used for broadcast.

### 2.4 How MAC Addresses are Used in Data Transmission

When a device wants to send data to another device on the **same local network**, it needs the destination device's MAC address.

1.  **ARP (Address Resolution Protocol):** If a device knows the destination IP address but not its MAC address, it uses ARP.
    *   The sending device broadcasts an ARP request: "Who has IP address X.X.X.X? Tell [my IP address] [my MAC address]."
    *   The device with IP address X.X.X.X responds with an ARP reply: "[IP address X.X.X.X] is at MAC address Y:Y:Y:Y:Y:Y."
2.  **Framing:** Once the MAC address is obtained, the sending device constructs a link-layer frame. This frame encapsulates the IP packet and includes the source and destination MAC addresses in the frame header.
3.  **Switching:** On a switched Ethernet network, switches learn the MAC addresses of devices connected to their ports. When a frame arrives, the switch examines the destination MAC address and forwards the frame only to the port where that MAC address is known to reside.

---

## 3. Ethernet

Ethernet is the most widely used wired local area network (LAN) technology. It defines how data is transmitted over a shared physical medium, including its addressing scheme.

### 3.1 Ethernet Frame Format

The Ethernet frame format includes fields for source and destination MAC addresses, which are essential for local delivery.

**Common Ethernet Frame Formats (e.g., Ethernet II):**

| Field                 | Length (bytes) | Description                                                                                                                             |
| :-------------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Preamble**          | 7              | Synchronization pattern (alternating 1s and 0s) to prepare the receiver.                                                                |
| **Start of Frame Delimiter (SFD)** | 1              | Marks the end of the preamble and the beginning of the actual frame.                                                                    |
| **Destination MAC Address** | 6              | The MAC address of the intended recipient interface on the local network.                                                               |
| **Source MAC Address**  | 6              | The MAC address of the sending interface.                                                                                               |
| **EtherType/Length**  | 2              | Identifies the Network Layer protocol carried in the payload (e.g., IP, ARP). In some older versions, it indicates the frame length. |
| **Payload (Data)**    | 46-1500        | The data being transmitted, usually an IP packet. Minimum size is 46 bytes for collision detection mechanisms.                          |
| **Frame Check Sequence (FCS)** | 4              | Cyclic Redundancy Check (CRC) for error detection.                                                                                      |

**Example of an Ethernet Frame Header:**

```
+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+
| Preamble (7 Bytes)| SFD (1 Byte)      | Dest MAC (6 Bytes)| Src MAC (6 Bytes) | EtherType (2 Bytes)| Payload (46-1500 Bytes)| FCS (4 Bytes)     |
+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+-------------------+
```

### 3.2 Ethernet Addressing in Action

Imagine PC A (MAC: `AA:AA:AA:AA:AA:AA`) wants to send an IP packet to PC B (IP: `192.168.1.10`, MAC: `BB:BB:BB:BB:BB:BB`) on the same LAN.

1.  **ARP:** PC A's ARP cache might not have PC B's MAC address. PC A broadcasts an ARP request: "Who has `192.168.1.10`? Tell me."
2.  **ARP Reply:** PC B, recognizing its IP address, sends an ARP reply directly to PC A: "`192.168.1.10` is at `BB:BB:BB:BB:BB:BB`."
3.  **Frame Construction:** PC A now constructs an Ethernet frame:
    *   Destination MAC: `BB:BB:BB:BB:BB:BB`
    *   Source MAC: `AA:AA:AA:AA:AA:AA`
    *   EtherType: Indicates the payload is an IP packet.
    *   Payload: The IP packet destined for `192.168.1.10`.
4.  **Transmission:** The Ethernet frame is transmitted onto the network.
5.  **Switching:** If a switch is used, it examines the destination MAC address (`BB:BB:BB:BB:BB:BB`) and forwards the frame to the port where PC B is connected.

---

## 4. MAC Addresses vs. IP Addresses

It's crucial to understand the distinction between MAC addresses and IP addresses:

| Feature             | MAC Address                                    | IP Address                                     |
| :------------------ | :--------------------------------------------- | :--------------------------------------------- |
| **Layer**           | Link Layer (Layer 2)                           | Network Layer (Layer 3)                        |
| **Purpose**         | Local network delivery (within a LAN)          | End-to-end delivery (across networks)          |
| **Uniqueness**      | Globally unique (hardware-assigned)            | Locally unique (can be reused in different networks) |
| **Assignment**      | Burned into hardware by manufacturer           | Assigned dynamically (DHCP) or statically      |
| **Changeability**   | Generally fixed (can be spoofed)               | Can change (e.g., when moving networks)        |
| **Format**          | 48-bit hexadecimal (e.g., `00:1A:2B:3C:4D:5E`) | 32-bit (IPv4) or 128-bit (IPv6) decimal dotted |
| **Routability**     | Not routable across networks                   | Routable across networks                       |

**Analogy:**

*   **MAC Address:** Like a Social Security Number (SSN) or a serial number on your device. It's a unique identifier assigned at creation.
*   **IP Address:** Like your home mailing address. It's assigned to you based on your current location and can change if you move.

---

## 5. MAC Address Duplication and Spoofing

### 5.1 MAC Address Duplication

While MAC addresses are intended to be globally unique, it's theoretically possible for MAC addresses to be duplicated:

*   **Manufacturing Errors:** Extremely rare, but possible.
*   **MAC Address Spoofing:** A malicious user or administrator can deliberately change the MAC address of a network interface. This is often done for:
    *   **Bypassing MAC Filtering:** Security systems that restrict access based on MAC addresses.
    *   **Network Troubleshooting:** Temporarily adopting another device's MAC.
    *   **Malicious Activities:** Man-in-the-middle attacks or impersonation.

**Impact:** If two devices on the same network segment have the same MAC address, it can lead to **unpredictable network behavior**, including:

*   **Packet Loss:** Frames might be delivered to the wrong device.
*   **Connectivity Issues:** Devices may be unable to communicate reliably.
*   **Switching Problems:** Switches may learn the MAC address from the wrong port, leading to incorrect forwarding.

---

## 6. Important Points to Remember

*   **MAC addresses are hardware addresses** used for **local delivery** within a network segment.
*   **Ethernet uses MAC addresses** in its frame header for source and destination identification.
*   **ARP** is the protocol that maps **IP addresses to MAC addresses** for local transmission.
*   MAC addresses are **48 bits long** and are typically represented in **hexadecimal**.
*   The **first 24 bits (OUI)** identify the manufacturer, and the **last 24 bits** are unique to the NIC.
*   **Broadcast MAC address is `FF:FF:FF:FF:FF:FF`**.
*   **IP addresses are for end-to-end, inter-network routing**, while MAC addresses are for **intra-network, hop-to-hop delivery**.
*   **MAC address spoofing** can occur and lead to network disruptions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. Textbooks and Reference Material Integration

*   **Kurose & Ross (Sixth Edition):** Discusses MAC addresses and Ethernet in Chapter 5 (Link Layer and Local Area Networks), focusing on the structure of Ethernet frames, the role of MAC addresses in switching, and the ARP protocol. They emphasize the distinction between link-layer addressing and network-layer addressing.
*   **Forouzan (Fourth Edition):** Covers MAC addressing and Ethernet in Chapters 4 (Link Layer) and 10 (Local Area Networks), detailing the Ethernet frame format, MAC address structure, types of MAC addresses (unicast, multicast, broadcast), and the functions of devices like bridges and switches in using MAC addresses for forwarding.
*   **Tanenbaum & Wetherall:** Likely provides a foundational understanding of link-layer addressing, MAC addresses, and Ethernet standards, potentially with a more theoretical or systems-level perspective on their operation within the broader context of network architecture.

---

## 8. Alignment with Course Outcomes

*   **CO1 (Summarize principles and components):** This topic directly addresses the principles of link-layer addressing, the components of MAC addresses, and the structure of Ethernet frames, contributing to understanding the layered network architecture.
*   **CO2 (Demonstrate protocols and functions):** Explains the function of MAC addresses in frame delivery and the role of ARP in resolving IP to MAC addresses, demonstrating key link-layer protocols.
*   **CO3 (Analyze routing and addressing protocols):** Differentiates MAC addressing from IP addressing, a core concept in understanding how different layers handle addressing and routing, allowing for analysis of their respective roles.
*   **CO4 (Make use of physical communication standards):** Ethernet is a fundamental physical communication standard. Understanding its addressing mechanism is key to its practical application in computer networks.

---

## 9. Practice Questions and Answers

**Question 1:** What is the primary purpose of a MAC address?
    *   A) To identify a device on the internet.
    *   B) To identify a network interface card on a local network segment.
    *   C) To route packets between different networks.
    *   D) To encrypt data during transmission.

**Answer 1:** B) To identify a network interface card on a local network segment.

**Question 2:** How many bits are in a MAC address?
    *   A) 32 bits
    *   B) 64 bits
    *   C) 48 bits
    *   D) 128 bits

**Answer 2:** C) 48 bits

**Question 3:** Which part of a MAC address is assigned by the IEEE to identify the manufacturer?
    *   A) The last 24 bits
    *   B) The first 16 bits
    *   C) The last 16 bits
    *   D) The first 24 bits (OUI)

**Answer 3:** D) The first 24 bits (OUI)

**Question 4:** What is the MAC address used for broadcast transmissions on Ethernet?
    *   A) `00:00:00:00:00:00`
    *   B) `FF:FF:FF:FF:FF:FF`
    *   C) `01:00:5E:00:00:01`
    *   D) `00:0C:29:XX:XX:XX`

**Answer 4:** B) `FF:FF:FF:FF:FF:FF`

**Question 5:** Explain the process by which a computer on a LAN obtains the MAC address of another computer on the same LAN, given only its IP address. (Relates to CO2, CO3)

**Answer 5:** The computer uses the Address Resolution Protocol (ARP). It broadcasts an ARP request packet on the local network, asking, "Who has the IP address X.X.X.X? Tell me." The device with that IP address responds with an ARP reply packet containing its MAC address. The requesting computer then stores this IP-to-MAC mapping in its ARP cache for future use.

**Question 6:** Differentiate between a MAC address and an IP address, highlighting their respective roles in network communication. (Relates to CO3)

**Answer 6:**
*   **MAC Address:** A **physical, hardware-assigned address** (48 bits) used for **local delivery** within a single network segment (e.g., a LAN). It is not routable.
*   **IP Address:** A **logical, software-assigned address** (32 bits for IPv4) used for **end-to-end delivery** across multiple networks (the internet). It is routable.

**Question 7:** A switch forwards Ethernet frames based on which type of address?
    *   A) IP Address
    *   B) MAC Address
    *   C) Port Number
    *   D) MAC Address and Port Number

**Answer 7:** B) MAC Address (Switches learn MAC addresses and associate them with specific ports to make forwarding decisions.)

**Question 8:** What is a potential consequence of MAC address spoofing on a network? (Relates to CO2)

**Answer 8:** MAC address spoofing can lead to unauthorized access (if bypassing MAC filtering), denial-of-service attacks, man-in-the-middle attacks, or general network instability and packet loss due to incorrect forwarding decisions by switches.