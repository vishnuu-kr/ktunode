---
title: "Types of controllers and their control action-proportional (P), integral (I), derivative (D), PID control"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c5"
status: "completed"
scrapedAt: "2026-05-23T16:29:41.548Z"
---
# Module 3: Root Locus Analysis and Controllers

## Topic: Types of Controllers and Their Control Action (Proportional (P), Integral (I), Derivative (D), PID Control)

This topic delves into the fundamental building blocks of control systems: controllers. We will explore the distinct control actions provided by Proportional (P), Integral (I), and Derivative (D) controllers, and then combine them to form the widely used Proportional-Integral-Derivative (PID) controller. Understanding these controllers is crucial for shaping system behavior, improving transient response, and ensuring stability.

**Knowledge Level Alignment:**

*   **CO1 (K2):** Understanding the basic concepts of different controller types.
*   **CO2 (K2):** Analyzing how each controller type affects the time-domain response of a system.
*   **CO3 (K3):** Applying knowledge of controller characteristics to influence system stability and performance through root locus analysis (though this topic primarily focuses on controller action, its impact on root locus will be implied).

---

### 1. Introduction to Control Action

In a closed-loop control system, a controller's primary role is to process the error signal (the difference between the desired setpoint and the actual system output) and generate a control signal to manipulate the plant. Different controller types employ different mathematical operations on the error signal to achieve desired system responses.

**Key Concept:** **Error Signal ($e(t)$)**
$e(t) = r(t) - y(t)$
where:
*   $r(t)$ is the reference input (setpoint)
*   $y(t)$ is the system output

---

### 2. Proportional (P) Control

**Description:**
A proportional controller produces a control output that is directly proportional to the current error signal. As the error increases, the control output increases proportionally.

**Control Action:**
The control signal, $u_p(t)$, is given by:
$u_p(t) = K_p e(t)$

where:
*   $K_p$ is the proportional gain (a positive constant).

**Transfer Function:**
The transfer function of a proportional controller is:
$G_p(s) = K_p$

**Effect on System Performance:**

*   **Reduces Steady-State Error:** A proportional controller can reduce, but not always eliminate, steady-state error for certain types of inputs (e.g., step inputs in Type 0 systems).
*   **Improves Transient Response:** Increasing $K_p$ generally speeds up the system's response, reducing rise time and settling time.
*   **Can Cause Instability:** If $K_p$ is too large, it can lead to oscillations and instability, causing the system's output to overshoot and potentially diverge. This is a critical consideration when analyzing stability using root locus.

**Nise (5th Ed., Chapter 5):** Discusses proportional control as the simplest form and its limitations, particularly steady-state error.

**Example:**
Imagine a thermostat controlling room temperature. If the room is 2 degrees Celsius below the setpoint, a proportional controller might increase the heating power by 2 units. If it's 1 degree below, it might increase power by 1 unit.

---

### 3. Integral (I) Control

**Description:**
An integral controller produces a control output that is proportional to the integral of the error signal over time. This means the controller "remembers" past errors.

**Control Action:**
The control signal, $u_i(t)$, is given by:
$u_i(t) = K_i \int_0^t e(\tau) d\tau$

where:
*   $K_i$ is the integral gain (a positive constant).

**Transfer Function:**
The transfer function of an integral controller is:
$G_i(s) = \frac{K_i}{s}$

**Effect on System Performance:**

*   **Eliminates Steady-State Error:** Integral control is effective in eliminating steady-state error for step inputs, regardless of the system's type. It keeps accumulating control effort until the error is zero.
*   **Slows Down Response:** Integral action tends to slow down the system's transient response.
*   **Can Cause Instability/Oscillations:** Excessive integral gain ($K_i$) or an improperly tuned integral controller can lead to sustained oscillations or instability, as it can cause overshoots and wind-up. The pole at the origin ($s=0$) introduced by the integral term shifts the root locus.

**Nise (5th Ed., Chapter 5):** Highlights integral control's ability to eliminate steady-state error but notes its tendency to slow down the system and potentially destabilize it.

