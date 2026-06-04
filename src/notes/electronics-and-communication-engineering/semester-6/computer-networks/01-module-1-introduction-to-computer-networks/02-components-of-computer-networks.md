---
title: "Components of computer networks."
subject: "COMPUTER NETWORKS"
module: "Module 1: Introduction to Computer Networks"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff038"
status: "completed"
scrapedAt: "2026-05-23T17:59:50.642Z"
---
# Computer Networks: Module 1 - Introduction to Computer Networks

## Topic: Components of Computer Networks

### Course Outcomes Addressed:
*   **CO1 (K2):** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.

### Learning Outcomes for this Topic:
*   Identify and describe the fundamental components of a computer network.
*   Explain the role and function of each component in enabling network communication.
*   Differentiate between various types of network components and their specific purposes.

---

### 1. Introduction to Computer Networks

A computer network is a collection of interconnected computing devices that can communicate and share resources. Understanding the fundamental components is crucial to grasping how these networks function. This module will focus on the building blocks of any computer network.

**Key Concept:** Interconnection and resource sharing are the core purposes of a computer network.

---

### 2. Core Components of Computer Networks

Computer networks are comprised of several essential components that work together to facilitate communication. These can be broadly categorized as:

*   **End Devices (Hosts):** Devices that are the source or destination of network traffic.
*   **Intermediary Devices:** Devices that connect end devices and manage network traffic.
*   **Network Media:** The physical or wireless pathways through which data travels.

---

### 2.1. End Devices (Hosts)

End devices, also known as hosts, are the devices that users directly interact with to send or receive information. They are the originators and terminators of network traffic.

*   **Definition:** Any device that connects to a network and can send or receive data.
*   **Examples:**
    *   **Computers:** Desktops, laptops, servers.
    *   **Mobile Devices:** Smartphones, tablets.
    *   **IoT Devices:** Smart TVs, smart appliances, security cameras, sensors.
    *   **Printers and Scanners:** Network-enabled peripherals.
    *   **Communication Devices:** IP phones, video conferencing systems.

*   **Role:**
    *   Initiate communication requests (e.g., browsing a website, sending an email).
    *   Receive and process incoming data.
    *   Run applications that utilize the network.
    *   Store and process data.

*   **Reference:**
    *   **Kurose & Ross (Sixth Edition, 2017):** Emphasizes end systems (hosts) as the primary entities that run application processes and generate network traffic. They are the entities at the edge of the network.
    *   **Forouzan (Fourth Edition, 2008):** Refers to end devices as hosts and highlights their role in providing services or acting as clients requesting services.

---

### 2.2. Intermediary Devices

Intermediary devices are crucial for connecting end devices and managing the flow of data across the network. They are responsible for routing, forwarding, and connecting different network segments.

