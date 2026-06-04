---
title: "LTI Systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b1"
status: "completed"
scrapedAt: "2026-05-23T16:29:14.349Z"
---
# Module 1: Introduction to Control Systems - Topic: LTI Systems

## 1. Introduction to Control Systems & LTI Systems

This module introduces the fundamental concepts of control systems and specifically delves into **Linear Time-Invariant (LTI) Systems**, which form the bedrock of classical control theory. LTI systems are ubiquitous in engineering and are characterized by their predictable behavior and ease of analysis.

**Key Concepts:**

*   **System:** A combination of components that are connected together and which also have a function or purpose.
*   **Control System:** A system designed to manage, command, direct, or regulate the behavior of other devices or systems.
*   **Input:** The signal or force applied to a system.
*   **Output:** The signal or response produced by a system.
*   **Block Diagram:** A pictorial representation of the functional relationship between the inputs and outputs of various components within a system.
*   **Feedback:** The process of measuring the output of a system and comparing it to the desired output (reference input) to generate an error signal that drives the system.

**Why LTI Systems?**

LTI systems are crucial for several reasons:

*   **Mathematical Tractability:** Their behavior can be described by linear differential equations with constant coefficients, allowing for powerful analytical techniques like Laplace transforms and frequency domain analysis.
*   **Superposition Principle:** The response of an LTI system to a sum of inputs is the sum of its responses to each individual input. This is a cornerstone of their analysis.
*   **Predictability:** Their behavior is consistent over time, meaning the system's response to a given input will be the same regardless of when the input is applied.

**Textbook References:**

*   **Nise:** Chapter 1 (Introduction) and Chapter 2 (Modeling in the Frequency Domain) will provide foundational understanding.
*   **Nagrath & Gopal:** Chapter 1 (Introduction to Control Systems) and Chapter 2 (Mathematical Modeling of Systems) are relevant.

## 2. Characteristics of LTI Systems

LTI systems are defined by two fundamental properties:

### 2.1. Linearity

A system is linear if it satisfies the **superposition principle**:

*   **Additivity:** If input $x_1(t)$ produces output $y_1(t)$ and input $x_2(t)$ produces output $y_2(t)$, then the input $x_1(t) + x_2(t)$ produces output $y_1(t) + y_2(t)$.
*   **Homogeneity (or Scaling):** If input $x(t)$ produces output $y(t)$, then the input $ax(t)$ (where 'a' is a constant) produces output $ay(t)$.

**In simpler terms:** If you double the input, you double the output. If you add two inputs together, the output is the sum of the individual outputs.

**Example:**

Consider a simple amplifier with a gain of 2.
*   If input $x(t) = 5$, output $y(t) = 2 \times 5 = 10$.
*   If input $x_1(t) = 5$ and $x_2(t) = 3$, then $x_1(t) + x_2(t) = 8$.
*   Output for $x_1(t)$ is $y_1(t) = 2 \times 5 = 10$.
*   Output for $x_2(t)$ is $y_2(t) = 2 \times 3 = 6$.
*   Output for $x_1(t) + x_2(t)$ is $y(t) = 2 \times 8 = 16$.
*   Indeed, $y_1(t) + y_2(t) = 10 + 6 = 16$. This system is linear.

**Non-linear System Example:** A system with a square operation like $y(t) = x^2(t)$ is non-linear because $a x(t)$ produces $a^2 x^2(t)$, not $a x^2(t)$.

### 2.2. Time-Invariance

A system is time-invariant if its behavior does not change over time. This means that if an input $x(t)$ produces an output $y(t)$, then a time-shifted input $x(t-\tau)$ will produce the same output, but time-shifted by $\tau$, i.e., $y(t-\tau)$.

**In simpler terms:** The system's response to an input is independent of when the input is applied.

**Example:**

Consider the same amplifier with a gain of 2.
*   If input $x(t) = 5$ at $t=1$, output $y(t) = 10$ at $t=1$.
*   If input $x(t-2) = 5$ (meaning the input of 5 is applied at $t=2$), output $y(t-2) = 10$ at $t=2$. The output is simply the original output shifted in time. This system is time-invariant.

**Non-Time-Invariant System Example:** A system with a time-varying gain, like $y(t) = t \cdot x(t)$, is not time-invariant. If $x(t)=5$, then $y(t) = 5t$. If we shift the input by $\tau$, so $x(t-\tau)=5$, then the output would be $y(t-\tau) = t \cdot x(t-\tau) = 5t$. However, according to the definition, the output should be $y(t-\tau) = (t-\tau) \cdot x(t-\tau) = 5(t-\tau)$. Since $5t \neq 5(t-\tau)$, this system is time-varying.

**Textbook References:**

