---
title: "Channel allocation problem"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36472"
status: "completed"
scrapedAt: "2026-05-23T16:19:59.223Z"
---
# Computer Network Systems: Module 2 - Data Link Layer

## Topic: Channel Allocation Problem

---

### Introduction

The Data Link Layer, specifically its Medium Access Control (MAC) sublayer, is responsible for managing access to a shared communication channel. In many network environments, multiple devices need to share the same physical medium (e.g., a coaxial cable in an Ethernet, or the airwaves in Wi-Fi). This shared access introduces the **Channel Allocation Problem**: how to efficiently and fairly allocate the communication channel among competing users or devices.

This topic delves into the challenges and solutions for managing shared access to a network medium.

---

### Learning Outcomes Covered in this Topic:

*   **LO1:** Understand the fundamental challenge of shared channel access in networking.
*   **LO2:** Explain different strategies for allocating a shared communication channel.
*   **LO3:** Analyze the trade-offs and performance implications of various channel allocation techniques.
*   **LO4:** Identify specific protocols and techniques that implement channel allocation.
*   **LO5:** Relate channel allocation to the overall functioning of the Data Link Layer.

---

### Key Concepts and Definitions:

*   **Shared Channel:** A communication medium that can be accessed by multiple devices.
*   **Multiple Access:** The process of allowing multiple devices to share a single communication channel.
*   **Channel Allocation Problem:** The problem of deciding which device gets to use the channel and when, to avoid collisions and ensure efficient utilization.
*   **Collision:** Occurs when two or more devices transmit data on the shared channel simultaneously, resulting in garbled or lost data.
*   **Contention:** The situation where multiple devices attempt to access the channel at the same time.
*   **Contention-based Protocols:** Protocols where devices compete for access to the channel.
*   **Controlled Access Protocols:** Protocols where devices gain access to the channel in a predetermined or controlled manner.
*   **Time Division Multiple Access (TDMA):** A method of allocating the channel by dividing it into time slots.
*   **Frequency Division Multiple Access (FDMA):** A method of allocating the channel by dividing it into frequency bands.
*   **Code Division Multiple Access (CDMA):** A method of allocating the channel by using unique codes to differentiate signals.
*   **Space Division Multiple Access (SDMA):** A method of allocating the channel by using different spatial locations or directions.

---

### 1. The Need for Channel Allocation

In broadcast networks (e.g., early Ethernet, Wi-Fi), a single communication medium connects multiple devices. If all devices could transmit freely, collisions would be inevitable, leading to inefficient communication. The channel allocation problem arises to address this:

*   **Prevent Collisions:** Ensure that only one device transmits at a time to avoid data corruption.
*   **Maximize Channel Utilization:** Make the most efficient use of the available bandwidth.
*   **Ensure Fairness:** Provide a reasonable opportunity for all devices to transmit.
*   **Manage Bandwidth:** Allocate bandwidth effectively to different users or applications.

**Reference:** Tanenbaum, 5th Ed., Chapter 4.1 (Multiple Access)

---

### 2. Categories of Multiple Access Protocols

Multiple access protocols can be broadly categorized into three main types:

#### a) Random Access Protocols

In these protocols, each station attempts to transmit when it has data to send, without prior coordination. This leads to potential collisions.

**Key Principle:** Listen before transmitting, and if a collision occurs, back off and try again later.

**Protocols:**

*   **ALOHA:**
    *   **Pure ALOHA:** A station transmits whenever it has a frame. If a collision occurs, the frame is lost. The sender retransmits after a random backoff period.
    *   **Slotted ALOHA:** The channel is divided into discrete time slots. Stations can only transmit at the beginning of a slot. This reduces the window for collisions, improving throughput.
    *   **Throughput:** Pure ALOHA has a maximum theoretical throughput of $1/(2e)$ frames per slot (approximately 18.4%). Slotted ALOHA has a maximum theoretical throughput of $1/e$ frames per slot (approximately 36.8%).

    **Example:** Imagine a group of people in a room wanting to speak. In Pure ALOHA, anyone speaks when they feel like it. If two people speak at once, they both stop and wait a random time before trying again. In Slotted ALOHA, everyone agrees to speak only at the beginning of a minute. This reduces the chance of two people starting to speak at the exact same moment.

    **Reference:** Forouzan, 5th Ed., Chapter 4.2.1 (ALOHA)
    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.1 (ALOHA)

