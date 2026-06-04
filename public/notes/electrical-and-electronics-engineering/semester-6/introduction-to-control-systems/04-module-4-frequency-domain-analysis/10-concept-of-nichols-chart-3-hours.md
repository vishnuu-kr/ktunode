---
title: "Concept of Nichols Chart. (3 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 4: Frequency domain analysis"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366d1"
status: "completed"
scrapedAt: "2026-05-23T16:29:59.317Z"
---
# Introduction to Control Systems - Module 4: Frequency Domain Analysis

## Topic: Concept of Nichols Chart (3 Hours)

---

### 1. Introduction to Frequency Domain Analysis and its Importance (Relating to CO4)

**What is Frequency Domain Analysis?**
Frequency domain analysis studies the behavior of a control system when subjected to sinusoidal inputs of varying frequencies. Instead of looking at the system's response over time (time domain), we analyze how the system's output magnitude and phase shift change with the input frequency.

**Why is Frequency Domain Analysis Important?**
*   **Predicting Performance:** It provides insights into system performance characteristics like bandwidth, steady-state error, and transient response (though indirectly).
*   **Stability Analysis:** It offers robust methods for determining system stability, especially for systems with time delays or complex dynamics.
*   **Robustness:** It helps in designing controllers that are less sensitive to parameter variations and disturbances.
*   **Controller Design:** Many classical controller design techniques (like lead, lag, PID) are based on frequency domain concepts.

**Key Concepts Reviewed (from previous modules and context for Nichols Chart):**
*   **Transfer Function ($G(s)$):** The fundamental representation of a linear time-invariant (LTI) system in the Laplace domain.
*   **Frequency Response:** The steady-state response of an LTI system to a sinusoidal input. If the input is $r(t) = A \sin(\omega t)$, the output is $y(t) = A|G(j\omega)| \sin(\omega t + \angle G(j\omega))$.
*   **Gain ($|G(j\omega)|$):** The ratio of the output amplitude to the input amplitude.
*   **Phase ($\angle G(j\omega)$):** The phase shift introduced by the system at a given frequency.
*   **Bode Plot:** A graphical representation of the frequency response, consisting of two plots: magnitude (in dB) vs. frequency (log scale) and phase vs. frequency (log scale).
*   **Nyquist Plot:** A polar plot of the frequency response $G(j\omega)$ in the complex plane, where the real part is the gain and the imaginary part is the phase.

---

### 2. The Concept of the Nichols Chart

The Nichols chart is a graphical tool used in control system analysis and design. It is derived from the Nyquist plot by plotting the **magnitude (in dB)** against the **phase angle (in degrees)** for the open-loop transfer function $G(j\omega)H(j\omega)$.

**Motivation for the Nichols Chart:**
While Bode plots and Nyquist plots are powerful, the Nichols chart offers a unique way to visualize the closed-loop system's performance directly from the open-loop frequency response. It directly incorporates the concept of **gain margin** and **phase margin** in a way that facilitates controller design for desired closed-loop performance.

**Key Components of the Nichols Chart:**

*   **Axes:**
    *   **Horizontal Axis:** Phase angle $\phi(\omega) = \angle G(j\omega)H(j\omega)$ in degrees, typically ranging from -180° to 0°.
    *   **Vertical Axis:** Magnitude $|G(j\omega)H(j\omega)|$ in decibels (dB).

*   **Constant Magnitude Loci (M-circles):** These are curves on the Nichols chart that represent constant values of the closed-loop magnitude $|M(\omega)|$. The closed-loop transfer function for a unity feedback system is $\frac{C(s)G(s)}{1+C(s)G(s)}$. For a general system with open-loop transfer function $G_{OL}(s) = G(s)H(s)$, the closed-loop transfer function is $\frac{G_{OL}(s)}{1+G_{OL}(s)}$. The magnitude of this is:
    $|M(\omega)| = \left|\frac{G_{OL}(j\omega)}{1+G_{OL}(j\omega)}\right|$

    Let $G_{OL}(j\omega) = X + jY$. Then $|G_{OL}(j\omega)|^2 = X^2 + Y^2$.
    $|M(\omega)| = \frac{|G_{OL}(j\omega)|}{|1+G_{OL}(j\omega)|} = \frac{\sqrt{X^2+Y^2}}{\sqrt{(1+X)^2+Y^2}}$

    If we set $|M(\omega)| = M$, where $M$ is a constant, we get:
    $M^2 = \frac{X^2+Y^2}{(1+X)^2+Y^2}$
    $M^2((1+X)^2+Y^2) = X^2+Y^2$
    $M^2(1+2X+X^2+Y^2) = X^2+Y^2$
    $M^2 + 2M^2X + M^2X^2 + M^2Y^2 = X^2+Y^2$
    $(1-M^2)X^2 + 2M^2X + (1-M^2)Y^2 = -M^2$

    Dividing by $(1-M^2)$:
    $X^2 + \frac{2M^2}{1-M^2}X + Y^2 = \frac{-M^2}{1-M^2}$
    $X^2 + \frac{2M^2}{1-M^2}X + \left(\frac{M^2}{1-M^2}\right)^2 + Y^2 = \left(\frac{M^2}{1-M^2}\right)^2 - \frac{M^2}{1-M^2}$
    $\left(X + \frac{M^2}{1-M^2}\right)^2 + Y^2 = \frac{M^4 - M^2(1-M^2)}{(1-M^2)^2} = \frac{M^4 - M^2 + M^4}{(1-M^2)^2} = \frac{2M^4 - M^2}{(1-M^2)^2}$

    This equation represents a circle with center $\left(-\frac{M^2}{1-M^2}, 0\right)$ and radius $\frac{M}{\sqrt{1-M^2}}$.
    *   For $M > 1$, the center is to the left of the X-axis, and the radius is real.
    *   For $M < 1$, the center is to the right of the X-axis, and the radius is real.
    *   For $M = 1$, the equation becomes $2X = -1$, which is a vertical line at $X = -1/2$.

    In the context of the Nichols chart, where $G_{OL}(j\omega) = X + jY$ is plotted with $|G_{OL}(j\omega)|_{dB}$ vs $\angle G_{OL}(j\omega)$, these loci represent contours of constant closed-loop gain $|M|$.

