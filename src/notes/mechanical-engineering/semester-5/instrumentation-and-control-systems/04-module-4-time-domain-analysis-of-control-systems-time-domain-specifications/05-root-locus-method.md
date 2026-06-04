---
title: "Root locus method."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463680"
status: "completed"
scrapedAt: "2026-05-20T18:00:47.656Z"
---
This is a comprehensive set of study notes for the Root Locus method in the context of Instrumentation and Control Systems, specifically focusing on Module 4: Time Domain Analysis of Control Systems and Time Domain Specifications. These notes are structured to cover the provided learning outcomes, align with course outcomes (especially CO5 and CO6), and incorporate concepts from the specified textbooks.

---

# INSTRUMENTATION AND CONTROL SYSTEMS

## Module 4: Time Domain Analysis of Control Systems: Time Domain Specifications

### Topic: Root Locus Method

---

### 1. Introduction to Root Locus Method

The Root Locus method is a graphical technique used to determine the locus of the closed-loop poles of a control system as a parameter (typically the open-loop gain $K$) is varied from 0 to $\infty$. It provides valuable insights into the stability and transient response characteristics of a closed-loop system without actually solving the characteristic equation for each value of $K$.

**Key Concepts:**

*   **Open-Loop Transfer Function (G(s)H(s)):** The transfer function of the system without feedback.
*   **Closed-Loop Transfer Function:** The transfer function of the system with feedback.
*   **Characteristic Equation:** The equation obtained by setting the denominator of the closed-loop transfer function to zero. The roots of this equation are the closed-loop poles.
*   **Closed-Loop Poles:** The roots of the characteristic equation. The location of these poles in the s-plane dictates the system's transient response and stability.
*   **Parameter Variation:** The root locus plots how the closed-loop poles move as a specific system parameter (usually gain $K$) changes.

**Importance in Control System Analysis:**

*   **Stability:** The root locus helps determine the range of gain $K$ for which the system is stable. If any part of the locus crosses the imaginary axis into the right-half plane, the system becomes unstable.
*   **Transient Response:** The location of closed-loop poles directly influences the transient response. For example, poles closer to the real axis correspond to faster responses, while poles further away correspond to slower responses. The damping ratio ($\zeta$) and natural frequency ($\omega_n$) can be estimated from the pole locations.
*   **System Performance:** By observing the movement of poles, one can select an appropriate gain $K$ to achieve desired performance specifications like settling time, rise time, and overshoot.

**Alignment with Course Outcomes:**

*   **CO5:** "To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance." This topic directly addresses the application of the root locus technique for performance assessment.
*   **CO6:** "Analyse the stability of the given LTI system." The root locus is a primary tool for stability analysis.

**Textbook References:**

*   **Nise N.S. (Control Systems Engineering, 6/e):** Chapter 6 provides an extensive treatment of the Root Locus method.
*   **Ogata K (Modern Control Engineering, 5/e):** Chapter 6 also covers the Root Locus technique with many examples.
*   **Kuo B. C. (Automatic Control Systems, 7/e):** Chapter 7 discusses the Root Locus method.

---

### 2. The Concept of Root Locus

The characteristic equation of a closed-loop system with unity feedback is given by:

$1 + G(s)H(s) = 0$

Where $G(s)$ is the forward-path transfer function and $H(s)$ is the feedback-path transfer function.

The open-loop transfer function is typically expressed as:

$G(s)H(s) = K \frac{(s - z_1)(s - z_2)...}{(s - p_1)(s - p_2)...}$

Where $z_i$ are the open-loop zeros and $p_i$ are the open-loop poles.

The characteristic equation can be rewritten as:

$G(s)H(s) = -1$

This equation is satisfied when both the magnitude and phase conditions are met:

*   **Magnitude Condition:** $|G(s)H(s)| = 1$
*   **Phase Condition:** $\angle G(s)H(s) = (2k + 1)180^\circ$, where $k = 0, \pm 1, \pm 2, ...$

The root locus is the set of points in the s-plane that satisfy the phase condition for some value of $K \ge 0$. The magnitude condition is used to find the specific value of $K$ for a given point on the locus.

**Example:**

Consider a system with the open-loop transfer function:

$G(s)H(s) = \frac{K}{s(s+1)}$

The characteristic equation is:

$1 + \frac{K}{s(s+1)} = 0$

$s(s+1) + K = 0$

$s^2 + s + K = 0$

The closed-loop poles are the roots of this equation:

$s = \frac{-1 \pm \sqrt{1 - 4K}}{2}$

As $K$ varies:
*   If $K=0$, $s = 0, -1$ (open-loop poles).
*   If $K=0.25$, $s = -0.5$ (repeated real poles).
*   If $K > 0.25$, the poles become complex conjugates on the imaginary axis, starting from $s = -0.5$.

**High-Level Concept:** The root locus visualizes how the "natural frequencies" of the system change as the system's gain is adjusted.

**Textbook References:**

*   **Doebelin E.O. (Measurement systems applications and design, 1990):** Chapter 12 discusses the graphical methods for system analysis, including root locus.
*   **Varmah K.R. (Control Systems, 2010):** Chapter 6 covers the root locus method in detail.

---

### 3. Rules for Sketching the Root Locus

These rules allow us to sketch the root locus plot without directly solving the characteristic equation for every value of $K$.

**Important Points to Remember:**

*   The root locus starts at the open-loop poles (when $K=0$) and terminates at the open-loop zeros or at infinity (as $K \to \infty$).
*   The number of loci branches is equal to the number of open-loop poles.
*   The number of loci terminating at infinity is equal to the difference between the number of poles and zeros ($P-Z$).

**Rules:**

1.  **Number of Loci:** The number of root locus branches is equal to the number of open-loop poles, $P$.
2.  **Starting and Ending Points:** Each branch of the root locus starts at an open-loop pole (for $K=0$) and ends at an open-loop zero or at infinity (as $K \to \infty$).
3.  **Symmetry:** The root locus is symmetric with respect to the real axis because complex roots of polynomials with real coefficients occur in conjugate pairs.
4.  **Location on Real Axis:** A point on the real axis is part of the root locus if it has an **odd** number of open-loop poles and zeros to its right.
    *   **Example:** If poles are at -1, -2 and zero at -3, then the locus exists on the real axis in intervals $(-\infty, -3]$, $[-2, -1]$.
