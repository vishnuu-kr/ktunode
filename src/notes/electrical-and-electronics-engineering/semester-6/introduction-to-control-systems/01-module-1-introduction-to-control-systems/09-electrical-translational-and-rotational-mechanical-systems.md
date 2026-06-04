---
title: "Electrical, translational and rotational mechanical systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b3"
status: "completed"
scrapedAt: "2026-05-23T16:29:17.467Z"
---
# Introduction to Control Systems - Module 1: Introduction to Control Systems
## Topic: Electrical, Translational and Rotational Mechanical Systems

### Introduction

Control systems are fundamental to modern engineering and technology, enabling us to regulate and automate various processes. This module introduces the basic building blocks of control systems by examining how electrical and mechanical systems can be modeled and represented mathematically. Understanding these fundamental representations is crucial for analyzing system behavior and designing effective controllers.

**Course Outcomes Addressed:**

*   **CO1 (K2):** To represent continuous time systems in the classical domain.
*   **CO5 (K2):** To represent continuous time systems in the classical domain. (Note: CO1 and CO5 are identical, implying a strong emphasis on representation.)

**Learning Outcomes Covered:**

*   Understanding the fundamental components and principles of electrical, translational, and rotational mechanical systems.
*   Developing mathematical models (equations of motion) for these systems.
*   Representing these systems using block diagrams and transfer functions (which will be elaborated in subsequent modules).

---

### 1. Electrical Systems

Electrical systems are composed of basic passive and active components that interact through electrical energy.

#### 1.1 Basic Electrical Components

*   **Resistor (R):** Opposes the flow of current.
    *   **Relationship:** Ohm's Law: $v(t) = i(t)R$
    *   **Energy:** Dissipates energy as heat.
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Capacitor (C):** Stores electrical energy in an electric field.
    *   **Relationship:** $i(t) = C \frac{dv(t)}{dt}$  or  $v(t) = \frac{1}{C} \int i(t) dt$
    *   **Energy:** Stores energy electrostatically.
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Inductor (L):** Stores electrical energy in a magnetic field.
    *   **Relationship:** $v(t) = L \frac{di(t)}{dt}$
    *   **Energy:** Stores energy electromagnetically.
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

#### 1.2 Modeling Electrical Systems: Kirchhoff's Laws

The behavior of electrical circuits is governed by Kirchhoff's laws:

*   **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering a node (or point) is zero.
    *   $\sum_{k=1}^{n} i_k(t) = 0$
*   **Kirchhoff's Voltage Law (KVL):** The algebraic sum of voltages around any closed path (or loop) in a circuit is zero.
    *   $\sum_{k=1}^{n} v_k(t) = 0$

#### 1.3 Example: Series RLC Circuit

Consider a series circuit with a resistor (R), inductor (L), and capacitor (C) connected to a voltage source $e(t)$.

*   **Applying KVL:**
    $e(t) = v_R(t) + v_L(t) + v_C(t)$
    $e(t) = i(t)R + L \frac{di(t)}{dt} + \frac{1}{C} \int i(t) dt$

*   **Relationship to Capacitor Voltage:** If we want to express the equation in terms of capacitor voltage $v_C(t)$, we can use the relationship $i(t) = C \frac{dv_C(t)}{dt}$. Substituting this into the KVL equation:
    $e(t) = RC \frac{dv_C(t)}{dt} + LC \frac{d^2v_C(t)}{dt^2} + v_C(t)$
    Rearranging gives the standard second-order differential equation:
    $LC \frac{d^2v_C(t)}{dt^2} + RC \frac{dv_C(t)}{dt} + v_C(t) = e(t)$

*   **Key takeaway:** This equation relates the input voltage $e(t)$ to the output voltage across the capacitor $v_C(t)$, forming a mathematical model of the system.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2)*

#### 1.4 Example: Parallel RLC Circuit

Consider a parallel circuit with a resistor (R), inductor (L), and capacitor (C) connected to a current source $i(t)$.

*   **Applying KCL at the top node:**
    $i(t) = i_R(t) + i_L(t) + i_C(t)$
    $i(t) = \frac{v(t)}{R} + \frac{1}{L} \int v(t) dt + C \frac{dv(t)}{dt}$
    where $v(t)$ is the voltage across the parallel branches.

*   **Key takeaway:** This equation relates the input current $i(t)$ to the output voltage $v(t)$.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

---

### 2. Translational Mechanical Systems

Translational mechanical systems involve motion along a straight line. They are characterized by forces, velocities, and displacements.

