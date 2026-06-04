---
title: "Subnetting, Classless Routing(CIDR), ICMP."
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff052"
status: "completed"
scrapedAt: "2026-05-23T18:00:09.132Z"
---
# Computer Networks: Module 3 - Network Layer (Datagram vs. Virtual Circuit)

## Topic: Subnetting, Classless Routing (CIDR), ICMP

---

### **Introduction**

This module delves into the crucial aspects of the Network Layer, focusing on how IP addresses are managed and how devices communicate efficiently. We will explore subnetting for IP address conservation, Classless Inter-Domain Routing (CIDR) for flexible IP allocation, and the Internet Control Message Protocol (ICMP) for network diagnostics and error reporting.

---

### **1. Subnetting**

**Learning Outcomes Covered:**

*   Understanding the principles of IP addressing and subnetting.
*   Analyzing the benefits and mechanisms of subnetting.
*   Applying subnetting techniques to allocate IP addresses efficiently.

**Course Outcomes Aligned:**

*   **CO1 (K2):** Summarize the principles and components of computer networks, including the layered network architecture. (Subnetting is a key principle of IP addressing within the Network Layer.)
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols in the context of computer networking. (Subnetting directly impacts how IP addresses are structured and how routing decisions are made.)

**Key Concepts & Definitions:**

*   **IP Address:** A unique numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication. An IPv4 address is a 32-bit number, typically represented in dotted-decimal notation (e.g., 192.168.1.1).
*   **Network Portion:** The part of an IP address that identifies the network to which the device belongs.
*   **Host Portion:** The part of an IP address that identifies a specific device (host) within a network.
*   **Subnet Mask:** A 32-bit number that masks an IP address to separate the network portion from the host portion. It consists of a series of '1's followed by a series of '0's. The '1's indicate the network portion, and the '0's indicate the host portion.
*   **Subnetting:** The process of dividing a larger network into smaller, more manageable subnetworks (subnets). This is achieved by "borrowing" bits from the host portion of an IP address to create subnet identifiers.
*   **Subnet ID:** The portion of an IP address that identifies a specific subnet within a larger network.
*   **Host ID:** The portion of an IP address that identifies a specific host within a subnet.

**How Subnetting Works:**

Subnetting is performed by extending the network portion of an IP address by using bits from the original host portion. This is done by changing the subnet mask.

*   **Original IP Address Structure:** Network Portion | Host Portion
*   **Subnetted IP Address Structure:** Network Portion | Subnet ID | Host ID

By moving the boundary between the network and host portions, we create new subnets. The number of bits borrowed from the host portion determines the number of subnets and the number of hosts per subnet.

**Formulae:**

*   **Number of Subnets:** $2^s$, where 's' is the number of bits borrowed from the host portion.
*   **Number of Hosts per Subnet:** $2^h - 2$, where 'h' is the number of remaining bits in the host portion. The '-2' accounts for the network address (all host bits are 0) and the broadcast address (all host bits are 1), which cannot be assigned to individual hosts.

**Example (Kurose & Ross, Sixth Edition, Chapter 4.2.1):**

Consider an organization with the network address **192.168.1.0/24**. This means the first 24 bits represent the network, and the last 8 bits are available for hosts.

Let's say the organization needs to create 4 subnets. To create 4 subnets, we need $2^s = 4$, so $s = 2$ bits. We borrow 2 bits from the host portion.

*   **Original:** 192.168.1. `[host bits (8)]`
*   **Subnetted:** 192.168.1. `[subnet bits (2)]` `[remaining host bits (6)]`

The original subnet mask was **255.255.255.0** (binary `11111111.11111111.11111111.00000000`).
After borrowing 2 bits, the new subnet mask becomes **255.255.255.192** (binary `11111111.11111111.11111111.11000000`).

**Subnets created:**

*   **Subnet 1:**
    *   Network Address: 192.168.1.0 (borrowed bits: 00)
    *   Host Range: 192.168.1.1 to 192.168.1.62
    *   Broadcast Address: 192.168.1.63
    *   Subnet Mask: 255.255.255.192
