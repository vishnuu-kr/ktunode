---
title: "Stability analysis using Bode plot and Nyquist stability criterion."
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe95c"
status: "completed"
scrapedAt: "2026-05-23T17:54:46.023Z"
---
# Control Systems: Module 3 - Stability of Linear Control Systems

## Topic: Stability Analysis using Bode Plot and Nyquist Stability Criterion

This module focuses on understanding the stability of linear control systems, specifically exploring two powerful frequency domain techniques: Bode Plots and the Nyquist Stability Criterion. These methods are crucial for assessing how a system will behave when subjected to external inputs and for determining if the system will remain bounded or become unstable.

**Course Outcome Alignment:**
*   **CO4 (K3):** This topic directly addresses the ability to apply frequency domain techniques to assess system stability.

**Learning Outcomes for this Topic:**
*   Understand the concept of Bounded-Input Bounded-Output (BIBO) stability.
*   Analyze system stability using Bode plots, including gain margin and phase margin.
*   Apply the Nyquist stability criterion to determine the closed-loop stability of a system from its open-loop transfer function.
*   Relate frequency domain stability criteria to pole locations in the s-plane.

---

### 1. Concept of BIBO Stability

**Definition:** A system is said to be **Bounded-Input Bounded-Output (BIBO) stable** if every bounded input produces a bounded output. In simpler terms, if you don't feed the system with an "infinite" signal, the output should not "blow up" to infinity.

**Mathematical Interpretation:**
For a Linear Time-Invariant (LTI) system with a transfer function $G(s) = \frac{Y(s)}{U(s)}$, where $Y(s)$ is the Laplace transform of the output and $U(s)$ is the Laplace transform of the input, the system is BIBO stable if and only if all the **poles of the closed-loop transfer function** lie strictly in the **left half of the s-plane (LHP)**.

*   **Poles:** The roots of the denominator polynomial of the closed-loop transfer function.
*   **Left Half of the s-plane (LHP):** The region where the real part of the complex variable $s$ is negative ($\text{Re}(s) < 0$).

**Relationship to Impulse Response:**
If the impulse response of the system, $g(t)$, is absolutely integrable (i.e., $\int_{-\infty}^{\infty} |g(t)| dt < \infty$), then the system is BIBO stable.

**Important Note (from Nagarath & Gopal, Chapter 9):** While BIBO stability is a crucial concept, for linear time-invariant systems, internal stability (related to the internal modes of the system) is also important. However, for strictly proper rational transfer functions, BIBO stability is equivalent to all poles of the system being in the LHP.

---

### 2. Stability Analysis using Bode Plot

Bode plots are graphical representations of the frequency response of a system. They consist of two plots:
1.  **Magnitude Plot:** Logarithm of the magnitude of the frequency response $|G(j\omega)|$ (in dB) versus $\omega$ (on a logarithmic scale).
2.  **Phase Plot:** Phase angle of the frequency response $\angle G(j\omega)$ (in degrees) versus $\omega$ (on a logarithmic scale).

The Bode plot is typically generated for the **open-loop transfer function** $G(j\omega)H(j\omega)$ of a unity feedback system. Stability is then inferred for the **closed-loop system**.

**Key Concepts for Stability Analysis:**

*   **Gain Margin (GM):**
    *   **Definition:** The amount of gain that can be added to the system before it becomes unstable.
    *   **How to find it:**
        1.  Locate the **gain crossover frequency ($\omega_{gc}$)**: The frequency at which the magnitude of the open-loop transfer function is 0 dB (i.e., $|G(j\omega_{gc})H(j\omega_{gc})| = 1$).
        2.  At this frequency $\omega_{gc}$, read the phase angle from the phase plot.
        3.  The **phase margin (PM)** is the difference between $180^\circ$ and the phase angle at $\omega_{gc}$.
        4.  The **gain margin** is the negative of the magnitude in dB at the **phase crossover frequency ($\omega_{pc}$)**: The frequency at which the phase angle of the open-loop transfer function is $-180^\circ$.
        5.  **Gain Margin (in dB) = $-20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})|$**
        6.  **Gain Margin (as a ratio) = $\frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|}$**

*   **Phase Margin (PM):**
    *   **Definition:** The amount of additional phase lag that can be tolerated at the gain crossover frequency before the system becomes unstable.
    *   **How to find it:**
        1.  Locate the **gain crossover frequency ($\omega_{gc}$)**.
        2.  At $\omega_{gc}$, determine the phase angle $\phi_{gc} = \angle G(j\omega_{gc})H(j\omega_{gc})$.
        3.  **Phase Margin (PM) = $180^\circ + \phi_{gc}$**

**Stability Criteria using Bode Plot (for Unity Feedback Systems):**

1.  **Gain Crossover Frequency ($\omega_{gc}$) exists:**
    *   The system is **stable** if the phase margin at $\omega_{gc}$ is positive ($PM > 0$).
    *   The system is **marginally stable** if $PM = 0$.
    *   The system is **unstable** if $PM < 0$.

