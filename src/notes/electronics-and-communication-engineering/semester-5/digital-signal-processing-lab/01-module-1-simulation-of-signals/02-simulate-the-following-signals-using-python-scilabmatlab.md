---
title: "Simulate the following signals using Python/ 
Scilab/MATLAB."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 1: Simulation of Signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec27"
status: "completed"
scrapedAt: "2026-05-23T17:55:47.058Z"
---
# Digital Signal Processing Lab - Module 1: Simulation of Signals

## Introduction to Digital Signal Processing (DSP)

Digital Signal Processing (DSP) is a branch of engineering that deals with the manipulation and processing of digital signals. These signals are sampled versions of real-world analog signals, which are then represented as sequences of numbers. DSP finds applications in a vast array of fields, including audio and video processing, telecommunications, medical imaging, control systems, and more.

The foundation of DSP lies in understanding and generating various types of signals. This module focuses on simulating these fundamental signals using programming languages commonly used in DSP labs, such as Python, Scilab, and MATLAB.

## Learning Outcomes for Module 1

Upon successful completion of this module, you will be able to:

*   **Understand the fundamental types of signals:** Identify and characterize different categories of signals relevant to DSP.
*   **Simulate basic signal waveforms:** Generate common signal waveforms using programming tools.
*   **Visualize and analyze signal properties:** Plot and examine the characteristics of simulated signals.
*   **Understand the concept of sampling:** Grasp how analog signals are converted into discrete-time signals.
*   **Relate simulation to theoretical concepts:** Connect the practical generation of signals with their mathematical definitions.

## Course Outcomes Addressed in Module 1

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   This module directly contributes to this outcome by providing the practical skills to generate various fundamental signal types.

## Key Concepts and Definitions

### Signals

A **signal** is a function that conveys information about a phenomenon. In DSP, we primarily deal with **discrete-time signals**, which are defined only at discrete points in time. These are often represented as sequences of numbers.

### Signal Types

We can categorize signals in several ways:

#### 1. Based on Time:

*   **Continuous-Time Signals:** Defined for all values of time. (e.g., voltage from a microphone before digitization).
    *   Notation: $x(t)$
*   **Discrete-Time Signals:** Defined only at discrete instants of time. These are obtained by sampling a continuous-time signal or are inherently discrete.
    *   Notation: $x[n]$, where $n$ is the discrete time index.

#### 2. Based on Amplitude:

*   **Continuous-Amplitude Signals:** Amplitude can take any value within a range.
*   **Discrete-Amplitude Signals:** Amplitude is restricted to a finite set of values. (Quantization is the process of converting continuous amplitude to discrete amplitude).

#### 3. Based on Periodicity:

*   **Periodic Signals:** A signal $x[n]$ is periodic if there exists a positive integer $N$ such that $x[n+N] = x[n]$ for all $n$. The smallest such positive integer $N$ is called the **fundamental period**.
    *   Example: A sine wave is periodic.
*   **Aperiodic (or Non-periodic) Signals:** Signals that are not periodic.

#### 4. Based on Symmetry:

*   **Even Signals:** A signal $x[n]$ is even if $x[n] = x[-n]$ for all $n$.
    *   Example: $x[n] = \cos(\omega n)$
*   **Odd Signals:** A signal $x[n]$ is odd if $x[n] = -x[-n]$ for all $n$.
    *   Example: $x[n] = \sin(\omega n)$
*   **Important Property:** Any signal can be decomposed into an even and an odd component:
    *   $x_{even}[n] = \frac{1}{2} (x[n] + x[-n])$
    *   $x_{odd}[n] = \frac{1}{2} (x[n] - x[-n])$
    *   $x[n] = x_{even}[n] + x_{odd}[n]$

#### 5. Based on Energy/Power:

*   **Energy Signals:** Signals for which the total energy is finite. This typically applies to signals that decay to zero as $|n| \to \infty$.
    *   Energy: $E = \sum_{n=-\infty}^{\infty} |x[n]|^2$
*   **Power Signals:** Signals for which the average power is finite. This typically applies to periodic or finite-energy signals.
    *   Average Power: $P = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2$

### Basic Signal Waveforms

#### 1. Unit Step Signal ($u[n]$)

*   **Definition:**
    *   $u[n] = 1$ for $n \ge 0$
    *   $u[n] = 0$ for $n < 0$
*   **Description:** Represents the "on" state or the beginning of a process.

#### 2. Unit Impulse Signal ($\delta[n]$)

