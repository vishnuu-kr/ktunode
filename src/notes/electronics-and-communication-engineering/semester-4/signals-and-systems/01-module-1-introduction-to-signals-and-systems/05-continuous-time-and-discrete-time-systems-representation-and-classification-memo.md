---
title: "Continuous time and discrete time systems – Representation and 
Classification (memory, causal, stable, linear, time-invariant, invertible)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe514"
status: "completed"
scrapedAt: "2026-05-23T17:52:19.832Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Continuous-Time and Discrete-Time Systems - Representation and Classification

This module introduces the fundamental concepts of signals and systems, focusing on their representation and classification. We will explore the characteristics that define systems, enabling us to understand and analyze their behavior.

---

### 1. Signals: A Foundation

Before diving into systems, it's crucial to understand what a signal is.

**Definition:** A signal is any physical quantity that conveys information about the state or behavior of a physical system. It is a function of one or more independent variables, typically time.

#### 1.1 Continuous-Time (CT) Signals

**Definition:** A continuous-time signal is a signal defined for all values of the independent variable, typically time ($t$). It is often denoted as $x(t)$, where $t \in (-\infty, \infty)$.

*   **Representation:**
    *   **Analytically:** As a mathematical function, e.g., $x(t) = \cos(2\pi ft + \phi)$.
    *   **Graphically:** By plotting the signal's amplitude against time.
    *   **Tabularly:** By listing sampled values of the signal at discrete time instances.

*   **Examples:**
    *   Voice signals (recorded audio).
    *   Temperature readings over a period.
    *   Voltage in an electronic circuit.
    *   Sound waves.

*   **Key Concepts:**
    *   **Independent Variable:** Typically time ($t$), which varies continuously.
    *   **Dependent Variable:** The amplitude or value of the signal at each point in time.

#### 1.2 Discrete-Time (DT) Signals

**Definition:** A discrete-time signal is a signal defined only at discrete points in time. It is often denoted as $x[n]$, where $n$ is an integer representing the sample number.

*   **Representation:**
    *   **Analytically:** As a mathematical sequence, e.g., $x[n] = A \sin(\omega_0 n + \phi)$.
    *   **Graphically:** By plotting the signal's amplitude against the sample number.
    *   **Tabularly:** By listing the values of the signal at each sample index.

*   **Examples:**
    *   Digital audio samples.
    *   Stock prices recorded daily.
    *   Pixel values in a digital image.
    *   Data from sensors that sample at regular intervals.

*   **Key Concepts:**
    *   **Independent Variable:** Sample index ($n$), which takes integer values.
    *   **Dependent Variable:** The amplitude or value of the signal at each sample index.

*   **Relationship between CT and DT Signals:**
    *   **Sampling:** A continuous-time signal can be converted into a discrete-time signal by sampling it at regular intervals. If the sampling period is $T$, then the discrete-time signal $x[n]$ is related to the continuous-time signal $x(t)$ by $x[n] = x(nT)$. This is a fundamental concept in digital signal processing. (Oppenheim & Willsky, Chapter 1)
    *   **Reconstruction:** A discrete-time signal can, under certain conditions (Nyquist-Shannon sampling theorem), be reconstructed back into a continuous-time signal.

---

### 2. Systems: Processing Signals

A system can be thought of as a process that takes an input signal and produces an output signal.

**Definition:** A system is a process or an operation that transforms an input signal into an output signal.

#### 2.1 Continuous-Time (CT) Systems

**Definition:** A continuous-time system operates on continuous-time input signals and produces continuous-time output signals. The input-output relationship is typically described by an equation involving differential equations or integral equations.

*   **Representation:**
    *   **Mathematical Equations:**
        *   **Differential Equations:** Describe the behavior of systems with memory and feedback, e.g., $y(t) = ax(t) + b\frac{dx(t)}{dt}$.
        *   **Integral Equations:** Often used to represent systems involving accumulation or filtering, e.g., $y(t) = \int_{-\infty}^{t} x(\tau) e^{-(t-\tau)} d\tau$.
        *   **Impulse Response:** For linear, time-invariant systems, the output can be represented as the convolution of the input with the system's impulse response, $h(t)$, i.e., $y(t) = x(t) * h(t)$. (Haykin, Chapter 3)
    *   **Block Diagrams:** Visual representations of system components and their interconnections.

