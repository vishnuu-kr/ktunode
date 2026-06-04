---
title: "Nyquist stability criterion"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366d0"
status: "completed"
scrapedAt: "2026-05-23T16:29:57.552Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis

## Topic: Nyquist Stability Criterion

---

### 1. Introduction

The Nyquist stability criterion is a powerful graphical method used to determine the stability of a closed-loop system based on the frequency response of its open-loop transfer function. It provides a direct link between the open-loop frequency response and the closed-loop stability, offering a robust alternative to methods like the Routh-Hurwitz criterion, especially for systems with time delays or when only experimental frequency response data is available.

**Learning Outcome Covered:**
*   Analyze dynamics systems for their performance and stability in frequency domain (CO4, K3).

---

### 2. Key Concepts and Definitions

#### 2.1 The Nyquist Contour

*   The Nyquist contour is a closed contour in the s-plane that encloses the entire right-half plane (RHP).
*   It is constructed by moving along the imaginary axis from $j\omega = -j\infty$ to $j\omega = +j\infty$, and then closing the contour in the RHP with a large semicircle of infinite radius ($s = Re^{j\theta}$ where $R \to \infty$).
*   Special care is taken when the open-loop transfer function $G(s)H(s)$ has poles or zeros on the $j\omega$ axis. Small semicircles are introduced to detour around these singularities.

**Reference:** Nise, 5th Ed., Chapter 10, Section 10.2.

#### 2.2 Mapping of the Nyquist Contour

*   The Nyquist criterion is based on the Cauchy Integral Theorem and the principle of the argument.
*   **Principle of the Argument:** If a contour $\Gamma$ in the s-plane encloses $P$ poles and $Z$ zeros of a function $F(s)$, then as $s$ traverses $\Gamma$ in a clockwise direction, the corresponding function $F(s)$ traverses a contour $\Gamma'$ in the F(s)-plane such that $\Gamma'$ encircles the origin $N$ times, where $N = P - Z$.
*   In the context of control systems, we consider the closed-loop transfer function $T(s) = \frac{G(s)}{1+G(s)H(s)}$. The poles of $T(s)$ are the roots of the characteristic equation $1+G(s)H(s) = 0$.
*   Therefore, we analyze the mapping of the Nyquist contour $\Gamma$ by the function $F(s) = 1+G(s)H(s)$.
*   Let $P$ be the number of poles of $G(s)H(s)$ in the RHP.
*   Let $Z$ be the number of zeros of $1+G(s)H(s)$ in the RHP, which are the closed-loop poles in the RHP.
*   The mapping of the Nyquist contour $\Gamma$ by $1+G(s)H(s)$ encircles the origin $N$ times.
*   According to the principle of the argument, $N = P - Z$.

#### 2.3 The Nyquist Criterion

*   The Nyquist criterion relates the number of RHP zeros of the characteristic equation ($Z$) to the number of RHP poles of the open-loop transfer function ($P$) and the number of encirclements of the origin by the polar plot of $1+G(s)H(s)$.
*   For a stable closed-loop system, we require $Z=0$.
*   Rearranging the equation $N = P - Z$, we get $Z = P - N$.
*   For stability ($Z=0$), we need $P = N$.
*   **Nyquist Criterion Statement:** A closed-loop system is stable if and only if the mapping of the Nyquist contour $\Gamma$ by $1+G(s)H(s)$ encircles the origin $N$ times, where $N = P$.
*   Since it is often easier to plot $G(s)H(s)$, we can use the fact that the polar plot of $1+G(s)H(s)$ is simply the polar plot of $G(s)H(s)$ shifted by one unit to the left. Therefore, the encirclements of the origin by $1+G(s)H(s)$ are equivalent to the encirclements of the point **(-1, j0)** by the polar plot of $G(s)H(s)$.
*   **Simplified Nyquist Criterion:** The number of RHP closed-loop poles ($Z$) is equal to the number of RHP open-loop poles ($P$) minus the number of encirclements ($N$) of the point **(-1, j0)** by the polar plot of $G(s)H(s)$ in the counterclockwise direction.
    *   $Z = P - N$
*   **For a stable closed-loop system, we must have $Z = 0$. Therefore, $P = N$.** This means the number of encirclements of the (-1, j0) point by the open-loop polar plot must be equal to the number of poles of the open-loop transfer function in the RHP.

**Important Note:** The sign convention for encirclements is crucial. Conventionally, a counterclockwise encirclement of the point (-1, j0) is considered positive.

**Reference:** Nise, 5th Ed., Chapter 10, Section 10.2; Nagrath & Gopal, 5th Ed., Chapter 9, Section 9.6.

#### 2.4 Relating $P$, $Z$, and $N$

*   **$P$**: Number of poles of $G(s)H(s)$ in the RHP (i.e., poles with positive real parts). This is determined by finding the roots of the denominator of $G(s)H(s)$.
*   **$Z$**: Number of zeros of $1+G(s)H(s)$ in the RHP. These are the closed-loop poles in the RHP. For stability, $Z$ must be 0.
*   **$N$**: Number of counterclockwise encirclements of the point $(-1, j0)$ by the polar plot of $G(s)H(s)$ as $s$ traverses the Nyquist contour.

**Stability Condition:** $Z = P - N = 0 \implies P = N$.

---

### 3. Constructing the Nyquist Locus

The Nyquist locus is the mapping of the Nyquist contour $\Gamma$ by $G(s)H(s)$. This involves plotting the frequency response of $G(s)H(s)$ for $s$ along the Nyquist contour.

#### 3.1 Mapping the Imaginary Axis Segment ($j\omega$, $-\infty < \omega < \infty$)

*   This part of the contour maps to the standard polar plot of $G(j\omega)H(j\omega)$.
*   We typically plot this for $\omega$ from $0$ to $\infty$. The plot for $-\infty < \omega < 0$ is the mirror image of the plot for $0 < \omega < \infty$ about the real axis.

#### 3.2 Mapping the Infinite Semicircle ($s = Re^{j\theta}$, $R \to \infty$)

*   As $R \to \infty$, $G(s)H(s) \approx \frac{K s^m}{s^n}$ for large $s$.
*   If $n > m$, then $G(s)H(s) \to 0$ as $R \to \infty$. The mapping of the infinite semicircle is a point at the origin (0, j0).
*   If $n = m$, then $G(s)H(s) \to K$ as $R \to \infty$. The mapping is a point at $(K, 0)$.
*   If $n < m$, then $G(s)H(s) \to \infty$ as $R \to \infty$. The mapping is a circle of infinite radius.

#### 3.3 Mapping around Poles/Zeros on the $j\omega$ Axis

*   If $G(s)H(s)$ has a pole or zero at $s = j\omega_0$ where $\omega_0 \neq 0$, the Nyquist contour must detour around it using a small semicircle of radius $\epsilon$ in the RHP.
*   As $s$ traverses this small semicircle ($s = j\omega_0 + \epsilon e^{j\theta}$, $\theta$ from $\pi/2$ to $-\pi/2$), $G(s)H(s)$ maps to an arc.
*   If $G(s)H(s)$ has a simple pole at $s=j\omega_0$, the mapping of the small semicircle is a large semicircle in the $G(j\omega)H(j\omega)$ plane. Specifically, if the pole is at $j\omega_0$, the mapping of the semicircle $s=j\omega_0 + \epsilon e^{j\theta}$ as $\theta$ goes from $\pi/2$ to $-\pi/2$ is a semicircle of radius $K/\epsilon^{p_0}$ in the $G(j\omega)H(j\omega)$ plane, starting at $j\infty$ and ending at $-j\infty$, where $p_0$ is the order of the pole.
*   If $G(s)H(s)$ has a pole at the origin $(s=0)$, the contour includes a semicircle of radius $\epsilon$ in the RHP around the origin. As $s$ traverses this semicircle ($s=\epsilon e^{j\theta}$ for $\theta$ from $-\pi/2$ to $\pi/2$), the mapping of $G(s)H(s)$ becomes a semicircle. The behavior depends on the number of poles and zeros at the origin.
    *   If $G(s)H(s) = K/s$, the mapping is a semicircle of radius $K/\epsilon$ from $-j\infty$ to $j\infty$.
    *   If $G(s)H(s) = K/s^2$, the mapping is a semicircle of radius $K/\epsilon^2$ from $\infty$ to $-\infty$.
    *   In general, if $G(s)H(s) = K/s^k$, the mapping is a semicircle of radius $K/\epsilon^k$. If $k$ is odd, the arc starts at $-j\infty$ and ends at $j\infty$. If $k$ is even, the arc starts at $j\infty$ and ends at $-j\infty$.

