---
title: "e.Determination of Gain Margin and Phase Margin (stable and unstable, minimum/non-minimum phase system)"
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36781"
status: "completed"
scrapedAt: "2026-05-23T16:25:30.091Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: e. Determination of Gain Margin and Phase Margin

This module focuses on understanding the stability and performance of a control system by analyzing its frequency response characteristics, specifically Gain Margin (GM) and Phase Margin (PM). These metrics are crucial for assessing how well a system can reject disturbances and maintain stability in the presence of uncertainties.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of Gain Margin and Phase Margin.
*   Relate Gain Margin and Phase Margin to the stability of a closed-loop system.
*   Determine Gain Margin and Phase Margin from Bode plots, Nyquist plots, and Root Locus plots.
*   Distinguish between minimum-phase and non-minimum phase systems in the context of GM and PM.
*   Analyze how GM and PM are affected by the presence of poles and zeros in the right-half plane (unstable systems).
*   Apply experimental or simulation techniques to determine GM and PM for a given system.
*   Interpret the significance of GM and PM for system performance and robustness.

---

### Key Concepts and Definitions:

#### 1. Open-Loop Transfer Function ($G(s)H(s)$):

The transfer function of the feedback path. This is what we analyze to determine the closed-loop system's stability.

#### 2. Closed-Loop Transfer Function ($T(s)$):

The transfer function of the system after the feedback loop is closed. For a unity feedback system, $T(s) = \frac{G(s)}{1 + G(s)}$. The stability of the closed-loop system is determined by the roots of the characteristic equation $1 + G(s)H(s) = 0$.

#### 3. Frequency Response:

The behavior of a system when subjected to sinusoidal inputs of varying frequencies. It's typically represented by Bode plots or Nyquist plots.

#### 4. Gain Margin (GM):

*   **Definition:** The factor by which the open-loop gain can be increased before the closed-loop system becomes unstable.
*   **Graphical Interpretation (Bode Plot):**
    *   It is determined at the **phase crossover frequency** ($\omega_{pc}$), which is the frequency where the phase of the open-loop transfer function is -180 degrees.
    *   GM is the reciprocal of the magnitude of the open-loop transfer function at $\omega_{pc}$.
    *   $GM = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|}$
    *   Often expressed in decibels (dB): $GM_{dB} = 20 \log_{10}(GM) = -20 \log_{10}(|G(j\omega_{pc})H(j\omega_{pc})|)$.
    *   A system is stable if GM > 1 (or $GM_{dB} > 0$ dB).
*   **Graphical Interpretation (Nyquist Plot):**
    *   It is the reciprocal of the distance from the origin to the point where the Nyquist locus intersects the negative real axis.
    *   If the Nyquist locus crosses the negative real axis at $-a$ (where $a > 0$), then $GM = \frac{1}{a}$.
*   **Relation to Stability:** A positive Gain Margin indicates that the system can tolerate some increase in gain without becoming unstable. A larger GM generally implies better stability robustness.

#### 5. Phase Margin (PM):

*   **Definition:** The amount of additional phase lag that can be introduced to the open-loop transfer function before the closed-loop system becomes unstable.
*   **Graphical Interpretation (Bode Plot):**
    *   It is determined at the **gain crossover frequency** ($\omega_{gc}$), which is the frequency where the magnitude of the open-loop transfer function is unity (0 dB).
    *   PM is the difference between 180 degrees and the phase of the open-loop transfer function at $\omega_{gc}$.
    *   $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$
    *   A system is stable if PM > 0 degrees.
*   **Graphical Interpretation (Nyquist Plot):**
    *   It is the angle between the negative real axis and the vector from the origin to the point where the Nyquist locus intersects the unit circle ($|G(j\omega)H(j\omega)| = 1$).
    *   If the intersection with the unit circle occurs at an angle of $-\phi$ (where $\phi > 0$), then $PM = 180^\circ - \phi$.
*   **Relation to Stability:** A positive Phase Margin indicates that the system has some phase reserve to remain stable. A larger PM generally implies better transient response, with less overshoot and ringing.

#### 6. Gain Crossover Frequency ($\omega_{gc}$):

