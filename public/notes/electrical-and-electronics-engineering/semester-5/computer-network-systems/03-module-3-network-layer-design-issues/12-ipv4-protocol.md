---
title: "IPv4 protocol"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36488"
status: "completed"
scrapedAt: "2026-05-23T16:20:15.204Z"
---
# Computer Network Systems: Module 3 - Network Layer Design Issues
## Topic: IPv4 Protocol

---

### **1. Introduction to the Network Layer**

*   **Purpose:** The Network Layer is responsible for **logical addressing** and **routing** of packets from a source host to a destination host across potentially multiple networks.
*   **Key Issues:**
    *   **Addressing:** How to assign unique addresses to hosts and routers.
    *   **Routing:** How to determine the best path for packets to traverse the network.
    *   **Quality of Service (QoS):** How to provide differentiated service levels for different traffic types.
    *   **Congestion Control:** How to prevent and manage network congestion.
    *   **Inter-networking:** How to connect different types of networks.

*(Tanenbaum, 5th Ed., Chapter 6; Forouzan, 5th Ed., Chapter 13)*

---

### **2. IPv4 Protocol: The Dominant Network Layer Protocol**

**2.1. Overview of IP (Internet Protocol)**

*   **Connectionless:** Each IP packet is treated independently, without establishing a connection beforehand.
*   **Unreliable:** IP does not guarantee delivery, order, or integrity of packets. It's a "best-effort" delivery service. Reliability is handled by higher layers (like TCP).
*   **Data Gram Service:** IP deals with individual packets called datagrams.
*   **Logical Addressing:** IP uses logical addresses (IP addresses) that are independent of the underlying physical network hardware. This allows for easy interconnection of diverse networks.

*(Forouzan, 5th Ed., Section 13.1.1; Kurose & Ross, 6th Ed., Chapter 4)*

**2.2. IPv4 Datagram Format**

The IPv4 datagram is the fundamental unit of data transmitted at the Network Layer.

*   **Version (4 bits):** Indicates the IP version. For IPv4, this field is `0100`.
*   **Internet Header Length (IHL) (4 bits):** The length of the IP header in 32-bit words. Minimum value is 5 (20 bytes), maximum is 15 (60 bytes).
*   **Type of Service (ToS) / Differentiated Services Code Point (DSCP) (8 bits):** Used to indicate the desired quality of service characteristics (e.g., reliability, delay). While historically used for ToS, it's now largely used for DSCP in modern networks for QoS.
*   **Total Length (16 bits):** The total length of the IP datagram (header + data) in bytes. Maximum value is 65,535 bytes.
*   **Identification (16 bits):** A unique identifier for a group of fragments of a single IP datagram.
*   **Flags (3 bits):**
    *   **Reserved Bit (1 bit):** Must be zero.
    *   **Don't Fragment (DF) (1 bit):** If set, the datagram must not be fragmented.
    *   **More Fragments (MF) (1 bit):** If set, indicates that more fragments follow this one.
*   **Fragment Offset (13 bits):** Indicates the position of this fragment relative to the beginning of the original unfragmented datagram.
*   **Time to Live (TTL) (8 bits):** A counter that limits the number of hops a datagram can take. Each router decrements the TTL. If it reaches zero, the datagram is discarded. This prevents datagrams from endlessly circulating.
*   **Protocol (8 bits):** Identifies the next level protocol that the data field contains (e.g., TCP=6, UDP=17, ICMP=1).
*   **Header Checksum (16 bits):** A checksum calculated over the IP header only. It's recalculated by each router that modifies the header (e.g., decrements TTL).
*   **Source IP Address (32 bits):** The IP address of the sending host.
*   **Destination IP Address (32 bits):** The IP address of the final destination host.
*   **Options (Variable):** Optional fields used for various purposes like source routing, record routing, etc. Not commonly used in modern IPv4.
*   **Padding:** Used to ensure the header length is a multiple of 32 bits when Options are present.
*   **Data (Variable):** The payload from the upper layer protocol (e.g., TCP segment or UDP datagram).

*(Tanenbaum, 5th Ed., Figure 6.4; Forouzan, 5th Ed., Figure 13.4; Stevens, Vol. 1, Chapter 2)*

