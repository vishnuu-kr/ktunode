---
title: "Classification and representation of continuous time and discrete time signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361cb"
status: "completed"
scrapedAt: "2026-05-23T16:23:39.350Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems: Elementary Signals

## Topic: Classification and Representation of Continuous-Time and Discrete-Time Signals

This module introduces the fundamental building blocks of signals and systems: signals themselves. We will explore how signals are classified and represented in both continuous-time and discrete-time domains. This understanding is crucial for analyzing and designing various signal processing and control systems, directly contributing to **Course Outcome CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**.

---

### 1. What are Signals?

A **signal** is a function that conveys information about the behavior or attributes of some phenomenon. In engineering and science, signals are often physical quantities that vary with time, space, or other independent variables.

**Examples:**

*   **Continuous-time:** The voltage across a resistor as a function of time, the temperature of a room over a day, the position of a moving object over time.
*   **Discrete-time:** The daily closing price of a stock, the pixel intensity values of a digital image, the sampled audio data from a microphone.

---

### 2. Continuous-Time (CT) vs. Discrete-Time (DT) Signals

The fundamental difference lies in the nature of the independent variable.

#### 2.1. Continuous-Time Signals

*   **Definition:** A continuous-time signal, denoted as $x(t)$, is defined for every value of the independent variable $t$, where $t$ is a continuous variable (typically representing time). The domain of $t$ is typically $(-\infty, \infty)$ or a subset of it.
*   **Representation:** Usually represented as a graph where the independent variable is on the horizontal axis and the signal value on the vertical axis.
*   **Textbook Reference:** Haykin & Van Veen (2nd Ed., 2007) Chapter 1.1.1, Oppenheim, Willsky & Nawab (2nd Ed., 2015) Chapter 1.1.

**Examples:**

*   **Unit Step Function, $u(t)$:**
    $$
    u(t) =
    \begin{cases}
    1, & t \ge 0 \\
    0, & t < 0
    \end{cases}
    $$
    This signal "switches on" at $t=0$.

*   **Unit Ramp Function, $r(t)$:**
    $$
    r(t) =
    \begin{cases}
    t, & t \ge 0 \\
    0, & t < 0
    \end{cases}
    $$
    This signal increases linearly from zero for $t \ge 0$. Note that $r(t) = t \cdot u(t)$.

*   **Exponential Function, $e^{at}$:**
    *   If $a > 0$, the signal grows exponentially.
    *   If $a < 0$, the signal decays exponentially.

*   **Sinusoidal Signals, $A \cos(\omega_0 t + \phi)$ or $A \sin(\omega_0 t + \phi)$:**
    *   $A$: Amplitude
    *   $\omega_0$: Angular frequency (radians/sec)
    *   $f_0$: Frequency ($f_0 = \omega_0 / 2\pi$, Hz)
    *   $\phi$: Phase

#### 2.2. Discrete-Time (DT) Signals

*   **Definition:** A discrete-time signal, denoted as $x[n]$, is defined only for specific values of the independent variable $n$, where $n$ is an integer. These values typically represent sampled instants of a continuous-time signal.
*   **Representation:** Usually represented by a sequence of numbers or a stem plot, where the integer index is on the horizontal axis and the signal value on the vertical axis.
*   **Textbook Reference:** Haykin & Van Veen (2nd Ed., 2007) Chapter 1.1.2, Oppenheim, Willsky & Nawab (2nd Ed., 2015) Chapter 1.1.

**Examples:**

*   **Unit Step Sequence, $u[n]$:**
    $$
    u[n] =
    \begin{cases}
    1, & n \ge 0 \\
    0, & n < 0
    \end{cases}
    $$
    This sequence is 1 for non-negative integer indices and 0 otherwise.

*   **Unit Ramp Sequence, $r[n]$:**
    $$
    r[n] =
    \begin{cases}
    n, & n \ge 0 \\
    0, & n < 0
    \end{cases}
    $$
    This sequence increases linearly for non-negative integer indices. Note that $r[n] = n \cdot u[n]$.

*   **Exponential Sequence, $a^n$:**
    *   If $|a| < 1$, the sequence decays exponentially.
    *   If $|a| > 1$, the sequence grows exponentially.

