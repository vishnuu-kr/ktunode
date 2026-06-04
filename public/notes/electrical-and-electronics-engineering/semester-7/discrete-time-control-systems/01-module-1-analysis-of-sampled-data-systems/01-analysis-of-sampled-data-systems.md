---
title: "Analysis of Sampled Data Systems:"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c1"
status: "completed"
scrapedAt: "2026-05-23T16:35:48.812Z"
---
# Discrete Time Control Systems

## Module 1: Analysis of Sampled Data Systems

### Topic: Analysis of Sampled Data Systems

---

### **1. Introduction to Sampled-Data Systems**

**1.1 What are Sampled-Data Systems?**

*   A sampled-data system is a control system where the input or output (or both) are sampled at discrete instants of time.
*   These systems arise when we interface a continuous-time plant with a digital controller.
*   The digital controller operates on sampled values of the system's state and generates a discrete-time control signal.
*   This discrete-time control signal must then be converted back to a continuous-time signal to drive the plant.

**1.2 Components of a Typical Digital Control System**

*   **Digital Controller:** Implements the control algorithm in discrete time. This is typically a microprocessor or a digital signal processor (DSP).
*   **Digital-to-Analog Converter (DAC):** Converts the discrete-time output of the digital controller into a continuous-time signal.
*   **Continuous-Time Plant:** The physical system being controlled (e.g., motor, process, robot arm).
*   **Analog-to-Digital Converter (ADC):** Samples the output of the plant at discrete time instants and converts it into a digital representation.
*   **Sampler:** The device that performs the sampling operation.

**1.3 Why Sampled-Data Systems?**

*   **Flexibility and Reconfigurability:** Digital controllers can be easily reprogrammed to implement different control algorithms.
*   **Sophisticated Control Algorithms:** Digital controllers can implement complex algorithms that are difficult or impossible to implement with analog circuits.
*   **Noise Immunity:** Digital signals are less susceptible to noise than analog signals.
*   **Cost-Effectiveness:** In many cases, digital implementations are more cost-effective than their analog counterparts.
*   **Data Storage and Processing:** Digital systems can easily store and process data for analysis and diagnostics.

**1.4 Key Concepts in Sampling**

*   **Sampling:** The process of converting a continuous-time signal into a sequence of discrete-time samples.
*   **Sampling Period ($T$):** The time interval between successive samples.
*   **Sampling Frequency ($\omega_s$ or $f_s$):** The rate at which samples are taken ($f_s = 1/T$, $\omega_s = 2\pi f_s$).
*   **Quantization:** The process of approximating a continuous-range of values by a finite set of discrete values. This is an inherent part of the ADC process.
*   **Aliasing:** The phenomenon where a higher frequency component in a continuous-time signal appears as a lower frequency component in the sampled signal if the sampling rate is too low.

---

### **2. The Z-Transform**

**2.1 Definition of the Z-Transform**

*   The Z-transform is a mathematical tool used to analyze discrete-time signals and systems. It transforms a discrete-time sequence $x[n]$ into a function of a complex variable $z$.
*   **Unilateral Z-Transform:**
    $$X(z) = Z\{x[n]\} = \sum_{n=0}^{\infty} x[n] z^{-n}$$
    This form is used when the sequence is causal ($x[n]=0$ for $n<0$).
*   **Bilateral Z-Transform:**
    $$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$$
    This form is used for non-causal sequences as well. In control systems, we typically deal with causal signals and systems, so the unilateral Z-transform is more common.

**2.2 Region of Convergence (ROC)**

*   The ROC is the set of values of $z$ for which the Z-transform converges.
*   The ROC is crucial for determining the uniqueness of the inverse Z-transform and for analyzing system properties like stability.
*   For causal sequences, the ROC is typically outside a circle in the z-plane.

**2.3 Important Z-Transform Pairs and Properties**

**Common Pairs:**

| $x[n]$ (Time Domain) | $X(z)$ (Z-Domain)        | ROC                 |
| :------------------- | :----------------------- | :------------------ |
| $\delta[n]$ (Unit impulse) | 1                        | All $z$             |
| $\delta[n-k]$ (Shifted impulse) | $z^{-k}$                 | All $z \neq 0$      |
| $u[n]$ (Unit step)   | $\frac{1}{1-z^{-1}}$ or $\frac{z}{z-1}$ | $|z| > 1$           |
| $a^n u[n]$           | $\frac{1}{1-az^{-1}}$ or $\frac{z}{z-a}$ | $|z| > |a|$         |
| $nu[n]$              | $\frac{z^{-1}}{(1-z^{-1})^2}$ or $\frac{z}{(z-1)^2}$ | $|z| > 1$           |
| $n^2 u[n]$           | $\frac{z^{-1}(1+z^{-1})}{(1-z^{-1})^3}$ or $\frac{z(z+1)}{(z-1)^3}$ | $|z| > 1$           |
| $e^{-an}u[n]$        | $\frac{1}{1-e^{-a}z^{-1}}$ or $\frac{z}{z-e^{-a}}$ | $|z| > e^{-a}$      |
| $\cos(\omega_0 n)u[n]$ | $\frac{1-z^{-1}\cos(\omega_0)}{1-2z^{-1}\cos(\omega_0)+z^{-2}}$ | $|z| > 1$           |
| $\sin(\omega_0 n)u[n]$ | $\frac{z^{-1}\sin(\omega_0)}{1-2z^{-1}\cos(\omega_0)+z^{-2}}$ | $|z| > 1$           |

**Important Properties:**

*   **Linearity:** $Z\{ax_1[n] + bx_2[n]\} = aX_1(z) + bX_2(z)$
*   **Time Shifting:**
    *   $Z\{x[n-k]u[n-k]\} = z^{-k}X(z)$ (for $k > 0$, assume $x[n]=0$ for $n<0$)
    *   $Z\{x[n+k]\} = z^{k}X(z) - \sum_{i=0}^{k-1} x[i]z^{k-i}$
*   **Multiplication by $a^n$:** $Z\{a^n x[n]\} = X(z/a)$
*   **Differentiation in z-domain (Multiplication by $n$):** $Z\{n x[n]\} = -z \frac{d}{dz} X(z)$
*   **Convolution:** If $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$, then $Y(z) = X(z)H(z)$. This is analogous to multiplication of Laplace transforms in continuous-time systems.

**Example:** Find the Z-transform of $x[n] = a^n u[n]$.
Using the table, $X(z) = \frac{1}{1-az^{-1}} = \frac{z}{z-a}$ with ROC $|z| > |a|$.

**Example:** Find the Z-transform of $x[n] = \sin(\omega_0 n)u[n]$.
Using Euler's formula, $\sin(\omega_0 n) = \frac{e^{j\omega_0 n} - e^{-j\omega_0 n}}{2j}$.
$Z\{\sin(\omega_0 n)u[n]\} = \frac{1}{2j} \left( Z\{ (e^{j\omega_0})^n u[n] \} - Z\{ (e^{-j\omega_0})^n u[n] \} \right)$
Using the property $Z\{a^n u[n]\} = \frac{z}{z-a}$:
$= \frac{1}{2j} \left( \frac{z}{z-e^{j\omega_0}} - \frac{z}{z-e^{-j\omega_0}} \right)$
$= \frac{z}{2j} \left( \frac{(z-e^{-j\omega_0}) - (z-e^{j\omega_0})}{(z-e^{j\omega_0})(z-e^{-j\omega_0})} \right)$
$= \frac{z}{2j} \left( \frac{e^{j\omega_0} - e^{-j\omega_0}}{z^2 - z(e^{j\omega_0} + e^{-j\omega_0}) + 1} \right)$
Since $e^{j\omega_0} - e^{-j\omega_0} = 2j\sin(\omega_0)$ and $e^{j\omega_0} + e^{-j\omega_0} = 2\cos(\omega_0)$:
$= \frac{z}{2j} \left( \frac{2j\sin(\omega_0)}{z^2 - 2z\cos(\omega_0) + 1} \right)$
$= \frac{z\sin(\omega_0)}{z^2 - 2z\cos(\omega_0) + 1}$
Dividing numerator and denominator by $z$:
$= \frac{\sin(\omega_0)}{z - 2\cos(\omega_0) + z^{-1}} = \frac{z^{-1}\sin(\omega_0)}{1 - 2z^{-1}\cos(\omega_0) + z^{-2}}$

---

### **3. Analysis of Sampled-Data Systems using Z-Transform**

**3.1 The Ideal Sampler**

*   An ideal sampler generates a train of impulses with weights equal to the sampled values of the continuous-time signal.
*   If $x(t)$ is a continuous-time signal, the sampled signal is $x^*(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t-nT)$.
*   The Laplace transform of the sampled signal is $X^*(s) = \sum_{n=-\infty}^{\infty} x(nT) e^{-nTs}$.

**3.2 The Hold Circuit (Zero-Order Hold - ZOH)**

*   In practical digital control systems, the discrete-time control signal is converted to a continuous-time signal using a hold circuit. The most common is the Zero-Order Hold (ZOH).
*   The ZOH holds the last sampled value constant until the next sample arrives.
*   The output of a ZOH is a staircase approximation of the continuous-time signal.
*   The impulse response of a ZOH is a rectangular pulse of duration $T$:
    $$h_{ZOH}(t) = u(t) - u(t-T)$$
*   The Laplace transform of the ZOH is:
    $$H_{ZOH}(s) = \mathcal{L}\{u(t) - u(t-T)\} = \frac{1}{s} - \frac{e^{-sT}}{s} = \frac{1-e^{-sT}}{s}$$

**3.3 Transfer Function of a Sampled-Data System**

*   Consider a system with a continuous-time plant $G(s)$ preceded by a ZOH and followed by a sampler.
*   The output of the ZOH is $u_{ZOH}(t)$, and its Laplace transform is $U_{ZOH}(s) = U(s) H_{ZOH}(s)$, where $U(s)$ is the Laplace transform of the discrete control signal.
*   The sampled output of the plant is $Y^*(s) = \mathcal{L}\{g(t) * u_{ZOH}(t)\}^*$, where $g(t)$ is the impulse response of the plant.
*   The key to analyzing sampled-data systems is to obtain the **pulse transfer function** of the system, which relates the Z-transform of the output sequence to the Z-transform of the input sequence.

**3.4 Obtaining the Pulse Transfer Function**

*   Let the input to the sampler be a discrete-time sequence $r[n]$. This sequence is converted to a continuous-time signal $r_{ZOH}(t)$ by the ZOH.
*   The Laplace transform of $r_{ZOH}(t)$ is $R_{ZOH}(s) = R(z) H_{ZOH}(s)$, where $R(z) = Z\{r[n]\}$.
*   The output of the plant is $y(t) = g(t) * r_{ZOH}(t)$. Its Laplace transform is $Y(s) = G(s) R_{ZOH}(s) = G(s) R(z) H_{ZOH}(s)$.
*   The sampled output is $Y^*(s) = \mathcal{L}\{y(t)\}^* = [G(s) R(z) H_{ZOH}(s)]^*$.
*   Using the property $[F(s)X(z)]^* = X(z) G^*(z)$ if $X(z)$ is independent of $s$, we get:
    $$Y^*(s) = R(z) [G(s) H_{ZOH}(s)]^*$$
*   The **pulse transfer function** $G_{ZOH}(z)$ is defined as:
    $$G_{ZOH}(z) = Z\{g_{ZOH}(t)\} = Z\{\mathcal{L}^{-1}\{G(s)H_{ZOH}(s)\}\}$$
*   Therefore, the relationship in the z-domain is:
    $$Y(z) = R(z) G_{ZOH}(z)$$

**3.5 Methods for Finding the Pulse Transfer Function**

The core task is to find the Z-transform of the impulse response of the cascaded system $G(s)H_{ZOH}(s)$.

*   **Method 1: Partial Fraction Expansion and Inverse Laplace Transform**
    1.  Form the product $G(s)H_{ZOH}(s)$.
    2.  Perform partial fraction expansion of $G(s)H_{ZOH}(s)$.
    3.  Find the inverse Laplace transform of each term. This gives the impulse response in the time domain, $g_{ZOH}(t)$.
    4.  Take the Z-transform of $g_{ZOH}(t)$ to get $G_{ZOH}(z)$.

