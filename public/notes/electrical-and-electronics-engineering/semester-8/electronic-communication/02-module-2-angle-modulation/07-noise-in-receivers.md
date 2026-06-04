---
title: "Noise in receivers"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf4"
status: "completed"
scrapedAt: "2026-05-23T16:40:15.919Z"
---
# Electronic Communication: Module 2: Angle Modulation - Noise in Receivers

This module delves into the crucial aspect of noise and its impact on angle modulation systems, specifically focusing on how receivers handle and are affected by noise.

---

## 1. Introduction to Noise in Communication Systems

Noise is an unwanted random signal that interferes with the desired signal, degrading the performance of communication systems. In angle modulation, while FM is inherently more noise-immune than AM, noise still plays a significant role and its effects need to be understood.

**Key Concepts:**

*   **Noise:** Any undesirable random disturbance that interferes with the transmission of a signal.
*   **Signal-to-Noise Ratio (SNR):** A measure of the strength of the desired signal relative to the background noise. A higher SNR indicates better signal quality.
*   **Impact of Noise:** Noise can cause distortion, errors in demodulation, and a reduction in the intelligibility or clarity of the received information.

**Textbook References:**

*   Kennedy, Davis, and Prasanna (6th Ed.): Discusses the fundamental types and sources of noise in communication systems. (Chapter 3, "Noise in Communication Systems")
*   Tomasi (5th Ed.): Provides a broad overview of noise and its effects on various communication techniques. (Chapter 2, "Noise and Interference")
*   Haykin and Mohre (5th Ed.): Explores the mathematical modeling of noise processes. (Chapter 3, "Noise in Communication Systems")
*   Taub & Schilling (4th Ed.): Introduces thermal noise and shot noise as primary sources. (Chapter 2, "Noise")

---

## 2. Sources of Noise in Receivers

Understanding the origin of noise is the first step in mitigating its effects. Noise can be generated within the receiver itself or picked up from the external environment.

**2.1. Internal Noise (Generated within the receiver)**

*   **Thermal Noise (Johnson-Nyquist Noise):**
    *   **Description:** Caused by the random thermal agitation of charge carriers (electrons) in resistive components of the receiver.
    *   **Characteristics:**
        *   It is uniformly distributed over a wide frequency spectrum, making it "white noise."
        *   Its power is proportional to absolute temperature (T).
        *   The noise voltage is given by $V_n = \sqrt{4kTRB}$, where:
            *   $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
            *   $T$ is the absolute temperature in Kelvin.
            *   $R$ is the resistance in ohms.
            *   $B$ is the bandwidth in Hertz.
        *   The noise power delivered to a matched load is $P_n = kT B$.
    *   **Example:** Resistors in amplifier stages, mixer stages, and antenna terminals are primary sources of thermal noise.
    *   **Textbook References:**
        *   Kennedy, Davis, and Prasanna (6th Ed.): Detailed explanation of thermal noise and its power spectral density. (Section 3.2)
        *   Taub & Schilling (4th Ed.): Derivation of thermal noise power. (Section 2.1)

*   **Shot Noise:**
    *   **Description:** Arises from the discrete nature of charge carriers (electrons and holes) crossing a potential barrier in semiconductor devices like diodes and transistors.
    *   **Characteristics:**
        *   It is also a form of white noise, with a uniform power spectral density.
        *   Its magnitude is proportional to the DC current flowing through the device.
        *   The mean-square noise current is given by $I_n^2 = 2qIB$, where:
            *   $q$ is the charge of an electron ($1.602 \times 10^{-19}$ C).
            *   $I$ is the DC current.
            *   $B$ is the bandwidth.
    *   **Example:** PN junction diodes, bipolar junction transistors (BJTs), and field-effect transistors (FETs) exhibit shot noise.
    *   **Textbook References:**
        *   Tomasi (5th Ed.): Explains shot noise in the context of semiconductor devices. (Section 2.2.1)
        *   Haykin and Mohre (5th Ed.): Mathematical treatment of shot noise current. (Section 3.1.2)

*   **Flicker Noise (1/f Noise):**
    *   **Description:** Primarily originates from imperfections in semiconductor materials and at interfaces. It is more significant at low frequencies.
    *   **Characteristics:**
        *   Its power spectral density is inversely proportional to frequency ($1/f$).
        *   It becomes less significant at higher frequencies relevant to most FM systems.
    *   **Example:** Transistor noise, especially in DC biasing circuits.
    *   **Textbook References:**
        *   Kennedy, Davis, and Prasanna (6th Ed.): Discusses flicker noise and its frequency dependence. (Section 3.3)

