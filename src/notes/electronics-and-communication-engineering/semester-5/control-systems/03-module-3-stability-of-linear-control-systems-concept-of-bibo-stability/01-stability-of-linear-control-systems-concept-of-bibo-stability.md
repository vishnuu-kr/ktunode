---
title: "Stability of linear control systems : Concept of BIBO stability"
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe956"
status: "completed"
scrapedAt: "2026-05-23T17:54:41.742Z"
---
# Module 3: Stability of Linear Control Systems - Concept of BIBO Stability

## Introduction to Stability

Stability is a fundamental concept in control systems engineering. A stable system is one that, when subjected to a bounded input, produces a bounded output. Conversely, an unstable system, when subjected to a bounded input, can produce an unbounded output, potentially leading to system failure or undesirable behavior. Understanding and ensuring stability is crucial for the reliable and safe operation of any control system.

This module focuses on **Bounded-Input, Bounded-Output (BIBO) stability**, a common and practical criterion for assessing the stability of linear time-invariant (LTI) systems.

## 1. What is BIBO Stability?

### Definition of BIBO Stability:

A linear time-invariant (LTI) system is said to be **BIBO stable** if and only if for every bounded input signal, the output signal is also bounded.

*   **Bounded Input:** A signal $r(t)$ is bounded if there exists a finite constant $M_r > 0$ such that $|r(t)| \le M_r$ for all time $t$.
*   **Bounded Output:** A signal $y(t)$ is bounded if there exists a finite constant $M_y > 0$ such that $|y(t)| \le M_y$ for all time $t$.

**In simpler terms:** If you put a reasonable, finite signal into a BIBO stable system, you'll get a reasonable, finite signal out. If the system is not BIBO stable, even a small, finite input could cause the output to grow infinitely large.

### Mathematical Representation of BIBO Stability:

For an LTI system described by its impulse response $h(t)$, BIBO stability is directly related to the absolute integrability of the impulse response.

**Condition for BIBO Stability:** An LTI system is BIBO stable if and only if its impulse response $h(t)$ is absolutely integrable, meaning:

$$ \int_{-\infty}^{\infty} |h(t)| dt < \infty $$

**Explanation:**
The output $y(t)$ of an LTI system with input $r(t)$ and impulse response $h(t)$ is given by the convolution integral:
$$ y(t) = r(t) * h(t) = \int_{-\infty}^{\infty} h(\tau) r(t-\tau) d\tau $$

If the input $r(t)$ is bounded, i.e., $|r(t)| \le M_r$ for all $t$, then:
$$ |y(t)| = \left| \int_{-\infty}^{\infty} h(\tau) r(t-\tau) d\tau \right| $$
$$ |y(t)| \le \int_{-\infty}^{\infty} |h(\tau)| |r(t-\tau)| d\tau $$
$$ |y(t)| \le \int_{-\infty}^{\infty} |h(\tau)| M_r d\tau $$
$$ |y(t)| \le M_r \int_{-\infty}^{\infty} |h(\tau)| d\tau $$

For the output $y(t)$ to be bounded for any bounded input $r(t)$ (i.e., for any finite $M_r$), the integral $\int_{-\infty}^{\infty} |h(\tau)| d\tau$ must be finite.

**Reference:** This concept is extensively covered in **Kuo & Golnaraghi (10th Ed.) Chapter 4** and **Nagarath & Gopal (7th Ed.) Chapter 5**.

## 2. BIBO Stability and the Transfer Function

The transfer function $H(s)$ of an LTI system is the Laplace transform of its impulse response $h(t)$, assuming zero initial conditions.

$$ H(s) = \mathcal{L}\{h(t)\} = \int_{0}^{\infty} h(t) e^{-st} dt $$

The poles of the transfer function are the roots of the denominator polynomial of $H(s)$.

### Relationship between Poles and BIBO Stability:

The BIBO stability of an LTI system is determined by the location of the poles of its transfer function in the complex s-plane.

