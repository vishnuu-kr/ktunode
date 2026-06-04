---
title: "Control Techniques- Transfer function and state space representation, Performance and stability of feedback control, PID control of a single link manipulator, selection of PID controller gains"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 4: Dynamics and Control of Robots"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c5d"
status: "completed"
scrapedAt: "2026-05-23T16:41:53.555Z"
---
# Introduction to Robotics: Module 4 - Dynamics and Control of Robots

## Topic: Control Techniques - Transfer Function and State Space Representation, Performance and Stability of Feedback Control, PID Control of a Single Link Manipulator, Selection of PID Controller Gains

---

### **Module Overview**

This module delves into the crucial aspect of making robots perform tasks reliably and accurately – their control. We will explore two fundamental mathematical representations of dynamic systems: transfer functions and state-space representations. Understanding these is key to designing effective controllers. We will then examine the fundamental principles of feedback control, focusing on performance metrics and stability. Finally, we will dive into a widely used and practical control technique: Proportional-Integral-Derivative (PID) control, specifically applied to a single-link manipulator, and discuss how to tune its parameters for optimal performance.

---

### **1. Representing Dynamic Systems for Control**

To design controllers, we first need mathematical models that describe how a system (like a robot arm) responds to inputs and disturbances. Two primary methods are used:

#### **1.1 Transfer Function Representation**

*   **Concept:** A transfer function represents the relationship between the output of a system and its input in the *frequency domain* (or Laplace domain). It assumes a linear, time-invariant (LTI) system and zero initial conditions.
*   **Definition:** The transfer function, denoted by $G(s)$, is the ratio of the Laplace transform of the output $Y(s)$ to the Laplace transform of the input $U(s)$:
    $$G(s) = \frac{Y(s)}{U(s)} = \mathcal{L}\{\text{system response } y(t) \text{ to a unit impulse } \delta(t)\}$$
    where $s$ is the complex Laplace variable.
*   **Key Features:**
    *   **Input/Output Relationship:** Directly shows how the output changes with respect to the input.
    *   **System Poles and Zeros:** Poles (roots of the denominator) and zeros (roots of the numerator) of the transfer function reveal critical information about system behavior, such as stability and response characteristics.
    *   **Linear Systems:** Primarily applicable to linear systems.
    *   **Simplicity:** Often simpler for analysis and design of single-input, single-output (SISO) systems.
*   **Example (Mechanical System):** Consider a simple mass-spring-damper system. The equation of motion is:
    $m\ddot{y}(t) + c\dot{y}(t) + ky(t) = u(t)$
    Taking the Laplace transform (assuming zero initial conditions):
    $ms^2Y(s) + csY(s) + kY(s) = U(s)$
    The transfer function is:
    $$G(s) = \frac{Y(s)}{U(s)} = \frac{1}{ms^2 + cs + k}$$
*   **Relevance to Robotics:** Robot joint dynamics (e.g., motor torque to joint angle) can often be approximated by linear, second-order systems, making transfer functions a useful tool. (S.K. Saha, Chapter 8)

#### **1.2 State-Space Representation**

*   **Concept:** A state-space representation describes the system's behavior using a set of first-order differential equations. It uses *state variables* to capture the system's internal condition at any given time.
*   **Definition:** For a linear time-invariant (LTI) system, the state-space representation is given by:
    $$\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t)$$
    $$\mathbf{y}(t) = C\mathbf{x}(t) + D\mathbf{u}(t)$$
    where:
    *   $\mathbf{x}(t)$ is the state vector (e.g., joint positions and velocities for a robot arm).
    *   $\mathbf{u}(t)$ is the input vector (e.g., motor torques).
    *   $\mathbf{y}(t)$ is the output vector (e.g., measured joint positions).
    *   $A$, $B$, $C$, and $D$ are matrices representing the system dynamics.
