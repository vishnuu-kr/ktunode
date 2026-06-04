---
title: "c. Effect of damping ratio on frequency response."
subject: "CONTROL SYSTEM LAB"
module: "Module 4: Step response and frequency response of a second order system realised using passive components"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36761"
status: "completed"
scrapedAt: "2026-05-23T16:25:10.508Z"
---
# Control System Lab: Module 4 - Second-Order System Frequency Response

## Topic: c. Effect of Damping Ratio ($\zeta$) on Frequency Response

This module focuses on understanding the frequency response characteristics of a second-order system, specifically the influence of the damping ratio ($\zeta$) on these characteristics.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Analyze** the impact of the damping ratio ($\zeta$) on the magnitude and phase plots of a second-order system's frequency response.
*   **Identify** key frequency response features like the resonant peak ($M_r$), resonant frequency ($\omega_r$), and bandwidth ($\omega_b$) and how they are affected by $\zeta$.
*   **Relate** the damping ratio to the transient response characteristics (overshoot, settling time) as observed in the frequency domain.
*   **Interpret** experimental results of frequency response for second-order systems and correlate them with theoretical predictions based on $\zeta$.
*   **Explain** the trade-offs between performance metrics (e.g., speed of response vs. damping) as seen in the frequency response.

---

### 2. Key Concepts and Definitions

#### 2.1. Second-Order System Transfer Function

The standard form of a second-order system transfer function is:

$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

Where:
*   $\omega_n$: Undamped natural frequency (rad/s) - the frequency at which the system would oscillate if there were no damping.
*   $\zeta$: Damping ratio - a dimensionless parameter that characterizes how oscillations decay after a disturbance.

#### 2.2. Frequency Response

The frequency response of a system describes how the system's output varies in amplitude and phase with respect to the frequency of a sinusoidal input. It is obtained by substituting $s = j\omega$ into the transfer function, where $\omega$ is the input frequency.

$$ G(j\omega) = \frac{\omega_n^2}{(j\omega)^2 + 2\zeta\omega_n (j\omega) + \omega_n^2} $$
$$ G(j\omega) = \frac{\omega_n^2}{-\omega^2 + j2\zeta\omega_n\omega + \omega_n^2} $$
$$ G(j\omega) = \frac{\omega_n^2}{\omega_n^2 - \omega^2 + j2\zeta\omega_n\omega} $$

We can express $G(j\omega)$ in polar form: $G(j\omega) = |G(j\omega)| e^{j\phi(\omega)}$.

*   **Magnitude Response:** $|G(j\omega)| = \frac{\omega_n^2}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$
*   **Phase Response:** $\phi(\omega) = -\arctan\left(\frac{2\zeta\omega_n\omega}{\omega_n^2 - \omega^2}\right)$

It's often convenient to normalize the frequency by dividing by $\omega_n$: Let $\rho = \frac{\omega}{\omega_n}$.

*   **Normalized Magnitude Response:** $|G(j\rho)| = \frac{1}{\sqrt{(1 - \rho^2)^2 + (2\zeta\rho)^2}}$
*   **Normalized Phase Response:** $\phi(\rho) = -\arctan\left(\frac{2\zeta\rho}{1 - \rho^2}\right)$

#### 2.3. Key Frequency Response Parameters

*   **Resonant Peak Magnitude ($M_r$):** The maximum value of the magnitude response. It indicates how much the system's output is amplified at a specific frequency.
*   **Resonant Frequency ($\omega_r$):** The frequency at which the resonant peak occurs.
*   **Bandwidth ($\omega_b$):** The range of frequencies over which the system's magnitude response is above a certain level, typically -3 dB (or $1/\sqrt{2}$ of the DC gain). It indicates the range of frequencies the system can effectively pass.

---

### 3. Effect of Damping Ratio ($\zeta$) on Frequency Response

The damping ratio $\zeta$ is crucial in shaping the frequency response of a second-order system. Let's examine its impact on the key parameters.

#### 3.1. Effect on Resonant Peak Magnitude ($M_r$) and Resonant Frequency ($\omega_r$)

