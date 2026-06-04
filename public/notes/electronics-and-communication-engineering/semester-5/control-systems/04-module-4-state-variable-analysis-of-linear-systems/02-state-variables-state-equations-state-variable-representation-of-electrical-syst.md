---
title: "State variables, state equations, state variable representation of electrical systems."
subject: "CONTROL SYSTEMS"
module: "Module 4: State Variable Analysis of Linear Systems:"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe962"
status: "completed"
scrapedAt: "2026-05-23T17:54:49.714Z"
---
Sure, here are comprehensive study notes on State Variables, State Equations, and State Variable Representation of Electrical Systems for Control Systems, Module 4.

---

# Module 4: State Variable Analysis of Linear Systems: State Variables, State Equations, and State Variable Representation of Electrical Systems

## 1. Introduction to State Variable Analysis

State variable analysis is a powerful method for describing and analyzing dynamic systems. It provides a unified approach that is applicable to both linear and nonlinear, time-invariant and time-varying systems. Unlike the transfer function approach, which is limited to linear, time-invariant systems and often requires zero initial conditions, state variable analysis can handle systems with non-zero initial conditions and is more amenable to computer analysis.

**Key Concepts:**

*   **State:** The state of a dynamic system is the *minimum set of variables* that, along with the input, completely determines the future behavior of the system. These variables are called **state variables**.
*   **State Vector:** A vector composed of the state variables is called the state vector, denoted by $\mathbf{x}(t)$.
*   **State Space:** The multidimensional space whose axes are the state variables is called the state space.
*   **State Equation:** A set of first-order differential equations that describe the time evolution of the state variables based on the current state and the input.
*   **Output Equation:** An algebraic equation that relates the output of the system to the current state and the input.

**References:**

*   Nagarath & Gopal, Chapter 12 (State Variable Analysis)
*   Kuo & Golnaraghi, Chapter 3 (State Variable Methods)
*   Ogata, Chapter 2 (State-Space Representation of Linear Continuous-Time Systems)

## 2. State Variables

The choice of state variables is not unique, but it must be sufficient to describe the system's behavior. For physical systems, state variables are often chosen as the energy-storing elements' variables.

**Key Characteristics of State Variables:**

*   They must be *independent*.
*   They must be sufficient to uniquely determine the system's future behavior given the input.
*   The rate of change of each state variable must be expressible in terms of the state variables themselves and the input.

**Common Choices for State Variables in Electrical Systems:**

*   **Capacitors:** The voltage across the capacitor ($v_C(t)$).
*   **Inductors:** The current through the inductor ($i_L(t)$).

**Why these choices?**

*   The voltage across a capacitor cannot change instantaneously; its rate of change is related to the current flowing through it, which can be expressed in terms of other state variables and inputs.
*   The current through an inductor cannot change instantaneously; its rate of change is related to the voltage across it, which can be expressed in terms of other state variables and inputs.

**Important Point to Remember:** The number of state variables required to describe a system is equal to the order of the system (or the number of independent energy storage elements).

**Example (Nagarath & Gopal):**

Consider a simple RLC series circuit with voltage source $v(t)$ as input.
The energy storage elements are the inductor (L) and the capacitor (C). Therefore, we expect two state variables.

*   Let the voltage across the capacitor be $v_C(t)$.
*   Let the current through the inductor be $i_L(t)$.

These two variables are independent and can describe the system's behavior.

**Practice Question:**

What would be the state variables for a system consisting of two series inductors?

**Answer:** The current through the series combination of inductors. (Since they are in series, the current is the same through both. The effective inductance is $L_{eq} = L_1 + L_2$. Thus, only one state variable is needed: the current through the inductors).

## 3. State Equations

State equations are a set of first-order differential equations that describe how the state variables change over time. They are typically expressed in matrix form.

**General Form of State Equations (Linear Time-Invariant Systems):**

$\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)$

Where:
*   $\mathbf{x}(t)$ is the state vector (column vector of state variables).
*   $\dot{\mathbf{x}}(t)$ is the time derivative of the state vector.
*   $\mathbf{u}(t)$ is the input vector (column vector of input signals).
*   $\mathbf{A}$ is the **state matrix** (also called system matrix), an $n \times n$ matrix where $n$ is the number of state variables. It describes the internal dynamics of the system.
*   $\mathbf{B}$ is the **input matrix** (also called control matrix), an $n \times m$ matrix where $m$ is the number of input signals. It describes how the inputs affect the state variables.

**General Form of Output Equations (Linear Time-Invariant Systems):**

