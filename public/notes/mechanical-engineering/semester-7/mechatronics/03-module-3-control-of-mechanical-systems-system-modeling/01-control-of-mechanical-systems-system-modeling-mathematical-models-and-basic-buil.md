---
title: "Control of mechanical systems : System modeling - Mathematical models and basic building blocks of general mechanical, electrical, fluid and thermal systems."
subject: "MECHATRONICS"
module: "Module 3: Control of mechanical systems : System modeling "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f16"
status: "completed"
scrapedAt: "2026-05-20T18:14:46.930Z"
---
# MECHATRONICS: Module 3 - Control of Mechanical Systems: System Modeling

## Topic: Mathematical Models and Basic Building Blocks of General Mechanical, Electrical, Fluid, and Thermal Systems

This module focuses on understanding how to represent the behavior of various physical systems using mathematical models. This is a fundamental step in designing and controlling mechatronic systems, as it allows us to predict, analyze, and optimize their performance.

---

### 1. Introduction to System Modeling

**Definition:** System modeling is the process of creating a mathematical representation of a real-world system. This model allows us to understand the relationships between inputs, outputs, and internal states of the system.

**Why Model Systems?**

*   **Prediction:** To forecast how the system will behave under different conditions.
*   **Analysis:** To understand the fundamental principles governing the system's operation.
*   **Design:** To select appropriate components and configurations for a desired performance.
*   **Control:** To design controllers that can achieve specific objectives (e.g., stability, speed, accuracy).
*   **Simulation:** To test and refine designs virtually before physical implementation, saving time and resources.

**Types of Models:**

*   **Physical Models:** Scaled-down or simplified physical replicas.
*   **Mathematical Models:** Equations and relationships describing system behavior. This is our primary focus in this module.

**Key Concepts:**

*   **System:** A collection of interconnected components that perform a specific function.
*   **Input:** An external signal or force applied to the system.
*   **Output:** The response of the system to an input.
*   **State Variables:** Internal variables that describe the condition of the system at any given time.
*   **Parameters:** Constants that define the specific characteristics of the system's components.
*   **Linearity vs. Non-linearity:** Whether the system's response is proportional to the input. Most initial models assume linearity for simplicity.
*   **Time-Invariance vs. Time-Variance:** Whether the system's parameters change over time.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Emphasizes the bridge between physical systems and their mathematical representation, often using differential equations. He introduces concepts of lumped parameter models.
*   **Onwubolu:** Focuses on the systematic approach to modeling, covering various domains and the importance of choosing the right modeling technique.
*   **Shetty & Kolk:** Provide a strong foundation in physical principles for modeling, particularly in mechanical and electrical domains, leading to mathematical formulations.
*   **Rajput:** Offers clear explanations of fundamental physical laws that underpin the modeling process.

---

### 2. Mathematical Models and Basic Building Blocks

We will explore the basic building blocks and their mathematical representations across different physical domains.

#### 2.1 Mechanical Systems

Mechanical systems involve components that exhibit inertia, damping, and stiffness.

**Basic Building Blocks:**

*   **Mass (m):** Represents inertia. Resists changes in motion.
    *   **Newton's Second Law:** $\sum F = m \cdot a$
    *   **Mathematical Representation:** In terms of velocity ($\nu$), $F = m \frac{d\nu}{dt}$. In terms of displacement ($x$), $F = m \frac{d^2x}{dt^2}$.
    *   **Force-Velocity Relationship:** Force is proportional to the *rate of change of velocity*.
    *   **Analogy:** Electrical Inductor.

*   **Damper (b):** Represents friction or viscous damping. Resists motion proportional to velocity.
    *   **Mathematical Representation:** $F = b \cdot \nu = b \frac{dx}{dt}$.
    *   **Force-Velocity Relationship:** Force is proportional to *velocity*.
    *   **Analogy:** Electrical Resistor.

*   **Spring (k):** Represents elasticity or stiffness. Stores potential energy. Resists displacement.
    *   **Mathematical Representation:** $F = k \cdot x$.
    *   **Force-Velocity Relationship:** Force is proportional to *displacement*.
    *   **Analogy:** Electrical Capacitor.

**Example:** A simple mass-spring-damper system (e.g., car suspension).