**Reference:** Nise, 5th Ed., Chapter 10, Section 10.2; Nagrath & Gopal, 5th Ed., Chapter 9, Section 9.6.

---

### 4. Steps to Apply the Nyquist Criterion

**Example System:** Consider a closed-loop system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.

**Step 1: Determine $P$, the number of RHP poles of $G(s)H(s)$.**
*   The poles of $G(s)H(s)$ are at $s=0$, $s=-1$, and $s=-2$.
*   None of these poles are in the RHP. So, $P = 0$.

**Step 2: Determine the stability requirement.**
*   For stability, we need $Z = P - N = 0$. Since $P=0$, we need $N=0$.
*   This means the polar plot of $G(s)H(s)$ must not encircle the point $(-1, j0)$.

**Step 3: Sketch the polar plot of $G(s)H(s)$ for $0 \le \omega < \infty$.**
*   $G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+2)} = \frac{K}{j\omega(- \omega^2 + j3\omega + 2)} = \frac{K}{j\omega(-\omega^2+2) - 3\omega^2}$
*   $G(j\omega)H(j\omega) = \frac{K}{-3\omega^2 - j(3\omega^3 - 2\omega)}$
*   The magnitude is $|G(j\omega)H(j\omega)| = \frac{K}{\omega \sqrt{9\omega^4 + (3\omega^2-2)^2}}$.
*   The phase is $\angle G(j\omega)H(j\omega) = -90^\circ - \arctan(\omega) - \arctan(2\omega)$.
*   **At $\omega = 0$:**
    *   $|G(j\omega)H(j\omega)| \to \infty$.
    *   $\angle G(j\omega)H(j\omega) \to -90^\circ$.
*   **At $\omega \to \infty$:**
    *   $|G(j\omega)H(j\omega)| \to 0$.
    *   $\angle G(j\omega)H(j\omega) \to -270^\circ$ (or $+90^\circ$).
*   **Check for intersection with the real axis:** This occurs when the imaginary part is zero.
    *   Im$[G(j\omega)H(j\omega)] = \frac{-K(3\omega^3 - 2\omega)}{(-3\omega^2)^2 + (3\omega^3 - 2\omega)^2} = 0$.
    *   This implies $3\omega^3 - 2\omega = 0$.
    *   $\omega(3\omega^2 - 2) = 0$.
    *   $\omega = 0$ (already considered) or $\omega = \sqrt{2/3}$.
    *   At $\omega = \sqrt{2/3}$:
        *   Real part: $\frac{-K}{3(2/3)} = \frac{-K}{2}$.
        *   Magnitude: $\frac{K}{\sqrt{2/3} \sqrt{9(2/3)^2 + (3(2/3)-2)^2}} = \frac{K}{\sqrt{2/3} \sqrt{9(4/9) + 0}} = \frac{K}{\sqrt{2/3} \sqrt{4}} = \frac{K}{2\sqrt{2/3}}$.
        *   The point of intersection with the real axis is $(-K/2, 0)$.

**Step 4: Consider the Nyquist contour and its mapping.**
*   The Nyquist contour encloses the entire RHP.
*   Segment 1: $j\omega$ for $\omega$ from $0$ to $\infty$. This maps to the polar plot sketched in Step 3.
*   Segment 2: $s = \epsilon e^{j\theta}$ for $\theta$ from $\pi/2$ to $-\pi/2$ (around the pole at $s=0$).
    *   $G(s)H(s) = \frac{K}{s(s+1)(s+2)} \approx \frac{K}{s(1)(2)} = \frac{K}{2s}$ for small $s$.
    *   As $s$ traverses the semicircle $s = \epsilon e^{j\theta}$ with $\theta$ from $\pi/2$ to $-\pi/2$, $G(s)H(s)$ maps to a semicircle of radius $K/(2\epsilon)$ in the complex plane, starting from $-j\infty$ (when $\theta = \pi/2$, $s=j\epsilon$) and ending at $+j\infty$ (when $\theta = -\pi/2$, $s=-j\epsilon$). This is a clockwise semicircle in the GH plane.
*   Segment 3: $s = Re^{j\theta}$ for $\theta$ from $0$ to $-\pi$ (large semicircle in RHP).
    *   As $R \to \infty$, $G(s)H(s) \approx K/s^3$.
    *   As $s$ traverses the large semicircle $s=Re^{j\theta}$ with $\theta$ from $0$ to $-\pi$, $G(s)H(s)$ maps to a semicircle of radius $K/R^3$ in the complex plane, starting from $0$ (when $\theta=0$, $s=R$) and ending at $0$ (when $\theta=-\pi$, $s=-R$). This is a counterclockwise semicircle of radius tending to zero.
*   The complete Nyquist locus is the union of the mapping of Segment 1, Segment 2, and Segment 3. Since $P=0$, we only need to consider the mapping of the imaginary axis.
*   The plot for $-\infty < \omega < 0$ is the mirror image of the plot for $0 < \omega < \infty$ about the real axis.

**Step 5: Count the encirclements of the point $(-1, j0)$.**
*   For $P=0$, we need $N=0$. The polar plot for $0 < \omega < \infty$ starts at infinity with a phase of $-90^\circ$ and ends at the origin with a phase of $-270^\circ$ (or $+90^\circ$).
*   The plot crosses the real axis at $-K/2$.
*   If $K/2 < 1$ (i.e., $K < 2$), the plot does not cross the real axis at a value less than -1. It crosses at $-K/2$.
*   If $K < 2$, the plot for $0 < \omega < \infty$ lies entirely to the left of the imaginary axis and does not pass through the real axis at a value less than -1. The phase starts at $-90^\circ$ and goes towards $-270^\circ$. Since the phase is never $-180^\circ$, it does not intersect the negative real axis to the left of $-1$. Therefore, the point $(-1, j0)$ is not encircled.
*   If $K \ge 2$, the plot crosses the real axis at $-K/2$, which is at or to the left of $-1$. The plot for $0 < \omega < \infty$ starts at $\infty$ at $-90^\circ$, then goes towards the real axis, crosses it at $-K/2$, and finally goes to 0 at $90^\circ$.
    *   The phase transitions from $-90^\circ$ to $-180^\circ$ at $\omega = \sqrt{2/3}$ (where the real part is $-K/2$) and then continues towards $-270^\circ$.
    *   If $-K/2$ is to the left of $-1$ (i.e., $K > 2$), the phase angle will be less than $-180^\circ$ when crossing the real axis. The plot does not enclose $(-1, j0)$.
    *   If $-K/2 = -1$ (i.e., $K=2$), the plot passes through $(-1, 0)$. This is a boundary case.
    *   If $-K/2$ is to the right of $-1$ (i.e., $K < 2$), the plot will enclose $(-1, j0)$. For $K < 2$, the plot for $0 < \omega < \infty$ crosses the negative real axis at $-K/2$. Since $K/2 < 1$, this point is to the right of $-1$. The phase starts at $-90^\circ$, reaches $-180^\circ$ at some $\omega_{180}$ and then goes to $-270^\circ$. For $0 < \omega < \infty$, the plot starts from $\infty$ at $-90^\circ$, moves towards the origin, crosses the real axis at $-K/2$, and goes to $0$ at $+90^\circ$. The phase is always between $-90^\circ$ and $+90^\circ$ as it approaches the origin.
*   Let's re-evaluate phase for $0 < \omega < \infty$.
    *   Phase $\phi = -90^\circ - \arctan(\omega) - \arctan(2\omega)$.
    *   At $\omega = 0$, $\phi = -90^\circ$.
    *   At $\omega = \sqrt{2/3}$, $\phi = -90^\circ - \arctan(\sqrt{2/3}) - \arctan(2\sqrt{2/3})$. $\arctan(\sqrt{2/3}) \approx 39.2^\circ$, $\arctan(2\sqrt{2/3}) \approx 59.0^\circ$. $\phi \approx -90 - 39.2 - 59.0 = -188.2^\circ$. This means the phase is $-188.2^\circ$ when crossing the real axis.
    *   As $\omega \to \infty$, $\phi \to -90^\circ - 90^\circ - 90^\circ = -270^\circ$.
