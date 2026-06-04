---
title: "Root Locus Techniques : Introduction, properties and its construction."
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe959"
status: "completed"
scrapedAt: "2026-05-23T17:54:43.867Z"
---
# CONTROL SYSTEMS: Module 3 - Stability of Linear Control Systems
## Topic: Root Locus Techniques

**Course Outcome Alignment:** This topic directly contributes to **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (Knowledge Level: K3)**. It provides a graphical method to assess stability as a parameter (gain) changes.

**Learning Outcomes:**
*   Understand the concept of the root locus and its purpose in stability analysis.
*   Identify the key properties of the root locus.
*   Learn the systematic procedure for constructing root locus plots.
*   Relate the root locus to system stability (BIBO stability).

---

### 1. Introduction to Root Locus Techniques

The Root Locus technique is a powerful graphical method used to analyze the stability and transient response of a closed-loop control system as a specific parameter, typically the open-loop gain ($K$), is varied over its entire range from 0 to infinity.

**Key Concepts:**

*   **Closed-Loop Transfer Function (CLTF):** For a standard unity feedback system, the CLTF is given by:
    $T(s) = \frac{G(s)}{1 + G(s)H(s)}$
    where $G(s)$ is the forward path transfer function and $H(s)$ is the feedback path transfer function.

*   **Characteristic Equation:** The denominator of the CLTF, when set to zero, gives the characteristic equation of the system:
    $1 + G(s)H(s) = 0$

*   **Poles of the CLTF:** The roots of the characteristic equation are the poles of the closed-loop system. The location of these poles in the s-plane determines the system's stability and transient response.

*   **Open-Loop Poles and Zeros:**
    *   **Open-Loop Poles:** The roots of the denominator of $G(s)H(s)$.
    *   **Open-Loop Zeros:** The roots of the numerator of $G(s)H(s)$.

*   **The Root Locus:** The root locus is the locus of the roots of the characteristic equation as the gain $K$ varies from 0 to $\infty$. For a system with an open-loop transfer function $KG'(s)H(s)$, the characteristic equation is $1 + KG'(s)H(s) = 0$, or $KG'(s)H(s) = -1$.

**Purpose of Root Locus:**

*   **Stability Analysis:** Determine the range of $K$ for which the closed-loop system is stable (i.e., all closed-loop poles lie in the Left Half of the s-plane - LHP).
*   **Transient Response Analysis:** Understand how the location of closed-loop poles (and thus transient response characteristics like damping ratio, natural frequency, settling time, etc.) changes with $K$.
*   **System Design:** Provide insights into how to choose controller parameters (often represented by $K$) to achieve desired performance and stability.

**Textbook References:**

*   **Nagarath & Gopal:** Discusses the fundamental principles of root locus as a graphical method for analyzing characteristic equation roots as gain varies. (Chapter 5)
*   **Kuo & Golnaraghi:** Introduces root locus as a powerful tool for understanding the effect of gain on system stability and transient response. (Chapter 6)
*   **Ogata:** Explains the significance of root locus in relation to pole locations and system stability. (Chapter 6)

---

### 2. Properties of the Root Locus

The construction of a root locus plot can be simplified by understanding its inherent properties. These properties are derived from the characteristic equation $1 + G(s)H(s) = 0$.

**Key Properties:**

1.  **Number of Branches:** The number of branches of the root locus is equal to the number of poles of the open-loop transfer function, $G(s)H(s)$, which is also equal to the order of the characteristic equation.
    *   *Example:* If $G(s)H(s)$ has 3 poles, there will be 3 branches in the root locus.

2.  **Starting and Ending Points:**
    *   Each branch starts at an open-loop pole (when $K=0$).
    *   Each branch terminates at an open-loop zero (as $K \to \infty$). If the number of poles ($n$) is greater than the number of zeros ($m$), then $n-m$ branches tend to infinity.

