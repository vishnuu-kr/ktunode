---
title: "Exercises on electro-pneumatic and electro-hydraulic circuits using trainer units"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463713"
status: "completed"
scrapedAt: "2026-05-20T18:01:36.997Z"
---
# Mechanical Engineering Lab: Module 2 - Experiment on Whirling of Shaft

## Topic: Exercises on Electro-Pneumatic and Electro-Hydraulic Circuits Using Trainer Units

This module, while seemingly focused on the "Whirling of Shaft," incorporates practical lab exercises that build foundational knowledge in mechatronics and industrial automation through the use of electro-pneumatic and electro-hydraulic trainer units. These exercises directly contribute to understanding control systems and device functionality, aligning with Course Outcome CO4.

---

### 1. Introduction to Electro-Pneumatic and Electro-Hydraulic Systems

These systems are fundamental to industrial automation and mechatronics, combining electrical control with pneumatic (compressed air) or hydraulic (fluid under pressure) power.

*   **Electro-Pneumatic Systems:** Use electrical signals to control pneumatic actuators (cylinders, motors) and valves. They are widely used due to their speed, cleanliness, and cost-effectiveness.
    *   **Reference:** Bolton, W. (2007). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering*. This textbook will provide a strong foundation in the principles of pneumatics and their integration with electrical control.
*   **Electro-Hydraulic Systems:** Use electrical signals to control hydraulic actuators and valves. They offer high power density, precise control, and the ability to generate large forces and torques.
    *   **Reference:** Ramachandran, K. P., Vijayaraghavan, G. K., & Balasundaram, M. S. (2008). *Mechatronics: Integrated Mechanical Electronic Systems*. This book will likely cover the synergistic aspects of hydraulics and electronics in mechatronic systems.

---

### 2. Key Components of Electro-Pneumatic and Electro-Hydraulic Trainer Units

Understanding the individual components is crucial for designing and analyzing circuits.

#### 2.1. Pneumatic System Components:

*   **Air Supply Unit (Compressor & Dryer/Filter):** Provides clean, dry, and regulated compressed air.
    *   **Importance:** Moisture and contaminants can damage valves and actuators. Regulated pressure ensures consistent operation.
    *   **Reference:** Shotbolt, C.R. & Gayler, J.F.W. (n.d.). *Metrology for Engineers*. While focused on metrology, understanding the importance of clean and regulated inputs for precise operation is analogous.
*   **Directional Control Valves (DCVs):** Control the direction of air flow to actuators. They are actuated by solenoids (electro-pneumatic).
    *   **Types:** 2/2-way, 3/2-way, 4/2-way, 5/2-way valves.
    *   **Actuation:** Solenoid-operated (electrically controlled), spring-return or pilot-operated return.
    *   **Example:** A 5/2-way solenoid-operated valve is commonly used to control a double-acting pneumatic cylinder. Electrical input energizes the solenoid, shifting the valve spool to direct air to one port and vent the other.
*   **Actuators:** Convert pneumatic energy into mechanical motion.
    *   **Linear Actuators (Cylinders):**
        *   **Single-acting:** Air extends the piston, spring retracts.
        *   **Double-acting:** Air extends and retracts the piston.
    *   **Rotary Actuators:** Provide rotational motion.
*   **Pneumatic Fittings and Tubing:** Connect components and allow air flow.
*   **Pressure Regulators:** Maintain a constant air pressure downstream.
*   **Flow Control Valves:** Regulate the speed of actuators by controlling airflow.

#### 2.2. Hydraulic System Components:

*   **Hydraulic Power Unit (Pump, Reservoir, Motor, Filter):** Provides pressurized hydraulic fluid.
    *   **Pump:** Generates flow. Common types include gear pumps, vane pumps, and piston pumps.
    *   **Reservoir:** Stores hydraulic fluid and aids in heat dissipation and de-aeration.
    *   **Filter:** Removes contaminants from the fluid.