5.  **Asymptotes:** For $K \to \infty$, when the number of poles $P$ is greater than the number of zeros $Z$, the root locus branches move towards infinity along asymptotes.
    *   **Number of Asymptotes:** $P - Z$
    *   **Centroid of Asymptotes ($\sigma_a$):** The intersection of the asymptotes on the real axis.
        $\sigma_a = \frac{\sum \text{finite pole locations} - \sum \text{finite zero locations}}{P - Z}$
    *   **Angle of Asymptotes ($\theta_a$):**
        $\theta_a = \frac{(2k + 1)180^\circ}{P - Z}$, for $k = 0, 1, 2, ..., (P - Z - 1)$
6.  **Breakaway and Break-in Points:**
    *   **Breakaway Point:** A point on the real axis where two or more root locus branches leave the real axis to form complex conjugate branches. It occurs where $dK/ds = 0$.
    *   **Break-in Point:** A point on the real axis where two or more root locus branches approach from infinity and enter the real axis. It also occurs where $dK/ds = 0$.
    *   These points are found by solving $dK/ds = 0$ from the characteristic equation written as $K = -G(s)H(s)$.
7.  **Imaginary Axis Crossings:** The points where the root locus intersects the imaginary axis can be found using the Routh-Hurwitz stability criterion. The value of $K$ at this intersection point represents the gain margin.
8.  **Angle of Departure from Poles and Angle of Arrival at Zeros:**
    *   **Angle of Departure from a Pole:** The angle at which a locus branch leaves a pole.
        $\phi_{dep} = 180^\circ - \sum (\text{angle from other poles to the pole}) + \sum (\text{angle from zeros to the pole})$
    *   **Angle of Arrival at a Zero:** The angle at which a locus branch arrives at a zero.
        $\phi_{arr} = 180^\circ - \sum (\text{angle from other zeros to the zero}) + \sum (\text{angle from poles to the zero})$
9.  **Number of Real and Complex Loci:** The number of loci that are real is equal to the number of poles and zeros on the real axis. The remaining loci will be complex conjugate pairs.

**Textbook References:**

*   **Nise N.S. (Control Systems Engineering, 6/e):** Chapter 6 provides detailed explanations and derivations for these rules.
*   **Ogata K (Modern Control Engineering, 5/e):** Chapter 6 applies these rules through numerous examples.

---

### 4. Examples of Root Locus Sketching

Let's sketch the root locus for a few typical systems.

**Example 1: $G(s)H(s) = \frac{K}{s(s+2)}$**

*   **Open-loop poles:** $s=0, s=-2$. $P=2$.
*   **Open-loop zeros:** None. $Z=0$.
*   **Number of loci:** 2 branches.
*   **Starting points:** $s=0, s=-2$.
*   **Ending points:** Both branches go to infinity. $P-Z = 2$.
*   **Symmetry:** Symmetric about the real axis.
*   **Real axis locus:** The interval $(-\infty, -2]$ is on the locus because there are 2 poles to the right of points in this interval. The interval $[-2, 0]$ is NOT on the locus (1 pole). The interval $[0, \infty)$ is NOT on the locus (0 poles). So, locus exists for $(-\infty, -2]$.
*   **Asymptotes:**
    *   Number of asymptotes: $P-Z = 2$.
    *   Centroid: $\sigma_a = \frac{0 + (-2)}{2 - 0} = -1$.
    *   Angles:
        *   $k=0: \theta_a = \frac{(2(0)+1)180^\circ}{2} = 90^\circ$.
        *   $k=1: \theta_a = \frac{(2(1)+1)180^\circ}{2} = 270^\circ$.
        The asymptotes are lines passing through $\sigma_a = -1$ at angles $90^\circ$ and $270^\circ$, which are the negative imaginary axis and positive imaginary axis respectively.
*   **Breakaway point:**
    Characteristic equation: $s(s+2) + K = 0 \implies s^2 + 2s + K = 0$.
    $K = -(s^2 + 2s)$.
    $\frac{dK}{ds} = -(2s + 2)$.
    Setting $\frac{dK}{ds} = 0 \implies 2s + 2 = 0 \implies s = -1$.
    This is a valid breakaway point since it lies on the real axis segment $(-\infty, -2]$ which is part of the locus.
    At $s=-1$, $K = -((-1)^2 + 2(-1)) = - (1 - 2) = 1$.
*   **Imaginary axis crossing:**
    Routh array for $s^2 + 2s + K = 0$:
    $s^2: 1 \quad K$
    $s^1: 2 \quad 0$
    $s^0: K$
    For stability, all coefficients in the first column must be positive. So, $K > 0$.
    The $s^1$ row has a 2, so no imaginary axis crossing. The system is stable for $0 < K < \infty$.

**Sketch:**
The locus starts at $s=0$ and $s=-2$. One branch goes to infinity along the negative imaginary axis (starting at $s=0$), and another branch goes to infinity along the positive imaginary axis (starting at $s=-2$). These branches meet at $s=-1$ (breakaway point) and proceed along the asymptotes. The entire real axis segment from $-\infty$ to $-2$ is a part of the locus.

---

**Example 2: $G(s)H(s) = \frac{K(s+3)}{s(s+1)}$**

*   **Open-loop poles:** $s=0, s=-1$. $P=2$.
*   **Open-loop zeros:** $s=-3$. $Z=1$.
*   **Number of loci:** 2 branches.
*   **Starting points:** $s=0, s=-1$.
*   **Ending points:** One branch ends at $s=-3$, the other goes to infinity. $P-Z = 1$.
*   **Symmetry:** Symmetric about the real axis.
*   **Real axis locus:**
    *   $(-\infty, -3]$: 2 poles and 1 zero to the right = 3 (odd) $\implies$ Locus exists.
    *   $[-3, -1]$: 2 poles and 0 zeros to the right = 2 (even) $\implies$ No locus.
    *   $[-1, 0]$: 1 pole and 0 zeros to the right = 1 (odd) $\implies$ Locus exists.
    *   $[0, \infty)$: 0 poles and 0 zeros to the right = 0 (even) $\implies$ No locus.
    Real axis locus exists on $(-\infty, -3]$ and $[-1, 0]$.
