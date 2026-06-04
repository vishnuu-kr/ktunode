---
title: "Optical Receivers: - Direct detection- noise in detectors, SNR, BER analysis"
subject: "OPTICAL COMMUNICATION"
module: "Module 3: Optical sources: LEDs and LDs, general structures, characteristics , modulators using LEDs and LDs. coupling with fibres,"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4d3"
status: "completed"
scrapedAt: "2026-05-23T18:08:25.881Z"
---
# Optical Communication: Module 3 - Optical Receivers

**Topic:** Optical Receivers: Direct Detection, Noise in Detectors, SNR, BER Analysis

**Learning Outcomes:**

*   To understand the basic principles of optical receivers.
*   To identify and analyze the various noise sources in optical detectors.
*   To define and calculate the Signal-to-Noise Ratio (SNR) for direct detection systems.
*   To analyze the Bit Error Rate (BER) in direct detection systems and understand its relationship with SNR.

**Course Outcomes Alignment:**

*   **CO3:** Explain the working of sources, detectors and optical amplifiers used in optical communication system (Knowledge Level: K2) - This module directly addresses the working of detectors and their performance analysis.

---

## 1. Introduction to Optical Receivers

An optical receiver is a critical component in an optical communication system that converts the optical signal back into an electrical signal. Its primary function is to detect the incoming optical power and amplify it to a usable electrical level for subsequent signal processing.

**Key Components of an Optical Receiver:**

1.  **Photodetector (or Detector):** This is the core of the receiver, responsible for converting optical energy into electrical current.
2.  **Preamble/Amplifier Circuit:** This circuit amplifies the weak electrical signal from the photodetector to a level suitable for further processing.
3.  **Decision Circuit:** This circuit interprets the amplified electrical signal to recover the transmitted digital information.

**Types of Detection:**

*   **Direct Detection:** The most common method, where the optical signal is directly converted into an electrical current by a photodetector. The intensity of the optical signal is modulated, and the receiver detects this intensity variation.
*   **Coherent Detection:** A more complex method where the phase, frequency, and amplitude of the optical signal are modulated. It offers higher sensitivity but requires a local oscillator laser at the receiver.

This module focuses on **Direct Detection**.

---

## 2. Photodetectors for Direct Detection

Photodetectors are semiconductor devices that exhibit the **photoelectric effect**, where incident photons generate electron-hole pairs, leading to an electrical current.

**Common Photodiodes Used in Optical Communication:**

*   **PIN Photodiodes:** (p-intrinsic-n) - Widely used due to their good linearity, high speed, and low noise.
*   **Avalanche Photodiodes (APDs):** Exhibit internal gain, leading to higher sensitivity, but are more complex and noisy than PIN diodes.

**Operating Principle (Direct Detection):**

When photons with energy greater than the semiconductor's bandgap energy ($h\nu > E_g$) strike the photodiode's depletion region, they create electron-hole pairs. An applied reverse bias voltage across the photodiode sweeps these charge carriers to the electrodes, generating a photocurrent proportional to the incident optical power.

$$
I_{ph} = R \cdot P_{in}
$$

Where:
*   $I_{ph}$ is the photocurrent (A).
*   $R$ is the responsivity of the photodetector (A/W).
*   $P_{in}$ is the incident optical power (W).

**Responsivity ($R$):**

The responsivity is a measure of how efficiently the photodetector converts optical power into electrical current. It depends on the quantum efficiency ($\eta$) and the wavelength ($\lambda$).

$$
R = \frac{\eta q}{h\nu} = \frac{\eta q \lambda}{hc}
$$

Where:
*   $\eta$ is the quantum efficiency (number of electron-hole pairs generated per incident photon).
*   $q$ is the elementary charge ($1.602 \times 10^{-19}$ C).
*   $h$ is Planck's constant ($6.626 \times 10^{-34}$ J·s).
*   $c$ is the speed of light ($3 \times 10^8$ m/s).
*   $\nu$ is the optical frequency.

**Important Point:** Higher quantum efficiency and shorter wavelengths lead to higher responsivity.

---

## 3. Noise in Photodetectors