#### 2.1 Basic Mechanical Components

*   **Mass (m):** Represents inertia. It resists acceleration.
    *   **Newton's Second Law:** $f(t) = m \frac{d^2x(t)}{dt^2} = m a(t)$
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Spring (K):** Stores potential energy. It exerts a force proportional to its displacement (or compression/extension).
    *   **Force-Displacement Relationship:** $f(t) = Kx(t)$ (where x(t) is displacement from equilibrium)
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Damper (B):** Represents friction or viscous damping. It exerts a force proportional to its velocity, dissipating energy.
    *   **Force-Velocity Relationship:** $f(t) = B \frac{dx(t)}{dt} = Bv(t)$
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

#### 2.2 Modeling Translational Systems: Force Equilibrium

The motion of translational mechanical systems can be modeled by applying Newton's Second Law in conjunction with force equilibrium. For each moving mass, the sum of forces acting on it is equal to the mass times its acceleration.

*   **Procedure:**
    1.  Identify all moving masses.
    2.  For each mass, draw a Free Body Diagram (FBD) showing all forces acting on it.
    3.  Apply Newton's Second Law: $\sum F = ma$.
    4.  Express forces due to springs and dampers in terms of displacements and velocities.

#### 2.3 Example: Mass-Spring-Damper System

Consider a system with a mass 'm', a spring with stiffness 'K', and a damper with damping coefficient 'B', subjected to an input force $f(t)$. Let $x(t)$ be the displacement of the mass from its equilibrium position.

*   **Forces acting on the mass:**
    *   Input force: $f(t)$
    *   Spring force: $Kx(t)$ (opposes displacement)
    *   Damping force: $B\frac{dx(t)}{dt}$ (opposes velocity)

*   **Applying Newton's Second Law:**
    $m \frac{d^2x(t)}{dt^2} = f(t) - Kx(t) - B\frac{dx(t)}{dt}$

*   **Rearranging to the standard form:**
    $m \frac{d^2x(t)}{dt^2} + B\frac{dx(t)}{dt} + Kx(t) = f(t)$

*   **Key takeaway:** This equation represents the dynamic behavior of the mass-spring-damper system, relating the input force to the output displacement.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2), Ogata (5th Ed, Ch 2)*

#### 2.4 Example: Two Masses with Interconnecting Spring and Damper

Consider two masses $m_1$ and $m_2$, with displacements $x_1(t)$ and $x_2(t)$ respectively. They are connected by a spring of stiffness $K$ and a damper of coefficient $B$. Assume external forces $f_1(t)$ and $f_2(t)$ act on $m_1$ and $m_2$.

*   **Free Body Diagram for $m_1$:**
    *   Forces: $f_1(t)$, Force from spring ($K(x_1 - x_2)$), Force from damper ($B(\frac{dx_1}{dt} - \frac{dx_2}{dt})$)
    *   Equation of motion for $m_1$:
        $m_1 \frac{d^2x_1(t)}{dt^2} = f_1(t) - K(x_1(t) - x_2(t)) - B(\frac{dx_1(t)}{dt} - \frac{dx_2(t)}{dt})$

*   **Free Body Diagram for $m_2$:**
    *   Forces: $f_2(t)$, Force from spring ($-K(x_1 - x_2)$), Force from damper ($-B(\frac{dx_1}{dt} - \frac{dx_2}{dt})$)
    *   Equation of motion for $m_2$:
        $m_2 \frac{d^2x_2(t)}{dt^2} = f_2(t) + K(x_1(t) - x_2(t)) + B(\frac{dx_1(t)}{dt} - \frac{dx_2(t)}{dt})$

*   **Key takeaway:** This system is represented by a set of coupled differential equations, indicating interaction between the motions of the two masses.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Ogata (5th Ed, Ch 2)*

---

### 3. Rotational Mechanical Systems

Rotational mechanical systems involve motion around an axis. They are characterized by torques, angular velocities, and angular displacements.

#### 3.1 Basic Rotational Components

*   **Moment of Inertia (J):** Represents rotational inertia. It resists angular acceleration.
    *   **Newton's Second Law for Rotation:** $T(t) = J \frac{d^2\theta(t)}{dt^2} = J \alpha(t)$
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Torsional Spring (K):** Stores potential energy in a twisted shaft. It exerts a torque proportional to its angular displacement.
    *   **Torque-Angular Displacement Relationship:** $T(t) = K\theta(t)$ (where $\theta(t)$ is angular displacement from equilibrium)
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