*   **Examples:**
    *   An audio amplifier.
    *   A low-pass filter.
    *   A motor control system.
    *   An economic model describing stock market behavior.

#### 2.2 Discrete-Time (DT) Systems

**Definition:** A discrete-time system operates on discrete-time input signals and produces discrete-time output signals. The input-output relationship is typically described by an equation involving difference equations or summation equations.

*   **Representation:**
    *   **Mathematical Equations:**
        *   **Difference Equations:** The discrete-time equivalent of differential equations, e.g., $y[n] = ax[n] + by[n-1]$.
        *   **Summation Equations:** Used for systems involving accumulation or discrete filtering, e.g., $y[n] = \sum_{k=-\infty}^{n} x[k]a^{n-k}$.
        *   **Impulse Response:** For linear, time-invariant discrete-time systems, the output can be represented as the convolution of the input with the system's impulse response, $h[n]$, i.e., $y[n] = x[n] * h[n]$. (Oppenheim & Willsky, Chapter 6)
    *   **Block Diagrams:** Similar to CT systems, used for visualization.

*   **Examples:**
    *   A digital filter.
    *   A computer algorithm processing data.
    *   A system that averages stock prices over the last five days.
    *   Image processing operations.

---

### 3. Classification of Systems

Systems can be classified based on several important properties that dictate their behavior and the methods used to analyze them.

#### 3.1 Memoryless vs. Memory Systems

*   **Memoryless System:** The output of a memoryless system at any given time (or sample index) depends only on the input at that same time (or sample index).

    *   **CT System:** $y(t) = f(x(t))$
    *   **DT System:** $y[n] = f(x[n])$

    *   **Example (CT):** $y(t) = 2x(t)$ (Memoryless)
    *   **Example (DT):** $y[n] = x^2[n]$ (Memoryless)

*   **System with Memory:** The output of a system with memory at any given time (or sample index) depends on past or future values of the input signal, or past values of the output signal.

    *   **Example (CT):** $y(t) = x(t-1)$ (Output depends on past input)
    *   **Example (DT):** $y[n] = y[n-1] + x[n]$ (Output depends on past output)

#### 3.2 Causal vs. Non-causal Systems

*   **Causal System:** The output of a causal system at any given time (or sample index) depends only on present and past values of the input signal. Causal systems are physically realizable because they do not anticipate the future.

    *   **CT System:** $y(t)$ depends only on $x(\tau)$ where $\tau \le t$.
    *   **DT System:** $y[n]$ depends only on $x[k]$ where $k \le n$.

    *   **Example (CT):** $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$ (Causal, output depends on input up to time $t$)
    *   **Example (DT):** $y[n] = \sum_{k=0}^{n} x[k]$ (Causal, output depends on input from sample 0 to $n$)

*   **Non-causal System:** The output of a non-causal system at any given time (or sample index) depends on future values of the input signal. These systems are generally not physically realizable in real-time.

    *   **Example (CT):** $y(t) = x(t+1)$ (Non-causal, output depends on future input)
    *   **Example (DT):** $y[n] = x[n+1]$ (Non-causal, output depends on future input)

    *   **Note:** Non-causal systems can be realized offline, where the entire input signal is available before processing. For instance, a system that averages an input signal with its future values can be implemented if the entire signal is recorded. (Apte, Chapter 2)

#### 3.3 Linear vs. Non-linear Systems

A system is **linear** if it satisfies the properties of superposition and homogeneity.

*   **Homogeneity (Scaling):** If the input $x(t)$ is scaled by a constant $a$, the output $y(t)$ is scaled by the same constant $a$.
    *   If $y(t) = T\{x(t)\}$, then $T\{ax(t)\} = ay(t)$.

*   **Additivity (Superposition):** If the input is the sum of two signals, the output is the sum of the responses to each individual signal.
    *   If $y_1(t) = T\{x_1(t)\}$ and $y_2(t) = T\{x_2(t)\}$, then $T\{x_1(t) + x_2(t)\} = y_1(t) + y_2(t)$.

*   **Superposition Principle (Combined):** A system is linear if for any inputs $x_1(t)$ and $x_2(t)$ and any constants $a$ and $b$:
    *   $T\{ax_1(t) + bx_2(t)\} = aT\{x_1(t)\} + bT\{x_2(t)\}$
    *   The same applies to discrete-time systems: $T\{ax_1[n] + bx_2[n]\} = aT\{x_1[n]\} + bT\{x_2[n]\}$

