---
title: "Objective:"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36779"
status: "completed"
scrapedAt: "2026-05-23T16:25:24.087Z"
---
# Module 10: Performance Analysis using Root Locus

## Topic Objective

The primary objective of this module is to understand and utilize the **Root Locus** technique for analyzing and predicting the performance of a control system. This involves understanding how the location of the closed-loop poles in the s-plane affects system stability, transient response, and steady-state accuracy. Through practical application, students will learn to interpret root locus plots, design compensators, and validate their designs.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the fundamental concept of the root locus and its relationship to the closed-loop poles.**
*   **Sketch the root locus plot for a given open-loop transfer function.**
*   **Determine the effects of varying a single parameter (gain) on system stability and transient response.**
*   **Analyze and predict system performance characteristics (e.g., damping ratio, natural frequency, settling time, rise time, overshoot) from the root locus.**
*   **Design compensators (lead, lag, lead-lag) using the root locus method to meet desired performance specifications.**
*   **Validate root locus analysis and design using simulation tools.**
*   **Relate the root locus technique to the overall modeling and performance evaluation of control systems.**

## Key Concepts and Definitions

### 10.1 Introduction to the Root Locus Method

*   **What is Root Locus?**
    *   The root locus is a graphical method used to determine the locations of the **closed-loop poles** of a control system as a system parameter (typically the open-loop gain, $K$) is varied from 0 to infinity.
    *   The locus of these poles provides crucial information about system stability and transient response.

*   **Why use Root Locus?**
    *   Provides a visual understanding of how parameter variations affect system behavior.
    *   Facilitates the design of controllers to achieve desired performance specifications.
    *   Helps in understanding the trade-offs between stability and transient response.
    *   It is a powerful tool for analyzing systems with uncertainty in parameter values.

*   **Foundation:** The root locus is based on the **characteristic equation** of a closed-loop system:
    $1 + G(s)H(s) = 0$
    where $G(s)$ is the forward path transfer function and $H(s)$ is the feedback path transfer function. The roots of this equation are the closed-loop poles.

*   **Relationship to Stability:**
    *   A system is stable if all closed-loop poles lie in the left-half of the s-plane (LHP).
    *   The root locus shows how the poles move as $K$ changes. If any part of the locus crosses into the right-half of the s-plane (RHP), the system becomes unstable for certain values of $K$.
    *   The **point where the locus crosses the imaginary axis** indicates the **absolute stability limit** or the **critical gain** ($K_{crit}$) and **critical frequency** ($\omega_{crit}$).

### 10.2 Fundamentals of the Root Locus

*   **The Characteristic Equation:**
    The characteristic equation is typically expressed as $1 + K G(s) H(s) = 0$.
    The roots of this equation are the closed-loop poles.
    Rearranging, we get $G(s)H(s) = -1$.

*   **Conditions for a Point 's' to be on the Locus:**
    A point $s$ in the s-plane is on the root locus if it satisfies both the **magnitude condition** and the **angle condition**:
    1.  **Magnitude Condition:** $|G(s)H(s)| = \frac{1}{K}$
    2.  **Angle Condition:** $\angle G(s)H(s) = (2n + 1)180^\circ$, where $n = 0, \pm 1, \pm 2, \dots$

*   **Open-Loop Poles and Zeros:**
    *   **Open-loop poles:** The roots of the denominator of $G(s)H(s)$. These are the starting points of the root locus branches for $K=0$.
    *   **Open-loop zeros:** The roots of the numerator of $G(s)H(s)$. These are the ending points of the root locus branches as $K \to \infty$.
    *   The number of root locus branches is equal to the number of open-loop poles, assuming the number of open-loop poles is greater than or equal to the number of open-loop zeros. If there are more zeros than poles, additional zeros at infinity exist.

*   **Reference:**
    *   **Ogata:** Chapter 6, "Root Locus Techniques."
    *   **Nise:** Chapter 6, "Root Locus Techniques."
    *   **Nagrath & Gopal:** Chapter 6, "Root Locus Techniques."

