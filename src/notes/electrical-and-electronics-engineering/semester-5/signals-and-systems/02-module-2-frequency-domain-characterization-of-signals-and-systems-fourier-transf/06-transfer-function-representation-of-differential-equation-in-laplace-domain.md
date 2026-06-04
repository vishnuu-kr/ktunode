---
title: "Transfer function representation of differential equation in Laplace domain."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d7"
status: "completed"
scrapedAt: "2026-05-23T16:23:46.977Z"
---
# Signals and Systems: Module 2 - Frequency Domain Characterization

## Topic: Transfer Function Representation of Differential Equations in Laplace Domain

This module delves into the frequency domain representation of signals and systems, a crucial aspect for analyzing system behavior and designing controllers. Specifically, we will focus on how linear time-invariant (LTI) systems described by differential equations can be elegantly represented in the Laplace domain using transfer functions. This approach simplifies complex differential equations into algebraic equations, making analysis and manipulation much more tractable.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the concept of Laplace transform and its properties relevant to system analysis.
*   **LO2:** Transform linear constant-coefficient differential equations into the Laplace domain.
*   **LO3:** Define and derive the transfer function of an LTI system from its differential equation.
*   **LO4:** Analyze the relationship between the transfer function and system properties such as stability and frequency response.
*   **LO5:** Use transfer functions to represent cascaded and parallel system interconnections.

---

### Key Concepts and Definitions

#### 1. The Laplace Transform

The Laplace transform is a powerful mathematical tool that converts functions of time, $f(t)$, into functions of a complex frequency variable, $s$. For a function $f(t)$ that is zero for $t < 0$, the unilateral Laplace transform is defined as:

$$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} f(t) e^{-st} dt$$

where $s = \sigma + j\omega$ is a complex variable.

**Key Properties of Laplace Transform relevant to Systems:**

*   **Linearity:** $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$
*   **Time Differentiation:** $\mathcal{L}\{\frac{df(t)}{dt}\} = sF(s) - f(0)$
    *   For the second derivative: $\mathcal{L}\{\frac{d^2f(t)}{dt^2}\} = s^2F(s) - sf(0) - f'(0)$
    *   And so on for higher-order derivatives.
*   **Time Integration:** $\mathcal{L}\{\int_{0}^{t} f(\tau) d\tau\} = \frac{F(s)}{s}$
*   **Time Shifting:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, where $u(t)$ is the unit step function.
*   **Frequency Shifting:** $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$
*   **Convolution:** $\mathcal{L}\{(f*g)(t)\} = F(s)G(s)$, where $(f*g)(t) = \int_{0}^{\infty} f(\tau)g(t-\tau)d\tau$.

**(Reference: Haykin & Van Veen, Chapter 9; Oppenheim, Willsky & Nawab, Chapter 9)**

#### 2. Linear Time-Invariant (LTI) Systems

An LTI system is a system that exhibits both linearity and time-invariance.

*   **Linearity:** If input $x_1(t)$ produces output $y_1(t)$ and input $x_2(t)$ produces output $y_2(t)$, then input $a x_1(t) + b x_2(t)$ produces output $a y_1(t) + b y_2(t)$.
*   **Time-Invariance:** If input $x(t)$ produces output $y(t)$, then a time-shifted input $x(t-t_0)$ produces a time-shifted output $y(t-t_0)$.

**(Reference: Haykin & Van Veen, Chapter 2; Oppenheim, Willsky & Nawab, Chapter 2)**

#### 3. Transfer Function ($H(s)$)

For an LTI system with input $x(t)$ and output $y(t)$, described by a linear constant-coefficient differential equation, the transfer function is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming all initial conditions are zero.

$$H(s) = \frac{Y(s)}{X(s)} \quad \text{with } y(0^-) = 0, y'(0^-) = 0, \dots$$

The transfer function $H(s)$ is an intrinsic property of the system and does not depend on the input signal. It completely characterizes the system's input-output behavior.

**(Reference: Haykin & Van Veen, Chapter 9; Nise, Chapter 2)**

---

### Transfer Function Representation of Differential Equations in Laplace Domain

Consider a general $n^{th}$-order linear constant-coefficient differential equation describing an LTI system:

$$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + b_{m-1} \frac{d^{m-1} x(t)}{dt^{m-1}} + \dots + b_1 \frac{dx(t)}{dt} + b_0 x(t)$$

where $y(t)$ is the output, $x(t)$ is the input, and $a_i$ and $b_j$ are constant coefficients.

To find the transfer function, we apply the Laplace transform to both sides of the equation. We assume zero initial conditions for the system: $y(0^-)=0, y'(0^-)=0, \dots, y^{(n-1)}(0^-)=0$ and $x(0^-)=0, x'(0^-)=0, \dots, x^{(m-1)}(0^-)=0$.

Applying the Laplace transform property for derivatives:

$$a_n [s^n Y(s) - s^{n-1}y(0^-) - \dots - y^{(n-1)}(0^-)] + a_{n-1} [s^{n-1} Y(s) - s^{n-2}y(0^-) - \dots - y^{(n-2)}(0^-)] + \dots + a_1 [sY(s) - y(0^-)] + a_0 Y(s) = b_m [s^m X(s) - s^{m-1}x(0^-) - \dots - x^{(m-1)}(0^-)] + b_{m-1} [s^{m-1} X(s) - s^{m-2}x(0^-) - \dots - x^{(m-2)}(0^-)] + \dots + b_1 [sX(s) - x(0^-)] + b_0 X(s)$$

With zero initial conditions:

$$a_n s^n Y(s) + a_{n-1} s^{n-1} Y(s) + \dots + a_1 s Y(s) + a_0 Y(s) = b_m s^m X(s) + b_{m-1} s^{m-1} X(s) + \dots + b_1 s X(s) + b_0 X(s)$$

Factor out $Y(s)$ and $X(s)$:

$$Y(s) [a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0] = X(s) [b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0]$$

The transfer function $H(s)$ is the ratio $\frac{Y(s)}{X(s)}$:

$$H(s) = \frac{Y(s)}{X(s)} = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0}$$

This is a rational function of $s$, the ratio of two polynomials in $s$. The numerator polynomial is called the **numerator polynomial** and the denominator polynomial is called the **denominator polynomial** or the **characteristic polynomial** of the system.

**(Reference: Haykin & Van Veen, Chapter 9; Nise, Chapter 2; Ogata, Chapter 2)**

---

### Examples

**Example 1: First-Order System (RC Circuit)**

Consider a simple RC low-pass filter with input voltage $v_{in}(t)$ and output voltage $v_{out}(t)$ across the capacitor. The differential equation is:

$$RC \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$$

Applying Laplace transform with zero initial conditions ($v_{out}(0^-) = 0$):

$$RC [s V_{out}(s) - v_{out}(0^-)] + V_{out}(s) = V_{in}(s)$$
$$RC s V_{out}(s) + V_{out}(s) = V_{in}(s)$$
$$V_{out}(s) [RCs + 1] = V_{in}(s)$$

The transfer function is:

$$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{RCs + 1}$$

**(Reference: Haykin & Van Veen, Example 9.2; Nise, Example 2.1)**

**Example 2: Second-Order System (Mass-Spring-Damper)**

Consider a mechanical system with mass $m$, damping coefficient $b$, and spring constant $k$. The equation of motion for displacement $x(t)$ due to a force $f(t)$ is:

$$m \frac{d^2 x(t)}{dt^2} + b \frac{dx(t)}{dt} + k x(t) = f(t)$$

