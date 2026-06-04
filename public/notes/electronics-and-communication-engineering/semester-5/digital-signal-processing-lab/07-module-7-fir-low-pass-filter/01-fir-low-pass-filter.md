---
title: "FIR low pass filter"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec50"
status: "completed"
scrapedAt: "2026-05-23T17:56:11.992Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 7 - FIR Low Pass Filter

## Topic: FIR Low Pass Filter

---

### **1. Introduction to FIR Low Pass Filters**

**Definition:** A Finite Impulse Response (FIR) filter is a digital filter characterized by an impulse response that is of finite duration. In simpler terms, the output of an FIR filter depends only on the current and a finite number of past input samples. This makes them inherently stable and allows for linear phase response, which is crucial in many signal processing applications.

**Low Pass Filter (LPF):** A low pass filter is a type of filter that allows signals with a frequency lower than a certain cutoff frequency to pass through, while attenuating (reducing the amplitude of) signals with frequencies higher than the cutoff frequency.

**Purpose in DSP:** FIR low pass filters are widely used for:
*   **Noise Reduction:** Removing high-frequency noise from a signal.
*   **Signal Smoothing:** Producing a smoother version of a signal.
*   **Band Limiting:** Restricting the bandwidth of a signal to a desired range.
*   **Anti-aliasing:** Preventing aliasing distortion during analog-to-digital conversion.

**FIR Filter Structure:**
An FIR filter is characterized by its impulse response, denoted by $h[n]$. The output $y[n]$ of an FIR filter for an input signal $x[n]$ is given by the convolution sum:
$y[n] = x[n] * h[n] = \sum_{k=0}^{M-1} h[k] x[n-k]$
where:
*   $M$ is the order of the filter (number of taps).
*   $h[k]$ are the filter coefficients.
*   $x[n-k]$ are past input samples.

**Key Advantage:** FIR filters can be designed to have perfectly linear phase response. This means that all frequency components of the signal are delayed by the same amount of time, preserving the waveform shape.

---

### **2. Designing FIR Low Pass Filters**

The design of an FIR filter involves determining the filter coefficients $h[k]$ that meet specific frequency response specifications. Common specifications for a low pass filter include:
*   **Passband Edge Frequency ($F_p$):** The highest frequency that should be passed with minimal attenuation.
*   **Passband Ripple ($\delta_p$):** The maximum allowable variation in amplitude within the passband.
*   **Stopband Edge Frequency ($F_s$):** The lowest frequency that should be significantly attenuated.
*   **Stopband Attenuation ($\delta_s$):** The minimum required attenuation in the stopband.
*   **Sampling Frequency ($F_{sampling}$):** The rate at which the signal is sampled.

**Key Concepts for Design:**
*   **Normalized Cutoff Frequency ($\omega_c$):** Often specified in radians per sample or Hz.
    *   $\omega_c = 2 \pi \frac{F_c}{F_{sampling}}$ (where $F_c$ is the cutoff frequency in Hz)
*   **Filter Order ($M$):** Determines the filter's sharpness of transition between passband and stopband, and the complexity of implementation. Higher order generally leads to sharper transitions but increased computational cost.

**Design Methods:**

**a) Window Method (Commonly used in labs):**
This is a practical and intuitive method for designing FIR filters. It involves taking an ideal low pass filter's impulse response (which is infinitely long and non-causal) and multiplying it by a finite-length window function. This truncation effectively makes the filter FIR.

**Ideal Low Pass Filter Impulse Response:**
The impulse response of an ideal low pass filter with cutoff frequency $\omega_c$ is:
$h_{ideal}[n] = \frac{\omega_c}{\pi} \text{sinc} \left( \frac{\omega_c (n - (M-1)/2)}{\pi} \right)$
where $\text{sinc}(x) = \frac{\sin(x)}{x}$. The term $(n - (M-1)/2)$ is used to make the impulse response causal and symmetric, centering it around $(M-1)/2$.

**Window Functions:**
The choice of window function affects the trade-off between transition band width and stopband attenuation.

| Window Function | Characteristics                                                                                                                                                                                              |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rectangular** | **Pros:** Narrowest transition band. **Cons:** Highest stopband ripple (sidelobe level).                                                                                                                   |
| **Bartlett**    | Simpler to implement, better than rectangular but not as good as others.                                                                                                                                     |
| **Hanning**     | Good balance between transition band width and stopband attenuation. Sidelobe levels decrease faster than rectangular.                                                                                       |
| **Hamming**     | Slightly wider transition band than Hanning, but offers better stopband attenuation.                                                                                                                         |
| **Blackman**    | Widest transition band among common windows, but offers the best stopband attenuation.                                                                                                                         |
| **Kaiser**      | **Pros:** Offers a controllable trade-off between transition band width and stopband attenuation via a parameter $\beta$. **Cons:** More complex to calculate coefficients compared to fixed windows. |

