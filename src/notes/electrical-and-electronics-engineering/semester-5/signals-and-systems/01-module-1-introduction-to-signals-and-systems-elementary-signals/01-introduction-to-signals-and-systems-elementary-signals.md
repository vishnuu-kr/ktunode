---
title: "Introduction to Signals and Systems: Elementary Signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361ca"
status: "completed"
scrapedAt: "2026-05-23T16:23:38.654Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems: Elementary Signals

This module introduces the fundamental building blocks of signals and systems theory: signals themselves and the basic mathematical operations performed on them. We will explore various types of elementary signals that are crucial for understanding more complex signal behavior and system responses.

## 1.1 What are Signals?

A **signal** is a function that conveys information about a physical phenomenon. It is typically a function of one or more independent variables, most commonly time, but can also be space, position, or other quantities. Signals are the inputs and outputs of systems.

**Key Characteristics of Signals:**

*   **Independent Variable:** The variable that the signal depends on (e.g., time 't' for continuous-time signals, 'n' for discrete-time signals).
*   **Dependent Variable (Amplitude):** The value of the signal at a given point of the independent variable.
*   **Information Content:** The meaning or data the signal represents.

**Examples:**

*   **Audio signal:** Variation of air pressure over time.
*   **Image signal:** Variation of light intensity across spatial coordinates.
*   **Temperature reading:** Temperature as a function of time.
*   **Economic data:** Stock prices as a function of time.

---

## 1.2 What are Systems?

A **system** is a process or device that operates on an input signal to produce an output signal. It can be viewed as a transformation or mapping from an input signal to an output signal.

**Key Characteristics of Systems:**

*   **Input Signal:** The signal fed into the system.
*   **Output Signal:** The signal produced by the system in response to the input.
*   **System Operation/Transformation:** The rules or algorithms that define how the system processes the input to generate the output.

**Examples:**

*   **Audio amplifier:** Increases the amplitude of an audio signal.
*   **Filter:** Selects certain frequencies from a signal while attenuating others.
*   **Controller:** Adjusts a process based on feedback from its output.
*   **Human ear:** Converts sound waves (pressure variations) into electrical signals.

---

## 1.3 Classification of Signals

Signals can be classified based on various criteria. Understanding these classifications is crucial for choosing the appropriate analytical tools.

### 1.3.1 Continuous-Time vs. Discrete-Time Signals

**Continuous-Time (CT) Signals:**

*   Defined for all values of the independent variable.
*   The independent variable is typically denoted by 't' and can take any real value.
*   Represented as $x(t)$.

**Example:** A sine wave $x(t) = \sin(t)$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

**Discrete-Time (DT) Signals:**

*   Defined only at discrete, specific values of the independent variable.
*   The independent variable is typically denoted by 'n' and takes integer values.
*   Represented as $x[n]$.

**Example:** A sequence of samples from an analog signal, e.g., $x[n] = \sin(n)$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

**Relationship between CT and DT Signals:**

Discrete-time signals are often obtained by sampling continuous-time signals at regular intervals. If a CT signal $x(t)$ is sampled at intervals of $T$ (sampling period), the resulting DT signal is $x[n] = x(nT)$. The sampling frequency is $F_s = 1/T$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

### 1.3.2 Periodic vs. Aperiodic Signals

**Periodic Signals:**

*   A signal $x(t)$ is periodic if there exists a positive constant $T$ such that $x(t+T) = x(t)$ for all $t$.
*   $T$ is called the **period**.
*   The **fundamental period** ($T_0$) is the smallest positive value of $T$ for which the condition holds.
*   The **fundamental frequency** is $f_0 = 1/T_0$, and the angular frequency is $\omega_0 = 2\pi f_0 = 2\pi/T_0$.

**Example:** $x(t) = \cos(2\pi t)$. The fundamental period is $T_0 = 1$.

**Aperiodic (or Nonperiodic) Signals:**

*   Signals that are not periodic.

**Example:** $x(t) = e^{-at}u(t)$ for $a > 0$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

