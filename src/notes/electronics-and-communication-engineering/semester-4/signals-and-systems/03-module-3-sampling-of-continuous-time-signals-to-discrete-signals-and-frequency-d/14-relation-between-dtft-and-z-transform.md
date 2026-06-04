---
title: "Relation between DTFT and Z-Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe52f"
status: "completed"
scrapedAt: "2026-05-23T17:52:37.528Z"
---
## Signals and Systems: Module 3 - Discrete Time Signals and Frequency Domain Representation

### Topic: Relation between DTFT and Z-Transform

**Course Outcomes Addressed:**
*   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3)
*   **CO4:** Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3)

**Learning Outcomes:**
*   Understand the definition of the Discrete-Time Fourier Transform (DTFT).
*   Understand the definition of the Z-Transform.
*   Derive and explain the relationship between the DTFT and the Z-Transform.
*   Identify the conditions under which the DTFT exists for a given discrete-time signal.
*   Recognize the Region of Convergence (ROC) of the Z-Transform.
*   Analyze the implications of the ROC on the existence of the DTFT.

---

### 1. Introduction to Discrete-Time Fourier Transform (DTFT)

The DTFT is a fundamental tool for analyzing discrete-time signals in the frequency domain. It provides a representation of the signal's spectral content.

**Definition:**
For a discrete-time signal $x[n]$, its DTFT, denoted by $X(e^{j\omega})$, is defined as:

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$$

where:
*   $x[n]$ is the discrete-time signal.
*   $\omega$ is the angular frequency, ranging from $-\pi$ to $\pi$ (or $0$ to $2\pi$) due to the periodicity of discrete-time signals.
*   $e^{-j\omega n}$ is a complex exponential, representing a phasor rotating at frequency $\omega$.

**Key Characteristics:**
*   The DTFT is a **periodic function of $\omega$ with period $2\pi$**. This is because $e^{-j\omega n} = e^{-j(\omega + 2\pi)n}$.
*   It represents the **frequency content** of the signal.
*   The DTFT exists if the signal $x[n]$ is **absolutely summable**, i.e., $\sum_{n=-\infty}^{\infty} |x[n]| < \infty$. This is a sufficient but not necessary condition.

**Example:**
Let $x[n] = a^n u[n]$, where $|a| < 1$ and $u[n]$ is the unit step function.
$$X(e^{j\omega}) = \sum_{n=0}^{\infty} a^n e^{-j\omega n} = \sum_{n=0}^{\infty} (ae^{-j\omega})^n$$
This is a geometric series that converges if $|ae^{-j\omega}| < 1$, which is equivalent to $|a| < 1$.
$$X(e^{j\omega}) = \frac{1}{1 - ae^{-j\omega}}$$

**Reference (Oppenheim & Willsky):** Chapter 10 (Fourier Series and Fourier Transform for Discrete-Time Signals). The DTFT is introduced as a generalization of the Fourier Series for non-periodic discrete-time signals.

---

### 2. Introduction to Z-Transform

The Z-transform is a more general tool for analyzing discrete-time signals and systems. It extends the concept of the DTFT by introducing a complex variable $z$.

**Definition:**
For a discrete-time signal $x[n]$, its Z-transform, denoted by $X(z)$, is defined as:

$$X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$$

where:
*   $x[n]$ is the discrete-time signal.
*   $z$ is a complex variable, $z = re^{j\omega}$.

**Key Characteristics:**
*   The Z-transform is a **function of a complex variable $z$**.
*   It allows for a more comprehensive analysis of signals and systems, particularly in terms of stability and causality.
*   The Z-transform may not exist for all values of $z$. The set of values of $z$ for which the Z-transform converges is called the **Region of Convergence (ROC)**.

**Region of Convergence (ROC):**
The ROC is the set of values of $z$ for which the Z-transform converges. For the Z-transform to converge, the sum must be finite.

