---
title: "a. Design of  P, PI, PD, PID controller using the Ziegler-Nichols method."
subject: "CONTROL SYSTEM LAB"
module: "Module 14: PID Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36794"
status: "completed"
scrapedAt: "2026-05-23T16:25:41.469Z"
---
# Control System Lab - Module 14: PID Controller Design

## Topic: a. Design of P, PI, PD, PID Controller using the Ziegler-Nichols Method

### 1. Introduction to PID Controllers

PID (Proportional-Integral-Derivative) controllers are the most widely used controllers in industrial applications due to their simplicity, robustness, and effectiveness in achieving desired system performance. They provide a control signal based on the error between the desired setpoint and the actual system output.

*   **Error (e(t))**: The difference between the desired setpoint (r(t)) and the system output (y(t)).
    *   $e(t) = r(t) - y(t)$
*   **Control Signal (u(t))**: The output of the PID controller that manipulates the system's input.

The general form of a PID controller is:

$u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

Where:
*   $K_p$: Proportional Gain
*   $K_i$: Integral Gain
*   $K_d$: Derivative Gain

### 2. Understanding the Ziegler-Nichols Tuning Methods

The Ziegler-Nichols methods are heuristic tuning rules developed by John G. Ziegler and Nathaniel B. Nichols. They provide a systematic approach to determine the parameters ($K_p$, $K_i$, $K_d$) of a PID controller for a given system. These methods are empirical and are generally applied to systems that can be approximated by a first-order plus dead time (FOPDT) model.

There are two primary Ziegler-Nichols methods:

1.  **The First Method (Reaction Curve Method)**: Based on the open-loop step response of the system.
2.  **The Second Method (Ultimate Sensitivity Method)**: Based on the closed-loop response of the system.

**Important Note:** Both methods require some prior knowledge or experimentation with the system. The goal is to achieve acceptable transient and steady-state responses, although they may not always yield optimal results.

---

### 3. Ziegler-Nichols First Method (Reaction Curve Method)

This method is applied to systems that can be characterized by an open-loop step response. It involves identifying two key parameters from the system's reaction curve:

*   **Process Gain ($K$):** The ratio of the change in the steady-state output to the change in the input.
    *   $K = \frac{\Delta y_{ss}}{\Delta u}$
*   **Time Constant ($T$):** The time it takes for the output to reach approximately 63.2% of its final change.
*   **Dead Time ($L$):** The time delay between the input change and the start of the output response.

**Procedure:**

1.  **Open-Loop Step Response:** Apply a step input to the system with the controller in manual mode (open-loop).
2.  **Identify Parameters:** From the recorded step response:
    *   Determine the steady-state change in output ($\Delta y_{ss}$) for a given step input change ($\Delta u$). Calculate $K = \Delta y_{ss} / \Delta u$.
    *   Estimate the dead time ($L$) by observing the time until the output starts to change.
    *   Estimate the time constant ($T$) by drawing a tangent to the steepest part of the response curve at the inflection point. The intersection of this tangent with the initial output level and the final output level gives two points. The time difference between these points, after accounting for the dead time, can be used to estimate $T$. A common approximation is to find the time it takes for the output to reach 63.2% of its total change *after* the dead time has passed.
3.  **Apply Tuning Rules:** Once $K$, $L$, and $T$ are determined, use the following Ziegler-Nichols tuning rules:

| Controller Type | $K_p$                | $T_i$ (Integral Time) | $T_d$ (Derivative Time) | $K_i = K_p / T_i$ | $K_d = K_p \cdot T_d$ |
| :-------------- | :------------------- | :-------------------- | :---------------------- | :---------------- | :-------------------- |
| **P**           | $0.5 K$              | $\infty$              | 0                       | 0                 | 0                     |
| **PI**          | $0.45 K$             | $L / 0.83$            | 0                       | $0.54 K / L$      | 0                     |
| **PID**         | $0.6 K$              | $L / 2$               | $L / 3$                 | $1.2 K / L$       | $0.18 K L$            |

*   **Relationship between $K_p, K_i, K_d$ and $T_i, T_d$:**
    *   $K_i = K_p / T_i$
    *   $K_d = K_p \cdot T_d$

**Example (First Method):**

Consider a system whose open-loop step response is approximated by:
*   Process Gain, $K = 5$
*   Dead Time, $L = 2$ seconds
*   Time Constant, $T = 10$ seconds

Using the Ziegler-Nichols First Method for a **PID controller**:

*   $K_p = 0.6 K = 0.6 \times 5 = 3.0$
*   $T_i = L / 2 = 2 / 2 = 1$ second
*   $T_d = L / 3 = 2 / 3 \approx 0.67$ seconds

Therefore, the PID controller parameters are:
*   $K_p = 3.0$
*   $K_i = K_p / T_i = 3.0 / 1 = 3.0$
*   $K_d = K_p \cdot T_d = 3.0 \times 0.67 = 2.01$

---

### 4. Ziegler-Nichols Second Method (Ultimate Sensitivity Method)

