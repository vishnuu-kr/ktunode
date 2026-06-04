---
title: "Multiple access protocols – Channel partitioning, random access."
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff05a"
status: "completed"
scrapedAt: "2026-05-23T18:00:14.281Z"
---
# Computer Networks: Module 4 - Link Layer Services: Multiple Access Protocols

This module delves into the crucial role of the Link Layer in computer networks, specifically focusing on how multiple devices can share a common communication channel efficiently and fairly. We will explore various **Multiple Access Protocols (MAPs)** that govern this sharing.

---

## 1. Introduction to Multiple Access Protocols (MAPs)

**Key Concept:** In many network scenarios, especially in broadcast or shared medium networks (like Ethernet or Wi-Fi), multiple devices need to transmit data over a single, shared communication channel. Without a mechanism to coordinate access, transmissions would collide, leading to corrupted data. Multiple Access Protocols are designed to regulate this access.

**Description:** MAPs define the rules by which multiple devices on a shared network medium can transmit data without interfering with each other. They aim to achieve efficient utilization of the shared bandwidth while minimizing the probability of collisions.

**Learning Outcomes Addressed:**
*   **LO: Understand the need for multiple access protocols in shared medium networks.** (Related to CO1, CO2)
*   **LO: Classify multiple access protocols into different categories.** (Related to CO1, CO2)

**Textbook References:**
*   Kurose & Ross: Chapter 5.1 (Introduction to the Link Layer) and Chapter 5.2 (Multiple Access Protocols)
*   Forouzan: Chapter 8 (Medium Access Control Sublayer)

---

## 2. Classification of Multiple Access Protocols

MAPs can be broadly classified into three main categories:

*   **Channel Partitioning Protocols:** Divide the channel into smaller time slots, frequency bands, or codes.
*   **Random Access Protocols:** Devices transmit data without prior coordination, and collisions are handled after they occur.
*   **"Taking Turns" Protocols:** Devices take turns accessing the channel in an organized manner.

We will focus on the first two categories as per the topic description.

---

## 3. Channel Partitioning Protocols

**Key Concept:** Channel partitioning protocols divide the total available communication channel capacity among the competing devices. This guarantees a certain minimum bandwidth for each user, preventing starvation.

**Description:** These protocols allocate a portion of the channel to each station. Common methods include dividing the channel by time, frequency, or spreading codes.

**Learning Outcomes Addressed:**
*   **LO: Explain the working principles of channel partitioning protocols.** (Related to CO1, CO2)
*   **LO: Analyze the performance and limitations of channel partitioning protocols.** (Related to CO1, CO2)

**Textbook References:**
*   Kurose & Ross: Chapter 5.2.1 (Channel Partitioning Protocols)
*   Forouzan: Chapter 8.2 (Multiple Access Protocols - TDMA, FDMA, CDMA)

### 3.1 Time Division Multiple Access (TDMA)

**Key Concept:** The channel is divided into fixed-length time slots, and each station is assigned a specific time slot in a recurring cycle.

**Description:**
*   Each station gets a turn to transmit during its allocated time slot.
*   Stations transmit only during their designated slot, preventing collisions within the same time slot.
*   **Pros:** Guarantees a minimum bandwidth for each station. Relatively simple to implement.
*   **Cons:** Inefficient if a station has no data to send during its slot (wasted bandwidth). Requires precise time synchronization between stations. Not flexible for varying traffic demands.

**Example:** Imagine a group of friends taking turns to speak in a meeting. Each person gets a pre-assigned time to talk.

**Forouzan Reference (Chapter 8.2.1):** Forouzan explains TDMA as a method where the total time is divided into frames, and each frame is divided into time slots. Each station is assigned one or more time slots in each frame.

**Kurose & Ross Reference (Chapter 5.2.1):** Kurose & Ross discuss how TDMA can be considered a form of circuit switching at the link layer, where a dedicated time resource is reserved.

### 3.2 Frequency Division Multiple Access (FDMA)

**Key Concept:** The channel's total frequency band is divided into smaller, non-overlapping frequency bands (channels), and each station is assigned a specific frequency band.

**Description:**
*   Each station transmits on its assigned frequency band.
*   This separation prevents transmissions on different frequencies from interfering with each other.
*   **Pros:** Guarantees a minimum bandwidth. Relatively simple to implement.
*   **Cons:** Inefficient if a station has no data to send on its frequency (wasted bandwidth). Requires guard bands between frequencies to prevent adjacent channel interference, which reduces overall efficiency. Not flexible for varying traffic demands.

**Example:** Radio stations broadcasting on different frequencies. Each station has its own dedicated frequency range.

**Forouzan Reference (Chapter 8.2.2):** Forouzan describes FDMA as dividing the total bandwidth into narrower bands, each allocated to a station.

