---
title: "Analysis of discrete time LTI systems using DTFT and Z transforms"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe535"
status: "completed"
scrapedAt: "2026-05-23T17:52:41.099Z"
---
# Signals and Systems: Module 4 - Analysis of LTI Systems using Transforms

## Topic: Analysis of Discrete Time LTI Systems using DTFT and Z-Transforms

This module focuses on analyzing Discrete-Time Linear Time-Invariant (LTI) systems using two powerful tools: the Discrete-Time Fourier Transform (DTFT) and the Z-Transform. These transforms allow us to move from the time domain to a frequency-related domain, simplifying complex system analysis and revealing crucial properties.

### Learning Outcomes Addressed in this Topic:

*   **Analyze the behavior of discrete-time LTI systems in the frequency domain using the DTFT.** (Corresponds to CO3, CO4)
*   **Determine the impulse response and frequency response of discrete-time LTI systems.** (Corresponds to CO3, CO4)
*   **Understand the properties of the DTFT relevant to system analysis.** (Corresponds to CO3)
*   **Analyze the behavior of discrete-time LTI systems using the Z-transform.** (Corresponds to CO3, CO4)
*   **Determine the impulse response and frequency response of discrete-time LTI systems using the Z-transform.** (Corresponds to CO3, CO4)
*   **Understand the properties of the Z-transform and the concept of the Region of Convergence (ROC).** (Corresponds to CO3)
*   **Relate the DTFT and Z-transform for stable and causal systems.** (Corresponds to CO3, CO4)
*   **Solve difference equations representing discrete-time LTI systems using Z-transforms.** (Corresponds to CO4)
*   **Determine system stability and causality from the system's transfer function (derived from Z-transforms).** (Corresponds to CO2, CO4)

### 1. Discrete-Time Fourier Transform (DTFT)

The DTFT is a fundamental tool for analyzing the frequency content of discrete-time signals. It transforms a discrete-time sequence $x[n]$ into a continuous function of angular frequency $\omega$.

**Key Concepts and Definitions:**

*   **DTFT Definition:**
    $$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n}$$
    where $\omega$ is the angular frequency.

*   **Inverse DTFT:**
    $$x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega})e^{j\omega n} d\omega$$

*   **Frequency Response:** For a causal LTI system with impulse response $h[n]$, its frequency response $H(e^{j\omega})$ is the DTFT of $h[n]$.
    $$H(e^{j\omega}) = \sum_{n=-\infty}^{\infty} h[n]e^{-j\omega n}$$
    The frequency response characterizes how the system affects different frequency components of an input signal.

*   **Relationship to System Output:** If $x[n]$ is the input and $y[n]$ is the output of an LTI system, and their DTFTs are $X(e^{j\omega})$ and $Y(e^{j\omega})$ respectively, then:
    $$Y(e^{j\omega}) = H(e^{j\omega}) X(e^{j\omega})$$
    This multiplication in the frequency domain corresponds to convolution in the time domain: $y[n] = x[n] * h[n]$.

**DTFT Properties Relevant to System Analysis:**

| Property           | Time Domain Signal | DTFT                                     |
| :----------------- | :----------------- | :--------------------------------------- |
| Linearity          | $ax_1[n] + bx_2[n]$ | $aX_1(e^{j\omega}) + bX_2(e^{j\omega})$   |
| Time Shifting      | $x[n-n_0]$         | $e^{-j\omega n_0}X(e^{j\omega})$          |
| Frequency Shifting | $e^{j\omega_0n}x[n]$ | $X(e^{j(\omega-\omega_0)})$              |
| Differentiation in Frequency | $jn x[n]$           | $\frac{d}{d\omega}X(e^{j\omega})$        |
| Convolution        | $x_1[n] * x_2[n]$  | $X_1(e^{j\omega})X_2(e^{j\omega})$       |

**(Refer to Oppenheim & Willsky, Chapter 7 for detailed properties and proofs)**

**Example 1: DTFT of a Rectangular Pulse**

