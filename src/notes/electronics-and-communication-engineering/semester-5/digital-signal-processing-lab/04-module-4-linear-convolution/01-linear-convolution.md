---
title: "Linear convolution"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 4: Linear convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec40"
status: "completed"
scrapedAt: "2026-05-23T17:56:02.749Z"
---
# Digital Signal Processing Lab: Module 4 - Linear Convolution

## 1. Introduction to Linear Convolution

Linear convolution is a fundamental operation in digital signal processing (DSP) that describes the output of a Linear Time-Invariant (LTI) system when a specific input signal is applied. It essentially represents how the system "smears" or "filters" the input signal based on its impulse response.

**Key Concept:** The output of an LTI system is the convolution of the input signal with the system's impulse response.

**Mathematical Definition:**
For discrete-time signals $x[n]$ and $h[n]$, their linear convolution $y[n]$ is defined as:

$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

where:
* $y[n]$ is the output signal.
* $x[n]$ is the input signal.
* $h[n]$ is the impulse response of the LTI system.
* $n$ is the time index.
* $k$ is the summation index.

**Visualizing Convolution:**
Imagine flipping one of the signals (say, $h[k]$ becomes $h[-k]$) and then shifting it by $n$. At each shift $n$, you multiply the overlapping samples of $x[k]$ and the shifted $h[n-k]$ and sum them up. This summation gives you the output $y[n]$ at that specific time $n$.

---

## 2. Properties of Linear Convolution

Understanding the properties of convolution is crucial for analyzing and implementing LTI systems.

*   **Commutative Property:** The order of convolution does not matter.
    $x[n] * h[n] = h[n] * x[n]$
    *   **Explanation:** This means that if you convolve an input signal with a system's impulse response, you get the same result as convolving the impulse response with the input signal. This is also linked to the fact that the roles of input and impulse response can be interchanged in describing the system's behavior.

*   **Associative Property:** Convolution is associative, meaning you can group operations in different ways.
    $(x[n] * h_1[n]) * h_2[n] = x[n] * (h_1[n] * h_2[n])$
    *   **Explanation:** This property is vital when dealing with systems cascaded in series. If two systems with impulse responses $h_1[n]$ and $h_2[n]$ are connected in series, the overall impulse response of the combined system is the convolution of $h_1[n]$ and $h_2[n]$.

*   **Distributive Property:** Convolution distributes over addition.
    $x[n] * (h_1[n] + h_2[n]) = (x[n] * h_1[n]) + (x[n] * h_2[n])$
    *   **Explanation:** If a signal is input to a system that is a sum of two parallel LTI systems, the output is the sum of the outputs from each parallel system.

*   **Identity Property:** Convolution with the unit impulse $\delta[n]$ leaves the signal unchanged.
    $x[n] * \delta[n] = x[n]$
    *   **Explanation:** This highlights that the unit impulse $\delta[n]$ acts as the multiplicative identity for convolution, similar to how '1' is the multiplicative identity for regular multiplication. This property is directly related to the definition of the impulse response.

**Reference:** Ingle & Proakis, Chapter 2: "The Convolution Sum." They detail these properties and their significance in system analysis.

---

## 3. Calculating Linear Convolution

There are several methods to compute linear convolution, both analytically and computationally.

### 3.1 Analytical Calculation (Manual Method)

This involves manually applying the convolution sum formula. It's often used for simple signals and to understand the process.

**Steps:**
1.  **Flip:** Flip one of the signals (e.g., $x[k]$ to $x[-k]$).
2.  **Shift:** Shift the flipped signal by $n$ positions to get $x[n-k]$.
3.  **Multiply:** Multiply the original signal ($h[k]$) with the shifted and flipped signal ($x[n-k]$) sample by sample.
4.  **Sum:** Sum the products obtained in the multiplication step. This sum is the output $y[n]$ for the specific shift $n$.
5.  **Repeat:** Repeat steps 2-4 for all possible values of $n$ to obtain the complete output signal.

**Example (Ingle & Proakis, Chapter 2):**
Let $x[n] = \{1, 2, 3\}$ for $n=0, 1, 2$ and $h[n] = \{2, 4\}$ for $n=0, 1$. Assume signals are zero elsewhere.

*   $x[n] = 1 \cdot \delta[n] + 2 \cdot \delta[n-1] + 3 \cdot \delta[n-2]$
*   $h[n] = 2 \cdot \delta[n] + 4 \cdot \delta[n-1]$

Using the convolution sum $y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$:

*   For $n=0$: $y[0] = x[0]h[0] = 1 \times 2 = 2$
*   For $n=1$: $y[1] = x[0]h[1] + x[1]h[0] = (1 \times 4) + (2 \times 2) = 4 + 4 = 8$
*   For $n=2$: $y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1 \times 0) + (2 \times 4) + (3 \times 2) = 0 + 8 + 6 = 14$
*   For $n=3$: $y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] + x[3]h[0] = (1 \times 0) + (2 \times 0) + (3 \times 4) + (0 \times 2) = 0 + 0 + 12 + 0 = 12$
*   For $n=4$: $y[4] = x[0]h[4] + x[1]h[3] + x[2]h[2] + x[3]h[1] + x[4]h[0] = (1 \times 0) + (2 \times 0) + (3 \times 0) + (0 \times 4) + (0 \times 2) = 0$

So, $y[n] = \{2, 8, 14, 12\}$ for $n=0, 1, 2, 3$.

### 3.2 Computational Methods (using MATLAB/Python)

For practical implementation, especially with longer signals, computational methods are essential.

#### 3.2.1 Using MATLAB

MATLAB provides a built-in function `conv()` for linear convolution.

```matlab
% Example using MATLAB
x = [1, 2, 3];      % Input signal
h = [2, 4];         % Impulse response

y = conv(x, h);     % Compute linear convolution

disp('Output signal y:');
disp(y);
```

**Explanation:**
*   `x` and `h` are defined as vectors representing the signals.
*   `conv(x, h)` directly computes the linear convolution of `x` and `h`.
*   The length of the output signal `y` will be `length(x) + length(h) - 1`.

#### 3.2.2 Using Python (NumPy)

The NumPy library in Python offers the `convolve()` function.

```python
import numpy as np

# Example using Python
x = np.array([1, 2, 3])      # Input signal
h = np.array([2, 4])         # Impulse response

y = np.convolve(x, h)        # Compute linear convolution

print("Output signal y:")
print(y)
```

**Explanation:**
*   `x` and `h` are defined as NumPy arrays.
*   `np.convolve(x, h)` performs the linear convolution.
*   By default, `np.convolve` uses the `'full'` mode, which returns the complete convolution. Other modes like `'valid'` (only where the signals overlap completely) and `'same'` (output has the same length as the first input) are also available.

**Reference:** Downey, Chapter 3: "Convolution." Downey extensively covers convolution using Python and its interpretation in the context of signal processing.

---

## 4. Implementation of LTI Systems using Convolution

**Course Outcome Alignment:** CO4: Implement LTI systems (Knowledge Level: K3)

Linear convolution is the core operation for implementing LTI systems in the time domain. If we know the input signal $x[n]$ and the system's impulse response $h[n]$, we can determine the system's output $y[n]$ by computing their convolution.

**Process:**
1.  **Identify the Impulse Response:** The impulse response $h[n]$ is a unique characteristic of an LTI system. It defines how the system reacts to a unit impulse input.
2.  **Obtain the Input Signal:** This is the signal you want to process.
3.  **Perform Convolution:** Compute $y[n] = x[n] * h[n]$.

**Example:** Consider a simple moving average filter, which averages the current input sample and the previous input sample. Its impulse response is $h[n] = \{0.5, 0.5\}$ for $n=0, 1$. If the input is $x[n] = \{1, 2, 3, 4\}$, the output is:

$y[n] = x[n] * h[n]$

Using MATLAB:
```matlab
x = [1, 2, 3, 4];
h = [0.5, 0.5];
y = conv(x, h);
disp(y); % Output: [0.5  1.5  2.5  3.5  2]
```

Using Python:
```python
import numpy as np
x = np.array([1, 2, 3, 4])
h = np.array([0.5, 0.5])
y = np.convolve(x, h)
print(y) # Output: [0.5  1.5  2.5  3.5  2. ]
```

