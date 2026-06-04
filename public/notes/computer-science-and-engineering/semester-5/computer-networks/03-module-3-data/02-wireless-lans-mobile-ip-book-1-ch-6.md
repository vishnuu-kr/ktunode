---
title: "Wireless LANs, Mobile IP (Book 1 Ch 6)"
subject: "COMPUTER NETWORKS"
module: "Module 3: Data"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b529"
status: "completed"
scrapedAt: "2026-05-20T16:43:33.919Z"
---
## COMPUTER NETWORKS - Module 3: Data - Wireless LANs, Mobile IP (Book 1 Ch 6)

**Learning Outcomes:**

*   Understand the architecture and components of Wireless LANs (WLANs).
*   Explain the different IEEE 802.11 standards and their characteristics.
*   Describe the operation of the Distributed Coordination Function (DCF) and Point Coordination Function (PCF) access methods.
*   Understand security mechanisms in WLANs, including WEP, WPA, and WPA2/3.
*   Explain the principles of Mobile IP and its motivations.
*   Describe the components and functionalities of Mobile IP: Home Agent (HA), Foreign Agent (FA), Correspondent Node (CN).
*   Understand the registration process in Mobile IP.
*   Explain the concept of triangular routing and potential solutions to optimize routing.
*   Discuss the security considerations in Mobile IP.

---

**1. Wireless LANs (WLANs) – IEEE 802.11**

*   **Definition:** A wireless local area network (WLAN) is a type of local area network that uses radio waves as its transmission medium.  Allows devices to connect and communicate wirelessly within a specific area.

*   **Architecture and Components:**

    *   **Basic Service Set (BSS):** The fundamental building block of a WLAN.
        *   **Independent BSS (IBSS) / Ad-hoc Network:**  A set of stations (devices) communicating directly with each other without an access point.  Limited range and scalability.
        *   **Infrastructure BSS:**  A set of stations communicating through an Access Point (AP).  AP acts as a bridge to a wired network and provides centralized management.
    *   **Access Point (AP):** A device that acts as a central connection point for wireless clients to access a wired network.  Often includes features like DHCP server, NAT, and firewall.
    *   **Extended Service Set (ESS):**  Multiple interconnected BSSs using distribution systems (often wired Ethernet) to form a larger WLAN.  Provides roaming capabilities for mobile users.
    *   **Distribution System (DS):** The backbone network (usually wired) that connects multiple APs in an ESS.

*   **IEEE 802.11 Standards:**

    | Standard   | Frequency (GHz) | Maximum Data Rate | Modulation | Key Features                                                                |
    |------------|-----------------|--------------------|------------|-----------------------------------------------------------------------------|
    | 802.11a    | 5               | 54 Mbps            | OFDM       | Higher frequency, shorter range, less interference (initially).          |
    | 802.11b    | 2.4             | 11 Mbps            | DSSS/CCK   | Longer range, more interference, lower cost (initially).                 |
    | 802.11g    | 2.4             | 54 Mbps            | OFDM       | Backwards compatible with 802.11b, higher data rate.                       |
    | 802.11n    | 2.4/5           | 600 Mbps           | MIMO-OFDM  | Multiple-Input Multiple-Output (MIMO) technology, increased bandwidth.      |
    | 802.11ac   | 5               | 6.93 Gbps          | MIMO-OFDM  | Very high throughput, wider channels, more MIMO streams.                  |
    | 802.11ax (Wi-Fi 6) | 2.4/5/6     | ~9.6 Gbps          | OFDMA      | Orthogonal Frequency-Division Multiple Access (OFDMA), improved efficiency. |

    *   **OFDM (Orthogonal Frequency Division Multiplexing):** A digital modulation technique that divides a high-bandwidth channel into multiple narrower sub-channels, each carrying a smaller data rate.
    *   **DSSS (Direct Sequence Spread Spectrum):** A spread-spectrum modulation technique used in 802.11b.
    *   **CCK (Complementary Code Keying):** Another modulation technique used in 802.11b.
    *   **MIMO (Multiple-Input Multiple-Output):**  Uses multiple antennas at both the transmitter and receiver to improve data throughput and range.
    *   **OFDMA (Orthogonal Frequency-Division Multiple Access):**  Allows multiple users to transmit simultaneously over different sub-carriers, improving efficiency.