*   **Nise:** Section 1.2 (Linear versus Nonlinear Systems) and Section 1.3 (Time Invariant versus Time Varying Systems).
*   **Nagrath & Gopal:** Chapter 2 (Mathematical Modeling of Systems) will cover these aspects.

## 3. Representing Continuous-Time Systems (Learning Outcome 1 & CO1, CO5)

Continuous-time systems are often modeled using differential equations.

### 3.1. Differential Equations

A system's dynamics can be described by a linear ordinary differential equation with constant coefficients:

$a_n \frac{d^ny(t)}{dt^n} + a_{n-1} \frac{d^{n-1}y(t)}{dt^{n-1}} + ... + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^mx(t)}{dt^m} + b_{m-1} \frac{d^{m-1}x(t)}{dt^{m-1}} + ... + b_1 \frac{dx(t)}{dt} + b_0 x(t)$

Where:
*   $y(t)$ is the output.
*   $x(t)$ is the input.
*   $a_i$ and $b_i$ are constant coefficients.
*   $n$ is the order of the system (highest derivative of the output).
*   $m$ is the order of the input's derivatives.

**Example:** A simple mass-spring-damper system is described by:
$m \frac{d^2y(t)}{dt^2} + c \frac{dy(t)}{dt} + ky(t) = F(t)$
Here, $y(t)$ is the displacement, $m$ is mass, $c$ is damping coefficient, $k$ is spring constant, and $F(t)$ is the applied force (input). This is a second-order LTI system.

### 3.2. Transfer Functions

The **transfer function** is a powerful tool for analyzing LTI systems in the **Laplace domain**. It is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.

$G(s) = \frac{Y(s)}{X(s)}$

Where:
*   $Y(s) = \mathcal{L}\{y(t)\}$
*   $X(s) = \mathcal{L}\{x(t)\}$

**To obtain the transfer function from a differential equation:**

1.  Take the Laplace transform of both sides of the differential equation.
2.  Apply the Laplace transform properties for derivatives:
    $\mathcal{L}\{\frac{dy(t)}{dt}\} = sY(s) - y(0)$
    $\mathcal{L}\{\frac{d^2y(t)}{dt^2}\} = s^2Y(s) - sy(0) - y'(0)$
    And so on. For zero initial conditions, $y(0) = y'(0) = ... = 0$.
3.  Collect terms for $Y(s)$ and $X(s)$.
4.  The transfer function is $G(s) = \frac{Y(s)}{X(s)}$.

**Example (Mass-Spring-Damper):**
$m \frac{d^2y(t)}{dt^2} + c \frac{dy(t)}{dt} + ky(t) = F(t)$
Taking Laplace Transform with zero initial conditions:
$ms^2Y(s) + csY(s) + kY(s) = F(s)$
$Y(s)(ms^2 + cs + k) = F(s)$
$G(s) = \frac{Y(s)}{F(s)} = \frac{1}{ms^2 + cs + k}$

**Textbook References:**

*   **Nise:** Chapter 2 (Modeling in the Frequency Domain) - Sections 2.1 (Introduction), 2.2 (Transfer Function Representation), 2.3 (Block Diagram Algebra).
*   **Nagrath & Gopal:** Chapter 3 (Time Domain Analysis of Control Systems) and Chapter 4 (Control System Components) might touch upon system representation.
*   **Kuo:** Chapter 3 (System Representation) and Chapter 4 (Laplace Transform Techniques).

## 4. Analyzing Time Domain Responses of LTI Systems (Learning Outcome 2 & CO2)

Understanding how a system responds to standard inputs is crucial for evaluating its performance.

### 4.1. Standard Input Functions

*   **Step Input:** $u(t) = A u_s(t)$, where $u_s(t)$ is the unit step function. In Laplace domain, $U(s) = A/s$.
*   **Ramp Input:** $r(t) = At u_s(t)$. In Laplace domain, $R(s) = A/s^2$.
*   **Impulse Input:** $\delta(t)$. In Laplace domain, $\Delta(s) = 1$.
*   **Sinusoidal Input:** $A \sin(\omega t) u_s(t)$. In Laplace domain, $\mathcal{L}\{A \sin(\omega t) u_s(t)\} = \frac{A\omega}{s^2 + \omega^2}$.

### 4.2. Transient Response Parameters

When subjected to a step input, the output of a typical second-order LTI system often exhibits characteristic transient behavior. These parameters are used to quantify the system's performance.

Consider a standard second-order system transfer function:
$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

