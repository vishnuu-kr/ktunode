---
title: "PID tuning using Ziegler-Nichols method. (3 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c6"
status: "completed"
scrapedAt: "2026-05-23T16:29:42.932Z"
---
# Introduction to Control Systems: Module 3 - Root Locus Analysis and Controllers

## Topic: PID Tuning using Ziegler-Nichols Method

**Estimated Time:** 3 Hours

---

### 1. Introduction to PID Control and Tuning

**1.1 What is PID Control?**

*   **Proportional-Integral-Derivative (PID) control** is a widely used feedback control loop mechanism in industrial control systems.
*   It calculates an **error value** as the difference between a measured process variable and a desired setpoint.
*   The controller attempts to minimize the error by adjusting a control output, typically to a new setpoint value.
*   The PID controller continuously calculates an **error value** ($e(t)$) as the difference between a desired setpoint (SP) and a measured process variable (PV).
*   The controller attempts to minimize the error by adjusting the control output signal.

**1.2 The PID Controller Equation:**

The output of a PID controller, $u(t)$, is given by the sum of three terms:

$u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$

Where:
*   $K_p$: **Proportional Gain**. Responds to the current error. A higher $K_p$ leads to a faster response but can cause overshoot and instability.
*   $K_i$: **Integral Gain**. Responds to the accumulation of past errors. Eliminates steady-state error but can lead to overshoot and oscillations.
*   $K_d$: **Derivative Gain**. Responds to the rate of change of the error. Damps oscillations and improves stability, but can amplify noise.

**1.3 Why PID Tuning is Important:**

*   **Performance:** Properly tuned PID controllers ensure the system reaches the setpoint quickly, with minimal overshoot, and without excessive oscillations.
*   **Stability:** Poorly tuned controllers can lead to instability, causing the system output to diverge uncontrollably.
*   **Robustness:** A well-tuned controller can handle variations in the system parameters and external disturbances.
*   **Efficiency:** Minimizing error and settling time can lead to energy savings and improved process efficiency.

**1.4 Course Outcome Alignment:**

*   This topic directly supports **CO2** by providing a method to analyze and improve the time-domain response (transient response parameters like overshoot and settling time) of linear systems.
*   It also indirectly relates to **CO3** as the tuning parameters influence the location of closed-loop poles, which are fundamental to root locus analysis.

---

### 2. Ziegler-Nichols Tuning Methods

The Ziegler-Nichols (Z-N) method is an empirical tuning method developed by John G. Ziegler and Nathaniel B. Nichols in the 1940s. It provides a systematic approach to determining PID controller parameters ($K_p, K_i, K_d$) based on the open-loop or closed-loop response characteristics of the system.

**2.1 Ziegler-Nichols Closed-Loop (Ultimate Sensitivity) Method**

This method involves finding the **ultimate gain ($K_u$)** and the **ultimate period ($P_u$)** of the system.

**Steps:**

1.  **Set $K_i = 0$ and $K_d = 0$**: Start with a purely proportional (P) controller.
2.  **Increase $K_p$**: Gradually increase the proportional gain ($K_p$) from a small value.
3.  **Find the Ultimate Gain ($K_u$)**: Continue increasing $K_p$ until the system output exhibits sustained, stable oscillations (a limit cycle). This value of $K_p$ is the **ultimate gain ($K_u$)**.
4.  **Find the Ultimate Period ($P_u$)**: Measure the period of these sustained oscillations. This is the **ultimate period ($P_u$)**.
5.  **Calculate Tuning Parameters**: Use the following table to calculate the PID parameters:

    | Controller Type | $K_p$         | $T_i$ (Integral Time) | $T_d$ (Derivative Time) | $K_i = K_p/T_i$ | $K_d = K_p T_d$ |
    | :-------------- | :------------ | :-------------------- | :---------------------- | :-------------- | :-------------- |
    | P               | $0.5 K_u$     | -                     | -                       | -               | -               |
    | PI              | $0.45 K_u$    | $P_u / 1.2$           | -                       | $0.375 K_u$     | -               |
    | PID             | $0.6 K_u$     | $P_u / 2$             | $P_u / 8$               | $0.3 K_u$       | $0.075 K_u$     |