Let's consider a mass attached to a spring and a damper, with an applied force $f(t)$.
*   Mass ($m$)
*   Spring stiffness ($k$)
*   Damping coefficient ($b$)
*   Displacement from equilibrium ($x$)
*   Velocity ($\nu = \frac{dx}{dt}$)
*   Acceleration ($a = \frac{d\nu}{dt} = \frac{d^2x}{dt^2}$)

Applying Newton's Second Law:
$\sum F_{external} = m \cdot a$

Forces acting on the mass:
1.  Applied Force: $f(t)$
2.  Spring Force: $-k \cdot x$ (opposes displacement)
3.  Damping Force: $-b \cdot \nu$ (opposes velocity)

So, the equation of motion is:
$f(t) - kx - b\frac{dx}{dt} = m\frac{d^2x}{dt^2}$

Rearranging into a standard second-order linear differential equation:
$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = f(t)$

This is the **mathematical model** of the mass-spring-damper system.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Chapters on mechanical systems will detail these components and derive their equations of motion using Newton's laws.
*   **Shetty & Kolk:** Provides detailed derivation for rotational mechanical systems (mass moment of inertia, viscous damper, torsional spring) and translational systems.
*   **Rajput:** Covers fundamental mechanics, including forces, motion, and energy, laying the groundwork for deriving these models.

**Learning Outcome Alignment:** CO3 (Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour)

---

#### 2.2 Electrical Systems

Electrical systems involve components that store energy (capacitors, inductors) or dissipate energy (resistors).

**Basic Building Blocks:**

*   **Resistor (R):** Dissipates energy.
    *   **Ohm's Law:** $v = i \cdot R$
    *   **Voltage-Current Relationship:** Voltage is proportional to *current*.
    *   **Analogy:** Mechanical Damper.

*   **Capacitor (C):** Stores energy in an electric field.
    *   **Mathematical Representation:** $i = C \frac{dv}{dt}$ or $v = \frac{1}{C} \int i dt$.
    *   **Current-Voltage Relationship:** Current is proportional to the *rate of change of voltage*.
    *   **Analogy:** Mechanical Spring.

*   **Inductor (L):** Stores energy in a magnetic field.
    *   **Mathematical Representation:** $v = L \frac{di}{dt}$.
    *   **Voltage-Current Relationship:** Voltage is proportional to the *rate of change of current*.
    *   **Analogy:** Mechanical Mass.

**Example:** A simple RLC circuit with a voltage source $v_{in}(t)$.

Let's consider a series RLC circuit:
*   Resistor ($R$)
*   Capacitor ($C$)
*   Inductor ($L$)
*   Input Voltage ($v_{in}(t)$)
*   Current ($i(t)$)
*   Voltage across resistor ($v_R$)
*   Voltage across capacitor ($v_C$)
*   Voltage across inductor ($v_L$)

Applying Kirchhoff's Voltage Law (KVL) around the loop:
$\sum V_{loop} = 0$

$v_{in}(t) - v_R - v_C - v_L = 0$

Substituting the component relationships:
$v_{in}(t) - iR - v_C - L\frac{di}{dt} = 0$

To express this in terms of a single variable (e.g., current $i$), we know that $i = C \frac{dv_C}{dt}$, so $v_C = \frac{1}{C} \int i dt$.

The equation becomes:
$v_{in}(t) - iR - \frac{1}{C} \int i dt - L\frac{di}{dt} = 0$

To get a differential equation, we can differentiate the entire equation with respect to time:
$\frac{dv_{in}(t)}{dt} - R\frac{di}{dt} - \frac{1}{C} i - L\frac{d^2i}{dt^2} = 0$

Rearranging:
$L\frac{d^2i}{dt^2} + R\frac{di}{dt} + \frac{1}{C}i = \frac{dv_{in}(t)}{dt}$

This is the **mathematical model** of the RLC circuit.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Chapters on electrical systems will cover Ohm's law, capacitor and inductor behavior, and KVL/KCL.
*   **Shetty & Kolk:** Provides a thorough treatment of electrical circuit analysis, including modeling of common circuits.
*   **Rajput:** Covers basic electrical engineering principles, including circuit laws.

**Learning Outcome Alignment:** CO3 (Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour)

---

#### 2.3 Fluid Systems

