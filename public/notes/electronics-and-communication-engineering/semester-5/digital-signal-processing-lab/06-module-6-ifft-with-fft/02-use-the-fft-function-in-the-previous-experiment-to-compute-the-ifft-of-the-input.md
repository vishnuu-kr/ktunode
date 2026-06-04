---
title: "Use the FFT function in the previous experiment to compute the IFFT of the input signal."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 6: IFFT with FFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec4d"
status: "completed"
scrapedAt: "2026-05-23T17:56:10.570Z"
---
# Digital Signal Processing Lab - Module 6: IFFT with FFT

## Topic: Use the FFT function in the previous experiment to compute the IFFT of the input signal.

---

### 1. Introduction to the Relationship between FFT and IFFT

The Fast Fourier Transform (FFT) and the Inverse Fast Fourier Transform (IFFT) are fundamental algorithms in digital signal processing. They are intrinsically linked, allowing us to move between the time domain and the frequency domain.

*   **Time Domain:** Represents a signal as a sequence of values over time.
*   **Frequency Domain:** Represents a signal by its constituent frequencies and their amplitudes and phases.

The FFT efficiently computes the Discrete Fourier Transform (DFT), which transforms a time-domain signal into its frequency-domain representation. The IFFT, conversely, transforms a frequency-domain representation back into its time-domain signal.

**Key Concept:** The IFFT is the inverse operation of the FFT. If you apply the FFT to a signal and then apply the IFFT to the resulting spectrum, you should ideally recover the original signal (up to a scaling factor).

**Connection to Learning Outcomes:**
*   **CO2: Verify the properties of DFT:** This module directly verifies the inverse property of the DFT, which is crucial for understanding its behavior.

---

### 2. The Mathematical Relationship

Let $x[n]$ be a discrete-time signal of length $N$. Its DFT, $X[k]$, is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi kn}{N}}$  for $k = 0, 1, \dots, N-1$

The Inverse DFT (IDFT), which transforms $X[k]$ back to $x[n]$, is given by:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi kn}{N}}$ for $n = 0, 1, \dots, N-1$

**The FFT is an efficient algorithm to compute the DFT, and the IFFT is an efficient algorithm to compute the IDFT.**

**Important Point:** Notice the conjugate sign in the exponent ($e^{-j}$ for DFT and $e^{+j}$ for IDFT) and the scaling factor of $\frac{1}{N}$ in the IDFT. These are the key differences in their mathematical definitions.

---

### 3. Computing IFFT using FFT Functionality

Most DSP libraries and software packages (like MATLAB or Python with SciPy) provide dedicated functions for both FFT and IFFT. However, it's possible to compute the IFFT using only the FFT function by leveraging the mathematical relationship.

**Method to compute IFFT using FFT:**

To compute the IFFT of a sequence $X[k]$ using an FFT function, we can perform the following steps:

1.  **Take the complex conjugate of the input sequence $X[k]$:**
    $X^*[k] = \text{conj}(X[k])$

2.  **Apply the FFT function to the conjugated sequence:**
    $\text{FFT}(X^*[k])$

3.  **Take the complex conjugate of the result:**
    $\text{conj}(\text{FFT}(X^*[k]))$

4.  **Scale the result by $\frac{1}{N}$:**
    $x[n] = \frac{1}{N} \text{conj}(\text{FFT}(\text{conj}(X[k])))$

**Why does this work?**

Let's look at the IDFT formula again:
$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi kn}{N}}$

We can rewrite the exponential term:
$e^{j \frac{2\pi kn}{N}} = (e^{-j \frac{2\pi kn}{N}})^*$  (The conjugate of $e^{-j\theta}$ is $e^{j\theta}$)

So, $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] (e^{-j \frac{2\pi kn}{N}})^*$

Now, let's use the property that $\sum a_k b_k^* = (\sum a_k^* b_k)^*$.
Here, $a_k = X[k]$ and $b_k = e^{-j \frac{2\pi kn}{N}}$.

$x[n] = \frac{1}{N} \left( \sum_{k=0}^{N-1} X^*[k] e^{-j \frac{2\pi kn}{N}} \right)^*$

The term inside the parenthesis is precisely the DFT of $X^*[k]$!