**Important Notes for Closed-Loop Method:**

*   **Safety:** This method can be dangerous if the system is not robust enough to handle sustained oscillations. Ensure safety precautions are in place.
*   **Oscillations:** The oscillations must be stable and sustained, not growing or decaying.
*   **Gain Margin:** $K_u$ is related to the gain margin of the system.

**Example (Conceptual):**

Consider a simple DC motor position control system.
1.  Start with $K_p = 1$, $K_i = 0$, $K_d = 0$.
2.  Gradually increase $K_p$. You observe the system settling faster.
3.  At $K_p = 50$, you see the output oscillating with a constant amplitude. This is $K_u = 50$.
4.  You measure the time between consecutive peaks of the oscillation to be 2 seconds. This is $P_u = 2$ s.
5.  Using the PID tuning rules:
    *   $K_p = 0.6 \times 50 = 30$
    *   $T_i = 2 / 2 = 1$ s
    *   $T_d = 2 / 8 = 0.25$ s

    Therefore, the PID controller parameters would be $K_p = 30$, $K_i = K_p / T_i = 30 / 1 = 30$, and $K_d = K_p T_d = 30 \times 0.25 = 7.5$.

**Textbook Reference:**

*   **Nise, 5th Edition:** Chapter 9 (Designing Controllers Using the Root Locus) discusses the effect of PID controllers on system poles and mentions tuning methods. While Z-N might not be explicitly detailed in this chapter, the understanding of how PID gains shift poles is crucial.
*   **Ogata, 5th Edition:** Chapter 6 (Control Systems Design) and Chapter 8 (State-Space Analysis) cover controller design. Ogata often provides practical examples and discussions on tuning.

---

**2.2 Ziegler-Nichols Open-Loop (Reaction Curve) Method**

This method is used when the system is stable in open-loop and can be tested by applying a step input. It is less disruptive than the closed-loop method.

**Steps:**

1.  **Apply a Step Input**: Apply a step input to the system in its open-loop configuration (i.e., with the feedback loop broken).
2.  **Obtain the Reaction Curve**: Record the system's response (the "reaction curve").
3.  **Identify System Parameters**: From the reaction curve, determine:
    *   **Time Delay ($\tau_d$)**: The time it takes for the output to start responding after the input step is applied.
    *   **Time Constant ($\tau$)**: The time it takes for the response to reach 63.2% of its final value (assuming a first-order system). This is often approximated by drawing a tangent to the curve at its steepest point and seeing where it intersects the final value.
    *   **Process Gain ($K$)**: The ratio of the change in the steady-state output to the change in the input step. $K = \Delta y / \Delta u$.
4.  **Calculate Tuning Parameters**: Use the following table to calculate the PID parameters:

    | Controller Type | $K_p$         | $T_i$ (Integral Time) | $T_d$ (Derivative Time) | $K_i = K_p/T_i$ | $K_d = K_p T_d$ |
    | :-------------- | :------------ | :-------------------- | :---------------------- | :-------------- | :-------------- |
    | P               | $1/\left(K \cdot \frac{\tau}{\tau_d}\right)$ | -                     | -                       | -               | -               |
    | PI              | $0.9/\left(K \cdot \frac{\tau}{\tau_d}\right)$ | $3.3 \tau_d$          | -                       | $0.27 K / \tau_d$ | -               |
    | PID             | $1.2/\left(K \cdot \frac{\tau}{\tau_d}\right)$ | $2 \tau_d$            | $0.5 \tau_d$            | $0.6 K / \tau_d$  | $0.15 K / \tau_d$ |

**Important Notes for Open-Loop Method:**

*   **System Approximation**: This method works best for systems that can be approximated as a first-order plus dead time (FOPDT) model.
*   **Accuracy**: The accuracy of the tuning depends on how well the system fits the FOPDT model and the accuracy of identifying $\tau_d$, $\tau$, and $K$.

**Example (Conceptual):**

