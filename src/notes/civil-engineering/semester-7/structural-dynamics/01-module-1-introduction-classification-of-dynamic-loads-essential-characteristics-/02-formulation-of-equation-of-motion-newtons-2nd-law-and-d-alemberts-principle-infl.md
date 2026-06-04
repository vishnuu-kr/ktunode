---
title: "Formulation of equation of motion – Newton’s 2nd law and D’ Alembert’s principle; influence of gravitational forces – generalized SDOF systems."
subject: "STRUCTURAL DYNAMICS"
module: "Module 1: Introduction  – Classification of dynamic loads – essential characteristics of a dynamic problem – methods of discretization– single degree of freedom systems – basic components of a dynamic system."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811416"
status: "completed"
scrapedAt: "2026-05-20T19:01:35.251Z"
---
# Structural Dynamics: Module 1 - Introduction (Part 2)

## Topic: Formulation of Equation of Motion

This section focuses on how to mathematically represent the dynamic behavior of structures, particularly for simplified systems.

### 1. Newton's Second Law of Motion

**Key Concept:** Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass. Mathematically, this is expressed as:

$$ \sum F = ma $$

where:
*   $ \sum F $ is the sum of all external forces acting on the object.
*   $ m $ is the mass of the object.
*   $ a $ is the acceleration of the object.

**Application to Structural Dynamics:** For a structural element or system, we can apply Newton's Second Law to relate the forces acting on it to its motion (acceleration). In structural dynamics, forces can be applied loads, internal resisting forces (like stiffness and damping), and inertial forces.

**Important Point to Remember:** In structural dynamics, we are often dealing with time-varying forces and responses. Therefore, acceleration ($a$) is typically the second derivative of displacement ($u$) with respect to time ($t$), i.e., $a = \ddot{u}$.

### 2. D'Alembert's Principle

**Key Concept:** D'Alembert's Principle is a modification of Newton's Second Law that allows us to treat dynamic problems as static equilibrium problems. It introduces the concept of an "inertial force" or "inertia force" which is equal in magnitude and opposite in direction to the product of mass and acceleration.

**Formulation:** Rearranging Newton's Second Law:

$$ \sum F - ma = 0 $$

D'Alembert's Principle states that the sum of the applied forces and the inertial force equals zero:

$$ \sum F - m\ddot{u} = 0 $$

Or, conventionally written as:

$$ \sum F + (-m\ddot{u}) = 0 $$

Here, $-m\ddot{u}$ is the inertial force. By moving the inertial term to the left side of the equation, we can analyze the system as if it were in equilibrium, with the inertial force acting as an additional applied force.

**Advantages:**
*   Allows for a more intuitive understanding of equilibrium in dynamic systems.
*   Simplifies the mathematical formulation for certain types of analyses.

**Example:** Consider a mass $m$ subjected to an applied force $P(t)$. According to Newton's Second Law, $P(t) = m\ddot{u}(t)$. Using D'Alembert's principle, we can write this as $P(t) - m\ddot{u}(t) = 0$. The term $-m\ddot{u}(t)$ is the inertial force.

### 3. Influence of Gravitational Forces

**Key Concept:** Gravitational force is a constant force acting downwards due to the mass of the object and the acceleration due to gravity. It's often a significant component of the static load on a structure.

**Representation:** The gravitational force ($W$) acting on a mass ($m$) is given by:

$$ W = mg $$

where:
*   $ m $ is the mass.
*   $ g $ is the acceleration due to gravity (approximately $9.81 \, m/s^2$ or $32.2 \, ft/s^2$).

**Incorporating into the Equation of Motion:**
When formulating the equation of motion, we must include gravitational forces if they are relevant to the dynamic behavior being analyzed.

*   **Static Equilibrium Position:** In many dynamic analyses, we establish a coordinate system where the origin ($u=0$) corresponds to the static equilibrium position of the structure under gravity. In this case, the gravitational force is inherently balanced by the static restoring forces (e.g., stiffness) at $u=0$, and it doesn't directly appear in the equation of motion for *displacements* from this equilibrium.

*   **Dynamic Analysis from Undeformed Position:** If we define $u$ as the displacement from the undeformed position, and the structure is initially at rest in its undeformed state, then gravity acts as a constant downward force. If the system's motion is considered relative to this initial undeformed state, the gravitational force will be present.

**Example:** Consider a spring-mass system where the mass is hanging vertically.
Let $k$ be the stiffness of the spring, $m$ be the mass, and $g$ be the acceleration due to gravity.

