---
title: "Optical networks  – General description of SONET/SDH"
subject: "OPTICAL COMMUNICATION"
module: "Module 4: Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4d8"
status: "completed"
scrapedAt: "2026-05-23T18:08:29.180Z"
---
# Optical Communication: Module 4 - Multiplexing Strategies and Optical Networks

## Topic: Optical Networks – General Description of SONET/SDH

---

### Course Outcomes Addressed:

*   **CO4: Describe the concepts of Multiplexing, Optical Networks and Free Space Communication (Knowledge Level: K2)**

This topic directly contributes to understanding Optical Networks, a key concept within CO4.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental concepts of Synchronous Optical Networking (SONET) and Synchronous Digital Hierarchy (SDH).
*   Identify the purpose and benefits of SONET/SDH in optical communication networks.
*   Describe the basic architecture and structure of SONET/SDH.
*   Explain the concept of multiplexing within SONET/SDH.
*   Recognize the interrelationship between SONET and SDH.

---

### 1. Introduction to Optical Networks

Optical networks form the backbone of modern telecommunications, enabling high-speed data transmission over long distances using optical fibers. The increasing demand for bandwidth necessitates efficient ways to manage and transport various types of traffic. Multiplexing strategies are crucial in this regard, allowing multiple signals to share a single optical fiber. SONET and SDH are foundational standards that define how these optical signals are multiplexed, transported, and managed within synchronous networks.

---

### 2. Synchronous Optical Networking (SONET)

**Key Concept:** SONET (Synchronous Optical Networking) is a set of standards for digital transmission over optical fiber. It was developed in North America and Japan. SONET provides a standardized, efficient, and reliable way to transport digital signals over optical fiber lines, enabling the development of robust and scalable telecommunication networks.

**Purpose and Benefits:**

*   **Standardization:** Provides a universal standard for digital optical transmission, ensuring interoperability between equipment from different manufacturers.
*   **Efficiency:** Offers efficient multiplexing of various signal types (e.g., voice, data) onto a single optical fiber.
*   **Scalability:** Allows for easy network expansion by adding higher-speed interfaces and equipment.
*   **Reliability:** Incorporates features for network protection and fault management, ensuring high availability.
*   **Management:** Provides integrated network management capabilities for monitoring, configuration, and fault detection.

**Basic Architecture and Structure:**

SONET networks are built around a hierarchical structure based on a fundamental building block called the **Synchronous Transport Signal (STS)**.

*   **STS-1:** The basic STS signal in SONET, with a data rate of 51.84 Mbps. This is the fundamental unit from which higher-speed signals are derived.
*   **Synchronous Transport Module (STM):**
    *   **SPE (Synchronous Payload Envelope):** The payload portion of the STS frame, carrying user data. The SPE is dynamically positioned within the STS frame, allowing for flexible access to the payload.
    *   **Section Overhead:** Information for line termination, alarm reporting, and performance monitoring between two adjacent regenerators or terminal equipment.
    *   **Line Overhead:** Information for end-to-end transmission between the two endpoints of a physical line, including management and control data.
    *   **Path Overhead:** Information for end-to-end communication between the source and destination of a specific service (e.g., a voice call or data stream), including performance monitoring and service identification.

*   **OC-N:** Optical Carrier level N. This is the optical representation of the STS-N signal.
    *   **OC-3:** Corresponds to STS-3, with a data rate of 155.52 Mbps.
    *   **OC-12:** Corresponds to STS-12, with a data rate of 622.08 Mbps.
    *   **OC-48:** Corresponds to STS-48, with a data rate of 2.488 Gbps.
    *   **OC-192:** Corresponds to STS-192, with a data rate of 9.953 Gbps.

**Multiplexing within SONET:**

SONET employs a synchronous multiplexing scheme. Lower-speed signals are byte-interleaved to form higher-speed signals.

*   **Tributary Signals:** Various lower-speed signals (e.g., DS-1 at 1.544 Mbps, DS-3 at 44.736 Mbps) are mapped into the SPE.
*   **Byte Interleaving:** Multiple STS-1 frames are interleaved byte-by-byte to create higher-order STS-N frames. For example, three STS-1 frames are multiplexed to form an STS-3 frame.

**Example:** To transmit multiple phone calls (each carried by a DS-1 signal), these DS-1 signals are first multiplexed into a DS-3 signal, and then the DS-3 signal is mapped into the SPE of an STS-1 frame. Multiple STS-1 frames are then combined to form an OC-3 signal, which is transmitted over optical fiber.

**Key Components (Conceptual):**

*   **Add/Drop Multiplexers (ADMs):** Devices that allow lower-speed signals to be dropped from or added to a higher-speed optical line without demultiplexing the entire line. This is crucial for efficient network branching.
*   **Terminal Multiplexers (TMs):** Devices used at the endpoints of a SONET network to terminate the optical lines and interface with other network equipment.
*   **Regenerators:** Devices used to amplify and reshape the optical signal to compensate for attenuation and dispersion over long distances.

**Important Points to Remember:**

