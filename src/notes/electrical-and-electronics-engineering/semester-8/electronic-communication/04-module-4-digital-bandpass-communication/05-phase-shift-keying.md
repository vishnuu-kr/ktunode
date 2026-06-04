---
title: "Phase shift keying"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c07"
status: "completed"
scrapedAt: "2026-05-23T16:40:41.084Z"
---
# Module 4: Digital Bandpass Communication - Phase Shift Keying (PSK)

## Introduction to Digital Bandpass Communication

Digital bandpass communication is a method of transmitting digital information over a bandpass channel (a channel that passes a range of frequencies). This is crucial because baseband signals (low-frequency signals) cannot be directly transmitted over long distances using antennas. Bandpass modulation shifts the digital signal to a higher carrier frequency, allowing for efficient transmission.

**Key Concept:** Bandpass modulation involves using a carrier wave with a specific frequency to carry the digital information. The digital data modifies certain parameters of the carrier wave.

## 4.1 Phase Shift Keying (PSK)

Phase Shift Keying (PSK) is a digital modulation technique where the phase of the carrier signal is varied to represent digital data. The amplitude and frequency of the carrier wave remain constant.

### 4.1.1 Basic Principle of PSK

In PSK, the digital data is represented by discrete phase shifts of a sinusoidal carrier wave. Each distinct phase shift corresponds to a specific binary symbol.

**Mathematical Representation:**
A PSK signal can be represented as:

$s(t) = A \cos(2\pi f_c t + \phi_k)$

Where:
*   $A$ is the amplitude of the carrier signal.
*   $f_c$ is the carrier frequency.
*   $\phi_k$ is the phase shift, which is a function of the digital data symbol $k$.

**Important Point:** The choice of phase shifts is critical for differentiating between symbols and minimizing errors in the presence of noise.

### 4.1.2 Types of PSK

#### 4.1.2.1 Binary Phase Shift Keying (BPSK)

BPSK is the simplest form of PSK, where two possible phase shifts are used to represent binary data (0 and 1).

*   **Phase Mapping:**
    *   '0' is often represented by a phase shift of $0^\circ$ (or $0$ radians).
    *   '1' is often represented by a phase shift of $180^\circ$ (or $\pi$ radians).

*   **Mathematical Representation for BPSK:**
    *   If the binary data is '0', the signal is $s_0(t) = A \cos(2\pi f_c t)$.
    *   If the binary data is '1', the signal is $s_1(t) = A \cos(2\pi f_c t + \pi) = -A \cos(2\pi f_c t)$.

*   **Waveform Example:**
    Imagine a carrier wave. When a '0' bit arrives, the phase remains the same. When a '1' bit arrives, the phase abruptly shifts by 180 degrees, essentially inverting the carrier waveform.

*   **Power Efficiency:** BPSK is spectrally efficient in that it uses the minimum bandwidth for binary transmission. Its power efficiency is also good.

*   **Textbook Reference:**
    *   **Kennedy, Davis, and Prasanna:** Discusses BPSK as a fundamental digital modulation scheme, emphasizing its simplicity and spectral characteristics. (Chapter on Digital Modulation Techniques)
    *   **Tomasi:** Explains BPSK with clear diagrams and waveforms, highlighting its implementation. (Chapter on Digital Modulation)

#### 4.1.2.2 Quadrature Phase Shift Keying (QPSK)

QPSK is a more advanced form of PSK that uses four possible phase shifts to represent two bits of data simultaneously. This doubles the data rate compared to BPSK for the same bandwidth.

*   **Phase Mapping:**
    *   The four possible phase shifts are typically $45^\circ$, $135^\circ$, $225^\circ$, and $315^\circ$.
    *   These four phases correspond to four unique 2-bit symbols: 00, 01, 10, and 11.

*   **Mathematical Representation for QPSK:**
    A QPSK signal can be represented as:
    $s(t) = A \left[ I(t) \cos(2\pi f_c t) - Q(t) \sin(2\pi f_c t) \right]$
    Where $I(t)$ and $Q(t)$ are the in-phase and quadrature components, which take values of $\pm \frac{A}{\sqrt{2}}$ based on the 2-bit symbols.

*   **Waveform Example:**
    The incoming serial data stream is split into two parallel streams (dibits). Each dibit is mapped to one of the four phase shifts. For example:
    *   00 -> $45^\circ$
    *   01 -> $135^\circ$
    *   10 -> $225^\circ$
    *   11 -> $315^\circ$
    The phase of the carrier is shifted according to the current dibit.

