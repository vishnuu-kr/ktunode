---
title: "Apply the FFT on the input signal with appropriate window size and observe the result."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 5: FFT of signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec48"
status: "completed"
scrapedAt: "2026-05-23T17:56:07.726Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 5 - FFT of Signals

## Topic: Apply the FFT on the input signal with appropriate window size and observe the result.

### Introduction

The Fast Fourier Transform (FFT) is an efficient algorithm to compute the Discrete Fourier Transform (DFT). The DFT decomposes a signal into its constituent frequencies. In digital signal processing, we often deal with finite-length signals. The choice of the window size for applying the FFT significantly impacts the results obtained, particularly in terms of spectral resolution and leakage. This module aims to provide practical experience in applying the FFT to various signals with different window sizes and analyzing the resulting frequency spectrum.

### Learning Outcomes

Upon successful completion of this module, students will be able to:

*   Understand the relationship between the time-domain signal and its frequency-domain representation using the FFT.
*   Explain the concept of windowing and its necessity when applying FFT to finite-length signals.
*   Select an appropriate window size for analyzing signals based on their characteristics.
*   Implement the FFT algorithm in a chosen environment (e.g., MATLAB, Python) for different input signals.
*   Analyze and interpret the magnitude and phase spectra obtained from the FFT.
*   Observe and explain the effects of different window sizes on the FFT output, including spectral resolution and leakage.
*   Relate the concepts of FFT to practical applications like spectral analysis and system identification.

### Key Concepts and Definitions

#### 1. Discrete Fourier Transform (DFT)

The DFT transforms a finite sequence of N samples, $x[n]$ (where $n = 0, 1, \ldots, N-1$), into a sequence of N frequency-domain coefficients, $X[k]$ (where $k = 0, 1, \ldots, N-1$):

$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi nk/N}
$$

The DFT reveals the frequency content of the discrete-time signal.

*   **Textbook Reference:**
    *   Proakis & Ingle, Chapter 2: Discrete Fourier Transform
    *   Oppenheim & Schafer, Chapter 7: DFT: Properties and Applications

#### 2. Fast Fourier Transform (FFT)

The FFT is an algorithm that computes the DFT much more efficiently than direct computation. For an N-point DFT, direct computation requires $O(N^2)$ operations, while the FFT (specifically the Cooley-Tukey algorithm) requires $O(N \log N)$ operations. This efficiency is crucial for real-time processing of signals.

*   **Textbook Reference:**
    *   Proakis & Ingle, Chapter 7: The Fast Fourier Transform
    *   Oppenheim & Schafer, Chapter 7: DFT: Properties and Applications (discusses computational efficiency)

#### 3. Window Size (N)

The window size, often denoted by $N$, is the number of samples from the input signal that are used for computing the DFT/FFT. It directly affects the frequency resolution and the duration of the signal segment being analyzed.

*   **Frequency Resolution:** The DFT provides frequency components at discrete frequencies $k \cdot f_s/N$, where $f_s$ is the sampling frequency. The separation between these frequency bins is $f_s/N$. A larger window size ($N$) leads to a smaller frequency bin spacing, resulting in better frequency resolution, meaning the ability to distinguish between closely spaced frequency components.
*   **Time-Domain Truncation:** When analyzing a signal, we often have an infinitely long or very long signal. To apply the FFT, we must select a finite segment (window) of the signal. This process inherently truncates the signal.

*   **Textbook Reference:**
    *   Downey, Chapter 10: DFT (discusses the relationship between window size and frequency resolution).
    *   Proakis & Ingle, Chapter 7: The Fast Fourier Transform (discusses the concept of block size).

#### 4. Spectral Leakage

Spectral leakage occurs when energy from a particular frequency component "leaks" into adjacent frequency bins in the DFT output. This happens when the signal segment being analyzed does not contain an integer number of cycles of its constituent sinusoids. When the DFT is applied to a finite-duration windowed signal, it implicitly assumes the signal is periodic with a period equal to the window length. If the signal within the window is not perfectly periodic over this interval, discontinuities are introduced at the window boundaries, leading to leakage.

*   **Causes:**
    *   Using a rectangular window (implicit when no window is applied, or a window of all ones).
    *   The signal segment does not contain an integer number of periods of its frequency components.

*   **Effects:**
    *   Broadening of spectral lines.
    *   Difficulty in detecting weak signals in the presence of strong signals.
    *   Inaccurate amplitude measurements.

