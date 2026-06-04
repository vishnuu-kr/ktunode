---
title: "absolute stability"
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe957"
status: "completed"
scrapedAt: "2026-05-23T17:54:42.450Z"
---
# Control Systems: Module 3 - Stability of Linear Control Systems (Focus: Absolute Stability)

This module delves into the critical concept of stability in linear control systems. We will explore what it means for a system to be stable and the various methods to determine it. Specifically, this section focuses on **Absolute Stability**, a fundamental aspect of system behavior.

---

## Module 3: Stability of Linear Control Systems

### Topic: Absolute Stability

**Learning Outcomes:**

*   Understand the fundamental concept of system stability in the context of control systems.
*   Define and explain the concept of Bounded-Input Bounded-Output (BIBO) stability.
*   Differentiate between absolute and relative stability.
*   Identify the conditions for absolute stability for linear time-invariant (LTI) systems.
*   Relate system poles to absolute stability.
*   Introduce methods for determining absolute stability (which will be further explored in subsequent topics).

**Course Outcomes Alignment:**

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)** - Understanding absolute stability is crucial for analyzing system behavior using transfer functions.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)** - Stability directly impacts how a system responds in the time domain and its steady-state behavior.
*   **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (Knowledge Level: K3)** - This topic lays the groundwork for understanding *why* Routh-Hurwitz and root locus are used to determine absolute stability.

---

### 1. Introduction to System Stability

**Definition:** A control system is considered stable if its output remains bounded for all bounded inputs. Conversely, an unstable system will exhibit an output that grows without bound, even for a small, bounded input.

**Importance of Stability:**
*   **System Safety:** Unstable systems can lead to catastrophic failures, damaging equipment and posing safety risks.
*   **Performance:** A stable system is essential for achieving desired performance objectives, such as accuracy and speed.
*   **Reliability:** Stable systems are predictable and reliable in their operation.

**Analogy:** Imagine balancing a pencil on its tip. A slight disturbance will cause it to fall. This is analogous to an unstable system. Now imagine balancing it on its side; it will remain in place with minor disturbances. This is analogous to a stable system.

---

### 2. Bounded-Input Bounded-Output (BIBO) Stability

**Concept:** BIBO stability is a specific and widely used definition of stability for control systems. It focuses on the relationship between the input signal and the output signal.

**Definition (BIBO Stability):** A system is BIBO stable if, for every bounded input signal $u(t)$, the corresponding output signal $y(t)$ is also bounded.

*   **Bounded Input:** An input signal $u(t)$ is bounded if there exists a positive constant $M_u$ such that $|u(t)| \le M_u$ for all $t \ge 0$.
*   **Bounded Output:** An output signal $y(t)$ is bounded if there exists a positive constant $M_y$ such that $|y(t)| \le M_y$ for all $t \ge 0$.

**Relationship with Transfer Function:**
For a linear time-invariant (LTI) system with a transfer function $G(s)$, BIBO stability is directly related to the locations of the poles of $G(s)$.

**Theorem:** An LTI system is BIBO stable if and only if all the poles of its transfer function lie strictly in the left-half of the complex s-plane (i.e., their real parts are negative).

*   **Left-Half Plane (LHP):** The region in the s-plane where $\text{Re}(s) < 0$.
*   **Right-Half Plane (RHP):** The region in the s-plane where $\text{Re}(s) > 0$.
*   **Imaginary Axis:** The line where $\text{Re}(s) = 0$.

**Incorporation from Textbooks:**
*   **Kuo & Golnaraghi (10th Ed.):** Emphasizes that BIBO stability is determined by the poles of the open-loop or closed-loop transfer function. They explain that if any pole is in the RHP, the system is unstable.
*   **Nagarath & Gopal (7th Ed.):** Discusses BIBO stability as a necessary condition for a system to be practically useful. They link it to the impulse response of the system.

---

### 3. Absolute Stability vs. Relative Stability

While the module title mentions "Absolute Stability," it's important to distinguish it from "Relative Stability," which will be covered later.

*   **Absolute Stability:** This refers to whether a system is stable or unstable. It's a binary concept – either the system is stable, or it is not. For LTI systems, absolute stability is determined by the location of the poles relative to the imaginary axis.

*   **Relative Stability:** This refers to *how* stable a system is. It quantifies the degree of stability. For systems with poles in the LHP, relative stability can be described by metrics like:
    *   **Damping Ratio ($\zeta$):** A higher damping ratio indicates a more stable system with less oscillation.
    *   **Time Constant ($\tau$):** A smaller time constant indicates a faster settling time and thus potentially better stability.
    *   **Maximum Overshoot:** Lower overshoot indicates a more stable response.
    *   **Settling Time:** Shorter settling time indicates a more stable and faster response.