Where:
*   $\omega_n$: Undamped natural frequency (radians/second) - the frequency at which the system would oscillate if there were no damping.
*   $\zeta$: Damping ratio - a dimensionless parameter that describes how oscillations decay after a disturbance.
    *   $\zeta = 0$: Undamped (oscillates forever)
    *   $0 < \zeta < 1$: Underdamped (oscillates with decaying amplitude)
    *   $\zeta = 1$: Critically damped (fastest response without overshoot)
    *   $\zeta > 1$: Overdamped (slow response, no oscillation)

**Transient Response Parameters for a Step Input:**

*   **Delay Time ($t_d$):** The time required for the response to reach 50% of its final value for the first time.
    $t_d = \frac{1 + 0.7\zeta}{\omega_n}$
*   **Rise Time ($t_r$):** The time required for the response to rise from 10% to 90% of its final value.
    $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
    For $\zeta < 0.7$, $t_r \approx \frac{\pi}{\omega_n}$.
*   **Peak Time ($t_p$):** The time required for the response to reach its first peak.
    $t_p = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$
*   **Maximum Overshoot ($M_p$):** The maximum percentage that the response exceeds its final value.
    $M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\%$
*   **Settling Time ($t_s$):** The time required for the response to reach and stay within a specified range (typically ±2% or ±5%) of its final value.
    *   For 2% criterion: $t_s \approx \frac{4}{\zeta\omega_n}$
    *   For 5% criterion: $t_s \approx \frac{3}{\zeta\omega_n}$

**Example:** Consider a system with $G(s) = \frac{100}{s^2 + 10s + 100}$.
Here, $\omega_n^2 = 100 \Rightarrow \omega_n = 10$ rad/s.
$2\zeta\omega_n = 10 \Rightarrow 2\zeta(10) = 10 \Rightarrow \zeta = 0.5$.
This is an underdamped system.

Let's calculate the transient response parameters for a unit step input:
*   $t_d = \frac{1 + 0.7(0.5)}{10} = \frac{1.35}{10} = 0.135$ seconds
*   $t_r = \frac{\pi - \cos^{-1}(0.5)}{10\sqrt{1-0.5^2}} = \frac{\pi - \pi/3}{10\sqrt{0.75}} = \frac{2\pi/3}{10 \times 0.866} \approx \frac{2.094}{8.66} \approx 0.242$ seconds
*   $t_p = \frac{\pi}{10\sqrt{1-0.5^2}} = \frac{\pi}{10 \times 0.866} \approx \frac{3.1416}{8.66} \approx 0.363$ seconds
*   $M_p = e^{\frac{-0.5\pi}{\sqrt{1-0.5^2}}} \times 100\% = e^{\frac{-1.5708}{0.866}} \times 100\% = e^{-1.814} \times 100\% \approx 0.163 \times 100\% = 16.3\%$
*   Assuming 2% settling time: $t_s \approx \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8$ seconds

**Textbook References:**

*   **Nise:** Chapter 4 (Time Response of Second-Order Systems) - Covers all these parameters in detail.
*   **Nagrath & Gopal:** Chapter 3 (Time Domain Analysis of Control Systems).
*   **Ogata:** Chapter 2 (Time Domain Analysis of Control Systems).

### 4.3. Steady-State Error

Steady-state error is the difference between the desired output and the actual output as time approaches infinity. It can be analyzed using **system type** and **error coefficients**.

*   **System Type:** Determined by the number of pure integrators (poles at $s=0$) in the **open-loop** transfer function.
    *   Type 0 system: No integrator.
    *   Type 1 system: One integrator.
    *   Type 2 system: Two integrators.
*   **Error Coefficients:**
    *   **Position Error Constant ($K_p$):** $K_p = \lim_{s \to 0} G(s)$ (for closed-loop) or $K_p = \lim_{s \to 0} G_{ol}(s)$ (for open-loop, typically).
    *   **Velocity Error Constant ($K_v$):** $K_v = \lim_{s \to 0} s G(s)$ (for closed-loop) or $K_v = \lim_{s \to 0} s G_{ol}(s)$ (for open-loop).
    *   **Acceleration Error Constant ($K_a$):** $K_a = \lim_{s \to 0} s^2 G(s)$ (for closed-loop) or $K_a = \lim_{s \to 0} s^2 G_{ol}(s)$ (for open-loop).

**Steady-State Error for Different Inputs and System Types (for unity feedback systems):**

| Input       | Type 0 System   | Type 1 System   | Type 2 System   |
| :---------- | :-------------- | :-------------- | :-------------- |
| Step ($1/s$) | $1/(1+K_p)$     | 0               | 0               |
| Ramp ($1/s^2$) | $\infty$        | $1/K_v$         | 0               |
| Parabola ($1/s^3$) | $\infty$        | $\infty$        | $1/K_a$         |

