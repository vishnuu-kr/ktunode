---
title: "Frequency domain analysis"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c8"
status: "completed"
scrapedAt: "2026-05-23T16:29:44.450Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis

## Topic: Frequency Domain Analysis

### Learning Outcomes:

*   Understand the concept of frequency response.
*   Analyze the relationship between time-domain and frequency-domain characteristics.
*   Utilize Bode plots, Polar plots, and Nyquist plots for system analysis.
*   Determine system stability using frequency-domain techniques.
*   Evaluate system performance using frequency-domain specifications.

### Course Outcomes Alignment:

*   **CO4: Analyze dynamic systems for their performance and stability in frequency domain. (Knowledge Level: K3)** - This module directly addresses this CO by introducing and applying frequency-domain analysis tools.

### Key Concepts and Definitions:

**What is Frequency Domain Analysis?**

Frequency domain analysis is a method of analyzing control systems by examining their response to sinusoidal inputs of varying frequencies. Instead of looking at how the system responds over time (time-domain analysis), we investigate how the system's output amplitude and phase shift change as the frequency of the input sine wave is varied.

*   **Why Frequency Domain?**
    *   **System Identification:** It can be used to identify the parameters of an unknown system.
    *   **Stability Analysis:** It provides powerful graphical tools (Bode plots, Nyquist plots) to determine system stability without needing the closed-loop transfer function.
    *   **Performance Evaluation:** It allows for the assessment of system performance in terms of bandwidth, gain margin, phase margin, and other frequency-related specifications.
    *   **Robustness:** It helps in understanding how well the system will perform in the presence of uncertainties and disturbances.
    *   **Practical Implementation:** Many real-world control systems are designed and tuned based on their frequency response.

*   **Sinusoidal Input:** A sinusoidal input signal is of the form $r(t) = A \sin(\omega t)$.

*   **System Response to Sinusoidal Input:** For a Linear Time-Invariant (LTI) system with a transfer function $G(s)$, when a sinusoidal input $r(t) = A \sin(\omega t)$ is applied, the steady-state output $y_{ss}(t)$ will also be a sinusoid of the same frequency $\omega$, but with a different amplitude and phase shift.
    *   $y_{ss}(t) = B \sin(\omega t + \phi)$
    *   Where $B$ is the output amplitude and $\phi$ is the phase shift.

*   **Frequency Response:** The frequency response of a system $G(s)$ is obtained by replacing $s$ with $j\omega$ (where $j = \sqrt{-1}$).
    *   $G(j\omega) = \text{Magnitude} \times e^{j \times \text{Phase}}$
    *   $G(j\omega) = |G(j\omega)| \angle G(j\omega)$
    *   The magnitude $|G(j\omega)|$ represents the ratio of the output amplitude to the input amplitude ($B/A$).
    *   The phase $\angle G(j\omega)$ represents the phase shift $\phi$ between the output and the input.

*   **Relationship between Time-Domain and Frequency-Domain:**
    *   **Bandwidth:** Corresponds to the range of frequencies the system can effectively pass. A wider bandwidth generally implies a faster response (smaller rise time).
    *   **Damping Ratio ($\zeta$) and Natural Frequency ($\omega_n$):** These time-domain parameters are related to the peak magnitude and resonant frequency in the frequency response.
    *   **Rise Time ($T_r$):** Generally inversely proportional to the bandwidth.

    *(Refer to Nise, Chapter 6 for a detailed discussion on the relationship between time and frequency responses.)*

---

### Graphical Tools for Frequency Domain Analysis:

#### 1. Bode Plots

Bode plots are a pair of graphs that represent the magnitude and phase of the frequency response $G(j\omega)$ as a function of frequency $\omega$.

*   **Magnitude Plot:** Plots $|G(j\omega)|$ in decibels (dB) versus $\log_{10}(\omega)$.
    *   Magnitude in dB: $M_{dB} = 20 \log_{10} |G(j\omega)|$
*   **Phase Plot:** Plots $\angle G(j\omega)$ in degrees versus $\log_{10}(\omega)$.