**Example:**
Imagine a datagram of 576 bytes.
*   Total Length: 576
*   Protocol: 6 (TCP)
*   Source IP: 192.168.1.10
*   Destination IP: 10.0.0.5

---

### **3. IPv4 Addressing**

**3.1. Purpose of IP Addresses**

*   **Unique Identification:** Every device connected to an IP network must have a unique IP address.
*   **Hierarchical Structure:** IP addresses are structured to facilitate routing, allowing routers to make decisions based on network prefixes.
*   **Logical Addressing:** Unlike MAC addresses, IP addresses are not tied to hardware and can be reconfigured or reassigned.

*(Tanenbaum, 5th Ed., Section 6.1; Forouzan, 5th Ed., Section 13.1)*

**3.2. IPv4 Address Structure**

*   **32 bits:** Divided into four octets (bytes), separated by dots (e.g., `192.168.1.1`).
*   **Dot-Decimal Notation:** Human-readable representation of the 32-bit address. Each octet (0-255) is converted to its decimal equivalent.

**Example:**
Binary: `11000000.10101000.00000001.00000001`
Dot-Decimal: `192.168.1.1`

**3.3. IP Address Classes (Legacy)**

Historically, IP addresses were divided into classes based on the first octet. This system is now largely replaced by CIDR, but understanding it is crucial for historical context and some legacy systems.

| Class | First Octet Range | Network ID Length | Host ID Length | Max Hosts per Network | Multicast Group |
| :---- | :---------------- | :---------------- | :------------- | :------------------ | :-------------- |
| **A** | 0 - 127           | 8 bits            | 24 bits        | ~16.7 million       |                 |
| **B** | 128 - 191         | 16 bits           | 16 bits        | 65,534              |                 |
| **C** | 192 - 223         | 24 bits           | 8 bits         | 254                 |                 |
| **D** | 224 - 239         | N/A               | N/A            | N/A                 | Multicast       |
| **E** | 240 - 255         | N/A               | N/A            | N/A                 | Experimental    |

*   **Class A:** First bit is 0. (e.g., `0.0.0.0` to `127.255.255.255`)
*   **Class B:** First two bits are `10`. (e.g., `128.0.0.0` to `191.255.255.255`)
*   **Class C:** First three bits are `110`. (e.g., `192.0.0.0` to `223.255.255.255`)
*   **Class D:** First four bits are `1110`. Used for multicast.
*   **Class E:** First four bits are `1111`. Reserved for experimental use.

**Special Addresses:**

*   **Network Address:** The first address in a block, where the host portion is all zeros. Identifies the network itself (e.g., `192.168.1.0` for the `192.168.1.0/24` network).
*   **Broadcast Address:** The last address in a block, where the host portion is all ones. Used to send a message to all hosts on a specific network (e.g., `192.168.1.255` for the `192.168.1.0/24` network).
*   **Loopback Address:** `127.0.0.1`. Used by a host to send packets to itself, useful for testing network software. The entire `127.0.0.0/8` block is reserved for loopback.
*   **Default Route:** `0.0.0.0`. Used to represent "any" network.

*(Tanenbaum, 5th Ed., Section 6.1.1; Forouzan, 5th Ed., Section 13.1.2)*

**Important Point:** Classful addressing was inefficient as it allocated large blocks of addresses even if only a few were needed.

---

### **4. IPv4 Addressing with CIDR (Classless Inter-Domain Routing)**

CIDR was introduced to overcome the limitations of classful addressing and to better manage the exhaustion of IPv4 addresses.

**4.1. CIDR Notation**

*   **Slash Notation (Prefix Length):** Replaces the class concept. An IP address is followed by a slash `/` and the number of bits used for the **network portion** (prefix).
*   **Variable Length Subnetting (VLSM):** Allows creating subnets of different sizes within a larger network.

**Example:**
*   `192.168.1.0/24`: This represents a network where the first 24 bits identify the network, and the remaining 8 bits identify hosts. This is equivalent to a Class C network.
*   `172.16.0.0/12`: This represents a network where the first 12 bits identify the network. The range of IP addresses would be from `172.16.0.0` to `172.31.255.255`.

*(Tanenbaum, 5th Ed., Section 6.1.2; Forouzan, 5th Ed., Section 13.1.3; Kurose & Ross, 6th Ed., Section 4.2)*

**4.2. Subnetting**

