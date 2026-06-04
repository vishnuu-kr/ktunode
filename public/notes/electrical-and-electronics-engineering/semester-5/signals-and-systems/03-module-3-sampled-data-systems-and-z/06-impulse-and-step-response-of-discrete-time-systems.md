---
title: "Impulse and step response of discrete-time systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e0"
status: "completed"
scrapedAt: "2026-05-23T16:23:52.603Z"
---
# Signals and Systems: Module 3 - Sampled Data Systems and Z-Transform

## Topic: Impulse and Step Response of Discrete-Time Systems

This module focuses on understanding discrete-time systems by analyzing their responses to fundamental input signals: the impulse and the step. We will explore how these responses characterize system behavior and how to derive them using the Z-transform.

**Knowledge Level Alignment:**

*   **CO1 (K2):** Representing discrete-time signals (impulse and step) and performing operations to understand system response.
*   **CO3 (K3):** Representing discrete-time systems in the Z-domain and using it to analyze impulse and step responses.

---

### 1. Discrete-Time Signals: The Building Blocks

Understanding the impulse and step functions in the discrete-time domain is crucial for analyzing system responses.

#### 1.1 The Unit Impulse Sequence (Discrete)

*   **Definition:** The discrete-time unit impulse, denoted by $\delta[n]$, is a sequence that is zero everywhere except at $n=0$, where it has a value of 1.
    *   $\delta[n] = \begin{cases} 1 & n = 0 \\ 0 & n \neq 0 \end{cases}$

*   **Graphical Representation:**
    ```
    ^ x[n]
    |
    1 - *
    |   |
    --+----------------> n
      0
    ```

*   **Key Property (Sifting Property):** For any discrete-time signal $x[n]$, the following holds:
    *   $\sum_{n=-\infty}^{\infty} x[n]\delta[n-k] = x[k]$
    *   In simpler terms, multiplying a signal by a shifted impulse allows us to extract the value of the signal at the shift location.

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 2.1: "Discrete-Time Signals" - Introduces fundamental discrete-time signals including the impulse.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 1.2: "Discrete-Time Signals" - Similar coverage of basic discrete-time signals.

#### 1.2 The Unit Step Sequence (Discrete)

*   **Definition:** The discrete-time unit step, denoted by $u[n]$, is a sequence that is zero for $n < 0$ and 1 for $n \ge 0$.
    *   $u[n] = \begin{cases} 1 & n \ge 0 \\ 0 & n < 0 \end{cases}$

*   **Graphical Representation:**
    ```
    ^ x[n]
    |
    1 - *-----*-----*-----*-----> n
    |   |     |     |     |
    --+-----------------------> n
      0     1     2     3
    ```

*   **Relationship with the Impulse:** The unit step sequence can be expressed as the sum of impulses:
    *   $u[n] = \sum_{k=-\infty}^{n} \delta[k]$
    *   Conversely, the impulse can be expressed as the difference of consecutive step values:
    *   $\delta[n] = u[n] - u[n-1]$

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 2.1: "Discrete-Time Signals" - Discusses the unit step and its relation to the impulse.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 1.2: "Discrete-Time Signals" - Covers the unit step and its relationship with the impulse.

---

### 2. Discrete-Time Linear Time-Invariant (LTI) Systems

LTI systems are fundamental in signal processing and control. Their behavior is completely characterized by their impulse response.

#### 2.1 The Impulse Response

*   **Definition:** The impulse response of a discrete-time LTI system, denoted by $h[n]$, is the output of the system when the input is the unit impulse sequence $\delta[n]$.
    *   If input $x[n] = \delta[n]$, then output $y[n] = h[n]$.

*   **Significance:** The impulse response $h[n]$ completely characterizes an LTI system. Any output $y[n]$ of an LTI system can be obtained by the convolution of the input signal $x[n]$ with the system's impulse response $h[n]$.
    *   $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 3.1: "Impulse Response and Convolution" - This is a core chapter defining the impulse response and convolution.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 2.2: "Impulse Response and Convolution" - Similar foundational coverage.
    *   Ogata (2nd Ed.), Chapter 2: "Input Signals and System Response" - Discusses the impulse response and its role in characterizing system behavior.
    *   Nise (5th Ed.), Chapter 3: "Time Response of First-Order and Second-Order Systems" - While focused on continuous time, the underlying principles of system response to inputs like impulses are similar.

#### 2.2 The Step Response