*   **Construction of Bode Plots (Asymptotic Approximation):**
    Bode plots are typically constructed using straight-line approximations (asymptotes) that are accurate for most systems. The plot is broken down into contributions from individual factors in the transfer function.

    *   **Basic Building Blocks:**
        1.  **Constant Gain ($K$):**
            *   Magnitude: $20 \log_{10} K$ (constant dB value).
            *   Phase: $0^\circ$ (constant).
        2.  **Simple Pole ($1/(s+a)$ or $1/(j\omega+a)$):**
            *   Magnitude: $20 \log_{10} \left| \frac{1}{j\omega+a} \right| = -20 \log_{10} \sqrt{\omega^2 + a^2}$.
                *   At $\omega \ll a$ (low frequencies): Magnitude $\approx -20 \log_{10} a$ (constant).
                *   At $\omega \gg a$ (high frequencies): Magnitude $\approx -20 \log_{10} \omega$ (a line with slope -20 dB/decade).
                *   At $\omega = a$ (corner frequency): Magnitude is $-20 \log_{10} a - 3$ dB (approx. -3 dB from the low-frequency asymptote).
            *   Phase: $\angle \left( \frac{1}{j\omega+a} \right) = -\arctan(\omega/a)$.
                *   At $\omega \ll a$: Phase $\approx 0^\circ$.
                *   At $\omega \gg a$: Phase $\approx -90^\circ$.
                *   At $\omega = a$: Phase is $-45^\circ$.
                *   The phase changes approximately $90^\circ$ over a decade of frequency around the corner frequency $\omega = a$.
        3.  **Simple Zero ($s+a$ or $j\omega+a$):**
            *   Magnitude: $20 \log_{10} |j\omega+a| = 20 \log_{10} \sqrt{\omega^2 + a^2}$.
                *   At $\omega \ll a$: Magnitude $\approx 20 \log_{10} a$ (constant).
                *   At $\omega \gg a$: Magnitude $\approx 20 \log_{10} \omega$ (a line with slope +20 dB/decade).
                *   At $\omega = a$: Magnitude is $20 \log_{10} a + 3$ dB (approx. +3 dB from the low-frequency asymptote).
            *   Phase: $\angle (j\omega+a) = \arctan(\omega/a)$.
                *   At $\omega \ll a$: Phase $\approx 0^\circ$.
                *   At $\omega \gg a$: Phase $\approx +90^\circ$.
                *   At $\omega = a$: Phase is $+45^\circ$.
                *   The phase changes approximately $90^\circ$ over a decade of frequency around the corner frequency $\omega = a$.
        4.  **Quadratic Pole ($1/(s^2 + 2\zeta\omega_n s + \omega_n^2)$ or $1/((j\omega)^2 + 2\zeta\omega_n (j\omega) + \omega_n^2)$):**
            *   For $\zeta \ge 1$ (overdamped): Can be approximated as two simple poles at $\omega_1, \omega_2$.
            *   For $0 < \zeta < 1$ (underdamped): The magnitude and phase plots deviate from the straight-line approximation significantly near $\omega_n$.
                *   Magnitude: At $\omega = \omega_n$, the magnitude can have a peak depending on $\zeta$. The asymptotic value at $\omega_n$ is $20 \log_{10} (1/\omega_n^2) = -40 \log_{10} \omega_n$. The actual value is $-40 \log_{10} \omega_n + 20 \log_{10} (2\zeta)$.
                *   Phase: The phase change is approximately $180^\circ$ over a decade around $\omega_n$. At $\omega = \omega_n$, the phase is $-90^\circ$.
        5.  **Quadratic Zero ($s^2 + 2\zeta\omega_n s + \omega_n^2$):** Similar to quadratic poles, but with opposite slopes and phase contributions.

    *   **Procedure for Sketching Bode Plots:**
        1.  Express the transfer function in the standard form.
        2.  Identify the corner frequencies for all poles and zeros.
        3.  Start with the low-frequency asymptote for the magnitude and phase.
        4.  For each corner frequency, adjust the slope of the magnitude plot and the phase plot according to the pole or zero it corresponds to.
        5.  For quadratic terms, consider the effect of $\zeta$ on the shape of the plot near $\omega_n$.

    *(Refer to Nise, Chapter 6, Section 6.1 and Nagrath & Gopal, Chapter 7, Section 7.2 for detailed Bode plot construction.)*

