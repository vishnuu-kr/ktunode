---
title: "Test the operation of the filters with speech signals."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec56"
status: "completed"
scrapedAt: "2026-05-23T17:56:16.283Z"
---
# DIGITAL SIGNAL PROCESSING LAB - MODULE 7: FIR LOW PASS FILTER

## Topic: Test the Operation of FIR Low-Pass Filters with Speech Signals

### Introduction to the Topic

This module focuses on understanding and verifying the behavior of Finite Impulse Response (FIR) low-pass filters when applied to real-world signals, specifically speech. We will explore how these filters can modify the spectral content of speech, removing higher frequencies and retaining lower frequencies, and how this impacts the perceived quality and intelligibility of the speech. This practical application reinforces the theoretical concepts of FIR filter design and their role in signal processing.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental principles of low-pass filtering.**
*   **Apply FIR low-pass filters to speech signals.**
*   **Analyze the effect of low-pass filtering on the spectral characteristics of speech.**
*   **Evaluate the perceptual impact of low-pass filtering on speech quality.**
*   **Implement and test FIR low-pass filters using appropriate tools (e.g., MATLAB, Python).**

### Key Concepts and Definitions

*   **Speech Signal:** A complex acoustic signal produced by the human vocal tract. It is characterized by a broad spectrum of frequencies, containing both voiced (periodic) and unvoiced (aperiodic) components.
    *   *Reference:* Think DSP by Allen B. Downey often uses sound signals to illustrate DSP concepts. Speech signals can be viewed as complex audio signals.
*   **Low-Pass Filter (LPF):** A filter that allows frequencies below a certain cutoff frequency to pass through with minimal attenuation, while attenuating frequencies above the cutoff frequency.
*   **FIR Filter:** A filter whose impulse response is of finite duration. FIR filters are known for their stability and linear phase characteristics, which are crucial for preserving the waveform of signals like speech.
    *   *Reference:* Ingle & Proakis, "Digital Signal Processing using Matlab," extensively covers the design and properties of FIR filters, including their implementation.
*   **Cutoff Frequency ($f_c$):** The frequency at which the filter transitions from passing to attenuating signals. In practice, this is often defined as the frequency where the filter's magnitude response drops by 3 dB from its passband value.
*   **Passband:** The range of frequencies that are allowed to pass through the filter with minimal attenuation.
*   **Stopband:** The range of frequencies that are attenuated by the filter.
*   **Transition Band:** The range of frequencies between the passband and the stopband where the filter's attenuation gradually increases.
*   **Frequency Response:** The ratio of the output signal's Fourier Transform to the input signal's Fourier Transform. For a low-pass filter, the magnitude of the frequency response is high in the passband and low in the stopband.
*   **Spectrum:** The representation of a signal in the frequency domain, showing its constituent frequencies and their amplitudes.
*   **Spectral Shaping:** The process of altering the frequency content of a signal using filters.

### Theoretical Background and Design of FIR Low-Pass Filters

Before testing with speech, a fundamental understanding of FIR low-pass filter design is essential.

**1. Ideal vs. Practical Low-Pass Filters:**
*   **Ideal LPF:** Has a sharp cutoff, passing all frequencies below $f_c$ and completely blocking all frequencies above $f_c$. This is theoretically impossible to implement in real-time.
*   **Practical LPF:** Exhibits a gradual transition from passband to stopband due to the finite number of filter coefficients (taps) and the limitations of digital implementation.

**2. FIR Filter Design Methods (Brief Overview - Covered in previous modules):**
*   **Windowing Method:**
    *   Design an ideal LPF impulse response ($h_d[n]$).
    *   Multiply $h_d[n]$ by a finite-duration window function ($w[n]$) to truncate the impulse response. Common windows include Rectangular, Hamming, Hanning, Blackman, and Kaiser. The choice of window affects the trade-off between transition band width and stopband attenuation.
    *   *Reference:* Ingle & Proakis provide detailed explanations and examples of designing FIR filters using various windowing techniques. They emphasize the design steps and the resulting filter characteristics.
