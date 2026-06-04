---
title: "Observe the low pass response in the simulator."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec54"
status: "completed"
scrapedAt: "2026-05-23T17:56:14.860Z"
---
# DIGITAL SIGNAL PROCESSING LAB

## Module 7: FIR Low-Pass Filter

### Topic: Observe the Low-Pass Response in the Simulator

---

### 1. Introduction to Low-Pass Filters

**Definition:** A low-pass filter (LPF) is a type of filter that passes signals with a frequency lower than a certain cutoff frequency and attenuates (reduces the amplitude of) signals with frequencies higher than the cutoff frequency.

**Purpose:** In digital signal processing, LPFs are used for various purposes, including:
*   **Noise Reduction:** Removing high-frequency noise from a signal.
*   **Smoothing:** Creating a smoother version of a signal by attenuating rapid variations.
*   **Signal Reconstruction:** In certain applications, LPFs are used to reconstruct an analog signal from its digital samples.
*   **Anti-aliasing:** In analog-to-digital conversion, LPFs are used before sampling to prevent aliasing.

**Relationship to Course Outcomes:**
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** This module directly contributes to the ability to design and implement FIR LPFs. Observing the response in a simulator is a crucial step in verifying the design.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** FIR filters are a class of Linear Time-Invariant (LTI) systems. Understanding their response is fundamental to implementing LTI systems.

---

### 2. Key Concepts and Definitions

#### 2.1 Digital Filters

**Definition:** A digital filter is a system that modifies a digital signal in a desired way. It operates on discrete-time signals and produces a discrete-time output.

#### 2.2 Finite Impulse Response (FIR) Filters

**Definition:** FIR filters are digital filters whose impulse response is of finite duration. This means that the output of an FIR filter depends only on a finite number of past input samples and their weighted coefficients.
*   **Mathematical Representation:**
    $$ y[n] = \sum_{k=0}^{M-1} b_k x[n-k] $$
    where:
    *   $y[n]$ is the output signal at time $n$.
    *   $x[n]$ is the input signal at time $n$.
    *   $b_k$ are the filter coefficients (taps).
    *   $M$ is the order of the filter (number of coefficients).
*   **Advantages:**
    *   Always stable.
    *   Can have perfectly linear phase response, which is important for preserving the shape of signals.
*   **Disadvantages:**
    *   Typically require a higher order (more coefficients) to achieve sharp frequency selectivity compared to Infinite Impulse Response (IIR) filters, leading to higher computational complexity and latency.

#### 2.3 Frequency Response

**Definition:** The frequency response of a digital filter describes how the filter affects sinusoidal signals of different frequencies. It is typically represented by its magnitude response and phase response.
*   **Magnitude Response:** $|H(e^{j\omega})|$ describes how the amplitude of a sinusoidal input at frequency $\omega$ is scaled by the filter.
*   **Phase Response:** $\angle H(e^{j\omega})$ describes how the phase of a sinusoidal input at frequency $\omega$ is shifted by the filter.

#### 2.4 Ideal vs. Practical Low-Pass Filter

*   **Ideal LPF:**
    *   Has a perfectly sharp transition between the passband (frequencies to be passed) and the stopband (frequencies to be attenuated).
    *   The magnitude response is unity in the passband and zero in the stopband.
    *   Has a linear phase response.
    *   **Problem:** An ideal LPF cannot be realized in practice because its impulse response is non-causal and infinite in duration (Gibbs phenomenon).

*   **Practical LPF:**
    *   Has a gradual transition between the passband and stopband, characterized by a transition band.
    *   The magnitude response is close to unity in the passband and close to zero in the stopband.
    *   The phase response is usually designed to be linear within the passband to avoid phase distortion.

#### 2.5 Cutoff Frequency ($f_c$ or $\omega_c$)

**Definition:** The cutoff frequency is a characteristic parameter of a filter that defines the boundary between the passband and the stopband.
*   **Digital Cutoff Frequency:** Usually specified in normalized angular frequency, $\omega_c$, where $\omega = 2\pi f / f_s$ and $f_s$ is the sampling frequency. The range of normalized angular frequency is $[0, \pi]$.
*   **-3 dB Cutoff Frequency:** A common definition where the power of the signal is halved, or the magnitude response is $1/\sqrt{2} \approx 0.707$ times its maximum value.

#### 2.6 Passband and Stopband

*   **Passband:** The range of frequencies that are allowed to pass through the filter with minimal attenuation.
*   **Stopband:** The range of frequencies that are significantly attenuated by the filter.
*   **Transition Band:** The range of frequencies between the passband and the stopband, where the filter's attenuation gradually increases.

#### 2.7 Windowing Method for FIR Filter Design

