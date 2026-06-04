---
title: "1. Plot the i) root locus ii) Bode plot and iii) Nyquist plot and iv) Nichols chart for the given transfer functions and analyse the following:"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677a"
status: "completed"
scrapedAt: "2026-05-23T16:25:24.882Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus & Frequency Domain Techniques

## Topic 1: Plotting and Analysis of Root Locus, Bode Plot, Nyquist Plot, and Nichols Chart for Given Transfer Functions

This module focuses on analyzing the performance of control systems through graphical techniques in both the time and frequency domains. We will explore how to plot and interpret the **Root Locus**, **Bode Plot**, **Nyquist Plot**, and **Nichols Chart** for given transfer functions, and correlate these plots with system performance characteristics.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO 1:** Plot the Root Locus of a closed-loop system for a varying gain parameter.
*   **LO 2:** Analyze the effect of the Root Locus on system stability and transient response.
*   **LO 3:** Plot the Bode plot (magnitude and phase) of a given transfer function.
*   **LO 4:** Determine system stability, transient response characteristics, and steady-state accuracy from the Bode plot.
*   **LO 5:** Plot the Nyquist plot of a given open-loop transfer function.
*   **LO 6:** Apply the Nyquist stability criterion to determine closed-loop stability.
*   **LO 7:** Analyze the transient and steady-state performance from the Nyquist plot.
*   **LO 8:** Plot the Nichols chart for a given open-loop transfer function.
*   **LO 9:** Determine closed-loop system performance specifications (gain margin, phase margin, bandwidth, etc.) from the Nichols chart.
*   **LO 10:** Correlate the information obtained from Root Locus, Bode Plot, Nyquist Plot, and Nichols Chart for a comprehensive system analysis.

### Course Outcomes Alignment:

*   **CO1 (K3):** Identifying and conducting experiments to model a physical system. While this topic focuses on simulation and analysis of *given* transfer functions, understanding these plots is crucial for interpreting experimental data and validating system models. For example, experimental Bode plots are commonly used to characterize system dynamics.
*   **CO2 (K3):** Conducting experiments and determining performance specifications. The graphical techniques taught here directly relate to performance specifications like damping ratio, natural frequency, settling time, rise time, gain margin, and phase margin.
*   **CO3 (K3):** Analyzing a linear continuous time system model using simulation tools. This is the core of this topic. We will use simulation tools to generate these plots and analyze the system's behavior.
*   **CO4 (K5):** Designing suitable controllers/compensators. Understanding the impact of system poles and zeros (from Root Locus) and frequency response characteristics (from Bode, Nyquist, Nichols) is fundamental for designing controllers to meet performance requirements.

---

### 1. Root Locus Plot

The Root Locus technique graphically shows how the closed-loop poles of a system move in the s-plane as a system parameter (typically the gain $K$) is varied from 0 to $\infty$. It provides valuable insights into system stability and transient response.

#### Key Concepts and Definitions:

*   **Open-loop Transfer Function ($G(s)H(s)$):** The transfer function of the system without feedback.
*   **Characteristic Equation:** For a unity feedback system, the characteristic equation is $1 + G(s)H(s) = 0$. The roots of this equation are the closed-loop poles.
*   **Root Locus:** The path traced by the closed-loop poles as the gain $K$ varies from 0 to $\infty$.
*   **Rules for Sketching Root Locus:** A set of systematic rules (detailed in Ogata, Nise, Nagrath & Gopal) to sketch the root locus without explicitly calculating poles for various gain values. These include:
    *   **Number of Loci:** The number of loci is equal to the number of open-loop poles.
    *   **Start and End Points:** Loci start at the open-loop poles (for $K=0$) and end at the open-loop zeros or at infinity (for $K=\infty$).
    *   **Symmetry:** The root locus is symmetric with respect to the real axis.
    *   **Real Axis Segments:** Segments of the real axis are part of the root locus if the number of poles to the right of the segment is odd.
    *   **Asymptotes:** Loci that go to infinity are asymptotic to straight lines passing through the centroid of the poles and zeros.
    *   **Breakaway and Break-in Points:** Points on the real axis where loci leave (breakaway) or enter (break-in) the real axis.
    *   **Imaginary Axis Crossings:** Points where the root locus intersects the imaginary axis, indicating the onset of instability.
    *   **Angle of Departure/Arrival:** The angle at which a locus leaves an open-loop pole or arrives at an open-loop zero.