*   **Sinusoidal Sequences, $A \cos(\Omega_0 n + \phi)$ or $A \sin(\Omega_0 n + \phi)$:**
    *   $A$: Amplitude
    *   $\Omega_0$: Normalized angular frequency (radians/sample)

**Important Distinction:** $\Omega_0$ in discrete-time is analogous to $\omega_0$ in continuous-time, but $\Omega_0$ is inherently periodic with a period of $2\pi$ (i.e., $\cos(\Omega_0 n) = \cos((\Omega_0 + 2\pi)n)$).

---

### 3. Classification of Signals

Signals can be classified based on various properties. This classification helps in understanding their behavior and choosing appropriate analysis techniques.

#### 3.1. Based on the Independent Variable

*   **Continuous-Time vs. Discrete-Time:** Already discussed.

#### 3.2. Based on the Amplitude

*   **Continuous-Valued Signals:** The amplitude can take any value within a range (e.g., voltage, temperature). Most analog signals are continuous-valued.
*   **Discrete-Valued Signals:** The amplitude is restricted to a finite set of values (e.g., digital signals representing binary data, quantized measurements).

#### 3.3. Based on Periodicity

*   **Periodic Signals:** A signal $x(t)$ is **periodic** if there exists a positive value $T_0$ such that $x(t + T_0) = x(t)$ for all $t$. $T_0$ is called the **period**. The **fundamental period** is the smallest positive value of $T_0$.
    *   **For CT signals:** Sinusoidal signals $A \cos(\omega_0 t + \phi)$ and $A \sin(\omega_0 t + \phi)$ are periodic with fundamental period $T_0 = 2\pi / |\omega_0|$. If a signal is a sum of sinusoids with frequencies $\omega_{01}, \omega_{02}, \dots$, it is periodic if the ratios of frequencies $\omega_{0i}/\omega_{0j}$ are rational.
    *   **For DT signals:** A sequence $x[n]$ is **periodic** if there exists a positive integer $N_0$ such that $x[n + N_0] = x[n]$ for all $n$. $N_0$ is the period. A discrete-time sinusoidal sequence $A \cos(\Omega_0 n + \phi)$ is periodic if $\Omega_0 / (2\pi)$ is a rational number ($m/N_0$).
*   **Aperiodic (or Transient) Signals:** Signals that are not periodic.

**Example (Periodicity):**

*   **CT:** $x(t) = \cos(2\pi t) + \sin(4\pi t)$. The first sinusoid has $T_1 = 2\pi/(2\pi) = 1$. The second has $T_2 = 2\pi/(4\pi) = 0.5$. Since $1/0.5 = 2$ (rational), the sum is periodic with period $T_0 = \text{LCM}(T_1, T_2) = \text{LCM}(1, 0.5) = 1$.
*   **DT:** $x[n] = \cos(\frac{\pi}{2} n)$. Here $\Omega_0 = \pi/2$. $\Omega_0 / (2\pi) = (\pi/2)/(2\pi) = 1/4$. This is rational, so the signal is periodic with period $N_0 = 4$.

#### 3.4. Based on Symmetry

*   **Even Signals:** A signal $x(t)$ is **even** if $x(-t) = x(t)$ for all $t$. The graph of an even signal is symmetric with respect to the vertical axis.
    *   **CT Example:** $\cos(\omega_0 t)$, $t^2$, $|t|$.
    *   **DT Example:** $\cos(\Omega_0 n)$, $n^2 \pmod 5$.
*   **Odd Signals:** A signal $x(t)$ is **odd** if $x(-t) = -x(t)$ for all $t$. The graph of an odd signal is symmetric with respect to the origin.
    *   **CT Example:** $\sin(\omega_0 t)$, $t^3$, $t$.
    *   **DT Example:** $\sin(\Omega_0 n)$, $n^3 \pmod 5$.

**Decomposition into Even and Odd Parts:** Any signal can be represented as the sum of an even signal and an odd signal.

