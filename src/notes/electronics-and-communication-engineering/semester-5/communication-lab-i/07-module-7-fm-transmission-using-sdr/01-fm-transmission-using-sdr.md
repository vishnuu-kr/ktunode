---
title: "FM transmission using SDR"
subject: "COMMUNICATION LAB I"
module: "Module 7: FM transmission using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecc2"
status: "completed"
scrapedAt: "2026-05-23T17:54:30.386Z"
---
## COMMUNICATION LAB I - Module 7: FM Transmission using SDR

### Topic: FM Transmission using SDR

**Learning Outcomes:**

*   Understand the principles of Frequency Modulation (FM).
*   Configure and utilize Software Defined Radio (SDR) hardware for FM transmission.
*   Generate and transmit an FM signal from a baseband audio source using SDR.
*   Observe and analyze the transmitted FM signal using an SDR receiver.
*   Understand the practical aspects of FM transmission using SDR, including frequency allocation and signal bandwidth.

---

### 1. Introduction to Frequency Modulation (FM)

**Key Concepts & Definitions:**

*   **Modulation:** The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted.
*   **Frequency Modulation (FM):** A modulation technique where the instantaneous frequency of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal.
    *   **Carrier Signal ($c(t)$):** A high-frequency sinusoidal signal used to carry the information. Represented as $c(t) = A_c \cos(2\pi f_c t)$, where $A_c$ is the amplitude and $f_c$ is the carrier frequency.
    *   **Modulating Signal ($m(t)$):** The information-bearing signal, typically an audio signal.
    *   **Instantaneous Frequency ($f_i(t)$):** The frequency of the carrier signal at any given instant in time.
    *   **Frequency Deviation ($\Delta f$):** The maximum change in the instantaneous frequency from the carrier frequency. It is directly proportional to the amplitude of the modulating signal.
    *   **Modulation Index ($\beta$):** A dimensionless quantity that represents the extent of frequency variation. It is defined as $\beta = \frac{\Delta f}{f_m}$, where $f_m$ is the maximum frequency of the modulating signal.
    *   **FM Signal Equation:** The FM signal can be represented as:
        $s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau)$
        where $k_f$ is the frequency sensitivity of the modulator (Hz/Volt).

**How FM Works:**

In FM, the amplitude of the carrier signal remains constant. Instead, the frequency of the carrier signal deviates from its center frequency ($f_c$) based on the amplitude of the modulating signal ($m(t)$).

*   When $m(t)$ is positive, the carrier frequency increases.
*   When $m(t)$ is negative, the carrier frequency decreases.
*   The magnitude of the frequency deviation is directly proportional to the amplitude of $m(t)$.

**Advantages of FM:**

*   **Superior noise immunity:** FM is less susceptible to amplitude-based noise compared to AM.
*   **Higher fidelity:** FM systems can transmit wider bandwidths, allowing for higher quality audio reproduction.
*   **Constant amplitude:** This simplifies power amplification.

**Disadvantages of FM:**

*   **Wider bandwidth:** FM signals typically require more bandwidth than AM signals for equivalent information.
*   **More complex circuitry:** FM modulators and demodulators are generally more complex than their AM counterparts.

**Textbook References:**

*   **Haykin & Moher (5th Ed.):** Chapters on Angle Modulation, specifically FM. Discusses the mathematical formulation and spectral characteristics of FM.
*   **Lathi & Ding (5th Ed.):** Similar coverage of angle modulation, including FM.
*   **Kennedy (6th Ed.):** Provides a foundational understanding of modulation techniques, including FM, in the context of electronic communication systems.

---

### 2. Software Defined Radio (SDR) for FM Transmission

**Key Concepts & Definitions:**