*   **Process:** Dividing a large IP network into smaller, more manageable subnetworks (subnets).
*   **Benefits:**
    *   **Reduces the size of routing tables:** Routers only need to know about the major network address, not every subnet.
    *   **Improves security:** Isolates network traffic.
    *   **Reduces network congestion:** By segmenting the network.
    *   **Efficiently uses IP addresses:** By creating subnets of appropriate sizes.
*   **How it works:** A portion of the host ID is "borrowed" and used as the subnet ID. The subnet mask is updated to reflect this.

**Example: Subnetting a Class B Network**

Consider a Class B network `172.16.0.0/16`. We want to create 50 subnets.
1.  **Determine bits needed for subnets:** To get at least 50 subnets, we need `2^n >= 50`. `2^6 = 64`, so we need 6 bits for the subnet ID.
2.  **Update prefix length:** Original prefix was `/16`. Adding 6 bits for subnetting makes it `/16 + 6 = /22`.
3.  **Subnet Mask:** A `/22` prefix means the first 22 bits are network/subnet. The subnet mask will be `255.255.252.0`.
    *   Binary: `11111111.11111111.11111100.00000000`
4.  **Subnet Addresses:** The first 6 bits of the host portion will form the subnet ID.
    *   Network: `172.16.0.0/22` (Host portion: `000000 0000000000`)
    *   Subnet 1: `172.16.0.0/22` (Subnet ID: `000000`)
    *   Subnet 2: `172.16.4.0/22` (Subnet ID: `000001`)
    *   Subnet 3: `172.16.8.0/22` (Subnet ID: `000010`)
    *   ... and so on. The last usable IP in a subnet is the broadcast address for that subnet.

*(Tanenbaum, 5th Ed., Section 6.1.3; Forouzan, 5th Ed., Section 13.1.4)*

**Important Point:** The subnet mask is crucial for determining whether an IP address belongs to the same subnet or a different one.

---

### **5. IPv4 Fragmentation**

**5.1. Need for Fragmentation**

Different network technologies (e.g., Ethernet, FDDI) have different **Maximum Transmission Unit (MTU)** sizes. If an IP datagram is larger than the MTU of an outgoing link, it must be fragmented into smaller pieces.

**5.2. IPv4 Fragmentation Mechanism**

*   **Fragmentation:** Done by routers when a datagram is too large for the next hop's link.
*   **Reassembly:** Performed by the **destination host**. Routers do not reassemble fragments.
*   **Header Fields Involved:**
    *   **Identification:** All fragments of an original datagram share the same Identification value.
    *   **Flags (MF):**
        *   If `MF=1`, more fragments follow.
        *   If `MF=0`, this is the last fragment.
    *   **Fragment Offset:** Indicates the position of the fragment's data relative to the start of the original data.
    *   **Total Length:** Each fragment has its own `Total Length`.
    *   **Header Checksum:** Recalculated for each fragment.

**Example:**
An IP datagram of 2000 bytes needs to be sent over a network with an MTU of 1000 bytes.
*   Original Datagram (2000 bytes)
    *   ID: X
    *   MF: 0
    *   Offset: 0
*   Fragment 1 (980 bytes data + 20 bytes header = 1000 bytes)
    *   ID: X
    *   MF: 1
    *   Offset: 0
