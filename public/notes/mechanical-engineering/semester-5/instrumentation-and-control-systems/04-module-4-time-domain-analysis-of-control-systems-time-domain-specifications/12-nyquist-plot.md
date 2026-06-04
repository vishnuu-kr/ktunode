---
title: "Nyquist Plot."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463687"
status: "completed"
scrapedAt: "2026-05-20T18:00:52.551Z"
---
## Module 4: Time Domain Analysis of Control Systems: Nyquist Plot

This module delves into the frequency domain analysis of control systems, with a specific focus on the Nyquist plot. While the module title mentions "Time Domain Analysis," the Nyquist plot is a fundamental tool in **frequency domain stability analysis**. Understanding the Nyquist plot allows us to assess the stability and performance of a control system from its open-loop transfer function, indirectly providing insights into its time-domain behavior.

---

### 1. Introduction to Frequency Domain Analysis

Frequency domain analysis techniques examine how a system responds to sinusoidal inputs of varying frequencies. This approach is particularly useful for:

*   **Stability Analysis:** Determining whether a system will oscillate or remain stable.
*   **Performance Evaluation:** Assessing characteristics like bandwidth, phase margin, and gain margin.

**Key Concepts:**

*   **Sinusoidal Input:** A signal of the form $A \sin(\omega t)$.
*   **System Response:** The output of the system when subjected to a sinusoidal input.
*   **Transfer Function in Frequency Domain:** Obtained by replacing 's' with '$j\omega$' in the system's Laplace domain transfer function, $G(s)$. This results in a complex function $G(j\omega) = \text{Re}[G(j\omega)] + j \text{Im}[G(j\omega)]$.

**Textbook Reference:**
*   Nise N.S., *Control Systems Engineering*, Chapter 8: Frequency Response Analysis.
*   Ogata K., *Modern Control Engineering*, Chapter 9: Frequency Response Analysis.

---

### 2. The Nyquist Plot: Definition and Construction

The Nyquist plot is a graphical representation of the frequency response of an open-loop transfer function, $G(j\omega)$, in the complex plane. It plots the real part of $G(j\omega)$ against the imaginary part of $G(j\omega)$ as the frequency $\omega$ varies from $-\infty$ to $+\infty$.

**Key Concepts:**

*   **Open-Loop Transfer Function (OLTF):** The transfer function of the system without feedback, typically denoted as $G(s)H(s)$. For simplicity in understanding the Nyquist plot, we often consider $G(j\omega)$ where $H(s)=1$.
*   **Frequency Response:** The behavior of a system when subjected to sinusoidal inputs of varying frequencies.
*   **Complex Plane:** A plane where the horizontal axis represents the real part and the vertical axis represents the imaginary part.
*   **Polar Plot:** Another term often used interchangeably with Nyquist plot, though technically it's a specific type of polar plot.

**Construction Steps:**

1.  **Obtain the Open-Loop Transfer Function:** Start with the open-loop transfer function $G(s)H(s)$.
2.  **Substitute $s = j\omega$:** Replace $s$ with $j\omega$ to get the frequency domain transfer function $G(j\omega)H(j\omega)$.
3.  **Determine Magnitude and Phase:** For each frequency $\omega$, calculate the magnitude $|G(j\omega)H(j\omega)|$ and the phase angle $\angle G(j\omega)H(j\omega)$.
4.  **Plot in the Complex Plane:** Plot the complex number $G(j\omega)H(j\omega)$ for all values of $\omega$. The real part is plotted on the x-axis and the imaginary part on the y-axis.

**Important Considerations for Construction:**

*   **Frequency Range:** The frequency $\omega$ typically varies from 0 to $\infty$. However, to complete the Nyquist contour and assess stability, we need to consider frequencies from $-\infty$ to $+\infty$.
*   **Symmetry:** If the open-loop transfer function $G(s)H(s)$ has a rational form with real coefficients, the Nyquist plot for negative frequencies ($-\omega$) is the mirror image of the plot for positive frequencies ($\omega$) about the real axis.
*   **Singularities on the $j\omega$ Axis:** If $G(s)H(s)$ has poles or zeros on the $j\omega$ axis, the Nyquist contour must be indented around these points. This involves replacing the $j\omega$ axis segment with a semi-circular arc of infinitesimal radius.