*   **Directional Control Valves (DCVs):** Control the direction of hydraulic fluid flow. Solenoid-operated valves are common in electro-hydraulic systems.
    *   **Types:** Similar to pneumatic DCVs, but designed for higher pressures and fluid compatibility.
    *   **Example:** A 4/3-way solenoid-operated valve with a closed center position can be used to control a hydraulic cylinder with precise stopping capabilities.
*   **Actuators:** Convert hydraulic energy into mechanical motion.
    *   **Linear Actuators (Cylinders):** Single-acting and double-acting.
    *   **Rotary Actuators (Hydraulic Motors):** Provide continuous rotary motion.
*   **Hydraulic Fittings and Hoses:** Connect components and allow fluid flow, designed for high pressures.
*   **Pressure Relief Valves:** Protect the system from over-pressurization by diverting excess fluid.
*   **Flow Control Valves:** Regulate the speed of actuators by controlling fluid flow.
*   **Pressure Gauges:** Monitor system pressure.

#### 2.3. Electrical Control Components:

*   **Power Supply:** Provides electrical energy to solenoids and other control elements.
*   **Relays:** Electromechanical switches used to amplify control signals or isolate circuits.
    *   **Types:** SPDT (Single Pole Double Throw), DPDT (Double Pole Double Throw).
*   **Push Buttons and Switches:** User input devices to initiate or stop actions.
    *   **Types:** Momentary push buttons (normally open - NO, normally closed - NC), toggle switches.
*   **Limit Switches:** Actuated by the movement of machinery to signal end-of-travel or position.
*   **Solenoids:** Electromagnets that convert electrical energy into linear motion to shift valve spools.

---

### 3. Understanding Electro-Pneumatic Circuits

These circuits utilize electrical signals to control pneumatic actuators.

#### 3.1. Learning Outcome Alignment:

*   **CO4 (Demonstrate the functions and control of various devices used for industrial automation):** Building and operating these circuits directly demonstrates the function of solenoids, DCVs, and actuators, and how electrical signals control their operation.

#### 3.2. Basic Electro-Pneumatic Circuit: Controlling a Single-Acting Cylinder

*   **Objective:** Extend a single-acting cylinder when a push button is pressed and retract it when released.
*   **Components:**
    *   Single-acting cylinder
    *   3/2-way spring-return solenoid valve
    *   Push button (normally open)
    *   Air supply with regulator and filter
*   **Circuit Diagram (Conceptual):**
    ```
    [Air Supply] ---> [3/2 Solenoid Valve (Port 1)]
                      |                  |
                      [Port 2] -----------> [Single-Acting Cylinder (Port A)]
                      |                  |
                      [Port 3 (Vent)] <-- [Single-Acting Cylinder (Port A)]
                      |
                  [Solenoid Coil] <--- [Push Button (NO)]
    ```
*   **Operation:**
    1.  When the push button is pressed, it energizes the solenoid coil of the 3/2 valve.
    2.  The solenoid pulls the valve spool, connecting Port 1 (supply) to Port 2 (cylinder). Air flows to extend the cylinder. Port 3 (vent) is closed.
    3.  When the push button is released, the solenoid is de-energized.
    4.  The spring pushes the valve spool back to its rest position, closing Port 1 and opening Port 2 to Port 3 (vent). Air is released from the cylinder, and the spring retracts the piston.

#### 3.3. Controlling a Double-Acting Cylinder:

*   **Objective:** Extend and retract a double-acting cylinder using two push buttons.
*   **Components:**
    *   Double-acting cylinder
    *   5/2-way spring-return solenoid valve
    *   Two push buttons (one NO for extend, one NC for retract, or two NO with interlock logic)
    *   Air supply with regulator and filter
