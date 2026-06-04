---
title: "Unit pulse signal"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 1: Simulation of Signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec29"
status: "completed"
scrapedAt: "2026-05-23T17:55:48.349Z"
---
# Digital Signal Processing Lab - Module 1: Simulation of Signals

## Unit Pulse Signal

This unit explores the fundamental concept of the unit pulse signal, a cornerstone in Digital Signal Processing (DSP) and a building block for understanding and simulating more complex signals and systems.

### 1. Learning Outcomes

Upon successful completion of this unit, you will be able to:

*   **Understand the definition and mathematical representation of the unit pulse signal.**
*   **Generate the unit pulse signal computationally.**
*   **Visualize and analyze the properties of the unit pulse signal.**
*   **Recognize the significance of the unit pulse signal in signal processing.**
*   **Relate the unit pulse signal to fundamental DSP concepts like sampling and impulse response.**

### 2. Key Concepts and Definitions

#### 2.1 What is a Signal?

In Digital Signal Processing, a **signal** is a function that conveys information about a phenomenon. Signals can be continuous in time (analog signals) or discrete in time (digital signals). In this lab, we primarily deal with **discrete-time signals**, which are defined only at specific, uniformly spaced points in time.

#### 2.2 The Unit Pulse Signal

The **unit pulse signal**, also known as the **unit impulse signal** or **Kronecker delta function**, is a fundamental discrete-time signal characterized by a single non-zero value (usually 1) at a specific time instant and zero everywhere else.

**Mathematical Representation:**

The unit pulse signal, denoted by $\delta[n]$, is defined as:

$$
\delta[n] =
\begin{cases}
1 & \text{if } n = 0 \\
0 & \text{if } n \neq 0
\end{cases}
$$

Where:
*   $n$ represents the discrete time index.
*   The pulse is centered at $n=0$.

**Graphical Representation:**

```
      ^ x[n]
      |
    1 +-------
      |   |
      |   |
  ----+---+---+---+---> n
     -2  -1   0   1   2
      |
```

#### 2.3 Time Shifting the Unit Pulse

The unit pulse signal can be shifted in time. A time-shifted unit pulse, denoted by $\delta[n-k]$, is defined as:

$$
\delta[n-k] =
\begin{cases}
1 & \text{if } n = k \\
0 & \text{if } n \neq k
\end{cases}
$$

Where $k$ is an integer representing the shift.
*   If $k > 0$, the pulse is shifted to the right (delayed).
*   If $k < 0$, the pulse is shifted to the left (advanced).

**Example:** $\delta[n-2]$

```
      ^ x[n]
      |
    1 +-------
      |   |
      |   |
  ----+---+---+---+---> n
     -2  -1   0   1   2
      |           |
```

**Example:** $\delta[n+1]$

```
      ^ x[n]
      |
    1 +-------
      |   |
      |   |
  ----+---+---+---+---> n
     -2  -1   0   1   2
      |
      |
```

#### 2.4 Properties of the Unit Pulse Signal

The unit pulse signal possesses several crucial properties that make it invaluable in DSP:

*   **Sifting Property:** This is the most important property. When a signal $x[n]$ is multiplied by a time-shifted unit pulse $\delta[n-k]$ and then summed over all time, the result is the value of the signal at the time of the impulse.

    $$ \sum_{n=-\infty}^{\infty} x[n] \delta[n-k] = x[k] $$

    If the impulse is at $n=0$ (i.e., $\delta[n]$), the sifting property becomes:

    $$ \sum_{n=-\infty}^{\infty} x[n] \delta[n] = x[0] $$

    **Significance:** This property allows us to extract specific samples from a signal. It's the discrete-time equivalent of the sifting property of the continuous-time Dirac delta function.

*   **Unit Area (for continuous-time Dirac delta):** While the unit pulse has a "unit value" at $n=0$, it's important to distinguish it from the continuous-time Dirac delta function, which has a "unit area." In discrete time, the sum of samples is analogous to the integral in continuous time. The sum of the unit pulse signal is always 1.

    $$ \sum_{n=-\infty}^{\infty} \delta[n] = \delta[0] + \sum_{n \neq 0} \delta[n] = 1 + 0 = 1 $$

*   **Orthogonality (with shifted versions):** Shifted versions of the unit pulse are orthogonal.

    $$ \sum_{n=-\infty}^{\infty} \delta[n-k] \delta[n-m] = \delta[k-m] $$

*   **Representation of Discrete-Time Signals:** Any discrete-time signal $x[n]$ can be represented as a sum of weighted and shifted unit pulses.

    $$ x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k] $$

    This means that any signal can be constructed by adding together appropriately scaled and delayed versions of the unit pulse.

