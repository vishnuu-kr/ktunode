---
title: "IP addresses"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36489"
status: "completed"
scrapedAt: "2026-05-23T16:20:15.973Z"
---
# Computer Network Systems - Module 3: Network Layer Design Issues - IP Addresses

## Introduction to IP Addresses

IP (Internet Protocol) addresses are fundamental to the functioning of the internet and most private networks. They provide a logical addressing scheme that allows devices to be uniquely identified and located for communication across networks. This topic delves into the design issues surrounding IP addressing, its structure, and evolution.

---

## 1. IP Address Structure and Evolution

IP addresses are the primary addressing mechanism at the Network Layer. They are used to uniquely identify a host on the internet.

### 1.1. IPv4 Addresses (IP Version 4)

*   **Structure:** A 32-bit numerical address written in dotted-decimal notation.
    *   Consists of four octets (8-bit numbers) separated by dots.
    *   Each octet ranges from 0 to 255.
    *   Example: `192.168.1.1`

*   **Assignment:** IP addresses are assigned by the Internet Assigned Numbers Authority (IANA) to Regional Internet Registries (RIRs), which then allocate them to Internet Service Providers (ISPs) and other organizations.

*   **Address Space Exhaustion:** The 32-bit structure of IPv4 allows for approximately 4.3 billion unique addresses, which proved insufficient with the explosive growth of the internet.

*   **Key Concept (Tanenbaum, 5th Ed.):** "An IP address is a logical address that uniquely identifies a host on the Internet."

*   **Key Concept (Forouzan, 5th Ed.):** "An IPv4 address is a 32-bit number that uniquely identifies a host connected to the Internet."

### 1.2. IPv6 Addresses (IP Version 6)

*   **Purpose:** Developed to address the IPv4 address space exhaustion.
*   **Structure:** A 128-bit numerical address written in hexadecimal notation.
    *   Divided into eight groups of four hexadecimal digits, separated by colons.
    *   Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Shorthand Notations:**
    *   Leading zeros in a group can be omitted: `2001:db8:85a3:0:0:8a2e:370:7334`
    *   One or more consecutive groups of zeros can be replaced by a double colon (`::`), but only once in an address: `2001:db8:85a3::8a2e:370:7334`
*   **Address Space:** Provides a vastly larger address space, effectively eliminating the concerns of exhaustion for the foreseeable future.
*   **Key Concept (Kurose & Ross, 6th Ed.):** "IPv6 was developed to address the exhaustion of IPv4 addresses, providing a much larger address space."

---

## 2. IP Address Classes (IPv4)

In the early days of the internet, IP addresses were divided into classes based on the most significant bits of the address. This provided a simple way to distinguish between network and host portions of the address.

### 2.1. Classful Addressing

*   **Concept:** A fixed portion of the address was designated for the network ID, and the remaining portion was for the host ID. The class of the address determined the size of the network and host portions.
*   **Classes and Their Ranges:**

    | Class | First Octet Range | Network Portion | Host Portion | Max Networks | Max Hosts per Network |
    | :---- | :---------------- | :-------------- | :----------- | :----------- | :-------------------- |
    | A     | 1-126             | First 8 bits    | Last 24 bits | 126          | ~16.7 million         |
    | B     | 128-191           | First 16 bits   | Last 16 bits | 16,384       | 65,534                |
    | C     | 192-223           | First 24 bits   | Last 8 bits  | ~2 million   | 254                   |
    | D     | 224-239           | Reserved for Multicast | -            | -            | -                     |
    | E     | 240-255           | Reserved for Experimental Use | -            | -            | -                     |

*   **Special Addresses:**
    *   **Network Address:** The first address in a block, where the host portion is all zeros (e.g., `192.168.1.0` for the `192.168.1.0/24` network). This identifies the network itself.
    *   **Broadcast Address:** The last address in a block, where the host portion is all ones (e.g., `192.168.1.255` for the `192.168.1.0/24` network). Used to send a message to all hosts on a network.
    *   **Loopback Address:** `127.0.0.1` (and the entire `127.0.0.0/8` range). Used for testing network software on the local machine.

*   **Key Concept (Tanenbaum, 5th Ed.):** "Classful addressing was an early attempt to manage the IPv4 address space by dividing it into fixed-size blocks."

*   **Key Concept (Forouzan, 5th Ed.):** "In classful addressing, the first few bits of the IP address define the class, which in turn determines the network and host portions."

### 2.2. Limitations of Classful Addressing