#### Example:

Consider a unity feedback system with the open-loop transfer function:
$G(s)H(s) = \frac{K}{s(s+2)(s+4)}$

*   **Open-loop poles:** $s=0, s=-2, s=-4$.
*   **Open-loop zeros:** None.
*   **Number of loci:** 3.
*   **Start points ($K=0$):** $0, -2, -4$.
*   **End points ($K=\infty$):** Asymptotes pointing to infinity.
*   **Real axis segments:** From $-2$ to $-\infty$, and from $-4$ to $-\infty$.
*   **Centroid:** $\sigma_a = \frac{(0 - 2 - 4) - (0)}{3} = -2$.
*   **Asymptote angles:** $\theta_a = \frac{(2k+1)180^\circ}{3}$, for $k=0,1,2$. This gives $60^\circ, 180^\circ, 300^\circ$ (or $-60^\circ$).

**(Refer to Ogata, Chapter 6; Nise, Chapter 6; Nagrath & Gopal, Chapter 6 for detailed rules and examples.)**

#### Analysis from Root Locus:

*   **Stability:** The system is stable as long as all closed-loop poles are in the Left-Half Plane (LHP). The value of $K$ for which the locus crosses the imaginary axis is the **critical gain ($K_{crit}$)**.
*   **Transient Response:**
    *   **Damping Ratio ($\zeta$):** Lines of constant damping ratio ($\sigma = -\omega \tan(\phi)$ where $\phi = \cos^{-1}(\zeta)$) can be overlaid on the root locus.
    *   **Natural Frequency ($\omega_n$):** Circles centered at the origin with radius $\omega_n$ can be overlaid.
    *   **Settling Time ($T_s$):** Determined by the real part of the dominant poles ($\sigma$). $T_s \approx \frac{4}{|\text{Re}(p)|}$.
    *   **Rise Time ($T_r$):** Related to $\omega_n$ and $\zeta$.
    *   **Effect of Gain:** Increasing $K$ generally moves the poles further left (improving transient response but potentially causing instability) or towards the imaginary axis.

#### Practice Question 1:

For the system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+3)}$, sketch the root locus and determine the range of $K$ for which the system is stable.

**Answer:**

*   Open-loop poles: $s=0, s=-1, s=-3$.
*   Number of loci: 3.
*   Centroid: $\sigma_a = \frac{0 - 1 - 3}{3} = -\frac{4}{3}$.
*   Asymptote angles: $60^\circ, 180^\circ, 300^\circ$.
*   Real axis segments: From $-1$ to $-\infty$, and from $-3$ to $-\infty$.
*   To find imaginary axis crossing: Characteristic equation: $1 + \frac{K}{s(s+1)(s+3)} = 0 \implies s^3 + 4s^2 + 3s + K = 0$. Using Routh-Hurwitz criterion, for stability, $K>0$. The first row of the Routh array will have terms involving $K$. The auxiliary equation will yield the poles on the imaginary axis.
    *   Characteristic equation: $s^3 + 4s^2 + 3s + K = 0$.
    *   Routh Array:
        | $s^3$ | 1   | 3   |
        | $s^2$ | 4   | K   |
        | $s^1$ | $\frac{12-K}{4}$ | 0   |
        | $s^0$ | K   | 0   |
    *   For stability, all entries must be positive. Thus, $\frac{12-K}{4} > 0 \implies K < 12$.
    *   Therefore, the range of $K$ for stability is $0 < K < 12$.

---

### 2. Bode Plot

The Bode plot is a frequency response plot that shows the magnitude and phase of a system's transfer function as a function of frequency. It's a powerful tool for analyzing stability and transient response in the frequency domain.

#### Key Concepts and Definitions:

*   **Frequency Response:** The steady-state response of a system to a sinusoidal input.
*   **Magnitude Plot:** Plots the magnitude of the frequency response $|G(j\omega)|$ in decibels (dB) versus frequency ($\omega$) on a logarithmic scale.
    *   Magnitude in dB: $20 \log_{10}|G(j\omega)|$.