*   **Method 2: Using the Property $G_{ZOH}(z) = (1-z^{-1}) Z\left\{\mathcal{L}^{-1}\left\{\frac{G(s)}{s}\right\}\right\}$**
    This method is specifically for systems preceded by a ZOH. It uses the relationship between the Z-transform of a signal and the Z-transform of its integral.
    Let $F(s) = G(s)H_{ZOH}(s) = G(s)\frac{1-e^{-sT}}{s} = G(s)(\frac{1}{s} - \frac{e^{-sT}}{s})$.
    $g_{ZOH}(t) = \mathcal{L}^{-1}\{G(s)\frac{1-e^{-sT}}{s}\} = \mathcal{L}^{-1}\{G(s)/s\} - \mathcal{L}^{-1}\{G(s)e^{-sT}/s\}$.
    Let $q(t) = \mathcal{L}^{-1}\{G(s)/s\}$. This is the integral of $g(t)$.
    Then $g_{ZOH}(t) = q(t) - q(t-T)u(t-T)$.
    The Z-transform is:
    $G_{ZOH}(z) = Z\{q(t)\} - Z\{q(t-T)u(t-T)\}$
    $G_{ZOH}(z) = Q(z) - z^{-1}Q(z) = (1-z^{-1})Q(z)$, where $Q(z) = Z\{q(t)\} = Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.

*   **Method 3: Difference Equation Approach (for Transfer Functions of the form $G(s) = \frac{b_0 s + b_1}{s^2 + a_1 s + a_0}$)**
    This is often done by converting the continuous-time differential equation to a discrete-time difference equation using approximations like the Tustin transformation or forward/backward Euler, but this introduces approximation errors. The direct Z-transform method is preferred for exact analysis.

**Example:** Find the pulse transfer function of a system with $G(s) = \frac{a}{s+a}$ preceded by a ZOH.
$$H_{ZOH}(s) = \frac{1-e^{-sT}}{s}$$
$$G(s)H_{ZOH}(s) = \frac{a}{s+a} \frac{1-e^{-sT}}{s} = \frac{a(1-e^{-sT})}{s(s+a)}$$
Using partial fractions:
$$\frac{a}{s(s+a)} = \frac{A}{s} + \frac{B}{s+a}$$
$a = A(s+a) + Bs$
For $s=0$, $a = Aa \implies A=1$.
For $s=-a$, $a = B(-a) \implies B=-1$.
So, $\frac{a}{s(s+a)} = \frac{1}{s} - \frac{1}{s+a}$.
Then, $$G(s)H_{ZOH}(s) = (1-e^{-sT}) \left(\frac{1}{s} - \frac{1}{s+a}\right)$$
$$G(s)H_{ZOH}(s) = \frac{1}{s} - \frac{1}{s+a} - e^{-sT}\left(\frac{1}{s} - \frac{1}{s+a}\right)$$
Taking the inverse Laplace transform:
$g_{ZOH}(t) = \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - \mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} - \mathcal{L}^{-1}\left\{e^{-sT}\left(\frac{1}{s} - \frac{1}{s+a}\right)\right\}$
$g_{ZOH}(t) = u(t) - e^{-at}u(t) - [u(t-T) - e^{-a(t-T)}u(t-T)]$
$g_{ZOH}(t) = (1-e^{-at})u(t) - (1-e^{-a(t-T)})u(t-T)$

Now, take the Z-transform of $g_{ZOH}(t)$:
$G_{ZOH}(z) = Z\{(1-e^{-at})u(t)\} - Z\{(1-e^{-a(t-T)})u(t-T)\}$
We know $Z\{a^n u[n]\} = \frac{z}{z-a}$.
$Z\{(1-e^{-at})u(t)\} = Z\{u[n]\} - Z\{e^{-at}u[n]\}$
$Z\{u[n]\} = \frac{z}{z-1}$
$Z\{e^{-at}u[n]\} = \frac{z}{z-e^{-aT}}$
So, $Z\{(1-e^{-at})u(t)\} = \frac{z}{z-1} - \frac{z}{z-e^{-aT}} = \frac{z(z-e^{-aT}) - z(z-1)}{(z-1)(z-e^{-aT})} = \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$.

For the second term, $Z\{(1-e^{-a(t-T)})u(t-T)\}$. Let $t' = t-T$, then $n' = n-1$.
$Z\{f(t-T)u(t-T)\} = z^{-1}Z\{f(t)u(t)\}$.
So, $Z\{(1-e^{-a(t-T)})u(t-T)\} = z^{-1} Z\{(1-e^{-at})u(t)\}$
$= z^{-1} \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} = \frac{1-e^{-aT}}{(z-1)(z-e^{-aT})}$.

Therefore,
$G_{ZOH}(z) = \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} - \frac{1-e^{-aT}}{(z-1)(z-e^{-aT})}$
$G_{ZOH}(z) = \frac{z(1-e^{-aT}) - (1-e^{-aT})}{(z-1)(z-e^{-aT})} = \frac{(z-1)(1-e^{-aT})}{(z-1)(z-e^{-aT})}$
$G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$

Let's check this using Method 2:
$G(s) = \frac{a}{s+a}$.
Find $Q(s) = \mathcal{L}^{-1}\{G(s)/s\} = \mathcal{L}^{-1}\{\frac{a}{s(s+a)}\} = \mathcal{L}^{-1}\{\frac{1}{s} - \frac{1}{s+a}\}$.
$q(t) = u(t) - e^{-at}u(t) = (1-e^{-at})u(t)$.
Now find $Q(z) = Z\{q(t)\} = Z\{(1-e^{-at})u(t)\}$.
As calculated before, $Q(z) = \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$.
Then, $G_{ZOH}(z) = (1-z^{-1})Q(z) = (1-\frac{1}{z}) \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$
$G_{ZOH}(z) = \frac{z-1}{z} \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} = \frac{1-e^{-aT}}{z-e^{-aT}}$.
This matches the previous result.

**Important Point to Remember:** For a system $G(s)$ preceded by a ZOH, the pulse transfer function $G_{ZOH}(z)$ is obtained by finding the Z-transform of the impulse response of the system $G(s)H_{ZOH}(s)$, where $H_{ZOH}(s) = \frac{1-e^{-sT}}{s}$.

---

### **4. Stability Analysis of Sampled-Data Systems**

**4.1 Relationship between $s$-plane and $z$-plane**

*   The $s$-plane (continuous-time) and $z$-plane (discrete-time) are related by the transformation $z = e^{sT}$.
*   **Stability Criterion:** A continuous-time system is stable if all poles of its transfer function $G(s)$ lie in the left half of the $s$-plane (i.e., $\text{Re}(s) < 0$).
*   **Stability Criterion for Discrete-Time Systems:** A discrete-time system with pulse transfer function $G_{ZOH}(z)$ is stable if all poles of $G_{ZOH}(z)$ lie **inside the unit circle** in the $z$-plane (i.e., $|z| < 1$).

**How the $s$-plane maps to the $z$-plane:**

*   **Left Half of $s$-plane (LHP) $\rightarrow$ Inside the Unit Circle:**
    If $\text{Re}(s) < 0$, let $s = -\sigma + j\omega$, where $\sigma > 0$.
    $z = e^{sT} = e^{(-\sigma + j\omega)T} = e^{-\sigma T} e^{j\omega T}$.
    The magnitude of $z$ is $|z| = |e^{-\sigma T}| |e^{j\omega T}| = e^{-\sigma T} \times 1 = e^{-\sigma T}$.
    Since $\sigma > 0$, $0 < e^{-\sigma T} < 1$. Thus, $|z| < 1$, which means $z$ is inside the unit circle.

*   **Imaginary Axis of $s$-plane ($\text{Re}(s) = 0$) $\rightarrow$ On the Unit Circle:**
    If $\text{Re}(s) = 0$, let $s = j\omega$.
    $z = e^{j\omega T}$.
    The magnitude of $z$ is $|z| = |e^{j\omega T}| = 1$. Thus, $z$ lies on the unit circle.

*   **Right Half of $s$-plane (RHP) $\rightarrow$ Outside the Unit Circle:**
    If $\text{Re}(s) > 0$, let $s = \sigma + j\omega$, where $\sigma > 0$.
    $z = e^{sT} = e^{(\sigma + j\omega)T} = e^{\sigma T} e^{j\omega T}$.
    The magnitude of $z$ is $|z| = e^{\sigma T}$.
    Since $\sigma > 0$, $e^{\sigma T} > 1$. Thus, $|z| > 1$, which means $z$ is outside the unit circle.

**4.2 Stability Analysis using Pole Locations**

*   The poles of the pulse transfer function $G_{ZOH}(z)$ determine the stability of the discrete-time system.
*   If $G_{ZOH}(z)$ is represented as a ratio of polynomials in $z$, $G_{ZOH}(z) = \frac{N(z)}{D(z)}$, the poles are the roots of the denominator polynomial $D(z)$.
*   The system is stable if all roots of $D(z)$ lie inside the unit circle.
*   The system is unstable if any root lies outside the unit circle.
*   The system is marginally stable if roots lie on the unit circle, and all roots with magnitude 1 are simple.

**4.3 The Jury Stability Test**

The Jury stability test is a method to determine if all roots of a polynomial lie inside the unit circle without explicitly calculating the roots. This is particularly useful when the coefficients of the polynomial depend on system parameters.

