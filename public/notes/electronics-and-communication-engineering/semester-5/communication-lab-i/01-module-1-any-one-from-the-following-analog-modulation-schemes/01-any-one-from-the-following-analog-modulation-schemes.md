---
title: "Any one from the following Analog modulation schemes"
subject: "COMMUNICATION LAB I"
module: "Module 1: Any one from the following Analog modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feca3"
status: "completed"
scrapedAt: "2026-05-23T17:54:12.746Z"
---
# COMMUNICATION LAB I - Module 1: Analog Modulation Schemes

## Introduction to Analog Modulation

Analog modulation is a fundamental technique used in communication systems to transmit information over a carrier wave. The information signal (message signal) is used to vary one or more properties of a carrier wave, such as its amplitude, frequency, or phase. This allows the message signal to be transmitted efficiently and effectively through a communication channel, often to overcome limitations like atmospheric attenuation or to share the channel with other signals.

**Key Concept:** The primary goal of modulation is to shift the spectrum of the message signal to a higher frequency range, suitable for transmission.

### Learning Outcomes for this Module:

*   **Understand the principles of Amplitude Modulation (AM), Frequency Modulation (FM), and Phase Modulation (PM).**
*   **Analyze the time-domain and frequency-domain characteristics of modulated signals.**
*   **Understand the concept of bandwidth requirements for different analog modulation schemes.**
*   **Learn about the advantages and disadvantages of each modulation scheme.**
*   **Gain practical experience in generating and demodulating analog modulated signals.**

---

## Topic: Amplitude Modulation (AM)

Amplitude Modulation (AM) is a modulation technique where the amplitude of the carrier wave is varied in proportion to the message signal. The frequency and phase of the carrier wave remain constant.

### Key Concepts and Definitions:

*   **Carrier Signal:** A high-frequency sinusoidal wave used to carry the information.
    *   Mathematically: $c(t) = A_c \cos(2\pi f_c t)$
    *   Where $A_c$ is the carrier amplitude and $f_c$ is the carrier frequency.

*   **Message Signal (Modulating Signal):** The original information signal.
    *   For simplicity, let's consider a sinusoidal message signal: $m(t) = A_m \cos(2\pi f_m t)$
    *   Where $A_m$ is the message amplitude and $f_m$ is the message frequency.

*   **Amplitude Modulated (AM) Signal:** The carrier wave whose amplitude is varied by the message signal.
    *   The general form of an AM signal is: $s(t) = [A_c + m(t)] \cos(2\pi f_c t)$
    *   Substituting the sinusoidal message signal: $s(t) = [A_c + A_m \cos(2\pi f_m t)] \cos(2\pi f_c t)$

*   **Modulation Index ($μ$ or $m_a$):** A parameter that defines the extent of variation in the carrier's amplitude.
    *   $μ = \frac{A_m}{A_c}$
    *   **Condition for no over-modulation:** $μ \le 1$.
        *   If $μ > 1$, over-modulation occurs, leading to distortion.

### Time-Domain and Frequency-Domain Characteristics:

*   **Expanding the AM signal equation:**
    $s(t) = A_c \cos(2\pi f_c t) + A_m \cos(2\pi f_m t) \cos(2\pi f_c t)$
    Using the trigonometric identity: $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
    $s(t) = A_c \cos(2\pi f_c t) + \frac{A_m}{2} [\cos(2\pi(f_c - f_m)t) + \cos(2\pi(f_c + f_m)t)]$

*   **Components of an AM signal:**
    1.  **Carrier Component:** $A_c \cos(2\pi f_c t)$ - This component has the carrier frequency $f_c$.
    2.  **Upper Sideband (USB):** $\frac{A_m}{2} \cos(2\pi(f_c + f_m)t)$ - This component has a frequency $f_c + f_m$.
    3.  **Lower Sideband (LSB):** $\frac{A_m}{2} \cos(2\pi(f_c - f_m)t)$ - This component has a frequency $f_c - f_m$.

*   **Frequency Spectrum of AM:**
    *   The spectrum consists of three components: the carrier frequency ($f_c$), and two sidebands centered around $f_c$.
    *   The bandwidth of a standard AM signal is $2f_m$, which is twice the highest frequency present in the message signal.

    **(Diagram: A frequency spectrum showing a strong carrier at $f_c$, and weaker components at $f_c - f_m$ and $f_c + f_m$)**

### Advantages and Disadvantages of AM:

*   **Advantages:**
    *   **Simple Transmitter and Receiver Design:** AM transmitters and receivers are relatively easy and inexpensive to build.
    *   **Good for Voice Communication:** Particularly effective for voice transmission over shorter distances.

*   **Disadvantages:**
    *   **Inefficient Power Utilization:** A significant portion of the transmitted power is in the carrier, which does not carry information.
    *   **Susceptible to Noise:** Amplitude variations caused by noise directly affect the demodulated signal.
    *   **Limited Bandwidth Efficiency:** Requires a bandwidth of $2f_m$, which can be inefficient for high-frequency message signals.

### Types of AM:

*   **Double Sideband-Full Carrier (DSB-FC):** This is the standard AM described above.
*   **Double Sideband-Suppressed Carrier (DSB-SC):** The carrier component is suppressed, leading to better power efficiency but requiring more complex demodulation.
    *   $s(t) = m(t) \cos(2\pi f_c t)$
    *   Spectrum: Consists only of USB and LSB. Bandwidth is still $2f_m$.
*   **Single Sideband (SSB):** Either the USB or LSB is transmitted, leading to the highest bandwidth efficiency.
    *   $s(t) = \frac{A_m}{2} \cos(2\pi(f_c + f_m)t)$ (for USB)
    *   Spectrum: Contains only one sideband. Bandwidth is $f_m$.

### Demodulation of AM (DSB-FC):

*   **Envelop Detector:** The simplest method, consisting of a diode, a resistor, and a capacitor.
    *   The diode rectifies the AM signal.
    *   The RC circuit acts as a low-pass filter, smoothing out the rectified carrier pulses and recovering the envelope, which is the original message signal.
    *   **Requirement:** The time constant $RC$ must be chosen carefully. $\frac{1}{f_c} \ll RC \ll \frac{1}{f_m}$.

### Practical Considerations (Referencing Textbooks):

*   **The Hobbyist's Guide to the RTL-SDR:** This book might discuss practical aspects of receiving AM signals using an RTL-SDR dongle, including tuning to AM broadcast frequencies and observing the signal characteristics.
*   **Principles of Communication Systems Simulation with Wireless Applications:** This textbook would provide detailed mathematical models for AM generation and demodulation, allowing for simulation of its performance in a wireless context.
*   **Digital Modulations using Python:** While focused on digital modulation, this book might include examples of generating and analyzing analog waveforms, which can be adapted for AM.
*   **Communication Systems by Simon Haykin:** Chapter on AM would provide a rigorous mathematical treatment of AM, including various modulation techniques and their spectral properties.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi:** This book offers a comprehensive overview of AM, including its mathematical derivation, modulation index, bandwidth, power considerations, and applications.
*   **Introduction to Analog and Digital Communication by Simon Haykin:** Similar to the above, this provides foundational knowledge on AM principles.
*   **Electronic communication systems by George Kennedy:** This text would cover the practical aspects of AM transmitter and receiver circuits.

---

## Topic: Frequency Modulation (FM)

Frequency Modulation (FM) is a modulation technique where the frequency of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal. The amplitude of the carrier wave remains constant.

### Key Concepts and Definitions:

*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
*   **Message Signal:** $m(t)$
*   **Instantaneous Frequency ($f_i(t)$):** The frequency of the modulated signal at any given instant.
    *   $f_i(t) = f_c + k_f m(t)$
    *   Where $f_c$ is the carrier frequency and $k_f$ is the frequency sensitivity constant (Hz/Volt).

*   **Frequency Deviation ($Δf$):** The maximum change in the instantaneous frequency from the carrier frequency.
    *   $Δf = k_f A_m$ (for a sinusoidal message signal $m(t) = A_m \cos(2\pi f_m t)$)

*   **Modulation Index ($β$):** A dimensionless parameter that indicates the degree of frequency variation.
    *   $β = \frac{Δf}{f_m} = \frac{k_f A_m}{f_m}$

*   **Frequency Modulated (FM) Signal:**
    *   The instantaneous phase of the FM signal is the integral of the instantaneous angular frequency:
        $\theta_i(t) = 2\pi \int f_i(t) dt = 2\pi \int (f_c + k_f m(t)) dt = 2\pi f_c t + 2\pi k_f \int m(t) dt$
    *   The FM signal is then: $s(t) = A_c \cos(\theta_i(t)) = A_c \cos(2\pi f_c t + 2\pi k_f \int m(t) dt)$

### Time-Domain and Frequency-Domain Characteristics:

*   **For a sinusoidal message signal:** $m(t) = A_m \cos(2\pi f_m t)$
    *   $\int m(t) dt = \int A_m \cos(2\pi f_m t) dt = \frac{A_m}{2\pi f_m} \sin(2\pi f_m t)$
    *   Substituting this into the FM signal equation:
        $s(t) = A_c \cos(2\pi f_c t + \frac{2\pi k_f A_m}{2\pi f_m} \sin(2\pi f_m t))$
        $s(t) = A_c \cos(2\pi f_c t + β \sin(2\pi f_m t))$

*   **Frequency Spectrum of FM:**
    *   The FM spectrum is more complex than AM. It contains the carrier frequency plus an infinite number of sidebands.
    *   However, most of the power is concentrated in a few significant sidebands.
    *   The bandwidth of an FM signal is approximated by **Carson's Rule**:
        $BW \approx 2(Δf + f_m) = 2f_m(β + 1)$

*   **Types of FM based on Modulation Index ($β$):**
    *   **Narrowband FM (NBFM):** $β \ll 1$. The spectrum is similar to AM DSB-SC, with a carrier and two sidebands.
        *   $s(t) \approx A_c \cos(2\pi f_c t) - A_c β \sin(2\pi f_m t) \sin(2\pi f_c t)$
    *   **Wideband FM (WBFM):** $β \ge 1$. The spectrum contains the carrier and many significant sidebands.

### Advantages and Disadvantages of FM:

*   **Advantages:**
    *   **Superior Noise Immunity:** The information is encoded in frequency, making it less susceptible to amplitude variations caused by noise.
    *   **Constant Amplitude:** This simplifies power amplifier design.
    *   **Higher Fidelity:** Capable of higher quality audio transmission compared to AM.

*   **Disadvantages:**
    *   **Wider Bandwidth Requirement:** Generally requires a larger bandwidth than AM.
    *   **More Complex Transmitter and Receiver:** FM generation and demodulation circuits are more complex.
    *   **Capture Effect:** A stronger FM signal can completely suppress a weaker FM signal on the same frequency.

### Demodulation of FM:

*   **Slope Detector:** A simple but non-linear method. It uses a tuned circuit (e.g., an LC circuit) to convert frequency variations to amplitude variations, which can then be demodulated by an envelope detector. It suffers from distortion if the message signal bandwidth is wide.
*   **Phase-Locked Loop (PLL):** A sophisticated circuit that can accurately track the frequency variations of the FM signal.
*   **Foster-Seeley Discriminator / Ratio Detector:** More linear FM demodulators.

### Practical Considerations (Referencing Textbooks):

*   **The Hobbyist's Guide to the RTL-SDR:** This book is excellent for exploring FM broadcast reception. You can tune into FM radio stations and analyze their characteristics.
*   **Principles of Communication Systems Simulation with Wireless Applications:** This book is ideal for simulating FM transmitters and receivers, analyzing the impact of noise, and evaluating performance metrics.
*   **Digital Modulations using Python:** While focused on digital, understanding waveform generation in Python can be extended to creating FM signals.
*   **Communication Systems by Simon Haykin:** Provides a deep theoretical dive into FM, including Bessel functions for spectral analysis, NBFM and WBFM, and demodulation techniques.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi:** Excellent coverage of FM theory, including the generation methods (e.g., Varactor diode modulators) and demodulation techniques, along with a detailed discussion of bandwidth.
*   **Introduction to Analog and Digital Communication by Simon Haykin:** Offers a clear explanation of FM principles and its advantages over AM.
*   **Electronic communication systems by George Kennedy:** Covers practical FM circuit design and implementation for transmitters and receivers.

---

## Topic: Phase Modulation (PM)

Phase Modulation (PM) is a modulation technique where the phase of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal. The amplitude and frequency of the carrier wave remain constant.

### Key Concepts and Definitions:

*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
*   **Message Signal:** $m(t)$
*   **Phase of the Carrier:** $\phi(t) = 2\pi f_c t + \theta(t)$
*   **Phase Modulation:** The phase shift $\theta(t)$ is directly proportional to the message signal.
    *   $\theta(t) = k_p m(t)$
    *   Where $k_p$ is the phase sensitivity constant (radians/Volt).

*   **Phase Modulated (PM) Signal:**
    *   $s(t) = A_c \cos(2\pi f_c t + k_p m(t))$

*   **Modulation Index for PM:**
    *   The amplitude of the phase variation is $k_p A_m$. This is often referred to as the phase modulation index.

### Relationship between FM and PM:

*   A PM signal can be generated by integrating the message signal and then frequency modulating it.
*   An FM signal can be generated by amplitude modulating the carrier with the derivative of the message signal and then phase modulating it.
*   **Key Difference:**
    *   **PM:** Phase is proportional to $m(t)$.
    *   **FM:** Frequency is proportional to $m(t)$, which means phase is proportional to $\int m(t) dt$.

    *   If $m(t)$ is a constant, then PM phase change is constant, but FM frequency deviation is constant.
    *   If $m(t)$ is a sinusoid, PM output is $\cos(2\pi f_c t + k_p A_m \cos(2\pi f_m t))$.
    *   If $m(t)$ is a sinusoid, FM output is $\cos(2\pi f_c t + \frac{k_f A_m}{2\pi f_m} \sin(2\pi f_m t))$.
    *   This shows that for a sinusoidal message, PM resembles FM with a $\sin$ term in the phase, while FM resembles PM with a $\cos$ term in the phase.

### Time-Domain and Frequency-Domain Characteristics:

*   The spectral characteristics of PM are similar to FM, especially for sinusoidal modulation.
*   The bandwidth of a PM signal is also approximated by Carson's Rule: $BW \approx 2(Δf + f_m)$, where $Δf$ is the maximum frequency deviation, which is related to the rate of change of phase. For a sinusoidal message, $Δf = k_p A_m f_m$.
*   Therefore, $BW \approx 2(k_p A_m f_m + f_m) = 2f_m(k_p A_m + 1)$.

### Advantages and Disadvantages of PM:

*   **Advantages:**
    *   **Good Noise Immunity:** Similar to FM, PM is relatively immune to amplitude noise.
    *   **Constant Amplitude:** Simplifies power amplifier design.

*   **Disadvantages:**
    *   **More Complex Transmitter and Receiver:** Similar to FM.
    *   **Bandwidth Requirement:** Can be wider than AM.

### Demodulation of PM:

*   PM signals can be demodulated using circuits similar to FM demodulators (e.g., PLL, discriminators), but they are designed to respond to phase variations.
*   A differentiator can be used to convert a PM signal into an FM signal, which can then be demodulated by an FM demodulator.

### Practical Considerations (Referencing Textbooks):

*   **Principles of Communication Systems Simulation with Wireless Applications:** This book is valuable for simulating PM systems and analyzing their behavior, especially in conjunction with other modulation schemes.
*   **Communication Systems by Simon Haykin:** Provides a thorough analysis of PM, its mathematical formulations, and its relationship with FM.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi:** Covers PM in detail, including its generation methods and how it relates to FM.
*   **Introduction to Analog and Digital Communication by Simon Haykin:** Offers a clear explanation of PM principles.
*   **Electronic communication systems by George Kennedy:** Discusses practical aspects of PM circuit design.

---

## Course Outcomes Alignment:

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   This module provides the foundational understanding of analog waveforms (carrier and message) and how they are manipulated. While the module focuses on analog modulation, the principles of signal generation and manipulation are directly applicable to setting up prototype circuits for waveform coding and digital modulation. For instance, understanding sinusoidal signal generation is crucial for both AM and digital modulations like PSK.

*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   The theoretical understanding of signal-to-noise ratio (SNR), bandwidth, and the spectral properties of analog modulation schemes (like AM and FM) directly informs the simulation of digital systems. For example, understanding how noise impacts analog signals helps in designing simulations that model noise effects on digital signals. The concepts of bandwidth efficiency learned here are critical for comparing digital modulation schemes.

*   **CO3: Develop hands-on skills to emulate a communication system with software-defined radio working in a team.**
    *   The RTL-SDR mentioned in the textbooks is a prime example of software-defined radio. This module's theoretical underpinnings are essential for anyone using an SDR to capture, analyze, and potentially transmit analog signals. Understanding AM and FM frequencies, bandwidth, and modulation types is crucial for correctly configuring an SDR to interact with real-world communication signals. For example, tuning into an FM radio station using an RTL-SDR requires knowledge of FM principles.

---

## Important Points to Remember:

*   **Modulation is about shifting information to a higher frequency band.**
*   **AM:** Amplitude varies. Simple but inefficient, susceptible to noise. Bandwidth = $2f_{max}$.
*   **FM:** Frequency varies. Good noise immunity, but wider bandwidth. Bandwidth $\approx 2(Δf + f_{max})$.
*   **PM:** Phase varies. Similar characteristics to FM, often used in digital modulation.
*   **Modulation Index:** $μ$ for AM, $β$ for FM. These determine the extent of modulation and influence bandwidth and performance.
*   **Bandwidth:** A critical parameter for channel capacity and interference.
*   **Noise:** Amplitude noise primarily affects AM. Frequency and phase noise affect FM/PM.
*   **Power Efficiency:** DSB-SC and SSB are more power-efficient than standard AM. FM and PM transmit constant amplitude signals.

---

## Practice Questions and Exercises:

**Question 1:**
A sinusoidal message signal $m(t) = 5 \cos(2\pi \times 1000t)$ is used to modulate a carrier signal $c(t) = 10 \cos(2\pi \times 100,000t)$. The modulation is Amplitude Modulation (AM).

*   a) Calculate the modulation index.
*   b) Write the equation for the resulting AM signal.
*   c) Determine the frequencies of the components present in the AM signal.
*   d) What is the bandwidth of this AM signal?

**Answer 1:**
*   a) Carrier amplitude ($A_c$) = 10V, Message amplitude ($A_m$) = 5V.
    Modulation Index ($μ$) = $A_m / A_c = 5 / 10 = 0.5$.
*   b) AM signal equation: $s(t) = [A_c + m(t)] \cos(2\pi f_c t)$
    $s(t) = [10 + 5 \cos(2\pi \times 1000t)] \cos(2\pi \times 100,000t)$
*   c) The components are the carrier, upper sideband, and lower sideband.
    Carrier frequency ($f_c$) = 100 kHz.
    Message frequency ($f_m$) = 1 kHz.
    Lower Sideband frequency = $f_c - f_m = 100 kHz - 1 kHz = 99 kHz$.
    Upper Sideband frequency = $f_c + f_m = 100 kHz + 1 kHz = 101 kHz$.
*   d) Bandwidth = $2 \times f_m = 2 \times 1 kHz = 2 kHz$.

---

**Question 2:**
For an FM system, the carrier frequency is $f_c = 100$ MHz. The message signal is a sinusoid with a maximum frequency of $f_m = 5$ kHz. The frequency sensitivity of the modulator is $k_f = 25$ kHz/V, and the message signal amplitude is $A_m = 2$ V.

*   a) Calculate the frequency deviation.
*   b) Calculate the modulation index ($β$).
*   c) Estimate the bandwidth of the FM signal using Carson's Rule.

**Answer 2:**
*   a) Frequency Deviation ($Δf$) = $k_f \times A_m = 25$ kHz/V $\times 2$ V = 50 kHz.
*   b) Modulation Index ($β$) = $Δf / f_m = 50$ kHz / 5 kHz = 10.
*   c) Bandwidth (BW) $\approx 2(Δf + f_m) = 2(50 \text{ kHz} + 5 \text{ kHz}) = 2(55 \text{ kHz}) = 110$ kHz.

---

**Question 3:**
Explain why FM is generally considered superior to AM in terms of noise immunity.

**Answer 3:**
FM is superior to AM in noise immunity because the information in FM is encoded in the frequency variations of the carrier, while the amplitude remains constant. Noise often manifests as amplitude fluctuations. Therefore, an FM receiver can effectively filter out these amplitude variations using a limiter or squelcher before demodulating the signal, preserving the original information. In contrast, AM encodes information in amplitude, making it directly susceptible to amplitude noise, which corrupts the demodulated signal.

---

**Question 4:**
How does a phase modulation (PM) signal differ from a frequency modulation (FM) signal when the message signal is a constant DC voltage?

**Answer 4:**
*   **PM:** If $m(t) = C$ (a constant DC voltage), the phase of a PM signal is $\theta(t) = k_p C$. This results in a constant phase shift applied to the carrier. The output is $A_c \cos(2\pi f_c t + k_p C)$. The carrier frequency remains unchanged, but its phase is shifted by a constant amount.
*   **FM:** If $m(t) = C$ (a constant DC voltage), the instantaneous frequency of an FM signal is $f_i(t) = f_c + k_f C$. This results in a constant frequency deviation from the carrier frequency $f_c$. The output is $A_c \cos(2\pi (f_c + k_f C)t)$. The carrier frequency is shifted by a constant amount.

In essence, a DC message causes a constant phase shift in PM and a constant frequency shift in FM.

---

This comprehensive set of notes covers the fundamentals of AM, FM, and PM, aligning with the learning outcomes and referencing the provided textbooks. The practical questions and answers are designed to test understanding of the core concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
