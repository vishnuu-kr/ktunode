---
title: "Wireless Networks IEEE 802.11 wireless LAN."
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff05d"
status: "completed"
scrapedAt: "2026-05-23T18:00:16.475Z"
---
# Computer Networks: Module 4 - Link Layer Services: Wireless Networks IEEE 802.11 Wireless LAN

## 1. Introduction to Wireless LANs (WLANs)

**1.1 What are Wireless LANs?**

Wireless Local Area Networks (WLANs) are a type of local area network that uses Wi-Fi technology to wirelessly connect computers and other devices. Unlike wired LANs that rely on Ethernet cables, WLANs use radio waves to transmit data. This offers greater flexibility, mobility, and ease of deployment.

**1.2 The Need for Wireless Standards**

Without a standardized approach, devices from different manufacturers would not be able to communicate with each other. The IEEE 802.11 standards, developed by the Institute of Electrical and Electronics Engineers, provide a set of specifications for implementing WLANs.

**1.3 Key Concepts:**

*   **Radio Waves:** WLANs transmit data using radio waves in specific frequency bands.
*   **Access Point (AP):** A central device that bridges wireless devices to a wired network. It acts as a hub for wireless communication.
*   **Station (STA):** Any device that is equipped with a wireless network interface controller (WNIC) and can communicate wirelessly. This includes laptops, smartphones, tablets, etc.
*   **Service Set Identifier (SSID):** The name of a wireless network. It's used to identify and differentiate between multiple WLANs in the same area.
*   **Basic Service Set (BSS):** The fundamental building block of an IEEE 802.11 network. It consists of one or more stations (STAs) and an Access Point (AP).
*   **Independent Basic Service Set (IBSS):** Also known as an ad-hoc network. In an IBSS, stations communicate directly with each other without an AP.

**(Reference: Kurose & Ross, Chapter 5 - Link Layer and Local Area Networks)**

## 2. IEEE 802.11 Standards: Evolution and Key Features

The IEEE 802.11 family of standards has evolved over time, offering increasing speeds and improved functionalities.

**2.1 Key IEEE 802.11 Standards:**

| Standard      | Year | Frequency Band | Max Data Rate | Key Features                                                                                                    |
| :------------ | :--- | :------------- | :------------ | :-------------------------------------------------------------------------------------------------------------- |
| **802.11**    | 1997 | 2.4 GHz        | 1-2 Mbps      | Original standard, slow speeds.                                                                                 |
| **802.11b**   | 1999 | 2.4 GHz        | 11 Mbps       | First widely adopted standard, used Direct Sequence Spread Spectrum (DSSS).                                       |
| **802.11a**   | 1999 | 5 GHz          | 54 Mbps       | Used Orthogonal Frequency Division Multiplexing (OFDM), less interference but shorter range than 802.11b.        |
| **802.11g**   | 2003 | 2.4 GHz        | 54 Mbps       | Combined the speed of 802.11a with the compatibility of 802.11b, widely adopted.                                  |
| **802.11n (Wi-Fi 4)** | 2009 | 2.4 GHz & 5 GHz | Up to 600 Mbps | Introduced MIMO (Multiple-Input Multiple-Output), channel bonding, and beamforming for higher speeds and range. |
| **802.11ac (Wi-Fi 5)** | 2013 | 5 GHz          | Up to several Gbps | Enhanced MIMO (MU-MIMO), wider channels (up to 160 MHz), and more advanced modulation schemes.                 |
| **802.11ax (Wi-Fi 6)** | 2019 | 2.4 GHz & 5 GHz | Up to 9.6 Gbps | Focus on efficiency in dense environments, OFDMA (Orthogonal Frequency Division Multiple Access), BSS coloring. |
| **802.11be (Wi-Fi 7)** | Expected 2024 | 2.4 GHz, 5 GHz & 6 GHz | Up to ~46 Gbps | Higher throughput, lower latency, wider channels (up to 320 MHz), Multi-Link Operation (MLO).                |

**(Reference: Forouzan, Chapter 15 - Wireless Networks, Kurose & Ross, Chapter 5)**

**2.2 Key Technologies:**

