---
title: "Polar Plot"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463686"
status: "completed"
scrapedAt: "2026-05-20T18:00:51.840Z"
---
# Instrumentation and Control Systems: Module 4 - Time Domain Analysis of Control Systems: Polar Plot

## Introduction

This module delves into the time-domain analysis of control systems, focusing on understanding system behavior when subjected to time-varying inputs. While previous modules might have introduced system concepts, this module equips you with the tools to quantitatively assess how systems respond over time. Specifically, we will explore **Polar Plots**, a graphical method used in frequency-domain analysis that provides insights into system stability and performance characteristics relevant to time-domain behavior.

**Course Outcomes Alignment:**

*   **CO5:** To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance. (Knowledge Level: K4) - *Polar plots offer insights into stability and relative stability, which are crucial for time-domain performance assessment.*
*   **CO6:** Analyse the stability of the given LTI system (Knowledge Level: K4) - *Polar plots are a fundamental tool for determining system stability.*

**Textbook References:**

*   Nise N.S., *Control Systems Engineering* (6/e)
*   Ogata K., *Modern Control Engineering* (5/e)
*   Kuo B. C., *Automatic Control Systems* (7/e)

## 1. Introduction to Frequency Domain Analysis

Before diving into Polar Plots, it's important to understand their context within frequency domain analysis.

*   **Frequency Domain Analysis:** This approach examines the system's response to sinusoidal inputs of varying frequencies. It helps in understanding how a system filters or amplifies different frequencies.
*   **Transfer Function (G(s)):** The fundamental representation of a linear time-invariant (LTI) system in the frequency domain is obtained by setting $s = j\omega$, where $\omega$ is the angular frequency.
    $G(j\omega) = \text{Re}[G(j\omega)] + j \text{Im}[G(j\omega)]$
    $G(j\omega) = |G(j\omega)| e^{j\phi(\omega)}$
    *   $|G(j\omega)|$: Magnitude response (gain)
    *   $\phi(\omega)$: Phase response (phase shift)

**Key Concept:** The behavior of a control system for various time-domain inputs (like step, ramp) is closely related to its frequency-domain response. Polar plots bridge this gap by visualizing the frequency response in a unique way.

## 2. Polar Plot

A polar plot is a graphical representation of the frequency response of a linear time-invariant (LTI) system. It plots the complex number $G(j\omega)$ in the complex plane (also known as the polar plane) as the frequency $\omega$ varies from 0 to $\infty$.

*   **What is plotted:** For each frequency $\omega$, the complex number $G(j\omega)$ is represented as a point in the complex plane. The horizontal axis represents the real part, and the vertical axis represents the imaginary part.
*   **How it's plotted:** As $\omega$ varies, the locus of these points traces a curve. This curve is the polar plot of the system's transfer function.
*   **Polar Coordinates:** Each point on the plot can be described by its magnitude $|G(j\omega)|$ and phase angle $\phi(\omega)$.

**Definition:** The polar plot of a transfer function $G(s)$ is a plot of $|G(j\omega)|$ versus $\phi(\omega)$ in the polar coordinates of the complex plane as $\omega$ varies from $0$ to $\infty$.

**Nise N.S., *Control Systems Engineering*, Chapter 6 (Frequency Response Analysis):** Nise provides a comprehensive explanation of polar plots, emphasizing their use in stability analysis through the Nyquist stability criterion. He explains how to construct polar plots for various transfer functions and interpret the implications of their shape.

**Ogata K., *Modern Control Engineering*, Chapter 9 (Frequency Response Analysis):** Ogata also details the construction and interpretation of polar plots, relating them to system stability and performance. He often uses examples with specific control systems to illustrate the concepts.

### 2.1 Construction of Polar Plots

To construct a polar plot, we typically follow these steps:

1.  **Substitute $s = j\omega$:** Replace $s$ with $j\omega$ in the open-loop transfer function $G(s)$ to get $G(j\omega)$.
2.  **Calculate Magnitude and Phase:** For various values of $\omega$ (from 0 to $\infty$), calculate the magnitude $|G(j\omega)|$ and the phase angle $\phi(\omega)$.
    *   $|G(j\omega)| = \left| \frac{N(j\omega)}{D(j\omega)} \right| = \frac{|N(j\omega)|}{|D(j\omega)|}$
    *   $\phi(\omega) = \angle G(j\omega) = \angle N(j\omega) - \angle D(j\omega)$
3.  **Plot in the Complex Plane:** For each value of $\omega$, plot the corresponding complex number $G(j\omega)$ as a point (real part, imaginary part) in the complex plane.
4.  **Connect the Points:** Connect the plotted points with a smooth curve.
5.  **Indicate Frequency Progression:** It's good practice to indicate the direction of increasing frequency along the curve.

**Important Considerations for Construction:**

*   **Special Frequencies:**
    *   **$\omega = 0$:** Calculate $G(j0)$. This gives the starting point of the polar plot.
    *   **$\omega = \infty$:** Calculate $G(j\infty)$. This gives the ending point of the polar plot.
    *   **$\omega$ where $|G(j\omega)| = 1$ (Gain Crossover Frequency):** These points are important for relative stability.
    *   **$\omega$ where $\phi(\omega) = -180^\circ$ (Phase Crossover Frequency):** These points are crucial for stability analysis.
*   **Asymptotic Behavior:** For high frequencies ($\omega \to \infty$), the magnitude usually tends towards 0, and the phase angle tends towards $-n \times 90^\circ$, where $n$ is the number of poles at the origin or in the left-half plane.

### 2.2 Examples of Polar Plots for Standard Transfer Functions

Let's consider some basic forms of open-loop transfer functions and their polar plots.

**Example 1: $G(s) = \frac{K}{s+a}$, $a>0$ (First-Order Lag)**

*   $G(j\omega) = \frac{K}{j\omega+a}$
*   $|G(j\omega)| = \frac{K}{\sqrt{\omega^2+a^2}}$
*   $\phi(\omega) = -\arctan\left(\frac{\omega}{a}\right)$

**Analysis:**

*   **$\omega = 0$:** $G(j0) = \frac{K}{a}$. Magnitude = $\frac{K}{a}$, Phase = $0^\circ$. Point: $(\frac{K}{a}, 0)$.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) \to -90^\circ$. Point: $(0, 0)$.

**Polar Plot Shape:** As $\omega$ goes from 0 to $\infty$, the plot starts at $(\frac{K}{a}, 0)$ on the real axis and moves towards the origin, approaching it along the negative imaginary axis. The curve is a semicircle in the fourth quadrant.

**Kuo B. C., *Automatic Control Systems*, Chapter 10 (Frequency Response Methods):** Kuo provides clear graphical methods and examples for sketching polar plots of various transfer functions, including first-order systems.

**Example 2: $G(s) = \frac{K}{s}$ (Pure Integrator)**

*   $G(j\omega) = \frac{K}{j\omega} = -j\frac{K}{\omega}$
*   $|G(j\omega)| = \frac{K}{\omega}$
*   $\phi(\omega) = -90^\circ$ (constant)

**Analysis:**

*   **$\omega = 0$:** $|G(j\omega)| \to \infty$. $\phi(\omega) = -90^\circ$. The plot starts from infinity on the negative imaginary axis.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) = -90^\circ$. The plot ends at the origin along the negative imaginary axis.

**Polar Plot Shape:** The polar plot is a straight line along the negative imaginary axis.

**Example 3: $G(s) = \frac{K}{s^2}$ (Double Integrator)**

*   $G(j\omega) = \frac{K}{(j\omega)^2} = \frac{K}{-\omega^2} = -\frac{K}{\omega^2}$
*   $|G(j\omega)| = \frac{K}{\omega^2}$
*   $\phi(\omega) = -180^\circ$ (constant)

**Analysis:**

*   **$\omega = 0$:** $|G(j\omega)| \to \infty$. $\phi(\omega) = -180^\circ$. The plot starts from infinity on the negative real axis.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) = -180^\circ$. The plot ends at the origin along the negative real axis.

