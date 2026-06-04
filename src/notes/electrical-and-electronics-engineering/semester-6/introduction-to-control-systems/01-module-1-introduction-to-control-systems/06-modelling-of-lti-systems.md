---
title: "Modelling of LTI systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b0"
status: "completed"
scrapedAt: "2026-05-23T16:29:12.722Z"
---
# Module 1: Introduction to Control Systems - Topic: Modelling of LTI Systems

This module introduces the fundamental concepts of control systems, with a particular focus on the crucial aspect of **modelling Linear Time-Invariant (LTI) systems**. Understanding how to mathematically represent real-world systems is the cornerstone of control system design and analysis.

---

## 1.1 Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **LO1:** Define and explain the concept of system modelling in control systems.
*   **LO2:** Classify different types of control systems.
*   **LO3:** Understand and apply different techniques for modelling LTI systems, including differential equations, transfer functions, and block diagrams.
*   **LO4:** Analyze the characteristics of LTI systems in the time domain.
*   **LO5:** Relate system modelling to the analysis of system performance and stability.

---

## 1.2 Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO1 (K2):** To represent continuous time systems in the classical domain. (This topic is foundational for this outcome, as it teaches the methods for representation).
*   **CO2 (K2):** Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (Modelling is essential before time-domain analysis can be performed).
*   **CO5 (K2):** To represent continuous time systems in the classical domain. (This is a reiteration of CO1, emphasizing the importance of representation techniques).

---

## 1.3 Key Concepts and Definitions

### 1.3.1 What is a Control System?

A **control system** is a system that manages, commands, directs, or regulates the behavior of other devices or systems using control loops. It typically involves an input, a process (or plant), and an output.

*   **Example:** A thermostat controlling the temperature of a room. The desired temperature is the input, the heating/cooling system is the plant, and the room temperature is the output.

### 1.3.2 What is System Modelling?

**System modelling** is the process of creating a mathematical representation of a physical system. This model allows us to analyze the system's behavior, predict its response to various inputs, and design controllers to achieve desired performance.

*   **Nise (2009):** Emphasizes that a model is a simplified representation of a system that allows for analysis and design. No model is perfect, but a good model captures the essential characteristics of the system.
*   **Nagrath & Gopal (2009):** Define a model as a system that exhibits the essential input-output relationships of the physical system.

### 1.3.3 Linear Time-Invariant (LTI) Systems

*   **Linearity:** A system is linear if it satisfies the superposition property:
    *   If input $x_1(t)$ produces output $y_1(t)$, and input $x_2(t)$ produces output $y_2(t)$, then input $a x_1(t) + b x_2(t)$ produces output $a y_1(t) + b y_2(t)$, where $a$ and $b$ are constants.
*   **Time-Invariance:** A system is time-invariant if its parameters do not change with time. This means that if an input $x(t)$ produces an output $y(t)$, then a time-shifted input $x(t - \tau)$ produces a time-shifted output $y(t - \tau)$ for any time shift $\tau$.

**Why are LTI systems important?** LTI systems are fundamental in control theory because they are mathematically tractable. Many linear differential equations can be solved using techniques like the Laplace transform, which simplifies analysis and design. While real-world systems are often non-linear, they can frequently be approximated as LTI systems around a particular operating point.

### 1.3.4 Types of Control Systems

*   **Open-Loop Control Systems:** The control action is independent of the output of the system. There is no feedback mechanism.
    *   **Characteristics:** Simpler, less expensive, but less accurate and sensitive to disturbances.
    *   **Example:** A toaster. You set the time, and it toasts for that duration, regardless of how brown the toast actually is.
*   **Closed-Loop Control Systems (Feedback Control Systems):** The control action depends on the output of the system. A sensor measures the output, and this measurement is fed back to the controller, which adjusts the input to minimize the error between the desired output and the actual output.
    *   **Characteristics:** More accurate, less sensitive to disturbances, but more complex and expensive.
    *   **Example:** A household thermostat. It senses the room temperature (output) and adjusts the heating/cooling system (control action) to match the setpoint (desired output).

---

## 1.4 Techniques for Modelling LTI Systems

### 1.4.1 Mathematical Models

