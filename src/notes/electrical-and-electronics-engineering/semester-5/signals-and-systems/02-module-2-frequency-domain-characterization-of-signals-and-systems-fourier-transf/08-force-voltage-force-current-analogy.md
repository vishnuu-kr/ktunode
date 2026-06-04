---
title: "Force voltage, Force current analogy."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d9"
status: "completed"
scrapedAt: "2026-05-23T16:23:48.398Z"
---
# Signals and Systems: Module 2 - Frequency Domain Characterization of Signals and Systems

## Topic: Force-Voltage and Force-Current Analogy

### 1. Introduction and Motivation

In the study of Signals and Systems, we often encounter systems that exhibit similar mathematical structures and behaviors, even if they operate in different physical domains. Understanding these analogies allows us to leverage our knowledge from one domain to analyze and design systems in another. This topic explores the fundamental analogies between mechanical vibratory systems and electrical circuits, specifically the **force-voltage (or impedance) analogy** and the **force-current (or mobility) analogy**. These analogies are particularly useful for understanding how systems described by differential equations can be mapped between mechanical and electrical domains, which is crucial for relating time-domain behavior to frequency-domain characteristics (CO2).

### 2. Mechanical Vibratory Systems

Before diving into the analogies, let's briefly recap the basic components of a simple mechanical vibratory system and their governing equations. A typical second-order mechanical system can be represented by a mass ($m$), a spring ($k$), and a damper ($b$). The displacement is denoted by $x(t)$.

*   **Mass ($m$):** Resists acceleration.
    *   Force due to acceleration: $F_m = m \frac{d^2x(t)}{dt^2}$
*   **Spring ($k$):** Resists displacement (stores potential energy).
    *   Force due to displacement: $F_s = kx(t)$
*   **Damper ($b$):** Resists velocity (dissipates energy).
    *   Force due to velocity: $F_d = b \frac{dx(t)}{dt}$

For a system with an external applied force $F(t)$, the equation of motion is given by Newton's second law:

$m \frac{d^2x(t)}{dt^2} + b \frac{dx(t)}{dt} + kx(t) = F(t)$

This is a second-order linear ordinary differential equation.

### 3. Force-Voltage (Impedance) Analogy

The force-voltage analogy, also known as the impedance analogy, establishes a correspondence between mechanical quantities and electrical quantities based on their functional roles in energy storage and dissipation.

#### 3.1. Correspondence Table (Force-Voltage Analogy)

