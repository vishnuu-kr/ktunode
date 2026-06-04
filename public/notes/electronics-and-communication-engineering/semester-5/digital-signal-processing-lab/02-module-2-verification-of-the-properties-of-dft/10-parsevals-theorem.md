---
title: "Parseval’s Theorem"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec37"
status: "completed"
scrapedAt: "2026-05-23T17:55:57.615Z"
---
# DIGITAL SIGNAL PROCESSING LAB

## Module 2: Verification of the Properties of DFT

### Topic: Parseval’s Theorem

---

### 1. Introduction and Learning Outcomes

This topic focuses on understanding and verifying Parseval's Theorem, a crucial property of the Discrete Fourier Transform (DFT). By the end of this session, you will be able to:

*   **LO1: Understand the statement and significance of Parseval's Theorem.**
*   **LO2: Relate the energy of a signal in the time domain to its representation in the frequency domain using DFT.**
*   **LO3: Practically verify Parseval's Theorem using computational tools (e.g., MATLAB or Python).**
*   **LO4: Appreciate the energy conservation property in the context of signal processing.**

---

### 2. Key Concepts and Definitions

**2.1 Discrete Fourier Transform (DFT)**

The DFT transforms a finite-duration discrete-time signal $x[n]$ of length $N$ into its frequency-domain representation, $X[k]$, also of length $N$. The formula for the DFT is:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j 2 \pi k n / N}, \quad k = 0, 1, \dots, N-1$

And the Inverse DFT (IDFT) reconstructs the time-domain signal from its frequency-domain representation:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j 2 \pi k n / N}, \quad n = 0, 1, \dots, N-1$

**2.2 Energy of a Signal**

The energy of a discrete-time signal $x[n]$ is defined as the sum of the squares of its magnitudes over all time indices. For a finite-duration signal $x[n]$ of length $N$:

$E_x = \sum_{n=0}^{N-1} |x[n]|^2$

**2.3 Parseval's Theorem for Discrete-Time Signals**

Parseval's Theorem states that the total energy of a discrete-time signal is the same whether calculated in the time domain or the frequency domain. It establishes a relationship between the time-domain energy and the frequency-domain "energy."

**Statement of Parseval's Theorem:**

For a discrete-time signal $x[n]$ and its DFT $X[k]$ of length $N$, the following relationship holds:

$$ \sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2 $$

**In simpler terms:**

*   **Time Domain:** Sum of the squared magnitudes of the signal samples.
*   **Frequency Domain:** (1/N) * Sum of the squared magnitudes of the DFT coefficients.

Parseval's theorem implies that energy is conserved between the time and frequency domains. This is a fundamental property that underpins many signal processing techniques.

---

### 3. Theoretical Basis and Derivation (Conceptual Understanding)

The derivation of Parseval's theorem involves substituting the IDFT formula into the time-domain energy expression and manipulating the sums. While a rigorous derivation might be complex for a lab setting, understanding the core idea is important:

1.  Start with the time-domain energy: $E_x = \sum_{n=0}^{N-1} |x[n]|^2$.
2.  Substitute $x[n]$ using its IDFT representation: $x[n] = \frac{1}{N} \sum_{m=0}^{N-1} X[m] e^{j 2 \pi m n / N}$.
3.  Substitute this into the energy expression and multiply by its conjugate.
4.  Rearrange the summations and use the property of the complex exponential: $\sum_{n=0}^{N-1} e^{j 2 \pi (m-l) n / N} = N \delta[m-l]$, where $\delta[\cdot]$ is the Kronecker delta function.
5.  This leads to the frequency-domain summation.

**(Refer to Ingle & Proakis, Chapter 7 or Oppenheim & Schafer, Chapter 7 for detailed derivation.)**

---

### 4. Verification of Parseval's Theorem in the Lab

The primary goal of this lab session is to verify this theorem computationally. We will do this by:

1.  Generating a discrete-time signal $x[n]$.
2.  Calculating its DFT, $X[k]$.
3.  Computing the energy in the time domain: $E_{time} = \sum_{n=0}^{N-1} |x[n]|^2$.
4.  Computing the energy in the frequency domain: $E_{freq} = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$.
5.  Comparing $E_{time}$ and $E_{freq}$. They should be approximately equal due to potential floating-point inaccuracies in computation.

