---
title: "Characterization of LTI systems: Differential equation representation of continuous time LTI systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d6"
status: "completed"
scrapedAt: "2026-05-23T16:23:46.275Z"
---
# SIGNALS AND SYSTEMS - Module 2: Frequency Domain Characterization of Signals and Systems

## Topic: Characterization of LTI Systems: Differential Equation Representation of Continuous-Time LTI Systems

**Learning Outcomes:**

*   Understand how differential equations can be used to describe the behavior of continuous-time LTI systems.
*   Relate the differential equation representation to the impulse response of an LTI system.
*   Analyze the properties of LTI systems (e.g., causality, stability) from their differential equation representation.
*   Solve differential equations representing LTI systems to determine the system's output for a given input.
*   Connect the differential equation representation to the frequency domain analysis (Fourier Transform) of LTI systems.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Representing continuous-time systems via differential equations directly relates to understanding how systems behave in the time domain.
*   **CO2 (K3):** This topic lays the groundwork for moving from time-domain descriptions (differential equations) to frequency-domain descriptions (transfer functions via Fourier Transform), which is central to CO2.
*   **CO4 (K3):** Analyzing the stability of LTI systems is a key application of their differential equation representation.

---

### 1. Introduction to Continuous-Time LTI Systems and Differential Equations

Linear Time-Invariant (LTI) systems are a fundamental class of systems in signal processing and control theory. They possess two key properties:

*   **Linearity:** If $y_1(t)$ is the response to $x_1(t)$ and $y_2(t)$ is the response to $x_2(t)$, then the response to $ax_1(t) + bx_2(t)$ is $ay_1(t) + by_2(t)$ for any constants $a$ and $b$.
*   **Time-Invariance:** If $y(t)$ is the response to $x(t)$, then the response to $x(t-\tau)$ is $y(t-\tau)$ for any time shift $\tau$.

Many continuous-time LTI systems can be described by linear constant-coefficient differential equations. These equations relate the input signal $x(t)$ to the output signal $y(t)$ and its derivatives.

**Differential Equation Representation:**

A general form of a linear constant-coefficient differential equation for a continuous-time LTI system is:

$$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + b_{m-1} \frac{d^{m-1} x(t)}{dt^{m-1}} + \dots + b_1 \frac{dx(t)}{dt} + b_0 x(t)$$

Where:
*   $y(t)$ is the output signal.
*   $x(t)$ is the input signal.
*   $a_i$ and $b_j$ are constant coefficients.
*   $n$ is the order of the system (determined by the highest derivative of $y(t)$).
*   $m$ is the order of the input derivative term.

**Important Note:** For a causal LTI system, the output $y(t)$ at any time $t$ cannot depend on future values of the input $x(\tau)$ for $\tau > t$. This implies that $n \geq m$ for physically realizable causal systems. (Haykin & Van Veen, 2nd Ed., Chapter 3.3)

---

### 2. Relating Differential Equations to System Properties

The coefficients of the differential equation directly influence the system's behavior and properties.

#### 2.1 Causality

A system is causal if its output at any time $t$ depends only on the input at present and past times. In terms of the differential equation:

*   For a system to be causal, the output $y(t)$ should not depend on future values of $x(t)$.
*   If the highest derivative of the input ($m$) is greater than the highest derivative of the output ($n$), i.e., $m > n$, then to satisfy the equation, $y(t)$ would need to depend on future values of $x(t)$ and its derivatives. This implies a non-causal system.
*   Therefore, for a causal LTI system, we must have $n \geq m$.

**Example:**
*   $y(t) + ay(t) = bx(t)$ (First-order causal system, $n=1, m=0$)
*   $\frac{dy(t)}{dt} + ay(t) = b\frac{dx(t)}{dt} + c x(t)$ (First-order causal system, $n=1, m=1$)
*   $\frac{dy(t)}{dt} + ay(t) = b\frac{d^2x(t)}{dt^2}$ (Non-causal system if not constrained, $n=1, m=2$)

#### 2.2 Stability

A system is BIBO (Bounded-Input, Bounded-Output) stable if every bounded input produces a bounded output. For LTI systems described by differential equations, stability is determined by the roots of the **characteristic equation**.

The characteristic equation is obtained by considering the homogeneous part of the differential equation (setting the input side to zero):

