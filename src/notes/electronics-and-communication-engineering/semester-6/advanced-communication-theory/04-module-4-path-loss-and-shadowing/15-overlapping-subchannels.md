---
title: "overlapping subchannels"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed3c"
status: "completed"
scrapedAt: "2026-05-23T17:59:15.673Z"
---
# Advanced Communication Theory: Module 4 - Path Loss and Shadowing

## Topic: Overlapping Subchannels

### Introduction

In modern wireless communication systems, particularly those employing Orthogonal Frequency Division Multiplexing (OFDM), the available bandwidth is divided into numerous narrowband subchannels. This division allows for efficient data transmission, robust performance against frequency-selective fading, and simplified equalization. However, in certain scenarios, these subchannels might not be perfectly orthogonal, leading to *overlapping subchannels*. This overlap can occur due to factors like Doppler shifts, imperfect synchronization, or deliberate frequency reuse in advanced systems. Understanding the impact of overlapping subchannels is crucial for optimizing system performance and mitigating interference.

This topic delves into the phenomenon of overlapping subchannels within the context of path loss and shadowing, exploring its implications on signal quality and devising strategies to manage its effects.

### 1. Key Concepts and Definitions

**1.1. Orthogonal Frequency Division Multiplexing (OFDM)**

*   **Definition:** OFDM is a modulation technique that divides a high-speed data stream into multiple lower-speed streams, each transmitted on a separate, closely spaced, orthogonal carrier frequency.
*   **Orthogonality:** Two signals are orthogonal if their inner product over a specific interval is zero. In OFDM, subcarriers are spaced such that they are orthogonal over the symbol period, minimizing Inter-Carrier Interference (ICI). The subcarrier spacing ($\Delta f$) is typically $1/\text{T}$, where T is the symbol duration.
*   **Advantages:** Robustness against multipath fading, efficient bandwidth utilization, simplified equalization.
*   **Reference:** Goldsmith (2005), Rappaport (2022), Haykin (2020)

**1.2. Subchannel Overlap**

*   **Definition:** When subchannels in an OFDM system are no longer perfectly orthogonal due to impairments or specific system designs, they are said to overlap. This means that the energy of one subchannel spills over into adjacent subchannels.
*   **Causes of Overlap:**
    *   **Doppler Shift:** High mobile speeds cause Doppler shifts, which can shift the carrier frequencies of subchannels, destroying their orthogonality.
    *   **Timing and Frequency Synchronization Errors:** Imperfect synchronization at the receiver can lead to phase inaccuracies and frequency offsets, causing subchannels to drift and overlap.
    *   **Carrier Frequency Offset (CFO):** A mismatch between the transmitter and receiver carrier frequencies.
    *   **Inter-Symbol Interference (ISI):** While OFDM is designed to mitigate ISI, severe multipath can still cause residual ISI that may affect subchannel orthogonality if not properly managed.
    *   **Non-Ideal Filtering:** Imperfect channel filters or transmit/receive filters can cause spectral leakage and overlap.
    *   **Intentional Overlap (e.g., Spectrum Sharing):** In some advanced systems, intentional overlap might be used for spectrum sharing or interference management, requiring specific techniques to handle.

**1.3. Inter-Carrier Interference (ICI)**

*   **Definition:** ICI is the interference caused by the spillover of energy from one subchannel into another due to non-orthogonality. It is a direct consequence of subchannel overlap.
*   **Impact:** ICI degrades the Signal-to-Interference-plus-Noise Ratio (SINR) of the received signal, leading to increased bit error rates (BER) and reduced data throughput.

**1.4. Path Loss and Shadowing in the Context of Overlapping Subchannels**

*   **Path Loss:** The attenuation of a signal as it propagates through space.
*   **Shadowing:** Variations in received signal strength due to large-scale obstacles (buildings, hills) that block or attenuate the signal.
*   **Impact on Overlap:** While path loss and shadowing primarily affect the overall signal strength, they can indirectly exacerbate the impact of subchannel overlap. If subchannels are already experiencing some degree of overlap, increased path loss and shadowing can push the SINR below a usable threshold for reliable detection, making the system more susceptible to the detrimental effects of ICI. Furthermore, if the channel characteristics vary significantly across the subchannels, it can lead to different levels of overlap and ICI for each subchannel.

### 2. Impact of Overlapping Subchannels on System Performance

**2.1. Degradation of SINR**

*   The interference introduced by overlapping subchannels (ICI) directly reduces the SINR for each subchannel.
*   This makes it harder for the receiver to correctly demodulate the transmitted symbols, leading to increased errors.
*   **Equation (Conceptual):** $SINR_{i} = \frac{P_i}{N_0 + I_{ICI}}$, where $P_i$ is the desired signal power on subchannel $i$, $N_0$ is the noise power spectral density, and $I_{ICI}$ is the interference power from other subchannels due to overlap.