*   **Resonant Frequency ($\omega_r$):**
    *   The resonant peak occurs when the denominator of the magnitude response is minimized with respect to $\omega$.
    *   This happens when $\frac{d}{d\omega}|G(j\omega)| = 0$.
    *   For $\zeta < \frac{1}{\sqrt{2}}$ (i.e., $\zeta < 0.707$), the resonant frequency is given by:
        $$ \omega_r = \omega_n \sqrt{1 - 2\zeta^2} $$
    *   **Observation:** As $\zeta$ decreases, $\omega_r$ increases. For $\zeta \ge \frac{1}{\sqrt{2}}$, there is no resonant peak, and the maximum magnitude occurs at $\omega = 0$ (DC gain).

*   **Resonant Peak Magnitude ($M_r$):**
    *   Substitute $\omega_r$ back into the magnitude response formula.
    *   For $\zeta < \frac{1}{\sqrt{2}}$:
        $$ M_r = \frac{1}{\sqrt{1 - (1 - 2\zeta^2)} + (2\zeta\sqrt{1 - 2\zeta^2})^2}} = \frac{1}{2\zeta\sqrt{1 - \zeta^2}} $$
    *   **Observation:** As $\zeta$ decreases, $M_r$ increases. A low damping ratio leads to a significant overshoot in the frequency domain, indicating the system is prone to resonance.

#### 3.2. Effect on Bandwidth ($\omega_b$)

*   The bandwidth $\omega_b$ is defined as the frequency at which $|G(j\omega)| = \frac{1}{\sqrt{2}} |G(0)|$. Since $|G(0)| = 1$ for the standard form, we set $|G(j\omega_b)| = \frac{1}{\sqrt{2}}$.
*   $$ \frac{1}{\sqrt{(1 - (\frac{\omega_b}{\omega_n})^2)^2 + (2\zeta\frac{\omega_b}{\omega_n})^2}} = \frac{1}{\sqrt{2}} $$
*   Squaring both sides and simplifying leads to:
    $$ (1 - (\frac{\omega_b}{\omega_n})^2)^2 + (2\zeta\frac{\omega_b}{\omega_n})^2 = 2 $$
    $$ 1 - 2(\frac{\omega_b}{\omega_n})^2 + (\frac{\omega_b}{\omega_n})^4 + 4\zeta^2(\frac{\omega_b}{\omega_n})^2 = 2 $$
    $$ (\frac{\omega_b}{\omega_n})^4 + (4\zeta^2 - 2)(\frac{\omega_b}{\omega_n})^2 - 1 = 0 $$
*   This is a quadratic equation in $(\frac{\omega_b}{\omega_n})^2$. Solving for it gives:
    $$ (\frac{\omega_b}{\omega_n})^2 = \frac{-(4\zeta^2 - 2) \pm \sqrt{(4\zeta^2 - 2)^2 - 4(1)(-1)}}{2} $$
    $$ (\frac{\omega_b}{\omega_n})^2 = \frac{2 - 4\zeta^2 \pm \sqrt{16\zeta^4 - 16\zeta^2 + 4 + 4}}{2} $$
    $$ (\frac{\omega_b}{\omega_n})^2 = 1 - 2\zeta^2 \pm \sqrt{4\zeta^4 - 4\zeta^2 + 2} $$
*   The positive root yields:
    $$ \omega_b = \omega_n \sqrt{1 - 2\zeta^2 + \sqrt{4\zeta^4 - 4\zeta^2 + 2}} $$
    *   **Approximation for large bandwidths (often used):** For $\zeta < 0.5$, the bandwidth is approximately $\omega_b \approx \omega_n$. For higher damping, the bandwidth decreases.
    *   **Observation:** As $\zeta$ increases, the bandwidth $\omega_b$ tends to decrease. A higher damping ratio means the system is less responsive to higher frequencies.

#### 3.3. Effect on Phase Response ($\phi(\omega)$)

