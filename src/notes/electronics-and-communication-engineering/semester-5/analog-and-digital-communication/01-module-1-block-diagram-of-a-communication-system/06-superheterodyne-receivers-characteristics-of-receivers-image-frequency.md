---
title: "Superheterodyne receivers- Characteristics of receivers –image frequency."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 1: Block diagram of a communication system."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8fd"
status: "completed"
scrapedAt: "2026-05-23T17:52:46.922Z"
---
# ANALOG AND DIGITAL COMMUNICATION
## Module 1: Block Diagram of a Communication System
### Topic: Superheterodyne Receivers - Characteristics of Receivers - Image Frequency

---

### 1. Introduction to Radio Receivers

A communication system's receiver's primary role is to recover the original information signal from a modulated carrier wave that has traveled through a communication channel. This module focuses on the fundamental characteristics of receivers and a crucial aspect of their design: the superheterodyne receiver.

**Key Concepts:**

*   **Receiver:** A device that demodulates an incoming modulated signal and extracts the original information.
*   **Demodulation:** The process of recovering the original message signal from a modulated carrier.
*   **Selectivity:** The ability of a receiver to tune to a specific desired station while rejecting all other unwanted signals.
*   **Sensitivity:** The ability of a receiver to detect weak signals and amplify them to a usable level.
*   **Fidelity:** The accuracy with which the receiver reproduces the original information signal.

**Reference:**
*   Haykin & Moher, "Communication Systems" (5th Ed.): Chapter 1, "Introduction to Communication Systems," provides an overview of receiver functions.
*   Lathi & Ding, "Modern Digital and Analog Communication Systems" (5th Ed.): Chapter 1, "Introduction," touches upon the role of the receiver.

---

### 2. Characteristics of Receivers

Understanding the performance of a receiver is critical for its effective design and operation. The key characteristics are:

*   **Sensitivity:**
    *   **Definition:** The minimum input signal level (usually expressed in dBm or microvolts) required to produce a usable output signal with a specified signal-to-noise ratio (SNR).
    *   **Importance:** A sensitive receiver can detect weak signals that have undergone significant attenuation during transmission.
    *   **Factors affecting sensitivity:** Noise figure of the receiver, bandwidth, and the minimum acceptable SNR.
    *   **Example:** A receiver with a sensitivity of -100 dBm can detect signals as weak as $10^{-10}$ milliwatts.

*   **Selectivity:**
    *   **Definition:** The ability of a receiver to select a desired radio frequency signal and reject other signals at different frequencies.
    *   **Importance:** Crucial for separating desired channels from adjacent interfering channels, especially in crowded radio spectrums.
    *   **Measurement:** Typically specified in terms of the attenuation (in dB) of signals at frequencies off the tuned frequency, particularly at specific offsets (e.g., $\pm$10 kHz, $\pm$1 MHz).
    *   **Factors affecting selectivity:** The quality factor (Q) of the tuned circuits (filters) in the receiver. Higher Q leads to better selectivity.

*   **Fidelity:**
    *   **Definition:** The degree to which the demodulated output signal accurately represents the original transmitted information signal.
    *   **Importance:** Ensures that the received audio or data is a faithful reproduction of the original.
    *   **Factors affecting fidelity:** Non-linearities in the receiver's amplification stages, distortion introduced by filters, and the accuracy of the demodulation process.

*   **Signal-to-Noise Ratio (SNR):**
    *   **Definition:** The ratio of the power of the desired signal to the power of the noise at the output of the receiver.
    *   **Importance:** A higher SNR leads to a clearer and more reliable reception of the information.
    *   **Noise Figure (NF):** A measure of the degradation of the SNR caused by the receiver itself. A lower noise figure indicates a better receiver.
        *   **Formula:** $NF = \frac{SNR_{input}}{SNR_{output}}$
        *   **In dB:** $NF_{dB} = 10 \log_{10} \left( \frac{SNR_{input}}{SNR_{output}} \right)$

**Course Outcome Alignment:**
*   **CO1 (Illustrate principles of analog communication systems):** Understanding receiver characteristics is fundamental to how analog signals are processed.
*   **CO2 (Explain basic concepts of digital communication):** While the focus is analog here, these characteristics are also vital for digital receivers.