*   **Phase Plot:** Plots the phase angle of the frequency response $\angle G(j\omega)$ in degrees versus frequency ($\omega$) on a logarithmic scale.
*   **Bode Plot Components:**
    *   **Gain Term ($K$):** A constant magnitude contribution ($20 \log_{10} K$) and $0^\circ$ phase shift.
    *   **Poles/Zeros at Origin ($s^n$):** For poles ($n>0$), magnitude decreases by $20n$ dB/decade, phase decreases by $90n^\circ$. For zeros ($n<0$), magnitude increases by $20|n|$ dB/decade, phase increases by $90|n|^\circ$.
    *   **Simple Pole/Zero ($1/(s+a)$ or $(s+a)$):** At the corner frequency $\omega = a$.
        *   Magnitude: Flat below $\omega=a$, then decreases/increases by 20 dB/decade. Asymptotically approaches $-90^\circ$ phase lag for a pole, $+90^\circ$ phase lead for a zero.
        *   Phase: Varies from $0^\circ$ to $-90^\circ$ (for pole) or $0^\circ$ to $+90^\circ$ (for zero) over a decade centered at $\omega=a$.
    *   **Quadratic Poles/Zeros ($1/(s^2 + 2\zeta\omega_n s + \omega_n^2)$ or $(s^2 + 2\zeta\omega_n s + \omega_n^2)$):** Introduce more complex magnitude and phase behavior, especially near the undamped natural frequency $\omega_n$.

#### Example:

Consider a system with open-loop transfer function:
$G(s)H(s) = \frac{10}{s(s+1)}$

*   **Gain Term:** $K=10$. Magnitude: $20 \log_{10} 10 = 20$ dB. Phase: $0^\circ$.
*   **Pole at Origin ($1/s$):** Magnitude slope: -20 dB/decade. Phase: $-90^\circ$.
*   **Simple Pole at $s=-1$ (corner frequency $\omega=1$):** Magnitude slope change: -20 dB/decade. Phase change: $0^\circ$ to $-90^\circ$.

**(Refer to Ogata, Chapter 7; Nise, Chapter 8; Nagrath & Gopal, Chapter 10 for detailed construction and analysis.)**

#### Analysis from Bode Plot:

*   **Stability:**
    *   **Gain Margin (GM):** The amount of gain that can be added to the system before it becomes unstable. It's the magnitude (in dB) of the frequency response at the **phase crossover frequency** ($\omega_{pc}$), where the phase is $-180^\circ$.
        *   GM = $-|G(j\omega_{pc})|_{dB}$ (if the phase never reaches $-180^\circ$, GM is infinite).
    *   **Phase Margin (PM):** The amount of additional phase lag that can be tolerated before the system becomes unstable. It's measured at the **gain crossover frequency** ($\omega_{gc}$), where the magnitude is 0 dB ($|G(j\omega_{gc})| = 1$).
        *   PM = $180^\circ + \angle G(j\omega_{gc})$.
    *   **Stability Condition:** For a stable closed-loop system, both GM and PM must be positive.
*   **Transient Response:**
    *   **Bandwidth:** The frequency range over which the closed-loop system maintains a certain level of gain (usually -3 dB from the DC gain). A wider bandwidth generally implies a faster transient response.
    *   **Damping Ratio ($\zeta$) and Natural Frequency ($\omega_n$):** These can be estimated from the phase margin using approximations. A phase margin of $30^\circ-60^\circ$ often indicates a well-damped response.
*   **Steady-State Accuracy:** The DC gain of the open-loop transfer function ($|G(j0)|$) is related to the steady-state error. A higher DC gain usually results in a smaller steady-state error.

#### Practice Question 2:

For the system with open-loop transfer function $G(s)H(s) = \frac{20}{(s+2)(s+4)}$, sketch the Bode plot and determine the Gain Margin and Phase Margin.

**Answer:**

*   $G(s)H(s) = \frac{20}{(s+2)(s+4)} = \frac{20/8}{(s/2+1)(s/4+1)} = \frac{2.5}{(0.5s+1)(0.25s+1)}$
*   Gain term: $K=2.5$. Magnitude: $20 \log_{10} 2.5 \approx 7.96$ dB. Phase: $0^\circ$.
*   Pole at $\omega=2$: Corner frequency 2 rad/s. Magnitude starts at $7.96$ dB, slope becomes -20 dB/decade after $\omega=2$. Phase starts at $0^\circ$, goes from $0^\circ$ to $-90^\circ$ around $\omega=2$.
*   Pole at $\omega=4$: Corner frequency 4 rad/s. Magnitude slope becomes -40 dB/decade after $\omega=4$. Phase goes from $-90^\circ$ to $-180^\circ$ around $\omega=4$.

