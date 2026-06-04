---
title: "Need for protection- Types of protection schemes – primary and back-up"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 4: Need for protection"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36191"
status: "completed"
scrapedAt: "2026-05-23T16:23:34.464Z"
---
# Module 4: Need for Protection - Types of Protection Schemes – Primary and Back-up

## 1. Introduction to Power System Protection

The primary goal of power system protection is to ensure the **reliability, stability, and safety** of the power system. A power system is a complex network that includes generation, transmission, and distribution stages. During normal operation, power flows smoothly. However, various abnormal conditions can arise, such as short circuits, overloads, and equipment failures. These abnormal conditions, if left unchecked, can lead to catastrophic damage to expensive equipment, widespread power outages, and potential hazards to personnel.

### 1.1. What is Power System Protection?

Power system protection refers to the **detecting and isolating of abnormal conditions** in the power system quickly and effectively to prevent damage to equipment and to maintain system stability. It involves a coordinated system of relays, circuit breakers, and other protective devices.

### 1.2. Why is Protection Necessary?

The need for protection in a power system stems from several critical factors:

*   **Equipment Protection:**
    *   **Expensive Equipment:** Generators, transformers, transmission lines, and switchgear are highly expensive. Faults can cause severe damage, leading to costly repairs and replacements.
    *   **Preventing Escalation of Damage:** A localized fault, if not cleared promptly, can propagate and cause damage to other interconnected equipment. For instance, a fault on one transformer could lead to its failure, potentially impacting other transformers in a network. (Wadhwa, C.L., Chapter 18)
*   **System Stability:**
    *   **Maintaining System Integrity:** Uncontrolled faults can lead to instability in the power grid, causing voltage collapse or even a complete system blackout (cascading failures).
    *   **Synchronism:** Protection helps maintain the synchronism between generators and the grid, preventing them from falling out of step.
*   **Personnel Safety:**
    *   **Preventing Electrical Hazards:** Faults can lead to dangerous voltage levels and arcing, posing a severe risk to the safety of operators and maintenance personnel.
*   **Economic Considerations:**
    *   **Minimizing Outage Duration:** Prompt fault clearing reduces the duration of power outages, minimizing economic losses for consumers and utilities.
    *   **Reducing Repair Costs:** Effective protection minimizes the extent of damage, thereby reducing repair costs.
*   **Reliability of Supply:**
    *   **Minimizing Power Outages:** The ultimate goal is to provide a continuous and reliable supply of electricity to consumers. Protection schemes play a crucial role in achieving this by isolating faulty sections with minimal impact on the rest of the system.

## 2. Types of Protection Schemes: Primary and Back-up Protection

Protection schemes are designed to provide multiple layers of defense. The fundamental categorization is into **primary protection** and **back-up protection**.

### 2.1. Primary Protection

Primary protection is the **first line of defense**. It is designed to detect and isolate a fault **as quickly and selectively as possible**.

*   **Key Characteristics:**
    *   **Fast Operation:** Primary protection operates very rapidly to minimize fault duration.
    *   **Selective:** It isolates only the faulty section of the network, leaving the healthy parts energized.
    *   **Directly Applied:** Relays and circuit breakers are directly associated with the equipment they are protecting.
    *   **High Sensitivity:** Designed to detect even minor faults to prevent them from escalating.
*   **Components:**
    *   **Relays:** These devices detect the abnormal condition (e.g., overcurrent, differential current).
    *   **Circuit Breakers:** These are the switching devices that physically disconnect the faulty section from the rest of the system upon receiving a trip signal from the relay.
    *   **Current Transformers (CTs) and Potential Transformers (PTs):** These are used to step down the high power system voltages and currents to levels suitable for the relays.
*   **Example:** A simple overcurrent relay installed to protect a feeder. If the current exceeds a predefined limit, the relay operates and trips the associated circuit breaker, isolating the feeder. (Mehta & Mehta, Chapter 14)

### 2.2. Back-up Protection

Back-up protection acts as a **secondary defense mechanism**. It comes into play if the primary protection fails to operate or operates too slowly.

*   **Key Characteristics:**
    *   **Slower Operation:** Back-up protection is designed to operate slower than the primary protection. This ensures that the primary protection has the first opportunity to clear the fault.
    *   **Less Selective:** While still aiming for isolation, back-up protection might be less selective than primary protection, potentially isolating a larger section of the network if necessary to clear the fault.
    *   **Operates on a Time Delay:** Typically, a time delay is introduced to allow the primary protection to act first.
    *   **Provides Redundancy:** Guarantees that a fault will eventually be cleared even if the primary protection fails.