Fluid systems involve flow and pressure. We'll consider simple linear approximations.

**Basic Building Blocks:**

*   **Hydraulic Fluid Inertia (Mass of fluid in motion):** Similar to mass in mechanical systems.
    *   **Resistance to acceleration.**
    *   **Mathematical Representation:** Often modeled using an "inertia coefficient" related to mass and geometry. For a fluid column of mass $m_f$ moving with velocity $v$, the kinetic energy is $\frac{1}{2} m_f v^2$. This relates to pressure change.

*   **Hydraulic Resistance (Pipe Friction/Orifice):** Resists fluid flow.
    *   **Mathematical Representation (Linearized):** $P = R_f \cdot Q$, where $P$ is pressure difference and $Q$ is flow rate. This is analogous to electrical resistance ($V=IR$).
    *   **Non-linear behavior:** For turbulent flow, resistance is often proportional to $Q^2$.

*   **Hydraulic Capacitance (Fluid compressibility/Tank volume):** Stores fluid volume under pressure.
    *   **Mathematical Representation:** $Q = C_f \frac{dP}{dt}$, where $Q$ is flow rate and $P$ is pressure. This is analogous to electrical capacitance ($i=C\frac{dv}{dt}$).
    *   **Example:** A reservoir or a flexible pipe.

**Example:** A simple hydraulic system with a pump supplying fluid to a cylinder with a piston and a load.

Consider a simple hydraulic actuator:
*   Hydraulic capacitance ($C_f$): Represents the flexibility of the fluid and cylinder.
*   Hydraulic resistance ($R_f$): Represents the flow restriction at the outlet or through a valve.
*   Input Flow Rate ($Q_{in}$)

Applying a continuity principle (conservation of mass):
Rate of change of fluid volume in the capacitance = Inflow - Outflow

$C_f \frac{dP}{dt} = Q_{in} - Q_{out}$

Assuming the outlet is connected to a resistance: $Q_{out} = \frac{P}{R_f}$

The model becomes:
$C_f \frac{dP}{dt} = Q_{in} - \frac{P}{R_f}$

Rearranging:
$C_f \frac{dP}{dt} + \frac{1}{R_f}P = Q_{in}$

This is a first-order linear differential equation representing the hydraulic system.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Chapters on fluid power systems will introduce these concepts and their mathematical treatment.
*   **Shetty & Kolk:** Discusses fluid mechanics relevant to mechatronics, including flow, pressure, and their relationships in hydraulic systems.
*   **Onwubolu:** May cover modeling of fluid power components and systems.

**Learning Outcome Alignment:** CO3 (Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour)

---

#### 2.4 Thermal Systems

Thermal systems involve heat transfer and temperature changes.

**Basic Building Blocks:**

*   **Thermal Mass (Heat Capacity, $C_t$):** Represents the ability of an object to store thermal energy.
    *   **Mathematical Representation:** $Q = C_t \Delta T$, where $Q$ is heat energy and $\Delta T$ is temperature change.
    *   **Rate of heat storage:** $\frac{dQ}{dt} = C_t \frac{dT}{dt}$.
    *   **Analogy:** Electrical Capacitor.

*   **Thermal Resistance ($R_t$):** Represents the opposition to heat flow.
    *   **Mathematical Representation:** $\Delta T = R_t \cdot q$, where $\Delta T$ is temperature difference and $q$ is the rate of heat flow (heat transfer rate). This is analogous to electrical resistance ($V=IR$).
    *   **Heat transfer mechanisms:** Conduction, convection, radiation. Linearized models often use constant thermal resistance.

*   **Thermal Inertia (often related to convection/radiation coefficients):** While not a direct mass, it relates to how quickly the system responds to temperature changes due to heat transfer. For simplicity, it's often absorbed into the resistance or capacitance terms in lumped models.

**Example:** A simple thermal system of a heated object in an environment.

Consider an object with thermal mass $C_t$ and thermal resistance $R_t$ to its surroundings, with an external heat source $q_{in}(t)$. Let $T(t)$ be the object's temperature and $T_{amb}$ be the ambient temperature.

The rate of change of heat energy stored in the object is equal to the heat input from the source minus the heat loss to the environment.

Heat loss to the environment ($q_{loss}$):
Assuming Newton's Law of Cooling (linearized): $q_{loss} = \frac{T - T_{amb}}{R_t}$

