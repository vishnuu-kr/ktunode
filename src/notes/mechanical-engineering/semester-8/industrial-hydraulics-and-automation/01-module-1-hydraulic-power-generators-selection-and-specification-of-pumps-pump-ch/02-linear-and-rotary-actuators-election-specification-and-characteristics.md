---
title: "Linear and Rotary Actuators –election, specification and characteristics"
subject: "INDUSTRIAL HYDRAULICS AND AUTOMATION"
module: "Module 1: Hydraulic Power Generators – Selection and specification of pumps, pump characteristics."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446466f"
status: "completed"
scrapedAt: "2026-05-20T18:21:23.497Z"
---
# INDUSTRIAL HYDRAULICS AND AUTOMATION
## Module 1: Hydraulic Power Generators – Selection and Specification of Pumps, Pump Characteristics

### Topic: Linear and Rotary Actuators – Selection, Specification and Characteristics

---

### 1. Introduction to Hydraulic Actuators

Hydraulic actuators are devices that convert hydraulic energy (pressure and flow) into mechanical energy (linear or rotary motion). They are the "muscles" of a hydraulic system, performing work by moving loads. Understanding their selection, specification, and characteristics is crucial for designing and operating efficient hydraulic systems.

**Key Concepts:**
*   **Actuator:** A component that converts a control signal into mechanical motion.
*   **Hydraulic Actuator:** An actuator that uses pressurized hydraulic fluid to produce force and motion.
*   **Linear Actuator:** Produces straight-line motion.
*   **Rotary Actuator:** Produces rotational motion.

**Relation to Course Outcomes:**
*   **CO1 (K2):** Understanding the various components in an industrial hydraulic system. Actuators are fundamental components.
*   **CO3 (K3):** Designing simple hydraulic circuits. Proper selection of actuators is a prerequisite for circuit design.

**Referenced in:**
*   *Hydraulic and Pneumatics* by Andrew Parr (Jaico Publishing House) - Likely covers fundamental principles of actuators.
*   *Hydraulic systems: Principles and maintenance* by Majumdar, S. R. (Tata McGraw-Hill Education) - Will provide details on operation, selection, and maintenance.
*   *Fluid power circuits and controls: fundamentals and applications* by Cundiff, J. S. (CRC Press.) - Will contextualize actuators within system design and control.

---

### 2. Linear Actuators

Linear actuators are the most common type of hydraulic actuator, used to push, pull, lift, and lower loads in a straight line.

#### 2.1 Types of Linear Actuators

**2.1.1 Cylinders**

Cylinders are the workhorses of linear actuation. They consist of a cylinder barrel, a piston, and a piston rod. Fluid pressure acts on the piston to generate linear force and motion.

*   **Types of Cylinders:**
    *   **Single-Acting Cylinder:**
        *   **Operation:** Fluid pressure is applied to one side of the piston to extend the rod. Retraction is typically achieved by an external force (e.g., gravity, spring, or another cylinder).
        *   **Construction:** Has a single port for fluid entry.
        *   **Applications:** Clamping, lifting, pressing where return force is not critical or provided externally.
        *   **Example:** A hydraulic jack that lifts a vehicle.
        *   **Referenced in:** Parr, Majumdar, Cundiff (likely discuss basic cylinder types).

    *   **Double-Acting Cylinder:**
        *   **Operation:** Fluid pressure can be applied to either side of the piston, allowing for powered extension and retraction.
        *   **Construction:** Has two ports, one for extending the rod and one for retracting it.
        *   **Applications:** Most general-purpose linear actuation tasks, such as operating machine tools, excavators, and material handling equipment.
        *   **Example:** The boom cylinder on an excavator.
        *   **Referenced in:** Parr, Majumdar, Cundiff (standard components, extensive coverage).

    *   **Telescopic Cylinder:**
        *   **Operation:** Consists of multiple nested barrels that extend sequentially, providing a longer stroke from a shorter collapsed length.
        *   **Construction:** Multiple stages with internal seals.
        *   **Applications:** Where a long stroke is required in a compact retracted space, such as dump trucks or aircraft landing gear.
        *   **Referenced in:** Majumdar (maintenance and specific applications).

    *   **Differential Cylinder:**
        *   **Operation:** The rod is only on one side of the piston. The area on the rod side is smaller than the blind end side. This results in a higher retraction force and speed for the same flow rate and pressure.
        *   **Characteristics:** Extension force is greater than retraction force. Extension speed is slower than retraction speed.
        *   **Applications:** Applications requiring a strong push but a faster return, like hoists.
        *   **Referenced in:** Merritt (discusses hydraulic control systems and cylinder characteristics).

    *   **Non-Differential Cylinder (Tandem/Plunger Cylinder):**
        *   **Operation:** The rod is on one side of the piston, but the piston rod diameter is negligible compared to the piston diameter.
        *   **Characteristics:** Extension and retraction forces are nearly equal, and speeds are similar.
        *   **Applications:** General purpose applications where push and pull forces are similar.

