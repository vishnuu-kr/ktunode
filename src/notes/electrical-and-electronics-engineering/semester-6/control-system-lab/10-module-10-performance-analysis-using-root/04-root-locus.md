---
title: "Root Locus:"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677b"
status: "completed"
scrapedAt: "2026-05-23T16:25:25.638Z"
---
# Control System Lab: Module 10 - Performance Analysis using Root Locus

## 1. Introduction to Root Locus

The Root Locus technique is a graphical method used to determine how the closed-loop poles of a control system change as a system parameter (typically the gain, $K$) is varied from zero to infinity. It provides a visual representation of the system's stability and transient response characteristics.

**Key Concept:** The closed-loop transfer function $T(s)$ of a unity feedback system is given by:

$T(s) = \frac{G(s)}{1 + G(s)H(s)}$

where $G(s)$ is the open-loop transfer function and $H(s)$ is the feedback path transfer function. For a unity feedback system, $H(s) = 1$, so:

$T(s) = \frac{G(s)}{1 + G(s)}$

The closed-loop poles are the roots of the characteristic equation:

$1 + G(s)H(s) = 0$

The Root Locus plot shows the paths of these closed-loop poles in the complex s-plane as the gain $K$ varies.

**Learning Outcome Alignment:** This topic directly supports **CO3** by providing a method to analyze the behavior of linear continuous-time systems. It also lays the groundwork for **CO4** by understanding how pole locations influence system performance.

**Textbook Reference:**
*   **Ogata:** Chapter 6, "Root Locus Techniques"
*   **Nise:** Chapter 6, "Root Locus Techniques"
*   **Nagrath & Gopal:** Chapter 5, "Root Locus Techniques"

---

## 2. Basic Concepts and Definitions

*   **Characteristic Equation:** The equation $1 + G(s)H(s) = 0$ which defines the locations of the closed-loop poles.
*   **Open-Loop Transfer Function ($G(s)H(s)$):** The transfer function of the system in the forward path (including the feedback path for general cases).
*   **Poles of the Open-Loop Transfer Function:** The roots of the denominator polynomial of $G(s)H(s)$. These are the starting points of the root locus branches for $K=0$.
*   **Zeros of the Open-Loop Transfer Function:** The roots of the numerator polynomial of $G(s)H(s)$. These are the ending points of some root locus branches as $K \to \infty$.
*   **Root Locus Branches:** The loci of the closed-loop poles as the gain $K$ varies from $0$ to $\infty$.
*   **Number of Branches:** The number of root locus branches is equal to the number of poles of the open-loop transfer function.
*   **Symmetry:** The root locus is always symmetrical with respect to the real axis because the complex poles and zeros of $G(s)H(s)$ always occur in conjugate pairs.
*   **Gain ($K$):** The variable parameter, typically a positive gain, that is varied from $0$ to $\infty$.

**Important Point to Remember:** The root locus shows the *paths* of the closed-loop poles. For a specific value of gain $K$, the actual locations of the closed-loop poles are on these paths.

---

## 3. Sketching the Root Locus

This section outlines the fundamental rules for sketching the root locus plot.

### 3.1. Rule 1: Starting and Ending Points

*   **Start:** Root locus branches begin at the poles of the open-loop transfer function ($K=0$).
*   **End:** Root locus branches end at the zeros of the open-loop transfer function as $K \to \infty$. If the number of poles is greater than the number of zeros, the remaining branches tend towards infinity along asymptotes.

**Example:**
Consider $G(s)H(s) = \frac{K}{s(s+2)}$.
*   Open-loop poles: $s=0$ and $s=-2$.
*   Open-loop zeros: None.
*   There will be two root locus branches, starting at $s=0$ and $s=-2$. Since there are no finite zeros, both branches will tend towards infinity.

### 3.2. Rule 2: Number of Branches

*   The number of root locus branches is equal to the number of poles of $G(s)H(s)$.

### 3.3. Rule 3: Locus on the Real Axis

*   A point on the real axis is part of the root locus if there is an odd number of poles and zeros to its right (counting multiplicities).

