---
title: "Amplitude modulation:"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 1: Analog Communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36be6"
status: "completed"
scrapedAt: "2026-05-23T16:39:56.059Z"
---
# Electronic Communication: Module 1: Analog Communication

## Topic: Amplitude Modulation (AM)

### 1. Introduction to Amplitude Modulation

Amplitude Modulation (AM) is a fundamental analog modulation technique where the amplitude of a high-frequency carrier wave is varied in proportion to the instantaneous amplitude of the message signal. It is one of the oldest and simplest forms of modulation.

**Key Concepts:**

*   **Message Signal (Modulating Signal):** The information-bearing signal, typically a low-frequency signal like audio. Let's denote it as $m(t)$.
*   **Carrier Signal:** A high-frequency sinusoidal wave used to transmit the message signal. It has a constant amplitude and frequency. Let's denote it as $c(t) = A_c \cos(2\pi f_c t)$, where $A_c$ is the carrier amplitude and $f_c$ is the carrier frequency.
*   **Modulated Signal:** The output signal after the carrier wave's amplitude has been modified by the message signal.

**Why Modulation?**

Modulation is essential for several reasons:

1.  **Efficient Antenna Size:** To transmit signals effectively, the antenna size must be comparable to the wavelength of the signal. Modulating a low-frequency message signal onto a high-frequency carrier allows for practical antenna sizes.
2.  **Multiplexing:** Allows multiple signals to be transmitted simultaneously over the same medium without interfering with each other. Each signal is modulated onto a different carrier frequency.
3.  **Overcoming Noise:** High-frequency signals are generally less susceptible to certain types of noise compared to low-frequency signals.
4.  **Channel Bandwidth:** Radio transmission channels have limited bandwidth. Modulation shifts the signal to a higher frequency band, making it suitable for transmission over these channels.

### 2. Mathematical Representation of Amplitude Modulation

The general mathematical expression for an Amplitude Modulated (AM) signal is given by:

$s(t) = [A_c + m(t)] \cos(2\pi f_c t)$

Expanding this equation:

$s(t) = A_c \cos(2\pi f_c t) + m(t) \cos(2\pi f_c t)$

Where:

*   $A_c \cos(2\pi f_c t)$: This term represents the **carrier component**. It's the original carrier signal that remains unchanged.
*   $m(t) \cos(2\pi f_c t)$: This term represents the **sideband components**. The message signal $m(t)$ modulates the carrier.

**Important Note:** For the amplitude of the modulated signal to be directly proportional to $m(t)$, the term $A_c + m(t)$ must always be non-negative. This leads to the concept of modulation index.

### 3. Modulation Index ($\mu$)

The modulation index, often denoted by $\mu$ (mu) or $m_a$, quantifies the extent of amplitude variation in the carrier wave. It is defined as the ratio of the amplitude of the modulating signal to the amplitude of the carrier signal.

For a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$, where $A_m$ is the peak amplitude of the message signal, the modulation index is:

$\mu = \frac{A_m}{A_c}$

**Effect of Modulation Index on AM Signal:**

*   **Under-modulation ($\mu < 1$):** The envelope of the AM signal follows the message signal perfectly. The amplitude of the carrier never goes to zero. This is desirable for simple AM receivers.
    *   $s(t) = A_c (1 + \frac{A_m}{A_c} \cos(2\pi f_m t)) \cos(2\pi f_c t)$
    *   $s(t) = A_c (1 + \mu \cos(2\pi f_m t)) \cos(2\pi f_c t)$
    *   The term $(1 + \mu \cos(2\pi f_m t))$ is always positive.

*   **Full modulation ($\mu = 1$):** The envelope touches zero when the modulating signal is at its minimum negative peak.
    *   $s(t) = A_c (1 + \cos(2\pi f_m t)) \cos(2\pi f_c t)$

*   **Over-modulation ($\mu > 1$):** The envelope does not faithfully reproduce the modulating signal. This results in distortion in the demodulated output and is generally avoided in practical AM systems. The term $(1 + \mu \cos(2\pi f_m t))$ becomes negative for certain values of $t$.