### 10.3 Sketching the Root Locus Plot (Rules)

These rules allow us to systematically sketch the root locus without needing to find the roots for every value of $K$.

1.  **Number of Branches:** There are as many branches as there are open-loop poles. Each branch starts at an open-loop pole (for $K=0$) and ends at an open-loop zero or at infinity.

2.  **Real Axis Segments:** Root locus branches on the real axis exist in segments to the left of an **odd** number of real poles and zeros.

3.  **Symmetry:** The root locus is always symmetrical with respect to the real axis.

4.  **Center of Asymptotes:** If the number of open-loop poles ($p$) is greater than the number of open-loop zeros ($z$), then $p-z$ branches tend to infinity. These branches approach straight lines called **asymptotes**. The intersection of these asymptotes with the real axis (centroid) is given by:
    $\sigma_a = \frac{\sum (\text{real part of finite poles}) - \sum (\text{real part of finite zeros})}{p-z}$

5.  **Slopes of Asymptotes:** The angles of the asymptotes are given by:
    $\theta_a = \frac{(2n+1)180^\circ}{p-z}$, for $n = 0, 1, 2, \dots, p-z-1$

6.  **Imaginary Axis Intersections:** The points where the root locus crosses the imaginary axis can be found by using the Routh-Hurwitz stability criterion on the characteristic equation. The system is on the verge of instability when a row of the Routh array becomes zero. The roots of the auxiliary equation (formed from the row above the zero row) give the imaginary axis poles.

7.  **Breakaway Points and Break-in Points:**
    *   **Breakaway points:** Points on the real axis where a locus branch leaves the real axis to enter the complex plane. These occur where the locus branches diverge. They are found by solving $\frac{dK}{ds} = 0$ or $\frac{d}{ds} [G(s)H(s)^{-1}] = 0$.
    *   **Break-in points:** Points on the real axis where two locus branches converge and enter the real axis. These occur where the locus branches join. They are also found by solving $\frac{dK}{ds} = 0$.

8.  **Angle of Departure and Arrival:**
    *   **Angle of Departure:** The angle at which a locus branch leaves an open-loop pole in the complex plane. For a pole $s_0$, the angle of departure is:
        $\phi_d = 180^\circ - \sum (\text{angles subtended by other poles from } s_0) + \sum (\text{angles subtended by zeros from } s_0)$
    *   **Angle of Arrival:** The angle at which a locus branch arrives at an open-loop zero in the complex plane. For a zero $s_z$, the angle of arrival is:
        $\phi_a = 180^\circ - \sum (\text{angles subtended by poles from } s_z) + \sum (\text{angles subtended by other zeros from } s_z)$

9.  **Intersection with the Imaginary Axis:** Found using the Routh-Hurwitz criterion as described in rule 6.

10. **Centroid revisited:** For systems with $p-z \ge 2$, the asymptotes must intersect the real axis at the centroid $\sigma_a$.

11. **Number of Asymptotes:** The number of asymptotes is $|p-z|$.

*   **Reference:**
    *   **Ogata:** Chapter 6, Section 6-3, "Properties of the Root Locus."
    *   **Nise:** Chapter 6, Section 6-2, "Rules for Sketching the Root Locus."
    *   **Nagrath & Gopal:** Chapter 6, Section 6.3, "Construction of the Root Locus."

### 10.4 Interpretation of Root Locus for Performance Analysis

The location of closed-loop poles in the s-plane dictates the system's transient and steady-state response.

*   **Damping Ratio ($\zeta$):**
    *   Lines of constant $\zeta$ are radial lines originating from the origin with an angle $\theta = \cos^{-1}(\zeta)$.
    *   $\zeta = \cos(\theta)$
    *   Higher $\zeta$ means less overshoot and faster settling.

*   **Natural Undamped Frequency ($\omega_n$):**
    *   Lines of constant $\omega_n$ are semi-circles centered at the origin with radius $\omega_n$.
    *   $\omega_n = \sqrt{\sigma^2 + \omega^2}$, where the pole is at $s = -\sigma + j\omega$.

