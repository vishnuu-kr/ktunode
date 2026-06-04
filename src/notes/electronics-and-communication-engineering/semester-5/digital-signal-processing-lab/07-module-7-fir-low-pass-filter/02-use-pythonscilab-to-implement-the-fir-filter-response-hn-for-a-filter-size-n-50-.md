---
title: "Use Python/scilab to implement the FIR filter response h[n] = 
 for a filter size N 
= 50, ωc = 0.1π and ωc = 0.3π."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec51"
status: "completed"
scrapedAt: "2026-05-23T17:56:12.709Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 7 - FIR Low Pass Filter

## Topic: FIR Filter Response Implementation

This module focuses on implementing the impulse response of an FIR low-pass filter and analyzing its behavior using Python/Scilab. We will specifically explore filters with impulse responses of the form:

$$ h[n] = \frac{\sin(\omega_c (n - (N-1)/2))}{\pi (n - (N-1)/2))} $$

for a filter size $N = 50$ and two cutoff frequencies: $\omega_c = 0.1\pi$ and $\omega_c = 0.3\pi$.

---

### 1. Learning Outcomes Covered

*   **Understanding FIR Filter Design:** Grasp the concept of designing FIR filters by specifying their impulse response. (Related to CO5)
*   **Implementation of Ideal Low-Pass Filter:** Implement the theoretical impulse response of an ideal low-pass filter. (Related to CO5)
*   **Effect of Cutoff Frequency:** Analyze how the cutoff frequency ($\omega_c$) influences the filter's characteristics. (Related to CO5)
*   **Effect of Filter Length (N):** Understand how the filter length ($N$) affects the filter's performance (e.g., transition band width). (Related to CO5)
*   **Frequency Response Analysis:** Visualize and interpret the frequency response (magnitude and phase) of the designed FIR filters. (Related to CO5)
*   **Impulse Response Analysis:** Examine the impulse response of the designed filters. (Related to CO5)
*   **Using Python/Scilab for DSP:** Gain practical experience in implementing DSP algorithms using Python or Scilab. (Related to CO1, CO2, CO4, CO5)

---

### 2. Key Concepts and Definitions

*   **Finite Impulse Response (FIR) Filter:** A digital filter whose impulse response $h[n]$ is of finite duration. This means the output $y[n]$ is a finite sum of past input samples, weighted by the impulse response coefficients:
    $$ y[n] = \sum_{k=0}^{N-1} h[k] x[n-k] $$
    (Reference: Ingle & Proakis, Chapter 7)

*   **Impulse Response ($h[n]$):** The output of a linear time-invariant (LTI) system when the input is a unit impulse function $\delta[n]$. The impulse response completely characterizes an LTI system.

*   **Low-Pass Filter:** A filter that allows frequencies below a certain cutoff frequency to pass through while attenuating frequencies above it.

*   **Cutoff Frequency ($\omega_c$):** The frequency that marks the boundary between the passband and the stopband of a filter. In digital signal processing, it's typically expressed in normalized angular frequency units, where $\omega$ ranges from $0$ to $\pi$.

*   **Filter Size / Length ($N$):** The number of coefficients in the FIR filter's impulse response. A larger $N$ generally leads to a sharper transition band but increases computational complexity.

*   **Ideal Low-Pass Filter Impulse Response:** The theoretical impulse response of an ideal low-pass filter is given by the sinc function. However, directly implementing this leads to an infinitely long impulse response. For FIR filters, we truncate this response and often apply a windowing function to smooth the transition and reduce Gibbs phenomenon.
    The ideal impulse response is proportional to:
    $$ h_{ideal}[n] = \frac{\sin(\omega_c n)}{\pi n} $$
    In practice, to implement a causal FIR filter of length $N$, we often center the impulse response around $(N-1)/2$ to make it symmetric:
    $$ h[n] = \begin{cases} \frac{\sin(\omega_c (n - (N-1)/2))}{\pi (n - (N-1)/2))} & \text{for } n \neq (N-1)/2 \\ \frac{\omega_c}{\pi} & \text{for } n = (N-1)/2 \end{cases} $$
    This form ensures symmetry, which is desirable for linear phase FIR filters. (Reference: Downey, Chapter 6; Oppenheim & Schafer, Chapter 6)

*   **Frequency Response:** The Fourier Transform of the impulse response, $H(\omega) = \mathcal{F}\{h[n]\}$. It describes how the filter affects different frequency components of the input signal.

