---
title: "Compute h[n]w[n] in both cases and store as file."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec53"
status: "completed"
scrapedAt: "2026-05-23T17:56:14.135Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 7: FIR Low Pass Filter

## Topic: Compute $h[n]w[n]$ in Both Cases and Store as File

### 1. Introduction to FIR Low-Pass Filters

*   **Definition:** Finite Impulse Response (FIR) filters are digital filters whose impulse response $h[n]$ is of finite duration. FIR filters are widely used due to their desirable properties, such as guaranteed stability and the ability to achieve linear phase response.
*   **Low-Pass Filter:** A low-pass filter is a filter that passes signals with a frequency lower than a certain cutoff frequency and attenuates signals with frequencies higher than the cutoff frequency.
*   **Impulse Response ($h[n]$):** The impulse response of a system characterizes its output when the input is a unit impulse function $\delta[n]$. For an FIR filter, $h[n]$ is the sequence of coefficients that define the filter.
*   **Windowing Method:** This is a common technique for designing FIR filters. It involves obtaining the ideal low-pass filter's impulse response (which is infinite) and then multiplying it by a finite-duration window function $w[n]$ to truncate it, creating a practical FIR filter.

### 2. Key Concepts and Definitions

*   **Ideal Low-Pass Filter Impulse Response:** The impulse response of an ideal low-pass filter is given by the sinc function:
    $h_{ideal}[n] = \frac{\sin(\omega_c n)}{\pi n}$
    where $\omega_c$ is the cutoff frequency in radians/sample.
    *   **Important Note:** This ideal impulse response is non-causal and infinite in duration.

*   **Causality:** A system is causal if its output at any time depends only on present and past inputs. For a digital filter to be causal, its impulse response $h[n]$ must be zero for $n < 0$. The ideal low-pass filter's impulse response is symmetric around $n=0$, making it non-causal.

*   **Window Function ($w[n]$):** A window function is a finite-duration, real-valued sequence that is zero outside a specific interval. It is used to truncate the infinite impulse response of an ideal filter. The choice of window function affects the filter's characteristics, such as stopband attenuation and transition bandwidth.

*   **Finite Impulse Response ($h[n]$):** The practical FIR filter's impulse response is obtained by multiplying the ideal impulse response with a window function.
    $h[n] = h_{ideal}[n] \cdot w[n]$
    This process effectively truncates the ideal response and can introduce undesirable spectral characteristics.

*   **Types of Window Functions (as mentioned in textbooks):**
    *   **Rectangular Window:** The simplest window, essentially truncating the ideal impulse response. It has poor stopband attenuation.
        $w[n] = 1$ for $0 \le n \le N-1$, and $0$ otherwise.
    *   **Bartlett (Triangular) Window:** Better stopband attenuation than the rectangular window.
    *   **Hanning Window:** Provides good stopband attenuation and a narrow main lobe.
    *   **Hamming Window:** Similar to the Hanning window but offers slightly better stopband attenuation.
    *   **Blackman Window:** Offers excellent stopband attenuation but has a wider main lobe.

### 3. Implementing the Computation of $h[n]w[n]$

The core task is to compute the product of the impulse response of an ideal filter and a chosen window function.

**Case 1: Causal Filter Design (Windowing Method)**

When designing FIR filters using the windowing method, we need to convert the non-causal ideal impulse response to a causal one before applying the window.

**Steps:**

1.  **Determine Filter Specifications:**
    *   Desired cutoff frequency ($\omega_c$).
    *   Order of the FIR filter ($N$). The order determines the filter's length. For the windowing method, the length of the filter is typically $N+1$.

2.  **Calculate the Ideal Impulse Response:**
    The ideal low-pass filter impulse response is $h_{ideal}[n] = \frac{\sin(\omega_c (n - \alpha))}{\pi (n - \alpha)}$, where $\alpha$ is a delay introduced to make the filter causal. The delay is typically set to $(N)/2$ to center the impulse response around $n = N/2$, making it symmetric.