*   **Direct Sequence Spread Spectrum (DSSS):** A modulation technique used in earlier 802.11 standards (like 802.11b) where data is spread across a wider frequency band.
*   **Orthogonal Frequency Division Multiplexing (OFDM):** A modulation technique used in later standards (like 802.11a, g, n, ac, ax) that divides the data stream into multiple sub-carriers, improving spectral efficiency and resilience to interference.
*   **Multiple-Input Multiple-Output (MIMO):** Uses multiple antennas at both the transmitter and receiver to improve data throughput and link reliability by sending multiple data streams simultaneously or by using spatial diversity.
*   **Channel Bonding:** Combines multiple adjacent channels into a wider channel to increase bandwidth and data rates.
*   **Multi-User MIMO (MU-MIMO):** Allows an AP to communicate with multiple devices simultaneously, improving efficiency in multi-user environments.
*   **Orthogonal Frequency Division Multiple Access (OFDMA):** A more advanced version of OFDM that allows a channel to be divided into smaller resource units, which can be allocated to different users simultaneously, improving efficiency and reducing latency, especially in dense deployments.
*   **Beamforming:** A signal processing technique that directs the wireless signal towards a specific device, rather than broadcasting it in all directions. This improves signal strength and reduces interference.

**(Reference: Forouzan, Chapter 15)**

## 3. IEEE 802.11 Network Architectures

**3.1 Infrastructure Mode:**

In infrastructure mode, wireless devices communicate through an Access Point (AP).

*   **Components:**
    *   **Access Point (AP):** Connects wireless devices to a wired network (e.g., Ethernet).
    *   **Station (STA):** Wireless devices (laptops, phones).
    *   **Distribution System:** The wired network that connects multiple APs to each other and to the wired backbone.
*   **Communication Flow:**
    1.  A STA wanting to communicate with another STA on the same network first sends data to the AP.
    2.  The AP then forwards the data to the destination STA, either wirelessly or through the wired network if the destination is on a different network.
*   **Advantages:**
    *   Provides access to the wired network.
    *   Enables roaming between APs.
    *   Centralized management and security.

**(Example: Connecting your laptop to a Wi-Fi router at home or in a coffee shop.)**

**3.2 Ad-Hoc Mode (IBSS - Independent Basic Service Set):**

In ad-hoc mode, wireless devices communicate directly with each other without an AP.

*   **Components:**
    *   **Stations (STAs):** Wireless devices.
*   **Communication Flow:**
    1.  STAs in an ad-hoc network form a peer-to-peer network.
    2.  Direct communication occurs between any two STAs within radio range.
*   **Advantages:**
    *   Simple to set up for temporary networks.
    *   No infrastructure required.
*   **Disadvantages:**
    *   Limited range (depends on direct STA-to-STA communication).
    *   No access to wired networks.
    *   Scalability issues and security challenges.

**(Example: Two laptops sharing files directly without a router.)**

**(Reference: Kurose & Ross, Chapter 5)**

## 4. IEEE 802.11 Medium Access Control (MAC)

The IEEE 802.11 MAC protocol is crucial for managing access to the shared wireless medium, which is prone to collisions.

**4.1 Problems in the Wireless Environment:**

*   **Hidden Terminal Problem:** Two stations (A and C) can communicate with an AP, but they cannot hear each other. If A and C transmit simultaneously to the AP, their transmissions will collide at the AP, even though A and C are not aware of each other.
*   **Exposed Terminal Problem:** A station (A) is transmitting to another station (B). A third station (C) is within range of B, but not A. If C were to start transmitting, it might be prevented from doing so unnecessarily, even though its transmission would not interfere with A's transmission to B.

**(Reference: Kurose & Ross, Chapter 5, Forouzan, Chapter 15)**

**4.2 CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):**

Unlike Ethernet's CSMA/CD (Collision Detection), wireless networks use CSMA/CA because detecting collisions reliably in a wireless environment is difficult (due to the hidden terminal problem).