$\sum_{k=0}^{N-1} X^*[k] e^{-j \frac{2\pi kn}{N}} = \text{FFT}(X^*[k])$

Therefore, $x[n] = \frac{1}{N} (\text{FFT}(X^*[k]))^*$.
Since the conjugate of a sum is the sum of the conjugates, and the conjugate of a sum of complex conjugates is the original sum, the steps outlined above correctly compute the IFFT.

**Textbook Reference:**
*   **Ingle & Proakis:** Likely discusses the DFT and IDFT properties, including their relationship. Chapter 3 (Discrete Fourier Transform) would be a relevant section.
*   **Downey:** Chapter 10 (FFT) often explains the relationship and how to implement IFFT from FFT.

**Connection to Learning Outcomes:**
*   **CO2: Verify the properties of DFT:** This method directly demonstrates the inverse relationship by using the FFT to compute the IDFT.

---

### 4. Practical Implementation (Conceptual with MATLAB/Python Examples)

Let's assume you have a time-domain signal `x` and you've computed its FFT, `X`, in a previous experiment.

**Scenario:** You have `x` (time-domain signal) and `X` (frequency-domain representation, computed using FFT). You want to verify that `X` indeed represents `x` by computing the IFFT of `X` and comparing it to `x`.

**Standard Approach (using dedicated IFFT function):**

**MATLAB:**
```matlab
% Assume 'x' is your original time-domain signal of length N
N = length(x);

% Compute FFT (as done in previous experiments)
X = fft(x);

% Compute IFFT using the dedicated function
x_reconstructed = ifft(X);

% Verify
disp('Original signal (first few samples):');
disp(x(1:5));
disp('Reconstructed signal (first few samples):');
disp(x_reconstructed(1:5));

% Check if they are close (due to floating-point precision)
tolerance = 1e-10;
if max(abs(x - x_reconstructed)) < tolerance
    disp('IFFT reconstruction is successful!');
else
    disp('IFFT reconstruction has errors.');
end
```

**Python (using NumPy/SciPy):**
```python
import numpy as np
from scipy.fft import fft, ifft

# Assume 'x' is your original time-domain signal of length N
N = len(x)

# Compute FFT (as done in previous experiments)
X = fft(x)

# Compute IFFT using the dedicated function
x_reconstructed = ifft(X)

# Verify
print('Original signal (first few samples):')
print(x[:5])
print('Reconstructed signal (first few samples):')
print(x_reconstructed[:5])

# Check if they are close (due to floating-point precision)
tolerance = 1e-10
if np.max(np.abs(x - x_reconstructed)) < tolerance:
    print('IFFT reconstruction is successful!')
else:
    print('IFFT reconstruction has errors.')
```

**Computing IFFT using FFT:**

Now, let's implement the method described in Section 3 using only the `fft` function.

**MATLAB:**
```matlab
% Assume 'X' is the FFT spectrum obtained in a previous experiment
% X is a complex array of length N

N = length(X);

% Step 1: Take the complex conjugate of X
X_conj = conj(X);

% Step 2: Apply FFT to the conjugated sequence
fft_of_conj = fft(X_conj);

% Step 3: Take the complex conjugate of the result
conj_of_fft_of_conj = conj(fft_of_conj);

% Step 4: Scale by 1/N
x_reconstructed_using_fft = (1/N) * conj_of_fft_of_conj;

% Verify against the original signal 'x' (if available) or against the ifft result
disp('Original signal (first few samples):');
disp(x(1:5)); % Assuming 'x' is still available from previous steps
disp('Reconstructed signal using FFT method (first few samples):');
disp(x_reconstructed_using_fft(1:5));

% Check if they are close
tolerance = 1e-10;
if max(abs(x - x_reconstructed_using_fft)) < tolerance
    disp('IFFT reconstruction using FFT is successful!');
else
    disp('IFFT reconstruction using FFT has errors.');
end
```

