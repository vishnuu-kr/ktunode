---
title: "solution using Laplace transforms"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad1"
status: "completed"
scrapedAt: "2026-05-23T16:11:36.192Z"
---
# CIRCUITS & NETWORKS - Module 3: Laplace Transforms (Review Only)

## Topic: Solution Using Laplace Transforms

This module provides a review of Laplace transforms and their application in solving transient and steady-state analysis of electrical circuits. The ability to transform circuit equations from the time domain to the frequency (s-domain) significantly simplifies the analysis, particularly for circuits containing capacitors and inductors.

---

### Learning Outcomes:

*   **LO1:** Understand the concept of Laplace transform and its properties.
*   **LO2:** Obtain the Laplace transform of standard time-domain functions.
*   **LO3:** Apply Laplace transforms to solve linear ordinary differential equations.
*   **LO4:** Transform circuit elements (resistors, inductors, capacitors) into the s-domain.
*   **LO5:** Solve electrical circuit problems in the s-domain using circuit analysis techniques.
*   **LO6:** Obtain the time-domain solution from the s-domain solution using inverse Laplace transforms.

---

### Course Outcomes Alignment:

*   **CO1:** (Indirectly) While this module focuses on Laplace transforms, the techniques learned can be used to verify results obtained by circuit theorems.
*   **CO2:** **Apply transformation from time domain to s-domain, solve dynamic electric circuits.** This is the core outcome addressed by this module.
*   **CO3, CO4, CO5, CO6:** These outcomes are beyond the scope of this "review only" module, which focuses on the foundational application of Laplace transforms in circuit analysis.

---

### 1. Introduction to Laplace Transforms

The Laplace transform is a mathematical tool that converts a function of time, $f(t)$, into a function of a complex variable $s$, often referred to as the frequency domain or s-domain. This transformation is particularly useful for solving linear differential equations, which are commonly encountered in circuit analysis.

**Definition:** The Laplace transform of a function $f(t)$, denoted by $F(s)$ or $\mathcal{L}\{f(t)\}$, is defined as:

$$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) dt$$

where $s = \sigma + j\omega$ is a complex variable.

**Purpose in Circuit Analysis:**
*   **Simplifies Differential Equations:** Converts integro-differential equations in the time domain into algebraic equations in the s-domain.
*   **Handles Initial Conditions:** Naturally incorporates initial conditions of capacitors and inductors into the s-domain circuit.
*   **Systematic Solution:** Provides a systematic approach to analyze transient and steady-state behavior of circuits.

---

### 2. Properties of Laplace Transforms

Understanding the properties of Laplace transforms is crucial for efficient manipulation and inversion.

*   **Linearity:** $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$
    *   **Concept:** The Laplace transform of a linear combination of functions is the linear combination of their individual Laplace transforms.
*   **Time Shifting:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, for $a > 0$.
    *   **Concept:** A time delay in the time domain corresponds to multiplication by $e^{-as}$ in the s-domain. $u(t)$ is the unit step function.
*   **Frequency Shifting (or s-domain Shifting):** $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$
    *   **Concept:** Multiplication by $e^{-at}$ in the time domain corresponds to shifting the s-domain function by $a$.
*   **Differentiation in Time Domain:**
    *   $\mathcal{L}\{\frac{df(t)}{dt}\} = sF(s) - f(0)$
    *   $\mathcal{L}\{\frac{d^2f(t)}{dt^2}\} = s^2F(s) - sf(0) - f'(0)$
    *   **Concept:** Differentiation in the time domain corresponds to multiplication by $s$ and subtraction of initial conditions in the s-domain.
*   **Integration in Time Domain:** $\mathcal{L}\{\int_{0}^{t} f(\tau) d\tau\} = \frac{F(s)}{s}$
    *   **Concept:** Integration in the time domain corresponds to division by $s$ in the s-domain.
*   **Convolution:** $\mathcal{L}\{(f * g)(t)\} = \mathcal{L}\{\int_{0}^{t} f(\tau)g(t-\tau) d\tau\} = F(s)G(s)$
    *   **Concept:** Convolution in the time domain corresponds to multiplication in the s-domain. This is fundamental for analyzing circuits with impulse responses.
*   **Initial Value Theorem (IVT):** $f(0) = \lim_{s \to \infty} sF(s)$
    *   **Concept:** The initial value of a function can be found from its Laplace transform without explicitly finding the inverse transform.
