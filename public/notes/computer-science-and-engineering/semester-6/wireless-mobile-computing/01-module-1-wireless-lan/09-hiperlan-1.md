---
title: "HIPERLAN-1"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb74"
status: "completed"
scrapedAt: "2026-05-20T16:57:50.342Z"
---
## Wireless & Mobile Computing - Module 1: Wireless LAN - HIPERLAN-1

These notes cover HIPERLAN-1, focusing on its key characteristics, protocols, and performance.

**Learning Outcomes:**

*   Understand the architecture and characteristics of HIPERLAN-1.
*   Describe the medium access control (MAC) layer protocol in HIPERLAN-1.
*   Explain the channel access scheme and prioritization methods used in HIPERLAN-1.
*   Identify the advantages and disadvantages of HIPERLAN-1.
*   Compare HIPERLAN-1 with IEEE 802.11.

---

**1. Introduction to HIPERLAN-1**

*   **Definition:** HIPERLAN-1 (HIgh PERformance Radio LAN type 1) was a European Telecommunications Standards Institute (ETSI) standard for high-speed wireless local area networks (WLANs).
*   **Purpose:** Designed as an alternative to IEEE 802.11, aiming for higher performance and different features.
*   **Standard:** Developed by ETSI RES10, specified by ETSI EN 300 652.
*   **Frequency Band:** Operates in the 5 GHz band (5.15 - 5.3 GHz), specifically using the UNII (Unlicensed National Information Infrastructure) band.  This band is also used by some IEEE 802.11 standards, particularly 802.11a.
*   **Data Rate:** Provides a raw data rate of up to 23.5 Mbps.  This is significantly faster than early 802.11 implementations.
*   **Architecture:** A decentralized ad-hoc network architecture.  No central access point is required. Devices communicate directly with each other.

**2. Key Concepts and Definitions**

*   **Ad-hoc Network:** A network formed spontaneously without a central administrative point.
*   **Hidden Node Problem:** Occurs when two nodes are within range of a common node, but not within range of each other, leading to potential collisions. HIPERLAN-1 addresses this through its MAC protocol.
*   **Roaming:** The ability of a mobile node to move from one network to another while maintaining connectivity. HIPERLAN-1 doesn't inherently support roaming in the same way that infrastructure-based WLANs do, due to its ad-hoc nature.
*   **Channel Access:** The method by which nodes compete for and gain access to the shared wireless medium.
*   **Prioritization:** Mechanisms to give certain types of traffic preferential access to the network.

**3. HIPERLAN-1 Architecture and Characteristics**

*   **Ad-Hoc Topology:** The core design principle.  Nodes can join or leave the network at any time.
*   **No Central Access Point:** Simplifies deployment and reduces infrastructure costs.
*   **Distributed Coordination Function (DCF):**  The MAC protocol is a form of DCF.  However, HIPERLAN-1's DCF is significantly different from IEEE 802.11's DCF (CSMA/CA).
*   **Four Sublayers:**
    *   **Channel Access Control (CAC) Sublayer:** Responsible for controlling access to the radio channel using the Elimination-Yield Non-preemptive Multiple Access (EY-NPMA) protocol.
    *   **Channel Quality Feedback (CQF) Sublayer:** Monitors channel quality and provides feedback to the CAC sublayer. Helps in adapting transmission parameters.
    *   **Data Link Control (DLC) Sublayer:**  Provides connectionless data transfer.
    *   **Radio Physical (PHY) Layer:** Handles modulation, encoding, and transmission of data over the radio channel.

**4. Medium Access Control (MAC) Layer: EY-NPMA**

*   **EY-NPMA (Elimination-Yield Non-preemptive Multiple Access):** The key MAC protocol used in HIPERLAN-1. It's a sophisticated distributed access control mechanism.
*   **Mechanism:** It combines aspects of carrier sensing, collision avoidance, and prioritization.
*   **Steps:**
    1.  **Listen Before Talk (LBT):** A node wanting to transmit first listens to the channel.
    2.  **Priority Resolution:** If the channel is busy, the node performs a *priority resolution* process.  This involves broadcasting its priority level.
    3.  **Elimination Phase:** Nodes with lower priority than the highest priority observed during the priority resolution process *eliminate* themselves from the contention process for that transmission opportunity.  They yield the channel.
    4.  **Yield Phase:** Nodes with the same highest priority level enter a yield phase.  They randomly delay their transmission.  This is similar to a contention window.
    5.  **Non-Preemptive:** Once a node starts transmitting, it continues until its frame is completely sent, without interruption.

*   **Addressing the Hidden Node Problem:** The priority resolution process helps alleviate the hidden node problem. Even if two nodes cannot hear each other directly, they can hear the priority announcements of other nodes and avoid collisions.
*   **Priority Levels:** HIPERLAN-1 supports multiple priority levels, allowing for differentiated Quality of Service (QoS). Higher priority traffic gets preferential access to the channel.
*   **Advantages of EY-NPMA:**
    *   Efficient channel utilization.
    *   Good support for prioritized traffic.
    *   Robust against the hidden node problem.