**Kurose & Ross Reference (Chapter 5.2.1):** Kurose & Ross also discuss FDMA as a method of dividing the spectrum, often seen in analog systems.

### 3.3 Code Division Multiple Access (CDMA)

**Key Concept:** Multiple stations transmit simultaneously on the same frequency and in the same time, but each transmission is encoded with a unique spreading code. The receiver, knowing the code, can decode its intended signal while other signals appear as background noise.

**Description:**
*   Each station is assigned a unique spreading code (e.g., a pseudo-random binary sequence).
*   Transmissions are spread across the entire frequency band.
*   Receivers use the same spreading code to recover their desired signal.
*   **Pros:** Efficient spectrum utilization. Robust against interference. Can support varying data rates.
*   **Cons:** More complex to implement than TDMA or FDMA. Requires careful selection of codes to minimize cross-talk.

**Example:** Imagine multiple conversations happening in a crowded room. If each person speaks in a different "code" or a distinct tone, you might be able to focus on one conversation while still being aware of others.

**Forouzan Reference (Chapter 8.2.3):** Forouzan provides an in-depth explanation of CDMA, focusing on how spreading codes allow multiple users to share the same channel.

**Kurose & Ross Reference (Chapter 5.2.1):** Kurose & Ross mention CDMA as another form of channel partitioning, where the partitioning is done in the code domain.

---

## 4. Random Access Protocols

**Key Concept:** In random access protocols, stations transmit whenever they have data to send, without any prior coordination. Collisions are inevitable and must be detected and handled.

**Description:** These protocols are designed for bursty traffic where stations transmit infrequently. They aim for high efficiency when the channel is lightly loaded but can suffer significant performance degradation under heavy load due to collisions.

**Learning Outcomes Addressed:**
*   **LO: Explain the working principles of random access protocols.** (Related to CO1, CO2)
*   **LO: Analyze the performance and limitations of random access protocols.** (Related to CO1, CO2)
*   **LO: Compare and contrast different random access protocols (e.g., ALOHA, CSMA, CSMA/CD, CSMA/CA).** (Related to CO1, CO2)

**Textbook References:**
*   Kurose & Ross: Chapter 5.2.2 (Random Access Protocols)
*   Forouzan: Chapter 8.3 (Multiple Access Protocols - ALOHA, CSMA, CSMA/CD, CSMA/CA)

### 4.1 ALOHA Protocols

**Key Concept:** The simplest random access protocol. Stations transmit their frames whenever they have data. If a collision occurs, the stations involved retransmit after a random backoff period.

**Description:**
*   **Pure ALOHA:** Stations transmit immediately when they have a frame. If a frame is successfully received, an acknowledgment (ACK) is sent back. If no ACK is received within a timeout, the station assumes a collision and retransmits after a random delay.
    *   **Vulnerability Window:** A frame is vulnerable to collision from the moment it starts transmitting until the moment it finishes. This means any transmission that starts within the duration of an existing frame will cause a collision.
    *   **Throughput:** Theoretical maximum throughput is 1/2e (approx. 18.4%) of the channel capacity.
*   **Slotted ALOHA:** Time is divided into discrete slots. Stations can only transmit at the beginning of a slot. If a collision occurs, stations must wait for the next slot to retransmit.
    *   **Vulnerability Window:** Reduced to the duration of a single time slot.
    *   **Throughput:** Theoretical maximum throughput is 1/e (approx. 36.8%) of the channel capacity.

**Example:** Imagine people in a room shouting out messages.
*   **Pure ALOHA:** You shout your message as soon as you think of it. If someone else shouts at the same time, you both need to wait a random amount of time before trying again.
*   **Slotted ALOHA:** The room has a timer. You can only start shouting at the beginning of a new minute. This reduces the chances of overlap compared to shouting randomly.

**Kurose & Ross Reference (Chapter 5.2.2.1):** Kurose & Ross explain the concept of ALOHA and the probabilistic nature of successful transmissions, highlighting the reduced efficiency due to collisions. They discuss the throughput limitations.

**Forouzan Reference (Chapter 8.3.1):** Forouzan provides a detailed explanation of Pure ALOHA and Slotted ALOHA, including the mathematical analysis of their throughput.

### 4.2 Carrier Sense Multiple Access (CSMA)

**Key Concept:** Stations listen to the channel (sense the carrier) before transmitting. If the channel is busy, they wait. If it's idle, they transmit.

**Description:** CSMA aims to reduce the number of collisions compared to ALOHA by sensing the channel.
*   **Listen Before Talk:** If the channel is idle, transmit. If busy, defer transmission.
*   **Collisions Still Possible:** Even with carrier sensing, a collision can occur if two stations sense the channel as idle at nearly the same time and both start transmitting. This is known as a **collision window**.

**Example:** Before speaking in a conversation, you typically listen to see if someone else is already talking.