The frequency at which the magnitude of the open-loop transfer function is unity ($|G(j\omega)H(j\omega)| = 1$ or $0$ dB).

#### 7. Phase Crossover Frequency ($\omega_{pc}$):

The frequency at which the phase of the open-loop transfer function is -180 degrees ($\angle G(j\omega)H(j\omega) = -180^\circ$).

#### 8. Minimum-Phase Systems:

*   **Definition:** Systems whose open-loop transfer function has no poles or zeros in the right-half of the s-plane (RHP).
*   **Characteristics:**
    *   All poles and zeros are in the LHP.
    *   The phase lag does not increase with frequency beyond a certain point (it either decreases or stays constant).
    *   Bode plot phase lag is monotonically decreasing (or non-increasing) for $\omega > 0$.
    *   Gain Margin and Phase Margin are directly related to stability.

#### 9. Non-Minimum Phase Systems:

*   **Definition:** Systems that have at least one pole or zero in the right-half of the s-plane (RHP).
*   **Characteristics:**
    *   The presence of RHP zeros causes the phase lag to **increase** with frequency initially, before eventually decreasing. This is a crucial distinction from minimum-phase systems.
    *   The phase lag is not monotonically decreasing.
    *   **Important Note for GM/PM:** For non-minimum phase systems, the standard definitions of GM and PM are still applicable, but their interpretation regarding stability robustness can be more complex. A RHP zero can destabilize the system even if GM and PM are positive.
    *   **Unstable Non-Minimum Phase Systems:** If a system has poles in the RHP, it is inherently unstable in open-loop. The closed-loop system might still be stabilized by feedback, but the GM and PM analysis needs to be done carefully.

#### 10. Stable vs. Unstable Systems:

*   **Stable System:** A system where the output remains bounded for any bounded input, and returns to equilibrium after a disturbance. In terms of poles, all poles of the **closed-loop** system must be in the LHP.
*   **Unstable System:** A system where the output grows without bound for some bounded input, or does not return to equilibrium after a disturbance. In terms of poles, at least one pole of the **closed-loop** system is in the RHP.

---

### Determination of Gain Margin and Phase Margin:

#### From Bode Plots:

1.  **Identify the Gain Crossover Frequency ($\omega_{gc}$):** Find the frequency where the magnitude plot crosses the 0 dB line.
2.  **Determine the Phase Margin (PM):** At $\omega_{gc}$, read the phase from the phase plot. $PM = 180^\circ + \text{Phase at } \omega_{gc}$.
3.  **Identify the Phase Crossover Frequency ($\omega_{pc}$):** Find the frequency where the phase plot crosses the -180$^\circ$ line.
4.  **Determine the Gain Margin (GM):** At $\omega_{pc}$, read the magnitude from the magnitude plot. $GM = \frac{1}{\text{Magnitude at } \omega_{pc}}$. Convert to dB if required: $GM_{dB} = -20 \log_{10}(\text{Magnitude at } \omega_{pc})$.

**Example (Minimum-Phase System):**
Consider an open-loop transfer function $G(s)H(s) = \frac{10}{s(s+1)(s+2)}$.
A Bode plot would show:
*   $\omega_{gc} \approx 1.3$ rad/s (where $|G(j\omega)H(j\omega)| = 1$)
*   Phase at $\omega_{gc} \approx -150^\circ$
*   $PM = 180^\circ + (-150^\circ) = 30^\circ$.
*   $\omega_{pc} \approx 2.5$ rad/s (where $\angle G(j\omega)H(j\omega) = -180^\circ$)
*   Magnitude at $\omega_{pc} \approx 0.5$
*   $GM = \frac{1}{0.5} = 2$ (or $20 \log_{10}(2) \approx 6$ dB).

#### From Nyquist Plots:

1.  **Identify the Intersection with the Negative Real Axis:** Find the point where the Nyquist locus crosses the negative real axis. Let this point be $-a$.
    *   **Gain Margin (GM):** $GM = \frac{1}{a}$.
2.  **Identify the Intersection with the Unit Circle:** Find the point(s) where the Nyquist locus crosses the unit circle ($|G(j\omega)H(j\omega)| = 1$). Let the angle at this intersection be $-\phi$.
    *   **Phase Margin (PM):** $PM = 180^\circ - \phi$.

