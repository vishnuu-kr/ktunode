---
title: "Noise figures"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf5"
status: "completed"
scrapedAt: "2026-05-23T16:40:17.296Z"
---
# Electronic Communication: Module 2 - Angle Modulation: Noise Figures

---

## 1. Introduction to Noise and its Impact on Communication Systems

Noise is an unwanted disturbance that interferes with the desired signal, degrading its quality and potentially leading to errors in communication. Understanding noise is crucial for designing robust communication systems.

**Key Concepts:**

*   **Noise:** Random, unpredictable electrical disturbances that corrupt the transmitted signal.
*   **Signal-to-Noise Ratio (SNR):** A measure of the strength of the desired signal relative to the level of background noise. A higher SNR indicates better signal quality.
*   **Noise Sources:**
    *   **Internal Noise:** Generated within the electronic components of the receiver (e.g., thermal noise, shot noise).
    *   **External Noise:** Originating from sources outside the receiver (e.g., atmospheric noise, man-made noise, cosmic noise).

**Importance in Angle Modulation:**

While angle modulation (FM and PM) is known for its superior noise immunity compared to AM, noise still plays a significant role in the performance of these systems, particularly at low SNR. Noise can cause frequency or phase variations in the modulated signal, which are then translated into amplitude variations by the demodulator, leading to audible noise in FM receivers or distortion in PM receivers.

**Reference:**

*   **Kennedy's Electronic Communication Systems:** Discusses various noise sources and their effects on communication channels. (Chapter 3: Noise)
*   **Electronic Communication Systems – Fundamentals through Advanced by Tomasi:** Provides a comprehensive overview of noise types and measurement. (Chapter 4: Noise)

---

## 2. Noise Figures: Quantifying Receiver Performance

The **Noise Figure (NF)** is a parameter that quantifies the degradation of the signal-to-noise ratio (SNR) introduced by a component or a system (typically a receiver). It represents how much the noise level increases when a signal passes through the device. A lower noise figure indicates a better performing, less noisy device.

**Key Concepts:**

*   **Noise Figure (F):** Defined as the ratio of the input SNR to the output SNR.
    *   $F = \frac{\text{SNR}_{\text{in}}}{\text{SNR}_{\text{out}}}$
    *   It is usually expressed in decibels (dB): $NF_{\text{dB}} = 10 \log_{10}(F)$

*   **Ideal Receiver:** An ideal receiver would have a noise figure of 1 (or 0 dB), meaning it introduces no additional noise.

*   **Actual Receiver:** Real-world receivers introduce some noise, resulting in a noise figure greater than 1.

**Calculation of Noise Figure:**

Let's consider a two-stage system (e.g., amplifier 1 followed by amplifier 2).

*   $G_1, G_2$: Gain of stage 1 and stage 2, respectively.
*   $F_1, F_2$: Noise figures of stage 1 and stage 2, respectively.
*   $N_0$: Noise power output from the signal source.
*   $kT_0B$: Thermal noise power in bandwidth $B$ at standard temperature $T_0$.

**Noise Output of Stage 1:**

*   Signal power at output of stage 1: $P_{\text{s1,out}} = P_{\text{s,in}} G_1$
*   Noise power at output of stage 1 (due to input noise and internal noise of stage 1):
    $P_{\text{n1,out}} = (kT_0B) G_1 + (F_1 - 1) kT_0B G_1 = F_1 kT_0B G_1$
*   $\text{SNR}_{\text{out1}} = \frac{P_{\text{s1,out}}}{P_{\text{n1,out}}} = \frac{P_{\text{s,in}} G_1}{F_1 kT_0B G_1} = \frac{P_{\text{s,in}}}{F_1 kT_0B}$

**Noise Output of Stage 2:**

*   Signal power at output of stage 2: $P_{\text{s2,out}} = P_{\text{s1,out}} G_2 = P_{\text{s,in}} G_1 G_2$
*   Noise power at output of stage 2 (due to noise from stage 1 and internal noise of stage 2):
    $P_{\text{n2,out}} = P_{\text{n1,out}} G_2 + (F_2 - 1) kT_0B G_2$
    $P_{\text{n2,out}} = (F_1 kT_0B G_1) G_2 + (F_2 - 1) kT_0B G_2$
    $P_{\text{n2,out}} = kT_0B G_1 G_2 [F_1 + \frac{F_2 - 1}{G_1}]$

**Overall Noise Figure for Two Stages:**