Let $x[n] = 1$ for $0 \le n \le N-1$ and $x[n] = 0$ otherwise.
$$X(e^{j\omega}) = \sum_{n=0}^{N-1} e^{-j\omega n}$$
This is a finite geometric series. The sum is:
$$X(e^{j\omega}) = \frac{1 - e^{-j\omega N}}{1 - e^{-j\omega}}$$
$$X(e^{j\omega}) = e^{-j\omega (N-1)/2} \frac{\sin(\omega N/2)}{\sin(\omega/2)}$$

**Example 2: Frequency Response of an FIR Filter**

Consider a moving average filter: $y[n] = \frac{1}{M} \sum_{k=0}^{M-1} x[n-k]$.
The impulse response is $h[n] = \frac{1}{M}$ for $0 \le n \le M-1$, and $h[n]=0$ otherwise.
The frequency response is the DTFT of $h[n]$:
$$H(e^{j\omega}) = \sum_{n=0}^{M-1} \frac{1}{M} e^{-j\omega n} = \frac{1}{M} \frac{1 - e^{-j\omega M}}{1 - e^{-j\omega}} = \frac{1}{M} e^{-j\omega (M-1)/2} \frac{\sin(\omega M/2)}{\sin(\omega/2)}$$

**Important Points to Remember about DTFT:**

*   The DTFT of a discrete-time signal is a **continuous function of frequency**.
*   The frequency is **periodic with a period of $2\pi$**. This means $X(e^{j(\omega + 2\pi)}) = X(e^{j\omega})$.
*   The DTFT is applicable to **stable and unstable signals**, as long as the sum converges.
*   For LTI systems, multiplication of DTFTs in the frequency domain corresponds to convolution in the time domain.

### 2. Z-Transform

The Z-transform is a more general tool than the DTFT, especially useful for analyzing systems with inputs that may not be absolutely summable (e.g., growing exponentials) and for handling initial conditions in difference equations.

**Key Concepts and Definitions:**

*   **Z-Transform Definition:**
    $$X(z) = \sum_{n=-\infty}^{\infty} x[n]z^{-n}$$
    where $z$ is a complex variable.

*   **Inverse Z-Transform:**
    $$x[n] = \frac{1}{2\pi j} \oint_{C} X(z)z^{n-1} dz$$
    where $C$ is a closed contour within the Region of Convergence (ROC) that encircles the origin.

*   **Region of Convergence (ROC):** The set of all values of $z$ for which the Z-transform integral converges. The ROC is crucial for determining the uniqueness of the inverse Z-transform and for system properties like stability and causality.

*   **Relationship to DTFT:** If the ROC of $X(z)$ includes the unit circle ($|z|=1$), then the DTFT $X(e^{j\omega})$ can be obtained by substituting $z = e^{j\omega}$ into $X(z)$.
    $$X(e^{j\omega}) = X(z) \Big|_{z=e^{j\omega}}$$

*   **Transfer Function:** For a causal LTI system with impulse response $h[n]$, its transfer function $H(z)$ is the Z-transform of $h[n]$.
    $$H(z) = \sum_{n=0}^{\infty} h[n]z^{-n}$$
    Assuming the impulse response is causal and absolutely summable. The transfer function is a rational function of $z$ for LCCDE systems.

*   **Relationship to System Output:** If $x[n]$ is the input and $y[n]$ is the output of an LTI system, and their Z-transforms are $X(z)$ and $Y(z)$ respectively, then:
    $$Y(z) = H(z)X(z)$$

**Z-Transform Properties Relevant to System Analysis:**

| Property           | Time Domain Signal | Z-Transform                                    |
| :----------------- | :----------------- | :--------------------------------------------- |
| Linearity          | $ax_1[n] + bx_2[n]$ | $aX_1(z) + bX_2(z)$                            |
| Time Shifting      | $x[n-n_0]$         | $z^{-n_0}X(z)$                                 |
| Multiplication by $a^n$ | $a^n x[n]$          | $X(az)$                                        |
| Differentiation in z-domain | $-nx[n]$           | $z\frac{d}{dz}X(z)$                            |
| Convolution        | $x_1[n] * x_2[n]$  | $X_1(z)X_2(z)$                                 |
| Initial Value Theorem | $x[0]$             | $\lim_{z\to\infty}X(z)$                        |
| Final Value Theorem | $\lim_{n\to\infty}x[n]$ | $\lim_{z\to 1}(z-1)X(z)$ (if system is stable) |

