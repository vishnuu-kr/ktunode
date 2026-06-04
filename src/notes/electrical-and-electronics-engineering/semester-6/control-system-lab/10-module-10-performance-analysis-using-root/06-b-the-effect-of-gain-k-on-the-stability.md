---
title: "b. The effect of gain, K on the stability."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677d"
status: "completed"
scrapedAt: "2026-05-23T16:25:27.115Z"
---
# Control System Lab: Module 10 - Performance Analysis using Root Locus

## Topic: b. The Effect of Gain, K on Stability

### 1. Introduction and Learning Outcomes

This section focuses on understanding how the **gain (K)** of a feedback control system influences its **stability**. We will explore this through the lens of the **Root Locus** method, a powerful graphical tool for analyzing system behavior.

**Learning Outcomes for this Topic:**

*   **Understand the relationship between system gain (K) and stability.**
*   **Identify the range of K values for which a system is stable, marginally stable, and unstable.**
*   **Determine the "critical gain" (K_crit) and "corner frequency" associated with stability boundaries.**
*   **Interpret the location of closed-loop poles on the s-plane with respect to the imaginary axis as an indicator of stability.**
*   **Relate the gain K to the damping ratio and natural frequency of the system's dominant poles.**

### 2. Key Concepts and Definitions

#### 2.1. Stability in Control Systems

*   **Definition:** A system is considered stable if, for every finite input, the output is also finite. In other words, the system's response does not grow unboundedly over time.
*   **Routh-Hurwitz Criterion:** A purely algebraic method to determine stability without explicitly finding the roots of the characteristic equation. It relies on the coefficients of the characteristic polynomial.
*   **Root Locus:** A graphical method that plots the locations of the **closed-loop poles** of a system as the **open-loop gain (K)** is varied from zero to infinity.

#### 2.2. Closed-Loop Poles and Stability

*   **Characteristic Equation:** For a unity feedback system with open-loop transfer function $G(s)H(s)$, the characteristic equation is $1 + K G(s)H(s) = 0$. The roots of this equation are the closed-loop poles.
*   **Stability Condition:** A linear time-invariant (LTI) system is stable if and only if **all** of its closed-loop poles lie in the **left-half of the s-plane (LHP)**.
    *   **Left-Half Plane (LHP):** $\text{Re}(s) < 0$.
    *   **Right-Half Plane (RHP):** $\text{Re}(s) > 0$.
    *   **Imaginary Axis:** $\text{Re}(s) = 0$.

#### 2.3. The Role of Gain (K)

*   **Gain:** A multiplicative factor in the open-loop transfer function that amplifies the input signal.
*   **Effect on Pole Locations:** As the gain $K$ is varied, the closed-loop poles move along the root locus branches. The primary effect of increasing $K$ is generally to move the poles further into the LHP or towards instability if they cross the imaginary axis.

#### 2.4. Marginal Stability

*   **Definition:** A system is marginally stable if its output oscillates with constant amplitude for some finite input or if there are roots on the imaginary axis and no roots in the RHP.
*   **Condition:** If any closed-loop poles lie on the imaginary axis ($\text{Re}(s) = 0$) and the remaining poles are in the LHP, the system is marginally stable. Repeated roots on the imaginary axis lead to instability.

#### 2.5. Critical Gain ($K_{crit}$)

*   **Definition:** The value of gain $K$ at which the root locus branches cross the imaginary axis. This is the boundary between stability and instability.
*   **Corner Frequency ($\omega_c$):** The frequency at which the root locus crosses the imaginary axis.

### 3. Understanding Stability through Root Locus

The Root Locus method directly visualizes the impact of gain on pole locations.

*   **Initial State (K=0):** The closed-loop poles are at the open-loop poles. If any open-loop poles are in the RHP, the system is initially unstable.
*   **As K increases:** The closed-loop poles move along the root locus branches.
    *   If a branch moves into the LHP, stability improves (or remains stable).
    *   If a branch moves into the RHP, stability degrades, and the system can become unstable.
    *   If a branch crosses the imaginary axis, the system transitions from stable to unstable (or vice-versa). The gain at this point is $K_{crit}$.

