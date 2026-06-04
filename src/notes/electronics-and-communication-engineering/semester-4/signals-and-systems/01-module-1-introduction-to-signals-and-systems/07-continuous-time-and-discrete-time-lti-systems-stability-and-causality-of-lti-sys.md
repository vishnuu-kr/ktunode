---
title: "Continuous time and discrete time LTI systems-Stability and causality 
of LTI systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe516"
status: "completed"
scrapedAt: "2026-05-23T17:52:21.262Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Continuous-Time and Discrete-Time LTI Systems - Stability and Causality

This module introduces the fundamental concepts of Linear Time-Invariant (LTI) systems, focusing on their classification as continuous-time or discrete-time, and exploring the crucial properties of stability and causality.

---

### **Learning Outcomes Covered in this Topic:**

*   **LO1:** Differentiate between continuous-time and discrete-time signals and systems.
*   **LO2:** Understand the concept of linearity and time-invariance as properties of systems.
*   **LO3:** Define and identify stable LTI systems in both continuous-time and discrete-time domains.
*   **LO4:** Define and identify causal LTI systems in both continuous-time and discrete-time domains.
*   **LO5:** Relate stability and causality to the impulse response of LTI systems.

---

### **Course Outcomes Aligned with this Topic:**

*   **CO1:** Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals. (Knowledge Level: K2) - *This topic directly contributes to classifying systems.*
*   **CO2:** Determine the stability and causality of LTI systems using convolution operations. (Knowledge Level: K3) - *This topic is foundational for understanding and applying these concepts.*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **Textbook References:**

*   **Oppenheim & Willsky (2/e, 2015):** Chapters 1 & 2 (Introduction to Signals and Systems, Linear Time-Invariant Systems)
*   **Haykin (2/e, 2021):** Chapters 1 & 2 (Introduction to Signals and Systems, Time-Domain Analysis of LTI Systems)

### **Reference Book References:**

*   **Anand Kumar (3/e, 2013):** Chapters 1 & 2
*   **Lathi (2/e, 2009):** Chapters 1 & 2
*   **Ziemer (4/e, 2013):** Chapters 1 & 2
*   **Ambardar (2/e, 2013):** Chapters 1 & 2
*   **Apte (1/e, 2016):** Chapters 1 & 2

---

## 1. Introduction to Systems

A **system** can be viewed as a process that takes an input signal and produces an output signal. Mathematically, a system can be represented as an operator $\mathcal{T}\{\cdot\}$ that transforms an input signal $x(t)$ (or $x[n]$) to an output signal $y(t)$ (or $y[n]$):

$y(t) = \mathcal{T}\{x(t)\}$
$y[n] = \mathcal{T}\{x[n]\}$

### **1.1. Classification of Systems**

Systems can be classified based on several properties. In this topic, we focus on two key classifications:

*   **Continuous-Time vs. Discrete-Time Systems:**
    *   **Continuous-Time System:** The input and output signals are functions of a continuous variable, typically time $t$.
        *   *Example:* An RC circuit where voltage varies continuously with time.
        *   *Notation:* $x(t) \rightarrow \mathcal{T} \rightarrow y(t)$
    *   **Discrete-Time System:** The input and output signals are functions of a discrete variable, typically an integer index $n$.
        *   *Example:* A digital filter processing sampled audio data.
        *   *Notation:* $x[n] \rightarrow \mathcal{T} \rightarrow y[n]$

*   **Other important classifications (briefly mentioned as they form the basis for LTI):**
    *   **Memoryless vs. Systems with Memory:** A system is memoryless if its output at any given time depends only on the input at that same time. Otherwise, it has memory.
    *   **Causal vs. Non-causal Systems:** (Discussed in detail later)
    *   **Linear vs. Non-linear Systems:** (Discussed below)
    *   **Time-Invariant vs. Time-Varying Systems:** (Discussed below)
    *   **Stable vs. Unstable Systems:** (Discussed in detail later)
    *   **Invertible vs. Non-invertible Systems:**
    *   **Symmetric vs. Anti-symmetric Systems:**

---

## 2. Linear Time-Invariant (LTI) Systems

LTI systems are a fundamental class of systems that possess the properties of linearity and time-invariance. These properties simplify analysis significantly.

### **2.1. Linearity**

