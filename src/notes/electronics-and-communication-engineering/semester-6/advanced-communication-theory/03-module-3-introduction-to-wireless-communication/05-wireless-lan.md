---
title: "Wireless LAN"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 3: Introduction to Wireless Communication"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed19"
status: "completed"
scrapedAt: "2026-05-23T17:58:50.712Z"
---
# Advanced Communication Theory: Module 3 - Introduction to Wireless Communication
## Topic: Wireless LAN (WLAN)

---

### **Module Overview:**

This module introduces the fundamental concepts of wireless communication, building a foundation for understanding the principles behind wireless networks. We will explore various aspects of wireless transmission, channel characteristics, and techniques used to enhance performance. This topic focuses specifically on Wireless Local Area Networks (WLANs), a ubiquitous technology for local data communication.

---

### **Learning Outcomes Addressed:**

*   Explain the fundamental concepts of Wireless LAN (WLAN) technology.
*   Describe the architecture and components of WLAN systems.
*   Identify and differentiate between various WLAN standards and their characteristics.
*   Analyze the advantages and disadvantages of using WLANs.
*   Discuss the factors influencing WLAN performance and security.

---

### **Course Outcomes Alignment:**

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)** - This topic directly addresses CO4 by explaining the foundational principles of WLANs as a wireless communication technique.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)** - While not the primary focus, WLANs operate over wireless channels, and understanding their performance inherently involves considering channel effects. This topic provides context for later discussions on channel models.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance (Knowledge Level: K3)** - Understanding the challenges in WLANs (like interference and multipath) naturally leads to discussing techniques for improving performance, which aligns with CO6.

---

## 1. Introduction to Wireless LAN (WLAN)

### **1.1 Definition and Purpose:**

*   **Definition:** A Wireless Local Area Network (WLAN) is a wireless networking technology that allows devices to connect to a local network and the internet without physical cables. It leverages radio waves to transmit data.
*   **Purpose:** To provide flexible and mobile network access within a limited geographic area, such as a home, office building, campus, or public space.

### **1.2 Key Concepts:**

*   **Radio Frequency (RF):** WLANs operate within specific radio frequency bands (e.g., 2.4 GHz, 5 GHz) allocated for unlicensed use by regulatory bodies.
*   **Access Point (AP):** A central device that acts as a hub for wireless devices to connect to the wired network. It broadcasts a Service Set Identifier (SSID).
*   **Station (STA):** Any device equipped with a wireless network interface controller (NIC) that can connect to a WLAN. Examples include laptops, smartphones, tablets.
*   **Service Set Identifier (SSID):** A unique name broadcast by an access point that identifies a particular WLAN. Devices use the SSID to connect to the desired network.
*   **Basic Service Set (BSS):** A set of stations that are communicating with each other. A BSS can be either an Independent Basic Service Set (IBSS) or an Infrastructure Basic Service Set (BSS).
    *   **Independent Basic Service Set (IBSS):** Devices communicate directly with each other without an access point (e.g., ad-hoc mode).
    *   **Infrastructure Basic Service Set (BSS):** Devices connect to a central Access Point (AP). This is the most common WLAN configuration.
*   **Extended Service Set (ESS):** A network of two or more BSSs that are interconnected by a distribution system (e.g., a wired network) and appear as a single logical network to the user.

### **1.3 Advantages of WLANs:**

*   **Mobility:** Users can move freely within the coverage area without losing network connectivity.
*   **Flexibility:** Easy to set up and reconfigure compared to wired networks.
*   **Cost-Effective:** Reduces cabling costs and installation time.
*   **Convenience:** Enables easy connectivity for guests and temporary users.
*   **Scalability:** Easily expandable by adding more access points.

### **1.4 Disadvantages of WLANs:**

*   **Security Concerns:** Wireless signals can be intercepted, requiring strong encryption and security protocols.
*   **Interference:** Susceptible to interference from other wireless devices operating in the same frequency bands.
*   **Limited Range:** Coverage is confined to the signal's reach.
*   **Lower Throughput (compared to wired):** Typically offers lower data rates than wired Ethernet connections due to shared medium and protocol overhead.
*   **Health Concerns (Perceived):** While generally considered safe by scientific consensus, some users have concerns about RF radiation.