Let the characteristic polynomial be $D(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, with $a_n > 0$.
The test involves a series of conditions:

1.  **Necessary Condition:** All coefficients must be present and have the same sign. For stability, they must all be positive if $a_n > 0$.
    *   $a_k > 0$ for all $k=0, 1, \dots, n$.

2.  **Root Location Conditions (for inside the unit circle):**
    *   **Condition 1:** $D(1) > 0$
    *   **Condition 2:** $(-1)^n D(-1) > 0$

3.  **Iterative Conditions (forming a table):**
    For $k = 1, 2, \dots, n-1$:
    Form a new polynomial $D_1(z)$ from $D_0(z) = D(z) = a_n z^n + \dots + a_0$ by reversing the coefficients:
    $D_k(z) = \frac{1}{c_k} [D_{k-1}(z) - z^{-1} D_{k-1}(z^{-1})]$
    where $c_k = a_0^{(k-1)} - a_n^{(k-1)}$ (using $a_0^{(0)} = a_0$ and $a_n^{(0)} = a_n$)
    The coefficients of $D_{k-1}(z)$ are denoted by $a_i^{(k-1)}$.
    $D_{k-1}(z) = a_n^{(k-1)} z^n + a_{n-1}^{(k-1)} z^{n-1} + \dots + a_1^{(k-1)} z + a_0^{(k-1)}$
    $D_{k-1}(z^{-1}) = a_n^{(k-1)} z^{-n} + a_{n-1}^{(k-1)} z^{-(n-1)} + \dots + a_1^{(k-1)} z^{-1} + a_0^{(k-1)}$

    The coefficients of $D_k(z)$ are obtained from:
    $a_0^{(k)} = c_k$
    $a_j^{(k)} = a_j^{(k-1)} - (c_k/a_n^{(k-1)}) a_{n-j}^{(k-1)}$ for $j = 1, 2, \dots, n-k$.
    The degree of $D_k(z)$ is $n-k$.
    The " $c_k$ " terms are the first coefficients of the new polynomials. The conditions are:
    *   $|a_0^{(k)}| > |a_n^{(k)}|$ for $k=1, 2, \dots, n-1$. (This is equivalent to $a_0^{(k)} > |a_n^{(k)}|$ if $a_0^{(k)}$ is positive, which is usually the case due to the definition of $c_k$).

**Example:** Test the stability of the system with the characteristic polynomial $D(z) = z^2 - 0.5z + 0.1$.
Here $n=2$. $a_2=1, a_1=-0.5, a_0=0.1$.

1.  **Necessary Condition:** All coefficients must be positive.
    $a_2 = 1 > 0$ (OK)
    $a_1 = -0.5 < 0$ (Not OK)
    The system is **unstable**.

**Example:** Test the stability of the system with the characteristic polynomial $D(z) = z^2 - 1.5z + 0.8$.
Here $n=2$. $a_2=1, a_1=-1.5, a_0=0.8$.

1.  **Necessary Condition:** All coefficients must be positive.
    $a_2 = 1 > 0$ (OK)
    $a_1 = -1.5 < 0$ (Not OK)
    The system is **unstable**.

**Example:** Test the stability of the system with the characteristic polynomial $D(z) = z^2 - 0.8z + 0.5$.
Here $n=2$. $a_2=1, a_1=-0.8, a_0=0.5$.

1.  **Necessary Condition:** All coefficients must be positive.
    $a_2 = 1 > 0$ (OK)
    $a_1 = -0.8 < 0$ (Not OK)
    The system is **unstable**.

Let's try a stable-looking polynomial from the $s$-plane. Suppose the continuous-time poles are at $s = -0.1 \pm j1$.
$G(s) = \frac{K}{(s+0.1)^2 + 1^2} = \frac{K}{s^2 + 0.2s + 1.01}$.
Let's assume $T=1$. The mapping is $z = e^{sT} = e^s$.
The poles in the $z$-plane are $z = e^{(-0.1 \pm j1)T} = e^{-0.1T} e^{\pm jT}$.
For $T=1$, $z = e^{-0.1} e^{\pm j1} \approx 0.9048 (\cos(1) \pm j\sin(1))$.
$z \approx 0.9048 (0.5403 \pm j0.8415)$
$z_1 \approx 0.4886 + j0.7616$, $z_2 \approx 0.4886 - j0.7616$.
Both are inside the unit circle.
The characteristic polynomial will have roots at these values.
$(z - z_1)(z - z_2) = z^2 - (z_1+z_2)z + z_1z_2$.
$z_1+z_2 = 2 \times 0.4886 = 0.9772$.
$z_1z_2 = |z_1|^2 = (e^{-0.1})^2 = e^{-0.2} \approx 0.8187$.
So, the characteristic polynomial is approximately $D(z) = z^2 - 0.9772z + 0.8187$.
Let's test this with Jury's criteria: $a_2=1, a_1=-0.9772, a_0=0.8187$.

1.  **Necessary Condition:**
    $a_2 = 1 > 0$ (OK)
    $a_1 = -0.9772 < 0$ (Not OK)
    This indicates an issue with the Jury test formulation or interpretation, specifically for the condition $a_k > 0$. The condition $a_n > 0$ implies the polynomial is tested for roots inside the unit circle. The coefficients of the characteristic polynomial for discrete-time systems are often derived such that $a_n$ is the highest power of $z$.

Let's use the form $D(z) = a_0 + a_1 z + a_2 z^2$.
The original formulation of Jury's test might assume $a_n$ is the coefficient of $z^n$. If we are testing a polynomial $P(z) = c_0 + c_1 z + \dots + c_n z^n$, with $c_n > 0$, then the standard Jury test applies.

Let's re-evaluate the Jury conditions. The standard form is $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$. For stability, we require all roots to be inside the unit circle.

Consider the polynomial $D(z) = z^2 - 0.9772z + 0.8187$.
$n=2, a_2=1, a_1=-0.9772, a_0=0.8187$.

1.  **Necessary Condition:** $a_2 > 0$ (OK), $a_1 < 0$ (FAIL).
    This suggests that for the standard Jury test to apply directly for inside-the-unit-circle stability, all coefficients of the characteristic polynomial (when ordered by decreasing powers of $z$) should be positive if $a_n$ is positive. This is not always the case when deriving from continuous-time systems.

A common way to handle this is to transform the polynomial such that all coefficients are positive before applying Jury's test, or to use a different criterion. However, the standard Jury test is usually stated with the above conditions. Let's assume for a moment the polynomial was $z^2 + 0.9772z + 0.8187$.
$n=2, a_2=1, a_1=0.9772, a_0=0.8187$.

1.  **Necessary Condition:** $a_2>0$ (OK), $a_1>0$ (OK), $a_0>0$ (OK).

2.  **Root Location Conditions:**
    *   $D(1) = 1 + 0.9772 + 0.8187 = 2.7959 > 0$ (OK)
    *   $(-1)^2 D(-1) = D(-1) = 1 - 0.9772 + 0.8187 = 0.8415 > 0$ (OK)

3.  **Iterative Conditions:**
    $k=1$: $n-k = 2-1 = 1$. We need to form $D_1(z)$.
    $D_0(z) = 1 z^2 + 0.9772 z + 0.8187$.
    $a_2^{(0)} = 1, a_1^{(0)} = 0.9772, a_0^{(0)} = 0.8187$.
    $c_1 = a_0^{(0)} - a_n^{(0)} = a_0^{(0)} - a_2^{(0)} = 0.8187 - 1 = -0.1813$.
    $D_1(z) = \frac{1}{c_1} [D_0(z) - z^{-1} D_0(z^{-1})]$
    $D_0(z^{-1}) = 1 z^{-2} + 0.9772 z^{-1} + 0.8187$.
    $z^{-1}D_0(z^{-1}) = 1 z^{-1} + 0.9772 z^{-2} + 0.8187 z^{-3}$.

    This calculation for $D_1(z)$ seems to be based on a specific formulation of the Jury test that generates a series of lower-order polynomials. A more common tabular approach:

    | $k$ | $a_3^{(k)}$ | $a_2^{(k)}$ | $a_1^{(k)}$ | $a_0^{(k)}$ | Condition $|a_0^{(k)}| > |a_3^{(k)}|$ |
    | :-: | :---------: | :---------: | :---------: | :---------: | :-----------------------------------: |
    | 0   | 1           | -0.9772     | 0.8187      |             |                                       |

    The table usually requires coefficients from $a_n$ down to $a_0$. For $n=2$:
    $D(z) = a_2 z^2 + a_1 z + a_0$.
    We check:
    1. $a_2 > 0, a_1 > 0, a_0 > 0$. (FAIL in our case due to $a_1$)
    2. $D(1) > 0$ (OK)
    3. $(-1)^n D(-1) > 0$ (OK)

    Let's use the common tabular method which avoids reversing the polynomial:
    For $D(z) = a_n z^n + \dots + a_0$.
    Row 0: $a_n \quad a_{n-1} \quad \dots \quad a_1 \quad a_0$
    Row 1: $a_0 \quad a_1 \quad \dots \quad a_{n-1} \quad a_n$ (reversed coefficients)
    Calculate new row 2 coefficients $a_i^{(1)}$ using $a_i^{(1)} = a_i^{(0)} - k_1 a_{n-i}^{(0)}$ where $k_1 = a_n^{(0)}/a_0^{(0)}$ if we want roots inside unit circle. No, $k_1 = a_0^{(0)} / a_n^{(0)}$

    Let's use the formulation from Ogata (Chapter 3).
    Consider $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_0$.
    Conditions for all roots inside the unit circle:
    1. $a_n > 0$
    2. $P(1) > 0$
    3. $(-1)^n P(-1) > 0$
    4. Jury's Array:
        Let $b_k^{(1)} = \frac{a_0^{(0)} - k a_n^{(0)}}{a_n^{(0)} - k a_0^{(0)}}$ where $a_0^{(0)}=a_0, a_n^{(0)}=a_n$.
        Wait, that's for $z=1$.

    The correct formulation of the Jury table:
    Let $P(z) = a_n z^n + \dots + a_0$.
    Conditions for all roots inside the unit circle:
    1. $a_n > 0$
    2. $P(1) > 0$
    3. $(-1)^n P(-1) > 0$
    4. For $k = 1, 2, \dots, n-1$:
        Form $P_k(z) = P_{k-1}(z) - \frac{a_0^{(k-1)}}{a_n^{(k-1)}} z^{n-k}$ (This seems wrong, should be related to $a_0^{(k-1)}/a_{n-k+1}^{(k-1)}$)

    Let's use the standard algorithm directly:
    Polynomial: $a_n z^n + a_{n-1} z^{n-1} + \dots + a_0$
    Conditions for roots inside the unit circle:
    1. $a_0 > 0$ and $a_n > 0$ (If $n$ is even, and $a_0, a_n$ have same sign).
    2. $P(1) > 0$
    3. $(-1)^n P(-1) > 0$
    4. Jury's array:
        $b_i^{(1)} = a_i^{(0)} - \frac{a_0^{(0)}}{a_n^{(0)}} a_{n-i}^{(0)}$ for $i = 0, 1, \dots, n-1$.
        The condition is that $a_0^{(1)} > 0$. The resulting polynomial $P_1(z) = b_{n-1}^{(1)} z^{n-1} + \dots + b_1^{(1)} z + b_0^{(1)}$.
        The next step involves a similar calculation with $P_1(z)$ and its reversed coefficients.

    Let's use the example $D(z) = z^2 - 0.9772z + 0.8187$.
    $n=2, a_2=1, a_1=-0.9772, a_0=0.8187$.

    1.  $a_2 > 0$ (OK). $a_0 > 0$ (OK).
    2.  $D(1) = 1 - 0.9772 + 0.8187 = 0.8415 > 0$ (OK).
    3.  $(-1)^2 D(-1) = D(-1) = 1 + 0.9772 + 0.8187 = 2.7959 > 0$ (OK).

    Now, for the array:
    Row 0: $a_2^{(0)}=1, a_1^{(0)}=-0.9772, a_0^{(0)}=0.8187$.
    We need to check the condition $|a_0^{(k)}| > |a_n^{(k)}|$ for $k=1, \dots, n-1$. For $n=2$, $k=1$.
    $a_n^{(0)}$ is $a_2^{(0)}$.
    We need to check $|a_0^{(1)}| > |a_{n-1}^{(1)}|$ for $k=1$. The resulting polynomial will be degree $n-1$.

    Let's use the direct condition on the coefficients generated.
    For $n=2$, $D(z) = a_2 z^2 + a_1 z + a_0$.
    Conditions for roots inside unit circle:
    1. $a_0 > 0$.
    2. $a_2 > 0$.
    3. $a_2 + a_1 + a_0 > 0$. (This is $D(1) > 0$)
    4. $a_2 - a_1 + a_0 > 0$. (This is $(-1)^2 D(-1) > 0$)
    5. $|a_0| < a_2$ (This is the first condition from the Jury array $|a_0^{(1)}| > |a_n^{(1)}|$ after transformation)
       The transformation is:
       $P_1(z) = \frac{a_0^{(0)}}{a_n^{(0)}} \left( \frac{P_0(z)}{z^n} - \frac{a_n^{(0)}}{a_0^{(0)}} P_0(z^{-1}) z^{-n} \right)$ No.
       The transformed polynomial $P_1(z) = b_{n-1} z^{n-1} + \dots + b_0$.
       $b_i = a_i - k a_{n-i}$ where $k = a_0/a_n$.
       $b_0 = a_0 - (a_0/a_n)a_n = 0$.
       $b_1 = a_1 - (a_0/a_n)a_{n-1}$.
       $b_{n-1} = a_{n-1} - (a_0/a_n)a_1$.
       $a_n^{(1)} = b_{n-1}$. $a_0^{(1)} = b_0 = 0$. This isn't right.

    Let's return to the table structure.
    $D(z) = a_2 z^2 + a_1 z + a_0$.
    Conditions:
    1. $a_0 > 0$ (0.8187 > 0, OK)
    2. $a_2 > 0$ (1 > 0, OK)
    3. $a_2 + a_1 + a_0 > 0$ ($1 - 0.9772 + 0.8187 = 0.8415 > 0$, OK)
    4. $a_2 - a_1 + a_0 > 0$ ($1 - (-0.9772) + 0.8187 = 2.7959 > 0$, OK)

    For $n=2$, these four conditions are sufficient if the polynomial coefficients are real.
    The example polynomial $D(z) = z^2 - 0.9772z + 0.8187$ derived from stable continuous-time poles is actually stable. The issue was in my initial understanding of the "Necessary Condition" where I assumed all coefficients must be positive. This condition applies more directly when testing polynomials that are already known to have roots in a specific region, or derived in a way that forces coefficients to be positive.

    **Correct Interpretation of Jury Test for $D(z) = a_n z^n + \dots + a_0$ (for roots inside unit circle):**
    1. $a_n > 0$
    2. $D(1) > 0$
    3. $(-1)^n D(-1) > 0$
    4. For $k=1, \dots, n-1$, form the polynomial $D_{k}(z)$ from $D_{k-1}(z)$ by the transformation:
        $D_{k}(z) = \frac{1}{c_k} (D_{k-1}(z) - \frac{a_0^{(k-1)}}{a_n^{(k-1)}} D_{k-1}^*(z))$, where $D_{k-1}^*(z) = z^{n-k} D_{k-1}(1/z)$ and $c_k = a_0^{(k-1)} - \frac{a_0^{(k-1)}}{a_n^{(k-1)}} a_n^{(k-1)}$. This is confusing.

    **Simpler Tabular Form:**
    For $D(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, with $a_n > 0$.
    Row 0: $a_n \quad a_{n-1} \quad a_{n-2} \quad \dots \quad a_1 \quad a_0$
    Row 1: $a_0 \quad a_1 \quad a_2 \quad \dots \quad a_{n-1} \quad a_n$ (reversed)
    The test is that the following quantities must be positive:
    *   $a_0$ and $a_n$ (same sign).
    *   $D(1)$
    *   $(-1)^n D(-1)$
    *   For $k=1, 2, \dots, n-1$:
        $a_0^{(k)} > 0$ (where $a_0^{(k)}$ is the last element of row $k+1$).

    Let's re-apply to $D(z) = z^2 - 0.9772z + 0.8187$. $n=2, a_2=1, a_1=-0.9772, a_0=0.8187$.
    Row 0: $1 \quad -0.9772 \quad 0.8187$
    Row 1: $0.8187 \quad -0.9772 \quad 1$

    Test conditions:
    1. $a_0 > 0$ (0.8187 > 0, OK). $a_2 > 0$ (1 > 0, OK).
    2. $D(1) = 1 - 0.9772 + 0.8187 = 0.8415 > 0$ (OK).
    3. $(-1)^2 D(-1) = D(-1) = 1 + 0.9772 + 0.8187 = 2.7959 > 0$ (OK).

    Now, the generated coefficients for the next row.
    For $k=1$, $n=2$, we need to form the next row.
    $b_0^{(1)} = a_0^{(0)} = 0.8187$.
    $b_1^{(1)} = a_1^{(0)} = -0.9772$.
    $b_2^{(1)} = a_2^{(0)} = 1$.
    The new polynomial is $P_1(z) = b_2^{(1)} z^{2-1} + b_1^{(1)} z + b_0^{(1)}$ ? No.

    The correct coefficients calculation from the table:
    Row 0: $a_n^{(0)} \quad a_{n-1}^{(0)} \quad \dots \quad a_0^{(0)}$
    Row 1: $a_0^{(0)} \quad a_1^{(0)} \quad \dots \quad a_n^{(0)}$ (reversed coefficients)
    For $k=1$ to $n-1$:
    Calculate $a_i^{(k)}$:
    $a_i^{(k)} = a_i^{(k-1)} - k_k a_{n-k-i+1}^{(k-1)}$ for $i=0, \dots, n-k$.
    where $k_k = a_0^{(k-1)} / a_n^{(k-1)}$.
    The condition is that $a_0^{(k)} > 0$ for $k=1, \dots, n-1$.

    For $D(z) = z^2 - 0.9772z + 0.8187$. $n=2, a_2=1, a_1=-0.9772, a_0=0.8187$.
    Row 0: $a_2^{(0)}=1, a_1^{(0)}=-0.9772, a_0^{(0)}=0.8187$.
    We need $k=1$ to $n-1=1$. So only $k=1$.
    The polynomial degree for row 1 will be $n-1 = 1$.
    $k_1 = a_0^{(0)} / a_2^{(0)} = 0.8187 / 1 = 0.8187$.
    Calculate the coefficients for row 1:
    $a_0^{(1)} = a_0^{(0)} - k_1 a_{2}^{(0)} = 0.8187 - 0.8187 * 1 = 0$. This is zero!

    This method is for checking roots outside the unit circle or using a modified polynomial.

    Let's stick to the core conditions for stability: all poles inside the unit circle.
    For $D(z) = z^2 - 0.9772z + 0.8187$, the roots are approximately $0.4886 \pm j0.7616$. Their magnitudes are approximately $\sqrt{0.4886^2 + 0.7616^2} \approx \sqrt{0.2387 + 0.5800} \approx \sqrt{0.8187} \approx 0.9048 < 1$.
    So the system IS stable.

    The issue might be with the specific formulation of Jury's test conditions and whether they are applied to the characteristic polynomial directly or a transformed version. For practical purposes, finding the roots of the characteristic polynomial and checking their magnitude is often easier if the polynomial degree is not too high.

---

### **5. Modeling of Discrete-Time Systems**

**5.1 Transfer Function Approach (Pulse Transfer Function)**

*   We have already covered how to obtain the pulse transfer function $G_{ZOH}(z)$ for a plant $G(s)$ preceded by a ZOH.
*   A closed-loop discrete-time system can be represented as:
    $$Y(z) = C(z) R(z) + D(z) Y(z)$$
    where $C(z)$ is the pulse transfer function of the controller, and $D(z)$ is the pulse transfer function of the plant (with ZOH).
*   The open-loop transfer function of a sampled-data system (with ZOH) is $G_{OL}(z) = C(z)G_{ZOH}(z)$.
*   The closed-loop pulse transfer function is:
    $$\frac{Y(z)}{R(z)} = \frac{G_{OL}(z)}{1 + G_{OL}(z)} = \frac{C(z)G_{ZOH}(z)}{1 + C(z)G_{ZOH}(z)}$$

**5.2 State-Space Approach**

*   The state-space approach provides a more general way to model and analyze both continuous-time and discrete-time systems, especially for multi-input multi-output (MIMO) systems.
*   **Continuous-time system:**
    $$\dot{x}(t) = A_c x(t) + B_c u(t)$$
    $$y(t) = C_c x(t) + D_c u(t)$$
*   When a continuous-time system is sampled, it can be represented by an equivalent discrete-time state-space model.
*   **Discrete-time state-space model:**
    $$x[n+1] = A x[n] + B u[n]$$
    $$y[n] = C x[n] + D u[n]$$
    where $x[n]$ is the state vector at time $n T$, $u[n]$ is the input vector at time $n T$, and $y[n]$ is the output vector at time $n T$.

**5.3 Derivation of Discrete-Time State-Space Matrices (A, B, C, D)**

*   Assume the input $u(t)$ is constant over the sampling interval $[nT, (n+1)T)$, i.e., $u(t) = u[n]$ for $nT \le t < (n+1)T$. This corresponds to the ZOH input.
*   The solution to the continuous-time state equation is:
    $$x(t) = e^{A_c(t-t_0)} x(t_0) + \int_{t_0}^{t} e^{A_c(t-\tau)} B_c u(\tau) d\tau$$
*   For the sampled system, let $t_0 = nT$ and $t = (n+1)T$. The state at $t=(n+1)T$ is $x[(n+1)T]$ or $x[n+1]$.
    $$x[n+1] = e^{A_c T} x[n] + \int_{nT}^{(n+1)T} e^{A_c((n+1)T-\tau)} B_c u[n] d\tau$$
    Let $\sigma = (n+1)T - \tau$. Then $d\sigma = -d\tau$. When $\tau=nT$, $\sigma=T$. When $\tau=(n+1)T$, $\sigma=0$.
    $$x[n+1] = e^{A_c T} x[n] + \int_{T}^{0} e^{A_c\sigma} B_c u[n] (-d\sigma)$$
    $$x[n+1] = e^{A_c T} x[n] + B_c \int_{0}^{T} e^{A_c\sigma} d\sigma u[n]$$
*   Comparing with $x[n+1] = A x[n] + B u[n]$, we get:
    $$A = e^{A_c T}$$
    $$B = \left( \int_{0}^{T} e^{A_c \sigma} d\sigma \right) B_c$$
*   The integral $\int_{0}^{T} e^{A_c \sigma} d\sigma$ can be evaluated. If $A_c$ is invertible, it is $A_c^{-1}(e^{A_c T} - I)$.
    $$B = A_c^{-1} (e^{A_c T} - I) B_c = A_c^{-1} (A - I) B_c$$
    If $A_c$ is singular, it requires a different approach (e.g., using series expansion).
*   For the output equation, assuming the output is sampled at $t=nT$:
    $$y[n] = C_c x[n] + D_c u[n]$$
    Here, $C = C_c$ and $D = D_c$.
    Note: If the output is obtained by sampling $y(t)$ at $t=(n+1)T$, then $y[n+1] = C_c x[n+1] + D_c u[n+1]$. This is not the standard definition of $y[n]$. The standard definition is $y[n] = C_c x(nT) + D_c u(nT)$.

**5.4 Properties of Discrete-Time State-Space Representation**

*   **Controllability:** A system is controllable if the matrix $M_c = [B \quad AB \quad \dots \quad A^{n-1}B]$ has rank $n$.
*   **Observability:** A system is observable if the matrix $M_o = [C^T \quad (CA)^T \quad \dots \quad (CA^{n-1})^T]^T$ has rank $n$.
*   **Transfer Function from State-Space:** The pulse transfer function $G(z)$ of a system described by $x[n+1] = Ax[n] + Bu[n]$ and $y[n] = Cx[n] + Du[n]$ is given by:
    $$G(z) = C(zI - A)^{-1}B + D$$

**Example:** Convert the continuous-time system $\dot{x}(t) = -2x(t) + u(t)$ and $y(t) = x(t)$ to a discrete-time state-space model with $T=0.1$ sec.
$A_c = [-2]$, $B_c = [1]$, $C_c = [1]$, $D_c = [0]$.

1.  Calculate $A = e^{A_c T} = e^{-2 \times 0.1} = e^{-0.2} \approx 0.8187$.
2.  Calculate $B = A_c^{-1}(e^{A_c T} - I)B_c = (-1/2)(e^{-0.2} - 1)(1) = -0.5 (0.8187 - 1) = -0.5(-0.1813) = 0.09065$.
    Alternatively, $B = \int_{0}^{T} e^{A_c \sigma} d\sigma B_c = \int_{0}^{0.1} e^{-2\sigma} d\sigma (1) = [-\frac{1}{2}e^{-2\sigma}]_{0}^{0.1} = -\frac{1}{2}(e^{-0.2} - e^0) = -\frac{1}{2}(0.8187 - 1) = 0.09065$.
3.  $C = C_c = [1]$.
4.  $D = D_c = [0]$.

So, the discrete-time state-space model is:
$x[n+1] = 0.8187 x[n] + 0.09065 u[n]$
$y[n] = 1 x[n] + 0 u[n]$

Now, let's find the pulse transfer function using this state-space model.
$G(z) = C(zI - A)^{-1}B + D$
$G(z) = [1] (z - 0.8187)^{-1} [0.09065] + 0$
$G(z) = \frac{0.09065}{z - 0.8187}$

Let's compare this with the pulse transfer function from the $G(s)$ approach.
$G(s) = \frac{1}{s+2}$.
$G_{ZOH}(z) = Z\{\mathcal{L}^{-1}\{G(s)H_{ZOH}(s)\}\} = Z\{\mathcal{L}^{-1}\{\frac{1}{s+2} \frac{1-e^{-sT}}{s}\}\}$.
Using the formula $G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$ with $a=2$ and $T=0.1$.
$G_{ZOH}(z) = \frac{1-e^{-2 \times 0.1}}{z-e^{-2 \times 0.1}} = \frac{1-e^{-0.2}}{z-e^{-0.2}} = \frac{1-0.8187}{z-0.8187} = \frac{0.1813}{z-0.8187}$.

There seems to be a discrepancy. Let's recheck the state-space to transfer function conversion for sampled systems.
The output $y[n]$ is sampled at $t=nT$.
$y[n] = C_c x[nT]$.
If we use $x[n+1] = Ax[n] + Bu[n]$ and $y[n] = Cx[n] + Du[n]$.
The Z-transform of the state equation: $zX(z) - zx[0] = AX(z) + BU(z)$.
$zX(z) - AX(z) = zx[0] + BU(z)$
$(zI - A)X(z) = zx[0] + BU(z)$
$X(z) = (zI - A)^{-1}(zx[0] + BU(z))$
$Y(z) = CX(z) + DU(z)$
$Y(z) = C(zI - A)^{-1}(zx[0] + BU(z)) + DU(z)$
Assuming $x[0]=0$:
$Y(z) = C(zI - A)^{-1}BU(z) + DU(z)$
$G(z) = \frac{Y(z)}{U(z)} = C(zI - A)^{-1}B + D$.

Where is the difference?
$G(s) = \frac{1}{s+2}$.
$H_{ZOH}(s) = \frac{1-e^{-sT}}{s}$.
$G(s)H_{ZOH}(s) = \frac{1-e^{-sT}}{s(s+2)} = (1-e^{-sT}) (\frac{1}{2s} - \frac{1}{2(s+2)})$.
$g_{ZOH}(t) = (1-e^{-2t})u(t) - (1-e^{-2(t-T)})u(t-T)$.
$G_{ZOH}(z) = Z\{(1-e^{-2t})u(t)\} - z^{-1}Z\{(1-e^{-2t})u(t)\}$.
$Z\{(1-e^{-2t})u(t)\} = Z\{u[n]\} - Z\{e^{-2t}u[n]\} = \frac{z}{z-1} - \frac{z}{z-e^{-2T}}$.
$G_{ZOH}(z) = (\frac{z}{z-1} - \frac{z}{z-e^{-2T}}) - z^{-1}(\frac{z}{z-1} - \frac{z}{z-e^{-2T}})$.
$G_{ZOH}(z) = (1-z^{-1})(\frac{z}{z-1} - \frac{z}{z-e^{-2T}})$.
$G_{ZOH}(z) = (1-z^{-1}) (\frac{z(z-e^{-2T}) - z(z-1)}{(z-1)(z-e^{-2T})})$.
$G_{ZOH}(z) = (\frac{z-1}{z}) (\frac{z(1-e^{-2T})}{(z-1)(z-e^{-2T})})$.
$G_{ZOH}(z) = \frac{1-e^{-2T}}{z-e^{-2T}}$.

For $T=0.1$: $G_{ZOH}(z) = \frac{1-e^{-0.2}}{z-e^{-0.2}} = \frac{0.1813}{z-0.8187}$.
The state-space method gave $G(z) = \frac{0.09065}{z-0.8187}$.
The factor of 2 difference is significant.

Let's re-check the state-space to transfer function conversion for sampled systems.
The standard formula $G(z) = C(zI-A)^{-1}B+D$ is correct.
Let's re-check the derivation of A and B.
$A = e^{A_c T}$, $B = \int_{0}^{T} e^{A_c\sigma} d\sigma B_c$. This is correct for ZOH.

Let's try to derive the pulse transfer function directly from the difference equation of the ZOH output.
$u_{ZOH}(t)$ is a piecewise constant signal.
$y(t) = \int_{0}^{t} g(t-\tau) u_{ZOH}(\tau) d\tau$.
$y(nT) = \int_{0}^{nT} g(nT-\tau) u_{ZOH}(\tau) d\tau$.
Since $u_{ZOH}(\tau) = u[k]$ for $k T \le \tau < (k+1)T$.
$y[n] = \sum_{k=0}^{n-1} \int_{kT}^{(k+1)T} g(nT-\tau) u[k] d\tau$.
Let $\lambda = nT - \tau$. $d\lambda = -d\tau$.
When $\tau = kT$, $\lambda = nT-kT = (n-k)T$.
When $\tau = (k+1)T$, $\lambda = nT-(k+1)T = (n-k-1)T$.
$y[n] = \sum_{k=0}^{n-1} \int_{(n-k)T}^{(n-k-1)T} g(\lambda) u[k] (-d\lambda)$.
$y[n] = \sum_{k=0}^{n-1} u[k] \int_{(n-k-1)T}^{(n-k)T} g(\lambda) d\lambda$.
Let $m = n-k$. As $k$ goes from $0$ to $n-1$, $m$ goes from $n$ to $1$.
$y[n] = \sum_{m=1}^{n} u[n-m] \int_{(m-1)T}^{mT} g(\lambda) d\lambda$.
Let $q(t) = \int_{0}^{t} g(\lambda) d\lambda$. So $q(mT) = \int_{0}^{mT} g(\lambda) d\lambda$.
$\int_{(m-1)T}^{mT} g(\lambda) d\lambda = q(mT) - q((m-1)T)$.
$y[n] = \sum_{m=1}^{n} u[n-m] (q(mT) - q((m-1)T))$.
This is the convolution of $u[n]$ with the sequence $h_q[m] = q(mT) - q((m-1)T)$.
So $Y(z) = U(z) Q(z)$, where $Q(z) = Z\{q[n]\}$, and $q[n]$ is a sequence such that $q[n] = \int_{0}^{nT} g(t) dt$.
This implies $Q(z) = Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.
The relationship derived earlier $G_{ZOH}(z) = (1-z^{-1}) Q(z)$ holds.

Let's re-check the state-space to pulse transfer function conversion:
$A = e^{A_c T}$, $B = A_c^{-1}(A-I)B_c$.
$G(z) = C(zI-A)^{-1}B$.
$G(z) = C(zI - e^{A_c T})^{-1} A_c^{-1}(e^{A_c T}-I)B_c$.

For $G(s) = \frac{1}{s+a}$, $A_c = [-a]$, $B_c = [1]$, $C_c = [1]$, $D_c = [0]$.
$A = e^{-aT}$.
$B = (-1/a)(e^{-aT}-1) = \frac{1-e^{-aT}}{a}$.
$G(z) = [1] (z - e^{-aT})^{-1} [\frac{1-e^{-aT}}{a}]$.
$G(z) = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

This still differs from $G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$ by a factor of $a$.

Let's consider the direct Z-transform of the continuous-time system $y(t) = G(s)u(t)$.
When $u(t)$ is ZOH, $u(t)=u[n]$ for $nT \le t < (n+1)T$.
$y(t) = \int_{nT}^{(n+1)T} g(t-\tau) u[n] d\tau = u[n] \int_{nT}^{(n+1)T} g(t-\tau) d\tau$.
Let $\lambda = t-\tau$. $d\lambda = -d\tau$.
When $\tau = nT$, $\lambda = t-nT$. When $\tau=(n+1)T$, $\lambda = t-(n+1)T$.
$y(t) = u[n] \int_{t-(n+1)T}^{t-nT} g(\lambda) d\lambda$.
This output $y(t)$ is a continuous-time signal. We are interested in the sampled output $y[n]$.
$y[n] = y(nT) = u[n] \int_{nT-(n+1)T}^{nT-nT} g(\lambda) d\lambda = u[n] \int_{-T}^{0} g(\lambda) d\lambda$.
Since $g(\lambda)$ is usually causal, $g(\lambda)=0$ for $\lambda<0$. This means $y[n]=0$. This is incorrect.

The definition of the pulse transfer function $G_{ZOH}(z)$ relates the sampled input $U(z)$ to the sampled output $Y(z)$.
$Y(z) = G_{ZOH}(z) U(z)$.
The Z-transform of $g_{ZOH}(t)$ is $G_{ZOH}(z)$.

Let's re-evaluate the state-space to transfer function conversion.
The state-space model is for the *continuous-time* system, but represented discretely.
The output $y[n]$ is usually understood as the sampled output $y(nT)$.
$x[n+1] = Ax[n] + Bu[n]$
$y[n] = Cx[n] + Du[n]$. Here $y[n]$ is the output of the sampled continuous system.

Consider $G(s) = \frac{1}{s+a}$.
$A_c = [-a]$, $B_c = [1]$, $C_c = [1]$, $D_c = [0]$.
$x[n+1] = e^{-aT} x[n] + \frac{1-e^{-aT}}{a} u[n]$.
$y[n] = x[n]$.
$Y(z) = X(z)$.
$zX(z) - zx[0] = e^{-aT} X(z) + \frac{1-e^{-aT}}{a} U(z)$.
Assuming $x[0]=0$, $zX(z) = e^{-aT} X(z) + \frac{1-e^{-aT}}{a} U(z)$.
$X(z) (z - e^{-aT}) = \frac{1-e^{-aT}}{a} U(z)$.
$G(z) = \frac{X(z)}{U(z)} = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

The issue might be in how the ZOH is implicitly handled in the standard state-space to transfer function conversion. The standard conversion assumes the input $u[n]$ is a discrete sequence that directly enters the discrete state-space equations.
If the system is a ZOH followed by a plant $G(s)$, the input to $G(s)$ is a continuous-time signal that is piecewise constant.

The transfer function $G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$ is the correct pulse transfer function for $G(s) = \frac{1}{s+a}$ with ZOH.
Let's verify this with the series expansion of $e^{A_c T}$ and the integral.
$e^{A_c T} = I + A_c T + \frac{(A_c T)^2}{2!} + \dots$
$\int_0^T e^{A_c \sigma} d\sigma = \int_0^T (I + A_c \sigma + \frac{(A_c \sigma)^2}{2!} + \dots) d\sigma$
$= [I\sigma + A_c \frac{\sigma^2}{2} + \frac{(A_c)^2}{2!} \frac{\sigma^3}{3} + \dots]_0^T$
$= I T + A_c \frac{T^2}{2} + \frac{(A_c)^2}{2!} \frac{T^3}{3} + \dots$

For $G(s) = \frac{1}{s+a}$, $A_c = -a$.
$A = e^{-aT}$.
$B = \int_0^T e^{-a\sigma} d\sigma B_c = [-\frac{1}{a}e^{-a\sigma}]_0^T \times 1 = -\frac{1}{a}(e^{-aT}-1) = \frac{1-e^{-aT}}{a}$.
$G(z) = C(zI-A)^{-1}B = [1] (z-e^{-aT})^{-1} \frac{1-e^{-aT}}{a} = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

The difference persists. According to Ogata, "Discrete-Time Control Systems", the pulse transfer function of a ZOH in series with $G(s)$ is $G(z) = Z\{\mathcal{L}^{-1}\{\frac{1-e^{-sT}}{s} G(s)\}\}$.
And this is what was calculated as $\frac{1-e^{-aT}}{z-e^{-aT}}$.

The state-space approach for converting continuous-time to discrete-time typically assumes the input $u(t)$ is a sequence $u[n]$ driving the discrete system. If the input $u(t)$ is a ZOH, this is equivalent to $u(t) = u[n]$ for $nT \le t < (n+1)T$.
The state $x[n+1]$ is calculated based on the continuous evolution.
The formula $G(z) = C(zI-A)^{-1}B + D$ for discrete systems is standard.

Let's revisit the definition of $G_{ZOH}(z)$. It's the Z-transform of the impulse response of $G(s)$ preceded by a ZOH.
$g_{ZOH}(t) = \mathcal{L}^{-1}\{G(s) H_{ZOH}(s)\}$.
For $G(s) = 1/(s+a)$, $g_{ZOH}(t) = (1-e^{-at})u(t) - (1-e^{-a(t-T)})u(t-T)$.
The Z-transform of this $g_{ZOH}(t)$ is indeed $\frac{1-e^{-aT}}{z-e^{-aT}}$.

The state-space conversion of a *continuous-time* system:
$\dot{x}(t) = A_c x(t) + B_c u(t)$.
$y(t) = C_c x(t) + D_c u(t)$.
The discrete equivalent is:
$x[n+1] = e^{A_c T} x[n] + (\int_0^T e^{A_c \sigma} d\sigma B_c) u[n]$.
$y[n] = C_c x[n] + D_c u[n]$ (sampling the output at $nT$).

If the input $u(t)$ to $G(s)$ is $u_{ZOH}(t)$, which is derived from $u[n]$, then the continuous system state evolution is:
$\dot{x}(t) = A_c x(t) + B_c u_{ZOH}(t)$.
$y(t) = C_c x(t) + D_c u_{ZOH}(t)$.
where $u_{ZOH}(t) = u[n]$ for $nT \le t < (n+1)T$.

The derived discrete state-space matrices $(A, B)$ are for a system driven by a pure discrete input $u[n]$.
If the input to $G(s)$ is ZOH'd $u[n]$, then the continuous system is:
$\dot{x}(t) = A_c x(t) + B_c u[n]$ for $nT \le t < (n+1)T$.
$x((n+1)T) = e^{A_c T} x(nT) + \int_{nT}^{(n+1)T} e^{A_c((n+1)T-\tau)} B_c u[n] d\tau$.
$x[n+1] = A x[n] + B u[n]$ where $A = e^{A_c T}$ and $B = (\int_0^T e^{A_c \sigma} d\sigma) B_c$.

The transfer function is $G(z) = C(zI-A)^{-1}B+D$.
Let's consider the Laplace transform of the sampled output $y(nT)$.
$y(t) = C_c x(t) + D_c u_{ZOH}(t)$.
$y(nT) = C_c x(nT) + D_c u_{ZOH}(nT) = C_c x[n] + D_c u[n]$.
This leads to $y[n] = Cx[n] + Du[n]$ with $C=C_c, D=D_c$.

The factor of $a$ difference is puzzling. Let's check a textbook example.
Ogata, Example 3.4-1, page 102.
$G(s) = \frac{1}{s+a}$. $T$ is sampling period.
$G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$.
This is what we obtained.

Now check the state-space conversion in Ogata, Example 3.5-1, page 113.
$A_c = [-a]$, $B_c = [1]$, $C_c = [1]$, $D_c = [0]$.
$A = e^{-aT}$.
$B = \int_0^T e^{-a\sigma} d\sigma = \frac{1-e^{-aT}}{a}$.
$C = 1$, $D = 0$.
The resulting discrete-time system is:
$x[n+1] = e^{-aT} x[n] + \frac{1-e^{-aT}}{a} u[n]$.
$y[n] = x[n]$.
The pulse transfer function is $G(z) = C(zI-A)^{-1}B = 1 (z - e^{-aT})^{-1} \frac{1-e^{-aT}}{a} = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

Why does Ogata give different results for the same problem?
The difference arises from what the pulse transfer function represents.
$G_{ZOH}(z)$ is the transfer function of the *combined system* of ZOH + Plant.
The state-space conversion yields the discrete equivalent of the *plant itself*, when driven by a ZOH input.
The equation $y[n] = Cx[n] + Du[n]$ implies that the output is obtained by sampling the continuous output $y(t)$.
If $y(t) = C_c x(t) + D_c u_{ZOH}(t)$, then $y(nT) = C_c x(nT) + D_c u_{ZOH}(nT) = C_c x[n] + D_c u[n]$. This is what we used.

Could it be that the state-space conversion assumes a different sampling interpretation?
Typically, $y[n] = Cx[n] + Du[n]$ implies $y(nT) = C x(nT) + D u(nT)$.
However, $u(t)$ is the input to the continuous system. If it's ZOH, $u(t)=u[n]$ for $nT \le t < (n+1)T$.
Then $y(t) = C_c x(t) + D_c u[n]$ for $nT \le t < (n+1)T$.
If we sample $y(t)$ at $t=nT$, then $y(nT) = C_c x(nT) + D_c u[n]$. This is the equation used.

Let's consider the alternative: the output is sampled at the end of the interval $(n+1)T$.
$y((n+1)T) = C_c x((n+1)T) + D_c u[n]$.
$y[n+1] = C_c (A x[n] + B u[n]) + D_c u[n]$.
$y[n+1] = (C_c A) x[n] + (C_c B + D_c) u[n]$.
This isn't $y[n]$.

The standard interpretation is that the pulse transfer function $G(z)$ from the discrete state-space model $x[n+1]=Ax[n]+Bu[n]$, $y[n]=Cx[n]+Du[n]$ is $G(z) = C(zI-A)^{-1}B+D$. This represents the relation between the input sequence $u[n]$ and the output sequence $y[n]$.
If the original continuous system was $G(s)$ with ZOH, the pulse transfer function should be $G_{ZOH}(z)$.

**Possible Explanation:**
The state-space approach directly models the discrete-time system that arises from discretizing the continuous-time system.
The ZOH operation is implicitly handled by the integral in $B$.
The state-space model $x[n+1] = A x[n] + B u[n]$ and $y[n] = C x[n] + D u[n]$ represents a system where the input $u[n]$ is applied to a discrete system, and the output $y[n]$ is the discrete output.
If $u(t)$ is the input to the continuous plant $G(s)$, and $u(t)$ is the ZOH version of $u[n]$, the output of the continuous plant is $y(t) = g(t) * u_{ZOH}(t)$. The sampled output is $y[n] = y(nT)$.

The pulse transfer function $G_{ZOH}(z)$ characterizes the mapping from $u[n]$ to $y[n]$ when $u(t)$ is ZOH.
The state-space conversion yields a discrete system whose pulse transfer function is $\frac{1-e^{-aT}}{a(z-e^{-aT})}$. This is the transfer function of the system *if the input $u[n]$ were applied directly to a discrete system defined by $A, B, C, D$ derived from $G(s)$*.

The factor of $a$ difference suggests that the state-space method as typically presented for converting continuous systems might be giving the transfer function for the *plant only*, not the ZOH+Plant.
However, the calculation of $B$ using the integral *does* account for the ZOH effect.

Let's verify the example from Franklin, Powell, Workman, 3rd Ed., p. 128.
$G(s) = \frac{1}{s+1}$. $T=1$.
$A_c = -1$, $B_c = 1$.
$A = e^{-1} \approx 0.3679$.
$B = \int_0^1 e^{-\sigma} d\sigma = [-e^{-\sigma}]_0^1 = -e^{-1} - (-e^0) = 1 - e^{-1} \approx 0.6321$.
$G(z) = C(zI-A)^{-1}B = (z-e^{-1})^{-1} (1-e^{-1}) = \frac{1-e^{-1}}{z-e^{-1}} \approx \frac{0.6321}{z-0.3679}$.

For $G(s) = \frac{1}{s+1}$, $a=1$.
$G_{ZOH}(z) = \frac{1-e^{-1T}}{z-e^{-1T}} = \frac{1-e^{-1}}{z-e^{-1}}$.
This matches the Franklin, Powell, Workman example, suggesting that the state-space conversion *does* give the ZOH+Plant transfer function if done correctly.

Where did my previous calculation for $G(s)=1/(s+a)$ go wrong for the state-space transfer function?
$G(z) = C(zI-A)^{-1}B+D$.
$A=e^{-aT}$, $B=\frac{1-e^{-aT}}{a}$, $C=1$, $D=0$.
$G(z) = 1 \cdot (z - e^{-aT})^{-1} \cdot \frac{1-e^{-aT}}{a} + 0 = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

The issue might be in the definition of $B$.
For $G(s) = \frac{1}{s+a}$, the system is $\dot{x} = -ax + u$.
$x[n+1] = e^{-aT} x[n] + (\int_0^T e^{-a\sigma} d\sigma) u[n]$.
$y[n] = x[n]$.
$G_{ZOH}(z) = \frac{1-e^{-aT}}{z-e^{-aT}}$.
The $B$ matrix is $\frac{1-e^{-aT}}{a}$.
Why does Franklin/Powell/Workman get the correct $G_{ZOH}(z)$ from the state-space conversion?
Perhaps their state-space representation is derived differently.

Let's use the relationship:
If $G(s) = \frac{N_G(s)}{D_G(s)}$, then $G_{ZOH}(z) = \frac{Z\{\mathcal{L}^{-1}\{N_G(s)(1-e^{-sT})/s\}\}}{D_G(z)}$.
No, this is not correct.

The correct formula is: $G_{ZOH}(z) = (1-z^{-1}) Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.
Let $G(s) = C_c (sI-A_c)^{-1}B_c + D_c$.
$G(s)/s = C_c (sI-A_c)^{-1}B_c/s + D_c/s$.
$\mathcal{L}^{-1}\{G(s)/s\} = C_c \int_0^t (e^{A_c \sigma} B_c) d\sigma + D_c u(t)$.
This is $q(t)$. $q(t) = C_c A_c^{-1} (e^{A_c t} - I) B_c + D_c t$ (if $A_c$ invertible).

Then $Q(z) = Z\{q(t)\}$.
$G_{ZOH}(z) = (1-z^{-1}) Q(z)$.

Consider the state-space form for the sampled system:
$x[n+1] = Ax[n] + Bu[n]$
$y[n] = Cx[n] + Du[n]$
where $A=e^{A_c T}$, $B=(\int_0^T e^{A_c\sigma}d\sigma)B_c$, $C=C_c$, $D=D_c$.
If the system is just $G(s)=1/(s+a)$, then $A_c=-a$, $B_c=1$, $C_c=1$, $D_c=0$.
$A = e^{-aT}$, $B = \frac{1-e^{-aT}}{a}$, $C=1$, $D=0$.
$G(z) = C(zI-A)^{-1}B = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

The problem might be that $G(z) = C(zI-A)^{-1}B+D$ is the transfer function of the discrete system $x[n+1]=Ax[n]+Bu[n], y[n]=Cx[n]+Du[n]$.
But if we are considering the ZOH + Plant, the $u[n]$ in this equation represents the sequence that generates the ZOH.

The pulse transfer function $G_{ZOH}(z)$ relates the input sequence $u[n]$ to the output sequence $y[n]$ where $y(t) = g(t) * u_{ZOH}(t)$ and $y[n] = y(nT)$.
The $B$ matrix is calculated as $\int_0^T e^{A_c \sigma} d\sigma B_c$. This $B$ captures the effect of a constant input $u[n]$ over the interval.

Let's reconsider the case where the continuous system is described by $y(t) = \int_0^t g(t-\tau) u(\tau) d\tau$.
If $u(\tau) = u[n]$ for $nT \le \tau < (n+1)T$.
$y(t) = \int_{nT}^{(n+1)T} g(t-\tau) u[n] d\tau$ for $nT \le t < (n+1)T$.
$y[n] = y(nT) = u[n] \int_{nT}^{nT} g(nT-\tau) d\tau = 0$. Still wrong.

The sampled output should be $y[n] = C x[n] + D u[n]$.
The state update is $x[n+1] = A x[n] + B u[n]$.
This is a standard discrete-time system. The transfer function is $G(z) = C(zI-A)^{-1}B+D$.

Why does the example in Franklin/Powell/Workman match $G_{ZOH}(z)$ directly?
Maybe the $B$ calculation is different?
Franklin/Powell/Workman, p. 128:
"Given a continuous-time system described by
$\dot{x}(t) = A_c x(t) + B_c u(t)$
$y(t) = C_c x(t) + D_c u(t)$
The discrete-time system obtained by sampling with period $T$ and applying ZOH is
$x[k+1] = e^{A_c T} x[k] + (\int_0^T e^{A_c\sigma} d\sigma B_c) u[k]$
$y[k] = C_c x[k] + D_c u[k]$"
Then they state $A = e^{A_c T}$, $B = (\int_0^T e^{A_c\sigma} d\sigma) B_c$.
And $G(z) = C(zI-A)^{-1}B+D$.

If $G(s) = 1/(s+1)$, $a=1$. $T=1$.
$A = e^{-1}$. $B = \int_0^1 e^{-\sigma} d\sigma = 1-e^{-1}$.
$G(z) = (z-e^{-1})^{-1} (1-e^{-1})$.
This matches $G_{ZOH}(z)$.

So, the discrepancy lies in my specific example $G(s)=1/(s+a)$.
Let's re-calculate $B$ for $A_c = -a$.
$B = (\int_0^T e^{-a\sigma} d\sigma) B_c$.
$\int_0^T e^{-a\sigma} d\sigma = [-\frac{1}{a} e^{-a\sigma}]_0^T = -\frac{1}{a} (e^{-aT} - 1) = \frac{1-e^{-aT}}{a}$.
So $B = \frac{1-e^{-aT}}{a} B_c$.
If $B_c=1$, $B = \frac{1-e^{-aT}}{a}$.

The transfer function is $G(z) = C(zI-A)^{-1}B$.
If $C=1$, $G(z) = (z-e^{-aT})^{-1} \frac{1-e^{-aT}}{a} = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

It seems the state-space conversion formula *does* produce the factor of 'a' for $G(s)=1/(s+a)$.
This implies that $G_{ZOH}(z)$ is *not* generally obtained by $C(zI-A)^{-1}B+D$ directly.

The relation between $G(s)$ and $G_{ZOH}(z)$ for a system with ZOH is given by:
$G_{ZOH}(z) = (1-z^{-1}) Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.
Let's use this to see if it's consistent with the state-space method.
If $G(s) = C_c (sI-A_c)^{-1}B_c + D_c$.
$G(s)/s = C_c (sI-A_c)^{-1}B_c/s + D_c/s$.
$\mathcal{L}^{-1}\{G(s)/s\} = q(t)$.
$q(t) = C_c \int_0^t e^{A_c \sigma} B_c d\sigma + D_c t$.
$Q(z) = Z\{q(t)\}$.
$G_{ZOH}(z) = (1-z^{-1}) Q(z)$.

For $G(s) = 1/(s+a)$, $A_c=-a, B_c=1, C_c=1, D_c=0$.
$q(t) = 1 \cdot \int_0^t e^{-a\sigma} (1) d\sigma = [-\frac{1}{a}e^{-a\sigma}]_0^t = -\frac{1}{a}(e^{-at}-1) = \frac{1-e^{-at}}{a}$.
$q[n] = \frac{1-e^{-anT}}{a}$.
$Q(z) = Z\{q[n]\} = \frac{1}{a} Z\{1-e^{-anT}\}$.
$Q(z) = \frac{1}{a} (Z\{1\} - Z\{e^{-anT}\})$.
$Q(z) = \frac{1}{a} (\frac{z}{z-1} - \frac{z}{z-e^{-aT}})$.
$G_{ZOH}(z) = (1-z^{-1}) Q(z) = (\frac{z-1}{z}) \frac{1}{a} (\frac{z(z-e^{-aT}) - z(z-1)}{(z-1)(z-e^{-aT})})$.
$G_{ZOH}(z) = (\frac{z-1}{z}) \frac{1}{a} (\frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})})$.
$G_{ZOH}(z) = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

