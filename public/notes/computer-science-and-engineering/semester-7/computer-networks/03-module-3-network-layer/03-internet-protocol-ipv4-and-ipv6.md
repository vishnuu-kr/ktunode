---
title: "Internet Protocol- IPV4 and IPv6"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c934"
status: "completed"
scrapedAt: "2026-05-20T17:02:47.704Z"
---
# Computer Networks: Module 3 - Network Layer

## Topic: Internet Protocol (IP) - IPv4 and IPv6

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the role of the Internet Protocol (IP) in network communication.
*   Describe the fundamental structure and addressing scheme of IPv4.
*   Explain the limitations of IPv4 and the reasons for the development of IPv6.
*   Describe the fundamental structure and addressing scheme of IPv6.
*   Compare and contrast IPv4 and IPv6, highlighting key differences and advantages of IPv6.
*   Understand the process of IP addressing and subnetting in IPv4.
*   Understand the concept of IP multicast and broadcast.

---

### 1. The Role of the Internet Protocol (IP)

*   **Core Function:** IP is the **primary protocol** responsible for **addressing, routing, and delivering packets of data** across networks, including the internet. It operates at the **Network Layer (Layer 3)** of the OSI model.
*   **Connectionless:** IP is a **connectionless** protocol. This means that each IP packet is treated independently, and there is no prior setup of a connection before sending data.
*   **Best-Effort Delivery:** IP provides **best-effort delivery**. It does not guarantee that packets will arrive, nor does it guarantee that they will arrive in the correct order or without duplication. Higher-layer protocols (like TCP) are responsible for reliability.
*   **Logical Addressing:** IP uses **logical addresses** (IP addresses) to uniquely identify devices on a network, regardless of their physical hardware addresses (MAC addresses). This allows for routing across different network types.
*   **Packet Switching:** IP enables **packet switching**, where data is broken down into smaller units called packets. These packets can travel along different paths to reach their destination and are reassembled at the receiving end.

---

### 2. Internet Protocol Version 4 (IPv4)

#### 2.1 Structure and Addressing Scheme

*   **Address Length:** IPv4 addresses are **32 bits long**.
*   **Representation:** Typically represented in **dotted-decimal notation**, with four octets (8-bit numbers) separated by dots (e.g., `192.168.1.1`).
*   **Address Space:** Provides approximately **4.3 billion unique addresses** (2^32).
*   **Address Components:**
    *   **Network Portion:** Identifies the specific network to which a device belongs.
    *   **Host Portion:** Identifies a specific device within that network.
*   **Classful Addressing (Historical):** Initially, IPv4 used a system of **address classes** (A, B, C, D, E) based on the most significant bits of the address. This system has largely been replaced by Classless Inter-Domain Routing (CIDR).

    | Class | First Octet Range | Network Bits | Host Bits | Number of Networks | Number of Hosts per Network |
    | :---- | :---------------- | :----------- | :-------- | :----------------- | :-------------------------- |
    | A     | 1-126             | 8            | 24        | 126                | 16,777,214                  |
    | B     | 128-191           | 16           | 16        | 16,384             | 65,534                      |
    | C     | 192-223           | 24           | 8         | 2,097,152          | 254                         |
    | D     | 224-239           | (Multicast)  | (Multicast) | (Multicast)        | (Multicast)                 |
    | E     | 240-255           | (Reserved)   | (Reserved) | (Reserved)         | (Reserved)                  |

*   **Classless Inter-Domain Routing (CIDR):**
    *   A method to allocate IP addresses and route IP packets more efficiently.
    *   Eliminates the concept of IP address classes.
    *   Uses **prefix notation** (e.g., `192.168.1.0/24`) where the number after the slash indicates the number of bits used for the network portion.
    *   Allows for more flexible subnetting and aggregation of IP addresses, reducing the size of routing tables.

#### 2.2 Private and Public IP Addresses