**Example:**
For a unity feedback system with open-loop transfer function $G_{ol}(s) = \frac{10}{s(s+2)}$.
This is a Type 1 system.
Let's analyze the steady-state error for a step and ramp input.

*   **Step Input (R(s) = 1/s):**
    $K_p = \lim_{s \to 0} G_{ol}(s) = \lim_{s \to 0} \frac{10}{s(s+2)} = \infty$.
    Steady-state error $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+\infty} = 0$.

*   **Ramp Input (R(s) = 1/s^2):**
    $K_v = \lim_{s \to 0} s G_{ol}(s) = \lim_{s \to 0} s \frac{10}{s(s+2)} = \lim_{s \to 0} \frac{10}{s+2} = \frac{10}{2} = 5$.
    Steady-state error $e_{ss} = \frac{1}{K_v} = \frac{1}{5} = 0.2$.

**Textbook References:**

*   **Nise:** Chapter 2 (Modeling in the Frequency Domain) - Section 2.8 (Steady-State Error).
*   **Nagrath & Gopal:** Chapter 3 (Time Domain Analysis of Control Systems).
*   **Ogata:** Chapter 2 (Time Domain Analysis of Control Systems).

## 5. Analyzing Dynamics using Root Locus (Learning Outcome 3 & CO3)

The **Root Locus** method is a graphical technique used to determine how the **closed-loop poles** of a system change as a system parameter (typically gain, K) is varied from 0 to $\infty$. The location of the closed-loop poles dictates the system's stability and transient response.

### 5.1. The Characteristic Equation

For a unity feedback system with open-loop transfer function $G_{ol}(s) = K G_p(s)$, the closed-loop transfer function is:
$T(s) = \frac{G_{ol}(s)}{1 + G_{ol}(s)}$

The **characteristic equation** is the denominator of the closed-loop transfer function set to zero:
$1 + G_{ol}(s) = 0$
$1 + K G_p(s) = 0$

The roots of this equation are the **closed-loop poles**.

### 5.2. Basic Rules for Sketching Root Loci

The root locus is the path traced by the closed-loop poles as $K$ varies from 0 to $\infty$.

1.  **Number of Loci:** There are as many branches of the root locus as there are poles in the open-loop transfer function.
2.  **Starting and Ending Points:** The loci start at the open-loop poles (where $K=0$) and end at the open-loop zeros (where $K=\infty$) or at infinity.
3.  **Symmetry:** The root locus is symmetrical with respect to the real axis.
4.  **Real Axis Segments:** A point on the real axis is part of the root locus if it has an **odd number of open-loop poles and zeros to its right**.
5.  **Asymptotes:** For large $K$, the loci tend to infinity along straight lines called asymptotes.
    *   **Angle of Asymptotes:** $\theta = \frac{(2k+1)\pi}{p-z}$, where $k = 0, 1, 2, ..., (p-z-1)$, $p$ is the number of open-loop poles, and $z$ is the number of open-loop zeros.
    *   **Centroid of Asymptotes:** $\sigma = \frac{\sum(\text{poles}) - \sum(\text{zeros})}{p-z}$
6.  **Breakaway Points:** Points on the real axis where two loci branches leave the real axis to move into the complex plane. Found by solving $\frac{dK}{ds} = 0$.
7.  **Break-in Points:** Points on the real axis where two loci branches arrive from the complex plane to merge onto the real axis. Found by solving $\frac{dK}{ds} = 0$.
8.  **Imaginary Axis Crossing:** Find the value of $K$ where the loci cross the imaginary axis. Use the Routh-Hurwitz stability criterion. The system is marginally stable when the characteristic equation has roots on the $j\omega$ axis.
9.  **Angle of Departure/Arrival:** Angle at which loci leave open-loop poles or arrive at open-loop zeros.
    *   Angle of Departure from a pole: $180^\circ - (\sum \text{angles to zeros from pole}) + (\sum \text{angles to poles from pole})$
    *   Angle of Arrival at a zero: $180^\circ - (\sum \text{angles to poles from zero}) + (\sum \text{angles to zeros from zero})$

### 5.3. Impact on Stability and Transient Response

*   **Stability:** A system is stable if all its closed-loop poles lie in the left-half of the s-plane (LHP). The root locus shows the range of $K$ for which the system is stable.
*   **Transient Response:**
    *   **Damping Ratio ($\zeta$):** Lines of constant $\zeta$ are radial lines originating from the origin in the s-plane. A locus moving along a radial line indicates a constant damping ratio.
    *   **Natural Frequency ($\omega_n$):** Circles centered at the origin indicate constant $\omega_n$.
    *   **Rise Time ($t_r$) and Settling Time ($t_s$):** These are inversely related to the magnitude of the dominant pole's real part ($\zeta\omega_n$) and the dominant pole's magnitude ($\omega_n$), respectively. Loci further left in the s-plane lead to faster settling times.
    *   **Overshoot ($M_p$):** Primarily determined by the damping ratio $\zeta$. More damping (closer to 1) reduces overshoot.

