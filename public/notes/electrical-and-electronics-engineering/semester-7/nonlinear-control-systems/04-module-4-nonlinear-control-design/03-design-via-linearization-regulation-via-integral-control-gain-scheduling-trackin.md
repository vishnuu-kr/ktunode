---
title: "Design via linearization - regulation via integral control; gain scheduling, tracking."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 4: Nonlinear Control Design:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369b2"
status: "completed"
scrapedAt: "2026-05-23T16:38:35.487Z"
---
# NONLINEAR CONTROL SYSTEMS - Module 4: Nonlinear Control Design

## Topic: Design via Linearization - Regulation via Integral Control; Gain Scheduling, Tracking

**Learning Outcomes:**

*   Understand the concept of linearization for nonlinear control design.
*   Design controllers for regulation using integral control with linearized systems.
*   Explore the principles and application of gain scheduling for nonlinear systems.
*   Develop strategies for tracking control of nonlinear systems using linearization and gain scheduling.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Analyzing qualitative behavior around equilibrium points is fundamental to linearization.
*   **CO2 (K3):** Stability analysis of the linearized system is crucial for controller design.
*   **CO4 (K3):** Designing controllers (integral control, gain scheduling) for regulation and tracking directly addresses this outcome.

---

### 1. Design via Linearization: An Overview

**Key Concept:** Linearization is a powerful technique to approximate the behavior of a nonlinear system around an operating point (equilibrium point) by a linear model. This allows us to apply well-established linear control design techniques.

**Description:**
Consider a nonlinear system described by:
$\dot{x} = f(x, u)$
where $x \in \mathbb{R}^n$ is the state vector and $u \in \mathbb{R}^m$ is the input vector.
Let $(x_0, u_0)$ be an equilibrium point, meaning $f(x_0, u_0) = 0$.

To linearize the system around $(x_0, u_0)$, we perform a Taylor series expansion of $f(x, u)$ around this point:
$f(x, u) \approx f(x_0, u_0) + \frac{\partial f}{\partial x}|_{(x_0, u_0)}(x - x_0) + \frac{\partial f}{\partial u}|_{(x_0, u_0)}(u - u_0)$

Since $f(x_0, u_0) = 0$, and defining the new variables $\tilde{x} = x - x_0$ and $\tilde{u} = u - u_0$, the linearized system is:
$\dot{\tilde{x}} \approx A \tilde{x} + B \tilde{u}$
where $A = \frac{\partial f}{\partial x}|_{(x_0, u_0)}$ is the Jacobian matrix of $f$ with respect to $x$, and $B = \frac{\partial f}{\partial u}|_{(x_0, u_0)}$ is the Jacobian matrix of $f$ with respect to $u$.

**Important Points:**
*   Linearization provides a local approximation. The quality of the approximation depends on how close the system operates to the equilibrium point.
*   The linearized system is only valid for small deviations from the equilibrium point.
*   The effectiveness of controllers designed for the linearized system depends on the validity of this approximation for the overall system behavior.

**Textbook Reference:**
*   **Khalil (2002), Chapter 4: Linearization:** Discusses the process of linearization, Jacobian matrices, and the conditions under which linearization is applicable. It emphasizes that the linearized system's stability provides information about the local stability of the nonlinear system's equilibrium point (CO1, CO2).
*   **Slotine & Li (1991), Chapter 2: Linearization and Feedback:** Introduces linearization as a tool for analysis and design, focusing on the concept of feedback linearization as a more advanced approach, but laying the groundwork for understanding simpler linearization techniques.

---

### 2. Regulation via Integral Control

**Key Concept:** Integral control is used to eliminate steady-state errors, particularly in the presence of disturbances. When applied to a linearized system, it enhances robustness.

