---
title: "Concept of gain margin and phase margin-stability analysis. (4 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366cb"
status: "completed"
scrapedAt: "2026-05-23T16:29:49.090Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis

## Topic: Concept of Gain Margin and Phase Margin - Stability Analysis (4 Hours)

---

### Learning Outcomes:

*   Understand the concepts of Gain Margin (GM) and Phase Margin (PM) in frequency domain analysis.
*   Relate GM and PM to the stability of a closed-loop control system.
*   Determine GM and PM from Bode plots and Nyquist plots.
*   Analyze the relative stability of a system using GM and PM.

---

### Course Outcomes Alignment:

This topic primarily contributes to **CO4: Analyze dynamic systems for their performance and stability in the frequency domain.** (Knowledge Level: K3). By understanding GM and PM, students will gain the ability to assess how close a system is to instability and predict its performance in terms of robustness.

---

### Introduction to Frequency Domain Analysis

Frequency domain analysis is a powerful technique for understanding the behavior of control systems, particularly their stability and performance. Instead of analyzing the system's response to time-varying inputs (time-domain analysis), we examine its response to sinusoidal inputs of varying frequencies. This approach provides valuable insights into system characteristics that are often difficult to obtain from the time domain alone.

**Key Idea:** The frequency response of a Linear Time-Invariant (LTI) system to a sinusoidal input is also a sinusoid of the same frequency. However, its amplitude and phase may differ.

---

### Understanding Gain and Phase

When a sinusoidal input, $R(s) = A \sin(\omega t)$, is applied to a stable LTI system with transfer function $G(s)$, the output $Y(s)$ will eventually settle to a steady-state sinusoidal output of the form:

$Y_{ss}(t) = A|G(j\omega)| \sin(\omega t + \angle G(j\omega))$

Here:

*   $|G(j\omega)|$ is the **magnitude** of the system's transfer function at frequency $\omega$. It represents the **gain** of the system at that frequency.
*   $\angle G(j\omega)$ is the **phase shift** introduced by the system at frequency $\omega$.

---

### Stability in the Frequency Domain

While the Nyquist stability criterion is the most fundamental frequency-domain method for determining absolute stability, **Gain Margin (GM)** and **Phase Margin (PM)** provide measures of **relative stability**. They quantify how close the system is to the verge of instability.

A system is considered stable if its closed-loop poles lie in the left half of the s-plane. In the frequency domain, instability arises when the open-loop transfer function, when plotted on a Nyquist or Bode plot, indicates that the system can oscillate indefinitely.

---

### Bode Plots and Stability Margins

Bode plots are graphical representations of the magnitude (in dB) and phase (in degrees) of the open-loop transfer function $G(j\omega)$ as a function of frequency $\omega$. They are invaluable for determining GM and PM.

**Key Concepts for Bode Plots:**

*   **Gain Crossover Frequency ($\omega_{gc}$):** The frequency at which the magnitude of the open-loop transfer function is 0 dB (or unity gain).
*   **Phase Crossover Frequency ($\omega_{pc}$):** The frequency at which the phase of the open-loop transfer function is -180 degrees.

---

#### 1. Phase Margin (PM)

**Definition:** The phase margin is the amount of additional phase lag that can be introduced into the open-loop system before the closed-loop system becomes unstable.

**How to find PM from Bode Plot:**

1.  Locate the **gain crossover frequency ($\omega_{gc}$)**, where the magnitude plot crosses the 0 dB line.
2.  At this frequency $\omega_{gc}$, read the corresponding phase from the phase plot. Let this be $\phi_{gc}$.
3.  The phase margin is calculated as:
    $PM = 180^\circ + \phi_{gc}$
    (Note: $\phi_{gc}$ is typically negative for minimum-phase systems).

**Interpretation:**

*   A positive phase margin indicates a stable closed-loop system.
*   A zero phase margin indicates that the system is marginally stable (oscillatory).
*   A negative phase margin indicates an unstable closed-loop system.

