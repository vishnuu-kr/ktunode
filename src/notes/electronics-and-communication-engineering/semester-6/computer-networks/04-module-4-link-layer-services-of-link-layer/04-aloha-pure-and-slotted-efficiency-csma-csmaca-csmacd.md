---
title: "ALOHA – pure and slotted, efficiency, CSMA, CSMA/CA, CSMA/CD."
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff05b"
status: "completed"
scrapedAt: "2026-05-23T18:00:15.006Z"
---
# Computer Networks - Module 4: Link Layer Services

This module delves into the vital services provided by the Link Layer of the networking architecture. We will explore how the link layer manages access to the shared communication medium, ensuring efficient and reliable data transfer between adjacent nodes.

---

## 1. Introduction to Link Layer Services

The Link Layer (also known as the Data Link Layer or Layer 2) is responsible for the **node-to-node delivery** of data frames. It sits between the Network Layer (Layer 3) and the Physical Layer (Layer 1).

**Key Responsibilities of the Link Layer:**

*   **Framing:** Encapsulating Network Layer packets into **frames** with header and trailer information.
*   **Physical Addressing:** Using **MAC addresses** (Media Access Control addresses) for addressing within the local network segment.
*   **Error Detection and Correction:** Detecting and sometimes correcting errors introduced during transmission over the physical medium.
*   **Flow Control:** Managing the transmission rate of data to prevent a fast sender from overwhelming a slow receiver.
*   **Medium Access Control (MAC):** Determining which node gets to transmit on a shared communication channel. This is the primary focus of this module.

**Kurose & Ross (6th Ed., Chapter 5):** This chapter provides a foundational understanding of the link layer, including framing, error control, and flow control. It also introduces the concept of multiple access protocols, which we will explore in detail.

**Forouzan (4th Ed., Chapter 4):** Forouzan also covers the data link layer, emphasizing its role in framing, error control, and flow control, along with an introduction to multiple access techniques.

---

## 2. Multiple Access Protocols: Sharing the Medium

In many networks, especially those using shared broadcast media like Ethernet or Wi-Fi, multiple devices need to share a single communication channel. **Multiple Access Protocols** are rules that govern how these devices can access the shared medium to transmit their data. Without these protocols, collisions would occur, leading to data loss and network inefficiency.

**CO1 (K2): Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.**
*   Understanding multiple access protocols is crucial for grasping how the link layer facilitates communication within a network segment. It explains a key component of network architecture and the principles of sharing resources.

**CO2 (K2): Demonstrate protocols and the functions of different layers.**
*   This section directly addresses protocols and their functions at the link layer.

---

### 2.1 ALOHA Protocols

ALOHA is one of the earliest and simplest multiple access protocols. It operates on a **purely random access** basis, where a station transmits whenever it has data to send.

#### 2.1.1 Pure ALOHA

**Concept:**
In Pure ALOHA, a station transmits its frame whenever it has one ready. There are no time slots, and no prior coordination is required. If multiple stations transmit simultaneously, a **collision** occurs, and the frames are corrupted.

**Operation:**
1.  A station transmits its frame.
2.  If the station doesn't receive an acknowledgment (ACK) within a certain timeout period, it assumes a collision occurred and retransmits the frame after a random backoff period.

**Drawbacks:**
*   **Inefficiency:** Frames are vulnerable to collision during their entire transmission time, and for a duration called the **vulnerable period** after transmission begins. This leads to frequent retransmissions and low throughput.

**Kurose & Ross (6th Ed., Section 5.2.1):** Describes Pure ALOHA and its theoretical throughput, highlighting its limitations.

**Forouzan (4th Ed., Section 4.3.1):** Explains the working of Pure ALOHA and the problem of collisions.

#### 2.1.2 Slotted ALOHA

**Concept:**
Slotted ALOHA improves upon Pure ALOHA by dividing time into **discrete time slots**. All stations agree on the slot size. A station can only transmit at the beginning of a slot.

**Operation:**
1.  Time is divided into fixed-size slots.
2.  A station wanting to transmit must wait for the beginning of the next slot.
3.  If two or more stations transmit in the same slot, a collision occurs, and frames are corrupted.
4.  Upon collision detection (no ACK), stations wait for a random number of slots before attempting to retransmit.

**Improvement over Pure ALOHA:**
By restricting transmissions to the start of slots, the **vulnerable period** is reduced to a single slot. This significantly improves the efficiency compared to Pure ALOHA.

**Efficiency (Throughput):**
Let $G$ be the **average number of frames generated per time slot**.
*   **Pure ALOHA:** The theoretical maximum throughput is $S_{max} = \frac{1}{2e} \approx 0.184$ (or 18.4%). This occurs when $G = 0.5$.
*   **Slotted ALOHA:** The theoretical maximum throughput is $S_{max} = \frac{1}{e} \approx 0.368$ (or 36.8%). This occurs when $G = 1$.

