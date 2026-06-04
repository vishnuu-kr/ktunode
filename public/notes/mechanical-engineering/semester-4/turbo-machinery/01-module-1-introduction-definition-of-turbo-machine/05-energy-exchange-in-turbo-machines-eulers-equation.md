---
title: "Energy exchange in Turbo machines: Euler’s equation"
subject: "TURBO MACHINERY"
module: "Module 1: Introduction: Definition of turbo machine"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463009"
status: "completed"
scrapedAt: "2026-05-20T17:57:15.390Z"
---
# TURBO MACHINERY: Module 1: Introduction: Definition of Turbo Machine

## Topic: Energy Exchange in Turbo Machines: Euler’s Equation

**Knowledge Level:** K3 (Applying)

**Learning Outcomes for this Topic:**

*   Understand the fundamental principle of energy exchange in turbo machines.
*   Derive and explain Euler's turbomachinery equation.
*   Apply Euler's equation to analyze energy transfer in various turbo machines.
*   Relate Euler's equation to the concept of work done by or on the fluid.

---

### 1. Introduction to Energy Exchange in Turbo Machines

**Definition of a Turbo Machine:**
A turbo machine is a device that transfers energy between a rotor and a flowing fluid by utilizing the principles of fluid mechanics and thermodynamics. This energy transfer can be from the fluid to the rotor (e.g., turbines) or from the rotor to the fluid (e.g., pumps, compressors, fans).

**Key Principle:** The core of a turbo machine's operation lies in the **exchange of energy** between the rotating component (rotor) and the fluid. This exchange manifests as a change in the fluid's mechanical energy, typically observed as changes in pressure, velocity, and elevation.

**Classification based on Energy Transfer:**

*   **Turbines (Power Generating):** Extract energy from a high-energy fluid and convert it into mechanical work, usually to drive a generator.
    *   *Examples:* Hydraulic turbines (Francis, Kaplan), Steam turbines, Gas turbines.
    *   *CO1 Alignment:* Understanding energy transfer is crucial for finding efficiencies of power-generating machines.
*   **Pumps/Compressors/Fans (Power Consuming):** Impart energy to a fluid, increasing its pressure, velocity, or both.
    *   *Examples:* Centrifugal pumps, Axial flow compressors, Centrifugal compressors, Ventilation fans.
    *   *CO1 Alignment:* Understanding energy transfer is crucial for finding efficiencies of power-consuming machines.
    *   *CO3 & CO4 Alignment:* Basic understanding of energy transfer is foundational for selecting appropriate machines.

**Mechanism of Energy Transfer:**
Energy is transferred through the **interaction of the fluid with the rotating blades of the rotor**. The relative motion between the fluid and the blades creates forces that do work on the fluid (compressors/pumps) or by the fluid on the blades (turbines).

---

### 2. Euler's Equation for Turbo Machines

**Concept:**
Euler's equation for turbo machines is a fundamental principle that quantifies the **theoretical work done per unit mass of fluid** by or on the rotor. It is derived from the principle of angular momentum and Newton's second law of motion applied to a rotating system.

**Derivation (Simplified Approach):**

Consider a fluid particle moving through a rotor with blades. The work done on the fluid is related to the torque exerted by the rotor on the fluid. Torque is force times lever arm. The force on the fluid is related to the change in momentum, and the lever arm is the radial distance.

From a control volume analysis, the rate of angular momentum change of the fluid is equal to the net external torque acting on the fluid.

**Euler's Turbomachinery Equation (General Form):**

The work done per unit mass of fluid by the rotor is given by:

$W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$

Where:
*   $W_{rotor/fluid}$ = Work done by the rotor on the fluid per unit mass (J/kg).
*   $u_1$ = Tangential velocity of the rotor at the inlet (m/s).
*   $v_{u1}$ = Tangential component of the absolute fluid velocity at the inlet (m/s). This is also known as the whirl velocity.
*   $u_2$ = Tangential velocity of the rotor at the outlet (m/s).
*   $v_{u2}$ = Tangential component of the absolute fluid velocity at the outlet (m/s). This is also known as the whirl velocity.

**Important Note:** This equation represents the *theoretical* work transfer. Actual work transfer will be less due to losses (friction, leakage, etc.).

