---
title: "Formulation of equation of motion  – Newton’s 2nd law and D’ Alembert’s principle generalized SDOF systems."
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 1: Introduction  – Classification of dynamic loads – essential characteristics of a dynamic problem – methods of discretization– single degree of freedom systems – basic components of a dynamic system."
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119ad"
status: "completed"
scrapedAt: "2026-05-20T19:02:46.666Z"
---
# Design of Earthquake Resistant Structures - Module 1: Introduction

## Topic: Formulation of Equation of Motion

This topic focuses on understanding how to mathematically represent the dynamic behavior of a structure, particularly in the context of earthquake loading. We will explore the fundamental principles used to derive the equation of motion for a Single Degree of Freedom (SDOF) system.

### 1. Essential Characteristics of a Dynamic Problem

Before formulating equations of motion, it's crucial to understand what makes a problem "dynamic."

*   **Time Dependence:** Dynamic problems involve quantities (like displacement, velocity, acceleration) that change with time. This is in contrast to static problems where loads and responses are constant.
*   **Inertia Forces:** Dynamic problems often involve forces arising from the mass and acceleration of the system (inertial forces). These forces are absent in static analysis.
*   **Mass:** The presence of mass is a defining characteristic. Mass resists changes in motion (acceleration).
*   **Stiffness:** The ability of a system to resist deformation under load is its stiffness. This is also present in static problems but is crucial for dynamic response (vibration).
*   **Damping:** Energy dissipation mechanisms within the system are represented by damping. This force opposes motion and tends to reduce vibrations.

### 2. Methods of Discretization

Real-world structures are complex with infinite degrees of freedom (DOF). To make analysis tractable, we often simplify them into discrete systems.

*   **What is a Degree of Freedom (DOF)?** The minimum number of independent coordinates required to completely describe the configuration or position of a dynamic system.
*   **Methods of Discretization:**
    *   **Lumped Mass Systems:** The mass of the continuous structure is concentrated at discrete points (nodes). This is the most common approach for simplified dynamic analysis.
        *   *Example:* Representing a multi-story building by lumping the mass of each floor at the floor level.
    *   **Consistent Mass Systems:** The mass distribution is treated as continuous, and a mass matrix is derived that reflects this continuous distribution. This is more accurate but computationally intensive.
        *   *Example:* Using finite element analysis (FEA) where element masses are derived from the continuous mass distribution within the element.
    *   **Mode Superposition (for multi-DOF systems):** This involves finding the natural modes of vibration of the system and then expressing the response as a combination of these modes. This is a powerful technique for reducing a complex multi-DOF system to a series of simpler SDOF systems.

### 3. Single Degree of Freedom (SDOF) Systems

An SDOF system is the simplest representation of a dynamic system.

*   **Definition:** A dynamic system that can be described by a single independent coordinate.
*   **Key Characteristics:**
    *   Has only one DOF.
    *   Typically represents the lateral (horizontal) motion of a structure.
    *   Idealized as a mass attached to a spring and a dashpot.
*   **Examples:**
    *   A simple pendulum (for small oscillations).
    *   A weight attached to a spring.
    *   A simplified representation of a single-story building undergoing lateral sway.

### 4. Basic Components of a Dynamic System (within an SDOF context)

An SDOF system is typically characterized by three fundamental components:

*   **Mass ($m$):** Represents the inertia of the system. It resists acceleration.
    *   *Units:* Kilograms (kg) or slugs.
    *   *In dynamic analysis:* Often lumped at a specific point.
*   **Stiffness ($k$):** Represents the elastic resistance of the system to deformation. It relates force to displacement.
    *   *Units:* Newtons per meter (N/m) or pounds per inch (lb/in).
    *   *In SDOF systems:* Represents the stiffness of the "spring" element.
*   **Damping ($c$):** Represents energy dissipation mechanisms (e.g., friction, air resistance, material damping). It opposes motion and reduces the amplitude of vibrations.
    *   *Units:* Newton-seconds per meter (N·s/m) or pound-seconds per inch (lb·s/in).
    *   *In SDOF systems:* Represents the stiffness of the "dashpot" element.

### 5. Formulation of Equation of Motion

The equation of motion mathematically describes how a dynamic system responds to applied forces over time.

#### 5.1 Newton's Second Law of Motion

This is the foundational principle for deriving the equation of motion.

*   **Statement:** The net force acting on an object is equal to the product of its mass and its acceleration.
*   **Mathematical Form:** $\Sigma F = ma$
    *   $\Sigma F$: Sum of all forces acting on the mass.
    *   $m$: Mass of the object.
    *   $a$: Acceleration of the object.

#### 5.2 D' Alembert's Principle

D' Alembert's principle is a convenient way to convert a dynamic problem into a static-like equilibrium problem by introducing an "inertial force."

*   **Statement:** The sum of the applied external forces, inertial forces, and damping forces acting on a body is zero.
*   **Inertial Force:** This is the force that an object exerts in opposition to an acceleration. It is equal in magnitude and opposite in direction to the force ($ma$). So, the inertial force is $-ma$.
*   **Mathematical Form (for an SDOF system):**
    $\Sigma F_{external} - ma - c\dot{x} - kx = 0$

    Rearranging this to the standard form:
    $m\ddot{x} + c\dot{x} + kx = F_{external}(t)$

    Where:
    *   $m$: Mass
    *   $c$: Damping coefficient
    *   $k$: Stiffness
    *   $x$: Displacement (the single DOF)
    *   $\dot{x}$: Velocity (first derivative of displacement with respect to time)
    *   $\ddot{x}$: Acceleration (second derivative of displacement with respect to time)
    *   $F_{external}(t)$: External force acting on the system, which is a function of time.

