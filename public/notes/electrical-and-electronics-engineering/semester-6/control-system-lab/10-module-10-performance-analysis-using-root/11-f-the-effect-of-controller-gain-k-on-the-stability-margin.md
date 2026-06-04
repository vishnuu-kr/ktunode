---
title: "f. The effect of controller gain K on the stability margin"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36782"
status: "completed"
scrapedAt: "2026-05-23T16:25:30.836Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: f. The Effect of Controller Gain K on the Stability Margin

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand how the controller gain $K$ influences the stability of a closed-loop system.
*   Relate changes in $K$ to the movement of closed-loop poles on the root locus.
*   Determine the range of $K$ for which a system remains stable.
*   Analyze the impact of $K$ on damping ratio ($\zeta$) and natural frequency ($\omega_n$).
*   Quantify stability margins (gain margin and phase margin) as a function of $K$.
*   Perform practical investigations in the lab to observe these effects.

### Introduction:

The controller gain, often denoted by $K$, is a fundamental parameter in many control system designs. It directly affects the system's response characteristics, including its stability. By altering $K$, we can manipulate the location of the closed-loop poles in the complex plane, which in turn dictates the system's transient and steady-state behavior. This topic focuses on understanding this critical relationship, particularly concerning stability margins, using the powerful tool of root locus analysis.

### Key Concepts and Definitions:

*   **Closed-Loop Transfer Function (CLTF):** The transfer function of a system with feedback. For a typical unity feedback system, the CLTF is given by $T(s) = \frac{K G(s)}{1 + K G(s) H(s)}$, where $K$ is the controller gain, $G(s)$ is the plant transfer function, and $H(s)$ is the feedback path transfer function. For unity feedback, $H(s)=1$.
*   **Characteristic Equation:** The denominator of the closed-loop transfer function set to zero: $1 + K G(s) H(s) = 0$. The roots of this equation are the **closed-loop poles**.
*   **Root Locus:** A plot showing the loci of the closed-loop poles as the controller gain $K$ varies from $0$ to $\infty$. The locus starts from the open-loop poles (when $K=0$) and terminates at the open-loop zeros or at infinity (as $K \to \infty$).
*   **Stability:** A system is considered stable if all its closed-loop poles lie in the left half of the complex s-plane (i.e., have negative real parts).
*   **Marginal Stability:** A system is marginally stable if it has poles on the imaginary axis (with no poles in the right half-plane) or if it has repeated poles on the imaginary axis.
*   **Instability:** A system is unstable if it has at least one closed-loop pole in the right half of the complex s-plane (i.e., has a positive real part).
*   **Stability Margin:**
    *   **Gain Margin ($K_m$):** The factor by which the gain can be increased before the system becomes unstable. It's typically measured at the phase crossover frequency ($\omega_{pc}$), where the phase of the open-loop transfer function is $-180^\circ$. If the open-loop transfer function is $L(s) = K G(s)H(s)$, the gain margin is $20 \log_{10} \left(\frac{1}{|L(j\omega_{pc})|}\right)$ dB, or $|L(j\omega_{pc})|^{-1}$ in linear scale.
    *   **Phase Margin ($\phi_m$):** The amount of additional phase lag that can be introduced before the system becomes unstable. It's measured at the gain crossover frequency ($\omega_{gc}$), where the magnitude of the open-loop transfer function is unity ($|L(j\omega_{gc})|=1$). The phase margin is $\phi_m = 180^\circ + \angle L(j\omega_{gc})$.
*   **Damping Ratio ($\zeta$):** A dimensionless parameter that describes how oscillations decay after a disturbance. For a second-order system, $\zeta = \cos(\theta)$, where $\theta$ is the angle between the negative real axis and the line connecting the origin to the pole.
*   **Natural Frequency ($\omega_n$):** The frequency of oscillation of the system if there were no damping. For a second-order system, the pole locations are at $s = -\zeta \omega_n \pm j \omega_n \sqrt{1-\zeta^2}$. $|\text{pole}| = \omega_n$.