**Relation to Stability:** The phase margin tells us how much we can decrease the system's phase (i.e., increase the phase lag) at the gain crossover frequency before it becomes unstable. If the phase lag reaches -180 degrees at a frequency where the gain is 1 (0 dB), the system will oscillate. The PM is the "safety margin" in phase.

**Example:**

Consider an open-loop transfer function $L(s) = \frac{K}{s(s+1)(s+2)}$. Let's assume for a specific value of $K$, the gain crossover frequency is $\omega_{gc} = 1.5$ rad/sec.
At $\omega = 1.5$:
Phase of $L(j\omega)$ = $-90^\circ - \arctan(\frac{1.5}{1}) - \arctan(\frac{1.5}{2})$
$\phi_{gc} = -90^\circ - 56.3^\circ - 36.87^\circ \approx -183.17^\circ$
$PM = 180^\circ + (-183.17^\circ) = -3.17^\circ$

This suggests the system is unstable for this $K$. If, however, at $\omega_{gc}$, the phase was $\phi_{gc} = -150^\circ$, then $PM = 180^\circ + (-150^\circ) = 30^\circ$, indicating a stable system with a 30-degree phase margin.

**Nise (5th Ed.):** Chapter 6, Section 6.5 - Stability, and Chapter 7, Section 7.4 - Frequency Response Methods. Nise defines Phase Margin as the distance from the point $(-180^\circ, \text{GM})$ to the phase curve at $\omega_{gc}$.

---

#### 2. Gain Margin (GM)

**Definition:** The gain margin is the factor by which the open-loop gain can be increased before the closed-loop system becomes unstable.

**How to find GM from Bode Plot:**

1.  Locate the **phase crossover frequency ($\omega_{pc}$)**, where the phase plot crosses the -180 degree line.
2.  At this frequency $\omega_{pc}$, read the corresponding magnitude from the magnitude plot. Let this be $|L(j\omega_{pc})|$.
3.  The gain margin is expressed in dB and as a magnitude factor.
    *   **Gain Margin in dB (GM$_{\text{dB}}$):** $GM_{dB} = -|L(j\omega_{pc})|_{\text{dB}}$
    *   **Gain Margin as a Factor (GM):** $GM = \frac{1}{|L(j\omega_{pc})|}$

**Important Note:** For a system to have a finite gain margin, the magnitude plot must cross the 0 dB line at a frequency where the phase is greater than -180 degrees. If the phase plot crosses -180 degrees at a frequency where the magnitude is less than 0 dB (or infinity), the gain margin is infinite (or not well-defined in the usual sense, implying stability).

**Interpretation:**

*   A positive gain margin (in dB, i.e., magnitude $< 1$ at $\omega_{pc}$) or a gain margin factor $> 1$ indicates a stable closed-loop system.
*   A zero gain margin (magnitude = 1 or 0 dB at $\omega_{pc}$) indicates marginal stability.
*   A negative gain margin (magnitude $> 1$ or negative dB at $\omega_{pc}$) indicates an unstable closed-loop system.

**Relation to Stability:** The gain margin tells us how much we can increase the system's gain at the phase crossover frequency before it becomes unstable. If the gain reaches a value of 1 (0 dB) at the frequency where the phase lag is -180 degrees, the system will oscillate. The GM is the "safety margin" in gain.

**Example:**

Consider the same open-loop transfer function $L(s) = \frac{K}{s(s+1)(s+2)}$. Let's assume for a specific value of $K$, the phase crossover frequency is $\omega_{pc} = 2$ rad/sec.
At $\omega = 2$:
Phase of $L(j\omega)$ = $-90^\circ - \arctan(\frac{2}{1}) - \arctan(\frac{2}{2})$
Phase = $-90^\circ - 63.43^\circ - 45^\circ = -198.43^\circ$

This scenario means that at $\omega_{pc} = 2$ rad/sec, the phase is already $-198.43^\circ$, which is beyond $-180^\circ$. This indicates that for this $K$, the phase crossover frequency might not be clearly defined in the way needed for a finite GM calculation from a standard Bode plot, or it might imply instability if the gain at any frequency where phase is $-180^\circ$ is greater than 0 dB.

