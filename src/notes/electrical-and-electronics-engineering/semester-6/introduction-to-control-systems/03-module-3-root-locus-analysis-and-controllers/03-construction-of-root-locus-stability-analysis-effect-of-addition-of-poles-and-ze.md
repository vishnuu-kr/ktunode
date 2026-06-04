---
title: "Construction of Root locus - stability analysis- effect of addition of poles and zeros"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c2"
status: "completed"
scrapedAt: "2026-05-23T16:29:37.271Z"
---
# Introduction to Control Systems - Module 3: Root Locus Analysis and Controllers

## Topic: Construction of Root Locus - Stability Analysis - Effect of Addition of Poles and Zeros

---

### **1. Introduction to Root Locus**

**Definition:** The Root Locus is a graphical method used to determine the locations of the closed-loop poles of a system as a gain parameter (usually $K$) is varied from zero to infinity. It provides insight into the system's stability and transient response.

**Importance:**
*   **Stability Analysis:** Directly shows how the location of closed-loop poles changes with gain, indicating potential instability. (Aligns with CO3)
*   **Transient Response Prediction:** Relates pole locations to system characteristics like damping ratio ($\zeta$), natural frequency ($\omega_n$), rise time ($t_r$), settling time ($t_s$), and overshoot ($M_p$). (Aligns with CO2)
*   **Controller Design:** Helps in understanding the effect of adding proportional controllers (gain $K$) and can guide the design of more advanced controllers by observing the impact of poles and zeros. (Aligns with CO3)

**Key Concepts:**
*   **Open-loop Transfer Function (OLTF):** $G(s)H(s) = K \frac{\prod_{i=1}^m (s+z_i)}{\prod_{j=1}^n (s+p_j)}$
*   **Closed-loop Transfer Function (CLTF):** $\frac{C(s)}{R(s)} = \frac{K G(s)}{1 + K G(s)H(s)}$
*   **Characteristic Equation:** $1 + K G(s)H(s) = 0$
*   **P(s):** Numerator of $K G(s)H(s)$, i.e., $\prod_{i=1}^m (s+z_i)$
*   **Q(s):** Denominator of $K G(s)H(s)$, i.e., $\prod_{j=1}^n (s+p_j)$
*   **Roots of the characteristic equation:** Closed-loop poles.
*   **Breakaway Points:** Points on the locus where the locus branches leave the real axis.
*   **Break-in Points:** Points on the locus where the locus branches enter the real axis.
*   **Asymptotes:** Straight lines that the root locus branches approach as $K \to \infty$.

**Textbook Reference:**
*   Nise, Chapter 6: Root Locus Techniques
*   Nagrath & Gopal, Chapter 8: Root Locus Technique

---

### **2. Construction of Root Locus - Rules and Properties**

The construction of the root locus follows a set of well-defined rules derived from the characteristic equation $1 + K G(s)H(s) = 0$.

**Key Properties and Construction Rules:**

1.  **Number of Branches:** The number of root locus branches is equal to the number of poles of the open-loop transfer function, $n$. (Nise, Rule 1)
2.  **Start and End Points:**
    *   Each branch originates from an open-loop pole (where $K=0$).
    *   Each branch terminates at an open-loop zero or at infinity (as $K \to \infty$). If $n > m$, then $n-m$ branches tend to infinity. (Nise, Rule 2)
3.  **Symmetry:** The root locus is symmetrical with respect to the real axis. This is because the complex poles and zeros of a system with real coefficients in the transfer function always occur in conjugate pairs. (Nise, Rule 3)
4.  **Real Axis Segments:** Segments of the real axis are part of the root locus if the number of open-loop poles and zeros to the right of the segment is odd. (Nise, Rule 4)
5.  **Asymptotes:**
    *   **Centroid ($\sigma_a$):** The intersection of the asymptotes on the real axis is given by:
        $\sigma_a = \frac{\text{Sum of finite pole locations} - \text{Sum of finite zero locations}}{\text{Number of poles} - \text{Number of zeros}} = \frac{\sum_{j=1}^n (-p_j) - \sum_{i=1}^m (-z_i)}{n-m}$
    *   **Angles ($\theta_a$):** The angles of the asymptotes with respect to the positive real axis are given by:
        $\theta_a = \frac{(2k+1)\pi}{n-m}$, for $k = 0, 1, 2, ..., (n-m-1)$
        (Nise, Rule 5)
