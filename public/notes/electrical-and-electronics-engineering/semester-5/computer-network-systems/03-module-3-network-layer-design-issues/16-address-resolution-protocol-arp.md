---
title: "Address Resolution Protocol (ARP)"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 3: Network layer design issues"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3648c"
status: "completed"
scrapedAt: "2026-05-23T16:20:18.289Z"
---
Sure, here are detailed study notes on the Address Resolution Protocol (ARP) for your Computer Network Systems course.

---

# Computer Network Systems - Module 3: Network Layer Design Issues

## Topic: Address Resolution Protocol (ARP)

### 1. Introduction to ARP

The Address Resolution Protocol (ARP) is a crucial protocol in computer networking, operating at the Data Link Layer (Layer 2) and interacting with the Network Layer (Layer 3). Its primary purpose is to map Network Layer addresses (like IP addresses) to Data Link Layer addresses (like MAC addresses).

*   **Key Concept:** ARP bridges the gap between Layer 3 (logical addressing) and Layer 2 (physical addressing). Devices on a local network segment need to know the MAC address of the destination host to encapsulate data in frames for transmission.

*   **Why is ARP needed?**
    *   When a host wants to send a packet to another host on the *same local network*, it needs the destination host's MAC address to create an Ethernet frame.
    *   The sending host knows the destination IP address (Layer 3), but it doesn't inherently know the destination MAC address (Layer 2).
    *   ARP is used to discover this MAC address.

*   **Relevance to Course Outcomes:**
    *   **CO1 (K2):** Understanding ARP is essential for explaining how networks operate at different layers and how protocols facilitate communication.
    *   **CO2 (K2):** ARP directly relates to the role of the MAC sublayer, as it's the MAC address that ARP resolves. It's fundamental to Ethernet communication.
    *   **CO3 (K2):** While ARP itself isn't a routing algorithm, it's a prerequisite for hosts to communicate with each other on a local network, which is a building block for routing.

*   **Textbook References:**
    *   **Tanenbaum (5th Ed.):** Discusses ARP in the context of local area networks and IP addressing.
    *   **Forouzan (5th Ed.):** Provides a detailed explanation of ARP's operation and message formats.
    *   **Kurose & Ross (6th Ed.):** Often includes ARP as a foundational element in explaining how the Internet works.

### 2. ARP Operation

ARP works on a request-reply mechanism.

#### 2.1. ARP Request

When Host A wants to send a packet to Host B on the same local network, and Host A knows Host B's IP address but not its MAC address, Host A performs the following:

1.  **ARP Request Packet Creation:** Host A creates an ARP request message.
    *   **Sender MAC Address:** Host A's MAC address.
    *   **Sender IP Address:** Host A's IP address.
    *   **Target MAC Address:** Set to a broadcast MAC address (`FF:FF:FF:FF:FF:FF`). This signifies that the message needs to be delivered to all devices on the local network.
    *   **Target IP Address:** Host B's IP address (the IP address whose MAC address Host A wants to find).

2.  **Broadcasting:** Host A encapsulates this ARP request in an Ethernet frame. The destination MAC address of this Ethernet frame is `FF:FF:FF:FF:FF:FF`. This frame is sent to the local network's broadcast address.

3.  **Reception by All Hosts:** All hosts on the local network segment receive this broadcast frame.

4.  **Processing the Request:** Each host on the network checks the "Target IP Address" field in the ARP request.
    *   If the "Target IP Address" matches its own IP address, the host recognizes that this ARP request is for it.
    *   If it doesn't match, the host discards the ARP request.

#### 2.2. ARP Reply

The host that recognizes its IP address (e.g., Host B) then sends an ARP reply back to Host A.

1.  **ARP Reply Packet Creation:** Host B creates an ARP reply message.
    *   **Sender MAC Address:** Host B's MAC address.
    *   **Sender IP Address:** Host B's IP address.
    *   **Target MAC Address:** Host A's MAC address (which was provided in the ARP request).
    *   **Target IP Address:** Host A's IP address (also provided in the ARP request).