*   **How it works:**
    1.  **Carrier Sensing:** A station listens to the medium to determine if it's busy. If it is, the station waits.
    2.  **Backoff Procedure:** If the medium is free, the station doesn't transmit immediately. Instead, it waits for a random amount of time (backoff period) before transmitting. This is to reduce the probability of multiple stations transmitting at the exact same time.
    3.  **Interframe Spaces (IFS):** After the backoff period, the station waits for a specific interframe space (e.g., SIFS - Short Interframe Space, DIFS - DCF Interframe Space) before transmitting. These delays help to differentiate between different types of frames and to allow acknowledgments to be sent.
    4.  **Acknowledgement (ACK):** After a station successfully transmits a frame, it expects an ACK frame from the receiver. If the ACK is not received within a certain time, the sender assumes the frame was lost and retransmits.

**4.3 Distribution Coordination Function (DCF):**

DCF is the fundamental MAC protocol for IEEE 802.11. It uses CSMA/CA to manage access.

*   **Mechanism:**
    *   **Listen Before Talk:** A station first senses the channel.
    *   **If channel is idle for DIFS:** Station transmits.
    *   **If channel is busy:** Station waits until the channel becomes idle, then waits for DIFS, then starts the random backoff procedure.
    *   **Backoff Window:** The station generates a random backoff counter within a window. The size of this window increases with each subsequent collision (contention).
    *   **Decrementing Counter:** When the channel is idle, the station decrements its counter.
    *   **Transmission:** When the counter reaches zero, the station transmits.
    *   **ACK:** If an ACK is received, the transmission is successful. If not, the station doubles its backoff window and retransmits.

**4.4 Point Coordination Function (PCF):**

PCF is an optional MAC protocol that provides a more centralized control mechanism.

*   **Mechanism:**
    *   An AP acts as a point coordinator.
    *   The AP polls stations to ask if they have data to send.
    *   This avoids collisions but can be less efficient than DCF in some scenarios.
*   **Use:** PCF is less commonly used in modern Wi-Fi networks compared to DCF.

**4.5 Collision Detection vs. Collision Avoidance:**

*   **CSMA/CD (Ethernet):** Detects collisions after they happen and backs off.
*   **CSMA/CA (802.11):** Tries to prevent collisions from happening in the first place through random backoff and ACKs.

**(Reference: Kurose & Ross, Chapter 5, Forouzan, Chapter 15)**

## 5. IEEE 802.11 Frame Structure

The structure of an 802.11 frame is more complex than an Ethernet frame due to the need for additional information for wireless communication.

**5.1 Key Fields in an 802.11 Frame:**

*   **Frame Control:** Contains information about the frame type (management, control, data), protocol version, and other flags.
*   **Duration/ID:** Used for the network allocation vector (NAV) to indicate when the medium will be busy.
*   **Addresses (4 addresses):**
    *   **Address 1:** Receiver address.
    *   **Address 2:** Transmitter address.
    *   **Address 3:** Typically used for the BSSID (Basic Service Set Identifier) in infrastructure mode or the destination address in ad-hoc mode.
    *   **Address 4:** Used in ad-hoc mode for the source address.
*   **Sequence Control:** Used for packet sequencing and fragmentation.
*   **Frame Body:** Contains the actual data payload (e.g., IP packet).
*   **Frame Check Sequence (FCS):** For error detection (CRC).

**5.2 Frame Types:**

*   **Management Frames:** Used for network control and management functions (e.g., Beacon frames, Probe Request/Response frames, Association Request/Response frames).
    *   **Beacon Frames:** Broadcast periodically by APs to advertise their presence and network parameters (SSID, supported rates, security settings).
    *   **Probe Request/Response:** Stations send Probe Requests to discover available networks. APs respond with Probe Responses.
    *   **Association Request/Response:** Stations send Association Requests to join an AP. The AP responds with an Association Response.
*   **Control Frames:** Used to support data transfer (e.g., ACK, RTS/CTS).
    *   **ACK (Acknowledgment):** Confirms successful reception of a data frame.
    *   **RTS (Request to Send):** Sent by a sender to an AP (or receiver) to reserve the medium.
    *   **CTS (Clear to Send):** Sent by the AP (or receiver) in response to an RTS, granting permission to transmit. RTS/CTS is used to combat the hidden terminal problem.
*   **Data Frames:** Carry the actual user data.

**(Reference: Forouzan, Chapter 15, Kurose & Ross, Chapter 5)**

## 6. The RTS/CTS Mechanism (To Solve Hidden Terminal Problem)

The Request to Send (RTS) and Clear to Send (CTS) mechanism is a crucial part of the 802.11 MAC protocol designed to address the hidden terminal problem.