*   **Example:** Sketch the Bode plot for $G(s) = \frac{10}{s(s+2)}$.

    1.  **Standard Form:** $G(s) = \frac{10}{2s(s/2+1)} = \frac{5}{s(s/2+1)}$.
    2.  **Factors:**
        *   Constant gain $K=5$.
        *   Integrator $1/s$.
        *   Simple pole at $s=-2$ (corner frequency $\omega_c = 2$ rad/s).
    3.  **Low-frequency Asymptote:**
        *   Magnitude: $20 \log_{10} 5 \approx 14$ dB. Slope is -20 dB/decade due to $1/s$.
        *   Phase: $-90^\circ$ due to $1/s$.
    4.  **Corner Frequency at $\omega = 2$ rad/s:**
        *   Magnitude: The slope changes from -20 dB/decade to (-20 - 20) = -40 dB/decade. At $\omega=2$, the magnitude is approximately $14 - 20 \log_{10} 2 \approx 14 - 6 = 8$ dB. The actual value is $20 \log_{10} |5/(j2)| = 20 \log_{10} (5/2) \approx 8$ dB.
        *   Phase: The phase change starts before $\omega=2$ and ends after. At $\omega=2$, the phase contribution from $1/(j\omega+2)$ is $-45^\circ$. Total phase at $\omega=2$ is $-90^\circ - 45^\circ = -135^\circ$.

    *   **Magnitude Plot Sketch:** Starts at 14 dB, slope -20 dB/decade until $\omega=2$, then slope -40 dB/decade.
    *   **Phase Plot Sketch:** Starts at -90°, gradually goes towards -180°, passing through -135° at $\omega=2$.

#### 2. Polar Plots (Nyquist Plots)

A polar plot is a graph of the frequency response $G(j\omega)$ in the complex plane, where the magnitude $|G(j\omega)|$ is plotted against the phase angle $\angle G(j\omega)$ as $\omega$ varies from 0 to $\infty$.

*   **Construction:** For each frequency $\omega$, calculate $G(j\omega)$ and plot the point $(Re(G(j\omega)), Im(G(j\omega)))$.
*   **Frequency Range:** $\omega$ varies from 0 to $\infty$.
*   **Key Points:**
    *   $\omega=0$: $G(j0) = G(0)$ (DC gain).
    *   $\omega=\infty$: $G(j\infty)$.
    *   Points where $|G(j\omega)| = 1$ (unity gain locus).
    *   Points where $\angle G(j\omega) = -180^\circ$ (phase crossover).

*(Refer to Nise, Chapter 6, Section 6.2 and Nagrath & Gopal, Chapter 7, Section 7.3 for Polar plot construction.)*

*   **Example:** Consider a system with $G(s) = \frac{1}{s+1}$.
    *   $G(j\omega) = \frac{1}{j\omega+1}$
    *   $|G(j\omega)| = \frac{1}{\sqrt{\omega^2+1}}$
    *   $\angle G(j\omega) = -\arctan(\omega)$
    *   As $\omega \to 0$: $G(j0) = 1$, $\angle G(j0) = 0^\circ$. Plot starts at (1, 0).
    *   As $\omega \to \infty$: $|G(j\infty)| \to 0$, $\angle G(j\infty) \to -90^\circ$. Plot ends at (0, 0) approaching from the negative imaginary axis.
    *   The plot is a semicircle in the first and fourth quadrants of the complex plane.

#### 3. Nyquist Plots and Nyquist Stability Criterion

The Nyquist plot is a special case of the polar plot that includes the frequency range from $-\infty$ to $\infty$. This is achieved by plotting $G(j\omega)$ for $\omega \in [0, \infty)$ and then reflecting the entire plot about the real axis to represent the response for $\omega \in (-\infty, 0)$.

