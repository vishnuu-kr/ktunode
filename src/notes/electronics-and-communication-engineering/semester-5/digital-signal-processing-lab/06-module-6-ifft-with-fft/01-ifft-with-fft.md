---
title: "IFFT with FFT"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 6: IFFT with FFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec4c"
status: "completed"
scrapedAt: "2026-05-23T17:56:09.855Z"
---
# Digital Signal Processing Lab - Module 6: IFFT with FFT

## Topic: IFFT with FFT

---

### Introduction

This module explores the fundamental relationship between the Fast Fourier Transform (FFT) and the Inverse Fast Fourier Transform (IFFT). We will understand how these two powerful algorithms are used in conjunction to transform signals between the time domain and the frequency domain and vice-versa. This understanding is crucial for analyzing and manipulating signals in various digital signal processing applications.

---

### 1. Learning Outcomes

By the end of this module, you will be able to:

*   Understand the mathematical relationship between the FFT and IFFT.
*   Implement the IFFT using FFT algorithms.
*   Verify the inverse property of the DFT/FFT.
*   Apply FFT and IFFT for signal reconstruction.
*   Analyze the impact of frequency domain manipulations on time-domain signals.

---

### 2. Key Concepts and Definitions

#### 2.1. Discrete Fourier Transform (DFT)

The DFT transforms a finite-length sequence of $N$ samples in the time domain, $x[n]$, into a sequence of $N$ complex numbers in the frequency domain, $X[k]$. The DFT is defined as:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$, for $k = 0, 1, \dots, N-1$

*   **Significance:** The DFT provides a way to represent a discrete-time signal in terms of its constituent frequencies.
*   **Textbook Reference:** Proakis & Ingle, Chapter 2. Downey, Chapter 7.

#### 2.2. Inverse Discrete Fourier Transform (IDFT)

The IDFT reconstructs the original time-domain sequence $x[n]$ from its frequency-domain representation $X[k]$. The IDFT is defined as:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$, for $n = 0, 1, \dots, N-1$

*   **Significance:** The IDFT is essential for recovering the time-domain signal after performing operations in the frequency domain.

#### 2.3. Fast Fourier Transform (FFT)

The FFT is an efficient algorithm for computing the DFT. It significantly reduces the computational complexity compared to a direct DFT computation. Algorithms like the Radix-2 FFT are commonly used.

*   **Significance:** Makes spectral analysis and frequency-domain processing computationally feasible.
*   **Textbook Reference:** Proakis & Ingle, Chapter 2. Downey, Chapter 7.

#### 2.4. Inverse Fast Fourier Transform (IFFT)

The IFFT is an efficient algorithm for computing the IDFT. It leverages the same principles as the FFT.

*   **Relationship to FFT:** The IFFT can be computed using FFT by:
    1.  Taking the complex conjugate of the frequency-domain sequence.
    2.  Computing the FFT of the conjugated sequence.
    3.  Taking the complex conjugate of the result.
    4.  Scaling the result by $1/N$.

    Mathematically:
    $x[n] = \frac{1}{N} \text{conj}\left( \sum_{k=0}^{N-1} \text{conj}(X[k]) e^{-j2\pi kn/N} \right)$

    This shows that the IFFT computation involves a sum similar to the DFT, but with a positive exponential and a scaling factor.

*   **Textbook Reference:** Proakis & Ingle, Chapter 2 (discusses computation of IDFT). Downey, Chapter 7.
*   **Course Outcome Alignment:** This directly relates to CO2 (Verify the properties of DFT) and is fundamental for implementing signal transformations.

---

### 3. IFFT Implementation using FFT

The core idea is to exploit the structural similarity between the DFT and IDFT definitions.

**Algorithm for IFFT using FFT:**

Given a frequency-domain sequence $X[k]$ of length $N$:

1.  **Complex Conjugate:** Compute $Y[k] = \text{conj}(X[k])$ for $k = 0, 1, \dots, N-1$.
2.  **FFT:** Compute the FFT of $Y[k]$ to obtain $Z[k]$. That is, $Z[k] = \text{FFT}(Y[k])$.
3.  **Complex Conjugate Again:** Compute $W[n] = \text{conj}(Z[n])$ for $n = 0, 1, \dots, N-1$.
4.  **Scale:** The time-domain signal is then $x[n] = \frac{1}{N} W[n]$.

This process effectively computes the IDFT using an FFT algorithm. Most DSP libraries and software packages (like MATLAB and Python with SciPy/NumPy) provide dedicated `ifft` functions, but understanding this underlying relationship is crucial.

---

### 4. Verifying the Inverse Property of DFT/FFT

A critical property of the DFT is that applying the IDFT to the DFT of a signal should ideally recover the original signal.

$x[n] = \text{IDFT}(\text{DFT}(x[n]))$

Similarly, using FFT and IFFT:

$x[n] \approx \text{IFFT}(\text{FFT}(x[n]))$

The approximation symbol ($\approx$) is used because of potential numerical precision issues in floating-point computations.

**Example (Conceptual):**

Let's consider a simple time-domain signal:
$x[n] = \{1, 0, 0, 0\}$, $N=4$.

1.  **Compute DFT (FFT):**
    $X[k] = \text{FFT}(x[n])$
    $X[0] = 1+0+0+0 = 1$
    $X[1] = 1 + 0\cdot e^{-j2\pi(1)/4} + 0\cdot e^{-j2\pi(2)/4} + 0\cdot e^{-j2\pi(3)/4} = 1$
    $X[2] = 1 + 0\cdot e^{-j2\pi(2)/4} + 0\cdot e^{-j2\pi(4)/4} + 0\cdot e^{-j2\pi(6)/4} = 1$
    $X[3] = 1 + 0\cdot e^{-j2\pi(3)/4} + 0\cdot e^{-j2\pi(6)/4} + 0\cdot e^{-j2\pi(9)/4} = 1$
    So, $X[k] = \{1, 1, 1, 1\}$.

2.  **Compute IDFT (IFFT) of $X[k]$:**
    $x'[n] = \text{IFFT}(X[k])$
    Using the algorithm:
    a.  $\text{conj}(X[k]) = \{1, 1, 1, 1\}$
    b.  $\text{FFT}(\{1, 1, 1, 1\})$ = $\{4, 0, 0, 0\}$ (This is a known property: FFT of a constant sequence).
    c.  $\text{conj}(\{4, 0, 0, 0\}) = \{4, 0, 0, 0\}$
    d.  Scale by $1/N = 1/4$: $\{4/4, 0/4, 0/4, 0/4\} = \{1, 0, 0, 0\}$.
    Thus, $x'[n] = \{1, 0, 0, 0\}$, which is the original signal $x[n]$.

**Code Example (MATLAB/Python):**

```matlab
% MATLAB Example
Fs = 100;            % Sampling frequency
T = 1/Fs;            % Sampling period
L = 100;             % Length of signal
t = (0:L-1)*T;       % Time vector

% Generate a simple signal (e.g., a cosine wave)
f1 = 5;              % Frequency of cosine wave
x = 0.7*cos(2*pi*f1*t);

% Compute the FFT
X = fft(x);

% Compute the IFFT
x_reconstructed = ifft(X);

% Verify if the original signal is recovered (within numerical tolerance)
disp('Is the signal reconstructed accurately?');
disp(sum(abs(x - x_reconstructed))/L < 1e-10); % Check average error
```

```python
# Python Example (using NumPy)
import numpy as np

Fs = 100          # Sampling frequency
T = 1/Fs          # Sampling period
L = 100           # Length of signal
t = np.arange(L) * T # Time vector

# Generate a simple signal (e.g., a cosine wave)
f1 = 5            # Frequency of cosine wave
x = 0.7 * np.cos(2 * np.pi * f1 * t)

# Compute the FFT
X = np.fft.fft(x)

# Compute the IFFT
x_reconstructed = np.fft.ifft(X)

# Verify if the original signal is recovered (within numerical tolerance)
print("Is the signal reconstructed accurately?")
print(np.allclose(x, x_reconstructed)) # np.allclose checks element-wise equality within tolerance
```