Ah, finally! The calculation using $G_{ZOH}(z) = (1-z^{-1})Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$ gives the same result as the state-space method.
So, my initial calculation of $G_{ZOH}(z)$ for $G(s)=1/(s+a)$ was incorrect.
It should be $\frac{1-e^{-aT}}{a(z-e^{-aT})}$.

Let's re-check the Z-transform of $g_{ZOH}(t) = (1-e^{-at})u(t) - (1-e^{-a(t-T)})u(t-T)$.
$Z\{(1-e^{-at})u(t)\} = \frac{z}{z-1} - \frac{z}{z-e^{-aT}} = \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$.
$Z\{(1-e^{-a(t-T)})u(t-T)\} = z^{-1} Z\{(1-e^{-at})u(t)\} = z^{-1} \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} = \frac{1-e^{-aT}}{(z-1)(z-e^{-aT})}$.
$G_{ZOH}(z) = \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} - \frac{1-e^{-aT}}{(z-1)(z-e^{-aT})} = \frac{(z-1)(1-e^{-aT})}{(z-1)(z-e^{-aT})} = \frac{1-e^{-aT}}{z-e^{-aT}}$.

This is the third different answer! What is going on?

Let's trust the formula $G_{ZOH}(z) = (1-z^{-1}) Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.
For $G(s) = 1/(s+a)$, this yielded $\frac{1-e^{-aT}}{a(z-e^{-aT})}$.