**Sign Convention:**
*   **Positive $W_{rotor/fluid}$:** Work is done *by* the rotor *on* the fluid (e.g., pumps, compressors). The fluid gains energy.
*   **Negative $W_{rotor/fluid}$:** Work is done *by* the fluid *on* the rotor (e.g., turbines). The fluid loses energy.

---

### 3. Velocity Triangles and their Role

**Definition:**
Velocity triangles are graphical representations of the velocities of the fluid at the inlet and outlet of the rotor. They help visualize the components of velocity and their relationships.

**Components of Velocity:**

*   **Absolute Velocity ($v$):** Velocity of the fluid as observed by a stationary observer.
*   **Relative Velocity ($v_r$):** Velocity of the fluid as observed by an observer moving with the rotor blade.
*   **Blade Velocity ($u$):** Tangential velocity of the rotor at a specific radial location.

**Components of Absolute Velocity:**

*   **Radial Velocity ($v_r$ or $v_{f}$):** Component of absolute velocity in the radial direction.
*   **Tangential Velocity / Whirl Velocity ($v_u$):** Component of absolute velocity in the tangential direction.

**Euler's Equation in terms of Velocity Components:**

Euler's equation can be conveniently expressed using the components from the velocity triangles:

$W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$

*   **Inlet:** $u_1$ (tangential blade speed) and $v_{u1}$ (whirl velocity).
*   **Outlet:** $u_2$ (tangential blade speed) and $v_{u2}$ (whirl velocity).

**Significance of Whirl Velocity ($v_u$):**
The tangential component of absolute velocity ($v_u$) is crucial. It is the velocity component that interacts with the blade's tangential motion ($u$) to produce torque and thus work transfer.

**How Velocity Triangles help Apply Euler's Equation:**

*   Velocity triangles allow us to determine the whirl velocities ($v_{u1}$ and $v_{u2}$) based on the blade geometry, rotational speed, and flow conditions.
*   By knowing the radii at the inlet and outlet, we can calculate the blade speeds ($u_1$ and $u_2$).
*   With these values, Euler's equation can be directly applied to calculate the theoretical work transfer.

---

### 4. Energy Transfer and Head

**Relationship to Bernoulli's Equation:**
Euler's equation can be integrated with the steady flow energy equation (similar to Bernoulli's equation but accounting for work input/output) to determine the energy imparted to or extracted from the fluid.

The theoretical head developed by the rotor (per unit weight of fluid) is given by:

$H_{theoretical} = \frac{W_{rotor/fluid}}{g}$

Where:
*   $H_{theoretical}$ = Theoretical head (m).
*   $g$ = Acceleration due to gravity (m/s²).

So, $H_{theoretical} = \frac{u_2 v_{u2} - u_1 v_{u1}}{g}$

**Sign of Theoretical Head ($H_{theoretical}$):**
*   **Positive $H_{theoretical}$:** Head developed by the machine (e.g., pump, compressor). Fluid gains energy.
*   **Negative $H_{theoretical}$:** Head consumed by the machine (e.g., turbine). Fluid loses energy.

**Connection to Power:**
The theoretical power transferred is the work done per unit mass multiplied by the mass flow rate ($\dot{m}$):

$P_{theoretical} = \dot{m} \times W_{rotor/fluid} = \dot{m} \times (u_2 v_{u2} - u_1 v_{u1})$

If the fluid is incompressible, the volumetric flow rate is $Q = \frac{\dot{m}}{\rho}$, so:

$P_{theoretical} = \rho Q \times (u_2 v_{u2} - u_1 v_{u1})$

---

### 5. Examples and Applications

**Example 1: Centrifugal Pump (Power Consuming)**

*   **Objective:** To increase the pressure (head) of the fluid.
*   **Energy Transfer:** Rotor does work on the fluid. $W_{rotor/fluid} > 0$.
*   **Typical Velocity Triangle Scenario:**
    *   Inlet: Fluid enters radially, so $v_{u1} \approx 0$.
    *   Outlet: Blades are often curved backward (the most common design). This means the relative velocity ($v_{r2}$) is directed backward with respect to the blade's motion. The absolute velocity ($v_2$) has a tangential component ($v_{u2}$) that is typically less than the blade speed ($u_2$). The condition $v_{u2} < u_2$ is common, but the term $u_2 v_{u2}$ is positive.