3.  **Symmetry:** The root locus is symmetric with respect to the real axis. This is because if $s$ is a root of the characteristic equation, its complex conjugate $\bar{s}$ must also be a root.

4.  **Locus on the Real Axis:** A point on the real axis is part of the root locus if there is an **odd** number of open-loop poles and zeros to its right.
    *   *Nagarath & Gopal:* This property is crucial for drawing the segments of the locus on the real axis.

5.  **Asymptotes:** For branches that tend to infinity, they approach straight lines called asymptotes.
    *   **Angle of Asymptotes:** Given by $\phi = \frac{(2k+1)\pi}{n-m}$, where $k = 0, 1, 2, \ldots, n-m-1$. ($n$ = number of poles, $m$ = number of zeros of $G(s)H(s)$).
    *   **Centroid of Asymptotes:** The point where the asymptotes intersect on the real axis is given by:
        $\sigma_a = \frac{\sum (\text{real parts of finite poles}) - \sum (\text{real parts of finite zeros})}{n-m}$
    *   *Ogata:* Provides a detailed derivation and explanation of asymptotes and their centroid.

6.  **Breakaway and Break-in Points:**
    *   **Breakaway Point:** A point on the real axis where a root locus branch leaves the real axis to enter the complex plane. These points occur where the derivative of $G(s)H(s)$ with respect to $s$ is zero, or can be approximated by checking points on the real axis where the locus "turns" away from the real axis.
    *   **Break-in Point:** A point on the real axis where two root locus branches merge and enter the real axis from the complex plane. Similar to breakaway points, they occur at points where the derivative is zero.
    *   *Kuo & Golnaraghi:* Explains the conditions for breakaway points and provides methods for their determination.

7.  **Intersection with Imaginary Axis:** The root locus may intersect the imaginary axis. This intersection point marks the boundary between stability and instability. It can be found by using the Routh-Hurwitz criterion. When an entry in the first column of the Routh array becomes zero, and the corresponding auxiliary equation gives roots on the imaginary axis, this is an intersection point.
    *   *CO3 Alignment:* This property directly links root locus to stability analysis using Routh-Hurwitz.

8.  **Angle of Departure/Arrival:**
    *   **Angle of Departure:** The angle at which a root locus branch leaves an open-loop pole.
        $\phi_{dep} = 180^\circ - (\sum \text{angles from other poles to that pole} - \sum \text{angles from zeros to that pole})$
    *   **Angle of Arrival:** The angle at which a root locus branch arrives at an open-loop zero.
        $\phi_{arr} = 180^\circ - (\sum \text{angles from zeros to that zero} - \sum \text{angles from poles to that zero})$
    *   *Nagarath & Gopal:* These formulas are essential for accurately sketching the initial direction of branches leaving poles or arriving at zeros.

9.  **Centroid of Finite Poles and Zeros:** If $n-m > 1$, the root locus is influenced by the centroid of the finite poles and zeros. The centroid is calculated as the average of the pole and zero locations.

10. **Effect of Adding Poles and Zeros:**
    *   Adding an open-loop zero to $G(s)H(s)$ attracts the root locus towards it. It tends to shift the breakaway points to the right and can improve system stability.
    *   Adding an open-loop pole to $G(s)H(s)$ repels the root locus away from it. It tends to shift the breakaway points to the left and can degrade system stability.

**Important Points to Remember:**
*   The root locus plots the *closed-loop* pole locations.
*   Stability is achieved when all closed-loop poles are in the LHP.
*   The imaginary axis represents the boundary of stability. Crossing it into the RHP signifies instability.
*   The gain $K$ determines the position of the closed-loop poles along the root locus branches.

---

### 3. Construction of Root Locus Plots

A systematic procedure for constructing root locus plots is crucial for accurate analysis. The following steps, based on the properties discussed, form the standard construction method.

**Procedure:**

