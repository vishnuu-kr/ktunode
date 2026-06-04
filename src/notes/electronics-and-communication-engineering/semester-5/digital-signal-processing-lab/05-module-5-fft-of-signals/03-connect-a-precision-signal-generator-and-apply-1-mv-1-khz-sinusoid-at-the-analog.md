---
title: "Connect a precision signal generator and apply 1 mV , 1 kHz sinusoid at the analog port."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 5: FFT of signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec47"
status: "completed"
scrapedAt: "2026-05-23T17:56:06.893Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 5: FFT of Signals

## Topic: Connecting a Precision Signal Generator and Applying a 1 mV, 1 kHz Sinusoid at the Analog Port

---

### 1. Introduction to Signal Generation and Acquisition

This experiment focuses on the practical aspect of applying a known signal to a Digital Signal Processing (DSP) system and observing its behavior. Understanding how to generate and acquire signals is fundamental to verifying the theoretical concepts of DSP.

*   **Signal Generator:** A device that produces electrical signals of known characteristics (frequency, amplitude, waveform). In this lab, a *precision* signal generator ensures accuracy.
*   **Analog Port:** The input interface on the DSP hardware that accepts analog electrical signals. This signal will be converted to a digital format by an Analog-to-Digital Converter (ADC) for processing.
*   **Sinusoid:** A fundamental waveform represented by $A \sin(\omega t + \phi)$, where $A$ is amplitude, $\omega$ is angular frequency, and $\phi$ is phase.

---

### 2. Learning Outcomes Addressed by This Topic

This topic directly contributes to several learning outcomes:

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   This topic involves the *generation* of a basic waveform (sinusoid) using an external instrument. You will learn to set parameters like frequency and amplitude.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   Connecting the signal generator to the analog port of the DSP hardware is a direct interaction with the DSP system. This involves understanding input interfaces and potential setup procedures.

---

### 3. Key Concepts and Definitions

*   **Frequency (f):** The number of cycles of a waveform per second. Measured in Hertz (Hz).
    *   Relationship with angular frequency: $\omega = 2\pi f$.
    *   In this experiment, $f = 1 \text{ kHz} = 1000 \text{ Hz}$.
*   **Amplitude (A):** The maximum displacement or value of the waveform from its equilibrium position. Measured in Volts (V) for electrical signals.
    *   In this experiment, $A = 1 \text{ mV} = 0.001 \text{ V}$.
*   **Sinusoidal Signal:** A signal that can be represented by a sine or cosine function. A general form is:
    $x(t) = A \sin(2\pi f t + \phi)$
    or
    $x(t) = A \cos(2\pi f t + \phi)$
    For simplicity, we can assume $\phi = 0$ if not specified.
*   **Precision Signal Generator:** A signal generator designed for high accuracy and stability in frequency and amplitude output. This is crucial for reproducible experiments and verifying DSP algorithms.
*   **Analog-to-Digital Converter (ADC):** A circuit that converts a continuous-time, continuous-amplitude analog signal into a discrete-time, discrete-amplitude digital signal. This is the first step in processing an analog signal with a DSP system.
    *   **Sampling:** The process of taking discrete samples of the analog signal at regular intervals. The rate at which samples are taken is the *sampling frequency* ($f_s$).
    *   **Quantization:** The process of mapping the sampled analog values to a finite set of discrete digital values.
*   **Digital Signal Processor (DSP):** A specialized microprocessor optimized for digital signal processing tasks. It typically includes hardware accelerators for operations like multiplication and accumulation (MAC).

---

### 4. Practical Setup and Procedure

This section outlines the general steps for connecting and applying the signal. Specific hardware details will depend on your lab setup.

**Objective:** To successfully feed a $1 \text{ mV}$, $1 \text{ kHz}$ sinusoidal signal into the DSP system's analog input port.

**Required Equipment:**

*   Precision Signal Generator
*   DSP Development Board/Hardware (e.g., TMS320C6x DSK, ARM-based DSP evaluation board)
*   Appropriate cables (e.g., BNC cables, audio cables)
*   Oscilloscope (for verification)
*   Computer with DSP development software (e.g., Code Composer Studio, MATLAB/Simulink)

