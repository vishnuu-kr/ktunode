---
title: "DLL switching - Overview"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 2: DLL switching "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c435"
status: "completed"
scrapedAt: "2026-05-20T16:59:58.315Z"
---
# Advanced Computer Networks: Module 2 - DLL Switching: Overview

---

## 1. Introduction to DLL Switching

### 1.1 What is DLL Switching?

*   **Definition:** DLL (Data Link Layer) switching is a fundamental networking concept that involves **forwarding frames based on MAC addresses** at the Data Link Layer (Layer 2) of the OSI model. It's the core mechanism that enables devices within a local network (LAN) to communicate with each other.
*   **Purpose:** To efficiently and intelligently direct data frames from a source to a destination within the same local network segment.
*   **Contrast with IP Routing:** Unlike IP routing (Layer 3), which uses IP addresses to forward packets between different networks, DLL switching operates *within* a single network.

### 1.2 The Role of the Data Link Layer (Layer 2)

*   **Framing:** Encapsulates Network Layer packets into frames for transmission over the physical medium.
*   **Physical Addressing:** Uses MAC (Media Access Control) addresses for unique identification of devices on a LAN.
*   **Error Detection:** Implements mechanisms to detect and sometimes correct errors that occur during transmission.
*   **Flow Control:** Manages the rate of data transmission to prevent overwhelming the receiver.
*   **Media Access Control:** Determines how devices share the physical medium to avoid collisions.

### 1.3 Key Concepts in DLL Switching

*   **MAC Address:**
    *   A unique 48-bit hardware address assigned to each network interface card (NIC) by the manufacturer.
    *   Typically represented in hexadecimal format (e.g., `00:1A:2B:3C:4D:5E`).
    *   Operates at Layer 2.
*   **Frame:**
    *   The basic unit of data at the Data Link Layer.
    *   Contains source and destination MAC addresses, control information, and the payload (Network Layer packet).
*   **Switch:**
    *   A network device that operates at Layer 2.
    *   Learns MAC addresses and forwards frames based on the destination MAC address in the frame header.
    *   Creates virtual circuits between communicating devices, reducing collisions and improving efficiency compared to hubs.
*   **Broadcast Domain:**
    *   A network segment where a broadcast frame is received by all devices.
    *   Switches by default create a single broadcast domain for each VLAN (or the entire network if no VLANs are configured).
*   **Collision Domain:**
    *   A network segment where data collisions can occur if two devices transmit simultaneously.
    *   Switches break up collision domains. Each port on a switch is its own collision domain.

## 2. How DLL Switching Works

### 2.1 Learning MAC Addresses

*   **Process:** Switches learn the MAC addresses of connected devices by examining the **source MAC address** of incoming frames.
*   **MAC Address Table (CAM Table):**
    *   Switches maintain a table (often called a Content Addressable Memory or CAM table) that maps MAC addresses to the switch port they were learned on.
    *   **Example:** If a frame arrives on port 1 with source MAC address `AA:BB:CC:DD:EE:FF`, the switch will add an entry to its MAC address table: `AA:BB:BB:CC:DD:EE:FF -> Port 1`.
*   **Dynamic Learning:** This process is dynamic; MAC addresses are learned and updated automatically as traffic flows.
*   **Aging:** Entries in the MAC address table have an aging timer. If a MAC address is not seen for a certain period, its entry is removed from the table to keep it current.

### 2.2 Forwarding Frames

*   **Decision Process:** When a switch receives a frame:
    1.  It examines the **destination MAC address** in the frame header.
    2.  It looks up this destination MAC address in its MAC address table.
    3.  **If the destination MAC address is found:** The switch forwards the frame *only* out of the port associated with that MAC address. This is known as **unicast forwarding**.
    4.  **If the destination MAC address is NOT found:** The switch floods the frame out of *all* ports except the one it arrived on. This is known as **flooding**. The frame will eventually reach the destination, and the sender's MAC address will be learned by the switches along the path.
    5.  **If the destination MAC address is a broadcast address (FF:FF:FF:FF:FF:FF) or a multicast address:** The switch floods the frame out of all ports except the one it arrived on.

### 2.3 Flooding vs. Unicast Forwarding

*   **Unicast Forwarding (Efficient):**
    *   Directs traffic only to the intended recipient.
    *   Reduces unnecessary traffic on the network.
    *   Requires the destination MAC address to be present in the MAC address table.
*   **Flooding (Less Efficient, Necessary for Unknown Destinations/Broadcasts):**
    *   Sends the frame to all ports (except the incoming one).
    *   Used when the destination MAC is unknown or when the destination is a broadcast/multicast.
    *   Can lead to increased network traffic and potential performance issues if overused.

