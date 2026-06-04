---
title: "Medium Access Control- Random Access"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92c"
status: "completed"
scrapedAt: "2026-05-20T17:02:42.821Z"
---
# Computer Networks: Module 2 - Data Link Layer

## Topic: Medium Access Control (MAC) - Random Access

### 1. Introduction to Medium Access Control (MAC)

*   **Purpose:** To regulate how devices on a shared communication medium (like an Ethernet cable or wireless spectrum) access and transmit data without causing conflicts or collisions.
*   **Shared Medium:** A single transmission path used by multiple devices. This creates the need for a MAC protocol to avoid simultaneous transmissions that corrupt data.
*   **MAC Protocol:** A set of rules that govern how devices share a common communication channel.
*   **Two Main Categories of MAC Protocols:**
    *   **Random Access Protocols:** Devices transmit whenever they have data, relying on chance and some error recovery mechanisms to handle collisions.
    *   **Controlled Access Protocols:** Devices take turns accessing the medium in a structured manner (e.g., token passing, polling).

### 2. Random Access Protocols: The Core Idea

*   **"Transmit and Hope":** In pure random access, a device transmits its frame as soon as it has one. There's no pre-negotiation or reservation of the channel.
*   **Collision:** When two or more devices transmit simultaneously, their signals interfere, corrupting the data.
*   **Collision Detection and Recovery:** Random access protocols must have mechanisms to detect collisions and then recover from them, typically by retransmitting the corrupted frames.

### 3. ALOHA Protocols

ALOHA is the simplest form of random access and forms the basis for more complex protocols.

#### 3.1 Pure ALOHA

*   **Concept:** A station transmits its frame whenever it has data to send.
*   **Collision Scenario:** If two or more stations transmit frames at the same time, a collision occurs.
*   **No Collision Detection:** Stations do not detect collisions while transmitting. They only realize a collision happened after the transmission is complete, typically when they don't receive an acknowledgment (ACK).
*   **Retransmission:** If a station's frame is lost due to a collision, it waits for a random amount of time (backoff period) and then retransmits.
*   **Vulnerability Window:** The period during which a frame transmission can collide with another frame. For Pure ALOHA, this window is the duration of the frame itself.
    *   If station A starts transmitting at time $t_0$, its frame will be vulnerable to collisions from any station transmitting between $t_0$ and $t_0 + L/R$, where $L$ is the frame length and $R$ is the transmission rate.
*   **Throughput:** The rate at which successful frames are transmitted. Pure ALOHA has a low theoretical maximum throughput of approximately $1/(2e)$ or about 18.4% of the channel capacity.
*   **Example:** Imagine a group of students in a classroom wanting to ask a question. Anyone can shout their question as soon as they think of it. If two students shout at the same time, their questions get mixed up. They have to wait a random amount of time and then try again.

#### 3.2 Slotted ALOHA

*   **Concept:** The time axis is divided into discrete slots of fixed duration (equal to the frame transmission time).
*   **Synchronization:** All stations must be synchronized to these time slots.
*   **Transmission Rule:** A station can only transmit at the beginning of a slot. If a station has data, it waits for the next slot to begin and transmits.
*   **Collision Scenario:** Collisions still occur if two or more stations transmit in the *same* slot.
*   **Improved Efficiency:** By restricting transmissions to slot beginnings, the vulnerability window is reduced from the full frame duration to just one slot duration. This significantly reduces the probability of collisions.
*   **Throughput:** Slotted ALOHA has a higher theoretical maximum throughput of approximately $1/e$ or about 36.8% of the channel capacity.
*   **Example:** Continuing the classroom analogy, now students can only ask questions at the start of each minute. If two students ask a question at the start of the same minute, their questions still get mixed up. However, the chances of two students deciding to ask at the *exact* same time are lower than in Pure ALOHA because they have to wait for the next minute.

### 4. Carrier Sense Multiple Access (CSMA) Protocols

CSMA protocols introduce the concept of "listening before talking" to further reduce collisions.

*   **Carrier Sense:** Before transmitting, a station "listens" to the medium to detect if another station is currently transmitting.
*   **Transmission Rule:**
    1.  **Listen:** Sense the medium.
    2.  **If Idle:** Transmit the frame.
    3.  **If Busy:** Wait for the medium to become idle.
*   **Collision Still Possible:** Even with carrier sensing, collisions can occur due to propagation delay. If two stations listen to an idle medium and decide to transmit simultaneously, their frames might collide before either station can detect the other's transmission.

