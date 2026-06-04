---
title: "Impulse and Step responses of first and second order systems - Pole dominance for higher order systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366ba"
status: "completed"
scrapedAt: "2026-05-23T16:29:26.479Z"
---
# Module 2: Performance Analysis of Control Systems

## Topic: Impulse and Step Responses of First and Second Order Systems - Pole Dominance for Higher Order Systems

### Learning Outcomes Covered:

*   Analyze the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (CO2)
*   Represent continuous time systems in the classical domain. (CO1, CO5)

### Introduction to Transient Response

The transient response of a control system is its behavior from an initial state to a final steady state when subjected to an input. Analyzing this response is crucial for understanding how quickly a system settles, how much it overshoots, and its overall stability. Standard input functions like the **step input** and **impulse input** are commonly used to assess this transient behavior.

### 1. First-Order Systems

#### 1.1. Definition and Transfer Function

A first-order system is characterized by a single energy storage element. Its general form is a first-order differential equation. The standard transfer function of a first-order system is given by:

$G(s) = \frac{K}{\tau s + 1}$

Where:
*   $K$ is the **DC gain** or **static gain**: The ratio of the steady-state output to the steady-state input.
*   $\tau$ is the **time constant**: A measure of how quickly the system responds. A smaller $\tau$ indicates a faster response.

**Source:** Nise, Section 4.1; Nagrath & Gopal, Chapter 5.1

#### 1.2. Impulse Response of a First-Order System

The impulse response is the output of the system when the input is a Dirac-delta function ($\delta(t)$), which has a value of infinity at $t=0$ and zero elsewhere, with a total area of 1.

For a unit impulse input ($R(s) = 1$):
$C(s) = G(s) R(s) = \frac{K}{\tau s + 1} \times 1 = \frac{K}{\tau s + 1}$

Using partial fraction expansion or inverse Laplace transform tables:
$C(t) = \frac{K}{\tau} e^{-t/\tau}$ for $t \ge 0$

**Key Characteristics:**
*   **Initial value:** $C(0) = \frac{K}{\tau}$
*   **Steady-state value:** As $t \to \infty$, $C(t) \to 0$. This is because a pure impulse has zero area in the time domain, meaning the system returns to its equilibrium state.
*   **Time Constant ($\tau$):** The time it takes for the response to decay to approximately 36.8% of its initial value.

**Source:** Nise, Section 4.1; Ogata, Chapter 2.3

#### 1.3. Step Response of a First-Order System

The step response is the output of the system when the input is a unit step function ($u(t)$), which has a value of 1 for $t \ge 0$ and 0 for $t < 0$.

For a unit step input ($R(s) = \frac{1}{s}$):
$C(s) = G(s) R(s) = \frac{K}{\tau s + 1} \times \frac{1}{s} = \frac{K}{s(\tau s + 1)}$

Using partial fraction expansion:
$C(s) = \frac{A}{s} + \frac{B}{\tau s + 1}$
$1 = A(\tau s + 1) + Bs$
Setting $s=0$: $1 = A(1) \Rightarrow A = 1$
Setting $s=-1/\tau$: $1 = B(-1/\tau) \Rightarrow B = -\tau$

So, $C(s) = \frac{1}{s} - \frac{\tau}{\tau s + 1} = \frac{1}{s} - \frac{1}{s + 1/\tau}$

Taking the inverse Laplace transform:
$C(t) = 1 - e^{-t/\tau}$ for $t \ge 0$

**Key Characteristics:**
*   **Initial value:** $C(0) = 1 - e^0 = 0$.
*   **Steady-state value:** As $t \to \infty$, $C(t) \to 1$. This is equal to the DC gain $K$ if $K \neq 1$. In general, for a step of magnitude $A$, $C_{ss} = A \times K$.
*   **Time Constant ($\tau$):** The time it takes for the response to reach approximately 63.2% of its steady-state value.
*   **Rise Time ($T_r$):** The time it takes for the response to go from 10% to 90% of its steady-state value.
    $0.10 C_{ss} = 1 - e^{-T_{r10}/\tau} \Rightarrow 0.90 = e^{-T_{r10}/\tau} \Rightarrow T_{r10} = -\tau \ln(0.90) \approx 0.105\tau$
    $0.90 C_{ss} = 1 - e^{-T_{r90}/\tau} \Rightarrow 0.10 = e^{-T_{r90}/\tau} \Rightarrow T_{r90} = -\tau \ln(0.10) \approx 2.303\tau$
    $T_r = T_{r90} - T_{r10} \approx 2.303\tau - 0.105\tau \approx 2.2\tau$
