---
title: "Time domain specifications"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366bb"
status: "completed"
scrapedAt: "2026-05-23T16:29:27.774Z"
---
# Module 2: Performance Analysis of Control Systems

## Topic: Time Domain Specifications

This module delves into the crucial aspect of control system performance analysis by examining how systems respond to standard input signals over time. Understanding these responses is vital for designing systems that are both effective and meet desired performance criteria.

### Learning Outcomes Covered:

*   **Analyze the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.** (CO2)

### Course Outcomes Alignment:

*   **CO2: Analyze the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.** (Knowledge Level: K2) This topic directly addresses CO2 by focusing on the analysis of system behavior under standard inputs and the identification of key transient response characteristics.

---

### 1. Introduction to Time Domain Analysis

Time domain analysis focuses on the system's output response, $y(t)$, as a function of time, $t$, when subjected to a known input, $r(t)$. This approach helps us understand how the system behaves dynamically, particularly during the transition from its initial state to its final steady-state value.

**Key Concepts:**

*   **Transient Response:** The part of the response that goes to zero as time approaches infinity. This is the behavior of the system as it settles down.
*   **Steady-State Response:** The part of the response that remains after the transient response has decayed. This is the long-term behavior of the system.
*   **Standard Input Functions:** These are commonly used test signals to evaluate system performance. The most common ones are:
    *   Step Input
    *   Ramp Input
    *   Impulse Input
    *   Sinusoidal Input (though primarily analyzed in the frequency domain, its transient response is also considered)

**Reference:** Nise, Chapter 5; Nagrath & Gopal, Chapter 7; Ogata, Chapter 2.

---

### 2. Standard Input Functions and Their Relevance

The choice of input signal significantly impacts how we evaluate a control system. Standard inputs are chosen because they represent common operational scenarios or are mathematically convenient for analysis.

#### 2.1. Step Input

A step input is a sudden change in the input signal from zero to a constant value (usually 1 or a constant amplitude $A$). It represents a sudden application of a command or a disturbance.

*   **Mathematical Representation:** $r(t) = A u(t)$, where $u(t)$ is the unit step function.
*   **Relevance:** Simulates sudden changes in desired setpoints, load disturbances, or switching operations. It's the most widely used input for analyzing transient response.

#### 2.2. Ramp Input

A ramp input is a signal that increases linearly with time.

*   **Mathematical Representation:** $r(t) = A t u(t)$, where $A$ is the slope of the ramp.
*   **Relevance:** Represents scenarios where the command signal changes at a constant rate, such as following a moving object or controlling a velocity.

#### 2.3. Impulse Input

An impulse input is a signal that is theoretically infinitely high and infinitesimally narrow, with a finite area (usually 1). It represents a very short-duration disturbance or a sudden impact.

*   **Mathematical Representation:** $r(t) = A \delta(t)$, where $\delta(t)$ is the Dirac delta function.
*   **Relevance:** Provides information about the system's natural response characteristics without the influence of the input's duration. Its Laplace transform is a constant, simplifying certain analyses.

#### 2.4. Sinusoidal Input

A sinusoidal input is a signal that varies periodically with time.

*   **Mathematical Representation:** $r(t) = A \sin(\omega t) u(t)$ or $r(t) = A \cos(\omega t) u(t)$.
*   **Relevance:** While primarily used in frequency domain analysis, observing the system's response to sinusoids can also reveal transient behavior, especially at lower frequencies.

**Important Point:** The time domain specifications are primarily defined and analyzed using the **step input response**.

---

### 3. Time Domain Specifications for Second-Order Systems

Second-order systems are fundamental in control theory because many higher-order systems can be approximated by a second-order system. The time domain specifications are clearly defined and analyzed for these systems.

**General Form of a Second-Order System Transfer Function:**

$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

Where:
*   $\omega_n$ is the **undamped natural frequency** (radians per second). It represents the frequency of oscillation if there were no damping.
*   $\zeta$ is the **damping ratio**. It is a dimensionless parameter that describes how oscillations decay after a disturbance.

**Categories of Second-Order System Response based on $\zeta$:**

*   **$\zeta < 0$**: Unstable system (response grows indefinitely).
*   **$\zeta = 0$**: Marginally stable system (sustained oscillations).
*   **$0 < \zeta < 1$**: Underdamped system (oscillatory response that decays over time). This is the most common and desirable scenario for transient analysis.
*   **$\zeta = 1$**: Critically damped system (fastest response without overshoot).
*   **$\zeta > 1$**: Overdamped system (slow response with no overshoot).

**Time Domain Specifications (primarily for step response of underdamped systems):**

Let's consider the unit step response $y(t)$ to a unit step input $r(t) = u(t)$.

#### 3.1. Delay Time ($t_d$)

The time required for the response to reach **50%** of its final steady-state value for the first time.