**(Refer to Oppenheim & Willsky, Chapter 9 for detailed properties and proofs)**

**Common Z-Transforms:**

| $x[n]$              | $X(z)$                           | ROC            |
| :------------------ | :------------------------------- | :------------- |
| $\delta[n]$         | 1                                | All $z$        |
| $\delta[n-n_0]$     | $z^{-n_0}$                       | $z \ne 0$ (if $n_0>0$) |
| $u[n]$              | $\frac{1}{1-z^{-1}} = \frac{z}{z-1}$ | $|z|>1$        |
| $a^n u[n]$          | $\frac{1}{1-az^{-1}} = \frac{z}{z-a}$ | $|z|>|a|$      |
| $-a^n u[-n-1]$      | $\frac{1}{1-az^{-1}} = \frac{z}{z-a}$ | $|z|<|a|$      |
| $nu[n]$             | $\frac{z^{-1}}{(1-z^{-1})^2} = \frac{z}{(z-1)^2}$ | $|z|>1$        |
| $a^n \cos(\omega_0 n)u[n]$ | $\frac{z(z-a\cos\omega_0)}{z^2 - 2az\cos\omega_0 + a^2}$ | $|z|>|a|$ |

**Example 3: Z-Transform of a causal Exponential**

Let $x[n] = a^n u[n]$.
$$X(z) = \sum_{n=-\infty}^{\infty} a^n u[n]z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$$
This is a geometric series that converges if $|az^{-1}| < 1$, i.e., $|z| > |a|$.
$$X(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}, \quad |z|>|a|$$

**Example 4: Z-Transform of an anticausal Exponential**

Let $x[n] = -a^n u[-n-1]$.
$$X(z) = \sum_{n=-\infty}^{\infty} -a^n u[-n-1]z^{-n} = \sum_{n=-\infty}^{-1} -a^n z^{-n}$$
Let $m = -n$. Then $m$ goes from $1$ to $\infty$.
$$X(z) = \sum_{m=1}^{\infty} -a^{-m} z^{m} = -\sum_{m=1}^{\infty} (a^{-1}z)^m$$
This geometric series converges if $|a^{-1}z| < 1$, i.e., $|z| < |a|$.
$$X(z) = -\frac{a^{-1}z}{1 - a^{-1}z} = -\frac{z}{a-z} = \frac{z}{z-a}, \quad |z|<|a|$$
**Note:** The same $X(z)$ function can correspond to different sequences depending on the ROC.

**Example 5: Transfer Function of an IIR Filter**

Consider the difference equation: $y[n] - \frac{1}{2}y[n-1] = x[n]$.
Taking the Z-transform of both sides:
$Y(z) - \frac{1}{2}z^{-1}Y(z) = X(z)$
$Y(z)(1 - \frac{1}{2}z^{-1}) = X(z)$
$$H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - \frac{1}{2}z^{-1}} = \frac{z}{z - \frac{1}{2}}$$
The ROC for a causal system with impulse response $h[n] = (\frac{1}{2})^n u[n]$ is $|z| > \frac{1}{2}$.

### 3. System Properties using Z-Transforms

The Z-transform and its ROC provide powerful insights into the properties of LTI systems.

**3.1 Stability:**

*   **Definition:** An LTI system is Bounded-Input Bounded-Output (BIBO) stable if every bounded input produces a bounded output. For an LTI system, this is equivalent to the impulse response $h[n]$ being absolutely summable: $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$.
*   **Stability and ROC:** A causal LTI system is BIBO stable if and only if the ROC of its transfer function $H(z)$ includes the **unit circle** ($|z|=1$).
*   **General Stability (Non-Causal or Mixed):** For any LTI system (causal, anticausal, or mixed), it is BIBO stable if and only if the ROC of $H(z)$ **includes the unit circle**. The ROC of $H(z)$ for a stable system is always an annulus that includes the unit circle.

**Example 6: Stability of System from Example 5**

$H(z) = \frac{z}{z - \frac{1}{2}}$. The ROC for the causal impulse response $(\frac{1}{2})^n u[n]$ is $|z| > \frac{1}{2}$. Since this ROC includes the unit circle, the system is stable.

**Example 7: Stability of a system with different ROC**