*   **Euler's Equation:** $W_{rotor/fluid} = u_2 v_{u2} - u_1 \times 0 = u_2 v_{u2}$
    *   Since $u_2 > 0$ and $v_{u2} > 0$, the work done is positive, meaning energy is added to the fluid.

**Example 2: Axial Flow Turbine (Power Generating)**

*   **Objective:** To extract energy from a high-energy fluid.
*   **Energy Transfer:** Fluid does work on the rotor. $W_{rotor/fluid} < 0$.
*   **Typical Velocity Triangle Scenario:**
    *   Inlet: Fluid enters with a significant tangential component ($v_{u1}$) due to nozzle action. $u_1$ is the blade speed.
    *   Outlet: The fluid is directed such that its tangential velocity ($v_{u2}$) is reduced, often to near zero, or even in the opposite direction to the blade rotation. The term $u_2 v_{u2}$ will be smaller than $u_1 v_{u1}$, resulting in a negative work term.
*   **Euler's Equation:** $W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$
    *   Here, $v_{u1}$ is usually large and positive, and $v_{u2}$ is smaller (or even negative), leading to a negative value for $W_{rotor/fluid}$, indicating energy extraction.

**Example 3: Centrifugal Compressor (Power Consuming)**

*   **Objective:** To increase the pressure of a gas.
*   **Energy Transfer:** Rotor does work on the fluid. $W_{rotor/fluid} > 0$.
*   **Similar to pumps:** Euler's equation is $W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$. The primary purpose is to increase the enthalpy (and thus pressure) of the gas by imparting kinetic energy and then converting it to pressure energy in a diffuser.

---

### 6. Practice Questions

**Question 1:**
State Euler's turbomachinery equation and explain the meaning of each term. What is the sign convention for the work done?

**Question 2:**
A radial flow impeller has an inlet radius of 0.1 m and an outlet radius of 0.3 m. The inlet whirl velocity is negligible ($v_{u1} = 0$). The rotor rotates at 1200 rpm. At the outlet, the tangential component of the absolute fluid velocity is 20 m/s. Calculate the theoretical work done per unit mass of fluid by the rotor.

**Question 3:**
In a turbine stage, the inlet whirl velocity is 80 m/s and the rotor tangential speed is 50 m/s. At the outlet, the whirl velocity is 40 m/s and the rotor tangential speed is 30 m/s. Calculate the theoretical work done per unit mass of fluid by the rotor. What does the sign of the result indicate?

**Question 4:**
Explain how velocity triangles are used in conjunction with Euler's equation to analyze energy transfer in turbo machines.

---

### 7. Answers to Practice Questions

**Answer 1:**
Euler's turbomachinery equation is:
$W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$

*   $W_{rotor/fluid}$: Theoretical work done by the rotor on the fluid per unit mass (J/kg).
*   $u_1$: Tangential velocity of the rotor at the inlet (m/s).
*   $v_{u1}$: Tangential component of the absolute fluid velocity at the inlet (whirl velocity) (m/s).
*   $u_2$: Tangential velocity of the rotor at the outlet (m/s).
*   $v_{u2}$: Tangential component of the absolute fluid velocity at the outlet (whirl velocity) (m/s).

**Sign Convention:**
*   Positive $W_{rotor/fluid}$: Work done *by* the rotor *on* the fluid (e.g., pumps, compressors).
*   Negative $W_{rotor/fluid}$: Work done *by* the fluid *on* the rotor (e.g., turbines).

**Answer 2:**
Given:
$r_1 = 0.1$ m
$r_2 = 0.3$ m
$v_{u1} = 0$ m/s
N = 1200 rpm
$v_{u2} = 20$ m/s

Convert N to angular velocity $\omega$:
$\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 1200}{60} = 40\pi$ rad/s

Calculate blade speeds:
$u_1 = \omega r_1 = (40\pi) \times 0.1 = 4\pi$ m/s
$u_2 = \omega r_2 = (40\pi) \times 0.3 = 12\pi$ m/s

Apply Euler's equation:
$W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$
$W_{rotor/fluid} = (12\pi \text{ m/s}) \times (20 \text{ m/s}) - (4\pi \text{ m/s}) \times (0 \text{ m/s})$
$W_{rotor/fluid} = 240\pi$ J/kg

Using $\pi \approx 3.14159$:
$W_{rotor/fluid} \approx 240 \times 3.14159 \approx 753.98$ J/kg