*   **Example (CT - Linear):** $y(t) = \frac{dx(t)}{dt}$.
    *   Homogeneity: $T\{ax(t)\} = \frac{d(ax(t))}{dt} = a\frac{dx(t)}{dt} = ay(t)$.
    *   Additivity: $T\{x_1(t) + x_2(t)\} = \frac{d(x_1(t) + x_2(t))}{dt} = \frac{dx_1(t)}{dt} + \frac{dx_2(t)}{dt} = y_1(t) + y_2(t)$.

*   **Example (CT - Non-linear):** $y(t) = x^2(t)$.
    *   Homogeneity fails: $T\{ax(t)\} = (ax(t))^2 = a^2 x^2(t) \ne ay(t)$ for $a \ne 1$.

*   **Important:** Linear systems are fundamental in signal processing and system analysis because they are mathematically tractable and have well-developed analytical tools (like transforms). (Lathi, Chapter 3)

#### 3.4 Time-Invariant vs. Time-Variant Systems

*   **Time-Invariant (TI) System:** The behavior of the system does not change with time. If an input signal is delayed, the output signal is also delayed by the same amount, without any alteration in shape.

    *   If $y(t) = T\{x(t)\}$, then $T\{x(t-t_0)\} = y(t-t_0)$ for any time shift $t_0$.
    *   The same applies to discrete-time systems: $T\{x[n-n_0]\} = y[n-n_0]$ for any integer shift $n_0$.

    *   **Example (CT - Time-Invariant):** $y(t) = x(t-1) + \frac{dx(t)}{dt}$.
        *   If input is $x(t-t_0)$: $y_{new}(t) = x(t-t_0-1) + \frac{d(x(t-t_0))}{dt} = x(t-1-t_0) + \frac{dx(t-t_0)}{dt}$.
        *   Shifted output: $y(t-t_0) = x(t-t_0-1) + \frac{dx(t-t_0)}{dt}$.
        *   Since $y_{new}(t) = y(t-t_0)$, the system is time-invariant.

    *   **Example (CT - Time-Variant):** $y(t) = tx(t)$.
        *   If input is $x(t-t_0)$: $y_{new}(t) = t x(t-t_0)$.
        *   Shifted output: $y(t-t_0) = (t-t_0) x(t-t_0)$.
        *   Since $y_{new}(t) \ne y(t-t_0)$, the system is time-variant.

*   **Time-Variant (TV) System:** The behavior of the system changes with time. A delay in the input signal results in a change in the output signal's shape, not just a simple shift.

*   **Important:** Linear Time-Invariant (LTI) systems are a cornerstone of signal processing and control theory. Their analysis is greatly simplified due to their predictable and consistent behavior. (Oppenheim & Willsky, Chapter 2)

#### 3.5 Stable vs. Unstable Systems

The stability of a system refers to its behavior when subjected to bounded inputs.

*   **Bounded-Input, Bounded-Output (BIBO) Stable System:** A system is BIBO stable if for every bounded input signal, the output signal is also bounded. A bounded signal is one whose amplitude does not grow infinitely large.

    *   **CT System:** If $|x(t)| \le M_x < \infty$ for all $t$, then $|y(t)| \le M_y < \infty$ for all $t$.
    *   **DT System:** If $|x[n]| \le M_x < \infty$ for all $n$, then $|y[n]| \le M_y < \infty$ for all $n$.

    *   **Example (CT - Stable):** $y(t) = e^{-t}u(t) * x(t)$, where $u(t)$ is the unit step function. The impulse response $h(t) = e^{-t}u(t)$ is absolutely integrable (i.e., $\int_{-\infty}^{\infty} |h(t)| dt < \infty$), which is a condition for BIBO stability.

    *   **Example (CT - Unstable):** $y(t) = e^{t}u(t) * x(t)$. The impulse response $h(t) = e^{t}u(t)$ grows unbounded, so if the input is a small impulse at $t=0$, the output will grow exponentially.

    *   **Example (DT - Stable):** $y[n] = (\frac{1}{2})^n u[n] * x[n]$. The impulse response $h[n] = (\frac{1}{2})^n u[n]$ is absolutely summable (i.e., $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$), which is a condition for BIBO stability.

    *   **Example (DT - Unstable):** $y[n] = (2)^n u[n] * x[n]$. The impulse response $h[n] = (2)^n u[n]$ grows unbounded, leading to an unstable system.