*   $$ \phi(\rho) = -\arctan\left(\frac{2\zeta\rho}{1 - \rho^2}\right) $$
*   **At low frequencies ($\rho \ll 1$):** The denominator $1 - \rho^2$ approaches 1. The phase is approximately $\phi(\rho) \approx -\arctan(2\zeta\rho)$. As $\zeta$ increases, the phase lag increases more rapidly at low frequencies.
*   **Near the natural frequency ($\rho \approx 1$):**
    *   If $\zeta$ is small, $1 - \rho^2$ approaches 0. The phase lag rapidly approaches $-90^\circ$.
    *   If $\zeta$ is larger, the term $2\zeta\rho$ in the numerator becomes significant, and the phase lag approaches $-180^\circ$ more gradually.
*   **At high frequencies ($\rho \gg 1$):** The term $1 - \rho^2$ dominates and becomes negative. The argument of the arctan becomes negative, and the phase approaches $-180^\circ$.
    *   $$ \phi(\rho) \approx -180^\circ \quad \text{for } \rho \gg 1 $$
*   **Observation:**
    *   Lower $\zeta$ values result in a phase lag that stays closer to $0^\circ$ for longer, then drops rapidly towards $-180^\circ$. This is characteristic of oscillatory systems.
    *   Higher $\zeta$ values result in a more gradual increase in phase lag, staying closer to $-180^\circ$ for a wider range of frequencies. This is characteristic of overdamped or critically damped systems.

#### 3.4. Correlation with Transient Response

The frequency response is directly related to the transient response.

*   **Low $\zeta$ (e.g., $\zeta < 0.4$):**
    *   **Frequency Response:** High resonant peak ($M_r$), low resonant frequency ($\omega_r$), relatively wider bandwidth.
    *   **Transient Response:** High overshoot, pronounced oscillations, fast initial rise, slower settling due to oscillations.
*   **Medium $\zeta$ (e.g., $0.4 < \zeta < 0.7$):**
    *   **Frequency Response:** Moderate resonant peak, higher resonant frequency, moderate bandwidth.
    *   **Transient Response:** Moderate overshoot, fewer oscillations, faster settling.
*   **High $\zeta$ (e.g., $\zeta > 0.7$):**
    *   **Frequency Response:** No resonant peak ($M_r \le \sqrt{2}$), high resonant frequency (or effectively $\omega_r = 0$), narrower bandwidth.
    *   **Transient Response:** Little to no overshoot, no oscillations, slower rise time, fastest settling time.

---

### 4. Practical Realization and Lab Experiments

In the lab, you might use an RLC circuit to realize a second-order system.

*   **Series RLC Circuit:**
    $$ V_{in}(s) = (sL + R + \frac{1}{sC})I(s) $$
    $$ V_{out}(s) = \frac{1}{sC}I(s) $$
    $$ \frac{V_{out}(s)}{V_{in}(s)} = \frac{\frac{1}{sC}}{sL + R + \frac{1}{sC}} = \frac{1}{s^2LC + sRC + 1} $$
    Comparing with the standard form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
    $$ \omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}} $$
    $$ 2\zeta\omega_n = RC \implies \zeta = \frac{RC}{2\sqrt{\frac{LC}{1}}} = \frac{R}{2}\sqrt{\frac{C}{L}} $$
    By varying $R$, $L$, and $C$, you can change $\zeta$ and $\omega_n$.

*   **Lab Procedure:**
    1.  **System Configuration:** Set up an RLC circuit (series or parallel, depending on the realization).
    2.  **Varying $\zeta$:** Keep $\omega_n$ constant (by keeping $L$ and $C$ fixed) and vary the damping resistor $R$.
    3.  **Input Signal:** Apply a sinusoidal input signal with varying frequencies using a function generator.
    4.  **Measure Output:** Measure the amplitude and phase of the output voltage using an oscilloscope or a spectrum analyzer.
    5.  **Plotting:**
        *   Plot the magnitude response $|G(j\omega)|$ versus $\omega$ (Bode plot).
        *   Plot the phase response $\phi(\omega)$ versus $\omega$ (Bode plot).
    6.  **Analysis:** For each value of $R$ (and thus $\zeta$), identify $M_r$, $\omega_r$, and $\omega_b$. Observe how these parameters change as $\zeta$ changes. Compare experimental results with theoretical predictions.