Mathematical models are equations that describe the relationship between the system's inputs, outputs, and internal states.

#### 1.4.1.1 Differential Equations

Many physical systems (electrical, mechanical, thermal, etc.) can be described by differential equations. These equations relate the rates of change of system variables.

*   **Nise (2009):** Explains that differential equations are often derived from physical laws such as Newton's laws, Kirchhoff's laws, etc.
*   **Nagrath & Gopal (2009):** Highlight that for LTI systems, these are typically linear ordinary differential equations with constant coefficients.

**General Form:**
$$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + b_{m-1} \frac{d^{m-1} x(t)}{dt^{m-1}} + \dots + b_0 x(t)$$
Where:
*   $y(t)$ is the output of the system.
*   $x(t)$ is the input to the system.
*   $a_i$ and $b_i$ are constants (coefficients).

**Example: Simple Electrical RC Circuit**
Consider a series RC circuit with a voltage source $v_s(t)$ as input and the voltage across the capacitor $v_c(t)$ as output.

*   **Applying Kirchhoff's Voltage Law:**
    $$v_s(t) = R i(t) + v_c(t)$$
*   **Relationship between current and voltage for a capacitor:**
    $$i(t) = C \frac{dv_c(t)}{dt}$$
*   **Substituting $i(t)$ into the KVL equation:**
    $$v_s(t) = RC \frac{dv_c(t)}{dt} + v_c(t)$$
    This is a first-order linear ordinary differential equation with constant coefficients, representing the RC circuit.

**Example: Simple Mechanical Mass-Spring-Damper System**
Consider a mass $M$ attached to a spring with constant $K$ and a damper with constant $B$. Let $x(t)$ be the displacement from equilibrium (output) and $f(t)$ be the applied force (input).

*   **Applying Newton's Second Law:**
    $$\sum F = M a(t)$$
    $$f(t) - B \frac{dx(t)}{dt} - K x(t) = M \frac{d^2 x(t)}{dt^2}$$
*   **Rearranging into standard form:**
    $$M \frac{d^2 x(t)}{dt^2} + B \frac{dx(t)}{dt} + K x(t) = f(t)$$
    This is a second-order linear ordinary differential equation with constant coefficients.

#### 1.4.1.2 Transfer Function (Classical Domain Representation)

The **transfer function** is a powerful tool for analyzing LTI systems, especially in the frequency domain (using Laplace transforms). It is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.

*   **CO1 (K2) / CO5 (K2):** This is a primary method to represent continuous-time systems in the classical (Laplace transform) domain.
*   **Nise (2009):** Defines the transfer function as $G(s) = Y(s) / X(s)$, where $Y(s)$ and $X(s)$ are the Laplace transforms of the output $y(t)$ and input $x(t)$, respectively, with zero initial conditions.
*   **Ogata (2009):** Stresses that the transfer function uniquely characterizes an LTI system for a given input.

**Derivation from Differential Equations:**
To find the transfer function, we take the Laplace transform of the differential equation relating input and output, assuming zero initial conditions.

**Properties of Transfer Functions:**
1.  It is a ratio of two polynomials in 's'.
2.  It is independent of the input signal.
3.  It characterizes the system's dynamics.
4.  The roots of the denominator polynomial (poles) determine the system's stability and transient response.
5.  The roots of the numerator polynomial (zeros) affect the system's response.

**Example: RC Circuit Transfer Function**
Differential equation: $RC \frac{dv_c(t)}{dt} + v_c(t) = v_s(t)$
Taking the Laplace transform (with $v_c(0) = 0$):
$RC s V_c(s) + V_c(s) = V_s(s)$
$V_c(s) (RC s + 1) = V_s(s)$
Transfer Function $G(s)$:
$$G(s) = \frac{V_c(s)}{V_s(s)} = \frac{1}{RC s + 1}$$

**Example: Mass-Spring-Damper System Transfer Function**
Differential equation: $M \frac{d^2 x(t)}{dt^2} + B \frac{dx(t)}{dt} + K x(t) = f(t)$
Taking the Laplace transform (with $x(0)=0, \dot{x}(0)=0$):
$M s^2 X(s) + B s X(s) + K X(s) = F(s)$
$X(s) (M s^2 + B s + K) = F(s)$
Transfer Function $G(s)$:
$$G(s) = \frac{X(s)}{F(s)} = \frac{1}{M s^2 + B s + K}$$