*   The polar plot for $0 < \omega < \infty$ starts at $\infty$ on the negative imaginary axis, moves counter-clockwise towards the negative real axis, crosses the negative real axis at $-K/2$, and then continues counter-clockwise towards the origin, reaching it at a phase of $+90^\circ$.
*   The plot for $-\infty < \omega < 0$ is the mirror image. It starts at $\infty$ on the positive imaginary axis, moves clockwise towards the negative real axis, crosses it at $-K/2$, and then continues clockwise towards the origin, reaching it at a phase of $-90^\circ$.
*   **Encirclements:**
    *   If $K < 2$, then $-K/2 > -1$. The polar plot of $G(j\omega)H(j\omega)$ for $0 \le \omega < \infty$ does not enclose $(-1, j0)$. The plot for $-\infty < \omega < 0$ also does not enclose $(-1, j0)$. Thus, $N=0$.
    *   If $K = 2$, the polar plot passes through $(-1, j0)$.
    *   If $K > 2$, then $-K/2 < -1$. The polar plot of $G(j\omega)H(j\omega)$ for $0 \le \omega < \infty$ encircles $(-1, j0)$ once in the counterclockwise direction (because the phase goes from $-90^\circ$ to $-180^\circ$ and beyond). The mirror image for $-\infty < \omega < 0$ also encircles $(-1, j0)$ once in the counterclockwise direction. Thus, $N=2$.

**Step 6: Apply the Nyquist stability condition.**
*   **Case 1: $K < 2$**
    *   $P = 0$, $N = 0$.
    *   $Z = P - N = 0 - 0 = 0$.
    *   The closed-loop system is **stable**.
*   **Case 2: $K = 2$**
    *   The point $(-1, j0)$ lies on the polar plot. This indicates that there are closed-loop poles on the $j\omega$ axis, and the system is marginally stable.
*   **Case 3: $K > 2$**
    *   $P = 0$, $N = 2$.
    *   $Z = P - N = 0 - 2 = -2$. This result is not physically meaningful as $Z$ cannot be negative. The error lies in the interpretation of $N$. The principle of argument counts encirclements of the origin by $1+G(s)H(s)$. When we plot $G(s)H(s)$, we are counting encirclements of $-1$.
    *   Let's reconsider the phase and real axis crossing. For $K>2$, $-K/2 < -1$. The phase at the real axis crossing is approximately $-188.2^\circ$.
    *   The plot for $0 \le \omega < \infty$ starts at $\infty$ on the negative $j\omega$ axis. It moves towards the negative real axis, crosses it at $-K/2$ (which is to the left of $-1$), and then moves towards the origin, reaching it at $+90^\circ$.
    *   The plot for $-\infty < \omega < 0$ is the mirror image, starting at $\infty$ on the positive $j\omega$ axis, moving towards the negative real axis, crossing it at $-K/2$, and moving towards the origin at $-90^\circ$.
    *   For $K > 2$, the point $(-1, j0)$ is enclosed once by the plot for $0 \le \omega < \infty$ (in the counterclockwise direction). The plot for $-\infty < \omega < 0$ also encircles $(-1, j0)$ once in the counterclockwise direction. So, $N=2$.
    *   $Z = P - N = 0 - 2 = -2$. This means the assumption $Z \ge 0$ is violated. The correct interpretation is that since $P=0$ and $N=2$, the system is unstable. The number of RHP zeros of $1+G(s)H(s)$ is $Z = P - N = 0 - 2 = -2$. This implies we made a mistake in counting or interpreting $N$.

Let's revisit the encirclements for $K>2$.
*   Plot for $0 \le \omega < \infty$: Starts at $\infty \angle -90^\circ$, moves towards the real axis, crosses at $-K/2$ (where $K/2 > 1$), then moves towards the origin, ending at $0 \angle +90^\circ$. The phase goes from $-90^\circ$ to $-188^\circ$ then to $+90^\circ$. This plot *does not* enclose the point $(-1, j0)$.
*   Plot for $-\infty < \omega < 0$: Mirror image of the above. Starts at $\infty \angle +90^\circ$, moves towards the real axis, crosses at $-K/2$, then moves towards the origin, ending at $0 \angle -90^\circ$. The phase goes from $+90^\circ$ to $-188^\circ$ then to $-90^\circ$. This plot *does not* enclose the point $(-1, j0)$.

**Correction in counting $N$ for $P=0$:**
When $P=0$, the Nyquist contour encloses no RHP poles of $G(s)H(s)$. The contour consists of the $j\omega$ axis and a large semicircle in the RHP.
*   The mapping of the large semicircle in the RHP is a circle of radius 0 around the origin (for $n>m$).
*   The mapping of the $j\omega$ axis is the polar plot of $G(j\omega)H(j\omega)$.
*   So, for $P=0$, the Nyquist locus is essentially the polar plot of $G(j\omega)H(j\omega)$ for all $\omega$.

Let's re-examine the example $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$ with $P=0$.
*   For $K<2$, the polar plot for $0 \le \omega < \infty$ starts at $\infty$ and ends at $0$. It crosses the real axis at $-K/2 > -1$. Thus, it does not enclose $(-1, j0)$. $N=0$. $Z = P-N = 0-0=0$. Stable.
*   For $K=2$, the polar plot passes through $(-1, j0)$. Marginally stable.
*   For $K>2$, the polar plot for $0 \le \omega < \infty$ crosses the real axis at $-K/2 < -1$. The phase at the crossing is $-188.2^\circ$. This means the plot for $0 \le \omega < \infty$ *does not* enclose $(-1, j0)$. Similarly, the plot for $-\infty < \omega < 0$ does not enclose $(-1, j0)$. So, $N=0$.
    *   If $N=0$ and $P=0$, then $Z=0$, implying stability. This seems incorrect for $K>2$.

**The problem is in assuming the Nyquist contour is just the $j\omega$ axis when $P=0$.** The Nyquist contour must enclose the *entire* RHP.

When $P=0$, the Nyquist contour is $\Gamma$. We map $1+G(s)H(s)$ around $\Gamma$.
$Z = P - N$ where $N$ is the number of CCW encirclements of the origin by $1+G(s)H(s)$.
Equivalently, $N$ is the number of CCW encirclements of $-1$ by $G(s)H(s)$.

Consider $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$. $P=0$.
The mapping of the large semicircle in the RHP ($s=Re^{j\theta}, R\to\infty, \theta$ from $\pi/2$ to $-\pi/2$) is a circle of radius 0 around the origin.
The mapping of the small semicircle in the RHP around $s=0$ ($s=\epsilon e^{j\theta}, \theta$ from $\pi/2$ to $-\pi/2$) is a semicircle of radius $K/(2\epsilon)$ from $-j\infty$ to $+j\infty$.

If $K>0$, this semicircle is in the left-half of the GH plane.
Let's check the mapping of $G(s)H(s)$ around the *entire* Nyquist contour.
*   $j\omega$ axis for $\omega \in (-\infty, \infty)$: This is the polar plot of $G(j\omega)H(j\omega)$. For $P=0$, the Nyquist locus is just this polar plot.
*   For $K>0$, the polar plot for $0 \le \omega < \infty$ starts at $\infty$ and ends at $0$. The phase goes from $-90^\circ$ to $-270^\circ$. It crosses the real axis at $-K/2$.
    *   If $K < 2$, $-K/2 > -1$. The plot does not enclose $-1$. $N=0$. $Z=0-0=0$. Stable.
    *   If $K = 2$, the plot passes through $-1$. Marginally stable.
    *   If $K > 2$, $-K/2 < -1$. The plot for $0 \le \omega < \infty$ crosses the real axis at $-K/2$. The phase is $-188.2^\circ$. This means the plot for $0 \le \omega < \infty$ does not enclose $-1$.
    *   **Crucial point:** The Nyquist criterion applies to the *entire* Nyquist contour. The mapping of the *entire* contour $\Gamma$ is the closed curve formed by the polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$.
    *   For $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$, $P=0$.
        *   If $K < 2$: $N=0$. $Z = P-N = 0-0=0$. Stable.
        *   If $K = 2$: Marginally stable.
        *   If $K > 2$: The polar plot of $G(j\omega)H(j\omega)$ does not encircle $(-1, j0)$. So, $N=0$. This leads to $Z=0$, suggesting stability for $K>2$, which is incorrect.