**Highlight: For proper demodulation using envelope detection, the modulation index $\mu$ must be less than or equal to 1.** (Referenced from Kennedy's Electronic Communication Systems, Chapter 3)

### 4. Frequency Spectrum of Amplitude Modulation

Let's consider a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$. The AM signal is:

$s(t) = A_c [1 + \mu \cos(2\pi f_m t)] \cos(2\pi f_c t)$

$s(t) = A_c \cos(2\pi f_c t) + \mu A_c \cos(2\pi f_m t) \cos(2\pi f_c t)$

Using the trigonometric identity $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:

$s(t) = A_c \cos(2\pi f_c t) + \frac{\mu A_c}{2} [\cos(2\pi (f_c - f_m) t) + \cos(2\pi (f_c + f_m) t)]$

This equation reveals the frequency components of the AM signal:

1.  **Carrier Component:** $A_c \cos(2\pi f_c t)$ at frequency $f_c$. Its amplitude is $A_c$.
2.  **Lower Sideband (LSB) Component:** $\frac{\mu A_c}{2} \cos(2\pi (f_c - f_m) t)$ at frequency $f_c - f_m$. Its amplitude is $\frac{\mu A_c}{2}$.
3.  **Upper Sideband (USB) Component:** $\frac{\mu A_c}{2} \cos(2\pi (f_c + f_m) t)$ at frequency $f_c + f_m$. Its amplitude is $\frac{\mu A_c}{2}$.

**Bandwidth of AM:**

The bandwidth of an AM signal is the difference between the highest and lowest frequencies present in the spectrum. In this case, it's $(f_c + f_m) - (f_c - f_m) = 2f_m$.

**Bandwidth = 2 * (Maximum frequency of message signal)**

**Important Point:** The bandwidth of an AM signal is twice the bandwidth of the original message signal. (Referenced from Tomasi's Electronic Communication Systems, Chapter 4)

**Spectrum Visualization:**

*   A strong component at the carrier frequency $f_c$.
*   Two sidebands, one above ($f_c + f_m$) and one below ($f_c - f_m$) the carrier frequency, each with half the amplitude of the carrier.

### 5. Power in Amplitude Modulation

The total power of the AM signal is the sum of the powers of its components.
For a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$, the AM signal is:

$s(t) = A_c \cos(2\pi f_c t) + \frac{\mu A_c}{2} \cos(2\pi (f_c - f_m) t) + \frac{\mu A_c}{2} \cos(2\pi (f_c + f_m) t)$

The power of a sinusoidal signal $A \cos(2\pi f t)$ with amplitude $A$ in a 1-ohm resistance is $P = \frac{A^2}{2}$.

*   **Power of Carrier ($P_c$):** $P_c = \frac{A_c^2}{2}$
*   **Power of LSB ($P_{LSB}$):** $P_{LSB} = \frac{1}{2} \left(\frac{\mu A_c}{2}\right)^2 = \frac{\mu^2 A_c^2}{8}$
*   **Power of USB ($P_{USB}$):** $P_{USB} = \frac{1}{2} \left(\frac{\mu A_c}{2}\right)^2 = \frac{\mu^2 A_c^2}{8}$

**Total Power ($P_{total}$):**

$P_{total} = P_c + P_{LSB} + P_{USB} = \frac{A_c^2}{2} + \frac{\mu^2 A_c^2}{8} + \frac{\mu^2 A_c^2}{8}$
$P_{total} = \frac{A_c^2}{2} + \frac{2 \mu^2 A_c^2}{8} = \frac{A_c^2}{2} + \frac{\mu^2 A_c^2}{4}$
$P_{total} = \frac{A_c^2}{2} \left(1 + \frac{\mu^2}{2}\right)$

**Highlight: The carrier component contains a significant portion of the total power, which can be inefficient.** (Referenced from Haykin & Mohre's Communication Systems, Chapter 3)

### 6. Efficiency of Amplitude Modulation

The efficiency of an AM system is defined as the ratio of the power in the sidebands (which carry the information) to the total power.

**Efficiency ($\eta$):**

$\eta = \frac{\text{Power in Sidebands}}{\text{Total Power}} = \frac{P_{LSB} + P_{USB}}{P_{total}}$
$\eta = \frac{\frac{\mu^2 A_c^2}{4}}{\frac{A_c^2}{2} \left(1 + \frac{\mu^2}{2}\right)} = \frac{\frac{\mu^2}{4}}{\frac{1}{2} \left(1 + \frac{\mu^2}{2}\right)}$
$\eta = \frac{\mu^2/2}{1 + \mu^2/2} = \frac{\mu^2}{2 + \mu^2}$

**Analysis of Efficiency:**

*   When $\mu = 1$ (full modulation): $\eta = \frac{1^2}{2 + 1^2} = \frac{1}{3} \approx 33.3\%$
*   When $\mu < 1$ (under-modulation): The efficiency is even lower. For example, if $\mu = 0.5$, $\eta = \frac{0.5^2}{2 + 0.5^2} = \frac{0.25}{2.25} \approx 11.1\%$.

**Conclusion on Efficiency:**

*   AM is an inefficient modulation scheme, especially for typical under-modulated cases.
*   The majority of the transmitted power is in the carrier, which does not carry information.
*   For a given power, AM transmits only a fraction of the information bandwidth.

**Highlight: Standard AM is inherently inefficient due to the presence of the carrier component, which doesn't carry information.** (Referenced from Taub & Schilling's Principles of Communication Systems, Chapter 4)

### 7. Types of Amplitude Modulation

While the basic AM is described above, there are variations designed to improve efficiency or reduce bandwidth:

#### a) Double Sideband-Suppressed Carrier (DSB-SC) AM

*   **Concept:** The carrier component is suppressed, transmitting only the two sidebands.
*   **Mathematical Expression:** $s_{DSB-SC}(t) = m(t) \cos(2\pi f_c t)$
*   **Spectrum:** Only LSB ($f_c - f_m$) and USB ($f_c + f_m$) components are present. No carrier component at $f_c$.
*   **Bandwidth:** $2f_m$ (same as standard AM).
*   **Efficiency:** Significantly higher than standard AM because all transmitted power is in the sidebands. The efficiency approaches 100% for an ideal sinusoidal message signal.
*   **Demodulation:** Requires a coherent (synchronous) detector, which means the receiver must generate a local carrier signal that is phase-locked with the suppressed carrier of the incoming signal. This makes DSB-SC receivers more complex.

#### b) Single Sideband (SSB) AM

*   **Concept:** Suppresses both the carrier and one of the sidebands, transmitting only the carrier and one sideband, or just one sideband.
*   **Types:**
    *   **SSB-Upper Sideband (SSB-USB):** Transmits the carrier and USB.
    *   **SSB-Lower Sideband (SSB-LSB):** Transmits the carrier and LSB.
    *   **DSB-SC with one sideband suppressed:** Transmits only one of the sidebands (e.g., USB or LSB) without the carrier. This is the most efficient form of AM.
*   **Mathematical Expression (for DSB-SC with USB only):** $s_{SSB-USB}(t) = \frac{\mu A_c}{2} \cos(2\pi (f_c + f_m) t)$ (assuming the message signal is converted to a form that produces only USB when multiplied with the carrier)
*   **Spectrum:** Only one sideband is present.
*   **Bandwidth:** $f_m$ (half the bandwidth of standard AM).
*   **Efficiency:** Very high, especially when the carrier is also suppressed.
*   **Demodulation:** Also requires a coherent detector.

#### c) Vestigial Sideband (VSB) AM

*   **Concept:** A compromise between DSB and SSB. One sideband is mostly suppressed, but a small vestige (tail) of the suppressed sideband is retained.
*   **Application:** Primarily used in television broadcasting (analog TV) because it conserves bandwidth while minimizing the distortion that would occur if a full sideband was completely eliminated.
*   **Bandwidth:** Slightly more than $f_m$ but less than $2f_m$.
*   **Demodulation:** Can be demodulated using a non-linear device like a diode detector, but careful design is needed to compensate for the asymmetrical filtering.

### 8. Amplitude Modulation Generation (Modulators)

AM signals can be generated using various circuits. The core idea is to multiply the message signal with a carrier signal in a non-linear manner or by using a carrier signal that has its amplitude varied by the message signal.

**Common AM Modulator Circuits:**

1.  **Square Law Modulator:**
    *   Uses a non-linear device (like a diode or a FET operating in the square-law region) to generate a signal proportional to the square of the input voltage.
    *   The input to the non-linear device is the sum of the carrier and message signals: $x(t) = A_c \cos(2\pi f_c t) + m(t)$.
    *   The output of the square-law device is proportional to $x^2(t) = (A_c \cos(2\pi f_c t) + m(t))^2$.
    *   $x^2(t) = A_c^2 \cos^2(2\pi f_c t) + m^2(t) + 2 A_c m(t) \cos(2\pi f_c t)$.
    *   Using $\cos^2\theta = \frac{1+\cos(2\theta)}{2}$, the output contains:
        *   A DC component.
        *   A carrier component at $2f_c$.
        *   A component at $2f_c \pm f_m$ (sum and difference frequencies due to $m(t)$).
        *   The term $2 A_c m(t) \cos(2\pi f_c t)$ which is the desired AM signal.
    *   A band-pass filter centered at $f_c$ is used to extract the AM signal.
    *   **Limitation:** Square-law device must be highly linear.

2.  **Switching Modulator (or Diode Modulator):**
    *   Uses a diode as a switch, controlled by the carrier signal.
    *   The message signal is applied along with a DC bias. The diode is switched ON or OFF by the carrier.
    *   The output is a series of pulses whose amplitudes are proportional to the message signal.
    *   A low-pass filter or band-pass filter is used to extract the desired AM signal.
    *   Can also be implemented using a transistor switch.

3.  **Ring Modulator:**
    *   Uses four diodes arranged in a ring configuration.
    *   The carrier signal switches the diodes ON and OFF, effectively multiplying the message signal with a square wave carrier.
    *   The output contains the message signal modulated by the odd harmonics of the square wave carrier.
    *   A band-pass filter centered at the carrier frequency is used to extract the DSB-SC signal. If a carrier is also added before filtering, a standard AM signal is generated.
    *   **Benefit:** Can generate DSB-SC signals efficiently.

**Implementation Note:** (Referenced from Ziemer & Tranter's Principles of Communications, Chapter 3) AM generation is often achieved by adding the message signal to a DC offset to ensure positivity and then multiplying this with the carrier. For example, $y(t) = A_c + m(t)$ is multiplied by $\cos(2\pi f_c t)$.

### 9. Amplitude Demodulation (Demodulators)

Demodulation is the process of recovering the original message signal from the modulated signal.

**Types of AM Demodulators:**

1.  **Envelope Detector:**
    *   **Concept:** This is the simplest and most common method for demodulating standard AM signals (under-modulated or fully modulated). It exploits the fact that the envelope of the AM signal follows the message signal.
    *   **Circuit:** Typically consists of a diode followed by a low-pass filter (RC circuit).
    *   **Working:**
        *   The diode rectifies the AM signal, allowing current to flow only during positive half-cycles.
        *   The capacitor charges up to the peak amplitude of the AM signal and then discharges slowly through the resistor when the AM signal's amplitude drops.
        *   The RC time constant is chosen such that the capacitor voltage follows the envelope of the AM signal, but discharges slowly enough to track the peaks.
    *   **Condition for Proper Operation:** The RC time constant must satisfy:
        *   $\frac{1}{f_{max}} >> RC >> \frac{1}{f_c}$, where $f_{max}$ is the maximum frequency of the message signal and $f_c$ is the carrier frequency.
        *   For sinusoidal modulation, this condition simplifies to $\mu \le 1$ for the diode detector to track the envelope without distortion. If $\mu > 1$, the envelope goes negative, and the diode would "lose" the envelope, leading to distortion (diagonal clipping).
    *   **Output:** The output of the envelope detector is approximately the envelope, which is $[A_c + m(t)]$. A further low-pass filter (or a simple DC blocking capacitor) is used to remove the carrier and DC components, yielding the original message signal $m(t)$.
    *   **Highlight:** This is the demodulator used in simple AM radios.

2.  **Synchronous (Coherent) Detector:**
    *   **Concept:** This method is used to demodulate DSB-SC and SSB signals, and it can also demodulate standard AM. It requires a locally generated carrier signal at the receiver that is synchronized in frequency and phase with the original carrier used at the transmitter.
    *   **Circuit:** Involves multiplying the incoming AM signal with the locally generated carrier and then passing the product through a low-pass filter.
    *   **Working (for DSB-SC):**
        *   Received signal: $s_{DSB-SC}(t) = m(t) \cos(2\pi f_c t)$
        *   Local carrier: $\cos(2\pi f_c t)$ (assume perfect synchronization)
        *   Product: $P(t) = m(t) \cos(2\pi f_c t) \cos(2\pi f_c t) = m(t) \cos^2(2\pi f_c t)$
        *   Using $\cos^2\theta = \frac{1+\cos(2\theta)}{2}$: $P(t) = m(t) \left(\frac{1+\cos(4\pi f_c t)}{2}\right) = \frac{1}{2} m(t) + \frac{1}{2} m(t) \cos(4\pi f_c t)$
        *   The term $\frac{1}{2} m(t) \cos(4\pi f_c t)$ is a high-frequency component that is removed by the low-pass filter.
        *   The output of the LPF is $\frac{1}{2} m(t)$. A gain stage is needed to recover $m(t)$.
    *   **Working (for Standard AM):**
        *   Received signal: $s(t) = A_c [1 + \mu m(t)] \cos(2\pi f_c t)$ (assuming $m(t)$ is normalized such that its peak amplitude is 1)
        *   Local carrier: $\cos(2\pi f_c t)$
        *   Product: $P(t) = A_c [1 + \mu m(t)] \cos(2\pi f_c t) \cos(2\pi f_c t)$
        *   $P(t) = A_c [1 + \mu m(t)] \left(\frac{1+\cos(4\pi f_c t)}{2}\right)$
        *   $P(t) = \frac{A_c}{2} [1 + \mu m(t)] + \frac{A_c}{2} [1 + \mu m(t)] \cos(4\pi f_c t)$
        *   The second term is high frequency and filtered out. The output of the LPF is $\frac{A_c}{2} [1 + \mu m(t)]$.
        *   To recover $m(t)$, a DC blocking capacitor is needed to remove $\frac{A_c}{2}$, and then amplify the remaining $\frac{\mu A_c}{2} m(t)$.
    *   **Importance:** Critical for accurate demodulation of DSB-SC and SSB.
    *   **Challenge:** Requires carrier synchronization, which can be complex and susceptible to phase and frequency errors. (Referenced from Proakis & Salehi's Communication System Engineering, Chapter 5)

### 10. Advantages and Disadvantages of Amplitude Modulation

**Advantages:**

*   **Simplicity of Transmitter and Receiver:** Standard AM transmitters and especially receivers (using envelope detectors) are simple and inexpensive to build. This is why AM broadcasting is still prevalent.
*   **Robustness to Frequency and Phase Errors:** Envelope detectors are not sensitive to small frequency or phase drifts in the carrier, making them easier to implement.
*   **Can transmit multiple signals:** By using different carrier frequencies (Frequency Division Multiplexing - FDM).

**Disadvantages:**

*   **Inefficiency:** Significant power is wasted in the carrier component (for standard AM).
*   **Susceptibility to Noise:** Noise that affects the amplitude of the modulated signal will be demodulated as if it were part of the message signal. AM receivers are more susceptible to amplitude-limited noise (e.g., impulse noise) than FM receivers.
*   **Limited Bandwidth Efficiency:** Standard AM uses twice the bandwidth required for the message signal. SSB improves this but requires more complex circuitry.
*   **Over-modulation Distortion:** If the modulation index exceeds 1, distortion occurs, requiring careful control at the transmitter.

### 11. Applications of Amplitude Modulation

*   **AM Radio Broadcasting:** The most well-known application.
*   **Aviation Communications:** Used for air-to-ground communication due to its simplicity.
*   **Analog Television Broadcasting:** Used for the video signal (luminance and chrominance).
*   **Citizen's Band (CB) Radio:** Simple AM is used for short-range communication.
*   **Shortwave Radio:** Used for long-distance broadcasting.

### 12. Practice Questions and Answers

**Question 1:** What is the primary advantage of using amplitude modulation in radio broadcasting?
    *   a) High power efficiency
    *   b) Simple receiver design
    *   c) Wide bandwidth
    *   d) Immunity to noise

    **Answer:** b) Simple receiver design. Envelope detectors are simple and inexpensive.