Noise is any unwanted random fluctuation in the electrical signal that can corrupt the transmitted information. In direct detection systems, noise limits the receiver sensitivity and ultimately the achievable data rate.

**Major Noise Sources in Photodetectors:**

1.  **Shot Noise:**
    *   **Origin:** Arises from the discrete nature of charge carriers (electrons and holes). Both the signal-dependent photocurrent and the dark current exhibit random fluctuations.
    *   **Characteristics:** It is a random process, and its mean square noise current is proportional to the average current.
    *   **Formula:** The mean square shot noise current is given by:
        $$
        i_{n,shot}^2 = 2q(I_{ph} + I_{dark})B_{BW}
        $$
        Where:
        *   $q$ is the elementary charge.
        *   $I_{ph}$ is the average signal photocurrent.
        *   $I_{dark}$ is the average dark current.
        *   $B_{BW}$ is the electrical bandwidth of the receiver.
    *   **Example:** Even with no incident light, the dark current flowing through the photodiode generates shot noise.

2.  **Thermal Noise (Johnson-Nyquist Noise):**
    *   **Origin:** Caused by the random thermal agitation of charge carriers within resistors in the receiver circuit, particularly the load resistor ($R_L$) and the amplifier's input resistance.
    *   **Characteristics:** It is independent of the signal current.
    *   **Formula:** The mean square thermal noise current is given by:
        $$
        i_{n,thermal}^2 = \frac{4k_B T_{op} B_{BW}}{R_L}
        $$
        Where:
        *   $k_B$ is the Boltzmann constant ($1.381 \times 10^{-23}$ J/K).
        *   $T_{op}$ is the absolute operating temperature of the resistor (K).
        *   $R_L$ is the load resistance (Ω).
    *   **Impact:** Increases with temperature and load resistance.

3.  **Avalanche Noise (Excess Noise Factor - F):**
    *   **Origin:** Occurs only in APDs. It arises from the random process of impact ionization during the avalanche multiplication of carriers.
    *   **Characteristics:** It is a multiplicative process, meaning it amplifies both the signal and other noise sources.
    *   **Formula:** The mean square shot noise in an APD is modified by the avalanche multiplication factor ($M$) and an excess noise factor ($F$):
        $$
        i_{n,avalanche}^2 = 2q(I_{ph} + I_{dark})M^2 F B_{BW}
        $$
        The excess noise factor $F$ is a function of $M$ and the ratio of ionization coefficients of electrons and holes ($\kappa = \alpha_e/\alpha_h$). For most materials, $F \approx M^x$, where $x$ depends on $\kappa$. For silicon, $x \approx 1$. For materials with $\kappa \ll 1$ (like InGaAs), $x$ is much smaller, leading to less avalanche noise.
    *   **Important Point:** APDs are used when the desired gain ($M$) can overcome the increased noise from the avalanche process, offering higher sensitivity than PIN diodes.

4.  **Amplifier Noise:**
    *   **Origin:** Noise introduced by the electronic amplifier stages following the photodetector. This includes thermal noise in transistors, shot noise in their operation, etc.
    *   **Characteristics:** Characterized by the amplifier's noise figure or equivalent input noise current/voltage.
    *   **Formula:** Can be represented as an equivalent input noise current squared ($i_{n,amp}^2$) or voltage squared ($v_{n,amp}^2$).

**Total Noise Current Squared:**

The total mean square noise current is the sum of the mean square noise currents from various sources:

$$
i_{n,total}^2 = i_{n,shot}^2 + i_{n,thermal}^2 + i_{n,avalanche}^2 (\text{if APD}) + i_{n,amp}^2 (\text{equivalent})
$$

---

## 4. Signal-to-Noise Ratio (SNR)

The SNR is a crucial performance metric that quantifies the strength of the desired signal relative to the background noise. A higher SNR indicates a cleaner signal and better receiver performance.

**Definition:**

$$
SNR = \frac{\text{Mean Square Signal Current}}{\text{Total Mean Square Noise Current}} = \frac{\langle i_s^2 \rangle}{\langle i_n^2 \rangle}
$$

