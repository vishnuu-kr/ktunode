---
title: "Convolution Integral and sum."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361cf"
status: "completed"
scrapedAt: "2026-05-23T16:23:42.049Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems: Elementary Signals

## Topic: Convolution Integral and Sum

This topic delves into the fundamental operation of convolution, which is central to understanding the input-output relationship of Linear Time-Invariant (LTI) systems. We will explore both continuous-time and discrete-time convolution.

**Knowledge Level Focus:** K2 (Knowledge Level: Ability to recall and understand basic concepts)

**Relevant Course Outcomes:**
*   **CO1:** To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)

---

### 1. Introduction to Convolution

Convolution is a mathematical operation that describes the effect of an LTI system on an input signal to produce an output signal. It essentially represents the weighted sum (for discrete-time) or integral (for continuous-time) of the input signal, where the weights are determined by the system's impulse response.

---

### 2. Convolution for Continuous-Time Signals (Convolution Integral)

#### 2.1 The Concept

For a continuous-time LTI system with impulse response $h(t)$ and input signal $x(t)$, the output signal $y(t)$ is given by the convolution integral:

$$ y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$

**Explanation of the Formula:**

*   **$x(\tau)$:** The input signal at a specific time $\tau$.
*   **$h(t - \tau)$:** The time-reversed and time-shifted impulse response. This represents how the system responds to an impulse that occurred at time $\tau$, at the current time $t$.
*   **$d\tau$:** An infinitesimal increment of time over which we integrate.
*   **Integral from $-\infty$ to $\infty$:** We are summing up the contributions of all past and future impulses of the input signal, weighted by the system's response to them at the current time $t$.

**Key Insight:** The convolution integral can be visualized as flipping one of the signals (say, $h(\tau)$ to get $h(-\tau)$), shifting it by $t$ to get $h(t-\tau)$, and then finding the overlapping area between the input signal $x(\tau)$ and the shifted impulse response $h(t-\tau)$ as $t$ varies.

#### 2.2 Properties of Convolution

The convolution operation shares several important properties:

*   **Commutative:** $x(t) * h(t) = h(t) * x(t)$
    *   This means the order of the input signal and the impulse response does not matter. The output is the same.
*   **Associative:** $(x(t) * h_1(t)) * h_2(t) = x(t) * (h_1(t) * h_2(t))$
    *   This property is crucial for cascading LTI systems. The overall impulse response of a cascade of two systems is the convolution of their individual impulse responses.
*   **Distributive:** $x(t) * (h_1(t) + h_2(t)) = (x(t) * h_1(t)) + (x(t) * h_2(t))$
    *   This means that if an input is applied to parallel LTI systems, the output is the sum of the outputs from each system.
*   **Identity:** $x(t) * \delta(t) = x(t)$
    *   Where $\delta(t)$ is the Dirac delta function. This signifies that the impulse response is the system's response to a unit impulse input.
*   **Convolution with a constant:** If $h(t) = c$ (a constant), then $x(t) * c = c \int_{-\infty}^{\infty} x(\tau) d\tau$.
    *   This is essentially scaling the integral of the input signal.

#### 2.3 Graphical Interpretation and Calculation

To calculate the convolution integral graphically:

1.  **Plot $x(\tau)$ and $h(\tau)$:** Treat $\tau$ as the independent variable.
2.  **Flip $h(\tau)$:** Obtain $h(-\tau)$.
3.  **Shift $h(-\tau)$:** Obtain $h(t - \tau)$ by shifting $h(-\tau)$ by $t$ units along the $\tau$-axis.
4.  **Multiply:** For a given value of $t$, multiply $x(\tau)$ and $h(t - \tau)$ point-by-point.
5.  **Integrate:** Calculate the integral of the product from $-\infty$ to $\infty$. This gives $y(t)$ for that specific $t$.
6.  **Repeat for different $t$:** Vary $t$ to find the complete output $y(t)$.

**Example:**
Let $x(t) = u(t)$ (unit step function) and $h(t) = e^{-at}u(t)$ for $a > 0$.

$$ y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$
$$ y(t) = \int_{-\infty}^{\infty} u(\tau) e^{-a(t - \tau)}u(t - \tau) d\tau $$

The term $u(\tau)$ is 1 for $\tau \ge 0$ and 0 otherwise.
The term $u(t - \tau)$ is 1 for $t - \tau \ge 0$ (i.e., $\tau \le t$) and 0 otherwise.

For the integral to be non-zero, we need $\tau \ge 0$ AND $\tau \le t$.
*   **Case 1: $t < 0$**: The condition $\tau \le t$ and $\tau \ge 0$ cannot be simultaneously met, so the integration interval is empty, and $y(t) = 0$.
*   **Case 2: $t \ge 0$**: The integration limits become from $0$ to $t$.

