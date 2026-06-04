---
title: "FM transmitter and receiver"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf3"
status: "completed"
scrapedAt: "2026-05-23T16:40:14.139Z"
---
# Electronic Communication: Module 2: Angle Modulation - FM Transmitter and Receiver

This module delves into the fundamental principles and practical implementation of Frequency Modulation (FM) transmitters and receivers. We will explore how information is encoded onto a carrier wave by varying its frequency and how this modulated signal is processed and recovered at the receiver.

---

## 1. Introduction to Frequency Modulation (FM)

**Definition:** Frequency Modulation (FM) is a type of angle modulation where the frequency of the carrier wave is varied in accordance with the instantaneous amplitude of the message signal, while the amplitude of the carrier wave remains constant.

**Key Concepts:**
*   **Carrier Wave ($c(t)$):** A sinusoidal signal of constant frequency and amplitude, used to convey information.
    *   $c(t) = A_c \cos(2\pi f_c t)$
    *   Where $A_c$ is the carrier amplitude and $f_c$ is the carrier frequency.
*   **Message Signal ($m(t)$):** The information signal to be transmitted.
*   **Instantaneous Frequency ($f_i(t)$):** The frequency of the modulated signal at any given instant.
*   **Frequency Deviation ($\Delta f$):** The maximum change in the instantaneous frequency from the carrier frequency.
*   **Modulation Index ($m_f$):** A dimensionless quantity that represents the degree of frequency variation.
    *   $m_f = \frac{\Delta f}{f_m}$, where $f_m$ is the maximum frequency of the message signal.

**Mathematical Representation of FM Wave:**
The FM wave can be represented as:
$s(t) = A_c \cos(\theta_i(t))$
Where $\theta_i(t)$ is the instantaneous phase, and its derivative is related to the instantaneous angular frequency:
$\omega_i(t) = \frac{d\theta_i(t)}{dt} = 2\pi f_i(t)$

For FM, the instantaneous frequency is given by:
$f_i(t) = f_c + k_f m(t)$
Where $k_f$ is the frequency sensitivity of the modulator (in Hz/V).

Integrating to find the instantaneous phase:
$\theta_i(t) = 2\pi \int_0^t f_i(\tau) d\tau = 2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau$

Thus, the FM signal is:
$s(t) = A_c \cos\left(2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau\right)$

**Comparison with AM (CO2):**
*   **Amplitude:** FM maintains constant amplitude, making it less susceptible to noise than AM. AM's amplitude varies with the message signal, making it vulnerable to amplitude-based noise.
*   **Bandwidth:** FM generally requires a larger bandwidth than AM. For a sinusoidal message signal with frequency $f_m$, the bandwidth of an FM signal is approximately $2(f_m + \Delta f) = 2f_m(1 + m_f)$. This is known as Carson's Rule. AM bandwidth is $2f_m$.
*   **Power Efficiency:** Both FM and AM transmitters are generally constant-envelope and thus power-efficient in terms of transmitting power, but FM systems are known for better signal-to-noise ratio (SNR) performance for a given transmitter power.

---

## 2. FM Transmitter

An FM transmitter generates the frequency-modulated carrier wave. The core of an FM transmitter is the frequency modulator itself. There are two primary methods for generating FM signals:

### 2.1. Indirect FM (Armstrong Method)

This method generates a narrow-band FM (NBFM) signal first and then amplifies it to the desired power level and frequency, employing frequency multipliers.

**Block Diagram and Working:**

1.  **Voltage-Controlled Oscillator (VCO) or Reactance Modulator:** Generates a carrier wave whose frequency is controlled by the message signal.
    *   **Reactance Modulator:** This circuit uses a variable reactance (e.g., varactor diode or a transistor circuit) whose reactance changes in proportion to the message signal voltage. This variable reactance is coupled to a resonant circuit (LC oscillator) to shift its resonant frequency.
        *   If the variable reactance is capacitive ($C(t)$), the frequency is proportional to $1/\sqrt{C(t)}$.
        *   If the variable reactance is inductive ($L(t)$), the frequency is proportional to $1/\sqrt{L(t)}$.
    *   **VCO:** A more modern approach where the control voltage from the message signal directly alters the oscillation frequency.

