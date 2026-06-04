---
title: "Network hardware"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 1: Introduction – Uses of computer networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36461"
status: "completed"
scrapedAt: "2026-05-23T16:19:47.226Z"
---
# COMPUTER NETWORK SYSTEMS - Module 1: Introduction – Uses of Computer Networks

## Topic: Network Hardware

This topic introduces the fundamental hardware components that make up a computer network. Understanding these components is crucial for building, managing, and troubleshooting networks.

### Learning Outcomes Covered:

*   **LO1:** Identify and describe common network hardware devices.
*   **LO2:** Explain the function of each device within a network.
*   **LO3:** Understand how different hardware components connect to form a network.
*   **LO4:** Differentiate between various network interface types and media.

### Course Outcomes Alignment:

*   **CO1:** This topic directly contributes to explaining the physical media and devices used for setting up a network.
*   **CO2:** Understanding network hardware is foundational for comprehending the role of networking devices in Ethernets and wireless LANs.

---

### 1. Network Interface Cards (NICs)

**Definition:** A Network Interface Card (NIC), also known as a network adapter or LAN adapter, is a piece of computer hardware that allows a computer to connect to a computer network. It acts as an interface between the computer's internal bus and the network medium.

**Key Concepts:**

*   **MAC Address (Media Access Control Address):** A unique hardware identifier assigned to each NIC by the manufacturer. It's a 48-bit address, typically represented in hexadecimal format (e.g., `00:1A:2B:3C:4D:5E`). The MAC address operates at the Data Link Layer (Layer 2 of the OSI model).
*   **Data Transmission:** The NIC is responsible for converting digital data from the computer's memory into a format suitable for transmission over the network medium and vice-versa.
*   **Types:**
    *   **Wired NICs:** Connect to the network via Ethernet cables (e.g., RJ-45 connector).
    *   **Wireless NICs (WNICs):** Connect to the network wirelessly using radio waves (e.g., Wi-Fi).

**Examples:**

*   An Ethernet card installed in a desktop computer.
*   The Wi-Fi chip built into a laptop or smartphone.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Discusses NICs as the boundary between the host and the network, highlighting their role in framing and physical addressing (MAC addresses).
*   **Forouzan (5th ed.):** Explains the NIC's function as a device that handles the physical and data link layer protocols, including the generation of frames and the use of MAC addresses for local delivery.

**Important Point:** Every device that needs to connect to a network requires a NIC.

---

### 2. Network Cables (Transmission Media)

**Definition:** Network cables are the physical pathways used to transmit data signals between devices in a wired network.

**Key Concepts:**

*   **Types of Cables:**
    *   **Twisted-Pair Cables:** Consist of pairs of insulated copper wires twisted together to reduce electromagnetic interference (EMI).
        *   **Unshielded Twisted Pair (UTP):** Most common type, used in Ethernet. Lacks shielding, making it more susceptible to EMI but less expensive.
        *   **Shielded Twisted Pair (STP):** Has metallic shielding around the pairs or the entire cable, offering better protection against EMI.
        *   **Categories (Cat5e, Cat6, Cat6a, etc.):** Standards defining the performance characteristics (speed and bandwidth) of UTP cables. Higher categories support higher data rates and longer distances.
    *   **Coaxial Cables:** Consist of a central copper conductor surrounded by an insulating layer, a braided metal shield, and an outer jacket. Less common in modern LANs but used in cable TV and older Ethernet (e.g., 10Base2, 10Base5).
    *   **Fiber Optic Cables:** Transmit data using pulses of light through thin strands of glass or plastic. Offer high bandwidth, long transmission distances, and immunity to EMI.
        *   **Single-Mode Fiber (SMF):** For very long distances, uses a narrow core that allows light to travel in a single path.
        *   **Multi-Mode Fiber (MMF):** For shorter distances, uses a wider core that allows light to travel in multiple paths.

**Examples:**

*   An Ethernet cable (Cat5e or Cat6) connecting a computer to a router.
*   Fiber optic cables used in backbone connections between buildings or cities.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Provides a detailed overview of various transmission media, including twisted-pair, coaxial, and fiber optic cables, discussing their characteristics, advantages, and disadvantages.
*   **Forouzan (5th ed.):** Categorizes transmission media and explains the physical principles behind signal propagation in each type.
*   **Peterson & Davie (5th ed.):** Discusses the physical layer and the role of transmission media in carrying bits, comparing performance metrics like bandwidth and attenuation.

**Important Point:** The choice of network cable significantly impacts network performance, speed, and reliability.

