---
title: "Multiple access protocols – CSMA, Collision free protocols"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 2: Data link layer "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36473"
status: "completed"
scrapedAt: "2026-05-23T16:19:59.988Z"
---
# Computer Network Systems: Module 2 - Data Link Layer

## Topic: Multiple Access Protocols – CSMA, Collision-Free Protocols

---

### **1. Introduction to Multiple Access Protocols (MAPs)**

*   **What is Multiple Access?**
    *   In a shared communication medium (like a cable or radio channel), multiple devices (stations) need to transmit data.
    *   Multiple Access Protocols (MAPs) are techniques that govern how these stations share the medium to avoid conflicts and ensure efficient data transfer.
    *   They are crucial in broadcast networks (like Ethernet or wireless LANs) where a single communication channel is shared among many users.

*   **Need for Multiple Access Protocols:**
    *   **Resource Sharing:** To allow multiple users to access a shared, expensive communication medium.
    *   **Avoiding Collisions:** To prevent data corruption that occurs when two or more stations transmit simultaneously on the same channel.
    *   **Efficiency:** To maximize the utilization of the shared medium.

*   **Classification of MAPs:**
    *   **Random Access Protocols:** Stations transmit whenever they have data, and deal with collisions if they occur. Examples: ALOHA, CSMA.
    *   **Controlled Access Protocols:** Stations take turns transmitting, or a central authority manages access. Examples: Token Passing, Polling.
    *   **Channelization Protocols:** Divide the channel into smaller time slots, frequency bands, or codes. Examples: FDMA, TDMA, CDMA.

---

### **2. Random Access Protocols: Carrier Sense Multiple Access (CSMA)**

*   **Core Idea:** Before transmitting, a station "listens" to the medium to see if it's busy. If it's idle, the station transmits. If it's busy, the station waits.

*   **How it Works (Tanenbaum, 5th Ed., Chapter 4):**
    1.  **Carrier Sensing:** A station wanting to transmit first "listens" to the channel.
    2.  **If Idle:** Transmit the entire frame.
    3.  **If Busy:** Wait until the channel becomes idle.
    4.  **Transmission and Collision:** If two or more stations transmit at nearly the same time, their signals overlap, causing a collision.
    5.  **Collision Detection:** A station detects a collision if the signal it receives is different from the signal it sent.
    6.  **Backoff Procedure:** Upon detecting a collision, stations involved stop transmitting, wait for a random amount of time (backoff period), and then attempt to transmit again.

*   **Types of CSMA:**

    *   **Non-Persistent CSMA:**
        *   If the channel is busy, the station waits until it becomes idle and then transmits immediately.
        *   If a collision occurs, it waits for a random backoff time before re-attempting.
        *   *Pros:* Reduces unnecessary waiting if the channel becomes free quickly.
        *   *Cons:* Can lead to more collisions than other variants.

    *   **1-Persistent CSMA:**
        *   If the channel is busy, the station waits until it becomes idle.
        *   When the channel becomes idle, the station transmits immediately (with probability 1).
        *   If a collision occurs, the station waits for a random backoff time and then repeats the process (listens again).
        *   *Pros:* Efficient when the load is low to moderate; good channel utilization.
        *   *Cons:* Can still suffer from significant collisions when the load is high due to the "persistence."

    *   **0-Persistent CSMA (or p-persistent CSMA):**
        *   If the channel is busy, the station waits until it becomes idle.
        *   When the channel becomes idle, the station transmits with probability 'p'.
        *   With probability (1-p), it waits for another time slot and re-evaluates.
        *   If a collision occurs, it waits for a random backoff time.
        *   *Pros:* Aims to balance the efficiency of 1-persistent CSMA with the reduced collision probability by introducing a probabilistic approach.
        *   *Cons:* Requires careful tuning of 'p'.