A system $\mathcal{T}\{\cdot\}$ is **linear** if it satisfies the principle of superposition, which consists of two properties:

1.  **Additivity:** If $x_1(t) \rightarrow y_1(t)$ and $x_2(t) \rightarrow y_2(t)$, then $x_1(t) + x_2(t) \rightarrow y_1(t) + y_2(t)$.
    *   In discrete-time: If $x_1[n] \rightarrow y_1[n]$ and $x_2[n] \rightarrow y_2[n]$, then $x_1[n] + x_2[n] \rightarrow y_1[n] + y_2[n]$.
2.  **Homogeneity (or Scaling):** If $x(t) \rightarrow y(t)$, then $ax(t) \rightarrow ay(t)$ for any scalar $a$.
    *   In discrete-time: If $x[n] \rightarrow y[n]$, then $ax[n] \rightarrow ay[n]$ for any scalar $a$.

**Combined Property of Linearity:** For any input signals $x_1(t), x_2(t)$ and scalars $a, b$:
$\mathcal{T}\{ax_1(t) + bx_2(t)\} = a\mathcal{T}\{x_1(t)\} + b\mathcal{T}\{x_2(t)\}$

**Example (Linear System):**
Consider the system $y(t) = 2x(t)$.
1.  **Additivity:** If $x_1(t) \rightarrow y_1(t) = 2x_1(t)$ and $x_2(t) \rightarrow y_2(t) = 2x_2(t)$, then $y_1(t) + y_2(t) = 2x_1(t) + 2x_2(t) = 2(x_1(t) + x_2(t))$. The output for $x_1(t) + x_2(t)$ is $2(x_1(t) + x_2(t))$. Thus, additivity holds.
2.  **Homogeneity:** If $x(t) \rightarrow y(t) = 2x(t)$, then $ay(t) = a(2x(t)) = 2(ax(t))$. The output for $ax(t)$ is $2(ax(t))$. Thus, homogeneity holds.
Since both properties hold, the system $y(t) = 2x(t)$ is linear.

**Example (Non-linear System):**
Consider the system $y(t) = x^2(t)$.
1.  **Additivity:** $y_1(t) + y_2(t) = x_1^2(t) + x_2^2(t)$. However, the output for $x_1(t) + x_2(t)$ is $(x_1(t) + x_2(t))^2 = x_1^2(t) + 2x_1(t)x_2(t) + x_2^2(t)$. Since $x_1^2(t) + x_2^2(t) \neq x_1^2(t) + 2x_1(t)x_2(t) + x_2^2(t)$ in general, additivity does not hold.
The system is non-linear.

### **2.2. Time-Invariance**

A system $\mathcal{T}\{\cdot\}$ is **time-invariant** if a time shift in the input signal results in the same time shift in the output signal.

*   If $x(t) \rightarrow y(t)$, then for any delay $\tau$, $x(t - \tau) \rightarrow y(t - \tau)$.
*   In discrete-time: If $x[n] \rightarrow y[n]$, then for any integer delay $m$, $x[n - m] \rightarrow y[n - m]$.

**Example (Time-Invariant System):**
Consider the system $y(t) = x(t-2)$.
Let $x_1(t)$ be an input signal, and let $y_1(t) = x_1(t-2)$.
Now, consider a delayed input $x_1(t - \tau)$. The output of the system for this delayed input is $x_1((t - \tau) - 2)$.
The delayed output is $y_1(t - \tau) = x_1((t - \tau) - 2)$.
Since the output for the delayed input is equal to the delayed output, the system $y(t) = x(t-2)$ is time-invariant.

**Example (Time-Varying System):**
Consider the system $y(t) = tx(t)$.
Let $x_1(t)$ be an input signal, and let $y_1(t) = tx_1(t)$.
Now, consider a delayed input $x_1(t - \tau)$. The output of the system for this delayed input is $t x_1(t - \tau)$.
The delayed output is $y_1(t - \tau) = (t - \tau)x_1(t - \tau)$.
Since $t x_1(t - \tau) \neq (t - \tau)x_1(t - \tau)$ in general, the system $y(t) = tx(t)$ is time-varying.

### **2.3. Linear Time-Invariant (LTI) Systems**

