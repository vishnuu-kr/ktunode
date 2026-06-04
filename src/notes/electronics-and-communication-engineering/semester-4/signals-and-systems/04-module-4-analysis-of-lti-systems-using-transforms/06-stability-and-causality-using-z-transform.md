---
title: "Stability and causality using Z transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe536"
status: "completed"
scrapedAt: "2026-05-23T17:52:41.807Z"
---
# Module 4: Analysis of LTI Systems using Transforms - Stability and Causality using Z-Transform

## 1. Introduction to LTI Systems and Z-Transform

Linear Time-Invariant (LTI) systems are fundamental in signal processing and are characterized by their linearity and time-invariance properties. The Z-transform is a powerful mathematical tool used to analyze discrete-time signals and systems. It transforms a discrete-time sequence into a rational function in a complex variable 'z'. This transformation simplifies the analysis of LTI systems, especially when dealing with difference equations, convolution, and system properties like stability and causality.

**Key Concepts:**

*   **Discrete-Time Signal:** A sequence of numbers, $x[n]$, where 'n' represents discrete time instances.
*   **LTI System:** A system that satisfies superposition (linearity) and time-invariance.
*   **Z-Transform:** For a discrete-time signal $x[n]$, its Z-transform is defined as:
    $X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$
    where 'z' is a complex variable.

**Reference:** Oppenheim & Willsky, Chapter 10 (Z-Transform Property).

## 2. Causality and its Z-Transform Representation

A causal system is one whose output at any time depends only on present and past inputs. For a discrete-time system, this means the output $y[n]$ depends only on $x[n], x[n-1], x[n-2], \dots$.

**Key Concepts:**

*   **Causality:** The system's impulse response $h[n]$ is zero for all negative time indices, i.e., $h[n] = 0$ for $n < 0$.

**Z-Transform Representation of Causality:**

For a causal LTI system, its impulse response $h[n]$ is zero for $n < 0$. Therefore, the Z-transform of the impulse response becomes:
$H(z) = \sum_{n=0}^{\infty} h[n] z^{-n}$

This implies that the impulse response of a causal system is a causal sequence.

**Connection to ROC:**

The Region of Convergence (ROC) of the Z-transform of a causal system's impulse response $H(z)$ will extend from some value outwards, including the outside of a circle, potentially to infinity. Specifically, if $h[n]$ is causal, the ROC will include the region $|z| > r$ for some $r \ge 0$.

**Example:**

Consider a causal system with impulse response $h[n] = a^n u[n]$, where $u[n]$ is the unit step function.
The Z-transform is $H(z) = \sum_{n=0}^{\infty} a^n z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$.
This is a geometric series that converges if $|az^{-1}| < 1$, i.e., $|z| > |a|$.
The ROC is $|z| > |a|$, which is the exterior of a circle, indicating causality.

**Course Outcome Alignment:** CO2 (Determine stability and causality of LTI systems), CO4 (Interpret the use of various transforms to analyze LTI systems).

## 3. Stability and its Z-Transform Representation

A stable system is one where a bounded input produces a bounded output (BIBO stability). For LTI systems, BIBO stability is directly related to the properties of the system's impulse response.

**Key Concepts:**

*   **BIBO Stability:** An LTI system is BIBO stable if its impulse response $h[n]$ is absolutely summable, i.e., $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$.

**Z-Transform Representation of Stability:**

For an LTI system to be BIBO stable, the ROC of its Z-transform $H(z)$ must contain the unit circle, i.e., $|z|=1$.

**Explanation:**

If the ROC of $H(z)$ contains the unit circle, it means that $\sum_{n=-\infty}^{\infty} |h[n]|$ converges. This is because the Z-transform is essentially a Laurent series, and the convergence of the series on the unit circle implies the absolute summability of the impulse response coefficients.

**Relationship between Causality and Stability:**

*   **Causal systems:** For a causal system $h[n] = 0$ for $n<0$. If it is also stable, its ROC is $|z| > r$, where $r \le 1$. This means the ROC must include the unit circle.
*   **Non-causal systems:** For a non-causal system, $h[n]$ can be non-zero for $n < 0$. Stability requires the ROC to contain the unit circle, regardless of whether it's causal or not.