*   **For CT signals:**
    *   Even part: $x_e(t) = \frac{1}{2} [x(t) + x(-t)]$
    *   Odd part: $x_o(t) = \frac{1}{2} [x(t) - x(-t)]$
    Check: $x_e(-t) = \frac{1}{2} [x(-t) + x(t)] = x_e(t)$ (even). $x_o(-t) = \frac{1}{2} [x(-t) - x(t)] = -\frac{1}{2} [x(t) - x(-t)] = -x_o(t)$ (odd). And $x_e(t) + x_o(t) = \frac{1}{2}x(t) + \frac{1}{2}x(-t) + \frac{1}{2}x(t) - \frac{1}{2}x(-t) = x(t)$.

*   **For DT signals:**
    *   Even part: $x_e[n] = \frac{1}{2} [x[n] + x[-n]]$
    *   Odd part: $x_o[n] = \frac{1}{2} [x[n] - x[-n]]$

**Example (Even/Odd Decomposition):** Let $x(t) = e^{-at} u(t)$ for $a > 0$.
We need $x(-t) = e^{-a(-t)} u(-t) = e^{at} u(-t)$.
*   $x_e(t) = \frac{1}{2} [e^{-at} u(t) + e^{at} u(-t)]$
*   $x_o(t) = \frac{1}{2} [e^{-at} u(t) - e^{at} u(-t)]$

#### 3.5. Based on Energy and Power

*   **Energy Signals:** Signals for which the total energy is finite.
    *   **CT Energy:** $E = \int_{-\infty}^{\infty} |x(t)|^2 dt < \infty$
    *   **DT Energy:** $E = \sum_{n=-\infty}^{\infty} |x[n]|^2 < \infty$
    *   **Characteristics:** These signals typically decay sufficiently fast as $|t| \to \infty$ or $n \to \pm \infty$. Examples include a single pulse, decaying exponentials.
*   **Power Signals:** Signals for which the average power is finite and non-zero.
    *   **CT Average Power:** $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt$
    *   **DT Average Power:** $P = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2$
    *   **Characteristics:** These signals are often periodic or have a constant DC component. Examples include sinusoids, DC signals.
*   **Neither:** Signals that are neither energy nor power signals (e.g., growing exponentials like $e^{at}$ with $a>0$).

**Relationship:** If a signal is an energy signal, its power is zero. If a signal has finite non-zero power, it is not an energy signal.

**Important Note:** If a signal is periodic, it is a power signal. If a signal is zero except over a finite interval, it is an energy signal.

**Example (Energy/Power):**

*   **CT:** $x(t) = e^{-at} u(t)$ with $a > 0$.
    $E = \int_{0}^{\infty} (e^{-at})^2 dt = \int_{0}^{\infty} e^{-2at} dt = [-\frac{1}{2a} e^{-2at}]_0^\infty = 0 - (-\frac{1}{2a}) = \frac{1}{2a}$. This is finite, so it's an energy signal. Its power is 0.
*   **CT:** $x(t) = A \cos(\omega_0 t)$.
    $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} A^2 \cos^2(\omega_0 t) dt = \frac{A^2}{2} \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} (1 + \cos(2\omega_0 t)) dt$
    $P = \frac{A^2}{2} \lim_{T \to \infty} \frac{1}{2T} [t + \frac{1}{2\omega_0} \sin(2\omega_0 t)]_{-T}^{T} = \frac{A^2}{2} \lim_{T \to \infty} \frac{1}{2T} [ (T + \frac{1}{2\omega_0} \sin(2\omega_0 T)) - (-T + \frac{1}{2\omega_0} \sin(-2\omega_0 T)) ]$
    $P = \frac{A^2}{2} \lim_{T \to \infty} \frac{1}{2T} [2T + \frac{1}{2\omega_0} (\sin(2\omega_0 T) + \sin(2\omega_0 T))] = \frac{A^2}{2} \lim_{T \to \infty} [1 + \frac{\sin(2\omega_0 T)}{\omega_0 T}] = \frac{A^2}{2} (1 + 0) = \frac{A^2}{2}$. This is finite and non-zero, so it's a power signal.

#### 3.6. Based on Causality

*   **Causal Signals:** A signal $x(t)$ is **causal** if $x(t) = 0$ for all $t < 0$.
    *   **CT:** For $x(t)$, if $x(t)=0$ for $t<0$, it's causal. Typically represented using the unit step function $u(t)$.
    *   **DT:** For $x[n]$, if $x[n]=0$ for $n<0$, it's causal. Typically represented using the unit step sequence $u[n]$.
