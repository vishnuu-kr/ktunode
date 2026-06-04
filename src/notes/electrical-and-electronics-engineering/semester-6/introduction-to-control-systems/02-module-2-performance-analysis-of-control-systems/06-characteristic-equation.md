---
title: "Characteristic equation"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366bd"
status: "completed"
scrapedAt: "2026-05-23T16:29:30.397Z"
---
# INTRODUCTION TO CONTROL SYSTEMS

## Module 2: Performance Analysis of Control Systems

### Topic: Characteristic Equation

---

### **1. Learning Outcomes Covered**

This topic will enable students to:

*   **Understand the fundamental role of the characteristic equation in analyzing control system behavior.** (Relates to CO1, CO2)
*   **Determine the characteristic equation from the system's transfer function.** (Relates to CO1)
*   **Correlate the roots of the characteristic equation with system stability and transient response characteristics.** (Relates to CO2, CO3)
*   **Appreciate the importance of the characteristic equation in predicting system performance before simulation.** (Relates to CO2, CO3)

---

### **2. Key Concepts and Definitions**

*   **Control System:** A system that manages, commands, directs, or regulates the behavior of other devices or systems using control loops.
*   **Transfer Function ($G(s)$):** The ratio of the Laplace transform of the output to the Laplace transform of the input, assuming all initial conditions are zero. For a linear time-invariant (LTI) system, it is represented as $G(s) = \frac{Y(s)}{U(s)}$, where $Y(s)$ is the Laplace transform of the output and $U(s)$ is the Laplace transform of the input.
*   **Closed-Loop System:** A system where the output is measured and fed back to the input for comparison with the desired input.
*   **Characteristic Equation:** A polynomial equation derived from the denominator of the closed-loop transfer function. The roots of the characteristic equation are called the **poles** of the closed-loop system.

    The general form of a second-order system's characteristic equation is:
    $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$

    Where:
    *   $s$ is the complex variable in the Laplace domain.
    *   $\zeta$ (zeta) is the damping ratio.
    *   $\omega_n$ (omega-n) is the undamped natural frequency.

*   **Poles of a System:** The roots of the characteristic equation (i.e., the values of $s$ that make the denominator of the closed-loop transfer function zero). Poles determine the stability and transient response of the system.
*   **Stability:** A property of a system that indicates whether its output will remain bounded or grow without bound in response to a bounded input. For LTI systems, stability is determined by the location of the closed-loop poles in the s-plane.
    *   **Stable System:** All closed-loop poles lie in the Left Half-Plane (LHP) of the s-plane (i.e., have negative real parts).
    *   **Unstable System:** At least one closed-loop pole lies in the Right Half-Plane (RHP) (i.e., has a positive real part) or there are poles with zero real part that are repeated.
    *   **Marginally Stable System:** One or more simple poles on the imaginary axis and all other poles in the LHP.

*   **Transient Response:** The behavior of the system's output as it changes from its initial state to its final steady-state value after a change in input. Key transient response parameters include:
    *   **Delay Time ($t_d$)**: Time taken for the response to reach 50% of its final value.
    *   **Rise Time ($t_r$)**: Time taken for the response to rise from 10% to 90% of its final value.
    *   **Peak Time ($t_p$)**: Time taken for the response to reach its first peak.
    *   **Maximum Overshoot ($M_p$)**: The maximum percentage by which the response exceeds its final steady-state value.
    *   **Settling Time ($t_s$)**: The time taken for the response to reach and stay within a specified tolerance band (usually ±2% or ±5%) of its final value.

---

### **3. Deriving the Characteristic Equation**

The characteristic equation is fundamental to analyzing feedback control systems. It arises directly from the denominator of the closed-loop transfer function.

**Consider a general unity feedback system:**

[Diagram of a unity feedback system: Input R(s) -> summing junction (+/-) -> Controller Gc(s) -> Plant Gp(s) -> Output Y(s) -> Feedback H(s) -> summing junction. The feedback signal is negative.]