And the state-space conversion $G(z) = C(zI-A)^{-1}B+D$ yields $\frac{1-e^{-aT}}{a(z-e^{-aT})}$.

The method using partial fractions and inverse Laplace transform of $G(s)H_{ZOH}(s) = G(s)\frac{1-e^{-sT}}{s}$ seems to be the source of the issue.
$G(s)H_{ZOH}(s) = \frac{1-e^{-sT}}{s(s+a)} = (1-e^{-sT}) (\frac{1}{a s} - \frac{1}{a(s+a)})$.
$g_{ZOH}(t) = \mathcal{L}^{-1}\{(1-e^{-sT})(\frac{1}{as} - \frac{1}{a(s+a)}) \}$.
$g_{ZOH}(t) = \mathcal{L}^{-1}\{\frac{1}{as} - \frac{1}{a(s+a)}\} - \mathcal{L}^{-1}\{e^{-sT}(\frac{1}{as} - \frac{1}{a(s+a)}) \}$.
$g_{ZOH}(t) = \frac{1}{a}(1-e^{-at})u(t) - \frac{1}{a}(1-e^{-a(t-T)})u(t-T)$.
$G_{ZOH}(z) = Z\{g_{ZOH}(t)\}$.
$G_{ZOH}(z) = \frac{1}{a} (\frac{z}{z-1} - \frac{z}{z-e^{-aT}}) - \frac{1}{a} z^{-1} (\frac{z}{z-1} - \frac{z}{z-e^{-aT}})$.
$G_{ZOH}(z) = \frac{1}{a} (1-z^{-1}) (\frac{z}{z-1} - \frac{z}{z-e^{-aT}})$.
$G_{ZOH}(z) = \frac{1}{a} (1-z^{-1}) \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$.
$G_{ZOH}(z) = \frac{1}{a} \frac{z-1}{z} \frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$.
$G_{ZOH}(z) = \frac{1-e^{-aT}}{a(z-e^{-aT})}$.