**Step 1: Plot Open-Loop Poles and Zeros**
*   Mark the open-loop poles ($s = -p_i$) with an 'x' and open-loop zeros ($s = -z_i$) with an 'o' in the s-plane.

**Step 2: Determine the Number of Branches**
*   The number of branches is equal to the number of open-loop poles ($n$).

**Step 3: Locus on the Real Axis**
*   Identify segments on the real axis that lie to the right of an odd number of poles and zeros. These segments form part of the root locus.

**Step 4: Calculate Asymptotes**
*   Calculate the angles of the asymptotes using $\phi = \frac{(2k+1)\pi}{n-m}$ for $k = 0, 1, \ldots, n-m-1$.
*   Calculate the centroid of the asymptotes using $\sigma_a = \frac{\sum p_i - \sum z_i}{n-m}$.
*   Draw the asymptotes originating from the centroid at the calculated angles.

**Step 5: Find Breakaway and Break-in Points**
*   The characteristic equation is $1 + KG(s)H(s) = 0$, so $K = -\frac{1}{G(s)H(s)}$.
*   To find breakaway/break-in points, differentiate $K$ with respect to $s$ and set it to zero: $\frac{dK}{ds} = 0$.
*   Alternatively, consider the characteristic equation $P(s) = \det(sI - A) = 0$ for state-space representation, or $1 + G(s)H(s) = 0$. Let $G(s)H(s) = \frac{N(s)}{D(s)}$. Then the characteristic equation is $D(s) + N(s) = 0$. To find $\frac{dK}{ds} = 0$, we can rewrite $K = -\frac{D(s)}{N(s)}$. Then $\frac{dK}{ds} = -\frac{N(s)D'(s) - D(s)N'(s)}{(N(s))^2} = 0$. This implies $N(s)D'(s) - D(s)N'(s) = 0$. Solve this equation for $s$. Only real roots that lie on the locus segments (i.e., have an odd number of poles/zeros to their right) are valid breakaway/break-in points.
*   *Ogata* emphasizes this derivative method for finding breakaway points.

**Step 6: Find Intersection with Imaginary Axis**
*   Use the Routh-Hurwitz criterion on the characteristic equation $1 + G(s)H(s) = 0$.
*   Find the value of $K$ that makes the first element of a column zero (or causes an entire row to be zero). This value of $K$ corresponds to the system being marginally stable, with roots on the imaginary axis.
*   The auxiliary equation formed from the row above the row of zeros gives the location of the roots on the imaginary axis.
*   This step helps determine the range of $K$ for stability and marks the point where the locus crosses the $j\omega$ axis.

**Step 7: Calculate Angles of Departure and Arrival**
*   If branches leave poles or arrive at zeros in the complex plane, calculate their initial angles using the formulas:
    *   Angle of Departure from a pole $s_i$: $\phi_{dep}(s_i) = 180^\circ - \sum_{j=1}^{n} \angle(s_i - p_j) + \sum_{k=1}^{m} \angle(s_i - z_k)$, where the summation over poles excludes the pole $s_i$ itself.
    *   Angle of Arrival at a zero $s_k$: $\phi_{arr}(s_k) = 180^\circ - \sum_{j=1}^{n} \angle(s_k - p_j) + \sum_{l=1}^{m} \angle(s_k - z_l)$, where the summation over zeros excludes the zero $s_k$ itself.
*   *Nagarath & Gopal* provides these formulas and examples for their application.

**Step 8: Plot the Locus**
*   Sketch the root locus branches based on the information gathered from the previous steps. Ensure symmetry about the real axis.
*   The gain $K$ at any point $s$ on the locus can be calculated as $K = \frac{1}{|G(s)H(s)|}$.

**Example Illustration (Conceptual):**