*   **Public IP Addresses:**
    *   Globally unique and routable on the internet.
    *   Assigned by Internet Service Providers (ISPs).
    *   Example: `8.8.8.8` (Google DNS)
*   **Private IP Addresses:**
    *   Used within private networks (e.g., home, office) and are **not routable on the internet**.
    *   Reserved ranges defined by RFC 1918:
        *   `10.0.0.0` to `10.255.255.255` (Class A)
        *   `172.16.0.0` to `172.31.255.255` (Class B)
        *   `192.168.0.0` to `192.168.255.255` (Class C)
    *   **Network Address Translation (NAT):** A technique used to map private IP addresses to public IP addresses, allowing multiple devices in a private network to share a single public IP address.

#### 2.3 Special IP Addresses

*   **Loopback Address:** `127.0.0.1` (and the entire `127.0.0.0/8` block). Used for testing network configurations on the local machine.
*   **Default Gateway:** The IP address of the router that connects a local network to other networks (e.g., the internet).
*   **Broadcast Address:** Used to send a packet to all devices on a specific network. The host portion is all 1s. For example, `192.168.1.255` for the `192.168.1.0/24` network.
*   **Network Address:** The first address in an IP network, where the host portion is all 0s. Used to identify the network itself. For example, `192.168.1.0` for the `192.168.1.0/24` network.

#### 2.4 Limitations of IPv4

*   **Address Exhaustion:** The primary limitation is the **limited number of available addresses** (4.3 billion), which has been insufficient to support the rapidly growing number of internet-connected devices.
*   **Complex Routing Tables:** The sheer number of unique IP addresses has led to large and complex routing tables, making routing less efficient.
*   **Lack of Built-in Security:** IPv4 does not have inherent security features. Security is often implemented at higher layers.
*   **NAT Dependency:** The widespread use of NAT, while extending IPv4's life, introduces complexity and can hinder certain peer-to-peer applications.
*   **No Built-in Mobility:** No inherent support for mobile devices moving between networks.

---

### 3. Internet Protocol Version 6 (IPv6)

#### 3.1 Motivation for IPv6

*   **Address Exhaustion:** The most significant driver for IPv6 was the impending exhaustion of IPv4 addresses.
*   **Improved Routing Efficiency:** Designed to simplify routing table management.
*   **Enhanced Security:** Includes built-in support for IPsec (Internet Protocol Security).
*   **Autoconfiguration:** Simplifies network administration by allowing devices to configure their IP addresses automatically.
*   **Better Support for Mobility:** Designed with mobile devices in mind.
*   **Quality of Service (QoS):** Improved mechanisms for prioritizing traffic.

#### 3.2 Structure and Addressing Scheme

*   **Address Length:** IPv6 addresses are **128 bits long**.
*   **Representation:** Typically represented in **hexadecimal notation**, with eight groups of four hexadecimal digits separated by colons (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).
*   **Address Space:** Provides an astronomically large number of addresses (2^128), effectively eliminating address exhaustion concerns.
*   **Address Compression Rules:**
    *   **Leading Zeros Omission:** Leading zeros in each group can be omitted (e.g., `0db8` can be written as `db8`).
    *   **Consecutive Zero Group Omission:** One or more consecutive groups of all zeros can be replaced by a double colon (`::`), but this can only be done **once** per address.
        *   Example: `2001:0db8:0000:0000:0000:8a2e:0370:7334` can be compressed to `2001:db8::8a2e:370:7334`.
        *   Example: `2001:db8:0000:0000:1234:0000:0000:5678` can be compressed to `2001:db8::1234:0:0:5678` or `2001:db8:0:0:1234::5678`.
*   **IPv6 Address Components:**
    *   **Global Routing Prefix:** Assigned by the ISP to an organization.
    *   **Subnet ID:** Used to identify subnets within an organization.
    *   **Interface ID:** Identifies a specific interface on a link.

#### 3.3 Types of IPv6 Addresses

