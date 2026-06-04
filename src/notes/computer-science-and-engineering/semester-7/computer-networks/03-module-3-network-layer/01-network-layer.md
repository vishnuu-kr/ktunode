---
title: "Network Layer:-"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c932"
status: "completed"
scrapedAt: "2026-05-20T17:02:46.295Z"
---
# Computer Networks: Module 3 - Network Layer

---

## Module Overview

The Network Layer is responsible for **logical addressing** and **routing** of data packets from a source host to a destination host across multiple interconnected networks. It provides a connectionless service, meaning it doesn't guarantee delivery or order of packets.

---

## Learning Outcomes

Upon completion of this module, you should be able to:

*   **Understand the role and functions of the Network Layer.**
*   **Explain the concept of logical addressing and its importance.**
*   **Describe the structure and operation of IP addresses (IPv4 and IPv6).**
*   **Differentiate between classful and classless IP addressing.**
*   **Explain the purpose and operation of subnetting.**
*   **Understand the concept of Network Address Translation (NAT).**
*   **Describe the functionalities of key network layer protocols like IP, ICMP, and ARP.**
*   **Explain the basic principles of routing and the role of routing algorithms.**
*   **Differentiate between static and dynamic routing.**
*   **Introduce routing protocols like RIP, OSPF, and BGP.**
*   **Understand the concept of fragmentation and reassembly.**

---

## 1. Role and Functions of the Network Layer

The Network Layer is the third layer in the OSI model and the third layer in the TCP/IP model. Its primary responsibilities are:

*   **Logical Addressing:** Assigning unique logical addresses (IP addresses) to devices to identify them across the network.
*   **Routing:** Determining the best path for packets to travel from the source to the destination across various networks.
*   **Packet Forwarding:** Moving packets from an incoming network interface to an outgoing network interface based on the routing table.
*   **Interconnection of Networks:** Enabling communication between devices located on different physical networks.
*   **Addressing Schemes:** Supporting various addressing schemes to identify devices.

**Key Concept:** The Network Layer operates on a **connectionless** and **unreliable** basis. This means:
    *   **Connectionless:** Each packet is treated independently, and the network layer doesn't establish a connection before sending data.
    *   **Unreliable:** The network layer doesn't guarantee delivery, order, or integrity of packets. These services are provided by higher layers (like the Transport Layer).

---

## 2. Logical Addressing: IP Addresses

Logical addresses are assigned by the network administrator and are independent of the underlying physical network hardware. The most common logical addressing scheme is the **Internet Protocol (IP) address**.

### 2.1. Internet Protocol (IP)

IP is the primary protocol of the Network Layer. It defines the format of packets (datagrams) and the addressing scheme.

#### 2.1.1. IPv4 (Internet Protocol version 4)

*   **Format:** A 32-bit address, represented as four decimal numbers (0-255) separated by dots (e.g., `192.168.1.1`).
*   **Structure:** An IPv4 address consists of two parts:
    *   **Network ID:** Identifies the specific network.
    *   **Host ID:** Identifies a specific device within that network.
*   **Address Classes (Classful Addressing):** Historically, IPv4 addresses were divided into classes based on the value of the first octet. This is now largely superseded by classless addressing.

    | Class | First Octet Range | Network Bits | Host Bits | Max Networks | Max Hosts per Network |
    | :---- | :---------------- | :----------- | :-------- | :----------- | :-------------------- |
    | A     | 1-126             | 8            | 24        | 126          | ~16.7 million         |
    | B     | 128-191           | 16           | 16        | 16,384       | 65,534                |
    | C     | 192-223           | 24           | 8         | ~2 million   | 254                   |
    | D     | 224-239           | (Multicast)  | -         | -            | -                     |
    | E     | 240-255           | (Experimental)| -         | -            | -                     |

    **Special Addresses:**
    *   **Network Address:** The first address in a block, with all host bits set to 0 (e.g., `192.168.1.0`). Identifies the network itself.
    *   **Broadcast Address:** The last address in a block, with all host bits set to 1 (e.g., `192.168.1.255`). Used to send data to all devices on a network.
    *   **Loopback Address:** `127.0.0.1`. Used by a host to send data to itself, typically for testing.
    *   **Private IP Addresses:** Ranges reserved for internal use within private networks (e.g., `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`). These cannot be routed on the public internet.