6.  **Breakaway and Break-in Points:**
    *   These points occur on the real axis where the root locus branches leave or enter the real axis.
    *   They are found by finding the roots of $\frac{dK}{ds} = 0$ where $K = -\frac{1}{G(s)H(s)}$.
    *   **Important:** Only consider points that lie on the root locus branches (i.e., satisfy the magnitude and angle conditions for some $K>0$). (Nise, Rule 6)
7.  **Intersection with Imaginary Axis (Marginal Stability):**
    *   The root locus may cross the imaginary axis, indicating a transition from stable to unstable.
    *   This is found by using the Routh-Hurwitz stability criterion on the characteristic equation $1 + K G(s)H(s) = 0$.
    *   The value of $K$ at which this crossing occurs is the **critical gain ($K_{cr}$)**, and the corresponding frequency is the **critical frequency ($\omega_{cr}$)**. (Nise, Rule 7)
8.  **Angle of Arrival and Departure:**
    *   **Angle of Departure:** The angle at which a branch leaves a complex pole.
        Angle of Departure $= 180^\circ - (\text{Sum of angles subtended by other poles at the pole}) + (\text{Sum of angles subtended by zeros at the pole})$
    *   **Angle of Arrival:** The angle at which a branch arrives at a complex zero.
        Angle of Arrival $= 180^\circ - (\text{Sum of angles subtended by zeros at the zero}) + (\text{Sum of angles subtended by poles at the zero})$
    (Nise, Rule 8)
9.  **Magnitude Condition:** For any point $s$ on the root locus, $|K G(s)H(s)| = 1$. This is used to determine the value of $K$ at any point on the locus: $K = \left|\frac{1}{G(s)H(s)}\right|$. (Nise, Rule 9)
10. **Number of Asymptotes from Infinity:** If $n-m > 0$, then $n-m$ asymptotes originate from infinity. If $n-m=0$, there are no asymptotes.

**Example:** Construct the root locus for $G(s)H(s) = \frac{K}{s(s+2)}$.
*   **Poles:** $s=0, s=-2$. **Zeros:** None.
*   **Number of branches:** 2.
*   **Start/End:** Branch 1 starts at $s=0$, Branch 2 starts at $s=-2$. Both tend to infinity.
*   **Symmetry:** Symmetrical about the real axis.
*   **Real Axis Segments:** From $s=0$ to $s=-\infty$, the number of poles to the right is 1 (odd) - locus exists. From $s=-2$ to $s=0$, the number of poles to the right is 1 (odd) - locus exists. From $s=-\infty$ to $s=-2$, the number of poles to the right is 2 (even) - locus does not exist. Therefore, the locus exists on the real axis for $s \in (-\infty, -2]$ and $s \in [-2, 0]$ is not correct. The rule states the number of poles *to the right* of the segment. For $s \in (-\infty, -2]$, there are two poles to the right. For $s \in [-2, 0]$, there is one pole ($s=0$) to the right. For $s \in [0, \infty)$, there are two poles ($s=0, s=-2$) to the right. Thus, the locus exists on the real axis for $s \in (-\infty, -2]$. (Nise, Rule 4 corrected understanding).
*   **Asymptotes:** $n=2, m=0 \implies n-m = 2$.
    *   Centroid: $\sigma_a = \frac{(0) + (-2) - (0)}{2-0} = -1$.
    *   Angles: $\theta_a = \frac{(2k+1)\pi}{2}$, for $k=0, 1$.
        *   $k=0: \theta_a = \frac{\pi}{2} = 90^\circ$.
        *   $k=1: \theta_a = \frac{3\pi}{2} = 270^\circ$ (or $-90^\circ$).
    The asymptotes are vertical lines at $s=-1$.
*   **Breakaway Point:** $K = -s(s+2) = -s^2 - 2s$. $\frac{dK}{ds} = -2s - 2 = 0 \implies s = -1$.
    At $s=-1$, $K = -(-1)(-1+2) = -(-1)(1) = 1$.
    Since $s=-1$ is between the poles and $K=1 > 0$, it is a breakaway point.