**Design Steps (Window Method):**

1.  **Determine Desired Specifications:** Define $F_p$, $F_s$, passband ripple, stopband attenuation, and $F_{sampling}$.
2.  **Determine Filter Order (M):** This is crucial. Various empirical formulas exist based on the window function and desired specifications. For instance, for Hamming or Hanning windows:
    *   Transition Bandwidth $\Delta\omega \approx \frac{8\pi}{M}$ (radians/sample)
    *   $\Delta f = F_s - F_p$
    *   $\Delta\omega = 2\pi \frac{\Delta f}{F_{sampling}}$
    *   $M \approx \frac{8\pi}{2\pi \frac{F_s - F_p}{F_{sampling}}} = \frac{4 F_{sampling}}{F_s - F_p}$ (A common approximation, often needs adjustment)
    *   **More precise formulas exist for specific windows and are often provided by software tools.** (Refer to Ingle & Proakis for detailed formulas).
3.  **Choose a Window Function:** Based on the required trade-off between transition band sharpness and stopband attenuation.
4.  **Determine the Cutoff Frequency ($\omega_c$):**
    *   Often, the cutoff frequency is chosen to be midway between $F_p$ and $F_s$ in the normalized frequency domain.
    *   $\omega_c = \frac{\omega_p + \omega_s}{2}$, where $\omega_p = 2\pi \frac{F_p}{F_{sampling}}$ and $\omega_s = 2\pi \frac{F_s}{F_{sampling}}$.
5.  **Calculate Ideal Impulse Response Coefficients:**
    *   $h_{ideal}[n] = \frac{\omega_c}{\pi} \text{sinc} \left( \frac{\omega_c (n - (M-1)/2)}{\pi} \right)$ for $n = 0, 1, \dots, M-1$.
6.  **Multiply by the Window Function:**
    *   $h[n] = h_{ideal}[n] \cdot w[n]$, where $w[n]$ is the chosen window function.

**b) Parks-McClellan Algorithm (Equiripple Design):**
This is an optimization-based method that designs filters to meet specifications with minimum order or to minimize the maximum error in the passband and stopband (equiripple behavior). While more complex to implement manually, it generally yields more efficient filters (lower order for the same performance).
*   **Reference:** Covered in detail in Ingle & Proakis (Chapter 6) and Oppenheim & Schafer.

---

### **3. Implementing FIR Low Pass Filters**

**a) In Software (MATLAB/Python):**

*   **MATLAB:**
    *   `fir1(N, Wn, type, window)`: Designs a filter of order `N`. `Wn` is the normalized cutoff frequency (0 to 1, where 1 is Nyquist frequency). `type` can be 'low', 'high', 'bandpass', 'stop'. `window` specifies the window function (e.g., `hamming(N+1)`, `hann(N+1)`, `kaiser(N+1, beta)`).
    *   `firpm(N, f, a, w, p)`: Implements the Parks-McClellan algorithm.
    *   **Example (MATLAB):**
        ```matlab
        Fs = 1000;            % Sampling frequency (Hz)
        Fpass = 100;          % Passband edge frequency (Hz)
        Fstop = 150;          % Stopband edge frequency (Hz)
        Fsmooth = 0.1;        % Smoothness of the transition band (related to order)

        % Design using fir1 (Hamming window)
        Wn_pass = Fpass / (Fs/2); % Normalized cutoff for passband edge
        Wn_stop = Fstop / (Fs/2); % Normalized cutoff for stopband edge

        % Estimate order (simplified formula, often better to use fdesign.lowpass in DSP System Toolbox)
        order = ceil(4 * Fs / (Fstop - Fpass));
        if mod(order, 2) == 0 % Ensure odd order for symmetric filter design
            order = order + 1;
        end

        % Choose a cutoff frequency, e.g., halfway between pass and stop
        Wn_cutoff = (Fpass + Fstop) / (2 * (Fs/2));

        b = fir1(order, Wn_cutoff, 'low', hamming(order+1));

        % Plot frequency response
        freqz(b, 1, 1024, Fs);
        title('Frequency Response of FIR Low Pass Filter (Hamming)');

        % Applying the filter to a signal
        t = 0:1/Fs:1;
        signal = 0.5*sin(2*pi*50*t) + 0.2*sin(2*pi*200*t) + 0.1*randn(size(t)); % Signal with low and high freq components and noise
        filtered_signal = filter(b, 1, signal);

        figure;
        subplot(2,1,1); plot(t, signal); title('Original Signal'); xlabel('Time (s)'); ylabel('Amplitude');
        subplot(2,1,2); plot(t, filtered_signal); title('Filtered Signal'); xlabel('Time (s)'); ylabel('Amplitude');
        ```