**Why is Slotted ALOHA twice as efficient?**
In Pure ALOHA, a frame is vulnerable for twice the frame transmission time (from the moment it starts to the moment it finishes). In Slotted ALOHA, a frame is vulnerable only for the duration of a single time slot because all transmissions must start at the beginning of a slot.

**Example:**
Imagine 3 stations (A, B, C) generating frames.
*   **Pure ALOHA:** If A starts transmitting at time $t$, B starts at $t+0.1$ frame\_time, and C starts at $t+0.2$ frame\_time. All three frames might collide.
*   **Slotted ALOHA:** If slot size is 1ms. A, B, and C generate frames within a slot. If they all transmit at the start of the same slot, a collision occurs. If A transmits in slot 1, B in slot 2, and C in slot 3, there are no collisions.

**Kurose & Ross (6th Ed., Section 5.2.1):** Derives the throughput for ALOHA protocols.
**Forouzan (4th Ed., Section 4.3.2):** Explains Slotted ALOHA and its performance.

**Important Points to Remember:**
*   ALOHA is a **random access** protocol.
*   Collisions are the primary challenge.
*   Slotted ALOHA is more efficient due to synchronized access.
*   The throughput is measured as the proportion of the channel capacity used for successful transmissions.

---

### 2.2 Carrier Sense Multiple Access (CSMA)

CSMA protocols aim to reduce collisions by having stations **listen** to the channel before transmitting. If the channel is busy, the station waits.

**Concept:**
"Listen before you talk." A station that wants to transmit first **listens** to the channel to determine if another station is currently transmitting.

**Operation:**
1.  **Listen:** A station listens to the channel.
2.  **Transmit:**
    *   If the channel is idle, the station transmits its frame immediately.
    *   If the channel is busy, the station waits until the channel becomes idle.

**Challenge:**
Even with carrier sensing, collisions can still occur due to **propagation delay**. If two stations, far apart, both sense the channel as idle and begin transmitting simultaneously, their frames will collide. The time between sensing the channel and the signal reaching another station is the propagation delay.

**Kurose & Ross (6th Ed., Section 5.2.2):** Introduces the concept of Carrier Sense Multiple Access.
**Forouzan (4th Ed., Section 4.3.3):** Explains CSMA and the problem of hidden nodes.

---

### 2.3 CSMA/Collision Detection (CSMA/CD)

CSMA/CD is an enhancement to CSMA that allows stations to **detect collisions while transmitting** and stop transmission immediately, thus saving bandwidth. This was the fundamental protocol used in classic Ethernet.

**Concept:**
"Listen while you talk." Stations not only listen before transmitting but also **listen while transmitting** for any signs of a collision.

**Operation:**
1.  **Listen:** A station listens to the channel.
2.  **Transmit:**
    *   If the channel is idle, the station transmits its frame.
    *   If the channel is busy, the station waits until it becomes idle and then transmits.
3.  **Detect Collision:** While transmitting, the station monitors the channel. If it detects that its signal is different from what it's sending (indicating another station is also transmitting, causing a collision), it stops transmitting.
4.  **Backoff:** Upon detecting a collision, the station sends a **jam signal** to ensure all other stations are aware of the collision. Then, it waits for a **random backoff interval** before attempting to retransmit. The backoff interval is typically determined by a **binary exponential backoff** algorithm.

**Binary Exponential Backoff:**
*   The range of the random backoff interval doubles with each successive collision for the same frame.
*   For the $k^{th}$ retransmission attempt (after $k-1$ collisions), the station chooses a random integer $m$ from $[0, 2^k-1]$ and waits for $m \times \text{SlotTime}$.
*   After a certain number of retransmission attempts (e.g., 10 or 16), the backoff range stops increasing.

**Advantages:**
*   **Efficient:** Quickly detects and recovers from collisions, saving bandwidth.
*   **Adaptable:** The backoff mechanism helps to avoid repeated collisions.

**Example:**
Two stations, A and B, are far apart.
1.  A senses the channel, finds it idle, and starts transmitting a frame.
2.  Simultaneously, B senses the channel, finds it idle, and starts transmitting its frame.
3.  Both A and B transmit for a short period until their signals meet on the wire.
4.  A detects a collision (its transmitted signal is no longer the dominant signal). A stops transmitting and sends a jam signal.
5.  B also detects a collision, stops transmitting, and sends a jam signal.
6.  Both A and B then engage in their respective random backoff procedures before attempting to retransmit.