#### 3.1. Detecting Instability from Root Locus

*   **Presence of Poles in RHP:** If any portion of the root locus lies in the RHP for any positive value of $K$, the system can become unstable.
*   **Crossing the Imaginary Axis:** The most common way gain affects stability is by causing branches to cross the imaginary axis.

### 4. Practical Implications and Examples

Let's consider a unity feedback system with an open-loop transfer function:

$G(s)H(s) = \frac{K}{s(s+2)}$

**Analysis:**

1.  **Characteristic Equation:** $1 + K \frac{1}{s(s+2)} = 0$
    $s(s+2) + K = 0$
    $s^2 + 2s + K = 0$

2.  **Closed-loop Poles:** The roots of $s^2 + 2s + K = 0$ are given by the quadratic formula:
    $s = \frac{-2 \pm \sqrt{2^2 - 4(1)(K)}}{2(1)}$
    $s = \frac{-2 \pm \sqrt{4 - 4K}}{2}$
    $s = -1 \pm \sqrt{1 - K}$

3.  **Stability Analysis based on K:**

    *   **Case 1: $0 < K < 1$**
        $s = -1 \pm j\sqrt{K-1}$
        The poles are complex and located in the LHP ($\text{Re}(s) = -1 < 0$). The system is **stable**. As $K$ increases, the imaginary part increases (oscillations become faster), and the real part remains at -1.

    *   **Case 2: $K = 1$**
        $s = -1 \pm \sqrt{1 - 1} = -1$
        The poles are real and repeated at $s = -1$. The system is **stable**.

    *   **Case 3: $K > 1$**
        $s = -1 \pm \sqrt{-(K-1)} = -1 \pm j\sqrt{K-1}$ (Mistake in earlier expression, corrected here)
        **Corrected analysis:**
        $s = \frac{-2 \pm \sqrt{4 - 4K}}{2} = -1 \pm \sqrt{1-K}$

        *   **If $K < 1$**: $1-K > 0$, $s = -1 \pm \sqrt{1-K}$ (real poles). Both poles are in the LHP, so stable.
        *   **If $K = 1$**: $s = -1$ (repeated real pole), stable.
        *   **If $K > 1$**: $1-K < 0$, $s = -1 \pm j\sqrt{K-1}$ (complex conjugate poles). The real part is $-1$, so both poles are in the LHP, and the system remains **stable**.

        **Let's re-examine the example for a better illustration of stability change.**

**Revised Example:**

Consider a unity feedback system with an open-loop transfer function:

$G(s)H(s) = \frac{K}{s(s+2)(s+4)}$

1.  **Characteristic Equation:** $1 + K \frac{1}{s(s+2)(s+4)} = 0$
    $s(s+2)(s+4) + K = 0$
    $s(s^2 + 6s + 8) + K = 0$
    $s^3 + 6s^2 + 8s + K = 0$

2.  **Routh-Hurwitz Criterion to find $K_{crit}$:**

    Construct the Routh array:

    | $s^3$ | 1       | 8       |
    | :---- | :------ | :------ |
    | $s^2$ | 6       | K       |
    | $s^1$ | $b_1$   | 0       |
    | $s^0$ | $c_1$   | 0       |

    Calculate the elements:
    $b_1 = \frac{(6)(8) - (1)(K)}{6} = \frac{48 - K}{6}$
    $c_1 = \frac{(b_1)(K) - (6)(0)}{b_1} = K$

    For stability, all elements in the first column must be positive:
    *   $1 > 0$ (True)
    *   $6 > 0$ (True)
    *   $b_1 = \frac{48 - K}{6} > 0 \implies 48 - K > 0 \implies K < 48$
    *   $c_1 = K > 0$ (True)

    Therefore, the system is stable for $0 < K < 48$.
    *   **Critical Gain ($K_{crit}$):** $K_{crit} = 48$.
    *   **Marginal Stability:** Occurs when $K = K_{crit} = 48$. The $s^1$ row becomes zero.
        When $K=48$, the $s^1$ row is [0]. The auxiliary equation is formed from the $s^2$ row: $6s^2 + K = 0 \implies 6s^2 + 48 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2\sqrt{2}$.
        These are poles on the imaginary axis, indicating **marginal stability**.

    *   **Instability:** For $K > 48$, $b_1$ becomes negative, meaning there will be at least one pole in the RHP, leading to **instability**.