*   **Textbook Reference:**
    *   Proakis & Ingle, Chapter 7: The Fast Fourier Transform (discusses the effect of windowing on the spectrum).
    *   Oppenheim & Schafer, Chapter 7: DFT: Properties and Applications (discusses the impact of truncation).

#### 5. Windowing Functions (Optional but Highly Relevant)

While this topic focuses on window *size*, it's crucial to understand that windowing *functions* are often used in conjunction with varying window sizes to mitigate spectral leakage. Common windowing functions include:

*   **Rectangular Window:** No explicit windowing; equivalent to multiplying the signal by a rectangular pulse. Causes significant leakage.
*   **Hann Window (Hanning):** Smoother transition at the edges, reduces leakage compared to rectangular.
*   **Hamming Window:** Similar to Hann, but with different side lobe characteristics.
*   **Blackman Window:** Provides even better side lobe attenuation but at the cost of wider main lobe.

The choice of window function influences the trade-off between spectral resolution and side lobe suppression.

*   **Textbook Reference:**
    *   Proakis & Ingle, Chapter 7: The Fast Fourier Transform (discusses various windowing functions).
    *   Downey, Chapter 10: DFT (may touch upon windowing as an extension).

### Applying FFT with Appropriate Window Size

The core of this lab is understanding how changing the window size ($N$) affects the FFT output.

#### 1. Choosing an Input Signal

You can use various types of input signals:

*   **Pure Sinusoid:** A single frequency signal.
*   **Sum of Sinusoids:** A signal composed of multiple sinusoids.
*   **Chirp Signal:** A signal whose frequency changes over time.
*   **Real-world signals:** (e.g., audio snippets, sensor data).

#### 2. Determining the Sampling Frequency ($f_s$)

This is crucial for interpreting the frequency axis of the FFT output. The frequency axis will range from 0 to $f_s$. The frequency resolution will be $f_s/N$.

#### 3. Selecting the Window Size ($N$)

The choice of $N$ depends on the signal's characteristics and what you want to observe:

*   **To observe fine frequency details:** Use a larger $N$. This increases the number of frequency bins ($N$) and reduces the spacing between them ($f_s/N$), allowing you to distinguish between closely spaced frequencies.
*   **To analyze a specific short-time behavior:** Use a smaller $N$. This focuses the analysis on a shorter segment of the signal.
*   **For signals with transient behavior:** A smaller $N$ might be better to capture the rapid changes.
*   **For signals with stable, slow-varying frequencies:** A larger $N$ can provide better accuracy.

**Important Consideration:** The FFT algorithm often performs most efficiently when $N$ is a power of 2. Many FFT implementations (like `fft` in MATLAB/NumPy) handle non-power-of-2 lengths, but might use padding internally or be less computationally optimized. If not specified otherwise, using a power of 2 for $N$ is generally a good practice for demonstration purposes.

#### 4. Zero-Padding

To increase the number of points in the FFT output and get a smoother spectral plot without actually improving the fundamental frequency resolution (which is limited by the original signal segment duration), zero-padding can be employed. If you have $M$ samples of your signal, you can pad it with $N-M$ zeros to compute an $N$-point FFT, where $N > M$. This essentially interpolates the DFT spectrum.

*   **Textbook Reference:**
    *   Proakis & Ingle, Chapter 7: The Fast Fourier Transform (discusses zero-padding).

#### 5. Observing the Results

After applying the FFT, you will typically examine:

*   **Magnitude Spectrum:** $|X[k]|$ vs. frequency. This shows the strength of each frequency component.
*   **Phase Spectrum:** $\angle X[k]$ vs. frequency. This shows the phase shift of each frequency component.
*   **Power Spectrum:** $|X[k]|^2$ vs. frequency. This shows the power distribution across frequencies.

**Key Observations to Make:**

*   **Pure Sinusoid:** You should see a single sharp peak at the sinusoid's frequency.
*   **Sum of Sinusoids:** You should see distinct peaks at the frequencies of each sinusoid.
*   **Effect of Window Size on Resolution:** As $N$ increases, if the signal has two close frequencies, the peaks should become more separated and distinct.
*   **Effect of Window Size on Leakage:** For signals that don't fit perfectly into the window, increasing $N$ might reduce leakage from spectral components that are not integer multiples of $f_s/N$. However, if the signal segment is very short, even with a large $N$ (due to zero-padding), the fundamental spectral resolution is still limited by the original segment length.