*   **Settling Time ($T_s$):**
    *   Approximated as $T_s \approx \frac{4}{\sigma}$ (for 2% criterion) or $T_s \approx \frac{3}{\sigma}$ (for 5% criterion).
    *   The closer the dominant poles are to the imaginary axis (smaller $\sigma$), the longer the settling time.
    *   Lines of constant settling time are vertical lines at $s = -\sigma$.

*   **Rise Time ($T_r$):**
    *   Approximated as $T_r \approx \frac{1.8}{\omega_n}$ (for underdamped systems).
    *   Larger $\omega_n$ generally leads to a faster rise time.

*   **Peak Overshoot ($M_p$):**
    *   $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$
    *   Higher $\zeta$ leads to lower overshoot.

*   **Steady-State Error:**
    *   The root locus primarily analyzes transient response. Steady-state error is typically analyzed using the final value theorem and is related to the system type and the input. While not directly on the root locus plot, changes in gain (which affect the locus) can impact steady-state error by altering the system type or by moving poles closer to the origin.

*   **Example:** If a root locus branch passes through a point $s = -2 + j3$:
    *   $\sigma = 2$, $\omega = 3$.
    *   $\zeta = \frac{|-\sigma|}{\omega_n} = \frac{2}{\sqrt{(-2)^2 + 3^2}} = \frac{2}{\sqrt{13}} \approx 0.55$ (moderately damped).
    *   $\omega_n = \sqrt{(-2)^2 + 3^2} = \sqrt{13} \approx 3.61$ rad/s.
    *   $T_s \approx \frac{4}{2} = 2$ seconds (for 2% criterion).
    *   $T_r \approx \frac{1.8}{\sqrt{13}} \approx 0.5$ seconds.
    *   $M_p = e^{-\frac{\pi (0.55)}{\sqrt{1-0.55^2}}} \approx e^{-1.88} \approx 15.2\%$

*   **Reference:**
    *   **Ogata:** Chapter 6, Section 6-4, "Sensitivity of Roots."
    *   **Nise:** Chapter 6, Section 6-4, "Design of Controllers Using the Root Locus."
    *   **Nagrath & Gopal:** Chapter 6, Section 6.4, "Performance Indices from Root Locus."

### 10.5 Design of Controllers/Compensators using Root Locus

The root locus method is extensively used for designing controllers/compensators to modify the transient response and improve stability.

*   **Purpose of Compensators:** To shift the root locus to achieve desired performance specifications (e.g., desired damping ratio, settling time, or reduce steady-state error).

*   **Types of Compensators:**
    1.  **Lead Compensator:**
        *   **Transfer Function:** $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $|z_c| < |p_c|$.
        *   **Effect:** Adds a zero and a pole, with the zero closer to the origin. Increases the system's bandwidth, improves transient response (reduces rise time and overshoot), and generally shifts the dominant poles further into the LHP.
        *   **Root Locus Effect:** Shifts the root locus to the left, often improving stability.
        *   **Design Goal:** Primarily to improve transient response (reduce overshoot, speed up response) by increasing the damping ratio.

    2.  **Lag Compensator:**
        *   **Transfer Function:** $G_c(s) = K_c \frac{s + z_c}{s + p_c}$, where $|z_c| > |p_c|$.
        *   **Effect:** Adds a zero and a pole, with the pole closer to the origin. Improves steady-state accuracy by increasing the low-frequency gain. Transient response may be slightly degraded (slower).
        *   **Root Locus Effect:** Can reshape the locus to improve steady-state error without significantly impacting transient response. The zero and pole are typically placed close to the origin to minimize transient effects.
        *   **Design Goal:** Primarily to improve steady-state error by increasing the system type.

    3.  **Lag-Lead Compensator:**
        *   **Transfer Function:** $G_c(s) = K_c \frac{(s + z_1)(s + z_2)}{(s + p_1)(s + p_2)}$. Often designed as a combination of a lag and a lead compensator.
        *   **Effect:** Combines the benefits of lag and lead compensators. Can improve both transient response and steady-state accuracy.
        *   **Design Goal:** To achieve significant improvements in both transient and steady-state performance.

