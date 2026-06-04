---
title: "State-space representation of nonlinear systems."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699b"
status: "completed"
scrapedAt: "2026-05-23T16:38:03.024Z"
---
# Module 1: Introduction to Nonlinear Systems

## Topic: State-Space Representation of Nonlinear Systems

This module introduces the fundamental concept of representing nonlinear control systems using the state-space framework. We will explore how this representation extends the linear system paradigms and allows for a deeper analysis of complex system dynamics.

---

### 1.1 Why State-Space Representation?

While transfer functions are useful for linear systems, they are generally insufficient for capturing the full behavior of nonlinear systems. State-space representation provides a more general and powerful approach.

*   **Limitations of Transfer Functions for Nonlinear Systems:**
    *   Transfer functions are derived assuming linearity (superposition holds).
    *   They cannot directly represent systems with nonlinearities like saturation, hysteresis, dead zones, etc.
    *   The concept of "poles" and "zeros" is not directly applicable or interpretable in the same way for nonlinear systems.

*   **Advantages of State-Space Representation:**
    *   **Universality:** Applicable to both linear and nonlinear systems.
    *   **Internal State:** Captures the internal "memory" or "state" of the system, which is crucial for understanding nonlinear dynamics.
    *   **Time-Varying Systems:** Can naturally accommodate time-varying parameters, which often arise in nonlinear systems due to operating point changes.
    *   **Foundation for Advanced Analysis and Control:** Essential for techniques like linearization, feedback linearization, Lyapunov stability analysis, and optimal control, which are central to nonlinear control.

---

### 1.2 General Form of Nonlinear State-Space Equations

A nonlinear control system can be described by a set of first-order differential equations that relate the rates of change of the state variables to the current state variables and the input.

**General Form:**

$$
\dot{x}(t) = f(x(t), u(t), t)
$$

$$
y(t) = h(x(t), u(t), t)
$$

Where:

*   $x(t) \in \mathbb{R}^n$: The state vector, representing the internal state of the system at time $t$. $n$ is the order of the system.
*   $u(t) \in \mathbb{R}^m$: The input vector, representing the external control signals at time $t$. $m$ is the number of inputs.
*   $y(t) \in \mathbb{R}^p$: The output vector, representing the measurable outputs of the system at time $t$. $p$ is the number of outputs.
*   $f(\cdot, \cdot, \cdot): \mathbb{R}^n \times \mathbb{R}^m \times \mathbb{R}_{\ge 0} \to \mathbb{R}^n$: The **state transition function**. This function defines how the state evolves over time, and it can be a nonlinear function of the state, input, and time.
*   $h(\cdot, \cdot, \cdot): \mathbb{R}^n \times \mathbb{R}^m \times \mathbb{R}_{\ge 0} \to \mathbb{R}^p$: The **output function**. This function defines how the output is related to the state, input, and time.

**Key Points:**

*   The functions $f$ and $h$ can be **nonlinear**. This is the defining characteristic of a nonlinear state-space representation.
*   The system can be **autonomous** if the state equations do not explicitly depend on time ($f(x, u)$).
*   The system can be **time-varying** if any of the functions depend explicitly on $t$.

---

### 1.3 Examples of Nonlinear State-Space Representations

Let's look at some common examples:

**Example 1.1: Pendulum with Damping and Driving Force**

Consider a simple pendulum with an external driving force and viscous damping.

*   State variables:
    *   $x_1(t) = \theta(t)$: Angle of the pendulum from the vertical.
    *   $x_2(t) = \dot{\theta}(t)$: Angular velocity of the pendulum.
*   Input:
    *   $u(t)$: Driving torque applied to the pendulum.

The equations of motion are:
$m L^2 \ddot{\theta} + b \dot{\theta} + m g L \sin(\theta) = u(t)$

Dividing by $m L^2$:
$\ddot{\theta} + \frac{b}{m L^2} \dot{\theta} + \frac{g}{L} \sin(\theta) = \frac{1}{m L^2} u(t)$

In state-space form:
Let $x_1 = \theta$ and $x_2 = \dot{\theta}$.
Then $\dot{x}_1 = x_2$.

The second-order equation becomes:
$\dot{x}_2 + \frac{b}{m L^2} x_2 + \frac{g}{L} \sin(x_1) = \frac{1}{m L^2} u(t)$

So, the state equations are:
$$
\dot{x}_1(t) = x_2(t)
$$
$$
\dot{x}_2(t) = -\frac{g}{L} \sin(x_1(t)) - \frac{b}{m L^2} x_2(t) + \frac{1}{m L^2} u(t)
$$

The output could be the angle itself, $y(t) = \theta(t)$.
$$
y(t) = x_1(t)
$$

Here, $f(x, u) = \begin{bmatrix} x_2 \\ -\frac{g}{L} \sin(x_1) - \frac{b}{m L^2} x_2 + \frac{1}{m L^2} u \end{bmatrix}$ and $h(x, u) = x_1$. The presence of $\sin(x_1)$ makes this a nonlinear system.