*   **Definition:** The step response of a discrete-time LTI system, denoted by $s[n]$ (or $y_{step}[n]$), is the output of the system when the input is the unit step sequence $u[n]$.
    *   If input $x[n] = u[n]$, then output $y[n] = s[n]$.

*   **Relationship with Impulse Response:** The step response is the cumulative sum (or summation) of the impulse response.
    *   $s[n] = u[n] * h[n] = \sum_{k=-\infty}^{n} h[k]$
    *   This makes intuitive sense: the step input can be seen as a continuous sum of impulses. Therefore, the output to a step is the continuous sum of the outputs to each of these impulses.

*   **Relationship between Step and Impulse Response:**
    *   $h[n] = s[n] - s[n-1]$ (The impulse response is the difference of consecutive step response values).

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 3.1.3: "Step Response" - Discusses the step response and its relation to the impulse response.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 2.2.2: "Step Response" - Similar coverage.
    *   Ogata (2nd Ed.), Chapter 2: "Input Signals and System Response" - Explains the step response as a key indicator of system behavior.

---

### 3. Analyzing Responses Using the Z-Transform

The Z-transform provides a powerful algebraic tool to analyze discrete-time systems, especially their impulse and step responses.

#### 3.1 Z-Transform of the Impulse Sequence

*   **Definition:** The Z-transform of a sequence $x[n]$ is defined as:
    *   $X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n]z^{-n}$

*   **Z-Transform of $\delta[n]$:**
    *   $H(z) = Z\{\delta[n]\} = \sum_{n=-\infty}^{\infty} \delta[n]z^{-n}$
    *   Since $\delta[n]$ is zero for $n \neq 0$, the summation only has a non-zero term at $n=0$.
    *   $H(z) = \delta[0]z^{-0} = 1 \times 1 = 1$

*   **Important Note:** The Z-transform of the impulse response $h[n]$ is called the **system function** or **transfer function**, often denoted as $H(z)$.

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 5.1: "The Z-Transform" - Introduces the definition and properties of the Z-transform.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 5.1: "The Z-Transform" - Similar foundational coverage.
    *   Proakis & Manolakis (4th Ed.), Chapter 2: "The Z-Transform" - Provides a comprehensive treatment of the Z-transform.

#### 3.2 Z-Transform of the Step Sequence

*   **Z-Transform of $u[n]$:**
    *   $U(z) = Z\{u[n]\} = \sum_{n=0}^{\infty} 1 \cdot z^{-n}$ (since $u[n]=1$ for $n \ge 0$)
    *   This is a geometric series: $1 + z^{-1} + z^{-2} + z^{-3} + \dots$
    *   For $|z^{-1}| < 1$ (i.e., $|z| > 1$), the sum converges to:
    *   $U(z) = \frac{1}{1-z^{-1}} = \frac{z}{z-1}$, for $|z| > 1$.

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 5.2: "Properties of the Z-Transform" - Includes the transform of the unit step.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 5.2: "Properties of the Z-Transform" - Similar coverage.

#### 3.3 Z-Transform Domain Analysis of Responses

Given the system function $H(z)$ and the Z-transform of the input $X(z)$, the Z-transform of the output $Y(z)$ is given by:
*   $Y(z) = X(z) H(z)$

##### 3.3.1 Impulse Response in Z-Domain

*   If the input is $\delta[n]$, then $X(z) = Z\{\delta[n]\} = 1$.
*   The output's Z-transform is $Y(z) = 1 \cdot H(z) = H(z)$.
*   Therefore, the impulse response $h[n]$ is the inverse Z-transform of the system function $H(z)$:
    *   $h[n] = Z^{-1}\{H(z)\}$

##### 3.3.2 Step Response in Z-Domain

*   If the input is $u[n]$, then $X(z) = Z\{u[n]\} = \frac{z}{z-1}$ (for $|z|>1$).
*   The output's Z-transform is $Y(z) = U(z) H(z) = \frac{z}{z-1} H(z)$.
*   The step response $s[n]$ is the inverse Z-transform of $Y(z)$:
    *   $s[n] = Z^{-1}\left\{\frac{z}{z-1} H(z)\right\}$