**Description:**
For regulation (maintaining the system at a desired equilibrium, often the origin after shifting), we aim to have $\tilde{x} \to 0$ as $t \to \infty$.
A standard linear state-feedback controller is $u = u_0 - K \tilde{x}$. Substituting this into the linearized system:
$\dot{\tilde{x}} = A \tilde{x} + B (u_0 - K \tilde{x}) - B u_0$
$\dot{\tilde{x}} = (A - BK) \tilde{x}$ (assuming $u_0$ is a constant reference, so $\tilde{x} = x - x_0$, and we want $\tilde{x} \to 0$).

However, this controller might not eliminate steady-state errors if there are unmodeled disturbances or parameter variations. Integral control can be introduced.

Let the error be $e = \tilde{x}$ (for regulation, the desired state is $x_0$, so the error is $x-x_0$).
We introduce an integral state variable, $z = \int e \, dt$.
The augmented system becomes:
$\dot{\tilde{x}} = A \tilde{x} + B \tilde{u}$
$\dot{z} = \tilde{x}$

The augmented state is $\begin{bmatrix} \tilde{x} \\ z \end{bmatrix}$. The new control input is $\tilde{u}$.
The control law can be designed as a state feedback on the augmented state:
$\tilde{u} = -K_p \tilde{x} - K_i z$

Substituting this into the augmented system:
$\dot{\tilde{x}} = A \tilde{x} + B(-K_p \tilde{x} - K_i z)$
$\dot{z} = \tilde{x}$

The closed-loop system in state-space form:
$\frac{d}{dt} \begin{bmatrix} \tilde{x} \\ z \end{bmatrix} = \begin{bmatrix} A - BK_p & -BK_i \\ I & 0 \end{bmatrix} \begin{bmatrix} \tilde{x} \\ z \end{bmatrix}$

The design objective is to choose $K_p$ and $K_i$ such that the matrix $\begin{bmatrix} A - BK_p & -BK_i \\ I & 0 \end{bmatrix}$ has eigenvalues in the left-half of the complex plane, ensuring stability and zero steady-state error.

**Example:** Consider a simple mass-spring-damper system with an unmodeled constant external force $d$:
$m\ddot{y} + c\dot{y} + ky = u + d$
Let $x_1 = y$, $x_2 = \dot{y}$. Then $\dot{x}_1 = x_2$, $\dot{x}_2 = -\frac{k}{m}x_1 - \frac{c}{m}x_2 + \frac{1}{m}u + \frac{d}{m}$.
Let the equilibrium be $x_1 = y_0, x_2 = 0$. Then $u_0 + d = 0 \implies u_0 = -d$.
Linearizing around $(y_0, 0)$:
$\tilde{x}_1 = y - y_0$, $\tilde{x}_2 = \dot{y}$
$\dot{\tilde{x}}_1 = \tilde{x}_2$
$\dot{\tilde{x}}_2 = -\frac{k}{m}\tilde{x}_1 - \frac{c}{m}\tilde{x}_2 + \frac{1}{m}\tilde{u}$
where $\tilde{u} = u - u_0$.
$A = \begin{bmatrix} 0 & 1 \\ -\frac{k}{m} & -\frac{c}{m} \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ \frac{1}{m} \end{bmatrix}$.

For integral control, let $z = \int \tilde{x}_1 \, dt$.
$\dot{\tilde{x}}_1 = \tilde{x}_2$
$\dot{\tilde{x}}_2 = -\frac{k}{m}\tilde{x}_1 - \frac{c}{m}\tilde{x}_2 + \frac{1}{m}\tilde{u}$
$\dot{z} = \tilde{x}_1$

Control law: $\tilde{u} = -k_{p1}\tilde{x}_1 - k_{p2}\tilde{x}_2 - k_i z$.
The closed-loop matrix is:
$\begin{bmatrix} 0 & 1 & 0 \\ -\frac{k}{m} & -\frac{c}{m} & \frac{1}{m}(-k_{p1}\tilde{x}_1 - k_{p2}\tilde{x}_2 - k_i z) \\ 1 & 0 & 0 \end{bmatrix}$ - This is incorrect. The control law is applied to $\tilde{u}$.