Consider an open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.
*   **Poles:** $s=0, s=-1, s=-2$ (3 poles).
*   **Zeros:** None (m=0).
*   **Branches:** 3 branches.
*   **Real Axis Locus:** From 0 to $-\infty$, from -1 to -2.
*   **Asymptotes:** $\phi = \frac{(2k+1)\pi}{3-0}$ for $k=0,1,2$.
    *   $k=0: \phi = \pi/3 = 60^\circ$
    *   $k=1: \phi = 3\pi/3 = \pi = 180^\circ$
    *   $k=2: \phi = 5\pi/3 = -60^\circ$ (or $300^\circ$)
*   **Centroid:** $\sigma_a = \frac{0 + (-1) + (-2) - 0}{3} = \frac{-3}{3} = -1$.
*   **Breakaway Point:** Calculation needed.
*   **Imaginary Axis Intersection:** Using Routh-Hurwitz on $s^3 + 3s^2 + 2s + K = 0$.

---

### 4. Stability Analysis using Root Locus

The primary application of the root locus technique is to determine the range of the gain $K$ for which the closed-loop system is stable.

**Key Principles:**

*   **BIBO Stability:** A system is BIBO stable if all its closed-loop poles lie in the Left Half of the s-plane (LHP).
*   **Root Locus and Stability:** As $K$ increases, the closed-loop poles move along the root locus branches.
    *   If a branch crosses the imaginary axis into the Right Half of the s-plane (RHP) for some value of $K$, the system becomes unstable for gains greater than that value.
    *   The value of $K$ at which the locus crosses the imaginary axis is the **critical gain** ($K_{crit}$).
    *   The system is stable for $0 \le K < K_{crit}$.
    *   For $K = K_{crit}$, the system is marginally stable (oscillatory).
    *   For $K > K_{crit}$, the system is unstable.

**Example:**

Consider the system with $G(s)H(s) = \frac{K}{s(s+2)}$.
Characteristic equation: $1 + \frac{K}{s(s+2)} = 0 \implies s^2 + 2s + K = 0$.
The roots are $s = \frac{-2 \pm \sqrt{4 - 4K}}{2} = -1 \pm \sqrt{1-K}$.

*   For $K=0$, roots are $s=0, s=-2$. (Stable, one pole at origin).
*   For $0 < K < 1$, roots are $s = -1 \pm \sqrt{1-K}$ (real, negative, in LHP).
*   For $K = 1$, roots are $s = -1$ (repeated, stable).
*   For $K > 1$, roots are $s = -1 \pm j\sqrt{K-1}$ (complex conjugate, in LHP).

Let's find the imaginary axis intersection using Routh-Hurwitz for $s^2 + 2s + K = 0$:

| s² | 1 | K |
|----|---|---|
| s¹ | 2 | 0 |
| s⁰ | K |   |

For stability, all entries in the first column must be positive.
*   $2 > 0$ (satisfied)
*   $K > 0$ (satisfied for the typical range of K)

The characteristic equation $s^2 + 2s + K = 0$ implies that the roots are always symmetric about the real axis and have a real part of -1 (from the $s^1$ coefficient when normalized).
This system is stable for all $K>0$. However, let's modify it slightly.

Consider $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$. Characteristic equation: $s^3 + 3s^2 + 2s + K = 0$.
Routh Array:

| s³ | 1   | 2 |
|----|-----|---|
| s² | 3   | K |
| s¹ | $\frac{3 \times 2 - 1 \times K}{3}$ = $\frac{6-K}{3}$ | 0 |
| s⁰ | K   |   |

For stability, all first column entries must be positive:
1.  $1 > 0$ (True)
2.  $3 > 0$ (True)
3.  $\frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$
4.  $K > 0$ (True)

Thus, the system is stable for $0 < K < 6$.
*   At $K=6$, the $s^1$ row is zero. The auxiliary equation is $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
*   The critical gain is $K_{crit} = 6$. The system is marginally stable for $K=6$ with oscillations at $\omega = \sqrt{2}$ rad/sec.
*   For $K > 6$, the system becomes unstable.

**Reference Books:**