2.  **Narrow-Band FM (NBFM) Generator:** The output of the VCO is a NBFM signal.
    *   For NBFM, the modulation index $m_f$ is small (typically $m_f \le 0.3$).
    *   In this case, the FM signal can be approximated as a DSB-SC signal with an added carrier:
        $s(t) \approx A_c \left[\cos(2\pi f_c t) - 2\pi k_f \int_0^t m(\tau) d\tau \sin(2\pi f_c t)\right]$
        This shows similarity to DSB-SC, where the term $k_f m(t)$ acts like the modulating signal for AM.

3.  **Frequency Multiplier:** To increase the frequency deviation and carrier frequency to the desired levels.
    *   A frequency multiplier doubles, triples, or quadruples the input frequency.
    *   **Important:** When the frequency is multiplied by $N$, the frequency deviation is also multiplied by $N$. The modulation index $m_f$ remains unchanged.
        *   If $f_c$ becomes $Nf_c$, and $\Delta f$ becomes $N\Delta f$, then $m_f' = \frac{N\Delta f}{Nf_m} = \frac{\Delta f}{f_m} = m_f$.

4.  **Band-Pass Filter (BPF):** To select the desired FM channel and remove any spurious components.

5.  **Power Amplifier:** Amplifies the FM signal to the required transmission power. The amplitude is kept constant throughout the process.

**Advantages:**
*   Generates a stable carrier frequency due to the use of crystal oscillators in some VCO designs.
*   Less prone to distortion compared to direct FM at higher modulation indices.

**Disadvantages:**
*   Requires multiple stages of frequency multiplication and amplification, making the circuitry more complex.
*   Bandwidth limitations at the NBFM generation stage.