Consider a thermal process where you want to control the temperature of a tank.
1.  You apply a step change in heating power (open-loop).
2.  The temperature starts to rise after a delay of 10 seconds ($\tau_d = 10$ s).
3.  You draw a tangent to the temperature curve at its steepest slope. This tangent intersects the final temperature value at a time that is 30 seconds after the initial delay. This implies the time constant is approximately 30 seconds ($\tau = 30$ s).
4.  The temperature change was 20°C for a heating power change that caused this response. The process gain $K = 20°C / \text{power\_unit}$.
5.  Using the PID tuning rules (approximating $\tau/\tau_d = 30/10 = 3$):
    *   $K_p = 1.2 / (K \times 3) = 0.4 / K$
    *   $T_i = 2 \times 10 = 20$ s
    *   $T_d = 0.5 \times 10 = 5$ s

    The PID parameters would be determined based on these values.

**Textbook Reference:**

*   **Nagrath & Gopal, 5th Edition:** Chapter 10 (Controller Action and Process Response) might discuss empirical tuning methods.
*   **Kuo, 9th Edition:** Chapters on controller design and tuning.

---

### 3. Advantages and Disadvantages of Ziegler-Nichols Methods

**3.1 Advantages:**

*   **Simplicity:** Relatively easy to understand and implement.
*   **Systematic:** Provides a structured approach to tuning.
*   **Effective for many systems:** Often provides a good starting point for tuning, especially for systems that can be approximated by first-order plus dead time.
*   **No explicit model required (closed-loop):** The closed-loop method does not require a mathematical model of the plant.

**3.2 Disadvantages:**

*   **Aggressive Tuning:** The original Z-N tuning rules often result in aggressive responses with significant overshoot and oscillations. This is because they aim for a specific closed-loop pole location that is often too close to the imaginary axis.
*   **Not Optimal:** The tuning parameters are not necessarily optimal in terms of transient or steady-state performance.
*   **Requires System Testing:** Both methods require some form of system experimentation, which might not always be feasible or safe.
*   **Sensitivity to Noise (Closed-loop):** The closed-loop method can be sensitive to noise when trying to identify sustained oscillations.
*   **Approximation (Open-loop):** The open-loop method relies on approximating the system as FOPDT, which may not be accurate for all systems.

**3.3 Refinements and Modifications:**

Due to the aggressive nature of the original Z-N rules, many modifications and refined tuning rules have been developed (e.g., Cohen-Coon, Astrom-Hagglund). These aim to achieve better performance by adjusting the tuning constants.

---

### 4. Practical Considerations and Best Practices

*   **Start with the Open-Loop Method:** If possible, the open-loop method is generally safer.
*   **Fine-Tuning:** The Z-N method provides a starting point. After applying the initial parameters, observe the system's response and fine-tune the gains ($K_p, K_i, K_d$) manually or using other tuning strategies to achieve desired performance (e.g., reducing overshoot, improving settling time).
*   **Gain Scheduling:** For systems with varying operating points, gain scheduling might be necessary, where PID parameters are adjusted based on the current operating conditions.
*   **Controller Implementation:** Be aware of how the PID controller is implemented (e.g., ideal PID vs. standard PID with derivative filter). The standard PID has a derivative filter that limits high-frequency gain.
*   **Noise:** If the system is noisy, the derivative term ($K_d$) can amplify the noise. Consider using a derivative filter or reducing $K_d$.
*   **Integral Windup:** If the control output saturates, the integral term can continue to accumulate, leading to "integral windup." Anti-windup strategies should be employed.

---

### 5. Practice Questions and Exercises

**Question 1:**

Describe the two main Ziegler-Nichols tuning methods. For each method, explain the key parameters you need to identify from the system's response and the general procedure to obtain the PID tuning constants.

**Answer:**

*   **Closed-Loop (Ultimate Sensitivity) Method:**
    *   **Key Parameters:** Ultimate Gain ($K_u$) and Ultimate Period ($P_u$).
    *   **Procedure:**
        1.  Set $K_i=0, K_d=0$.
        2.  Increase $K_p$ until sustained oscillations occur. This $K_p$ is $K_u$.
        3.  Measure the period of oscillation, $P_u$.
        4.  Use a table to calculate $K_p, T_i, T_d$ based on $K_u$ and $P_u$.