*   **Nyquist Criterion:** A fundamental tool for determining the stability of a closed-loop system $T(s) = \frac{G(s)}{1+G(s)}$ based on the open-loop transfer function $G(s)$ (assuming unity feedback).
    *   The Nyquist locus of $G(s)$ is plotted for $\omega$ from $-\infty$ to $\infty$.
    *   The Nyquist criterion relates the number of encirclements of the point $(-1, 0)$ in the $G(j\omega)$ plane to the number of roots of the characteristic equation $1+G(s) = 0$ in the right-half of the s-plane (RHP).

*   **Encirclements:** Let $P$ be the number of RHP poles of the open-loop transfer function $G(s)$. Let $N$ be the number of counter-clockwise (CCW) encirclements of the point $(-1, 0)$ by the Nyquist locus. The number of RHP zeros of $1+G(s)$ (which are the RHP poles of the closed-loop system) is $Z = P - N$.

*   **Stability Condition:** For a stable closed-loop system, $Z$ must be 0. Therefore, $P = N$.

    *   If $G(s)$ has no poles in the RHP ($P=0$), then for stability, the Nyquist locus must not encircle the point $(-1, 0)$ (i.e., $N=0$).

*   **Construction of Nyquist Locus:**
    1.  Find the open-loop transfer function $G(s)$.
    2.  Determine the poles of $G(s)$ and calculate $P$ (number of RHP poles).
    3.  Plot $G(j\omega)$ for $\omega$ from $0$ to $\infty$.
    4.  Reflect the plot for $\omega \in [0, \infty)$ about the real axis to get the locus for $\omega \in (-\infty, 0]$.
    5.  If $G(s)$ has poles at the origin or on the imaginary axis, special consideration is needed with semi-circular arcs.
    6.  Encircle the point $(-1, 0)$ with a vector originating from it. Count the number of CCW encirclements ($N$).
    7.  Calculate $Z = P - N$. If $Z = 0$, the closed-loop system is stable.

*(Refer to Nise, Chapter 6, Section 6.3 and Nagrath & Gopal, Chapter 7, Section 7.4 for Nyquist stability criterion.)*

---

### Stability Analysis in Frequency Domain:

#### 1. Gain Margin (GM) and Phase Margin (PM)

These are key indicators of relative stability, derived from Bode plots.

*   **Gain Margin (GM):** The amount of gain that can be added to the system before it becomes unstable.
    *   **Definition:** The reciprocal of the magnitude of $G(j\omega)$ at the phase crossover frequency ($\omega_{pc}$), where $\angle G(j\omega_{pc}) = -180^\circ$.
    *   **Calculation:** $GM = \frac{1}{|G(j\omega_{pc})|}$. In dB, $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})|$.
    *   **From Bode Plot:** Locate the frequency where the phase is $-180^\circ$. At that frequency, read the magnitude (in dB) from the magnitude plot. The gain margin is the negative of this value. A positive GM (in dB) indicates stability.

*   **Phase Margin (PM):** The amount of additional phase lag that can be added to the system before it becomes unstable.
    *   **Definition:** The difference between $-180^\circ$ and the phase angle of $G(j\omega)$ at the gain crossover frequency ($\omega_{gc}$), where $|G(j\omega_{gc})| = 1$ (or 0 dB).
    *   **Calculation:** $PM = 180^\circ + \angle G(j\omega_{gc})$.
    *   **From Bode Plot:** Locate the frequency where the magnitude is 0 dB (unity gain). At that frequency, read the phase from the phase plot. The phase margin is $180^\circ$ plus this phase value. A positive PM indicates stability.

*   **Interpretation:**
    *   Larger GM and PM generally indicate a more stable and robust system.
    *   Typical desirable values: GM > 6 dB, PM > 45°.

*(Refer to Nise, Chapter 6, Section 6.1 and Nagrath & Gopal, Chapter 7, Section 7.2 for GM and PM.)*

#### 2. Stability using Polar Plots

