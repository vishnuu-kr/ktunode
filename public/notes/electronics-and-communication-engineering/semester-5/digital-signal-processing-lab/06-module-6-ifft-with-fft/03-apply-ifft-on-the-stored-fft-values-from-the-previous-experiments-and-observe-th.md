---
title: "Apply IFFT on the stored FFT values from the previous experiments and 
observe the reconstruction."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 6: IFFT with FFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec4e"
status: "completed"
scrapedAt: "2026-05-23T17:56:11.281Z"
---
# Digital Signal Processing Lab: Module 6 - IFFT with FFT

## Topic: Apply IFFT on the Stored FFT Values and Observe Reconstruction

### Introduction

This module focuses on the crucial inverse operation of the Fast Fourier Transform (FFT): the Inverse Fast Fourier Transform (IFFT). We will explore how to apply the IFFT to the frequency-domain representation (obtained from FFT in previous experiments) of a signal to reconstruct the original time-domain signal. This process is fundamental to understanding how signals can be manipulated in the frequency domain and then brought back to their original form.

### Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Apply the IFFT:** Successfully compute the IFFT of a given set of frequency-domain samples.
*   **Reconstruct Signals:** Demonstrate the ability to reconstruct a time-domain signal from its frequency-domain representation.
*   **Verify Signal Reconstruction:** Understand and observe the relationship between a signal and its reconstructed version from its FFT.
*   **Understand the FFT/IFFT Pair:** Appreciate the complementary nature of the FFT and IFFT as a fundamental tool for spectral analysis and synthesis.
*   **Explore Frequency Domain Manipulation (Implied):** Lay the groundwork for understanding how modifications in the frequency domain (e.g., filtering) can be performed and then reversed using the IFFT.

### Key Concepts and Definitions

#### 1. Fast Fourier Transform (FFT)

*   **Definition:** The FFT is an efficient algorithm to compute the Discrete Fourier Transform (DFT). The DFT transforms a finite sequence of equally-spaced samples of a function into a same-length sequence of equally-spaced samples of the discrete-time Fourier transform.
*   **Purpose:** It allows us to analyze the frequency content of a signal.
*   **Output:** The FFT produces a sequence of complex numbers representing the amplitude and phase of different frequency components present in the input signal.

#### 2. Inverse Fast Fourier Transform (IFFT)

*   **Definition:** The IFFT is an efficient algorithm to compute the Inverse Discrete Fourier Transform (IDFT). The IDFT transforms a sequence of frequency-domain samples back into the original time-domain sequence.
*   **Purpose:** It is used to reconstruct the time-domain signal from its frequency-domain representation.
*   **Relationship to FFT:** The IFFT is essentially the inverse operation of the FFT. If you take the FFT of a signal and then apply the IFFT to the result, you should ideally get back the original signal (with minor differences due to numerical precision and the scaling factor).

#### 3. DFT/IDFT Pair

*   Let $x[n]$ be a discrete-time signal of length $N$.
*   Its DFT is given by:
    $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$, for $k = 0, 1, \dots, N-1$.
*   Its IDFT is given by:
    $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$, for $n = 0, 1, \dots, N-1$.

#### 4. Scaling Factor in IFFT

*   **Importance:** The IDFT formula includes a scaling factor of $1/N$. Most FFT/IFFT implementations (like in MATLAB and Python) handle this scaling.
*   **MATLAB:** The `ifft` function in MATLAB automatically applies the $1/N$ scaling.
*   **Python (NumPy):** The `numpy.fft.ifft` function also applies the $1/N$ scaling.

#### 5. Properties of FFT/IFFT

*   **Linearity:** $IFFT(aX[k] + bY[k]) = a \cdot IFFT(X[k]) + b \cdot IFFT(Y[k])$
*   **Time Shifting:** Shifting a signal in the time domain results in a phase shift in the frequency domain.
*   **Frequency Shifting:** Shifting a signal in the frequency domain corresponds to multiplication by a complex exponential in the time domain.

### Applying IFFT on Stored FFT Values

In previous experiments, you would have likely:

1.  **Generated a time-domain signal** ($x[n]$).
2.  **Computed its FFT** ($X[k]$) using the `fft` function.
3.  **Stored these FFT values** ($X[k]$) for further analysis.

Now, the task is to take these stored $X[k]$ values and apply the IFFT to them to recover the original signal.

**Conceptual Steps:**

1.  **Retrieve Stored FFT Values:** Load or access the array containing the complex frequency-domain samples ($X[k]$) that you obtained from a previous FFT computation.
2.  **Apply IFFT:** Use the `ifft` function (or equivalent in your programming environment) to compute the IFFT of these stored frequency-domain samples.
3.  **Observe the Reconstructed Signal:** Compare the output of the IFFT with the original time-domain signal.

### Examples and Demonstrations

Let's consider a simple example using Python with NumPy and FFT/IFFT.

**Scenario:** You have previously computed the FFT of a specific signal and stored the results.

