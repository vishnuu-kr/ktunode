---
title: "New Radio (NR)"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 3: 5G Network"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0f4"
status: "completed"
scrapedAt: "2026-05-23T18:04:43.744Z"
---
# ADVANCED MOBILE COMMUNICATION

## Module 3: 5G Network

### Topic: New Radio (NR)

---

**Overview:**

This topic delves into the New Radio (NR) interface, the air interface standard for 5G. It explores the fundamental design principles, key technologies, and architectural choices that differentiate NR from its predecessors like LTE. Understanding NR is crucial for comprehending how 5G achieves its ambitious performance goals for enhanced mobile broadband (eMBB), ultra-reliable low-latency communication (URLLC), and massive machine-type communication (mMTC).

---

### Learning Outcomes Covered:

*   **Understanding the fundamental design principles of 5G New Radio (NR).**
*   **Explaining the key enabling technologies for 5G NR, including Flexible numerology, Frame structure, Waveforms, Spectrum sharing, and Massive MIMO.**
*   **Illustrating the differences and similarities between 5G NR and LTE.**
*   **Describing the role of mmWave and Sub-6 GHz spectrum in 5G NR.**
*   **Explaining the concepts of enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC), and massive Machine-Type Communication (mMTC) enabled by NR.**

---

### Key Concepts and Definitions:

*   **5G New Radio (NR):** The global standard for the air interface of 5G networks, developed by 3GPP. It is designed to be a flexible and scalable air interface to support a wide range of services and deployment scenarios.
*   **Numerology:** A set of parameters that define the subcarrier spacing (SCS) and symbol duration for a specific transmission. NR's flexible numerology allows different services and deployment scenarios to use different SCSs, optimizing for latency, throughput, and coverage.
*   **Subcarrier Spacing (SCS):** The distance between adjacent subcarriers in the frequency domain. In LTE, SCS is fixed at 15 kHz. NR supports SCSs of 15, 30, 60, 120, and 240 kHz.
*   **Time Domain Duplex (TDD):** A duplexing technique where the same frequency band is used for both transmission and reception, but at different times. This is a primary duplexing mode for NR in many deployments.
*   **Frequency Domain Duplex (FDD):** A duplexing technique where separate frequency bands are used for transmission and reception. NR also supports FDD.
*   **Frame Structure:** The organization of radio resources in time. NR employs a flexible frame structure with configurable slot durations and a variety of subframe types.
*   **Waveforms:** The mathematical representation of the transmitted signal. NR utilizes Orthogonal Frequency Division Multiplexing (OFDM) as its core waveform, similar to LTE, but with variations for flexibility.
*   **Spectrum Sharing:** Mechanisms that allow different users or services to share the same spectrum resources more efficiently. NR incorporates spectrum sharing capabilities.
*   **Massive MIMO (Multiple-Input Multiple-Output):** A technique that uses a large number of antennas at the base station to improve spectral efficiency and coverage.
*   **Beamforming:** A signal processing technique used in antenna arrays to direct a signal in a specific direction. It is essential for mmWave communication and Massive MIMO.
*   **mmWave (millimeter wave) Spectrum:** High-frequency bands (typically 24 GHz to 100 GHz) that offer a large amount of bandwidth, enabling very high data rates but with limited range and poor penetration.
*   **Sub-6 GHz Spectrum:** Frequency bands below 6 GHz, which are also used for 5G NR. These bands offer better coverage and penetration than mmWave but have less available bandwidth.
*   **eMBB (enhanced Mobile Broadband):** A 5G service category focused on providing significantly higher data rates, increased capacity, and improved user experience for mobile devices, supporting applications like high-definition video streaming and virtual reality.
*   **URLLC (Ultra-Reliable Low-Latency Communication):** A 5G service category designed for mission-critical applications that require extremely low latency (e.g., sub-millisecond) and very high reliability (e.g., 99.999% or more). Examples include autonomous driving and remote surgery.
*   **mMTC (massive Machine-Type Communication):** A 5G service category designed to support a very large number of connected devices, typically with low data rates and infrequent communication, such as IoT sensors and smart meters.
*   **Control Resource Set (CORESET):** A resource block that carries control information for a User Equipment (UE).
*   **Physical Downlink Control Channel (PDCCH):** The channel used for downlink control signaling.
*   **Physical Uplink Control Channel (PUCCH):** The channel used for uplink control signaling.
*   **Physical Downlink Shared Channel (PDSCH):** The channel used for downlink data transmission.
*   **Physical Uplink Shared Channel (PUSCH):** The channel used for uplink data transmission.
*   **Graphene-Enhanced 5G:** While not a core NR technology, it's a research area for future enhancements, exploring advanced materials for antenna design and efficiency. (Mentioned in reference books as a forward-looking concept).