*   **Phase Crossover Frequency ($\omega_{pc}$):** Find $\omega$ where $\angle G(j\omega) = -180^\circ$. This happens around $\omega=4$. Let's evaluate at $\omega=4$:
    *   $\angle G(j4) = \angle \frac{20}{(j4+2)(j4+4)} = \tan^{-1}(\frac{4}{2}) + \tan^{-1}(\frac{4}{4}) = \tan^{-1}(2) + \tan^{-1}(1) \approx 63.4^\circ + 45^\circ = 108.4^\circ$. This is not -180.
    *   To find $\omega_{pc}$ accurately, we need to set the phase to $-180^\circ$. For $G(j\omega) = \frac{20}{(j\omega+2)(j\omega+4)}$, the phase is $-\tan^{-1}(\frac{\omega}{2}) - \tan^{-1}(\frac{\omega}{4})$.
    *   Setting $-\tan^{-1}(\frac{\omega}{2}) - \tan^{-1}(\frac{\omega}{4}) = -180^\circ$. This equation is hard to solve analytically without numerical methods. For sketching purposes, we can see that as $\omega$ increases, the phase lag increases. At $\omega=10$, phase $\approx -\tan^{-1}(5) - \tan^{-1}(2.5) \approx -78.7^\circ - 68.2^\circ = -146.9^\circ$. At $\omega=20$, phase $\approx -\tan^{-1}(10) - \tan^{-1}(5) \approx -84.3^\circ - 78.7^\circ = -163^\circ$. At $\omega=30$, phase $\approx -\tan^{-1}(15) - \tan^{-1}(7.5) \approx -86.2^\circ - 82.4^\circ = -168.6^\circ$.
    *   Let's approximate $\omega_{pc}$ to be around $20$ rad/s for analysis.
    *   At $\omega=20$: $|G(j20)| = \frac{20}{|j20+2||j20+4|} = \frac{20}{\sqrt{20^2+2^2}\sqrt{20^2+4^2}} = \frac{20}{\sqrt{404}\sqrt{416}} \approx \frac{20}{20.1 \times 20.4} \approx \frac{20}{410} \approx 0.0488$.
    *   Magnitude in dB: $20 \log_{10}(0.0488) \approx -26.2$ dB.
    *   **Gain Margin (GM):** $-(-26.2 \text{ dB}) = 26.2$ dB.

*   **Gain Crossover Frequency ($\omega_{gc}$):** Find $\omega$ where $|G(j\omega)| = 1$ (0 dB).
    *   $|G(j\omega)| = \frac{20}{|\omega^2 + 6j\omega + 8|} = \frac{20}{\sqrt{(\omega^2-8)^2 + (6\omega)^2}} = 1$.
    *   $400 = (\omega^2-8)^2 + 36\omega^2$
    *   $400 = \omega^4 - 16\omega^2 + 64 + 36\omega^2$
    *   $\omega^4 + 20\omega^2 - 336 = 0$. Let $x = \omega^2$.
    *   $x^2 + 20x - 336 = 0$. Using quadratic formula: $x = \frac{-20 \pm \sqrt{20^2 - 4(1)(-336)}}{2} = \frac{-20 \pm \sqrt{400 + 1344}}{2} = \frac{-20 \pm \sqrt{1744}}{2} = \frac{-20 \pm 41.76}{2}$.
    *   Since $\omega^2$ must be positive, $\omega^2 = \frac{-20 + 41.76}{2} = \frac{21.76}{2} = 10.88$.
    *   $\omega_{gc} = \sqrt{10.88} \approx 3.29$ rad/s.

*   **Phase Margin (PM):** At $\omega_{gc} = 3.29$ rad/s,
    *   $\angle G(j3.29) = -\tan^{-1}(\frac{3.29}{2}) - \tan^{-1}(\frac{3.29}{4}) \approx -\tan^{-1}(1.645) - \tan^{-1}(0.8225)$
    *   $\angle G(j3.29) \approx -58.7^\circ - 39.4^\circ = -98.1^\circ$.
    *   PM = $180^\circ + (-98.1^\circ) = 81.9^\circ$.

