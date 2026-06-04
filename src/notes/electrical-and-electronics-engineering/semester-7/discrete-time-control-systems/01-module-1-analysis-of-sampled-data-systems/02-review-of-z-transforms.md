---
title: "Review of Z Transforms"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c2"
status: "completed"
scrapedAt: "2026-05-23T16:35:50.157Z"
---
## Discrete Time Control Systems: Module 1 - Analysis of Sampled Data Systems: Review of Z Transforms

---

### Introduction to Z-Transforms in Discrete-Time Control Systems

The Z-transform is a fundamental mathematical tool for analyzing and designing discrete-time control systems, much like the Laplace transform is for continuous-time systems. It allows us to convert a sequence of numbers (representing sampled data) into a function of a complex variable 'z', enabling algebraic manipulation and analysis of system behavior in the discrete-time domain. This review will cover the essential concepts and properties of the Z-transform relevant to sampled-data systems, building a foundation for subsequent modules.

---

### 1. The Z-Transform: Definition and Concept

**1.1 What is a Sampled Signal?**

*   A continuous-time signal $x(t)$ is converted into a discrete-time signal $x^*(t)$ by sampling it at regular intervals.
*   The sampling period is denoted by $T$.
*   The sampled signal is represented as a sequence of values: $x(0), x(T), x(2T), \dots, x(nT), \dots$
*   We can represent this sequence as $x[n] = x(nT)$, where $n$ is an integer representing the sample number.

**1.2 The Z-Transform Definition**

*   The Z-transform of a discrete-time signal $x[n]$ is defined as:

    $X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

    Where:
    *   $X(z)$ is the Z-transform of $x[n]$.
    *   $z$ is a complex variable, $z = re^{j\omega}$, where $r$ is the magnitude and $\omega$ is the angle.
    *   $z^{-1}$ represents a delay of one sampling period.

*   **Important Note:** In many control system applications, we deal with causal signals, where $x[n] = 0$ for $n < 0$. In such cases, the Z-transform becomes:

    $X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$

    This is the most commonly used form in discrete-time control. (Ogata, 2009, Chapter 2)

**1.3 The Region of Convergence (ROC)**

*   The ROC is the set of values of $z$ for which the Z-transform series converges.
*   The ROC is crucial for determining the uniqueness of the inverse Z-transform.
*   For causal sequences, the ROC is typically an exterior of a circle in the z-plane.

---

### 2. Properties of the Z-Transform

Understanding the properties of the Z-transform is essential for manipulating and analyzing discrete-time systems.

**2.1 Linearity**

*   If $Z\{x_1[n]\} = X_1(z)$ and $Z\{x_2[n]\} = X_2(z)$, then for constants $a$ and $b$:

    $Z\{ax_1[n] + bx_2[n]\} = aX_1(z) + bX_2(z)$

**2.2 Time Shifting (Delay and Advance)**

*   **Time Delay:** If $Z\{x[n]\} = X(z)$, then for a delay of $k$ samples ($k > 0$):

    $Z\{x[n-k]\} = z^{-k} X(z)$

    This property is fundamental for converting difference equations into algebraic equations in the z-domain. (Philips & Nagle, 1984, Chapter 3)

*   **Time Advance:** For an advance of $k$ samples ($k > 0$):

    $Z\{x[n+k]\} = z^k \left( X(z) - \sum_{i=0}^{k-1} x[i] z^{-i} \right)$

    If $x[n]$ is causal and $k=1$:
    $Z\{x[n+1]\} = z X(z) - z x[0]$

**2.3 Multiplication by $n$ (Differentiation in z-Domain)**

*   If $Z\{x[n]\} = X(z)$, then:

    $Z\{nx[n]\} = -z \frac{d}{dz} X(z)$

    This property is useful for dealing with terms like $n a^n$.

**2.4 Convolution Property**

*   The convolution of two sequences $x[n]$ and $h[n]$ in the time domain is equivalent to multiplication of their Z-transforms in the z-domain:

    $Z\{x[n] * h[n]\} = X(z) H(z)$

    Where $x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$.

    This is a cornerstone for analyzing the output of a linear time-invariant (LTI) system to an input sequence. If $h[n]$ is the impulse response of a discrete-time LTI system, then $H(z)$ is its transfer function. (Kuo, 1992, Chapter 2)

