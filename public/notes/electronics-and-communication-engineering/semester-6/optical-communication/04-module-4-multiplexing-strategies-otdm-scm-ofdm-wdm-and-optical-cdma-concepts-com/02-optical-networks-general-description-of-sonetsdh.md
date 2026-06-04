---
title: "Optical networks – General description of SONET/SDH"
subject: "OPTICAL COMMUNICATION"
module: "Module 4: Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef0d"
status: "completed"
scrapedAt: "2026-05-23T18:02:21.254Z"
---
# Optical Communication: Module 4 - Multiplexing Strategies and Optical Networks

## Topic: Optical Networks – General Description of SONET/SDH

### Learning Outcomes:

*   Understand the fundamental principles and necessity of optical networks.
*   Describe the basic architecture and functionality of SONET and SDH.
*   Explain the multiplexing hierarchy and frame structure of SONET/SDH.
*   Identify the key components and their roles within SONET/SDH networks.
*   Appreciate the advantages and limitations of SONET/SDH in modern optical communication systems.

---

### 1. Introduction to Optical Networks

**1.1 What is an Optical Network?**

An optical network is a communication network that uses optical fibers as the transmission medium to carry information. These networks are designed to transmit data at high speeds and over long distances, leveraging the vast bandwidth capabilities of light.

**Key Concepts:**

*   **Transmission Medium:** Optical fiber, which guides light signals.
*   **Data Transmission:** Information encoded as light pulses or variations in light intensity/wavelength.
*   **High Bandwidth:** The ability to carry a large amount of data simultaneously.
*   **Long Reach:** The capacity to transmit signals over significant distances with minimal loss.

**1.2 Necessity of Optical Networks:**

The exponential growth in data traffic driven by the internet, multimedia services, and mobile communications has necessitated the development of high-capacity and high-speed networks. Optical networks provide the solution to this demand due to:

*   **Bandwidth:** Optical fibers offer bandwidths orders of magnitude greater than traditional copper-based networks.
*   **Speed:** Light travels extremely fast, enabling high data transmission rates.
*   **Low Attenuation:** Optical fibers exhibit much lower signal loss per unit length compared to metallic cables.
*   **Immunity to Electromagnetic Interference (EMI):** Optical signals are not affected by EMI, leading to higher signal integrity.
*   **Security:** Tapping into optical fibers is more difficult and detectable.

**[Ref: Keiser, 5th/e, Chapter 1 & 8; Senior, 3rd/e, Chapter 1 & 10; Palais, 5th/e, Chapter 1 & 10]**

---

### 2. Synchronous Optical Networking (SONET) and Synchronous Digital Hierarchy (SDH)

**2.1 Overview:**

SONET (Synchronous Optical Networking) and SDH (Synchronous Digital Hierarchy) are standardized multiplexing protocols for digital optical networks. They define how digital traffic is aggregated, transmitted, and managed over optical fiber.

*   **SONET:** Developed by the US-based Exchange Carriers Standards Association (ECSA), primarily used in North America and Japan.
*   **SDH:** Developed by the International Telecommunication Union Telecommunication Standardization Sector (ITU-T), primarily used in Europe and other parts of the world.

While there are slight differences in their framing and multiplexing structures, they are largely functionally equivalent. SDH can be seen as a superset of SONET, incorporating more flexibility and support for a wider range of digital signals.

**Key Concepts:**

*   **Synchronous:** Both systems rely on a master clock to synchronize all network elements, ensuring efficient and orderly data transfer.
*   **Multiplexing:** The process of combining multiple lower-speed signals into a single higher-speed signal for transmission over a common medium.
*   **Hierarchy:** Both SONET and SDH define a hierarchy of signal rates and multiplexing stages, allowing for efficient aggregation of various digital bit rates.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10; Palais, 5th/e, Chapter 10]**

**2.2 Need for SONET/SDH:**

Before SONET/SDH, telecommunication networks relied on asynchronous Time Division Multiplexing (TDM) systems. These systems had several drawbacks:

*   **Inefficiency:** Asynchronous multiplexing required guard bands and stuffing bits to align asynchronous signals, leading to wasted bandwidth.
*   **Lack of Synchronization:** Without a common clock, it was difficult to manage and troubleshoot the network.
*   **Difficulty in Interconnection:** Interconnecting different vendors' equipment was challenging due to proprietary multiplexing schemes.
*   **Limited Network Management:** Network management and fault detection were rudimentary.