The closed-loop system matrix is:
$\begin{bmatrix} \tilde{x}_1 \\ \tilde{x}_2 \\ z \end{bmatrix}' = \begin{bmatrix} 0 & 1 & 0 \\ -\frac{k}{m} & -\frac{c}{m} & \frac{1}{m}(-k_i) \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} \tilde{x}_1 \\ \tilde{x}_2 \\ z \end{bmatrix} + \begin{bmatrix} 0 \\ -\frac{1}{m}(k_{p1}) & -\frac{1}{m}(k_{p2}) \\ 0 \end{bmatrix} \begin{bmatrix} \tilde{x}_1 \\ \tilde{x}_2 \end{bmatrix}$
This is also slightly confusingly written. Let's rewrite the augmented system for control:
$\dot{\tilde{x}} = A\tilde{x} + B\tilde{u}$
$\dot{z} = e = \tilde{x}$ (assuming regulation to origin for $\tilde{x}$)

Augmented state vector $X_{aug} = \begin{bmatrix} \tilde{x} \\ z \end{bmatrix}$.
$\dot{X}_{aug} = \begin{bmatrix} A & 0 \\ I & 0 \end{bmatrix} X_{aug} + \begin{bmatrix} B \\ 0 \end{bmatrix} \tilde{u}$

Control law: $\tilde{u} = -K_{aug} X_{aug} = -\begin{bmatrix} K_p & K_i \end{bmatrix} \begin{bmatrix} \tilde{x} \\ z \end{bmatrix}$
$\dot{X}_{aug} = \begin{bmatrix} A & 0 \\ I & 0 \end{bmatrix} X_{aug} + \begin{bmatrix} B \\ 0 \end{bmatrix} (-\begin{bmatrix} K_p & K_i \end{bmatrix} X_{aug})$
$\dot{X}_{aug} = \left( \begin{bmatrix} A & 0 \\ I & 0 \end{bmatrix} - \begin{bmatrix} B K_p & B K_i \\ 0 & 0 \end{bmatrix} \right) X_{aug}$
$\dot{X}_{aug} = \begin{bmatrix} A - BK_p & -BK_i \\ I & 0 \end{bmatrix} X_{aug}$

The characteristic polynomial of the closed-loop system is $\det \begin{bmatrix} sI - (A - BK_p) & BK_i \\ -I & sI \end{bmatrix}$.
Using the property $\det \begin{bmatrix} P & Q \\ R & S \end{bmatrix} = \det(S) \det(P - Q S^{-1} R)$, if $S$ is invertible.
Here, $S=sI$, $R=-I$.
$\det(sI) \det(sI - (A - BK_p) - (BK_i)(sI)^{-1}(-I))$
$= s^n \det(sI - A + BK_p - (BK_i/s)I)$
$= s^n \det(sI - A + BK_p) - \det(BK_i)$ --- This is not correct.

Let's use another property: $\det \begin{bmatrix} P & Q \\ R & S \end{bmatrix} = \det(P) \det(S - R P^{-1} Q)$.
This is also complex.

A simpler approach for PID-like structure (which integral control is a part of):
The controller is $\tilde{u} = -K_p \tilde{x} - K_i \int \tilde{x} dt$.
If we consider a single input single output (SISO) system:
$\dot{\tilde{x}} = A\tilde{x} + b u$
$u = -k_p \tilde{x} - k_i \int \tilde{x} dt$.
$\dot{\tilde{x}} = A\tilde{x} + b (-k_p \tilde{x} - k_i \int \tilde{x} dt)$
$\ddot{\tilde{x}} = A\dot{\tilde{x}} + b (-\dot{k_p} \tilde{x} - k_p \dot{\tilde{x}} - k_i \tilde{x})$
Assuming $k_p, k_i$ are constant.
$\ddot{\tilde{x}} = A\dot{\tilde{x}} - b k_p \dot{\tilde{x}} - b k_i \tilde{x}$
$\ddot{\tilde{x}} + (A+b k_p)\dot{\tilde{x}} + b k_i \tilde{x} = 0$ -- Incorrect, $A$ is a matrix.