---

### 5. Practical Examples and Implementation (MATLAB/Python)

Let's illustrate with an example. Consider a simple real-valued signal.

**Example 1: A simple sinusoidal signal**

Let $x[n] = \cos(2\pi n/N)$ for $n = 0, 1, \dots, N-1$.

**Step-by-step verification process:**

1.  **Define the signal:**
    *   Choose a signal length, say $N=8$.
    *   Generate the signal: $x[n] = \cos(2\pi n/8)$ for $n=0, \dots, 7$.

2.  **Calculate the DFT:**
    *   Use the DFT function (e.g., `fft` in MATLAB, `numpy.fft.fft` in Python) to compute $X[k]$ for $k=0, \dots, 7$.

3.  **Compute Time-Domain Energy:**
    *   Calculate $|x[n]|^2$ for each $n$.
    *   Sum these values: $E_{time} = \sum_{n=0}^{N-1} |x[n]|^2$.

4.  **Compute Frequency-Domain Energy:**
    *   Calculate $|X[k]|^2$ for each $k$.
    *   Sum these values: $\sum_{k=0}^{N-1} |X[k]|^2$.
    *   Divide by $N$: $E_{freq} = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$.

5.  **Compare:**
    *   Print $E_{time}$ and $E_{freq}$. They should be very close.

**MATLAB Code Snippet:**

```matlab
% --- Parameters ---
N = 8; % Signal length

% --- Generate Signal ---
n = 0:N-1;
x = cos(2*pi*n/N); % A cosine signal

% --- Compute DFT ---
X = fft(x);

% --- Calculate Time-Domain Energy ---
E_time = sum(abs(x).^2);

% --- Calculate Frequency-Domain Energy ---
E_freq = (1/N) * sum(abs(X).^2);

% --- Display Results ---
disp(['Time-Domain Energy: ', num2str(E_time)]);
disp(['Frequency-Domain Energy: ', num2str(E_freq)]);

% --- Verification ---
if abs(E_time - E_freq) < 1e-9 % Tolerance for floating point errors
    disp('Parseval''s Theorem verified!');
else
    disp('Parseval''s Theorem NOT verified.');
end
```

**Python Code Snippet:**

```python
import numpy as np
import matplotlib.pyplot as plt

# --- Parameters ---
N = 8  # Signal length

# --- Generate Signal ---
n = np.arange(N)
x = np.cos(2 * np.pi * n / N)  # A cosine signal

# --- Compute DFT ---
X = np.fft.fft(x)

# --- Calculate Time-Domain Energy ---
E_time = np.sum(np.abs(x)**2)

# --- Calculate Frequency-Domain Energy ---
E_freq = (1/N) * np.sum(np.abs(X)**2)

# --- Display Results ---
print(f'Time-Domain Energy: {E_time}')
print(f'Frequency-Domain Energy: {E_freq}')

# --- Verification ---
if np.isclose(E_time, E_freq, atol=1e-9):
    print('Parseval\'s Theorem verified!')
else:
    print('Parseval\'s Theorem NOT verified.')
```

**Expected Output for Example 1:**

```
Time-Domain Energy: 4.000000000000001
Frequency-Domain Energy: 4.000000000000001
Parseval's Theorem verified!
```

**Observation:** Notice that the time-domain energy of a cosine wave with amplitude 1 is $N/2 \times (\text{amplitude})^2$, which for $N=8$ and amplitude 1 is $8/2 = 4$. The DFT of a cosine wave $A \cos(2\pi k_0 n/N)$ has two impulses of magnitude $A \cdot N/2$ at $k=k_0$ and $k=N-k_0$. For $x[n] = \cos(2\pi n/8)$, $A=1$ and $k_0=1$. The DFT will have impulses of magnitude $1 \cdot 8/2 = 4$ at $k=1$ and $k=7$. So, $\sum |X[k]|^2 = |X[1]|^2 + |X[7]|^2 = 4^2 + 4^2 = 16+16=32$.
Then, $E_{freq} = \frac{1}{N} \sum |X[k]|^2 = \frac{1}{8} \times 32 = 4$. This matches the time-domain energy.

---

### 6. Exploring with Different Signals

To solidify your understanding, experiment with:

*   **Different amplitudes:** $x[n] = A \cos(2\pi n/N)$
*   **Different frequencies:** $x[n] = \cos(2\pi f n/N)$ (ensure $f$ is an integer for simple DFT patterns)
*   **Sum of sinusoids:** $x[n] = A_1 \cos(\theta_1 n) + A_2 \sin(\theta_2 n)$
*   **Real and complex signals.**
*   **Random signals.**
*   **Signals with finite duration:** Pad with zeros if necessary to achieve the desired DFT length $N$.

**Example 2: Sum of two sinusoids**

Let $x[n] = 0.5 \cos(2\pi n/8) + 0.8 \sin(2\pi \cdot 3 n/8)$ for $n=0, \dots, 7$.

Repeat the steps from Example 1 to verify Parseval's Theorem.

---

### 7. Connection to Course Outcomes

This topic directly addresses:

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** We generate sinusoidal signals as test cases.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** Parseval's Theorem is a fundamental DFT property that we are verifying experimentally.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** Understanding energy conservation is crucial for analyzing the behavior of LTI systems, especially in terms of power or energy transfer. While we are not directly implementing an LTI system here, the concept is related to how signals (and their energy) are transformed.

---

### 8. Important Points to Remember

*   **Energy Conservation:** Parseval's theorem is a statement of energy conservation between the time and frequency domains.
*   **DFT Length (N):** The DFT length $N$ plays a crucial role in the frequency-domain energy calculation ($1/N$ factor). Ensure you use the correct $N$ corresponding to the signal length used for the DFT.
*   **Magnitude Squared:** Always use the magnitude squared ($|x[n]|^2$ and $|X[k]|^2$) when calculating energy.
*   **Floating-Point Precision:** Expect small differences between the time-domain and frequency-domain energy calculations due to finite precision in computer arithmetic. Use a tolerance (e.g., $10^{-9}$) for comparison.
*   **Complex Signals:** The theorem holds for both real and complex signals. For complex signals, $|x[n]|^2 = x[n] x^*[n]$ and $|X[k]|^2 = X[k] X^*[k]$, where $^*$ denotes the complex conjugate.

---

### 9. Practice Questions

**Question 1:**
State Parseval's Theorem for discrete-time signals. Explain its significance in signal processing.

**Answer:**
Parseval's Theorem states that for a discrete-time signal $x[n]$ and its DFT $X[k]$ of length $N$, the sum of the squared magnitudes in the time domain equals $1/N$ times the sum of the squared magnitudes in the frequency domain:
$$ \sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2 $$
Its significance lies in demonstrating that the total energy of a signal is conserved across the time and frequency domains. This property is fundamental in understanding how signals are represented and processed in different domains and is used in various applications like spectral analysis and filter design.

**Question 2:**
Consider a real-valued discrete-time signal $x[n]$ of length $N=16$.
$x[n] = 2 \sin(2\pi \cdot 2 n / 16)$ for $n=0, 1, \dots, 15$.
Calculate the time-domain energy of $x[n]$. Then, predict the values of the DFT coefficients $X[k]$ and calculate the frequency-domain energy. Verify if Parseval's Theorem holds.

**Answer:**
*   **Time-Domain Energy:**
    The signal is $x[n] = 2 \sin(2\pi \cdot 2 n / 16)$. The amplitude is $A=2$. The frequency is $f_0 = 2$.
    The energy of a sinusoid $A \sin(2\pi f_0 n/N)$ is $\sum_{n=0}^{N-1} |A \sin(2\pi f_0 n/N)|^2$.
    For a sinusoid with amplitude $A$, the average power is $A^2/2$. Over $N$ samples, the energy is $N \times (A^2/2)$.
    Here, $A=2$ and $N=16$.
    $E_{time} = 16 \times (2^2 / 2) = 16 \times (4/2) = 16 \times 2 = 32$.
    Alternatively, using `sum(abs(x).^2)` in code will yield approximately 32.

