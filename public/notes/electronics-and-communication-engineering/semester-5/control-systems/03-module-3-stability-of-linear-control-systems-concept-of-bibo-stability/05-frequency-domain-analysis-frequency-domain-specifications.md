---
title: "Frequency domain analysis : Frequency domain specifications"
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe95a"
status: "completed"
scrapedAt: "2026-05-23T17:54:44.595Z"
---
# Module 3: Stability of Linear Control Systems - Frequency Domain Analysis: Frequency Domain Specifications

This module focuses on understanding the stability of linear control systems using frequency domain techniques. We will specifically delve into the concept of BIBO stability and explore how frequency domain specifications are used to assess and characterize system performance and stability.

## 1. Concept of BIBO Stability

**Definition:** A linear time-invariant (LTI) system is said to be **Bounded-Input Bounded-Output (BIBO) stable** if every bounded input produces a bounded output. In simpler terms, if you apply a finite input to a stable system, the output will also remain finite and will not grow indefinitely.

**Key Concepts:**

*   **Bounded Input:** An input signal $r(t)$ is bounded if there exists a finite constant $M_r > 0$ such that $|r(t)| \le M_r$ for all $t$.
*   **Bounded Output:** An output signal $y(t)$ is bounded if there exists a finite constant $M_y > 0$ such that $|y(t)| \le M_y$ for all $t$.

**Relationship to Transfer Function:**

For an LTI system with a transfer function $G(s) = \frac{Y(s)}{R(s)}$, BIBO stability is directly related to the locations of the **poles** of the transfer function.

*   **Condition for BIBO Stability:** An LTI system is BIBO stable if and only if all the poles of its transfer function lie in the **left-half of the s-plane (LHP)**. That is, all the real parts of the poles must be negative.

**Mathematical Justification (Nagarath & Gopal, Chapter 6):**

Consider a system with transfer function $G(s) = \frac{N(s)}{D(s)}$, where $D(s)$ is the characteristic polynomial. The poles of the system are the roots of $D(s) = 0$.

If $G(s)$ is decomposed into partial fractions, the output $y(t)$ will be a sum of terms, each corresponding to a pole. For example, if $s_p$ is a pole, the output will contain a term of the form $Ce^{s_pt}$.

*   If $Re(s_p) < 0$, then $e^{s_pt} \to 0$ as $t \to \infty$. This means the contribution of this pole to the output decays over time, and for a bounded input, the output remains bounded.
*   If $Re(s_p) > 0$, then $|e^{s_pt}| \to \infty$ as $t \to \infty$. This means the contribution of this pole grows unboundedly, leading to an unbounded output even for a bounded input.
*   If $Re(s_p) = 0$ (i.e., poles on the imaginary axis), then the behavior depends on whether the poles are simple or repeated.
    *   **Simple poles on the imaginary axis:** $s_p = j\omega_0$ or $s_p = -j\omega_0$. The output will contain terms like $C \cos(\omega_0 t)$ or $C \sin(\omega_0 t)$, which are bounded but oscillate indefinitely.
    *   **Repeated poles on the imaginary axis:** For example, poles at $s=0$ (repeated) or $s=\pm j\omega_0$ (repeated). The output will contain terms like $Ct$ or $Ct \cos(\omega_0 t)$, which grow unboundedly with time.

**Important Note:** For strict BIBO stability, all poles must be in the open LHP (i.e., $Re(s_p) < 0$). If there are simple poles on the imaginary axis, the system is considered marginally stable. If there are repeated poles on the imaginary axis or poles in the RHP, the system is unstable.

**Example:**

Consider a system with the transfer function:
$G(s) = \frac{1}{(s+1)(s+2)}$

The poles are at $s = -1$ and $s = -2$. Both poles are in the LHP. Therefore, this system is BIBO stable.

Consider another system with the transfer function:
$G(s) = \frac{s+3}{(s-1)(s+2)}$

The poles are at $s = 1$ and $s = -2$. Since there is a pole at $s=1$ in the RHP, this system is BIBO unstable.

## 2. Frequency Domain Analysis: Frequency Domain Specifications