*   **Non-Causal Signals:** Signals that are not causal.

**Textbook Reference:** Haykin & Van Veen (2nd Ed., 2007) Chapter 1.1.3, Oppenheim, Willsky & Nawab (2nd Ed., 2015) Chapter 1.1.
Causality is particularly important when dealing with systems, as a causal system's output at any time depends only on present and past inputs.

**Example:**

*   $x(t) = e^{-t} u(t)$ is causal.
*   $x(t) = \cos(t)$ is non-causal because it's non-zero for $t<0$.
*   $x[n] = n u[n]$ is causal.
*   $x[n] = 2^n$ is non-causal.

#### 3.7. Based on Boundedness

*   **Bounded Signals:** Signals whose amplitude remains within a finite range.
    *   **CT:** $|x(t)| \le M$ for all $t$ and some finite $M$.
    *   **DT:** $|x[n]| \le M$ for all $n$ and some finite $M$.
*   **Unbounded Signals:** Signals whose amplitude can grow infinitely large.

**Example:**

*   $x(t) = 5 \sin(t)$ is bounded.
*   $x(t) = t$ is unbounded.
*   $x[n] = \frac{1}{n}$ for $n \ne 0$ and $x[0] = 0$ is bounded.
*   $x[n] = 2^n$ is unbounded.

#### 3.8. Other Classifications

*   **Deterministic vs. Random Signals:** Deterministic signals can be described by a mathematical formula, while random signals are unpredictable. (Beyond the scope of this introductory topic).
*   **Real vs. Complex Signals:** Signals whose amplitude values are real or complex numbers, respectively.

---

### 4. Elementary Signals (Building Blocks)

These are basic signals that are often used to construct more complex signals or to analyze systems.

#### 4.1. Continuous-Time Elementary Signals

*   **Unit Step Function, $u(t)$:** Defined earlier.
*   **Unit Ramp Function, $r(t)$:** Defined earlier.
*   **Unit Impulse Function (Dirac Delta Function), $\delta(t)$:**
    *   **Definition:** An idealized signal that is zero everywhere except at $t=0$, where it is infinite. Its integral is 1.
    $$
    \delta(t) =
    \begin{cases}
    \infty, & t = 0 \\
    0, & t \ne 0
    \end{cases}
    $$
    and $\int_{-\infty}^{\infty} \delta(t) dt = 1$.
    *   **Sifting Property:** $\int_{-\infty}^{\infty} x(t) \delta(t - t_0) dt = x(t_0)$.
    *   **Relationship to Unit Step:** $\delta(t) = \frac{du(t)}{dt}$ and $u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau$.
    *   **Approximations:** The delta function can be thought of as the limit of a sequence of functions that are highly peaked at $t=0$ and have unit area, e.g., a rectangular pulse of width $\Delta$ and height $1/\Delta$ as $\Delta \to 0$.
    *   **Textbook Reference:** Haykin & Van Veen (2nd Ed., 2007) Chapter 1.1.1, Oppenheim, Willsky & Nawab (2nd Ed., 2015) Chapter 1.1.

*   **Exponential Function, $e^{at}$:** Defined earlier.
*   **Sinusoidal Signals, $A \cos(\omega_0 t + \phi)$, $A \sin(\omega_0 t + \phi)$:** Defined earlier.
*   **Rectangular Pulse (Gate Function), $\text{rect}(t/\tau)$:**
    $$
    \text{rect}(t/\tau) =
    \begin{cases}
    1, & |t| \le \tau/2 \\
    0, & |t| > \tau/2
    \end{cases}
    $$
    Often simplified as $\text{rect}(t)$ when $\tau=1$, which is 1 for $|t| \le 1/2$ and 0 otherwise.

*   **Triangular Pulse, $\text{tri}(t/\tau)$:**
    $$
    \text{tri}(t/\tau) =
    \begin{cases}
    1 - \frac{2|t|}{\tau}, & |t| \le \tau/2 \\
    0, & |t| > \tau/2
    \end{cases}
    $$
    This is a triangle centered at $t=0$ with peak value 1 and base width $\tau$.