**(Reference: Khalil, Chapter 1, Section 1.1.1 - Basic Concepts)**

---

**Example 1.2: System with Saturation**

Consider a system where the input to an actuator is limited. For instance, a motor that cannot exceed a certain speed.

*   State variable:
    *   $x(t)$: The state of the system (e.g., position, velocity).
*   Input:
    *   $v(t)$: Desired control signal.
    *   $u(t)$: Actual control signal applied to the plant, where $u(t) = \text{sat}(v(t))$, and $\text{sat}(v) = \begin{cases} v_{max} & \text{if } v > v_{max} \\ v & \text{if } -v_{max} \le v \le v_{max} \\ -v_{max} & \text{if } v < -v_{max} \end{cases}$.

Let's assume a simple first-order system with a saturating actuator:
$\dot{x}(t) = -ax(t) + bu(t)$, where $a > 0, b > 0$.

The state-space representation is:
$$
\dot{x}(t) = -ax(t) + b \cdot \text{sat}(v(t))
$$
$$
y(t) = x(t)
$$

Here, the nonlinearity is explicitly in the state equation due to the saturation function.

**(Reference: Slotine & Li, Chapter 1, Section 1.1 - Nonlinear Systems)**

---

**Example 1.3: Van der Pol Oscillator**

A classic example of a nonlinear oscillator with a damping term that is negative for small amplitudes and positive for large amplitudes.

*   State variables:
    *   $x_1(t) = x(t)$: Position.
    *   $x_2(t) = \dot{x}(t)$: Velocity.
*   No external input ($u(t)=0$).

The equation of motion is:
$\ddot{x} - \mu(1-x^2)\dot{x} + x = 0$, where $\mu > 0$ is a parameter.

In state-space form:
Let $x_1 = x$ and $x_2 = \dot{x}$.
Then $\dot{x}_1 = x_2$.

The second-order equation becomes:
$\dot{x}_2 - \mu(1-x_1^2)x_2 + x_1 = 0$

So, the state equations are:
$$
\dot{x}_1(t) = x_2(t)
$$
$$
\dot{x}_2(t) = -x_1(t) + \mu(1-x_1^2(t))x_2(t)
$$

The output could be the position, $y(t) = x_1(t)$.
$$
y(t) = x_1(t)
$$

Here, $f(x) = \begin{bmatrix} x_2 \\ -x_1 + \mu(1-x_1^2)x_2 \end{bmatrix}$ and $h(x) = x_1$. The term $\mu(1-x_1^2)x_2$ introduces nonlinearity dependent on the state.

**(Reference: Khalil, Chapter 1, Section 1.1.2 - Examples of Nonlinear Systems)**

---

### 1.4 State-Space Representation of Linear Systems

It's important to recognize how the general nonlinear state-space form reduces to the familiar linear state-space form.

**Linear State-Space Form:**

$$
\dot{x}(t) = Ax(t) + Bu(t)
$$

$$
y(t) = Cx(t) + Du(t)
$$

Where $A, B, C, D$ are constant matrices.

In the context of the general nonlinear form:
*   $f(x(t), u(t), t) = Ax(t) + Bu(t)$
*   $h(x(t), u(t), t) = Cx(t) + Du(t)$

The functions $f$ and $h$ are linear combinations of the state and input variables.

---

### 1.5 Significance for Course Outcomes

This foundational understanding of state-space representation is critical for achieving the course objectives:

*   **CO1: Analyze the qualitative behavior of nonlinear systems about their equilibrium points.**
    To analyze equilibrium points, we need to set $\dot{x} = 0$ and $u=0$ (for autonomous systems, or find a steady-state operating point) in the state-space equations. The structure of $f(x, u)$ directly dictates where these equilibrium points exist.

*   **CO2: Analyze the stability of nonlinear systems.**
    Stability analysis often involves linearizing the system around an equilibrium point. This linearization process requires computing the Jacobian of the state transition function $f$, which is a core operation in nonlinear control theory and relies heavily on the state-space representation. Lyapunov stability analysis also directly uses the state-space equations.

*   **CO3: Analyze the behavior of nonlinear systems using frequency domain analysis.**
    While frequency domain analysis is primarily for linear systems, techniques like describing functions or linearization can be used to approximate nonlinear system behavior in a way that can be interpreted in the frequency domain. This relies on first representing the system in state-space to perform the linearization or analysis.

*   **CO4: Design feedback controller for nonlinear systems.**
    Most modern nonlinear control design techniques, such as feedback linearization, sliding mode control, and adaptive control, are inherently formulated in the state-space domain. These methods directly manipulate the state equations to achieve desired system behavior.

---

### 1.6 Key Concepts and Definitions

