---
title: "Experiment on Gyroscope"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446370e"
status: "completed"
scrapedAt: "2026-05-20T18:01:33.504Z"
---
# Mechanical Engineering Lab: Module 2 - Experiment on Gyroscope

## 1. Introduction to Gyroscopes

A gyroscope is a device used for measuring or maintaining orientation and angular velocity. It typically consists of a spinning rotor, also called a gyroscope wheel or rotor, mounted on a gimbals system that allows it to rotate freely in multiple directions. The principle behind its operation is the conservation of angular momentum.

**Key Concepts:**

*   **Angular Momentum ($\mathbf{H}$):** A vector quantity that represents the "quantity of rotation" of a body. It is defined as the product of the moment of inertia ($I$) and the angular velocity ($\boldsymbol{\omega}$):
    $\mathbf{H} = I \boldsymbol{\omega}$
    The direction of the angular momentum vector is along the axis of rotation.
*   **Moment of Inertia ($\mathbf{I}$):** A measure of an object's resistance to changes in its rotation. It depends on the mass of the object and how that mass is distributed relative to the axis of rotation. For a point mass $m$ at a distance $r$ from the axis, $I = mr^2$. For a rigid body, it's calculated by integrating $dm \cdot r^2$ over the entire body.
*   **Torque ($\mathbf{\tau}$):** A twisting force that tends to cause rotation. It is related to the change in angular momentum by:
    $\mathbf{\tau} = \frac{d\mathbf{H}}{dt}$
*   **Gyroscopic Couple (or Gyroscopic Effect):** When a spinning body experiences a torque perpendicular to its spin axis, its angular momentum vector changes direction, resulting in a precession motion. This precession is a consequence of the applied torque and the body's angular momentum.

**Textbook References:**

*   **Kinematics and Dynamics of Machinery by C.E.Wilson, P. Sadler:** This textbook provides a thorough foundation in the principles of kinematics and dynamics, including detailed explanations of angular momentum, moment of inertia, and the behavior of rotating bodies, which are crucial for understanding gyroscopes.
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering by W.Bolton:** While more focused on control systems, Bolton's text often introduces fundamental mechanical principles that underpin mechatronic devices. Understanding the mechanical aspects of a gyroscope is essential before delving into its mechatronic applications.

## 2. Principles of Gyroscopic Motion

The behavior of a gyroscope is governed by the laws of conservation of angular momentum and Newton's laws of motion applied to rotating bodies.

### 2.1 Precession

When a torque is applied to a spinning rotor, the angular momentum vector changes. If the torque is perpendicular to the angular momentum vector, the change in angular momentum is also perpendicular to the original angular momentum. This causes the angular momentum vector (and hence the spin axis) to change its direction, resulting in **precession**.

**Key Concepts:**

*   **Spin Velocity ($\mathbf{\omega_s}$):** The angular velocity of the rotor about its spin axis.
*   **Precession Velocity ($\mathbf{\omega_p}$):** The angular velocity of the spin axis about the precession axis.
*   **Torque due to Precession ($\mathbf{\tau}$):** The torque that causes precession is related to the spin velocity, precession velocity, and moment of inertia. For a symmetrical rotor with spin velocity $\omega_s$ and precession velocity $\omega_p$, and moment of inertia $I$ about the spin axis, the gyroscopic torque is given by:
    $\tau = I \omega_s \omega_p$
    This torque is perpendicular to both the spin axis and the precession axis.

**Example:** Imagine a spinning top. When you try to tilt its axis (applying a torque perpendicular to the spin axis), the top doesn't just fall; its axis also moves in a circular path around the vertical. This circular motion is precession.

### 2.2 Types of Precession

*   **Forced Precession:** Occurs when a torque is continuously applied to the spinning rotor. The precession velocity is directly proportional to the applied torque and inversely proportional to the angular momentum.
*   **Free Precession:** Occurs when a spinning rotor is disturbed and then allowed to move freely. The precession velocity depends on the initial disturbance and the rotor's properties.

### 2.3 Gyroscopic Effects in Engineering

The gyroscopic effect has significant implications in various engineering applications:

*   **Automobiles:** When a car turns, the wheels and engine rotate. This rotation can cause tilting effects. For example, when a car turns left, the gyroscopic effect of the wheels tends to make the car tilt to the right.
*   **Airplanes:** During turns, the propellers, engines, and wings experience gyroscopic forces that can affect the aircraft's stability and control.
*   **Ships:** The massive propellers of ships can generate significant gyroscopic forces, especially when the ship is steering or rolling.
*   **Spacecraft:** Gyroscopes are used for attitude control and stabilization of spacecraft.

**Textbook References:**

*   **Kinematics and Dynamics of Machinery by C.E.Wilson, P. Sadler:** This book extensively covers the mathematical formulation of precession and the analysis of gyroscopic forces in various mechanical systems, including vehicles and aircraft.
*   **Machines and Mechanisms Applied Kinematic Analysis by D.H.Myskza:** Myskza's work often provides practical examples and computational methods for analyzing the dynamics of machines, which would include gyroscopic effects in rotating components.

## 3. Experimental Setup and Procedure

The experiment on a gyroscope typically aims to demonstrate and quantify the gyroscopic effects, specifically the relationship between applied torque, spin speed, and precession speed.

### 3.1 Apparatus

A typical experimental setup for demonstrating gyroscopic effects would include:

*   **Gyroscope Wheel/Rotor:** A heavy disc mounted on an axle.
*   **Motor:** To spin the rotor at adjustable speeds.
*   **Gimbal System:** A set of pivoted supports that allow the rotor to rotate freely about multiple axes.
*   **Weight Pan/Weights:** To apply a known torque to the rotor.
*   **Speed Measuring Device:** Tachometer or stroboscope to measure the rotor's spin speed.
*   **Measurement Scales/Protractors:** To measure the angle of tilt or precession.

**Course Outcome Alignment:**

*   **CO1: Choose the appropriate instruments for different measurements:** This experiment requires choosing instruments like tachometers (for speed) and scales (for angles) to measure the relevant parameters.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation:** While not directly automation, understanding the control of rotational motion and its resulting forces is foundational to mechatronics and automation.

### 3.2 Procedure

1.  **Mount the Gyroscope:** Securely mount the gyroscope apparatus on a stable surface.
2.  **Spin the Rotor:** Start the motor and spin the rotor at a desired speed ($\omega_s$). Measure and record this speed.
3.  **Apply Torque:** Place a known weight on the weight pan attached to the gimbal system. This creates a torque ($\tau$) that tries to tilt the rotor. The torque is calculated as $\tau = W \times L$, where $W$ is the weight and $L$ is the lever arm.
4.  **Observe Precession:** The rotor will then start to precess. Measure and record the angular speed of precession ($\omega_p$). This can be done by timing how long it takes for the precession indicator to complete a full rotation or a specific number of degrees.
5.  **Vary Parameters:** Repeat steps 2-4 for different rotor speeds ($\omega_s$) and applied torques ($\tau$).
6.  **Record Data:** Tabulate all recorded values of spin speed, applied torque, and precession speed.

**Example Data Table:**

| Trial | Spin Speed ($\omega_s$) [rpm] | Rotor Inertia ($I$) [kg-m²] | Applied Torque ($\tau$) [Nm] | Precession Speed ($\omega_p$) [rpm] |
| :---- | :---------------------------- | :-------------------------- | :--------------------------- | :-------------------------------- |
| 1     | 500                           | [Value]                     | 0.1                          | [Measured]                        |
| 2     | 750                           | [Value]                     | 0.1                          | [Measured]                        |
| 3     | 1000                          | [Value]                     | 0.1                          | [Measured]                        |
| 4     | 750                           | [Value]                     | 0.2                          | [Measured]                        |
| 5     | 750                           | [Value]                     | 0.3                          | [Measured]                        |

**Important Point to Remember:** Ensure consistent units are used throughout the experiment and calculations. Angular velocities often need to be converted from RPM to rad/s for calculations using the formula $\tau = I \omega_s \omega_p$.
Conversion: $\omega [\text{rad/s}] = \omega [\text{rpm}] \times \frac{2\pi}{60}$

## 4. Calculations and Analysis

The collected data is used to verify the fundamental relationship between torque, spin speed, and precession speed.