---

### 3. Nyquist Plot

The Nyquist plot is a polar plot of the open-loop transfer function $G(j\omega)$ as $\omega$ varies from $-\infty$ to $\infty$. It is used to determine the stability of the closed-loop system.

#### Key Concepts and Definitions:

*   **Polar Plot:** A plot of $|G(j\omega)|$ versus $\angle G(j\omega)$ in polar coordinates.
*   **Nyquist Path:** A contour in the s-plane that encircles the entire right-half plane (RHP). It starts at $s=0^+$ along the imaginary axis, goes to $s=\infty$ along the imaginary axis, traverses a semicircle of infinite radius in the RHP, and returns to $s=0^-$ along the imaginary axis.
*   **Nyquist Contour Mapping:** The mapping of the Nyquist path through the open-loop transfer function $G(s)$.
*   **Nyquist Stability Criterion:** Relates the number of encirclements of the $-1+j0$ point by the Nyquist plot of $G(j\omega)$ to the number of RHP closed-loop poles.
    *   $N = P - Z$
        *   $N$: Number of clockwise encirclements of the $-1+j0$ point.
        *   $P$: Number of open-loop poles in the RHP.
        *   $Z$: Number of closed-loop poles in the RHP.
*   **To determine closed-loop stability:** We need $Z=0$. Therefore, $N = P$. If the system is open-loop stable ($P=0$), then for closed-loop stability, we need $N=0$ (no encirclements of $-1+j0$).

#### Example:

Consider a system with open-loop transfer function:
$G(s)H(s) = \frac{K}{s(s+1)(s+2)}$

*   **Open-loop poles:** $s=0, s=-1, s=-2$ (all in LHP, so $P=0$).
*   **Mapping $j\omega$ axis:**
    *   For $\omega \to 0^+$, $G(j\omega) \approx \frac{K}{j\omega(1)(2)} = \frac{K}{2j\omega} \to -j\infty$. Magnitude is infinite, phase is $-90^\circ$.
    *   For $\omega \to \infty$, $G(j\omega) \approx \frac{K}{(j\omega)^3} \to -j\frac{K}{\omega^3} \to 0$ with phase $-270^\circ$ (or $+90^\circ$).
*   **Mapping the infinite semicircle in RHP:** If $s = R e^{j\theta}$ for $R \to \infty$ and $\theta$ from $90^\circ$ to $-90^\circ$.
    *   $G(s) \approx \frac{K}{s^3}$ for large $s$.
    *   $G(R e^{j\theta}) \approx \frac{K}{(R e^{j\theta})^3} = \frac{K}{R^3} e^{-j3\theta}$. As $R \to \infty$, this goes to 0. The phase varies from $-270^\circ$ to $+270^\circ$.
*   **Mapping $j\omega$ axis from $0^-$ to $-\infty$:** This is the mirror image of the $0^+$ to $\infty$ segment due to symmetry.
*   **Mapping the infinite semicircle in LHP:** This segment of the Nyquist path encircles the pole at $s=0$. If there are poles on the imaginary axis, the path must be indented.
*   **The $-1+j0$ point:** We need to check if the Nyquist plot encloses this point.

**(Refer to Ogata, Chapter 9; Nise, Chapter 9; Nagrath & Gopal, Chapter 11 for detailed construction and analysis.)**

#### Analysis from Nyquist Plot:

*   **Stability:** Based on the number of encirclements of $-1+j0$. If $P=0$, then $N=0$ for stability.
*   **Gain Margin (GM):** The reciprocal of the magnitude of $G(j\omega)$ at the phase crossover frequency $\omega_{pc}$ (where $\angle G(j\omega) = -180^\circ$). GM = $1/|G(j\omega_{pc})|$.
*   **Phase Margin (PM):** The angle by which the point where $|G(j\omega)|=1$ is from the $-1+j0$ point on the negative real axis.
*   **Transient Response:** Can be inferred from GM and PM, similar to Bode plots.

#### Practice Question 3:

For the system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+2)}$, sketch the Nyquist plot and determine the range of $K$ for which the closed-loop system is stable.

**Answer:**