*   **DFT Coefficients:**
    The DFT of $A \sin(2\pi f_0 n/N)$ has non-zero components at $k=f_0$ and $k=N-f_0$.
    $x[n] = 2 \sin(2\pi \cdot 2 n / 16) = 2 \left( \frac{e^{j 2 \pi \cdot 2 n / 16} - e^{-j 2 \pi \cdot 2 n / 16}}{2j} \right) = \frac{1}{j} e^{j 2 \pi \cdot 2 n / 16} - \frac{1}{j} e^{j 2 \pi \cdot (16-2) n / 16}$
    Using the DFT property $x[n] = \sum_{k=0}^{N-1} X[k] e^{j 2 \pi k n / N}$, we can see that for $k=2$, $X[2] = \frac{1}{j} = -j$. For $k=14$, $X[14] = -\frac{1}{j} = j$.
    So, $X[2] = -j$ and $X[14] = j$. All other $X[k]$ are zero.

*   **Frequency-Domain Energy:**
    $E_{freq} = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2 = \frac{1}{16} (|X[2]|^2 + |X[14]|^2)$
    $|X[2]|^2 = |-j|^2 = (-j)(j) = 1$.
    $|X[14]|^2 = |j|^2 = (j)(-j) = 1$.
    $E_{freq} = \frac{1}{16} (1 + 1) = \frac{2}{16} = \frac{1}{8}$.

*   **Verification:**
    $E_{time} = 32$ and $E_{freq} = 1/8$.
    Since $32 \neq 1/8$, Parseval's Theorem is NOT verified with this calculation.

    **Correction/Re-evaluation:** Let's re-check the standard DFT of sinusoids.
    The DFT of $A \cos(\omega_0 n)$ where $\omega_0 = 2\pi k_0/N$ is $X[k_0] = A N/2$ and $X[N-k_0] = A N/2$.
    The DFT of $A \sin(\omega_0 n)$ where $\omega_0 = 2\pi k_0/N$ is $X[k_0] = -j A N/2$ and $X[N-k_0] = j A N/2$.

    For $x[n] = 2 \sin(2\pi \cdot 2 n / 16)$: $A=2$, $k_0=2$, $N=16$.
    $X[2] = -j \cdot 2 \cdot 16 / 2 = -j \cdot 16 = -16j$.
    $X[14] = j \cdot 2 \cdot 16 / 2 = j \cdot 16 = 16j$.

    Now, re-calculate frequency-domain energy:
    $|X[2]|^2 = |-16j|^2 = (-16j)(16j) = 256$.
    $|X[14]|^2 = |16j|^2 = (16j)(-16j) = 256$.
    $E_{freq} = \frac{1}{16} (|X[2]|^2 + |X[14]|^2) = \frac{1}{16} (256 + 256) = \frac{512}{16} = 32$.

    Now, $E_{time} = 32$ and $E_{freq} = 32$. Parseval's Theorem is verified.

    **Key takeaway from this re-evaluation:** Be careful with the scaling factors when predicting DFT coefficients for sinusoidal signals. The DFT definition used here is $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j 2 \pi k n / N}$.

**Question 3:**
What happens to the total energy of a signal if its DFT coefficients are all multiplied by a constant factor $c$?

**Answer:**
Let $x[n]$ be a signal with DFT $X[k]$. If we multiply the DFT by $c$, we get a new DFT, say $Y[k] = c \cdot X[k]$.
By Parseval's Theorem:
Time-domain energy of $x[n]$: $E_x = \sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$.
Time-domain energy of the signal $y[n]$ corresponding to $Y[k]$: $E_y = \sum_{n=0}^{N-1} |y[n]|^2$.
Using Parseval's Theorem for $y[n]$ and $Y[k]$:
$E_y = \frac{1}{N} \sum_{k=0}^{N-1} |Y[k]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |c \cdot X[k]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |c|^2 |X[k]|^2$
$E_y = |c|^2 \left( \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2 \right) = |c|^2 E_x$.
Therefore, if the DFT coefficients are multiplied by a constant factor $c$, the total energy of the signal in the time domain is multiplied by $|c|^2$.

---

### 10. Further Exploration and Readings

*   **Ingle & Proakis (3rd Ed., 2011):** Refer to Chapter 7 for a detailed discussion on the properties of the DFT, including Parseval's Theorem and its derivation. Chapter 6 might also cover signal energy.
*   **Oppenheim & Schafer (4th Ed., 2018):** Chapter 7 provides a comprehensive treatment of the DFT, including the frequency-domain representation of signals and Parseval's Identity.
*   **Think DSP (Downey):** While this book focuses on Python, it offers excellent conceptual explanations of DSP principles. Look for sections discussing the DFT and signal properties.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