---

## 2. WLAN Architecture and Components

### **2.1 Basic Components:**

*   **Wireless Network Interface Controller (WNIC):** A hardware component in a device that enables it to connect to a WLAN.
*   **Access Point (AP):**
    *   **Function:** Bridges wireless traffic to the wired network.
    *   **Components:** Radio transceiver, antenna, network interface to the wired network (Ethernet port).
    *   **Management:** Configured with SSID, security settings, channel selection.
*   **Wireless Client Devices:** Laptops, smartphones, tablets, IoT devices equipped with WNICs.
*   **Wired Network Infrastructure:** Ethernet switches, routers, and cabling connecting APs to the internet and other network resources.

### **2.2 WLAN Topologies:**

*   **Infrastructure Mode:**
    *   **Description:** All wireless devices communicate through a central Access Point (AP).
    *   **Diagram:**
        ```
        +----------+       +----------+       +----------+
        |  Client 1|-------|   AP     |-------| Wired Net|
        +----------+       +----------+       +----------+
        +----------+
        |  Client 2|
        +----------+
        ```
    *   **Advantages:** Centralized management, access to wired network, extended range through multiple APs (ESS).
*   **Ad-Hoc Mode (IBSS):**
    *   **Description:** Devices communicate directly with each other without an AP.
    *   **Diagram:**
        ```
        +----------+       +----------+
        |  Client 1|-------|  Client 2|
        +----------+       +----------+
             |                 |
             +-----------------+
        ```
    *   **Advantages:** Simple setup for small groups, no infrastructure required.
    *   **Disadvantages:** Limited range, no access to wired network, less manageable.

---

## 3. WLAN Standards: IEEE 802.11 Family

*   **Governing Body:** Institute of Electrical and Electronics Engineers (IEEE) 802.11 Working Group.
*   **Key Standards and Their Characteristics:**

| Standard        | Year  | Frequency Band | Max Data Rate (Mbps) | Typical Range (Indoors) | Modulation Schemes                                | Key Features/Improvements                                        |
| :-------------- | :---- | :------------- | :------------------- | :---------------------- | :------------------------------------------------- | :--------------------------------------------------------------- |
| **802.11**      | 1997  | 2.4 GHz        | 1 or 2               | ~30-50 m                | FHSS, DSSS                                         | Original standard.                                               |
| **802.11b**     | 1999  | 2.4 GHz        | 11                   | ~35 m                   | DSSS (CCK)                                         | Significant speed increase over 802.11. Widely adopted.        |
| **802.11a**     | 1999  | 5 GHz          | 54                   | ~20 m                   | OFDM                                               | Higher speed, less interference in 5 GHz band, but shorter range. |
| **802.11g**     | 2003  | 2.4 GHz        | 54                   | ~35 m                   | OFDM                                               | Combines 802.11b's 2.4 GHz band with 802.11a's OFDM speed.     |
| **802.11n (Wi-Fi 4)** | 2009  | 2.4 GHz & 5 GHz | Up to 600+         | ~70 m                   | OFDM, MIMO                                         | Increased speed, range, and reliability with MIMO and channel bonding. |
| **802.11ac (Wi-Fi 5)** | 2013  | 5 GHz          | Up to 3.46 Gbps    | ~35 m                   | OFDM, MU-MIMO, Wider Channels (80/160 MHz)        | Significantly higher speeds, wider channels, MU-MIMO for improved efficiency. |
| **802.11ax (Wi-Fi 6)** | 2019  | 2.4 GHz & 5 GHz | Up to 9.6 Gbps     | ~40 m                   | OFDMA, MU-MIMO (UL/DL), BSS Coloring, Target Wake Time | Improved efficiency in dense environments, better performance for IoT, increased capacity. |
| **802.11be (Wi-Fi 7)** | Projected | 2.4 GHz, 5 GHz, 6 GHz | Up to 46 Gbps      | ~40 m                   | OFDMA, MU-MIMO (UL/DL), Wider Channels (320 MHz), MLO | Even higher speeds, lower latency, improved spectral efficiency, Multi-Link Operation. |