*   **Circuit Diagram (Conceptual - using two push buttons for simplicity):**
    ```
    [Air Supply] ---> [5/2 Solenoid Valve (Port 1)]
                      |                  |
    [Ext. Push Button (NO)] -- [Solenoid A]
                      |                  |
    [Ret. Push Button (NC)] -- [Solenoid B]
                      |                  |
                      [Port 2] -----------> [Cylinder Port A (Extend)]
                      |                  |
                      [Port 4] -----------> [Cylinder Port B (Retract)]
                      |                  |
                      [Port 5 (Vent)] <-- [Cylinder Port A (when retracting)]
                      |                  |
                      [Port 3 (Vent)] <-- [Cylinder Port B (when extending)]
    ```
*   **Operation (with two push buttons):**
    1.  **Extend:** Pressing the "Extend" push button energizes Solenoid A. The valve shifts, connecting Port 1 to Port 2, extending the cylinder. Port 4 is connected to Port 5 (vent).
    2.  **Retract:** Pressing the "Retract" push button energizes Solenoid B. The valve shifts back, connecting Port 1 to Port 4, retracting the cylinder. Port 2 is connected to Port 3 (vent).
*   **Important Consideration (Interlocking):** In a practical circuit, you would likely use interlocking logic (e.g., using relays or a PLC) to prevent both solenoids from being energized simultaneously, which could damage the valve or the system.

#### 3.4. Speed Control of Pneumatic Actuators

*   **Method:** Using flow control valves.
    *   **Meter-in:** Flow control valve placed before the cylinder port (restricts air entering).
    *   **Meter-out:** Flow control valve placed after the cylinder port (restricts air exhausting). Meter-out is generally preferred for smooth control of extension/retraction.
*   **Reference:** Wilson, C.E. & Sadler, P. (2005). *Kinematics and Dynamics of Machinery*. This textbook would offer insights into controlling the motion dynamics of mechanisms, which relates to actuator speed control.

#### 3.5. Using Relays for Control Logic

*   **Purpose:** To implement more complex control sequences, interlocks, and signal amplification.
*   **Example:** Controlling a double-acting cylinder with a single push button and a limit switch for automatic reciprocation.
    *   **Sequence:** Cylinder extends when push button is pressed. When it reaches the end of stroke, a limit switch is activated, causing it to retract. When it retracts fully, another limit switch (or the absence of the first) signals it to extend again.
    *   **Relay Logic:** Requires understanding how relays (NO/NC contacts) can be wired to create "AND," "OR," and "memory" (latching) functions.

---

### 4. Understanding Electro-Hydraulic Circuits

These circuits are similar to electro-pneumatic circuits but operate with hydraulic fluid under pressure.

#### 4.1. Learning Outcome Alignment:

*   **CO4 (Demonstrate the functions and control of various devices used for industrial automation):** Similar to pneumatics, building and operating these circuits directly demonstrates the functionality of hydraulic components and their electrical control.

#### 4.2. Basic Electro-Hydraulic Circuit: Controlling a Hydraulic Cylinder

*   **Objective:** Extend and retract a hydraulic cylinder.
*   **Components:**
    *   Hydraulic power unit (HPU)
    *   Double-acting hydraulic cylinder
    *   4/3-way solenoid-operated valve (e.g., closed center)
    *   Push buttons or other electrical inputs
    *   Hydraulic fluid, hoses, fittings
*   **Circuit Diagram (Conceptual):** Similar to the double-acting pneumatic cylinder, but with hydraulic fluid flow lines.
*   **Operation:**
    1.  When the extend command is given (e.g., push button energizes Solenoid A), the valve shifts to direct high-pressure fluid to the cylinder's extend port and connects the retract port to tank (return).
    2.  When the retract command is given (e.g., push button energizes Solenoid B), the valve shifts to direct high-pressure fluid to the cylinder's retract port and connects the extend port to tank.
*   **Key Differences from Pneumatics:**
    *   **Higher forces and pressures:** Hydraulic systems operate at much higher pressures.
    *   **Slower speeds (generally):** Due to the viscosity of the fluid.
    *   **Fluid control:** Leaks are more problematic, and fluid conditioning (filtration, temperature control) is crucial.
    *   **Energy efficiency:** Can be more efficient for heavy loads but also more prone to energy loss due to fluid friction.