*   **Definition:**
    *   $\delta[n] = 1$ for $n = 0$
    *   $\delta[n] = 0$ for $n \neq 0$
*   **Description:** A signal of unit amplitude at time $n=0$ and zero elsewhere. Crucial in DSP as it represents the "fingerprint" of a system's response (impulse response).
*   **Relationship with Unit Step:** $\delta[n] = u[n] - u[n-1]$

#### 3. Exponential Signals ($a^n u[n]$)

*   **Definition:** $x[n] = a^n u[n]$, where $a$ is a complex number.
*   **Description:**
    *   If $|a| < 1$, the signal decays to zero as $n \to \infty$ (energy signal).
    *   If $|a| > 1$, the signal grows unbounded (neither energy nor power signal).
    *   If $|a| = 1$, the signal has constant magnitude (power signal).
    *   If $a$ is real: Real exponential.
    *   If $a$ is complex (e.g., $a = e^{j\omega_0}$): Sinusoidal or complex exponential.

#### 4. Sinusoidal Signals

*   **Continuous-Time:** $x(t) = A \cos(\omega_0 t + \phi)$ or $x(t) = A \sin(\omega_0 t + \phi)$
*   **Discrete-Time:**
    *   $x[n] = A \cos(\omega_0 n + \phi)$
    *   $x[n] = A \sin(\omega_0 n + \phi)$
    *   **Parameters:**
        *   $A$: Amplitude
        *   $\omega_0$: Angular frequency (in radians per sample). Note that unlike continuous time, $\omega_0$ can be greater than $2\pi$ or negative, and the signal will repeat. The unique frequencies are in the range $[-\pi, \pi]$ or $[0, 2\pi]$.
        *   $\phi$: Phase (in radians)
    *   **Important Note on Frequency:** In discrete time, frequency is normalized by the sampling frequency. If the continuous-time frequency is $f_0$ and the sampling frequency is $f_s$, then $\omega_0 = 2\pi f_0 / f_s$.

#### 5. Complex Exponential Signals

*   **Definition:** $x[n] = A e^{j(\omega_0 n + \phi)}$
*   **Description:** A fundamental signal in DSP, particularly for analyzing systems using the Fourier Transform. Related to sinusoids by Euler's formula:
    *   $e^{j\theta} = \cos(\theta) + j \sin(\theta)$
    *   $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$
    *   $\sin(\theta) = \frac{e^{j\theta} - e^{-j\theta}}{2j}$
    *   Therefore, a discrete-time cosine can be represented as the real part of a complex exponential: $A \cos(\omega_0 n + \phi) = \text{Re}\{A e^{j(\omega_0 n + \phi)}\}$

## Simulation of Signals using Python/Scilab/MATLAB

The core of this module is to implement the generation of these signals using programming. We will focus on Python as it's widely used and has powerful libraries for numerical computation and plotting.

### Programming Environment Setup (Python)

*   **Libraries:**
    *   `numpy`: For numerical operations, array creation, and mathematical functions.
    *   `matplotlib.pyplot`: For plotting and visualization.

#### Installation:

```bash
pip install numpy matplotlib
```

### Simulation Examples

#### 1. Unit Step Signal

**Python:**

```python
import numpy as np
import matplotlib.pyplot as plt

# Define the time vector
n = np.arange(-10, 10, 1) # From -10 to 9

# Generate the unit step signal
u_n = np.zeros_like(n, dtype=float)
u_n[n >= 0] = 1.0

# Plotting
plt.figure(figsize=(8, 4))
plt.stem(n, u_n, linefmt='b-', markerfmt='bo', basefmt=' ')
plt.title('Unit Step Signal')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Scilab:**

```scilab
// Define the time vector
n = -10:1:9;

// Generate the unit step signal
u_n = zeros(size(n));
for i = 1:length(n)
    if n(i) >= 0 then
        u_n(i) = 1;
    else
        u_n(i) = 0;
    end
end

// Plotting
figure;
clf;
xtitle('Unit Step Signal');
plot(n, u_n, 'o-');
xlabel('Time Index (n)');
ylabel('Amplitude');
xgrid();
```

**MATLAB:**

```matlab
% Define the time vector
n = -10:9;

% Generate the unit step signal
u_n = zeros(size(n));
u_n(n >= 0) = 1;

% Plotting
figure;
stem(n, u_n, 'b');
title('Unit Step Signal');
xlabel('Time Index (n)');
ylabel('Amplitude');
grid on;
```

#### 2. Unit Impulse Signal

**Python:**

```python
import numpy as np
import matplotlib.pyplot as plt

