---
title: "Stability analysis.  (2 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366cf"
status: "completed"
scrapedAt: "2026-05-23T16:29:55.689Z"
---
# INTRODUCTION TO CONTROL SYSTEMS
## Module 4: Frequency Domain Analysis
### Topic: Stability Analysis (2 hours)

---

### **Introduction**

Stability is a fundamental characteristic of any control system. A stable system is one that, when subjected to a bounded input, produces a bounded output. Conversely, an unstable system will produce an unbounded output, which can lead to system failure or undesirable behavior. In the frequency domain, we analyze stability by examining the system's response to sinusoidal inputs of varying frequencies. This module will focus on understanding and evaluating the stability of control systems using frequency domain techniques.

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   **LO1:** Define and explain the concept of stability in the context of control systems.
*   **LO2:** Understand the relationship between time-domain stability and frequency-domain characteristics.
*   **LO3:** Apply the Nyquist stability criterion to determine the stability of a closed-loop system from its open-loop transfer function.
*   **LO4:** Determine the stability margins (Gain Margin and Phase Margin) of a system from its frequency response.
*   **LO5:** Utilize the Bode plot to assess the stability of a closed-loop system.

---

### **Key Concepts and Definitions**

#### **1. Stability**

*   **Definition:** A system is considered **stable** if its output remains bounded for all bounded inputs. If an input is removed, the system should return to its equilibrium state.
*   **Asymptotic Stability:** A system is asymptotically stable if it is stable and the output approaches zero as time approaches infinity after the input is removed.
*   **Marginal Stability:** A system is marginally stable if the output oscillates with constant amplitude or grows linearly with time after the input is removed.
*   **Unstable System:** A system is unstable if its output is unbounded for even a single bounded input.

#### **2. BIBO Stability (Bounded-Input, Bounded-Output)**

*   **Definition:** A system is BIBO stable if every bounded input produces a bounded output.
*   **Relationship to Poles:** For a Linear Time-Invariant (LTI) system, BIBO stability is directly related to the location of the poles of its closed-loop transfer function. All poles must lie in the **left half of the s-plane** (i.e., have negative real parts).

#### **3. Frequency Domain Analysis and Stability**

*   **Frequency Response:** The behavior of a system when subjected to sinusoidal inputs of varying frequencies. This is characterized by the **magnitude** and **phase** of the output signal relative to the input signal.
*   **Transfer Function and Frequency Response:** If the open-loop transfer function is $G(s)H(s)$, the frequency response is obtained by substituting $s = j\omega$: $G(j\omega)H(j\omega) = |G(j\omega)H(j\omega)|e^{j\angle G(j\omega)}$.
*   **Closed-Loop Stability:** Stability of the closed-loop system is determined by the roots of the characteristic equation: $1 + G(s)H(s) = 0$. The problem of stability analysis in the frequency domain is to determine if any roots of this equation lie in the right half of the s-plane.

---

### **3. Nyquist Stability Criterion**

The Nyquist stability criterion is a powerful graphical method for determining the stability of a closed-loop system from the frequency response of its open-loop transfer function $G(s)H(s)$. It relates the number of encirclements of the critical point (-1, 0) in the G(jω)H(jω) plane by the Nyquist plot to the number of unstable poles of the open-loop system.

#### **3.1 Nyquist Plot**

*   **Definition:** A polar plot of the open-loop transfer function $G(j\omega)H(j\omega)$ as $\omega$ varies from $-\infty$ to $+\infty$.
*   **Construction:**
    1.  Start with the open-loop transfer function $G(s)H(s)$.
    2.  Replace $s$ with $j\omega$ to get $G(j\omega)H(j\omega)$.
    3.  Calculate the magnitude $|G(j\omega)H(j\omega)|$ and phase $\angle G(j\omega)H(j\omega)$ for a range of $\omega$.
    4.  Plot these values on a polar graph (magnitude on the radial axis, phase on the angular axis).
    5.  Consider the range of $\omega$ from $0$ to $\infty$ and $-\infty$ to $0$. The plot for $\omega < 0$ is the mirror image of the plot for $\omega > 0$ about the real axis.
    6.  **Special Consideration for Poles at the Origin:** If the open-loop transfer function has $n_0$ poles at the origin ($s=0$), the Nyquist plot must include a small semicircle around the origin in the s-plane for $\omega$ from $0^{-}$ to $0^{+}$. This semicircle maps to a large semicircle in the Nyquist plot.

#### **3.2 Nyquist Stability Criterion Statement**

For a closed-loop system with an open-loop transfer function $G(s)H(s)$:

Let:
*   $P$: The number of poles of $G(s)H(s)$ in the **open right half-plane (RHP)**.
*   $Z$: The number of zeros of the characteristic equation $1 + G(s)H(s) = 0$ in the **open right half-plane (RHP)**. These are the poles of the closed-loop system in the RHP.
*   The Nyquist contour is a path in the s-plane that encloses the entire right half-plane.

**The Nyquist Criterion states:**

$Z = P - N$

where:
*   $N$: The **net number of clockwise encirclements** of the critical point (-1, 0) by the Nyquist plot of $G(j\omega)H(j\omega)$ as $\omega$ varies from $-\infty$ to $+\infty$. (Counter-clockwise encirclements are counted as positive, clockwise as negative).

#### **3.3 Stability Condition**

For the closed-loop system to be stable, all its poles must be in the left half-plane. This means $Z$ must be 0.

Therefore, for a stable closed-loop system:
**$0 = P - N \implies N = P$**

**Important Note:** If the open-loop system is open-loop stable, then $P=0$. In this case, for closed-loop stability, $N=0$ (no encirclements of -1).

#### **3.4 Handling Poles on the jω-axis**

If $G(s)H(s)$ has poles on the jω-axis (but not at the origin), the Nyquist plot is undefined at those frequencies. To handle this, small semicircles are introduced into the Nyquist contour to avoid these poles.

*   If a pole is at $s = j\omega_0$, a small semicircle of radius $\epsilon$ is taken in the RHP from $\omega_0 - \epsilon$ to $\omega_0 + \epsilon$. This semicircle maps to a large semicircle in the Nyquist plot.
*   If a pole is at $s = -j\omega_0$, a small semicircle of radius $\epsilon$ is taken in the RHP from $-\omega_0 - \epsilon$ to $-\omega_0 + \epsilon$. This also maps to a large semicircle.

**Rule for Poles on jω-axis:** If $G(s)H(s)$ has $p_j$ poles on the jω-axis (but not at the origin), and these poles are enclosed by the Nyquist contour, then each such pole contributes one counter-clockwise encirclement of the critical point (-1, 0).

**Modified Criterion:**
$Z = P - N + p_j$
For closed-loop stability, $Z = 0 \implies N = P + p_j$ (where N is the number of clockwise encirclements of -1).

#### **3.5 Simplified Nyquist Criterion (for Open-Loop Stable Systems)**

If the open-loop system $G(s)H(s)$ is open-loop stable ($P=0$), and has no poles on the jω-axis, then for closed-loop stability, the Nyquist plot should **not** encircle the critical point (-1, 0) in either direction ($N=0$).

