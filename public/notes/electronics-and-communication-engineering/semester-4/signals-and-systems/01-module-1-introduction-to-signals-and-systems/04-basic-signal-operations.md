---
title: "Basic signal operations."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe513"
status: "completed"
scrapedAt: "2026-05-23T17:52:19.125Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Basic Signal Operations

This module introduces the fundamental concepts of signals and systems, focusing on the various operations that can be performed on signals. Understanding these operations is crucial for analyzing and manipulating signals in diverse applications.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Understand and perform basic mathematical operations on signals.** This includes addition, subtraction, multiplication, and scaling.
*   **Understand and perform time-domain operations on signals.** This involves time shifting, time scaling, and time reversal.
*   **Understand and perform amplitude-domain operations on signals.** This includes amplitude scaling and amplitude modification.
*   **Combine multiple basic operations to analyze more complex signal transformations.**

---

### 1. Key Concepts and Definitions

#### 1.1 What is a Signal?

A **signal** is a function that conveys information about the behavior or attributes of some phenomenon. It is a physical quantity that varies with one or more independent variables, such as time, space, or position.

*   **Independent Variables:**
    *   **Time ($t$)**: For continuous-time signals (e.g., audio, sensor readings).
    *   **Sample index ($n$)**: For discrete-time signals (e.g., digital images, sampled audio).
*   **Dependent Variable**: The value of the signal at a given independent variable value.

**Examples:**

*   **Continuous-Time Signal:** Voltage across a resistor as a function of time, $v(t)$.
*   **Discrete-Time Signal:** Temperature readings taken every hour, $T[n]$.

#### 1.2 What is a System?

A **system** is a process that takes one or more input signals and produces one or more output signals. Systems transform or process signals.

**Example:**

*   An audio amplifier takes an input audio signal and produces an amplified output audio signal.

#### 1.3 Classification of Signals (Brief Overview from CO1)

While this topic focuses on operations, it's important to recall signal classifications relevant to operations:

*   **Continuous-Time vs. Discrete-Time:** Operations are analogous but notation differs.
*   **Analog vs. Digital:** Analog signals have continuous amplitude, digital signals have quantized amplitude. Operations discussed generally apply to both, with digital operations being discrete in both domain and amplitude.
*   **Periodic vs. Aperiodic:** Operations can alter periodicity.
*   **Even vs. Odd:** Time reversal is key to identifying these.

---

### 2. Basic Mathematical Operations on Signals

These operations modify the amplitude or values of the signal.

#### 2.1 Amplitude Scaling

Multiplying a signal by a constant scalar.

*   **Definition:** For a signal $x(t)$, its scaled version is $y(t) = a \cdot x(t)$, where 'a' is a scalar.
*   **Effect:** Each sample/value of the signal is multiplied by the scalar, effectively increasing or decreasing its amplitude.

**Example:**

Let $x(t) = \sin(t)$.
Then $y(t) = 2 \cdot x(t) = 2 \sin(t)$. The amplitude of the sine wave is doubled.

#### 2.2 Addition (Superposition)

Adding two signals together, typically point-wise.

*   **Definition:** For signals $x_1(t)$ and $x_2(t)$, their sum is $y(t) = x_1(t) + x_2(t)$.
*   **Effect:** At each point in time (or index), the values of the two signals are added. This is a fundamental operation in understanding linear systems (superposition principle).

**Example:**

Let $x_1(t) = \cos(t)$ and $x_2(t) = \sin(t)$.
Then $y(t) = x_1(t) + x_2(t) = \cos(t) + \sin(t)$.

#### 2.3 Subtraction

Subtracting one signal from another, point-wise.

*   **Definition:** For signals $x_1(t)$ and $x_2(t)$, their difference is $y(t) = x_1(t) - x_2(t)$.
*   **Effect:** At each point in time (or index), the value of the second signal is subtracted from the value of the first signal.

**Example:**

Let $x_1(t) = e^{-t}$ and $x_2(t) = e^{-2t}$.
Then $y(t) = x_1(t) - x_2(t) = e^{-t} - e^{-2t}$.

#### 2.4 Multiplication (Product)

Multiplying two signals together, point-wise.

*   **Definition:** For signals $x_1(t)$ and $x_2(t)$, their product is $y(t) = x_1(t) \cdot x_2(t)$.
*   **Effect:** At each point in time (or index), the values of the two signals are multiplied. This operation is essential for modulation and windowing.