*   **Course Outcome Alignment:** CO2 (Verify the properties of DFT) is directly addressed. This also supports CO1 (Generate basic signal waveforms) and CO4 (Implement LTI systems) as FFT/IFFT are used in system analysis.

---

### 5. Applications of FFT and IFFT

The ability to transform signals to the frequency domain, manipulate them, and then transform them back is fundamental to many DSP tasks.

#### 5.1. Signal Reconstruction and Filtering

*   **Concept:** After applying a filter in the frequency domain (e.g., setting coefficients to zero or modifying them), the IFFT is used to reconstruct the filtered signal in the time domain.
*   **Example:** Low-pass filtering.
    1.  Take the FFT of the input signal $x[n]$.
    2.  Multiply the frequency spectrum $X[k]$ by a low-pass filter's frequency response $H[k]$ (e.g., $H[k]$ is 1 for low frequencies and 0 for high frequencies).
    3.  Take the IFFT of the modified spectrum to obtain the filtered signal.
*   **Textbook Reference:** Proakis & Ingle, Chapter 6 (Digital Filtering). Downey, Chapter 12 (Filters).
*   **Course Outcome Alignment:** CO5 (Design and Implement FIR low-pass filters) relies heavily on this process. CO4 (Implement LTI systems) as filtering is a common LTI system operation.

#### 5.2. Signal Synthesis

*   **Concept:** You can create complex signals by defining their frequency components (magnitude and phase) in the frequency domain and then using the IFFT to synthesize the corresponding time-domain signal.
*   **Example:** Creating a signal composed of multiple sinusoids.
    1.  Define the frequency components $X[k]$ corresponding to desired sinusoidal frequencies.
    2.  Use the IFFT to generate the time-domain signal.
*   **Course Outcome Alignment:** CO1 (Generate basic signal waveforms) can be achieved through this method.

#### 5.3. Spectral Analysis

*   **Concept:** The FFT is used to analyze the frequency content of a signal. The IFFT can then be used to reconstruct the signal from its analyzed spectral components if needed.
*   **Textbook Reference:** Downey, Chapter 7 (FFT).
*   **Course Outcome Alignment:** CO2 (Verify the properties of DFT) is integral to spectral analysis.

---

### 6. Important Points to Remember

*   **FFT vs. DFT:** FFT is an *algorithm* to compute the DFT efficiently.
*   **IFFT as the Inverse:** The IFFT is the algorithm to compute the IDFT, which is the inverse operation of the DFT.
*   **Complex Conjugation Property:** The IFFT can be computed using FFT via complex conjugation, FFT, another complex conjugation, and scaling by $1/N$.
*   **Numerical Precision:** Due to floating-point arithmetic, $x[n]$ might not be *exactly* equal to $\text{IFFT}(\text{FFT}(x[n]))$, but it should be very close.
*   **Frequency Domain Operations:** Operations performed in the frequency domain (e.g., filtering, modification of components) are implemented using FFT to transform to the frequency domain and IFFT to transform back to the time domain.
*   **$N$ is Crucial:** The length $N$ of the DFT/FFT/IFFT is critical and must be consistent throughout the operation.
*   **Reference Books:** Oppenheim & Schafer is a foundational text for a deep theoretical understanding of discrete-time signal processing, including the DFT and its properties.

---

### 7. Practice Questions and Exercises

**Instructions:** Use MATLAB or Python with NumPy/SciPy for implementation.

