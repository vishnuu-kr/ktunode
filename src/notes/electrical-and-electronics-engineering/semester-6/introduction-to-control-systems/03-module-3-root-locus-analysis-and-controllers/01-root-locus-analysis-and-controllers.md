---
title: "Root Locus Analysis and Controllers"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c0"
status: "completed"
scrapedAt: "2026-05-23T16:29:33.381Z"
---
# Introduction to Control Systems: Module 3 - Root Locus Analysis and Controllers

This module delves into the powerful technique of **Root Locus Analysis** and its application in designing and improving control systems using various controllers. We will understand how the location of the closed-loop poles dictates system performance and stability, and how we can manipulate these poles using controller design.

---

## Module Objectives & Learning Outcomes (LOs)

Upon successful completion of this module, you will be able to:

*   **LO1: Understand the concept of Root Locus:** Explain what the Root Locus is and its significance in control system analysis. (Aligns with CO1, K2)
*   **LO2: Sketch the Root Locus:** Apply the rules for sketching the Root Locus of a closed-loop system. (Aligns with CO3, K3)
*   **LO3: Analyze system performance using Root Locus:** Relate the location of closed-loop poles on the Root Locus to transient response characteristics (e.g., damping ratio, natural frequency, settling time, peak overshoot). (Aligns with CO2, K2; CO3, K3)
*   **LO4: Design controllers using Root Locus:** Understand how different types of controllers (e.g., lead, lag, lead-lag) affect the Root Locus and system performance. (Aligns with CO3, K3)
*   **LO5: Apply Root Locus to stability analysis:** Determine system stability based on the location of closed-loop poles relative to the imaginary axis. (Aligns with CO3, K3)

---

## 1. Introduction to Root Locus Analysis

Root Locus is a graphical method used to determine the locations of the closed-loop poles of a system as a system parameter (usually the gain, $K$) varies from zero to infinity. It provides a comprehensive picture of how the system's transient response and stability change with variations in gain.

**Key Concepts:**

*   **Closed-loop Transfer Function:** For a standard unity feedback system, the closed-loop transfer function is given by:
    $$T(s) = \frac{G(s)}{1 + G(s)H(s)}$$
    where $G(s)$ is the open-loop transfer function and $H(s)$ is the feedback transfer function. In many introductory cases, $H(s) = 1$.
*   **Characteristic Equation:** The denominator of the closed-loop transfer function, set to zero, is the characteristic equation:
    $$1 + G(s)H(s) = 0$$
*   **Poles and Zeros:** The roots of the characteristic equation are the **closed-loop poles**. The roots of the numerator of the closed-loop transfer function are the **closed-loop zeros**.
*   **Open-loop Poles and Zeros:** The poles of the open-loop transfer function $G(s)H(s)$ are the open-loop poles. The zeros of the open-loop transfer function $G(s)H(s)$ are the open-loop zeros.

**Significance (LO1, CO1, K2):**

*   **Stability:** The location of the closed-loop poles determines the stability of the system. Poles in the left-half plane (LHP) lead to stable systems, while poles in the right-half plane (RHP) lead to unstable systems. Poles on the imaginary axis lead to marginal stability.
*   **Transient Response:** The location of closed-loop poles in the s-plane directly relates to the transient response characteristics such as settling time, rise time, peak overshoot, and damping ratio.
*   **Gain Variation:** Root Locus shows how the closed-loop poles move as the system gain ($K$) changes, allowing us to select an appropriate gain for desired performance.

**Textbook Reference:** Nise, Chapter 6 (Introduction to Root Locus)

---

## 2. Sketching the Root Locus (LO2, CO3, K3)

The Root Locus is plotted on the complex s-plane. The sketch is based on a set of rules derived from the characteristic equation.

**Characteristic Equation Form:**

$$1 + K \frac{(z_1)(z_2)...}{(p_1)(p_2)...} = 0$$
or
$$K = - \frac{1}{G(s)H(s)}$$

**Rules for Sketching the Root Locus:**

1.  **Number of Branches:** The number of root locus branches is equal to the number of open-loop poles. Each branch starts at an open-loop pole (for $K=0$) and terminates at an open-loop zero or at infinity (for $K \to \infty$).