Consider $H(z) = \frac{z}{z - \frac{1}{2}}$ with ROC $|z| < \frac{1}{2}$. This ROC corresponds to the anticausal impulse response $h[n] = -(\frac{1}{2})^n u[-n-1]$. Since this ROC does not include the unit circle, the system is unstable.

**3.2 Causality:**

*   **Definition:** A system is causal if its output at any time $n$ depends only on present and past inputs, not on future inputs. Mathematically, $y[n]$ for $n > n_0$ does not depend on $x[k]$ for $k > n_0$.
*   **Causality and ROC:**
    *   A causal LTI system has an impulse response $h[n]$ that is zero for $n < 0$ ($h[n]=0, n<0$).
    *   The Z-transform of a causal sequence is formed as a sum starting from $n=0$: $X(z) = \sum_{n=0}^{\infty} x[n]z^{-n}$.
    *   The ROC of the Z-transform of a causal sequence is always the **exterior of a circle** (including infinity), i.e., $|z| > r_0$ for some $r_0$. If the sequence is absolutely summable, the ROC includes the unit circle.
    *   Conversely, if the ROC of $H(z)$ is the exterior of a circle, $|z|>r_0$, then the corresponding LTI system is causal.
    *   If the ROC is the interior of a circle, $|z|<r_0$, the system is anticausal.
    *   If the ROC is an annulus ($r_1 < |z| < r_2$), the impulse response is neither causal nor anticausal (it's a "two-sided" sequence).

**Example 8: Causality of System from Example 5**

$H(z) = \frac{z}{z - \frac{1}{2}}$. The ROC for the causal impulse response is $|z| > \frac{1}{2}$, which is the exterior of a circle. Therefore, the system is causal.

**Example 9: Causality of system with different ROC**

Consider $H(z) = \frac{z}{z - \frac{1}{2}}$ with ROC $|z| < \frac{1}{2}$. This ROC is the interior of a circle. The corresponding impulse response $h[n] = -(\frac{1}{2})^n u[-n-1]$ is zero for $n \ge 0$, meaning it only depends on future inputs (relative to the index $n$). Hence, it's anticausal.

**Summary of System Properties:**

| Property    | ROC of $H(z)$                     | Impulse Response $h[n]$                               |
| :---------- | :-------------------------------- | :---------------------------------------------------- |
| Causal      | Exterior of a circle ($|z|>r_0$)  | $h[n]=0$ for $n<0$                                    |
| Anticausal  | Interior of a circle ($|z|<r_0$)  | $h[n]=0$ for $n>0$                                    |
| Stable      | Includes the unit circle ($|z|=1$) | Absolutely summable ($\sum |h[n]| < \infty$)          |
| Causal & Stable | $|z|>r_0$ with $r_0 \le 1$        | $h[n]=0$ for $n<0$ and $\sum_{n=0}^{\infty}|h[n]| < \infty$ |

**(Refer to Haykin, Chapter 6 and Oppenheim & Willsky, Chapter 9 for detailed explanations)**

### 4. Analysis of Difference Equations using Z-Transforms

Linear Constant-Coefficient Difference Equations (LCCDEs) are common representations of discrete-time LTI systems. The Z-transform simplifies solving these equations.

**General LCCDE:**
$$ \sum_{k=0}^{N} a_k y[n-k] = \sum_{k=0}^{M} b_k x[n-k] $$

**Steps to Solve using Z-Transforms:**

1.  **Take the Z-transform of both sides:** Use linearity and time-shifting properties.
    $$ \sum_{k=0}^{N} a_k Z\{y[n-k]\} = \sum_{k=0}^{M} b_k Z\{x[n-k]\} $$
    $$ \sum_{k=0}^{N} a_k (z^{-k} Y(z) - \sum_{i=1}^{k} y[-(i)] z^{-(k-i)}) = \sum_{k=0}^{M} b_k (z^{-k} X(z) - \sum_{i=1}^{k} x[-(i)] z^{-(k-i)}) $$
    where $y[-(i)]$ and $x[-(i)]$ are initial conditions (samples of the output/input for negative time).

2.  **Isolate $Y(z)$:** Rearrange the equation to get $Y(z)$ on one side.
    $$ Y(z) \left( \sum_{k=0}^{N} a_k z^{-k} \right) = X(z) \left( \sum_{k=0}^{M} b_k z^{-k} \right) + \text{Initial Condition Terms} $$

3.  **Determine the Transfer Function $H(z)$:**
    $$ H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{\sum_{k=0}^{N} a_k z^{-k}} $$

4.  **Calculate the output $Y(z)$:**
    $$ Y(z) = H(z)X(z) + \frac{\text{Initial Condition Terms}}{A(z)} $$
    where $A(z) = \sum_{k=0}^{N} a_k z^{-k}$ is the characteristic polynomial of the system.

5.  **Find the inverse Z-transform of $Y(z)$:** Use partial fraction expansion, table lookups, and ROC analysis to find $y[n]$. The ROC of $Y(z)$ will determine the specific form of $y[n]$ (causal, anticausal, or two-sided).

**Example 10: Solving a Difference Equation with Zero Initial Conditions**

Consider the system $y[n] - \frac{1}{2}y[n-1] = x[n]$ with $y[-1]=0$ and $x[n]=u[n]$.
Taking Z-transform:
$Y(z) - \frac{1}{2}z^{-1}Y(z) = X(z)$
$Y(z)(1 - \frac{1}{2}z^{-1}) = X(z)$

Since $x[n]=u[n]$, $X(z) = \frac{z}{z-1}$ with ROC $|z|>1$.
$H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - \frac{1}{2}z^{-1}} = \frac{z}{z - \frac{1}{2}}$
The ROC for $H(z)$ from the causal impulse response is $|z| > \frac{1}{2}$.

