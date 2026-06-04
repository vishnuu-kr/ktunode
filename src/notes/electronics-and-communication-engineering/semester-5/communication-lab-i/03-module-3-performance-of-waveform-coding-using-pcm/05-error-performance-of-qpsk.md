---
title: "Error Performance of QPSK"
subject: "COMMUNICATION LAB I"
module: "Module 3: Performance of Waveform Coding Using PCM"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecb1"
status: "completed"
scrapedAt: "2026-05-23T17:54:21.270Z"
---
## COMMUNICATION LAB I: Module 3 - Performance of Waveform Coding Using PCM

### Topic: Error Performance of QPSK

---

### 1. Introduction to QPSK

**Quadrature Phase Shift Keying (QPSK)** is a digital modulation technique that encodes digital data by changing (modulating) the phase of a reference signal (the carrier wave). Unlike Binary Phase Shift Keying (BPSK) which uses two phases, QPSK uses four distinct phases to transmit two bits of information per symbol. This allows for a higher data rate for a given bandwidth.

**Key Concepts:**

*   **Phase:** The position of a point in time on a waveform cycle.
*   **Symbol:** A single unit of information transmitted. In QPSK, a symbol carries two bits.
*   **Carrier Wave:** A sinusoidal waveform used to carry information.
*   **Bandwidth:** The range of frequencies over which a signal is transmitted.

**How QPSK Works:**

QPSK divides the input binary data stream into blocks of two bits. Each two-bit block is then mapped to one of the four possible phase shifts of the carrier signal. The four possible phase shifts are typically 0°, 90°, 180°, and 270°.

*   **00** -> 0°
*   **01** -> 90°
*   **11** -> 180°
*   **10** -> 270°

(Note: The mapping can vary, but this is a common convention.)

**References:**

*   **[Haykin & Moher, 5th Ed.]**: Chapter 7 on Digital Modulation Techniques will provide a detailed mathematical derivation of QPSK and its properties.
*   **[Lathi & Ding, 5th Ed.]**: Chapter 6 on Digital Modulation, specifically the section on PSK, will offer a good overview and comparison with other digital modulation schemes.
*   **[Viswanathan, 2019]**: Chapter 4 on Phase Shift Keying (PSK) will likely provide practical examples and Python code for simulating QPSK.

---

### 2. Error Performance of QPSK

The error performance of a digital modulation scheme is typically measured by the **Bit Error Rate (BER)**, which is the ratio of the number of incorrect bits received to the total number of bits transmitted. For QPSK, the error performance is heavily influenced by the **Signal-to-Noise Ratio (SNR)** and the type of channel noise.

**Key Concepts:**

*   **Bit Error Rate (BER):** A measure of the quality of a digital communication system. A lower BER indicates a better system.
*   **Signal-to-Noise Ratio (SNR):** The ratio of the power of the desired signal to the power of the background noise. Higher SNR generally leads to lower BER.
*   **Noise:** Unwanted disturbances that interfere with the signal. Common types include additive white Gaussian noise (AWGN).
*   **Decision Regions:** In the receiver, the incoming signal is compared to predefined thresholds. The regions defining these thresholds are called decision regions.
*   **Probability of Error (P_e):** The likelihood that a transmitted bit or symbol is incorrectly detected.

**Factors Affecting QPSK Error Performance:**

1.  **SNR (Eb/N0):** The most significant factor. As SNR increases, the probability of error decreases. Eb/N0 is the energy per bit to noise power spectral density ratio, a crucial parameter for comparing different modulation schemes.
2.  **Channel Characteristics:** The presence of fading, interference, and other impairments can degrade performance.
3.  **Receiver Design:** The quality of the demodulator and decision process affects error rates.

**Comparing QPSK to BPSK:**

QPSK transmits two bits per symbol, while BPSK transmits one bit per symbol. For the same symbol rate, QPSK has twice the bit rate of BPSK. To achieve the same BER, QPSK requires a higher SNR than BPSK. Specifically, QPSK requires approximately 3 dB higher SNR than BPSK for the same BER.

**Mathematical Formulation of Error Probability:**

The probability of error for QPSK in an Additive White Gaussian Noise (AWGN) channel can be derived by considering the error probability of detecting a specific symbol.

*   **Symbol Error Probability ($P_s$):** The probability that an entire symbol is misinterpreted.
*   **Bit Error Probability ($P_b$):** The probability that a single bit is misinterpreted. For QPSK, $P_b \approx P_s / 2$ because each symbol error typically results in one bit error on average.

The probability of symbol error for QPSK in an AWGN channel is given by:

$P_s = Q\left(\sqrt{\frac{E_s}{N_0}}\right)$

where:
*   $E_s$ is the energy per symbol.
*   $N_0$ is the noise power spectral density.
*   $Q(x)$ is the Q-function, defined as $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$.

Since $E_s = 2 E_b$ (because each symbol carries 2 bits), we can express this in terms of Eb/N0:

$P_s = Q\left(\sqrt{\frac{2 E_b}{N_0}}\right)$

And the bit error probability is:

$P_b = \frac{1}{2} P_s = \frac{1}{2} Q\left(\sqrt{\frac{2 E_b}{N_0}}\right)$

**Important Relationship:**

The Q-function can be approximated by $Q(x) \approx \frac{1}{2} \text{erfc}\left(\frac{x}{\sqrt{2}}\right)$, where erfc is the complementary error function.

Using this, the BER for QPSK can be written as:

$P_b \approx \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right)$

**Key Observation:** The term $\sqrt{\frac{E_b}{N_0}}$ is the "normalized" SNR.

**References:**

*   **[Tranter, Shanmugan, Rappaport, Kosbar, 2nd Ed.]**: Chapter 8 on Digital Modulation Performance will delve into the mathematical analysis of BER for various modulation schemes, including QPSK.
*   **[Haykin, 5th Ed.]**: Chapter 7 will provide a thorough explanation of the Q-function and its application in calculating error probabilities.
*   **[Lathi & Ding, 5th Ed.]**: Chapter 6 will likely have graphical representations of BER vs. Eb/N0 for QPSK, illustrating the performance characteristics.
*   **[Viswanathan, 2019]**: This book will be invaluable for implementing BER simulations for QPSK in Python, allowing for practical observation of these error performance characteristics.

---

### 3. Simulation of QPSK Error Performance (CO2, CO3)

Simulating the error performance of QPSK is crucial for understanding its behavior in practical scenarios and for meeting the course outcomes. This involves creating a digital communication system model in software.

**Simulation Steps:**

1.  **Data Generation:** Generate a sequence of random binary bits (0s and 1s).
2.  **QPSK Modulator:**
    *   Group the bits into pairs (e.g., 00, 01, 10, 11).
    *   Map each pair to a specific phase shift.
    *   Generate two carrier signals in quadrature (one cosine, one sine).
    *   Modulate the carriers with the mapped phase information to create the QPSK signal.
3.  **Channel Model:**
    *   Introduce Additive White Gaussian Noise (AWGN) to the transmitted signal. The noise level is controlled by the desired SNR (Eb/N0).
    *   (Advanced) Consider other channel impairments like fading if applicable.
4.  **QPSK Demodulator:**
    *   Synchronize with the incoming signal (carrier recovery and symbol timing).
    *   Correlate the received signal with the locally generated quadrature carriers.
    *   Determine the phase of the received signal.
5.  **Decision Device:**
    *   Map the detected phase back to the corresponding two-bit sequence based on the predefined mapping.
6.  **BER Calculation:**
    *   Compare the transmitted bits with the received bits.
    *   Count the number of errors.
    *   Calculate BER = (Number of errors) / (Total number of bits).
7.  **Performance Plotting:**
    *   Plot BER against Eb/N0 for various SNR values. This will generate the characteristic QPSK BER curve.

**Python Implementation (Conceptual - based on [Viswanathan, 2019]):**

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import upfarrow, downfarrow
from scipy.special import erfc

# --- Simulation Parameters ---
num_bits = 100000
bits = np.random.randint(0, 2, num_bits)

# --- QPSK Modulation ---
# Mapping: 00 -> 0 deg, 01 -> 90 deg, 11 -> 180 deg, 10 -> 270 deg
# IQ representation: 00 -> (1,0), 01 -> (0,1), 11 -> (-1,0), 10 -> (0,-1)
iq_map = {
    (0, 0): (1, 0),
    (0, 1): (0, 1),
    (1, 1): (-1, 0),
    (1, 0): (0, -1)
}

qpsk_symbols = []
for i in range(0, num_bits, 2):
    pair = tuple(bits[i:i+2])
    qpsk_symbols.append(iq_map[pair])

# Convert to complex symbols (I + jQ)
complex_symbols = np.array([s[0] + 1j * s[1] for s in qpsk_symbols])

# --- Channel Simulation (AWGN) ---
# Eb/N0 in dB
eb_n0_db_values = np.arange(0, 10, 1)
ber_values = []