*   **Unicast Address:** Identifies a single interface.
    *   **Global Unicast:** Routable on the internet. Similar to public IPv4 addresses.
        *   Example: `2001:db8::/32` is a common prefix used for documentation.
    *   **Link-Local Unicast:** Used for communication on a single network link (e.g., between devices connected to the same switch). Automatically configured using the `fe80::/10` prefix. These addresses are not routable beyond the link.
        *   Example: `fe80::a00:27ff:fe8f:1234`
    *   **Unique Local Unicast (ULA):** Used for private networks, similar to private IPv4 addresses. Assigned from the `fc00::/7` prefix.
*   **Multicast Address:** Identifies a group of interfaces. Used for one-to-many communication. Multicast addresses begin with `ff00::/8`.
    *   Example: `ff02::1` (all nodes on the link)
*   **Anycast Address:** Identifies a set of interfaces, but a packet sent to an anycast address is delivered to **only one** of the interfaces in the set, typically the closest one according to routing protocols.

#### 3.4 Key Features of IPv6

*   **Simplified Header:** The IPv6 header is simpler and more efficient than the IPv4 header, with fewer fields. This allows for faster processing by routers.
*   **No Broadcasts:** IPv6 replaces broadcast with **multicast**.
*   **Autoconfiguration (SLAAC - Stateless Address Autoconfiguration):** Devices can automatically configure their IP addresses and default gateway without requiring a DHCP server.
*   **IPsec Support:** IPsec is integrated into IPv6, providing authentication and encryption by default.
*   **Flow Label:** A field in the IPv6 header that can be used to label sequences of packets belonging to the same "flow" (e.g., a real-time audio or video stream), allowing for QoS prioritization.

---

### 4. Comparison of IPv4 and IPv6

| Feature              | IPv4                                 | IPv6                                         |
| :------------------- | :----------------------------------- | :------------------------------------------- |
| **Address Length**   | 32 bits                              | 128 bits                                     |
| **Address Format**   | Dotted-decimal (e.g., 192.168.1.1)   | Hexadecimal, colon-separated (e.g., 2001:db8::1) |
| **Address Space**    | ~4.3 billion                         | ~340 undecillion (vastly larger)             |
| **Configuration**    | Manual or DHCP                       | SLAAC (Stateless Autoconfiguration), DHCPv6  |
| **Security**         | Optional (IPsec add-on)              | Built-in (IPsec required)                    |
| **Header Complexity**| More fields, less efficient          | Simplified, more efficient                   |
| **Broadcast**        | Supported                            | Replaced by Multicast                        |
| **NAT**              | Widely used to conserve addresses    | Not as necessary due to vast address space   |
| **Mobility**         | Limited native support               | Enhanced native support                      |
| **QoS**              | Limited native support               | Built-in Flow Label for QoS                  |
| **Checksum**         | In header, processed by routers      | Removed from header (handled by higher layers) |

---

### 5. IP Addressing and Subnetting (IPv4)

*   **IP Address:** A unique logical identifier for a device on a network.
*   **Subnet Mask:** A 32-bit number used to divide an IP address into its network and host portions.
    *   Bits set to `1` represent the network portion.
    *   Bits set to `0` represent the host portion.
*   **Subnetting:** The process of dividing a large IP network into smaller subnetworks (subnets).
    *   **Benefits:**
        *   **Improved Network Performance:** Reduces broadcast domain size, leading to less network congestion.
        *   **Better Security:** Allows for isolation of network segments.
        *   **More Efficient IP Address Usage:** Enables better allocation of IP addresses.
*   **Calculating Subnets:**
    1.  **Determine the number of bits to "borrow"** from the host portion to create subnets.
    2.  **Calculate the number of subnets:** `2^n` where `n` is the number of borrowed bits.
    3.  **Calculate the number of hosts per subnet:** `2^m - 2` where `m` is the number of remaining bits in the host portion. (Subtract 2 for the network address and broadcast address).

#### Example: Subnetting a `192.168.1.0/24` Network