### 1. Effect of K on Closed-Loop Pole Locations (Root Locus):

The fundamental principle is that as $K$ increases, the closed-loop poles move along the root locus branches.

*   **Branches starting from Open-Loop Poles:** For a system with $n$ open-loop poles and $m$ open-loop zeros, there will be $n$ root locus branches. These branches originate at the open-loop poles (where $K=0$).
*   **Movement towards Open-Loop Zeros or Infinity:** As $K$ increases, these branches move towards the open-loop zeros. If there are more poles than zeros ($n > m$), some branches will tend towards infinity, typically along asymptotes.
*   **Crossing the Imaginary Axis:** The system remains stable as long as all closed-loop poles are in the left-half plane (LHP). Instability occurs when one or more poles move into the right-half plane (RHP). The point at which a root locus branch crosses the imaginary axis is a critical point, indicating marginal stability.

**Example:**

Consider a unity feedback system with an open-loop transfer function:
$G(s) = \frac{K}{s(s+2)(s+4)}$

*   Open-loop poles are at $s=0$, $s=-2$, and $s=-4$.
*   When $K=0$, the poles are at $0, -2, -4$. The pole at $s=0$ makes the system marginally stable (or even unstable if $K$ is slightly positive, leading to an open-loop pole at the origin which is typically the start of a branch).
*   As $K$ increases, the poles move. One branch will start from $s=0$ and move towards the right-half plane.
*   The other two branches will start from $s=-2$ and $s=-4$ and move towards each other, typically forming a breakaway point and then splitting to go towards infinity along asymptotes.

**Visualization:**

*   Use MATLAB's `rlocus` command to visualize the root locus.
*   Observe how increasing $K$ pushes the poles. If a pole crosses the imaginary axis ($Re(s) = 0$), the system transitions from stable to unstable.

### 2. Determining the Range of K for Stability:

The gain $K$ for which the system becomes marginally stable can be found by:

*   **Using the Routh-Hurwitz Criterion:** Substitute the characteristic equation into the Routh array. The value of $K$ that causes a row of zeros indicates marginal stability. A subsequent row of coefficients will be a polynomial whose roots lie on the imaginary axis.
*   **Finding the Imaginary Axis Crossing:** On the root locus, the imaginary axis crossing point corresponds to the value of $K$ at which the system becomes marginally stable. This $K$ is often referred to as the **critical gain ($K_{crit}$)**.

**Example (Continuing from above):**

Characteristic Equation: $1 + \frac{K}{s(s+2)(s+4)} = 0$
$s(s^2 + 6s + 8) + K = 0$
$s^3 + 6s^2 + 8s + K = 0$

Routh Array:

| $s^3$ | 1      | 8      |
| :---- | :----- | :----- |
| $s^2$ | 6      | $K$    |
| $s^1$ | $\frac{6 \times 8 - 1 \times K}{6}$ = $\frac{48-K}{6}$ | 0      |
| $s^0$ | $K$    | 0      |

For stability, all coefficients in the first column must be positive.
1.  $1 > 0$ (Always true)
2.  $6 > 0$ (Always true)
3.  $\frac{48-K}{6} > 0 \implies 48 - K > 0 \implies K < 48$
4.  $K > 0$

Therefore, for the system to be stable, $0 < K < 48$.
When $K = 48$, the $s^1$ row becomes zero, indicating marginal stability. The auxiliary polynomial from the $s^2$ row is $6s^2 + K = 6s^2 + 48 = 0 \implies s^2 = -8 \implies s = \pm j\sqrt{8} = \pm j2.828$. These are the poles on the imaginary axis.

**Important Point:** The value of $K$ at which the root locus crosses the imaginary axis is the critical gain $K_{crit}$, and for any $K > K_{crit}$, the system will be unstable (assuming the branch crosses into the RHP).

### 3. Effect of K on Stability Margins (Gain Margin and Phase Margin):

The controller gain $K$ directly influences the gain margin and phase margin.