This method is applied to systems that exhibit sustained oscillations when controlled by a proportional controller in a closed-loop configuration. It involves finding the **ultimate gain ($K_u$)** and the **ultimate period ($P_u$)**.

**Procedure:**

1.  **Closed-Loop Setup:** Place the system in closed-loop with only a **proportional controller** ($K_i = 0, K_d = 0$).
2.  **Increase Proportional Gain:** Gradually increase the proportional gain ($K_p$) from a small value.
3.  **Observe Oscillations:** Continue increasing $K_p$ until the system output exhibits **sustained, stable oscillations** (i.e., the amplitude of oscillations remains constant). This proportional gain is the **ultimate gain ($K_u$)**.
4.  **Measure Ultimate Period:** Measure the period of these sustained oscillations. This is the **ultimate period ($P_u$)**.
5.  **Apply Tuning Rules:** Once $K_u$ and $P_u$ are determined, use the following Ziegler-Nichols tuning rules:

| Controller Type | $K_p$        | $T_i$ (Integral Time) | $T_d$ (Derivative Time) | $K_i = K_p / T_i$ | $K_d = K_p \cdot T_d$ |
| :-------------- | :----------- | :-------------------- | :---------------------- | :---------------- | :-------------------- |
| **P**           | $0.5 K_u$    | $\infty$              | 0                       | 0                 | 0                     |
| **PI**          | $0.45 K_u$   | $P_u / 1.2$           | 0                       | $0.375 K_u / P_u$ | 0                     |
| **PID**         | $0.6 K_u$    | $P_u / 2$             | $P_u / 8$               | $1.2 K_u / P_u$   | $0.075 K_u P_u$       |

**Example (Second Method):**

Suppose for a particular system, when using a proportional controller in closed-loop, sustained oscillations occur at a proportional gain of $K_u = 10$ with an oscillation period of $P_u = 4$ seconds.

Using the Ziegler-Nichols Second Method for a **PID controller**:

*   $K_p = 0.6 K_u = 0.6 \times 10 = 6.0$
*   $T_i = P_u / 2 = 4 / 2 = 2$ seconds
*   $T_d = P_u / 8 = 4 / 8 = 0.5$ seconds

Therefore, the PID controller parameters are:
*   $K_p = 6.0$
*   $K_i = K_p / T_i = 6.0 / 2 = 3.0$
*   $K_d = K_p \cdot T_d = 6.0 \times 0.5 = 3.0$

---

### 5. Designing P, PI, and PD Controllers using Ziegler-Nichols

The Ziegler-Nichols methods provide a framework to tune all three types of controllers:

*   **P Controller Design:**
    *   **First Method:** $K_p = 0.5 K$ (where K is process gain)
    *   **Second Method:** $K_p = 0.5 K_u$ (where $K_u$ is ultimate gain)
    *   The goal is to improve the transient response and reduce steady-state error compared to an uncontrolled system. However, P controllers alone often have significant steady-state error.

*   **PI Controller Design:**
    *   **First Method:** $K_p = 0.45 K$, $T_i = L / 0.83$. This controller aims to eliminate steady-state error (due to the integral term) while improving transient response.
    *   **Second Method:** $K_p = 0.45 K_u$, $T_i = P_u / 1.2$. Similar to the first method, it addresses steady-state error and transient response.

*   **PD Controller Design:**
    *   **First Method:** $K_p = 0.6 K$, $T_d = L / 3$. This controller improves transient response by anticipating future error and reducing overshoot and settling time. It does not address steady-state error.
    *   **Second Method:** $K_p = 0.6 K_u$, $T_d = P_u / 8$. Similar benefits as the first method.

*   **PID Controller Design:**
    *   **First Method:** $K_p = 0.6 K$, $T_i = L / 2$, $T_d = L / 3$. This is the most comprehensive controller, aiming to improve transient response, eliminate steady-state error, and further enhance stability.
    *   **Second Method:** $K_p = 0.6 K_u$, $T_i = P_u / 2$, $T_d = P_u / 8$. Offers similar comprehensive control.

---

### 6. Practical Considerations and Limitations of Ziegler-Nichols Methods

While powerful, the Ziegler-Nichols methods have several practical considerations:

*   **Approximation:** They are heuristic and provide a starting point. The system response might not perfectly fit the FOPDT model.
*   **Aggressive Tuning:** The initial Ziegler-Nichols settings can often lead to aggressive control actions, resulting in large overshoot and oscillations.
*   **Re-tuning:** It is almost always necessary to re-tune the controller parameters based on the actual closed-loop performance to meet specific performance requirements.
*   **Non-minimum Phase Systems:** These methods are not directly applicable to non-minimum phase systems or systems with significant zeros.
*   **Time-Varying Systems:** For systems whose parameters change over time, the Ziegler-Nichols tuning may become ineffective.
*   **Second Method Safety:** The second method requires pushing the system to instability (sustained oscillations), which can be risky or undesirable in some practical applications.

**Recommendations for Re-tuning:**