Let's adjust the example. Suppose $L(s) = \frac{K}{s(s+1)}$.
For $K=1$, $L(s) = \frac{1}{s(s+1)}$.
$L(j\omega) = \frac{1}{j\omega(j\omega+1)} = \frac{-1}{\omega^2 + j\omega}$
Magnitude: $|L(j\omega)| = \frac{1}{\omega\sqrt{\omega^2+1}}$
Phase: $\angle L(j\omega) = -90^\circ - \arctan(\omega)$

Gain Crossover Frequency ($\omega_{gc}$): $|L(j\omega)| = 1$
$\frac{1}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1 \implies \omega_{gc}^2(\omega_{gc}^2+1) = 1 \implies \omega_{gc}^4 + \omega_{gc}^2 - 1 = 0$.
Solving the quadratic for $\omega_{gc}^2$: $\omega_{gc}^2 = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$. Since $\omega_{gc}^2 > 0$, $\omega_{gc}^2 = \frac{\sqrt{5}-1}{2} \approx 0.618$.
$\omega_{gc} \approx \sqrt{0.618} \approx 0.786$ rad/sec.
At $\omega_{gc} = 0.786$: Phase = $-90^\circ - \arctan(0.786) = -90^\circ - 38.17^\circ = -128.17^\circ$.
$PM = 180^\circ - 128.17^\circ = 51.83^\circ$.

Phase Crossover Frequency ($\omega_{pc}$): $\angle L(j\omega) = -180^\circ$
$-90^\circ - \arctan(\omega_{pc}) = -180^\circ \implies \arctan(\omega_{pc}) = 90^\circ \implies \omega_{pc} \to \infty$.
This indicates that for $L(s) = \frac{K}{s(s+1)}$, the phase never reaches -180 degrees for finite $\omega$ if $K>0$. This system has an infinite gain margin if the gain crossover occurs before the phase reaches -180 degrees, which is the case here.