*   **Open-Loop (Reaction Curve) Method:**
    *   **Key Parameters:** Process Gain ($K$), Time Delay ($\tau_d$), and Time Constant ($\tau$).
    *   **Procedure:**
        1.  Apply a step input to the open-loop system.
        2.  Record the reaction curve (output response).
        3.  Estimate $\tau_d, \tau, K$ from the curve.
        4.  Use a table to calculate $K_p, T_i, T_d$ based on $K, \tau_d, \tau$.

**Question 2:**

A system's open-loop response to a step input is a curve that exhibits a time delay of $\tau_d = 5$ seconds. A tangent drawn at the point of maximum slope intersects the final steady-state value after an additional 15 seconds. The steady-state increase in output is 10 units for a step input increase of 2 units.
Estimate the PID controller tuning parameters using the Ziegler-Nichols open-loop method.

**Answer:**

1.  **Identify parameters:**
    *   $\tau_d = 5$ s
    *   The additional time to reach the final value from the tangent point is $\tau = 15$ s (this represents the time constant if it were a pure first-order system).
    *   Process Gain $K = \frac{\Delta \text{Output}}{\Delta \text{Input}} = \frac{10 \text{ units}}{2 \text{ units}} = 5$.
    *   Ratio $\frac{\tau}{\tau_d} = \frac{15}{5} = 3$.

2.  **Calculate PID parameters using Z-N open-loop table:**
    *   $K_p = \frac{1.2}{K \cdot (\tau/\tau_d)} = \frac{1.2}{5 \cdot 3} = \frac{1.2}{15} = 0.08$
    *   $T_i = 2 \tau_d = 2 \times 5 = 10$ s
    *   $T_d = 0.5 \tau_d = 0.5 \times 5 = 2.5$ s

    Therefore, the PID parameters are $K_p = 0.08$, $T_i = 10$ s, and $T_d = 2.5$ s.
    *   $K_i = K_p / T_i = 0.08 / 10 = 0.008$
    *   $K_d = K_p T_d = 0.08 \times 2.5 = 0.2$

**Question 3:**

What are the primary drawbacks of the original Ziegler-Nichols tuning methods? How can these drawbacks be addressed in practice?

**Answer:**

*   **Drawbacks:**
    *   **Aggressive tuning:** Leads to significant overshoot and oscillations.
    *   **Non-optimal performance:** Does not guarantee the best transient or steady-state response.
    *   **Sensitivity to system characteristics:** Open-loop method assumes FOPDT, closed-loop method can be unstable.
*   **Addressing Drawbacks:**
    *   **Fine-tuning:** Adjust the parameters after initial Z-N tuning based on observed performance.
    *   **Modifications:** Use refined tuning rules (e.g., Cohen-Coon) that offer less aggressive tuning.
    *   **Controller Design:** Consider other tuning methods or auto-tuning features available in modern controllers.
    *   **Performance Criteria:** Define clear performance criteria (e.g., maximum overshoot, settling time) and iterate on tuning to meet them.

---

### 6. Important Points to Remember

*   The Ziegler-Nichols method is an **empirical** tuning technique.
*   There are **two main methods**: Closed-loop (Ultimate Sensitivity) and Open-loop (Reaction Curve).
*   The **closed-loop method** uses $K_u$ and $P_u$, while the **open-loop method** uses $K$, $\tau_d$, and $\tau$.
*   Z-N tuning often results in **aggressive responses** and requires fine-tuning.
*   The **derivative term ($K_d$)** is sensitive to noise.
*   **Integral windup** is a potential problem that needs to be managed.
*   These methods provide a **starting point** for tuning PID controllers for satisfactory performance.

---

### 7. Self-Reflection and Further Learning

*   Consider how the PID tuning parameters ($K_p, K_i, K_d$) affect the closed-loop poles of a system. Relate this to root locus concepts.
*   Investigate other PID tuning methods such as Cohen-Coon, Internal Model Control (IMC) tuning, and auto-tuning algorithms.
*   Explore the impact of derivative filtering on PID control performance and noise sensitivity.
*   Understand how to implement PID controllers in software or hardware, including anti-windup strategies.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
