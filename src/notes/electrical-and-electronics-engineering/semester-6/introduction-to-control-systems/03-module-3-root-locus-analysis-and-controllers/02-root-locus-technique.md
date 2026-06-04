---
title: "Root locus technique"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c1"
status: "completed"
scrapedAt: "2026-05-23T16:29:35.394Z"
---
# Introduction to Control Systems - Module 3: Root Locus Analysis and Controllers

## Topic: Root Locus Technique

This module delves into the **Root Locus Technique**, a powerful graphical method used to analyze and design control systems. It allows us to understand how the closed-loop system's poles (and hence its stability and transient response) change as a system parameter, typically the gain $K$, is varied. This technique directly addresses **CO3: Analyse dynamic systems for their performance and stability using Root locus.**

### 1. What is the Root Locus Technique?

The Root Locus technique graphically displays the loci of the roots of the characteristic equation of a closed-loop control system as a parameter (usually the open-loop gain $K$) varies from 0 to infinity.

*   **Characteristic Equation:** For a unity feedback system with open-loop transfer function $G(s)H(s)$, the characteristic equation is $1 + G(s)H(s) = 0$.
*   **Poles:** The roots of the characteristic equation are the closed-loop poles of the system. The location of these poles in the s-plane dictates the system's stability and transient response characteristics (e.g., damping ratio, natural frequency, settling time).
*   **Parameter Variation:** The root locus plots how these closed-loop poles move as the open-loop gain $K$ changes from $0$ to $\infty$.

**Why is it important?**

*   **Stability Analysis:** It clearly shows the range of $K$ for which the system is stable (all closed-loop poles in the left-half of the s-plane).
*   **Transient Response Prediction:** It helps predict how changes in $K$ affect damping, speed of response, and oscillatory behavior.
*   **Controller Design:** It provides a systematic way to design controllers (like proportional controllers, P-I, P-D) by adjusting the gain $K$ to achieve desired performance.

**Key References:**

*   **Nise, 5th Ed.:** Chapter 6: Root Locus Techniques
*   **Nagrath & Gopal, 5th Ed.:** Chapter 12: Root Locus Techniques
*   **Ogata, 5th Ed.:** Chapter 7: Stability and Root Locus Techniques

### 2. Preliminaries: Poles and Zeros of the Open-Loop Transfer Function

Before constructing a root locus, we need to identify the poles and zeros of the *open-loop* transfer function $G(s)H(s)$.

*   **Open-Loop Zeros:** Values of $s$ for which $G(s)H(s) = 0$.
*   **Open-Loop Poles:** Values of $s$ for which $G(s)H(s) \to \infty$. These are the poles of the individual components in the forward path and feedback path.

**Example:**
Consider a unity feedback system with open-loop transfer function:
$G(s)H(s) = K \frac{s+2}{s(s+1)(s+4)}$

*   **Open-Loop Poles:** $s = 0, s = -1, s = -4$ (These are denoted by 'x').
*   **Open-Loop Zeros:** $s = -2$ (This is denoted by 'o').

### 3. The Angle and Magnitude Conditions

The fundamental principle behind the root locus construction relies on the **Angle and Magnitude Conditions**, derived from the characteristic equation $1 + G(s)H(s) = 0$.

**a) Angle Condition:**
A point $s$ in the s-plane lies on the root locus if and only if the phase of the open-loop transfer function at that point is an odd multiple of $180^\circ$.

$|G(s)H(s)| = 1$ (Magnitude Condition - used to find $K$)
$\angle G(s)H(s) = (2k+1)180^\circ$, where $k = 0, \pm 1, \pm 2, \dots$

*   **Interpretation:** For any point $s$ on the root locus, the sum of the angles subtended by the open-loop zeros from $s$ minus the sum of the angles subtended by the open-loop poles from $s$ must be $180^\circ$ (or $540^\circ$, $900^\circ$, etc.).

**b) Magnitude Condition:**
A point $s$ in the s-plane lies on the root locus if the magnitude of the open-loop transfer function at that point is equal to $1/K$.

$K = \frac{1}{|G(s)H(s)|}$

*   **Interpretation:** Once a point $s$ is confirmed to be on the locus (using the Angle Condition), the value of the gain $K$ required to place a closed-loop pole at that point can be calculated.

### 4. Properties and Construction of the Root Locus

The root locus can be constructed by following a set of rules based on the Angle and Magnitude Conditions, as well as general properties. These rules are crucial for sketching the locus accurately.

