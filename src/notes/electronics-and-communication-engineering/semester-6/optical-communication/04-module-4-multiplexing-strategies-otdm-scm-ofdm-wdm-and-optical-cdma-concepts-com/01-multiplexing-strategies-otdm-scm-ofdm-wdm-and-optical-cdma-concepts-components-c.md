---
title: "Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components - couplers, splitters, Add/ Drop multiplexers, Fiber grating filters, tunable filters."
subject: "OPTICAL COMMUNICATION"
module: "Module 4: Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef0c"
status: "completed"
scrapedAt: "2026-05-23T18:02:20.394Z"
---
# Module 4: Multiplexing Strategies in Optical Communication

This module delves into the fundamental techniques used to increase the data carrying capacity of optical fiber communication systems. We will explore various multiplexing strategies, including Time Division Multiplexing (TDM), Subcarrier Multiplexing (SCM), Orthogonal Frequency Division Multiplexing (OFDM), Wavelength Division Multiplexing (WDM), and Optical Code Division Multiple Access (OCDMA). We will also examine the key optical components essential for implementing these multiplexing schemes.

---

## 4.1 Introduction to Multiplexing in Optical Communication (CO4: K2)

**Key Concept:** Multiplexing is a technique that allows multiple independent data streams (channels) to be transmitted simultaneously over a single optical fiber. This significantly enhances the spectral efficiency and overall capacity of optical communication systems.

**Why Multiplexing is Crucial:**

*   **Increased Bandwidth Utilization:** Optical fibers possess enormous potential bandwidth, far exceeding the requirements of a single data stream. Multiplexing allows us to exploit this vast bandwidth efficiently.
*   **Cost-Effectiveness:** Transmitting multiple signals over one fiber is more economical than deploying separate fibers for each signal.
*   **Network Scalability:** Multiplexing schemes enable the graceful expansion of network capacity as demand grows.

**Types of Multiplexing:**

We will explore the following key multiplexing strategies:

*   **Time Division Multiplexing (TDM)**
*   **Subcarrier Multiplexing (SCM)**
*   **Orthogonal Frequency Division Multiplexing (OFDM)**
*   **Wavelength Division Multiplexing (WDM)**
*   **Optical Code Division Multiple Access (OCDMA)**

---

## 4.2 Time Division Multiplexing (TDM)

**Concept:** In TDM, multiple low-speed data streams are interleaved in the time domain and transmitted as a single high-speed data stream. Each low-speed stream is allocated a specific time slot.

**Key Concepts:**

*   **Time Slots:** Discrete intervals of time allocated to each data stream.
*   **Frame:** A composite data stream consisting of time slots for all multiplexed channels, plus synchronization and overhead bits.
*   **Interleaving:** The process of combining individual data streams into a single stream by assigning time slots.
*   **De-interleaving:** The reverse process at the receiver, where the single high-speed stream is separated back into the original low-speed streams.

**How it Works:**

1.  **At the Transmitter:**
    *   Each low-speed data stream is formatted into frames.
    *   These frames are then interleaved, meaning bits or bytes from each stream are placed into successive time slots within a larger frame.
    *   Synchronization bits are added to help the receiver identify the start of each frame and the boundaries of time slots.
2.  **At the Receiver:**
    *   The receiver synchronizes with the incoming high-speed stream.
    *   Using the synchronization information, it de-interleaves the data, extracting the bits/bytes belonging to each individual low-speed stream from their assigned time slots.

**Advantages:**

*   **Simple Concept:** Easy to understand and implement.
*   **Efficient for Constant Bit Rate (CBR) Traffic:** Well-suited for data streams with predictable data rates.

**Disadvantages:**

*   **Complexity for Variable Bit Rate (VBR) Traffic:** Managing time slots for VBR traffic can be inefficient.
*   **Need for Precise Synchronization:** Timing errors can lead to data loss.
*   **Jitter Accumulation:** Significant timing variations can accumulate across multiple TDM stages.

**Example (Conceptual):** Imagine you have three people speaking at different rates. In TDM, you'd give each person a turn to speak for a short, fixed duration, creating a sequence of their speech segments.

**Reference:** Keiser, Chapter 5 (Systems aspects and optical network architectures). Senior, Chapter 7 (Optical Fibre Systems: TDM and FDM).

---

## 4.3 Subcarrier Multiplexing (SCM)

**Concept:** In SCM, each data stream is modulated onto a separate radio frequency (RF) subcarrier. These modulated subcarriers are then multiplexed together, and the combined signal is used to modulate a lightwave.

**Key Concepts:**