*   **Inefficiency:** Many organizations needed only a small number of IP addresses but were assigned entire Class C blocks (254 hosts), leading to significant waste. Conversely, large organizations requiring more than 254 hosts had to obtain Class B blocks, which were much larger and also prone to waste.
*   **Routing Table Bloat:** The limited number of network addresses in Class A and B led to the creation of many smaller networks, increasing the size of routing tables in routers.

---

## 3. IP Addressing Without Classes (Classless)

The limitations of classful addressing led to the development of a more flexible and efficient addressing scheme.

### 3.1. CIDR (Classless Inter-Domain Routing)

*   **Concept:** CIDR removes the concept of IP address classes. Instead, it uses a **prefix length** (also known as a subnet mask) to indicate where the network portion of the address ends and the host portion begins.
*   **Notation:** `IP Address / Prefix Length`
    *   Example: `192.168.1.0 / 24`
    *   The `/24` signifies that the first 24 bits represent the network, and the remaining 32 - 24 = 8 bits represent the host.
*   **Benefits:**
    *   **Flexibility:** Allows for the creation of networks of virtually any size, from /31 (for point-to-point links) up to /0 (for a default route).
    *   **Efficiency:** Reduces address wastage by allowing organizations to be assigned address blocks that precisely match their needs.
    *   **Hierarchical Routing:** Enables the aggregation of IP address blocks, allowing ISPs to advertise a single route for multiple customer networks, thereby reducing the size of global routing tables.
*   **Key Concept (Peterson & Davie, 5th Ed.):** "CIDR is a mechanism that supports the aggregation of routes and allows for more efficient allocation of the IP address space."
*   **Key Concept (Kurose & Ross, 6th Ed.):** "CIDR allows network administrators to assign IP addresses in blocks of arbitrary size, rather than being restricted to fixed class sizes."

### 3.2. Subnetting

*   **Concept:** The process of dividing a larger IP network into smaller sub-networks (subnets). This is achieved by borrowing bits from the host portion of the IP address to create a subnet identifier.
*   **Purpose:**
    *   **Improved Organization:** Break down large networks into smaller, more manageable segments.
    *   **Reduced Traffic:** Localize traffic within a subnet, reducing the amount of broadcast traffic that needs to traverse the entire network.
    *   **Enhanced Security:** Isolate sensitive resources within specific subnets.
    *   **Efficient Address Utilization:** Allows for more granular allocation of IP addresses within an organization.
*   **How it works:** A subnet mask is used. The subnet mask has a contiguous sequence of 1s for the network and subnet portions, followed by contiguous 0s for the host portion.
    *   Example: An organization has a Class C network `192.168.1.0/24`. They decide to divide it into four subnets.
        *   They need 2 bits for subnet identification (2^2 = 4 subnets).
        *   The new subnet mask will be `/26` (24 network bits + 2 subnet bits).
        *   The subnet mask in dotted-decimal is `255.255.255.192`.
        *   Subnets:
            *   `192.168.1.0/26` (Network: `192.168.1.0`, Broadcast: `192.168.1.63`)
            *   `192.168.1.64/26` (Network: `192.168.1.64`, Broadcast: `192.168.1.127`)
            *   `192.168.1.128/26` (Network: `192.168.1.128`, Broadcast: `192.168.1.191`)
            *   `192.168.1.192/26` (Network: `192.168.1.192`, Broadcast: `192.168.1.255`)

*   **Key Concept (Halsall, 5th Ed.):** "Subnetting is a technique that allows network administrators to divide a single network into multiple smaller networks, improving manageability and efficiency."

---

## 4. Special IP Addresses and Address Types

Certain IP addresses have specific meanings or are used for particular purposes.

### 4.1. Private IP Addresses

*   **Concept:** Ranges of IP addresses reserved for use within private networks (e.g., homes, offices) and are not routable on the public internet. This conserves the public IPv4 address space.
*   **RFC 1918 Reserved Ranges:**
    *   `10.0.0.0` to `10.255.255.255` (10.0.0.0/8) - A single, large block.
    *   `172.16.0.0` to `172.31.255.255` (172.16.0.0/12) - A block of 16 consecutive /16 blocks.
    *   `192.168.0.0` to `192.168.255.255` (192.168.0.0/16) - A block of 256 consecutive /24 blocks.
*   **How they work:** Devices with private IP addresses communicate using Network Address Translation (NAT) to communicate with devices on the public internet through a gateway (router).
*   **Key Concept (Kurose & Ross, 6th Ed.):** "Private IP addresses are used within private networks and are not advertised on the public internet, helping to conserve the global IPv4 address space."

