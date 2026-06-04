---
title: "Laplace transforms( Review only)"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35acc"
status: "completed"
scrapedAt: "2026-05-23T16:11:32.500Z"
---
# CIRCUITS & NETWORKS: Module 3 - Laplace Transforms (Review Only)

**Course Outcomes Addressed:**

*   **CO2:** Apply transformation from time domain to s-domain, solve dynamic electric circuits. (Knowledge Level: K3) - This module directly supports this CO by reviewing the fundamental tool for dynamic circuit analysis.

**Learning Outcomes:**

*   Understand the concept of the Laplace Transform and its inverse.
*   Know the standard Laplace Transforms of common functions.
*   Be familiar with the properties of the Laplace Transform.
*   Apply Laplace Transforms to solve differential equations encountered in circuit analysis.
*   Understand the transformation from the time domain to the s-domain and its implications for circuit analysis.

---

## 1. Introduction to Laplace Transforms

The Laplace Transform is a powerful mathematical tool used extensively in engineering, particularly in the analysis of linear time-invariant (LTI) systems and circuits. It transforms a function of time, $f(t)$, into a function of a complex variable, $s$, known as the **Laplace domain** or **s-domain**. This transformation simplifies the analysis of differential equations, which are fundamental to describing the behavior of circuits with reactive components (capacitors and inductors).

**Why use Laplace Transforms?**

*   **Simplifies Differential Equations:** Converts linear ordinary differential equations (ODEs) with constant coefficients into algebraic equations in the s-domain.
*   **Handles Initial Conditions:** Naturally incorporates initial conditions of the circuit elements.
*   **Facilitates Analysis of Transients and Steady-State:** Allows for the analysis of circuit behavior from the moment an input is applied until it reaches steady-state.
*   **Tool for System Analysis:** Provides a framework for analyzing system stability and frequency response.

**Key Concept:** The variable $s$ is a complex frequency, $s = \sigma + j\omega$, where $\sigma$ is the real part and $\omega$ is the imaginary part.

---

## 2. Definition of Laplace Transform

The unilateral Laplace Transform of a function $f(t)$, defined for $t \ge 0$, is given by:

$$ F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) dt $$

where:
*   $F(s)$ is the Laplace Transform of $f(t)$.
*   $s$ is the complex frequency.
*   The integral converges if $f(t)$ is of exponential order, meaning $|f(t)| \le Me^{at}$ for some constants $M$ and $a$. The real part of $s$, $\sigma$, must be greater than $a$ for the integral to converge.

**Inverse Laplace Transform:**

The inverse Laplace Transform allows us to convert a function from the s-domain back to the time domain. It is given by the complex integral:

$$ f(t) = \mathcal{L}^{-1}\{F(s)\} = \frac{1}{2\pi j} \int_{\sigma - j\infty}^{\sigma + j\infty} e^{st} F(s) ds $$

However, in practice, we rarely use this integral directly. Instead, we use tables of transforms and partial fraction expansion techniques.

---

## 3. Standard Laplace Transforms of Common Functions

Here are some fundamental Laplace Transforms that are essential for circuit analysis. These can be found in all the recommended textbooks (e.g., Van Valkenburg, Ravish R Singh).