**Textbook Reference:**
*   Kuo B. C., *Automatic Control Systems*, Chapter 11: Nyquist Criterion.
*   Varmah K R, *Control Systems*, Chapter 12: Frequency Domain Analysis.

---

### 3. The Nyquist Stability Criterion

The Nyquist stability criterion is a powerful tool for determining the absolute stability of a closed-loop control system based on the Nyquist plot of its open-loop transfer function.

**Key Concepts:**

*   **Closed-Loop Transfer Function (CLTF):** $T(s) = \frac{G(s)}{1+G(s)H(s)}$ (for unity feedback, $H(s)=1$, $T(s) = \frac{G(s)}{1+G(s)}$).
*   **Stability:** A system is stable if its output remains bounded for any bounded input. In the context of feedback systems, stability is determined by the location of the closed-loop poles. All closed-loop poles must lie in the left-half of the s-plane (LHP).
*   **Encirclement:** The Nyquist criterion relates the number of encirclements of the critical point (-1, 0) by the Nyquist plot of $G(s)H(s)$ to the number of unstable (right-half plane - RHP) poles of the open-loop transfer function and the number of unstable closed-loop poles.

**The Nyquist Criterion Statement:**

Let $N$ be the number of clockwise encirclements of the critical point $(-1, 0)$ by the Nyquist plot of $G(s)H(s)$.
Let $P$ be the number of RHP poles of the open-loop transfer function $G(s)H(s)$.
Let $Z$ be the number of RHP poles of the closed-loop transfer function $T(s)$.

The relationship is given by:
$$N = P - Z$$

**Interpretation for Stability:**

For a closed-loop system to be stable, we require $Z=0$ (no RHP closed-loop poles). Therefore, for stability, the Nyquist criterion becomes:
$$N = P$$

This means the number of clockwise encirclements of $(-1, 0)$ by the Nyquist plot must equal the number of RHP poles of the open-loop transfer function.

**Important Considerations:**

*   **The Critical Point (-1, 0):** This point is crucial because if $1+G(s)H(s) = 0$, then $G(s)H(s) = -1$. If this occurs for a value of $s$ in the RHP, the closed-loop system is unstable.
*   **Indentation:** When indenting the contour around poles on the $j\omega$ axis, a semi-circular arc in the RHP of radius $\epsilon$ (where $\epsilon \to 0$) will lead to a corresponding semi-circular arc in the Nyquist plot, of infinitely large radius.
*   **Counting Encirclements:** Clockwise encirclements are counted as positive. Counter-clockwise encirclements are counted as negative.

**Example:**
Consider an open-loop transfer function $G(s)H(s) = \frac{1}{s+1}$.
1.  Substitute $s=j\omega$: $G(j\omega)H(j\omega) = \frac{1}{j\omega+1}$.
2.  Magnitude: $|G(j\omega)H(j\omega)| = \frac{1}{\sqrt{\omega^2+1}}$.
3.  Phase: $\angle G(j\omega)H(j\omega) = -\arctan(\omega)$.
4.  As $\omega$ goes from 0 to $\infty$:
    *   Magnitude goes from 1 to 0.
    *   Phase goes from 0 to $-\pi/2$.
5.  The Nyquist plot for $\omega \in [0, \infty)$ is a quarter circle in the fourth quadrant.
6.  For $\omega \in [-\infty, 0]$, the plot is the mirror image in the first quadrant.
7.  The complete Nyquist plot for $G(s)H(s) = \frac{1}{s+1}$ is a circle of radius 1/2 centered at (1/2, 0), starting at (1,0) for $\omega=0$ and ending at (0,0) for $\omega=\infty$. It passes through (0, -j1/2) for $\omega=1$.
8.  This plot does not encircle the critical point $(-1, 0)$.
9.  The open-loop transfer function $G(s)H(s) = \frac{1}{s+1}$ has $P=0$ (no poles in RHP).
10. Since $N=0$ and $P=0$, $N=P$, so the system is stable.