### 3. Simulation and Generation (Practical Implementation)

The unit pulse signal is straightforward to generate in simulation environments like MATLAB or Python.

#### 3.1 Generation in MATLAB

```matlab
% Define the length of the signal and the position of the pulse
N = 10;      % Total number of samples
pulse_pos = 5; % Position of the unit pulse (0-indexed)

% Create a vector of zeros
unit_pulse = zeros(1, N);

% Set the value at the pulse position to 1
if pulse_pos >= 0 && pulse_pos < N
    unit_pulse(pulse_pos + 1) = 1; % MATLAB uses 1-based indexing
end

% Display the generated unit pulse
disp('Generated Unit Pulse:');
disp(unit_pulse);

% Plot the unit pulse
figure;
stem(0:(N-1), unit_pulse); % Plotting against n = 0, 1, ..., N-1
title('Unit Pulse Signal');
xlabel('n (Time Index)');
ylabel('Amplitude');
grid on;
```

**Explanation:**

*   `N`: Determines the total number of samples we want to generate.
*   `pulse_pos`: Specifies where the unit pulse should be located. Remember that in programming, indexing often starts from 0, so the `pulse_pos`-th sample corresponds to $n = \text{pulse\_pos}$.
*   `zeros(1, N)`: Creates a row vector of length `N` filled with zeros.
*   `unit_pulse(pulse_pos + 1) = 1;`: In MATLAB, array indices start from 1. So, to set the element corresponding to $n = \text{pulse\_pos}$, we access `pulse_pos + 1`.
*   `stem()`: A plotting function suitable for discrete-time signals, where each data point is represented by a vertical line (a stem) from the x-axis, topped by a marker.

#### 3.2 Generation in Python (using NumPy)

```python
import numpy as np
import matplotlib.pyplot as plt

# Define the length of the signal and the position of the pulse
N = 10        # Total number of samples
pulse_pos = 5 # Position of the unit pulse (0-indexed)

# Create a vector of zeros
unit_pulse = np.zeros(N)

# Set the value at the pulse position to 1
if 0 <= pulse_pos < N:
    unit_pulse[pulse_pos] = 1

# Display the generated unit pulse
print("Generated Unit Pulse:")
print(unit_pulse)

# Plot the unit pulse
plt.figure()
plt.stem(np.arange(N), unit_pulse) # Plotting against n = 0, 1, ..., N-1
plt.title('Unit Pulse Signal')
plt.xlabel('n (Time Index)')
plt.ylabel('Amplitude')
plt.grid(True)
plt.show()
```

**Explanation:**

*   `numpy.zeros(N)`: Creates a NumPy array of length `N` filled with zeros.
*   `unit_pulse[pulse_pos] = 1`: Python uses 0-based indexing, so we directly access `pulse_pos`.
*   `matplotlib.pyplot.stem()`: The Python equivalent of MATLAB's `stem`.
*   `numpy.arange(N)`: Generates an array of integers from 0 to `N-1`, representing the time indices.

### 4. Significance and Applications

The unit pulse signal is fundamental in DSP for several reasons:

*   **Impulse Response:** The output of a Linear Time-Invariant (LTI) system when the input is a unit pulse signal is called the **impulse response**, denoted by $h[n]$. The impulse response completely characterizes an LTI system. Any output of an LTI system can be found by convolving the input signal with the system's impulse response.
    *   *(Relates to Course Outcome CO4: Implement LTI systems)*

*   **Basis Function:** Just as sine and cosine waves are basis functions for continuous signals, the unit pulse can be seen as a basic building block for discrete-time signals. Any discrete-time signal can be expressed as a sum of scaled and shifted unit pulses.
    *   *(Relates to Course Outcome CO1: Generate basic signal waveforms)*

*   **Sampling:** The process of converting a continuous-time signal to a discrete-time signal involves sampling. Mathematically, sampling can be viewed as multiplying the continuous-time signal with an infinite train of unit impulses.

*   **Convolution:** The unit pulse's sifting property is central to understanding convolution, the mathematical operation that describes the output of an LTI system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


#### 4.1 Unit Pulse and LTI Systems (Textbook Reference)

As discussed in **Ingle & Proakis (Chapter 3: Discrete-Time Signals and Systems)**, the output $y[n]$ of an LTI system with impulse response $h[n]$ to an input $x[n]$ is given by the convolution sum:

$$ y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k] $$

If the input $x[n]$ is the unit pulse $\delta[n]$, then:

$$ y[n] = \delta[n] * h[n] = \sum_{k=-\infty}^{\infty} \delta[k] h[n-k] $$

