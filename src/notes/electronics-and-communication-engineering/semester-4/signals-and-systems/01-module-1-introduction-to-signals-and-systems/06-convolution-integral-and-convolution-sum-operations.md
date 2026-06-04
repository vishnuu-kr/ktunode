---
title: "Convolution integral and convolution sum operations."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe515"
status: "completed"
scrapedAt: "2026-05-23T17:52:20.547Z"
---
Sure, here are detailed study notes for the topic "Convolution integral and convolution sum operations" from Module 1: Introduction to signals and systems in SIGNALS AND SYSTEMS, aligned with your requirements.

---

# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Convolution Integral and Convolution Sum Operations

This module introduces the fundamental concept of convolution, a key operation for analyzing Linear Time-Invariant (LTI) systems. We will explore both the continuous-time convolution integral and the discrete-time convolution sum.

### Learning Outcomes Covered in this Topic:

*   **LO1:** Understand the mathematical definition and significance of convolution for LTI systems.
*   **LO2:** Recognize the relationship between system input, impulse response, and output for LTI systems.
*   **LO3:** Apply the convolution integral to find the output of continuous-time LTI systems.
*   **LO4:** Apply the convolution sum to find the output of discrete-time LTI systems.
*   **LO5:** Understand the properties of convolution.
*   **LO6:** Relate convolution to the concept of system response.

---

### 1. Introduction to Convolution

**Key Concept:** Convolution is the mathematical operation that describes the output of an LTI system in terms of its input signal and its impulse response. It represents how the system "smears" or "filters" the input signal based on its inherent characteristics.

**Significance for LTI Systems:**
For Linear Time-Invariant (LTI) systems, the output $y(t)$ (continuous-time) or $y[n]$ (discrete-time) can be uniquely determined if we know the input $x(t)$ or $x[n]$ and the system's impulse response $h(t)$ or $h[n]$. This relationship is defined by convolution.

---

### 2. Convolution Integral (Continuous-Time LTI Systems)

**Definition:**
The convolution integral describes the output $y(t)$ of a continuous-time LTI system when subjected to an input $x(t)$ and having an impulse response $h(t)$.

$$
y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau
$$

Alternatively, it can be expressed as:

$$
y(t) = h(t) * x(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau) d\tau
$$

*   **$y(t)$**: Output signal
*   **$x(t)$**: Input signal
*   **$h(t)$**: Impulse response of the system
*   **$*$**: Convolution operator
*   **$\tau$**: Dummy variable of integration

**Intuitive Explanation:**
Imagine the impulse response $h(t)$ as a "template" of how the system reacts to an infinitesimally short input at time $t=0$. When we apply an input $x(t)$, we can think of it as a sum of scaled and shifted impulses. The convolution integral sums up the responses of the system to each of these scaled and shifted impulses, properly weighted by the input signal.

The term $x(\tau)$ indicates the "strength" of the input signal at time $\tau$. The term $h(t - \tau)$ represents the system's response at time $t$ due to an impulse that occurred at time $\tau$. As $\tau$ varies, we are essentially sliding the time-reversed impulse response ($h(-\tau)$) across the input signal, multiplying them, and integrating the product at each time $t$.

**Steps for Evaluating the Convolution Integral:**

1.  **Flip and Shift:** Take the impulse response $h(t)$, flip it to get $h(-\tau)$, and then shift it by $t$ to get $h(t - \tau)$.
2.  **Multiply:** Multiply the input signal $x(\tau)$ with the shifted and flipped impulse response $h(t - \tau)$.
3.  **Integrate:** Integrate the product from $-\infty$ to $\infty$ with respect to the dummy variable $\tau$. The result of this integration is the output $y(t)$ at that specific time $t$.
4.  **Repeat:** Repeat steps 1-3 for different values of $t$ to obtain the complete output signal $y(t)$.

**Example 1: Simple Convolution**

Let $x(t) = e^{-at}u(t)$ and $h(t) = u(t)$, where $u(t)$ is the unit step function and $a > 0$.