### 4.2. Loopback Address

*   **Purpose:** Used for self-testing and internal communication within a host.
*   **Address:** `127.0.0.1` (and the entire `127.0.0.0/8` range).
*   **How it works:** When a host sends a packet to `127.0.0.1`, the packet is immediately returned to the host's network interface without being sent over the network.
*   **Key Concept (Stevens, Vol 1, 2005):** "The loopback interface provides a mechanism for a host to communicate with itself, primarily for testing network applications."

### 4.3. Broadcast Address

*   **Purpose:** Used to send a single packet to all hosts on a specific network.
*   **Format:** The highest IP address in a network block (all host bits are set to 1).
    *   Example: For the `192.168.1.0/24` network, the broadcast address is `192.168.1.255`.
*   **Key Concept (Forouzan, 5th Ed.):** "A broadcast address is used to send a message to all hosts on a particular network simultaneously."

### 4.4. Multicast Address

*   **Purpose:** Used to send a single packet to a group of hosts that have joined a multicast group.
*   **IPv4 Range:** `224.0.0.0` to `239.255.255.255` (Class D).
*   **Benefit:** More efficient than sending individual packets to each host in a group. Used in applications like streaming media.
*   **Key Concept (Tanenbaum, 5th Ed.):** "Multicast allows a single packet to be delivered to multiple destinations simultaneously, enhancing efficiency for group communication."

### 4.5. Unicast Address

*   **Purpose:** Used to send a packet to a single specific host. This is the most common type of IP address.
*   **Key Concept (Halsall, 5th Ed.):** "Unicast addressing is the standard one-to-one communication method used in IP networking."

---

## 5. IP Addressing in IPv6

IPv6 significantly changes IP addressing to overcome IPv4's limitations.

### 5.1. IPv6 Address Structure

*   **128-bit:** Provides an enormous address space.
*   **Hexadecimal Notation:** Eight groups of 16 bits (four hexadecimal digits) separated by colons.
    *   Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Shorthand Notations:**
    *   Omitting leading zeros: `2001:db8:85a3:0:0:8a2e:370:7334`
    *   Replacing consecutive zeros with `::` (only once): `2001:db8:85a3::8a2e:370:7334`

### 5.2. IPv6 Address Types

*   **Unicast Addresses:** Identify a single interface.
    *   **Global Unicast:** Routable on the internet (similar to public IPv4 addresses). Typically start with `2000::/3`.
    *   **Link-Local Unicast:** Used for communication only on a single network link (no routing beyond the link). Automatically configured (often start with `fe80::/10`).
    *   **Unique Local:** Used for private networks, similar to RFC 1918 addresses in IPv4 (start with `fc00::/7`).
*   **Anycast Addresses:** Identify a group of interfaces, but a packet sent to an anycast address is delivered to only one of the interfaces (typically the closest one).
*   **Multicast Addresses:** Identify a group of interfaces. Start with `ff00::/8`.

### 5.3. IPv6 Prefix Notation

*   **CIDR-like:** Uses a similar slash notation to indicate the network prefix.
    *   Example: `2001:db8:85a3::/48`
    *   The `/48` indicates that the first 48 bits define the network prefix, and the remaining 128 - 48 = 80 bits are for the interface identifier.

*   **Key Concept (Peterson & Davie, 5th Ed.):** "IPv6 addresses are 128 bits long and use hexadecimal notation, offering a significantly larger address space and more flexible allocation mechanisms."

---

## 6. Address Resolution

How do devices map IP addresses to physical (MAC) addresses?

### 6.1. ARP (Address Resolution Protocol) - IPv4

*   **Purpose:** To discover the MAC address of a host given its IP address on a local network (subnet).
*   **How it works:**
    1.  Host A wants to send an IP packet to Host B on the same local network. Host A knows Host B's IP address but not its MAC address.
    2.  Host A broadcasts an ARP request: "Who has IP address [Host B's IP]? Tell [Host A's IP]."
    3.  All hosts on the local network receive the ARP request.
    4.  Host B recognizes its IP address in the request and sends an ARP reply directly to Host A: "IP address [Host B's IP] is at MAC address [Host B's MAC]."
    5.  Host A receives the ARP reply and stores the IP-to-MAC mapping in its ARP cache. It can now send the IP packet directly to Host B's MAC address.