#### 1.4.1.3 Block Diagrams

Block diagrams are schematic representations of control systems, using interconnected blocks to represent system components and their relationships. Each block typically contains a transfer function.

*   **Nise (2009):** Describes block diagrams as a visual tool to represent the relationships between various signals and the dynamics of system components.
*   **Nagrath & Gopal (2009):** Explain that block diagrams simplify the visualization and analysis of complex control systems.

**Key Components of a Block Diagram:**
*   **Blocks:** Represent dynamic elements (e.g., a motor, a filter) with their transfer functions.
*   **Summing Junctions:** Indicate where signals are added or subtracted.
*   **Take-off Points:** Allow a signal to be sent to multiple points.
*   **Arrows:** Represent signals flowing between components.

**Example: Closed-Loop System Block Diagram**
A standard closed-loop system consists of:
*   **R(s):** Reference input
*   **E(s):** Error signal ($E(s) = R(s) - B(s)$)
*   **C(s):** Controller transfer function
*   **G(s):** Plant transfer function
*   **Y(s):** Output signal
*   **H(s):** Feedback transfer function
*   **B(s):** Feedback signal ($B(s) = Y(s) H(s)$)

```
      +---------+       +---------+       +---------+
R(s) --->|   (+)   |-------|    C(s) |-------|    G(s) |---+---> Y(s)
         | (-)     |       +---------+       +---------+   |
         +---------+                                       |
             ^                                             |
             |                                             |
             +---------------------------------------------+
                                     |
                                     |
                                 +---------+
                                 |    H(s) |
                                 +---------+
```

**Block Diagram Algebra:**
To simplify complex block diagrams and find the overall transfer function of a system, we use block diagram reduction techniques. Some common rules:
1.  **Chaining Blocks:** Blocks in series can be multiplied.
    $G_1(s)$ --- $G_2(s)$ --- $G_3(s)$  becomes $G_1(s)G_2(s)G_3(s)$
2.  **Parallel Blocks:** Blocks in parallel can be added (or subtracted).
    (Separate branches)
3.  **Feedback Loops:** The transfer function of a standard feedback loop is $T(s) = \frac{G(s)}{1 \pm G(s)H(s)}$ (use '+' for negative feedback, '-' for positive feedback).

**Example: Finding the Transfer Function of a Closed-Loop System**
From the block diagram above, the overall transfer function $Y(s)/R(s)$ is:
$$ \frac{Y(s)}{R(s)} = \frac{C(s)G(s)}{1 + C(s)G(s)H(s)} $$

---

## 1.5 Time Domain Analysis of LTI Systems

Once a system is modeled, we can analyze its behavior when subjected to standard input signals. This helps in understanding how the system responds to changes and disturbances.

*   **CO2 (K2):** This section directly addresses analyzing time-domain responses.
*   **Nise (2009) & Nagrath & Gopal (2009):** Provide detailed coverage of time-domain analysis, including standard test inputs and transient response parameters.

### 1.5.1 Standard Test Signals

These are commonly used inputs to characterize the performance of a system.

*   **Step Input:** $u(t) = A u_s(t)$ (where $u_s(t)$ is the unit step function, 0 for $t<0$ and 1 for $t \ge 0$). Represents sudden application of a constant signal.
*   **Ramp Input:** $r(t) = A t u(t)$ (where $u(t)$ is the unit step function). Represents a gradually increasing signal.
*   **Impulse Input:** $\delta(t)$. Represents a very short, very high input. Its Laplace transform is 1.
*   **Sinusoidal Input:** $A \sin(\omega t) u(t)$. Represents oscillatory behavior.

### 1.5.2 Transient Response Parameters (for a Second-Order System)

For a standard second-order system with transfer function:
$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
where:
*   $\omega_n$ is the natural frequency (radians/sec).
*   $\zeta$ is the damping ratio.