*   **Subnet 2:**
    *   Network Address: 192.168.1.64 (borrowed bits: 01)
    *   Host Range: 192.168.1.65 to 192.168.1.126
    *   Broadcast Address: 192.168.1.127
    *   Subnet Mask: 255.255.255.192
*   **Subnet 3:**
    *   Network Address: 192.168.1.128 (borrowed bits: 10)
    *   Host Range: 192.168.1.129 to 192.168.1.190
    *   Broadcast Address: 192.168.1.191
    *   Subnet Mask: 255.255.255.192
*   **Subnet 4:**
    *   Network Address: 192.168.1.192 (borrowed bits: 11)
    *   Host Range: 192.168.1.193 to 192.168.1.254
    *   Broadcast Address: 192.168.1.255
    *   Subnet Mask: 255.255.255.192

Number of hosts per subnet: $2^6 - 2 = 64 - 2 = 62$.

**Benefits of Subnetting:**

*   **IP Address Conservation:** Reduces the number of globally unique IP addresses required.
*   **Improved Network Performance:** Smaller broadcast domains reduce broadcast traffic.
*   **Enhanced Security:** Can isolate network segments, making it easier to implement security policies.
*   **Simplified Administration:** Easier to manage and troubleshoot smaller network segments.

**Important Points to Remember:**

*   The subnet mask determines the network and host portions of an IP address.
*   Borrowing bits from the host portion creates subnets.
*   The number of subnets increases as more bits are borrowed.
*   The number of hosts per subnet decreases as more bits are borrowed.
*   Every device on the same subnet shares the same network portion of their IP address.

---

### **2. Classless Inter-Domain Routing (CIDR)**

**Learning Outcomes Covered:**

*   Understanding the limitations of classful IP addressing.
*   Explaining the concept and benefits of CIDR.
*   Applying CIDR notation for efficient IP address allocation.

**Course Outcomes Aligned:**

*   **CO1 (K2):** Summarize the principles and components of computer networks, including the layered network architecture. (CIDR is a fundamental concept for IP addressing in modern networks.)
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols in the context of computer networking. (CIDR revolutionized routing by allowing for more flexible aggregation of IP address blocks.)

**Key Concepts & Definitions:**

*   **Classful IP Addressing:** An earlier method of dividing IP address space into fixed classes (A, B, C, D, E) based on the most significant bits of the IP address. This led to significant IP address wastage.
    *   **Class A:** Networks 1-126, Default Mask: 255.0.0.0 (/8)
    *   **Class B:** Networks 128-191, Default Mask: 255.255.0.0 (/16)
    *   **Class C:** Networks 192-223, Default Mask: 255.255.255.0 (/24)
*   **Classless Inter-Domain Routing (CIDR):** A method for allocating IP addresses and routing IP packets more efficiently. It allows for variable-length subnet masks (VLSM), breaking free from the rigid classful boundaries.
*   **CIDR Notation (Slash Notation):** A compact way to represent an IP address and its associated subnet mask. It consists of the IP address followed by a forward slash and the number of bits in the network portion.
    *   Example: **192.168.1.0/24** means the network portion is 24 bits long.
    *   Example: **10.0.0.0/8** means the network portion is 8 bits long.

**Why CIDR? (Limitations of Classful Addressing - Kurose & Ross, Sixth Edition, Chapter 4.2.2):**

*   **IP Address Wastage:** Classful addressing assigned large blocks of IP addresses (e.g., a Class C network had 256 addresses), even if an organization only needed a few. This led to massive waste of the limited IPv4 address space.
*   **Routing Table Bloat:** Routers needed to maintain separate entries for each classful network, leading to large and inefficient routing tables.

**How CIDR Works:**

CIDR abandons the concept of fixed IP address classes. Instead, it allows for a **variable-length subnet mask (VLSM)**. This means that organizations can be allocated IP address blocks of any size, perfectly tailored to their needs.