*   **ARP Cache:** A table maintained by each host storing recent IP-to-MAC address mappings.
*   **Key Concept (Tanenbaum, 5th Ed.):** "ARP is a protocol used to resolve an IP address to a physical (MAC) address on a local network."
*   **Key Concept (Forouzan, 5th Ed.):** "ARP operates at the Network Layer to provide the Data Link Layer address corresponding to a given Network Layer address."

### 6.2. NDP (Neighbor Discovery Protocol) - IPv6

*   **Purpose:** Replaces ARP, ICMP Router Discovery, and ICMP Redirect in IPv6. It's a more comprehensive protocol for managing neighbor relationships.
*   **Key Functions:**
    *   **Router Discovery:** Hosts learn about routers on their local link.
    *   **Prefix Discovery:** Hosts learn about network prefixes on their local link.
    *   **Parameter Discovery:** Hosts learn about other link parameters.
    *   **Address Resolution:** Resolves IPv6 addresses to Link-Layer addresses (similar to ARP).
    *   **Next-Hop Determination:** Finds the Link-Layer address of the next hop.
    *   **Neighbor Unreachability Detection:** Detects if a neighbor is no longer reachable.
    *   **Duplicate Address Detection:** Ensures that an IPv6 address is unique on the link before it's used.
*   **How Address Resolution Works (Simplified):**
    1.  Host A wants to send an IPv6 packet to Host B on the same link. Host A knows Host B's IPv6 address but not its MAC address.
    2.  Host A sends a Neighbor Solicitation (NS) message to the solicited-node multicast address of Host B's IPv6 address.
    3.  Host B, upon receiving the NS, replies with a Neighbor Advertisement (NA) message containing its MAC address.
    4.  Host A receives the NA and updates its Neighbor Cache.
*   **Key Concept (Kurose & Ross, 6th Ed.):** "NDP in IPv6 performs functions similar to ARP in IPv4, but it also handles router discovery and neighbor unreachability detection."

---

## 7. IP Addressing and Network Design Issues

### 7.1. Address Allocation Strategies

*   **Hierarchical Allocation:** IP addresses are allocated hierarchically, from IANA to RIRs to ISPs, and then to end-users. This facilitates route aggregation.
*   **Classless Addressing (CIDR):** Essential for efficient use of the address space and aggregation.
*   **Subnetting:** Crucial for internal network design and management.

### 7.2. IP Address Management (IPAM)

*   **Purpose:** To plan, track, and manage the IP address space within an organization.
*   **Functions:** DHCP, DNS, and IP address tracking.
*   **Importance:** Prevents IP address conflicts, ensures efficient allocation, and aids in network troubleshooting.

### 7.3. Network Address Translation (NAT)

*   **Purpose:** Allows multiple devices in a private network to share a single public IP address for internet access.
*   **How it works:** A NAT router modifies the source IP address (and often port numbers) of outgoing packets to match its own public IP address. Incoming packets are translated back to the correct private IP address.
*   **Benefits:** Conserves public IPv4 addresses, provides a degree of security by hiding internal network structure.
*   **Drawbacks:** Can break end-to-end connectivity for some applications, complicates troubleshooting.
*   **Key Concept (Stevens, Vol 1, 2005):** "NAT is a technique that maps one IP address space to another, often used to allow private IP addresses to access the public internet."

### 7.4. Transition from IPv4 to IPv6

*   **Dual-Stack:** Running both IPv4 and IPv6 simultaneously on devices and networks.
*   **Tunneling:** Encapsulating IPv6 packets within IPv4 packets to traverse IPv4-only networks, and vice-versa.
*   **Translation:** Translating between IPv4 and IPv6 packets.
*   **Challenge:** The transition is complex and ongoing, requiring careful planning and deployment.

---

## Important Points to Remember

*   **IP Addresses:** Logical addresses used for host identification and routing.
*   **IPv4:** 32-bit addresses, prone to exhaustion, using dotted-decimal notation.
*   **IPv6:** 128-bit addresses, using hexadecimal notation, designed to overcome IPv4 limitations.
*   **Classful Addressing:** An older scheme with fixed network/host portions, leading to inefficiency.
*   **CIDR:** The modern approach, using prefix lengths for flexible allocation and route aggregation.
*   **Subnetting:** Dividing networks into smaller segments for better management and efficiency.
*   **Private IP Addresses:** Reserved for internal use, conserving public IPv4 addresses.
*   **ARP (IPv4) and NDP (IPv6):** Protocols for mapping IP addresses to MAC addresses.
*   **NAT:** A technique for sharing public IP addresses, crucial for IPv4 address conservation.

---

## Practice Questions and Exercises