**Question 2:** If a message signal has a maximum frequency of 5 kHz, what is the minimum bandwidth required for its AM transmission?
    *   a) 5 kHz
    *   b) 10 kHz
    *   c) 20 kHz
    *   d) 100 kHz

    **Answer:** c) 20 kHz. The bandwidth of AM is twice the maximum frequency of the message signal ($2 \times 5 \text{ kHz} = 10 \text{ kHz}$). However, the question asks for AM transmission, which implies standard AM or DSB. The bandwidth of standard AM and DSB-SC is $2f_m$, where $f_m$ is the maximum frequency of the message. So $2 \times 5 \text{ kHz} = 10 \text{ kHz}$.
    *Correction:* The question asks for AM transmission, which typically means standard AM. The bandwidth of the AM signal is indeed $2f_m$. So, for $f_m = 5$ kHz, the bandwidth is $2 \times 5$ kHz = 10 kHz.
    *Re-checking the options:* There seems to be a discrepancy. Let's assume the question implies the bandwidth occupied by the sidebands. If $f_c=100$ kHz and $f_m=5$ kHz, the frequencies are 95 kHz, 100 kHz, and 105 kHz. The bandwidth is $105-95 = 10$ kHz.
    *Let's review the textbook definition.* Bandwidth of AM signal is the difference between the highest and lowest frequencies present. $f_c+f_m - (f_c-f_m) = 2f_m$.
    *The provided options are 5, 10, 20, 100 kHz. The most logical answer for AM transmission (implying $2f_m$) of a 5 kHz message signal is 10 kHz.*
    *Perhaps the question meant SSB transmission or there's a typo in the options.* Given standard AM, 10 kHz is correct. Let's consider if they are asking about something else. If they are asking about the spectrum extent, it's from $f_c-f_m$ to $f_c+f_m$, so total band occupied is $2f_m$.

    Let's assume the options are correct and reconsider. If message bandwidth is 5 kHz, perhaps they are referring to the signal spectrum width.
    *Let's assume the question intends to ask about a scenario where bandwidth is perceived differently.* However, based on standard definitions, it should be 10 kHz.
    *Let's re-evaluate the option selection based on common interpretations:* In some contexts, bandwidth refers to the range of frequencies that need to be allocated. If the message is up to 5 kHz, then the sidebands extend up to 5 kHz above and below the carrier. The total span is 10 kHz.
    *Final decision based on textbooks:* Bandwidth of AM is $2f_m$. For $f_m = 5$ kHz, bandwidth is 10 kHz.

    **Revised Answer:** b) 10 kHz. (Assuming standard AM definition where bandwidth = $2f_{max\_message\_freq}$)