**Forouzan Reference (Chapter 8.3.2):** Forouzan introduces CSMA as an improvement over ALOHA, emphasizing the carrier sensing mechanism.

**Kurose & Ross Reference (Chapter 5.2.2.2):** Kurose & Ross explain CSMA's basic principle of listening to the medium before transmitting, significantly reducing but not eliminating collisions.

### 4.3 CSMA with Collision Detection (CSMA/CD)

**Key Concept:** In addition to sensing the channel before transmitting, stations continue to listen to the channel *while* transmitting. If a collision is detected, the station immediately stops transmitting, aborts the frame, and enters a backoff procedure.

**Description:**
*   **Listen Before Talk:** Sense the carrier. If idle, transmit.
*   **Collision Detection:** While transmitting, listen for the signal on the channel. If the received signal is different from the transmitted signal, a collision has occurred.
*   **Abort and Backoff:** Upon collision detection, stop transmitting, discard the partially sent frame, and wait for a random period (backoff) before attempting to transmit again.
*   **Efficiency:** CSMA/CD is highly efficient under light to moderate loads. Under heavy loads, the overhead of collision detection and retransmission can reduce efficiency.
*   **Backoff Algorithm (Binary Exponential Backoff):** The range of the random backoff time doubles with each consecutive collision. This prevents stations that have just collided from immediately colliding again.
*   **Maximum Frame Size:** CSMA/CD requires a minimum frame size to ensure that the transmitter can detect a collision before it finishes transmitting the entire frame.

**Example:** Imagine you're selling something in a busy marketplace. You announce your price. If you hear someone else announce the same price simultaneously, you stop shouting and wait a bit before trying again, perhaps with a slightly different pitch or at a different time.

**Textbook References:**
*   **Kurose & Ross (Chapter 5.2.2.2):** This is the primary textbook for CSMA/CD. It details how Ethernet implements CSMA/CD, including the concept of the "collision window" and the binary exponential backoff algorithm. It highlights that modern Ethernet (switched Ethernet) largely avoids collisions.
*   **Forouzan (Chapter 8.3.3):** Forouzan also explains CSMA/CD and its role in early Ethernet implementations.

**Important Point to Remember:** CSMA/CD was the basis for classic Ethernet (shared Ethernet). In modern switched Ethernet, collisions are virtually eliminated because each port on the switch provides a dedicated collision domain.

### 4.4 CSMA with Collision Avoidance (CSMA/CA)

**Key Concept:** Instead of detecting collisions after they occur, CSMA/CA aims to *avoid* them altogether. This is particularly useful in wireless networks where collision detection is difficult (e.g., the "hidden terminal" problem).

**Description:**
*   **No Collision Detection:** Wireless devices cannot reliably detect collisions while transmitting due to the nature of radio waves and the inability to listen and transmit simultaneously on the same frequency.
*   **Carrier Sensing:** Like CSMA, stations listen to the channel.
*   **Request to Send (RTS) and Clear to Send (CTS):** Many CSMA/CA implementations use a handshake mechanism.
    1.  A station wanting to transmit sends a short **RTS** frame.
    2.  The access point (or receiver) replies with a **CTS** frame if the channel is free.
    3.  The CTS frame signals to all other stations within range that the channel is busy for a specific duration.
    4.  Only after receiving CTS does the transmitting station send its data frame.
*   **Random Backoff:** Even if the channel appears idle, stations use a random backoff period before transmitting to further reduce the probability of collision.
*   **Interframe Spaces (IFS):** Time gaps are introduced between transmissions to allow stations to sense the channel and handle the backoff process.

**Example:** Before starting a conversation, you might ask, "Is anyone talking?" and wait for a "No, go ahead" response. This prevents interrupting someone who is already speaking.

**Textbook References:**
*   **Kurose & Ross (Chapter 5.2.2.2):** Kurose & Ross discuss CSMA/CA in the context of wireless LANs (like Wi-Fi) and explain the challenges of collision detection in this medium. They mention RTS/CTS as a solution.
*   **Forouzan (Chapter 8.3.4):** Forouzan details the CSMA/CA mechanism, including the use of RTS/CTS and the importance of interframe spaces in wireless environments.

**Important Point to Remember:** CSMA/CA is the primary MAC protocol used in Wi-Fi (IEEE 802.11 standards).

---

## 5. Practice Questions and Answers

Here are some questions to test your understanding of multiple access protocols:

**Question 1:** Which type of multiple access protocol divides the communication channel into fixed time slots?
    a) FDMA
    b) TDMA
    c) CDMA
    d) CSMA/CD

**Answer:** b) TDMA

**Explanation:** TDMA (Time Division Multiple Access) divides the channel into distinct time slots.

---