Assuming zero initial conditions ($x(0^-)=0, x'(0^-)=0$):

$$m [s^2 X(s) - sx(0^-) - x'(0^-)] + b [sX(s) - x(0^-)] + k X(s) = F(s)$$
$$m s^2 X(s) + b s X(s) + k X(s) = F(s)$$
$$X(s) [ms^2 + bs + k] = F(s)$$

The transfer function is:

$$H(s) = \frac{X(s)}{F(s)} = \frac{1}{ms^2 + bs + k}$$

**(Reference: Nise, Example 2.3)**

**Example 3: System with Derivative Term in Input**

Consider the differential equation:

$$\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt} + 3x(t)$$

Assume zero initial conditions: $y(0^-)=0$, $x(0^-)=0$.
Applying Laplace transform:

$$[sY(s) - y(0^-)] + 2Y(s) = [sX(s) - x(0^-)] + 3X(s)$$
$$sY(s) + 2Y(s) = sX(s) + 3X(s)$$
$$Y(s)(s+2) = X(s)(s+3)$$

The transfer function is:

$$H(s) = \frac{Y(s)}{X(s)} = \frac{s+3}{s+2}$$

**(Reference: Haykin & Van Veen, Section 9.3)**

---

### System Interconnections

Transfer functions provide a convenient way to represent interconnected systems.

#### 1. Cascaded Systems

When systems are connected in series (cascade), the overall transfer function is the product of the individual transfer functions.

If System 1 has transfer function $H_1(s)$ and System 2 has transfer function $H_2(s)$, and the output of System 1 is the input to System 2, then the overall transfer function $H_{total}(s)$ is:

$$H_{total}(s) = H_1(s) H_2(s)$$

Let $Y_1(s) = H_1(s) X(s)$ and $Y_2(s) = H_2(s) Y_1(s)$. Then $Y_2(s) = H_2(s) (H_1(s) X(s)) = (H_1(s) H_2(s)) X(s)$.

**(Reference: Haykin & Van Veen, Section 9.5; Nise, Section 2.3)**

**Example:** Two RC filters in series.
$H_1(s) = \frac{1}{R_1C_1s + 1}$, $H_2(s) = \frac{1}{R_2C_2s + 1}$
$H_{total}(s) = \frac{1}{(R_1C_1s + 1)(R_2C_2s + 1)}$

#### 2. Parallel Systems

When systems are connected in parallel, their transfer functions are added to obtain the overall transfer function.

If System 1 has transfer function $H_1(s)$ and System 2 has transfer function $H_2(s)$, and they share the same input $X(s)$ and their outputs are summed, then the overall transfer function $H_{total}(s)$ is:

$$H_{total}(s) = H_1(s) + H_2(s)$$

Let $Y_1(s) = H_1(s) X(s)$ and $Y_2(s) = H_2(s) X(s)$. The total output is $Y_{total}(s) = Y_1(s) + Y_2(s)$.
$Y_{total}(s) = H_1(s) X(s) + H_2(s) X(s) = (H_1(s) + H_2(s)) X(s)$.

**(Reference: Haykin & Van Veen, Section 9.5; Nise, Section 2.3)**

**Example:** Two current sources feeding into a common node.

---

### Relationship to System Properties (Brief Introduction)

The transfer function $H(s)$ provides critical insights into system behavior:

*   **Poles and Zeros:** The roots of the denominator polynomial are called **poles**, and the roots of the numerator polynomial are called **zeros**. The location of poles and zeros in the complex $s$-plane dictates the system's stability and transient response.
*   **Stability:** An LTI system is **BIP** (Bounded-Input, Bounded-Output) **stable** if all the poles of its transfer function lie in the left-half of the $s$-plane (i.e., their real parts are negative).
*   **Frequency Response:** By substituting $s = j\omega$ into the transfer function, we obtain the **frequency response** $H(j\omega)$. This reveals how the system amplifies or attenuates sinusoidal inputs of different frequencies.

**(Reference: Haykin & Van Veen, Chapter 10; Nise, Chapter 6; CO4)**

---

### Practice Questions

**Question 1:**
Find the transfer function $H(s) = Y(s)/X(s)$ for an LTI system described by the following differential equation:
$ \frac{d^2 y(t)}{dt^2} + 5 \frac{dy(t)}{dt} + 6 y(t) = 2 \frac{dx(t)}{dt} + x(t) $
Assume all initial conditions are zero.

**Question 2:**
A system has a transfer function $H(s) = \frac{s+1}{s^2+4s+3}$.
a) If the input is $X(s) = \frac{1}{s}$ (a step input), find the Laplace transform of the output $Y(s)$.
b) If two such systems are connected in cascade, what is the overall transfer function?

**Question 3:**
The differential equation for a system is given by:
$ \frac{d^2 y(t)}{dt^2} + 3 \frac{dy(t)}{dt} + 2 y(t) = x(t) $
Find the transfer function $H(s)$ of this system, assuming zero initial conditions. Identify the poles of the system.

---

### Answers to Practice Questions