$$a_n \frac{d^n y_h(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y_h(t)}{dt^{n-1}} + \dots + a_1 \frac{dy_h(t)}{dt} + a_0 y_h(t) = 0$$

Assume a solution of the form $y_h(t) = e^{st}$. Substituting this into the homogeneous equation gives:

$$a_n s^n e^{st} + a_{n-1} s^{n-1} e^{st} + \dots + a_1 s e^{st} + a_0 e^{st} = 0$$

Since $e^{st} \neq 0$, we can divide by $e^{st}$ to get the characteristic equation:

$$a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$$

**Stability Condition:** A causal LTI system described by a differential equation is BIBO stable if and only if all the roots of its characteristic equation have negative real parts (i.e., they lie in the left half of the complex s-plane). (Nise, 5th Ed., Chapter 4.1)

**Example:**
Consider the system: $\frac{dy(t)}{dt} + 2y(t) = x(t)$
*   Characteristic equation: $s + 2 = 0$
*   Root: $s = -2$. Since the root has a negative real part, the system is stable.

Consider the system: $\frac{d^2y(t)}{dt^2} - 4y(t) = x(t)$
*   Characteristic equation: $s^2 - 4 = 0 \implies (s-2)(s+2) = 0$
*   Roots: $s = 2, s = -2$. Since one root ($s=2$) has a positive real part, the system is unstable.

---

### 3. Relating Differential Equations to the Impulse Response

The impulse response $h(t)$ of an LTI system is its output when the input is the Dirac delta function, $\delta(t)$.

If a system is represented by:
$$a_n \frac{d^n y(t)}{dt^n} + \dots + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + \dots + b_0 x(t)$$

Then, the impulse response $h(t)$ is the solution to this equation when $x(t) = \delta(t)$, subject to the condition that the system is initially at rest.

$$a_n \frac{d^n h(t)}{dt^n} + \dots + a_0 h(t) = b_m \frac{d^m \delta(t)}{dt^m} + \dots + b_0 \delta(t)$$

**Important Note:** The presence of derivatives of $\delta(t)$ on the right-hand side implies that the impulse response $h(t)$ might be a sum of delta functions and its derivatives, in addition to terms that are solutions to the homogeneous differential equation. Specifically, if $m > n$, the impulse response will involve derivatives of the delta function.

If $n \geq m$, and assuming $a_n = 1$ for simplicity in the following discussion:
The impulse response $h(t)$ can be viewed as the solution to the differential equation with $x(t) = \delta(t)$ and initial conditions set to zero (system at rest). The output $y(t)$ for an arbitrary input $x(t)$ can then be found via convolution: $y(t) = x(t) * h(t)$.

Alternatively, the differential equation itself directly defines the relationship between the input and output, and solving it for a given input $x(t)$ will yield $y(t)$.

---

### 4. Solving Differential Equations for System Output

To find the output $y(t)$ for a given input $x(t)$, we need to solve the differential equation. This typically involves finding the **homogeneous solution** (response due to initial conditions) and the **particular solution** (response due to the input).

$$y(t) = y_h(t) + y_p(t)$$

1.  **Homogeneous Solution ($y_h(t)$):** Solves the homogeneous equation $a_n y_h^{(n)} + \dots + a_0 y_h = 0$. The general form of $y_h(t)$ is a linear combination of terms $e^{s_i t}$, where $s_i$ are the roots of the characteristic equation. The coefficients are determined by the initial conditions.

2.  **Particular Solution ($y_p(t)$):** Solves the full non-homogeneous equation for the given input $x(t)$. Common methods include:
    *   **Method of Undetermined Coefficients:** Assumes a form for $y_p(t)$ based on the form of $x(t)$ (e.g., if $x(t) = Ae^{at}$, assume $y_p(t) = Ce^{at}$).
    *   **Laplace Transform:** A powerful tool for solving linear differential equations with constant coefficients. (This is a bridge to frequency domain analysis).

**Example:**
Consider the system: $\frac{dy(t)}{dt} + 2y(t) = x(t)$
Let $x(t) = e^{-3t} u(t)$ and assume the system is initially at rest ($y(0^-) = 0$).

1.  **Characteristic Equation:** $s + 2 = 0 \implies s_1 = -2$.
    *   Homogeneous solution: $y_h(t) = C_1 e^{-2t}$.

2.  **Particular Solution:** Since $x(t) = e^{-3t}$, assume $y_p(t) = Ae^{-3t}$.
    *   Substitute into the differential equation: $\frac{d(Ae^{-3t})}{dt} + 2(Ae^{-3t}) = e^{-3t}$
    *   $-3Ae^{-3t} + 2Ae^{-3t} = e^{-3t}$
    *   $-Ae^{-3t} = e^{-3t} \implies A = -1$.
    *   So, $y_p(t) = -e^{-3t}$.

3.  **General Solution:** $y(t) = y_h(t) + y_p(t) = C_1 e^{-2t} - e^{-3t}$.

4.  **Apply Initial Condition:** Since the system is initially at rest, $y(0^-) = 0$. For continuity of $y(t)$ at $t=0$, $y(0) = y(0^-) = 0$.
    *   $y(0) = C_1 e^0 - e^0 = C_1 - 1 = 0 \implies C_1 = 1$.

5.  **Final Solution:** $y(t) = e^{-2t} - e^{-3t}$. Since the input is $e^{-3t}u(t)$, and the output is non-zero only for $t \geq 0$, the solution is $y(t) = (e^{-2t} - e^{-3t})u(t)$.

(Haykin & Van Veen, 2nd Ed., Chapter 3.3 provides detailed methods for solving such equations).

---

### 5. Connection to Frequency Domain Analysis (Fourier Transform)

The differential equation representation is intrinsically linked to the frequency domain analysis via the Fourier Transform.

Taking the Fourier Transform of the differential equation:
Recall that the Fourier Transform of the $k$-th derivative of a function $f(t)$ is $(j\omega)^k F(j\omega)$, where $F(j\omega)$ is the Fourier Transform of $f(t)$.

Applying this to the general differential equation:
$$ \mathcal{F}\{a_n y^{(n)}(t) + \dots + a_0 y(t)\} = \mathcal{F}\{b_m x^{(m)}(t) + \dots + b_0 x(t)\} $$
$$ a_n (j\omega)^n Y(j\omega) + \dots + a_0 Y(j\omega) = b_m (j\omega)^m X(j\omega) + \dots + b_0 X(j\omega) $$
$$ Y(j\omega) [a_n (j\omega)^n + \dots + a_0] = X(j\omega) [b_m (j\omega)^m + \dots + b_0] $$

This leads to the **transfer function** $H(j\omega)$:

$$ H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = \frac{b_m (j\omega)^m + b_{m-1} (j\omega)^{m-1} + \dots + b_0}{a_n (j\omega)^n + a_{n-1} (j\omega)^{n-1} + \dots + a_0} $$

The denominator polynomial of the transfer function is precisely the characteristic polynomial of the differential equation. The roots of this denominator polynomial are the **poles** of the system, which directly relate to the system's stability (as discussed in Section 2.2).

This transfer function $H(j\omega)$ characterizes the system in the frequency domain. The output $Y(j\omega)$ can be obtained by multiplying the input's Fourier Transform $X(j\omega)$ by the transfer function: $Y(j\omega) = H(j\omega) X(j\omega)$.

**Example:**
System: $\frac{dy(t)}{dt} + 2y(t) = x(t)$
Taking the Fourier Transform:
$j\omega Y(j\omega) + 2Y(j\omega) = X(j\omega)$
$Y(j\omega)(j\omega + 2) = X(j\omega)$

Transfer function: $H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = \frac{1}{j\omega + 2}$

The denominator is $j\omega + 2$. Setting it to zero gives $j\omega = -2$. This is equivalent to the characteristic equation root $s = -2$.

**Important Point:** The existence of the Fourier Transform for $y(t)$ and $x(t)$ is crucial for this conversion. If the signals are not absolutely integrable, their Fourier Transforms might not exist in the conventional sense, and one might need to consider generalized Fourier Transforms (distributions) or the Laplace Transform. (Haykin & Van Veen, 2nd Ed., Chapter 7.1 and 7.5 on Fourier Transform existence).

---

### 6. Practice Questions and Answers

**Question 1:**
A continuous-time LTI system is described by the differential equation:
$\frac{d^2y(t)}{dt^2} + 3\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt} + x(t)$