2.  **Phase Crossover Frequency ($\omega_{pc}$) exists:**
    *   The system is **stable** if the gain margin at $\omega_{pc}$ is positive ($GM > 0$ as a ratio, or $GM > 0$ dB).
    *   The system is **marginally stable** if $GM = 0$.
    *   The system is **unstable** if $GM < 0$.

**Important Considerations:**

*   The Bode plot analysis assumes a **minimum-phase system** (all poles and zeros are in the LHP). If there are poles or zeros in the RHP or on the imaginary axis, special care is needed (often using Nyquist criterion).
*   For non-unity feedback systems, the Bode plot should be made for the **open-loop transfer function $L(s) = G(s)H(s)$**. The stability is determined from the root locus of $1 + L(s) = 0$. The gain and phase margins are still defined with respect to $L(j\omega)$.

**Example (from Ogata, Chapter 7):**
Consider an open-loop transfer function $L(s) = \frac{10}{s(s+1)(s+2)}$.
The Bode plot will show the magnitude and phase response.
*   **Gain Crossover Frequency ($\omega_{gc}$):** Find $\omega$ where $|L(j\omega)| = 1$.
*   **Phase Crossover Frequency ($\omega_{pc}$):** Find $\omega$ where $\angle L(j\omega) = -180^\circ$.

By plotting $|L(j\omega)|$ vs $\omega$ and $\angle L(j\omega)$ vs $\omega$, we can determine $\omega_{gc}$ and the corresponding phase margin, and $\omega_{pc}$ and the corresponding gain margin. If both PM and GM are positive, the closed-loop system is stable.

---

### 3. Nyquist Stability Criterion

The Nyquist stability criterion is a more general and powerful frequency domain method that can analyze the stability of both minimum-phase and non-minimum-phase systems, as well as systems with time delays. It relates the stability of the closed-loop system to the encirclements of the critical point $(-1, 0)$ in the complex plane by the **Nyquist plot** of the **open-loop transfer function $L(s) = G(s)H(s)$**.

**Key Concepts:**

*   **Nyquist Path:** A contour in the s-plane that encloses the entire right half of the s-plane (RHP). It consists of:
    *   A semi-circular arc of radius $R \to \infty$ in the RHP.
    *   The imaginary axis ($j\omega$) from $\omega = \infty$ to $\omega = -\infty$.
    *   If there are poles or zeros on the imaginary axis, small semi-circular detours are made around them to avoid them.

*   **Nyquist Plot:** The mapping of the Nyquist path in the s-plane to the L-plane (complex plane where the horizontal axis is the real part and the vertical axis is the imaginary part of $L(j\omega)$).
    *   The Nyquist plot for $j\omega$ from $0$ to $\infty$ is the reflection of the Nyquist plot for $j\omega$ from $0$ to $-\infty$ across the real axis. Therefore, we only need to consider $j\omega$ from $0$ to $\infty$ and its reflection.

*   **Critical Point:** The point $(-1, 0)$ in the L-plane.

*   **Encirclement:** How many times the Nyquist plot encircles the critical point $(-1, 0)$ in a **counter-clockwise (CCW)** direction.

**The Nyquist Stability Criterion:**

For a unity feedback system with open-loop transfer function $L(s) = G(s)H(s)$, the closed-loop transfer function is $T(s) = \frac{L(s)}{1+L(s)}$. The poles of the closed-loop system are the roots of the characteristic equation $1 + L(s) = 0$, which are also the zeros of $1 + L(s)$.

Let:
*   $P$: Number of poles of $L(s)$ in the open RHP (i.e., $\text{Re}(s) > 0$).
*   $Z$: Number of zeros of $1 + L(s)$ in the open RHP (i.e., the number of unstable closed-loop poles).
*   $N$: Number of CCW encirclements of the critical point $(-1, 0)$ by the Nyquist plot of $L(j\omega)$.

The Nyquist stability criterion states:
$$N = P - Z$$

Rearranging, we get:
$$Z = P - N$$

**For closed-loop stability, we require $Z = 0$ (no unstable closed-loop poles).**

Therefore, for a system to be stable:
$$P - N = 0 \implies N = P$$

**Practical Application of the Nyquist Criterion:**

1.  **Determine $P$:** Count the number of poles of the open-loop transfer function $L(s) = G(s)H(s)$ that are in the RHP.
2.  **Obtain the Nyquist Plot:**
    *   Consider the frequency range $\omega$ from $0$ to $\infty$.
    *   For each $\omega$, calculate $L(j\omega) = |L(j\omega)| \angle L(j\omega)$.
    *   Plot these points in the complex plane. This forms the Nyquist plot for the upper half of the imaginary axis.
    *   The Nyquist plot for the lower half ($\omega$ from $-\infty$ to $0$) is the mirror image of the upper half across the real axis.
    *   **Important:** If $L(s)$ has poles or zeros on the $j\omega$ axis, small semi-circular arcs must be added to the Nyquist path to avoid these points. These arcs are mapped to the L-plane.
        *   A pole at $s=0$ requires a semi-circular detour of radius $\epsilon \to 0$ around the origin. This maps to a large semi-circle in the L-plane.
        *   A pole at $s=j\omega_0$ or $s=-j\omega_0$ requires a semi-circular detour of radius $\epsilon \to 0$ around $j\omega_0$ or $-j\omega_0$.
