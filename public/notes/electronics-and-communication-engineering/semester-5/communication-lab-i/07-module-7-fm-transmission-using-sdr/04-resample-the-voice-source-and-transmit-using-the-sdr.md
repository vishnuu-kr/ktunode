---
title: "Resample the voice source and transmit using the SDR."
subject: "COMMUNICATION LAB I"
module: "Module 7: FM transmission using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecc5"
status: "completed"
scrapedAt: "2026-05-23T17:54:32.584Z"
---
Sure, here are detailed study notes on the topic "Resample the voice source and transmit using the SDR" for your Communication Lab I course.

## COMMUNICATION LAB I: Module 7 - FM Transmission using SDR

### Topic: Resample the Voice Source and Transmit using the SDR

---

### 1. Introduction to FM Transmission and SDR

*   **Frequency Modulation (FM):** A modulation technique where the frequency of a carrier wave is varied in accordance with the instantaneous amplitude of the modulating signal (in this case, voice).
    *   **Advantages:** Better noise immunity compared to AM, wider bandwidth allows for higher fidelity audio.
    *   **Key Equation:** $s(t) = A_c \cos(2\pi f_c t + \beta \sin(2\pi f_m t))$, where $A_c$ is carrier amplitude, $f_c$ is carrier frequency, $f_m$ is modulating frequency, and $\beta$ is modulation index. (Referenced from Haykin & Moher, *Introduction to Analog and Digital Communication*, Ch. 4).
*   **Software-Defined Radio (SDR):** A radio communication system where components that have been traditionally implemented in hardware (like mixers, filters, amplifiers, detectors, etc.) are instead implemented using software on a personal computer or embedded system.
    *   **Key Advantage:** Flexibility and reconfigurability. Different modulation schemes and signal processing can be implemented by changing software.
    *   **Reference:** Laufer, *The Hobbyist's Guide to the RTL-SDR*, Ch. 1, highlights the advantages of SDR for hobbyists and learning.

---

### 2. Voice Source as a Modulating Signal

*   **Voice Signal Characteristics:**
    *   **Bandwidth:** Human speech typically occupies a bandwidth of approximately 300 Hz to 3.4 kHz. For higher fidelity, this can extend up to 15 kHz.
    *   **Amplitude Variation:** Voice signals have a wide dynamic range, meaning their amplitude can vary significantly.
    *   **Complex Spectrum:** Contains fundamental frequencies and numerous harmonics.
*   **Digital Representation of Voice:**
    *   **Sampling:** Analog voice signals are converted into digital form by sampling at regular intervals. The Nyquist-Shannon sampling theorem states that to perfectly reconstruct a signal, the sampling rate must be at least twice the highest frequency component ($f_s \ge 2 f_{max}$).
    *   **Quantization:** The sampled values are then quantized, meaning they are mapped to a finite number of discrete levels.
    *   **Encoding:** The quantized values are then represented by binary codes.
    *   **Reference:** Lathi & Ding, *Modern Digital and Analog Communication Systems*, Ch. 3, covers sampling and quantization processes.

---

### 3. Resampling the Voice Source

*   **Why Resample?**
    *   **Matching Transmission Requirements:** SDR hardware typically operates at specific sample rates (e.g., IQ sample rates for the SDR front-end). The original sampled voice signal might not match this required rate.
    *   **Efficiency:** Transmitting at a much higher rate than necessary can be inefficient in terms of bandwidth and processing power.
    *   **Bandwidth Limiting:** Resampling can also be used to reduce the bandwidth of the voice signal if it exceeds the allocated bandwidth for transmission.