Let's use a system with a finite $\omega_{pc}$. Consider $L(s) = \frac{K}{s(s+1)(s+2)}$.
Phase: $\angle L(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$.
Phase Crossover Frequency ($\omega_{pc}$): $-90^\circ - \arctan(\omega_{pc}) - \arctan(\omega_{pc}/2) = -180^\circ$.
$\arctan(\omega_{pc}) + \arctan(\omega_{pc}/2) = 90^\circ$.
This occurs when $\omega_{pc} \to \infty$. Still no finite $\omega_{pc}$ for this specific form.

Let's consider a more general case that might lead to a finite $\omega_{pc}$ for a stable open-loop system with poles in the LHP.
Example from Nise: $G(s)H(s) = \frac{10(s+4)}{s^2(s+1)}$.
Magnitude: $|G(j\omega)H(j\omega)| = \frac{10\sqrt{\omega^2+16}}{\omega^2\sqrt{\omega^2+1}}$
Phase: $\angle G(j\omega)H(j\omega) = \arctan(\omega/4) - 180^\circ - \arctan(\omega)$

Gain Crossover Frequency ($\omega_{gc}$): $|G(j\omega)H(j\omega)| = 1$
$\frac{10\sqrt{\omega_{gc}^2+16}}{\omega_{gc}^2\sqrt{\omega_{gc}^2+1}} = 1$. This equation needs to be solved numerically or graphically. Suppose $\omega_{gc} = 2.45$ rad/sec.
At $\omega_{gc} = 2.45$: Phase = $\arctan(2.45/4) - 180^\circ - \arctan(2.45) = 31.36^\circ - 180^\circ - 67.74^\circ = -116.38^\circ$.
$PM = 180^\circ + (-116.38^\circ) = 63.62^\circ$.

Phase Crossover Frequency ($\omega_{pc}$): $\angle G(j\omega)H(j\omega) = -180^\circ$
$\arctan(\omega_{pc}/4) - 180^\circ - \arctan(\omega_{pc}) = -180^\circ$
$\arctan(\omega_{pc}/4) - \arctan(\omega_{pc}) = 0$
$\arctan(\omega_{pc}/4) = \arctan(\omega_{pc})$
$\omega_{pc}/4 = \omega_{pc} \implies \omega_{pc} = 0$. This is not the phase crossover where the phase *crosses* -180 from above.
The phase starts at -180 degrees due to the $1/s^2$ term.
Let's re-evaluate the phase expression:
Phase = $\arctan(\omega/4) - 90^\circ - 90^\circ - \arctan(\omega)$
At $\omega = 0$: Phase = $0 - 180^\circ - 0 = -180^\circ$.
This implies that for $G(s)H(s) = \frac{10(s+4)}{s^2(s+1)}$, the phase crossover frequency is $\omega_{pc} = 0$.
At $\omega = 0$, the magnitude is $|G(j\omega)H(j\omega)| = \frac{10\sqrt{16}}{0^2\sqrt{1}} = \infty$.
This implies an infinite gain margin for this system.

Let's consider another example that gives finite GM and PM.
$L(s) = \frac{5}{s(s+1)(s+0.5)}$
Phase crossover frequency ($\omega_{pc}$): $-90^\circ - \arctan(\omega) - \arctan(2\omega) = -180^\circ$
$\arctan(\omega) + \arctan(2\omega) = 90^\circ$.
Using $\arctan x + \arctan y = \arctan(\frac{x+y}{1-xy})$, we get:
$\arctan(\frac{\omega+2\omega}{1-\omega(2\omega)}) = 90^\circ$
$\frac{3\omega}{1-2\omega^2}$ must be infinite. This means $1-2\omega^2 = 0$, so $\omega^2 = 1/2$, $\omega_{pc} = 1/\sqrt{2} \approx 0.707$ rad/sec.
At $\omega_{pc} = 0.707$:
Magnitude $|L(j\omega_{pc})| = \frac{5}{0.707\sqrt{0.707^2+1}\sqrt{0.707^2+0.5^2}} = \frac{5}{0.707\sqrt{1.5}\sqrt{0.5+0.25}} = \frac{5}{0.707 \times 1.22 \times \sqrt{0.75}} = \frac{5}{0.707 \times 1.22 \times 0.866} \approx \frac{5}{0.743} \approx 6.73$.
$|L(j\omega_{pc})|_{\text{dB}} = 20 \log_{10}(6.73) \approx 16.57$ dB.
$GM_{dB} = -16.57$ dB.
$GM = 1/6.73 \approx 0.148$.
This result seems counterintuitive for a stable system. Let's re-check the calculation for GM definition.

**Correction on GM Calculation:**
The gain margin is the factor by which the gain can be *increased* at the phase crossover frequency to reach instability. If at $\omega_{pc}$ the magnitude is $|L(j\omega_{pc})|$, instability occurs when the magnitude becomes 1. So, GM factor is $1 / |L(j\omega_{pc})|$.

Let's use the standard example from textbooks.
$G(s)H(s) = \frac{K}{s(s+1)(s+5)}$
Phase crossover frequency ($\omega_{pc}$): $-90^\circ - \arctan(\omega) - \arctan(\omega/5) = -180^\circ$
$\arctan(\omega) + \arctan(\omega/5) = 90^\circ$
$\frac{\omega + \omega/5}{1 - \omega(\omega/5)} = \infty \implies 1 - \omega^2/5 = 0 \implies \omega^2 = 5 \implies \omega_{pc} = \sqrt{5} \approx 2.236$ rad/sec.

At $\omega_{pc} = 2.236$:
Magnitude $|L(j\omega_{pc})| = \frac{K}{2.236\sqrt{2.236^2+1}\sqrt{2.236^2+5^2}} = \frac{K}{2.236\sqrt{5+1}\sqrt{5+25}} = \frac{K}{2.236\sqrt{6}\sqrt{30}} = \frac{K}{2.236 \times 2.45 \times 5.477} = \frac{K}{29.8}$
For stability, the gain at $\omega_{pc}$ must be less than 1.
$GM = \frac{1}{|L(j\omega_{pc})|} = \frac{29.8}{K}$.
For example, if $K=10$: $GM = 29.8/10 = 2.98$.
$GM_{dB} = 20 \log_{10}(2.98) \approx 9.46$ dB.

Gain crossover frequency ($\omega_{gc}$): $|L(j\omega_{gc})| = 1$
$\frac{K}{\omega_{gc}\sqrt{\omega_{gc}^2+1}\sqrt{\omega_{gc}^2+25}} = 1$.
If $K=10$: $\frac{10}{\omega_{gc}\sqrt{\omega_{gc}^2+1}\sqrt{\omega_{gc}^2+25}} = 1$.
Solving this numerically, we find $\omega_{gc} \approx 1.71$ rad/sec.

At $\omega_{gc} = 1.71$:
Phase $\phi_{gc} = -90^\circ - \arctan(1.71) - \arctan(1.71/5)$
$\phi_{gc} = -90^\circ - 59.7^\circ - 18.7^\circ = -168.4^\circ$.
$PM = 180^\circ + (-168.4^\circ) = 11.6^\circ$.

So, for $K=10$, the system has $GM=2.98$ and $PM=11.6^\circ$. These are positive, indicating stability.

**Nise (5th Ed.):** Chapter 7, Section 7.4 - Frequency Response Methods. Nise clearly defines GM as the factor by which the gain can be increased at the phase crossover frequency for stability.

---

### Nyquist Plots and Stability Margins

The Nyquist plot is a polar plot of the open-loop transfer function $L(j\omega)$ as $\omega$ varies from $-\infty$ to $+\infty$. It's a plot of $|L(j\omega)|$ versus $\angle L(j\omega)$.

**Key Concepts for Nyquist Plots:**

*   **The -1+j0 Point:** This is the critical point on the Nyquist plot. If the plot encircles this point, the closed-loop system is unstable.
*   **Gain Crossover Point:** The point on the Nyquist plot where the phase is -180 degrees. The distance from the origin to this point is $|L(j\omega)|$ at $\omega_{gc}$.
*   **Phase Crossover Point:** The point on the Nyquist plot where the magnitude is 1 (or 0 dB). The phase at this point is $\angle L(j\omega)$ at $\omega_{pc}$.

#### 1. Gain Margin (GM) from Nyquist Plot

**How to find GM from Nyquist Plot:**

1.  Locate the point on the Nyquist plot where the phase is $-180^\circ$. Let this point be at a distance $r_1$ from the origin.
2.  The gain margin is the reciprocal of this distance, $GM = 1/r_1$.
    *   If the phase is $-180^\circ$ at the origin (e.g., system has poles at $s=0$), GM is infinite.
    *   If the phase is $-180^\circ$ at a point inside the unit circle (distance $< 1$), then $GM > 1$, indicating stability.
    *   If the phase is $-180^\circ$ at a point outside the unit circle (distance $> 1$), then $GM < 1$, indicating instability.

**Interpretation:** The gain margin is the amount of gain increase (in reciprocal factor) that can be tolerated before the Nyquist curve passes through the -1+j0 point.

#### 2. Phase Margin (PM) from Nyquist Plot

**How to find PM from Nyquist Plot:**

1.  Locate the point on the Nyquist plot where the magnitude is 1 (i.e., where the plot intersects the unit circle). Let the phase at this point be $\phi_1$.
2.  The phase margin is $PM = 180^\circ + \phi_1$.
    *   If the intersection with the unit circle occurs at a phase angle $>-180^\circ$, the system is stable.
    *   If the intersection occurs at $-180^\circ$, the system is marginally stable.
    *   If the intersection occurs at a phase angle $<-180^\circ$, the system is unstable.

**Interpretation:** The phase margin is the additional phase lag (in degrees) required to make the Nyquist curve pass through the -1+j0 point.

**Nise (5th Ed.):** Chapter 6, Section 6.4 - Stability Criterion. Nyquist plot analysis to determine GM and PM.

---

### Stability Analysis using GM and PM

*   **Relative Stability:** GM and PM provide a measure of how close the system is to instability. Larger values of GM and PM generally indicate a more stable system with better damping and less likelihood of oscillation.
*   **Performance:** A common rule of thumb for good transient response is to aim for a phase margin of approximately $30^\circ$ to $60^\circ$.
    *   A smaller PM (e.g., $30^\circ$) suggests some overshoot and damping.
    *   A PM of $60^\circ$ or more might indicate a sluggish system.
    *   A PM less than $30^\circ$ usually implies excessive overshoot and oscillations.
*   **Robustness:** GM and PM are indicators of robustness to modeling errors or variations in system parameters. A system with generous GM and PM is more likely to remain stable if its actual behavior deviates from the mathematical model.

**General Guidelines for Stability:**

*   **For a stable minimum-phase system:**
    *   $PM > 0^\circ$ (typically $30^\circ$ to $60^\circ$ for good performance)
    *   $GM > 0$ dB (or $GM > 1$ as a factor, typically $6$ dB to $12$ dB for good robustness)

*   **If either PM or GM is negative, the closed-loop system is unstable.**
*   **If either PM or GM is zero, the closed-loop system is marginally stable (oscillatory).**

**Important Point:** GM and PM are most meaningful for **minimum-phase systems** (systems with no poles or zeros in the right-half s-plane or on the jw-axis, except possibly simple poles at the origin). For non-minimum-phase systems, the interpretation of GM and PM can be more complex, and the Nyquist criterion is more reliable for absolute stability.

---

### Summary of Key Concepts

*   **Frequency Response:** System's behavior when subjected to sinusoidal inputs.
*   **Bode Plot:** Magnitude (dB) vs. Frequency (log scale) and Phase (degrees) vs. Frequency (log scale).
*   **Nyquist Plot:** Polar plot of $L(j\omega)$ as $\omega$ varies.
*   **Gain Crossover Frequency ($\omega_{gc}$):** Frequency where $|L(j\omega)| = 0$ dB.
*   **Phase Crossover Frequency ($\omega_{pc}$):** Frequency where $\angle L(j\omega) = -180^\circ$.
*   **Phase Margin (PM):** $180^\circ + \angle L(j\omega_{gc})$. Measures how much phase lag can be added before instability.
*   **Gain Margin (GM):** $1 / |L(j\omega_{pc})|$. Measures how much gain can be increased before instability.
*   **Relative Stability:** GM and PM indicate how close a system is to instability.
*   **Performance:** Typical desired PM is $30^\circ-60^\circ$.

---

### Practice Questions and Exercises

1.  **Given the open-loop transfer function $L(s) = \frac{10}{s(s+2)}$.**
    *   a) Sketch the Bode plot for this system.
    *   b) Determine the gain crossover frequency ($\omega_{gc}$).
    *   c) Calculate the phase margin (PM) at $\omega_{gc}$.
    *   d) Determine the phase crossover frequency ($\omega_{pc}$).
    *   e) Calculate the gain margin (GM) at $\omega_{pc}$.
    *   f) Is the closed-loop system stable?