**Python (using NumPy/SciPy):**
```python
import numpy as np
from scipy.fft import fft # Only need fft for this method

# Assume 'X' is the FFT spectrum obtained in a previous experiment
# X is a complex array of length N

N = len(X)

# Step 1: Take the complex conjugate of X
X_conj = np.conj(X)

# Step 2: Apply FFT to the conjugated sequence
fft_of_conj = fft(X_conj)

# Step 3: Take the complex conjugate of the result
conj_of_fft_of_conj = np.conj(fft_of_fft_of_conj)

# Step 4: Scale by 1/N
x_reconstructed_using_fft = (1/N) * conj_of_fft_of_conj

# Verify against the original signal 'x' (if available) or against the ifft result
print('Original signal (first few samples):')
print(x[:5]) # Assuming 'x' is still available from previous steps
print('Reconstructed signal using FFT method (first few samples):')
print(x_reconstructed_using_fft[:5])

# Check if they are close
tolerance = 1e-10
if np.max(np.abs(x - x_reconstructed_using_fft)) < tolerance:
    print('IFFT reconstruction using FFT is successful!')
else:
    print('IFFT reconstruction using FFT has errors.')
```

**Connection to Learning Outcomes:**
*   **CO1: Generate basic signal waveforms:** You'd typically start with a signal (e.g., a sine wave) to perform FFT on, and then verify IFFT.
*   **CO2: Verify the properties of DFT:** This directly demonstrates the inverse property.
*   **CO3: Familiarize with DSP hardware and interface with Computer:** While this is a conceptual example, in a lab setting, you would be typing these commands into a computer.

---

### 5. Illustrative Example: Reconstructing a Simple Signal

Let's create a simple signal and see how this works.

**Signal:** A combination of two sinusoids: $x[n] = \sin(2\pi f_1 n/F_s) + 0.5\sin(2\pi f_2 n/F_s)$
Let $F_s = 100$ Hz, $f_1 = 5$ Hz, $f_2 = 15$ Hz.
Consider a signal of length $N = 100$ samples.

**Steps:**

1.  **Generate the signal $x[n]$.** (CO1)
2.  **Compute $X[k] = \text{FFT}(x[n])$.** (From previous experiment)
3.  **Compute $x_{reconstructed}[n]$ using the FFT method from Section 3.**
4.  **Compare $x_{reconstructed}[n]$ with the original $x[n]$.** (CO2)

**MATLAB Example Code:**
```matlab
% --- Signal Generation ---
Fs = 100;       % Sampling frequency
T = 1/Fs;       % Sampling period
L = 100;        % Length of signal
t = (0:L-1)*T;  % Time vector

f1 = 5;         % Frequency of first sinusoid
f2 = 15;        % Frequency of second sinusoid

x = 0.7*sin(2*pi*f1*t) + sin(2*pi*f2*t);

% --- Compute FFT (as if from previous experiment) ---
X = fft(x);

% --- Compute IFFT using FFT method ---
N = length(X); % Length of the spectrum

% Step 1: Conjugate X
X_conj = conj(X);

% Step 2: FFT of conjugated X
fft_of_conj = fft(X_conj);

% Step 3: Conjugate the result
conj_of_fft_of_conj = conj(fft_of_fft_of_conj);

% Step 4: Scale by 1/N
x_reconstructed_using_fft = (1/N) * conj_of_fft_of_conj;

% --- Verification ---
figure;
subplot(2,1,1);
plot(t, x);
title('Original Signal x(t)');
xlabel('Time (s)');
ylabel('Amplitude');
grid on;

subplot(2,1,2);
plot(t, real(x_reconstructed_using_fft)); % Plotting the real part as the original is real
title('Reconstructed Signal using FFT Method');
xlabel('Time (s)');
ylabel('Amplitude');
grid on;

% Check the error
error = max(abs(x - x_reconstructed_using_fft));
fprintf('Maximum error between original and reconstructed signal: %e\n', error);
```

**Expected Output:**
You should see two plots that look identical. The printed error message should be a very small number, indicating successful reconstruction.

**Reference to Textbooks:**
*   **Ingle & Proakis:** Chapter 3 provides details on signal generation and DFT properties.
*   **Downey:** Chapter 4 (Sinusoids) and Chapter 10 (FFT) would be relevant for understanding signal generation and the FFT/IFFT process.

---

### 6. Potential Issues and Considerations

