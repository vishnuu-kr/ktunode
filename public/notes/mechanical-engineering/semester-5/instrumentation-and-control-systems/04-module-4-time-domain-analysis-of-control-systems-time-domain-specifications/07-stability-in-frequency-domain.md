---
title: "Stability in Frequency Domain"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463682"
status: "completed"
scrapedAt: "2026-05-20T18:00:49.050Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS - Module 4: Time Domain Analysis of Control Systems

## Topic: Stability in Frequency Domain

This topic, although seemingly misplaced within a "Time Domain Analysis" module, delves into concepts that are deeply intertwined with time-domain performance and stability. Frequency domain techniques offer a powerful alternative perspective to assess system stability, often providing more intuitive insights and easier methods for controller design. We will explore how frequency response characteristics relate to time-domain transient and steady-state behavior.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of stability in the context of control systems.
*   Relate frequency domain characteristics (gain and phase margins) to time domain stability.
*   Utilize frequency response plots (Bode plots, Nyquist plots) to assess system stability.
*   Understand the conditions for absolute and relative stability from frequency domain perspectives.

---

### 1. Introduction to Stability in Control Systems

**Definition of Stability:** A control system is considered stable if its output remains bounded for all bounded inputs. Conversely, an unstable system's output grows without bound even for finite inputs.

**Importance of Stability:** Stability is a fundamental requirement for any control system. An unstable system can lead to catastrophic failure, damage to equipment, and unsafe operating conditions.

**Types of Stability:**

*   **Absolute Stability:** The system is stable for all admissible variations in its parameters.
*   **Relative Stability:** The system is stable, and we are interested in how "close" it is to becoming unstable. This is quantified by metrics like damping ratio or overshoot in the time domain, and by gain/phase margins in the frequency domain.

**Relationship between Time and Frequency Domain:**

While this module focuses on time-domain analysis, it's crucial to understand that stability is a property of the system itself, regardless of the analysis domain. Techniques in the frequency domain provide a different lens to view and assess this inherent property. Frequency response analysis is particularly useful for systems with time delays and for understanding the impact of unmodeled dynamics.

*(Refer to: Nise N.S., Chapter 7; Ogata K., Chapter 9)*

---

### 2. Frequency Domain Analysis Tools

Frequency domain analysis relies on examining the system's response to sinusoidal inputs of varying frequencies. The core tool is the **transfer function** $G(s)$, where we substitute $s = j\omega$ to obtain the **frequency response** $G(j\omega)$.

**Key Concepts:**

*   **Frequency Response:** $G(j\omega) = |G(j\omega)| \angle G(j\omega)$
    *   $|G(j\omega)|$: **Magnitude Response** - The ratio of the output amplitude to the input amplitude for a sinusoidal input of frequency $\omega$.
    *   $\angle G(j\omega)$: **Phase Response** - The phase shift between the output and input sinusoids for a sinusoidal input of frequency $\omega$.

**Common Frequency Response Plots:**

*   **Bode Plots:**
    *   A pair of plots: Magnitude (in dB) vs. frequency (log scale) and Phase (in degrees) vs. frequency (log scale).
    *   Excellent for visualizing the system's gain and phase characteristics across a wide range of frequencies.
    *   Allows for easy identification of cutoff frequencies, resonance peaks, and phase crossover frequencies.
    *(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 6)*

*   **Nyquist Plots:**
    *   A polar plot of the frequency response $G(j\omega)$ where the frequency $\omega$ is varied from 0 to $\infty$.
    *   The x-axis represents the real part of $G(j\omega)$, and the y-axis represents the imaginary part.
    *   Provides a direct way to assess stability using the Nyquist stability criterion.
    *(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 9)*

---

### 3. Stability Criteria in the Frequency Domain

Frequency domain techniques offer several criteria to assess the absolute and relative stability of a closed-loop system based on the open-loop transfer function $G(s)H(s)$.

#### 3.1. Nyquist Stability Criterion

**Concept:** The Nyquist stability criterion relates the number of encirclements of the $-1+j0$ point in the Nyquist plot of the open-loop transfer function $G(s)H(s)$ to the number of roots of the characteristic equation in the right-half of the s-plane (RHP).