**Interpretation:** The output $y[1.5]$ represents the average of $x[1]$ and $x[2]$ (since the system's "center" might be between the impulse response taps). The first and last samples of the output are affected by the finite length of the impulse response and the input.

**Reference:** Chassaing, Chapter 5: "Convolution and FIR Filter Implementation." This book focuses on practical implementation using DSP hardware, where convolution is the fundamental step for FIR filtering.

---

## 5. Convolution in the Frequency Domain (using DFT)

**Course Outcome Alignment:** CO2: Verify the properties of DFT (Knowledge Level: K2)

While time-domain convolution can be computationally intensive for long signals, convolution in the frequency domain is often more efficient, especially when using the Fast Fourier Transform (FFT) algorithm.

**Key Property (Convolution Theorem):** The convolution of two signals in the time domain is equivalent to the multiplication of their Discrete Fourier Transforms (DFTs) in the frequency domain.

$x[n] * h[n] \iff X(k) \cdot H(k)$

where:
*   $X(k)$ is the DFT of $x[n]$.
*   $H(k)$ is the DFT of $h[n]$.
*   $\iff$ denotes equivalence in the frequency domain.

**Steps for Frequency-Domain Convolution:**
1.  **Append Zeros (Padding):** To obtain the correct result from circular convolution (which the DFT inherently computes), you must append zeros to both signals ($x[n]$ and $h[n]$) so that their length is at least $N_{x} + N_{h} - 1$, where $N_{x}$ and $N_{h}$ are the original lengths of the signals. This ensures that the circular convolution in the frequency domain corresponds to linear convolution in the time domain.
2.  **Compute DFTs:** Calculate the DFT of the zero-padded signals $x[n]$ and $h[n]$ to get $X(k)$ and $H(k)$.
3.  **Multiply in Frequency Domain:** Multiply $X(k)$ and $H(k)$ element-wise to get $Y(k) = X(k) \cdot H(k)$.
4.  **Compute Inverse DFT:** Calculate the Inverse DFT (IDFT) of $Y(k)$ to obtain the output signal $y[n]$.

**Example (Verification of DFT properties):**
Let $x[n] = \{1, 2, 3\}$ and $h[n] = \{2, 4\}$.
$N_x = 3$, $N_h = 2$.
Required DFT length $N = N_x + N_h - 1 = 3 + 2 - 1 = 4$.

Zero-pad $x[n]$ to length 4: $x_{padded}[n] = \{1, 2, 3, 0\}$
Zero-pad $h[n]$ to length 4: $h_{padded}[n] = \{2, 4, 0, 0\}$

Using MATLAB:
```matlab
x = [1, 2, 3];
h = [2, 4];
N = length(x) + length(h) - 1;

X = fft(x, N);  % DFT of x with N points
H = fft(h, N);  % DFT of h with N points
Y = X .* H;     % Multiplication in frequency domain
y_freq = ifft(Y); % Inverse DFT

disp('Output from frequency domain convolution (real part):');
disp(real(y_freq)); % Output: [2.0000  8.0000 14.0000 12.0000]
```

Using Python:
```python
import numpy as np

x = np.array([1, 2, 3])
h = np.array([2, 4])
N = len(x) + len(h) - 1

X = np.fft.fft(x, N)
H = np.fft.fft(h, N)
Y = X * H
y_freq = np.fft.ifft(Y)

print("Output from frequency domain convolution (real part):")
print(np.real(y_freq)) # Output: [ 2.  8. 14. 12.]
```

The results match the time-domain convolution, demonstrating the Convolution Theorem.

**When is Frequency-Domain Convolution Preferred?**
For long signals, computing FFTs and performing element-wise multiplication is often faster than direct time-domain convolution. This is the basis of the **Fast Convolution** algorithm.

---

## 6. Generating Basic Signal Waveforms (for testing convolution)

**Course Outcome Alignment:** CO1: Generate basic signal waveforms (Knowledge Level: K2)

To test and demonstrate linear convolution, we need to generate various basic signals.

*   **Unit Impulse ($\delta[n]$):** A signal that is 1 at $n=0$ and 0 elsewhere.
    *   MATLAB: `delta = [1];` or `delta = zeros(1, N); delta(1) = 1;`
    *   Python: `delta = np.array([1])` or `delta = np.zeros(N); delta[0] = 1`

*   **Unit Step ($u[n]$):** A signal that is 1 for $n \ge 0$ and 0 elsewhere.
    *   MATLAB: `step = ones(1, N);`
    *   Python: `step = np.ones(N)`

*   **Ramp Signal ($r[n] = n \cdot u[n]$):** A signal that is $n$ for $n \ge 0$ and 0 elsewhere.
    *   MATLAB: `ramp = 0:N-1;`
    *   Python: `ramp = np.arange(N)`

*   **Sine Wave ($A \sin(\omega_0 n + \phi)$):**
    *   MATLAB: `fs = 1000; n = 0:0.01:1; freq = 50; amp = 1; phase = 0; signal = amp*sin(2*pi*freq*n + phase);`
    *   Python: `fs = 1000; n = np.arange(0, 1, 0.01); freq = 50; amp = 1; phase = 0; signal = amp*np.sin(2*np.pi*freq*n + phase)`

*   **Exponential Signal ($a^n$):**
    *   MATLAB: `exp_signal = a.^(0:N-1);`
    *   Python: `exp_signal = a**np.arange(N)`

These signals can be used as inputs to systems with known impulse responses to observe the effect of convolution.

---

## 7. Designing and Implementing FIR Filters

**Course Outcome Alignment:** CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)