**Important Note:** The Nyquist stability criterion (counting encirclements of -1) is used to determine the overall stability of the closed-loop system. GM and PM provide insights into the *degree* of stability.

#### From Root Locus Plots:

While GM and PM are primarily frequency-domain concepts, they can be indirectly understood from the Root Locus:

*   **Gain Margin (GM):** The Root Locus shows how the closed-loop poles move as the gain ($K$) varies.
    *   The system becomes unstable when the locus crosses the imaginary axis.
    *   The gain at which the locus crosses the imaginary axis is the **gain at instability**, $K_{critical}$.
    *   If the open-loop transfer function has a pole at the origin ($s$ in the denominator), the locus starts on the real axis and moves towards the imaginary axis.
    *   For a system $G(s) = \frac{K}{s(s+a)(s+b)}$, the gain margin is related to the value of $K$ that drives the system to instability. However, it's not directly read from the locus.
    *   **Key Insight:** The GM is the factor by which the actual gain can be increased from a value $K$ such that the system is stable, until it reaches $K_{critical}$. $GM = \frac{K_{critical}}{K_{stable}}$.
*   **Phase Margin (PM):**
    *   The Root Locus is constructed based on the characteristic equation $1 + K G(s)H(s) = 0$, which can be written as $G(s)H(s) = -\frac{1}{K}$.
    *   At the gain crossover frequency $\omega_{gc}$, $|G(j\omega_{gc})H(j\omega_{gc})| = 1$. This means $G(j\omega_{gc})H(j\omega_{gc}) = -1$.
    *   The phase margin $PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc})$.
    *   If we consider a point on the Root Locus corresponding to a specific gain $K$, and if this pole lies at $s = j\omega$, then for this point, $|G(j\omega)H(j\omega)| = \frac{1}{K}$ and $\angle G(j\omega)H(j\omega) = 180^\circ$.
    *   If a point on the imaginary axis ($s = j\omega$) is part of the Root Locus for a gain $K_{rl}$, and the gain crossover frequency $\omega_{gc}$ is such that $|G(j\omega_{gc})H(j\omega_{gc})| = 1$, the phase margin is the angle difference from $-180^\circ$ to the phase at $\omega_{gc}$.
    *   **Practical Note:** Directly obtaining precise GM and PM from a Root Locus plot can be challenging without further calculations. Bode or Nyquist plots are preferred for direct measurement. However, the Root Locus gives a good indication of stability by showing where the poles lie. If the locus crosses the imaginary axis, the gain at that point is $K_{critical}$.

---

### Effect of Minimum-Phase vs. Non-Minimum Phase Systems:

#### Minimum-Phase Systems:

*   **GM and PM:** Directly indicate stability. Positive GM and PM mean the system is stable. Larger values indicate better robustness and transient response.
*   **Example:** $G(s)H(s) = \frac{K}{s(s+1)}$. The phase lag increases monotonically.

#### Non-Minimum Phase Systems:

*   **RHP Zeros:** Introduce a phase lag that increases with frequency, unlike the lag that decreases or stays constant in minimum-phase systems.
*   **Impact on Bode Plot:** The phase plot can "recover" some of its lag. This means a system might have positive GM and PM at the standard $\omega_{pc}$ and $\omega_{gc}$, but can still be unstable or have poor transient response due to the RHP zero.
*   **Example:** $G(s)H(s) = \frac{K(s-1)}{s(s+1)}$. The zero at $s=1$ is in the RHP.
    *   The phase contribution from $\frac{s-1}{s+1}$ starts at $0^\circ$ at $\omega=0$, goes to $-90^\circ$ as $\omega \to \infty$. However, due to the zero, the phase contribution from the zero term $\frac{s-1}{s+1}$ will initially decrease and then increase towards 0 as $\omega \to \infty$. This means the overall phase of $G(j\omega)H(j\omega)$ might not be monotonically decreasing.
    *   **Caution:** For non-minimum phase systems, a system with positive GM and PM might still be unstable if the phase lag due to RHP zeros causes the Nyquist locus to encircle -1. The "phase margin" might be measured at a frequency where the gain is not unity, or vice versa, leading to misleading conclusions if not interpreted carefully.

