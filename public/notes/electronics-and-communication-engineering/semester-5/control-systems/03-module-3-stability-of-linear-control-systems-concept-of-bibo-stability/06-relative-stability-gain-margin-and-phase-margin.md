---
title: "Relative stability : gain margin and phase margin."
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe95b"
status: "completed"
scrapedAt: "2026-05-23T17:54:45.313Z"
---
# CONTROL SYSTEMS: Module 3 - Stability of Linear Control Systems: Relative Stability

## Topic: Relative Stability: Gain Margin and Phase Margin

### Learning Outcomes:

*   Understand the concept of relative stability and its importance in control systems.
*   Define and explain Gain Margin (GM).
*   Define and explain Phase Margin (PM).
*   Learn methods to determine GM and PM from frequency response plots (Nyquist, Bode, Nichols).
*   Analyze the relationship between GM, PM, and system transient response characteristics.
*   Relate GM and PM to BIBO stability.
*   Apply frequency domain techniques to assess relative stability.

### Course Outcomes Alignment:

*   **CO1: Analyze the systems using transfer function approach (K3)** - While GM and PM are primarily frequency domain concepts, their calculation often starts from the transfer function.
*   **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (K3)** - This topic focuses on relative stability, complementing the absolute stability analysis.
*   **CO4: Apply frequency domain techniques to assess the system stability and to design different compensation techniques (K3)** - This is the core CO for this topic, as GM and PM are key frequency domain metrics for stability assessment.

---

### 1. Introduction to Relative Stability

While absolute stability (BIBO stability) tells us if a system is stable or unstable, **relative stability** quantifies *how close* a system is to becoming unstable. A system with good relative stability can tolerate larger variations in its parameters (gain, time constants) before becoming unstable.

**Importance of Relative Stability:**

*   **Robustness:** A system with good relative stability is less sensitive to parameter variations, noise, and unmodeled dynamics.
*   **Transient Response:** Relative stability is directly related to the damping ratio ($\zeta$) of the dominant closed-loop poles. Higher relative stability generally leads to a more well-behaved transient response (less overshoot, faster settling time).
*   **Design Goal:** Often, engineers aim for a certain level of relative stability to ensure reliable performance.

---

### 2. Frequency Domain Stability Criteria

Frequency response analysis, particularly using Bode plots and Nyquist plots, provides powerful tools for assessing both absolute and relative stability.

**Key Concepts:**

*   **Open-Loop Transfer Function (G(s)H(s)):** The stability of the closed-loop system is assessed based on the frequency response of the open-loop system.
*   **Frequency Response:** For a given sinusoidal input $A\sin(\omega t)$, the output of a linear time-invariant (LTI) system with transfer function $G(s)$ is $B\sin(\omega t + \phi)$, where $B = A|G(j\omega)|$ and $\phi = \angle G(j\omega)$. The frequency response is characterized by the **magnitude response** $|G(j\omega)|$ and the **phase response** $\angle G(j\omega)$.

---

### 3. Gain Margin (GM)

**Definition:**
Gain Margin (GM) is the factor by which the **open-loop gain** can be increased **before the closed-loop system becomes unstable**. It is measured at the **phase crossover frequency** ($\omega_{pc}$), which is the frequency at which the phase of the open-loop transfer function is $-180^\circ$ (or $-\pi$ radians).

**Calculation:**

1.  **Identify the Phase Crossover Frequency ($\omega_{pc}$):** Find the frequency $\omega$ where $\angle G(j\omega) = -180^\circ$.
2.  **Determine the Magnitude at $\omega_{pc}$:** Evaluate $|G(j\omega_{pc})|$.
3.  **Calculate Gain Margin:**
    *   **In terms of absolute gain:** $GM_{abs} = \frac{1}{|G(j\omega_{pc})|}$
    *   **In decibels (dB):** $GM_{dB} = 20 \log_{10}(GM_{abs}) = -20 \log_{10}(|G(j\omega_{pc})|)$

**Interpretation:**

*   A GM of $1$ (or $0$ dB) indicates that the system is marginally stable.
*   A GM greater than $1$ (or positive dB) indicates a stable system.
*   A larger GM signifies greater robustness to gain variations.
*   Typically, a GM of 2 or more (or 6 dB or more) is desired for good relative stability.

**Visualizing on Bode Plot:**

*   Find the frequency $\omega_{pc}$ where the **phase plot** crosses the $-180^\circ$ line.
*   At this $\omega_{pc}$, look at the **magnitude plot**. The GM is the distance from the magnitude curve to the $0$ dB line. If the magnitude is below $0$ dB at $\omega_{pc}$, the system is stable. The GM is the reciprocal of the magnitude in linear scale, or $-(\text{magnitude in dB})$ if the magnitude is negative.

**Example (Conceptual):**

Suppose at $\omega = 2 \text{ rad/s}$, the phase of $G(j\omega)$ is $-180^\circ$. If the magnitude $|G(j2)| = 0.5$, then:
*   $GM_{abs} = \frac{1}{0.5} = 2$.
*   $GM_{dB} = 20 \log_{10}(2) \approx 6.02 \text{ dB}$.
This means the open-loop gain can be doubled before instability.

---

### 4. Phase Margin (PM)

**Definition:**
Phase Margin (PM) is the **additional phase lag** that can be introduced to the open-loop transfer function **before the closed-loop system becomes unstable**. It is measured at the **gain crossover frequency** ($\omega_{gc}$), which is the frequency at which the magnitude of the open-loop transfer function is unity ($|G(j\omega)| = 1$ or $0$ dB).

**Calculation:**

1.  **Identify the Gain Crossover Frequency ($\omega_{gc}$):** Find the frequency $\omega$ where $|G(j\omega)| = 1$ (or $0$ dB).
2.  **Determine the Phase at $\omega_{gc}$:** Evaluate $\angle G(j\omega_{gc})$.
3.  **Calculate Phase Margin:**
    *   $PM = 180^\circ + \angle G(j\omega_{gc})$ (measured in degrees)

**Interpretation:**

