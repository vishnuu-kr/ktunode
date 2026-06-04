---
title: "switch"
subject: "IT WORKSHOP"
module: "Module 5: Familiarizing networking hardware "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da48f"
status: "completed"
scrapedAt: "2026-05-23T17:40:06.414Z"
---
# IT WORKSHOP: Module 5 - Familiarizing Networking Hardware

## Topic: The Humble, Yet Mighty, Switch

Welcome, everyone, to Module 5! Today, we're diving into a piece of networking hardware that's absolutely fundamental to how our modern digital world communicates: the **switch**. You've probably seen them, maybe even in your own homes, but do you really know what makes them tick and why they're so crucial? Let's break it down.

### What Exactly is a Network Switch?

Think of a network switch as the highly efficient traffic director for your local network, your Local Area Network or LAN. Imagine you have a bunch of devices in a room – computers, printers, maybe a smart TV – all wanting to talk to each other. If you tried to connect them all directly with cables, it would be a mess! Worse, if they all tried to shout their messages at once, it would be pure chaos.

This is where our switch comes in. A switch is a device that connects multiple devices on a single network. But unlike its older cousin, the hub (which we'll touch on briefly later), a switch is *intelligent*. It doesn't just blindly blast data to every connected device. Instead, it learns which device is connected to which of its ports. When a device sends a message, the switch looks at the destination address of that message and sends it *only* to the specific port where the intended recipient is located.

**How does it "learn"?** This is a key concept, and it's worth spending a moment on. Switches build what's called a **MAC address table** (or CAM table – Content Addressable Memory). Every network-enabled device has a unique physical address burned into its network interface card (NIC), called a MAC address. When a device on the network sends out data, the switch sees the source MAC address and the port it arrived on. It then records this information in its table. So, if Computer A (with MAC address AA:BB:CC:11:22:33) is connected to port 1, the switch’s table will show something like:

*   Port 1 -> AA:BB:CC:11:22:33

When Computer B (with MAC address DD:EE:FF:44:55:66) on port 3 wants to send data to Computer A, it sends the data to the switch. The switch checks its MAC address table. It sees that MAC address AA:BB:CC:11:22:33 is on port 1. So, it forwards the data *only* to port 1. This is incredibly efficient!

**Relatable Analogy:** Think of your office or school building. You have many people working in different offices (devices). If you need to deliver a letter (data) to a specific person, you don't just hand it to everyone in the lobby and hope it gets to the right person. Instead, you go to the mailroom, which knows which office (port) each person (MAC address) is in, and the mail carrier delivers it directly to that office. The switch is our intelligent mailroom.

### Why are Switches So Important? Connecting to Course Outcomes

This is where we start linking our hardware knowledge to the bigger picture of our IT Workshop course.

*   **CO1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems.**
    Our network switch is a prime example of fundamental networking hardware. Understanding how it works is the first step to understanding how devices *interface* with each other at a physical and logical level. When we talk about plugging a computer into a network, the switch is often the intermediary. Its internal logic, which we’ll explore further, is a form of system software that dictates how hardware components interact. You can see this in action when you plug a network cable into your laptop and it establishes a connection – the switch is silently doing its job.

*   **CO3: Experiment with the data network communication scenarios using Wireshark.**
    Ah, Wireshark! This is where theory meets practice. When you capture network traffic using Wireshark, you'll see the raw data packets flying around. If you're analyzing traffic between two devices on a switched network, you'll notice that you *don't* see the traffic intended for other devices on the network. This is direct evidence of the switch's intelligence, filtering traffic based on MAC addresses. You'll see the source and destination MAC addresses within the Ethernet frames, and you'll be able to trace how the switch uses this information. This hands-on experience directly demonstrates the switch's role in managing network communication.

### Types of Network Switches

While the core function remains the same, switches come in different flavours, largely distinguished by their "intelligence" and the layer of the OSI model they operate at.

#### Unmanaged vs. Managed Switches

This is a crucial distinction you'll encounter when purchasing or setting up networks.

*   **Unmanaged Switches:** These are your plug-and-play devices. They are pre-configured and don't offer any customization or advanced features. They simply provide basic connectivity. Think of them as a simple power strip – you plug things in, and they get power. They're great for small home networks or simple office setups where you don't need to control traffic flow, prioritize certain devices, or monitor network performance. They operate mostly at Layer 2 of the OSI model.

*   **Managed Switches:** These are the powerhouses. They offer a wealth of features and configurations. You can log into a managed switch (usually via a web interface, command-line interface, or SNMP) to:
    *   **VLANs (Virtual Local Area Networks):** Segment your network into smaller, isolated broadcast domains. Imagine having separate "virtual" networks within your physical one. This improves security and performance. For instance, you might put your printers on one VLAN and your employee computers on another.
    *   **Quality of Service (QoS):** Prioritize certain types of traffic. If you have VoIP phones or video conferencing, you can tell the switch to give their data packets higher priority so they don't get bogged down by large file transfers.
    *   **Port Mirroring:** Copy traffic from one port to another. This is invaluable for network monitoring and troubleshooting, often used in conjunction with tools like Wireshark.
    *   **Link Aggregation:** Combine multiple physical connections into a single logical link for increased bandwidth and redundancy.

    Managed switches are typically used in larger business environments where granular control, security, and performance optimization are essential. They can operate at Layer 2 and, in the case of "Layer 3 switches," even at Layer 3 of the OSI model, performing routing functions.

#### Layer 2 vs. Layer 3 Switches

This refers to the OSI model layers where the switch primarily makes its decisions.

*   **Layer 2 Switches:** These are the most common type. They operate at the **Data Link Layer**. Their primary function is forwarding data frames based on MAC addresses. They don't look at IP addresses. They create and manage your local network segments. As we discussed with the MAC address table, this is their domain. Most unmanaged switches are Layer 2, and many managed switches are also primarily Layer 2.

*   **Layer 3 Switches:** These are more advanced. They combine the functionality of a Layer 2 switch with the routing capabilities of a router. They can make forwarding decisions based on **IP addresses** (which reside at the Network Layer, Layer 3). This means they can route traffic between different subnets or VLANs. For example, if you have two VLANs, a Layer 3 switch can route traffic between them without needing a separate router. This is much faster than traditional router-on-a-stick configurations for inter-VLAN routing.

**Exam Tip:** When asked about a switch's primary function, always think MAC addresses and Layer 2. If routing or IP addresses are mentioned in the context of a switch, it's likely a Layer 3 switch.

### How a Switch Works: The Forwarding Process

Let's recap the journey of a data packet through a switch, using our MAC address table.

1.  **Frame Arrival:** A device connected to Port 1 sends an Ethernet frame. This frame contains a source MAC address (e.g., Device A's MAC) and a destination MAC address (e.g., Device B's MAC).

2.  **Source MAC Learning:** The switch receives the frame on Port 1. It inspects the source MAC address (Device A's MAC) and records that this MAC address is reachable via Port 1 in its MAC address table.

3.  **Destination MAC Lookup:** The switch then looks at the destination MAC address (Device B's MAC).
    *   **If Device B's MAC is found in the table:** The switch knows which port Device B is connected to (let's say Port 3). It then forwards the frame *only* out of Port 3. This is **unicasting**.
    *   **If Device B's MAC is NOT found in the table:** The switch doesn't know where Device B is. In this case, it does something called **flooding**. It forwards the frame out of *all* ports *except* the one it arrived on (Port 1). Eventually, Device B will receive the frame and, in its response, will send its MAC address back to the switch, allowing it to update its table.
    *   **If the destination MAC is a broadcast address (FF:FF:FF:FF:FF:FF):** The switch will forward the frame out of all ports *except* the one it arrived on. This is how broadcast messages reach all devices on the network segment.

**Important Concept:** Switches create separate collision domains for each port. This means that collisions, which were a major problem with older hubs where all devices shared the same collision domain, are virtually eliminated on a switched network. Each port on a switch is essentially its own mini-network, allowing devices to transmit and receive data simultaneously without interference. This dramatically improves network efficiency.

### Switch vs. Hub: A Quick Comparison

It's important to understand what a switch replaced. A **hub** is a much simpler device. When a hub receives a data frame, it simply repeats that frame out of *every single port* except the one it arrived on.

*   **Hubs:**
    *   Operate at the **Physical Layer** (Layer 1) of the OSI model.
    *   Cannot learn MAC addresses.
    *   Broadcast all traffic to all ports.
    *   Create a single, large collision domain for all connected devices. This means if two devices try to send data at the same time, a collision occurs, and both have to wait and retransmit.
    *   Less efficient and slower than switches, especially under heavy traffic.

    Think of a hub as a shouting match in a crowded room. Everyone hears everything, and if two people try to talk at once, it's a mess. A switch is like a private conversation between two people in that room.

### Considerations for Choosing and Using Switches

When you're working with networking hardware, you'll often be tasked with selecting or configuring a switch. Here are some things to keep in mind:

*   **Port Density:** How many devices do you need to connect? Switches come with varying numbers of ports (e.g., 8, 16, 24, 48).
*   **Speed:** Most modern switches support Gigabit Ethernet (1000 Mbps). Older ones might be Fast Ethernet (100 Mbps). For high-performance networks, consider switches with higher speeds or even 10 Gigabit Ethernet.
*   **Form Factor:** Are you looking for a small desktop switch, a rack-mountable unit for a server closet, or a modular chassis for a large enterprise?
*   **Power over Ethernet (PoE):** Some switches can supply power over the Ethernet cable to connected devices like IP phones, wireless access points, or security cameras, eliminating the need for separate power adapters for those devices.
*   **Managed vs. Unmanaged:** As we discussed, this depends entirely on your network's requirements for control, security, and performance monitoring.
*   **Backplane Speed/Switching Capacity:** This refers to the total data throughput a switch can handle. A switch with a low backplane speed will become a bottleneck, even if its individual ports are fast.

### Bridging and Routing: Where Do Switches Fit In?

*   **Bridging:** Layer 2 switches are essentially sophisticated bridges. They connect two or more network segments and learn MAC addresses to forward traffic intelligently between them.
*   **Routing:** Routers operate at Layer 3 and are responsible for forwarding data packets between different networks (e.g., your home network to the internet). As we saw, Layer 3 switches can perform some routing functions, especially within a local network or between VLANs.

From **"Invitation to Computer Science"** by Schneider and Gersting, you'll find that understanding these devices is crucial for grasping how data moves beyond a single machine. They illustrate how network protocols build upon lower-level hardware capabilities. Our discussion of MAC addresses and frames directly relates to the concepts of data encapsulation they cover.

**Reference:** **"The Architecture of Computer Hardware, Systems Software, & Networking"** by Englander provides a fantastic deep dive into how these network components fit within the broader system architecture. It helps explain the interplay between the physical network interface, the switch's internal logic, and the operating system's network stack.

---

### Sample Questions and Answers

Here are a few questions that might appear on an exam or that will help solidify your understanding:

**Question 1 (Conceptual):** Explain why a network switch is more efficient than a network hub.
**Answer:** A network switch is more efficient because it is an intelligent device that learns the MAC addresses of devices connected to its ports. When it receives a data frame, it looks up the destination MAC address in its MAC address table and forwards the frame only to the specific port where that device is located (unicasting). In contrast, a network hub is a simple, unintelligent device that broadcasts every incoming frame to all connected ports, leading to unnecessary traffic and potential collisions, especially in busy networks. This intelligent forwarding by the switch creates separate collision domains for each port, significantly improving network performance and reducing wasted bandwidth.

**Question 2 (Exam-Oriented):** A user reports that they can send data to devices on the same subnet but cannot access resources on a different subnet. You are troubleshooting a network segment where a device is connected to a Layer 2 switch. What is the most likely cause, and how would you verify it?
**Answer:** The most likely cause is that a Layer 2 switch, by definition, operates at the Data Link Layer and forwards traffic based on MAC addresses. It does not inherently understand or process IP addresses, which are used for inter-subnet communication. Therefore, a Layer 2 switch cannot route traffic between different subnets.
To verify this, you would check the network configuration. If the device is connected to a Layer 2 switch and needs to communicate with another subnet, a router or a Layer 3 switch would be required to facilitate that communication. If the network relies solely on Layer 2 switches for inter-subnet communication, it will fail. If the network is designed correctly, the device would need to have its default gateway configured to point to a router (or Layer 3 switch) that handles routing between subnets.

**Question 3 (Application/COs):** You are tasked with setting up a small office network for a company that handles sensitive customer data. They want to ensure that their employee workstations cannot directly communicate with a new guest Wi-Fi network being installed. Which type of switch would you recommend and why?
**Answer:** I would recommend a **managed switch** that supports **VLANs (Virtual Local Area Networks)**.
**Reasoning:**
*   **Managed Switch:** This allows for configuration and control over network traffic.
*   **VLANs:** By configuring VLANs, I can create separate broadcast domains. I would assign the employee workstations to one VLAN (e.g., VLAN 10) and the guest Wi-Fi access point to a different VLAN (e.g., VLAN 20).
*   **Isolation:** The managed switch, when configured with appropriate security policies, can be set up to prevent any traffic from being forwarded between VLAN 10 and VLAN 20. This means the guest devices on VLAN 20 cannot "see" or communicate with the employee workstations on VLAN 10, meeting the security requirement. An unmanaged switch would not offer this segmentation capability. This directly relates to **CO1** (experimenting with hardware to interface with software systems, where the switch's configuration is the software interface) and **CO3** (understanding network segmentation which is key to analyzing network scenarios).

**Question 4 (Conceptual):** What is a MAC address, and why is it important for a network switch?
**Answer:** A MAC (Media Access Control) address is a unique hardware identifier assigned to each network interface card (NIC) by the manufacturer. It's a globally unique 48-bit number, often represented in hexadecimal format (e.g., 00:1A:2B:3C:4D:5E). It operates at the Data Link Layer (Layer 2) of the OSI model.
For a network switch, the MAC address is critically important because it's the basis for the switch's intelligent forwarding. The switch builds and maintains a MAC address table by observing the source MAC addresses of incoming frames and associating them with the ports they arrived on. When a frame needs to be sent, the switch uses the destination MAC address in the frame to look up the correct output port in its table, thus directing the data only where it needs to go, rather than broadcasting it everywhere. This learning and forwarding process based on MAC addresses is the core functionality that distinguishes switches from hubs and makes networks more efficient.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