A system is LTI if it is both linear and time-invariant. The behavior of LTI systems is completely characterized by their **impulse response**.

*   **Impulse Response:** The output of an LTI system when the input is an impulse function.
    *   **Continuous-time impulse:** Dirac delta function $\delta(t)$.
    *   **Discrete-time impulse:** Kronecker delta function $\delta[n]$.

    *   For a CT LTI system: $h(t) = \mathcal{T}\{\delta(t)\}$
    *   For a DT LTI system: $h[n] = \mathcal{T}\{\delta[n]\}$

### **2.4. Representation of LTI Systems**

The output of an LTI system can be obtained by convolving the input signal with the system's impulse response.

*   **Continuous-Time LTI Systems:**
    The output $y(t)$ is given by the convolution integral:
    $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau$

*   **Discrete-Time LTI Systems:**
    The output $y[n]$ is given by the convolution sum:
    $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$

**Key Insight (Oppenheim & Willsky, Ch 2):** Linearity and time-invariance allow us to express any input signal as a sum of scaled and shifted impulses (or delta functions). Since the system is linear and time-invariant, the output to this sum of impulses is the sum of the scaled and shifted impulse responses, which leads directly to the convolution integral/sum.

---

## 3. Stability of LTI Systems

The stability of a system refers to its behavior in response to a bounded input.

*   **Definition:** An LTI system is **BIBO (Bounded Input, Bounded Output) stable** if every bounded input signal produces a bounded output signal.
    *   **Bounded Input:** A signal $x(t)$ is bounded if $|x(t)| \le M_x < \infty$ for all $t$.
    *   **Bounded Output:** A signal $y(t)$ is bounded if $|y(t)| \le M_y < \infty$ for all $t$.

### **3.1. Condition for BIBO Stability**

The BIBO stability of an LTI system is entirely determined by its impulse response $h(t)$ or $h[n]$.

*   **Continuous-Time LTI Systems:**
    An LTI system is BIBO stable if and only if its impulse response $h(t)$ is absolutely integrable:
    $\int_{-\infty}^{\infty} |h(t)| dt < \infty$

    **Intuition (Oppenheim & Willsky):** If the impulse response is absolutely integrable, it means that the system's "memory" (how long and how strongly it responds to an impulse) is limited. A bounded input, when convolved with such an impulse response, will result in a bounded output. If the integral diverges, even a small bounded input can lead to an exponentially growing output.

*   **Discrete-Time LTI Systems:**
    An LTI system is BIBO stable if and only if its impulse response $h[n]$ is absolutely summable:
    $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$

    **Intuition (Haykin):** Similar to the continuous-time case, absolute summability ensures that the system's response to any single impulse is finite and that the cumulative effect of a bounded input over time remains bounded.

### **3.2. Examples of Stability**

**Example 1 (Stable CT System):**
$h(t) = e^{-at} u(t)$, where $a > 0$.
$\int_{-\infty}^{\infty} |h(t)| dt = \int_{-\infty}^{\infty} |e^{-at} u(t)| dt = \int_{0}^{\infty} e^{-at} dt = [-\frac{1}{a}e^{-at}]_{0}^{\infty} = 0 - (-\frac{1}{a}) = \frac{1}{a}$.
Since $\frac{1}{a} < \infty$ for $a > 0$, this system is stable.

**Example 2 (Unstable CT System):**
$h(t) = e^{at} u(t)$, where $a > 0$.
$\int_{-\infty}^{\infty} |h(t)| dt = \int_{0}^{\infty} e^{at} dt = [\frac{1}{a}e^{at}]_{0}^{\infty} = \infty$.
This system is unstable. A bounded input like $x(t)=1$ for all $t$ would produce an output $y(t) = \int_0^t e^{a\tau} d\tau = \frac{1}{a}(e^{at}-1)$, which grows unboundedly with time.

**Example 3 (Stable DT System):**
$h[n] = a^n u[n]$, where $|a| < 1$.
$\sum_{n=-\infty}^{\infty} |h[n]| = \sum_{n=0}^{\infty} |a^n| = \sum_{n=0}^{\infty} |a|^n$. This is a geometric series.
If $|a| < 1$, the sum converges to $\frac{1}{1-|a|} < \infty$. So, this system is stable.