*   **Magnitude Response:** The magnitude of the frequency response, $|H(\omega)|$. It indicates the gain or attenuation of the filter at different frequencies.

*   **Phase Response:** The phase of the frequency response, $\angle H(\omega)$. It indicates the phase shift introduced by the filter at different frequencies. For FIR filters with symmetric impulse responses, the phase response is linear, which is desirable for preserving the waveform shape.

*   **Gibbs Phenomenon:** An artifact that occurs in the frequency response of FIR filters when approximating an ideal frequency response (like a brick-wall filter). It manifests as ripples in the passband and stopband near the cutoff frequency, especially for filters with shorter lengths. Windowing functions (like Hamming, Hanning, Blackman) are used to mitigate this. (Reference: Ingle & Proakis, Chapter 7; Oppenheim & Schafer, Chapter 6)

---

### 3. Implementation Steps (Python/Scilab)

The core idea is to calculate the values of $h[n]$ for $n = 0, 1, ..., N-1$ using the given formula.

**General Approach:**

1.  **Define Parameters:**
    *   Filter length: `N`
    *   Cutoff frequency: `wc` (in radians/sample)
    *   Sampling frequency (optional, for visualization in Hz): `fs`

2.  **Calculate the Center Index:** `center = (N - 1) / 2`

3.  **Generate Impulse Response Coefficients ($h[n]$):**
    Iterate from `n = 0` to `N-1`. For each `n`:
    *   If `n == center`, `h[n] = wc / pi`.
    *   If `n != center`, `h[n] = sin(wc * (n - center)) / (pi * (n - center))`.

4.  **Normalization (Optional but Recommended):** To ensure the passband gain is 1 (0 dB), the impulse response coefficients are often scaled by the sum of the coefficients.
    $$ h_{norm}[n] = \frac{h[n]}{\sum_{k=0}^{N-1} h[k]} $$
    This is particularly important for low-pass filters to have a DC gain of 1.

5.  **Analyze the Filter:**
    *   **Impulse Response Plot:** Plot $h[n]$ versus $n$.
    *   **Frequency Response Plot:** Compute the Discrete Fourier Transform (DFT) of $h[n]$ to get the frequency response $H(\omega)$. Plot $|H(\omega)|$ and $\angle H(\omega)$. You can use functions like `fft` in Python/Scilab. For better frequency resolution, pad the impulse response with zeros before computing the DFT.

---

### 4. Example Implementation (Python)

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import freqz

# --- Parameters ---
N = 50  # Filter length
wc1 = 0.1 * np.pi # Cutoff frequency 1
wc2 = 0.3 * np.pi # Cutoff frequency 2
fs = 1000 # Sampling frequency (for plotting in Hz, not strictly needed for FIR coeff calculation)

# --- Function to generate FIR low-pass filter coefficients ---
def fir_lowpass_coeffs(N, wc):
    center = (N - 1) / 2
    h = np.zeros(N)
    for n in range(N):
        if n == center:
            h[n] = wc / np.pi
        else:
            h[n] = np.sin(wc * (n - center)) / (np.pi * (n - center))

    # Normalize to have DC gain of 1
    h_norm = h / np.sum(h)
    return h_norm

# --- Generate coefficients for both cutoff frequencies ---
h1 = fir_lowpass_coeffs(N, wc1)
h2 = fir_lowpass_coeffs(N, wc2)

# --- Analysis and Plotting ---

# Function to plot filter characteristics
def plot_filter_characteristics(h, N, wc, title_suffix):
    # Plot Impulse Response
    plt.figure(figsize=(12, 8))
    plt.subplot(2, 1, 1)
    plt.stem(range(N), h, linefmt='b-', markerfmt='bo', basefmt=' ')
    plt.title(f'Impulse Response (N={N}, wc={wc/np.pi:.2f}π) {title_suffix}')
    plt.xlabel('n')
    plt.ylabel('h[n]')
    plt.grid(True)

    # Plot Frequency Response
    plt.subplot(2, 1, 2)
    # Use freqz for accurate frequency response calculation
    # Pad with zeros for smoother frequency response plot
    w, H = freqz(h, worN=800, fs=fs) # worN is the number of frequency points
    
    plt.plot(w, 20 * np.log10(abs(H)), 'b')
    plt.title(f'Magnitude Response (N={N}, wc={wc/np.pi:.2f}π) {title_suffix}')
    plt.xlabel('Frequency (Hz)')
    plt.ylabel('Magnitude (dB)')
    plt.grid(True)
    
    # Plot cutoff frequency line
    plt.axvline(wc * fs / (2 * np.pi), color='r', linestyle='--', label=f'Cutoff {wc/np.pi:.2f}π')
    plt.legend()

    plt.tight_layout()
    plt.show()
    
    # Plot Phase Response (Optional but good for understanding)
    plt.figure(figsize=(12, 4))
    plt.plot(w, np.unwrap(np.angle(H)))
    plt.title(f'Phase Response (N={N}, wc={wc/np.pi:.2f}π) {title_suffix}')
    plt.xlabel('Frequency (Hz)')
    plt.ylabel('Phase (radians)')
    plt.grid(True)
    plt.tight_layout()
    plt.show()