Let's say we want to create 4 subnets from `192.168.1.0/24`.

1.  **Borrow bits:** To create 4 subnets, we need `2^n = 4`. This means we need to borrow **2 bits** from the host portion.
2.  **New Subnet Mask:** The original mask is `/24` (255.255.255.0). Borrowing 2 bits from the last octet (which has 8 host bits) means the new network portion will be 24 + 2 = 26 bits.
    *   New Subnet Mask: `/26` (255.255.255.192)
3.  **Number of Subnets:** `2^2 = 4` subnets.
4.  **Number of Hosts per Subnet:** The remaining host bits are 32 - 26 = 6.
    *   Number of hosts = `2^6 - 2 = 64 - 2 = 62` hosts per subnet.

**Subnets:**

| Subnet ID        | Network Address | Subnet Mask     | Broadcast Address | Usable Host Range      |
| :--------------- | :-------------- | :-------------- | :---------------- | :--------------------- |
| Subnet 0         | `192.168.1.0`   | `255.255.255.192` | `192.168.1.63`    | `192.168.1.1 - 192.168.1.62` |
| Subnet 1         | `192.168.1.64`  | `255.255.255.192` | `192.168.1.127`   | `192.168.1.65 - 192.168.1.126` |
| Subnet 2         | `192.168.1.128` | `255.255.255.192` | `192.168.1.191`   | `192.168.1.129 - 192.168.1.190` |
| Subnet 3         | `192.168.1.192` | `255.255.255.192` | `192.168.1.255`   | `192.168.1.193 - 192.168.1.254` |

---

### 6. IP Multicast and Broadcast

#### 6.1 Broadcast

*   **Purpose:** To send a single packet to all devices on a specific network segment.
*   **IPv4:** Uses a **limited broadcast address** (`255.255.255.255`) for local network broadcasts and **directed broadcast addresses** (e.g., `192.168.1.255` for the `192.168.1.0/24` network) to broadcast to a specific network.
*   **Disadvantages:**
    *   Can lead to network congestion as all devices on the segment must process the broadcast.
    *   Often blocked by routers to prevent propagation across the internet.

#### 6.2 Multicast

*   **Purpose:** To send a single packet to a group of devices that have subscribed to a particular multicast group. This is a **one-to-many** communication.
*   **IPv4:** Uses Class D addresses (range `224.0.0.0` to `239.255.255.255`).
    *   **Special multicast addresses:**
        *   `224.0.0.1`: All hosts on the local network.
        *   `224.0.0.2`: All routers on the local network.
*   **IPv6:** Multicast is a fundamental feature. IPv6 multicast addresses start with `ff00::/8`.
    *   **How it works:** Devices interested in receiving multicast traffic join a multicast group. Routers use multicast routing protocols (like PIM - Protocol Independent Multicast) to efficiently deliver multicast packets only to network segments where there are subscribers.
*   **Advantages:**
    *   **Efficient Bandwidth Usage:** Reduces network traffic by sending data only to interested recipients.
    *   **Scalability:** More scalable than broadcast.
*   **Examples:** Streaming media, online gaming, software updates.

---

### Important Points to Remember:

*   **IP is the backbone of internet routing.**
*   **IPv4 is facing address exhaustion**, leading to the widespread adoption of IPv6.
*   **IPv6 has a much larger address space and simplified header.**
*   **CIDR revolutionized IPv4 routing and allocation.**
*   **NAT is crucial for extending IPv4's lifespan but adds complexity.**
*   **Subnetting is essential for efficient IPv4 network management.**
*   **Multicast is a more efficient alternative to broadcast for one-to-many communication.**
*   **IPsec is built into IPv6 for enhanced security.**
*   **SLAAC simplifies IPv6 device configuration.**

---

### Practice Questions:

