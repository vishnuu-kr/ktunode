---
title: "FM reception or FM transmission using SDR"
subject: "COMMUNICATION LAB I"
module: "Module 4: Familiarization with Software Defined Radio (Hardware and Control Software)"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecb4"
status: "completed"
scrapedAt: "2026-05-23T17:54:22.681Z"
---
# COMMUNICATION LAB I - Module 4: Familiarization with Software Defined Radio (Hardware and Control Software)

## Topic: FM Reception or FM Transmission using SDR

### Introduction

This module introduces you to the exciting world of Software Defined Radio (SDR). We will explore the hardware components of an SDR system and the control software that brings them to life. Specifically, we will focus on practical applications of SDR by implementing FM reception and/or FM transmission. This will provide hands-on experience, aligning with Course Outcome CO3: "Develop hands-on skills to emulate a communication system with software-design-radio working in a team." (Knowledge Level: K5).

### Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **LO1: Identify and describe the basic hardware components of a typical SDR system.**
*   **LO2: Explain the fundamental principles of FM modulation and demodulation.**
*   **LO3: Operate SDR control software to tune into FM radio stations.**
*   **LO4: (If applicable) Understand the principles of FM transmission using an SDR and the necessary precautions.**
*   **LO5: Analyze the received FM signal characteristics using SDR software.**

---

### 1. Software Defined Radio (SDR) Fundamentals

#### 1.1 What is Software Defined Radio?

*   **Definition:** Software Defined Radio (SDR) is a radio communication system where components that have been traditionally implemented in hardware (like mixers, filters, amplifiers, modulators/demodulators, detectors, etc.) are instead implemented using **software** on a personal computer or embedded system.
*   **Key Idea:** The flexibility of software allows for rapid adaptation to new standards, protocols, and applications without requiring hardware modifications.

#### 1.2 SDR Architecture

*   **Antenna:** Captures radio waves.
*   **RF Front-End:**
    *   **Low-Noise Amplifier (LNA):** Amplifies weak incoming radio signals while adding minimal noise. (Ref: Laufer, 2nd Ed., Ch. 3)
    *   **Band-Pass Filter (BPF):** Selects the desired frequency band and rejects unwanted out-of-band signals.
    *   **Mixer:** Shifts the received RF signal to an intermediate frequency (IF) or directly to baseband.
*   **Analog-to-Digital Converter (ADC):** Converts the analog radio signal into a digital stream of data. This is a crucial component where the analog signal enters the digital domain for software processing.
*   **Digital Signal Processor (DSP) / Computer:** Performs the actual radio functions (demodulation, filtering, decoding, etc.) through software algorithms.
*   **Digital-to-Analog Converter (DAC):** (For transmission) Converts processed digital data back into an analog signal for transmission.
*   **RF Front-End (Transmission):** Amplifies the transmitted signal and filters it before sending it out via the antenna.

#### 1.3 Common SDR Hardware (Example: RTL-SDR)

*   **RTL-SDR Dongle:** A highly popular and affordable SDR receiver based on the RTL2832U chip.
    *   **Tuner Chip (e.g., R820T/R820T2):** Handles the RF tuning and initial amplification.
    *   **USB Interface:** Connects to a computer for data transfer and control.
    *   **Antenna Input:** Typically SMA connector.
*   **(Ref: Laufer, 2nd Ed., Ch. 1-3)** Provides a comprehensive overview of the RTL-SDR and its capabilities.

#### 1.4 SDR Control Software

*   **Purpose:** To interface with the SDR hardware, control its parameters (frequency, gain, sampling rate), and process the received digital data.
*   **Popular Options:**
    *   **SDR# (SDR Sharp):** A user-friendly, Windows-based SDR software.
    *   **Gqrx:** A popular open-source SDR receiver for Linux and macOS.
    *   **HDSDR:** Another powerful Windows-based SDR application.
    *   **GNU Radio:** A powerful, flexible framework for building signal processing applications, often used with SDR hardware. It uses a graphical block-based approach to design signal processing chains. (Ref: Mathuranathan, 1st Ed., Ch. 3 - Digital Modulations with Python can be extended to understand signal processing blocks conceptually).
*   **Key Functions:**
    *   **Tuning:** Selecting the desired operating frequency.
    *   **Gain Control:** Adjusting the amplifier's amplification level.
    *   **Sample Rate:** Setting the rate at which the ADC samples the signal.
    *   **Demodulation Modes:** Selecting the appropriate demodulation technique (AM, FM, SSB, etc.).
    *   **Waterfall Display:** Visualizes the radio spectrum over time, showing signal strength at different frequencies.
    *   **Spectrum Analyzer:** Displays the signal strength across a range of frequencies.

---

### 2. Frequency Modulation (FM)

#### 2.1 Principles of FM Modulation

*   **Definition:** In Frequency Modulation (FM), the **frequency** of the carrier wave is varied in proportion to the instantaneous amplitude of the message (modulating) signal. The amplitude of the carrier remains constant.
*   **Message Signal:** $m(t)$
*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
*   **Instantaneous Frequency:** $f_i(t) = f_c + k_f m(t)$
    *   $f_c$: Carrier frequency.
    *   $k_f$: Frequency sensitivity of the modulator (Hz/Volt).
