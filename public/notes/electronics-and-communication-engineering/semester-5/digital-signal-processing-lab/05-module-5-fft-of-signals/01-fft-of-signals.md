---
title: "FFT of signals"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 5: FFT of signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec45"
status: "completed"
scrapedAt: "2026-05-23T17:56:05.607Z"
---
# Digital Signal Processing Lab - Module 5: FFT of Signals

## Introduction

This module delves into the Fast Fourier Transform (FFT), a fundamental algorithm in Digital Signal Processing (DSP) for efficiently computing the Discrete Fourier Transform (DFT). Understanding the FFT is crucial for analyzing the frequency content of signals, designing filters, and implementing various DSP applications.

---

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the theoretical basis of the Fast Fourier Transform (FFT).
*   Compute the FFT of various discrete-time signals.
*   Analyze the frequency spectrum of signals using the FFT.
*   Understand the relationship between the time-domain signal and its frequency-domain representation obtained via FFT.
*   Implement and analyze the FFT of sampled signals in a laboratory environment using tools like MATLAB or Python.
*   Appreciate the computational efficiency of FFT compared to direct DFT computation.

---

## Key Concepts and Definitions

### 1. Discrete Fourier Transform (DFT)

The DFT transforms a finite-length sequence of N samples in the time domain, $x[n]$ (where $n = 0, 1, ..., N-1$), into a finite-length sequence of N samples in the frequency domain, $X[k]$ (where $k = 0, 1, ..., N-1$).

The DFT is defined as:

$$ X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N} $$

The Inverse DFT (IDFT) is defined as:

$$ x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N} $$

**Key Points about DFT:**
*   It converts a time-domain signal to its frequency-domain representation.
*   The frequency domain representation is periodic with period N.
*   The frequency bins $k$ correspond to frequencies $f_k = k \frac{f_s}{N}$, where $f_s$ is the sampling frequency.
*   The DC component (average value) is represented by $X[0]$.

**Textbook Reference:**
*   **Proakis & Ingle, Chapter 2:** Discusses the DFT and its properties in detail, laying the groundwork for understanding the FFT.
*   **Oppenheim & Schafer, Chapter 7:** Provides a thorough mathematical treatment of the DFT and its applications.

### 2. The Need for FFT

Direct computation of the DFT requires $N$ complex multiplications and $N-1$ complex additions for each of the $N$ frequency components. This results in a total of $O(N^2)$ complex multiplications and additions. For large values of $N$, this computation becomes computationally intensive and time-consuming.

The Fast Fourier Transform (FFT) is an algorithm that significantly reduces the number of computations required to compute the DFT. It achieves this by exploiting the periodicity and symmetry properties of the DFT.

### 3. Fast Fourier Transform (FFT) Algorithm

The FFT is not a new transform but rather an efficient *algorithm* to compute the DFT. The most common FFT algorithms are based on the **divide-and-conquer** approach.

#### 3.1 Decimation-in-Time (DIT) FFT

The DIT FFT algorithm decomposes the DFT of length $N$ into smaller DFTs of length $N/2$. This is typically achieved by:
*   **Input Reordering:** Rearranging the input sequence $x[n]$ according to its bit-reversed order.
*   **Butterfly Operations:** Performing computations in stages using "butterfly" structures. A butterfly operation combines two complex numbers to produce two new complex numbers.

**Algorithm Steps (Radix-2 DIT FFT for N being a power of 2):**
1.  **Bit-Reversal:** Rearrange the input sequence $x[n]$ such that the indices are in bit-reversed order.
2.  **Stage 1:** Compute DFTs of length 2 from pairs of input samples using butterfly operations.
3.  **Stage 2:** Compute DFTs of length 4 by combining results from Stage 1 using butterfly operations.
4.  **Continue...** This process continues for $\log_2 N$ stages.
5.  **Final Stage:** The last stage computes the DFT of length $N$.

**Computational Complexity:** The DIT FFT algorithm reduces the computational complexity from $O(N^2)$ to $O(N \log_2 N)$. This is a significant improvement for large $N$.