### Practical Implementation (using MATLAB/Python)

Let's illustrate with a common scenario: analyzing a signal that is a sum of two sinusoids.

**Scenario:**
*   Sampling Frequency, $f_s = 1000$ Hz.
*   Signal: $x(t) = \sin(2\pi \cdot 50t) + 0.5 \sin(2\pi \cdot 120t)$.
*   We will take a segment of this signal and apply FFT with different window sizes.

**Example 1: Pure Sinusoid**

1.  **Generate the signal:**
    ```matlab
    fs = 1000; % Sampling frequency
    t = 0:1/fs:1-1/fs; % Time vector (1 second)
    f1 = 50; % Frequency of the first sinusoid
    x = sin(2*pi*f1*t); % Pure sinusoid
    ```

2.  **Apply FFT with different window sizes:**

    *   **Small Window Size (e.g., N = 64):**
        ```matlab
        N1 = 64;
        X1 = fft(x, N1);
        P1 = abs(X1/N1); % Magnitude spectrum, normalized by N
        P1 = P1(1:N1/2+1); % Take only the first half
        P1(2:end-1) = 2*P1(2:end-1); % Double for single-sided spectrum
        f = fs*(0:(N1/2))/N1; % Frequency vector
        
        figure;
        plot(f, P1);
        title('FFT Magnitude Spectrum (N=64)');
        xlabel('Frequency (Hz)');
        ylabel('Magnitude');
        grid on;
        ```
        **Observation:** You should see a peak around 50 Hz. The width of the peak is related to the window size.

    *   **Larger Window Size (e.g., N = 512):**
        ```matlab
        N2 = 512;
        X2 = fft(x, N2);
        P2 = abs(X2/N2);
        P2 = P2(1:N2/2+1);
        P2(2:end-1) = 2*P2(2:end-1);
        f = fs*(0:(N2/2))/N2;
        
        figure;
        plot(f, P2);
        title('FFT Magnitude Spectrum (N=512)');
        xlabel('Frequency (Hz)');
        ylabel('Magnitude');
        grid on;
        ```
        **Observation:** The peak at 50 Hz will appear narrower and sharper, indicating better frequency resolution.

**Example 2: Sum of Two Sinusoids**

1.  **Generate the signal:**
    ```matlab
    fs = 1000;
    t = 0:1/fs:1-1/fs;
    f1 = 50;
    f2 = 120;
    x = sin(2*pi*f1*t) + 0.5*sin(2*pi*f2*t); % Sum of two sinusoids
    ```

2.  **Apply FFT with different window sizes:**

    *   **Small Window Size (e.g., N = 64):**
        ```matlab
        N1 = 64;
        X1 = fft(x, N1);
        P1 = abs(X1/N1);
        P1 = P1(1:N1/2+1);
        P1(2:end-1) = 2*P1(2:end-1);
        f = fs*(0:(N1/2))/N1;
        
        figure;
        plot(f, P1);
        title('FFT Magnitude Spectrum (N=64)');
        xlabel('Frequency (Hz)');
        ylabel('Magnitude');
        grid on;
        ```
        **Observation:** You might see two peaks, but they could be broadened. The relative amplitudes might also be slightly off due to leakage.

    *   **Larger Window Size (e.g., N = 512):**
        ```matlab
        N2 = 512;
        X2 = fft(x, N2);
        P2 = abs(X2/N2);
        P2 = P2(1:N2/2+1);
        P2(2:end-1) = 2*P2(2:end-1);
        f = fs*(0:(N2/2))/N2;
        
        figure;
        plot(f, P2);
        title('FFT Magnitude Spectrum (N=512)');
        xlabel('Frequency (Hz)');
        ylabel('Magnitude');
        grid on;
        ```
        **Observation:** The peaks at 50 Hz and 120 Hz should be much clearer and sharper. The peak at 50 Hz should be roughly twice the height of the peak at 120 Hz, reflecting the original amplitudes.

**Example 3: Analyzing a shorter segment with a longer window (demonstrating zero-padding)**

Suppose you have a longer signal and want to analyze a shorter portion, but still get a smooth spectrum.