$$ y(t) = \int_{0}^{t} 1 \cdot e^{-a(t - \tau)} d\tau \quad \text{for } t \ge 0 $$
$$ y(t) = e^{-at} \int_{0}^{t} e^{a\tau} d\tau $$
$$ y(t) = e^{-at} \left[ \frac{e^{a\tau}}{a} \right]_{0}^{t} $$
$$ y(t) = e^{-at} \left( \frac{e^{at}}{a} - \frac{e^{0}}{a} \right) $$
$$ y(t) = e^{-at} \left( \frac{e^{at}}{a} - \frac{1}{a} \right) $$
$$ y(t) = \frac{1}{a} (1 - e^{-at}) \quad \text{for } t \ge 0 $$

Therefore, $y(t) = \frac{1}{a}(1 - e^{-at})u(t)$.

**(Refer to Haykin & Van Veen, Chapter 2, for detailed examples and graphical methods.)**

---

### 3. Convolution for Discrete-Time Signals (Convolution Sum)

#### 3.1 The Concept

For a discrete-time LTI system with impulse response $h[n]$ and input signal $x[n]$, the output signal $y[n]$ is given by the convolution sum:

$$ y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k] $$

**Explanation of the Formula:**

*   **$x[k]$:** The input signal at a specific time index $k$.
*   **$h[n - k]$:** The time-reversed and time-shifted impulse response. This represents how the system responds to an impulse that occurred at time index $k$, at the current time index $n$.
*   **$\sum_{k=-\infty}^{\infty}$:** We are summing up the contributions of all past and future impulses of the input signal, weighted by the system's response to them at the current time index $n$.

**Key Insight:** Similar to the continuous-time case, the convolution sum can be visualized as flipping one of the sequences (say, $h[k]$ to get $h[-k]$), shifting it by $n$ to get $h[n-k]$, and then finding the overlapping sum between the input sequence $x[k]$ and the shifted impulse response $h[n-k]$ as $n$ varies.

#### 3.2 Properties of Convolution

The properties of the discrete-time convolution sum are analogous to the continuous-time case:

*   **Commutative:** $x[n] * h[n] = h[n] * x[n]$
*   **Associative:** $(x[n] * h_1[n]) * h_2[n] = x[n] * (h_1[n] * h_2[n])$
*   **Distributive:** $x[n] * (h_1[n] + h_2[n]) = (x[n] * h_1[n]) + (x[n] * h_2[n])$
*   **Identity:** $x[n] * \delta[n] = x[n]$
    *   Where $\delta[n]$ is the unit impulse sequence.

#### 3.3 Graphical Interpretation and Calculation

To calculate the convolution sum graphically:

1.  **Plot $x[k]$ and $h[k]$:** Treat $k$ as the independent variable.
2.  **Flip $h[k]$:** Obtain $h[-k]$.
3.  **Shift $h[-k]$:** Obtain $h[n - k]$ by shifting $h[-k]$ by $n$ units along the $k$-axis.
4.  **Multiply:** For a given value of $n$, multiply $x[k]$ and $h[n - k]$ point-by-point.
5.  **Sum:** Calculate the sum of the products over all values of $k$. This gives $y[n]$ for that specific $n$.
6.  **Repeat for different $n$:** Vary $n$ to find the complete output $y[n]$.

**Example:**
Let $x[n] = u[n]$ (unit step sequence) and $h[n] = a^n u[n]$ for $|a| < 1$.

$$ y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k] $$
$$ y[n] = \sum_{k=-\infty}^{\infty} u[k] a^{n-k} u[n - k] $$

The term $u[k]$ is 1 for $k \ge 0$ and 0 otherwise.
The term $u[n - k]$ is 1 for $n - k \ge 0$ (i.e., $k \le n$) and 0 otherwise.

For the sum to be non-zero, we need $k \ge 0$ AND $k \le n$.
*   **Case 1: $n < 0$**: The condition $k \le n$ and $k \ge 0$ cannot be simultaneously met, so the summation is over an empty set, and $y[n] = 0$.
*   **Case 2: $n \ge 0$**: The summation limits become from $k = 0$ to $k = n$.

$$ y[n] = \sum_{k=0}^{n} 1 \cdot a^{n-k} \quad \text{for } n \ge 0 $$
$$ y[n] = a^n \sum_{k=0}^{n} a^{-k} $$
$$ y[n] = a^n \sum_{k=0}^{n} (a^{-1})^k $$

This is a geometric series. Let's rewrite it slightly:
$$ y[n] = \sum_{k=0}^{n} a^{n-k} = a^n + a^{n-1} + \dots + a^1 + a^0 $$
$$ y[n] = a^0 + a^1 + \dots + a^{n-1} + a^n $$

This is a finite geometric series with first term $a^0 = 1$, common ratio $a$, and $n+1$ terms.
The sum is given by $\frac{1 - a^{n+1}}{1 - a}$.

Therefore, $y[n] = \frac{1 - a^{n+1}}{1 - a}$ for $n \ge 0$.
So, $y[n] = \left(\frac{1 - a^{n+1}}{1 - a}\right)u[n]$.

**(Refer to Ogata, Chapter 2, for detailed examples and graphical methods for discrete-time systems.)**