**Example:**

Let $x_1(t) = \cos(\omega_c t)$ (a carrier wave) and $x_2(t) = A \cos(\omega_m t)$ (a message signal).
Then $y(t) = x_1(t) \cdot x_2(t) = A \cos(\omega_m t) \cos(\omega_c t)$. This represents Amplitude Modulation (AM).

---

### 3. Time-Domain Operations on Signals

These operations involve shifting, scaling, or reversing the independent variable (time or sample index). These are crucial for understanding system behavior, especially in the context of convolution.

#### 3.1 Time Shifting

Shifting a signal forward or backward in time.

*   **Definition:** For a signal $x(t)$, a time-shifted version is $y(t) = x(t - t_0)$.
    *   If $t_0 > 0$, the signal is shifted to the **right** (delayed).
    *   If $t_0 < 0$, the signal is shifted to the **left** (advanced).
*   **Discrete-Time:** $y[n] = x[n - n_0]$.
    *   If $n_0 > 0$, shifted to the right (delayed).
    *   If $n_0 < 0$, shifted to the left (advanced).

**Example:**

Let $x(t)$ be a rectangular pulse from $t=0$ to $t=1$.
*   $x(t-2)$: The pulse starts at $t=2$ and ends at $t=3$ (delayed).
*   $x(t+1)$: The pulse starts at $t=-1$ and ends at $t=0$ (advanced).

**Important Point:** When thinking about shifting, consider a specific point on the signal (e.g., the peak or start). If the argument is $(t-t_0)$, then for the output $y(t)$ to have the same value as $x(t_0)$ at time $t$, we set $t-t_0 = t_0$, which means $t=2t_0$. This is confusing. Instead, think: for $y(t)$ to equal $x(\tau)$, we need $t-t_0 = \tau$, so $t = \tau + t_0$. This shows that the signal is shifted by $t_0$.

#### 3.2 Time Scaling

Compressing or expanding a signal in time.

*   **Definition:** For a signal $x(t)$, a time-scaled version is $y(t) = x(at)$.
    *   If $|a| > 1$, the signal is **compressed** in time (faster).
    *   If $0 < |a| < 1$, the signal is **expanded** in time (slower).
    *   If $a < 0$, it also involves a time reversal.
*   **Discrete-Time:** $y[n] = x[an]$. This operation is only well-defined if 'a' is an integer or if we interpolate between samples. For simplicity in introductory courses, we often consider integer scaling factors or discuss its implications on sampling.

**Example:**

Let $x(t)$ be a pulse.
*   $x(2t)$: The signal is compressed by a factor of 2. If $x(t)$ lasted 1 second, $x(2t)$ will appear to happen in 0.5 seconds. For $x(t)$ from $t=0$ to $t=1$, $x(2t)$ will be non-zero for $2t$ from 0 to 1, meaning $t$ from 0 to 0.5.
*   $x(0.5t)$: The signal is expanded by a factor of 2. If $x(t)$ lasted 1 second, $x(0.5t)$ will appear to happen in 2 seconds. For $x(t)$ from $t=0$ to $t=1$, $x(0.5t)$ will be non-zero for $0.5t$ from 0 to 1, meaning $t$ from 0 to 2.

**Important Point:** The independent variable is divided by 'a'. If the argument is $at$, for $y(t)$ to equal $x(\tau)$, we need $at = \tau$, so $t = \tau/a$. If $a > 1$, $t$ is smaller, meaning the signal is compressed. If $0 < a < 1$, $t$ is larger, meaning the signal is expanded.

#### 3.3 Time Reversal (Flipping)

Reversing the signal about the vertical axis.

*   **Definition:** For a signal $x(t)$, its time-reversed version is $y(t) = x(-t)$.
*   **Discrete-Time:** $y[n] = x[-n]$.

**Example:**

Let $x(t)$ be a pulse from $t=-1$ to $t=1$.
Then $x(-t)$ is a pulse from $t=1$ to $t=-1$, effectively from $t=-1$ to $t=1$ but flipped. The part of $x(t)$ that was at $t=1$ is now at $t=-1$ for $x(-t)$, and vice-versa.

**Connection to Even/Odd Signals:**
*   A signal $x(t)$ is **even** if $x(t) = x(-t)$ for all $t$. (Symmetric about the y-axis).
*   A signal $x(t)$ is **odd** if $x(t) = -x(-t)$ for all $t$. (Symmetric about the origin).