**Answer:** The theoretical work done by the rotor on the fluid is approximately 753.98 J/kg.

**Answer 3:**
Given:
$v_{u1} = 80$ m/s
$u_1 = 50$ m/s
$v_{u2} = 40$ m/s
$u_2 = 30$ m/s

Apply Euler's equation:
$W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$
$W_{rotor/fluid} = (30 \text{ m/s}) \times (40 \text{ m/s}) - (50 \text{ m/s}) \times (80 \text{ m/s})$
$W_{rotor/fluid} = 1200 - 4000$
$W_{rotor/fluid} = -2800$ J/kg

**Answer:** The theoretical work done by the rotor on the fluid is -2800 J/kg. The negative sign indicates that work is done *by* the fluid *on* the rotor, which is characteristic of a turbine.

**Answer 4:**
Velocity triangles are graphical tools that represent the vector addition of velocities at the inlet and outlet of a turbo machine's rotor. They decompose the absolute velocity of the fluid ($v$) into its radial ($v_f$) and tangential ($v_u$) components, and also show the relative velocity ($v_r$) of the fluid with respect to the moving blade.

*   **Determining Whirl Velocities:** By constructing the velocity triangles for a given blade shape, rotational speed, and flow rate, we can accurately determine the whirl velocities ($v_{u1}$ and $v_{u2}$).
*   **Calculating Blade Speeds:** The radial dimensions ($r_1$, $r_2$) and rotational speed (N or $\omega$) of the rotor allow us to calculate the blade tangential speeds ($u_1 = \omega r_1$, $u_2 = \omega r_2$).
*   **Applying Euler's Equation:** Once $u_1$, $v_{u1}$, $u_2$, and $v_{u2}$ are known, Euler's equation ($W_{rotor/fluid} = u_2 v_{u2} - u_1 v_{u1}$) can be applied directly to calculate the theoretical work done per unit mass of fluid. This work transfer is the fundamental measure of energy exchange.

---

### 8. Important Points to Remember

*   **Energy Transfer is Key:** Turbo machines operate by transferring energy between the fluid and the rotating rotor.
*   **Euler's Equation:** This is the cornerstone for quantifying theoretical energy transfer.
*   **Whirl Velocity ($v_u$):** It's the tangential component of the absolute fluid velocity and is directly responsible for the work interaction with the rotor.
*   **Sign Convention:** Crucial for distinguishing between power consuming (positive work) and power generating (negative work) machines.
*   **Velocity Triangles:** Essential tools for obtaining the necessary velocity components ($v_{u1}, v_{u2}$) required for Euler's equation.
*   **Theoretical vs. Actual:** Euler's equation gives theoretical work. Actual work is always less due to losses.
*   **Head:** The work done per unit mass can be converted to head (energy per unit weight) by dividing by $g$.
*   **CO1 Alignment:** Understanding these concepts is fundamental to calculating the efficiencies of both turbines and pumps/compressors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References

*   **Dixon, S.I., Fluid Mechanics and Thermodynamics of Turbomachinery (Pergamom Press, 1999):** Provides a thorough theoretical background on energy transfer and Euler's equation, often with detailed derivations and examples. Look for chapters on momentum theory and energy equations.
*   **Venkanna, B.K., Fundamentals of Turbo Machinery (PHI Learning Pvt. Ltd, 1st Edition 2009):** Likely contains introductory material on definitions, classifications, and basic energy transfer principles, including Euler's equation, often with simpler examples.
*   **Yahya, S.H., Turbines, Compressor and Fans (Tata Mc Graw Hill,, 1996):** Will cover specific applications of Euler's equation to different types of turbo machines like turbines, compressors, and fans, highlighting how the velocity triangles vary.
*   **Gambini, M., Vellini, M., Turbomachinery – Fundamentals, Selection and Preliminary Design (Springer, 1st Edition, 2021):** Offers a modern perspective, likely integrating Euler's equation with design considerations and performance analysis.
*   **Dick, E., Fundamentals of Turbomachines (Springer, 2nd Edition 2022):** Provides a robust foundation, potentially with advanced treatment of Euler's equation in different contexts and its relation to fluid dynamics.

---
This concludes the study notes for Module 1: Introduction: Definition of Turbo Machine, Topic: Energy Exchange in Turbo Machines: Euler’s Equation.