*   $\text{SNR}_{\text{in}} = \frac{P_{\text{s,in}}}{kT_0B}$
*   $\text{SNR}_{\text{out2}} = \frac{P_{\text{s2,out}}}{P_{\text{n2,out}}} = \frac{P_{\text{s,in}} G_1 G_2}{kT_0B G_1 G_2 [F_1 + \frac{F_2 - 1}{G_1}]} = \frac{P_{\text{s,in}}}{kT_0B [F_1 + \frac{F_2 - 1}{G_1}]}$

*   $F_{\text{total}} = \frac{\text{SNR}_{\text{in}}}{\text{SNR}_{\text{out2}}} = \frac{P_{\text{s,in}} / (kT_0B)}{P_{\text{s,in}} / [kT_0B (F_1 + \frac{F_2 - 1}{G_1})]} = F_1 + \frac{F_2 - 1}{G_1}$

**Friis' Formula for Noise Figure (Generalization for N Stages):**

For a system with $N$ cascaded stages, the overall noise figure is given by:

$F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2} + \dots + \frac{F_N - 1}{G_1 G_2 \dots G_{N-1}}$

**Important Points:**

*   The noise figure of the **first stage** dominates the overall noise figure if its gain ($G_1$) is high.
*   This makes the **first stage of a receiver (Low Noise Amplifier - LNA)** critically important for overall receiver sensitivity.
*   Noise figure is **temperature-dependent** due to thermal noise.

**Example:**

Consider a receiver with two stages:
*   Stage 1: Amplifier with $G_1 = 10$ dB, $NF_1 = 2$ dB
*   Stage 2: Amplifier with $G_2 = 20$ dB, $NF_2 = 4$ dB

First, convert gains and noise figures to linear values:
*   $G_{1, \text{linear}} = 10^{10/10} = 10$
*   $F_1 = 10^{2/10} \approx 1.585$
*   $G_{2, \text{linear}} = 10^{20/10} = 100$
*   $F_2 = 10^{4/10} \approx 2.512$

Using Friis' formula:
$F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1}$
$F_{\text{total}} = 1.585 + \frac{2.512 - 1}{10}$
$F_{\text{total}} = 1.585 + \frac{1.512}{10}$
$F_{\text{total}} = 1.585 + 0.1512$
$F_{\text{total}} = 1.7362$

In dB: $NF_{\text{total, dB}} = 10 \log_{10}(1.7362) \approx 2.39$ dB

**Observation:** The overall noise figure (2.39 dB) is only slightly higher than the noise figure of the first stage (2 dB), demonstrating the importance of the first stage.

**Reference:**

*   **Principles of Communication Systems by Taub & Schilling:** Explains the concept of noise figure and its application in cascaded systems. (Chapter 2: Noise and Noise Figures)
*   **Communication Systems by Haykin and Mohre:** Provides a thorough treatment of noise in communication receivers. (Chapter 3: Noise)

---

## 3. Noise in Angle Modulation Systems

Angle modulation (FM and PM) is inherently more resistant to noise than AM, especially for signals with SNR above the FM threshold.

**How Noise Affects Angle Modulation:**

*   In FM and PM, information is encoded in the frequency or phase of the carrier.
*   When noise is added to the modulated signal, it causes random fluctuations in the instantaneous frequency and phase.
*   A typical FM demodulator (like a slope detector or Foster-Seeley discriminator) converts frequency variations into amplitude variations. Thus, frequency fluctuations caused by noise are converted into amplitude variations in the output, resulting in audible noise (hiss).
*   A PM demodulator converts phase variations into amplitude variations. Noise that causes phase shifts will be demodulated as amplitude variations.

**The FM Threshold Effect:**

*   For FM, there's a phenomenon called the **threshold effect**.
*   Below a certain input SNR (the threshold), the demodulated output SNR degrades rapidly as the input SNR decreases.
*   In this region, the noise-induced frequency/phase variations become comparable to the signal's frequency/phase variations, leading to significant distortion.
*   **Limiting:** FM receivers typically use a **limiter** before the demodulator. The limiter removes any amplitude variations in the received signal, thus preserving the frequency information. This is a key reason for FM's noise advantage. If the signal amplitude is significantly above the noise level, the limiter effectively suppresses amplitude-varying noise.

**Comparison with AM:**