**Formal Statement:**
If an open-loop system $G(s)H(s)$ has $P$ poles in the RHP, and its Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega$ from $-\infty$ to $+\infty$ encircles the point $-1+j0$ in the *counter-clockwise* direction $N$ times, then the closed-loop system has $Z$ poles in the RHP, where:

$Z = P - N$

For a stable closed-loop system, we require $Z = 0$. Therefore, $N = P$.

**Practical Application (for most common systems with stable open-loop):**

For systems where the open-loop transfer function $G(s)H(s)$ is *stable* (i.e., $P=0$), the closed-loop system is stable if and only if the Nyquist plot of $G(j\omega)H(j\omega)$ for $\omega$ from $0$ to $\infty$ does *not* encircle the $-1+j0$ point.

**Key Points:**

*   The Nyquist plot includes frequencies from $-\infty$ to $\infty$. However, for rational transfer functions with no poles on the imaginary axis, the plot for $-\infty < \omega < 0$ is the mirror image of the plot for $0 < \omega < \infty$. Therefore, we often focus on the $0 < \omega < \infty$ portion.
*   Special attention is needed for poles on the $j\omega$ axis, which requires indenting the Nyquist contour.

*(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 9)*

#### 3.2. Gain Margin (GM) and Phase Margin (PM)

These are measures of **relative stability**, indicating how close the system is to becoming unstable. They are directly obtained from Bode plots.

**Gain Margin (GM):**

*   **Definition:** The reciprocal of the magnitude $|G(j\omega)H(j\omega)|$ at the phase crossover frequency $\omega_{pc}$ (where the phase $\angle G(j\omega)H(j\omega) = -180^\circ$).
*   **In dB:** $GM_{dB} = -20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})|$
*   **Interpretation:** How much the system's gain can be increased before it becomes unstable (at the frequency where the phase is -180 degrees).
*   **Condition for Stability:** $GM > 1$ (or $GM_{dB} > 0$ dB). A positive gain margin indicates stability.

**Phase Margin (PM):**

*   **Definition:** The difference between $180^\circ$ and the magnitude of the phase angle $| \angle G(j\omega)H(j\omega)|$ at the gain crossover frequency $\omega_{gc}$ (where the magnitude $|G(j\omega)H(j\omega)| = 1$ or 0 dB).
*   **Calculation:** $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$
*   **Interpretation:** How much additional phase lag can be added to the system before it becomes unstable (at the frequency where the gain is unity).
*   **Condition for Stability:** $PM > 0^\circ$. A positive phase margin indicates stability.

**Relationship to Time Domain Specifications:**

*   **Higher PM $\implies$ More Damped Response:** A larger phase margin generally corresponds to a system with less overshoot and faster settling time in its transient response.
*   **GM and PM are Related:** While distinct, they both quantify how "far" the system is from the $-1+j0$ point in the Nyquist plot.

*(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 6)*

#### 3.3. Bode Stability Criterion

This is a simplified criterion derived from the Nyquist criterion, applicable to systems whose open-loop transfer functions are **minimum-phase** (no RHP zeros or poles on the imaginary axis) and where the Bode plot of $G(j\omega)H(j\omega)$ crosses the 0 dB line only once.

**Conditions for Stability (for minimum-phase systems):**

1.  **Gain Margin is Positive:** $GM > 1$ (or $GM_{dB} > 0$ dB).
2.  **Phase Margin is Positive:** $PM > 0^\circ$.

If the open-loop system is minimum-phase, satisfying either of these conditions generally implies the other. However, it's good practice to check both.

*(Refer to: Nise N.S., Chapter 6)*

---

### 4. Relating Frequency Domain Stability to Time Domain Specifications

The frequency domain metrics of gain margin and phase margin provide valuable insights into the time-domain transient response characteristics.