**Example:**
Consider two systems with poles at $s = -1$ and $s = -5$. Both systems are absolutely stable because both poles are in the LHP. However, the system with the pole at $s = -5$ is *relatively more stable* because its response will decay faster than the system with the pole at $s = -1$.

**Incorporation from Textbooks:**
*   **Nise (8th Ed.):** Clearly distinguishes between absolute stability (poles in LHP) and relative stability, introducing concepts like damping ratio and natural frequency as measures of relative stability.
*   **Ogata (5th Ed.):** While focusing on BIBO stability via poles, Ogata also touches upon the transient response characteristics which indirectly relate to relative stability.

---

### 4. Conditions for Absolute Stability in LTI Systems

For an LTI system, the absolute stability is determined by the location of the **poles of its transfer function**.

**Key Conditions:**

1.  **All Poles in the Left-Half of the s-plane ($\text{Re}(s) < 0$):** The system is **absolutely stable**. The system's response to any bounded input will decay to zero over time.

2.  **At Least One Pole in the Right-Half of the s-plane ($\text{Re}(s) > 0$):** The system is **absolutely unstable**. The system's response will grow without bound, even for a bounded input.

3.  **Poles on the Imaginary Axis ($\text{Re}(s) = 0$):**
    *   **Simple Poles on the Imaginary Axis (e.g., $s = \pm j\omega$):** If these poles are simple (i.e., not repeated), the system is considered **marginally stable**. The output will oscillate with constant amplitude, and it is neither strictly stable nor strictly unstable.
    *   **Repeated Poles on the Imaginary Axis (e.g., $s = \pm j\omega$ repeated, or $s=0$ repeated):** The system is **unstable**. The response will grow with time (e.g., $t \sin(\omega t)$ or $t^2$).

**Summary Table:**

| Pole Location                                   | Stability Type   | Output Behavior (for bounded input)                               |
| :---------------------------------------------- | :--------------- | :---------------------------------------------------------------- |
| All poles strictly in LHP ($\text{Re}(s) < 0$) | Absolutely Stable | Decays to zero                                                    |
| At least one pole in RHP ($\text{Re}(s) > 0$)  | Absolutely Unstable | Grows without bound                                               |
| Simple poles on imaginary axis ($\text{Re}(s)=0$) | Marginally Stable | Oscillates with constant amplitude                                |
| Repeated poles on imaginary axis                | Absolutely Unstable | Grows with time (e.g., $t\sin(\omega t)$, $t^n$)                 |

**Incorporation from Textbooks:**
*   **Nagarath & Gopal (7th Ed.):** Extensively discusses the characteristic equation and its roots (poles). They state that for stability, all roots of the characteristic equation must lie in the LHP.
*   **Kuo & Golnaraghi (10th Ed.):** Reinforces the pole location criteria for stability. They also highlight the transient response characteristics associated with poles in different regions of the s-plane.
*   **Ogata (5th Ed.):** Links pole locations to the system's natural response. Poles in the LHP correspond to decaying exponentials, poles in the RHP to growing exponentials, and poles on the imaginary axis to sustained oscillations.

---

### 5. Role of the Characteristic Equation

The **characteristic equation** of a system is fundamental to determining its stability. For a system described by its transfer function $G(s) = \frac{N(s)}{D(s)}$, the characteristic equation is given by the denominator polynomial $D(s) = 0$. The roots of the characteristic equation are the system's **poles**.

**Example:**
Consider a system with the transfer function:
$G(s) = \frac{s+1}{s^2 + 2s + 1}$

The characteristic equation is $s^2 + 2s + 1 = 0$.
Factoring this equation, we get $(s+1)^2 = 0$.
The poles are $s = -1$ (a repeated pole).
Since both poles are in the LHP, the system is **absolutely stable**.

Consider another system:
$G(s) = \frac{s+1}{s^2 - 2s + 2}$

The characteristic equation is $s^2 - 2s + 2 = 0$.
Using the quadratic formula, $s = \frac{-(-2) \pm \sqrt{(-2)^2 - 4(1)(2)}}{2(1)} = \frac{2 \pm \sqrt{4 - 8}}{2} = \frac{2 \pm \sqrt{-4}}{2} = \frac{2 \pm j2}{2} = 1 \pm j1$.
The poles are $s = 1 + j1$ and $s = 1 - j1$.
Since the real part of both poles is positive ($\text{Re}(s) = 1 > 0$), these poles are in the RHP. Therefore, the system is **absolutely unstable**.