**Concept:** The windowing method is a common technique for designing FIR filters. It involves choosing an ideal filter's impulse response and then truncating it to a finite length using a window function. This truncation introduces ripples in the frequency response (Gibbs phenomenon), which can be controlled by the choice of the window function.
*   **Textbook Reference:** Ingle & Proakis (3rd Ed.) and Oppenheim & Schafer (4th Ed.) provide detailed discussions on various window functions (e.g., rectangular, Hanning, Hamming, Blackman, Kaiser) and their trade-offs between transition bandwidth and stopband attenuation.

---

### 3. Observing the Low-Pass Response in a Simulator

**Objective:** To visually confirm that a designed FIR low-pass filter exhibits the expected behavior: passing low frequencies and attenuating high frequencies.

**Tools:**
*   **MATLAB/Octave:** Widely used for signal processing tasks. Functions like `fir1`, `freqz`, `filter` are invaluable.
*   **Python (SciPy/NumPy):** Provides powerful libraries for DSP. `scipy.signal.firwin`, `scipy.signal.freqz`, `scipy.signal.lfilter` are common.
*   **Simulators:** Integrated Development Environments (IDEs) that allow for code execution and visualization.

#### 3.1 Simulation Steps (General Approach)

1.  **Design the FIR Low-Pass Filter:**
    *   Specify desired characteristics:
        *   Filter order ($M$).
        *   Cutoff frequency ($\omega_c$ or $f_c$).
        *   Window function (e.g., Hamming, Hanning).
    *   Use design functions (e.g., `fir1` in MATLAB, `firwin` in Python) to obtain the filter coefficients ($b_k$).

2.  **Analyze the Frequency Response:**
    *   Use the frequency response function (e.g., `freqz` in MATLAB/Python) to compute the magnitude and phase response of the designed filter.
    *   Plot the magnitude response (typically in dB) against normalized frequency or actual frequency.
    *   Identify the passband, stopband, and transition band. Observe the cutoff frequency.

3.  **Test with Input Signals:**
    *   Generate input signals containing different frequencies:
        *   A low-frequency sinusoid (within the expected passband).
        *   A high-frequency sinusoid (within the expected stopband).
        *   A signal containing a mixture of low and high frequencies (e.g., a chirp signal or a sum of sinusoids).
    *   Apply the designed filter to these input signals using the filtering function (e.g., `filter` in MATLAB, `lfilter` in Python).

4.  **Observe the Output:**
    *   Analyze the filtered output signals:
        *   The low-frequency component should be passed with minimal attenuation.
        *   The high-frequency component should be significantly attenuated.
        *   The mixed signal should have its high-frequency components reduced.
    *   Compare the frequency content of the input and output signals (e.g., using FFT).

---

### 4. Practical Example (using MATLAB/Octave syntax)

Let's design a simple FIR low-pass filter and observe its response.

**Scenario:**
*   Sampling Frequency ($f_s$): 1000 Hz
*   Cutoff Frequency ($f_c$): 100 Hz
*   Filter Order ($M-1$): 50 (resulting in $M=51$ coefficients)
*   Window Function: Hamming

**Steps:**

**Step 1: Design the FIR Low-Pass Filter**

```matlab
% Parameters
fs = 1000;        % Sampling frequency (Hz)
fc = 100;         % Cutoff frequency (Hz)
order = 50;       % Filter order (M-1)
num_coeffs = order + 1; % Number of coefficients (M)

% Normalized cutoff frequency
f_nyquist = fs / 2;
normalized_fc = fc / f_nyquist;

% Design the FIR low-pass filter using the Hamming window
% fir1(N, Wn, ftype) N is the order, Wn is normalized cutoff
b = fir1(order, normalized_fc, 'low', hamming(num_coeffs));
```

**Step 2: Analyze the Frequency Response**

```matlab
% Analyze frequency response
[H, W] = freqz(b, 1, 1024, fs); % Compute frequency response

% Plot Magnitude Response
figure;
plot(W, 20*log10(abs(H)));
title('Magnitude Response of FIR Low-Pass Filter');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
xline(fc, '--r', 'Cutoff Frequency'); % Mark cutoff frequency
xline(f_nyquist, '--k', 'Nyquist Frequency'); % Mark Nyquist frequency

% Plot Phase Response (optional but good practice)
figure;
plot(W, unwrap(angle(H)));
title('Phase Response of FIR Low-Pass Filter');
xlabel('Frequency (Hz)');
ylabel('Phase (radians)');
grid on;
```