3.  **Count $N$:** Count the number of CCW encirclements of the point $(-1, 0)$ by the entire Nyquist plot (including the $\omega=0$ to $-\infty$ part, or equivalently, the reflection of the $\omega=0$ to $\infty$ part).
4.  **Check for Stability:** The closed-loop system is stable if $Z = P - N = 0$, which means $N = P$.

**Stability Margins from Nyquist Plot:**

*   **Gain Margin (GM):** The reciprocal of the magnitude of $L(j\omega)$ at the phase crossover frequency ($\omega_{pc}$, where $\angle L(j\omega_{pc}) = -180^\circ$).
    *   **GM (ratio) = $\frac{1}{|L(j\omega_{pc})|}$**
    *   The GM can be read directly from the Nyquist plot as the distance from the origin to the point where the plot crosses the negative real axis, measured from the critical point $(-1, 0)$. If the plot crosses the negative real axis at $-a$, then $GM = 1/a$.
*   **Phase Margin (PM):** The angle between the negative real axis and the vector from the origin to the point where $|L(j\omega)| = 1$.
    *   The PM can be found by locating the point on the Nyquist plot where the magnitude is 1. If this point has a phase angle $\phi$, then $PM = 180^\circ + \phi$.

**Handling Poles on the Imaginary Axis (from Kuo & Golnaraghi, Chapter 7):**

*   If $L(s)$ has $k$ simple poles on the $j\omega$ axis, the Nyquist path must indent around them. For poles at the origin ($s=0$), the path is a semi-circle of radius $\epsilon \to 0$. For poles at $j\omega_0$, the path is a semi-circle of radius $\epsilon \to 0$ around $j\omega_0$.
*   The segment of the Nyquist path around a pole at $s=0$ maps to a large semi-circle in the L-plane. The direction of this semi-circle depends on the system.
*   The number of encirclements ($N$) must be calculated considering the direction of these mapped arcs.

**Example (from Nise, Chapter 5):**
Consider $L(s) = \frac{K}{s(s+1)}$.
$P = 0$ (no poles in RHP).
We need $N=0$ for stability.
Nyquist plot:
*   $\omega \to 0$: $L(j\omega) \to \infty \angle -90^\circ$.
*   $\omega \to \infty$: $L(j\omega) \to 0 \angle -180^\circ$.
*   For $s=0$, we must indent with a semi-circle of radius $\epsilon \to 0$. This maps to a large semi-circle in the L-plane.
    *   Let $s = \epsilon e^{j\theta}$, where $\theta$ goes from $90^\circ$ to $-90^\circ$.
    *   $L(s) = \frac{K}{\epsilon e^{j\theta}(\epsilon e^{j\theta} + 1)} \approx \frac{K}{\epsilon e^{j\theta}}$ for small $\epsilon$.
    *   $L(s) \approx \frac{K}{\epsilon} e^{-j\theta}$.
    *   As $\theta$ goes from $90^\circ$ to $-90^\circ$, $-j\theta$ goes from $-90^\circ$ to $90^\circ$. This maps to a large semi-circle in the second and third quadrants.
*   The Nyquist plot crosses the negative real axis when $\angle L(j\omega) = -180^\circ$.
    *   $\angle L(j\omega) = \angle \frac{K}{j\omega(j\omega+1)} = -90^\circ - \arctan(\omega) = -180^\circ$.
    *   $\arctan(\omega) = 90^\circ$, so $\omega \to \infty$. This means the Nyquist plot approaches the origin along the negative real axis as $\omega \to \infty$.
*   For $P=0$, we need $N=0$. This means the Nyquist plot should not encircle $(-1, 0)$. This is always true for this system because the plot starts from infinity and goes to zero, and the semi-circle at the origin is in the second/third quadrants.

**What if $L(s) = \frac{K}{(s+1)(s+2)}$?**
$P=0$. $N=0$ for stability.
*   $\omega=0$: $|L(j0)| = K/2$. $\angle L(j0) = 0^\circ$.
*   $\omega \to \infty$: $|L(j\omega)| \to 0$. $\angle L(j\omega) \to -180^\circ$.
*   The plot starts at $K/2$ on the real axis and goes to $0$ along the negative real axis.
*   For stability ($Z=0$), we need $N=P=0$. This is satisfied.
*   Gain crossover frequency ($\omega_{gc}$): $|L(j\omega)| = 1$. $\frac{K}{\sqrt{\omega^2+1}\sqrt{\omega^2+4}} = 1$.
*   Phase crossover frequency ($\omega_{pc}$): $\angle L(j\omega) = -180^\circ$. This occurs at $\omega \to \infty$.
*   Gain Margin: The Nyquist plot never crosses the negative real axis unless $K$ is large enough to shift it left. For $K>0$, the plot stays in the first and fourth quadrants and approaches the negative real axis from $0^\circ$ phase shift at $\omega=0$ to $-180^\circ$ phase shift at $\omega=\infty$.
*   If the plot crosses the negative real axis at $-a$, then $GM = 1/a$. For this system, the plot approaches the negative real axis at the origin, so $a=0$, $GM = \infty$.
*   Phase Margin: Find $\omega$ where $|L(j\omega)| = 1$. If such $\omega_{gc}$ exists, the PM is calculated from $\angle L(j\omega_{gc})$.