*   **Final Value Theorem (FVT):** $f(\infty) = \lim_{s \to 0} sF(s)$, provided the poles of $sF(s)$ are in the left half of the s-plane (or at the origin for stable systems).
    *   **Concept:** The final steady-state value of a function can be found from its Laplace transform.

---

### 3. Laplace Transforms of Standard Functions

Here are the Laplace transforms of some commonly encountered functions in circuit analysis:

| Time Domain Function $f(t)$ | Laplace Transform $F(s)$ |
| :-------------------------- | :----------------------- |
| Unit Impulse $\delta(t)$    | 1                        |
| Unit Step $u(t)$            | $\frac{1}{s}$            |
| Exponential Decay $e^{-at}u(t)$ | $\frac{1}{s+a}$          |
| Ramp $t u(t)$               | $\frac{1}{s^2}$          |
| $t^n u(t)$                  | $\frac{n!}{s^{n+1}}$     |
| Sine $\sin(\omega t) u(t)$ | $\frac{\omega}{s^2 + \omega^2}$ |
| Cosine $\cos(\omega t) u(t)$| $\frac{s}{s^2 + \omega^2}$ |
| Sinusoidal Amplitude $\sin(\omega t + \phi)$ | $\frac{s \sin(\phi) + \omega \cos(\phi)}{s^2 + \omega^2}$ |
| Cosine Amplitude $\cos(\omega t + \phi)$ | $\frac{s \cos(\phi) - \omega \sin(\phi)}{s^2 + \omega^2}$ |

**Important Note:** For circuit analysis, we typically assume functions are zero for $t < 0$ and are multiplied by the unit step function $u(t)$. The $u(t)$ is often omitted for brevity in tables but is implicitly understood.

---

### 4. s-Domain Representation of Circuit Elements

The key to using Laplace transforms for circuit analysis is to represent circuit elements and sources in the s-domain.

*   **Resistor (R):**
    *   Time Domain: $v(t) = i(t)R$
    *   s-Domain: $V(s) = I(s)R$
    *   **Concept:** The resistance value remains the same in the s-domain. It acts as a simple impedance.

*   **Inductor (L):**
    *   Time Domain: $v(t) = L \frac{di(t)}{dt}$
    *   s-Domain: $V(s) = L [sI(s) - i(0)]$
    *   **Concept:** An inductor in the s-domain is represented by an impedance $sL$ in series with a voltage source $Li(0)$ representing the initial current. If $i(0) = 0$, it's just $sL$.
    *   **Impedance:** $Z_L(s) = sL$
    *   **Voltage Source Equivalent:** $Li(0)$

*   **Capacitor (C):**
    *   Time Domain: $i(t) = C \frac{dv(t)}{dt}$ or $v(t) = \frac{1}{C} \int_{0}^{t} i(\tau) d\tau + v(0)$
    *   s-Domain: $I(s) = C [sV(s) - v(0)]$ or $V(s) = \frac{1}{C} \frac{I(s)}{s} + \frac{v(0)}{s}$
    *   **Concept:** A capacitor in the s-domain is represented by an impedance $\frac{1}{sC}$ in series with a voltage source $v(0)/s$ (from the integral term of voltage) OR by a current source $Cv(0)$ in parallel with an impedance $\frac{1}{sC}$. If $v(0) = 0$, it's just $\frac{1}{sC}$.
    *   **Impedance:** $Z_C(s) = \frac{1}{sC}$
    *   **Voltage Source Equivalent (if using series impedance):** $\frac{v(0)}{s}$
    *   **Current Source Equivalent (if using parallel impedance):** $Cv(0)$

*   **Independent Voltage Source:**
    *   Time Domain: $v(t)$
    *   s-Domain: $V(s)$
    *   **Concept:** The Laplace transform of the source function.

*   **Independent Current Source:**
    *   Time Domain: $i(t)$
    *   s-Domain: $I(s)$
    *   **Concept:** The Laplace transform of the source function.

**Summary of s-Domain Impedances:**

*   Resistor: $R$
*   Inductor: $sL$
*   Capacitor: $\frac{1}{sC}$

These impedances behave like resistors in AC steady-state analysis, allowing us to use familiar circuit analysis techniques like Ohm's Law, Kirchhoff's Laws, and network theorems (like voltage division, current division, superposition, nodal, and mesh analysis) directly in the s-domain.

---

### 5. Solving Circuits in the s-Domain

The process involves these steps:

1.  **Transform the Circuit:**
    *   Convert all time-domain sources (voltage, current) into their s-domain equivalents.
    *   Convert all circuit elements (R, L, C) into their s-domain impedances.
    *   Include initial conditions as voltage or current sources in series or parallel with the element impedances.
2.  **Analyze the s-Domain Circuit:**
    *   Use standard circuit analysis techniques (Ohm's Law, KVL, KCL, nodal analysis, mesh analysis, voltage/current division, superposition, etc.) to find the desired quantity (e.g., voltage across a capacitor, current through an inductor) in the s-domain, $X(s)$.
3.  **Find the Time-Domain Solution:**
    *   Obtain the time-domain response, $x(t)$, by taking the inverse Laplace transform of $X(s)$, i.e., $x(t) = \mathcal{L}^{-1}\{X(s)\}$. This often involves techniques like partial fraction expansion.

**Partial Fraction Expansion (PFE):**
This is a crucial technique for breaking down complex $F(s)$ expressions into simpler terms whose inverse Laplace transforms are known. Common forms of $F(s)$ and their PFE:

*   **Distinct Real Poles:**
    $F(s) = \frac{N(s)}{(s-p_1)(s-p_2)...} = \frac{A_1}{s-p_1} + \frac{A_2}{s-p_2} + ...$
*   **Repeated Real Poles:**
    $F(s) = \frac{N(s)}{(s-p_1)^2} = \frac{A_1}{s-p_1} + \frac{A_2}{(s-p_1)^2}$
*   **Complex Conjugate Poles:**
    $F(s) = \frac{N(s)}{(s-p_1)(s-p_2)} = \frac{A}{s-p_1} + \frac{B}{s-p_2}$ (where $p_1, p_2$ are complex conjugates)
    Alternatively, for quadratic factors:
    $F(s) = \frac{As+B}{s^2 + \omega^2}$ (for $\sin(\omega t)$ and $\cos(\omega t)$ terms)

**Example 1: RL Circuit Analysis**

Consider an RL circuit with a series resistor $R$, inductor $L$, and a DC voltage source $V_s$ applied at $t=0$. Assume zero initial current $i(0)=0$. Find the current $i(t)$.

**Steps:**

1.  **Transform the Circuit:**
    *   Voltage source $V_s u(t)$ transforms to $V_s/s$.
    *   Resistor $R$ remains $R$.
    *   Inductor $L$ with $i(0)=0$ transforms to impedance $sL$.
    *   The circuit becomes a simple series circuit in the s-domain with total impedance $Z(s) = R + sL$.
    *   The voltage equation in the s-domain is: $V_s/s = I(s)Z(s) = I(s)(R + sL)$.

2.  **Analyze the s-Domain Circuit:**
    *   Solve for $I(s)$:
        $I(s) = \frac{V_s/s}{R + sL} = \frac{V_s}{s(R+sL)} = \frac{V_s}{L(s + R/L)}$
    *   We can rewrite this as:
        $I(s) = \frac{V_s/L}{s(s + R/L)}$

3.  **Find the Time-Domain Solution (Inverse Laplace Transform):**
    *   Use Partial Fraction Expansion for $I(s)$:
        $\frac{V_s/L}{s(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
    *   Multiply by $s(s+R/L)$:
        $\frac{V_s}{L} = A(s + R/L) + Bs$
    *   To find A, set $s=0$:
        $\frac{V_s}{L} = A(0 + R/L) \Rightarrow A = \frac{V_s}{R}$
    *   To find B, set $s = -R/L$:
        $\frac{V_s}{L} = A(0) + B(-R/L) \Rightarrow B = -\frac{V_s}{R}$
    *   So, $I(s) = \frac{V_s/R}{s} - \frac{V_s/R}{s + R/L}$
    *   Take the inverse Laplace transform using known transforms:
        $i(t) = \mathcal{L}^{-1}\{\frac{V_s/R}{s}\} - \mathcal{L}^{-1}\{\frac{V_s/R}{s + R/L}\}$
        $i(t) = \frac{V_s}{R}u(t) - \frac{V_s}{R}e^{-(R/L)t}u(t)$
        $i(t) = \frac{V_s}{R} (1 - e^{-(R/L)t})u(t)$

**Textbook Reference:**
*   Van Valkenburg, "Network Analysis": Chapter on transient analysis using Laplace transforms will cover these concepts in detail. Look for sections on s-domain analysis of RLC circuits.
*   Ravish R Singh, "Network Analysis and Synthesis": Similar coverage, focusing on the transformation and solution methodology.
*   Suresh Kumar, "Electric Circuits & Networks": Expect foundational explanation of Laplace transforms and their application to circuit solving.
*   A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis": This text likely provides a comprehensive treatment with numerous examples.

**Important Point to Remember:** The initial conditions are crucial. If $i(0) \neq 0$ for an inductor, the term $Li(0)$ must be included as a voltage source in series. For a capacitor with $v(0) \neq 0$, the term $v(0)/s$ (or $Cv(0)$ as a current source) must be included.

---

### 6. Inverse Laplace Transforms

This is the process of converting a function from the s-domain back to the time domain.

**Key Techniques:**

*   **Using Standard Transform Pairs:** Recognize common forms of $F(s)$ and directly apply the inverse Laplace transform.
*   **Partial Fraction Expansion (PFE):** As demonstrated in Example 1, this is the most common method for breaking down complex expressions.
*   **Convolution Theorem:** $\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t)$
*   **Table Look-up:** Most textbooks provide extensive tables of Laplace transform pairs.

**Example 2: RC Circuit Analysis with Initial Voltage**

Consider an RC circuit with a series resistor $R$, capacitor $C$, and a DC voltage source $V_s$ applied at $t=0$. Assume the capacitor has an initial voltage $v_c(0) = V_0$. Find the voltage across the capacitor $v_c(t)$.

**Steps:**

1.  **Transform the Circuit:**
    *   Voltage source $V_s u(t)$ transforms to $V_s/s$.
    *   Resistor $R$ remains $R$.
    *   Capacitor $C$ with initial voltage $v_c(0) = V_0$ transforms to impedance $1/(sC)$ in series with a voltage source $v_c(0)/s = V_0/s$.
    *   The circuit in the s-domain has a total voltage of $V_s/s + V_0/s$ across the series combination of $R$ and $1/(sC)$.
    *   The voltage equation in the s-domain is: $\frac{V_s}{s} + \frac{V_0}{s} = I(s)R + I(s)\frac{1}{sC}$

2.  **Analyze the s-Domain Circuit:**
    *   Solve for $I(s)$:
        $\frac{V_s+V_0}{s} = I(s)(R + \frac{1}{sC}) = I(s)(\frac{sRC+1}{sC})$
        $I(s) = \frac{V_s+V_0}{s} \cdot \frac{sC}{sRC+1} = \frac{C(V_s+V_0)}{sRC+1}$
        $I(s) = \frac{C(V_s+V_0)}{RC(s + 1/RC)} = \frac{V_s+V_0}{R(s + 1/RC)}$
    *   Now, find the voltage across the capacitor, $V_C(s)$:
        $V_C(s) = I(s) \cdot \frac{1}{sC} + \frac{V_0}{s}$
        $V_C(s) = \frac{V_s+V_0}{R(s + 1/RC)} \cdot \frac{1}{sC} + \frac{V_0}{s}$
        $V_C(s) = \frac{V_s+V_0}{RC(s + 1/RC)} \cdot \frac{1}{s} + \frac{V_0}{s}$
        $V_C(s) = \frac{V_s+V_0}{RC} \frac{1}{s(s + 1/RC)} + \frac{V_0}{s}$

3.  **Find the Time-Domain Solution (Inverse Laplace Transform):**
    *   Use PFE for the first term: $\frac{V_s+V_0}{RC} \frac{1}{s(s + 1/RC)} = \frac{A}{s} + \frac{B}{s + 1/RC}$
        *   $A = \frac{V_s+V_0}{RC} \frac{1}{1/RC} = \frac{V_s+V_0}{1}$
        *   $B = \frac{V_s+V_0}{RC} \frac{1}{0 - 1/RC} = -(V_s+V_0)$
    *   So, the first term's inverse transform is: $\frac{V_s+V_0}{1}u(t) - (V_s+V_0)e^{-(1/RC)t}u(t)$
    *   The second term's inverse transform is: $V_0 u(t)$.
    *   Combining them:
        $v_c(t) = (V_s+V_0)u(t) - (V_s+V_0)e^{-(1/RC)t}u(t) + V_0 u(t)$
        $v_c(t) = (V_s+2V_0)u(t) - (V_s+V_0)e^{-(1/RC)t}u(t)$
        This is incorrect. Let's re-calculate $V_C(s)$ and use PFE more carefully.

    Let's use a simpler approach for $V_C(s)$ directly from the transformed circuit.
    $V_C(s) = \frac{V_s/s + V_0/s}{R + 1/(sC)} \times \frac{1}{sC}$ (Voltage division on the impedance)
    $V_C(s) = \frac{(V_s+V_0)/s}{(sRC+1)/sC} \times \frac{1}{sC}$
    $V_C(s) = \frac{V_s+V_0}{s} \times \frac{sC}{sRC+1} \times \frac{1}{sC}$
    $V_C(s) = \frac{V_s+V_0}{sRC+1} = \frac{V_s+V_0}{RC(s + 1/RC)} = \frac{(V_s+V_0)/RC}{s + 1/RC}$

    Now, take the inverse Laplace transform:
    $v_c(t) = \mathcal{L}^{-1}\left\{\frac{(V_s+V_0)/RC}{s + 1/RC}\right\}u(t)$
    $v_c(t) = \frac{V_s+V_0}{RC} e^{-(1/RC)t} u(t)$

    *Wait, this doesn't look right. The voltage should be $V_s$ as t goes to infinity. Let's re-evaluate the initial transformation and voltage division logic.*

    Let's restart the $V_C(s)$ calculation using KCL at the top node in the s-domain:
    Source voltage: $V_s/s$.
    Capacitor initial voltage: $V_0/s$ in series.
    Total voltage across R and C impedance: $\frac{V_s}{s} = I(s)R + V_C(s)$.
    And $I(s) = sC V_C(s) - Cv_c(0) = sC V_C(s) - CV_0$.
    Substitute $I(s)$ into the voltage equation:
    $\frac{V_s}{s} = (sC V_C(s) - CV_0)R + V_C(s)$
    $\frac{V_s}{s} = sRC V_C(s) - V_0RC + V_C(s)$
    $\frac{V_s}{s} + V_0RC = V_C(s)(sRC + 1)$
    $V_C(s) = \frac{V_s/s + V_0RC}{sRC + 1} = \frac{(V_s + V_0RCs)/s}{sRC + 1}$
    $V_C(s) = \frac{V_0RCs + V_s}{s(sRC + 1)}$

    Now, use PFE for $V_C(s)$:
    $\frac{V_0RCs + V_s}{s(sRC + 1)} = \frac{A}{s} + \frac{B}{s + 1/RC}$
    $V_0RCs + V_s = A(sRC+1) + Bs$
    Set $s=0$: $V_s = A(1) \implies A = V_s$
    Set $s=-1/RC$: $V_0RC(-1/RC) + V_s = B(-1/RC)$
    $-V_0 + V_s = -B/RC \implies B = RC(V_0 - V_s)$

    So, $V_C(s) = \frac{V_s}{s} + \frac{RC(V_0 - V_s)}{s + 1/RC}$
    Take the inverse Laplace transform:
    $v_c(t) = \mathcal{L}^{-1}\left\{\frac{V_s}{s}\right\} + \mathcal{L}^{-1}\left\{\frac{RC(V_0 - V_s)}{s + 1/RC}\right\}$
    $v_c(t) = V_s u(t) + RC(V_0 - V_s) e^{-(1/RC)t} u(t)$
    $v_c(t) = V_s + (V_0 - V_s)RC \frac{1}{RC} e^{-t/RC} u(t)$
    $v_c(t) = V_s + (V_0 - V_s) e^{-t/RC} u(t)$

    This is the correct form. As $t \to \infty$, $e^{-t/RC} \to 0$, so $v_c(t) \to V_s$.
    At $t=0$, $v_c(0) = V_s + (V_0 - V_s)e^0 = V_s + V_0 - V_s = V_0$. This matches the initial condition.

**Textbook Reference:**
*   All listed textbooks will have sections dedicated to inverse Laplace transforms and partial fraction expansion. Pay close attention to the examples provided.

---

### 7. Practice Questions and Exercises

**Question 1:**
Find the Laplace transform of the following function:
$f(t) = (5 \cos(2t) - 3 \sin(2t)) u(t)$

**Answer 1:**
Using the properties of Laplace transforms:
$\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2+\omega^2}$
$\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2+\omega^2}$
For $\omega=2$:
$\mathcal{L}\{\cos(2t)\} = \frac{s}{s^2+4}$
$\mathcal{L}\{\sin(2t)\} = \frac{2}{s^2+4}$
By linearity:
$F(s) = \mathcal{L}\{5 \cos(2t)\} - \mathcal{L}\{3 \sin(2t)\}$
$F(s) = 5 \frac{s}{s^2+4} - 3 \frac{2}{s^2+4}$
$F(s) = \frac{5s - 6}{s^2+4}$

