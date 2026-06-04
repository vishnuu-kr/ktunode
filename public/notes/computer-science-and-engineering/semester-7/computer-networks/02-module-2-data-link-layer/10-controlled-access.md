---
title: "Controlled Access"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92d"
status: "completed"
scrapedAt: "2026-05-20T17:02:43.527Z"
---
# Computer Networks: Module 2 - Data Link Layer: Controlled Access

This module delves into the crucial aspect of the Data Link Layer: **Controlled Access**. We will explore various methods that stations on a shared network medium use to gain access to the transmission channel in an orderly fashion, preventing collisions and ensuring efficient data delivery.

---

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the need for controlled access in shared network environments.
*   Explain the operation of different controlled access methods.
*   Compare and contrast various controlled access techniques.
*   Analyze the advantages and disadvantages of each method.
*   Identify situations where specific controlled access methods are best suited.

---

## 1. The Need for Controlled Access

In a shared network environment, multiple devices (stations) often share a single communication medium (e.g., an Ethernet cable, wireless channel). Without a mechanism to regulate access, stations would transmit data whenever they please, leading to **collisions**.

**Definition:** A **collision** occurs when two or more stations transmit data simultaneously on a shared medium, corrupting the data for all involved.

**Why is Controlled Access Necessary?**

*   **Prevents Collisions:** The primary goal is to avoid data corruption due to simultaneous transmissions.
*   **Ensures Fair Access:** Provides a structured way for stations to get a chance to transmit, preventing any single station from monopolizing the channel.
*   **Improves Network Efficiency:** By minimizing collisions and retransmissions, controlled access methods aim to maximize the throughput of the network.
*   **Manages Bandwidth:** Distributes the available bandwidth among the participating stations.

---

## 2. Controlled Access Methods

Controlled access methods regulate which station can transmit at any given time. They ensure that only one station transmits at a time, thereby eliminating collisions.

### 2.1. Carrier Sense Multiple Access (CSMA)

CSMA is a fundamental technique where stations "listen" to the medium before transmitting.

**Key Concepts:**

*   **Carrier Sensing:** A station listens to the medium to detect if any other station is currently transmitting.
*   **Multiple Access:** Multiple stations can access the shared medium.

**How it Works:**

1.  **Listen:** A station wanting to transmit first listens to the medium.
2.  **Idle:** If the medium is idle, the station transmits its data.
3.  **Busy:** If the medium is busy, the station waits.
4.  **Backoff (Implicit):** If two stations sense the medium as idle at the same time and start transmitting simultaneously, a collision occurs. In CSMA, there isn't an explicit backoff *mechanism* to deal with this, but the assumption is that after a collision, stations will wait for a random period before attempting to transmit again.

**Variations of CSMA:**

*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):**
    *   **Description:** This is the most common form of CSMA. In addition to listening before transmitting, stations also monitor the medium *during* transmission. If a collision is detected, the station immediately stops transmitting, sends a jamming signal to alert other stations, and then waits for a random amount of time before attempting to retransmit.
    *   **Example:** Ethernet (older versions like 10BASE5, 10BASE2, and 10BASE-T).
    *   **Advantages:**
        *   Relatively simple to implement.
        *   Efficient for low to moderate traffic loads.
    *   **Disadvantages:**
        *   Collisions can still occur, leading to wasted bandwidth.
        *   The efficiency decreases significantly with higher traffic loads or larger network distances.
        *   Not suitable for wireless environments where detecting collisions is difficult.

*   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):**
    *   **Description:** Primarily used in wireless networks (like Wi-Fi), where detecting collisions is problematic due to the "hidden node" problem and the inability of a station to listen while transmitting. CSMA/CA aims to *avoid* collisions rather than detecting them.
    *   **How it Works (Simplified):**
        1.  **Listen:** Station listens to the medium.
        2.  **If Idle:** Station waits for a small, random period (Interframe Space - IFS) before transmitting.
        3.  **If Busy:** Station waits until the medium is free and then follows step 2.
        4.  **Acknowledgement (ACK):** After receiving data, the destination station sends an ACK. If the sender doesn't receive an ACK within a certain timeout period, it assumes a collision occurred (or data was lost) and retransmits.
    *   **Example:** Wi-Fi (IEEE 802.11).
    *   **Advantages:**
        *   Suitable for wireless environments.
        *   Reduces the probability of collisions.
    *   **Disadvantages:**
        *   Lower throughput compared to CSMA/CD in ideal wired conditions due to overhead (IFS, ACK).
        *   More complex than CSMA/CD.