SONET/SDH addressed these issues by providing:

*   **Synchronous Multiplexing:** Efficiently combines digital signals into a synchronous frame.
*   **Standardization:** Defines a universal standard for optical transmission, enabling interoperability between equipment from different manufacturers.
*   **Integrated Network Management:** Incorporates robust mechanisms for network monitoring, fault detection, and restoration.
*   **Flexibility:** Can accommodate a wide range of digital tributaries, from low-speed voice channels to high-speed data streams.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10]**

---

### 3. SONET Multiplexing Hierarchy and Frame Structure

**3.1 SONET Bit Rates and Multiplexing Stages:**

SONET defines a basic building block called the **Synchronous Transport Signal Level 1 (STS-1)**, which operates at a bit rate of **51.84 Mbps**. Higher-order signals are created by multiplexing lower-order signals.

| SONET Signal | Bit Rate (Mbps) | Tributaries |
| :----------- | :-------------- | :---------- |
| **STS-1**    | 51.84           | 1 x 51.84 Mbps |
| **STS-3**    | 155.52          | 3 x STS-1   |
| **STS-12**   | 622.08          | 12 x STS-1  |
| **STS-48**   | 2488.32         | 48 x STS-1  |
| **STS-192**  | 9953.28         | 192 x STS-1 |

*   **STS-N:** Refers to an electrical signal.
*   **OC-N (Optical Carrier Level N):** Refers to the optical signal equivalent of STS-N. For example, OC-3 corresponds to STS-3.

**3.2 SONET Frame Structure (STS-1):**

The STS-1 frame is a basic unit of transmission in SONET. It is a **125-microsecond** duration frame, transmitted at a rate of 8000 frames per second (1/125 µs = 8 kHz).

The STS-1 frame consists of:

*   **Overhead (2 bytes):** Contains information for network management, monitoring, and synchronization.
    *   **Section Overhead (SO):** 3 bytes. Responsible for transmission path monitoring and control between regenerators.
    *   **Line Overhead (LO):** 6 bytes. Responsible for transmission path monitoring and control between multiplexers/demultiplexers.
    *   **Path Overhead (PO):** 1 byte. Responsible for end-to-end transmission path monitoring and control.
*   **Synchronous Payload Envelope (SPE):** 774 bytes. Carries the actual user data and the path overhead.

The STS-1 frame is organized in a rectangular array of **9 rows x 90 columns** (87 columns for payload + 3 columns for section overhead).

**Diagram of STS-1 Frame:**

```
+-----------------+--------------------------------------------+
| Section Overhead| Line Overhead                              |
| (3 bytes)       | (6 bytes)                                  |
+-----------------+--------------------------------------------+
|                 |                                            |
|                 |                                            |
|                 |                                            |
|                 |     Synchronous Payload Envelope (SPE)     |
|                 |              (774 bytes)                   |
|                 |                                            |
|                 |                                            |
|                 |                                            |
+-----------------+--------------------------------------------+
```

**Key Overhead Bytes:**

*   **A1, A2 (Section Overhead):** Frame synchronization, used to identify the start of the frame.
*   **C1 (Section Overhead):** Frame identification number.
*   **J0 (Line Overhead):** Line trace byte, used for identification of the correct line path.
*   **B1 (Line Overhead):** Bit-Interleaved Parity (BIP) for section error monitoring.
*   **C2 (Line Overhead):** Payload type identifier, indicates the type of payload being carried.
*   **H1, H2 (Line Overhead):** Pointer values, used to indicate the location of the SPE within the frame.
*   **D1-D3 (Line Overhead):** Data communications channel for network management.
*   **G1 (Path Overhead):** Path status and control.
*   **B2 (Line Overhead):** BIP for line error monitoring.
*   **F1 (Section Overhead):** User-defined section overhead.
*   **Z1, Z2 (Line Overhead):** Reserved for future use.
*   **V1-V4 (Section Overhead):** Used for multiplexing.

**3.3 Synchronous Payload Envelope (SPE):**

The SPE is the portion of the STS frame that carries the payload (user data) and the path overhead. The location of the SPE within the STS frame is not fixed and is indicated by the **pointers (H1, H2)** in the Line Overhead. This allows for asynchronous tributaries to be mapped into the synchronous SONET frame.