Where $\langle i_s^2 \rangle$ is the mean square of the signal current. For direct detection, the signal current is the photocurrent $I_{ph}$, so $\langle i_s^2 \rangle = I_{ph}^2$.

**SNR for PIN Photodiode (Dominant Noise Sources: Shot and Thermal):**

Assuming the amplifier noise is negligible compared to detector and load noise, and the signal is the photocurrent:

$$
SNR_{PIN} = \frac{I_{ph}^2}{2qI_{ph}B_{BW} + \frac{4k_B T_{op} B_{BW}}{R_L}}
$$

*   **Signal-Isolator Noise Limited:** When the signal current is much larger than the dark current, the shot noise is dominated by the signal.
*   **Dark-Current Noise Limited:** When the signal is weak, the dark current shot noise becomes significant.
*   **Thermal Noise Limited:** At high signal levels or with large load resistors, thermal noise can dominate.

**SNR for APD (Dominant Noise Sources: Avalanche, Shot, Thermal):**

$$
SNR_{APD} = \frac{(M I_{ph})^2}{2q(I_{ph} + I_{dark})M^2 F B_{BW} + \frac{4k_B T_{op} B_{BW}}{R_L}}
$$

*   **Optimization:** APDs offer a trade-off. Increasing the multiplication factor $M$ increases the signal current ($MI_{ph}$) but also increases the noise ($M^2 F$). There is an optimum $M$ that maximizes SNR.

**Decibels (dB) for SNR:**

It is common to express SNR in decibels:

$$
SNR_{dB} = 10 \log_{10} \left( \frac{\langle i_s^2 \rangle}{\langle i_n^2 \rangle} \right)
$$

**Example:** If $SNR = 100$, then $SNR_{dB} = 10 \log_{10}(100) = 20$ dB.

**Relationship with Optical Power:**

Since $I_{ph} = R \cdot P_{in}$, the SNR is directly proportional to the square of the incident optical power ($P_{in}^2$), provided other noise sources are constant.

$$
SNR \propto P_{in}^2
$$

This implies that a 3 dB increase in optical power (doubling the power) leads to a 6 dB increase in SNR (four times the SNR).

---

## 5. Bit Error Rate (BER) Analysis

BER is a fundamental performance parameter for digital communication systems, representing the ratio of the number of erroneous bits to the total number of bits transmitted.

**Definition:**

$$
BER = \frac{\text{Number of erroneous bits}}{\text{Total number of bits transmitted}}
$$

**Relationship between SNR and BER:**

In a typical digital optical communication system using direct detection, the receiver amplifies the photocurrent and then uses a decision circuit to determine whether a '1' or '0' was transmitted. This decision is usually made by comparing the amplified current (or voltage) against a threshold.

*   **Decision Threshold:** The threshold is set midway between the expected average signal levels for a '1' and a '0'.
*   **Error Occurs When:** An error occurs if the noise causes the detected signal level to cross the decision threshold in the wrong direction.

**Gaussian Approximation:**

For direct detection systems with a large number of carriers contributing to the photocurrent and thermal noise, the probability distribution of the detected signal current can be approximated by a Gaussian distribution.

Let:
*   $I_0$ be the average photocurrent for a transmitted '0'.
*   $I_1$ be the average photocurrent for a transmitted '1'.
*   $\sigma_0$ be the standard deviation of the noise current when a '0' is transmitted.
*   $\sigma_1$ be the standard deviation of the noise current when a '1' is transmitted.

Assuming the decision threshold $I_{th}$ is set optimally (e.g., $I_{th} = (I_0 + I_1)/2$) and the noise distribution is Gaussian:

The probability of a '0' being misinterpreted as a '1' (False Alarm) is:
$$
P(1|0) = Q\left(\frac{I_{th} - I_0}{\sigma_0}\right)
$$

The probability of a '1' being misinterpreted as a '0' (Miss Detection) is:
$$
P(0|1) = Q\left(\frac{I_1 - I_{th}}{\sigma_1}\right)
$$

Where $Q(x)$ is the Q-function, defined as the tail probability of the standard normal distribution:
$$
Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt
$$
For large $x$, $Q(x) \approx \frac{1}{x\sqrt{2\pi}}e^{-x^2/2}$.