*   **Example (Nise, 5th Ed., Chapter 10):** Consider a system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.
    *   Poles are at $s=0, s=-1, s=-2$. $P=0$ (no poles in RHP).
    *   The pole at $s=0$ is on the jω-axis.
    *   Characteristic equation: $1 + \frac{K}{s(s+1)(s+2)} = 0 \implies s^3 + 3s^2 + 2s + K = 0$.
    *   Using Routh-Hurwitz, for stability, $K > 0$ and $3(2) - K > 0 \implies K < 6$. So, for stability, $0 < K < 6$.

    *   **Nyquist Plot Construction:**
        *   For $\omega \to 0^+$, $G(j\omega)H(j\omega) \approx \frac{K}{j\omega(1)(2)} = \frac{-jK}{2\omega}$. Magnitude $\to \infty$, Phase $\to -90^\circ$.
        *   For $\omega \to \infty$, $G(j\omega)H(j\omega) \approx \frac{K}{(j\omega)^3} = \frac{-K}{j^3\omega^3} = \frac{jK}{\omega^3}$. Magnitude $\to 0$, Phase $\to +90^\circ$.
        *   The plot starts from $\infty \angle -90^\circ$ at $\omega=0^+$ and goes to $0 \angle +90^\circ$ at $\omega=\infty$.
        *   For $\omega \to 0^-$, $G(j\omega)H(j\omega) \approx \frac{K}{j\omega(1)(2)} = \frac{-jK}{2\omega}$. Magnitude $\to \infty$, Phase $\to +90^\circ$.
        *   For $\omega \to -\infty$, $G(j\omega)H(j\omega) \approx \frac{K}{(j\omega)^3} = \frac{-K}{j^3\omega^3} = \frac{jK}{\omega^3}$. Magnitude $\to 0$, Phase $\to -90^\circ$.
        *   The plot from $-\infty$ to $0$ starts from $0 \angle -90^\circ$ and goes to $\infty \angle +90^\circ$.
        *   To complete the Nyquist contour, we need a semicircle around the origin in the RHP. For $\omega$ from $0^-$ to $0^+$, let $s = \epsilon e^{j\theta}$, where $\theta$ goes from $90^\circ$ to $-90^\circ$.
            $G(s)H(s) = \frac{K}{s(s+1)(s+2)} \approx \frac{K}{s}$ for small $s$.
            So, $G(j\omega)H(j\omega) \approx \frac{K}{\epsilon e^{j\theta}} = \frac{K}{\epsilon} e^{-j\theta}$.
            As $\theta$ goes from $90^\circ$ to $-90^\circ$, $-j\theta$ goes from $-90^\circ$ to $+90^\circ$.
            The semicircle maps to a large semicircle in the Nyquist plot from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$ in the second and third quadrants.
        *   The Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$ starts at $\infty \angle -90^\circ$ and ends at $0 \angle +90^\circ$. The semicircle around the origin maps to a semicircle from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$.
        *   **Encirclement of (-1, 0):** To encircle (-1, 0), the plot must pass through the point $(-1, 0)$ or be in its vicinity. We need to find the phase crossover frequency $\omega_{pc}$ where $\angle G(j\omega)H(j\omega) = -180^\circ$.
            $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$.
            Setting this to $-180^\circ$: $90^\circ = \tan^{-1}(\omega) + \tan^{-1}(\omega/2)$.
            $\tan(90^\circ) = \tan(\tan^{-1}(\omega) + \tan^{-1}(\omega/2))$. This indicates no real $\omega$ satisfies this exactly.
            Let's re-evaluate the phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$.
            For the Nyquist plot to cross the negative real axis, the phase must be $-180^\circ$.
            $-90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2) = -180^\circ$
            $\tan^{-1}(\omega) + \tan^{-1}(\omega/2) = 90^\circ$
            This condition is met as $\omega \to \infty$, where $\tan^{-1}(\omega) \to 90^\circ$ and $\tan^{-1}(\omega/2) \to 90^\circ$. However, the magnitude approaches 0.
            Let's check the gain crossover frequency $\omega_{gc}$ where $|G(j\omega)H(j\omega)| = 1$.
            $|G(j\omega)H(j\omega)| = \frac{K}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = 1$.
            Let's consider the phase crossover frequency where the phase is $-180^\circ$. The phase is $-90^\circ$ at $\omega=0$ and goes towards $-270^\circ$ (or $+90^\circ$) as $\omega \to \infty$. So the phase does not become $-180^\circ$ for $\omega > 0$. The phase crossover frequency does not exist for $\omega > 0$.

            The Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$ starts at $\infty$ on the imaginary axis (phase $-90^\circ$) and goes towards the origin with phase $+90^\circ$ as $\omega \to \infty$.
            The contour from $-\infty$ to $0$ is the mirror image.
            The semicircle around the origin goes from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$.
            The critical point $(-1, 0)$ lies on the negative real axis.
            Since the plot never crosses the negative real axis for $\omega \in [0, \infty)$, it doesn't encircle $(-1, 0)$ in the standard way.
            However, due to the pole at the origin, the entire RHP is enclosed by the Nyquist contour. The system has one pole at the origin, which is on the jω-axis.
            $P=0$ (no poles in RHP). $p_j=1$ (one pole at the origin).
            The criterion is $Z = P - N + p_j$.
            For stability, $Z=0$. So, $0 = 0 - N + 1 \implies N = 1$.
            This means the Nyquist plot must make one clockwise encirclement of (-1, 0) due to the pole at the origin.
            The semicircle mapping for the pole at the origin goes from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$. This arc does NOT encircle the point (-1,0).
            For $K>0$, the magnitude at $\omega=0$ is infinite, and the phase is $-90^\circ$. As $\omega$ increases, the phase becomes more negative.
            Let's find $\omega_{pc}$ where $\angle G(j\omega)H(j\omega) = -180^\circ$.
            $-90 - \tan^{-1}(\omega) - \tan^{-1}(\omega/2) = -180$
            $\tan^{-1}(\omega) + \tan^{-1}(\omega/2) = 90$
            This condition is not met for any finite $\omega$. The phase approaches $-270^\circ$ (or $+90^\circ$) as $\omega \to \infty$.
            The phase crossover frequency is where the phase is $-180^\circ$. In this case, this never happens for $\omega>0$.

            Let's use the Bode plot for intuition first.
            Bode plot: Magnitude $20 \log_{10} \left( \frac{K}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}} \right)$, Phase $-90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$.
            Phase crossover frequency $\omega_{pc}$: Phase = $-180^\circ$. This does not occur for $\omega>0$.
            Gain crossover frequency $\omega_{gc}$: Magnitude = 1. This occurs for some $\omega$.
            Let's assume stability for $0 < K < 6$.
            For $K=2$: $|G(j\omega)H(j\omega)| = \frac{2}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}}$.
            At $\omega=1$: $|G(j1)H(j1)| = \frac{2}{1\sqrt{2}\sqrt{5}} = \frac{2}{\sqrt{10}} < 1$. Phase = $-90 - 56.3 - 26.6 = -172.9^\circ$.
            At $\omega=2$: $|G(j2)H(j2)| = \frac{2}{2\sqrt{5}\sqrt{8}} = \frac{1}{\sqrt{40}} < 1$. Phase = $-90 - 63.4 - 33.7 = -187.1^\circ$.
            The phase crossover frequency $\omega_{pc}$ exists between 1 and 2.
            The gain crossover frequency $\omega_{gc}$ is where the magnitude is 1.
            At $\omega_{pc}$, the phase is $-180^\circ$.
            The Nyquist plot crosses the negative real axis at the phase crossover frequency.
            If the system is to be stable ($0 < K < 6$), the closed-loop poles must be in the LHP. $Z=0$.
            $N = P + p_j = 0 + 1 = 1$. One clockwise encirclement.
            The Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$ starts at $\infty \angle -90^\circ$, goes towards the origin.
            The semicircle for $s \to 0$ goes from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$. This does not enclose $(-1,0)$.
            The plot for $\omega \in [0, \infty)$ is in the first and fourth quadrants.
            The critical point $(-1,0)$ is on the negative real axis.
            For $N=1$ (one clockwise encirclement), the plot must somehow go around the point (-1,0).
            This happens if the phase crossover frequency $\omega_{pc}$ exists and the magnitude at $\omega_{pc}$ is greater than 1.
            Let's check the phase for $\omega_{pc}$.
            If $K=6$, the characteristic equation is $s^3 + 3s^2 + 2s + 6 = 0$. Using Routh-Hurwitz, the last row is proportional to $s^2$: $3(2) - 6 = 0$. This indicates roots on the jω-axis.
            To find the roots, set $3s^2 + 6 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.
            So, at $\omega = \sqrt{2}$, the phase is $-180^\circ$. This is the phase crossover frequency $\omega_{pc}$.
            At $\omega = \sqrt{2}$, $|G(j\sqrt{2})H(j\sqrt{2})| = \frac{K}{\sqrt{2}\sqrt{1+2}\sqrt{4+2}} = \frac{K}{\sqrt{2}\sqrt{3}\sqrt{6}} = \frac{K}{\sqrt{36}} = \frac{K}{6}$.
            For $K=6$, $|G(j\sqrt{2})H(j\sqrt{2})| = 1$. This is the gain crossover frequency as well.
            So, for $K=6$, the Nyquist plot passes through $(-1,0)$ at $\omega = \sqrt{2}$.
            For $0 < K < 6$, the magnitude at $\omega_{pc}$ is $> 1$.
            The plot for $\omega \in [0, \infty)$ starts at $\infty \angle -90^\circ$ and ends at $0 \angle +90^\circ$.
            The semicircle around the origin maps to a semicircle from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$.
            The plot for $\omega \in [0, \infty)$ does not encircle $(-1,0)$.
            The plot for $\omega \in (-\infty, 0]$ is the mirror image.
            The Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in (-\infty, \infty)$ consists of two parts:
            1.  For $\omega \in [0, \infty)$: Starts at $\infty \angle -90^\circ$, moves towards origin.
            2.  For $\omega \in (-\infty, 0]$: Starts at $\infty \angle +90^\circ$, moves towards origin.
            3.  Semicircle around origin in RHP maps to a semicircle from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$.
            The point $(-1, 0)$ lies on the negative real axis.
            For stability ($0 < K < 6$), we need $N=1$ (clockwise encirclement).
            The semicircle around the origin doesn't encircle (-1,0). The plots for $\omega > 0$ and $\omega < 0$ are in the first/fourth and second/third quadrants respectively.
            If the gain at phase crossover is $>1$, then the Nyquist locus for $\omega$ from $0$ to $\infty$ (and $-\infty$ to $0$) will encircle the point $(-1,0)$ once clockwise.
            This happens when $0 < K < 6$.

