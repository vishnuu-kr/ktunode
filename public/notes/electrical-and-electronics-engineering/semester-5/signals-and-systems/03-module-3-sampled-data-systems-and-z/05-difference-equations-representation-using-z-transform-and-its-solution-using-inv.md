---
title: "Difference equations representation using Z-transform and it’s solution using inverse Z-Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361df"
status: "completed"
scrapedAt: "2026-05-23T16:23:51.902Z"
---
# Module 3: Sampled Data Systems and Z-Transform

## Topic: Difference Equations Representation using Z-Transform and its Solution using Inverse Z-Transform

This module focuses on understanding and analyzing discrete-time systems, which are systems where signals are sampled at discrete instants of time. We will explore how to represent these systems using difference equations and leverage the power of the Z-transform to solve these equations and understand system behavior.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Represent discrete-time systems using linear constant-coefficient difference equations.
*   Understand the Z-transform as a tool for analyzing discrete-time signals and systems.
*   Apply the Z-transform to convert difference equations into algebraic equations in the Z-domain.
*   Solve difference equations using the Z-transform and inverse Z-transform to find the system's output.
*   Analyze system properties like causality and stability based on the system's transfer function derived from the difference equation.

---

### Course Outcomes Alignment

*   **CO1 (K2):** We will represent discrete-time signals and systems using difference equations, which involves basic mathematical operations on sampled data.
*   **CO3 (K3):** The core of this topic is representing discrete-time signals and systems in the Z-domain.
*   **CO4 (K3):** While not directly about continuous-time systems, the concepts of stability will be extended to discrete-time systems.

---

### 1. Introduction to Discrete-Time Systems and Difference Equations

Discrete-time systems are systems that operate on discrete-time signals. These signals are defined only at specific, equally spaced instants of time. Examples include digital filters, digital control systems, and sampled versions of continuous-time signals.

**Difference Equations:**
Linear time-invariant (LTI) discrete-time systems can be described by linear constant-coefficient difference equations. These equations relate the current and past values of the output signal to the current and past values of the input signal.

A general form of a linear constant-coefficient difference equation is:

$a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

where:
*   $y[n]$ is the output signal at time index $n$.
*   $x[n]$ is the input signal at time index $n$.
*   $a_i$ and $b_j$ are constant coefficients.
*   $N$ is the order of the difference equation (related to past output values).
*   $M$ is the order of the difference equation (related to past input values).

**Textbook Reference:**
*   **Haykin & Van Veen, Chapter 7:** Introduces discrete-time signals and systems, including the definition and significance of difference equations.
*   **Ogata, Chapter 2:** Discusses discrete-time signals and systems, focusing on difference equations as a fundamental representation.

---

### 2. The Z-Transform

The Z-transform is a powerful mathematical tool for analyzing discrete-time signals and systems. It transforms a discrete-time signal into a function of a complex variable $z$. This transformation converts difference equations into algebraic equations, simplifying analysis.

**Definition:**
The Z-transform of a discrete-time signal $x[n]$ is defined as:

$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

where $z$ is a complex variable. The region of convergence (ROC) is the set of values of $z$ for which the sum converges.

**Properties of the Z-Transform:**
Several properties make the Z-transform useful for system analysis:

| Property           | Time Domain ($x[n]$) | Z-Domain ($X(z)$)   |
| :----------------- | :------------------- | :------------------ |
| Linearity          | $ax_1[n] + bx_2[n]$  | $aX_1(z) + bX_2(z)$ |
| Time Shifting      | $x[n-k]$             | $z^{-k} X(z)$       |
| Multiplication by $n$ | $n x[n]$             | $-z \frac{dX(z)}{dz}$ |
| Convolution        | $x_1[n] * x_2[n]$    | $X_1(z) X_2(z)$     |
| Initial Value      | $x[0]$ (for causal)  | $x[0] = \lim_{z \to \infty} X(z)$ |
| Final Value        | $\lim_{n \to \infty} x[n]$ | $\lim_{z \to 1} (1-z^{-1})X(z)$ (if poles of ROC are inside unit circle) |

**Z-Transform Pairs of Common Signals:**