*   Open-loop poles: $s=0, s=-2$. So $P=0$. For stability, we need $N=0$ (no encirclements of $-1+j0$).
*   Characteristic equation: $1 + \frac{K}{s(s+2)} = 0 \implies s^2 + 2s + K = 0$.
*   For stability, the roots must be in the LHP. From the characteristic equation, by Routh-Hurwitz:
    *   $s^2$: 1   K
    *   $s^1$: 2   0
    *   $s^0$: K   0
    *   For stability, all coefficients must be positive, so $K>0$.
*   Now let's look at the Nyquist plot.
    *   $G(j\omega) = \frac{K}{j\omega(j\omega+2)} = \frac{K}{-\omega^2 + j2\omega} = \frac{K(-\omega^2 - j2\omega)}{\omega^2(\omega^2+4)} = \frac{-K}{\omega^2+4} - j\frac{2K}{\omega(\omega^2+4)}$.
    *   Magnitude: $|G(j\omega)| = \frac{K}{\omega\sqrt{\omega^2+4}}$.
    *   Phase: $\angle G(j\omega) = -90^\circ - \tan^{-1}(\frac{\omega}{2})$.
    *   As $\omega \to 0^+$: $|G(j\omega)| \to \infty$, $\angle G(j\omega) \to -90^\circ$.
    *   As $\omega \to \infty$: $|G(j\omega)| \to 0$, $\angle G(j\omega) \to -90^\circ - 90^\circ = -180^\circ$.
    *   The plot for $\omega$ from $0^+$ to $\infty$ starts from infinity at $-90^\circ$ and moves towards 0 at $-180^\circ$. It will look like a curve in the third quadrant.
    *   For $K > 0$, the plot will not encircle $-1+j0$.
*   To find the critical gain: The system becomes marginally stable when the Nyquist plot touches the $-1+j0$ point. This happens when the phase is $-180^\circ$.
    *   The phase is $-180^\circ$ when $-90^\circ - \tan^{-1}(\frac{\omega}{2}) = -180^\circ \implies \tan^{-1}(\frac{\omega}{2}) = 90^\circ$. This occurs at $\omega \to \infty$.
    *   However, the critical point can also be found by setting the real part to -1 and imaginary part to 0 in $G(j\omega) = -1+j0$.
    *   Real part: $\frac{-K}{\omega^2+4} = -1 \implies K = \omega^2+4$.
    *   Imaginary part: $\frac{-2K}{\omega(\omega^2+4)} = 0$. This implies $K=0$ or $\omega=\infty$. This doesn't give a finite gain.
*   Let's reconsider the phase crossover frequency. The phase approaches $-180^\circ$ as $\omega \to \infty$.
*   Let's find the point where the magnitude is 1 and phase is $-180^\circ$.
    *   For phase to be $-180^\circ$, we need $\tan^{-1}(\omega/2) = 90^\circ$, which means $\omega \to \infty$.
    *   At $\omega \to \infty$, $|G(j\omega)| \to 0$.
    *   The $-1+j0$ point is on the negative real axis. The Nyquist plot for this system for $\omega > 0$ starts at infinity on the $-90^\circ$ line and approaches 0 on the $-180^\circ$ line.
    *   The plot for $\omega < 0$ is the mirror image.
    *   The point where the curve crosses the negative real axis would be when the imaginary part is zero. This happens at $\omega \to \infty$.
*   The system is stable if the magnitude of $G(j\omega)$ at the phase crossover frequency is greater than 1.
    *   The phase crossover frequency is where phase is $-180^\circ$, which is effectively $\omega=\infty$. At $\omega=\infty$, $|G(j\omega)|=0$. Since $0 < 1$, the system is stable for all $K>0$.

*   **Alternatively, using the Routh-Hurwitz result:** The system is stable for $0 < K$.
*   **Nyquist plot perspective:** The Nyquist plot for $G(j\omega)$ for $\omega \in [0, \infty)$ will be a curve in the third quadrant. It starts at $\infty$ at $-90^\circ$ and ends at $0$ at $-180^\circ$. This curve will not enclose $-1+j0$. Thus, for $P=0$, $N=0$, so $Z=0$. The system is stable for all $K>0$.

---

### 4. Nichols Chart

The Nichols chart is a plot of the open-loop transfer function $G(j\omega)H(j\omega)$ on a logarithmic magnitude (dB) versus phase (degrees) grid. It is useful for directly determining the closed-loop frequency response from the open-loop frequency response, and for analyzing stability and transient response.