*   **Key Features:**
    *   **Internal State:** Captures the complete internal state of the system, not just the input-output relationship.
    *   **Multi-Input, Multi-Output (MIMO) Systems:** Naturally handles systems with multiple inputs and outputs, which is common in robotics.
    *   **Non-linear Systems:** Can be extended to represent non-linear systems through linearization around an operating point.
    *   **Time-Varying Systems:** Can be adapted for systems whose parameters change over time.
*   **Example (Single Link Manipulator):** Consider a single revolute joint driven by a motor. The dynamic equation might look like:
    $J\ddot{\theta}(t) + b\dot{\theta}(t) = \tau(t)$
    where $J$ is the inertia, $b$ is the damping coefficient, $\theta$ is the joint angle, and $\tau$ is the motor torque.
    We can define state variables:
    $x_1(t) = \theta(t)$ (joint position)
    $x_2(t) = \dot{\theta}(t)$ (joint velocity)
    Then, the state-space equations are:
    $\dot{x}_1(t) = x_2(t)$
    $\dot{x}_2(t) = -\frac{b}{J}x_2(t) + \frac{1}{J}\tau(t)$
    In matrix form:
    $$\begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & -\frac{b}{J} \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} + \begin{bmatrix} 0 \\ \frac{1}{J} \end{bmatrix} \tau(t)$$
    If we want to measure the position, then $\mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$.
    Here, $A = \begin{bmatrix} 0 & 1 \\ 0 & -\frac{b}{J} \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ \frac{1}{J} \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, and $D = 0$. (R.J. Schilling, Chapter 7)

*   **Relationship between Transfer Function and State-Space:** A transfer function can be derived from its state-space representation using the formula:
    $$G(s) = C(sI - A)^{-1}B + D$$
    Conversely, a state-space representation can be derived from a transfer function.

---

### **2. Performance and Stability of Feedback Control**

Feedback control aims to improve system performance and robustness by using the system's output to adjust its input.

#### **2.1 Feedback Control Systems**

*   **Concept:** In a feedback system, the output of the system is measured and compared to a desired setpoint (reference). The difference (error) is used by a controller to generate an adjusted input signal to the system.
*   **Block Diagram:**
    ```
                       +---------+      +---------+
    Reference (R) ---->| Sum     |----->| Controller|----->  Input (U) ----> System ----> Output (Y)
                       | (+/-)   |      |  (G_c(s)) |                                     ^
                       +---------+      +---------+                                     |
                             ^                                                         |
                             | Feedback Path                                           |
                             +---------------------------------------------------------+
                                            (Sensor/Measurement)
    ```
*   **Key Components:**
    *   **System (Plant):** The robot arm or its joint.
    *   **Controller:** Generates the control signal (e.g., torque).
    *   **Sensor:** Measures the system's output (e.g., joint angle from an encoder).
    *   **Summing Junction:** Compares the reference and the measured output to calculate the error.

#### **2.2 Performance Metrics**

We evaluate how well a control system performs based on its response to a step input (a sudden change in the desired setpoint), often called a *transient response* analysis.

*   **Rise Time ($T_r$):** The time taken for the output to go from 10% to 90% of its final steady-state value. A shorter rise time means a faster response.
*   **Peak Overshoot ($M_p$):** The maximum percentage by which the output exceeds the final steady-state value. It indicates how oscillatory the response is. Lower overshoot is generally preferred.
*   **Settling Time ($T_s$):** The time taken for the output to settle within a specified tolerance band (e.g., ±2% or ±5%) of its final steady-state value. A shorter settling time means the system stabilizes quickly.
*   **Steady-State Error ($e_{ss}$):** The difference between the desired setpoint and the actual output after the system has settled. An ideal controller minimizes or eliminates steady-state error.

#### **2.3 Stability**

