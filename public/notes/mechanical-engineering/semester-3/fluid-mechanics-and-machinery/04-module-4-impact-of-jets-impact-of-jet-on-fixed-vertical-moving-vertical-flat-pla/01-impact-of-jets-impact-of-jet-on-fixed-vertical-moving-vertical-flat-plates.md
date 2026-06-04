---
title: "Impact of jets: Impact of jet on fixed vertical, moving vertical flat plates."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 4: Impact of jets: Impact of jet on fixed vertical, moving vertical flat plates."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d27"
status: "completed"
scrapedAt: "2026-05-20T17:49:30.001Z"
---
# Fluid Mechanics and Machinery - Module 4: Impact of Jets

## Topic: Impact of Jet on Fixed Vertical and Moving Vertical Flat Plates

### 1. Introduction

This module delves into the crucial concept of the **impact of jets**, which is fundamental to understanding the working principles of various hydraulic machinery, most notably **turbines**. When a fluid jet strikes a surface, it exerts a force. Analyzing this force is vital for designing efficient systems. We will focus on the impact of a jet on two specific scenarios:

*   **Fixed Vertical Flat Plates:** Where the plate is stationary and perpendicular to the jet's direction.
*   **Moving Vertical Flat Plates:** Where the plate is moving relative to the jet.