| Frequency Domain Metric | Time Domain Implication                                                                   |
| :---------------------- | :---------------------------------------------------------------------------------------- |
| **Phase Margin (PM)**   | **Relative Stability:** A larger PM indicates a more stable and less oscillatory response. |
|                         | For second-order systems, PM $\approx 100 \zeta$ (where $\zeta$ is the damping ratio). |
|                         | $\uparrow PM \implies \downarrow$ Overshoot, $\downarrow$ Settling Time, $\uparrow$ Damping. |
| **Gain Margin (GM)**    | **Robustness to Gain Variations:** A larger GM indicates that the system can tolerate larger increases in loop gain before becoming unstable. |
|                         | **Less Direct Impact on Oscillations:** While related to stability, GM is not as directly indicative of transient oscillations as PM. |

**Example:**

Consider a system with a phase margin of $60^\circ$. This suggests that the damping ratio $\zeta$ is roughly $0.6$. This would imply a moderately damped response with about 5-10% overshoot. A system with a phase margin of $30^\circ$ might have $\zeta \approx 0.3$, leading to a more oscillatory response with significant overshoot.

*(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 6)*

---

### 5. Examples

**Example 1: Bode Plot Analysis**

Consider the open-loop transfer function $G(s)H(s) = \frac{10}{s(s+1)(s+2)}$.

1.  **Find $\omega_{pc}$ (Phase Crossover Frequency):**
    We need $\angle G(j\omega)H(j\omega) = -180^\circ$.
    $\angle G(j\omega)H(j\omega) = \angle 10 - \angle j\omega - \angle (j\omega+1) - \angle (j\omega+2)$
    $= 0^\circ - 90^\circ - \arctan(\omega) - \arctan(\omega/2)$
    Set this to $-180^\circ$:
    $-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$
    $\arctan(\omega) + \arctan(\omega/2) = 90^\circ$
    This is satisfied when $\omega \to \infty$. Let's check a high frequency:
    At $\omega=5$: Phase = $-90 - \arctan(5) - \arctan(2.5) = -90 - 78.7^\circ - 68.2^\circ = -236.9^\circ$.
    We need to find $\omega_{pc}$ more precisely. If $\arctan(\omega) + \arctan(\omega/2) = 90^\circ$, this means $\omega \to \infty$. This indicates that the phase approaches $-180^\circ$ asymptotically. Let's re-evaluate for a different system or assume a more typical case for GM.

    *Let's revise the example for a clearer phase crossover.*
    Consider $G(s)H(s) = \frac{10}{s(s+1)(s+5)}$.
    Phase = $-90^\circ - \arctan(\omega) - \arctan(\omega/5)$.
    Set phase to $-180^\circ$: $-90^\circ - \arctan(\omega) - \arctan(\omega/5) = -180^\circ$.
    $\arctan(\omega) + \arctan(\omega/5) = 90^\circ$.
    This happens when $\omega \to \infty$. Still not a good example for direct GM calculation from $\omega_{pc}$ if the phase approaches -180 asymptotically from above.

    *Let's use a system that has a distinct $\omega_{pc}$.*
    Consider $G(s)H(s) = \frac{10(s+2)}{s^2(s+1)}$. This system has two poles at the origin, which makes the phase start at $-180^\circ$.

    *Let's stick to a common example like $G(s)H(s) = \frac{K}{s(s+a)(s+b)}$ and focus on PM.*
    Consider $G(s)H(s) = \frac{1}{s(s+1)(s+2)}$.
    Magnitude: $|G(j\omega)H(j\omega)| = \frac{1}{\omega \sqrt{1+\omega^2} \sqrt{4+\omega^2}}$
    Phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$

2.  **Find $\omega_{gc}$ (Gain Crossover Frequency):**
    Set $|G(j\omega)H(j\omega)| = 1$:
    $\frac{1}{\omega \sqrt{1+\omega^2} \sqrt{4+\omega^2}} = 1$
    $\omega^2 (1+\omega^2)(4+\omega^2) = 1$
    Let $x = \omega^2$: $x(1+x)(4+x) = 1$
    $x(4 + x + 4x + x^2) = 1$
    $x(4 + 5x + x^2) = 1$
    $x^3 + 5x^2 + 4x - 1 = 0$
    By inspection or numerical methods, we can find the root for $x > 0$.
    If $x=0.2$, $(0.2)^3 + 5(0.2)^2 + 4(0.2) - 1 = 0.008 + 5(0.04) + 0.8 - 1 = 0.008 + 0.2 + 0.8 - 1 = 1.008 - 1 = 0.008 \approx 0$.
    So, $x \approx 0.2$.
    $\omega_{gc} = \sqrt{x} \approx \sqrt{0.2} \approx 0.447$ rad/s.