#### 4.3. Proportional and Servo Valves

*   **Proportional Valves:** Allow for infinitely variable control of flow rate and pressure, typically proportional to the input current or voltage.
    *   **Benefit:** Enables smoother acceleration/deceleration and precise positioning of actuators.
*   **Servo Valves:** Offer very high precision and dynamic response for sophisticated control applications, often used in closed-loop systems.
    *   **Reference:** Bolton, W. (2007). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering*. This textbook will be valuable for understanding the control aspects of proportional and servo valves.

---

### 5. Exercises and Practical Application

The trainer units will be used to perform experiments that involve:

*   **Circuit Assembly:** Physically connecting the pneumatic or hydraulic components and electrical wiring according to circuit diagrams.
*   **Troubleshooting:** Identifying and rectifying faults in the assembled circuits. This directly addresses CO4.
*   **Parameter Adjustment:** Using regulators and flow control valves to adjust pressure and speed. This relates to CO1 (choosing appropriate instruments for measurements like pressure and flow rate).
*   **Sequence Control:** Implementing basic and intermediate control sequences using relays or logic gates.

#### 5.1. Learning Outcome Alignment:

*   **CO4 (Demonstrate the functions and control of various devices used for industrial automation):** All practical exercises directly achieve this outcome.
*   **CO3 (Develop knowledge of designing and analyzing mechanisms in machinery):** While not directly about mechanical mechanisms, understanding how actuators are controlled contributes to the overall knowledge of machine operation.
*   **CO1 (Choose the appropriate instruments for different measurements):** Students will use pressure gauges, flow meters (if available), and multi-meters for troubleshooting.

---

### 6. Exercises with Answers

**Exercise 1: Electro-Pneumatic Double-Acting Cylinder Control with Speed Adjustment**

**Objective:** Control the extension and retraction of a double-acting pneumatic cylinder using a 5/2-way solenoid valve and adjust the retraction speed using a flow control valve.

**Circuit Diagram:**
*   Connect a double-acting cylinder to a 5/2-way spring-return solenoid valve.
*   Connect ports P1 and P2 of the valve to air supply and vent respectively.
*   Connect the extend port of the cylinder to Port 2 of the valve.
*   Connect the retract port of the cylinder to Port 4 of the valve.
*   Wire Solenoid A to a push button (NO) and a power source.
*   Wire Solenoid B to another push button (NO) and a power source.
*   Insert a **meter-out** flow control valve in the line going from Port 4 of the valve to the retract port of the cylinder.

**Procedure:**
1.  Assemble the circuit as described.
2.  Adjust the pressure regulator to a suitable working pressure (e.g., 4-6 bar).
3.  Press the "extend" push button. The cylinder should extend.
4.  Press the "retract" push button. The cylinder should retract.
5.  Adjust the flow control valve in the retract line to slow down the retraction speed.

**Questions:**
a)  What happens if you connect the flow control valve in the extend line (meter-in)?
b)  What happens if you accidentally energize both solenoids simultaneously?
c)  How would you ensure that the cylinder stops in any position? (Hint: Consider a 4-way closed center valve, though less common in basic pneumatic trainers).

**Answers:**
a)  If connected in the extend line (meter-in), the cylinder will extend slower, and retraction will be at full speed (unless a flow control is also added to the extend port). Meter-out control of retraction is generally smoother.
b)  If both solenoids are energized, the valve will likely shift to a position determined by the valve's internal mechanics or the last energized solenoid. This could lead to unpredictable behavior and potential damage if the ports are blocked or pressure spikes occur. Interlocking is crucial.
c)  To stop in any position, a 4-way valve with a center position that blocks all ports (e.g., closed center) would be needed. In pneumatics, this is less common for simple trainer setups, and often other mechanisms or more complex valves are used. For hydraulic systems, closed-center or metering-center valves are standard for such control.

---