| Function $f(t)$ (for $t \ge 0$) | Laplace Transform $F(s) = \mathcal{L}\{f(t)\}$ | Region of Convergence (ROC) | Notes |
| :------------------------------ | :------------------------------------------- | :-------------------------- | :---- |
| Unit Impulse Function $\delta(t)$ | $1$                                          | All $s$                     | $\mathcal{L}\{\delta(t)\} = \int_0^\infty e^{-st} \delta(t) dt = e^{-s \cdot 0} = 1$ |
| Unit Step Function $u(t)$       | $\frac{1}{s}$                                | $\text{Re}(s) > 0$          | $\mathcal{L}\{u(t)\} = \int_0^\infty e^{-st} \cdot 1 dt = [-\frac{e^{-st}}{s}]_0^\infty = 0 - (-\frac{1}{s}) = \frac{1}{s}$ |
| Ramp Function $t u(t)$          | $\frac{1}{s^2}$                              | $\text{Re}(s) > 0$          | $\mathcal{L}\{t\} = \int_0^\infty t e^{-st} dt$. Use integration by parts. |
| $t^n u(t)$ (for integer $n \ge 0$) | $\frac{n!}{s^{n+1}}$                         | $\text{Re}(s) > 0$          | Generalization of the ramp function. |
| Exponential Function $e^{-at} u(t)$ | $\frac{1}{s+a}$                              | $\text{Re}(s) > -a$         |  |
| Sine Function $\sin(\omega t) u(t)$ | $\frac{\omega}{s^2 + \omega^2}$              | $\text{Re}(s) > 0$          | |
| Cosine Function $\cos(\omega t) u(t)$ | $\frac{s}{s^2 + \omega^2}$               | $\text{Re}(s) > 0$          | |
| Hyperbolic Sine $\sinh(at) u(t)$ | $\frac{a}{s^2 - a^2}$                      | $\text{Re}(s) > |a|$        | $\sinh(at) = \frac{e^{at} - e^{-at}}{2}$ |
| Hyperbolic Cosine $\cosh(at) u(t)$ | $\frac{s}{s^2 - a^2}$                      | $\text{Re}(s) > |a|$        | $\cosh(at) = \frac{e^{at} + e^{-at}}{2}$ |

**Important Point:** The unit step function $u(t)$ is often implied for functions starting at $t=0$.

---

## 4. Properties of Laplace Transforms

These properties are crucial for manipulating Laplace Transforms and simplifying circuit analysis.

| Property Name                  | Time Domain Function $f(t)$ | s-Domain Function $F(s)$ | Description                                                                                                |
| :----------------------------- | :-------------------------- | :----------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Linearity**                  | $af(t) + bg(t)$             | $aF(s) + bG(s)$          | The Laplace Transform of a linear combination of functions is the linear combination of their transforms.  |
| **Time Shifting**              | $f(t-a) u(t-a)$ (for $a>0$) | $e^{-as} F(s)$           | If a function is delayed in time by $a$ units, its transform is multiplied by $e^{-as}$.                 |
| **Frequency Shifting (Real)**  | $e^{-at} f(t)$              | $F(s+a)$                 | Multiplying a time-domain function by $e^{-at}$ shifts its s-domain transform by $-a$.                   |
| **Frequency Shifting (Imaginary)** | $e^{j\omega_0 t} f(t)$      | $F(s - j\omega_0)$       | Multiplying by a complex exponential shifts the s-domain transform by $j\omega_0$.                     |
| **Time Differentiation**       | $\frac{df(t)}{dt}$          | $sF(s) - f(0^-)$         | Transforms differentiation in the time domain into multiplication by $s$ in the s-domain, plus an initial condition term. |
|                                | $\frac{d^nf(t)}{dt^n}$      | $s^n F(s) - s^{n-1}f(0^-) - s^{n-2}f'(0^-) - \dots - f^{(n-1)}(0^-)$ | For higher-order derivatives. $f(0^-)$ is the initial value of $f(t)$ just before $t=0$. |
| **Time Integration**           | $\int_{0}^{t} f(\tau) d\tau$ | $\frac{F(s)}{s}$         | Transforms integration in the time domain into division by $s$ in the s-domain.                          |
| **s-Domain Differentiation**   | $t f(t)$                    | $-\frac{dF(s)}{ds}$      | Multiplying by $t$ in the time domain corresponds to differentiation with respect to $s$ in the s-domain. |
| **s-Domain Integration**       | $\frac{f(t)}{t}$            | $\int_{s}^{\infty} F(\sigma) d\sigma$ | Division by $t$ in the time domain corresponds to integration with respect to $s$ in the s-domain. (Requires $f(t)/t$ to have a Laplace Transform). |
| **Initial Value Theorem (IVT)** | $f(0^+) = \lim_{t \to 0^+} f(t)$ | $\lim_{s \to \infty} sF(s)$ | Useful for finding the initial value of $f(t)$ directly from $F(s)$ without performing the inverse transform. Requires $F(s)$ to be rational and the degree of the numerator to be less than or equal to the degree of the denominator. |
| **Final Value Theorem (FVT)**   | $f(\infty) = \lim_{t \to \infty} f(t)$ | $\lim_{s \to 0} sF(s)$   | Useful for finding the steady-state value of $f(t)$ directly from $F(s)$. Requires all poles of $sF(s)$ to lie in the left-half of the s-plane (i.e., stable system). |