*   A PM of $0^\circ$ indicates that the system is marginally stable (at the point of oscillation).
*   A positive PM indicates a stable system.
*   A larger PM signifies better damping and less overshoot in the transient response.
*   Typically, a PM of $30^\circ$ to $60^\circ$ is desired for a good balance between speed and damping. A PM less than $30^\circ$ can lead to excessive overshoot and oscillations.

**Visualizing on Bode Plot:**

*   Find the frequency $\omega_{gc}$ where the **magnitude plot** crosses the $0$ dB line.
*   At this $\omega_{gc}$, look at the **phase plot**. The PM is the vertical distance from the phase curve to the $-180^\circ$ line.

**Example (Conceptual):**

Suppose at $\omega = 5 \text{ rad/s}$, the magnitude of $G(j\omega)$ is $1$ (0 dB). If the phase $\angle G(j5) = -135^\circ$, then:
*   $PM = 180^\circ + (-135^\circ) = 45^\circ$.
This means we can add another $45^\circ$ of phase lag to the open-loop system before it becomes unstable.

---

### 5. Relating Gain Margin and Phase Margin to System Performance

Both GM and PM are indicators of relative stability, but they relate to different aspects of transient and steady-state behavior.

| Metric        | Frequency of Measurement | Stability Reference     | Performance Indicator (Transient Response) |
| :------------ | :----------------------- | :---------------------- | :----------------------------------------- |
| **Gain Margin** | Phase Crossover ($\omega_{pc}$) | $|G(j\omega)|$ at $\omega_{pc}$ | Robustness to gain variations             |
| **Phase Margin** | Gain Crossover ($\omega_{gc}$) | $\angle G(j\omega)$ at $\omega_{gc}$ | Damping, overshoot, oscillation           |

**General Rules of Thumb (from textbooks like Ogata and Kuo):**

*   **Phase Margin:**
    *   $0^\circ < PM < 30^\circ$: Poor relative stability, excessive overshoot, slow oscillations.
    *   $30^\circ \le PM \le 60^\circ$: Good relative stability, acceptable overshoot, well-damped response.
    *   $PM > 60^\circ$: Very good relative stability, potentially sluggish response, low overshoot.
*   **Gain Margin:**
    *   $GM_{abs} > 2$ (or $GM_{dB} > 6$ dB): Good relative stability, robust to gain changes.
    *   $1 < GM_{abs} < 2$ (or $0 < GM_{dB} < 6$ dB): Borderline stability.
    *   $GM_{abs} < 1$ (or $GM_{dB} < 0$ dB): Unstable system.

**Relationship to Damping Ratio ($\zeta$):**
For a dominant second-order system, there's an approximate relationship between PM and $\zeta$:

$PM \approx 100 \cdot \zeta$ (for $\zeta$ between 0 and 1)

*   $PM = 45^\circ \implies \zeta \approx 0.45$ (underdamped, significant overshoot)
*   $PM = 60^\circ \implies \zeta \approx 0.60$ (optimally damped, reasonable overshoot)
*   $PM = 75^\circ \implies \zeta \approx 0.75$ (overdamped, minimal overshoot, slower response)

This relationship is a useful heuristic, especially when designing compensators to meet transient response specifications.

---

### 6. Determining GM and PM from Different Frequency Response Plots

#### 6.1 Bode Plots

This is the most common method.

**Steps:**

1.  **Draw the Bode Plot:** Obtain the open-loop transfer function $G(s)H(s)$, substitute $s=j\omega$, and plot the magnitude $|G(j\omega)|$ and phase $\angle G(j\omega)$ versus $\log(\omega)$.
2.  **Find $\omega_{gc}$:** Locate the frequency where the magnitude plot crosses the $0$ dB line.
3.  **Find PM:** At $\omega_{gc}$, read the phase from the phase plot. $PM = 180^\circ + \angle G(j\omega_{gc})$.
4.  **Find $\omega_{pc}$:** Locate the frequency where the phase plot crosses the $-180^\circ$ line.
5.  **Find GM:** At $\omega_{pc}$, read the magnitude from the magnitude plot. $GM_{dB} = -|G(j\omega_{pc})|_{dB}$ (if magnitude is negative) or $GM_{abs} = 1/|G(j\omega_{pc})|$.

**Example:**
Let $G(s)H(s) = \frac{10}{s(s+1)(s+2)}$.

We need to find $|G(j\omega)|$ and $\angle G(j\omega)$:
$G(j\omega) = \frac{10}{j\omega(j\omega+1)(j\omega+2)}$

*   **Magnitude:** $|G(j\omega)| = \frac{10}{|\omega| |\omega+j1| |\omega+j2|} = \frac{10}{\omega \sqrt{\omega^2+1} \sqrt{\omega^2+4}}$
*   **Phase:** $\angle G(j\omega) = \angle(10) - \angle(j\omega) - \angle(\omega+j1) - \angle(\omega+j2)$
    $\angle G(j\omega) = 0 - 90^\circ - \arctan(\frac{\omega}{1}) - \arctan(\frac{\omega}{2})$

**Finding $\omega_{gc}$:**
Set $|G(j\omega)| = 1$:
$\frac{10}{\omega \sqrt{\omega^2+1} \sqrt{\omega^2+4}} = 1$
This equation is hard to solve analytically. On a Bode plot, we'd look for the intersection with the 0 dB line. Let's assume from a plot that $\omega_{gc} \approx 1.5$ rad/s.
At $\omega = 1.5$:
$\angle G(j1.5) = -90^\circ - \arctan(1.5) - \arctan(1.5/2)$
$\angle G(j1.5) = -90^\circ - 56.3^\circ - 36.9^\circ \approx -183.2^\circ$

Wait, this frequency seems incorrect for $0$ dB. Let's check the phase crossover first.

**Finding $\omega_{pc}$:**
Set $\angle G(j\omega) = -180^\circ$:
$-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$
$\arctan(\omega) + \arctan(\omega/2) = 90^\circ$
This occurs when $\omega \to \infty$. Let's re-evaluate the typical behavior of such a system. The $-90^\circ$ from the $1/s$ term means that the phase will always be below $-90^\circ$. If the other poles add $-90^\circ$ or more, instability can occur.