**2.1.2 Screw Actuators (Linear Screw Jacks)**

*   **Operation:** Convert rotary motion from an electric motor or hydraulic motor into linear motion using a screw and nut mechanism.
*   **Types:**
    *   **Translating Screw:** The screw rotates, and the nut (and load) moves linearly.
    *   **Rotating Screw:** The nut is fixed, and the screw rotates, causing the load attached to the screw to move linearly.
*   **Advantages:** High mechanical advantage, self-locking capabilities (can hold position without constant hydraulic pressure), precise positioning.
*   **Disadvantages:** Lower speeds compared to cylinders, requires a rotary input.
*   **Applications:** Machine tools, lifting heavy loads slowly, positioning systems.
*   **Referenced in:** Parr (may discuss specific types).

#### 2.2 Selection of Linear Actuators

**Key Considerations:**

1.  **Force Requirement (Push/Pull):**
    *   Determine the maximum force needed to move the load during extension and retraction.
    *   **Formula:** Force (F) = Pressure (P) × Piston Area (A)
    *   **Important:** Always account for friction and safety factors.

2.  **Stroke Length:**
    *   The total distance the actuator rod needs to travel.

3.  **Speed Requirement:**
    *   Determine the desired speed of extension and retraction.
    *   **Formula:** Flow Rate (Q) = Piston Area (A) × Velocity (V)
    *   **Important:** Consider the available flow rate from the pump and the actuator's internal leakage.

4.  **Operating Pressure:**
    *   The maximum pressure the hydraulic system can safely provide. This influences the required bore size for a given force.

5.  **Mounting Style:**
    *   How the actuator will be attached to the machine (e.g., clevis mount, flange mount, foot mount). This affects load distribution and stability.

6.  **Environmental Conditions:**
    *   Temperature, presence of contaminants, corrosive environments can influence the choice of materials and seals.

7.  **Cost and Availability:**
    *   Balancing performance requirements with budget constraints.

**Example Scenario:**
A hydraulic press needs to exert a force of 10,000 N. The available system pressure is 20 MPa. What is the minimum required piston diameter?

*   **Calculation:**
    *   Force (F) = 10,000 N
    *   Pressure (P) = 20 MPa = 20 × 10⁶ N/m²
    *   Area (A) = F / P = 10,000 N / (20 × 10⁶ N/m²) = 0.0005 m²
    *   Area of a circle = π × (Diameter/2)²
    *   0.0005 m² = π × (D²/4)
    *   D² = (0.0005 m² × 4) / π ≈ 0.0006369 m²
    *   D ≈ √0.0006369 m² ≈ 0.0252 m = 25.2 mm

    *   **Important:** A standard cylinder bore size slightly larger than 25.2 mm (e.g., 32 mm) would be selected to accommodate friction and provide a margin of safety.

**Referenced in:**
*   Majumdar (practical selection criteria, maintenance impact).
*   Cundiff (how actuator selection impacts circuit design).

#### 2.3 Specification of Linear Actuators

When specifying a linear actuator, the following parameters are typically provided:

*   **Type:** Single-acting, double-acting, telescopic, etc.
*   **Bore Size:** The internal diameter of the cylinder barrel.
*   **Rod Diameter:** The diameter of the piston rod.
*   **Stroke Length:** The maximum travel distance.
*   **Mounting Type:** Clevis, flange, foot, etc.
*   **Pressure Rating:** The maximum continuous operating pressure.
*   **Seal Material:** Viton, Buna-N, etc., depending on fluid and temperature.
*   **Cushioning:** If it has internal cushioning to slow down the piston at the end of stroke.
*   **Ports:** Size and type of hydraulic connections.
*   **Temperature Range:** Operating temperature limits.

**Important Point to Remember:** The ratio of bore diameter to rod diameter significantly impacts the forces and speeds during extension and retraction for double-acting cylinders.

#### 2.4 Characteristics of Linear Actuators

**2.4.1 Force-Pressure Relationship**

