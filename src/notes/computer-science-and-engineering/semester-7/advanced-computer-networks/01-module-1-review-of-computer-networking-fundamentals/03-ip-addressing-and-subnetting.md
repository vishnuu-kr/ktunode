---
title: "IP Addressing and Subnetting"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 1: Review of Computer Networking Fundamentals "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c42b"
status: "completed"
scrapedAt: "2026-05-20T16:59:51.840Z"
---
# ADVANCED COMPUTER NETWORKS - Module 1: Review of Computer Networking Fundamentals

## Topic: IP Addressing and Subnetting

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Understand the structure and purpose of IP addresses (IPv4).
*   Differentiate between public and private IP addresses.
*   Explain the concept of Classful and Classless IP addressing.
*   Describe the role of subnet masks.
*   Perform IP address and subnet mask calculations.
*   Understand the benefits and process of subnetting.
*   Calculate network address, broadcast address, and usable host addresses for a given subnet.
*   Apply subnetting principles to design efficient IP addressing schemes.

---

### **1. Introduction to IP Addressing**

*   **Definition:** An Internet Protocol (IP) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.
*   **Purpose:**
    *   **Identification:** Uniquely identifies a device on a network.
    *   **Location Addressing:** Enables devices to be located and reached across networks.
*   **Types of IP Addresses:**
    *   **IPv4 (Internet Protocol version 4):** The most widely used IP addressing scheme. Uses 32-bit addresses.
    *   **IPv6 (Internet Protocol version 6):** A newer, 128-bit addressing scheme designed to address the exhaustion of IPv4 addresses. (While not the primary focus of this review, understanding its existence is important).

---

### **2. IPv4 Addressing Structure**

*   **Format:** A 32-bit number, typically represented in **dotted-decimal notation**.
*   **Dotted-Decimal Notation:** Four decimal numbers (0-255) separated by dots (e.g., 192.168.1.1).
    *   Each number represents 8 bits (an octet).
    *   Example: `192.168.1.1`
        *   `192` in binary: `11000000`
        *   `168` in binary: `10101000`
        *   `1` in binary: `00000001`
        *   `1` in binary: `00000001`
        *   Combined 32-bit binary: `11000000.10101000.00000001.00000001`

---

### **3. Public vs. Private IP Addresses**

*   **Public IP Addresses:**
    *   Globally unique and routable on the internet.
    *   Assigned by Internet Service Providers (ISPs) or Regional Internet Registries (RIRs).
    *   Used for devices that need direct access to the internet.
*   **Private IP Addresses:**
    *   Used within private networks (e.g., home networks, corporate LANs).
    *   Not routable on the public internet.
    *   Designed to conserve public IP address space.
    *   Managed by RFC 1918.
    *   **Reserved Ranges:**
        *   `10.0.0.0` to `10.255.255.255` (10.0.0.0/8)
        *   `172.16.0.0` to `172.31.255.255` (172.16.0.0/12)
        *   `192.168.0.0` to `192.168.255.255` (192.168.0.0/16)
*   **NAT (Network Address Translation):** A technique used to map private IP addresses to public IP addresses, allowing multiple devices on a private network to share a single public IP address for internet access.

---

### **4. Classful IP Addressing (Legacy)**

*   **Concept:** An early method of dividing IP address space into classes based on the first octet. Each class had a predefined network portion and host portion.
*   **Classes and Ranges:**
    *   **Class A:** `1.0.0.0` to `126.255.255.255`
        *   First bit is `0`.
        *   Default Subnet Mask: `255.0.0.0` (/8)
        *   Large networks, few networks.
    *   **Class B:** `128.0.0.0` to `191.255.255.255`
        *   First two bits are `10`.
        *   Default Subnet Mask: `255.255.0.0` (/16)
        *   Medium networks.
    *   **Class C:** `192.0.0.0` to `223.255.255.255`
        *   First three bits are `110`.
        *   Default Subnet Mask: `255.255.255.0` (/24)
        *   Small networks, many networks.
    *   **Class D:** `224.0.0.0` to `239.255.255.255` (Multicast)
    *   **Class E:** `240.0.0.0` to `255.255.255.255` (Experimental)
*   **Limitations:** Inefficient use of IP addresses due to fixed block sizes.

---

### **5. Classless IP Addressing (CIDR)**

*   **Concept:** **Classless Inter-Domain Routing (CIDR)** is the modern method of IP address allocation and routing. It abandons the fixed class boundaries and allows for more flexible allocation of IP address blocks.
*   **CIDR Notation (Slash Notation):** Represents an IP address along with the number of bits used for the network portion.
    *   Format: `IP Address / Prefix Length`
    *   **Prefix Length:** The number of consecutive `1` bits in the subnet mask.
    *   Examples:
        *   `192.168.1.0/24`: Network address is `192.168.1.0`, and the first 24 bits define the network.
        *   `10.10.10.0/16`: Network address is `10.10.10.0`, and the first 16 bits define the network.