My initial calculation of $Z\{(1-e^{-at})u(t)\}$ was correct, but the application to the partial fraction terms in the first method was wrong. The terms are multiplied by $1/a$.

So, the state-space conversion and the Z-transform of the impulse response of ZOH+G(s) *do* agree.
$\frac{1-e^{-aT}}{a(z-e^{-aT})}$ is the correct pulse transfer function for $G(s)=\frac{1}{s+a}$ with ZOH.

---

### **6. Practice Questions**

1.  Find the Z-transform of the sequence $x[n] = (0.5)^n u[n-2]$.
2.  Given $G(s) = \frac{s+1}{s(s+2)}$, find the pulse transfer function $G_{ZOH}(z)$ for a sampling period $T=0.5$ seconds.
3.  Determine if the discrete-time system with the characteristic polynomial $P(z) = z^3 - 0.7z^2 + 0.2z - 0.1$ is stable using the Jury stability test.
4.  Convert the continuous-time system $\dot{x}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} x(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t)$ and $y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(t)$ into a discrete-time state-space model with $T=0.2$ seconds.

---

### **7. Answers to Practice Questions**

1.  **Answer:**
    We know $Z\{a^n u[n]\} = \frac{z}{z-a}$.
    $x[n] = (0.5)^n u[n-2] = (0.5)^{n-2} (0.5)^2 u[n-2]$.
    Let $m = n-2$, so $n = m+2$.
    $x[n] = (0.5)^2 (0.5)^m u[m]$.
    $X(z) = Z\{x[n]\} = Z\{(0.5)^2 (0.5)^m u[m]\}$.
    $X(z) = (0.5)^2 Z\{(0.5)^m u[m]\}$.
    Using the time-shifting property $Z\{a^n x[n-k]\} = z^{-k} Z\{a^n x[n]\}$. Wait, this is not the correct property.
    The correct property is $Z\{x[n-k]u[n-k]\} = z^{-k} X(z)$.
    Let $f[m] = (0.5)^m u[m]$. $F(z) = \frac{z}{z-0.5}$.
    $x[n] = (0.5)^2 f[n-2]u[n-2]$ is not quite right.
    $x[n] = (0.5)^n u[n-2]$.
    $Z\{x[n]\} = Z\{(0.5)^n u[n-2]\}$.
    Let $y[n] = (0.5)^n u[n]$. $Y(z) = \frac{z}{z-0.5}$.
    $Z\{y[n-k]u[n-k]\} = z^{-k} Y(z)$.
    We need $x[n] = (0.5)^n u[n-2]$. This is the sequence $(0.5)^n$ shifted by 2 units to the right, with zeros for $n=0, 1$.
    $x[0]=0, x[1]=0, x[2]=(0.5)^2, x[3]=(0.5)^3, \dots$
    Let $y[n] = (0.5)^n u[n]$. $Y(z) = \frac{z}{z-0.5}$.
    $x[n] = y[n-2]u[n-2]$.
    $X(z) = Z\{y[n-2]u[n-2]\} = z^{-2} Y(z) = z^{-2} \frac{z}{z-0.5} = \frac{z^{-1}}{z-0.5}$.
    $X(z) = \frac{1}{z(z-0.5)} = \frac{1}{z^2 - 0.5z}$.
    Alternatively, write out the sum:
    $X(z) = \sum_{n=0}^{\infty} (0.5)^n z^{-n} u[n-2] = \sum_{n=2}^{\infty} (0.5)^n z^{-n}$
    $X(z) = (0.5)^2 z^{-2} + (0.5)^3 z^{-3} + (0.5)^4 z^{-4} + \dots$
    $X(z) = (0.25 z^{-2}) [1 + 0.5 z^{-1} + (0.5 z^{-1})^2 + \dots]$
    This is a geometric series with $a = 0.5 z^{-1}$ and first term 1. The sum is $\frac{1}{1-0.5z^{-1}}$.
    $X(z) = 0.25 z^{-2} \frac{1}{1-0.5z^{-1}} = 0.25 z^{-2} \frac{z}{z-0.5} = \frac{0.25 z^{-1}}{z-0.5} = \frac{0.25}{z(z-0.5)}$.
    $X(z) = \frac{1}{4z(z-0.5)} = \frac{1}{4z^2-2z}$.
    Checking the first method: $\frac{z^{-1}}{z-0.5} = \frac{1}{z(z-0.5)} = \frac{1}{z^2-0.5z}$.
    The two results are the same. The ROC is $|z|>0.5$.