If the transmitted bits are equally likely (probability $p_0 = p_1 = 0.5$) and the noise variance is the same for '0' and '1' (i.e., $\sigma_0 = \sigma_1 = \sigma$), then the BER is:

$$
BER = 0.5 [P(1|0) + P(0|1)] = Q\left(\frac{I_1 - I_0}{2\sigma}\right)
$$

**Simplified Case: Non-Return-to-Zero (NRZ) Signaling:**

For NRZ signaling, let's consider a simplified scenario where $I_0 = 0$ (no signal for a '0') and $I_1 = R \cdot P_{avg}$ (signal for a '1'), and the dominant noise is shot noise and thermal noise.

The total noise standard deviation $\sigma$ is related to the total mean square noise current $\langle i_n^2 \rangle$ by $\sigma = \sqrt{\langle i_n^2 \rangle}$.

The average signal current is $I_{avg} = 0.5(I_0 + I_1)$ for equiprobable bits.

The SNR in terms of average current and noise standard deviation is:
$$
SNR_{current} = \frac{I_{avg}^2}{\sigma^2}
$$
This is related to the power SNR by $SNR_{power} = \frac{I_{avg}}{\sigma^2}$ if we consider the signal power as $I_{avg}^2$ and noise power as $\sigma^2$. However, the definition using mean square values is more standard.

A more direct relationship for BER can be established using the signal and noise power levels. For a system where the noise distribution is Gaussian, the BER is directly related to the SNR. A commonly used approximation for NRZ signaling with equal probabilities and the same noise variance for both symbols is:

$$
BER \approx Q\left(\frac{I_{avg}}{\sigma}\right)
$$

Or in terms of SNR (power ratio):

$$
BER \approx Q\left(\sqrt{SNR}\right)
$$

This approximation holds when the signal current for '1' ($I_1$) is significantly larger than the noise standard deviation and the noise variance is independent of the signal level.

**Key Relationship:** A higher SNR leads to a lower BER.

**Example:**

*   If $SNR = 20$ dB, then $SNR = 100$ (power ratio).
*   Using $BER \approx Q(\sqrt{SNR})$, we get $BER \approx Q(\sqrt{100}) = Q(10)$.
*   The Q-function value for $x=10$ is extremely small, on the order of $10^{-23}$. This indicates a very low error rate.

**Trade-off:**

*   To achieve a lower BER, a higher SNR is required.
*   To achieve a higher SNR, more optical power must be received or the noise must be reduced.

**Important Points to Remember:**

*   **Direct detection** relies on converting optical intensity variations into electrical signals.
*   **Noise** limits receiver sensitivity. Key noise sources are **shot noise** (signal and dark current dependent) and **thermal noise** (temperature and load resistance dependent). APDs also have **avalanche noise**.
*   **Responsivity (R)** determines how efficiently optical power is converted to current.
*   **SNR** is the ratio of signal power to noise power. Higher SNR is better.
*   **BER** quantifies errors. A higher SNR leads to a lower BER.
*   The **Q-function** is used to relate BER to SNR in systems with Gaussian noise.

---

## Practice Questions and Answers

**Question 1:** A PIN photodiode has a responsivity of 0.8 A/W at a wavelength of 1300 nm. If the incident optical power is 10 µW, what is the photocurrent generated?

**Answer 1:**
$I_{ph} = R \cdot P_{in}$
$I_{ph} = 0.8 \text{ A/W} \times 10 \times 10^{-6} \text{ W} = 8 \times 10^{-6} \text{ A} = 8 \text{ µA}$

---

**Question 2:** In a PIN photodiode receiver, the dominant noise sources are shot noise and thermal noise. The operating temperature is 300 K, and the load resistor is 50 kΩ. The dark current is negligible. If the signal photocurrent is 1 µA and the receiver bandwidth is 1 GHz, calculate the shot noise and thermal noise power. (Use $k_B = 1.381 \times 10^{-23}$ J/K, $q = 1.602 \times 10^{-19}$ C)