*   **Frequency Sampling Method:**
*   **Optimal (Equiripple) Design (e.g., Parks-McClellan Algorithm):** Aims to minimize the maximum error in the passband and stopband. This often yields sharper transitions for a given filter order.

**3. Filter Coefficients (Taps):**
*   The coefficients of an FIR filter ($h[n]$) determine its frequency response. For a low-pass filter, these coefficients are typically designed to create a smooth, decaying response from DC (0 Hz) towards the cutoff frequency.

### Testing FIR Low-Pass Filters with Speech Signals

This section details the practical steps and considerations for testing the operation of FIR low-pass filters with speech signals.

**1. Obtaining Speech Signals:**
*   **Pre-recorded Speech Files:** Use standard audio files (e.g., `.wav` files). These can be easily loaded into MATLAB or Python.
    *   *Example:* You might have a speech recording of a person saying "Hello, DSP Lab!".
*   **Live Microphone Input:** Record speech directly from a microphone connected to your system. This requires interfacing with audio input hardware.
    *   *Reference:* Chassaing, "DSP applications using C and the TMS320C6x DSK," might provide insights into real-time audio processing and interfacing if you were working with specific hardware.

**2. System Setup and Tools:**
*   **Software:** MATLAB (with Signal Processing Toolbox), Python (with libraries like `scipy.signal`, `numpy`, `matplotlib`, `soundfile`).
*   **Hardware (Optional):** Digital Signal Processor (DSP) board if you are exploring hardware implementation.

**3. Steps for Testing:**

*   **Step 1: Load or Record the Speech Signal:**
    *   Read the audio file into a numerical array representing the amplitude samples over time.
    *   You will also need the sampling frequency ($F_s$) of the recorded speech.
    *   *Example (Python using `soundfile`):*
        ```python
        import soundfile as sf
        data, fs = sf.read('your_speech.wav')
        # data is the audio signal array, fs is the sampling frequency
        ```
    *   *Example (MATLAB):*
        ```matlab
        [y, Fs] = audioread('your_speech.wav');
        % y is the audio signal array, Fs is the sampling frequency
        ```

*   **Step 2: Design an FIR Low-Pass Filter:**
    *   Choose a filter design method (e.g., windowing).
    *   Specify the filter order (determines the complexity and sharpness of the cutoff). A higher order generally leads to a sharper cutoff but requires more computation.
    *   Specify the cutoff frequency ($f_c$). This is a critical parameter that determines which frequencies are attenuated. The cutoff frequency should be specified relative to the Nyquist frequency ($F_s/2$).
    *   *Example (MATLAB - using `fir1` for Hamming window):*
        ```matlab
        order = 100; % Example filter order
        cutoff_freq = 2000; % Desired cutoff frequency in Hz
        b = fir1(order, cutoff_freq / (Fs/2), 'low', hamming(order+1)); % Coefficients of the FIR filter
        ```
    *   *Example (Python using `scipy.signal.firwin`):*
        ```python
        from scipy import signal
        order = 100
        cutoff_freq = 2000 # Hz
        nyquist_freq = fs / 2
        normal_cutoff = cutoff_freq / nyquist_freq
        b = signal.firwin(order + 1, normal_cutoff, window='hamming', pass_zero='lowpass')
        ```

*   **Step 3: Apply the Filter to the Speech Signal:**
    *   Convolve the speech signal with the designed FIR filter's coefficients. This is the core filtering operation.
    *   *Example (Python using `scipy.signal.lfilter`):*
        ```python
        filtered_speech = signal.lfilter(b, 1, data)
        ```
    *   *Example (MATLAB):*
        ```matlab
        filtered_speech = filter(b, 1, y);
        ```
    *   *Note:* The `lfilter` (Python) or `filter` (MATLAB) function performs the convolution: $y_{out}[n] = \sum_{k=0}^{M} h[k] x[n-k]$, where $h[k]$ are the filter coefficients and $x[n]$ is the input signal.