$Y(z) = H(z)X(z) = \frac{z}{z - \frac{1}{2}} \cdot \frac{z}{z-1}$
$Y(z) = \frac{z^2}{(z - \frac{1}{2})(z-1)}$

Using partial fraction expansion for $\frac{Y(z)}{z}$:
$\frac{Y(z)}{z} = \frac{z}{(z - \frac{1}{2})(z-1)} = \frac{A}{z - \frac{1}{2}} + \frac{B}{z-1}$
$z = A(z-1) + B(z - \frac{1}{2})$
For $z=1$: $1 = B(1 - \frac{1}{2}) \Rightarrow B = 2$.
For $z=\frac{1}{2}$: $\frac{1}{2} = A(\frac{1}{2}-1) \Rightarrow \frac{1}{2} = -\frac{1}{2}A \Rightarrow A = -1$.

So, $\frac{Y(z)}{z} = \frac{-1}{z - \frac{1}{2}} + \frac{2}{z-1}$
$Y(z) = \frac{-z}{z - \frac{1}{2}} + \frac{2z}{z-1}$

To find $y[n]$, we need the ROC. Since $X(z)$ has ROC $|z|>1$ and $H(z)$ has ROC $|z| > \frac{1}{2}$, the ROC of $Y(z) = H(z)X(z)$ is the intersection, which is $|z|>1$. This ROC corresponds to causal sequences.

Using the inverse Z-transform table:
$Z^{-1}\left\{\frac{z}{z-a}\right\} = a^n u[n]$
$y[n] = -(\frac{1}{2})^n u[n] + 2(1)^n u[n] = 2u[n] - (\frac{1}{2})^n u[n]$.

**Example 11: Solving a Difference Equation with Non-Zero Initial Conditions**

Consider $y[n] - y[n-1] = x[n]$ with $y[-1]=1$, and $x[n]=u[n]$.
Taking Z-transform:
$Y(z) - z^{-1}Y(z) - y[-1]z^0 = X(z)$
$Y(z)(1 - z^{-1}) - 1 = X(z)$
$Y(z) = \frac{X(z) + 1}{1 - z^{-1}} = \frac{X(z) + 1}{z/(z-1)}$

Given $x[n]=u[n]$, $X(z) = \frac{z}{z-1}$ with ROC $|z|>1$.
$Y(z) = \frac{\frac{z}{z-1} + 1}{1 - z^{-1}} = \frac{\frac{z + z - 1}{z-1}}{\frac{z-1}{z}} = \frac{2z-1}{z-1} \cdot \frac{z}{z-1} = \frac{z(2z-1)}{(z-1)^2}$