---

### 3. Network Connectors

**Definition:** Connectors are used to terminate network cables and plug them into network devices.

**Key Concepts:**

*   **RJ-45:** The most common connector for Ethernet twisted-pair cables. It's an 8-pin modular connector.
*   **BNC (Bayonet Neill–Concelman):** Used with coaxial cables, often for older Ethernet networks (e.g., 10Base2).
*   **Fiber Optic Connectors:** Various types exist, such as SC, LC, ST, and MTRJ, each with specific connection mechanisms.

**Examples:**

*   Plugging an Ethernet cable into the back of a computer or router.
*   Connecting fiber optic cables in a data center.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Mentions connectors in the context of physical layer interfaces.
*   **Forouzan (5th ed.):** Illustrates common connectors like RJ-45.

**Important Point:** Proper connector termination is vital for a reliable network connection.

---

### 4. Hubs (Legacy Device)

**Definition:** A hub is a simple networking device that connects multiple devices in a network. When a data packet arrives at a hub, it is broadcast to all other connected devices, regardless of the intended recipient.

**Key Concepts:**

*   **Broadcast Domain:** A hub creates a single collision domain and a single broadcast domain.
*   **Collision Domain:** If two devices transmit simultaneously, a collision occurs, and the data is corrupted. All devices connected to a hub share the same collision domain, making collisions frequent, especially under heavy traffic.
*   **Half-Duplex:** Devices connected to a hub typically operate in half-duplex mode, meaning they can either send or receive data at any given time, but not both simultaneously.
*   **Inefficiency:** Hubs are inefficient because they replicate traffic, consuming unnecessary bandwidth and increasing the likelihood of collisions.

**Examples:**

*   An old 10 Mbps Ethernet hub used in early home networks.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Describes hubs as repeaters that rebroadcast incoming signals to all ports.
*   **Forouzan (5th ed.):** Explains hubs as multi-port repeaters that operate at the Physical Layer (Layer 1) and their limitations in managing collisions.

**Important Point:** Hubs are considered legacy devices and are rarely used in modern networks due to their inefficiency. They have largely been replaced by switches.

---

### 5. Switches

**Definition:** A switch is a more intelligent networking device that connects devices in a network. Unlike hubs, switches learn the MAC addresses of connected devices and forward data packets only to the intended recipient.

**Key Concepts:**

*   **MAC Address Table (CAM Table):** Switches maintain a table that maps MAC addresses to the ports they are connected to.
*   **Forwarding:** When a packet arrives, the switch examines the destination MAC address, looks it up in its MAC address table, and forwards the packet only to the port where the destination device is located.
*   **Collision Domains:** Each port on a switch represents a separate collision domain, significantly reducing the occurrence of collisions.
*   **Broadcast Domain:** By default, switches still forward broadcast frames to all ports (except the source port). The broadcast domain remains the same as a hub.
*   **Full-Duplex:** Devices connected to a switch can operate in full-duplex mode, allowing simultaneous sending and receiving of data, further improving performance.
*   **Types:**
    *   **Unmanaged Switches:** Plug-and-play devices with no configuration options.
    *   **Managed Switches:** Offer advanced features like VLANs, Quality of Service (QoS), port mirroring, and SNMP management.

**Examples:**

*   A 24-port Ethernet switch connecting computers, printers, and servers in an office.
*   A managed switch used to segment a network into different VLANs.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Introduces switches as devices that operate at Layer 2 and make forwarding decisions based on MAC addresses, improving efficiency over hubs.
*   **Forouzan (5th ed.):** Explains the concept of a learning bridge (switch) and how it builds its forwarding table, leading to a more efficient network by segmenting collision domains.
*   **Kurose & Ross (6th ed.):** Discusses switches in the context of the data link layer, explaining their role in forwarding frames and their benefits over hubs.

**Important Point:** Switches are the backbone of most modern LANs, providing efficient and reliable connectivity.

---

### 6. Routers

**Definition:** A router is a networking device that connects different networks together. It forwards data packets between these networks based on their IP addresses.

**Key Concepts:**

*   **Inter-network Communication:** Routers are essential for connecting dissimilar networks (e.g., a home network to the Internet).
*   **IP Addresses:** Routers use IP addresses (Layer 3 addresses) to determine the best path for a packet to reach its destination network.
*   **Routing Table:** Routers maintain routing tables that store information about different network paths and their associated metrics (e.g., hop count, delay).
*   **Routing Protocols:** Routers use routing protocols (e.g., RIP, OSPF, BGP) to exchange routing information with other routers and dynamically update their routing tables.
*   **Collision Domains & Broadcast Domains:** Each interface on a router is a separate collision domain and a separate broadcast domain. Routers block broadcasts by default, thus segmenting broadcast domains.
*   **Gateways:** Routers act as default gateways for devices on a network, directing traffic destined for external networks.