*   **Forward Path Transfer Function:** $G(s) = G_c(s) G_p(s)$
*   **Feedback Path Transfer Function:** $H(s)$
*   **Closed-Loop Transfer Function:** $T(s) = \frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)}$

**The Characteristic Equation is obtained by setting the denominator of the closed-loop transfer function to zero:**

$1 + G(s)H(s) = 0$

This equation, when expanded, will be a polynomial in $s$. The roots of this polynomial are the poles of the closed-loop system.

**(Nise, 5th Ed., Chapter 4)** emphasizes that the characteristic equation's roots determine the system's transient response and stability.
**(Nagrath & Gopal, 5th Ed., Chapter 5)** also highlights its importance in relating system parameters to performance.

**Example:**

Consider a system with the following open-loop transfer function in a unity feedback configuration ($H(s) = 1$):

$G(s) = \frac{K}{s(s+a)}$

**Step 1: Determine the open-loop transfer function:**
$G(s)H(s) = \frac{K}{s(s+a)} \times 1 = \frac{K}{s(s+a)}$

**Step 2: Formulate the characteristic equation:**
$1 + G(s)H(s) = 0$
$1 + \frac{K}{s(s+a)} = 0$

**Step 3: Clear the denominator to get the characteristic equation (a polynomial in s):**
$s(s+a) + K = 0$
$s^2 + as + K = 0$

This is the characteristic equation for this system. The roots of this quadratic equation will determine its stability and transient response.

---

### **4. Relationship Between Poles and System Performance**

The location of the closed-loop poles in the s-plane dictates the system's behavior.

**s-Plane Representation:**

The s-plane is a complex plane with the real axis representing the real part of $s$ (denoted by $\sigma$) and the imaginary axis representing the imaginary part of $s$ (denoted by $\omega$).

*   **Left Half-Plane (LHP):** $\sigma < 0$. Poles in the LHP lead to decaying modes, contributing to stability.
*   **Right Half-Plane (RHP):** $\sigma > 0$. Poles in the RHP lead to growing modes, resulting in instability.
*   **Imaginary Axis:** $\sigma = 0$. Poles on the imaginary axis lead to sustained oscillations (marginal stability) or growth if repeated.

**Standard Second-Order System and Pole Locations:**

For a standard second-order system represented by the characteristic equation:
$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$

The roots (poles) are given by the quadratic formula:
$s_{1,2} = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$

Let $\sigma_d = \zeta\omega_n$ (damping factor) and $\omega_d = \omega_n\sqrt{1-\zeta^2}$ (damped natural frequency).
Then, $s_{1,2} = -\sigma_d \pm j\omega_d$.

The location of these poles in the s-plane depends on the value of $\zeta$:

| Damping Ratio ($\zeta$) | Pole Location                                       | System Response                                       |
| :---------------------- | :-------------------------------------------------- | :---------------------------------------------------- |
| $\zeta < 0$             | In the RHP                                          | Unstable                                              |
| $\zeta = 0$             | On the imaginary axis ($s = \pm j\omega_n$)         | Marginally Stable (sustained oscillations)            |
| $0 < \zeta < 1$         | Complex conjugate poles in the LHP ($s = -\sigma_d \pm j\omega_d$) | Underdamped (oscillatory response with decay)         |
| $\zeta = 1$             | Real and repeated poles in the LHP ($s = -\omega_n$) | Critically Damped (fastest response without overshoot) |
| $\zeta > 1$             | Real and distinct poles in the LHP ($s = -\zeta\omega_n \pm \sqrt{\zeta^2-1}\omega_n$) | Overdamped (slow, non-oscillatory response)           |

**(Nise, 5th Ed., Chapter 4)** provides a detailed mapping of pole locations to transient response characteristics. The distance of a pole from the origin affects the speed of the response. Poles further to the left result in faster decay.

