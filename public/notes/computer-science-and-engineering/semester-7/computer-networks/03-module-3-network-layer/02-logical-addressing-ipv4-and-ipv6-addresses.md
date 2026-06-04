---
title: "Logical Addressing- IPv4 and IPv6 Addresses"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c933"
status: "completed"
scrapedAt: "2026-05-20T17:02:46.999Z"
---
# COMPUTER NETWORKS: Module 3: Network Layer

## Topic: Logical Addressing - IPv4 and IPv6 Addresses

This module delves into the crucial concept of logical addressing, the foundation for enabling communication between devices across diverse networks. We will primarily focus on the two dominant protocols: IPv4 and IPv6, understanding their structure, purpose, and key differences.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and necessity of logical addressing in networking.
*   Explain the structure and format of an IPv4 address.
*   Describe the different classes of IPv4 addresses (Classful addressing) and their limitations.
*   Explain the concept of Classless Inter-Domain Routing (CIDR) and its benefits.
*   Understand the structure and format of an IPv6 address.
*   Compare and contrast IPv4 and IPv6, highlighting their key differences and the reasons for the transition to IPv6.
*   Explain the concept of private IP addresses and their role in Network Address Translation (NAT).
*   Understand the basics of IP address allocation and assignment (e.g., DHCP).

---

### 1. Purpose and Necessity of Logical Addressing

*   **What is Logical Addressing?**
    *   A hierarchical addressing scheme used to identify devices in a network.
    *   Assigns unique addresses to hosts and routers that are independent of the underlying physical network topology.
    *   Allows for efficient routing of data packets across interconnected networks (internetworking).
*   **Why is Logical Addressing Necessary?**
    *   **Interconnection of Diverse Networks:** Different physical networks (e.g., Ethernet, Wi-Fi) use different physical addressing schemes (MAC addresses). Logical addresses provide a common language for devices to communicate regardless of their physical network.
    *   **Routing:** Routers use logical addresses to determine the best path for data packets to reach their destination across multiple networks. Physical addresses (MAC addresses) are only used within a local network segment.
    *   **Hierarchical Structure:** Logical addressing typically uses a hierarchical structure, allowing for efficient summarization of routes and scalability of the internet.
    *   **Network Management:** Logical addresses facilitate network management tasks like assigning IP addresses, troubleshooting connectivity issues, and implementing security policies.

---

### 2. IPv4 Addresses

*   **Definition:**
    *   Internet Protocol version 4 is the fourth version of the Internet Protocol and the most widely used protocol for routing traffic on the Internet.
*   **Structure and Format:**
    *   A 32-bit numerical address.
    *   Typically represented in **dotted-decimal notation**.
    *   Divided into four **octets** (8-bit numbers), separated by dots.
    *   Each octet can range from 0 to 255.
*   **Example:**
    *   `192.168.1.10`
    *   `172.16.0.1`
    *   `10.0.0.5`

*   **Key Components of an IPv4 Address:**
    *   **Network Portion:** Identifies the specific network to which a host belongs.
    *   **Host Portion:** Identifies a specific host within that network.
    *   **Subnet Mask:** A 32-bit number used to distinguish the network portion from the host portion of an IP address. It has a contiguous sequence of 1s followed by a contiguous sequence of 0s.

*   **Subnet Mask Examples:**
    *   `255.255.255.0` (Default mask for Class C) - The first 24 bits represent the network, the last 8 bits represent the host.
    *   `255.255.0.0` (Default mask for Class B) - The first 16 bits represent the network, the last 16 bits represent the host.
    *   `255.0.0.0` (Default mask for Class A) - The first 8 bits represent the network, the last 24 bits represent the host.

---

### 3. Classes of IPv4 Addresses (Classful Addressing)

*   **Concept:**
    *   An early method of dividing the IPv4 address space into different classes based on the first octet.
    *   This scheme provided a way to allocate addresses and define the default subnet mask.
*   **Address Classes:**