*   **Formula for Unit Step Input:** $t_d = \frac{1 + 0.7\zeta}{\omega_n}$
*   **Observation:** Corresponds to the initial part of the response curve.

#### 3.2. Rise Time ($t_r$)

The time required for the response to rise from **10%** to **90%** of its final steady-state value. For underdamped systems, it's often considered from 0% to 100% of the final value.

*   **Formula for Unit Step Input (0% to 100%):** $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
    *   Alternatively, for general $\zeta$: $t_r = \frac{\pi}{\omega_d}$, where $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is the damped natural frequency.
*   **Observation:** A shorter rise time indicates a faster system. This is a crucial measure of how quickly the system responds.

#### 3.3. Peak Time ($t_p$)

The time required for the response to reach its **first peak** (maximum overshoot).

*   **Formula for Unit Step Input:** $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   **Observation:** Closely related to the rise time; indicates when the system "overshoots" the most.

#### 3.4. Maximum Overshoot ($M_p$ or $\%OS$)

The maximum amount by which the response exceeds its final steady-state value, usually expressed as a percentage of the final value.

*   **Formula for Unit Step Input:** $M_p = y(t_p) - y_{final}$
*   **Formula in Percentage:** $\%OS = \frac{M_p}{y_{final}} \times 100\% = \frac{y(t_p) - y_{final}}{y_{final}} \times 100\%$
*   **For a unit step input ($y_{final}=1$):** $\%OS = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\%$
*   **Observation:** A high overshoot indicates an oscillatory system. Excessive overshoot is often undesirable as it can lead to instability or damage to the system components.

#### 3.5. Settling Time ($t_s$)

The time required for the response to reach and stay within a specified tolerance band around its final steady-state value. The most common tolerance bands are ±2% or ±5%.

*   **Formula for $\pm 2\%$ Tolerance Band (for unit step input):** $t_s \approx \frac{4}{\zeta\omega_n}$
*   **Formula for $\pm 5\%$ Tolerance Band (for unit step input):** $t_s \approx \frac{3}{\zeta\omega_n}$
*   **Observation:** Indicates how long it takes for the system to "settle down" and become effectively constant. A shorter settling time is generally preferred.

**Relationship between Specifications and System Parameters ($\zeta$, $\omega_n$):**

*   **Increasing $\zeta$ (closer to 1):**
    *   Decreases overshoot ($M_p$).
    *   Decreases rise time ($t_r$) and peak time ($t_p$) up to $\zeta \approx 0.707$. Beyond that, it starts increasing them.
    *   Increases settling time ($t_s$).
*   **Increasing $\omega_n$ (for a fixed $\zeta$):**
    *   Decreases delay time ($t_d$), rise time ($t_r$), peak time ($t_p$), and settling time ($t_s$).
    *   Does not affect the maximum overshoot ($M_p$).

**Example:**
Consider a second-order system with the transfer function $G(s) = \frac{16}{s^2 + 8s + 16}$.
This is a critically damped system because the denominator is $(s+4)^2$. Here, $\omega_n = 4$ and $2\zeta\omega_n = 8 \implies 2\zeta(4) = 8 \implies 8\zeta = 8 \implies \zeta = 1$.

If $G(s) = \frac{16}{s^2 + 4s + 16}$, then:
$\omega_n^2 = 16 \implies \omega_n = 4$ rad/s.
$2\zeta\omega_n = 4 \implies 2\zeta(4) = 4 \implies 8\zeta = 4 \implies \zeta = 0.5$.

For a unit step input:
*   $t_d = \frac{1 + 0.7(0.5)}{4} = \frac{1 + 0.35}{4} = \frac{1.35}{4} \approx 0.3375$ s
*   $\omega_d = \omega_n\sqrt{1-\zeta^2} = 4\sqrt{1-(0.5)^2} = 4\sqrt{1-0.25} = 4\sqrt{0.75} \approx 4 \times 0.866 = 3.464$ rad/s
*   $t_r = \frac{\pi}{\omega_d} = \frac{\pi}{3.464} \approx 0.907$ s
*   $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{3.464} \approx 0.907$ s
*   $\%OS = e^{-\frac{\pi(0.5)}{\sqrt{1-(0.5)^2}}} \times 100\% = e^{-\frac{0.5\pi}{\sqrt{0.75}}} \times 100\% = e^{-\frac{1.57}{0.866}} \times 100\% = e^{-1.812} \times 100\% \approx 0.163 \times 100\% = 16.3\%$
*   $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 4} = \frac{4}{2} = 2$ s (for 2% tolerance)

**Reference:** Nise, Chapter 5.2; Nagrath & Gopal, Chapter 7.3; Ogata, Chapter 2.4.

---

### 4. Time Domain Specifications for Higher-Order Systems