**Textbook Reference:**
*   Doebelin E. O., *Measurement Systems Applications and Design*, Chapter 14: Stability Analysis.
*   Gopal M., *Control Systems Principles and Design*, Chapter 10: Stability Analysis.

---

### 4. Gain Margin and Phase Margin from the Nyquist Plot

The Nyquist plot directly provides valuable information about the relative stability of the system through gain margin and phase margin.

**Key Concepts:**

*   **Gain Margin (GM):** The factor by which the open-loop gain can be increased before the closed-loop system becomes unstable. It is measured at the phase crossover frequency.
*   **Phase Crossover Frequency ($\omega_{pc}$):** The frequency at which the phase of the open-loop transfer function is $-180^\circ$ (or $-\pi$ radians). This is where the Nyquist plot crosses the negative real axis.
*   **Phase Margin (PM):** The additional phase lag that can be introduced into the system before it becomes unstable. It is measured at the gain crossover frequency.
*   **Gain Crossover Frequency ($\omega_{gc}$):** The frequency at which the magnitude of the open-loop transfer function is unity (0 dB). This is where the Nyquist plot crosses the unit circle centered at the origin.

**Determining GM and PM from the Nyquist Plot:**

1.  **Phase Crossover Point:** Locate the point on the Nyquist plot where it intersects the negative real axis. Let this point be $G(j\omega_{pc})H(j\omega_{pc})$.
    *   **Gain Margin (GM):** The gain margin is $| \frac{1}{G(j\omega_{pc})H(j\omega_{pc})} |$. It can also be expressed in dB as $20 \log_{10} | \frac{1}{G(j\omega_{pc})H(j\omega_{pc})} |$. If the intersection is on the negative real axis at $-k$, then $GM = \frac{1}{k}$.

2.  **Gain Crossover Point:** Locate the point on the Nyquist plot where it intersects the unit circle (magnitude is 1). Let this frequency be $\omega_{gc}$.
    *   **Phase Margin (PM):** The phase margin is the angle between the negative real axis and the vector from the origin to the point $G(j\omega_{gc})H(j\omega_{gc})$. If the angle is $-\phi$, then $PM = 180^\circ - \phi$ (in degrees) or $\pi - \phi$ (in radians).

**Relationship to Stability:**

*   A positive gain margin and a positive phase margin generally indicate a stable system.
*   For stability, the Nyquist plot should not encircle $(-1, 0)$ in a way that violates $N=P$.
*   A larger phase margin generally implies a more robustly stable system with better transient response (less overshoot and oscillation).

**Textbook Reference:**
*   Krishnaswamy K., *Industrial Instrumentation*, Chapter 7: Control Systems.
*   Singh S. K., *Industrial Instrumentation and Control*, Chapter 9: Stability of Control Systems.

---

### 5. Practice Questions and Exercises

**Question 1:**
For the open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$, determine the value of $K$ for which the closed-loop system is marginally stable using the Nyquist criterion.
**(CO6: Analyse the stability of the given LTI system)**

**Solution 1:**
1.  Open-loop transfer function: $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.
2.  Substitute $s=j\omega$: $G(j\omega)H(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+2)} = \frac{K}{j\omega(-\omega^2+3j\omega+2)} = \frac{K}{j\omega(2-\omega^2+j3\omega)}$
    $G(j\omega)H(j\omega) = \frac{K}{(2\omega^2-3j\omega^3) + j(2\omega - \omega^3)} = \frac{K}{(2\omega^2-\omega^3) + j(2\omega - \omega^3)}$ (Incorrect algebra)

    Let's re-evaluate the denominator:
    $j\omega(j\omega+1)(j\omega+2) = j\omega [ (j\omega)^2 + 3(j\omega) + 2 ] = j\omega [ -\omega^2 + 3j\omega + 2 ]$
    $= j\omega [ (2-\omega^2) + j3\omega ] = j\omega(2-\omega^2) + (j\omega)(j3\omega)$
    $= j\omega(2-\omega^2) - 3\omega^2$
    $= -3\omega^2 + j\omega(2-\omega^2)$

    So, $G(j\omega)H(j\omega) = \frac{K}{-3\omega^2 + j\omega(2-\omega^2)}$.