*   **State Vector ($x$):** A minimal set of variables that completely describe the internal state of the system at any given time.
*   **Input Vector ($u$):** External signals applied to the system.
*   **Output Vector ($y$):** Measurable outputs of the system.
*   **State Transition Function ($f$):** The function governing the rate of change of the state vector.
*   **Output Function ($h$):** The function relating the output to the state and input.
*   **Equilibrium Point (or Equilibrium State):** A state $x_e$ and a constant input $u_e$ such that if the system starts at $x_e$ with input $u_e$, it remains at $x_e$ for all future times. Mathematically, $\dot{x}_e = f(x_e, u_e) = 0$.
*   **Autonomous System:** A system where the state equations do not explicitly depend on time ($f(x, u)$).
*   **Nonlinear System:** A system that cannot be described by linear differential equations or whose state transition or output functions are nonlinear.

---

### 1.7 Important Points to Remember

*   The state-space representation is the **universal language** for describing dynamical systems, both linear and nonlinear.
*   The nonlinearity in state-space representation arises from the **nonlinear nature of the functions $f$ and $h$**.
*   The state vector must be chosen carefully to capture all the **essential internal dynamics** of the system.
*   Understanding the state-space form is the **gateway to analyzing and controlling** nonlinear systems.

---

### 1.8 Practice Questions and Exercises

**Question 1.1:**
Convert the following second-order nonlinear differential equation into a first-order state-space representation.

$\ddot{y} + y^3 = u$

**Answer:**
Let $x_1 = y$ and $x_2 = \dot{y}$.
Then $\dot{x}_1 = x_2$.
From the equation, $\ddot{y} = u - y^3$.
So, $\dot{x}_2 = u - x_1^3$.

The state-space representation is:
$$
\dot{x}_1 = x_2
$$
$$
\dot{x}_2 = -x_1^3 + u
$$
If the output is $y$, then $y = x_1$.
$$
y = x_1
$$

---

**Question 1.2:**
Consider a simple robotic arm with one joint. The dynamics can be approximated by:
$J \ddot{\theta} + b \dot{\theta}^2 + m g L \sin(\theta) = \tau$
where:
*   $\theta$ is the joint angle.
*   $J$ is the moment of inertia.
*   $b$ is a damping coefficient.
*   $m$ is the mass of the arm.
*   $L$ is the length of the arm.
*   $\tau$ is the applied torque (control input).

Write the state-space representation for this system. Assume the output is the joint angle $\theta$.

**Answer:**
Let $x_1 = \theta$ and $x_2 = \dot{\theta}$.
Then $\dot{x}_1 = x_2$.

From the equation of motion, dividing by $J$:
$\ddot{\theta} + \frac{b}{J} \dot{\theta}^2 + \frac{m g L}{J} \sin(\theta) = \frac{1}{J} \tau$

So, $\dot{x}_2 = -\frac{b}{J} x_2^2 - \frac{m g L}{J} \sin(x_1) + \frac{1}{J} u$, where $u = \tau$.

The state-space representation is:
$$
\dot{x}_1 = x_2
$$
$$
\dot{x}_2 = -\frac{m g L}{J} \sin(x_1) - \frac{b}{J} x_2^2 + \frac{1}{J} u
$$
The output is the joint angle:
$$
y = x_1
$$
The nonlinearities are $\sin(x_1)$ and $x_2^2$.

---

**Question 1.3:**
Identify the nonlinearities in the following state-space representation:
$$
\dot{x}_1 = -x_1 + x_2^2 + u_1
$$
$$
\dot{x}_2 = -x_1 x_2 - 3x_2 + u_2
$$
$$
y_1 = x_1
$$
$$
y_2 = x_1 + x_2
$$

**Answer:**
The nonlinearities are present in the state transition function $f(x, u) = \begin{bmatrix} -x_1 + x_2^2 + u_1 \\ -x_1 x_2 - 3x_2 + u_2 \end{bmatrix}$.
Specifically, the nonlinear terms are:
*   $x_2^2$ in the first state equation.
*   $x_1 x_2$ in the second state equation.

The output function $h(x, u) = \begin{bmatrix} x_1 \\ x_1 + x_2 \end{bmatrix}$ is linear.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 1.9 Further Reading

*   **Khalil, H. K. (2002). *Nonlinear Systems*. Prentice-Hall International (UK).**
    *   Chapter 1 provides a comprehensive introduction to nonlinear systems and their state-space representation, including various examples.

*   **Slotine, J.-J. E., & Li, W. (1991). *Applied Nonlinear Control*. Prentice-Hall, NJ.**
    *   Chapter 1 offers a solid overview of nonlinear systems, motivating the need for state-space methods and introducing fundamental concepts.

*   **Isidori, A. (1985). *Nonlinear Control Systems: An Introduction*. Springer-Verlag.**
    *   Chapter 1 sets the stage for nonlinear control, emphasizing the role of differential equations and state-space descriptions.

*   **Vidyasagar, M. (1991). *Nonlinear System Analysis, Stability and Control*. Prentice-Hall, India.**
    *   Chapter 1 discusses the fundamental mathematical framework for nonlinear systems, including state-space representations.

---
**End of Module 1, Topic 1**