#### 4.2. Discrete-Time Elementary Signals

*   **Unit Step Sequence, $u[n]$:** Defined earlier.
*   **Unit Ramp Sequence, $r[n]$:** Defined earlier.
*   **Unit Impulse Sequence (Kronecker Delta), $\delta[n]$:**
    *   **Definition:** A sequence that is 1 at $n=0$ and 0 for all other integer values of $n$.
    $$
    \delta[n] =
    \begin{cases}
    1, & n = 0 \\
    0, & n \ne 0
    \end{cases}
    $$
    *   **Sifting Property:** $\sum_{n=-\infty}^{\infty} x[n] \delta[n - n_0] = x[n_0]$.
    *   **Relationship to Unit Step:** $\delta[n] = u[n] - u[n-1]$. Also, $u[n] = \sum_{k=-\infty}^{n} \delta[k]$.
    *   **Textbook Reference:** Haykin & Van Veen (2nd Ed., 2007) Chapter 1.1.2, Oppenheim, Willsky & Nawab (2nd Ed., 2015) Chapter 1.1.

*   **Exponential Sequence, $a^n$:** Defined earlier.
*   **Sinusoidal Sequences, $A \cos(\Omega_0 n + \phi)$, $A \sin(\Omega_0 n + \phi)$:** Defined earlier.

---

### 5. Representation of Signals

**CO1 Focus:** Understanding how to represent signals in the time domain is a core requirement.

#### 5.1. Time Domain Representation

*   **Graphical:** Plotting the signal's amplitude against its independent variable (time or index).
*   **Mathematical Formula:** Using equations to define the signal's value for each point in its domain (e.g., $x(t) = 5e^{-t}u(t)$, $x[n] = \sin(\frac{\pi}{4}n)$).
*   **Tabular (for discrete-time):** Listing the values of the sequence for various indices.
    E.g., $x[n] = \{ \dots, 0, 0, 1, 2, 3, 2, 1, 0, 0, \dots \}$ for $n = \dots, -2, -1, 0, 1, 2, 3, 4, 5, 6, \dots$

**Example (Representing a signal):**
A signal starts at $t=0$, is 1 for $0 \le t < 2$, and is 0 otherwise.
*   **Graphical:** A pulse from $t=0$ to $t=2$ with height 1.
*   **Mathematical:** $x(t) = u(t) - u(t-2)$.
    *   For $0 \le t < 2$: $u(t) = 1$, $u(t-2) = 0$, so $x(t) = 1 - 0 = 1$.
    *   For $t < 0$: $u(t) = 0$, $u(t-2) = 0$, so $x(t) = 0 - 0 = 0$.
    *   For $t \ge 2$: $u(t) = 1$, $u(t-2) = 1$, so $x(t) = 1 - 1 = 0$.

**Example (Representing a DT signal):**
A signal is 1 at $n=0, 1, 2$ and 0 otherwise.
*   **Graphical (Stem Plot):** Points at $(0,1), (1,1), (2,1)$.
*   **Mathematical:** $x[n] = u[n] - u[n-3]$.
    *   For $n=0,1,2$: $u[n]=1$, $u[n-3]=0$, so $x[n] = 1-0=1$.
    *   For $n<0$: $u[n]=0$, $u[n-3]=0$, so $x[n] = 0-0=0$.
    *   For $n \ge 3$: $u[n]=1$, $u[n-3]=1$, so $x[n] = 1-1=0$.
*   **Tabular:**
    | n | ... | -1 | 0 | 1 | 2 | 3 | 4 | ... |
    |---|-----|----|---|---|---|---|---|-----|
    | x[n] | ... | 0 | 1 | 1 | 1 | 0 | 0 | ... |

---

### 6. Important Points to Remember