*   **Asymptotes:**
    *   Number of asymptotes: $P-Z = 1$.
    *   Centroid: $\sigma_a = \frac{0 + (-1) - (-3)}{2 - 1} = \frac{-1 + 3}{1} = 2$.
    *   Angle: $k=0: \theta_a = \frac{(2(0)+1)180^\circ}{1} = 180^\circ$.
    The asymptote is a line passing through $\sigma_a = 2$ at an angle of $180^\circ$ (negative real axis).
*   **Breakaway point:**
    $K = -\frac{s(s+1)}{s+3} = -\frac{s^2+s}{s+3}$
    $\frac{dK}{ds} = - \frac{(2s+1)(s+3) - (s^2+s)(1)}{(s+3)^2} = - \frac{2s^2 + 6s + s + 3 - s^2 - s}{(s+3)^2} = - \frac{s^2 + 6s + 3}{(s+3)^2}$
    Setting $\frac{dK}{ds} = 0 \implies s^2 + 6s + 3 = 0$.
    $s = \frac{-6 \pm \sqrt{36 - 12}}{2} = \frac{-6 \pm \sqrt{24}}{2} = \frac{-6 \pm 2\sqrt{6}}{2} = -3 \pm \sqrt{6}$.
    $s_1 = -3 + \sqrt{6} \approx -3 + 2.45 = -0.55$. This point is on the real axis locus segment $[-1, 0]$. So it's a valid breakaway point.
    $s_2 = -3 - \sqrt{6} \approx -3 - 2.45 = -5.45$. This point is on the real axis locus segment $(-\infty, -3]$. So it's a valid breakaway point.
    Since the locus on $(-\infty, -3]$ is a single branch going to infinity along the real axis, it's unlikely to have a breakaway point there. The branch starting at $s=0$ will move towards the real axis segment $(-\infty, -3]$ and then leave the real axis. It appears the description of breakaway/break-in points needs careful consideration of how branches move. Let's re-evaluate.

    **Re-analysis of Breakaway/Break-in:**
    The locus exists on $(-\infty, -3]$ and $[-1, 0]$.
    One branch starts at $s=0$ and moves towards the real axis.
    The other branch starts at $s=-1$ and moves towards $s=-3$.
    The branch starting at $s=-1$ will eventually become complex. The branch starting at $s=0$ will move along the real axis towards $s=-1$. The locus on $(-\infty, -3]$ will move towards the real axis.

    Let's check the angles of departure/arrival.
    Angle of departure from $s=0$:
    $\phi_{dep}(0) = 180^\circ - (\angle \text{from } -1 \text{ to } 0) - (\angle \text{from } -3 \text{ to } 0)$
    $\phi_{dep}(0) = 180^\circ - (180^\circ - 0^\circ) - (180^\circ - 0^\circ) = 180^\circ - 180^\circ - 180^\circ = -180^\circ$ or $180^\circ$. This means the locus leaves $s=0$ along the negative real axis. This confirms the locus on $[-1, 0]$ and suggests no complex departure from $s=0$.

    Angle of departure from $s=-1$:
    $\phi_{dep}(-1) = 180^\circ - (\angle \text{from } 0 \text{ to } -1) + (\angle \text{from } -3 \text{ to } -1)$
    $\phi_{dep}(-1) = 180^\circ - (180^\circ - 0^\circ) + (180^\circ - 90^\circ) = 180^\circ - 180^\circ + 90^\circ = 90^\circ$.
    So, the branch from $s=-1$ departs at $90^\circ$.

    Angle of arrival at $s=-3$:
    $\phi_{arr}(-3) = 180^\circ - (\angle \text{from } -1 \text{ to } -3) + (\angle \text{from } 0 \text{ to } -3)$
    $\phi_{arr}(-3) = 180^\circ - (180^\circ - 90^\circ) + (180^\circ - 0^\circ) = 180^\circ - 90^\circ + 180^\circ = 270^\circ$.
    So, the branch arrives at $s=-3$ at $270^\circ$ (negative imaginary axis).

    Now let's consider the breakaway point calculation. The breakaway point occurs where two branches leave the real axis. We found $s = -0.55$ and $s = -5.45$.
    The locus exists on $[-1, 0]$. A branch leaves $s=0$ along the real axis, and another branch leaves $s=-1$ at $90^\circ$. The locus on $(-\infty, -3]$ moves along the real axis.
    The branch starting at $s=0$ moves towards $s=-1$. The branch starting at $s=-1$ moves away. It seems the branch from $s=0$ will reach a point and then potentially break away. However, the calculation of the departure angle from $s=0$ showed it leaves along the negative real axis.

    Let's reconsider the real axis locus.
    $(-\infty, -3]$ has 2 poles, 1 zero (odd). Locus.
    $[-3, -1]$ has 2 poles, 0 zeros (even). No locus.
    $[-1, 0]$ has 1 pole, 0 zeros (odd). Locus.

    A branch starts at $s=-1$ and departs at $90^\circ$. It will eventually arrive at $s=-3$ from $270^\circ$.
    A branch starts at $s=0$ and leaves along the negative real axis.
    The asymptote is at $180^\circ$ through $s=2$. This means a branch will go towards negative infinity along the real axis.

    The only place for a breakaway point is where two real-axis segments join or where a real-axis segment transitions to complex.
    The real axis segments are $(-\infty, -3]$ and $[-1, 0]$.
    The point $s = -3$ is a zero, so a locus branch terminates there.
    The branch starting at $s=-1$ goes to $90^\circ$.
    The branch starting at $s=0$ moves along the real axis.

    Let's re-check the $dK/ds$ for breakaway/break-in points.
    The real axis locus is $(-\infty, -3]$ and $[-1, 0]$.
    The branch from $s=-1$ leaves at $90^\circ$.
    The branch from $s=0$ leaves along the negative real axis.
    The asymptote indicates a branch goes to $-\infty$ along the real axis.
    This suggests the locus on $(-\infty, -3]$ is a single branch extending to $-\infty$.
    The branch starting at $s=-1$ goes into the complex plane.
    The branch starting at $s=0$ goes along the real axis towards $s=-1$.

    Consider the case where the real axis segments meet. They don't.
    The only place a breakaway point can occur is if two branches meet on the real axis and leave it.
    The branch from $s=-1$ goes into the complex plane.
    The branch from $s=0$ moves along the real axis.
    The asymptote indicates a branch goes to $-\infty$ along the real axis.

    Let's test the calculated breakaway points:
    $s_1 = -0.55$: This lies on $[-1, 0]$. If a branch breaks away here, it must go into the complex plane.
    $s_2 = -5.45$: This lies on $(-\infty, -3]$. If a branch breaks away here, it must go into the complex plane.

    Let's verify the Routh-Hurwitz for imaginary axis crossing for $G(s)H(s) = \frac{K(s+3)}{s(s+1)}$.
    Characteristic Equation: $s(s+1) + K(s+3) = 0 \implies s^2 + s + Ks + 3K = 0 \implies s^2 + (1+K)s + 3K = 0$.
    Routh Array:
    $s^2: 1 \quad 3K$
    $s^1: 1+K \quad 0$
    $s^0: 3K$
    For stability, $1+K > 0$ and $3K > 0$. Since $K \ge 0$, $K > 0$ for stability.
    The $s^1$ row has $1+K$. If $1+K=0$, i.e., $K=-1$, the system is marginally stable. But $K$ must be non-negative.
    The system does not cross the imaginary axis for $K \ge 0$.

    **Revised understanding:** The breakaway point $s = -0.55$ is valid for the branch starting at $s=0$ and going towards $s=-1$. At $s=-0.55$, it must go into the complex plane. Since the other branch starts at $s=-1$ and departs at $90^\circ$, it will eventually approach $s=-3$ from the upper half plane. So, a breakaway point at $s=-0.55$ would mean the locus from $s=0$ moves to $s=-0.55$ and then splits into complex conjugates. This is a valid breakaway point.

    The asymptote at $180^\circ$ through $s=2$ implies a branch goes to $-\infty$ on the real axis. The locus on $(-\infty, -3]$ is this single branch.

    **Sketch:**
    Starts at $s=0, s=-1$. Zero at $s=-3$.
    Branch from $s=0$ moves along the real axis until $s=-0.55$, where it breaks into the upper half-plane.
    Branch from $s=-1$ departs at $90^\circ$ (upper half-plane).
    These two complex branches meet and arrive at $s=-3$ from $270^\circ$ (lower half-plane) and $90^\circ$ (upper half-plane) respectively.
    The asymptote at $180^\circ$ through $s=2$ implies a branch goes to $-\infty$ on the real axis. This branch lies on the real axis for $s < -3$.