**(Reference: Kennedy's Electronic Communication Systems, Chapter 7; Tomasi, Chapter 6; Haykin & Mohre, Chapter 4)**

---

### 2.2. Direct FM

In this method, the frequency of the carrier is directly varied by the message signal.

**Block Diagram and Working:**

1.  **Voltage-Controlled Oscillator (VCO):** The VCO's output frequency is directly proportional to the input modulating voltage.
    *   The instantaneous frequency is $f_i(t) = f_c + k_f m(t)$.

2.  **Frequency Multiplier (Optional):** If the baseband VCO cannot achieve the desired carrier frequency or deviation.
    *   When the frequency is multiplied by $N$, the frequency deviation is also multiplied by $N$.

3.  **Band-Pass Filter (BPF):** To select the desired FM channel.

4.  **Power Amplifier:** Amplifies the FM signal to the required transmission power.

**Types of Modulators used in Direct FM:**

*   **Varactor Diode Modulator:** A varactor diode's capacitance varies with the applied reverse bias voltage. When this voltage is the message signal, the varactor's capacitance changes, altering the resonant frequency of an LC tank circuit in an oscillator.
    *   The capacitance of a varactor diode is approximately $C(v) = \frac{C_0}{(V_b + v)^{1/n}}$, where $V_b$ is the bias voltage, $v$ is the applied signal, and $n$ is typically 2 or 3.
    *   The frequency of an LC oscillator is $f = \frac{1}{2\pi\sqrt{LC}}$. For a modulated capacitance $C(t)$, $f(t) = \frac{1}{2\pi\sqrt{LC(t)}}$.
    *   This often leads to non-linear FM, requiring linearization techniques or accepting some distortion.

*   **Transistor Modulator:** Uses transistors in circuits like the Colpitts or Hartley oscillator, where the message signal can be coupled to influence the oscillator's frequency. For example, coupling the message signal to the base or emitter of a transistor in a Colpitts oscillator can vary its frequency.

*   **Digital-to-Analog Converter (DAC) Controlled VCO:** In modern direct FM transmitters, a DAC converts a digital representation of the message signal into an analog voltage that controls a highly stable VCO.

**Advantages:**
*   Simpler circuitry compared to indirect FM.
*   Can achieve wide frequency deviation directly.

**Disadvantages:**
*   The carrier frequency stability is generally poorer than that achieved with indirect FM, as it relies on the stability of the VCO.
*   Can be more prone to distortion if not designed carefully.

**(Reference: Kennedy's Electronic Communication Systems, Chapter 7; Tomasi, Chapter 6; Haykin & Mohre, Chapter 4)**

---

## 3. FM Receiver (Superheterodyne)

An FM receiver is designed to detect and demodulate the FM signal, recovering the original message signal. The superheterodyne receiver architecture is commonly used due to its superior performance.

**Block Diagram and Working:**

1.  **Antenna:** Captures the incoming radio frequency (RF) FM signal.

2.  **RF Amplifier (Tuner):** Amplifies the weak incoming RF signal. It also selects the desired frequency band and rejects unwanted out-of-band signals. This stage includes adjustable tuned circuits.

3.  **Local Oscillator (LO):** Generates a signal at a frequency that, when mixed with the incoming RF signal, produces a fixed Intermediate Frequency (IF).
    *   $f_{LO} = f_{RF} - f_{IF}$ or $f_{LO} = f_{RF} + f_{IF}$. The difference frequency is typically used.
    *   The LO frequency must track the incoming RF frequency to maintain a constant IF.

4.  **Mixer:** Combines the RF signal and the LO signal to produce sum and difference frequencies. The desired output is the difference frequency, which is the IF signal.
    *   $f_{IF} = |f_{RF} - f_{LO}|$.
    *   The mixer is typically a non-linear device (e.g., diode mixer, transistor mixer).

5.  **IF Amplifier:** Amplifies the IF signal to a sufficient level for detection. It also provides most of the receiver's selectivity (rejection of adjacent channel signals) through tuned circuits. The IF bandwidth is designed to accommodate the bandwidth of the FM signal (according to Carson's Rule).

6.  **Limiter:** This is a crucial stage in FM receivers. It removes any amplitude variations from the IF signal, effectively converting the FM signal into a constant-amplitude signal.
    *   **Purpose:** Since FM carries information in frequency variations, amplitude variations (often caused by noise or fading) are unwanted. The limiter "cleans up" the signal by clipping the peaks.
    *   **Operation:** Limiters are typically hard-clipping circuits (e.g., a series of cascaded amplifier stages with high gain or diode clipper circuits) that ensure the output amplitude is constant, regardless of input amplitude variations, as long as the input is above a certain threshold.
    *   **Advantage:** This amplitude limiting makes FM highly immune to amplitude-dependent noise (like white noise).

7.  **FM Detector (Demodulator):** This is the core component that recovers the original message signal from the frequency variations of the IF signal. Common FM detectors include:
    *   **Slope Detector:** A simple but non-ideal detector. It uses a tuned circuit (e.g., an LC circuit) that is slightly off-tuned from the IF center frequency. As the frequency of the FM signal varies, it moves up and down the slope of the tuned circuit's response curve, producing amplitude variations proportional to the frequency deviations.
        *   **Disadvantages:** Non-linear and sensitive to the slope of the tuned circuit. Requires precise tuning.
    *   **Foster-Seeley Discriminator:** A more linear detector. It uses a center-tuned transformer and two side-tuned resonant circuits. The phase and amplitude relationships between signals derived from the IF transformer and the secondary coils produce a voltage proportional to the frequency deviation. It requires a limiter before it.
    *   **Ratio Detector:** Similar in principle to the Foster-Seeley discriminator but uses diodes in a different configuration to provide better limiting action and reduce distortion caused by amplitude variations that might slip through the limiter. It also requires a limiter.
    *   **Phase-Locked Loop (PLL) Detector:** A highly effective FM demodulator. It consists of a Phase Detector, a Low-Pass Filter (LPF), and a Voltage-Controlled Oscillator (VCO). The PLL tracks the incoming FM signal's frequency. The output of the VCO, which is locked to the incoming signal's instantaneous frequency, is essentially the recovered message signal.
        *   **Advantages:** Excellent linearity, good noise immunity, and can be used for both FM and PM demodulation.
    *   **Quadrature Detector:** Another common type that uses a phase shift network and a multiplier. The phase shift network shifts the phase of the FM signal by 90 degrees, and the multiplier (mixer) outputs a signal whose average value is proportional to the frequency deviation.

8.  **Audio Amplifier:** Amplifies the recovered audio signal to drive a loudspeaker or headphones.

**(Reference: Kennedy's Electronic Communication Systems, Chapter 8; Tomasi, Chapter 6; Haykin & Mohre, Chapter 4; Taub & Schilling, Chapter 10)**

---

## 4. FM Receiver Performance and Concepts

*   **Capture Effect:** In FM, if two signals are present at slightly different frequencies but within the receiver's bandwidth, the receiver will tend to lock onto the stronger signal, suppressing the weaker one. This is due to the limiter action and the discriminator's behavior. This effect makes FM reception robust against interference from weaker co-channel signals.
*   **Pre-emphasis and De-emphasis:**
    *   **Pre-emphasis:** In the FM transmitter, high-frequency components of the message signal are boosted before modulation. This is done to improve the signal-to-noise ratio (SNR) at higher frequencies, where noise tends to be more pronounced in FM systems. This is typically achieved using a simple RC high-pass filter.
    *   **De-emphasis:** In the FM receiver, the boosted high-frequency components are attenuated by an identical RC low-pass filter. This restores the original frequency spectrum of the message signal and simultaneously reduces the high-frequency noise that was amplified by the pre-emphasis circuit.
    *   **Effect:** Pre-emphasis and de-emphasis together improve the overall SNR of the system, especially for high-frequency message components.

*   **FM Noise Improvement:** FM offers a significant improvement in SNR over AM, especially in the "quiet region" where the FM signal is much stronger than the noise. The output SNR of an FM system is proportional to the modulation index ($m_f$) and the bandwidth.
    *   **Threshold Effect:** Below a certain input signal-to-noise ratio (the threshold), the performance of an FM receiver degrades rapidly. The limiter and discriminator action becomes ineffective, and noise significantly impacts the demodulated output. The threshold is a characteristic limitation of FM systems.

**(Reference: Kennedy's Electronic Communication Systems, Chapter 8; Tomasi, Chapter 6; Haykin & Mohre, Chapter 4; Taub & Schilling, Chapter 10)**

---

## 5. Practice Questions and Answers

**Question 1:** An FM transmitter modulates a carrier frequency of 100 MHz with a sinusoidal signal of 5 kHz. The frequency sensitivity of the modulator is $k_f = 50$ kHz/V. If the modulating signal amplitude is 2 V, calculate:
    a) The frequency deviation ($\Delta f$).
    b) The modulation index ($m_f$).
    c) The bandwidth of the FM signal using Carson's Rule.