**Key References:**

*   **Nise, 5th Ed.:** Chapter 6, Section 6.2: Properties of Root Locus
*   **Ogata, 5th Ed.:** Chapter 7, Section 7-3: Construction of Root Loci

**Properties of Root Locus:**

1.  **Symmetry:** The root locus is symmetric with respect to the real axis. This is because the open-loop poles and zeros are often located symmetrically with respect to the real axis, and the characteristic equation has real coefficients.
2.  **Number of Branches:** The number of root locus branches is equal to the number of open-loop poles ($N$). Each branch starts at an open-loop pole (for $K=0$) and terminates at an open-loop zero or at infinity (as $K \to \infty$).
3.  **Number of Asymptotes:** The number of asymptotes is $|N - Z|$, where $N$ is the number of open-loop poles and $Z$ is the number of open-loop zeros.
4.  **Centroid of Asymptotes:** The intersection of the asymptotes with the real axis is given by:
    $\sigma_a = \frac{\sum \text{finite open-loop poles} - \sum \text{finite open-loop zeros}}{|N - Z|}$
5.  **Angles of Asymptotes:** The angles of the asymptotes with respect to the real axis are given by:
    $\theta_a = \frac{(2k+1)180^\circ}{|N - Z|}$, where $k = 0, 1, 2, \dots, |N - Z|-1$.
6.  **Real Axis Segments:** A point on the real axis is part of the root locus if there is an odd number of open-loop poles and zeros to its right.
7.  **Breakaway Points:** These are points on the real axis where one or more branches leave the real axis to enter the complex plane. They occur where the slope of the locus is zero or undefined. They can be found by solving $\frac{dK}{ds} = 0$ or by finding the roots of the polynomial obtained by differentiating the characteristic equation implicitly with respect to $s$ and setting $dK/ds = 0$.
8.  **Break-in Points:** These are points on the real axis where two or more branches merge onto the real axis. They also occur where $dK/ds = 0$.
9.  **Imaginary Axis Crossing:** Root locus branches can cross the imaginary axis. The gain $K$ at which this occurs can be found using the Routh-Hurwitz criterion. When a row of zeros appears in the Routh array, the auxiliary polynomial from the row above it gives the roots on the imaginary axis.
10. **Termination at Zeros:** Root locus branches that do not go to infinity terminate at the finite open-loop zeros.

**Construction Steps (Nise, Chapter 6):**

1.  **Plot Open-Loop Poles and Zeros:** Mark the poles with 'x' and zeros with 'o' on the s-plane.
2.  **Determine Real Axis Segments:** Identify portions of the real axis that satisfy the odd-number-of-poles-and-zeros-to-the-right rule.
3.  **Calculate Asymptotes:**
    *   Find the centroid: $\sigma_a = \frac{\sum p_i - \sum z_i}{N - Z}$
    *   Calculate the angles: $\theta_a = \frac{(2k+1)180^\circ}{N - Z}$
    *   Draw the asymptotes from the centroid at the calculated angles.
4.  **Find Breakaway and Break-in Points:**
    *   Derive $K(s)$ from the characteristic equation: $1 + K G(s)H(s) = 0 \implies K = -1 / (G(s)H(s))$.
    *   Calculate $dK/ds$ and set it to zero. Solve for $s$. The real roots within the locus segments are breakaway/break-in points.
5.  **Find Imaginary Axis Crossing:**
    *   Form the characteristic equation $1 + G(s)H(s) = 0$.
    *   Use the Routh-Hurwitz criterion to find the value of $K$ for which the system becomes marginally stable (i.e., roots on the imaginary axis).
6.  **Determine Locus Angles at Intersection with Circles:** This step is less commonly used in manual sketching but is important for accuracy.
7.  **Plot the Locus:** Connect the poles, zeros, asymptotes, breakaway points, and imaginary axis crossings to form the root locus branches, ensuring they start at poles and end at zeros or infinity.

### 5. Illustrative Example of Root Locus Construction

Let's construct the root locus for the previously mentioned system:
$G(s)H(s) = K \frac{s+2}{s(s+1)(s+4)}$

**1. Poles and Zeros:**
*   Poles: $0, -1, -4$ (N=3)
*   Zeros: $-2$ (Z=1)