*   **Gain Margin ($K_m$):**
    *   The root locus shows how poles move. When the system is marginally stable, the poles are on the imaginary axis. This frequency is the phase crossover frequency.
    *   The gain $K$ at the imaginary axis crossing is the critical gain $K_{crit}$. This $K_{crit}$ is precisely the gain margin in linear scale (for systems where the phase crossover frequency exists and is finite).
    *   **As $K$ increases, the system moves closer to instability.** This means the gain margin decreases.
    *   If $K$ is set below $K_{crit}$, the system has a gain margin greater than 1.

*   **Phase Margin ($\phi_m$):**
    *   The phase margin is determined by the open-loop frequency response at the gain crossover frequency ($\omega_{gc}$), where $|G(j\omega)H(j\omega)| = 1/K$.
    *   As $K$ increases, the gain crossover frequency $\omega_{gc}$ tends to shift to a higher frequency.
    *   For most minimum-phase systems, higher frequencies generally have more negative phase. Therefore, as $K$ increases, $\omega_{gc}$ increases, and the phase margin $\phi_m$ generally decreases.
    *   **Increasing $K$ often leads to a reduction in phase margin.** A lower phase margin indicates a system that is closer to instability and more prone to oscillations.

**Relationship from Root Locus:**

*   On the root locus, points on the locus correspond to specific values of $K$.
*   For a given point on the root locus $s_0$, the corresponding gain $K_0$ can be calculated: $K_0 = \frac{1}{|G(s_0)H(s_0)|}$.
*   The angle of the complex number $G(s_0)H(s_0)$ gives the phase of the open-loop transfer function at that pole location.
*   If a pole location $s_0 = j\omega_0$ is on the imaginary axis, then $K_0 = K_{crit}$, and $\angle G(j\omega_0)H(j\omega_0) = -180^\circ$. This $\omega_0$ is the phase crossover frequency.
*   The gain margin is $K_m = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|}$. If $\omega_{pc}$ is the frequency where $\angle G(j\omega_{pc})H(j\omega_{pc}) = -180^\circ$, then $K_m$ is the gain needed to put the pole on the imaginary axis.

**Nise (5th Ed., Chapter 6, Section 6.3 - Gain Margin and Phase Margin):** Discusses how gain and phase margins are related to the distance of the closed-loop poles from the critical point $(-1, j0)$ in the $N$-circle locus and also from the $1+KG(s)H(s)=0$ equation. While Nise focuses on frequency domain for stability margins, the root locus provides the underlying pole locations that determine these margins. A system with poles close to the $j\omega$ axis (e.g., with small real parts) will have small phase margins and small gain margins.

**Ogata (5th Ed., Chapter 7, Section 7-7 - Gain Margin and Phase Margin):** Ogata explains these concepts in the context of frequency response. He relates them to the distance from the $-1+j0$ point on the Nichols chart or the $M$-circle and $N$-circle on the Nyquist plot. The root locus provides the mechanism by which these frequency response characteristics change with gain. For instance, as $K$ increases, the system typically moves closer to the $-1+j0$ point in the complex plane for the open-loop transfer function, reducing the phase margin.

### 4. Effect of K on Damping Ratio ($\zeta$) and Natural Frequency ($\omega_n$):

The position of the closed-loop poles on the root locus directly affects $\zeta$ and $\omega_n$.

*   **Damping Ratio ($\zeta$):**
    *   $\zeta = \cos(\theta)$, where $\theta$ is the angle from the negative real axis to the pole.
    *   As $K$ increases, poles move. If they move towards the imaginary axis while staying in the LHP, $\theta$ increases, and $\zeta$ decreases. This means the system becomes more oscillatory.
    *   If branches move away from the imaginary axis towards the negative real axis, $\theta$ decreases, and $\zeta$ increases.
    *   **Increasing $K$ typically decreases $\zeta$** for systems where branches bend towards the imaginary axis.