**Example (Continuing from above):**
$G(s)H(s) = \frac{K}{s(s+2)}$
*   Real axis segments:
    *   For $s < -2$: There are 2 poles to the right (0 and -2). An even number, so no locus here.
    *   For $-2 < s < 0$: There is 1 pole to the right (-2). An odd number, so the segment from $s=-2$ to $s=0$ is part of the root locus.
    *   For $s > 0$: There are 0 poles to the right. An even number, so no locus here.
*   The root locus exists on the real axis between $s=-2$ and $s=0$.

### 3.4. Rule 4: Asymptotes

*   When the number of poles ($n$) is greater than the number of zeros ($m$), $n-m$ branches tend to infinity along asymptotes.
*   **Centroid of Asymptotes ($\sigma_a$):** The intersection of the asymptotes with the real axis.
    $\sigma_a = \frac{\sum \text{poles} - \sum \text{zeros}}{n-m}$
*   **Angle of Asymptotes ($\theta_a$):**
    $\theta_a = \frac{(2k+1)\pi}{n-m}$ for $k = 0, 1, 2, ..., n-m-1$.

**Example (Continuing from above):**
$G(s)H(s) = \frac{K}{s(s+2)}$
*   $n=2$ (poles at 0, -2), $m=0$. $n-m=2$. So, 2 asymptotes.
*   Centroid: $\sigma_a = \frac{(0 + (-2)) - 0}{2-0} = \frac{-2}{2} = -1$.
*   Angles:
    *   For $k=0$: $\theta_a = \frac{(2(0)+1)\pi}{2} = \frac{\pi}{2}$ (90 degrees)
    *   For $k=1$: $\theta_a = \frac{(2(1)+1)\pi}{2} = \frac{3\pi}{2}$ (270 degrees)
*   The asymptotes are lines passing through $\sigma_a = -1$ at angles of $90^\circ$ and $270^\circ$. These are vertical lines at $s=-1$.

### 3.5. Rule 5: Breakaway and Break-in Points

*   **Breakaway Points:** Points on the real axis where a root locus branch leaves the real axis to enter the complex plane. These occur where the derivative of the characteristic equation with respect to $s$ is zero, or more practically, where the gain $K$ has a local maximum on the real axis.
*   **Break-in Points:** Points on the real axis where two root locus branches merge and move along the real axis. These also occur where the derivative of the characteristic equation with respect to $s$ is zero, or where $K$ has a local minimum on the real axis.

**To find breakaway/break-in points:**
1.  Obtain the characteristic equation $1 + G(s)H(s) = 0$.
2.  Express $K$ as a function of $s$: $K = -G(s)H(s)$.
3.  Differentiate $K$ with respect to $s$: $\frac{dK}{ds}$.
4.  Set $\frac{dK}{ds} = 0$ and solve for $s$. The real roots of this equation that lie on the root locus are the breakaway or break-in points.

**Example (Continuing from above):**
$G(s)H(s) = \frac{K}{s(s+2)}$
*   Characteristic equation: $1 + \frac{K}{s(s+2)} = 0 \implies s(s+2) + K = 0 \implies s^2 + 2s + K = 0$.
*   Express K: $K = -(s^2 + 2s)$.
*   Differentiate with respect to s: $\frac{dK}{ds} = -(2s + 2)$.
*   Set $\frac{dK}{ds} = 0$: $-(2s + 2) = 0 \implies s = -1$.
*   The point $s=-1$ lies on the real axis segment (between -2 and 0) where the locus exists. Thus, $s=-1$ is a breakaway point.
*   At $s=-1$, the gain $K = -((-1)^2 + 2(-1)) = -(1 - 2) = 1$.
*   So, the two branches leaving $s=0$ and $s=-2$ will meet at $s=-1$ and then break away towards the asymptotes at $s=-1$.

### 3.6. Rule 6: Intersection with the Imaginary Axis (J $\omega$ Axis)

*   The points where the root locus crosses the imaginary axis can be found using the Routh-Hurwitz stability criterion.
*   Set up the Routh array for the characteristic equation.
*   An entry of zero in a row indicates that the locus crosses the imaginary axis. The auxiliary equation (formed from the row above the zero row) gives the roots on the imaginary axis.
*   The value of gain $K$ for which this occurs is the **gain margin**.

**Example (Continuing from above):**
Characteristic equation: $s^2 + 2s + K = 0$.
Routh Array:
| $s^2$ | 1   | K   |
|-------|-----|-----|
| $s^1$ | 2   | 0   |
| $s^0$ | K   | 0   |