*   **Spectral Efficiency:** QPSK is twice as spectrally efficient as BPSK because it transmits 2 bits per symbol.

*   **Textbook Reference:**
    *   **Haykin and Mohre:** Provides a detailed analysis of QPSK, including its constellation diagram and error probability. (Chapter on Digital Modulation)
    *   **Taub & Schilling:** Explains the modulator and demodulator structures for QPSK, detailing how data is encoded and decoded. (Chapter on Digital Modulation Techniques)
    *   **Ziemer & Tranter:** Discusses the advantages of QPSK in terms of bandwidth efficiency and its application in various communication systems. (Chapter on Digital Modulation)

#### 4.1.2.3 Higher-Order PSK (e.g., 8-PSK, 16-PSK)

To further increase spectral efficiency, more than two bits can be transmitted per symbol by using more phase shifts.

*   **8-PSK:** Uses 8 phase shifts, representing 3 bits per symbol (2³ = 8).
*   **16-PSK:** Uses 16 phase shifts, representing 4 bits per symbol (2⁴ = 16).

*   **Trade-offs:**
    *   **Increased Spectral Efficiency:** Transmits more data in the same bandwidth.
    *   **Increased Complexity:** Modulators and demodulators become more complex.
    *   **Reduced Noise Immunity:** The phase shifts are closer together, making the system more susceptible to noise and interference, leading to a higher bit error rate (BER).

*   **Textbook Reference:**
    *   **Couch:** Explores the concepts of higher-order PSK, their spectral efficiency, and the associated trade-offs in terms of performance. (Chapter on Digital Modulation)
    *   **Lathi & Ding:** Analyzes the error performance of higher-order PSK schemes, comparing them to BPSK and QPSK. (Chapter on Digital Modulation)

### 4.1.3 PSK Modulator and Demodulator

#### 4.1.3.1 PSK Modulator

A PSK modulator maps input digital data to specific phase shifts of a carrier signal.

*   **BPSK Modulator:**
    *   Can be implemented using a balanced modulator.
    *   The data signal directly controls the phase of the carrier. For example, a '0' might pass the carrier as is, and a '1' might invert it.
    *   Another common implementation uses an analog switch or analog multiplier.

    **Block Diagram:**
    [Digital Data Input] -> [Phase Control Logic] -> [Carrier Oscillator] -> [PSK Output Signal]

*   **QPSK Modulator:**
    *   Requires splitting the serial data stream into two parallel streams (in-phase and quadrature).
    *   Each stream is used to modulate a carrier and a quadrature carrier (shifted by $90^\circ$).
    *   The outputs of the two modulators are then summed.

    **Block Diagram:**
    [Serial Data Input] -> [Serial-to-Parallel Converter] ->
    [In-phase Data Stream] -> [BPSK Modulator (Carrier)] -> [Summation]
    [Quadrature Data Stream] -> [BPSK Modulator (Quadrature Carrier)] -> /

    **Textbook Reference:**
    *   **Proakis & Salehi:** Provides detailed circuit implementations and mathematical models for PSK modulators. (Chapter on Digital Modulation Techniques)

#### 4.1.3.2 PSK Demodulator

A PSK demodulator recovers the original digital data from the received PSK signal.

*   **Coherent Demodulation:** This is the preferred method as it offers better performance. It requires the demodulator to have knowledge of the carrier's phase and frequency.
    *   The received signal is multiplied by a locally generated carrier signal that is synchronized in phase and frequency with the incoming carrier.
    *   The output of the multiplier is then passed through a low-pass filter to remove the double-frequency components.
    *   The filtered signal is then sampled at appropriate times and compared against a threshold to decide the original binary symbol.

*   **BPSK Demodulator (Coherent):**
    1.  Multiply the received signal with a locally generated carrier $2\cos(2\pi f_c t)$.
    2.  Low-pass filter the result.
    3.  Sample the output. If the sample is positive, decode as '0'; if negative, decode as '1' (or vice versa, depending on the mapping).

*   **QPSK Demodulator (Coherent):**
    1.  Split the received signal into two paths.
    2.  In one path, multiply by a carrier $\cos(2\pi f_c t)$ and low-pass filter.
    3.  In the other path, multiply by $-\sin(2\pi f_c t)$ and low-pass filter.
    4.  Sample the outputs of both filters.
    5.  Use the sampled values to determine which of the four 2-bit symbols was transmitted by comparing them to decision thresholds.