*   **Rotational Damper (B):** Represents viscous damping in rotational motion. It exerts a torque proportional to its angular velocity, dissipating energy.
    *   **Torque-Angular Velocity Relationship:** $T(t) = B \frac{d\theta(t)}{dt} = B\omega(t)$
    *   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2)*

#### 3.2 Modeling Rotational Systems: Torque Equilibrium

The motion of rotational mechanical systems is modeled by applying Newton's Second Law for rotation in conjunction with torque equilibrium. For each rotating body, the sum of torques acting on it is equal to its moment of inertia times its angular acceleration.

*   **Procedure:**
    1.  Identify all rotating bodies with inertia.
    2.  For each body, draw a Free Body Diagram (FBD) showing all torques acting on it.
    3.  Apply Newton's Second Law for Rotation: $\sum T = J \alpha$.
    4.  Express torques due to torsional springs and dampers in terms of angular displacements and velocities.

#### 3.3 Example: Rotational Mass-Damper-Spring System

Consider a system with a moment of inertia 'J', a torsional spring with stiffness 'K', and a rotational damper with coefficient 'B', subjected to an input torque $T(t)$. Let $\theta(t)$ be the angular displacement of the rotating body from its equilibrium position.

*   **Torques acting on the rotating body:**
    *   Input torque: $T(t)$
    *   Spring torque: $K\theta(t)$ (opposes displacement)
    *   Damping torque: $B\frac{d\theta(t)}{dt}$ (opposes angular velocity)

*   **Applying Newton's Second Law for Rotation:**
    $J \frac{d^2\theta(t)}{dt^2} = T(t) - K\theta(t) - B\frac{d\theta(t)}{dt}$

*   **Rearranging to the standard form:**
    $J \frac{d^2\theta(t)}{dt^2} + B\frac{d\theta(t)}{dt} + K\theta(t) = T(t)$

*   **Key takeaway:** This equation represents the dynamic behavior of the rotational system, relating the input torque to the output angular displacement.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2), Ogata (5th Ed, Ch 2)*

#### 3.4 Example: Rotational System with Gear Train

Gear trains are used to transmit rotational motion and modify torque and speed. The relationship between angular velocities and torques of meshed gears is important.

*   **Consider two meshing gears:**
    *   Gear 1: Radius $r_1$, Moment of inertia $J_1$, Angular velocity $\omega_1$.
    *   Gear 2: Radius $r_2$, Moment of inertia $J_2$, Angular velocity $\omega_2$.
    *   Gear ratio: $N_1/N_2 = r_2/r_1$ (where $N_1, N_2$ are number of teeth).
    *   At the point of contact: $r_1 \omega_1 = r_2 \omega_2$ (tangential velocities are equal).
    *   Therefore, $\omega_2 = \frac{r_1}{r_2} \omega_1 = \frac{N_1}{N_2} \omega_1$.
    *   Torque relationship: $T_1 r_1 = T_2 r_2 \implies T_2 = \frac{r_1}{r_2} T_1 = \frac{N_1}{N_2} T_1$.

*   **Modeling with Inertia and Torque:**
    If a torque $T_1$ is applied to gear 1, and gear 2 is connected to a load (e.g., a damper $B_2$), the equation for gear 2 would be:
    $J_2 \frac{d\omega_2(t)}{dt} + B_2 \omega_2(t) = T_2(t)$
    Substituting the gear ratio relations:
    $J_2 \frac{d}{dt}\left(\frac{N_1}{N_2} \omega_1(t)\right) + B_2 \left(\frac{N_1}{N_2} \omega_1(t)\right) = \frac{N_1}{N_2} T_1(t)$
    This can be simplified to a form relating $T_1$ and $\omega_1$.

*   **Referencing the load to the motor side:** Often, we "reflect" the inertia and damping of the load back to the motor side.
    *   Inertia reflected to motor side: $J_{2,reflected} = J_2 \left(\frac{N_2}{N_1}\right)^2$
    *   Damping reflected to motor side: $B_{2,reflected} = B_2 \left(\frac{N_2}{N_1}\right)^2$
    *   Torque reflected to motor side: $T_{2,reflected} = T_2 \left(\frac{N_2}{N_1}\right)$
    The equation for the motor shaft becomes: $J_1 \frac{d\omega_1}{dt} + B_1 \omega_1 + J_{2,reflected} \frac{d\omega_1}{dt} + B_{2,reflected} \omega_1 = T_1$ (assuming $B_1$ damping on motor shaft)