Frequency domain analysis is a powerful tool for understanding and characterizing the performance and stability of LTI control systems. It involves analyzing the system's response to sinusoidal inputs of varying frequencies. The **frequency response** of a system is obtained by evaluating its transfer function $G(s)$ by substituting $s = j\omega$, where $\omega$ is the angular frequency.

The frequency response is represented by a complex number $G(j\omega)$, which can be expressed in polar form:

$G(j\omega) = |G(j\omega)| \angle G(j\omega)$

*   $|G(j\omega)|$: **Magnitude Response** - Indicates the gain of the system at a particular frequency.
*   $\angle G(j\omega)$: **Phase Response** - Indicates the phase shift introduced by the system at that frequency.

These magnitude and phase responses are often plotted as **Bode Plots** (Magnitude vs. Frequency on a log scale, and Phase vs. Frequency on a log scale) or **Nyquist Plots** (Imaginary part of $G(j\omega)$ vs. Real part of $G(j\omega)$).

**Frequency Domain Specifications:**

These specifications provide quantitative measures of how well a system performs and how close it is to instability. They are derived from the frequency response of the **open-loop transfer function**, typically denoted as $G(j\omega)H(j\omega)$ or simply $L(j\omega)$.

**Key Frequency Domain Specifications for Stability and Performance:**

1.  **Gain Margin (GM):**
    *   **Definition:** The amount of gain that can be added to the open-loop system before it becomes unstable. It is the reciprocal of the magnitude of the open-loop transfer function at the **phase crossover frequency**.
    *   **Phase Crossover Frequency ($\omega_{pc}$):** The frequency at which the phase of the open-loop transfer function is $-180^\circ$ (or $-\pi$ radians).
    *   **Mathematical Expression:**
        $GM = \frac{1}{|L(j\omega_{pc})|}$
        In decibels (dB): $GM_{dB} = -20 \log_{10} |L(j\omega_{pc})|$
    *   **Significance:** A larger gain margin generally indicates a more stable system. A gain margin of $\infty$ dB (or $1$) means the gain is never unity at $-180^\circ$ phase shift, implying stability.
    *   **Textbook Reference:** Nagarath & Gopal (Chapter 14), Kuo & Golnaraghi (Chapter 7), Ogata (Chapter 7).

2.  **Phase Margin (PM):**
    *   **Definition:** The amount of additional phase lag that can be tolerated at the **gain crossover frequency** before the system becomes unstable.
    *   **Gain Crossover Frequency ($\omega_{gc}$):** The frequency at which the magnitude of the open-loop transfer function is unity (0 dB).
    *   **Mathematical Expression:**
        $PM = 180^\circ + \angle L(j\omega_{gc})$ (or $\pi + \angle L(j\omega_{gc})$ in radians)
        The phase margin is measured as the positive angle from the point $L(j\omega_{gc})$ to the point $-1$ on the Nyquist plot.
    *   **Significance:** A larger phase margin generally indicates a more robustly stable system and better transient response (less overshoot and ringing). A phase margin of $0^\circ$ means the system is marginally stable.
    *   **Textbook Reference:** Nagarath & Gopal (Chapter 14), Kuo & Golnaraghi (Chapter 7), Ogata (Chapter 7).

3.  **Bandwidth ($\omega_b$):**
    *   **Definition:** The range of frequencies over which the system can effectively operate. It is typically defined as the frequency at which the **closed-loop magnitude response** drops to $-3$ dB (or $1/\sqrt{2}$) of its maximum value.
    *   **Significance:** A higher bandwidth generally implies a faster system response and better ability to track fast-changing inputs. However, very high bandwidth can also lead to increased sensitivity to noise.
    *   **Textbook Reference:** Nagarath & Gopal (Chapter 14), Kuo & Golnaraghi (Chapter 7), Ogata (Chapter 7).

4.  **Resonant Peak ($M_p$):**
    *   **Definition:** The maximum value of the **closed-loop magnitude response** $|M(j\omega)| = |\frac{G(j\omega)}{1+G(j\omega)}|$ as a function of frequency.
    *   **Resonant Frequency ($\omega_r$):** The frequency at which the peak occurs.
    *   **Significance:** A large resonant peak indicates excessive overshoot and ringing in the time-domain response, signifying poor damping and potential instability. A system with $M_p \le 1.1$ to $1.3$ (corresponding to approximately 10-20% overshoot) is generally considered well-damped.
    *   **Textbook Reference:** Nagarath & Gopal (Chapter 14), Kuo & Golnaraghi (Chapter 7), Ogata (Chapter 7).