*   **Subcarrier:** A carrier frequency used to modulate an information signal before it is used to modulate a primary carrier (in this case, the lightwave).
*   **RF Modulation:** Amplitude Modulation (AM), Frequency Modulation (FM), or Phase Modulation (PM) are typically used to modulate data onto the subcarriers.
*   **Electrical Multiplexing:** The multiplexing of the subcarrier-modulated signals is performed electronically.

**How it Works:**

1.  **At the Transmitter:**
    *   Each data stream is modulated onto a unique RF subcarrier frequency.
    *   These RF signals are then combined (multiplexed) in the electrical domain.
    *   The multiplexed RF signal is used to modulate the intensity or frequency of a laser diode.
2.  **At the Receiver:**
    *   The optical signal is converted back to an electrical signal by a photodetector.
    *   The electrical signal is then passed through RF filters to separate the individual subcarrier-modulated signals.
    *   Each separated RF signal is demodulated to recover the original data stream.

**Advantages:**

*   **Compatibility with Existing RF Technology:** Leverages well-established RF modulation and multiplexing techniques.
*   **Independent Channel Allocation:** Channels can be added or removed easily.
*   **Good for Mixed Traffic:** Can carry different types of data (e.g., RF video and digital data).

**Disadvantages:**

*   **Electrical Bandwidth Limitations:** The electrical components must handle the sum of the subcarrier frequencies, which can be a bottleneck.
*   **Intermodulation Distortion:** Non-linearities in the electrical components can create spurious signals.
*   **Lower Spectral Efficiency compared to WDM:** The spacing between subcarriers often requires guard bands.

**Example (Conceptual):** Imagine several radio stations broadcasting on different frequencies. In SCM, you're essentially combining these radio signals and then broadcasting them using a single light source.

**Reference:** Keiser, Chapter 5. Senior, Chapter 8 (Optical Fibre Systems: SCM).

---

## 4.4 Orthogonal Frequency Division Multiplexing (OFDM)

**Concept:** OFDM is a digital modulation scheme that divides a high-speed data stream into multiple lower-speed data streams, which are then transmitted simultaneously over a number of closely spaced orthogonal frequency subcarriers.

**Key Concepts:**

*   **Orthogonality:** A property of the subcarriers such that their frequency spacing is chosen such that they are orthogonal to each other. This allows for perfect separation of the subcarriers at the receiver without inter-channel interference, provided the subcarriers are perfectly orthogonal.
*   **Fast Fourier Transform (FFT) / Inverse Fast Fourier Transform (IFFT):** These mathematical operations are crucial for implementing OFDM efficiently, converting data from the time domain to the frequency domain and vice versa.
*   **Cyclic Prefix (CP):** A copy of the end of the OFDM symbol is appended to the beginning. This combats inter-symbol interference (ISI) caused by multipath propagation.

**How it Works:**

1.  **At the Transmitter:**
    *   The serial high-speed data stream is converted into parallel streams.
    *   Each parallel stream is modulated onto a separate orthogonal subcarrier (typically using QPSK, QAM, etc.).
    *   The modulated subcarriers are combined via an IFFT to create an OFDM symbol.
    *   A cyclic prefix is added to the OFDM symbol.
2.  **At the Receiver:**
    *   The cyclic prefix is removed.
    *   An FFT is applied to the received OFDM symbol to separate the individual subcarriers.
    *   Each subcarrier is demodulated to recover the data stream.
    *   The parallel streams are combined into a serial high-speed data stream.

**Advantages:**

*   **Robustness against ISI and Frequency Selectivity:** The use of many narrow subcarriers makes OFDM resistant to multipath fading and frequency-selective fading.
*   **Efficient Spectral Utilization:** Orthogonal subcarriers minimize guard bands, leading to high spectral efficiency.
*   **Simpler Equalization:** Equalization is simpler in the frequency domain (at the subcarrier level).

**Disadvantages:**

*   **High Peak-to-Average Power Ratio (PAPR):** Requires linear amplifiers, which can be inefficient.
*   **Sensitivity to Frequency Offset:** Synchronization is critical for maintaining orthogonality.

**Example (Conceptual):** Imagine a large orchestra where each musician plays a slightly different note. OFDM is like assigning each musician to a specific, carefully chosen frequency, and the combined sound (data) is harmonious.

**Reference:** Agrawal, Chapter 6 (Multiplexing Techniques). Senior, Chapter 9 (Optical Fibre Systems: OFDM).

---

## 4.5 Wavelength Division Multiplexing (WDM)

