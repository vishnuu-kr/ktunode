---
title: "flexible frame structure"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 3: 5G Network"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0f9"
status: "completed"
scrapedAt: "2026-05-23T18:04:47.710Z"
---
# ADVANCED MOBILE COMMUNICATION - Module 3: 5G Network

## Topic: Flexible Frame Structure

---

### Introduction

The evolution of mobile communication systems has consistently aimed at improving spectral efficiency, latency, and data rates. 5G New Radio (NR) builds upon the advancements of LTE-Advanced Pro and introduces significant flexibility in its frame structure to cater to diverse service requirements, such as enhanced Mobile Broadband (eMBB), Ultra-Reliable Low Latency Communication (URLLC), and massive Machine Type Communication (mMTC). This flexibility is crucial for enabling the wide range of applications envisioned for 5G.

---

### 1. Evolution Towards Flexible Frame Structures (Aligns with CO1, CO2)

*   **LTE-Advanced Pro:** Introduced some flexibility in subcarrier spacing and the concept of a flexible numerology. However, the frame structure was largely based on fixed-length slots and subframes.
*   **5G NR:** Takes this flexibility to a new level by allowing for a **dynamic and configurable frame structure**. This is a fundamental departure from previous generations and is essential for meeting the diverse demands of 5G services.

**Key Concept:** **Numerology** in 5G refers to the combination of subcarrier spacing (SCS) and slot duration. A flexible numerology allows the network to adapt these parameters based on the service requirements.

---

### 2. Core Components of the 5G NR Frame Structure

The 5G NR frame structure is designed to be highly adaptable. Here are its key components:

*   **Radio Frame:** The basic time unit of transmission, with a fixed duration of 10 milliseconds (ms).
*   **Slots:** Radio frames are divided into slots. The number of slots per radio frame depends on the chosen numerology (specifically, the subcarrier spacing).
*   **Symbols:** Each slot is further divided into symbols. The number of symbols per slot also depends on the numerology.
*   **Mini-slots:** A critical innovation in 5G NR is the introduction of mini-slots, which are shorter sub-divisions of a slot. This allows for very low latency.

**Important Point:** The flexibility arises from the ability to configure the number of slots per radio frame and the number of symbols per slot by varying the subcarrier spacing.

---

### 3. Flexible Numerology and its Impact

The core of 5G NR's frame structure flexibility lies in its support for **multiple numerologies**.

*   **Subcarrier Spacing (SCS):** 5G NR supports SCS of 15 kHz, 30 kHz, 60 kHz, 120 kHz, and 240 kHz. Higher SCS leads to shorter symbol durations and thus shorter slots.
    *   **15 kHz:** Similar to LTE, suitable for coverage-limited scenarios and FDD.
    *   **30 kHz:** A common SCS for balanced performance, supporting eMBB.
    *   **60 kHz:** Offers improved latency and bandwidth efficiency for TDD.
    *   **120 kHz and 240 kHz:** Designed for very high data rates and ultra-low latency services, especially in higher frequency bands.
*   **Slot Duration:** The slot duration is inversely proportional to the SCS.
    *   For 15 kHz SCS, a slot is 1 ms.
    *   For 30 kHz SCS, a slot is 0.5 ms.
    *   For 60 kHz SCS, a slot is 0.25 ms.
    *   For 120 kHz SCS, a slot is 0.125 ms (125 µs).
    *   For 240 kHz SCS, a slot is 0.0625 ms (62.5 µs).

**Example:**
*   If a network uses 15 kHz SCS, a 10 ms radio frame will contain 10 slots, each 1 ms long.
*   If a network uses 30 kHz SCS, a 10 ms radio frame will contain 20 slots, each 0.5 ms long.
*   If a network uses 120 kHz SCS, a 10 ms radio frame will contain 80 slots, each 0.125 ms long.