---

### **4. Gain Margin and Phase Margin**

Gain Margin (GM) and Phase Margin (PM) are frequency-domain measures that indicate how close a system is to becoming unstable. They are typically calculated from the Bode plot.

#### **4.1 Gain Crossover Frequency ($\omega_{gc}$)**

*   **Definition:** The frequency at which the magnitude of the open-loop transfer function is unity (0 dB).
*   $|G(j\omega_{gc})H(j\omega_{gc})| = 1$ (or $20 \log_{10} |G(j\omega_{gc})H(j\omega_{gc})| = 0$ dB).

#### **4.2 Phase Crossover Frequency ($\omega_{pc}$)**

*   **Definition:** The frequency at which the phase of the open-loop transfer function is $-180^\circ$.
*   $\angle G(j\omega_{pc})H(j\omega_{pc}) = -180^\circ$.

#### **4.3 Gain Margin (GM)**

*   **Definition:** The factor by which the gain can be increased before the closed-loop system becomes unstable. It is the reciprocal of the magnitude of the open-loop transfer function at the phase crossover frequency.
*   **Calculation:** $GM = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|}$.
*   **In dB:** $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})|$.
*   **Stability Condition:** For a stable system, the magnitude at the phase crossover frequency must be less than 1 ($|G(j\omega_{pc})H(j\omega_{pc})| < 1$). This means GM > 1 (or $GM_{dB} > 0$).
*   **Relationship to Nyquist:** If the Nyquist plot crosses the negative real axis at $a$, then $GM = -1/a$. For stability, $a$ must be between -1 and 0, so $GM > 1$.