**Example 3: $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$**

*   **Open-loop poles:** $s=0, s=-1, s=-2$. $P=3$.
*   **Open-loop zeros:** None. $Z=0$.
*   **Number of loci:** 3 branches.
*   **Starting points:** $s=0, s=-1, s=-2$.
*   **Ending points:** All 3 branches go to infinity. $P-Z = 3$.
*   **Symmetry:** Symmetric about the real axis.
*   **Real axis locus:**
    *   $(-\infty, -2]$: 3 poles (odd) $\implies$ Locus exists.
    *   $[-2, -1]$: 2 poles (even) $\implies$ No locus.
    *   $[-1, 0]$: 1 pole (odd) $\implies$ Locus exists.
    Real axis locus exists on $(-\infty, -2]$ and $[-1, 0]$.
*   **Asymptotes:**
    *   Number of asymptotes: $P-Z = 3$.
    *   Centroid: $\sigma_a = \frac{0 + (-1) + (-2)}{3 - 0} = \frac{-3}{3} = -1$.
    *   Angles:
        *   $k=0: \theta_a = \frac{180^\circ}{3} = 60^\circ$.
        *   $k=1: \theta_a = \frac{3 \times 180^\circ}{3} = 180^\circ$.
        *   $k=2: \theta_a = \frac{5 \times 180^\circ}{3} = 300^\circ$ or $-60^\circ$.
    The asymptotes are lines through $s=-1$ at angles $60^\circ, 180^\circ, -60^\circ$.