**Relationship to Time Domain Specifications:**

These frequency domain specifications are closely related to time domain specifications like rise time, settling time, and overshoot.

*   **Bandwidth** is inversely related to **rise time**: Higher bandwidth implies faster rise time.
*   **Phase Margin** is directly related to **damping ratio** ($\zeta$) and hence to **overshoot**: Larger PM means larger $\zeta$ and less overshoot. A common approximation is $PM \approx 100\zeta$ (in degrees).
*   **Resonant Peak ($M_p$)** is also related to damping ratio. For a second-order system, $M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$.

**Example Scenario:**

Consider the open-loop transfer function $L(s) = \frac{K}{s(s+1)(s+2)}$.

1.  **Find $\omega_{pc}$ and GM:**
    $L(j\omega) = \frac{K}{j\omega(j\omega+1)(j\omega+2)} = \frac{K}{j\omega(-\omega^2 + j\omega(3) + 2)} = \frac{K}{-j\omega^3 - 3\omega^2 - 2j\omega}$
    $L(j\omega) = \frac{K}{(-3\omega^2) + j(-\omega^3 - 2\omega)}$
    The phase is $\angle L(j\omega) = -90^\circ - \arctan(\frac{\omega}{1}) - \arctan(\frac{\omega}{2})$.
    To find $\omega_{pc}$, set $\angle L(j\omega) = -180^\circ$:
    $-90^\circ - \arctan(\omega_{pc}) - \arctan(\frac{\omega_{pc}}{2}) = -180^\circ$
    $\arctan(\omega_{pc}) + \arctan(\frac{\omega_{pc}}{2}) = 90^\circ$
    This implies $\omega_{pc} \to \infty$ (from the nature of the poles). Let's reconsider the phase.
    $L(j\omega) = \frac{K}{j\omega(1+j\omega)(2+j\omega)} = \frac{K}{j\omega(2 + 3j\omega - \omega^2)} = \frac{K}{j\omega(2-\omega^2) - 3\omega^2}$
    $\angle L(j\omega) = -90^\circ - \arctan(\frac{3\omega}{2-\omega^2})$
    For phase crossover, $-90^\circ - \arctan(\frac{3\omega_{pc}}{2-\omega_{pc}^2}) = -180^\circ$
    $\arctan(\frac{3\omega_{pc}}{2-\omega_{pc}^2}) = 90^\circ$. This implies $2-\omega_{pc}^2=0$ and $3\omega_{pc}>0$.
    So, $\omega_{pc}^2 = 2 \implies \omega_{pc} = \sqrt{2}$ rad/sec.
    At $\omega_{pc} = \sqrt{2}$:
    $|L(j\sqrt{2})| = |\frac{K}{j\sqrt{2}(j\sqrt{2}+1)(j\sqrt{2}+2)}| = |\frac{K}{j\sqrt{2}((-2)+j\sqrt{2}+2j\sqrt{2})}| = |\frac{K}{j\sqrt{2}(1+j\sqrt{2})}|$
    $|L(j\sqrt{2})| = |\frac{K}{j\sqrt{2}(1+j\sqrt{2})}| = |\frac{K}{j\sqrt{2}-\sqrt{2}\sqrt{2}}| = |\frac{K}{-\sqrt{2} - j\sqrt{2}}|$
    $|L(j\sqrt{2})| = \frac{K}{\sqrt{(-\sqrt{2})^2 + (-\sqrt{2})^2}} = \frac{K}{\sqrt{2+2}} = \frac{K}{2}$
    $GM = \frac{1}{|L(j\omega_{pc})|} = \frac{1}{K/2} = \frac{2}{K}$
    $GM_{dB} = 20 \log_{10} (\frac{2}{K})$