*   **Settling Time ($T_s$):** The time it takes for the response to stay within a certain percentage (e.g., 2% or 5%) of its steady-state value. For the 2% criterion, $T_s \approx 4\tau$. For the 5% criterion, $T_s \approx 3\tau$.

**Source:** Nise, Section 4.1; Ogata, Chapter 2.3

**Important Point to Remember:** The time constant ($\tau$) is a fundamental parameter that dictates the speed of response for a first-order system.

### 2. Second-Order Systems

#### 2.1. Definition and Transfer Function

A second-order system is characterized by two energy storage elements. Its general form is a second-order differential equation. The standard **normalized** second-order system transfer function is:

$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

Where:
*   $\omega_n$ is the **undamped natural frequency**: The frequency of oscillation if there were no damping.
*   $\zeta$ is the **damping ratio**: A dimensionless parameter that describes how oscillations decay after a disturbance.
    *   $\zeta = 0$: Undamped (oscillates forever).
    *   $0 < \zeta < 1$: **Underdamped** (oscillates with decreasing amplitude).
    *   $\zeta = 1$: **Critically damped** (fastest response without overshoot).
    *   $\zeta > 1$: **Overdamped** (slow response with no overshoot).

The **general** form of a second-order system transfer function is:

$G(s) = \frac{K' \omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

The roots of the characteristic equation $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$ are given by:

$s = \frac{-2\zeta\omega_n \pm \sqrt{(2\zeta\omega_n)^2 - 4\omega_n^2}}{2} = -\zeta\omega_n \pm \omega_n \sqrt{\zeta^2 - 1}$

Let $s_1 = -\zeta\omega_n + \omega_n \sqrt{\zeta^2 - 1}$ and $s_2 = -\zeta\omega_n - \omega_n \sqrt{\zeta^2 - 1}$.

**Source:** Nise, Section 4.2; Nagrath & Gopal, Chapter 5.2

#### 2.2. Step Response of a Second-Order System (Unit Step Input)

For a unit step input ($R(s) = 1/s$):
$C(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \times \frac{1}{s} = \frac{\omega_n^2}{s(s^2 + 2\zeta\omega_n s + \omega_n^2)}$

The form of the response depends on the value of $\zeta$.

**Case 1: Underdamped System ($0 < \zeta < 1$)**
The poles are complex: $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.
Let $\omega_d = \omega_n\sqrt{1-\zeta^2}$ (damped natural frequency).
$C(s) = \frac{\omega_n^2}{s(s - (-\zeta\omega_n + j\omega_d))(s - (-\zeta\omega_n - j\omega_d))}$

The time-domain response is:
$C(t) = 1 - e^{-\zeta\omega_n t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}} \sin(\omega_d t) \right)$
This can also be written as:
$C(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}} \cos\left(\omega_d t - \arctan\left(\frac{\zeta}{\sqrt{1-\zeta^2}}\right)\right)$

**Key Characteristics (Underdamped):**
*   **Steady-state value:** $C_{ss} = 1$ (for a unit step input with DC gain $K'=1$).
*   **Maximum Overshoot ($M_p$):** The peak value of the response minus the steady-state value, expressed as a percentage of the steady-state value.
    $M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\%$
*   **Time to Peak ($T_p$):** The time it takes to reach the maximum overshoot.
    $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   **Rise Time ($T_r$):** The time it takes for the response to go from 10% to 90% of its steady-state value.
    $T_r \approx \frac{1.8}{\omega_n}$ (for $0 < \zeta < 0.8$)
    More precisely: $T_r = \frac{1}{\omega_n} \left( \frac{\pi - \beta}{\sqrt{1-\zeta^2}} \right)$, where $\beta = \arctan\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right)$
*   **Settling Time ($T_s$):** The time it takes for the response to stay within a tolerance band (e.g., 2% or 5%) of the steady-state value.
    *   2% Settling Time: $T_{s2\%} \approx \frac{4}{\zeta\omega_n}$
    *   5% Settling Time: $T_{s5\%} \approx \frac{3}{\zeta\omega_n}$
    The term $\zeta\omega_n$ is often called the **damping factor**, which is the reciprocal of the time constant for first-order systems, indicating speed.