3.  **Calculate Phase Margin (PM):**
    At $\omega_{gc} = 0.447$ rad/s:
    $\angle G(j\omega_{gc})H(j\omega_{gc}) = -90^\circ - \arctan(0.447) - \arctan(0.447/2)$
    $= -90^\circ - 24.1^\circ - 12.7^\circ = -126.8^\circ$
    $PM = 180^\circ + (-126.8^\circ) = 53.2^\circ$

    **Interpretation:** A phase margin of $53.2^\circ$ indicates good relative stability. For a second-order approximation, this corresponds to a damping ratio of roughly $0.532$, suggesting a response with moderate overshoot.

**Example 2: Nyquist Plot Interpretation**

Consider $G(s)H(s) = \frac{1}{s+1}$. This is a stable open-loop system ($P=0$).
The Nyquist plot for $G(j\omega)H(j\omega) = \frac{1}{j\omega+1}$ is a semicircle in the first and fourth quadrants, centered at $(0.5, 0)$ with radius $0.5$.
The locus starts at $G(j0) = 1$ and ends at $G(j\infty) = 0$.
The point $-1+j0$ is *not* enclosed by this semicircle.
Therefore, $N=0$. Since $P=0$ and $N=0$, $Z = P - N = 0$. The closed-loop system is stable.

*(Refer to: Nise N.S., Chapter 6; Ogata K., Chapter 9)*

---

### 6. Important Points to Remember

*   **Stability is Paramount:** Always ensure the stability of a control system before considering performance.
*   **Frequency Domain Offers Insight:** Frequency response analysis provides complementary information to time-domain analysis, especially for stability and robustness.
*   **Gain Margin (GM) & Phase Margin (PM):** Key indicators of relative stability. Higher values generally lead to better transient performance (less overshoot, faster settling).
*   **Nyquist Criterion:** A robust method for stability analysis, particularly useful for systems with time delays or unstable open-loop transfer functions.
*   **Bode Criterion:** A simpler criterion for minimum-phase systems, relying on positive GM and PM.
*   **Trade-offs:** There are often trade-offs between performance (e.g., speed of response) and stability margins.

---

### 7. Practice Questions and Exercises

**Question 1:**
For a closed-loop control system, the open-loop transfer function is given by $G(s)H(s) = \frac{5}{(s+1)(s+2)}$.
a) Sketch the Bode magnitude and phase plots for $G(s)H(s)$.
b) Determine the gain crossover frequency ($\omega_{gc}$) and the phase margin (PM).
c) Determine the phase crossover frequency ($\omega_{pc}$) and the gain margin (GM).
d) Comment on the relative stability of the closed-loop system.

**Answer 1:**
a) **Bode Plot Sketch:**
   *   **Magnitude Plot:** Starts at 20 dB at $\omega \to 0$. Has corner frequencies at $\omega=1$ and $\omega=2$. The slope is $-20$ dB/decade up to $\omega=1$, then $-40$ dB/decade up to $\omega=2$, and finally $-60$ dB/decade for $\omega>2$.
   *   **Phase Plot:** Starts at $-90^\circ$ at $\omega \to 0$. Phase lag increases. $\phi(\omega) = -90^\circ - \arctan(\omega) - \arctan(\omega/2)$.