We want to compute $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau$.

*   **$x(\tau) = e^{-a\tau}u(\tau)$**: This is zero for $\tau < 0$.
*   **$h(t - \tau) = u(t - \tau)$**: This is 1 for $t - \tau \ge 0$ (i.e., $\tau \le t$) and 0 otherwise.

The integral is:
$$
y(t) = \int_{-\infty}^{\infty} e^{-a\tau}u(\tau) u(t - \tau) d\tau
$$

For the integrand to be non-zero, both $u(\tau)$ and $u(t - \tau)$ must be 1. This requires $\tau \ge 0$ and $\tau \le t$.
So, the limits of integration become from 0 to $t$ (assuming $t \ge 0$). If $t < 0$, the limits are such that the product is zero.

Case 1: $t < 0$
The limits of integration are from 0 to $t$. Since $\tau$ cannot be both $\ge 0$ and $\le t$ when $t < 0$, the integral is 0. So, $y(t) = 0$ for $t < 0$.

Case 2: $t \ge 0$
$$
y(t) = \int_{0}^{t} e^{-a\tau} \cdot 1 \, d\tau
$$
$$
y(t) = \left[ \frac{e^{-a\tau}}{-a} \right]_{0}^{t}
$$
$$
y(t) = \frac{e^{-at}}{-a} - \frac{e^{0}}{-a} = \frac{e^{-at}}{-a} + \frac{1}{a}
$$
$$
y(t) = \frac{1}{a} (1 - e^{-at})
$$

Combining both cases, the output is:
$$
y(t) = \frac{1}{a} (1 - e^{-at}) u(t)
$$

**Textbook References:**
*   **Oppenheim & Willsky:** Chapter 2 covers the representation of LTI systems in terms of convolution. They emphasize the geometric interpretation of convolution.
*   **Haykin:** Chapter 2 provides a thorough treatment of convolution, including its properties and applications in circuit analysis.

---

### 3. Convolution Sum (Discrete-Time LTI Systems)

**Definition:**
The convolution sum describes the output $y[n]$ of a discrete-time LTI system when subjected to an input $x[n]$ and having an impulse response $h[n]$.

$$
y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]
$$

Alternatively, it can be expressed as:

$$
y[n] = h[n] * x[n] = \sum_{k=-\infty}^{\infty} h[k] x[n - k]
$$

*   **$y[n]$**: Output sequence
*   **$x[n]$**: Input sequence
*   **$h[n]$**: Impulse response of the system
*   **$*$**: Convolution operator
*   **$k$**: Dummy variable of summation

**Intuitive Explanation:**
Similar to the continuous-time case, the input $x[n]$ can be viewed as a sum of scaled and shifted impulses. The convolution sum calculates the total response of the system at time $n$ by summing the contributions from each of these impulses, weighted by the system's impulse response.

The term $x[k]$ represents the "amplitude" of the input at index $k$. The term $h[n - k]$ represents the system's response at index $n$ due to an impulse that occurred at index $k$. We are essentially sliding the time-reversed impulse response ($h[-k]$) across the input sequence, multiplying corresponding terms, and summing the products at each time $n$.

**Steps for Evaluating the Convolution Sum:**

1.  **Flip and Shift:** Take the impulse response $h[n]$, flip it to get $h[-k]$, and then shift it by $n$ to get $h[n - k]$.
2.  **Multiply:** Multiply the input sequence $x[k]$ with the shifted and flipped impulse response $h[n - k]$ for all values of $k$.
3.  **Sum:** Sum up all the products obtained in step 2. The result of this summation is the output $y[n]$ at that specific index $n$.
4.  **Repeat:** Repeat steps 1-3 for different values of $n$ to obtain the complete output sequence $y[n]$.

**Example 2: Simple Convolution Sum**

Let $x[n] = a^n u[n]$ and $h[n] = u[n]$, where $0 < a < 1$, and $u[n]$ is the unit step sequence.

We want to compute $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$.