**Contribution of Pole Locations to Transient Response Parameters:**

*   **Dominant Poles:** If a system has poles that are significantly further to the left in the LHP than others, they are considered dominant. The transient response is primarily dictated by these dominant poles. This is a crucial concept for simplifying system analysis for higher-order systems. (Nise, 5th Ed., Chapter 4.4)
*   **Real Part of Poles ($-\zeta\omega_n$):** Determines the rate of decay of the transient response. A more negative real part leads to faster settling.
*   **Imaginary Part of Poles ($\pm j\omega_d$):** Determines the frequency of oscillation in the transient response. A larger imaginary part leads to a higher oscillation frequency.

**(Ogata, 5th Ed., Chapter 6)** extensively covers the relationship between pole-zero locations and transient response.

---

### **5. Performance Metrics and Characteristic Equation Roots**

The characteristic equation's roots (poles) are directly related to the transient response specifications.

For a dominant second-order system with poles at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$:

*   **Damping Ratio ($\zeta$):** Controls the overshoot and settling time. Higher $\zeta$ means less overshoot and faster settling.
*   **Undamped Natural Frequency ($\omega_n$):** Influences the speed of the response. Higher $\omega_n$ means a faster response.

**Formulas relating $\zeta$, $\omega_n$, and transient response parameters (for dominant second-order systems):**

*   **Peak Time ($t_p$):** $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   **Maximum Overshoot ($M_p$):** $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\%$
*   **Settling Time ($t_s$) (2% criterion):** $t_s \approx \frac{4}{\zeta\omega_n}$ (This is derived from the time it takes for the response to settle within 2% of the final value, related to the real part of the poles).
*   **Settling Time ($t_s$) (5% criterion):** $t_s \approx \frac{3}{\zeta\omega_n}$
*   **Rise Time ($t_r$)**: $t_r \approx \frac{\pi - \beta}{\omega_d}$ where $\beta = \arctan\left(\frac{\omega_d}{\sigma_d}\right)$. For underdamped systems ($0 < \zeta < 1$), $t_r \approx \frac{\pi}{\omega_n}$.

**(Nise, 5th Ed., Chapter 4.2)** provides detailed derivations and relationships for these formulas.

**Example of using characteristic equation to predict performance:**

Consider a closed-loop system with the characteristic equation:
$s^2 + 4s + 13 = 0$

**Step 1: Compare with the standard second-order form:**
$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$

**Step 2: Equate coefficients:**
$2\zeta\omega_n = 4$
$\omega_n^2 = 13 \implies \omega_n = \sqrt{13} \approx 3.606$ rad/s

**Step 3: Calculate $\zeta$:**
$2\zeta(\sqrt{13}) = 4$
$\zeta = \frac{4}{2\sqrt{13}} = \frac{2}{\sqrt{13}} \approx 0.555$

**Step 4: Predict transient response parameters:**
*   Since $0 < \zeta < 1$, the system is underdamped and will exhibit overshoot.
*   $\omega_d = \omega_n\sqrt{1-\zeta^2} = \sqrt{13}\sqrt{1 - (\frac{2}{\sqrt{13}})^2} = \sqrt{13}\sqrt{1 - \frac{4}{13}} = \sqrt{13}\sqrt{\frac{9}{13}} = \sqrt{9} = 3$ rad/s

*   **Peak Time ($t_p$):** $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{3} \approx 1.047$ seconds
*   **Maximum Overshoot ($M_p$):** $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{-\frac{(2/\sqrt{13})\pi}{3}} = e^{-\frac{2\pi}{3\sqrt{13}}} \approx e^{-0.577} \approx 0.561$ or 56.1%
*   **Settling Time ($t_s$) (2% criterion):** $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{2} = 2$ seconds (Note: $\zeta\omega_n = 2$ from the equation coefficients, this is the $\sigma_d$ value).