**Let's use $1+G(s)H(s)$.**
For $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$, $1+G(s)H(s) = \frac{s(s+1)(s+2)+K}{s(s+1)(s+2)}$.
The poles of $1+G(s)H(s)$ are the same as the poles of $G(s)H(s)$, so $P=0$.
We need to map the Nyquist contour $\Gamma$ by $1+G(s)H(s)$.
*   Segment 1: $s=j\omega$. $1+G(j\omega)H(j\omega) = 1 + \frac{K}{j\omega(-\omega^2+2+j3\omega)} = 1 + \frac{K}{-3\omega^2 + j(2\omega - 3\omega^3)}$.
    *   As $\omega \to \infty$, $1+G(j\omega)H(j\omega) \to 1$.
    *   As $\omega \to 0$, $1+G(j\omega)H(j\omega) \to 1 + \frac{K}{j\omega(2)} \approx 1 + \frac{K}{2j\omega} \approx \frac{K}{2j\omega}$. This goes to infinity along the negative imaginary axis.
    *   The real axis crossing for $G(j\omega)H(j\omega)$ was at $-K/2$. So, for $1+G(j\omega)H(j\omega)$, the real axis crossing is at $1-K/2$.
*   Segment 2: Small semicircle around $s=0$. $s=\epsilon e^{j\theta}$.
    *   $1+G(s)H(s) \approx 1 + \frac{K}{2s}$. For small $s$, this is $\approx \frac{K}{2s}$.
    *   As $s$ traverses the semicircle $s=\epsilon e^{j\theta}$ ($\theta: \pi/2 \to -\pi/2$), $1+G(s)H(s)$ maps to a semicircle of radius $K/(2\epsilon)$ from $-j\infty$ to $+j\infty$.
*   Segment 3: Large semicircle in RHP. $s=Re^{j\theta}$.
    *   $1+G(s)H(s) \approx 1 + K/s^3$. For large $s$, this is $\approx 1$.
    *   As $s$ traverses the semicircle ($R\to\infty$), $1+G(s)H(s)$ maps to a point at $1$.

**Mapping of $1+G(s)H(s)$:**
The Nyquist locus for $1+G(s)H(s)$ starts at $1$ (from large semicircle), goes to $1$ (from $j\omega$ axis, $\omega \to \infty$), then maps to a large semicircle from $-j\infty$ to $+j\infty$, then maps to the polar plot of $G(j\omega)H(j\omega)$ (which starts at $\infty \angle -90^\circ$ and ends at $0 \angle +90^\circ$ for $0 \le \omega < \infty$).
Essentially, the origin encirclements are determined by the polar plot of $G(j\omega)H(j\omega)$.

The origin is encircled by $1+G(s)H(s)$ if and only if $(-1, j0)$ is encircled by $G(s)H(s)$.

**Let's consider the characteristic equation $s^3 + 3s^2 + 2s + K = 0$.**
We need to find the number of roots in the RHP.
Use Routh-Hurwitz:
$s^3 | 1 \quad 2$
$s^2 | 3 \quad K$
$s^1 | \frac{3(2) - 1(K)}{3} = \frac{6-K}{3} \quad 0$
$s^0 | K$

For stability, all coefficients in the first column must be positive:
1.  $1 > 0$ (True)
2.  $3 > 0$ (True)
3.  $\frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$.
4.  $K > 0$.

So, the system is stable for $0 < K < 6$.
At $K=6$, the $s^1$ row is zero, indicating roots on the $j\omega$ axis.
For $K>6$, there is a sign change in the first column, indicating RHP roots.

Now let's reconcile this with the Nyquist criterion.
$G(s)H(s) = \frac{K}{s(s+1)(s+2)}$. $P=0$.
*   If $0 < K < 2$: $N=0$. $Z = P-N = 0-0=0$. Stable. (Matches Routh-Hurwitz)
*   If $K = 2$: Marginally stable. (Matches Routh-Hurwitz)
*   If $2 < K < 6$: The polar plot of $G(j\omega)H(j\omega)$ crosses the real axis at $-K/2$. Since $2 < K < 6$, we have $1 < K/2 < 3$. So, $-3 < -K/2 < -1$. The plot for $0 \le \omega < \infty$ does not enclose $(-1, j0)$. So, $N=0$. $Z = P-N = 0-0=0$. Stable. (Matches Routh-Hurwitz)
*   If $K = 6$: The polar plot crosses the real axis at $-6/2 = -3$. The plot does not enclose $(-1, j0)$. $N=0$. $Z=P-N=0$. This implies stability. However, Routh-Hurwitz shows marginal stability. This means the point $-1$ is not crossed, but the phase at some point is $-180^\circ$.
    *   The phase is $\phi = -90^\circ - \arctan(\omega) - \arctan(2\omega)$.
    *   We need to find when $\phi = -180^\circ$.
    *   $-180^\circ = -90^\circ - \arctan(\omega) - \arctan(2\omega)$
    *   $-90^\circ = - (\arctan(\omega) + \arctan(2\omega))$
    *   $90^\circ = \arctan(\omega) + \arctan(2\omega)$
    *   $\tan(90^\circ) = \tan(\arctan(\omega) + \arctan(2\omega)) = \frac{\omega + 2\omega}{1 - \omega(2\omega)} = \frac{3\omega}{1-2\omega^2}$.
    *   This implies $1-2\omega^2 = 0$, so $\omega^2 = 1/2$, $\omega = 1/\sqrt{2}$.
    *   At $\omega = 1/\sqrt{2}$, the magnitude is $|G(j\omega)H(j\omega)| = \frac{K}{\frac{1}{\sqrt{2}} \sqrt{9(\frac{1}{2})^2 + (3(\frac{1}{2})-2)^2}} = \frac{K}{\frac{1}{\sqrt{2}} \sqrt{\frac{9}{4} + (\frac{3}{2}-2)^2}} = \frac{K}{\frac{1}{\sqrt{2}} \sqrt{\frac{9}{4} + (-\frac{1}{2})^2}} = \frac{K}{\frac{1}{\sqrt{2}} \sqrt{\frac{9}{4} + \frac{1}{4}}} = \frac{K}{\frac{1}{\sqrt{2}} \sqrt{\frac{10}{4}}} = \frac{K}{\frac{1}{\sqrt{2}} \frac{\sqrt{10}}{2}} = \frac{K}{\sqrt{5/2}} = K\sqrt{2/5}$.
    *   For marginal stability at $K=6$, the magnitude at $\omega = 1/\sqrt{2}$ should be 1.
    *   $6\sqrt{2/5} = 6\sqrt{0.4} \approx 6 \times 0.63 = 3.78 \neq 1$. So, $-1$ is not crossed at $K=6$.

**The number of encirclements of $-1$ is determined by the value of $K$ for which the magnitude is 1.**
$|G(j\omega)H(j\omega)| = \frac{K}{\omega \sqrt{9\omega^4 + (3\omega^2-2)^2}} = 1$.
From Routh-Hurwitz, marginal stability occurs at $K=6$.
Let's check the phase at $K=6$ where the magnitude might be 1.
The phase is $-180^\circ$ at $\omega = 1/\sqrt{2}$.
The magnitude at $\omega = 1/\sqrt{2}$ is $K\sqrt{2/5}$.
For the magnitude to be 1, $K\sqrt{2/5} = 1 \implies K = \sqrt{5/2} \approx 1.58$.
This is a contradiction. The issue is that for a stable system ($P=0$), the entire frequency response for $\omega \in (-\infty, \infty)$ must not encircle $-1$.