2.  **Unicasting:** Host B encapsulates this ARP reply in an Ethernet frame. The destination MAC address of this Ethernet frame is Host A's MAC address. This frame is sent directly to Host A (unicast).

3.  **Reception by Host A:** Host A receives the ARP reply.

4.  **ARP Cache Update:** Upon receiving the ARP reply, Host A updates its local ARP cache (or ARP table) by storing the mapping between Host B's IP address and Host B's MAC address.

5.  **Packet Transmission:** Now that Host A knows Host B's MAC address, it can create the IP packet for Host B, encapsulate it in an Ethernet frame with Host B's MAC address as the destination, and send it.

*   **Example:**
    *   Host A (IP: 192.168.1.10, MAC: AA:AA:AA:AA:AA:AA) wants to send a packet to Host B (IP: 192.168.1.20, MAC: BB:BB:BB:BB:BB:BB).
    *   Host A sends an ARP Request:
        *   Sender MAC: AA:AA:AA:AA:AA:AA
        *   Sender IP: 192.168.1.10
        *   Target MAC: FF:FF:FF:FF:FF:FF
        *   Target IP: 192.168.1.20
    *   Host B (IP: 192.168.1.20) receives the request, matches its IP, and sends an ARP Reply:
        *   Sender MAC: BB:BB:BB:BB:BB:BB
        *   Sender IP: 192.168.1.20
        *   Target MAC: AA:AA:AA:AA:AA:AA
        *   Target IP: 192.168.1.10
    *   Host A receives the reply, learns Host B's MAC (BB:BB:BB:BB:BB:BB), and sends its packet to that MAC address.

*   **Textbook References:**
    *   **Forouzan (5th Ed.):** Chapter 18 provides a detailed breakdown of the ARP request and reply messages.
    *   **Tanenbaum (5th Ed.):** Section 5.4 describes the ARP protocol and its messages.

### 3. ARP Cache (ARP Table)

To avoid sending an ARP request for every single packet, hosts maintain an **ARP cache** (also known as an ARP table).

*   **Key Concept:** An ARP cache is a local memory table that stores recently resolved IP-to-MAC address mappings.

*   **How it works:**
    1.  When a host sends an ARP request and receives a reply, it stores the IP-to-MAC mapping in its ARP cache.
    2.  Before sending a packet to another host on the local network, the sending host first checks its ARP cache.
    3.  If the destination IP address is found in the cache, the host uses the corresponding MAC address directly, without sending an ARP request.
    4.  If the destination IP address is not found in the cache, the host sends an ARP request to discover the MAC address.
    5.  **Cache Timeout:** Entries in the ARP cache are temporary. They typically expire after a certain period (e.g., a few minutes to a few hours) to ensure that mappings are up-to-date if a host's IP or MAC address changes. This also prevents the cache from growing indefinitely.

*   **Example Commands (Common OS):**
    *   **Windows:** `arp -a` (to display the ARP cache)
    *   **Linux/macOS:** `arp -n` or `ip neigh`

*   **Textbook References:**
    *   **Forouzan (5th Ed.):** Section 18.3 discusses the ARP cache.
    *   **Stevens (TCP/IP Illustrated Vol. 1):** Provides in-depth insights into the implementation of ARP caches in operating systems.

### 4. ARP Message Format

The structure of an ARP message is standardized. Here's a typical format, as described by Forouzan and Tanenbaum:

