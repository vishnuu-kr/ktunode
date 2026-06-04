---
title: "Switches"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36479"
status: "completed"
scrapedAt: "2026-05-23T16:20:04.607Z"
---
# Computer Network Systems: Module 2 - Data Link Layer - Switches

## 1. Introduction to Switches

### 1.1 What is a Switch?

A **switch** is a fundamental networking device operating at the **Data Link Layer (Layer 2)** of the OSI model. Its primary function is to connect multiple devices within a local area network (LAN) and intelligently forward data frames based on their destination MAC addresses. Unlike older hubs, switches create dedicated, collision-free communication paths between devices, significantly improving network performance and efficiency.

**Key Concepts:**

*   **Data Link Layer (Layer 2):** Responsible for reliable data transfer between adjacent network nodes. It handles framing, physical addressing (MAC addresses), error detection, and flow control.
*   **MAC Address (Media Access Control Address):** A unique hardware identifier assigned to each network interface card (NIC). It's a 48-bit address, typically represented in hexadecimal format (e.g., `00:1A:2B:3C:4D:5E`).
*   **Frame:** The unit of data at the Data Link Layer. It encapsulates the payload from the Network Layer and adds a header and trailer for transmission over the physical medium.
*   **Collision Domain:** A network segment where data packets can collide if multiple devices attempt to transmit simultaneously. Switches minimize collision domains.
*   **Broadcast Domain:** A network segment where a broadcast frame is received by all devices. Switches do not segment broadcast domains by default.

### 1.2 How Switches Work: The Learning Process

Switches learn the MAC addresses of connected devices by observing the **source MAC address** of incoming frames. This process is often referred to as **learning**.

**Key Concepts:**

*   **MAC Address Table (or CAM Table - Content Addressable Memory):** A table maintained by the switch that maps MAC addresses to the switch port on which the corresponding device is connected.
*   **Forwarding:** When a switch receives a frame, it looks up the destination MAC address in its MAC address table.
    *   **If the destination MAC address is found:** The switch forwards the frame only out of the port associated with that MAC address.
    *   **If the destination MAC address is not found (unknown unicast):** The switch floods the frame out of all ports except the one it arrived on. This is a temporary measure until the destination device responds, allowing the switch to learn its location.
    *   **Broadcast Address (FF:FF:FF:FF:FF:FF):** Frames destined for the broadcast address are flooded out of all ports except the incoming port.
    *   **Multicast Address:** Frames destined for a multicast address are forwarded to all ports that have joined that multicast group.

**Example (Tanenbaum, 5th Edition, Chapter 6.3 - Bridges):**
While Tanenbaum discusses bridges, the fundamental learning and forwarding principles are identical to those of modern switches. Imagine a switch with four ports.

1.  Device A (MAC: `AA:AA:AA:AA:AA:AA`) connected to Port 1 sends a frame to Device B (MAC: `BB:BB:BB:BB:BB:BB`) on Port 3.
2.  The switch receives the frame on Port 1. It sees the source MAC address `AA:AA:AA:AA:AA:AA` and records in its MAC address table: `AA:AA:AA:AA:AA:AA` -> Port 1.
3.  The switch looks for `BB:BB:BB:BB:BB:BB` in its table. It's not there.
4.  The switch floods the frame out of Ports 2, 3, and 4.
5.  Device B on Port 3 receives the frame and sends a reply to Device A.
6.  The switch receives the reply frame on Port 3. It sees the source MAC address `BB:BB:BB:BB:BB:BB` and records: `BB:BB:BB:BB:BB:BB` -> Port 3.
7.  The switch looks for `AA:AA:AA:AA:AA:AA` in its table. It finds it and knows to forward the frame out of Port 1.
8.  Now, any future communication between A and B will be efficiently forwarded directly between Port 1 and Port 3.

### 1.3 Types of Switches

Switches can be categorized based on several factors:

*   **Port Density:** Number of ports on the switch.
*   **Speed:** The data transfer rate of the ports (e.g., Fast Ethernet, Gigabit Ethernet, 10 Gigabit Ethernet).
*   **Manageability:**
    *   **Unmanaged Switches:** Plug-and-play devices with no configuration options. Suitable for small, simple networks.
    *   **Managed Switches:** Offer advanced features and configuration options, allowing for greater control over network traffic, security, and performance. These typically support features like VLANs, QoS, SNMP, etc.
*   **Layer of Operation:**
    *   **Layer 2 Switches:** The most common type, operating solely at the Data Link Layer and making forwarding decisions based on MAC addresses.
    *   **Layer 3 Switches (Multilayer Switches):** Combine Layer 2 switching with Layer 3 routing capabilities. They can perform IP-based routing, allowing them to connect different IP subnets and segment networks more effectively.

**Key Concept (Forouzan, 5th Edition, Chapter 7.3 - Switches):**
Forouzan highlights that switches maintain a forwarding table (similar to the MAC address table) that maps MAC addresses to port numbers. This table is dynamically built and updated.

## 2. Switch Operation Modes

Switches can operate in different modes, affecting how they process frames:

### 2.1 Store-and-Forward

**Description:** The switch receives the entire frame,