#### Effect of RHP Poles (Unstable Open-Loop Systems):

*   **Inherent Instability:** If the open-loop system has poles in the RHP, it is inherently unstable.
*   **Stabilization by Feedback:** A feedback control system can stabilize an otherwise unstable open-loop system.
*   **GM and PM Analysis:** The GM and PM are still calculated from the open-loop transfer function $G(s)H(s)$. However, the interpretation needs to be cautious.
    *   If the open-loop transfer function already has RHP poles, the Nyquist plot will likely encircle the -1 point for $K>0$. This implies instability in the closed-loop system from the start.
    *   The concept of GM and PM as measures of *robustness to gain variations* still applies. If the system *can* be stabilized by feedback, these margins tell us how much gain can be added before instability occurs.

---

### Relation to Course Outcomes:

*   **CO1 (Identify and conduct experiments to model):** While this topic focuses on analysis, understanding GM/PM helps in identifying desired performance specifications that might be targeted during system modeling and controller design.
*   **CO2 (Conduct experiments and determine performance specifications):** This is directly addressed. Experiments (or simulations) can be used to obtain frequency response data (Bode/Nyquist plots) from which GM and PM are determined.
*   **CO3 (Analyze a linear continuous time system model using simulation tools):** This topic is central to analyzing system models. Simulation tools like MATLAB/Simulink allow for generating Bode/Nyquist plots from transfer function models, enabling the calculation of GM and PM.
*   **CO4 (Design suitable controllers/compensators to meet performance requirements):** GM and PM are key performance specifications. Controllers (like PID, lead, lag compensators) are designed to shape the frequency response of the open-loop system to achieve desired GM and PM values for improved stability and transient response.

---

### Important Points to Remember:

*   **GM and PM are open-loop quantities used to predict closed-loop stability.**
*   **Bode Plots:** GM from phase crossover frequency ($180^\circ$ phase), PM from gain crossover frequency ($0$ dB magnitude).
*   **Nyquist Plots:** GM from intersection with negative real axis, PM from intersection with unit circle.
*   **Positive GM (>1 or >0 dB) and Positive PM (>0$^\circ$) are generally desirable for stability.**
*   **Non-minimum phase systems (RHP zeros) can be tricky:** Positive GM/PM don't guarantee stability if RHP zeros exist. The phase lag from RHP zeros can cause unexpected behavior.
*   **RHP poles mean inherent open-loop instability:** Feedback can stabilize, but the system starts from an unstable state.
*   **Larger GM and PM generally imply better robustness and smoother transient response.**
*   **Rule of Thumb:** Typically, a PM of 30$^\circ$ to 60$^\circ$ is considered good for satisfactory transient response. GM values above 6 dB (or a gain margin of 2) are generally considered good.

---

### Practice Questions:

**Question 1:**
For an open-loop transfer function $G(s)H(s) = \frac{50}{s(s+2)(s+5)}$, determine the Gain Margin and Phase Margin using the Bode plot concept. Assume you have access to the Bode plot (or can generate one).
*   What are the approximate $\omega_{gc}$ and $\omega_{pc}$?
*   What is the PM?
*   What is the GM (in dB)?

**Question 2:**
Consider a system with an open-loop transfer function that has a Bode plot as follows:
*   Magnitude plot crosses 0 dB at $\omega_{gc} = 3$ rad/s.
*   Phase at $\omega_{gc} = 3$ rad/s is -130$^\circ$.
*   Phase plot crosses -180$^\circ$ at $\omega_{pc} = 5$ rad/s.
*   Magnitude at $\omega_{pc} = 5$ rad/s is 0.2.

Calculate the Gain Margin and Phase Margin.

**Question 3:**
What is the primary difference in the phase behavior of a minimum-phase system and a non-minimum phase system with respect to frequency? How does this affect the interpretation of Gain Margin and Phase Margin?