*   **Breakaway point:**
    $K = -s(s+1)(s+2) = -(s^3 + 3s^2 + 2s)$.
    $\frac{dK}{ds} = -(3s^2 + 6s + 2)$.
    Setting $\frac{dK}{ds} = 0 \implies 3s^2 + 6s + 2 = 0$.
    $s = \frac{-6 \pm \sqrt{36 - 24}}{6} = \frac{-6 \pm \sqrt{12}}{6} = \frac{-6 \pm 2\sqrt{3}}{6} = -1 \pm \frac{\sqrt{3}}{3}$.
    $s_1 = -1 + \frac{\sqrt{3}}{3} \approx -1 + 0.577 = -0.423$. This point is on the real axis locus segment $[-1, 0]$. Valid breakaway point.
    $s_2 = -1 - \frac{\sqrt{3}}{3} \approx -1 - 0.577 = -1.577$. This point is on the real axis locus segment $[-2, -1]$, which has no locus. However, we need to check the real axis locus. The segment $[-1, 0]$ is a locus. The segment $(-\infty, -2]$ is a locus. The center pole is at $s=-1$.
    The locus exists on $[-1, 0]$ and $(-\infty, -2]$. The point $s=-1$ is between two locus segments.
    The real axis locus exists for $(-\infty, -2]$ and $[-1, 0]$.
    The branches start at $0, -1, -2$.
    The branches from $s=-1$ and $s=0$ will meet on the real axis and then break away into the complex plane. This breakaway point must lie on the segment $[-1, 0]$. So $s = -0.423$ is the breakaway point.
    The branch from $s=-2$ must go along the real axis towards $-\infty$. But the real axis locus is only $(-\infty, -2]$ and $[-1, 0]$. This implies the branch from $s=-2$ must go into the complex plane.

    Let's check the angles of departure from poles.
    Angle of departure from $s=0$:
    $\phi_{dep}(0) = 180^\circ - (\angle \text{from } -1 \text{ to } 0) - (\angle \text{from } -2 \text{ to } 0)$
    $\phi_{dep}(0) = 180^\circ - (180^\circ - 0^\circ) - (180^\circ - 0^\circ) = 180^\circ - 180^\circ - 180^\circ = -180^\circ$ (or $180^\circ$).
    So, the branch from $s=0$ leaves along the negative real axis.

    Angle of departure from $s=-1$:
    $\phi_{dep}(-1) = 180^\circ - (\angle \text{from } 0 \text{ to } -1) + (\angle \text{from } -2 \text{ to } -1)$
    $\phi_{dep}(-1) = 180^\circ - (180^\circ - 0^\circ) + (180^\circ - 90^\circ) = 180^\circ - 180^\circ + 90^\circ = 90^\circ$.
    So, the branch from $s=-1$ leaves at $90^\circ$.

    Angle of departure from $s=-2$:
    $\phi_{dep}(-2) = 180^\circ - (\angle \text{from } 0 \text{ to } -2) - (\angle \text{from } -1 \text{ to } -2)$
    $\phi_{dep}(-2) = 180^\circ - (180^\circ - 90^\circ) - (180^\circ - 0^\circ) = 180^\circ - 90^\circ - 180^\circ = -90^\circ$ (or $270^\circ$).
    So, the branch from $s=-2$ leaves at $270^\circ$.

    The branch from $s=0$ moves along the real axis towards $s=-1$.
    The branch from $s=-1$ moves into the upper half-plane at $90^\circ$.
    The branch from $s=-2$ moves into the lower half-plane at $270^\circ$.
    This means there must be a breakaway point between $s=-1$ and $s=0$. The calculated point $s = -0.423$ is on this segment.
    The branch from $s=-2$ will go into the lower half-plane, and the asymptote at $180^\circ$ through $s=-1$ means one branch goes to $-\infty$ along the real axis. This is incorrect based on the real axis locus which is only $(-\infty, -2]$ and $[-1, 0]$.
    The real axis locus exists on $(-\infty, -2]$ and $[-1, 0]$. The branch from $s=-2$ must go into the complex plane. The asymptote at $180^\circ$ through $s=-1$ suggests that the locus from $s=-2$ approaches it.

    Let's re-evaluate the role of asymptotes. They describe the behavior for large $K$.
    The branch from $s=-1$ departs at $90^\circ$, the branch from $s=-2$ departs at $270^\circ$. These two branches will curve and eventually become parallel to the asymptotes.
    The asymptote at $180^\circ$ through $s=-1$ means one branch, for large $K$, will be parallel to the negative real axis. This branch must originate from one of the poles. The pole at $s=-1$ is on the real axis. The pole at $s=-2$ is on the real axis.

    The real axis segments are $(-\infty, -2]$ and $[-1, 0]$.
    Branch 1: Starts at $s=0$, moves along real axis towards $s=-1$. At $s=-0.423$, it breaks away.
    Branch 2: Starts at $s=-1$, departs at $90^\circ$.
    Branch 3: Starts at $s=-2$, departs at $270^\circ$.
    The asymptote at $180^\circ$ through $s=-1$ is for a branch that tends towards $-\infty$. This must be the branch that starts at $s=-2$. It should move along the real axis segment $(-\infty, -2]$. However, the departure angle is $270^\circ$.

    **Imaginary Axis Crossing:**
    Characteristic equation: $s^3 + 3s^2 + 2s + K = 0$.
    Routh Array:
    $s^3: 1 \quad 2$
    $s^2: 3 \quad K$
    $s^1: \frac{6-K}{3} \quad 0$
    $s^0: K$
    For stability, $K>0$ and $\frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$.
    So, for $K=6$, the system is marginally stable.
    The auxiliary equation from the $s^1$ row is $3s^2 + K = 0$.
    For $K=6$, $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
    The root locus crosses the imaginary axis at $\pm j\sqrt{2}$ when $K=6$.

    **Revised Sketch interpretation:**
    Branch 1: Starts at $s=0$, moves along real axis to $s=-0.423$, breaks away into upper half plane.
    Branch 2: Starts at $s=-1$, departs at $90^\circ$.
    Branch 3: Starts at $s=-2$, departs at $270^\circ$.
    The branch from $s=-1$ (departing at $90^\circ$) and the branch from $s=-2$ (departing at $270^\circ$) will curve and eventually be parallel to the asymptotes.
    The asymptote at $180^\circ$ passing through $s=-1$ means one branch goes to $-\infty$ along the real axis. This implies the locus on $(-\infty, -2]$ is a single branch.
    The branches from $s=-1$ and $s=-2$ will curve and approach the asymptotes.
    The imaginary axis crossing at $\pm j\sqrt{2}$ for $K=6$ indicates where the complex branches transition from stable to unstable.

    **Conclusion on Example 3 sketch:**
    One branch starts at $s=0$, moves along the real axis to $s=-0.423$, then enters the upper half plane.
    Another branch starts at $s=-1$ and enters the upper half plane at $90^\circ$. These two branches merge and approach the asymptote at $60^\circ$.
    The third branch starts at $s=-2$ and enters the lower half plane at $270^\circ$. This branch will curve and approach the asymptote at $180^\circ$ passing through $s=-1$, meaning it goes towards $-\infty$ on the real axis. This contradicts the initial observation about real axis locus segments.

    **Let's trust the rule: Real axis locus is $(-\infty, -2]$ and $[-1, 0]$.**
    The branch starting at $s=-2$ must remain on the real axis segment $(-\infty, -2]$. This means it doesn't depart into the complex plane.
    The branches from $s=0$ and $s=-1$ must therefore go to infinity.
    The branch from $s=0$ moves to $s=-0.423$, breaks away, and goes into the complex plane.
    The branch from $s=-1$ departs at $90^\circ$.
    These two branches must combine and go to infinity.

    The asymptote at $180^\circ$ through $s=-1$ should be considered for the locus that goes to infinity.
    The branch from $s=-2$ is on the real axis.
    The branch from $s=0$ goes to $s=-0.423$ and then into complex plane.
    The branch from $s=-1$ goes into complex plane at $90^\circ$.

    **Let's rethink the real axis locus and pole/zero arrangement:**
    Poles at $0, -1, -2$.
    Real axis locus: $(-\infty, -2]$ and $[-1, 0]$.
    Branch 1: Starts at $s=0$, moves along real axis.
    Branch 2: Starts at $s=-1$, moves along real axis.
    Branch 3: Starts at $s=-2$, moves along real axis.
    At some point, two branches must leave the real axis. This happens between $s=-1$ and $s=0$, at $s=-0.423$. So, branches from $s=0$ and $s=-1$ meet at $s=-0.423$ and enter the complex plane.
    Branch 1 (from $s=0$) goes to $s=-0.423$ and then into complex plane.
    Branch 2 (from $s=-1$) goes to $s=-0.423$ and then into complex plane.
    Branch 3 (from $s=-2$) remains on the real axis segment $(-\infty, -2]$. This must go to infinity.

    This implies that for $K > 0$, the locus on $(-\infty, -2]$ is a single branch.
    The branches from $s=0$ and $s=-1$ become complex.

    **Imaginary axis crossing at $\pm j\sqrt{2}$ for $K=6$.**
    The complex branches meet at the imaginary axis.
    The branch from $s=-1$ departs at $90^\circ$.
    The branch from $s=0$ departs along the real axis. They meet at $s=-0.423$ and go into complex plane.

    **Final interpretation for Example 3:**
    *   Branch 1: Starts at $s=-2$, stays on the real axis and goes towards $-\infty$.
    *   Branch 2: Starts at $s=-1$, enters the upper half-plane at $90^\circ$.
    *   Branch 3: Starts at $s=0$, moves along the real axis to $s=-0.423$, then enters the upper half-plane.
    *   Branches 2 and 3 merge and cross the imaginary axis at $\pm j\sqrt{2}$ (when $K=6$). They then continue to infinity, parallel to the asymptotes at $60^\circ$ and $300^\circ$ (or $-60^\circ$).

    **Textbook References:**
    *   **Ogata K (Modern Control Engineering, 5/e):** Chapter 6 has excellent worked-out examples of root locus sketching.
    *   **Nise N.S. (Control Systems Engineering, 6/e):** Chapter 6 provides step-by-step examples.