**6.1 How it Works:**

1.  **Station A (Sender) wants to send to Station B (Receiver), but C is hidden from A and B.**
2.  **A sends an RTS frame to B.** The RTS frame includes the duration for which A wants to use the medium.
3.  **B receives the RTS.** If B is ready to receive, it sends back a CTS frame to A. The CTS frame also includes the duration.
4.  **Both A and B set their Network Allocation Vector (NAV) timers.** The NAV is an internal timer in each station that indicates how long the medium is expected to be busy.
5.  **Hidden Station C (if active) hears the CTS frame.** Station C, which cannot hear A's RTS, can still hear B's CTS. C understands that the medium will be busy for the duration specified in the CTS.
6.  **C defers transmission.** C sets its NAV timer and remains silent, avoiding a collision at B.
7.  **A sends the actual data frame to B.**
8.  **B sends an ACK frame back to A.**

**6.2 When is RTS/CTS Used?**

RTS/CTS is typically used for larger data frames. For very small frames, the overhead of RTS/CTS might outweigh the benefits. The threshold for using RTS/CTS is configurable.

**(Example: Imagine two people trying to talk on a stage while a third person is in the audience. If the first two can't see each other, one might signal the moderator (AP) with a "request to speak," and the moderator grants permission, informing everyone else that the stage is occupied.)**

**(Reference: Kurose & Ross, Chapter 5, Forouzan, Chapter 15)**

## 7. Wireless LAN Association

For stations to communicate in infrastructure mode, they must first associate with an Access Point (AP).

**7.1 Association Process:**

1.  **Scanning:** Stations actively scan for available networks by sending **Probe Request** frames. APs respond with **Probe Response** frames containing their SSID and capabilities. Stations can also passively listen for **Beacon** frames broadcast by APs.
2.  **Authentication:** Once a station selects a network, it sends an **Authentication Request** frame to the AP. The AP responds with an **Authentication Response**. This can be a simple open system authentication or involve more complex security mechanisms (like WPA/WPA2/WPA3).
3.  **Association:** After successful authentication, the station sends an **Association Request** frame to the AP. This frame includes information about the station's capabilities (e.g., supported data rates, power saving modes).
4.  **Association Response:** The AP processes the request and sends back an **Association Response** frame. If the association is successful, it contains an **Association ID (AID)**, which is a short identifier used by the AP to manage the station's association.

**7.2 Disassociation:**

When a station or AP wants to terminate the association, a **Disassociation** frame is sent.

**7.3 Reassociation:**

A station might move to a different AP within the same BSS. It can send a **Reassociation Request** to the new AP, which then informs the old AP about the move.

**(Reference: Forouzan, Chapter 15)**

## 8. Security in IEEE 802.11

Wireless networks are inherently more vulnerable to security threats than wired networks because the radio waves can be intercepted by anyone within range.

**8.1 Early Security Mechanisms:**

*   **WEP (Wired Equivalent Privacy):** An early encryption protocol for 802.11. It was found to have significant security vulnerabilities and is no longer recommended.

**8.2 Modern Security Mechanisms:**

*   **WPA (Wi-Fi Protected Access):** Introduced as an interim solution to address WEP's weaknesses. Uses TKIP (Temporal Key Integrity Protocol) for encryption.
*   **WPA2 (Wi-Fi Protected Access II):** The current standard for Wi-Fi security. It uses AES (Advanced Encryption Standard) encryption, which is much stronger than TKIP.
    *   **WPA2-Personal (PSK - Pre-Shared Key):** Uses a shared password for all devices.
    *   **WPA2-Enterprise:** Uses an authentication server (e.g., RADIUS) for per-user authentication, providing stronger security for corporate environments.
*   **WPA3:** The latest generation of Wi-Fi security, offering enhanced protection, including:
    *   Stronger encryption with SAE (Simultaneous Authentication of Equals) to prevent dictionary attacks.
    *   Improved protection for open networks.
    *   Better privacy for devices with limited computing power.

**8.3 Other Security Considerations:**

*   **SSID Hiding:** While often seen as a security measure, hiding the SSID is not effective as it can be easily discovered by network scanning tools.
*   **MAC Address Filtering:** Allowing only devices with specific MAC addresses to connect. This is also easily spoofed and not a strong security measure on its own.
*   **Intrusion Detection Systems (IDS):** Monitoring the network for suspicious activity.

**(Reference: Kurose & Ross, Chapter 5, Forouzan, Chapter 15)**

## 9. Performance Considerations and Challenges

*   **Interference:** Wireless signals can be affected by interference from other Wi-Fi networks, Bluetooth devices, microwaves, and other radio frequency sources.
*   **Signal Strength and Range:** The range of a wireless signal is limited by factors like transmission power, antenna gain, and environmental obstructions (walls, furniture).
*   **Throughput Degradation:** Performance can degrade significantly with an increasing number of users and devices sharing the same channel.
*   **Mobility:** Seamless handover between APs (roaming) is crucial for mobile users.

## 10. Practice Questions and Answers

**Question 1:** Explain the difference between CSMA/CD and CSMA/CA. Which one is used in IEEE 802.11 and why?

**Answer:**
CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is used in Ethernet. A station first senses the channel. If it's free, it transmits. If a collision is detected during transmission, the station stops transmitting, sends a jam signal, and backs off randomly.

CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) is used in IEEE 802.11. A station senses the channel. If it's free, it waits for a DIFS period, then uses a random backoff timer. If the channel is busy, it waits for it to become free, then waits for DIFS, and then initiates the backoff procedure. Collision avoidance is used because reliably detecting collisions in a wireless environment is difficult due to the hidden terminal problem.