$\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$

Where:
*   $\mathbf{y}(t)$ is the output vector (column vector of output signals).
*   $\mathbf{C}$ is the **output matrix** (also called observation matrix), a $p \times n$ matrix where $p$ is the number of output signals. It describes how the state variables are observed as outputs.
*   $\mathbf{D}$ is the **feedforward matrix** (also called direct transmission matrix), a $p \times m$ matrix. It describes how the inputs directly affect the outputs.

The collection of state equations and output equations is known as the **state-space representation** or **state-space model** of the system.

**Connection to Transfer Functions (CO1 - Knowledge Level: K3):**

For linear time-invariant systems, the state-space representation can be converted to a transfer function. If the system is initially at rest (zero initial conditions), the Laplace transform of the state equation is:

$s\mathbf{X}(s) - \mathbf{x}(0) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$

Assuming $\mathbf{x}(0) = \mathbf{0}$:
$s\mathbf{X}(s) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)$
$(s\mathbf{I} - \mathbf{A})\mathbf{X}(s) = \mathbf{B}\mathbf{U}(s)$
$\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)$

The Laplace transform of the output equation is:
$\mathbf{Y}(s) = \mathbf{C}\mathbf{X}(s) + \mathbf{D}\mathbf{U}(s)$

Substituting $\mathbf{X}(s)$:
$\mathbf{Y}(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s) + \mathbf{D}\mathbf{U}(s)$
$\mathbf{Y}(s) = [\mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}]\mathbf{U}(s)$

The transfer function matrix is:
$G(s) = \frac{\mathbf{Y}(s)}{\mathbf{U}(s)} = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$

This demonstrates how state-space representation can be used to derive transfer functions, aligning with CO1.

**References:**

*   Nagarath & Gopal, Chapter 12
*   Kuo & Golnaraghi, Chapter 3
*   Ogata, Chapter 2

## 4. State Variable Representation of Electrical Systems

This section focuses on deriving the state-space representation for common electrical circuits.

**General Approach:**

1.  **Identify Energy Storage Elements:** These will dictate the number of state variables.
2.  **Choose State Variables:** Typically, capacitor voltages and inductor currents.
3.  **Write Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) equations** for the circuit.
4.  **Express the derivatives of the state variables** ($\dot{x}_i(t)$) in terms of the state variables and input(s). This will form the state equations.
5.  **Express the output(s)** in terms of the state variables and input(s). This will form the output equations.
6.  **Arrange the equations in matrix form** to identify matrices $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$, and $\mathbf{D}$.

---

### 4.1. Example: Series RLC Circuit

**Circuit:** A voltage source $v(t)$ connected in series with a resistor (R), inductor (L), and capacitor (C).

**1. Energy Storage Elements:** Inductor (L) and Capacitor (C).
**2. State Variables:**
    *   $x_1(t) = i_L(t)$ (current through the inductor)
    *   $x_2(t) = v_C(t)$ (voltage across the capacitor)

Let the output be the voltage across the capacitor, $y(t) = v_C(t)$.
The input is $u(t) = v(t)$.

**3. Circuit Equations:**
Apply KVL to the circuit:
$v(t) = i_R(t)R + L\frac{di_L(t)}{dt} + v_C(t)$

Since the components are in series, the current through the resistor is the same as the current through the inductor: $i_R(t) = i_L(t)$.
$v(t) = i_L(t)R + L\frac{di_L(t)}{dt} + v_C(t)$

Also, the current through the capacitor is related to the derivative of the capacitor voltage: $i_C(t) = C\frac{dv_C(t)}{dt}$. Since the current is the same throughout the series circuit, $i_L(t) = i_C(t)$.

**4. State Equations:**
We need to express $\dot{x}_1(t)$ and $\dot{x}_2(t)$ in terms of $x_1(t)$, $x_2(t)$, and $u(t)$.

*   **For $\dot{x}_1(t) = \frac{di_L(t)}{dt}$:**
    From the KVL equation:
    $L\frac{di_L(t)}{dt} = v(t) - i_L(t)R - v_C(t)$
    $\frac{di_L(t)}{dt} = -\frac{R}{L}i_L(t) - \frac{1}{L}v_C(t) + \frac{1}{L}v(t)$
    Substituting state variables:
    $\dot{x}_1(t) = -\frac{R}{L}x_1(t) - \frac{1}{L}x_2(t) + \frac{1}{L}u(t)$