**Example:**
Consider $G_{ol}(s) = \frac{K}{s(s+4)}$.
Characteristic equation: $1 + \frac{K}{s(s+4)} = 0 \Rightarrow s^2 + 4s + K = 0$.
Open-loop poles: $s=0$, $s=-4$. Open-loop zeros: None. $p=2, z=0$.

1.  **Number of Loci:** 2 branches.
2.  **Start/End:** Start at 0 and -4. End at infinity.
3.  **Symmetry:** Symmetrical about the real axis.
4.  **Real Axis Segments:** Between 0 and -4.
5.  **Asymptotes:** $\theta = \frac{(2k+1)\pi}{2-0} = \frac{\pi}{2}, \frac{3\pi}{2}$. Vertical asymptotes.
    $\sigma = \frac{(0) + (-4) - 0}{2-0} = \frac{-4}{2} = -2$. Centroid at $s=-2$.
6.  **Breakaway Point:** $K = -s(s+4) = -(s^2+4s)$. $\frac{dK}{ds} = -(2s+4) = 0 \Rightarrow s = -2$. This is also the centroid. This means the loci leave the real axis at $s=-2$ and go vertically upwards and downwards.
7.  **Imaginary Axis Crossing:** For the characteristic equation $s^2 + 4s + K = 0$. Using Routh-Hurwitz:
    $s^2: 1 \quad K$
    $s^1: 4 \quad 0$
    $s^0: K \quad 0$
    For stability, all coefficients in the first column must be positive. So $K > 0$. The system is always stable for $K>0$.
    The loci cross the imaginary axis when the $s^1$ row is zero. Setting the $s^0$ row to zero gives $K=0$. This means the system is always stable for $K>0$.

**Textbook References:**

*   **Nise:** Chapter 6 (Root Locus Techniques).
*   **Nagrath & Gopal:** Chapter 5 (The Root Locus Techniques).
*   **Kuo:** Chapter 5 (Root Locus Techniques).
*   **Dorf & Bishop:** Chapter 5 (The Root Locus Techniques).
*   **Ogata:** Chapter 4 (The Root Locus Techniques).

## 6. Analyzing Dynamics in Frequency Domain (Learning Outcome 4 & CO4)

Frequency domain analysis examines how a system responds to sinusoidal inputs of varying frequencies. This provides insights into stability, bandwidth, and steady-state performance.

### 6.1. Frequency Response

For an LTI system with transfer function $G(s)$, the **frequency response** is obtained by substituting $s = j\omega$, where $\omega$ is the angular frequency.
$G(j\omega) = |G(j\omega)| \angle G(j\omega)$

*   $|G(j\omega)|$: Magnitude response - the gain of the system at frequency $\omega$.
*   $\angle G(j\omega)$: Phase response - the phase shift introduced by the system at frequency $\omega$.

### 6.2. Bode Plots

Bode plots are graphical representations of the magnitude and phase response of an LTI system as a function of frequency on a logarithmic scale.

*   **Magnitude Plot:** $|G(j\omega)|$ in decibels (dB) versus $\log_{10}(\omega)$.
    *   $|G(j\omega)|_{dB} = 20 \log_{10} |G(j\omega)|$.
*   **Phase Plot:** $\angle G(j\omega)$ in degrees versus $\log_{10}(\omega)$.

**Key Features of Bode Plots:**

*   **Asymptotic Approximations:** Bode plots are often sketched using straight-line asymptotes, which are easier to construct and provide good approximations.
*   **Break Frequencies:** Frequencies at which the slope of the magnitude plot changes. These correspond to the poles and zeros of the transfer function.
*   **Gain Margin:** The amount of gain that can be added to the system before it becomes unstable. It's the reciprocal of the magnitude of $G(j\omega)$ at the phase crossover frequency (where the phase is -180°).
*   **Phase Margin:** The amount of additional phase lag that can be added to the system before it becomes unstable. It's the difference between the phase of $G(j\omega)$ at the gain crossover frequency (where the magnitude is 0 dB or 1) and -180°.

**Example Sketching (for a simple pole $1/(s+a)$):**
*   Magnitude: For $\omega \ll a$, $|G(j\omega)| \approx 1/a$ (constant). For $\omega \gg a$, $|G(j\omega)| \approx \omega/a$. The slope changes from 0 to -20 dB/decade at $\omega = a$.
*   Phase: For $\omega \ll a$, phase $\approx 0^\circ$. For $\omega \gg a$, phase $\approx -90^\circ$. At $\omega = a$, phase = -45°.