---

### 5. Examples and Visualizations

Consider a second-order system with $\omega_n = 10$ rad/s. Let's see how $\zeta$ affects the magnitude response:

*   **Case 1: $\zeta = 0.1$ (Underdamped)**
    *   $\omega_r = 10 \sqrt{1 - 2(0.1)^2} = 10 \sqrt{1 - 0.02} \approx 10 \times 0.99 = 9.9$ rad/s
    *   $M_r = \frac{1}{2(0.1)\sqrt{1 - (0.1)^2}} = \frac{1}{0.2 \sqrt{0.99}} \approx \frac{1}{0.199} \approx 5.02$ (This is a very high peak, approx. 14 dB)
    *   The magnitude will peak significantly around 9.9 rad/s.

*   **Case 2: $\zeta = 0.5$ (Moderately Underdamped)**
    *   $\omega_r = 10 \sqrt{1 - 2(0.5)^2} = 10 \sqrt{1 - 0.5} = 10 \sqrt{0.5} \approx 7.07$ rad/s
    *   $M_r = \frac{1}{2(0.5)\sqrt{1 - (0.5)^2}} = \frac{1}{1 \sqrt{1 - 0.25}} = \frac{1}{\sqrt{0.75}} \approx \frac{1}{0.866} \approx 1.15$ (This is a moderate peak, approx. 1.2 dB)
    *   The magnitude will peak around 7.07 rad/s, but the peak is much smaller.

*   **Case 3: $\zeta = 1.0$ (Critically Damped)**
    *   $\omega_r$ is not defined by the formula for $\zeta < 1/\sqrt{2}$. There is no resonant peak.
    *   $M_r = 1$ (at $\omega=0$). The magnitude response starts at 1 and monotonically decreases.
    *   The magnitude will not exceed its DC value.

**Visual Representation (Conceptual Bode Plots):**

*(Imagine plots here showing $|G(j\omega)|$ vs. $\log(\omega)$ and $\phi(\omega)$ vs. $\log(\omega)$)*

*   **Magnitude Plots:**
    *   For low $\zeta$, a sharp, high peak appears before the response rolls off.
    *   As $\zeta$ increases, the peak becomes smaller and shifts to higher frequencies (or disappears).
    *   The overall roll-off rate at high frequencies (-40 dB/decade) remains the same, but the shape of the curve before the roll-off changes significantly.

*   **Phase Plots:**
    *   For low $\zeta$, the phase lag stays near 0° for a longer range of frequencies, then drops sharply.
    *   For high $\zeta$, the phase lag increases more gradually and reaches -180° more slowly.

---

### 6. Practice Questions and Exercises

**Question 1:**
A second-order system has a transfer function $G(s) = \frac{100}{s^2 + 10s + 100}$.
(a) Determine the undamped natural frequency ($\omega_n$) and the damping ratio ($\zeta$).
(b) Calculate the resonant frequency ($\omega_r$) and the resonant peak magnitude ($M_r$).
(c) Discuss how the frequency response would change if $\zeta$ were reduced to 0.2 (keeping $\omega_n$ constant).

**Answer 1:**
(a) Comparing with $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
$\omega_n^2 = 100 \implies \omega_n = 10$ rad/s.
$2\zeta\omega_n = 10 \implies 2\zeta(10) = 10 \implies 20\zeta = 10 \implies \zeta = 0.5$.

(b) Since $\zeta = 0.5 < 0.707$:
$\omega_r = \omega_n \sqrt{1 - 2\zeta^2} = 10 \sqrt{1 - 2(0.5)^2} = 10 \sqrt{1 - 0.5} = 10 \sqrt{0.5} \approx 7.07$ rad/s.
$M_r = \frac{1}{2\zeta\sqrt{1 - \zeta^2}} = \frac{1}{2(0.5)\sqrt{1 - (0.5)^2}} = \frac{1}{1 \sqrt{0.75}} = \frac{1}{\sqrt{0.75}} \approx 1.155$.