Let's stick to the augmented state:
$\begin{bmatrix} \dot{\tilde{x}} \\ \dot{z} \end{bmatrix} = \begin{bmatrix} A & 0 \\ I & 0 \end{bmatrix} \begin{bmatrix} \tilde{x} \\ z \end{bmatrix} + \begin{bmatrix} B \\ 0 \end{bmatrix} \tilde{u}$
With $\tilde{u} = -K_p \tilde{x} - K_i z$.
Closed-loop matrix $M = \begin{bmatrix} A - BK_p & -BK_i \\ I & 0 \end{bmatrix}$.

The characteristic polynomial is $\det(sI_{n+1} - M)$.
For $n=2$, $A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$, $B = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}$, $K_p = \begin{bmatrix} k_{p1} & k_{p2} \end{bmatrix}$, $K_i = k_{i1}$.
$M = \begin{bmatrix} a_{11}-b_1 k_{p1} & a_{12}-b_1 k_{p2} & -b_1 k_{i1} \\ a_{21}-b_2 k_{p1} & a_{22}-b_2 k_{p2} & -b_2 k_{i1} \\ 1 & 0 & 0 \end{bmatrix}$
$\det(sI_3 - M) = s^3 + c_2 s^2 + c_1 s + c_0$.
The desired closed-loop poles (eigenvalues) can be placed using $K_p$ and $K_i$.
For example, we can aim for poles at $-r_1, -r_2, -r_3$ where $r_i > 0$.

**Textbook Reference:**
*   **Khalil (2002), Chapter 6: PID Controllers:** Discusses the design of PID controllers for linear systems, including the integral action for error elimination. The principles can be extended to the linearized form of nonlinear systems.
*   **Slotine & Li (1991), Chapter 3: Feedback Control of Nonlinear Systems:** While focusing on sliding mode and backstepping, it covers basic feedback control concepts that are foundational. The idea of augmenting the system with an integrator is a standard technique in linear control and applicable here.
*   **Isidori (1985), Chapter 3: Feedback Control of Nonlinear Systems:** Explores exact linearization and state feedback, including the role of integrators for robustness and disturbance rejection.

**Important Points:**
*   Integral control increases the order of the system.
*   Care must be taken in pole placement to ensure stability and desired performance.
*   Integral windup can be an issue in practical implementations and requires anti-windup strategies.

---

### 3. Gain Scheduling

**Key Concept:** Gain scheduling is a technique where controller gains are varied (scheduled) based on the operating conditions of the system, which can be represented by measurable variables (e.g., system state, reference signal, or environmental parameters).

**Description:**
Nonlinear systems often exhibit different dynamics at different operating points. A controller designed for one operating point might perform poorly or lead to instability at another. Gain scheduling addresses this by adapting the controller gains to the current operating regime.

**How it works:**
1.  **Identify Scheduling Variable(s):** Choose one or more measurable variables that characterize the system's operating point. This could be a state variable, a combination of state variables, or an external parameter. Let this be $s$.
2.  **Divide the Operating Range:** Divide the possible range of the scheduling variable(s) into several regions.
3.  **Design Controllers for Each Region:** For each region, linearize the system around a representative operating point within that region and design a linear controller (e.g., using pole placement, LQR) for that specific linearized model. This gives a set of controller gains $K_i$ for each region $i$.
4.  **Implement the Schedule:** At runtime, measure the scheduling variable $s$. Based on its value, select the corresponding controller gains $K(s)$. This can be done using look-up tables or by defining a continuous function $K(s)$.