3.  For marginal stability, the Nyquist plot must pass through the critical point $(-1, 0)$.
    This means the imaginary part of $G(j\omega)H(j\omega)$ must be zero at some frequency $\omega_{pc}$, and the real part at that frequency must be -1.

4.  Imaginary part: $\omega(2-\omega^2) = 0$.
    Since $\omega \neq 0$ (for a finite magnitude), we have $2-\omega^2 = 0$, which gives $\omega_{pc}^2 = 2$, so $\omega_{pc} = \sqrt{2}$ rad/sec.

5.  Real part at $\omega_{pc} = \sqrt{2}$:
    $\text{Re}[G(j\omega_{pc})H(j\omega_{pc})] = \frac{K}{-3\omega_{pc}^2} = \frac{K}{-3(2)} = \frac{K}{-6}$.

6.  For the plot to pass through $(-1, 0)$, the real part must be -1.
    $\frac{K}{-6} = -1 \implies K = 6$.

7.  The open-loop transfer function has $P=0$ (no poles in RHP). For marginal stability, $N=0$.
    When $K=6$, the plot passes through $(-1, 0)$, indicating marginal stability.

**Answer:** $K=6$.

**Question 2:**
Sketch the Nyquist plot for $G(s)H(s) = \frac{1}{s(s+2)}$. Determine the gain margin and phase margin from your sketch (or by calculation).
**(CO6: Analyse the stability of the given LTI system)**

**Solution 2:**
1.  $G(s)H(s) = \frac{1}{s(s+2)}$.
2.  $G(j\omega)H(j\omega) = \frac{1}{j\omega(j\omega+2)} = \frac{1}{-\omega^2 + j2\omega}$.
3.  Magnitude: $|G(j\omega)H(j\omega)| = \frac{1}{\sqrt{\omega^4 + 4\omega^2}} = \frac{1}{\omega\sqrt{\omega^2+4}}$.
4.  Phase: $\angle G(j\omega)H(j\omega) = -90^\circ - \arctan(\frac{2\omega}{\omega^2}) = -90^\circ - \arctan(\frac{2}{\omega})$.

5.  **As $\omega$ goes from 0 to $\infty$:**
    *   At $\omega=0$: Magnitude $\to \infty$, Phase $\to -90^\circ$. The plot starts at infinity along the negative imaginary axis.
    *   As $\omega$ increases: Magnitude decreases, Phase becomes more negative (approaching $-180^\circ$).
    *   At $\omega=\infty$: Magnitude $\to 0$, Phase $\to -180^\circ$. The plot approaches the origin along the negative real axis.