#### 4.1 CSMA/CD (Carrier Sense Multiple Access with Collision Detection)

*   **Concept:** Combines carrier sensing with the ability to *detect* collisions while transmitting.
*   **Collision Detection:** During transmission, a station continuously monitors the medium. If it detects a signal different from its own transmitted signal, it knows a collision has occurred.
*   **Actions on Collision:**
    1.  **Stop Transmitting:** The station immediately stops transmitting.
    2.  **Jam Signal:** It sends a brief "jam" signal to ensure that all other stations on the network are aware of the collision.
    3.  **Backoff:** The station waits for a random amount of time (using a binary exponential backoff algorithm) before attempting to retransmit.
*   **Efficiency:** CSMA/CD is highly efficient for low to moderate network loads but can degrade significantly under heavy load due to frequent collisions and retransmissions.
*   **Where Used:** Primarily used in **Ethernet** (IEEE 802.3) wired networks.
*   **Key Aspects of CSMA/CD:**
    *   **Propagation Delay:** The maximum time it takes for a signal to travel from one end of the network segment to the other. This delay is critical in determining the minimum frame size for effective collision detection.
    *   **Frame Size Limit:** The minimum frame size in Ethernet (64 bytes) is designed to ensure that a collision is detected before the frame transmission finishes, allowing for the jam signal to be sent.
    *   **Binary Exponential Backoff:** A random backoff algorithm where the waiting time doubles for each successive collision. This helps to space out retransmissions and reduce the probability of repeated collisions. The waiting time is typically a random multiple of the slot time.
*   **Example:** Imagine the classroom again. Before asking a question, you listen to see if anyone else is speaking. If it's quiet, you start asking. While you are asking, if you hear someone else speaking at the same time, you stop talking immediately, maybe yell "Wait!" (the jam signal), and then wait a random amount of time before trying to ask again.

#### 4.2 CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)

*   **Concept:** Designed for wireless networks where collision detection is difficult or impossible (due to the "hidden node" problem and signal attenuation). Instead of detecting collisions, it tries to *avoid* them.
*   **Hidden Node Problem:** Two nodes (A and C) can communicate with a central access point (B), but they cannot hear each other directly. If A and C transmit simultaneously, a collision occurs at B, but neither A nor C can detect it.
*   **Transmission Rule (Simplified):**
    1.  **Listen:** Sense the medium.
    2.  **If Busy:** Wait for the medium to become idle.
    3.  **If Idle:** Wait for a small, random amount of time (Interframe Space - IFS) before transmitting.
    4.  **Contention Window (CW):** If the medium remains idle, the station transmits. If a collision is suspected (no ACK received), the station enters a backoff period using a contention window, which grows exponentially with repeated failures.
*   **Use of RTS/CTS (Request to Send/Clear to Send):**
    *   To further reduce collisions, especially for larger frames, stations can use an optional RTS/CTS handshake.
    *   **RTS:** The sender transmits a short RTS frame to the receiver.
    *   **CTS:** The receiver replies with a CTS frame.
    *   **Network Allocation Vector (NAV):** When stations hear RTS or CTS, they set a NAV timer, indicating that the medium will be busy for a specific duration. This effectively mutes other stations that might otherwise cause a collision.
*   **Where Used:** Primarily used in **Wi-Fi** (IEEE 802.11) wireless networks.
*   **Example:** Imagine two people (A and C) talking to a translator (B) in different rooms. A and C cannot hear each other. Before A speaks, A might send a quick "Ready to talk?" message to B. If B hears it and is ready, B sends back a "Go ahead" message. This "Go ahead" message is heard by C (even if C is about to speak), signaling C that the translator is busy and C should wait.

### 5. Summary of Random Access Protocols

| Protocol          | Key Feature                                                              | Collision Handling                                     | Application(s)                               | Efficiency                                            |
| :---------------- | :----------------------------------------------------------------------- | :----------------------------------------------------- | :------------------------------------------- | :---------------------------------------------------- |
| **Pure ALOHA**    | Transmit anytime.                                                        | No detection, random retransmission after failure.     | Early satellite networks.                    | Low (max ~18.4%)                                      |
| **Slotted ALOHA** | Transmit only at slot beginning.                                         | No detection, random retransmission after failure.     | Satellite networks, early wireless systems.  | Improved over Pure ALOHA (max ~36.8%)                 |
| **CSMA**          | Listen before transmitting.                                              | Potential collision due to propagation delay.          | Basis for CSMA/CD & CSMA/CA.                 | Better than pure ALOHA.                               |
| **CSMA/CD**       | Listen before transmitting, detect collision during transmission.          | Detects collision, sends jam signal, uses backoff.     | Wired Ethernet (IEEE 802.3).                 | High for low load, degrades with high load.           |
| **CSMA/CA**       | Listen before transmitting, try to avoid collisions (no detection).      | Uses backoff, RTS/CTS handshake, NAV timers.           | Wireless LANs (Wi-Fi, IEEE 802.11).          | Designed for wireless, good under moderate load.      |