**3.4 Multiplexing into Higher-Order STS-N:**

*   **Add/Drop Multiplexer (ADM):** Allows lower-speed tributaries to be inserted or extracted from a higher-speed stream without demultiplexing the entire stream.
*   **Add/Drop Group (ADG):** A group of lower-order signals that can be multiplexed together.
*   **Dense Time Division Multiplexing (DTDM):** SONET uses a form of DTDM to combine multiple STS-1 signals into higher-order signals like STS-3, STS-12, etc.

**Example:** To create an STS-3 signal (155.52 Mbps), three STS-1 signals (each 51.84 Mbps) are multiplexed together. This multiplexing is done in stages using intermediate signals like STS-3c (concatenated SPE) or by interleaving bytes.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10; Palais, 5th/e, Chapter 10]**

---

### 4. SDH Multiplexing Hierarchy and Frame Structure

**4.1 SDH Bit Rates and Multiplexing Stages:**

SDH also defines a hierarchy of bit rates based on a basic unit called the **Synchronous Transport Module Level 1 (STM-1)**, which operates at **155.52 Mbps**. This is equivalent to SONET's OC-3/STS-3.

| SDH Signal | Bit Rate (Mbps) | Equivalent SONET |
| :--------- | :-------------- | :--------------- |
| **STM-0**  | 13.824          | OC-1/STS-1       |
| **STM-1**  | 155.52          | OC-3/STS-3       |
| **STM-4**  | 622.08          | OC-12/STS-12     |
| **STM-16** | 2488.32         | OC-48/STS-48     |
| **STM-64** | 9953.28         | OC-192/STS-192   |

*   **Note:** STM-0 is not widely used. The primary building block is STM-1.

**4.2 SDH Frame Structure (STM-1):**

The STM-1 frame is also a **125-microsecond** duration frame. However, its structure is organized differently than SONET's STS-1.

The STM-1 frame is a rectangular array of **9 rows x 270 columns**.

*   **Overhead:** Consists of three parts:
    *   **Regenerator Section Overhead (RSO):** 2 bytes (similar to SONET Section Overhead).
    *   **Add/Drop Multiplexer Section Overhead (ADMSO):** 5 bytes (provides management for ADMs).
    *   **Repeaters Section Overhead (RSO):** Not an overhead, but part of the RSO block.
    *   **Line Overhead (LO):** 9 bytes (similar to SONET Line Overhead).
    *   **Section Overhead (SO):** 6 bytes (similar to SONET Section Overhead).
    *   **Path Overhead (PO):** 2 bytes (AU-4 Pointer + Path Overhead).
*   **Synchronous Payload Envelope (SPE) / Virtual Container (VC-4):** 2430 bytes. Carries the user data.

The STM-1 frame contains three **Administrative Units (AUs)**. The most common is the **AU-4**, which carries a **Virtual Container Level 4 (VC-4)**. The AU-4 pointer indicates the start of the VC-4 within the STM-1 frame.

**Diagram of STM-1 Frame:**

```
+-----------------+-------------------------------------------------------------------+
| RSO (2 bytes)   | ADMSO (5 bytes)                                                   |
+-----------------+-------------------------------------------------------------------+
| Section Overhead| Line Overhead (9 bytes)                                           |
| (6 bytes)       |                                                                   |
+-----------------+-------------------------------------------------------------------+
|                 |                                                                   |
|                 |                                                                   |
|                 |                                                                   |
|                 |            Synchronous Payload Envelope (VC-4)                    |
|                 |                   (2430 bytes)                                    |
|                 |                                                                   |
|                 |                                                                   |
|                 |                                                                   |
+-----------------+-------------------------------------------------------------------+
```

**Key Overhead Bytes (SDH):**

*   **A1, A2 (Regenerator Section Overhead):** Frame synchronization.
*   **J0 (Regenerator Section Overhead):** Regenerator section trace byte.
*   **B1 (Regenerator Section Overhead):** BIP for regenerator section error monitoring.
*   **C1 (Regenerator Section Overhead):** STM-N identification.
*   **G1 (Line Overhead):** Path status and control.
*   **H1, H2 (Line Overhead):** AU-4 pointer.
*   **B2 (Line Overhead):** BIP for line error monitoring.
*   **K1, K2 (Line Overhead):** Automatic Protection Switching (APS) signals.
*   **D1-D3 (Line Overhead):** Data communications channel.
*   **E1, E2 (Line Overhead):** Orderwire channels.
*   **F1 (Regenerator Section Overhead):** User channel.