**Concept:** WDM is the most prevalent multiplexing technique in optical communication. It involves transmitting multiple optical signals, each at a different wavelength (color) of light, over a single optical fiber.

**Key Concepts:**

*   **Wavelength:** The specific color of light used for each channel.
*   **Wavelength Channels:** Distinct frequency bands allocated to individual data streams.
*   **Dense WDM (DWDM):** Features a large number of channels with very narrow wavelength spacing (typically 0.8 nm, 0.4 nm, or even less), maximizing fiber capacity.
*   **Coarse WDM (CWDM):** Uses fewer channels with wider wavelength spacing (typically 20 nm), making it more cost-effective for shorter distances or lower capacity needs.

**How it Works:**

1.  **At the Transmitter:**
    *   Each data stream is modulated onto a laser diode operating at a specific wavelength.
    *   These different wavelength signals are combined using a **wavelength multiplexer** (e.g., a passive optical component like a filter or grating).
2.  **At the Receiver:**
    *   The combined optical signal is passed through a **wavelength demultiplexer** which separates the different wavelengths.
    *   Each wavelength is then detected by a photodetector, and its corresponding data stream is recovered.

**Advantages:**

*   **Massive Capacity Increase:** Leverages the vast bandwidth of optical fibers by using multiple wavelengths simultaneously.
*   **Transparent to Data Rate and Modulation Format:** Each channel can carry data at different speeds and using different modulation schemes.
*   **Scalable:** New channels can be added by introducing new wavelengths.

**Disadvantages:**

*   **Component Cost:** Lasers and optical filters for specific wavelengths can be expensive, especially for DWDM.
*   **Fiber Non-linearities:** At high power levels, non-linear effects in the fiber can cause crosstalk between channels.
*   **Wavelength Stability:** Lasers need to maintain stable operating wavelengths.

**Example (Conceptual):** Imagine sending multiple different colored light beams down a single pipe. WDM allows each color to carry a separate message.

**Reference:** Keiser, Chapter 5. Senior, Chapter 6 (Optical Fibre Systems: WDM). Palais, Chapter 5 (WDM Systems). Agrawal, Chapter 6.

---

## 4.6 Optical Code Division Multiple Access (OCDMA)

**Concept:** OCDMA allows multiple users to share the same frequency and time resources by assigning unique optical codes to each user. Signals from different users are distinguished by their specific code sequences.

**Key Concepts:**

*   **Spreading Code:** A unique sequence of optical pulses or wavelengths used to encode data for a specific user.
*   **Orthogonal Codes:** Codes that are designed to be uncorrelated with each other, allowing for accurate separation of user signals.
*   **Direct Sequence OCDMA (DS-OCDMA):** Data bits are multiplied by a spreading code (a sequence of short optical pulses).
*   **Frequency Hopping OCDMA (FH-OCDMA):** Data is transmitted by rapidly switching between different carrier frequencies according to a hopping code.

**How it Works (DS-OCDMA Example):**

1.  **At the Transmitter:**
    *   Each user has a unique spreading code.
    *   The data bits are converted into a sequence of optical pulses.
    *   These data pulses are then "spread" by multiplying them with the user's unique optical code sequence (e.g., a sequence of short optical pulses). This results in a much longer, spread-out signal.
2.  **At the Receiver:**
    *   The receiver also possesses the same spreading code for the intended user.
    *   The incoming spread signal is "despread" by multiplying it with the user's code.
    *   Signals from other users, having different codes, will appear as random noise after despreading.
    *   Correlation techniques are used to extract the original data.

**Advantages:**

*   **Asynchronous Access:** Users can transmit without strict time synchronization.
*   **Security:** The unique codes provide a degree of inherent security.
*   **On-Demand Access:** Users can access the network when needed.
*   **Spread Spectrum:** Makes the signal more robust against interference and jamming.

**Disadvantages:**

*   **Bandwidth Expansion:** The spreading process significantly increases the signal bandwidth required.
*   **Code Length and Complexity:** Long codes are needed for good performance, leading to complex encoders and decoders.
*   **Near-Far Problem:** Users closer to the receiver (stronger signal) can cause interference to weaker signals from other users if power control is not adequate.
*   **Lower Spectral Efficiency compared to WDM:** Due to bandwidth expansion and potential for code correlation issues.

**Example (Conceptual):** Imagine a room full of people talking. If everyone speaks at the same time, it's chaotic. In OCDMA, it's like each person has a unique song they are singing simultaneously. You can focus on one song (user) while the others are heard as background music (noise).

**Reference:** Keiser, Chapter 5. Senior, Chapter 10 (Optical Fibre Systems: OCDMA).