**Example:**
In the thermostat example, if the room has been 1 degree below the setpoint for a sustained period, the integral action will continue to increase the heating power gradually, ensuring that eventually, the temperature reaches the setpoint.

---

### 4. Derivative (D) Control

**Description:**
A derivative controller produces a control output that is proportional to the rate of change (derivative) of the error signal. It anticipates future error based on the current trend.

**Control Action:**
The control signal, $u_d(t)$, is given by:
$u_d(t) = K_d \frac{de(t)}{dt}$

where:
*   $K_d$ is the derivative gain (a positive constant).

**Transfer Function:**
The transfer function of an ideal derivative controller is:
$G_d(s) = K_d s$

**Effect on System Performance:**

*   **Improves Stability:** Derivative control can improve the stability of a system by providing damping. It reacts to the rate of change of error, effectively "predicting" and counteracting large deviations.
*   **Reduces Overshoot and Settling Time:** By damping oscillations, derivative action can significantly reduce overshoot and settling time.
*   **Does Not Affect Steady-State Error:** Derivative control has no effect on steady-state error because if the error is constant, its derivative is zero, resulting in no control output.
*   **Sensitive to Noise:** The derivative of a noisy signal can be very large, leading to undesirable control actions. Practical derivative controllers often include a low-pass filter.

**Nise (5th Ed., Chapter 5):** Emphasizes derivative control's contribution to damping and stability but cautions about its sensitivity to noise.

**Example:**
In the thermostat, if the room temperature is rapidly falling, the derivative action will immediately increase the heating power to counteract the rapid change, even before the error becomes large.

---

### 5. Proportional-Integral (PI) Control

**Description:**
A PI controller combines the actions of proportional and integral control. It uses the present error (P action) to provide immediate control and the accumulated past error (I action) to eliminate steady-state error.