2.  **Find $\omega_{gc}$ and PM:**
    To find $\omega_{gc}$, set $|L(j\omega_{gc})| = 1$:
    $|\frac{K}{j\omega_{gc}(j\omega_{gc}+1)(j\omega_{gc}+2)}| = 1$
    $|\frac{K}{j\omega_{gc}(2+3j\omega_{gc}-\omega_{gc}^2)}| = 1$
    $|\frac{K}{j\omega_{gc}(2-\omega_{gc}^2) - 3\omega_{gc}^2}| = 1$
    $\frac{K}{\sqrt{(3\omega_{gc}^2)^2 + (\omega_{gc}(2-\omega_{gc}^2))^2}} = 1$
    $K^2 = 9\omega_{gc}^4 + \omega_{gc}^2(2-\omega_{gc}^2)^2$
    $K^2 = 9\omega_{gc}^4 + \omega_{gc}^2(4 - 4\omega_{gc}^2 + \omega_{gc}^4)$
    $K^2 = 9\omega_{gc}^4 + 4\omega_{gc}^2 - 4\omega_{gc}^4 + \omega_{gc}^6$
    $K^2 = \omega_{gc}^6 + 5\omega_{gc}^4 + 4\omega_{gc}^2$
    Let $\omega_{gc}^2 = x$. Then $K^2 = x^3 + 5x^2 + 4x$.
    Solving for $\omega_{gc}$ depends on $K$.
    Once $\omega_{gc}$ is found, calculate the phase:
    $\angle L(j\omega_{gc}) = -90^\circ - \arctan(\frac{3\omega_{gc}}{2-\omega_{gc}^2})$
    $PM = 180^\circ + \angle L(j\omega_{gc})$

**Important Points to Remember:**

*   **BIBO Stability:** All poles of the system's transfer function must be in the Left-Half Plane ($Re(s) < 0$).
*   **Frequency Response:** Analyze $G(j\omega)$.
*   **Open-Loop Analysis:** Gain Margin and Phase Margin are derived from the open-loop transfer function.
*   **Closed-Loop Analysis:** Bandwidth and Resonant Peak are derived from the closed-loop transfer function.
*   **Trade-offs:** There are often trade-offs between speed of response (bandwidth) and damping (phase margin, resonant peak).

## Practice Questions and Exercises

**Question 1:**
A system has a transfer function $G(s) = \frac{s+5}{s^2 + 4s + 13}$. Is this system BIBO stable? Justify your answer.

**Answer:**
To determine BIBO stability, we need to find the poles of the transfer function by solving the characteristic equation $s^2 + 4s + 13 = 0$.
Using the quadratic formula: $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-4 \pm \sqrt{4^2 - 4(1)(13)}}{2(1)} = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = \frac{-4 \pm j6}{2} = -2 \pm j3$.
The poles are at $s = -2 + j3$ and $s = -2 - j3$.
Since the real parts of both poles are negative ($-2$), all poles lie in the left-half of the s-plane. Therefore, the system is BIBO stable.

**Question 2:**
Consider the open-loop transfer function $L(s) = \frac{10}{s(s+2)}$.
(a) Find the phase crossover frequency ($\omega_{pc}$).
(b) Calculate the Gain Margin (GM) in dB.
(c) Find the gain crossover frequency ($\omega_{gc}$).
(d) Calculate the Phase Margin (PM) in degrees.

**Answer:**
$L(j\omega) = \frac{10}{j\omega(j\omega+2)} = \frac{10}{j\omega \cdot 2 (1+j\frac{\omega}{2})} = \frac{5}{j\omega(1+j\frac{\omega}{2})}$
$L(j\omega) = \frac{5}{j\omega - \frac{\omega^2}{2}} = \frac{5}{-\frac{\omega^2}{2} + j\omega}$

(a) **Phase Crossover Frequency ($\omega_{pc}$):**
The phase of $L(j\omega)$ is $\angle L(j\omega) = -90^\circ - \arctan(\frac{\omega}{2})$.
Set the phase to $-180^\circ$:
$-90^\circ - \arctan(\frac{\omega_{pc}}{2}) = -180^\circ$
$\arctan(\frac{\omega_{pc}}{2}) = 90^\circ$
This implies the denominator term $(\frac{\omega^2}{2})$ must be zero, which is only possible at $\omega=0$. However, at $\omega=0$, the magnitude is infinite. This type of system (integrator at the origin) does not have a finite phase crossover frequency where the phase is exactly $-180^\circ$ for unity magnitude. The phase approaches $-180^\circ$ as $\omega \to \infty$.
Let's reconsider the definition. If the system has an integrator, the phase is $-90^\circ$ at $\omega \to 0$ and $-180^\circ$ as $\omega \to \infty$. For the gain to be unity at $-180^\circ$, we would need to check that case.
However, if we interpret the question as finding the frequency where the phase is $-180^\circ$ (even if magnitude is not unity), that is at $\omega \to \infty$.