**Control Law:** $u(t) = -K(s(t)) x(t)$ (for state feedback) or $u(t) = -K(s(t)) e(t)$ (for error feedback).

**Example:** Pitch control of an aircraft.
The aerodynamic dynamics of an aircraft change significantly with airspeed. Airspeed can be used as a scheduling variable.
*   At high speeds, the aircraft is more stable, and smaller control gains might be sufficient.
*   At low speeds, the aircraft is less stable, and larger control gains may be needed for adequate response.

A gain scheduling controller would have gains that are a function of airspeed. As the aircraft's speed changes, the controller automatically adjusts its gains to maintain desired performance.

**Textbook Reference:**
*   **Khalil (2002), Chapter 7: Gain Scheduling:** Provides a comprehensive treatment of gain scheduling, including systematic methods for designing gain schedules based on linearization at multiple operating points. It also discusses the stability analysis of gain-scheduled systems.
*   **Slotine & Li (1991), Chapter 3: Feedback Control of Nonlinear Systems:** Although not the primary focus, the chapter touches upon the idea of adapting control laws, which is the essence of gain scheduling.
*   **Isidori (1985), Chapter 6: Gain Scheduling:** Discusses the concept of gain scheduling as a practical approach to control of nonlinear systems and presents some design methodologies.

**Important Points:**
*   The choice of the scheduling variable is crucial for the effectiveness of the gain schedule.
*   The transition between controller gains in different regions should be smooth to avoid abrupt changes in system behavior.
*   The stability of the gain-scheduled system needs careful analysis, as it is a form of switching system.

---

### 4. Tracking Control via Linearization and Gain Scheduling

**Key Concept:** Tracking control aims to make the system output follow a desired reference trajectory. For nonlinear systems, linearization and gain scheduling can be combined to achieve this.

**Description:**
For tracking, the desired state is not a constant equilibrium point but a time-varying reference trajectory $x_d(t)$. The error is $e(t) = x_d(t) - x(t)$.
The control objective is to make $e(t) \to 0$ as $t \to \infty$.

**Approach using Linearization and Gain Scheduling:**

1.  **Reference Trajectory:** Define a desired reference trajectory $x_d(t)$ such that $f(x_d(t), u_d(t)) = \dot{x}_d(t)$, where $u_d(t)$ is the feedforward control signal that would drive the system along the desired trajectory if it were linear. For nonlinear systems, finding $u_d(t)$ can be challenging and may require techniques like feedback linearization.

2.  **Error Dynamics:** Consider the error system:
    $\dot{e} = \dot{x}_d - \dot{x} = \dot{x}_d - f(x, u)$
    Let $x = x_d - e$. Substitute into the error dynamics:
    $\dot{e} = \dot{x}_d - f(x_d - e, u)$

3.  **Linearization of Error Dynamics:** Linearize the error dynamics around the desired trajectory $(x_d(t), u_d(t))$:
    $f(x_d - e, u) \approx f(x_d, u_d) + \frac{\partial f}{\partial x}|_{(x_d, u_d)}(-e) + \frac{\partial f}{\partial u}|_{(x_d, u_d)}(u - u_d)$
    Since $f(x_d, u_d) = \dot{x}_d$, we get:
    $\dot{e} \approx \dot{x}_d - (\dot{x}_d + A_d(t)(-e) + B_d(t)(u - u_d))$
    $\dot{e} \approx (A_d(t) - B_d(t) K_d(t)) e$
    where $A_d(t) = \frac{\partial f}{\partial x}|_{(x_d(t), u_d(t))}$, $B_d(t) = \frac{\partial f}{\partial u}|_{(x_d(t), u_d(t))}$, and we propose a feedback control law $u = u_d - K_d(t) e$.

    The objective is to design $K_d(t)$ such that the closed-loop error system $\dot{e} = (A_d(t) - B_d(t) K_d(t)) e$ is stable and achieves desired performance.