*   **Continuous vs. Discrete:** The independent variable is continuous for CT signals and discrete (integer-valued) for DT signals.
*   **Delta Function Properties:** The sifting property $\int x(t) \delta(t-t_0) dt = x(t_0)$ is fundamental.
*   **Unit Step Relation:** $\delta(t) = du(t)/dt$ and $u(t) = \int \delta(\tau) d\tau$. For DT, $\delta[n] = u[n] - u[n-1]$ and $u[n] = \sum \delta[k]$.
*   **Sinusoidal Periodicity:** The condition $\Omega_0 / (2\pi)$ being rational for DT sinusoids to be periodic.
*   **Energy vs. Power:** Energy signals have finite energy, power signals have finite non-zero average power. Periodic signals are power signals.
*   **Causality:** Crucial for system analysis; causal signals are zero for $t<0$ (or $n<0$).
*   **Even/Odd Decomposition:** Any signal can be uniquely decomposed into its even and odd parts.

---

### 7. Practice Questions and Exercises

**(Answers provided below)**

#### Question 1 (Classification)

Classify the following CT signals:
a) $x(t) = 5$
b) $x(t) = t^2 \sin(t)$
c) $x(t) = e^{2t} u(t)$
d) $x(t) = \sin(2\pi t)$

#### Question 2 (Elementary Signals)

Express the following signals using elementary signals ($u(t)$, $\delta(t)$):
a) A signal that is 2 for $0 \le t < 3$ and 0 otherwise.
b) A signal that is $-1$ for $t < 0$ and $t^2$ for $t \ge 0$.

#### Question 3 (Even/Odd Decomposition)

Find the even and odd parts of the following CT signals:
a) $x(t) = t^3 + 2t^2 + 3t + 4$
b) $x(t) = e^{-t}u(t)$

#### Question 4 (DT Signals)

Given the DT sequence $x[n] = \{ \dots, 0, 0, 2, -1, 0, 3, 1, 0, 0, \dots \}$ for $n = \dots, -2, -1, 0, 1, 2, 3, 4, 5, 6, \dots$
a) Write the sequence mathematically using elementary DT signals.
b) Is this sequence causal?
c) Is this sequence periodic? If so, what is its fundamental period?
d) Is this sequence even or odd? If neither, find its even and odd parts.

#### Question 5 (Energy/Power)

Determine if the following CT signals are energy signals, power signals, or neither:
a) $x(t) = 3 e^{-t} u(t)$
b) $x(t) = 2$
c) $x(t) = e^{j \omega_0 t}$ (complex exponential)

---

### 8. Answers to Practice Questions

#### Answer 1

a) $x(t) = 5$:
    *   CT signal.
    *   Constant amplitude.
    *   Periodic with any $T > 0$ (fundamental period is undefined or can be considered any $T>0$). Power signal (average power is $5^2 = 25$).
    *   Even signal.
    *   Causal (if considered for $t \ge 0$) or non-causal (if considered for all $t$). Usually considered for all $t$ unless specified.
    *   Bounded.

b) $x(t) = t^2 \sin(t)$:
    *   CT signal.
    *   Amplitude varies.
    *   Aperiodic (because $t^2$ term makes it grow). Neither energy nor power signal (it grows exponentially).
    *   Odd signal: $(-t)^2 \sin(-t) = t^2 (-\sin(t)) = -t^2 \sin(t)$.
    *   Non-causal.
    *   Unbounded.

c) $x(t) = e^{2t} u(t)$:
    *   CT signal.
    *   Amplitude grows exponentially for $t \ge 0$.
    *   Aperiodic. Neither energy nor power signal (it grows unbounded).
    *   Neither even nor odd.
    *   Causal.
    *   Unbounded.

d) $x(t) = \sin(2\pi t)$:
    *   CT signal.
    *   Periodic with fundamental period $T_0 = 2\pi / (2\pi) = 1$. Power signal (average power is $1/2$).
    *   Odd signal.
    *   Non-causal.
    *   Bounded.

#### Answer 2

a) Let the signal be $y(t)$.
   $y(t) = 2$ for $0 \le t < 3$. This can be represented as $2 \cdot [u(t) - u(t-3)]$.
   *   For $0 \le t < 3$: $u(t)=1$, $u(t-3)=0 \implies y(t) = 2(1-0) = 2$.
   *   For $t < 0$: $u(t)=0$, $u(t-3)=0 \implies y(t) = 2(0-0) = 0$.
   *   For $t \ge 3$: $u(t)=1$, $u(t-3)=1 \implies y(t) = 2(1-1) = 0$.
   So, $y(t) = 2[u(t) - u(t-3)]$.