*   **AM:** Noise adds directly to the modulated signal, and the demodulator (envelope detector) responds to these amplitude variations, directly translating them into audio output. This means noise directly affects the amplitude of the demodulated signal, regardless of the signal strength (above the detector's threshold).
*   **FM/PM:** Noise primarily affects the frequency/phase. The limiter in FM removes amplitude noise. While noise still causes frequency/phase deviations, the effect is less pronounced at higher SNRs.

**Relationship between Input SNR and Output SNR in FM:**

The relationship between the input SNR and the output SNR for an FM system is more complex than for AM.

*   Let $S_i$ be the signal power and $N_i$ be the noise power at the FM receiver input.
*   $\text{SNR}_{\text{in}} = S_i / N_i$
*   For $\text{SNR}_{\text{in}} \gg 1$ (above threshold), the output SNR for an FM system is approximately:
    $\text{SNR}_{\text{out, FM}} \approx 3 \beta^2 \text{SNR}_{\text{in}}$
    where $\beta$ is the modulation index.
*   This shows that for large $\beta$, FM can provide a significant improvement in output SNR over AM.

**Noise Figure in FM/PM Systems:**

While FM/PM are less susceptible to noise, their performance is still characterized by the overall system noise figure. The first stage (LNA) of the FM receiver is crucial for setting the noise performance, especially when the incoming signal strength is low.

**Corresponds to Course Outcomes:**

*   **CO2:** Explaining the characteristics of analog modulation schemes in terms of spectra, power, and efficiency is directly related to understanding how noise impacts these characteristics, particularly the output SNR in FM.
*   **The discussion of noise figures in receivers is relevant to understanding the overall performance of any communication system, including those employing angle modulation.**

**Reference:**

*   **Electronic Communication Systems – Fundamentals through Advanced by Tomasi:** Covers noise considerations for FM and PM, including the threshold effect. (Chapter 12: Frequency Modulation)
*   **Modern Digital and Analog Communication Systems by Lathi & Ding:** Provides a detailed analysis of noise in FM systems. (Chapter 8: Angle Modulation)

---

## 4. Noise Figure of Common Receiver Components

Understanding the noise figures of individual components helps in calculating the overall receiver noise figure.

**Key Components and their Noise Characteristics:**

1.  **Resistors:**
    *   **Thermal Noise (Johnson-Nyquist Noise):** Generated due to the random thermal motion of charge carriers in a conductor.
    *   Noise Power Spectral Density: $P_n(f) = kT$ Watts/Hz, where $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K) and $T$ is the absolute temperature in Kelvin.
    *   For a resistor $R$ and bandwidth $B$, the noise voltage is $V_n = \sqrt{4kTRB}$ Volts.
    *   The equivalent noise resistance of a resistor at temperature $T$ is simply $R$.

2.  **Active Devices (Transistors, Amplifiers):**
    *   **Shot Noise:** Arises from the discrete nature of charge carriers (electrons and holes) crossing a potential barrier in semiconductor devices. It's proportional to the DC current.
    *   **Flicker Noise (1/f Noise):** Dominant at low frequencies, often due to imperfections and surface effects in semiconductor materials.
    *   **Noise Figure:** For active devices, the noise figure quantifies the total noise introduced by the device, expressed as a ratio of input SNR to output SNR. This accounts for thermal, shot, and flicker noise.

3.  **Passive Components (Capacitors, Inductors):**
    *   Ideal capacitors and inductors do not generate noise themselves. However, parasitic resistances associated with them contribute thermal noise.

**Calculating Noise Figure for Cascaded Amplifiers (Recap with emphasis on components):**

$F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2} + \dots$

*   **$F_1$ (First Stage):** This is the most critical. A low-noise amplifier (LNA) with a low noise figure (e.g., < 1 dB) is essential for good receiver sensitivity. The input stage is often a carefully designed Common-Emitter or Common-Source amplifier using bipolar junction transistors (BJTs) or field-effect transistors (FETs), respectively, chosen for their low noise characteristics.
*   **$G_1$ (Gain of First Stage):** High gain in the first stage significantly reduces the impact of noise figures from subsequent stages.
*   **Subsequent Stages ($F_2, F_3, \dots$):** As the signal gets amplified by the first stage, the noise introduced by later stages becomes less significant due to the large gain of the first stage dividing their noise contributions.

**Example:**

A receiver front-end has:
*   LNA: $G_{LNA} = 20$ dB, $NF_{LNA} = 1$ dB
*   Mixer: $G_{Mixer} = -10$ dB, $NF_{Mixer} = 6$ dB
*   IF Amplifier: $G_{IF} = 30$ dB, $NF_{IF} = 2$ dB