**Polar Plot Shape:** The polar plot is a straight line along the negative real axis.

**Example 4: $G(s) = \frac{K}{j\omega+1}$ (Same as Example 1 with $a=1$)**

*   **$\omega = 0$:** $G(j0) = K$. Point: $(K, 0)$.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$, $\phi(\omega) \to -90^\circ$. Point: $(0, 0)$.
*   **Sketching:** The plot is a semicircle in the fourth quadrant.

**Example 5: $G(s) = \frac{K}{(j\omega+1)(j\omega+2)}$**

*   $G(j\omega) = \frac{K}{(j\omega+1)(j\omega+2)} = \frac{K}{(\omega^2+1)e^{j\arctan(\omega/1)} (\omega^2+4)e^{j\arctan(\omega/2)}}$
*   $|G(j\omega)| = \frac{K}{\sqrt{(\omega^2+1)(\omega^2+4)}}$
*   $\phi(\omega) = -\arctan(\omega) - \arctan(\omega/2)$

**Analysis:**

*   **$\omega = 0$:** $G(j0) = \frac{K}{1 \times 2} = \frac{K}{2}$. Point: $(\frac{K}{2}, 0)$.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) \to -90^\circ - 90^\circ = -180^\circ$. Point: $(0, 0)$.

**Polar Plot Shape:** The plot starts at $(\frac{K}{2}, 0)$ and ends at $(0,0)$ with a phase that starts at $0^\circ$ and approaches $-180^\circ$. The curve will be in the fourth quadrant for most of its path, eventually crossing the negative real axis to approach the origin with a phase of $-180^\circ$.

**Patranabis D., *Principles of Industrial Instrumentation*, Chapter 11 (Control System Components and Concepts):** Patranabis discusses graphical methods for analyzing control systems, including the concept of frequency response and its graphical representations like polar plots. He emphasizes how these plots help in understanding system behavior.

### 2.3 Interpretation of Polar Plots

The shape and location of the polar plot provide crucial information about the system's stability and performance.

#### 2.3.1 Stability Analysis (Nyquist Stability Criterion)

The most significant application of polar plots is in conjunction with the **Nyquist Stability Criterion**. While the detailed explanation of Nyquist is a separate topic, polar plots are the graphical foundation for it.

**Key Idea:** The Nyquist criterion relates the number of encirclements of the critical point $(-1, 0)$ by the polar plot of the open-loop transfer function $G(j\omega)H(j\omega)$ to the number of roots of the characteristic equation $1 + G(j\omega)H(j\omega) = 0$ in the right-half of the s-plane.

*   **Critical Point:** The point $(-1, 0)$ in the polar plot is crucial. If the locus of $G(j\omega)$ passes through this point, the system is marginally stable.
*   **Encirclements:** The number of times the polar plot encircles the point $(-1, 0)$ determines the stability of the closed-loop system.
    *   $Z = N + P$
        *   $Z$: Number of zeros of $1+G(s)H(s)$ in the RHP (closed-loop poles in RHP).
        *   $N$: Number of clockwise encirclements of $(-1, 0)$ by $G(j\omega)H(j\omega)$.
        *   $P$: Number of poles of $G(s)H(s)$ in the RHP (open-loop poles in RHP).
*   **For a stable open-loop system ($P=0$):** For the closed-loop system to be stable, $Z=0$, which means $N=0$. The polar plot should not encircle the point $(-1, 0)$.

**Nise N.S., *Control Systems Engineering*, Chapter 7 (Stability Analysis):** Nise thoroughly explains the Nyquist stability criterion and how to apply it using polar plots, including cases with open-loop poles in the RHP.

#### 2.3.2 Gain Margin and Phase Margin

Polar plots help visualize and quantify the system's relative stability.