1.  **Static Equilibrium:** When the mass is attached, the spring stretches by an amount $u_{static}$ such that $k u_{static} = mg$.
2.  **Dynamic Displacement:** Let $u(t)$ be the displacement of the mass from its static equilibrium position. The total displacement from the undeformed position is $u_{total}(t) = u_{static} + u(t)$.
3.  **Forces:**
    *   Spring force: $F_{spring} = -k(u_{static} + u(t))$ (acting upwards if $u_{total}$ is downwards).
    *   Gravitational force: $F_{gravity} = -mg$ (acting downwards).
    *   Inertial force: $F_{inertia} = m\ddot{u}_{total}(t) = m\ddot{u}(t)$ (if we consider displacement from undeformed, but easier to consider from static equilibrium).

    Using D'Alembert's principle for displacement $u(t)$ from static equilibrium:
    Sum of forces = Inertial force
    $F_{spring} + F_{gravity} - m\ddot{u}(t) = 0$
    $-k(u_{static} + u(t)) - mg - m\ddot{u}(t) = 0$
    $-k u_{static} - ku(t) - mg - m\ddot{u}(t) = 0$

    Since $k u_{static} = mg$, we can substitute:
    $-mg - ku(t) - mg - m\ddot{u}(t) = 0$
    $-2mg - ku(t) - m\ddot{u}(t) = 0$
    This equation has an issue. The correct approach when defining $u(t)$ from static equilibrium is to consider the forces acting *relative* to that equilibrium.

    Let's redefine. Let $y(t)$ be the displacement from the undeformed position.
    Forces acting on the mass $m$:
    *   Spring force (upwards): $F_k = -k y(t)$
    *   Gravity (downwards): $F_g = mg$
    *   Applied load (if any): $P(t)$
    *   Inertial force (opposite to acceleration): $m \ddot{y}(t)$

    Equation of motion from D'Alembert's principle (sum of forces + inertia = 0):
    $-k y(t) + mg + P(t) - m \ddot{y}(t) = 0$
    Rearranging:
    $m \ddot{y}(t) + k y(t) = mg + P(t)$

    Now, let's define $y(t) = u_{static} + u(t)$, where $u_{static}$ is the static displacement due to gravity and $u(t)$ is the dynamic displacement from static equilibrium.
    $y(t) = \frac{mg}{k} + u(t)$
    $\ddot{y}(t) = \ddot{u}(t)$

    Substitute into the equation:
    $m \ddot{u}(t) + k (\frac{mg}{k} + u(t)) = mg + P(t)$
    $m \ddot{u}(t) + mg + k u(t) = mg + P(t)$
    $m \ddot{u}(t) + k u(t) = P(t)$

    **Conclusion:** When defining the dynamic displacement ($u(t)$) from the *static equilibrium position* under gravity, the gravitational force term effectively cancels out from the equation of motion, leaving a simpler equation for the free vibration part. This is a crucial simplification.

### 4. Generalized SDOF Systems

**Key Concept:** A Single Degree of Freedom (SDOF) system is a mechanical system that can be described by a single coordinate. In structural dynamics, this means the motion of the entire structure can be represented by the displacement of a single point or generalized coordinate.

**Characteristics:**
*   **Single Coordinate:** Motion is defined by one independent variable (e.g., displacement $u(t)$).
*   **Mass, Stiffness, Damping:** Typically represented by lumped parameters: mass ($m$), stiffness ($k$), and damping coefficient ($c$).
*   **Equation of Motion:** Generally takes the form of a second-order linear ordinary differential equation.

**Generalized SDOF Systems:** This term emphasizes that the "single degree of freedom" might not be a simple translation of a single mass. It can represent a more complex system where a single generalized coordinate captures the dominant dynamic behavior.

**Examples of Generalized SDOF Systems:**

*   **Cantilever Beam with End Mass:** A cantilever beam is a continuous system. However, if a large concentrated mass is placed at the free end, and the mass of the beam itself is negligible, the dynamic behavior can be approximated by the motion of this end mass. The generalized coordinate would be the lateral displacement of the free end.
    *   Mass ($m$): The concentrated mass at the end.
    *   Stiffness ($k$): The effective stiffness of the cantilever beam at the free end, calculated using beam theory ($k = \frac{3EI}{L^3}$ for a point load at the end of a cantilever).
    *   Damping ($c$): Represents energy dissipation within the beam and supports.