*   **Disadvantages of EY-NPMA:**
    *   Complex implementation.
    *   Requires time for the priority resolution process, which can add overhead.

**5. Channel Access Scheme and Prioritization**

*   **Channel Access:** Primarily managed by EY-NPMA as described above. The listen-before-talk and contention resolution mechanisms ensure fair, but prioritized, access to the channel.
*   **Prioritization Methods:**
    *   **Explicit Priority Levels:** Data can be assigned a priority level from 0 (lowest) to 3 (highest).  The CAC sublayer uses this priority during the EY-NPMA priority resolution phase.
    *   **Implicit Priority:**  While not explicitly part of the standard, applications can influence priority by adjusting the parameters they use for network access.
*   **QoS Support:** The priority mechanisms enable HIPERLAN-1 to provide basic QoS guarantees by giving preferential access to higher priority traffic.

**6. Advantages and Disadvantages of HIPERLAN-1**

*   **Advantages:**
    *   **High Performance:** Potentially higher throughput than early IEEE 802.11 implementations.
    *   **Ad-Hoc Networking:**  Easy to deploy without infrastructure.
    *   **Good QoS Support:** Prioritization mechanisms allow for differentiated service.
    *   **Resilience to Hidden Node Problem:** EY-NPMA mitigates the impact of hidden nodes.

*   **Disadvantages:**
    *   **Complexity:**  The EY-NPMA protocol is complex to implement.
    *   **Lack of Widespread Adoption:** Never achieved the same level of market penetration as IEEE 802.11.
    *   **Power Consumption:** The continuous listening and contention processes can consume significant power.
    *   **Limited Range:** Like other 5 GHz WLAN technologies, HIPERLAN-1 suffers from relatively limited range compared to 2.4 GHz technologies.

**7. Comparison with IEEE 802.11**

| Feature          | HIPERLAN-1                                  | IEEE 802.11                                    |
|-------------------|----------------------------------------------|------------------------------------------------|
| Architecture      | Ad-hoc                                     | Ad-hoc and Infrastructure                        |
| MAC Protocol      | EY-NPMA (Elimination-Yield Non-preemptive)  | CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance) |
| Frequency Band    | 5 GHz                                       | 2.4 GHz and 5 GHz                               |
| Prioritization    | Explicit priority levels                     | QoS mechanisms (e.g., EDCF in 802.11e)          |
| Complexity        | More complex                               | Less complex                                   |
| Market Adoption   | Limited                                     | Widespread                                    |

*   **Key Differences:**
    *   **MAC Protocol:** The most significant difference. EY-NPMA is designed for better performance and QoS, but at the cost of complexity.  CSMA/CA is simpler but can be less efficient under heavy load.
    *   **Architecture:** While 802.11 supports both ad-hoc and infrastructure modes, HIPERLAN-1 focused primarily on ad-hoc networks.
    *   **Market Success:** IEEE 802.11 became the dominant WLAN standard, while HIPERLAN-1 remained a niche technology.

**8. Important Points to Remember**

*   HIPERLAN-1 was a European standard for high-speed WLANs.
*   It used the EY-NPMA protocol for medium access, which prioritized traffic.
*   It was designed for ad-hoc networks without a central access point.
*   It offered potential advantages in performance and QoS compared to early 802.11 but was ultimately less successful.
*   Its complexity and lack of widespread adoption were key factors in its decline.

**9. Practice Questions/Exercises**

**Question 1:** What is the primary difference between the architecture of HIPERLAN-1 and an infrastructure-based IEEE 802.11 network?

**Answer:** HIPERLAN-1 is designed for ad-hoc networks and does not require a central access point, while an infrastructure-based 802.11 network relies on an access point for coordinating communication.

**Question 2:** Explain the concept of "elimination" in the EY-NPMA protocol.

**Answer:** In the EY-NPMA protocol, during the priority resolution phase, nodes that detect higher priority transmissions eliminate themselves from contention for that transmission opportunity, yielding the channel to the higher-priority node.

**Question 3:** What are some of the advantages of using HIPERLAN-1 over an early version of IEEE 802.11?

**Answer:** Potential advantages include higher throughput, better QoS support due to its prioritization mechanisms, and greater resilience to the hidden node problem.

**Question 4:** What is the biggest disadvantage that contributed to the decline in popularity of HIPERLAN-1 despite its technical advantages?

**Answer:** The primary disadvantage was its complexity in implementation and its lack of widespread market adoption compared to the simpler and more broadly supported IEEE 802.11 standards.

**Question 5:** Why would the lack of a central access point (as in HIPERLAN-1) be considered both an advantage AND a disadvantage?

**Answer:**

*   **Advantage:** Simpler deployment, reduced infrastructure costs, more flexible for dynamic environments.
*   **Disadvantage:** Lack of centralized management, potentially less security, more difficult to scale for larger networks, no inherent support for roaming between basic service sets (BSS).