**Important Points to Remember:**
*   Sensitivity, selectivity, and fidelity are the three primary performance metrics for any radio receiver.
*   These characteristics are often interdependent; improving one might negatively impact another. For instance, sharper filters for better selectivity can sometimes reduce fidelity.

---

### 3. The Superheterodyne Receiver

The superheterodyne receiver, often abbreviated as "superhet," is the most common type of radio receiver used in a wide range of applications, from AM/FM radios to sophisticated wireless communication systems. Its key innovation lies in converting the incoming radio frequency (RF) signal to a fixed intermediate frequency (IF) before demodulation.

**Block Diagram of a Superheterodyne Receiver:**

```
   +-------+     +-----------+     +--------------+     +--------------+     +-----------+     +-----------+
-->| RF Amp|---->| Mixer     |---->| Local Osc.   |---->| IF Amp       |---->| Detector  |---->| AF Amp    |----> Output
   +-------+     +-----------+     +--------------+     +--------------+     +-----------+     +-----------+
                      ^                                                              ^
                      |                                                              |
                      +--------------------------------------------------------------+
                                           Tunable Filter (optional at RF input)
```

**Key Components and Their Functions:**

1.  **Antenna:** Captures the radio waves from the air.
2.  **RF Amplifier (Radio Frequency Amplifier):**
    *   **Function:** Amplifies the weak incoming RF signal.
    *   **Tuning:** Usually designed to be tunable over the desired frequency range to select the station.
    *   **Impact:** Contributes to the receiver's sensitivity. Its noise figure is crucial for overall sensitivity.
    *   **Reference:** Haykin & Moher (5th Ed.) discusses RF front-end design.
3.  **Local Oscillator (LO):**
    *   **Function:** Generates a stable sinusoidal signal at a specific frequency, known as the local oscillator frequency ($f_{LO}$).
    *   **Tuning:** Its frequency is varied in conjunction with the RF tuning to maintain a constant difference between the RF signal frequency ($f_{RF}$) and the LO frequency.
    *   **Reference:** Kennedy, "Electronic Communication Systems" (6th Ed.) covers oscillator circuits.
4.  **Mixer:**
    *   **Function:** Combines the incoming RF signal and the LO signal. It produces sum and difference frequencies. The desired output is the difference frequency, which is the Intermediate Frequency (IF).
    *   **Operation:** $f_{IF} = |f_{RF} - f_{LO}|$
    *   **Key Property:** The mixer's primary job is frequency conversion.
    *   **Reference:** Lathi & Ding (5th Ed.) explains mixer operation.
5.  **Intermediate Frequency (IF) Amplifier:**
    *   **Function:** Amplifies the signal at the fixed IF. This stage is crucial for achieving high gain and good selectivity.
    *   **Fixed Frequency:** Unlike the RF amplifier, the IF amplifier is tuned to a single, fixed frequency (e.g., 455 kHz for AM, 10.7 MHz for FM).
    *   **Selectivity:** The IF filters are designed to be very selective, providing the majority of the receiver's selectivity.
    *   **Reference:** Haykin & Moher (5th Ed.) dedicates sections to IF amplifier design.
6.  **Detector (Demodulator):**
    *   **Function:** Extracts the original information signal (audio, video, data) from the IF signal. The type of detector depends on the modulation scheme (e.g., envelope detector for AM, FM discriminator for FM).
    *   **Reference:** Taub & Schilling, "Principles of Communication Systems" (4th Ed.) provides detailed explanations of various detector circuits.
7.  **Audio Amplifier (AF Amplifier):**
    *   **Function:** Amplifies the detected information signal to a level suitable for output devices (e.g., speaker, headphones).

**Advantages of Superheterodyne Receivers:**

*   **High Selectivity:** Achieved by using fixed-tuned IF filters, which can be designed for very sharp selectivity.
*   **High Sensitivity:** The gain is concentrated in the IF amplifier stages, allowing for high overall gain with less noise contribution from later stages.
*   **Stable Operation:** The fixed IF simplifies filter design and amplification.

**Disadvantages of Superheterodyne Receivers:**

*   **Image Frequency Response:** A significant issue that needs careful management.
*   **Complexity:** More complex than simple TRF (Tuned Radio Frequency) receivers.
*   **Spurious Responses:** Susceptible to other unwanted signals besides the image frequency.