| Signal $x[n]$         | Z-Transform $X(z)$        | ROC                 |
| :-------------------- | :------------------------ | :------------------ |
| $\delta[n]$ (unit impulse) | $1$                       | All $z$             |
| $u[n]$ (unit step)    | $\frac{1}{1-z^{-1}}$       | $|z| > 1$           |
| $a^n u[n]$            | $\frac{1}{1-az^{-1}}$      | $|z| > |a|$         |
| $n a^n u[n]$          | $\frac{az^{-1}}{(1-az^{-1})^2}$ | $|z| > |a|$         |
| $cos(\omega_0 n) u[n]$ | $\frac{1 - cos(\omega_0) z^{-1}}{1 - 2cos(\omega_0) z^{-1} + z^{-2}}$ | $|z| > 1$           |

**Textbook Reference:**
*   **Haykin & Van Veen, Chapter 7:** Provides a comprehensive introduction to the Z-transform, its definition, properties, and ROC.
*   **Ogata, Chapter 2:** Covers the Z-transform in detail, emphasizing its application to discrete-time systems.
*   **Proakis & Manolakis, Chapter 2:** Offers a detailed mathematical treatment of the Z-transform.

---

### 3. Representing Difference Equations in the Z-Domain

The key advantage of the Z-transform is its ability to convert the linear constant-coefficient difference equation into an algebraic equation in the Z-domain. We achieve this by taking the Z-transform of each term in the difference equation, utilizing the time-shifting property.

Consider the general difference equation:
$a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

Taking the Z-transform of both sides:
$Z\{a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N]\} = Z\{b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]\}$

Using linearity and time-shifting properties:
$a_0 Y(z) + a_1 z^{-1} Y(z) - \text{initial conditions} + \dots + a_N z^{-N} Y(z) - \text{initial conditions} = b_0 X(z) + b_1 z^{-1} X(z) + \dots + b_M z^{-M} X(z)$

**Important Note on Initial Conditions:**
When solving for the system's response, we need to consider the initial conditions of the system. For causal systems, we often assume zero initial conditions ($y[-1] = y[-2] = \dots = 0$ and $x[-1] = x[-2] = \dots = 0$) for homogeneous solutions. If the problem statement specifies non-zero initial conditions, they will appear as terms involving $z$ multiplied by the initial values of $y[n]$.

For zero initial conditions, the equation simplifies to:
$Y(z) [a_0 + a_1 z^{-1} + \dots + a_N z^{-N}] = X(z) [b_0 + b_1 z^{-1} + \dots + b_M z^{-M}]$

This algebraic equation relates the Z-transform of the output, $Y(z)$, to the Z-transform of the input, $X(z)$.

---

### 4. System Transfer Function

From the Z-domain representation, we can define the **transfer function**, $H(z)$, of the LTI discrete-time system. The transfer function is the ratio of the output's Z-transform to the input's Z-transform, assuming zero initial conditions:

$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{a_0 + a_1 z^{-1} + \dots + a_N z^{-N}}$

Alternatively, it can be expressed in powers of $z$:

$H(z) = \frac{z^N (b_0 z^M + b_1 z^{M-1} + \dots + b_M)}{z^M (a_0 z^N + a_1 z^{N-1} + \dots + a_N)}$

The transfer function completely characterizes the input-output relationship of the LTI system and is independent of the input signal.

**Textbook Reference:**
*   **Nise, Chapter 3:** Discusses transfer functions for discrete-time systems, relating them to difference equations and block diagrams.
*   **Haykin & Van Veen, Chapter 7:** Elaborates on the transfer function and its role in system analysis.

---

### 5. Solving Difference Equations using Inverse Z-Transform

Once we have $Y(z)$, we can find the time-domain output $y[n]$ by performing the inverse Z-transform. The most common method for finding the inverse Z-transform of a rational function $Y(z)$ is **partial fraction expansion**.

**Steps for Solving Difference Equations:**