1.  What is the primary function of the Internet Protocol (IP) in a network?
2.  Explain the difference between connectionless and connection-oriented protocols, and state which category IP falls into.
3.  What is the size of an IPv4 address, and how is it typically represented?
4.  What is the main limitation of IPv4, and what solution has been developed to address it?
5.  What is the size of an IPv6 address, and what are the two rules for compressing IPv6 addresses?
6.  What are the three types of IPv6 unicast addresses, and for what purpose is each used?
7.  How does IPv6 handle broadcast traffic, and why is this considered an improvement?
8.  Explain the purpose of a subnet mask in IPv4.
9.  You are given the IP address `172.16.10.5` with a subnet mask of `255.255.240.0`.
    *   What is the network address of this IP?
    *   How many bits are used for the network portion?
    *   How many bits are used for the host portion?
    *   What is the maximum number of hosts that can be supported on this network?
10. What is the advantage of using multicast over broadcast for sending data to multiple recipients?

---

### Answers:

1.  The primary function of the Internet Protocol (IP) is to provide a **logical addressing system** for devices on a network and to **route packets of data** from a source host to a destination host across interconnected networks (like the internet).
2.  **Connectionless protocols** (like IP) send packets without establishing a connection beforehand, treating each packet independently. **Connection-oriented protocols** (like TCP) establish a reliable connection before data transfer. IP is a **connectionless** protocol.
3.  An IPv4 address is **32 bits long** and is typically represented in **dotted-decimal notation** (e.g., `192.168.1.1`).
4.  The main limitation of IPv4 is **address exhaustion** due to the limited 32-bit address space. The solution developed to address this is **IPv6**.
5.  An IPv6 address is **128 bits long**. The two rules for compressing IPv6 addresses are:
    *   **Omit leading zeros** in any group.
    *   **Replace consecutive groups of all zeros with a double colon (`::`)**, but this can only be done **once** per address.
6.  The three types of IPv6 unicast addresses are:
    *   **Global Unicast:** Routable on the internet, similar to public IPv4 addresses.
    *   **Link-Local Unicast:** Used for communication on a single network link, automatically configured with the `fe80::/10` prefix.
    *   **Unique Local Unicast (ULA):** Used for private networks, similar to private IPv4 addresses, assigned from the `fc00::/7` prefix.
7.  IPv6 replaces broadcast traffic with **multicast**. This is an improvement because multicast traffic is sent only to devices that have subscribed to a specific multicast group, making it more efficient and reducing unnecessary network traffic and processing by devices that are not interested in the data.
8.  In IPv4, a subnet mask is a 32-bit number used to divide an IP address into its **network portion** and its **host portion**. The bits set to `1` in the subnet mask indicate the network bits, and the bits set to `0` indicate the host bits.
9.  Given IP `172.16.10.5` and mask `255.255.240.0`:
    *   The subnet mask `255.255.240.0` in binary is `11111111.11111111.11110000.00000000`.
    *   **Network Address:** To find the network address, perform a bitwise AND operation between the IP address and the subnet mask.
        *   IP: `10101100.00010000.00001010.00000101`
        *   Mask: `11111111.11111111.11110000.00000000`
        *   AND: `10101100.00010000.00000000.00000000`
        *   Decimal: `172.16.0.0`
        Therefore, the network address is **`172.16.0.0`**.
    *   **Network Bits:** The subnet mask has 20 bits set to `1` (8 + 8 + 4). So, **20 bits** are used for the network portion.
    *   **Host Bits:** The remaining bits are for the host portion: 32 - 20 = **12 bits**.
    *   **Maximum Hosts:** The maximum number of hosts is `2^m - 2`, where `m` is the number of host bits. So, `2^12 - 2 = 4096 - 2 = **4094**` hosts.
10. The advantage of using multicast over broadcast is **network efficiency and bandwidth conservation**. Instead of sending a copy of the data to every device on a network segment (which requires every device to process it), multicast sends a single packet that is intelligently routed only to devices that have explicitly subscribed to the multicast group. This significantly reduces network traffic and the processing load on devices that do not need the data.