Consider $z = re^{j\omega}$.
$$X(z) = \sum_{n=-\infty}^{\infty} x[n] (re^{j\omega})^{-n} = \sum_{n=-\infty}^{\infty} x[n] r^{-n} e^{-j\omega n}$$
For convergence, we need:
$$\sum_{n=-\infty}^{\infty} |x[n] r^{-n} e^{-j\omega n}| < \infty$$
$$\sum_{n=-\infty}^{\infty} |x[n]| r^{-n} < \infty$$

The ROC is typically an annulus (a ring-shaped region) in the complex z-plane.

**Example:**
Let $x[n] = a^n u[n]$.
$$X(z) = \sum_{n=0}^{\infty} a^n z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$$
This is a geometric series that converges if $|az^{-1}| < 1$, which means $|z| > |a|$.
The ROC is $|z| > |a|$.

**Reference (Haykin):** Chapter 10 (The z-Transform). Haykin provides a detailed explanation of the Z-transform, including its properties and the concept of the ROC.

---

### 3. The Relationship between DTFT and Z-Transform

The DTFT can be viewed as a special case of the Z-transform evaluated on the unit circle in the complex z-plane.

**Derivation:**
Start with the Z-transform definition:
$$X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$$

Substitute $z = e^{j\omega}$ into the Z-transform:
$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] (e^{j\omega})^{-n} = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$$

This is precisely the definition of the DTFT, $X(e^{j\omega})$.

**The Crucial Link: The Unit Circle and the ROC**

The existence of the DTFT is directly related to the ROC of the Z-transform.

*   **The DTFT $X(e^{j\omega})$ exists if and only if the unit circle ($|z| = 1$) is included in the Region of Convergence (ROC) of the Z-transform $X(z)$.**

**Why?**
When we evaluate $z = e^{j\omega}$, we are setting the magnitude of $z$ to $|e^{j\omega}| = 1$. This means the DTFT is the Z-transform evaluated on the **unit circle**.

*   If the ROC of $X(z)$ includes the unit circle (i.e., the unit circle is part of the ROC), then the sum for the Z-transform converges when $|z|=1$, which means the DTFT converges.
*   If the ROC does not include the unit circle, the Z-transform sum diverges when $|z|=1$, and therefore the DTFT does not exist.

**Case 1: ROC includes the unit circle**
If the ROC includes the unit circle, the DTFT exists.

**Example:**
For $x[n] = a^n u[n]$ with $|a| < 1$:
$X(z) = \frac{1}{1 - az^{-1}}$, ROC is $|z| > |a|$.
Since $|a| < 1$, the ROC $|z| > |a|$ **includes the unit circle** ($|z|=1$).
Therefore, the DTFT exists and is given by:
$X(e^{j\omega}) = \frac{1}{1 - ae^{-j\omega}}$, which matches our earlier result.

**Case 2: ROC does not include the unit circle**
If the ROC does not include the unit circle, the DTFT does not exist.

**Example:**
For $x[n] = a^n u[n]$ with $|a| > 1$:
$X(z) = \sum_{n=0}^{\infty} (az^{-1})^n$. This converges if $|az^{-1}| < 1 \Rightarrow |z| < |a|$.
The ROC is $|z| < |a|$.
Since $|a| > 1$, the ROC $|z| < |a|$ **does not include the unit circle** ($|z|=1$).
Therefore, the DTFT of $x[n] = a^n u[n]$ for $|a| > 1$ does not exist. This is because the signal $x[n]$ grows unboundedly for $n \ge 0$.

**Example with two-sided sequence:**
Consider $x[n] = a^n u[n]$ for $a > 0$.
*   If $a < 1$, ROC is $|z| > a$, which includes the unit circle. DTFT exists.
*   If $a > 1$, ROC is $|z| < a$, which does not include the unit circle. DTFT does not exist.

Consider $x[n] = -b^n u[-n-1]$ for $b > 0$.
$X(z) = -\sum_{n=-\infty}^{-1} b^n z^{-n} = -\sum_{m=1}^{\infty} b^{-m} z^{m}$ (letting $m = -n$).
$X(z) = -\sum_{m=1}^{\infty} (bz^{-1})^m = -( \sum_{m=0}^{\infty} (bz^{-1})^m - 1 ) = -(\frac{1}{1 - bz^{-1}} - 1) = \frac{bz^{-1}}{1 - bz^{-1}} = \frac{b}{z-b}$.
This converges if $|bz^{-1}| < 1 \Rightarrow |z| > b$.
ROC is $|z| > b$.