*   **Constant Phase Loci (N-circles):** These are curves on the Nichols chart that represent constant values of the closed-loop phase angle. The closed-loop phase angle is given by $\angle M(\omega) = \angle \frac{G_{OL}(j\omega)}{1+G_{OL}(j\omega)}$.
    $\angle M(\omega) = \angle G_{OL}(j\omega) - \angle (1+G_{OL}(j\omega))$

    Let $\angle G_{OL}(j\omega) = \phi$ and $|G_{OL}(j\omega)| = r$.
    $G_{OL}(j\omega) = r e^{j\phi} = r(\cos \phi + j \sin \phi)$.
    $1+G_{OL}(j\omega) = 1 + r\cos \phi + j r\sin \phi$.
    $\angle (1+G_{OL}(j\omega)) = \arctan\left(\frac{r\sin\phi}{1+r\cos\phi}\right)$.

    If we set $\angle M(\omega) = \psi$, where $\psi$ is a constant phase:
    $\psi = \phi - \arctan\left(\frac{r\sin\phi}{1+r\cos\phi}\right)$
    $\phi - \psi = \arctan\left(\frac{r\sin\phi}{1+r\cos\phi}\right)$
    $\tan(\phi - \psi) = \frac{r\sin\phi}{1+r\cos\phi}$
    $\frac{\tan\phi - \tan\psi}{1 + \tan\phi \tan\psi} = \frac{r\sin\phi}{1+r\cos\phi}$

    Substituting $\tan\phi = \sin\phi / \cos\phi$:
    $\frac{\sin\phi/\cos\phi - \tan\psi}{1 + (\sin\phi/\cos\phi)\tan\psi} = \frac{r\sin\phi}{1+r\cos\phi}$
    $\frac{\sin\phi - \cos\phi\tan\psi}{\cos\phi + \sin\phi\tan\psi} = \frac{r\sin\phi}{1+r\cos\phi}$

    After algebraic manipulation (as shown in Nise, Chapter 10 or Nagrath & Gopal, Chapter 11), these loci can be shown to be segments of circles. These curves represent contours of constant closed-loop phase shift.

**Important Note:** The Nichols chart typically plots the open-loop transfer function $G_{OL}(j\omega) = G(j\omega)H(j\omega)$. For unity feedback systems, $H(j\omega) = 1$, so we plot $G(j\omega)$.

---

### 3. Construction and Interpretation of the Nichols Chart

**Construction Steps:**

1.  **Obtain the Open-Loop Transfer Function:** Start with the open-loop transfer function $G_{OL}(s) = G(s)H(s)$.
2.  **Substitute $s = j\omega$:** Replace $s$ with $j\omega$ to get the frequency response function $G_{OL}(j\omega)$.
3.  **Calculate Magnitude and Phase:** For a range of frequencies $\omega$ from 0 to $\infty$, calculate:
    *   Magnitude: $|G_{OL}(j\omega)|$
    *   Magnitude in dB: $|G_{OL}(j\omega)|_{dB} = 20 \log_{10}|G_{OL}(j\omega)|$
    *   Phase: $\angle G_{OL}(j\omega)$ in degrees.
4.  **Plot the Open-Loop Frequency Response:** Plot the calculated $|G_{OL}(j\omega)|_{dB}$ values on the vertical axis against the corresponding $\angle G_{OL}(j\omega)$ values on the horizontal axis. This curve is the **open-loop frequency response curve**.
5.  **Overlay M- and N-Circles:** Draw the constant magnitude (M) circles and constant phase (N) circles on the same graph.

**Interpreting the Nichols Chart:**

The Nichols chart allows us to directly read closed-loop performance metrics from the open-loop frequency response curve.

*   **Closed-Loop Magnitude:** To find the closed-loop magnitude $|M(\omega)|$ at a specific frequency $\omega$, find the point on the open-loop frequency response curve that corresponds to the phase of $G_{OL}(j\omega)$ at that frequency. Then, look at which M-circle this point lies on. The value of this M-circle is the closed-loop gain $|M(\omega)|$.
*   **Closed-Loop Phase:** Similarly, to find the closed-loop phase $\angle M(\omega)$ at a specific frequency, find the point on the open-loop curve corresponding to the phase of $G_{OL}(j\omega)$. Then, look at which N-circle this point lies on. The value of this N-circle is the closed-loop phase $\angle M(\omega)$.