Convert to linear:
*   $G_{LNA,lin} = 10^{20/10} = 100$
*   $F_{LNA} = 10^{1/10} \approx 1.259$
*   $G_{Mixer,lin} = 10^{-10/10} = 0.1$
*   $F_{Mixer} = 10^{6/10} \approx 3.981$
*   $G_{IF,lin} = 10^{30/10} = 1000$
*   $F_{IF} = 10^{2/10} \approx 1.585$

Apply Friis' formula:
$F_{\text{total}} = F_{LNA} + \frac{F_{Mixer} - 1}{G_{LNA,lin}} + \frac{F_{IF} - 1}{G_{LNA,lin} G_{Mixer,lin}}$
$F_{\text{total}} = 1.259 + \frac{3.981 - 1}{100} + \frac{1.585 - 1}{100 \times 0.1}$
$F_{\text{total}} = 1.259 + \frac{2.981}{100} + \frac{0.585}{10}$
$F_{\text{total}} = 1.259 + 0.02981 + 0.0585$
$F_{\text{total}} = 1.34731$

$NF_{\text{total, dB}} = 10 \log_{10}(1.34731) \approx 1.30$ dB

**Observation:** The total noise figure is dominated by the LNA's noise figure, with the mixer contributing slightly due to its negative gain (attenuation). The IF amplifier's noise is effectively masked by the LNA's gain.

**Reference:**

*   **Principles of Communications by Ziemer & Tranter:** Detailed discussion on noise sources in electronic components and their impact on receiver performance. (Chapter 4: Noise in Communication Systems)
*   **Communication System Engineering by Proakis & Salehi:** Covers the noise characteristics of various receiver blocks. (Chapter 5: Noise and Interference)

---

## 5. Noise Figure in Angle Modulation Systems (Specific to FM Demodulation)

While angle modulation systems are robust, noise still impacts the demodulated output.

**Effect of Noise on FM Demodulator Output:**

Consider a noisy FM signal: $s(t) = A \cos(\omega_c t + \phi(t)) + n(t)$, where $n(t)$ is additive white Gaussian noise (AWGN).

After the limiter and FM demodulator (e.g., a perfect differentiator and a square-law device), the output can be related to the instantaneous frequency of the received signal.

If the noise is small, the instantaneous frequency of the received signal is approximately:
$\omega_i(t) = \frac{d}{dt} [\omega_c t + \phi(t) + \phi_n(t)]$
$\omega_i(t) = \omega_c + \frac{d\phi(t)}{dt} + \frac{d\phi_n(t)}{dt}$

Where:
*   $\omega_c$ is the carrier frequency.
*   $\frac{d\phi(t)}{dt} = \omega_d(t)$ is the instantaneous frequency deviation due to the modulating signal.
*   $\frac{d\phi_n(t)}{dt} = \omega_n(t)$ is the instantaneous frequency deviation due to noise.

The FM demodulator outputs a signal proportional to $\omega_i(t)$. So, the output signal is:
$m_{\text{out}}(t) = K (\omega_d(t) + \omega_n(t))$, where $K$ is a constant.

The desired output is $K \omega_d(t)$, but the noise component $\omega_n(t)$ is added.

**The output noise spectrum $\mathcal{W}_n(f)$ for an FM system (after demodulation) is a "triangular" spectrum, with its power increasing with the square of the frequency.**

$\mathcal{W}_n(f) \propto f^2$ for $|f| < B_{FM}$, where $B_{FM}$ is the bandwidth of the FM signal.

This means that higher frequency components of the modulating signal are more susceptible to noise degradation.

**Noise Figure in FM (Output SNR Perspective):**

The "noise figure" in FM is often discussed in terms of the **output SNR improvement relative to the input SNR**. This is where the $3\beta^2$ factor comes in (for SNR > threshold).

However, when analyzing receiver components using Friis' formula, we are dealing with the degradation of SNR at the *input* of each stage. The noise figure itself is an intrinsic property of the device, not directly dependent on the modulation scheme (though the *impact* of that noise figure might be different).

**CO2 Alignment:**

*   Understanding how noise affects the demodulated output of FM and PM systems directly relates to comparing their "efficiency" and performance characteristics (CO2). The threshold effect and the triangular noise spectrum highlight the unique noise behavior of angle modulation.