*   **Modulated Signal:** $s(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_{0}^{t} m(\tau) d\tau)$
    *   **(Ref: Lathi & Ding, 5th Ed., Ch. 5; Haykin & Moher, 5th Ed., Ch. 4)** These texts provide detailed mathematical derivations of FM signals.

#### 2.2 FM Bandwidth

*   **Carson's Rule:** A useful approximation for the bandwidth of an FM signal.
    *   $BW_{FM} \approx 2(f_m + \Delta f)$
    *   $f_m$: Maximum frequency of the modulating signal.
    *   $\Delta f$: Maximum frequency deviation (peak frequency difference between $f_i(t)$ and $f_c$).
*   **Example:** For standard FM broadcasting (88-108 MHz), the audio bandwidth is typically up to 15 kHz, and the maximum frequency deviation is 75 kHz.
    *   $BW_{FM} \approx 2(15 \text{ kHz} + 75 \text{ kHz}) = 2(90 \text{ kHz}) = 180 \text{ kHz}$. This is why FM broadcast channels are spaced 200 kHz apart.

#### 2.3 FM Demodulation

*   **Goal:** To recover the original message signal $m(t)$ from the FM signal.
*   **Methods:**
    *   **Slope Detector:** A simple but non-linear method using a tuned circuit.
    *   **Foster-Seeley Discriminator:** A more linear and widely used circuit.
    *   **Ratio Detector:** Similar to Foster-Seeley but with improved noise immunity.
    *   **Phase-Locked Loop (PLL):** A modern and effective demodulation technique.
*   **SDR Demodulation:** In SDR, FM demodulation is performed digitally using algorithms within the control software. The software effectively implements a virtual discriminator or PLL to extract the audio signal.
    *   **(Ref: Tranter, Shanmugan, Rappaport, Kosbar, 2nd Ed., Ch. 7)** Discusses various demodulation techniques, which are the underlying principles for SDR implementations.

---

### 3. Practical FM Reception with SDR

#### 3.1 Hardware Setup

1.  **Connect the SDR Dongle:** Plug the RTL-SDR dongle into a USB port on your computer.
2.  **Connect the Antenna:** Attach an appropriate antenna to the SMA connector on the SDR dongle. For FM reception, a simple whip antenna or even a telescopic antenna is usually sufficient.

#### 3.2 Software Setup and Operation (Using SDR# as an Example)