*   **Important:** Stability is a crucial property for the reliable operation of any system. An unstable system can produce dangerously large outputs even for small, bounded inputs. (Haykin, Chapter 4)

#### 3.6 Invertible vs. Non-invertible Systems

*   **Invertible System:** A system is invertible if it is possible to recover the input signal from the output signal. This means that distinct input signals must produce distinct output signals.

    *   If $y_1(t) = T\{x_1(t)\}$ and $y_2(t) = T\{x_2(t)\}$, then $x_1(t) = x_2(t)$ if and only if $y_1(t) = y_2(t)$.

    *   **Example (CT - Invertible):** $y(t) = 2x(t)$. The input can be recovered as $x(t) = \frac{1}{2}y(t)$.
    *   **Example (CT - Non-invertible):** $y(t) = x(t) + x(t-1)$. If $x_1(t) = 1$ and $x_2(t) = 0$, both produce $y(t)=1$. This system is not invertible. Another example is $y(t) = \frac{dx(t)}{dt}$. If $x_1(t) = 1$ and $x_2(t) = 2$, both have $y(t)=0$.

    *   **Example (DT - Invertible):** $y[n] = x[n-1]$. The input can be recovered as $x[n] = y[n+1]$.
    *   **Example (DT - Non-invertible):** $y[n] = x[n] + x[n-1]$. If $x_1[n] = 1$ and $x_2[n] = 0$, both produce $y[n]=1$.

*   **Invertibility and Zeroes:** For LTI systems, invertibility is related to the presence of zeros in their frequency response (for CT) or transfer function (for DT). If a system has zeros at certain frequencies, it might not be invertible for signals containing those frequencies. (Ambardar, Chapter 5)

---

### 4. Summary Table of System Properties

| Property         | Continuous-Time (CT)                                         | Discrete-Time (DT)                                           | Key Takeaway                                                              |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Memory**       | Output depends on input at present and/or past/future values. | Output depends on input at present and/or past/future sample indices. | Does the output depend solely on the current input?                      |
| **Causality**    | Output $y(t)$ depends only on $x(\tau)$ where $\tau \le t$. | Output $y[n]$ depends only on $x[k]$ where $k \le n$.      | Does the system "know" the future?                                        |
| **Linearity**    | Satisfies Superposition (Homogeneity + Additivity).          | Satisfies Superposition (Homogeneity + Additivity).          | Does scaling input scale output? Does sum of inputs result in sum of outputs? |
| **Time-Invariance** | $T\{x(t-t_0)\} = y(t-t_0)$.                                  | $T\{x[n-n_0]\} = y[n-n_0]$.                                  | Does the system's behavior change over time?                              |
| **Stability**    | BIBO: Bounded input $\implies$ Bounded output.               | BIBO: Bounded input $\implies$ Bounded output.               | Does the output blow up for a limited input?                              |
| **Invertibility**| Distinct inputs produce distinct outputs.                    | Distinct inputs produce distinct outputs.                    | Can we uniquely recover the input from the output?                      |

---

### 5. Learning Outcome Alignment and Practice

This topic directly addresses **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.** The classifications (memory, causal, stable, linear, time-invariant, invertible) are fundamental for understanding and manipulating signals and systems.

Let's test your understanding:

**Practice Questions:**

1.  **Classify the following CT systems:**
    *   a) $y(t) = x(t) + 5$
    *   b) $y(t) = x(t) \cos(t)$
    *   c) $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$
    *   d) $y(t) = x(t+2)$
    *   e) $y(t) = e^{x(t)}$

2.  **Classify the following DT systems:**
    *   a) $y[n] = x[n] + x[n-1]$
    *   b) $y[n] = n x[n]$
    *   c) $y[n] = \sum_{k=0}^{N} x[n-k]$
    *   d) $y[n] = x[n-2]$
    *   e) $y[n] = x[n] + y[n-1]$

3.  **Consider the CT system $y(t) = T\{x(t)\} = x(t) + \frac{dx(t)}{dt}$. Is this system:**
    *   a) Memoryless?
    *   b) Causal?
    *   c) Linear?
    *   d) Time-Invariant?
    *   e) Stable? (Hint: Consider the impulse response)
    *   f) Invertible?