*   **Interpretation:**
    *   $m\ddot{x}$: Inertial force term (due to acceleration)
    *   $c\dot{x}$: Damping force term (due to velocity)
    *   $kx$: Stiffness force term (due to displacement)
    *   $F_{external}(t)$: Applied dynamic load (e.g., earthquake force)

#### 5.3 Generalized SDOF Systems

While the basic SDOF system is often visualized as a mass-spring-damper, the concept of a "generalized" SDOF system allows us to represent more complex structures by focusing on a single primary mode of vibration.

*   **Concept:** For a flexible structure responding primarily in its fundamental mode of vibration to a dynamic load, we can approximate its behavior as an equivalent SDOF system.
*   **Derivation:** This involves modal analysis techniques (often introduced in later modules), but the core idea is to define an "equivalent" mass ($m_{eq}$), stiffness ($k_{eq}$), and damping ($c_{eq}$) and a "generalized" displacement ($X$) such that the equation of motion for the original complex system can be reduced to:

    $m_{eq}\ddot{X} + c_{eq}\dot{X} + k_{eq}X = F_{eq}(t)$

*   **Key Idea:** The forces and displacements are "generalized" in the sense that they represent the aggregate effect of the distributed mass, stiffness, and damping over the entire structure, weighted by the shape of the assumed mode of vibration.
*   **Example:** In a multi-story building subjected to lateral load, the fundamental mode shape describes how the floors sway relative to each other. We can then define an equivalent mass, stiffness, and damping associated with this fundamental mode to represent the building's dynamic behavior as an SDOF system. The generalized displacement would represent the motion of a reference point on the structure (e.g., the roof displacement amplified by the mode shape).

### Important Points to Remember

*   **Dynamic problems involve time, inertia, and potentially damping.**
*   **Discretization is essential to simplify complex structures.** Lumped mass systems are commonly used for initial dynamic analysis.
*   **An SDOF system is the simplest model for dynamic analysis, characterized by mass, stiffness, and damping.**
*   **The equation of motion for an SDOF system is derived from Newton's second law ($F=ma$) or D' Alembert's principle.**
*   **The standard form of the SDOF equation of motion is $m\ddot{x} + c\dot{x} + kx = F(t)$.**
*   **Understanding the components ($m$, $c$, $k$) and their roles is fundamental.**
*   **Generalized SDOF systems allow us to represent the dominant dynamic behavior of more complex structures.**

### Practice Questions and Exercises

**Question 1:**
What are the three fundamental components of a dynamic system that are typically considered when formulating an equation of motion for an SDOF system? Briefly explain the role of each component.

**Answer 1:**
The three fundamental components are:
1.  **Mass (m):** Represents inertia and resists acceleration.
2.  **Stiffness (k):** Represents elastic resistance to deformation and relates force to displacement.
3.  **Damping (c):** Represents energy dissipation mechanisms and opposes motion, reducing vibration amplitude.

**Question 2:**
State Newton's Second Law of Motion in its mathematical form and explain what each term represents in the context of dynamic analysis.

**Answer 2:**
Newton's Second Law of Motion is $\Sigma F = ma$.
*   $\Sigma F$: Represents the sum of all external forces acting on a body.
*   $m$: Represents the mass of the body.
*   $a$: Represents the acceleration of the body.

In dynamic analysis, this law forms the basis for understanding how forces cause changes in motion.

**Question 3:**
Derive the equation of motion for a simple mass-spring system subjected to an external time-varying force $F(t)$. Assume no damping.

**Answer 3:**
For a mass-spring system with no damping, the forces acting on the mass are the external force $F(t)$ and the spring force $-kx$ (where $k$ is stiffness and $x$ is displacement, and the negative sign indicates the spring force opposes displacement).

Using Newton's Second Law ($\Sigma F = ma$):
$F(t) - kx = m\ddot{x}$

Rearranging to the standard form:
$m\ddot{x} + kx = F(t)$

**Question 4:**
Explain the concept of D' Alembert's principle and how it is applied to formulate the equation of motion for a damped SDOF system.

**Answer 4:**
D' Alembert's principle states that the sum of the applied external forces, inertial forces, and damping forces acting on a body is zero. It converts a dynamic problem into a static-like equilibrium problem by introducing the inertial force $(-ma)$ as an opposing force.

Applying it to a damped SDOF system with external force $F(t)$:
$\Sigma F_{external} + F_{inertial} + F_{damping} = 0$
$F(t) + (-m\ddot{x}) + (-c\dot{x}) = 0$

Rearranging to the standard dynamic equation form:
$m\ddot{x} + c\dot{x} + kx = F(t)$

**Question 5:**
Consider a building modeled as an SDOF system with a mass of 5000 kg and a stiffness of 20,000 kN/m. If it experiences an earthquake that induces an acceleration of $0.2g$ (where $g = 9.81 m/s^2$) at the mass, calculate the inertial force generated. (Assume no damping for this calculation).

**Answer 5:**
*   Mass ($m$) = 5000 kg
*   Acceleration due to gravity ($g$) = 9.81 m/s²
*   Induced acceleration ($a$) = $0.2g = 0.2 \times 9.81 m/s² = 1.962 m/s²$

Inertial force = $m \times a$
Inertial force = $5000 \, \text{kg} \times 1.962 \, \text{m/s²}$
Inertial force = $9810 \, \text{N}$

The inertial force generated is 9810 N.

---