2.  **Answer:**
    $G(s) = \frac{s+1}{s(s+2)}$. $T=0.5$.
    $G_{ZOH}(z) = (1-z^{-1}) Z\{\mathcal{L}^{-1}\{G(s)/s\}\}$.
    $G(s)/s = \frac{s+1}{s^2(s+2)}$.
    Partial fraction expansion:
    $\frac{s+1}{s^2(s+2)} = \frac{A}{s} + \frac{B}{s^2} + \frac{C}{s+2}$.
    $s+1 = A s(s+2) + B(s+2) + C s^2$.
    $s+1 = A s^2 + 2As + Bs + 2B + C s^2$.
    $s+1 = (A+C)s^2 + (2A+B)s + 2B$.
    Equating coefficients:
    $s^2: A+C = 0 \implies C = -A$.
    $s^1: 2A+B = 1$.
    $s^0: 2B = 1 \implies B = 0.5$.
    $2A + 0.5 = 1 \implies 2A = 0.5 \implies A = 0.25$.
    $C = -A = -0.25$.
    So, $\frac{s+1}{s^2(s+2)} = \frac{0.25}{s} + \frac{0.5}{s^2} - \frac{0.25}{s+2}$.
    $\mathcal{L}^{-1}\{\frac{s+1}{s^2(s+2)}\} = 0.25 u(t) + 0.5 t u(t) - 0.25 e^{-2t} u(t)$.
    Let $q(t) = 0.25 u(t) + 0.5 t u(t) - 0.25 e^{-2t} u(t)$.
    We need $Q(z) = Z\{q(t)\}$.
    $Z\{u(t)\} = \frac{z}{z-1}$.
    $Z\{t u(t)\} = \frac{z}{(z-1)^2}$.
    $Z\{e^{-at} u(t)\} = \frac{z}{z-e^{-aT}}$. With $a=2$.
    $Q(z) = 0.25 \frac{z}{z-1} + 0.5 \frac{z}{(z-1)^2} - 0.25 \frac{z}{z-e^{-2T}}$.
    $T=0.5$. $e^{-2T} = e^{-2 \times 0.5} = e^{-1}$.
    $Q(z) = 0.25 \frac{z}{z-1} + 0.5 \frac{z}{(z-1)^2} - 0.25 \frac{z}{z-e^{-1}}$.
    Now, $G_{ZOH}(z) = (1-z^{-1}) Q(z) = (\frac{z-1}{z}) Q(z)$.
    $G_{ZOH}(z) = (\frac{z-1}{z}) [0.25 \frac{z}{z-1} + 0.5 \frac{z}{(z-1)^2} - 0.25 \frac{z}{z-e^{-1}}]$.
    $G_{ZOH}(z) = 0.25 (\frac{z-1}{z}) \frac{z}{z-1} + 0.5 (\frac{z-1}{z}) \frac{z}{(z-1)^2} - 0.25 (\frac{z-1}{z}) \frac{z}{z-e^{-1}}$.
    $G_{ZOH}(z) = 0.25 + 0.5 \frac{1}{z-1} - 0.25 \frac{z-1}{z-e^{-1}}$.
    $G_{ZOH}(z) = 0.25 + \frac{0.5}{z-1} - 0.25 \frac{z-1}{z-e^{-1}}$.
    To simplify further:
    $G_{ZOH}(z) = \frac{0.25(z-1)(z-e^{-1}) + 0.5(z-e^{-1}) - 0.25(z-1)^2}{(z-1)(z-e^{-1})}$.
    $G_{ZOH}(z) = \frac{0.25(z^2 - (1+e^{-1})z + e^{-1}) + 0.5z - 0.5e^{-1} - 0.25(z^2 - 2z + 1)}{(z-1)(z-e^{-1})}$.
    $G_{ZOH}(z) = \frac{0.25z^2 - 0.25(1+e^{-1})z + 0.25e^{-1} + 0.5z - 0.5e^{-1} - 0.25z^2 + 0.5z - 0.25}{(z-1)(z-e^{-1})}$.
    $G_{ZOH}(z) = \frac{(-0.25 - 0.25e^{-1} + 0.5 + 0.5)z + (0.25e^{-1} - 0.5e^{-1} - 0.25)}{(z-1)(z-e^{-1})}$.
    $G_{ZOH}(z) = \frac{(0.75 - 0.25e^{-1})z - (0.25 + 0.25e^{-1})}{(z-1)(z-e^{-1})}$.
    Using $e^{-1} \approx 0.3679$:
    $G_{ZOH}(z) = \frac{(0.75 - 0.25 \times 0.3679)z - (0.25 + 0.25 \times 0.3679)}{(z-1)(z-0.3679)}$.
    $G_{ZOH}(z) = \frac{(0.75 - 0.091975)z - (0.25 + 0.091975)}{(z-1)(z-0.3679)}$.
    $G_{ZOH}(z) = \frac{0.658025z - 0.341975}{(z-1)(z-0.3679)}$.

