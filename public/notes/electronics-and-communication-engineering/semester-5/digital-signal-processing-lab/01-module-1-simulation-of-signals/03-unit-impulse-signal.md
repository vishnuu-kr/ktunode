---
title: "Unit impulse signal"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 1: Simulation of Signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec28"
status: "completed"
scrapedAt: "2026-05-23T17:55:47.703Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 1: Simulation of Signals

## Unit Impulse Signal

This module introduces the fundamental building blocks of digital signals, starting with the **Unit Impulse Signal**, also known as the **Kronecker Delta function**. Understanding the unit impulse is crucial as it serves as the basis for representing and analyzing other signals and systems.

---

### 1. What is a Unit Impulse Signal?

The **unit impulse signal**, denoted by $\delta[n]$, is a discrete-time signal that has a value of 1 at $n=0$ and is zero for all other integer values of $n$.

**Key Properties:**

*   **Definition:**
    $$ \delta[n] = \begin{cases} 1 & \text{if } n = 0 \\ 0 & \text{if } n \neq 0 \end{cases} $$
*   **Graphical Representation:** It is typically represented as a vertical line (or an arrow) at $n=0$ with a height of 1.

    ```
        ^ amplitude
        |
        1 *-------
        | |
    ----|-------|-----> time index (n)
       -2 -1  0  1  2
    ```

---

### 2. Generation of Unit Impulse Signal in Simulation

In digital signal processing labs, we often simulate signals using software like MATLAB or Python. Here's how you can generate a unit impulse signal:

#### 2.1. Using MATLAB

MATLAB provides functions to easily create discrete-time signals.

**Example Code (MATLAB):**

```matlab
% Define the time indices
n = -5:5; % A range of time indices including 0

% Create the unit impulse signal
% Initialize with zeros
impulse_signal = zeros(size(n));

% Find the index where n is 0
zero_index = find(n == 0);

% Set the value to 1 at that index
impulse_signal(zero_index) = 1;

% Plot the signal
figure;
stem(n, impulse_signal);
title('Unit Impulse Signal');
xlabel('Time Index (n)');
ylabel('Amplitude');
grid on;
```

**Explanation:**

1.  `n = -5:5;`: Creates a vector `n` containing integers from -5 to 5. This defines the time axis for our simulation.
2.  `impulse_signal = zeros(size(n));`: Initializes a vector `impulse_signal` of the same size as `n`, filled with zeros.
3.  `zero_index = find(n == 0);`: Locates the index within the `n` vector where the value is 0.
4.  `impulse_signal(zero_index) = 1;`: Sets the element in `impulse_signal` corresponding to the zero index to 1.
5.  `stem(n, impulse_signal);`: Plots the signal using stem plot, which is suitable for discrete-time signals.

#### 2.2. Using Python (NumPy)

Python with the NumPy library is also a powerful tool for signal simulation.

**Example Code (Python):**