---

### 5. Using Root Locus for System Design and Performance Analysis

The root locus plot is a powerful tool for designing controllers and analyzing system performance.

**Key Aspects:**

*   **Gain Adjustment ($K$):** By selecting a value of $K$ on the root locus, one can place the closed-loop poles at desired locations to achieve specific transient response characteristics.
    *   **Damping Ratio ($\zeta$) and Natural Frequency ($\omega_n$):** Lines of constant $\zeta$ (radials from the origin) and constant $\omega_n$ (semi-circles centered at the origin) can be superimposed on the root locus plot.
    *   The intersection of the root locus with these lines indicates the value of $K$ that yields the desired $\zeta$ and $\omega_n$.
*   **Pole-Zero Cancellation:** If an added pole of a controller is placed at the location of an existing zero of the system, they can cancel each other out, altering the root locus.
*   **Adding Poles and Zeros:**
    *   **Adding a zero:** Tends to pull the root locus towards the added zero, improving stability and reducing overshoot.
    *   **Adding a pole:** Tends to attract the root locus towards the added pole, potentially degrading stability.
*   **Stability Analysis:** The portion of the root locus in the right-half of the s-plane indicates instability. The gain $K$ at which the locus crosses the imaginary axis is the gain margin.

**Example: Designing for a specific damping ratio**

Consider the system from Example 1: $G(s)H(s) = \frac{K}{s(s+2)}$.
The characteristic equation is $s^2 + 2s + K = 0$.
Closed-loop poles: $s = -1 \pm \sqrt{1-K}$.
For $K>0.25$, poles are $s = -1 \pm j\sqrt{K-1}$.
This is in the form $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.
Comparing $s = -1 \pm j\sqrt{K-1}$:
$-\zeta\omega_n = -1 \implies \zeta\omega_n = 1$.
$\omega_n\sqrt{1-\zeta^2} = \sqrt{K-1}$.
If we want a damping ratio of $\zeta = 0.5$:
$0.5 \omega_n = 1 \implies \omega_n = 2$.
Then, $2\sqrt{1 - 0.5^2} = \sqrt{K-1}$
$2\sqrt{1 - 0.25} = \sqrt{K-1}$
$2\sqrt{0.75} = \sqrt{K-1}$
$2 \times \frac{\sqrt{3}}{2} = \sqrt{K-1}$
$\sqrt{3} = \sqrt{K-1}$
$3 = K-1 \implies K=4$.

So, a gain of $K=4$ will place the closed-loop poles at $s = -1 \pm j\sqrt{4-1} = -1 \pm j\sqrt{3}$.
This corresponds to $\zeta = \frac{1}{\sqrt{1^2+(\sqrt{3})^2}} = \frac{1}{\sqrt{1+3}} = \frac{1}{2} = 0.5$ and $\omega_n = \sqrt{(-1)^2+(\sqrt{3})^2} = \sqrt{1+3} = 2$.

**Alignment with Course Outcomes:**

*   **CO5:** "To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance." This section directly addresses how to use the root locus for performance assessment (achieving desired $\zeta$, $\omega_n$).
*   **CO4:** "To describe the role of various control blocks and components in feedback systems." Understanding how gain $K$ (a control block) affects system performance via the root locus.

**Textbook References:**

*   **Nise N.S. (Control Systems Engineering, 6/e):** Chapter 6 extensively covers the use of root locus for design.
*   **Ogata K (Modern Control Engineering, 5/e):** Chapter 6 also dedicates sections to design applications of the root locus.
*   **Gopal M (Control Systems Principles and Design, 4/e):** Provides insights into design considerations using root locus.

---

### 6. Limitations of the Root Locus Method

While powerful, the root locus method has some limitations.

*   **Parameter Dependence:** The method is primarily used for varying a single parameter (usually gain). Analyzing the effect of changing multiple parameters simultaneously is difficult.
*   **Linear Time-Invariant (LTI) Systems:** The method is strictly applicable only to LTI systems. It cannot be directly used for nonlinear systems or time-varying systems.
*   **Computational Complexity:** For higher-order systems, sketching the root locus can become computationally intensive and error-prone without the aid of software.
*   **Systematic Design for Specific Performance Criteria:** While the locus shows pole locations, translating specific time-domain specifications (like peak time, settling time) directly into desired pole locations can require some iteration or further analysis.
*   **Non-minimum Phase Systems:** The method can still be applied, but interpretation of the results may be less intuitive.

**Textbook References:**

*   **Doebelin E.O. (Measurement systems applications and design, 1990):** While not explicitly listing limitations, its focus on graphical methods implies the need for practical constraints and potential complexity.
*   **Kuo B. C. (Automatic Control Systems, 7/e):** Discusses the advantages and some implicit limitations through examples.

---

### 7. Practice Questions and Exercises