*   **Medium Access Control (MAC) in 802.11:**

    *   **Distributed Coordination Function (DCF):**  The fundamental MAC protocol in 802.11. Based on CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).
        *   **CSMA/CA:**
            *   **Carrier Sense:**  Nodes listen to the channel before transmitting to avoid collisions.
            *   **Collision Avoidance:**  Nodes use Request-to-Send (RTS) and Clear-to-Send (CTS) frames to reserve the channel before transmitting data (optional).  This helps mitigate the "hidden terminal problem."
            *   **Interframe Spaces (IFS):** Different types of IFS are used to prioritize access to the medium (SIFS, DIFS, EIFS).  SIFS is the shortest and used for acknowledgements. DIFS is used for data transmission.
        *   **Binary Exponential Backoff:**  If a collision occurs, nodes wait for a random backoff time before retransmitting.  The backoff window increases exponentially with each collision.
    *   **Point Coordination Function (PCF):**  An optional access method that provides contention-free access to the medium.  Implemented by the AP, which acts as a point coordinator. Not widely used.

*   **Security Mechanisms in WLANs:**

    *   **WEP (Wired Equivalent Privacy):**  An older, easily cracked encryption protocol.  **Do not use!** Uses a static encryption key, making it vulnerable to attacks.
    *   **WPA (Wi-Fi Protected Access):**  An improvement over WEP.  Uses TKIP (Temporal Key Integrity Protocol) for encryption and MIC (Message Integrity Check) to protect against tampering.
    *   **WPA2 (Wi-Fi Protected Access 2):**  A stronger security protocol that uses AES (Advanced Encryption Standard) encryption in Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP).  Generally considered secure.
    *   **WPA3 (Wi-Fi Protected Access 3):**  The latest standard, offering stronger encryption and improved authentication methods.  Features include Simultaneous Authentication of Equals (SAE) which replaces the Pre-Shared Key (PSK) exchange.
    *   **802.1X Authentication:** Port-based network access control using EAP (Extensible Authentication Protocol) and RADIUS (Remote Authentication Dial-In User Service) server. Provides stronger authentication than just a pre-shared key.

**2. Mobile IP**

*   **Motivation:**  Allows a mobile node (e.g., a laptop, smartphone) to maintain a permanent IP address as it moves from one network to another. This ensures ongoing connections are not disrupted when the device changes its point of attachment to the Internet. Without Mobile IP, connections would be dropped, and the device would need to re-establish connectivity with a new IP address in each network.

*   **Key Concepts and Definitions:**

    *   **Mobile Node (MN):** A device that can change its point of attachment to the Internet and still maintain its permanent IP address.
    *   **Home Address:** The permanent IP address of the mobile node. This address doesn't change, regardless of the mobile node's location.
    *   **Home Network:** The network to which the mobile node's home address belongs.
    *   **Home Agent (HA):** A router on the mobile node's home network that acts as a proxy for the mobile node when it is away from home. It intercepts packets addressed to the mobile node's home address and tunnels them to the mobile node's current location.
    *   **Foreign Network:** Any network other than the mobile node's home network.
    *   **Foreign Agent (FA):** A router on the foreign network that provides services to mobile nodes visiting that network. It receives tunneled packets from the home agent and delivers them to the mobile node.  It also assists the mobile node in registering with its home agent.
    *   **Care-of Address (COA):**  The IP address of the mobile node when it is visiting a foreign network. There are two types of COAs:
        *   **Foreign Agent COA:** The IP address of the foreign agent.  Packets are tunneled to the foreign agent, which then delivers them to the mobile node.
        *   **Co-located COA:** An IP address obtained directly by the mobile node on the foreign network (e.g., via DHCP). In this case, the mobile node can handle the tunneling itself.
    *   **Correspondent Node (CN):**  The node communicating with the mobile node.  The CN may or may not be aware that it is communicating with a mobile node.

*   **Mobile IP Operation (Registration Process):**

    1.  **Agent Discovery:** The mobile node discovers the presence of a foreign agent, typically through agent advertisement messages (router advertisement extensions). If no FA is present, the MN acquires a co-located COA.
    2.  **Registration Request:** The mobile node sends a registration request message to the foreign agent (if present), including its home address, care-of address, and a security association.  If using a co-located COA, the MN sends the request directly to the HA.
    3.  **Registration Forwarding (if FA is present):** The foreign agent forwards the registration request to the mobile node's home agent.
    4.  **Registration Authentication:** The home agent authenticates the registration request to ensure it is from a legitimate mobile node.  Authentication typically uses shared secrets or other security mechanisms.
    5.  **Registration Reply:** The home agent sends a registration reply message back to the foreign agent (if present).
    6.  **Registration Confirmation:** The foreign agent forwards the registration reply to the mobile node.

*   **Data Transfer:**

    *   **Tunneling:**  The home agent intercepts packets addressed to the mobile node's home address. The HA then encapsulates these packets within a new IP header (tunneling), using the mobile node's care-of address as the destination IP address.
    *   **Decapsulation:**  When the tunneled packet reaches the foreign agent (or the mobile node itself, if using a co-located COA), the outer IP header is removed (decapsulation), and the original packet is delivered to the mobile node.