**Q1. (K2, CO3)** Explain the concept of CIDR and how it improved upon classful addressing. Provide an example of a CIDR notation and explain its meaning.

**A1:**
CIDR (Classless Inter-Domain Routing) removed the rigid boundaries of IP address classes (A, B, C) that existed in classful addressing. In classful addressing, a network was either assigned a Class A, B, or C block, which often led to significant wastage of IP addresses. CIDR uses a **prefix length** (e.g., `/24`) to indicate the number of bits used for the network portion of an IP address. This allows for the creation of network blocks of arbitrary size, matching an organization's needs more precisely. It also facilitates route aggregation, where multiple smaller network blocks can be advertised as a single larger block, reducing the size of routing tables.

**Example CIDR Notation:** `192.168.10.0 / 22`

**Meaning:**
*   `192.168.10.0` is the network address.
*   `/22` means the first 22 bits of the IP address are used for the network portion.
*   The remaining `32 - 22 = 10` bits are used for the host portion.
*   This block contains `2^10 = 1024` IP addresses.
*   The subnet mask would be `255.255.252.0`.

**Q2. (K2, CO3)** A small office has been assigned the IP network `192.168.5.0/24`. They need to create three separate subnets for different departments (Sales, Marketing, Engineering). What subnet mask should they use, and what are the network and broadcast addresses for each subnet?

**A2:**
To create three subnets, we need at least 3 unique subnet identifiers. This requires borrowing bits from the host portion.
*   With 1 bit borrowed from the host portion (`/25`), we can create `2^1 = 2` subnets. This is not enough.
*   With 2 bits borrowed from the host portion (`/26`), we can create `2^2 = 4` subnets. This is sufficient.

Original network: `192.168.5.0 / 24` (255.255.255.0)
Borrowed bits: 2
New prefix length: `24 + 2 = 26`
New subnet mask: `255.255.255.192` (The first two bits of the last octet are 1s: `11000000` = 192)

**Subnet Calculations:**

1.  **Subnet 1:**
    *   Network Address: `192.168.5.0`
    *   Host bits start after the 26th bit. The first host bits are `00`.
    *   Host portion: `00000000` to `00111111` (0 to 63)
    *   Broadcast Address: `192.168.5.63`
    *   Usable IPs: `192.168.5.1` to `192.168.5.62`

2.  **Subnet 2:**
    *   Network Address: `192.168.5.64`
    *   Host bits start after the 26th bit. The first host bits are `01`.
    *   Host portion: `01000000` to `01111111` (64 to 127)
    *   Broadcast Address: `192.168.5.127`
    *   Usable IPs: `192.168.5.65` to `192.168.5.126`

3.  **Subnet 3:**
    *   Network Address: `192.168.5.128`
    *   Host bits start after the 26th bit. The first host bits are `10`.
    *   Host portion: `10000000` to `10111111` (128 to 191)
    *   Broadcast Address: `192.168.5.191`
    *   Usable IPs: `192.168.5.129` to `192.168.5.190`

*(Note: A fourth subnet would also be available with network address `192.168.5.192` and broadcast `192.168.5.255`)*

**Q3. (K2, CO1)** What is the purpose of private IP addresses, and which RFC defines the standard private IP address ranges?

**A3:**
The purpose of private IP addresses is to conserve the limited public IPv4 address space. These addresses are reserved for use within private networks (like homes, offices, schools) and are not routable on the public internet. Devices with private IP addresses can communicate with each other within their local network and can access the internet via Network Address Translation (NAT).

The standard private IP address ranges are defined in **RFC 1918**. These ranges are:
*   `10.0.0.0` to `10.255.255.255` (10.0.0.0/8)
*   `172.16.0.0` to `172.31.255.255` (172.16.0.0/12)
*   `192.168.0.0` to `192.168.255.255` (192.168.0.0/16)

**Q4. (K2, CO1)** Briefly describe the difference between ARP and NDP.

**A4:**
*   **ARP (Address Resolution Protocol):** Used in IPv4 to map an IP address to a physical (MAC) address on a local network. It uses broadcast ARP requests to find the MAC address associated with a specific IP address.
*   **NDP (Neighbor Discovery Protocol):** Used in IPv6 and performs a broader set of functions, including address resolution, router discovery, prefix discovery, and neighbor unreachability detection. It uses multicast messages (like Neighbor Solicitation) for these tasks, making it more efficient and feature-rich than ARP.

---

This concludes the study notes for IP Addresses in Module 3. Remember to consult your textbooks for more in-depth explanations and examples.
