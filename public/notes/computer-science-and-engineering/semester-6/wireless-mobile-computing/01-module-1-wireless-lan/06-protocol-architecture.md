---
title: "Protocol Architecture"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb71"
status: "completed"
scrapedAt: "2026-05-20T16:57:48.204Z"
---
# WIRELESS & MOBILE COMPUTING - Module 1: Wireless LAN - Protocol Architecture

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the layered architecture of the IEEE 802.11 protocol.
*   Describe the functions of each layer in the 802.11 architecture.
*   Explain the role of Distributed Coordination Function (DCF) and Point Coordination Function (PCF) in MAC layer.
*   Compare and contrast the different MAC protocols (CSMA/CA, RTS/CTS).
*   Understand the physical layer characteristics and modulation techniques used in 802.11.
*   Explain the concept of management frames and their role in WLAN operation.

## 1. Introduction to IEEE 802.11 Protocol Architecture

Wireless LANs (WLANs) based on the IEEE 802.11 standard use a layered protocol architecture similar to the OSI model. This architecture defines how wireless devices communicate and ensures interoperability between different vendors.

*   **Key Concept:** Layered architecture breaks down complex communication processes into manageable layers, each with specific functions. This modularity simplifies design, implementation, and troubleshooting.

## 2. Layered Architecture of IEEE 802.11

The 802.11 protocol architecture primarily consists of two layers:

*   **MAC (Medium Access Control) Layer:** This layer manages access to the wireless medium. It handles contention, collision avoidance, and addressing.
*   **Physical (PHY) Layer:**  This layer deals with the actual transmission and reception of data over the wireless medium, including modulation, encoding, and signal characteristics.

These two layers reside below the Logical Link Control (LLC) layer which is the upper layer of the Data Link Layer as defined in the OSI model. The LLC layer handles error correction and flow control and is largely unchanged from wired LANs.

```
+---------------------+
| Logical Link Control (LLC) |
+---------------------+
| Medium Access Control (MAC)|
+---------------------+
| Physical (PHY) Layer  |
+---------------------+
```

### 2.1. MAC Layer

The MAC layer is responsible for controlling access to the wireless medium and ensuring reliable data transfer. Key functions include:

*   **Addressing:**  MAC addresses are used to identify devices on the WLAN.
*   **Framing:**  Data is encapsulated into frames for transmission.
*   **Error Detection:**  Cyclic Redundancy Check (CRC) is used to detect errors in transmitted frames.
*   **Contention Management:** Mechanisms like CSMA/CA are employed to avoid collisions.
*   **Association/Authentication:**  Managing connections between wireless clients and access points.
*   **Power Management:** Power saving mechanisms to conserve battery life on mobile devices.

#### 2.1.1 Distributed Coordination Function (DCF)

*   **Definition:** The fundamental MAC method in 802.11. It is a mandatory function and is based on Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA).
*   **Mechanism:**
    *   A station listens to the channel. If the channel is idle, it waits for a Distributed Inter-Frame Space (DIFS) period and then transmits.
    *   If the channel is busy, the station defers transmission until the channel is idle for a DIFS period. It then enters a backoff procedure.
    *   **Backoff Procedure:** The station chooses a random backoff time and counts down. If the channel becomes busy again, the countdown is frozen. It resumes when the channel is idle for DIFS again. This helps to reduce collisions.
*   **Key Concept:**  CSMA/CA avoids collisions rather than detects them, as in CSMA/CD (used in wired Ethernet).

#### 2.1.2 Point Coordination Function (PCF)

*   **Definition:** An optional MAC method that provides contention-free access to the wireless medium. It is based on a Point Coordinator (PC), typically located at the access point.
*   **Mechanism:**
    *   The PC polls stations in a predefined order.
    *   Stations can only transmit when polled.
    *   The PCF is used during a Contention Free Period (CFP), which alternates with a Contention Period (CP).
*   **Advantages:**  Guarantees bandwidth and reduces contention.
*   **Disadvantages:**  More complex to implement and less commonly used than DCF.

#### 2.1.3 MAC Protocols: CSMA/CA and RTS/CTS

*   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):**
    *   **Mechanism:** As described in DCF.
    *   **Purpose:** Reduces the probability of collisions by listening to the channel before transmitting.
    *   **Limitations:** The "hidden node" problem.  Nodes A and C might both be in range of node B, but not in range of each other.  They might both think the channel is clear and transmit simultaneously to B.

*   **RTS/CTS (Request to Send / Clear to Send):**
    *   **Mechanism:** A station wanting to transmit sends an RTS frame to the intended receiver. The receiver responds with a CTS frame. All other stations hearing either the RTS or CTS frame remain silent for the duration of the transmission.
    *   **Purpose:**  Addresses the hidden node problem.
    *   **Advantages:**  Reduces collisions, particularly in dense networks or when hidden nodes are present.
    *   **Disadvantages:**  Introduces overhead, reducing overall throughput. Usually only enabled when required.

### 2.2. Physical (PHY) Layer

The physical layer is responsible for the actual transmission and reception of radio signals. Key functions include:

*   **Modulation:** Converting digital data into analog signals suitable for transmission over the radio channel.
*   **Encoding:**  Preparing the data for modulation.
*   **Transmitter and Receiver Characteristics:**  Power levels, frequency bands, and antenna characteristics.
*   **Clear Channel Assessment (CCA):**  Determining whether the channel is free before transmitting.

#### 2.2.1 Modulation Techniques

*   **Frequency Hopping Spread Spectrum (FHSS):** Early standard.  Data is transmitted by rapidly switching between different carrier frequencies.
*   **Direct Sequence Spread Spectrum (DSSS):** Early standard. Data is spread across a wider frequency band, making it more resistant to interference.
*   **Orthogonal Frequency Division Multiplexing (OFDM):**  Used in 802.11a, 802.11g, 802.11n, 802.11ac, and 802.11ax.  Data is divided into multiple parallel data streams, each modulated on a different subcarrier frequency. More efficient and resilient to interference than FHSS and DSSS.

#### 2.2.2 Clear Channel Assessment (CCA)

*   **Purpose:** Determines whether the wireless medium is available for transmission.
*   **Mechanism:** Typically involves measuring the received signal strength indicator (RSSI) and/or detecting the presence of other 802.11 signals. If the signal strength is above a certain threshold, or if other 802.11 signals are detected, the channel is considered busy.

## 3. Management Frames

Management frames are used to manage the operation of the WLAN. They are crucial for tasks such as:

*   **Association:** A wireless client requests to join a WLAN.
*   **Authentication:** Verifying the identity of the wireless client.
*   **Beaconing:**  An access point periodically broadcasts beacon frames, advertising its presence and capabilities.
*   **Probe Request/Response:** A client can actively search for available WLANs by sending probe requests. Access points respond with probe responses.
*   **Disassociation/Deauthentication:** Terminating a connection between a client and an access point.

*   **Key Concept:** Management frames are essential for maintaining the WLAN's structure and security.

## 4. Examples

*   **Scenario:** A laptop tries to connect to a wireless network.
    *   **Process:** The laptop sends a probe request to discover nearby access points.
    *   The access point responds with a probe response, including its SSID and supported security protocols.
    *   The laptop attempts to associate with the access point, which involves authentication and key exchange.
    *   If successful, the laptop is now associated and can transmit data.

*   **Scenario:** Two devices try to transmit data simultaneously.
    *   **Process:** Both devices listen to the channel using CSMA/CA. If the channel is idle, they wait for a DIFS period and then enter a backoff procedure.
    *   Each device chooses a random backoff time. The device with the shorter backoff time transmits first.
    *   The other device, upon sensing the channel is busy, freezes its backoff timer until the channel is idle again. This mechanism minimizes collisions.

## 5. Practice Questions & Exercises

1.  **Question:** Explain the role of the MAC layer in the IEEE 802.11 protocol architecture.
    *   **Answer:** The MAC layer controls access to the wireless medium, manages contention, handles addressing, framing, error detection, association/authentication, and power management.

2.  **Question:** What is the purpose of the Distributed Coordination Function (DCF)?
    *   **Answer:** DCF is the fundamental MAC method in 802.11 based on CSMA/CA. It provides a distributed mechanism for accessing the wireless medium, minimizing collisions.

3.  **Question:** Explain the difference between CSMA/CA and RTS/CTS.
    *   **Answer:** CSMA/CA is a basic mechanism for avoiding collisions by sensing the channel before transmitting. RTS/CTS addresses the hidden node problem by exchanging RTS and CTS frames before data transmission, reserving the medium and preventing collisions from hidden nodes. RTS/CTS incurs more overhead.

4.  **Question:** What are management frames used for in WLANs? Give examples.
    *   **Answer:** Management frames are used to manage the operation of the WLAN. Examples include association, authentication, beaconing, probe request/response, disassociation, and deauthentication.

5.  **Exercise:** Consider a scenario where two devices (A and B) are attempting to transmit data to the same access point (AP). Device A is within range of both the AP and Device B. However, Device B is *not* within range of Device A (the hidden node problem). Explain how RTS/CTS helps avoid collisions in this scenario, compared to using only CSMA/CA.
    *   **Answer:** If only CSMA/CA is used, Device B may sense the channel as idle (because it cannot hear Device A) and begin transmitting at the same time as Device A. This would result in a collision at the AP. With RTS/CTS, Device A sends an RTS to the AP. The AP responds with a CTS. Device B, although it cannot hear Device A's RTS, *can* hear the AP's CTS. Therefore, Device B will defer its transmission, avoiding the collision.

## 6. Important Points to Remember

*   The IEEE 802.11 standard defines the protocol architecture for wireless LANs.
*   The MAC layer manages access to the wireless medium, using functions like DCF, PCF, CSMA/CA, and RTS/CTS.
*   The physical layer handles the transmission and reception of radio signals, including modulation and encoding.
*   Management frames are essential for managing the WLAN's operation, including association, authentication, and beaconing.
*   Understanding the hidden node problem is crucial for designing and troubleshooting WLANs.
*   OFDM is the most common modulation technique in modern 802.11 standards.