Now consider the sum of these two sequences: $y[n] = a^n u[n] - b^n u[-n-1]$.
$Y(z) = \frac{1}{1-az^{-1}} - \frac{b}{z-b} = \frac{z}{z-a} - \frac{b}{z-b}$.
The ROC for $a^n u[n]$ is $|z| > |a|$.
The ROC for $-b^n u[-n-1]$ is $|z| > |b|$.
The ROC for the sum $Y(z)$ is the intersection of the ROCs: $|z| > \max(|a|, |b|)$.

*   **If $|z| > \max(|a|, |b|)$ includes the unit circle (i.e., $\max(|a|, |b|) < 1$), then the DTFT of $y[n]$ exists.**
*   **If $\max(|a|, |b|) \ge 1$, then the unit circle is not in the ROC, and the DTFT does not exist.**

**Reference (Lathi):** Chapter 9 (The Z-Transform). Lathi emphasizes the ROC's role in determining the existence of the DTFT. He also discusses how different ROCs for the same $X(z)$ correspond to different time-domain signals.

---

### 4. Important Points to Remember

*   **DTFT:** Frequency domain representation of discrete-time signals, periodic in $\omega$ with period $2\pi$.
*   **Z-Transform:** A more general transform using a complex variable $z$.
*   **Relationship:** DTFT is the Z-transform evaluated on the unit circle ($z = e^{j\omega}$).
*   **Existence of DTFT:** The DTFT exists if and only if the unit circle ($|z|=1$) is within the Region of Convergence (ROC) of the Z-transform.
*   **ROC:** The set of $z$ values for which the Z-transform converges.
*   **Signal Properties and ROC:**
    *   **Causality:** For a causal signal $x[n]$, the ROC is typically outside a circle $|z| > r_0$.
    *   **Anti-causality:** For an anti-causal signal $x[n]$, the ROC is typically inside a circle $|z| < r_0$.
    *   **Finite Duration:** For finite duration signals, the ROC is the entire z-plane except possibly $z=0$ or $z=\infty$.
    *   **Absolutely Summable Signals:** If $\sum |x[n]| < \infty$, the ROC of the Z-transform is the entire z-plane except possibly $z=0$ or $z=\infty$. This guarantees the existence of the DTFT.
*   **DTFT vs. Fourier Transform:** The DTFT deals with discrete-time signals and has a frequency variable $\omega$ that is continuous and periodic. The Fourier Transform deals with continuous-time signals and has a frequency variable $\Omega$ that is continuous and aperiodic.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the discrete-time signal $x[n] = (0.5)^n u[n]$.
a) Find the Z-transform $X(z)$ and its ROC.
b) Determine if the DTFT $X(e^{j\omega})$ exists for this signal. If it exists, find its expression.

**Answer 1:**
a) $X(z) = \sum_{n=0}^{\infty} (0.5)^n z^{-n} = \sum_{n=0}^{\infty} (0.5z^{-1})^n$. This is a geometric series that converges if $|0.5z^{-1}| < 1$, which implies $|z| > 0.5$.
So, $X(z) = \frac{1}{1 - 0.5z^{-1}} = \frac{z}{z - 0.5}$, with ROC $|z| > 0.5$.

b) The ROC is $|z| > 0.5$. Since this ROC **includes the unit circle** ($|z|=1$, as $1 > 0.5$), the DTFT exists.
To find the DTFT, substitute $z = e^{j\omega}$ into $X(z)$:
$X(e^{j\omega}) = \frac{1}{1 - 0.5e^{-j\omega}}$.

---

**Question 2:**
Consider the discrete-time signal $x[n] = -(0.5)^n u[-n-1]$.
a) Find the Z-transform $X(z)$ and its ROC.
b) Determine if the DTFT $X(e^{j\omega})$ exists for this signal.