*   **Triangular Routing:**

    *   **Problem:** Mobile IP introduces triangular routing:  The correspondent node sends packets to the mobile node's home agent, which then tunnels them to the mobile node's current location.  This means that even if the correspondent node and the mobile node are geographically close, the packets may have to travel to the home agent and back, increasing latency and network traffic.
    *   **Solutions:**
        *   **Route Optimization:** Allows the correspondent node to learn the mobile node's care-of address and send packets directly to it, bypassing the home agent. This requires extensions to Mobile IP and support from the correspondent node.
        *   **Binding Updates:** The mobile node sends binding updates directly to the correspondent node, informing it of its current care-of address. This is a key component of route optimization.

*   **Security Considerations in Mobile IP:**

    *   **Authentication:** It's crucial to authenticate the registration request to prevent unauthorized users from hijacking the mobile node's identity.
    *   **Replay Attacks:**  Sequence numbers are used in registration messages to prevent replay attacks, where an attacker resends a previously captured registration message.
    *   **Tunnel Protection:**  The tunnel between the home agent and the foreign agent (or the mobile node) should be protected using encryption and authentication to prevent eavesdropping and tampering.  IPsec is often used for this purpose.
    *   **Denial-of-Service Attacks:**  Mobile IP is vulnerable to denial-of-service attacks, where an attacker floods the home agent or foreign agent with registration requests or data packets.

---

**Practice Questions & Exercises:**

1.  **Explain the difference between an Infrastructure BSS and an IBSS in a WLAN.**

    *   *Answer:* An Infrastructure BSS uses an Access Point (AP) for communication, providing centralized management and a connection to a wired network. An IBSS (Ad-hoc network) is a direct connection between wireless devices without an AP, offering limited range and scalability.

2.  **Which IEEE 802.11 standard offers the highest data rate?**

    *   *Answer:* IEEE 802.11ac (Wi-Fi 5) offered very high data rates compared to previous standards.  However, IEEE 802.11ax (Wi-Fi 6) and later standards offer even higher potential data rates. The actual data rate achieved depends on various factors like channel width and the number of MIMO streams.

3.  **Describe the purpose of RTS/CTS in the DCF protocol.**

    *   *Answer:* RTS/CTS (Request to Send/Clear to Send) is an optional mechanism in DCF to avoid collisions, especially in scenarios with hidden terminals. A node sends an RTS frame, and if the channel is clear, the AP (or the receiving node in an ad-hoc network) responds with a CTS frame, reserving the channel for the duration of the transmission.

4.  **Why is WEP considered insecure, and what replaced it?**

    *   *Answer:* WEP uses a static encryption key, which can be easily cracked using various attacks. It was replaced by WPA and WPA2, which offer stronger encryption and authentication mechanisms.

5.  **Explain the concept of triangular routing in Mobile IP and a potential solution.**

    *   *Answer:* Triangular routing occurs when the correspondent node sends packets to the mobile node's home agent, which then tunnels them to the mobile node's foreign agent. This creates a suboptimal route, especially if the correspondent node and mobile node are geographically close. Route optimization, using binding updates, is a solution that allows the correspondent node to learn the mobile node's care-of address and send packets directly.

6.  **What are the roles of the Home Agent and Foreign Agent in Mobile IP?**

    *   *Answer:* The Home Agent acts as a proxy for the mobile node when it is away from home. It intercepts packets destined for the mobile node's home address and tunnels them to the mobile node's current location. The Foreign Agent provides services to mobile nodes visiting its network, receiving tunneled packets from the home agent and delivering them to the mobile node, and assisting in the registration process.

7.  **What is a Care-of Address (COA) in Mobile IP and what are its types?**

    *   *Answer:*  A COA is the IP address of the mobile node when it is visiting a foreign network. The types are:
        *   **Foreign Agent COA:** The IP address of the foreign agent.
        *   **Co-located COA:** An IP address obtained directly by the mobile node on the foreign network.

8.  **What are binding updates used for?**

     * *Answer:* Binding updates are sent by the Mobile Node directly to the Correspondent Node to inform it about its current Care-of Address.  This allows the Correspondent Node to send future packets directly to the Mobile Node (route optimization) without going through the Home Agent.

---

**Important Points to Remember:**

*   WLANs use radio waves for communication and are governed by the IEEE 802.11 standards.
*   CSMA/CA is the MAC protocol used in 802.11 to avoid collisions.
*   Use WPA2 or WPA3 for WLAN security.  Avoid WEP.
*   Mobile IP allows mobile nodes to maintain a permanent IP address as they move between networks.
*   The Home Agent, Foreign Agent, and Correspondent Node are key components of Mobile IP.
*   Triangular routing is a potential problem in Mobile IP that can be addressed by route optimization.
*   Security is critical in Mobile IP to prevent unauthorized access and attacks.
