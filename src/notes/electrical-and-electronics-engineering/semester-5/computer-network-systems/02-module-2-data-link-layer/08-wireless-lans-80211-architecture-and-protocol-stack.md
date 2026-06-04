---
title: "Wireless LANs - 802.11 – Architecture and protocol stack"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36475"
status: "completed"
scrapedAt: "2026-05-23T16:20:01.607Z"
---
# Computer Network Systems - Module 2: Data Link Layer

## Topic: Wireless LANs - 802.11 – Architecture and Protocol Stack

---

### **Introduction to Wireless LANs (WLANs)**

Wireless Local Area Networks (WLANs) provide network connectivity without the need for physical cables, offering mobility and flexibility. The most common standard for WLANs is the IEEE 802.11 family of standards, commonly referred to as Wi-Fi. This module focuses on the architecture and protocol stack of 802.11 WLANs.

---

### **Learning Outcomes Covered:**

*   **CO1 (K2):** Understand the fundamental concepts of computer networks, layered architecture, protocols, and physical media, including their role in setting up a network. (As 802.11 is a key protocol at the Data Link Layer, this outcome is implicitly covered).
*   **CO2 (K2):** Identify the role of the Data Link Layer, the MAC sublayer, and networking devices in wireless LANs. This is the primary focus of this topic.

---

### **1. The IEEE 802.11 Standard Family**

The IEEE 802.11 standards define the physical layer and the Medium Access Control (MAC) sublayer of the Data Link Layer for WLANs. Over time, various amendments have been introduced to improve speed, range, and efficiency.

**Key Concepts:**

*   **IEEE:** Institute of Electrical and Electronics Engineers, the organization that develops and maintains the 802.11 standards.
*   **Wi-Fi:** A certification mark for products based on the IEEE 802.11 standards, ensuring interoperability.

**Common 802.11 Standards (and their typical speeds):**

| Standard | Year | Max Data Rate (Mbps) | Frequency Band | Notes                                          |
| :------- | :--- | :------------------- | :------------- | :--------------------------------------------- |
| 802.11   | 1997 | 1 or 2               | 2.4 GHz        | Original standard, slow                        |
| 802.11a  | 1999 | 54                   | 5 GHz          | Faster, less interference, shorter range       |
| 802.11b  | 1999 | 11                   | 2.4 GHz        | Widely adopted, good range                     |
| 802.11g  | 2003 | 54                   | 2.4 GHz        | Backward compatible with 802.11b, faster than b |
| 802.11n  | 2009 | 600                  | 2.4 GHz & 5 GHz| MIMO, channel bonding, significantly faster   |
| 802.11ac | 2013 | 1 Gbps+              | 5 GHz          | Wider channels, more spatial streams, MU-MIMO |
| 802.11ax | 2019 | 4 Gbps+              | 2.4 GHz & 5 GHz| Wi-Fi 6, OFDMA, improved efficiency in dense environments |

---

### **2. 802.11 Architecture**

The 802.11 architecture defines the basic building blocks and how they are interconnected to form a wireless network.

**Key Components:**

*   **Station (STA):** Any device equipped with a wireless network interface controller (NIC) that can communicate with other stations. This includes laptops, smartphones, tablets, etc.
*   **Basic Service Set (BSS):** The fundamental building block of an 802.11 network. It consists of one or more stations that communicate with each other.
    *   **Independent Basic Service Set (IBSS):** A BSS where stations communicate directly with each other without a central coordinating entity. This is often referred to as an "ad-hoc" network.
        *   **Example:** Two laptops directly communicating wirelessly to share files.
    *   **Infrastructure Basic Service Set (BSS):** A BSS that includes an Access Point (AP). Stations in an infrastructure BSS communicate with the AP, which then provides connectivity to other networks (like a wired LAN or the Internet).
        *   **Example:** A home Wi-Fi network where laptops and phones connect to a router (AP).