2.  **Symmetry:** The root locus is symmetric with respect to the real axis because the closed-loop poles are either real or occur in complex conjugate pairs.

3.  **Starting and Ending Points:**
    *   For $K=0$, the locus branches start at the open-loop poles.
    *   For $K \to \infty$, the locus branches terminate at the open-loop zeros. If the number of open-loop poles ($n$) is greater than the number of open-loop zeros ($m$), then $(n-m)$ branches will go to infinity.

4.  **Root Locus on the Real Axis:** A point on the real axis is part of the root locus if there are an **odd** number of open-loop poles and zeros combined to the right of that point.

5.  **Asymptotes:** For $K \to \infty$, the locus branches that go to infinity approach straight lines called asymptotes.
    *   **Angle of Asymptotes:**
        $$\theta = \frac{(2l+1)\pi}{n-m}, \quad l = 0, 1, 2, ..., (n-m-1)$$
        where $n$ is the number of open-loop poles and $m$ is the number of open-loop zeros.
    *   **Centroid of Asymptotes:** The point where the asymptotes intersect the real axis is given by:
        $$\sigma_a = \frac{\sum (\text{real part of finite open-loop poles}) - \sum (\text{real part of finite open-loop zeros})}{n-m}$$

6.  **Asymptote Breakaway and Break-in Points:** These are points on the real axis where locus branches leave (breakaway) or enter (break-in) the real axis to move into the complex plane. They can be found by finding the roots of the derivative of the characteristic equation with respect to $K$:
    $$\frac{dK}{ds} = 0$$
    where $K$ is expressed as a function of $s$ from the characteristic equation. Alternatively, $s$ values where the second derivative of the characteristic equation is zero are candidates.

7.  **Intersection with the Imaginary Axis (J-axis):** This is the point where the system transitions from stable to unstable. It can be found using the Routh-Hurwitz criterion. Set $K$ to the value that makes a row of the Routh array all zeros. The roots of the auxiliary equation (formed from the row above the zero row) will lie on the imaginary axis. This determines the **critical gain ($K_{cr}$)** and the **frequency of oscillation ($\omega_{cr}$)**.

8.  **Angle of Departure/Arrival:**
    *   **Angle of Departure from a Pole $p_i$:**
        $$\theta_{d_i} = 180^\circ - \sum (\text{angle from } p_i \text{ to other poles}) + \sum (\text{angle from } p_i \text{ to zeros})$$
    *   **Angle of Arrival at a Zero $z_i$:**
        $$\theta_{a_i} = 180^\circ - \sum (\text{angle from } z_i \text{ to other zeros}) + \sum (\text{angle from } z_i \text{ to poles})$$

**Example (Nise, Example 6.3):**

Sketch the Root Locus for a unity feedback system with:
$$G(s)H(s) = \frac{K}{s(s+4)(s+8)}$$

*   **Open-loop poles:** $s=0$, $s=-4$, $s=-8$ ($n=3$)
*   **Open-loop zeros:** None ($m=0$)
*   **Number of branches:** 3