*   Fragment 2 (980 bytes data + 20 bytes header = 1000 bytes)
    *   ID: X
    *   MF: 0
    *   Offset: 120 (since the first fragment contained 980 bytes of data, and data is usually aligned on 8-byte boundaries for fragmentation, the offset is (980 / 8) * 8 = 976 bytes of data, so the next offset is 976). Let's re-evaluate the offset calculation: Fragment offset is measured in units of 8 bytes. If Fragment 1 carries 980 bytes of data, the offset for Fragment 2 will be `(980 bytes) / 8 = 122.5`. So, the offset is 123 units of 8 bytes, meaning `123 * 8 = 984` bytes offset for the data in Fragment 2. The data length in a fragment must be a multiple of 8 bytes, except for the last fragment.
    *   Let's assume the IP header is 20 bytes and the data is 1980 bytes. MTU is 1000 bytes.
    *   Fragment 1: Header (20) + Data (980) = 1000 bytes. Data length = 980 bytes.
        *   ID: X, MF: 1, Offset: 0 (0 * 8 bytes)
    *   Fragment 2: Header (20) + Data (980) = 1000 bytes. Data length = 980 bytes.
        *   ID: X, MF: 0, Offset: 122 (980 bytes of data / 8 bytes per unit = 122.5, rounded down, or the offset indicates the start of the data for this fragment. The previous fragment had 980 bytes of data. So the offset is 980/8 = 122.5, so 123 units of 8 bytes = 984 bytes. For alignment, the data must be a multiple of 8 bytes. Let's assume the data length is adjusted.
        *   **Correct Calculation:** Data length needs to be a multiple of 8. Max data per fragment = 1000 (MTU) - 20 (Header) = 980 bytes.
        *   Fragment 1: Header (20) + Data (980) = 1000 bytes. MF=1, Offset = 0.
        *   Fragment 2: Header (20) + Data (980) = 1000 bytes. MF=0, Offset = 980 / 8 = 122.5. For proper alignment, let's say data length is 976 bytes (multiple of 8).
        *   Fragment 1: Header (20) + Data (980) = 1000 bytes. ID: X, MF: 1, Offset: 0.
        *   Fragment 2: Header (20) + Data (976) = 996 bytes. ID: X, MF: 0, Offset: 980 / 8 = 122.5. The offset is in 8-byte units. So 122 units of 8 bytes = 976 bytes. The offset should be 123 units of 8 bytes for the *next* data block. If Fragment 1 has 980 bytes of data, the next fragment starts at byte 980. Offset = 980 / 8 = 122.5. Let's use 123 for the offset value in the next fragment.
        *   **Fragment 1:** Total Length: 1000, ID: X, MF: 1, Fragment Offset: 0. Carries 980 bytes of data.
        *   **Fragment 2:** Total Length: 996, ID: X, MF: 0, Fragment Offset: 123 (980 / 8 = 122.5, so 123 * 8 = 984 bytes offset). Carries 976 bytes of data.
*   **Destination Host:** Receives Fragment 1 and Fragment 2. Uses the `Identification` field to group them. Uses `MF` flag and `Fragment Offset` to reorder and reassemble the data.

*(Tanenbaum, 5th Ed., Section 6.4; Forouzan, 5th Ed., Section 13.2; Stevens, Vol. 1, Chapter 3)*

**Important Point:** Fragmentation adds overhead and complexity. Ideally, networks should have large MTUs to avoid it.

---

### **6. IPv4 Address Assignment and Configuration**

**6.1. Manual Configuration**

*   Administrators manually configure IP address, subnet mask, default gateway, and DNS server on each host.
*   **Pros:** Precise control.
*   **Cons:** Inefficient for large networks, prone to errors.

**6.2. Dynamic Host Configuration Protocol (DHCP)**

*   **Purpose:** Automatically assigns IP addresses and other network configuration parameters to hosts.
*   **Process (Simplified):**
    1.  **DHCP Discover:** Client broadcasts a discovery message to find DHCP servers.
    2.  **DHCP Offer:** DHCP server(s) respond with an offer of an IP address and other parameters.
    3.  **DHCP Request:** Client selects an offer and requests it.
    4.  **DHCP ACK:** Server acknowledges the request and commits the lease.
*   **Benefits:** Simplifies network administration, prevents duplicate IP addresses.

*(Forouzan, 5th Ed., Section 20.3)*

**6.3. Automatic Private IP Addressing (APIPA)**

*   Used when a host cannot reach a DHCP server.
*   The host automatically assigns itself an IP address in the `169.254.0.0/16` range.
*   It also picks a subnet mask (`255.255.0.0`).
*   The host then checks if the chosen IP address is already in use on the local network.

*(Kurose & Ross, 6th Ed., Chapter 4)*

---

### **7. Internet Control Message Protocol (ICMP)**

**7.1. Purpose of ICMP**

*   Used by IP to send error messages and diagnostic information.
*   It's a control protocol, not a transport protocol. ICMP messages are encapsulated within IP datagrams.
*   **Examples of ICMP Messages:**
    *   **Destination Unreachable:** Sent by a router or host when a datagram cannot be delivered (e.g., host unreachable, network unreachable, port unreachable).
    *   **Time Exceeded:** Sent by a router when the TTL field of a datagram becomes zero, or by a host when reassembling fragments (although this is less common).
    *   **Echo Request/Reply:** Used by the `ping` utility to test reachability.
    *   **Redirect:** Sent by a router to inform a host of a better route to a destination.
    *   **Source Quench:** (Deprecated) Used to signal congestion at the destination.

*(Tanenbaum, 5th Ed., Section 6.3; Forouzan, 5th Ed., Section 13.5; Kurose & Ross, 6th Ed., Section 4.3)*

**7.2. ICMP Message Format**

*   **Type:** Identifies the ICMP message (e.g., 8 for Echo Request, 0 for Echo Reply, 3 for Destination Unreachable).
*   **Code:** Provides more specific information about the type (e.g., for Destination Unreachable, codes include 0 for network unreachable, 1 for host unreachable, 3 for port unreachable).
*   **Checksum:** For error detection in the ICMP header and data.
*   **Rest of Header:** Contains fields specific to the message type (e.g., Identifier and Sequence Number for Echo Request/Reply).
*   **Original Datagram:** The IP header and first 8 bytes of the data of the datagram that caused the error.

**Example: Ping Command (`ping google.com`)**

1.  Your host sends an ICMP **Echo Request** (Type 8) datagram to `google.com`.
2.  If `google.com` is reachable and configured to respond, it sends back an ICMP **Echo Reply** (Type 0) datagram to your host.
3.  If a router along the path discards the Echo Request because the destination is unreachable, it might send an ICMP **Destination Unreachable** message back to your host.

*(Forouzan, 5th Ed., Figure 13.11)*

---

### **8. Routing Algorithms and Concepts**

*(This section aligns with CO3 and provides context for the Network Layer's core function.)*

**8.1. Routing Table**

*   A table stored in routers that contains information about known networks.
*   Each entry typically includes: Destination Network Address, Network Mask, Next Hop Address, Interface.
*   Routers use the destination IP address of an incoming packet and compare it with entries in their routing table to determine the next hop.

**8.2. Static vs. Dynamic Routing**

*   **Static Routing:** Routes are manually configured by an administrator.
    *   **Pros:** Simple for small, stable networks; predictable.
    *   **Cons:** Difficult to manage in large or dynamic networks; does not adapt to network changes automatically.
*   **Dynamic Routing:** Routers automatically learn about network topology and available routes from other routers using routing protocols.
    *   **Pros:** Adapts to network changes; scalable.
    *   **Cons:** More complex to configure and manage; can introduce overhead.

**8.3. Routing Protocols**

These protocols are used to exchange routing information between routers. They fall into two main categories:

*   **Interior Gateway Protocols (IGPs):** Used within an Autonomous System (AS - a collection of networks under a single administrative domain).
    *   **Distance Vector Protocols:** (e.g., RIP, EIGRP) Routers share their entire routing table with neighbors. They rely on the "Bellman-Ford" algorithm.
        *   **Convergence:** The time it takes for all routers to agree on the network topology.
        *   **Count-to-Infinity:** A problem where routes can take a long time to converge, potentially causing routing loops.
    *   **Link-State Protocols:** (e.g., OSPF, IS-IS) Routers exchange information about their own links and neighbors. Each router builds a complete map of the network topology. They rely on the "Dijkstra" algorithm (Shortest Path First).
        *   **Faster Convergence:** Generally converge faster than distance vector protocols.
        *   **Less Overhead:** Broadcasts link-state information only when changes occur.
*   **Exterior Gateway Protocols (EGPs):** Used between different Autonomous Systems.
    *   **Border Gateway Protocol (BGP):** The de facto standard EGP used on the Internet. It's a path-vector protocol that exchanges reachability information rather than just distance metrics. It makes routing decisions based on policies and path attributes.

*(Tanenbaum, 5th Ed., Chapter 8; Forouzan, 5th Ed., Chapter 14; Peterson & Dave, 5th Ed., Chapters 4 & 5)*

**CO3 Alignment:** This section directly addresses explaining routing algorithms and external routing protocols.

---

### **9. Quality of Service (QoS) and Congestion Control**

*(This section aligns with CO3 and is a key Network Layer design issue.)*

**9.1. Quality of Service (QoS)**

*   **Definition:** A set of technologies that manage traffic to reduce packet loss, latency, and jitter on a network.
*   **Mechanisms:**
    *   **Traffic Policing:** Dropping or re-marking packets that exceed a defined rate.
    *   **Traffic Shaping:** Buffering excess packets to smooth out traffic bursts.
    *   **Congestion Avoidance:** Algorithms (e.g., RED - Random Early Detection) that start dropping packets proactively before the buffer is full.
    *   **Queuing Disciplines:** (e.g., FIFO, Priority Queuing, Weighted Fair Queuing) how packets are buffered and scheduled for transmission.
*   **IPv4 Relevance:** The **Type of Service (ToS) field** (now DSCP) in the IPv4 header can be used to signal QoS requirements.

*(Tanenbaum, 5th Ed., Chapter 8; Forouzan, 5th Ed., Section 14.5; Keshav, 1998, Chapter 7)*

**9.2. Congestion Control**

*   **Definition:** Techniques to prevent and manage network congestion (when the demand for network resources exceeds the available capacity).
*   **Mechanisms:**
    *   **Router Buffers:** Temporary storage for packets.
    *   **Packet Dropping:** Routers discard packets when buffers are full.
    *   **Congestion Notification:** Mechanisms like ICMP Source Quench (deprecated) or TCP's congestion window.
*   **End-to-End Congestion Control:** Implemented by end hosts (e.g., TCP's AIMD - Additive Increase, Multiplicative Decrease).

*(Tanenbaum, 5th Ed., Section 7.7; Forouzan, 5th Ed., Section 15.3; Keshav, 1998, Chapter 5)*

**CO3 Alignment:** This section directly addresses explaining congestion control algorithms and ways to achieve good quality of service.

---

### **10. Network Address Translation (NAT)**

*   **Purpose:** To conserve public IPv4 addresses by allowing multiple devices on a private network to share a single public IP address.
*   **How it works:** A NAT device (usually a router or firewall) modifies the source IP address and/or port number of outgoing packets and the destination IP address and/or port number of incoming packets.
*   **Types of NAT:**
    *   **Static NAT:** Maps a private IP address to a specific public IP address (one-to-one mapping).
    *   **Dynamic NAT:** Maps private IP addresses to public IP addresses from a pool.
    *   **Port Address Translation (PAT) / NAT Overload:** Maps multiple private IP addresses to a single public IP address, differentiating sessions using different port numbers. This is the most common form.

**Example:**
A home network with devices `192.168.1.10`, `192.168.1.11`, etc., all connect to the internet through a router with public IP `203.0.113.5`.
When `192.168.1.10` sends a request to `www.example.com`, the router changes the source IP from `192.168.1.10` to `203.0.113.5` and assigns a unique source port (e.g., `54321`). The destination sees the packet originating from `203.0.113.5:54321`. When the response arrives at `203.0.113.5`, the router uses its NAT table to translate the destination port back to `192.168.1.10` and forwards it to the correct internal device.

*(Tanenbaum, 5th Ed., Section 6.1.4; Forouzan, 5th Ed., Section 13.1.6; Kurose & Ross, 6th Ed., Chapter 4)*

**Important Point:** NAT can break some end-to-end protocols and makes direct inbound connections more complex to manage.

---

### **11. IPv4 Address Exhaustion and Transition to IPv6**

*   **Problem:** The 32-bit IPv4 address space (approximately 4.3 billion addresses) has been largely depleted due to the massive growth of the internet and the increasing number of connected devices.
*   **Mitigation Techniques:**
    *   **CIDR:** Improved address allocation efficiency.
    *   **NAT:** Conserves public addresses.
    *   **Private IP Addressing:** Allows extensive use of non-routable addresses internally.
*   **The Solution: IPv6:**
    *   **128-bit addresses:** Provides a vastly larger address space (2^128).
    *   **Simplified Header:** More efficient processing.
    *   **Built-in Security (IPsec):** Mandatory.
    *   **Improved QoS mechanisms.**
*   **Transition:** Mechanisms like dual-stack (running both IPv4 and IPv6), tunneling, and translation are used to facilitate the transition.

*(Tanenbaum, 5th Ed., Section 6.1.5; Forouzan, 5th Ed., Section 13.7; Kurose & Ross, 6th Ed., Chapter 5)*

---

### **Important Points to Remember**

*   **IPv4 is connectionless and unreliable.**
*   **IP addresses provide logical addressing.**
*   **CIDR is the modern approach to IP addressing, replacing classful addressing.**
*   **Subnetting helps manage and optimize IP address usage.**
*   **Fragmentation is necessary when datagrams exceed MTU, but it adds overhead.**
*   **ICMP is crucial for error reporting and diagnostics.**
*   **Routers use routing tables to forward IP datagrams.**
*   **QoS and Congestion Control are vital network layer design issues.**
*   **NAT is a mechanism to conserve IPv4 addresses.**
*   **IPv4 address exhaustion is a major driver for the adoption of IPv6.**

---

### **Practice Questions**

**Q1. (CO3) What is the primary purpose of the Time to Live (TTL) field in an IPv4 header?**
    a) To indicate the remaining time for the packet to live.
    b) To limit the number of hops a packet can take before being discarded.
    c) To specify the time when the packet was sent.
    d) To indicate the time the packet arrived at the destination.