**2.5 Initial Value Theorem (IVT)**

*   For causal sequences ($x[n] = 0$ for $n < 0$):

    $x[0] = \lim_{z \to \infty} X(z)$

    This theorem allows us to find the first sample of the sequence directly from its Z-transform without performing the inverse Z-transform.

**2.6 Final Value Theorem (FVT)**

*   For a causal sequence $x[n]$ such that $1 - z^{-1}$ has no zeros inside or on the unit circle (i.e., the system is stable), the final value of the sequence is:

    $\lim_{n \to \infty} x[n] = \lim_{z \to 1} (1 - z^{-1}) X(z)$

    This theorem is analogous to the Final Value Theorem in Laplace transforms and helps determine the steady-state value of a discrete-time system. (Philips & Nagle, 1984, Chapter 3)

---

### 3. Z-Transforms of Common Sequences

Memorizing or being able to derive the Z-transforms of common sequences is highly beneficial.

| Sequence $x[n]$ | Z-Transform $X(z)$ | ROC                               |
| :------------- | :----------------- | :-------------------------------- |
| $\delta[n]$ (Unit Impulse) | $1$                | All $z$                           |
| $u[n]$ (Unit Step) | $\frac{1}{1-z^{-1}} = \frac{z}{z-1}$ | $|z| > 1$                         |
| $a^n u[n]$ (Exponential) | $\frac{1}{1-az^{-1}} = \frac{z}{z-a}$ | $|z| > |a|$                       |
| $n u[n]$ (Ramp) | $\frac{z^{-1}}{(1-z^{-1})^2} = \frac{z}{(z-1)^2}$ | $|z| > 1$                         |
| $n a^n u[n]$ | $\frac{az^{-1}}{(1-az^{-1})^2} = \frac{az}{(z-a)^2}$ | $|z| > |a|$                       |
| $\sin(\omega n T) u[n]$ | $\frac{\sin(\omega T) z^{-1}}{1 - 2\cos(\omega T) z^{-1} + z^{-2}}$ | $|z| > 1$ (assuming $T$ is constant) |
| $\cos(\omega n T) u[n]$ | $\frac{1 - \cos(\omega T) z^{-1}}{1 - 2\cos(\omega T) z^{-1} + z^{-2}}$ | $|z| > 1$ (assuming $T$ is constant) |

**Example (Derivation of $a^n u[n]$):**

$Z\{a^n u[n]\} = \sum_{n=0}^{\infty} a^n u[n] z^{-n}$
Since $u[n] = 1$ for $n \ge 0$ and $0$ for $n < 0$:
$Z\{a^n u[n]\} = \sum_{n=0}^{\infty} (a z^{-1})^n$

This is a geometric series with first term $1$ and common ratio $az^{-1}$. The sum converges if $|az^{-1}| < 1$, which means $|z| > |a|$.
The sum is $\frac{1}{1 - az^{-1}} = \frac{z}{z-a}$. (Gopal, 1997, Chapter 2)

---

### 4. Inverse Z-Transform

The inverse Z-transform allows us to convert a Z-transform back into a discrete-time sequence. Common methods include:

**4.1 Power Series Expansion (Long Division)**

*   This method involves dividing the numerator of $X(z)$ by its denominator in ascending powers of $z^{-1}$. The coefficients of the resulting series are the samples of the sequence $x[n]$.

    $X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$

    **Example:** Find the inverse Z-transform of $X(z) = \frac{z}{z-1}$ using long division.
    Rewrite $X(z)$ as $\frac{1}{1 - z^{-1}}$.
    Performing long division:
    $$
    \begin{array}{c|cc cc}
    \multicolumn{2}{r}{1} & +z^{-1} & +z^{-2} & +z^{-3} & \dots \\
    \cline{2-5}
    1-z^{-1} & 1 \\
    \multicolumn{2}{r}{1} & -z^{-1} \\
    \cline{2-3}
    \multicolumn{2}{r}{0} & z^{-1} \\
    \multicolumn{2}{r}{} & z^{-1} & -z^{-2} \\
    \cline{3-4}
    \multicolumn{2}{r}{} & 0 & z^{-2} \\
    \multicolumn{2}{r}{} & & z^{-2} & -z^{-3} \\
    \cline{4-5}
    \multicolumn{2}{r}{} & & 0 & z^{-3} \\
    \end{array}
    $$
    So, $X(z) = 1 + z^{-1} + z^{-2} + z^{-3} + \dots$
    The coefficients are $x[0]=1, x[1]=1, x[2]=1, x[3]=1, \dots$, which corresponds to the unit step function $u[n]$.