4.  **Consider the DT system $y[n] = T\{x[n]\} = x[n] - x[n-1]$. Is this system:**
    *   a) Memoryless?
    *   b) Causal?
    *   c) Linear?
    *   d) Time-Invariant?
    *   e) Stable? (Hint: Consider the impulse response)
    *   f) Invertible?

**Answers:**

1.  **CT Systems Classification:**
    *   a) $y(t) = x(t) + 5$:
        *   Memoryless: Yes (depends only on $x(t)$)
        *   Causal: Yes (depends only on $x(t)$)
        *   Linear: No (fails homogeneity: $T\{ax(t)\} = ax(t) + 5 \ne a(x(t)+5)$)
        *   Time-Invariant: Yes (response to $x(t-t_0)$ is $x(t-t_0)+5$, which is $y(t-t_0)$)
        *   Stable: Yes (if $x(t)$ is bounded, $y(t)$ is bounded)
        *   Invertible: Yes (recover $x(t) = y(t)-5$)
    *   b) $y(t) = x(t) \cos(t)$:
        *   Memoryless: Yes
        *   Causal: Yes
        *   Linear: Yes
        *   Time-Invariant: No (response to $x(t-t_0)$ is $(t)x(t-t_0)$, shifted output $y(t-t_0) = (t-t_0)x(t-t_0)$)
        *   Stable: Yes
        *   Invertible: Yes
    *   c) $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$:
        *   Memoryless: No (depends on past inputs)
        *   Causal: Yes (depends on input up to current time)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: Yes (If $x(t)$ is bounded, the integral will not necessarily grow infinitely if $x(t)$ averages to zero over time. However, if $x(t)$ is a constant $C>0$, $y(t)$ will grow infinitely. This needs more careful analysis of "bounded input." A common case is if $x(t)$ is absolutely integrable. For a general bounded input, it's not strictly BIBO stable unless $x(t) \to 0$ as $t \to -\infty$.) Let's assume for a general bounded input, it can be unstable. **However, often considered stable if the input has finite energy.** For a standard BIBO definition, it's **unstable** if the input is a constant positive value.
        *   Invertible: No (If $x_1(t) = x_2(t) + c$, then $y_1(t) = y_2(t) + ct$, not invertible in general.)
    *   d) $y(t) = x(t+2)$:
        *   Memoryless: No (depends on future input)
        *   Causal: No (depends on future input)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: Yes
        *   Invertible: Yes ($x(t) = y(t-2)$)
    *   e) $y(t) = e^{x(t)}$:
        *   Memoryless: Yes
        *   Causal: Yes
        *   Linear: No (fails homogeneity)
        *   Time-Invariant: Yes
        *   Stable: Yes (if $x(t)$ is bounded, $e^{x(t)}$ is bounded)
        *   Invertible: Yes (if $x(t)$ is always real)

2.  **DT Systems Classification:**
    *   a) $y[n] = x[n] + x[n-1]$:
        *   Memoryless: No (depends on $x[n-1]$)
        *   Causal: Yes (depends on present and past input)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: Yes (BIBO stable)
        *   Invertible: No (if $x_1[n] = 1$ and $x_2[n] = 0$, both give $y[n]=1$ for $n \ge 1$)
    *   b) $y[n] = n x[n]$:
        *   Memoryless: Yes
        *   Causal: Yes
        *   Linear: Yes
        *   Time-Invariant: No (coefficient $n$ changes with time)
        *   Stable: Yes
        *   Invertible: Yes
    *   c) $y[n] = \sum_{k=0}^{N} x[n-k]$:
        *   Memoryless: No (depends on past inputs)
        *   Causal: Yes (depends on inputs from $n-N$ to $n$)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: Yes (BIBO stable)
        *   Invertible: No (loses information about individual past samples)
    *   d) $y[n] = x[n-2]$:
        *   Memoryless: No (depends on past input)
        *   Causal: Yes (depends on past input)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: Yes
        *   Invertible: Yes ($x[n] = y[n+2]$)
    *   e) $y[n] = x[n] + y[n-1]$:
        *   Memoryless: No (depends on past output)
        *   Causal: Yes (depends on present input and past output)
        *   Linear: Yes
        *   Time-Invariant: Yes
        *   Stable: No (This is a difference equation for integration. If $x[n]=1$ for all $n$, then $y[n] = n+1$, which grows unbounded. Unstable.)
        *   Invertible: No (if $x_1[n]=1$ and $x_2[n]=0$, $y_1[n]=n+1$ and $y_2[n]=0$ for $n \ge 0$. For a constant input, the output grows linearly.)