*   **Address Aggregation (Supernetting):** CIDR also enables the aggregation of contiguous IP address blocks into a single, larger block. This allows routers to represent multiple smaller networks with a single routing entry, significantly reducing the size of routing tables and improving routing efficiency.

**Example (Kurose & Ross, Sixth Edition, Chapter 4.2.2):**

Consider an ISP that needs to allocate IP addresses to three customers:

*   **Customer A:** Needs 500 IP addresses.
*   **Customer B:** Needs 1000 IP addresses.
*   **Customer C:** Needs 250 IP addresses.

**Using Classful Addressing (if we had to):**

*   Customer A (needs 500): Would need at least a Class B block (65,536 addresses), wasting most of it.
*   Customer B (needs 1000): Would also need a Class B block.
*   Customer C (needs 250): Would need a Class B block or maybe a few Class C blocks (256 addresses each), still inefficient.

**Using CIDR:**

The ISP can allocate blocks precisely:

*   **Customer A:** Can be allocated a **/23** block (512 addresses). 256 - 512 = 256 + 256 = 512. The network portion is 23 bits, leaving 32 - 23 = 9 bits for hosts ($2^9 = 512$). Example: **192.168.0.0/23**.
*   **Customer B:** Can be allocated a **/22** block (1024 addresses). The network portion is 22 bits, leaving 32 - 22 = 10 bits for hosts ($2^{10} = 1024$). Example: **192.168.2.0/22**.
*   **Customer C:** Can be allocated a **\24** block (256 addresses). The network portion is 24 bits, leaving 32 - 24 = 8 bits for hosts ($2^8 = 256$). Example: **192.168.6.0/24**.

This is much more efficient, and the ISP can then aggregate these blocks for routing if they are contiguous. For example, if the ISP owns **192.168.0.0/21**, it can allocate the sub-blocks to customers.

**Benefits of CIDR:**

*   **Efficient IP Address Utilization:** Significantly reduces IP address wastage by allowing allocation of IP address blocks of any size.
*   **Reduced Routing Table Size:** Enables route aggregation, which is crucial for the scalability of the Internet's routing system.
*   **Flexibility in Network Design:** Provides greater flexibility in designing and managing IP address space.

**Important Points to Remember:**

*   CIDR replaced classful IP addressing.
*   CIDR uses variable-length subnet masks (VLSM).
*   CIDR notation (slash notation) is a compact way to represent IP addresses and their masks.
*   Route aggregation is a key benefit of CIDR, reducing routing table size.

---

### **3. Internet Control Message Protocol (ICMP)**

**Learning Outcomes Covered:**

*   Understanding the purpose and functions of ICMP.
*   Identifying common ICMP message types and their uses.
*   Analyzing how ICMP is used for network diagnostics and troubleshooting.

**Course Outcomes Aligned:**

*   **CO1 (K2):** Summarize the principles and components of computer networks, including the layered network architecture. (ICMP operates at the Network Layer and is essential for network management.)
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. (ICMP is a key protocol at the Network Layer.)
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols in the context of computer networking. (ICMP messages often carry information related to routing and reachability.)

**Key Concepts & Definitions:**

*   **ICMP (Internet Control Message Protocol):** A network layer protocol used by network devices (like routers and hosts) to send error messages and operational information. It is used for diagnostic and control purposes.
*   **Error Reporting:** ICMP is used to report errors encountered during packet delivery (e.g., destination unreachable, time exceeded).
*   **Network Diagnostics:** ICMP messages are used by diagnostic tools like `ping` and `traceroute` to test network connectivity and identify performance issues.
*   **ICMP Message Format:** ICMP messages are encapsulated within IP datagrams. They have a specific header that includes:
    *   **Type:** Identifies the type of ICMP message (e.g., Destination Unreachable, Echo Request).
    *   **Code:** Provides more specific information about the error or query.
    *   **Checksum:** For error detection within the ICMP message itself.
    *   **Rest of Header:** Varies depending on the message type.
    *   **Data:** Often includes the IP header and the first 8 bytes of the datagram that caused the error.