*   **Key takeaway:** Gear trains introduce transformation ratios for speed, torque, inertia, and damping, which are essential for accurate system modeling.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Ogata (5th Ed, Ch 2)*

---

### 4. Analogies between Electrical and Mechanical Systems

There are striking analogies between electrical, translational mechanical, and rotational mechanical systems. These analogies help in understanding and designing control systems for different physical domains using similar mathematical tools.

#### 4.1 Force-Voltage Analogy (Impedance Analogy)

This analogy is based on equating forces in mechanical systems to voltages in electrical systems.

| Mechanical (Translational) | Electrical (Series) | Mechanical (Rotational) |
| :------------------------ | :------------------ | :---------------------- |
| Force ($f$)               | Voltage ($v$)       | Torque ($T$)            |
| Velocity ($v$ or $dx/dt$) | Current ($i$)       | Angular Velocity ($\omega$ or $d\theta/dt$) |
| Mass ($m$)                | Inductor ($L$)      | Moment of Inertia ($J$) |
| Damper ($B$)              | Resistor ($R$)      | Rotational Damper ($B$) |
| Spring ($K$)              | $1/C$               | Torsional Spring ($K$)  |
| Displacement ($x$)        | $\int i dt$         | Angular Displacement ($\theta$) |
| Impedance ($ms + B + K/s$) | Impedance ($Ls + R + 1/(Cs)$) | Impedance ($Js + B + K/s$) |

*   **Observation:** The structure of the impedance of the analogous components is the same. For example, the series RLC circuit impedance ($Ls + R + 1/(Cs)$) is analogous to the mechanical impedance of a mass-damper-spring system ($ms + B + K/s$).

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2)*

#### 4.2 Force-Current Analogy (Mobility Analogy)

This analogy is based on equating forces in mechanical systems to currents in electrical systems.

| Mechanical (Translational) | Electrical (Parallel) | Mechanical (Rotational) |
| :------------------------ | :-------------------- | :---------------------- |
| Force ($f$)               | Current ($i$)         | Torque ($T$)            |
| Velocity ($v$ or $dx/dt$) | Voltage ($v$)         | Angular Velocity ($\omega$ or $d\theta/dt$) |
| Mass ($m$)                | $1/L$ (or $C$ if $\nu = i/C$) | Moment of Inertia ($J$) |
| Damper ($B$)              | Conductance ($1/R$ or $G$) | Rotational Damper ($B$) |
| Spring ($K$)              | $C$ (or $1/L$ if $\nu = i/L$) | Torsional Spring ($K$)  |
| Displacement ($x$)        | $\int v dt$           | Angular Displacement ($\theta$) |
| Mobility ($1/(ms + B + K/s)$) | Mobility ($1/(Ls + R + 1/(Cs))$) | Mobility ($1/(Js + B + K/s)$) |

*   **Observation:** This analogy maps the series electrical circuit elements to parallel mechanical elements and vice-versa. It is useful for modeling systems where force is the input and velocity is the output.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2)*

---

### 5. Block Diagrams and Transfer Functions (Introduction)

While this module focuses on deriving the equations of motion, the ultimate goal in control systems is to represent these systems using block diagrams and transfer functions for analysis and design.

*   **Block Diagram:** A graphical representation of the system's components and their interconnections. It shows the flow of signals.
*   **Transfer Function:** The ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
    *   For a linear time-invariant (LTI) system, $G(s) = \frac{Y(s)}{X(s)}$, where $Y(s)$ is the Laplace transform of the output $y(t)$ and $X(s)$ is the Laplace transform of the input $x(t)$.

*   **Example: Mass-Damper-Spring System:**
    $m \frac{d^2x(t)}{dt^2} + B\frac{dx(t)}{dt} + Kx(t) = f(t)$
    Taking the Laplace transform (assuming zero initial conditions):
    $ms^2X(s) + BsX(s) + KX(s) = F(s)$
    $X(s)(ms^2 + Bs + K) = F(s)$
    Transfer Function: $G(s) = \frac{X(s)}{F(s)} = \frac{1}{ms^2 + Bs + K}$

*   **Key takeaway:** The derived differential equations are converted into algebraic equations in the Laplace domain, allowing for the representation of systems as transfer functions, which are essential for control system analysis and design.

*   *Referenced in: Nise (5th Ed, Ch 2), Nagrath & Gopal (5th Ed, Ch 2), Kuo (9th Ed, Ch 2), Dorf & Bishop (12th Ed, Ch 2), Ogata (5th Ed, Ch 2)*

---

### Important Points to Remember