### 6. Key Concepts and Definitions Recap

*   **MAC Protocol:** Rules for accessing a shared medium.
*   **Collision:** Simultaneous transmission corrupting data.
*   **Vulnerability Window:** Period during which a frame can collide.
*   **Carrier Sense:** Listening to the medium before transmitting.
*   **Collision Detection (CD):** Ability to detect collisions *during* transmission.
*   **Collision Avoidance (CA):** Mechanisms to *prevent* collisions.
*   **Backoff:** Random waiting period after a collision before retransmission.
*   **Binary Exponential Backoff:** Backoff time doubles with each consecutive collision.
*   **Hidden Node Problem:** Nodes that can communicate with an AP but not with each other, leading to collisions at the AP.
*   **RTS/CTS:** Handshake to reserve the medium and avoid collisions in wireless.
*   **Network Allocation Vector (NAV):** A timer used in wireless to indicate medium busy status.
*   **Interframe Space (IFS):** Short idle periods between frames in wireless.

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of Medium Access Control (MAC) protocols?

**Answer:**
The primary purpose of MAC protocols is to regulate how multiple devices sharing a common communication medium can access and transmit data without causing conflicts or collisions.

**Question 2:**
Explain the difference between Pure ALOHA and Slotted ALOHA in terms of their transmission timing and efficiency.

**Answer:**
In Pure ALOHA, stations can transmit anytime, leading to a larger vulnerability window (frame duration). In Slotted ALOHA, transmissions are restricted to the beginning of fixed-size time slots, reducing the vulnerability window to a single slot duration. This makes Slotted ALOHA more efficient, with a higher theoretical maximum throughput (36.8% vs. 18.4%).

**Question 3:**
What is the fundamental principle behind CSMA/CD, and where is it commonly used?

**Answer:**
CSMA/CD's fundamental principle is to "listen before talking" (Carrier Sense) and to detect collisions *while* transmitting (Collision Detection). If a collision is detected, the station stops transmitting, sends a jam signal, and then backs off before retransmission. It is commonly used in wired Ethernet networks (IEEE 802.3).

**Question 4:**
Why is CSMA/CA preferred over CSMA/CD in wireless networks like Wi-Fi?

**Answer:**
CSMA/CA is preferred in wireless networks because collision detection is difficult due to factors like the hidden node problem and signal attenuation. CSMA/CA aims to *avoid* collisions by using techniques like waiting periods (IFS), backoff, and the RTS/CTS handshake, rather than relying on detecting them after they occur.

**Question 5:**
Describe the "hidden node problem" and how CSMA/CA attempts to mitigate it.

**Answer:**
The hidden node problem occurs when two nodes (A and C) can communicate with a central access point (B) but cannot hear each other directly. If both A and C transmit to B simultaneously, a collision occurs at B, but neither A nor C can detect it. CSMA/CA attempts to mitigate this using the RTS/CTS handshake. When node A sends an RTS to B, and B replies with CTS, nearby nodes (like C) that overhear the CTS frame will defer their transmission by setting a Network Allocation Vector (NAV) timer, thus avoiding a collision at B.

### 8. Important Points to Remember

*   **Trade-off:** Random access protocols offer simplicity but can suffer from reduced efficiency and increased latency under heavy network loads due to collisions.
*   **CSMA/CD's Reliance on Frame Size:** The minimum frame size in Ethernet is crucial for CSMA/CD to function correctly. If frames were too short, collisions could go undetected.
*   **CSMA/CA's Proactive Approach:** CSMA/CA is a more proactive strategy, trying to prevent issues before they arise, which is vital in the unpredictable wireless environment.
*   **Backoff is Key:** The random backoff mechanism is essential for all random access protocols to resolve contention and avoid re-colliding.
*   **Application Specificity:** The choice of MAC protocol often depends on the characteristics of the network medium (wired vs. wireless) and the expected network traffic patterns.