*   **Natural Frequency ($\omega_n$):**
    *   $\omega_n = |\text{pole}|$, the distance of the pole from the origin.
    *   As $K$ increases, poles generally move further from the origin (towards infinity or zeros further away), thus increasing $\omega_n$.
    *   **Increasing $K$ generally increases $\omega_n$**, meaning the system responds faster.

**Example (Continuing from above):**
$s^3 + 6s^2 + 8s + K = 0$

Let's pick a value of $K$ within the stable range, say $K=30$.
$s^3 + 6s^2 + 8s + 30 = 0$
Using MATLAB or a numerical solver, the roots are approximately:
$s_1 \approx -4.95$
$s_{2,3} \approx -0.525 \pm j2.26$

Let's analyze the pole $s_{2,3} = -0.525 \pm j2.26$:
*   **$\omega_n$**: $|\text{pole}| = \sqrt{(-0.525)^2 + (2.26)^2} \approx \sqrt{0.2756 + 5.1076} \approx \sqrt{5.3832} \approx 2.32$ rad/sec.
*   **$\zeta$**: The angle from the negative real axis is $\theta = \arctan(\frac{2.26}{0.525}) \approx 76.9^\circ$.
    $\zeta = \cos(76.9^\circ) \approx 0.227$. This is a low damping ratio, indicating oscillatory behavior.

Now consider a higher $K$, say $K=100$. This value is in the RHP, so the system will be unstable. Let's pick $K=40$ (closer to stability limit).
$s^3 + 6s^2 + 8s + 40 = 0$
Roots are approximately:
$s_1 \approx -5.28$
$s_{2,3} \approx -0.36 \pm j2.73$

Analyze $s_{2,3} = -0.36 \pm j2.73$:
*   **$\omega_n$**: $|\text{pole}| = \sqrt{(-0.36)^2 + (2.73)^2} \approx \sqrt{0.1296 + 7.4529} \approx \sqrt{7.5825} \approx 2.75$ rad/sec.
    ($\omega_n$ increased from 2.32 to 2.75 as $K$ increased from 30 to 40).
*   **$\zeta$**: $\theta = \arctan(\frac{2.73}{0.36}) \approx 82.5^\circ$.
    $\zeta = \cos(82.5^\circ) \approx 0.13$.
    ($\zeta$ decreased from 0.227 to 0.13 as $K$ increased from 30 to 40).

**Observation:** As $K$ increased from 30 to 40, $\omega_n$ increased, and $\zeta$ decreased. This signifies a faster but more oscillatory response.

### 5. Practical Investigations in the Lab (CO1, CO2, CO3):

*   **System Modeling (CO1):** To analyze the effect of $K$ on stability margins, you first need a mathematical model of your physical system. This involves identifying the transfer function $G(s)$ of the plant. Experiments might involve step response, frequency response (Bode plots), or system identification techniques.
*   **Experimentation and Performance Specification Determination (CO2):**
    *   **Varying Gain:** In a real-time control system (e.g., using a microcontroller or DSP), you can directly change the proportional gain $K$ of a controller (like a PID controller where $K=K_p$).
    *   **Observing Transient Response:** Apply a known input (e.g., a step input) and observe the output.
        *   **Steady-State Error:** While not directly stability margin, gain affects steady-state error.
        *   **Overshoot and Settling Time:** These are indicators of $\zeta$ and $\omega_n$. As $K$ increases, you'll typically see increased overshoot (decreased $\zeta$) and a faster settling time (increased $\omega_n$, but can be complicated by oscillations).
        *   **Oscillations:** Notice the increase in oscillatory behavior as $K$ approaches the point of instability.
    *   **Approaching Instability:** Gradually increase $K$ until the system starts to oscillate continuously or becomes unstable. The gain value at which this occurs is the practical estimate of $K_{crit}$.
    *   **Measuring Stability Margins:** While direct measurement of gain/phase margin from a physical system can be complex without specialized equipment (like a network analyzer or spectrum analyzer), their *effects* (overshoot, oscillation frequency) are observable. You can try to infer stability margins by observing how close the system is to oscillating.