**Important Note on Data Rates:** The "Max Data Rate" is a theoretical PHY (Physical Layer) rate. Actual throughput is significantly lower due to protocol overhead, interference, distance, and number of users.

---

## 4. WLAN Operation and Medium Access Control (MAC)

### **4.1 The MAC Layer:**

*   **Purpose:** Manages access to the shared wireless medium, ensuring that multiple devices can transmit data without excessive collisions.
*   **Core Mechanism:** CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).
    *   **Carrier Sense:** Before transmitting, a station "listens" to the channel to detect if it's busy.
    *   **Multiple Access:** Multiple stations share the same communication channel.
    *   **Collision Avoidance:** Rather than just detecting and recovering from collisions (like CSMA/CD in wired Ethernet), CSMA/CA aims to prevent them.

### **4.2 CSMA/CA Mechanism:**

1.  **Listen Before Talk:** A station senses the channel.
2.  **If Channel is Idle:** The station waits for a **DCF Interframe Space (DIFS)**.
3.  **If Channel is Busy:** The station enters a **backoff period**.
    *   A random backoff timer is chosen from a **contention window (CW)**.
    *   The CW size increases exponentially with each successive collision (to reduce the probability of re-colliding).
    *   The station decrements its backoff timer only when the channel is idle.
4.  **After DIFS and Backoff Timer Expires:** The station transmits a **Short Interframe Space (SIFS)** followed by its data frame.
5.  **Acknowledgement (ACK):** The intended recipient of the data frame sends an ACK frame after a SIFS interval. This ACK is crucial for collision avoidance.
6.  **If ACK is Not Received:** The sender assumes a collision occurred or the frame was lost and retransmits after another backoff period.

### **4.3 RTS/CTS (Request to Send / Clear to Send):**

*   **Purpose:** To mitigate the **hidden node problem**, where two stations can transmit to a common AP but cannot hear each other, leading to collisions at the AP.
*   **Mechanism:**
    1.  Sender (Station A) sends an RTS frame to the AP.
    2.  AP receives RTS and broadcasts a CTS frame.
    3.  CTS indicates to all nearby stations that the channel is occupied for a specific duration.
    4.  This duration is specified in the RTS and CTS frames, covering the data transmission and the subsequent ACK.
    5.  Other stations hearing the CTS will refrain from transmitting until the specified time elapses.

### **4.4 QoS (Quality of Service) in WLANs:**

*   **802.11e (Enhanced QoS):** Introduced mechanisms to prioritize traffic.
    *   **HCF (Hybrid Coordination Function):** Combines DCF and PCF (Point Coordination Function) for better QoS.
    *   **EDCA (Enhanced Distributed Channel Access):** A distributed access method that assigns different **Access Categories (ACs)** to traffic with varying QoS requirements. Each AC has its own CW, DIFS, and AIFS (Arbitration Interframe Space).
        *   High priority traffic (e.g., voice) uses smaller CWs and shorter AIFS, allowing them to transmit more frequently.
        *   Low priority traffic (e.g., file downloads) uses larger CWs and longer AIFS.

---

## 5. WLAN Performance Factors and Challenges

### **5.1 Factors Affecting Performance:**

*   **Distance from AP:** Signal strength degrades with distance, leading to lower data rates and increased error probability. (Relates to **CO4**, understanding wireless signal propagation).
*   **Interference:**
    *   **Co-channel Interference (CCI):** From other APs or devices using the same channel.
    *   **Adjacent Channel Interference (ACI):** From devices using adjacent channels.
    *   **Interference from other devices:** Microwaves, Bluetooth devices, cordless phones operating in the 2.4 GHz band.
*   **Multipath Propagation:** Signals reflect off surfaces, arriving at the receiver via multiple paths. This can cause:
    *   **Fading:** Fluctuations in signal amplitude due to constructive and destructive interference of multipath components.
    *   **Intersymbol Interference (ISI):** When delayed versions of a transmitted symbol overlap with subsequent symbols, corrupting the data. (Directly relates to **CO5** on channel models).