6.  **Phase Crossover Frequency ($\omega_{pc}$):**
    We need the phase to be $-180^\circ$.
    $-90^\circ - \arctan(\frac{2}{\omega_{pc}}) = -180^\circ$
    $\arctan(\frac{2}{\omega_{pc}}) = 90^\circ$
    This implies $\frac{2}{\omega_{pc}} \to \infty$, so $\omega_{pc} \to 0$. This is not helpful for gain margin if it approaches the origin from the imaginary axis.

    Let's consider the point where the plot crosses the negative real axis. This happens when the imaginary part is zero.
    Imaginary part of $G(j\omega)H(j\omega)$ is $2\omega$. For $\omega > 0$, this is never zero. However, the denominator's imaginary part is $2\omega$. The overall phase is $-90^\circ$ from $1/j\omega$ and then the phase of $1/(j\omega+2)$.
    Let's re-examine the phase:
    $G(j\omega)H(j\omega) = \frac{1}{-\omega^2 + j2\omega} = \frac{-\omega^2 - j2\omega}{\omega^4 + 4\omega^2} = \frac{-\omega^2}{\omega^2(\omega^2+4)} - j\frac{2\omega}{\omega^2(\omega^2+4)}$
    $G(j\omega)H(j\omega) = \frac{-1}{\omega^2+4} - j\frac{2}{\omega(\omega^2+4)}$

    *   Real part: $\frac{-1}{\omega^2+4}$
    *   Imaginary part: $\frac{-2}{\omega(\omega^2+4)}$

    The plot crosses the negative real axis when the imaginary part is zero.
    $\frac{-2}{\omega(\omega^2+4)} = 0$. This never happens for finite $\omega$.
    However, as $\omega \to \infty$, the imaginary part goes to 0 from the negative side, and the real part goes to 0.

    Let's consider the phase crossover frequency from the phase directly:
    Phase = $-90^\circ - \arctan(2/\omega)$.
    We want the phase to be $-180^\circ$.
    $-90^\circ - \arctan(2/\omega) = -180^\circ$
    $\arctan(2/\omega) = 90^\circ$. This means $2/\omega \to \infty$, so $\omega \to 0$.

    This indicates that the phase approaches $-180^\circ$ as $\omega \to \infty$, and the magnitude approaches 0.
    There is no explicit phase crossover frequency in the traditional sense for this system where the phase is exactly $-180^\circ$ at a finite frequency.

    Let's look at the critical point $(-1,0)$. The Nyquist plot starts at the origin (for $\omega \to \infty$, phase $\to -180^\circ$) and moves towards the imaginary axis as $\omega \to 0$.
    The real part is $\frac{-1}{\omega^2+4}$. The maximum value (least negative) is -1/4 at $\omega=0$. It approaches 0 as $\omega \to \infty$.
    The imaginary part is $\frac{-2}{\omega(\omega^2+4)}$. At $\omega=0$, it goes to $-\infty$. At $\omega=\infty$, it goes to 0.

    The Nyquist plot for $\omega \in [0, \infty)$ is a curve starting from $(0, -j\infty)$ and ending at $(0, 0)$ along the negative real axis. It passes through $(-1/4, -j\sqrt{2}/4)$ at $\omega=\sqrt{2}$.
    The plot for $\omega \in [-\infty, 0]$ is the mirror image in the first quadrant.
    The complete plot does **not** encircle the critical point $(-1, 0)$.
    The open-loop system has $P=0$ (pole at $s=0$ and $s=-2$, no RHP poles).
    Since $N=0$ and $P=0$, $N=P$, the system is stable.

7.  **Gain Margin (GM):**
    The Nyquist plot for $\omega \in [0, \infty)$ starts at $(0, -j\infty)$ and moves towards the origin along the negative real axis. The real part is always negative, reaching a maximum value of -1/4. It never crosses the negative real axis at any finite frequency, meaning there is no phase crossover frequency in the traditional sense.
    If we consider the direction of approach to the origin, the phase is approaching $-180^\circ$. The gain at this point (approaching the origin) is 0.
    The phase crossover frequency can be considered $\omega \to \infty$, where the phase is $-180^\circ$ and the magnitude is 0.
    Gain margin is $1/|\text{Real part at phase crossover}|$. Since the magnitude is 0, the gain margin is infinite.

8.  **Phase Margin (PM):**
    We need the gain crossover frequency $\omega_{gc}$, where $|G(j\omega_{gc})H(j\omega_{gc})| = 1$.
    $\frac{1}{\omega_{gc}\sqrt{\omega_{gc}^2+4}} = 1$
    $\omega_{gc}^2(\omega_{gc}^2+4) = 1$
    $\omega_{gc}^4 + 4\omega_{gc}^2 - 1 = 0$.
    Let $x = \omega_{gc}^2$. Then $x^2 + 4x - 1 = 0$.
    Using the quadratic formula: $x = \frac{-4 \pm \sqrt{16 - 4(1)(-1)}}{2} = \frac{-4 \pm \sqrt{20}}{2} = -2 \pm \sqrt{5}$.
    Since $\omega_{gc}^2$ must be positive, $\omega_{gc}^2 = -2 + \sqrt{5} \approx 0.236$.
    $\omega_{gc} = \sqrt{0.236} \approx 0.486$ rad/sec.

    At $\omega_{gc} \approx 0.486$, the phase is:
    Phase = $-90^\circ - \arctan(\frac{2}{0.486}) \approx -90^\circ - \arctan(4.115)$
    Phase $\approx -90^\circ - 76.3^\circ = -166.3^\circ$.

    The phase margin is $180^\circ - 166.3^\circ = 13.7^\circ$.