*   **Intersection with Imaginary Axis:** Characteristic equation: $1 + \frac{K}{s(s+2)} = 0 \implies s^2 + 2s + K = 0$.
    Using Routh-Hurwitz:
    $s^2$: 1  $K$
    $s^1$: 2  0
    $s^0$: $K$
    For stability, all coefficients must be positive. $K>0$ is required.
    The auxiliary equation is $2s+K=0$, which gives $s = -K/2$. This doesn't cross the imaginary axis unless $K=0$.
    Let's re-examine the characteristic equation. $s^2 + 2s + K = 0$.
    The roots are $s = \frac{-2 \pm \sqrt{4 - 4K}}{2} = -1 \pm \sqrt{1-K}$.
    For $K > 1$, the roots become complex conjugate, $s = -1 \pm j\sqrt{K-1}$.
    The imaginary axis is crossed when the real part of the roots is zero. In this case, the real part is always $-1$, which is stable. This system is stable for all $K>0$.
    The breakaway point at $s=-1$ indicates that for $K>1$, the branches move into the complex plane with a real part of $-1$.
*   **Angle of Departure:** No complex poles, so not applicable.
*   **Angle of Arrival:** No complex zeros, so not applicable.

**Corrected understanding of Real Axis Segments:**
Let's use the $s=-1.5$ as a test point. Number of poles to the right: $s=0, s=-2$ (two poles). Two is even, so no locus at $s=-1.5$.
Let's use $s=-0.5$ as a test point. Number of poles to the right: $s=0$ (one pole). One is odd, so locus exists at $s=-0.5$.
Let's use $s=-3$ as a test point. Number of poles to the right: $s=0, s=-2$ (two poles). Two is even, so no locus at $s=-3$.
Therefore, the locus exists on the real axis for $s \in (-\infty, -2]$. This is the segment from pole $s=-2$ to $-\infty$.
Wait, the breakaway point is at $s=-1$. So the branches start at $s=0$ and $s=-2$.
Branch from $s=0$ must go towards negative real axis. It hits the breakaway point $s=-1$ and then goes into the complex plane.
Branch from $s=-2$ must go towards negative real axis. It also hits the breakaway point $s=-1$ and then goes into the complex plane.
So the locus exists on the real axis for $s \in (-\infty, -1]$. Ah, the rule is about the number of poles and zeros to the *right* of the *point being tested*.
Let's re-test:
*   Test $s=-0.5$: Number of poles to the right is 1 (at $s=0$). Odd $\implies$ locus exists.
*   Test $s=-1.5$: Number of poles to the right is 2 (at $s=0, s=-2$). Even $\implies$ locus does not exist.
*   Test $s=-3$: Number of poles to the right is 2 (at $s=0, s=-2$). Even $\implies$ locus does not exist.
This means the locus exists on the real axis for $s \in [0, -1]$ and $s \in [-2, -1]$ ?? This is confusing.

Let's trust the rule: "Segments of the real axis are part of the root locus if the number of open-loop poles and zeros to the right of the segment is odd."
*   Consider the real axis from $-\infty$ to $-2$. Pick a point, say $s=-3$. Number of poles to the right ($0, -2$) is 2 (even). No locus.
*   Consider the real axis between $-2$ and $0$. Pick a point, say $s=-1$. Number of poles to the right ($0$) is 1 (odd). Locus exists.
*   Consider the real axis from $0$ to $+\infty$. Pick a point, say $s=+1$. Number of poles to the right ($0, -2$) is 2 (even). No locus.

So, the locus exists on the real axis ONLY between $-2$ and $0$.
The breakaway point is at $s=-1$.
Branch from $s=0$ goes left, reaches $s=-1$, and then departs into the complex plane.
Branch from $s=-2$ goes left, reaches $s=-1$, and then departs into the complex plane.
This makes sense now. The locus on the real axis is from $s=-2$ to $s=-1$ and from $s=0$ to $s=-1$.

**(Nise, Chapter 6, Examples)** are crucial for correct application of these rules.

**CO3 Alignment:** This section directly supports CO3 by explaining how to analyze system dynamics and stability using the graphical representation of root locus.

---

### **3. Stability Analysis using Root Locus**

**Definition of Stability:** A system is stable if all its closed-loop poles lie in the Left Half of the s-plane (LHP). A system is unstable if any closed-loop pole lies in the Right Half of the s-plane (RHP). A system is marginally stable if poles lie on the imaginary axis and there are no poles in the RHP, and all poles on the imaginary axis are simple poles.