**Question 1:**
For the system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)(s+4)}$, sketch the root locus. Find the breakaway point and the value of $K$ at which the locus crosses the imaginary axis.

**Question 2:**
A unity feedback system has an open-loop transfer function $G(s)H(s) = \frac{K(s+1)}{s^2(s+3)}$. Sketch the root locus and determine the range of $K$ for stability. Find the centroid and angles of asymptotes.

**Question 3:**
Consider a system with $G(s)H(s) = \frac{K}{s+2}$. If you want the dominant closed-loop poles to have a damping ratio of $0.707$, find the required value of $K$. What are the locations of these poles?

**Question 4:**
Explain the significance of asymptotes in the root locus method. How are they calculated?

**Question 5:**
What is the condition for a point $s$ to be on the root locus of a system with open-loop transfer function $G(s)H(s)$?

---

### 8. Answers to Practice Questions

**Answer 1:**
$G(s)H(s) = \frac{K}{s(s+2)(s+4)}$
*   Poles: $0, -2, -4$. Zeros: None. $P=3, Z=0$.
*   Number of loci: 3 branches.
*   Real axis locus: $(-\infty, -4]$, $[-2, -0]$, $[-2, 0]$ no, $[-4, -2]$ yes, $[-0, \infty)$ no. Real axis locus: $(-\infty, -4]$ and $[-2, 0]$.
*   Asymptotes: $P-Z=3$.
    *   Centroid: $\sigma_a = \frac{0 - 2 - 4}{3} = -2$.
    *   Angles: $60^\circ, 180^\circ, 300^\circ$.
*   Breakaway point: $K = -s(s+2)(s+4) = -(s^3 + 6s^2 + 8s)$.
    $\frac{dK}{ds} = -(3s^2 + 12s + 8)$. Setting to zero: $3s^2 + 12s + 8 = 0$.
    $s = \frac{-12 \pm \sqrt{144 - 96}}{6} = \frac{-12 \pm \sqrt{48}}{6} = \frac{-12 \pm 4\sqrt{3}}{6} = -2 \pm \frac{2\sqrt{3}}{3}$.
    $s_1 = -2 + \frac{2\sqrt{3}}{3} \approx -2 + 1.15 = -0.85$. This point lies on $[-2, 0]$, which is part of the locus. This is the breakaway point.
    $s_2 = -2 - \frac{2\sqrt{3}}{3} \approx -2 - 1.15 = -3.15$. This point lies on $(-\infty, -4]$, which is part of the locus. This is not a breakaway point as there are no two branches meeting there.
    Breakaway point: $s \approx -0.85$.
    $K = -(-0.85)^3 - 6(-0.85)^2 - 8(-0.85) \approx -(-0.61) - 6(0.72) + 6.8 \approx 0.61 - 4.32 + 6.8 = 3.09$.
*   Imaginary axis crossing: Characteristic equation: $s^3 + 6s^2 + 8s + K = 0$.
    Routh Array:
    $s^3: 1 \quad 8$
    $s^2: 6 \quad K$
    $s^1: \frac{48-K}{6} \quad 0$
    $s^0: K$
    For stability, $K>0$ and $\frac{48-K}{6} > 0 \implies K < 48$.
    Marginally stable at $K=48$. Auxiliary equation: $6s^2 + K = 0 \implies 6s^2 + 48 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2\sqrt{2}$.

**Answer 2:**
$G(s)H(s) = \frac{K(s+1)}{s^2(s+3)}$
*   Poles: $0, 0, -3$. Zeros: $-1$. $P=3, Z=1$.
*   Number of loci: 3 branches.
*   Real axis locus: $(-\infty, -3]$, $[-1, 0]$.
*   Asymptotes: $P-Z=2$.
    *   Centroid: $\sigma_a = \frac{0 + 0 - 3 - (-1)}{2} = \frac{-2}{2} = -1$.
    *   Angles: $90^\circ, 270^\circ$.
*   Breakaway points: $K = -\frac{s^2(s+3)}{s+1} = -\frac{s^3+3s^2}{s+1}$.
    $\frac{dK}{ds} = - \frac{(3s^2+6s)(s+1) - (s^3+3s^2)(1)}{(s+1)^2} = - \frac{3s^3+3s^2+6s^2+6s - s^3-3s^2}{(s+1)^2} = - \frac{2s^3+6s^2+6s}{(s+1)^2}$.
    Setting to zero: $2s^3+6s^2+6s = 0 \implies 2s(s^2+3s+3) = 0$.
    Solutions: $s=0$. $s^2+3s+3=0 \implies s = \frac{-3 \pm \sqrt{9-12}}{2} = \frac{-3 \pm j\sqrt{3}}{2}$ (complex).
    The real axis locus is on $(-\infty, -3]$ and $[-1, 0]$. $s=0$ is an open-loop pole, not a breakaway point where two loci leave the real axis. The only possible location for a breakaway point is on the segment $[-1, 0]$.
    This system does not have a breakaway point on the real axis from the calculation. Let's check angles of departure.
    Angle of departure from $s=0$ (double pole): This is tricky with multiple poles.
    Let's use the fact that the asymptote is at $90^\circ$ and $270^\circ$ through $s=-1$. This means the branches must end up going parallel to the imaginary axis.
    The locus exists on $(-\infty, -3]$ and $[-1, 0]$.
    A branch starts at $s=-1$ and goes towards infinity along the asymptote at $90^\circ$.
    A branch starts at $s=0$ (double pole). One branch goes along the real axis towards $s=-1$. The other branch must go into the complex plane.
    The branch from $s=0$ that goes along the real axis meets the locus from $(-\infty, -3]$ at $s=-3$ (zero).

    **Stability analysis:**
    Characteristic equation: $s^2(s+3) + K(s+1) = 0 \implies s^3 + 3s^2 + Ks + K = 0$.
    Routh Array:
    $s^3: 1 \quad K$
    $s^2: 3 \quad K$
    $s^1: \frac{3K-K}{3} = \frac{2K}{3} \quad 0$
    $s^0: K$
    For stability, $K>0$. The system is stable for $K>0$. There is no imaginary axis crossing for $K>0$.

    **Range of K for stability:** $K>0$.