*   **Design Procedure (General):**
    1.  **Analyze the uncompensated system:** Sketch the root locus and determine its existing performance characteristics.
    2.  **Determine desired pole location:** Based on the performance specifications (e.g., $\zeta$, $\omega_n$, $T_s$), find the desired location for the dominant closed-loop poles in the s-plane. This defines a target region.
    3.  **Select the type of compensator:** Based on whether the primary goal is to improve transient response (lead), steady-state error (lag), or both (lag-lead).
    4.  **Design the compensator:**
        *   **Lead Compensator Design:**
            *   Choose a location for the compensator pole and zero such that the root locus passes through the desired dominant pole location. The zero is usually placed to cancel an open-loop pole or close to an open-loop pole. The pole is placed further into the LHP.
            *   The angle condition must be satisfied at the desired pole location with the compensator included: $\angle G_c(s)G(s)H(s) = 180^\circ$.
            *   The compensator gain ($K_c$) is then determined to satisfy the magnitude condition at the desired pole location.
        *   **Lag Compensator Design:**
            *   Choose the location of the compensator zero and pole close to the origin. The zero is typically placed slightly to the left of the pole.
            *   The primary goal is to increase the static error constant ($K_p$, $K_v$, or $K_a$) by increasing the DC gain of the system without significantly altering the root locus shape (especially the transient response). This is achieved by having the pole and zero of the lag compensator close to each other and close to the origin.
            *   The gain $K_c$ is adjusted to meet the steady-state error specification and ensure the locus passes through the desired region.
        *   **Lag-Lead Compensator Design:** Typically designed by first addressing steady-state error with a lag network and then improving transient response with a lead network, or vice-versa.

    5.  **Verify the design:** Sketch the root locus of the compensated system to confirm that the desired performance is achieved. If not, iterate on the compensator pole/zero locations or gain.
    6.  **Simulation:** Use simulation tools (like MATLAB/Simulink) to model the compensated system and verify its transient response.

*   **Reference:**
    *   **Ogata:** Chapter 6, Section 6-5, "Design by Root Locus."
    *   **Nise:** Chapter 6, Section 6-4, "Design of Controllers Using the Root Locus."
    *   **Nagrath & Gopal:** Chapter 6, Section 6.5, "Design of Control Systems by Root Locus."

### 10.6 Simulation Tools and Practical Implementation

*   **MATLAB/Simulink:**
    *   **`rlocus(G)`:** Command to plot the root locus of a system `G` (where `G` is a transfer function object).
    *   **`rlocfind(G)`:** Interactive command to find the gain and pole location for a desired root on the locus.
    *   **`tf()`:** Function to create transfer function objects.
    *   **`feedback()`:** Function to create closed-loop systems.
    *   **`step()`:** Function to simulate the step response of a system.
    *   **Simulink:** Provides a graphical environment to build and simulate control systems, including root locus analysis and controller design.

*   **Practical Considerations:**
    *   **Modeling Accuracy:** The accuracy of the root locus analysis depends on the accuracy of the system model.
    *   **Dominant Pole Assumption:** The analysis often assumes that the behavior is dominated by a pair of dominant poles. This assumption might not hold if other poles are too close to the dominant poles or if poles are in the RHP.
    *   **Gain Margin and Phase Margin:** While root locus provides information about stability (crossing the jw-axis), it doesn't directly provide gain and phase margins. These are usually found using Bode plots. However, the proximity of the locus to the jw-axis gives an indication.
    *   **Real-world Limitations:** Physical actuators and sensors have limitations that are not always captured in simple transfer function models.

*   **Reference:**
    *   **Ogata:** Appendix A, "MATLAB for Control Engineering."
    *   **Nise:** Appendix C, "MATLAB Control System Toolbox."
    *   **Nagrath & Gopal:** Practical examples and lab exercises often accompany the theoretical content.