**Example 4 (Unstable DT System):**
$h[n] = a^n u[n]$, where $|a| \ge 1$.
If $|a| \ge 1$, the geometric series $\sum_{n=0}^{\infty} |a|^n$ diverges to $\infty$. So, this system is unstable. For instance, if $a=1$, $h[n] = u[n]$, and $\sum |h[n]| = \sum_{n=0}^{\infty} 1 = \infty$. An input $x[n]=1$ for all $n$ would produce an output $y[n] = \sum_{k=0}^n 1 = n+1$, which grows unboundedly.

---

## 4. Causality of LTI Systems

Causality is a property related to whether a system's output at a given time depends only on present and past input values, or also on future input values.

*   **Definition:** A system is **causal** if its output at any time $t_0$ (or $n_0$) depends only on the input values at times $t \le t_0$ (or $n \le n_0$). In other words, the system does not anticipate the future.
    *   A **non-causal** system's output at a given time depends on input values at future times.

### **4.1. Condition for Causality**

The causality of an LTI system is also determined by its impulse response.

*   **Continuous-Time LTI Systems:**
    An LTI system is causal if and only if its impulse response $h(t)$ is zero for all $t < 0$:
    $h(t) = 0$ for $t < 0$.

    **Intuition (Lathi):** The convolution integral $y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau$ can be rewritten as $y(t) = \int_{-\infty}^{\infty} x(t - \lambda) h(\lambda) d\lambda$. For the output $y(t)$ to depend only on $x(t)$ and past values of $x$, the impulse response $h(\lambda)$ must be zero for $\lambda > t$. More generally, for the system to be causal, $h(\lambda)$ must be zero for all negative $\lambda$. This is because $h(\lambda)$ represents the system's response at time $t$ to an impulse at time $t-\lambda$. If $\lambda$ is negative, the impulse occurred in the "future" relative to time $t$.

*   **Discrete-Time LTI Systems:**
    An LTI system is causal if and only if its impulse response $h[n]$ is zero for all $n < 0$:
    $h[n] = 0$ for $n < 0$.

    **Intuition (Apte):** In the discrete-time convolution sum $y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$, for the output $y[n]$ to depend only on $x[n]$ and past values $x[n-1], x[n-2], \dots$, the term $h[n-k]$ must be zero when $n-k < 0$, which means $k > n$. Alternatively, looking at $y[n] = \sum_{m=-\infty}^{\infty} x[n-m] h[m]$, for $y[n]$ to only depend on $x[n]$ and previous inputs $x[n-1], x[n-2], \dots$, the impulse response $h[m]$ must be zero for $m < 0$.

### **4.2. Examples of Causality**

**Example 1 (Causal CT System):**
$h(t) = e^{-at} u(t)$, where $a > 0$.
Since $h(t) = 0$ for $t < 0$, this system is causal.

**Example 2 (Non-causal CT System):**
$h(t) = e^{a(t-1)} u(t-1)$.
This system is causal as $h(t)=0$ for $t<1$.

Let's consider $h(t) = e^{-at}$ for all $t$. This system is non-causal because $h(t)$ is non-zero for $t < 0$.

**Example 3 (Causal DT System):**
$h[n] = a^n u[n]$, where $|a| < 1$.
Since $h[n] = 0$ for $n < 0$, this system is causal.

**Example 4 (Non-causal DT System):**
$h[n] = a^{n-1} u[n-1]$.
This system is causal as $h[n]=0$ for $n<1$.

Consider $h[n] = 1$ for $n = -1, 0, 1$ and $0$ otherwise.
Here, $h[-1] = 1 \neq 0$, so this system is non-causal. For example, if $x[n]$ is the input, the output $y[0] = \sum_{k=-1}^1 x[k]h[0-k] = x[0]h[0] + x[-1]h[1] + x[1]h[-1] = x[0](1) + x[-1](0) + x[1](1) = x[0] + x[1]$. The output at $n=0$ depends on the future input $x[1]$.

---

## 5. Interplay between Stability, Causality, and Impulse Response

**Important Points to Remember:**