for eb_n0_db in eb_n0_db_values:
    # Convert Eb/N0 to linear scale
    eb_n0 = 10**(eb_n0_db / 10)

    # Calculate signal power and noise variance
    # Energy per symbol Es = 2 * Eb
    # Signal power Ps = Es / Ts = (2 * Eb) / (2 * Tb) = Eb / Tb (assuming symbol duration = 2 bit duration)
    # Noisy signal = transmitted_signal + noise
    # Noise variance = N0/2 * Baud_rate = N0/2 * (1/Ts) = N0/(2 * 2*Tb) = N0/4Tb
    # Ps = Eb/Tb. We need Noise variance.
    # Variance of IQ symbols (after mapping) = (1^2 + 0^2 + (-1)^2 + 0^2) / 4 = 1
    # So, the signal power is normalized to 1.
    # Eb/N0 = Ps / (Noise Bandwidth * N0) = Ps / (1/Tb * N0) = Ps * Tb / N0
    # Since Ps is normalized to 1 and Tb is 1 (for simplicity in this normalized model)
    # Eb/N0 = 1 / N0. So, N0 = 1 / Eb/N0
    # Noise variance sigma^2 = N0 = 1 / eb_n0
    noise_variance = 1 / eb_n0
    noise = np.sqrt(noise_variance/2) * (np.random.randn(len(complex_symbols)) + 1j * np.random.randn(len(complex_symbols)))

    received_symbols = complex_symbols + noise

    # --- QPSK Demodulation ---
    detected_bits = []
    for symbol in received_symbols:
        # Find the closest constellation point
        # Distance from (1,0), (0,1), (-1,0), (0,-1)
        dist_0 = np.abs(symbol - (1 + 0j))**2
        dist_90 = np.abs(symbol - (0 + 1j))**2
        dist_180 = np.abs(symbol - (-1 + 0j))**2
        dist_270 = np.abs(symbol - (0 - 1j))**2

        min_dist_idx = np.argmin([dist_0, dist_90, dist_180, dist_270])

        if min_dist_idx == 0: # 00
            detected_bits.extend([0, 0])
        elif min_dist_idx == 1: # 01
            detected_bits.extend([0, 1])
        elif min_dist_idx == 2: # 11
            detected_bits.extend([1, 1])
        else: # min_dist_idx == 3: 10
            detected_bits.extend([1, 0])

    # --- BER Calculation ---
    detected_bits_array = np.array(detected_bits)
    errors = np.sum(bits != detected_bits_array)
    ber = errors / num_bits
    ber_values.append(ber)

# --- Plotting ---
plt.figure()
plt.semilogy(eb_n0_db_values, ber_values, marker='o', linestyle='-')

# Theoretical BER curve for QPSK
theoretical_ber = 0.5 * erfc(np.sqrt(10**(eb_n0_db_values / 10) / 2)) # Using Eb/N0 for QPSK
plt.semilogy(eb_n0_db_values, theoretical_ber, linestyle='--')