#### 2.1.2. IPv6 (Internet Protocol version 6)

*   **Motivation:** To address the exhaustion of IPv4 addresses.
*   **Format:** A 128-bit address, represented as eight groups of four hexadecimal digits, separated by colons (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).
*   **Simplification Rules:**
    *   **Leading Zeros:** Leading zeros in any group can be omitted (e.g., `0db8` can be `db8`).
    *   **Consecutive Zero Groups:** One or more consecutive groups of all zeros can be replaced by a double colon (`::`) (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334` can be `2001:db8:85a3::8a2e:370:7334`). This `::` can only be used once in an address.
*   **Structure:** Similar to IPv4, it has a network prefix and an interface identifier, but the division is not fixed by classes.
*   **Types of IPv6 Addresses:**
    *   **Unicast:** Identifies a single interface.
    *   **Multicast:** Identifies a group of interfaces.
    *   **Anycast:** Identifies a group of interfaces, but the packet is delivered to only one member of the group (usually the closest).

---

## 3. Classless IP Addressing and Subnetting

### 3.1. Classless Inter-Domain Routing (CIDR)

*   **Motivation:** To overcome the limitations of classful addressing and improve IP address utilization.
*   **Concept:** Removes the rigid class boundaries. The network and host portions of an IP address are determined by a **prefix length**, denoted by a slash followed by the number of bits in the network portion (e.g., `192.168.1.0/24`).
*   **Subnet Mask:** A 32-bit number that separates the network and host portions of an IP address. The bits corresponding to the network portion are set to 1, and the bits for the host portion are set to 0.
    *   Example: `192.168.1.0/24` has a subnet mask of `255.255.255.0`.

### 3.2. Subnetting

*   **Definition:** The process of dividing a large network into smaller subnetworks (subnets).
*   **Purpose:**
    *   **Improve IP Address Utilization:** Allocate addresses more efficiently.
    *   **Reduce Network Congestion:** Smaller networks generally have less traffic.
    *   **Enhance Security:** Isolate different parts of the network.
    *   **Simplify Network Management:** Manage smaller, more organized segments.
*   **Process:**
    1.  **Borrow Host Bits:** Take some bits from the host portion of an IP address and use them to create subnet IDs.
    2.  **Calculate Number of Subnets:** If `n` bits are borrowed, you can create `2^n` subnets.
    3.  **Calculate Number of Hosts per Subnet:** The remaining `m` host bits allow for `2^m - 2` usable host addresses (subtracting the network address and broadcast address).
*   **Example:**
    Consider a network `192.168.1.0/24`. We want to divide it into 4 subnets.
    *   We need `2^n = 4` subnets, so `n = 2` bits need to be borrowed from the host portion.
    *   The original host portion had 8 bits. Now, `m = 8 - 2 = 6` bits remain for hosts.
    *   New prefix length: `24 + 2 = 26`.
    *   Number of hosts per subnet: `2^6 - 2 = 64 - 2 = 62`.
    *   The new subnet masks will be `255.255.255.192` (because `11000000` in binary is `192` in decimal).

    The subnets would be:
    *   Subnet 1: `192.168.1.0/26` (Network: `192.168.1.0`, Broadcast: `192.168.1.63`)
    *   Subnet 2: `192.168.1.64/26` (Network: `192.168.1.64`, Broadcast: `192.168.1.127`)
    *   Subnet 3: `192.168.1.128/26` (Network: `192.168.1.128`, Broadcast: `192.168.1.191`)
    *   Subnet 4: `192.168.1.192/26` (Network: `192.168.1.192`, Broadcast: `192.168.1.255`)

---

## 4. Network Address Translation (NAT)

*   **Definition:** A method used to map a private IP address (used within a local network) to a public IP address (used on the internet) and vice versa.
*   **Purpose:**
    *   **Conserve Public IPv4 Addresses:** Allows many devices with private IPs to share a single public IP.
    *   **Enhance Security:** Hides the internal network structure from the external network.
*   **Types of NAT:**
    *   **Static NAT:** Maps one-to-one private IP to public IP.
    *   **Dynamic NAT:** Maps a pool of private IPs to a pool of public IPs.
    *   **Port Address Translation (PAT) / NAT Overload:** Maps multiple private IPs to a single public IP using different port numbers. This is the most common type.

**Example (PAT):**
Imagine a home network with devices having private IPs like `192.168.1.10`, `192.168.1.11`. When they access the internet, their traffic appears to come from the router's public IP address, say `203.0.113.5`, but with different source port numbers.

---

## 5. Key Network Layer Protocols

### 5.1. Internet Protocol (IP)

*   **Role:** Provides logical addressing and packet formatting.
*   **Function:** Defines the datagram structure and the addressing scheme. It's the core protocol of the Network Layer.
*   **IPv4 Datagram Header Fields (Simplified):**
    *   **Version:** (4 for IPv4)
    *   **Header Length:** Length of the IP header.
    *   **Type of Service (ToS):** Prioritization of packets.
    *   **Total Length:** Length of the IP datagram (header + data).
    *   **Identification, Flags, Fragment Offset:** Used for fragmentation and reassembly.
    *   **Time to Live (TTL):** Prevents packets from circulating indefinitely in the network. Decremented by each router. If TTL reaches 0, the packet is discarded.
    *   **Protocol:** Indicates the next-level protocol (e.g., TCP=6, UDP=17).
    *   **Header Checksum:** Detects errors in the header.
    *   **Source IP Address:** IP address of the sender.
    *   **Destination IP Address:** IP address of the intended recipient.
    *   **Options:** For special functionalities (rarely used).
    *   **Data:** The payload from the Transport Layer.

### 5.2. Internet Control Message Protocol (ICMP)

*   **Role:** Used by network devices (like routers) to send error messages and operational information back to the source IP address.
*   **Function:**
    *   **Error Reporting:** Notifies the source about problems encountered during packet delivery (e.g., destination unreachable, time exceeded).
    *   **Diagnostic Tools:** Used by utilities like `ping` and `traceroute`.
*   **Common ICMP Message Types:**
    *   **Echo Request/Reply (Type 8/0):** Used by `ping` to test reachability.
    *   **Destination Unreachable (Type 3):** Sent when a packet cannot be delivered.
    *   **Time Exceeded (Type 11):** Sent when the TTL of a packet expires. Used by `traceroute`.
    *   **Redirect (Type 5):** Sent by a router to inform a host about a better route.

### 5.3. Address Resolution Protocol (ARP)

*   **Role:** Maps an IP address (logical address) to a MAC address (physical address) on the local network segment.
*   **Function:** When a host needs to send a packet to another host on the same local network, it knows the destination IP address. However, the Data Link Layer needs the destination MAC address to create the frame.
    1.  **ARP Request:** The sender broadcasts an ARP request message on the local network, asking "Who has IP address X.X.X.X? Tell Y.Y.Y.Y."
    2.  **ARP Reply:** The host with IP address X.X.X.X replies directly to the sender with its MAC address.
    3.  **ARP Cache:** Hosts maintain an ARP cache (or table) of IP-to-MAC address mappings to avoid sending ARP requests for every communication.
*   **Note:** ARP operates between the Network Layer and Data Link Layer.

---

## 6. Routing

*   **Definition:** The process of selecting paths in a network along which to send network traffic.
*   **Router:** A device that performs routing. It forwards packets between different networks.
*   **Routing Table:** A data structure stored in a router that lists the routes to particular network destinations. It contains information like:
    *   Destination Network ID
    *   Next-Hop IP Address (the IP address of the next router on the path)
    *   Outgoing Interface (the physical interface on the router to send the packet)
    *   Metric (a value indicating the "cost" or "preference" of the route, e.g., hop count, bandwidth, delay)

### 6.1. Routing Algorithms

Algorithms used by routers to build and maintain their routing tables. They can be broadly categorized as:

#### 6.1.1. Static Routing

*   **Concept:** Routes are manually configured by the network administrator.
*   **Pros:** Simple to configure for small networks, predictable, secure (no routing information exchanged).
*   **Cons:** Not scalable for large networks, doesn't adapt to network changes or failures automatically.

#### 6.1.2. Dynamic Routing

*   **Concept:** Routers automatically learn about network topology and exchange routing information with other routers using routing protocols.
*   **Pros:** Adapts to network changes and failures, scalable.
*   **Cons:** More complex to configure, requires more router resources (CPU, memory), can be less secure if protocols are not properly implemented.

### 6.2. Routing Protocols

Protocols used for dynamic routing. They can be categorized based on how they exchange information:

#### 6.2.1. Distance-Vector Routing Protocols (e.g., RIP, IGRP)

*   **Concept:** Routers share their entire routing tables with their directly connected neighbors periodically. Each router advertises its distance (cost) to each network.
*   **Operation:** "Routing by Rumor" - routers learn about networks from their neighbors.
*   **Metrics:** Typically hop count.
*   **Disadvantages:**
    *   **Count-to-Infinity problem:** Can take a long time for routes to converge after a network change.
    *   **Slow convergence:** Updates are sent periodically, not immediately.

#### 6.2.2. Link-State Routing Protocols (e.g., OSPF, IS-IS)

*   **Concept:** Routers exchange information about their directly connected links and neighbors (link-state advertisements or LSAs). Each router builds a complete map (topology) of the network.
*   **Operation:** Uses Dijkstra's algorithm (Shortest Path First) to calculate the best path to each destination based on the network map.
*   **Metrics:** Can use various metrics like bandwidth, delay, etc.
*   **Advantages:**
    *   Faster convergence than distance-vector.
    *   Less susceptible to count-to-infinity.
    *   Each router has a global view of the network.

#### 6.2.3. Path-Vector Routing Protocols (e.g., BGP)

*   **Concept:** Primarily used between different Autonomous Systems (AS) on the internet. An AS is a collection of networks under a single administrative domain.
*   **Operation:** Routers exchange routing information that includes the path (sequence of AS numbers) to reach a destination network.
*   **Metric:** Path attributes (e.g., AS-Path length, local preference, origin).
*   **Purpose:** Policy-based routing, controlling traffic flow between different organizations or ISPs.

**Common Routing Protocols:**

*   **RIP (Routing Information Protocol):** An older distance-vector protocol, typically uses hop count as the metric. RIPv1 and RIPv2 are common. RIPv2 supports CIDR.
*   **OSPF (Open Shortest Path First):** A popular link-state protocol. It's an interior gateway protocol (IGP) suitable for large enterprise networks.
*   **BGP (Border Gateway Protocol):** The de facto standard exterior gateway protocol (EGP) used on the internet for routing between different Autonomous Systems.

---

## 7. Fragmentation and Reassembly

*   **Concept:** When a packet is too large to be transmitted over a particular network medium, it can be broken down into smaller pieces called fragments.
*   **Maximum Transmission Unit (MTU):** The largest size of a packet that a network layer protocol can pass down to the Data Link Layer for transmission. Each network technology has a different MTU (e.g., Ethernet typically has an MTU of 1500 bytes).
*   **Process:**
    1.  **Fragmentation:** If a router receives a packet larger than the MTU of the outgoing interface, it fragments the packet. The original IP header is copied to each fragment, and fields like Identification, Flags (More Fragments flag), and Fragment Offset are adjusted.
    2.  **Reassembly:** The destination host receives the fragments. Using the Identification field, it groups fragments belonging to the same original packet. The Fragment Offset indicates the order of fragments, and the More Fragments flag indicates if it's the last fragment. The destination host reassembles the fragments into the original packet.
*   **Issues:**
    *   Increases processing overhead on routers and the destination host.
    *   If any fragment is lost, the entire packet is lost.
*   **IPv6:** Fragmentation is handled differently. Intermediate routers do not fragment IPv6 packets. If a packet is too large, an ICMPv6 "Packet Too Big" message is sent back to the source, which then adjusts its packet size. Fragmentation in IPv6 is handled only by the source host.

---

## Important Points to Remember

*   **Network Layer is responsible for end-to-end packet delivery across multiple networks.**
*   **IP addresses are logical addresses used for routing.**
*   **IPv4 is a 32-bit address, IPv6 is a 128-bit address.**
*   **CIDR and subnetting are crucial for efficient IP address management.**
*   **NAT allows private IPs to access the public internet.**
*   **IP is connectionless and unreliable.**
*   **ICMP provides error reporting and control messages.**
*   **ARP resolves IP addresses to MAC addresses on a local network.**
*   **Routers use routing tables and routing algorithms to forward packets.**
*   **Distance-vector protocols (RIP) rely on neighbor information, while link-state protocols (OSPF) build a complete network map.**
*   **BGP is used for inter-AS routing on the internet.**
*   **Fragmentation breaks down large packets but adds overhead.**

---

## Practice Questions

1.  What are the two primary functions of the Network Layer?
2.  Explain the difference between a Network ID and a Host ID in IPv4.
3.  What is the purpose of NAT? Describe one type of NAT.
4.  How does ARP help in network communication?
5.  What is the role of the TTL field in an IPv4 header?
6.  Differentiate between distance-vector and link-state routing protocols.
7.  If a network has a subnet mask of `255.255.255.240`, how many host bits are available for each subnet? How many usable host addresses are there per subnet?
8.  Why was IPv6 developed? What is a key feature of its address format that simplifies representation?
9.  What is the main disadvantage of static routing in large networks?
10. How is fragmentation handled in IPv6, and how does it differ from IPv4 fragmentation?

---

## Answers to Practice Questions

1.  The two primary functions of the Network Layer are **logical addressing** and **routing**.
2.  A **Network ID** identifies a specific network, while a **Host ID** identifies a specific device within that network.
3.  The purpose of NAT (Network Address Translation) is to **conserve public IPv4 addresses** and **enhance security** by mapping private IP addresses to public IP addresses. An example of a type of NAT is **Port Address Translation (PAT)**, also known as NAT Overload, where multiple private IP addresses are mapped to a single public IP address using different port numbers.
4.  ARP (Address Resolution Protocol) helps in network communication by **mapping an IP address (logical address) to a MAC address (physical address)** on a local network segment. This is necessary because the Data Link Layer needs the MAC address to construct Ethernet frames.
5.  The **TTL (Time to Live)** field in an IPv4 header prevents packets from circulating indefinitely in the network. It is decremented by each router that processes the packet. If the TTL reaches zero, the packet is discarded.
6.  **Distance-vector routing protocols** (e.g., RIP) learn about routes by receiving routing tables from their neighbors and rely on "routing by rumor." They typically use hop count as a metric. **Link-state routing protocols** (e.g., OSPF) exchange information about their directly connected links and build a complete map of the network, then use algorithms like Dijkstra's to find the shortest path.
7.  A subnet mask of `255.255.255.240` means the last octet in binary is `11110000`.
    *   Number of host bits: 4 (the last four 0s).
    *   Number of usable host addresses per subnet: `2^4 - 2 = 16 - 2 = 14` (excluding the network and broadcast addresses).
8.  IPv6 was developed primarily to address the **exhaustion of IPv4 addresses**. A key feature of its address format that simplifies representation is the ability to omit leading zeros in any hexadecimal group and to replace consecutive groups of all zeros with a double colon (`::`) once in an address.
9.  The main disadvantage of static routing in large networks is that it is **not scalable** and **does not automatically adapt to network changes or failures**. Manual configuration becomes complex and error-prone as the network grows.
10. In IPv6, intermediate routers do not fragment packets. If a packet is too large for an outgoing link, the router sends an **ICMPv6 "Packet Too Big" message** back to the source. The source host then adjusts its packet size accordingly and retransmits. Fragmentation in IPv6 is handled exclusively by the **source host**. This differs from IPv4, where routers can fragment packets.

---