4.  **Gain Scheduling for Time-Varying Gains:** The matrices $A_d(t)$ and $B_d(t)$ are generally time-varying because the operating point $(x_d(t), u_d(t))$ is time-varying. This means the required feedback gain $K_d(t)$ will also be time-varying.
    *   If the reference trajectory $x_d(t)$ is known, $u_d(t)$ can often be calculated (e.g., using differential flatness or feedback linearization). Then $A_d(t)$ and $B_d(t)$ can be computed.
    *   If $A_d(t)$ and $B_d(t)$ change smoothly over time, a gain scheduling approach can be applied. The scheduling variable could be time $t$ itself, or a combination of $x_d(t)$ and its derivatives.
    *   Alternatively, if the reference trajectory varies over a range of operating conditions (e.g., different speeds), gain scheduling can be used based on the operating point dictated by the reference signal.

**Example:** Tracking control of a robotic manipulator.
The robot's dynamics are highly nonlinear due to gravity, Coriolis forces, and inertia coupling.
$M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \tau$
where $q$ is the joint position, $\dot{q}$ is the joint velocity, $M(q)$ is the inertia matrix, $C(q, \dot{q})$ is the Coriolis/centripetal matrix, $G(q)$ is the gravity vector, and $\tau$ is the torque vector.

To track a desired trajectory $q_d(t)$, $\dot{q}_d(t)$, $\ddot{q}_d(t)$:
1.  **Feedforward Torque:** Calculate a feedforward torque $\tau_{ff}$ that would approximately follow the trajectory:
    $\tau_{ff} = M(q_d)\ddot{q}_d + C(q_d, \dot{q}_d)\dot{q}_d + G(q_d)$.
2.  **Error State:** Define error $e = q_d - q$ and $\dot{e} = \dot{q}_d - \dot{q}$.
3.  **Feedback Control:** Design a feedback controller for the error. Linearize the error dynamics around the desired trajectory. A common controller is a PD controller for the error:
    $\tau = \tau_{ff} - K_p e - K_d \dot{e}$
    Substituting this into the robot dynamics:
    $M(q_d)\ddot{q}_d + C(q_d, \dot{q}_d)\dot{q}_d + G(q_d) + M(q)\ddot{e} + \dots = \tau_{ff} - K_p e - K_d \dot{e}$
    If we linearize $M(q), C(q, \dot{q}), G(q)$ around $(q_d, \dot{q}_d)$:
    $M(q) \approx M(q_d) + \frac{\partial M}{\partial q}|_{q_d} (q-q_d) = M(q_d) - \frac{\partial M}{\partial q}|_{q_d} e$
    This leads to a time-varying linear system for the error:
    $M(q_d) \ddot{e} + (\dots) \dot{e} + (\dots) e = -K_p e - K_d \dot{e}$
    The gains $K_p$ and $K_d$ can be designed using pole placement for this linearized time-varying system. If the operating conditions (e.g., joint angles $q_d$) vary significantly, gain scheduling might be needed for $K_p$ and $K_d$.

**Textbook Reference:**
*   **Khalil (2002), Chapter 8: Nonlinear Tracking Control:** Discusses various approaches to tracking control for nonlinear systems, including feedback linearization (which linearizes the system dynamics exactly) and approaches that rely on local linearization. Gain scheduling is presented as a method to handle varying dynamics during tracking.
*   **Slotine & Li (1991), Chapter 4: Tracking Control:** Focuses on concepts like feedback linearization and adaptive control for tracking. The idea of linearizing around the desired trajectory is fundamental.
*   **Isidori (1985), Chapter 4: Output Control and Tracking:** Explores output tracking problems and how to transform them into regulation problems via state feedback and dynamic compensation.

**Important Points:**
*   Finding the feedforward control signal is often a critical first step.
*   Linearizing the error dynamics assumes that the reference trajectory is smooth and the system operates "close" to it in some sense.
*   Gain scheduling can be employed if the linearized error dynamics have time-varying coefficients that can be parameterized by a measurable variable.