**Common ICMP Message Types (Forouzan, Fourth Edition, Chapter 14.3):**

| Type | Message Name          | Description                                                                                                | Common Use Case         |
| :--- | :-------------------- | :--------------------------------------------------------------------------------------------------------- | :---------------------- |
| 0    | Echo Reply            | Sent by a destination host to acknowledge an Echo Request.                                                 | `ping`                  |
| 3    | Destination Unreachable | Sent by a router or host to indicate that a destination is unreachable.                                    | Network troubleshooting |
| 5    | Redirect              | Sent by a router to inform a host about a better route to a particular destination.                        | Route optimization      |
| 8    | Echo Request          | Sent by a host to test the reachability of a destination host.                                             | `ping`                  |
| 11   | Time Exceeded         | Sent by a router when the Time To Live (TTL) field in an IP datagram reaches zero before reaching the destination. | `traceroute`            |
| 12   | Parameter Problem     | Sent when a router finds a problem with an IP header parameter.                                            | Header validation       |
| 13   | Timestamp             | Sent by a host to request a timestamp from another host.                                                   | Time synchronization    |
| 14   | Timestamp Reply       | Reply to a Timestamp request.                                                                              | Time synchronization    |

**Example: `ping` Command (Kurose & Ross, Sixth Edition, Chapter 1.1.2):**

The `ping` command is a fundamental network utility that uses ICMP Echo Request and Echo Reply messages.

1.  **Host A** wants to check if **Host B** is reachable.
2.  **Host A** sends an **ICMP Echo Request** message to **Host B**. This message is encapsulated in an IP datagram.
3.  **Host B** receives the IP datagram and extracts the ICMP Echo Request.
4.  If **Host B** is reachable and configured to respond, it sends an **ICMP Echo Reply** message back to **Host A**.
5.  **Host A** receives the Echo Reply, indicating that **Host B** is alive and the path is working.

**Example: `traceroute` Command (Kurose & Ross, Sixth Edition, Chapter 1.1.2):**

The `traceroute` command uses ICMP Time Exceeded messages to map the path packets take to a destination.

1.  **Source Host** sends an IP datagram with a **Time To Live (TTL)** of 1 to the destination.
2.  The **first router** along the path receives the datagram. It decrements the TTL to 0 and discards the datagram. It then sends an **ICMP Time Exceeded** message back to the source host.
3.  The **Source Host** receives the ICMP Time Exceeded message and records the IP address of the router that sent it (the first hop).
4.  The **Source Host** then sends another IP datagram, this time with TTL = 2, to the destination.
5.  The **first router** decrements TTL to 1 and forwards the datagram. The **second router** receives it, decrements TTL to 0, discards it, and sends an **ICMP Time Exceeded** message back to the source.
6.  This process continues, incrementing the TTL with each subsequent probe, until the destination is reached. When the destination receives the datagram, it sends back an **ICMP Echo Reply** (if the `ping` equivalent is used in traceroute) or a different ICMP message indicating success.

**When are ICMP messages NOT generated? (Forouzan, Fourth Edition, Chapter 14.3):**

*   When the packet causing the error has the "Don't Fragment" flag set (if fragmentation is the cause of the error).
*   If the packet is a broadcast or multicast packet (as it would be difficult to send a reply to all members).
*   If the packet's source IP address is a loopback address.
*   If the packet's source IP address is a invalid address.

**Importance of ICMP:**

*   **Essential for Network Troubleshooting:** Tools like `ping` and `traceroute` rely heavily on ICMP.
*   **Provides Feedback:** Helps network administrators understand why a connection might be failing.
*   **Route Optimization:** ICMP Redirect messages can help hosts learn about more efficient routes.

**Important Points to Remember:**

*   ICMP is a control protocol, not a data transfer protocol.
*   ICMP messages are carried within IP datagrams.
*   ICMP is used for both error reporting and diagnostic purposes.
*   `ping` uses Echo Request/Reply, `traceroute` uses Time Exceeded.
*   ICMP plays a vital role in understanding and diagnosing network behavior.