**Example:**

Consider a system with $H(z) = \frac{1}{1 - az^{-1}}$.

*   **Case 1: Causal system ($h[n] = a^n u[n]$)**
    ROC is $|z| > |a|$.
    For stability, $|z| > |a|$ must contain the unit circle. This happens when $|a| < 1$.
    If $|a| < 1$, the system is causal and stable.

*   **Case 2: Non-causal system ($h[n] = -a^n u[-n-1]$)**
    ROC is $|z| < |a|$.
    For stability, $|z| < |a|$ must contain the unit circle. This happens when $|a| > 1$.
    If $|a| > 1$, the system is non-causal and stable.

**Reference:** Haykin, Chapter 7 (Z-Transform), Anand Kumar, Chapter 4 (Z-Transform).

## 4. Pole-Zero Plots and Stability/Causality

The Z-transform $H(z)$ of an LTI system is often represented in terms of its poles and zeros. Poles are the values of $z$ where $H(z)$ goes to infinity, and zeros are the values of $z$ where $H(z)$ goes to zero. The location of poles and zeros in the complex z-plane provides crucial information about the system's stability and causality.

**Key Concepts:**

*   **Poles:** Roots of the denominator polynomial of $H(z)$.
*   **Zeros:** Roots of the numerator polynomial of $H(z)$.
*   **Unit Circle:** The circle in the complex z-plane with radius 1, centered at the origin.

**Conditions for Causality and Stability using Pole-Zero Plots:**

1.  **Causality:**
    *   For a rational Z-transform $H(z) = \frac{N(z)}{D(z)}$, the system is causal if and only if the ROC is the exterior of a circle or the entire z-plane.
    *   **Crucial Observation:** If $H(z)$ is a rational function, the system is causal if and only if all poles are inside the ROC. If the ROC is $|z| > r_{max}$, where $r_{max}$ is the largest magnitude of any pole, then all poles are inside the ROC. This means that the ROC extends outwards from the outermost pole.

2.  **Stability:**
    *   The system is BIBO stable if and only if the ROC of $H(z)$ contains the unit circle ($|z|=1$).
    *   **Crucial Observation:** For a causal system, stability is guaranteed if and only if all its poles lie inside or on the unit circle. That is, for all poles $p_i$, $|p_i| \le 1$.
    *   **Strict Stability:** If all poles lie strictly inside the unit circle ($|p_i| < 1$), the system is strictly stable.

**Examples:**

*   **System 1:** $H(z) = \frac{1}{1 - 0.5z^{-1}}$. Pole at $z=0.5$.
    *   If ROC is $|z| > 0.5$ (causal), pole is inside the ROC. Since $|0.5| < 1$, the unit circle is contained in the ROC. **Causal and Stable.**
    *   If ROC is $|z| < 0.5$ (non-causal), pole is outside the ROC. ROC does not contain the unit circle. **Non-causal and Unstable.**

*   **System 2:** $H(z) = \frac{z^{-1}}{1 - 2z^{-1}}$. Pole at $z=2$.
    *   If ROC is $|z| > 2$ (causal), pole is inside the ROC. Since $|2| > 1$, the unit circle is *not* contained in the ROC. **Causal and Unstable.**
    *   If ROC is $|z| < 2$ (non-causal), pole is outside the ROC. ROC contains the unit circle. **Non-causal and Stable.**

*   **System 3:** $H(z) = \frac{1}{1 - z^{-1}}$. Pole at $z=1$.
    *   If ROC is $|z| > 1$ (causal), pole is inside the ROC. Since $|1| = 1$, the unit circle is *not* strictly contained in the ROC. **Causal and marginally stable (or unstable depending on definition).**
    *   If ROC is $|z| < 1$ (non-causal), pole is outside the ROC. ROC contains the unit circle. **Non-causal and stable.**

**Reference:** Lathi, Chapter 5 (Z-Transform Properties), Ziemer, Chapter 4 (Z-Transform).

## 5. Combined Conditions for Causality and Stability

The Z-transform provides a direct link between the properties of an LTI system and the location of its poles and the extent of its ROC.