# Define the time vector
n = np.arange(-5, 5, 1) # From -5 to 4

# Generate the unit impulse signal
delta_n = np.zeros_like(n, dtype=float)
delta_n[n == 0] = 1.0

# Plotting
plt.figure(figsize=(8, 4))
plt.stem(n, delta_n, linefmt='r-', markerfmt='ro', basefmt=' ')
plt.title('Unit Impulse Signal')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Scilab:**

```scilab
// Define the time vector
n = -5:4;

// Generate the unit impulse signal
delta_n = zeros(size(n));
for i = 1:length(n)
    if n(i) == 0 then
        delta_n(i) = 1;
    else
        delta_n(i) = 0;
    end
end

// Plotting
figure;
clf;
xtitle('Unit Impulse Signal');
plot(n, delta_n, 'o-');
xlabel('Time Index (n)');
ylabel('Amplitude');
xgrid();
```

**MATLAB:**

```matlab
% Define the time vector
n = -5:4;

% Generate the unit impulse signal
delta_n = zeros(size(n));
delta_n(n == 0) = 1;

% Plotting
figure;
stem(n, delta_n, 'r');
title('Unit Impulse Signal');
xlabel('Time Index (n)');
ylabel('Amplitude');
grid on;
```

#### 3. Exponential Signal ($a^n u[n]$)

**Python:**

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
a = 0.9 # For decaying exponential
# a = 1.1 # For growing exponential
# a = 1   # For constant signal
# a = -0.8 # For decaying oscillating exponential

# Define the time vector
n = np.arange(0, 20, 1) # Start from 0 for u[n]

# Generate the exponential signal
exp_n = (a**n) * np.heaviside(n, 1) # np.heaviside(n, 1) acts like u[n]

# Plotting
plt.figure(figsize=(10, 5))
plt.stem(n, exp_n, linefmt='g-', markerfmt='go', basefmt=' ')
plt.title(f'Exponential Signal: $x[n] = {a}^n u[n]$')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Important Note on `np.heaviside(n, 1)`:** This function returns 0 for $n < 0$, 1 for $n > 0$, and the second argument (1 in this case) for $n = 0$. This effectively implements the unit step function for our discrete-time sequences.

#### 4. Sinusoidal Signal

**Python:**

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
A = 1.0       # Amplitude
fs = 100      # Sampling frequency (samples per second)
f0 = 5        # Signal frequency (Hz)
phi = np.pi/4 # Phase in radians

# Time vector (for plotting clarity, in seconds for continuous visualization)
# However, we'll generate discrete samples
T_s = 1/fs    # Sampling period
N_samples = 200 # Number of samples
t_continuous = np.arange(0, N_samples * T_s, T_s) # Continuous time axis for x-axis

# Discrete time index
n = np.arange(0, N_samples, 1)

# Discrete-time angular frequency
omega0 = 2 * np.pi * f0 / fs

# Generate the sinusoidal signal
x_n = A * np.cos(omega0 * n + phi)

# Plotting
plt.figure(figsize=(12, 6))
plt.stem(n, x_n, linefmt='m-', markerfmt='mo', basefmt=' ') # Using stem for discrete nature
# plt.plot(t_continuous, x_n, 'm-') # Uncomment to plot as continuous line
plt.title(f'Discrete-Time Sinusoidal Signal: $A \cos(\\omega_0 n + \\phi)$')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()