1.  **Generate a longer signal:**
    ```matlab
    fs = 1000;
    t_long = 0:1/fs:5-1/fs; % 5 seconds of signal
    f1 = 75;
    f2 = 78; % Two close frequencies
    x_long = sin(2*pi*f1*t_long) + 0.7*sin(2*pi*f2*t_long);
    
    % Take a segment of length M=100 samples
    M = 100;
    x_segment = x_long(1:M);
    t_segment = t_long(1:M);
    ```

2.  **Apply FFT with a window size M (no zero-padding):**
    ```matlab
    N_M = M;
    X_M = fft(x_segment, N_M);
    P_M = abs(X_M/N_M);
    P_M = P_M(1:N_M/2+1);
    P_M(2:end-1) = 2*P_M(2:end-1);
    f_M = fs*(0:(N_M/2))/N_M;
    
    figure;
    plot(f_M, P_M);
    title('FFT Magnitude Spectrum (Segment Length M=100)');
    xlabel('Frequency (Hz)');
    ylabel('Magnitude');
    grid on;
    ```
    **Observation:** With $M=100$, the frequency resolution is $1000/100 = 10$ Hz. The two frequencies at 75 Hz and 78 Hz might not be clearly resolved.

3.  **Apply FFT with zero-padding (N=512) to the segment:**
    ```matlab
    N_padded = 512;
    X_padded = fft(x_segment, N_padded);
    P_padded = abs(X_padded/N_padded);
    P_padded = P_padded(1:N_padded/2+1);
    P_padded(2:end-1) = 2*P_padded(2:end-1);
    f_padded = fs*(0:(N_padded/2))/N_padded;
    
    figure;
    plot(f_padded, P_padded);
    title('FFT Magnitude Spectrum (Segment Length M=100, Padded to N=512)');
    xlabel('Frequency (Hz)');
    ylabel('Magnitude');
    grid on;
    ```
    **Observation:** The spectrum is smoother due to more frequency points. However, the *fundamental resolution* is still determined by the original segment length $M$. The two peaks at 75 Hz and 78 Hz might still be merged or poorly resolved because the data itself only supports that resolution. This demonstrates that zero-padding *interpolates* the spectrum but doesn't magically improve the inherent resolution. To resolve closer frequencies, you need a longer segment of the original signal.

### Connecting to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   This module requires generating sine waves, sums of sine waves, etc., directly aligning with this CO.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   By observing how changing window size affects the spectrum (resolution, amplitude accuracy), you are indirectly verifying DFT properties related to sampling in the frequency domain and the impact of the time-domain window.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   While this lab is typically software-based, the fundamental concepts of sampling, FFT, and spectral analysis are directly applicable to real-time DSP hardware. Understanding these software principles is a prerequisite for hardware implementation.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   The FFT is a key tool for analyzing Linear Time-Invariant (LTI) systems. The frequency response of an LTI system is obtained by taking the FFT of its impulse response. Understanding how to apply FFT correctly is crucial for this CO.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   FIR filters are designed based on their frequency response, which is obtained using the DFT/FFT. Understanding how the FFT reveals frequency content is essential for filter design.

### Practice Questions and Exercises

1.  **Generate a pure sine wave with frequency $f = 75$ Hz, sampling frequency $f_s = 500$ Hz, and duration $T = 0.5$ seconds. Apply the FFT with a window size $N=128$. Plot the single-sided magnitude spectrum. What is the frequency resolution of this FFT?**
    *   **Answer:**
        *   Signal generation: `fs = 500; T = 0.5; t = 0:1/fs:T-1/fs; f = 75; x = sin(2*pi*f*t);`
        *   FFT: `N = 128; X = fft(x, N); P = abs(X/N); P = P(1:N/2+1); P(2:end-1) = 2*P(2:end-1); f_axis = fs*(0:(N/2))/N; plot(f_axis, P);`
        *   Expected plot: A sharp peak around 75 Hz.
        *   Frequency Resolution: $f_s / N = 500 / 128 \approx 3.91$ Hz.

2.  **Using the same signal from Question 1, now apply the FFT with a window size $N=512$. Plot the single-sided magnitude spectrum. How does the spectrum change compared to the $N=128$ case? Is the frequency resolution improved in terms of distinguishing close frequencies?**
    *   **Answer:**
        *   FFT: `N = 512; X = fft(x, N); P = abs(X/N); P = P(1:N/2+1); P(2:end-1) = 2*P(2:end-1); f_axis = fs*(0:(N/2))/N; plot(f_axis, P);`
        *   Changes: The spectrum will appear smoother with more points. The peak at 75 Hz will still be there but might appear visually narrower due to the finer frequency grid (resolution of $500/512 \approx 0.98$ Hz). However, since the original signal segment is limited by time duration, the *fundamental ability to resolve* two very close frequencies is still limited by the original signal length and its dominant frequencies. For a pure sinusoid, it primarily demonstrates zero-padding's effect on smoothing.