1.  **Write the difference equation:** Start with the given difference equation.
2.  **Take the Z-transform:** Apply the Z-transform to both sides, using linearity and time-shifting properties. Include initial conditions if provided.
3.  **Solve for $Y(z)$:** Rearrange the equation to isolate $Y(z)$. This will typically be in the form $Y(z) = H(z) X(z) + \text{terms due to initial conditions}$.
4.  **Perform Partial Fraction Expansion:**
    *   The goal is to express $Y(z)$ as a sum of simpler terms whose inverse Z-transforms are known (from standard Z-transform pairs).
    *   Typically, we expand $\frac{Y(z)}{z}$ first, then multiply by $z$ to get $Y(z)$ in the correct form for inverse Z-transformation. This is because standard pairs are usually in the form of $\frac{a z^{-1}}{1-az^{-1}}$ or $\frac{1}{1-az^{-1}}$, which, when multiplied by $z$, give $\frac{az}{z-a}$ or $\frac{z}{z-a}$.
    *   **Case 1: Distinct Real Poles:** If $Y(z)/z$ has distinct real poles at $z=p_1, p_2, \dots, p_k$, then:
        $\frac{Y(z)}{z} = \frac{A_1}{z-p_1} + \frac{A_2}{z-p_2} + \dots + \frac{A_k}{z-p_k}$
        Then, $Y(z) = \frac{A_1 z}{z-p_1} + \frac{A_2 z}{z-p_2} + \dots + \frac{A_k z}{z-p_k}$.
        The inverse Z-transform is $y[n] = A_1 p_1^n u[n] + A_2 p_2^n u[n] + \dots + A_k p_k^n u[n]$.
    *   **Case 2: Repeated Real Poles:** If there are repeated poles, the expansion will include terms like $\frac{A}{(z-p)^m}$.
    *   **Case 3: Complex Conjugate Poles:** If there are complex conjugate poles, the corresponding terms in the partial fraction expansion will also be complex conjugates. This often leads to sinusoidal or exponential sinusoidal terms in the time-domain response.
    *   **Using $z^{-1}$:** Alternatively, you can expand $Y(z)$ directly in terms of $z^{-1}$.
        $Y(z) = C_0 + \frac{C_1}{1-p_1 z^{-1}} + \frac{C_2}{1-p_2 z^{-1}} + \dots$
        The inverse Z-transform would then be $y[n] = C_0 \delta[n] + C_1 p_1^n u[n] + C_2 p_2^n u[n] + \dots$. The $C_0 \delta[n]$ term arises if there is a constant term in $Y(z)$ (e.g., $Y(z) = 5 + \frac{3z^{-1}}{1-0.5z^{-1}}$).

5.  **Find the Inverse Z-transform:** Use the standard Z-transform pairs and properties to find $y[n]$ for each term in the partial fraction expansion.

**Textbook Reference:**
*   **Haykin & Van Veen, Chapter 7:** Detailed explanation of inverse Z-transform techniques, including partial fraction expansion.
*   **Ogata, Chapter 2:** Provides examples of solving difference equations using the inverse Z-transform.
*   **Oppenheim, Willsky & Nawab, Chapter 10:** Offers thorough coverage of inverse Z-transform methods.

---

### 6. Stability of Discrete-Time Systems

For LTI discrete-time systems, stability is directly related to the poles of the system's transfer function, $H(z)$. The poles are the roots of the denominator polynomial of $H(z)$.

**Definition of Bounded-Input, Bounded-Output (BIBO) Stability:**
A discrete-time system is BIBO stable if every bounded input sequence produces a bounded output sequence.

**Stability Criterion:**
An LTI discrete-time system is BIBO stable if and only if all the poles of its transfer function $H(z)$ lie strictly inside the **unit circle** in the z-plane (i.e., $|p_i| < 1$ for all poles $p_i$).

**Textbook Reference:**
*   **Nise, Chapter 3:** Discusses stability criteria for discrete-time systems.
*   **Haykin & Van Veen, Chapter 7:** Relates system stability to the location of poles in the z-plane.
*   **Ogata, Chapter 2:** Covers the stability analysis of discrete-time systems.

---

### Examples

**Example 1: Solving a Difference Equation with Zero Initial Conditions**

Consider the difference equation:
$y[n] - 0.5 y[n-1] = x[n]$
with $x[n] = u[n]$ (unit step) and assuming zero initial conditions ($y[-1] = 0$).

**Solution:**
1.  **Difference Equation:** $y[n] - 0.5 y[n-1] = x[n]$
2.  **Z-transform:**
    $Z\{y[n]\} - 0.5 Z\{y[n-1]\} = Z\{x[n]\}$
    $Y(z) - 0.5 z^{-1} Y(z) = X(z)$ (assuming zero initial conditions)