Partial fraction expansion for $\frac{Y(z)}{z}$:
$\frac{Y(z)}{z} = \frac{2z-1}{(z-1)^2} = \frac{A}{z-1} + \frac{B}{(z-1)^2}$
$2z-1 = A(z-1) + B$
For $z=1$: $2(1)-1 = B \Rightarrow B = 1$.
Differentiating with respect to $z$: $2 = A$.
So, $\frac{Y(z)}{z} = \frac{2}{z-1} + \frac{1}{(z-1)^2}$
$Y(z) = \frac{2z}{z-1} + \frac{z}{(z-1)^2}$

We need the ROC for $Y(z)$. Since the system is described by a causal difference equation, we assume a causal impulse response $h[n] = u[n]$, so $H(z) = \frac{z}{z-1}$ with ROC $|z|>1$. The input $X(z)$ also has ROC $|z|>1$. Thus, the ROC of $Y(z)$ is $|z|>1$.

Using inverse Z-transform:
$Z^{-1}\left\{\frac{z}{z-a}\right\} = a^n u[n]$
$Z^{-1}\left\{\frac{z}{(z-a)^2}\right\} = na^n u[n]$

Therefore, $y[n] = 2(1)^n u[n] + n(1)^n u[n] = (2+n)u[n]$.

**(Refer to Anand Kumar, Chapter 9 for examples on difference equations and initial conditions)**

### Practice Questions and Exercises:

**Question 1 (DTFT):**
Find the DTFT of the sequence $x[n] = a^n u[n-1]$ for $|a|<1$.
*   **Answer:**
    $x[n] = a^n u[n-1]$
    $X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} a^n u[n-1]e^{-j\omega n}$
    $X(e^{j\omega}) = \sum_{n=1}^{\infty} (ae^{-j\omega})^n$
    This is a geometric series with first term $ae^{-j\omega}$ and common ratio $ae^{-j\omega}$.
    $X(e^{j\omega}) = \frac{ae^{-j\omega}}{1 - ae^{-j\omega}}$

**Question 2 (Z-Transform & ROC):**
Find the Z-transform and ROC for the sequence $x[n] = (\frac{1}{2})^n u[n] - (\frac{1}{3})^n u[n-1]$.
*   **Answer:**
    $X(z) = Z\{(\frac{1}{2})^n u[n]\} - Z\{(\frac{1}{3})^n u[n-1]\}$
    $Z\{(\frac{1}{2})^n u[n]\} = \frac{z}{z - \frac{1}{2}}$, ROC: $|z| > \frac{1}{2}$
    $Z\{(\frac{1}{3})^n u[n-1]\} = Z\{(\frac{1}{3})^{n-1} u[n-1] \cdot (\frac{1}{3})\} = \frac{1}{3} z^{-1} Z\{(\frac{1}{3})^n u[n]\} = \frac{1}{3} z^{-1} \frac{z}{z - \frac{1}{3}} = \frac{1}{3} \frac{1}{z - \frac{1}{3}}$
    The ROC for $(\frac{1}{3})^n u[n-1]$ is $|z| > \frac{1}{3}$.
    $X(z) = \frac{z}{z - \frac{1}{2}} - \frac{1}{3(z - \frac{1}{3})}$
    $X(z) = \frac{z(z-\frac{1}{3}) - \frac{1}{3}(z - \frac{1}{2})}{(z - \frac{1}{2})(z - \frac{1}{3})} = \frac{z^2 - \frac{1}{3}z - \frac{1}{3}z + \frac{1}{6}}{(z - \frac{1}{2})(z - \frac{1}{3})} = \frac{z^2 - \frac{2}{3}z + \frac{1}{6}}{(z - \frac{1}{2})(z - \frac{1}{3})}$
    ROC: The ROC of $X(z)$ is the intersection of the ROCs of the individual terms, which is $|z| > \max(\frac{1}{2}, \frac{1}{3}) = \frac{1}{2}$.