**4.3 Virtual Containers (VCs) and Tributary Units (TUs):**

SDH uses a hierarchical structure of Virtual Containers (VCs) and Tributary Units (TUs) to map different tributary signals into the SDH frame.

*   **VC-11, VC-12:** Carry low-speed tributaries (e.g., E1/DS1).
*   **VC-2:** Carries intermediate speed tributaries.
*   **VC-3:** Carries higher speed tributaries (e.g., DS3).
*   **VC-4:** The basic payload unit within STM-1, carrying multiple VC-3s or lower-order VCs, or directly carrying higher-speed data like Ethernet.

**4.4 Multiplexing into Higher-Order SDH:**

SDH multiplexes lower-order VCs into higher-order VCs and then into STM-N signals. This multiplexing is more structured than SONET's approach.

**Example:** Multiple VC-12s can be multiplexed into a VC-3, and then multiple VC-3s can be multiplexed into a VC-4. Finally, three VC-4s are multiplexed into an STM-1 signal.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10]**

---

### 5. Key Components of SONET/SDH Networks

SONET/SDH networks are built using several key components:

**5.1 Add/Drop Multiplexer (ADM):**

*   **Function:** Allows specific low-speed tributaries (e.g., OC-3/STM-1 tributaries) to be inserted (added) into or extracted (dropped) from a higher-speed optical signal (e.g., OC-48/STM-16) without fully demultiplexing the entire higher-speed stream.
*   **Importance:** Crucial for efficient network grooming and service provisioning at intermediate points in the network.

**5.2 Terminal Multiplexer (TM):**

*   **Function:** Aggregates lower-speed tributary signals into a single high-speed SONET/SDH signal (e.g., OC-3/STM-1) for transmission over a long-haul link or connects a high-speed SONET/SDH signal to a network element that doesn't have SONET/SDH interfaces.
*   **Importance:** Acts as the interface between the tributary network and the SONET/SDH backbone.

**5.3 Regenerator (Repeater):**

*   **Function:** Amplifies and reshapes the optical signal to compensate for attenuation and dispersion over long transmission distances. It typically performs optical-electrical-optical (O-E-O) conversion.
*   **Importance:** Extends the reach of optical signals, allowing for long-haul communication.

**5.4 Digital Cross-Connect System (DXC):**

*   **Function:** A high-capacity digital switch that can connect or disconnect various SONET/SDH signals at different bit rates. It allows for the interconnection of multiple SONET/SDH lines and the rerouting of traffic.
*   **Importance:** Provides flexibility in network routing, configuration, and traffic management, especially in meshed networks.

**5.5 Network Elements:**

These are the physical devices that implement SONET/SDH functionality. Examples include:

*   **Optical Line Terminating Equipment (OLTE):** Terminal multiplexers at the end of an optical line.
*   **Digital Line Terminating Equipment (DLTE):** Regenerators and ADMs.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10]**

---

### 6. Advantages and Limitations of SONET/SDH

**6.1 Advantages:**

*   **Standardization and Interoperability:** Provides a global standard, ensuring compatibility between equipment from different vendors.
*   **Efficient Multiplexing:** Synchronous nature leads to more efficient use of bandwidth compared to asynchronous TDM.
*   **Robust Network Management:** Includes comprehensive overhead bytes for fault detection, performance monitoring, and network control (e.g., Automatic Protection Switching).
*   **High Survivability:** Features like 1+1 or 1:N protection switching (APS) allow for rapid restoration of traffic in case of link failures.
*   **Scalability:** The hierarchical structure allows for easy scaling from lower-speed services to higher-speed backbone transmission.
*   **Support for Diverse Services:** Can carry various types of digital traffic, including voice, data, and video.

**6.2 Limitations:**