*   **Step 4: Analyze the Results:**
    *   **Spectral Analysis:**
        *   Compute and plot the frequency spectrum (e.g., using Fast Fourier Transform - FFT) of the original speech signal and the filtered speech signal.
        *   Observe how the high-frequency components of the speech are attenuated by the low-pass filter.
        *   Compare the magnitude responses of the designed filter with the actual spectral change in the speech signal.
        *   *Reference:* CO2 (Verify the properties of DFT) is directly applicable here for spectral analysis.
        *   *Example (Python - plotting spectrum):*
            ```python
            from scipy import fft
            import matplotlib.pyplot as plt

            N = len(data)
            yf = fft.fft(data)
            xf = fft.fftfreq(N, 1 / fs)

            N_filtered = len(filtered_speech)
            yff = fft.fft(filtered_speech)
            xff = fft.fftfreq(N_filtered, 1 / fs)

            plt.figure(figsize=(12, 6))
            plt.subplot(2, 1, 1)
            plt.plot(xf[:N//2], 2.0/N * np.abs(yf[:N//2]))
            plt.title('Original Speech Spectrum')
            plt.xlabel('Frequency (Hz)')
            plt.ylabel('Magnitude')
            plt.grid()

            plt.subplot(2, 1, 2)
            plt.plot(xff[:N_filtered//2], 2.0/N_filtered * np.abs(yff[:N_filtered//2]))
            plt.title('Filtered Speech Spectrum')
            plt.xlabel('Frequency (Hz)')
            plt.ylabel('Magnitude')
            plt.axvline(cutoff_freq, color='r', linestyle='--', label=f'Cutoff: {cutoff_freq} Hz')
            plt.legend()
            plt.grid()
            plt.tight_layout()
            plt.show()
            ```
    *   **Perceptual Evaluation:**
        *   Listen to both the original and the filtered speech signals.
        *   **Effect of Low-Pass Filtering on Speech:**
            *   **Reduced Clarity/Muffled Sound:** As higher frequencies are removed, the "crispness" and intelligibility of the speech may decrease. Consonants, which often rely on higher frequencies, can become less distinct.
            *   **"Dull" or "Muted" Sound:** The overall brightness of the voice will be reduced.
            *   **Impact on Different Sounds:** Voiced sounds (like vowels) are generally characterized by lower fundamental frequencies and lower-order harmonics, and might be preserved better than unvoiced sounds (like 's', 'f', 'sh'), which have significant energy in higher frequency ranges.
        *   **How does the cutoff frequency affect perception?**
            *   **Higher Cutoff:** Less high-frequency content is removed, so the speech sounds closer to the original, perhaps with slightly reduced high-frequency hiss or noise.
            *   **Lower Cutoff:** More high-frequency content is removed. The speech will sound significantly muffled, and intelligibility will likely decrease substantially. The voice will sound "duller" and less natural.
        *   *Reference:* CO1 (Generate basic signal waveforms) and CO4 (Implement LTI systems) are foundational for this analysis. CO5 (Design and Implement FIR low-pass filters) is the direct objective.

*   **Step 5: Repeat with Different Filter Parameters:**
    *   Experiment with different filter orders and cutoff frequencies to observe their impact on the spectral content and the perceived quality of the speech.
    *   Try different window functions to see how they affect the transition band and stopband attenuation, and subsequently the sound of the filtered speech.

### Connecting to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   While not directly generating speech here, understanding the underlying principles of signal representation (sampling, amplitude) is crucial for handling speech data.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   The spectral analysis (plotting FFTs) of the original and filtered speech directly verifies how filtering modifies the frequency content of a signal, a core property of the DFT.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   If using a microphone for live input or a DSP board for implementation, this topic provides practical experience with real-world signal acquisition and processing.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   FIR filters are Linear Time-Invariant (LTI) systems. Applying the filter using convolution is a direct implementation of an LTI system, and analyzing its effect on speech demonstrates LTI system behavior on a complex signal.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   This topic is the direct application of designing and implementing FIR low-pass filters and evaluating their performance on a practical, meaningful signal like speech.

### Important Points to Remember