b) Let the signal be $y(t)$.
   $y(t) = -1$ for $t < 0$, and $t^2$ for $t \ge 0$.
   The part for $t < 0$ is $-1$. Since $u(t)=0$ for $t<0$, this is $-1 \cdot (1 - u(t))$.
   The part for $t \ge 0$ is $t^2$. Since $u(t)=1$ for $t \ge 0$, this is $t^2 \cdot u(t)$.
   So, $y(t) = -1 \cdot (1 - u(t)) + t^2 u(t) = -1 + u(t) + t^2 u(t) = -1 + (1+t^2) u(t)$.
   Alternatively, $y(t) = -u(t) + (1+t^2)u(t)$.

#### Answer 3

a) $x(t) = t^3 + 2t^2 + 3t + 4$
   *   $x(-t) = (-t)^3 + 2(-t)^2 + 3(-t) + 4 = -t^3 + 2t^2 - 3t + 4$
   *   Even part: $x_e(t) = \frac{1}{2}[x(t) + x(-t)] = \frac{1}{2}[(t^3 + 2t^2 + 3t + 4) + (-t^3 + 2t^2 - 3t + 4)]$
      $x_e(t) = \frac{1}{2}[4t^2 + 8] = 2t^2 + 4$.
   *   Odd part: $x_o(t) = \frac{1}{2}[x(t) - x(-t)] = \frac{1}{2}[(t^3 + 2t^2 + 3t + 4) - (-t^3 + 2t^2 - 3t + 4)]$
      $x_o(t) = \frac{1}{2}[2t^3 + 6t] = t^3 + 3t$.
   Check: $x_e(t) + x_o(t) = (2t^2 + 4) + (t^3 + 3t) = t^3 + 2t^2 + 3t + 4 = x(t)$.

b) $x(t) = e^{-t}u(t)$
   *   $x(-t) = e^{-(-t)}u(-t) = e^{t}u(-t)$
   *   Even part: $x_e(t) = \frac{1}{2}[e^{-t}u(t) + e^{t}u(-t)]$
   *   Odd part: $x_o(t) = \frac{1}{2}[e^{-t}u(t) - e^{t}u(-t)]$

#### Answer 4

Given $x[n] = \{ \dots, 0, 0, 2, -1, 0, 3, 1, 0, 0, \dots \}$ for indices $\dots, -2, -1, 0, 1, 2, 3, 4, 5, 6, \dots$
So, $x[-1]=0$, $x[0]=2$, $x[1]=-1$, $x[2]=0$, $x[3]=3$, $x[4]=1$, and $x[n]=0$ for $n \le -2$ and $n \ge 5$.

a) Mathematical Representation:
   The non-zero values occur from $n=0$ to $n=4$.
   $x[n] = 2\delta[n] - \delta[n-1] + 0\delta[n-2] + 3\delta[n-3] + \delta[n-4]$
   $x[n] = 2\delta[n] - \delta[n-1] + 3\delta[n-3] + \delta[n-4]$

b) Causality:
   The sequence is non-zero for $n=0, 1, 3, 4$. All these indices are $\ge 0$.
   However, the definition of causality for sequences is $x[n]=0$ for $n<0$.
   In this case, $x[n]=0$ for $n=-1$ and $n \le -2$. So, yes, it is causal.

c) Periodicity:
   The sequence has a finite number of non-zero terms (from $n=0$ to $n=4$). Such sequences are always aperiodic. Thus, it is not periodic.