*   **$x[k] = a^k u[k]$**: This is zero for $k < 0$.
*   **$h[n - k] = u[n - k]$**: This is 1 for $n - k \ge 0$ (i.e., $k \le n$) and 0 otherwise.

The summation is:
$$
y[n] = \sum_{k=-\infty}^{\infty} a^k u[k] u[n - k]
$$

For the terms to be non-zero, both $u[k]$ and $u[n - k]$ must be 1. This requires $k \ge 0$ and $k \le n$.
So, the limits of summation become from $k=0$ to $k=n$ (assuming $n \ge 0$). If $n < 0$, the limits are such that the product is zero.

Case 1: $n < 0$
The summation range is from $k=0$ to $k=n$. Since $n < 0$, there are no values of $k$ that satisfy both $k \ge 0$ and $k \le n$. Therefore, the sum is 0. So, $y[n] = 0$ for $n < 0$.

Case 2: $n \ge 0$
$$
y[n] = \sum_{k=0}^{n} a^k \cdot 1
$$
This is a finite geometric series. The sum of a geometric series $\sum_{k=0}^{n} r^k$ is $\frac{1 - r^{n+1}}{1 - r}$.
Here, $r = a$.

$$
y[n] = \frac{1 - a^{n+1}}{1 - a}
$$

Combining both cases, the output is:
$$
y[n] = \frac{1 - a^{n+1}}{1 - a} u[n]
$$

**Textbook References:**
*   **Oppenheim & Willsky:** Chapter 3 extends the concept of convolution to discrete-time systems. They provide numerous examples of using the convolution sum.
*   **Haykin:** Chapter 3 deals with discrete-time signals and systems, and convolution sum is a central topic.
*   **Ziemer:** Chapter 3 offers a comparative study of continuous and discrete time systems, including detailed explanations of convolution.
*   **Anand Kumar:** Chapter 3 covers convolution sum with practical examples in digital signal processing.

---

### 4. Properties of Convolution

Convolution is a fundamental operation with several useful properties, which are shared between the integral and the sum due to their similar structure.

**Important Properties:**

1.  **Commutative Property:**
    *   **Continuous-time:** $x(t) * h(t) = h(t) * x(t)$
    *   **Discrete-time:** $x[n] * h[n] = h[n] * x[n]$
    *   *Significance:* The order of the input and the impulse response does not affect the output. This means we can choose to "flip and shift" either the input or the impulse response.

2.  **Associative Property:**
    *   **Continuous-time:** $(x(t) * h_1(t)) * h_2(t) = x(t) * (h_1(t) * h_2(t))$
    *   **Discrete-time:** $(x[n] * h_1[n]) * h_2[n] = x[n] * (h_1[n] * h_2[n])$
    *   *Significance:* If a system is formed by cascading two LTI systems, the overall impulse response is the convolution of the individual impulse responses. This property simplifies the analysis of interconnected LTI systems.

3.  **Distributive Property:**
    *   **Continuous-time:** $x(t) * (h_1(t) + h_2(t)) = (x(t) * h_1(t)) + (x(t) * h_2(t))$
    *   **Discrete-time:** $x[n] * (h_1[n] + h_2[n]) = (x[n] * h_1[n]) + (x[n] * h_2[n])$
    *   *Significance:* This property allows us to deal with systems that are parallel combinations of simpler systems. The overall impulse response is the sum of the individual impulse responses.

4.  **Convolution with the Impulse Function:**
    *   **Continuous-time:** $x(t) * \delta(t) = x(t)$
    *   **Discrete-time:** $x[n] * \delta[n] = x[n]$
    *   *Significance:* Convolving any signal with the impulse function (or impulse response) yields the original signal. This reinforces the idea that $h(t)$ or $h[n]$ characterizes the system's response to an impulse.

5.  **Convolution with a Shifted Impulse:**
    *   **Continuous-time:** $x(t) * \delta(t - t_0) = x(t - t_0)$
    *   **Discrete-time:** $x[n] * \delta[n - n_0] = x[n - n_0]$
    *   *Significance:* Convolving a signal with a delayed impulse results in a delayed version of the original signal.