*   **Complexity:** The SONET/SDH frame structure and multiplexing hierarchy can be complex to understand and implement.
*   **Overhead Overhead:** A significant portion of the bandwidth is consumed by overhead bytes, especially at lower data rates.
*   **Inefficiency for Packet Data:** While SONET/SDH can carry packet data (e.g., IP traffic), it is not inherently optimized for the bursty nature of packet traffic. Overhead associated with TDM framing can be inefficient for IP.
*   **Cost:** SONET/SDH equipment can be expensive compared to simpler transmission systems.
*   **Evolution to Packet-Switched Networks:** The telecommunications industry is moving towards all-packet networks (e.g., MPLS, Ethernet over IP). While SONET/SDH can transport these, newer technologies like OTN (Optical Transport Network) and ROADMs (Reconfigurable Optical Add-Drop Multiplexers) are gaining prominence for their flexibility and efficiency in packet-centric environments.

**[Ref: Keiser, 5th/e, Chapter 8; Senior, 3rd/e, Chapter 10]**

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary advantage of using synchronous multiplexing in SONET/SDH compared to asynchronous multiplexing?
    *   **Answer:** Synchronous multiplexing ensures that all signals are aligned to a common clock, leading to more efficient bandwidth utilization and simpler network management due to the absence of stuffing bits and guard bands required for asynchronous signals.

**Question 2:** What is the bit rate of an OC-3 signal and what is its equivalent in SDH?
    *   **Answer:** An OC-3 signal operates at 155.52 Mbps. Its equivalent in SDH is STM-1.

**Question 3:** Explain the role of the AU-4 pointer in the SDH frame structure.
    *   **Answer:** The AU-4 pointer (located in the H1 and H2 bytes of the Line Overhead) indicates the starting position of the AU-4 payload (which carries the VC-4) within the STM-1 frame. This allows for the asynchronous payload to be mapped into the synchronous frame.

**Question 4:** What is the function of an Add/Drop Multiplexer (ADM) in a SONET/SDH network?
    *   **Answer:** An ADM allows specific low-speed tributaries to be inserted or extracted from a higher-speed SONET/SDH signal without demultiplexing the entire stream, facilitating network grooming and service provisioning at intermediate network points.

**Question 5:** List two key overhead bytes in the SONET STS-1 frame and their functions.
    *   **Answer:**
        *   **A1, A2 (Section Overhead):** Used for frame synchronization to identify the beginning of each STS-1 frame.
        *   **H1, H2 (Line Overhead):** Contain the pointer value that indicates the location of the Synchronous Payload Envelope (SPE) within the STS frame.

**Question 6:** Briefly discuss a limitation of SONET/SDH when carrying pure packet data traffic.
    *   **Answer:** SONET/SDH's TDM-based framing can be inefficient for the bursty nature of packet data. The fixed overhead associated with the TDM structure can lead to wasted bandwidth when carrying small, intermittent packets. Newer technologies like Ethernet or OTN are better optimized for packet transport.

---

### 8. Important Points to Remember

*   **SONET (North America) and SDH (International) are standardized TDM protocols for optical networks.**
*   **Synchronous multiplexing is key to their efficiency and management.**
*   **Both define a hierarchy of bit rates based on basic signal units (STS-1 for SONET, STM-1 for SDH).**
*   **Overhead bytes are crucial for synchronization, network management, and error monitoring.**
*   **The Synchronous Payload Envelope (SPE) / Virtual Container (VC) carries the user data.**
*   **Pointers (e.g., AU-4 pointer) are used to map asynchronous payloads into synchronous frames.**
*   **Key network components include ADMs, TMs, and Regenerators.**
*   **SONET/SDH offers advantages like standardization, management, and survivability, but can be complex and less efficient for pure packet traffic compared to newer technologies.**

---

### 9. Alignment with Course Outcomes

*   **CO1 (K2): Explain the structure, fabrication, principle of operation and classifications of optical fibers.**
    *   While this topic focuses on networks, understanding the underlying optical fiber medium (low attenuation, high bandwidth) is assumed knowledge.
*   **CO2 (K2): Describe the transmission characteristics and evaluate losses in optical fiber.**
    *   SONET/SDH operates over optical fibers, and the need for regenerators is directly linked to fiber loss and dispersion characteristics.
*   **CO3 (K2): Illustrate the working of sources, detectors and optical amplifiers used in optical communication system.**
    *   These components are essential at the physical layer interfaces for SONET/SDH systems.
*   **CO4 (K2): Explain the concepts of Multiplexing, Optical Networks and Free Space Communication.**
    *   This topic directly addresses **Multiplexing** (TDM, synchronous) and **Optical Networks** (SONET/SDH architecture, components, and purpose).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