**Stability Analysis on the Nichols Chart:**

The most crucial application of the Nichols chart is stability analysis and the determination of gain and phase margins.

*   **Gain Margin ($K_M$):** The gain margin is the factor by which the gain can be increased before the closed-loop system becomes unstable.
    *   On the Nichols chart, instability occurs when the open-loop Nyquist locus encircles the point $(-1, 0)$ in the Nyquist plane. This corresponds to $1 + G_{OL}(j\omega) = 0$, meaning $G_{OL}(j\omega) = -1$.
    *   In terms of magnitude and phase, this is $|G_{OL}(j\omega)| = 1$ (or 0 dB) and $\angle G_{OL}(j\omega) = -180^\circ$.
    *   The Nichols chart is constructed such that the point $|G_{OL}(j\omega)|_{dB} = 0$ and $\angle G_{OL}(j\omega) = -180^\circ$ is a critical point.
    *   The Nichols chart typically includes a **0 dB line** and the **-180° phase line**. The intersection of the open-loop frequency response curve with the -180° phase line corresponds to a gain of $K_{OL} = |G_{OL}(j\omega)|$ at that phase.
    *   The Nichols chart has **constant gain loci** that pass through the critical point $(-1, 0)$ of the Nyquist plane, which corresponds to $|G_{OL}(j\omega)|_{dB} = 0$ and $\angle G_{OL}(j\omega) = -180^\circ$.
    *   **Gain Margin ($K_M$) is the gain value (in absolute terms, not dB) of the $0$ dB line relative to the open-loop gain at $-180^\circ$ phase.**  If the open-loop curve crosses the $-180^\circ$ line at a magnitude of $M_{OL}$ (in dB), then the gain margin is $K_M = -M_{OL}$ (in dB).

*   **Phase Margin ($\phi_M$):** The phase margin is the additional phase lag required at the gain crossover frequency (where $|G_{OL}(j\omega)|_{dB} = 0$) to cause instability.
    *   Instability occurs when the gain is 1 (0 dB) and the phase is -180°.
    *   The phase margin is determined at the frequency where the open-loop gain is 0 dB (i.e., where the open-loop frequency response curve intersects the 0 dB line).
    *   At this intersection point, the phase angle is $\angle G_{OL}(j\omega)$.
    *   The phase margin $\phi_M = 180^\circ + \angle G_{OL}(j\omega)$ (where $\angle G_{OL}(j\omega)$ is the phase at the gain crossover frequency).
    *   The Nichols chart has **constant phase loci** that indicate the phase margin. A point on the 0 dB line with phase $\phi$ means the phase margin is $180^\circ + \phi$.

**Relationship between Nichols Chart, Nyquist Plot, and Bode Plot:**

*   **Nyquist Plot $\rightarrow$ Nichols Chart:** The Nichols chart is a transformation of the Nyquist plot. The angle axis of the Nyquist plot is mapped to the phase axis of the Nichols chart, and the magnitude of the Nyquist vector is mapped to the dB magnitude axis of the Nichols chart. Specifically, if a point on the Nyquist plot is $x+jy$, its magnitude is $\sqrt{x^2+y^2}$ and its angle is $\arctan(y/x)$. The Nichols chart uses the angle and $20\log_{10}(\text{magnitude})$.
*   **Bode Plot $\rightarrow$ Nichols Chart:** The Nichols chart is essentially a combination of the magnitude and phase plots from the Bode plot, rearranged. The phase from the Bode plot's phase plot becomes the horizontal axis, and the magnitude (in dB) from the Bode plot's magnitude plot becomes the vertical axis.

---

### 4. Performance Specifications and Controller Design using Nichols Chart (Relating to CO4)

The Nichols chart is a powerful tool for designing controllers to meet specific closed-loop performance requirements, such as:

*   **Phase Margin ($\phi_M$):** A measure of relative stability. A larger phase margin generally leads to a more stable system with less overshoot.
*   **Gain Margin ($K_M$):** Another measure of relative stability.
*   **Bandwidth ($\omega_{BW}$):** The range of frequencies over which the system can effectively track input signals. It's often related to the speed of response. On the Nichols chart, the bandwidth is related to the frequency at which the closed-loop magnitude $|M(\omega)|$ drops by 3 dB from its low-frequency value.
*   **Peak Magnitude ($M_p$) and Peak Frequency ($\omega_{p}$):** $M_p$ is the maximum value of the closed-loop magnitude $|M(\omega)|$. A high $M_p$ indicates a highly oscillatory response. $\omega_p$ is the frequency at which this peak occurs.

**Designing for Desired Phase Margin:**

1.  **Identify the Gain Crossover Frequency ($ \omega_{gc} $):** This is the frequency where the open-loop magnitude is 0 dB.
2.  **Desired Phase Margin:** Let the desired phase margin be $\phi_{M,desired}$.
3.  **Required Phase at Gain Crossover:** The required phase of $G_{OL}(j\omega)$ at the gain crossover frequency is $\angle G_{OL}(j\omega)_{required} = -180^\circ + \phi_{M,desired}$.
4.  **Controller Design:** If the current phase margin is insufficient, we need to add a phase-lead network or increase the system gain (if possible and stable).
    *   **Phase-Lead Network:** A phase-lead compensator adds phase lead in a specific frequency range. The Nichols chart helps determine the required lead to shift the open-loop curve to meet the desired phase at the gain crossover frequency.
    *   **Gain Adjustment:** If the phase margin is sufficient but the gain crossover frequency is not ideal, or if the bandwidth needs adjustment, gain can be adjusted. The Nichols chart allows direct visualization of gain changes.