*   **Condition:** For a unity feedback system with open-loop transfer function $G(s)$, the closed-loop system is stable if the polar plot of $G(j\omega)$ does not encircle the point $(-1, 0)$ when the open-loop system has no RHP poles ($P=0$). If $G(s)$ has $P$ RHP poles, the plot must encircle $(-1, 0)$ $P$ times in the CCW direction.

#### 3. Stability using Nyquist Plots

The Nyquist stability criterion, as explained earlier, is the definitive frequency-domain method for stability analysis.

---

### Performance Analysis in Frequency Domain:

Frequency-domain specifications provide insights into the transient and steady-state performance of the closed-loop system.

*   **Bandwidth ($\omega_b$):** The range of frequencies over which the system can operate effectively.
    *   **Definition:** The frequency at which the magnitude of the closed-loop transfer function $|T(j\omega)|$ drops to $1/\sqrt{2}$ (approximately -3 dB) of its DC value ($|T(0)|$).
    *   **Relationship to Time-Domain:** A wider bandwidth generally corresponds to a faster response (smaller rise time and settling time).
    *   **Open-loop vs. Closed-loop Bandwidth:** Bandwidth is usually discussed for the *closed-loop* system.

*   **Resonance Peak ($M_p$) and Resonant Frequency ($\omega_r$):**
    *   **Definition:** For a second-order system, the resonance peak $M_p$ is the maximum value of the magnitude of the closed-loop frequency response, and $\omega_r$ is the frequency at which this peak occurs.
    *   **Relation to Damping Ratio ($\zeta$):**
        *   $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$ for $0 < \zeta < 1/\sqrt{2}$
        *   $\omega_r = \omega_n \sqrt{1-2\zeta^2}$ for $0 < \zeta < 1/\sqrt{2}$
        *   If $\zeta \ge 1/\sqrt{2}$, $M_p = 1$ and $\omega_r = 0$ (no peak).
    *   **Interpretation:** A higher $M_p$ indicates a more oscillatory response and poorer damping.

*   **Steady-State Error:** Can be determined from the DC gain ($G(0)$) of the open-loop transfer function.

*(Refer to Nise, Chapter 6, Section 6.4 for performance specifications and Nagrath & Gopal, Chapter 7, Section 7.5 for performance metrics.)*

---

### Practice Questions:

1.  **Bode Plot Sketching:** Sketch the Bode magnitude and phase plots for the following open-loop transfer function: $G(s) = \frac{50(s+1)}{s(s+5)(s+10)}$.
2.  **Gain and Phase Margin:** For the transfer function $G(s) = \frac{10}{s(s+1)(s+2)}$, find the gain crossover frequency, phase crossover frequency, gain margin, and phase margin. Determine if the closed-loop system is stable.
3.  **Nyquist Criterion Application:** Consider a unity feedback system with the open-loop transfer function $G(s) = \frac{K(s+2)}{(s+1)^2}$.
    a.  Sketch the polar plot of $G(j\omega)$ for $\omega \in [0, \infty)$.
    b.  Determine the range of $K$ for which the closed-loop system is stable using the Nyquist criterion. (Note: $G(s)$ has no RHP poles).
4.  **Performance Specification:** A closed-loop system has a frequency response magnitude given by $|T(j\omega)| = \frac{20}{(j\omega)^2 + 4(j\omega) + 20}$. Find the bandwidth of the system.

---

### Answers to Practice Questions:

1.  **Bode Plot Sketching:**
    *   **Standard Form:** $G(s) = \frac{50(s+1)}{s(s+5)(s+10)} = \frac{50 \cdot 1 (s/1+1)}{s \cdot 5(s/5+1) \cdot 10(s/10+1)} = \frac{0.5(s/1+1)}{s(s/5+1)(s/10+1)}$.
    *   **Factors:**
        *   Gain $K = 0.5$ ($20 \log_{10} 0.5 \approx -6$ dB).
        *   Integrator $1/s$ (slope -20 dB/decade, phase -90°).
        *   Zero at $\omega_c = 1$ rad/s (slope starts at +20 dB/decade).
        *   Pole at $\omega_c = 5$ rad/s (slope changes from -20 to -40 dB/decade).
        *   Pole at $\omega_c = 10$ rad/s (slope changes from -40 to -60 dB/decade).
    *   **Sketch:**
        *   **Magnitude:** Starts at -6 dB. Slope changes at $\omega=1$ (to -0 dB/decade), at $\omega=5$ (to -40 dB/decade), and at $\omega=10$ (to -60 dB/decade).
        *   **Phase:** Starts at -90°. Starts changing at $\omega=1$ (towards +90°), at $\omega=5$ (towards -90°), and at $\omega=10$ (towards -90°).