**4.2 Partial Fraction Expansion**

*   This is a more systematic method, especially for complex transfer functions.
    1.  Express $X(z)/z$ as a sum of simpler fractions.
    2.  Multiply by $z$ to get $X(z)$.
    3.  Find the inverse Z-transform of each term using standard Z-transform pairs.

    **Example:** Find the inverse Z-transform of $X(z) = \frac{z}{(z-0.5)(z-0.2)}$.
    Consider $\frac{X(z)}{z} = \frac{1}{(z-0.5)(z-0.2)}$.
    Using partial fractions:
    $\frac{1}{(z-0.5)(z-0.2)} = \frac{A}{z-0.5} + \frac{B}{z-0.2}$
    $1 = A(z-0.2) + B(z-0.5)$

    Set $z=0.5$: $1 = A(0.5 - 0.2) = 0.3A \implies A = \frac{1}{0.3} = \frac{10}{3}$
    Set $z=0.2$: $1 = B(0.2 - 0.5) = -0.3B \implies B = -\frac{1}{0.3} = -\frac{10}{3}$

    So, $\frac{X(z)}{z} = \frac{10/3}{z-0.5} - \frac{10/3}{z-0.2}$
    $X(z) = \frac{10}{3} \frac{z}{z-0.5} - \frac{10}{3} \frac{z}{z-0.2}$

    Using the property $Z\{a^n u[n]\} = \frac{z}{z-a}$:
    $x[n] = \frac{10}{3} (0.5)^n u[n] - \frac{10}{3} (0.2)^n u[n]$

    (Ogata, 2009, Chapter 2)

**4.3 Convolution Method**

*   If $X(z) = H_1(z) H_2(z)$, then $x[n] = h_1[n] * h_2[n]$. This is less common for direct inverse transform but useful for understanding system outputs.

---

### 5. Analyzing Difference Equations using Z-Transforms

Difference equations describe the behavior of discrete-time systems. The Z-transform converts these into algebraic equations, simplifying analysis.

Consider a linear, constant-coefficient, difference equation:
$a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

Taking the Z-transform of both sides, assuming zero initial conditions ($y[-k]=0$, $x[-k]=0$ for $k>0$):
$a_0 Y(z) + a_1 z^{-1} Y(z) + \dots + a_N z^{-N} Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + \dots + b_M z^{-M} X(z)$

Factoring out $Y(z)$ and $X(z)$:
$Y(z) (a_0 + a_1 z^{-1} + \dots + a_N z^{-N}) = X(z) (b_0 + b_1 z^{-1} + \dots + b_M z^{-M})$

The **pulse transfer function** $H(z)$ is defined as the ratio of the output transform to the input transform:
$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{a_0 + a_1 z^{-1} + \dots + a_N z^{-N}}$

This $H(z)$ is the system's representation in the z-domain. (Philips & Nagle, 1984, Chapter 3)

**Example:** For the difference equation $y[n] - 0.5 y[n-1] = x[n]$.
Taking Z-transforms:
$Y(z) - 0.5 z^{-1} Y(z) = X(z)$
$Y(z) (1 - 0.5 z^{-1}) = X(z)$
$H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - 0.5 z^{-1}} = \frac{z}{z-0.5}$

This aligns with the Z-transform of $a^n u[n]$ with $a=0.5$.

---

### 6. Poles and Zeros of the Transfer Function

The transfer function $H(z)$ is a rational function of $z$.

*   **Zeros:** The values of $z$ for which $H(z) = 0$. These are the roots of the numerator polynomial.
*   **Poles:** The values of $z$ for which $H(z) \to \infty$. These are the roots of the denominator polynomial.

The location of poles and zeros in the z-plane provides critical information about the system's behavior, particularly its stability.