Let's use a more typical example for GM/PM illustration.
Consider $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$. For stability, the closed-loop characteristic equation is $1 + G(s)H(s) = 0$, so $s(s+1)(s+2) + K = 0$.
$s(s^2+3s+2) + K = 0$
$s^3 + 3s^2 + 2s + K = 0$

Using Routh-Hurwitz:
$s^3 | 1 \quad 2$
$s^2 | 3 \quad K$
$s^1 | \frac{3 \times 2 - 1 \times K}{3} = \frac{6-K}{3} \quad 0$
$s^0 | K \quad 0$

For stability, all coefficients in the first column must be positive.
$1 > 0$
$3 > 0$
$\frac{6-K}{3} > 0 \implies 6-K > 0 \implies K < 6$
$K > 0$
So, the system is stable for $0 < K < 6$.

At $K=6$, the system is marginally stable. This is the point where the Routh criterion fails.
When $K=6$, the $s^1$ row is $0$. The auxiliary equation is $3s^2 + K = 0 \implies 3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
These are the poles of the closed-loop system at the stability limit, indicating sustained oscillations at $\omega = \sqrt{2}$ rad/s.

Now, let's find GM and PM for a stable $K$, say $K=4$.
$G(s)H(s) = \frac{4}{s(s+1)(s+2)}$
$G(j\omega) = \frac{4}{j\omega(j\omega+1)(j\omega+2)}$