*   **Definition:** Devices that connect end devices and other intermediary devices to the network. They are not the source or destination of the data itself but facilitate its movement.
*   **Examples and Roles:**
    *   **Switches:**
        *   **Function:** Connect multiple devices within a local area network (LAN). They operate at Layer 2 (Data Link Layer) of the OSI model and use MAC addresses to forward data frames to the correct destination port.
        *   **Analogy:** Like a postal sorter in an office building that directs mail to specific rooms based on room numbers.
        *   **Key Concept:** MAC Address Table (CAM Table) for efficient forwarding.
        *   **Reference:**
            *   **Kurose & Ross:** Discusses switches in the context of Local Area Networks and their role in learning MAC addresses to reduce collisions and improve efficiency.
            *   **Forouzan:** Explains switches as intelligent hubs that forward frames only to the port connected to the intended recipient.
    *   **Routers:**
        *   **Function:** Connect different networks together (e.g., connecting a home LAN to the Internet). They operate at Layer 3 (Network Layer) of the OSI model and use IP addresses to determine the best path for data packets to travel across multiple networks.
        *   **Analogy:** Like a traffic police officer directing cars to different highways based on their destination city.
        *   **Key Concepts:** Routing tables, IP addresses, routing protocols (e.g., RIP, OSPF).
        *   **Reference:**
            *   **Kurose & Ross:** Dedicates significant attention to routers and their role in internetworking, packet forwarding, and path determination.
            *   **Forouzan:** Describes routers as devices that connect different networks and make decisions about the best path for data transmission based on logical addresses (IP addresses).
    *   **Access Points (APs):**
        *   **Function:** Allow wireless devices to connect to a wired network. They convert wireless signals to wired signals and vice-versa.
        *   **Example:** The Wi-Fi router in your home often includes a built-in access point.
    *   **Firewalls:**
        *   **Function:** Security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as a barrier between trusted and untrusted networks.
        *   **Example:** Protecting a corporate network from unauthorized access from the internet.
        *   **Key Concept:** Packet filtering, stateful inspection.
        *   **Reference:**
            *   **Forouzan:** Discusses firewalls in the context of network security and their role in controlling access.
    *   **Modems (Modulator-Demodulator):**
        *   **Function:** Convert digital signals from a computer into analog signals that can be transmitted over telephone lines or cable lines, and vice-versa.
        *   **Example:** Dial-up modems, DSL modems, cable modems.
    *   **Hubs (Legacy):**
        *   **Function:** Connect multiple devices in a network but broadcast incoming data to all connected devices, regardless of the intended recipient. They operate at Layer 1 (Physical Layer) and are largely obsolete due to inefficiency and collision issues.
        *   **Note:** While present in older networks, hubs are rarely used in modern networks due to the superior performance of switches.

*   **Important Point to Remember:** Intermediary devices are the "traffic directors" of the network, ensuring data reaches its intended destination efficiently and securely.

---

### 2.3. Network Media

Network media refers to the physical or wireless channels through which data signals are transmitted between network devices.

*   **Definition:** The physical or wireless pathways that carry the communication signals.
*   **Types:**
    *   **Wired Media:**
        *   **Twisted-Pair Cable:**
            *   **Description:** Consists of pairs of insulated copper wires twisted together to reduce electromagnetic interference.
            *   **Types:**
                *   **Unshielded Twisted Pair (UTP):** Common for Ethernet LANs (e.g., Cat 5e, Cat 6).
                *   **Shielded Twisted Pair (STP):** Offers better protection against interference but is more expensive.
            *   **Examples:** Connecting computers to switches, connecting routers to modems.
            *   **Reference:**
                *   **Forouzan:** Details the structure and types of twisted-pair cables, including their applications in LANs.
        *   **Coaxial Cable:**
            *   **Description:** Features a central conductor surrounded by an insulating layer, a metallic shield, and an outer jacket.
            *   **Examples:** Older Ethernet networks (10Base5, 10Base2), cable TV distribution.
        *   **Fiber-Optic Cable:**
            *   **Description:** Transmits data as pulses of light through thin strands of glass or plastic. Offers very high bandwidth and immunity to electromagnetic interference.
            *   **Types:**
                *   **Multimode Fiber (MMF):** Shorter distances, less expensive.
                *   **Single-mode Fiber (SMF):** Longer distances, higher bandwidth.
            *   **Examples:** Backbone networks, high-speed internet connections, long-distance communication.
            *   **Reference:**
                *   **Kurose & Ross:** Discusses fiber optics as a high-speed, high-bandwidth transmission medium.
                *   **Forouzan:** Provides a comprehensive explanation of fiber-optic cables, their working principle, and advantages.
    *   **Wireless Media:**
        *   **Description:** Transmits data through radio waves or infrared signals.
        *   **Types:**
            *   **Radio Waves:** Used in Wi-Fi, Bluetooth, cellular networks (e.g., 3G, 4G, 5G).
            *   **Microwaves:** Used for long-distance communication and satellite communication.
            *   **Infrared:** Used for short-range communication (e.g., TV remotes, some device-to-device communication).
        *   **Examples:** Smartphones connecting to cell towers, laptops connecting to Wi-Fi routers.
        *   **Reference:**
            *   **Forouzan:** Covers various wireless transmission media and their characteristics.