*   **Resampling Process:**
    *   **Upsampling:** Increasing the sample rate. This is typically done by inserting zeros between the existing samples.
        *   If upsampling by an integer factor $L$, the new sample rate $f_{s\_new} = L \times f_{s\_old}$.
        *   Example: If sampling at 8 kHz and need to transmit at 48 kHz IQ rate, upsample by $L=6$.
    *   **Low-Pass Filtering (Anti-aliasing/Reconstruction Filter):** After upsampling, a low-pass filter is crucial.
        *   **Purpose:** To remove the images created by upsampling and to ensure the signal remains within the desired bandwidth. The cutoff frequency of the filter is typically set to half the original sampling rate (or the maximum frequency of the desired voice bandwidth).
        *   **Reference:** Tranter, Shanmugan, Rappaport, & Kosbar, *Principles of Communication Systems Simulation with Wireless Applications*, Ch. 5, discusses digital filtering and its role in signal processing.
    *   **Downsampling (if necessary):** Reducing the sample rate. This is done by discarding samples.
        *   If downsampling by an integer factor $M$, the new sample rate $f_{s\_new} = f_{s\_old} / M$.
        *   **Crucial Step:** A low-pass filter must be applied *before* downsampling to prevent aliasing. The cutoff frequency of this filter should be half the new target sample rate.
    *   **General Resampling (Fractional Rate Conversion):** If the ratio of the new to old sample rate is not an integer (e.g., $f_{s\_new} / f_{s\_old} = L/M$), both upsampling by $L$ and downsampling by $M$ are performed sequentially.
*   **Implementation in Python (Digital Modulations using Python):**
    *   Libraries like `scipy.signal` (e.g., `resample`, `firwin` for filter design) and `numpy` are commonly used.
    *   **Example (conceptual):**
        ```python
        import numpy as np
        from scipy.signal import resample, firwin
        from scipy.signal import lfilter

        # Assume original_signal is your voice signal sampled at fs_original
        # fs_original = 8000  # Hz

        # Target sample rate for transmission (e.g., IQ rate for SDR)
        # fs_target = 48000  # Hz

        # Calculate the resampling factor
        # ratio = fs_target / fs_original

        # Simple resampling (e.g., using scipy.signal.resample)
        # resampled_signal = resample(original_signal, int(len(original_signal) * ratio))

        # More controlled resampling using upsampling, filtering, and downsampling
        # Upsample by L
        # L = fs_target
        # M = fs_original # Downsample by M = original fs to get to the target rate
        # resampled_signal_controlled = scipy.signal.resample_poly(original_signal, L, M)
        ```
    *   **Reference:** Viswanathan, *Digital Modulations using Python*, Ch. 6, often covers digital signal processing techniques including resampling.

---

### 4. FM Modulation and Generation

*   **Generating FM Signal:** The resampled voice signal acts as the instantaneous frequency deviation of the carrier.
*   **Mathematical Representation of FM signal with resampled source:**
    Let $m_{resampled}(t)$ be the resampled voice signal with bandwidth $B_{resampled}$ and sample rate $f_{s\_resampled}$.
    The FM signal $s(t)$ is generated as:
    $s(t) = A_c \cos(2\pi f_c t + k_f \int_{-\infty}^{t} m_{resampled}(\tau) d\tau)$
    where $k_f$ is the frequency sensitivity of the modulator.
*   **Digital FM Generation:**
    *   In the digital domain, the integral becomes a summation.
    *   The instantaneous phase is updated at each sample:
        $\phi[n] = \phi[n-1] + 2\pi \frac{f_s}{f_c} \Delta f \times m_{resampled}[n]$ (this is a simplification, the exact phase accumulation needs careful handling of sampling rates)
        A more direct way:
        $s[n] = A_c \cos(\theta[n])$
        where $\theta[n] = \theta[n-1] + 2\pi \frac{f_s\_IQ}{f_c} m_{resampled\_scaled}[n]$
        Here, $f_s\_IQ$ is the sample rate of the IQ data fed to the SDR, $f_c$ is the carrier frequency, and $m_{resampled\_scaled}[n]$ is the resampled voice signal scaled by the frequency deviation parameter.
    *   The scaled voice signal $m_{resampled\_scaled}[n]$ determines the frequency deviation from the carrier.