This example demonstrates how analyzing the characteristic equation allows us to predict the system's transient behavior without simulating the entire system.

---

### **6. Higher-Order Systems and Dominant Poles**

For systems with characteristic equations of order higher than two, direct calculation of transient response from pole locations can be complex. However, the concept of **dominant poles** simplifies this.

*   **Dominant Poles:** These are the poles of the closed-loop system that are closest to the imaginary axis in the LHP. Non-dominant poles are located significantly further to the left in the LHP.
*   **Approximation:** If the ratio of the real part of a non-dominant pole to the real part of a dominant pole is approximately 5:1 or greater (i.e., $|\sigma_{non-dominant}| / |\sigma_{dominant}| \ge 5$), then the non-dominant poles can be ignored for transient response analysis, and the system can be approximated by a second-order system.

**(Nise, 5th Ed., Chapter 4.4)** provides a thorough explanation of dominant pole approximation.

**Example:**

Consider a system with the characteristic equation:
$(s+5)(s+6)(s^2 + 2s + 10) = 0$

The poles are:
*   $s = -5$
*   $s = -6$
*   Roots of $s^2 + 2s + 10 = 0$ are $s = \frac{-2 \pm \sqrt{4 - 40}}{2} = \frac{-2 \pm j\sqrt{36}}{2} = -1 \pm j3$.

Let's analyze the pole locations:
*   $s_1 = -5$
*   $s_2 = -6$
*   $s_{3,4} = -1 \pm j3$

The poles closest to the imaginary axis are $s_{3,4} = -1 \pm j3$. The real part is $\sigma = -1$.
The other poles are at $-5$ and $-6$. The ratio of the real parts is $|-5|/|-1| = 5$ and $|-6|/|-1| = 6$.

Since these ratios are $\ge 5$, the poles at $s = -5$ and $s = -6$ can be considered non-dominant. The transient response will be primarily determined by the complex conjugate poles $s = -1 \pm j3$.

We can approximate this as a second-order system with $s^2 + 2s + 10 = 0$.
Here, $2\zeta\omega_n = 2$ and $\omega_n^2 = 10 \implies \omega_n = \sqrt{10} \approx 3.16$ rad/s.
$\zeta\omega_n = 1 \implies \zeta = \frac{1}{\sqrt{10}} \approx 0.316$.

This approximation allows us to use the second-order formulas to estimate performance.

---

### **7. Practice Questions and Exercises**

**Question 1:**
For a unity feedback system with an open-loop transfer function $G(s) = \frac{10}{s(s+2)}$, find the characteristic equation and determine if the closed-loop system is stable.

**Answer 1:**
*   Open-loop transfer function $G(s)H(s) = \frac{10}{s(s+2)}$ (since $H(s)=1$ for unity feedback).
*   Characteristic Equation: $1 + G(s)H(s) = 0$
    $1 + \frac{10}{s(s+2)} = 0$
    $s(s+2) + 10 = 0$
    $s^2 + 2s + 10 = 0$
*   To check for stability, we find the roots of the characteristic equation:
    $s = \frac{-2 \pm \sqrt{2^2 - 4(1)(10)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 40}}{2} = \frac{-2 \pm \sqrt{-36}}{2} = \frac{-2 \pm j6}{2} = -1 \pm j3$.
*   Both poles have negative real parts ($-1$). Therefore, the closed-loop system is **stable**.

**Question 2:**
A closed-loop system has the characteristic equation $s^3 + 6s^2 + 11s + 6 = 0$.
(a) What is the order of the system?
(b) Where are the poles located in the s-plane?
(c) Based on the pole locations, describe the stability of the system.