*   **Simulation Tools (CO3):**
    *   **MATLAB/Simulink:**
        *   Create a model of your system.
        *   Use the `rlocus` command to plot the root locus and identify the critical gain $K_{crit}$ where poles cross the imaginary axis.
        *   Use `margin` command on the open-loop transfer function $K G(s)H(s)$ for specific values of $K$ to find gain and phase margins. Observe how these change with $K$.
        *   Simulate the closed-loop system step response for various values of $K$ and compare overshoot, settling time, and oscillation behavior.
        *   You can also directly simulate the effect of changing $K$ in a Simulink model.

### 6. Design Implications (CO4):

*   **Trade-offs:** The controller gain $K$ offers a trade-off between speed of response and damping.
    *   Increasing $K$ generally makes the system faster (higher $\omega_n$) but less damped (lower $\zeta$), leading to more overshoot and oscillations, and reduced stability margins.
    *   Decreasing $K$ generally makes the system slower but more damped, with increased stability margins.
*   **Controller Design:** Often, a proportional controller ($u(t) = Kp \cdot e(t)$) alone might not be sufficient to meet performance requirements. If a simple gain adjustment leads to unacceptable oscillations or instability, more sophisticated controllers (like lead, lag, or PID controllers) are needed to shape the root locus and improve both transient response and stability margins independently.
*   **Root Locus Design:** By choosing a desired pole location on the root locus, one can determine the required gain $K$. This chosen pole location will have a specific $\zeta$ and $\omega_n$, and the corresponding system will have certain stability margins.

### Important Points to Remember:

*   **Root Locus is key:** It visually shows how poles move with $K$.
*   **Stability Boundary:** The imaginary axis is the boundary. Poles in the RHP mean instability.
*   **Critical Gain ($K_{crit}$):** The gain value where a pole first enters the RHP (usually by crossing the imaginary axis). For $K > K_{crit}$, the system is unstable (for minimum-phase systems where instability is caused by pole crossing into RHP).
*   **Gain Margin and $K_{crit}$:** For many systems, the gain margin is directly related to $K_{crit}$. If $K_{crit}$ is the gain to reach instability, the system can tolerate an additional gain of $K_{crit}/K_{actual}$ before becoming unstable.
*   **Phase Margin and $K$:** Increasing $K$ usually decreases the phase margin by shifting the gain crossover frequency to a higher frequency with more phase lag.
*   **$\zeta$ and $\omega_n$:** Increasing $K$ generally increases $\omega_n$ (faster response) and decreases $\zeta$ (more oscillations).
*   **Lab Validation:** Always try to validate simulation results with physical experiments. Small discrepancies are expected due to modeling errors and unmodeled dynamics.

### Practice Questions:

1.  Consider a unity feedback system with the open-loop transfer function $G(s) = \frac{K}{s(s+1)(s+3)}$.
    a.  Sketch the root locus for $K \ge 0$.
    b.  Find the critical gain $K_{crit}$ where the system becomes marginally stable.
    c.  Determine the frequency of oscillation at marginal stability.
    d.  What is the gain margin of this system for a proportional controller with gain $K=20$? (Hint: Find the frequency where the phase is $-180^\circ$ and then find the gain at that frequency in the open-loop transfer function $G(s)$).
    e.  For $K=20$, estimate the damping ratio $\zeta$ and natural frequency $\omega_n$ of the dominant closed-loop poles.

2.  You are working with a system whose root locus shows branches moving towards the imaginary axis.
    a.  If you increase the controller gain $K$, how would you expect the phase margin to change? Explain why.
    b.  If you increase the controller gain $K$, how would you expect the damping ratio $\zeta$ of the dominant poles to change? Explain why.
    c.  At what point on the root locus are the stability margins (gain and phase) typically the worst (closest to zero)?

### Answers to Practice Questions:

1.  **Open-loop Transfer Function:** $G(s) = \frac{K}{s(s+1)(s+3)}$
    **Characteristic Equation:** $1 + \frac{K}{s(s+1)(s+3)} = 0$
    $s(s^2 + 4s + 3) + K = 0$
    $s^3 + 4s^2 + 3s + K = 0$

    a.  **Root Locus Sketch:**
        *   Open-loop poles at $0, -1, -3$.
        *   No finite open-loop zeros.
        *   Three branches.
        *   Asymptotes: Number of asymptotes = $n-m = 3-0 = 3$. Angles: $\frac{(2k+1)180^\circ}{3}$ for $k=0,1,2$. Angles are $60^\circ, 180^\circ, 300^\circ$. Centroid: $\frac{0 + (-1) + (-3)}{3} = \frac{-4}{3} \approx -1.33$. So, asymptotes are at $-1.33$ with angles $60^\circ, 180^\circ, 300^\circ$.
        *   The branch starting from $s=0$ will move to the right and likely cross the imaginary axis.
        *   The branches from $s=-1$ and $s=-3$ will move towards each other, break away, and then move along asymptotes.
        *   The $180^\circ$ asymptote is along the negative real axis.

    b.  **Critical Gain $K_{crit}$:** Use Routh-Hurwitz criterion.
        Routh Array:
        | $s^3$ | 1      | 3      |
        | :---- | :----- | :----- |
        | $s^2$ | 4      | $K$    |
        | $s^1$ | $\frac{4 \times 3 - 1 \times K}{4} = \frac{12-K}{4}$ | 0      |
        | $s^0$ | $K$    | 0      |

        For stability, all first column elements must be positive: $1>0, 4>0, \frac{12-K}{4}>0, K>0$.
        $\frac{12-K}{4} > 0 \implies 12 - K > 0 \implies K < 12$.
        So, for stability, $0 < K < 12$.
        The critical gain $K_{crit} = 12$.

    c.  **Frequency of Oscillation:** At $K=K_{crit}=12$, the $s^1$ row is zero. The auxiliary polynomial from the $s^2$ row is $4s^2 + K = 0$.
        $4s^2 + 12 = 0 \implies s^2 = -3 \implies s = \pm j\sqrt{3}$.
        The frequency of oscillation is $\omega_{osc} = \sqrt{3} \approx 1.732$ rad/sec.

    d.  **Gain Margin for $K=20$:** The system is unstable for $K=20$. The question likely implies finding the gain margin *if* $K=20$ were a stable operating point, which isn't the case here. A more appropriate question would be to find the GM for a stable $K$, say $K=10$.

        Let's assume the question meant to ask for the gain margin of the *open-loop* system at the frequency where the phase is $-180^\circ$. This frequency is $\omega_{osc} = \sqrt{3}$ rad/sec.
        Open-loop transfer function: $G(j\omega) = \frac{1}{j\omega(j\omega+1)(j\omega+3)}$
        $G(j\omega) = \frac{1}{j\omega(-\omega^2 + 3j\omega + 1)}$
        $G(j\omega) = \frac{1}{j\omega(-\omega^2 + 3j\omega + 1)} = \frac{1}{-j\omega^3 - 3\omega^2 + j\omega}$
        $G(j\omega) = \frac{1}{(-3\omega^2) + j(\omega - \omega^3)}$

        We need the phase to be $-180^\circ$.
        $\angle G(j\omega) = -\arctan\left(\frac{\omega - \omega^3}{-3\omega^2}\right)$.
        Alternatively, using the poles:
        $\angle G(j\omega) = \angle\left(\frac{1}{j\omega}\right) + \angle\left(\frac{1}{j\omega+1}\right) + \angle\left(\frac{1}{j\omega+3}\right)$
        $\angle G(j\omega) = -90^\circ + \arctan\left(\frac{1}{\omega}\right) - \arctan\left(\frac{\omega}{1}\right) + \arctan\left(\frac{\omega}{3}\right)$

        Let's find the frequency where phase is $-180^\circ$. From the characteristic equation: $s^3 + 4s^2 + 3s + K = 0$.
        Substitute $s=j\omega$: $(j\omega)^3 + 4(j\omega)^2 + 3(j\omega) + K = 0$
        $-j\omega^3 - 4\omega^2 + j3\omega + K = 0$
        $(K - 4\omega^2) + j(3\omega - \omega^3) = 0$

        For the imaginary part to be zero: $3\omega - \omega^3 = 0 \implies \omega(3 - \omega^2) = 0$.
        Since $\omega \ne 0$ for phase crossover, $\omega^2 = 3 \implies \omega = \sqrt{3}$ rad/sec. This is the frequency where the phase is $-180^\circ$.

        Now, for the real part to be zero: $K - 4\omega^2 = 0$.
        $K - 4(3) = 0 \implies K = 12$. This confirms $K_{crit}=12$.

        The gain margin ($K_m$) is the factor by which the gain $K$ can be increased from the current operating point to reach instability.
        If the operating gain is $K_{op}$, and the critical gain is $K_{crit}$, the gain margin (in linear scale) is $K_m = \frac{K_{crit}}{K_{op}}$.
        For $K_{op}=10$ (stable operating point): $K_m = \frac{12}{10} = 1.2$.
        In dB: $20 \log_{10}(1.2) \approx 1.58$ dB.

        If the question literally means for $K=20$, then the system is unstable, and the gain margin is defined for stable systems or systems approaching stability from instability. If $K$ were *reduced* from 20 to 12, the gain margin would be $20/12 \approx 1.67$.

    e.  **For $K=20$**: As established, $K=20$ leads to instability. The closed-loop poles will have positive real parts. However, if we consider a stable operating point like $K=10$:
        Characteristic Equation: $s^3 + 4s^2 + 3s + 10 = 0$.
        Using MATLAB's `roots` command:
        `roots([1 4 3 10])` gives `[-4.3309, 0.1655 + 1.5173i, 0.1655 - 1.5173i]`
        The dominant poles are approximately $s_{2,3} = 0.1655 \pm j1.5173$.
        *   $\omega_n = |\text{pole}| = \sqrt{(0.1655)^2 + (1.5173)^2} \approx \sqrt{0.02739 + 2.3022} \approx \sqrt{2.3296} \approx 1.526$ rad/sec.
        *   $\theta = \arctan(\frac{1.5173}{0.1655}) \approx 83.8^\circ$.
        *   $\zeta = \cos(83.8^\circ) \approx 0.108$.
        This indicates a very oscillatory response for $K=10$.