3.  **Select a Window Function:** Choose a suitable window function $w[n]$ (e.g., Hanning, Hamming, Blackman).

4.  **Compute the Window Function:** Generate the window sequence $w[n]$ for the desired length ($N+1$).

5.  **Compute the Product $h[n] = h_{ideal}[n] \cdot w[n]$:** Multiply the causal ideal impulse response by the window function point-by-point.

**Example (Illustrative - without specific values for simplicity):**

Let's say we want to design a 4th-order FIR low-pass filter ($N=4$). The filter length will be $N+1=5$.
The delay $\alpha = N/2 = 4/2 = 2$.

*   **Ideal Impulse Response (shifted for causality):**
    $h_{ideal}[n] = \frac{\sin(\omega_c (n - 2))}{\pi (n - 2)}$ for $n = 0, 1, 2, 3, 4$.

*   **Window Function (e.g., Hanning):**
    $w[n]$ for $n = 0, 1, 2, 3, 4$.

*   **Computed FIR Filter Coefficients:**
    $h[0] = h_{ideal}[0] \cdot w[0]$
    $h[1] = h_{ideal}[1] \cdot w[1]$
    $h[2] = h_{ideal}[2] \cdot w[2]$
    $h[3] = h_{ideal}[3] \cdot w[3]$
    $h[4] = h_{ideal}[4] \cdot w[4]$

**Case 2: Design of Symmetric FIR Filters (Common in Windowing)**

The windowing method naturally leads to symmetric or anti-symmetric impulse responses when the ideal impulse response is centered and the window function is symmetric. For low-pass filters, we aim for symmetry.

**Steps (Similar to Case 1, but emphasizing symmetry):**

1.  **Determine Filter Specifications:** Cutoff frequency ($\omega_c$) and filter length ($M = N+1$).

2.  **Calculate the Ideal Impulse Response Centered at $n = (M-1)/2$:**
    $h_{ideal}[n] = \frac{\sin(\omega_c (n - (M-1)/2))}{\pi (n - (M-1)/2)}$ for $n = 0, 1, \ldots, M-1$.

3.  **Select a Window Function:** Choose a symmetric window function $w[n]$ of length $M$.

4.  **Compute the Product $h[n] = h_{ideal}[n] \cdot w[n]$:** Multiply the centered ideal impulse response by the window function.

*   **Important Point:** This computed $h[n]$ will be symmetric, which guarantees linear phase response. The delay $\alpha = (M-1)/2$ ensures causality.

**Example using Python (Think DSP by Downey):**

Let's design a low-pass filter with a cutoff frequency of $\omega_c = 0.5\pi$ and a length of $M=10$ using a Hanning window.

```python
import numpy as np
import matplotlib.pyplot as plt

# Filter specifications
M = 10  # Filter length (order N = M-1 = 9)
wc = 0.5 * np.pi # Cutoff frequency in radians/sample

# Calculate the delay for centering
alpha = (M - 1) / 2

# Generate the Hanning window
w = np.hanning(M)

# Calculate the ideal impulse response and multiply by the window
h = np.zeros(M)
for n in range(M):
    # Handle the case where n - alpha is zero (n = alpha)
    if n == alpha:
        h[n] = wc / np.pi  # Limit of sin(x)/x as x->0 is 1, but here it's sin(wc*0)/pi*0. The limit of sin(k*x)/(pi*x) is k/pi.
                           # For ideal LP filter, the value at n=alpha is wc/pi
    else:
        h[n] = np.sin(wc * (n - alpha)) / (np.pi * (n - alpha))
    
    # Multiply by the window
    h[n] = h[n] * w[n]

print("Computed FIR Filter Coefficients (h[n]):")
print(h)

# Save the coefficients to a file
filename = "fir_lp_coefficients.txt"
np.savetxt(filename, h)
print(f"\nCoefficients saved to '{filename}'")

# --- Optional: Visualize the impulse response ---
plt.figure()
plt.stem(range(M), h)
plt.title("FIR Low-Pass Filter Impulse Response (h[n])")
plt.xlabel("Sample (n)")
plt.ylabel("Amplitude")
plt.grid(True)
plt.show()
```