**Source:** Nise, Section 4.2; Ogata, Chapter 2.3; Kuo, Chapter 3.4

**Case 2: Critically Damped System ($\zeta = 1$)**
The poles are real and equal: $s = -\omega_n$.
$C(s) = \frac{\omega_n^2}{s(s + \omega_n)^2}$
$C(t) = 1 - e^{-\omega_n t} (1 + \omega_n t)$

**Key Characteristics (Critically Damped):**
*   Fastest response without overshoot.
*   Steady-state value is 1.

**Source:** Nise, Section 4.2; Ogata, Chapter 2.3

**Case 3: Overdamped System ($\zeta > 1$)**
The poles are real and distinct: $s = -\zeta\omega_n \pm \omega_n \sqrt{\zeta^2 - 1}$.
$C(s) = \frac{\omega_n^2}{s(s - s_1)(s - s_2)}$
$C(t) = 1 + \frac{1}{\sqrt{\zeta^2-1}(\zeta + \sqrt{\zeta^2-1})} e^{-(\zeta - \sqrt{\zeta^2-1})\omega_n t} - \frac{1}{\sqrt{\zeta^2-1}(\zeta - \sqrt{\zeta^2-1})} e^{-(\zeta + \sqrt{\zeta^2-1})\omega_n t}$
This is more complex and often approximated by the dominant pole.

**Key Characteristics (Overdamped):**
*   Slow response, no overshoot.
*   Steady-state value is 1.

**Source:** Nise, Section 4.2; Ogata, Chapter 2.3

**Case 4: Undamped System ($\zeta = 0$)**
The poles are purely imaginary: $s = \pm j\omega_n$.
$C(s) = \frac{\omega_n^2}{s(s^2 + \omega_n^2)}$
$C(t) = 1 - \cos(\omega_n t)$

**Key Characteristics (Undamped):**
*   Oscillates indefinitely at the natural frequency $\omega_n$.
*   No steady-state value is reached (or it oscillates between 0 and 2 for a unit step).

**Source:** Nise, Section 4.2; Ogata, Chapter 2.3

**Important Points to Remember:**
*   The damping ratio $\zeta$ is the primary determinant of the transient response characteristics (overshoot, settling time).
*   The undamped natural frequency $\omega_n$ influences the speed of the response. Higher $\omega_n$ generally means a faster response.
*   The term $\zeta\omega_n$ (damping factor) is crucial for settling time.

**Relationship between Poles and Transient Response:**
The location of the poles in the s-plane dictates the system's transient response.
*   Poles on the negative real axis: Exponential decay (like first-order systems).
*   Complex conjugate poles in the left-half plane: Damped oscillations. The real part ($\zeta\omega_n$) determines the decay rate (settling time), and the imaginary part ($\omega_d$) determines the oscillation frequency.
*   Poles on the imaginary axis: Sustained oscillations.
*   Poles in the right-half plane: Unstable response (growing oscillations).

**Source:** Nise, Chapter 4; Kuo, Chapter 3.5

### 3. Pole Dominance for Higher Order Systems

Higher-order systems are characterized by transfer functions with poles and zeros beyond the first and second order. Analyzing their transient response directly can be complex.

#### 3.1. The Concept of Dominant Poles

Many practical higher-order systems can be approximated by a lower-order system by identifying **dominant poles**. Dominant poles are those poles of the system that are closest to the imaginary axis in the s-plane. Their effect on the transient response is more significant and lasts longer than poles that are far away from the imaginary axis.

**Conditions for Dominance (Nise):**
A pole $p_i$ is considered dominant if it is significantly further left in the s-plane than other poles, meaning its corresponding term $e^{-p_i t}$ decays much faster. A common rule of thumb is that a pole $p_j$ is dominant if:

$| \frac{\text{Re}(p_i)}{\text{Re}(p_j)} | \ge 5$

where $\text{Re}(p_i)$ is the real part of pole $p_i$, and $p_j$ is the pole with the largest negative real part (closest to the imaginary axis). This implies that the decay rate of the non-dominant pole is at least 5 times faster than the dominant pole.

Another way to look at dominance is by comparing the magnitudes of the real parts of the poles. If a pole's real part is much smaller (more negative) than another pole's real part, the system can be approximated by the pole with the smaller magnitude.

**Source:** Nise, Section 4.7; Ogata, Chapter 2.7; Nagrath & Gopal, Chapter 5.4

#### 3.2. Approximating Higher-Order Systems