3.  **Solve for $Y(z)$:**
    $Y(z) (1 - 0.5 z^{-1}) = X(z)$
    $Y(z) = \frac{X(z)}{1 - 0.5 z^{-1}}$
    Since $x[n] = u[n]$, $X(z) = \frac{1}{1 - z^{-1}}$ for $|z| > 1$.
    $Y(z) = \frac{1}{(1 - z^{-1})(1 - 0.5 z^{-1})}$
4.  **Partial Fraction Expansion of $Y(z)/z$:**
    $\frac{Y(z)}{z} = \frac{1}{z(1 - z^{-1})(1 - 0.5 z^{-1})} = \frac{1}{z \left(\frac{z-1}{z}\right) \left(\frac{z-0.5}{z}\right)} = \frac{z^2}{(z-1)(z-0.5)}$
    This is not in the ideal form for expansion. Let's expand $Y(z)$ directly in terms of $z^{-1}$.
    $\frac{Y(z)}{z} = \frac{z^{-1}}{(1 - z^{-1})(1 - 0.5 z^{-1})}$
    Let $w = z^{-1}$. Then $\frac{Y(z)}{z} = \frac{w}{(1 - w)(1 - 0.5 w)}$.
    $\frac{w}{(1 - w)(1 - 0.5 w)} = \frac{A}{1 - w} + \frac{B}{1 - 0.5 w}$
    $w = A(1 - 0.5 w) + B(1 - w)$
    If $w=1$: $1 = A(1-0.5) \implies 1 = 0.5A \implies A=2$.
    If $w=2$ ($z^{-1}=2$ or $z=0.5$): $2 = A(1-1) + B(1-2) \implies 2 = -B \implies B=-2$.
    So, $\frac{Y(z)}{z} = \frac{2}{1 - z^{-1}} - \frac{2}{1 - 0.5 z^{-1}}$
    $Y(z) = \frac{2z}{z - 1} - \frac{2z}{z - 0.5}$
5.  **Inverse Z-transform:**
    Using the pair $Z\{a^n u[n]\} = \frac{z}{z-a}$, we get:
    $y[n] = 2(1)^n u[n] - 2(0.5)^n u[n]$
    $y[n] = 2u[n] - 2(0.5)^n u[n]$

**Check Stability:**
The transfer function is $H(z) = \frac{1}{1 - 0.5 z^{-1}}$.
The pole is at $1 - 0.5 z^{-1} = 0 \implies z^{-1} = 2 \implies z = 0.5$.
Since $|0.5| < 1$, the pole is inside the unit circle, so the system is BIBO stable.

**Example 2: Difference Equation with Non-zero Initial Conditions**

Consider the difference equation:
$y[n] - y[n-1] = x[n]$
with $x[n] = \delta[n]$ (unit impulse) and initial condition $y[-1] = 2$.

**Solution:**
1.  **Difference Equation:** $y[n] - y[n-1] = x[n]$
2.  **Z-transform:**
    $Z\{y[n]\} - Z\{y[n-1]\} = Z\{x[n]\}$
    $Y(z) - (z^{-1} Y(z) + y[-1] z^{-1}) = X(z)$
    $Y(z) - z^{-1} Y(z) - y[-1] z^{-1} = X(z)$
    Given $y[-1] = 2$ and $x[n] = \delta[n]$, so $X(z) = 1$.
    $Y(z) - z^{-1} Y(z) - 2 z^{-1} = 1$
3.  **Solve for $Y(z)$:**
    $Y(z) (1 - z^{-1}) = 1 + 2 z^{-1}$
    $Y(z) = \frac{1 + 2 z^{-1}}{1 - z^{-1}}$
4.  **Partial Fraction Expansion:**
    $\frac{Y(z)}{z} = \frac{1 + 2 z^{-1}}{z(1 - z^{-1})} = \frac{z^{-1} + 2 z^{-2}}{1 - z^{-1}}$ (This form is difficult)
    Let's perform polynomial long division or manipulate directly:
    $Y(z) = \frac{1 + 2 z^{-1}}{1 - z^{-1}}$
    Divide numerator and denominator by $z^{-1}$: $Y(z) = \frac{z + 2}{z - 1}$
    Now expand $\frac{Y(z)}{z}$:
    $\frac{Y(z)}{z} = \frac{z+2}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1}$
    $z+2 = A(z-1) + Bz$
    If $z=0$: $2 = A(-1) \implies A=-2$.
    If $z=1$: $1+2 = B(1) \implies 3 = B$.
    So, $\frac{Y(z)}{z} = \frac{-2}{z} + \frac{3}{z-1}$
    $Y(z) = \frac{-2z}{z} + \frac{3z}{z-1} = -2 + \frac{3z}{z-1}$