2.  a.  **Phase Margin Change:** If you increase the controller gain $K$, the phase margin will typically **decrease**.
        **Explanation:** As $K$ increases, the magnitude plot of the open-loop transfer function $K G(j\omega)H(j\omega)$ shifts upwards. This means the gain crossover frequency ($\omega_{gc}$), where the magnitude is 1 (or 0 dB), shifts to a higher frequency. For most practical systems (minimum-phase), phase lag increases with frequency. Therefore, at the new, higher $\omega_{gc}$, the phase of the open-loop system will be more negative, resulting in a smaller phase margin.

    b.  **Damping Ratio Change:** If you increase the controller gain $K$, the damping ratio $\zeta$ of the dominant poles will typically **decrease**.
        **Explanation:** Increasing $K$ moves the closed-loop poles along the root locus branches. If these branches bend towards the imaginary axis as $K$ increases, the angle $\theta$ between the negative real axis and the pole location increases. Since $\zeta = \cos(\theta)$, an increase in $\theta$ leads to a decrease in $\zeta$, making the system more oscillatory.

    c.  **Worst Stability Margins:** Stability margins are typically the worst (closest to zero) when the closed-loop poles are **closest to the imaginary axis** (i.e., near the point of marginal stability where they cross into the RHP). This corresponds to the system being on the verge of instability, exhibiting sustained oscillations. This is where the gain margin is 1 (0 dB) and the phase margin is 0 degrees.

---
This concludes the detailed study notes for Topic f of Module 10. Remember to practice sketching root loci and using MATLAB to verify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