---

### 1. Fundamental Design Principles of 5G NR:

NR was designed with flexibility and scalability as core tenets to meet diverse service requirements.

*   **Service Agnosticism:** NR is not tied to specific service types (like eMBB, URLLC, mMTC). Instead, it provides a flexible framework that can be configured to meet the needs of various services.
    *   *Reference:* Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards.* (Chapter 1: Introduction to 5G NR)
*   **Flexibility and Scalability:** NR is designed to adapt to different spectrum bands (Sub-6 GHz, mmWave), deployment scenarios (standalone, non-standalone), and service requirements.
    *   *Key Aspect:* This flexibility is achieved through features like flexible numerology, configurable slot formats, and adaptable frame structures.
*   **Efficiency and Performance:** NR aims for improved spectral efficiency, energy efficiency, and latency compared to LTE.
*   **Global Standardization:** NR is a globally standardized air interface by 3GPP, ensuring interoperability across different vendors and operators.

---

### 2. Key Enabling Technologies for 5G NR:

#### 2.1. Flexible Numerology:

This is a cornerstone of NR's flexibility. Different services have different requirements for latency and data rate.

*   **Concept:** NR allows the use of different subcarrier spacings (SCS) and, consequently, different symbol durations.
*   **NR SCS Values:** 15, 30, 60, 120, 240 kHz. (LTE uses only 15 kHz).
*   **Relationship:**
    *   Higher SCS $\implies$ Shorter symbol duration $\implies$ Lower latency.
    *   Higher SCS $\implies$ Wider channel bandwidths are more efficient for transmitting more data.
    *   Lower SCS $\implies$ Longer symbol duration $\implies$ Better coverage and resilience against frequency-selective fading, suitable for URLLC and mMTC.
*   **Examples:**
    *   **eMBB:** Often utilizes 30 kHz or 60 kHz SCS for higher throughput.
    *   **URLLC:** May use 120 kHz or even 240 kHz SCS for ultra-low latency.
    *   **mMTC:** Could potentially use 15 kHz or 30 kHz SCS for wider coverage and lower complexity for simple devices.