*   **Carrier Sense Multiple Access (CSMA):**
    *   **Principle:** Stations "listen" to the channel before transmitting. If the channel is busy, they wait. If it's idle, they transmit.
    *   **Collisions still possible:** If two stations listen, find the channel idle, and transmit almost simultaneously, a collision can still occur (propagation delay).

    **Variants of CSMA:**
    *   **CSMA/Non-persistent:** If the channel is busy, the station waits a random amount of time before sensing again.
    *   **CSMA/1-persistent:** If the channel is busy, the station waits until it becomes idle, then transmits immediately. If a collision occurs, it waits a random amount of time and starts over.
    *   **CSMA/Non-persistent:** A station listens to the channel. If it's busy, it waits a random amount of time and then senses again. If it's idle, it transmits.

    **Reference:** Forouzan, 5th Ed., Chapter 4.2.2 (CSMA)
    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.2 (CSMA)

*   **CSMA with Collision Detection (CSMA/CD):**
    *   **Principle:** Stations listen to the channel while transmitting. If they detect a collision, they stop transmitting immediately, send a jamming signal to ensure all other stations are aware of the collision, and then back off.
    *   **Efficiency:** Significantly improves efficiency compared to CSMA alone by reducing wasted transmission time.
    *   **Used in:** Classic Ethernet.

    **Example:** Think of a conversation where you can hear the other person speaking while you are speaking. If you both start talking at the same time, you realize it immediately, stop talking, and let the other person finish before trying again.

    **Reference:** Forouzan, 5th Ed., Chapter 4.2.3 (CSMA/CD)
    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.2 (CSMA/CD)
    **Reference:** Peterson & Davie, 5th Ed., Chapter 3.2.1 (Ethernet)

*   **CSMA with Collision Avoidance (CSMA/CA):**
    *   **Principle:** Attempts to avoid collisions *before* they happen, rather than detecting them. Stations may transmit a small control packet (like a Request to Send - RTS) before sending the actual data. If the channel is clear after the control packet, the data is sent.
    *   **Used in:** Wireless LANs (Wi-Fi) because collision detection is difficult in a wireless environment (hidden terminal problem).

    **Example:** Before speaking a long sentence, you might say "Excuse me, may I speak?". If no one else says "yes", you proceed. In Wi-Fi, a device might send a short "Request to Send" (RTS) packet. If it doesn't get a "Clear to Send" (CTS) reply, it knows the channel is busy or there's a collision risk and waits.

    **Reference:** Forouzan, 5th Ed., Chapter 4.2.4 (CSMA/CA)
    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.2 (CSMA/CA)
    **Reference:** Kurose & Ross, 6th Ed., Chapter 5.2 (Wireless LANs and Bluetooth)

#### b) Controlled Access Protocols

In these protocols, access to the channel is regulated. Stations must acquire permission from some authority or follow a specific sequence to transmit.

**Key Principle:** Avoid contention by having a structured access method.

**Protocols:**

*   **Reservation:** Stations reserve their turn to transmit by sending a reservation message.
*   **Polling:** A central controller (master station) polls each station (slave station) in turn, asking if it has data to send.
    *   **Types:**
        *   **Roll-call polling:** The master polls each slave in a predefined order.
        *   **Select polling:** The master polls slaves that it knows have data to send.
    *   **Efficiency:** Can be inefficient if there are many stations or if many stations have no data.

    **Example:** Imagine a teacher (master) asking each student (slave) in turn if they have a question. If a student has a question, they raise their hand and the teacher listens.

    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.3 (Controlled Access)
    **Reference:** Forouzan, 5th Ed., Chapter 4.3.1 (Controlled Access)

*   **Token Passing:**
    *   **Principle:** A special small frame, called a token, circulates around the network. A station can transmit only when it holds the token. After transmitting, it passes the token to the next station.
    *   **Advantages:** Eliminates collisions, ensures fair access, and provides deterministic access times.
    *   **Disadvantages:** Token loss or duplication can disrupt the network, and the token circulation time adds overhead.
    *   **Used in:** Token Ring and FDDI.

    **Example:** A speaking stick is passed around a group. Only the person holding the stick can speak. Once they finish, they pass the stick to the next person in line.

    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.3 (Controlled Access)
    **Reference:** Forouzan, 5th Ed., Chapter 4.3.2 (Token Passing)
    **Reference:** Peterson & Davie, 5th Ed., Chapter 3.2.2 (Token Ring)