**2.2. Increased Bit Error Rate (BER)**

*   A lower SINR directly translates to a higher BER.
*   The performance of modulation schemes (like QPSK, 16-QAM) becomes significantly worse when ICI is present.
*   **Reference:** Goldsmith (2005) discusses the impact of various channel impairments on modulation performance.

**2.3. Reduced Data Throughput**

*   To maintain a certain BER target in the presence of ICI, the system might need to reduce the modulation order or employ stronger error correction coding, both of which reduce the effective data rate.
*   Alternatively, the system might need to increase the transmit power, which is not always feasible.

**2.4. Challenges in Equalization**

*   Traditional equalizers in OFDM systems are designed assuming subchannels are orthogonal.
*   When subchannels overlap, the assumption of decorrelated interference is violated, making standard equalizers less effective.
*   The ICI term becomes dependent on the transmitted symbols on adjacent subchannels, requiring more complex equalization strategies.
*   **Reference:** Rappaport (2022) often touches upon equalization techniques in wireless channels.

### 3. Mitigation Techniques for Overlapping Subchannels

The primary goal of mitigation techniques is to reduce the impact of ICI, thereby improving SINR and BER.

**3.1. Improved Synchronization**

*   **Precise Timing and Frequency Synchronization:** Employing robust synchronization algorithms at the receiver to accurately estimate and compensate for timing offsets and carrier frequency offsets.
    *   **Preambles/Pilots:** Transmitting known sequences (preambles) at the beginning of each OFDM symbol or pilot tones within the OFDM symbol allows the receiver to estimate and correct for synchronization errors.
    *   **PLLs (Phase-Locked Loops):** Used for tracking carrier frequency and phase.
*   **Reference:** Haykin (2020) and Rappaport (2022) extensively cover synchronization techniques in digital communication.

**3.2. ICI Cancellation Techniques**

These techniques aim to actively remove or reduce the ICI component.

*   **Linear Equalization:** Applying linear filters to mitigate ICI. While simpler, they can suffer from noise enhancement.
*   **Decision-Feedback Equalization (DFE):** Uses past decisions to cancel interference. This can be more effective than linear equalization but is more complex.
*   **Iterative ICI Cancellation:** A more advanced approach where the receiver iteratively estimates and subtracts the ICI.
    *   **Concept:** The receiver makes an initial estimate of the data on each subchannel. It then uses these estimates to calculate the expected ICI on adjacent subchannels and subtracts it. This process is repeated to refine the data estimates.
    *   **Reference:** Goldsmith (2005) and Tse & Viswanath (2005) discuss advanced signal processing techniques for fading channels, which can be extended to ICI mitigation.

**3.3. ICI Self-Cancellation in OFDM Variants**

*   **Modified OFDM Schemes:** Some OFDM variants are designed with built-in mechanisms to reduce ICI.
    *   **Cyclic Prefix (CP) in Standard OFDM:** The CP itself helps combat ISI. While not directly for ICI, a sufficiently long CP provides time for subchannels to decay their energy before the next symbol starts, indirectly mitigating some overlap effects if the channel impulse response is shorter than the CP.
    *   **Sparse OFDM (SOFDM):** Divides the spectrum into sparse subchannels, potentially reducing overlap with adjacent active subchannels.
    *   **Generalized Frequency Division Multiplexing (GFDM):** A more flexible waveform that allows for varying subcarrier spacing and pulse shaping, offering better control over ICI.
    *   **Reference:** Advanced wireless communication textbooks like Molisch (2013) might cover such advanced waveform designs.

**3.4. Channel State Information (CSI) Feedback**

*   If the transmitter has accurate CSI (including information about potential Doppler shifts and frequency offsets), it can adapt its transmission strategy.
*   This could involve:
    *   **Adaptive Modulation and Coding (AMC):** Adjusting modulation and coding schemes based on the SINR of each subchannel, potentially using more robust schemes for subchannels more affected by overlap.
    *   **Subchannel Nulling/Power Allocation:** Reducing transmission power or nulling out subchannels that are heavily impacted by ICI.
*   **Reference:** CO5 (Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels) is relevant here. Understanding channel behavior is key to adaptive strategies.

**3.5. Robust Modulation and Coding**

*   **Lower-Order Modulation:** Using QPSK instead of 16-QAM or 64-QAM can improve robustness against ICI, albeit at the cost of lower data rates.
*   **Powerful Error Correction Codes:** Employing strong error correction codes (e.g., LDPC codes, Turbo codes) can help correct errors caused by ICI.
*   **Reference:** CO3 (Apply channel coding for error detection and correction) directly relates to this. Lin & Costello (2011) is a key resource for error control coding.