*   **Number of Users:** As more devices share the bandwidth, the effective throughput per user decreases.
*   **Obstacles:** Walls, furniture, and other physical objects attenuate and reflect radio waves, reducing signal strength and introducing multipath.
*   **Antenna Gain and Directivity:** The type and placement of antennas on APs and clients significantly impact coverage and signal strength.
*   **WLAN Standard:** Newer standards offer higher theoretical speeds and better efficiency.

### **5.2 Mitigation Techniques:**

*   **Channel Selection:** Choosing less congested channels for APs.
*   **Transmit Power Control:** Adjusting transmit power to optimize coverage and minimize interference.
*   **Antenna Placement and Diversity:**
    *   **Spatial Diversity:** Using multiple antennas at the transmitter or receiver to exploit different propagation paths. This can improve reliability by providing alternative signal paths when one is weak due to fading. (Relates to **CO6** on diversity techniques).
    *   **Receive Diversity:** The receiver combines signals from multiple antennas.
    *   **Transmit Diversity:** The transmitter sends the same data over multiple antennas with different coding schemes (e.g., space-time coding).
*   **Equalization:**
    *   **Purpose:** To counteract the effects of multipath-induced ISI.
    *   **How it works:** Equalizers introduce inverse filtering to compensate for the channel's distortion, effectively "undoing" the multipath effects. (Relates to **CO6** on equalization).
    *   **Types:** Linear equalizers (e.g., zero-forcing, MMSE), Decision-Feedback Equalizers (DFE).
*   **MIMO (Multiple-Input Multiple-Output):**
    *   **Description:** Uses multiple antennas at both the transmitter and receiver to improve data rates (spatial multiplexing) and/or reliability (diversity).
    *   **Spatial Multiplexing:** Transmits independent data streams over different antenna paths.
    *   **Beamforming:** Focuses the transmitted signal in a particular direction, improving signal strength for the intended receiver and reducing interference to others.
*   **OFDMA (Orthogonal Frequency Division Multiple Access):**
    *   **Description:** In Wi-Fi 6 and later, this allows an AP to divide the channel into smaller subcarriers and allocate them to different users simultaneously.
    *   **Benefits:** Improved spectral efficiency, reduced latency, better performance in dense environments with many devices.

---

## 6. WLAN Security

### **6.1 Importance of WLAN Security:**

*   Wireless signals are broadcast over the air, making them inherently more vulnerable to eavesdropping and unauthorized access than wired networks.
*   Protecting sensitive data and preventing unauthorized network access is paramount.

### **6.2 Security Protocols:**

*   **WEP (Wired Equivalent Privacy):**
    *   **Status:** **Obsolete and insecure.**
    *   **Weaknesses:** Easily crackable due to fundamental cryptographic flaws.
*   **WPA (Wi-Fi Protected Access):**
    *   **Description:** Introduced as an interim solution to WEP's weaknesses. Uses TKIP (Temporal Key Integrity Protocol) for encryption.
    *   **Status:** **Considered insecure and should not be used.**
*   **WPA2 (Wi-Fi Protected Access II):**
    *   **Description:** The current industry standard, mandated by the Wi-Fi Alliance. Uses the more robust **AES (Advanced Encryption Standard)** encryption algorithm with CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol).
    *   **Modes:**
        *   **WPA2-Personal (WPA2-PSK):** Uses a Pre-Shared Key (PSK) – a passphrase – for authentication. Suitable for home and small office networks.
        *   **WPA2-Enterprise:** Uses IEEE 802.1X authentication with an external RADIUS server for individual user authentication. Provides stronger security and scalability for larger organizations.
*   **WPA3 (Wi-Fi Protected Access III):**
    *   **Description:** The latest standard, offering enhanced security features:
        *   **Stronger Encryption:** Uses stronger cryptographic algorithms and longer keys.
        *   **Simultaneous Authentication of Equals (SAE):** Replaces PSK with a more secure handshake mechanism to prevent offline dictionary attacks.
        *   **Enhanced Open Networks:** Provides individual data encryption for public Wi-Fi networks (e.g., in cafes) via **Opportunistic Wireless Encryption (OWE)**.
        *   **Improved Security for IoT Devices:** Offers easier and more secure ways to connect IoT devices.

### **6.3 Other Security Measures:**