---

### **Practice Questions & Exercises**

**Question 1 (Subnetting):**
A company has been assigned the IP network **172.16.0.0/16**. They need to create 10 subnets, each capable of supporting at least 50 hosts.
a) What is the minimum number of bits they need to borrow for subnetting?
b) What is the new subnet mask in dotted-decimal notation?
c) How many hosts will be available per subnet?
d) What is the network address of the first subnet?
e) What is the broadcast address of the first subnet?

**Answer 1:**
a) To support at least 50 hosts, we need $2^h - 2 \ge 50$.
If $h=5$, $2^5 - 2 = 32 - 2 = 30$ (not enough).
If $h=6$, $2^6 - 2 = 64 - 2 = 62$ (enough).
So, we need 6 bits for the host portion.
The original IP address is /16, meaning 16 bits for the network.
Total bits = 32.
Number of network bits (including subnet bits) = 32 - host bits = 32 - 6 = 26 bits.
The number of bits borrowed for subnetting is 26 - 16 = **10 bits**.

b) The original mask is /16 (255.255.0.0). We borrowed 10 bits from the third octet and the fourth octet.
The mask will have 26 bits set to 1:
`11111111.11111111.11111100.00000000`
This translates to **255.255.255.192**. (Note: 10 bits borrowed would mean 18 bits of network + 6 bits of host. Let's re-calculate for 10 subnets and >=50 hosts.

**Correction:**
We need 10 subnets. So, $2^s \ge 10$. The smallest 's' that satisfies this is $s=4$ (since $2^4 = 16$).
If we borrow 4 bits ($s=4$), the remaining host bits are $32 - 16 - 4 = 12$.
Number of hosts per subnet = $2^{12} - 2 = 4096 - 2 = 4094$. This is far more than 50.

Let's re-evaluate the question: "each capable of supporting at least 50 hosts."
So, we first determine the host requirement. $2^h - 2 \ge 50 \implies 2^h \ge 52$. Thus, $h=6$.
This means we need $32 - 6 = 26$ bits for the network and subnet portion.
Since the original network is /16, we borrow $26 - 16 = 10$ bits for subnetting.
This gives us $2^{10} = 1024$ subnets. This is more than the required 10.
So, to satisfy the "at least 50 hosts" requirement, we must use $h=6$. This implies the network portion (including subnetting) must be 26 bits long.

The question is slightly ambiguous: "create 10 subnets, each capable of supporting at least 50 hosts."
Usually, you'd prioritize the number of hosts if a specific number is given.
If we need exactly 10 subnets, we borrow 4 bits ($s=4$). The host portion becomes $32-16-4 = 12$ bits. This gives $2^{12}-2 = 4094$ hosts.

If the primary constraint is "at least 50 hosts", then $h=6$, which means 26 network bits and 10 subnet bits.
Let's assume the question implies finding a subnetting scheme that meets *both* requirements.

Let's stick to the "at least 50 hosts" requirement first: $h=6$.
Network bits = $32 - 6 = 26$.
Original network is /16. So, we borrow $26 - 16 = 10$ bits.
Number of subnets = $2^{10} = 1024$.
Number of hosts per subnet = $2^6 - 2 = 62$.

This scheme provides 1024 subnets, each with 62 hosts, which satisfies both conditions (1024 subnets > 10 subnets, and 62 hosts >= 50 hosts).

a) Minimum bits borrowed to get *at least* 50 hosts: 6 bits from host portion.
b) New subnet mask: Borrowing 10 bits from host portion (to get 26 network bits): **255.255.255.192** (26 bits set to 1).

c) Number of hosts per subnet: $2^6 - 2 = \mathbf{62}$ hosts.