*   **Portal Frame with Rigid Diaphragm:** A portal frame might have multiple natural modes of vibration. However, if the floor slab is rigid and acts as a diaphragm, all points on the slab move together horizontally. The dynamic response can be characterized by the lateral displacement of the diaphragm, making it an effective SDOF system. The generalized coordinate is the lateral displacement of the diaphragm.
    *   Mass ($m$): The total mass of the diaphragm and any attached masses, lumped at the diaphragm level.
    *   Stiffness ($k$): The effective lateral stiffness of the frame resisting lateral displacement.
    *   Damping ($c$): Represents damping in the frame members and supports.

*   **A Single Story Building (Shear Building Model):** A simple building with a rigid floor and flexible columns can be modeled as an SDOF system. The generalized coordinate is the lateral displacement of the floor relative to the foundation.
    *   Mass ($m$): The mass of the floor and any story mass.
    *   Stiffness ($k$): The total stiffness of the columns resisting lateral shear.
    *   Damping ($c$): Represents damping in the columns.

**Formulating Equation of Motion for Generalized SDOF:**

The general form of the equation of motion for a damped, forced SDOF system is:

$$ m\ddot{u}(t) + c\dot{u}(t) + ku(t) = P(t) $$

where:
*   $ m $ is the effective mass associated with the generalized coordinate $u$.
*   $ c $ is the effective damping coefficient associated with the generalized coordinate $u$.
*   $ k $ is the effective stiffness associated with the generalized coordinate $u$.
*   $ u(t) $ is the generalized displacement.
*   $ \dot{u}(t) $ is the generalized velocity.
*   $ \ddot{u}(t) $ is the generalized acceleration.
*   $ P(t) $ is the generalized external force acting on the system.

**How to Determine $m$, $k$, $c$, and $P(t)$ for Generalized SDOF Systems:**

*   **Mass ($m$):** This is often the lumped mass at the location of the generalized coordinate, or an "effective mass" derived using modal analysis principles. For simple cases like a mass at the end of a beam, it's the actual mass. For a continuous system discretized to SDOF, it involves integration of mass distribution weighted by mode shape.
*   **Stiffness ($k$):** This is the stiffness associated with the generalized coordinate. For a spring-mass system, it's the spring stiffness. For a beam or frame, it's the effective stiffness calculated using structural mechanics principles (e.g., stiffness matrix methods, influence coefficients) for the displacement defined by the generalized coordinate.
*   **Damping ($c$):** This is the most challenging to determine. It's often estimated based on material properties, joint behavior, and experimental data. Common models include viscous damping ($c\dot{u}$). In the absence of specific damping data, it might be assumed to be zero or a small percentage of critical damping.
*   **Force ($P(t)$):** This is the external force applied to the system, acting in the direction of the generalized coordinate, or its equivalent generalized force derived from distributed loads using modal analysis.

**Example Calculation for a Cantilever Beam with End Mass:**

Consider a cantilever beam of length $L$, Young's modulus $E$, and moment of inertia $I$. A mass $m_0$ is attached at the free end. We want to model this as an SDOF system where the generalized coordinate $u(t)$ is the lateral displacement of the free end.

1.  **Effective Mass ($m$):** Assuming the mass of the beam is negligible compared to $m_0$, the effective mass is simply $m = m_0$. If the beam mass is significant, we would use an effective mass considering the mode shape, which for the first mode of a cantilever beam is $m_{eff} = m_{beam} \times 0.236$ (approximately, depending on the exact mode shape approximation). For simplicity here, we'll assume $m = m_0$.

2.  **Effective Stiffness ($k$):** The static stiffness of the cantilever beam at the free end is the force required to produce a unit displacement at the end. From beam deflection formulas, the deflection ($y$) at the free end due to a concentrated load ($P$) at the end is $y = \frac{PL^3}{3EI}$. Therefore, the stiffness $k$ is the inverse of this flexibility:
    $$ k = \frac{P}{y} = \frac{3EI}{L^3} $$

3.  **Damping ($c$):** This is an empirical value. Let's assume $c$ is known.

4.  **External Force ($P(t)$):** If an external force $F(t)$ is applied vertically at the free end, this is our generalized force $P(t) = F(t)$.

The equation of motion for this SDOF system would be:

$$ m_0\ddot{u}(t) + c\dot{u}(t) + \frac{3EI}{L^3}u(t) = F(t) $$

This equation describes the lateral motion of the free end of the cantilever beam.

---

## Practice Questions and Exercises

**Question 1:**
State Newton's Second Law of Motion and express it mathematically. Explain its relevance to structural dynamics.