*   For stability, all entries in the first column must be positive.
*   $1 > 0$ (stable)
*   $2 > 0$ (stable)
*   $K > 0$ (stable)
*   If $K=0$, the roots are $s=0$ and $s=-2$.
*   The locus touches the imaginary axis when the $s^1$ row becomes zero. This happens when $K=0$.
*   The auxiliary equation when $s^1$ row is zero is formed from the $s^2$ row: $1 s^2 + K = 0$.
*   If $s^1$ row is zero, it means we have a row of zeros, and the auxiliary equation is formed from the previous row. In this specific case, for $s^1$ row to be zero, we need the entry to be zero, which happens when the $s^0$ row term is zero, which is $K=0$.
*   Let's re-evaluate the Routh array for stability. The condition for the locus to cross the imaginary axis is that a row in the Routh array becomes all zeros. This typically happens for a specific value of $K$.
*   In this case, the $s^1$ row is 2. The $s^0$ row is $K$. For the locus to cross the $j\omega$ axis, we need a change of sign in the first column, or a row of zeros.
*   Consider a system where $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.
    Characteristic equation: $1 + \frac{K}{s(s+1)(s+2)} = 0 \implies s^3 + 3s^2 + 2s + K = 0$.
    Routh Array:
    | $s^3$ | 1   | 2   |
    |-------|-----|-----|
    | $s^2$ | 3   | K   |
    | $s^1$ | $\frac{6-K}{3}$ | 0   |
    | $s^0$ | K   | 0   |
    *   For stability, $1>0$, $3>0$, $K>0$, and $\frac{6-K}{3}>0$.
    *   The critical value of $K$ is when $\frac{6-K}{3} = 0 \implies K = 6$.
    *   At $K=6$, the $s^1$ row is zero. The auxiliary equation is formed from the $s^2$ row: $3s^2 + K = 0$.
    *   Substituting $K=6$: $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
    *   So, the locus crosses the imaginary axis at $s = \pm j\sqrt{2}$ when $K=6$. This is the gain margin.

### 3.7. Rule 7: Angle of Departure and Arrival

*   **Angle of Departure:** The angle at which a root locus branch leaves an open-loop pole.
    Angle of Departure from pole $s_p = 180^\circ - (\sum \text{angles to zeros} - \sum \text{angles to other poles})$
*   **Angle of Arrival:** The angle at which a root locus branch arrives at an open-loop zero.
    Angle of Arrival at zero $s_z = 180^\circ - (\sum \text{angles to poles} - \sum \text{angles to other zeros})$

**Example (Continuing from $G(s)H(s) = \frac{K}{s(s+2)}$):**
*   No complex poles or zeros, so no angles of departure or arrival are applicable from complex locations.
*   However, if we had $G(s)H(s) = \frac{K}{(s+1+j)(s+1-j)}$, the branches would leave the poles at angles.