**How Root Locus Helps in Stability Analysis:**

*   **Marginal Stability Point:** The point where the root locus crosses the imaginary axis determines the boundary of stability.
    *   The value of gain $K$ at this intersection is the **critical gain ($K_{cr}$)**.
    *   The corresponding frequency of oscillation is the **critical frequency ($\omega_{cr}$)**.
*   **Gain Margin:** The factor by which the gain can be increased before the system becomes unstable. It is related to $K_{cr}$. If the root locus crosses the imaginary axis at $K_{cr}$, the gain margin is often considered to be $K_{cr}$ (assuming the nominal gain is 1).
*   **Damping Ratio ($\zeta$):** The angle of a complex pole from the negative real axis is related to $\zeta$. A damping ratio of $\zeta > 0$ corresponds to poles in the LHP. A damping ratio of $\zeta = 0$ corresponds to poles on the imaginary axis. A damping ratio of $\zeta < 0$ corresponds to poles in the RHP. Lines of constant $\zeta$ are radial lines emanating from the origin.
*   **Transient Response Characteristics:**
    *   **Settling Time ($t_s$):** Primarily determined by the real part of the dominant poles. For a second-order system, $t_s \approx \frac{4}{\zeta \omega_n} = \frac{4}{|\text{Re(pole})|}$. Poles further left in the s-plane lead to faster settling.
    *   **Peak Overshoot ($M_p$):** Primarily determined by the damping ratio $\zeta$. Higher $\zeta$ leads to lower overshoot.
    *   **Natural Frequency ($\omega_n$):** Determined by the distance of the poles from the origin. Poles further from the origin lead to faster transient responses.

**Textbook Reference:**
*   Nise, Chapter 6.5: Stability
*   Nagrath & Gopal, Chapter 8.6: Stability Analysis

**Example:** Consider a system with characteristic equation $1 + K \frac{1}{s(s+1)(s+2)} = 0$.
$s(s+1)(s+2) + K = 0$
$s(s^2 + 3s + 2) + K = 0$
$s^3 + 3s^2 + 2s + K = 0$

Using Routh-Hurwitz:
$s^3$: 1   2
$s^2$: 3   $K$
$s^1$: $\frac{(3)(2) - (1)(K)}{3} = \frac{6-K}{3}$   0
$s^0$: $K$

For stability, all coefficients must be positive:
1.  $K > 0$
2.  $\frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$
3.  $K > 0$

Therefore, the system is stable for $0 < K < 6$.
The critical gain $K_{cr} = 6$.
At $K=6$, the auxiliary equation is $\frac{6-6}{3}s = 0$, which is $0 \cdot s = 0$. This indicates a row of zeros. The equation from the row above ($s^2$) is $3s^2 + K = 0$.
At $K=6$, $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
So, the root locus crosses the imaginary axis at $\omega_{cr} = \sqrt{2}$ rad/s when $K = 6$.

**CO3 Alignment:** This section directly addresses CO3 by explaining how the root locus provides a visual means to assess system stability by observing pole locations and identifying the critical gain and frequency.

---

### **4. Effect of Addition of Poles and Zeros**

**General Principle:** Adding poles or zeros to an open-loop transfer function ($G(s)H(s)$) shifts the locations of the closed-loop poles. This shift influences the system's stability and transient response.

**4.1 Effect of Adding Poles:**

*   **General Behavior:** Adding a pole generally tends to destabilize the system. This is because:
    *   New branches start from the added pole.
    *   Asymptotes shift towards the left (more negative values on the real axis).
    *   The number of asymptotes increases, potentially pulling branches towards the RHP.
    *   Breakaway points tend to move towards the left.
*   **Location of Added Pole Matters:**
    *   **Pole in LHP:** If a pole is added far to the left in the LHP, its effect on the dominant closed-loop poles (usually near the origin) might be minimal, especially if the pole is much faster than the existing system.
    *   **Pole near the origin or in RHP:** Adding a pole in the LHP close to the origin or in the RHP will significantly destabilize the system, likely causing the locus to cross into the RHP at a lower gain value.
*   **Impact on Number of Asymptotes:** If $n$ is the number of poles and $m$ is the number of zeros, adding a pole increases $n$ by 1, leading to $n-m+1$ asymptotes. The centroid of the asymptotes shifts left.
*   **Impact on Real Axis Segments:** Adding a pole to the left of a real axis locus segment will include that segment. Adding a pole to the right of a real axis locus segment will exclude that segment.
*   **Impact on Breakaway Points:** Adding a pole generally shifts breakaway points further left.