*   **Nise:** Provides a comprehensive chapter on root locus, detailing the construction steps and their application in stability analysis. (Chapter 6)
*   **DiStefano, Stubberud, Williams:** Also covers root locus as a primary tool for understanding stability boundaries.

---

### Practice Questions

1.  For the open-loop transfer function $G(s)H(s) = \frac{K(s+1)}{s(s+2)(s+3)}$, determine:
    a.  The number of branches of the root locus.
    b.  The points where the locus intersects the real axis.
    c.  The centroid and angles of the asymptotes.
    d.  The angles of departure from the complex poles (if any).
    e.  The number of loci tending to infinity.

2.  A unity feedback system has an open-loop transfer function $G(s)H(s) = \frac{K}{s(s^2 + 4s + 8)}$. Determine the range of $K$ for which the closed-loop system is stable. Also, find the value of $K$ for which the system is marginally stable and the frequency of oscillation.

3.  Sketch the root locus for $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$. Identify the breakaway points and the gain at these points.

---

### Answers to Practice Questions

**1. For $G(s)H(s) = \frac{K(s+1)}{s(s+2)(s+3)}$**

*   **a. Number of branches:** There are 3 poles and 1 zero in the open-loop transfer function. Therefore, there are **3 branches**.
*   **b. Real axis locus:**
    *   Poles: 0, -2, -3. Zero: -1.
    *   Segments on the real axis:
        *   To the right of 0: 0 poles, 0 zeros. (No locus)
        *   Between 0 and -1: 1 pole (at 0), 0 zeros. (Odd number of poles/zeros) -> **Locus from 0 to -1**.
        *   Between -1 and -2: 2 poles (at 0, -2), 1 zero (at -1). (Even number of poles/zeros) -> (No locus)
        *   Between -2 and -3: 3 poles (at 0, -2, -3), 1 zero (at -1). (Odd number of poles/zeros) -> **Locus from -2 to -3**.
        *   To the left of -3: 3 poles, 1 zero. (Even number of poles/zeros) -> (No locus)
*   **c. Centroid and angles of asymptotes:**
    *   $n=3$ (poles), $m=1$ (zero). $n-m = 2$.
    *   Centroid: $\sigma_a = \frac{(0 + (-2) + (-3)) - (-1)}{3-1} = \frac{-5 + 1}{2} = \frac{-4}{2} = -2$.
    *   Angles: $\phi = \frac{(2k+1)\pi}{2}$ for $k=0, 1$.
        *   $k=0: \phi = \frac{\pi}{2} = 90^\circ$.
        *   $k=1: \phi = \frac{3\pi}{2} = 270^\circ$ (or $-90^\circ$).
*   **d. Angles of departure:**
    *   From pole at $s=0$:
        $\phi_{dep}(0) = 180^\circ - (\angle(0 - (-1)) + \angle(0 - (-2)) + \angle(0 - (-3))) + \angle(0 - (-1))$
        $\phi_{dep}(0) = 180^\circ - (90^\circ + 63.4^\circ + 53.1^\circ) + 90^\circ$
        $\phi_{dep}(0) = 180^\circ - 206.5^\circ + 90^\circ = 63.5^\circ$.
    *   From pole at $s=-2$:
        $\phi_{dep}(-2) = 180^\circ - (\angle(-2 - 0) + \angle(-2 - (-1)) + \angle(-2 - (-3))) + \angle(-2 - (-1))$
        $\phi_{dep}(-2) = 180^\circ - (180^\circ + 135^\circ + 45^\circ) + 180^\circ$
        $\phi_{dep}(-2) = 180^\circ - 360^\circ + 180^\circ = 0^\circ$.
    *   From pole at $s=-3$:
        $\phi_{dep}(-3) = 180^\circ - (\angle(-3 - 0) + \angle(-3 - (-1)) + \angle(-3 - (-2))) + \angle(-3 - (-1))$
        $\phi_{dep}(-3) = 180^\circ - (108.4^\circ + 116.6^\circ + 90^\circ) + 135^\circ$
        $\phi_{dep}(-3) = 180^\circ - 315^\circ + 135^\circ = 0^\circ$.