## Practice Questions and Exercises

**Question 1:**
Consider a unity feedback system with the open-loop transfer function $G(s) = \frac{K}{s(s+2)}$. Sketch the root locus plot and determine:
a) The break-away point on the real axis.
b) The intersection points with the imaginary axis.
c) The range of $K$ for which the system is stable.
d) The value of $K$ for which the damping ratio $\zeta = 0.5$.
e) The closed-loop poles for $\zeta = 0.5$.

**Answer 1:**
*   **Characteristic Equation:** $1 + \frac{K}{s(s+2)} = 0 \implies s^2 + 2s + K = 0$.
*   **Open-loop poles:** $s=0$, $s=-2$. Open-loop zeros: none. $p=2, z=0$.
*   **Number of branches:** 2.
*   **Real axis segments:** From $s=0$ to $s=-\infty$ is part of the locus. From $s=-2$ to the left is not. The locus exists on the real axis for $s \le -2$.
*   **Asymptotes:** $p-z = 2$. Angles: $\theta_a = \frac{(2n+1)180^\circ}{2}$ for $n=0, 1$.
    *   $n=0: \theta_a = \frac{180^\circ}{2} = 90^\circ$.
    *   $n=1: \theta_a = \frac{3 \times 180^\circ}{2} = 270^\circ$ (or $-90^\circ$).
    So, two asymptotes are the positive and negative imaginary axes.
*   **Centroid:** $\sigma_a = \frac{0 + (-2)}{2-0} = -1$.
*   **Imaginary Axis Intersection:**
    *   Characteristic equation: $s^2 + 2s + K = 0$.
    *   For intersection, replace $s$ with $j\omega$: $(j\omega)^2 + 2(j\omega) + K = 0$.
    *   $-\omega^2 + j2\omega + K = 0$.
    *   Separating real and imaginary parts:
        *   Real: $K - \omega^2 = 0 \implies K = \omega^2$.
        *   Imaginary: $2\omega = 0 \implies \omega = 0$.
    *   If $\omega = 0$, then $K = 0$. This corresponds to the pole at the origin.
    *   Let's use Routh-Hurwitz:
        | $s^2$ | 1   | $K$ |
        |-------|-----|-----|
        | $s^1$ | 2   | 0   |
        | $s^0$ | $K$ |     |
    *   For stability, all coefficients in the first column must be positive. So, $K > 0$ and $2 > 0$.
    *   To find the crossing of the imaginary axis, we need the auxiliary equation when the $s^1$ row is zero. However, $2$ is never zero. This indicates that the imaginary axis crossing is only at the origin for $K=0$.
    *   Wait, this is a second-order system. The locus starts at $s=0$ and $s=-2$. With asymptotes along the jw-axis, there must be a breakaway point. Let's recheck the $\omega^2$ derivation. For $s=j\omega$, $s^2+2s+K=0$ becomes $-\omega^2 + j2\omega + K = 0$.
    *   $K - \omega^2 = 0$ and $2\omega = 0$. This indeed implies $\omega=0$ and $K=0$. What's wrong?
    *   Ah, the standard characteristic equation is $1+KG(s)H(s)=0$. Here $H(s)=1$. So $1+\frac{K}{s(s+2)} = 0 \implies s(s+2) + K = 0 \implies s^2+2s+K=0$.
    *   For $\omega \ne 0$, $s^2+2s+K=0$ becomes $(j\omega)^2 + 2(j\omega) + K = 0 \implies -\omega^2 + j2\omega + K = 0$.
    *   This implies $K - \omega^2 = 0$ and $2\omega = 0$. This still gives $\omega=0$.
    *   Let's use the characteristic equation directly from the Routh table. The system is stable if $K > 0$.
    *   Let's re-examine the rules for $\omega=0$. The term $s^2+2s+K$ means poles are at $s = \frac{-2 \pm \sqrt{4-4K}}{2} = -1 \pm \sqrt{1-K}$.
        *   If $K < 1$, poles are real: $-1 \pm \sqrt{1-K}$. One is between -1 and 0, the other is less than -1.
        *   If $K = 1$, poles are at $s = -1 \pm 0$. Two poles at $s=-1$.
        *   If $K > 1$, poles are complex conjugate: $s = -1 \pm j\sqrt{K-1}$.
    *   So, the locus crosses the imaginary axis when the real part of the poles becomes zero. In $s = -1 \pm \sqrt{1-K}$, the real part is $-1$. The poles *never* cross the imaginary axis as $K$ varies from $0$ to $\infty$. The real part of the poles is always $-1$, which is in the LHP. This system is always stable for $K>0$.
    *   This means my initial interpretation of "crossing the imaginary axis" was too literal for all systems. For $s^2+2s+K=0$, the system is always stable for $K>0$. The locus starts at $0$ and $-2$ and moves towards the complex plane. The breakaway point is where $\frac{dK}{ds} = 0$. From $K = -(s^2+2s)$, $\frac{dK}{ds} = -(2s+2)$. Setting this to zero gives $2s+2=0 \implies s=-1$. This is the breakaway point.