#### **4.4 Phase Margin (PM)**

*   **Definition:** The amount of additional phase lag that can be introduced to the system at the gain crossover frequency before it becomes unstable.
*   **Calculation:** $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$. (Note: The phase angle is typically negative).
*   **Stability Condition:** For a stable system, the phase at the gain crossover frequency must be greater than $-180^\circ$ ($\angle G(j\omega_{gc})H(j\omega_{gc}) > -180^\circ$). This means $PM > 0$.
*   **Relationship to Nyquist:** If the Nyquist plot crosses the unit circle at a phase angle of $-\phi$, then $PM = 180^\circ - \phi$.

#### **4.5 Interpretation of GM and PM**

*   **Large GM and PM:** Indicate a more robust and stable system.
*   **Small GM and PM:** Indicate a system that is close to instability and may exhibit oscillatory behavior.
*   **Zero GM or PM:** Indicates marginal stability (system is on the verge of instability).

*   **Example (Nise, 5th Ed., Example 10.1):** $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.
    *   We found $\omega_{pc}$ occurs when phase is $-180^\circ$.
    *   Phase: $-90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$.
    *   For $K=2$: $\omega_{pc}$ is between 1 and 2. Let's assume $\omega_{pc} \approx 1.5$ for illustration.
        Phase at $\omega=1.5$: $-90 - \tan^{-1}(1.5) - \tan^{-1}(0.75) \approx -90 - 56.3 - 36.9 = -183.2^\circ$.
        So $\omega_{pc} \approx 1.5$.
        Magnitude at $\omega=1.5$: $|G(j1.5)H(j1.5)| = \frac{2}{1.5\sqrt{1+1.5^2}\sqrt{4+1.5^2}} = \frac{2}{1.5\sqrt{3.25}\sqrt{5.25}} \approx \frac{2}{1.5 \times 1.8 \times 2.29} \approx \frac{2}{6.18} \approx 0.32$.
        $GM = 1 / 0.32 \approx 3.1$. $GM_{dB} \approx 20 \log_{10}(3.1) \approx 9.8$ dB.

    *   Let's find $\omega_{gc}$ where magnitude = 1.
        $\frac{K}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = 1$. For $K=2$: $\frac{2}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = 1$.
        This is hard to solve analytically. Assume $\omega_{gc} \approx 0.5$.
        Magnitude at $\omega=0.5$: $|G(j0.5)H(j0.5)| = \frac{2}{0.5\sqrt{1.25}\sqrt{4.25}} \approx \frac{2}{0.5 \times 1.12 \times 2.06} \approx \frac{2}{1.15} \approx 1.74 > 1$.
        So $\omega_{gc}$ is between 0.5 and 1. Let's try $\omega_{gc} \approx 0.7$.
        Magnitude at $\omega=0.7$: $|G(j0.7)H(j0.7)| = \frac{2}{0.7\sqrt{1.49}\sqrt{4.49}} \approx \frac{2}{0.7 \times 1.22 \times 2.12} \approx \frac{2}{1.81} \approx 1.1 > 1$.
        Let's try $\omega_{gc} \approx 0.8$.
        Magnitude at $\omega=0.8$: $|G(j0.8)H(j0.8)| = \frac{2}{0.8\sqrt{1.64}\sqrt{4.64}} \approx \frac{2}{0.8 \times 1.28 \times 2.15} \approx \frac{2}{2.2} \approx 0.9 < 1$.
        So $\omega_{gc} \approx 0.75$.
        Phase at $\omega=0.75$: $-90 - \tan^{-1}(0.75) - \tan^{-1}(0.375) \approx -90 - 36.9 - 20.6 = -147.5^\circ$.
        $PM = 180^\circ + (-147.5^\circ) = 32.5^\circ$.