**Example with complex poles:**
$G(s)H(s) = \frac{K}{s^2+2s+2}$
*   Poles are at $s = -1 \pm j$.
*   Let's find the angle of departure from $s_p = -1+j$. The other pole is $s_p' = -1-j$. There are no finite zeros.
*   Angle of Departure from $s_p = -1+j$:
    $180^\circ - (\text{angle to } s_p') = 180^\circ - \angle(-1+j - (-1-j))$
    $= 180^\circ - \angle(2j)$
    The angle of $2j$ is $90^\circ$.
    So, Angle of Departure = $180^\circ - 90^\circ = 90^\circ$.
*   By symmetry, the angle of departure from $s_p' = -1-j$ will be $-90^\circ$.

### 3.8. Rule 8: Magnitude Calculation

*   For any point $s$ on the root locus, the value of the gain $K$ is given by:
    $K = \frac{1}{|G(s)H(s)|}$
*   This is found by substituting the point $s$ into the magnitude of the open-loop transfer function.

**Example (Continuing from $G(s)H(s) = \frac{K}{s(s+2)}$):**
*   We found the breakaway point at $s=-1$.
*   $K = \frac{1}{|G(-1)H(-1)|} = \frac{1}{|(-1)(-1+2)|} = \frac{1}{|-1|} = 1$.
*   This confirms the gain at the breakaway point is 1.

### 3.9. Rule 9: Conjugate Pair Intersections

*   When two branches of the root locus cross each other in the complex plane, they represent the same value of $K$. This typically occurs if the open-loop transfer function has poles of order 3 or higher or repeated poles, or if there are complex zeros.

---

## 4. Root Locus for Various System Configurations

This section illustrates how the Root Locus technique is applied to different open-loop transfer functions.

### 4.1. Case 1: Pure Integrator or Pure Gain ($G(s)H(s) = K/s^n$)

**Example:** $G(s)H(s) = K/s$
*   Pole at $s=0$.
*   Number of branches = 1.
*   Real axis locus: For $s < 0$, 1 pole to the right (odd). Locus exists on the negative real axis.
*   Asymptotes: $n=1, m=0$. $n-m=1$ asymptote.
    *   Centroid: $\sigma_a = \frac{0 - 0}{1-0} = 0$.
    *   Angle: $\theta_a = \frac{(2(0)+1)\pi}{1} = \pi$ (180 degrees).
*   Asymptote is the negative real axis.
*   Breakaway/break-in: Not applicable as there's only one branch.
*   Intersection with j$\omega$ axis: No. The locus is entirely on the real axis.
*   Sketch: The locus starts at $s=0$ and moves along the negative real axis towards $-\infty$.

**Example:** $G(s)H(s) = K/(s(s+a))$ (already analyzed in Rule 3.3)
*   Poles at $s=0, s=-a$.
*   Locus on real axis between 0 and -a.
*   Asymptotes at $s = -a/2 \pm j\infty$ (vertical lines).
*   Breakaway point at $s = -a/2$. Gain $K = a^2/4$.
*   When $K < a^2/4$, poles are real. When $K > a^2/4$, poles are complex conjugates.

### 4.2. Case 2: Systems with Zeros

**Example:** $G(s)H(s) = \frac{K(s+z_1)}{s(s+p_1)}$
*   Pole at $s=0$, pole at $s=-p_1$. Zero at $s=-z_1$.
*   Number of branches = 2.
*   Start at $s=0$ and $s=-p_1$. End at $s=-z_1$ and $\infty$.
*   Real axis locus: Check segments based on the number of poles and zeros to the right.
*   Asymptotes: $n=2, m=1$. $n-m=1$ asymptote.
    *   Centroid: $\sigma_a = \frac{(0 + (-p_1)) - (-z_1)}{2-1} = \frac{-p_1+z_1}{1} = z_1 - p_1$.
    *   Angle: $\theta_a = \frac{(2(0)+1)\pi}{1} = \pi$ (180 degrees).
*   Breakaway/break-in points analysis is crucial here.

**Example:** $G(s)H(s) = \frac{K(s+1)}{s(s+2)(s+3)}$
*   Poles at $s=0, s=-2, s=-3$. Zero at $s=-1$.
*   Number of branches = 3.
*   Start at $s=0, s=-2, s=-3$. End at $s=-1$ and $\infty$ (2 branches).
*   Real axis locus:
    *   $s<-3$: 3 poles, 0 zeros (odd) -> locus.
    *   $-3<s<-2$: 2 poles, 0 zeros (even) -> no locus.
    *   $-2<s<-1$: 1 pole, 0 zeros (odd) -> locus.
    *   $-1<s<0$: 1 pole, 1 zero (even) -> no locus.
    *   $s>0$: 0 poles, 1 zero (odd) -> locus.
*   Asymptotes: $n=3, m=1$. $n-m=2$ asymptotes.
    *   Centroid: $\sigma_a = \frac{(0 + (-2) + (-3)) - (-1)}{3-1} = \frac{-5+1}{2} = \frac{-4}{2} = -2$.
    *   Angles: $\theta_a = \frac{\pi}{2}, \frac{3\pi}{2}$ (90 and 270 degrees).
*   Breakaway/break-in points need calculation.
*   Intersection with j$\omega$ axis needs calculation.

### 4.3. Case 3: Systems with Poles and Zeros in Complex Plane

**Example:** $G(s)H(s) = \frac{K(s+2)}{(s+1+j)(s+1-j)}$
*   Poles at $s=-1 \pm j$. Zero at $s=-2$.
*   Number of branches = 2.
*   Start at $s=-1+j$ and $s=-1-j$. End at $s=-2$ and $\infty$.
*   Real axis locus:
    *   $s<-2$: 2 poles, 1 zero (odd) -> locus.
    *   $-2<s<-1$: 2 poles, 0 zeros (even) -> no locus.
    *   $s>-1$: 0 poles, 1 zero (odd) -> locus.
*   Asymptotes: $n=2, m=1$. $n-m=1$ asymptote.
    *   Centroid: $\sigma_a = \frac{(-1+j) + (-1-j) - (-2)}{2-1} = \frac{-2 - (-2)}{1} = 0$.
    *   Angle: $\theta_a = \frac{\pi}{1} = \pi$ (180 degrees).
*   Angles of departure from complex poles are important.
    *   From $s_p = -1+j$:
        Angle to zero at $s_z = -2$: $\angle(-1+j - (-2)) = \angle(1+j) = 45^\circ$.
        Angle to other pole at $s_p' = -1-j$: $\angle(-1+j - (-1-j)) = \angle(2j) = 90^\circ$.
        Angle of Departure = $180^\circ - (45^\circ - 90^\circ)$ (Note: sum of angles to zeros minus sum of angles to poles is not quite right, it's sum of angles to other poles and zeros).
        Correct formula: $180^\circ - (\sum \angle \text{to zeros} - \sum \angle \text{to other poles})$
        Angle of Departure = $180^\circ - (\angle(-1+j - (-2)) - \angle(-1+j - (-1-j)))$
        Angle of Departure = $180^\circ - (45^\circ - 90^\circ)$ is incorrect.
        Let's re-state the rule:
        Angle of Departure from pole $s_p = 180^\circ - (\sum \phi_{pz} - \sum \phi_{pp})$
        where $\phi_{pz}$ are angles from $s_p$ to zeros, and $\phi_{pp}$ are angles from $s_p$ to other poles.
        Angle of Departure from $s_p = -1+j$:
        $\phi_{pz}$ (to $s_z=-2$): Angle of $(-1+j) - (-2) = \angle(1+j) = 45^\circ$.
        $\phi_{pp}$ (to $s_p'=-1-j$): Angle of $(-1+j) - (-1-j) = \angle(2j) = 90^\circ$.
        Angle of Departure = $180^\circ - (45^\circ - 90^\circ)$ is still not right. The formula is:
        Angle of Departure = $180^\circ - \sum_{\text{finite zeros}} \angle(s_p - z_i) + \sum_{\text{other poles}} \angle(s_p - p_j)$
        Angle of Departure = $180^\circ - (\angle(-1+j - (-2))) + \angle(-1+j - (-1-j))$
        Angle of Departure = $180^\circ - (\angle(1+j)) + \angle(2j)$
        Angle of Departure = $180^\circ - (45^\circ) + 90^\circ = 225^\circ$ or $-135^\circ$.

        Let's check again from Nise (6th Ed., p. 233):
        Angle of departure from a pole $p_i$ = $180^\circ - (\sum \text{angle to finite zeros} - \sum \text{angle to other poles})$
        Angle of departure from $-1+j$:
        Angle to zero at $-2$: $\angle(-1+j - (-2)) = \angle(1+j) = 45^\circ$.
        Angle to pole at $-1-j$: $\angle(-1+j - (-1-j)) = \angle(2j) = 90^\circ$.
        Angle of departure = $180^\circ - (45^\circ - 90^\circ)$ is still not matching.

        Let's use the "path to infinity" perspective. The locus ends at infinity along asymptotes. The angles to infinity are given by the asymptote angles.
        The angle of arrival is the negative of the angle of departure from the zero.

        The most common formulation is:
        Angle of Departure from a pole $p_i = 180^\circ - (\sum_{j \neq i} \angle(p_i - p_j) + \sum_{k} \angle(p_i - z_k))$
        where angles are measured from the positive real axis.
        From $s_p = -1+j$:
        Angle to pole $s_p' = -1-j$: $\angle(-1+j - (-1-j)) = \angle(2j) = 90^\circ$.
        Angle to zero $s_z = -2$: $\angle(-1+j - (-2)) = \angle(1+j) = 45^\circ$.
        Angle of Departure = $180^\circ - (90^\circ + 45^\circ) = 180^\circ - 135^\circ = 45^\circ$.
        By symmetry, angle of departure from $-1-j$ is $-45^\circ$.

        So the branches leave the complex poles at angles of $45^\circ$ and $-45^\circ$. They will meet at some point and then head towards infinity along the asymptote at $s=0$ at $180^\circ$. This implies they don't reach the zero at $-2$. Let's re-check the asymptote calculation.

        $G(s)H(s) = \frac{K(s+2)}{(s+1+j)(s+1-j)} = \frac{K(s+2)}{s^2+2s+2}$
        *   $n=2, m=1$. $n-m=1$.
        *   Centroid: $\sigma_a = \frac{(-1+j) + (-1-j) - (-2)}{2-1} = \frac{-2 - (-2)}{1} = 0$.
        *   Angle: $\theta_a = \frac{(2(0)+1)\pi}{1} = \pi$.
        *   The asymptote is the negative real axis ($s=0$ at $180^\circ$).

        Let's consider where the branches end. One branch ends at $s=-2$. The other ends at infinity along the negative real axis.
        The branches leave the complex poles at $\pm 45^\circ$. They will curve towards each other. Since the asymptote is the negative real axis, they will eventually merge and go along the negative real axis.

---

## 5. Performance Analysis using Root Locus

The root locus provides insights into the transient and steady-state performance of the closed-loop system.

### 5.1. Transient Response

*   **Damping Ratio ($\zeta$):** Lines of constant damping ratio are radial lines from the origin in the s-plane. The angle $\theta$ from the negative real axis is given by $\theta = \cos^{-1}(\zeta)$.
    *   $\zeta = \cos(\theta)$
*   **Natural Frequency ($\omega_n$):** The distance of the pole from the origin represents the natural frequency ($\omega_n$).
*   **Damped Natural Frequency ($\omega_d$):** The imaginary part of the complex pole $(\omega_d)$.
*   **Settling Time ($T_s$):** Related to the real part of the dominant poles ($\sigma$). For a second-order system, $T_s \approx 4/\zeta\omega_n = -4/\text{Re}(p)$.
*   **Peak Overshoot ($M_p$):** Related to the damping ratio. $M_p = e^{-\pi \zeta / \sqrt{1-\zeta^2}}$.
*   **Rise Time ($T_r$):** Related to the natural frequency. $T_r \approx \frac{\pi}{\omega_n}$.

**Learning Outcome Alignment:** This directly addresses **CO2** by explaining how to determine performance specifications from the root locus.

**Textbook Reference:**
*   **Ogata:** Chapter 6.7, "Performance from the Root Locus"
*   **Nise:** Chapter 6.5, "Sensitivity of Root Locus to Parameter Variations", and Chapter 6.6, "The Effect of Adding Poles and Zeros to the Root Locus" (which relates to performance indirectly).

**Example:**
If a closed-loop pole is at $s = -2 + j3$, then:
*   $\zeta = \cos(\theta)$, where $\tan(\theta) = 3/2$. $\theta = \tan^{-1}(1.5) \approx 56.3^\circ$. So, $\zeta = \cos(56.3^\circ) \approx 0.55$.
*   $\omega_n = \sqrt{(-2)^2 + 3^2} = \sqrt{4+9} = \sqrt{13} \approx 3.6$ rad/s.
*   $\omega_d = 3$ rad/s.
*   $T_s \approx -4/(-2) = 2$ seconds.
*   $M_p = e^{-\pi (0.55) / \sqrt{1-(0.55)^2}} \approx e^{-1.726 / 0.836} \approx e^{-2.06} \approx 0.127$ or 12.7%.

### 5.2. Stability

*   **Absolute Stability:** Determined by whether all closed-loop poles lie in the left-half of the s-plane (real part < 0).
*   **Marginal Stability:** Occurs when poles lie on the imaginary axis (real part = 0), provided there are no poles in the right-half plane.
*   **Instability:** Occurs when any closed-loop pole lies in the right-half of the s-plane (real part > 0).

The Routh-Hurwitz criterion is used to find the gain at which the locus crosses the imaginary axis, indicating the boundary of stability.

**Learning Outcome Alignment:** This relates to **CO1** and **CO2** as determining stability is a fundamental performance specification.

---

## 6. Using MATLAB for Root Locus Analysis

MATLAB's Control System Toolbox provides efficient tools for generating and analyzing root locus plots.

*   **`tf(num, den)`:** Creates a transfer function object.
*   **`rlocus(G)`:** Generates the root locus plot for a given transfer function `G`.
*   **`rlocfind(G)`:** Allows you to interactively select a point on the root locus plot and find the corresponding gain $K$ and closed-loop poles.

**Example:**
```matlab
% Define the open-loop transfer function
num = [1];
den = [1, 2, 0]; % s*(s+2)
G = tf(num, den);

% Generate the root locus plot
figure;
rlocus(G);
title('Root Locus for G(s) = 1/(s(s+2))');
grid on;

% To find gain and poles at a specific damping ratio (e.g., zeta = 0.5)
% zeta = 0.5;
% k = rlocfind(G, zeta); % This is not directly supported by rlocfind like this.
% A better approach is to find the locus of poles for that zeta.

% Overlay lines of constant zeta
sgrid(0.5, {}); % Overlay damping ratio lines

% To find gain and poles at a specific point, e.g., s = -1 + j*sqrt(3)
% s_point = -1 + 1i*sqrt(3);
% k_point = rlocfind(G); % Click on the plot near the desired point
```

**Learning Outcome Alignment:** This directly supports **CO3** (Analyze a linear continuous time system model using simulation tools).

---

## 7. Practice Questions and Answers

**Question 1:**
For the open-loop transfer function $G(s)H(s) = \frac{K(s+1)}{s(s+2)}$, sketch the root locus. Identify the breakaway point and the gain at which the locus crosses the imaginary axis.

**Answer 1:**
*   **Poles:** $s=0, s=-2$. **Zero:** $s=-1$.
*   **Branches:** 2. Start at 0, -2. End at -1 and $\infty$.
*   **Real Axis:** Locus exists for $s<-2$ and $-1<s<0$.
*   **Asymptotes:** $n=2, m=1 \implies n-m=1$.
    *   Centroid: $\sigma_a = \frac{(0 + (-2)) - (-1)}{2-1} = \frac{-2+1}{1} = -1$.
    *   Angle: $\theta_a = \frac{\pi}{1} = 180^\circ$ (negative real axis).
*   **Breakaway Point:**
    $K = -\frac{s(s+2)}{s+1} = -\frac{s^2+2s}{s+1}$.
    $\frac{dK}{ds} = -\frac{(2s+2)(s+1) - (s^2+2s)(1)}{(s+1)^2} = 0$.
    $(2s+2)(s+1) - (s^2+2s) = 0$.
    $2s^2 + 2s + 2s + 2 - s^2 - 2s = 0$.
    $s^2 + 2s + 2 = 0$.
    $s = \frac{-2 \pm \sqrt{4 - 4(1)(2)}}{2} = \frac{-2 \pm \sqrt{-4}}{2} = -1 \pm j$.
    The real axis segment is between $-1$ and $0$. The complex roots indicate that there are no breakaway or break-in points on the real axis. This means the locus leaves the poles $s=0$ and $s=-2$ and heads directly towards the asymptote at $s=-1$. It does not break away on the real axis.
    *Correction*: The calculation of $\frac{dK}{ds}$ should be done carefully. Let's re-evaluate the breakaway point calculation.
    $K = -\frac{s^2+2s}{s+1}$.
    $\frac{dK}{ds} = - \frac{(2s+2)(s+1) - (s^2+2s)(1)}{(s+1)^2} = - \frac{2s^2+2s+2s+2 - s^2-2s}{(s+1)^2} = - \frac{s^2+2s+2}{(s+1)^2}$.
    Setting $\frac{dK}{ds}=0$ gives $s^2+2s+2=0$, whose roots are $s=-1 \pm j$. These are not on the real axis where the locus exists. Therefore, there are no breakaway points on the real axis for this system. The locus branches will leave the poles and approach the asymptote.

*   **Imaginary Axis Crossing:**
    Characteristic Equation: $1 + \frac{K(s+1)}{s(s+2)} = 0 \implies s(s+2) + K(s+1) = 0 \implies s^2+2s + Ks+K = 0 \implies s^2 + (2+K)s + K = 0$.
    Routh Array:
    | $s^2$ | 1   | K   |
    |-------|-----|-----|
    | $s^1$ | 2+K | 0   |
    | $s^0$ | K   | 0   |
    For stability, $1>0$, $2+K>0$, and $K>0$.
    $2+K>0 \implies K>-2$.
    The condition for crossing the imaginary axis is when a row becomes zero. The $s^1$ row is $2+K$. If $2+K=0$, then $K=-2$. However, we consider $K \ge 0$. The $s^0$ row is $K$. If $K=0$, the roots are $s=0$ and $s=-2$.
    For the locus to cross the imaginary axis, we would need a row of zeros. This happens when the $s^1$ entry becomes zero *and* the $s^0$ entry is also zero, which implies $K=0$ and $2+K=0$. This is not possible for $K>0$.
    Let's re-examine the characteristic equation $s^2 + (2+K)s + K = 0$.
    The roots are $s = \frac{-(2+K) \pm \sqrt{(2+K)^2 - 4K}}{2}$.
    For the locus to cross the imaginary axis, the real part of the roots must be zero. This means $2+K=0 \implies K=-2$. But gain is usually positive.
    If $K>0$, then $2+K>0$. The roots will always have negative real parts.
    Consider if the system might become unstable for large $K$. As $K \to \infty$, the roots go to the zero at $s=-1$ and the asymptote at $s=-1$.
    The roots are $s = \frac{-(2+K) \pm \sqrt{4+4K+K^2-4K}}{2} = \frac{-(2+K) \pm \sqrt{K^2+4}}{2}$.
    The real part is always negative for $K>0$.
    Thus, for $K \ge 0$, the system remains stable. There is no crossing of the imaginary axis for positive gain.

**Question 2:**
What are the conditions for a closed-loop system to be stable based on the root locus?

**Answer 2:**
A closed-loop system is stable if and only if all the closed-loop poles lie in the left-half of the complex s-plane (i.e., the real part of every pole is negative). The root locus shows the paths of these poles as the gain $K$ varies. The system becomes unstable if any part of the root locus enters the right-half plane (real part > 0). The gain value at which the locus crosses the imaginary axis is the critical gain, marking the boundary between stability and instability.

**Question 3:**
Describe how to determine the damping ratio ($\zeta$) from a root locus plot.

**Answer 3:**
Lines of constant damping ratio ($\zeta$) in the s-plane are radial lines originating from the origin. For a complex conjugate pole $s = -\sigma + j\omega_d$, the damping ratio is given by $\zeta = \cos(\theta)$, where $\theta$ is the angle the line from the origin to the pole makes with the negative real axis. Alternatively, $\zeta = \frac{\sigma}{\omega_n} = \frac{|\text{Re}(p)|}{|p|}$. On a root locus plot, one can draw these radial lines for desired $\zeta$ values and find the intersection points with the root locus branches to determine the corresponding gain $K$ and pole locations.

---

## 8. Important Points to Remember

*   The root locus plots the *closed-loop poles*.
*   Branches *start* at open-loop poles and *end* at open-loop zeros or infinity.
*   The number of branches equals the number of open-loop poles.
*   Root locus is symmetric about the real axis.
*   Points on the real axis are on the locus if an odd number of poles/zeros are to their right.
*   Asymptotes are useful for sketching the locus as it goes to infinity.
*   Breakaway/break-in points are where locus leaves/enters the real axis.
*   Imaginary axis crossing indicates the boundary of stability.
*   The root locus is a powerful tool for **performance analysis** (stability, transient response) and **controller design**.
*   MATLAB is essential for accurate and efficient root locus plotting.

---

## 9. Alignment with Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.** (Indirectly related: Root locus analysis assumes a system model is available. Understanding system behavior through root locus can guide what parameters are critical to measure.)
*   **CO2: Conduct suitable experiments and determine the performance specifications.** (Directly related: This module teaches how to interpret performance metrics like damping ratio, settling time, and overshoot from the root locus plot of a system model.)
*   **CO3: Analyse a linear continuous time system model using simulation tools.** (Directly related: Root locus is a core analysis technique, and MATLAB simulation tools are emphasized for this purpose.)
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.** (Directly related: Understanding how changing open-loop poles/zeros (via controller design) shifts the root locus is fundamental to designing controllers to achieve desired performance.)

---

This comprehensive set of notes covers the fundamental concepts of Root Locus, its sketching rules, performance analysis, and its application using simulation tools, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