**Answer:** The Nyquist plot starts at $(0, -j\infty)$ and ends at $(0,0)$ along the negative real axis. It passes through the point $(-1/4, -j\sqrt{2}/4)$ at $\omega=\sqrt{2}$. The Gain Margin is infinite, and the Phase Margin is approximately $13.7^\circ$.

---

### 6. Importance and Applications of Nyquist Plot

The Nyquist plot is a cornerstone of control system analysis due to its ability to:

*   **Determine Absolute Stability:** Provides a definitive criterion for stability for any linear time-invariant (LTI) system, even those with time delays or poles/zeros in the RHP. (CO6)
*   **Assess Relative Stability:** Quantifies stability through gain and phase margins, indicating how close the system is to instability. This helps in designing systems with desired robustness. (CO5, CO6)
*   **Understand System Behavior:** Visualizing the frequency response provides insights into how the system amplifies or attenuates signals at different frequencies, which relates to transient response characteristics like overshoot and settling time. (CO5)
*   **Design Controllers:** Nyquist plots can be used in conjunction with compensator design to shape the frequency response and achieve desired stability and performance specifications.
*   **Handle Complex Systems:** It is particularly useful for systems with time delays, which are difficult to analyze using root locus alone.

**Textbook Reference:**
*   Ogata K., *Modern Control Engineering*, Chapter 9: Frequency Response Analysis.
*   Kuo B. C., *Automatic Control Systems*, Chapter 11: Nyquist Criterion.

---

### 7. Relationship to Other Frequency Domain Techniques

The Nyquist plot is closely related to other frequency domain analysis tools:

*   **Bode Plot:** The Bode plot (magnitude and phase vs. frequency on a log scale) can be used to sketch the Nyquist plot. The phase crossover frequency on the Bode plot corresponds to the point where the Nyquist plot crosses the negative real axis. The gain crossover frequency on the Bode plot corresponds to the point where the Nyquist plot crosses the unit circle. (CO5)
*   **Nichols Chart:** The Nichols chart, which plots magnitude (in dB) vs. phase (in degrees) on a log-M circle grid, provides an alternative way to determine closed-loop performance from open-loop frequency response. It is essentially a transformation of the Nyquist plot.

**Textbook Reference:**
*   Nise N.S., *Control Systems Engineering*, Chapter 8: Frequency Response Analysis.

---

### 8. Important Points to Remember

*   The Nyquist plot is a plot of the **open-loop** transfer function $G(s)H(s)$ with $s = j\omega$.
*   The contour for the Nyquist plot encloses the **entire** RHP of the s-plane.
*   The Nyquist stability criterion is $N = P - Z$. For a stable closed-loop system, $Z=0$, so $N=P$.
*   **Clockwise encirclements** of $(-1, 0)$ are counted as positive ($N > 0$).
*   If $G(s)H(s)$ has poles on the $j\omega$ axis, the contour must be **indented**.
*   Gain Margin (GM) is the reciprocal of the magnitude at the phase crossover frequency.
*   Phase Margin (PM) is $180^\circ$ minus the phase angle at the gain crossover frequency.
*   Infinite gain margin or phase margin implies a very stable system.

---

### 9. Connection to Course Outcomes

This module directly contributes to the following course outcomes:

*   **CO6: Analyse the stability of the given LTI system (Knowledge Level: K4):** The Nyquist plot and criterion are primary tools for this analysis.
*   **CO5: To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance (Knowledge Level: K4):** While Nyquist is frequency domain, its stability margins (GM, PM) are directly related to transient response characteristics like overshoot and damping, indirectly assessing performance.

---

This concludes the study notes for the Nyquist Plot in Module 4. Remember to practice sketching plots and applying the stability criterion to various transfer functions to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