*   **Strong Passphrases/Passwords:** For WPA2-PSK and network access.
*   **Changing Default SSID and AP Passwords:** To prevent easy unauthorized access.
*   **Disabling WPS (Wi-Fi Protected Setup):** Unless absolutely necessary and properly configured, as WPS can have vulnerabilities.
*   **MAC Address Filtering:** A supplementary measure, but not a primary security solution as MAC addresses can be spoofed.
*   **Network Segmentation (VLANs):** Isolating wireless traffic from critical wired networks.
*   **Regular Firmware Updates:** For APs and client devices to patch security vulnerabilities.

---

## 7. Practical Considerations and Future Trends

### **7.1 Deployment and Planning:**

*   **Site Survey:** Essential for determining optimal AP placement, identifying potential interference sources, and ensuring adequate coverage.
*   **Capacity Planning:** Estimating the number of devices and the required bandwidth for a given area.
*   **Interference Management:** Strategies for mitigating interference from other wireless systems.

### **7.2 Future Trends:**

*   **Wi-Fi 7 (802.11be):** Further increases in speed, lower latency, and improved efficiency through wider channels (320 MHz), Multi-Link Operation (MLO), and enhanced OFDMA.
*   **Integration with 5G/6G:** Seamless handover and co-existence between WLAN and cellular networks.
*   **Wi-Fi HaLow (802.11ah):** Designed for IoT devices, operating in sub-1 GHz bands for longer range and lower power consumption.
*   **Wi-Fi Direct/Miracast:** Enabling direct device-to-device communication without an AP.
*   **AI/ML in WLAN Management:** For intelligent network optimization, anomaly detection, and proactive troubleshooting.

---

## 8. Practice Questions and Exercises

**Question 1 (CO4, K2):** Briefly explain the primary purpose of an Access Point in a wireless LAN.

**Answer:** The primary purpose of an Access Point (AP) in a WLAN is to act as a central hub, connecting wireless devices to a wired network and allowing them to communicate with each other and the internet. It broadcasts the network's SSID and manages wireless traffic.

**Question 2 (CO4, K2):** Differentiate between Infrastructure Mode and Ad-Hoc Mode in WLANs.

**Answer:**
*   **Infrastructure Mode:** Wireless devices connect to a central Access Point (AP), which then bridges them to the wired network. This is the most common mode.
*   **Ad-Hoc Mode (IBSS):** Wireless devices connect directly to each other without an AP, forming a peer-to-peer network. This is typically used for temporary, small-scale connections.

**Question 3 (CO4, K2):** What does CSMA/CA stand for, and why is it used in WLANs instead of CSMA/CD?

**Answer:** CSMA/CA stands for Carrier Sense Multiple Access with Collision Avoidance. It is used in WLANs because the wireless medium is prone to issues like the hidden node problem, where collisions are difficult to detect directly. CSMA/CA aims to *avoid* collisions by listening to the channel and using random backoff timers, rather than detecting and recovering from them after they occur (as CSMA/CD does in wired networks).

**Question 4 (CO4, K2):** List three key advantages of using WLANs.

**Answer:**
1.  **Mobility:** Users can move freely within the coverage area.
2.  **Flexibility:** Easy to set up and reconfigure.
3.  **Reduced Cabling Costs:** Eliminates the need for extensive physical wiring.

**Question 5 (CO4, K2):** Name the current industry standard for WLAN security and the encryption protocol it uses.

**Answer:** The current industry standard is WPA2, which uses AES encryption with CCMP protocol.

**Question 6 (CO4, K3):** Explain the "hidden node problem" in WLANs and how RTS/CTS helps to mitigate it.

**Answer:** The hidden node problem occurs when two stations (A and C) are too far apart to hear each other directly, but both can hear a central Access Point (AP). If A and C attempt to transmit to the AP simultaneously, the AP will receive both signals, causing a collision, even though A and C cannot detect this collision themselves.
The RTS/CTS mechanism helps mitigate this: Station A first sends a "Request to Send" (RTS) frame to the AP. The AP then responds with a "Clear to Send" (CTS) frame, which is broadcast to all devices within range. The CTS frame includes a duration field indicating how long the channel will be busy. Any station (like C) that hears the CTS will defer its transmission until the specified time, thus preventing a collision at the AP.