**Q2. (CO3) A router receives an IP datagram with a Destination IP address of `192.168.10.50`. The router's routing table has the following entries:**
    *   `192.168.8.0/22` via `10.0.0.1`
    *   `192.168.11.0/24` via `10.0.0.2`
    *   `192.168.0.0/16` via `10.0.0.3`

    **What is the longest prefix match for the destination IP address, and which interface will the router use to forward the packet?**

**Q3. (CO3) Explain the difference between distance-vector and link-state routing protocols, providing an example of each.**

**Q4. (CO1) What is the size of an IPv4 header in bytes, assuming no optional fields are present?**

**Q5. (CO3) Describe the role of ICMP messages like "Destination Unreachable" and "Echo Request."**

**Q6. (CO3) How does Network Address Translation (NAT) help in conserving IPv4 addresses?**

---

### **Answers to Practice Questions**

**A1:** **b) To limit the number of hops a packet can take before being discarded.**
    *   *Explanation:* The TTL field is decremented by each router. If it reaches zero, the packet is discarded, preventing it from circulating endlessly in the network.

**A2:**
    *   **Longest Prefix Match:** `192.168.11.0/24`
    *   **Interface:** via `10.0.0.2`
    *   *Explanation:* The router compares the destination IP address (`192.168.10.50`) against its routing table entries.
        *   `192.168.8.0/22`: Network is `192.168.8.0` to `192.168.11.255`. Matches. Prefix length = 22.
        *   `192.168.11.0/24`: Network is `192.168.11.0` to `192.168.11.255`. Matches. Prefix length = 24.
        *   `192.168.0.0/16`: Network is `192.168.0.0` to `192.168.255.255`. Matches. Prefix length = 16.
    The longest prefix match is `/24`, so the router uses the route `192.168.11.0/24` via `10.0.0.2`.