### 1.3.3 Even vs. Odd Signals

**Even Signals:**

*   A signal $x(t)$ is even if $x(-t) = x(t)$ for all $t$.
*   Even signals are symmetric about the vertical axis (amplitude axis).

**Example:** $x(t) = \cos(\omega t)$.

**Odd Signals:**

*   A signal $x(t)$ is odd if $x(-t) = -x(t)$ for all $t$.
*   Odd signals have symmetry about the origin.

**Example:** $x(t) = \sin(\omega t)$.

**Decomposition into Even and Odd Parts:**

Any signal $x(t)$ can be uniquely represented as the sum of an even part $x_e(t)$ and an odd part $x_o(t)$:

$x(t) = x_e(t) + x_o(t)$

where:
$x_e(t) = \frac{1}{2}[x(t) + x(-t)]$
$x_o(t) = \frac{1}{2}[x(t) - x(-t)]$

*(Refer to Haykin & Van Veen, Chapter 1.2)*

**Important Note:** For discrete-time signals, the same definitions apply with 't' replaced by 'n'.

$x[n] = x_e[n] + x_o[n]$
$x_e[n] = \frac{1}{2}[x[n] + x[-n]]$
$x_o[n] = \frac{1}{2}[x[n] - x[-n]]$

### 1.3.4 Energy vs. Power Signals

**Energy Signals:**

*   Signals for which the total energy is finite.
*   The energy of a continuous-time signal $x(t)$ is given by:
    $E = \int_{-\infty}^{\infty} |x(t)|^2 dt$
*   The energy of a discrete-time signal $x[n]$ is given by:
    $E = \sum_{n=-\infty}^{\infty} |x[n]|^2$
*   For an energy signal, $x(t) \to 0$ as $|t| \to \infty$ or $x[n] \to 0$ as $|n| \to \infty$.

**Example:** $x(t) = e^{-at}u(t)$ for $a > 0$.

**Power Signals:**

*   Signals for which the average power is finite and non-zero.
*   The average power of a continuous-time signal $x(t)$ is given by:
    $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt$
*   The average power of a discrete-time signal $x[n]$ is given by:
    $P = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2$
*   Periodic signals are power signals.

**Example:** $x(t) = A \cos(\omega t)$.