*   **a) Breakaway point:** $s = -1$.

*   **b) Imaginary Axis Intersection:** The system is always stable for $K>0$. The locus doesn't cross the imaginary axis except at the origin ($K=0$).

*   **c) Range of $K$ for stability:** Since the poles are always at $s = -1 \pm \sqrt{1-K}$, and for $K>0$, the real part is always $-1$, the system is stable for all $K>0$.

*   **d) Value of $K$ for $\zeta = 0.5$:**
    *   For $s = -\sigma + j\omega$, $\zeta = \frac{\sigma}{\omega_n}$.
    *   From the characteristic equation $s^2 + 2s + K = 0$, the poles are $s = -1 \pm j\sqrt{K-1}$ for $K>1$.
    *   Here, $\sigma = 1$ and $\omega = \sqrt{K-1}$.
    *   $\zeta = \frac{\sigma}{\omega_n} = \frac{1}{\sqrt{1^2 + (\sqrt{K-1})^2}} = \frac{1}{\sqrt{1 + K-1}} = \frac{1}{\sqrt{K}}$.
    *   We want $\zeta = 0.5$. So, $0.5 = \frac{1}{\sqrt{K}} \implies \sqrt{K} = 2 \implies K = 4$.

*   **e) Closed-loop poles for $\zeta = 0.5$:** With $K=4$, the poles are $s = -1 \pm j\sqrt{4-1} = -1 \pm j\sqrt{3}$.

**Question 2:**
Design a lead compensator for the system with open-loop transfer function $G(s) = \frac{K}{s(s+1)(s+5)}$ to achieve a damping ratio $\zeta = 0.5$ and settling time $T_s \approx 2$ seconds.

**Answer 2:**
*   **Uncompensated System Analysis:**
    *   Open-loop poles: $0, -1, -5$.
    *   Desired pole location:
        *   $T_s \approx 2 \implies \sigma = \frac{4}{T_s} = \frac{4}{2} = 2$. So, the dominant poles should be around $s = -2 \pm j\omega$.
        *   $\zeta = 0.5 \implies \theta = \cos^{-1}(0.5) = 60^\circ$.
        *   The desired pole $s_d$ lies on the line $s = -2 + j\omega$.
        *   $\zeta = \frac{\sigma}{\omega_n} = 0.5 \implies \frac{2}{\omega_n} = 0.5 \implies \omega_n = 4$.
        *   $\omega_n^2 = \sigma^2 + \omega^2 \implies 4^2 = 2^2 + \omega^2 \implies 16 = 4 + \omega^2 \implies \omega^2 = 12 \implies \omega = \sqrt{12} = 2\sqrt{3} \approx 3.46$.
        *   Desired dominant pole: $s_d = -2 + j2\sqrt{3}$.