*   **Non-coherent Demodulation:** This method does not require carrier synchronization but offers lower performance. It typically involves detecting phase changes rather than absolute phases.

*   **Textbook Reference:**
    *   **Tomasi:** Illustrates the operation of coherent PSK demodulators with clear diagrams and decision logic. (Chapter on Digital Modulation)
    *   **Haykin and Mohre:** Explains the concepts of carrier synchronization and their importance in coherent demodulation for PSK. (Chapter on Digital Demodulation)

### 4.1.4 Error Performance of PSK

The performance of a digital modulation scheme is often measured by its Bit Error Rate (BER). The BER is the probability that a transmitted bit is received incorrectly.

*   **Factors Affecting BER:**
    *   **Noise:** Additive White Gaussian Noise (AWGN) is a primary source of errors.
    *   **Signal-to-Noise Ratio (SNR):** Higher SNR generally leads to lower BER.
    *   **Bandwidth:** While increasing bandwidth can improve SNR, it's often traded for spectral efficiency.
    *   **Modulation Scheme:** Higher-order schemes are more susceptible to noise.

*   **BPSK Error Performance:**
    BPSK has the best BER performance among all PSK schemes for a given average transmitted power and bandwidth. The probability of error for BPSK in AWGN is given by:

    $P_e = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$

    Where:
    *   $E_b$ is the energy per bit.
    *   $N_0$ is the power spectral density of the noise.
    *   $Q(\cdot)$ is the Q-function, $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$.

*   **QPSK Error Performance:**
    QPSK has the same BER performance as BPSK when comparing the probability of symbol error to the energy per symbol ($E_s$). Since $E_s = 2E_b$ in QPSK (transmitting 2 bits per symbol), the error performance in terms of $E_b/N_0$ is identical to BPSK.

    $P_{symbol} = Q\left(\sqrt{\frac{2E_s}{N_0}}\right) = Q\left(\sqrt{\frac{2(2E_b)}{N_0}}\right) = Q\left(\sqrt{\frac{4E_b}{N_0}}\right)$

    The BER for QPSK is the same as that for BPSK with the same $E_b/N_0$.

*   **Higher-Order PSK Error Performance:**
    As the number of phase shifts increases (e.g., 8-PSK, 16-PSK), the phase shifts become closer. This means that a smaller amount of noise can cause a symbol error. Consequently, higher-order PSK schemes require a higher SNR to achieve the same BER as BPSK or QPSK.

    $P_e \approx Q\left(\sqrt{\frac{2k E_b}{N_0} \sin^2(\frac{\pi}{M})}\right)$ for M-PSK, where $k$ is the number of bits per symbol.

*   **Textbook Reference:**
    *   **Kennedy, Davis, and Prasanna:** Provides graphical comparisons of BER curves for different PSK schemes. (Chapter on Digital Communication)
    *   **Lathi & Ding:** Offers detailed mathematical derivations of the error probabilities for various PSK schemes. (Chapter on Digital Modulation)
    *   **Couch:** Explains the relationship between SNR, BER, and modulation order for PSK. (Chapter on Digital Communication Systems)

### 4.1.5 Advantages and Disadvantages of PSK

#### 4.1.5.1 Advantages

*   **Good Noise Immunity:** Especially for BPSK and QPSK, PSK offers good performance in the presence of noise compared to some other modulation schemes.
*   **Spectral Efficiency:** QPSK and higher-order PSK offer good spectral efficiency, allowing for higher data rates in a given bandwidth.
*   **Simplicity (for BPSK):** BPSK modulators and demodulators are relatively simple to implement.
*   **Constant Envelope:** PSK signals have a constant envelope, which means they can be amplified by power amplifiers without causing significant distortion. This is an advantage over some amplitude-modulated signals.

#### 4.1.5.2 Disadvantages

*   **Complexity of Higher-Order PSK:** Implementing and synchronizing for higher-order PSK schemes can be complex.
*   **Carrier Synchronization Requirement:** Coherent demodulation requires accurate carrier synchronization, which adds complexity to the receiver.
*   **Reduced Noise Immunity for Higher-Order PSK:** As the number of phase states increases, the system becomes more sensitive to noise, requiring higher SNR for reliable communication.

### 4.1.6 Applications of PSK