This topic directly contributes to **CO2** by applying the principles of dynamics (Newton's laws of motion) to analyze the force exerted by the fluid.

### 2. Key Concepts and Definitions

*   **Jet:** A stream of fluid flowing from an opening (nozzle) with a definite velocity and cross-sectional area.
*   **Impact Force:** The force exerted by a moving fluid jet on a surface due to the change in momentum of the fluid.
*   **Momentum:** The product of mass and velocity of a fluid.
*   **Rate of Change of Momentum:** Directly proportional to the force exerted, as per Newton's second law of motion.
*   **Angle of Deflection:** The angle through which the jet is turned after striking the surface.

### 3. Impact of Jet on a Fixed Vertical Flat Plate

This is the simplest case. A jet of fluid strikes a flat plate held vertically and perpendicular to the direction of the jet.

#### 3.1 Analysis

Let:
*   $\rho$ be the density of the fluid (e.g., water).
*   $A$ be the cross-sectional area of the jet.
*   $V$ be the velocity of the jet striking the plate.
*   $m$ be the mass flow rate of the fluid.

The **mass flow rate** ($m$) is given by:
$m = \rho \times (\text{Volume flow rate}) = \rho \times (A \times V)$

According to Newton's second law of motion, Force = Rate of change of momentum.

*   **Momentum of the jet before striking the plate:** $m \times V = (\rho A V) \times V = \rho A V^2$

When the jet strikes the fixed vertical flat plate, it is deflected by 90 degrees (radially outwards in all directions). Assuming no loss of velocity due to impact (ideal case), the velocity component perpendicular to the plate becomes zero after striking.

*   **Momentum of the jet after striking the plate:** The mass flow rate remains the same, but the velocity component perpendicular to the original direction of the jet is zero. Therefore, the momentum in the original direction of the jet is zero.

*   **Change in Momentum (per unit time):**
    $\Delta p = (\text{Momentum of fluid leaving}) - (\text{Momentum of fluid entering})$
    $\Delta p = 0 - (\rho A V^2)$
    $\Delta p = -\rho A V^2$

The force exerted by the jet on the plate ($F_x$) is equal in magnitude and opposite in direction to the rate of change of momentum.

*   **Force exerted by the jet on the plate ($F_x$):**
    $F_x = - (\Delta p / \Delta t) = - (- \rho A V^2) = \rho A V^2$

The force exerted by the plate on the jet is $-\rho A V^2$. By Newton's third law, the force exerted by the jet on the plate is $\rho A V^2$.

#### 3.2 Example

A jet of water with a diameter of 5 cm strikes a flat plate held vertically at a velocity of 20 m/s. Calculate the force exerted by the jet on the plate.

*   **Given:**
    *   Diameter ($D$) = 5 cm = 0.05 m
    *   Radius ($r$) = $D/2 = 0.025$ m
    *   Velocity ($V$) = 20 m/s
    *   Density of water ($\rho$) $\approx 1000 \, \text{kg/m}^3$

*   **Calculations:**
    *   Area of the jet ($A$) = $\pi r^2 = \pi (0.025)^2 = 0.0019635 \, \text{m}^2$
    *   Force ($F_x$) = $\rho A V^2$
    *   $F_x = 1000 \, \text{kg/m}^3 \times 0.0019635 \, \text{m}^2 \times (20 \, \text{m/s})^2$
    *   $F_x = 1000 \times 0.0019635 \times 400 \, \text{N}$
    *   $F_x = 785.4 \, \text{N}$

#### 3.3 Important Points to Remember (Fixed Vertical Flat Plate)

*   The jet is assumed to be deflected radially outwards in all directions.
*   The force is calculated based on the change in momentum of the fluid.
*   In an ideal scenario, the velocity of the jet remains constant after striking the plate, only changing direction.

### 4. Impact of Jet on a Moving Vertical Flat Plate

Now, consider a jet of fluid striking a flat plate that is moving in a direction parallel to the jet's original direction.

#### 4.1 Analysis

Let:
*   $\rho$ be the density of the fluid.
*   $A$ be the cross-sectional area of the jet.
*   $V$ be the velocity of the jet relative to the stationary ground.
*   $u$ be the velocity of the plate moving away from the jet.

The **velocity of the jet relative to the plate** is the difference between the jet's velocity and the plate's velocity:
*   $V_{rel} = V - u$

The **mass flow rate** of the fluid striking the plate remains the same, assuming the jet continues to strike the plate. However, the *effective* mass flow rate that is being deflected is considered relative to the moving plate.

*   **Mass flow rate ($m$):**
    $m = \rho \times (\text{Volume flow rate}) = \rho \times (A \times V)$

*   **Momentum of the jet before striking the plate (relative to the plate):**
    The momentum of the fluid approaching the plate with velocity $V$ relative to the ground, and the plate moving with velocity $u$, means the fluid effectively approaches the plate with a relative velocity of $(V-u)$.
    Momentum before = $m \times (V - u) = (\rho A V) \times (V - u)$

When the jet strikes the moving vertical flat plate, it is deflected by 90 degrees. Assuming no loss of velocity relative to the plate, the velocity component perpendicular to the plate becomes zero after striking.

*   **Momentum of the jet after striking the plate (relative to the plate):**
    The fluid leaves the plate with zero velocity relative to the plate.
    Momentum after = $m \times 0 = 0$

*   **Change in Momentum (per unit time) relative to the plate:**
    $\Delta p_{rel} = (\text{Momentum after}) - (\text{Momentum before})$
    $\Delta p_{rel} = 0 - (\rho A V)(V - u)$
    $\Delta p_{rel} = -\rho A V (V - u)$

The **force exerted by the jet on the plate ($F_x$)** is the rate of change of momentum. This force is calculated from the perspective of the stationary observer.

*   **Force exerted by the jet on the plate ($F_x$):**
    $F_x = \frac{\text{Rate of change of momentum}}{\text{Time}}$
    $F_x = \rho A (V - u)^2$

This is the force required to change the momentum of the fluid relative to the moving plate.

**Alternative perspective (using absolute velocities):**

Let's consider the force from the perspective of the stationary ground.
*   **Momentum of the jet entering:** $\rho A V^2$
*   **Momentum of the jet leaving:** The jet leaves the plate radially, but the component of velocity in the original direction of the jet is essentially zero after being deflected by 90 degrees. However, to be more precise, consider the mass flow rate of fluid that is deflected. The mass flow rate striking the plate is $\rho AV$. The plate is moving with velocity $u$. The fluid leaving the plate effectively has no momentum in the original direction of the jet.

Using the impulse-momentum principle on the control volume encompassing the jet and the plate:
The rate of momentum entering the control volume in the x-direction (direction of the jet) is $\rho A V^2$.
The rate of momentum leaving the control volume in the x-direction is zero, as the fluid is deflected radially.

However, the force exerted by the plate on the fluid is responsible for this change in momentum. Let $F_{plate\_on\_jet}$ be the force exerted by the plate on the jet.
$F_{plate\_on\_jet} = \rho A (V_{exit,x} - V_{entry,x})$
Assuming the jet leaves the plate with zero velocity in the x-direction:
$F_{plate\_on\_jet} = \rho A (0 - V) = -\rho A V^2$

This is the force exerted *by the plate on the jet*. The force exerted *by the jet on the plate* is $F_{jet\_on\_plate} = -F_{plate\_on\_jet} = \rho A V^2$.

This seems inconsistent with the previous derivation. Let's re-examine the concept of force for a moving object.

The force exerted by the jet on the moving plate is the rate at which momentum is transferred to the plate.
The momentum of the fluid striking the plate per unit time is $\rho A V^2$.
The plate is moving with velocity $u$.
The force required to do work on the plate at velocity $u$ is related to the rate of change of kinetic energy or momentum.

Let's use the principle that the force exerted by the jet on the plate is equal to the rate of change of momentum of the fluid stream relative to the plate.
*   Momentum per unit time entering the control volume relative to the plate = $\rho A (V-u) \times (V-u) = \rho A (V-u)^2$.
*   Momentum per unit time leaving the control volume relative to the plate = 0 (assuming ideal deflection).
*   Therefore, the force exerted by the jet on the plate = $\rho A (V-u)^2$.

This formula is widely accepted for a jet striking a moving flat plate. It represents the force due to the deflection of the fluid's momentum relative to the plate.

**Important Note on Power:**
The power delivered to the moving plate is the force exerted on the plate multiplied by the velocity of the plate.
*   **Power ($P$):** $P = F_x \times u = \rho A (V-u)^2 \times u$

This power is derived from the kinetic energy of the jet. The power of the incoming jet is $\frac{1}{2} m V^2 = \frac{1}{2} (\rho A V) V^2 = \frac{1}{2} \rho A V^3$.

#### 4.2 Example

A jet of water with a velocity of 30 m/s and a cross-sectional area of $0.002 \, \text{m}^2$ strikes a flat plate moving at a velocity of 15 m/s in the same direction as the jet. Calculate the force exerted by the jet on the plate and the power delivered to the plate.

*   **Given:**
    *   Jet velocity ($V$) = 30 m/s
    *   Area of jet ($A$) = $0.002 \, \text{m}^2$
    *   Plate velocity ($u$) = 15 m/s
    *   Density of water ($\rho$) $\approx 1000 \, \text{kg/m}^3$

*   **Calculations:**
    *   Relative velocity ($V_{rel}$) = $V - u = 30 - 15 = 15 \, \text{m/s}$
    *   Force ($F_x$) = $\rho A (V-u)^2$
    *   $F_x = 1000 \, \text{kg/m}^3 \times 0.002 \, \text{m}^2 \times (15 \, \text{m/s})^2$
    *   $F_x = 1000 \times 0.002 \times 225 \, \text{N}$
    *   $F_x = 450 \, \text{N}$

    *   Power ($P$) = $F_x \times u$
    *   $P = 450 \, \text{N} \times 15 \, \text{m/s}$
    *   $P = 6750 \, \text{Watts}$ or $6.75 \, \text{kW}$

#### 4.3 Important Points to Remember (Moving Vertical Flat Plate)

*   The force is proportional to the square of the *relative* velocity between the jet and the plate.
*   The power delivered to the plate is the force multiplied by the plate's velocity.
*   The force is maximum when $u=0$ (fixed plate) if the jet velocity $V$ is the same.
*   As the plate velocity $u$ approaches the jet velocity $V$, the force exerted by the jet approaches zero.

### 5. Relation to Course Outcomes

*   **CO1 (Fluid Properties, Pressure, Hydrostatic Forces):** While not directly calculating hydrostatic forces, understanding density ($\rho$) is crucial. The concept of pressure is implicitly linked to the force exerted by the fluid.
*   **CO2 (Fluid Flow Classification, Kinematics, Dynamics, Conservation of Mass and Momentum):** This entire module directly applies the **conservation of momentum** (Newton's second law) to analyze the forces. It also deals with the **dynamics** of the fluid.
*   **CO5 (Select Suitable Turbo Machine):** The principles discussed here are foundational to understanding how water turbines (like Pelton turbines) work. The impact of a jet on a moving surface is the core mechanism that drives the turbine.

### 6. Practice Questions and Exercises

**Question 1:**
A jet of water with a diameter of 7.5 cm strikes a fixed vertical plate normally. If the velocity of the jet is 30 m/s, what is the force exerted on the plate?
(Assume $\rho = 1000 \, \text{kg/m}^3$)

**Answer 1:**
*   Diameter ($D$) = 7.5 cm = 0.075 m
*   Radius ($r$) = 0.0375 m
*   Area ($A$) = $\pi r^2 = \pi (0.0375)^2 \approx 0.004418 \, \text{m}^2$
*   Velocity ($V$) = 30 m/s
*   Force ($F_x$) = $\rho A V^2 = 1000 \times 0.004418 \times (30)^2 = 1000 \times 0.004418 \times 900 = 3976.2 \, \text{N}$

**Question 2:**
A jet of water with a velocity of 25 m/s strikes a moving flat plate. The plate is moving at 10 m/s in the same direction as the jet. If the cross-sectional area of the jet is $0.003 \, \text{m}^2$, calculate:
a) The force exerted by the jet on the plate.
b) The power delivered to the plate.