```python
import numpy as np
import matplotlib.pyplot as plt

# Assume these are the stored FFT values from a previous experiment.
# Let's create a sample signal and its FFT for demonstration purposes.

# 1. Create a sample time-domain signal
fs = 100  # Sampling frequency
t = np.arange(0, 1, 1/fs) # Time vector from 0 to 1 second
f1 = 5    # Frequency of the first sine wave
f2 = 20   # Frequency of the second sine wave
x_original = 0.7 * np.sin(2 * np.pi * f1 * t) + 0.3 * np.sin(2 * np.pi * f2 * t)

# 2. Compute the FFT of the original signal
N = len(x_original) # Number of samples
X_stored = np.fft.fft(x_original)

# --- Now, let's perform the IFFT on these stored FFT values ---

# 3. Apply the IFFT to the stored FFT values
x_reconstructed = np.fft.ifft(X_stored)

# 4. Observe the reconstruction

# For visualization, we often look at the real part of the reconstructed signal
# because the original signal was real. Due to floating-point precision,
# the imaginary part might be very small but non-zero.
x_reconstructed_real = np.real(x_reconstructed)

# Plotting the results
plt.figure(figsize=(12, 8))

plt.subplot(3, 1, 1)
plt.plot(t, x_original)
plt.title("Original Time-Domain Signal")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.grid(True)

plt.subplot(3, 1, 2)
# To visualize the FFT, we usually plot the magnitude
# and often the single-sided spectrum
freq = np.fft.fftfreq(N, 1/fs)
plt.plot(freq[:N//2], np.abs(X_stored[:N//2]) / N) # Plotting magnitude, scaled by N
plt.title("FFT of the Original Signal (Magnitude Spectrum)")
plt.xlabel("Frequency (Hz)")
plt.ylabel("Magnitude")
plt.grid(True)

plt.subplot(3, 1, 3)
plt.plot(t, x_reconstructed_real, label="Reconstructed Signal (Real Part)")
plt.title("Reconstructed Time-Domain Signal (IFFT Output)")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()

# 5. Verify the reconstruction quality
# Calculate the Mean Squared Error (MSE) or Root Mean Squared Error (RMSE)
mse = np.mean((x_original - x_reconstructed_real)**2)
rmse = np.sqrt(mse)
print(f"Root Mean Squared Error between original and reconstructed signal: {rmse:.6e}")

# Another check: the imaginary part of the reconstructed signal should be close to zero
print(f"Maximum absolute value of the imaginary part of the reconstructed signal: {np.max(np.abs(np.imag(x_reconstructed))):.6e}")
```

**Explanation of the Code:**

*   We create a signal composed of two sine waves.
*   We compute its FFT and store it in `X_stored`.
*   We then apply `np.fft.ifft` to `X_stored` to get `x_reconstructed`.
*   We plot the original signal, its magnitude spectrum (from FFT), and the real part of the reconstructed signal.
*   We quantify the error using RMSE. A low RMSE and a very small imaginary part indicate successful reconstruction.

#### **Textbook Connection:**

*   **Ingle & Proakis:** Chapter 7 on "Discrete Fourier Transform" discusses the DFT and IDFT relationships in detail. They would cover the mathematical formulas and properties, which are implemented by the `fft` and `ifft` functions.
*   **Downey:** Chapter 4, "DFT," provides a very accessible explanation of the FFT and IFFT. Downey emphasizes the conceptual understanding of how the FFT decomposes a signal into sinusoids and how the IFFT synthesizes it back. He'd likely illustrate this with Python examples.
*   **Chassaing:** This book, focused on hardware implementation, would discuss the algorithms for FFT/IFFT and their practical realization on DSP processors. The core concept of reconstructing a signal from its frequency components via the IFFT is universally applicable.
*   **Oppenheim & Schafer:** This is a foundational text. Their treatment of the DFT and its properties in Chapter 7 would be highly mathematical but thorough, providing the rigorous basis for the FFT/IFFT pair.

### Observing the Reconstruction

When you perform the IFFT on the stored FFT values, you should observe:

*   **Near-Perfect Match:** The reconstructed time-domain signal should closely resemble the original time-domain signal.
*   **Small Imaginary Components:** Due to floating-point arithmetic limitations in digital computers, the reconstructed signal might have very small, non-zero imaginary parts. These are typically negligible and can be ignored for practical purposes by taking the real part of the IFFT output.
*   **Impact of Frequency Domain Modifications:** If you were to modify the FFT values (e.g., zero out certain frequency components for filtering), the reconstructed signal would reflect these modifications. This is a powerful concept for signal processing.

### Practical Considerations

*   **Data Type:** FFT output is complex. Ensure your IFFT function can handle complex inputs.
*   **Scaling:** Always be aware of how the $1/N$ scaling is handled by your specific FFT/IFFT implementation. Most modern libraries do this correctly.
*   **Aliasing and Quantization:** If the original signal was sampled incorrectly (violating Nyquist criterion) or quantized with low precision, the reconstruction might not be perfect even with a correct IFFT.
*   **Windowing:** If a window function was applied before the FFT, the reconstructed signal will be the windowed version of the original.