**Textbook References:**

*   **Nise:** Chapter 7 (Stability Analysis and the Bode Plot).
*   **Nagrath & Gopal:** Chapter 6 (Frequency Domain Analysis of Control Systems).
*   **Kuo:** Chapter 6 (Frequency Response Methods).
*   **Dorf & Bishop:** Chapter 7 (Frequency Response Analysis).
*   **Ogata:** Chapter 5 (Frequency Response Analysis).

### 6.3. Nyquist Plots

A Nyquist plot is a polar plot of the frequency response $G(j\omega)$ as $\omega$ varies from 0 to $\infty$. It plots the magnitude $|G(j\omega)|$ against the phase $\angle G(j\omega)$ on a polar coordinate system.

**Nyquist Stability Criterion:**

The Nyquist criterion relates the number of encirclements of the $-1+j0$ point by the Nyquist plot of $G(j\omega)$ to the number of unstable closed-loop poles.

*   **Encirclements (N):** Number of times the Nyquist plot encircles the point $-1+j0$ in the counter-clockwise direction.
*   **Open-loop Unstable Poles (P):** Number of poles of $G(j\omega)$ in the right-half of the s-plane.
*   **Closed-loop Stable Poles (Z):** Number of poles of the closed-loop system in the right-half of the s-plane.

The relationship is given by: **$N = P - Z$**

For a stable closed-loop system, $Z$ must be 0. Therefore, $N = P$.

*   If $P = 0$ (open-loop stable), then $N$ must be 0 for closed-loop stability.
*   If $P > 0$ (open-loop unstable), then $N$ must be equal to $P$ for closed-loop stability.

**Gain Margin and Phase Margin from Nyquist Plots:**

*   **Gain Margin:** The distance from the origin to the point where the Nyquist plot intersects the negative real axis. If the intersection is at $-x$, the GM is $1/x$.
*   **Phase Margin:** The angle between the negative real axis and the vector from the origin to the point where the Nyquist plot intersects the unit circle.

**Textbook References:**

*   **Nise:** Chapter 7 (Stability Analysis and the Nyquist Plot).
*   **Nagrath & Gopal:** Chapter 6 (Frequency Domain Analysis of Control Systems).
*   **Kuo:** Chapter 6 (Frequency Response Methods).
*   **Dorf & Bishop:** Chapter 8 (Stability Analysis: Nyquist criterion).
*   **Ogata:** Chapter 6 (Stability Analysis of Linear Time-Invariant Systems).

### 6.4. Nichols Plots

A Nichols plot is a combination of Bode plots, plotting magnitude (in dB) versus phase (in degrees). It also provides information about stability margins.

**Textbook References:**

*   **Nise:** Chapter 7 (Stability Analysis and the Nichols Plot).
*   **Ogata:** Chapter 6 (Stability Analysis of Linear Time-Invariant Systems).

## 7. Important Points to Remember

*   **LTI Systems:** Satisfy superposition and homogeneity, and their behavior is time-invariant.
*   **Transfer Function:** A powerful tool for LTI system analysis in the Laplace domain, defined as $Y(s)/X(s)$ with zero initial conditions.
*   **Second-Order System Parameters:** $\omega_n$, $\zeta$ are critical for understanding transient response (rise time, settling time, overshoot).
*   **Steady-State Error:** Quantifies the final error between the desired and actual output, related to system type and error constants.
*   **Root Locus:** Graphs the movement of closed-loop poles as gain $K$ changes, indicating stability and transient performance.
*   **Frequency Response (Bode, Nyquist, Nichols):** Analyzes system behavior with sinusoidal inputs, providing gain and phase margins for stability assessment.
*   **Stability:** All closed-loop poles must be in the left-half of the s-plane.

## 8. Practice Questions

**Question 1:**
A system is described by the differential equation: $2\frac{d^2y(t)}{dt^2} + 5\frac{dy(t)}{dt} + y(t) = 3x(t)$.
a) Determine the transfer function of the system.
b) If $x(t)$ is a unit step input, what is the steady-state value of $y(t)$?
c) Is this system stable? Justify your answer.

**Answer 1:**
a) Taking Laplace transform with zero initial conditions:
$2s^2Y(s) + 5sY(s) + Y(s) = 3X(s)$
$Y(s)(2s^2 + 5s + 1) = 3X(s)$
$G(s) = \frac{Y(s)}{X(s)} = \frac{3}{2s^2 + 5s + 1}$