*   **e. Number of loci tending to infinity:** Since $n-m = 2$, **2 branches** tend to infinity, following the asymptotes. One branch terminates at the zero at $s=-1$.

**2. For $G(s)H(s) = \frac{K}{s(s^2 + 4s + 8)}$**

*   Characteristic equation: $1 + \frac{K}{s(s^2 + 4s + 8)} = 0$
    $s(s^2 + 4s + 8) + K = 0$
    $s^3 + 4s^2 + 8s + K = 0$

*   Routh Array:
    | s³ | 1   | 8 |
    |----|-----|---|
    | s² | 4   | K |
    | s¹ | $\frac{4 \times 8 - 1 \times K}{4}$ = $\frac{32-K}{4}$ | 0 |
    | s⁰ | K   |   |

*   For stability, all first column entries must be positive:
    1.  $1 > 0$ (True)
    2.  $4 > 0$ (True)
    3.  $\frac{32-K}{4} > 0 \implies 32-K > 0 \implies K < 32$
    4.  $K > 0$ (True)

*   **Range of K for stability:** $0 < K < 32$.

*   **Marginal stability:** Occurs when the $s^1$ row is zero, i.e., $\frac{32-K}{4} = 0 \implies K = 32$.
    *   The auxiliary equation is $4s^2 + K = 0$.
    *   Substitute $K=32$: $4s^2 + 32 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2\sqrt{2}$.
    *   The frequency of oscillation is $\omega = 2\sqrt{2}$ rad/sec.

**3. Sketch the root locus for $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$**

*   **Poles:** 0, -1, -2. **Zeros:** None. $n=3, m=0$.
*   **Branches:** 3 branches.
*   **Real Axis Locus:**
    *   To the right of 0: No locus.
    *   Between 0 and -1: Odd number of poles (1 at 0). **Locus from 0 to -1**.
    *   Between -1 and -2: Even number of poles (2 at 0, -1). No locus.
    *   To the left of -2: Odd number of poles (3 at 0, -1, -2). **Locus from -2 to $-\infty$**.
*   **Asymptotes:**
    *   $n-m = 3$. Angles: $\frac{\pi}{3}, \pi, \frac{5\pi}{3}$ ($60^\circ, 180^\circ, 300^\circ$ or $-60^\circ$).
    *   Centroid: $\sigma_a = \frac{0 + (-1) + (-2)}{3} = -1$.
*   **Breakaway Point:**
    *   $K = -s(s+1)(s+2) = -(s^3 + 3s^2 + 2s)$
    *   $\frac{dK}{ds} = -(3s^2 + 6s + 2) = 0 \implies 3s^2 + 6s + 2 = 0$.
    *   $s = \frac{-6 \pm \sqrt{36 - 4(3)(2)}}{6} = \frac{-6 \pm \sqrt{36 - 24}}{6} = \frac{-6 \pm \sqrt{12}}{6} = \frac{-6 \pm 2\sqrt{3}}{6} = -1 \pm \frac{\sqrt{3}}{3}$.
    *   $s_1 = -1 + \frac{\sqrt{3}}{3} \approx -1 + 0.577 = -0.423$. This point is between 0 and -1, which is a locus segment. So, this is a breakaway point.
    *   $s_2 = -1 - \frac{\sqrt{3}}{3} \approx -1 - 0.577 = -1.577$. This point is between -1 and -2, which is NOT a locus segment.
    *   The breakaway point is at $s \approx -0.423$.
    *   Gain at breakaway point: $K = -(-0.423)(-0.423+1)(-0.423+2) = -(-0.423)(0.577)(1.577) \approx 0.385$.