*   **Sampling Frequency ($F_s$):** Crucial for correctly specifying the cutoff frequency in relation to the Nyquist frequency ($F_s/2$).
*   **Filter Order:** Affects the sharpness of the cutoff and the computational complexity.
*   **Cutoff Frequency:** Determines which frequencies are passed and which are attenuated. Choose it based on the desired effect. For speech intelligibility, typically frequencies up to 3-4 kHz are important for understandable speech.
*   **Window Functions:** Impact the trade-off between the steepness of the transition band and the level of stopband attenuation.
*   **Perceptual Effects:** Don't solely rely on spectral plots. Listening to the filtered speech is essential to understand the real-world impact.
*   **Speech Characteristics:** Be aware that speech contains both voiced and unvoiced components, which have different frequency distributions, and thus will be affected differently by a low-pass filter.

### Practice Questions and Exercises

**Question 1:** You have a speech signal sampled at $F_s = 8000$ Hz. You want to design an FIR low-pass filter to remove frequencies above 1 kHz.
    a) What is the normalized cutoff frequency you would use in your filter design function (e.g., `fir1` in MATLAB or `firwin` in Python)?
    b) If you design a 100th-order FIR filter with a Hamming window, what are the key characteristics you expect in the filtered speech?
    c) Describe the expected perceptual difference between this filtered speech and the original speech.

**Answer 1:**
    a) The Nyquist frequency is $F_s/2 = 8000 \text{ Hz} / 2 = 4000$ Hz. The normalized cutoff frequency is the cutoff frequency divided by the Nyquist frequency: $1000 \text{ Hz} / 4000 \text{ Hz} = 0.25$.
    b) A 100th-order FIR filter with a Hamming window will have a relatively smooth transition band. The Hamming window provides good stopband attenuation but has a wider transition band compared to some other windows. You would expect the filter to significantly attenuate frequencies above 1 kHz.
    c) The filtered speech would likely sound muffled or dull. The higher-frequency components that contribute to the clarity and crispness of consonants and the overall brightness of the voice would be reduced. Intelligibility might decrease, especially for sounds that rely heavily on high frequencies.

**Question 2:** Consider two FIR low-pass filters designed for the same speech signal, sampled at $F_s = 16000$ Hz:
    *   Filter A: 50th order, cutoff frequency $f_c = 3000$ Hz.
    *   Filter B: 200th order, cutoff frequency $f_c = 3000$ Hz.
    Describe the expected differences in their filtering performance and the resulting speech quality.

**Answer 2:**
    *   **Filter A (50th order):** Will have a wider transition band and less stopband attenuation compared to Filter B. The cutoff will be less sharp. The filtered speech might still retain some higher frequencies and sound less muffled than with Filter B, but the filtering effect will be less pronounced.
    *   **Filter B (200th order):** Will have a narrower transition band and better stopband attenuation, leading to a sharper cutoff around 3000 Hz. The filtered speech will likely sound more muffled and have less high-frequency content compared to Filter A. The intelligibility might be more significantly impacted.

**Question 3:** What happens to the spectral content of a speech signal when a very low cutoff frequency (e.g., 100 Hz) is used for an FIR low-pass filter? How would this sound?

**Answer 3:** With a very low cutoff frequency like 100 Hz, the filter will essentially pass only the very lowest frequency components of the speech signal. This includes the fundamental frequency of voiced sounds and their very lowest harmonics. The higher harmonics, which carry much of the information about the timbre and intelligibility of the speech, will be severely attenuated. The resulting sound would be very muffled, potentially sounding like a low-frequency hum or a very dull, distorted version of the original speech, with almost no consonants being intelligible.

### Further Exploration and Advanced Topics

*   **Band-pass Filtering of Speech:** Explore how band-pass filters can be used to isolate specific frequency bands crucial for speech intelligibility (e.g., the first formant of vowels).
*   **Noise Reduction:** Low-pass filtering can be a simple form of noise reduction if the noise is primarily in the higher frequency bands.
*   **Filter Design Specifications:** Investigate more advanced design techniques like the Parks-McClellan algorithm for optimal filter design, which allows precise control over the passband ripple and stopband attenuation.
*   **Real-time Processing:** Consider how these filters would be implemented in real-time systems, potentially on DSP hardware, and the implications of filter delay.

This comprehensive set of notes provides a solid foundation for understanding and practically testing FIR low-pass filters with speech signals in your Digital Signal Processing Lab. Remember to consult the recommended textbooks for deeper dives into the mathematical underpinnings and implementation details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