**Expected Observation (Magnitude Response):**
*   The plot will show a passband from 0 Hz up to around 100 Hz, where the magnitude is close to 0 dB (unity gain).
*   There will be a transition band between approximately 100 Hz and some higher frequency.
*   The stopband will start beyond the transition band, where the magnitude will be significantly below 0 dB, indicating attenuation.
*   The cutoff frequency will be clearly marked around 100 Hz, where the gain is approximately -3 dB.

**Step 3: Test with Input Signals**

```matlab
% Generate test signals
t = 0:1/fs:1-1/fs; % Time vector for 1 second

freq_low = 50;    % Low frequency (in passband)
freq_high = 250;  % High frequency (in stopband)

signal_low = sin(2*pi*freq_low*t);
signal_high = sin(2*pi*freq_high*t);
signal_mixed = signal_low + 0.5*signal_high; % Mixed signal

% Apply the filter
filtered_low = filter(b, 1, signal_low);
filtered_high = filter(b, 1, signal_high);
filtered_mixed = filter(b, 1, signal_mixed);

% Plot original and filtered signals
figure;
subplot(3,1,1);
plot(t, signal_low); hold on; plot(t, filtered_low);
title('Low Frequency Signal (50 Hz)');
legend('Original', 'Filtered');

subplot(3,1,2);
plot(t, signal_high); hold on; plot(t, filtered_high);
title('High Frequency Signal (250 Hz)');
legend('Original', 'Filtered');

subplot(3,1,3);
plot(t, signal_mixed); hold on; plot(t, filtered_mixed);
title('Mixed Signal (50 Hz + 250 Hz)');
legend('Original', 'Filtered');
xlabel('Time (s)');
```

**Step 4: Observe the Output**

**Expected Observations:**
*   **Low-frequency signal (50 Hz):** The filtered output will be very similar to the original input, with minimal change in amplitude.
*   **High-frequency signal (250 Hz):** The filtered output will show a significantly reduced amplitude compared to the original input, demonstrating attenuation. There might be some initial transient behavior before the filter settles.
*   **Mixed signal:** The output will primarily contain the 50 Hz component, with the 250 Hz component being substantially reduced. The overall waveform will appear smoother, reflecting the removal of the high-frequency content.

**Further Analysis (Optional but Recommended):**
*   Use the Fast Fourier Transform (FFT) to analyze the frequency content of the original and filtered signals to quantitatively show the reduction in the high-frequency component.

```matlab
% FFT Analysis (for the mixed signal)
N_fft = 1024; % Number of FFT points
Y_mixed = fft(signal_mixed, N_fft);
Y_filtered_mixed = fft(filtered_mixed, N_fft);
f_axis = (0:N_fft-1)*(fs/N_fft);

figure;
subplot(2,1,1);
plot(f_axis, 20*log10(abs(Y_mixed)));
title('FFT of Original Mixed Signal');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
xlim([0 fs/2]); % Limit to Nyquist frequency

subplot(2,1,2);
plot(f_axis, 20*log10(abs(Y_filtered_mixed)));
title('FFT of Filtered Mixed Signal');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
xlim([0 fs/2]); % Limit to Nyquist frequency
```

**Expected FFT Observation:**
*   The original mixed signal's FFT will show peaks at 50 Hz and 250 Hz.
*   The filtered mixed signal's FFT will show a prominent peak at 50 Hz with a significantly lower amplitude, and the peak at 250 Hz will be heavily attenuated or almost non-existent.

---

### 5. Connecting to Textbooks and Course Outcomes

*   **Ingle & Proakis, "Digital Signal Processing using Matlab"**: This textbook is highly relevant. Chapter 6 likely covers FIR filter design, including the window method, and Chapter 4 might discuss frequency response analysis using tools like `freqz`. The practical simulation steps directly align with applying concepts from these chapters.
*   **Downey, "Think DSP: Digital Signal Processing using Python"**: This book provides a Python-centric approach. Concepts of filters, frequency response, and implementation using Python libraries like SciPy are covered, making it a valuable resource for translating the simulation steps into Python code.
*   **Chassaing, "DSP applications using C and the TMS320C6x DSK"**: While more hardware-focused, the principles of filter design and their expected frequency response are universal. This book helps understand the practical implementation aspects on DSP hardware, which builds upon the simulation observations.
*   **Oppenheim & Schafer, "Discrete-Time Signal Processing"**: This is a foundational text. Chapters on FIR filter design (e.g., window methods) and frequency analysis are essential for a deep understanding of why the filters behave as they do.