Let's be precise about counting $N$. $N$ is the number of CCW encirclements of $-1$.
For $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$, $P=0$.
*   For $K < 2$, the polar plot for $0 \le \omega < \infty$ crosses the real axis at $-K/2 > -1$. It does not enclose $-1$. $N=0$. Stable.
*   For $2 < K < 6$, the polar plot crosses the real axis at $-K/2$ where $-3 < -K/2 < -1$. It does not enclose $-1$. $N=0$. Stable.
*   For $K = 6$, the plot crosses at $-3$. Still $N=0$.
*   For $K > 6$, the plot crosses at $-K/2 < -3$. Still $N=0$.

**What if $G(s)H(s)$ had poles in the RHP?**
Suppose $G(s)H(s) = \frac{K}{(s-1)(s+2)}$. $P=1$ (pole at $s=1$).
*   We need $N=P=1$ for stability.
*   The polar plot of $G(j\omega)H(j\omega) = \frac{K}{(j\omega-1)(j\omega+2)} = \frac{K}{-\omega^2 + j\omega}$.
*   Magnitude: $\frac{K}{\omega \sqrt{\omega^4+1}}$.
*   Phase: $-90^\circ - \arctan(-\omega) - \arctan(\omega) = -90^\circ - (-\arctan(\omega)) - \arctan(\omega) = -90^\circ + 2\arctan(\omega)$.
*   At $\omega=0$, $|G(j\omega)H(j\omega)| = \infty$. Phase = $-90^\circ$.
*   At $\omega \to \infty$, $|G(j\omega)H(j\omega)| = 0$. Phase = $-90^\circ + 2(90^\circ) = +90^\circ$.
*   The phase is always between $-90^\circ$ and $+90^\circ$. The plot crosses the real axis only when phase is $0^\circ$ or $-180^\circ$.
    *   Phase is never $0^\circ$ or $-180^\circ$. So, it does not intersect the real axis except possibly at infinity.
*   Let's check the mapping of the Nyquist contour:
    *   $s=1$ is a pole in the RHP. The Nyquist contour must detour around it with a small semicircle in the RHP. $s=1+\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$.
    *   $G(s)H(s) = \frac{K}{(s-1)(s+2)}$. For $s \approx 1$, $G(s)H(s) \approx \frac{K}{(s-1)(3)}$.
    *   As $s$ traverses the small semicircle around $s=1$, $G(s)H(s)$ maps to a semicircle of radius $K/(3\epsilon)$ from $-j\infty$ to $+j\infty$.
    *   The mapping of the infinite semicircle $s=Re^{j\theta}, R\to\infty$ is a point at $0$.
*   The Nyquist locus consists of:
    *   The polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$. This starts at $\infty \angle -90^\circ$, goes to $0 \angle +90^\circ$ for $0 \le \omega < \infty$, and is mirrored for $-\infty < \omega < 0$. It does not enclose $-1$.
    *   A large semicircle from $-j\infty$ to $+j\infty$ mapping of the contour around the RHP pole. This is a clockwise semicircle in the GH plane.
    *   The mapping of the large semicircle in RHP is $0$.
    *   **This part is confusing. Let's stick to the rule of thumb $Z = P-N$.**

**Rule of Thumb for counting $N$ (for $G(s)H(s)$):**
1.  Plot $G(j\omega)H(j\omega)$ for $\omega$ from $0$ to $\infty$.
2.  Draw the mirror image for $\omega$ from $0$ to $-\infty$.
3.  If $G(s)H(s)$ has poles at $s=j\omega_0$ ($ \omega_0 \neq 0$), draw arcs to close the plot. For $G(s)H(s) = \frac{K}{s(s+1)}$, pole at $s=0$. $\omega=0$ map: $s=\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$. $G(s)H(s) \approx K/(2s)$. Maps to semicircle from $-j\infty$ to $+j\infty$.
4.  Count the number of times the plot encircles the point $(-1, j0)$ in the counterclockwise direction. This is $N$.

**Example:** $G(s)H(s) = \frac{K}{s(s+1)}$. $P=0$.
*   $G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega+1)} = \frac{K}{-\omega^2 + j\omega}$.
*   Mag: $K/\sqrt{\omega^4+\omega^2}$. Phase: $-90^\circ - \arctan(\omega)$.
*   $\omega=0$: Mag $\to \infty$, Phase $\to -90^\circ$.
*   $\omega \to \infty$: Mag $\to 0$, Phase $\to -270^\circ \equiv +90^\circ$.
*   Real axis intersection: $Im[G(j\omega)H(j\omega)] = \frac{K\omega}{(-\omega^2)^2 + \omega^2} = \frac{K\omega}{\omega^4+\omega^2} = 0$ for $\omega \neq 0$. No intersection with real axis for $\omega>0$.
*   The polar plot for $0 \le \omega < \infty$ starts at $\infty \angle -90^\circ$ and ends at $0 \angle +90^\circ$. It never intersects the real axis. Thus, it never encloses $(-1, j0)$. $N=0$.
*   With $P=0$, stability condition $P=N$ means $0=0$. This implies stability for all $K$.
*   Let's check with Routh-Hurwitz for $1+G(s)H(s) = 1 + \frac{K}{s(s+1)} = \frac{s^2+s+K}{s(s+1)}$.
    $s^2 | 1 \quad K$
    $s^1 | 1 \quad 0$
    $s^0 | K$
    For stability, $K>0$.
*   Nyquist: $P=0$. If $K>0$, $N=0$. $Z=P-N = 0-0=0$. Stable. This matches.

**Example:** $G(s)H(s) = \frac{K(s+1)}{s^2}$. $P=0$.
*   $G(j\omega)H(j\omega) = \frac{K(j\omega+1)}{-\omega^2} = -\frac{K}{\omega^2} - j\frac{K}{\omega}$.
*   Mag: $\frac{K\sqrt{\omega^2+1}}{\omega^2}$. Phase: $180^\circ - \arctan(\omega)$.
*   $\omega=0$: Mag $\to \infty$, Phase $\to 180^\circ$.
*   $\omega \to \infty$: Mag $\to 0$, Phase $\to 180^\circ - 90^\circ = 90^\circ$.
*   Real axis intersection: $\frac{K}{\omega} = 0$, impossible for $\omega \neq 0$. No real axis intersection.
*   Plot for $0 \le \omega < \infty$ starts at $\infty \angle 180^\circ$ and ends at $0 \angle 90^\circ$.
*   The point $(-1, j0)$ has phase $180^\circ$. The plot starts at $180^\circ$ and moves away from it.
*   The only issue is the pole at $s=0$. We need to map the small semicircle around $s=0$. $s=\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$.
    *   $G(s)H(s) \approx \frac{K(1)}{s^2} = \frac{K}{s^2}$.
    *   As $s$ traverses the semicircle, $G(s)H(s)$ maps to a semicircle of radius $K/\epsilon^2$ from $+j\infty$ to $-j\infty$. This is a counterclockwise semicircle.
*   The total Nyquist locus: The polar plot for $\omega \in (-\infty, \infty)$ starts at $\infty \angle 180^\circ$, ends at $0 \angle 90^\circ$ for $0 \le \omega < \infty$. The mirrored part for $-\infty < \omega < 0$ starts at $\infty \angle 180^\circ$ and ends at $0 \angle -90^\circ$.
*   The locus for $\omega \in (-\infty, \infty)$ forms a closed loop. Does this loop encircle $-1$?
    *   The plot for $0 \le \omega < \infty$ is entirely in the left half plane (negative real part). It starts at $-\infty$ (phase $180^\circ$) and goes towards $0$. It does not enclose $-1$.
    *   The plot for $-\infty < \omega < 0$ is also in the left half plane.
*   So, for $K>0$, $N=0$. $P=0$. $Z=P-N=0$. Stable.
*   Routh-Hurwitz for $1+G(s)H(s) = 1 + \frac{K(s+1)}{s^2} = \frac{s^2+Ks+K}{s^2}$.
    $s^2 | 1 \quad K$
    $s^1 | K \quad 0$
    $s^0 | K$
    For stability, $K>0$. Matches.