d) Even/Odd:
   *   Check for Even: Is $x[-n] = x[n]$?
      $x[0] = 2$. $x[-0] = x[0] = 2$. (Holds for n=0)
      $x[1] = -1$. $x[-1] = 0$. Since $x[1] \ne x[-1]$, it's not even.
   *   Check for Odd: Is $x[-n] = -x[n]$?
      $x[0] = 2$. $x[-0] = x[0] = 2$. For it to be odd, $x[0]$ must be 0 if it's non-zero. Since $x[0]=2 \ne 0$, it's not odd.
   *   Even and Odd Parts:
      $x_e[n] = \frac{1}{2}[x[n] + x[-n]]$
      $x_o[n] = \frac{1}{2}[x[n] - x[-n]]$
      Let's compute values for $n \ge 0$:
      *   $n=0$: $x_e[0] = \frac{1}{2}[x[0] + x[0]] = \frac{1}{2}[2+2] = 2$. $x_o[0] = \frac{1}{2}[x[0] - x[0]] = 0$.
      *   $n=1$: $x[1]=-1$, $x[-1]=0$. $x_e[1] = \frac{1}{2}[-1+0] = -0.5$. $x_o[1] = \frac{1}{2}[-1-0] = -0.5$.
      *   $n=2$: $x[2]=0$, $x[-2]=0$. $x_e[2] = \frac{1}{2}[0+0] = 0$. $x_o[2] = \frac{1}{2}[0-0] = 0$.
      *   $n=3$: $x[3]=3$, $x[-3]=0$. $x_e[3] = \frac{1}{2}[3+0] = 1.5$. $x_o[3] = \frac{1}{2}[3-0] = 1.5$.
      *   $n=4$: $x[4]=1$, $x[-4]=0$. $x_e[4] = \frac{1}{2}[1+0] = 0.5$. $x_o[4] = \frac{1}{2}[1-0] = 0.5$.
      For $n \ge 5$, $x[n]=0$ and $x[-n]=0$ (since $n \ge 5 \implies -n \le -5$, and the sequence is 0 for indices $\le -2$). So $x_e[n]=0, x_o[n]=0$ for $n \ge 5$.

      The even and odd parts are:
      $x_e[n] = \{ \dots, 0, 0, 2, -0.5, 0, 1.5, 0.5, 0, 0, \dots \}$ (for indices $\dots, -2, -1, 0, 1, 2, 3, 4, 5, 6, \dots$)
      $x_o[n] = \{ \dots, 0, 0, 0, -0.5, 0, 1.5, 0.5, 0, 0, \dots \}$ (for indices $\dots, -2, -1, 0, 1, 2, 3, 4, 5, 6, \dots$)

#### Answer 5

a) $x(t) = 3 e^{-t} u(t)$
   This is a decaying exponential starting at $t=0$.
   Energy: $E = \int_{-\infty}^{\infty} |3e^{-t}u(t)|^2 dt = \int_{0}^{\infty} 9e^{-2t} dt = 9 [-\frac{1}{2}e^{-2t}]_0^\infty = 9(0 - (-\frac{1}{2})) = \frac{9}{2}$.
   Since the energy is finite, it is an **energy signal**. Its power is 0.

b) $x(t) = 2$
   This is a constant DC signal.
   Energy: $E = \int_{-\infty}^{\infty} |2|^2 dt = \int_{-\infty}^{\infty} 4 dt = \infty$. Not an energy signal.
   Average Power: $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |2|^2 dt = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} 4 dt = \lim_{T \to \infty} \frac{1}{2T} [4t]_{-T}^{T} = \lim_{T \to \infty} \frac{1}{2T} (4T - (-4T)) = \lim_{T \to \infty} \frac{8T}{2T} = 4$.
   Since the average power is finite and non-zero, it is a **power signal**.

c) $x(t) = e^{j \omega_0 t}$
   This is a complex exponential (a sinusoid).
   Energy: $E = \int_{-\infty}^{\infty} |e^{j \omega_0 t}|^2 dt = \int_{-\infty}^{\infty} | \cos(\omega_0 t) + j \sin(\omega_0 t) |^2 dt = \int_{-\infty}^{\infty} (\cos^2(\omega_0 t) + \sin^2(\omega_0 t)) dt = \int_{-\infty}^{\infty} 1 dt = \infty$. Not an energy signal.
   Average Power: $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |e^{j \omega_0 t}|^2 dt = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} 1 dt = \lim_{T \to \infty} \frac{1}{2T} [t]_{-T}^{T} = \lim_{T \to \infty} \frac{2T}{2T} = 1$.
   Since the average power is finite and non-zero, it is a **power signal**.

---

These notes cover the fundamental classifications and representations of continuous-time and discrete-time signals, aligning with **CO1**. The next steps in your learning will involve understanding systems and how they operate on these signals, building upon this foundational knowledge.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