#### 3.2 Decimation-in-Frequency (DIF) FFT

The DIF FFT algorithm decomposes the DFT based on the frequency domain samples. It also leads to $O(N \log_2 N)$ complexity. The core difference lies in the order of operations and the bit-reversal being applied to the output.

**Textbook Reference:**
*   **Proakis & Ingle, Chapter 7:** Provides a detailed explanation of both DIT and DIF FFT algorithms, including their derivations and flow graphs.
*   **Downey, Chapter 11:** Introduces the FFT as an efficient way to compute the DFT and demonstrates its implementation in Python, focusing on the conceptual understanding.

---

## Practical Aspects of FFT in the Lab

### 1. Signal Generation (CO1)

Before computing the FFT, we need signals to analyze. This involves generating various types of signals.

*   **Sinusoidal Signals:** $x[n] = A \cos(2\pi f_0 n/f_s + \phi)$
*   **Complex Exponential Signals:** $x[n] = A e^{j(2\pi f_0 n/f_s + \phi)}$
*   **Square Waves, Sawtooth Waves, etc.:** Can be approximated by sums of sinusoids (Fourier Series).
*   **Random Signals:** White noise, colored noise.

**Example:** Generating a sinusoidal signal.

**MATLAB/Python Code Snippet:**

```matlab
% MATLAB
Fs = 1000;          % Sampling frequency
T = 1/Fs;           % Sampling period
L = 1000;           % Length of signal
t = (0:L-1)*T;      % Time vector
f0 = 50;            % Frequency of the signal
A = 1;              % Amplitude
x = A*sin(2*pi*f0*t); % Sinusoidal signal
```

```python
# Python
import numpy as np

Fs = 1000  # Sampling frequency
T = 1/Fs   # Sampling period
L = 1000   # Length of signal
t = np.arange(L) * T # Time vector
f0 = 50    # Frequency of the signal
A = 1      # Amplitude
x = A * np.sin(2 * np.pi * f0 * t) # Sinusoidal signal
```

**Learning Outcome Addressed:** CO1: Generate basic signal waveforms.

### 2. Computing the FFT

Most DSP libraries provide efficient FFT functions.

*   **MATLAB:** `fft(x)`
*   **Python (NumPy):** `np.fft.fft(x)`

**Important Considerations for FFT Computation:**
*   **Signal Length (N):** The most efficient FFT algorithms are for lengths that are powers of 2 (e.g., 128, 256, 512, 1024). If your signal length is not a power of 2, you can either:
    *   **Zero-padding:** Append zeros to the signal to reach the next power of 2. This increases the number of points in the DFT, providing finer frequency resolution but not more information about the original signal.
    *   **Use a general-purpose FFT algorithm:** Many libraries implement algorithms that handle non-power-of-2 lengths, but they might be less efficient than radix-2 FFTs.
*   **Frequency Resolution:** The spacing between the frequency bins in the DFT output is $f_s/N$. To achieve finer frequency resolution, you need to increase $N$ (either by sampling for a longer duration or by zero-padding).
*   **Frequency Range:** The DFT output $X[k]$ for $k=0, 1, ..., N-1$ corresponds to frequencies from $0$ Hz to $f_s - f_s/N$ Hz. However, due to aliasing, the unique frequency content is within the range $0$ to $f_s/2$ (Nyquist frequency). The output of the FFT is symmetric for real-valued input signals, with the second half representing negative frequencies.

#### 2.1 Understanding the FFT Output

The output of the FFT function is a complex-valued array.

*   `X[0]` represents the DC component (average value of the signal).
*   `X[k]` for $k=1, ..., N/2-1$ represents the positive frequency components.
*   `X[N/2]` (if $N$ is even) represents the Nyquist frequency.
*   `X[k]` for $k=N/2+1, ..., N-1$ represents the negative frequency components, which are complex conjugates of the corresponding positive frequency components for real signals.

