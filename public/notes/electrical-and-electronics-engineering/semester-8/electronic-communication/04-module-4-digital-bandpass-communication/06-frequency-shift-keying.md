---
title: "Frequency shift keying"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c08"
status: "completed"
scrapedAt: "2026-05-23T16:40:42.369Z"
---
# Electronic Communication: Module 4 - Digital Bandpass Communication

## Topic: Frequency Shift Keying (FSK)

This module delves into digital bandpass communication techniques, and this topic focuses on Frequency Shift Keying (FSK), a fundamental digital modulation scheme. We will explore its principles, operation, advantages, disadvantages, and performance, aligning with Course Outcomes CO3 and CO4.

### 1. Introduction to Digital Bandpass Communication

Digital bandpass modulation is essential for transmitting digital data over analog channels that are band-limited, such as radio frequency (RF) channels. Unlike baseband digital communication, which transmits data at baseband frequencies, bandpass modulation shifts the digital signal to a higher carrier frequency. This allows for efficient utilization of the available bandwidth and enables multiplexing of multiple users.

**Key Concept:** Digital bandpass modulation represents digital data by varying one or more parameters (amplitude, frequency, or phase) of a carrier wave.

**Reference:** Kennedy, Davis, and Prasanna, Chapter 11 (Digital Modulation Techniques). This chapter provides a comprehensive overview of various digital modulation schemes, including FSK, AM, and PSK, and their comparative analysis.

### 2. Frequency Shift Keying (FSK) - The Fundamentals

FSK is a digital modulation technique where the carrier frequency is varied in accordance with the digital input signal. In the simplest form of FSK, known as **Binary FSK (BFSK)**, two distinct frequencies are used to represent the two binary digits, '0' and '1'.

*   **'0' (Space) Symbol:** Represented by a carrier frequency $f_s$.
*   **'1' (Mark) Symbol:** Represented by a carrier frequency $f_m$.

The transmitted signal can be expressed as:

$s(t) = A \cos(2\pi f_c t + \phi)$

where $f_c$ is the carrier frequency and $\phi$ is the phase. In FSK, the frequency is varied.

**For BFSK:**

$s(t) = \begin{cases} A \cos(2\pi f_1 t) & \text{for binary '1'} \\ A \cos(2\pi f_2 t) & \text{for binary '0'} \end{cases}$

where $f_1$ and $f_2$ are the two distinct frequencies used.

**Key Concepts:**
*   **Modulation:** The process of varying the carrier wave's frequency according to the input binary data.
*   **Demodulation:** The process of recovering the original binary data from the received modulated signal.
*   **Frequency Deviation:** The difference between the transmitted frequency and the center carrier frequency.

**Example:**
Imagine transmitting the binary sequence `1010`.
If '1' is represented by $f_1 = 100$ kHz and '0' by $f_2 = 120$ kHz, the transmitted signal would consist of alternating segments at 100 kHz and 120 kHz.

**Reference:**
*   **Tomasi, Chapter 10 (Digital Modulation Techniques):** This chapter extensively covers FSK, including its mathematical representation, various types, and practical considerations.
*   **Haykin and Mohre, Chapter 4 (Digital Modulation):** This chapter provides a theoretical foundation for digital modulation techniques, including FSK, discussing its characteristics and spectral properties.

### 3. Types of FSK

While BFSK is the most basic, other forms of FSK exist to improve spectral efficiency or bandwidth utilization.

*   **Binary FSK (BFSK):** As described above, uses two frequencies for two binary states.
*   **M-ary FSK:** Uses $M$ distinct frequencies to represent $\log_2 M$ bits per symbol. For example, 4-ary FSK would use 4 frequencies to represent 2 bits per symbol (e.g., 00, 01, 10, 11). This increases data rate but requires more bandwidth and more complex circuitry.

**Key Concept:** M-ary modulation schemes improve spectral efficiency by transmitting more bits per symbol.

**Reference:**
*   **Taub & Schilling, Chapter 10 (Digital Modulation Techniques):** This chapter elaborates on M-ary FSK, discussing its trade-offs between data rate, bandwidth, and error probability.

### 4. FSK Transmitter

The FSK transmitter generates the modulated signal by switching between oscillators tuned to the mark and space frequencies based on the input binary data.

**Block Diagram of an FSK Transmitter:**

[Conceptual Diagram: Binary Data Input -> Control Circuitry -> Frequency Synthesizer/Controlled Oscillators -> Power Amplifier -> Transmitted FSK Signal]

**Simplified Functional Description:**
1.  **Binary Data Input:** The serial binary data stream is fed into the transmitter.
2.  **Control Logic:** This logic determines which frequency to generate based on the incoming bit. For a '1', it selects the mark frequency; for a '0', it selects the space frequency.
3.  **Frequency Synthesizer/Controlled Oscillators:**
    *   **Two-Oscillator System:** Two oscillators are used, one for the mark frequency and one for the space frequency. A switch controlled by the data selects which oscillator's output is passed on.
    *   **Voltage-Controlled Oscillator (VCO):** A single VCO can be used, where the input binary data directly controls the control voltage applied to the VCO, thereby changing its output frequency.