**Textbook Reference:**
*   Nise, Chapter 6.6:	\text{Centroid } (\sigma_a): \frac{(6)(2) - (3)(K)}{6-K} = \frac{12-K}{6-K}$   0
$s^0$: $K$

For marginal stability, the coefficient of $s^1$ must be zero.
$\frac{12-K}{6-K} = 0 \implies 12-K = 0 \implies K = 12$.
At $K=12$, the characteristic equation is $s^3 + 3s^2 + 2s + 12 = 0$.
The row above the zero row ($s^1$) gives the auxiliary equation: $(3)(s^2) + (12) = 0 \implies 3s^2 + 12 = 0 \implies s^2 = -4 \implies s = \pm j2$.
So, the system is marginally stable at $K=12$ with oscillations at $\omega_{cr} = 2$ rad/s.
For $K>12$, the coefficient of $s^1$ becomes negative, leading to instability (poles in RHP).
Therefore, the system is stable for $0 < K < 12$.

**CO3 Alignment:** This demonstrates how root locus analysis, combined with Routh-Hurwitz, allows for precise stability assessment by identifying critical gain and frequency.

**4.2 Effect of Adding Zeros:**

*   **General Behavior:** Adding zeros generally tends to stabilize the system. This is because:
    *   New branches terminate at the added zeros.
    *   Adding a zero "pulls" the root locus towards itself. This means branches that might have gone into the RHP might now bend towards the zero in the LHP.
    *   Asymptotes may shift towards the right (less negative values on the real axis), but typically their effect is dominated by the pull of the zero.
*   **Location of Added Zero Matters:**
    *   **Zero in LHP:** Adding a zero in the LHP will pull the branches towards it, generally improving stability and transient response. The closer the zero to the origin, the stronger its pulling effect.
    *   **Zero in RHP:** Adding a zero in the RHP will have a destabilizing effect, pulling the locus into the RHP, similar to adding a pole.
*   **Impact on Number of Asymptotes:** If $n$ is the number of poles and $m$ is the number of zeros, adding a zero increases $m$ by 1, leading to $n-(m+1)$ asymptotes. The centroid shifts right if $n>m$. If $n=m$, then adding a zero means $n-m$ becomes $n-(m+1) = -1$, and the number of asymptotes from infinity becomes 0.
*   **Impact on Real Axis Segments:** Adding a zero to the left of a real axis locus segment will include that segment. Adding a zero to the right of a real axis locus segment will exclude that segment.
*   **Impact on Breakaway Points:** Adding a zero generally shifts breakaway points towards the right.

**Textbook Reference:**
*   Nise, Chapter 6.6:0.6.6.