### 4.1 Theoretical Relationship

From the principles of gyroscopic motion, the applied torque ($\tau$) is related to the angular momentum ($H = I \omega_s$) and the precession angular velocity ($\omega_p$) by:

$\tau = I \omega_s \omega_p$

Where:
*   $\tau$ is the applied torque (e.g., due to applied weight).
*   $I$ is the moment of inertia of the rotor about its spin axis.
*   $\omega_s$ is the angular velocity of the rotor (spin speed).
*   $\omega_p$ is the angular velocity of precession.

### 4.2 Experimental Verification

The experiment aims to show that for a constant moment of inertia ($I$):

*   **$\tau$ is directly proportional to $\omega_p$ (when $\omega_s$ is constant):** If you increase the applied torque, the precession speed should increase proportionally.
*   **$\tau$ is directly proportional to $\omega_s$ (when $\omega_p$ is constant):** To achieve the same precession speed, a higher spin speed requires a larger applied torque.
*   **$\omega_p$ is directly proportional to $\tau$ and inversely proportional to $\omega_s$:** $\omega_p = \frac{\tau}{I \omega_s}$

**Analysis Steps:**

1.  **Calculate Theoretical Precession Speed:** For each set of readings, calculate the theoretical precession speed using the measured $\tau$, $\omega_s$, and the known moment of inertia $I$ of the rotor:
    $\omega_{p, \text{theoretical}} = \frac{\tau}{I \omega_s}$
    Ensure units are consistent (e.g., Nm for torque, kg-m² for inertia, rad/s for speeds).
2.  **Compare with Measured Values:** Compare the calculated theoretical precession speed with the experimentally measured precession speed.
3.  **Plot Graphs:** Plot the following graphs to visualize the relationships:
    *   Applied Torque ($\tau$) vs. Measured Precession Speed ($\omega_p$) (for constant $\omega_s$)
    *   Measured Precession Speed ($\omega_p$) vs. Spin Speed ($\omega_s$) (for constant $\tau$)
    *   Product ($\omega_s \cdot \omega_p$) vs. Applied Torque ($\tau$) (expect a linear relationship passing through the origin)

**Interpreting Graphs:**

*   A linear plot of $\tau$ vs. $\omega_p$ passing through the origin confirms the direct proportionality.
*   A linear plot of $\omega_p$ vs. $\omega_s$ with a negative slope (or $\omega_p$ vs. $1/\omega_s$ with a positive slope) would confirm the inverse relationship.

**Course Outcome Alignment:**

*   **CO2: Determine dimensional and form accuracies of various components:** While not directly about dimensional accuracy, understanding the precision of the apparatus and the consistency of the results relates to measurement accuracy.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery:** This experiment directly contributes to understanding the dynamic behavior of rotating machinery, which is critical for mechanism design and analysis.

## 5. Learning Outcomes Addressed

This experiment on gyroscopes directly addresses the following learning outcomes:

*   **CO1: Choose the appropriate instruments for different measurements (Knowledge Level: K3):** Requires selecting and using tachometers, stopwatches, and possibly protractors to measure spin speed, precession rate, and angular displacement accurately.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3):** Understanding the gyroscopic effects is fundamental to analyzing the stability and dynamic behavior of rotating machinery like turbines, propellers, and vehicle components. This knowledge aids in designing mechanisms that account for or utilize these effects.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (Knowledge Level: K3):** While the experiment itself might not involve complex automation, the principles of controlling rotation and understanding the forces generated are foundational for mechatronic systems and automated machinery that involve rotating elements. For instance, robotic arms with spinning joints, or automated balancing systems.

## 6. Important Points to Remember