---

### 4. Image Frequency

The image frequency is a critical concept in superheterodyne receiver design and directly impacts its selectivity.

**What is an Image Frequency?**

When a signal at a desired frequency $f_{RF}$ is mixed with the local oscillator frequency $f_{LO}$, the mixer produces two output frequencies: $f_{LO} + f_{RF}$ and $|f_{LO} - f_{RF}|$. One of these is the desired IF, which we typically set as:

$f_{IF} = |f_{RF} - f_{LO}|$

An **image frequency ($f_{image}$)** is an unwanted input frequency, other than the desired $f_{RF}$, that can also produce the same IF output when mixed with the LO frequency. This occurs when:

$f_{IF} = |f_{image} - f_{LO}|$

Substituting the expression for $f_{IF}$:

$|f_{RF} - f_{LO}| = |f_{image} - f_{LO}|$

If we assume $f_{LO} > f_{RF}$ (a common scenario, e.g., in AM broadcasting where $f_{LO}$ is higher than $f_{RF}$), then:

$f_{LO} - f_{RF} = f_{image} - f_{LO}$
$2f_{LO} = f_{RF} + f_{image}$
$f_{LO} = \frac{f_{RF} + f_{image}}{2}$

Or, equivalently, the image frequency can be calculated as:

$f_{image} = f_{RF} + 2f_{IF}$  (if $f_{LO} > f_{RF}$)
$f_{image} = f_{RF} - 2f_{IF}$  (if $f_{LO} < f_{RF}$)

**In simpler terms:** If the receiver is tuned to a frequency $f_{RF}$, and there is another signal present at $f_{image}$, both signals, when mixed with the same $f_{LO}$, will produce the same IF signal. This means the detector will receive both the desired and the undesired signal, leading to interference.

**Example:**

Let's consider an AM radio receiver tuned to $f_{RF} = 1000$ kHz.
Assume the intermediate frequency (IF) is $f_{IF} = 455$ kHz.

To receive $f_{RF} = 1000$ kHz, the local oscillator frequency can be:
*   $f_{LO} = f_{RF} + f_{IF} = 1000 \text{ kHz} + 455 \text{ kHz} = 1455 \text{ kHz}$
*   Or, $f_{LO} = f_{RF} - f_{IF} = 1000 \text{ kHz} - 455 \text{ kHz} = 545 \text{ kHz}$ (Less common in practice due to LO frequency stability and filtering requirements).

Let's assume $f_{LO} = 1455$ kHz.
The image frequency for this setting will be:
$f_{image} = f_{RF} + 2f_{IF} = 1000 \text{ kHz} + 2 \times 455 \text{ kHz} = 1000 \text{ kHz} + 910 \text{ kHz} = 1910 \text{ kHz}$.

So, if the receiver is tuned to 1000 kHz, a strong signal at 1910 kHz will also be detected, causing interference.

**Course Outcome Alignment:**
*   **CO1 (Illustrate principles of analog communication systems):** Understanding image frequency is crucial for explaining how AM/FM receivers work and their limitations.

**Important Points to Remember:**
*   The image frequency is always separated from the desired frequency by twice the IF.
*   The higher the IF, the further away the image frequency is from the desired frequency. This makes it easier to reject with filters.
*   The lower the IF, the closer the image frequency is, making it harder to reject.

---

### 5. Selectivity and Image Rejection

The ability to reject the image frequency is a critical aspect of a superheterodyne receiver's selectivity.

**Image Rejection Ratio (IRR):**

*   **Definition:** The ratio of the receiver's response at the desired frequency ($f_{RF}$) to its response at the image frequency ($f_{image}$), when both signals have the same input power.
*   **Importance:** A higher IRR means better rejection of the unwanted image signal.
*   **Calculation:** The IRR is primarily determined by the selectivity of the RF amplifier's tuning circuit (often a resonant LC circuit) before the mixer.

**Formula for IRR (for a single tuned circuit):**

Assuming a single tuned circuit at the RF stage with resonant frequency $\omega_0$ and bandwidth $B$ at the 3dB points:
The voltage gain $A(\omega)$ of a single tuned circuit at a frequency offset $\Delta\omega = |\omega - \omega_0|$ is given by:

$A(\omega) = \frac{A_0}{1 + jQ \frac{\Delta\omega}{\omega_0}}$