*   **Magnitude:** $|G(j\omega)| = \frac{4}{\omega \sqrt{\omega^2+1} \sqrt{\omega^2+4}}$
*   **Phase:** $\angle G(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$

**Find $\omega_{gc}$:** Set $|G(j\omega)| = 1$.
$\frac{4}{\omega \sqrt{\omega^2+1} \sqrt{\omega^2+4}} = 1$
$\frac{16}{\omega^2 (\omega^2+1) (\omega^2+4)} = 1$
Let $x = \omega^2$.
$16 = x(x+1)(x+4)$
$16 = x(x^2+5x+4)$
$16 = x^3+5x^2+4x$
$x^3+5x^2+4x-16 = 0$
By trial and error, $x=1$ is a root: $1^3+5(1)^2+4(1)-16 = 1+5+4-16 = -6 \neq 0$.
Let's try $x=1.something$. If $\omega=1$, $1(1+1)(1+4) = 1(2)(5) = 10$.
If $\omega=2$, $2(2+1)(2+4) = 2(3)(6) = 36$.
So $\omega_{gc}$ is between 1 and 2. Let's approximate $\omega_{gc} \approx 1.4$ rad/s.
$|G(j1.4)| = \frac{4}{1.4 \sqrt{1.4^2+1} \sqrt{1.4^2+4}} = \frac{4}{1.4 \sqrt{1.96+1} \sqrt{1.96+4}} = \frac{4}{1.4 \sqrt{2.96} \sqrt{5.96}} \approx \frac{4}{1.4 \times 1.72 \times 2.44} \approx \frac{4}{5.86} \approx 0.68$. This is not 1.

Let's try solving $x^3+5x^2+4x-16 = 0$ numerically.
If $\omega = 1.4$, $x = 1.96$: $1.96^3 + 5(1.96)^2 + 4(1.96) - 16 = 7.53 + 19.2 + 7.84 - 16 = 18.57$. Still not 0.
Let's try $\omega = 1.2$. $x=1.44$. $1.44^3 + 5(1.44)^2 + 4(1.44) - 16 = 2.98 + 10.37 + 5.76 - 16 = 3.11$.
Let's try $\omega=1.1$. $x=1.21$. $1.21^3 + 5(1.21)^2 + 4(1.21) - 16 = 1.77 + 7.32 + 4.84 - 16 = -2.07$.
So $\omega_{gc}$ is between 1.1 and 1.2. Let's say $\omega_{gc} \approx 1.15$ rad/s.

At $\omega_{gc} = 1.15$ rad/s:
$\angle G(j1.15) = -90^\circ - \arctan(1.15) - \arctan(1.15/2)$
$\angle G(j1.15) = -90^\circ - 48.97^\circ - 29.36^\circ \approx -168.33^\circ$

$PM = 180^\circ + (-168.33^\circ) = 11.67^\circ$. This is very low, indicating poor relative stability.

**Find $\omega_{pc}$:** Set $\angle G(j\omega) = -180^\circ$:
$-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$
$\arctan(\omega) + \arctan(\omega/2) = 90^\circ$
Using the identity $\arctan(a) + \arctan(b) = \arctan(\frac{a+b}{1-ab})$ if $ab < 1$. Here, $a = \omega, b = \omega/2$, so $ab = \omega^2/2$. For $\omega^2/2 < 1$, this identity holds.
$\arctan(\frac{\omega + \omega/2}{1 - \omega^2/2}) = 90^\circ$
$\frac{3\omega/2}{1 - \omega^2/2} \to \infty$
This means $1 - \omega^2/2 \to 0$ or $\omega^2/2 \to 1$, so $\omega^2 \to 2$, which means $\omega \to \sqrt{2} \approx 1.414$ rad/s.
So, $\omega_{pc} = \sqrt{2}$ rad/s.

Now find the magnitude at $\omega_{pc} = \sqrt{2}$:
$|G(j\sqrt{2})| = \frac{4}{\sqrt{2} \sqrt{(\sqrt{2})^2+1} \sqrt{(\sqrt{2})^2+4}}$
$|G(j\sqrt{2})| = \frac{4}{\sqrt{2} \sqrt{2+1} \sqrt{2+4}} = \frac{4}{\sqrt{2} \sqrt{3} \sqrt{6}}$
$|G(j\sqrt{2})| = \frac{4}{\sqrt{2} \sqrt{18}} = \frac{4}{\sqrt{36}} = \frac{4}{6} = \frac{2}{3}$

In dB: $|G(j\sqrt{2})|_{dB} = 20 \log_{10}(2/3) \approx 20 \log_{10}(0.667) \approx -3.52$ dB.

$GM_{dB} = -(-3.52 \text{ dB}) = 3.52$ dB.
$GM_{abs} = 1 / (2/3) = 3/2 = 1.5$.

For $K=4$, we found $PM \approx 11.67^\circ$ and $GM = 1.5$ (3.52 dB). Both are low, confirming poor relative stability. This aligns with the Routh-Hurwitz result that $K=4$ is stable but close to the boundary $K=6$.

#### 6.2 Nyquist Plots

The Nyquist plot graphically shows the frequency response $G(j\omega)$ in the complex plane.

**Steps:**

1.  **Draw the Nyquist Plot:** Plot $G(j\omega)$ for $\omega$ from $0$ to $\infty$. Then, add the plot for $\omega$ from $-\infty$ to $0$ (which is the mirror image of the first plot about the real axis).
2.  **Locate the Point of Intersection with the Negative Real Axis:** Find the point where the Nyquist contour intersects the negative real axis. This is where $\angle G(j\omega) = -180^\circ$. Let this intersection point be $-x$.
3.  **Determine Gain Margin:**
    *   $GM_{abs} = x$
    *   $GM_{dB} = 20 \log_{10}(x)$
    *   The GM is the distance from $-1$ on the negative real axis to the intersection point $-x$. If the point is to the left of $-1$ (i.e., $x > 1$), the system is stable.
4.  **Locate the Point where $|G(j\omega)| = 1$:** Find the point(s) on the Nyquist curve where the magnitude is 1. This occurs on the unit circle.
5.  **Determine Phase Margin:** At the point(s) where $|G(j\omega)| = 1$, measure the angle with respect to the negative real axis. The phase margin is $180^\circ$ plus this angle.
    *   If the intersection with the unit circle occurs at an angle $\theta$, then $PM = 180^\circ + \theta$. For stability, $\theta$ must be greater than $-180^\circ$.

**Example (Conceptual):**
If the Nyquist plot intersects the negative real axis at $-0.5$, then $GM_{abs} = 0.5$ (system is unstable).
If the Nyquist plot intersects the unit circle at an angle of $-135^\circ$, then $PM = 180^\circ + (-135^\circ) = 45^\circ$.

**Important Note on Nyquist Stability Criterion:** GM and PM are often determined from the Bode plot, but the Nyquist plot itself is used for absolute stability. The GM and PM derived from the Nyquist plot are directly related to the distance from the critical point $(-1, 0)$ in the G(s) plane.

#### 6.3 Nichols Charts

Nichols charts are contour plots of constant magnitude and phase of the open-loop transfer function $G(j\omega)H(j\omega)$ on a log-magnitude versus phase plane.

**Steps:**

1.  **Plot the Open-Loop Frequency Response:** For a given $G(s)H(s)$, calculate $|G(j\omega)|_{dB}$ and $\angle G(j\omega)$ for various $\omega$. Plot these points on a Nichols chart.
2.  **Locate Gain Crossover Frequency:** Find the point on the plotted curve where the phase is $0^\circ$ in the GM calculation (this is less direct on Nichols).
3.  **Locate Phase Crossover Frequency:** Find the point on the plotted curve where the phase is $-180^\circ$.
4.  **Determine GM and PM:**
    *   **GM:** Find the point where the phase is $-180^\circ$. Read the corresponding magnitude from the Nichols chart. The GM is the difference between $0$ dB and this magnitude. If the point is at $-180^\circ$ and $M_{dB}$ dB, then $GM_{dB} = -M_{dB}$.
    *   **PM:** Find the point where the magnitude is $0$ dB. Read the corresponding phase from the Nichols chart. The PM is $180^\circ$ plus this phase. If the point is at $0$ dB and $\phi$ degrees, then $PM = 180^\circ + \phi$.

**Example (Conceptual):**
If the Nichols plot passes through the point $(-180^\circ, -5 \text{ dB})$, then $GM_{dB} = -(-5 \text{ dB}) = 5 \text{ dB}$.
If the Nichols plot passes through the point $(-140^\circ, 0 \text{ dB})$, then $PM = 180^\circ + (-140^\circ) = 40^\circ$.

---

### 7. Practice Questions

1.  **Given the open-loop transfer function $G(s)H(s) = \frac{20}{(s+1)(s+5)}$.**
    a) Sketch the Bode plot (magnitude and phase).
    b) Determine the gain crossover frequency ($\omega_{gc}$).
    c) Calculate the phase margin (PM).
    d) Determine the phase crossover frequency ($\omega_{pc}$).
    e) Calculate the gain margin (GM) in dB.
    f) Comment on the relative stability of the system.

2.  **For a stable closed-loop system, its open-loop transfer function has a frequency response with the following properties:**
    *   At $\omega = 2$ rad/s, $|G(j\omega)| = 0.5$ and $\angle G(j\omega) = -150^\circ$.
    *   At $\omega = 4$ rad/s, $|G(j\omega)| = 1$ and $\angle G(j\omega) = -130^\circ$.
    Determine the Gain Margin and Phase Margin.

3.  **A second-order system with open-loop transfer function $G(s)H(s) = \frac{\omega_n^2}{s(s+2\zeta\omega_n)}$ has a desired phase margin of $60^\circ$. If $\omega_n = 10$ rad/s, what should be the value of $\zeta$?** (This question is tricky as $\zeta$ is usually a closed-loop parameter and not directly in the typical open-loop form for GM/PM calculation. It implies finding an open-loop gain $K$ that results in a desired PM, assuming the form $G(s)H(s) = \frac{K}{s(s+a)}$. Let's rephrase.)

    **Revised Question 3:**
    **Consider an open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)}$.**
    a) For what value of $K$ is the system marginally stable?
    b) If $K$ is set to a value that results in a phase margin of $45^\circ$, what is the gain margin?

---

### 8. Answers to Practice Questions