**Designing for Desired Peak Magnitude ($M_p$):**

1.  **Desired Peak Magnitude:** Let the desired peak magnitude be $M_{p,desired}$.
2.  **Target M-Circle:** Locate the M-circle corresponding to $M_{p,desired}$ on the Nichols chart.
3.  **Control the Open-Loop Curve:** The goal is to shape the open-loop frequency response curve so that it passes through the desired M-circle at the frequency where the open-loop magnitude is maximum (or close to it).
4.  **Controller Design:** Phase-lead or lag compensators can be used to shape the open-loop curve to intersect the desired M-circle at the appropriate phase.

**Example Scenario:**

Consider a system with open-loop transfer function $G_{OL}(s) = \frac{K}{s(s+1)(s+2)}$. We want to design a controller to achieve a phase margin of 45° and a peak closed-loop magnitude of 2 (i.e., 6 dB).

**Steps:**

1.  **Plot the Open-Loop Frequency Response:** For $G_{OL}(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+2)}$. Calculate $|G_{OL}(j\omega)|_{dB}$ and $\angle G_{OL}(j\omega)$ for various $\omega$.
2.  **Overlay M and N Circles:** Draw the standard M and N circles.
3.  **Check Initial Performance:** Observe the open-loop curve.
    *   Find the frequency where $\angle G_{OL}(j\omega) = -180^\circ$. The corresponding magnitude (in dB) is $-K_M$. The gain margin is $K_M$ (in dB).
    *   Find the frequency where $|G_{OL}(j\omega)|_{dB} = 0$. The corresponding phase is $\angle G_{OL}(j\omega)$. The phase margin is $\phi_M = 180^\circ + \angle G_{OL}(j\omega)$.
    *   Find the point on the open-loop curve that lies on the desired $M_p$ circle (6 dB). The frequency at this point is related to $\omega_p$.
4.  **Controller Design (if needed):**
    *   If the phase margin is less than 45°, a phase-lead compensator might be needed. This compensator would shift the open-loop curve to the left in the Nichols chart, increasing the phase margin at the gain crossover frequency.
    *   If the peak magnitude is not 6 dB, the gain $K$ or the compensator parameters would be adjusted to make the open-loop curve intersect the 6 dB M-circle at the desired frequency.

**Gain Adjustment:** Increasing $K$ shifts the entire open-loop curve upwards (increases magnitude in dB) for all frequencies. This affects both gain and phase margins.

---

### 5. Advantages and Disadvantages of the Nichols Chart

**Advantages:**

*   **Direct Visualization of Closed-Loop Performance:** Unlike Bode or Nyquist plots, the Nichols chart allows direct reading of closed-loop magnitude and phase from the open-loop curve.
*   **Ease of Gain Adjustment:** Changing the system gain ($K$) corresponds to vertically shifting the entire open-loop curve on the Nichols chart, making it easy to see the effect on stability margins and performance.
*   **Simultaneous Gain and Phase Margin Information:** Both gain and phase margins are readily available.
*   **Convenient for Controller Design:** Particularly useful for designing phase-lead and phase-lag compensators to meet specific stability and performance criteria.
*   **Relates well to Performance Specifications:** Directly shows the impact of open-loop shaping on closed-loop peak overshoot ($M_p$) and bandwidth.

**Disadvantages:**

*   **Requires Plotting Open-Loop Response:** Still requires calculating the frequency response of the open-loop transfer function.
*   **Less Intuitive for Initial System Understanding:** While powerful for design, initial system analysis might be more straightforward with Bode or Nyquist plots for understanding basic stability and frequency response characteristics.
*   **Limited to Unity or Known Feedback:** The standard chart is for unity feedback. For non-unity feedback, the plotting or interpretation can become more complex.
*   **Manual Construction Can Be Tedious:** While software is common, manual construction of the chart with M and N circles can be time-consuming.

---

### 6. Practice Questions and Exercises

**Question 1:**
Given an open-loop transfer function $G_{OL}(s) = \frac{10}{s(s+1)}$.
(a) Sketch the Nichols chart for this system, including the open-loop frequency response curve and the relevant M and N circles.
(b) Determine the gain margin and phase margin from the chart.
(c) If the desired phase margin is 60°, what adjustment in gain would be required? What is the new gain margin? (Assume the original system has sufficient phase margin).

**Question 2:**
The open-loop transfer function of a unity feedback system is $G(s) = \frac{K}{s^2+2s+2}$.
(a) For $K=1$, sketch the Nichols plot.
(b) Determine the phase margin and gain margin.
(c) If the system is required to have a peak closed-loop magnitude of 3 dB, what value of $K$ should be chosen? What are the phase and gain margins for this value of $K$?

**Question 3:**
Explain the relationship between the Nichols chart and the Nyquist plot in terms of how they represent the frequency response of a system. How does the Nichols chart facilitate the direct interpretation of closed-loop performance metrics?

---

### 7. Answers to Practice Questions

**Answer 1:**