*   **Causality is a requirement for most real-world systems.** It's generally impossible for a physical system to react to an event that hasn't happened yet.
*   **Stability is crucial for practical applications.** An unstable system is unusable as its output can grow infinitely large, leading to saturation or damage.
*   The impulse response $h(t)$ or $h[n]$ completely characterizes an LTI system.
*   **Causality condition:** $h(t)=0$ for $t<0$ (CT) or $h[n]=0$ for $n<0$ (DT).
*   **Stability condition:** $\int_{-\infty}^{\infty} |h(t)| dt < \infty$ (CT) or $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (DT).

**Combinations of Causality and Stability:**

| System Type                  | CT Impulse Response ($h(t)$)                                  | DT Impulse Response ($h[n]$)                                     |
| :--------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------- |
| **Causal & Stable**          | $h(t)=0$ for $t<0$ AND $\int_{0}^{\infty} |h(t)| dt < \infty$ | $h[n]=0$ for $n<0$ AND $\sum_{n=0}^{\infty} |h[n]| < \infty$ |
| **Causal & Unstable**        | $h(t)=0$ for $t<0$ AND $\int_{0}^{\infty} |h(t)| dt = \infty$ | $h[n]=0$ for $n<0$ AND $\sum_{n=0}^{\infty} |h[n]| = \infty$ |
| **Non-causal & Stable**      | $h(t) \neq 0$ for some $t<0$ AND $\int_{-\infty}^{\infty} |h(t)| dt < \infty$ | $h[n] \neq 0$ for some $n<0$ AND $\sum_{-\infty}^{\infty} |h[n]| < \infty$ |
| **Non-causal & Unstable**    | $h(t) \neq 0$ for some $t<0$ AND $\int_{-\infty}^{\infty} |h(t)| dt = \infty$ | $h[n] \neq 0$ for some $n<0$ AND $\sum_{-\infty}^{\infty} |h[n]| = \infty$ |

**Note:** For causal systems, the stability condition simplifies.
*   CT Causal Stability: $\int_{0}^{\infty} |h(t)| dt < \infty$
*   DT Causal Stability: $\sum_{n=0}^{\infty} |h[n]| < \infty$

**Example (Oppenheim & Willsky, Ch 2 Example):**
Consider a causal system with impulse response $h(t) = e^{-2t}u(t)$.
*   Causality: $h(t) = 0$ for $t < 0$, so it is causal.
*   Stability: $\int_{0}^{\infty} |e^{-2t}| dt = \int_{0}^{\infty} e^{-2t} dt = [-\frac{1}{2}e^{-2t}]_{0}^{\infty} = 0 - (-\frac{1}{2}) = \frac{1}{2}$. Since $\frac{1}{2} < \infty$, it is stable.
This system is causal and stable.

**Example (Haykin, Ch 2 Example):**
Consider a discrete-time system with impulse response $h[n] = (0.5)^{n-1} u[n-1]$.
*   Causality: $h[n] = 0$ for $n-1 < 0$, i.e., $n < 1$. So, $h[n]=0$ for $n<0$. It is causal.
*   Stability: $\sum_{n=-\infty}^{\infty} |h[n]| = \sum_{n=1}^{\infty} |(0.5)^{n-1}| = \sum_{m=0}^{\infty} (0.5)^m$ (let $m=n-1$). This is a geometric series with ratio $0.5 < 1$, so it converges to $\frac{1}{1-0.5} = 2$. Since $2 < \infty$, it is stable.
This system is causal and stable.

---

## 6. Practice Questions

**Question 1:**
For each of the following continuous-time impulse responses, determine if the system is causal and if it is stable.

a) $h(t) = \delta(t-2)$
b) $h(t) = e^{-t} u(t-1)$
c) $h(t) = \sin(2t) u(t)$
d) $h(t) = \frac{1}{t} u(t-1)$

**Question 2:**
For each of the following discrete-time impulse responses, determine if the system is causal and if it is stable.

a) $h[n] = (0.9)^n u[n+2]$
b) $h[n] = 3^n u[n-3]$
c) $h[n] = \cos(\frac{\pi}{4}n) \delta[n-2]$
d) $h[n] = (\frac{1}{2})^{|n|}$