3.  **CT System $y(t) = x(t) + \frac{dx(t)}{dt}$:**
    *   a) Memoryless: No (depends on derivative of input)
    *   b) Causal: Yes (depends on present input and its derivative, which is determined by present and past input values)
    *   c) Linear: Yes (as shown in section 3.3)
    *   d) Time-Invariant: Yes (as shown in section 3.4)
    *   e) Stable: For stability, we look at the impulse response. The impulse response is $h(t) = \delta(t) + e^{-t}u(t)$. This impulse response is absolutely integrable: $\int_{-\infty}^{\infty} |h(t)| dt = |\delta(0)| + \int_0^\infty e^{-t} dt = 0 + [-e^{-t}]_0^\infty = 0 - (-1) = 1$. Since the impulse response is absolutely integrable, the system is BIBO stable. **Stable: Yes**.
    *   f) Invertible: To check invertibility, we see if we can recover $x(t)$ from $y(t)$. The system equation is $y(t) = x(t) + \frac{dx(t)}{dt}$. This is a first-order linear differential equation. If we use Laplace transforms (though not formally covered yet, the idea is that it's invertible), we can see that the output is related to the input by a transfer function $H(s) = 1+s$. Since $H(s)$ is not identically zero for any $s$, it is invertible. We can find the inverse system. **Invertible: Yes**.

4.  **DT System $y[n] = x[n] - x[n-1]$:**
    *   a) Memoryless: No (depends on $x[n-1]$)
    *   b) Causal: Yes (depends on present and past input)
    *   c) Linear: Yes (satisfies superposition)
    *   d) Time-Invariant: Yes (response to $x[n-n_0]$ is $x[n-n_0] - x[n-1-n_0]$, which is $y[n-n_0]$)
    *   e) Stable: The impulse response is $h[n] = \delta[n] - \delta[n-1]$. This is a finite-length impulse response, so it is absolutely summable: $\sum_{n=-\infty}^{\infty} |h[n]| = |h[0]| + |h[1]| = |1| + |-1| = 2$. Since the impulse response is absolutely summable, the system is BIBO stable. **Stable: Yes**.
    *   f) Invertible: This system computes the difference between consecutive samples. If the input $x[n]$ has a DC component (e.g., $x[n] = C$), then $y[n] = C - C = 0$ for all $n$. So, if $y[n]=0$, we cannot determine $C$. Thus, the system is not invertible. **Invertible: No**.

---

### 6. Important Points to Remember

*   **Continuous-Time vs. Discrete-Time:** The fundamental difference lies in the nature of the independent variable (time vs. sample index) and the types of operations and representations used.
*   **LTI Systems:** Linear Time-Invariant systems are central to signal processing and control theory. Understanding their properties allows for powerful analysis techniques.
*   **Causality:** Causal systems are physically realizable in real-time, as they do not depend on future inputs.
*   **Stability (BIBO):** Ensures that a system's output remains bounded for any bounded input, crucial for reliable operation.
*   **Invertibility:** Determines if the original input can be recovered from the system's output. Loss of information leads to non-invertibility.
*   **Superposition:** The key to linearity. Always check both homogeneity and additivity.
*   **Time-Invariance:** The system's characteristics should not drift over time.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. References

*   **Oppenheim, A. V., & Willsky, A. S. (2015). *Signals and Systems* (2nd ed.). Pearson.** (Chapters 1, 2, 4)
*   **Haykin, S. S. (2021). *Signals and Systems* (2nd ed.). John Wiley.** (Chapters 1, 3)
*   **Lathi, B. P. (2009). *Principles of Signal Processing & Linear systems* (2nd ed.). Oxford University Press.** (Chapter 3)
*   **Apte, S. D. (2016). *Signals and systems - Principles and Applications* (1st ed.). Cambridge University Press.** (Chapter 2)

This concludes Module 1's introduction to signals and systems, covering their representation and essential classification properties. These concepts form the bedrock for more advanced topics in the course.