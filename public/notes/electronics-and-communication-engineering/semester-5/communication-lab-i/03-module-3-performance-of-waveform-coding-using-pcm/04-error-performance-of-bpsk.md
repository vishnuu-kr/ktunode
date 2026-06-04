---
title: "Error Performance of BPSK"
subject: "COMMUNICATION LAB I"
module: "Module 3: Performance of Waveform Coding Using PCM"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecb0"
status: "completed"
scrapedAt: "2026-05-23T17:54:20.561Z"
---
# COMMUNICATION LAB I - Module 3: Performance of Waveform Coding Using PCM

## Topic: Error Performance of BPSK

---

### 1. Introduction to Digital Modulation and BPSK

Digital modulation is the process of encoding digital data onto an analog carrier wave. This allows us to transmit digital information over analog communication channels. Binary Phase Shift Keying (BPSK) is one of the simplest and most fundamental digital modulation techniques.

**Key Concepts:**

*   **Modulation:** The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted.
*   **Digital Modulation:** Using digital data (bits) to control the parameters (amplitude, frequency, phase) of a carrier signal.
*   **BPSK (Binary Phase Shift Keying):** A digital modulation scheme where the phase of the carrier signal is shifted by 180 degrees to represent two distinct binary states (0 and 1).
    *   A '0' bit is typically represented by a carrier wave with one phase (e.g., 0 degrees).
    *   A '1' bit is typically represented by a carrier wave with a phase shifted by 180 degrees (e.g., 180 degrees).

**Mathematical Representation of BPSK:**

A BPSK modulated signal can be represented as:

$s(t) = A \cos(2\pi f_c t + \phi)$

where:
*   $A$ is the amplitude.
*   $f_c$ is the carrier frequency.
*   $\phi$ is the phase, which is switched between two values:
    *   $\phi = 0$ for bit '0'
    *   $\phi = \pi$ (or 180 degrees) for bit '1'

This can also be expressed as:

$s(t) = d(t) \cos(2\pi f_c t)$

where $d(t)$ is a bipolar NRZ (Non-Return-to-Zero) signal that alternates between +A and -A based on the incoming binary data.

**Example:**

If the binary sequence is 0101, and the carrier frequency is $f_c$, a BPSK signal would look like:

*   Bit '0': $A \cos(2\pi f_c t)$
*   Bit '1': $-A \cos(2\pi f_c t)$ (which is equivalent to $A \cos(2\pi f_c t + \pi)$)

**Relevant Textbooks/References:**

*   **Principles of Communication Systems Simulation with Wireless Applications (Tranter, Shanmugan, Rappaport, Kosbar):** This book likely covers the fundamentals of digital modulation schemes, including BPSK, and their signal representations.
*   **Digital Modulations using Python (Viswanathan):** This book would provide practical examples and Python implementations of BPSK, enabling simulation and understanding of its behavior.
*   **Modern Digital and Analog Communication Systems (Lathi & Ding):** A comprehensive resource for digital modulation techniques, including detailed mathematical derivations and performance analysis of BPSK.
*   **Introduction to Analog and Digital Communication (Haykin & Moher):** Provides foundational knowledge on digital modulation schemes and their spectral characteristics.

---

### 2. Performance Metrics: Bit Error Rate (BER)

The most crucial metric for evaluating the performance of a digital communication system, especially in the presence of noise, is the **Bit Error Rate (BER)**.

**Key Concepts:**

*   **Bit Error Rate (BER):** The ratio of the number of erroneous bits received to the total number of bits transmitted.
    $BER = \frac{\text{Number of corrupted bits}}{\text{Total number of bits transmitted}}$
*   **Noise:** Unwanted random signals that interfere with the desired signal. In communication systems, **Additive White Gaussian Noise (AWGN)** is a common model for channel noise.
*   **AWGN Channel:** A communication channel characterized by the addition of Gaussian noise that is independent of the signal and has a constant power spectral density over a wide range of frequencies.
*   **Signal-to-Noise Ratio (SNR):** The ratio of the power of the signal to the power of the noise. It is a critical factor influencing the BER. Often expressed in dB.
    *   **Eb/N0:** Energy per bit to noise power spectral density ratio. This is a normalized measure of SNR that is independent of the bit rate.
        $E_b = \frac{P_s}{R_b}$ where $P_s$ is signal power and $R_b$ is bit rate.
        $N_0$ is the noise power spectral density.
        $\frac{E_b}{N_0} = \frac{P_s/R_b}{N_0} = \frac{P_s}{N_0 R_b}$

**BPSK Error Performance in AWGN:**