### 2.2. Controlled Access Techniques (Deterministic Methods)

These methods provide guaranteed access to the medium, eliminating the possibility of collisions altogether.

#### 2.2.1. Reservation Techniques

Stations must make a reservation before transmitting data.

*   **Reservation ALOHA:**
    *   **Description:** A variation of ALOHA where stations reserve a slot for future transmissions. Once a reservation is successful, the station can transmit in its reserved slot without fear of collision.
    *   **How it Works:** Stations broadcast reservation packets. If multiple stations try to reserve at the same time, a collision occurs on the reservation packets. Once a reservation is confirmed, the station has a dedicated slot.
    *   **Example:** Used in some satellite communication systems.
    *   **Advantages:**
        *   Guaranteed access after reservation.
        *   Can be efficient for periodic traffic.
    *   **Disadvantages:**
        *   Significant overhead for reservation packets.
        *   Can be complex to manage reservations.

*   **Slotted ALOHA (with reservation elements):** While not purely reservation, Slotted ALOHA's division into time slots makes it a precursor to more controlled methods. Stations must wait for the beginning of a slot to transmit.

#### 2.2.2. Polling Techniques

A central master station polls (requests permission) from each client station.

*   **Description:** One station (the master) controls access to the medium. It polls each station in a round-robin fashion. Only the station being polled can transmit.
*   **How it Works:**
    1.  The master station sends a poll to a specific station.
    2.  If the polled station has data, it transmits its frame.
    3.  If the polled station has no data, it sends a negative acknowledgement or a dummy frame.
    4.  The master station then polls the next station.
*   **Example:** Token Ring (though not strictly polling, it shares the deterministic access aspect). Also used in some older mainframe terminal access systems.
*   **Advantages:**
    *   No collisions.
    *   Orderly access.
*   **Disadvantages:**
    *   Inefficient if many stations have no data to send (polling overhead).
    *   Single point of failure (if the master station fails).
    *   Can be slow due to the need to poll every station.

*   **Roll-Call Polling:** The master station polls stations in a fixed order.

*   **Selective Polling:** The master station only polls stations that have indicated they have data ready.

#### 2.2.3. Token-Passing Techniques

A special control frame called a "token" circulates on the network.

*   **Description:** A small message, called a **token**, circulates around the network. A station can transmit data only if it possesses the token.
*   **How it Works:**
    1.  The token is passed from one station to the next in a predefined order.
    2.  A station wishing to transmit must wait until it receives the token.
    3.  Upon receiving the token, the station captures it, appends its data frame, and transmits it onto the network.
    4.  After transmitting its data, the station releases the token (or creates a new one) and passes it on to the next station.
    5.  If a station does not have data to transmit, it passes the token on immediately.
*   **Example:** Token Ring (IEEE 802.5), Token Bus (IEEE 802.4).
*   **Advantages:**
    *   No collisions.
    *   Fair access for all stations.
    *   Guaranteed maximum access time for each station.
    *   Efficient under heavy load.
*   **Disadvantages:**
    *   Complex to implement.
    *   The failure of a single station or the token can disrupt the entire network.
    *   The token passing itself creates overhead.

---

## 3. Comparison of Controlled Access Methods

