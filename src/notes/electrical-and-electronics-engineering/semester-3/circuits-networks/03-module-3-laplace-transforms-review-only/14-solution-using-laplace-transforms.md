---
title: "solution using Laplace 
transforms"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad9"
status: "completed"
scrapedAt: "2026-05-23T16:11:42.370Z"
---
# CIRCUITS & NETWORKS - Module 3: Laplace Transforms (Review) - Solution Using Laplace Transforms

This module serves as a crucial review of Laplace transforms and their application in solving electric circuit problems, particularly dynamic circuits. It directly supports **Course Outcome 2 (CO2)**: "Apply transformation from time domain to s-domain, solve dynamic electric circuits."

---

## 1. Introduction to Laplace Transforms in Circuit Analysis

The Laplace transform is a powerful mathematical tool that converts differential equations in the time domain into algebraic equations in the complex frequency domain (s-domain). This transformation simplifies the analysis of dynamic circuits (circuits containing capacitors and inductors) significantly.

**Key Concept:** The Laplace transform converts integro-differential equations into algebraic equations, making them easier to solve.

**Why use Laplace Transforms for Circuits?**

*   **Simplification:** Differential equations governing RLC circuits become algebraic equations in the s-domain.
*   **Transient Analysis:** Naturally handles initial conditions of capacitors and inductors.
*   **Systematic Approach:** Provides a structured method for solving circuit problems.
*   **Foundation for Frequency Domain Analysis:** Essential for understanding transfer functions and system response.

---

## 2. Review of Essential Laplace Transform Pairs and Properties

This section revisits fundamental Laplace transform pairs and properties crucial for circuit analysis.

### 2.1. Common Laplace Transform Pairs

| Time Domain Function, $f(t)$ | Laplace Transform, $F(s)$ | Remarks |
| :------------------------- | :------------------------ | :------ |
| $u(t)$ (Unit step function) | $\frac{1}{s}$             | $u(t) = 0$ for $t<0$, $u(t) = 1$ for $t \ge 0$ |
| $tu(t)$                    | $\frac{1}{s^2}$           |         |
| $\frac{t^{n-1}}{(n-1)!} u(t)$ | $\frac{1}{s^n}$           | for integer $n \ge 1$ |
| $e^{-at} u(t)$             | $\frac{1}{s+a}$           |         |
| $t e^{-at} u(t)$           | $\frac{1}{(s+a)^2}$       |         |
| $\sin(\omega t) u(t)$      | $\frac{\omega}{s^2 + \omega^2}$ |         |
| $\cos(\omega t) u(t)$      | $\frac{s}{s^2 + \omega^2}$  |         |
| $e^{-at} \sin(\omega t) u(t)$ | $\frac{\omega}{(s+a)^2 + \omega^2}$ |         |
| $e^{-at} \cos(\omega t) u(t)$ | $\frac{s+a}{(s+a)^2 + \omega^2}$ |         |
| $\delta(t)$ (Dirac delta function) | $1$                       | $ \int_{-\infty}^{\infty} \delta(t) dt = 1 $ |
| $\delta'(t)$ (Derivative of delta function) | $s$                       |         |

**Textbook Reference:** Van Valkenburg (3rd Ed., 2019), Chapter on Laplace Transforms, often includes a table of transform pairs. Sudhakar & Palli (5th Ed., 2017) also provides comprehensive tables.

### 2.2. Key Laplace Transform Properties

*   **Linearity:** $\mathcal{L}[af(t) + bg(t)] = aF(s) + bG(s)$
    *   *Implication:* The Laplace transform of a sum of functions is the sum of their Laplace transforms.

*   **Time Shifting:** $\mathcal{L}[f(t-a)u(t-a)] = e^{-as}F(s)$ for $a > 0$
    *   *Implication:* A delay in the time domain corresponds to multiplication by $e^{-as}$ in the s-domain.

*   **Frequency Shifting (or s-Shifting):** $\mathcal{L}[e^{-at}f(t)] = F(s+a)$
    *   *Implication:* Multiplication by $e^{-at}$ in the time domain corresponds to replacing $s$ with $s+a$ in the s-domain.