**2. Real Axis Segments:**
*   Segment to the right of $s=0$: No poles/zeros. Not a locus.
*   Segment between $s=0$ and $s=-1$: One pole ($0$) to the right. **This is a locus.**
*   Segment between $s=-1$ and $s=-2$: Two poles ($0, -1$) to the right. Not a locus.
*   Segment between $s=-2$ and $s=-4$: Three poles ($0, -1, -4$) to the right. **This is a locus.**
*   Segment to the left of $s=-4$: Three poles ($0, -1, -4$) to the right. Not a locus.

**3. Asymptotes:**
*   Number of asymptotes = $|N - Z| = |3 - 1| = 2$.
*   Centroid: $\sigma_a = \frac{(0 + (-1) + (-4)) - (-2)}{3 - 1} = \frac{-5 + 2}{2} = -1.5$.
*   Angles:
    *   $k=0: \theta_a = \frac{(2(0)+1)180^\circ}{2} = 90^\circ$
    *   $k=1: \theta_a = \frac{(2(1)+1)180^\circ}{2} = 270^\circ$
    Draw asymptotes from $s=-1.5$ at $90^\circ$ and $270^\circ$ (which are the imaginary axis).

**4. Breakaway Points:**
*   Characteristic equation: $1 + K \frac{s+2}{s(s+1)(s+4)} = 0$
    $s(s+1)(s+4) + K(s+2) = 0$
    $s(s^2 + 5s + 4) + K(s+2) = 0$
    $s^3 + 5s^2 + 4s + K(s+2) = 0$
    $K = -\frac{s^3 + 5s^2 + 4s}{s+2}$
*   Calculate $dK/ds$:
    $\frac{dK}{ds} = - \frac{(3s^2+10s+4)(s+2) - (s^3+5s^2+4s)(1)}{(s+2)^2} = 0$
    $(3s^2+10s+4)(s+2) - (s^3+5s^2+4s) = 0$
    $(3s^3 + 6s^2 + 10s^2 + 20s + 4s + 8) - (s^3+5s^2+4s) = 0$
    $3s^3 + 16s^2 + 24s + 8 - s^3 - 5s^2 - 4s = 0$
    $2s^3 + 11s^2 + 20s + 8 = 0$
*   We need to find real roots of this cubic equation that lie on the real axis locus segments (between 0 and -1, and between -2 and -4).
    *   Let's test some values:
        *   If $s = -0.5$: $2(-0.125) + 11(0.25) + 20(-0.5) + 8 = -0.25 + 2.75 - 10 + 8 = 0.5 \ne 0$.
        *   If $s = -0.6$: $2(-0.216) + 11(0.36) + 20(-0.6) + 8 = -0.432 + 3.96 - 12 + 8 = -0.472 \ne 0$.
    *   Let's try to factor or use a numerical solver. By trying values, we can find a root around $s \approx -0.6$. Let's assume for a moment a root exists between 0 and -1, say at $s = -0.5$.
    *   Consider the cubic $2s^3 + 11s^2 + 20s + 8 = 0$. Let's evaluate at $s=-0.5$: $2(-0.125) + 11(0.25) + 20(-0.5) + 8 = -0.25 + 2.75 - 10 + 8 = 0.5$. Not a root.
    *   Let's try $s=-0.57$: $2(-0.185) + 11(0.325) + 20(-0.57) + 8 = -0.37 + 3.575 - 11.4 + 8 = -0.2 \ne 0$.
    *   A numerical tool reveals a root around $s \approx -0.57$. This is a breakaway point between the poles at $0$ and $-1$.
    *   For the segment between $-2$ and $-4$, we would also need to check for roots. This cubic has one real root around $-0.57$ and two complex conjugate roots. This means there's likely no breakaway point between $-2$ and $-4$.

**5. Imaginary Axis Crossing:**
*   Characteristic Equation: $s^3 + 5s^2 + 4s + K(s+2) = 0$
    $s^3 + 5s^2 + (4+K)s + 2K = 0$
*   Routh Array:
    | $s^3$ | 1           | $4+K$ |
    | :---- | :---------- | :---- |
    | $s^2$ | 5           | $2K$  |
    | $s^1$ | $\frac{5(4+K) - 2K}{5} = \frac{20+5K-2K}{5} = \frac{20+3K}{5}$ | 0     |
    | $s^0$ | $2K$        | 0     |
*   For stability, all elements in the first column must be positive:
    *   $5 > 0$ (always true)
    *   $\frac{20+3K}{5} > 0 \implies 20+3K > 0 \implies K > -20/3$
    *   $2K > 0 \implies K > 0$
    *   Thus, for stability, $K > 0$.
