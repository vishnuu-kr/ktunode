---
title: "Properties of systems:  Time invariance, Linearity, Causality, Systems with and without memory, Stability."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361ce"
status: "completed"
scrapedAt: "2026-05-23T16:23:41.402Z"
---
# Module 1: Introduction to Signals and Systems: Properties of Systems

## 1. Introduction to Systems

A **system** can be thought of as any process or device that transforms an input signal (or signals) into an output signal (or signals). Systems are fundamental to understanding signals and how they are manipulated.

**Key Concept:** Systems can be described by mathematical equations that relate the output to the input.

**Examples:**

*   **Audio amplifier:** Takes an audio signal as input and produces a louder audio signal as output.
*   **Filter:** Takes a signal and removes or attenuates certain frequency components.
*   **Controller:** Takes sensor readings as input and generates control signals as output to influence a process.

## 2. Properties of Systems

Understanding the properties of a system is crucial for analyzing its behavior and predicting its response to different inputs. We will explore the following key properties:

*   Time Invariance
*   Linearity
*   Causality
*   Systems with and without Memory
*   Stability

---

### 2.1 Time Invariance

A system is **time-invariant** if its behavior does not change over time. In other words, if an input signal $x(t)$ produces an output signal $y(t)$, then a time-shifted version of the input signal, $x(t-\tau)$, will produce the same output signal, but time-shifted by the same amount, $y(t-\tau)$.

**Definition:** A system is time-invariant if for any input $x(t)$ and any time shift $\tau$, the response to $x(t-\tau)$ is $y(t-\tau)$, where $y(t)$ is the response to $x(t)$.

Mathematically, for a system $T\{\cdot\}$, if:
$y(t) = T\{x(t)\}$
Then, the system is time-invariant if:
$T\{x(t-\tau)\} = y(t-\tau)$ for all $t$ and $\tau$.

**Key Concept:** The system's characteristics (e.g., its impulse response, its governing differential equation) are constant over time.

**Textbook Reference:** Haykin & Van Veen, Chapter 2.1.2
**Reference Book Reference:** Oppenheim, Willsky & Nawab, Chapter 2.4

**Examples:**

1.  **Time-Invariant System:**
    Let the system be $y(t) = 2x(t)$.
    If the input is $x(t)$, the output is $y(t) = 2x(t)$.
    If the input is shifted by $\tau$, $x(t-\tau)$, the output is $y(t-\tau) = 2x(t-\tau)$.
    This matches the definition, so the system is time-invariant.

2.  **Time-Varying System:**
    Let the system be $y(t) = tx(t)$.
    If the input is $x(t)$, the output is $y(t) = tx(t)$.
    If the input is shifted by $\tau$, $x(t-\tau)$, the output is $y(t-\tau) = (t-\tau)x(t-\tau)$.
    Comparing $y(t-\tau)$ with the time-shifted output of $x(t-\tau)$, which should be $t \cdot x(t-\tau)$ if time-invariant, we see they are not the same. Therefore, this system is time-varying.

**Important Point to Remember:** For a system described by a differential equation, the coefficients of the equation must be constant for the system to be time-invariant.

---

### 2.2 Linearity

A system is **linear** if it satisfies the properties of homogeneity (scaling) and additivity (superposition).

**Definition:** A system $T\{\cdot\}$ is linear if for any inputs $x_1(t)$ and $x_2(t)$, and any constants $a$ and $b$:
$T\{ax_1(t) + bx_2(t)\} = aT\{x_1(t)\} + bT\{x_2(t)\}$

This single equation combines two properties:

*   **Homogeneity (Scaling):** $T\{ax(t)\} = aT\{x(t)\}$
    If you scale the input by a factor $a$, the output is scaled by the same factor $a$.
*   **Additivity (Superposition):** $T\{x_1(t) + x_2(t)\} = T\{x_1(t)\} + T\{x_2(t)\}$
    The response to the sum of two inputs is the sum of the responses to each input individually.

**Key Concept:** Linear systems preserve the structure of the input signal in terms of scaling and summation.