**Answer 2:**
(a) The order of the system is **3**, as the highest power of $s$ in the characteristic equation is 3.
(b) To find the pole locations, we need to find the roots of the characteristic equation $s^3 + 6s^2 + 11s + 6 = 0$.
    By inspection, we can try integer factors of 6:
    If $s = -1$: $(-1)^3 + 6(-1)^2 + 11(-1) + 6 = -1 + 6 - 11 + 6 = 0$. So, $(s+1)$ is a factor.
    We can perform polynomial division or synthetic division:
    ```
      -1 | 1   6   11   6
         |    -1  -5  -6
         ----------------
           1   5    6   0
    ```
    The remaining polynomial is $s^2 + 5s + 6$.
    Factoring this quadratic: $(s+2)(s+3) = 0$.
    So, the roots are $s = -2$ and $s = -3$.
    The poles are located at $s = -1$, $s = -2$, and $s = -3$. All poles are on the real axis in the Left Half-Plane (LHP).
(c) Since all poles have negative real parts, the system is **stable**.

**Question 3:**
For a second-order system characterized by $s^2 + 8s + 16 = 0$, determine the damping ratio and the natural frequency. Describe the type of damping and predict the transient response.

**Answer 3:**
*   Comparing with the standard second-order characteristic equation $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
    $2\zeta\omega_n = 8$
    $\omega_n^2 = 16 \implies \omega_n = 4$ rad/s
*   Substitute $\omega_n = 4$ into the first equation:
    $2\zeta(4) = 8$
    $8\zeta = 8 \implies \zeta = 1$.
*   **Damping Ratio ($\zeta$):** $\zeta = 1$.
*   **Natural Frequency ($\omega_n$):** $\omega_n = 4$ rad/s.
*   **Type of Damping:** Since $\zeta = 1$, the system is **critically damped**.
*   **Transient Response Prediction:** A critically damped system provides the fastest possible response without any overshoot or oscillation. It reaches its final steady-state value directly and quickly.

---

### **8. Important Points to Remember**

*   The **characteristic equation** is formed by setting the denominator of the **closed-loop** transfer function to zero: $1 + G(s)H(s) = 0$.
*   The **roots of the characteristic equation are the poles of the closed-loop system**.
*   The **location of the closed-loop poles in the s-plane determines the system's stability and transient response**.
*   **Stability:** All poles must be in the Left Half-Plane (LHP) for a system to be stable.
*   For a second-order system, the damping ratio ($\zeta$) and natural frequency ($\omega_n$) are directly related to the characteristic equation and predict key transient response characteristics like overshoot and settling time.
*   In higher-order systems, the concept of **dominant poles** allows us to approximate the system's transient response using a second-order model if certain conditions are met.
*   Understanding the characteristic equation is crucial for **performance analysis and system design**, enabling prediction of behavior without direct simulation.

---

### **9. Alignment with Course Outcomes**

*   **CO1 (Represent continuous time systems in the classical domain):** The derivation of the characteristic equation from the transfer function directly aligns with representing systems in the classical (Laplace domain).
*   **CO2 (Analyse time domain responses and predict/diagnose transient response parameters):** The entire concept of pole-zero analysis and the relationship between pole locations and transient metrics (overshoot, settling time) directly addresses this outcome.
*   **CO3 (Analyse dynamics systems for performance and stability using Root locus):** While Root Locus is a separate topic, the characteristic equation is the foundational element upon which root locus plots are constructed. The analysis of how roots move with changes in system gain (a key aspect of root locus) is directly tied to the characteristic equation.
*   **CO4 (Analyse dynamics systems for performance and stability in frequency domain):** Although this topic focuses on the time domain/s-plane, the stability criteria derived from the characteristic equation (all poles in LHP) are foundational for understanding frequency domain stability methods like Nyquist and Bode plots.

---
**References Used:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th Ed.). Wiley. (Primarily Chapters 4, 5)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th Ed.). New Age. (Primarily Chapters 5, 6)
*   Ogata, K. (2009). *Modern Control Engineering* (5th Ed.). Pearson. (Primarily Chapter 6)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