*   To find the imaginary axis crossing, we set the $s^1$ row to zero:
    $\frac{20+3K}{5} = 0 \implies 20+3K = 0 \implies K = -20/3$.
    This value of $K$ is negative. This implies the root locus does not cross the imaginary axis for positive $K$. (A slight mistake in reasoning here, the crossing occurs when the *row* is zero, which gives the location of the roots).
*   When $s^1$ row is zero, $K = -20/3$. This implies that for the system to have roots on the imaginary axis, $K$ must be $-20/3$. Since $K$ is usually taken as positive gain, this suggests no crossing for positive $K$.
*   Let's re-examine the characteristic equation and the Routh array. For $K>0$, all entries are positive. This means for all $K>0$, the poles remain in the LHP.
    *   Let's check the value of $K$ when the $s^1$ term is zero: $\frac{20+3K}{5} = 0 \Rightarrow K = -20/3$. This is not a physically realizable gain.
    *   If there was a crossing for positive K, the $s^1$ row would be zero for some positive $K$, and the auxiliary equation from the $s^2$ row would give the roots on the $j\omega$ axis.
    *   Let's check the range of $K$ for stability more carefully. For $K>0$, all elements in the first column are positive. This means the system is stable for all $K>0$.
    *   **Wait!** The interpretation is that when the $s^1$ row becomes zero, the *system* becomes unstable. Let's re-evaluate. If $20+3K=0$, $K=-20/3$. This doesn't make sense for positive gain.
    *   Let's check the original problem statement or textbook examples for typical scenarios. Often, imaginary axis crossings *do* occur.
    *   Let's reconsider the characteristic equation: $s^3 + 5s^2 + (4+K)s + 2K = 0$.
    *   Let $s = j\omega$.
        $(j\omega)^3 + 5(j\omega)^2 + (4+K)(j\omega) + 2K = 0$
        $-j\omega^3 - 5\omega^2 + j\omega(4+K) + 2K = 0$
        $(-5\omega^2 + 2K) + j(\omega(4+K) - \omega^3) = 0$
    *   Equating real and imaginary parts to zero:
        Real: $-5\omega^2 + 2K = 0 \implies K = \frac{5\omega^2}{2}$
        Imaginary: $\omega(4+K) - \omega^3 = 0$
        Since $\omega \ne 0$ for crossing: $4+K - \omega^2 = 0 \implies \omega^2 = 4+K$
    *   Substitute $\omega^2$ into the expression for $K$:
        $K = \frac{5(4+K)}{2}$
        $2K = 5(4+K)$
        $2K = 20 + 5K$
        $-3K = 20 \implies K = -20/3$.
    *   This still gives a negative $K$. This confirms that for *positive* gain $K$, the root locus does not cross the imaginary axis. The system is stable for all $K > 0$.

**6. Plotting the Locus:**
*   Poles at $0, -1, -4$. Zero at $-2$.
*   Real axis locus from $0$ to $-1$, and from $-2$ to $-4$.
*   Asymptotes at $90^\circ$ and $270^\circ$ from $s=-1.5$.
*   Breakaway point around $s=-0.57$.
*   Since the locus doesn't cross the imaginary axis for positive $K$, and the asymptotes are vertical, the branches from $0$ and $-1$ will move towards the breakaway point, break away, and then follow the asymptotes. The branch starting at $-4$ will move towards $-2$.

**Figure Sketch (Conceptual):**
Imagine the s-plane with poles at 0, -1, -4 and a zero at -2.
*   A section of the real axis between 0 and -1 is part of the locus.
*   A section of the real axis between -2 and -4 is part of the locus.
*   Two vertical asymptotes originate from $s=-1.5$.
*   A breakaway point exists on the real axis between 0 and -1.
*   The locus starts at the poles:
    *   The pole at $0$ and the pole at $-1$ will move towards each other along the real axis, reach a breakaway point, then move into the left-half plane, following the asymptotes.
    *   The pole at $-4$ will move towards the zero at $-2$ along the real axis.

**Important Note:** The fact that the locus doesn't cross the imaginary axis for positive $K$ implies that the system is stable for all positive gains. This is a good outcome for stability, but we might need to adjust the gain to meet transient response specifications.

### 6. Using the Root Locus for Design (CO3)

The root locus is not just for analysis; it's a powerful design tool. We can adjust the gain $K$ to achieve desired closed-loop pole locations, which in turn dictate the system's transient response.

