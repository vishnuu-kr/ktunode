---
title: "Address Resolution protocols (ARP, RARP)"
subject: "COMPUTER NETWORKS"
module: "Module 3: Network Layer: Datagram versus virtual"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff051"
status: "completed"
scrapedAt: "2026-05-23T18:00:08.393Z"
---
# Computer Networks: Module 3 - Network Layer: Address Resolution Protocols (ARP, RARP)

This module delves into crucial protocols at the Network Layer responsible for resolving addresses, enabling communication between devices on a local network and across wider internetworks. We will focus on Address Resolution Protocol (ARP) and Reverse Address Resolution Protocol (RARP).

**Learning Outcomes Covered:**

*   Understand the need for address resolution in mapping Network Layer addresses to Data Link Layer addresses.
*   Explain the operation of ARP and its different message types.
*   Describe the role of ARP in the context of IP datagram delivery.
*   Explain the operation of RARP and its limitations.
*   Compare and contrast ARP and RARP.

---

## 1. Introduction to Address Resolution

**Key Concept:** In packet-switched networks, communication often requires two types of addresses:

*   **Network Layer Address (e.g., IP Address):** Used for end-to-end delivery across different networks. It's a logical address.
*   **Data Link Layer Address (e.g., MAC Address):** Used for hop-by-hop delivery within a local network segment (e.g., an Ethernet LAN). It's a physical address, hardcoded into the network interface card (NIC).

**The Problem:** A host sending an IP datagram needs to know the MAC address of the next-hop destination (which could be the final destination host or a router). However, it only knows the destination IP address. Therefore, a mechanism is needed to translate an IP address into its corresponding MAC address. This is where Address Resolution Protocols come in.

**CO1, CO2, CO3 Alignment:** This section directly addresses the need for protocols at different layers (Network and Data Link) and the function of addressing protocols.

---

## 2. Address Resolution Protocol (ARP)

**Key Concept:** ARP is a protocol used to discover the Data Link Layer address (MAC address) associated with a given Network Layer address (IP address) on a local network. It operates at the boundary between the Network Layer and the Data Link Layer.

**How it Works (The ARP Process):**

1.  **Request:** When a host (Host A) wants to send an IP datagram to another host (Host B) on the **same local network**, and Host A knows Host B's IP address but not its MAC address, Host A broadcasts an **ARP Request** message.
    *   The ARP Request contains:
        *   Sender's MAC address and IP address.
        *   Target MAC address (usually filled with zeros or a broadcast MAC address like FF:FF:FF:FF:FF:FF).
        *   Target IP address (the IP address of Host B).