*   **Python (SciPy):**
    *   `scipy.signal.firwin(numtaps, cutoff, window='hamming', pass_zero=True)`: Designs an FIR filter. `numtaps` is the filter order + 1. `cutoff` is the normalized cutoff frequency (0 to 1, where 1 is Nyquist frequency). `pass_zero=True` for low pass.
    *   `scipy.signal.remez(numtaps, bands, desired, weight, type='fir', pass_zero=True)`: Implements the Parks-McClellan algorithm.
    *   **Example (Python):**
        ```python
        import numpy as np
        import matplotlib.pyplot as plt
        from scipy.signal import firwin, freqz, filtfilt

        Fs = 1000  # Sampling frequency in Hz
        Fpass = 100 # Passband edge frequency in Hz
        Fstop = 150 # Stopband edge frequency in Hz

        # Calculate filter order (simplified estimation)
        order = int(np.ceil(4 * Fs / (Fstop - Fpass)))
        if order % 2 == 0:
            order += 1 # Ensure odd order for symmetric filter design

        # Normalize cutoff frequency to Nyquist frequency (Fs/2)
        cutoff_norm = (Fpass + Fstop) / 2 / (Fs / 2)

        # Design the FIR filter using the firwin function (Hamming window)
        # numtaps is order + 1
        b = firwin(order + 1, cutoff_norm, window='hamming', pass_zero='lowpass')

        # Plot frequency response
        w, h = freqz(b, 1, worN=8000, fs=Fs)
        plt.figure()
        plt.plot(w, 20 * np.log10(abs(h)))
        plt.title('Frequency Response of FIR Low Pass Filter (Hamming)')
        plt.xlabel('Frequency (Hz)')
        plt.ylabel('Magnitude (dB)')
        plt.grid(True)

        # Apply the filter to a signal
        t = np.arange(0, 1, 1/Fs)
        signal = 0.5*np.sin(2*np.pi*50*t) + 0.2*np.sin(2*np.pi*200*t) + 0.1*np.random.randn(len(t)) # Signal with low and high freq components and noise
        filtered_signal = filtfilt(b, 1, signal) # filtfilt applies forward and backward to avoid phase distortion

        plt.figure()
        plt.subplot(2,1,1)
        plt.plot(t, signal)
        plt.title('Original Signal')
        plt.xlabel('Time (s)')
        plt.ylabel('Amplitude')
        plt.subplot(2,1,2)
        plt.plot(t, filtered_signal)
        plt.title('Filtered Signal')
        plt.xlabel('Time (s)')
        plt.ylabel('Amplitude')
        plt.tight_layout()
        plt.show()
        ```