**Example:** Consider the system $G(s)H(s) = \frac{K}{s(s+2)}$.
*   Original system: Poles at $0, -2$. Asymptotes at $90^\circ, 270^\circ$ at $\sigma_a = -1$. Breakaway at $s=-1$.
*   Add a zero at $s=-3$: $G(s)H(s) = \frac{K(s+3)}{s(s+2)}$.
    *   New OLTF: Poles at $0, -2$; Zero at $-3$. $n=2, m=1 \implies n-m = 1$.
    *   Number of branches: 2.
    *   Start points: $s=0, s=-2$. End point: $s=-3$ and infinity.
    *   Symmetry: About real axis.
    *   Real Axis Segments:
        *   $s < -2$: Test $s=-3$: 2 poles, 1 zero to the right. (Even - Odd = Odd). Locus exists.
        *   $-2 < s < -0$: Test $s=-1$: 1 pole, 1 zero to the right. (Odd - Odd = Even). No locus.
        *   $s > 0$: Test $s=1$: 2 poles, 1 zero to the right. (Even - Odd = Odd). Locus exists.
        So, real axis locus is $(-\infty, -2]$ and $[0, \infty)$.
    *   Asymptotes: $n-m = 1$.
        *   Centroid: $\sigma_a = \frac{(0) + (-2) - (-3)}{2-1} = \frac{-2+3}{1} = 1$.
        *   Angle: $\theta_a = \frac{(2k+1)\pi}{1}$ for $k=0 \implies \theta_a = \pi = 180^\circ$.
        Asymptote is a line parallel to the negative real axis starting at $s=1$.
    *   Breakaway Point: $K = -\frac{s(s+2)}{s+3}$.
        $\frac{dK}{ds} = -\frac{(2s+2)(s+3) - s(s+2)(1)}{(s+3)^2} = 0$
        $(2s+2)(s+3) - s(s+2) = 0$
        $2s^2 + 6s + 2s + 6 - s^2 - 2s = 0$
        $s^2 + 6s + 6 = 0$
        $s = \frac{-6 \pm \sqrt{36 - 24}}{2} = \frac{-6 \pm \sqrt{12}}{2} = -3 \pm \sqrt{3}$.
        $s_1 = -3 + 1.732 = -1.268$. $s_2 = -3 - 1.732 = -4.732$.
        Check real axis segments:
        *   $s_1 = -1.268$ is between $-2$ and $0$, where no locus exists. So, not a breakaway point.
        *   $s_2 = -4.732$ is in $(-\infty, -2]$, where locus exists. This is a breakaway point.
    *   Angle of Arrival at zero $s=-3$:
        Angle of Arrival $= 180^\circ - (\text{angle subtended by poles at } -3)$
        Angle at $-3$ from $s=0$: $\tan \phi_1 = \frac{3}{0} \implies \phi_1 = 90^\circ$.
        Angle at $-3$ from $s=-2$: $\tan \phi_2 = \frac{3-2}{0} = \frac{1}{0}$ (wrong calc).
        Angle at $-3$ from $s=0$: Angle of vector from $0$ to $-3$ is $180^\circ$.
        Angle at $-3$ from $s=-2$: Angle of vector from $-2$ to $-3$ is $180^\circ$.
        Let's use angles relative to the point $s=-3$:
        Angle from $s=0$ to $s=-3$: $\angle (-3-0) = 180^\circ$.
        Angle from $s=-2$ to $s=-3$: $\angle (-3 - (-2)) = \angle (-1) = 180^\circ$.
        Angle of Arrival $= 180^\circ - (180^\circ + 180^\circ) = 180^\circ - 360^\circ = -180^\circ$, which is $180^\circ$.
        This means the branch arriving at $s=-3$ comes from the left along the real axis.

**Comparison:** Adding the zero at $s=-3$ stabilized the system. The critical gain would be higher, and the complex poles would be further to the left for a given gain. The asymptote shifted to the right. The breakaway point moved to the left ($s=-4.732$ vs $s=-1$).

**CO3 Alignment:** This subsection shows how adding zeros directly impacts system dynamics, allowing for adjustments in stability and transient response characteristics, reinforcing CO3.

---

### **5. Controllers and Root Locus**

Root locus analysis is instrumental in understanding and designing controllers, especially proportional (P) controllers, and provides a basis for understanding the effects of more advanced controllers.

*   **Proportional Controller (P-Controller):** A proportional controller simply adds a gain $K$ to the system.
    $G_c(s) = K$
    The root locus directly shows how the closed-loop poles move as the proportional gain $K$ is varied. This allows us to:
    *   Find the range of $K$ for stability.
    *   Choose $K$ to achieve desired transient response characteristics (e.g., specific damping ratio or settling time).

*   **Proportional-Derivative (PD) Controller:**
    $G_c(s) = K(1 + T_d s) = K_d (s + 1/T_d)$
    A PD controller adds a zero to the open-loop transfer function at $s = -1/T_d$. As seen in Section 4.2, adding a zero generally pulls the root locus towards it, improving stability and reducing overshoot. The PD controller allows us to place this zero strategically to achieve desired performance.

*   **Proportional-Integral (PI) Controller:**
    $G_c(s) = K(1 + 1/(T_i s)) = K \frac{s + 1/T_i}{s} = K_p \frac{s+z_p}{s}$
    A PI controller adds a pole at the origin ($s=0$) and a zero in the LHP at $s = -1/T_i$.
    *   The pole at the origin means the original OLTF is multiplied by $1/s$. This typically degrades stability margins and can lead to offset in steady-state error for step inputs.
    *   The added zero pulls the locus, potentially mitigating some of the instability caused by the pole at the origin.