*   *Reference:* Dahlman, O., Skold, J., & Parkvall, S. (2016). *4G, LTE-Advanced Pro and The Road to 5G.* (Chapter on Future Evolution, discussing concepts leading to NR's flexibility). Ahmadi (2019) extensively covers numerology.

#### 2.2. Frame Structure:

NR introduces a more flexible frame structure compared to LTE's fixed 1ms TTI.

*   **Configurable Slot Duration:** The duration of a slot can be dynamically adjusted based on the chosen numerology.
    *   For 15 kHz SCS, a slot is 1ms.
    *   For 30 kHz SCS, a slot is 0.5ms.
    *   For 60 kHz SCS, a slot is 0.25ms.
    *   And so on.
*   **Flexible Subframe Structure:** Within a slot, the ratio of downlink (DL) to uplink (UL) symbols can be configured dynamically, especially in TDD operation. This allows for efficient resource allocation based on traffic demand.
*   **Special Symbols:** NR defines new special symbols, including a Guard Period (GP) that can be inserted between DL and UL transmission within a slot, enabling TDD operation with shorter transmission times and reduced overhead.
    *   *Reference:* Ahmadi (2019) dedicates a chapter to frame structure and its flexibility.

#### 2.3. Waveforms:

*   **OFDM (Orthogonal Frequency Division Multiplexing):** NR primarily uses OFDM for both DL and UL, similar to LTE.
*   **CP-OFDM (Cyclic Prefix OFDM):** The standard OFDM variant used in LTE and NR for general data transmission.
*   **DFT-s-OFDM (Discrete Fourier Transform-spread-OFDM):** Also known as SC-FDMA, this waveform is available in NR for uplink. It has a lower Peak-to-Average Power Ratio (PAPR) than CP-OFDM, which is beneficial for UE power efficiency and can also improve coverage in certain scenarios.
    *   *Use Case:* DFT-s-OFDM can be used for URLLC and mMTC where power efficiency is critical.
*   *Reference:* Ahmadi (2019) details waveform choices and their implications.

#### 2.4. Spectrum Sharing:

*   **Concept:** NR is designed to efficiently share spectrum, enabling new deployment models.
*   **License Assisted Access (LAA):** NR can leverage LAA principles to access unlicensed spectrum bands (e.g., 5 GHz).
*   **NR-U (NR in Unlicensed Spectrum):** A more advanced mechanism for NR to operate in unlicensed bands, incorporating Carrier Sensing Adaptive Transmission (CSAT) and enhanced Listen-Before-Talk (LBT) mechanisms for fair coexistence with other technologies.
*   **Dynamic Spectrum Sharing (DSS):** Allows operators to dynamically share spectrum between LTE and NR, facilitating a smoother transition to 5G.
    *   *Reference:* Cox, C. (2020). *An Introduction to 5G: The New Radio, 5G Network and Beyond.* (Discusses spectrum utilization strategies).

#### 2.5. Massive MIMO:

*   **Concept:** Employing a very large number of antennas (tens or hundreds) at the base station (gNB).
*   **Benefits:**
    *   **Increased Spectral Efficiency:** By using beamforming, multiple users can be served simultaneously in the same time-frequency resources without interference (spatial multiplexing).
    *   **Improved Coverage and Signal Quality:** Focused beams can direct more energy towards users, improving signal strength and reducing interference.
    *   **Enhanced Capacity:** More users can be served concurrently.
*   **Beamforming:** Crucial for Massive MIMO. The gNB creates narrow beams to transmit and receive signals, focusing energy towards specific users.
    *   **Analog, Digital, and Hybrid Beamforming:** NR supports various beamforming techniques.
*   **User Equipment (UE) Antenna Count:** UEs also support multiple antennas, but typically far fewer than the gNB.
*   *Reference:* Ahmadi (2019) provides an in-depth look at Massive MIMO and beamforming in NR.

---

### 3. Differences and Similarities between 5G NR and LTE:

| Feature           | LTE (4G)                                  | 5G NR                                                                 | Key Difference/Similarity                                  |
| :---------------- | :---------------------------------------- | :-------------------------------------------------------------------- | :--------------------------------------------------------- |
| **Air Interface** | LTE                                       | 5G NR                                                                 | NR is the new, more flexible air interface.                |
| **Numerology**    | Fixed 15 kHz Subcarrier Spacing (SCS)     | Flexible SCS: 15, 30, 60, 120, 240 kHz                                | NR's flexible numerology is a major enhancement.           |
| **Frame Structure**| Fixed 1ms Transmission Time Interval (TTI) | Flexible slot durations, configurable DL/UL ratio within slots        | NR offers much greater flexibility in time domain.         |
| **Waveforms**     | CP-OFDM                                   | CP-OFDM, DFT-s-OFDM (UL)                                              | NR adds DFT-s-OFDM for UL flexibility and efficiency.      |
| **Spectrum**      | Primarily Sub-6 GHz                       | Sub-6 GHz, mmWave, Unlicensed bands                                   | NR's ability to utilize mmWave is a key differentiator.    |
| **Antenna Tech**  | MIMO                                      | Massive MIMO, Advanced Beamforming                                    | NR leverages Massive MIMO for significant performance gains.|
| **Latency**       | ~10 ms                                    | As low as 1 ms (for URLLC)                                            | NR is designed for much lower latency.                     |
| **Data Rates**    | Up to ~1 Gbps (theoretical peak)          | Up to 10+ Gbps (theoretical peak)                                     | NR offers significantly higher peak and average data rates. |
| **Service Support**| Primarily eMBB                            | eMBB, URLLC, mMTC                                                     | NR is designed to support a broader range of services.     |
| **Control Channels**| PDCCH, PUCCH, PDSCH, PUSCH (fixed structure) | CORESETs, more flexible PDCCH/PUCCH/PDSCH/PUSCH assignments          | NR's control signaling is more adaptable.                  |

*   **Similarities:** Both use OFDM-based waveforms, FDD and TDD duplexing modes, and concepts like MIMO and beamforming (though NR greatly enhances these).
*   *Reference:* Dahlman et al. (2016) provides a good foundation for LTE, allowing for comparison with NR. Ahmadi (2019) and Cox (2020) highlight NR's advancements over LTE.

---

### 4. Role of mmWave and Sub-6 GHz Spectrum in 5G NR:

NR leverages different frequency bands to meet diverse performance objectives.

#### 4.1. Sub-6 GHz Spectrum:

*   **Frequency Range:** Typically from 450 MHz to 6 GHz. This includes existing cellular bands and new mid-band spectrum (e.g., 3.5 GHz).
*   **Advantages:**
    *   **Good Coverage:** Radio waves in these bands propagate well and penetrate buildings and obstacles effectively.
    *   **Wide Area Coverage:** Suitable for macro cell deployments and providing ubiquitous mobile broadband.
    *   **Established Infrastructure:** Reuses some existing infrastructure and knowledge from 4G.
*   **Disadvantages:**
    *   **Limited Bandwidth:** Compared to mmWave, the available bandwidth is limited, which restricts peak data rates.
*   **NR Use Cases:** eMBB (providing enhanced mobile broadband experience), FWA (Fixed Wireless Access), and general mobile connectivity.
*   *Reference:* Cox (2020) discusses spectrum allocation and strategies for Sub-6 GHz.

#### 4.2. mmWave Spectrum:

*   **Frequency Range:** Typically from 24 GHz to 100 GHz.
*   **Advantages:**
    *   **Massive Bandwidth:** Offers very wide contiguous bandwidths (hundreds of MHz or even GHz), enabling extremely high data rates (multi-Gbps).
    *   **High Capacity:** Can support a very dense user environment.
*   **Disadvantages:**
    *   **Limited Range:** Signals are highly directional and attenuate quickly with distance.
    *   **Poor Penetration:** Signals are easily blocked by obstacles like walls, windows, and even rain.
    *   **Requires Line-of-Sight (LoS) or Near-LoS:** Sophisticated beamforming and beam tracking are essential.
*   **NR Use Cases:** Dense urban areas, stadiums, public venues, fixed wireless access, and specific industrial applications where high bandwidth is paramount and short range is acceptable.
*   *Reference:* Ahmadi (2019) dedicates significant attention to mmWave technology and its implementation in NR.

---

### 5. 5G NR Service Categories (eMBB, URLLC, mMTC):

NR's flexibility is key to supporting these three primary service categories.

#### 5.1. Enhanced Mobile Broadband (eMBB):

*   **Focus:** High data rates, increased capacity, and improved user experience for typical mobile broadband services.
*   **NR Enablers:**
    *   **Massive MIMO:** Increases spectral efficiency and capacity.
    *   **mmWave Spectrum:** Provides abundant bandwidth for multi-Gbps speeds.
    *   **Flexible Numerology (e.g., 30, 60 kHz SCS):** Supports higher data throughput.
    *   **Carrier Aggregation:** Combines multiple frequency bands to increase capacity.
*   **Examples:** High-definition video streaming (4K/8K), VR/AR experiences, faster downloads, and improved browsing.
*   *Reference:* Cox (2020) and Ahmadi (2019) extensively cover eMBB and the technologies that enable it.

#### 5.2. Ultra-Reliable Low-Latency Communication (URLLC):

*   **Focus:** Mission-critical applications requiring extremely low latency (sub-millisecond) and very high reliability (e.g., 99.999%).
*   **NR Enablers:**
    *   **Flexible Numerology (e.g., 120, 240 kHz SCS):** Enables very short transmission time intervals and symbol durations, reducing latency.
    *   **Configurable Slot Formats:** Allows for shorter DL/UL slots and dedicated resources for URLLC traffic.
    *   **Mini-Slots:** Shortened transmission opportunities that can be scheduled more frequently.
    *   **Uplink enhancements (e.g., DFT-s-OFDM):** Improves power efficiency for devices transmitting critical data.
    *   **Redundancy and Repetition:** Techniques to ensure reliability of data transmission.
*   **Examples:** Industrial automation, autonomous driving (vehicle-to-vehicle communication), remote surgery, smart grids.
*   *Reference:* Ahmadi (2019) thoroughly explains the NR features tailored for URLLC. Prasad (2016) in his earlier work also touches upon the requirements for latency-sensitive applications.

#### 5.3. Massive Machine-Type Communication (mMTC):

*   **Focus:** Connecting a vast number of devices with low data rates, infrequent communication, and a strong emphasis on power efficiency and low cost.
*   **NR Enablers:**
    *   **Narrow Bandwidth Operation:** NR can support very narrow bandwidths, which are energy-efficient for simple devices.
    *   **Power Saving Features:** optimized signaling and sleep modes for devices.
    *   **Simplified Procedures:** Reduced complexity for device signaling and connection management.
    *   **Potential for Lower SCS (15, 30 kHz):** Can provide better coverage for low-power devices scattered over a wide area.
*   **Examples:** Smart meters, environmental sensors, asset tracking, smart city devices, wearables.
*   *Reference:* Ahmadi (2019) covers mMTC support within NR. Yuan & Yuan (2022) on NOMA might indirectly touch upon resource allocation for massive connectivity scenarios.

---

### Course Outcomes Alignment:

*   **CO1: Illustrate the evolution from 1G to 5G (Knowledge Level: K2)**
    *   This topic implicitly covers the evolution by explaining how NR builds upon LTE (4G) and introduces new capabilities and spectrum utilization that define 5G. The comparison section directly addresses the advancements.
*   **CO2: Explain the basics of 5G (Knowledge Level: K2)**
    *   NR is the core of the 5G radio access network. Understanding NR's numerology, frame structure, waveforms, spectrum, and service categories is fundamental to explaining 5G basics.
*   **CO3: Illustrate 5G network (Knowledge Level: K2)**
    *   While this topic focuses on the *New Radio* (the air interface), the radio interface is a critical component of the overall 5G network. The service categories (eMBB, URLLC, mMTC) and spectrum usage directly influence how the 5G network is designed and deployed.
*   **CO4: Describe the current state and challenges ahead in 5G (Knowledge Level: K2)**
    *   The discussion of mmWave spectrum, its challenges (propagation, penetration), and the need for advanced beamforming addresses current implementation challenges. The integration of different service categories also highlights ongoing development.

---

### Important Points to Remember:

*   **Flexibility is Key:** NR's design prioritizes flexibility to cater to diverse 5G use cases.
*   **Numerology is Fundamental:** The ability to adapt subcarrier spacing and symbol duration is central to NR's performance.
*   **mmWave vs. Sub-6 GHz:** Each spectrum band has distinct advantages and disadvantages, and NR leverages both.
*   **Massive MIMO is a Game Changer:** It significantly enhances spectral efficiency and capacity through advanced antenna techniques.
*   **NR is Not Just Faster 4G:** It's a fundamentally different air interface designed for a wider range of services, including low latency and massive connectivity.
*   **Service Categories Drive Design:** eMBB, URLLC, and mMTC are the primary use cases that shaped NR's development.

---

### Practice Questions:

1.  **Explain the concept of flexible numerology in 5G NR. How does changing the subcarrier spacing (SCS) affect latency and achievable data rates? (Relates to LO 2, CO2)**
2.  **Compare and contrast the frame structure of 5G NR with that of LTE. What are the benefits of NR's flexible frame structure? (Relates to LO 3, CO2)**
3.  **Describe the advantages and disadvantages of using mmWave spectrum for 5G NR. Provide an example of a scenario where mmWave would be highly beneficial. (Relates to LO 4, CO2, CO4)**
4.  **What are the three main 5G service categories (eMBB, URLLC, mMTC)? For URLLC, identify at least two key NR technologies that enable its ultra-low latency and high reliability requirements. (Relates to LO 5, CO2)**
5.  **How does Massive MIMO contribute to the performance improvements in 5G NR? (Relates to LO 2, CO2)**

---

### Practice Question Answers:

1.  **Flexible Numerology:** Flexible numerology in NR allows for different subcarrier spacings (SCS) such as 15, 30, 60, 120, and 240 kHz.
    *   **Effect of SCS on Latency:** Increasing the SCS shortens the symbol duration. Shorter symbols mean more symbols can fit within a given time frame, reducing the time required to transmit a given amount of data, thus **decreasing latency**.
    *   **Effect of SCS on Data Rates:** While higher SCS leads to shorter symbols, it also generally enables wider channel bandwidths to be utilized more efficiently. Wider bandwidths directly translate to **higher achievable data rates**. Conversely, lower SCS provides longer symbols, which are more robust against frequency-selective fading and better for coverage, but at the cost of lower peak data rates.
2.  **Frame Structure Comparison:**
    *   **LTE:** Has a fixed 1ms Transmission Time Interval (TTI) with a fixed structure of DL, Guard Period (GP), and UL symbols within a subframe.
    *   **5G NR:** Offers a much more flexible frame structure. Slot durations are variable and depend on the numerology (e.g., 0.5ms for 30kHz SCS, 0.25ms for 60kHz SCS). Within a slot, the ratio of DL to UL symbols can be dynamically configured, and special symbols (including GPs) can be inserted to facilitate TDD operation with much greater flexibility. This allows for shorter transmission opportunities (mini-slots) and better adaptation to traffic demands and service requirements.
    *   **Benefits of NR's Flexibility:** Improved latency, better resource utilization, support for diverse services, and efficiency in TDD deployments.
3.  **mmWave Spectrum in 5G NR:**
    *   **Advantages:**
        *   **Massive Bandwidth:** Enables multi-Gbps data rates.
        *   **High Capacity:** Supports dense user environments.
    *   **Disadvantages:**
        *   **Limited Range:** Signals attenuate quickly.
        *   **Poor Penetration:** Easily blocked by obstacles.
        *   **Requires Line-of-Sight (LoS):** Demands advanced beamforming.
    *   **Beneficial Scenario:** A crowded outdoor stadium during a major event. mmWave can provide high-bandwidth connectivity to thousands of users simultaneously for immersive experiences or live streaming, despite the short range and need for precise beam management.
4.  **5G Service Categories & URLLC Enablers:**
    *   **eMBB (enhanced Mobile Broadband):** High data rates, capacity.
    *   **URLLC (Ultra-Reliable Low-Latency Communication):** Low latency, high reliability for critical applications.
    *   **mMTC (massive Machine-Type Communication):** Large number of devices, low data rates, power efficiency.
    *   **Two key NR technologies for URLLC:**
        *   **Flexible Numerology (e.g., 120, 240 kHz SCS):** Short symbol durations lead to reduced latency.
        *   **Mini-Slots / Configurable Slot Formats:** Enables shorter transmission intervals and dynamic DL/UL allocation, minimizing transmission delays.
5.  **Massive MIMO Contribution:** Massive MIMO, by employing a large number of antennas at the base station, significantly enhances 5G NR performance by:
    *   **Increasing Spectral Efficiency:** Through spatial multiplexing, multiple users can be served simultaneously in the same time-frequency resources without interference.
    *   **Improving Signal Quality and Coverage:** Beamforming directs energy precisely to users, reducing interference and strengthening the signal.
    *   **Boosting Capacity:** By serving more users concurrently, overall network capacity is increased.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
