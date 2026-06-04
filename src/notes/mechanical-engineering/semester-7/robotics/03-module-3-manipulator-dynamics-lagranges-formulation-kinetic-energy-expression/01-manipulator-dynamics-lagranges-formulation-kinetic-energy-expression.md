---
title: "Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
subject: "ROBOTICS"
module: "Module 3: Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446424f"
status: "completed"
scrapedAt: "2026-05-20T18:18:45.988Z"
---
# ROBOTICS: Module 3 - Manipulator Dynamics: Lagrange's Formulation – Kinetic Energy Expression

## Introduction

This module delves into the fundamental principles of manipulator dynamics, focusing on the powerful **Lagrange's formulation**. We will specifically concentrate on deriving the **kinetic energy expression** for a robotic manipulator. Understanding kinetic energy is crucial for formulating the equations of motion, which are essential for robot control and simulation. This topic directly contributes to **Course Outcome 4 (CO4)**: "Develop a dynamic model and design the controller for robotic manipulators."

---

## 1. Fundamentals of Dynamics

Before diving into Lagrange's formulation, let's briefly revisit some core dynamics concepts.

*   **Dynamics:** The study of motion and its causes. In robotics, this involves understanding how forces and torques affect the movement of the robot's links and joints.
*   **Rigid Body:** For simplicity in many robotic dynamics formulations, we often treat robot links as rigid bodies, meaning their shape and size do not deform under the applied forces.
*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a robotic system. For a manipulator, these are typically the joint variables (e.g., joint angles or displacements).
*   **Generalized Coordinates:** A minimal set of independent variables that completely describe the configuration of a system. For a serial manipulator with $n$ joints, the joint variables ($\theta_1, \theta_2, ..., \theta_n$ for revolute joints, or $d_1, d_2, ..., d_n$ for prismatic joints) serve as the generalized coordinates.

---

## 2. Lagrange's Formulation

Lagrange's formulation is a powerful and systematic method for deriving the equations of motion for mechanical systems. It is based on the concept of energy and is often preferred over Newtonian mechanics for complex systems like robotic manipulators due to its elegance and ability to handle generalized coordinates naturally.

### 2.1 The Lagrangian

The foundation of Lagrange's formulation is the **Lagrangian**, denoted by $\mathcal{L}$. It is defined as the difference between the total kinetic energy ($T$) and the total potential energy ($V$) of the system:

$$ \mathcal{L} = T - V $$

### 2.2 The Euler-Lagrange Equations

The equations of motion for a system described by generalized coordinates $q_i$ are given by the Euler-Lagrange equations:

$$ \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_i}\right) - \frac{\partial \mathcal{L}}{\partial q_i} = Q_i \quad \text{for } i = 1, 2, ..., n $$

Where:
*   $q_i$ are the generalized coordinates (joint variables).
*   $\dot{q}_i$ are the generalized velocities.
*   $\frac{\partial \mathcal{L}}{\partial \dot{q}_i}$ is the generalized momentum.
*   $\frac{\partial \mathcal{L}}{\partial q_i}$ is related to generalized forces.
*   $Q_i$ represents the generalized non-conservative forces and torques acting on the system. For a robotic manipulator, these would include actuator torques/forces, friction, and gravity.

---

## 3. Kinetic Energy Expression ($T$)

The total kinetic energy of a robotic manipulator is the sum of the kinetic energies of each of its links. For a rigid body moving in 3D space, the kinetic energy can be expressed as the sum of translational kinetic energy and rotational kinetic energy.

### 3.1 Kinetic Energy of a Single Rigid Body

Consider a single rigid body (a link) with mass $m$. Its motion can be described by the motion of its center of mass (CM) and its rotation about the CM.

*   **Translational Kinetic Energy ($T_{trans}$):** This is the kinetic energy due to the motion of the body's center of mass. If $\mathbf{v}_{cm}$ is the velocity of the center of mass, then:

    $$ T_{trans} = \frac{1}{2} m \|\mathbf{v}_{cm}\|^2 $$

    In terms of generalized coordinates $q_i$, the velocity of the CM $\mathbf{v}_{cm}$ will be a function of $q_i$ and $\dot{q}_i$.