*   **Textbook Reference:**
    *   Haykin & Van Veen (2nd Ed.), Chapter 6.2: "Discrete-Time Systems: Analysis with the Z-Transform" - Covers how to find the output for various inputs using the Z-transform.
    *   Oppenheim, Willsky & Nawab (2nd Ed.), Chapter 5.5: "The Inverse Z-Transform" and Chapter 7: "System Analysis in the z-Domain" - Explains the inverse transform and its use in system analysis.
    *   Ogata (2nd Ed.), Chapter 10: "Introduction to State-Space Techniques" - While state-space is covered, earlier chapters might touch on Z-transform analysis for time-domain responses.

---

### 4. Examples

Let's consider a simple discrete-time LTI system described by its impulse response.

#### Example 3.1: First-Order System

Consider an LTI system with impulse response $h[n] = a^n u[n]$, where $|a| < 1$ for stability.

**Step 1: Find the System Function $H(z)$**
Using the Z-transform definition for a geometric series:
$H(z) = Z\{a^n u[n]\} = \sum_{n=0}^{\infty} a^n z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$
This is a geometric series with first term 1 and common ratio $az^{-1}$. It converges for $|az^{-1}| < 1$, or $|z| > |a|$.
$H(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}$, for $|z| > |a|$.

**Step 2: Determine the Impulse Response**
The impulse response is $h[n] = a^n u[n]$ by definition, which we obtained by finding $H(z)$ and then applying the inverse Z-transform.

**Step 3: Determine the Step Response**
Input $x[n] = u[n]$, so $X(z) = \frac{z}{z-1}$.
The output in the Z-domain is:
$Y(z) = X(z) H(z) = \frac{z}{z-1} \cdot \frac{z}{z-a} = \frac{z^2}{(z-1)(z-a)}$

To find $y[n]$ (the step response), we need to perform partial fraction expansion and inverse Z-transform.
Let's expand $\frac{Y(z)}{z}$:
$\frac{Y(z)}{z} = \frac{z}{(z-1)(z-a)} = \frac{A}{z-1} + \frac{B}{z-a}$
$z = A(z-a) + B(z-1)$

Set $z=1$: $1 = A(1-a) \Rightarrow A = \frac{1}{1-a}$
Set $z=a$: $a = B(a-1) \Rightarrow B = \frac{a}{a-1} = -\frac{a}{1-a}$

So, $\frac{Y(z)}{z} = \frac{1}{1-a} \frac{1}{z-1} - \frac{a}{1-a} \frac{1}{z-a}$
$Y(z) = \frac{1}{1-a} \frac{z}{z-1} - \frac{a}{1-a} \frac{z}{z-a}$

Now, take the inverse Z-transform. Recall that $Z^{-1}\left\{\frac{z}{z-p}\right\} = p^n u[n]$.
$y[n] = Z^{-1}\{Y(z)\} = \frac{1}{1-a} a^n u[n] - \frac{a}{1-a} a^n u[n]$  (This is incorrect, should be $Z^{-1}\left\{\frac{z}{z-p}\right\} = p^n u[n]$)
Let's recheck the partial fractions on Y(z)/z:
$Y(z)/z = \frac{z}{(z-1)(z-a)} = \frac{1}{1-a} \frac{1}{z-1} + \frac{a}{a-1} \frac{1}{z-a}$
$Y(z) = \frac{1}{1-a} \frac{z}{z-1} + \frac{a}{a-1} \frac{z}{z-a}$

$y[n] = \frac{1}{1-a} (1)^n u[n] + \frac{a}{a-1} a^n u[n]$
$y[n] = \frac{1}{1-a} u[n] + \frac{a}{a-1} a^n u[n]$
$y[n] = \frac{1}{1-a} u[n] - \frac{a}{1-a} a^n u[n]$
$y[n] = \frac{1 - a \cdot a^n}{1-a} u[n] = \frac{1 - a^{n+1}}{1-a} u[n]$

**Step 4: Verify the relationship $s[n] = \sum_{k=-\infty}^{n} h[k]$**
$s[n] = \sum_{k=-\infty}^{n} a^k u[k] = \sum_{k=0}^{n} a^k$ (for $n \ge 0$)
This is a finite geometric series sum:
$\sum_{k=0}^{n} a^k = \frac{1 - a^{n+1}}{1-a}$ (for $a \neq 1$)

Thus, the step response is $s[n] = \frac{1 - a^{n+1}}{1-a} u[n]$. This matches our Z-transform result.