**What if $L(s) = \frac{K(s-1)}{(s+1)(s+2)}$?**
This is a non-minimum phase system because of the zero at $s=1$.
$P = 0$.
*   For $s=j\omega$: $L(j\omega) = \frac{K(j\omega-1)}{(j\omega+1)(j\omega+2)}$.
*   $\omega=0$: $L(j0) = \frac{-K}{2}$.
*   $\omega \to \infty$: $L(j\omega) \approx \frac{Kj\omega}{(j\omega)(j\omega)} = \frac{K}{j\omega} \to 0 \angle -90^\circ$.
*   The plot starts at $-K/2$ on the real axis and goes to $0$ at $-90^\circ$.
*   For stability, we need $N=P=0$.
*   If $K>0$, $L(j0) = -K/2$. If $K/2 > 1$, the point $(-1, 0)$ is to the right of the starting point.
*   Consider $K=4$. $L(s) = \frac{4(s-1)}{(s+1)(s+2)}$.
    *   $\omega=0$: $L(j0) = -2$.
    *   $\omega \to \infty$: $L(j\omega) \to 0 \angle -90^\circ$.
    *   The Nyquist plot starts at $-2$ on the real axis and goes to $0$ at $-90^\circ$.
    *   It crosses the negative real axis at $-2$ (at $\omega=0$).
    *   The Nyquist plot does not encircle $(-1, 0)$. So $N=0$.
    *   Since $P=0$, $Z = P - N = 0$. The system is stable for $K=4$.
*   If $K=0.1$, $L(j0) = -0.05$. The plot starts at $-0.05$. It goes to $0 \angle -90^\circ$.
    *   Does it cross the negative real axis? Yes, at $\omega=0$ (since $-0.05$ is on the negative real axis).
    *   The plot will not encircle $(-1, 0)$. $N=0$. Stable.

**Gain and Phase Margins from Nyquist Plot:**

*   **Gain Margin:** The distance from $-1$ on the real axis to the point where the Nyquist plot crosses the negative real axis. If the plot crosses at $-a$, $GM = 1/a$.
*   **Phase Margin:** Find the point where the Nyquist plot crosses the unit circle ($|L(j\omega)|=1$). Let the phase at this point be $\phi$. $PM = 180^\circ + \phi$.

**Important Connection: Bode and Nyquist**
The gain and phase margins obtained from Bode plots are consistent with those obtained from the Nyquist plot, provided the system is minimum phase. The Nyquist criterion is more general.

---

### 4. Practice Questions and Exercises

**Question 1 (Bode Plot):**
For the open-loop transfer function $L(s) = \frac{10}{s(s+2)}$, sketch the Bode magnitude and phase plots. Determine the gain crossover frequency, phase crossover frequency, gain margin, and phase margin. Is the closed-loop system stable?

**Solution 1:**
$L(s) = \frac{10}{s(s+2)}$
$L(j\omega) = \frac{10}{j\omega(j\omega+2)}$
Magnitude: $|L(j\omega)| = \frac{10}{\omega\sqrt{\omega^2+4}}$
Phase: $\angle L(j\omega) = -90^\circ - \arctan(\frac{\omega}{2})$

**Bode Plot Sketch:**
*   **Magnitude Plot:**
    *   For low $\omega$ ($\omega \ll 2$): $|L(j\omega)| \approx \frac{10}{2\omega} = \frac{5}{\omega}$. This is a slope of -20 dB/decade. At $\omega=1$, magnitude is 5 (14 dB).
    *   At $\omega=2$ (corner frequency): Magnitude is $\frac{10}{2\sqrt{4+4}} = \frac{10}{2\sqrt{8}} = \frac{10}{5.65} \approx 1.77$ (5 dB). The slope changes by -20 dB/decade, so it becomes -40 dB/decade.
    *   For high $\omega$ ($\omega \gg 2$): $|L(j\omega)| \approx \frac{10}{\omega^2}$. Slope of -40 dB/decade.
*   **Phase Plot:**
    *   At $\omega \to 0$: $\angle L(j\omega) \to -90^\circ$.
    *   At $\omega=2$: $\angle L(j2) = -90^\circ - \arctan(1) = -90^\circ - 45^\circ = -135^\circ$.
    *   At $\omega \to \infty$: $\angle L(j\omega) \to -90^\circ - 90^\circ = -180^\circ$.