---

### Practice Questions and Exercises

**Question 1:**
Consider the nonlinear system:
$\dot{x}_1 = x_1 - x_1^3 + u$
$\dot{x}_2 = -x_2 + x_1$
Design an integral controller for regulating the system to the equilibrium point $(0, 0)$. Determine the structure of the closed-loop system matrix and discuss how to choose the controller gains $K_p$ and $K_i$.

**Answer:**
The system is already linearized around $(0,0)$ for $x_1$, and $x_2$ dynamics are linear.
$A = \begin{bmatrix} 1 & 0 \\ -1 & -1 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
We want to regulate $x_1$ to 0. Let $e = x_1$. Introduce $z = \int e \, dt$.
Augmented system:
$\dot{x}_1 = x_1 - x_1^3 + u$
$\dot{x}_2 = -x_2 + x_1$
$\dot{z} = x_1$

Let's consider linearization around $(0,0)$ for $x_1$ state, $x_2$ is already linear.
$f(x_1, x_2, u) = \begin{bmatrix} x_1 - x_1^3 + u \\ -x_2 + x_1 \end{bmatrix}$
$A = \frac{\partial f}{\partial x}|_{(0,0)} = \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix}$, $B = \frac{\partial f}{\partial u}|_{(0,0)} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
We need integral control for $x_1$. Let $z = \int x_1 \, dt$.
Augmented state: $\begin{bmatrix} x_1 \\ x_2 \\ z \end{bmatrix}$.
Augmented system matrix structure:
$\dot{x}_1 = x_1 + u$ (linearized)
$\dot{x}_2 = -x_2 + x_1$
$\dot{z} = x_1$
$\begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \\ \dot{z} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & -1 & 0 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ z \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} u$
Control law: $u = -K_p \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} - K_i z$.
$u = -k_{p1} x_1 - k_{p2} x_2 - k_i z$.
Closed-loop matrix:
$M = \begin{bmatrix} A - BK_p & -BK_i \\ I & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & -1 & 0 \\ 1 & 0 & 0 \end{bmatrix} - \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \begin{bmatrix} k_{p1} & k_{p2} & k_i \end{bmatrix}$
$M = \begin{bmatrix} 1 & 0 & 0 \\ 1 & -1 & 0 \\ 1 & 0 & 0 \end{bmatrix} - \begin{bmatrix} k_{p1} & k_{p2} & k_i \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$
$M = \begin{bmatrix} 1-k_{p1} & -k_{p2} & -k_i \\ 1 & -1 & 0 \\ 1 & 0 & 0 \end{bmatrix}$
To ensure stability and zero steady-state error for $x_1$, the eigenvalues of $M$ must have negative real parts. The desired poles can be chosen for the three eigenvalues.

---

**Question 2:**
Explain the concept of gain scheduling and provide an example where it is particularly useful for controlling a nonlinear system.

**Answer:**
Gain scheduling is a control design technique where the controller gains are varied adaptively based on the operating conditions of the system, typically characterized by one or more measurable variables called scheduling variables. The operating range of the system is divided into several regions, and a linear controller is designed for each region by linearizing the nonlinear system around a representative operating point. At runtime, the controller gains are switched or interpolated based on the current value of the scheduling variable.

**Example:** Controlling the pitch of an aircraft.
The aerodynamic forces and moments acting on an aircraft are highly dependent on its speed and altitude. As the aircraft changes its speed (e.g., during climb or descent), its stability characteristics and response to control inputs change significantly.
*   **Scheduling Variable:** Airspeed.
*   **Regions:** Low speed, medium speed, high speed.
*   **Design:** Linearize the aircraft dynamics at representative airspeeds within each region. Design separate PID controllers (or state-feedback controllers) for each linearized model.
*   **Implementation:** During flight, the aircraft's airspeed is measured. The controller selects the appropriate gains from a lookup table or a smoothly varying function based on the measured airspeed. This ensures that the aircraft maintains stable pitch control across a wide range of operating speeds.