5.  **Inverse Z-transform:**
    Using the pair $Z\{a^n u[n]\} = \frac{z}{z-a}$ and $Z\{\delta[n]\} = 1$:
    $y[n] = -2 \delta[n] + 3(1)^n u[n]$
    $y[n] = -2 \delta[n] + 3 u[n]$

**Check Stability:**
The transfer function is $H(z) = \frac{1}{1 - z^{-1}}$.
The pole is at $1 - z^{-1} = 0 \implies z^{-1} = 1 \implies z = 1$.
The pole is on the unit circle ($|1| = 1$). For BIBO stability, poles must be strictly *inside* the unit circle. Therefore, this system is **marginally stable** or **unstable** depending on the definition used. A common convention is that poles on the unit circle are considered unstable for strict BIBO stability.

---

### Practice Questions

**Question 1:**
Find the output $y[n]$ of the system described by the difference equation:
$y[n] - 0.8 y[n-1] + 0.15 y[n-2] = x[n]$
where $x[n] = u[n]$ and the initial conditions are $y[-1] = 0.5$ and $y[-2] = 0$.

**Question 2:**
Determine the transfer function $H(z)$ for the discrete-time system represented by:
$y[n] + 3 y[n-1] - 4 y[n-2] = x[n-1] + 2 x[n-2]$

**Question 3:**
Is the system with the following transfer function stable?
$H(z) = \frac{2z^{-1} + 1}{z^{-2} - 0.2 z^{-1} - 0.08}$

**Question 4:**
A system is described by $y[n] = 0.6 y[n-1] + x[n]$. Find the output $y[n]$ if the input is $x[n] = (0.5)^n u[n]$ and $y[-1]=0$.

---

### Answers to Practice Questions

**Answer 1:**
1.  **Difference Equation:** $y[n] - 0.8 y[n-1] + 0.15 y[n-2] = x[n]$
2.  **Z-transform:**
    $Y(z) - 0.8(z^{-1}Y(z) + y[-1]z^{-1}) + 0.15(z^{-2}Y(z) + y[-2]z^{-2} + y[-1]z^{-1}) = X(z)$
    $Y(z) - 0.8z^{-1}Y(z) - 0.8(0.5)z^{-1} + 0.15z^{-2}Y(z) + 0.15(0)z^{-2} + 0.15(0.5)z^{-1} = X(z)$
    $Y(z)(1 - 0.8z^{-1} + 0.15z^{-2}) - 0.4z^{-1} + 0.075z^{-1} = X(z)$
    $Y(z)(1 - 0.8z^{-1} + 0.15z^{-2}) = X(z) + 0.325z^{-1}$
    Given $x[n] = u[n]$, $X(z) = \frac{1}{1 - z^{-1}}$.
    $Y(z)(1 - 0.8z^{-1} + 0.15z^{-2}) = \frac{1}{1 - z^{-1}} + 0.325z^{-1}$
    $Y(z) = \frac{1}{(1 - z^{-1})(1 - 0.8z^{-1} + 0.15z^{-2})} + \frac{0.325z^{-1}}{1 - 0.8z^{-1} + 0.15z^{-2}}$
3.  **Factor the denominator:** $1 - 0.8z^{-1} + 0.15z^{-2} = (1 - 0.3z^{-1})(1 - 0.5z^{-1})$.
    $Y(z) = \frac{1}{(1 - z^{-1})(1 - 0.3z^{-1})(1 - 0.5z^{-1})} + \frac{0.325z^{-1}}{(1 - 0.3z^{-1})(1 - 0.5z^{-1})}$