To visualize the magnitude spectrum, we typically compute the absolute value of the complex FFT output: `abs(X[k])`. For plotting, it's common to plot the magnitude spectrum against the corresponding frequencies.

**Frequency Vector:**
The frequencies corresponding to the FFT output bins can be generated as follows:

**MATLAB:** `f = (0:L-1)*(Fs/L);`
**Python:** `f = np.fft.fftfreq(L, 1/Fs)`

**Plotting the Magnitude Spectrum:**

**MATLAB:**

```matlab
Y = fft(x);
Pyy = abs(Y/L); % Normalize by length
Pyy = Pyy(1:L/2+1); % Take only the first half (positive frequencies)
Pyy(2:end-1) = 2*Pyy(2:end-1); % Double the magnitude for single-sided spectrum
f = Fs*(0:(L/2))/L; % Frequency vector for single-sided spectrum

plot(f, Pyy);
title('Single-Sided Amplitude Spectrum of x(t)');
xlabel('Frequency (Hz)');
ylabel('|P1(f)|');
```

**Python:**

```python
from matplotlib import pyplot as plt

Y = np.fft.fft(x)
Pyy = np.abs(Y/L) # Normalize by length
Pyy = Pyy[:L//2+1] # Take only the first half (positive frequencies)
Pyy[1:-1] = 2*Pyy[1:-1] # Double the magnitude for single-sided spectrum
f = Fs * np.arange(L//2+1) / L # Frequency vector for single-sided spectrum

plt.plot(f, Pyy)
plt.title('Single-Sided Amplitude Spectrum of x(t)')
plt.xlabel('Frequency (Hz)')
plt.ylabel('|P1(f)|')
plt.grid(True)
plt.show()
```

**Learning Outcome Addressed:**
*   Analyze the frequency spectrum of signals using the FFT.
*   Understand the relationship between the time-domain signal and its frequency-domain representation obtained via FFT.
*   Implement and analyze the FFT of sampled signals in a laboratory environment.

### 3. Verification of DFT Properties using FFT (CO2)

The FFT can be used to verify the properties of the DFT.

*   **Linearity:** $FFT(a x_1[n] + b x_2[n]) = a FFT(x_1[n]) + b FFT(x_2[n])$.
    *   **Exercise:** Generate two different signals, compute their individual FFTs, scale and add them. Then, create a linear combination of the original signals and compute its FFT. Compare the results.
*   **Time Shifting:** $FFT(x[n-n_0]) = e^{-j2\pi k n_0/N} FFT(x[n])$.
    *   **Exercise:** Shift a signal $x[n]$ by $n_0$ samples to get $x[n-n_0]$. Compute the FFT of both. Observe the phase difference in the frequency domain.
*   **Frequency Shifting:** $FFT(x[n] e^{j2\pi k_0 n/N}) = X[k-k_0]$. (This property is more directly observed using the DFT definition and complex exponentials, but its effects can be seen in the FFT output).
*   **Parseval's Theorem:** $\sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$. This relates the energy in the time domain to the energy in the frequency domain.
    *   **Exercise:** Compute the sum of squared magnitudes of the time-domain signal and compare it to $1/N$ times the sum of squared magnitudes of the FFT output. They should be approximately equal, with small differences due to numerical precision.

**Textbook Reference:**
*   **Proakis & Ingle, Chapter 2:** Details the properties of the DFT, which can then be verified experimentally using the FFT.

**Learning Outcome Addressed:** CO2: Verify the properties of DFT.

### 4. Computational Efficiency of FFT (CO3)

While not directly measuring hardware performance, understanding the efficiency is key.

*   **Comparison:** Directly computing the DFT using the summation formula is $O(N^2)$. The FFT algorithm achieves $O(N \log_2 N)$.
*   **Example:** Calculate the number of operations for $N=1024$.
    *   DFT: $1024^2 \approx 10^6$ operations.
    *   FFT: $1024 \log_2 1024 = 1024 \times 10 = 10240$ operations.
    This demonstrates a reduction by a factor of approximately 100!