Any signal can be decomposed into an even and an odd part:
*   Even part: $x_e(t) = \frac{1}{2} [x(t) + x(-t)]$
*   Odd part: $x_o(t) = \frac{1}{2} [x(t) - x(-t)]$

#### 3.4 Combination of Time Operations

These operations can be combined to produce more complex transformations. The order of operations matters.

*   **General Form:** $y(t) = x(at - b)$
    *   This can be interpreted as $x\left(a\left(t - \frac{b}{a}\right)\right)$.
    *   This sequence means:
        1.  **Time Scale** by $a$ (argument becomes $at$).
        2.  **Time Shift** by $\frac{b}{a}$ (argument becomes $a(t - \frac{b}{a})$).
    *   Alternatively, consider $y(t) = x(\tau)$ where $\tau = at - b$.
        *   If $a > 0$: $t = (\tau + b)/a$. This means a shift by $b/a$ and then scaling by $1/a$.
        *   If $a < 0$: Let $a = -c$ where $c > 0$. Then $\tau = -ct - b = -c(t + b/c)$. This involves time reversal (due to $-c$) and then a shift.

**Order of Operations Rule:**
When performing $x(at - b)$:
1.  **Time reversal** (if $a < 0$)
2.  **Time scaling** (by $|a|$)
3.  **Time shifting** (by $b/a$)

**Example:** Sketch $x(2t - 4)$ given $x(t)$.
Let $y(t) = x(2t - 4)$. We can write this as $y(t) = x(2(t - 2))$.
1.  **Time Scale:** Consider $x(2t)$. This compresses $x(t)$ by a factor of 2.
2.  **Time Shift:** Then shift $x(2t)$ by 2 units to the right to get $x(2(t-2))$.

Alternatively, using the rule for $x(at-b)$:
Here $a=2$, $b=4$.
1.  No time reversal as $a>0$.
2.  Time scale by $a=2$ (compress by 2). Let's call this intermediate signal $g(t) = x(2t)$.
3.  Time shift by $b/a = 4/2 = 2$. So, $y(t) = g(t-2) = x(2(t-2)) = x(2t-4)$.

Let's use the $\tau = at - b$ approach for $x(2t-4)$.
$\tau = 2t - 4$.
To get a value of $x(\tau)$ at time $t$, we have:
For $\tau = 0$, $0 = 2t - 4 \Rightarrow t = 2$.
For $\tau = 1$, $1 = 2t - 4 \Rightarrow t = 2.5$.
For $\tau = -1$, $-1 = 2t - 4 \Rightarrow t = 1.5$.
This shows that a point that was at $\tau$ is now at $t = (\tau+4)/2$. This is a shift by 2 and then a compression by 2.

**Reference:** Oppenheim & Willsky, Chapter 1, and Haykin, Chapter 1 cover these basic operations extensively. Lathi's "Principles of Signal Processing & Linear systems" also provides clear explanations and examples.

---

### 4. Amplitude Domain Operations on Signals

These operations modify the amplitude of the signal without changing the time axis.

#### 4.1 Amplitude Scaling (Already covered in 2.1)

*   $y(t) = a \cdot x(t)$

#### 4.2 Amplitude Modification (e.g., Clipping, Saturation)

These operations change the signal's amplitude based on certain thresholds.

*   **Clipping/Saturation:** Limiting the signal's amplitude to a maximum or minimum value.
    *   **Definition:** For a signal $x(t)$ and a threshold $M$, a clipped signal $y(t)$ might be:
        $y(t) = \begin{cases} M & \text{if } x(t) > M \\ x(t) & \text{if } -M \le x(t) \le M \\ -M & \text{if } x(t) < -M \end{cases}$
    *   **Effect:** Values exceeding the threshold are set to the threshold value.

**Example:**
Consider a sine wave $x(t) = \sin(t)$ and a clipping level $M = 0.5$.
The output $y(t)$ will be $0.5$ when $\sin(t) > 0.5$, $-0.5$ when $\sin(t) < -0.5$, and $\sin(t)$ otherwise. This results in a "squared-off" sine wave.

#### 4.3 Other Amplitude Operations