*   **For $\dot{x}_2(t) = \frac{dv_C(t)}{dt}$:**
    Using the capacitor current relationship: $i_C(t) = C\frac{dv_C(t)}{dt}$.
    Since $i_C(t) = i_L(t) = x_1(t)$:
    $x_1(t) = C\frac{dv_C(t)}{dt}$
    $\frac{dv_C(t)}{dt} = \frac{1}{C}x_1(t)$
    $\dot{x}_2(t) = \frac{1}{C}x_1(t) + 0x_2(t) + 0u(t)$

**5. Output Equation:**
The output is $y(t) = v_C(t)$.
$y(t) = 0x_1(t) + 1x_2(t) + 0u(t)$

**6. Matrix Form:**

$\dot{\mathbf{x}}(t) = \begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} -R/L & -1/L \\ 1/C & 0 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 1/L \\ 0 \end{bmatrix} u(t)$

$\mathbf{y}(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 u(t)$

So, the state-space matrices are:
$\mathbf{A} = \begin{bmatrix} -R/L & -1/L \\ 1/C & 0 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1/L \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $\mathbf{D} = 0$

**Practice Question (Series RLC):**

For the series RLC circuit above, with $R=2\Omega$, $L=1H$, $C=0.5F$, and input $v(t) = 5V$ (step input), write down the state-space equations.

**Answer:**
$\mathbf{A} = \begin{bmatrix} -2/1 & -1/1 \\ 1/0.5 & 0 \end{bmatrix} = \begin{bmatrix} -2 & -1 \\ 2 & 0 \end{bmatrix}$
$\mathbf{B} = \begin{bmatrix} 1/1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
$\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
$\mathbf{D} = 0$

State Equations:
$\dot{x}_1(t) = -2x_1(t) - x_2(t) + u(t)$
$\dot{x}_2(t) = 2x_1(t)$

Output Equation:
$y(t) = x_2(t)$

---

### 4.2. Example: Parallel RLC Circuit

**Circuit:** A current source $i(t)$ connected in parallel with a resistor (R), inductor (L), and capacitor (C).

**1. Energy Storage Elements:** Inductor (L) and Capacitor (C).
**2. State Variables:**
    *   $x_1(t) = v_C(t)$ (voltage across the capacitor)
    *   $x_2(t) = i_L(t)$ (current through the inductor)

Let the output be the voltage across the parallel combination, $y(t) = v_C(t)$.
The input is $u(t) = i(t)$.

**3. Circuit Equations:**
Apply KCL at the top node:
$i(t) = i_R(t) + i_L(t) + i_C(t)$

Using component relationships:
*   $i_R(t) = \frac{v(t)}{R}$
*   $v(t)$ is the voltage across the parallel combination, which is $v_C(t)$. So, $i_R(t) = \frac{v_C(t)}{R}$.
*   $i_L(t)$ is given.
*   $i_C(t) = C\frac{dv_C(t)}{dt}$.

So, the KCL equation is:
$u(t) = \frac{x_1(t)}{R} + x_2(t) + C\frac{dx_1(t)}{dt}$

We also need an equation relating to the inductor current, $i_L(t)$. Apply KVL to the loop containing the current source, resistor, and inductor:
$v(t) + v_R(t) + v_L(t) = 0$ (This is not the usual way to think about it).

A better approach is to apply KVL to the loop containing the capacitor and the inductor:
$v_C(t) = v_L(t)$
$x_1(t) = L\frac{di_L(t)}{dt}$
$x_1(t) = L\frac{dx_2(t)}{dt}$

**4. State Equations:**
We need to express $\dot{x}_1(t)$ and $\dot{x}_2(t)$ in terms of $x_1(t)$, $x_2(t)$, and $u(t)$.

*   **For $\dot{x}_1(t) = \frac{dv_C(t)}{dt}$:**
    From the KCL equation:
    $C\frac{dv_C(t)}{dt} = u(t) - \frac{v_C(t)}{R} - i_L(t)$
    $\frac{dv_C(t)}{dt} = -\frac{1}{RC}v_C(t) - \frac{1}{C}i_L(t) + \frac{1}{C}u(t)$
    Substituting state variables:
    $\dot{x}_1(t) = -\frac{1}{RC}x_1(t) - \frac{1}{C}x_2(t) + \frac{1}{C}u(t)$

*   **For $\dot{x}_2(t) = \frac{di_L(t)}{dt}$:**
    From the inductor voltage relationship:
    $L\frac{di_L(t)}{dt} = x_1(t)$
    $\frac{di_L(t)}{dt} = \frac{1}{L}x_1(t)$
    $\dot{x}_2(t) = \frac{1}{L}x_1(t) + 0x_2(t) + 0u(t)$

**5. Output Equation:**
The output is $y(t) = v_C(t)$.
$y(t) = 1x_1(t) + 0x_2(t) + 0u(t)$

**6. Matrix Form:**

$\dot{\mathbf{x}}(t) = \begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} -1/RC & -1/C \\ 1/L & 0 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 1/C \\ 0 \end{bmatrix} u(t)$