where $Q$ is the quality factor of the tuned circuit.

The power gain is $|A(\omega)|^2$. The selectivity of the tuned circuit is often characterized by its Q factor. A higher Q means a narrower bandwidth and better selectivity.

For a tuned circuit at the RF stage (tuned to $f_{RF}$), with a bandwidth $B$ and quality factor $Q$:
The image frequency is $f_{image} = f_{RF} + 2f_{IF}$.
The offset of the image frequency from the tuned frequency is $\Delta f = |f_{image} - f_{RF}| = 2f_{IF}$.
In angular frequencies, $\Delta\omega = 2 \times (2\pi f_{IF})$.

The ratio of the voltage gain at $f_{RF}$ to the voltage gain at $f_{image}$ is:

$IRR = \frac{A(f_{RF})}{A(f_{image})} = \frac{1}{|1 + jQ \frac{\Delta\omega_{image}}{\omega_{RF}}|}$

where $\Delta\omega_{image} = 2 \times (2\pi f_{IF})$.

For high Q circuits, the $1$ in the denominator is much smaller than $Q \frac{\Delta\omega_{image}}{\omega_{RF}}$, so the IRR is approximately:

$IRR \approx \frac{1}{Q \frac{\Delta\omega_{image}}{\omega_{RF}}} = \frac{\omega_{RF}}{Q \Delta\omega_{image}} = \frac{\omega_{RF}}{Q (4\pi f_{IF})}$

Since $Q = \frac{\omega_{RF}}{B}$, where $B$ is the 3dB bandwidth:

$IRR \approx \frac{\omega_{RF}}{\frac{\omega_{RF}}{B} (4\pi f_{IF})} = \frac{B}{4\pi f_{IF}}$

In terms of frequencies:
$IRR \approx \frac{B}{2\pi (2f_{IF})} = \frac{B}{4\pi f_{IF}}$

This approximation holds when the IF is much larger than the bandwidth of the RF stage.

**Practical Implementation for Image Rejection:**

1.  **High IF:** Using a higher IF reduces the image frequency's proximity to the desired frequency, making it easier to reject with filters.
2.  **Double-Tuned RF Stage:** Using two cascaded tuned circuits at the RF stage significantly improves the IRR. The IRR of cascaded tuned circuits is the product of their individual IRRs.
    *   If two identical tuned circuits, each with IRR$_1$, are cascaded, the total IRR$_2 = IRR_1 \times IRR_1 = (IRR_1)^2$. This means the IRR improves quadratically with the number of stages.
3.  **Pre-selector Filter:** A dedicated band-pass filter at the RF input stages that specifically attenuates frequencies far from the desired band, including potential image frequencies.

**Reference:**
*   Kennedy, "Electronic Communication Systems" (6th Ed.) discusses image frequency and rejection techniques in detail.
*   Haykin & Moher (5th Ed.) also covers these aspects in the context of receiver design.

**Course Outcome Alignment:**
*   **CO1 (Illustrate principles of analog communication systems):** Understanding how IRR is achieved helps illustrate the practical design challenges and solutions in analog receivers.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define sensitivity, selectivity, and fidelity of a receiver. Which characteristic is primarily determined by the IF amplifier?

**Answer:**
*   **Sensitivity:** The minimum input signal level required for a usable output.
*   **Selectivity:** The ability to tune to a desired frequency and reject others.
*   **Fidelity:** The accuracy of the reproduced signal.
*   The **selectivity** of a superheterodyne receiver is primarily determined by the IF amplifier.

---

**Question 2:**
An AM superheterodyne receiver is tuned to $f_{RF} = 850$ kHz. The IF is $f_{IF} = 455$ kHz.
(a) Calculate the local oscillator frequency $f_{LO}$.
(b) Calculate the image frequency $f_{image}$.
(c) If the receiver is tuned to $f_{RF} = 1200$ kHz with the same IF, what is the new image frequency?

**Answer:**
(a) Assuming $f_{LO} > f_{RF}$:
    $f_{LO} = f_{RF} + f_{IF} = 850 \text{ kHz} + 455 \text{ kHz} = 1305 \text{ kHz}$.