2.  **Gain and Phase Margin:**
    *   $G(s) = \frac{10}{s(s+1)(s+2)}$
    *   $G(j\omega) = \frac{10}{j\omega(j\omega+1)(j\omega+2)}$
    *   $|G(j\omega)| = \frac{10}{\omega \sqrt{\omega^2+1} \sqrt{\omega^2+4}}$
    *   $\angle G(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$

    *   **Phase Crossover Frequency ($\omega_{pc}$):** $\angle G(j\omega_{pc}) = -180^\circ$.
        *   $-90^\circ - \arctan(\omega_{pc}) - \arctan(\omega_{pc}/2) = -180^\circ$
        *   $\arctan(\omega_{pc}) + \arctan(\omega_{pc}/2) = 90^\circ$
        *   This equation doesn't have a finite solution for $\omega_{pc}$ in this form. This indicates the phase never reaches -180° for finite $\omega$. The phase approaches -270° as $\omega \to \infty$.

    *   Let's re-evaluate for stability. The phase goes from -90° (at $\omega=0$) to -270° (as $\omega \to \infty$).
    *   **Gain Crossover Frequency ($\omega_{gc}$):** $|G(j\omega_{gc})| = 1$.
        *   $\frac{10}{\omega_{gc} \sqrt{\omega_{gc}^2+1} \sqrt{\omega_{gc}^2+4}} = 1$
        *   $100 = \omega_{gc}^2 (\omega_{gc}^2+1) (\omega_{gc}^2+4)$
        *   Let $x = \omega_{gc}^2$. $100 = x(x^2+5x+4) = x^3+5x^2+4x$.
        *   By inspection or numerical methods, a solution is $x \approx 2.44$. So, $\omega_{gc} \approx \sqrt{2.44} \approx 1.56$ rad/s.

    *   **Phase at $\omega_{gc} \approx 1.56$ rad/s:**
        *   $\angle G(j1.56) = -90^\circ - \arctan(1.56) - \arctan(1.56/2)$
        *   $\angle G(j1.56) \approx -90^\circ - 57.5^\circ - 37.7^\circ \approx -185.2^\circ$

    *   **Phase Margin (PM):** $PM = 180^\circ + (-185.2^\circ) = -5.2^\circ$.
    *   **Gain Margin (GM):** Since the phase never reaches -180°, we need to check the gain at the frequency where phase is -180°. For this system, the phase asymptotes to -270°. Let's consider the phase crossover point for the "unstable" region. However, the phase at $\omega_{gc}$ is already past -180°.
        *   Let's find the frequency where the phase is exactly -180°. This seems not to happen. The phase starts at -90° and goes towards -270°. It will cross -180° at some frequency $\omega_{pc}$.
        *   Let's assume $\omega_{pc} \approx 1.7$ rad/s (where the phase is close to -180).
        *   $|G(j1.7)| = \frac{10}{1.7 \sqrt{1.7^2+1} \sqrt{1.7^2+4}} \approx \frac{10}{1.7 \cdot 1.93 \cdot 2.36} \approx \frac{10}{7.74} \approx 1.29$.
        *   $GM = 1/1.29 \approx 0.775$. In dB, $GM_{dB} = -20 \log_{10}(1.29) \approx -2.2$ dB.

    *   **Stability:** Since the Phase Margin is negative ($-5.2^\circ$), the closed-loop system is **unstable**.

3.  **Nyquist Criterion Application:**
    *   $G(s) = \frac{K(s+2)}{(s+1)^2}$. This system has no poles in the RHP ($P=0$). For stability, the Nyquist locus must not encircle $(-1,0)$.
    *   $G(j\omega) = \frac{K(j\omega+2)}{(j\omega+1)^2}$
    *   $|G(j\omega)| = \frac{K \sqrt{\omega^2+4}}{\omega^2+1}$
    *   $\angle G(j\omega) = \arctan(\omega/2) - 2 \arctan(\omega)$

    *   **Plotting for $\omega \in [0, \infty)$:**
        *   At $\omega=0$: $G(j0) = K(2)/1^2 = 2K$. This is a point on the real axis.
        *   As $\omega \to \infty$: $|G(j\omega)| \to \frac{K \omega}{\omega^2} \to 0$.
            *   $\angle G(j\infty) = 90^\circ - 2(90^\circ) = 90^\circ - 180^\circ = -90^\circ$.
            *   The plot ends at the origin, approaching from the negative imaginary axis.

    *   **Location of $-1$ point:**
        *   We need to find when $G(j\omega) = -1$.
        *   The imaginary part must be zero: $\arctan(\omega/2) - 2 \arctan(\omega) = 0$.
        *   This occurs only at $\omega=0$.
        *   So, the locus only intersects the real axis at $\omega=0$ and $\omega=\infty$.

    *   **Finding the frequency where the locus passes through the unit circle:** This is not directly needed for stability here, but helps understand the shape.

    *   **Stability:** Since $P=0$, for stability, $N=0$. The locus should not encircle $(-1,0)$.
        *   Let's find the value of $K$ that makes the locus pass through $(-1,0)$.
        *   Imaginary part = 0 at $\omega=0$. Real part is $2K$.
        *   If we need the locus to pass through $(-1,0)$, it must be at $\omega=0$.
        *   Real part of $G(j\omega)$: $Re(G(j\omega)) = \frac{K(2)}{(\omega^2+1)^2} - \frac{K \omega^2 \omega^2}{(\omega^2+1)^2} = \frac{K(2-\omega^2)}{(\omega^2+1)^2}$.
        *   At $\omega=0$, $Re(G(j0)) = 2K$. For stability, we need $2K > -1$.
        *   The critical value of $K$ occurs when the real part at $\omega=0$ is $-1$. $2K = -1 \implies K = -0.5$. This is not physically meaningful for a positive gain $K$.

        *   Let's consider the frequency where the phase is $-180^\circ$. As calculated, the phase at $\omega \to \infty$ is $-90^\circ$. The phase starts at $0^\circ$ and goes towards $-90^\circ$. It will not reach $-180^\circ$.
        *   So, the locus for $\omega \in [0, \infty)$ stays in the first and fourth quadrants.
        *   The reflection for $\omega \in (-\infty, 0)$ will be in the second and third quadrants.
        *   Therefore, the locus never encircles $(-1, 0)$.
        *   This implies that for any positive $K$, the system is stable.

        *   Let's check the phase crossover: $\angle G(j\omega) = -180^\circ$. $\arctan(\omega/2) - 2 \arctan(\omega) = -180^\circ$. This equation has no real solution for $\omega$.

        *   Consider the condition for marginal stability: $-1+j0 = G(j\omega)$.
            *   $|G(j\omega)| = \frac{K \sqrt{\omega^2+4}}{\omega^2+1} = 1$
            *   $\angle G(j\omega) = \arctan(\omega/2) - 2 \arctan(\omega) = -180^\circ$
        *   The phase never reaches $-180^\circ$.

        *   Let's reconsider the phase calculation: $\angle G(j\omega) = \arctan(\omega/2) - 2 \arctan(\omega)$.
            *   $\omega=0 \implies \angle = 0^\circ$.
            *   $\omega=1 \implies \angle = \arctan(0.5) - 2 \arctan(1) \approx 26.5^\circ - 90^\circ = -63.5^\circ$.
            *   $\omega=2 \implies \angle = \arctan(1) - 2 \arctan(2) \approx 45^\circ - 2(63.4^\circ) = 45^\circ - 126.8^\circ = -81.8^\circ$.
            *   As $\omega \to \infty$, phase approaches $-90^\circ$.

        *   This means the locus for $\omega \in [0, \infty)$ is in the first and fourth quadrants. The reflected locus for $\omega \in (-\infty, 0]$ is in the second and third quadrants. The entire Nyquist locus for $\omega \in (-\infty, \infty)$ does not encircle $(-1, 0)$.
        *   Since $P=0$, and $N=0$, the closed-loop system is stable for **all positive values of K**.

4.  **Performance Specification:**
    *   $|T(j\omega)| = \frac{20}{(j\omega)^2 + 4(j\omega) + 20} = \frac{20}{-(\omega^2) + j4\omega + 20} = \frac{20}{(20-\omega^2) + j4\omega}$
    *   $|T(j\omega)| = \frac{20}{\sqrt{(20-\omega^2)^2 + (4\omega)^2}}$
    *   The DC value ($|T(0)|$) is $20/\sqrt{20^2} = 20/20 = 1$.
    *   Bandwidth is the frequency $\omega_b$ where $|T(j\omega_b)| = 1/\sqrt{2}$.
    *   $\frac{20}{\sqrt{(20-\omega_b^2)^2 + (4\omega_b)^2}} = \frac{1}{\sqrt{2}}$
    *   Squaring both sides: $\frac{400}{(20-\omega_b^2)^2 + 16\omega_b^2} = \frac{1}{2}$
    *   $800 = (20-\omega_b^2)^2 + 16\omega_b^2$
    *   $800 = 400 - 40\omega_b^2 + \omega_b^4 + 16\omega_b^2$
    *   $\omega_b^4 - 24\omega_b^2 - 400 = 0$
    *   Let $y = \omega_b^2$. $y^2 - 24y - 400 = 0$.
    *   Using the quadratic formula: $y = \frac{-(-24) \pm \sqrt{(-24)^2 - 4(1)(-400)}}{2(1)} = \frac{24 \pm \sqrt{576 + 1600}}{2} = \frac{24 \pm \sqrt{2176}}{2}$
    *   $y = \frac{24 \pm 46.65}{2}$
    *   Since $\omega_b^2$ must be positive, we take the positive root: $y = \frac{24 + 46.65}{2} = \frac{70.65}{2} \approx 35.325$.
    *   $\omega_b = \sqrt{35.325} \approx 5.94$ rad/s.
    *   **Bandwidth $\omega_b \approx 5.94$ rad/s.**

---

### Important Points to Remember:

*   **Frequency Response $G(j\omega)$:** Represents how a system responds to sinusoidal inputs of different frequencies.
*   **Bode Plots:** Excellent for visualizing magnitude and phase versus frequency and for estimating GM/PM.
*   **Polar Plots:** Graph the frequency response in the complex plane. Useful for visualizing the path of $G(j\omega)$.
*   **Nyquist Plots:** Extend polar plots to negative frequencies and are the basis for the Nyquist Stability Criterion.
*   **Nyquist Stability Criterion:** A powerful graphical method to determine closed-loop stability from open-loop transfer functions. Relates RHP poles of $G(s)$ ($P$) to encirclements of $(-1,0)$ ($N$) to find RHP closed-loop poles ($Z = P-N$).
*   **Gain Margin (GM) & Phase Margin (PM):** Key indicators of relative stability. Positive values indicate stability.
*   **Bandwidth:** Indicates the range of frequencies the system can pass and is related to the system's speed of response.
*   **Resonance Peak ($M_p$):** Indicates the peak amplification in the frequency response and is related to damping.
*   **Frequency Domain is Crucial:** It provides insights not easily obtained from the time domain, especially for stability analysis and understanding system robustness.

---

This module provides the foundational tools for analyzing and understanding control systems in the frequency domain, directly contributing to CO4. The graphical techniques discussed are essential for practical control system design and analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