# Plotting frequency spectrum (requires more advanced concepts like DFT, but for visualization)
# This part demonstrates the concept of unique frequencies in discrete time.
# For a single frequency signal, the spectrum will have spikes.
# If you want to show spectrum, you would typically use np.fft.fft
```

**Key Point:** Notice that $\omega_0$ is in radians per sample. The relationship $\omega_0 = 2\pi f_0 / f_s$ is crucial. For example, if $f_s = 100$ Hz and $f_0 = 50$ Hz, then $\omega_0 = 2\pi (50/100) = \pi$. A frequency of $f_0 = 50$ Hz sampled at $f_s = 100$ Hz is the Nyquist frequency.

#### 5. Complex Exponential Signal

**Python:**

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
A = 1.0
fs = 100
f0 = 10
phi = 0

N_samples = 200
n = np.arange(0, N_samples, 1)
omega0 = 2 * np.pi * f0 / fs

# Generate the complex exponential signal
complex_exp_n = A * np.exp(1j * (omega0 * n + phi)) # 1j represents the imaginary unit

# Separate real and imaginary parts for plotting
real_part = np.real(complex_exp_n)
imag_part = np.imag(complex_exp_n)

# Plotting real part (corresponds to cosine)
plt.figure(figsize=(12, 5))
plt.stem(n, real_part, linefmt='c-', markerfmt='co', basefmt=' ')
plt.title(f'Real Part of Complex Exponential Signal: $Re\{A e^{j(\\omega_0 n + \\phi)}}\}$')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()

# Plotting imaginary part (corresponds to sine)
plt.figure(figsize=(12, 5))
plt.stem(n, imag_part, linefmt='m-', markerfmt='mo', basefmt=' ')
plt.title(f'Imaginary Part of Complex Exponential Signal: $Im\{A e^{j(\\omega_0 n + \\phi)}}\}$')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Relationship to Sinusoids:**
As seen in the code, the real part of $A e^{j(\omega_0 n + \phi)}$ is $A \cos(\omega_0 n + \phi)$, and the imaginary part is $A \sin(\omega_0 n + \phi)$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbooks and Reference Books Content Incorporation

### From "Digital Signal Processing using Matlab" by Ingle and Proakis:

*   **Chapter 2: Discrete-Time Signals and Systems:** This chapter likely covers the fundamental signal types (step, impulse, exponentials, sinusoids) and their properties in detail. The simulations in this module are direct implementations of these concepts. The book emphasizes the mathematical definitions and graphical representations of these signals. For instance, when simulating sinusoids, understanding the influence of frequency and phase on the waveform, as discussed in their text, is key.
*   **Sampling Theorem:** While not explicitly a simulation task in this module, the understanding of sampling is implicit when dealing with discrete-time sinusoids. Ingle and Proakis would detail the Nyquist-Shannon sampling theorem, which dictates how often an analog signal must be sampled to perfectly reconstruct it. This is crucial for choosing appropriate sampling frequencies ($f_s$) when generating discrete-time signals that represent analog phenomena.

### From "Think DSP: Digital Signal Processing using Python" by Allen B. Downey:

*   **Chapter 2: Signals:** Downey's book is very practical and focuses on implementation in Python. It covers basic signals like sine waves, square waves, and impulses, often using `numpy` and `matplotlib`. His approach emphasizes creating signal objects and then plotting them. The examples in this study guide are directly aligned with his pedagogical style.
*   **Chapter 3: Spectrums:** While this module focuses on time-domain simulation, Downey often introduces the concept of the frequency spectrum (using FFT) early on. Understanding the spectrum of a signal (e.g., a sine wave having a single frequency spike) complements the time-domain visualization and provides deeper insight.

### From "DSP applications using C and the TMS320C6x DSK" by Chassaing:

*   Chassaing's book, while focused on C and hardware, provides the underlying principles of signal generation. Even though we use Python/MATLAB/Scilab, the fundamental algorithms for generating these signals (e.g., using loops and mathematical formulas) are the same. The book would discuss how these signals might be generated in real-time on a DSP processor, reinforcing the importance of efficient implementation.

### From "Discrete-Time Signal Processing" by Oppenheim and Schafer:

*   **Chapter 1: Discrete-Time Signals and Systems:** Oppenheim and Schafer provide a rigorous mathematical foundation. They define signals in terms of sequences and their properties (periodicity, symmetry, etc.). Their treatment of complex exponentials and their decomposition into real and imaginary sinusoids using Euler's formula is foundational. The simulation tasks directly verify these mathematical definitions.
*   **Chapter 7: The z-Transform:** While the z-transform is for system analysis, the understanding of signal properties is often tied to their transforms. For example, the frequency response of a system is analyzed using the DTFT, which is closely related to the Fourier Series for periodic signals and the Fourier Transform for aperiodic signals.

## Visualizing Signal Properties

The ability to plot signals is crucial.

*   **Stem Plot:** Used for discrete-time signals to clearly show the values at distinct time indices.
*   **Line Plot:** Can be used for discrete-time signals for a smoother visual appearance, especially when the sampling rate is high, or to represent the underlying continuous-time signal.

### Practice Questions/Exercises

1.  **Generate a discrete-time signal that is 1 for $n = -2, -1, 0, 1$ and 0 otherwise. Plot this signal.**
    *   **Hint:** This is a modified impulse or a finite-duration signal.
2.  **Simulate a decaying exponential signal $x[n] = (0.7)^n u[n]$ for $n$ from 0 to 15. Observe its behavior.**
3.  **Generate a discrete-time cosine wave with the following parameters:**
    *   Amplitude ($A$) = 2
    *   Frequency ($f_0$) = 10 Hz
    *   Sampling Frequency ($f_s$) = 100 Hz
    *   Phase ($\phi$) = $\pi/2$
    *   Number of samples = 50
    *   Plot the signal.
4.  **Generate a discrete-time sine wave $x[n] = \sin(0.5n)$ for $n$ from 0 to 20. Plot the signal.**
5.  **Consider a complex exponential $x[n] = e^{j(0.3\pi n)}$. Plot its real part and imaginary part for $n$ from 0 to 10. Identify the corresponding sinusoidal signals.**

---

### Answers to Practice Questions

**1. Modified Impulse Signal**

**Python:**
```python
import numpy as np
import matplotlib.pyplot as plt