**2.2. External Noise (Picked up from the environment)**

*   **Atmospheric Noise:**
    *   **Description:** Caused by electrical disturbances in the Earth's atmosphere, such as lightning discharges.
    *   **Characteristics:** Varies with time of day, season, and geographic location. More significant at lower frequencies.

*   **Extraterrestrial Noise:**
    *   **Description:** Originates from sources outside the Earth's atmosphere, such as solar radiation (solar noise) and radiation from distant stars and galaxies (cosmic noise).
    *   **Characteristics:** Generally considered "quiet" on Earth compared to atmospheric noise, but can be significant for satellite and deep-space communication.

*   **Man-made Noise:**
    *   **Description:** Generated by man-made sources like electrical machinery, ignition systems of vehicles, switching power supplies, and digital electronic equipment.
    *   **Characteristics:** Can be broadband or narrowband, depending on the source. Often impulsive in nature.

**Important Point to Remember:** For typical FM receiver operation at VHF and UHF frequencies, **thermal noise** is the dominant internal noise source, and **atmospheric/man-made noise** can be significant external sources, especially in mobile or terrestrial communication.

---

## 3. Noise in Angle Modulation Receivers

Angle modulation schemes (FM and PM) are generally more robust to noise than Amplitude Modulation (AM). However, noise still affects their performance.

**3.1. Effect of Noise on FM Receivers**

*   **Noise in the IF Stage:**
    *   **Description:** Before demodulation, the FM signal is typically passed through an Intermediate Frequency (IF) amplifier. Noise added in this stage will be amplified along with the signal.
    *   **Impact:** The noise modulates the frequency and phase of the IF signal.

*   **Effect of Noise on the Limiter:**
    *   **Description:** FM receivers use a limiter to remove any amplitude variations, including noise-induced amplitude variations.
    *   **Impact:** While the limiter removes amplitude noise, it doesn't completely eliminate the effect of noise on the frequency component of the signal. If the noise amplitude is comparable to or greater than the signal amplitude, the limiter can actually convert amplitude variations into frequency variations, contributing to output noise. This is a critical point where FM's noise immunity can be compromised.
    *   **Textbook References:**
        *   Kennedy, Davis, and Prasanna (6th Ed.): Discusses the limiter's role and its limitations in the presence of strong noise. (Section 12.4)
        *   Tomasi (5th Ed.): Explains the effect of noise on the limiter and the resulting output. (Section 9.5)

*   **Effect of Noise on the FM Demodulator (Discriminator/Foster-Seeley/Ratio Detector):**
    *   **Description:** The demodulator converts the frequency variations back to an audio signal. Noise present on the modulated FM signal will cause unintended frequency variations.
    *   **Impact:** The demodulator will interpret these unintended frequency variations as variations in the original modulating signal, thus producing noise at the output.
    *   **Noise Output of Discriminator:** For frequencies above the **pre-emphasis** breakpoint and below the **de-emphasis** breakpoint (which are usually set to minimize noise in the higher audio frequencies), the noise output power spectral density of an ideal FM discriminator is proportional to $f^2$. This means higher audio frequencies are more affected by noise.
    *   **Textbook References:**
        *   Haykin and Mohre (5th Ed.): Provides a detailed analysis of the output noise spectrum of an FM demodulator. (Section 6.4.2)
        *   Taub & Schilling (4th Ed.): Explains the noise performance of various FM demodulators. (Chapter 10)

*   **The FM Improvement Region (Capture Effect):**
    *   **Description:** In FM, if two signals are present, the stronger signal "captures" the receiver's output, suppressing the weaker signal. This is known as the capture effect.
    *   **Impact:** When the desired FM signal is strong enough (i.e., has a high SNR), the FM system exhibits significant noise improvement compared to AM. The output SNR is proportional to the input SNR squared ($SNR_{out} \propto SNR_{in}^2$) in this region. This means that as the input SNR increases, the output SNR increases much faster.
    *   **Threshold Effect:** This improvement region has a "threshold." Below a certain input SNR (the threshold), the FM system's performance degrades rapidly, and the output SNR no longer follows the squared relationship. The limiter plays a critical role in defining this threshold.
    *   **Textbook References:**
        *   Kennedy, Davis, and Prasanna (6th Ed.): Explains the threshold effect and the noise improvement characteristics of FM. (Section 12.5)
        *   Tomasi (5th Ed.): Illustrates the FM improvement region and threshold effect with graphs. (Section 9.6)
        *   Haykin and Mohre (5th Ed.): Detailed mathematical derivation of the FM improvement. (Section 6.4.3)