d) Network address of the first subnet: The network is 172.16.0.0/16. We borrow 10 bits. The first 16 bits are `10101100.00010000`. We need to add 10 bits to the network portion.
The first 26 bits will be the network ID.
The first subnet will have the 4 subnet bits set to 0000.
The IP address is `172.16.x.x`. The mask is `255.255.255.192`.
The first subnet will be `172.16.0.0/26`.
Network address: **172.16.0.0**.

e) Broadcast address of the first subnet: The first subnet is `172.16.0.0/26`. The host portion has 6 bits. For the broadcast address, all host bits are set to 1.
Binary of `172.16.0.0`: `10101100.00010000.00000000.00000000`
The first 26 bits are the network. The next 6 bits are host.
Network part: `10101100.00010000.00000000.00`
Host part: `000000`
For broadcast, host part is `111111`.
So, `10101100.00010000.00000000.00111111`
This is `172.16.0.63`.
Broadcast address: **172.16.0.63**.

---

**Question 2 (CIDR):**
An ISP is given a block of IP addresses: **203.0.113.0/24**. They need to allocate addresses to three new customers.
*   Customer 1 needs 80 IP addresses.
*   Customer 2 needs 150 IP addresses.
*   Customer 3 needs 40 IP addresses.

Assign CIDR blocks to each customer, ensuring efficient use of the IP address space. What is the remaining unallocated IP address space?

**Answer 2:**
The ISP has **203.0.113.0/24**, which means 256 addresses (256 - 0 = 255, so 0-255).
The mask is 255.255.255.0.

*   **Customer 1 (needs 80 IPs):**
    We need $2^h - 2 \ge 80 \implies 2^h \ge 82$. The smallest $h$ is 7 ($2^7 = 128$).
    This requires $32 - 7 = 25$ bits for the network portion.
    So, Customer 1 can be assigned a **/25** block.
    This block provides $2^7 = 128$ addresses.
    The first available **/25** block within **203.0.113.0/24** is **203.0.113.0/25**.
    (Network: 203.0.113.0 to 203.0.113.127; Hosts: 203.0.113.1 to 203.0.113.126).

*   **Customer 2 (needs 150 IPs):**
    We need $2^h - 2 \ge 150 \implies 2^h \ge 152$. The smallest $h$ is 8 ($2^8 = 256$).
    This requires $32 - 8 = 24$ bits for the network portion.
    So, Customer 2 can be assigned a **/24** block.
    This block provides $2^8 = 256$ addresses.
    The next available **/24** block after 203.0.113.0/25 is **203.0.113.128/24**.
    (Network: 203.0.113.128 to 203.0.113.255; Hosts: 203.0.113.129 to 203.0.113.254).

*   **Customer 3 (needs 40 IPs):**
    We need $2^h - 2 \ge 40 \implies 2^h \ge 42$. The smallest $h$ is 6 ($2^6 = 64$).
    This requires $32 - 6 = 26$ bits for the network portion.
    So, Customer 3 can be assigned a **/26** block.
    This block provides $2^6 = 64$ addresses.
    The next available **/26** block after 203.0.113.128/24 is **203.0.113.192/26**.
    (Network: 203.0.113.192 to 203.0.113.255; Hosts: 203.0.113.193 to 203.0.113.254).

**Summary of Allocations:**
*   Customer 1: **203.0.113.0/25**
*   Customer 2: **203.0.113.128/24**
*   Customer 3: **203.0.113.192/26**

**Remaining unallocated IP address space:**
The original block was /24 (256 addresses: 203.0.113.0 to 203.0.113.255).
Customer 1 used 203.0.113.0 to 203.0.113.127 (/25).
Customer 2 used 203.0.113.128 to 203.0.113.255 (/24). This block is larger than needed by Customer 2.

Let's re-allocate more carefully to minimize waste.

**Revised Allocation:**
Start with **203.0.113.0/24**.
Need to satisfy customers from largest requirement to smallest for efficiency (or smallest to largest to leave larger blocks for larger needs). Let's do largest first.