**Steps:**

1.  **Signal Generator Setup:**
    *   **Waveform:** Select "Sine Wave."
    *   **Frequency:** Set to $1 \text{ kHz}$ (or $1000 \text{ Hz}$).
    *   **Amplitude:** Set to $1 \text{ mV}$ (or $0.001 \text{ V}$).
    *   **Offset:** Ensure the DC offset is set to $0 \text{ V}$ unless otherwise specified. This ensures the sinusoid oscillates symmetrically around zero.
    *   **Output Impedance:** Match the output impedance of the signal generator to the input impedance of the DSP board if specified (often 50 Ohms).

2.  **DSP Hardware Connection:**
    *   Identify the **analog input port** on your DSP development board. This is usually labeled as "AIN," "Audio In," or similar.
    *   Using the appropriate cable, connect the **output** of the signal generator to the **analog input port** of the DSP board. Ensure a secure connection.

3.  **Verification (Optional but Recommended):**
    *   Connect an oscilloscope to the **output** of the signal generator to confirm the generated waveform's frequency and amplitude.
    *   If the DSP board has an analog output or a monitor port for the input signal, connect the oscilloscope there as well to observe the signal being fed into the ADC. This helps diagnose connection issues.

4.  **DSP Software Configuration:**
    *   Configure the DSP board's ADC to sample at a specific sampling frequency ($f_s$). A common starting point for audio signals is $f_s = 8 \text{ kHz}$, $44.1 \text{ kHz}$, or higher. **Crucially, ensure $f_s > 2f$ (Nyquist-Shannon sampling theorem) to avoid aliasing.** For a $1 \text{ kHz}$ signal, any $f_s > 2 \text{ kHz}$ is theoretically sufficient, but a higher $f_s$ is generally preferred for accuracy and to explore FFT results.
    *   Set up a program on the DSP to read the sampled analog input.

---

### 5. Theoretical Background and Relevance to FFT

While this specific topic doesn't directly involve the FFT calculation, it's the *essential precursor* for subsequent FFT analysis.

*   **Why is this important for FFT?** The FFT (Fast Fourier Transform) is an algorithm used to compute the Discrete Fourier Transform (DFT). The DFT transforms a time-domain signal into its frequency-domain representation, revealing the frequencies present in the signal.
    *   To perform an FFT on a real-world signal, you first need to acquire that signal digitally. This experiment sets up the acquisition of a known signal.
*   **Expected FFT Result:** When we eventually compute the FFT of the sampled $1 \text{ kHz}$ sinusoid, we expect to see a dominant peak at the frequency corresponding to $1 \text{ kHz}$. The amplitude of this peak should be related to the $1 \text{ mV}$ input, considering the ADC's resolution, gain, and the FFT scaling factors.

**Reference:**

*   **Ingle & Proakis, 3rd Ed.:** Chapter 1 introduces signals and systems, including sinusoidal signals. Chapter 8 discusses the DFT and FFT, explaining how they are used to analyze the frequency content of signals. The practical aspects of sampling and quantization (covered in Chapters 1 and 8) are crucial here.
*   **Downey, Think DSP:** Chapter 1 covers the basics of signals and how to represent them. Chapter 7 focuses on the FFT, explaining how to use it to find the frequency components of a signal. The concept of sampling and its effect on frequency representation is paramount.
*   **Oppenheim & Schafer, 4th Ed.:** Chapter 1 provides a broad overview of discrete-time signals and systems. Chapter 7 is dedicated to the DFT and its efficient computation via the FFT. Understanding the relationship between the analog input signal and its discrete-time representation before applying the FFT is key.

---

### 6. Potential Issues and Troubleshooting

*   **No Signal Detected:**
    *   **Cabling:** Check all cable connections. Ensure they are securely plugged in at both ends.
    *   **Signal Generator Settings:** Double-check frequency and amplitude settings. Verify the generator is actually outputting the signal (use oscilloscope).
    *   **Analog Port:** Ensure you are connected to the correct analog input port.
    *   **DSP Configuration:** Verify the ADC is enabled and configured correctly (sampling rate, input channel).