**Relationship:** A signal cannot be both an energy signal and a power signal (unless it's the zero signal). If a signal is neither energy nor power, it is typically a transient signal.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

---

## 1.4 Elementary Signals

Elementary signals are basic waveforms that are used as building blocks for more complex signals and for analyzing system responses.

### 1.4.1 Exponential Signals

**Continuous-Time:**
*   **Real Exponential:** $x(t) = A e^{at}$
    *   If $a > 0$, it grows exponentially.
    *   If $a < 0$, it decays exponentially.
*   **Complex Exponential:** $x(t) = A e^{(a+j\omega)t} = A e^{at} e^{j\omega t} = A e^{at}(\cos(\omega t) + j\sin(\omega t))$
    *   This form is fundamental and relates to sinusoidal signals.
    *   Euler's Formula: $e^{j\theta} = \cos(\theta) + j\sin(\theta)$

**Discrete-Time:**
*   **Real Exponential:** $x[n] = A r^n$
    *   If $|r| < 1$, it decays.
    *   If $|r| > 1$, it grows.
    *   If $|r| = 1$, it's a constant or a sinusoid (if $r$ is complex).
*   **Complex Exponential:** $x[n] = A \alpha^n$, where $\alpha$ is a complex number.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

### 1.4.2 Sinusoidal Signals

**Continuous-Time:**
*   **Cosine:** $x(t) = A \cos(\omega_0 t + \phi)$
    *   $A$: Amplitude
    *   $\omega_0$: Angular frequency (radians/second)
    *   $\phi$: Phase (radians)
*   **Sine:** $x(t) = A \sin(\omega_0 t + \phi)$
*   **Relationship to Complex Exponential:** Using Euler's formula,
    $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$
    $\sin(\theta) = \frac{e^{j\theta} - e^{-j\theta}}{2j}$
    Therefore, $A \cos(\omega_0 t + \phi) = A \frac{e^{j(\omega_0 t + \phi)} + e^{-j(\omega_0 t + \phi)}}{2}$

**Discrete-Time:**
*   $x[n] = A \cos(\omega_0 n + \phi)$
    *   $A$: Amplitude
    *   $\omega_0$: Angular frequency (radians/sample)
    *   $\phi$: Phase (radians)

**Important Property of DT Sinusoids:** A DT sinusoid is periodic only if the normalized angular frequency $\omega_0/(2\pi)$ is a rational number.
If $\omega_0 = 2\pi k/M$ for integers $k$ and $M$, then the period is $M$.
For example, $x[n] = \cos(\frac{\pi}{2} n)$ has $\omega_0 = \pi/2$. $\omega_0/(2\pi) = (\pi/2)/(2\pi) = 1/4$. Thus, it's periodic with period $M=4$.
$x[0]=1, x[1]=0, x[2]=-1, x[3]=0, x[4]=1$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

### 1.4.3 Unit Step Function

**Continuous-Time (Heaviside Step Function):**
*   Defined as:
    $u(t) = \begin{cases} 1 & \text{if } t \ge 0 \\ 0 & \text{if } t < 0 \end{cases}$
*   Sometimes defined with $u(0)=0.5$ or $u(0)=1$. For signal analysis, the value at $t=0$ is often less critical than the behavior for $t \neq 0$.
*   Represents turning something ON at $t=0$.

**Graphical Representation:** A jump from 0 to 1 at $t=0$.

**Relationship to other signals:**
*   $u(t) = \frac{1}{2} + \frac{1}{\pi} \int_{0}^{t} \delta(\tau) d\tau$ (relates to impulse)
*   $\frac{du(t)}{dt} = \delta(t)$ (derivative of step is impulse)
*   $\int_{-\infty}^{t} \delta(\tau) d\tau = u(t)$ (integral of impulse is step)

*(Refer to Haykin & Van Veen, Chapter 1.2)*

**Discrete-Time:**
*   Defined as:
    $u[n] = \begin{cases} 1 & \text{if } n \ge 0 \\ 0 & \text{if } n < 0 \end{cases}$

**Example:** $x[n] = 5 u[n]$ is a sequence of five 1s for $n \geq 0$, and zeros for $n < 0$.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

### 1.4.4 Unit Ramp Function

**Continuous-Time:**
*   Defined as:
    $r(t) = \begin{cases} t & \text{if } t \ge 0 \\ 0 & \text{if } t < 0 \end{cases}$
*   Can be expressed using the unit step function: $r(t) = t \cdot u(t)$
*   Represents a linearly increasing signal starting from zero at $t=0$.

**Graphical Representation:** A line with slope 1 starting from the origin for $t \ge 0$.

**Relationship to other signals:**
*   $\frac{dr(t)}{dt} = u(t)$ (derivative of ramp is step)
*   $\int_{-\infty}^{t} u(\tau) d\tau = r(t)$ (integral of step is ramp)

*(Refer to Haykin & Van Veen, Chapter 1.2)*

### 1.4.5 Unit Impulse Function (Dirac Delta Function)

**Continuous-Time:**
*   The Dirac delta function $\delta(t)$ is not a function in the classical sense but a **generalized function** or **distribution**.
*   It is characterized by its "sampling property":
    $\int_{-\infty}^{\infty} x(t) \delta(t - t_0) dt = x(t_0)$
    If $t_0 = 0$, $\int_{-\infty}^{\infty} x(t) \delta(t) dt = x(0)$
*   Informally, it can be thought of as a pulse of infinite amplitude and zero duration, with unit area.
*   $\delta(t) = \begin{cases} \infty & \text{if } t = 0 \\ 0 & \text{if } t \neq 0 \end{cases}$ and $\int_{-\infty}^{\infty} \delta(t) dt = 1$.

**Graphical Representation:** A spike at $t=0$ with an arrow indicating unit area.

**Properties:**
*   $\delta(t) = \frac{du(t)}{dt}$
*   $\delta(t)$ is an even function.
*   $a\delta(t) = \delta(at/|a|)$ for $a \neq 0$
*   $\delta(at) = \frac{1}{|a|} \delta(t)$
*   $x(t)\delta(t) = x(0)\delta(t)$

*(Refer to Haykin & Van Veen, Chapter 1.2)*

**Discrete-Time (Kronecker Delta Function):**
*   Defined as:
    $\delta[n] = \begin{cases} 1 & \text{if } n = 0 \\ 0 & \text{if } n \neq 0 \end{cases}$
*   This is a standard function, not a distribution.
*   Its sampling property is:
    $\sum_{n=-\infty}^{\infty} x[n] \delta[n - n_0] = x[n_0]$
    If $n_0 = 0$, $\sum_{n=-\infty}^{\infty} x[n] \delta[n] = x[0]$

**Example:** $x[n] = 5 \delta[n]$ is a sequence with value 5 at $n=0$ and 0 everywhere else.

*(Refer to Haykin & Van Veen, Chapter 1.1)*

---

## 1.5 Mathematical Operations on Signals

Signals can be manipulated mathematically to create new signals or to transform them.

### 1.5.1 Addition and Subtraction

*   Simply add or subtract the amplitudes of the signals at each point of the independent variable.
*   Requires signals to be of the same type (both CT or both DT) and to have the same independent variable.

**Example:** $y(t) = x_1(t) + x_2(t)$

### 1.5.2 Multiplication

*   Multiply the amplitudes of the signals at each point.

**Example:** $y(t) = x_1(t) \cdot x_2(t)$

### 1.5.3 Scaling

*   **Amplitude Scaling:** Multiply the signal by a constant.
    $y(t) = A \cdot x(t)$
*   **Time Scaling:** Replace 't' with 't/a' (stretching) or 't*a' (compression).
    *   $y(t) = x(at)$: If $|a| > 1$, the signal is compressed in time. If $0 < |a| < 1$, it is stretched.
    *   $y(t) = x(t/a)$: If $|a| > 1$, the signal is stretched in time. If $0 < |a| < 1$, it is compressed.

**Example:** If $x(t)$ is a pulse from $t=0$ to $t=1$, then $x(2t)$ is a pulse from $t=0$ to $t=0.5$ (compressed). $x(t/2)$ is a pulse from $t=0$ to $t=2$ (stretched).

*(Refer to Haykin & Van Veen, Chapter 1.3)*

### 1.5.4 Time Shifting

*   Replace 't' with 't - $t_0$'.
    *   If $t_0 > 0$, the signal is shifted to the right (delayed).
    *   If $t_0 < 0$, the signal is shifted to the left (advanced).

**Example:** If $x(t)$ is a pulse from $t=0$ to $t=1$, then $x(t-2)$ is the same pulse shifted to start at $t=2$. $x(t+1)$ is the same pulse shifted to start at $t=-1$.

*(Refer to Haykin & Van Veen, Chapter 1.3)*

### 1.5.5 Time Reversal (Flipping)

*   Replace 't' with '-t'. This flips the signal about the vertical axis.

**Example:** If $x(t)$ is a pulse from $t=0$ to $t=1$, then $x(-t)$ is the same pulse from $t=-1$ to $t=0$.

*(Refer to Haykin & Van Veen, Chapter 1.3)*

### 1.5.6 Folding

*   A combination of time reversal and time shifting: $x(-(t-t_0)) = x(t_0-t)$.

**Example:** $x(2-t)$ is the signal $x(t)$ flipped around the t-axis and then shifted right by 2 units.

### 1.5.7 Differentiation and Integration

*   **Continuous-Time:**
    *   Derivative: $\frac{dx(t)}{dt}$
    *   Integral: $\int x(t) dt$
*   **Discrete-Time:**
    *   Difference: $x[n] - x[n-1]$ (First difference)
    *   Summation: $\sum_{k=-\infty}^{n} x[k]$

*(Refer to Haykin & Van Veen, Chapter 1.3)*

---

## 1.6 Elementary Systems

Systems can also be classified based on their properties. While this module focuses on elementary *signals*, it's important to briefly mention that systems are analyzed based on how they modify signals. Key system properties include linearity, time-invariance, causality, and stability. We will delve deeper into these in later modules.

---

## 1.7 Course Outcomes Addressed

*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**
    *   This module covers the representation of CT and DT signals and details the fundamental mathematical operations (scaling, shifting, reversal, addition, multiplication). The elementary signals themselves are the building blocks for this representation.

---

## 1.8 Key Points to Remember

*   **Signals** convey information; **Systems** process signals.
*   **CT signals** are continuous in time ($x(t)$); **DT signals** are discrete in time ($x[n]$).
*   **Periodic signals** repeat; **Aperiodic signals** do not.
*   **Even signals** are symmetric about the y-axis ($x(-t) = x(t)$); **Odd signals** are symmetric about the origin ($x(-t) = -x(t)$).
*   **Energy signals** have finite total energy; **Power signals** have finite average power.
*   **Elementary signals** (exponential, sinusoidal, step, ramp, impulse) are foundational.
*   The **Dirac Delta function** ($\delta(t)$) is a distribution with a crucial sampling property.
*   The **Kronecker Delta function** ($\delta[n]$) is the DT equivalent.
*   **Time operations** (scaling, shifting, reversal) are critical for manipulating signals.

---

## 1.9 Practice Questions and Exercises

**Question 1:** Classify the following signals as continuous-time (CT) or discrete-time (DT):
a) $x(t) = 5 \sin(10t + \pi/4)$
b) $x[n] = 3 \cos(\frac{\pi}{3} n)$
c) $x(t) = e^{-2t} u(t-1)$
d) $x[n] = n^2$ for $n = 0, 1, 2, \ldots, 10$, and 0 otherwise.