**b) Hardware Implementation (TMS320C6x DSK):**
*   **Concept:** The convolution sum $y[n] = \sum_{k=0}^{M-1} h[k] x[n-k]$ forms the basis of FIR filter implementation.
*   **Process:**
    1.  **Load Coefficients:** The designed FIR filter coefficients ($h[k]$) are loaded into memory (e.g., on the DSP's internal RAM or external memory).
    2.  **Data Acquisition:** Input samples ($x[n]$) are acquired from an ADC.
    3.  **Shift Register:** A delay line (or shift register) is used to store past input samples ($x[n-1], x[n-2], \dots, x[n-M+1]$).
    4.  **Multiply-Accumulate (MAC):** Each current input sample $x[n-k]$ is multiplied by its corresponding coefficient $h[k]$, and the results are accumulated to form the output $y[n]$.
    5.  **Output:** The computed output $y[n]$ is sent to a DAC or used for further processing.
*   **TMS320C6x Architecture:**
    *   The C6x DSP family features a VLIW (Very Long Instruction Word) architecture with multiple functional units, including multipliers and adders, allowing for parallel execution of instructions.
    *   Special instructions like `dotp` (dot product) can efficiently compute the MAC operations required for FIR filters.
    *   **Reference:** Chassaing's "DSP applications using C and the TMS320C6x DSK" provides detailed examples and code for implementing FIR filters on the DSK. It emphasizes fixed-point arithmetic and efficient coding techniques.

---

### **4. Understanding the Frequency Response**

**Magnitude Response:** Shows how the filter affects the amplitude of different frequency components. For a low pass filter, the magnitude response should be close to 1 in the passband and close to 0 in the stopband.

**Phase Response:** Shows how the filter affects the phase of different frequency components.
*   **Linear Phase:** For an FIR filter with symmetric coefficients, the phase response is linear. This means all frequencies are delayed by the same amount of time.
    *   $\phi(\omega) = -\alpha \omega$
    *   The delay is given by $\tau = -\frac{d\phi(\omega)}{d\omega} = \alpha$.
    *   For a causal symmetric FIR filter of order $M-1$, the center of symmetry is at $(M-1)/2$, and the phase delay is often approximated as $\alpha = (M-1)/2$ samples.
*   **Non-Linear Phase:** For filters with asymmetric coefficients or non-symmetric impulse response, the phase response is non-linear, leading to phase distortion.

**Key Tools for Analysis:**
*   **`freqz` (MATLAB) / `scipy.signal.freqz` (Python):** Computes and plots the frequency response of a digital filter. It's essential for verifying if the designed filter meets the specifications.

---

### **5. Learning Outcomes Alignment**

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While not directly focused on waveform generation, understanding the effect of an LPF on a signal composed of different frequencies (as in the examples) implicitly involves understanding signal components.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** The frequency response analysis using `freqz` relies on the Discrete Fourier Transform (DFT) to analyze the filter's behavior across frequencies. Understanding how the filter affects different frequency components is related to DFT properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** Module 7, especially when referencing Chassaing, directly addresses hardware implementation on platforms like the TMS320C6x DSK, detailing how filters are realized in real-time and interfaced with analog-to-digital converters (ADCs) and digital-to-analog converters (DACs).
*   **CO4: Implement LTI systems (Knowledge Level: K3):** FIR filters are a specific type of Linear Time-Invariant (LTI) system. This module covers the design and implementation (both software and hardware) of these systems, demonstrating how to realize their input-output relationship.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** This is the core outcome of the module, covering the complete process from understanding filter specifications, choosing design methods (windowing, Parks-McClellan), calculating coefficients, and implementing the filter in software and hardware.

---

### **6. Important Points to Remember**

*   **Stability:** FIR filters are always stable.
*   **Linear Phase:** FIR filters can achieve linear phase by using symmetric coefficients, which is crucial for preserving waveform shape.
*   **Filter Order:** The order of the FIR filter dictates the sharpness of the transition band and the stopband attenuation. Higher order means sharper transition but more computation.
*   **Window Method:** A practical approach for FIR design, balancing transition width and stopband attenuation through window function choice.
*   **Parks-McClellan:** An optimization method yielding more efficient filters (lower order for given specs).
*   **`freqz`:** Your go-to function for analyzing the magnitude and phase response of your designed filter to ensure it meets specifications.
*   **Hardware Implementation:** Involves efficient MAC operations, often leveraging specialized DSP instructions and careful memory management.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Design an FIR low pass filter with the following specifications:
*   Sampling Frequency ($F_{sampling}$): 1000 Hz
*   Passband Edge Frequency ($F_p$): 100 Hz
*   Stopband Edge Frequency ($F_s$): 150 Hz
*   Passband Ripple: 1 dB
*   Stopband Attenuation: 40 dB

Use the **Window Method** with a **Hamming window**.
a) Estimate the required filter order.
b) Calculate the normalized cutoff frequency.
c) Write MATLAB/Python code to design the filter coefficients.
d) Plot the frequency response and verify if the specifications are met.

**Answer 1:**

a) **Estimating Filter Order:**
A common rule of thumb for Hamming window for transition band: $\Delta\omega \approx \frac{8\pi}{M}$ radians/sample.
Transition bandwidth in Hz: $\Delta f = F_s - F_p = 150 - 100 = 50$ Hz.
Normalized transition bandwidth: $\Delta\omega = 2\pi \frac{\Delta f}{F_{sampling}} = 2\pi \frac{50}{1000} = \frac{\pi}{10}$ radians/sample.
So, $\frac{\pi}{10} \approx \frac{8\pi}{M} \implies M \approx 80$.
Using the approximation $M \approx \frac{4 F_{sampling}}{F_s - F_p} = \frac{4 \times 1000}{150 - 100} = \frac{4000}{50} = 80$.
However, for practical design and to meet attenuation requirements, a slightly higher order might be needed. Let's aim for order 81 (i.e., `numtaps` = 82 in Python `firwin`).