a) Determine the order of the system.
b) Is this system causal? Justify your answer.
c) Find the characteristic equation of the system.
d) Determine if the system is BIBO stable.

**Answer 1:**
a) The order of the system is 2, as the highest derivative of $y(t)$ is the second derivative.
b) Yes, the system is causal because the order of the input derivative ($m=1$) is less than or equal to the order of the output derivative ($n=2$). Specifically, $n \geq m$.
c) The characteristic equation is obtained by setting the right-hand side to zero and replacing $\frac{d^k y(t)}{dt^k}$ with $s^k$:
$s^2 + 3s + 2 = 0$.
d) To determine stability, find the roots of the characteristic equation:
$(s+1)(s+2) = 0$
The roots are $s_1 = -1$ and $s_2 = -2$. Since both roots have negative real parts, the system is BIBO stable.

**Question 2:**
A causal LTI system is represented by the differential equation:
$\frac{dy(t)}{dt} + y(t) = x(t)$
If the input is $x(t) = e^{-2t}u(t)$ and the system is initially at rest, find the output $y(t)$.

**Answer 2:**
1.  **Characteristic Equation:** $s + 1 = 0 \implies s_1 = -1$.
    *   Homogeneous solution: $y_h(t) = C_1 e^{-t}$.

2.  **Particular Solution:** For $x(t) = e^{-2t}$, assume $y_p(t) = Ae^{-2t}$.
    *   Substitute: $\frac{d(Ae^{-2t})}{dt} + Ae^{-2t} = e^{-2t}$
    *   $-2Ae^{-2t} + Ae^{-2t} = e^{-2t}$
    *   $-Ae^{-2t} = e^{-2t} \implies A = -1$.
    *   $y_p(t) = -e^{-2t}$.