Using the sifting property, $\sum_{k=-\infty}^{\infty} h[n-k] \delta[k] = h[n]$, so the output is $y[n] = h[n]$. This confirms that the impulse response is indeed the output when the input is the unit pulse.

**Think DSP (Chapter 2: The Impulse)** also emphasizes the importance of the impulse as the fundamental building block. Downey explains how the impulse response defines a system, and convolution is the tool to predict the output for any input.

### 5. Practice Questions

1.  **Definition:** What is the mathematical definition of the unit pulse signal $\delta[n]$?
2.  **Generation (MATLAB/Python):** Write a code snippet to generate a unit pulse signal of length 15, centered at $n=7$.
3.  **Time Shifting:** Sketch the unit pulse signal $\delta[n+3]$.
4.  **Sifting Property:** If $x[n] = \{..., 0, 2, 4, 6, 8, 10, ...\}$ for $n=0, 1, 2, 3, 4, ...$ respectively, what is the value of $\sum_{n=-\infty}^{\infty} x[n] \delta[n-2]$?
5.  **Signal Representation:** Express the signal $s[n] = \{0, 0, 5, 0, 0, 2, 0, ...\}$ (where 5 is at $n=2$ and 2 is at $n=5$) as a sum of weighted and shifted unit pulses.

### 6. Answers to Practice Questions

1.  $$
    \delta[n] =
    \begin{cases}
    1 & \text{if } n = 0 \\
    0 & \text{if } n \neq 0
    \end{cases}
    $$
2.  **MATLAB:**
    ```matlab
    N = 15;
    pulse_pos = 7;
    unit_pulse = zeros(1, N);
    if pulse_pos >= 0 && pulse_pos < N
        unit_pulse(pulse_pos + 1) = 1;
    end
    stem(0:(N-1), unit_pulse);
    title('Unit Pulse at n=7');
    xlabel('n'); ylabel('Amplitude'); grid on;
    ```
    **Python:**
    ```python
    import numpy as np
    import matplotlib.pyplot as plt
    N = 15
    pulse_pos = 7
    unit_pulse = np.zeros(N)
    if 0 <= pulse_pos < N:
        unit_pulse[pulse_pos] = 1
    plt.stem(np.arange(N), unit_pulse)
    plt.title('Unit Pulse at n=7')
    plt.xlabel('n'); plt.ylabel('Amplitude'); plt.grid(True); plt.show()
    ```
3.  **Sketch:** The signal will have a value of 1 at $n=-3$ and 0 everywhere else.
    ```
          ^ x[n]
          |
        1 +-------
          |   |
          |   |
      ----+---+---+---+---> n
         -4  -3  -2  -1   0
          |
    ```
4.  Using the sifting property $\sum_{n=-\infty}^{\infty} x[n] \delta[n-k] = x[k]$, with $k=2$:
    $\sum_{n=-\infty}^{\infty} x[n] \delta[n-2] = x[2]$.
    Given $x[n] = \{..., 0, 2, 4, 6, 8, 10, ...\}$ for $n=0, 1, 2, 3, 4, ...$, the value at $n=2$ is 4.
    Therefore, the answer is **4**.
5.  $s[n] = 5 \delta[n-2] + 2 \delta[n-5]$

### 7. Important Points to Remember

*   The unit pulse signal $\delta[n]$ is 1 only at $n=0$ and 0 otherwise.
*   A time-shifted unit pulse $\delta[n-k]$ is 1 only at $n=k$ and 0 otherwise.
*   The **sifting property** ($\sum x[n]\delta[n-k] = x[k]$) is critical for understanding signal analysis and system behavior.
*   The unit pulse is the **fundamental building block** for discrete-time signals.
*   The output of an LTI system to a unit pulse input is its **impulse response**.
*   Always be mindful of **indexing conventions** (0-based vs. 1-based) when implementing signal generation in software.

### 8. Textbooks and Reference Books Integration

*   **Ingle & Proakis:** Provides a solid foundation for understanding discrete-time signals and systems, including the properties and applications of the unit pulse, especially in the context of convolution and impulse response (Chapters 3 & 4).
*   **Think DSP (Downey):** Offers a more intuitive and programming-centric approach, making the concept of the unit pulse and its role in system modeling very accessible (Chapter 2).
*   **Oppenheim & Schafer:** A comprehensive reference that delves deep into the mathematical rigor of discrete-time signal processing, offering detailed proofs and derivations related to the unit pulse and its properties.

This unit lays the groundwork for understanding more complex signal processing concepts. Mastering the unit pulse signal and its properties is essential for success in subsequent modules.