---

### 4. Important Points to Remember

*   **Impulse Response is Key:** The impulse response $h(t)$ or $h[n]$ completely characterizes an LTI system.
*   **Convolution is the Link:** Convolution is the mathematical operation that connects the input, impulse response, and output of an LTI system.
*   **Graphical Method:** The graphical interpretation of convolution (flipping, shifting, multiplying, and integrating/summing) is crucial for understanding and often for hand calculations, especially for simple signals and systems.
*   **System Causality and Stability:** The properties of the impulse response (e.g., causal systems have $h(t)=0$ for $t<0$ or $h[n]=0$ for $n<0$) and stability conditions (e.g., $\int_{-\infty}^{\infty}|h(t)|dt < \infty$) are closely related to convolution and will be explored in later modules.
*   **Continuous vs. Discrete:** Be mindful of whether you are dealing with continuous-time (integral) or discrete-time (sum) convolution.

---

### 5. Practice Questions

**Question 1 (Continuous-Time):**
Calculate the convolution of $x(t) = e^{-2t}u(t)$ and $h(t) = u(t-1)$.

**Question 2 (Discrete-Time):**
Calculate the convolution of $x[n] = \{1, 2, 1\}$ (where the first element is at $n=0$) and $h[n] = \{1, -1\}$. Assume the sequences are zero outside the given values.

**Question 3 (Conceptual):**
What does the commutative property of convolution imply about the behavior of LTI systems?

---

### 6. Answers to Practice Questions

**Answer 1:**
$$ y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$
$$ y(t) = \int_{-\infty}^{\infty} e^{-2\tau}u(\tau) u(t - \tau - 1) d\tau $$

Conditions for non-zero integral:
*   $\tau \ge 0$ (from $u(\tau)$)
*   $t - \tau - 1 \ge 0 \implies \tau \le t - 1$ (from $u(t - \tau - 1)$)

So, we need $0 \le \tau \le t - 1$. This requires $t - 1 \ge 0$, or $t \ge 1$.

For $t \ge 1$:
$$ y(t) = \int_{0}^{t-1} e^{-2\tau} d\tau $$
$$ y(t) = \left[ \frac{e^{-2\tau}}{-2} \right]_{0}^{t-1} $$
$$ y(t) = \frac{e^{-2(t-1)}}{-2} - \frac{e^{0}}{-2} $$
$$ y(t) = \frac{e^{-2t+2}}{-2} - \frac{1}{-2} $$
$$ y(t) = -\frac{1}{2}e^{-2t+2} + \frac{1}{2} $$
$$ y(t) = \frac{1}{2}(1 - e^{-2(t-1)}) $$

Therefore, $y(t) = \frac{1}{2}(1 - e^{-2(t-1)})u(t-1)$.

**Answer 2:**
$x[n] = \{1, 2, 1\}$ for $n=0, 1, 2$ respectively.
$h[n] = \{1, -1\}$ for $n=0, 1$ respectively.

Let's use the sum $y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$.

*   **$n=0$**: $y[0] = \sum_{k=-\infty}^{\infty} x[k] h[-k]$
    *   Non-zero terms: $x[0]h[0]$.
    *   $y[0] = x[0]h[0] = (1)(1) = 1$.
*   **$n=1$**: $y[1] = \sum_{k=-\infty}^{\infty} x[k] h[1 - k]$
    *   Non-zero terms: $x[0]h[1]$, $x[1]h[0]$.
    *   $y[1] = x[0]h[1] + x[1]h[0] = (1)(-1) + (2)(1) = -1 + 2 = 1$.
*   **$n=2$**: $y[2] = \sum_{k=-\infty}^{\infty} x[k] h[2 - k]$
    *   Non-zero terms: $x[1]h[1]$, $x[2]h[0]$.
    *   $y[2] = x[1]h[1] + x[2]h[0] = (2)(-1) + (1)(1) = -2 + 1 = -1$.
*   **$n=3$**: $y[3] = \sum_{k=-\infty}^{\infty} x[k] h[3 - k]$
    *   Non-zero terms: $x[2]h[1]$.
    *   $y[3] = x[2]h[1] = (1)(-1) = -1$.
*   **For $n > 3$**: All terms will be zero because either $h[n-k]$ will be out of its defined range or $x[k]$ will be out of its defined range.

So, $y[n] = \{1, 1, -1, -1\}$ for $n=0, 1, 2, 3$ respectively.

**Answer 3:**
The commutative property ($x(t) * h(t) = h(t) * x(t)$ or $x[n] * h[n] = h[n] * x[n]$) implies that the order of the input signal and the system's impulse response does not affect the output. This means that if you swap the roles of the input and the impulse response, you would still get the same output. In essence, the output is determined by the "interaction" between the input signal and the system's characteristic behavior (impulse response), and this interaction is symmetric with respect to which one is considered the "input" and which is the "system".

---

This concludes Module 1's introduction to convolution. Understanding these operations is foundational for analyzing any LTI system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