In an AWGN channel, the probability of a bit error for BPSK can be derived. The decision at the receiver is made based on the sign of the received signal plus noise. For BPSK, the optimal receiver uses a matched filter.

The probability of bit error ($P_b$) for BPSK in an AWGN channel is given by:

$P_b = Q\left(\sqrt{\frac{2 E_b}{N_0}}\right)$

where:
*   $Q(x)$ is the Q-function, which represents the tail probability of the standard normal distribution: $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$.
*   $E_b/N_0$ is the energy per bit to noise power spectral density ratio.

**Understanding the Q-function:**

The Q-function is a non-linear function. As $E_b/N_0$ increases (meaning a stronger signal relative to noise), the argument to the Q-function becomes larger, and the value of $Q(\cdot)$ decreases, leading to a lower BER.

**Important Point to Remember:**

*   The BER of BPSK is directly related to the $E_b/N_0$. A higher $E_b/N_0$ results in a lower BER.

**Relevant Textbooks/References:**

*   **Principles of Communication Systems Simulation with Wireless Applications (Tranter, Shanmugan, Rappaport, Kosbar):** This book will delve into the derivation of the BER for BPSK and other modulation schemes, explaining the role of the Q-function and $E_b/N_0$.
*   **Modern Digital and Analog Communication Systems (Lathi & Ding):** Provides a thorough analysis of error performance for various digital modulation schemes, including detailed mathematical derivations for BPSK BER.
*   **Communication Systems (Haykin & Moher):** Explains the concepts of AWGN channels and their impact on signal detection and error probability.

---

### 3. Simulation of BPSK Error Performance

Simulating the error performance of BPSK allows us to verify theoretical predictions and observe how changes in channel conditions (like noise level) affect the BER. This directly relates to **Course Outcome 2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**

**Simulation Steps (Conceptual):**

1.  **Generate Binary Data:** Create a sequence of random binary bits (0s and 1s).
2.  **BPSK Modulation:** Convert the binary data into BPSK symbols.
    *   For each '0', transmit a carrier signal with phase 0.
    *   For each '1', transmit a carrier signal with phase $\pi$.
3.  **Add AWGN:** Add random Gaussian noise to the modulated signal. The variance of the noise is controlled by the desired $E_b/N_0$.
4.  **BPSK Demodulation (Detection):** At the receiver, use a matched filter or correlation receiver to detect the phase of the incoming signal.
    *   If the detected phase is closer to 0, decode as '0'.
    *   If the detected phase is closer to $\pi$, decode as '1'.
5.  **Error Counting:** Compare the received bits with the transmitted bits and count the number of errors.
6.  **Calculate BER:** Divide the number of errors by the total number of bits transmitted.
7.  **Repeat for different SNR values:** Vary the noise level (i.e., $E_b/N_0$) and repeat steps 1-6 to obtain BER values for different SNR conditions.
8.  **Plot BER vs. SNR:** Plot the calculated BER against the corresponding $E_b/N_0$ values. This plot is often called a "waterfall plot" or "BER curve."