**Reference:**

*   **Principles of Communication Systems by Taub & Schilling:** Explains the output noise spectrum of an FM system. (Chapter 13: Angle Modulation)
*   **Modern Digital and Analog Communication Systems by Lathi & Ding:** Further elaborates on FM noise performance and threshold. (Chapter 8: Angle Modulation)

---

## 6. Practice Questions and Exercises

1.  **Question:** An amplifier has a power gain of 100 and a noise figure of 4 dB. If the input signal is at room temperature (290 K) and has a noise power of $10^{-14}$ W, what is the output noise power?
    *   **Answer:**
        *   $G = 100$
        *   $F = 10^{4/10} \approx 2.512$
        *   Input noise power $N_{\text{in}} = 10^{-14}$ W.
        *   Output noise power $N_{\text{out}} = F \cdot N_{\text{in}} \cdot G$
        *   $N_{\text{out}} = 2.512 \times 10^{-14} \times 100 = 2.512 \times 10^{-12}$ W.

2.  **Question:** A receiver consists of three cascaded stages with the following parameters:
    *   Stage 1: $G_1 = 15$ dB, $NF_1 = 1.5$ dB
    *   Stage 2: $G_2 = 20$ dB, $NF_2 = 3$ dB
    *   Stage 3: $G_3 = 10$ dB, $NF_3 = 5$ dB
    Calculate the overall noise figure of the receiver in dB.
    *   **Answer:**
        *   $G_{1,lin} = 10^{15/10} = 31.62$
        *   $F_1 = 10^{1.5/10} = 1.413$
        *   $G_{2,lin} = 10^{20/10} = 100$
        *   $F_2 = 10^{3/10} = 1.995$
        *   $G_{3,lin} = 10^{10/10} = 10$
        *   $F_3 = 10^{5/10} = 3.162$

        Using Friis' Formula:
        $F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2}$
        $F_{\text{total}} = 1.413 + \frac{1.995 - 1}{31.62} + \frac{3.162 - 1}{31.62 \times 100}$
        $F_{\text{total}} = 1.413 + \frac{0.995}{31.62} + \frac{2.162}{3162}$
        $F_{\text{total}} = 1.413 + 0.03147 + 0.00068$
        $F_{\text{total}} = 1.44515$

        $NF_{\text{total, dB}} = 10 \log_{10}(1.44515) \approx 1.60$ dB

3.  **Question:** Explain why the first stage of a receiver typically has the lowest noise figure. (Relates to CO2 and general receiver design)
    *   **Answer:** According to Friis' formula ($F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \dots$), the noise figure of the first stage ($F_1$) has the most significant impact on the overall noise figure, especially if its gain ($G_1$) is high. Subsequent stages' noise figures are divided by the gain of the preceding stages, making their contribution less significant. Therefore, to achieve the best overall receiver sensitivity (lowest noise figure), the first stage must be designed with a very low noise figure.

4.  **Question:** How does the noise performance of FM differ from AM, particularly concerning the threshold effect and limiting? (Relates to CO2)
    *   **Answer:** FM receivers employ a limiter to remove amplitude variations caused by noise. This makes FM more robust against amplitude-limited noise compared to AM, where noise directly affects the demodulated amplitude. However, FM exhibits a threshold effect: below a certain input SNR, the demodulated output SNR degrades rapidly. In this region, noise-induced frequency deviations become significant, leading to audible distortion. Above the threshold, FM offers a significant SNR improvement over AM, especially with larger modulation indices.

---

## 7. Important Points to Remember

*   **Noise Figure (NF):** A measure of how much a device degrades the SNR. Lower NF is better.
*   **Friis' Formula:** Crucial for calculating the overall NF of cascaded systems: $F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2} + \dots$
*   **First Stage Dominance:** The NF of the first stage has the most significant impact on the overall receiver NF.
*   **LNA Importance:** Low Noise Amplifiers (LNAs) are critical for receiver sensitivity.
*   **FM/PM Noise Immunity:** Generally better than AM, especially at higher SNRs.
*   **FM Threshold Effect:** A point below which FM performance degrades rapidly.
*   **Limiter in FM:** Suppresses amplitude noise, preserving frequency information.
*   **Output Noise Spectrum in FM:** Triangular, with power increasing with frequency squared.

---

This concludes the study notes for Noise Figures in Module 2: Angle Modulation. Remember to refer to the provided textbooks for more in-depth explanations and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