**Question 3:**
Consider an LTI system described by the difference equation $y[n] - 0.5y[n-1] = x[n]$. Determine if this system is causal and stable. (Hint: You can analyze the impulse response, or consider the conditions for stability based on the system's pole locations, which will be covered in later modules, but try to reason it out using the concepts here).

---

## 7. Answers to Practice Questions

**Answer 1:**

a) $h(t) = \delta(t-2)$
   *   **Causality:** The impulse occurs at $t=2$. Since $h(t) \neq 0$ for $t<0$ is false (it's zero for $t<0$), it is causal. (More accurately, it is zero for $t<2$, and for a system to be causal, $h(t)$ must be zero for all $t<0$. $\delta(t-2)$ is zero for $t<2$, and thus for all $t<0$, so it's causal).
   *   **Stability:** $\int_{-\infty}^{\infty} |\delta(t-2)| dt$. The integral of the absolute value of a Dirac delta function is 1. Since $1 < \infty$, the system is stable.
   *   **Result:** Causal and Stable.

b) $h(t) = e^{-t} u(t-1)$
   *   **Causality:** $h(t) = 0$ for $t < 1$. Since $h(t)$ is non-zero for some $t < 0$ (e.g., $t=-1$), this statement is incorrect. The condition for causality is $h(t)=0$ for *all* $t<0$. Here, $h(t)$ is indeed $0$ for $t<1$, which includes all $t<0$. So, it is causal.
   *   **Stability:** $\int_{-\infty}^{\infty} |e^{-t} u(t-1)| dt = \int_{1}^{\infty} e^{-t} dt = [-e^{-t}]_{1}^{\infty} = 0 - (-e^{-1}) = e^{-1}$. Since $e^{-1} < \infty$, the system is stable.
   *   **Result:** Causal and Stable.

c) $h(t) = \sin(2t) u(t)$
   *   **Causality:** $h(t) = 0$ for $t < 0$, so it is causal.
   *   **Stability:** $\int_{-\infty}^{\infty} |\sin(2t) u(t)| dt = \int_{0}^{\infty} |\sin(2t)| dt$. The integral of $|\sin(2t)|$ from 0 to $\infty$ does not converge; it oscillates and does not decay. The area under $|\sin(2t)|$ in each period is constant, and there are infinitely many periods. So, $\int_{0}^{\infty} |\sin(2t)| dt = \infty$. The system is unstable.
   *   **Result:** Causal and Unstable.

d) $h(t) = \frac{1}{t} u(t-1)$
   *   **Causality:** $h(t) = 0$ for $t < 1$. This implies $h(t) = 0$ for all $t < 0$, so it is causal.
   *   **Stability:** $\int_{-\infty}^{\infty} |\frac{1}{t} u(t-1)| dt = \int_{1}^{\infty} \frac{1}{t} dt = [\ln|t|]_{1}^{\infty} = \ln(\infty) - \ln(1) = \infty$. The integral diverges, so the system is unstable.
   *   **Result:** Causal and Unstable.

**Answer 2:**

a) $h[n] = (0.9)^n u[n+2]$
   *   **Causality:** $h[n] = 0$ for $n+2 < 0$, i.e., $n < -2$. Since $h[n]$ is non-zero for $n=-1, 0, 1, \dots$, it is non-causal.
   *   **Stability:** $\sum_{n=-\infty}^{\infty} |(0.9)^n u[n+2]| = \sum_{n=-2}^{\infty} |0.9|^n$. This is a geometric series starting from $n=-2$. $\sum_{n=-2}^{\infty} (0.9)^n = (0.9)^{-2} + (0.9)^{-1} + (0.9)^{0} + (0.9)^{1} + \dots$ This sum diverges because the terms are growing as $n$ becomes more negative, or we can see it as $(0.9)^{-2} \sum_{n=0}^{\infty} (0.9)^n$ which is finite multiplied by a diverging sum from the negative side. More precisely, we can split it: $\sum_{n=-2}^{-1} (0.9)^n + \sum_{n=0}^{\infty} (0.9)^n$. The first sum is finite. The second sum is $\frac{1}{1-0.9} = 10$. However, $(0.9)^n$ for negative $n$ means $(1/0.9)^{-n}$ where $-n$ is positive, so these terms grow. For example, $(0.9)^{-1} = 1/0.9 = 1.11...$. Thus, the sum $\sum_{n=-2}^{\infty} (0.9)^n$ will diverge.
   *   **Result:** Non-causal and Unstable.