2.  **For a system, the Bode plot shows the gain crossover frequency at 5 rad/sec, and the phase at this frequency is -130 degrees.**
    *   a) What is the phase margin?
    *   b) If the phase crossover frequency occurs at 10 rad/sec, and the magnitude at this frequency is -6 dB, what is the gain margin?
    *   c) Based on these values, comment on the relative stability of the system.

3.  **Consider the open-loop transfer function $L(s) = \frac{K(s+5)}{s^2(s+1)}$.**
    *   a) Find the phase crossover frequency.
    *   b) Determine the gain margin in terms of $K$.
    *   c) For the system to be stable, what is the maximum allowable value of $K$?

4.  **Explain the physical significance of phase margin and gain margin in the context of control system design.**

5.  **How do GM and PM relate to the transient response characteristics (e.g., overshoot, settling time) of a closed-loop system?**

---

### Answers to Practice Questions

**1. $L(s) = \frac{10}{s(s+2)}$**

*   **a) Bode Plot Sketch:**
    *   Magnitude: Starts at +20 dB (for $K=10$), slope of -20 dB/decade due to $1/s$, then changes to -40 dB/decade after the pole at $s=-2$.
    *   Phase: Starts at -90 degrees, remains -90 degrees until near $\omega=2$, then rolls off towards -180 degrees.