**Question 2:**
Find the inverse Laplace transform of:
$F(s) = \frac{10}{(s+2)(s+3)}$

**Answer 2:**
Use Partial Fraction Expansion:
$\frac{10}{(s+2)(s+3)} = \frac{A}{s+2} + \frac{B}{s+3}$
$10 = A(s+3) + B(s+2)$
Set $s=-2$: $10 = A(-2+3) \implies A = 10$
Set $s=-3$: $10 = B(-3+2) \implies B = -10$
$F(s) = \frac{10}{s+2} - \frac{10}{s+3}$
$f(t) = \mathcal{L}^{-1}\left\{\frac{10}{s+2}\right\} - \mathcal{L}^{-1}\left\{\frac{10}{s+3}\right\}$
$f(t) = 10e^{-2t}u(t) - 10e^{-3t}u(t)$
$f(t) = 10(e^{-2t} - e^{-3t})u(t)$

**Question 3:**
In the series RL circuit of Example 1, if the inductor had an initial current of $i(0) = I_0$ (flowing in the assumed direction), how would the equation for $I(s)$ change, and what would be the final current $i(t)$?

**Answer 3:**
When the inductor has an initial current $i(0) = I_0$, the voltage across the inductor in the s-domain becomes $V_L(s) = sLI(s) - LI_0$.
The circuit equation becomes: $\frac{V_s}{s} = I(s)R + sLI(s) - LI_0$
$I(s)(R+sL) = \frac{V_s}{s} + LI_0$
$I(s) = \frac{V_s/s + LI_0}{R+sL} = \frac{V_s + sLI_0}{s(R+sL)} = \frac{V_s + sLI_0}{L(s + R/L)}$