**Exercise 2: Electro-Pneumatic Control with Relay Interlock**

**Objective:** Control a double-acting pneumatic cylinder with two push buttons, ensuring that the extend and retract functions cannot be activated simultaneously.

**Circuit Diagram (Conceptual - Relay Logic):**
*   Use a 5/2-way double solenoid valve.
*   **Solenoid A (Extend):** Controlled by a push button (PB1).
*   **Solenoid B (Retract):** Controlled by a push button (PB2).
*   **Interlock:**
    *   A relay coil (CR1) is energized when PB1 is pressed. CR1 has normally closed (NC) contacts in series with PB2.
    *   A relay coil (CR2) is energized when PB2 is pressed. CR2 has normally closed (NC) contacts in series with PB1.
    *   Alternatively, the solenoids themselves can be wired with NC contacts from the opposite solenoid in series.

**Procedure:**
1.  Assemble the pneumatic circuit for a double-acting cylinder.
2.  Wire the electrical control circuit with the relay interlock.
3.  Test the operation:
    *   Press PB1. Cylinder extends.
    *   While PB1 is pressed, try to press PB2. The cylinder should not retract.
    *   Release PB1. Cylinder retracts (if it was extending and reached its limit, or if you used a latching circuit).
    *   Press PB2. Cylinder retracts.
    *   While PB2 is pressed, try to press PB1. The cylinder should not extend.

**Questions:**
a)  Explain the purpose of the relay interlock in this circuit.
b)  How would you modify this circuit to achieve automatic reciprocation using limit switches and relays?

**Answers:**
a)  The relay interlock prevents both solenoids from being energized simultaneously. This is crucial to prevent damage to the valve and to ensure predictable operation by avoiding conflicting valve shifts.
b)  To achieve automatic reciprocation:
    *   Use limit switches (LS1 at the end of extension, LS2 at the end of retraction).
    *   Wire LS1 to de-energize Solenoid A (or a relay controlling Solenoid A).
    *   Wire LS1 to energize Solenoid B (possibly through a relay for latching).
    *   Wire LS2 to de-energize Solenoid B.
    *   Wire LS2 to energize Solenoid A (possibly through a relay for latching).
    *   The initial start could be from a push button that energizes a latching relay for Solenoid A, starting the cycle. Careful interlocking is needed to prevent false starts or stalling.

---

### 7. Important Points to Remember

*   **Safety First:** Always be aware of high pressures in hydraulic systems and the rapid movement of pneumatic actuators. Ensure guards are in place and emergency stops are accessible.
*   **Cleanliness:** Contamination is a major enemy of both pneumatic and hydraulic systems. Maintain clean work areas and handle components carefully.
*   **Correct Wiring:** Double-check electrical connections before applying power. Incorrect wiring can damage components or create safety hazards.
*   **Component Compatibility:** Ensure that valves, actuators, and fittings are rated for the pressures and types of fluids/air being used.
*   **Circuit Diagrams:** Learn to read and interpret standard pneumatic and hydraulic circuit symbols.
*   **Troubleshooting Skills:** Develop systematic approaches to identifying problems (e.g., "no pressure," "slow operation," "leaks").

---

### 8. Link to Course Outcomes

*   **CO1: Choose the appropriate instruments for different measurements (K3):** Practicing with pressure gauges, flow controls, and troubleshooting requires selecting and using these instruments correctly.
*   **CO2: Determine dimensional and form accuracies of various components (K3):** While not the primary focus, understanding precise actuation and control contributes to an appreciation of how these systems enable accurate positioning and movement of components.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3):** The control of actuators in these circuits is directly related to how mechanical components (like linkages or slides) are driven and controlled in automated machinery.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3):** This is the most directly addressed CO. Students build, operate, and troubleshoot electro-pneumatic and electro-hydraulic circuits, demonstrating their understanding of automated device control.
*   **CO5: Demonstrate 3D printing technique (K3):** This CO is not directly related to the topic of electro-pneumatic and electro-hydraulic circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