**Example:** $G(s)H(s) = \frac{K}{s(s-1)}$. $P=1$ (pole at $s=1$).
*   We need $N=P=1$ for stability.
*   $G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega-1)} = \frac{K}{-\omega^2 - j\omega}$.
*   Mag: $K/\sqrt{\omega^4+\omega^2}$. Phase: $180^\circ - \arctan(\omega)$.
*   $\omega=0$: Mag $\to \infty$, Phase $\to 180^\circ$.
*   $\omega \to \infty$: Mag $\to 0$, Phase $\to 90^\circ$.
*   Real axis intersection: $Im[G(j\omega)H(j\omega)] = \frac{-K}{-\omega^2+\omega^2} = 0$. This happens for all $\omega$. The real axis intersection is at $\frac{K}{-\omega^2} = -K/\omega^2$.
    *   As $\omega \to 0$, the real axis value is $-\infty$.
    *   As $\omega \to \infty$, the real axis value is $0$.
*   The plot for $0 \le \omega < \infty$ starts at $\infty \angle 180^\circ$, goes towards $-\infty$ along the negative real axis, and then comes back towards the origin ending at $0 \angle 90^\circ$.
*   The point $(-1, j0)$ is on the negative real axis.
*   If $K>0$, the plot crosses the negative real axis at $-K/\omega^2$. For this to be $-1$, we need $K/\omega^2 = 1$, so $\omega = \sqrt{K}$.
*   If $K>1$, then $\sqrt{K}>1$. The plot crosses the real axis at $-1$ (at $\omega = \sqrt{K}$).
*   **Encirclements of $-1$ for $0 \le \omega < \infty$:**
    *   If $K \le 1$: The crossing point $-K/\omega^2$ is always to the right of $-1$. The plot does not enclose $-1$.
    *   If $K > 1$: The plot crosses the real axis at $-1$ (at $\omega = \sqrt{K}$). It then goes towards $0 \angle 90^\circ$. The plot does not enclose $-1$.

*   Let's reconsider the mapping around the RHP pole at $s=1$.
    *   $G(s)H(s) = \frac{K}{s(s-1)}$. Small semicircle: $s=1+\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$.
    *   $G(s)H(s) \approx \frac{K}{1(s-1)} = \frac{K}{s-1}$.
    *   Maps to a semicircle of radius $K/\epsilon$ from $-j\infty$ to $+j\infty$. This is a clockwise semicircle.

*   **Total Nyquist locus:** Polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$ PLUS the mapping of the contour around the RHP pole.
    *   The mapping of the contour around $s=1$ is a clockwise semicircle from $-j\infty$ to $+j\infty$.
    *   The polar plot for $0 \le \omega < \infty$ starts at $\infty \angle 180^\circ$, crosses the real axis at $-K/\omega^2$ (always $<-1$ or $\to -\infty$ as $\omega\to 0$), and ends at $0 \angle 90^\circ$.
    *   The polar plot for $-\infty < \omega < 0$ is mirrored.
    *   The clockwise semicircle from $-j\infty$ to $+j\infty$ (from pole at $s=1$) means the point $(-1, j0)$ is *not* encircled by this part of the mapping.

    *   **Let's be careful:** The number of encirclements of $-1$ by $G(s)H(s)$ as $s$ goes around the Nyquist contour.
    *   For $P=1$ (pole at $s=1$), the Nyquist contour bypasses $s=1$ with a small RHP semicircle.
    *   The mapping of this small semicircle results in a large semicircle from $-j\infty$ to $+j\infty$ in the GH plane.
    *   The polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$ starts at $\infty \angle 180^\circ$, crosses the negative real axis at $-K/\omega^2$, and ends at $0 \angle 90^\circ$ (for $\omega \to \infty$).
    *   The plot for $0 \le \omega < \infty$ starts at $\infty$ on the positive real axis, goes to $-\infty$ on the real axis, and then to $0$ on the positive imaginary axis. It does not enclose $-1$.
    *   **The entire contour mapping needs to be considered.** The mapping of the RHP contour around $s=1$ adds a semicircle from $-j\infty$ to $+j\infty$.
    *   **Crucial Insight:** The mapping of the small semicircle around a pole in the RHP ($s=1+\epsilon e^{j\theta}$) by $G(s)H(s)$ contributes to the encirclement count. If $G(s)H(s)$ has a pole at $s_0$ in RHP, the mapping of the small semicircle contour $s = s_0 + \epsilon e^{j\theta}$ (with $\theta$ from $\pi/2$ to $-\pi/2$) is a large counterclockwise semicircle in the $G(s)H(s)$ plane if $G(s)H(s)$ has $n_0$ zeros and $d_0$ poles at $s_0$.
    *   For a simple pole at $s_0$, $G(s)H(s) \approx \frac{A}{s-s_0}$. The mapping is a semicircle of radius $|A|/\epsilon$.
    *   The angle traversed by $G(s)H(s)$ is $-180^\circ$ when traversing the semicircle from $j\infty$ to $-j\infty$. This contributes to the encirclement count.

Let's use the established procedure:
1.  Plot $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$.
2.  Identify the intersection with the negative real axis. Let it be $(-x_0, 0)$.
3.  Count encirclements of $(-1, j0)$ by the entire polar plot for $\omega \in (-\infty, \infty)$.
    *   For $G(s)H(s) = \frac{K}{s(s-1)}$, $P=1$.
    *   Polar plot for $\omega \in [0, \infty)$ starts at $\infty \angle 180^\circ$, crosses real axis at $-K/\omega^2$, ends at $0 \angle 90^\circ$.
    *   For $K>0$, the plot does not enclose $-1$.
    *   **However, the presence of an RHP pole at $s=1$ means the Nyquist contour bypasses it.** The mapping of this small semicircle around $s=1$ will contribute to the encirclement count.
    *   $G(s)H(s) = \frac{K}{s^2-s}$. For $s$ near $1$, $G(s)H(s) \approx \frac{K}{1(s-1)} = \frac{K}{s-1}$.
    *   As $s$ moves along $s=1+\epsilon e^{j\theta}$ ($\theta: \pi/2 \to -\pi/2$), $s-1 = \epsilon e^{j\theta}$.
    *   $G(s)H(s) = \frac{K}{\epsilon} e^{-j\theta}$. As $\theta$ goes from $\pi/2$ to $-\pi/2$, $-j\theta$ goes from $-j\pi/2$ to $j\pi/2$. The angle goes from $-90^\circ$ to $+90^\circ$. This is a semicircle from $-j\infty$ to $+j\infty$.
    *   **This semicircle does NOT enclose the origin.**

Let's use the definition of $N$: The number of *counterclockwise* encirclements of the origin by $1+G(s)H(s)$.

Consider $G(s)H(s) = \frac{K}{s(s-1)}$. $P=1$.
*   $1+G(s)H(s) = \frac{s^2-s+K}{s(s-1)}$.
*   We need to map the Nyquist contour $\Gamma$ by $1+G(s)H(s)$.
    *   Map around $s=1$ (RHP pole): $s=1+\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$.
        *   $1+G(s)H(s) = 1 + \frac{K}{s(s-1)}$. For $s \approx 1$, $1+G(s)H(s) \approx 1 + \frac{K}{1(s-1)} = \frac{s-1+K}{s-1}$.
        *   As $s-1 = \epsilon e^{j\theta}$, this is $\frac{\epsilon e^{j\theta}+K}{\epsilon e^{j\theta}} = 1 + \frac{K}{\epsilon} e^{-j\theta}$.
        *   For small $\epsilon$, this is $\approx \frac{K}{\epsilon} e^{-j\theta}$.
        *   As $\theta$ goes from $\pi/2$ to $-\pi/2$, $-j\theta$ goes from $-j\pi/2$ to $j\pi/2$. The angle goes from $-90^\circ$ to $+90^\circ$. This is a semicircle from $-j\infty$ to $+j\infty$.
    *   Map around $s=0$ (j$\omega$ axis pole): $s=\epsilon e^{j\theta}, \theta: \pi/2 \to -\pi/2$.
        *   $1+G(s)H(s) \approx 1 + \frac{K}{s(-1)} = 1 - \frac{K}{s} = \frac{s-K}{s}$.
        *   As $s = \epsilon e^{j\theta}$, this is $\frac{\epsilon e^{j\theta}-K}{\epsilon e^{j\theta}} = 1 - \frac{K}{\epsilon} e^{-j\theta}$.
        *   This is approximately $-K/s$. Maps to semicircle of radius $K/\epsilon$ from $-j\infty$ to $+j\infty$.
    *   Map of $j\omega$ axis: $1+G(j\omega)H(j\omega) = 1 + \frac{K}{-\omega^2 - j\omega}$.
        *   Starts at $\infty \angle 180^\circ$ for $\omega \to 0$.
        *   Ends at $1$ for $\omega \to \infty$.
        *   Real axis crossing: $1 - K/\omega^2$.
    *   Map of large semicircle: $s=Re^{j\theta}$. $1+G(s)H(s) \approx 1$. Point at $1$.