**Answer 2:**
*   Jet velocity ($V$) = 25 m/s
*   Plate velocity ($u$) = 10 m/s
*   Area ($A$) = $0.003 \, \text{m}^2$
*   Density ($\rho$) = $1000 \, \text{kg/m}^3$

a) Force ($F_x$) = $\rho A (V-u)^2 = 1000 \times 0.003 \times (25-10)^2 = 1000 \times 0.003 \times (15)^2 = 3 \times 225 = 675 \, \text{N}$

b) Power ($P$) = $F_x \times u = 675 \, \text{N} \times 10 \, \text{m/s} = 6750 \, \text{Watts}$ or $6.75 \, \text{kW}$

**Question 3:**
A jet of water having a velocity of 40 m/s and a diameter of 5 cm is deflected by a flat plate moving with a velocity of 20 m/s in the direction of the jet. Determine the force exerted on the plate and the power transmitted.

**Answer 3:**
*   Jet velocity ($V$) = 40 m/s
*   Diameter ($D$) = 5 cm = 0.05 m
*   Radius ($r$) = 0.025 m
*   Area ($A$) = $\pi r^2 = \pi (0.025)^2 \approx 0.0019635 \, \text{m}^2$
*   Plate velocity ($u$) = 20 m/s
*   Density ($\rho$) = $1000 \, \text{kg/m}^3$