**Question 2:** What is the hidden terminal problem in wireless networks, and how does the RTS/CTS mechanism help to mitigate it?

**Answer:**
The hidden terminal problem occurs when two stations can communicate with an access point but not with each other. If both stations transmit simultaneously to the access point, their transmissions will collide at the access point, even though the stations are unaware of each other's transmissions.

The RTS/CTS mechanism helps mitigate this by having the sender (Station A) send a Request to Send (RTS) to the receiver (Station B). Station B, if ready, responds with a Clear to Send (CTS). Both RTS and CTS frames contain duration information. A third station (Station C), which is hidden from Station A but can hear Station B's CTS, will defer its transmission for the specified duration, thus avoiding a collision at Station B.

**Question 3:** Briefly describe the purpose of Beacon frames and Association Request/Response frames in IEEE 802.11.

**Answer:**
*   **Beacon Frames:** These frames are periodically broadcast by Access Points (APs) to announce the presence of a wireless network. They contain information such as the network's SSID, supported data rates, security settings, and other network parameters. Stations use Beacon frames to discover available networks.
*   **Association Request/Response Frames:** These frames are used during the process of a station joining an Access Point's network in infrastructure mode. A station sends an Association Request frame to the AP after authentication. The AP responds with an Association Response frame, which either accepts the station's association (assigning an Association ID) or rejects it.

**Question 4:** Which IEEE 802.11 standard introduced MIMO and channel bonding?
a) 802.11b
b) 802.11g
c) 802.11n
d) 802.11ac

**Answer:**
c) 802.11n

**Question 5:** What is the primary security protocol used in WPA2?
a) TKIP
b) AES
c) WEP
d) SAE

**Answer:**
b) AES

## 11. Important Points to Remember

*   **IEEE 802.11** is the standard for Wireless Local Area Networks (WLANs).
*   **Infrastructure Mode** involves an Access Point (AP) to connect wireless devices to a wired network.
*   **Ad-Hoc Mode (IBSS)** allows devices to communicate directly without an AP.
*   **CSMA/CA** is the MAC protocol used to avoid collisions in wireless networks.
*   The **Hidden Terminal Problem** is a key challenge addressed by **RTS/CTS**.
*   **Beacon frames** advertise network presence, while **Association frames** establish a connection between a station and an AP.
*   **WPA2** is the current standard for strong Wi-Fi security, primarily using **AES** encryption.
*   The evolution of 802.11 standards has brought significant improvements in **speed, efficiency, and features** like MIMO and OFDMA.

---

This comprehensive set of notes covers the core aspects of IEEE 802.11 wireless LANs, aligning with the learning outcomes and course objectives. The structure, examples, and practice questions aim to provide a solid understanding of this crucial link layer technology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