**Textbook Reference:**
*   **Chassaing, Chapter 4:** Discusses the efficiency of DSP algorithms and the role of FFT, often in the context of embedded systems like the TMS320C6x DSK. This book is particularly relevant for understanding the practical implementation aspects on DSP hardware.
*   **Downey, Chapter 11:** Explicitly discusses the efficiency gains of FFT over direct DFT computation.

**Learning Outcome Addressed:** CO3: Familiarize with DSP hardware and interface with Computer (understanding efficiency is a prerequisite for understanding hardware implementation).

---

## Examples and Applications

### 1. Analyzing Periodic Signals

*   **Example:** Analyze a signal that is a sum of two sinusoids with different frequencies. The FFT spectrum should clearly show peaks at the frequencies of the constituent sinusoids.
*   **Lab Exercise:** Generate a signal $x[n] = \sin(2\pi \cdot 50 \cdot n/1000) + 0.5 \sin(2\pi \cdot 120 \cdot n/1000)$. Compute its FFT and plot the magnitude spectrum. Identify the frequencies $50$ Hz and $120$ Hz.

### 2. Identifying Noise

*   **Example:** A signal corrupted by additive white Gaussian noise will have a relatively flat spectrum for the noise component, overlaid with peaks from the original signal.
*   **Lab Exercise:** Generate a sinusoidal signal and add random noise to it. Compute the FFT and observe how the noise affects the spectrum.

### 3. Spectral Analysis of Non-Periodic Signals

*   **Example:** Analyzing the frequency content of speech or music. The FFT provides a snapshot of the spectral content at a particular time.
*   **Windowing:** For non-periodic signals or signals that are not integer multiples of the observation window, abruptly truncating the signal can lead to spectral leakage. Window functions (e.g., Hamming, Hanning) are applied to the signal before FFT to reduce this leakage.

**Textbook Reference:**
*   **Proakis & Ingle, Chapter 7:** Discusses spectral analysis techniques and windowing.
*   **Oppenheim & Schafer, Chapter 7:** Covers spectral estimation and the effects of windowing.

### 4. Filtering (CO4, CO5)

The FFT plays a crucial role in filter implementation, especially for FIR filters.

*   **Frequency Domain Filtering:**
    1.  Compute the FFT of the input signal $x[n]$ to get $X[k]$.
    2.  Compute the FFT of the filter's impulse response $h[n]$ to get $H[k]$.
    3.  Multiply the FFTs in the frequency domain: $Y[k] = X[k] \cdot H[k]$.
    4.  Compute the Inverse FFT of $Y[k]$ to get the filtered output $y[n]$.
    This is known as the **Overlap-Add** or **Overlap-Save** method for long filters, allowing convolution to be performed efficiently using FFTs.

*   **Designing FIR Low-Pass Filters (CO5):**
    *   **Ideal Low-Pass Filter:** In the frequency domain, an ideal low-pass filter has a constant gain of 1 for frequencies below the cutoff frequency and 0 for frequencies above.
    *   **Impulse Response:** The impulse response of an ideal low-pass filter is a sinc function, which is infinite in duration and non-causal.
    *   **Practical Design:** To implement a practical FIR low-pass filter:
        1.  Design an ideal low-pass filter with a desired cutoff frequency.
        2.  Truncate the ideal impulse response (sinc function) to a finite length.
        3.  Apply a window function (e.g., Hamming, Hanning) to the truncated impulse response to smooth out the discontinuities and reduce ripples in the frequency response (Gibbs phenomenon).
        4.  The resulting finite-length sequence is the FIR filter's impulse response.
    *   **Verification:** Compute the FFT of the designed FIR filter's impulse response. Plotting `abs(fft(h))` will show the frequency response of the filter. This should approximate the desired low-pass characteristic.

**Textbook Reference:**
*   **Proakis & Ingle, Chapter 6:** Covers the design of FIR filters, including windowing methods.
*   **Downey, Chapter 12:** Discusses filtering and how FFT can be used for efficient convolution.
*   **Chassaing, Chapter 5 & 6:** Often covers FIR filter design and implementation on DSP processors.