While the detailed formulas are derived for second-order systems, the concepts of overshoot, settling time, and rise time are still applicable to higher-order systems.

**Approximation using Dominant Second-Order Poles:**

Many higher-order systems can be approximated by a dominant second-order system if:
1.  The system has a pair of complex conjugate dominant poles.
2.  The system has at least one pair of real poles that are significantly far to the left in the s-plane (i.e., much smaller negative real parts) compared to the dominant complex poles.
3.  The system has zeros that do not significantly affect the transient response, or they are located far to the left.

If these conditions are met, the time domain specifications of the higher-order system can be approximated using the formulas for the dominant second-order poles. The further left the non-dominant poles are, the better the approximation.

**Example:**
Consider a third-order system with poles at $s = -10$, and $s = -1 \pm j2$.
The poles at $-1 \pm j2$ are closer to the imaginary axis. Their magnitude is $\sqrt{(-1)^2 + 2^2} = \sqrt{1+4} = \sqrt{5} \approx 2.236$.
The pole at $s = -10$ is significantly further left.
The ratio of the real part of the non-dominant pole to the real part of the dominant poles is $|-10 / -1| = 10$. This large ratio suggests that the third-order system can be approximated by a second-order system with dominant poles at $s = -1 \pm j2$.
From $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$, we have:
$-\zeta\omega_n = -1$ and $\omega_n\sqrt{1-\zeta^2} = 2$.
From $-\zeta\omega_n = -1$, $\zeta\omega_n = 1$.
Substituting this into the second equation: $\sqrt{1-\zeta^2} \cdot \omega_n = 2$.
$(\zeta\omega_n)\sqrt{1/\zeta^2 - 1} = 2$
$1 \cdot \sqrt{1/\zeta^2 - 1} = 2$
$1/\zeta^2 - 1 = 4$
$1/\zeta^2 = 5 \implies \zeta^2 = 1/5 \implies \zeta = 1/\sqrt{5} \approx 0.447$
$\omega_n = 1/\zeta = \sqrt{5} \approx 2.236$ rad/s.

We can then use these $\zeta$ and $\omega_n$ values to calculate the approximate time domain specifications.

**Reference:** Nise, Chapter 5.4; Ogata, Chapter 2.4.

---

### 5. Performance Analysis of First-Order Systems

First-order systems are characterized by a single pole. Their response to a step input is monotonic and does not exhibit overshoot or oscillations.

**General Form of a First-Order System Transfer Function:**

$$ G(s) = \frac{K}{s + a} $$

Where:
*   $K$ is the gain.
*   $a$ is a positive constant related to the time constant.

The **time constant**, $\tau$, is defined as $\tau = 1/a$.

**Step Response of a First-Order System:**

For a unit step input $R(s) = 1/s$, the output in the time domain is:
$$ y(t) = K(1 - e^{-at}) u(t) $$
Or, in terms of $\tau$:
$$ y(t) = K(1 - e^{-t/\tau}) u(t) $$

**Key Characteristics of First-Order Step Response:**

*   **Final Value:** As $t \to \infty$, $y(t) \to K$. This is the steady-state value.
*   **Time Constant ($\tau$):** The time required for the response to reach approximately **63.2%** of its final steady-state value.
    *   $y(\tau) = K(1 - e^{-\tau/\tau}) = K(1 - e^{-1}) \approx K(1 - 0.368) = 0.632K$.
*   **Rise Time (approximate):** The time to go from 0% to 63.2% is $\tau$. A common approximation for rise time (0% to 90%) is about $2.2\tau$.
*   **Settling Time (approximate):**
    *   For $\pm 2\%$ tolerance: $t_s \approx 4\tau$.
    *   For $\pm 5\%$ tolerance: $t_s \approx 3\tau$.

**Reference:** Nise, Chapter 4.2; Nagrath & Gopal, Chapter 6.3.

---

### 6. Practice Questions and Exercises

**Question 1:**
For a second-order system with the transfer function $G(s) = \frac{25}{s^2 + 6s + 25}$, determine the following time domain specifications for a unit step input:
a) Undamped natural frequency ($\omega_n$)
b) Damping ratio ($\zeta$)
c) Delay time ($t_d$)
d) Rise time ($t_r$)
e) Peak time ($t_p$)
f) Maximum overshoot ($\%OS$)
g) Settling time ($t_s$) for a 2% tolerance band.

**Answer 1:**
The standard form of a second-order system is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing the given $G(s) = \frac{25}{s^2 + 6s + 25}$ with the standard form:

a) $\omega_n^2 = 25 \implies \omega_n = 5$ rad/s.
b) $2\zeta\omega_n = 6 \implies 2\zeta(5) = 6 \implies 10\zeta = 6 \implies \zeta = 0.6$.