*   **Stability:** A discrete-time LTI system is BIBO (Bounded-Input Bounded-Output) stable if and only if all the poles of its pulse transfer function $H(z)$ lie strictly inside the **unit circle** ($|z| < 1$) in the z-plane. (Kuo, 1992, Chapter 4)

---

### 7. The Mapping Between the s-Plane and the z-Plane

The Z-transform is derived from the Laplace transform of a sampled signal. Understanding this mapping is crucial for relating continuous-time system behavior to discrete-time analysis.

*   Consider a continuous-time signal $x(t)$ and its sampled version $x^*(t) = \sum_{n=0}^{\infty} x(nT) \delta(t-nT)$.
*   The Laplace transform of $x^*(t)$ is:

    $X^*(s) = \sum_{n=0}^{\infty} x(nT) e^{-nTs}$

*   The Z-transform is obtained by the substitution $z = e^{sT}$.
*   This implies a mapping from the s-plane (complex frequency plane) to the z-plane.

**Key Mappings:**

*   **Imaginary axis in the s-plane ($s = j\omega$) maps to the unit circle in the z-plane ($z = e^{j\omega T}$):**
    *   If $\omega = 0$, $s = 0 \implies z = e^0 = 1$.
    *   If $\omega = \frac{\pi}{T}$, $s = j\frac{\pi}{T} \implies z = e^{j\pi} = -1$.
    *   If $\omega = \frac{2\pi}{T}$, $s = j\frac{2\pi}{T} \implies z = e^{j2\pi} = 1$.
    The unit circle in the z-plane corresponds to the frequency response of the sampled system.

*   **Left-half of the s-plane (Re{s} < 0) maps to the interior of the unit circle in the z-plane ($|z| < 1$):**
    *   If $s = \sigma + j\omega$ with $\sigma < 0$, then $z = e^{(\sigma + j\omega)T} = e^{\sigma T} e^{j\omega T}$.
    *   Since $\sigma < 0$, $e^{\sigma T} < 1$. Thus, $|z| = |e^{\sigma T}| = e^{\sigma T} < 1$.
    *   This confirms that a stable continuous-time system (poles in LHP) maps to a stable discrete-time system (poles inside the unit circle). (Franklin, Powell, & Workman, 2007, Chapter 2)

*   **Right-half of the s-plane (Re{s} > 0) maps to the exterior of the unit circle in the z-plane ($|z| > 1$):**
    *   If $s = \sigma + j\omega$ with $\sigma > 0$, then $e^{\sigma T} > 1$. Thus, $|z| = e^{\sigma T} > 1$.
    *   An unstable continuous-time system maps to an unstable discrete-time system.

*   **The imaginary axis in the s-plane ($s=j\omega$) maps onto the unit circle in the z-plane ($z=e^{j\omega T}$).** This means that poles on the imaginary axis in the s-plane lead to poles on the unit circle in the z-plane, indicating marginal stability.

*   **The $j\omega$ axis in the s-plane maps to the unit circle in the z-plane.**
*   **The left-half plane in the s-plane maps to the interior of the unit circle in the z-plane.**
*   **The right-half plane in the s-plane maps to the exterior of the unit circle in the z-plane.**

**Aliases:** Due to the periodic nature of $e^{sT}$, different points in the s-plane can map to the same point in the z-plane. For example, $s = j\omega$ and $s = j(\omega + 2\pi k/T)$ for any integer $k$ both map to $z = e^{j\omega T}$. This phenomenon is known as **aliasing**. It's crucial to choose a sampling frequency ($f_s = 1/T$) high enough to avoid aliasing of the continuous-time system's frequency content. The Nyquist-Shannon sampling theorem states that the sampling frequency must be at least twice the highest frequency component of the signal to avoid aliasing.

---

### 8. Alignment with Course Outcomes

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach. (Knowledge Level: K3)**
    *   This review covers the definition and properties of Z-transforms, their application to difference equations, and the derivation of pulse transfer functions. The concept of poles and zeros is introduced, which are critical for analysis. The mapping between s-plane and z-plane helps in understanding the relationship between continuous and discrete-time system characteristics.