**Alignment with Course Outcomes:**
*   **CO5 (Design and Implement FIR low-pass filters):** This entire exercise is a demonstration of CO5. Designing the filter (using `fir1`/`firwin`) and implementing its application on test signals validates the design. Observing the frequency response is key to understanding the implementation's success.
*   **CO4 (Implement LTI systems):** The FIR filter is an LTI system. Applying it to signals and observing the output demonstrates the implementation of an LTI system and how its characteristics (low-pass behavior) affect different input frequencies.
*   **CO1 (Generate basic signal waveforms):** Generating the sinusoidal test signals is an application of CO1.
*   **CO2 (Verify the properties of DFT):** Analyzing the output using FFT implicitly verifies DFT properties by allowing us to see the frequency-domain representation of the filtered signals.

---

### 6. Important Points to Remember

*   **Normalized Frequency:** When using design functions like `fir1` or `firwin`, the cutoff frequency is often specified as a normalized value between 0 and 1 (representing 0 to the Nyquist frequency). Always be mindful of your sampling frequency.
*   **Filter Order:** A higher filter order generally leads to a sharper transition band and better stopband attenuation, but at the cost of increased computational complexity and latency.
*   **Window Function Choice:** Different window functions offer trade-offs between the width of the transition band and the level of stopband attenuation. Hamming and Hanning windows are good general-purpose choices, while Blackman offers better stopband attenuation at the expense of a wider transition band.
*   **Transient Response:** When filtering signals, especially short ones, the beginning of the output signal might not fully represent the steady-state frequency response due to the filter's transient behavior.
*   **Verification:** Always verify your filter design by examining its frequency response (`freqz`) and by testing it with representative input signals.

---

### 7. Practice Questions and Exercises

**Question 1:**
Design an FIR low-pass filter with the following specifications:
*   Sampling Frequency ($f_s$): 8000 Hz
*   Cutoff Frequency ($f_c$): 1000 Hz
*   Filter Order ($M-1$): 60
*   Window Function: Hanning

Then, plot its magnitude response and explain what the plot shows regarding the filter's low-pass characteristic.

**Answer 1:**

```matlab
% Parameters
fs_q1 = 8000;        % Sampling frequency (Hz)
fc_q1 = 1000;        % Cutoff frequency (Hz)
order_q1 = 60;       % Filter order (M-1)
num_coeffs_q1 = order_q1 + 1; % Number of coefficients (M)

% Normalized cutoff frequency
f_nyquist_q1 = fs_q1 / 2;
normalized_fc_q1 = fc_q1 / f_nyquist_q1;

% Design the FIR low-pass filter using the Hanning window
b_q1 = fir1(order_q1, normalized_fc_q1, 'low', hanning(num_coeffs_q1));

% Analyze frequency response
[H_q1, W_q1] = freqz(b_q1, 1, 1024, fs_q1); % Compute frequency response

% Plot Magnitude Response
figure;
plot(W_q1, 20*log10(abs(H_q1)));
title('Magnitude Response of FIR Low-Pass Filter (Question 1)');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
xline(fc_q1, '--r', 'Cutoff Frequency');
xline(f_nyquist_q1, '--k', 'Nyquist Frequency');
```

**Explanation of Plot:**
The magnitude response plot will show that frequencies from 0 Hz up to approximately 1000 Hz have a gain close to 0 dB (meaning they are passed through with little attenuation). Beyond 1000 Hz, there will be a transition band where the gain drops. After the transition band, the gain will be significantly lower (more negative dB values), indicating that frequencies above the cutoff are attenuated, confirming the low-pass behavior. The cutoff frequency is marked at 1000 Hz where the gain is approximately -3 dB.

**Question 2:**
Consider a signal composed of two sinusoids: one at 200 Hz and another at 3000 Hz, sampled at 8000 Hz. If you apply the filter designed in Question 1 to this signal, what would you expect the output signal to look like? Justify your answer based on the filter's frequency response.

**Answer 2:**
The filter designed in Question 1 has a cutoff frequency of 1000 Hz.
*   The 200 Hz sinusoid is well within the passband of the filter (200 Hz < 1000 Hz). Therefore, it will be passed through to the output with very little attenuation, retaining its original amplitude and phase (assuming linear phase).
*   The 3000 Hz sinusoid is in the stopband of the filter (3000 Hz > 1000 Hz). Therefore, it will be significantly attenuated by the filter, meaning its amplitude in the output signal will be much smaller than its amplitude in the input signal.

**Expected Output:** The output signal will primarily consist of the 200 Hz sinusoid, with the 3000 Hz sinusoid being greatly reduced in amplitude. It will sound much cleaner and less "noisy" if the 3000 Hz component was considered noise.

---
This comprehensive set of notes covers the theoretical underpinnings of FIR low-pass filters, practical simulation steps, code examples, and links back to the course objectives and recommended readings, aiming to provide a thorough understanding of how to observe and interpret the low-pass response in a simulator.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