b) **Normalized Cutoff Frequency:**
The cutoff frequency is often chosen midway between $F_p$ and $F_s$:
$F_c = \frac{F_p + F_s}{2} = \frac{100 + 150}{2} = 125$ Hz.
Normalized cutoff frequency ($\omega_c$) with respect to Nyquist frequency ($F_{sampling}/2$):
$Wn = \frac{F_c}{F_{sampling}/2} = \frac{125}{1000/2} = \frac{125}{500} = 0.25$.

c) **MATLAB/Python Code:**

**MATLAB:**
```matlab
Fs = 1000;
Fpass = 100;
Fstop = 150;
order = 81; % Chosen order (M-1)
Wn_cutoff = (Fpass + Fstop) / (2 * (Fs/2)); % Normalized cutoff frequency

b = fir1(order, Wn_cutoff, 'low', hamming(order+1));
disp('Filter Coefficients (first 5):');
disp(b(1:5));
```

**Python:**
```python
import numpy as np
from scipy.signal import firwin, freqz

Fs = 1000
Fpass = 100
Fstop = 150
order = 81 # Filter order (M-1)
numtaps = order + 1 # Number of taps

cutoff_norm = (Fpass + Fstop) / 2 / (Fs / 2) # Normalized cutoff frequency

b = firwin(numtaps, cutoff_norm, window='hamming', pass_zero='lowpass')
print("Filter Coefficients (first 5):")
print(b[:5])
```

d) **Frequency Response Plotting:**
(Refer to the plotting code in Section 3.a)
When you plot the frequency response, you should observe:
*   The magnitude is close to 0 dB (amplitude of 1) up to approximately 100 Hz.
*   There is a transition region between 100 Hz and 150 Hz.
*   Beyond 150 Hz, the magnitude drops significantly (below -40 dB for the Hamming window). The passband ripple should be within the 1 dB specification, and the stopband attenuation should be at least 40 dB. The actual performance will depend on the exact formulas for order estimation and window properties.

---

**Question 2:**
Explain the concept of linear phase response in FIR filters and why it is desirable. What condition must the FIR filter coefficients satisfy to achieve linear phase?

**Answer 2:**

**Linear Phase Response:**
Linear phase response means that the phase shift introduced by the filter is directly proportional to the frequency. Mathematically, the phase response $\phi(\omega)$ can be expressed as $\phi(\omega) = -\alpha \omega$, where $\alpha$ is a constant.

**Desirability:**
Linear phase is desirable because it implies that all frequency components of the input signal are delayed by the same amount of time. This means the shape of the signal's waveform is preserved, although it might be shifted in time. This is crucial in applications like:
*   **Speech Processing:** Preserving the temporal characteristics of speech.
*   **Image Processing:** Preventing distortion in image features.
*   **Data Transmission:** Ensuring that digital symbols are received without waveform distortion.
Non-linear phase response, on the other hand, leads to phase distortion, where different frequency components are delayed by different amounts, distorting the overall signal shape.

**Condition for Linear Phase:**
For an FIR filter, linear phase is achieved if its impulse response coefficients $h[n]$ are **symmetric or anti-symmetric** around a center point.

*   **Type I Linear Phase (Symmetric):** $h[n] = h[M-1-n]$ for $n = 0, 1, \dots, M-1$, where $M$ is the number of taps. This typically occurs when the filter order $M-1$ is even (i.e., $M$ is odd).
*   **Type II Linear Phase (Symmetric):** $h[n] = -h[M-1-n]$ for $n = 0, 1, \dots, M-1$. This also occurs when $M$ is odd.
*   **Type III Linear Phase (Anti-symmetric):** $h[n] = -h[M-1-n]$ for $n = 0, 1, \dots, M-1$. This occurs when $M-1$ is odd (i.e., $M$ is even).
*   **Type IV Linear Phase (Anti-symmetric):** $h[n] = h[M-1-n]$ for $n = 0, 1, \dots, M-1$. This also occurs when $M$ is even.

In practice, the window method and Parks-McClellan algorithm are often designed to produce symmetric coefficients, leading to linear phase.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