*   **Benefits:**
    *   **Efficient IP Address Utilization:** Allows for creation of networks of varying sizes, reducing wasted addresses.
    *   **Improved Routing Efficiency:** Enables aggregation of routes, simplifying routing tables.

---

### **6. Subnet Masks**

*   **Definition:** A 32-bit number used in conjunction with an IP address to separate the network portion from the host portion of the address.
*   **Structure:**
    *   A sequence of `1`s followed by a sequence of `0`s.
    *   The `1`s represent the network portion.
    *   The `0`s represent the host portion.
*   **How it Works:** A bitwise AND operation between an IP address and its subnet mask yields the **network address**.
*   **Examples:**
    *   **Class A Default:** `255.0.0.0` (Binary: `11111111.00000000.00000000.00000000`) - `/8`
    *   **Class B Default:** `255.255.0.0` (Binary: `11111111.11111111.00000000.00000000`) - `/16`
    *   **Class C Default:** `255.255.255.0` (Binary: `11111111.11111111.11111111.00000000`) - `/24`
*   **Custom Subnet Masks:** Used in subnetting to create smaller networks.

---

### **7. Subnetting**

*   **Definition:** The process of dividing a larger IP network into smaller, more manageable sub-networks (subnets).
*   **Process:** Borrowing bits from the host portion of an IP address to create additional network bits. These borrowed bits are used to identify the subnets.
*   **How to Subnet:**
    1.  **Identify the original network and its subnet mask (or CIDR prefix).**
    2.  **Determine the number of subnets required or the number of hosts per subnet.**
    3.  **Calculate the number of bits to borrow:**
        *   Number of subnets = 2^n (where 'n' is the number of bits borrowed).
        *   Number of usable hosts per subnet = 2^h - 2 (where 'h' is the number of remaining host bits, and -2 accounts for the network and broadcast addresses).
    4.  **Determine the new subnet mask:** Add the borrowed bits to the original network portion.
    5.  **Calculate the network address, broadcast address, and usable host IP range for each subnet.**

---

### **8. Subnetting Calculations**

Let's take an example: **Network: `192.168.1.0/24`**

**Scenario: We need to create 4 subnets.**

1.  **Original Network:** `192.168.1.0/24`
    *   Original Subnet Mask: `255.255.255.0`
    *   Network Bits: 24
    *   Host Bits: 32 - 24 = 8

2.  **Number of Subnets Required:** 4
    *   To get 4 subnets, we need 2^n = 4. So, n = 2 bits to borrow.

3.  **Borrowing Bits:**
    *   We borrow 2 bits from the host portion.
    *   New Network Bits: 24 (original) + 2 (borrowed) = 26 bits.
    *   New CIDR Notation: `/26`

4.  **New Subnet Mask:**
    *   Original mask: `11111111.11111111.11111111.00000000` (`/24`)
    *   Borrow 2 bits from the last octet: `11111111.11111111.11111111.11000000`
    *   Convert back to dotted-decimal: `255.255.255.192`

5.  **Subnet Calculations:**
    *   The block size (increment) in the last octet is determined by the value of the rightmost `1` bit of the borrowed bits. In `11000000`, the rightmost `1` is at the 64's place (2^6). So, the block size is 64.
    *   Remaining Host Bits: 32 - 26 = 6 bits.
    *   Usable Hosts per subnet: 2^6 - 2 = 64 - 2 = 62.

    **Subnet Table:**

    | Subnet Number | Network Address   | Subnet Mask         | CIDR | First Usable IP | Last Usable IP  | Broadcast Address |
    | :------------ | :---------------- | :------------------ | :--- | :-------------- | :-------------- | :---------------- |
    | 1             | `192.168.1.0`     | `255.255.255.192`   | /26  | `192.168.1.1`   | `192.168.1.62`  | `192.168.1.63`    |
    | 2             | `192.168.1.64`    | `255.255.255.192`   | /26  | `192.168.1.65`  | `192.168.1.126` | `192.168.1.127`   |
    | 3             | `192.168.1.128`   | `255.255.255.192`   | /26  | `192.168.1.129` | `192.168.1.190` | `192.168.1.191`   |
    | 4             | `192.168.1.192`   | `255.255.255.192`   | /26  | `192.168.1.193` | `192.168.1.254` | `192.168.1.255`   |

---

### **9. Key Concepts and Definitions Review**