**Control Action:**
$u_{pi}(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau$

**Transfer Function:**
$G_{pi}(s) = K_p + \frac{K_i}{s} = \frac{K_p s + K_i}{s}$

**Effect on System Performance:**

*   **Combines Benefits:** Offers faster response (from P) and zero steady-state error (from I).
*   **Slower than P-only:** Integral action can slow down the transient response compared to a well-tuned P controller.
*   **Can Still Be Unstable:** If gains are not properly tuned, the system can still become unstable.

**Nise (5th Ed., Chapter 5):** States that PI control is the most common controller in industrial applications due to its ability to eliminate steady-state error while providing a reasonably fast response.

**Example:**
A PI controller for a motor speed control would use the current speed error for immediate torque adjustment (P) and accumulate any persistent speed deviations to ensure the motor eventually reaches the exact target speed (I).

---

### 6. Proportional-Derivative (PD) Control

**Description:**
A PD controller combines proportional and derivative control. It uses the present error for immediate response and the rate of change of error to anticipate and damp oscillations.

**Control Action:**
$u_{pd}(t) = K_p e(t) + K_d \frac{de(t)}{dt}$

**Transfer Function:**
$G_{pd}(s) = K_p + K_d s$

**Effect on System Performance:**

*   **Improves Transient Response:** Significantly reduces overshoot and settling time, making the system faster and more stable.
*   **Does Not Eliminate Steady-State Error:** PD control does not affect steady-state error.

**Nise (5th Ed., Chapter 5):** Highlights PD control's effectiveness in improving transient response and stability but points out its limitation in eliminating steady-state error.

**Example:**
A PD controller for an aircraft's altitude control would react to the current altitude error (P) and the rate at which the altitude is changing (D) to provide smooth and stable adjustments, preventing large oscillations.

---

### 7. Proportional-Integral-Derivative (PID) Control

**Description:**
A PID controller is a widely used feedback control loop mechanism that combines proportional, integral, and derivative control actions. It is considered a versatile controller capable of achieving excellent performance.

**Control Action:**
The control signal, $u_{pid}(t)$, is given by:
$u_{pid}(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$

**Transfer Function:**
The transfer function of an ideal PID controller is:
$G_{pid}(s) = K_p + \frac{K_i}{s} + K_d s = \frac{K_d s^2 + K_p s + K_i}{s}$

**Effect on System Performance:**

*   **Comprehensive Control:** Offers the benefits of P, I, and D control:
    *   **P:** Fast response to current error.
    *   **I:** Eliminates steady-state error.
    *   **D:** Improves stability, reduces overshoot, and speeds up transient response by anticipating future error.
*   **Versatile Tuning:** By adjusting $K_p$, $K_i$, and $K_d$, a wide range of performance characteristics can be achieved.
*   **Complexity:** Requires careful tuning of three parameters, which can be challenging.

**Nise (5th Ed., Chapter 5):** Dedicates a significant section to PID control, covering its implementation, tuning methods (like Ziegler-Nichols), and its ubiquity in industrial automation. Nagrath & Gopal also provide detailed coverage of PID controllers in their text.

**Example:**
A PID controller for a robotic arm's position would adjust the motor torque based on the current position error (P), the accumulated past position errors to ensure it reaches the exact target (I), and the speed at which the arm is moving to prevent overshooting or oscillations (D).

---

### 8. Practical PID Controller Implementation (Derivative Filter)

The ideal derivative controller ($K_d s$) is sensitive to noise. In practice, a filtered derivative term is used to limit high-frequency gain. A common implementation is:

$u_d(t) = K_d \frac{s}{ \frac{s}{\tau} + 1 } e(t)$

or equivalently in the time domain:

$u_d(t) = K_d \frac{d}{dt} \left( \frac{1}{\tau} \int_0^t e^{- (t-\sigma)/\tau} e(\sigma) d\sigma \right)$

where $\tau$ is a time constant. This essentially applies a first-order low-pass filter to the derivative term.

**Key Concept:** **Derivative Filter**
The filter introduces a pole at $-1/\tau$, which reduces the high-frequency gain of the derivative term, making the controller less sensitive to noise.

---

### 9. Tuning PID Controllers

Tuning involves finding the optimal values for $K_p$, $K_i$, and $K_d$. Common methods include:

*   **Manual Tuning:** Adjusting parameters iteratively based on observation of the system response.
*   **Ziegler-Nichols Methods:** Empirical tuning methods based on either the ultimate gain and period of oscillation or open-loop step response parameters.
*   **Internal Model Control (IMC) Tuning:** A more systematic approach based on a model of the process.

**Nise (5th Ed., Chapter 5):** Provides a comprehensive overview of PID tuning methods, including Ziegler-Nichols.

---

### 10. Impact on Root Locus (Conceptual)

While this topic focuses on controller action, it's important to note how adding controllers impacts the system's root locus:

*   **Proportional Controller ($K_p$):** Acts as a gain, shifting the existing root locus branches.
*   **Integral Controller ($K_i/s$):** Introduces a pole at the origin, which typically pulls root locus branches towards the right-half plane, potentially reducing stability margins. It also introduces a zero, which can influence the shape of the locus.
*   **Derivative Controller ($K_d s$):** Introduces a zero, which can pull root locus branches towards the left-half plane, improving stability and reducing overshoot.

**CO3 Alignment:** Understanding how the zeros and poles introduced by controllers shape the root locus is key to analyzing system stability and performance.

---

### Practice Questions

**Question 1:**
A system has a transfer function $G(s) = \frac{10}{s+5}$.
What is the steady-state error for a unit step input if a proportional controller with $K_p = 2$ is used?

**Answer 1:**
The closed-loop transfer function with a proportional controller is $T(s) = \frac{K_p G(s)}{1 + K_p G(s)}$.
For a unit step input $R(s) = 1/s$, the steady-state output $y_{ss}$ is given by the Final Value Theorem:
$y_{ss} = \lim_{s \to 0} s Y(s) = \lim_{s \to 0} s \frac{T(s)}{s} = \lim_{s \to 0} T(s)$.
$T(s) = \frac{2 \cdot \frac{10}{s+5}}{1 + 2 \cdot \frac{10}{s+5}} = \frac{\frac{20}{s+5}}{\frac{s+5+20}{s+5}} = \frac{20}{s+25}$.
$y_{ss} = \lim_{s \to 0} \frac{20}{s+25} = \frac{20}{25} = 0.8$.
The steady-state error is $e_{ss} = r_{ss} - y_{ss} = 1 - 0.8 = 0.2$.

Alternatively, for a step input $A$, the steady-state error for a system with transfer function $G_{cl}(s)$ is $e_{ss} = \frac{A}{1 + G_{cl}(0)}$.
Here, $G_{cl}(s) = K_p G(s) = 2 \cdot \frac{10}{s+5} = \frac{20}{s+5}$.
$G_{cl}(0) = \frac{20}{5} = 4$.
$e_{ss} = \frac{1}{1 + 4} = \frac{1}{5} = 0.2$.

**Question 2:**
Explain why integral control is essential for eliminating steady-state error in a closed-loop system.

**Answer 2:**
Integral control adds a term proportional to the integral of the error. If there is a non-zero steady-state error, the integral of this error will grow over time. This accumulating integral term will continuously adjust the control signal, driving it higher or lower until the error itself becomes zero. Once the error is zero, the integral of the error will no longer change, and the control signal will settle to a constant value that maintains the zero error, thus eliminating steady-state error.

**Question 3:**
What is the primary benefit and a significant drawback of using derivative control?

**Answer 3:**
*   **Primary Benefit:** Derivative control provides damping to the system. By reacting to the rate of change of the error, it can significantly reduce overshoot and settling time, thereby improving stability and transient response.
*   **Significant Drawback:** Derivative control is highly sensitive to noise in the error signal. Since the derivative amplifies high-frequency components, any noise present in the measurement or the error signal will be magnified by the derivative term, potentially leading to erratic control action.

**Question 4:**
A system with transfer function $G(s) = \frac{1}{s+1}$ is to be controlled by a PD controller. The desired response is to have zero steady-state error and a faster response with reduced overshoot. Which components of the PID controller would you primarily adjust to achieve these goals, and why?

**Answer 4:**
*   **To achieve zero steady-state error:** You would need to add an **integral (I) component**. PD control alone does not eliminate steady-state error for step inputs.
*   **For a faster response with reduced overshoot:** You would adjust the **proportional gain ($K_p$)** for faster response and the **derivative gain ($K_d$)** for reducing overshoot and improving damping.

Therefore, to achieve all the stated goals, a **PID controller** is required, and the tuning would involve adjusting $K_p$, $K_i$, and $K_d$. Specifically, $K_p$ and $K_d$ improve transient response, and $K_i$ eliminates steady-state error.

---

### Important Points to Remember

*   **Controller Types:** Understand the fundamental mathematical operation each controller performs on the error signal (P: proportional, I: integral, D: derivative).
*   **Effect on Steady-State Error:**
    *   P: Can reduce, but not always eliminate.
    *   I: Eliminates steady-state error for step inputs.
    *   D: Has no effect on steady-state error.
*   **Effect on Transient Response:**
    *   P: Speeds up response, can cause overshoot.
    *   I: Slows down response, can cause oscillations.
    *   D: Damps oscillations, reduces overshoot and settling time.
*   **Stability:**
    *   P: Increasing $K_p$ can lead to instability.
    *   I: Can destabilize a system if gain is too high.
    *   D: Generally improves stability.
*   **Noise Sensitivity:** Derivative control is highly sensitive to noise. Practical implementations use filtered derivatives.
*   **PID Controller:** Combines the strengths of P, I, and D control for versatile performance, but requires careful tuning of three parameters.
*   **Root Locus Impact:** Controllers introduce poles and zeros that significantly alter the system's root locus, affecting stability and performance.

---

**References:**

*   Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley. (Chapter 5: Second-Order Systems and PID Control)
*   Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age.
*   Kuo, B. C. (2014). *Automatic Control Systems* (9th ed.). Prentice Hall of India.
*   Gopal, M. (2012). *Control Systems Principles and Design* (4th ed.). Tata McGraw Hill.
*   Dorf, R. C., & Bishop, R. H. (2013). *Modern Control Systems* (12th ed.). Pearson Education India.
*   Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