6.  **Identity Element:** The impulse function $\delta(t)$ or $\delta[n]$ is the identity element for convolution.

**Textbook References:**
*   **Oppenheim & Willsky:** Discusses these properties in Chapter 2 (continuous) and Chapter 3 (discrete), highlighting their importance in system analysis.
*   **Haykin:** Also covers these properties extensively in its respective chapters on continuous and discrete-time systems.
*   **Lathi:** Chapter 3 and 4 in "Principles of Signal Processing & Linear systems" provides a good overview of convolution properties and their algebraic manipulation.

---

### 5. System Properties and Convolution

Convolution is intrinsically linked to the fundamental properties of LTI systems.

*   **Causality:** A system is causal if its output at any time depends only on present and past inputs.
    *   An LTI system is causal if and only if its impulse response is causal.
    *   **Continuous-time:** $h(t) = 0$ for $t < 0$. This means the effective limits of integration in $y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau$ become $\int_{0}^{t} x(\tau) h(t - \tau) d\tau$.
    *   **Discrete-time:** $h[n] = 0$ for $n < 0$. This means the effective limits of summation in $y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$ become $\sum_{k=0}^{n} x[k] h[n - k]$.

*   **Stability (BIBO - Bounded Input, Bounded Output):** A system is stable if every bounded input produces a bounded output.
    *   An LTI system is BIBO stable if and only if its impulse response is absolutely integrable (continuous-time) or absolutely summable (discrete-time).
    *   **Continuous-time:** $\int_{-\infty}^{\infty} |h(t)| dt < \infty$
    *   **Discrete-time:** $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$

**Alignment with Course Outcomes:**

*   **CO1 (Classify signals and systems, perform basic operations):** Understanding convolution is a fundamental operation. Recognizing impulse responses and their properties (like causality) helps classify systems.
*   **CO2 (Determine stability and causality using convolution):** This section directly addresses how to check system stability and causality by examining the impulse response through the lens of convolution.

**Textbook References:**
*   **Oppenheim & Willsky:** Chapter 2 (continuous) and Chapter 3 (discrete) link system properties (causality, stability) directly to the impulse response and thus convolution.
*   **Haykin:** Provides clear criteria for causality and stability of LTI systems based on their impulse responses.
*   **Ambardar:** "Analog and Digital Signal Processing" has dedicated sections on system properties and their relation to impulse response, which is crucial for convolution.

---

### 6. Practical Applications of Convolution

*   **Filtering:** Convolution is the basis of linear filtering. The impulse response $h(t)$ or $h[n]$ represents the filter's characteristics. For example, a low-pass filter will smooth out high-frequency components of the input signal through convolution.
*   **System Analysis:** Understanding how a system reacts to an impulse allows us to predict its output for any input signal using convolution.
*   **Image Processing:** Convolution is widely used for image filtering operations like blurring, sharpening, and edge detection, where the impulse response is often a small kernel.
*   **Communications:** In communication systems, convolution is used to model the effects of channel distortion, equalization, and matched filtering.
*   **Control Systems:** Convolution helps analyze the transient and steady-state responses of control systems.

---

### 7. Practice Questions and Exercises

**Question 1:**
Calculate the convolution sum $y[n] = x[n] * h[n]$ where $x[n] = \{1, 2, 1\}$ (for $n=0, 1, 2$ respectively, and 0 otherwise) and $h[n] = \{1, -1\}$ (for $n=0, 1$ respectively, and 0 otherwise).

**Solution 1:**
We can use the convolution sum formula $y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$.

*   $x[k] = \{1, 2, 1\}$ for $k=0, 1, 2$.
*   $h[k] = \{1, -1\}$ for $k=0, 1$.
*   $h[n-k]$: We need to flip and shift $h[k]$.
    *   $h[-k]$: $\{ \dots, 0, -1, 1, 0, \dots \}$ for $k=0, -1, -2, \dots$
    *   $h[n-k]$: Shifted version.