---

### **5. Stability Analysis using Bode Plots**

Bode plots (magnitude and phase plots versus frequency on a log scale) are a common tool for analyzing system stability.

#### **5.1 Gain Crossover Frequency ($\omega_{gc}$) and Phase Margin (PM)**

1.  **Obtain the Bode plot** of the open-loop transfer function $G(j\omega)H(j\omega)$.
2.  **Locate the gain crossover frequency ($\omega_{gc}$)**: The frequency where the magnitude plot crosses the 0 dB line.
3.  **Determine the phase at $\omega_{gc}$**: Read the phase from the phase plot at $\omega_{gc}$.
4.  **Calculate the Phase Margin (PM)**: $PM = 180^\circ + (\text{phase at } \omega_{gc})$.
    *   If $PM > 0$, the system is stable at this frequency.

#### **5.2 Phase Crossover Frequency ($\omega_{pc}$) and Gain Margin (GM)**

1.  **Locate the phase crossover frequency ($\omega_{pc}$)**: The frequency where the phase plot crosses the $-180^\circ$ line.
2.  **Determine the magnitude at $\omega_{pc}$**: Read the magnitude (in dB) from the magnitude plot at $\omega_{pc}$.
3.  **Calculate the Gain Margin (GM in dB)**: $GM_{dB} = -(\text{magnitude in dB at } \omega_{pc})$.
    *   If $GM_{dB} > 0$, the system is stable at this frequency.

#### **5.3 Stability Conditions from Bode Plots**

For a closed-loop system to be stable, based on the open-loop Bode plot:

*   **Phase Margin ($PM$) must be positive.**
*   **Gain Margin ($GM$) must be positive (or greater than 1 in absolute terms).**

#### **5.4 Example (Nise, 5th Ed., Chapter 10):** $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$

*   **Bode Plot Analysis:**
    *   Magnitude: $20 \log_{10} K - 20 \log_{10} \omega - 20 \log_{10} \sqrt{1+\omega^2} - 20 \log_{10} \sqrt{4+\omega^2}$
    *   Phase: $-90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$

    *   **Phase Crossover Frequency ($\omega_{pc}$):** Set phase to $-180^\circ$.
        $-90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2) = -180^\circ$
        $\tan^{-1}(\omega) + \tan^{-1}(\omega/2) = 90^\circ$
        This implies $\omega \to \infty$. For practical purposes, we look for where the phase *approaches* $-180^\circ$.
        As $\omega \to \infty$, the phase approaches $-90^\circ - 90^\circ - 90^\circ = -270^\circ$ (or $+90^\circ$).
        Let's reconsider the phase calculation: $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\omega) - \tan^{-1}(\omega/2)$.
        When $\omega \to \infty$, $\tan^{-1}(\omega) \to 90^\circ$ and $\tan^{-1}(\omega/2) \to 90^\circ$.
        So phase $\to -90^\circ - 90^\circ - 90^\circ = -270^\circ$.
        The phase crossover frequency $\omega_{pc}$ is where the phase is $-180^\circ$.
        This occurs when $\tan^{-1}(\omega) + \tan^{-1}(\omega/2) = 90^\circ$. This implies $\omega$ must be large.
        Let's use the property that if the open loop has poles at the origin, the phase starts at $-90^\circ$ for $\omega=0$.
        For $K=6$, $\omega_{pc} = \sqrt{2} \approx 1.414$.
        At $\omega = 1.414$:
        Phase: $-90 - \tan^{-1}(1.414) - \tan^{-1}(1.414/2) = -90 - 54.7^\circ - 30.5^\circ = -175.2^\circ$. This is close to $-180^\circ$.
        Magnitude at $\omega=1.414$: $\frac{6}{1.414\sqrt{1+1.414^2}\sqrt{4+1.414^2}} = \frac{6}{1.414\sqrt{3}\sqrt{6}} = \frac{6}{\sqrt{2}\sqrt{3}\sqrt{6}} = \frac{6}{\sqrt{36}} = 1$.
        So, for $K=6$, $\omega_{pc} = \sqrt{2}$ and the magnitude is 1 (0 dB). This corresponds to marginal stability.

    *   **Gain Margin (GM):**
        For $K=6$, $\omega_{pc} = \sqrt{2}$. Magnitude is 0 dB. $GM_{dB} = -0 = 0$ dB. $GM = 1$.
        For $K < 6$: $\omega_{pc}$ is slightly higher, and the magnitude at $\omega_{pc}$ is less than 1. So GM > 1.
        For $K > 6$: $\omega_{pc}$ is slightly lower, and the magnitude at $\omega_{pc}$ is greater than 1. So GM < 1.

    *   **Phase Margin (PM):**
        Gain crossover frequency $\omega_{gc}$ is where $|G(j\omega)H(j\omega)| = 1$.
        $\frac{K}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = 1$.
        For $K=2$: $\omega_{gc} \approx 0.75$.
        Phase at $\omega_{gc}=0.75$: $-90^\circ - \tan^{-1}(0.75) - \tan^{-1}(0.375) \approx -90^\circ - 36.9^\circ - 20.6^\circ = -147.5^\circ$.
        $PM = 180^\circ + (-147.5^\circ) = 32.5^\circ$.
        For $K=4$: $\omega_{gc}$ will be higher, phase at $\omega_{gc}$ will be more negative, so PM will be smaller.
        For $K=6$: $\omega_{gc} = \sqrt{2} \approx 1.414$.
        Phase at $\omega_{gc}=1.414$: $-90^\circ - \tan^{-1}(1.414) - \tan^{-1}(0.707) = -90^\circ - 54.7^\circ - 35.3^\circ = -180^\circ$.
        $PM = 180^\circ + (-180^\circ) = 0^\circ$. This indicates marginal stability.