*   **Access Point (AP):** A station that provides access to a Distribution System (DS) or a wired network. APs act as bridges between the wireless and wired segments of a network.
*   **Distribution System (DS):** A system that interconnects BSSs and provides mobility for stations within an extended network. In most modern networks, the DS is typically an Ethernet LAN.
*   **Extended Service Set (ESS):** A set of two or more BSSs that are interconnected by a DS. An ESS provides a logical network that appears as a single network to higher layers, even though it spans multiple BSSs.
    *   **Key Feature:** Stations can move between different BSSs within an ESS without losing connectivity (seamless roaming).
*   **Portal:** A point within an ESS that acts as an access point for stations into the wired network. The portal often connects the wireless network to a traditional wired LAN and performs protocol translation if necessary.

**Visualizing the Architecture:**

*(Imagine a diagram here showing Stations, BSSs, APs, and the DS connecting them to form an ESS.)*

**Tanenbaum (5th Ed.), Chapter 6 (Data Link Layer), Section 6.6.1 (Wireless LANs):** Discusses the basic components of 802.11 networks, including stations, APs, and the concept of BSSs and ESSs. It highlights the role of the AP as a bridge.

---

### **3. 802.11 Protocol Stack**

The 802.11 protocol stack is a layered approach that specifies how wireless communication is handled. It's a specialization of the general layered model at the Data Link Layer.

**Layers within the 802.11 Protocol Stack:**

The 802.11 Data Link Layer is further divided into two sublayers:

*   **Logical Link Control (LLC) Sublayer:**
    *   This sublayer is compatible with the IEEE 802.2 LLC standard.
    *   It provides a connectionless service.
    *   It handles **service access point (SAP)** identification, which allows different network layer protocols (like IP) to share the same 802.11 interface.
    *   **Role:** Provides a standardized interface to the Network Layer, abstracting away the specifics of the MAC layer.
*   **Medium Access Control (MAC) Sublayer:**
    *   This is the core of the 802.11 standard, responsible for managing access to the shared wireless medium.
    *   It defines how stations transmit and receive frames over the air.
    *   **Key Responsibilities:**
        *   **Framing:** Encapsulating data into 802.11 frames.
        *   **Addressing:** Using MAC addresses to identify stations.
        *   **Medium Access Control:** Implementing mechanisms to avoid collisions.
        *   **Error Detection:** Using Frame Check Sequence (FCS) for error checking.
        *   **Acknowledgement:** Confirming successful frame reception.
        *   **Association/Disassociation:** Managing connections between stations and APs.
        *   **Power Management:** Enabling stations to conserve battery life.

**MAC Sublayer Protocols:**

The primary challenge in wireless networking is the shared nature of the medium and the inherent difficulties in implementing a collision detection mechanism (like in Ethernet CSMA/CD). This is due to:

1.  **The Hidden Terminal Problem:** Two stations can be within range of the AP but not within range of each other. If both stations transmit simultaneously to the AP, a collision occurs at the AP, but neither sender can detect it.
2.  **The Exposed Terminal Problem:** A station transmits to another station and considers the medium busy. However, a third station might be able to communicate with a different fourth station without interfering with the first transmission. If the third station incorrectly assumes the medium is busy, it misses an opportunity for communication.

To address these issues, 802.11 uses a **Collision Avoidance** mechanism called **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**.

**CSMA/CA Mechanism:**

1.  **Carrier Sensing:** Stations listen to the wireless medium to determine if it's busy. This is done using:
    *   **Physical Carrier Sense:** Listening to the energy level on the channel.
    *   **Virtual Carrier Sense:** Using network allocation vectors (NAVs) exchanged in control frames to indicate how long the medium will be occupied.
2.  **If Medium is Idle:** The station waits for a **Distributed Interframe Space (DIFS)** period.
3.  **Backoff Procedure:** If the medium is still idle after DIFS, the station generates a random **backoff timer** within a **Contention Window (CW)**.
4.  **Decrementing the Backoff Timer:** The station decrements its backoff timer while the medium remains idle.
5.  **Transmission:** When the backoff timer reaches zero, the station transmits its frame.
6.  **Acknowledgement (ACK):** The receiving station (either another STA in IBSS or the AP) immediately sends back an ACK frame.
7.  **Collision Detection (and Resolution):** If a collision occurs, the sender will not receive an ACK and will retransmit the frame after another backoff period.