4.  **Partial Fraction Expansion of first term:**
    Let $\frac{1}{(1 - w)(1 - 0.3w)(1 - 0.5w)} = \frac{A}{1 - w} + \frac{B}{1 - 0.3w} + \frac{C}{1 - 0.5w}$
    $A = \frac{1}{(1 - 0.3)(1 - 0.5)} = \frac{1}{0.7 \times 0.5} = \frac{1}{0.35} = \frac{20}{7}$
    $B = \frac{1}{(1 - 1/0.3)(1 - 1/0.3 \times 0.5)} = \frac{1}{(1 - 10/3)(1 - 5/3)} = \frac{1}{(-7/3)(-2/3)} = \frac{9}{14}$
    $C = \frac{1}{(1 - 1/0.5)(1 - 1/0.5 \times 0.3)} = \frac{1}{(1 - 2)(1 - 0.6)} = \frac{1}{(-1)(0.4)} = \frac{1}{-0.4} = -\frac{5}{2}$
    So, first term is $\frac{20}{7} \frac{1}{1 - z^{-1}} + \frac{9}{14} \frac{1}{1 - 0.3z^{-1}} - \frac{5}{2} \frac{1}{1 - 0.5z^{-1}}$.
5.  **Partial Fraction Expansion of second term:**
    Let $\frac{0.325w}{(1 - 0.3w)(1 - 0.5w)} = \frac{D}{1 - 0.3w} + \frac{E}{1 - 0.5w}$
    $0.325w = D(1 - 0.5w) + E(1 - 0.3w)$
    If $w=1/0.3=10/3$: $0.325(10/3) = D(1 - 0.5(10/3)) \implies 3.25/3 = D(1 - 5/3) = D(-2/3) \implies 3.25 = -2D \implies D = -1.625 = -13/8$.
    If $w=1/0.5=2$: $0.325(2) = E(1 - 0.3(2)) \implies 0.65 = E(1 - 0.6) = 0.4E \implies E = 0.65/0.4 = 6.5/4 = 13/8$.
    So, second term is $-\frac{13}{8} \frac{1}{1 - 0.3z^{-1}} + \frac{13}{8} \frac{1}{1 - 0.5z^{-1}}$.
6.  **Combine terms for $Y(z)$:**
    $Y(z) = \left(\frac{20}{7}\right) \frac{1}{1 - z^{-1}} + \left(\frac{9}{14} - \frac{13}{8}\right) \frac{1}{1 - 0.3z^{-1}} + \left(-\frac{5}{2} + \frac{13}{8}\right) \frac{1}{1 - 0.5z^{-1}}$
    $\frac{9}{14} - \frac{13}{8} = \frac{72 - 182}{112} = -\frac{110}{112} = -\frac{55}{56}$
    $-\frac{5}{2} + \frac{13}{8} = \frac{-20 + 13}{8} = -\frac{7}{8}$
    $Y(z) = \frac{20}{7} \frac{1}{1 - z^{-1}} - \frac{55}{56} \frac{1}{1 - 0.3z^{-1}} - \frac{7}{8} \frac{1}{1 - 0.5z^{-1}}$
7.  **Inverse Z-transform:**
    $y[n] = \frac{20}{7} u[n] - \frac{55}{56} (0.3)^n u[n] - \frac{7}{8} (0.5)^n u[n]$

**Answer 2:**
1.  **Z-transform:**
    $Y(z) + 3z^{-1}Y(z) - 4z^{-2}Y(z) = z^{-1}X(z) + 2z^{-2}X(z)$
2.  **Solve for $Y(z)/X(z)$:**
    $Y(z)(1 + 3z^{-1} - 4z^{-2}) = X(z)(z^{-1} + 2z^{-2})$
    $H(z) = \frac{Y(z)}{X(z)} = \frac{z^{-1} + 2z^{-2}}{1 + 3z^{-1} - 4z^{-2}}$
    To express in positive powers of $z$:
    $H(z) = \frac{z^{-2}(z + 2)}{z^{-2}(z^2 + 3z - 4)} = \frac{z + 2}{z^2 + 3z - 4}$

**Answer 3:**
1.  **Transfer Function:** $H(z) = \frac{2z^{-1} + 1}{z^{-2} - 0.2 z^{-1} - 0.08}$
2.  **Convert to positive powers of $z$:**
    $H(z) = \frac{z^{-1}(2 + z^{-1})}{z^{-2}(1 - 0.2z - 0.08z^2)} = \frac{z(2+z^{-1})}{1 - 0.2z - 0.08z^2} = \frac{2z+1}{1 - 0.2z - 0.08z^2}$