**Summary of Conditions:**

| Property    | Condition on Impulse Response $h[n]$ | Condition on ROC of $H(z)$                                      | Condition on Pole Locations                                         |
| :---------- | :----------------------------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Causality** | $h[n] = 0$ for $n < 0$               | ROC is of the form $|z| > r$ or the entire z-plane.             | For rational $H(z)$, ROC must extend from $|z| = r_{max}$ outwards. |
| **Stability** | $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ | ROC must contain the unit circle ($|z|=1$).                   | For causal systems: All poles must be inside or on the unit circle ($|p_i| \le 1$). |

**Important Combinations:**

*   **Causal and Stable:**
    *   $h[n] = 0$ for $n < 0$ AND $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$.
    *   ROC is of the form $|z| > r$, where $r \le 1$.
    *   All poles are inside or on the unit circle ($|p_i| \le 1$), and the ROC extends outwards from the outermost pole.

*   **Causal and Unstable:**
    *   $h[n] = 0$ for $n < 0$ AND $\sum_{n=-\infty}^{\infty} |h[n]| = \infty$.
    *   ROC is of the form $|z| > r$, where $r > 1$.
    *   At least one pole is outside the unit circle ($|p_i| > 1$).

*   **Non-Causal and Stable:**
    *   $h[n]$ can be non-zero for $n < 0$ AND $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$.
    *   ROC contains the unit circle, but is not necessarily of the form $|z| > r$. For example, an annulus region.
    *   All poles are inside or on the unit circle ($|p_i| \le 1$), but the ROC might be an annulus.

*   **Non-Causal and Unstable:**
    *   $h[n]$ can be non-zero for $n < 0$ AND $\sum_{n=-\infty}^{\infty} |h[n]| = \infty$.
    *   ROC does not contain the unit circle.
    *   At least one pole is outside the unit circle ($|p_i| > 1$).

**Reference:** Apte, Chapter 5 (Z-Transform).

## 6. Practice Questions and Exercises

**Question 1:**
Determine if the LTI system with the following impulse response is causal and stable. Justify your answer using the Z-transform.
$h[n] = (0.8)^n u[n]$

**Answer 1:**
The Z-transform of $h[n] = (0.8)^n u[n]$ is $H(z) = \frac{1}{1 - 0.8z^{-1}}$.
The ROC is $|z| > 0.8$.
*   **Causality:** Since $h[n] = 0$ for $n < 0$, the system is causal. The ROC is of the form $|z| > r$, confirming causality.
*   **Stability:** The pole is at $z = 0.8$. Since $|0.8| < 1$, the unit circle ($|z|=1$) is contained within the ROC $|z| > 0.8$. Therefore, the system is stable.
    The system is **causal and stable**.

**Question 2:**
An LTI system has the impulse response $h[n] = (-0.5)^n u[n] + (2)^n u[-n-1]$.
(a) Find the Z-transform $H(z)$.
(b) Determine the possible ROCs for $H(z)$.
(c) For each possible ROC, determine if the system is causal and stable.

**Answer 2:**
The impulse response is a sum of two terms:
$h_1[n] = (0.5)^n u[n]$ and $h_2[n] = (2)^n u[-n-1]$.

(a) Z-transform:
$H_1(z) = \frac{1}{1 - 0.5z^{-1}}$, with ROC$_1$: $|z| > 0.5$.
$H_2(z) = \frac{1}{1 - 2z^{-1}}$, with ROC$_2$: $|z| < 2$.

Since $h[n] = h_1[n] + h_2[n]$, the Z-transform is $H(z) = H_1(z) + H_2(z)$.
$H(z) = \frac{1}{1 - 0.5z^{-1}} + \frac{1}{1 - 2z^{-1}}$
$H(z) = \frac{(1 - 2z^{-1}) + (1 - 0.5z^{-1})}{(1 - 0.5z^{-1})(1 - 2z^{-1})}$
$H(z) = \frac{2 - 2.5z^{-1}}{1 - 2.5z^{-1} + z^{-2}}$