To approximate a higher-order system with dominant poles:
1.  **Identify all poles** of the system's transfer function.
2.  **Determine the poles closest to the imaginary axis.** These are the potential dominant poles.
3.  **Check the dominance condition.** For each potential dominant pole, verify if the other poles are at least 5 times further to the left in the s-plane.
4.  **If dominance is established**, the behavior of the higher-order system can be approximated by a lower-order system formed by these dominant poles and any dominant zeros. The non-dominant poles are effectively removed.

**Example:**
Consider a third-order system with poles at $s = -1$, $s = -5$, and $s = -10$.
The pole at $s = -1$ is closest to the imaginary axis.
Let's check if $s=-1$ is dominant over $s=-5$ and $s=-10$.
*   Ratio of real parts: $|(-1)/(-5)| = 0.2$. This means the pole at $-5$ decays 5 times faster than the pole at $-1$.
*   Ratio of real parts: $|(-1)/(-10)| = 0.1$. This means the pole at $-10$ decays 10 times faster than the pole at $-1$.

Since the other poles are significantly further left (their magnitudes are greater), the pole at $s=-1$ can be considered dominant. The system's transient response will be primarily dictated by the term $e^{-t}$. The terms $e^{-5t}$ and $e^{-10t}$ will decay much faster and will have a negligible effect on the overall response after a short period.

**Source:** Nise, Section 4.7

#### 3.3. Impact of Zeros

Zeros can also affect the transient response by altering the gain and phase of the system. A zero located close to a dominant pole can significantly influence the response, potentially causing overshoot or modifying the settling time. If a zero is located much further to the left than the dominant poles, its effect is usually minimal.

**Rule of Thumb for Dominant Poles and Zeros:**
If a zero is present at $s = -z_i$ and a dominant pole is at $s = -p_d$, the zero is considered to have a significant effect if $|z_i| \approx |p_d|$. If $|z_i| \gg |p_d|$, the zero's effect is less pronounced.

**Source:** Nise, Section 4.7

#### 3.4. Benefits of Pole Dominance Approximation

*   **Simplification:** Reduces the complexity of analysis and design for higher-order systems.
*   **Insight:** Provides a clear understanding of the dominant modes of the system's behavior.
*   **Design:** Allows for easier compensation and tuning of system parameters based on the dominant poles.

**Source:** Nise, Section 4.7

### Performance Metrics Summary