#### 4.1. Root Locus Plot Interpretation

When you plot the root locus for $G(s)H(s) = \frac{K}{s(s+2)(s+4)}$:

*   You will see three branches starting from the open-loop poles at $s=0$, $s=-2$, and $s=-4$.
*   As $K$ increases, these poles move.
*   One branch will eventually cross the imaginary axis. This crossing point and the corresponding gain value represent the point of marginal stability.
*   For $K$ values beyond this crossing point, the poles associated with that branch will be in the RHP, signifying instability.

**Key Takeaway:** The root locus graphically shows how increasing gain can move closed-loop poles from the LHP (stable) to the RHP (unstable).

### 5. Relating Gain to Dominant Pole Specifications

The closed-loop poles determine the transient response characteristics like settling time ($T_s$), rise time ($T_r$), and peak overshoot ($M_p$). These are often related to the damping ratio ($\zeta$) and natural frequency ($\omega_n$) of the dominant second-order poles.

For a second-order system with characteristic equation $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$, the poles are at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.

If the higher-order poles are far from the dominant poles, they don't significantly affect the transient response.

Consider the example $s^2 + 2s + K = 0$.
Comparing with $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
*   $\omega_n^2 = K \implies \omega_n = \sqrt{K}$
*   $2\zeta\omega_n = 2 \implies \zeta\omega_n = 1 \implies \zeta = \frac{1}{\omega_n} = \frac{1}{\sqrt{K}}$

*   **Effect of K on $\zeta$ and $\omega_n$**:
    *   As $K$ increases, $\omega_n$ increases (response becomes faster).
    *   As $K$ increases, $\zeta$ decreases (response becomes more oscillatory, closer to instability).
    *   When $K=1$, $\zeta=1$ (overdamped).
    *   When $K>1$, the poles become complex. For $K=2$, $\zeta = 1/\sqrt{2} \approx 0.707$. For $K=4$, $\zeta = 1/\sqrt{4} = 0.5$. As $K$ gets larger, $\zeta$ approaches 0, meaning the poles move closer to the imaginary axis, increasing oscillations and potentially leading to instability.

### 6. Alignment with Course Outcomes

*   **CO1 (Model a physical system):** While this topic doesn't directly involve modeling, understanding the parameters like $K$ is crucial for model validation and simulation.
*   **CO2 (Determine performance specifications):** This topic directly addresses how gain affects stability, a fundamental performance specification. We see how varying $K$ impacts pole locations, which in turn dictates transient response characteristics.
*   **CO3 (Analyse a linear continuous time system model using simulation tools):** The Root Locus method itself is a simulation tool (graphical). Understanding the effect of $K$ on stability is a core analysis technique used in simulations. You would use tools like MATLAB (Control System Toolbox) to plot root loci and observe the effect of gain.
*   **CO4 (Design suitable controllers/compensators):** Understanding how gain affects stability is foundational for controller design. Designers often manipulate gain as part of a controller (e.g., in PID controllers) to meet stability and performance requirements. If a system is unstable, increasing gain is generally not the solution; it often requires compensation techniques to shift the root locus.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook and Reference Material Support

*   **Ogata (Modern Control Engineering):** Chapter 6 (Root Locus) thoroughly covers the construction of root loci and the interpretation of pole locations as gain varies. It provides detailed examples of how gain affects stability and transient response.
*   **Nise (Control Systems Engineering):** Chapter 6 (Root Locus) also offers comprehensive coverage, including methods to determine gain values at which the locus crosses the imaginary axis, thus finding $K_{crit}$.
*   **Nagrath & Gopal (Control Systems Engineering):** Similar to the above, they detail the graphical interpretation of the root locus and the direct impact of gain on the location of closed-loop poles relative to the stability boundaries.