*   **Concept:** A stable system is one whose output remains bounded for bounded inputs and disturbances. An unstable system will have an output that grows without limit, potentially causing damage.
*   **From Transfer Functions:**
    *   **Roots of the Characteristic Equation:** For a closed-loop system with transfer function $G_{cl}(s) = \frac{Y(s)}{R(s)}$, the characteristic equation is the denominator polynomial: $1 + G_c(s)G(s) = 0$.
    *   **Stability Condition:** A system is stable if and only if all the roots of its characteristic equation (the *closed-loop poles*) lie in the *left half* of the complex s-plane (i.e., have negative real parts).
*   **From State-Space:**
    *   **Eigenvalues of the A Matrix:** For a system $\dot{\mathbf{x}} = A\mathbf{x}$, the system is stable if all eigenvalues of matrix $A$ have negative real parts. For a closed-loop system, stability is determined by the eigenvalues of the closed-loop system matrix $(A - BK)$ if $u = -Kx$.
*   **Methods for Stability Analysis:**
    *   **Routh-Hurwitz Criterion:** An algebraic method to determine if any roots of the characteristic polynomial lie in the right half-plane without explicitly calculating the roots.
    *   **Root Locus:** Plots the movement of closed-loop poles as a controller gain is varied.
    *   **Nyquist Criterion:** A graphical method based on the open-loop frequency response.
    *   **Bode Plots:** Another graphical frequency-domain tool that provides insight into stability margins (gain margin and phase margin).

*   **Important Point:** Stability is a prerequisite for good performance. A system must be stable before we can optimize its performance metrics. (R.K. Mittal & I.J. Nagrath, Chapter 7)

---

### **3. PID Control of a Single Link Manipulator**

PID (Proportional-Integral-Derivative) control is a widely used feedback control loop mechanism. It's a robust and often effective method for controlling various industrial processes and robotic systems.

#### **3.1 PID Control Law**

The PID controller generates an output signal (control effort, e.g., torque) based on the error ($e(t)$) between the desired setpoint ($r(t)$) and the measured output ($y(t)$).

$$u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$$

where:
*   $K_p$ is the **Proportional Gain**: Responds to the current error. A higher $K_p$ leads to a faster response but can increase overshoot and oscillations.
*   $K_i$ is the **Integral Gain**: Responds to the accumulated past error. It helps eliminate steady-state error but can reduce stability and increase overshoot if too high.
*   $K_d$ is the **Derivative Gain**: Responds to the rate of change of the error. It anticipates future error and can improve stability, reduce overshoot, and speed up the response. However, it can amplify noise.

#### **3.2 PID Control for a Single Link Manipulator**

Consider controlling the position of a single revolute joint. The dynamic equation is:
$J\ddot{\theta}(t) + b\dot{\theta}(t) = \tau(t)$