*   **Extension Force:** F_ext = P × A_piston
*   **Retraction Force:** F_ret = P × (A_piston - A_rod)
    *   Where:
        *   F_ext = Extension Force
        *   F_ret = Retraction Force
        *   P = Hydraulic Pressure
        *   A_piston = Area of the piston (π × (Bore/2)²)
        *   A_rod = Area of the piston rod (π × (Rod/2)²)

**2.4.2 Speed-Flow Relationship**

*   **Extension Speed:** V_ext = Q / A_piston
*   **Retraction Speed:** V_ret = Q / (A_piston - A_rod)
    *   Where:
        *   V_ext = Extension Velocity
        *   V_ret = Retraction Velocity
        *   Q = Flow Rate supplied to the actuator port

**2.4.3 Efficiency**

*   **Volumetric Efficiency:** Accounts for internal leakage within the cylinder.
*   **Mechanical Efficiency:** Accounts for friction between the piston seals, rod seals, and rod packing.
*   **Overall Efficiency:** Product of volumetric and mechanical efficiency.
*   **Important:** Friction losses are higher at low speeds and low pressures.

**2.4.4 Cushioning**

*   **Purpose:** To absorb kinetic energy at the end of the stroke, preventing impact damage.
*   **Mechanism:** A restricted passage in the cylinder end cap gradually reduces the fluid flow as the piston approaches the end, slowing it down.
*   **Types:** Adjustable and non-adjustable.

**2.4.5 Leakage**

*   **Internal Leakage:** Fluid passing from the high-pressure side to the low-pressure side across seals. This reduces efficiency and can cause drift in the actuator.
*   **External Leakage:** Fluid escaping from the system to the atmosphere, a safety and environmental concern.

**Referenced in:**
*   Parr, Majumdar, Merritt, Watton (detailed analysis of these characteristics).

---

### 3. Rotary Actuators

Rotary actuators convert hydraulic energy into rotary motion (torque and angular displacement).

#### 3.1 Types of Rotary Actuators

*   **Vane Actuators:**
    *   **Operation:** A central rotor with vanes rotates within a chamber as hydraulic pressure acts on the vanes.
    *   **Characteristics:** Can provide limited rotation (typically up to 300 degrees), simple design, moderate torque.
    *   **Applications:** Valve actuation, material handling, steering mechanisms.
    *   **Referenced in:** Parr, Majumdar.

*   **Rack and Pinion Actuators:**
    *   **Operation:** A hydraulic cylinder with a piston rod coupled to a rack. The linear motion of the rack drives a pinion gear, producing rotary output.
    *   **Characteristics:** Can achieve full 360-degree rotation (if the rack is designed to wrap around), high torque, precise control.
    *   **Applications:** Steering systems, robotics, machine tools, paper mills.
    *   **Example:** The steering of a forklift.
    *   **Referenced in:** Parr, Majumdar, Cundiff.

*   **Screw Jacks (Rotary Input):**
    *   **Operation:** While often considered linear actuators in terms of output, they are driven by a rotary input (hydraulic motor).
    *   **Referenced in:** Parr (may categorize them differently).

*   **Hydraulic Motors (Axial Piston, Radial Piston, Gear Motors):**
    *   **Operation:** Essentially hydraulic pumps operated in reverse. They convert fluid flow and pressure into continuous rotary output (torque and speed).
    *   **Types:**
        *   **Gear Motors:** Simple, robust, good for higher speeds, lower torque.
        *   **Vane Motors:** Moderate torque and speed, relatively smooth operation.
        *   **Axial Piston Motors:** High efficiency, high torque, variable displacement possible, widely used in heavy-duty applications.
        *   **Radial Piston Motors:** High starting torque, good for low-speed, high-torque applications.
    *   **Applications:** Conveyor drives, vehicle propulsion, winches, mixers, machine tool spindles.
    *   **Referenced in:** Parr, Majumdar, Cundiff (as prime movers for rotary actuation).

#### 3.2 Selection of Rotary Actuators

**Key Considerations:**

1.  **Torque Requirement:**
    *   Determine the required torque for acceleration, continuous operation, and holding.
    *   **Formula:** Torque (T) = Force (F) × Radius (r) or T = Pressure (P) × Displacement (V_disp) / (2π)
    *   **Important:** Account for inertia of the load and any external resistive torques.

2.  **Speed Requirement:**
    *   The desired rotational speed (RPM).
    *   **Formula:** Flow Rate (Q) = Motor Displacement (V_disp) × Speed (RPM) × (2π / 60)

3.  **Rotation Angle:**
    *   For limited-angle actuators (vane, rack and pinion), the maximum angle of rotation is critical.
    *   For hydraulic motors, continuous rotation is typical.