Let's assume the question intended a system where a finite $\omega_{pc}$ exists.
For $L(s) = \frac{10}{s(s+2)}$, the phase is $\angle L(j\omega) = -90^\circ - \arctan(\omega/2)$.
The phase of $-180^\circ$ is approached as $\omega \to \infty$.

Let's proceed with the calculation of GM based on the definition. For an integrator, the phase is always greater than $-180^\circ$ for finite $\omega$. The phase approaches $-180^\circ$ as $\omega \to \infty$.
$|L(j\omega)| = |\frac{10}{j\omega(j\omega+2)}| = |\frac{10}{-\omega^2 + j2\omega}| = \frac{10}{\sqrt{\omega^4 + 4\omega^2}}$.
As $\omega \to \infty$, $|L(j\omega)| \to 0$.
Therefore, the Gain Margin at $\omega_{pc} \to \infty$ is $GM = \frac{1}{0} = \infty$.
$GM_{dB} = \infty$ dB. This indicates stability.

*(Self-correction: The typical definition of $\omega_{pc}$ is where the phase is $-180^\circ$. If the magnitude is also 1 at this frequency, it's a point of instability. If magnitude is less than 1, GM is finite and positive. If magnitude is greater than 1, GM is finite and negative. If magnitude approaches 0, GM is infinite. For systems with integrators, the phase is $-90^\circ$ or more negative as $\omega$ increases. The phase $-180^\circ$ is approached asymptotically.)*

Let's re-examine the concept of GM for systems with integrators. A single integrator means the system is marginally stable in open loop if it's a unity feedback system.
For $L(s) = \frac{K}{s(s+a)}$, the phase is $-90 - \arctan(\omega/a)$. It never reaches $-180$.

Let's use a slightly different example that allows a finite $\omega_{pc}$:
Consider $L(s) = \frac{10}{(s+1)(s+2)}$.
$L(j\omega) = \frac{10}{(1+j\omega)(2+j\omega)} = \frac{10}{2 + 3j\omega - \omega^2} = \frac{10}{(2-\omega^2) + j3\omega}$
Phase: $\angle L(j\omega) = - \arctan(\frac{3\omega}{2-\omega^2})$
Set phase to $-180^\circ$: $- \arctan(\frac{3\omega_{pc}}{2-\omega_{pc}^2}) = -180^\circ \implies \arctan(\frac{3\omega_{pc}}{2-\omega_{pc}^2}) = 180^\circ$. This is not possible for real $\omega$.

My previous example calculation for $\omega_{pc}$ was for a different structure. Let's stick to the original $L(s) = \frac{10}{s(s+2)}$. For this system, the phase never reaches $-180^\circ$ for any finite $\omega$. The phase approaches $-180^\circ$ as $\omega \to \infty$, and the magnitude $|L(j\omega)| \to 0$ as $\omega \to \infty$. So GM is indeed infinite.

(c) **Gain Crossover Frequency ($\omega_{gc}$):**
Find $\omega_{gc}$ such that $|L(j\omega_{gc})| = 1$.
$\frac{10}{\sqrt{\omega_{gc}^4 + 4\omega_{gc}^2}} = 1$
$100 = \omega_{gc}^4 + 4\omega_{gc}^2$
Let $x = \omega_{gc}^2$: $x^2 + 4x - 100 = 0$.
$x = \frac{-4 \pm \sqrt{4^2 - 4(1)(-100)}}{2(1)} = \frac{-4 \pm \sqrt{16 + 400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.396}{2}$.
Since $\omega_{gc}^2$ must be positive, $\omega_{gc}^2 = \frac{-4 + 20.396}{2} = \frac{16.396}{2} = 8.198$.
$\omega_{gc} = \sqrt{8.198} \approx 2.86$ rad/sec.

(d) **Phase Margin (PM):**
Calculate the phase at $\omega_{gc} \approx 2.86$ rad/sec:
$\angle L(j2.86) = -90^\circ - \arctan(\frac{2.86}{2}) = -90^\circ - \arctan(1.43)$
$\arctan(1.43) \approx 55.02^\circ$.
$\angle L(j2.86) \approx -90^\circ - 55.02^\circ = -145.02^\circ$.
$PM = 180^\circ + \angle L(j\omega_{gc}) = 180^\circ + (-145.02^\circ) = 34.98^\circ$.

**Summary of Answers for Question 2:**
(a) $\omega_{pc} \to \infty$
(b) $GM = \infty$ dB
(c) $\omega_{gc} \approx 2.86$ rad/sec
(d) $PM \approx 34.98^\circ$

**Question 3:**
For a second-order system with transfer function $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, what is the relationship between the resonant peak $M_p$ and the damping ratio $\zeta$? If $M_p = 1.2$, what is the approximate overshoot in the step response?

**Answer:**
For a standard second-order system in unity feedback, the closed-loop transfer function is $M(s) = \frac{G(s)}{1+G(s)}$. If the open-loop $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, then the closed-loop is $M(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2 + \omega_n^2}$. This is not the standard form.

Let's consider the standard unity feedback system where the open-loop transfer function is $L(s) = \frac{\omega_n^2}{s(s + 2\zeta\omega_n)}$. The closed-loop transfer function is $T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
For this system, the resonant peak $M_p$ is given by:
$M_p = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$, for $0 \le \zeta < \frac{1}{\sqrt{2}}$.
If $\zeta \ge \frac{1}{\sqrt{2}}$, then $M_p = 1$ (no peak).

If $M_p = 1.2$, we can find $\zeta$:
$1.2 = \frac{1}{2\zeta\sqrt{1-\zeta^2}}$
$2.4\zeta\sqrt{1-\zeta^2} = 1$
Square both sides: $(2.4\zeta)^2 (1-\zeta^2) = 1$
$5.76\zeta^2 (1-\zeta^2) = 1$
$5.76\zeta^2 - 5.76\zeta^4 = 1$
$5.76\zeta^4 - 5.76\zeta^2 + 1 = 0$.
Let $y = \zeta^2$. Then $5.76y^2 - 5.76y + 1 = 0$.
$y = \frac{5.76 \pm \sqrt{5.76^2 - 4(5.76)(1)}}{2(5.76)} = \frac{5.76 \pm \sqrt{33.1776 - 23.04}}{11.52} = \frac{5.76 \pm \sqrt{10.1376}}{11.52} = \frac{5.76 \pm 3.184}{11.52}$.
$y_1 = \frac{5.76 + 3.184}{11.52} = \frac{8.944}{11.52} \approx 0.776$
$y_2 = \frac{5.76 - 3.184}{11.52} = \frac{2.576}{11.52} \approx 0.224$

So, $\zeta^2 \approx 0.776$ or $\zeta^2 \approx 0.224$.
$\zeta \approx \sqrt{0.776} \approx 0.88$ or $\zeta \approx \sqrt{0.224} \approx 0.47$.
Since $M_p > 1$, we must have $\zeta < 1/\sqrt{2} \approx 0.707$. Thus, we choose $\zeta \approx 0.47$.

The relationship between overshoot $OS$ and damping ratio $\zeta$ for a second-order system is:
$OS = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}}$
For $\zeta \approx 0.47$:
$OS = e^{-\frac{\pi(0.47)}{\sqrt{1-(0.47)^2}}} = e^{-\frac{1.476}{\sqrt{1-0.2209}}} = e^{-\frac{1.476}{\sqrt{0.7791}}} = e^{-\frac{1.476}{0.8827}} = e^{-1.672}$
$OS \approx 0.1878$.
This corresponds to approximately 18.8% overshoot.

**General Relationship between $M_p$ and $OS$ (Ogata, Chapter 5):**
A direct relationship is difficult without knowing the specific transfer function structure. However, a larger $M_p$ generally implies higher overshoot. For second-order systems, a peak of 1.2 (20% higher than steady-state value) typically corresponds to around 15-20% overshoot.

---
This concludes the study notes for Module 3: Frequency Domain Analysis - Frequency Domain Specifications. Remember to consult the provided textbooks for detailed derivations and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