*   **Gain Margin (GM):** The factor by which the gain can be increased before the closed-loop system becomes unstable.
    *   **On the polar plot:** It is related to the intersection of the locus with the negative real axis. If the locus intersects the negative real axis at point $A = -a_0$, then the gain margin is $GM = \frac{1}{a_0}$ (if $a_0 > 0$).
    *   **Alternatively:** If the locus crosses the unit circle (magnitude = 1) at the phase crossover frequency $\omega_{pc}$ (where phase = $-180^\circ$), the gain margin is negative. More commonly, it's related to the phase crossover frequency where the phase is $-180^\circ$. If the locus intersects the negative real axis at $-a_0$ (where $a_0>0$), then the gain margin is $GM = 20 \log_{10}(1/a_0)$ dB.

*   **Phase Margin (PM):** The additional phase lag required to bring the closed-loop system to instability at the gain crossover frequency.
    *   **On the polar plot:** It is the angle between the locus at the gain crossover frequency (where $|G(j\omega)| = 1$) and the negative real axis.
    *   If the gain crossover frequency is $\omega_{gc}$ and $\phi(\omega_{gc}) = -\beta$, then the phase margin is $PM = 180^\circ - \beta$.

**Relationship to Time Domain:**
*   Larger gain and phase margins generally imply better transient response (less overshoot, faster settling time) in the time domain.
*   A system with zero or negative gain/phase margin is unstable in the time domain.

**Example Interpretation (referencing Example 5):**
For $G(s) = \frac{K}{(s+1)(s+2)}$:
*   The polar plot starts at $(\frac{K}{2}, 0)$ and ends at $(0,0)$ with a final phase of $-180^\circ$.
*   If the plot passes through $(-1, 0)$, the system is marginally stable.
*   If the plot does not enclose $(-1, 0)$, the system is stable.
*   If the plot intersects the negative real axis at $-a_0$, the gain margin is $1/a_0$.
*   The phase margin is determined at the frequency where $|G(j\omega)| = 1$.

#### 2.3.3 Other Interpretations

*   **Bandwidth:** The frequency at which the magnitude response drops to a certain level (e.g., $-3$ dB or $0.707$ times its maximum value). While not directly read from the polar plot, the shape of the polar plot can give an indication of the system's bandwidth.
*   **Resonance Peak ($M_p$):** A measure of the peak in the magnitude response. While not directly determined from the polar plot, the proximity of the polar plot to the $M_\rho$ circles (Nichols chart contours, related to polar plots) can indicate the resonance.

**Gopal M., *Control Systems Principles and Design*, Chapter 9 (Frequency Response Analysis):** Gopal discusses how frequency domain characteristics like gain margin and phase margin, derived from frequency response plots like polar plots, directly correlate with time-domain performance metrics such as overshoot and settling time.

## 3. Sketching Polar Plots for Rational Transfer Functions

A rational transfer function is of the form $G(s) = \frac{K \prod_{i=1}^m (s+z_i)}{s^q \prod_{j=1}^n (s+p_j)}$.

To sketch the polar plot of $G(j\omega)$:

1.  **Determine the form of $G(j\omega)$:**
    $G(j\omega) = \frac{K \prod_{i=1}^m (j\omega+z_i)}{(j\omega)^q \prod_{j=1}^n (j\omega+p_j)}$

2.  **Analyze behavior at $\omega = 0$ and $\omega = \infty$:**
    *   **$\omega = 0$:**
        *   If $q=0$: $G(j0) = K \prod_{i=1}^m z_i / \prod_{j=1}^n p_j$. This is a real number.
        *   If $q=1$: $G(j0) \to \infty$ along the $-90^\circ$ line.
        *   If $q=2$: $G(j0) \to \infty$ along the $-180^\circ$ line.
        *   In general, for $q>0$, $G(j0)$ tends to infinity with a phase of $-q \times 90^\circ$.
    *   **$\omega = \infty$:**
        *   $|G(j\omega)| \to 0$.
        *   The phase $\phi(\omega)$ at $\omega=\infty$ is determined by the difference between the number of poles and zeros and their location. The phase contribution from $(j\omega+z_i)$ is $+90^\circ$ and from $(j\omega+p_j)$ is $-90^\circ$. The term $(j\omega)^q$ contributes $-q \times 90^\circ$.
        *   Phase at $\omega=\infty = (\sum \text{phase of zeros}) - (\sum \text{phase of poles}) - q \times 90^\circ$.
        *   Phase from zeros at infinity: $m \times 90^\circ$.
        *   Phase from poles at infinity: $n \times 90^\circ$.
        *   Final phase at $\omega=\infty$ is $(m-n-q) \times 90^\circ$.