*   SONET is a North American standard.
*   The fundamental unit is STS-1 (51.84 Mbps).
*   Higher speeds are achieved by synchronous multiplexing (byte interleaving).
*   Overhead bytes are essential for network management and control.
*   ADMs are key for efficient network drops and adds.

**Referencing Textbooks:**

*   **Gerd Keiser (5th/e, 2021):** Likely covers SONET in detail under chapters related to optical network architectures and transmission systems. Focus on the hierarchy of signals, frame structure, and multiplexing principles.
*   **John M. Senior (3rd/e, 2014):** Similar to Keiser, Senior's book would provide a comprehensive explanation of SONET, emphasizing its role in digital transmission and network structure.
*   **Joseph C. Palais (5th/e, 2013):** Palais's text might focus on the system-level aspects and how SONET integrates with optical components and transmission.

---

### 3. Synchronous Digital Hierarchy (SDH)

**Key Concept:** SDH (Synchronous Digital Hierarchy) is the international equivalent of SONET, developed by the ITU-T. While the fundamental principles are similar, SDH has a slightly different frame structure and nomenclature.

**Purpose and Benefits:**

The purpose and benefits of SDH are largely identical to those of SONET, reflecting its role as a global standard for synchronous optical networks:

*   **Global Standardization:** Facilitates international telecommunication interoperability.
*   **Efficient Transport:** Optimized for transporting international digital traffic streams.
*   **Flexibility and Scalability:** Supports a wide range of tributary signals and offers modular growth.
*   **Robust Network Management:** Integrated management and fault reporting capabilities.
*   **Resilience:** Designed with features for network survivability and protection.

**Basic Architecture and Structure:**

SDH is also based on a hierarchical structure, but its basic building block is the **Synchronous Transport Module (STM)**.

*   **Virtual Container (VC):** The payload portion of an SDH signal. VCs are like SPEs in SONET but offer more flexibility in carrying different signal types.
    *   **VC-11, VC-12:** Used for low-speed signals like E1 (2.048 Mbps).
    *   **VC-2:** Used for intermediate speeds.
    *   **VC-3:** Used for signals like DS-3 (44.736 Mbps).
    *   **VC-4:** The basic payload container in SDH, equivalent to an STS-1 payload.
*   **Administrative Unit (AU):** A higher-order container that envelops VCs and includes management overhead.
    *   **AU-4:** Envelops a VC-4.
*   **Transport Module (TM):** The overall frame structure.
    *   **STM-0:** The smallest STM, essentially a single VC-4 payload mapped into a 155.52 Mbps frame (similar to OC-3).
    *   **STM-1:** The basic STM-1 frame at 155.52 Mbps. This is the international equivalent of OC-3.
    *   **STM-4:** Corresponds to 622.08 Mbps (equivalent to OC-12).
    *   **STM-16:** Corresponds to 2.488 Gbps (equivalent to OC-48).
    *   **STM-64:** Corresponds to 9.953 Gbps (equivalent to OC-192).

**SDH Overhead:**

SDH also has overhead bytes for network management, monitoring, and control. These are organized into:

*   **Section Overhead:** Similar to SONET's section overhead, used between regenerators.
*   **Line Overhead:** Used between line terminals.
*   **Path Overhead:** Used end-to-end for service-specific management.

**Multiplexing within SDH:**

SDH uses a hierarchical multiplexing scheme that is conceptually similar to SONET but with different container sizes and multiplexing steps.

*   **Tributary Signals:** Various European and international signals (e.g., E1 at 2.048 Mbps, E3 at 34.368 Mbps) are mapped into VCs.
*   **VC Aggregation:** Lower-order VCs (like VC-11, VC-12) are multiplexed to form higher-order VCs (like VC-4).
*   **AU and TM Alignment:** VCs are then aligned within AUs, and AUs are organized into STM frames.

**Example:** An E1 signal (2.048 Mbps) is first mapped into a VC-12. Multiple VC-12s can be multiplexed to form a VC-3, which is then multiplexed into a VC-4. The VC-4 forms the payload of an STM-1 frame (155.52 Mbps).

**Interrelationship between SONET and SDH:**

SONET and SDH are designed to be largely compatible.

*   **Equivalency:** OC-3 in SONET is equivalent to STM-1 in SDH. OC-48 is equivalent to STM-16, and OC-192 is equivalent to STM-64.
*   **Mapping:** SONET signals can be mapped into SDH frames and vice versa, allowing for interoperability between networks based on either standard.
*   **Differences:** The primary differences lie in their original tributary signal structures and some overhead byte assignments, reflecting their North American and international origins.

**Key Components (Conceptual):**

*   **Add/Drop Multiplexers (ADMs):** Similar to SONET ADMs, used for efficient grooming of traffic.
*   **Terminal Multiplexers (TMs):** For end-to-end termination of SDH lines.
*   **Regenerators:** For signal amplification and reshaping.
*   **Digital Cross-Connects (DXCs):** Used for connecting and reconfiguring different SDH streams, facilitating traffic grooming and network flexibility.

**Important Points to Remember:**

*   SDH is the international standard, equivalent to SONET.
*   STM-1 (155.52 Mbps) is the international equivalent of OC-3.
*   SDH uses Virtual Containers (VCs) for payload transport.
*   Both SONET and SDH are synchronous multiplexing standards.
*   They are largely interoperable.