(a) **Sketching the Nichols Chart:**
*   Calculate $G_{OL}(j\omega) = \frac{10}{j\omega(j\omega+1)}$.
*   Magnitude: $|G_{OL}(j\omega)| = \frac{10}{\omega\sqrt{1+\omega^2}}$.
*   Phase: $\angle G_{OL}(j\omega) = -90^\circ - \arctan(\omega)$.
*   Convert magnitude to dB: $|G_{OL}(j\omega)|_{dB} = 20 \log_{10}\left(\frac{10}{\omega\sqrt{1+\omega^2}}\right) = 20 - 20 \log_{10}(\omega) - 10 \log_{10}(1+\omega^2)$.
*   Plot $|G_{OL}(j\omega)|_{dB}$ vs $\angle G_{OL}(j\omega)$ for $\omega = 0 \to \infty$.
    *   As $\omega \to 0$: $|G_{OL}|_{dB} \to \infty$, $\angle G_{OL} \to -90^\circ$.
    *   As $\omega \to \infty$: $|G_{OL}|_{dB} \to -\infty$, $\angle G_{OL} \to -180^\circ$.
*   The curve will start from the top of the chart at $-90^\circ$ and move towards the bottom at $-180^\circ$.
*   Overlay M and N circles. The critical point is at $(-180^\circ, 0 \text{ dB})$.

(b) **Gain Margin and Phase Margin:**
*   **Phase Margin:** Find the frequency where $|G_{OL}(j\omega)|_{dB} = 0$. Let's assume at some frequency $\omega_1$, $20 - 20 \log_{10}(\omega_1) - 10 \log_{10}(1+\omega_1^2) = 0$. The phase at this frequency is $\angle G_{OL}(j\omega_1) = -90^\circ - \arctan(\omega_1)$. The phase margin is $\phi_M = 180^\circ + \angle G_{OL}(j\omega_1)$. (Actual calculation will yield a specific value).
*   **Gain Margin:** Find the frequency where $\angle G_{OL}(j\omega) = -180^\circ$. This happens as $\omega \to \infty$. However, for a proper system, we need to find the point where the curve approaches $-180^\circ$. For $G_{OL}(s) = \frac{K}{s^2}$ ($\omega \to \infty$, phase $\to -180^\circ$), the magnitude is $K/\omega^2$. For $G_{OL}(s) = \frac{K}{s(s+a)}$, as $\omega \to \infty$, phase $\to -180^\circ$. The magnitude approaches $K/\omega^2$.
    For $G_{OL}(s) = \frac{10}{s(s+1)}$:
    As $\omega \to \infty$, $\angle G_{OL}(j\omega) \to -180^\circ$. The magnitude is $\frac{10}{\omega^2}$. This goes to 0 dB as $\omega \to \infty$.
    The gain margin is theoretically infinite for this system as the phase never reaches $-180^\circ$ before the magnitude goes to $-\infty$. However, if we consider the system $G_{OL}(s) = \frac{K}{s(s+1)}$ and we are interested in the gain at $-180^\circ$, we would look for the gain when the phase is $-180^\circ$.

    **Let's re-evaluate with a standard example where GM is finite:**
    Consider $G_{OL}(s) = \frac{10}{s(s+1)(s+2)}$.
    At $-180^\circ$ phase: $-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$.
    $\arctan(\omega) + \arctan(\omega/2) = 90^\circ$. This happens as $\omega \to \infty$.
    Magnitude at infinite frequency is 0. So, $GM = \infty$.

    **Let's use the given example $G_{OL}(s) = \frac{10}{s(s+1)}$ but consider a modified scenario to illustrate GM.**
    Suppose we are trying to achieve $-180^\circ$ phase. For $G_{OL}(s) = \frac{10}{s(s+1)}$, the phase approaches $-180^\circ$ asymptotically as $\omega \to \infty$. The magnitude at these high frequencies is very small.
    **Let's consider the gain crossover frequency to find the phase margin.**
    We need to find $\omega$ such that $|G_{OL}(j\omega)|_{dB} = 0$.
    $20 - 20 \log_{10}(\omega) - 10 \log_{10}(1+\omega^2) = 0$.
    Approximate solution: At $\omega=1$, $|G_{OL}|_{dB} = 20 - 0 - 10 \log_{10}(2) = 20 - 3.01 = 16.99$ dB.
    At $\omega=2$, $|G_{OL}|_{dB} = 20 - 20 \log_{10}(2) - 10 \log_{10}(5) = 20 - 6.02 - 6.99 = 7.99$ dB.
    At $\omega=3$, $|G_{OL}|_{dB} = 20 - 20 \log_{10}(3) - 10 \log_{10}(10) = 20 - 9.54 - 10 = 0.46$ dB.
    So, gain crossover frequency $\omega_{gc} \approx 3$ rad/s.
    At $\omega \approx 3$, phase $\angle G_{OL}(j3) = -90^\circ - \arctan(3) \approx -90^\circ - 71.56^\circ = -161.56^\circ$.
    Phase Margin $\phi_M = 180^\circ - 161.56^\circ = 18.44^\circ$.
    **Gain Margin:** Since the phase approaches $-180^\circ$ as $\omega \to \infty$ and the magnitude is decreasing, the gain margin is $\infty$ dB.