*   **Desired Damping Ratio ($\zeta$):** A constant damping ratio contour is a radial line from the origin. We can find a point on this line that also lies on the root locus.
*   **Desired Settling Time ($T_s$):** A constant settling time contour is a vertical line in the s-plane. The condition for settling time is approximately $T_s = 4/\zeta\omega_n$ or $T_s = 4/\sigma$, where $\sigma$ is the real part of the dominant poles. A vertical line at $s = -\sigma$ represents constant settling time. We can find a point on the locus that lies on this line.
*   **Desired Natural Frequency ($\omega_n$):** A constant natural frequency contour is a circle centered at the origin. We can find a point on the locus that lies on this circle.

**Example Design Scenario:**
Suppose for the system $G(s)H(s) = K \frac{s+2}{s(s+1)(s+4)}$, we want a dominant pair of complex closed-loop poles with a damping ratio $\zeta = 0.707$.

1.  **Draw the $\zeta = 0.707$ line:** This line makes an angle of $\theta = \cos^{-1}(0.707) = 45^\circ$ with the negative real axis.
2.  **Find Intersection:** We need to find a point $s = -\sigma + j\omega$ on the root locus such that the angle condition $\angle G(s)H(s) = 180^\circ$ is met, and $s$ lies on the $45^\circ$ line.
3.  **Check Real Axis Segments:** The real axis segments are from $0$ to $-1$ and $-2$ to $-4$. These do not typically satisfy the angle condition for complex poles.
4.  **Check Asymptotes:** The asymptotes are vertical at $s = -1.5$.
5.  **Test a Point:** Let's pick a point on the $45^\circ$ line, say $s = -1 + j1$.
    *   Angle condition:
        $\angle G(s)H(s) = \angle \frac{s+2}{s(s+1)(s+4)}$
        $s+2 = -1+j1+2 = 1+j1$. Angle $= \arctan(1/1) = 45^\circ$.
        $s = -1+j1$. Angle $= \arctan(1/-1) + 180^\circ = 135^\circ$.
        $s+1 = -1+j1+1 = j1$. Angle $= 90^\circ$.
        $s+4 = -1+j1+4 = 3+j1$. Angle $= \arctan(1/3) \approx 18.4^\circ$.
        Total Angle $= (45^\circ) - (135^\circ + 90^\circ + 18.4^\circ) = 45^\circ - 243.4^\circ = -198.4^\circ$.
        This is not $(2k+1)180^\circ$. So $s = -1+j1$ is not on the locus.
6.  **Iterative Process:** This is an iterative process. We would typically try points on the $45^\circ$ line and check the angle condition, or use software.

**Using Magnitude Condition to find K:**
Once we find a point $s_1$ on the locus that satisfies the desired performance criteria, we calculate $K$ using the magnitude condition:
$K = \left| \frac{s_1(s_1+1)(s_1+4)}{s_1+2} \right|$

### 7. Root Locus of Systems with Different Controller Types

The root locus technique applies to various system configurations.

*   **Unity Feedback System:** $T(s) = \frac{G(s)}{1+G(s)}$. Characteristic equation: $1+G(s)=0$.
*   **Non-Unity Feedback System:** $T(s) = \frac{G(s)}{1+G(s)H(s)}$. Characteristic equation: $1+G(s)H(s)=0$. The construction rules apply to $G(s)H(s)$.

**Example: Proportional-Derivative (PD) Controller**
A PD controller has the transfer function $G_c(s) = K_p + K_d s = K_d(s + K_p/K_d) = K_d(s+z_0)$.
This introduces a **zero** ($z_0$) into the open-loop transfer function. Adding a zero generally pulls the root locus towards it, potentially improving transient response (reducing overshoot and settling time).

**Example: Proportional-Integral (PI) Controller**
A PI controller has the transfer function $G_c(s) = K_p + \frac{K_i}{s} = \frac{s K_p + K_i}{s} = \frac{K_i(s + K_p/K_i)}{s}$.
This introduces:
*   A **pole at the origin** ($s=0$). If the plant already has a pole at the origin, this creates a double pole.
*   A **zero** ($s = -K_p/K_i$).
The pole at the origin affects the low-frequency behavior and steady-state error. The added zero can help shape the transient response.

**CO1 & CO5 Alignment:** The root locus technique helps us *represent* the dynamic behavior of closed-loop systems by showing how pole locations change with gain, which is a way of representing the system's dynamics in the classical (s-domain) domain.