3.  **Find poles:** The poles are the roots of the denominator. To find poles in terms of $z^{-1}$, set the original denominator to zero:
    $z^{-2} - 0.2 z^{-1} - 0.08 = 0$
    Let $w = z^{-1}$.
    $w^2 - 0.2w - 0.08 = 0$
    Using the quadratic formula $w = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $w = \frac{0.2 \pm \sqrt{(-0.2)^2 - 4(1)(-0.08)}}{2(1)} = \frac{0.2 \pm \sqrt{0.04 + 0.32}}{2} = \frac{0.2 \pm \sqrt{0.36}}{2}$
    $w = \frac{0.2 \pm 0.6}{2}$
    $w_1 = \frac{0.2 + 0.6}{2} = \frac{0.8}{2} = 0.4$
    $w_2 = \frac{0.2 - 0.6}{2} = \frac{-0.4}{2} = -0.2$
    So, $z_1^{-1} = 0.4 \implies z_1 = 1/0.4 = 2.5$
    And $z_2^{-1} = -0.2 \implies z_2 = 1/(-0.2) = -5$
4.  **Check stability:**
    $|z_1| = |2.5| = 2.5 > 1$
    $|z_2| = |-5| = 5 > 1$
    Since both poles are outside the unit circle, the system is **unstable**.

**Answer 4:**
1.  **Difference Equation:** $y[n] = 0.6 y[n-1] + x[n]$
2.  **Z-transform:**
    $Y(z) = 0.6 z^{-1} Y(z) + X(z)$ (assuming zero initial conditions for the transform step, but we have $y[-1]$)
    Correctly, using the initial condition property:
    $Y(z) = 0.6 (z^{-1}Y(z) + y[-1]z^{-1}) + X(z)$
    $Y(z) = 0.6 z^{-1}Y(z) + 0.6 (0) z^{-1} + X(z)$
    $Y(z) = 0.6 z^{-1}Y(z) + X(z)$
3.  **Solve for $Y(z)$:**
    $Y(z)(1 - 0.6 z^{-1}) = X(z)$
    $Y(z) = \frac{X(z)}{1 - 0.6 z^{-1}}$
    Given $x[n] = (0.5)^n u[n]$, $X(z) = \frac{1}{1 - 0.5 z^{-1}}$ for $|z| > 0.5$.
    $Y(z) = \frac{1}{(1 - 0.6 z^{-1})(1 - 0.5 z^{-1})}$
4.  **Partial Fraction Expansion:**
    $\frac{Y(z)}{z} = \frac{z^{-1}}{(1 - 0.6 z^{-1})(1 - 0.5 z^{-1})}$
    Let $w = z^{-1}$. $\frac{w}{(1 - 0.6w)(1 - 0.5w)} = \frac{A}{1 - 0.6w} + \frac{B}{1 - 0.5w}$
    $w = A(1 - 0.5w) + B(1 - 0.6w)$
    If $w = 1/0.6 = 10/6 = 5/3$: $5/3 = A(1 - 0.5(5/3)) = A(1 - 5/6) = A(1/6) \implies A = 10$.
    If $w = 1/0.5 = 2$: $2 = B(1 - 0.6(2)) = B(1 - 1.2) = B(-0.2) \implies B = 2 / (-0.2) = -10$.
    So, $\frac{Y(z)}{z} = \frac{10}{1 - 0.6 z^{-1}} - \frac{10}{1 - 0.5 z^{-1}}$
    $Y(z) = \frac{10z}{z - 0.6} - \frac{10z}{z - 0.5}$
5.  **Inverse Z-transform:**
    $y[n] = 10 (0.6)^n u[n] - 10 (0.5)^n u[n]$

---

### Important Points to Remember

*   **Difference Equations:** Represent the relationship between input and output of discrete-time LTI systems.
*   **Z-Transform:** Converts difference equations into algebraic equations. Key properties include linearity, time-shifting, and convolution.
*   **Transfer Function $H(z)$:** The ratio $Y(z)/X(z)$ assuming zero initial conditions, characterizing the system.
*   **Partial Fraction Expansion:** The primary technique for finding the inverse Z-transform of rational functions. Expand $Y(z)/z$ for easier application of standard pairs.
*   **Stability:** An LTI discrete-time system is BIBO stable if and only if all poles of its transfer function $H(z)$ lie strictly inside the unit circle in the z-plane ($|p_i| < 1$).

---

This comprehensive set of notes covers the representation of sampled data systems using difference equations, their solution using the Z-transform, and the concept of stability in the Z-domain. The examples and practice questions should solidify your understanding of these crucial concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