---

## 4.7 Key Optical Components for Multiplexing Strategies

These components are essential for the implementation and operation of the multiplexing techniques discussed.

### 4.7.1 Couplers

**Concept:** Couplers are passive optical devices that divide or combine optical power from one or more input fibers to one or more output fibers.

**Types and Functions:**

*   **2x1 Coupler (Combiner):** Combines optical signals from two input fibers into a single output fiber. Used in WDM transmitters to combine different wavelengths.
*   **1x2 Coupler (Splitter):** Splits optical power from one input fiber into two output fibers. Used for monitoring or distributing signals.
*   **NxM Couplers:** More complex configurations with N inputs and M outputs.

**How they work:**

Typically fabricated by fusing and tapering optical fibers. The tapering process brings the cores of the fibers close enough for the evanescent field to interact, allowing power to be exchanged between fibers.

**Example Use in Multiplexing:**
*   **WDM:** 2x1 couplers can be used to combine multiple laser outputs at different wavelengths into a single fiber. 1x2 couplers can split a signal for monitoring purposes.

**Reference:** Palais, Chapter 3 (Fiber Optic Components). Senior, Chapter 4 (Optical Fibre Components and Devices).

---

### 4.7.2 Splitters

**Concept:** A splitter is a type of coupler that divides the optical power from a single input fiber into multiple output fibers. Often used interchangeably with the term "coupler" in the context of power division.

**Types:**

*   **1x2 Splitter:** Divides signal into two outputs.
*   **1x4, 1x8, 1x16, etc. Splitters:** Power is divided among a larger number of outputs. The power per output decreases with the number of outputs.

**Example Use in Multiplexing:**
*   While primarily used for signal distribution or monitoring, a splitter can be part of a more complex optical network architecture where signals are fanned out.

**Reference:** Palais, Chapter 3. Senior, Chapter 4.

---

### 4.7.3 Add/Drop Multiplexers (ADMs)

**Concept:** ADMs are crucial components in WDM networks that allow specific wavelengths (channels) to be added to or dropped from a multiplexed optical signal without disrupting other channels.

**Key Concepts:**

*   **Add Functionality:** A new channel (at a specific wavelength) is inserted into the main multiplexed fiber stream.
*   **Drop Functionality:** An existing channel (at a specific wavelength) is extracted from the main multiplexed fiber stream.
*   **Optical Cross-Connects (OXC):** More advanced devices that can switch entire wavelengths between different fibers.

**How they work:**

ADMs typically use a combination of filters and switches. For example, to drop a channel, a filter (like a Fiber Bragg Grating or a tunable filter) selects the specific wavelength and directs it to an output port, while the remaining wavelengths pass through. To add a channel, a new signal at a specific wavelength is filtered and combined with the main stream.

**Example Use in Multiplexing:**
*   **WDM Networks:** Essential for creating flexible and efficient WDM networks, allowing traffic to be inserted or extracted at intermediate nodes without the need to demultiplex the entire signal.

**Reference:** Keiser, Chapter 5. Agrawal, Chapter 7 (Optical Networks).

---

### 4.7.4 Fiber Bragg Grating (FBG) Filters

**Concept:** An FBG is a short segment of optical fiber with a periodic variation in its refractive index. This periodic structure acts as a highly selective wavelength filter.

**Key Concepts:**

*   **Refractive Index Modulation:** Created by exposing the fiber core to intense UV light, causing permanent changes in the glass structure.
*   **Bragg Condition:** Light at a specific wavelength (the Bragg wavelength, $\lambda_B$) is reflected back, while other wavelengths are transmitted. $\lambda_B = 2n_{eff}\Lambda$, where $n_{eff}$ is the effective refractive index of the fiber mode and $\Lambda$ is the grating period.
*   **Reflective Filter:** Typically used to reflect a specific wavelength.
*   **Transmission Filter:** Can be configured to transmit specific wavelengths.

**How they work:**

When a broadband optical signal is launched into an FBG, constructive interference occurs for light at the Bragg wavelength, causing it to be reflected. All other wavelengths pass through the grating.

**Example Use in Multiplexing:**
*   **WDM Demultiplexing:** A series of FBGs with different Bragg wavelengths can be used to demultiplex a WDM signal by reflecting each channel to a separate detector.
*   **Add/Drop Multiplexers:** FBGs can be used to select and drop specific wavelength channels.
*   **Wavelength Stabilization:** FBGs can be used to stabilize the output wavelength of a laser.

**Reference:** Senior, Chapter 3. Palais, Chapter 4 (Fiber Optic Components). Raghuwanshi, Chapter 5 (Fiber optic gratings).