1.  **Customer 2 (needs 150 IPs):** Requires a /24 block.
    Assign **203.0.113.0/24**. This uses the entire original block.
    This is inefficient because Customer 2 only needs 150 IPs and gets 256.

Let's rethink by looking at the host requirements and finding the smallest CIDR block for each.
*   Customer 1: 80 IPs => /25 (128 IPs)
*   Customer 2: 150 IPs => /24 (256 IPs)
*   Customer 3: 40 IPs => /26 (64 IPs)

Total IPs needed: 80 + 150 + 40 = 270 IPs.
The ISP block is 256 IPs. This means it's impossible to satisfy all customers with the given block without more IPs.

Let's assume the question meant the ISP *has* the /24 and needs to divide it. The total IPs required (270) exceed the provided block (256). This suggests a flaw in the question or the need to clarify that not all can be met.

Assuming the question implicitly asks to fulfill as many as possible or distribute the available /24:

If we must use the **203.0.113.0/24** block:
We need to find CIDR blocks that fit within it.

1.  **Customer 2 (needs 150 IPs):** Requires a /24 block (256 IPs).
    Assign **203.0.113.0/24**. This uses the entire block.
    **Remaining:** 0 IPs.
    This is the most "efficient" use if only one customer can be served entirely.

Let's assume the question intends for us to divide the /24 into smaller blocks, even if the total required exceeds the given. Perhaps the "remaining" space refers to what's left *after* assigning blocks that fit.

Alternative approach: Prioritize smaller blocks first to leave contiguous larger blocks.
Original block: **203.0.113.0/24**

1.  **Customer 3 (needs 40 IPs):** Requires a /26 block (64 IPs).
    Assign **203.0.113.192/26** (uses addresses 203.0.113.192 to 203.0.113.255).
    Remaining space: **203.0.113.0/25** (addresses 203.0.113.0 to 203.0.113.127).

2.  **Customer 1 (needs 80 IPs):** Requires a /25 block (128 IPs).
    Assign **203.0.113.0/25** (uses addresses 203.0.113.0 to 203.0.113.127).
    Remaining space: None.

3.  **Customer 2 (needs 150 IPs):** Requires a /24 block (256 IPs).
    We only have 256 IPs in total and have used them up for Customers 1 and 3.
    Customer 2 cannot be fully satisfied from this /24 block.

**Possible Interpretation:** Distribute the /24 block into blocks that meet requirements as much as possible.

*   Assign the largest block first: Customer 2 needs 150 IPs, which requires a /24.
    Assign **203.0.113.0/24**.
    *   Customer 2 gets **203.0.113.0/24**. (Uses all 256 IPs).
    *   Customer 1 (80 IPs) and Customer 3 (40 IPs) cannot be served from this block.
    *   Remaining space: **0**.

*   Assign smallest blocks first to maximize chances for others:
    *   Customer 3 (40 IPs): needs /26. Assign **203.0.113.192/26** (64 IPs). Used: 64. Remaining in original /24: 256-64 = 192 IPs. (Block 203.0.113.0/25)
    *   Customer 1 (80 IPs): needs /25. Assign **203.0.113.0/25** (128 IPs). Used: 128. Remaining in original /24: 192-128 = 64 IPs. (Block 203.0.113.128/26)
    *   Customer 2 (150 IPs): needs /24. We only have 64 IPs left (203.0.113.128/26). This is not enough.

**Conclusion for Question 2:** The total IP address requirement (270) exceeds the provided block (256). Therefore, only some customers can be fully served. If the goal is to serve the largest customer first, then only Customer 2 is served. If the goal is to serve as many as possible, we can serve Customer 1 (/25) and Customer 3 (/26).

Let's assume the question implies serving the customers that fit and asking for the remaining unallocated *within the original /24*.

If we serve Customer 1 and Customer 3:
*   Customer 1: **203.0.113.0/25** (203.0.113.0 to 203.0.113.127)
*   Customer 3: **203.0.113.192/26** (203.0.113.192 to 203.0.113.255)
*   The space between these is **203.0.113.128/26** (203.0.113.128 to 203.0.113.191). This block has 64 IPs.
    This space can be used for Customer 2, but it's not enough.
    Remaining unallocated space: **203.0.113.128/26** (64 IPs).