**Answer 1:**
Given:
*   Carrier frequency, $f_c = 100$ MHz
*   Message signal frequency, $f_m = 5$ kHz
*   Frequency sensitivity, $k_f = 50$ kHz/V
*   Modulating signal amplitude, $V_m = 2$ V

    a) Frequency deviation ($\Delta f$):
    $\Delta f = k_f \times V_m = 50 \text{ kHz/V} \times 2 \text{ V} = 100 \text{ kHz}$

    b) Modulation index ($m_f$):
    $m_f = \frac{\Delta f}{f_m} = \frac{100 \text{ kHz}}{5 \text{ kHz}} = 20$

    c) Bandwidth (BW) using Carson's Rule:
    $BW \approx 2(f_m + \Delta f) = 2(5 \text{ kHz} + 100 \text{ kHz}) = 2(105 \text{ kHz}) = 210 \text{ kHz}$

---

**Question 2:** What is the primary function of a limiter in an FM receiver?
    a) To amplify the IF signal.
    b) To remove amplitude variations from the FM signal.
    c) To mix the RF signal with the local oscillator signal.
    d) To generate the carrier frequency.

**Answer 2:**
b) To remove amplitude variations from the FM signal.

---

**Question 3:** Explain why pre-emphasis and de-emphasis are used in FM systems. (CO2)

