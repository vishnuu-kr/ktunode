---
title: "pre-emphasis and de-emphasis"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf2"
status: "completed"
scrapedAt: "2026-05-23T16:40:12.119Z"
---
# Electronic Communication: Module 2 - Angle Modulation

## Topic: Pre-emphasis and De-emphasis

---

### 1. Introduction to Pre-emphasis and De-emphasis

**Context:** Angle modulation schemes like Frequency Modulation (FM) and Phase Modulation (PM) are susceptible to noise. Noise often has a triangular power spectral density in FM, meaning that higher frequencies are more severely affected by noise than lower frequencies. This can lead to a degraded Signal-to-Noise Ratio (SNR) at the receiver, particularly for the higher frequency components of the original modulating signal.

**Purpose:** Pre-emphasis and de-emphasis are techniques used in angle modulation systems to combat this frequency-dependent noise and improve the overall SNR. They essentially "boost" the high-frequency components of the modulating signal before transmission and then "attenuate" them back down at the receiver, effectively reversing the process.

---

### 2. Key Concepts and Definitions

*   **Noise in Angle Modulation:** In FM and PM, the noise added during transmission tends to have a greater impact on higher frequencies. This is due to the nature of the demodulation process.
    *   In FM, the noise-induced frequency variations are converted into amplitude variations by the limiter and then demodulated. The demodulated noise has a power spectral density proportional to $f^2$, where $f$ is the frequency of the noise component. This means higher frequencies are noisier.
    *   In PM, the noise power spectral density is proportional to $f$, meaning higher frequencies are also more affected, though to a lesser extent than in FM.
*   **Pre-emphasis:** A process applied at the transmitter where the higher frequencies of the modulating signal are amplified more than the lower frequencies. This is done to ensure that the signal components at higher frequencies are strong enough to overcome the noise that will be added during transmission.
*   **De-emphasis:** A complementary process applied at the receiver where the higher frequencies of the demodulated signal are attenuated more than the lower frequencies. This reverses the pre-emphasis process, restoring the original frequency spectrum of the modulating signal and simultaneously reducing the amplified noise components present at higher frequencies.

---

### 3. Principles of Pre-emphasis and De-emphasis

The core idea is to shape the spectrum of the modulating signal before transmission.

*   **Pre-emphasis Network (Transmitter):** This network is typically an **RC high-pass filter**. It introduces a gain that increases with frequency.
    *   The transfer function of a simple RC high-pass filter is given by:
        $H_{pre}(f) = \frac{j\omega RC}{1 + j\omega RC}$
        where $\omega = 2\pi f$ is the angular frequency.
    *   At low frequencies ($\omega RC \ll 1$), $H_{pre}(f) \approx j\omega RC$, and the gain is proportional to $f$.
    *   At high frequencies ($\omega RC \gg 1$), $H_{pre}(f) \approx 1$, and the gain is constant.
    *   The **corner frequency** or **break frequency** is defined as $f_c = \frac{1}{2\pi RC}$. At this frequency, the gain is $3$ dB higher than the DC gain (which is 0 for a high-pass filter) and the phase shift is $45^\circ$.
*   **De-emphasis Network (Receiver):** This network is a complementary **RC low-pass filter**. It attenuates higher frequencies more than lower frequencies.
    *   The transfer function of a simple RC low-pass filter is given by:
        $H_{de}(f) = \frac{1}{1 + j\omega RC}$
    *   At low frequencies ($\omega RC \ll 1$), $H_{de}(f) \approx 1$, and the gain is constant (unity gain).
    *   At high frequencies ($\omega RC \gg 1$), $H_{de}(f) \approx \frac{1}{j\omega RC}$, and the attenuation is proportional to $1/f$.

**Combined Effect:** When the pre-emphasis and de-emphasis networks have the same time constant ($RC$), their transfer functions are complementary. The product of the transfer functions at any frequency will be unity: $H_{pre}(f) \times H_{de}(f) = 1$. This means the original signal spectrum is restored at the output of the de-emphasis filter. However, the noise spectrum is affected differently.