| Class | First Octet Range | Default Network Bits | Default Host Bits | Typical Usage                                    |
| :---- | :---------------- | :------------------- | :---------------- | :----------------------------------------------- |
| **A** | 1-126             | 8                    | 24                | Very large organizations (e.g., governments)     |
| **B** | 128-191           | 16                   | 16                | Medium to large organizations                    |
| **C** | 192-223           | 24                   | 8                 | Small organizations, home networks               |
| **D** | 224-239           | N/A                  | N/A               | Multicast addresses (for sending to multiple hosts) |
| **E** | 240-255           | N/A                  | N/A               | Experimental, reserved for future use            |

*   **Special Addresses:**
    *   **Network Address:** The first address in a network range (all host bits are 0). Used to identify the network itself.
        *   Example: `192.168.1.0` (with subnet mask `255.255.255.0`)
    *   **Broadcast Address:** The last address in a network range (all host bits are 1). Used to send data to all hosts on a specific network.
        *   Example: `192.168.1.255` (with subnet mask `255.255.255.0`)
    *   **Loopback Address:** `127.0.0.1`. Used for self-testing and diagnostics, referring to the local machine.
    *   **Private IP Addresses:** Ranges reserved for use within private networks, not routable on the public internet.
        *   Class A: `10.0.0.0` to `10.255.255.255`
        *   Class B: `172.16.0.0` to `172.31.255.255`
        *   Class C: `192.168.0.0` to `192.168.255.255`

*   **Limitations of Classful Addressing:**
    *   **Address Scarcity:** The fixed class boundaries led to significant wastage of IP addresses. For example, a small network needing only a few addresses would have to be assigned an entire Class C block (254 usable addresses).
    *   **Inefficient Routing:** The routing tables on the internet became very large due to the many smaller network blocks created by classful assignments.

---

### 4. Classless Inter-Domain Routing (CIDR)

*   **Concept:**
    *   A method of IP address allocation that eliminates the traditional classful boundaries.
    *   Allows for more flexible and efficient allocation of IP addresses and aggregation of routing information.
*   **How it Works:**
    *   CIDR uses a **prefix length** (indicated by a slash "/") to specify the number of bits in the network portion of an IP address.
    *   The prefix length can be anywhere from 0 to 32 for IPv4.
*   **Example:**
    *   `192.168.1.0/24`: The first 24 bits are the network portion, and the remaining 8 bits are the host portion. This is equivalent to using the subnet mask `255.255.255.0`.
    *   `10.10.0.0/16`: The first 16 bits are the network portion, and the remaining 16 bits are the host portion. This is equivalent to using the subnet mask `255.255.0.0`.
    *   `172.16.10.0/22`: The first 22 bits are the network portion, and the remaining 10 bits are the host portion. The subnet mask would be `255.255.252.0`.

*   **Benefits of CIDR:**
    *   **Address Conservation:** Allows for the creation of smaller, more appropriately sized network blocks, reducing IP address wastage.
    *   **Routing Efficiency:** Enables route aggregation (supernetting), where multiple smaller network prefixes can be represented by a single, larger prefix in routing tables, reducing their size.
    *   **Flexibility:** Provides greater flexibility in network design and administration.

---

### 5. IPv6 Addresses

*   **Need for IPv6:**
    *   **IPv4 Address Exhaustion:** The rapid growth of the internet and the increasing number of connected devices led to the depletion of available IPv4 addresses.
    *   **Improved Features:** IPv6 offers several enhancements over IPv4, including a larger address space, simplified header format, improved security (IPsec built-in), and better support for Quality of Service (QoS).
*   **Structure and Format:**
    *   A **128-bit** numerical address.
    *   Represented in **hexadecimal notation**.
    *   Divided into **eight groups** of four hexadecimal digits each.
    *   Groups are separated by **colons** (`:`).