*   **Pre-emphasis and De-emphasis:**
    *   **Description:** To combat the $f^2$ noise characteristic of FM demodulation, pre-emphasis is applied to the modulating signal at the transmitter (boosting higher frequencies), and de-emphasis is applied at the receiver (attenuating higher frequencies).
    *   **Impact:** This combination shapes the noise spectrum at the output, making it more uniform across the audio band and thus improving the overall audio quality by reducing the emphasis on higher frequencies where noise is more prominent.
    *   **Textbook References:**
        *   Kennedy, Davis, and Prasanna (6th Ed.): Comprehensive explanation of pre-emphasis and de-emphasis. (Section 12.6)
        *   Tomasi (5th Ed.): Practical implementation and benefits of pre-emphasis/de-emphasis. (Section 9.7)

**3.2. Noise in Phase Modulation (PM) Receivers**

*   **Similarity to FM:** Phase modulation and frequency modulation are closely related. A PM signal can be thought of as an FM signal with a modulating signal whose derivative is integrated.
*   **Demodulation:** PM receivers typically use a phase detector or a frequency discriminator after integrating the received signal to recover the original phase variations.
*   **Noise Impact:** Similar to FM, noise affects the phase of the PM signal. However, the noise output spectrum at the output of a PM demodulator (after appropriate integration/differentiation) is typically proportional to $f^0$ (constant) in the desired signal band, making PM less susceptible to the $f^2$ noise characteristic of FM demodulators for higher frequencies.
*   **Noise Improvement:** PM also exhibits a noise improvement region and a threshold effect, similar to FM.
*   **Textbook References:**
    *   Haykin and Mohre (5th Ed.): Compares noise performance of FM and PM. (Section 6.5)
    *   Taub & Schilling (4th Ed.): Discusses noise analysis for PM receivers. (Chapter 11)

**Important Point to Remember:** The main advantage of FM over AM in terms of noise is the **FM improvement region** and the **capture effect**. However, FM suffers from a **threshold effect** and the **$f^2$ noise power spectral density** at the demodulator output, which is mitigated by pre-emphasis/de-emphasis. PM generally has better high-frequency noise performance compared to FM's demodulator output.

---

## 4. Noise Performance Metrics and Improvement Techniques

*   **Output SNR:** The ratio of the power of the desired output signal to the power of the noise at the output of the receiver.
*   **Noise Figure (NF):** A measure of how much the SNR degrades as the signal passes through a system. Lower NF is better.
*   **Noise Temperature:** An alternative way to express the noise performance of a system component.

**Improvement Techniques:**

*   **Low-Noise Amplifiers (LNAs):** Used at the front-end of the receiver to amplify the weak incoming signal with minimal added noise.
*   **Filtering:** Appropriate filtering can remove out-of-band noise.
*   **Pre-emphasis and De-emphasis:** As discussed earlier, this is crucial for FM.
*   **Diversity Techniques:** Using multiple antennas or communication paths to combat fading and noise. (More relevant in advanced systems, but worth noting as a noise reduction strategy).

**Textbook References:**

*   Kennedy, Davis, and Prasanna (6th Ed.): Explains noise figure and noise temperature. (Chapter 3)
*   Tomasi (5th Ed.): Discusses receiver design considerations for noise reduction. (Chapter 2, Section 2.6)

---

## 5. Relationship with Course Outcomes

This module directly contributes to the understanding of analog modulation schemes and their practical limitations.

*   **CO1 (Amplitude modulator and demodulator circuits):** While this module focuses on angle modulation, understanding noise in receivers is a universal concept in all communication systems. The principles of noise generation and its impact on signal processing are transferable.
*   **CO2 (Characteristics of various analog modulation schemes):** This module specifically addresses the characteristics of FM and PM in terms of their noise performance. It explains why FM is preferred in many applications due to its noise immunity (above threshold) and how PM offers advantages in other aspects. It details spectra (noise spectrum), power (impact on signal power), and efficiency (noise improvement relative to AM).
*   **CO3 & CO4 (Digital communication):** Understanding noise in analog systems provides a foundational basis for appreciating the challenges and techniques employed in digital communication to combat noise (e.g., error correction codes, digital modulation schemes less susceptible to noise).

---

## 6. Practice Questions and Answers

**Question 1:**
What is the primary source of internal noise in electronic circuits operating at room temperature?
a) Shot Noise
b) Flicker Noise
c) Thermal Noise
d) Atmospheric Noise