**Question 3:** For an AM signal, what is the condition for avoiding over-modulation?
    *   a) $\mu = 1$
    *   b) $\mu < 1$
    *   c) $\mu > 1$
    *   d) $\mu = 0$

    **Answer:** b) $\mu < 1$. Over-modulation occurs when $\mu > 1$, leading to distortion.

**Question 4:** What type of detector is typically used to demodulate standard AM signals?
    *   a) Synchronous Detector
    *   b) Envelope Detector
    *   c) Phase Detector
    *   d) Frequency Detector

    **Answer:** b) Envelope Detector.

**Question 5:** What is the power in the sidebands of an AM signal with carrier amplitude $A_c$ and modulation index $\mu$?
    *   a) $\frac{\mu^2 A_c^2}{4}$
    *   b) $\frac{\mu^2 A_c^2}{2}$
    *   c) $\frac{A_c^2}{2}$
    *   d) $\frac{A_c^2}{4}$

    **Answer:** a) $\frac{\mu^2 A_c^2}{4}$. This is the sum of power in LSB and USB ($P_{LSB} + P_{USB} = \frac{\mu^2 A_c^2}{8} + \frac{\mu^2 A_c^2}{8} = \frac{\mu^2 A_c^2}{4}$).

### 13. Important Points to Remember