*   **Wi-Fi (IEEE 802.11 standards):** QPSK is widely used in Wi-Fi for its balance of spectral efficiency and performance. Higher-order PSK (like 8-PSK and 16-PSK) are also used in later standards for higher data rates under good signal conditions.
*   **Satellite Communications:** PSK is employed in satellite communication systems due to its robustness against fading and noise.
*   **Mobile Communications:** Used in various cellular standards.
*   **Digital Television Broadcasting:** Used in some digital TV transmission standards.

## Summary of Key Concepts and Points to Remember

*   **PSK:** Digital modulation where information is encoded in the phase of a carrier signal.
*   **BPSK:** Uses two phases ($0^\circ, 180^\circ$) for one bit. Simple, good performance.
*   **QPSK:** Uses four phases ($45^\circ, 135^\circ, 225^\circ, 315^\circ$) for two bits. Twice the spectral efficiency of BPSK.
*   **Higher-Order PSK (8-PSK, 16-PSK):** Use more phases for more bits per symbol, increasing spectral efficiency but decreasing noise immunity.
*   **Modulator:** Maps digital data to phase shifts. QPSK uses in-phase and quadrature components.
*   **Demodulator:** Recovers data. Coherent demodulation is preferred and requires carrier synchronization.
*   **BER:** Bit Error Rate is a measure of performance. BPSK has the best BER for a given $E_b/N_0$.
*   **Constant Envelope:** PSK signals can be amplified by non-linear amplifiers without significant distortion.

## Practice Questions and Answers

**Question 1:** What is the primary difference between BPSK and QPSK in terms of data transmission?
**Answer:** BPSK transmits one bit per symbol, while QPSK transmits two bits per symbol. This means QPSK is twice as spectrally efficient as BPSK.

**Question 2:** Explain why higher-order PSK schemes (like 8-PSK) are more susceptible to noise than BPSK.
**Answer:** In higher-order PSK, the phase shifts are closer together. This smaller angular separation means that even a small amount of noise can cause the received phase to cross the decision boundary between two adjacent symbols, leading to a symbol error.

**Question 3:** What is the advantage of PSK signals having a constant envelope?
**Answer:** Constant envelope signals can be amplified using non-linear power amplifiers without causing significant amplitude distortion. This makes PSK a suitable modulation scheme for systems where power efficiency and amplifier linearity are important.

**Question 4:** If a QPSK system has an $E_b/N_0$ ratio of 10 dB, what is its approximate BER?
**Answer:** The BER for QPSK is the same as for BPSK at the same $E_b/N_0$. Using standard BER curves or approximations for BPSK, a 10 dB $E_b/N_0$ typically results in a BER on the order of $10^{-5}$ to $10^{-6}$. (Note: Exact calculation requires the Q-function or reference to BER charts.)

**Question 5:** Describe the role of the in-phase and quadrature components in a QPSK modulator.
**Answer:** In a QPSK modulator, the incoming serial data is split into two parallel streams. One stream modulates the in-phase carrier ($I(t)\cos(2\pi f_c t)$), and the other modulates the quadrature carrier ($Q(t)\sin(2\pi f_c t)$). The sum of these two modulated carriers forms the QPSK signal. The $I(t)$ and $Q(t)$ components represent the two bits of data being transmitted in each symbol.

## Alignment with Course Outcomes (COs)

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   While this CO is about AM, understanding carrier modulation is a prerequisite for PSK. The mathematical representations of PSK signals ($A \cos(2\pi f_c t + \phi_k)$) and their modulation/demodulation processes relate to carrier manipulation, similar to AM but focusing on phase.

*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   This CO is more focused on analog modulation. However, the spectral efficiency of PSK (especially QPSK and higher-order) is a key characteristic, analogous to the spectral efficiency discussions in analog modulation. The concept of power efficiency is also relevant as PSK has a constant envelope.

*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   This CO is directly addressed. The notes detail the processing blocks of PSK modulators (e.g., serial-to-parallel converters, modulators) and demodulators (e.g., multipliers, filters, decision circuits), which are integral parts of a digital communication system.

*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   This CO is thoroughly covered. The notes explain how PSK techniques are used to transmit digital data by manipulating the phase of a carrier, and the applications highlight where this knowledge is applied in real-world digital transmission systems.

This comprehensive study material provides a solid foundation for understanding Phase Shift Keying within the context of digital bandpass communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