| Field              | Size (Bytes) | Description                                                                                                                               |
| :----------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| Hardware Type      | 2            | Type of network hardware (e.g., 1 for Ethernet).                                                                                        |
| Protocol Type      | 2            | Type of network protocol (e.g., 0x0800 for IPv4).                                                                                         |
| Hardware Address Length | 1            | Length of hardware address in bytes (e.g., 6 for Ethernet MAC addresses).                                                                 |
| Protocol Address Length | 1            | Length of protocol address in bytes (e.g., 4 for IPv4 addresses).                                                                         |
| Opcode             | 2            | Operation code: 1 for ARP request, 2 for ARP reply.                                                                                       |
| Sender MAC Address | 6            | MAC address of the sender.                                                                                                                |
| Sender Protocol Address | 4            | IP address of the sender.                                                                                                                 |
| Target MAC Address | 6            | MAC address of the target (set to 00:00:00:00:00:00 in an ARP request from the sender's perspective).                                          |
| Target Protocol Address | 4            | IP address of the target.                                                                                                                 |

*   **Important Point:** The ARP message itself is encapsulated within a Data Link layer frame (e.g., an Ethernet frame). The Ethernet header will contain the source MAC address (of the sender) and the destination MAC address (broadcast for request, sender's MAC for reply). The ARP message's "Sender MAC Address" and "Target MAC Address" fields are part of the *payload* of the Ethernet frame.

*   **Textbook References:**
    *   **Forouzan (5th Ed.):** Figure 18.2 shows the ARP message format.
    *   **Tanenbaum (5th Ed.):** Section 5.4.1 provides a similar structure.

### 5. ARP Variations and Related Protocols

*   **Proxy ARP:**
    *   **Concept:** A router can answer ARP requests on behalf of hosts on another network segment. If a host on subnet A sends an ARP request for an IP address on subnet B, and the router is connected to both subnets, the router can reply with its own MAC address, indicating that it can route the packet to the destination.
    *   **Purpose:** Allows hosts on a subnet to believe they are on the same network as hosts on other subnets, simplifying their network configuration.
    *   **Caveat:** Can sometimes cause confusion and routing issues if not managed carefully.
    *   **Textbook Reference:** Forouzan (5th Ed.) discusses proxy ARP.

*   **Gratuitous ARP (or ARP Announcement):**
    *   **Concept:** A host sends an ARP announcement to advertise its own IP-to-MAC address mapping without being prompted by an ARP request.
    *   **Use Cases:**
        *   **New Host on Network:** When a host boots up, it can send a gratuitous ARP to announce its presence and IP address. This helps other hosts on the network update their ARP caches if they had a previous mapping for that IP (e.g., if an IP address has been reassigned).
        *   **IP Address Change:** If a host's IP address changes, it can send a gratuitous ARP to inform other devices on the network.
        *   **Redundant Failover:** In high-availability scenarios, a standby server can send gratuitous ARP messages to take over an IP address if the primary server fails.
    *   **Mechanism:** The host sends an ARP packet where the "Sender IP Address" and "Target IP Address" are its own IP address, and the "Target MAC Address" is `FF:FF:FF:FF:FF:FF` (broadcast). This causes all hosts to receive the announcement and update their ARP caches.
    *   **Textbook Reference:** Tanenbaum (5th Ed.) and Forouzan (5th Ed.) may mention this as a common practice.

*   **InARP (Inverse ARP):**
    *   **Concept:** Used in certain network technologies (like Frame Relay or ATM) where a Data Link layer address is known, but the corresponding Network Layer address is not. InARP is used to discover the Network Layer address.
    *   **Contrast with ARP:** ARP maps Network Layer (IP) to Data Link Layer (MAC). InARP maps Data Link Layer (e.g., DLCI in Frame Relay) to Network Layer (IP).
    *   **Textbook Reference:** Forouzan (5th Ed.) might cover this in sections related to non-Ethernet WAN technologies.

*   **RARP (Reverse Address Resolution Protocol):**
    *   **Concept:** An older protocol used by diskless workstations to obtain their IP address at boot time by broadcasting their MAC address.
    *   **Limitation:** Required a dedicated RARP server on the network to respond.
    *   **Superseded by:** BOOTP and DHCP, which are more robust and offer more features.
    *   **Textbook Reference:** Often discussed as a historical protocol in chapters about IP addressing or booting.

*   **Textbook References:**
    *   **Forouzan (5th Ed.):** Chapters on IP addressing and specific network types often mention these variations.
    *   **Tanenbaum (5th Ed.):** Discusses these in relevant sections related to network addressing and Layer 2/Layer 3 interactions.

### 6. ARP and Routing

*   **How ARP fits into routing:**
    1.  A router receives an IP packet destined for an IP address on a network segment directly connected to it.
    2.  The router needs to forward the packet to the next hop (which might be another router or the final destination host).
    3.  If the next hop is on a directly connected network, the router needs the MAC address of that next hop.
    4.  The router uses ARP to resolve the MAC address of the next hop's interface.
    5.  The router then encapsulates the IP packet in a Data Link layer frame with the appropriate source (router's interface MAC) and destination (next hop's MAC) addresses.
    6.  If the destination IP address is on a remote network (not directly connected), the router sends the packet to its configured default gateway. The default gateway then handles the next hop resolution using ARP.

*   **Example:**
    *   Host A (192.168.1.10) wants to send a packet to Host C (10.0.0.5) on a different network.
    *   Host A knows that its default gateway is Router R1 (192.168.1.1).
    *   Host A performs ARP to find the MAC address of R1 (192.168.1.1).
    *   Host A sends the IP packet to R1's MAC address.
    *   Router R1 receives the packet, inspects the destination IP address (10.0.0.5), and consults its routing table.
    *   R1 determines that 10.0.0.5 is reachable via its interface connected to the 10.0.0.0/24 network. Let's say R1's interface on that network is 10.0.0.1.
    *   R1 needs to find the MAC address of the *next hop* on the 10.0.0.0/24 network. If 10.0.0.5 is a host on that segment, R1 performs ARP for 10.0.0.5.
    *   R1 sends an ARP request for 10.0.0.5.
    *   Host C (10.0.0.5) replies with its MAC address.
    *   R1 then sends the IP packet to Host C's MAC address.

*   **Textbook References:**
    *   **Kurose & Ross (6th Ed.):** Emphasizes ARP as a crucial link between network layer addressing and link layer framing, essential for routing.
    *   **Peterson & Dave (5th Ed.):** Discusses ARP in the context of the network layer's role in forwarding packets.

### 7. Security Considerations with ARP

*   **ARP Spoofing (or ARP Poisoning):**
    *   **Concept:** An attacker sends forged ARP messages onto a local network. This can associate the attacker's MAC address with the IP address of a legitimate host (like the default gateway).
    *   **Consequences:**
        *   **Man-in-the-Middle (MITM) Attacks:** The attacker can intercept traffic between two hosts.
        *   **Denial of Service (DoS):** The attacker can flood the network with ARP traffic, causing disruption.
        *   **Traffic Redirection:** Traffic intended for a legitimate host is sent to the attacker instead.
    *   **Mitigation:**
        *   **Static ARP Entries:** Manually configuring ARP entries on critical devices (like servers and routers) to prevent them from being overwritten by spoofed ARP messages.
        *   **ARP Inspection (Dynamic ARP Inspection - DAI):** A security feature on managed switches that validates ARP packets on a network. It checks if the MAC-to-IP binding in an ARP packet is valid (e.g., by consulting DHCP snooping bindings).
        *   **Port Security:** Limiting the number of MAC addresses allowed on a switch port.
        *   **Network Segmentation:** Limiting the scope of ARP broadcasts.
    *   **Textbook References:**
        *   **Forouzan (5th Ed.):** Often includes a section on security implications of network protocols.
        *   **Kurose & Ross (6th Ed.):** May touch upon ARP vulnerabilities in security-focused chapters.

### 8. Summary of Key Points

*   **Purpose:** ARP maps IP addresses (Layer 3) to MAC addresses (Layer 2) for communication on a local network.
*   **Mechanism:** Request-reply based. A request is broadcast, and a reply is unicast.
*   **ARP Cache:** Stores IP-to-MAC mappings to reduce network traffic and improve performance.
*   **Message Format:** Includes hardware type, protocol type, address lengths, opcode, and sender/target addresses.
*   **Variations:** Proxy ARP, Gratuitous ARP, InARP, RARP.
*   **Role in Routing:** Essential for routers to find the MAC addresses of next hops on directly connected networks.
*   **Security:** Vulnerable to spoofing attacks, necessitating mitigation strategies like static ARP and DAI.

---

### Practice Questions and Answers

**Question 1:** What is the primary function of the Address Resolution Protocol (ARP)?
**Answer:** The primary function of ARP is to resolve a known Network Layer address (like an IPv4 address) into a known Data Link Layer address (like an Ethernet MAC address) for communication within a local network segment.

**Question 2:** When Host A wants to send an IP packet to Host B on the same local network, and Host A does not have Host B's MAC address in its ARP cache, what type of ARP message does Host A send, and to which MAC address is it sent?
**Answer:** Host A sends an ARP **request** message. This request is sent to the **broadcast MAC address (FF:FF:FF:FF:FF:FF)**.

**Question 3:** Describe the process of an ARP reply. What information does the target host include in its reply, and to whom is it sent?
**Answer:** When a host receives an ARP request for its IP address, it creates an ARP reply. The reply includes the sender's MAC address (its own), sender's IP address (its own), target MAC address (the MAC address of the host that sent the ARP request), and target IP address (the IP address of the host that sent the ARP request). This ARP reply is sent directly (unicast) to the MAC address of the original sender.

**Question 4:** Why is an ARP cache (or ARP table) used by hosts?
**Answer:** An ARP cache is used to store recently resolved IP-to-MAC address mappings. This avoids the need to send an ARP request for every single packet, improving efficiency and reducing network overhead.

**Question 5:** What is ARP spoofing, and what is one common method to mitigate it?
**Answer:** ARP spoofing (or ARP poisoning) is an attack where an attacker sends forged ARP messages to associate their MAC address with the IP address of another host, often the default gateway. One common mitigation method is using **static ARP entries** on critical devices or implementing **Dynamic ARP Inspection (DAI)** on switches.

**Question 6:** Is ARP a Layer 2 or Layer 3 protocol? Explain its interaction with both layers.
**Answer:** ARP operates at the boundary of Layer 2 and Layer 3. It is **initiated by Layer 3** (when a host needs to send an IP packet but doesn't know the destination MAC address) and its messages are **encapsulated within Layer 2 frames** (e.g., Ethernet frames) for transmission. Its core function is to translate Layer 3 addresses to Layer 2 addresses.

**Question 7:** What is the purpose of Gratuitous ARP?
**Answer:** Gratuitous ARP is used by a host to announce its IP-to-MAC address mapping to the network without being prompted by an ARP request. This is useful for updating ARP caches when a host's IP address changes or when a new host joins the network.

---

### Important Points to Remember

*   **ARP is for the Local Network:** ARP only works for devices on the same physical network segment (broadcast domain). It cannot directly resolve the MAC address of a host on a different network. Routers are used for inter-network communication.
*   **Broadcast for Request:** ARP requests are always broadcast (`FF:FF:FF:FF:FF:FF`) to reach all devices on the local segment.
*   **Unicast for Reply:** ARP replies are always unicast, sent directly to the requesting host.
*   **ARP Cache Volatility:** ARP cache entries are temporary and expire. This is important for handling dynamic network environments but can lead to a small delay if an entry is needed but has expired.
*   **Security Vulnerability:** ARP is inherently insecure because it relies on trusting the ARP messages it receives. ARP spoofing is a significant threat.
*   **IP Address to MAC Address:** Always remember ARP maps the "logical" IP address to the "physical" MAC address.

---