#### **5.5 Relationship between Bode and Nyquist**

*   The phase crossover frequency $\omega_{pc}$ in the Bode plot corresponds to the point where the Nyquist plot crosses the negative real axis.
*   The gain crossover frequency $\omega_{gc}$ in the Bode plot corresponds to the point where the Nyquist plot crosses the unit circle.
*   A positive Phase Margin implies the Nyquist plot does not encircle (-1,0) at the unit circle crossing.
*   A positive Gain Margin implies the Nyquist plot does not encircle (-1,0) at the negative real axis crossing.

---

### **6. Relative Stability**

Relative stability refers to how stable a system is, measured by its proximity to instability. Gain and Phase Margins are measures of relative stability.

*   **Systems with larger GM and PM are considered more relatively stable.**
*   These margins give an indication of the system's damping and transient response. A system with low GM or PM may exhibit overshoot and oscillations in its transient response.

---

### **Important Points to Remember**

*   **Stability is paramount:** An unstable system is unusable.
*   **Frequency domain analysis (Nyquist, Bode) provides graphical tools to assess stability.**
*   **The Nyquist criterion relates the open-loop frequency response to closed-loop stability.**
*   **$Z = P - N$**: Count clockwise encirclements ($N$) of (-1, 0) by the Nyquist plot. $P$ is the number of RHP poles of the open-loop system. $Z$ is the number of RHP poles of the closed-loop system. For stability, $Z=0$.
*   **Bode plots provide GM and PM**, which are measures of relative stability.
*   **Positive GM and PM indicate stability.** Zero GM or PM indicates marginal stability.
*   **The Routh-Hurwitz criterion is a purely algebraic method for stability analysis**, while frequency domain methods are graphical and also provide insights into relative stability.
*   **Poles at the origin or on the jω-axis require special attention in Nyquist analysis.**

---

### **Practice Questions**

**Question 1:**
A closed-loop system has an open-loop transfer function $G(s)H(s) = \frac{10}{(s+1)(s+2)(s+3)}$.
a) Is the open-loop system stable?
b) Determine the number of RHP poles of the open-loop system ($P$).
c) Sketch the Nyquist plot for this system.
d) Use the Nyquist criterion to determine if the closed-loop system is stable.

**Answer 1:**
a) The open-loop system has poles at $s=-1, s=-2, s=-3$. All are in the LHP. Thus, the open-loop system is stable.
b) $P = 0$.
c) The Nyquist plot will start from $\infty \angle -90^\circ$ at $\omega=0^+$ and go towards the origin at $\infty \angle -270^\circ$ (or $+90^\circ$). The plot for $\omega < 0$ is the mirror image. Since there are no poles at the origin or on the jω-axis, no special semicircles are needed. The plot will be entirely in the first and fourth quadrants for $\omega > 0$, and second and third quadrants for $\omega < 0$. It will not cross the negative real axis.
d) For closed-loop stability, we need $Z=0$. The criterion is $Z = P - N$. Since $P=0$, we need $N=0$. As the Nyquist plot does not encircle the critical point (-1, 0), $N=0$. Therefore, $Z = 0 - 0 = 0$. The closed-loop system is stable.

---

**Question 2:**
For the system with open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)}$, find the range of $K$ for closed-loop stability using the Bode plot approach. Calculate the Phase Margin and Gain Margin for $K=2$.

**Answer 2:**
$G(s)H(s) = \frac{K}{s(s+1)}$
Magnitude: $|G(j\omega)H(j\omega)| = \frac{K}{\omega\sqrt{1+\omega^2}}$
Phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \tan^{-1}(\omega)$