*   **Angle Condition for Uncompensated System at $s_d$:**
    *   $G(s) = \frac{K}{s(s+1)(s+5)}$.
    *   $\angle G(s_d) = \angle \frac{K}{(-2+j2\sqrt{3})(-2+j2\sqrt{3}+1)(-2+j2\sqrt{3}+5)}$
    *   $\angle G(s_d) = -\angle (-2+j2\sqrt{3}) - \angle (-1+j2\sqrt{3}) - \angle (3+j2\sqrt{3})$
    *   $\angle (-2+j2\sqrt{3}) = \arctan(\frac{2\sqrt{3}}{-2}) = \arctan(-\sqrt{3}) = 120^\circ$.
    *   $\angle (-1+j2\sqrt{3}) = \arctan(\frac{2\sqrt{3}}{-1}) = \arctan(-2\sqrt{3}) \approx 109.1^\circ$.
    *   $\angle (3+j2\sqrt{3}) = \arctan(\frac{2\sqrt{3}}{3}) \approx 49.1^\circ$.
    *   $\angle G(s_d) = -120^\circ - 109.1^\circ - 49.1^\circ = -278.2^\circ \equiv 81.8^\circ$.
    *   The angle deficiency is $180^\circ - 81.8^\circ = 98.2^\circ$. A lead compensator is needed to provide this angle.

*   **Lead Compensator Design:** $G_c(s) = K_c \frac{s+z_c}{s+p_c}$ with $|z_c| < |p_c|$.
    *   The angle contribution from the compensator must be $+98.2^\circ$ at $s_d$:
        $\angle G_c(s_d) = \angle (s_d+z_c) - \angle (s_d+p_c) = 98.2^\circ$.
    *   Let's place the zero $z_c$ to cancel the pole at $s=0$ or near it. A common choice is $z_c = 1$.
    *   Then, $\angle (-2+j2\sqrt{3}+1) - \angle (-2+j2\sqrt{3}+p_c) = 98.2^\circ$.
    *   $\angle (-1+j2\sqrt{3}) - \angle (-2+j2\sqrt{3}+p_c) = 98.2^\circ$.
    *   $109.1^\circ - \angle (-2+j2\sqrt{3}+p_c) = 98.2^\circ$.
    *   $\angle (-2+j2\sqrt{3}+p_c) = 109.1^\circ - 98.2^\circ = 10.9^\circ$.
    *   Let $s_d+p_c = (-2+p_c) + j2\sqrt{3}$. The angle is $\arctan(\frac{2\sqrt{3}}{-2+p_c}) = 10.9^\circ$.
    *   $\frac{2\sqrt{3}}{-2+p_c} = \tan(10.9^\circ) \approx 0.192$.
    *   $-2+p_c = \frac{2\sqrt{3}}{0.192} \approx 18.06$.
    *   $p_c \approx 20.06$.
    *   So, $z_c = 1$, $p_c \approx 20$.