#### Key Concepts and Definitions:

*   **Log-Magnitude vs. Phase Plot:** The Nichols chart is a plot of $20 \log_{10}|G(j\omega)|$ versus $\angle G(j\omega)$.
*   **Nichols Chart Grids:**
    *   **$M$ Circles:** Contours of constant closed-loop magnitude $|T(j\omega)|$. These circles are plotted on the Nichols chart.
    *   **$N$ Circles (or Lines):** Contours of constant closed-loop phase $\angle T(j\omega)$. These are usually represented as straight lines at constant phase angles.
*   **Stability Analysis:**
    *   The $-1+j0$ point in the Bode plot corresponds to a specific point on the Nichols chart (0 dB, $-180^\circ$).
    *   If the Nichols plot of $G(j\omega)H(j\omega)$ passes through the $-1+j0$ point, the system is marginally stable.
    *   If the Nichols plot encircles the $-1+j0$ point in a particular direction, it indicates instability (similar to Nyquist criterion).
*   **Gain and Phase Margins:** Can be directly read from the Nichols chart.
    *   **Phase Margin:** Measured at the point where the Nichols plot intersects the 0 dB line. It's the difference between the phase at this intersection and $-180^\circ$.
    *   **Gain Margin:** Measured at the point where the Nichols plot intersects the $-180^\circ$ line. It's the magnitude (in dB) of the gain needed to reach the $-1+j0$ point from the intersection.

#### Example:

Consider a system with open-loop transfer function:
$G(s)H(s) = \frac{K}{s(s+1)}$