**Reference:** *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards* by Dr. Sassan Ahmadi highlights the importance of flexible numerology for meeting diverse Quality of Service (QoS) requirements.

---

### 4. Mini-slots for Ultra-Low Latency

*   **Concept:** A slot can be further divided into smaller time units called mini-slots. This allows the transmission and reception of data to occur within a fraction of a slot, significantly reducing latency.
*   **Structure:** A mini-slot can consist of a flexible number of symbols, starting from as few as one symbol.
*   **Application:** Mini-slots are crucial for URLLC services where extremely low latency (e.g., sub-millisecond) is paramount.

**Example:** For a URLLC service requiring a latency of less than 1 ms, a mini-slot consisting of just a few symbols from a 120 kHz or 240 kHz slot can be utilized.

**Reference:** *4G, LTE-Advanced Pro and The Road to 5G* by Dahlman, Skold, and Parkvall discusses the increasing need for lower latency, which 5G NR's mini-slot concept directly addresses.

---

### 5. Flexible Slot Format Configuration

Within each slot (or mini-slot), the resource elements can be allocated to either downlink (DL) or uplink (UL) transmission. This allocation is also flexible.

*   **DL/UL Configuration:** The ratio and arrangement of DL and UL symbols within a slot can be dynamically configured.
*   **Trade-off:** This flexibility allows for efficient resource utilization based on the traffic demand. For example, a slot can be predominantly DL for download-heavy applications or have a balanced DL/UL split for interactive services.
*   **TDD (Time Division Duplexing):** This flexibility is particularly beneficial in TDD systems, where the same carrier frequency is used for both DL and UL, with switching occurring in time.

**Example:** A slot for an eMBB user might have more DL symbols than UL symbols, while a slot for a URLLC device needing to send small control messages might have a single UL symbol followed by a DL symbol.

**Reference:** *An Introduction to 5G: The New Radio, 5G Network and Beyond* by Christopher Cox emphasizes that the ability to tailor slot formats is a cornerstone of 5G's versatility.

---

### 6. Frame Structure Types and Bands

The flexibility of the frame structure is also adapted to different frequency bands and operational modes.

*   **Bandwidth Parts (BWPs):** To efficiently use resources in wider bandwidths (especially at higher frequencies), 5G NR supports Bandwidth Parts. A UE can be configured to use a smaller BWP within a wider channel, reducing processing complexity and power consumption. The SCS can also be different for different BWPs.
*   **TDD vs. FDD:** While flexibility is inherent in NR, the specific configurations (e.g., DL/UL ratios) are often optimized for TDD operation due to its inherent flexibility in allocating time resources. FDD relies on frequency separation for DL and UL.
*   **Coverage vs. Throughput:** Lower SCS (e.g., 15 kHz) generally offers better coverage due to longer symbols and narrower subcarriers, while higher SCS (e.g., 120 kHz, 240 kHz) provides higher throughput and lower latency at the cost of reduced coverage.

**Reference:** *5G Outlook – Innovations and Applications* by Ramjee Prasad discusses how the choice of numerology and frame structure is tightly linked to the deployment scenario and the desired service characteristics.

---

### 7. Benefits of Flexible Frame Structure

*   **Service Diversity:** Supports a wide range of services with vastly different requirements (eMBB, URLLC, mMTC).
*   **Low Latency:** Achieved through shorter slots and mini-slots.
*   **High Throughput:** Enabled by wider bandwidths and higher SCS.
*   **Spectral Efficiency:** Efficient allocation of resources through configurable DL/UL ratios and symbol allocations.
*   **Power Efficiency:** BWPs and adaptable configurations can reduce UE complexity and power consumption.
*   **Backward Compatibility:** While 5G NR is distinct, the foundational concepts of time/frequency resources maintain a logical progression from LTE.

---

### 8. Aligning with Course Outcomes