FIR (Finite Impulse Response) filters are a major application of linear convolution. Their impulse response is finite in duration.

**How FIR Filters Work:**
An FIR filter is characterized by its impulse response coefficients $h[n]$. The output $y[n]$ is computed as the convolution of the input signal $x[n]$ with the filter's impulse response:

$y[n] = \sum_{k=0}^{M-1} h[k] x[n-k]$

where $M$ is the length of the impulse response (and thus the filter order plus one).

**Designing an FIR Low-Pass Filter:**
Designing an FIR filter involves determining the coefficients $h[k]$ that satisfy desired frequency response characteristics (e.g., cutoff frequency, stopband attenuation). Common design methods include:
*   **Windowing Method:** This involves truncating an ideal low-pass filter's impulse response using a window function (e.g., Hamming, Hanning, Blackman). This method is relatively simple and widely used.
*   **Frequency Sampling Method:** Designs the filter by specifying the frequency response at specific frequencies.
*   **Optimal Methods (e.g., Parks-McClellan algorithm):** Designs filters with optimal characteristics in a minimax sense, offering better performance but being computationally more complex.

**Implementation:**
Once the coefficients $h[k]$ are designed, the filter is implemented using the convolution sum.

**Example (Using Windowing Method - conceptual):**
To design a simple low-pass FIR filter, you might start with the impulse response of an ideal low-pass filter, which is a sinc function: $h_{ideal}[n] = \frac{\sin(\omega_c n)}{\pi n}$, where $\omega_c$ is the cutoff frequency in radians per sample. However, this is infinite in duration.

Using the windowing method, we multiply $h_{ideal}[n]$ by a finite-length window function, say $w[n]$, to get $h[n] = h_{ideal}[n] \cdot w[n]$.

**MATLAB Example (Designing a simple FIR low-pass filter using `fir1`):**
```matlab
fs = 1000;          % Sampling frequency
cutoff_freq = 100;  % Cutoff frequency in Hz
filter_order = 10;  % Order of the filter

% Normalized cutoff frequency
normalized_cutoff = cutoff_freq / (fs / 2);

% Design the FIR low-pass filter
b = fir1(filter_order, normalized_cutoff, 'low'); % b are the filter coefficients (h[n])

% Generate an input signal (e.g., sine wave with noise)
t = 0:1/fs:1-1/fs;
input_signal = sin(2*pi*50*t) + 0.5*sin(2*pi*150*t) + 0.2*randn(size(t));

% Apply the filter using convolution
output_signal = conv(input_signal, b, 'same'); % 'same' to keep output length same as input

% Plotting (optional, but recommended)
figure;
subplot(2,1,1); plot(t, input_signal); title('Input Signal');
subplot(2,1,2); plot(t, output_signal); title('Filtered Output Signal');
xlabel('Time (s)');
```

**Python Example (Designing a simple FIR low-pass filter using `scipy.signal.firwin`):**
```python
import numpy as np
from scipy.signal import firwin, lfilter
import matplotlib.pyplot as plt

fs = 1000
cutoff_freq = 100
filter_order = 10

# Normalized cutoff frequency
normalized_cutoff = cutoff_freq / (fs / 2)

# Design the FIR low-pass filter coefficients
b = firwin(filter_order + 1, normalized_cutoff, window='hamming') # firwin returns N+1 coeffs for order N

# Generate an input signal
t = np.arange(0, 1, 1/fs)
input_signal = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*150*t) + 0.2*np.random.randn(len(t))

# Apply the filter using convolution (or lfilter for efficiency)
# Using convolution explicitly:
# output_signal = np.convolve(input_signal, b, mode='same')

# Using lfilter (more efficient for filtering):
output_signal = lfilter(b, 1, input_signal) # lfilter(b, a, x) where 'a' are denominator coeffs (1 for FIR)

plt.figure()
plt.subplot(2,1,1); plt.plot(t, input_signal); plt.title('Input Signal');
plt.subplot(2,1,2); plt.plot(t, output_signal); plt.title('Filtered Output Signal');
plt.xlabel('Time (s)');
plt.show()
```

**Important Note:** While `conv` can be used for filtering, the `lfilter` function in SciPy (or similar functions in other DSP libraries) is generally more numerically stable and efficient for applying filters, especially when dealing with large signals. However, `conv` directly demonstrates the underlying mathematical operation.

---

## 8. Practice Questions and Exercises