**Answer 1:**
$G(s)H(s) = \frac{20}{(s+1)(s+5)}$
$G(j\omega) = \frac{20}{(j\omega+1)(j\omega+5)}$

*   **Magnitude:** $|G(j\omega)| = \frac{20}{|\omega+j1| |\omega+j5|} = \frac{20}{\sqrt{\omega^2+1} \sqrt{\omega^2+25}}$
    $|G(j\omega)|_{dB} = 20 \log_{10}(20) - 10 \log_{10}(\omega^2+1) - 10 \log_{10}(\omega^2+25)$
    $|G(j\omega)|_{dB} \approx 26 - 10 \log_{10}(\omega^2+1) - 10 \log_{10}(\omega^2+25)$
*   **Phase:** $\angle G(j\omega) = - \arctan(\omega) - \arctan(\omega/5)$

a)  **Bode Plot Sketch:**
    *   Low $\omega$: Magnitude $\approx 26$ dB. Phase $\approx 0^\circ$.
    *   Poles at $\omega=1$ and $\omega=5$. Break points.
    *   At $\omega=1$: Magnitude starts dropping. Phase starts changing.
    *   At $\omega=5$: Magnitude drops faster. Phase changes more rapidly.
    *   High $\omega$: Magnitude slope is $-40$ dB/decade. Phase approaches $-180^\circ$.

b)  **Gain Crossover Frequency ($\omega_{gc}$):** Set $|G(j\omega)|_{dB} = 0$.
    $20 \log_{10}(20) - 10 \log_{10}(\omega^2+1) - 10 \log_{10}(\omega^2+25) = 0$
    $26 - 10 \log_{10}(\omega^2+1) - 10 \log_{10}(\omega^2+25) = 0$
    $2.6 = \log_{10}(\omega^2+1) + \log_{10}(\omega^2+25)$
    $10^{2.6} = (\omega^2+1)(\omega^2+25)$
    $398.1 = (\omega^2+1)(\omega^2+25)$
    Let $x = \omega^2$: $398.1 = (x+1)(x+25) = x^2 + 26x + 25$
    $x^2 + 26x - 373.1 = 0$
    Using quadratic formula: $x = \frac{-26 \pm \sqrt{26^2 - 4(1)(-373.1)}}{2} = \frac{-26 \pm \sqrt{676 + 1492.4}}{2} = \frac{-26 \pm \sqrt{2168.4}}{2}$
    $x = \frac{-26 \pm 46.57}{2}$. Since $x = \omega^2$ must be positive, $x = \frac{20.57}{2} \approx 10.285$.
    $\omega_{gc} = \sqrt{10.285} \approx 3.207$ rad/s.

c)  **Phase Margin (PM):** At $\omega_{gc} \approx 3.207$ rad/s:
    $\angle G(j3.207) = - \arctan(3.207) - \arctan(3.207/5)$
    $\angle G(j3.207) = - \arctan(3.207) - \arctan(0.6414)$
    $\angle G(j3.207) = -72.67^\circ - 32.67^\circ = -105.34^\circ$
    $PM = 180^\circ + (-105.34^\circ) = 74.66^\circ$.

d)  **Phase Crossover Frequency ($\omega_{pc}$):** Set $\angle G(j\omega) = -180^\circ$.
    $- \arctan(\omega) - \arctan(\omega/5) = -180^\circ$
    $\arctan(\omega) + \arctan(\omega/5) = 180^\circ$
    This equation has no solution in the typical range of $\omega$ where the phase is negative. The phase asymptotically approaches $-180^\circ$ as $\omega \to \infty$. This means $\omega_{pc} = \infty$.

    *Correction for $\omega_{pc}$ in standard systems:* If the system has poles and zeros that ultimately lead to a phase of $-180^\circ$ at finite frequency, we would find it. For this system, the phase only approaches $-180^\circ$ as $\omega \to \infty$.

    Let's re-evaluate how GM is defined when $\omega_{pc} = \infty$.
    If $\omega_{pc} = \infty$, we need to consider the magnitude as $\omega \to \infty$.
    $|G(j\omega)|_{\omega \to \infty} \approx \frac{20}{\omega \cdot \omega} = \frac{20}{\omega^2}$. As $\omega \to \infty$, $|G(j\omega)| \to 0$.
    When the magnitude at $\omega_{pc}$ is $0$, the gain margin is infinite.
    This means that no matter how much you increase the gain from its current value, you won't hit the instability point (where magnitude is 1 and phase is -180).

    *Let's check a textbook definition or common practice for $\omega_{pc}=\infty$.*
    Often, GM is evaluated where the phase crosses $-180^\circ$. If it never crosses, the GM is infinite.
    However, a practical definition might be needed if the asymptote is $-180^\circ$.

    Let's assume for the sake of calculation, there was a typo and consider a system that does have a finite $\omega_{pc}$.
    *Example of finite $\omega_{pc}$:* If $G(s)H(s) = \frac{K}{s^2(s+1)}$, then phase is $-180^\circ - \arctan(\omega)$. $\omega_{pc}=0$.

    Let's consider the interpretation of "phase crossover frequency" for this system.
    The phase starts at $0^\circ$ and goes towards $-180^\circ$. It never exactly hits $-180^\circ$ at a finite frequency.

    *Alternative perspective on GM:* GM is the reciprocal of the magnitude at the frequency where the phase is $-180^\circ$.
    If phase $= -180^\circ$ only occurs as $\omega \to \infty$, then we check $|G(j\omega)|$ as $\omega \to \infty$.
    $|G(j\omega)| = \frac{20}{\sqrt{\omega^2+1} \sqrt{\omega^2+25}} \approx \frac{20}{\sqrt{\omega^2} \sqrt{\omega^2}} = \frac{20}{\omega^2}$ for large $\omega$.
    As $\omega \to \infty$, $|G(j\omega)| \to 0$.
    So, $GM_{abs} = 1/0 = \infty$.
    $GM_{dB} = 20 \log_{10}(\infty) = \infty$.

e)  **Gain Margin (GM) in dB:** As calculated above, $GM_{dB} = \infty$.