b) For a unit step input, $X(s) = 1/s$. The steady-state value of $y(t)$ can be found using the Final Value Theorem on $Y(s)$:
$Y(s) = G(s)X(s) = \frac{3}{2s^2 + 5s + 1} \times \frac{1}{s}$
$y_{ss} = \lim_{s \to 0} sY(s) = \lim_{s \to 0} s \frac{3}{2s^2 + 5s + 1} \times \frac{1}{s} = \lim_{s \to 0} \frac{3}{2s^2 + 5s + 1} = \frac{3}{1} = 3$.
The steady-state value of $y(t)$ is 3.

c) To determine stability, we look at the poles of the transfer function, which are the roots of the characteristic equation $2s^2 + 5s + 1 = 0$.
Using the quadratic formula: $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-5 \pm \sqrt{5^2 - 4(2)(1)}}{2(2)} = \frac{-5 \pm \sqrt{25 - 8}}{4} = \frac{-5 \pm \sqrt{17}}{4}$.
$s_1 = \frac{-5 + 4.12}{4} = \frac{-0.88}{4} = -0.22$
$s_2 = \frac{-5 - 4.12}{4} = \frac{-9.12}{4} = -2.28$
Both poles have negative real parts. Therefore, the system is stable.

**Question 2:**
For a standard second-order system with the transfer function $G(s) = \frac{16}{s^2 + 6s + 16}$, calculate:
a) Undamped natural frequency ($\omega_n$)
b) Damping ratio ($\zeta$)
c) Rise time ($t_r$)
d) Settling time ($t_s$, 2% criterion)
e) Maximum overshoot ($M_p$)

**Answer 2:**
The standard second-order transfer function is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing with the given $G(s) = \frac{16}{s^2 + 6s + 16}$:
a) $\omega_n^2 = 16 \Rightarrow \omega_n = 4$ rad/s.
b) $2\zeta\omega_n = 6 \Rightarrow 2\zeta(4) = 6 \Rightarrow 8\zeta = 6 \Rightarrow \zeta = 6/8 = 0.75$.

c) Rise time ($t_r$):
$t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1-\zeta^2}} = \frac{\pi - \cos^{-1}(0.75)}{4\sqrt{1-0.75^2}} = \frac{\pi - 0.7227}{4\sqrt{1-0.5625}} = \frac{3.1416 - 0.7227}{4\sqrt{0.4375}} = \frac{2.4189}{4 \times 0.6614} = \frac{2.4189}{2.6456} \approx 0.914$ seconds.

d) Settling time ($t_s$, 2% criterion):
$t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.75 \times 4} = \frac{4}{3} \approx 1.333$ seconds.

e) Maximum overshoot ($M_p$):
$M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{\frac{-0.75\pi}{\sqrt{1-0.75^2}}} \times 100\% = e^{\frac{-2.3562}{0.6614}} \times 100\% = e^{-3.5626} \times 100\% \approx 0.0286 \times 100\% = 2.86\%$.

**Question 3:**
Sketch the root locus for a unity feedback system with open-loop transfer function $G_{ol}(s) = \frac{K(s+1)}{s(s+3)}$. Indicate the centroid of asymptotes, angles of asymptotes, and the real axis segment. Determine the value of $K$ for which the system is marginally stable.

**Answer 3:**
Characteristic Equation: $1 + \frac{K(s+1)}{s(s+3)} = 0 \Rightarrow s(s+3) + K(s+1) = 0 \Rightarrow s^2 + 3s + Ks + K = 0 \Rightarrow s^2 + (3+K)s + K = 0$.

1.  **Poles & Zeros:** Open-loop poles at $s=0, s=-3$. Open-loop zero at $s=-1$. $p=2, z=1$.
2.  **Number of Loci:** $p-z = 2-1 = 1$ branch. (Starts at pole $s=0$, ends at zero $s=-1$).
3.  **Symmetry:** Symmetric about the real axis.
4.  **Real Axis Segments:**
    *   To the right of $s=0$: Odd number of poles/zeros (1 pole at 0) $\rightarrow$ Locus exists for $K>0$.
    *   Between $s=0$ and $s=-1$: Even number of poles/zeros (pole at 0, zero at -1) $\rightarrow$ No locus.
    *   Between $s=-1$ and $s=-3$: Odd number of poles/zeros (pole at 0, zero at -1, pole at -3) $\rightarrow$ Locus exists for $K>0$.
    *   To the left of $s=-3$: Even number of poles/zeros (pole at 0, zero at -1, pole at -3) $\rightarrow$ No locus.
    So, locus is from $s=0$ to $s=-1$, and from $s=-3$ to $-\infty$.