**Stability Analysis:**
*   **Phase Crossover Frequency ($\omega_{pc}$):** The phase is $-90^\circ - \tan^{-1}(\omega)$. It never reaches $-180^\circ$. This implies that the phase margin is always positive as long as the gain crossover occurs.
*   **Gain Crossover Frequency ($\omega_{gc}$):** Set magnitude to 1.
    $\frac{K}{\omega_{gc}\sqrt{1+\omega_{gc}^2}} = 1 \implies K = \omega_{gc}\sqrt{1+\omega_{gc}^2}$
*   **Phase Margin (PM):** At $\omega_{gc}$, the phase is $-90^\circ - \tan^{-1}(\omega_{gc})$.
    $PM = 180^\circ + (-90^\circ - \tan^{-1}(\omega_{gc})) = 90^\circ - \tan^{-1}(\omega_{gc})$.
    For stability, $PM > 0$, which means $90^\circ > \tan^{-1}(\omega_{gc})$. This is true for all finite $\omega_{gc}$.
*   **Gain Margin (GM):** Since the phase never reaches $-180^\circ$, the gain margin is infinite.

**Range of K for stability:**
The system has a pole at the origin ($P=0$, $p_j=1$). For stability, $N=P+p_j = 0+1 = 1$. We need one clockwise encirclement.
The Nyquist plot starts at $\infty \angle -90^\circ$ at $\omega=0^+$ and goes to $0 \angle +90^\circ$ at $\omega \to \infty$. The semicircle around the origin maps to a semicircle from $\infty \angle -90^\circ$ to $\infty \angle +90^\circ$.
The point $(-1,0)$ is on the negative real axis. The Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega \in [0, \infty)$ is in the first and fourth quadrants. The semicircle around the origin does not encircle $(-1,0)$.
The only way to get an encirclement is if the Nyquist plot for $\omega \in [0, \infty)$ or $\omega \in (-\infty, 0]$ passes through the critical point or encircles it. Since the phase never hits $-180^\circ$, it never crosses the negative real axis.
This indicates that the system is always stable for any $K > 0$.
From Routh-Hurwitz: $1 + \frac{K}{s(s+1)} = 0 \implies s^2 + s + K = 0$.
Characteristic equation: $s^2 + s + K = 0$.
For stability, all coefficients must be positive, and by Routh-Hurwitz, the first column elements must have the same sign.
The auxiliary equation from the first column is $s + K = 0$.
The criteria are $1 > 0$, $1 > 0$, $K > 0$.
So, $K > 0$ for stability.

**For K=2:**
$|G(j\omega)H(j\omega)| = \frac{2}{\omega\sqrt{1+\omega^2}}$
Set magnitude = 1: $\frac{2}{\omega_{gc}\sqrt{1+\omega_{gc}^2}} = 1 \implies 4 = \omega_{gc}^2(1+\omega_{gc}^2)$.
Let $x = \omega_{gc}^2$. $4 = x(1+x) \implies x^2+x-4=0$.
$x = \frac{-1 \pm \sqrt{1 - 4(1)(-4)}}{2} = \frac{-1 \pm \sqrt{17}}{2}$.
Since $\omega_{gc}^2$ must be positive, $x = \omega_{gc}^2 = \frac{-1 + \sqrt{17}}{2} \approx \frac{-1 + 4.12}{2} \approx 1.56$.
$\omega_{gc} = \sqrt{1.56} \approx 1.25$ rad/sec.

**Phase Margin (PM):**
At $\omega_{gc} = 1.25$:
Phase = $-90^\circ - \tan^{-1}(1.25) \approx -90^\circ - 51.34^\circ = -141.34^\circ$.
$PM = 180^\circ + (-141.34^\circ) = 38.66^\circ$.

**Gain Margin (GM):**
Since the phase never reaches $-180^\circ$, the gain margin is infinite.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **References**

*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009):** Chapter 10 (Frequency Response Analysis and Design).
*   **Control Systems Engineering by I. J. Nagrath, M. Gopal (New Age, 5th Edition, 2009):** Chapter 13 (Frequency Domain Analysis).
*   **Automatic Control Systems by Kuo B. C (Prentice Hall of India, 9th Edition, 2014):** Chapter 10 (Stability).
*   **Modern Control Systems by Dorf R. C. , Bishop R. H (Pearson Education India, 12th Edition, 2013):** Chapter 10 (Frequency Domain Performance and Stability).
*   **Modern Control Engineering by Katsuhiko Ogata (Pearson, 5th Edition, 2009):** Chapter 9 (Stability of Linear Feedback Systems).

---
---