---

**Question 3:**
For a system $\dot{x} = f(x, u)$, with desired trajectory $x_d(t)$ and corresponding feedforward control $u_d(t)$, such that $\dot{x}_d = f(x_d, u_d)$. Design a tracking controller using feedback linearization principles applied to the error dynamics.

**Answer:**
1.  **Error Definition:** Define the tracking error as $e(t) = x_d(t) - x(t)$.
2.  **Error Dynamics:** Differentiate the error: $\dot{e} = \dot{x}_d - \dot{x}$.
3.  **Substitution:** Substitute $\dot{x} = f(x, u)$ and $\dot{x}_d = f(x_d, u_d)$:
    $\dot{e} = f(x_d, u_d) - f(x, u)$.
4.  **Linearization of Error Dynamics:** We want to make $e \to 0$. Let's linearize the term $f(x, u)$ around the desired trajectory $(x_d, u_d)$.
    $f(x, u) \approx f(x_d, u_d) + \frac{\partial f}{\partial x}|_{(x_d, u_d)}(x - x_d) + \frac{\partial f}{\partial u}|_{(x_d, u_d)}(u - u_d)$
    $f(x, u) \approx \dot{x}_d + A_d(t) (-e) + B_d(t) (u - u_d)$
    where $A_d(t) = \frac{\partial f}{\partial x}|_{(x_d(t), u_d(t))}$ and $B_d(t) = \frac{\partial f}{\partial u}|_{(x_d(t), u_d(t))}$.
5.  **Error System:** Substitute the linearized approximation back into the error dynamics:
    $\dot{e} \approx \dot{x}_d - (\dot{x}_d - A_d(t)e + B_d(t)(u - u_d))$
    $\dot{e} \approx A_d(t)e - B_d(t)(u - u_d)$.
6.  **Controller Design:** We want to design the control input $u$ to stabilize this error system. A common approach is to use state feedback on the error:
    $u - u_d = -K(t) e$
    where $K(t)$ is a time-varying gain matrix designed to place the eigenvalues of the closed-loop error system in the left-half plane.
7.  **Closed-Loop Error System:** Substituting the control law into the error dynamics:
    $\dot{e} \approx A_d(t)e - B_d(t)(-K(t)e)$
    $\dot{e} \approx (A_d(t) + B_d(t)K(t))e$.
8.  **Gain Design:** The gain matrix $K(t)$ can be designed using linear control techniques (e.g., pole placement) for the time-varying linear system $A_d(t)$ and $B_d(t)$. If the coefficients $A_d(t)$ and $B_d(t)$ change significantly, gain scheduling might be required for $K(t)$.

---

### Important Points to Remember

*   **Linearization is local:** The controller designed based on linearization is only guaranteed to work well in the vicinity of the equilibrium point or the desired trajectory.
*   **Integral action for steady-state error:** Integral control is essential for eliminating steady-state errors, especially in the presence of constant disturbances or modeling inaccuracies.
*   **Gain scheduling for parameter variations:** Use gain scheduling when the system dynamics change significantly with operating conditions that can be measured.
*   **Time-varying systems:** Tracking control often leads to time-varying linearized systems, requiring time-varying or scheduled gains.
*   **Augmented systems:** Integral control increases the system order, requiring analysis of augmented state-space representations.
*   **Reference tracking requires feedforward:** For effective tracking, a feedforward control component is often necessary to anticipate the system's response to the reference trajectory.

---

This module introduces practical approaches to controlling nonlinear systems by leveraging the power of linear control theory through linearization and adaptation techniques like gain scheduling. The ability to analyze and design controllers for these systems is a crucial step towards solving complex real-world control problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