*   **b) Gain Crossover Frequency ($\omega_{gc}$):**
    $|L(j\omega)| = \frac{10}{\omega\sqrt{\omega^2+4}}$. We need $\frac{10}{\omega_{gc}\sqrt{\omega_{gc}^2+4}} = 1$.
    $100 = \omega_{gc}^2 (\omega_{gc}^2+4)$
    $\omega_{gc}^4 + 4\omega_{gc}^2 - 100 = 0$.
    Let $x = \omega_{gc}^2$. $x^2 + 4x - 100 = 0$.
    $x = \frac{-4 \pm \sqrt{16 - 4(1)(-100)}}{2} = \frac{-4 \pm \sqrt{16 + 400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.4}{2}$.
    Since $x > 0$, $x = \frac{-4 + 20.4}{2} = \frac{16.4}{2} = 8.2$.
    $\omega_{gc} = \sqrt{8.2} \approx 2.86$ rad/sec.

*   **c) Phase Margin (PM):**
    At $\omega_{gc} = 2.86$:
    Phase $\phi_{gc} = -90^\circ - \arctan(\frac{2.86}{2}) = -90^\circ - \arctan(1.43) = -90^\circ - 55.0^\circ = -145.0^\circ$.
    $PM = 180^\circ + (-145.0^\circ) = 35.0^\circ$.