*   **Absolute Value:** $y(t) = |x(t)|$. This makes all negative parts of the signal positive.
*   **Squaring:** $y(t) = [x(t)]^2$. This is often used in power calculations.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $x(t)$ be a signal. Sketch the following signals:
a) $x(t-2)$
b) $x(t+1)$
c) $x(2t)$
d) $x(t/3)$
e) $x(-t)$
f) $x(-2t+4)$

**Solution 1:**
Let's assume $x(t)$ is a simple pulse defined as:
$x(t) = \begin{cases} 1 & \text{if } 0 \le t \le 1 \\ 0 & \text{otherwise} \end{cases}$

a) $x(t-2)$: Shifted 2 units to the right. Pulse is from $t=2$ to $t=3$.
b) $x(t+1)$: Shifted 1 unit to the left. Pulse is from $t=-1$ to $t=0$.
c) $x(2t)$: Compressed by 2. For $0 \le 2t \le 1$, i.e., $0 \le t \le 0.5$. Pulse is from $t=0$ to $t=0.5$.
d) $x(t/3)$: Expanded by 3. For $0 \le t/3 \le 1$, i.e., $0 \le t \le 3$. Pulse is from $t=0$ to $t=3$.
e) $x(-t)$: Time reversed. For $0 \le -t \le 1$, i.e., $-1 \le t \le 0$. Pulse is from $t=-1$ to $t=0$.
f) $x(-2t+4)$: This is $x(-2(t-2))$.
    *   First, $x(t) \rightarrow x(2t)$: compressed by 2. Pulse from $0$ to $0.5$.
    *   Then, $x(2t) \rightarrow x(2(t-2))$: shifted right by 2. Pulse from $2$ to $2.5$.
    *   Alternatively, using $x(at-b)$ rule with $a=-2, b=-4$. Wait, it is $x(-2t+4)$. So $a=-2, b=4$.
        1.  $a=-2$, so time reverse. $x(t) \rightarrow x(-t)$. Pulse from $-1$ to $0$.
        2.  Scale by $|a|=2$. $x(-t) \rightarrow x(-2t)$. Pulse from $-0.5$ to $0$.
        3.  Shift by $b/a = 4/(-2) = -2$. $x(-2t) \rightarrow x(-2(t - (-2)))$. This is incorrect.
        Correct interpretation: $\tau = -2t + 4$.
        To get $x(\tau)$ at time $t$:
        If $\tau=0$, $0 = -2t + 4 \Rightarrow t=2$.
        If $\tau=1$, $1 = -2t + 4 \Rightarrow t=1.5$.
        If $\tau=0.5$, $0.5 = -2t + 4 \Rightarrow t=1.75$.
        The pulse is non-zero for $\tau \in [0, 1]$, so $-2t+4 \in [0, 1]$.
        $-2t+4 \ge 0 \Rightarrow 4 \ge 2t \Rightarrow t \le 2$.
        $-2t+4 \le 1 \Rightarrow 3 \le 2t \Rightarrow t \ge 1.5$.
        So, the pulse is from $t=1.5$ to $t=2$.

**Question 2:**
Let $x[n]$ be a discrete-time signal. Sketch $y[n] = 2x[n-1] + x[n+2]$.
Assume $x[n]$ is a unit impulse at $n=0$, i.e., $x[n] = \delta[n]$.

**Solution 2:**
$x[n] = \delta[n]$ is 1 at $n=0$ and 0 otherwise.

*   $x[n-1] = \delta[n-1]$: This is 1 at $n=1$ and 0 otherwise.
*   $2x[n-1] = 2\delta[n-1]$: This is 2 at $n=1$ and 0 otherwise.
*   $x[n+2] = \delta[n+2]$: This is 1 at $n=-2$ and 0 otherwise.

$y[n] = 2x[n-1] + x[n+2]$
$y[n]$ will have a value of 2 at $n=1$ and a value of 1 at $n=-2$. All other values are 0.

Sketch:
```
n | ... -3 -2 -1  0  1  2  3 ...
--|--------------------------------
x[n]| ...  0  0  0  1  0  0  0 ...
2x[n-1]|.. 0  0  0  0  2  0  0 ...
x[n+2]|.. 1  0  0  0  0  0  0 ...
y[n]|.. 1  0  0  0  2  0  0 ...
```

**Question 3:**
Let $x(t) = \cos(2\pi t)$. Sketch $y(t) = x(2t-1)$.