The response to a unit step input $R(s) = 1/s$ can be characterized by the following parameters:

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value.
    $$ t_d = \frac{1 + 0.7\zeta}{\omega_n} $$
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value.
    *   For $\zeta < 1$: $$ t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1 - \zeta^2}} $$
    *   For $\zeta = 0$: $t_r = \pi / \omega_n$
    *   For $\zeta = 1$: $t_r = 1 / \omega_n$
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak.
    $$ t_p = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}} $$
*   **Maximum Overshoot ($M_p$):** The maximum peak value of the response curve measured from the final steady-state value.
    $$ M_p = e^{-\frac{\pi\zeta}{\sqrt{1 - \zeta^2}}} $$
    Often expressed as a percentage: $M_p \% = 100 \times M_p$.
*   **Settling Time ($t_s$):** The time taken for the response to remain within a specified percentage (usually 2% or 5%) of its final value.
    *   For 2% criterion: $$ t_s = \frac{4}{\zeta\omega_n} $$
    *   For 5% criterion: $$ t_s = \frac{3}{\zeta\omega_n} $$

**Effect of Damping Ratio ($\zeta$) on Step Response:**

*   **$\zeta = 0$ (Undamped):** Oscillatory response that never settles.
*   **$0 < \zeta < 1$ (Underdamped):** Oscillatory response with overshoot and ringing, eventually settles. This is often the most desirable range for speed and minimal overshoot.
*   **$\zeta = 1$ (Critically Damped):** Fastest response without overshoot.
*   **$\zeta > 1$ (Overdamped):** Slow response with no overshoot.

### 1.5.3 Steady-State Error

The difference between the desired output and the actual output as time approaches infinity.

*   **Types of Input:** Step, Ramp, Parabolic.
*   **System Type:** Determined by the number of pure integrations (poles at $s=0$) in the open-loop transfer function.
    *   Type 0: No pure integrations.
    *   Type 1: One pure integration.
    *   Type 2: Two pure integrations.
*   **Static Error Coefficients:**
    *   **Position Error Constant ($K_p$):** For step input. $K_p = \lim_{s \to 0} G_{ol}(s)$. Steady-state error $e_{ss} = \frac{A}{1+K_p}$.
    *   **Velocity Error Constant ($K_v$):** For ramp input. $K_v = \lim_{s \to 0} s G_{ol}(s)$. Steady-state error $e_{ss} = \frac{A}{K_v}$.
    *   **Acceleration Error Constant ($K_a$):** For parabolic input. $K_a = \lim_{s \to 0} s^2 G_{ol}(s)$. Steady-state error $e_{ss} = \frac{A}{K_a}$.

*   **Dorf & Bishop (2013):** Provide a comprehensive overview of steady-state error analysis for different system types and inputs.

---

## 1.6 Linking Modelling to Performance and Stability

*   **CO3 (K3) & CO4 (K3):** Understanding modelling is the prerequisite for analyzing performance and stability.

### 1.6.1 Performance

System performance is often evaluated by transient response characteristics (rise time, settling time, overshoot) and steady-state error. The mathematical model allows us to predict these parameters.

*   By analyzing the transfer function's poles and zeros, we can infer the system's transient behavior.
*   By analyzing the open-loop transfer function's behavior at low frequencies (via static error coefficients), we can predict steady-state error.

### 1.6.2 Stability

A system is considered **stable** if its output remains bounded for a bounded input. If the output grows without bound, the system is **unstable**.

*   **Nise (2009) & Nagrath & Gopal (2009):** Dedicate significant portions to stability analysis.
*   **Key Concept:** The **poles** of the closed-loop transfer function (roots of the characteristic equation, i.e., the denominator polynomial of the closed-loop transfer function) determine stability.
*   **Stability Criterion:** For a system to be stable, **all poles of its closed-loop transfer function must lie in the left half of the s-plane** (i.e., have negative real parts).

**Characteristic Equation:** The denominator of the closed-loop transfer function set to zero. For a system with controller $C(s)$, plant $G(s)$, and feedback $H(s)$, the characteristic equation is:
$$ 1 + C(s)G(s)H(s) = 0 $$

---

## 1.7 Examples and Practice Questions