*   **Rotational Kinetic Energy ($T_{rot}$):** This is the kinetic energy due to the rotation of the body about its center of mass. If $\boldsymbol{\omega}$ is the angular velocity of the body, and $\mathbf{I}_{cm}$ is the inertia tensor about the CM, then:

    $$ T_{rot} = \frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{cm} \boldsymbol{\omega} $$

    The inertia tensor $\mathbf{I}_{cm}$ is a $3 \times 3$ matrix that describes how mass is distributed relative to the axis of rotation. It is constant in the body's own coordinate frame but can be time-varying in an inertial frame.

*   **Total Kinetic Energy of a Single Rigid Body ($T_k$):**

    $$ T_k = T_{trans} + T_{rot} = \frac{1}{2} m \|\mathbf{v}_{cm}\|^2 + \frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{cm} \boldsymbol{\omega} $$

### 3.2 Kinetic Energy of a Robotic Manipulator

A robotic manipulator consists of multiple links connected by joints. The total kinetic energy of the manipulator is the sum of the kinetic energies of all its links:

$$ T = \sum_{k=1}^{N} T_k $$

Where:
*   $N$ is the number of links in the manipulator.
*   $T_k$ is the kinetic energy of the $k$-th link.

**Important Consideration:** When calculating the kinetic energy of each link, we need to express the velocity of its center of mass ($\mathbf{v}_{cm,k}$) and its angular velocity ($\boldsymbol{\omega}_k$) in terms of the **generalized coordinates and velocities** of the manipulator ($q_i, \dot{q}_i$). This is where kinematics plays a crucial role.

**Example:** For a simple 2-DOF planar manipulator (e.g., a two-link arm in a plane), each link can be considered a rigid body.

*   Let link 1 have mass $m_1$, inertia tensor $\mathbf{I}_1$, and its CM is at $\mathbf{r}_{cm,1}$ in the base frame.
*   Let link 2 have mass $m_2$, inertia tensor $\mathbf{I}_2$, and its CM is at $\mathbf{r}_{cm,2}$ in the base frame.
*   The generalized coordinates are the joint angles: $q_1 = \theta_1$ and $q_2 = \theta_2$.

The position of the CM of link 1 in the base frame is $\mathbf{r}_{cm,1}(\theta_1)$.
The velocity of the CM of link 1 is $\mathbf{v}_{cm,1} = \frac{\partial \mathbf{r}_{cm,1}}{\partial \theta_1} \dot{\theta}_1$.
The angular velocity of link 1 is $\boldsymbol{\omega}_1 = \dot{\theta}_1 \mathbf{k}$ (where $\mathbf{k}$ is the unit vector along the z-axis for planar motion).

The position of the CM of link 2 in the base frame is $\mathbf{r}_{cm,2}(\theta_1, \theta_2)$.
The velocity of the CM of link 2 is $\mathbf{v}_{cm,2} = \frac{\partial \mathbf{r}_{cm,2}}{\partial \theta_1} \dot{\theta}_1 + \frac{\partial \mathbf{r}_{cm,2}}{\partial \theta_2} \dot{\theta}_2$.
The angular velocity of link 2 is $\boldsymbol{\omega}_2 = \dot{\theta}_1 \mathbf{k} + \dot{\theta}_2 \mathbf{k} = (\dot{\theta}_1 + \dot{\theta}_2) \mathbf{k}$.

The total kinetic energy would be:
$T = T_1 + T_2$
$T_1 = \frac{1}{2} m_1 \|\mathbf{v}_{cm,1}\|^2 + \frac{1}{2} \boldsymbol{\omega}_1^T \mathbf{I}_1 \boldsymbol{\omega}_1$
$T_2 = \frac{1}{2} m_2 \|\mathbf{v}_{cm,2}\|^2 + \frac{1}{2} \boldsymbol{\omega}_2^T \mathbf{I}_2 \boldsymbol{\omega}_2$

**Derivation Strategy:**
1.  **Kinematic Analysis:** Determine the position and orientation of the center of mass of each link as a function of the joint variables.
2.  **Velocity Analysis:** Differentiate these position and orientation descriptions with respect to time to find the linear and angular velocities of each link's CM. Express these velocities in terms of generalized coordinates and velocities ($\mathbf{q}$, $\dot{\mathbf{q}}$).
3.  **Kinetic Energy Calculation:** Substitute these velocities into the kinetic energy formula for each link. Summing these up gives the total kinetic energy of the manipulator.

---

## 4. Key Concepts and Definitions