### 8. Practice Questions and Exercises

**Question 1:**
For the unity feedback system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+3)}$, what is the range of gain $K$ for which the closed-loop system is stable? What is the critical gain $K_{crit}$?

**Answer 1:**
1.  **Characteristic Equation:** $1 + \frac{K}{s(s+1)(s+3)} = 0$
    $s(s^2 + 4s + 3) + K = 0$
    $s^3 + 4s^2 + 3s + K = 0$

2.  **Routh Array:**
    | $s^3$ | 1     | 3     |
    | :---- | :---- | :---- |
    | $s^2$ | 4     | K     |
    | $s^1$ | $b_1$ | 0     |
    | $s^0$ | $c_1$ | 0     |

    $b_1 = \frac{(4)(3) - (1)(K)}{4} = \frac{12 - K}{4}$
    $c_1 = K$

3.  **Stability Condition:** For stability, all first column elements must be positive.
    *   $1 > 0$ (True)
    *   $4 > 0$ (True)
    *   $b_1 = \frac{12 - K}{4} > 0 \implies 12 - K > 0 \implies K < 12$
    *   $c_1 = K > 0$ (True)

    Thus, the system is stable for $0 < K < 12$.

4.  **Critical Gain:** $K_{crit} = 12$.

**Question 2:**
Consider a system with characteristic equation $s^3 + 2s^2 + 4s + 8 = 0$.
a) Is the system stable?
b) If this equation was derived from $1 + K G(s)H(s) = 0$, and $K$ was initially part of the $s^0$ term of the polynomial, what value of $K$ would lead to marginal stability?

**Answer 2:**
a) **Stability Check using Routh-Hurwitz:**
    | $s^3$ | 1 | 4 |
    | :---- | :-: | :-: |
    | $s^2$ | 2 | 8 |
    | $s^1$ | $b_1$ | 0 |
    | $s^0$ | $c_1$ | 0 |

    $b_1 = \frac{(2)(4) - (1)(8)}{2} = \frac{8 - 8}{2} = 0$.
    Since an element in the $s^1$ row is zero, we need to form an auxiliary equation from the $s^2$ row: $2s^2 + 8 = 0 \implies s^2 = -4 \implies s = \pm j2$.
    Since we have poles on the imaginary axis and no poles in the RHP (as the $s^1$ row was zero, not negative), the system is **marginally stable**.

b) If the characteristic equation was $s^3 + 2s^2 + 4s + K = 0$:
    The Routh array would be:
    | $s^3$ | 1 | 4 |
    | :---- | :-: | :-: |
    | $s^2$ | 2 | K |
    | $s^1$ | $b_1$ | 0 |
    | $s^0$ | $c_1$ | 0 |

    $b_1 = \frac{(2)(4) - (1)(K)}{2} = \frac{8 - K}{2}$.
    For marginal stability, the $s^1$ row must be zero. This occurs when $8 - K = 0$.
    Therefore, **$K = 8$** would lead to marginal stability.

### 9. Important Points to Remember

*   **Stability is determined by the location of closed-loop poles.** All poles must be in the Left-Half Plane (LHP).
*   **Increasing gain (K) can move closed-loop poles.** This movement is visualized by the Root Locus.
*   **Crossing the imaginary axis signifies a transition to instability.** The gain at this point is the critical gain ($K_{crit}$).
*   **Marginal stability occurs when poles lie on the imaginary axis.**
*   **Root locus plots are essential tools** for understanding the effect of gain on stability and for designing controllers to achieve desired stability margins.
*   Always check the signs of the first column of the Routh array for stability. A sign change indicates instability.

This concludes the study notes on the effect of gain $K$ on stability in control systems, utilizing the Root Locus method and Routh-Hurwitz criterion.