**Example 1: Modeling a Simple Motor**
A DC motor can be approximated by the following transfer function relating armature voltage ($V_a(s)$) to angular velocity ($\Omega(s)$):
$$ G(s) = \frac{K}{(Js+b)(Ls+R) + K_e K_t} $$
Where $J$ is inertia, $b$ is damping coefficient, $L$ is armature inductance, $R$ is armature resistance, $K_t$ is motor torque constant, and $K_e$ is back EMF constant.

**Practice Question 1:**
A system has the following differential equation:
$$ \frac{d^2 y(t)}{dt^2} + 5 \frac{dy(t)}{dt} + 6 y(t) = 2 x(t) $$
a) Find the transfer function $G(s) = Y(s)/X(s)$.
b) What are the poles of this system?
c) Is this system stable? Justify your answer.

**Answer 1:**
a) Taking the Laplace transform:
$s^2 Y(s) + 5s Y(s) + 6 Y(s) = 2 X(s)$
$Y(s) (s^2 + 5s + 6) = 2 X(s)$
$$ G(s) = \frac{Y(s)}{X(s)} = \frac{2}{s^2 + 5s + 6} $$
b) The poles are the roots of the denominator polynomial: $s^2 + 5s + 6 = 0$.
$(s+2)(s+3) = 0$.
The poles are $s = -2$ and $s = -3$.
c) Yes, the system is stable because both poles are in the left half of the s-plane (their real parts are negative).

**Practice Question 2:**
A second-order system has a natural frequency $\omega_n = 10$ rad/sec and a damping ratio $\zeta = 0.5$. If a unit step input is applied:
a) Calculate the delay time ($t_d$).
b) Calculate the rise time ($t_r$).
c) Calculate the peak time ($t_p$).
d) Calculate the maximum overshoot ($M_p$).
e) Calculate the settling time ($t_s$) (using the 2% criterion).

**Answer 2:**
Given: $\omega_n = 10$, $\zeta = 0.5$.

a) $t_d = \frac{1 + 0.7\zeta}{\omega_n} = \frac{1 + 0.7(0.5)}{10} = \frac{1 + 0.35}{10} = \frac{1.35}{10} = 0.135$ seconds.

b) $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1 - \zeta^2}} = \frac{\pi - \cos^{-1}(0.5)}{10 \sqrt{1 - 0.5^2}} = \frac{\pi - \pi/3}{10 \sqrt{1 - 0.25}} = \frac{2\pi/3}{10 \sqrt{0.75}} = \frac{2\pi/3}{10 \times 0.866} = \frac{2.094}{8.66} \approx 0.242$ seconds.

c) $t_p = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}} = \frac{\pi}{10 \sqrt{1 - 0.5^2}} = \frac{\pi}{10 \sqrt{0.75}} = \frac{3.1416}{10 \times 0.866} = \frac{3.1416}{8.66} \approx 0.363$ seconds.

d) $M_p = e^{-\frac{\pi\zeta}{\sqrt{1 - \zeta^2}}} = e^{-\frac{\pi(0.5)}{\sqrt{1 - 0.5^2}}} = e^{-\frac{1.5708}{0.866}} = e^{-1.8137} \approx 0.163$.
$M_p \% \approx 16.3\%$.

e) $t_s = \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8$ seconds.

---

## 1.8 Important Points to Remember

*   **Modelling is the first step:** Accurate modelling is crucial for effective control system design and analysis.
*   **LTI systems are the foundation:** While real systems are complex, LTI approximations are widely used due to their analytical tractability.
*   **Differential equations and transfer functions are key representations:** Understand how to derive and manipulate them.
*   **Block diagrams provide visual understanding:** Essential for analyzing complex systems.
*   **Poles determine stability and transient response:** Their location in the s-plane is critical.
*   **Damping ratio ($\zeta$) and natural frequency ($\omega_n$) are key parameters for second-order systems:** They dictate the shape of the time response.
*   **Steady-state error analysis quantifies long-term accuracy:** Understanding system type and static error coefficients is important.

---

This concludes the notes for Topic: Modelling of LTI Systems. Mastering these concepts will provide a strong foundation for the subsequent topics in Introduction to Control Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
