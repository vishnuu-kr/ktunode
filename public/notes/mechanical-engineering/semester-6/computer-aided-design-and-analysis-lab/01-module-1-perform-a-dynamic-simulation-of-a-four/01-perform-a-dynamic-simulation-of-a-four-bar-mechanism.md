---
title: "Perform a dynamic simulation of a four-bar mechanism."
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 1: Perform a dynamic simulation of a four"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c17"
status: "completed"
scrapedAt: "2026-05-20T18:03:40.851Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS LAB

## Module 1: Perform a Dynamic Simulation of a Four-Bar Mechanism

### Topic: Perform a Dynamic Simulation of a Four-Bar Mechanism

---

### 1. Introduction to Mechanisms and Four-Bar Mechanisms

*   **Mechanism:** A mechanical system that transmits or modifies motion and force. It typically consists of rigid bodies (links) connected by joints.
*   **Four-Bar Mechanism:** A fundamental planar mechanism composed of four links connected by four one-degree-of-freedom joints.
    *   **Fixed Link (Frame/Ground):** A stationary link.
    *   **Input Link (Crank):** Driven by an external power source, usually rotating.
    *   **Coupler Link:** Connects the input link to the output link.
    *   **Output Link (Rocker):** The link that performs the desired output motion.

*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a mechanism. For a planar mechanism, Grubler's criterion can be used:
    $DOF = 3(n-1) - 2j_1 - j_2$
    Where:
    *   $n$ = number of links
    *   $j_1$ = number of 1-DOF joints (e.g., revolute, prismatic)
    *   $j_2$ = number of 2-DOF joints (e.g., pin-in-slot)

    For a four-bar mechanism: $n=4$, $j_1=4$ (all revolute joints).
    $DOF = 3(4-1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1$
    This confirms that a four-bar mechanism has one degree of freedom, meaning its motion is determined by the motion of a single input link.

*   **Importance:** Four-bar mechanisms are ubiquitous in engineering applications for generating various types of motion (e.g., linkages in engines, robotic arms, pantographs, windshield wipers). Understanding their dynamic behavior is crucial for design and performance analysis.

---

### 2. Kinematic Analysis vs. Dynamic Analysis

*   **Kinematic Analysis:** Focuses on the geometry of motion, describing the position, velocity, and acceleration of each link without considering the forces causing the motion.
    *   **Key Outputs:** Displacement, velocity, acceleration of links.
    *   **Methods:** Vector loop equations, complex numbers, analytical geometry.

*   **Dynamic Analysis:** Considers the forces and torques acting on the mechanism, along with its mass properties, to determine the motion. It accounts for inertia forces, gravity, friction, and applied loads.
    *   **Key Outputs:** Forces in links (joint forces), torques required for input motion, vibration analysis.
    *   **Methods:** Newton-Euler equations, Lagrangian mechanics, energy methods.

---

### 3. Dynamic Simulation of a Four-Bar Mechanism

Dynamic simulation involves using software to model the physical properties of the mechanism and then analyzing its behavior under specific input conditions.

#### 3.1. Key Concepts in Dynamic Simulation

*   **Mass Properties:** Each link needs to be assigned mass, center of mass, and moments of inertia. This is often derived from the geometry of the link and its material properties.
    *   **Mass ($m$):** Total mass of the link.
    *   **Center of Mass (CoM):** The average location of the mass of the link.
    *   **Moment of Inertia ($I$):** A measure of a rigid body's resistance to angular acceleration about an axis. For planar motion, this is often $I_{xx}$ or $I_{yy}$ about the CoM.

*   **Joints and Constraints:** The connections between links are modeled as joints that allow specific types of relative motion.
    *   **Revolute Joint:** Allows rotation about a single axis (e.g., pin joints).
    *   **Constraints:** Mathematical equations that define the relationships between the positions and orientations of connected bodies due to the joints.

*   **Input Motion:** The type of motion applied to the input link. This is typically a prescribed angular velocity or angular acceleration.

*   **Forces and Torques:**
    *   **Gravitational Force:** Acts on the center of mass of each link.
    *   **Inertial Forces:** Forces required to accelerate the mass of the links ($F = ma$).
    *   **Inertial Torques:** Torques required to accelerate the rotation of the links ($T = I\alpha$).
    *   **Applied Forces/Torques:** External forces or torques applied to the mechanism.
    *   **Friction:** Can be modeled at joints (e.g., Coulomb friction, viscous friction).

*   **Equations of Motion:** These are the mathematical equations that describe the dynamic behavior of the mechanism. They are typically derived using Newton-Euler or Lagrangian methods and are often solved numerically by the simulation software.

#### 3.2. Steps for Performing a Dynamic Simulation in CAD/CAE Software

The exact steps may vary slightly depending on the software (e.g., SolidWorks Motion, Creo Simulate, CATIA V5 Motion Analysis, ANSYS Motion), but the general workflow is as follows:

1.  **Model Creation (CAD):**
    *   Design each link as a separate part in your CAD software.
    *   Ensure accurate geometry and material assignment.
    *   Define appropriate material properties (density, Young's modulus, Poisson's ratio – though density is critical for dynamic simulation).
    *   Assemble the links together, creating mates or constraints that represent the revolute joints. Ensure one link is fixed (ground).

    *   **Textbook Reference:**
        *   *Engineering Design with SolidWorks 2019* by Planchard and Planchard provides detailed guidance on part modeling, assembly creation, and defining mates which are foundational for setting up motion studies. Chapters on Assembly Modeling and Basic Motion Studies would be relevant.
        *   *Creo Parametric 6.0 for Engineers and Designers* by Sham Tickoo also covers assembly creation and the setup of mechanisms, which is a prerequisite for motion simulation.

2.  **Motion Study Setup:**
    *   **Activate Motion/Simulation Module:** Switch to the motion analysis environment within your CAD software.
    *   **Define Mechanism Type:** Specify that you are performing a motion analysis or dynamic simulation.
    *   **Select Input:** Choose the input link (e.g., the crank) and define its motion.
        *   **Type of Motion:** Constant angular velocity, variable angular velocity, prescribed angular position, or acceleration.
        *   **Input Value:** Specify the magnitude of velocity, position, or acceleration.

    *   **Apply Gravity:** Enable gravity if it's a significant factor in the mechanism's behavior. Define the direction and magnitude of gravity (e.g., -9.81 m/s² in the Y direction).

    *   **Assign Mass Properties (if not already done):** Although often done during part modeling, ensure mass, center of mass, and moments of inertia are correctly assigned to each link within the motion environment. The software will typically calculate these based on the geometry and assigned material density.

    *   **Analyze Dynamic Properties:** In many software packages, you'll need to explicitly tell the software to consider inertia or dynamic properties. This might involve selecting "Dynamic Analysis" or "Motion Analysis" as opposed to a simpler kinematic analysis.

3.  **Running the Simulation:**
    *   **Set Simulation Time:** Define the duration for which the simulation should run.
    *   **Set Frame Rate/Time Steps:** Higher frame rates or smaller time steps lead to more accurate results but longer computation times.
    *   **Execute Simulation:** Run the analysis. The software will numerically solve the equations of motion for the specified duration.

4.  **Results and Analysis:**
    *   **Visualize Motion:** Play back the animation to visually observe the mechanism's movement.
    *   **Plot Key Parameters:** Generate plots for:
        *   **Angular Displacement, Velocity, Acceleration:** For any link.
        *   **Linear Displacement, Velocity, Acceleration:** For points on any link.
        *   **Joint Forces:** Forces and torques at the revolute joints. This is critical for dynamic analysis.
        *   **Moment/Torque:** The torque required on the input link to maintain the specified motion.
    *   **Data Export:** Export simulation data for further analysis in other software (e.g., Excel, MATLAB).

---

### 4. Example: Dynamic Simulation of a Four-Bar Mechanism

**Scenario:** A four-bar mechanism with the following links:
*   **Link 1 (Ground):** Fixed.
*   **Link 2 (Crank):** Length $L_2 = 50$ mm. Rotates at a constant angular velocity of $\omega_2 = 10$ rad/s clockwise. Mass $m_2 = 0.1$ kg, CoM at the geometric center, $I_{C2} = 0.0001$ kg·m².
*   **Link 3 (Coupler):** Length $L_3 = 150$ mm. Mass $m_3 = 0.2$ kg, CoM at the geometric center, $I_{C3} = 0.0005$ kg·m².
*   **Link 4 (Rocker):** Length $L_4 = 100$ mm. Mass $m_4 = 0.15$ kg, CoM at the geometric center, $I_{C4} = 0.0003$ kg·m².

**Objective:** Determine the torque required on the crank to maintain this motion and the forces at the joints.

**Software Used (Illustrative - Assume SolidWorks Motion):**

1.  **Part Modeling:**
    *   Create three parts: `crank.sldprt`, `coupler.sldprt`, `rocker.sldprt`.
    *   Assign appropriate lengths.
    *   Assign material properties (e.g., Steel, Aluminium) which will define density.
    *   Save each part.

2.  **Assembly:**
    *   Create a new assembly `four_bar.sldasm`.
    *   Insert the three parts.
    *   Fix one link (e.g., `ground.sldprt` if created, or make one of the inserted links fixed in space).
    *   Create **Revolute Mates** between the links at their respective pivot points:
        *   Mate crank start point to ground pivot point.
        *   Mate crank end point to coupler start point.
        *   Mate coupler end point to rocker start point.
        *   Mate rocker end point to ground pivot point.
    *   Ensure the mates define the correct degrees of freedom for a four-bar mechanism.

3.  **Motion Study Setup:**
    *   Go to **SolidWorks Motion**.
    *   Select **Motion Analysis** (for dynamic simulation).
    *   **Gravity:** Activate gravity. Set direction (e.g., negative Y-axis) and magnitude (9.81 m/s²).
    *   **Motor:**
        *   Select the **Revolute Mate** for the crank.
        *   Choose **Rotary Motion**.
        *   Set **Speed** to $10$ rad/s. *Note: SolidWorks Motion uses positive for counter-clockwise, so if your simulation is clockwise, you might need -10 rad/s or adjust the mate's initial position.* Let's assume the mate is defined such that a positive speed results in counter-clockwise motion, so we'd need a negative speed for clockwise. Let's re-state the problem: $\omega_2 = 10$ rad/s counter-clockwise.
    *   **Mass Properties:** Verify that mass and CoM are correctly assigned to each part. If not, go back to Part mode, Edit Material, and ensure density is set. The assembly will sum these up.
    *   **Force/Torque:** The simulation will automatically calculate inertial forces and gravity effects. To find the input torque, we will query it later.

4.  **Running Simulation:**
    *   Set **End Time** (e.g., 2 seconds to capture a few rotations).
    *   Click **Calculate**.

5.  **Results Analysis:**
    *   **Animation:** Play the animation to see the movement.
    *   **Plots:**
        *   Create a plot for the **Angular Velocity** of the crank (Link 2). Verify it's close to 10 rad/s.
        *   Create a plot for the **Angular Velocity** of the rocker (Link 4).
        *   Create a plot for the **Torque** acting on the motor (crank's revolute mate). This will show the torque required to overcome inertial and gravitational effects. You'll likely see that the required torque varies throughout the cycle.
        *   To see joint forces, you might need to add **Contacts** between parts at the joints and then plot the reaction forces/torques. Alternatively, some software directly provides reaction forces for mates in motion analysis.

    *   **Example Output:** The torque plot for the crank might show a sinusoidal variation, peaking when the crank is near its vertical positions (maximum inertial torque due to angular acceleration and position relative to gravity).

---

### 5. Relevant Learning Outcomes and Course Outcomes

*   **Learning Outcome 1: Ability to use SolidWorks/Creo/CATIA/NX for designing mechanical components.**
    *   This topic directly addresses this by requiring the creation of parts and assemblies, which are the fundamental CAD operations.

*   **Learning Outcome 2: Ability to perform dynamic simulations of mechanical systems.**
    *   This is the core of the topic, focusing on setting up and running a dynamic simulation of a four-bar mechanism.

*   **Course Outcome CO1: Apply CAD and FEA tools to design and simulate mechanical systems.** (Knowledge Level: K3 - Application)
    *   We are applying CAD tools (modeling, assembly) to design the mechanism and then using simulation tools (motion analysis) to understand its behavior.

*   **Course Outcome CO2: Perform dynamic simulations of mechanical systems and analyze their kinematic behavior.** (Knowledge Level: K4 - Analysis)
    *   This directly maps to performing dynamic simulations and analyzing the results, which include kinematic quantities like velocity and acceleration, as well as dynamic quantities like forces and torques.

---

### 6. Important Points to Remember

*   **Accurate Modeling is Crucial:** The accuracy of the simulation heavily relies on the fidelity of your CAD model (dimensions, material properties, CoM location).
*   **Mass Properties Matter:** For dynamic simulations, mass, center of mass, and moments of inertia are essential inputs. Incorrect values will lead to incorrect results.
*   **Joint Definitions:** Ensure your mates accurately represent the intended joints (e.g., revolute joints for pin connections).
*   **Input Motion Specification:** Clearly define the input motion (e.g., constant angular velocity) and its direction.
*   **Gravity:** Don't forget to enable gravity if it's relevant to the mechanism's operation (e.g., mechanisms operating under gravity load).
*   **Units:** Be consistent with units throughout the modeling and simulation process.
*   **Interpretation of Results:** Understand what the plotted results (velocity, acceleration, torque, forces) represent and how they are influenced by the mechanism's configuration and parameters.

---

### 7. Practice Questions and Exercises

**Question 1:**
Describe the difference between kinematic and dynamic analysis of a mechanism. Which type of analysis would you perform to determine the power required to drive a mechanism at a certain speed? Explain why.

**Answer:**
Kinematic analysis describes the motion (position, velocity, acceleration) without considering forces. Dynamic analysis considers forces, mass properties, and torques to determine the motion. To determine the power required to drive a mechanism, you need to know the input torque and the input angular velocity. Torque is a result of dynamic forces (inertia, gravity, friction), so a **dynamic analysis** is required. Power is then calculated as $P = T \cdot \omega$.

---

**Question 2:**
A four-bar mechanism is to be simulated. If you are given the lengths of the links, their masses, and the location of their centers of mass, what additional information is critical for performing a *dynamic* simulation?

**Answer:**
For a dynamic simulation, besides the lengths, masses, and CoM locations, the following are critical:
1.  **Moments of Inertia:** Specifically, the moments of inertia of each link about their respective centers of mass. This determines how easily each link can be accelerated angularly.
2.  **Input Motion:** The prescribed motion of the input link (e.g., constant angular velocity, variable velocity, or a specific function of time).
3.  **Gravity:** The direction and magnitude of the gravitational acceleration if gravity is expected to influence the mechanism's behavior.
4.  **Joint Type:** Although typically revolute for a standard four-bar, confirming this is important.
5.  **(Optional) Friction:** If friction at the joints is to be considered.

---

**Question 3 (Conceptual/Software Task):**
Consider a four-bar mechanism where the crank rotates at a constant angular velocity.
(a) Sketch a typical four-bar mechanism and label its links.
(b) Describe how you would set up a motor to simulate a constant angular velocity input for the crank in CAD software.
(c) What results would you expect to see in the plot of the input torque over one full revolution? Explain the general shape of the curve.

**Answer:**
(a) [Sketch of a four-bar mechanism with links labeled: Ground, Crank, Coupler, Rocker, and revolute joints at the connections.]

(b) In CAD software (e.g., SolidWorks Motion), you would select the revolute mate connecting the crank to the ground. Then, you would apply a "Motor" feature to this mate. You would choose "Rotary Motion" and input the desired constant angular velocity (e.g., 10 rad/s) and direction.

(c) You would expect the input torque plot to be a curve that varies over one revolution. It will likely not be constant.
*   **General Shape:** The torque will generally be sinusoidal or have a shape related to the cosine of the crank angle (depending on the mechanism's geometry and gravity).
*   **Explanation:**
    *   **Inertial Torque:** Due to the acceleration of mass, there will be inertial forces and torques. As the crank rotates, the velocity and acceleration of the coupler and rocker change, leading to varying inertial torques on the crank. The crank will need to provide more torque when it needs to accelerate other links rapidly or overcome their inertia.
    *   **Gravitational Torque:** If gravity is active, the gravitational forces acting on the centers of mass of the links will create torques about the pivot points. This torque will also vary with the orientation of the links relative to the gravity vector. For instance, when the crank is vertical, gravity might help or hinder its rotation depending on the direction.
    *   **Combined Effect:** The resulting input torque will be a combination of these effects. The torque will likely be zero or minimal when the crank is at a position where gravity and inertial forces conveniently balance or require no effort to rotate. It will be maximal when the crank is fighting against the combined forces or needs to impart significant acceleration.

---

### 8. Software Specific Notes (General Guidance)

*   **SolidWorks Motion:** Focuses on using the "Motion Study" tab. You'll choose between "Frame Animate," "Reverse Animation," "Key Position Animation," or "Motion Analysis." For dynamic simulation, **Motion Analysis** is selected. Motors, springs, dampers, and gravity are applied here. Results are viewed via plots and animations.
*   **Creo Simulate (or Creo Mechanism Dynamics Option):** Within Creo Parametric, you often switch to the "Mechanism" tab. Here, you define motors, servos, springs, and then perform analysis. You can run a "Dynamic" analysis. Results are plotted against time or other parameters.
*   **CATIA V5:** Uses the "DMU Kinematics" workbench for kinematic and dynamic simulations. You'll define mechanisms, apply motors, and then compute the motion. The "Dynamic Analysis" option allows for force and torque calculations.
*   **ANSYS Motion:** A dedicated module for multibody dynamics. It allows for importing CAD geometry, defining contacts, joints, gravity, and applying motors. It offers advanced analysis capabilities, including fatigue and vibration.
*   **UG NX:** Uses the "Motion" or "Motion Simulation" module. Similar to others, you set up joints, apply motors, and run dynamic simulations.

**Textbook Cross-Reference:** While the provided textbooks are general, concepts like assembly constraints (Planchard & Planchard, Tickoo) and the physics of motion (relevant to Moaveni for FEA principles, though not direct CFD application here) underpin the setup for dynamic simulations. The process of defining a mechanism in CAD is the first step before applying dynamic analysis.

---

This detailed study note covers the fundamental aspects of performing a dynamic simulation of a four-bar mechanism, aligning with the provided learning outcomes and course objectives, and referencing the importance of CAD modeling as a prerequisite.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