*   **CSMA with Collision Detection (CSMA/CD) (Used in classic Ethernet):**
    *   **How it works:** Stations listen to the medium *while* transmitting. If a collision is detected, the station immediately stops transmitting, sends a jam signal to ensure all other stations are aware of the collision, and then enters a backoff procedure.
    *   **Key Features:**
        *   **Carrier Sensing:** Listen before sending.
        *   **Collision Detection:** Listen while sending.
        *   **Jam Signal:** A short signal sent to abort the transmission and alert other stations.
        *   **Binary Exponential Backoff:** The range of random backoff time doubles with each successive collision for the same frame. (e.g., 1, 2, 4, 8, 16, ..., 1023 slots).
    *   **Tanenbaum, 5th Ed., Chapter 4:** Discusses the frame format and the mechanics of CSMA/CD in Ethernet.
    *   **Forouzan, 5th Ed., Chapter 4:** Explains the concept of multiple access in the context of MAC protocols like ALOHA and CSMA/CD.
    *   **Efficiency of CSMA/CD:** The efficiency of CSMA/CD is affected by propagation delay relative to transmission time. The maximum efficiency is achieved when the propagation delay is very small compared to the transmission time of a frame.
    *   **Formula for Efficiency (Approximate):**
        $E \approx \frac{1}{1 + a}$
        where $a = \frac{\text{propagation delay}}{\text{transmission time}} = \frac{\tau}{T}$
        *   $\tau$: propagation delay from one end of the network to the other.
        *   $T$: transmission time of a frame.
        *   As $\tau$ approaches 0 (compared to $T$), $a$ approaches 0, and $E$ approaches 1 (100% efficiency).

*   **CSMA with Collision Avoidance (CSMA/CA) (Used in Wi-Fi/WLANs):**
    *   **Why needed:** In wireless networks, it's difficult to detect collisions reliably (especially hidden terminal problem). So, the strategy shifts from *detecting* collisions to *avoiding* them.
    *   **How it works:**
        1.  **Carrier Sensing:** Listen to the medium before transmitting.
        2.  **Backoff Timer:** If the medium is idle, a station waits for a random backoff time (a shorter duration than in CSMA/CD) before transmitting. This is a form of collision avoidance.
        3.  **Request to Send (RTS) / Clear to Send (CTS) Handshake (Optional but common):**
            *   **RTS:** A station sends a short RTS frame to the Access Point (AP) or destination station before sending the actual data frame.
            *   **CTS:** If the medium is free, the AP/destination sends a CTS frame back.
            *   **NAV (Network Allocation Vector):** Stations that receive RTS or CTS update their NAV, indicating that the medium will be busy for a specific duration. This prevents other stations from transmitting.
        4.  **Acknowledgement (ACK):** After receiving the data frame, the destination sends an ACK. If the sender doesn't receive an ACK, it retransmits.
    *   **Key Differences from CSMA/CD:**
        *   **Avoidance vs. Detection:** CSMA/CA focuses on preventing collisions, while CSMA/CD allows them and then detects and recovers.
        *   **Backoff:** CSMA/CA uses a shorter backoff timer for avoidance.
        *   **RTS/CTS:** Often used in CSMA/CA to reserve the medium and mitigate the hidden terminal problem.
        *   **No Jam Signal:** Not needed as collisions are avoided.
    *   **Reference:** Forouzan, 5th Ed., Chapter 4, discusses wireless MAC protocols.

---

### **3. Collision-Free Protocols**

*   **Motivation:** To provide deterministic access and guarantee no collisions, which is essential for some applications.
*   **Core Idea:** To ensure that at most one station transmits at any given time without requiring collision detection or complex backoff algorithms.