f)  **Comment on relative stability:** The system has a good phase margin ($74.66^\circ$) and an infinite gain margin. This indicates excellent relative stability. The system is far from instability and can tolerate significant parameter variations.

---

**Answer 2:**
*   At $\omega = 2$ rad/s, $|G(j\omega)| = 0.5$, $\angle G(j\omega) = -150^\circ$.
*   At $\omega = 4$ rad/s, $|G(j\omega)| = 1$, $\angle G(j\omega) = -130^\circ$.

*   **Gain Crossover Frequency ($\omega_{gc}$):** This is the frequency where $|G(j\omega)| = 1$. From the given information, $\omega_{gc} = 4$ rad/s.
    At $\omega_{gc} = 4$ rad/s, the phase is $\angle G(j4) = -130^\circ$.
    $PM = 180^\circ + \angle G(j4) = 180^\circ + (-130^\circ) = 50^\circ$.

*   **Phase Crossover Frequency ($\omega_{pc}$):** This is the frequency where $\angle G(j\omega) = -180^\circ$. From the given information, the phase at $\omega = 2$ rad/s is $-150^\circ$, and at $\omega = 4$ rad/s it is $-130^\circ$. Since the phase is always negative and increasing towards $0^\circ$ as $\omega$ decreases (and further decreasing from $-130^\circ$ as $\omega$ increases), it seems the phase never reaches $-180^\circ$ in the positive frequency range if the system is stable.

    *Re-check typical phase behavior:* For many transfer functions, the phase starts at $0^\circ$ and decreases towards $-n \times 90^\circ$ (where $n$ is the difference between pole and zero orders). If the system is stable, the phase will not reach $-180^\circ$ at a finite frequency *unless* it's a marginally stable system (e.g., poles on $j\omega$ axis).

    Let's assume the question implies that at some frequency $\omega_0$, the phase *would be* $-180^\circ$ if the system were to become unstable. If the phase at $2$ rad/s is $-150^\circ$ and at $4$ rad/s is $-130^\circ$, and the system is stable, it implies the phase is never $-180^\circ$ for $\omega > 0$.

    *Consider the definition:* GM is the factor by which open-loop gain can be increased *before* instability. Instability occurs when phase is $-180^\circ$ and magnitude is 1.
    If the phase never reaches $-180^\circ$, the GM is infinite.

    Let's use the information from $\omega=2$ rad/s for GM. At $\omega=2$, $|G(j2)| = 0.5$.
    This is not the phase crossover frequency.

    **Crucial Point:** Gain Margin is measured at the phase crossover frequency ($\omega_{pc}$ where $\angle G(j\omega) = -180^\circ$). Phase Margin is measured at the gain crossover frequency ($\omega_{gc}$ where $|G(j\omega)| = 0$ dB).

    *   We found $PM = 50^\circ$ at $\omega_{gc} = 4$ rad/s.
    *   We need $\omega_{pc}$ to find GM. The provided data does not explicitly give $\omega_{pc}$.
        If we assume the system has a finite $\omega_{pc}$ and the phase at $\omega = 2$ rad/s is $-150^\circ$ and at $4$ rad/s is $-130^\circ$, this means $\omega_{pc}$ must be greater than $4$ rad/s.
        Let's suppose, hypothetically, that at $\omega = 6$ rad/s, the phase is $-180^\circ$.
        Then $\omega_{pc} = 6$ rad/s. We would need to know the magnitude at $\omega=6$ to find GM.

    **Re-reading the question:** The question states "its open-loop transfer function has a frequency response with the following properties". It does not state that these are the *only* relevant frequencies.

    Let's assume the information about $\omega=2$ rad/s is for determining GM and the information about $\omega=4$ rad/s is for determining PM.
    *   For PM: $\omega_{gc} = 4$ rad/s, $\angle G(j4) = -130^\circ$. $PM = 180^\circ - 130^\circ = 50^\circ$.
    *   For GM: We need $\omega_{pc}$ where $\angle G(j\omega) = -180^\circ$. The phase at $\omega=2$ is $-150^\circ$. This means $\omega_{pc}$ must be greater than $2$. If we assume that the phase at some $\omega_{pc}$ reaches $-180^\circ$, and the magnitude at that frequency is given by the general form of the transfer function, we can find GM. However, we don't have the transfer function.

    **Alternative Interpretation:**
    Perhaps the question is designed to test direct understanding of definitions:
    *   Gain Margin is related to the point where phase is $-180^\circ$. The information at $\omega=2$ rad/s ($|G(j2)|=0.5$, $\angle G(j2)=-150^\circ$) doesn't directly give us $\omega_{pc}$ or the magnitude at $\omega_{pc}$.
    *   Phase Margin is related to the point where magnitude is $0$ dB. The information at $\omega=4$ rad/s ($|G(j4)|=1$, $\angle G(j4)=-130^\circ$) gives us $\omega_{gc}=4$ rad/s. Thus, $PM = 180^\circ + (-130^\circ) = 50^\circ$.

    Let's assume there's a missing piece for GM or a different interpretation.
    If the phase crosses $-180^\circ$ at a frequency $\omega_{pc}$ and the magnitude at that frequency is $|G(j\omega_{pc})|$.
    Then $GM = 1/|G(j\omega_{pc})|$.

    Consider this: If the phase at $\omega=2$ is $-150^\circ$, and $\omega_{pc}$ is some higher frequency, the magnitude at $\omega=2$ is $0.5$. This doesn't help directly for GM.

    **Let's assume a typo in the question and that the given information refers to specific conditions:**
    *   **If $\omega=2$ rad/s was $\omega_{pc}$:** then $\angle G(j2) = -180^\circ$ (but it's given as $-150^\circ$).
    *   **If $\omega=4$ rad/s was $\omega_{gc}$:** then $|G(j4)| = 1$ (given), and $\angle G(j4) = -130^\circ$ (given).
        $PM = 180^\circ + (-130^\circ) = 50^\circ$. This is definite.

    For GM, we need $\omega_{pc}$ where $\angle G(j\omega) = -180^\circ$.
    Let's use the provided information to deduce something about GM.
    At $\omega = 2$, phase is $-150^\circ$. At $\omega = 4$, phase is $-130^\circ$. This suggests that $\omega_{pc}$ must be greater than $4$ rad/s (since phase is becoming less negative).

    *   **If we assume that the phase crossover frequency occurs at a frequency $\omega_{pc}$ where the magnitude is $0.5$ (from the first point):** This is an assumption. If $\omega_{pc}$ occurred where $|G(j\omega_{pc})|=0.5$, then $GM_{abs} = 1/0.5 = 2$, $GM_{dB} = 6.02$ dB. But we don't know if $\omega_{pc}$ is related to $\omega=2$.

    **Most likely intended answer for GM given limited information:**
    If the question implies that the GM is related to the first data point, it might be poorly phrased. If we *assume* that the phase crossover frequency $\omega_{pc}$ is such that the magnitude $|G(j\omega_{pc})| = 0.5$ (from the first data point), then $GM_{abs} = 1/0.5 = 2$, $GM_{dB} = 6.02$ dB. This is a weak assumption.

    **Let's stick to the direct definitions and data provided:**
    *   $PM = 50^\circ$ (calculated from $\omega_{gc}=4$ rad/s).
    *   We cannot determine GM with certainty from the given data as $\omega_{pc}$ is not provided and cannot be uniquely determined. If we *must* provide a GM, and assuming the $-150^\circ$ phase implies $\omega_{pc}$ is somewhere beyond $\omega=2$, we lack the magnitude at that frequency.

    **If we assume the question meant:**
    "At $\omega=2$ rad/s, $|G(j\omega)|$ has a value that determines GM, and at $\omega=4$ rad/s, $|G(j\omega)|=1$ which determines PM."
    Then, for GM, we need the phase to be $-180^\circ$. The phase at $\omega=2$ is $-150^\circ$.
    If, hypothetically, at $\omega = \omega_{pc}$, the phase is $-180^\circ$ and the magnitude is $|G(j\omega_{pc})|$. We only know that $|G(j2)|=0.5$.

    **The most robust answer based on definitions:**
    *   PM = 50 degrees.
    *   GM cannot be determined without knowing the frequency where the phase is $-180^\circ$ and the magnitude at that frequency.

    **However, in a test scenario, they might expect a calculated value from the given points if possible.**
    If we assume the system is such that $\omega_{pc}$ is related to the magnitude of the first point:
    If $|G(j\omega)|=0.5$ at $\omega=2$ and this is *not* $\omega_{gc}$, and $\angle G(j\omega)=-150^\circ$ at $\omega=2$.
    If $|G(j\omega)|=1$ at $\omega=4$ and this *is* $\omega_{gc}$, and $\angle G(j\omega)=-130^\circ$.
    This means $\omega_{pc}$ must occur at a frequency higher than $4$ rad/s for the phase to reach $-180^\circ$.

    **Let's assume the question is from a context where the magnitude value given with the phase that is closest to $-180^\circ$ (but less negative) is used for GM if $\omega_{pc}$ is not explicitly given.** This is a stretch.

    **Final attempt at a sensible answer for GM:**
    The phase is $-150^\circ$ at $\omega=2$. The phase crossover frequency $\omega_{pc}$ is where phase = $-180^\circ$. So $\omega_{pc} > 2$.
    The magnitude at $\omega=2$ is $0.5$.
    If we assume that the magnitude at $\omega_{pc}$ happens to be $0.5$, then $GM = 1/0.5 = 2$ (6.02 dB). This is unlikely to be true unless specific transfer function is given.

    **Given the clarity of PM calculation, and ambiguity for GM, let's state:**
    *   **Phase Margin (PM):** $50^\circ$.
    *   **Gain Margin (GM):** Cannot be determined precisely from the given information, as the phase crossover frequency ($\omega_{pc}$, where phase is $-180^\circ$) and the magnitude at that frequency are not provided. If we assume the phase crossover frequency $\omega_{pc}$ occurred where the magnitude was $0.5$ (corresponding to the first data point), then GM would be $2$ (or $6.02$ dB), but this is an unsupported assumption.

---

**Answer 3:**
Consider $G(s)H(s) = \frac{K}{s(s+1)}$.
$G(j\omega) = \frac{K}{j\omega(j\omega+1)}$
$|G(j\omega)| = \frac{K}{\omega \sqrt{\omega^2+1}}$
$\angle G(j\omega) = -90^\circ - \arctan(\omega)$

a)  **Mariginally Stable K:**
    The system is marginally stable when the closed-loop poles are on the $j\omega$ axis, which corresponds to the Nyquist stability criterion encountering the critical point. This happens when the open-loop frequency response $G(j\omega)$ passes through $(-1, j0)$ in the GH plane or when the phase reaches $-180^\circ$ at a finite frequency with a magnitude of 1.

    Find $\omega_{pc}$: Set $\angle G(j\omega) = -180^\circ$.
    $-90^\circ - \arctan(\omega) = -180^\circ$
    $\arctan(\omega) = 90^\circ$
    This occurs as $\omega \to \infty$.

    Let's check the Routh-Hurwitz criterion for $1 + \frac{K}{s(s+1)} = 0$.
    $s^2 + s + K = 0$.
    $s^2 | 1 \quad K$
    $s^1 | 1 \quad 0$
    $s^0 | K \quad 0$
    For stability, $1>0$ and $K>0$. There's no condition from the $s^1$ row.
    The $s^0$ row gives $K>0$.
    The auxiliary equation when the $s^1$ row is zero is $1s^2 + K = 0$.
    $s^2 = -K \implies s = \pm j\sqrt{K}$.
    These are imaginary roots, indicating marginal stability. This occurs when the coefficient of the $s^1$ row becomes zero, which isn't the case here.

    **There seems to be a misunderstanding or typo in the problem setup for $\omega_{pc}=\infty$.**
    For systems with a $1/s$ term, the phase is $-90^\circ$. If there are other poles, the phase will continue to decrease. For the system to have a phase crossover at a finite frequency, it usually needs to have a higher order pole or a zero that shifts the phase.

    Let's consider the possibility that the system is stable for all $K>0$ because the phase never reaches $-180^\circ$ at a finite frequency.

    **Let's reconsider the standard case for GM/PM calculation where finite $\omega_{pc}$ is expected.**
    Suppose $G(s)H(s) = \frac{K}{s(s+a)}$.
    $\angle G(j\omega) = -90^\circ - \arctan(\omega/a)$.
    To get $-180^\circ$: $-90^\circ - \arctan(\omega/a) = -180^\circ \implies \arctan(\omega/a) = 90^\circ \implies \omega \to \infty$.

    **Let's assume a different form that allows finite $\omega_{pc}$:**
    Suppose $G(s)H(s) = \frac{K}{s^2(s+1)}$. Phase is $-180^\circ - \arctan(\omega)$.
    $\omega_{pc} = 0$ (or limit as $\omega \to 0$). Magnitude at $\omega=0$ is $\infty$. GM = 0.

    **Let's assume the problem meant a system where $\omega_{pc}$ is finite and related to the $s+1$ term.**
    Perhaps the problem intended a system like $G(s)H(s) = \frac{K(s+a)}{s(s+b)(s+c)}$ where phase crossover is finite.

    **Let's proceed with the given $G(s)H(s) = \frac{K}{s(s+1)}$ and the standard definitions.**
    For $G(s)H(s) = \frac{K}{s(s+1)}$:
    *   Phase starts at $-90^\circ$ and goes to $-180^\circ$ as $\omega \to \infty$.
    *   Magnitude starts at $\infty$ (for $K>0$) and goes to $0$ as $\omega \to \infty$.
    *   There is a gain crossover $\omega_{gc}$ where $\frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1$.
    *   There is no finite phase crossover frequency $\omega_{pc}$ where $\angle G(j\omega) = -180^\circ$.

    **If $\omega_{pc}$ is infinite, then GM is infinite.**
    $GM_{abs} = \infty$, $GM_{dB} = \infty$.
    This means the system is very robust to gain variations.

    **Now for the Phase Margin:**
    We need to find $\omega_{gc}$ where $|G(j\omega_{gc})|=1$.
    $\frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1 \implies K = \omega_{gc}\sqrt{\omega_{gc}^2+1}$.
    We are asked to find $K$ for a PM of $45^\circ$.
    $PM = 180^\circ + \angle G(j\omega_{gc})$
    $45^\circ = 180^\circ + (-90^\circ - \arctan(\omega_{gc}))$
    $45^\circ = 90^\circ - \arctan(\omega_{gc})$
    $\arctan(\omega_{gc}) = 90^\circ - 45^\circ = 45^\circ$
    $\omega_{gc} = \tan(45^\circ) = 1$.

    Now, find $K$ using $\omega_{gc}=1$:
    $K = 1 \cdot \sqrt{1^2+1} = \sqrt{2}$.

    So, for a PM of $45^\circ$, $K = \sqrt{2}$.