*   **Lagrangian ($\mathcal{L}$):** $T - V$.
*   **Kinetic Energy ($T$):** Energy due to motion. For a rigid body, $T = \frac{1}{2} m \|\mathbf{v}_{cm}\|^2 + \frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{cm} \boldsymbol{\omega}$.
*   **Inertia Tensor ($\mathbf{I}_{cm}$):** A $3 \times 3$ matrix describing the mass distribution of a body relative to its center of mass and the rotational axes.
*   **Generalized Coordinates ($q_i$):** Independent variables defining the system's configuration (e.g., joint angles).
*   **Generalized Velocities ($\dot{q}_i$):** Time derivatives of generalized coordinates.
*   **Euler-Lagrange Equations:** The fundamental equations of motion derived from the Lagrangian.

---

## 5. Incorporating Textbook Content

*   **Schilling (1996):** Likely introduces the concept of robot dynamics and the need for equations of motion. May present Newtonian approaches initially before introducing Lagrangian methods as a more systematic approach for complex mechanisms.
*   **Craig (2002):** A foundational text. Chapter 7 "Introduction to Robot Dynamics" would be highly relevant, detailing the derivation of kinetic energy for individual links and then the total kinetic energy for a manipulator. It emphasizes the transformation of velocities and inertia tensors between different frames.
*   **Saha (McGraw Hill):** Will likely cover manipulator dynamics comprehensively, including the derivation of kinetic and potential energies, and their use in Lagrange's formulation.
*   **Mittal (2003):** Focuses on robotic manipulators, so it would dedicate significant attention to deriving the dynamic equations, including the kinetic energy expressions for various manipulator configurations.
*   **Ghosal (Oxford University Press):** Provides a rigorous treatment of robot dynamics, likely detailing the mathematical steps for computing kinetic energy using Jacobian transformations.
*   **Deb (Second Edition):** Covers both fundamental concepts and practical aspects of robotics, including dynamics and control.
*   **Siegwart & Roland (Second Edition):** Primarily focused on mobile robots, but the principles of dynamics and energy considerations can be transferable.

**Key points from these texts often emphasize:**
    *   The choice of reference frames for calculating velocities and inertia.
    *   The use of Jacobian matrices to relate joint velocities to end-effector velocities, and how these Jacobians are used for link velocities.
    *   The simplification of inertia tensors in principal axes.

---

## 6. Relation to Course Outcomes

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators.**
    *   The kinetic energy expression is a fundamental component required to build the **dynamic model** of a robot manipulator. The Euler-Lagrange equations, derived using the Lagrangian (which includes kinetic and potential energy), form the core of the dynamic model. This model is then used for controller design.
    *   **Knowledge Level: K4 (Analyze), K6 (Create).** We analyze the motion to derive the kinetic energy (K4) and then use this to form the dynamic equations (K6).

---

## 7. Practice Questions and Exercises

**Question 1:**
Consider a single rigid body of mass $m$ with its center of mass velocity $\mathbf{v}_{cm}$ and angular velocity $\boldsymbol{\omega}$. If the inertia tensor about the CM in the inertial frame is $\mathbf{I}_{cm}$, write down the expression for its total kinetic energy.

**Answer:**
The total kinetic energy $T$ is the sum of translational and rotational kinetic energies:
$T = \frac{1}{2} m \|\mathbf{v}_{cm}\|^2 + \frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{cm} \boldsymbol{\omega}$

**Question 2:**
For a 2-DOF planar manipulator with links of mass $m_1, m_2$ and inertias $I_1, I_2$ (scalar for planar rotation), derive the expression for the total kinetic energy $T$. Assume the links are slender rods of length $l_1, l_2$, and their centers of mass are at their midpoints. The joint angles are $\theta_1$ and $\theta_2$.

*(Hint: You will need to find the position and velocity of the center of mass of each link as a function of $\theta_1, \dot{\theta}_1, \theta_2, \dot{\theta}_2$.)*

**Answer (Conceptual Outline):**

1.  **Link 1:**
    *   CM position: $\mathbf{r}_{cm,1} = (\frac{l_1}{2} \cos\theta_1, \frac{l_1}{2} \sin\theta_1, 0)$
    *   CM velocity: $\mathbf{v}_{cm,1} = (-\frac{l_1}{2} \sin\theta_1 \dot{\theta}_1, \frac{l_1}{2} \cos\theta_1 \dot{\theta}_1, 0)$
    *   Angular velocity: $\boldsymbol{\omega}_1 = (0, 0, \dot{\theta}_1)$
    *   Inertia tensor for a rod about its CM (perpendicular to its plane): $I_{cm,1}$ (scalar).
    *   $T_1 = \frac{1}{2} m_1 \|\mathbf{v}_{cm,1}\|^2 + \frac{1}{2} I_{cm,1} \dot{\theta}_1^2$