(b) $f_{image} = f_{RF} + 2f_{IF} = 850 \text{ kHz} + 2 \times 455 \text{ kHz} = 850 \text{ kHz} + 910 \text{ kHz} = 1760 \text{ kHz}$.

(c) For $f_{RF} = 1200$ kHz and $f_{IF} = 455$ kHz:
    $f_{image} = f_{RF} + 2f_{IF} = 1200 \text{ kHz} + 2 \times 455 \text{ kHz} = 1200 \text{ kHz} + 910 \text{ kHz} = 2110 \text{ kHz}$.

---

**Question 3:**
A superheterodyne receiver has an IF of 10.7 MHz and its RF stage has a single tuned circuit with a Q of 50. Calculate the image rejection ratio (IRR) for a signal tuned to 98.1 MHz. Assume $f_{LO} > f_{RF}$.

**Answer:**
Given:
$f_{RF} = 98.1$ MHz
$f_{IF} = 10.7$ MHz
$Q = 50$

First, calculate $f_{LO}$:
$f_{LO} = f_{RF} + f_{IF} = 98.1 \text{ MHz} + 10.7 \text{ MHz} = 108.8 \text{ MHz}$.

Next, calculate the image frequency:
$f_{image} = f_{RF} + 2f_{IF} = 98.1 \text{ MHz} + 2 \times 10.7 \text{ MHz} = 98.1 \text{ MHz} + 21.4 \text{ MHz} = 119.5 \text{ MHz}$.

The offset frequency is $\Delta f = f_{image} - f_{RF} = 119.5 \text{ MHz} - 98.1 \text{ MHz} = 21.4 \text{ MHz}$.
In angular frequencies: $\Delta\omega_{image} = 2\pi \times 21.4 \times 10^6$ rad/s.
And $\omega_{RF} = 2\pi \times 98.1 \times 10^6$ rad/s.

Using the approximation $IRR \approx \frac{\omega_{RF}}{Q \Delta\omega_{image}}$:
$IRR \approx \frac{2\pi \times 98.1 \times 10^6}{50 \times (2\pi \times 21.4 \times 10^6)}$
$IRR \approx \frac{98.1}{50 \times 21.4} = \frac{98.1}{1070} \approx 0.0917$

This is the voltage ratio. For power ratio, it would be $(0.0917)^2 \approx 0.0084$.
The IRR in dB is:
$IRR_{dB} = 20 \log_{10} (0.0917) \approx 20 \times (-1.038) \approx -20.76 \text{ dB}$ (voltage ratio)

If we interpret IRR as the ratio of powers, then:
$IRR_{dB} = 10 \log_{10} \left(\frac{P_{RF}}{P_{image}}\right)$. Since voltage ratio is approximately $1/IRR$ for the unwanted signal, the power ratio is $1/(IRR)^2$.
$IRR_{dB} \approx 20 \log_{10} \left(\frac{Q \Delta\omega_{image}}{\omega_{RF}}\right) = 20 \log_{10} \left(\frac{50 \times 21.4 \times 10^6}{98.1 \times 10^6}\right)$
$IRR_{dB} \approx 20 \log_{10} \left(\frac{1070}{98.1}\right) \approx 20 \log_{10} (10.907) \approx 20 \times 1.037 \approx 20.74 \text{ dB}$

**Important Note:** The definition of IRR can sometimes be voltage ratio or power ratio. In engineering contexts, it's often the ratio of *attenuation* of the image signal relative to the desired signal. If the desired signal is at unity gain, the image signal has an attenuation of $1/IRR$. Thus, a larger positive dB value indicates better rejection. So, $20.74$ dB is a measure of how much the image signal is attenuated relative to the desired signal.

---

### 7. Summary and Key Takeaways

*   **Receiver Characteristics:** Sensitivity, selectivity, and fidelity are paramount.
*   **Superheterodyne Receiver:** Converts RF to a fixed IF for high gain and selectivity.
*   **Image Frequency:** An unwanted input that produces the same IF as the desired signal.
*   **Image Rejection Ratio (IRR):** Measures the ability to reject the image frequency.
*   **Improving IRR:** High IF, multiple tuned RF stages, and pre-selector filters are key.

This module has introduced the fundamental characteristics of receivers and the operational principles and challenges of the superheterodyne architecture, particularly concerning image frequency. These concepts are foundational for understanding more complex communication systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