| Mechanical Quantity       | Symbol | Electrical Quantity (Voltage Domain) | Symbol | Impedance/Admittance Relation                                                                |
| :------------------------ | :----- | :----------------------------------- | :----- | :------------------------------------------------------------------------------------------- |
| Force                     | $F(t)$ | Voltage                              | $v(t)$ | $V = IZ$ (Ohm's Law)                                                                         |
| Velocity                  | $v(t)$ | Current                              | $i(t)$ | $I = V/Z = VY$ (where $Y=1/Z$ is admittance)                                                 |
| Mass                      | $m$    | Inductance                           | $L$    | Impedance of Inductor: $Z_L = sL$                                                            |
| Damper Coefficient        | $b$    | Resistance                           | $R$    | Impedance of Resistor: $Z_R = R$                                                             |
| Spring Constant           | $k$    | Reciprocal of Capacitance            | $1/C$  | Impedance of Capacitor: $Z_C = 1/(sC)$                                                       |
| Displacement              | $x(t)$ | Flux Linkage                         | $\lambda(t)$ | $\lambda(t) = \int v(t) dt$ (for voltage source), or $v(t) = d\lambda/dt$                   |
| Mobility (1/Impedance)    | $1/Z$  | Admittance                           | $Y$    | $Y = 1/Z$                                                                                    |
| Mechanical Impedance ($F/v$) | $Z_m$  | Electrical Impedance ($V/I$)         | $Z_e$  |                                                                                              |

**Important Note on Velocity and Current:** In this analogy, **velocity is analogous to current**. This might seem counterintuitive at first glance, but it arises from the force-velocity relationship in mechanical systems and the voltage-current relationship in electrical systems when considering impedance.

#### 3.2. Derivation of the Analogy

Let's examine the governing equations:

**Mechanical System:**
$m \frac{d^2x(t)}{dt^2} + b \frac{dx(t)}{dt} + kx(t) = F(t)$

Recall that velocity is the time derivative of displacement: $v(t) = \frac{dx(t)}{dt}$.
The equation can be rewritten in terms of velocity:
$m \frac{dv(t)}{dt} + bv(t) + k \int v(t) dt = F(t)$
(Here, $\int v(t) dt = x(t)$ is the displacement, which is the integral of velocity.)

**Electrical System (Voltage Domain):**
Consider a series RLC circuit with voltage source $v(t)$. The governing equation from Kirchhoff's Voltage Law (KVL) is:
$v_R(t) + v_L(t) + v_C(t) = v(t)$
$Ri(t) + L \frac{di(t)}{dt} + \frac{1}{C} \int i(t) dt = v(t)$

Now, let's compare the mechanical equation (in terms of velocity) with the electrical equation:

Mechanical: $m \frac{dv(t)}{dt} + bv(t) + k \int v(t) dt = F(t)$
Electrical: $L \frac{di(t)}{dt} + Ri(t) + \frac{1}{C} \int i(t) dt = v(t)$

By comparing these two equations term by term, we can establish the analogy:

*   **Force ($F(t)$) $\leftrightarrow$ Voltage ($v(t)$)**
*   **Velocity ($v(t)$) $\leftrightarrow$ Current ($i(t)$)**
*   **Mass ($m$) $\leftrightarrow$ Inductance ($L$)**
*   **Damper ($b$) $\leftrightarrow$ Resistance ($R$)**
*   **Spring Constant ($k$) $\leftrightarrow$ Reciprocal of Capacitance ($1/C$)**

#### 3.3. Example: Mass-Spring-Damper System vs. Series RLC Circuit

Consider a mechanical system with mass $m$, damper $b$, and spring $k$. Let the applied force be $F(t)$. The equation of motion is:
$m \ddot{x} + b \dot{x} + kx = F(t)$

Using the force-voltage analogy:
*   $F(t) \rightarrow v(t)$ (applied voltage)
*   $x(t) \rightarrow \lambda(t)$ (flux linkage)
*   $\dot{x}(t) \rightarrow i(t)$ (current)
*   $\ddot{x}(t) \rightarrow \frac{di(t)}{dt}$ (rate of change of current)
*   $m \rightarrow L$
*   $b \rightarrow R$
*   $k \rightarrow 1/C$

Substituting these into the mechanical equation:
$L \frac{di(t)}{dt} + Ri(t) + \frac{1}{C} \int i(t) dt = v(t)$

This is precisely the equation for a series RLC circuit with a voltage source $v(t)$. Therefore, a mass-spring-damper system is analogous to a series RLC circuit.

*   **Mass ($m$)** behaves like an **inductor ($L$)**. Both store energy in their velocity/current rate of change. The energy stored in a mass is $\frac{1}{2}mv^2$, analogous to energy in an inductor $\frac{1}{2}Li^2$.
*   **Damper ($b$)** behaves like a **resistor ($R$)**. Both dissipate energy, proportional to velocity squared or current squared.
*   **Spring ($k$)** behaves like the reciprocal of a **capacitor ($1/C$)**. Both store potential energy related to displacement or voltage. The energy stored in a spring is $\frac{1}{2}kx^2$, analogous to energy in a capacitor $\frac{1}{2}Cv^2$. Since $x(t) = \int v(t) dt$ and the electrical equivalent is related to charge $q(t) = \int i(t) dt$, and $v_C(t) = q(t)/C$, the analogy $k \leftrightarrow 1/C$ becomes clearer.

#### 3.4. Frequency Domain Representation (CO2)

Taking the Fourier Transform of the force-voltage analogy equations:

Mechanical (in terms of velocity):
$j\omega m V(\omega) + b V(\omega) + \frac{k}{j\omega} V(\omega) = F(\omega)$
$V(\omega) \left( j\omega m + b + \frac{k}{j\omega} \right) = F(\omega)$

Electrical:
$j\omega L I(\omega) + R I(\omega) + \frac{1}{j\omega C} I(\omega) = V(\omega)$
$I(\omega) \left( j\omega L + R + \frac{1}{j\omega C} \right) = V(\omega)$

Comparing these, we see the direct correspondence:
*   $F(\omega) \leftrightarrow V(\omega)$
*   $V(\omega) \leftrightarrow I(\omega)$
*   $m \leftrightarrow L$
*   $b \leftrightarrow R$
*   $k \leftrightarrow 1/C$

The mechanical impedance $Z_m(\omega) = j\omega m + b + \frac{k}{j\omega}$ is analogous to the electrical impedance $Z_e(\omega) = j\omega L + R + \frac{1}{j\omega C}$. This analogy is why it's called the impedance analogy.

### 4. Force-Current (Mobility) Analogy

The force-current analogy, also known as the mobility analogy, establishes a different correspondence based on energy considerations, where force is analogous to current and velocity is analogous to voltage. This analogy is often preferred when analyzing systems with parallel electrical components.

#### 4.1. Correspondence Table (Force-Current Analogy)

| Mechanical Quantity       | Symbol | Electrical Quantity (Current Domain) | Symbol | Impedance/Admittance Relation                                                                |
| :------------------------ | :----- | :----------------------------------- | :----- | :------------------------------------------------------------------------------------------- |
| Force                     | $F(t)$ | Current                              | $i(t)$ | $I = VY$ (Ohm's Law with Admittance)                                                         |
| Velocity                  | $v(t)$ | Voltage                              | $v(t)$ | $V = I/Y = IZ$ (where $Z=1/Y$ is impedance)                                                  |
| Mass                      | $m$    | Capacitance                          | $C$    | Admittance of Capacitor: $Y_C = sC$                                                          |
| Damper Coefficient        | $b$    | Reciprocal of Resistance (Conductance) | $G = 1/R$ | Admittance of Resistor: $Y_R = G = 1/R$                                                      |
| Spring Constant           | $k$    | Inverse of Inductance                | $1/L$  | Admittance of Inductor: $Y_L = 1/(sL)$                                                       |
| Displacement              | $x(t)$ | Charge                               | $q(t)$ | $q(t) = \int i(t) dt$                                                                        |
| Mobility (1/Impedance)    | $1/Z$  | Admittance                           | $Y$    | $Y = 1/Z$                                                                                    |
| Mechanical Impedance ($F/v$) | $Z_m$  | Electrical Admittance ($I/V$)        | $Y_e$  |                                                                                              |

**Important Note on Force and Current:** In this analogy, **force is analogous to current**.

#### 4.2. Derivation of the Analogy

Let's start again with the mechanical equation in terms of velocity:
$m \frac{dv(t)}{dt} + bv(t) + k \int v(t) dt = F(t)$

**Electrical System (Current Domain):**
Consider a parallel RLC circuit with a current source $i(t)$. The governing equation from Kirchhoff's Current Law (KCL) at a node is:
$i_R(t) + i_L(t) + i_C(t) = i(t)$
$Gv(t) + \frac{1}{L} \int v(t) dt + C \frac{dv(t)}{dt} = i(t)$
(Where $G=1/R$ is conductance)

Now, let's compare the mechanical equation (in terms of velocity) with the electrical equation:

Mechanical: $m \frac{dv(t)}{dt} + bv(t) + k \int v(t) dt = F(t)$
Electrical: $C \frac{dv(t)}{dt} + Gv(t) + \frac{1}{L} \int v(t) dt = i(t)$

By comparing these two equations term by term, we can establish the analogy:

*   **Force ($F(t)$) $\leftrightarrow$ Current ($i(t)$)**
*   **Velocity ($v(t)$) $\leftrightarrow$ Voltage ($v(t)$)**
*   **Mass ($m$) $\leftrightarrow$ Capacitance ($C$)**
*   **Damper ($b$) $\leftrightarrow$ Conductance ($G = 1/R$)**
*   **Spring Constant ($k$) $\leftrightarrow$ Inverse of Inductance ($1/L$)**

#### 4.3. Example: Mass-Spring-Damper System vs. Parallel RLC Circuit

Consider the same mechanical system with mass $m$, damper $b$, and spring $k$. Let the applied force be $F(t)$. The equation of motion is:
$m \ddot{x} + b \dot{x} + kx = F(t)$

Using the force-current analogy:
*   $F(t) \rightarrow i(t)$ (applied current)
*   $x(t) \rightarrow q(t)$ (charge)
*   $\dot{x}(t) \rightarrow v(t)$ (voltage)
*   $\ddot{x}(t) \rightarrow \frac{dv(t)}{dt}$ (rate of change of voltage)
*   $m \rightarrow C$
*   $b \rightarrow G = 1/R$
*   $k \rightarrow 1/L$

Substituting these into the mechanical equation (rewritten in terms of velocity):
$m \frac{dv(t)}{dt} + b v(t) + k \int v(t) dt = F(t)$
becomes:
$C \frac{dv(t)}{dt} + G v(t) + \frac{1}{L} \int v(t) dt = i(t)$

This is precisely the equation for a parallel RLC circuit with a current source $i(t)$. Therefore, a mass-spring-damper system is analogous to a parallel RLC circuit.

*   **Mass ($m$)** behaves like a **capacitor ($C$)**. Both store energy related to velocity/voltage. The energy stored in a mass is $\frac{1}{2}mv^2$, analogous to energy in a capacitor $\frac{1}{2}Cv^2$.
*   **Damper ($b$)** behaves like a **conductance ($G=1/R$)**. Both dissipate energy.
*   **Spring ($k$)** behaves like the inverse of an **inductor ($1/L$)**. Both store potential energy related to displacement/charge. The analogy $k \leftrightarrow 1/L$ is derived from the relationship between spring force and displacement ($F=kx$) and the inductor current-charge relationship ($i_L = q/L$, which implies $v_L = d q/dt / L = \ddot{x}/L$ if $m \leftrightarrow C$).

#### 4.3. Frequency Domain Representation (CO2)

Taking the Fourier Transform of the force-current analogy equations:

Mechanical (in terms of velocity):
$j\omega m V(\omega) + b V(\omega) + \frac{k}{j\omega} V(\omega) = F(\omega)$
$V(\omega) \left( j\omega m + b + \frac{k}{j\omega} \right) = F(\omega)$

Electrical (parallel circuit, in terms of current source):
$j\omega C V(\omega) + G V(\omega) + \frac{1}{j\omega L} V(\omega) = I(\omega)$
$V(\omega) \left( j\omega C + G + \frac{1}{j\omega L} \right) = I(\omega)$

Comparing these, we see the direct correspondence:
*   $F(\omega) \leftrightarrow I(\omega)$
*   $V(\omega) \leftrightarrow V(\omega)$
*   $m \leftrightarrow C$
*   $b \leftrightarrow G = 1/R$
*   $k \leftrightarrow 1/L$

The mechanical admittance (or mobility, $1/Z_m$) is $1 / (j\omega m + b + \frac{k}{j\omega})$.
The electrical admittance is $Y_e(\omega) = j\omega C + G + \frac{1}{j\omega L}$.

Notice the reciprocal relationship:
Mechanical Impedance Term: $j\omega m + b + \frac{k}{j\omega}$
Electrical Admittance Term: $j\omega C + G + \frac{1}{j\omega L}$

Substituting the mechanical-electrical analogies into the mechanical impedance expression:
$j\omega C + G + \frac{1}{j\omega L}$
This matches the electrical admittance expression. Thus, the mechanical **impedance** is analogous to the electrical **admittance**.

### 5. Choice of Analogy

The choice between the force-voltage and force-current analogy often depends on the circuit configuration.

*   **Force-Voltage Analogy:** Typically preferred for **series electrical circuits** because mechanical forces combine in series (like voltages in a series circuit), and velocities add up in parallel branches (like currents in parallel).
*   **Force-Current Analogy:** Typically preferred for **parallel electrical circuits** because mechanical velocities combine in series (like voltages in a series circuit), and forces add up in parallel branches (like currents in parallel).

Both analogies are valid and lead to correct system representations. The key is to maintain consistency within the chosen analogy.

### 6. Relationship to Course Outcomes

*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**
    *   While this topic focuses on analogies, the foundation is understanding the time-domain differential equations of mechanical systems and electrical circuits. This understanding is essential for the mathematical operations performed on signals.

*   **CO2: To represent continuous time signals and systems in frequency domain (Knowledge Level: K3)**
    *   This is directly addressed. By taking the Fourier transform of the governing differential equations in both domains, we can establish the frequency-domain correspondences. This allows us to analyze the frequency response of mechanical systems by studying analogous electrical circuits and vice-versa. This is fundamental to understanding system behavior in the frequency domain.

*   **CO3: To represent discrete time signals and systems in Z-domain. (Knowledge Level: K3)**
    *   While this topic primarily deals with continuous-time systems and their Fourier transform representations, the underlying principles of system modeling and analogy can be extended to discrete-time systems and the Z-transform. Understanding continuous-time analogies provides a strong conceptual foundation for discrete-time analysis.

*   **CO4: To analyse the stability of continuous time dynamical systems (Knowledge Level: K3)**
    *   The analogies allow us to relate the characteristics of mechanical systems to electrical circuits. Stability analysis often involves examining poles and zeros of the system's transfer function. Since the analogies map system components directly, the stability criteria (e.g., location of poles in the left-half plane) are preserved. If a mechanical system is analogous to a stable electrical circuit, then the mechanical system is also stable.

### 7. Key Concepts and Definitions

*   **Analogy:** A correspondence between two systems or phenomena that share similar mathematical relationships and behaviors.
*   **Force-Voltage (Impedance) Analogy:** Equates mechanical force with electrical voltage, and mechanical velocity with electrical current. It maps mechanical impedance to electrical impedance.
*   **Force-Current (Mobility) Analogy:** Equates mechanical force with electrical current, and mechanical velocity with electrical voltage. It maps mechanical impedance to electrical admittance (mobility).
*   **Mechanical Impedance ($Z_m$):** The ratio of force to velocity in a mechanical system ($F/v$).
*   **Electrical Impedance ($Z_e$):** The ratio of voltage to current in an electrical system ($V/I$).
*   **Electrical Admittance ($Y_e$):** The reciprocal of electrical impedance ($I/V$).
*   **Series RLC Circuit:** An electrical circuit with a resistor, inductor, and capacitor connected in series.
*   **Parallel RLC Circuit:** An electrical circuit with a resistor, inductor, and capacitor connected in parallel.

### 8. Important Points to Remember

*   **Consistency is Key:** Once an analogy is chosen, stick to it for all component mappings and relationships.
*   **Velocity $\leftrightarrow$ Current (Force-Voltage):** This is a crucial mapping in the impedance analogy.
*   **Force $\leftrightarrow$ Current (Force-Current):** This is a crucial mapping in the mobility analogy.
*   **Mass $\leftrightarrow$ Inductance (Force-Voltage), Mass $\leftrightarrow$ Capacitance (Force-Current):** Note how the roles of inductance and capacitance swap between the two analogies.
*   **Damper $\leftrightarrow$ Resistance (Force-Voltage), Damper $\leftrightarrow$ Conductance (Force-Current):** Resistance is directly mapped in one, while its reciprocal (conductance) is mapped in the other.
*   **Spring $\leftrightarrow$ Reciprocal of Capacitance (Force-Voltage), Spring $\leftrightarrow$ Inverse of Inductance (Force-Current):** The reciprocal relationship for springs is consistent, but the specific electrical components change.
*   **Frequency Domain Behavior:** Analogies are powerful for transferring knowledge about frequency response and stability between mechanical and electrical systems.

### 9. Practice Questions and Exercises

**Question 1:**
Consider a mechanical system described by the equation: $2\ddot{x} + 5\dot{x} + 10x = F(t)$.
Using the **force-voltage (impedance) analogy**, determine the analogous electrical circuit. List the values of the electrical components (R, L, C).

**Answer 1:**
The mechanical equation is: $2\ddot{x} + 5\dot{x} + 10x = F(t)$.

Using the force-voltage analogy:
*   $F(t) \leftrightarrow v(t)$ (applied voltage)
*   $\dot{x}(t) \leftrightarrow i(t)$ (current)
*   $\ddot{x}(t) \leftrightarrow \frac{di(t)}{dt}$ (rate of change of current)
*   $m \leftrightarrow L$
*   $b \leftrightarrow R$
*   $k \leftrightarrow 1/C$

From the mechanical equation, $m=2$, $b=5$, $k=10$.

Therefore, the analogous electrical circuit parameters are:
*   $L = m = 2$ Henrys
*   $R = b = 5$ Ohms
*   $1/C = k = 10 \implies C = 1/10 = 0.1$ Farads

The analogous electrical circuit is a **series RLC circuit** with $L=2H$, $R=5\Omega$, and $C=0.1F$, driven by a voltage source $v(t)$.

**Question 2:**
Consider the same mechanical system described by the equation: $2\ddot{x} + 5\dot{x} + 10x = F(t)$.
Using the **force-current (mobility) analogy**, determine the analogous electrical circuit. List the values of the electrical components (R, L, C).

**Answer 2:**
The mechanical equation is: $2\ddot{x} + 5\dot{x} + 10x = F(t)$.

Using the force-current analogy:
*   $F(t) \leftrightarrow i(t)$ (applied current)
*   $\dot{x}(t) \leftrightarrow v(t)$ (voltage)
*   $\ddot{x}(t) \leftrightarrow \frac{dv(t)}{dt}$ (rate of change of voltage)
*   $m \leftrightarrow C$
*   $b \leftrightarrow G = 1/R$
*   $k \leftrightarrow 1/L$

From the mechanical equation, $m=2$, $b=5$, $k=10$.

Therefore, the analogous electrical circuit parameters are:
*   $C = m = 2$ Farads
*   $G = b = 5$ Siemens (or $R = 1/G = 1/5 = 0.2$ Ohms)
*   $1/L = k = 10 \implies L = 1/10 = 0.1$ Henrys

The analogous electrical circuit is a **parallel RLC circuit** with $C=2F$, $G=5S$ (or $R=0.2\Omega$), and $L=0.1H$, driven by a current source $i(t)$.

**Question 3:**
Explain why the force-voltage analogy is often preferred for analyzing systems that are naturally modeled by series electrical circuits, and vice versa for the force-current analogy with parallel circuits.

**Answer 3:**
*   **Force-Voltage (Impedance) Analogy:** In mechanical systems, forces often add up in series (e.g., forces acting on a single point or along a single path). Similarly, in electrical circuits, voltages add up in series connections (Kirchhoff's Voltage Law). This alignment makes the force-voltage analogy intuitive for series electrical circuits where voltage is the primary variable that sums up.
*   **Force-Current (Mobility) Analogy:** In mechanical systems, velocities add up in series (e.g., velocities of interconnected components). However, the analogy maps force to current. In electrical circuits, currents add up in parallel connections (Kirchhoff's Current Law). The force-current analogy maps mechanical force (which is analogous to current) to electrical current, which is natural for analyzing parallel circuits where currents are the variables that sum up at a node.

**Question 4:**
What is the frequency-domain representation of the mechanical impedance $Z_m = j\omega m + b + \frac{k}{j\omega}$ in terms of electrical quantities using the force-current analogy?

**Answer 4:**
Using the force-current analogy:
*   $m \leftrightarrow C$
*   $b \leftrightarrow G = 1/R$
*   $k \leftrightarrow 1/L$

Substituting these into the mechanical impedance expression:
$Z_m = j\omega m + b + \frac{k}{j\omega}$
$Z_m \leftrightarrow j\omega C + G + \frac{1}{j\omega L}$

This resulting expression is the **electrical admittance** $Y_e(\omega)$ of a parallel RLC circuit. Thus, the mechanical impedance in this analogy corresponds to electrical admittance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. References

*   **Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007):** This textbook provides a strong foundation in signal and system analysis, including an introduction to physical system modeling and analogies.
*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009):** Nise's book often includes sections on modeling physical systems, including mechanical and electrical systems, and the analogies used to relate them, which is directly relevant to understanding these concepts for control system design.
*   **Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Prentice Hall, 2nd Edition, 2015):** This comprehensive text delves into the mathematical aspects of signals and systems, offering detailed explanations of system modeling and the mathematical basis for analogies.

These references are valuable for a deeper understanding of the mathematical derivations and applications of these analogies in analyzing complex systems.