n = np.arange(-5, 5, 1)
signal = np.zeros_like(n, dtype=float)
signal[(n >= -2) & (n <= 1)] = 1.0

plt.figure()
plt.stem(n, signal)
plt.title('Signal for Question 1')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**2. Decaying Exponential Signal**

**Python:**
```python
import numpy as np
import matplotlib.pyplot as plt

a = 0.7
n = np.arange(0, 16, 1)
exp_signal = (a**n) * np.heaviside(n, 1)

plt.figure()
plt.stem(n, exp_signal)
plt.title('Decaying Exponential Signal')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```
**Observation:** The signal starts at amplitude 1 and gradually decreases, approaching zero as $n$ increases.

**3. Discrete-Time Cosine Wave**

**Python:**
```python
import numpy as np
import matplotlib.pyplot as plt

A = 2
fs = 100
f0 = 10
phi = np.pi/2
N_samples = 50
n = np.arange(0, N_samples, 1)
omega0 = 2 * np.pi * f0 / fs

cos_signal = A * np.cos(omega0 * n + phi)

plt.figure()
plt.stem(n, cos_signal)
plt.title('Discrete-Time Cosine Wave')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**4. Discrete-Time Sine Wave**

**Python:**
```python
import numpy as np
import matplotlib.pyplot as plt

n = np.arange(0, 21, 1)
omega0 = 0.5
sin_signal = np.sin(omega0 * n)

plt.figure()
plt.stem(n, sin_signal)
plt.title('Discrete-Time Sine Wave')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**5. Complex Exponential and its Components**

**Python:**
```python
import numpy as np
import matplotlib.pyplot as plt

n = np.arange(0, 11, 1)
omega0 = 0.3 * np.pi
complex_exp = np.exp(1j * (omega0 * n))

real_part = np.real(complex_exp)
imag_part = np.imag(complex_exp)

# Plot real part
plt.figure()
plt.stem(n, real_part)
plt.title('Real Part of Complex Exponential ($Re\{e^{j0.3\pi n}\}$)')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()

# Plot imaginary part
plt.figure()
plt.stem(n, imag_part)
plt.title('Imaginary Part of Complex Exponential ($Im\{e^{j0.3\pi n}\}$)')
plt.xlabel('Time Index (n)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```
**Identification:**
The real part is $Re\{e^{j0.3\pi n}\} = \cos(0.3\pi n)$. This is a cosine wave.
The imaginary part is $Im\{e^{j0.3\pi n}\} = \sin(0.3\pi n)$. This is a sine wave.

## Important Points to Remember

*   **Discrete vs. Continuous Time:** Always be mindful of the distinction. Discrete-time signals are indexed by integers ($n$), while continuous-time signals are indexed by real numbers ($t$).
*   **Frequency in Discrete Time:** Normalized angular frequency ($\omega_0$) is in radians per sample. The unique frequency range is $[-\pi, \pi]$. A frequency $f_0$ Hz corresponds to $\omega_0 = 2\pi f_0 / f_s$.
*   **Sampling:** The process of converting a continuous-time signal to a discrete-time signal is called sampling. The sampling frequency ($f_s$) is critical.
*   **Euler's Formula:** Essential for relating complex exponentials to sinusoids ($e^{j\theta} = \cos(\theta) + j \sin(\theta)$).
*   **Unit Impulse ($\delta[n]$):** Its significance lies in system analysis (impulse response).
*   **Unit Step ($u[n]$):** Represents the beginning of a signal or event.
*   **Programming Tools:** Master the use of `numpy` for array operations and `matplotlib.pyplot` for visualization in Python. Similar libraries/functions exist in Scilab and MATLAB.

This module provides the foundational building blocks for understanding and manipulating signals in the digital domain, preparing you for more advanced topics in DSP.