**Answer 1:**
Apply Laplace transform to the differential equation, assuming zero initial conditions:
$ \mathcal{L}\{\frac{d^2 y(t)}{dt^2}\} + 5 \mathcal{L}\{\frac{dy(t)}{dt}\} + 6 \mathcal{L}\{y(t)\} = 2 \mathcal{L}\{\frac{dx(t)}{dt}\} + \mathcal{L}\{x(t)\} $
$ (s^2 Y(s) - sy(0^-) - y'(0^-)) + 5(s Y(s) - y(0^-)) + 6 Y(s) = 2(s X(s) - x(0^-)) + X(s) $
With $y(0^-)=0, y'(0^-)=0, x(0^-)=0$:
$ s^2 Y(s) + 5s Y(s) + 6 Y(s) = 2s X(s) + X(s) $
$ Y(s)(s^2 + 5s + 6) = X(s)(2s + 1) $
$ H(s) = \frac{Y(s)}{X(s)} = \frac{2s + 1}{s^2 + 5s + 6} $

**Answer 2:**
a) The output in the Laplace domain is $Y(s) = H(s) X(s)$.
$ Y(s) = \frac{s+1}{s^2+4s+3} \times \frac{1}{s} = \frac{s+1}{s(s+1)(s+3)} = \frac{1}{s(s+3)} $
b) For cascaded systems, the overall transfer function is the product of individual transfer functions. If the second system is identical to the first:
$ H_{total}(s) = H(s) \times H(s) = \left(\frac{s+1}{s^2+4s+3}\right)^2 = \left(\frac{s+1}{(s+1)(s+3)}\right)^2 = \left(\frac{1}{s+3}\right)^2 = \frac{1}{(s+3)^2} $

**Answer 3:**
Apply Laplace transform with zero initial conditions:
$ (s^2 Y(s) - sy(0^-) - y'(0^-)) + 3(s Y(s) - y(0^-)) + 2 Y(s) = X(s) $
$ s^2 Y(s) + 3s Y(s) + 2 Y(s) = X(s) $
$ Y(s)(s^2 + 3s + 2) = X(s) $
$ H(s) = \frac{Y(s)}{X(s)} = \frac{1}{s^2 + 3s + 2} $
The poles are the roots of the denominator polynomial $s^2 + 3s + 2 = 0$.
Factoring: $(s+1)(s+2) = 0$.
The poles are at $s = -1$ and $s = -2$.

---

### Important Points to Remember

*   The Laplace transform is a fundamental tool for analyzing LTI systems described by differential equations.
*   The transfer function $H(s)$ is the ratio of the output Laplace transform to the input Laplace transform, with **zero initial conditions**.
*   The transfer function is a rational function of $s$, representing the system's input-output relationship as an algebraic ratio.
*   The transfer function completely characterizes an LTI system.
*   Cascaded systems have transfer functions that are multiplied.
*   Parallel systems have transfer functions that are added.
*   The poles of the transfer function (roots of the denominator) are critical for determining system stability.

---

### Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the Laplace transform and its properties (linearity, differentiation) is fundamental to representing signals and systems in the Laplace domain, which is a prerequisite for this topic.
*   **CO2 (K3):** This entire topic directly addresses the representation of continuous-time signals and systems in the frequency domain (via the Laplace domain and transfer functions).
*   **CO3 (K3):** While this topic focuses on continuous-time systems, the underlying principles of transforming differential equations into algebraic representations are analogous to the Z-transform for discrete-time systems, reinforcing the concept of frequency-domain analysis.
*   **CO4 (K3):** The transfer function is the gateway to analyzing system stability. The locations of the poles of the transfer function determine whether the system is stable or not.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References

*   **Haykin, S. S., & Van Veen, B. (2007).** *Signals and Systems* (2nd ed.). Wiley. (Chapters 9, 10)
*   **Nise, N. S. (2009).** *Control Systems Engineering* (5th ed.). Wiley. (Chapters 2, 6)
*   **Oppenheim, A. V., Willsky, A. S., & Nawab, S. H. (2015).** *Signals and Systems* (2nd ed.). Prentice Hall. (Chapter 9)
*   **Ogata, K. (2006).** *Discrete Time Control Systems* (2nd ed.). Pearson. (While primarily discrete-time, fundamental concepts of system representation are relevant).