| Metric            | First-Order System ($K/(\tau s + 1)$) | Second-Order System ($ \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $) |
| :---------------- | :------------------------------------ | :------------------------------------------------------------------------ |
| **Steady-State Value** | $K$ (for unit step)                   | 1 (for unit step, $K'=1$)                                                 |
| **Rise Time ($T_r$)**  | $\approx 2.2\tau$                     | $\approx 1.8/\omega_n$ (for $0 < \zeta < 0.8$)                            |
| **Peak Overshoot ($M_p$)** | None                                  | $e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\%$                      |
| **Time to Peak ($T_p$)** | N/A                                   | $\frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$                                   |
| **Settling Time ($T_s$)** | $3\tau$ (5% criterion) / $4\tau$ (2% criterion) | $\frac{3}{\zeta\omega_n}$ (5% criterion) / $\frac{4}{\zeta\omega_n}$ (2% criterion) |
| **Dominant Parameter** | Time Constant ($\tau$)                | Damping Ratio ($\zeta$), Undamped Natural Frequency ($\omega_n$)          |

### Practice Questions

1.  **First-Order System Analysis:** A system has the transfer function $G(s) = \frac{5}{2s + 1}$.
    a.  Identify the DC gain and the time constant.
    b.  Calculate the steady-state value of the unit step response.
    c.  Calculate the approximate 2% settling time.
    d.  Calculate the time it takes for the response to reach 63.2% of its steady-state value.

2.  **Second-Order System Analysis:** A system is described by the transfer function $G(s) = \frac{16}{s^2 + 8s + 16}$.
    a.  Determine if the system is underdamped, critically damped, or overdamped.
    b.  Calculate the damping ratio and the undamped natural frequency.
    c.  If a unit step input is applied, what is the expected steady-state output?
    d.  Calculate the rise time and the 2% settling time for the unit step response.

3.  **Second-Order System with Varying Damping:** For a second-order system with $G(s) = \frac{9}{s^2 + 3s + 9}$:
    a.  Find $\omega_n$ and $\zeta$.
    b.  Calculate the maximum overshoot and the time to reach it for a unit step input.

4.  **Pole Dominance Application:** A third-order system has the transfer function:
    $G(s) = \frac{20}{(s+2)(s+5)(s+10)}$
    a.  Identify the poles of the system.
    b.  Determine if the pole at $s=-2$ can be considered dominant. Justify your answer.
    c.  Approximate the system's response using the dominant pole. What is this approximation equivalent to in terms of a simpler system?

### Answers to Practice Questions

1.  **First-Order System Analysis:**
    a.  $G(s) = \frac{5}{2s + 1}$. The DC gain $K = 5$. The time constant $\tau = 2$ seconds.
    b.  Steady-state value (for unit step) = $K = 5$.
    c.  2% Settling Time $T_s \approx 4\tau = 4 \times 2 = 8$ seconds.
    d.  The response reaches 63.2% of its steady-state value at $t = \tau = 2$ seconds.

2.  **Second-Order System Analysis:**
    a.  The characteristic equation is $s^2 + 8s + 16 = 0$. Comparing with $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
        $\omega_n^2 = 16 \Rightarrow \omega_n = 4$ rad/s.
        $2\zeta\omega_n = 8 \Rightarrow 2\zeta(4) = 8 \Rightarrow 8\zeta = 8 \Rightarrow \zeta = 1$.
        The system is **critically damped**.
    b.  Damping ratio $\zeta = 1$, Undamped natural frequency $\omega_n = 4$ rad/s.
    c.  For a unit step input, the steady-state output is 1 (since the DC gain of the normalized transfer function is 1).
    d.  For a critically damped system ($\zeta=1$):
        Rise Time $T_r$: For critically damped, it's generally faster than underdamped. A common approximation for $\zeta=1$ is $T_r \approx \frac{1}{\omega_n} = \frac{1}{4} = 0.25$ seconds.
        2% Settling Time $T_s = \frac{4}{\zeta\omega_n} = \frac{4}{1 \times 4} = 1$ second.

3.  **Second-Order System with Varying Damping:**
    a.  $G(s) = \frac{9}{s^2 + 3s + 9}$.
        $\omega_n^2 = 9 \Rightarrow \omega_n = 3$ rad/s.
        $2\zeta\omega_n = 3 \Rightarrow 2\zeta(3) = 3 \Rightarrow 6\zeta = 3 \Rightarrow \zeta = 0.5$.
    b.  Maximum Overshoot:
        $M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{\pi(0.5)}{\sqrt{1-(0.5)^2}}} \times 100\% = e^{-\frac{0.5\pi}{\sqrt{0.75}}} \times 100\%$
        $M_p = e^{-\frac{0.5\pi}{0.866}} \times 100\% = e^{-1.814} \times 100\% \approx 0.163 \times 100\% = 16.3\%$.
        Time to Peak:
        $\omega_d = \omega_n\sqrt{1-\zeta^2} = 3\sqrt{1-(0.5)^2} = 3\sqrt{0.75} = 3 \times 0.866 = 2.598$ rad/s.
        $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{2.598} \approx 1.21$ seconds.