*   **Incorrect Amplitude/Frequency:**
    *   **Signal Generator Calibration:** The generator might not be perfectly calibrated.
    *   **Gain Settings:** The DSP board might have input gain settings that are affecting the observed amplitude.
    *   **Scope Settings:** If using an oscilloscope for verification, ensure its probe attenuation and display settings are correct.
*   **Aliasing:** If the sampling frequency ($f_s$) is too low ($f_s \le 2f$), the $1 \text{ kHz}$ signal might appear as a different frequency (or be indistinguishable from noise) in the digital domain.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the minimum sampling frequency ($f_s$) required to accurately sample a $1 \text{ kHz}$ sinusoidal signal without aliasing? Explain your answer based on the Nyquist-Shannon sampling theorem.

**Answer 1:**
According to the Nyquist-Shannon sampling theorem, the sampling frequency ($f_s$) must be at least twice the highest frequency component of the signal to be sampled without aliasing. For a $1 \text{ kHz}$ signal, the highest frequency is $1 \text{ kHz}$. Therefore, the minimum sampling frequency required is $f_s > 2 \times 1 \text{ kHz} = 2 \text{ kHz}$.

**Question 2:**
If a signal generator is set to $1 \text{ mV}$ RMS instead of peak amplitude, how would this affect the expected peak amplitude observed after digitization, assuming the signal generator's specification is for peak amplitude by default?

**Answer 2:**
This question assumes a misunderstanding. Signal generators typically specify amplitude in terms of peak voltage for sine waves. If the generator specified $1 \text{ mV}$ RMS, the peak amplitude would be $1 \text{ mV} \times \sqrt{2} \approx 1.414 \text{ mV}$. However, the standard convention for signal generators specifying sine wave amplitude is usually peak-to-peak or peak. Given the prompt specifies "1 mV," it's most likely referring to the peak amplitude. If it *were* RMS, the peak value would be higher. For the purpose of this lab, assume the $1 \text{ mV}$ refers to the peak amplitude unless explicitly stated otherwise.

**Question 3:**
You are applying a $1 \text{ kHz}$ sinusoid and a $3 \text{ kHz}$ sinusoid simultaneously to the analog input. What is the minimum sampling frequency required to capture both signals without aliasing?

**Answer 3:**
To capture both signals without aliasing, the sampling frequency must be greater than twice the *highest* frequency present. The highest frequency is $3 \text{ kHz}$. Therefore, the minimum sampling frequency required is $f_s > 2 \times 3 \text{ kHz} = 6 \text{ kHz}$.

---

### 8. Important Points to Remember

*   **Precision Matters:** Using a precision signal generator ensures that the input signal is well-defined, allowing for more accurate verification of DSP algorithms.
*   **Nyquist Theorem is Crucial:** Always ensure your sampling frequency ($f_s$) is more than twice the highest frequency you want to capture ($f_s > 2f_{max}$) to prevent aliasing.
*   **Signal Path:** Understand the signal flow: Signal Generator -> Analog Input Port -> ADC -> DSP Core -> (optional) DAC -> Analog Output Port.
*   **Verification:** Use an oscilloscope to verify the signal generator's output before connecting it to the DSP board. This isolates potential issues.
*   **DSP Configuration:** Correctly configuring the ADC's sampling rate and input channel on the DSP is as important as the physical connection.

---

### 9. Further Exploration (Related to Module 5: FFT of Signals)

This experiment is the first step towards understanding FFT. Future experiments will build upon this by:

*   **Acquiring the signal digitally:** Reading the samples from the ADC into the DSP's memory.
*   **Applying the FFT algorithm:** Implementing or using a pre-built FFT function on the acquired digital signal.
*   **Analyzing the FFT output:** Observing the frequency spectrum and identifying the $1 \text{ kHz}$ peak.
*   **Varying signal parameters:** Applying different frequencies, amplitudes, and combining multiple sinusoids to see their effects on the FFT output.
*   **Quantization effects:** Observing how the ADC's quantization level affects the FFT results.

This foundational experiment ensures you can reliably introduce a known signal into your DSP system, a critical prerequisite for any meaningful signal analysis using techniques like the FFT.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