*   **Software Defined Radio (SDR):** A radio communication system where components that have been traditionally implemented in hardware (e.g., mixers, filters, modulators, demodulators, detectors, etc.) are instead implemented using software on a personal computer or embedded system.
*   **RTL-SDR:** A very popular and affordable SDR receiver dongle based on Realtek RTL2832U chipset, originally designed for DVB-T television reception but repurposed for SDR due to its ability to tune a wide range of frequencies and its availability of raw I/Q data.
*   **I/Q Data (In-phase and Quadrature):** A way of representing a radio signal by splitting it into two components: the in-phase component and the quadrature component. These are typically cosine and sine waves, 90 degrees out of phase with each other. I/Q data is fundamental for digital modulation and demodulation in SDR.
*   **Baseband:** The signal before modulation, typically audio or digital data.
*   **Transmitter Chain (Simplified for SDR):**
    1.  **Audio Input:** Your computer or audio source provides the baseband modulating signal.
    2.  **Digitalization (if needed):** Analog audio is converted to digital format.
    3.  **Digital FM Modulation:** Software algorithms perform the FM modulation process on the digital audio, generating complex baseband I/Q data representing the FM signal.
    4.  **Digital-to-Analog Conversion (DAC):** The digital I/Q data is converted back to analog signals.
    5.  **Upconversion/Mixing:** The analog I/Q signals are mixed with a high-frequency carrier oscillator to shift the signal to the desired transmission frequency.
    6.  **Filtering:** Band-pass filters are used to remove unwanted out-of-band signals and noise.
    7.  **Power Amplification:** The signal is amplified to a sufficient power level for transmission.
    8.  **Antenna:** Radiates the RF signal into the air.

**SDR for FM Transmission - Practical Aspects:**

While RTL-SDR dongles are primarily receivers, specialized SDR transceivers (like HackRF One, USRPs, LimeSDR) are designed for both transmission and reception. For this lab, we'll focus on using an SDR transmitter.

**Textbook References:**

*   **The Hobbyist's Guide to the RTL-SDR:** This book is highly relevant as it covers the basics of SDR, including how to use SDR software to generate signals. While it might focus more on reception, the principles of digital signal processing for modulation are transferable.
*   **Digital Modulations using Python:** This book is excellent for understanding how digital modulation schemes, including FM (or GFSK/FM variants), can be implemented in software using Python. It would be crucial for understanding the underlying signal generation process.

---

### 3. Generating and Transmitting FM Signals with SDR

**Key Concepts & Definitions:**

*   **SDR Software:** Applications that interface with the SDR hardware and provide a user interface for signal generation, tuning, and analysis. Popular examples include GNU Radio, SDR# (SDRSharp) with appropriate plugins, and custom Python scripts using SDR libraries (e.g., `pyrtlsdr`, `pysdr`).
*   **GNU Radio:** An open-source software development toolkit that enables users to build radio systems using signal processing blocks. It's a powerful tool for implementing custom modulation schemes and workflows.
*   **Frequency Allocation:** Choosing an appropriate, unlicensed frequency band for transmission to avoid interference and legal issues. In many regions, ISM (Industrial, Scientific, and Medical) bands or specific low-power radio bands are available.
*   **Bandwidth:** The range of frequencies occupied by the FM signal. The Carson's Rule is often used to estimate the bandwidth of an FM signal:
    $B_{FM} \approx 2(\Delta f + f_{m,max})$
    where $\Delta f$ is the frequency deviation and $f_{m,max}$ is the maximum frequency of the modulating signal.

**Steps for FM Transmission using SDR (Conceptual):**