**Answer:** c) Thermal Noise

**Question 2:**
In an FM system operating in the improvement region, how does the output Signal-to-Noise Ratio (SNR) relate to the input SNR?
a) $SNR_{out} \propto SNR_{in}$
b) $SNR_{out} \propto SNR_{in}^2$
c) $SNR_{out} \propto 1/SNR_{in}$
d) $SNR_{out}$ is independent of $SNR_{in}$

**Answer:** b) $SNR_{out} \propto SNR_{in}^2$

**Question 3:**
What is the purpose of pre-emphasis and de-emphasis in FM systems?
a) To increase the bandwidth of the transmitted signal.
b) To reduce the impact of high-frequency noise at the demodulator output.
c) To improve the capture effect.
d) To boost the transmitted signal power.

**Answer:** b) To reduce the impact of high-frequency noise at the demodulator output.

**Question 4:**
Explain the "threshold effect" in FM receivers.

**Answer:** The threshold effect in FM receivers refers to the phenomenon where, below a certain input signal-to-noise ratio (SNR), the output SNR of the FM system degrades rapidly and no longer follows the characteristic improvement of $SNR_{out} \propto SNR_{in}^2$. In this region, the receiver performance significantly worsens, and the limiting action of the limiter can actually increase noise.

**Question 5:**
(Calculation)
A resistor of $10 k\Omega$ is at a temperature of 290 K. Calculate the thermal noise voltage available across its terminals in a bandwidth of 1 MHz.

**Answer:**
Using the formula $V_n = \sqrt{4kTRB}$:
$k = 1.38 \times 10^{-23}$ J/K
$T = 290$ K
$R = 10 \times 10^3 \Omega$
$B = 1 \times 10^6$ Hz

$V_n = \sqrt{4 \times (1.38 \times 10^{-23}) \times 290 \times (10 \times 10^3) \times (1 \times 10^6)}$
$V_n = \sqrt{1.6008 \times 10^{-7}}$
$V_n \approx 4.001 \times 10^{-4}$ V
$V_n \approx 0.4001$ mV

**Question 6:**
Compare the noise performance of FM and AM, highlighting the key advantages of FM.

**Answer:**
FM systems offer a significant noise advantage over AM systems, especially when the received FM signal is strong. This advantage is primarily due to:
1.  **Noise Improvement Region:** In FM, above a certain threshold, the output SNR improves quadratically with the input SNR ($SNR_{out} \propto SNR_{in}^2$). This means a small increase in input signal strength leads to a much larger improvement in output quality. AM's output SNR is directly proportional to the input SNR ($SNR_{out} \propto SNR_{in}$).
2.  **Capture Effect:** FM receivers tend to lock onto the stronger of two interfering signals, suppressing the weaker one. AM receivers are more susceptible to interference from signals of comparable strength.
3.  **Limiter Action:** The limiter in an FM receiver removes amplitude variations, including noise-induced amplitude changes, which helps maintain the signal's frequency modulation. While AM demodulators directly process amplitude variations, making them more vulnerable to amplitude noise.

However, FM systems have a critical **threshold effect**, where performance degrades drastically below a certain input SNR. AM does not have such a sharp threshold. Also, the noise output spectrum of an FM demodulator is proportional to $f^2$, meaning higher frequencies are noisier, which is mitigated by pre-emphasis/de-emphasis.

---

## 7. Important Points to Remember

*   **Noise is ubiquitous:** It affects all communication systems.
*   **Thermal Noise:** Proportional to temperature and bandwidth. Dominant internal noise.
*   **Shot Noise:** Proportional to DC current. Important in semiconductor devices.
*   **FM Noise Immunity:** FM is more noise-immune than AM in the **improvement region** (high input SNR) due to the $SNR_{out} \propto SNR_{in}^2$ relationship and the capture effect.
*   **FM Threshold:** FM performance degrades sharply below a certain input SNR (threshold).
*   **FM Demodulator Noise:** The output noise power spectral density from an FM demodulator is proportional to $f^2$, meaning higher audio frequencies are noisier.
*   **Pre-emphasis/De-emphasis:** Crucial for FM to counteract the $f^2$ noise characteristic and flatten the overall audio noise spectrum.
*   **Limiter:** Essential in FM receivers, but can contribute to noise if the signal is too weak (below threshold).
*   **PM vs. FM Noise:** PM typically has better high-frequency noise performance at the demodulator output compared to FM.

---

This concludes the study notes for "Noise in Receivers" within Module 2 of Electronic Communication. Remember to consult the provided textbooks for more in-depth mathematical derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