(b) Possible ROCs:
The ROC of $H(z)$ is the intersection of ROC$_1$ and ROC$_2$.
ROC = ROC$_1 \cap$ ROC$_2$ = $\{z : |z| > 0.5\} \cap \{z : |z| < 2\}$
Therefore, the ROC is $0.5 < |z| < 2$.

(c) Causality and Stability for the ROC $0.5 < |z| < 2$:
*   **Causality:** The ROC is an annulus ($0.5 < |z| < 2$). For a rational Z-transform, a causal system requires the ROC to be of the form $|z| > r$. Since the ROC is not of this form, the system is **not causal**. The impulse response $h_2[n] = (2)^n u[-n-1]$ is non-zero for $n < 0$, confirming non-causality.
*   **Stability:** The ROC is $0.5 < |z| < 2$. This ROC contains the unit circle ($|z|=1$). Therefore, the system is **stable**.

The system with ROC $0.5 < |z| < 2$ is **non-causal and stable**.

**Question 3:**
Consider an LTI system with the transfer function $H(z) = \frac{z-0.5}{z-2}$.
Determine the causality and stability of the system for the following ROCs:
(a) $|z| > 2$
(b) $|z| < 2$

**Answer 3:**
The transfer function is $H(z) = \frac{z(1-0.5z^{-1})}{z(1-2z^{-1})} = \frac{1-0.5z^{-1}}{1-2z^{-1}}$.
The pole is at $z=2$. The zero is at $z=0.5$.

(a) ROC: $|z| > 2$
*   **Causality:** The ROC is of the form $|z| > r$. This implies the impulse response is causal.
*   **Stability:** The ROC is $|z| > 2$. This ROC does *not* contain the unit circle ($|z|=1$). Therefore, the system is **unstable**.
    System is **causal and unstable**.

(b) ROC: $|z| < 2$
*   **Causality:** The ROC is of the form $|z| < r$. This implies the impulse response is non-causal. The impulse response is $h[n] = -0.5^n u[n] + 2^n u[-n-1]$. The term $2^n u[-n-1]$ is non-zero for $n < 0$, making the system non-causal.
*   **Stability:** The ROC is $|z| < 2$. This ROC *does* contain the unit circle ($|z|=1$). Therefore, the system is **stable**.
    System is **non-causal and stable**.

## 7. Important Points to Remember

*   **Causality:** $h[n] = 0$ for $n < 0$. In Z-transform domain, for rational $H(z)$, this means the ROC is the exterior of a circle (or the entire z-plane).
*   **Stability:** $\sum |h[n]| < \infty$. In Z-transform domain, this means the ROC must contain the unit circle.
*   **Pole Location:** For causal systems, stability is achieved if all poles are inside or on the unit circle ($|p_i| \le 1$).
*   **ROC Uniqueness:** For a given $H(z)$, the ROC is unique. However, a given ROC might correspond to different impulse responses. The causality or non-causality of the system dictates the form of the ROC.
*   **Causal ROC Property:** If a system is causal, its ROC must be of the form $|z| > r$.
*   **Stable ROC Property:** If a system is stable, its ROC must contain the unit circle.

## 8. Conclusion

The Z-transform, along with the concept of the Region of Convergence (ROC), provides a powerful and systematic way to determine the causality and stability of discrete-time LTI systems. By examining the location of poles and the extent of the ROC relative to the unit circle, we can readily classify system behavior. This understanding is crucial for designing and analyzing signal processing systems.

This module's learning outcomes are addressed by understanding these fundamental relationships:
*   **CO1:** (Knowledge Level: K2) Basic understanding of discrete-time signals and systems is prerequisite for Z-transform analysis.
*   **CO2:** (Knowledge Level: K3) Directly addressed by understanding how causality ($h[n]=0$ for $n<0$) and stability ($\sum|h[n]|<\infty$) translate to ROC properties and pole locations.
*   **CO3:** (Knowledge Level: K3) Analyzing signals in the frequency domain using Z-transform properties (including ROC) is key to understanding system behavior.
*   **CO4:** (Knowledge Level: K3) This module explicitly demonstrates how the Z-transform and its properties are used to analyze discrete-time LTI systems regarding their causality and stability.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