*   **Important Point to Remember:** The choice of network media significantly impacts the network's speed, reliability, and cost.

---

### 3. Network Topology (Brief Mention for Context)

While not a direct component, the arrangement of these components is crucial. Network topology describes how devices are interconnected. Common examples include:

*   **Bus Topology:** All devices connected to a single central cable.
*   **Star Topology:** All devices connected to a central hub or switch.
*   **Ring Topology:** Devices connected in a circular fashion.
*   **Mesh Topology:** Every device connected to every other device (full mesh) or to multiple devices (partial mesh).

**Reference:**
*   **Forouzan:** Explains different network topologies and their advantages/disadvantages.

---

### 4. Practice Questions and Exercises

**Question 1:**
Which of the following is considered an "end device" in a computer network?
a) Router
b) Switch
c) Laptop
d) Access Point

**Answer:** c) Laptop
**Explanation:** Laptops are devices that initiate or receive network communication directly from users. Routers, switches, and access points are intermediary devices that facilitate this communication.

---

**Question 2:**
A device that connects different networks and uses IP addresses to make forwarding decisions is known as a:
a) Hub
b) Switch
c) Modem
d) Router

**Answer:** d) Router
**Explanation:** Routers operate at Layer 3 and use IP addresses to route traffic between different networks. Switches operate at Layer 2 and use MAC addresses to forward traffic within a single network.

---

**Question 3:**
Which type of network media offers the highest bandwidth and is immune to electromagnetic interference?
a) Unshielded Twisted Pair (UTP)
b) Coaxial Cable
c) Fiber-Optic Cable
d) Bluetooth

**Answer:** c) Fiber-Optic Cable
**Explanation:** Fiber-optic cables transmit data using light signals, providing significantly higher bandwidth and resistance to interference compared to copper-based media or wireless technologies.

---

**Question 4:**
Explain the primary difference between a switch and a router in terms of their function and the addressing scheme they primarily use.

**Answer:**
*   **Switch:** Primarily operates within a single Local Area Network (LAN) and uses MAC addresses (physical addresses) to forward data frames to specific devices connected to its ports. It creates separate collision domains for each port, improving efficiency.
*   **Router:** Connects different networks together (e.g., a home network to the internet) and uses IP addresses (logical addresses) to determine the best path for data packets to reach their destination across multiple networks. It creates broadcast domains.

---

### 5. Key Points to Remember

*   **End Devices:** Source/destination of data (e.g., computers, smartphones).
*   **Intermediary Devices:** Facilitate data flow (e.g., switches, routers, firewalls, APs).
*   **Network Media:** The physical or wireless pathways for data transmission (e.g., UTP, fiber optic, radio waves).
*   Switches use MAC addresses within a LAN.
*   Routers use IP addresses to connect different networks.
*   Fiber optic cable provides the highest performance for network media.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. References and Further Reading

*   **Computer Networking: A Top-Down Approach Featuring the Internet** by James F. Kurose, Keith W. Ross (Pearson, Sixth Edition, 2017) - Chapters 1 & 2 provide excellent foundational coverage of network components and basic concepts.
*   **Data Communications and Networking** by Behrouz A Forouzan (Tata McGraw-Hill, Fourth Edition, 2008) - Chapters 1, 2, and sections on LANs and network devices offer detailed explanations.
*   **Computer Networks – A Systems Approach** by Larry L. Peterson, Bruce S. Davie - Provides a systems-level view of networking, including component interactions.
*   **Computer Networks** by A. S. Tanenbaum, D. J. Wetherall - Offers a classic and comprehensive treatment of network components and their roles.

---