1.  **Direct Verification:**
    *   Generate a simple real-valued signal $x[n]$ of length $N=8$ (e.g., a short impulse or a few samples of a sine wave).
    *   Compute its DFT using the `fft` function.
    *   Compute the IDFT using the `ifft` function.
    *   Compare the output of `ifft(fft(x))` with the original signal $x$. Display the absolute difference and verify it's close to zero.
    *   **Answer:** The absolute difference should be very small, on the order of $10^{-14}$ or $10^{-15}$, indicating successful reconstruction.

2.  **IFFT using FFT Implementation:**
    *   Take the same signal $x[n]$ from Question 1.
    *   Compute $X[k] = \text{fft}(x)$.
    *   Implement the IFFT using the step-by-step procedure described in Section 3:
        *   Compute $Y[k] = \text{conj}(X[k])$.
        *   Compute $Z[k] = \text{fft}(Y[k])$.
        *   Compute $W[n] = \text{conj}(Z[n])$.
        *   Compute $x_{reconstructed}[n] = W[n] / N$.
    *   Compare this $x_{reconstructed}[n]$ with the original signal $x[n]$ and also with the output of the `ifft` function.
    *   **Answer:** The results from the direct `ifft` and your implemented IFFT should be identical (within numerical precision), and both should closely match the original signal.

3.  **Frequency Domain Filtering and Reconstruction:**
    *   Generate a longer signal $x[n]$ of length $N=128$, which is a sum of two sinusoids with different frequencies (e.g., 5 Hz and 15 Hz, sampled at 100 Hz).
    *   Compute the FFT of $x[n]$ to get $X[k]$.
    *   Visualize the magnitude spectrum $|X[k]|$. You should see peaks at the corresponding frequencies.
    *   Create a simple ideal low-pass filter $H[k]$ in the frequency domain. For example, set $H[k] = 1$ for frequencies up to 10 Hz and $H[k] = 0$ for frequencies above 10 Hz. Ensure you correctly map the discrete frequency indices $k$ to actual frequencies.
    *   Create the filtered spectrum $Y[k] = X[k] \cdot H[k]$.
    *   Compute the IFFT of $Y[k]$ to get the filtered signal $y[n]$.
    *   Visualize the magnitude spectrum $|Y[k]|$ and the time-domain signals $x[n]$ and $y[n]$.
    *   **Answer:** The output spectrum $|Y[k]|$ should show only the components below 10 Hz, and the time-domain signal $y[n]$ should appear to be the original signal with the higher frequency sinusoid removed.

4.  **Signal Synthesis using IFFT:**
    *   Create a frequency-domain representation $X[k]$ of length $N=64$.
    *   Set $X[k]$ to represent a single sinusoid of 10 Hz (assuming sampling frequency $F_s = 100$ Hz). You will need to determine the correct index $k$ for 10 Hz and set appropriate magnitude and phase at that index. For a real sinusoid $A \cos(2\pi f t)$, its DFT is symmetric. You can set $X[k_0]$ and $X[N-k_0]$ for a sinusoid at frequency $k_0 \cdot F_s / N$.
    *   Use the IFFT to synthesize the time-domain signal $x[n]$.
    *   Plot the synthesized signal $x[n]$ and verify it matches the expected sinusoid.
    *   **Answer:** The plotted signal should resemble a cosine wave at the specified frequency.

---

### 8. Alignment with Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   This module enables the generation of signals by defining their frequency components and using the IFFT. Practice question 4 directly addresses this.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   The core of this module is understanding and verifying the inverse property of the DFT using FFT/IFFT, as demonstrated in practice questions 1 and 2.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   While not directly about hardware, understanding FFT/IFFT is foundational for implementing many algorithms that would eventually run on DSP hardware. The computational efficiency of FFT is key for real-time applications.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   The ability to perform filtering in the frequency domain using FFT and IFFT is a direct application of implementing LTI systems, as shown in practice question 3.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   This module provides the essential tool (IFFT) for reconstructing a signal after frequency-domain filtering, which is a critical step in designing and implementing filters like FIR low-pass filters.

---

This concludes Module 6. You should now have a solid understanding of how the FFT and IFFT work together to manipulate signals in the digital domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