**Explanation of the Code:**

1.  `M = 10`: Sets the desired length of the FIR filter.
2.  `wc = 0.5 * np.pi`: Defines the cutoff frequency.
3.  `alpha = (M - 1) / 2`: Calculates the center of the impulse response for symmetry.
4.  `w = np.hanning(M)`: Generates a Hanning window of length `M`.
5.  The loop iterates from `n = 0` to `M-1` to calculate each coefficient `h[n]`.
6.  **Special Case `n == alpha`:** The formula $\frac{\sin(\omega_c (n - \alpha))}{\pi (n - \alpha)}$ has a singularity at $n = \alpha$. We use the limit of $\frac{\sin(kx)}{kx}$ as $x \to 0$, which is 1. So, the term becomes $\frac{\omega_c}{\pi}$.
7.  `h[n] = h[n] * w[n]`: The ideal impulse response is multiplied by the corresponding window coefficient.
8.  `np.savetxt(filename, h)`: Saves the computed coefficients to a text file named `fir_lp_coefficients.txt`.

### 4. Storing as a File

Saving the computed coefficients to a file is crucial for using them in subsequent steps, such as applying the filter to a signal or implementing it on hardware.

*   **File Formats:** Common formats include plain text files (`.txt`), CSV files (`.csv`), or binary files. Text files are generally easier to read and inspect.
*   **Data Representation:** Each coefficient can be stored on a new line or separated by spaces or commas.
*   **Example using MATLAB:**

```matlab
% Filter specifications
M = 10; % Filter length
wc = 0.5 * pi; % Cutoff frequency

% Calculate the delay for centering
alpha = (M - 1) / 2;

% Generate the Hanning window
w = hann(M);

% Calculate the ideal impulse response and multiply by the window
h = zeros(1, M);
for n = 0:(M-1)
    % Handle the case where n - alpha is zero
    if n == alpha
        h(n+1) = wc / pi; % MATLAB uses 1-based indexing
    else
        h(n+1) = sin(wc * (n - alpha)) / (pi * (n - alpha));
    end
    
    % Multiply by the window
    h(n+1) = h(n+1) * w(n+1);
end

disp('Computed FIR Filter Coefficients (h[n]):');
disp(h);

% Save the coefficients to a file
filename = 'fir_lp_coefficients.txt';
dlmwrite(filename, h, ' '); % ' ' specifies space delimiter
disp(['Coefficients saved to ''', filename, '''']);

% --- Optional: Visualize the impulse response ---
figure;
stem(0:(M-1), h);
title('FIR Low-Pass Filter Impulse Response (h[n])');
xlabel('Sample (n)');
ylabel('Amplitude');
grid on;
```

### 5. Connection to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While not directly generating waveforms here, understanding the ideal low-pass filter's impulse response (sinc function) involves knowledge of basic signal shapes.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** The frequency response of the designed FIR filter (which is computed using DFT or FFT) can be analyzed to verify low-pass characteristics.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** Saving coefficients to a file is the first step towards loading them onto DSP hardware for real-time implementation.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** The computed $h[n]$ are the coefficients for an LTI system (the FIR filter). Implementing this system means applying convolution with an input signal.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** This topic is the core of designing an FIR low-pass filter using the windowing method, leading to the computation and storage of its coefficients.

### 6. Important Points to Remember