**Answer 3:**
$G(s)H(s) = \frac{K}{s+2}$
Characteristic equation: $1 + \frac{K}{s+2} = 0 \implies s+2+K = 0 \implies s = -(2+K)$.
This is a single real pole.
If we want the dominant closed-loop poles to have $\zeta = 0.707$, these poles must be complex. However, this system will always have real poles. This suggests that the question might be hypothetical or assumes a more complex system where this is a subsystem.
If we interpret it as "what $K$ makes the pole $- (2+K)$ have a damping ratio equivalent to $0.707$ if it were complex", it's still not directly applicable.

Let's assume the question implies adding a term to make it have complex poles or it's a simplification of a larger system.
If the system were $G(s)H(s) = \frac{K}{s(s+a)}$ and we wanted $\zeta = 0.707$.
For $G(s)H(s) = \frac{K}{s+2}$ the pole is at $s = -(2+K)$.
The damping ratio is not defined for a single real pole.

If we assume the system is $G(s) = \frac{K}{s+2}$ and we want the closed-loop system $1+G(s)$ to have dominant poles with $\zeta = 0.707$. The characteristic equation is $s+2+K=0$. The pole is at $s=-(2+K)$. This pole is always on the real axis. For a second-order system $s^2+2\zeta\omega_n s + \omega_n^2 = 0$, the poles are $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.

Let's assume the question means for a second-order system $G(s)H(s) = \frac{K}{s(s+a)}$ and we want $\zeta = 0.707$.
The characteristic equation is $s^2 + as + K = 0$.
Comparing with $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
$a = 2\zeta\omega_n$
$K = \omega_n^2$
If $\zeta = 0.707$, then $a = 2(0.707)\omega_n = 1.414\omega_n$.
And $K = \omega_n^2$.
For the original system $G(s)H(s) = \frac{K}{s+2}$, this is a first-order system. Its transient response is always a simple exponential decay and does not exhibit overshoot or oscillatory behavior, which are characteristics related to damping ratio in second-order systems.

**Assuming the question is flawed for the given $G(s)H(s)$ and meant a system like $G(s)H(s) = \frac{K}{s(s+2)}$:**
Characteristic equation: $s^2 + 2s + K = 0$.
Compare to $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$.
$2\zeta\omega_n = 2 \implies \zeta\omega_n = 1$.
$\omega_n^2 = K$.
With $\zeta = 0.707$:
$0.707 \omega_n = 1 \implies \omega_n = \frac{1}{0.707} \approx 1.414$.
$K = \omega_n^2 \approx (1.414)^2 \approx 2$.
The poles would be at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2} = -1 \pm j(1.414)\sqrt{1-0.707^2} = -1 \pm j(1.414)\sqrt{1-0.5} = -1 \pm j(1.414)\sqrt{0.5} = -1 \pm j(1.414)(0.707) = -1 \pm j$.
So, for $G(s)H(s) = \frac{K}{s(s+2)}$, $K \approx 2$ gives dominant poles at $-1 \pm j$.

**If we MUST answer for $G(s)H(s) = \frac{K}{s+2}$:**
The closed-loop pole is at $s = -(2+K)$.
The "damping ratio" of a first-order system is technically undefined in the context of second-order specifications. However, if one were to consider the *speed* of response, one might relate it to $\zeta\omega_n$ in a second-order system.
For a first-order system $\frac{Y(s)}{R(s)} = \frac{K/(s+2+K)}{1} = \frac{1}{1 + s/(2+K)}$. The time constant is $\tau = 1/(2+K)$.
For a second-order system $s^2+2\zeta\omega_n s + \omega_n^2 = 0$, the poles are at $-\zeta\omega_n$. The effective time constant is $1/(\zeta\omega_n)$.
So, if we want the time constant to be related to a $\zeta=0.707$ requirement, let's say $\zeta\omega_n=1$.
Then $\tau = 1$.
$1/(2+K) = 1 \implies 2+K = 1 \implies K = -1$. But $K \ge 0$.

This question is problematic for the given $G(s)H(s)$. The root locus method is primarily for second-order and higher systems exhibiting oscillatory behavior.

**Answer 4:**
Asymptotes are straight lines that the root locus branches follow as $K \to \infty$, especially when the number of poles $P$ exceeds the number of zeros $Z$. They provide guidance on the direction of root locus branches that tend towards infinity.
Calculation:
*   **Number of Asymptotes:** $P - Z$
*   **Centroid ($\sigma_a$):** Intersection on the real axis, calculated as the average of finite pole locations minus the average of finite zero locations, divided by $(P-Z)$.
    $\sigma_a = \frac{\sum \text{finite pole locations} - \sum \text{finite zero locations}}{P - Z}$
*   **Angle of Asymptotes ($\theta_a$):**
    $\theta_a = \frac{(2k + 1)180^\circ}{P - Z}$, for $k = 0, 1, 2, ..., (P - Z - 1)$.

**Answer 5:**
A point $s$ in the s-plane is on the root locus of a system with open-loop transfer function $G(s)H(s)$ if it satisfies the **phase condition**:
$\angle G(s)H(s) = (2k + 1)180^\circ$, where $k = 0, \pm 1, \pm 2, ...$
For a point to be on the root locus for a specific value of gain $K \ge 0$, it must also satisfy the **magnitude condition**:
$|G(s)H(s)| = K$. (If $K$ is treated as a variable, then $|G(s)H(s)|$ must equal some non-negative value for the point to be on the locus).

---

### 9. Summary and Key Takeaways

*   The **Root Locus** is a graphical plot of the closed-loop poles as the open-loop gain ($K$) varies from 0 to $\infty$.
*   It's based on the **magnitude and phase conditions** derived from the characteristic equation $1 + G(s)H(s) = 0$.
*   The locus starts at **open-loop poles** and ends at **open-loop zeros or infinity**.
*   **Rules for sketching** (real axis locus, asymptotes, breakaway/break-in points, angles of departure/arrival) provide a systematic way to draw the locus.
*   The root locus is essential for **stability analysis** (identifying the range of $K$ for stability) and **performance assessment** (choosing $K$ to achieve desired transient responses like damping ratio and natural frequency).
*   **Superimposing constant $\zeta$ and $\omega_n$ lines** on the root locus aids in design.
*   **Limitations** include applicability only to LTI systems with a single parameter variation and potential complexity for higher-order systems.

---
This comprehensive study note covers the root locus method, its theoretical underpinnings, practical sketching rules, design applications, limitations, and practice questions, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