**Textbook Reference:** Haykin & Van Veen, Chapter 2.1.1
**Reference Book Reference:** Oppenheim, Willsky & Nawab, Chapter 2.3

**Examples:**

1.  **Linear System:**
    Let the system be $y(t) = x^2(t)$.
    Check homogeneity: $T\{ax(t)\} = (ax(t))^2 = a^2x^2(t)$. This is not equal to $a \cdot T\{x(t)\} = ax^2(t)$.
    Therefore, this system is **non-linear**.

2.  **Linear System:**
    Let the system be $y(t) = 3x(t) + 5$.
    Check homogeneity: $T\{ax(t)\} = 3(ax(t)) + 5 = 3ax(t) + 5$. This is not equal to $a \cdot T\{x(t)\} = a(3x(t) + 5) = 3ax(t) + 5a$.
    Therefore, this system is **non-linear**. (Note: A system with an additive constant term is generally non-linear unless that constant is zero.)

3.  **Linear System:**
    Let the system be $y(t) = \frac{d}{dt}x(t)$.
    Check homogeneity: $T\{ax(t)\} = \frac{d}{dt}(ax(t)) = a\frac{d}{dt}x(t) = aT\{x(t)\}$. (Homogeneity holds)
    Check additivity: $T\{x_1(t) + x_2(t)\} = \frac{d}{dt}(x_1(t) + x_2(t)) = \frac{d}{dt}x_1(t) + \frac{d}{dt}x_2(t) = T\{x_1(t)\} + T\{x_2(t)\}$. (Additivity holds)
    Since both properties hold, this system is **linear**.