3.  **General Solution:** $y(t) = y_h(t) + y_p(t) = C_1 e^{-t} - e^{-2t}$.

4.  **Initial Condition:** System is initially at rest, so $y(0^-) = 0$. For continuity, $y(0) = 0$.
    *   $y(0) = C_1 e^0 - e^0 = C_1 - 1 = 0 \implies C_1 = 1$.

5.  **Final Solution:** $y(t) = (e^{-t} - e^{-2t})u(t)$.

**Question 3:**
For the system described by $y(t) + y(t) = x(t)$, find its transfer function $H(j\omega)$.

**Answer 3:**
Taking the Fourier Transform of $y(t) + y(t) = x(t)$:
$Y(j\omega) + Y(j\omega) = X(j\omega)$
$Y(j\omega)(1 + 1) = X(j\omega)$
$Y(j\omega)(2) = X(j\omega)$

The transfer function is $H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = \frac{1}{2}$.

---

### 7. Important Points to Remember

*   **Differential equations** are a powerful way to model continuous-time LTI systems.
*   The **order of the system** is determined by the highest derivative of the output.
*   **Causality** requires that the order of input derivatives ($m$) must be less than or equal to the order of output derivatives ($n$) for a physically realizable system ($n \geq m$).
*   **Stability** is determined by the roots of the characteristic equation. All roots must lie in the left half of the s-plane (negative real parts) for BIBO stability.
*   The **transfer function** $H(j\omega)$ is obtained by taking the Fourier Transform of the differential equation and represents the system's input-output relationship in the frequency domain.
*   The denominator of the transfer function is the **characteristic polynomial**, and its roots are the system's **poles**.
*   Solving the differential equation involves finding the **homogeneous** and **particular solutions**, using initial conditions to determine the constants.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textual References

*   **Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007):** Chapters 3 and 7 are particularly relevant. Chapter 3 covers the time-domain analysis of LTI systems, including their representation by differential equations and properties like causality and stability. Chapter 7 delves into the Fourier Transform, its properties, and its application to LTI systems.
*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009):** Chapters 3 and 4 are highly relevant. Chapter 3 discusses modeling and differential equations. Chapter 4 focuses on the time response and stability analysis, directly linking the roots of the characteristic equation to system behavior.
*   **Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Prentice Hall, 2nd Edition, 2015):** Chapter 2 discusses continuous-time signals and systems, including LTI systems and their differential equation representation. Chapter 8 covers the Fourier Series and Fourier Transform.

---

This concludes the study notes for the characterization of LTI systems using differential equations. Understanding this topic is crucial for bridging time-domain and frequency-domain analyses and for analyzing system properties like stability.