*   **Types of Collision-Free Protocols:**

    *   **Collision-Free Protocol (Generic Definition):** A protocol that ensures that at most one station transmits at a time. This is often achieved by coordinating access.

    *   **Bit Map Protocol:**
        *   **How it works:**
            *   The medium is divided into slots.
            *   A "contention period" or "bitmap period" occurs before the data transmission period.
            *   During the contention period, there is one slot for each station on the network.
            *   If a station wants to transmit, it transmits a '1' in its corresponding slot during the contention period.
            *   All stations receive the bitmap. They know which stations want to transmit.
            *   Stations transmit their data frames in sequential order based on their position in the bitmap (stations that sent '1' transmit, others skip).
        *   *Pros:* Guarantees no collisions.
        *   *Cons:* Highly inefficient if many stations are idle or if the number of stations is large, as the entire bitmap must be transmitted. Overhead is high.
        *   **Tanenbaum, 5th Ed., Chapter 4:** Might discuss this as a conceptual collision-free approach.

    *   **Token Passing Protocols:**
        *   **How it works:**
            *   A special short frame called a "token" circulates around the network.
            *   Only the station possessing the token is allowed to transmit data.
            *   When a station receives the token and has data to send, it captures the token, appends its data frame, and sends it onto the network. It also sets a timer.
            *   After transmitting its frame and receiving it back (or after the timer expires, indicating its data frame has passed through the network), it releases the token to the next station.
            *   If a station receives the token but has no data to send, it simply passes the token to the next station.
        *   **Variations:**
            *   **Token Ring (IEEE 802.5):** Stations are arranged logically in a ring. The token circulates in one direction.
            *   **Token Bus (IEEE 802.4):** Stations are connected to a coaxial cable (bus topology), but they operate logically in a ring. Each station knows the address of the next station to receive the token.
        *   *Pros:* Collision-free; deterministic access time; efficient under heavy load.
        *   *Cons:* Inefficient under light load (token must still circulate); token loss or corruption can disrupt the network; requires managing the token.
        *   **Tanenbaum, 5th Ed., Chapter 4:** Provides detailed explanations of Token Ring and Token Bus.
        *   **Forouzan, 5th Ed., Chapter 4:** Also covers Token Ring and Token Bus as MAC layer protocols.

    *   **D-channel Protocol (Related to DQDB - Distributed Queue Dual Bus):**
        *   **Concept:** Used in Metropolitan Area Networks (MANs). It involves two buses, and stations can access data by "requesting" a slot on the bus. A control mechanism ensures that requests are honored in a fair, FIFO (First-In, First-Out) manner, preventing collisions.
        *   **Not a direct "collision-free protocol" in the same vein as token passing but aims for controlled, collision-free access.** (Less emphasis typically placed on this in introductory notes compared to CSMA and Token Passing).

---

### **4. Connecting to Course Outcomes (COs)**

*   **CO1: Explain the computer networks, layered architecture, protocols and physical media used for setting up a network.**
    *   MAPs are protocols within the Data Link Layer, illustrating how devices share physical media (cables, radio waves). Understanding these protocols is key to explaining how networks are set up and how data flows.

*   **CO2: Identify the role of Data link layer, role of the MAC sub layer and networking devices in Ethernets and wireless LANs.**
    *   This topic directly addresses the MAC sublayer and its role in managing access to the shared medium. CSMA/CD is fundamental to Ethernet, and CSMA/CA is fundamental to wireless LANs (Wi-Fi). Token Passing was historically important for Token Ring networks.

*   **CO3: Explain routing algorithms and congestion control algorithms and ways to achieve good quality of service, IP address classes, ICMP protocols and other external routing protocols.**
    *   While this topic is primarily about MAC access, the efficiency of MAPs directly impacts the overall performance and quality of service (QoS) of a network. Inefficient MAPs can lead to congestion and higher latency. Understanding these protocols is foundational to later discussions on congestion control.

*   **CO4: Explain the services provided by the transport layer and application layer.**
    *   MAPs operate below the Transport Layer. The reliability and efficiency provided by MAPs influence how well higher layers can perform their functions. For example, if the Data Link Layer has high error rates due to poor MAC protocols, the Transport Layer has to work harder to provide reliable delivery.

---

### **5. Key Concepts and Definitions to Remember**