*   **d) Phase Crossover Frequency ($\omega_{pc}$):**
    Phase $= -90^\circ - \arctan(\omega_{pc}/2) = -180^\circ$.
    $\arctan(\omega_{pc}/2) = 90^\circ$. This implies $\omega_{pc}/2 \to \infty$, so $\omega_{pc} \to \infty$.
    For systems with poles at the origin and no right-half plane zeros, the phase starts at $-90^\circ \times (\text{number of poles at origin})$. If this initial phase is greater than $-180^\circ$, the phase crossover frequency is effectively infinity, meaning the gain margin is infinite.

*   **e) Gain Margin (GM):**
    Since $\omega_{pc} \to \infty$, we check the magnitude as $\omega \to \infty$.
    $|L(j\omega)| = \frac{10}{\omega\sqrt{\omega^2+4}}$. As $\omega \to \infty$, $|L(j\omega)| \to 0$.
    The magnitude never reaches 1 at a frequency where the phase is -180 degrees. Thus, the Gain Margin is infinite.
    *(Note: For systems with poles at the origin, the phase crossover frequency might be 0 or infinity depending on the phase start. If the phase starts at -90 deg for $1/s$, and -180 deg for $1/s^2$, etc. For $1/s$, phase starts at -90. The system with $L(s) = \frac{K}{s(s+a)}$ will have infinite GM if $\frac{K}{a} > 1$. The phase crossover is at infinity.)*

*   **f) Stability:**
    Yes, the closed-loop system is stable because $PM = 35.0^\circ > 0^\circ$ and $GM = \infty$.

**2. Given information:**
    *   a) $PM = 180^\circ + (-130^\circ) = 50^\circ$.
    *   b) Magnitude at $\omega_{pc}$ is -6 dB. GM$_{dB} = -(-6 \text{ dB}) = 6$ dB.
        GM (factor) = $10^{GM_{dB}/20} = 10^{6/20} = 10^{0.3} \approx 1.995$.
    *   c) The system is stable. A PM of $50^\circ$ suggests good damping, and a GM of 6 dB indicates reasonable robustness to gain variations.