**Condition for BIBO Stability using Transfer Function:** An LTI system is BIBO stable if and only if **all the poles of its transfer function lie strictly in the left half of the s-plane (LHP)**.

*   **Left Half of the s-plane (LHP):** This region includes the real axis and all points with a negative real part (Re(s) < 0).
*   **Right Half of the s-plane (RHP):** This region includes all points with a positive real part (Re(s) > 0).
*   **Imaginary Axis:** This is the boundary between the LHP and RHP, where Re(s) = 0.

**Mathematical Condition:** If $p_1, p_2, ..., p_n$ are the poles of the transfer function $H(s)$, the system is BIBO stable if and only if $\text{Re}(p_i) < 0$ for all $i = 1, 2, ..., n$.

**Why this relationship exists:**
The impulse response $h(t)$ can be expressed as a sum of terms, each corresponding to a pole of the transfer function. For a simple pole at $s = p_i$, the corresponding term in $h(t)$ is of the form $C e^{p_i t}$.

*   If $\text{Re}(p_i) < 0$, then $e^{p_i t} = e^{\text{Re}(p_i) t} e^{j \text{Im}(p_i) t}$. As $t \to \infty$, $e^{\text{Re}(p_i) t} \to 0$, so the term decays to zero.
*   If $\text{Re}(p_i) > 0$, then $e^{p_i t} \to \infty$ as $t \to \infty$, leading to an unbounded output.
*   If $\text{Re}(p_i) = 0$ (i.e., $p_i$ is on the imaginary axis), the term is of the form $C e^{j \omega_0 t}$ (if $p_i = j \omega_0$) or $C$ (if $p_i = 0$). These terms do not decay and can lead to sustained oscillations or a ramp-like growth, which, under certain input conditions, can result in unbounded outputs or do not satisfy the strict inequality for stability (especially for repeated poles on the imaginary axis).

**Important Note on Poles on the Imaginary Axis:**
*   **Distinct poles on the imaginary axis:** If the system has simple poles at $s = \pm j\omega_0$ (and all other poles are in the LHP), the system is generally considered **marginally stable**. The output for a sinusoidal input at frequency $\omega_0$ can grow linearly with time, which is not strictly bounded.
*   **Repeated poles on the imaginary axis:** If the system has repeated poles on the imaginary axis (e.g., $s = 0$ or $s = \pm j\omega_0$ with multiplicity greater than 1), the system is **unstable**. The impulse response will contain terms like $t \sin(\omega_0 t)$ or $t$, which grow unbounded.

For strict BIBO stability, **no poles are allowed on the imaginary axis**.

**Reference:** This connection is fundamental and is discussed in **Ogata (5th Ed.) Chapter 6**, **Nise (8th Ed.) Chapter 4**, and **DiStefano et al. (3rd Ed.) Chapter 7**.

## 3. Analyzing BIBO Stability using Pole Locations

To determine BIBO stability, we need to find the roots of the characteristic equation of the system, which are the poles of the closed-loop or open-loop transfer function.

### Characteristic Equation:

For a system with open-loop transfer function $G(s)H(s)$ (for a unity feedback system), the closed-loop transfer function is:
$$ T(s) = \frac{G(s)}{1 + G(s)H(s)} $$
The denominator of the closed-loop transfer function is $1 + G(s)H(s)$. The **characteristic equation** is:
$$ 1 + G(s)H(s) = 0 $$
The roots of this equation are the **closed-loop poles**.

If we are analyzing the stability of an open-loop system directly (e.g., the transfer function of a plant itself), the poles are simply the roots of the denominator of that open-loop transfer function.

### Procedure to Determine BIBO Stability:

1.  **Obtain the Transfer Function:** Determine the transfer function $H(s)$ of the system (either open-loop or closed-loop, depending on what stability you're assessing).
2.  **Identify the Poles:** Find the roots of the denominator polynomial of $H(s)$. These are the poles of the system.
3.  **Check Pole Locations:**
    *   If **all** poles have negative real parts (i.e., lie in the LHP), the system is BIBO stable.
    *   If **any** pole has a positive real part (i.e., lies in the RHP), the system is BIBO unstable.
    *   If there are poles on the imaginary axis, and they are **repeated** or there are **any poles in the RHP**, the system is unstable.
    *   If there are **distinct** poles on the imaginary axis and **all other poles** are in the LHP, the system is marginally stable (not strictly BIBO stable).

### Graphical Representation on the s-plane:

*   **Stable:** All poles are in the left half-plane (Re(s) < 0).
    ![Stable Pole Locations](https://www.controltheorytutorial.com/wp-content/uploads/2021/10/stable-poles-s-plane.png)
*   **Unstable:** At least one pole is in the right half-plane (Re(s) > 0).
    ![Unstable Pole Locations](https://www.controltheorytutorial.com/wp-content/uploads/2021/10/unstable-poles-s-plane.png)
*   **Marginally Stable:** Distinct poles on the imaginary axis (Re(s) = 0) and all other poles in the LHP.
    ![Marginally Stable Pole Locations](https://www.controltheorytutorial.com/wp-content/uploads/2021/10/marginally-stable-poles-s-plane.png)

**Reference:** This is a core concept in **Nagarath & Gopal (7th Ed.) Chapter 5.1** and **Kuo & Golnaraghi (10th Ed.) Chapter 4.1**.

## 4. Examples

### Example 1: Stable System

Consider a system with the transfer function:
$$ H(s) = \frac{s+2}{(s+1)(s+3)} $$
The poles are the roots of the denominator: $(s+1)(s+3) = 0$.
The poles are $s = -1$ and $s = -3$.
Since both poles have negative real parts (Re(-1) = -1 < 0 and Re(-3) = -3 < 0), this system is **BIBO stable**.

**Explanation:** The impulse response is $h(t) = 2e^{-t} - e^{-3t}$ for $t \ge 0$. As $t \to \infty$, both exponential terms decay to zero, making the output bounded for any bounded input.

### Example 2: Unstable System

Consider a system with the transfer function:
$$ H(s) = \frac{s+2}{s(s-1)} $$
The poles are the roots of the denominator: $s(s-1) = 0$.
The poles are $s = 0$ and $s = 1$.
One pole ($s=1$) is in the RHP (Re(1) = 1 > 0). The other pole is on the imaginary axis ($s=0$). This system is **BIBO unstable**.

**Explanation:** The impulse response can be found using partial fraction expansion.
$$ H(s) = \frac{A}{s} + \frac{B}{s-1} $$
$A = \left. \frac{s+2}{s-1} \right|_{s=0} = \frac{2}{-1} = -2$
$B = \left. \frac{s+2}{s} \right|_{s=1} = \frac{1+2}{1} = 3$
So, $H(s) = \frac{-2}{s} + \frac{3}{s-1}$.
The impulse response is $h(t) = -2u(t) + 3e^{t}$ for $t \ge 0$ (where $u(t)$ is the unit step function).
As $t \to \infty$, the $3e^t$ term grows infinitely large, making the output unbounded even for a bounded input (like a step input).

### Example 3: Marginally Stable System

Consider a system with the transfer function:
$$ H(s) = \frac{s+2}{(s+1)(s+j\omega_0)(s-j\omega_0)} $$
The poles are $s = -1$, $s = j\omega_0$, and $s = -j\omega_0$.
Here, $s=-1$ is in the LHP. The poles $s = j\omega_0$ and $s = -j\omega_0$ are distinct and lie on the imaginary axis.
This system is **marginally stable**, not strictly BIBO stable.

**Explanation:** For a sinusoidal input at frequency $\omega_0$, the output could grow linearly with time, leading to an unbounded response.

### Example 4: Unstable System (Repeated Pole on Imaginary Axis)

Consider a system with the transfer function:
$$ H(s) = \frac{1}{s^2(s+1)} $$
The poles are $s = 0$ (with multiplicity 2) and $s = -1$.
The pole $s=0$ is on the imaginary axis and is repeated. This system is **BIBO unstable**.

**Explanation:** The impulse response will contain a term proportional to $t$, which grows unbounded as $t \to \infty$.

**Reference:** These examples illustrate the principles discussed in **Nise (8th Ed.) Chapter 4.1** and **Ogata (5th Ed.) Chapter 6.2**.

## 5. Role of Pole-Zero Cancellations

Pole-zero cancellations can sometimes mask the true stability behavior of a system.

*   **System with a pole-zero cancellation in the RHP:** If a transfer function has a pole in the RHP that is cancelled by a zero in the RHP, the resulting simplified transfer function might appear stable. However, the original system, before cancellation, was unstable.
*   **System with a pole-zero cancellation on the imaginary axis:** Similarly, cancellation of poles on the imaginary axis can be problematic.

**Important Consideration:** When a pole-zero cancellation occurs, it implies that the original system is not strictly realizable in its simplified form or that there are internal dynamics that affect stability. For strict BIBO stability analysis using the transfer function, it is crucial to consider the poles of the **unsimplified** transfer function. Alternatively, one must ensure that any cancelled pole was in the LHP.

**Reference:** This subtlety is addressed in **Kuo & Golnaraghi (10th Ed.) Chapter 4.1** and **Nagarath & Gopal (7th Ed.) Chapter 5.1**.

## 6. Correlation with Internal Stability (Zero Input Response)

While BIBO stability is about the system's response to external inputs, it's important to note its relationship with **internal stability**. Internal stability refers to the system's behavior in the absence of any input (zero input response).

For **LTI systems**, BIBO stability is equivalent to the stability of the system's internal modes. A system is internally stable if and only if all the roots of its characteristic equation (which are also the poles of the transfer function) lie in the LHP.

*   **BIBO Stability Implies Internal Stability:** If a system is BIBO stable, all its poles are in the LHP, ensuring that internal modes decay.
*   **Internal Stability Implies BIBO Stability:** If a system is internally stable (all poles in LHP), it will also be BIBO stable.

This equivalence holds true for LTI systems. However, for more complex systems (e.g., nonlinear systems, systems with delays, or systems described by state-space representations where internal states are not directly represented by poles of the transfer function), this direct equivalence might not always hold.

**Reference:** This is a crucial connection covered in **Nise (8th Ed.) Chapter 4.1** and **Ogata (5th Ed.) Chapter 6.1**.

## 7. Practice Questions and Exercises

**Instructions:** For each question, determine if the system described by the given transfer function is BIBO stable, unstable, or marginally stable.

---

**Question 1:**
The transfer function of a system is given by:
$$ H(s) = \frac{s+5}{(s+2)(s+4)} $$
*   **Answer:** Poles are at $s = -2$ and $s = -4$. Both are in the LHP. Therefore, the system is **BIBO stable**.

---

**Question 2:**
The transfer function of a system is given by:
$$ H(s) = \frac{s-3}{s(s+1)} $$
*   **Answer:** Poles are at $s = 0$ and $s = -1$. One pole is on the imaginary axis ($s=0$), and the other is in the LHP. Since the pole on the imaginary axis is distinct, the system is **marginally stable**. (Note: If the question asked for *strict* BIBO stability, the answer would be no).

---

**Question 3:**
The transfer function of a system is given by:
$$ H(s) = \frac{s+1}{s^2 - 4} $$
*   **Answer:** The denominator is $s^2 - 4 = (s-2)(s+2)$. The poles are at $s = 2$ and $s = -2$. Since one pole ($s=2$) is in the RHP, the system is **unstable**.

---

**Question 4:**
The transfer function of a system is given by:
$$ H(s) = \frac{s+3}{s^2 + 2s + 1} $$
*   **Answer:** The denominator is $s^2 + 2s + 1 = (s+1)^2$. The poles are at $s = -1$ (with multiplicity 2). Both poles have negative real parts. Therefore, the system is **BIBO stable**.

---

**Question 5:**
The transfer function of a system is given by:
$$ H(s) = \frac{s^2+4s+3}{(s+1)(s^2+2s+5)} $$
*   **Answer:** The denominator is $(s+1)(s^2+2s+5)$. The poles are $s=-1$ and the roots of $s^2+2s+5=0$. Using the quadratic formula:
    $s = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm j4}{2} = -1 \pm j2$.
    The poles are $s = -1$, $s = -1+j2$, and $s = -1-j2$. All poles have negative real parts. Therefore, the system is **BIBO stable**.

---

**Question 6:**
Consider a system with the characteristic equation: $s^3 + 2s^2 + s = 0$. Is the system BIBO stable?
*   **Answer:** Factor the characteristic equation: $s(s^2 + 2s + 1) = s(s+1)^2 = 0$.
    The roots (poles) are $s=0$, $s=-1$, and $s=-1$.
    The pole $s=0$ is on the imaginary axis and is distinct. The other poles are in the LHP. Therefore, the system is **marginally stable**.

---

**Question 7:**
Consider a system with the characteristic equation: $s^3 - s^2 + s - 1 = 0$. Is the system BIBO stable?
*   **Answer:** Factor the characteristic equation:
    $s^2(s-1) + 1(s-1) = 0$
    $(s^2+1)(s-1) = 0$.
    The roots (poles) are $s=1$, $s=j$, and $s=-j$.
    The pole $s=1$ is in the RHP. Therefore, the system is **unstable**.

---

## 8. Key Points to Remember

*   **BIBO Stability Definition:** For every bounded input, the output is bounded.
*   **Impulse Response Condition:** The impulse response $h(t)$ must be absolutely integrable: $\int_{-\infty}^{\infty} |h(t)| dt < \infty$.
*   **Pole Location Criterion:** All poles of the transfer function must lie strictly in the left half of the s-plane (Re(s) < 0).
*   **Marginal Stability:** Distinct poles on the imaginary axis (with all other poles in LHP) lead to marginal stability, not strict BIBO stability.
*   **Instability:** Any pole in the right half-plane or repeated poles on the imaginary axis leads to instability.
*   **Transfer Function Denominator:** The poles are the roots of the denominator polynomial of the system's transfer function.
*   **Characteristic Equation:** For feedback systems, the poles are the roots of $1 + G(s)H(s) = 0$.
*   **Pole-Zero Cancellations:** Be cautious with cancellations, especially if they involve poles in the RHP or on the imaginary axis. Analyze the unsimplified transfer function if necessary.
*   **Internal vs. BIBO Stability:** For LTI systems, BIBO stability is equivalent to internal stability (all modes decay).

## 9. Alignment with Course Outcomes

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    *   This module directly uses the transfer function to determine stability by examining its poles, fulfilling CO1.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)**
    *   While this module primarily uses frequency-domain (s-plane) analysis, the definition of BIBO stability is rooted in time-domain behavior (bounded input/output), and understanding the impulse response's behavior is key.
*   **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (Knowledge Level: K3)**
    *   This module introduces the fundamental concept of absolute stability through pole locations. Routh-Hurwitz and root locus are methods to determine these pole locations without explicitly solving for them, thus directly supporting CO3.
*   **CO4: Apply frequency domain techniques to assess the system stability and to design different compensation techniques (Knowledge Level: K3)**
    *   The concept of poles in the s-plane is intrinsically linked to frequency domain analysis (e.g., Bode plots, Nyquist plots), which are used to assess stability. Understanding pole locations is the first step in frequency domain stability analysis.

## Conclusion

Understanding BIBO stability is the cornerstone of control system analysis. By examining the location of the poles of a system's transfer function, engineers can predict whether the system will exhibit bounded outputs for all bounded inputs, ensuring reliable and predictable system performance. This foundational knowledge is essential for proceeding to more advanced stability analysis techniques like Routh-Hurwitz, Root Locus, and frequency domain methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