*   **Signal Spectrum:** The signal is amplified by $H_{pre}(f)$ before transmission. At the receiver, it is attenuated by $H_{de}(f)$. The net effect on the signal spectrum is multiplication by $H_{pre}(f) \times H_{de}(f) = 1$, restoring the original signal spectrum.
*   **Noise Spectrum:** Let the noise power spectral density at the receiver input be $N_0$. The noise is added to the modulated signal. After demodulation, the noise spectrum in FM is proportional to $f^2$. When this noise passes through the de-emphasis filter, its spectrum is further shaped by $H_{de}(f)$. The output noise power spectral density will be proportional to $N(f) \times |H_{de}(f)|^2$.
    *   In FM, where the noise spectrum at the output of the demodulator is $N(f) \propto f^2$, the de-emphasis filter with $H_{de}(f) = \frac{1}{1+j\omega RC}$ will reduce the noise power at higher frequencies. The noise power spectral density at the output of the de-emphasis filter will be approximately $N_0 \times \frac{1}{1+(\omega RC)^2}$ after demodulation. This significantly reduces the high-frequency noise components.

**Overall SNR Improvement:** By boosting the high-frequency signal components before they are corrupted by noise and then attenuating these frequencies at the receiver, pre-emphasis and de-emphasis effectively reduce the noise power in the higher frequency bands of the modulating signal. This leads to an improvement in the output SNR, especially for signals with significant high-frequency content. The improvement in SNR is typically around 10-12 dB at higher frequencies for FM.

---

### 4. Design of Pre-emphasis and De-emphasis Circuits

The design is based on a chosen **pre-emphasis/de-emphasis time constant** ($RC$) or **corner frequency** ($f_c$). This choice is a trade-off between the desired noise reduction and potential distortion of the original signal.

*   **Standard Values:** In FM broadcasting, a standard pre-emphasis/de-emphasis time constant of $\tau = RC = 75 \text{ }\mu s$ is commonly used. This corresponds to a corner frequency $f_c = \frac{1}{2\pi \tau} \approx 2.12 \text{ kHz}$.

*   **Example Circuit Implementations:**

    *   **Pre-emphasis (Transmitter):**
        *   A simple RC high-pass filter can be implemented with a resistor ($R$) in series with the modulating signal and a capacitor ($C$) in parallel to ground, placed before the FM modulator.
        *   A more practical implementation might involve active filters (using op-amps) to provide gain and better control over the frequency response, especially for achieving the desired pre-emphasis characteristic across the entire audio spectrum.

    *   **De-emphasis (Receiver):**
        *   A simple RC low-pass filter can be implemented with a resistor ($R$) in series with the demodulated audio output and a capacitor ($C$) in parallel to ground.
        *   This network is placed after the FM demodulator (e.g., after a discriminator or ratio detector).

*   **Figure:** (Imagine a block diagram here showing the transmitter with pre-emphasis, the channel, and the receiver with de-emphasis after the demodulator)

    ```
    Transmitter:
    Modulating Signal (m(t)) --> Pre-emphasis Network --> Modulator --> FM Signal

    Channel:
    FM Signal + Noise -->

    Receiver:
    FM Signal + Noise --> Demodulator --> Demodulated Signal + Noise --> De-emphasis Network --> Output Signal
    ```

---

### 5. Relationship to Course Outcomes

*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency. (Knowledge Level: K3)**
    *   This topic directly relates to the *spectra* aspect of analog modulation. Pre-emphasis and de-emphasis are techniques specifically designed to modify the spectrum of the modulating signal to improve SNR, which is a key characteristic to understand in relation to FM and PM.
    *   Understanding how noise affects the spectrum differently at various frequencies in FM (proportional to $f^2$) is crucial for appreciating why pre-emphasis/de-emphasis is needed.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. Textbooks and Reference Book Content

*   **Kennedy's Electronic Communication Systems (6th Edition):** Likely discusses noise characteristics in FM and introduces pre-emphasis/de-emphasis as a method to improve SNR. It will explain the role of filters in shaping the spectrum.
*   **Electronic Communication Systems – Fundamentals through Advanced by Wayne Tomasi (5th edition):** Tomasi's book is known for its clear explanations of modulation and demodulation. It would cover the practical implementation of pre-emphasis/de-emphasis circuits and their effect on the noise spectrum in FM.
*   **Communication Systems by Simon Haykin and Michael Mohre (5th Edition):** Haykin's book provides a rigorous mathematical treatment of communication systems. It would offer detailed derivations of the noise spectrum in FM and analyze the performance improvement gained by pre-emphasis/de-emphasis.
*   **Principles of Communication Systems by Taub & Schilling (4th edition):** Taub & Schilling are classic texts. They would cover the theoretical underpinnings, including the noise analysis and the transfer functions of the pre-emphasis/de-emphasis filters.

*   **Reference Books:** All reference books will likely cover this topic, with varying levels of depth. Proakis and Salehi, and Lathi and Ding might provide more advanced analysis or alternative implementations. Ziemer and Tranter would offer a solid foundation.

---

### 7. Important Points to Remember