**Solution 3:**
$y(t) = x(2t-1) = \cos(2\pi (2t-1)) = \cos(4\pi t - 2\pi)$.
Since $\cos(\theta - 2\pi) = \cos(\theta)$,
$y(t) = \cos(4\pi t)$.

Alternatively, using transformation:
$x(t) = \cos(2\pi t)$.
$y(t) = x(2t-1) = x(2(t-1))$.
1.  $x(t) \rightarrow x(2t) = \cos(2\pi (2t)) = \cos(4\pi t)$. This compresses the signal by a factor of 2. The period changes from 1 to 0.5.
2.  $x(2t) \rightarrow x(2(t-1)) = \cos(4\pi (t-1)) = \cos(4\pi t - 4\pi) = \cos(4\pi t)$. This shifts the signal by 1 unit to the right.

The sketch of $\cos(4\pi t)$ is a cosine wave with a period of $0.5$ (frequency 2 Hz).

---

### 6. Important Points to Remember

*   **Time Shifting:** $x(t-t_0)$. If $t_0 > 0$, shift right (delay). If $t_0 < 0$, shift left (advance). Argument $t$ becomes $t-t_0$.
*   **Time Scaling:** $x(at)$. If $|a| > 1$, compress. If $0 < |a| < 1$, expand. Argument $t$ becomes $t/a$.
*   **Time Reversal:** $x(-t)$. Argument $t$ becomes $-t$.
*   **Order of Operations for $x(at-b)$:** Time reversal (if $a<0$), then time scaling by $|a|$, then time shifting by $b/a$.
*   **Amplitude Scaling:** $a \cdot x(t)$. Multiplies the amplitude by $a$.
*   **Discrete-Time Operations:** Analogous to continuous-time, but use sample index 'n' instead of 't'. Scaling in discrete time can be tricky if the factor is not an integer.
*   **Basic operations are the building blocks for understanding system responses.** For instance, the output of an LTI system to an impulse can be used to define the system's behavior through convolution, which heavily relies on time shifting and scaling.

---

### 7. Alignment with Course Outcomes (CO)

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.**
    *   This topic directly addresses the "perform basic operations on signals" part of CO1 by detailing amplitude scaling, addition, multiplication, time shifting, time scaling, and time reversal. Understanding these operations is fundamental to classifying and analyzing signals.
*   **CO2: Determine the stability and causality of LTI systems using convolution operations.**
    *   While this topic doesn't delve into stability/causality directly, the time-domain operations (especially time shifting and scaling) are the *foundation* for convolution. Without mastering these basic operations, one cannot understand how systems respond to inputs and thus cannot determine stability or causality.
*   **CO3: Analyze signals in frequency domain using various transforms and examine their properties.**
    *   Basic signal operations in the time domain have corresponding effects in the frequency domain (e.g., time shifting leads to a phase shift, amplitude scaling leads to amplitude scaling in frequency). Understanding the time-domain operations is a prerequisite for understanding their frequency-domain implications.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   Similar to CO3, the foundational understanding of how signals are manipulated in the time domain is crucial for interpreting how transforms simplify the analysis of LTI systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbook References (Content Integration)

*   **Oppenheim & Willsky (Pearson, 2/e):** Chapter 1 provides a thorough introduction to signals and systems, including detailed sections on signal operations like time shifting, scaling, and reversal. They emphasize graphical interpretation and the rules for combined operations.
*   **Haykin (John Wiley, 2/e):** Chapter 1 also covers basic signal operations. Haykin often uses examples from communications and control systems to illustrate these concepts, making them more practical.
*   **Anand Kumar (PHI, 3/e):** Chapter 1 and 2 are likely to cover signal classifications and basic operations with clear examples, often geared towards engineering applications.
*   **Lathi (Oxford University Press, 2/e):** Chapters 1 and 2 will detail signal properties and operations, often using a step-by-step approach for graphical transformations.
*   **Ziemer (Pearson, 4/e):** Covers fundamental signal operations as building blocks for system analysis, with a strong focus on both continuous and discrete-time domains.
*   **Ambardar (Brooks/Cole Publishing Company, 2/e):** Analog and Digital Signal Processing will have dedicated chapters on signal operations, highlighting differences and similarities between analog/digital signal manipulations.
*   **Apte (Cambridge University Press, 1/e):** Principles and Applications will likely present these operations with a focus on their practical use in various signal processing applications.

These notes integrate the core concepts presented in these standard textbooks, ensuring a comprehensive and accurate understanding of basic signal operations.