**Answer 2:**
*   **Shot Noise Power ($i_{n,shot}^2$):**
    $i_{n,shot}^2 = 2qI_{ph}B_{BW}$
    $I_{ph} = 1 \times 10^{-6} \text{ A}$
    $B_{BW} = 1 \times 10^9 \text{ Hz}$
    $i_{n,shot}^2 = 2 \times (1.602 \times 10^{-19} \text{ C}) \times (1 \times 10^{-6} \text{ A}) \times (1 \times 10^9 \text{ Hz})$
    $i_{n,shot}^2 = 3.204 \times 10^{-16} \text{ A}^2$

*   **Thermal Noise Power ($i_{n,thermal}^2$):**
    $i_{n,thermal}^2 = \frac{4k_B T_{op} B_{BW}}{R_L}$
    $k_B = 1.381 \times 10^{-23} \text{ J/K}$
    $T_{op} = 300 \text{ K}$
    $B_{BW} = 1 \times 10^9 \text{ Hz}$
    $R_L = 50 \times 10^3 \text{ Ω}$
    $i_{n,thermal}^2 = \frac{4 \times (1.381 \times 10^{-23} \text{ J/K}) \times (300 \text{ K}) \times (1 \times 10^9 \text{ Hz})}{50 \times 10^3 \text{ Ω}}$
    $i_{n,thermal}^2 = \frac{1.6572 \times 10^{-11}}{50 \times 10^3} \approx 3.3144 \times 10^{-17} \text{ A}^2$

**Note:** In this specific example, shot noise is significantly larger than thermal noise.

---

**Question 3:** If the signal current in Question 2 was 10 nA instead of 1 µA, and the thermal noise is the same, which noise source would dominate? Explain.

**Answer 3:**
Let's recalculate the shot noise with $I_{ph} = 10 \text{ nA} = 10 \times 10^{-9} \text{ A}$:
$i_{n,shot}^2 = 2qI_{ph}B_{BW}$
$i_{n,shot}^2 = 2 \times (1.602 \times 10^{-19} \text{ C}) \times (10 \times 10^{-9} \text{ A}) \times (1 \times 10^9 \text{ Hz})$
$i_{n,shot}^2 = 3.204 \times 10^{-18} \text{ A}^2$

The thermal noise remains $i_{n,thermal}^2 \approx 3.3144 \times 10^{-17} \text{ A}^2$.

In this case, the thermal noise ($3.3144 \times 10^{-17} \text{ A}^2$) is significantly larger than the shot noise ($3.204 \times 10^{-18} \text{ A}^2$). Therefore, **thermal noise would dominate** when the signal photocurrent is very small. This is because shot noise is proportional to the signal current, while thermal noise is independent of it.

---

**Question 4:** A direct detection system has an SNR of 25. What is the approximate BER if the noise is assumed to be Gaussian and the system uses NRZ signaling with equal probability of 0s and 1s?

**Answer 4:**
Assuming $BER \approx Q(\sqrt{SNR})$:
$SNR = 25$ (power ratio)
$\sqrt{SNR} = \sqrt{25} = 5$
$BER \approx Q(5)$

The Q-function value for $x=5$ is approximately $2.87 \times 10^{-7}$.
So, the approximate BER is $2.87 \times 10^{-7}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## References

*   **Keiser, Gerd. *Optical Fiber Communications*. McGraw Hill, 5th/e, 2021.**
    *   Chapters related to receiver design, photodetector principles, noise analysis, and SNR/BER calculations.
*   **Senior, John M. *Optical Fiber Communication: Principles and Practice*. Pearson Education, 3rd/e, 2014.**
    *   Detailed explanations of PIN and APD structures, noise mechanisms, and performance metrics.
*   **Palais, Joseph C. *Fibre Optic Communications*. Pearson Education, 5th/e, 2013.**
    *   Covers receiver components, noise characteristics, and system performance evaluation.
*   **Mishra and Ugale. *Fibre Optic Communication: Systems and Components*. Wiley, 2019.**
    *   Provides insights into the practical aspects of optical receiver design and noise management.
*   **Agrawal, G P. *Fibre Optic Communications Systems*. WILEY, 4th Ed.**
    *   Offers a strong theoretical foundation on photodetector physics, noise analysis, and BER performance.

---