3.  **Analyze the phase crossover frequency ($\omega_{pc}$):** This is the frequency where $\phi(\omega) = -180^\circ$.
    *   At this frequency, if $|G(j\omega_{pc})| > 1$, the system is stable.
    *   If $|G(j\omega_{pc})| = 1$, the system is marginally stable.
    *   If $|G(j\omega_{pc})| < 1$, the system is unstable (in the sense of Routh-Hurwitz, not necessarily Nyquist).

4.  **Analyze the gain crossover frequency ($\omega_{gc}$):** This is the frequency where $|G(j\omega)| = 1$.
    *   The phase margin is determined at this frequency.

5.  **Identify special points:**
    *   Intersection with the real axis ($\phi(\omega) = 0^\circ$ or $-180^\circ$ or $-360^\circ$, etc.).
    *   Intersection with the imaginary axis (real part = 0).

6.  **Sketch the curve:** Connect the points considering the frequency progression and the limiting behavior.

**Singh, S.K., *Industrial Instrumentation and Control*, Chapter 12 (Stability and Sensitivity):** Singh provides practical examples of sketching polar plots for more complex transfer functions, emphasizing how to determine key frequencies and interpret the resulting plots for stability.

## 4. Relating Polar Plots to Time Domain Specifications

While polar plots are frequency domain tools, their parameters (gain margin, phase margin) have direct implications for time-domain performance.

| Frequency Domain Parameter | Time Domain Implication                                                                                             |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| **Phase Margin (PM)**      | **Overshoot:** Larger PM generally leads to less overshoot in the step response. A small PM indicates significant overshoot. |
|                            | **Settling Time:** Generally, a larger PM can lead to a slightly faster settling time, but it's not a direct correlation. |
| **Gain Margin (GM)**       | **Robustness:** Indicates how much the gain can change before instability. Higher GM means greater robustness to parameter variations. |
|                            | **Stability:** A positive GM (for a stable open-loop system) contributes to a stable closed-loop system.              |

**Nise N.S., *Control Systems Engineering*, Chapter 7.7 (Transient Response from Frequency Response):** Nise explicitly links frequency response characteristics like gain margin and phase margin to transient response specifications such as rise time, peak overshoot, and settling time. He provides approximations for these relationships.

## 5. Practice Questions and Answers

**Question 1:** Sketch the polar plot for the transfer function $G(s) = \frac{10}{s+2}$. Determine the gain margin and phase margin.

**Solution:**

1.  **$G(j\omega) = \frac{10}{j\omega+2}$**
2.  **Magnitude:** $|G(j\omega)| = \frac{10}{\sqrt{\omega^2+4}}$
3.  **Phase:** $\phi(\omega) = -\arctan(\omega/2)$

**Analysis:**
*   **$\omega = 0$:** $|G(j0)| = \frac{10}{2} = 5$. $\phi(0) = 0^\circ$. Point: $(5, 0)$.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) \to -90^\circ$. Point: $(0, 0)$.

**Sketch:** The polar plot is a semicircle in the fourth quadrant starting at $(5, 0)$ and ending at the origin along the negative imaginary axis.