*   Force ($F_x$) = $\rho A (V-u)^2 = 1000 \times 0.0019635 \times (40-20)^2 = 1000 \times 0.0019635 \times (20)^2 = 1000 \times 0.0019635 \times 400 = 785.4 \, \text{N}$

*   Power ($P$) = $F_x \times u = 785.4 \, \text{N} \times 20 \, \text{m/s} = 15708 \, \text{Watts}$ or $15.708 \, \text{kW}$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Textbook and Reference Material Integration

*   **Cengel & Cimbala:** These texts usually cover the fundamental principles of momentum analysis and Newton's second law in fluid mechanics, which are directly applicable here. You'll find discussions on control volume analysis and impulse-momentum theorem.
*   **Som & Ghosh:** Similar to Cengel, Som's book will provide detailed derivations of forces exerted by fluid jets, likely including specific examples for flat plates.
*   **Bansal:** Bansal's book is known for its comprehensive coverage of fluid mechanics and hydraulic machines, making it an excellent resource for understanding jet impact on stationary and moving surfaces in the context of turbomachinery.
*   **White:** White's "Fluid Mechanics" is a classic text that offers rigorous theoretical treatment of momentum principles.
*   **Fisher & Henly:** This reference might provide more practical engineering applications and design considerations related to jet impacts.

The core formulas derived ($\rho A V^2$ for fixed plates and $\rho A (V-u)^2$ for moving plates) are standard results found across all these authoritative texts. The emphasis on the impulse-momentum theorem as the basis for these calculations is consistent.

### 8. Summary

The impact of jets on flat plates is a fundamental concept in fluid mechanics, crucial for understanding the operation of hydraulic machinery. The force exerted by a jet on a surface is determined by the rate of change of momentum of the fluid.

*   For a **fixed vertical flat plate**, the force is $F_x = \rho A V^2$.
*   For a **moving vertical flat plate** (moving at velocity $u$ in the direction of the jet), the force is $F_x = \rho A (V-u)^2$.

These principles form the basis for designing efficient energy transfer systems involving fluid jets.