**Answer 3:**
Pre-emphasis and de-emphasis are used to improve the signal-to-noise ratio (SNR) of the FM system, particularly at higher audio frequencies.
*   **Pre-emphasis** (in the transmitter) boosts the higher frequency components of the message signal before modulation.
*   **De-emphasis** (in the receiver) attenuates these same higher frequencies after demodulation.
This process effectively reduces the impact of high-frequency noise, which is often more prominent in FM systems, leading to a cleaner and clearer audio output.

---

**Question 4:** Describe the key difference between indirect FM (Armstrong method) and direct FM in terms of generation process.

**Answer 4:**
*   **Indirect FM (Armstrong Method):** Generates a narrow-band FM signal first using a low-deviation modulator (like a reactance modulator or VCO), and then increases the frequency deviation and carrier frequency using frequency multipliers and amplifiers.
*   **Direct FM:** Directly modulates a carrier wave whose frequency is varied in proportion to the message signal by using a voltage-controlled oscillator (VCO) or similar device. Frequency multipliers may be used if the baseband VCO cannot directly generate the desired carrier frequency or deviation.

---

**Question 5:** What is the threshold effect in FM receivers, and why does it occur?

**Answer 5:**
The **threshold effect** in FM receivers refers to the rapid degradation of the output signal-to-noise ratio (SNR) when the input signal strength falls below a certain level, known as the threshold. This occurs because, below this threshold, the limiter in the FM receiver can no longer effectively remove all amplitude variations, and the discriminator's output becomes highly distorted and noisy. The ideal FM noise advantage is lost when the input signal is weak.

---

## 6. Important Points to Remember

*   **Constant Amplitude:** The defining characteristic of FM is constant carrier amplitude, which provides immunity to amplitude noise.
*   **Bandwidth:** FM requires significantly more bandwidth than AM, as defined by Carson's Rule: $BW \approx 2(f_m + \Delta f)$.
*   **Modulation Index ($m_f$):** Crucial parameter determining bandwidth and SNR. Low $m_f$ (NBFM) $\approx$ AM bandwidth. High $m_f$ (WBFM) $\approx$ greater bandwidth and better SNR.
*   **Transmitter Methods:** Indirect FM (Armstrong) uses multipliers and generates NBFM first. Direct FM modulates frequency directly with a VCO.
*   **Receiver Stages:** Key components include RF amplifier, mixer, IF amplifier, limiter, and FM detector (discriminator or PLL).
*   **Limiter:** Essential for removing amplitude noise and enabling proper FM demodulation.
*   **FM Detectors:** Foster-Seeley, Ratio Detector, and PLL are common linear demodulators.
*   **Capture Effect:** FM receivers preferentially lock onto the stronger of two co-channel signals.
*   **Pre-emphasis/De-emphasis:** Improves SNR at higher frequencies by boosting them at the transmitter and cutting them back at the receiver.
*   **Threshold Effect:** FM's noise advantage is lost below a certain input signal level.

---

## 7. Alignment with Course Outcomes

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   While this module focuses on FM, understanding AM principles provides a basis for comparing modulation techniques. The mathematical representation of FM, particularly the phase and frequency relationships, builds upon similar foundational concepts from AM.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   This module directly addresses the characteristics of FM: its spectrum (Carson's Rule), power efficiency (constant envelope), and noise performance (improvement over AM, threshold effect). The comparison with AM is inherent in understanding FM's advantages.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   Although this module is on analog communication, the understanding of blocks like amplifiers, mixers, oscillators, filters, and modulators/demodulators in an FM system provides a foundational understanding of signal processing that is transferable to digital communication systems. The superheterodyne receiver architecture, for example, is common to many communication systems.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   This module focuses on analog FM. However, the principles of encoding information onto a carrier by manipulating its parameters (frequency in this case) are fundamental. Understanding the challenges and benefits of FM can inform the choice and design of digital modulation schemes.

---
This concludes the study notes for FM Transmitter and Receiver. Remember to consult your textbooks for deeper dives into specific circuit implementations and theoretical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