**3. $L(s) = \frac{K(s+5)}{s^2(s+1)}$**
    *   a) Phase crossover frequency ($\omega_{pc}$):
        Phase $= 90^\circ + \arctan(\omega_{pc}/5) - 180^\circ - 90^\circ = -180^\circ$.
        $\arctan(\omega_{pc}/5) - 180^\circ = -180^\circ$.
        $\arctan(\omega_{pc}/5) = 0^\circ$.
        $\omega_{pc}/5 = 0 \implies \omega_{pc} = 0$.
        When $\omega_{pc}=0$, $|L(j\omega)| \to \infty$ because of $s^2$ in the denominator.
        This means the system has infinite GM as long as the phase crossover is at $\omega=0$.

    *   b) Gain Margin in terms of $K$:
        As established, GM is infinite for this form of the open-loop transfer function (poles at the origin, no RHP zeros).

    *   c) Maximum allowable value of $K$ for stability:
        For stability, we need the phase margin to be positive. Let's find $\omega_{gc}$.
        $|L(j\omega_{gc})| = \frac{K\sqrt{\omega_{gc}^2+25}}{\omega_{gc}^2\sqrt{\omega_{gc}^2+1}} = 1$.
        Phase at $\omega_{gc}$: $\phi_{gc} = 90^\circ + \arctan(\omega_{gc}/5) - 180^\circ - 90^\circ = \arctan(\omega_{gc}/5) - 180^\circ$.
        $PM = 180^\circ + \phi_{gc} = 180^\circ + (\arctan(\omega_{gc}/5) - 180^\circ) = \arctan(\omega_{gc}/5)$.
        For $PM > 0$, we need $\arctan(\omega_{gc}/5) > 0$, which means $\omega_{gc} > 0$.
        The condition $\omega_{gc} > 0$ is always met if a solution exists for $|L(j\omega_{gc})| = 1$.
        The system is stable for all $K > 0$ as long as the phase margin remains positive. Given the infinite GM and the phase starting at -180 deg (for $1/s^2$), the system is stable for all $K > 0$.

**4. Physical Significance:**
    *   **Phase Margin (PM):** It represents the additional phase lag that can be introduced into the system at the gain crossover frequency before the closed-loop system becomes unstable. A larger PM means the system is further away from the phase condition (-180 degrees) that causes instability at unity gain. It's a measure of how much the system can "afford" to slow down its phase response without becoming unstable.
    *   **Gain Margin (GM):** It represents the factor by which the open-loop gain can be increased at the phase crossover frequency before the closed-loop system becomes unstable. A larger GM means the system can tolerate larger gains without becoming unstable. It's a measure of how much the system can "afford" to have its gain increased without causing oscillations.

**5. Relation to Transient Response:**
    *   **Overshoot:** Both GM and PM are inversely related to the amount of overshoot in the step response. Higher GM and PM generally result in lower overshoot and a more damped response. A system with a PM of $30^\circ$ will have some overshoot, while a system with a PM of $60^\circ$ will have less overshoot.
    *   **Settling Time:** Higher GM and PM can also contribute to a faster settling time, as they indicate a more stable and well-behaved system. However, the relationship is complex and depends on the overall pole locations.
    *   **Damping Ratio ($\zeta$):** For second-order systems, the phase margin is related to the damping ratio. A PM of approximately $30^\circ$ often corresponds to a $\zeta$ of about 0.5, while a PM of $60^\circ$ corresponds to a $\zeta$ of about 1.0 (critically damped).

---

### Important Points to Remember:

*   GM and PM are measures of **relative stability**.
*   They are determined from the **open-loop transfer function**.
*   Bode plots are the most common tool for finding GM and PM graphically.
*   A positive PM and a positive GM (or GM > 1) indicate a **stable closed-loop system**.
*   Larger values of GM and PM generally imply a more **robust and well-damped system**.
*   Typical design specifications often target $30^\circ \le PM \le 60^\circ$ and $GM \ge 6$ dB (or $GM \ge 2$).
*   These margins are most directly interpretable for **minimum-phase systems**.

---

This comprehensive set of notes covers the concept of gain margin and phase margin, their calculation from Bode plots, their significance for stability analysis, and their relation to system performance, aligning with the learning outcomes and course objectives. The provided examples and practice questions are designed to reinforce understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