**CO2 Alignment:** By analyzing the location of the closed-loop poles on the root locus as gain $K$ is varied, we can predict and diagnose the transient response parameters (e.g., overshoot, settling time, rise time) of the system for standard input functions. For example, poles closer to the imaginary axis lead to a faster response, while poles further to the left lead to a more damped response.

**CO3 Alignment:** This entire topic is dedicated to analyzing dynamic systems for their performance and stability using root locus.

**CO4 Alignment:** While root locus is a time-domain analysis tool (directly related to pole locations), understanding its principles helps build a foundation for frequency-domain analysis (like Bode plots and Nyquist plots) as they both concern system stability and performance. The gain and phase margins found in frequency domain are related to the root locus behavior.

### 8. Important Points to Remember

*   **Root locus starts at open-loop poles ($K=0$) and ends at open-loop zeros or infinity ($K \to \infty$).**
*   **Number of branches = Number of open-loop poles.**
*   **The angle condition $\angle G(s)H(s) = (2k+1)180^\circ$ is used to check if a point is on the locus.**
*   **The magnitude condition $K = 1/|G(s)H(s)|$ is used to find the gain $K$ for a point on the locus.**
*   **Asymptotes are essential for sketching the locus far from the poles and zeros.**
*   **Breakaway and break-in points indicate where branches leave/enter the real axis.**
*   **Imaginary axis crossings determine the gain margin for stability.**
*   **Root locus is a crucial design tool for selecting controller gains to meet performance specifications.**
*   **Adding zeros generally improves transient response; adding poles generally degrades it.**

### 9. Practice Questions and Exercises

**Question 1:**
For the unity feedback system with open-loop transfer function $G(s)H(s) = K \frac{1}{s(s+2)(s+4)}$, sketch the root locus. Identify:
a) Number of branches
b) Real axis segments
c) Asymptotes (centroid and angles)
d) Breakaway points (approximate if exact calculation is difficult)
e) Imaginary axis crossing and the gain $K$ at crossing.

**Answer 1:**
a) Number of branches = 3 (since there are 3 poles).
b) Real axis segments: From $0$ to $-\infty$, from $-2$ to $-4$. (0 to -2 and -4 to $-\infty$ have even number of poles to the right).
c) Asymptotes:
    *   $N=3, Z=0$. Number of asymptotes = $|3-0|=3$.
    *   Centroid $\sigma_a = \frac{(0 + (-2) + (-4)) - 0}{3} = \frac{-6}{3} = -2$.
    *   Angles:
        *   $k=0: \theta_a = \frac{180^\circ}{3} = 60^\circ$
        *   $k=1: \theta_a = \frac{3 \times 180^\circ}{3} = 180^\circ$
        *   $k=2: \theta_a = \frac{5 \times 180^\circ}{3} = 300^\circ$ (or $-60^\circ$)
d) Breakaway points:
    *   Characteristic equation: $s(s+2)(s+4) + K = 0 \implies s^3 + 6s^2 + 8s + K = 0$.
    *   $K = -(s^3 + 6s^2 + 8s)$.
    *   $\frac{dK}{ds} = -(3s^2 + 12s + 8) = 0 \implies 3s^2 + 12s + 8 = 0$.
    *   Using quadratic formula: $s = \frac{-12 \pm \sqrt{144 - 4(3)(8)}}{6} = \frac{-12 \pm \sqrt{144 - 96}}{6} = \frac{-12 \pm \sqrt{48}}{6} = \frac{-12 \pm 4\sqrt{3}}{6} = -2 \pm \frac{2\sqrt{3}}{3}$.
    *   $s_1 = -2 + \frac{2 \times 1.732}{3} \approx -2 + 1.155 = -0.845$. This point is not on the real axis locus segment (which is from 0 to -2).
    *   $s_2 = -2 - \frac{2 \times 1.732}{3} \approx -2 - 1.155 = -3.155$. This point lies on the real axis locus segment from -2 to -4. So, $s = -3.155$ is a breakaway point.
e) Imaginary axis crossing:
    *   Characteristic equation: $s^3 + 6s^2 + 8s + K = 0$.
    *   Routh Array:
        | $s^3$ | 1     | 8   |
        | :---- | :---- | :-- |
        | $s^2$ | 6     | K   |
        | $s^1$ | $\frac{6 \times 8 - K}{6} = \frac{48-K}{6}$ | 0   |
        | $s^0$ | K     | 0   |
    *   For crossing, set $s^1$ row to zero: $\frac{48-K}{6} = 0 \implies K = 48$.
    *   At $K=48$, the auxiliary equation from the $s^2$ row is $6s^2 + K = 0 \implies 6s^2 + 48 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2\sqrt{2}$.
    *   Imaginary axis crossing at $s = \pm j2\sqrt{2}$ when $K=48$.