b) $h[n] = 3^n u[n-3]$
   *   **Causality:** $h[n] = 0$ for $n-3 < 0$, i.e., $n < 3$. Since $h[n]$ is non-zero for $n=0, 1, 2$, it is non-causal.
   *   **Stability:** $\sum_{n=-\infty}^{\infty} |3^n u[n-3]| = \sum_{n=3}^{\infty} 3^n$. This is a geometric series with ratio $3 > 1$, so it diverges to infinity. The system is unstable.
   *   **Result:** Non-causal and Unstable.

c) $h[n] = \cos(\frac{\pi}{4}n) \delta[n-2]$
   *   **Causality:** The impulse is at $n=2$. Since $h[n]=0$ for $n<0$, it is causal.
   *   **Stability:** $\sum_{n=-\infty}^{\infty} |\cos(\frac{\pi}{4}n) \delta[n-2]|$. This sum has only one non-zero term at $n=2$. The term is $|\cos(\frac{\pi}{4} \cdot 2) \cdot 1| = |\cos(\frac{\pi}{2})| = |0| = 0$. Since the sum is 0, which is finite, the system is stable.
   *   **Result:** Causal and Stable.

d) $h[n] = (\frac{1}{2})^{|n|}$
   *   **Causality:** $h[n] = (\frac{1}{2})^{|n|}$. Since $h[n]$ is non-zero for $n < 0$ (e.g., $h[-1] = (1/2)^{|-1|} = 1/2$), the system is non-causal.
   *   **Stability:** $\sum_{n=-\infty}^{\infty} |(\frac{1}{2})^{|n|}| = \sum_{n=-\infty}^{\infty} (\frac{1}{2})^{|n|} = \sum_{n=-\infty}^{-1} (\frac{1}{2})^{-n} + \sum_{n=0}^{\infty} (\frac{1}{2})^{n}$.
      The second sum is a geometric series: $\sum_{n=0}^{\infty} (\frac{1}{2})^{n} = \frac{1}{1 - 1/2} = 2$.
      The first sum: $\sum_{n=-\infty}^{-1} (\frac{1}{2})^{-n}$. Let $m = -n$. As $n \to -\infty$, $m \to \infty$. As $n \to -1$, $m \to 1$. So, $\sum_{m=1}^{\infty} (\frac{1}{2})^{m} = \sum_{m=0}^{\infty} (\frac{1}{2})^{m} - (\frac{1}{2})^0 = 2 - 1 = 1$.
      Total sum = $1 + 2 = 3$. Since $3 < \infty$, the system is stable.
   *   **Result:** Non-causal and Stable.

**Answer 3:**
The difference equation is $y[n] - 0.5y[n-1] = x[n]$.
This is a first-order Linear Difference Equation. For a causal LTI system described by a difference equation, if the system is causal, its impulse response $h[n]$ can be found.
We can find $h[n]$ by setting $x[n] = \delta[n]$ and $y[-1]=0$ (for causality).
$y[n] - 0.5y[n-1] = \delta[n]$.

For $n=0$: $y[0] - 0.5y[-1] = \delta[0] \implies y[0] - 0.5(0) = 1 \implies y[0] = 1$.
For $n=1$: $y[1] - 0.5y[0] = \delta[1] \implies y[1] - 0.5(1) = 0 \implies y[1] = 0.5$.
For $n=2$: $y[2] - 0.5y[1] = \delta[2] \implies y[2] - 0.5(0.5) = 0 \implies y[2] = 0.25$.
In general, $h[n] = y[n]$ for $n \ge 0$ and $h[n]=0$ for $n < 0$.
So, $h[n] = (0.5)^n u[n]$.

*   **Causality:** Since $h[n] = (0.5)^n u[n]$, we have $h[n] = 0$ for $n < 0$. Therefore, the system is causal.

*   **Stability:** We need to check if $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$.
    $\sum_{n=-\infty}^{\infty} |(0.5)^n u[n]| = \sum_{n=0}^{\infty} |0.5|^n = \sum_{n=0}^{\infty} (0.5)^n$.
    This is a geometric series with ratio $0.5$, which is less than 1. The sum converges to $\frac{1}{1 - 0.5} = \frac{1}{0.5} = 2$.
    Since the sum is finite, the system is stable.

*   **Result:** Causal and Stable.