1.  **Install SDR Software:** Download and install your chosen SDR software (e.g., SDR#).
2.  **Select SDR Device:**
    *   Open SDR#.
    *   In the "Source" dropdown menu, select your SDR device (e.g., "RTL-SDR (USB)").
3.  **Configure Device:**
    *   Click the "Configure" button next to the source.
    *   **Sample Rate:** Choose a suitable sample rate. For FM reception, a sample rate of 1-2 MSPS (Mega Samples Per Second) is generally good.
    *   **Frequency Correction (ppm):** Enter the ppm (parts per million) correction value for your dongle if known. This helps to compensate for small frequency inaccuracies in the hardware. If unknown, you can often find it in online forums or by tuning to a known strong signal and adjusting until it's centered.
    *   **Gain:** Adjust the gain. Start with "Auto" or a moderate setting and adjust as needed. Too little gain will result in weak signals; too much gain can cause overloading and distortion.
4.  **Tune to an FM Station:**
    *   In the SDR# interface, you'll see controls for the "Frequency".
    *   **Center Frequency:** Enter the frequency of an FM radio station you want to listen to (e.g., 98.7 MHz for a local FM station).
    *   **Bandwidth:** Set the bandwidth to around 200 kHz for standard FM.
    *   **Demodulation Mode:** Select "WFM" (Wideband FM) from the "Audio" dropdown menu.
5.  **Start Reception:**
    *   Click the "Play" button (often a green triangle).
    *   You should now see the spectrum of the radio environment in the "Spectrum" and "Waterfall" windows.
    *   Listen for audio through your computer's speakers.
6.  **Adjusting Parameters:**
    *   **Frequency:** Pan left/right or use the frequency controls to tune to different stations.
    *   **Gain:** If you can't hear anything or the audio is distorted, adjust the gain.
    *   **Bandwidth:** Ensure the bandwidth is wide enough to encompass the FM signal.

#### 3.3 Analyzing the Received Signal

*   **Spectrum Analyzer:** Observe the shape of the FM signal in the spectrum window. It should appear as a relatively wide peak.
*   **Waterfall Display:** Watch how signals appear and disappear in the waterfall. Strong stations will be visible as persistent horizontal lines.
*   **Audio Quality:** Assess the clarity and strength of the received audio.

**(Ref: Laufer, 2nd Ed., Ch. 4-6)** This section of Laufer's book is highly practical and guides you through using the RTL-SDR with various software, including tuning and demodulating different signal types.

---

### 4. Practical FM Transmission with SDR (Advanced/Optional)

**Important Note:** FM transmission requires careful consideration of regulations, power levels, and appropriate hardware. Always operate within legal limits and consult relevant authorities. This section provides a conceptual overview.

#### 4.1 Principles of FM Transmission

*   The process is the reverse of reception. A message signal (e.g., audio from a microphone) is used to modulate the frequency of a carrier wave.
*   The modulated digital signal is then converted to analog (DAC) and amplified (power amplifier) before being transmitted by the antenna.
*   SDR software can generate the modulated waveform, and compatible SDR hardware (often more advanced than basic RTL-SDR receivers) can transmit.

#### 4.2 Software and Hardware for Transmission

*   **Transmitting SDR Hardware:** Requires SDRs with transmitting capabilities (e.g., HackRF One, LimeSDR, USRP). Basic RTL-SDR dongles are typically *receive-only*.
*   **Transmission Software:**
    *   **GNU Radio:** Highly capable for designing and executing complex transmission waveforms.
    *   **SDR# (with transmit support):** Some versions or plugins might offer limited transmission capabilities.
    *   **Other dedicated SDR transmission software.**

#### 4.3 Considerations for Transmission

*   **Frequency Allocation:** Transmit only on authorized frequencies.
*   **Power Limits:** Adhere to legal transmission power limits to avoid interference.
*   **Antenna Matching:** Use an appropriate antenna that is matched to the transmission frequency.
*   **Interference:** Be mindful of potential interference with other radio services.

**(Ref: Laufer, 2nd Ed., Ch. 7)** Discusses more advanced SDR applications, which might touch upon transmission concepts.

---

### 5. Important Points to Remember

*   **SDR is Software-Centric:** The core signal processing is done by software, offering immense flexibility.
*   **Hardware Components:** Understand the role of the antenna, RF front-end, and ADC/DAC.
*   **FM Basics:** Frequency is varied by the message signal, while amplitude remains constant.
*   **Carson's Rule:** Useful for estimating FM bandwidth.
*   **SDR Software is Your Interface:** Learn to use the tuning, gain, sample rate, and demodulation controls effectively.
*   **Gain Management:** Crucial for clear reception without distortion.
*   **Transmission Regulations:** Always adhere to legal requirements when transmitting.

---

### 6. Practice Questions and Exercises

**Question 1:** Define Software Defined Radio (SDR) and explain its primary advantage over traditional hardware-based radios.

**Answer:** Software Defined Radio (SDR) is a radio communication system where radio components traditionally implemented in hardware (like filters, mixers, modulators, demodulators) are instead implemented using software. Its primary advantage is **flexibility**: it allows for rapid adaptation to new standards, protocols, and applications without hardware changes, enabling easy updates and experimentation.

**Question 2:** Briefly describe the function of the following components in an SDR system:
    a) LNA
    b) ADC
    c) Sample Rate

**Answer:**
    a) **LNA (Low-Noise Amplifier):** Amplifies weak incoming radio frequency (RF) signals while adding minimal noise to ensure the signal-to-noise ratio is preserved.
    b) **ADC (Analog-to-Digital Converter):** Converts the analog radio signal, after initial RF processing, into a digital stream of data that can be processed by the computer or digital signal processor.
    c) **Sample Rate:** The rate at which the ADC samples the analog signal. A higher sample rate captures a wider range of frequencies but requires more processing power and bandwidth. For FM reception, a sample rate of 1-2 MSPS is often used.

**Question 3:** In FM modulation, what parameter of the carrier wave is changed by the modulating signal, and what parameter remains constant?

**Answer:** In FM modulation, the **frequency** of the carrier wave is changed (varied) by the modulating signal, while the **amplitude** of the carrier wave remains constant.

**Question 4:** What is Carson's Rule, and what are the typical values for $f_m$ and $\Delta f$ for standard FM broadcasting that would lead to a bandwidth of approximately 180 kHz?

**Answer:** Carson's Rule provides an approximation for the bandwidth of an FM signal: $BW_{FM} \approx 2(f_m + \Delta f)$. For standard FM broadcasting, a maximum modulating signal frequency ($f_m$) of 15 kHz and a maximum frequency deviation ($\Delta f$) of 75 kHz would result in a bandwidth of $BW_{FM} \approx 2(15 \text{ kHz} + 75 \text{ kHz}) = 180 \text{ kHz}$.

**Question 5 (Practical Exercise):** Using SDR# (or your chosen SDR software), tune to an FM radio station in your local area.
    a) What is the center frequency of the station?
    b) What is the approximate bandwidth observed in the spectrum analyzer?
    c) What adjustments did you make to the gain and why?

**Answer (Example):**
    a) The center frequency of the station is 98.7 MHz.
    b) The approximate bandwidth observed in the spectrum analyzer is around 180-200 kHz.
    c) I initially set the gain to "Auto". When the audio was too quiet, I increased the gain slightly to improve the listening volume. If the audio started to sound distorted, I would have reduced the gain to avoid overloading the receiver.

---

This module provides a foundational understanding of SDR and its application in FM communication. By experimenting with the software and hardware, you will gain practical skills that are highly transferable to various areas of communication engineering. Remember to consult the provided textbooks for deeper theoretical insights.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