4.  **Pole Dominance Application:**
    $G(s) = \frac{20}{(s+2)(s+5)(s+10)}$
    a.  The poles are located at $s = -2$, $s = -5$, and $s = -10$.
    b.  To check if $s=-2$ is dominant:
        Compare $|-2|$ with $|-5|$: Ratio of magnitudes of real parts is $|-5|/|-2| = 2.5$.
        Compare $|-2|$ with $|-10|$: Ratio of magnitudes of real parts is $|-10|/|-2| = 5$.
        The dominance condition is typically $| \text{RealPart}_{non-dominant} / \text{RealPart}_{dominant} | \ge 5$.
        For the pole at $s=-5$, the ratio is $5/2 = 2.5$.
        For the pole at $s=-10$, the ratio is $10/2 = 5$.
        Since the ratio for the pole at $s=-5$ is only 2.5 (less than 5), the pole at $s=-2$ might not be strictly dominant. The pole at $s=-5$ also has a significant influence. However, if we are looking for the *most* dominant pole, it is indeed $s=-2$. A more accurate approximation might involve the two poles closest to the real axis.

        Let's re-evaluate dominance. The poles are $p_1 = -2$, $p_2 = -5$, $p_3 = -10$. The pole closest to the imaginary axis is $p_1 = -2$.
        Dominance condition: $| \text{Re}(p_i) / \text{Re}(p_1) | \ge 5$ for $i=2, 3$.
        For $p_2=-5$: $|-5 / -2| = 2.5$. This is less than 5.
        For $p_3=-10$: $|-10 / -2| = 5$. This meets the condition.

        Strictly speaking, for a pole to be dominant, *all* other poles must be at least 5 times further from the imaginary axis. Since the pole at $s=-5$ is only 2.5 times further, it may still have a noticeable effect. However, the pole at $s=-2$ is still the "most" dominant. A common practice is to keep the two closest poles if the condition isn't met for all.

        For the purpose of this exercise, let's assume the question implies identifying the single most dominant pole. The pole at $s=-2$ is the most dominant.

    c.  Approximating the system using the dominant pole at $s=-2$:
        We can approximate the system by a first-order system whose pole is at $s=-2$.
        The transfer function can be written as:
        $G(s) = \frac{20}{(s+2)} \times \frac{1}{(s+5)(s+10)}$
        The term $\frac{1}{(s+5)(s+10)}$ decays much faster than $\frac{1}{s+2}$.
        We can approximate the system as a first-order system with a pole at $s=-2$.
        To find the equivalent first-order system, we need to consider the overall DC gain.
        If we keep only the pole at $s=-2$, we need to adjust the numerator to maintain the DC gain.
        Let the approximate transfer function be $G_{approx}(s) = \frac{K_{approx}}{s+2}$.
        The DC gain of the original system is $G(0) = \frac{20}{(0+2)(0+5)(0+10)} = \frac{20}{2 \times 5 \times 10} = \frac{20}{100} = 0.2$.
        So, $K_{approx} = 0.2$.
        $G_{approx}(s) = \frac{0.2}{s+2}$.
        This is a first-order system with time constant $\tau = 1/2 = 0.5$ seconds.

        **Refined Answer for 4b & 4c based on common textbook practices:** Often, the approximation involves factoring out the dominant pole term and creating a lower-order system from the remaining terms, but then the *ratio* of the pole locations determines dominance. If $| \text{Re}(p_i) / \text{Re}(p_j) | \ge 5$, $p_j$ is dominant.
        Here, $p_j=-2$, $p_i=-10$. $|-10/-2| = 5$. Dominance for $p_j=-2$ over $p_i=-10$ is met.
        However, for $p_i=-5$, $|-5/-2| = 2.5 < 5$. So, $p_j=-2$ is *not* strictly dominant over $p_i=-5$.
        In such cases, we might consider the two closest poles ($s=-2$ and $s=-5$) as dominant and the third pole ($s=-10$) as non-dominant.
        Let's assume the question implies a single dominant pole scenario. If so, $s=-2$ is the best candidate.

        **Alternative Approximation (keeping the two dominant poles):**
        $G(s) = \frac{20}{(s+2)(s+5)(s+10)} \approx \frac{K_{final}}{(s+2)(s+5)}$
        To maintain DC gain: $G(0) = \frac{20}{(2)(5)(10)} = 0.2$.
        $G_{approx}(0) = \frac{K_{final}}{(2)(5)} = \frac{K_{final}}{10}$.
        So, $\frac{K_{final}}{10} = 0.2 \Rightarrow K_{final} = 2$.
        $G_{approx}(s) = \frac{2}{(s+2)(s+5)} = \frac{2}{s^2 + 7s + 10}$.
        This is a second-order approximation.

        Given the phrasing, if asked for "the" dominant pole, it implies $s=-2$. If it's about approximating the system, considering the two closest poles is more realistic when the 5:1 ratio isn't met by all.

        **Let's stick to the primary rule for simplicity as asked in typical intro courses: $s=-2$ is the most dominant.**
        c.  Approximation: $G(s) \approx \frac{0.2}{s+2}$. This is a first-order system with time constant $\tau = 0.5$ s.

### Course Outcomes Alignment

*   **CO1 & CO5 (Represent continuous time systems in the classical domain):** The notes cover the standard transfer function representations of first and second-order systems in the Laplace domain, which is the classical domain.
*   **CO2 (Analyze time domain responses and predict transient parameters):** This is the core of the module. The notes detail the impulse and step responses of first and second-order systems and provide formulas for key transient parameters like rise time, overshoot, and settling time. The concept of pole dominance helps predict the transient response of higher-order systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