**Answer 1:**
a) CT
b) DT
c) CT
d) DT (It's a finite-duration DT signal)

---

**Question 2:** Determine if the following signals are periodic or aperiodic. If periodic, find the fundamental period.
a) $x(t) = \sin(2t) + \cos(4t)$
b) $x[n] = \cos(\frac{\pi}{2} n)$
c) $x(t) = e^{-t}$
d) $x[n] = (-1)^n$

**Answer 2:**
a) Periodic. $T_1 = 2\pi/2 = \pi$ for $\sin(2t)$. $T_2 = 2\pi/4 = \pi/2$ for $\cos(4t)$. The fundamental period $T$ is the least common multiple of $T_1$ and $T_2$. $T = \text{lcm}(\pi, \pi/2) = \pi$.
b) Periodic. $\omega_0 = \pi/2$. $\omega_0/(2\pi) = (\pi/2)/(2\pi) = 1/4$. The signal is periodic with fundamental period $M=4$.
c) Aperiodic. The exponential decay means it never repeats.
d) Periodic. This is equivalent to $\cos(\pi n)$. $\omega_0 = \pi$. $\omega_0/(2\pi) = \pi/(2\pi) = 1/2$. The signal is periodic with fundamental period $M=2$.

---

**Question 3:** For the signal $x(t) = 2 + \sin(t) + \cos(2t)$, find its even and odd parts.