**Forouzan (5th Ed.), Chapter 12 (Access Control Methods), Section 12.3 (Carrier Sense Multiple Access with Collision Avoidance - CSMA/CA):** Provides an in-depth explanation of CSMA/CA, including DIFS, SIFS, backoff procedures, and acknowledgments. It also explains the hidden terminal problem.

**Request to Send (RTS) / Clear to Send (CTS) Mechanism:**

To further mitigate the hidden terminal problem, 802.11 supports an optional RTS/CTS mechanism:

1.  **RTS Transmission:** A station wanting to send data first sends a short RTS frame.
2.  **CTS Transmission:** The receiving station (if it can hear the RTS and is ready to receive) responds with a CTS frame.
3.  **NAV Update:** Both the sender and the receiver include the duration of the upcoming transmission in their RTS/CTS frames. All other stations overhearing either RTS or CTS update their Network Allocation Vector (NAV) to indicate that the medium will be busy for that duration.
4.  **Data Transmission:** Only after receiving the CTS does the sender transmit the actual data frame.
5.  **ACK:** The receiver sends an ACK.

**Why RTS/CTS helps:** If Station A wants to send to AP, and Station B cannot hear Station A but can hear the AP, A sends RTS. AP replies with CTS. Station B overhears the CTS and knows the medium is busy, thus refraining from transmitting until the duration specified in CTS has passed, preventing a collision at the AP.

**Important Point:** Unlike Ethernet's CSMA/CD where collisions are detected and then recovered, 802.11's CSMA/CA aims to **avoid** collisions by using acknowledgements and the RTS/CTS mechanism.

**802.11 Frame Types:**

802.11 MAC frames are broadly categorized into three types:

1.  **Management Frames:** Used for managing the wireless network (e.g., scanning for networks, associating with an AP).
    *   **Examples:** Beacon frames, Probe Request/Response, Association Request/Response, Authentication/Deauthentication.
2.  **Control Frames:** Used to assist in the delivery of data frames (e.g., acknowledgements, RTS/CTS).
    *   **Examples:** ACK, RTS, CTS.
3.  **Data Frames:** Used to carry user data.

---

### **4. Networking Devices in 802.11 WLANs**

*   **Wireless NIC (Network Interface Controller):** The hardware component in a station that enables wireless communication.
*   **Access Point (AP):** As discussed, it acts as a central hub for wireless clients and bridges to the wired network.
*   **Wireless Router:** Typically a home/small office device that combines an AP, a router (for IP address assignment and routing), and a switch (for wired connections).
*   **Wireless Repeater/Extender:** Devices that extend the range of an existing wireless network by rebroadcasting the signal.

---

### **5. Power Management in 802.11**

To conserve battery life on mobile devices, 802.11 includes power management features. Stations can enter a low-power "sleep" mode. The AP buffers incoming frames for sleeping stations. When a station wakes up, it can poll the AP for buffered frames. This is often coordinated through "Power-Save" polls.

---

### **6. Interoperability and Roaming**

*   **Interoperability:** The Wi-Fi Alliance ensures that devices from different manufacturers can work together by certifying compliance with 802.11 standards.
*   **Roaming:** In an ESS, a station can move from one BSS to another without interrupting its network connection. This involves:
    *   **Scanning:** The station periodically scans for available APs.
    *   **Re-association:** When a station detects a better AP or moves out of range of its current AP, it performs an "re-association" process with the new AP, similar to the initial association. The APs within an ESS are interconnected via the DS, allowing network state to be maintained.

---

### **7. Key Differences from Wired Ethernet**