#### c) Channel Partitioning Protocols

These protocols divide the channel into smaller partitions, with each partition allocated to a specific station or group of stations.

**Key Principle:** Dedicate parts of the channel to specific users.

**Protocols:**

*   **Time Division Multiplexing (TDM):** The channel's time is divided into slots, and each station is assigned a specific slot in a repeating cycle.
    *   **Synchronous TDM:** All stations are allocated the same slot whether they have data or not. Inefficient.
    *   **Asynchronous TDM (Statistical TDM):** Slots are allocated dynamically to stations that have data, based on availability. More efficient.

*   **Frequency Division Multiplexing (FDM):** The channel's bandwidth is divided into frequency bands. Each station is assigned a specific frequency band.
    *   **Used in:** Older telephone systems, cable TV.

*   **Code Division Multiple Access (CDMA):**
    *   **Principle:** Each station is assigned a unique code sequence. All stations transmit on the same frequency and at the same time. The unique codes allow the receiver to distinguish between different signals.
    *   **Used in:** Some cellular networks (e.g., 3G).

    **Example:** Imagine multiple people speaking at once in different languages. You can pick out the person speaking a language you understand. In CDMA, the unique codes are like different languages.

    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.4 (Channel Partitioning)
    **Reference:** Forouzan, 5th Ed., Chapter 4.4 (Multiple Access with Channel Partitioning)

---

### 3. Hybrid Approaches

Some protocols combine elements of the above categories for better performance.

*   **Example:** **Token Bucket:** Combines a token-passing mechanism (for regulating access) with a bucket metaphor (for smoothing bursty traffic).

---

### 4. Wi-Fi Channel Access (CSMA/CA in detail)

Wireless LANs (WLANs) use CSMA/CA due to the difficulty of collision detection in a wireless environment.

*   **Hidden Terminal Problem:** Two stations (A and C) might be able to communicate with a central access point (AP), but not with each other directly. If A and C transmit simultaneously to the AP, a collision occurs at the AP, even though A and C don't hear each other and might think the channel is free.

*   **CSMA/CA Mechanism:**
    1.  **Carrier Sense:** Station listens to the medium.
    2.  **Contention Window (CW):** If the medium is idle for a DIFS (DCF Interframe Space) period, the station generates a random backoff time within a contention window.
    3.  **Countdown:** The station counts down this random backoff time only when the medium is idle.
    4.  **Transmission:** When the backoff timer reaches zero, the station transmits.
    5.  **Acknowledgement (ACK):** The receiver (e.g., AP) sends an ACK back to the sender. If the sender receives the ACK, transmission was successful. If not, it retransmits after another random backoff.
    6.  **RTS/CTS (Optional but recommended for larger frames):** To mitigate the hidden terminal problem, stations can send a short RTS packet. If the AP is free, it responds with a CTS packet. Other stations hearing the CTS will defer their transmissions.

    **Reference:** Forouzan, 5th Ed., Chapter 4.2.4 (CSMA/CA)
    **Reference:** Kurose & Ross, 6th Ed., Chapter 5.2.2 (The 802.11 MAC Protocol: CSMA/CA)

---

### 5. Ethernet Channel Access (CSMA/CD in detail)

Ethernet, especially older versions, used CSMA/CD.

*   **Ethernet Frame Transmission:**
    1.  **Listen:** Station listens to the cable.
    2.  **Transmit:** If the cable is idle, transmit the frame.
    3.  **Collision Detection:** While transmitting, continue to listen.
    4.  **Collision:** If a collision is detected, stop transmitting, send a jamming signal, and enter the backoff procedure.
    5.  **Backoff:** The station waits a random amount of time (chosen from a "collision window") before attempting to retransmit. The window size increases with each successive collision (exponential backoff).

    **Reference:** Tanenbaum, 5th Ed., Chapter 4.1.2 (CSMA/CD)
    **Reference:** Peterson & Davie, 5th Ed., Chapter 3.2.1 (Ethernet)

---

### 6. Comparing Multiple Access Techniques