*   **Types of Back-up Protection:**
    *   **Time Back-up:** The same relay that provides primary protection is set to operate with a longer time delay to act as a back-up for an adjacent zone of protection or a neighboring circuit breaker.
    *   **Current Back-up:** Relays are set to operate for higher fault currents, providing protection if the primary protection's settings are too low or if the fault current is unexpectedly high.
    *   **Remote Back-up:** A protection scheme located at a distance from the fault location operates to clear the fault if the local protection fails. For example, the protection at the adjacent substation will eventually operate to clear a fault if the circuit breaker at the origin of the fault fails to open. (Badri Ram & Viswakarma, Chapter 3)
    *   **Local Back-up:** The circuit breaker at the faulted busbar opens to clear the fault if the breaker controlling the faulted line fails to operate.

### 2.3. Coordination of Primary and Back-up Protection

Effective power system protection relies on the **proper coordination** between primary and back-up schemes. This coordination is achieved by setting different operating times for different protective devices.

*   **Time Coordination:**
    *   If the primary relay operates and trips the circuit breaker, the back-up relay should not operate.
    *   If the primary relay fails to operate within its designated time, the back-up relay (with its time delay) should operate and trip its corresponding circuit breaker.
    *   A typical time separation between primary and back-up protection is 0.3 to 0.5 seconds.

*   **Coordination Examples:**
    *   **Feeder Protection:** A feeder is protected by a circuit breaker at the substation. The primary protection is a fast-acting overcurrent relay. The back-up protection could be an overcurrent relay in the adjacent feeder, or the same relay set to a higher time delay.
    *   **Transformer Protection:** A transformer has differential protection as primary and overcurrent protection as back-up. If the differential protection fails, the overcurrent protection will operate after a delay.

## 3. Course Outcome Alignment

This module directly contributes to achieving the following course outcomes:

*   **CO1: Learn different types of power generating systems and schedule generation appropriate for a given area. (Knowledge Level: K3)**
    *   While this module doesn't delve into generation scheduling, understanding the need for protection is fundamental to maintaining the stability and reliability of the generation systems discussed in CO1. If generators are not protected, their failure can disrupt the entire power supply.
*   **CO2: Evaluate the electrical performance of any transmission line. (Knowledge Level: K3)**
    *   Protection schemes are integral to the operational performance of transmission lines. Faults on transmission lines are a primary concern, and understanding protection allows for evaluating how a transmission line can be effectively protected against these faults, thereby ensuring its performance under abnormal conditions.
*   **CO4: Demonstrate the working of relays and switch gear for protection schemes. (Knowledge Level: K2)**
    *   This module lays the groundwork for understanding the "need" for protection, which is the context for the "demonstration" of relay and switchgear operation. Understanding *why* we need protection is essential before learning *how* relays and switchgear work. The distinction between primary and back-up protection highlights the different operational characteristics and roles of these devices.
*   **CO5: Design a simple ac electrical distribution system as per the standards. (Knowledge Level: K3)**
    *   When designing a distribution system, protection is a critical aspect. The principles of primary and back-up protection are applied to ensure that faults within the distribution network are quickly and reliably isolated, maintaining the safety and continuity of supply to consumers.

## 4. Key Concepts and Definitions

*   **Fault:** An abnormal condition in a power system that results in excessive current flow or voltage deviation.
*   **Protection:** The process of detecting and isolating faults to prevent damage and maintain system stability.
*   **Relay:** A protective device that detects abnormal conditions and initiates a corrective action.
*   **Circuit Breaker:** A switching device that can interrupt fault currents.
*   **Primary Protection:** The first line of defense, designed for fast and selective fault clearing.
*   **Back-up Protection:** A secondary defense mechanism that operates if the primary protection fails.
*   **Selectivity:** The ability of a protection system to isolate only the faulted section.
*   **Sensitivity:** The ability of a protection system to detect faults.
*   **Reliability:** The ability of the power system to operate without interruption.
*   **Stability:** The ability of the power system to remain in synchronism under fault conditions.

## 5. Important Points to Remember

*   The primary goal of protection is to **protect equipment, ensure safety, and maintain system stability and reliability**.
*   **Primary protection is fast and selective**, while **back-up protection is slower and may be less selective**, acting as a fail-safe.
*   **Coordination between primary and back-up protection is crucial** and is achieved through time delays and/or different operating characteristics.
*   A fault should always be cleared by the **primary protection**. Back-up protection is only for cases where primary protection fails.
*   The absence of proper protection can lead to **severe damage, costly repairs, prolonged outages, and safety hazards**.

## 6. Practice Questions

**Question 1:**
What are the primary reasons for implementing protection schemes in a power system? (Relates to CO1, CO2, CO4, CO5)