Now, calculate the specifications:
*   $\omega_d = \omega_n\sqrt{1-\zeta^2} = 5\sqrt{1-(0.6)^2} = 5\sqrt{1-0.36} = 5\sqrt{0.64} = 5 \times 0.8 = 4$ rad/s.

c) $t_d = \frac{1 + 0.7\zeta}{\omega_n} = \frac{1 + 0.7(0.6)}{5} = \frac{1 + 0.42}{5} = \frac{1.42}{5} = 0.284$ s.

d) $t_r = \frac{\pi}{\omega_d} = \frac{\pi}{4} \approx 0.785$ s.

e) $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{4} \approx 0.785$ s.

f) $\%OS = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{\pi(0.6)}{\sqrt{1-(0.6)^2}}} \times 100\% = e^{-\frac{0.6\pi}{0.8}} \times 100\% = e^{-0.75\pi} \times 100\% = e^{-2.356} \times 100\% \approx 0.094 \times 100\% = 9.4\%$.

g) $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.6 \times 5} = \frac{4}{3} \approx 1.333$ s.

**Question 2:**
A system's step response has a delay time of 0.5 s, a rise time of 1.5 s, and a settling time (2% criteria) of 4 s. If this system can be approximated by a second-order system, estimate its damping ratio ($\zeta$) and undamped natural frequency ($\omega_n$).

**Answer 2:**
We use the relationships for a second-order system:
*   $t_d \approx \frac{1 + 0.7\zeta}{\omega_n}$
*   $t_r \approx \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   $t_s \approx \frac{4}{\zeta\omega_n}$

From $t_s$:
$4 \approx \frac{4}{\zeta\omega_n} \implies \zeta\omega_n \approx 1$.

From $t_r$:
$1.5 \approx \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
$\omega_n\sqrt{1-\zeta^2} \approx \frac{\pi}{1.5} \approx 2.094$.

Now we have two equations:
1.  $\zeta\omega_n = 1$
2.  $\omega_n\sqrt{1-\zeta^2} = 2.094$

From (1), $\omega_n = 1/\zeta$. Substitute this into (2):
$(1/\zeta)\sqrt{1-\zeta^2} = 2.094$
$\sqrt{1-\zeta^2} = 2.094 \zeta$
Square both sides:
$1-\zeta^2 = (2.094)^2 \zeta^2$
$1-\zeta^2 \approx 4.385 \zeta^2$
$1 = 5.385 \zeta^2$
$\zeta^2 = 1 / 5.385 \approx 0.1857$
$\zeta \approx \sqrt{0.1857} \approx 0.431$.

Now find $\omega_n$ using $\zeta\omega_n = 1$:
$\omega_n = 1/\zeta = 1 / 0.431 \approx 2.32$ rad/s.

Let's verify with $t_d$:
$t_d \approx \frac{1 + 0.7\zeta}{\omega_n} = \frac{1 + 0.7(0.431)}{2.32} = \frac{1 + 0.3017}{2.32} = \frac{1.3017}{2.32} \approx 0.561$ s.
This is reasonably close to the given 0.5 s, confirming our estimates.

**Estimated $\zeta \approx 0.431$ and $\omega_n \approx 2.32$ rad/s.**

---

### 7. Important Points to Remember

*   **Time domain specifications** are critical metrics for evaluating the transient behavior of a control system, especially in response to a step input.
*   The **second-order system** provides the fundamental framework for defining and understanding these specifications.
*   **$\zeta$ (damping ratio)** is the primary determinant of transient response characteristics like overshoot and oscillation damping.
    *   Low $\zeta$ (underdamped): High overshoot, oscillatory.
    *   High $\zeta$ (overdamped): Slow response, no overshoot.
    *   $\zeta = 1$ (critically damped): Fastest response without overshoot.
*   **$\omega_n$ (undamped natural frequency)** influences the speed of the response. Higher $\omega_n$ generally leads to faster transient responses but doesn't affect the percentage overshoot.
*   **Settling time ($t_s$)** is often the most crucial specification for many applications, as it indicates when the system has effectively reached its final state.
*   **Higher-order systems** can often be approximated by a dominant second-order system if certain conditions regarding pole locations are met.
*   **First-order systems** are simpler, characterized by a single time constant ($\tau$), and their step response is monotonic without overshoot.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Further Reading

*   **Nise, Norman S.** *Control Systems Engineering*. 5th ed., Wiley, 2009. (Chapters 5, 7)
*   **Nagrath, I. J., and M. Gopal.** *Control Systems Engineering*. 5th ed., New Age International, 2009. (Chapters 7, 8)
*   **Ogata, Katsuhiko.** *Modern Control Engineering*. 5th ed., Pearson Education, 2009. (Chapters 2, 5)
*   **Kuo, Benjamin C.** *Automatic Control Systems*. 9th ed., Prentice Hall of India, 2014. (Chapters 6, 7)

---