*   **Example:**
    *   `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Address Representation Rules:**
    *   **Leading Zero Suppression:** Leading zeros within a group can be omitted.
        *   `0db8` can be written as `db8`.
        *   `0000` can be written as `0`.
        *   `0370` can be written as `370`.
    *   **Double Colon (::) Compression:** One or more consecutive groups of all zeros can be replaced by a double colon (`::`). This can only be done **once** in an IPv6 address.
        *   `2001:0db8:85a3:0000:0000:8a2e:0370:7334` becomes `2001:db8:85a3::8a2e:370:7334`
        *   `fe80:0000:0000:0000:0202:b3ff:fe1e:8329` becomes `fe80::202:b3ff:fe1e:8329`
        *   `2001:0db8:0000:1234:0000:0000:0000:5678` becomes `2001:db8:0:1234::5678`

*   **Types of IPv6 Addresses:**
    *   **Unicast:** Identifies a single network interface.
        *   **Global Unicast Address:** Routable on the global internet.
        *   **Link-Local Address:** Used for communication on a single network link (similar to private IPs but automatic). Starts with `fe80::`.
        *   **Unique Local Address (ULA):** Reserved for private networks, intended for local communication within an organization. Starts with `fc00::/7` or `fd00::/8`.
    *   **Multicast:** Identifies a group of network interfaces, typically on different nodes. Prefixes start with `ff00::/8`.
    *   **Anycast:** Identifies a set of network interfaces, typically on different nodes. A packet sent to an anycast address is routed to the nearest interface in the set.

*   **IPv6 Address Structure Breakdown (Example: Global Unicast Address):**
    *   **Global Routing Prefix:** Assigned by the Internet Service Provider (ISP).
    *   **Subnet ID:** Used by an organization to subdivide its network.
    *   **Interface ID:** Uniquely identifies an interface within a subnet. Can be auto-generated (e.g., using EUI-64) or manually assigned.

---

### 6. Comparison of IPv4 and IPv6

| Feature             | IPv4                                | IPv6                                                         |
| :------------------ | :---------------------------------- | :----------------------------------------------------------- |
| **Address Size**    | 32 bits                             | 128 bits                                                     |
| **Address Format**  | Dotted-decimal (e.g., `192.168.1.1`) | Hexadecimal, colon-separated (e.g., `2001:db8::1`)           |
| **Address Space**   | Approx. 4.3 billion addresses       | Approx. 340 undecillion addresses (effectively unlimited)    |
| **Header Length**   | 20 bytes (fixed) + optional fields  | 40 bytes (fixed) - simplified and more efficient             |
| **Address Configuration** | Manual, DHCP                      | Manual, SLAAC (Stateless Address Autoconfiguration), DHCPv6  |
| **Security**        | IPsec is optional                   | IPsec is mandatory and integrated into the protocol          |
| **Mobility**        | Complex to manage                   | Improved mobility support                                    |
| **QoS Support**     | Limited                               | Enhanced QoS capabilities (e.g., Flow Label)                 |
| **Broadcast**       | Supported                           | No broadcast addresses; replaced by multicast                |
| **Checksum**        | Included in IP header               | Removed from IP header (handled by transport layer and link layer) |
| **NAT Requirement** | Often required due to scarcity      | Generally not required due to vast address space             |

---

### 7. Private IP Addresses and NAT

*   **Private IP Addresses:**
    *   As mentioned earlier, these are IP address ranges reserved for use within private networks (e.g., homes, offices).
    *   They are not routable on the public internet.
    *   This allows multiple organizations to use the same private IP address ranges without conflict.
*   **Network Address Translation (NAT):**
    *   **Purpose:** A technique used to map multiple private IP addresses to a single public IP address. This is crucial for conserving public IPv4 addresses.
    *   **How it Works:** When a device on a private network sends a packet to a device on the public internet, the NAT device (typically a router) translates the private source IP address to its own public IP address. When the response comes back, the NAT device uses a translation table to direct the packet to the correct private IP address.
    *   **Types of NAT:**
        *   **Static NAT:** Maps one private IP address to one public IP address.
        *   **Dynamic NAT:** Maps a pool of private IP addresses to a pool of public IP addresses.
        *   **PAT (Port Address Translation) / NAT Overload:** Maps multiple private IP addresses to a single public IP address by using different source port numbers. This is the most common form of NAT.

---

### 8. IP Address Allocation and Assignment

*   **IP Address Allocation:**
    *   **IANA (Internet Assigned Numbers Authority):** The global authority responsible for allocating blocks of IP addresses to Regional Internet Registries (RIRs).
    *   **RIRs (Regional Internet Registries):** Organizations like ARIN (North America), RIPE NCC (Europe), APNIC (Asia-Pacific), etc., that allocate IP address blocks to ISPs and large organizations within their respective regions.
    *   **ISPs (Internet Service Providers):** Obtain IP address blocks from RIRs and assign them to their customers (businesses and individuals).
*   **IP Address Assignment:**
    *   **Manual Configuration:** Network administrators manually assign IP addresses, subnet masks, default gateways, and DNS servers to each device. This is prone to errors and difficult to manage in large networks.
    *   **Dynamic Host Configuration Protocol (DHCP):**
        *   **Purpose:** A network management protocol used to automatically assign IP addresses and other network configuration parameters to devices on a network.
        *   **DHCP Process (DORA):**
            1.  **Discover:** A client broadcasts a DHCP discover message to find a DHCP server.
            2.  **Offer:** A DHCP server responds with a DHCP offer message, proposing an IP address and other configuration details.
            3.  **Request:** The client accepts the offer by sending a DHCP request message.
            4.  **Acknowledge:** The DHCP server acknowledges the request and finalizes the lease of the IP address to the client.
        *   **Benefits of DHCP:** Simplifies network administration, reduces configuration errors, and allows for efficient reuse of IP addresses.

---

### Important Points to Remember:

*   **Logical addressing is essential for internetworking.**
*   **IPv4 uses 32 bits and is nearing exhaustion.**
*   **CIDR is a flexible way to manage IPv4 addresses and routing.**
*   **IPv6 uses 128 bits and provides a vast address space with improved features.**
*   **Private IP addresses are for internal use and require NAT for external communication.**
*   **DHCP automates IP address assignment, simplifying network management.**
*   **The subnet mask is crucial for distinguishing network and host portions of an IP address.**
*   **Understanding the difference between IPv4 and IPv6 is vital for modern networking.**

---

### Practice Questions and Exercises:

**Section 1: IPv4 Addressing**

1.  What is the primary purpose of logical addressing in computer networks?
2.  Explain the dotted-decimal notation of an IPv4 address.
3.  An IPv4 address is `198.51.100.50` and its subnet mask is `255.255.255.0`.
    *   What is the network address?
    *   What is the broadcast address?
    *   How many usable host addresses are available in this network?
4.  What are the limitations of classful IPv4 addressing that led to the development of CIDR?
5.  Convert the IPv4 address `172.16.31.10` to its binary representation.
6.  What is the purpose of a loopback address?

**Section 2: CIDR**

7.  What is the subnet mask for the IP address range `10.0.0.0/8`?
8.  Explain the concept of route aggregation in CIDR.
9.  How does CIDR help conserve IP addresses compared to classful addressing?

**Section 3: IPv6 Addressing**

10. What is the primary reason for the development and adoption of IPv6?
11. Explain the hexadecimal notation of an IPv6 address.
12. Show how the IPv6 address `2001:0db8:1234:0000:0000:abcd:0000:1111` can be compressed using IPv6 representation rules.
13. Differentiate between a global unicast address and a link-local address in IPv6.
14. What is the purpose of the `::` notation in IPv6 addresses?

**Section 4: Comparison and NAT**

15. Create a table comparing key features of IPv4 and IPv6.
16. What is Network Address Translation (NAT)? Explain its role in IPv4 networking.
17. Describe the DORA process in DHCP.

---

### Answers to Practice Questions:

**Section 1: IPv4 Addressing**

1.  The primary purpose of logical addressing is to uniquely identify devices in a network and enable routers to forward data packets across different networks.
2.  Dotted-decimal notation represents a 32-bit IPv4 address as four 8-bit numbers (octets) separated by dots. Each octet ranges from 0 to 255.
3.  Given IPv4 address: `198.51.100.50`, Subnet Mask: `255.255.255.0`
    *   **Network Address:** To find the network address, perform a bitwise AND operation between the IP address and the subnet mask. In dotted-decimal, this means setting the host portion (bits after the `255.255.255`) to all zeros. So, the network address is `198.51.100.0`.
    *   **Broadcast Address:** To find the broadcast address, set all host bits (the last 8 bits in this case) to ones. So, the broadcast address is `198.51.100.255`.
    *   **Usable Host Addresses:** The number of usable host addresses is $2^h - 2$, where $h$ is the number of host bits. Here, $h=8$. So, $2^8 - 2 = 256 - 2 = 254$ usable host addresses.
4.  Limitations of classful addressing include significant IP address wastage due to fixed class boundaries and inefficient routing table sizes due to the inability to aggregate routes effectively.
5.  `172.16.31.10` in binary:
    *   172: `10101100`
    *   16: `00010000`
    *   31: `00011111`
    *   10: `00001010`
    *   Combined: `10101100.00010000.00011111.00001010`
6.  A loopback address (e.g., `127.0.0.1`) is used for self-testing network interfaces and diagnosing network problems on the local machine itself.

**Section 2: CIDR**

7.  The subnet mask for `10.0.0.0/8` is `255.0.0.0`. The `/8` indicates that the first 8 bits are the network portion.
8.  Route aggregation (or supernetting) in CIDR allows multiple smaller network prefixes to be represented by a single, larger prefix in routing tables. This reduces the size of routing tables and improves routing efficiency.
9.  CIDR conserves IP addresses by allowing network administrators to create network blocks of various sizes, not restricted by predefined class boundaries. This means smaller networks can be allocated only the addresses they need, reducing wastage.

**Section 3: IPv6 Addressing**

10. The primary reason for the development of IPv6 is the exhaustion of the available IPv4 address space due to the rapid growth of the internet and the increasing number of connected devices.
11. IPv6 addresses are 128 bits long and are written as eight groups of four hexadecimal digits, separated by colons.
12. Compressed IPv6 address: `2001:db8:1234::abcd:0:1111` (or `2001:db8:1234::abcd::1111` if you want to show two places for zeros, but the first one is more common and preferred. **Correction:** The double colon can only be used once. So the correct compressed form is `2001:db8:1234::abcd:0:1111` or `2001:db8:1234:0:0:abcd::1111`. Let's re-evaluate. The most optimal compression by replacing consecutive groups of zeros is: `2001:db8:1234::abcd:0:1111`. If we consider the last `0000` as the second group of zeros, then the compressed address would be `2001:db8:1234:0:0:abcd::1111`. However, the most standard compression would be to replace `0000:0000` with `::`. So, `2001:db8:1234::abcd:0:1111` is the best compression.)
    *   Let's break down `2001:0db8:1234:0000:0000:abcd:0000:1111`:
        *   `2001:db8:1234:` (no change)
        *   `0000:0000` can be replaced by `::`
        *   `abcd:0:1111` (no change, as `0` is already a compressed form of `0000`)
        *   Therefore, the most common and standard compression is: `2001:db8:1234::abcd:0:1111`
13. A **global unicast address** is a routable address on the global internet, assigned by ISPs. A **link-local address** is automatically configured and used only for communication on the local network segment (link) and is not routable on the internet.
14. The `::` notation in IPv6 addresses is used to represent one or more consecutive groups of all zeros, reducing the length of the address for easier reading and writing. It can only be used once in an address.

**Section 4: Comparison and NAT**

15. (See the comparison table in Section 6 of the notes).
16. Network Address Translation (NAT) is a process used to map private IP addresses used within a local network to a single public IP address when communicating with the internet. It conserves public IPv4 addresses.
17. The DORA process in DHCP stands for:
    *   **Discover:** Client broadcasts to find a DHCP server.
    *   **Offer:** Server offers an IP address and configuration.
    *   **Request:** Client requests the offered IP address.
    *   **Acknowledge:** Server confirms the IP address assignment.