**Answer:**
The primary reasons are:
1.  **Equipment Protection:** To prevent damage to expensive assets like generators, transformers, and transmission lines from abnormal conditions like short circuits and overloads.
2.  **System Stability:** To maintain the overall stability and integrity of the power grid, preventing widespread blackouts.
3.  **Personnel Safety:** To protect human life by preventing hazardous conditions like high voltages and arcing during faults.
4.  **Reliability of Supply:** To minimize power outages and ensure a continuous and dependable supply of electricity to consumers.
5.  **Economic Considerations:** To reduce repair costs and economic losses incurred due to extended power outages.

**Question 2:**
Differentiate between primary and back-up protection schemes. (Relates to CO4)

**Answer:**
| Feature          | Primary Protection                               | Back-up Protection                                     |
| :--------------- | :----------------------------------------------- | :----------------------------------------------------- |
| **Speed**        | Fast operation                                   | Slower operation (operates with a time delay)          |
| **Selectivity**  | Highly selective (isolates only the fault)       | Less selective (may isolate a larger section if needed) |
| **Purpose**      | First line of defense, rapid fault clearing      | Failsafe mechanism, operates if primary fails         |
| **Dependence**   | Independent                                      | Dependent on the failure of primary protection        |
| **Coordination** | Sets the basis for back-up coordination          | Coordinated with primary protection through time delays |
| **Example**      | Differential protection for a transformer        | Overcurrent protection for the same transformer         |

**Question 3:**
If a feeder is protected by a circuit breaker with a time-overcurrent relay (primary protection), and this relay fails to operate during a fault on the feeder, what would be the role of back-up protection in this scenario? (Relates to CO4)

**Answer:**
If the primary time-overcurrent relay fails to operate during a feeder fault, the back-up protection would come into play. This back-up protection, which is typically set to operate with a longer time delay or for higher fault currents, would then detect the sustained fault condition. Upon operation, the back-up relay would trip its corresponding circuit breaker, thus isolating the faulted feeder. This ensures that the fault is eventually cleared, preventing damage to the feeder and potential instability in the network, even though the primary protection failed to do its job. This highlights the critical role of redundancy and coordination in protection schemes.

**Question 4:**
Explain the concept of "coordination" in power system protection with respect to primary and back-up schemes. (Relates to CO4)

**Answer:**
Coordination in power system protection refers to the proper grading of operating times and current settings of different protective relays and circuit breakers. The goal is to ensure that in the event of a fault, only the relay and circuit breaker closest to the fault operate, isolating the minimum possible part of the system.

For primary and back-up schemes, coordination means:
*   The primary protection is set to operate very quickly and selectively.
*   The back-up protection is set to operate with a significant time delay (e.g., 0.3-0.5 seconds) after the primary protection is expected to have operated.
*   This time delay ensures that if the primary protection successfully clears the fault, the back-up protection will not operate.
*   However, if the primary protection fails to operate (due to relay malfunction, breaker failure, etc.), the back-up protection will eventually operate after its time delay, clearing the fault. This cascading avoidance is crucial for system stability.

**Question 5:**
Consider a simple distribution network with a transformer feeding two radial feeders. How would you conceptually apply primary and back-up protection principles to the transformer and feeders? (Relates to CO4, CO5)

**Answer:**
**Transformer Protection:**
*   **Primary Protection:** Differential protection. This is a very fast and sensitive scheme that compares the currents entering and leaving the transformer. If there's a significant imbalance (indicating an internal fault), it trips the transformer's circuit breakers on both the high-voltage and low-voltage sides.
*   **Back-up Protection:** Overcurrent protection (e.g., IDMT relays) on both the HV and LV sides of the transformer, and possibly an over-temperature relay. These are set with a time delay to operate only if the differential protection fails or if there is an external fault that causes prolonged overcurrent.

**Feeder Protection (each feeder):**
*   **Primary Protection:** Time-overcurrent relays. These are set to operate for faults on the feeder. They are coordinated with the transformer's back-up overcurrent protection so that feeder faults are cleared by the feeder's primary protection before the transformer's back-up protection operates.
*   **Back-up Protection:**
    *   **Local Back-up:** The circuit breaker at the transformer's LV side (which serves as the primary protection for the transformer's LV side) can act as back-up for the feeder if the feeder's circuit breaker fails to open.
    *   **Remote Back-up:** Protection schemes at the next stage of the distribution network (e.g., at the distribution substation if this is a primary substation) can act as back-up. Alternatively, the transformer's own overcurrent relays with a time delay would provide back-up if the feeder's primary protection fails.

The key is to ensure that for any fault, the protection nearest to the fault operates first (primary), and if that fails, a protection further away with a time delay operates (back-up).

---

This module provides a foundational understanding of *why* protection is essential. The subsequent modules will likely delve into the specific types of relays and their operational characteristics for implementing these primary and back-up schemes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