**Kurose & Ross (6th Ed., Section 5.2.2):** Provides a detailed explanation of CSMA/CD, including the backoff algorithm.
**Forouzan (4th Ed., Section 4.3.4):** Discusses CSMA/CD and its implementation in Ethernet.

**Important Points to Remember:**
*   CSMA/CD is a **deterministic** access method (within the context of the random backoff).
*   Collision detection is key to its efficiency.
*   The "slot time" is a crucial parameter in the backoff algorithm, typically related to the round-trip propagation delay.
*   CSMA/CD is typically used in **half-duplex** shared media.

**CO3 (K3): Analyse the concept of routing and addressing protocols in the context of computer networking.**
*   While CSMA/CD is a link-layer protocol, understanding it helps in appreciating the lower layers that support network-layer routing. It shows how local network access is managed, which is a prerequisite for packets to reach their destination where routing is performed.

---

### 2.4 CSMA with Collision Avoidance (CSMA/CA)

CSMA/CA is designed for networks where **collisions are difficult or impossible to detect** during transmission. This is common in wireless networks (like Wi-Fi) where the medium is shared by radio waves, and it's hard for a station to distinguish its own transmitted signal from interference or other transmissions.

**Concept:**
"Listen before you talk and try to avoid talking if it's busy." Stations try to **avoid** collisions by using mechanisms like Carrier Sensing and **waiting for an acknowledgement (ACK)**.

**Why CA?**
In wireless networks:
*   **Hidden Node Problem:** A station (A) might be transmitting to a receiver (R), but another station (B) might be out of A's range but within R's range. If B transmits to R, a collision occurs at R, but A cannot detect it.
*   **Collision Detection is Difficult:** A station transmitting wirelessly cannot easily listen to its own transmitted signal to detect collisions.

**Operation (Simplified - IEEE 802.11 Wi-Fi):**
1.  **Carrier Sensing:** Stations sense the medium. If busy, they wait.
2.  **Random Backoff:** If the medium is sensed idle, stations still enter a random backoff period (similar to CSMA/CD, but for avoidance, not detection). This helps to spread out transmissions from multiple stations that might have sensed the medium idle simultaneously.
3.  **Transmit (or RTS/CTS):**
    *   If the backoff timer expires and the channel is still idle, the station transmits its data frame.
    *   Alternatively, and more importantly for collision avoidance, stations can use a **Request-to-Send (RTS)** and **Clear-to-Send (CTS)** mechanism.
        *   **RTS:** A station sends a short RTS packet to the receiver.
        *   **CTS:** The receiver replies with a CTS packet.
        *   By overhearing RTS or CTS, other stations in the vicinity know that a transmission is about to occur and keep quiet. This effectively solves the hidden node problem.
4.  **Acknowledgement (ACK):** After receiving a data frame, the receiver sends an ACK back to the sender. If the sender doesn't receive an ACK within a timeout, it assumes a collision occurred and retransmits after another backoff.

**Interframe Spaces (IFS):**
CSMA/CA also uses various "interframe spaces" (SIFS, DIFS, EIFS) to manage medium access. For example, DIFS is the minimum idle time a station must sense before it can transmit.

**Kurose & Ross (6th Ed., Section 5.2.3):** Explains CSMA/CA, focusing on the hidden node problem and the RTS/CTS mechanism.
**Forouzan (4th Ed., Section 4.3.5):** Discusses CSMA/CA, particularly in the context of wireless networks.

**Important Points to Remember:**
*   CSMA/CA is used in environments where collision detection is **not feasible**, primarily wireless networks.
*   It focuses on **avoiding** collisions rather than detecting them.
*   Key mechanisms include Carrier Sensing, random backoff, and the RTS/CTS handshake.
*   It's the protocol used in Wi-Fi (IEEE 802.11).

**CO4 (K3): Make use of different physical communication standards in computer networks.**
*   Understanding CSMA/CA directly relates to physical communication standards like Wi-Fi (IEEE 802.11). These standards define how devices access the physical wireless medium.

---

## 3. Practice Questions and Answers

**Question 1:**
Which of the following MAC protocols uses a random backoff mechanism after detecting a collision?
a) Pure ALOHA
b) Slotted ALOHA
c) CSMA/CD
d) CSMA/CA

**Answer:** c) CSMA/CD
*   **Explanation:** CSMA/CD detects collisions and uses a random backoff (specifically, binary exponential backoff) to retransmit. Pure and Slotted ALOHA also use backoff, but CSMA/CD's defining feature is detecting *while transmitting*. CSMA/CA uses backoff for *avoidance*.

**Question 2:**
In Slotted ALOHA, what is the maximum theoretical throughput?
a) 18.4%
b) 36.8%
c) 50%
d) 100%