**A3:**
    *   **Distance-Vector Routing Protocols:** Routers exchange their entire routing tables with directly connected neighbors periodically. They rely on the "distance" (metric, e.g., hop count) to a destination. Example: **RIP (Routing Information Protocol)**.
    *   **Link-State Routing Protocols:** Routers exchange information about their own directly connected links and neighbors. Each router builds a complete map of the network topology and then runs an algorithm (like Dijkstra's) to calculate the shortest path to all destinations. Example: **OSPF (Open Shortest Path First)**.

**A4:** The standard IPv4 header without options is **20 bytes**.

**A5:**
    *   **Destination Unreachable:** This ICMP message is sent by a router or the destination host to indicate that a datagram could not be delivered to its destination. Common reasons include network unreachable, host unreachable, or port unreachable. It helps the sender diagnose connectivity issues.
    *   **Echo Request:** This ICMP message is used by utilities like `ping` to test the reachability of a host. The destination host should respond with an Echo Reply message if it receives the Echo Request.

**A6:** NAT allows multiple devices on a private network (using private IP addresses like 192.168.x.x) to share a single public IP address when accessing the internet. The NAT device translates the private source IP addresses to the single public IP address and uses port numbers to keep track of individual connections. This significantly reduces the demand for unique public IPv4 addresses.

---

This comprehensive set of notes covers the key aspects of the IPv4 protocol within the context of network layer design issues, aligning with the provided learning and course outcomes. Remember to consult the specified textbooks for deeper understanding and more detailed explanations.