(c) **Adjusting for 60° Phase Margin:**
The current phase margin is about $18.44^\circ$. We need to increase it to $60^\circ$.
At the gain crossover frequency ($\omega_{gc} \approx 3$ rad/s), the phase is $-161.56^\circ$. We need the phase to be $-180^\circ + 60^\circ = -120^\circ$ at this frequency.
This requires adding approximately $120^\circ - 161.56^\circ = -41.56^\circ$. This means we need to add phase lead.
Alternatively, if we need to increase the phase margin by increasing the gain, we would shift the curve upwards. But increasing gain usually decreases phase margin.

**Let's assume the question meant to adjust gain to get a desired phase margin or peak magnitude.**
If we need a phase margin of $60^\circ$: The required phase at the gain crossover frequency is $-120^\circ$.
We have $G_{OL}(j\omega) = \frac{K}{j\omega(j\omega+1)}$.
Phase: $-90^\circ - \arctan(\omega)$.
We need $-90^\circ - \arctan(\omega) = -120^\circ \implies \arctan(\omega) = 30^\circ \implies \omega = \tan(30^\circ) = 1/\sqrt{3} \approx 0.577$ rad/s.
At this frequency, we want the magnitude to be 0 dB.
$|G_{OL}(j\omega)|_{dB} = 20 \log_{10}\left(\frac{K}{\omega\sqrt{1+\omega^2}}\right) = 0$
At $\omega = 1/\sqrt{3}$:
$|G_{OL}(j1/\sqrt{3})|_{dB} = 20 \log_{10}\left(\frac{K}{(1/\sqrt{3})\sqrt{1+(1/3)}}\right) = 20 \log_{10}\left(\frac{K}{(1/\sqrt{3})\sqrt{4/3}}\right) = 20 \log_{10}\left(\frac{K}{(1/\sqrt{3})(2/\sqrt{3})}\right) = 20 \log_{10}\left(\frac{K}{2/3}\right) = 20 \log_{10}\left(\frac{3K}{2}\right)$.
For this to be 0 dB: $\frac{3K}{2} = 1 \implies K = 2/3$.
So, if we set $K=2/3$, the phase margin will be $60^\circ$.
The original system had $K=10$.
The new gain is $2/3$. The gain adjustment is $20 \log_{10}( (2/3) / 10 ) = 20 \log_{10}(2/30) = 20 \log_{10}(1/15) \approx -23.5$ dB. This means we are decreasing the gain.
The new gain margin will be $\infty$ dB, as the phase still approaches $-180^\circ$ asymptotically.

**Answer 2:**

(a) **Nichols Plot for $G(s) = \frac{1}{s^2+2s+2}$ ($K=1$):**
*   $G(j\omega) = \frac{1}{-\omega^2+2j\omega+2} = \frac{1}{(2-\omega^2)+j2\omega}$.
*   $|G(j\omega)| = \frac{1}{\sqrt{(2-\omega^2)^2 + (2\omega)^2}} = \frac{1}{\sqrt{4-4\omega^2+\omega^4 + 4\omega^2}} = \frac{1}{\sqrt{\omega^4+4}}$.
*   $\angle G(j\omega) = -\arctan\left(\frac{2\omega}{2-\omega^2}\right)$.
*   $|G(j\omega)|_{dB} = -10 \log_{10}(\omega^4+4)$.
*   Plot $|G(j\omega)|_{dB}$ vs $\angle G(j\omega)$.
    *   As $\omega \to 0$: $|G|_{dB} \to -10 \log_{10}(4) = -6.02$ dB, $\angle G \to 0^\circ$.
    *   As $\omega \to \infty$: $|G|_{dB} \to -\infty$, $\angle G \to -180^\circ$.
    *   The phase starts at 0°, goes through negative values, and approaches $-180^\circ$. The magnitude starts at -6.02 dB and goes to $-\infty$.