### 4. Path Loss and Shadowing Considerations with Overlapping Subchannels

*   **Uneven Impact:** Path loss and shadowing can affect different subchannels with varying severity. A subchannel experiencing deeper fade due to shadowing or greater path loss might be more susceptible to the degrading effects of ICI, as the desired signal power is already low.
*   **Channel Variation:** Rapid changes in path loss or shadowing can induce Doppler shifts or cause rapid fluctuations in channel characteristics, leading to increased subchannel overlap.
*   **Diversity Techniques:** Combining diversity techniques (e.g., frequency diversity, spatial diversity) can help mitigate the combined effects of fading and ICI.
    *   **Frequency Diversity:** Using subchannels that are separated in frequency can exploit frequency diversity to combat fading. If one subchannel is severely affected by path loss/shadowing and overlap, another might be in a better state.
    *   **Spatial Diversity (MIMO):** Multiple antennas can provide spatial diversity, allowing the receiver to combine signals from different paths, improving robustness.
*   **Reference:** CO6 (Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance) is highly relevant.

### 5. Examples

**Example 1: Impact of Doppler Shift on Subchannel Orthogonality**

Consider an OFDM system with a subcarrier spacing of $\Delta f$. If a mobile user is moving at a high speed, the Doppler shift ($f_D$) can be significant. If $f_D > \Delta f$, the subcarriers are no longer orthogonal. This causes the energy from one subcarrier to spill into its neighbors, creating ICI.

**Example 2: Synchronization Error and Overlap**

Suppose a receiver has a slight carrier frequency offset of $\delta_f$. If this offset is larger than the subcarrier spacing ($\delta_f > \Delta f$), the orthogonality is lost, and subchannels will overlap, generating ICI.

**Example 3: Adaptive Modulation with Subchannel Overlap**

In a system with 100 subchannels, imagine subchannels 50-55 are experiencing severe shadowing and also some Doppler-induced overlap. The system might dynamically switch these subchannels to a lower-order modulation (e.g., BPSK instead of 16-QAM) and apply more aggressive error correction coding to maintain a target BER, while other subchannels with less interference can continue to use higher-order modulation.

### 6. Learning Outcomes Alignment

*   **CO1 (Information Theory Measures):** Understanding ICI and its impact on SINR relates to the concept of channel capacity. Higher interference reduces the achievable data rate, which can be theoretically bounded by information theory.
*   **CO2 (Source Coding):** Not directly addressed by this topic, but efficient source coding can reduce the data that needs to be transmitted, potentially allowing for more robust coding schemes to combat ICI.
*   **CO3 (Channel Coding):** Crucial for mitigating errors caused by ICI. Stronger codes are needed when ICI is present.
*   **CO4 (Wireless Principles):** OFDM is a fundamental wireless technique. Understanding subchannel overlap is key to its practical implementation.
*   **CO5 (Channel Models/Modulation):** This topic directly builds on channel models by considering how impairments affect modulation performance through ICI. Path loss and shadowing are channel characteristics that indirectly influence subchannel overlap.
*   **CO6 (Diversity/Equalization):** Mitigation techniques for overlapping subchannels often involve advanced equalization and can benefit from diversity.

### 7. Important Points to Remember

*   **Orthogonality is Key:** The performance of OFDM relies heavily on the orthogonality of its subcarriers.
*   **ICI is the Enemy:** Subchannel overlap leads to Inter-Carrier Interference (ICI), which degrades SINR and increases BER.
*   **Causes are Diverse:** Doppler shift, synchronization errors, and non-ideal filters are primary causes of subchannel overlap.
*   **Mitigation is Multi-faceted:** Solutions involve improving synchronization, employing ICI cancellation techniques, using robust waveforms, and robust coding.
*   **Path Loss/Shadowing Magnify Effects:** While not direct causes of overlap, path loss and shadowing can make the system more vulnerable to the consequences of ICI.
*   **Trade-offs Exist:** Many mitigation techniques involve trade-offs between complexity, spectral efficiency, and robustness.

### 8. Practice Questions & Exercises

**Question 1:**
Explain the primary cause of Inter-Carrier Interference (ICI) in an OFDM system. How does this relate to the concept of subchannel overlap?

**Question 2:**
List three common factors that can lead to overlapping subchannels in an OFDM system. For each factor, briefly explain how it causes the overlap.

**Question 3:**
Imagine an OFDM system operating in a high-mobility scenario.
a) How does the Doppler effect contribute to subchannel overlap in this scenario?
b) What are the consequences of this overlap on the received signal quality?
c) Suggest two techniques that could be employed to mitigate the effects of this overlap.

**Question 4:**
Discuss the relationship between path loss, shadowing, and the impact of overlapping subchannels. Can path loss and shadowing directly cause subchannel overlap?