*   **Reduce Overshoot/Oscillations:** Decrease $K_p$, increase $T_i$, or decrease $T_d$.
*   **Reduce Steady-State Error:** Increase $K_p$ or decrease $T_i$.
*   **Speed Up Response:** Increase $K_p$ or decrease $T_i$ and $T_d$.

**Reference:**
*   **Ogata (2009):** Discusses PID control and tuning in Chapters 7 and 8, emphasizing the impact of controller parameters on system performance.
*   **Nise (2009):** Provides a detailed explanation of PID controllers and various tuning methods, including Ziegler-Nichols, in Chapter 5.
*   **Nagrath & Gopal (2009):** Covers controller design and tuning techniques, including Ziegler-Nichols, in their discussions on feedback control systems.

---

### 7. Alignment with Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3)**
    *   The Ziegler-Nichols first method (Reaction Curve Method) directly involves conducting an open-loop step response experiment to determine system parameters like $K$, $L$, and $T$. This allows for system modeling.
*   **CO2: Conduct suitable experiments and determine the performance specifications. (K3)**
    *   After applying Ziegler-Nichols tuning, experiments (step response tests) are conducted to evaluate performance metrics such as overshoot, settling time, and steady-state error, comparing them against desired specifications.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (K3)**
    *   The identified system parameters ($K, L, T$) from experiments can be used to build a simulation model of the system. The Ziegler-Nichols tuning rules are then applied in the simulation environment to design the controller.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (K5)**
    *   This is the core outcome addressed by this topic. Using simulation tools, a system model is created, and then Ziegler-Nichols rules are applied to derive initial PID controller parameters. These parameters are then used to implement the controller in the simulation, and the resulting system performance is analyzed and refined to meet the required specifications.

---

### 8. Practice Questions and Answers

**Question 1:**
A process has an open-loop step response characterized by a process gain $K = 10$, a dead time $L = 1$ second, and a time constant $T = 5$ seconds. Using the Ziegler-Nichols **First Method**, determine the $K_p$, $T_i$, and $T_d$ values for a **PID controller**.

**Answer:**
For a PID controller using the Ziegler-Nichols First Method:
*   $K_p = 0.6 K = 0.6 \times 10 = 6.0$
*   $T_i = L / 2 = 1 / 2 = 0.5$ seconds
*   $T_d = L / 3 = 1 / 3 \approx 0.33$ seconds

Therefore, the PID controller parameters are $K_p = 6.0$, $K_i = K_p / T_i = 6.0 / 0.5 = 12.0$, and $K_d = K_p \cdot T_d = 6.0 \times 0.33 \approx 1.98$.

**Question 2:**
In a closed-loop system, sustained oscillations are observed with a proportional controller at a gain of $K_u = 5$ and an ultimate period of $P_u = 2$ seconds. Using the Ziegler-Nichols **Second Method**, find the parameters ($K_p$, $T_i$, $T_d$) for a **PI controller**.

**Answer:**
For a PI controller using the Ziegler-Nichols Second Method:
*   $K_p = 0.45 K_u = 0.45 \times 5 = 2.25$
*   $T_i = P_u / 1.2 = 2 / 1.2 \approx 1.67$ seconds
*   $T_d = 0$ (for a PI controller)

Therefore, the PI controller parameters are $K_p = 2.25$ and $K_i = K_p / T_i = 2.25 / 1.67 \approx 1.35$.

**Question 3:**
What are the primary limitations of the Ziegler-Nichols tuning methods? Briefly explain one practical step to overcome these limitations.

**Answer:**
Primary limitations include:
*   **Heuristic Nature:** They are empirical and may not yield optimal results.
*   **Aggressive Tuning:** Initial settings can lead to large overshoot and oscillations.
*   **System Model Assumption:** They work best for systems that can be approximated by an FOPDT model and may not be suitable for non-minimum phase systems.
*   **Risk in Second Method:** The second method requires driving the system to instability.

**Overcoming Limitations:** A practical step is to **re-tune the controller parameters** after initial Ziegler-Nichols tuning based on the observed closed-loop performance. This involves adjusting $K_p$, $T_i$, and $T_d$ iteratively to meet specific performance criteria such as reduced overshoot, faster settling time, or improved disturbance rejection.

---

### 9. Important Points to Remember

*   **Ziegler-Nichols provides starting points, not final answers.** Always re-tune for optimal performance.
*   The **First Method** requires an open-loop step response. The system should be stable in open loop.
*   The **Second Method** requires a closed-loop proportional response that can exhibit sustained oscillations. This can be risky.
*   The methods are most effective for systems that can be approximated as **First-Order Plus Dead Time (FOPDT)**.
*   Understand the role of each PID term:
    *   **P:** Improves transient response but can leave steady-state error.
    *   **I:** Eliminates steady-state error but can degrade transient response and stability.
    *   **D:** Improves transient response by predicting future error, reducing overshoot and settling time, but is sensitive to noise.
*   Be aware of the trade-offs when tuning. Improving one performance aspect may worsen another.

---
This concludes the study notes for Module 14, Topic a. PID Controller Design using the Ziegler-Nichols Method. Remember to practice applying these concepts in your lab experiments and simulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