**Gain Margin (GM):**
The locus intersects the negative real axis at $-a_0$. In this case, the locus approaches the origin without crossing the negative real axis. The critical point is $(-1, 0)$.
The magnitude at $\omega=0$ is 5. The gain can be increased by a factor of $1/5$ to make the magnitude at the origin 1. However, this is not how GM is calculated from polar plots.
GM is calculated at the phase crossover frequency $\omega_{pc}$ where $\phi(\omega) = -180^\circ$. For this system, the maximum phase lag is $-90^\circ$, so there is no phase crossover frequency where the phase is exactly $-180^\circ$. This implies an infinite gain margin in the context of the negative real axis intersection. However, for relative stability, it's often considered relative to the point where phase approaches $-90^\circ$.

Let's consider the point where the locus crosses the unit circle (magnitude = 1):
$1 = \frac{10}{\sqrt{\omega^2+4}} \implies \omega^2+4 = 100 \implies \omega^2 = 96 \implies \omega_{gc} = \sqrt{96} \approx 9.8$.
At this frequency, $\phi(\omega_{gc}) = -\arctan(\sqrt{96}/2) = -\arctan(4.9) \approx -78.46^\circ$.
The phase margin is $180^\circ - (-78.46^\circ) = 102.46^\circ$.

Let's re-evaluate the GM based on the intersection with the negative real axis. If the locus does not intersect the negative real axis, the GM is often considered infinite. A more practical interpretation is that the system remains stable as the gain is increased.

**Phase Margin (PM):**
Phase margin is calculated at the gain crossover frequency ($\omega_{gc}$), where $|G(j\omega_{gc})| = 1$.
$|G(j\omega_{gc})| = \frac{10}{\sqrt{\omega_{gc}^2+4}} = 1 \implies \omega_{gc}^2+4 = 100 \implies \omega_{gc}^2 = 96 \implies \omega_{gc} = \sqrt{96} \approx 9.8$ rad/s.
$\phi(\omega_{gc}) = -\arctan(\omega_{gc}/2) = -\arctan(\sqrt{96}/2) = -\arctan(4.9) \approx -78.46^\circ$.
Phase Margin = $180^\circ - |\phi(\omega_{gc})|$ (where $\phi(\omega_{gc})$ is the phase angle).
Phase Margin = $180^\circ - 78.46^\circ = 101.54^\circ$.
*(Note: Slight difference due to rounding in arctan calculation).*

**Answer:**
*   **Polar Plot:** A semicircle in the 4th quadrant, starting from $(5,0)$ and ending at $(0,0)$ along the negative imaginary axis.
*   **Gain Margin (GM):** Infinite (as the locus does not cross the negative real axis).
*   **Phase Margin (PM):** Approximately $101.54^\circ$.

**Question 2:** For $G(s) = \frac{1}{s(s+1)}$, sketch the polar plot. Analyze its stability.

**Solution:**

1.  **$G(j\omega) = \frac{1}{j\omega(j\omega+1)}$**
2.  **Magnitude:** $|G(j\omega)| = \frac{1}{\omega\sqrt{\omega^2+1}}$
3.  **Phase:** $\phi(\omega) = -90^\circ - \arctan(\omega)$

**Analysis:**
*   **$\omega = 0$:** $|G(j0)| \to \infty$. $\phi(0) = -90^\circ$. Starts from infinity on the negative imaginary axis.
*   **$\omega \to \infty$:** $|G(j\omega)| \to 0$. $\phi(\omega) \to -90^\circ - 90^\circ = -180^\circ$. Ends at the origin along the negative real axis.

**Sketch:** The plot starts from infinity on the negative imaginary axis and curves towards the origin, approaching it along the negative real axis. It will form a curve in the third quadrant initially, then potentially cross the negative real axis.