b)  **Gain Margin for $K=\sqrt{2}$:**
    We found that for $G(s)H(s) = \frac{K}{s(s+1)}$, the phase crossover frequency is at $\omega = \infty$.
    Therefore, the Gain Margin is infinite.

    **Alternative interpretation for b) if a finite GM was expected:**
    If the question intended a finite GM, the transfer function structure must be different. For example, if $G(s)H(s) = \frac{K(s+a)}{s(s+b)}$ such that phase crossover is finite.

    **Final Answer for Q3:**
    a) The system $G(s)H(s) = \frac{K}{s(s+1)}$ has a phase crossover frequency at $\omega = \infty$. Therefore, the Gain Margin is infinite for all $K>0$.
    b) To achieve a phase margin of $45^\circ$, the gain crossover frequency is $\omega_{gc} = 1$ rad/s. For this frequency, the required gain is $K = \omega_{gc}\sqrt{\omega_{gc}^2+1} = 1 \cdot \sqrt{1^2+1} = \sqrt{2}$.
    The gain margin for $K=\sqrt{2}$ is infinite, as $\omega_{pc} = \infty$.

---

### 9. Important Points to Remember

*   **Relative Stability:** Quantifies how far a system is from instability.
*   **Gain Margin (GM):** How much the open-loop gain can be increased before instability. Measured at $\omega_{pc}$ (where phase = $-180^\circ$). $GM_{abs} = 1/|G(j\omega_{pc})|$.
*   **Phase Margin (PM):** How much additional phase lag can be introduced before instability. Measured at $\omega_{gc}$ (where magnitude = $1$ or $0$ dB). $PM = 180^\circ + \angle G(j\omega_{gc})$.
*   **Bode Plot:** The primary tool for graphically determining GM and PM.
*   **GM vs. PM:** GM indicates robustness to gain variations, PM indicates damping characteristics (overshoot).
*   **Good relative stability:** Generally, $GM > 6$ dB and $30^\circ < PM < 60^\circ$.
*   **Marginal Stability:** $GM=0$ dB (or $GM_{abs}=1$) and $PM=0^\circ$ occur simultaneously.
*   **For systems with $1/s$ or higher order poles:** Phase may not reach $-180^\circ$ at a finite frequency, leading to infinite GM.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References

*   **Control Systems Engineering** by I.J. Nagarath, M. Gopal (New Age International Publishers, 7th Edition 2022) - Chapters on Frequency Domain Analysis.
*   **Automatic Control Systems** by Benjamin C. Kuo, Farid Golnaraghi, (Wiley, 10th Edition 2017) - Chapters on Frequency Response Analysis and Stability.
*   **Modern Control Engineering** by Katsuhiko Ogata (Pearson, Fifth Edition 2015) - Chapters on Frequency Response Methods.
*   **Nise's Control Systems Engineering** by Norman S. Nise (Wiley India, 8th Edition 2017) - Chapters on Frequency Response Analysis and Stability.

---