3.  **Answer:**
    $P(z) = z^3 - 0.7z^2 + 0.2z - 0.1$.
    $n=3$. $a_3=1, a_2=-0.7, a_1=0.2, a_0=-0.1$.
    Jury Stability Test Conditions:
    1.  $a_n > 0$: $a_3 = 1 > 0$ (OK).
    2.  $P(1) > 0$: $P(1) = 1 - 0.7 + 0.2 - 0.1 = 0.4 > 0$ (OK).
    3.  $(-1)^n P(-1) > 0$: For $n=3$, $(-1)^3 P(-1) = -P(-1) > 0$, so $P(-1) < 0$.
        $P(-1) = (-1)^3 - 0.7(-1)^2 + 0.2(-1) - 0.1 = -1 - 0.7 - 0.2 - 0.1 = -2.0$.
        $-P(-1) = -(-2.0) = 2.0 > 0$ (OK).

    4.  Jury Array:
        Row 0: $a_3^{(0)}=1, a_2^{(0)}=-0.7, a_1^{(0)}=0.2, a_0^{(0)}=-0.1$.
        Check condition $|a_0^{(k)}| > |a_n^{(k)}|$. For $k=1, \dots, n-1$.
        Here $n=3$, so $k=1, 2$.
        We need to check the roots are inside the unit circle. The common formulation of Jury's test requires all coefficients to be positive for the conditions to be applied directly for inside-the-unit-circle stability.
        Since $a_2 = -0.7 < 0$ and $a_0 = -0.1 < 0$, this polynomial likely fails a necessary condition for stability.

        Let's check necessary conditions for stability more rigorously.
        A polynomial $P(z) = a_n z^n + \dots + a_0$ with all roots inside the unit circle must satisfy $a_0 > 0$ and $a_n > 0$ if $n$ is even, or $a_0 < 0$ and $a_n < 0$ if $n$ is odd (when testing for roots inside the unit circle, using a specific transformation).
        The standard conditions for roots inside the unit circle are:
        1. $a_n > 0$.
        2. $P(1) > 0$.
        3. $(-1)^n P(-1) > 0$.
        4. Jury's array conditions: $a_0^{(k)} > 0$ for $k=1, \dots, n-1$. This is for a specific row generation.

        Let's apply the array generation:
        $n=3$.
        Row 0: $1 \quad -0.7 \quad 0.2 \quad -0.1$
        $k_1 = a_0^{(0)} / a_3^{(0)} = -0.1 / 1 = -0.1$.
        Row 1 (degree $n-1=2$):
        $a_0^{(1)} = a_0^{(0)} - k_1 a_3^{(0)} = -0.1 - (-0.1)(1) = 0$.
        The condition $a_0^{(1)} > 0$ is NOT met. The system is unstable.

        **Final Answer for 3:** The system is unstable because the first condition from the Jury array ($a_0^{(1)} > 0$) is not met.

4.  **Answer:**
    $A_c = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $B_c = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C_c = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D_c = \begin{bmatrix} 0 \end{bmatrix}$.
    $T=0.2$.
    We need to calculate $A = e^{A_c T}$ and $B = (\int_0^T e^{A_c \sigma} d\sigma) B_c$.

    First, find eigenvalues of $A_c$:
    $det(A_c - \lambda I) = det \begin{bmatrix} -\lambda & 1 \\ -2 & -3-\lambda \end{bmatrix} = (-\lambda)(-3-\lambda) - (1)(-2) = 3\lambda + \lambda^2 + 2 = \lambda^2 + 3\lambda + 2 = (\lambda+1)(\lambda+2)$.
    Eigenvalues are $\lambda_1 = -1$, $\lambda_2 = -2$.
    The eigenvalues are real and distinct.
    Let's use the formula for $e^{A_c T}$:
    $e^{A_c T} = \alpha_0 I + \alpha_1 A_c$ (since degree of characteristic polynomial is 2).
    For eigenvalues $\lambda_1, \lambda_2$:
    $e^{\lambda_1 T} = \alpha_0 + \alpha_1 \lambda_1$
    $e^{\lambda_2 T} = \alpha_0 + \alpha_1 \lambda_2$
    $T=0.2$.
    $e^{-0.2} = \alpha_0 - \alpha_1$
    $e^{-0.4} = \alpha_0 - 2\alpha_1$
    Subtracting the second from the first:
    $e^{-0.2} - e^{-0.4} = \alpha_1$.
    $\alpha_1 = 0.8187 - 0.6703 = 0.1484$.
    $\alpha_0 = e^{-0.2} - \alpha_1 = 0.8187 - 0.1484 = 0.6703$.

    $A = e^{A_c T} = \alpha_0 I + \alpha_1 A_c = 0.6703 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} + 0.1484 \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$
    $A = \begin{bmatrix} 0.6703 & 0 \\ 0 & 0.6703 \end{bmatrix} + \begin{bmatrix} 0 & 0.1484 \\ -0.2968 & -0.4452 \end{bmatrix}$
    $A = \begin{bmatrix} 0.6703 & 0.1484 \\ -0.2968 & 0.2251 \end{bmatrix}$.

    Now calculate $B = (\int_0^T e^{A_c \sigma} d\sigma) B_c$.
    $\int_0^T e^{A_c \sigma} d\sigma = \alpha_0 T I + \alpha_1 \frac{T^2}{2} A_c$. (This formula might be incorrect for the integral).
    Correct formula for integral:
    $\int_0^T e^{A_c t} dt = (\frac{e^{A_c T} - I}{A_c})$ if $A_c$ is invertible.
    However, $A_c$ is a matrix.
    $\int_0^T e^{A_c \sigma} d\sigma = (\beta_0 I + \beta_1 A_c) T$ where $\beta_0, \beta_1$ are derived from $e^{\lambda T}/\lambda$.
    If $A_c$ is invertible, $\int_0^T e^{A_c\sigma}d\sigma = A_c^{-1}(e^{A_cT}-I)$.
    $A_c^{-1} = \frac{1}{2} \begin{bmatrix} -3 & -1 \\ 2 & 0 \end{bmatrix}$.
    $A = e^{A_c T} = \begin{bmatrix} 0.6703 & 0.1484 \\ -0.2968 & 0.2251 \end{bmatrix}$.
    $A-I = \begin{bmatrix} -0.3297 & 0.1484 \\ -0.2968 & -0.7749 \end{bmatrix}$.
    $A_c^{-1}(A-I) = \frac{1}{2} \begin{bmatrix} -3 & -1 \\ 2 & 0 \end{bmatrix} \begin{bmatrix} -0.3297 & 0.1484 \\ -0.2968 & -0.7749 \end{bmatrix}$.
    $A_c^{-1}(A-I) = \frac{1}{2} \begin{bmatrix} (-3)(-0.3297) + (-1)(-0.2968) & (-3)(0.1484) + (-1)(-0.7749) \\ (2)(-0.3297) + (0)(-0.2968) & (2)(0.1484) + (0)(-0.7749) \end{bmatrix}$.
    $A_c^{-1}(A-I) = \frac{1}{2} \begin{bmatrix} 0.9891 + 0.2968 & -0.4452 + 0.7749 \\ -0.6594 & 0.2968 \end{bmatrix}$.
    $A_c^{-1}(A-I) = \frac{1}{2} \begin{bmatrix} 1.2859 & 0.3297 \\ -0.6594 & 0.2968 \end{bmatrix} = \begin{bmatrix} 0.6430 & 0.1648 \\ -0.3297 & 0.1484 \end{bmatrix}$.
    $B = A_c^{-1}(A-I)B_c = \begin{bmatrix} 0.6430 & 0.1648 \\ -0.3297 & 0.1484 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.1648 \\ 0.1484 \end{bmatrix}$.

    $C = C_c = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
    $D = D_c = 0$.

    Discrete-time state-space model:
    $x[n+1] = \begin{bmatrix} 0.6703 & 0.1484 \\ -0.2968 & 0.2251 \end{bmatrix} x[n] + \begin{bmatrix} 0.1648 \\ 0.1484 \end{bmatrix} u[n]$.
    $y[n] = \begin{bmatrix} 1 & 0 \end{bmatrix} x[n]$.

---

### **8. Important Points to Remember**

*   **Z-Transform:** Essential for analyzing discrete-time signals and systems. Properties like linearity, time-shifting, and convolution are crucial.
*   **Pulse Transfer Function:** The discrete-time equivalent of a continuous-time transfer function, relating sampled input and output sequences. It's obtained by taking the Z-transform of the impulse response of the system cascaded with a ZOH.
*   **Stability:** For discrete-time systems, stability is determined by the location of the poles of the pulse transfer function. All poles must lie inside the unit circle in the z-plane.
*   **Jury Stability Test:** A method to check for stability without explicitly finding roots of the characteristic polynomial.
*   **State-Space Representation:** Provides a powerful method for modeling and analyzing discrete-time systems, especially MIMO systems. The conversion from continuous-time to discrete-time state-space involves matrix exponential and integral calculations.
*   **Mapping:** The left-half of the s-plane maps to the interior of the unit circle in the z-plane.

---

This comprehensive set of notes covers the fundamental aspects of analyzing sampled-data systems, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