4.  **Power Amplifier:** The modulated signal is amplified to the required transmission power level.

**Important Point to Remember:** The choice between the two-oscillator system and the VCO system depends on factors like stability, cost, and the required accuracy of the frequencies.

**Reference:**
*   **Kennedy, Davis, and Prasanna, Chapter 11.3 (Frequency-Shift Keying):** This section details the implementation of FSK transmitters, including the use of VCOs and their advantages.

### 5. FSK Receiver (Demodulator)

The FSK receiver's primary goal is to detect the transmitted frequency and convert it back into the original binary data. Several methods can be employed for FSK demodulation.

**Common Demodulation Techniques:**

1.  **Coherent Detection (Synchronous Demodulation):** This is the most efficient but also the most complex method. It requires precise synchronization of the local oscillator in the receiver with the carrier frequency of the received signal.
    *   **Process:** The received FSK signal is multiplied with locally generated sine waves at the mark and space frequencies. Low-pass filters extract the desired components, and a decision circuit determines which frequency was received.
    *   **Block Diagram:** [Conceptual Diagram: Received FSK Signal -> Bandpass Filters (tuned to f1 and f2) -> Envelope Detectors/Integrators -> Decision Circuit -> Binary Output]

2.  **Non-Coherent Detection (Asynchronous Demodulation):** This method is simpler as it does not require precise carrier synchronization. However, it is generally less efficient than coherent detection.
    *   **Frequency Discriminator Method:** A frequency discriminator circuit directly converts frequency variations into amplitude variations. The output amplitude is then detected.
    *   **Phase-Locked Loop (PLL) Method:** A PLL can track the incoming frequency and provide a DC voltage proportional to the frequency deviation. This voltage can then be compared to a threshold to decide the received bit.
    *   **Matched Filter Receiver:** This is a form of coherent detection and is optimal in terms of minimizing the probability of error for additive white Gaussian noise (AWGN) channels.

**Key Concept:** The choice of demodulator significantly impacts the receiver's complexity, power consumption, and error performance.

**Reference:**
*   **Tomasi, Chapter 10.5 (FSK Demodulators):** Tomasi provides detailed explanations and circuit diagrams for various FSK demodulation techniques, including coherent and non-coherent methods.
*   **Proakis and Salehi, Chapter 7 (Digital Modulation and Demodulation):** This chapter offers a deep dive into the theoretical aspects of digital receiver design, including optimal demodulation strategies for FSK.

### 6. Performance of FSK

The performance of FSK is typically evaluated in terms of its **Bit Error Rate (BER)**, which is the probability of a bit being received incorrectly.

*   **Coherent BFSK:** Offers the best performance among FSK schemes. The BER performance is comparable to that of coherent BPSK, provided the bandwidth is chosen appropriately.
    *   $P_e = Q(\sqrt{E_b/N_0})$ for coherent BFSK (where $E_b$ is the energy per bit, $N_0$ is the noise power spectral density, and $Q(\cdot)$ is the Q-function).
*   **Non-Coherent BFSK:** Has a higher BER than coherent BFSK for the same signal-to-noise ratio (SNR).
    *   $P_e = \frac{1}{2} e^{-E_b/(2N_0)}$ for non-coherent BFSK.

**Comparison with Other Modulation Schemes:**
*   FSK is generally less bandwidth-efficient than PSK or QAM for the same BER.
*   It is simpler to implement than PSK.
*   FSK is more robust to amplitude variations than ASK.

**Bandwidth Consideration:** The bandwidth required for FSK is approximately proportional to the difference between the mark and space frequencies ($f_m - f_s$) and the data rate.

$B \approx \frac{R_b (M-1)}{log_2 M}$ for M-ary FSK, where $R_b$ is the bit rate.
For BFSK, $B \approx 2 \Delta f + R_b$, where $\Delta f = |f_m - f_s|/2$. A common choice is $\Delta f = R_b/2$, making the bandwidth approximately $2R_b$.

**Key Concept:** The trade-off in digital modulation is often between bandwidth efficiency, power efficiency, and implementation complexity.

**Reference:**
*   **Lathi and Ding, Chapter 6 (Digital Modulation):** This chapter provides extensive analysis of the error probability and bandwidth requirements for FSK and other digital modulation schemes.
*   **Ziemer and Tranter, Chapter 8 (Digital Modulation Techniques):** Offers a detailed comparison of the performance of FSK with other modulation schemes under various channel conditions.

### 7. Advantages and Disadvantages of FSK

**Advantages:**
*   **Simpler Implementation:** Compared to PSK, FSK demodulators are generally easier to design and build, especially non-coherent ones.
*   **Robustness to Amplitude Variations:** FSK signals are less susceptible to amplitude fading than ASK signals.
*   **Good Performance in Noisy Channels:** FSK can perform well in channels with significant noise.