**Referencing Textbooks:**

*   **Van Valkenburg, Network Analysis:** Covers these properties extensively in Chapter 12.
*   **Ravish R Singh, Network Analysis and Synthesis:** Dedicates Chapter 7 to Laplace Transforms and their applications, including these properties.
*   **Suresh Kumar, Electric Circuits & Networks:** Chapter 10 details the Laplace Transform and its application to circuit analysis.
*   **A Sudhakar, Shyammohan S Palli, Circuits and Networks, Analysis and Synthesis:** Chapter 15 provides a thorough review of Laplace Transforms.

---

## 5. Laplace Transform of Circuit Elements

When analyzing circuits in the s-domain, we replace circuit elements with their corresponding s-domain impedances (or admittances).

### 5.1 Resistor

The voltage-current relationship for a resistor is $v(t) = Ri(t)$.
Taking the Laplace Transform:
$\mathcal{L}\{v(t)\} = \mathcal{L}\{Ri(t)\}$
$V(s) = R I(s)$

The impedance of a resistor in the s-domain is simply **$R$**.

### 5.2 Inductor

The voltage-current relationship for an inductor is $v(t) = L \frac{di(t)}{dt}$.
Taking the Laplace Transform:
$\mathcal{L}\{v(t)\} = \mathcal{L}\{L \frac{di(t)}{dt}\}$
$V(s) = L \mathcal{L}\{\frac{di(t)}{dt}\}$
Using the differentiation property:
$V(s) = L [sI(s) - i(0^-)]$
$V(s) = sLI(s) - Li(0^-)$

The impedance of an inductor in the s-domain is **$sL$**.
The term $-Li(0^-)$ represents the voltage source due to the initial current in the inductor.

**Alternative: Impedance and Series Voltage Source**
We can represent the inductor in the s-domain as an impedance $sL$ in series with a voltage source $Li(0^-)$.

### 5.3 Capacitor

The current-voltage relationship for a capacitor is $i(t) = C \frac{dv(t)}{dt}$.
Taking the Laplace Transform:
$\mathcal{L}\{i(t)\} = \mathcal{L}\{C \frac{dv(t)}{dt}\}$
$I(s) = C [sV(s) - v(0^-)]$
$I(s) = sCV(s) - Cv(0^-)$

Rearranging to find $V(s)$:
$V(s) = \frac{I(s)}{sC} + \frac{v(0^-)}{s}$

The impedance of a capacitor in the s-domain is **$\frac{1}{sC}$**.
The term $\frac{v(0^-)}{s}$ represents the voltage source due to the initial voltage across the capacitor.

**Alternative: Impedance and Series Voltage Source**
We can represent the capacitor in the s-domain as an impedance $\frac{1}{sC}$ in series with a voltage source $\frac{v(0^-)}{s}$.

**Important Point:** For circuits with initial conditions, we can model the initial energy stored in inductors and capacitors as equivalent voltage sources in series with their impedances.

---

## 6. Transforming Time-Domain Circuits to s-Domain

To analyze a circuit in the s-domain:

1.  **Replace Components with s-Domain Equivalents:**
    *   Resistors: $R \rightarrow R$
    *   Inductors: $L \rightarrow sL$ (with a series voltage source $Li(0^-)$ if there's initial current)
    *   Capacitors: $C \rightarrow \frac{1}{sC}$ (with a series voltage source $\frac{v(0^-)}{s}$ if there's initial voltage)
2.  **Replace Time-Domain Sources with their Laplace Transforms:**
    *   Constant voltage source $V_0 u(t) \rightarrow \frac{V_0}{s}$
    *   Constant current source $I_0 u(t) \rightarrow \frac{I_0}{s}$
    *   Sinusoidal sources like $V_m \cos(\omega t) u(t) \rightarrow \frac{sV_m}{s^2 + \omega^2}$, etc.
3.  **Rewrite the Circuit Equations in the s-Domain:** This can be done using Kirchhoff's Voltage Law (KVL), Kirchhoff's Current Law (KCL), or mesh/nodal analysis. The equations will be algebraic.
4.  **Solve the Algebraic Equations:** Solve for the desired voltage or current in the s-domain, $V(s)$ or $I(s)$.
5.  **Find the Inverse Laplace Transform:** Convert the s-domain solution back to the time domain, $v(t)$ or $i(t)$, using inverse Laplace transform tables and techniques like partial fraction expansion.

---

## 7. Solving Differential Equations using Laplace Transforms

Laplace transforms are particularly useful for solving linear ODEs with constant coefficients, which describe the behavior of RLC circuits.

Consider a general second-order circuit equation:
$a \frac{d^2y(t)}{dt^2} + b \frac{dy(t)}{dt} + cy(t) = f(t)$

Applying the Laplace Transform to both sides:
$\mathcal{L}\{a \frac{d^2y(t)}{dt^2}\} + \mathcal{L}\{b \frac{dy(t)}{dt}\} + \mathcal{L}\{cy(t)\} = \mathcal{L}\{f(t)\}$

Using linearity and differentiation properties:
$a[s^2Y(s) - sy(0^-) - y'(0^-)] + b[sY(s) - y(0^-)] + cY(s) = F(s)$

Rearranging to solve for $Y(s)$:
$Y(s) [as^2 + bs + c] - a[sy(0^-) + y'(0^-)] - b[y(0^-)] = F(s)$
$Y(s) [as^2 + bs + c] = F(s) + a[sy(0^-) + y'(0^-)] + by(0^-)$
$Y(s) = \frac{F(s) + a[sy(0^-) + y'(0^-)] + by(0^-)}{as^2 + bs + c}$

The denominator polynomial $(as^2 + bs + c)$ is called the **characteristic polynomial** or **characteristic equation** of the circuit. Its roots (the poles of $Y(s)$) determine the natural response of the circuit.

**Steps for Solving ODEs:**

1.  Take the Laplace Transform of the entire differential equation.
2.  Substitute initial conditions ($y(0^-)$, $y'(0^-)$, etc.).
3.  Solve the resulting algebraic equation for $Y(s)$.
4.  Perform partial fraction expansion on $Y(s)$ if necessary.
5.  Take the inverse Laplace Transform to find $y(t)$.

---

## 8. Partial Fraction Expansion (PFE)

PFE is a crucial technique for decomposing a complex rational function $F(s)$ into simpler fractions whose inverse Laplace Transforms are known.

A rational function is of the form $F(s) = \frac{N(s)}{D(s)}$, where $N(s)$ and $D(s)$ are polynomials in $s$. For PFE, the degree of $N(s)$ must be strictly less than the degree of $D(s)$. If not, perform polynomial long division first.

**Types of Roots of the Denominator $D(s)$:**

1.  **Distinct Real Roots:**
    If $D(s) = (s-p_1)(s-p_2)\dots(s-p_n)$, then
    $F(s) = \frac{A_1}{s-p_1} + \frac{A_2}{s-p_2} + \dots + \frac{A_n}{s-p_n}$
    The coefficients $A_i$ are found using the **Heaviside cover-up method**: $A_i = \left. (s-p_i)F(s) \right|_{s=p_i}$.
    The inverse Laplace Transform is $f(t) = A_1 e^{p_1 t} + A_2 e^{p_2 t} + \dots + A_n e^{p_n t}$.

2.  **Repeated Real Roots:**
    If $D(s) = (s-p)^m$, then
    $F(s) = \frac{A_1}{s-p} + \frac{A_2}{(s-p)^2} + \dots + \frac{A_m}{(s-p)^m}$
    $A_m = \left. (s-p)^m F(s) \right|_{s=p}$
    $A_{m-1} = \left. \frac{d}{ds} \{(s-p)^m F(s)\} \right|_{s=p}$
    And so on. The inverse Laplace Transform involves terms like $A_k \frac{t^{m-k}}{(m-k)!} e^{pt}$.

3.  **Distinct Complex Conjugate Roots:**
    If $D(s)$ has a factor $(s^2 + bs + c)$ with roots $s = -\alpha \pm j\omega$, then
    $F(s) = \dots + \frac{As+B}{s^2 + bs + c} + \dots$
    The coefficients $As+B$ can be found by clearing the denominators and equating coefficients or using complex exponentials.
    The inverse Laplace Transform of $\frac{As+B}{s^2 + \omega^2}$ is $A \cos(\omega t) + B \sin(\omega t)$ (after suitable manipulation/completing the square).

**Example of PFE (Distinct Real Roots):**

Find the inverse Laplace Transform of $F(s) = \frac{s+3}{(s+1)(s+2)}$.

Let $F(s) = \frac{A}{s+1} + \frac{B}{s+2}$.

Using the Heaviside cover-up method:
For $A$: $A = \left. (s+1) F(s) \right|_{s=-1} = \left. \frac{s+3}{s+2} \right|_{s=-1} = \frac{-1+3}{-1+2} = \frac{2}{1} = 2$.
For $B$: $B = \left. (s+2) F(s) \right|_{s=-2} = \left. \frac{s+3}{s+1} \right|_{s=-2} = \frac{-2+3}{-2+1} = \frac{1}{-1} = -1$.

So, $F(s) = \frac{2}{s+1} - \frac{1}{s+2}$.
The inverse Laplace Transform is $f(t) = 2e^{-t} - e^{-2t}$, for $t \ge 0$.

---

## 9. Applications in Circuit Analysis (CO2 Support)

Laplace transforms are fundamental to solving dynamic circuits (circuits with energy storage elements like inductors and capacitors).

**Example: First-Order RL Circuit Analysis**

Consider a series RL circuit with a DC voltage source $V_s$ switched on at $t=0$. Let the initial current be $i(0^-) = 0$.

*   **Time Domain Equation:**
    $L \frac{di(t)}{dt} + Ri(t) = V_s u(t)$

*   **s-Domain Transformation:**
    $\mathcal{L}\{L \frac{di(t)}{dt}\} + \mathcal{L}\{Ri(t)\} = \mathcal{L}\{V_s u(t)\}$
    $L[sI(s) - i(0^-)] + RI(s) = \frac{V_s}{s}$
    Since $i(0^-) = 0$:
    $sLI(s) + RI(s) = \frac{V_s}{s}$
    $I(s)(sL + R) = \frac{V_s}{s}$
    $I(s) = \frac{V_s}{s(sL + R)}$

*   **Partial Fraction Expansion:**
    $I(s) = \frac{V_s}{sL(s + R/L)}$
    Let $I(s) = \frac{A}{s} + \frac{B}{s + R/L}$
    $A = \left. s I(s) \right|_{s=0} = \left. \frac{V_s}{sL + R} \right|_{s=0} = \frac{V_s}{R}$
    $B = \left. (s + R/L) I(s) \right|_{s=-R/L} = \left. \frac{V_s}{sL} \right|_{s=-R/L} = \frac{V_s}{L(-R/L)} = -\frac{V_s}{R}$

    So, $I(s) = \frac{V_s}{R} \frac{1}{s} - \frac{V_s}{R} \frac{1}{s + R/L}$

*   **Inverse Laplace Transform:**
    $i(t) = \frac{V_s}{R} - \frac{V_s}{R} e^{-(R/L)t}$
    $i(t) = \frac{V_s}{R}(1 - e^{-(R/L)t})$ for $t \ge 0$.

This result matches the known solution for an RL circuit with a DC source.

**Example: First-Order RC Circuit Analysis**

Consider a series RC circuit with a DC voltage source $V_s$ switched on at $t=0$. Let the initial capacitor voltage be $v_c(0^-) = V_0$.

*   **s-Domain Representation:**
    Resistor impedance: $R$
    Capacitor impedance: $\frac{1}{sC}$
    Initial capacitor voltage as series source: $\frac{V_0}{s}$
    Voltage source: $\frac{V_s}{s}$

*   **KVL in s-Domain:**
    $\frac{V_s}{s} = RI(s) + \frac{1}{sC}I(s) + \frac{V_0}{s}$
    $\frac{V_s - V_0}{s} = I(s) (R + \frac{1}{sC})$
    $\frac{V_s - V_0}{s} = I(s) (\frac{sRC + 1}{sC})$
    $I(s) = \frac{V_s - V_0}{s} \cdot \frac{sC}{sRC + 1} = \frac{C(V_s - V_0)}{sRC + 1}$
    $I(s) = \frac{V_s - V_0}{RC} \frac{1}{s + 1/RC}$

*   **Inverse Laplace Transform:**
    $i(t) = \frac{V_s - V_0}{RC} e^{-t/RC}$ for $t \ge 0$.

To find the capacitor voltage $v_c(t)$:
$V_c(s) = \frac{I(s)}{sC} + \frac{V_0}{s}$
$V_c(s) = \frac{1}{sC} \left( \frac{C(V_s - V_0)}{sRC + 1} \right) + \frac{V_0}{s}$
$V_c(s) = \frac{V_s - V_0}{sRC + 1} + \frac{V_0}{s}$
$V_c(s) = \frac{V_s - V_0}{RC} \frac{1}{s + 1/RC} + \frac{V_0}{s}$

*   **Inverse Laplace Transform:**
    $v_c(t) = \frac{V_s - V_0}{RC} e^{-t/RC} + V_0$ for $t \ge 0$.

---

## 10. Practice Questions and Exercises

**Question 1:**
Find the Laplace Transform of $f(t) = (3t^2 + 5\sin(4t)) u(t)$.

**Question 2:**
Using Laplace Transforms, solve the differential equation for the current $i(t)$ in a series RL circuit with $R=10\Omega$, $L=2H$, and a voltage source $v(t) = 50u(t)$. Assume $i(0^-) = 0$.

**Question 3:**
Find the inverse Laplace Transform of $F(s) = \frac{2s+1}{(s+1)(s+3)}$.

**Question 4:**
A series RC circuit with $R=5\Omega$ and $C=0.1F$ has a voltage source $v(t) = 10e^{-2t}u(t)$ applied at $t=0$. Assume the initial voltage across the capacitor is $v_c(0^-) = 0$. Find the current $i(t)$ using Laplace Transforms.

**Question 5:**
Using the Initial Value Theorem, find the initial value of $f(t)$ whose Laplace Transform is $F(s) = \frac{2s^2+3s+1}{s^3+4s^2+5s}$.

---

## 11. Answers to Practice Questions

**Answer 1:**
Using linearity and standard transforms:
$\mathcal{L}\{3t^2\} = 3 \mathcal{L}\{t^2\} = 3 \frac{2!}{s^{2+1}} = \frac{6}{s^3}$
$\mathcal{L}\{5\sin(4t)\} = 5 \mathcal{L}\{\sin(4t)\} = 5 \frac{4}{s^2 + 4^2} = \frac{20}{s^2 + 16}$
Therefore, $F(s) = \frac{6}{s^3} + \frac{20}{s^2 + 16}$.

**Answer 2:**
Differential equation: $2 \frac{di(t)}{dt} + 10i(t) = 50u(t)$
Laplace Transform: $2[sI(s) - i(0^-)] + 10I(s) = \frac{50}{s}$
With $i(0^-) = 0$: $2sI(s) + 10I(s) = \frac{50}{s}$
$I(s)(2s+10) = \frac{50}{s}$
$I(s) = \frac{50}{s(2s+10)} = \frac{25}{s(s+5)}$

PFE: $I(s) = \frac{A}{s} + \frac{B}{s+5}$
$A = \left. sI(s) \right|_{s=0} = \left. \frac{25}{s+5} \right|_{s=0} = \frac{25}{5} = 5$
$B = \left. (s+5)I(s) \right|_{s=-5} = \left. \frac{25}{s} \right|_{s=-5} = \frac{25}{-5} = -5$

$I(s) = \frac{5}{s} - \frac{5}{s+5}$
$i(t) = 5 - 5e^{-5t}$ for $t \ge 0$.

**Answer 3:**
PFE: $F(s) = \frac{2s+1}{(s+1)(s+3)} = \frac{A}{s+1} + \frac{B}{s+3}$
$A = \left. (s+1)F(s) \right|_{s=-1} = \left. \frac{2s+1}{s+3} \right|_{s=-1} = \frac{2(-1)+1}{-1+3} = \frac{-1}{2} = -0.5$
$B = \left. (s+3)F(s) \right|_{s=-3} = \left. \frac{2s+1}{s+1} \right|_{s=-3} = \frac{2(-3)+1}{-3+1} = \frac{-5}{-2} = 2.5$

$F(s) = \frac{-0.5}{s+1} + \frac{2.5}{s+3}$
$f(t) = -0.5e^{-t} + 2.5e^{-3t}$ for $t \ge 0$.

**Answer 4:**
$v(t) = 10e^{-2t}u(t) \rightarrow V(s) = \frac{10}{s+2}$
Circuit KVL in s-domain with $v_c(0^-)=0$:
$V(s) = RI(s) + \frac{1}{sC}I(s)$
$\frac{10}{s+2} = I(s) (5 + \frac{1}{0.1s})$
$\frac{10}{s+2} = I(s) (5 + \frac{10}{s})$
$\frac{10}{s+2} = I(s) (\frac{5s+10}{s})$
$I(s) = \frac{10}{s+2} \cdot \frac{s}{5s+10} = \frac{10s}{(s+2)5(s+2)} = \frac{2s}{(s+2)^2}$

PFE for repeated roots: $I(s) = \frac{A}{s+2} + \frac{B}{(s+2)^2}$
$B = \left. (s+2)^2 I(s) \right|_{s=-2} = \left. 2s \right|_{s=-2} = 2(-2) = -4$
To find A, equate coefficients or use a value of s:
$\frac{2s}{(s+2)^2} = \frac{A(s+2)+B}{(s+2)^2} \implies 2s = A(s+2) + B = As + 2A + B$
Comparing coefficients of $s$: $2 = A$.
Comparing constant terms: $0 = 2A + B \implies 0 = 2(2) + (-4) = 4 - 4 = 0$. This confirms B.

$I(s) = \frac{2}{s+2} - \frac{4}{(s+2)^2}$
The inverse transform of $\frac{1}{(s+a)^2}$ is $te^{-at}$.
$i(t) = 2e^{-2t} - 4te^{-2t}$ for $t \ge 0$.

**Answer 5:**
Using the Initial Value Theorem: $f(0^+) = \lim_{s \to \infty} sF(s)$
$sF(s) = s \cdot \frac{2s^2+3s+1}{s^3+4s^2+5s} = \frac{2s^2+3s+1}{s^2+4s+5}$
$\lim_{s \to \infty} \frac{2s^2+3s+1}{s^2+4s+5} = \lim_{s \to \infty} \frac{s^2(2+3/s+1/s^2)}{s^2(1+4/s+5/s^2)} = \frac{2}{1} = 2$.
So, $f(0^+) = 2$.

---

## 12. Important Points to Remember

*   **Understand the 'why':** Laplace transforms simplify differential equations to algebraic ones.
*   **Initial Conditions:** They are crucial and must be correctly incorporated using the differentiation property and by modeling energy storage elements. $i(0^-)$ is the current in an inductor just before $t=0$, and $v(0^-)$ is the voltage across a capacitor just before $t=0$.
*   **s-Domain Impedances:** $R$, $sL$, and $1/(sC)$ are your primary tools.
*   **PFE is Key:** Master partial fraction expansion for different root types in the denominator.
*   **Tables are Your Friend:** Memorize common Laplace transform pairs and properties.
*   **IVT and FVT:** Use them to check initial and final values of your time-domain solutions, saving time and identifying errors.
*   **ROC:** While often implied as the region where the transform exists, it's important conceptually for understanding uniqueness and system properties.
*   **The $u(t)$ Function:** It's often implied for all functions starting at $t=0$.

---
