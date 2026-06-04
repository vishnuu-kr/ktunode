---
title: "FM reception using SDR"
subject: "COMMUNICATION LAB I"
module: "Module 6: FM reception using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecbc"
status: "completed"
scrapedAt: "2026-05-23T17:54:26.876Z"
---
# COMMUNICATION LAB I - Module 6: FM Reception Using SDR

This module focuses on understanding and implementing FM reception using Software Defined Radio (SDR) hardware and software tools. It aims to bridge theoretical concepts of FM modulation and demodulation with practical implementation, fostering hands-on skills and team collaboration.

## 1. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the principles of FM modulation and demodulation:** Grasp the fundamental concepts behind how analog information is encoded into frequency variations and how these variations are recovered.
*   **Familiarize yourself with the components and functionality of an SDR receiver:** Learn about the hardware (RTL-SDR dongle) and software (e.g., SDR#, GQRX, GNU Radio) that constitute an SDR system.
*   **Configure and operate an SDR receiver for FM reception:** Learn how to tune to specific FM frequencies, set sampling rates, gain levels, and select demodulation modes.
*   **Analyze received FM signals:** Observe and interpret the characteristics of FM signals using the SDR software, including the spectrum and the demodulated audio.
*   **Implement a basic FM receiver chain in a software environment:** Understand the steps involved in processing the raw SDR data to extract the audio signal.
*   **Evaluate the performance of FM reception under different conditions:** Experiment with factors like signal strength, interference, and software settings.

## 2. Key Concepts and Definitions

### 2.1. Frequency Modulation (FM)

*   **Definition:** FM is a modulation technique where the frequency of a carrier wave is varied in proportion to the instantaneous amplitude of the message signal.
    *   *Reference:* Haykin & Moher (5th Ed.), Chapter 3: Angle Modulation
    *   *Reference:* Lathi & Ding (5th Ed.), Chapter 4: Angle Modulation
*   **Mathematical Representation:**
    *   Carrier Signal: $s_c(t) = A_c \cos(2\pi f_c t)$
    *   Message Signal: $m(t)$
    *   Instantaneous Frequency: $f_i(t) = f_c + k_f m(t)$, where $k_f$ is the frequency sensitivity constant.
    *   FM Signal: $s_{FM}(t) = A_c \cos(2\pi f_c t + 2\pi k_f \int_0^t m(\tau) d\tau)$
*   **Advantages of FM:**
    *   Improved noise immunity compared to AM.
    *   Ability to transmit higher fidelity audio.
    *   Consistent power output, independent of the modulating signal.
*   **Disadvantages of FM:**
    *   Wider bandwidth requirement compared to AM.
    *   More complex receiver circuitry (though SDR significantly simplifies this).

### 2.2. Software Defined Radio (SDR)

*   **Definition:** SDR is a radio communication system that relies on software to process the radio frequency (RF) signal. Unlike traditional radios with dedicated hardware components for each function (e.g., mixers, filters, demodulators), SDR uses general-purpose processors and reconfigurable hardware (like FPGAs) to perform these tasks through software.
    *   *Reference:* Laufer (2nd Ed.), Chapter 1: What is SDR?
    *   *Reference:* Tranter, Shanmugan, Rappaport, Kosbar (2nd Ed.), Chapter 1: Introduction to Communications Systems Simulation and Wireless Applications (introduces system concepts applicable to SDR)
*   **Components of an SDR System:**
    *   **Antenna:** Captures the radio waves.
    *   **RF Front-End:** Includes low-noise amplifiers (LNAs) and filters to condition the received signal. In many affordable SDRs, this is simplified.
    *   **Analog-to-Digital Converter (ADC):** Converts the analog RF signal into a digital stream.
    *   **Digital Down-Conversion (DDC):** Shifts the desired RF frequency to a lower Intermediate Frequency (IF) or directly to baseband using digital signal processing (DSP).
    *   **Digital Signal Processing (DSP) Algorithms:** Implemented in software to perform filtering, demodulation, decoding, etc.
    *   **Digital-to-Analog Converter (DAC):** (For transmission) Converts processed digital data back to analog.
    *   **Host Computer/Processor:** Runs the software that controls the SDR and performs the DSP.

### 2.3. RTL-SDR Dongle

*   **Description:** A very affordable USB SDR receiver based on the Realtek RTL2832U chipset. Originally designed for DVB-T TV reception, it can be repurposed for general SDR applications with appropriate drivers and software.
    *   *Reference:* Laufer (2nd Ed.), Chapter 2: The RTL-SDR Dongle
*   **Key Features:**
    *   Frequency Range: Typically 24 MHz to 1.7 GHz.
    *   Sampling Rate: Up to 2.4 MSPS (Mega Samples Per Second).
    *   Tunable IF: Internally tunable.
    *   Antenna Input: MCX connector.

### 2.4. FM Demodulation

*   **Principle:** The process of recovering the original message signal from an FM wave. This involves detecting the frequency variations and converting them back into amplitude variations.
    *   *Reference:* Haykin & Moher (5th Ed.), Chapter 3: Angle Modulation
    *   *Reference:* Lathi & Ding (5th Ed.), Chapter 4: Angle Modulation
*   **Methods (Historically and in SDR):**
    *   **Slope Detector:** A simple circuit that uses a tuned circuit (resonator) to convert frequency variations into amplitude variations. The slope of the tuned circuit's response curve is used.
    *   **Foster-Seeley Discriminator:** A more linear detector than the slope detector, using a phase shift network.
    *   **Ratio Detector:** Similar to Foster-Seeley but with improved amplitude noise rejection.
    *   **Phase-Locked Loop (PLL) Detector:** A sophisticated method that can achieve high linearity and noise performance. This is commonly implemented in SDR.
    *   **Quadrature Demodulator:** A digital implementation often used in SDR, which multiplies the incoming FM signal with two phase-shifted versions of itself and then filters the results.

### 2.5. Software Tools for SDR

*   **SDR Software (e.g., SDR#, GQRX, HDSDR):** These applications provide a graphical user interface (GUI) to control the SDR hardware, tune frequencies, set parameters, and visualize the received signals.
    *   *Reference:* Laufer (2nd Ed.), Chapter 3: SDR Software
*   **GNU Radio:** An open-source software development toolkit that provides signal processing blocks for implementing radio systems. It allows for the creation of complex signal processing chains, including FM demodulation, using a graphical flowgraph editor or Python scripting.
    *   *Reference:* Viswanathan (1st Ed.), Chapter 1: Introduction to SDR and GNU Radio; Chapter 8: FM Reception (likely covers practical implementation)
    *   *Alignment with CO3:* "Develop hands-on skills to emulate a communication system with software-design-radio working in a team." GNU Radio is a primary tool for this.

## 3. FM Reception Process with SDR

The process of receiving an FM broadcast signal using an RTL-SDR dongle and software typically involves the following steps:

### 3.1. Hardware Setup

1.  **Connect the RTL-SDR Dongle:** Plug the RTL-SDR dongle into a USB port on your computer.
2.  **Connect the Antenna:** Connect an appropriate antenna to the MCX connector on the RTL-SDR dongle. For FM broadcast reception (88-108 MHz), a simple dipole or even a telescoping antenna placed strategically can work.
    *   *Reference:* Laufer (2nd Ed.), Chapter 2: The RTL-SDR Dongle (discusses antenna connections)

### 3.2. Software Setup and Configuration

1.  **Install SDR Software:** Install an SDR application like SDR# (Windows), GQRX (Linux/macOS), or HDSDR (Windows).
    *   *Reference:* Laufer (2nd Ed.), Chapter 3: SDR Software (details on installation and basic use)
2.  **Install Drivers:** Ensure the correct drivers for the RTL-SDR dongle are installed. Zadig is a common tool for this on Windows.
3.  **Launch SDR Software:** Open your chosen SDR application.
4.  **Select SDR Device:** In the software, select the RTL-SDR dongle as the input device.
5.  **Configure SDR Parameters:**
    *   **Frequency:** Tune the receiver to the desired FM broadcast station frequency (e.g., 98.1 MHz).
    *   **Sample Rate:** This determines the bandwidth of the signal being digitized. For FM broadcasting, a sample rate of 1.024 Msps or 2.4 Msps is usually sufficient. A wider sample rate captures more of the spectrum but requires more processing.
    *   **Gain:** Adjust the RF gain. Higher gain increases sensitivity but can lead to overloading or distortion if the signal is too strong. Start with automatic gain control (AGC) or a moderate manual gain.
    *   **Frequency Correction (Optional but Recommended):** RTL-SDR dongles have a slight frequency offset. Many SDR programs allow you to input a correction value to ensure accurate tuning.
6.  **Select Demodulation Mode:** Choose "WFM" (Wideband FM) for FM broadcast reception.
7.  **Select Audio Output Device:** Choose your computer's speakers or headphones.

### 3.3. Signal Analysis and Demodulation

1.  **Observe the Spectrum Analyzer:** The SDR software will display a waterfall or spectrum graph showing the radio frequencies being received. You should see a "peak" at the station's frequency. The bandwidth of an FM broadcast channel is typically around 200 kHz.
    *   *Reference:* Laufer (2nd Ed.), Chapter 3: SDR Software (explains spectrum analysis)
2.  **Listen to the Audio:** Once tuned to a strong FM station and with WFM demodulation selected, you should hear the audio.
3.  **Adjust Gain and Tuning:** Experiment with gain settings to optimize the audio quality. If the audio is distorted, the gain might be too high. If you can't hear the station, the gain might be too low or the tuning is off. Adjust the frequency slightly to find the clearest signal.
    *   *Reference:* Laufer (2nd Ed.), Chapter 3: SDR Software (discusses gain and tuning)
4.  **Observe Bandwidth:** In the spectrum display, you'll see the FM signal occupying a certain bandwidth. This relates to the bandwidth requirements of FM modulation discussed earlier.
    *   *Reference:* Viswanathan (1st Ed.), Chapter 8: FM Reception (likely discusses bandwidth implications).

### 3.4. Advanced: FM Demodulation in GNU Radio

For a deeper understanding and to align with CO3, you can implement FM reception in GNU Radio.

1.  **GNU Radio Companion (GRC):** Use the GRC tool to create a flowgraph.
2.  **Source Block:** Add an "OSMOSDR Source" block (or similar, depending on your SDR) to interface with the RTL-SDR. Configure its parameters (device arguments for RTL-SDR, sample rate, center frequency, gain).
3.  **Channel Filter:** Add a "Low Pass Filter" or "Band Pass Filter" to isolate the desired FM channel bandwidth (e.g., 200 kHz). Set the filter's cutoff frequency and transition width appropriately.
4.  **Quadrature Demodulator:** Add a "Quadrature Demod" block. This block takes the complex baseband signal and demodulates the FM.
5.  **Low Pass Filter (Audio):** Add another "Low Pass Filter" block after the demodulator. This is crucial for removing the high-frequency components introduced by the FM demodulation process and recovering the audio. Set its cutoff frequency to match the audio bandwidth (e.g., 15-20 kHz).
6.  **Audio Sink:** Add an "Audio Sink" block to play the demodulated audio through your computer's speakers.
7.  **Visualization (Optional):** Add blocks like "Throttle," "Frequency Xlating FIR Filter" (for shifting frequency digitally), "QT GUI Sink" (for spectrum visualization), or "Waterfalls" to monitor the signal.
    *   *Reference:* Viswanathan (1st Ed.), Chapter 8: FM Reception (will likely provide detailed GRC examples)

**Example GRC Flowgraph Concept (Simplified):**

`[OSMOSDR Source]` -> `[Band Pass Filter]` -> `[Quadrature Demod]` -> `[Low Pass Filter (Audio)]` -> `[Audio Sink]`

**Important Note:** The exact blocks and their configurations in GNU Radio can vary slightly. Referencing Viswanathan's book is key for practical GRC implementation details.

## 4. Practical Exercises and Considerations

### 4.1. Exercise 1: Basic FM Reception with SDR#

1.  **Task:** Tune to your local FM broadcast station using SDR# (or your chosen software).
2.  **Steps:**
    *   Launch SDR#.
    *   Select "RTL-SDR (USB)" as your device.
    *   Set the sampling rate (e.g., 2.4 Msps).
    *   Tune to a known FM frequency (e.g., 98.1 MHz).
    *   Select "WFM" as the demodulation mode.
    *   Adjust the gain (try AGC first, then manual).
    *   Listen to the audio.
3.  **Observations:**
    *   Describe the quality of the received audio.
    *   Observe the spectrum: What is the approximate bandwidth occupied by the FM signal?
    *   If you experience distortion, what might be the cause? (Likely high gain).
4.  **Answer Guidance:** You should hear clear audio if the station is strong and tuned correctly. The spectrum will show a peak at the center frequency with energy spread out for about 200 kHz. Distortion is usually due to gain being too high.

### 4.2. Exercise 2: Effect of Gain

1.  **Task:** Observe the effect of varying the RF gain on reception quality.
2.  **Steps:**
    *   With a strong FM station tuned in SDR#, start with a moderate manual gain setting.
    *   Gradually increase the gain. What happens to the audio quality?
    *   Gradually decrease the gain. What happens to the audio quality?
3.  **Observations:**
    *   At very low gain, is the signal too weak to hear clearly?
    *   At moderate gain, is the audio clear?
    *   At very high gain, do you hear static, distortion, or unwanted signals?
4.  **Answer Guidance:** Low gain results in a weak signal. Moderate gain provides clear reception. High gain can lead to overloading of the SDR's front-end, causing distortion or picking up adjacent channel interference.

### 4.3. Exercise 3: Frequency Tuning and Bandwidth

1.  **Task:** Tune across a range of frequencies and observe the spectrum.
2.  **Steps:**
    *   In SDR#, set a wide sampling rate (e.g., 2.4 Msps).
    *   Start tuning from around 88 MHz and sweep up to 108 MHz.
    *   Identify at least three different FM stations.
    *   For each station, note its frequency and observe the bandwidth occupied.
3.  **Observations:**
    *   Are the station frequencies spaced as expected (e.g., 100 kHz apart)?
    *   Does the occupied bandwidth seem consistent for different stations?
4.  **Answer Guidance:** You will observe distinct peaks in the spectrum corresponding to FM stations. The bandwidth of each station will be around 200 kHz. Frequencies are typically allocated in 100 kHz or 200 kHz increments.

### 4.4. Exercise 4: FM Demodulation in GNU Radio (Conceptual / Practical)

*(This exercise requires setting up GNU Radio and potentially a virtual machine if you don't have it installed.)*

1.  **Task:** Create a simple GNU Radio flowgraph for FM reception.
2.  **Steps:**
    *   Launch GNU Radio Companion (GRC).
    *   Add an "OSMOSDR Source" block. Configure it for your RTL-SDR, set an appropriate sample rate (e.g., 2.4e6), center frequency (e.g., 98.1e6), and gain (e.g., 30).
    *   Add a "Quadrature Demod" block. Connect the output of the Osmosdr Source to its input.
    *   Add a "Low Pass Filter" block. Connect the output of the Quadrature Demod to its input. Set the Decimation to 16 (this reduces the sample rate for audio processing), the filter type to "Blackman-Harris," the cutoff frequency to 20e3 (20 kHz for audio), and the transition width to 10e3 (10 kHz).
    *   Add an "Audio Sink" block. Connect the output of the Low Pass Filter to its input.
    *   Add a "Throttle" block between the Osmosdr Source and the Band Pass Filter (or directly before the Quadrature Demod if not filtering) to prevent the flowgraph from overwhelming the CPU.
    *   *(Optional but Recommended)* Add a "Band Pass Filter" block after the Osmosdr Source to narrow down to the FM channel. Set Decimation to 1, Cutoff Frequency to 100e3 (100 kHz), Transition Width to 20e3 (20 kHz). Then connect this filter's output to the Quadrature Demod.
    *   Run the flowgraph.
3.  **Observations:**
    *   Do you hear the FM station?
    *   If not, what are potential issues? (Incorrect parameters in source block, wrong filter settings, gain too low/high).
4.  **Answer Guidance:** If configured correctly, you should hear the FM broadcast. Common issues include incorrect sample rate or center frequency in the source block, or incorrect filter bandwidths. The cascade of filters and demodulator simulates the receiver chain.

## 5. Alignment with Course Outcomes

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   While this module focuses on reception, understanding the principles of FM (a modulation technique) is foundational. The practical setup of the RTL-SDR and its software configuration, especially in a team setting, directly contributes to learning how to set up and operate radio systems, which is a precursor to building transmission prototypes.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   This module doesn't directly involve simulating digital modulation error performance. However, understanding FM reception highlights the analog nature of communication systems and the role of signal-to-noise ratio (SNR) in reception quality, which is a parallel concept to bit error rate (BER) in digital systems. The concept of bandwidth efficiency in FM also relates to the trade-offs considered in digital modulation.
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   This module directly addresses CO3. Using SDR hardware (RTL-SDR) and software (SDR#, GNU Radio) to receive FM signals is a prime example of emulating a communication system. Working in a team to set up, configure, and troubleshoot these systems is central to this outcome. The GNU Radio exercise is particularly focused on this.
    *   *Knowledge Level: K5 (Evaluate)* - Students are expected to not only use the tools but potentially evaluate their performance under different conditions and understand the underlying signal processing.

## 6. Important Points to Remember

*   **SDR is a Paradigm Shift:** It replaces dedicated hardware with flexible software, enabling new possibilities in radio communication.
*   **RTL-SDR is Affordable and Versatile:** It provides an excellent entry point into SDR for hobbyists and students.
*   **Gain is Critical:** Proper gain adjustment is key to good reception. Too little gain means weak signals; too much leads to distortion.
*   **Bandwidth Matters:** FM broadcast requires a significant bandwidth (~200 kHz), which is much wider than AM or many digital modulation schemes.
*   **GNU Radio is Powerful:** For advanced implementation and understanding, GNU Radio is the de facto standard for open-source SDR development.
*   **Teamwork is Essential:** Many complex lab tasks are best tackled collaboratively.

This comprehensive set of notes should provide a solid foundation for understanding and performing FM reception using SDR in your Communication Lab I course. Remember to consult the specified textbooks for deeper theoretical explanations and practical details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