The rate of change of heat stored:
$\frac{dQ}{dt} = q_{in}(t) - q_{loss}$

Since $Q = C_t T$, we have $\frac{dQ}{dt} = C_t \frac{dT}{dt}$:

$C_t \frac{dT}{dt} = q_{in}(t) - \frac{T - T_{amb}}{R_t}$

Rearranging:
$C_t \frac{dT}{dt} + \frac{1}{R_t}T = q_{in}(t) + \frac{T_{amb}}{R_t}$

This first-order linear differential equation models the temperature of the object.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Chapters on thermal systems and heat transfer will explain these concepts.
*   **Onwubolu:** May cover modeling of thermal aspects in mechatronic systems.

**Learning Outcome Alignment:** CO3 (Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour)

---

### 3. System Interconnections and Block Diagrams

Mechatronic systems are often composed of elements from different domains. To model them, we need to represent these interconnections.

**Block Diagrams:**

*   **Purpose:** A graphical representation of a system's mathematical model, showing the relationships between different components and signals.
*   **Components:**
    *   **Blocks:** Represent system elements (e.g., a mass, a motor, a controller) and are labeled with their transfer functions or differential equations.
    *   **Arrows:** Represent signals (e.g., force, voltage, temperature).
    *   **Summing Junctions:** Indicate where signals are added or subtracted.
    *   **Take-off Points:** Allow a signal to be routed to multiple destinations.

**Transfer Functions:**

*   **Definition:** The ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
    *   $G(s) = \frac{Y(s)}{U(s)}$
*   **Laplace Transform:** A mathematical tool used to convert differential equations into algebraic equations in the 's' domain, simplifying analysis.
    *   $\mathcal{L}\{\frac{dx}{dt}\} = sX(s) - x(0)$
    *   $\mathcal{L}\{\frac{d^2x}{dt^2}\} = s^2X(s) - sx(0) - x'(0)$
    *   $\mathcal{L}\{x(t)\} = X(s)$

**Example:** Modeling a simple electro-mechanical system.

Consider a DC motor driving a mechanical load.
*   **Electrical Part:** $v(t) = R i(t) + L \frac{di(t)}{dt} + v_b(t)$, where $v_b(t) = K_b \omega(t)$ is the back EMF.
*   **Mechanical Part:** $T_m(t) = J \frac{d\omega(t)}{dt} + b \omega(t)$, where $T_m(t) = K_t i(t)$ is the motor torque.

Taking Laplace transforms (assuming zero initial conditions):
*   Electrical: $V(s) = RI(s) + LsI(s) + K_b \Omega(s)$
*   Mechanical: $T_m(s) = Js\Omega(s) + b\Omega(s)$

Substitute $T_m(s)$:
$K_t I(s) = (Js + b)\Omega(s)$
$I(s) = \frac{Js+b}{K_t}\Omega(s)$

Substitute $I(s)$ into the electrical equation:
$V(s) = R \left(\frac{Js+b}{K_t}\Omega(s)\right) + Ls \left(\frac{Js+b}{K_t}\Omega(s)\right) + K_b \Omega(s)$

Factor out $\Omega(s)$:
$V(s) = \left[ \frac{R(Js+b)}{K_t} + \frac{Ls(Js+b)}{K_t} + K_b \right] \Omega(s)$

The **transfer function** from voltage input to angular velocity output is:
$G(s) = \frac{\Omega(s)}{V(s)} = \frac{1}{\frac{Ls(Js+b)}{K_t} + \frac{R(Js+b)}{K_t} + K_b}$

$G(s) = \frac{K_t}{Ls(Js+b) + R(Js+b) + K_b K_t}$
$G(s) = \frac{K_t}{Js^2L + Lsb + RJs + Rb + K_b K_t}$
$G(s) = \frac{K_t}{JLs^2 + (Lb+RJ)s + (Rb+K_b K_t)}$

This transfer function represents the dynamic relationship between the motor's input voltage and its angular velocity.

A block diagram for this could show:
*   Input: $V(s)$
*   Block 1: $(R+Ls)$ in series with $I(s)$.
*   Feedback from $\Omega(s)$ to $(R+Ls)$ via $K_b$.
*   Output of $(R+Ls+K_b)$ is multiplied by $K_t$ to get torque.
*   Torque drives mechanical system $(Js+b)$, outputting $\Omega(s)$.