**Question 2:**
Consider a system with open-loop transfer function $G(s)H(s) = K \frac{s+5}{s(s+2)}$.
a) Sketch the root locus.
b) Determine the value of $K$ that yields a damping ratio of $\zeta = 0.5$.
c) Determine the value of $K$ that yields a settling time of approximately $T_s = 2$ seconds (use $T_s \approx 4/\sigma$).

**Answer 2:**
a) Sketch the root locus:
    *   Poles: $0, -2$. Zero: $-5$. ($N=2, Z=1$).
    *   Number of branches = 2.
    *   Real axis locus: From $0$ to $-2$.
    *   Asymptotes: $|N-Z|=1$. Centroid $\sigma_a = \frac{0+(-2)-(-5)}{2-1} = \frac{3}{1} = 3$. Angle $\theta_a = \frac{180^\circ}{1} = 180^\circ$. A single asymptote along the negative real axis starting from $s=3$.
    *   Breakaway points: $K = -s(s+2)/(s+5) = -(s^2+2s)/(s+5)$. $dK/ds = -[(2s+2)(s+5) - (s^2+2s)(1)]/(s+5)^2 = 0$. $(2s^2+12s+10) - (s^2+2s) = 0 \implies s^2+10s+10=0$. $s = \frac{-10 \pm \sqrt{100-40}}{2} = \frac{-10 \pm \sqrt{60}}{2} = -5 \pm \sqrt{15}$. $s_1 = -5 + 3.87 = -1.13$. This lies on the real axis locus (0 to -2). $s_2 = -5 - 3.87 = -8.87$. This is not on the locus. Breakaway point at $s \approx -1.13$.
    *   Imaginary axis crossing: None for positive K as the locus starts from 0 and moves towards -2 and then breaks away to +infinity (along the negative real axis asymptote). The system is stable for all positive $K$.

b) Value of $K$ for $\zeta = 0.5$:
    *   The angle for $\zeta = 0.5$ is $\theta = \cos^{-1}(0.5) = 60^\circ$ from the negative real axis.
    *   Let $s = -\sigma + j\omega$. The point lies on the locus.
    *   The zero is at $-5$. The poles are at $0$ and $-2$.
    *   Angle condition: $\angle \frac{s+5}{s(s+2)} = 180^\circ$.
    *   Let's try a point on the $60^\circ$ line. Pick $\sigma = 1$, so $s = -1 + j\omega$. The angle with the real axis is $60^\circ$. $\tan(60^\circ) = \omega/\sigma \implies \omega = \sigma \tan(60^\circ) = 1 \times \sqrt{3} \approx 1.732$. So, $s = -1 + j1.732$.
    *   Angle check:
        $s+5 = 4 + j1.732$. Angle $= \arctan(1.732/4) \approx 23.4^\circ$.
        $s = -1 + j1.732$. Angle $= \arctan(1.732/-1) + 180^\circ \approx 120^\circ$.
        $s+2 = 1 + j1.732$. Angle $= \arctan(1.732/1) \approx 60^\circ$.
        Total angle $= (23.4^\circ) - (120^\circ + 60^\circ) = 23.4^\circ - 180^\circ = -156.6^\circ$. Not $180^\circ$.
    *   Let's try a point on the locus where the angle is $60^\circ$. The locus branch from $0$ and $-2$ breaks away at $s \approx -1.13$. This means the complex poles will be around this region.
    *   Let's assume the dominant poles are at $s = -1 + j\sqrt{3}$ (so $\sigma=1$ and $\omega=\sqrt{3}$ resulting in $\zeta=0.5$).
        Check if $s = -1+j\sqrt{3}$ is on the locus using the angle condition:
        $G(s)H(s) = K \frac{s+5}{s(s+2)}$
        $s = -1+j\sqrt{3}$
        $s+5 = 4+j\sqrt{3}$. Angle = $\arctan(\sqrt{3}/4) \approx 23.41^\circ$.
        $s = -1+j\sqrt{3}$. Angle = $\arctan(\sqrt{3}/-1) + 180^\circ = 120^\circ$.
        $s+2 = 1+j\sqrt{3}$. Angle = $\arctan(\sqrt{3}/1) = 60^\circ$.
        Total angle = $23.41^\circ - (120^\circ + 60^\circ) = 23.41^\circ - 180^\circ = -156.59^\circ$. This is not $180^\circ$.
    *   The root locus construction for finding specific $\zeta$ often requires iterative search or graphical methods. For this example, the point $s = -1+j\sqrt{3}$ isn't precisely on the locus. A better approach is to consider the breakaway point at $s \approx -1.13$. The complex poles will emerge from here. We need to find a point on the locus *and* on the $60^\circ$ line. This is usually done by trial and error on the s-plane or using numerical tools. Let's assume (for the sake of demonstrating K calculation) that we found a point $s_1$ on the locus that satisfies $\zeta=0.5$.
    *   If we assume $s=-1+j\sqrt{3}$ *were* on the locus, then $K = \left|\frac{s(s+2)}{s+5}\right|_{s=-1+j\sqrt{3}} = \left|\frac{(-1+j\sqrt{3})(1+j\sqrt{3})}{4+j\sqrt{3}}\right| = \left|\frac{-1-j\sqrt{3}+j\sqrt{3}-3}{4+j\sqrt{3}}\right| = \left|\frac{-4}{4+j\sqrt{3}}\right| = \frac{4}{|4+j\sqrt{3}|} = \frac{4}{\sqrt{16+3}} = \frac{4}{\sqrt{19}} \approx 0.916$.
    *   This calculation is based on an assumption that $s = -1+j\sqrt{3}$ is on the locus, which we showed is not true. The true point will be slightly different.