**Question 5:**
You are designing a wireless communication system that utilizes OFDM. You anticipate potential synchronization errors.
a) How would synchronization errors lead to subchannel overlap?
b) What type of interference would this cause?
c) Describe a method for mitigating this specific problem.

**Question 6:**
Consider the impact of ICI on the performance of modulation schemes. If a system experiences significant ICI, which modulation schemes (e.g., BPSK, QPSK, 16-QAM) would you expect to perform better, and why?

---

### Answers to Practice Questions

**Answer 1:**
The primary cause of Inter-Carrier Interference (ICI) in an OFDM system is the loss of orthogonality between subcarriers. Subchannel overlap occurs when the frequency spacing between subcarriers is not sufficient to maintain their orthogonality, allowing the energy from one subcarrier to spill into adjacent ones. This loss of orthogonality can be caused by Doppler shifts, timing errors, or frequency offsets.

**Answer 2:**
Three common factors causing overlapping subchannels are:
1.  **Doppler Shift:** High mobile speeds cause received signals to experience frequency shifts (Doppler effect). If these shifts are significant relative to the subcarrier spacing, they shift the center frequencies of the subcarriers, causing them to no longer be orthogonal and thus overlap.
2.  **Timing Synchronization Errors:** Imperfect synchronization of the symbol timing at the receiver can lead to a shortening or lengthening of the effective symbol duration seen by the demodulator. This can introduce phase rotations across the subcarriers and lead to overlap.
3.  **Carrier Frequency Offset (CFO):** A mismatch between the transmitter and receiver's local oscillator frequencies results in a constant frequency shift for all received subcarriers. If this offset is large, it can shift subcarriers away from their intended frequencies, destroying orthogonality and causing overlap.

**Answer 3:**
a) **Doppler Effect and Overlap:** In a high-mobility scenario, the Doppler effect causes a frequency shift proportional to the user's velocity and the carrier frequency. This shift can move subcarriers away from their intended frequencies, destroying the orthogonality property of OFDM. The subcarriers effectively "smear" or spread their energy onto adjacent subcarriers, leading to overlap.
b) **Consequences:** The overlap causes Inter-Carrier Interference (ICI). This ICI acts as an additional source of noise, reducing the Signal-to-Interference-plus-Noise Ratio (SINR) for each subchannel. This leads to a higher Bit Error Rate (BER) and reduces the overall data throughput.
c) **Mitigation Techniques:**
    *   **Improved Synchronization:** Implementing robust carrier frequency offset estimation and compensation techniques at the receiver.
    *   **ICI Cancellation Techniques:** Employing linear or decision-feedback equalizers specifically designed to cancel or reduce ICI.
    *   **Robust Modulation/Coding:** Using lower-order modulation schemes and stronger error correction codes on subchannels affected by ICI.

**Answer 4:**
Path loss and shadowing are primarily factors that attenuate the overall signal strength. They do **not directly cause** subchannel overlap. However, they can indirectly exacerbate the *impact* of overlapping subchannels. If a subchannel is already experiencing overlap and has a low SINR due to ICI, increased path loss or shadowing will further reduce the desired signal power, pushing the SINR even lower and making reliable detection more difficult. They can also contribute to non-uniform channel conditions across subcarriers, which might indirectly lead to differential phase shifts or frequency drifts if the channel is not time-invariant across the entire bandwidth.

**Answer 5:**
a) Synchronization errors, such as carrier frequency offset or timing drift, can cause the subcarriers in an OFDM system to deviate from their nominal frequencies and phases. This deviation disrupts the fundamental condition of orthogonality, leading to the spectral "leakage" of energy from one subchannel to another.
b) This type of interference is known as Inter-Carrier Interference (ICI).
c) A common method to mitigate synchronization errors and their resulting ICI is to use **preamble sequences** or **pilot tones**. By transmitting known sequences or pilot subcarriers at specific locations within the OFDM frame, the receiver can estimate the timing and frequency errors. These estimates can then be used to correct the received signal by applying appropriate time shifts and frequency/phase adjustments, thereby restoring orthogonality and reducing ICI.

**Answer 6:**
If a system experiences significant ICI, **BPSK** and **QPSK** would be expected to perform better than 16-QAM. This is because lower-order modulation schemes have larger minimum distances between their constellation points. A given amount of interference (like ICI) will cause a proportionally smaller deviation in the received symbol's phase and amplitude relative to the constellation points. Therefore, the probability of a symbol being misinterpreted due to ICI is lower for modulation schemes with fewer and more widely spaced constellation points.

---
This concludes the study notes for overlapping subchannels in Module 4. Remember to cross-reference these notes with your textbooks for deeper understanding and to explore the mathematical derivations behind these concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