*   **Moment of Inertia (I):** Accurately knowing or calculating the moment of inertia of the rotor is crucial for theoretical calculations. For a solid disc, $I = \frac{1}{2} m r^2$. For a hollow cylinder, $I = \frac{1}{2} m (r_1^2 + r_2^2)$. The experiment might provide this value, or it might need to be calculated based on the rotor's geometry and mass.
*   **Units Consistency:** Always ensure that all units are consistent. Convert RPM to rad/s and ensure torques are in Nm, and inertia in kg-m² for calculations.
*   **Friction:** Friction in the gimbal bearings can affect the observed precession speed. Minimizing friction and accounting for it can improve accuracy.
*   **Direction of Precession:** The direction of precession depends on the direction of the spin and the direction of the applied torque. A right-hand rule can be used to determine the direction of angular momentum and the resulting precession.
*   **Applications:** Gyroscopes are not just theoretical concepts; they are vital in modern technology for stabilization (e.g., in cameras, aircraft), navigation (e.g., inertial navigation systems), and sensing (e.g., in smartphones, drones).

## 7. Practice Questions and Exercises

**Question 1:** A gyroscope rotor has a moment of inertia of $0.01$ kg-m². It spins at $1200$ rpm. If a torque of $0.5$ Nm is applied, causing it to precess, what is the angular velocity of precession in rad/s?

**Answer:**
First, convert spin speed from RPM to rad/s:
$\omega_s = 1200 \text{ rpm} \times \frac{2\pi}{60} \text{ rad/s} \approx 125.66 \text{ rad/s}$

Using the formula $\tau = I \omega_s \omega_p$:
$\omega_p = \frac{\tau}{I \omega_s}$
$\omega_p = \frac{0.5 \text{ Nm}}{(0.01 \text{ kg-m}^2)(125.66 \text{ rad/s})}$
$\omega_p \approx \frac{0.5}{1.2566} \text{ rad/s} \approx 0.3979 \text{ rad/s}$

**Question 2:** Explain how the gyroscopic effect can cause an airplane to turn more sharply when its nose is pitched up during a banked turn.

**Answer:**
When an airplane is in a banked turn and also pitching up (nose up), the engine (especially with propellers) and wings act as rotating masses. The combination of the banked turn (causing a torque around the roll axis) and the pitching motion (effectively changing the orientation of the spin axis relative to the applied forces) creates a gyroscopic couple. This couple can oppose the intended maneuver or add to it, depending on the directions of spin, torque, and precession. Specifically, if the propeller spins clockwise when viewed from the rear and the aircraft pitches up while turning left, the gyroscopic effect will tend to push the nose down and the tail up, making the turn sharper or more difficult to control.

**Question 3:** If you double the spin speed of a gyroscope while keeping the applied torque constant, how will the precession speed change? Justify your answer using the relevant formula.

**Answer:**
The relationship is given by $\omega_p = \frac{\tau}{I \omega_s}$.
If the spin speed $\omega_s$ is doubled to $2\omega_s$, and $\tau$ and $I$ remain constant, the new precession speed $\omega_{p\_new}$ will be:
$\omega_{p\_new} = \frac{\tau}{I (2\omega_s)} = \frac{1}{2} \left(\frac{\tau}{I \omega_s}\right) = \frac{1}{2} \omega_p$
Therefore, the precession speed will be halved.

**Question 4:** List three practical applications of gyroscopes in engineering.

**Answer:**
1.  **Aircraft Stabilization and Navigation:** Used in autopilots, attitude indicators, and inertial navigation systems.
2.  **Ship Stabilization:** Gyroscopic stabilizers can reduce the rolling motion of ships.
3.  **Consumer Electronics:** Found in smartphones and gaming consoles for motion sensing and orientation detection (e.g., accelerometers and gyroscopes work together).
4.  **Robotics:** Used for precise positioning and control of robotic arms and platforms.
5.  **Automotive:** Used in electronic stability control systems and navigation.

**Question 5:** How does the moment of inertia of the rotor affect the gyroscopic precession?

**Answer:**
From the formula $\omega_p = \frac{\tau}{I \omega_s}$, the precession speed ($\omega_p$) is inversely proportional to the moment of inertia ($I$), assuming torque ($\tau$) and spin speed ($\omega_s$) are constant. This means a rotor with a higher moment of inertia will precess at a slower rate for the same applied torque and spin speed compared to a rotor with a lower moment of inertia. This is because a larger moment of inertia indicates greater resistance to changes in angular velocity, and thus to the change in direction of the angular momentum vector.

This concludes the study notes for the Experiment on Gyroscope. Remember to consult the provided textbooks for more in-depth understanding and specific experimental details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