**Question 3 (Stability & Causality):**
Determine if the LTI system with transfer function $H(z) = \frac{z(z-0.5)}{(z-0.2)(z-0.8)}$ is stable and causal for the following ROCs:
a) $|z|>0.8$
b) $|z|<0.2$
c) $0.2 < |z| < 0.8$
*   **Answer:**
    The poles are at $z=0.2$ and $z=0.8$.
    a) **ROC $|z|>0.8$:**
        *   This ROC is the exterior of a circle, so the system is **causal**.
        *   This ROC includes the unit circle ($|z|=1$), so the system is **stable**.
    b) **ROC $|z|<0.2$:**
        *   This ROC is the interior of a circle, so the system is **anticausal**.
        *   This ROC does not include the unit circle, so the system is **unstable**.
    c) **ROC $0.2 < |z| < 0.8$:**
        *   This ROC is an annulus, so the system is **neither causal nor anticausal**.
        *   This ROC does not include the unit circle, so the system is **unstable**.

**Question 4 (Difference Equation Solution):**
Find the output $y[n]$ for the system described by $y[n] - \frac{3}{2}y[n-1] + \frac{1}{2}y[n-2] = x[n]$, with $x[n] = u[n]$ and initial conditions $y[-1]=1, y[-2]=2$.
*   **Answer:**
    Take Z-transform:
    $Y(z) - \frac{3}{2}(z^{-1}Y(z) - y[-1]) + \frac{1}{2}(z^{-2}Y(z) - y[-2] - y[-1]z^{-1}) = X(z)$
    $Y(z)(1 - \frac{3}{2}z^{-1} + \frac{1}{2}z^{-2}) - \frac{3}{2}(-1) + \frac{1}{2}(-2 - (-1)z^{-1}) = X(z)$
    $Y(z)(\frac{z^2 - \frac{3}{2}z + \frac{1}{2}}{z^2}) + \frac{3}{2} - 1 - \frac{1}{2}z^{-1} = X(z)$
    $Y(z)\frac{(z-1)(z-0.5)}{z^2} + \frac{1}{2} - \frac{1}{2}z^{-1} = \frac{z}{z-1}$
    $Y(z)\frac{(z-1)(z-0.5)}{z^2} = \frac{z}{z-1} - \frac{1}{2} + \frac{1}{2}z^{-1} = \frac{z}{z-1} - \frac{z-1}{2z}$
    $Y(z)\frac{(z-1)(z-0.5)}{z^2} = \frac{2z^2 - (z-1)^2}{2z(z-1)} = \frac{2z^2 - (z^2 - 2z + 1)}{2z(z-1)} = \frac{z^2 + 2z - 1}{2z(z-1)}$
    $Y(z) = \frac{z^2}{ (z-1)(z-0.5)} \cdot \frac{z^2 + 2z - 1}{2z(z-1)}$
    $Y(z) = \frac{z^2(z^2 + 2z - 1)}{2z(z-1)^2(z-0.5)} = \frac{z(z^2 + 2z - 1)}{2(z-1)^2(z-0.5)}$

    This requires partial fraction expansion and careful ROC analysis. The poles are at $z=1$ (multiplicity 2), $z=0.5$. Assume a causal system, so ROC is $|z|>1$.
    $\frac{Y(z)}{z} = \frac{z^2 + 2z - 1}{2(z-1)^2(z-0.5)} = \frac{A}{z-1} + \frac{B}{(z-1)^2} + \frac{C}{z-0.5}$
    Solving this yields values for A, B, and C, and then inverse transforming.

### Important Points to Remember:

*   **DTFT vs. Z-Transform:** DTFT analyzes frequency content directly, while Z-transform uses a complex frequency variable and ROC for more general analysis. For stable and causal systems, DTFT is the Z-transform evaluated on the unit circle.
*   **ROC is Key:** The Region of Convergence is paramount for uniqueness of inverse transforms and for determining system properties like stability and causality.
*   **System Analysis:** The transfer function $H(z)$ is the Z-transform of the impulse response $h[n]$. Its poles and zeros, along with the ROC, reveal system characteristics.
*   **Stability:** An LTI system is stable if and only if the ROC of its transfer function includes the unit circle.
*   **Causality:** An LTI system is causal if and only if the ROC of its transfer function is the exterior of a circle.
*   **Difference Equations:** Z-transforms convert difference equations into algebraic equations, simplifying the process of finding the system's response.

This module provides the foundational tools for understanding how discrete-time LTI systems process signals, paving the way for more advanced topics in digital signal processing and control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