**Question 7 (CO4, K3):** Describe the role of MIMO technology in enhancing WLAN performance.

**Answer:** MIMO (Multiple-Input Multiple-Output) uses multiple antennas at both the transmitter and receiver. It enhances WLAN performance in two primary ways:
1.  **Spatial Multiplexing:** Transmits multiple independent data streams simultaneously over different antenna paths, significantly increasing data throughput.
2.  **Diversity:** Transmits redundant copies of data over different antenna paths, improving signal reliability and mitigating the effects of fading.

**Question 8 (CO5, K2):** How does multipath propagation affect WLAN signals, and what is one technique to combat this effect?

**Answer:** Multipath propagation occurs when signals reflect off surfaces, arriving at the receiver via multiple paths. This can cause signal fading (fluctuations in strength due to constructive/destructive interference) and Intersymbol Interference (ISI), where delayed signal components overlap with subsequent symbols, corrupting data.
A technique to combat this is **equalization**. Equalizers at the receiver apply an inverse filter to the received signal to undo the distortion caused by multipath, effectively mitigating ISI and recovering the original data. Another technique is **diversity**, which uses multiple antennas to exploit different propagation paths.

**Question 9 (CO6, K3):** Why is WEP considered insecure, and what are the advantages of WPA3 over WPA2-PSK?

**Answer:** WEP is considered insecure due to fundamental flaws in its encryption algorithm and key management, making it vulnerable to relatively easy decryption.
WPA3 offers several advantages over WPA2-PSK:
1.  **Stronger Authentication:** WPA3-Personal uses Simultaneous Authentication of Equals (SAE), which is more resistant to dictionary attacks than WPA2's Pre-Shared Key (PSK).
2.  **Enhanced Open Networks:** WPA3 provides individual data encryption (Opportunistic Wireless Encryption - OWE) for public Wi-Fi, protecting users from eavesdropping even without a password.
3.  **Increased Cryptographic Strength:** WPA3 mandates stronger encryption algorithms and longer keys, offering better protection against sophisticated attacks.

**Question 10 (CO4, K3):** Consider a scenario where you need to set up Wi-Fi for a medium-sized office. What WLAN standard would you recommend and why? Briefly mention two key considerations for deployment.

**Answer:**
I would recommend **Wi-Fi 6 (802.11ax)**.
**Reasons:**
*   **Improved Efficiency in Dense Environments:** Offices often have many devices in a relatively small area. Wi-Fi 6's OFDMA and MU-MIMO technologies significantly improve spectral efficiency and handle multiple users concurrently better than older standards.
*   **Higher Throughput and Capacity:** Offers substantially higher data rates and overall network capacity, supporting business-critical applications.
*   **Better Interference Handling:** Features like BSS Coloring help reduce interference in co-located networks.

**Two Key Considerations for Deployment:**
1.  **Site Survey:** Conducting a thorough site survey is crucial to identify optimal AP placement for consistent coverage, minimize dead zones, and identify sources of potential interference (e.g., from other wireless devices or building materials).
2.  **Security Configuration:** Implementing WPA2-Enterprise (with RADIUS server) or WPA3-Enterprise is recommended for robust security, enabling individual user authentication and access control for employees, rather than a shared password.

---

## 9. Important Points to Remember

*   WLANs use radio waves to provide wireless local area networking.
*   The IEEE 802.11 family of standards defines WLAN technologies.
*   CSMA/CA is the fundamental MAC protocol used to manage access to the shared wireless medium and avoid collisions.
*   The hidden node problem is a significant challenge in WLANs, addressed by RTS/CTS.
*   Multipath propagation is a primary cause of signal degradation (fading, ISI) in wireless channels, requiring techniques like equalization and diversity.
*   MIMO technology leverages multiple antennas to boost both data rates and reliability.
*   Robust security protocols (WPA2, WPA3) are essential to protect wireless networks from unauthorized access and data interception.
*   Choosing the right WLAN standard (e.g., Wi-Fi 6) depends on the application's needs for speed, capacity, and efficiency, especially in dense environments.
*   Proper deployment planning, including site surveys and security configuration, is critical for optimal WLAN performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