**Stability Analysis:**
*   **Gain Crossover Frequency ($\omega_{gc}$):** $|L(j\omega_{gc})| = 1$.
    $\frac{10}{\omega_{gc}\sqrt{\omega_{gc}^2+4}} = 1$
    $100 = \omega_{gc}^2(\omega_{gc}^2+4)$
    $\omega_{gc}^4 + 4\omega_{gc}^2 - 100 = 0$
    Let $x = \omega_{gc}^2$. $x^2 + 4x - 100 = 0$.
    $x = \frac{-4 \pm \sqrt{16 - 4(1)(-100)}}{2} = \frac{-4 \pm \sqrt{16+400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.4}{2}$
    $x = \frac{16.4}{2} = 8.2$.
    $\omega_{gc}^2 = 8.2 \implies \omega_{gc} \approx 2.86$ rad/s.

*   **Phase Margin (PM):** At $\omega_{gc} \approx 2.86$ rad/s.
    $\phi_{gc} = -90^\circ - \arctan(\frac{2.86}{2}) = -90^\circ - \arctan(1.43) \approx -90^\circ - 55^\circ = -145^\circ$.
    $PM = 180^\circ + \phi_{gc} = 180^\circ - 145^\circ = 35^\circ$.
    Since $PM > 0$, the system is stable.

*   **Phase Crossover Frequency ($\omega_{pc}$):** $\angle L(j\omega_{pc}) = -180^\circ$.
    $-90^\circ - \arctan(\frac{\omega_{pc}}{2}) = -180^\circ$
    $\arctan(\frac{\omega_{pc}}{2}) = 90^\circ$
    This occurs as $\omega_{pc} \to \infty$.

*   **Gain Margin (GM):** At $\omega_{pc} = \infty$, $|L(j\omega)| \to 0$.
    GM = $\frac{1}{|L(j\infty)|} = \frac{1}{0} = \infty$.
    (In dB, GM = $\infty$ dB).

**Answer:** The closed-loop system is stable. $GM = \infty$, $PM = 35^\circ$.

---

**Question 2 (Nyquist Criterion):**
For the open-loop transfer function $L(s) = \frac{K}{s(s+1)(s+2)}$, determine the range of $K$ for which the closed-loop system is stable using the Nyquist criterion.

**Solution 2:**
$L(s) = \frac{K}{s(s+1)(s+2)}$
*   **Poles of $L(s)$:** $s=0$, $s=-1$, $s=-2$.
*   **Number of poles in RHP, $P$:** There is one pole at the origin, which is on the $j\omega$ axis. For stability analysis, we consider poles strictly in the RHP ($\text{Re}(s)>0$). So, $P=0$.
*   For stability, we need $Z=0$, which means $N=P=0$. The Nyquist plot must not encircle $(-1, 0)$.

**Nyquist Plot:**
*   The system has a pole at $s=0$. So, we must indent the Nyquist path with a semi-circle of radius $\epsilon \to 0$ around the origin.
*   The Nyquist path segment $j\omega$ from $0$ to $\infty$ gives the plot for the upper half of the imaginary axis.
    *   $\omega \to 0^+$: $L(j\omega) \approx \frac{K}{j\omega(1)(2)} = \frac{K}{2} \frac{1}{j\omega}$.
        $|L(j\omega)| \to \infty$, $\angle L(j\omega) \to -90^\circ$.
    *   $\omega \to \infty$: $L(j\omega) \approx \frac{K}{(j\omega)^3} = \frac{K}{-j\omega^3}$.
        $|L(j\omega)| \to 0$, $\angle L(j\omega) \to 90^\circ$.
*   The semi-circular detour around $s=0$ (radius $\epsilon \to 0$) from $\theta = 90^\circ$ to $-90^\circ$ maps as follows:
    $s = \epsilon e^{j\theta}$
    $L(s) \approx \frac{K}{\epsilon e^{j\theta}(1)(2)} = \frac{K}{2\epsilon} e^{-j\theta}$.
    As $\theta$ goes from $90^\circ$ to $-90^\circ$, $-j\theta$ goes from $-90^\circ$ to $90^\circ$. This maps to a large semi-circle in the L-plane in the second and third quadrants, starting from infinity $\angle -90^\circ$ and ending at infinity $\angle 90^\circ$.

*   The plot for $\omega$ from $0$ to $\infty$ starts at $\infty \angle -90^\circ$, goes into the second quadrant, crosses the negative real axis, then goes into the third quadrant, and ends at $\infty \angle 90^\circ$.
*   The plot for $\omega$ from $-\infty$ to $0$ is the mirror image of the plot for $\omega$ from $0$ to $\infty$ across the real axis. It starts at $\infty \angle 90^\circ$, goes through the fourth quadrant, crosses the negative real axis, and ends at $\infty \angle -90^\circ$.

**Finding the crossing of the negative real axis:**
$\angle L(j\omega) = -180^\circ$
$-90^\circ - \arctan(\omega/1) - \arctan(\omega/2) = -180^\circ$
$\arctan(\omega) + \arctan(\omega/2) = 90^\circ$
This equation is satisfied as $\omega \to \infty$.
So, the Nyquist plot approaches the origin along the negative real axis as $\omega \to \infty$.

**Encirclements ($N$):**
For $P=0$, we need $N=0$.
The Nyquist plot, as sketched, approaches the origin along the negative real axis and goes to infinity in the second and third quadrants for the upper half plane. The mirror image does the same for the lower half plane.
The critical point $(-1, 0)$ will only be encircled if the plot crosses the negative real axis at some value greater than $-1$.
The magnitude is $|L(j\omega)| = \frac{K}{\omega\sqrt{\omega^2+1}\sqrt{\omega^2+4}}$.
We need to find when $|L(j\omega)| = 1$ for $\angle L(j\omega) = -180^\circ$. This happens as $\omega \to \infty$, where $|L(j\omega)| \to 0$. So, the plot always approaches the origin, not crossing the negative real axis at a value greater than $-1$.

Let's re-examine the phase:
$\angle L(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$
For $\omega \to \infty$, this tends to $-90^\circ - 90^\circ - 90^\circ = -270^\circ$.
My earlier calculation for phase was incorrect for $\omega \to \infty$.
Let's re-evaluate the phase.
$L(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+2)} = \frac{K}{-\omega^2(j\omega+1)} = \frac{-K}{\omega^2(1+j\omega)} = \frac{-K}{\omega^2(1+j\omega)} \frac{1-j\omega}{1-j\omega} = \frac{-K(1-j\omega)}{\omega^2(1+\omega^2)}$
$L(j\omega) = \frac{-K}{\omega^2(1+\omega^2)} + j\frac{K\omega}{\omega^2(1+\omega^2)} = \frac{-K}{\omega^2(1+\omega^2)} + j\frac{K}{\omega(1+\omega^2)}$

The real part is $\frac{-K}{\omega^2(1+\omega^2)}$. The imaginary part is $\frac{K}{\omega(1+\omega^2)}$.

The plot for $j\omega$ from $0$ to $\infty$:
*   $\omega \to 0$: Real part $\to -\infty$, Imaginary part $\to \infty$. Point is in the second quadrant.
*   $\omega \to \infty$: Real part $\to 0$, Imaginary part $\to 0$. Point approaches origin from the second quadrant.

Let's recheck the phase calculation:
$\angle L(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$
$\omega=1$: $-90^\circ - 45^\circ - 26.5^\circ = -161.5^\circ$.
$\omega=2$: $-90^\circ - 63.4^\circ - 45^\circ = -198.4^\circ$.
$\omega \to \infty$: $-90^\circ - 90^\circ - 90^\circ = -270^\circ$.

The phase crosses $-180^\circ$. Let's find that frequency $\omega_{pc}$.
$\arctan(\omega_{pc}) + \arctan(\omega_{pc}/2) = 90^\circ$.
This requires $\omega_{pc} \to \infty$. This is incorrect.

Let's use the formula $\arctan x + \arctan y = \arctan(\frac{x+y}{1-xy})$.
$\arctan(\omega) + \arctan(\omega/2) = \arctan(\frac{\omega + \omega/2}{1 - \omega(\omega/2)}) = \arctan(\frac{3\omega/2}{1 - \omega^2/2})$.
We need $\arctan(\frac{3\omega/2}{1 - \omega^2/2}) = 90^\circ$.
This happens when the argument is $\infty$, which means the denominator $1 - \omega^2/2 = 0$.
$\omega^2/2 = 1 \implies \omega^2 = 2 \implies \omega = \sqrt{2}$.
So, $\omega_{pc} = \sqrt{2}$.

At $\omega = \sqrt{2}$:
$\angle L(j\sqrt{2}) = -90^\circ - \arctan(\sqrt{2}) - \arctan(\sqrt{2}/2)$
$\arctan(\sqrt{2}) \approx 54.7^\circ$
$\arctan(\sqrt{2}/2) \approx 35.3^\circ$
$\angle L(j\sqrt{2}) = -90^\circ - 54.7^\circ - 35.3^\circ = -180^\circ$.
So, $\omega_{pc} = \sqrt{2}$.

Now, calculate the magnitude at $\omega_{pc} = \sqrt{2}$:
$|L(j\sqrt{2})| = \frac{K}{\sqrt{2}(\sqrt{2}^2+1)(\sqrt{2}^2+2)} = \frac{K}{\sqrt{2}(3)(4)} = \frac{K}{12\sqrt{2}}$.

The Nyquist plot crosses the negative real axis at $-|L(j\sqrt{2})|$.
The critical point is $(-1, 0)$.
For stability, we need $N=P=0$. This means the Nyquist plot should not encircle $(-1, 0)$.
The plot starts at infinity and goes to zero. The semi-circle around the origin is in the second/third quadrants.
The critical point is encircled if the crossing of the negative real axis is to the right of $-1$.
This means $|L(j\sqrt{2})|$ should be less than $1$.
$\frac{K}{12\sqrt{2}} < 1 \implies K < 12\sqrt{2}$.

If $K = 12\sqrt{2}$, the Nyquist plot passes through $(-1, 0)$. This makes the system marginally stable.
If $K > 12\sqrt{2}$, the plot crosses the negative real axis at a point less than $-1$, so it encircles $(-1, 0)$ once in the CCW direction. $N=1$.
Since $P=0$, $Z = P - N = 0 - 1 = -1$. This is not possible, indicating instability in a different way.

Let's recheck the direction of encirclement for $K > 12\sqrt{2}$.
$P=0$. If $K > 12\sqrt{2}$, $|L(j\sqrt{2})| > 1$. The Nyquist plot crosses the negative real axis at a value $<-1$.
The Nyquist plot for $\omega$ from $0$ to $\infty$ starts at $\infty \angle -90^\circ$, then goes towards the origin.
At $\omega=\sqrt{2}$, the magnitude is $>1$. The phase is $-180^\circ$. So it crosses the negative real axis at some value $<-1$.
The plot for $\omega$ from $-\infty$ to $0$ is the mirror image. It crosses the negative real axis at the same point (value $<-1$).
The segment around $s=0$ goes from $\infty \angle -90^\circ$ to $\infty \angle 90^\circ$ (mapped to second/third quadrants).
The mirror image goes from $\infty \angle 90^\circ$ to $\infty \angle -90^\circ$ (mapped to fourth/first quadrants).
The critical point $(-1, 0)$ is encircled in the CW direction if $|L(j\omega_{pc})| > 1$.
The convention for $N$ is CCW encirclements.
If $|L(j\omega_{pc})| > 1$, then for the plot from $\omega=0$ to $\infty$, it crosses the negative real axis at $-a$ where $a>1$. So it goes to the left of $-1$. This is a CCW encirclement.
So, if $K > 12\sqrt{2}$, $N=1$ (from the upper half of the Nyquist path).
Then $Z = P - N = 0 - 1 = -1$. This result implies instability. A negative number of RHP poles is not possible.

Let's re-read the criterion: $N$ is the number of CCW encirclements.
If $K > 12\sqrt{2}$, the Nyquist plot crosses the negative real axis at a point $-a$ where $a = \frac{K}{12\sqrt{2}} > 1$. So, it crosses at a point like $-1.5$.
The critical point is $-1$. The plot passes to the left of $-1$.
As $\omega$ goes from $0$ to $\infty$, the plot starts at $\infty \angle -90^\circ$, goes through the second quadrant, crosses the negative real axis at $-a < -1$, then goes to $0 \angle 90^\circ$ through the third quadrant.
This path does encircle $(-1, 0)$ once in the CCW direction. So $N=1$.
$Z = P - N = 0 - 1 = -1$. This indicates the closed-loop system is unstable.

If $K < 12\sqrt{2}$, then $|L(j\omega_{pc})| < 1$. The plot crosses the negative real axis at $-a$ where $a < 1$. This is to the right of $-1$.
The Nyquist path does not encircle $(-1, 0)$. $N=0$.
$Z = P - N = 0 - 0 = 0$. The closed-loop system is stable.

If $K = 12\sqrt{2}$, the plot passes through $(-1, 0)$. Marginally stable.

**Range of $K$ for stability:** $0 < K < 12\sqrt{2}$.

---

### 5. Important Points to Remember

*   **BIBO Stability:** All closed-loop poles must be in the LHP ($\text{Re}(s) < 0$).
*   **Bode Plot:**
    *   Uses open-loop transfer function $L(j\omega)$.
    *   Gain Margin (GM): Positive for stability. Measured at phase crossover frequency ($\omega_{pc}$, where phase is $-180^\circ$).
    *   Phase Margin (PM): Positive for stability. Measured at gain crossover frequency ($\omega_{gc}$, where magnitude is 0 dB or 1).
    *   Assumes minimum-phase systems.
*   **Nyquist Criterion:**
    *   Uses open-loop transfer function $L(j\omega)$.
    *   Relates encirclements of $(-1, 0)$ to closed-loop stability.
    *   Formula: $Z = P - N$
        *   $P$: Number of open-loop poles in RHP.
        *   $Z$: Number of closed-loop poles in RHP (unstable closed-loop poles).
        *   $N$: Number of CCW encirclements of $(-1, 0)$ by the Nyquist plot.
    *   For stability, $Z=0$, which means $N=P$.
    *   Handles non-minimum phase systems and time delays.
    *   Gain and Phase Margins can also be determined from the Nyquist plot.
*   **Non-minimum Phase Systems:** Systems with RHP zeros or poles (or time delays) require careful application of Nyquist criterion. Bode plots alone may be misleading.
*   **Poles on jw-axis:** Requires careful handling of the Nyquist path and the corresponding mapped arcs in the L-plane.

---

### 6. Practice Questions for Self-Assessment

**Question 3:**
A unity feedback system has an open-loop transfer function $L(s) = \frac{K}{s(s+1)}$.
(a) Sketch the Bode magnitude and phase plots for $K=1$.
(b) Determine the gain crossover frequency, phase crossover frequency, gain margin, and phase margin for $K=1$.
(c) Using the Nyquist criterion, find the range of $K$ for which the closed-loop system is stable.

**Question 4:**
Consider a unity feedback system with open-loop transfer function $L(s) = \frac{10(s+2)}{(s-1)(s+3)}$.
(a) Determine the number of RHP poles of $L(s)$.
(b) Sketch the Nyquist plot for $L(s)$.
(c) Using the Nyquist criterion, determine if the closed-loop system is stable.

---

### Answers to Self-Assessment Questions

**Answer 3:**
$L(s) = \frac{K}{s(s+1)}$
$L(j\omega) = \frac{K}{j\omega(j\omega+1)}$

(a) **Bode Plot Sketch (for K=1):**
    *   **Magnitude Plot:**
        *   Low $\omega$: $|L(j\omega)| \approx \frac{1}{\omega}$ (slope -20 dB/decade). At $\omega=1$, magnitude is 1 (0 dB).
        *   Corner frequency $\omega=1$. Slope changes by -20 dB/decade to -40 dB/decade.
        *   High $\omega$: $|L(j\omega)| \approx \frac{1}{\omega^2}$.
    *   **Phase Plot:**
        *   $\omega \to 0$: $-90^\circ$.
        *   $\omega=1$: $-90^\circ - \arctan(1) = -90^\circ - 45^\circ = -135^\circ$.
        *   $\omega \to \infty$: $-180^\circ$.

(b) **Stability Margins (for K=1):**
    *   **Gain Crossover Frequency ($\omega_{gc}$):** $|L(j\omega_{gc})| = 1$. $\frac{1}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1 \implies 1 = \omega_{gc}^2(\omega_{gc}^2+1) \implies \omega_{gc}^4 + \omega_{gc}^2 - 1 = 0$.
        Let $x = \omega_{gc}^2$. $x^2 + x - 1 = 0$. $x = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$.
        $\omega_{gc}^2 = \frac{-1+\sqrt{5}}{2} \approx 0.618$. $\omega_{gc} \approx 0.786$ rad/s.
    *   **Phase Margin (PM):** At $\omega_{gc} \approx 0.786$, $\phi_{gc} = -90^\circ - \arctan(0.786) \approx -90^\circ - 38.17^\circ = -128.17^\circ$.
        $PM = 180^\circ + (-128.17^\circ) = 51.83^\circ$.
    *   **Phase Crossover Frequency ($\omega_{pc}$):** $\angle L(j\omega_{pc}) = -180^\circ$. $-90^\circ - \arctan(\omega_{pc}) = -180^\circ \implies \arctan(\omega_{pc}) = 90^\circ$. $\omega_{pc} \to \infty$.
    *   **Gain Margin (GM):** At $\omega_{pc} = \infty$, $|L(j\infty)| = 0$. $GM = 1/0 = \infty$.

(c) **Range of $K$ for stability (Nyquist):**
    $L(s) = \frac{K}{s(s+1)}$. $P=0$. For stability, need $N=0$.
    The Nyquist plot for $L(j\omega) = \frac{K}{j\omega(j\omega+1)}$.
    $\omega \to 0$: $|L(j\omega)| \to \infty$, $\angle L(j\omega) \to -90^\circ$.
    $\omega \to \infty$: $|L(j\omega)| \to 0$, $\angle L(j\omega) \to -180^\circ$.
    The phase crossover frequency is $\omega_{pc} \to \infty$.
    The magnitude at $\omega_{pc}$ is $0$.
    The Nyquist plot approaches the origin along the negative real axis.
    The plot does not encircle $(-1, 0)$. $N=0$.
    Since $P=0$, $Z=P-N=0$. The system is stable for all $K>0$.
    **Range of $K$ for stability: $K>0$.**

---

**Answer 4:**
$L(s) = \frac{10(s+2)}{(s-1)(s+3)}$. This is a non-minimum phase system due to the pole at $s=1$ in the RHP.

(a) **RHP Poles:** The poles of $L(s)$ are $s=1$ and $s=-3$. There is one pole in the RHP. So, $P=1$.

(b) **Nyquist Plot Sketch:**
    *   The Nyquist path encloses the RHP. The pole at $s=1$ is inside the RHP, so it must be counted for $P$.
    *   For $\omega$ from $0$ to $\infty$:
        *   $\omega=0$: $L(j0) = \frac{10(2)}{(-1)(3)} = \frac{20}{-3} = -6.67$.
        *   $\omega \to \infty$: $L(j\omega) \approx \frac{10j\omega}{(j\omega)(j\omega)} = \frac{10}{j\omega} \to 0 \angle -90^\circ$.
    *   The Nyquist plot starts at $-6.67$ on the real axis and goes to $0 \angle -90^\circ$.
    *   The plot crosses the negative real axis at $-6.67$ (at $\omega=0$).
    *   The plot does not enter the right half of the L-plane.
    *   The plot for $\omega$ from $-\infty$ to $0$ is the mirror image. It starts at $-6.67$ and goes to $0 \angle 90^\circ$.
    *   The critical point is $(-1, 0)$. The Nyquist plot crosses the negative real axis at $-6.67$. This is to the left of $-1$.
    *   The entire Nyquist plot does not encircle $(-1, 0)$ in the CCW direction. So, $N=0$.

(c) **Stability:**
    $P=1$, $N=0$.
    $Z = P - N = 1 - 0 = 1$.
    Since $Z=1$, there is one unstable closed-loop pole.
    **The closed-loop system is unstable.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