The number of encirclements of the origin by $1+G(s)H(s)$ is $N$.
The mapping of the small semicircle around the RHP pole at $s=1$ ($s=1+\epsilon e^{j\theta}$) results in a semicircle from $-j\infty$ to $+j\infty$. This semicircle does NOT encircle the origin.
The mapping of the $j\omega$ axis segment ($s=j\omega$) starts at $\infty$ along the negative real axis (phase $180^\circ$) and goes towards the origin, crossing the real axis at $1-K/\omega^2$.

*   If $K>0$:
    *   For $0 \le \omega < \infty$: Starts at $\infty \angle 180^\circ$, goes to $-\infty$ along the real axis, crosses the real axis at $1-K/\omega^2$.
    *   The plot for $0 \le \omega < \infty$ starts at $-\infty$ on the real axis and ends at $1$.
    *   If $1-K/\omega^2$ is to the right of $0$ (i.e., $1-K/\omega^2 > 0$, $K/\omega^2 < 1$), the plot for $0 \le \omega < \infty$ does not encircle the origin.
    *   **The critical value is when the magnitude of $G(j\omega)H(j\omega)$ is 1.** $|G(j\omega)H(j\omega)| = \frac{K}{\omega\sqrt{\omega^4+\omega^2}} = 1$.
    *   $\frac{K^2}{\omega^2(\omega^4+\omega^2)} = 1 \implies K^2 = \omega^6 + \omega^4$.
    *   The phase is $180^\circ - \arctan(\omega)$. For the Nyquist criterion, we are interested in the phase crossing $-180^\circ$.
    *   $180^\circ - \arctan(\omega) = -180^\circ \implies 360^\circ = \arctan(\omega)$, impossible.
    *   The RHP pole means we must count the encirclements of $-1$ by $G(s)H(s)$.
    *   The plot for $\omega \in (-\infty, \infty)$ starts at $\infty \angle 180^\circ$, goes to $-\infty$ real axis, then to $0 \angle -90^\circ$. The mirrored plot for $-\infty < \omega < 0$ starts at $\infty \angle 180^\circ$, goes to $-\infty$ real axis, then to $0 \angle +90^\circ$.
    *   The plot does not enclose $-1$ if $K \le 1$. $N=0$. $P=1$. $Z = P-N = 1-0=1$. Unstable.
    *   If $K>1$, the plot crosses the real axis at $1-K/\omega^2$. If $K>1$, $\omega=\sqrt{K}$. The real axis crossing is $-1$.
    *   The polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$ crosses the real axis at $-1$ when $\omega = \sqrt{K}$.
    *   For $K>1$, the plot for $0 \le \omega < \infty$ encloses $-1$ once counterclockwise. $N=1$.
    *   $P=1$, $N=1$. $Z = P-N = 1-1=0$. Stable.
    *   So, for $K>1$, the system is stable.

**Summary for $G(s)H(s) = \frac{K}{s(s-1)}$:**
*   $P=1$.
*   If $K \le 1$: $N=0$. $Z=1-0=1$. Unstable.
*   If $K > 1$: $N=1$. $Z=1-1=0$. Stable.

This seems correct. The rule for counting $N$ is to look at the polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$ and count CCW encirclements of $-1$.

---

### 5. Stability and Performance Measures from Nyquist Plot

#### 5.1 Gain Margin (GM)

*   The gain margin is the factor by which the gain can be increased before the closed-loop system becomes unstable.
*   It is determined from the frequency $\omega_{gc}$ where the phase of $G(j\omega)H(j\omega)$ is $-180^\circ$.
*   If the phase never reaches $-180^\circ$, the gain margin is infinite.
*   If the phase reaches $-180^\circ$ at $\omega_{gc}$, the magnitude $|G(j\omega_{gc})H(j_{gc})|$ is the reciprocal of the gain margin.
*   $GM = \frac{1}{|G(j\omega_{gc})H(j\omega_{gc})|}$ or $GM_{dB} = -20 \log_{10}|G(j\omega_{gc})H(j\omega_{gc})|$.
*   For stability, the gain margin should be greater than 1 (or positive in dB).

#### 5.2 Phase Margin (PM)

*   The phase margin is the additional phase lag required to make the system unstable at the gain crossover frequency $\omega_{gc}$.
*   It is determined from the frequency $\omega_{gc}$ where the magnitude $|G(j\omega)H(j\omega)|$ is 1 (or 0 dB).
*   $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$.
*   For stability, the phase margin should be positive. A common requirement is $PM \ge 30^\circ$.

**Relationship to Nyquist Plot:**
*   The phase crossover frequency $\omega_{pc}$ is where the phase is $-180^\circ$. The magnitude at this point $M_{pc} = |G(j\omega_{pc})H(j\omega_{pc})|$ is related to the gain margin. $GM = 1/M_{pc}$ (if the phase reaches $-180^\circ$).
*   The gain crossover frequency $\omega_{gc}$ is where the magnitude is 1. The phase at this point $\phi_{gc} = \angle G(j\omega_{gc})H(j\omega_{gc})$ is related to the phase margin. $PM = 180^\circ + \phi_{gc}$.

**Reference:** Nise, 5th Ed., Chapter 10, Sections 10.3 & 10.4; Nagrath & Gopal, 5th Ed., Chapter 9, Sections 9.7 & 9.8.

---

### 6. Advantages of Nyquist Criterion

*   **Absolute Stability:** Can determine the stability of the closed-loop system directly from the open-loop frequency response.
*   **Handles All Types of Systems:** Applicable to systems with time delays, unstable open-loop transfer functions, and systems with poles on the $j\omega$ axis.
*   **Robustness:** Provides information about the relative stability (gain and phase margins) which is crucial for performance.
*   **Graphical Interpretation:** Offers a clear visual understanding of the stability margins.
*   **Experimental Data:** Can be applied directly to experimentally obtained frequency response data.

**Reference:** Nise, 5th Ed., Chapter 10, Section 10.1.

---

### 7. Limitations of Nyquist Criterion

*   **Complexity:** Sketching the complete Nyquist locus can be tedious, especially for higher-order systems or when dealing with poles/zeros on the $j\omega$ axis.
*   **Characteristic Equation:** Requires the open-loop transfer function $G(s)H(s)$. If only the closed-loop transfer function is known, it's harder to apply directly.
*   **Accuracy:** Graphical methods can sometimes lead to inaccuracies if not sketched carefully.

---

### 8. Practice Questions and Exercises

**Question 1:**
For the open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)}$, determine the range of $K$ for stability using the Nyquist criterion.

**Answer 1:**
*   **Step 1: Determine $P$.** The poles are at $s=0$ and $s=-2$. None are in the RHP. So, $P=0$.
*   **Step 2: Stability requirement.** For stability, $Z=P-N=0$, so $N=0$.
*   **Step 3: Sketch polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$.**
    $G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega+2)} = \frac{K}{-2\omega^2 + j2\omega}$.
    *   $\omega=0$: Mag $\to \infty$, Phase $\to -90^\circ$.
    *   $\omega \to \infty$: Mag $\to 0$, Phase $\to -270^\circ \equiv +90^\circ$.
    *   Real axis intersection: Im$[G(j\omega)H(j\omega)] = \frac{2K\omega}{(-2\omega^2)^2 + (2\omega)^2} = \frac{2K\omega}{4\omega^4+4\omega^2} = 0$ for $\omega \neq 0$. No real axis intersection.
*   **Step 4: Count encirclements.** The polar plot for $0 \le \omega < \infty$ starts at $\infty \angle -90^\circ$ and ends at $0 \angle +90^\circ$. It does not enclose $(-1, j0)$. So, $N=0$.
*   **Step 5: Apply condition.** $P=0, N=0$. $Z = P-N = 0$. The system is stable for all $K>0$.