*   **Plotting $G(j\omega)$:**
    *   $\omega=0.1$: $|G(j0.1)| \approx 10$, $\angle G(j0.1) \approx -90^\circ$. Point: ($-90^\circ$, 20 dB).
    *   $\omega=1$: $|G(j1)| = \frac{1}{\sqrt{1^2+1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$, $\angle G(j1) = -90^\circ - 45^\circ = -135^\circ$. Point: ($-135^\circ$, -3 dB).
    *   $\omega=10$: $|G(j10)| \approx \frac{1}{10}$, $\angle G(j10) \approx -90^\circ - 84^\circ = -174^\circ$. Point: ($-174^\circ$, -20 dB).
*   **Nichols Chart Grids:**
    *   $M$ circles: Constant closed-loop magnitude $|T(j\omega)| = |\frac{G(j\omega)}{1+G(j\omega)}|$.
    *   $N$ lines: Constant closed-loop phase $\angle T(j\omega) = \angle G(j\omega) - \angle(1+G(j\omega))$.

**(Refer to Ogata, Chapter 7; Nise, Chapter 8; Nagrath & Gopal, Chapter 10 for detailed construction and analysis.)**

#### Analysis from Nichols Chart:

*   **Closed-loop Frequency Response:** By locating the open-loop plot on the Nichols chart, we can directly read the closed-loop magnitude and phase for each frequency.
*   **Bandwidth:** Can be determined by finding the frequency at which the closed-loop magnitude drops by 3 dB from its DC value.
*   **Transient Response:** Damping ratio and natural frequency can be estimated by overlaying the $M$ and $N$ contours on the Nichols plot.
*   **Peak Magnitude ($M_p$):** The maximum value of the closed-loop magnitude, indicating the peaking in the time response.

#### Practice Question 4:

For the system with open-loop transfer function $G(s)H(s) = \frac{K}{s+1}$, plot the Nichols chart for $K=1$ and determine the Gain Margin and Phase Margin.

**Answer:**

*   $G(s)H(s) = \frac{K}{s+1}$. Let $K=1$. $G(j\omega) = \frac{1}{j\omega+1}$.
*   Magnitude in dB: $20 \log_{10} |\frac{1}{j\omega+1}| = -20 \log_{10} \sqrt{\omega^2+1}$.
*   Phase: $\angle \frac{1}{j\omega+1} = -\tan^{-1}(\omega)$.
*   Let's evaluate at a few frequencies:
    *   $\omega=0.1$: Mag = $-20 \log_{10} \sqrt{0.01+1} \approx -0.086$ dB. Phase = $-\tan^{-1}(0.1) \approx -5.7^\circ$. Point: ($-5.7^\circ$, -0.086 dB).
    *   $\omega=1$: Mag = $-20 \log_{10} \sqrt{1+1} \approx -3.01$ dB. Phase = $-\tan^{-1}(1) = -45^\circ$. Point: ($-45^\circ$, -3.01 dB).
    *   $\omega=10$: Mag = $-20 \log_{10} \sqrt{100+1} \approx -20.04$ dB. Phase = $-\tan^{-1}(10) \approx -84.3^\circ$. Point: ($-84.3^\circ$, -20.04 dB).

*   **Nichols Plot Sketch (for K=1):**
    *   The plot starts in the top right quadrant (near $\omega=0$, phase $0^\circ$, mag $20 \log_{10} K$). If $K=1$, it starts at $0$ dB, $0^\circ$.
    *   As $\omega$ increases, phase lag increases, and magnitude decreases.
    *   The plot will move downwards and to the left.
    *   For $G(j\omega) = \frac{1}{j\omega+1}$:
        *   $\omega=0$: Mag = 0 dB, Phase = 0°.
        *   $\omega=1$: Mag = -3 dB, Phase = -45°.
        *   $\omega \to \infty$: Mag $\to -\infty$, Phase $\to -90^\circ$.
    *   The Nichols plot will be a curve starting at $(0^\circ, 0 \text{ dB})$ and ending at $(-90^\circ, -\infty \text{ dB})$.

*   **Stability:** For $P=0$, we need $N=0$. The plot for $G(j\omega)=\frac{1}{j\omega+1}$ does not encircle $-1+j0$.
*   **Gain Margin:**
    *   Find where the Nichols plot crosses the $-180^\circ$ line. For $G(j\omega) = \frac{1}{j\omega+1}$, the phase is always between $0^\circ$ and $-90^\circ$. It never reaches $-180^\circ$. So, the Gain Margin is infinite.
*   **Phase Margin:**
    *   Find where the Nichols plot crosses the $0$ dB line. This happens at $\omega=0$.
    *   At $0$ dB, the phase is $0^\circ$.
    *   Phase Margin = $180^\circ - | \text{Phase at } 0 \text{ dB line} | = 180^\circ - 0^\circ = 180^\circ$.

---

### 5. Correlation and Comprehensive Analysis

The true power of these graphical techniques lies in their ability to complement each other. By analyzing a system using Root Locus, Bode, Nyquist, and Nichols charts, we can gain a holistic understanding of its performance.

*   **Root Locus** provides direct insight into the location of closed-loop poles, directly relating to transient response characteristics and stability margins.
*   **Bode Plot** is excellent for visualizing frequency response, determining GM and PM, estimating transient response, and assessing steady-state error. It's widely used for controller design.
*   **Nyquist Plot** offers a robust method for absolute stability determination, especially for systems with open-loop poles in the RHP. It also provides GM and PM.
*   **Nichols Chart** combines the advantages of both Bode and Nyquist plots, allowing for direct determination of closed-loop frequency response and transient performance metrics.

By comparing the results from these plots for a given transfer function, you can:

*   Verify the stability conditions predicted by each method.
*   Cross-check the transient and steady-state performance metrics (e.g., damping ratio from root locus vs. phase margin from Bode).
*   Gain a deeper understanding of how pole-zero configurations and frequency response are interconnected.

### Important Points to Remember:

*   **Systematic Approach:** Always follow the established rules for sketching each plot.
*   **Tool Usage:** Simulation tools (like MATLAB/Simulink) are invaluable for accurately generating and analyzing these plots.
*   **Interdependence:** Understand how the information from one plot relates to another.
*   **Performance Metrics:** Be able to extract key performance indicators (GM, PM, $T_s$, $M_p$, bandwidth) from each plot.
*   **Stability:** The ultimate goal is to ensure closed-loop stability by analyzing the location of poles or applying appropriate stability criteria.
*   **Assumptions:** Be aware of any approximations made during manual sketching or analysis.

---

### Conclusion

This module equips you with essential graphical tools for analyzing the performance of control systems. Mastering the Root Locus, Bode Plot, Nyquist Plot, and Nichols Chart will significantly enhance your ability to understand, evaluate, and design effective control systems. The ability to interpret these plots and correlate the information obtained from them is a fundamental skill for any control systems engineer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