### 2.4 The Role of Switches in LANs

*   **Segmenting Networks:** Switches create separate collision domains for each port, drastically reducing collisions compared to hubs.
*   **Increasing Bandwidth:** By allowing multiple conversations to occur simultaneously between different pairs of devices, switches effectively increase the available bandwidth within a LAN.
*   **Traffic Management:** Intelligent forwarding minimizes unnecessary traffic, improving network performance.
*   **Scalability:** Easily allows for the addition of more devices and segments to a network.

## 3. Benefits of DLL Switching

*   **Reduced Collisions:** Each port is its own collision domain.
*   **Improved Performance:** Targeted forwarding and reduced collisions lead to higher throughput.
*   **Increased Bandwidth Utilization:** Multiple conversations can happen concurrently.
*   **Scalability:** Easy to add more devices without significant performance degradation (within limits of the switch).
*   **Cost-Effectiveness:** Compared to earlier technologies like hubs and token ring, switches are highly cost-effective for LAN connectivity.

## 4. Limitations of DLL Switching

*   **Single Broadcast Domain:** By default, switches do not segment broadcast traffic. A single broadcast frame will traverse the entire switched LAN.
*   **Limited Scope:** DLL switching is confined to a single broadcast domain or a local network segment. It cannot route traffic between different IP networks.
*   **Security Vulnerabilities:** MAC spoofing can be a concern, where an attacker can impersonate another device's MAC address.
*   **MAC Address Table Size:** Very large networks might have switches with limited MAC address table capacity.
*   **No Inter-Network Routing:** Switches cannot determine the best path between different IP subnets; this is the role of routers.

## 5. Practice Questions and Exercises

**Question 1:** What is the primary addressing scheme used by devices at the Data Link Layer for communication within a LAN?
    a) IP Address
    b) MAC Address
    c) Port Number
    d) DNS Name

**Question 2:** When a switch receives a frame with a destination MAC address that is not in its MAC address table, what action does it typically take?
    a) Drops the frame
    b) Sends the frame to the router
    c) Floods the frame out of all ports except the incoming one
    d) Sends the frame to the destination port associated with the source MAC address

**Question 3:** How does a switch contribute to reducing collisions in a network?
    a) By broadcasting all traffic
    b) By acting as a hub
    c) By creating separate collision domains for each port
    d) By encrypting traffic

**Question 4:** What is the function of the MAC address table (or CAM table) on a switch?
    a) To store IP addresses and their corresponding MAC addresses
    b) To map MAC addresses to the switch ports they were learned on
    c) To store DNS records
    d) To manage network routing paths

**Question 5:** Explain the difference between unicast forwarding and flooding in the context of a switch. Provide a scenario where flooding is necessary.

---

## Answers to Practice Questions

**Answer 1:**
b) MAC Address

**Answer 2:**
c) Floods the frame out of all ports except the incoming one

**Answer 3:**
c) By creating separate collision domains for each port

**Answer 4:**
b) To map MAC addresses to the switch ports they were learned on

**Answer 5:**
*   **Unicast Forwarding:** The switch looks up the destination MAC address in its MAC address table and forwards the frame *only* out of the specific port associated with that MAC address. This is the most efficient way to send unicast traffic.
*   **Flooding:** The switch forwards the frame out of *all* ports except the one it arrived on. This is used when the destination MAC address is unknown (not in the MAC table) or when the frame is a broadcast (destination MAC FF:FF:FF:FF:FF:FF) or multicast.
*   **Scenario where flooding is necessary:** If a new device is connected to a switch and sends its first frame, the switch will not yet have the device's MAC address in its table. The switch will flood this initial frame to all other ports. When the destination device replies, the switch will learn its MAC address and be able to perform unicast forwarding for subsequent communications. Flooding is also necessary for broadcast messages (like ARP requests) that need to reach all devices on the segment.

---

## Important Points to Remember

*   **Layer 2 Operation:** DLL switching operates at Layer 2 of the OSI model, using MAC addresses.
*   **Intelligent Forwarding:** Switches are "intelligent" because they learn MAC addresses and forward frames selectively, unlike hubs.
*   **MAC Address Table:** This table is crucial for switch operation, mapping MAC addresses to ports.
*   **Collision Domain Segmentation:** A key benefit of switches is that each port is a separate collision domain.
*   **Broadcast Domain Limitation:** By default, switches do not segment broadcast traffic.
*   **Role in LANs:** Switches are the backbone of modern Local Area Networks, enabling efficient communication within a network segment.
*   **Not Routers:** Switches cannot route traffic between different IP subnets; that's the job of a router.