**Examples:**

*   The router in your home that connects your local network (computers, phones) to your Internet Service Provider (ISP).
*   Large routers used by ISPs to direct traffic across the Internet.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Details routers as devices operating at the Network Layer (Layer 3), responsible for path determination and forwarding based on IP addresses.
*   **Forouzan (5th ed.):** Explains the role of routers in connecting networks and how they use routing tables and algorithms to find the best path.
*   **Peterson & Davie (5th ed.):** Discusses routers as key components of the internetworking infrastructure, highlighting their forwarding and path selection functions.
*   **Kurose & Ross (6th ed.):** Elaborates on routers' functions in the network layer, including packet forwarding and the use of routing algorithms.

**Important Point:** Routers are responsible for directing traffic between different networks, making the Internet possible.

---

### 7. Wireless Access Points (WAPs)

**Definition:** A Wireless Access Point (WAP) is a networking hardware device that allows other Wi-Fi devices to connect to a wired network. WAPs act as a bridge between the wireless and wired segments of a network.

**Key Concepts:**

*   **Wireless Connectivity:** Enables devices with wireless NICs to connect to the network.
*   **SSID (Service Set Identifier):** The name of the wireless network.
*   **Security Protocols:** WAPs support security protocols like WPA2/WPA3 to protect wireless transmissions.
*   **Placement:** WAPs are strategically placed to provide adequate wireless coverage within an area.
*   **Multiple WAPs:** In larger areas, multiple WAPs are used, often connected to switches, to create a seamless wireless network.

**Examples:**

*   The Wi-Fi router in your home often combines routing, switching, and WAP functionalities.
*   Dedicated WAPs installed in offices, schools, or public spaces.

**From Textbooks:**

*   **Forouzan (5th ed.):** Describes WAPs as the central connection point for wireless clients, bridging them to the wired network.
*   **Kurose & Ross (6th ed.):** Discusses wireless networking and the role of access points in providing wireless connectivity.

**Important Point:** WAPs are fundamental for creating wireless networks and enabling mobile device connectivity.

---

### 8. Modems (Modulator-Demodulator)

**Definition:** A modem is a hardware device that converts digital signals from a computer into analog signals that can be transmitted over analog communication lines (like telephone lines or cable TV lines) and vice-versa.

**Key Concepts:**

*   **Modulation:** Converting digital signals into analog signals.
*   **Demodulation:** Converting analog signals back into digital signals.
*   **Internet Connection:** Modems are essential for connecting home or office networks to the Internet via technologies like DSL, cable, or dial-up.
*   **Types:**
    *   **DSL Modems:** Use telephone lines.
    *   **Cable Modems:** Use coaxial cable lines.
    *   **Fiber Optic Modems (ONT - Optical Network Terminal):** While often called modems, they convert optical signals to electrical signals.

**Examples:**

*   The device provided by your ISP to connect your home network to the internet via cable or DSL.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Explains modems in the context of physical layer signaling, especially for analog transmission lines.
*   **Forouzan (5th ed.):** Details the modulation and demodulation processes and the role of modems in bridging digital and analog communication environments.

**Important Point:** Modems are crucial for translating signals between your digital network and the analog infrastructure of telecommunication providers.

---

### 9. Firewalls (Hardware)

**Definition:** Hardware firewalls are dedicated network devices designed to monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as a barrier between a trusted internal network and untrusted external networks (like the Internet).

**Key Concepts:**

*   **Packet Filtering:** Inspecting packets and allowing or blocking them based on criteria like source/destination IP addresses, ports, and protocols.
*   **Stateful Inspection:** Keeping track of the state of active network connections to make more intelligent filtering decisions.
*   **Network Address Translation (NAT):** Often performed by firewalls, it allows multiple devices on a private network to share a single public IP address.
*   **Security:** Protecting the internal network from unauthorized access, malware, and other cyber threats.

**Examples:**

*   A dedicated firewall appliance installed at the edge of a corporate network.
*   The firewall functionality often integrated into home routers.

**From Textbooks:**

*   **Tanenbaum (5th ed.):** Discusses security mechanisms, including firewalls, as crucial components for network protection.
*   **Forouzan (5th ed.):** Explains the concept of a firewall and its role in network security.