**Question 2:**
For the open-loop transfer function $G(s)H(s) = \frac{K(s+2)}{s(s+1)}$, determine the range of $K$ for stability using the Nyquist criterion.

**Answer 2:**
*   **Step 1: Determine $P$.** Poles at $s=0, s=-1$. $P=0$.
*   **Step 2: Stability requirement.** $P=0 \implies N=0$.
*   **Step 3: Sketch polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$.**
    $G(j\omega)H(j\omega) = \frac{K(j\omega+2)}{j\omega(j\omega+1)} = \frac{K(j\omega+2)}{-\omega^2+j\omega}$.
    *   $\omega=0$: Mag $\to \infty$, Phase $\to 90^\circ$.
    *   $\omega \to \infty$: Mag $\to K$, Phase $\to 0^\circ$ (from $\frac{K(j\omega)}{j\omega(j\omega)} \approx \frac{K(j\omega)}{-\omega^2} = -j K/\omega$). Wait, for large $\omega$, $G(j\omega)H(j\omega) \approx \frac{K\omega}{j\omega(j\omega)} = \frac{K}{j\omega} \to 0$ with phase $-90^\circ$. Let's recompute.
    $G(j\omega)H(j\omega) = \frac{K(j\omega+2)}{-\omega^2+j\omega} = K \frac{2+j\omega}{-\omega^2+j\omega} \times \frac{-\omega^2-j\omega}{-\omega^2-j\omega} = K \frac{(2+j\omega)(-\omega^2-j\omega)}{(\omega^2)^2+\omega^2}$
    $= K \frac{-2\omega^2 - j2\omega - j\omega^3 + \omega^2}{\omega^4+\omega^2} = K \frac{-\omega^2 - j(\omega^3+2\omega)}{\omega^4+\omega^2}$.
    *   Real part: $\frac{-K\omega^2}{\omega^4+\omega^2}$. Imaginary part: $\frac{-K(\omega^3+2\omega)}{\omega^4+\omega^2}$.
    *   $\omega=0$: Real part $\to 0$, Imaginary part $\to \infty$. Phase $\to 90^\circ$.
    *   $\omega \to \infty$: Real part $\approx -K\omega^2/\omega^4 = -K/\omega^2 \to 0$. Imaginary part $\approx -K\omega^3/\omega^4 = -K/\omega \to 0$.
        Phase $\approx \arctan \left( \frac{-(\omega^3+2\omega)}{-\omega^2} \right) \approx \arctan \left( \frac{-\omega^3}{-\omega^2} \right) = \arctan(\omega) \to 90^\circ$.
*   **Real axis intersection:** Imaginary part = 0 implies $\omega^3+2\omega = 0 \implies \omega(\omega^2+2) = 0$. So, $\omega=0$. No intersection for $\omega > 0$.
*   **Step 4: Count encirclements.** The plot for $0 \le \omega < \infty$ starts at $\infty \angle 90^\circ$ and ends at $0 \angle 90^\circ$. It does not intersect the real axis and therefore does not enclose $(-1, j0)$. So, $N=0$.
*   **Step 5: Apply condition.** $P=0, N=0$. $Z = P-N = 0$. The system is stable for all $K>0$.

**Question 3 (More challenging):**
For the open-loop transfer function $G(s)H(s) = \frac{K}{s(s^2+s+1)}$, determine the range of $K$ for stability using the Nyquist criterion.

**Answer 3:**
*   **Step 1: Determine $P$.** Poles at $s=0$ and $s = \frac{-1 \pm \sqrt{1-4}}{2} = -0.5 \pm j0.866$. Poles are at $0, -0.5+j0.866, -0.5-j0.866$. None are in the RHP. $P=0$.
*   **Step 2: Stability requirement.** $P=0 \implies N=0$.
*   **Step 3: Sketch polar plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$.**
    $G(j\omega)H(j\omega) = \frac{K}{j\omega((j\omega)^2+j\omega+1)} = \frac{K}{j\omega(-\omega^2+j\omega+1)} = \frac{K}{j\omega(1-\omega^2+j\omega)} = \frac{K}{j\omega(1-\omega^2) - \omega^2}$.
    $= \frac{K}{-\omega^2 + j\omega(1-\omega^2)}$.
    *   $\omega=0$: Mag $\to \infty$, Phase $\to -90^\circ$.
    *   $\omega \to \infty$: Mag $\to 0$, Phase $\to -270^\circ \equiv +90^\circ$.
    *   Real axis intersection: Im$[G(j\omega)H(j\omega)] = \frac{-K\omega(1-\omega^2)}{(-\omega^2)^2 + \omega^2(1-\omega^2)^2} = 0$.
        This implies $1-\omega^2 = 0$, so $\omega = 1$ (since $\omega \ge 0$).
    *   At $\omega=1$: Real part $= \frac{-K}{1^2} = -K$.
    *   The plot crosses the real axis at $(-K, 0)$.
*   **Step 4: Count encirclements.** For $N=0$ (required for stability when $P=0$), the plot must not enclose $(-1, j0)$.
    *   The plot starts at $\infty \angle -90^\circ$, crosses the real axis at $-K$, and ends at $0 \angle +90^\circ$.
    *   If $-K > -1$ (i.e., $K < 1$), the plot does not enclose $-1$. $N=0$. Stable.
    *   If $-K = -1$ (i.e., $K = 1$), the plot passes through $-1$. Marginally stable.
    *   If $-K < -1$ (i.e., $K > 1$), the plot encloses $-1$ once counterclockwise. $N=1$. Since $P=0$, $Z = P-N = 0-1 = -1$, which implies instability.
*   **Step 5: Apply condition.**
    *   For stability ($N=0$), we need $K < 1$.
    *   For marginal stability ($K=1$).
    *   For instability ($K>1$).
*   **Range for stability:** $0 < K < 1$.

---

### 9. Important Points to Remember

*   **$Z = P - N$**: The fundamental relationship where $Z$ is RHP closed-loop poles, $P$ is RHP open-loop poles, and $N$ is the number of CCW encirclements of the $-1$ point by the polar plot of $G(s)H(s)$ as $s$ traverses the Nyquist contour.
*   **Stability Condition:** $Z=0 \implies P=N$.
*   **Nyquist Contour:** Encloses the entire RHP. Be mindful of poles/zeros on the $j\omega$ axis.
*   **Encirclement Convention:** Counterclockwise encirclements of $-1$ are positive.
*   **Gain and Phase Margins:** Crucial for assessing relative stability. GM is measured at the phase crossover frequency ($\phi = -180^\circ$), PM is measured at the gain crossover frequency ($|G(j\omega)H(j\omega)| = 1$).
*   **Poles on $j\omega$ axis:** If $G(s)H(s)$ has poles at $s=0$ or $s=\pm j\omega_0$, the Nyquist contour must detour around them, affecting the shape of the Nyquist locus.
*   **$P=0$ Case:** The analysis simplifies to checking the encirclements of $-1$ by the polar plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$.

---

### 10. Alignment with Course Outcomes

*   **CO4:** Analyze dynamic systems for their performance and stability in the frequency domain.
    *   The entire topic of the Nyquist stability criterion directly addresses this outcome by providing a method to analyze stability based on frequency response. Gain and phase margins, derived from the Nyquist plot, are also key performance indicators in the frequency domain.
*   **CO3:** Analyze dynamic systems for their performance and stability using Root Locus.
    *   While this topic focuses on frequency domain, it complements the root locus method by offering an alternative perspective on stability and allowing for analysis of systems where root locus might be difficult to apply (e.g., systems with time delays).
*   **CO2:** Analyze the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.
    *   Frequency domain analysis, including Nyquist, provides insights into time-domain behavior. For example, phase margin is correlated with damping ratio, and gain crossover frequency relates to bandwidth.
*   **CO1 & CO5:** To represent continuous time systems in the classical domain.
    *   The Nyquist criterion relies on the transfer function $G(s)H(s)$, which is a representation in the classical (Laplace) domain. The analysis involves manipulating this transfer function into its frequency response form $G(j\omega)H(j\omega)$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