| Feature           | Wired Ethernet (CSMA/CD)                      | Wireless 802.11 (CSMA/CA)                            |
| :---------------- | :-------------------------------------------- | :--------------------------------------------------- |
| Medium            | Twisted-pair cable, coaxial cable             | Radio waves                                          |
| Collision Handling| Collision Detection (CD)                      | Collision Avoidance (CA)                             |
| Topology          | Bus, Star                                     | Ad-hoc, Infrastructure                               |
| Transmission Mode | Half-duplex (historically), Full-duplex       | Half-duplex (typically for CSMA/CA)                  |
| Addressing        | MAC addresses                                 | MAC addresses                                        |
| Hidden Terminal   | Not a significant issue                       | Major problem, addressed by RTS/CTS                  |
| Exposed Terminal  | Not a significant issue                       | Problem, but less critical than hidden terminal        |
| Data Rate         | Higher (Gigabit and beyond common)            | Lower, though rapidly increasing with newer standards|
| Mobility          | Limited                                       | High                                                 |

---

### **Important Points to Remember:**

*   **802.11 focuses on the MAC and Physical layers.**
*   **CSMA/CA is the fundamental access method to avoid collisions.**
*   **The Hidden Terminal Problem is a crucial challenge in wireless and is addressed by RTS/CTS.**
*   **An AP is essential for infrastructure BSSs and ESSs.**
*   **Wi-Fi is the marketing term for interoperable 802.11 devices.**
*   **The LLC sublayer provides a standardized interface to the network layer.**
*   **Management, Control, and Data frames are the main types in 802.11.**

---

### **Practice Questions and Exercises:**

**Question 1 (CO2, K2):**
Explain the hidden terminal problem in 802.11 networks and how the RTS/CTS mechanism helps to alleviate it.

**Answer 1:**
The hidden terminal problem occurs when two stations (A and B) are within range of an Access Point (AP) but not within range of each other. If both A and B try to transmit to the AP simultaneously, their transmissions will collide at the AP, but neither A nor B can detect this collision directly.

The RTS/CTS mechanism helps by introducing a handshake before data transmission:
1.  Station A wanting to transmit sends a short Request to Send (RTS) frame to the AP.
2.  If the AP can receive the RTS, it responds with a Clear to Send (CTS) frame.
3.  Both RTS and CTS frames contain a duration field. Any station that overhears either RTS or CTS will update its Network Allocation Vector (NAV) and refrain from transmitting for that duration.
4.  Crucially, if Station B cannot hear Station A but can hear the AP's CTS, B will know that the medium is busy and will defer its transmission, preventing a collision with A's data frame at the AP.

**Question 2 (CO2, K2):**
What is the role of the Access Point (AP) in an 802.11 Infrastructure BSS?

**Answer 2:**
In an 802.11 Infrastructure BSS, the Access Point (AP) serves as a central coordinator and bridge. Its roles include:
*   **Mediating access to the medium:** It participates in CSMA/CA.
*   **Bridging wireless to wired:** It connects the wireless network to a wired network (like an Ethernet LAN or the Internet).
*   **Forwarding frames:** It receives frames from wireless stations and forwards them to the wired network, and vice-versa.
*   **Buffering frames:** For sleeping stations, it buffers incoming data frames.
*   **Broadcasting management frames:** It sends out beacon frames containing network information.

**Question 3 (CO2, K2):**
Differentiate between IBSS and Infrastructure BSS.

**Answer 3:**
*   **Independent Basic Service Set (IBSS):** Also known as an ad-hoc network. Stations communicate directly with each other without a central AP. There is no bridge to a wired network. It's suitable for small, temporary networks.
*   **Infrastructure Basic Service Set (BSS):** Includes an Access Point (AP) that acts as a central hub. Stations communicate with the AP, which then connects them to a wired network or other BSSs in an ESS. This is the most common mode for WLANs.

**Question 4 (CO1, K2):**
Mention two fundamental differences in medium access control between wired Ethernet and wireless 802.11.

**Answer 4:**
1.  **Collision Handling:** Wired Ethernet uses **CSMA/CD** (Collision Detection), actively detecting and recovering from collisions. 802.11 uses **CSMA/CA** (Collision Avoidance) to try and prevent collisions from happening in the first place, relying on acknowledgements and timing mechanisms.
2.  **Medium Nature:** Ethernet uses a physical cable, allowing for more deterministic behavior and easier collision detection. 802.11 uses radio waves, which are susceptible to interference, attenuation, and the hidden/exposed terminal problems, necessitating collision avoidance strategies.

---