**(Detailed step-by-step sketching as per rules will be elaborated in class or can be followed in Nise's textbook for a complete visual understanding.)**

**Textbook Reference:** Nise, Chapter 6; Nagrath & Gopal, Chapter 10.

---

## 3. Analyzing System Performance using Root Locus (LO3, CO2, K2; CO3, K3)

The location of closed-loop poles on the Root Locus directly relates to the system's transient response characteristics.

**Relationship between Pole Location and Transient Response:**

Consider a dominant second-order system with closed-loop poles at $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$.

*   **Damping Ratio ($\zeta$):** This determines the oscillatory nature of the response.
    *   $\zeta = 1$: Critically damped (fastest response without overshoot)
    *   $0 < \zeta < 1$: Underdamped (overshoot and oscillations)
    *   $\zeta = 0$: Marginally stable (sustained oscillations)
    *   $\zeta < 0$: Unstable (growing oscillations)
*   **Natural Frequency ($\omega_n$):** This influences the speed of the response. Higher $\omega_n$ generally means a faster response.
*   **Settling Time ($T_s$):** For a 2% criterion, $T_s \approx \frac{4}{\zeta \omega_n}$. This is inversely proportional to the magnitude of the real part of the dominant poles.
*   **Peak Overshoot ($M_p$):** For a second-order system, $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$. This is related to the angle of the pole with respect to the real axis.

**Root Locus and Performance Specifications:**

We can draw lines on the s-plane corresponding to desired performance specifications:

*   **Constant $\zeta$ lines (Damping Ratio Lines):** These are lines radiating from the origin with an angle $\theta = \cos^{-1}(\zeta)$. If a locus branch crosses a $\zeta$ line, the system has that damping ratio.
*   **Constant $\omega_n$ lines (Natural Frequency Circles):** These are circles centered at the origin with radius $\omega_n$. If a locus branch crosses a $\omega_n$ circle, the system has that natural frequency.
*   **Constant $T_s$ lines (Settling Time Lines):** These are vertical lines at $s = -\frac{4}{T_s}$ (for 2% criterion). The locus must lie to the left of this line for the settling time requirement to be met.
*   **Constant $M_p$ lines (Peak Overshoot Lines):** These are curves that correspond to specific overshoot values.

**Example (LO3, CO3, K3):**

Suppose a system's root locus has a branch that crosses the line $\zeta = 0.707$ at $s = -2 + j2$.
*   From $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$, we have $-\zeta \omega_n = -2$ and $\omega_n \sqrt{1-\zeta^2} = 2$.
*   With $\zeta = 0.707$, we get $\omega_n = \frac{-2}{-0.707} \approx 2.83$ rad/s.
*   The system is underdamped ($\zeta < 1$).
*   The settling time is approximately $T_s \approx \frac{4}{\zeta \omega_n} = \frac{4}{2} = 2$ seconds.
*   The peak overshoot is $M_p = e^{-\frac{\pi (0.707)}{\sqrt{1-(0.707)^2}}} \approx e^{-2.46} \approx 0.085$ or 8.5%.

**Textbook Reference:** Nise, Chapter 6; Nagrath & Gopal, Chapter 10.

---

## 4. Controller Design using Root Locus (LO4, CO3, K3)

Root locus is a valuable tool for designing controllers to improve system performance. Controllers are typically added in the forward path to alter the open-loop transfer function $G(s)H(s)$ and thus modify the root locus.

**Types of Controllers and Their Effect on Root Locus:**

*   **Proportional (P) Controller:** $G_c(s) = K_p$. This is equivalent to changing the gain $K$ in the basic root locus. It can improve stability but cannot eliminate steady-state errors for certain inputs and may not significantly improve transient response without causing instability.

*   **Lead Compensator:**
    *   **Transfer Function:** $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $|p_c| > |z_c|$.
    *   **Effect on Root Locus:** Adds a zero and a pole, with the zero closer to the origin than the pole. The zero "attracts" the root locus branches, pulling them towards the left-half plane (improving stability and reducing overshoot). The pole "repels" the branches, but its effect is less pronounced if placed further to the left.
    *   **Performance Improvement:** Increases the system's speed of response, improves transient response (reduces overshoot), and generally increases the system's stability margin.

*   **Lag Compensator:**
    *   **Transfer Function:** $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $|z_c| > |p_c|$.
    *   **Effect on Root Locus:** Adds a zero and a pole, with the zero further from the origin than the pole. The pole "attracts" the root locus branches closer to the origin, potentially slowing down the response. The zero "repels" the branches. Crucially, the added poles and zeros are typically placed close to the origin so as not to drastically alter the dominant pole locations.
    *   **Performance Improvement:** Primarily used to improve the steady-state error by increasing the system's Type number (if the compensator adds an integrator or is placed after an integrator). It can also provide some phase margin improvement.

*   **Lead-Lag Compensator:** Combines the characteristics of both lead and lag compensators. It's designed to achieve both improved transient response and improved steady-state error.

**Design Process using Root Locus:**

1.  **Analyze the Uncompensated System:** Sketch the root locus for the original system $G(s)H(s)$. Determine its transient response characteristics and stability limits.
2.  **Determine Controller Requirements:** Based on the desired performance (e.g., required damping ratio, settling time, steady-state error), identify the desired location of the dominant closed-loop poles in the s-plane.
3.  **Design the Compensator:**
    *   **Lead Compensator:** Choose a lead compensator to shift the root locus to meet the desired performance specifications (often to increase damping or reduce overshoot). The zero and pole locations are chosen to pull the locus towards the desired pole location.
    *   **Lag Compensator:** Choose a lag compensator to improve steady-state error while minimally affecting transient response. The zero and pole are placed close to the origin.
    *   **Lead-Lag Compensator:** Design both parts to achieve desired improvements.
4.  **Verify the Design:** Sketch the root locus of the compensated system $G_c(s)G(s)H(s)$ and verify that the closed-loop poles are in the desired region of the s-plane. Analyze the new transient response.

**Example (Controller Design - Lead Compensator):**

Consider a system whose root locus is not satisfactory. We want to add a lead compensator $G_c(s) = K_c \frac{s+z_c}{s+p_c}$ to improve the damping ratio.
*   **Step 1:** Analyze the uncompensated system's root locus and find the open-loop poles and zeros.
*   **Step 2:** Determine the desired location of the closed-loop pole, say $s_d$, on the s-plane based on performance specs (e.g., $\zeta$, $T_s$).
*   **Step 3:** The uncompensated system's root locus might not pass through $s_d$. The lead compensator is designed to shift the locus.
    *   Choose a zero $z_c$ and a pole $p_c$ such that the locus of $1 + K_c \frac{(s+z_c)}{(s+p_c)}G(s)H(s) = 0$ passes through $s_d$.
    *   The angle condition for the compensated system at $s_d$ is $180^\circ = \angle(s_d+z_c) - \angle(s_d+p_c) + \angle G(s_d)H(s_d)$. The lead compensator adds an angle to satisfy this.
    *   Once $s_d$, $z_c$, and $p_c$ are chosen, the gain $K_c$ can be found using the magnitude condition: $K_c = \left|\frac{-(s_d+p_c)}{s_d+z_c} G(s_d)H(s_d)\right|^{-1}$.

**Textbook Reference:** Nise, Chapter 7 (Root Locus Design); Nagrath & Gopal, Chapter 10.

---

## 5. Stability Analysis using Root Locus (LO5, CO3, K3)

The root locus provides a direct way to assess system stability as the gain $K$ varies.

*   **Stability Region:** The left-half of the s-plane (where the real part of $s$ is negative) is the stable region for closed-loop poles.
*   **Instability:** If any closed-loop pole lies in the right-half of the s-plane (real part of $s$ is positive), the system is unstable.
*   **Marginal Stability:** If closed-loop poles lie on the imaginary axis (real part of $s$ is zero) and there are no poles in the RHP, the system is marginally stable (sustained oscillations).

**Determining Critical Gain ($K_{cr}$) and Frequency ($\omega_{cr}$):**

The points where the root locus crosses the imaginary axis represent the boundary between stability and instability. These can be found using the Routh-Hurwitz criterion as applied to the characteristic equation.

**Procedure:**

1.  Obtain the characteristic equation $1 + G(s)H(s) = 0$.
2.  Form the Routh array.
3.  Identify the value of $K$ that causes a row of zeros to appear in the Routh array. This value is the **critical gain ($K_{cr}$)**.
4.  The roots of the auxiliary equation (formed from the coefficients of the row just above the row of zeros) will lie on the imaginary axis. These roots are of the form $s = \pm j \omega_{cr}$, where $\omega_{cr}$ is the **critical frequency** or **frequency of oscillation**.
5.  Any gain $K < K_{cr}$ will result in closed-loop poles in the LHP (stable).
6.  Any gain $K > K_{cr}$ will result in at least one closed-loop pole in the RHP (unstable).

**Example (LO5, CO3, K3):**

For the system $G(s)H(s) = \frac{K}{s(s+2)(s+4)}$:
Characteristic Equation: $1 + \frac{K}{s(s+2)(s+4)} = 0$
$s(s^2 + 6s + 8) + K = 0$
$s^3 + 6s^2 + 8s + K = 0$

Routh Array:
| $s^3$ | 1   | 8   |
| :---- | :-- | :-- |
| $s^2$ | 6   | K   |
| $s^1$ | $b_1$ | 0   |
| $s^0$ | $c_1$ | 0   |

$b_1 = \frac{6 \times 8 - 1 \times K}{6} = \frac{48 - K}{6}$

For stability, all coefficients in the first column must be positive.
$6 > 0$ (True)
$b_1 > 0 \implies \frac{48 - K}{6} > 0 \implies 48 - K > 0 \implies K < 48$
$c_1 > 0 \implies K > 0$ (From the $s^0$ row, $c_1 = b_1 \times 0 - 6 \times 0 / b_1 = 0$ if $b_1$ is not zero. If $b_1 = 0$, then $c_1$ is the coefficient in the $s^0$ row which is $K$.)

The system is stable for $0 < K < 48$.

For marginal stability, we set $b_1 = 0$:
$\frac{48 - K}{6} = 0 \implies K = 48$.
This is the **critical gain ($K_{cr} = 48$)**.

The auxiliary equation is formed from the $s^2$ row: $6s^2 + K = 0$.
Substitute $K = 48$: $6s^2 + 48 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j 2\sqrt{2}$.
The **critical frequency ($\omega_{cr} = 2\sqrt{2}$ rad/s)**.

So, for $K = 48$, the closed-loop poles are on the imaginary axis. For $K > 48$, the system becomes unstable.

**Textbook Reference:** Nise, Chapter 6 (Root Locus and Stability); Nagrath & Gopal, Chapter 10.

---

## 6. Practice Questions and Answers

**Question 1 (LO1, LO3, CO1, CO3, K2):**
What is the primary purpose of Root Locus analysis in control systems?
A. To analyze steady-state error.
B. To determine the frequency response.
C. To visualize how closed-loop poles change with system gain and predict system stability and transient response.
D. To design controllers for optimal performance.

**Answer 1:** C

**Question 2 (LO2, LO5, CO3, K3):**
For the open-loop transfer function $G(s)H(s) = \frac{K}{(s+1)(s+3)}$, determine the value of $K$ for which the root locus crosses the imaginary axis and the corresponding frequency of oscillation.

**Answer 2:**
Characteristic equation: $1 + \frac{K}{(s+1)(s+3)} = 0$
$(s+1)(s+3) + K = 0$
$s^2 + 4s + 3 + K = 0$

Routh Array:
| $s^2$ | 1   | 3+K |
| :---- | :-- | :-- |
| $s^1$ | 4   | 0   |
| $s^0$ | 3+K | 0   |

For stability, all first column elements must be positive.
$1 > 0$ (True)
$4 > 0$ (True)
$3+K > 0 \implies K > -3$.

The root locus crosses the imaginary axis when the $s^0$ row becomes zero. This occurs when $3+K = 0$, so $K = -3$. However, typically gain $K$ is considered positive. If $K$ is positive, the system is stable for all $K > 0$ as there are no poles in the RHP.

Let's consider a system with poles that would eventually lead to instability. For instance, if $G(s)H(s) = \frac{K}{s(s-1)}$:
$1 + \frac{K}{s(s-1)} = 0$
$s^2 - s + K = 0$

Routh Array:
| $s^2$ | 1   | K   |
| :---- | :-- | :-- |
| $s^1$ | -1  | 0   |
| $s^0$ | K   | 0   |

For stability, the $s^1$ row must not have a sign change. This requires -1 to be positive, which is not possible. This indicates that for any positive $K$, there will be a pole in the RHP due to the pole at $s=1$ in the open-loop system.

Let's use the example $G(s)H(s) = \frac{K}{(s+1)(s+2)}$:
Characteristic equation: $s^2 + 3s + 2 + K = 0$

Routh Array:
| $s^2$ | 1   | 2+K |
| :---- | :-- | :-- |
| $s^1$ | 3   | 0   |
| $s^0$ | 2+K | 0   |

For stability: $1>0$, $3>0$, $2+K>0 \implies K>-2$. For positive K, stable.

Let's re-examine Question 2 with the correct approach for crossing the imaginary axis for a typical stable system's instability boundary. Consider $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$
Characteristic Equation: $s^3 + 3s^2 + 2s + K = 0$

Routh Array:
| $s^3$ | 1   | 2   |
| :---- | :-- | :-- |
| $s^2$ | 3   | K   |
| $s^1$ | $b_1$ | 0   |
| $s^0$ | $c_1$ | 0   |

$b_1 = \frac{3 \times 2 - 1 \times K}{3} = \frac{6-K}{3}$
$c_1 = K$

For stability, $b_1 > 0 \implies \frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$. And $c_1 > 0 \implies K > 0$.
So, for $0 < K < 6$, the system is stable.

The root locus crosses the imaginary axis when $b_1 = 0$.
$\frac{6-K}{3} = 0 \implies K = 6$.
This is the **critical gain ($K_{cr} = 6$)**.

The auxiliary equation is from the $s^2$ row: $3s^2 + K = 0$.
Substitute $K = 6$: $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
The **frequency of oscillation ($\omega_{cr} = \sqrt{2}$ rad/s)**.

**Question 3 (LO4, CO3, K3):**
A lead compensator is typically used to:
A. Improve steady-state error.
B. Increase the system's rise time and reduce overshoot.
C. Reduce the system's bandwidth.
D. Make an unstable system stable by increasing gain.

**Answer 3:** B

**Question 4 (LO3, CO2, CO3, K2):**
If a closed-loop pole of a second-order system is located at $s = -4 + j3$, what is the approximate settling time (2% criterion) and damping ratio?

**Answer 4:**
The pole is $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$.
Real part: $-\zeta \omega_n = -4$
Imaginary part: $\omega_n \sqrt{1-\zeta^2} = 3$
Damping ratio: $\zeta = \frac{4}{\omega_n}$
Substitute $\zeta$ into the imaginary part equation: $\omega_n \sqrt{1 - (\frac{4}{\omega_n})^2} = 3$
$\omega_n \sqrt{1 - \frac{16}{\omega_n^2}} = 3$
$\sqrt{\omega_n^2 - 16} = 3$
$\omega_n^2 - 16 = 9$
$\omega_n^2 = 25 \implies \omega_n = 5$ rad/s.

Now, find $\zeta$: $\zeta = \frac{4}{\omega_n} = \frac{4}{5} = 0.8$.
Settling Time ($T_s \approx \frac{4}{\zeta \omega_n}$): $T_s \approx \frac{4}{4} = 1$ second.

So, the approximate settling time is 1 second and the damping ratio is 0.8.

---

## 7. Important Points to Remember

*   **Root Locus:** A plot of the closed-loop poles as the gain $K$ varies from $0$ to $\infty$.
*   **Rules for Sketching:** Master the rules to accurately sketch the root locus. The number of branches equals the number of open-loop poles. Branches start at open-loop poles and end at open-loop zeros or infinity. Real axis points have an odd number of LHP poles/zeros. Asymptotes and breakaway/break-in points are crucial for large $K$ behavior.
*   **Pole Location = Performance:** The location of closed-loop poles in the s-plane is directly linked to transient response (overshoot, settling time) and stability.
*   **Controller Purpose:** Lead compensators improve transient response (speed, damping), lag compensators improve steady-state error, and lead-lag compensators do both.
*   **Stability Boundary:** The imaginary axis is the stability boundary. Crossing into the RHP means instability. $K_{cr}$ and $\omega_{cr}$ identify this boundary.
*   **Dominant Second-Order System:** The concept of approximating higher-order systems with dominant second-order poles is often used when applying Root Locus for performance analysis.

---

## 8. Alignment with Course Outcomes

*   **CO1 (Represent systems):** Root locus starts from the system's open-loop transfer function, which is a representation in the classical domain. Understanding the characteristic equation is fundamental. (K2)
*   **CO2 (Analyze time domain responses):** The direct link between pole locations on the root locus and transient response parameters (overshoot, settling time) directly addresses this outcome. (K2)
*   **CO3 (Analyze dynamics using Root Locus):** This is the core of the module. All aspects of sketching, relating poles to performance, designing controllers, and assessing stability via root locus are covered here. (K3)
*   **CO4 (Analyze in frequency domain):** While this module focuses on the time domain (s-plane), the concepts of stability are common to both domains. The critical frequency $\omega_{cr}$ is a frequency domain concept derived from the s-plane analysis. (K3)
*   **CO5 (Represent systems):** Similar to CO1, the foundation of root locus lies in representing the system's characteristic equation. (K2)

---
This comprehensive set of notes covers Module 3: Root Locus Analysis and Controllers, providing you with the fundamental knowledge and analytical skills required for this topic in Introduction to Control Systems. Remember to practice sketching and analyzing various systems to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