b) **Gain Crossover Frequency ($\omega_{gc}$):**
   We need $|G(j\omega)H(j\omega)| = 1$.
   $\frac{5}{\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = 1$
   $25 = (1+\omega^2)(4+\omega^2) = 4 + 5\omega^2 + \omega^4$
   $\omega^4 + 5\omega^2 - 21 = 0$
   Let $x = \omega^2$: $x^2 + 5x - 21 = 0$.
   Using the quadratic formula: $x = \frac{-5 \pm \sqrt{25 - 4(1)(-21)}}{2} = \frac{-5 \pm \sqrt{25 + 84}}{2} = \frac{-5 \pm \sqrt{109}}{2}$.
   Since $\omega^2$ must be positive, $x = \frac{-5 + \sqrt{109}}{2} \approx \frac{-5 + 10.44}{2} \approx 2.72$.
   $\omega_{gc} = \sqrt{2.72} \approx 1.65$ rad/s.

   **Phase Margin (PM):**
   At $\omega_{gc} = 1.65$ rad/s:
   $\angle G(j\omega_{gc})H(j\omega_{gc}) = -90^\circ - \arctan(1.65) - \arctan(1.65/2)$
   $= -90^\circ - 58.8^\circ - 39.8^\circ = -188.6^\circ$.
   $PM = 180^\circ + (-188.6^\circ) = -8.6^\circ$.

c) **Phase Crossover Frequency ($\omega_{pc}$):**
   We need $\angle G(j\omega)H(j\omega) = -180^\circ$.
   $-90^\circ - \arctan(\omega) - \arctan(\omega/2) = -180^\circ$
   $\arctan(\omega) + \arctan(\omega/2) = 90^\circ$.
   This occurs as $\omega \to \infty$. Thus, there is no finite $\omega_{pc}$.

   **Gain Margin (GM):**
   Since there is no finite $\omega_{pc}$ where the phase is exactly $-180^\circ$, we need to check the gain at a frequency where the phase is close to $-180^\circ$. However, the phase lag increases with frequency. The phase limit as $\omega \to \infty$ is $-270^\circ$.
   The Nyquist plot will encircle $-1+j0$. For the $\omega_{pc}$ calculation: if the phase approaches $-180^\circ$ from greater magnitude (e.g., $-170^\circ$ at high freq), the gain at that frequency would be considered for GM. If it approaches $-180^\circ$ from less magnitude (e.g. $-190^\circ$), the situation is different.
   In this case, the phase is always less than $-180^\circ$ for $\omega > \infty$. This implies instability.

d) **Comment on Relative Stability:**
   The calculated phase margin is $-8.6^\circ$. A negative phase margin indicates that the closed-loop system is **unstable**. The gain margin would also confirm this. If the phase never reaches exactly $-180^\circ$ at a finite frequency and the gain is still $>1$ at that frequency (or if it reaches $-180^\circ$ at infinite frequency with gain still positive), it indicates instability.

**Question 2:**
Explain the significance of Gain Margin and Phase Margin in terms of the robustness of a control system.

**Answer 2:**
*   **Gain Margin (GM):** A larger GM means the system can withstand a larger multiplicative increase in the loop gain before becoming unstable. This signifies robustness to variations in component gains or amplification factors within the control loop.
*   **Phase Margin (PM):** A larger PM implies that the system is less sensitive to phase lags introduced by system components (like filters, time delays, or unmodeled dynamics). It indicates robustness to additive phase errors or changes in the system's phase characteristics.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the concept of stability is a foundational knowledge aspect.
*   **CO2 (K4):** While not directly about sensors, understanding how system parameters (represented by transfer functions) affect stability relates to the overall system's performance.
*   **CO3 (K4):** Signal conditioning circuits can introduce phase shifts and affect gain, thus impacting stability margins. Frequency domain analysis helps understand these effects.
*   **CO4 (K3):** Describing the role of control blocks in feedback systems inherently involves ensuring their contribution maintains overall stability.
*   **CO5 (K4):** Stability is a prerequisite for assessing time-domain responses. Frequency domain stability analysis complements root locus techniques.
*   **CO6 (K4):** This topic directly addresses the analysis of the stability of LTI systems using frequency domain methods, fulfilling this outcome comprehensively.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References

*   **Nise N.S. (Wiley Eastern, 6/e):** Chapters 6 (Frequency Response Analysis) and 7 (Stability) are primary resources for this topic.
*   **Ogata K (Prentice Hall of India., 5/e):** Chapters 6 (Frequency Response Analysis) and 9 (Stability Criterion) are highly relevant.
*   **Doebelin E.O. (McGraw-Hill Publishing Company, 1990):** May offer practical perspectives on stability in measurement systems.
*   **Kuo B. C (Prentice Hall of India, 7/e):** Provides foundational concepts of control systems and stability.

---