**Stability Analysis (using Nyquist Criterion):**
The open-loop transfer function has one pole at the origin ($s=0$) and one pole at $s=-1$. Assuming the open-loop system is stable (which it isn't due to the pole at origin, but we analyze the closed-loop stability).
The characteristic equation is $1 + G(s) = 0$, so $1 + \frac{1}{s(s+1)} = 0$, which means $s(s+1) + 1 = 0$, or $s^2 + s + 1 = 0$.
The roots are $s = \frac{-1 \pm \sqrt{1 - 4}}{2} = \frac{-1 \pm j\sqrt{3}}{2}$. Both roots are in the left-half plane, so the closed-loop system is stable.

Let's find the phase crossover frequency $\omega_{pc}$ where $\phi(\omega) = -180^\circ$.
$-90^\circ - \arctan(\omega_{pc}) = -180^\circ$
$\arctan(\omega_{pc}) = 90^\circ$
This implies $\omega_{pc} \to \infty$.
At $\omega \to \infty$, the magnitude $|G(j\omega)| \to 0$. Since the phase crossover frequency is at infinity and the magnitude is 0, the locus does not reach the critical point $(-1, 0)$.

**Gain Crossover Frequency ($\omega_{gc}$):** Where $|G(j\omega)| = 1$.
$\frac{1}{\omega_{gc}\sqrt{\omega_{gc}^2+1}} = 1 \implies \omega_{gc}^2(\omega_{gc}^2+1) = 1 \implies \omega_{gc}^4 + \omega_{gc}^2 - 1 = 0$.
Let $x = \omega_{gc}^2$. Then $x^2 + x - 1 = 0$.
$x = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}$.
Since $\omega_{gc}^2$ must be positive, $\omega_{gc}^2 = \frac{-1 + \sqrt{5}}{2} \approx 0.618$.
$\omega_{gc} = \sqrt{0.618} \approx 0.786$ rad/s.
At $\omega_{gc} \approx 0.786$:
$\phi(\omega_{gc}) = -90^\circ - \arctan(0.786) = -90^\circ - 38.16^\circ = -128.16^\circ$.
Phase Margin = $180^\circ - |-128.16^\circ| = 180^\circ - 128.16^\circ = 51.84^\circ$.

**Answer:**
*   **Polar Plot:** Starts from infinity on the negative imaginary axis, curves through the third quadrant, and approaches the origin along the negative real axis.
*   **Stability:** The closed-loop system is stable. The polar plot does not encircle the $(-1,0)$ point. The phase margin is approximately $51.84^\circ$.

**Question 3:** What is the significance of the point $(-1,0)$ in a polar plot for stability analysis?

**Answer:** The point $(-1,0)$ is the critical point in the polar plot. For a closed-loop system to be stable, its polar plot of the open-loop transfer function $G(s)H(s)$ must not encircle this point, according to the Nyquist stability criterion. Encirclements of this point by the polar plot indicate the presence of closed-loop poles in the right-half of the s-plane, which correspond to an unstable system.

## 6. Important Points to Remember

*   **Polar Plot Definition:** A plot of $G(j\omega)$ in the complex plane as $\omega$ varies from 0 to $\infty$.
*   **Key Frequencies:** $\omega=0$, $\omega=\infty$, gain crossover frequency ($\omega_{gc}$), phase crossover frequency ($\omega_{pc}$).
*   **Stability:** The encirclement of the critical point $(-1, 0)$ by the polar plot is the basis of the Nyquist stability criterion.
*   **Relative Stability:** Gain margin (GM) and phase margin (PM) are directly observable from the polar plot and indicate the robustness and relative stability of the system.
*   **Time Domain Connection:** Larger GM and PM generally lead to better transient responses (less overshoot, more stable).
*   **Asymptotic Behavior:** Understanding how the magnitude and phase of $G(j\omega)$ behave as $\omega \to 0$ and $\omega \to \infty$ is crucial for sketching.
*   **System Type:** The number of pure integrator terms ($1/s^q$) in the open-loop transfer function dictates the starting point and behavior at $\omega=0$.

## Conclusion

Polar plots are a powerful graphical tool in control system analysis, bridging the gap between frequency-domain characteristics and closed-loop system stability. By understanding how to construct and interpret these plots, engineers can gain valuable insights into a system's robustness and relative stability, which are directly related to its time-domain performance. This knowledge is foundational for designing and analyzing feedback control systems effectively.

---
This concludes the study notes for Polar Plots within Module 4. Remember to practice sketching plots for various transfer functions and to relate the graphical features to stability and performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