*   **Magnitude Condition at $s_d$ for the compensated system:**
    *   $|K_c G_c(s_d) G(s_d)| = 1$.
    *   $|K_c \frac{s_d+z_c}{s_d+p_c} \frac{K}{s_d(s_d+1)(s_d+5)}| = 1$.
    *   The total gain $K_{total} = K_c K$.
    *   $|K_{total} \frac{-2+j2\sqrt{3}+1}{-2+j2\sqrt{3}+20} \frac{1}{(-2+j2\sqrt{3})(-1+j2\sqrt{3})(3+j2\sqrt{3})}| = 1$.
    *   $|\frac{-1+j2\sqrt{3}}{18+j2\sqrt{3}}| = |\frac{\sqrt{1+12} \angle 109.1^\circ}{\sqrt{18^2+12} \angle 10.9^\circ}| = |\frac{\sqrt{13} \angle 109.1^\circ}{\sqrt{324+12} \angle 10.9^\circ}| = |\frac{3.606 \angle 109.1^\circ}{\sqrt{336} \angle 10.9^\circ}| = |\frac{3.606 \angle 109.1^\circ}{18.33 \angle 10.9^\circ}| = \frac{3.606}{18.33} \times \angle (109.1^\circ - 10.9^\circ) \approx 0.196 \angle 98.2^\circ$.
    *   Magnitude of denominator: $|(-2+j2\sqrt{3})(-1+j2\sqrt{3})(3+j2\sqrt{3})| = |-2+j2\sqrt{3}| |-1+j2\sqrt{3}| |3+j2\sqrt{3}| = \sqrt{4+12} \sqrt{1+12} \sqrt{9+12} = \sqrt{16} \sqrt{13} \sqrt{21} = 4 \times 3.606 \times 4.583 \approx 66.15$.
    *   $|G(s_d)| = \frac{K}{66.15}$.
    *   $|K_c \frac{s_d+z_c}{s_d+p_c}| = |K_c \frac{-1+j2\sqrt{3}}{18+j2\sqrt{3}}| = K_c |\frac{3.606 \angle 109.1^\circ}{18.33 \angle 10.9^\circ}| = K_c \times 0.196$.
    *   $|K_c \times 0.196 \times \frac{K}{66.15}| = 1$.
    *   $K_c K = \frac{66.15}{0.196} \approx 337.5$.
    *   Let's choose $K_c=33.75$ to satisfy the magnitude condition for the dominant pole, making the total gain $K_{total} = 10 K_c$. Wait, $K$ is the open-loop gain.
    *   We need to find $K_{total}$ that satisfies $|G_{comp}(s_d)| = 1$.
    *   $|K_{total} \frac{s_d+z_c}{s_d+p_c} \frac{1}{s_d(s_d+1)(s_d+5)}| = 1$.
    *   $|K_{total}| \times |\frac{-1+j2\sqrt{3}}{18+j2\sqrt{3}}| \times |\frac{1}{s_d(s_d+1)(s_d+5)}| = 1$.
    *   $|K_{total}| \times 0.196 \times \frac{1}{66.15} = 1 \implies |K_{total}| = \frac{66.15}{0.196} \approx 337.5$.
    *   So, $K_{total} = 337.5$. If the original system had $K=10$ (for example), then $K_c = 33.75$.
    *   Compensator: $G_c(s) = 33.75 \frac{s+1}{s+20}$.

*   **Verification:** The root locus of the compensated system $G_{comp}(s) = 33.75 \frac{s+1}{s+20} \frac{1}{s(s+1)(s+5)} = 33.75 \frac{1}{(s+20)s(s+5)}$ should pass through $s_d = -2 + j2\sqrt{3}$. This needs to be checked using MATLAB or manual angle calculation.

## Important Points to Remember

*   **The root locus technique is for analyzing systems with variable gain.**
*   **All points on the locus satisfy the angle condition $\angle G(s)H(s) = (2n+1)180^\circ$.**
*   **The number of locus branches equals the number of open-loop poles.**
*   **Branches start at open-loop poles ($K=0$) and end at open-loop zeros or infinity ($K \to \infty$).**
*   **The righ-half of the s-plane corresponds to instability.**
*   **For performance specification design, the desired pole location is crucial.**
*   **Lead compensators improve transient response; lag compensators improve steady-state error.**
*   **Simulation tools like MATLAB are invaluable for verifying designs.**

## Course Outcome Alignment

*   **CO1:** Understanding the basis of root locus (poles, zeros, characteristic equation) aids in identifying parameters for modeling physical systems and analyzing their dynamic behavior.
*   **CO2:** Root locus directly visualizes how system parameters affect stability and transient response, allowing determination of performance specifications like overshoot, settling time, and natural frequency.
*   **CO3:** Sketching and interpreting root locus plots, along with using simulation tools to generate them, is a core part of analyzing linear continuous-time systems.
*   **CO4:** The design of lead, lag, and lag-lead compensators using the root locus method to meet performance requirements is a direct application of this module, especially when verified with simulation tools.

This module provides the theoretical foundation and practical techniques for performance analysis and design in control systems. Mastery of the root locus method is essential for understanding and shaping the dynamic behavior of feedback control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