*   **CO1 (Evolution):** The flexible frame structure represents a significant evolutionary leap from the more rigid structures of LTE. The introduction of mini-slots and dynamic numerology is a key differentiator.
*   **CO2 (Basics of 5G):** This topic is fundamental to understanding the core capabilities and design principles of 5G NR. It explains *how* 5G achieves its performance goals.
*   **CO3 (5G Network):** The frame structure is the underlying temporal and frequency organization of the 5G air interface, impacting how the radio network operates and how devices interact with it.
*   **CO4 (Current State/Challenges):** Understanding the flexibility helps in appreciating the design trade-offs and the ongoing efforts to optimize these structures for various deployment scenarios and evolving use cases.

---

### Key Concepts to Remember

*   **Numerology:** SCS + Slot Duration combination.
*   **Flexible Numerology:** Support for 15, 30, 60, 120, 240 kHz SCS.
*   **Mini-slots:** Shorter sub-divisions of slots for ultra-low latency.
*   **Dynamic DL/UL Configuration:** Flexible allocation of symbols within a slot.
*   **Bandwidth Parts (BWPs):** Efficient resource utilization in wider bandwidths.
*   **Inverse Relationship:** Higher SCS means shorter slots.

---

### Practice Questions

1.  What is "numerology" in the context of 5G NR's flexible frame structure?
2.  List the supported Subcarrier Spacings (SCS) in 5G NR.
3.  How does 5G NR achieve ultra-low latency? Explain the role of mini-slots.
4.  Describe the primary benefit of flexible DL/UL symbol allocation within a slot.
5.  Explain how the choice of SCS affects the slot duration and the overall radio frame structure.
6.  What is a Bandwidth Part (BWP) and how does it contribute to frame structure flexibility?
7.  Compare the typical use cases for 15 kHz SCS and 120 kHz SCS in 5G NR.

---

### Answers to Practice Questions

1.  **Numerology** in 5G NR refers to a specific combination of subcarrier spacing (SCS) and the corresponding slot duration. It defines the fundamental timing and frequency grid for transmissions.
2.  The supported Subcarrier Spacings (SCS) in 5G NR are 15 kHz, 30 kHz, 60 kHz, 120 kHz, and 240 kHz.
3.  5G NR achieves ultra-low latency by utilizing **mini-slots**. Mini-slots are shorter time units within a slot, consisting of a flexible number of symbols (as few as one). This allows for very rapid transmission and reception of data, enabling latency figures in the sub-millisecond range, critical for URLLC services.
4.  The primary benefit of flexible DL/UL symbol allocation within a slot is **efficient resource utilization and adaptability to traffic demands**. It allows the network to dynamically assign more symbols to downlink or uplink based on the service requirements (e.g., more DL for eMBB, balanced DL/UL for interactive services) or the specific needs of a user.
5.  The choice of SCS has an inverse relationship with slot duration. A higher SCS results in shorter symbol durations and, consequently, shorter slot durations. For example, with a 15 kHz SCS, a slot is 1 ms long, while with a 120 kHz SCS, a slot is only 0.125 ms (125 µs) long. This directly impacts how many slots fit within a 10 ms radio frame.
6.  A **Bandwidth Part (BWP)** is a subset of the total available bandwidth within a larger channel. It allows a UE to operate with a smaller bandwidth and potentially a different SCS than the entire channel. BWPs contribute to frame structure flexibility by enabling efficient resource usage and reducing UE complexity and power consumption, especially when dealing with wide channels and diverse service requirements.
7.  *   **15 kHz SCS:** Typically used for scenarios requiring **enhanced coverage** and robustness, such as for devices at the cell edge or in challenging propagation environments. It's also common for FDD deployments and some mMTC scenarios where latency is not the primary concern.
    *   **120 kHz SCS:** Primarily used for achieving **very high data rates** and **ultra-low latency**. It's crucial for eMBB services in higher frequency bands and for URLLC applications. The shorter symbols allow for faster transmission of data packets.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