**Referencing Textbooks:**

*   **Gerd Keiser (5th/e, 2021):** Keiser would provide a comparative analysis of SONET and SDH, highlighting their structural similarities and differences, and their importance in global telecommunications.
*   **John M. Senior (3rd/e, 2014):** Senior's book would likely detail the SDH frame structure, overhead bytes, and the multiplexing hierarchy, drawing parallels with SONET.
*   **Fibre Optic Communications by Joseph C. Palais (5th/e, 2013):** Palais might offer a system-level perspective, explaining how SDH networks are deployed and managed.
*   **Fibre optic Communication: Systems and Components by Mishra and Ugale, (Wiley, 2019):** This book could provide detailed insights into the specific components used in SDH networks.

---

### 4. Role of SONET/SDH in Optical Networks

SONET/SDH provided the essential framework for building reliable and scalable optical transport networks for decades. They defined how digital signals were organized, multiplexed, and transported efficiently over optical fiber.

*   **Foundation for WDM:** SONET/SDH signals formed the basis for wavelength channels in early Dense Wavelength Division Multiplexing (DWDM) systems. Each OC-N or STM-N signal was typically assigned to a single wavelength.
*   **Network Management Layer:** SONET/SDH overhead bytes provided critical management and monitoring capabilities, which were essential for operating complex optical networks.
*   **Evolution:** While newer technologies like Ethernet-based transport and GMPLS (Generalized Multiprotocol Label Switching) are becoming more prevalent, SONET/SDH infrastructure still exists in many networks and forms a basis for understanding hierarchical optical transport.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the fundamental building block of SONET, and what is its approximate data rate?
a) OC-3, 155.52 Mbps
b) STS-1, 51.84 Mbps
c) STM-1, 155.52 Mbps
d) OC-48, 2.488 Gbps

**Question 2:**
Which of the following is the international equivalent of SONET's OC-3?
a) STM-4
b) OC-12
c) STM-1
d) STS-3

**Question 3:**
Explain the concept of byte-interleaving in SONET. How does it contribute to creating higher-speed signals?

**Question 4:**
What is the primary purpose of overhead bytes in SONET/SDH frames?

**Question 5:**
Describe the role of an Add/Drop Multiplexer (ADM) in a SONET/SDH network.

---

### 6. Answers to Practice Questions

**Answer 1:**
b) STS-1, 51.84 Mbps
*   **Explanation:** STS-1 is the fundamental synchronous transport signal in SONET, with a rate of 51.84 Mbps. OC-3 is an optical representation of three STS-1 signals multiplexed together.

**Answer 2:**
c) STM-1
*   **Explanation:** STM-1 in SDH is the international standard equivalent to SONET's OC-3, both operating at a data rate of 155.52 Mbps.

**Answer 3:**
Byte-interleaving is the process in SONET where multiple lower-speed signals (e.g., STS-1 frames) are combined byte by byte to form a higher-speed signal (e.g., an STS-3 frame). This synchronous method allows for efficient packing of data and efficient multiplexing of various tributaries into a single high-speed optical transmission.

**Answer 4:**
The primary purpose of overhead bytes in SONET/SDH frames is for network management, control, and monitoring. These bytes carry information such as:
*   **Synchronization:** Ensuring that transmitting and receiving equipment are synchronized.
*   **Performance Monitoring:** Reporting errors and other performance metrics.
*   **Operations, Administration, and Maintenance (OAM):** Facilitating network management tasks like fault detection, isolation, and network configuration.
*   **Traffic Management:** Carrying control information for traffic routing and protection.

**Answer 5:**
An Add/Drop Multiplexer (ADM) is a crucial component in SONET/SDH networks that allows for the selective insertion (adding) or extraction (dropping) of lower-speed tributary signals from a high-speed optical line without disrupting the traffic passing through. This is essential for efficient network grooming, allowing traffic to be added or removed at intermediate points along a network path, thus reducing the need to demultiplex the entire high-speed signal.

---

### 7. Summary and Key Takeaways

*   **SONET (Synchronous Optical Networking):** North American standard for digital optical transmission, based on STS-1 (51.84 Mbps). Uses byte-interleaving for multiplexing.
*   **SDH (Synchronous Digital Hierarchy):** International standard, equivalent to SONET. Based on STM-1 (155.52 Mbps). Uses Virtual Containers for payload transport.
*   **Interoperability:** SONET and SDH are largely interoperable, with direct equivalents in terms of speed and functionality (e.g., OC-3 = STM-1).
*   **Structure:** Both standards feature a hierarchical structure with overhead bytes for management, control, and monitoring.
*   **Components:** Key components include Add/Drop Multiplexers (ADMs), Terminal Multiplexers (TMs), and Regenerators.
*   **Importance:** SONET/SDH provided the foundational infrastructure for optical transport networks, enabling efficient and reliable transmission of diverse traffic.

---

This comprehensive study guide provides a foundational understanding of SONET/SDH within the context of optical networks. Remember to refer to the specified textbooks for more in-depth details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