**Example using Python (Conceptual - Refer to Viswanathan's book for actual code):**

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.special import erfc # erfc is related to the Q-function

# --- Simulation Parameters ---
num_bits = 100000
Eb_N0_dB = np.arange(0, 10, 0.5) # Range of Eb/N0 in dB
N0 = 1.0 # Assume N0 = 1 for simplicity, adjust Eb for SNR

# --- Theoretical BER Calculation ---
# P_b = Q(sqrt(2*Eb/N0))
# Eb/N0 in linear scale
Eb_N0_linear = 10**(Eb_N0_dB / 10)
theoretical_ber = 0.5 * erfc(np.sqrt(Eb_N0_linear))

# --- Simulation (Conceptual) ---
# For demonstration, let's show how to calculate BER for a single Eb/N0
# This part would be inside a loop in a full simulation

# Example for a specific Eb/N0
current_Eb_N0_dB = 5
current_Eb_N0_linear = 10**(current_Eb_N0_dB / 10)
sigma_squared = N0 / (2 * current_Eb_N0_linear) # Variance of noise for AWGN

# 1. Generate Binary Data
tx_bits = np.random.randint(0, 2, num_bits)

# 2. BPSK Modulation
# Map 0 to -1, 1 to +1
tx_symbols = 2 * tx_bits - 1

# 3. Add AWGN
# Assuming signal amplitude is 1 for simplicity (so Eb = 1)
noise = np.sqrt(sigma_squared) * np.random.randn(num_bits)
rx_symbols = tx_symbols + noise

# 4. BPSK Demodulation
# If rx_symbols > 0, decode as 1; otherwise, decode as 0
rx_bits = (rx_symbols > 0).astype(int)

# 5. Error Counting
num_errors = np.sum(tx_bits != rx_bits)

# 6. Calculate BER
simulated_ber_single_point = num_errors / num_bits
print(f"Simulated BER at Eb/N0 = {current_Eb_N0_dB} dB: {simulated_ber_single_point:.6f}")


# --- Plotting ---
# In a real simulation, you would collect simulated_ber for all Eb_N0_dB values
# For now, let's just plot the theoretical curve
plt.figure()
plt.semilogy(Eb_N0_dB, theoretical_ber, label='Theoretical BER')
# plt.semilogy(Eb_N0_dB, simulated_bers_array, 'o', label='Simulated BER') # If you have simulation results
plt.xlabel('Eb/N0 (dB)')
plt.ylabel('Probability of Bit Error (BER)')
plt.title('BPSK Error Performance')
plt.grid(True)
plt.legend()
plt.show()
```

**Important Points to Remember:**

*   The simulation results should closely match the theoretical BER curve for BPSK as the number of transmitted bits increases.
*   The key to the simulation is accurately modeling the AWGN channel and the decision process at the receiver.
*   Using a large number of bits is crucial for obtaining statistically meaningful BER estimates.

**Relevant Textbooks/References:**

*   **Digital Modulations using Python (Viswanathan):** This is the most direct reference for implementing these simulations in Python. It provides code examples and explanations for setting up communication system simulations.
*   **Principles of Communication Systems Simulation with Wireless Applications (Tranter, Shanmugan, Rappaport, Kosbar):** Offers a theoretical foundation for simulations, explaining the underlying principles of modulation, channel modeling, and detection.
*   **Course Outcome 2:** This entire section directly addresses simulating the error performance of digital modulation schemes like BPSK.

---

### 4. Factors Affecting BPSK Error Performance

While the theoretical BER for BPSK in AWGN is well-defined, several practical factors can influence its actual performance in a real-world system.

**Key Factors:**

*   **Noise Level ($E_b/N_0$):** As discussed, this is the primary factor. Higher noise power (lower $E_b/N_0$) leads to more errors.
*   **Bandwidth Limitations:** Real communication channels have finite bandwidth. This can lead to **intersymbol interference (ISI)** if the pulse shape is not carefully chosen, impacting the ability of the receiver to distinguish between consecutive bits. BPSK itself is spectrally efficient, but the overall system bandwidth must accommodate the transmitted signal.
*   **Non-Ideal Channel Conditions:**
    *   **Fading:** Signal strength fluctuations due to multipath propagation or shadowing can significantly degrade performance.
    *   **Interference:** Other signals operating in the same or adjacent frequency bands can corrupt the received signal.
*   **Synchronization Errors:**
    *   **Carrier Synchronization:** The receiver needs to recover the carrier frequency and phase accurately. Any error in carrier synchronization can lead to a phase offset, degrading the BER.
    *   **Symbol Synchronization (Timing):** The receiver must know exactly when each symbol begins and ends to sample the received signal correctly. Timing jitter or incorrect symbol timing can lead to errors.
*   **Non-Linearities in the System:** Amplifiers or other components can introduce non-linear distortion, which can affect the signal and increase errors.
*   **Quantization Errors (in Digital Systems):** If the signal is digitized at various stages (e.g., in an ADC or DAC), quantization noise can be introduced. While BPSK is a digital modulation, intermediate analog processing stages can be affected.

**Important Point to Remember:**

*   The theoretical $P_b = Q(\sqrt{2 E_b/N_0})$ is an ideal result for an AWGN channel with perfect synchronization and no other impairments. Practical systems will often exhibit worse performance due to these real-world factors.

**Relevant Textbooks/References:**

*   **Principles of Communication Systems Simulation with Wireless Applications (Tranter, Shanmugan, Rappaport, Kosbar):** Discusses various channel impairments like fading and interference and how they affect system performance.
*   **Modern Digital and Analog Communication Systems (Lathi & Ding):** Covers practical aspects of digital communication systems, including synchronization techniques and the impact of non-ideal components.
*   **Communication Systems (Haykin & Moher):** Explains the effects of synchronization and various channel impairments on receiver performance.
*   **Electronic communication systems (Kennedy):** Provides a broad overview of electronic communication systems and the factors that influence their performance.

---

### 5. Learning Outcomes Addressed

This topic directly contributes to several learning outcomes:

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   While this topic focuses on performance analysis and simulation, understanding BPSK's signal representation is foundational for setting up any prototype circuit implementing it. Knowing how bits map to phase shifts is crucial for the modulator/demodulator design.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   This is a direct application. The detailed explanation of BER, $E_b/N_0$, the Q-function, and the simulation steps directly enable students to perform such simulations for BPSK.
*   **CO3: Develop hands-on skills to emulate a communication system with software-defined radio working in a team.**
    *   Understanding BPSK's error performance is essential context when using SDRs. When you transmit and receive BPSK signals using an SDR, you will be concerned with the BER you observe. This knowledge helps in interpreting SDR results and understanding the impact of factors like gain settings (which affect SNR) or the quality of the channel. For example, if you observe a high BER, you know it's likely due to insufficient $E_b/N_0$ or other impairments that affect the signal quality.

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary performance metric used to evaluate the error performance of BPSK in a digital communication system?
a) Bandwidth Efficiency
b) Power Spectral Density
c) Bit Error Rate (BER)
d) Data Rate

**Answer 1:**
c) Bit Error Rate (BER)

**Question 2:**
The probability of bit error for BPSK in an AWGN channel is given by $P_b = Q(\sqrt{2 E_b/N_0})$. If $E_b/N_0$ is increased by 3 dB, how does the theoretical BER change?
a) It doubles.
b) It halves.
c) It decreases significantly.
d) It increases.

**Answer 2:**
c) It decreases significantly.
*Explanation:* A 3 dB increase in $E_b/N_0$ means the value of $E_b/N_0$ is doubled. Since the argument to the Q-function is $\sqrt{2 E_b/N_0}$, the argument increases, and the Q-function value decreases exponentially, leading to a significant decrease in BER.

**Question 3:**
If you are simulating BPSK in Python and you want to reduce the Bit Error Rate (BER), what parameter would you primarily adjust in the simulation to improve performance?
a) The number of bits transmitted.
b) The carrier frequency.
c) The energy per bit to noise power spectral density ratio ($E_b/N_0$).
d) The modulation scheme (e.g., change from BPSK to QPSK).

**Answer 3:**
c) The energy per bit to noise power spectral density ratio ($E_b/N_0$).
*Explanation:* Increasing $E_b/N_0$ directly improves the signal-to-noise ratio, making it easier for the receiver to distinguish between the two BPSK phases, thus reducing errors. While changing the modulation scheme (like to QPSK) can affect BER, the question asks about improving performance *within* the context of BPSK.

**Question 4:**
Describe the concept of additive white Gaussian noise (AWGN) and its importance in understanding BPSK error performance.

**Answer 4:**
AWGN is a mathematical model for noise that is:
*   **Additive:** The noise is added to the transmitted signal.
*   **White:** The noise has a constant power spectral density across all frequencies, meaning it contains all frequencies with equal intensity.
*   **Gaussian:** The amplitude distribution of the noise follows a Gaussian (normal) probability distribution.

AWGN is crucial because it represents a fundamental limit on the performance of many communication systems. The derivation of the BPSK error probability, $P_b = Q(\sqrt{2 E_b/N_0})$, relies on the assumption of an AWGN channel. This formula allows us to quantify how the noise level ($N_0$) and signal strength (represented by $E_b$) affect the likelihood of errors.

**Question 5 (Hands-on/Simulation Focused):**
When performing a BPSK simulation, what would be the observable effect on the received signal if the AWGN power is very high (i.e., very low $E_b/N_0$)?

**Answer 5:**
If the AWGN power is very high (low $E_b/N_0$), the noise component added to the transmitted BPSK symbols will be large in magnitude relative to the signal amplitude. At the receiver, the decision threshold (e.g., zero) will be crossed more frequently by the noisy signal, leading to misinterpretations of the transmitted bits. This means a '0' might be decoded as a '1', and a '1' as a '0', resulting in a high Bit Error Rate (BER). The received constellation points (if visualized) would be very spread out due to the large noise variance.

---

### 7. Key Takeaways

*   **BPSK Basics:** BPSK uses phase shifts of 0 and 180 degrees to represent binary data.
*   **BER is Key:** The Bit Error Rate (BER) is the primary measure of BPSK performance.
*   **AWGN Impact:** The Bit Error Rate is fundamentally limited by Additive White Gaussian Noise.
*   **$E_b/N_0$ Dominance:** The ratio of Energy per bit to noise power spectral density ($E_b/N_0$) is the crucial parameter dictating BPSK's BER in an AWGN channel. Higher $E_b/N_0$ means lower BER.
*   **The Q-function:** The theoretical BER for BPSK is expressed using the Q-function: $P_b = Q(\sqrt{2 E_b/N_0})$.
*   **Simulation Verification:** Simulations in tools like Python are essential for verifying theoretical BER curves and understanding the practical impact of noise on BPSK performance.
*   **Real-World Factors:** Practical systems face additional challenges like fading, interference, and synchronization errors that can degrade performance beyond the ideal AWGN case.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