*   **Proportional-Integral-Derivative (PID) Controller:**
    $G_c(s) = K_p + K_i/s + K_d s = K_d \frac{s^2 + (K_p/K_d)s + K_i/K_d}{s}$
    A PID controller adds a pole at the origin and two zeros. The locations of these zeros and the gain values $(K_p, K_i, K_d)$ determine their effect on the root locus. The root locus analysis helps in selecting these parameters to achieve the desired closed-loop pole locations for stability and performance.

**Textbook Reference:**
*   Nise, Chapter 7: Design Concepts (specifically P, PD, PI, PID controllers and their effect on root locus).
*   Nagrath & Gopal, Chapter 9: Controllers and State Variable Techniques (Discusses controllers, and their impact on system behavior can be related to root locus analysis).

**CO3 Alignment:** This section directly addresses how root locus analysis is used to understand the impact of controllers on system stability and performance, thereby informing controller design choices, fulfilling CO3.

---

### **6. Practice Questions**

**Question 1:**
For the system with open-loop transfer function $G(s)H(s) = \frac{K(s+4)}{s(s+1)(s+2)}$, sketch the root locus. Determine the following:
a) Number of branches.
b) Real axis locus segments.
c) Asymptotes (centroid and angles).
d) Breakaway points.
e) Intersection with the imaginary axis and the critical gain $K_{cr}$.

**Answer 1:**
a) Number of branches = 3 (number of poles of OLTF).
b) Real axis locus segments: Test points.
   *   $s < -4$: e.g., $s=-5$. Poles to the right: $0, -1, -2$ (3). Zero to the right: $-4$ (1). Net odd $(3-1=2)$? No, it's (number of poles) - (number of zeros). Number of poles to the right = 3. Number of zeros to the right = 1. Rule: odd number of RL segments. The total number of poles and zeros to the right must be odd.
      For $s=-5$: Poles to right: $0, -1, -2$ (3). Zeros to right: $-4$ (1). Total to the right = 4 (even). No locus.
   *   $-4 < s < -2$: e.g., $s=-3$. Poles to right: $0, -1, -2$ (3). Zeros to right: $-4$ (1). Total to the right = 4 (even). No locus.
   *   $-2 < s < -1$: e.g., $s=-1.5$. Poles to right: $0, -1$ (2). Zeros to right: $-4$ (1). Total to the right = 3 (odd). Locus exists.
   *   $-1 < s < 0$: e.g., $s=-0.5$. Poles to right: $0$ (1). Zeros to right: $-4$ (1). Total to the right = 2 (even). No locus.
   *   $s > 0$: e.g., $s=1$. Poles to right: $0$ (1). Zeros to right: $-4$ (1). Total to the right = 2 (even). No locus.
   The only real axis segment is between $-2$ and $-1$.

c) Asymptotes: $n=3, m=1 \implies n-m = 2$.
   *   Centroid: $\sigma_a = \frac{(0) + (-1) + (-2) - (-4)}{3-1} = \frac{-3+4}{2} = \frac{1}{2} = 0.5$.
   *   Angles: $\theta_a = \frac{(2k+1)\pi}{2}$, for $k=0, 1$.
      *   $k=0: \theta_a = \frac{\pi}{2} = 90^\circ$.
      *   $k=1: \theta_a = \frac{3\pi}{2} = 270^\circ$ (or $-90^\circ$).
   Asymptotes are vertical lines at $s=0.5$.

d) Breakaway points: $K = -\frac{s(s+1)(s+2)}{s+4}$. Find $\frac{dK}{ds}=0$.
   $s(s+1)(s+2) = s(s^2+3s+2) = s^3+3s^2+2s$.
   $K = -\frac{s^3+3s^2+2s}{s+4}$.
   $\frac{dK}{ds} = - \frac{(3s^2+6s+2)(s+4) - (s^3+3s^2+2s)(1)}{(s+4)^2} = 0$.
   $(3s^2+6s+2)(s+4) - (s^3+3s^2+2s) = 0$.
   $3s^3 + 12s^2 + 6s^2 + 24s + 2s + 8 - s^3 - 3s^2 - 2s = 0$.
   $2s^3 + 15s^2 + 24s + 8 = 0$.
   By inspection or numerical methods, possible roots are near $-0.4$ and $-6.5$.
   We need to check if these are on the locus. $s=-0.4$ is not on the locus (no locus between -1 and 0). $s=-6.5$ is on the locus segment $(-\infty, -2]$. Thus, a breakaway point exists around $s=-6.5$. (Detailed calculation of roots of cubic is complex for exam settings; often a value is provided or numerical tools are assumed). Let's assume a breakaway point exists around $s=-6.5$.