**Important Points for First-Order System:**
*   If $a=1$, $h[n] = u[n]$, $H(z) = \frac{z}{z-1}$ (an integrator). Its step response would be $y[n] = (n+1)u[n]$.
*   If $|a| < 1$, the system is stable. As $n \to \infty$, $a^n \to 0$, so $s[n] \to \frac{1}{1-a}$. This is the steady-state value of the step response.

#### Example 3.2: System with a Difference Equation

Consider a system described by the difference equation:
$y[n] - \frac{1}{2}y[n-1] = x[n]$

**Step 1: Find the System Function $H(z)$**
Take the Z-transform of both sides, assuming zero initial conditions:
$Z\{y[n]\} - \frac{1}{2}Z\{y[n-1]\} = Z\{x[n]\}$
$Y(z) - \frac{1}{2}(z^{-1}Y(z) + y[-1]) = X(z)$
Assuming $y[-1]=0$:
$Y(z) - \frac{1}{2}z^{-1}Y(z) = X(z)$
$Y(z)(1 - \frac{1}{2}z^{-1}) = X(z)$
$H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - \frac{1}{2}z^{-1}} = \frac{z}{z-\frac{1}{2}}$
The region of convergence (ROC) is typically $|z| > \frac{1}{2}$ for a causal system.

**Step 2: Determine the Impulse Response**
The impulse response $h[n]$ is the inverse Z-transform of $H(z)$.
$h[n] = Z^{-1}\left\{\frac{z}{z-\frac{1}{2}}\right\}$
Using the standard pair $Z^{-1}\left\{\frac{z}{z-p}\right\} = p^n u[n]$, we get:
$h[n] = \left(\frac{1}{2}\right)^n u[n]$

**Step 3: Determine the Step Response**
Input $x[n] = u[n]$, so $X(z) = \frac{z}{z-1}$.
$Y(z) = X(z)H(z) = \frac{z}{z-1} \cdot \frac{z}{z-\frac{1}{2}} = \frac{z^2}{(z-1)(z-\frac{1}{2})}$

Partial fraction expansion of $\frac{Y(z)}{z}$:
$\frac{Y(z)}{z} = \frac{z}{(z-1)(z-\frac{1}{2})} = \frac{A}{z-1} + \frac{B}{z-\frac{1}{2}}$
$z = A(z-\frac{1}{2}) + B(z-1)$

Set $z=1$: $1 = A(1-\frac{1}{2}) = A(\frac{1}{2}) \Rightarrow A = 2$
Set $z=\frac{1}{2}$: $\frac{1}{2} = B(\frac{1}{2}-1) = B(-\frac{1}{2}) \Rightarrow B = -1$

So, $\frac{Y(z)}{z} = \frac{2}{z-1} - \frac{1}{z-\frac{1}{2}}$
$Y(z) = \frac{2z}{z-1} - \frac{z}{z-\frac{1}{2}}$

Taking the inverse Z-transform:
$y[n] = Z^{-1}\{Y(z)\} = 2(1)^n u[n] - \left(\frac{1}{2}\right)^n u[n]$
$y[n] = \left(2 - \left(\frac{1}{2}\right)^n\right) u[n]$

This is the step response $s[n]$.

**Important Points for Difference Equation System:**
*   The system is stable because the pole of $H(z)$ is at $z=\frac{1}{2}$, and $|\frac{1}{2}| < 1$.
*   As $n \to \infty$, $(\frac{1}{2})^n \to 0$. So, the step response approaches a steady-state value of $y_{ss} = 2$. This matches the expected steady-state for a stable system with a DC gain of $H(1) = \frac{1}{1 - 1/2} = 2$.

---

### 5. Practice Questions and Exercises

**(K2, K3 Alignment)**

1.  **Impulse Sequence:** Sketch the discrete-time unit impulse sequence $\delta[n-2]$.
    *   **Answer:** A single pulse of height 1 at $n=2$.

2.  **Step Sequence:** Sketch the discrete-time unit step sequence $u[n-1]$.
    *   **Answer:** A sequence of value 0 for $n<1$ and value 1 for $n \ge 1$.