$\mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 u(t)$

So, the state-space matrices are:
$\mathbf{A} = \begin{bmatrix} -1/RC & -1/C \\ 1/L & 0 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1/C \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$

**Practice Question (Parallel RLC):**

For the parallel RLC circuit above, with $R=1\Omega$, $L=0.5H$, $C=1F$, and input $i(t) = 2A$ (step input), write down the state-space equations. Assume output is the inductor current $y(t) = i_L(t)$.

**Answer:**
$\mathbf{A} = \begin{bmatrix} -1/(1*1) & -1/1 \\ 1/0.5 & 0 \end{bmatrix} = \begin{bmatrix} -1 & -1 \\ 2 & 0 \end{bmatrix}$
$\mathbf{B} = \begin{bmatrix} 1/1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
$\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$ (since output is $i_L(t) = x_2(t)$)
$\mathbf{D} = 0$

State Equations:
$\dot{x}_1(t) = -x_1(t) - x_2(t) + u(t)$
$\dot{x}_2(t) = 2x_1(t)$

Output Equation:
$y(t) = x_2(t)$

---

### 4.3. Example: DC Motor

**Description:** A DC motor is a common electromechanical system where electrical and mechanical dynamics are coupled. We can represent its behavior using state variables.

**Assumptions:**
*   Armature controlled DC motor.
*   $v_a(t)$ is the armature voltage (input).
*   $i_a(t)$ is the armature current.
*   $J$ is the rotor inertia.
*   $B$ is the viscous friction coefficient.
*   $K_t$ is the torque constant.
*   $K_b$ is the back EMF constant.
*   $R_a$ is the armature resistance.
*   $L_a$ is the armature inductance.
*   $\theta(t)$ is the angular displacement.
*   $\omega(t)$ is the angular velocity.

**Circuit and Mechanical Equations:**
*   **Electrical:** $v_a(t) = i_a(t)R_a + L_a\frac{di_a(t)}{dt} + K_b\omega(t)$
*   **Mechanical:** $J\frac{d\omega(t)}{dt} + B\omega(t) = T(t)$, where $T(t)$ is the torque produced.
*   **Torque:** $T(t) = K_t i_a(t)$

**1. Energy Storage Elements:** Inductor (armature winding) and Inertia (rotor).
**2. State Variables:**
    *   $x_1(t) = i_a(t)$ (armature current)
    *   $x_2(t) = \omega(t)$ (angular velocity)

Let the input be $u(t) = v_a(t)$.
Let the output be the angular velocity, $y(t) = \omega(t)$.

**3. Circuit and Mechanical Equations (in terms of state variables):**
*   **Electrical:** $u(t) = x_1(t)R_a + L_a\frac{dx_1(t)}{dt} + K_b x_2(t)$
*   **Mechanical:** $J\frac{dx_2(t)}{dt} + B x_2(t) = K_t x_1(t)$

**4. State Equations:**
We need to express $\dot{x}_1(t)$ and $\dot{x}_2(t)$ in terms of $x_1(t)$, $x_2(t)$, and $u(t)$.

*   **For $\dot{x}_1(t) = \frac{di_a(t)}{dt}$:**
    From the electrical equation:
    $L_a\frac{dx_1(t)}{dt} = u(t) - x_1(t)R_a - K_b x_2(t)$
    $\frac{dx_1(t)}{dt} = -\frac{R_a}{L_a}x_1(t) - \frac{K_b}{L_a}x_2(t) + \frac{1}{L_a}u(t)$
    $\dot{x}_1(t) = -\frac{R_a}{L_a}x_1(t) - \frac{K_b}{L_a}x_2(t) + \frac{1}{L_a}u(t)$

*   **For $\dot{x}_2(t) = \frac{d\omega(t)}{dt}$:**
    From the mechanical equation:
    $J\frac{dx_2(t)}{dt} = -B x_2(t) + K_t x_1(t)$
    $\frac{dx_2(t)}{dt} = -\frac{B}{J}x_2(t) + \frac{K_t}{J}x_1(t)$
    $\dot{x}_2(t) = \frac{K_t}{J}x_1(t) - \frac{B}{J}x_2(t) + 0u(t)$