(b) **Phase Margin and Gain Margin:**
*   Find $\omega_{gc}$ where $|G(j\omega)|_{dB} = 0$. $-10 \log_{10}(\omega^4+4) = 0 \implies \omega^4+4 = 1 \implies \omega^4 = -3$. This is not possible, meaning the gain never reaches 0 dB.
    *   **Important Correction:** The given system $G(s) = \frac{1}{s^2+2s+2}$ has a maximum magnitude at $\omega = 0$. The initial magnitude is -6.02 dB, which is already below 0 dB. This means the gain margin is infinite, and the phase margin will be the phase at 0 dB, which is never reached.
    *   **Let's assume the question meant $K$ is applied to the system.**
    Let's consider $G_{OL}(s) = \frac{K}{s^2+2s+2}$.
    *   **Gain Crossover Frequency:** $|G_{OL}(j\omega)|_{dB} = 0 \implies 20 \log_{10} K - 10 \log_{10}(\omega^4+4) = 0$.
        $20 \log_{10} K = 10 \log_{10}(\omega^4+4)$
        $2 \log_{10} K = \log_{10}(\omega^4+4)$
        $\log_{10} K^2 = \log_{10}(\omega^4+4)$
        $K^2 = \omega^4+4$.
    *   **Phase at Gain Crossover:** $\angle G_{OL}(j\omega) = - \arctan\left(\frac{2\omega}{2-\omega^2}\right)$.
    *   **Phase Margin:** $\phi_M = 180^\circ - \arctan\left(\frac{2\omega}{2-\omega^2}\right)$.
    *   **Gain Margin:** Find $\omega$ where $\angle G_{OL}(j\omega) = -180^\circ$. This happens as $\omega \to \infty$.
        $- \arctan\left(\frac{2\omega}{2-\omega^2}\right) = -180^\circ$.
        $\arctan\left(\frac{2\omega}{2-\omega^2}\right) = 180^\circ$. This only happens if the argument is 0, but the argument goes to $- \infty$ as $\omega \to \infty$ (since $2-\omega^2$ is negative).
        If $\omega \to \infty$, the phase is $-180^\circ$. At this frequency, $|G_{OL}(j\omega)|_{dB} = 20 \log_{10} K - \infty = -\infty$. So, GM is $\infty$.

    **Let's re-interpret the question's intent:** Perhaps the intention was to find the phase and gain crossover frequencies for $K=1$ and then analyze the resulting margins.
    For $K=1$: $|G(j\omega)|_{dB} = -10 \log_{10}(\omega^4+4)$. The peak magnitude is -6.02 dB at $\omega=0$.
    The frequency at which the magnitude is $0$ dB is never reached. This implies an infinite gain margin.
    The phase margin is found at the frequency where the magnitude is $0$ dB. Since $0$ dB is never reached, we can't find a phase margin in the traditional sense for this system with $K=1$.

    **Let's assume a hypothetical $\omega_{gc}$ to illustrate the process if the gain was higher.**
    If, hypothetically, the gain crossover frequency was $\omega_{gc}=1$ rad/s:
    Phase at $\omega=1$: $\angle G(j1) = -\arctan\left(\frac{2}{2-1}\right) = -\arctan(2) \approx -63.4^\circ$.
    Phase Margin = $180^\circ - 63.4^\circ = 116.6^\circ$.

(c) **Peak Closed-Loop Magnitude of 3 dB:**
We want the maximum value of $|M(\omega)|$ to be $3$ dB. On the Nichols chart, this means the open-loop curve should touch or pass through the 3 dB M-circle at its highest point.
We need to find $K$ such that the open-loop curve passes through the 3 dB M-circle.
This requires finding the frequency $\omega_p$ where the peak closed-loop magnitude occurs.
The closed-loop magnitude is $|M(\omega)| = \left|\frac{G_{OL}(j\omega)}{1+G_{OL}(j\omega)}\right|$.
We want $\max|M(\omega)| = \sqrt{10^{3/10}} \approx 1.41$.
Let $G_{OL}(j\omega) = X+jY$.
$|M(\omega)| = \frac{|G_{OL}(j\omega)|}{|1+G_{OL}(j\omega)|}$.
The peak closed-loop magnitude $M_p$ and peak frequency $\omega_p$ are related to the M-circles.
On the Nichols chart, we look for the frequency where the open-loop curve intersects the $M=3$ dB circle.
The equation for the M-circles is $|M| = \frac{|G_{OL}|}{|1+G_{OL}|}$.
When $|M|=3$, $|G_{OL}|= \frac{3}{|1+3e^{j\phi}|}$. This is more complicated to solve directly.

**Let's use the property that the peak magnitude occurs on the M-circle.**
We need to find $K$ such that the open-loop curve passes through the $M=3$ dB circle.
The Nichols chart construction means if a point on the open-loop curve lies on the $M_c$ dB M-circle, then the closed-loop magnitude at that frequency is $M_c$ dB.
So we need to find $K$ such that the open-loop curve $G_{OL}(j\omega) = \frac{K}{-\omega^2+2j\omega+2}$ intersects the $M=3$ dB circle.

Let's consider the gain crossover frequency for a chosen $K$.
If $K=2$:
$|G_{OL}(j\omega)|_{dB} = 20 \log_{10}(2) - 10 \log_{10}(\omega^4+4) = 6.02 - 10 \log_{10}(\omega^4+4)$.
For gain crossover (0 dB): $6.02 = 10 \log_{10}(\omega^4+4) \implies \log_{10}(\omega^4+4) = 0.602 \implies \omega^4+4 = 10^{0.602} \approx 4$.
$\omega^4 \approx 0 \implies \omega \approx 0$.
At $\omega=0$: Phase is $0^\circ$. Phase margin is $180^\circ$.
The curve at $K=2$ starts at $6.02$ dB and phase $0^\circ$.

To achieve $M_p = 3$ dB, we need to find $K$.
The frequency where the open-loop curve hits the 3 dB M-circle gives the peak frequency $\omega_p$.
From textbook examples (e.g., Nise, Fig. 10.20), a peak magnitude of 3 dB often occurs when the open-loop phase margin is around 45-55 degrees.

Let's try to find $\omega$ where the open-loop phase is around $-135^\circ$ (to get a decent phase margin) and see the magnitude.
Phase $= -\arctan\left(\frac{2\omega}{2-\omega^2}\right) = -135^\circ$.
$\arctan\left(\frac{2\omega}{2-\omega^2}\right) = 135^\circ$.
$\frac{2\omega}{2-\omega^2} = \tan(135^\circ) = -1$.
$2\omega = -(2-\omega^2) = -2+\omega^2$.
$\omega^2 - 2\omega - 2 = 0$.
$\omega = \frac{2 \pm \sqrt{4 - 4(1)(-2)}}{2} = \frac{2 \pm \sqrt{12}}{2} = 1 \pm \sqrt{3}$.
Since $\omega > 0$, $\omega = 1 + \sqrt{3} \approx 2.732$ rad/s.
At this phase, $|G(j\omega)|_{dB} = -10 \log_{10}((1+\sqrt{3})^4+4) = -10 \log_{10}((2.732)^4+4) \approx -10 \log_{10}(56.8+4) \approx -10 \log_{10}(60.8) \approx -17.8$ dB.
So, for $K=1$, the phase margin is $180^\circ - (-135^\circ) = 45^\circ$ at $\omega \approx 2.732$. At this point, the magnitude is -17.8 dB.