Using PFE:
$\frac{V_s + sLI_0}{sL(s + R/L)} = \frac{V_s}{sL(s + R/L)} + \frac{sLI_0}{sL(s + R/L)} = \frac{V_s}{sL(s + R/L)} + \frac{I_0}{s + R/L}$

The first term: $\frac{V_s}{sL(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
$V_s = AL(s + R/L) + BsL$
Set $s=0$: $V_s = A L (R/L) \implies A = V_s/R$
Set $s=-R/L$: $V_s = B (-R/L)L = -BR \implies B = -V_s/R$
So, $\frac{V_s}{sL(s + R/L)} = \frac{V_s/R}{s} - \frac{V_s/R}{s + R/L}$

Combining all terms:
$I(s) = \left(\frac{V_s/R}{s} - \frac{V_s/R}{s + R/L}\right) + \frac{I_0}{s + R/L}$
$I(s) = \frac{V_s/R}{s} + \left(I_0 - \frac{V_s}{R}\right) \frac{1}{s + R/L}$

Taking the inverse Laplace transform:
$i(t) = \frac{V_s}{R}u(t) + \left(I_0 - \frac{V_s}{R}\right)e^{-(R/L)t}u(t)$

**Final Current:** As $t \to \infty$, $e^{-(R/L)t} \to 0$, so $i(t) \to \frac{V_s}{R}u(t)$. This is the steady-state current through the resistor, as expected when the inductor acts as a short circuit in DC steady state.

---

### 8. Important Points to Remember

*   **Transform everything:** Convert sources, elements, and initial conditions to the s-domain.
*   **Ohm's Law in s-domain:** $V(s) = I(s)Z(s)$ is fundamental.
*   **Initial conditions are critical:** They are represented as voltage or current sources.
*   **Partial Fraction Expansion (PFE):** Master this technique for inverse Laplace transforms.
*   **Standard transform pairs:** Keep a table handy and memorize common ones.
*   **Time shifting vs. s-domain shifting:** Understand the difference and their corresponding operations.
*   **Final Value Theorem (FVT):** Useful for predicting steady-state behavior without full inversion.
*   **The Unit Step Function $u(t)$:** Though often omitted in tables, it's implicitly present to indicate that the function is defined for $t \ge 0$.

---

This review covers the essential aspects of using Laplace transforms for circuit analysis. For deeper understanding and more complex scenarios, refer to the provided textbooks. The ability to confidently transform circuits and solve for unknowns in the s-domain is a cornerstone of network analysis.