2.  **Reply:** All hosts on the local network receive the ARP Request. However, only the host whose IP address matches the Target IP address (Host B) will respond.
    *   Host B sends an **ARP Reply** message directly back to Host A (unicast).
    *   The ARP Reply contains:
        *   Sender's MAC address (Host B's MAC address) and IP address.
        *   Target MAC address (Host A's MAC address, taken from the ARP Request).
        *   Target IP address (Host A's IP address, taken from the ARP Request).
3.  **Caching:** Upon receiving the ARP Reply, Host A records the mapping of Host B's IP address to its MAC address in its **ARP cache** (also known as ARP table or ARP binding table). This cache stores recent IP-to-MAC address mappings to avoid sending ARP requests for every communication.

**ARP Message Format:**

The ARP message is encapsulated within an **Ethernet frame**. The EtherType field in the Ethernet header indicates that the payload is an ARP message.

```
+-----------------+-----------------+
|   Ethernet      |   ARP Message   |
|   Header        |                 |
+-----------------+-----------------+
```

**ARP Message Fields:**

*   **Hardware Type (HTYPE):** Specifies the network hardware (e.g., 1 for Ethernet).
*   **Protocol Type (PTYPE):** Specifies the network protocol (e.g., 0x0800 for IPv4).
*   **Hardware Address Length (HLEN):** Length of the hardware address (e.g., 6 for Ethernet MAC addresses).
*   **Protocol Address Length (PLEN):** Length of the protocol address (e.g., 4 for IPv4 addresses).
*   **Operation Code:**
    *   1: ARP Request
    *   2: ARP Reply
*   **Sender Hardware Address (SHA):** Sender's MAC address.
*   **Sender Protocol Address (SPA):** Sender's IP address.
*   **Target Hardware Address (THA):** Target's MAC address (filled with zeros in a request).
*   **Target Protocol Address (TPA):** Target's IP address.

**Example Scenario:**

Host A (IP: 192.168.1.10, MAC: 0A:0A:0A:0A:0A:0A) wants to send an IP datagram to Host B (IP: 192.168.1.20, MAC: 0B:0B:0B:0B:0B:0B) on the same Ethernet LAN.

1.  **Host A:**
    *   Looks up Host B's IP (192.168.1.20) in its ARP cache. If not found:
    *   Constructs an ARP Request:
        *   HTYPE: Ethernet (1)
        *   PTYPE: IPv4 (0x0800)
        *   HLEN: 6
        *   PLEN: 4
        *   Opcode: 1 (Request)
        *   SHA: 0A:0A:0A:0A:0A:0A
        *   SPA: 192.168.1.10
        *   THA: 00:00:00:00:00:00 (or FF:FF:FF:FF:FF:FF)
        *   TPA: 192.168.1.20
    *   Encapsulates this ARP Request in an Ethernet frame with the destination MAC address as FF:FF:FF:FF:FF:FF (broadcast).
2.  **All Hosts on the LAN:** Receive the broadcast Ethernet frame.
3.  **Host B (192.168.1.20):**
    *   Examines the ARP Request. Sees that TPA (192.168.1.20) matches its own IP address.
    *   Constructs an ARP Reply:
        *   HTYPE: Ethernet (1)
        *   PTYPE: IPv4 (0x0800)
        *   HLEN: 6
        *   PLEN: 4
        *   Opcode: 2 (Reply)
        *   SHA: 0B:0B:0B:0B:0B:0B (Host B's MAC)
        *   SPA: 192.168.1.20
        *   THA: 0A:0A:0A:0A:0A:0A (Host A's MAC, from the request)
        *   TPA: 192.168.1.10
    *   Encapsulates this ARP Reply in an Ethernet frame with the destination MAC address as 0A:0A:0A:0A:0A:0A (Host A's MAC).
4.  **Host A:**
    *   Receives the ARP Reply.
    *   Adds the mapping (192.168.1.20 -> 0B:0B:0B:0B:0B:0B) to its ARP cache.
    *   Can now send the IP datagram to Host B, with the Ethernet frame destination MAC set to 0B:0B:0B:0B:0B:0B.

**ARP Cache:**

*   A table maintained by each host/router on a network.
*   Stores mappings of IP addresses to MAC addresses for recently contacted hosts.
*   Entries typically have a Time-To-Live (TTL) and expire after a period (e.g., a few minutes) to account for dynamic address changes.
*   **`arp -a`** command (on Windows/Linux/macOS) displays the ARP cache.

**ARP Variations and Considerations:**

*   **Proxy ARP:** When a router answers an ARP request on behalf of another host (e.g., a host on a different subnet), the router sends its own MAC address in the ARP reply. This is generally discouraged as it can lead to routing loops.
*   **Gratuitous ARP:** An ARP message where the sender's IP and MAC addresses are advertised without a prior request. It's used for:
    *   **Address Conflict Detection:** A host sends a gratuitous ARP for its own IP address. If another host responds, it indicates an IP address conflict.
    *   **Announcing MAC Address Changes:** When a device's MAC address changes, it can send a gratuitous ARP to update the ARP caches of other devices.
*   **ARP Spoofing/Poisoning:** A malicious attack where a attacker sends forged ARP messages on a LAN. This can hijack traffic or enable man-in-the-middle attacks.

**CO2, CO3 Alignment:** ARP directly demonstrates the function of protocols at different layers and is a core addressing protocol for local network communication.

---

## 3. Reverse Address Resolution Protocol (RARP)

**Key Concept:** RARP is a protocol used by a diskless workstation or a new host to discover its own IP address when it only knows its MAC address. It's a broadcast-based protocol.

**How it Works:**

1.  **Request:** A host (Client) that needs its IP address boots up. It doesn't have an IP address to send an IP packet.
    *   The Client broadcasts a **RARP Request** message on the local network.
    *   The RARP Request contains:
        *   Client's MAC address.
        *   A request for its own IP address.
2.  **Reply:** A **RARP Server** on the same local network responds to the RARP Request.
    *   The RARP Server maintains a table that maps MAC addresses to IP addresses.
    *   If the RARP Server finds the client's MAC address in its table, it sends a **RARP Reply** directly to the client's MAC address.
    *   The RARP Reply contains the client's IP address.

**RARP Message Format:**

Similar to ARP, RARP messages are encapsulated in Ethernet frames.

```
+-----------------+-----------------+
|   Ethernet      |   RARP Message  |
|   Header        |                 |
+-----------------+-----------------+
```

**RARP Message Fields:**

*   Hardware Type, Protocol Type, HLEN, PLEN: Similar to ARP.
*   Operation Code:
    *   1: RARP Request
    *   2: RARP Reply
*   Sender Hardware Address (SHA): Client's MAC address.
*   Sender Protocol Address (SPA): Client's IP address (usually filled with zeros in a request).
*   Target Hardware Address (THA): Client's MAC address.
*   Target Protocol Address (TPA): Client's IP address (filled with zeros in a request).

**Example Scenario:**

A diskless workstation (MAC: 0C:0C:0C:0C:0C:0C) boots up and needs its IP address.

1.  **Client:**
    *   Constructs a RARP Request:
        *   Opcode: 1 (Request)
        *   SHA: 0C:0C:0C:0C:0C:0C
        *   SPA: 0.0.0.0 (Unknown)
        *   THA: 0C:0C:0C:0C:0C:0C
        *   TPA: 0.0.0.0 (Unknown)
    *   Encapsulates this in an Ethernet frame with destination FF:FF:FF:FF:FF:FF.
2.  **RARP Server:**
    *   Receives the broadcast.
    *   Looks up the SHA (0C:0C:0C:0C:0C:0C) in its configuration table.
    *   Finds the mapping: 0C:0C:0C:0C:0C:0C -> 192.168.1.30.
    *   Constructs a RARP Reply:
        *   Opcode: 2 (Reply)
        *   SHA: MAC address of the RARP server interface.
        *   SPA: 192.168.1.30 (The assigned IP address)
        *   THA: 0C:0C:0C:0C:0C:0C (Client's MAC)
        *   TPA: 192.168.1.30 (Client's IP)
    *   Encapsulates this in an Ethernet frame with destination 0C:0C:0C:0C:0C:0C.
3.  **Client:**
    *   Receives the RARP Reply and configures its IP address to 192.168.1.30.

**Limitations of RARP:**

*   **Requires a dedicated RARP server on each subnet:** The RARP server must know the MAC-to-IP mappings for all clients on its subnet.
*   **Cannot pass through routers:** RARP requests are broadcasts and are not forwarded by routers. This means a RARP server is needed for every physical network segment.
*   **Only provides IP address:** It doesn't provide other necessary configuration information like subnet mask, default gateway, or DNS server.
*   **Inefficient:** Requires a dedicated server and can be slow.

**CO1, CO2, CO3 Alignment:** RARP showcases a protocol function at the Network Layer for address discovery and highlights limitations of early network configuration protocols.

---

## 4. Comparison: ARP vs. RARP

| Feature          | ARP (Address Resolution Protocol)                                | RARP (Reverse Address Resolution Protocol)                       |
| :--------------- | :------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Purpose**      | Maps IP address to MAC address.                                | Maps MAC address to IP address.                                  |
| **Direction**    | Known IP, discover MAC.                                        | Known MAC, discover IP.                                          |
| **Initiator**    | Host needing to send a packet to a known IP.                   | Host needing to discover its own IP address at boot time.       |
| **Message Type** | ARP Request (Broadcast), ARP Reply (Unicast).                  | RARP Request (Broadcast), RARP Reply (Unicast).                  |
| **Scope**        | Primarily for communication within a local network segment.    | Primarily for diskless workstations on a local network segment.  |
| **Server Req.**  | No dedicated server; uses broadcast and replies from target.   | Requires a dedicated RARP server on each subnet to map MACs to IPs. |
| **Router Transit**| Can be used across subnets with proxies, but typically local.  | Cannot pass through routers (broadcast-based).                   |
| **Modern Usage** | Ubiquitous and essential for IP communication on local nets.   | Largely obsolete; replaced by DHCP and BOOTP.                    |
| **CO Alignment** | CO2, CO3                                                       | CO1, CO2, CO3                                                    |

---

## 5. Modern Alternatives and Context

**RARP is largely replaced by:**

*   **BOOTP (Bootstrap Protocol):** An earlier protocol that extended RARP by allowing servers to provide more configuration parameters (IP address, subnet mask, default gateway, DNS server) to clients. BOOTP still uses broadcast.
*   **DHCP (Dynamic Host Configuration Protocol):** The current standard. It's more robust and flexible than BOOTP.
    *   DHCP clients broadcast a DHCP Discover message.
    *   DHCP servers respond with a DHCP Offer.
    *   Clients request the offered configuration (DHCP Request).
    *   Servers acknowledge the lease (DHCP ACK).
    *   DHCP can assign IP addresses, subnet masks, default gateways, DNS server addresses, and other network configuration parameters.
    *   DHCP uses a relay agent to forward requests across subnets, overcoming the limitations of RARP and BOOTP.

**ARP's Importance:**

Despite the evolution of higher-level protocols, ARP remains fundamental to how devices on an Ethernet LAN (or other link-layer technologies that use MAC addresses) communicate with each other when they know each other's IP addresses.

**CO1, CO2, CO3 Alignment:** Discussing DHCP and BOOTP in relation to RARP reinforces understanding of protocol evolution and functions at the Network Layer.

---

## 6. Practice Questions and Answers

**Question 1 (CO2, CO3):**
When Host A needs to send an IP datagram to Host B on the same local network, and Host A does not have Host B's MAC address in its ARP cache, what type of message does Host A send, and to whom is it addressed?

**Answer 1:**
Host A sends an **ARP Request** message, which is addressed to the **broadcast MAC address** (FF:FF:FF:FF:FF:FF) on the local network.

---

**Question 2 (CO2, CO3):**
Describe the role of the ARP cache in the efficiency of network communication.

**Answer 2:**
The ARP cache stores recently resolved IP-to-MAC address mappings. This prevents a host from having to send an ARP request for every packet it sends to a known destination on the local network. By looking up the MAC address in the cache first, the overhead of broadcast ARP requests is significantly reduced, making communication more efficient. Entries in the ARP cache expire after a certain time to handle dynamic changes.

---

**Question 3 (CO1, CO2):**
What is the primary purpose of RARP? What problem does it solve?

**Answer 3:**
The primary purpose of RARP is to allow a host (typically a diskless workstation) to discover its own IP address when it boots up. It solves the problem of a host needing an IP address to communicate but not having one configured at startup. It uses its known MAC address to ask a RARP server for its IP address.

---

**Question 4 (CO3):**
A router is performing proxy ARP. An ARP request arrives for IP address X. The router's proxy ARP configuration indicates it should respond for IP address X. What MAC address will the router place in the ARP reply for the Target Hardware Address field?

**Answer 4:**
The router will place **its own MAC address** in the Target Hardware Address field of the ARP reply. This is because the ARP reply is sent from the router, and the requesting host will then use the router's MAC address to reach the destination IP address X.

---

**Question 5 (CO1, CO2, CO3):**
Why is RARP considered obsolete, and what protocol replaced it? Mention at least two advantages of the replacement protocol over RARP.

**Answer 5:**
RARP is obsolete because it required a dedicated RARP server on every subnet, could not pass through routers, and only provided an IP address (not other necessary configuration details). The protocol that replaced it is **DHCP (Dynamic Host Configuration Protocol)**.

Advantages of DHCP over RARP:
1.  **Centralized Configuration:** DHCP servers can manage IP address pools and configuration parameters for multiple clients across different subnets (with the help of relay agents).
2.  **Richer Configuration:** DHCP can provide much more than just an IP address, including subnet mask, default gateway, DNS server addresses, domain name, and lease times.
3.  **Scalability:** DHCP is much more scalable and easier to manage than RARP.

---

## 7. Important Points to Remember

*   **ARP: IP to MAC mapping on local networks.** The fundamental protocol for IP over Ethernet.
*   **ARP Request is a broadcast, ARP Reply is a unicast.**
*   **ARP cache is crucial for efficiency.**
*   **RARP: MAC to IP mapping for boot-up.** Solves the diskless workstation problem.
*   **RARP requires a server on each subnet and cannot cross routers.**
*   **DHCP is the modern, more capable replacement for RARP and BOOTP.**
*   **Link Layer addresses (MAC) are used for local delivery, Network Layer addresses (IP) for end-to-end delivery.** ARP bridges this gap locally.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. Textbooks and Reference Books Incorporated

*   **Kurose & Ross (Sixth Edition):** Provides a top-down approach, explaining the motivations and operations of ARP and the need for address resolution in the context of IP datagram delivery. Coverage of the Network Layer's interaction with the Data Link Layer is prominent.
*   **Forouzan (Fourth Edition):** Offers detailed explanations of the frame formats and operational steps for both ARP and RARP, including the different message types and how they are encapsulated. Emphasis on the role of these protocols in LAN environments.
*   **Peterson & Davie / Tanenbaum & Wetherall:** These provide broader systems context and delve into the underlying mechanisms and implementation details of network protocols, including address resolution.
*   **Kumar, Manjunath, Kuri / Bertsekas & Gallager:** These reference books offer analytical perspectives, which can be helpful for understanding the efficiency implications and design choices behind protocols like ARP.

---

## 9. Course Outcomes Alignment Summary

*   **CO1 (Principles, Components, Switching, Delay, Layered Architecture):** This module touches upon the layered architecture by showing the interaction between the Network and Data Link layers. Understanding ARP and RARP (and their limitations/replacements) is part of understanding network components and how they function.
*   **CO2 (Protocols and Functions of Different Layers):** ARP and RARP are direct examples of protocols and their functions at the Network Layer and their reliance on the Data Link Layer.
*   **CO3 (Routing and Addressing Protocols):** This module is heavily focused on addressing protocols (ARP and RARP), explaining how they enable communication by resolving addresses, which is critical for both local delivery and supporting routing decisions.
*   **CO4 (Physical Communication Standards):** While not directly detailing physical standards, the context of ARP (especially its prevalence in Ethernet) implicitly relies on the MAC addressing schemes defined by IEEE 802 standards for physical communication.

---
This concludes the study notes for Address Resolution Protocols (ARP, RARP). Ensure you understand the core difference between ARP and RARP, and the reasons why RARP has been superseded by DHCP. Practice simulating these protocols to solidify your understanding.