*   **Important Parameters:**
    *   **Carrier Frequency ($f_c$):** The base frequency of the radio wave.
    *   **Frequency Deviation ($\Delta f$):** The maximum change in carrier frequency due to the modulating signal. $\Delta f = k_f \times \max(|m(t)|)$.
    *   **Bandwidth Estimation (Carson's Rule):** $B_{FM} \approx 2(\Delta f + B_{resampled})$. This dictates the required bandwidth for the FM transmission.
*   **Reference:** Haykin & Moher, *Communication Systems*, Ch. 4, provides detailed mathematical treatments of FM generation.

---

### 5. Transmitting using SDR (RTL-SDR Example)

*   **SDR Hardware:** RTL-SDR dongles are common. They take digital I/Q data and convert it to analog signals to be transmitted.
*   **Software Tools:**
    *   **GNU Radio:** A powerful open-source software development toolkit for implementing software radios. It uses a graphical environment (GNU Radio Companion - GRC) to build signal processing flowgraphs.
    *   **Python Libraries:** Libraries like `pySDR` or direct integration with GNU Radio blocks can be used for Python-based control.
*   **Typical GNU Radio Flowgraph for FM Transmission:**
    1.  **Audio Source Block:** To read your audio file or capture from a microphone.
    2.  **Resampling Block:** To adjust the audio sample rate to match the SDR's required IQ sample rate.
    3.  **FM Modulator Block:** To perform the FM modulation using the resampled audio as input.
    4.  **WBFM (Wideband FM) Transmit Block:** A specific block for FM modulation that takes a stream of samples and generates the FM signal.
    5.  **USRP Source / RTL-SDR Sink Block:** To send the generated I/Q samples to the SDR hardware for transmission.
    6.  **Frequency Translation (optional but common):** To shift the modulated signal to the desired carrier frequency.
*   **Key Parameters for SDR Transmission:**
    *   **Sample Rate ($f_{s\_IQ}$):** The rate at which I/Q samples are generated and sent to the SDR. This is usually determined by the SDR hardware or configuration.
    *   **Center Frequency ($f_{center}$):** The frequency the SDR is tuned to. This should be close to the desired carrier frequency ($f_c$) for efficient transmission.
    *   **Gain:** Amplifier gain settings for the transmitter.
*   **Python Implementation (Conceptual using GNU Radio):**
    ```python
    # This is a simplified conceptual representation. Actual implementation
    # would involve GNU Radio blocks and a specific flowgraph.

    import numpy as np
    import scipy.signal as signal
    import matplotlib.pyplot as plt
    # Assume you have a function to load your audio and resample it
    # from your_audio_processing import load_and_resample_audio

    # --- Load and Resample Audio ---
    # fs_audio = 8000 # Original audio sampling rate
    # fs_iq = 48000  # Target IQ sample rate for SDR
    # voice_signal_original = load_audio("your_voice.wav")
    # voice_signal_resampled = resample_audio(voice_signal_original, fs_audio, fs_iq)

    # --- FM Modulation Parameters ---
    # carrier_frequency = 100e6  # e.g., 100 MHz
    # frequency_deviation = 5e3 # 5 kHz

    # --- Generate FM Signal ---
    # time_vector = np.arange(len(voice_signal_resampled)) / fs_iq
    # instantaneous_frequency = carrier_frequency + frequency_deviation * voice_signal_resampled
    # phase = 2 * np.pi * np.cumsum(instantaneous_frequency) / fs_iq
    # fm_signal = np.cos(phase) # Amplitude normalized to 1 for simplicity

    # --- Scaling for SDR ---
    # IQ_samples = fm_signal * np.exp(-1j * 2 * np.pi * carrier_frequency * time_vector)
    # IQ_samples_scaled = IQ_samples * scale_factor # Scale for SDR output range

    # --- Transmit using SDR (Conceptual - would use a GNU Radio Sink) ---
    # For actual transmission, you'd configure a GNU Radio flowgraph
    # with:
    # 1. File Source or Audio Source
    # 2. Rational Resampler (to match SDR sample rate)
    # 3. WBFM Mod (for FM modulation)
    # 4. RTL-SDR Sink
    ```
*   **Reference:** Laufer, *The Hobbyist's Guide to the RTL-SDR*, Ch. 7 & 8, discusses setting up transmission with SDR and basic flowgraphs. Viswanathan, *Digital Modulations using Python*, might have examples of generating modulated signals that could be adapted for SDR.

---

### 6. Learning Outcomes Covered

*   **LO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   While this topic focuses on SDR, the underlying principles of waveform coding (digital representation of voice) and modulation (FM) are directly applied. Setting up the SDR transmit chain in GNU Radio or Python is analogous to building a prototype. Teamwork is crucial for troubleshooting SDR setups.
*   **LO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   Although this topic is about FM (an analog modulation scheme), understanding the signal generation and transmission process lays the groundwork for simulating other digital modulation schemes and their error performance. The concepts of sampling, quantization, and bandwidth are fundamental to all digital communication.
*   **LO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   This topic is central to LO3. Building a complete FM transmitter using voice as a source, resampling it, modulating it, and transmitting it via an SDR directly demonstrates hands-on skills in emulating a communication system with SDR.

---

### 7. Course Outcomes Alignment

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team. (Knowledge Level: K3 - Applying)**
    *   Applying knowledge to set up the audio source, resample it, and integrate it into an FM transmission chain using SDR tools aligns with K3.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes. (Knowledge Level: K4 - Analyzing)**
    *   While this topic is FM, the analytical understanding of bandwidth, modulation index, and potential issues during resampling and transmission contributes to the ability to analyze error performance in other digital systems.
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team. (Knowledge Level: K5 - Evaluating)**
    *   This topic directly addresses K5 by requiring hands-on implementation and operationalizing an FM transmitter using SDR. Evaluating the effectiveness of the resampling and modulation process and troubleshooting the SDR setup are key activities.

---

### 8. Important Points to Remember

*   **Sampling Theorem:** Always sample at least twice the highest frequency component of your signal.
*   **Resampling Filter:** A low-pass filter is essential *before* downsampling to prevent aliasing, and *after* upsampling to remove images. The cutoff frequency is critical.
*   **SDR Sample Rate:** Your resampled voice signal must be synchronized with the SDR's IQ sample rate for proper transmission.
*   **Bandwidth:** Understand Carson's rule ($B_{FM} \approx 2(\Delta f + B_{voice})$) to estimate the required transmission bandwidth.
*   **GNU Radio/Python:** Familiarize yourself with the specific blocks and functions for audio handling, resampling, FM modulation, and SDR interfacing.
*   **Phase Accumulation:** In digital FM generation, correctly accumulating phase based on the instantaneous frequency is crucial.

---

### 9. Practice Questions and Answers

**Q1:** You have a voice signal sampled at 8 kHz. You want to transmit it using an SDR that requires an IQ sample rate of 44.1 kHz. What is the resampling factor you would ideally use? What is the primary purpose of the filter after upsampling?

**A1:**
*   **Resampling Factor:** To go from 8 kHz to 44.1 kHz, you would use a resampling factor of $44.1 / 8 = 5.5125$. In practice, for integer-rate changes, you'd upsample by $L=441$ and downsample by $M=80$ (to get a ratio of 441/80 = 5.5125). More practically, you might resample to an intermediate rate that's a multiple of both, or use a rational resampling approach.
*   **Purpose of Filter:** After upsampling, the primary purpose of the low-pass filter is to **remove the spectral images** that are created by the upsampling process. It also ensures that the signal bandwidth is controlled, typically to the original voice bandwidth or slightly more, before it is potentially downsampled or transmitted.

**Q2:** Explain why downsampling without prior low-pass filtering causes aliasing.

**A2:**
When you downsample, you are discarding samples. If the original signal contains frequencies higher than half the *new* sampling rate, these high frequencies will "fold back" or alias into the lower frequency band after downsampling. The low-pass filter, applied *before* downsampling, removes these high frequencies, ensuring that no aliasing occurs and the integrity of the desired signal band is preserved. (Referenced from Lathi & Ding, Ch. 3).

**Q3:** What are the key components of a GNU Radio flowgraph for transmitting an FM signal from an audio file?

**A3:**
A typical flowgraph would include:
1.  **File Source / Audio Source:** To read the audio data.
2.  **Rational Resampler / Resample DSP:** To change the sample rate of the audio to match the SDR's IQ sample rate.
3.  **WBFM Modulator:** To perform the wideband FM modulation on the resampled audio.
4.  **Frequency Translator (Optional but common):** To shift the modulated signal to the desired carrier frequency.
5.  **RTL-SDR Sink:** To output the generated I/Q samples to the SDR hardware for transmission.

**Q4:** In FM modulation, what is the role of the frequency deviation parameter ($\Delta f$)? How does it relate to the loudness of the voice signal?

**A4:**
The frequency deviation ($\Delta f$) determines the maximum extent to which the carrier frequency is shifted by the modulating voice signal. It is directly proportional to the amplitude (loudness) of the voice signal. A louder voice (higher amplitude) will cause a larger frequency deviation, resulting in a wider bandwidth FM signal according to Carson's rule.

---

This comprehensive set of notes should provide a solid foundation for understanding and performing the task of resampling a voice source and transmitting it using an SDR in your Communication Lab I. Remember to consult the provided textbooks for deeper theoretical understanding and practical examples. Good luck!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