*   **Imaginary Axis Intersection:**
    *   Characteristic equation: $s^3 + 3s^2 + 2s + K = 0$.
    *   From Routh Array: $\frac{6-K}{3} = 0 \implies K=6$.
    *   Marginal stability gain is $K_{crit} = 6$.
    *   Auxiliary equation: $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
    *   The locus crosses the imaginary axis at $\pm j\sqrt{2}$ when $K=6$.
*   **Sketch:** The locus starts at 0, -1, -2. A branch leaves 0 at $0^\circ$ (along real axis). A branch leaves -1 at $180^\circ$ (along real axis, break-in, though the calculation showed breakaway at -0.423, suggesting a more complex shape). Two branches break away from the real axis between 0 and -1 and between -2 and $-\infty$, heading towards the asymptotes at $\pm 60^\circ$. The two complex branches meet at the imaginary axis at $\pm j\sqrt{2}$ when $K=6$, and then split, moving towards the asymptotes at $\pm 60^\circ$ to infinity. The branch from -1 heads towards the zero at -1, but since there are more poles than zeros, it must also go to infinity along the $180^\circ$ asymptote. This indicates a possible break-in point on the real axis. The $s_2 = -1.577$ calculation from $\frac{dK}{ds}=0$ is not a break-in point for this specific $K$ polynomial. The sketch would show:
    *   One branch from $s=0$ to $s=-1$.
    *   One branch from $s=-2$ going to infinity along the $180^\circ$ asymptote.
    *   Two branches originating from $s=0$ and $s=-1$ at angles $60^\circ$ and $-60^\circ$ respectively (after breaking away), going to infinity along the $\pm 60^\circ$ asymptotes. The initial departure angle from $s=0$ is $180^\circ$. From $s=-1$ it is $180^\circ$. From $s=-2$ it is $180^\circ$. This suggests a misinterpretation of the property or requires a more careful sketch.
    *   *Correction/Refinement:* The departure angles from poles 0, -1, -2 are all $180^\circ$ (along the real axis towards negative infinity). The locus segments on the real axis are from 0 to -1 and from -2 to $-\infty$. The breakaway point is at $s \approx -0.423$. So, two branches break away from this point at $\pm 60^\circ$. The third branch from the pole at $s=-2$ goes towards $-\infty$ along the real axis ($180^\circ$ asymptote). The two complex branches meet at the $j\omega$ axis at $\pm j\sqrt{2}$ (for $K=6$) and then proceed towards infinity along the $\pm 60^\circ$ asymptotes.

---

### Highlighted Points to Remember

*   **Root Locus = Closed-Loop Pole Locus.**
*   **Stability:** All closed-loop poles must be in the LHP.
*   **Gain K:** Varies from 0 to $\infty$.
*   **Number of Branches = Number of Open-Loop Poles.**
*   **Branches start at Open-Loop Poles (K=0) and end at Open-Loop Zeros (K=$\infty$) or tend to infinity.**
*   **Real Axis Locus:** Segment is valid if an **odd** number of poles/zeros are to its right.
*   **Asymptotes:** Predict the behavior of branches tending to infinity.
*   **Imaginary Axis Crossing:** Indicates the boundary of stability and provides the critical gain ($K_{crit}$).

---

### Further Study Resources:

*   **Ogata, K. (2015).** *Modern Control Engineering* (5th ed.). Pearson. (Chapter 6)
*   **Nagarath, I. J., & Gopal, M. (2022).** *Control Systems Engineering* (7th ed.). New Age International Publishers. (Chapter 5)
*   **Kuo, B. C., & Golnaraghi, F. (2017).** *Automatic Control Systems* (10th ed.). Wiley. (Chapter 6)
*   **Nise, N. S. (2017).** *Nise's Control Systems Engineering* (8th ed.). Wiley India. (Chapter 6)

These notes provide a foundational understanding of root locus techniques, aligning with CO3. Consistent practice with construction and analysis is key to mastering this topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