**Referencing Textbooks:**

*   **Bolton (7th Ed.):** Chapter on system modeling and transfer functions will cover this.
*   **Onwubolu:** Emphasizes graphical methods like block diagrams for system representation and analysis.
*   **Shetty & Kolk:** Provides detailed examples of modeling complex mechatronic systems using block diagrams and transfer functions.

**Learning Outcome Alignment:** CO3 (Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour)

---

### 4. Important Points to Remember

*   **Linearization:** Many real-world systems are non-linear. For analysis and control design, we often linearize these systems around an operating point.
*   **Lumped Parameter Model:** We assume system properties (mass, resistance, capacitance) are concentrated at specific points rather than distributed. This simplifies the models into differential equations.
*   **Analogy:** Understanding analogies between different domains (e.g., mechanical-electrical) can help in conceptualizing and modeling.
    *   Mass $\leftrightarrow$ Inductor
    *   Damper $\leftrightarrow$ Resistor
    *   Spring $\leftrightarrow$ Capacitor
*   **Units:** Consistent use of SI units is crucial for accurate modeling and calculations.
*   **Assumptions:** Always state the assumptions made during the modeling process (e.g., linearity, no friction, ideal components).
*   **Model Validation:** Mathematical models are simplifications. Their validity needs to be checked against experimental data or simulations.

---

### 5. Practice Questions

**Question 1 (Mechanical System):**
A simple vehicle suspension system can be modeled as a mass ($m=1000$ kg) attached to a spring ($k=20000$ N/m) and a damper ($b=1000$ Ns/m). If the vehicle encounters a step disturbance (e.g., a bump) represented by a force $f(t) = 5000$ N, write down the differential equation of motion.

**Question 2 (Electrical System):**
For a series RC circuit with a voltage source $v_{in}(t)$, resistor $R$, and capacitor $C$, write the differential equation describing the voltage across the capacitor, $v_C(t)$.

**Question 3 (System Interconnection):**
A sensor has a first-order dynamic response characterized by a time constant $\tau$. Its transfer function is $G_{sensor}(s) = \frac{1}{\tau s + 1}$. If the true input is a step function $u(t) = A u_s(t)$ (where $u_s(t)$ is the unit step function), and the sensor output is $y(t)$. What is the Laplace transform of the sensor output $Y(s)$?

---

### 6. Answers to Practice Questions

**Answer 1:**
The differential equation of motion for a mass-spring-damper system is:
$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = f(t)$

Substituting the given values:
$1000\frac{d^2x}{dt^2} + 1000\frac{dx}{dt} + 20000x = 5000$

**Answer 2:**
Using Kirchhoff's Voltage Law: $v_{in}(t) = v_R(t) + v_C(t)$.
We know $v_R(t) = i(t)R$ and $i(t) = C \frac{dv_C(t)}{dt}$.
Substituting $i(t)$: $v_R(t) = C R \frac{dv_C(t)}{dt}$.

So, $v_{in}(t) = C R \frac{dv_C(t)}{dt} + v_C(t)$.

The differential equation is:
$CR \frac{dv_C(t)}{dt} + v_C(t) = v_{in}(t)$

**Answer 3:**
The input is a step function $u(t) = A u_s(t)$.
The Laplace transform of the input is $U(s) = \mathcal{L}\{A u_s(t)\} = \frac{A}{s}$.

The transfer function of the sensor is $G_{sensor}(s) = \frac{Y(s)}{U(s)} = \frac{1}{\tau s + 1}$.

To find the Laplace transform of the output $Y(s)$, we use the relationship: $Y(s) = G_{sensor}(s) \cdot U(s)$.

$Y(s) = \left(\frac{1}{\tau s + 1}\right) \cdot \left(\frac{A}{s}\right)$
$Y(s) = \frac{A}{s(\tau s + 1)}$

---

### 7. Course Outcome Alignment Summary

*   **CO3 (K2):** This entire module directly addresses CO3 by introducing the fundamental concepts and techniques for modeling mechanical, electrical, fluid, and thermal systems. The examples and practice questions reinforce the ability to derive mathematical models and predict system behavior.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