*   **Floating-Point Precision:** Due to the nature of floating-point arithmetic in computers, the reconstructed signal may not be *exactly* identical to the original signal, but it should be very close. The error is usually on the order of $10^{-14}$ to $10^{-16}$. This is why we check for the maximum absolute difference being less than a small tolerance.
*   **Signal Length (N):** The scaling factor of $\frac{1}{N}$ is crucial. Ensure you are using the correct length $N$ of the signal or spectrum.
*   **Real vs. Complex Signals:** If the original signal $x[n]$ is purely real, its spectrum $X[k]$ will have conjugate symmetry ($X[k] = X^*[N-k]$). This property is implicitly used and maintained when performing the IFFT operations. If you were dealing with a complex signal, the reconstruction would still work, but the interpretation of the spectrum might differ.

**Important Point to Remember:** The ability to reconstruct a signal from its frequency representation is a fundamental tenet of Fourier analysis and a cornerstone of digital signal processing. It allows for operations like filtering, spectral analysis, and signal synthesis.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the mathematical relationship between the DFT and the IDFT formulas? Highlight the differences.

**Answer:**
The DFT formula is $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi kn}{N}}$.
The IDFT formula is $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi kn}{N}}$.
The key differences are:
1.  **Sign in the exponent:** DFT uses $e^{-j}$, while IDFT uses $e^{+j}$.
2.  **Scaling factor:** IDFT includes a $\frac{1}{N}$ scaling factor.

---

**Question 2:**
Describe the four steps required to compute the IFFT of a sequence $X[k]$ using only an FFT function.

**Answer:**
1.  Take the complex conjugate of $X[k]$.
2.  Compute the FFT of the conjugated sequence.
3.  Take the complex conjugate of the FFT result.
4.  Scale the final result by $\frac{1}{N}$, where $N$ is the length of the sequence.

---

**Question 3:**
Suppose you have a signal `y` which is the result of applying the `fft` function to an original signal `x`. Write down the pseudocode or a description of how you would compute the IFFT of `y` using only the `fft` function, assuming you have a function `fft_compute(input_array)`.

**Answer:**
```
function compute_IFFT_using_FFT(spectrum_Y, N)
  // Input: spectrum_Y (the FFT of the original signal)
  //        N (the length of the spectrum)
  // Output: reconstructed_signal_x

  // Step 1: Conjugate the input spectrum
  Y_conj = conjugate(spectrum_Y)

  // Step 2: Compute FFT of the conjugated spectrum
  fft_result = fft_compute(Y_conj)

  // Step 3: Conjugate the FFT result
  reconstructed_signal_x_unscaled = conjugate(fft_result)

  // Step 4: Scale by 1/N
  reconstructed_signal_x = (1/N) * reconstructed_signal_x_unscaled

  return reconstructed_signal_x
end function
```

---

**Question 4 (Lab-based):**
1.  Generate a cosine wave with a frequency of 10 Hz, sampling frequency of 100 Hz, and duration of 1 second.
2.  Compute the FFT of this signal.
3.  Compute the IFFT of the FFT result using your platform's built-in IFFT function.
4.  Now, compute the IFFT of the FFT result *using only the FFT function* as demonstrated in this module.
5.  Compare the results from steps 3 and 4. Are they approximately the same? What is the maximum absolute difference?

**Expected Outcome:** The results from both IFFT methods should be very close, and the maximum absolute difference should be on the order of $10^{-14}$ or smaller. This confirms the validity of computing IFFT using FFT.

---

### 8. Alignment with Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** As demonstrated in the example, generating signals like sinusoids is a prerequisite for performing FFT and verifying IFFT.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** This entire module is dedicated to verifying the inverse property of the DFT by showing how to compute IFFT using FFT.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** The practical implementation sections provide concrete steps that would be performed on a computer in a lab setting, fostering familiarity with DSP tools.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** While not directly implementing an LTI system here, the understanding of transforming signals to and from the frequency domain is a fundamental building block for analyzing and designing systems, including LTI systems. Many LTI system operations (like convolution) are simplified in the frequency domain using the DFT.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** Understanding IFFT is crucial for FIR filter design. After designing a filter's frequency response (e.g., for a low-pass filter), the IFFT is used to obtain the time-domain impulse response coefficients of the FIR filter.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