3.  **Convolution:** A system has an impulse response $h[n] = \{1, 2, 1\}$ for $n=0, 1, 2$ respectively (i.e., $h[0]=1, h[1]=2, h[2]=1$, and $h[n]=0$ otherwise). If the input is $x[n] = \{1, 1\}$ for $n=0, 1$, find the output $y[n]$ using convolution.
    *   **Answer:**
        $y[0] = x[0]h[0] = 1 \times 1 = 1$
        $y[1] = x[0]h[1] + x[1]h[0] = (1 \times 2) + (1 \times 1) = 3$
        $y[2] = x[0]h[2] + x[1]h[1] = (1 \times 1) + (1 \times 2) = 3$
        $y[3] = x[1]h[2] = 1 \times 1 = 1$
        So, $y[n] = \{1, 3, 3, 1\}$ for $n=0, 1, 2, 3$.

4.  **Z-Transform of Impulse Response:** Find the Z-transform of the impulse response $h[n] = 3^n u[n]$.
    *   **Answer:** $H(z) = \frac{z}{z-3}$, for $|z|>3$.

5.  **Z-Transform of Step Response:** A system has $H(z) = \frac{1}{1-0.5z^{-1}}$. Find its step response.
    *   **Answer:**
        $H(z) = \frac{z}{z-0.5}$
        $X(z) = \frac{z}{z-1}$
        $Y(z) = H(z)X(z) = \frac{z}{z-0.5} \cdot \frac{z}{z-1} = \frac{z^2}{(z-0.5)(z-1)}$
        Partial fractions of $\frac{Y(z)}{z}$:
        $\frac{z}{(z-0.5)(z-1)} = \frac{A}{z-0.5} + \frac{B}{z-1}$
        $z = A(z-1) + B(z-0.5)$
        $z=1 \Rightarrow 1 = B(0.5) \Rightarrow B=2$
        $z=0.5 \Rightarrow 0.5 = A(-0.5) \Rightarrow A=-1$
        $Y(z) = \frac{-z}{z-0.5} + \frac{2z}{z-1}$
        $y[n] = - (0.5)^n u[n] + 2 (1)^n u[n] = (2 - (0.5)^n) u[n]$.

6.  **Relating Step and Impulse Response:** If the step response of a system is $s[n] = \{1, 1, 1, \dots\}$ for $n \ge 0$, find its impulse response $h[n]$.
    *   **Answer:** $h[n] = s[n] - s[n-1]$.
        $h[0] = s[0] - s[-1] = 1 - 0 = 1$
        $h[1] = s[1] - s[0] = 1 - 1 = 0$
        $h[2] = s[2] - s[1] = 1 - 1 = 0$
        So, $h[n] = \delta[n]$. This is an all-pass system.

---

### 6. Important Points to Remember

*   **Impulse Response $h[n]$:** Defines the output of an LTI system to a unit impulse input. It fully characterizes the system.
*   **Step Response $s[n]$:** Defines the output of an LTI system to a unit step input. It's the cumulative sum of the impulse response.
*   **Convolution:** The fundamental operation to find the output of an LTI system: $y[n] = x[n] * h[n]$.
*   **Z-Transform:** Transforms time-domain sequences into frequency-domain functions, simplifying analysis.
*   **System Function $H(z)$:** The Z-transform of the impulse response $h[n]$.
*   **Output in Z-Domain:** $Y(z) = X(z)H(z)$.
*   **Impulse Response from $H(z)$:** $h[n] = Z^{-1}\{H(z)\}$.
*   **Step Response from $H(z)$:** $s[n] = Z^{-1}\{ \frac{z}{z-1} H(z) \}$.
*   **Stability:** For causal LTI systems, stability is related to the locations of poles of $H(z)$. All poles must lie inside the unit circle for stability.
*   **Steady-State Response:** For stable systems, the step response typically converges to a constant value as $n \to \infty$. This steady-state value is $H(1)$ (the DC gain of the system).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Further Reading and Textbook Cross-References

*   **Haykin & Van Veen:** Chapters 3, 5, and 6 are highly relevant for impulse/step responses, convolution, and Z-transform analysis of discrete-time systems.
*   **Oppenheim, Willsky & Nawab:** Chapters 2 and 5 provide excellent foundations on convolution and Z-transforms, crucial for understanding system responses. Chapter 7 expands on system analysis in the Z-domain.
*   **Ogata:** Chapter 2 in "Discrete Time Control Systems" is particularly relevant for understanding input signals and system responses in a control systems context.
*   **Nise:** While primarily on continuous-time systems, chapters on time response (e.g., Chapter 3) can offer conceptual parallels for understanding how systems react to inputs.

This concludes the study notes for Impulse and Step Response of Discrete-Time Systems. Mastering these concepts is fundamental for analyzing and designing discrete-time signal processing and control systems.