*   **CO2: Design digital compensators for linear systems. (Knowledge Level: K3)**
    *   While this review is foundational, understanding the Z-transform and pulse transfer functions is the prerequisite for designing digital compensators. The ability to analyze system behavior in the z-domain (stability, frequency response) directly informs compensator design.

*   **CO3: Model and analyse discrete-time system using state space approach. (Knowledge Level: K3)**
    *   This review focuses on the transfer function approach. However, understanding the Z-transform is also foundational for state-space analysis in discrete-time systems, as it helps in understanding the underlying system dynamics and transformations.

*   **CO4: Design discrete-time state feedback controllers and observers for a linear system. (Knowledge Level: K3)**
    *   Similar to CO2 and CO3, the concepts from this review are building blocks for understanding and implementing state-space control techniques in discrete-time systems.

---

### 9. Important Points to Remember

*   **$z^{-1}$ represents a delay of one sampling period.**
*   The Z-transform converts linear difference equations with constant coefficients into algebraic equations.
*   The **pulse transfer function** $H(z)$ is the ratio $Y(z)/X(z)$ for a causal LTI system.
*   **Stability criterion:** All poles of $H(z)$ must lie inside the unit circle ($|z| < 1$).
*   **Initial Value Theorem (IVT):** $x[0] = \lim_{z \to \infty} X(z)$.
*   **Final Value Theorem (FVT):** $\lim_{n \to \infty} x[n] = \lim_{z \to 1} (1 - z^{-1}) X(z)$ (for stable systems).
*   The mapping $z = e^{sT}$ connects the s-plane and z-plane. LHP in s-plane maps to the interior of the unit circle in the z-plane.
*   The sampling frequency $T$ is critical; a sufficiently high sampling rate is needed to avoid aliasing.

---

### Practice Questions and Exercises

**1. Z-Transform Calculation:**
Find the Z-transform of the sequence $x[n] = (0.5)^n u[n] - (0.2)^n u[n-1]$.

**2. Inverse Z-Transform (Partial Fraction):**
Find the inverse Z-transform of $X(z) = \frac{z(z-1)}{(z-0.8)(z-0.4)}$. Assume it's a causal system.

**3. Difference Equation to Transfer Function:**
For the difference equation $y[n] - 2y[n-1] + y[n-2] = x[n-1]$, find the pulse transfer function $H(z)$, assuming zero initial conditions.

**4. Initial Value Theorem:**
Given $X(z) = \frac{z(z+1)}{(z-0.5)(z-0.2)}$, find the initial value $x[0]$.

**5. Final Value Theorem:**
For a system with transfer function $H(z) = \frac{0.1z}{(z-0.9)(z-0.8)}$, find the steady-state output $y[\infty]$ if the input is a unit step $u[n]$.

---

### Answers to Practice Questions

**1. Z-Transform Calculation:**
$Z\{x[n]\} = Z\{(0.5)^n u[n]\} - Z\{(0.2)^n u[n-1]\}$
$Z\{(0.5)^n u[n]\} = \frac{z}{z-0.5}$
$Z\{(0.2)^n u[n-1]\} = z^{-1} Z\{(0.2)^n u[n]\} = z^{-1} \frac{z}{z-0.2} = \frac{1}{z-0.2}$
So, $X(z) = \frac{z}{z-0.5} - \frac{1}{z-0.2} = \frac{z(z-0.2) - (z-0.5)}{(z-0.5)(z-0.2)} = \frac{z^2 - 0.2z - z + 0.5}{(z-0.5)(z-0.2)} = \frac{z^2 - 1.2z + 0.5}{(z-0.5)(z-0.2)}$

**2. Inverse Z-Transform (Partial Fraction):**
$\frac{X(z)}{z} = \frac{z-1}{(z-0.8)(z-0.4)} = \frac{A}{z-0.8} + \frac{B}{z-0.4}$
$z-1 = A(z-0.4) + B(z-0.8)$
Set $z=0.8$: $0.8-1 = A(0.8-0.4) \implies -0.2 = 0.4A \implies A = -0.5$
Set $z=0.4$: $0.4-1 = B(0.4-0.8) \implies -0.6 = -0.4B \implies B = 1.5$
$\frac{X(z)}{z} = \frac{-0.5}{z-0.8} + \frac{1.5}{z-0.4}$
$X(z) = \frac{-0.5z}{z-0.8} + \frac{1.5z}{z-0.4}$
$x[n] = -0.5(0.8)^n u[n] + 1.5(0.4)^n u[n]$