Consider a third system:
$G(s) = \frac{s+1}{s^2 + 4}$

The characteristic equation is $s^2 + 4 = 0$.
This gives $s^2 = -4$, so $s = \pm j2$.
The poles are $s = j2$ and $s = -j2$.
These are simple poles located on the imaginary axis. Therefore, the system is **marginally stable**. If the input is a unit step, the output would be $\frac{1}{4}(1 - \cos(2t))$, which oscillates with constant amplitude.

**Important Note:** For closed-loop systems, the characteristic equation is derived from the denominator of the *closed-loop* transfer function, not just the open-loop transfer function.

---

### 6. Preview of Stability Determination Methods (To be covered in detail later)

While this section focuses on the *concept* of absolute stability and its relation to pole locations, the following modules will introduce systematic methods to determine these pole locations without explicitly solving the characteristic equation.

*   **Routh-Hurwitz Stability Criterion (CO3):** A powerful algebraic method to determine if all the roots of a polynomial (characteristic equation) have negative real parts, without actually finding the roots. It involves constructing a table (Routh array).
*   **Root Locus (CO3):** A graphical method that shows how the closed-loop poles of a system change as a parameter (typically the gain $K$) is varied. It helps in visualizing the system's stability region.
*   **Frequency Domain Methods (CO4):** Techniques like Nyquist and Bode plots analyze the system's frequency response to assess stability margins (gain margin and phase margin). These are particularly useful for systems with uncertainties or when dealing with physical constraints.

---

### 7. Important Points to Remember

*   **Absolute stability** is about whether a system's output remains bounded for all bounded inputs.
*   **BIBO stability** is a common definition where stability is assessed based on the input-output relationship.
*   For LTI systems, **BIBO stability is equivalent to all poles of the transfer function having negative real parts.**
*   The **characteristic equation** ($D(s)=0$) determines the system's poles.
*   **Poles in the LHP ($\text{Re}(s) < 0$)** indicate absolute stability.
*   **Poles in the RHP ($\text{Re}(s) > 0$)** indicate absolute instability.
*   **Simple poles on the imaginary axis ($\text{Re}(s) = 0$)** indicate marginal stability.
*   **Repeated poles on the imaginary axis** indicate instability.
*   **Relative stability** refers to the *degree* of stability, quantified by metrics like damping ratio and time constants.

---

### 8. Practice Questions & Exercises

**Question 1:**
A linear time-invariant system has a transfer function $G(s) = \frac{s+2}{s^2 + 3s + 2}$. Determine if the system is absolutely stable and justify your answer by referring to the location of its poles.

**Solution:**
The characteristic equation is the denominator polynomial: $s^2 + 3s + 2 = 0$.
Factoring the polynomial: $(s+1)(s+2) = 0$.
The poles of the system are $s = -1$ and $s = -2$.
Both poles have negative real parts ($\text{Re}(s) = -1 < 0$ and $\text{Re}(s) = -2 < 0$).
Therefore, the system is **absolutely stable**.

**Question 2:**
For a system with the characteristic equation $s^3 - 2s^2 + s - 2 = 0$, what can you conclude about its absolute stability?

**Solution:**
We need to find the roots of the characteristic equation.
$s^3 - 2s^2 + s - 2 = 0$
We can factor this by grouping:
$s^2(s - 2) + 1(s - 2) = 0$
$(s^2 + 1)(s - 2) = 0$
This gives us the roots:
$s^2 + 1 = 0 \implies s^2 = -1 \implies s = \pm j1$
$s - 2 = 0 \implies s = 2$
The poles are $s = j1$, $s = -j1$, and $s = 2$.
Since there is one pole in the right-half plane ($s = 2$, where $\text{Re}(s) = 2 > 0$), the system is **absolutely unstable**.

**Question 3:**
What is the condition for a system to be marginally stable? Give an example of a characteristic equation that would result in marginal stability.

**Solution:**
A system is marginally stable if it has simple poles located on the imaginary axis (and no poles in the right-half plane). This means the response oscillates with a constant amplitude for a bounded input.
Example of a characteristic equation: $s^2 + \omega^2 = 0$.
For instance, if the characteristic equation is $s^2 + 9 = 0$, then $s = \pm j3$. These are simple poles on the imaginary axis, leading to marginal stability.

---

This concludes our introduction to the concept of absolute stability in control systems. The subsequent sections will build upon this foundation by introducing practical methods for analyzing and ensuring system stability.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