**Important Point to Remember:** A system that involves powers of the input (e.g., $x^2(t)$), products of the input with itself or time (e.g., $x(t)x(t-1)$, $tx(t)$), or non-linear functions of the input (e.g., $\sin(x(t))$) is generally non-linear. A system with an additive constant term (unless it's zero) is also non-linear.

**Connection to Course Outcomes:** This topic directly supports **CO1** (representing signals and performing operations) and is fundamental to understanding system behavior for frequency domain analysis (**CO2**) and Z-domain analysis (**CO3**).

---

### 2.3 Causality

A system is **causal** if its output at any given time depends only on present and past input values, not on future input values.

**Definition:** A system is causal if for any time $t_0$, the output $y(t_0)$ depends only on $x(t)$ for $t \le t_0$.

**Key Concept:** Causal systems can be implemented in real-time because they don't need to "look into the future."

**Textbook Reference:** Haykin & Van Veen, Chapter 2.1.3
**Reference Book Reference:** Oppenheim, Willsky & Nawab, Chapter 2.4

**Examples:**

1.  **Causal System:**
    Let the system be $y(t) = x(t) + x(t-1)$.
    The output at time $t$ depends on the input at time $t$ and $t-1$. Both are present or past values.
    Therefore, this system is **causal**.

2.  **Non-Causal System:**
    Let the system be $y(t) = x(t+1)$.
    The output at time $t$ depends on the input at time $t+1$, which is a future value.
    Therefore, this system is **non-causal**.

3.  **Causal System (but with memory):**
    Let the system be $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$.
    The output at time $t$ depends on all input values from $-\infty$ up to and including $t$. These are all present or past values.
    Therefore, this system is **causal**.

**Important Point to Remember:** Systems involving future values of the input (e.g., $x(t+a)$ where $a > 0$) or operators that depend on future values are non-causal.

---

### 2.4 Systems with and without Memory

A system has **memory** if its output at a given time depends on past input values. Conversely, a system without memory (also called an instantaneous system) has an output at any given time that depends only on the input at that same instant of time.

**Definition:**
*   **System with Memory:** The output $y(t)$ depends on $x(\tau)$ for some $\tau < t$.
*   **System without Memory (Instantaneous):** The output $y(t)$ depends only on $x(t)$.

**Key Concept:** Systems with memory can "remember" past inputs, influencing their current output.

**Textbook Reference:** Haykin & Van Veen, Chapter 2.1.4
**Reference Book Reference:** Oppenheim, Willsky & Nawab, Chapter 2.4

**Examples:**

1.  **System without Memory:**
    Let the system be $y(t) = 2x(t)$.
    The output at time $t$ depends only on the input at time $t$.
    Therefore, this system has **no memory**.

2.  **System with Memory:**
    Let the system be $y(t) = x(t) + x(t-1)$.
    The output at time $t$ depends on the input at time $t-1$, which is a past value.
    Therefore, this system has **memory**.

3.  **System with Memory:**
    Let the system be $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$.
    The output at time $t$ depends on all input values from $-\infty$ up to $t$. These are past values.
    Therefore, this system has **memory**.

**Relationship with Causality:**
*   A system without memory is always causal.
*   A causal system can have memory or not have memory.
*   A system with memory is not necessarily causal (e.g., $y(t) = x(t) + x(t+1)$ has memory but is non-causal).

**Important Point to Remember:** The presence of past or future input values in the system's input-output relationship indicates memory.

---

### 2.5 Stability

Stability is a crucial property that ensures a system's output remains bounded when the input is bounded.

**Definition (Bounded-Input, Bounded-Output - BIBO Stability):** A system is BIBO stable if every bounded input produces a bounded output.
Mathematically, if $|x(t)| \le M_x < \infty$ for all $t$, then the system is BIBO stable if $|y(t)| \le M_y < \infty$ for all $t$.

**Key Concept:** An unstable system can produce an unbounded output even for a bounded input, which can be dangerous or undesirable in practical applications.

**Textbook Reference:** Haykin & Van Veen, Chapter 2.1.5
**Reference Book Reference:** Oppenheim, Willsky & Nawab, Chapter 2.4; Ogata, Chapter 3

**Examples:**

1.  **Stable System:**
    Consider a linear time-invariant (LTI) system with impulse response $h(t) = e^{-at}u(t)$, where $a > 0$.
    If the input $x(t)$ is bounded, say $|x(t)| \le M_x$, then the output $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau$.
    The integral of the magnitude of $x(t)$ and $h(t)$ will be finite, resulting in a bounded output. This system is BIBO stable.

2.  **Unstable System:**
    Consider an LTI system with impulse response $h(t) = e^{at}u(t)$, where $a > 0$.
    If we apply a bounded input, say $x(t) = 1$ for all $t$ (which is bounded), the output will be $y(t) = \int_{0}^{t} e^{a\tau}d\tau = \frac{1}{a}(e^{at}-1)$. As $t \to \infty$, $y(t) \to \infty$, so the output is unbounded. This system is BIBO unstable.

**For LTI Systems:**
BIBO stability is closely related to the impulse response $h(t)$. An LTI system is BIBO stable if and only if its impulse response is absolutely integrable:
$\int_{-\infty}^{\infty} |h(t)| dt < \infty$ (for continuous-time systems)
$\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (for discrete-time systems)

**For Dynamical Systems (often described by differential or difference equations):**
Stability is related to the roots of the characteristic equation.
*   **Continuous-time systems:** For a linear time-invariant system described by differential equations, all poles (roots of the characteristic equation) must lie in the left half of the s-plane (i.e., have negative real parts) for BIBO stability. This aligns with **CO4**.
*   **Discrete-time systems:** For a linear time-invariant system described by difference equations, all poles must lie inside the unit circle in the z-plane (i.e., have magnitude less than 1) for BIBO stability.

**Important Point to Remember:** Stability is about the system's tendency to exhibit runaway behavior. For LTI systems, the absolute integrability of the impulse response is the key condition. For differential/difference equations, the location of the poles is critical.

---

## 3. Summary of Properties

| Property            | Definition                                                                 | Key Test                                                                                             | Example (System Equation)                                                              |
| :------------------ | :------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **Time-Invariant**  | Response to $x(t-\tau)$ is $y(t-\tau)$                                     | Check if time shifts in input lead to corresponding time shifts in output without modifying the operation. | $y(t) = x(t) + x(t-1)$ (TI) vs $y(t) = tx(t)$ (TV)                                        |
| **Linearity**       | $T\{ax_1(t) + bx_2(t)\} = aT\{x_1(t)\} + bT\{x_2(t)\}$ (Homogeneity + Additivity) | Check if scaling input scales output and summing inputs sums outputs.                                | $y(t) = 3x(t)$ (Linear) vs $y(t) = x^2(t)$ (Non-linear)                                  |
| **Causality**       | Output $y(t_0)$ depends only on $x(t)$ for $t \le t_0$.                      | Check if output depends on future inputs.                                                            | $y(t) = x(t) + x(t-1)$ (Causal) vs $y(t) = x(t+1)$ (Non-causal)                          |
| **Memory**          | Output $y(t)$ depends on past inputs $x(\tau)$ for $\tau < t$.             | Check if output depends on input at times other than the current time.                               | $y(t) = \int_{0}^{t} x(\tau)d\tau$ (Memory) vs $y(t) = 2x(t)$ (No Memory)                 |
| **Stability (BIBO)**| Bounded input produces a bounded output.                                     | For LTI: $\int_{-\infty}^{\infty} |h(t)| dt < \infty$. For ODEs: all poles in LHP.            | $y(t) = e^{-t}x(t)$ (Stable) vs $y(t) = e^{t}x(t)$ (Unstable)                             |

---

## 4. Practice Questions

**Question 1:**
Determine whether the following systems are time-invariant, linear, causal, and have memory.

(a) $y(t) = x(t-2) + x(t+2)$
(b) $y(t) = \sin(x(t))$
(c) $y(t) = e^t x(t)$
(d) $y[n] = n \cdot x[n]$ (Discrete-time system)
(e) $y(t) = \frac{dx(t)}{dt} + 2x(t)$

**Question 2:**
Consider an LTI system with impulse response $h(t) = e^{-3t}u(t)$. Is this system BIBO stable? Justify your answer.

**Question 3:**
For the discrete-time system $y[n] = \sum_{k=n-1}^{n+1} x[k]$, determine if it is time-invariant, linear, causal, and has memory.

---

## 5. Answers to Practice Questions

**Answer 1:**

(a) $y(t) = x(t-2) + x(t+2)$
    *   **Time-Invariant:** Yes. $T\{x(t-\tau)\} = x((t-\tau)-2) + x((t-\tau)+2) = x(t-2-\tau) + x(t+2-\tau) = y(t-\tau)$.
    *   **Linear:** Yes. $T\{ax_1(t) + bx_2(t)\} = a x_1(t-2) + b x_2(t-2) + a x_1(t+2) + b x_2(t+2) = a T\{x_1(t)\} + b T\{x_2(t)\}$.
    *   **Causal:** No. It depends on $x(t+2)$, a future value.
    *   **Memory:** Yes. It depends on $x(t-2)$, a past value.

(b) $y(t) = \sin(x(t))$
    *   **Time-Invariant:** Yes. $T\{x(t-\tau)\} = \sin(x(t-\tau)) = y(t-\tau)$.
    *   **Linear:** No. $\sin(ax_1(t) + bx_2(t)) \neq a\sin(x_1(t)) + b\sin(x_2(t))$ in general.
    *   **Causal:** Yes. Depends only on $x(t)$.
    *   **Memory:** No. Depends only on $x(t)$.

(c) $y(t) = e^t x(t)$
    *   **Time-Invariant:** No. $T\{x(t-\tau)\} = e^t x(t-\tau)$. The expected time-shifted output is $y(t-\tau) = e^{t-\tau}x(t-\tau)$. These are not equal.
    *   **Linear:** Yes. $T\{ax_1(t) + bx_2(t)\} = e^t(ax_1(t) + bx_2(t)) = a e^t x_1(t) + b e^t x_2(t) = a T\{x_1(t)\} + b T\{x_2(t)\}$.
    *   **Causal:** Yes. Depends only on $x(t)$.
    *   **Memory:** No. Depends only on $x(t)$.

(d) $y[n] = n \cdot x[n]$ (Discrete-time system)
    *   **Time-Invariant:** No. $T\{x[n-k]\} = n \cdot x[n-k]$. The expected time-shifted output is $y[n-k] = (n-k)x[n-k]$. These are not equal.
    *   **Linear:** Yes. $T\{ax_1[n] + bx_2[n]\} = n(ax_1[n] + bx_2[n]) = a(n x_1[n]) + b(n x_2[n]) = a T\{x_1[n]\} + b T\{x_2[n]\}$.
    *   **Causal:** Yes. Depends only on $x[n]$.
    *   **Memory:** No. Depends only on $x[n]$.

(e) $y(t) = \frac{dx(t)}{dt} + 2x(t)$
    *   **Time-Invariant:** Yes. The differential operator and the coefficients are constant.
    *   **Linear:** Yes. The operations (differentiation and multiplication by a constant) are linear.
    *   **Causal:** Yes. The output depends on $x(t)$ and its derivative, which are current values.
    *   **Memory:** No. The output at time $t$ depends only on $x(t)$ and its derivative at time $t$. (Note: While derivatives can be thought of as using infinitesimal past values, the standard definition for memory typically considers finite past shifts. For systems described by ODEs, the dependency on $x(t)$ and its derivatives at time $t$ is considered instantaneous in this context).

**Answer 2:**
Yes, the system is BIBO stable.
Justification: For an LTI system, BIBO stability is guaranteed if the impulse response is absolutely integrable.
$h(t) = e^{-3t}u(t)$
$\int_{-\infty}^{\infty} |h(t)| dt = \int_{-\infty}^{\infty} |e^{-3t}u(t)| dt = \int_{0}^{\infty} e^{-3t} dt$
$= \left[-\frac{1}{3}e^{-3t}\right]_0^{\infty} = 0 - (-\frac{1}{3}e^0) = \frac{1}{3}$
Since $\frac{1}{3} < \infty$, the impulse response is absolutely integrable, and the system is BIBO stable.

**Answer 3:**
$y[n] = \sum_{k=n-1}^{n+1} x[k] = x[n-1] + x[n] + x[n+1]$

*   **Time-Invariant:** Yes.
    $T\{x[n-m]\} = x[(n-m)-1] + x[n-m] + x[(n-m)+1]$
    $y[n-m] = x[(n-m)-1] + x[n-m] + x[(n-m)+1]$
    Thus, $T\{x[n-m]\} = y[n-m]$.

*   **Linear:** Yes.
    $T\{ax_1[n] + bx_2[n]\} = a x_1[n-1] + b x_2[n-1] + a x_1[n] + b x_2[n] + a x_1[n+1] + b x_2[n+1]$
    $= a(x_1[n-1] + x_1[n] + x_1[n+1]) + b(x_2[n-1] + x_2[n] + x_2[n+1])$
    $= a T\{x_1[n]\} + b T\{x_2[n]\}$.

*   **Causal:** No.
    The output $y[n]$ depends on $x[n+1]$, which is a future value.

*   **Memory:** Yes.
    The output $y[n]$ depends on $x[n-1]$, a past value, and $x[n+1]$, a future value. Dependence on any past value implies memory.

---

## 6. Important Points to Remember

*   **System Properties are fundamental:** They define how a system behaves and allow us to categorize and analyze them.
*   **Linearity is powerful:** Linear systems are mathematically tractable, and many real-world systems can be approximated as linear. The principle of superposition is key.
*   **Causality is for real-time:** Causal systems are essential for real-time signal processing and control.
*   **Memory indicates history:** Systems with memory are influenced by past events.
*   **Stability prevents runaway behavior:** A system must be stable to be considered reliable and predictable in practice. For LTI systems, the impulse response is the definitive characteristic.
*   **LTI systems:** Many important signals and systems concepts are built around the properties of linearity and time-invariance.
*   **Test for properties systematically:** Break down the definition for each property and apply it to the given system equation.
*   **Discrete vs. Continuous:** While the concepts are similar, the mathematical notations and conditions (e.g., summation vs. integration) differ.

---

This concludes Module 1's introduction to the fundamental properties of systems. These properties will be revisited and expanded upon as we delve deeper into the analysis of various types of signals and systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