# --- Plot for wc = 0.1π ---
plot_filter_characteristics(h1, N, wc1, "(wc=0.1π)")

# --- Plot for wc = 0.3π ---
plot_filter_characteristics(h2, N, wc2, "(wc=0.3π)")

```

---

### 5. Example Implementation (Scilab)

```scilab
// --- Parameters ---
N = 50; // Filter length
wc1 = 0.1 * %pi; // Cutoff frequency 1
wc2 = 0.3 * %pi; // Cutoff frequency 2
fs = 1000; // Sampling frequency (for plotting in Hz)

// --- Function to generate FIR low-pass filter coefficients ---
function h_norm = fir_lowpass_coeffs(N, wc)
    center = (N - 1) / 2;
    h = zeros(1, N);
    for n = 1:N
        if (n - 1) == center then
            h(n) = wc / %pi;
        else
            h(n) = sin(wc * (n - 1 - center)) / (%pi * (n - 1 - center));
        end
    end
    // Normalize to have DC gain of 1
    h_norm = h / sum(h);
endfunction

// --- Generate coefficients for both cutoff frequencies ---
h1 = fir_lowpass_coeffs(N, wc1);
h2 = fir_lowpass_coeffs(N, wc2);

// --- Analysis and Plotting ---

// Function to plot filter characteristics
function plot_filter_characteristics(h, N, wc, title_suffix)
    // Plot Impulse Response
    scf(0); // New figure window
    clf(); // Clear the current figure
    subplot(2, 1, 1);
    plot(0:(N-1), h, '-o');
    title(sprintf('Impulse Response (N=%d, wc=%.2fπ) %s', N, wc/%pi, title_suffix));
    xlabel('n');
    ylabel('h[n]');
    xtitle('Impulse Response');
    grid();

    // Plot Frequency Response
    subplot(2, 1, 2);
    // Use freqs for frequency response calculation
    // Generate frequency vector from 0 to pi
    w = linspace(0, %pi, 512); // 512 points for smoother plot
    
    // Calculate frequency response H(w)
    H = zeros(1, length(w));
    for k = 1:length(w)
        H(k) = sum(h .* exp(-%i * (0:(N-1))' * w(k)));
    end

    mag_H_dB = 20 * log10(abs(H));
    
    // Convert normalized angular frequency to Hz for plotting
    w_hz = w * fs / (2 * %pi);
    
    plot(w_hz, mag_H_dB, 'b');
    title(sprintf('Magnitude Response (N=%d, wc=%.2fπ) %s', N, wc/%pi, title_suffix));
    xlabel('Frequency (Hz)');
    ylabel('Magnitude (dB)');
    grid();
    
    // Plot cutoff frequency line
    plot([wc * fs / (2 * %pi), wc * fs / (2 * %pi)], [-60, 0], 'r--'); // Adjust y-limits as needed
    legend(sprintf('Cutoff %.2fπ', wc/%pi));

    // Plot Phase Response (Optional but good for understanding)
    scf(1); // New figure window
    clf();
    phase_H = unwrap(atan(imag(H), real(H)));
    plot(w_hz, phase_H);
    title(sprintf('Phase Response (N=%d, wc=%.2fπ) %s', N, wc/%pi, title_suffix));
    xlabel('Frequency (Hz)');
    ylabel('Phase (radians)');
    grid();
endfunction

// --- Plot for wc = 0.1π ---
plot_filter_characteristics(h1, N, wc1, "(wc=0.1π)");

// --- Plot for wc = 0.3π ---
plot_filter_characteristics(h2, N, wc2, "(wc=0.3π)");

```

---

### 6. Observations and Analysis

*   **Impulse Response:**
    *   Observe the shape of the impulse response $h[n]$. It's symmetric around the center `(N-1)/2`.
    *   For the ideal low-pass filter, the impulse response is essentially a windowed sinc function.
    *   As $\omega_c$ increases, the sinc function oscillates faster, leading to a more rapidly varying impulse response.
    *   The length of the impulse response ($N$) determines the duration over which the filter's output depends on past inputs.

*   **Magnitude Response:**
    *   **Passband:** The region where the magnitude response is close to 0 dB (gain of 1).
    *   **Stopband:** The region where the magnitude response is significantly attenuated.
    *   **Transition Band:** The region between the passband and stopband where the attenuation changes.
    *   **Effect of $\omega_c$:**
        *   A **lower** $\omega_c$ means the cutoff frequency is at a lower normalized frequency. The passband extends to this lower frequency, and the transition band starts earlier.
        *   A **higher** $\omega_c$ means the cutoff frequency is at a higher normalized frequency. The passband extends further, and the transition band starts later.
    *   **Effect of $N$ (for a fixed $\omega_c$):**
        *   Increasing $N$ (for a fixed $\omega_c$) results in a **narrower transition band**, meaning a sharper cutoff. This brings the filter closer to an ideal low-pass filter's characteristics.
        *   However, increasing $N$ also increases the potential for the Gibbs phenomenon if no windowing is applied. (Though in this direct sinc implementation, the Gibbs phenomenon is inherent to the approximation of the ideal brick-wall response).

*   **Phase Response:**
    *   For a symmetric FIR filter, the phase response is linear. This means that all frequency components are delayed by the same amount, preserving the shape of the input signal.
    *   The slope of the linear phase response is related to the delay introduced by the filter, which is approximately $(N-1)/2$ samples.

---

### 7. Practice Questions and Exercises

1.  **Calculate the impulse response coefficients** for an FIR low-pass filter with $N=20$ and $\omega_c = 0.5\pi$. Manually calculate the first 3 coefficients and the center coefficient.
    *   **Answer:**
        *   $N=20$, so $(N-1)/2 = 19/2 = 9.5$.
        *   For $n=0$: $h[0] = \frac{\sin(0.5\pi (0 - 9.5))}{\pi (0 - 9.5)} = \frac{\sin(-4.75\pi)}{-9.5\pi} = \frac{\sin(0.25\pi)}{-9.5\pi} = \frac{1/\sqrt{2}}{-9.5\pi} \approx -0.0236$
        *   For $n=1$: $h[1] = \frac{\sin(0.5\pi (1 - 9.5))}{\pi (1 - 9.5)} = \frac{\sin(0.5\pi (-8.5))}{\pi (-8.5)} = \frac{\sin(-4.25\pi)}{-8.5\pi} = \frac{\sin(-0.25\pi)}{-8.5\pi} = \frac{-1/\sqrt{2}}{-8.5\pi} \approx 0.0267$
        *   For $n=2$: $h[2] = \frac{\sin(0.5\pi (2 - 9.5))}{\pi (2 - 9.5)} = \frac{\sin(0.5\pi (-7.5))}{\pi (-7.5)} = \frac{\sin(-3.75\pi)}{-7.5\pi} = \frac{\sin(0.75\pi)}{-7.5\pi} = \frac{1/\sqrt{2}}{-7.5\pi} \approx -0.0301$
        *   Center coefficient: Since $N=20$, the center is at $9.5$. The formula requires discrete indices $n$. The definition for $n = (N-1)/2$ is specifically for when $N$ is odd. For even $N$, the impulse response is often approximated symmetrically around $(N-1)/2$. However, if we strictly follow the given formula structure, it implicitly assumes a continuous time analog shifted, and then sampled. When $n = (N-1)/2$ exactly, the limit is taken. For even $N$, $(N-1)/2$ is not an integer. The formula is derived from the Fourier transform of a rectangular window in frequency. For $N=50$, the center is $24.5$. The formula as provided handles the case where $n - (N-1)/2$ might be exactly zero by stating the limit. For $N=50$, the specific index $n=24$ or $n=25$ would be close to the center. In the provided code, the check `if n == center` is for integer `center`. When `N` is even, `center` is `X.5`, so this `if` condition will never be met. The implementation should carefully handle this, or more commonly, the formula is adjusted to sample the sinc function such that the impulse response is centered *around* $(N-1)/2$. The code provided correctly handles this by computing the expression for all $n$ where $n \neq center$.

2.  **Using the provided Python/Scilab code, modify the filter length $N$ to 100.** What do you observe in the magnitude response, specifically in the transition band?
    *   **Answer:** Increasing $N$ to 100 will result in a **narrower transition band** and a sharper cutoff. The filter will more closely approximate the ideal low-pass filter's behavior. You might also notice increased ripples in the passband and stopband (Gibbs phenomenon) if $N$ is significantly increased without windowing.

3.  **How would changing $\omega_c$ from $0.1\pi$ to $0.2\pi$ affect the frequency response of the filter with $N=50$?**
    *   **Answer:** Changing $\omega_c$ to $0.2\pi$ will shift the cutoff frequency to a higher normalized frequency. This means the passband will extend further, and the transition band will start at a higher frequency. The filter will pass more high-frequency components compared to the filter with $\omega_c = 0.1\pi$.

4.  **(Advanced) Implement the same FIR low-pass filter but use a Hamming window to multiply the impulse response.** How does this affect the Gibbs phenomenon?
    *   **(Hint:** In Python, you can use `h_windowed = h_norm * np.hamming(N)` before plotting.)
    *   **Answer:** Applying a Hamming window (or any other window function) will **reduce the Gibbs phenomenon**. The trade-off is a **wider transition band**. The window function smooths out the abrupt truncation of the ideal impulse response, leading to a less "ripply" magnitude response near the cutoff frequency, but at the cost of a less steep cutoff.

---

### 8. Important Points to Remember

*   **Symmetry is Key:** The impulse response derived from the sinc function is symmetric, leading to linear phase response, which is crucial for preserving signal waveform.
*   **Trade-off in FIR Design:** There's a fundamental trade-off between the sharpness of the cutoff (transition band width) and the filter length ($N$). A shorter filter is computationally less expensive but has a wider transition band.
*   **Gibbs Phenomenon:** Directly truncating the ideal sinc impulse response without windowing leads to ripples in the frequency response near the cutoff frequency. Windowing functions are used to mitigate this.
*   **Normalization:** Normalizing the impulse response coefficients ensures that the filter has a gain of 1 (0 dB) at DC (frequency 0), which is typically desired for low-pass filters.
*   **Frequency Units:** Be mindful of whether frequencies are in radians/sample or Hz. Normalized angular frequency $\omega$ ranges from $0$ to $\pi$. To convert to Hz, use $\omega_{Hz} = \omega \times f_s / (2\pi)$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References and Further Reading

*   **Ingle & Proakis - Digital Signal Processing using Matlab:** Chapter 7 provides a comprehensive overview of FIR filter design techniques, including window methods and the properties of FIR filters.
*   **Downey - Think DSP: Digital Signal Processing using Python:** Chapter 6 ("Filters") discusses filter design concepts, including FIR filters and the implementation of low-pass filters using the sinc function. It offers practical Python examples.
*   **Oppenheim & Schafer - Discrete-Time Signal Processing:** Chapter 6 ("Filter Design Techniques") delves deeply into the theory behind FIR filter design, including the derivation of the ideal low-pass filter impulse response and the impact of windowing.

---

### 10. Alignment with Course Outcomes

*   **CO1: Generate basic signal waveforms (K2):** While not directly generating arbitrary waveforms, understanding the impulse response and frequency response involves analyzing the filter's effect on frequency components, which are the building blocks of waveforms. Plotting the impulse response itself is a basic signal generation.
*   **CO2: Verify the properties of DFT (K2):** The frequency response of the FIR filter is obtained by computing the DFT of its impulse response. Analyzing the magnitude and phase plots implicitly verifies properties related to the DFT.
*   **CO3: Familiarize with DSP hardware and interface with Computer (K2):** This lab exercise involves using software tools (Python/Scilab) for DSP implementation, which is a fundamental step before implementing on hardware.
*   **CO4: Implement LTI systems (K3):** An FIR filter is a prime example of an LTI system. Implementing its impulse response and observing its output (implicitly through frequency response analysis) demonstrates understanding of LTI system implementation.
*   **CO5: Design and Implement FIR low-pass filters (K3):** This is the core objective of this module. We are directly implementing the impulse response of an FIR low-pass filter and analyzing its design parameters ($\omega_c$, $N$).