Let's evaluate $y[n]$ for different values of $n$. The resulting sequence will have length $L_x + L_h - 1 = 3 + 2 - 1 = 4$.

*   **$y[0]$**: $\sum_{k=-\infty}^{\infty} x[k] h[0 - k]$
    *   $k=0$: $x[0]h[0] = 1 \cdot 1 = 1$
    *   $y[0] = 1$

*   **$y[1]$**: $\sum_{k=-\infty}^{\infty} x[k] h[1 - k]$
    *   $k=0$: $x[0]h[1] = 1 \cdot (-1) = -1$
    *   $k=1$: $x[1]h[0] = 2 \cdot 1 = 2$
    *   $y[1] = -1 + 2 = 1$

*   **$y[2]$**: $\sum_{k=-\infty}^{\infty} x[k] h[2 - k]$
    *   $k=1$: $x[1]h[1] = 2 \cdot (-1) = -2$
    *   $k=2$: $x[2]h[0] = 1 \cdot 1 = 1$
    *   $y[2] = -2 + 1 = -1$

*   **$y[3]$**: $\sum_{k=-\infty}^{\infty} x[k] h[3 - k]$
    *   $k=2$: $x[2]h[1] = 1 \cdot (-1) = -1$
    *   $y[3] = -1$

So, $y[n] = \{1, 1, -1, -1\}$ for $n=0, 1, 2, 3$.

**Question 2:**
Determine if the LTI system with impulse response $h(t) = e^{-2t}u(t)$ is causal and stable.

**Solution 2:**
*   **Causality:** The impulse response $h(t) = e^{-2t}u(t)$ is zero for $t < 0$. Therefore, the system is **causal**.

*   **Stability:** We need to check if $\int_{-\infty}^{\infty} |h(t)| dt < \infty$.
    $$
    \int_{-\infty}^{\infty} |e^{-2t}u(t)| dt = \int_{0}^{\infty} e^{-2t} dt
    $$
    $$
    = \left[ \frac{e^{-2t}}{-2} \right]_{0}^{\infty} = \left( 0 - \frac{1}{-2} \right) = \frac{1}{2}
    $$
    Since the integral is finite ($\frac{1}{2} < \infty$), the system is **stable**.

**Question 3:**
Compute the convolution integral $y(t) = x(t) * h(t)$ where $x(t) = u(t)$ and $h(t) = \delta(t-2)$.

**Solution 3:**
Using the property $x(t) * \delta(t - t_0) = x(t - t_0)$:
Here, $x(t) = u(t)$ and $t_0 = 2$.
Therefore, $y(t) = u(t) * \delta(t-2) = u(t-2)$.

Alternatively, using the definition:
$y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau = \int_{-\infty}^{\infty} u(\tau) \delta(t - \tau - 2) d\tau$
The impulse $\delta(t - \tau - 2)$ is non-zero only when $t - \tau - 2 = 0$, which means $\tau = t - 2$.
The integral becomes $u(\tau)$ evaluated at $\tau = t - 2$.
So, $y(t) = u(t - 2)$.

---

### 8. Important Points to Remember

*   **Convolution is the core operation for LTI systems:** It describes how the system's impulse response shapes the input signal.
*   **Integral vs. Sum:** Use the integral for continuous-time systems and the sum for discrete-time systems.
*   **Flip and Shift:** This is the fundamental graphical or procedural method for computing convolution.
*   **Properties are key:** Commutativity, associativity, and distributivity simplify complex LTI system analysis.
*   **Impulse response is everything:** For LTI systems, the impulse response fully characterizes the system. Causality and stability depend directly on the impulse response.
*   **Visualizing convolution:** Sketching the input and the flipped-and-shifted impulse response is crucial for determining the integration/summation limits.

---

This concludes the notes on Convolution Integral and Convolution Sum Operations. Mastering this topic is essential for understanding the behavior of LTI systems in Signals and Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