*   **Newton's Second Law** for translational motion ($ \sum F = ma $) and rotational motion ($ \sum T = J \alpha $) are the foundational principles for mechanical systems.
*   **Kirchhoff's Laws** (KCL and KVL) are the foundational principles for electrical systems.
*   **Damping** (resistors, dampers) dissipates energy.
*   **Inertia** (inductors, masses, moments of inertia) stores energy and resists changes in motion.
*   **Storage Elements** (capacitors, springs, inductors, masses) store energy.
*   The analogies between electrical and mechanical systems (force-voltage and force-current) are powerful tools for understanding and modeling.
*   The goal is to derive a mathematical model (differential equation) relating input and output, which can then be converted to a transfer function.

---

### Practice Questions

**Question 1:**
A translational mechanical system consists of a mass $m$, a damper $B$, and a spring $K$ connected in series. An external force $f(t)$ is applied to the mass. Derive the differential equation of motion for the system. If $m = 2$ kg, $B = 4$ Ns/m, and $K = 8$ N/m, find the transfer function relating the displacement $x(t)$ to the force $f(t)$.

**Answer 1:**
The differential equation of motion is:
$m \frac{d^2x(t)}{dt^2} + B\frac{dx(t)}{dt} + Kx(t) = f(t)$

For the given values:
$2 \frac{d^2x(t)}{dt^2} + 4\frac{dx(t)}{dt} + 8x(t) = f(t)$

Taking the Laplace transform (with zero initial conditions):
$2s^2X(s) + 4sX(s) + 8X(s) = F(s)$
$X(s)(2s^2 + 4s + 8) = F(s)$

The transfer function is:
$G(s) = \frac{X(s)}{F(s)} = \frac{1}{2s^2 + 4s + 8} = \frac{1}{2(s^2 + 2s + 4)}$

**Question 2:**
A rotational mechanical system consists of a moment of inertia $J$, a rotational damper $B$, and a torsional spring $K$. An input torque $T(t)$ is applied. Derive the differential equation relating the angular displacement $\theta(t)$ to the torque $T(t)$.

**Answer 2:**
The differential equation of motion is:
$J \frac{d^2\theta(t)}{dt^2} + B\frac{d\theta(t)}{dt} + K\theta(t) = T(t)$

**Question 3:**
Consider a simple electrical circuit consisting of a resistor $R$ and a capacitor $C$ in series, connected to a voltage source $e(t)$. The output voltage is measured across the capacitor, $v_c(t)$. Derive the differential equation relating $v_c(t)$ to $e(t)$. Find the transfer function $G(s) = V_c(s)/E(s)$.

**Answer 3:**
Using KVL: $e(t) = v_R(t) + v_c(t)$
We know $v_R(t) = i(t)R$. Also, $i(t) = C \frac{dv_c(t)}{dt}$.
So, $e(t) = RC \frac{dv_c(t)}{dt} + v_c(t)$.

The differential equation is: $RC \frac{dv_c(t)}{dt} + v_c(t) = e(t)$.

Taking the Laplace transform (with zero initial conditions):
$RCsV_c(s) + V_c(s) = E(s)$
$V_c(s)(RCs + 1) = E(s)$

The transfer function is:
$G(s) = \frac{V_c(s)}{E(s)} = \frac{1}{RCs + 1}$

**Question 4:**
Using the force-voltage analogy, what electrical component is analogous to a mass $m$ in a translational mechanical system? What is the analogous electrical circuit element for a spring $K$?

**Answer 4:**
Using the force-voltage analogy:
*   A mass $m$ is analogous to an **inductor L**.
*   A spring $K$ is analogous to the reciprocal of capacitance, **1/C**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading and References

*   **Nise, Norman S. *Control Systems Engineering*. 5th Edition, Wiley, 2009. (Chapters 2)**
*   **Nagrath, I. J., & Gopal, M. *Control Systems Engineering*. 5th Edition, New Age, 2009. (Chapters 2)**
*   Kuo, B. C. *Automatic Control Systems*. 9th Edition, Prentice Hall of India, 2014. (Chapters 2)
*   Gopal, M. *Control Systems Principles and Design*. 4th Edition, Tata McGraw Hill, 2012. (Chapters 2)
*   Dorf, R. C., & Bishop, R. H. *Modern Control Systems*. 12th Edition, Pearson Education India, 2013. (Chapters 2)
*   Ogata, Katsuhiko. *Modern Control Engineering*. 5th Edition, Pearson, 2009. (Chapters 2)

---
**End of Module 1, Topic: Electrical, translational and rotational mechanical systems**