2.  **Link 2:**
    *   Position of joint 2 (end of link 1): $\mathbf{p}_2 = (l_1 \cos\theta_1, l_1 \sin\theta_1, 0)$
    *   CM position of link 2 in frame of link 2: $(\frac{l_2}{2} \cos\theta_2, \frac{l_2}{2} \sin\theta_2, 0)$
    *   CM position of link 2 in base frame: $\mathbf{r}_{cm,2} = \mathbf{p}_2 + R_{z,\theta_1} R_{z,\theta_2} (\frac{l_2}{2}, 0, 0)^T$ (This is an oversimplification; a more accurate representation involves the transformation from frame 2 to frame 1, then frame 1 to base frame)
    *   A more direct way: The position of CM of link 2 is $\mathbf{r}_{cm,2} = (l_1 \cos\theta_1 + \frac{l_2}{2} \cos(\theta_1+\theta_2), l_1 \sin\theta_1 + \frac{l_2}{2} \sin(\theta_1+\theta_2), 0)$
    *   CM velocity: $\mathbf{v}_{cm,2} = \frac{\partial \mathbf{r}_{cm,2}}{\partial \theta_1} \dot{\theta}_1 + \frac{\partial \mathbf{r}_{cm,2}}{\partial \theta_2} \dot{\theta}_2$
    *   Angular velocity: $\boldsymbol{\omega}_2 = (0, 0, \dot{\theta}_1 + \dot{\theta}_2)$
    *   Inertia tensor for a rod about its CM (perpendicular to its plane): $I_{cm,2}$ (scalar).
    *   $T_2 = \frac{1}{2} m_2 \|\mathbf{v}_{cm,2}\|^2 + \frac{1}{2} I_{cm,2} (\dot{\theta}_1 + \dot{\theta}_2)^2$

3.  **Total Kinetic Energy:** $T = T_1 + T_2$.
    The full derivation involves detailed calculation of $\mathbf{v}_{cm,2}$ by differentiation, which results in a quadratic form in $\dot{\theta}_1$ and $\dot{\theta}_2$.

**Question 3:**
Why is the Lagrangian formulation preferred over Newtonian mechanics for robotic manipulators?

**Answer:**
Lagrangian formulation is preferred for robotic manipulators because:
*   It is systematic and less prone to errors when dealing with complex systems.
*   It naturally handles generalized coordinates, which are essential for describing the configuration of multi-DOF manipulators.
*   It directly leads to scalar equations, simplifying the derivation process.
*   It focuses on energy, providing a more abstract but powerful way to derive equations of motion.

---

## 8. Important Points to Remember

*   The kinetic energy of a rigid body is composed of **translational** and **rotational** components.
*   The total kinetic energy of a manipulator is the **sum of the kinetic energies of its individual links**.
*   To formulate the kinetic energy, you need to determine the **linear and angular velocities of the center of mass of each link** in terms of the robot's **generalized coordinates and velocities**.
*   **Kinematics** (both forward and differential) is a prerequisite for deriving the kinetic energy expression.
*   The **inertia tensor** is crucial for calculating rotational kinetic energy and is frame-dependent.
*   The kinetic energy expression will typically be a **quadratic function of the generalized velocities** ($\dot{q}_i$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 9. Further Reading and Study

*   Refer to Chapter 7 of John J. Craig's "Introduction to Robotics (Mechanics and Control)" for detailed derivations of kinetic energy for various link types and manipulator configurations.
*   Explore examples in Ashitava Ghosal's "Robotics-Fundamental concepts and analysis" that illustrate the process of calculating velocities using Jacobians.
*   For more complex scenarios involving articulated systems, consulting a textbook with advanced dynamics like "Modern Robotics Mechanics, Planning and Control" by Lynch and Park can be beneficial.

---

This concludes the notes on the Kinetic Energy Expression within Lagrange's Formulation for Manipulator Dynamics. Mastering this topic is a crucial step towards understanding and controlling robot manipulators.