*   **Causality:** The ideal low-pass filter is non-causal. Shifting its impulse response by $\alpha = (N)/2$ (or $(M-1)/2$) makes it causal and symmetric.
*   **Windowing Effect:** Multiplying the ideal impulse response by a window function truncates it, leading to a trade-off between stopband attenuation and transition bandwidth. Different windows offer different trade-offs.
*   **Linear Phase:** Designing symmetric FIR filters (which this method achieves) guarantees a linear phase response, which is desirable as it means all frequency components are delayed by the same amount, preserving the waveform shape.
*   **Filter Length:** The length of the FIR filter ($M$) significantly impacts its performance. A longer filter generally allows for a sharper cutoff and better stopband attenuation but increases computational complexity.
*   **Cutoff Frequency:** The cutoff frequency ($\omega_c$) determines the transition point between the passband and the stopband.

### 7. Practice Questions and Exercises

**Question 1:**
Design an FIR low-pass filter of length $M=11$ with a cutoff frequency of $\omega_c = 0.3\pi$ using a Hamming window. Compute the filter coefficients $h[n]$ and save them to a file named `hamming_lp_filter.txt`.

**Answer 1:**

```python
import numpy as np

# Filter specifications
M = 11
wc = 0.3 * np.pi

# Calculate the delay for centering
alpha = (M - 1) / 2

# Generate the Hamming window
w = np.hamming(M)

# Calculate the ideal impulse response and multiply by the window
h = np.zeros(M)
for n in range(M):
    if n == alpha:
        h[n] = wc / np.pi
    else:
        h[n] = np.sin(wc * (n - alpha)) / (np.pi * (n - alpha))
    
    h[n] = h[n] * w[n]

print("Computed FIR Filter Coefficients (h[n]) for Hamming window:")
print(h)

# Save the coefficients to a file
filename = "hamming_lp_filter.txt"
np.savetxt(filename, h)
print(f"\nCoefficients saved to '{filename}'")
```

**Expected Output (coefficients will be precise values):**
The output will be a numpy array of 11 coefficients. The file `hamming_lp_filter.txt` will contain these coefficients, likely one per line or space-separated.

**Question 2:**
Explain the trade-off encountered when choosing a window function for FIR filter design. What are the advantages of using a Blackman window compared to a Rectangular window for an FIR low-pass filter?

**Answer 2:**
The trade-off when choosing a window function is between **stopband attenuation** and **transition bandwidth**.

*   **Rectangular Window:** Offers the narrowest transition band but has the poorest stopband attenuation (around -21 dB).
*   **Blackman Window:** Offers excellent stopband attenuation (around -57 dB) but has a significantly wider transition band compared to the rectangular or Hanning windows.

**Advantages of Blackman over Rectangular for FIR Low-Pass Filter:**

*   **Higher Stopband Attenuation:** The Blackman window effectively suppresses unwanted frequencies in the stopband much better than the rectangular window. This means the filter will be more effective at blocking signals above the cutoff frequency.
*   **Smoother Roll-off:** While the transition is wider, the roll-off from the passband to the stopband is smoother, which can be desirable in some applications.

The disadvantage of the Blackman window is that the transition band is wider, meaning there's a larger range of frequencies between the passband and the stopband that are neither fully passed nor fully attenuated. The choice depends on the specific requirements of the application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References

*   **Digital Signal Processing using Matlab by Vinay K. Ingle, John G. Proakis:** This textbook likely covers windowing methods in detail, providing derivations and examples of designing FIR filters using various windows. It will emphasize the practical aspects of filter design in a MATLAB environment.
*   **Think DSP: Digital Signal Processing using Python by Allen B. Downey:** As demonstrated in the example code, this book is excellent for practical implementation in Python, explaining the concepts behind the windowing method and providing code examples.
*   **Discrete-Time Signal Processing by Alan V Oppenheim, Ronald W. Schafer:** This is a foundational text that will provide a rigorous theoretical understanding of FIR filter design, including the properties of ideal filters, windowing techniques, and the resulting frequency responses.

This comprehensive study note covers the computation of $h[n]w[n]$ for FIR low-pass filters, including the underlying theory, practical implementation steps, examples, and connections to course outcomes, drawing upon the specified textbooks.