```python
import numpy as np
import matplotlib.pyplot as plt

# Define the time indices
n = np.arange(-5, 6) # Range from -5 to 5 (exclusive of 6)

# Create the unit impulse signal
# Initialize with zeros
impulse_signal = np.zeros_like(n)

# Find the index where n is 0
zero_index = np.where(n == 0)[0][0] # np.where returns a tuple of arrays

# Set the value to 1 at that index
impulse_signal[zero_index] = 1

# Plot the signal
plt.figure()
plt.stem(n, impulse_signal)
plt.title('Unit Impulse Signal')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Explanation:**

1.  `n = np.arange(-5, 6)`: Creates a NumPy array `n` containing integers from -5 to 5.
2.  `impulse_signal = np.zeros_like(n)`: Creates a NumPy array `impulse_signal` filled with zeros, with the same shape as `n`.
3.  `zero_index = np.where(n == 0)[0][0]`: `np.where(n == 0)` returns a tuple containing an array of indices where `n` is 0. We access the first (and only) such index.
4.  `impulse_signal[zero_index] = 1`: Assigns 1 to the impulse signal at the found index.
5.  `plt.stem(n, impulse_signal)`: Plots the signal using Matplotlib's stem plot.

---

### 3. Properties and Significance of the Unit Impulse Signal

The unit impulse signal is foundational because of its unique properties that simplify signal and system analysis.

#### 3.1. Impulse Sampling Property (Sifting Property)

This is the most important property of the unit impulse. When a signal $x[n]$ is multiplied by a shifted unit impulse $\delta[n-k]$, the result is $x[k]\delta[n-k]$. Summing this over all $n$ effectively "sifts out" the value of $x[n]$ at a specific point.

*   **Property:**
    $$ x[n] \delta[n-k] = x[k] \delta[n-k] $$
*   **Significance:** This property means that the unit impulse acts as a "sampler." When you multiply any signal by $\delta[n]$, you get the signal's value at $n=0$.
    $$ x[n] \delta[n] = x[0] \delta[n] $$

#### 3.2. Summation Property

The sum of a unit impulse signal over all time is 1.

*   **Property:**
    $$ \sum_{n=-\infty}^{\infty} \delta[n] = 1 $$

#### 3.3. Representation of Any Discrete-Time Signal

Any discrete-time signal $x[n]$ can be represented as a sum of scaled and shifted unit impulses.

*   **Representation:**
    $$ x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k] $$

    This means any signal can be thought of as a collection of impulses, where the amplitude of each impulse at time $k$ is $x[k]$.

#### 3.4. Unit Impulse as a Basis Function

Similar to how sine and cosine waves are basis functions for continuous-time signals, the unit impulse and its shifted versions form a basis for discrete-time signals.

---

### 4. Relevance to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   The unit impulse signal is a fundamental discrete-time waveform. This unit demonstrates how to generate it programmatically, contributing directly to this outcome.

*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   While this specific unit focuses on the signal itself, the impulse property (sifting property) is crucial for understanding how the Discrete Fourier Transform (DFT) relates to the frequency domain representation of signals. The DFT of a unit impulse is a constant, which is a key property.

*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   The unit impulse response of a Linear Time-Invariant (LTI) system is its defining characteristic. By understanding the unit impulse, we can then study how LTI systems respond to it, which is fundamental to system analysis and implementation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 5. Textbooks and Reference Books Integration

*   **"Digital Signal Processing using Matlab" by Vinay K. Ingle, John G. Proakis:** This textbook likely covers the generation of basic signals like the unit impulse in its introductory chapters, often using MATLAB examples. The focus on simulation aligns well with our lab activities.

*   **"Think DSP: Digital Signal Processing using Python" by Allen B. Downey:** Downey's book emphasizes practical implementation, and generating fundamental signals like the unit impulse in Python would be a core early example. The book's approach to breaking down concepts makes it very accessible.

*   **"DSP applications using C and the TMS320C6x DSK" by Rulph Chassaing:** This book, focusing on hardware implementation, would discuss the unit impulse as a basic signal that can be generated or used for testing DSP hardware and algorithms.

*   **"Discrete-Time Signal Processing" by Alan V Oppenheim, Ronald W. Schafer:** This is a foundational theoretical text. It will rigorously define the unit impulse signal, prove its properties (like the sifting property), and show its importance in representing discrete-time signals and analyzing LTI systems. The concept of representing any signal as a sum of scaled and shifted impulses ($x[n] = \sum x[k]\delta[n-k]$) is central to their treatment of LTI systems.

---

### 6. Important Points to Remember

*   The unit impulse signal $\delta[n]$ is **1 at n=0 and 0 elsewhere**.
*   It is a **fundamental building block** for discrete-time signals.
*   Its **sifting property** ($x[n]\delta[n-k] = x[k]\delta[n-k]$) is critical for analyzing signals and systems.
*   Any discrete-time signal can be **represented as a sum of shifted unit impulses**.
*   **Simulation tools (MATLAB, Python)** allow for easy generation and visualization of this signal.

---

### 7. Practice Questions and Exercises

**Question 1:**
Generate and plot a unit impulse signal for the time indices $n$ ranging from -10 to 10. Label the axes appropriately.

**Answer:**
(See MATLAB or Python code examples above. The plot should show a single point at $n=0$ with amplitude 1, and zeros everywhere else.)

**Question 2:**
What is the value of the expression $x[n] = (n^2 + 2n - 1) \delta[n]$? Explain your reasoning.

**Answer:**
Using the sifting property, $x[n]\delta[n] = x[0]\delta[n]$.
So, $(n^2 + 2n - 1) \delta[n] = ((0)^2 + 2(0) - 1) \delta[n] = -1 \cdot \delta[n]$.
Therefore, the expression evaluates to $-1$ when $n=0$ and $0$ for all other $n$. This is equivalent to $- \delta[n]$.

**Question 3:**
Consider a signal $y[n] = 5 \delta[n-3]$. Describe this signal.

**Answer:**
This signal is a unit impulse shifted by 3 units to the right (or advanced by 3 units). It has a value of 5 at $n=3$ and is zero for all other integer values of $n$.

**Question 4:**
If you have a signal $x[n]$, what is the output of the operation $\sum_{n=-\infty}^{\infty} x[n] \delta[n-5]$?

**Answer:**
Using the sifting property, $\sum_{n=-\infty}^{\infty} x[n] \delta[n-5] = x[5]$. The operation effectively extracts the value of the signal $x[n]$ at $n=5$.

**Question 5 (Simulation Task):**
Write a script in your preferred simulation tool (MATLAB/Python) to generate a signal $s[n]$ which is a unit impulse shifted to $n=4$, scaled by a factor of 3.
$s[n] = 3 \delta[n-4]$
Plot the resulting signal for time indices $n$ from 0 to 8.

**Answer (Conceptual):**
The plot should show a single spike at $n=4$ with an amplitude of 3. All other points for $n$ from 0 to 8 should be zero.

---

This concludes the notes on the Unit Impulse Signal. Understanding this basic signal is the first step towards mastering digital signal processing.