(c) If $\zeta$ were reduced to 0.2 (and $\omega_n = 10$):
*   The resonant frequency would increase: $\omega_r = 10 \sqrt{1 - 2(0.2)^2} = 10 \sqrt{1 - 0.08} = 10 \sqrt{0.92} \approx 9.59$ rad/s.
*   The resonant peak magnitude would significantly increase: $M_r = \frac{1}{2(0.2)\sqrt{1 - (0.2)^2}} = \frac{1}{0.4 \sqrt{0.96}} \approx \frac{1}{0.392} \approx 2.55$.
*   This indicates a much more pronounced resonance, with the system amplifying signals around 9.59 rad/s by a factor of about 2.55. The bandwidth would also likely increase.

**Question 2:**
For a second-order system, how does a decrease in the damping ratio affect:
(a) The resonant peak magnitude ($M_r$).
(b) The resonant frequency ($\omega_r$).
(c) The bandwidth ($\omega_b$).
(d) The phase lag at high frequencies.

**Answer 2:**
(a) A decrease in $\zeta$ **increases** $M_r$.
(b) A decrease in $\zeta$ **increases** $\omega_r$ (for $\zeta < 1/\sqrt{2}$).
(c) A decrease in $\zeta$ generally **increases** $\omega_b$.
(d) The phase lag at high frequencies (for $\rho \gg 1$) approaches $-180^\circ$ and is **largely unaffected** by the damping ratio. The primary effect of $\zeta$ is on how *quickly* the phase lag approaches $-180^\circ$.

---

### 7. Important Points to Remember

*   The damping ratio $\zeta$ is the primary determinant of the shape of the frequency response for a second-order system (along with $\omega_n$).
*   **Low $\zeta$ ($0 < \zeta < 1/\sqrt{2}$):** Results in a resonant peak ($M_r > 1$) at a resonant frequency $\omega_r < \omega_n$. The system is more oscillatory.
*   **High $\zeta$ ($\zeta \ge 1/\sqrt{2}$):** No resonant peak ($M_r \le \sqrt{2}$), system is not oscillatory.
*   As $\zeta$ decreases, $M_r$ increases, $\omega_r$ decreases, and $\omega_b$ increases.
*   The frequency response characteristics (like $M_r$, $\omega_r$) can be directly related to transient response characteristics (like overshoot, settling time).
*   The practical realization of a second-order system using passive components like RLC circuits allows for experimental verification of these theoretical concepts.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbook and Reference Material Alignment

This topic is covered in detail in the specified textbooks, particularly in chapters discussing the time and frequency response of second-order systems.

*   **Ogata, Modern Control Engineering:** Chapters on time response and frequency response of second-order systems will detail the formulas for $M_r$, $\omega_r$, $\omega_b$, and their dependence on $\zeta$.
*   **Nise, Control Systems Engineering:** Similar coverage, often with graphical representations and clear explanations of the relationship between $\zeta$ and the frequency response plots.
*   **Nagrath & Gopal, Control Systems Engineering:** Provides thorough analysis of second-order systems, including detailed derivations and graphical interpretations of frequency response characteristics versus $\zeta$.

---

### 9. Course Outcomes (COs) and Knowledge Levels (K-Levels)

This topic directly addresses the following course outcomes:

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3)**
    *   Understanding the theoretical relationship between $\zeta$ and frequency response is crucial for identifying experimental parameters (like component values that affect $\zeta$) needed to model an RLC circuit as a second-order system.
*   **CO2: Conduct suitable experiments and determine the performance specifications. (K3)**
    *   This topic directly teaches how to identify performance specifications ($M_r$, $\omega_r$, $\omega_b$) from frequency response plots and how these are influenced by $\zeta$. Students will perform experiments to measure these.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (K3)**
    *   The concepts learned here can be applied to simulate second-order systems with varying $\zeta$ in MATLAB/Simulink or other tools to visualize the frequency response and compare it with theoretical plots.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (K5)**
    *   While this specific topic focuses on analysis, understanding how $\zeta$ affects the frequency response is foundational for designing controllers. For instance, knowing that higher damping leads to no resonance and faster settling informs controller design choices for desired performance.

---