To get $M_p=3$ dB, the open-loop curve must pass through the 3 dB M-circle. This typically occurs at a frequency where the phase margin is around 45-55 degrees.
If $\omega_{gc}$ is such that phase is $-135^\circ$, then $\phi_M = 45^\circ$.
Let's try to find $K$ such that the magnitude is 3 dB at this phase.
$|G_{OL}(j\omega)|_{dB} = 20 \log_{10} K - 17.8$ dB.
We want this to be 3 dB.
$20 \log_{10} K - 17.8 = 3 \implies 20 \log_{10} K = 20.8 \implies \log_{10} K = 1.04 \implies K = 10^{1.04} \approx 10.96$.
So, for $K \approx 11$, the peak magnitude will be approximately 3 dB.

**Phase and Gain Margins for $K \approx 11$:**
*   Gain Crossover Frequency: $11^2 = \omega^4+4 \implies 121 = \omega^4+4 \implies \omega^4 = 117 \implies \omega_{gc} = (117)^{1/4} \approx 3.29$ rad/s.
*   Phase at $\omega_{gc} \approx 3.29$: $\angle G_{OL}(j3.29) = -\arctan\left(\frac{2 \times 3.29}{2-(3.29)^2}\right) = -\arctan\left(\frac{6.58}{2-10.82}\right) = -\arctan\left(\frac{6.58}{-8.82}\right) = -\arctan(-0.746)$.
    Since the denominator $(2-\omega^2)$ is negative, the phase angle is in the second quadrant.
    $\arctan(-0.746) \approx -36.7^\circ$. Phase is $-180^\circ + 36.7^\circ = -143.3^\circ$.
    Phase Margin $\phi_M = 180^\circ - 143.3^\circ = 36.7^\circ$.
*   Gain Margin is $\infty$ dB.

**Answer 3:**

*   **Relationship between Nichols and Nyquist:** Both plots represent the frequency response $G_{OL}(j\omega)$. The Nyquist plot is a polar plot in the $G_{OL}(j\omega)$ complex plane. The Nichols chart is a transformation of the Nyquist plot. The phase angle of the Nyquist plot becomes the horizontal axis of the Nichols chart. The magnitude of the Nyquist plot vector is converted to decibels and plotted on the vertical axis. The M-circles on the Nichols chart are derived from the constant magnitude loci on the complex plane of the Nyquist plot. The N-circles represent constant phase of the closed-loop transfer function.
*   **Facilitating Direct Interpretation of Closed-Loop Performance:** The Nichols chart is uniquely advantageous because the M-circles (constant closed-loop magnitude) and N-circles (constant closed-loop phase) are superimposed on the plot of the open-loop frequency response. This allows for direct reading of the closed-loop magnitude and phase at any given frequency. Furthermore, the relationship between the open-loop curve and the critical point ($0$ dB, $-180^\circ$) directly yields the gain and phase margins, crucial indicators of relative stability. The chart's structure also makes it easy to visualize the effect of gain adjustments on these performance metrics and to design compensators to achieve desired closed-loop performance.

---

### 8. Summary and Important Points to Remember (Relating to CO4)

*   The Nichols chart plots the open-loop transfer function's magnitude (in dB) vs. phase (in degrees).
*   It directly displays **M-circles** (constant closed-loop magnitude) and **N-circles** (constant closed-loop phase).
*   **Stability:** A system is stable if the open-loop curve does not enclose the critical point $(-1, 0)$ in the Nyquist plane, which corresponds to the point $(0 \text{ dB}, -180^\circ)$ on the Nichols chart.
*   **Phase Margin ($\phi_M$):** Found at the 0 dB gain crossover frequency. It's $180^\circ + \text{Phase of } G_{OL}(j\omega)$ at that frequency.
*   **Gain Margin ($K_M$):** Found at the $-180^\circ$ phase crossover frequency. It's the reciprocal of the open-loop gain at $-180^\circ$ phase (in absolute terms). If the open-loop curve crosses the $-180^\circ$ line at $M_{OL}$ dB, then $K_M = -M_{OL}$ dB.
*   **Performance:** The Nichols chart helps to identify the peak closed-loop magnitude ($M_p$) and its corresponding frequency ($\omega_p$) by observing where the open-loop curve intersects the M-circles.
*   **Controller Design:** Gain adjustments can be made by vertically shifting the open-loop curve. Phase-lead/lag compensators can be used to reshape the curve to meet desired gain and phase margin specifications.
*   **Comparison:** It's a visual alternative that combines the information of Bode plots (magnitude and phase vs. frequency) in a single chart, enabling direct closed-loop performance assessment.

---

This concludes the study notes for the Concept of Nichols Chart. Refer to Nise (Chapter 10) and Nagrath & Gopal (Chapter 11) for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