**5. Output Equation:**
The output is $y(t) = \omega(t) = x_2(t)$.
$y(t) = 0x_1(t) + 1x_2(t) + 0u(t)$

**6. Matrix Form:**

$\dot{\mathbf{x}}(t) = \begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_t/J & -B/J \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix} u(t)$

$\mathbf{y}(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 u(t)$

So, the state-space matrices are:
$\mathbf{A} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_t/J & -B/J \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $\mathbf{D} = 0$

**Practice Question (DC Motor):**

A DC motor has parameters: $R_a = 1\Omega$, $L_a = 0.5H$, $J = 0.1kg \cdot m^2$, $B = 0.05 Nms/rad$, $K_t = 0.5 Nm/A$, $K_b = 0.5 Vs/rad$. If the armature voltage is the input $v_a(t)$ and the output is the angular velocity $\omega(t)$, write the state-space representation of this DC motor.

**Answer:**
$x_1(t) = i_a(t)$, $x_2(t) = \omega(t)$
$\mathbf{A} = \begin{bmatrix} -1/0.5 & -0.5/0.5 \\ 0.5/0.1 & -0.05/0.1 \end{bmatrix} = \begin{bmatrix} -2 & -1 \\ 5 & -0.5 \end{bmatrix}$
$\mathbf{B} = \begin{bmatrix} 1/0.5 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$
$\mathbf{C} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
$\mathbf{D} = 0$

State Equations:
$\dot{x}_1(t) = -2x_1(t) - x_2(t) + 2u(t)$
$\dot{x}_2(t) = 5x_1(t) - 0.5x_2(t)$

Output Equation:
$y(t) = x_2(t)$

---

## 5. Importance and Applications

*   **Unified Analysis:** Applicable to a wide range of systems (linear, nonlinear, time-varying).
*   **System Description:** Provides a complete description of system behavior, including internal states.
*   **Computer Simulation:** State-space models are directly suitable for digital computer simulation.
*   **Modern Control Theory:** Forms the basis for advanced control techniques like optimal control, pole placement, and observers.
*   **Controllability and Observability (CO5 - Knowledge Level: K3):** State-space representation is essential for analyzing controllability (can the system's state be driven to any desired value by the input?) and observability (can the system's state be determined from its output?). These concepts are crucial for controller and observer design.

**References:**

*   Nagarath & Gopal, Chapter 12, 13 (Controllability and Observability)
*   Kuo & Golnaraghi, Chapter 3, 4 (Controllability and Observability)
*   Ogata, Chapter 2, 3 (Controllability and Observability)

---

## 6. Relation to Other Course Outcomes

*   **CO1 (Transfer Function Approach):** As shown, state-space can be used to derive transfer functions. This module bridges the gap between time-domain physical system modeling and the frequency-domain transfer function approach.
*   **CO2 (Time Domain Analysis):** State equations are inherently time-domain equations, forming the foundation for analyzing system response to various inputs over time.
*   **CO3 & CO4 (Stability Analysis):** Properties of the $\mathbf{A}$ matrix (eigenvalues) directly determine the stability of the system. For instance, if all eigenvalues have negative real parts, the system is stable. This is a more direct way to assess stability compared to Routh-Hurwitz or root locus for higher-order systems.
*   **CO5 (Controllability and Observability):** This module directly introduces the concepts and representations needed to analyze these crucial properties.

---

## 7. Summary and Key Takeaways

*   **State variables** are the minimum set of variables needed to describe the system's future behavior.
*   For electrical systems, capacitor voltages and inductor currents are typical choices for state variables.
*   **State equations** are first-order differential equations describing the rate of change of state variables.
*   The **state-space representation** consists of the state equation ($\dot{\mathbf{x}} = \mathbf{Ax} + \mathbf{Bu}$) and the output equation ($\mathbf{y} = \mathbf{Cx} + \mathbf{Du}$).
*   The matrices $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$, and $\mathbf{D}$ define the system's dynamics, input coupling, output coupling, and direct feedforward paths, respectively.
*   State-space analysis offers a comprehensive approach to system modeling and analysis, extending beyond the limitations of the transfer function method.

---

This set of notes covers the core concepts of state variables, state equations, and their representation in electrical systems, aligning with the learning outcomes and course objectives. Remember to practice deriving these representations for various circuits and systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