**Answer 2:**
a) $x[n] = -(0.5)^n u[-n-1]$. Let $m = -n-1$. Then $n = -m-1$. When $n=-1, m=0$. When $n \to -\infty, m \to \infty$.
$x[n] = -(0.5)^{-m-1} u[m] = -(0.5)^{-1} (0.5)^{-m} u[m] = -2 (0.5)^{-m} u[m]$.
$X(z) = \sum_{n=-\infty}^{-1} -(0.5)^n z^{-n} = -\sum_{n=-\infty}^{-1} (0.5)^n z^{-n}$.
Let $k = -n$. When $n=-1, k=1$. When $n \to -\infty, k \to \infty$.
$X(z) = -\sum_{k=1}^{\infty} (0.5)^{-k} z^{k} = -\sum_{k=1}^{\infty} (2z)^k$.
This is a geometric series that converges if $|2z| < 1$, which implies $|z| < 0.5$.
$X(z) = - \left( \sum_{k=0}^{\infty} (2z)^k - 1 \right) = - \left( \frac{1}{1 - 2z} - 1 \right) = - \left( \frac{1 - (1 - 2z)}{1 - 2z} \right) = - \frac{2z}{1 - 2z} = \frac{2z}{2z - 1}$.
The ROC is $|z| < 0.5$.

b) The ROC is $|z| < 0.5$. Since this ROC **does not include the unit circle** ($|z|=1$), the DTFT $X(e^{j\omega})$ **does not exist** for this signal. This is expected as the signal grows unboundedly for negative $n$.

---

**Question 3:**
Let $x[n] = \delta[n] + \delta[n-1]$.
a) Find the Z-transform $X(z)$ and its ROC.
b) Determine if the DTFT $X(e^{j\omega})$ exists for this signal. If it exists, find its expression.

**Answer 3:**
a) $X(z) = \sum_{n=-\infty}^{\infty} (\delta[n] + \delta[n-1]) z^{-n}$
$X(z) = \sum_{n=-\infty}^{\infty} \delta[n] z^{-n} + \sum_{n=-\infty}^{\infty} \delta[n-1] z^{-n}$
The first sum is $1$. For the second sum, let $m = n-1$, so $n=m+1$.
$\sum_{m=-\infty}^{\infty} \delta[m] z^{-(m+1)} = z^{-1} \sum_{m=-\infty}^{\infty} \delta[m] z^{-m} = z^{-1}(1) = z^{-1}$.
So, $X(z) = 1 + z^{-1}$. The ROC is the entire z-plane except $z=0$ (due to $z^{-1}$ term), so the ROC is all $z \neq 0$.

b) The ROC is all $z \neq 0$. This ROC **includes the unit circle** ($|z|=1$, as $1 \neq 0$). Therefore, the DTFT exists.
To find the DTFT, substitute $z = e^{j\omega}$:
$X(e^{j\omega}) = 1 + (e^{j\omega})^{-1} = 1 + e^{-j\omega}$.
This can also be written using Euler's formula: $1 + \cos(\omega) - j\sin(\omega)$.

---

**Question 4 (Conceptual):**
Explain why the absolute summability of a discrete-time signal $x[n]$ ($\sum_{n=-\infty}^{\infty} |x[n]| < \infty$) is a sufficient condition for the existence of its DTFT.

**Answer 4:**
If $\sum_{n=-\infty}^{\infty} |x[n]| < \infty$, then for the DTFT definition:
$|X(e^{j\omega})| = |\sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}| \le \sum_{n=-\infty}^{\infty} |x[n] e^{-j\omega n}| = \sum_{n=-\infty}^{\infty} |x[n]| |e^{-j\omega n}|$
Since $|e^{-j\omega n}| = 1$, we have:
$|X(e^{j\omega})| \le \sum_{n=-\infty}^{\infty} |x[n]|$.
As the right-hand side is a finite constant (by assumption), $|X(e^{j\omega})|$ is bounded for all $\omega$. A bounded frequency-domain representation implies the existence of the DTFT.

---

This concludes the notes on the relation between the DTFT and Z-Transform. Understanding this relationship is crucial for grasping the power of the Z-transform in analyzing discrete-time signals and systems, especially when considering the frequency domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