**Answer:** b) 36.8%
*   **Explanation:** The maximum theoretical throughput for Slotted ALOHA is $1/e \approx 0.368$. Pure ALOHA's maximum is $1/(2e) \approx 0.184$.

**Question 3:**
The hidden node problem is a significant issue addressed by which MAC protocol?
a) CSMA/CD
b) CSMA/CA
c) Slotted ALOHA
d) Pure ALOHA

**Answer:** b) CSMA/CA
*   **Explanation:** The hidden node problem occurs in wireless networks where stations cannot hear each other, but can collide at the receiver. CSMA/CA, with its RTS/CTS mechanism, is designed to mitigate this. CSMA/CD is used in wired networks where collisions are generally detectable.

**Question 4:**
Explain the difference between CSMA/CD and CSMA/CA in terms of when and why they detect/avoid collisions.

**Answer:**
*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Used primarily in wired networks (like Ethernet). Stations **listen** to the channel before transmitting. While transmitting, they continue to **listen** for a collision. If a collision is detected, they stop transmitting, send a jam signal, and then wait for a random backoff period before retransmitting. It assumes collisions are detectable.
*   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Used primarily in wireless networks (like Wi-Fi) where collision detection is difficult or impossible. Stations **listen** before transmitting and use a random backoff period even if the channel appears idle. Crucially, they employ mechanisms like RTS/CTS (Request-to-Send/Clear-to-Send) to inform other stations about an upcoming transmission, effectively **avoiding** collisions rather than detecting them. They rely on acknowledgements (ACK) to confirm successful transmission.

**Question 5:**
Consider a scenario with 10 stations sharing a channel with a bit rate of 1 Mbps. If each frame is 1000 bits long, and the propagation delay is negligible.

(a) What is the maximum throughput for Pure ALOHA if $G = 0.5$?
(b) What is the maximum throughput for Slotted ALOHA if $G = 1$?
(c) If a station generates a frame every 10 seconds, how many frames are generated per second? What is this as a percentage of channel capacity?

**Answer:**

(a) Maximum throughput for Pure ALOHA is $S_{max} = \frac{1}{2e} \approx 0.184$. So, at $G=0.5$, the throughput is approximately 18.4%.
(b) Maximum throughput for Slotted ALOHA is $S_{max} = \frac{1}{e} \approx 0.368$. So, at $G=1$, the throughput is approximately 36.8%.
(c) A station generates 1 frame / 10 seconds = 0.1 frames/second.
    The channel capacity is 1 Mbps = 1,000,000 bits/second.
    Each frame is 1000 bits.
    Data rate for one station = 0.1 frames/sec * 1000 bits/frame = 100 bits/sec.
    Percentage of channel capacity used by one station = (100 bits/sec / 1,000,000 bits/sec) * 100% = 0.01%.
    *(Note: This calculation assumes a single station. For multiple stations, the total traffic would be higher. The question likely implies understanding the calculation for one station as an example).*

---

## 4. Important Points to Remember

*   **Medium Access Control (MAC)** is crucial for managing shared communication channels.
*   **ALOHA** is a random access technique. **Pure ALOHA** is inefficient due to its long vulnerable period. **Slotted ALOHA** improves efficiency by synchronizing transmissions to slot boundaries.
*   **CSMA** protocols introduce carrier sensing to reduce collisions.
*   **CSMA/CD** detects collisions *during* transmission and uses random backoff for retransmission. It's suitable for half-duplex wired networks.
*   **CSMA/CA** avoids collisions, primarily in wireless networks, by using mechanisms like RTS/CTS and relying on acknowledgements. It cannot detect collisions effectively.
*   The **hidden node problem** is a key motivation for CSMA/CA.
*   **Throughput** is a measure of the proportion of channel capacity effectively used for data transmission.

---

## 5. Alignment with Course Outcomes

*   **CO1 (K2): Summarize the principles and components of computer networks...**
    *   This module explains the principle of medium access control, a key component of link-layer services. It demonstrates how the link layer facilitates efficient sharing of network resources.
*   **CO2 (K2): Demonstrate protocols and the functions of different layers.**
    *   This module directly covers various link-layer protocols (ALOHA, CSMA/CD, CSMA/CA) and explains their functions in managing medium access.
*   **CO3 (K3): Analyse the concept of routing and addressing protocols...**
    *   While this module focuses on link-layer MAC, understanding these protocols is foundational to appreciating how packets are delivered locally, enabling the broader network-layer routing to occur. It shows the context for MAC addressing.
*   **CO4 (K3): Make use of different physical communication standards in computer networks.**
    *   The discussion on CSMA/CA is directly applicable to wireless communication standards like Wi-Fi (IEEE 802.11), illustrating how physical medium access is standardized.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