*   **Differentiation in Time Domain:**
    *   $\mathcal{L}[f'(t)] = sF(s) - f(0^-)$
    *   $\mathcal{L}[f''(t)] = s^2F(s) - sf(0^-) - f'(0^-)$
    *   *Implication:* Derivatives in the time domain become multiplications by $s$ in the s-domain, along with terms for initial conditions.

*   **Integration in Time Domain:** $\mathcal{L}[\int_0^t f(\tau) d\tau] = \frac{F(s)}{s}$
    *   *Implication:* Integration in the time domain becomes division by $s$ in the s-domain.

*   **Multiplication by $t$:** $\mathcal{L}[tf(t)] = -\frac{dF(s)}{ds}$
    *   *Implication:* Multiplication by $t$ in the time domain is equivalent to differentiating the Laplace transform with respect to $s$ and multiplying by -1.

*   **Convolution:** $\mathcal{L}[\int_0^t f_1(\tau)f_2(t-\tau) d\tau] = F_1(s)F_2(s)$
    *   *Implication:* Convolution in the time domain becomes multiplication in the s-domain. This is fundamental for analyzing systems described by impulse responses.

**Textbook Reference:** Ravish R Singh (2nd Ed., 2019) and Suresh Kumar (1st Ed., 2008) both have dedicated chapters detailing these properties.

---

## 3. Laplace Transform Analysis of Dynamic Circuits

The core of this topic is applying Laplace transforms to solve differential equations governing circuits with energy storage elements (inductors and capacitors).

### 3.1. Transforming Circuit Elements to the s-Domain

When a circuit is transformed to the s-domain, the time-domain components are replaced by their s-domain equivalents.

*   **Resistor (R):**
    *   Time Domain: $v(t) = R i(t)$
    *   Laplace Transform: $V(s) = R I(s)$
    *   **s-Domain Impedance:** $Z_R(s) = R$

*   **Inductor (L):**
    *   Time Domain: $v(t) = L \frac{di(t)}{dt}$
    *   Laplace Transform: $V(s) = L [sI(s) - i(0^-)]$
    *   **s-Domain Impedance:** $Z_L(s) = Ls$
    *   **Initial Condition (Current):** An inductor with initial current $i(0^-)$ is represented by an impedance $Ls$ in series with a voltage source of value $Li(0^-)$ (positive terminal at the current's direction of flow).

*   **Capacitor (C):**
    *   Time Domain: $i(t) = C \frac{dv(t)}{dt}$ or $v(t) = \frac{1}{C} \int_0^t i(\tau) d\tau + v(0^-)$
    *   Laplace Transform (Voltage across C): $V(s) = \frac{1}{C} \frac{I(s)}{s} + \frac{v(0^-)}{s}$
    *   **s-Domain Impedance:** $Z_C(s) = \frac{1}{Cs}$
    *   **Initial Condition (Voltage):** A capacitor with initial voltage $v(0^-)$ is represented by an impedance $\frac{1}{Cs}$ in series with a voltage source of value $\frac{v(0^-)}{s}$ (positive terminal at the capacitor's positive terminal). Alternatively, it can be viewed as an impedance $\frac{1}{Cs}$ in parallel with a current source of value $Cv(0^-)$.

**Important Point to Remember:** The initial conditions of inductors (current) and capacitors (voltage) must be incorporated when transforming the circuit to the s-domain. This is crucial for solving transient responses.

**Textbook Reference:** All listed textbooks cover this transformation of circuit elements in their Laplace transform chapters. Van Valkenburg's "Network Analysis" is particularly renowned for its clear explanation of these s-domain models.

### 3.2. Transforming Source Functions to the s-Domain

Common excitation functions in the time domain are also transformed.

*   **DC Source (V):** $V \implies \frac{V}{s}$
*   **AC Source (Vcos($\omega$t)):** $V\cos(\omega t) \implies V \frac{s}{s^2+\omega^2}$
*   **AC Source (Vsin($\omega$t)):** $V\sin(\omega t) \implies V \frac{\omega}{s^2+\omega^2}$
*   **Unit Step Function:** $u(t) \implies \frac{1}{s}$

---

## 4. Solving Circuit Equations in the s-Domain

Once the circuit is in the s-domain, we can use standard circuit analysis techniques (Kirchhoff's Laws, mesh analysis, nodal analysis, voltage/current division, superposition) to find the desired s-domain response (e.g., $V(s)$ or $I(s)$).

### 4.1. Steps for Solution

1.  **Transform the Circuit:** Convert time-domain components and sources into their s-domain equivalents, including initial conditions.
2.  **Write s-Domain Equations:** Apply Kirchhoff's Voltage Law (KVL) or Kirchhoff's Current Law (KCL) to write algebraic equations in terms of $s$.
3.  **Solve for the Desired Response:** Solve the algebraic equations to find the unknown voltage or current in the s-domain (e.g., $X(s)$).
4.  **Find the Inverse Laplace Transform:** Use partial fraction expansion and inverse Laplace transform pairs to convert the s-domain solution back to the time domain, obtaining $x(t)$.

### 4.2. Example: First-Order RL Circuit

**Problem:** Consider an RL series circuit with a resistor $R=10\Omega$, an inductor $L=2H$, and a voltage source $v_s(t) = 5u(t)V$. The switch is closed at $t=0$. Assume the inductor has no initial current, $i(0^-) = 0$. Find the current $i(t)$ for $t \ge 0$.

**Solution:**

1.  **Transform the Circuit:**
    *   $R = 10\Omega$
    *   $L = 2H \implies Z_L(s) = Ls = 2s\Omega$
    *   $v_s(t) = 5u(t)V \implies V_s(s) = \frac{5}{s}V$
    *   Initial condition: $i(0^-) = 0$

    The circuit in the s-domain is a series combination of $10\Omega$, $2s\Omega$, and a voltage source $\frac{5}{s}V$.

2.  **Write s-Domain Equations:**
    Using KVL in the s-domain:
    $V_s(s) = R I(s) + Ls I(s)$
    $\frac{5}{s} = 10 I(s) + 2s I(s)$

3.  **Solve for the Desired Response $I(s)$:**
    $\frac{5}{s} = I(s) (10 + 2s)$
    $I(s) = \frac{5}{s(10 + 2s)} = \frac{5}{2s(5 + s)}$
    $I(s) = \frac{5}{10s(1 + s/5)}$
    $I(s) = \frac{1}{2s(1 + s/5)}$

4.  **Find the Inverse Laplace Transform:**
    We need to use partial fraction expansion for $I(s)$.
    $I(s) = \frac{A}{s} + \frac{B}{s+5}$
    Multiply both sides by $s(s+5)$:
    $1 = A(s+5) + Bs$

    *   To find A, set $s=0$: $1 = A(0+5) + B(0) \implies 1 = 5A \implies A = \frac{1}{5}$
    *   To find B, set $s=-5$: $1 = A(-5+5) + B(-5) \implies 1 = -5B \implies B = -\frac{1}{5}$

    So, $I(s) = \frac{1/5}{s} - \frac{1/5}{s+5}$

    Now, take the inverse Laplace transform:
    $i(t) = \mathcal{L}^{-1}\left[\frac{1/5}{s}\right] - \mathcal{L}^{-1}\left[\frac{1/5}{s+5}\right]$
    $i(t) = \frac{1}{5} u(t) - \frac{1}{5} e^{-5t} u(t)$
    $i(t) = \frac{1}{5}(1 - e^{-5t}) u(t)$

**Textbook Reference:** This type of example is standard in Chapters related to Laplace transforms in Van Valkenburg, Ravish R Singh, Suresh Kumar, and Sudhakar & Palli.

### 4.3. Example: Second-Order RLC Circuit

**Problem:** Consider a series RLC circuit with $R=2\Omega$, $L=1H$, $C=0.5F$, and a voltage source $v_s(t) = 10u(t)V$. The switch is closed at $t=0$. Assume $i(0^-)=0$ and $v_c(0^-)=0$. Find the current $i(t)$ for $t \ge 0$.

**Solution:**

1.  **Transform the Circuit:**
    *   $R = 2\Omega$
    *   $L = 1H \implies Z_L(s) = 1s = s\Omega$
    *   $C = 0.5F \implies Z_C(s) = \frac{1}{0.5s} = \frac{2}{s}\Omega$
    *   $v_s(t) = 10u(t)V \implies V_s(s) = \frac{10}{s}V$
    *   Initial conditions: $i(0^-)=0$, $v_c(0^-)=0$. The inductor's initial condition term ($Li(0^-)$) is zero. The capacitor's initial condition term ($\frac{v_c(0^-)}{s}$) is zero.

    The s-domain circuit is a series combination of $2\Omega$, $s\Omega$, $\frac{2}{s}\Omega$, and a voltage source $\frac{10}{s}V$.

2.  **Write s-Domain Equations:**
    Using KVL:
    $V_s(s) = R I(s) + Ls I(s) + \frac{1}{Cs} I(s)$
    $\frac{10}{s} = 2 I(s) + s I(s) + \frac{2}{s} I(s)$

3.  **Solve for the Desired Response $I(s)$:**
    $\frac{10}{s} = I(s) \left(2 + s + \frac{2}{s}\right)$
    $\frac{10}{s} = I(s) \left(\frac{2s + s^2 + 2}{s}\right)$
    $10 = I(s) (s^2 + 2s + 2)$
    $I(s) = \frac{10}{s^2 + 2s + 2}$

4.  **Find the Inverse Laplace Transform:**
    We need to complete the square in the denominator to match the sine/cosine transform pairs.
    $s^2 + 2s + 2 = (s^2 + 2s + 1) + 1 = (s+1)^2 + 1^2$
    So, $I(s) = \frac{10}{(s+1)^2 + 1^2}$

    This resembles the form $\frac{\omega}{(s+a)^2 + \omega^2}$, which transforms to $e^{-at}\sin(\omega t)u(t)$.
    In our case, $a=1$ and $\omega=1$. To match the numerator, we need 1, but we have 10. We can rewrite:
    $I(s) = 10 \times \frac{1}{(s+1)^2 + 1^2}$
    To get the correct form $\frac{\omega}{(s+a)^2+\omega^2}$, we need a '1' in the numerator.
    $I(s) = 10 \times \frac{1}{(s+1)^2 + 1^2} = 10 \times \mathcal{L}[e^{-t} \sin(t) u(t)]$

    Therefore, $i(t) = 10 e^{-t} \sin(t) u(t)$.

**Important Point to Remember:** Partial fraction expansion is a key technique. If the denominator has repeated roots or complex roots, specific methods are used. Completing the square is common for second-order circuits.

---

## 5. Role of Initial Conditions

Initial conditions ($i(0^-)$ for inductors, $v(0^-)$ for capacitors) are critical for determining the complete solution, especially the transient response.

*   **Zero Initial Conditions:** Simplifies the analysis as there are no initial condition voltage/current sources.
*   **Non-zero Initial Conditions:** Contribute to the overall response and must be included as voltage or current sources in the s-domain circuit.

---

## 6. Practice Questions and Exercises

**Question 1:**
Find the Laplace transform of $f(t) = e^{-2t} \cos(3t) u(t)$.

**Answer 1:**
We know $\mathcal{L}[\cos(\omega t) u(t)] = \frac{s}{s^2 + \omega^2}$.
Using the frequency shifting property $\mathcal{L}[e^{-at}f(t)] = F(s+a)$:
Here, $a=2$ and $\omega=3$.
So, $F(s) = \frac{s}{s^2 + 3^2} = \frac{s}{s^2 + 9}$.
Then, $\mathcal{L}[e^{-2t} \cos(3t) u(t)] = F(s+2) = \frac{s+2}{(s+2)^2 + 9} = \frac{s+2}{s^2 + 4s + 4 + 9} = \frac{s+2}{s^2 + 4s + 13}$.

**Question 2:**
Find the inverse Laplace transform of $G(s) = \frac{s+3}{s(s+1)}$.

**Answer 2:**
Use partial fraction expansion:
$\frac{s+3}{s(s+1)} = \frac{A}{s} + \frac{B}{s+1}$
Multiply by $s(s+1)$: $s+3 = A(s+1) + Bs$

*   Set $s=0$: $0+3 = A(0+1) + B(0) \implies 3 = A$.
*   Set $s=-1$: $-1+3 = A(-1+1) + B(-1) \implies 2 = -B \implies B = -2$.

So, $G(s) = \frac{3}{s} - \frac{2}{s+1}$.
Taking the inverse Laplace transform:
$g(t) = \mathcal{L}^{-1}\left[\frac{3}{s}\right] - \mathcal{L}^{-1}\left[\frac{2}{s+1}\right]$
$g(t) = 3u(t) - 2e^{-t}u(t) = (3 - 2e^{-t})u(t)$.

**Question 3:**
A series RC circuit with $R=5\Omega$ and $C=0.1F$ is connected to a voltage source $v_s(t) = 12e^{-t}u(t)V$. The capacitor has an initial voltage $v_c(0^-) = 5V$. Find the current $i(t)$ for $t \ge 0$.

**Answer 3:**
1.  **Transform:**
    *   $R = 5\Omega$
    *   $C = 0.1F \implies Z_C(s) = \frac{1}{0.1s} = \frac{10}{s}\Omega$
    *   $v_s(t) = 12e^{-t}u(t)V \implies V_s(s) = 12 \frac{1}{s+1}V$
    *   Initial condition: $v_c(0^-) = 5V$. This appears as a voltage source $\frac{v_c(0^-)}{s} = \frac{5}{s}V$ in series with the capacitor's impedance $\frac{10}{s}\Omega$.

2.  **s-Domain Equation (KVL):**
    $V_s(s) = R I(s) + Z_C(s) I(s) + \frac{v_c(0^-)}{s}$
    $\frac{12}{s+1} = 5 I(s) + \frac{10}{s} I(s) + \frac{5}{s}$

3.  **Solve for $I(s)$:**
    $\frac{12}{s+1} - \frac{5}{s} = I(s) \left(5 + \frac{10}{s}\right)$
    $\frac{12s - 5(s+1)}{s(s+1)} = I(s) \left(\frac{5s + 10}{s}\right)$
    $\frac{12s - 5s - 5}{s(s+1)} = I(s) \left(\frac{5(s + 2)}{s}\right)$
    $\frac{7s - 5}{s(s+1)} = I(s) \frac{5(s+2)}{s}$
    Cancel 's' from denominators on both sides (assuming $s \ne 0$):
    $\frac{7s - 5}{s+1} = I(s) 5(s+2)$
    $I(s) = \frac{7s - 5}{5(s+1)(s+2)}$

4.  **Inverse Laplace Transform (Partial Fractions):**
    $I(s) = \frac{7s - 5}{5(s+1)(s+2)} = \frac{1}{5} \left( \frac{7s - 5}{(s+1)(s+2)} \right)$
    Let's expand $\frac{7s - 5}{(s+1)(s+2)} = \frac{A}{s+1} + \frac{B}{s+2}$
    $7s - 5 = A(s+2) + B(s+1)$
    *   Set $s=-1$: $7(-1) - 5 = A(-1+2) + B(-1+1) \implies -7 - 5 = A(1) \implies A = -12$.
    *   Set $s=-2$: $7(-2) - 5 = A(-2+2) + B(-2+1) \implies -14 - 5 = B(-1) \implies -19 = -B \implies B = 19$.

    So, $\frac{7s - 5}{(s+1)(s+2)} = \frac{-12}{s+1} + \frac{19}{s+2}$.
    $I(s) = \frac{1}{5} \left( \frac{-12}{s+1} + \frac{19}{s+2} \right)$
    $i(t) = \frac{1}{5} \left( -12 \mathcal{L}^{-1}\left[\frac{1}{s+1}\right] + 19 \mathcal{L}^{-1}\left[\frac{1}{s+2}\right] \right)$
    $i(t) = \frac{1}{5} (-12e^{-t}u(t) + 19e^{-2t}u(t))$
    $i(t) = \frac{1}{5} (19e^{-2t} - 12e^{-t})u(t)$.

---

## 7. Connection to Course Outcomes

This topic directly addresses **CO2**: "Apply transformation from time domain to s-domain, solve dynamic electric circuits." By mastering these techniques, students gain the ability to analyze circuits with reactive components undergoing transient behavior, a fundamental skill in circuit analysis. This also indirectly supports other COs by providing the analytical foundation for understanding system behavior and responses.

---

## 8. Important Points to Remember

*   **Initial Conditions are Key:** Always account for $i_L(0^-)$ and $v_C(0^-)$.
*   **s-Domain Impedances:** $Z_R=R$, $Z_L=Ls$, $Z_C=1/Cs$.
*   **Initial Condition Sources:** Inductor with $i_L(0^-)$ is $Ls$ in series with $Li_L(0^-)$. Capacitor with $v_C(0^-)$ is $1/Cs$ in series with $v_C(0^-)/s$.
*   **Partial Fraction Expansion:** Essential for converting complex $F(s)$ back to time domain.
*   **Complete the Square:** For quadratic denominators in second-order circuits, complete the square to match standard forms for sine/cosine transforms.
*   **Understand the Properties:** Linearity, time shifting, frequency shifting, and differentiation/integration properties are your best friends.

---

This review module provides the essential groundwork for more advanced circuit analysis techniques that build upon the power of Laplace transforms.