1.  **Select and Configure SDR Transmitter Hardware:** Choose an SDR that supports transmission (e.g., HackRF One). Connect it to your computer.
2.  **Choose Transmission Frequency:** Identify an available frequency band. For testing, a frequency like 100 MHz or a specific ISM band (e.g., 433 MHz) might be suitable, but always check local regulations.
3.  **Prepare Audio Source:** Have an audio file or a live microphone input ready.
4.  **Configure SDR Software:**
    *   **Set Transmission Frequency:** Input the chosen carrier frequency ($f_c$).
    *   **Set Sample Rate:** This determines the processing speed and the range of frequencies the SDR can handle. A higher sample rate generally allows for wider bandwidth signals.
    *   **Implement FM Modulation:**
        *   **Using GNU Radio:** Create a flowgraph. Add an "Audio Source" or "Wav File Source" block. Add an "FM Modulator" block. Configure its parameters (e.g., frequency deviation, sample rate). Connect this to an "SDR Sink" block (e.g., HackRF Sink).
        *   **Using Python:** Write a script that reads audio data, applies an FM modulation algorithm (as described in Viswanathan's book), and then sends the modulated I/Q data to the SDR transmitter using an appropriate library.
    *   **Set Transmitter Gain/Power:** Adjust the output power to a safe and appropriate level.
5.  **Connect Antenna:** Attach a suitable antenna to the SDR transmitter.
6.  **Start Transmission:** Execute the SDR software or script.

**Example Scenario (using conceptual GNU Radio blocks):**

*   **Source:** `wav_file_source` (playing a `.wav` audio file)
*   **Modulation:** `freq_mod` (set FM deviation and bandwidth)
*   **Output:** `hackrf_sink` (set frequency, sample rate, gain, and transmit mode)

**Course Outcome Alignment:**

*   **CO3 (K5):** This entire process directly involves developing hands-on skills to emulate a communication system with software-defined radio. Building the flowgraph or writing the script to transmit an FM signal is a direct application.
*   **CO1 (K3):** Setting up the SDR hardware and configuring the software to modulate an audio signal into an FM waveform relates to setting up prototype circuits for digital modulation techniques (even though it's software-based emulation, the principle of generating a modulated signal is the same).

---

### 4. Observing and Analyzing the Transmitted FM Signal

**Key Concepts & Definitions:**

*   **SDR Receiver:** Another SDR dongle (e.g., RTL-SDR) or the same SDR if it's a transceiver, used to capture and analyze the transmitted signal.
*   **Spectrum Analyzer:** A tool (often integrated into SDR software) that displays the power of a signal across a range of frequencies. This is crucial for visualizing the FM signal's spectrum.
*   **Waterfall Display:** A spectrum analyzer display that shows how the spectrum changes over time. This helps in observing the presence and stability of the transmitted signal.
*   **Demodulation:** The process of extracting the original modulating signal from the received modulated carrier wave.

**Steps for Observing the Transmitted FM Signal:**

1.  **Set up SDR Receiver:** Connect an RTL-SDR dongle (or similar receiver) to a separate instance of your SDR software (e.g., SDR#, GQRX, GNU Radio).
2.  **Tune to Transmission Frequency:** Set the receiver's center frequency to the frequency you are transmitting on.
3.  **Enable FM Demodulation:** In the SDR receiver software, select the "FM" demodulation mode.
4.  **Adjust Receiver Settings:**
    *   **Tuning:** Fine-tune the receiver frequency to accurately lock onto your transmitted signal.
    *   **Gain:** Adjust the receiver's RF gain for optimal signal reception without clipping.
    *   **Bandwidth:** Set the receiver's bandwidth to match or be slightly wider than the expected bandwidth of your transmitted FM signal (e.g., 100-200 kHz for standard FM broadcasting, or estimated by Carson's Rule for your specific parameters).
5.  **Observe the Spectrum:**
    *   Look for a clear peak at your transmission frequency on the spectrum analyzer.
    *   Observe the shape of the spectrum. A properly modulated FM signal will have a main lobe and side lobes.
    *   Verify that the bandwidth occupied by the signal is reasonable.
6.  **Listen to the Audio:** You should hear the transmitted audio coming out of the receiver's speakers or audio output.
7.  **Analyze Signal Quality:** Assess the clarity and absence of distortion or excessive noise in the received audio.

**Example Scenario:**

*   **SDR Receiver Software:** GQRX or SDR#
*   **Tuning:** Set center frequency to 100.1 MHz.
*   **Demodulation:** Select FM.
*   **Bandwidth:** Set to 150 kHz.
*   **Observation:** You should see a prominent peak at 100.1 MHz, with side lobes spreading out. You should also hear the audio.

**Course Outcome Alignment:**

*   **CO3 (K5):** Using an SDR receiver to tune into and analyze the transmitted signal directly contributes to the hands-on skills required to emulate a communication system.
*   **CO1 (K3):** Observing the spectrum and demodulated output of the FM signal helps in understanding and verifying the waveform coding and digital modulation techniques implemented.

---

### 5. Practical Considerations and Troubleshooting

**Key Points to Remember:**

*   **Legal Compliance:** Always transmit on frequencies that are legally permitted in your region and adhere to power limitations. Unlicensed transmission can lead to fines and equipment confiscation.
*   **Antenna Choice:** The type and placement of the antenna significantly impact transmission and reception range and quality.
*   **Gain Settings:** Incorrect gain settings on both transmitter and receiver can lead to distorted signals, low reception, or damage to the SDR.
*   **Sample Rate and Bandwidth:** These are interconnected. A higher sample rate allows for wider bandwidth processing, which is necessary for FM signals with larger deviations or higher modulating frequencies.
*   **Environmental Factors:** Obstacles, interference from other radio sources, and multipath propagation can affect signal quality.

**Common Issues and Troubleshooting:**

*   **No Transmission:**
    *   Check SDR transmitter connections.
    *   Ensure SDR is enabled for transmission in the software.
    *   Verify correct frequency and sample rate settings.
    *   Check gain settings (too low might not transmit).
    *   Ensure the correct driver is installed and recognized by the OS.
*   **Weak or Distorted Reception:**
    *   **Transmitter side:** Check transmitter gain and antenna connection.
    *   **Receiver side:** Adjust receiver gain, fine-tune the frequency, and adjust the receiver bandwidth.
    *   **Antenna alignment:** Ensure transmitting and receiving antennas are reasonably aligned and not obstructed.
    *   **Distance:** Transmitting and receiving distance might be too large for the power output and antenna used.
*   **No Audio or Garbled Audio:**
    *   Verify FM demodulation is active on the receiver.
    *   Check receiver bandwidth – if too narrow, it will distort audio.
    *   Check for interference from strong nearby signals.
    *   Ensure the FM modulator parameters (deviation) are appropriate for the receiver's bandwidth.

**Textbook References:**

*   **The Hobbyist's Guide to the RTL-SDR:** Likely contains sections on troubleshooting common SDR issues.
*   **Digital Modulations using Python:** Might offer insights into parameter tuning for optimal modulation and demodulation.

---

### Practice Questions and Answers

**Question 1:**

What is the primary difference between Amplitude Modulation (AM) and Frequency Modulation (FM) in terms of how information is encoded?

**Answer 1:**

In AM, the amplitude of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal, while the frequency remains constant. In FM, the instantaneous frequency of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal, while the amplitude remains constant.

---

**Question 2:**

Define the modulation index ($\beta$) for an FM signal and explain its significance.

**Answer 2:**

The modulation index ($\beta$) for an FM signal is defined as the ratio of the frequency deviation ($\Delta f$) to the maximum frequency of the modulating signal ($f_{m,max}$): $\beta = \frac{\Delta f}{f_{m,max}}$.
The modulation index is significant because it characterizes the bandwidth requirements and the nature of the FM signal.
*   For *narrowband FM (NBFM)*, $\beta \ll 1$ (typically $\beta \le 0.3$). The spectrum is similar to AM, with a dominant carrier and two sidebands.
*   For *wideband FM (WBFM)*, $\beta \gg 1$. The spectrum consists of a large number of sidebands, and the bandwidth is significantly wider than NBFM.

---

**Question 3:**

You are using an SDR to transmit an FM signal with a carrier frequency of 433.92 MHz. Your modulating audio signal has a maximum frequency of 5 kHz. If you set the FM modulator for a frequency deviation of 10 kHz, what is the approximate bandwidth of your transmitted FM signal using Carson's Rule?

**Answer 3:**

Using Carson's Rule, the approximate bandwidth ($B_{FM}$) of an FM signal is given by:
$B_{FM} \approx 2(\Delta f + f_{m,max})$

Given:
*   Frequency Deviation ($\Delta f$) = 10 kHz
*   Maximum Modulating Frequency ($f_{m,max}$) = 5 kHz

$B_{FM} \approx 2(10 \text{ kHz} + 5 \text{ kHz})$
$B_{FM} \approx 2(15 \text{ kHz})$
$B_{FM} \approx 30 \text{ kHz}$

So, the approximate bandwidth of the transmitted FM signal is 30 kHz.

---

**Question 4:**

List at least three essential components or steps in the SDR FM transmission process.

**Answer 4:**

1.  **SDR Transmitter Hardware:** The physical SDR device capable of transmitting.
2.  **SDR Software:** Application used to configure the SDR and perform modulation (e.g., GNU Radio, custom Python script).
3.  **Modulating Signal Source:** Audio input (microphone or file).
4.  **FM Modulation Algorithm:** Software implementation of the FM modulation process.
5.  **Transmission Frequency and Sample Rate Configuration:** Setting the carrier frequency and sample rate within the SDR software.
6.  **Antenna:** For radiating the signal.

---

**Question 5:**

When using an SDR receiver to observe your transmitted FM signal, what parameter should you adjust in the receiver software to match the characteristics of your FM signal and ensure clear audio reception?

**Answer 5:**

You should adjust the **bandwidth** of the FM demodulator in the SDR receiver software. The receiver's bandwidth should be set to be slightly wider than the expected bandwidth of the transmitted FM signal (as estimated by Carson's Rule) to avoid clipping the sidebands and distorting the audio. You also need to ensure the receiver is set to **FM demodulation mode**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