5.  **Asymptotes:** $p-z = 1$. Only one asymptote.
    *   Angle: $\theta = \frac{(2k+1)\pi}{p-z} = \frac{(2(0)+1)\pi}{1} = \pi = 180^\circ$.
    *   Centroid: $\sigma = \frac{\sum(\text{poles}) - \sum(\text{zeros})}{p-z} = \frac{(0) + (-3) - (-1)}{1} = \frac{-3+1}{1} = -2$.
    The single asymptote is a horizontal line at $s=-2$.

6.  **Breakaway/Break-in:** The single locus branch goes from $s=0$ to $s=-1$. There is no breakaway or break-in point on the real axis.

7.  **Marginal Stability:** Use Routh-Hurwitz on the characteristic equation $s^2 + (3+K)s + K = 0$.
    $s^2: 1 \quad K$
    $s^1: 3+K \quad 0$
    $s^0: K \quad 0$
    For stability, all coefficients in the first column must be positive.
    $1 > 0$ (always true)
    $3+K > 0 \Rightarrow K > -3$
    $K > 0$
    For marginal stability, the $s^1$ row must be zero. This happens when $3+K = 0 \Rightarrow K = -3$. However, for the root locus as defined (positive $K$), marginal stability occurs when the locus crosses the imaginary axis. In this case, the locus is on the real axis between $s=0$ and $s=-1$. The system only becomes unstable when $K$ is too large such that the locus reaches the zero at $s=-1$. However, since there's only one branch, it will approach the zero at $s=-1$. There is no crossing of the imaginary axis with positive $K$. The system is stable for all $K>0$. The question might be implying a different scenario or a typo. For this specific system, with $K>0$, the poles move from $s=0$ towards $s=-1$. The system is stable for all $K \ge 0$. If we consider the closed-loop poles $s = \frac{-(3+K) \pm \sqrt{(3+K)^2 - 4K}}{2}$. For real poles, $(3+K)^2 - 4K \ge 0 \Rightarrow 9 + 6K + K^2 - 4K \ge 0 \Rightarrow K^2 + 2K + 9 \ge 0$, which is always true. The poles remain on the real axis until they meet at $s=-1$ when $K=0$. Ah, let me re-evaluate the characteristic equation: $s^2 + (3+K)s + K = 0$. For marginal stability, the $s^1$ row being zero is not the correct condition here, as there is no imaginary axis crossing for positive K. The question implies finding K for marginal stability. Let's reconsider the roots. The poles are $s=0$ and $s=-3$ at $K=0$. The zero is at $s=-1$. The locus starts at $s=0$ and goes towards $s=-1$. The other locus starts at $s=-3$ and goes towards $-\infty$ along the asymptote at $s=-2$. This implies the system is always stable.

    **Correction:** Let's re-examine the stability condition using the characteristic equation: $s^2 + (3+K)s + K = 0$.
    For marginal stability, we need roots on the imaginary axis. This occurs when the discriminant is zero, or when the coefficient of $s$ goes to zero if $K$ were negative. However, $K$ is generally assumed to be positive for root locus.

    Let's consider if there's a case where the root locus branches *would* cross the imaginary axis if there were more poles/zeros. For this system, it seems the locus stays on the real axis.

    A common scenario for marginal stability is when the characteristic equation has roots of the form $j\omega$. This requires a coefficient to become zero in the Routh array.
    For $s^2 + (3+K)s + K = 0$:
    $s^2$: 1   K
    $s^1$: 3+K 0
    $s^0$: K   0
    For stability, $3+K > 0$ and $K > 0$. This means $K > 0$.
    The system is stable for all $K > 0$. If $K=0$, the poles are at $s=0$ and $s=-3$.

    Perhaps the question implicitly asks about a scenario where the asymptote is not at infinity, which isn't the case here. Let's assume there was a typo and consider $G_{ol}(s) = \frac{K}{s(s+3)}$. Characteristic equation: $s^2+3s+K=0$.
    Routh array:
    $s^2$: 1 K
    $s^1$: 3 0
    $s^0$: K 0
    For stability, $K>0$. For marginal stability, $K=0$. The poles are at $s=0$ and $s=-3$. If $K=0$, the poles are at $s=0, s=-3$. When $K$ is slightly positive, the poles move to $s = \frac{-3 \pm \sqrt{9-4K}}{2}$. If $9-4K = 0$, then $K = 9/4$. The poles are at $s = -3/2$. The system is stable.

    Let's assume the question meant a different system or a different interpretation. **For the given system $G_{ol}(s) = \frac{K(s+1)}{s(s+3)}$, the system is stable for all $K > 0$.** There is no value of $K>0$ for which it becomes marginally stable by crossing the imaginary axis.

This comprehensive set of notes covers the essential aspects of LTI systems as per the learning outcomes and course outcomes. Remember to refer to the specified textbooks for deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