**3. Difference Equation to Transfer Function:**
$Y(z) - 2z^{-1}Y(z) + z^{-2}Y(z) = z^{-1}X(z)$
$Y(z)(1 - 2z^{-1} + z^{-2}) = z^{-1}X(z)$
$H(z) = \frac{Y(z)}{X(z)} = \frac{z^{-1}}{1 - 2z^{-1} + z^{-2}} = \frac{z}{z^2 - 2z + 1} = \frac{z}{(z-1)^2}$

**4. Initial Value Theorem:**
$X(z) = \frac{z(z+1)}{(z-0.5)(z-0.2)}$
$x[0] = \lim_{z \to \infty} X(z) = \lim_{z \to \infty} \frac{z^2 + z}{z^2 - 0.7z + 0.1}$
Divide numerator and denominator by $z^2$:
$x[0] = \lim_{z \to \infty} \frac{1 + 1/z}{1 - 0.7/z + 0.1/z^2} = \frac{1+0}{1-0+0} = 1$

**5. Final Value Theorem:**
The input is $x[n] = u[n]$, so $X(z) = \frac{z}{z-1}$.
The system's transfer function is $H(z) = \frac{0.1z}{(z-0.9)(z-0.8)}$.
The output transform is $Y(z) = H(z) X(z) = \frac{0.1z}{(z-0.9)(z-0.8)} \cdot \frac{z}{z-1} = \frac{0.1z^2}{(z-0.9)(z-0.8)(z-1)}$.
Check for stability: The poles are at $z=0.9, 0.8, 1$. Since there is a pole at $z=1$, the system is not strictly stable, and the Final Value Theorem cannot be directly applied in its standard form. If the pole was slightly inside the unit circle (e.g., 0.99), then:
Let's assume for demonstration purposes the poles were $0.9, 0.8, 0.99$.
$Y(z) = \frac{0.1z^2}{(z-0.9)(z-0.8)(z-0.99)}$
For the FVT, we consider $1-z^{-1}Y(z)$:
$(1-z^{-1})Y(z) = (1-z^{-1})\frac{0.1z^2}{(z-0.9)(z-0.8)(z-1)} = \frac{(z-1)}{z} \frac{0.1z^2}{(z-0.9)(z-0.8)(z-1)} = \frac{0.1z}{(z-0.9)(z-0.8)}$
$\lim_{z \to 1} \frac{0.1z}{(z-0.9)(z-0.8)} = \frac{0.1(1)}{(1-0.9)(1-0.8)} = \frac{0.1}{(0.1)(0.2)} = \frac{0.1}{0.02} = 5$.
*Correction:* The question asks for a system with $H(z) = \frac{0.1z}{(z-0.9)(z-0.8)}$. This system itself is stable as its poles are at $0.9$ and $0.8$. When the input is a unit step ($X(z) = \frac{z}{z-1}$), the output is $Y(z) = H(z)X(z) = \frac{0.1z^2}{(z-0.9)(z-0.8)(z-1)}$. The poles of $Y(z)$ are at $0.9, 0.8, 1$. Since there's a pole at $z=1$ from the input, the FVT needs careful application. The condition for FVT is that $1-z^{-1}Y(z)$ should not have poles inside or on the unit circle, except possibly at $z=1$ where the limit is taken.
The factor $(z-1)$ in the denominator of $Y(z)$ comes from the input. The term $(1-z^{-1})Y(z) = \frac{z-1}{z} Y(z) = \frac{z-1}{z} \frac{0.1z^2}{(z-0.9)(z-0.8)(z-1)} = \frac{0.1z}{(z-0.9)(z-0.8)}$.
The limit as $z \to 1$ is $\frac{0.1(1)}{(1-0.9)(1-0.8)} = \frac{0.1}{0.1 \times 0.2} = \frac{0.1}{0.02} = 5$.
The steady-state output is 5.

---

This comprehensive review of Z-transforms provides the essential mathematical foundation for analyzing and understanding discrete-time control systems, as required for the learning outcomes of Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