### Aligning with Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** This module builds upon generating signals. Understanding the reconstruction from frequency components implicitly requires knowledge of what waveforms are represented in the frequency domain.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** The IFFT is the inverse of the DFT. Successfully reconstructing a signal by applying IFFT to its FFT output directly verifies the fundamental DFT/IDFT property.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** While this module might be done in a software environment (like MATLAB or Python), the FFT/IFFT algorithms are heavily implemented in DSP hardware. Understanding their function here is crucial for understanding their hardware implementation.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** Frequency-domain analysis and synthesis using FFT/IFFT are fundamental to understanding and implementing LTI systems, especially for operations like convolution via multiplication in the frequency domain. Reconstructing the signal from its frequency components is a step towards this.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** Filtering in the frequency domain is a key application. After applying an FFT, you might modify the frequency spectrum (e.g., to create a low-pass filter) and then use the IFFT to reconstruct the filtered signal in the time domain. This module provides the essential IFFT part of that process.

### Practice Questions and Exercises

**Question 1:**

Suppose you have computed the FFT of a real-valued signal $x[n]$ of length $N=8$. The resulting FFT coefficients are stored in an array `X_coeffs`. You then apply the IFFT to `X_coeffs` to obtain a reconstructed signal `x_recon`.

If the original signal was `x = [1, 2, 3, 4, 4, 3, 2, 1]`, what would you expect `x_recon` to be?

**Answer:**

You would expect `x_recon` to be very close to the original signal `[1, 2, 3, 4, 4, 3, 2, 1]`. Due to the properties of the DFT for real signals, the FFT coefficients will exhibit conjugate symmetry ($X[k] = X^*[N-k]$). The IFFT will then reconstruct the original real signal. Some minor floating-point errors might result in a very small imaginary part.

**Question 2:**

Consider a signal that is simply a cosine wave: $x[n] = \cos(2\pi \frac{k_0}{N} n)$, where $N=16$ and $k_0=3$.

1.  What are the expected frequency components in the FFT of this signal?
2.  If you compute the FFT, store the coefficients, and then apply the IFFT, what would be the ideal reconstructed signal?
3.  How would the reconstructed signal differ if you zeroed out all FFT coefficients except for the ones corresponding to $k=3$ and $k=13$ (due to $N-k$ symmetry)?

**Answer:**

1.  **Expected Frequency Components:** A cosine wave $A \cos(2\pi \frac{k_0}{N} n)$ ideally has two impulses in its DFT at frequencies $k=k_0$ and $k=N-k_0$. For $k_0=3$ and $N=16$, these would be at frequencies corresponding to bins $k=3$ and $k=13$. The magnitude of these impulses would be $N/2$.
2.  **Ideal Reconstructed Signal:** The ideal reconstructed signal would be the original cosine wave: $x[n] = \cos(2\pi \frac{3}{16} n)$.
3.  **Effect of Zeroing Coefficients:** If you zero out all coefficients except for $k=3$ and $k=13$, and assume these two coefficients are set to $N/2$ (which they would be for a cosine of amplitude 1), the IFFT will reconstruct the original cosine wave. If you zero out *all* coefficients, the IFFT will result in a signal of all zeros. If you zero out coefficients *other than* the two dominant ones for the cosine, the reconstruction will ideally yield the original cosine wave.

**Exercise 1 (MATLAB/Python):**

1.  Generate a sine wave of frequency 10 Hz sampled at 100 Hz for 1 second.
2.  Compute its FFT.
3.  Store the FFT output.
4.  Apply the IFFT to the stored FFT output.
5.  Plot the original signal and the reconstructed signal.
6.  Calculate and print the Root Mean Squared Error (RMSE) between the original and reconstructed signals.
7.  Calculate and print the maximum absolute value of the imaginary part of the reconstructed signal.

**Hint:**
*   MATLAB: `fs = 100; t = 0:1/fs:1-1/fs; f = 10; x_orig = sin(2*pi*f*t); X_fft = fft(x_orig); x_recon = ifft(X_fft); mse = mean((x_orig - real(x_recon)).^2); rmse = sqrt(mse); disp(['RMSE: ', num2str(rmse)]); disp(['Max Imaginary Part: ', num2str(max(abs(imag(x_recon))))]);`
*   Python: Use the code example provided earlier.

### Important Points to Remember

*   **IFFT is the Inverse of FFT:** It transforms the frequency-domain representation back to the time-domain.
*   **Scaling Factor:** The IDFT includes a $1/N$ scaling factor, which is typically handled by FFT/IFFT library functions.
*   **Real Signals and Conjugate Symmetry:** For real-valued input signals, their FFTs exhibit conjugate symmetry ($X[k] = X^*[N-k]$). The IFFT correctly reconstructs the real signal from these symmetric coefficients.
*   **Numerical Precision:** Expect small errors (imaginary parts) in the reconstructed signal due to finite precision arithmetic.
*   **Foundation for Filtering:** The FFT/IFFT pair is fundamental to implementing frequency-domain filtering.

This module provides the essential tool for bringing a signal back from the frequency domain, enabling a wide range of signal processing applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