*   **Purpose:** Improve SNR in angle modulation (FM/PM) by counteracting frequency-dependent noise.
*   **Mechanism:** Pre-emphasis (transmitter) boosts high frequencies; De-emphasis (receiver) attenuates high frequencies.
*   **Filters:** Pre-emphasis uses a high-pass filter (or equivalent); De-emphasis uses a low-pass filter.
*   **Noise in FM:** Noise power spectral density at the demodulator output is proportional to $f^2$.
*   **Complementary Action:** Pre-emphasis and de-emphasis filters must have the same time constant ($RC$) or corner frequency ($f_c$) to restore the original signal spectrum.
*   **SNR Improvement:** Primarily benefits the high-frequency components of the modulating signal.
*   **Standard for FM Broadcasting:** $RC = 75 \text{ }\mu s$.

---

### 8. Practice Questions/Exercises

**Question 1:**
What is the primary reason for using pre-emphasis and de-emphasis in angle modulation systems?
a) To increase the bandwidth of the transmitted signal.
b) To reduce inter-symbol interference.
c) To improve the signal-to-noise ratio (SNR) by reducing the effect of frequency-dependent noise.
d) To simplify the design of the demodulator.

**Question 2:**
Describe the typical circuit used for pre-emphasis at the transmitter in an FM system. What type of filter is it?
a) RC low-pass filter
b) LC band-pass filter
c) RC high-pass filter
d) Active band-stop filter

**Question 3:**
If the noise added during transmission has a power spectral density that increases with frequency, which parts of the modulating signal's spectrum are most affected by this noise after demodulation in an FM system?
a) Low frequencies
b) Mid-range frequencies
c) High frequencies
d) All frequencies equally

**Question 4:**
A de-emphasis filter at the receiver is designed to:
a) Amplify high frequencies and attenuate low frequencies.
b) Amplify low frequencies and attenuate high frequencies.
c) Attenuate high frequencies and pass low frequencies.
d) Pass all frequencies equally.

**Question 5:**
In an FM broadcast system, a time constant of $\tau = 75 \text{ }\mu s$ is commonly used for pre-emphasis and de-emphasis. Calculate the corresponding corner frequency ($f_c$).

**Question 6:**
Explain how the combination of a pre-emphasis filter at the transmitter and a de-emphasis filter at the receiver improves the SNR, considering the noise characteristics in FM.

---

### 9. Answers to Practice Questions

**Answer 1:**
c) To improve the signal-to-noise ratio (SNR) by reducing the effect of frequency-dependent noise.

**Answer 2:**
c) RC high-pass filter. The pre-emphasis network amplifies higher frequencies of the modulating signal.

**Answer 3:**
c) High frequencies. In FM demodulation, the noise power spectral density is proportional to $f^2$, meaning higher frequencies are more affected by noise.

**Answer 4:**
c) Attenuate high frequencies and pass low frequencies. This is the characteristic of a low-pass filter used for de-emphasis.

**Answer 5:**
The corner frequency $f_c$ is given by $f_c = \frac{1}{2\pi RC}$.
Given $\tau = RC = 75 \text{ }\mu s = 75 \times 10^{-6} \text{ s}$.
$f_c = \frac{1}{2\pi \times 75 \times 10^{-6}} = \frac{1}{150\pi \times 10^{-6}} \approx \frac{1}{471.2 \times 10^{-6}} \approx 2122 \text{ Hz}$
So, $f_c \approx 2.12 \text{ kHz}$.

**Answer 6:**
In FM, the noise introduced during transmission, after demodulation, has a power spectral density that is proportional to the square of the frequency ($f^2$). This means higher frequency components of the modulating signal are more corrupted by noise.
The pre-emphasis network at the transmitter boosts these high-frequency components of the original modulating signal. As a result, when noise is added during transmission, the boosted signal components are better able to overcome the noise in their frequency range.
The de-emphasis filter at the receiver applies a complementary attenuation to these high frequencies. This reduces the amplitude of the high-frequency noise that was amplified by the pre-emphasis stage (and also amplified by the $f^2$ characteristic of FM noise). Simultaneously, the de-emphasis filter restores the original frequency spectrum of the modulating signal by attenuating the frequencies that were previously boosted.
The net effect is that the signal's frequency components are restored to their original relative levels, but the noise components, particularly at higher frequencies, have been significantly reduced, leading to an improved output SNR.

---
This concludes the study notes for Pre-emphasis and De-emphasis in Angle Modulation. Remember to cross-reference with your textbooks for more detailed mathematical derivations and practical circuit examples.