**Question 1:**
Given $x[n] = \{1, 2, 3\}$ for $n=0, 1, 2$ and $h[n] = \{1, -1\}$ for $n=0, 1$.
Calculate $y[n] = x[n] * h[n]$ using the convolution sum formula.
**Answer:**
Let $x[n] = 1 \cdot \delta[n] + 2 \cdot \delta[n-1] + 3 \cdot \delta[n-2]$ and $h[n] = 1 \cdot \delta[n] - 1 \cdot \delta[n-1]$.
$y[0] = x[0]h[0] = 1 \times 1 = 1$
$y[1] = x[0]h[1] + x[1]h[0] = (1 \times -1) + (2 \times 1) = -1 + 2 = 1$
$y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1 \times 0) + (2 \times -1) + (3 \times 1) = 0 - 2 + 3 = 1$
$y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] = (1 \times 0) + (2 \times 0) + (3 \times -1) = 0 + 0 - 3 = -3$
So, $y[n] = \{1, 1, 1, -3\}$ for $n=0, 1, 2, 3$.

**Question 2:**
Use MATLAB or Python to verify your answer for Question 1 by implementing the convolution.
**Answer:**
MATLAB:
```matlab
x = [1, 2, 3];
h = [1, -1];
y = conv(x, h);
disp(y); % Output: [ 1  1  1 -3]
```
Python:
```python
import numpy as np
x = np.array([1, 2, 3])
h = np.array([1, -1])
y = np.convolve(x, h)
print(y) # Output: [ 1  1  1 -3]
```

**Question 3:**
Consider two signals: $x[n] = \{1, 0, 1\}$ and $h[n] = \{0, 1, 0\}$.
Calculate $y[n] = x[n] * h[n]$ using both time-domain convolution and frequency-domain convolution. Ensure your zero-padding is correct for frequency-domain convolution.
**Answer:**
Time-domain:
$x[n] = 1 \cdot \delta[n] + 0 \cdot \delta[n-1] + 1 \cdot \delta[n-2]$
$h[n] = 0 \cdot \delta[n] + 1 \cdot \delta[n-1] + 0 \cdot \delta[n-2]$
$y[0] = x[0]h[0] = 1 \times 0 = 0$
$y[1] = x[0]h[1] + x[1]h[0] = (1 \times 1) + (0 \times 0) = 1$
$y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1 \times 0) + (0 \times 1) + (1 \times 0) = 0$
$y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] = (1 \times 0) + (0 \times 0) + (1 \times 1) = 1$
$y[4] = x[0]h[4] + x[1]h[3] + x[2]h[2] = (1 \times 0) + (0 \times 0) + (1 \times 0) = 0$
So, $y[n] = \{0, 1, 0, 1, 0\}$.

Frequency-domain:
$N_x = 3$, $N_h = 3$. $N = N_x + N_h - 1 = 3 + 3 - 1 = 5$.
$x_{padded} = \{1, 0, 1, 0, 0\}$
$h_{padded} = \{0, 1, 0, 0, 0\}$

MATLAB/Python implementation will yield `[0 1 0 1 0]`.

**Question 4:**
Describe the role of linear convolution in the context of FIR filtering. How does the impulse response of an FIR filter relate to the convolution operation?
**Answer:**
Linear convolution is the fundamental operation used to implement an FIR filter. The output of an FIR filter is obtained by convolving the input signal with the filter's impulse response. The impulse response coefficients are essentially the "taps" or weights of the filter, and the convolution process sums up weighted and delayed versions of the input signal.

---

## 9. Important Points to Remember

*   **Definition:** $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$
*   **Length of Convolution:** For finite-length signals $x[n]$ of length $N_x$ and $h[n]$ of length $N_h$, the output $y[n]$ has a length of $N_x + N_h - 1$.
*   **Commutative, Associative, Distributive:** Remember these properties for analyzing cascaded and parallel systems.
*   **Frequency Domain Convolution:** $x[n] * h[n] \iff X(k) \cdot H(k)$. Crucial for efficient processing of long signals.
*   **Zero Padding:** Essential for frequency-domain convolution to obtain linear convolution results. The DFT length should be at least $N_x + N_h - 1$.
*   **FIR Filter Implementation:** Convolution is the direct method for applying FIR filters.
*   **Tools:** MATLAB's `conv` and Python's `np.convolve` are essential tools for implementation. `fir1`, `firwin`, and `lfilter` are valuable for filter design and application.

---

This comprehensive set of notes covers the core concepts of linear convolution, its properties, calculation methods, its significance in implementing LTI systems and FIR filters, and its relationship with the DFT. The examples and practice questions should aid in understanding and applying these concepts in the Digital Signal Processing Lab.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