**Disadvantages:**
*   **Lower Bandwidth Efficiency:** Compared to PSK and QAM, FSK requires more bandwidth for a given data rate and BER.
*   **Coherent Detection Complexity:** While non-coherent FSK is simple, coherent FSK requires complex synchronization circuitry.
*   **Inter-Symbol Interference (ISI):** If the frequency separation is too small or the channel characteristics are poor, ISI can become a significant issue.

**Reference:**
*   **Couch, Chapter 8 (Digital Modulation Techniques):** Couch provides a practical overview of the pros and cons of FSK in the context of various digital communication systems.

### 8. Applications of FSK

FSK finds applications in various communication systems where simplicity and robustness are prioritized over maximum bandwidth efficiency.

*   **Radio Modems:** For low-speed data transmission over radio links.
*   **Caller ID Systems:** Used in telecommunication networks.
*   **Remote Control Systems:** In toys and some industrial applications.
*   **Short-range Wireless Communication:** Like RFID (Radio-Frequency Identification) where data rates are low.
*   **Early Data Transmission Systems:** Such as dial-up modems.

### 9. Practice Questions and Answers

**Question 1:** What are the two distinct frequencies used to represent binary '0' and '1' in Binary Frequency Shift Keying (BFSK)?
**Answer:** The two distinct frequencies are typically referred to as the "space" frequency (for binary '0') and the "mark" frequency (for binary '1').

**Question 2:** Compare the implementation complexity of coherent BFSK and non-coherent BFSK.
**Answer:** Coherent BFSK requires complex circuitry for carrier synchronization, making its implementation more complex. Non-coherent BFSK does not require carrier synchronization and is therefore simpler to implement.

**Question 3:** If a binary sequence is transmitted using BFSK with a mark frequency of 105 MHz and a space frequency of 115 MHz, what will be the transmitted frequency for the sequence `11010`?
**Answer:** Assuming '1' is transmitted at 105 MHz and '0' at 115 MHz, the transmitted frequencies will be:
`1` -> 105 MHz
`1` -> 105 MHz
`0` -> 115 MHz
`1` -> 105 MHz
`0` -> 115 MHz
So, the transmitted frequencies will be 105 MHz, 105 MHz, 115 MHz, 105 MHz, 115 MHz.

**Question 4:** What is the primary disadvantage of FSK compared to PSK in terms of spectral efficiency?
**Answer:** FSK generally requires more bandwidth for a given data rate and error probability compared to PSK. This means FSK is less bandwidth-efficient.

**Question 5:** In a non-coherent BFSK system, the probability of error is given by $P_e = \frac{1}{2} e^{-E_b/(2N_0)}$. If $E_b/N_0 = 10$, what is the probability of error?
**Answer:**
$P_e = \frac{1}{2} e^{-10/2}$
$P_e = \frac{1}{2} e^{-5}$
$P_e \approx \frac{1}{2} \times 0.006738$
$P_e \approx 0.003369$

### 10. Key Points to Remember

*   FSK represents binary data by shifting the carrier frequency.
*   BFSK uses two frequencies for '0' and '1'.
*   FSK transmitters can use a two-oscillator system or a Voltage-Controlled Oscillator (VCO).
*   FSK receivers can employ coherent or non-coherent detection methods.
*   Coherent FSK offers better performance but is more complex.
*   Non-coherent FSK is simpler but less efficient.
*   FSK is robust to amplitude variations but less bandwidth-efficient than PSK.
*   The performance of FSK is measured by its Bit Error Rate (BER).
*   M-ary FSK increases data rate by using more frequencies but requires more bandwidth.

### 11. Alignment with Course Outcomes

*   **CO1 (Knowledge Level: K2):** While this topic focuses on digital modulation, understanding the principles of carrier frequency variation in FSK relates to understanding how carrier signals are manipulated, which is a precursor to modulation and demodulation. The mathematical representation of FSK signals ($A \cos(2\pi f_1 t)$ and $A \cos(2\pi f_2 t)$) involves sinusoidal functions, similar to those used in AM.
*   **CO2 (Knowledge Level: K3):** We have discussed the spectra of FSK signals (briefly) and compared its bandwidth requirements, which directly relates to the characteristics and efficiency of the modulation scheme.
*   **CO3 (Knowledge Level: K2):** The discussion on FSK transmitters and receivers covers the processing blocks involved in a digital communication system, such as oscillators, filters, and decision circuits.
*   **CO4 (Knowledge Level: K3):** The entire topic of FSK is about applying knowledge of digital modulation principles to digital transmission. We have analyzed its performance (BER) and trade-offs, which are crucial for applying this knowledge effectively.

This concludes the study notes for Frequency Shift Keying (FSK) within Module 4. Ensure you consult the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