4.  **Operating Pressure:**
    *   The maximum pressure the system can deliver.

5.  **Mounting Configuration:**
    *   How the actuator will be connected to the driven component.

6.  **Environmental Conditions:** Similar to linear actuators.

7.  **Cost and Availability.**

**Example Scenario:**
A conveyor belt needs to be rotated at 100 RPM, requiring a continuous torque of 500 Nm. The system pressure is 15 MPa. Select a suitable hydraulic motor.

*   **Considerations:**
    *   Need to look up hydraulic motor specifications (displacement, pressure rating, torque, speed).
    *   **Torque Calculation (for rough estimation):** A motor with a displacement of 100 cm³/rev (0.0001 m³/rev) at 15 MPa (15 x 10⁶ N/m²) would theoretically produce:
        *   Torque ≈ (15 x 10⁶ N/m² * 0.0001 m³/rev) / (2π) ≈ 239 Nm.
        *   This is insufficient. A larger displacement motor or higher pressure would be needed.
    *   **Speed Calculation (for rough estimation):** If a motor with 200 cm³/rev displacement is chosen:
        *   Q = 0.0002 m³/rev × 100 RPM × (2π / 60) ≈ 0.00209 m³/s = 2.09 L/s.
    *   **Actual Selection:** You would consult manufacturer catalogs for motors with sufficient torque output at the operating pressure and check if the required flow rate is available from the pump.

**Referenced in:**
*   Majumdar (practical selection, maintenance).
*   Cundiff (integration into control circuits).

#### 3.3 Specification of Rotary Actuators

When specifying a rotary actuator (especially a motor):

*   **Type:** Gear, vane, piston (axial/radial).
*   **Displacement:** Volume of fluid per revolution (e.g., cm³/rev or in³/rev).
*   **Maximum Torque:** Continuous and intermittent.
*   **Maximum Speed:** Continuous and intermittent.
*   **Pressure Rating:** Maximum continuous operating pressure.
*   **Shaft Type:** Keyed, splined, tapered.
*   **Port Size and Location.**
*   **Mounting Flange/Face.**
*   **Seal Material.**
*   **Rotation Direction (for non-reversible motors).**

#### 3.4 Characteristics of Rotary Actuators

*   **Torque-Pressure Relationship:** Torque is generally proportional to pressure for a given motor displacement.
*   **Speed-Flow Relationship:** Speed is generally proportional to flow rate for a given motor displacement.
*   **Efficiency:** Similar to linear actuators, volumetric and mechanical efficiencies are important. High starting torque is a desirable characteristic for many applications.
*   **Starting Torque:** The torque required to overcome static friction and inertia to begin rotation.
*   **Operating Range:** The range of pressures and flow rates over which the actuator can operate effectively.
*   **Variable Displacement:** Some hydraulic motors (especially axial piston) offer variable displacement, allowing for control of speed and torque by changing the motor's displacement.

**Referenced in:**
*   Parr, Majumdar, Merritt, Watton (detailed analysis).

---

### 4. Practice Questions and Answers

**Question 1 (Linear Actuator Force):**
A double-acting hydraulic cylinder has a bore diameter of 50 mm and a rod diameter of 25 mm. If the cylinder is supplied with hydraulic fluid at 15 MPa, calculate the theoretical extension force and retraction force.

**Answer 1:**
*   **Bore Diameter (D):** 50 mm = 0.05 m
*   **Rod Diameter (d):** 25 mm = 0.025 m
*   **Pressure (P):** 15 MPa = 15 × 10⁶ N/m²

*   **Piston Area (A_piston):**
    A_piston = π × (D/2)² = π × (0.05 m / 2)² = π × (0.025 m)² ≈ 0.001963 m²

*   **Rod Area (A_rod):**
    A_rod = π × (d/2)² = π × (0.025 m / 2)² = π × (0.0125 m)² ≈ 0.000491 m²

*   **Extension Force (F_ext):**
    F_ext = P × A_piston = (15 × 10⁶ N/m²) × 0.001963 m² ≈ 29,445 N

*   **Retraction Force (F_ret):**
    F_ret = P × (A_piston - A_rod) = (15 × 10⁶ N/m²) × (0.001963 m² - 0.000491 m²)
    F_ret = (15 × 10⁶ N/m²) × 0.001472 m² ≈ 22,080 N

**Question 2 (Linear Actuator Speed):**
A double-acting cylinder with a 75 mm bore and 40 mm rod diameter extends at a speed of 0.5 m/s. The system pressure is 10 MPa.
a) What is the required flow rate for extension?
b) What would be the theoretical retraction speed if the same flow rate were supplied to the rod end?

