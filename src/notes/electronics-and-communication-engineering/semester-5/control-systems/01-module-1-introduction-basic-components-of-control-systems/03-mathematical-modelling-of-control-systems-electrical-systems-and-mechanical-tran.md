---
title: "Mathematical modelling of control systems : Electrical Systems and Mechanical translational systems."
subject: "CONTROL SYSTEMS"
module: "Module 1: Introduction:  Basic Components of Control Systems"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe94b"
status: "completed"
scrapedAt: "2026-05-23T17:54:35.369Z"
---
# CONTROL SYSTEMS: Module 1 - Introduction: Basic Components of Control Systems

## Topic: Mathematical Modelling of Control Systems: Electrical Systems and Mechanical Translational Systems

---

### 1. Introduction to Mathematical Modelling in Control Systems

*   **Definition:** Mathematical modelling is the process of representing a physical system using mathematical equations. This allows us to analyze, predict, and design the behavior of the system without physically building or experimenting with it.
*   **Importance in Control Systems:**
    *   Enables analysis of system dynamics (how the system responds to inputs over time).
    *   Facilitates the design of controllers to achieve desired system performance.
    *   Allows for simulation and testing of system behavior under various conditions.
    *   Helps in understanding the cause-and-effect relationships within a system.
    *   Crucial for meeting Course Outcomes like CO1 (Analyze systems using transfer function approach).