*   **IP Address:** Unique identifier for a device on a network.
*   **IPv4:** 32-bit addressing scheme.
*   **Dotted-Decimal Notation:** Human-readable representation of IPv4 addresses.
*   **Public IP:** Globally unique and routable.
*   **Private IP:** Used in local networks, not routable on the internet.
*   **NAT:** Maps private to public IPs.
*   **Classful Addressing:** Older, fixed IP address allocation.
*   **CIDR (Classless Inter-Domain Routing):** Modern, flexible IP allocation.
*   **CIDR Notation (Slash Notation):** `IP Address / Prefix Length`.
*   **Subnet Mask:** Separates network and host portions of an IP address.
*   **Subnetting:** Dividing a network into smaller sub-networks.
*   **Network Address:** The first address in a subnet, identifying the network itself.
*   **Broadcast Address:** The last address in a subnet, used to send data to all hosts within that subnet.
*   **Usable Host Addresses:** IP addresses available for assignment to end devices.
*   **Prefix Length:** Number of bits in the network portion.
*   **Block Size/Increment:** The interval between the start of consecutive subnets.

---

### **10. Important Points to Remember**

*   **Network Address is NOT Usable for Hosts:** The first address in any subnet (where all host bits are 0) is reserved for the network address.
*   **Broadcast Address is NOT Usable for Hosts:** The last address in any subnet (where all host bits are 1) is reserved for broadcasting.
*   **Minimum Host Requirements:** Always ensure your subnetting provides enough host addresses for your needs, considering the `-2` rule.
*   **Powers of 2:** Subnetting often involves powers of 2 (for number of subnets, number of hosts).
*   **Binary Conversion is Key:** Understanding binary representation is crucial for accurate subnetting calculations.
*   **CIDR is the Standard:** Modern networks predominantly use CIDR for IP addressing.

---

### **11. Practice Questions and Exercises**

**Question 1:**
What is the network address for the IP address `172.20.55.100` with a subnet mask of `255.255.255.0`?

**Answer 1:**
To find the network address, we perform a bitwise AND operation between the IP address and the subnet mask.
*   IP Address: `172.20.55.100`
*   Subnet Mask: `255.255.255.0`
*   In binary, the last octet of the mask is `00000000`. Any bitwise AND with zero results in zero.
*   Therefore, the network address is `172.20.55.0`.

**Question 2:**
You are given the network `10.0.0.0/8`. How many bits do you need to borrow to create at least 500 subnets? What is the new subnet mask and CIDR notation?

**Answer 2:**
*   **Number of Subnets:** We need 2^n >= 500.
    *   2^8 = 256 (Not enough)
    *   2^9 = 512 (Enough)
    *   So, we need to borrow `n = 9` bits.
*   **Original Network:** `10.0.0.0/8` (8 network bits)
*   **New Network Bits:** 8 (original) + 9 (borrowed) = 17 bits.
*   **New CIDR Notation:** `/17`
*   **New Subnet Mask:**
    *   Original mask: `11111111.00000000.00000000.00000000` (`/8`)
    *   Borrow 9 bits from the host portion: `11111111.10000000.00000000.00000000`
    *   Convert to dotted-decimal: `255.128.0.0`

**Question 3:**
For the subnet `192.168.10.128/27`, what is the:
    a) Network Address
    b) Broadcast Address
    c) Number of Usable Host IPs

**Answer 3:**
*   **Network:** `192.168.10.128/27`
*   **Subnet Mask:** `/27` means the first 27 bits are for the network. The last octet has 27 - 24 = 3 network bits.
    *   Last octet binary: `11100000`
    *   Subnet Mask: `255.255.255.224`
*   **Block Size (Increment):** In the last octet, the rightmost `1` bit is at the 32's place (2^5). So, the block size is 32.
*   **Remaining Host Bits:** 32 - 27 = 5 bits.

    a) **Network Address:**
        *   The given IP `192.168.10.128` falls within the `192.168.10.128` block (since 128 is divisible by 32).
        *   Network Address: `192.168.10.128`

    b) **Broadcast Address:**
        *   Take the network address `192.168.10.128`.
        *   Set the remaining host bits (5 bits) to `1`.
        *   Last octet binary (network part): `111`
        *   Last octet binary (host part, all 1s): `11111`
        *   Combined last octet binary: `11111111`
        *   Convert to decimal: `255`
        *   Broadcast Address: `192.168.10.255`

    c) **Number of Usable Host IPs:**
        *   Number of host bits = 5.
        *   Usable Host IPs = 2^5 - 2 = 32 - 2 = 30.

---

### **12. Further Study Resources**

*   Cisco Networking Academy (CCNA courses)
*   CompTIA Network+ certification materials
*   RFC 791 (Internet Protocol)
*   RFC 1918 (Address Allocation for Private Internets)
*   Online IP subnetting calculators and tutorials.

---