*   **AM Definition:** Amplitude of the carrier is varied by the message signal.
*   **Equation:** $s(t) = A_c[1 + \mu m(t)] \cos(2\pi f_c t)$.
*   **Modulation Index ($\mu$):** Ratio of message amplitude to carrier amplitude ($A_m/A_c$). Crucial for demodulation.
*   **Under-modulation ($\mu < 1$):** Envelope follows message; suitable for envelope detection.
*   **Over-modulation ($\mu > 1$):** Distortion; avoided in practice.
*   **Spectrum:** Carrier at $f_c$, LSB at $f_c - f_m$, USB at $f_c + f_m$.
*   **Bandwidth:** $2f_m$ (twice the message bandwidth).
*   **Power:** Most power is in the carrier, making it inefficient.
*   **Efficiency:** $\eta = \frac{\mu^2}{2 + \mu^2}$, maximum 33.3% at $\mu=1$.
*   **Demodulation:** Envelope detector for standard AM (simple); Synchronous detector for DSB-SC/SSB (complex but efficient).
*   **Variants:** DSB-SC (suppressed carrier), SSB (suppressed carrier and one sideband), VSB (vestigial sideband for TV).
*   **Applications:** AM radio, aviation, analog TV.

---

This comprehensive study note covers the fundamental aspects of Amplitude Modulation as required for Module 1 of Analog Communication in Electronic Communication. It aligns with the provided course outcomes and draws upon the concepts typically found in the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