c) Value of $K$ for settling time $T_s = 2$ seconds:
    *   $T_s \approx 4/\sigma \implies \sigma = 4/T_s = 4/2 = 2$.
    *   This means the dominant poles should have a real part of $-2$. The locus has poles at $0$ and $-2$. The dominant poles are expected to be near the breakaway point of $-1.13$. A real part of $-2$ is too far left for this specific locus. The locus between $0$ and $-2$ suggests the poles move towards the breakaway point ($s \approx -1.13$) and then into the complex plane. The real part of the complex poles will be greater than $-1.13$.
    *   If we *must* achieve $T_s = 2$, we would look for a point on the locus with real part $-2$. However, based on the sketch, this is unlikely to be on the locus branches for positive $K$ that start at $0$ and $-2$. The breakaway point is at $\approx -1.13$. The real part of the complex poles will be around $-1.13$.
    *   If we find a point $s_1$ on the locus with $\text{Re}(s_1) = -2$, we would calculate $K = |G(s_1)H(s_1)|$.
    *   Let's revisit the breakaway point $s_b = -1.13$. The poles will move from $0$ and $-2$ towards this point, then into the complex plane. The real part of the complex poles will be approximately $-1.13$ at the breakaway. For settling time $T_s \approx 2$, we need $\sigma=2$. This requires poles to be at $s=-2$. The locus starts at poles $s=0$ and $s=-2$. The pole at $s=-2$ is already at the desired $\sigma$. The other pole at $s=0$ moves towards the breakaway point. To get poles with real part $-2$, the locus would have to pass through $s=-2+j\omega$.
    *   Let's verify the imaginary axis crossing for this system. $s^3 + 6s^2 + 8s + K = 0$. No imaginary axis crossing for positive K. The system is stable for all $K>0$.
    *   If we want $T_s \approx 2$, we need poles at $s = -2 \pm j\omega$. Let's check if $s=-2+j\omega$ can be on the locus.
        Angle condition: $\angle \frac{s+5}{s(s+2)} = 180^\circ$.
        If $s = -2+j\omega$:
        $s+5 = 3+j\omega$. Angle $= \arctan(\omega/3)$.
        $s = -2+j\omega$. Angle $= \arctan(\omega/-2) + 180^\circ$.
        $s+2 = j\omega$. Angle $= 90^\circ$.
        Total angle = $\arctan(\omega/3) - (\arctan(\omega/-2) + 180^\circ) - 90^\circ = 180^\circ$.
        $\arctan(\omega/3) - \arctan(\omega/-2) - 270^\circ = 180^\circ$.
        $\arctan(\omega/3) - \arctan(\omega/-2) = 450^\circ$. This is not feasible.
    *   This implies that achieving $T_s \approx 2$ with this system might require a controller that adds zeros to shape the locus.

This concludes the study notes for the Root Locus Technique. Remember to practice sketching the loci and applying the angle/magnitude conditions to various problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