| Feature            | CSMA/CD                                    | CSMA/CA                                      | Token Passing                               | Polling                                      | Reservation ALOHA                             |
| :----------------- | :----------------------------------------- | :------------------------------------------- | :------------------------------------------ | :------------------------------------------- | :-------------------------------------------- |
| **Access Type**    | Probabilistic (listens, may collide)       | Probabilistic (listens, avoids collision)    | Deterministic (token controlled)            | Deterministic (master polls)                 | Deterministic (after reservation)             |
| **Collisions**     | Possible, detected and recovered           | Possible, but avoided                        | No collisions                               | No collisions                                | No collisions (after reservation)             |
| **Overhead**       | Low (during normal operation)              | Moderate (IFS, ACK)                          | Moderate (token passing)                    | High (polling frames)                        | High (reservation frames)                     |
| **Efficiency (Low Load)** | High                                       | Moderate                                     | Moderate                                    | Low                                          | Low                                           |
| **Efficiency (High Load)** | Low (due to collisions)                    | Moderate (overhead)                          | High                                        | Moderate                                     | Moderate                                      |
| **Complexity**     | Moderate                                   | High                                         | High                                        | Moderate                                     | High                                          |
| **Suitability**    | Wired LANs (older Ethernet)                | Wireless LANs (Wi-Fi)                        | Wired LANs (Token Ring), Industrial Control | Hierarchical networks, legacy systems        | Satellite, certain real-time systems          |
| **Key Mechanism**  | Listen before transmit, detect collision   | Listen before transmit, avoid collision      | Token circulation                           | Master polling clients                       | Pre-allocated time slots via reservation      |

---

## 4. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of controlled access methods in the Data Link Layer?

**Question 2:**
Explain the difference between CSMA/CD and CSMA/CA. In which type of network environment is CSMA/CA generally preferred?

**Question 3:**
Describe the basic principle of token passing and list two advantages and two disadvantages of this method.

**Question 4:**
If a network experiences a very high traffic load, which controlled access method would likely perform most efficiently, and why?

**Question 5:**
Imagine a network where a central hub polls each connected device to see if it has data to send. What type of controlled access method is this an example of?

---

## Answers to Practice Questions

**Answer 1:**
The primary purpose of controlled access methods is to regulate the access of multiple stations to a shared communication medium, thereby preventing data collisions and ensuring efficient and orderly data transmission.

**Answer 2:**
*   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):** Stations listen to the medium before transmitting and also monitor for collisions *during* transmission. If a collision is detected, the transmission is aborted, and a retransmission is scheduled after a random backoff period.
*   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):** Stations listen to the medium before transmitting and use techniques like Interframe Spacing (IFS) and acknowledgments to *avoid* collisions. It is generally preferred in **wireless network environments** (like Wi-Fi) where detecting collisions during transmission is difficult.

**Answer 3:**
*   **Principle of Token Passing:** A special control frame called a "token" circulates around the network. A station can only transmit data when it possesses the token. After transmitting, it releases the token to the next station.
*   **Advantages:**
    1.  **No Collisions:** Eliminates the possibility of data corruption due to simultaneous transmissions.
    2.  **Fair Access/Guaranteed Bandwidth:** Each station is guaranteed a chance to transmit within a maximum time frame, leading to fair access and predictable performance.
*   **Disadvantages:**
    1.  **Complexity:** Implementing token management and handling token loss or corruption can be complex.
    2.  **Single Point of Failure/Overhead:** The failure of a single station or the loss of the token can disrupt the entire network. The passing of the token itself also introduces overhead.

**Answer 4:**
Under a very high traffic load, **token passing** would likely perform most efficiently. This is because it provides deterministic access, eliminating collisions and their associated retransmission delays, which become very costly at high loads. While CSMA/CA can avoid collisions, its inherent overhead might still limit its efficiency compared to the structured access of token passing.

**Answer 5:**
This is an example of **polling techniques**. Specifically, it resembles **roll-call polling** if the hub polls devices in a fixed sequence.

---

## Important Points to Remember:

*   **Collisions** are the primary enemy of efficiency in shared network media.
*   **Controlled access** methods aim to eliminate or minimize collisions.
*   **CSMA/CD** is collision-detecting and best for wired networks with moderate traffic.
*   **CSMA/CA** is collision-avoiding and essential for wireless networks.
*   **Token Passing** offers deterministic access, guaranteeing fairness and good performance under heavy loads but is complex and vulnerable to token loss.
*   **Polling** is deterministic but can be inefficient due to overhead.
*   The choice of controlled access method depends heavily on the network environment (wired vs. wireless) and the expected traffic load.