**Learning Outcome Addressed:**
*   CO4: Implement LTI systems (using FFT for convolution is a key implementation strategy).
*   CO5: Design and Implement FIR low-pass filters (FFT is used to analyze and verify the filter's frequency response).

---

## Practice Questions & Exercises

1.  **Signal Generation and FFT:**
    *   Generate a signal $x[n]$ consisting of a $100$ Hz sinusoid with amplitude 1 and a $300$ Hz sinusoid with amplitude 0.5, sampled at $f_s = 1000$ Hz for $N=500$ samples.
    *   Compute the FFT of $x[n]$ using `fft()` in MATLAB or `np.fft.fft()` in Python.
    *   Plot the single-sided magnitude spectrum of $x[n]$.
    *   **Answer:** The spectrum should show clear peaks at $100$ Hz and $300$ Hz. The peak at $100$ Hz should be twice the height of the peak at $300$ Hz (due to doubling for single-sided spectrum).

2.  **Zero-Padding:**
    *   Take the signal from Question 1 ($N=500$) and zero-pad it to a length of $N=1024$.
    *   Compute the FFT of the zero-padded signal and plot its single-sided magnitude spectrum.
    *   **Compare:** How does the frequency resolution change? Is there any new frequency information introduced?
    *   **Answer:** Zero-padding increases the number of points in the DFT, leading to finer spacing between frequency bins ($\Delta f = f_s/N_{padded}$). However, it does not reveal any new frequency components that were not present in the original signal; it just interpolates the existing spectrum.

3.  **DFT Property Verification (Parseval's Theorem):**
    *   Generate a signal $x[n]$ of your choice (e.g., a noisy sine wave).
    *   Compute the time-domain energy: $E_{time} = \sum_{n=0}^{N-1} |x[n]|^2$.
    *   Compute the FFT of $x[n]$ to get $X[k]$.
    *   Compute the frequency-domain energy: $E_{freq} = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$.
    *   Compare $E_{time}$ and $E_{freq}$. What is the percentage difference?
    *   **Answer:** $E_{time}$ and $E_{freq}$ should be very close (e.g., within 0.1% difference), demonstrating Parseval's theorem.

4.  **FIR Low-Pass Filter Frequency Response:**
    *   Design a FIR low-pass filter with a cutoff frequency of $f_c = 200$ Hz using a Hamming window and a filter length of $N_{filter} = 65$.
    *   Compute the FFT of the filter's impulse response $h[n]$ (with length $N_{fft} = 1024$).
    *   Plot the magnitude response $|H(f)|$ of the filter.
    *   **Answer:** The plot should show a low-pass characteristic, with significant gain below $200$ Hz and rapidly decreasing gain above $200$ Hz. The transition band width will depend on the filter length and window.

---

## Important Points to Remember

*   **FFT is an algorithm for DFT:** It's not a different transform.
*   **Computational Efficiency:** FFT reduces complexity from $O(N^2)$ to $O(N \log_2 N)$.
*   **Power of 2 Lengths:** Radix-2 FFT algorithms are most efficient for signal lengths that are powers of 2.
*   **Zero-Padding:** Increases frequency resolution but not information.
*   **Spectrum Symmetry:** For real signals, the FFT output is conjugate symmetric. The unique information is in the first half (DC to Nyquist).
*   **Single-Sided Spectrum:** Commonly plotted by taking the first $N/2+1$ points and doubling their magnitudes (except DC and Nyquist).
*   **Windowing:** Essential for spectral analysis of non-periodic signals to reduce spectral leakage.
*   **FFT for Convolution:** Efficiently implements LTI system output and FIR filtering.

---

## Conclusion

The Fast Fourier Transform is a cornerstone of digital signal processing, enabling efficient spectral analysis and various signal processing operations. This module has provided the foundational knowledge and practical steps to compute, analyze, and utilize the FFT in laboratory settings, directly contributing to the course outcomes related to signal generation, DFT properties, system implementation, and filter design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