**Answer 1:**
Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass. Mathematically, $\sum F = ma$. In structural dynamics, it relates the inertial forces (due to mass and acceleration), restoring forces (due to stiffness), damping forces, and applied external forces acting on a structural element or system.

**Question 2:**
What is D'Alembert's Principle? How does it transform a dynamic equilibrium problem into a static equilibrium problem?

**Answer 2:**
D'Alembert's Principle states that the algebraic sum of the applied forces and the inertial force acting on a body is zero. It's expressed as $\sum F - m\ddot{u} = 0$. By moving the inertial term ($m\ddot{u}$) to the left side as a force ($-m\ddot{u}$), dynamic problems can be analyzed as static equilibrium problems, where the inertial force acts as an additional applied force.

**Question 3:**
A mass of 5 kg is attached to a spring with a stiffness of $1000 \, N/m$. The mass is displaced $0.1 \, m$ downwards from its static equilibrium position under gravity and then released. Formulate the equation of motion for the displacement $u(t)$ from the static equilibrium position. (Assume $g = 9.81 \, m/s^2$)

**Answer 3:**
The static equilibrium position is where the spring force balances gravity: $k u_{static} = mg$.
$u_{static} = \frac{mg}{k} = \frac{5 \, kg \times 9.81 \, m/s^2}{1000 \, N/m} = 0.04905 \, m$.

Let $u(t)$ be the displacement from the static equilibrium position.
The equation of motion for a spring-mass system, accounting for displacement from static equilibrium, is:
$m\ddot{u}(t) + ku(t) = P(t)$
Here, $m = 5 \, kg$, $k = 1000 \, N/m$.
Since the mass is released from rest after being displaced and no other external forces are applied, $P(t) = 0$.

The equation of motion is:
$5\ddot{u}(t) + 1000u(t) = 0$

**Question 4:**
Consider a simple single-story building modeled as an SDOF system. The story mass is $50,000 \, kg$. The columns provide a lateral stiffness of $20,000 \, kN/m$. Formulate the equation of motion if the building is subjected to a time-varying horizontal force $F(t) = 10,000 \sin(2t) \, N$. Assume no damping.

**Answer 4:**
The system is modeled as an SDOF system with:
*   Mass ($m$) = $50,000 \, kg$
*   Stiffness ($k$) = $20,000 \, kN/m = 20,000 \times 10^3 \, N/m = 20 \times 10^6 \, N/m$
*   Damping ($c$) = $0$
*   Applied Force ($P(t)$) = $F(t) = 10,000 \sin(2t) \, N$

The general equation of motion for an SDOF system is $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = P(t)$.
Substituting the values:
$50,000\ddot{u}(t) + 0\dot{u}(t) + (20 \times 10^6)u(t) = 10,000 \sin(2t)$

The equation of motion is:
$50,000\ddot{u}(t) + 20,000,000u(t) = 10,000 \sin(2t)$

Dividing by 50,000 to simplify:
$\ddot{u}(t) + 400u(t) = 0.2 \sin(2t)$

**Question 5:**
Explain why defining displacement from the static equilibrium position is often preferred when including gravitational forces in the equation of motion.

**Answer 5:**
When displacement $u(t)$ is defined from the static equilibrium position under gravity, the gravitational force term effectively cancels out from the equation of motion. This is because the static equilibrium position itself is determined by the balance between gravity and the static restoring forces (like stiffness). When you analyze the deviations from this equilibrium, the constant downward force of gravity is already counteracted, simplifying the resulting differential equation to represent only the dynamic response due to stiffness, damping, and external time-varying loads. This leads to a simpler equation for the dynamic analysis.

---

## Important Points to Remember

*   **Newton's Second Law is Fundamental:** It's the bedrock for deriving equations of motion in dynamics.
*   **D'Alembert's Principle:** A convenient tool to treat dynamic problems as static equilibrium problems by introducing an inertial force.
*   **Gravitational Force:** Be mindful of how gravity affects the equilibrium position. Defining motion relative to the static equilibrium position often simplifies the equation of motion by cancelling out the gravitational term.
*   **SDOF Simplification:** Many complex structures can be approximated as SDOF systems, simplifying analysis. The key is identifying a single generalized coordinate that captures the dominant behavior.
*   **Effective Parameters:** For generalized SDOF systems, effective mass ($m$), stiffness ($k$), and damping ($c$) are crucial and are derived from structural mechanics principles or experimental data.
*   **Equation of Motion:** The standard form is $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = P(t)$. Understanding how to determine each term is vital.