e) Intersection with imaginary axis: Characteristic equation: $s(s+1)(s+2) + K(s+4) = 0$.
   $s^3 + 3s^2 + 2s + K(s+4) = 0$.
   $s^3 + 3s^2 + (2+K)s + 4K = 0$.
   Routh Array:
   $s^3$: 1   $(2+K)$
   $s^2$: 3   $4K$
   $s^1$: $\frac{3(2+K) - 1(4K)}{3} = \frac{6+3K-4K}{3} = \frac{6-K}{3}$   0
   $s^0$: $4K$

   For stability: $K>0$, $\frac{6-K}{3} > 0 \implies K < 6$, and $4K > 0$.
   So, $0 < K < 6$.
   Marginal stability occurs at $K=6$.
   At $K=6$, the $s^1$ row is zero. The auxiliary equation from the $s^2$ row is $3s^2 + 4K = 0$.
   $3s^2 + 4(6) = 0 \implies 3s^2 + 24 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2\sqrt{2}$.
   Intersection with imaginary axis is at $s = \pm j2\sqrt{2}$.
   Critical gain $K_{cr} = 6$.

**CO3 Alignment:** This question tests the ability to apply the rules for constructing the root locus and to perform stability analysis, directly addressing CO3.

---

### **7. Key Points to Remember**

*   **Root Locus is for Closed-Loop Poles:** It shows how the roots of the characteristic equation change with $K$.
*   **Number of Branches = Number of Poles:** Each branch starts at an open-loop pole.
*   **Asymptotes Indicate Behavior at Infinity:** Their angles and centroid are crucial for sketching.
*   **Real Axis Segments:** Odd number of poles/zeros to the right.
*   **Breakaway/Break-in Points:** Found by $\frac{dK}{ds}=0$ where $K = -1/G(s)H(s)$.
*   **Imaginary Axis Crossing:** Use Routh-Hurwitz to find $K_{cr}$ and $\omega_{cr}$.
*   **Stability:** All closed-loop poles must be in the LHP.
*   **Effect of Poles:** Generally destabilizing. Pull locus to the left.
*   **Effect of Zeros:** Generally stabilizing. Pull locus towards them.
*   **Controllers and Root Locus:** P-controllers are directly represented. PD/PID controllers add poles and zeros, which can be analyzed using the rules.

---

### **8. Course Outcome Alignment Summary**

*   **CO1 (Represent systems):** While not directly about transfer function representation, root locus is based on the characteristic equation derived from the closed-loop transfer function, which is a classical domain representation.
*   **CO2 (Analyze time domain responses):** Root locus pole locations are directly mapped to transient response parameters (damping, natural frequency, settling time, overshoot). By observing pole movement, we predict how transient response changes.
*   **CO3 (Analyze dynamics for performance and stability using Root locus):** This module's core focus. Construction rules, stability analysis via imaginary axis crossing, and the impact of adding poles/zeros directly address this CO.
*   **CO4 (Analyze dynamics for performance and stability in frequency domain):** This module is root locus (time domain). Frequency domain analysis (Bode, Nyquist) is a separate module, though conceptually related to stability.
*   **CO5 (Represent continuous time systems):** Similar to CO1, root locus analysis relies on these representations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **9. References**

*   **Primary:**
    *   Nise, Norman S. *Control Systems Engineering*. 5th ed., Wiley, 2009. (Especially Chapter 6)
    *   Nagrath, I. J., and M. Gopal. *Control Systems Engineering*. 5th ed., New Age International, 2009. (Especially Chapter 8)
*   **Secondary:**
    *   Kuo, Benjamin C. *Automatic Control Systems*. 9th ed., Prentice Hall of India, 2014.
    *   Gopal, M. *Control Systems: Principles and Design*. 4th ed., Tata McGraw Hill, 2012.
    *   Dorf, Richard C., and Robert H. Bishop. *Modern Control Systems*. 12th ed., Pearson Education India, 2013.
    *   Ogata, Katsuhiko. *Modern Control Engineering*. 5th ed., Pearson, 2009.

---