**Answer 2:**
*   **Bore Diameter (D):** 75 mm = 0.075 m
*   **Rod Diameter (d):** 40 mm = 0.040 m
*   **Extension Speed (V_ext):** 0.5 m/s

*   **a) Required Flow Rate (Q):**
    *   **Piston Area (A_piston):**
        A_piston = π × (D/2)² = π × (0.075 m / 2)² = π × (0.0375 m)² ≈ 0.004418 m²
    *   **Q = V_ext × A_piston**
        Q = 0.5 m/s × 0.004418 m² ≈ 0.002209 m³/s

    *   Convert to Liters per minute (LPM):
        Q = 0.002209 m³/s × 1000 L/m³ × 60 s/min ≈ 132.54 LPM

*   **b) Theoretical Retraction Speed (V_ret):**
    *   **Rod Area (A_rod):**
        A_rod = π × (d/2)² = π × (0.040 m / 2)² = π × (0.020 m)² ≈ 0.001257 m²
    *   **Area Excluding Rod (A_net):**
        A_net = A_piston - A_rod = 0.004418 m² - 0.001257 m² ≈ 0.003161 m²
    *   **V_ret = Q / A_net**
        V_ret = 0.002209 m³/s / 0.003161 m² ≈ 0.6988 m/s

**Question 3 (Rotary Actuator Torque):**
A hydraulic gear motor has a displacement of 50 cm³/rev and a maximum continuous operating pressure of 20 MPa. Calculate the theoretical maximum continuous torque it can produce.

**Answer 3:**
*   **Displacement (V_disp):** 50 cm³/rev = 0.000050 m³/rev
*   **Pressure (P):** 20 MPa = 20 × 10⁶ N/m²

*   **Theoretical Maximum Torque (T):**
    T = (P × V_disp) / (2π)
    T = (20 × 10⁶ N/m² × 0.000050 m³/rev) / (2π)
    T = 1000 Nm / (2π) ≈ 159.15 Nm

**Question 4 (Rotary Actuator Speed):**
A hydraulic motor with a displacement of 100 cm³/rev is supplied with 150 LPM of hydraulic fluid. What is its theoretical speed in RPM?

**Answer 4:**
*   **Displacement (V_disp):** 100 cm³/rev = 0.0001 m³/rev
*   **Flow Rate (Q):** 150 LPM = 150 L/min = 0.150 m³/min

*   **Theoretical Speed (RPM):**
    **Q = V_disp × RPM**
    RPM = Q / V_disp
    RPM = 0.150 m³/min / 0.0001 m³/rev = 1500 RPM

---

### 5. Summary and Key Takeaways

*   **Linear actuators** (cylinders, screw jacks) convert hydraulic power to linear motion. Cylinders are categorized by their operation (single-acting, double-acting) and construction (telescopic, differential).
*   **Rotary actuators** (vane, rack and pinion, hydraulic motors) convert hydraulic power to rotary motion. Hydraulic motors are the most common for continuous rotary motion.
*   **Selection** of actuators depends on force/torque, speed, stroke/angle, pressure, and environmental factors.
*   **Specifications** must clearly define all operational parameters and physical characteristics.
*   **Actuator characteristics** like force-pressure, speed-flow, and efficiency are crucial for performance analysis and system design. Friction, leakage, and cushioning are important practical considerations.
*   Understanding the differences between extension and retraction forces/speeds in double-acting cylinders (due to rod diameter) is vital.
*   Hydraulic motors offer continuous rotary motion and are often selected based on displacement, torque, and speed ratings.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 6. Further Study & References

*   **Andrew Parr's "Hydraulic and Pneumatics"**: Provides a solid foundation in the basic principles and components of hydraulic systems, including actuators.
*   **S.R. Majumdar's "Hydraulic systems: Principles and maintenance"**: Offers practical insights into the selection, operation, and maintenance of various hydraulic components, including a good focus on real-world applications.
*   **J.S. Cundiff's "Fluid power circuits and controls: fundamentals and applications"**: Crucial for understanding how actuators are integrated into functional circuits and how their characteristics influence control strategies.
*   **Herbert E. Merritt's "Hydraulic control systems"**: For a deeper dive into the control aspects and more advanced characteristics.
*   **J. Watton's "Fundamentals of fluid power control"**: Provides a comprehensive theoretical background on fluid power principles, including actuator dynamics.

This module lays the groundwork for understanding the "output" devices in a hydraulic system. The next steps will likely involve understanding how these devices are controlled and integrated into complete circuits.