**Answer 3:**
Let $x(t) = x_e(t) + x_o(t)$.
$x_e(t) = \frac{1}{2}[x(t) + x(-t)]$
$x_o(t) = \frac{1}{2}[x(t) - x(-t)]$

$x(-t) = 2 + \sin(-t) + \cos(-2t) = 2 - \sin(t) + \cos(2t)$

$x_e(t) = \frac{1}{2}[(2 + \sin(t) + \cos(2t)) + (2 - \sin(t) + \cos(2t))]$
$x_e(t) = \frac{1}{2}[4 + 2\cos(2t)] = 2 + \cos(2t)$

$x_o(t) = \frac{1}{2}[(2 + \sin(t) + \cos(2t)) - (2 - \sin(t) + \cos(2t))]$
$x_o(t) = \frac{1}{2}[2\sin(t)] = \sin(t)$

Check: $x_e(t) + x_o(t) = (2 + \cos(2t)) + \sin(t) = x(t)$.

---

**Question 4:** Sketch the following signals:
a) $x(t) = u(t) - u(t-2)$
b) $x[n] = r[n] - r[n-1]$ (where $r[n]$ is the discrete-time ramp function, $r[n]=n u[n]$)
c) $x(t) = 3\delta(t-1)$

**Answer 4:**
a) This is a rectangular pulse. It starts at $t=0$ (where $u(t)$ becomes 1) and ends at $t=2$ (where $u(t-2)$ becomes 1, subtracting the signal). It has an amplitude of 1 and duration of 2.
b) $r[n] = n u[n] = \{0, 0, 1, 2, 3, \ldots\}$ for $n = \ldots, -2, -1, 0, 1, 2, \ldots$
   $r[n-1] = (n-1) u[n-1] = \{0, 0, 0, 1, 2, \ldots\}$ for $n = \ldots, -2, -1, 0, 1, 2, \ldots$
   $x[n] = r[n] - r[n-1]$:
   For $n < 0$: $0 - 0 = 0$
   For $n=0$: $r[0] - r[-1] = 0 - 0 = 0$
   For $n=1$: $r[1] - r[0] = 1 - 0 = 1$
   For $n=2$: $r[2] - r[1] = 2 - 1 = 1$
   For $n=3$: $r[3] - r[2] = 3 - 2 = 1$
   So, $x[n] = u[n-1]$ for $n \ge 1$, and 0 otherwise. It's a unit step shifted to start at $n=1$.