**Question 2:** In which protocol can stations transmit simultaneously on the same frequency using unique codes?
    a) CSMA
    b) Slotted ALOHA
    c) CDMA
    d) Pure ALOHA

**Answer:** c) CDMA

**Explanation:** CDMA (Code Division Multiple Access) allows multiple users to share the same frequency band by assigning unique codes to each transmission.

---

**Question 3:** What is the primary advantage of CSMA/CD over CSMA?
    a) It completely eliminates collisions.
    b) It stops transmitting and backs off immediately upon detecting a collision.
    c) It requires a longer backoff period.
    d) It uses RTS/CTS handshaking.

**Answer:** b) It stops transmitting and backs off immediately upon detecting a collision.

**Explanation:** CSMA/CD adds the ability to *detect* collisions while transmitting and react by aborting the frame and backing off, which CSMA alone does not do. While it reduces collisions, it doesn't completely eliminate them.

---

**Question 4:** Why is CSMA/CA preferred over CSMA/CD in wireless networks like Wi-Fi?
    a) Wireless devices can easily detect collisions while transmitting.
    b) CSMA/CA uses a simpler backoff algorithm.
    c) It is difficult for wireless devices to detect collisions during transmission.
    d) CSMA/CA guarantees no collisions will ever occur.

**Answer:** c) It is difficult for wireless devices to detect collisions during transmission.

**Explanation:** The physical nature of radio waves and the half-duplex nature of most wireless devices make it impractical to reliably detect collisions while a device is transmitting. CSMA/CA uses methods like RTS/CTS and avoidance strategies to minimize collisions.

---

**Question 5:** Explain the "vulnerability window" in Pure ALOHA and how Slotted ALOHA improves upon it.

**Answer:**
The **vulnerability window** in Pure ALOHA is the entire duration of a frame. Any transmission that *starts* within this time window, even if it overlaps only slightly with an existing frame, will cause a collision.

**Slotted ALOHA** improves this by dividing time into discrete slots. Stations can only transmit at the beginning of a slot. This reduces the vulnerability window to the duration of a single time slot. If a collision occurs within a slot, the involved stations must wait for the next slot to attempt retransmission. This effectively halves the probability of collision for any given transmission compared to Pure ALOHA, leading to a higher maximum throughput (1/e vs. 1/2e).

---

**Question 6:** Describe the purpose of the "Clear to Send" (CTS) frame in CSMA/CA.

**Answer:**
The **Clear to Send (CTS)** frame is part of the RTS/CTS handshake in CSMA/CA. When a station wants to transmit and sends an RTS frame, the access point (or receiver) that hears the RTS and is ready to receive will respond with a CTS frame. The CTS frame serves as an announcement to all other stations within range of the access point that the medium will be busy for a specific duration (the time needed to transmit the data frame and potentially an acknowledgment). This helps prevent other stations from initiating transmissions during that period, thus avoiding potential collisions.

---

## 6. Key Points to Remember

*   **Shared Medium:** Multiple access protocols are essential for managing access to shared communication channels.
*   **Channel Partitioning:** Guarantees bandwidth but can be inefficient if a station has no data. Examples: TDMA, FDMA, CDMA.
*   **Random Access:** Efficient for bursty traffic but susceptible to collisions and performance degradation under heavy load. Examples: ALOHA, CSMA, CSMA/CD, CSMA/CA.
*   **ALOHA:** Basic random access. Pure ALOHA is inefficient due to its large vulnerability window. Slotted ALOHA improves efficiency by synchronizing transmissions to time slots.
*   **CSMA:** Listens before transmitting to reduce collisions.
*   **CSMA/CD:** Listens before and *during* transmission. Detects and aborts on collision, followed by backoff. Used in classic Ethernet.
*   **CSMA/CA:** Used in wireless (Wi-Fi). Avoids collisions by sensing the medium and often using RTS/CTS handshaking and backoff before transmission, as collision detection is difficult wirelessly.
*   **Throughput:** The efficiency of these protocols is often measured by their maximum achievable throughput (the fraction of channel capacity used for successful data transmission).

---

## 7. Alignment with Course Outcomes

*   **CO1 (Summarize principles and components):** This module explains the fundamental principles of shared medium access and the components (protocols) that enable it.
*   **CO2 (Demonstrate protocols and functions):** We've detailed the working mechanisms, advantages, and disadvantages of various link layer multiple access protocols.
*   **CO3 (Analyze routing and addressing):** While not directly about routing/addressing, understanding link layer access is foundational for how devices communicate within a local network segment before routing occurs.
*   **CO4 (Make use of physical communication standards):** Understanding MAPs is crucial for understanding how standards like Ethernet (CSMA/CD historically) and Wi-Fi (CSMA/CA) operate at the physical and data link layers.

---

This comprehensive set of notes covers the core concepts of multiple access protocols, essential for understanding how devices share communication channels in computer networks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