This interpretation seems most likely, where we fulfill requirements using the smallest sufficient CIDR blocks and identify the leftover contiguous space.

**Final Answer for Question 2 (assuming this interpretation):**
*   Customer 1: **203.0.113.0/25**
*   Customer 3: **203.0.113.192/26**
*   Remaining unallocated IP address space: **203.0.113.128/26** (64 IPs).
    (Customer 2 cannot be fully served from the remaining space).

---

**Question 3 (ICMP):**
You are troubleshooting a network connectivity issue. You run the `ping` command from your computer to a server, but it fails.
a) What ICMP message type is most likely being sent from your computer?
b) If the `ping` fails, what are at least two possible ICMP error messages you might receive (or what might cause the `ping` to fail that ICMP would report)?
c) How would `traceroute` help diagnose this problem, and what ICMP message type would it primarily use?

**Answer 3:**
a) The ICMP message type most likely being sent from your computer when using the `ping` command is **Echo Request (Type 8)**.

b) If the `ping` fails, here are at least two possible ICMP error messages or causes that ICMP would report:
    1.  **Destination Unreachable (Type 3):** This could be reported by a router if it cannot find a route to the destination network, or by the destination host itself if it's reachable but the specific service port is blocked (though `ping` usually doesn't check ports, this is a general "unreachable" scenario). The code within this message can specify *why* it's unreachable (e.g., Network Unreachable, Host Unreachable, Port Unreachable).
    2.  **Time Exceeded (Type 11):** If the TTL field in the IP datagram for the Echo Request reaches zero before it reaches the destination, a router will send back a Time Exceeded message. This indicates a potential routing loop or that the TTL value was too low for the path.
    3.  **Echo Reply (Type 0) not received:** While not an error message *sent back*, the failure of `ping` means no Echo Reply was received. This could be due to network congestion, firewalls blocking ICMP, or the destination host being down or unresponsive.

c) `traceroute` (or `tracert` on Windows) helps diagnose the problem by identifying the path packets take to reach the destination. It sends out packets with incrementally increasing TTL values. Each router along the path that the packet reaches will decrement the TTL and, when it hits zero, send back an **ICMP Time Exceeded (Type 11)** message. By collecting these messages, `traceroute` can map out each hop.
    If `ping` fails, `traceroute` can reveal which router along the path is the last one that responded, or if the failure occurs before any router responds, it might indicate a problem closer to the source. It can show if packets are getting lost at a specific point in the network.

---

### **Important Points to Remember for the Entire Module**

*   **Network Layer's Role:** Responsible for logical addressing (IP addresses) and routing of packets from source to destination across multiple networks.
*   **Subnetting:** Essential for efficient IP address management, creating smaller, manageable network segments, and reducing broadcast traffic. It involves borrowing bits from the host portion.
*   **CIDR:** The modern standard for IP addressing and routing. It eliminates classful boundaries, allows for variable-length subnet masks (VLSM), and enables route aggregation, which is critical for the Internet's scalability.
*   **ICMP:** A crucial auxiliary protocol at the network layer used for error reporting and network diagnostics. Tools like `ping` and `traceroute` depend on ICMP. Understanding ICMP messages helps troubleshoot connectivity issues.
*   **IP Addressing:** The foundation of network layer communication. Proper subnetting and CIDR allocation are vital for network health and growth.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **References**

*   **Kurose & Ross, Computer Networking: A Top-Down Approach, Sixth Edition:** Chapters 4 (Network Layer) will provide in-depth explanations of IP addressing, subnetting, CIDR, and ICMP.
*   **Forouzan, Data Communications and Networking, Fourth Edition:** Chapter 14 (Network Layer) will offer complementary insights into IP addressing, subnetting, CIDR, and ICMP message formats and functions.

---
**End of Module 3 Notes**