If we use PID control, the torque $\tau(t)$ is generated based on the error in joint angle:
$e(t) = \theta_{desired}(t) - \theta_{measured}(t)$
$\tau(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

Substituting this into the dynamic equation gives the closed-loop system. The goal is to choose $K_p, K_i, K_d$ to achieve desired performance (e.g., fast response, minimal overshoot, zero steady-state error).

*   **Transfer Function Approach:** We can derive the transfer function of the manipulator and then design the PID controller in the frequency domain to place the closed-loop poles at desired locations for desired performance.
*   **State-Space Approach:** The PID controller can also be implemented in state-space. The error would be based on the difference between the desired state and the measured state. The derivative term can be approximated using the measured velocity. (Ashitava Ghosal, Chapter 6)

#### **3.3 Example: PID Control of a Single Joint**

Let's assume a simple model for a single joint:
$J=1 \text{ kg.m}^2$, $b=0.5 \text{ N.m.s/rad}$.
The plant transfer function (without controller) is:
$G(s) = \frac{1}{s(s+0.5)}$ (This assumes the input is torque $\tau(s)$ and output is angle $\theta(s)$, and we have an integrator $1/s$ from the velocity.)

The PID controller transfer function is:
$G_c(s) = K_p + \frac{K_i}{s} + K_d s = \frac{K_d s^2 + K_p s + K_i}{s}$

The open-loop transfer function of the feedback system is $G_{OL}(s) = G_c(s)G(s)$:
$G_{OL}(s) = \frac{K_d s^2 + K_p s + K_i}{s^2(s+0.5)}$

The closed-loop transfer function is:
$G_{CL}(s) = \frac{G_{OL}(s)}{1 + G_{OL}(s)} = \frac{K_d s^2 + K_p s + K_i}{s^2(s+0.5) + K_d s^2 + K_p s + K_i}$
$G_{CL}(s) = \frac{K_d s^2 + K_p s + K_i}{s^3 + (0.5+K_d)s^2 + K_p s + K_i}$

The characteristic equation is:
$s^3 + (0.5+K_d)s^2 + K_p s + K_i = 0$

To achieve stable and good performance, the roots of this cubic equation must have negative real parts.

---

### **4. Selection of PID Controller Gains ($K_p, K_i, K_d$)**

Tuning PID gains is crucial for achieving desired performance. There are several methods, ranging from empirical rules to analytical techniques.

#### **4.1 Tuning Methods**

1.  **Manual Tuning (Trial and Error):**
    *   **Start with $K_i=0, K_d=0$.** Increase $K_p$ until the output oscillates stably. This gives an estimate of the ultimate gain ($K_u$) and oscillation period ($T_u$).
    *   **Apply Ziegler-Nichols (ZN) Tuning Rules (Open-Loop Method - less common for PID):** These rules are based on identifying system parameters.
    *   **Apply Ziegler-Nichols (ZN) Tuning Rules (Closed-Loop Method):**
        *   Set $K_i=0, K_d=0$. Increase $K_p$ until the system oscillates continuously with a constant amplitude. This value is $K_u$ (ultimate gain) and the period of oscillation is $T_u$.
        *   **PID Tuning Formulas:**
            | Controller | $K_p$            | $T_i = K_p/K_i$ | $T_d = K_d/K_p$ | $K_i$         | $K_d$           |
            | :--------- | :--------------- | :-------------- | :-------------- | :------------ | :-------------- |
            | P          | $0.5 K_u$        | N/A             | N/A             | 0             | 0               |
            | PI         | $0.45 K_u$       | $T_u/1.2$       | N/A             | $1.2 K_p / T_u$ | 0               |
            | PID        | $0.6 K_u$        | $T_u/2$         | $T_u/8$         | $1.2 K_p / T_u$ | $0.5 K_p T_u$   |

    *   **Note on ZN:** ZN rules provide a good starting point but often result in an oscillatory response with significant overshoot. Further manual fine-tuning is usually required.

2.  **Cohen-Coon Tuning:** Another empirical tuning method, often suited for systems with significant dead time.

3.  **Internal Model Control (IMC) Tuning:** A more systematic approach that uses the system's process model to derive controller parameters.

4.  **Pole Placement:**
    *   **Concept:** If we know the desired closed-loop system characteristics (e.g., desired pole locations for a specific transient response like damping ratio $\zeta$ and natural frequency $\omega_n$), we can directly calculate the controller gains ($K_p, K_i, K_d$) that place the closed-loop poles at those desired locations.
    *   **Example (Single Link Manipulator):** For our example characteristic equation $s^3 + (0.5+K_d)s^2 + K_p s + K_i = 0$, we can define a desired characteristic equation for a stable and well-behaved system, say, $(s+\alpha)(s^2+2\zeta\omega_n s + \omega_n^2) = 0$, where $\alpha$, $\zeta$, and $\omega_n$ are chosen to meet performance requirements. By expanding the desired equation and comparing coefficients with the actual characteristic equation, we can solve for $K_p, K_i, K_d$.
        *   $(s+\alpha)(s^2+2\zeta\omega_n s + \omega_n^2) = s^3 + 2\zeta\omega_n s^2 + \omega_n^2 s + \alpha s^2 + 2\alpha\zeta\omega_n s + \alpha\omega_n^2$
        *   $= s^3 + (\alpha+2\zeta\omega_n)s^2 + (\omega_n^2+2\alpha\zeta\omega_n)s + \alpha\omega_n^2$
        *   Comparing coefficients:
            *   $0.5 + K_d = \alpha + 2\zeta\omega_n$
            *   $K_p = \omega_n^2 + 2\alpha\zeta\omega_n$
            *   $K_i = \alpha\omega_n^2$
        *   By choosing values for $\alpha$, $\zeta$, and $\omega_n$, we can solve for $K_p, K_i, K_d$. (John J. Craig, Chapter 8, Robotics and Control, Chapter 9)

5.  **Auto-tuning:** Many modern industrial controllers have built-in auto-tuning features that automatically adjust gains.

#### **4.2 General Guidelines for Gain Selection**

*   **$K_p$:** Primarily affects the speed of response and steady-state error. Increasing $K_p$ reduces steady-state error (for step inputs) and increases speed, but too high a value causes oscillations and instability.
*   **$K_i$:** Primarily eliminates steady-state error. Increasing $K_i$ improves steady-state error but can lead to overshoot, oscillations, and slower transient response if too high. Can cause integrator windup issues if not handled properly.
*   **$K_d$:** Primarily affects damping and disturbance rejection. Increasing $K_d$ reduces overshoot and settling time, improving stability. However, it can amplify noise in the measurement and reduce the system's response to slow disturbances.

**Important Point:** The selection of gains is a trade-off between competing performance objectives (speed vs. overshoot, disturbance rejection vs. noise sensitivity). The best gains depend on the specific application requirements.

---

### **5. Practice Questions**

**Question 1 (Conceptual - K2):**
Explain the fundamental difference between a transfer function and a state-space representation of a dynamic system. When would you prefer one over the other?

**Question 2 (Conceptual - K2):**
What are the key performance metrics used to evaluate the transient response of a feedback control system? Define each metric.

**Question 3 (Application - K3):**
A single-link robot manipulator has a moment of inertia $J = 2 \text{ kg.m}^2$ and viscous friction coefficient $b = 1 \text{ N.m.s/rad}$. The dynamic equation is $J\ddot{\theta} + b\dot{\theta} = \tau$.
Derive the transfer function of this manipulator, assuming $\tau$ is the input and $\theta$ is the output.

**Question 4 (Analysis - K3):**
Consider the transfer function of a system: $G(s) = \frac{10}{s^2 + 2s + 10}$.
If this system is placed in a unity feedback loop, what is its characteristic equation? Using the Routh-Hurwitz criterion, determine if the closed-loop system is stable. (Assume $G_c(s) = 1$ for simplicity in this step.)

**Question 5 (Design/Tuning - K3):**
For the single-link manipulator in Question 3 ($J=2, b=1$), suppose we want to design a PID controller. If the open-loop response to a step input shows sustained oscillations at a frequency of 2 rad/s and an ultimate gain $K_u = 5$. Use Ziegler-Nichols closed-loop tuning rules to find the initial values for $K_p, K_i, K_d$.

---

### **Answers to Practice Questions**

**Answer 1:**
*   **Transfer Function:** Represents the input-output relationship in the Laplace domain, assumes LTI, zero initial conditions. It's simple for SISO systems and useful for frequency-domain analysis.
*   **State-Space:** Represents the system's internal dynamics using state variables and first-order differential equations. It's more general, handles MIMO systems, and can be extended to non-linear/time-varying systems.
*   **Preference:** Transfer functions are preferred for simpler SISO systems and initial analysis/design. State-space is preferred for complex, MIMO systems, and when internal system behavior is critical for control design.

**Answer 2:**
*   **Rise Time ($T_r$):** Time to go from 10% to 90% of the final value. Indicates speed.
*   **Peak Overshoot ($M_p$):** Maximum deviation from the final value. Indicates oscillatory tendency.
*   **Settling Time ($T_s$):** Time to settle within a tolerance band (e.g., ±2%) of the final value. Indicates how quickly the system stabilizes.
*   **Steady-State Error ($e_{ss}$):** Difference between the desired setpoint and the final output value. Indicates accuracy.

**Answer 3:**
The dynamic equation is $J\ddot{\theta} + b\dot{\theta} = \tau$.
Given $J=2$ and $b=1$:
$2\ddot{\theta} + \dot{\theta} = \tau$
Taking the Laplace transform with zero initial conditions:
$2s^2\Theta(s) + s\Theta(s) = T(s)$
$\Theta(s)(2s^2 + s) = T(s)$
The transfer function is:
$G(s) = \frac{\Theta(s)}{T(s)} = \frac{1}{2s^2 + s} = \frac{1}{s(2s+1)}$

**Answer 4:**
The open-loop transfer function is $G_{OL}(s) = G_c(s)G(s) = 1 \times \frac{10}{s^2 + 2s + 10} = \frac{10}{s^2 + 2s + 10}$.
The closed-loop transfer function for unity feedback is:
$G_{CL}(s) = \frac{G_{OL}(s)}{1 + G_{OL}(s)} = \frac{\frac{10}{s^2 + 2s + 10}}{1 + \frac{10}{s^2 + 2s + 10}}$
$G_{CL}(s) = \frac{10}{s^2 + 2s + 10 + 10} = \frac{10}{s^2 + 2s + 20}$
The characteristic equation is the denominator polynomial: $s^2 + 2s + 20 = 0$.

**Routh-Hurwitz Criterion:**
The characteristic polynomial is $P(s) = s^2 + 2s + 20$.
Construct the Routh array:
| $s^2$ | 1   | 20  |
| :---- | :-- | :-- |
| $s^1$ | 2   | 0   |
| $s^0$ | 20  | 0   |

All the elements in the first column (1, 2, 20) are positive. Therefore, the closed-loop system is **stable**.

**Answer 5:**
Given open-loop system oscillations: $T_u = 2\pi / \omega_{osc} = 2\pi / 2 = \pi$ seconds.
Ultimate Gain: $K_u = 5$.

Using Ziegler-Nichols closed-loop tuning rules for PID:
*   $K_p = 0.6 K_u = 0.6 \times 5 = 3.0$
*   $T_i = T_u / 2 = \pi / 2 \approx 1.57$ seconds
*   $K_i = K_p / T_i = 3.0 / (\pi/2) = 6/\pi \approx 1.91$
*   $T_d = T_u / 8 = \pi / 8 \approx 0.393$ seconds
*   $K_d = K_p T_d = 3.0 \times (\pi/8) = 3\pi/8 \approx 1.18$

Initial PID gains: $K_p = 3.0$, $K_i \approx 1.91$, $K_d \approx 1.18$.

---

### **Important Points to Remember**

*   **Model Choice:** Transfer functions are good for SISO LTI systems, while state-space is more general and suitable for MIMO and non-linear systems.
*   **Feedback is Key:** Feedback control is essential for achieving accuracy, rejecting disturbances, and improving robustness.
*   **Stability is Paramount:** Before optimizing performance, ensure the closed-loop system is stable.
*   **PID Components:** Understand the role of $K_p$, $K_i$, and $K_d$ in shaping the system's response.
*   **Tuning Trade-offs:** PID tuning involves balancing speed, overshoot, and steady-state error. No single set of gains is perfect for all situations.
*   **System Dynamics:** The inherent dynamics of the robot manipulator (inertia, friction) significantly influence controller design and achievable performance.

---

This module provides the foundational knowledge for understanding how robotic systems are controlled. The concepts of system representation, performance evaluation, and PID control are critical for the successful implementation of robotic applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