c) This is a scaled and shifted Dirac delta function. It is an impulse of amplitude 3 located at $t=1$.

---

**Question 5:** Let $x(t) = e^{-t}u(t)$. Sketch $y(t) = x(t-2) + x(2-t)$.

**Answer 5:**
$x(t) = e^{-t}$ for $t \ge 0$, and 0 for $t < 0$.

$x(t-2)$: Shift $x(t)$ right by 2. This is $e^{-(t-2)}$ for $t-2 \ge 0$ (i.e., $t \ge 2$), and 0 for $t < 2$.
$x(t-2) = \begin{cases} e^{2-t} & \text{if } t \ge 2 \\ 0 & \text{if } t < 2 \end{cases}$

$x(2-t)$: This is $x(t)$ time-reversed and shifted right by 2. $x(2-t) = x(-(t-2))$. Replace $t$ with $2-t$ in $x(t)$.
$x(2-t) = e^{-(2-t)} u(2-t) = e^{t-2} u(2-t)$.
$u(2-t) = 1$ if $2-t \ge 0$ (i.e., $t \le 2$), and 0 otherwise.
$x(2-t) = \begin{cases} e^{t-2} & \text{if } t \le 2 \\ 0 & \text{if } t > 2 \end{cases}$

Now, sum them: $y(t) = x(t-2) + x(2-t)$

Case 1: $t < 2$.
$y(t) = 0 + e^{t-2} = e^{t-2}$.

Case 2: $t = 2$.
$y(2) = x(0) + x(0) = e^0 + e^0 = 1 + 1 = 2$. (Or using the piecewise definitions: $e^{2-2} + e^{2-2} = 1+1=2$)

Case 3: $t > 2$.
$y(t) = e^{2-t} + 0 = e^{2-t}$.

So, $y(t) = \begin{cases} e^{t-2} & \text{if } t < 2 \\ 2 & \text{if } t = 2 \\ e^{2-t} & \text{if } t > 2 \end{cases}$
This results in a symmetric shape peaking at $t=2$.

---
This concludes Module 1. We have established the fundamental concepts of signals and their elementary forms, along with basic operations. These concepts will be the bedrock for understanding system analysis in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