*   **Multiple Access Protocol (MAP):** A protocol that governs how multiple stations share a common communication channel.
*   **Collision:** The event when two or more stations transmit simultaneously on a shared medium, corrupting the data.
*   **Carrier Sensing:** The process where a station listens to the medium to determine if it is busy before transmitting.
*   **Collision Detection:** The process where a station monitors the medium during transmission to detect if a collision has occurred.
*   **Collision Avoidance:** Techniques used to prevent collisions from happening in the first place, rather than detecting and recovering from them.
*   **Backoff Procedure:** A random waiting period after a collision before a station re-attempts transmission, used to de-synchronize stations and reduce the probability of repeated collisions.
*   **Binary Exponential Backoff:** The strategy of doubling the range for random backoff after each successive collision for the same frame.
*   **Hidden Terminal Problem:** In wireless networks, a situation where two stations are within range of a common Access Point but not within range of each other. One station may transmit, unaware that the other is also transmitting.
*   **Token:** A special frame used in token passing protocols to grant permission to transmit.
*   **RTS/CTS:** Request to Send/Clear to Send – a handshake mechanism used in CSMA/CA to reserve the medium and avoid hidden/exposed terminal problems.
*   **NAV (Network Allocation Vector):** A timer used in CSMA/CA to indicate how long the medium will be busy.

---

### **6. Important Points to Remember**

*   **CSMA/CD:** Collision *Detection*. Primary use: wired Ethernet. Efficient for low to moderate load. Efficiency degrades significantly under heavy load.
*   **CSMA/CA:** Collision *Avoidance*. Primary use: wireless LANs (Wi-Fi). Handles hidden terminal problem. Uses RTS/CTS and backoff for avoidance.
*   **Token Passing:** Collision-free. Deterministic access. Good for predictable performance, especially under high load. Inefficient under very low load due to token circulation.
*   **Efficiency Formula:** $E \approx \frac{1}{1 + a}$, where $a = \frac{\tau}{T}$. This highlights why CSMA/CD works better on networks with short propagation delays relative to transmission times.
*   The choice of MAP depends heavily on the network topology, traffic patterns, and requirements for predictability and efficiency.

---

### **7. Practice Questions and Exercises**

**Question 1:**
What is the primary difference in strategy between CSMA/CD and CSMA/CA?
**Answer:**
CSMA/CD focuses on *detecting* collisions after they occur and then recovering using a backoff algorithm. CSMA/CA focuses on *avoiding* collisions before they happen, typically using a shorter random backoff and optionally RTS/CTS handshakes.

**Question 2:**
Explain the "hidden terminal problem" and how CSMA/CA with RTS/CTS attempts to solve it.
**Answer:**
The hidden terminal problem occurs in wireless networks when two stations are out of each other's radio range but can both reach a common Access Point (AP). Station A sends to AP, Station B also sends to AP. If A and B are not in range, A might not hear B transmitting, and B might not hear A transmitting. If both send simultaneously to the AP, a collision occurs at the AP.
CSMA/CA with RTS/CTS helps by having Station A send an RTS frame. If the AP receives the RTS, it sends a CTS frame. If Station B hears the CTS frame, it knows the medium is busy and refrains from transmitting, even though it didn't hear Station A's RTS directly. The NAV timer on Station B is updated by the CTS.

**Question 3:**
In a Token Ring network, what happens if a station receives the token but has no data to transmit?
**Answer:**
If a station receives the token and has no data to transmit, it should simply pass the token to the next station in the logical ring, allowing the token to continue circulating.

**Question 4:**
Consider a network segment where propagation delay ($\tau$) is 10 microseconds and the transmission time ($T$) for a typical frame is 50 microseconds. Calculate the approximate efficiency of CSMA/CD on this segment.
**Answer:**
$a = \frac{\tau}{T} = \frac{10 \mu s}{50 \mu s} = 0.2$
Efficiency $E \approx \frac{1}{1 + a} = \frac{1}{1 + 0.2} = \frac{1}{1.2} \approx 0.833$
So, the approximate efficiency is 83.3%.

**Question 5:**
Which MAC protocol is most suitable for a real-time voice communication system where predictable latency is critical? Explain why.
**Answer:**
Token Passing protocols (like Token Ring or Token Bus) are generally more suitable for real-time voice communication. This is because they offer deterministic access to the medium and a bounded maximum waiting time for transmission, ensuring predictable latency. Random access protocols like CSMA/CD can experience variable delays and potential collisions, making them less ideal for strict real-time requirements.

---