3.  **Generate a signal that is the sum of two sine waves: $x(t) = \sin(2\pi \cdot 40t) + 0.8 \sin(2\pi \cdot 60t)$, with $f_s = 250$ Hz and $T = 1$ second. Apply the FFT with $N=256$. Plot the single-sided magnitude spectrum. Can you clearly distinguish the two frequency components?**
    *   **Answer:**
        *   Signal generation: `fs = 250; T = 1; t = 0:1/fs:T-1/fs; x = sin(2*pi*40*t) + 0.8*sin(2*pi*60*t);`
        *   FFT: `N = 256; X = fft(x, N); P = abs(X/N); P = P(1:N/2+1); P(2:end-1) = 2*P(2:end-1); f_axis = fs*(0:(N/2))/N; plot(f_axis, P);`
        *   Expected plot: Two distinct peaks around 40 Hz and 60 Hz.
        *   Distinguishing: Yes, with $f_s=250$ Hz and $N=256$, the frequency resolution is $250/256 \approx 0.976$ Hz, which is more than enough to separate 40 Hz and 60 Hz. The peak at 40 Hz should be slightly taller than the one at 60 Hz.

4.  **Consider the signal from Question 3. What happens if you reduce the window size to $N=32$ while keeping $f_s=250$ Hz and $T=1$ second? Plot the spectrum. What is the frequency resolution now? Are the components as well-resolved?**
    *   **Answer:**
        *   FFT: `N = 32; X = fft(x, N); P = abs(X/N); P = P(1:N/2+1); P(2:end-1) = 2*P(2:end-1); f_axis = fs*(0:(N/2))/N; plot(f_axis, P);`
        *   Frequency Resolution: $f_s / N = 250 / 32 = 7.8125$ Hz.
        *   Resolution: With this coarser resolution, the peaks at 40 Hz and 60 Hz might appear broader and less distinct. They will still be visible, but the ability to pinpoint their exact frequencies and resolve even closer frequencies would be diminished.

### Important Points to Remember

*   **Frequency Resolution is Tied to Time Duration:** The fundamental frequency resolution of an FFT is inversely proportional to the duration of the signal segment analyzed ($T_{segment}$). Resolution $\Delta f \approx 1/T_{segment}$. Increasing the FFT *point count* ($N$) by zero-padding interpolates the spectrum but does not improve this fundamental resolution if the original segment is not long enough.
*   **Sampling Frequency Dictates the Spectrum Range:** The FFT output frequencies range from 0 to $f_s$. The frequency bins are at $k \cdot f_s/N$.
*   **Windowing Function (Implicit Rectangular):** Without explicit windowing, the `fft` function effectively multiplies the signal by a rectangular window, which can cause spectral leakage if the signal within the window is not periodic with the window length.
*   **Single-Sided vs. Double-Sided Spectrum:** For real signals, the FFT is conjugate symmetric ($X[k] = X^*[N-k]$). Therefore, the information in the second half of the spectrum (from $f_s/2$ to $f_s$) is redundant. It's common practice to plot the single-sided spectrum, which shows frequencies from 0 to $f_s/2$ and doubles the magnitudes for non-DC/Nyquist components to account for the energy in the mirrored half.
*   **Normalization:** When plotting magnitude spectra, it's common to normalize by $N$ (or $N/2$ for single-sided spectra) to get an estimate of the amplitude of the underlying sinusoids.

### Further Exploration (Advanced Topics)

*   **Windowing Functions:** Experiment with applying different windowing functions (Hann, Hamming, Blackman) to the same signal segment and observe their impact on spectral leakage and resolution. This is crucial for real-world spectral analysis.
*   **Non-Power-of-2 FFT:** Investigate how FFT implementations handle window sizes that are not powers of 2.
*   **Autocorrelation and Power Spectral Density (PSD):** Relate the FFT to the concept of PSD via the Wiener-Khinchin theorem.

This comprehensive set of notes provides a strong foundation for understanding and applying the FFT with varying window sizes in your Digital Signal Processing Lab. Remember to critically analyze your results and connect them back to the theoretical concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