**Question 4:**
A system has an open-loop transfer function $G(s)H(s) = \frac{K(s-2)}{s(s+4)}$.
*   Is this a minimum-phase or non-minimum phase system? Why?
*   How would the presence of the RHP zero affect the system's stability and transient response, even if GM and PM are calculated to be positive?

**Question 5:**
Explain how the Root Locus can provide an indication of the gain margin, especially concerning the critical gain ($K_{critical}$) at which the system becomes unstable.

---

### Answers to Practice Questions:

**Answer 1:**
*   From the Bode plot (or calculation):
    *   $\omega_{gc} \approx 2.4$ rad/s (where $|G(j\omega)H(j\omega)| = 1$)
    *   Phase at $\omega_{gc} \approx -150^\circ$
    *   $\omega_{pc} \approx 4.5$ rad/s (where $\angle G(j\omega)H(j\omega) = -180^\circ$)
    *   Magnitude at $\omega_{pc} \approx 0.3$
*   $PM = 180^\circ + (-150^\circ) = 30^\circ$.
*   $GM = \frac{1}{0.3} \approx 3.33$. In dB, $GM_{dB} = 20 \log_{10}(3.33) \approx 10.46$ dB.

**Answer 2:**
*   Phase Margin (PM): Measured at $\omega_{gc} = 3$ rad/s.
    $PM = 180^\circ + (\text{Phase at } \omega_{gc}) = 180^\circ + (-130^\circ) = 50^\circ$.
*   Gain Margin (GM): Measured at $\omega_{pc} = 5$ rad/s.
    $GM = \frac{1}{\text{Magnitude at } \omega_{pc}} = \frac{1}{0.2} = 5$.
    In dB, $GM_{dB} = 20 \log_{10}(5) \approx 13.98$ dB.

**Answer 3:**
The key difference lies in the **phase lag contribution of RHP zeros**.
*   **Minimum-Phase System:** The phase lag of the open-loop transfer function generally decreases or stays constant as frequency increases (beyond the effect of LHP poles). The phase lag is monotonically decreasing (or non-increasing) with frequency.
*   **Non-Minimum Phase System:** Due to the presence of RHP zeros, the phase lag initially *increases* with frequency, before eventually decreasing. This means the phase plot is *not* monotonically decreasing.

This non-monotonic phase behavior means that GM and PM calculated at the standard frequencies might not fully capture the stability robustness. A system might appear to have good margins, but the RHP zero can destabilize it if the phase crossover frequency falls within a range where the phase is decreasing due to the zero.

**Answer 4:**
*   This is a **non-minimum phase system** because it has a zero at $s=2$, which is in the right-half of the s-plane.
*   The RHP zero at $s=2$ contributes an initial phase lag that increases with frequency. Even if the overall system (after considering poles and the zero) has positive GM and PM, this RHP zero can cause:
    *   **Poorer transient response:** More overshoot and oscillation than a minimum-phase system with similar GM/PM.
    *   **Reduced stability margins in reality:** The effect of the zero can effectively reduce the system's ability to tolerate gain variations, even if the standard Bode plot calculations suggest otherwise.
    *   **Potential for instability:** If the frequency response characteristics (especially phase lag) are not carefully managed, the RHP zero can lead to closed-loop instability.

**Answer 5:**
The Root Locus shows how the closed-loop poles move as the open-loop gain $K$ varies.
*   If the Root Locus crosses the imaginary axis at $s = j\omega$, this indicates a frequency $\omega$ where the phase of the open-loop system is $-180^\circ$ (for the poles to be on the imaginary axis).
*   The gain $K$ at which this crossing occurs is the **critical gain** ($K_{critical}$).
*   If the open-loop transfer function has a specific gain $K_{stable}$ for which the system is stable and on the verge of instability, the gain margin can be related to $K_{critical}$. Specifically, $GM = \frac{K_{critical}}{K_{stable}}$.
*   If the locus starts in the LHP and moves towards the imaginary axis, the point where it crosses the imaginary axis signifies the point of instability. The gain at this point is the critical gain, and if the system is currently operating at a gain $K$, then the gain margin is the factor $\frac{K_{critical}}{K}$.

---
This concludes the study notes for determining Gain Margin and Phase Margin. Remember to practice applying these concepts using simulation tools or experimental data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