| Protocol Category     | Mechanism                                   | Advantages                                             | Disadvantages                                                                                                | Typical Use Cases                                      |
| :-------------------- | :------------------------------------------ | :----------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **Random Access**     | Contention-based, listen/transmit/backoff   | Simple to implement, flexible                          | Collisions can occur, potentially inefficient for high load, throughput can degrade significantly at high loads | Early Ethernet, Wi-Fi (CSMA/CA)                        |
| **Controlled Access** | Predetermined order, reservation, polling   | Eliminates collisions, predictable access, fair        | Overhead for coordination, less flexible, can be inefficient if many stations are idle                       | Token Ring, FDDI, some polling systems                 |
| **Channel Partitioning**| Divides channel into slots/frequencies/codes| Eliminates collisions, efficient for constant traffic | Inflexible for bursty traffic, requires synchronization, can be complex                                      | TDMA/FDMA (cellular, satellite), CDMA (cellular)     |

---

### 7. Important Points to Remember:

*   The channel allocation problem is fundamental to shared medium networks.
*   **Random Access** protocols are prevalent in Ethernet (CSMA/CD) and Wi-Fi (CSMA/CA).
*   CSMA/CA is used in wireless because collision *detection* is problematic.
*   **Token Passing** provides deterministic access and eliminates collisions, making it suitable for time-sensitive applications.
*   **Channel Partitioning** methods like TDMA and FDMA are efficient when traffic is predictable and constant.
*   The choice of protocol depends on network topology, traffic patterns, and desired performance characteristics (efficiency, fairness, latency).
*   Understanding these protocols is crucial for comprehending the operation of the Data Link Layer, especially the MAC sublayer.

---

### Practice Questions:

1.  **What is the primary challenge addressed by channel allocation protocols in computer networks?**
    *   **Answer:** The primary challenge is to manage access to a shared communication channel among multiple devices to prevent collisions and ensure efficient and fair utilization of the channel's bandwidth.

2.  **Explain the difference between CSMA/CD and CSMA/CA. Why is CSMA/CA preferred in wireless LANs?**
    *   **Answer:**
        *   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Stations listen to the channel before transmitting and also while transmitting. If a collision is detected, they stop transmitting and back off.
        *   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Stations try to avoid collisions by using mechanisms like random backoff and optionally RTS/CTS before transmitting. Collision detection is difficult in wireless.
        *   **Why CSMA/CA in Wireless:** In wireless, a station might not be able to detect a collision because it cannot hear transmissions from stations that are out of its range but are transmitting to the same access point (the hidden terminal problem). CSMA/CA uses techniques that prevent collisions rather than detecting them, making it more suitable for wireless environments.

3.  **Describe the basic principle of token passing in local area networks.**
    *   **Answer:** In token passing, a special frame called a "token" circulates around the network in a logical ring. Only the station that possesses the token is allowed to transmit data. Once a station finishes transmitting or decides not to transmit, it passes the token to the next station in the ring. This ensures that only one station transmits at a time, thus preventing collisions.

4.  **Compare and contrast Random Access protocols with Controlled Access protocols.**
    *   **Answer:**
        *   **Random Access:** Devices contend for access, potentially leading to collisions. Examples include ALOHA and CSMA/CD. They are simple and flexible.
        *   **Controlled Access:** Access is managed through predefined rules, reservations, polling, or token passing, which avoids collisions. Examples include polling and token passing. They offer predictable access but can have higher overhead or be less flexible.

5.  **Consider a network using Slotted ALOHA. What is the maximum theoretical throughput, and how does it compare to Pure ALOHA?**
    *   **Answer:** The maximum theoretical throughput of Slotted ALOHA is $1/e$ frames per slot (approximately 36.8%). This is double the maximum theoretical throughput of Pure ALOHA, which is $1/(2e)$ frames per slot (approximately 18.4%). Slotted ALOHA improves throughput by synchronizing transmissions to discrete time slots, reducing the window during which a collision can occur.

6.  **What is the "hidden terminal problem" and how does CSMA/CA (with RTS/CTS) attempt to mitigate it?**
    *   **Answer:** The hidden terminal problem occurs when two stations (A and B) are trying to communicate with a central access point (AP), but A cannot hear B, and B cannot hear A. If both A and B transmit to the AP simultaneously, collisions occur at the AP. CSMA/CA with RTS/CTS mitigates this by having station A send a short Request to Send (RTS) packet to the AP. If the AP is free, it sends a Clear to Send (CTS) packet back. Any station hearing the CTS (including B, if it's in range of the AP) knows that the AP is busy and defers its transmission, thus avoiding a collision with A.

---