**Important Point:** Hardware firewalls provide a critical layer of security for protecting network resources.

---

### 10. Repeaters, Bridges, and Gateways (Other Important Hardware)

*   **Repeaters:**
    *   **Definition:** Devices that regenerate and retransmit network signals to extend the reach of a network segment. They operate at the Physical Layer (Layer 1).
    *   **Function:** Combat signal degradation (attenuation) over long cable runs.
    *   **Example:** A signal booster for a long Ethernet cable run.
    *   **Tanenbaum/Forouzan:** Explain repeaters as simple signal boosters.
*   **Bridges:**
    *   **Definition:** Devices that connect two or more network segments at the Data Link Layer (Layer 2). They learn MAC addresses and filter traffic between segments.
    *   **Function:** Reduce collisions by segmenting networks into smaller collision domains. Essentially, a switch is a multi-port bridge.
    *   **Example:** Connecting two separate Ethernet LANs.
    *   **Tanenbaum/Forouzan:** Detail bridges as intelligent devices that make forwarding decisions based on MAC addresses.
*   **Gateways:**
    *   **Definition:** Devices that connect networks using different protocols or architectures, operating at the highest layers of the network stack (often Layer 7).
    *   **Function:** Translate protocols and data formats to allow communication between dissimilar networks.
    *   **Example:** A router can function as a gateway, or a dedicated protocol translator. A server running an application that bridges two different types of databases.
    *   **Tanenbaum/Forouzan:** Explain gateways as protocol translators for inter-network communication.

**Important Point:** While hubs are legacy, understanding bridges and the concept of gateways is important for appreciating how networks are interconnected and how protocol translation occurs.

---

### Practice Questions and Answers

**Question 1:** What is the primary difference between a hub and a switch?
**Answer:** A hub broadcasts all incoming traffic to all connected devices, leading to collisions. A switch learns MAC addresses and forwards traffic only to the intended recipient, reducing collisions and improving efficiency.

**Question 2:** Which network device is responsible for connecting different IP networks?
**Answer:** A router.

**Question 3:** What is the purpose of a MAC address, and at which layer of the OSI model does it operate?
**Answer:** A MAC address is a unique hardware identifier for a network interface card. It operates at the Data Link Layer (Layer 2).

**Question 4:** Explain the advantage of using fiber optic cables over twisted-pair cables for long-distance network connections.
**Answer:** Fiber optic cables offer higher bandwidth, longer transmission distances, and immunity to electromagnetic interference (EMI), making them superior for long-haul communication compared to twisted-pair cables.

**Question 5:** Your home network has multiple computers, smartphones, and a smart TV all connected wirelessly. What is the primary hardware component enabling this wireless connectivity?
**Answer:** A Wireless Access Point (WAP).

---

### Summary of Key Network Hardware:

| Device Type              | OSI Layer | Primary Function                                                                 | Key Characteristic                                             | Modern Relevance         |
| :----------------------- | :-------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------- | :----------------------- |
| **NIC**                  | 1 & 2     | Interface between computer and network medium; assigns MAC address.              | MAC Address, Framing                                           | Essential                |
| **Twisted-Pair Cable**   | 1         | Transmits electrical signals.                                                    | UTP/STP, Categories (Cat5e, Cat6)                              | Dominant for LANs        |
| **Fiber Optic Cable**    | 1         | Transmits light signals.                                                         | High Bandwidth, Immunity to EMI, Long Distance                 | Backbone, High-Speed     |
| **Hub**                  | 1         | Connects multiple devices; broadcasts traffic to all ports.                      | Broadcasts traffic, Shared collision domain, Half-duplex       | Legacy                   |
| **Switch**               | 2         | Connects multiple devices; learns MAC addresses and forwards selectively.      | Learns MAC addresses, Separate collision domains per port      | Standard for LANs        |
| **Router**               | 3         | Connects different IP networks; forwards packets based on IP addresses.        | Uses routing tables & protocols, Connects different networks   | Essential for Internet   |
| **Wireless AP**          | 1 & 2     | Allows wireless devices to connect to a wired network.                           | Wi-Fi standards, SSID, Security                                | Essential for Wireless   |
| **Modem**                | 1         | Converts digital signals to analog for transmission and vice-versa.              | Modulation/Demodulation, Bridges digital to analog networks    | Essential for ISP access |
| **Hardware Firewall**    | 3-7       | Filters network traffic based on security rules.                                 | Packet filtering, Stateful inspection, NAT                     | Critical for Security    |

---