plt.xlabel('Eb/N0 (dB)')
plt.ylabel('Bit Error Rate (BER)')
plt.title('QPSK Error Performance')
plt.grid(True, which="both", ls="--")
plt.legend(['Simulated BER', 'Theoretical BER'])
plt.show()
```

**Connecting to Course Outcomes:**

*   **CO2 (Simulate error performance):** This simulation directly addresses this outcome by modeling the modulation, channel, and demodulation process and calculating the BER.
*   **CO3 (Develop hands-on skills with SDR):** While this is a software simulation, the principles are transferable to SDR implementation. Understanding the underlying digital signal processing is essential before working with real-time SDR hardware. You'd be implementing the same logic on the SDR platform.
*   **CO1 (Setup prototype circuits):** The simulation provides a foundation for understanding how to design and test the building blocks of such a communication system, which would be implemented in hardware prototypes.

---

### 4. Practical Considerations and Tips

*   **Synchronization:** Accurate symbol timing and carrier recovery are critical for demodulating QPSK correctly. Imperfect synchronization will lead to increased bit errors.
*   **Constellation Diagrams:** Visualizing the received symbols on a constellation diagram (I/Q plane) helps understand the effect of noise and other impairments. Well-separated points indicate good performance.
*   **Eb/N0 vs. SNR:** Be mindful of the distinction between Eb/N0 (energy per bit to noise power spectral density) and SNR (signal power to noise power). They are related but not identical. For QPSK, Eb/N0 is the standard metric for comparing performance.
*   **Higher-Order Modulation:** QPSK is a type of M-ary modulation where M=4. Other M-ary schemes (like 8PSK, 16QAM) offer higher data rates but require higher SNRs for comparable error performance.
*   **RTL-SDR Relevance:** The RTL-SDR, being a Software Defined Radio, is excellent for experimenting with digital modulation schemes like QPSK. You can transmit QPSK signals using one SDR and receive/demodulate them with another, or even simulate it entirely in software using libraries like `numpy` and `scipy` as demonstrated above.

**References:**

*   **[Laufer, 2nd Ed.]**: This book will provide practical guidance on using the RTL-SDR, including setting up the hardware and using SDR software for receiving and transmitting signals. This is vital for bridging the gap between simulation and practical implementation.
*   **[Haykin & Moher, 2nd Ed.]**: This reference offers a foundational understanding of communication systems that can be applied to the practical aspects of QPSK implementation.

---

### 5. Practice Questions and Answers

**Question 1:** What is the main advantage of using QPSK over BPSK?
**Answer:** QPSK transmits two bits per symbol, while BPSK transmits one bit per symbol. This means QPSK can achieve a higher data rate for the same symbol rate or bandwidth.

**Question 2:** How many possible phases does QPSK use?
**Answer:** QPSK uses four possible phases.

**Question 3:** For a given Bit Error Rate (BER), how much higher is the required Eb/N0 for QPSK compared to BPSK?
**Answer:** QPSK requires approximately 3 dB higher Eb/N0 than BPSK for the same BER.

**Question 4:** If the received QPSK symbol is at coordinates (0.707, 0.707) in the I/Q plane, which two bits were most likely transmitted?
**Answer:** The phase corresponding to (0.707, 0.707) is approximately 45 degrees. This phase is not a standard QPSK constellation point. However, if we consider the closest standard points:
*   0° (1,0)
*   90° (0,1)
*   180° (-1,0)
*   270° (0,-1)

The point (0.707, 0.707) is closest to (0,1) (representing 90 degrees) and also has a positive I component. A more precise QPSK mapping might involve points like $(1/\sqrt{2}, 1/\sqrt{2})$ for 45 degrees, $(1/\sqrt{2}, -1/\sqrt{2})$ for -45 degrees, etc. If we assume a standard QPSK where phases are multiples of 90 degrees and the mapping is:
    *   00 -> 45° (0.707+j0.707)
    *   01 -> 135° (-0.707+j0.707)
    *   11 -> 225° (-0.707-j0.707)
    *   10 -> 315° (0.707-j0.707)

Then the received symbol (0.707, 0.707) would correspond to the transmitted bits **00**. *(Self-correction: The initial mapping assumed 0, 90, 180, 270. The question implies a possible phase of 45 degrees. Let's re-evaluate based on common QPSK constellations)*

**Revised Answer for Q4 (Common QPSK Constellation):**
A common QPSK constellation uses phases of 45°, 135°, 225°, and 315°.
*   45°: $(1/\sqrt{2}, 1/\sqrt{2}) \approx (0.707, 0.707)$ -> **00**
*   135°: $(-1/\sqrt{2}, 1/\sqrt{2}) \approx (-0.707, 0.707)$ -> **01**
*   225°: $(-1/\sqrt{2}, -1/\sqrt{2}) \approx (-0.707, -0.707)$ -> **11**
*   315°: $(1/\sqrt{2}, -1/\sqrt{2}) \approx (0.707, -0.707)$ -> **10**

If the received symbol is at (0.707, 0.707), it most closely matches the constellation point for **00**.

**Question 5:** In the QPSK simulation code provided, how is the noise variance related to Eb/N0?
**Answer:** The noise variance ($\sigma^2$) is set to $1 / \text{eb\_n0}$ (where eb\_n0 is the linear Eb/N0 value). This is because the transmitted symbols are normalized to have a power of 1, and Eb/N0 is effectively the signal power divided by the noise power spectral density ($S/\frac{N_0}{2}$). When signal power is normalized to 1, Eb/N0 becomes $1/N_0$, hence $N_0 = 1/\text{Eb/N0}$. The variance of the complex Gaussian noise is $N_0$, which translates to $N_0/2$ for the real and imaginary parts.

---

### 6. Important Points to Remember

*   **QPSK Efficiency:** QPSK is more spectrally efficient than BPSK because it transmits more bits per symbol.
*   **SNR Requirement:** This increased efficiency comes at the cost of a higher required SNR for the same BER.
*   **BER Curve:** The BER vs. Eb/N0 curve is a fundamental characteristic of any digital modulation scheme. For QPSK, it shows a clear exponential decay of BER with increasing Eb/N0.
*   **Simulation is Key:** Understanding and simulating the error performance is vital for designing robust digital communication systems.
*   **RTL-SDR for Practicality:** The RTL-SDR provides a hands-on platform to implement and test these theoretical concepts in real-world radio environments.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