*   **Types of Mathematical Models:**
    *   **Differential Equations:** Represent the relationships between system variables and their derivatives.
    *   **Transfer Functions:** Represent the input-output relationship in the Laplace domain, particularly useful for linear, time-invariant (LTI) systems.
    *   **State-Space Representation:** A more general method that describes the internal state of a system. (While this topic focuses on transfer functions, it's good to be aware of its existence for later modules).

---

### 2. Mathematical Modelling of Electrical Systems

Electrical systems are fundamental to control systems. We model them using Kirchhoff's laws and the relationships between voltage and current for basic components.

#### 2.1 Basic Electrical Components and their Mathematical Relationships

*   **Resistor (R):**
    *   **Definition:** A component that opposes the flow of current, dissipating energy as heat.
    *   **Relationship:** Ohm's Law: $V(t) = R \cdot I(t)$
        *   $V(t)$: Voltage across the resistor at time $t$.
        *   $I(t)$: Current through the resistor at time $t$.
        *   $R$: Resistance (Ohms, $\Omega$).
    *   **Laplace Domain (assuming zero initial conditions):** $V(s) = R \cdot I(s)$
    *   **Nagarath & Gopal, 7th Ed., Chapter 2:** Discusses electrical circuit analysis using basic laws.
    *   **Kuo & Golnaraghi, 10th Ed., Chapter 2:** Similar coverage of circuit elements.

*   **Inductor (L):**
    *   **Definition:** A component that stores energy in a magnetic field and opposes changes in current.
    *   **Relationship:** $V(t) = L \frac{dI(t)}{dt}$
        *   $V(t)$: Voltage across the inductor at time $t$.
        *   $I(t)$: Current through the inductor at time $t$.
        *   $L$: Inductance (Henries, H).
    *   **Laplace Domain (assuming zero initial conditions):** $V(s) = sL \cdot I(s)$
    *   **Important Point:** The inductor's voltage is proportional to the *rate of change* of current. This introduces a derivative term.

*   **Capacitor (C):**
    *   **Definition:** A component that stores energy in an electric field and opposes changes in voltage.
    *   **Relationship:** $I(t) = C \frac{dV(t)}{dt}$ (Alternatively, $V(t) = \frac{1}{C} \int I(t) dt$)
        *   $I(t)$: Current through the capacitor at time $t$.
        *   $V(t)$: Voltage across the capacitor at time $t$.
        *   $C$: Capacitance (Farads, F).
    *   **Laplace Domain (assuming zero initial conditions):** $I(s) = sC \cdot V(s)$  or $V(s) = \frac{1}{sC} \cdot I(s)$
    *   **Important Point:** The capacitor's current is proportional to the *rate of change* of voltage. This also introduces a derivative term, or an integral term if expressing voltage in terms of current.

#### 2.2 Applying Kirchhoff's Laws for Modelling

*   **Kirchhoff's Voltage Law (KVL):** The sum of voltages around any closed loop in a circuit is zero.
    *   $\sum V_{loop} = 0$
*   **Kirchhoff's Current Law (KCL):** The sum of currents entering a node is equal to the sum of currents leaving the node.
    *   $\sum I_{in} = \sum I_{out}$

#### 2.3 Modelling an Electrical System: Example (RLC Series Circuit)

Let's model a simple RLC series circuit with a voltage source $V_{in}(t)$ as input and the voltage across the capacitor $V_C(t)$ as output.

*   **Circuit Diagram:** (Imagine a series connection of R, L, C with $V_{in}(t)$ connected across them.)
*   **Applying KVL:** $V_{in}(t) = V_R(t) + V_L(t) + V_C(t)$
*   **Substituting component relationships:**
    $V_{in}(t) = R \cdot I(t) + L \frac{dI(t)}{dt} + V_C(t)$
*   **Relating current to capacitor voltage:** We know $I(t) = C \frac{dV_C(t)}{dt}$. Substitute this into the equation:
    $V_{in}(t) = R \left( C \frac{dV_C(t)}{dt} \right) + L \frac{d}{dt} \left( C \frac{dV_C(t)}{dt} \right) + V_C(t)$
    $V_{in}(t) = RC \frac{dV_C(t)}{dt} + LC \frac{d^2V_C(t)}{dt^2} + V_C(t)$
*   **Standard Form (Second-order linear differential equation):**
    $LC \frac{d^2V_C(t)}{dt^2} + RC \frac{dV_C(t)}{dt} + V_C(t) = V_{in}(t)$
*   **Laplace Domain Model (assuming zero initial conditions):**
    $LC s^2 V_C(s) + RC s V_C(s) + V_C(s) = V_{in}(s)$
    $V_C(s) (LC s^2 + RC s + 1) = V_{in}(s)$
*   **Transfer Function (Output/Input):**
    $G(s) = \frac{V_C(s)}{V_{in}(s)} = \frac{1}{LC s^2 + RC s + 1}$

This transfer function represents the system's input-output relationship. It's a key step towards achieving CO1.

---

### 3. Mathematical Modelling of Mechanical Translational Systems

Mechanical systems involve forces, velocities, and displacements. We model them using Newton's laws and the characteristics of mechanical components.

#### 3.1 Basic Mechanical Components and their Mathematical Relationships

*   **Mass (M):**
    *   **Definition:** Represents inertia; resists acceleration.
    *   **Relationship:** Newton's Second Law: $F(t) = M \cdot a(t)$
        *   $F(t)$: Net force acting on the mass at time $t$.
        *   $a(t)$: Acceleration of the mass at time $t$.
        *   $M$: Mass (kilograms, kg).
    *   **In terms of velocity and displacement:** Since $a(t) = \frac{dv(t)}{dt}$ and $v(t) = \frac{dx(t)}{dt}$:
        $F(t) = M \frac{dv(t)}{dt} = M \frac{d^2x(t)}{dt^2}$
        *   $v(t)$: Velocity of the mass at time $t$.
        *   $x(t)$: Displacement of the mass from equilibrium at time $t$.
    *   **Laplace Domain (assuming zero initial conditions):** $F(s) = Ms \cdot V(s) = Ms^2 \cdot X(s)$
    *   **Important Point:** The force required is proportional to acceleration (or displacement in the Laplace domain, multiplied by $s^2$).

*   **Spring (K):**
    *   **Definition:** Stores potential energy when deformed; provides a restoring force proportional to displacement.
    *   **Relationship:** Hooke's Law: $F(t) = K \cdot x(t)$
        *   $F(t)$: Restoring force exerted by the spring at time $t$.
        *   $x(t)$: Displacement of the mass from the spring's equilibrium position at time $t$.
        *   $K$: Spring stiffness (Newtons per meter, N/m).
    *   **Laplace Domain (assuming zero initial conditions):** $F(s) = K \cdot X(s)$
    *   **Important Point:** The force is proportional to displacement.

*   **Damper (B):**
    *   **Definition:** Dissipates energy, usually as heat, by friction; provides a force opposing motion, proportional to velocity.
    *   **Relationship:** $F(t) = B \cdot v(t)$
        *   $F(t)$: Damping force at time $t$.
        *   $v(t)$: Velocity of the mass at time $t$.
        *   $B$: Damping coefficient (Newton-seconds per meter, Ns/m).
    *   **Laplace Domain (assuming zero initial conditions):** $F(s) = B \cdot V(s) = B s \cdot X(s)$
    *   **Important Point:** The force is proportional to velocity. This term is analogous to resistance in electrical circuits.

#### 3.2 Free-Body Diagrams and Force Balance Equations

*   **Free-Body Diagram (FBD):** A diagram that isolates a component (like a mass) and shows all external forces acting on it.
*   **Force Balance Equation:** Apply Newton's Second Law to the FBD to sum all forces and equate them to $M \cdot a(t)$.
    *   $\sum F_{acting\_on\_mass} = M \cdot a(t)$

#### 3.3 Modelling a Mechanical System: Example (Mass-Spring-Damper System)

Let's model a system consisting of a mass $M$, a spring with stiffness $K$, and a damper with coefficient $B$, connected in series. Assume an external force $F_{in}(t)$ is applied to the mass, and we want to find the displacement $x(t)$ of the mass.

*   **System Description:** A block of mass $M$ is attached to a spring of stiffness $K$ and a damper of coefficient $B$. An external force $F_{in}(t)$ is applied to the mass. The other end of the spring and damper are fixed.
*   **Free-Body Diagram for Mass (M):**
    *   Applied Force: $F_{in}(t)$ (Assume it acts to the right)
    *   Spring Force: $F_K(t) = K \cdot x(t)$ (Acts to the left, opposing displacement)
    *   Damping Force: $F_B(t) = B \cdot v(t) = B \frac{dx(t)}{dt}$ (Acts to the left, opposing velocity)
*   **Force Balance Equation:** Sum of forces acting on the mass = Mass * Acceleration
    $F_{in}(t) - F_K(t) - F_B(t) = M \cdot a(t)$
    $F_{in}(t) - K x(t) - B \frac{dx(t)}{dt} = M \frac{d^2x(t)}{dt^2}$
*   **Standard Form (Second-order linear differential equation):**
    $M \frac{d^2x(t)}{dt^2} + B \frac{dx(t)}{dt} + K x(t) = F_{in}(t)$
*   **Laplace Domain Model (assuming zero initial conditions):**
    $M s^2 X(s) + B s X(s) + K X(s) = F_{in}(s)$
    $X(s) (M s^2 + B s + K) = F_{in}(s)$
*   **Transfer Function (Output/Input):**
    $G(s) = \frac{X(s)}{F_{in}(s)} = \frac{1}{M s^2 + B s + K}$

This transfer function again allows for analysis as per CO1.

---

### 4. Important Points to Remember

*   **Assumptions:** Mathematical models are based on assumptions (e.g., linearity, time-invariance, zero initial conditions for transfer functions). Be aware of these limitations.
*   **Analogies:** There are strong analogies between electrical and mechanical systems:
    *   Mass (M) $\leftrightarrow$ Inductor (L) (Inertia/Inductance)
    *   Damper (B) $\leftrightarrow$ Resistor (R) (Dissipation)
    *   Spring (K) $\leftrightarrow$ Reciprocal of Capacitance (1/C) (Energy Storage)
    *   Force (F) $\leftrightarrow$ Voltage (V) (Effort variable)
    *   Velocity (v) $\leftrightarrow$ Current (I) (Flow variable)
    These analogies are useful for understanding and translating between system types. (Nise, 8th Ed., Chapter 2 often highlights these).
*   **Transfer Function Derivation:** The core process involves applying physical laws, writing differential equations, and transforming them into the Laplace domain, assuming zero initial conditions.
*   **Output Selection:** The choice of the output variable ($V_C(t)$ in the electrical example, $x(t)$ in the mechanical example) determines the specific transfer function.
*   **Standard Forms:** Recognizing second-order systems in the form $as^2 + bs + c$ is crucial for later analysis (e.g., determining damping ratio and natural frequency).

---

### 5. Practice Questions and Exercises

**Question 1 (Electrical):**
Consider an electrical circuit with a voltage source $V_{in}(t)$ applied in series to a resistor $R$ and an inductor $L$. The output voltage is measured across the inductor, $V_L(t)$. Derive the transfer function $\frac{V_L(s)}{V_{in}(s)}$.

**Solution 1:**
1.  **KVL:** $V_{in}(t) = V_R(t) + V_L(t)$
2.  **Component Relationships:** $V_R(t) = R \cdot I(t)$ and $V_L(t) = L \frac{dI(t)}{dt}$
3.  **Substitute:** $V_{in}(t) = R \cdot I(t) + L \frac{dI(t)}{dt}$
4.  **Laplace Domain (zero initial conditions):** $V_{in}(s) = R \cdot I(s) + L s \cdot I(s)$
5.  **Solve for I(s):** $V_{in}(s) = I(s) (R + Ls)$  => $I(s) = \frac{V_{in}(s)}{R + Ls}$
6.  **Output Voltage:** $V_L(s) = Ls \cdot I(s)$
7.  **Substitute I(s):** $V_L(s) = Ls \cdot \frac{V_{in}(s)}{R + Ls}$
8.  **Transfer Function:** $\frac{V_L(s)}{V_{in}(s)} = \frac{Ls}{R + Ls} = \frac{s}{\frac{R}{L} + s}$

**Question 2 (Mechanical):**
A mass $M$ is attached to a spring $K$ and a damper $B$. An external force $F_{in}(t)$ is applied. The output is the velocity of the mass, $v(t)$. Derive the transfer function $\frac{V(s)}{F_{in}(s)}$.

**Solution 2:**
1.  **Force Balance:** $F_{in}(t) - K x(t) - B v(t) = M a(t)$
2.  **Substitute velocity and acceleration relationships:** $F_{in}(t) - K x(t) - B v(t) = M \frac{dv(t)}{dt}$
3.  **Laplace Domain (zero initial conditions):** $F_{in}(s) - K X(s) - B V(s) = M s V(s)$
4.  **Relate X(s) to V(s):** Since $V(s) = s X(s)$, then $X(s) = \frac{V(s)}{s}$
5.  **Substitute X(s):** $F_{in}(s) - K \frac{V(s)}{s} - B V(s) = M s V(s)$
6.  **Rearrange to solve for V(s):** $F_{in}(s) = M s V(s) + B V(s) + K \frac{V(s)}{s}$
7.  **Factor out V(s):** $F_{in}(s) = V(s) \left( Ms + B + \frac{K}{s} \right)$
8.  **Common Denominator:** $F_{in}(s) = V(s) \left( \frac{Ms^2 + Bs + K}{s} \right)$
9.  **Transfer Function:** $\frac{V(s)}{F_{in}(s)} = \frac{s}{Ms^2 + Bs + K}$

**Question 3 (Conceptual):**
Explain the role of the Laplace transform in obtaining transfer functions from differential equations.

**Answer 3:**
The Laplace transform converts linear ordinary differential equations with constant coefficients into algebraic equations in the 's' domain. This conversion simplifies the process of analyzing system dynamics. Specifically, differentiation in the time domain ($d/dt$) becomes multiplication by $s$ in the Laplace domain, and integration becomes division by $s$. This transforms the differential equation into an equation relating the Laplace transforms of the input and output signals, allowing for straightforward calculation of the transfer function (output/input ratio). This is fundamental to CO1.

---

### 6. Alignment with Course Outcomes

*   **CO1: Analyze the systems using transfer function approach:** This entire topic directly supports CO1 by teaching how to derive transfer functions for basic electrical and mechanical systems. Understanding these models is the first step in analyzing them.
*   **CO2: Perform time domain analysis and steady state analysis of systems:** While this topic focuses on modelling, the derived transfer functions are the basis for later time and steady-state analysis (e.g., finding step responses, steady-state errors).
*   **CO3, CO4, CO5:** These outcomes (stability, frequency domain, state-space) build upon the fundamental understanding of system modelling and transfer functions established here. Without accurate models, these advanced analyses are impossible.

---

This concludes the study notes for the mathematical modelling of electrical and mechanical translational systems. The foundational understanding gained here is critical for all subsequent topics in Control Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