---

### 4.7.5 Tunable Filters

**Concept:** Tunable filters are optical devices whose filtering characteristics (e.g., center wavelength, bandwidth) can be adjusted electronically or mechanically.

**Key Concepts:**

*   **Tunability:** The ability to change the wavelength that is transmitted or reflected.
*   **Tuning Mechanism:** Can be based on electro-optic effects (e.g., Lithium Niobate), acousto-optic effects, thermo-optic effects, or mechanical movements.

**How they work:**

Different physical principles are employed for tuning. For example, a tunable filter might use an electric field to change the refractive index of a material, thereby shifting the filter's passband. Or, it might use micro-mirrors to steer light to different filter elements.

**Example Use in Multiplexing:**
*   **WDM Networks:** Crucial for dynamic wavelength routing and reconfigurable optical networks. They can be used to select specific channels for Add/Drop functionality or to re-route wavelengths.
*   **Optical Spectrum Analyzers:** Used to measure the spectrum of optical signals.
*   **Tunable Transmitters/Receivers:** Allow for flexibility in network configuration and management.

**Reference:** Senior, Chapter 3. Palais, Chapter 4.

---

## 4.8 Practice Questions and Answers

**Question 1:** Explain the fundamental principle of Time Division Multiplexing (TDM) and its advantages in optical communication. (CO4: K2)

**Answer:** TDM works by interleaving time slots from multiple low-speed data streams into a single high-speed data stream. Each data stream is assigned a specific time slot in a repeating frame. The advantage is efficient utilization of bandwidth for constant bit rate traffic and conceptual simplicity.

**Question 2:** What is the key difference between WDM and SCM in terms of how multiplexing is achieved? (CO4: K2)

**Answer:** WDM multiplexes signals by using different wavelengths (colors) of light, with multiplexing and demultiplexing occurring in the optical domain. SCM multiplexes signals in the electrical domain by modulating each data stream onto a separate RF subcarrier, and then this combined RF signal is used to modulate a single lightwave.

**Question 3:** Describe the role of a Fiber Bragg Grating (FBG) in a WDM system. (CO4: K2)

**Answer:** An FBG acts as a highly selective optical filter. In a WDM system, FBGs can be used for demultiplexing by reflecting specific wavelengths to separate detectors, or in Add/Drop multiplexers to select and extract (drop) or insert (add) particular wavelength channels.

**Question 4:** How does OFDM combat Inter-Symbol Interference (ISI)? (CO4: K2)

**Answer:** OFDM combats ISI by dividing the data stream into many parallel, lower-speed streams transmitted on orthogonal subcarriers. By adding a cyclic prefix (CP) to each OFDM symbol, which is a copy of the end of the symbol appended to the beginning, the interference between adjacent symbols caused by multipath propagation is converted into intra-symbol interference on the subcarriers, which can be easily removed by the FFT at the receiver.

**Question 5:** What is the main challenge associated with OCDMA, and how is it addressed? (CO4: K2)

**Answer:** A primary challenge in OCDMA is the "near-far problem," where a strong signal from a nearby transmitter can overpower weaker signals from distant transmitters. This is typically addressed through sophisticated power control mechanisms at the transmitters to ensure all users transmit at approximately the same power level at the receiver.

---

## 4.9 Important Points to Remember

*   **Multiplexing is key to high-capacity optical communication.**
*   **TDM:** Time-based interleaving of data streams.
*   **SCM:** RF subcarrier-based multiplexing, followed by optical modulation.
*   **OFDM:** Digital modulation scheme using orthogonal frequency subcarriers, robust against ISI.
*   **WDM:** The most dominant technique, using different wavelengths of light. DWDM for high density, CWDM for cost-effectiveness.
*   **OCDMA:** Uses unique optical codes to distinguish users sharing the same frequency and time.
*   **Couplers/Splitters:** Passive components for combining/dividing optical power.
*   **Add/Drop Multiplexers (ADMs):** Allow selective insertion/extraction of wavelength channels in WDM networks.
*   **Fiber Bragg Gratings (FBGs):** Wavelength-selective filters, crucial for WDM demultiplexing and ADMs.
*   **Tunable Filters:** Dynamically adjust filtering characteristics, enabling reconfigurable optical networks.

---
This comprehensive study material covers the core concepts of various multiplexing strategies in optical communication, along with the essential optical components. The questions and answers are designed to reinforce learning and align with the stated course outcomes. Remember to consult the recommended textbooks for a deeper understanding of the underlying physics and engineering principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
