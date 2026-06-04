---
title: "DC motors"
subject: "SENSORS AND ACTUATORS"
module: "Module 4: Actuators : "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea94"
status: "completed"
scrapedAt: "2026-05-23T17:58:16.533Z"
---
# Sensors and Actuators - Module 4: Actuators - DC Motors

This module delves into the fundamental principles and applications of Direct Current (DC) motors, a crucial type of actuator used extensively in mechatronic systems. Understanding DC motors is essential for selecting and controlling the right actuator for a given task.

---

## 1. Introduction to DC Motors

DC motors are electromechanical devices that convert electrical energy from a direct current source into mechanical rotational energy. They are characterized by their simplicity, ease of control, and availability in a wide range of sizes and power ratings.

**Key Concepts:**

*   **Actuator:** A component of a machine that is responsible for moving or controlling a mechanism or system. Actuators are commanded by a control signal and translate that signal into some form of motion or force.
*   **DC Motor:** An electric motor that runs on direct current (DC) electricity.
*   **Torque:** The rotational equivalent of linear force. It is the twisting force that causes rotation.
*   **Speed:** The rate at which the motor shaft rotates, typically measured in Revolutions Per Minute (RPM).
*   **Back EMF (Electromotive Force):** A voltage generated in the motor windings due to their rotation in a magnetic field. This back EMF opposes the applied voltage and plays a crucial role in motor speed regulation.

**References:**

*   **Fraden (2010):** Discusses actuators in general and their role in measurement and control systems.
*   **Bishop (2022):** Provides a foundational understanding of electric motors, including DC motors, as actuators in mechatronic systems.

---

## 2. Working Principle of a DC Motor

The operation of a DC motor is based on **Lorentz Force** and the principle of electromagnetic induction.

**Key Concepts:**

*   **Lorentz Force:** When a current-carrying conductor is placed in a magnetic field, it experiences a force. The direction of this force is perpendicular to both the direction of the current and the direction of the magnetic field, as described by Fleming's Left-Hand Rule.
    *   **Fleming's Left-Hand Rule:** Thumb represents the direction of force, Forefinger represents the direction of magnetic field, and Middle finger represents the direction of current.
*   **Magnetic Field:** Created by permanent magnets or electromagnets (field windings).
*   **Armature:** The rotating part of the motor, typically containing coils of wire (armature windings).
*   **Commutator and Brushes:** These are mechanical switching mechanisms that reverse the direction of current in the armature windings at the appropriate moment. This ensures that the torque produced by the motor is always in the same direction, allowing continuous rotation.

**How it works:**

1.  **Current Flow:** DC current is supplied to the armature windings through brushes and a commutator.
2.  **Force Generation:** The armature windings are placed within a magnetic field. The current flowing through the windings experiences a Lorentz force.
3.  **Torque Production:** These forces create a torque that causes the armature to rotate.
4.  **Commutation:** As the armature rotates, the commutator segments switch contact with the brushes, reversing the direction of current in the armature coils. This ensures that the torque remains in the same rotational direction, leading to continuous rotation.
5.  **Back EMF Generation:** As the armature rotates, the windings cut through the magnetic field lines, inducing a back EMF. This back EMF opposes the applied voltage and is proportional to the motor's speed and magnetic field strength.

**Example:**

Imagine a simple DC motor with a single coil placed between two magnetic poles. When current flows through the coil, one side of the coil experiences an upward force, and the other side experiences a downward force, creating a torque that rotates the coil. The commutator reverses the current direction in the coil just as it passes the vertical position, ensuring it continues to rotate in the same direction.

**References:**

*   **Johnson (2019):** Provides a detailed explanation of the fundamental physics behind DC motor operation, including Lorentz force and electromagnetic induction.
*   **Patranabis (2021):** Explains the role of the commutator and brushes in maintaining continuous rotation and the generation of back EMF.

---

## 3. Types of DC Motors

DC motors are broadly classified based on how their field windings are connected to the armature.

**Key Concepts:**

*   **Field Winding:** The winding that creates the magnetic field.
*   **Armature Winding:** The winding that carries the current and experiences the torque.
*   **Series Wound:** Field winding is connected in series with the armature winding.
*   **Shunt Wound:** Field winding is connected in parallel (shunt) with the armature winding.
*   **Compound Wound:** Possesses both series and shunt field windings.
*   **Permanent Magnet DC (PMDC) Motor:** Uses permanent magnets to create the magnetic field.

**Types and Characteristics:**

| Motor Type       | Field Winding Connection           | Speed-Torque Characteristics                                                                   | Applications                                                                   |
| :--------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Series Wound** | In series with armature            | **High starting torque**, speed varies significantly with load (high speed at light load).     | Traction motors (trains, cranes), starter motors, electric drills.             |
| **Shunt Wound**  | In parallel with armature          | **Relatively constant speed** regardless of load, moderate starting torque.                  | Fans, pumps, machine tools, conveyor belts.                                    |
| **Compound Wound** | Both series and shunt windings | Combines characteristics of series and shunt motors. Good starting torque and speed regulation. | Elevators, presses, rolling mills, heavy-duty applications.                    |
| **PMDC Motor**   | Permanent magnets                  | Good torque, relatively constant speed, simple construction, often used for low power applications. | Toys, small appliances, automotive applications (wipers, windows), robotics. |

**Diagrammatic Representation:**

*(Imagine simple circuit diagrams showing the connection of field and armature windings for each type).*

**Important Point to Remember:**

The choice of DC motor type depends heavily on the required starting torque and the desired speed regulation characteristics for a specific application.

**References:**

*   **Krishnaswamy (2009):** Provides detailed descriptions and comparisons of different DC motor types.
*   **Bishop (2022):** Offers insights into the practical selection of DC motors for mechatronic applications.

---

## 4. DC Motor Control

Controlling the speed and torque of a DC motor is crucial for its effective use as an actuator.

**Key Concepts:**

*   **Speed Control:** Adjusting the rotational speed of the motor.
*   **Torque Control:** Adjusting the rotational force produced by the motor.
*   **Armature Voltage Control:** Varying the voltage supplied to the armature.
*   **Field Flux Control:** Varying the magnetic field strength (primarily applicable to series and shunt wound motors).
*   **Pulse Width Modulation (PWM):** A technique used to control the average voltage supplied to the motor by rapidly switching the voltage ON and OFF.

**Methods of Speed Control:**

1.  **Armature Voltage Control:**
    *   **Principle:** Speed is directly proportional to armature voltage (assuming constant field flux).
    *   **Method:** Varying the supply voltage to the armature using rheostats (less efficient) or electronic means like DC-DC converters (choppers).
    *   **Efficiency:** More efficient when controlled electronically.

2.  **Field Flux Control:**
    *   **Principle:** Speed is inversely proportional to field flux.
    *   **Method:**
        *   **For Shunt/Compound Motors:** Varying the field current (e.g., using a rheostat in series with the field winding) to weaken or strengthen the magnetic field.
        *   **For Series Motors:** More complex, as weakening the field can lead to dangerously high speeds.
    *   **Efficiency:** More efficient for speed increases (weakening the field).

3.  **Armature Resistance Control:**
    *   **Principle:** Adding resistance in series with the armature reduces the effective voltage across the armature, thus reducing speed.
    *   **Method:** Using variable resistors (rheostats) in the armature circuit.
    *   **Efficiency:** Inefficient, as power is dissipated as heat in the resistor. Primarily used for starting or low-speed operation.

**Pulse Width Modulation (PWM) for DC Motor Control:**

*   **Mechanism:** PWM involves rapidly switching the motor's power supply ON and OFF. The *duty cycle* (the ratio of ON time to the total period) determines the average voltage supplied to the motor, and thus its speed.
*   **Advantages:**
    *   **High Efficiency:** Power is either fully ON or OFF, minimizing power loss.
    *   **Smooth Speed Control:** By adjusting the duty cycle, smooth speed variations can be achieved.
    *   **Precise Control:** Allows for fine-tuning of motor speed.
*   **Implementation:** Typically achieved using power transistors (like MOSFETs or IGBTs) controlled by microcontrollers or dedicated PWM controllers.

**Example:**

In a robot arm, you might use PWM to control the speed of a DC motor driving a joint. By varying the duty cycle of the PWM signal, the robot can move its arm slowly and precisely or quickly when needed.

**References:**

*   **Johnson (2019):** Offers detailed explanations of various speed control techniques for DC motors, including PWM.
*   **Bishop (2022):** Discusses the implementation of motor control systems, including the role of electronic drivers and PWM.
*   **Fraden (2010):** Briefly touches upon motor control as a means to achieve desired actuator behavior.

---

## 5. DC Motor Parameters and Performance

Understanding key parameters is essential for selecting the right DC motor and predicting its performance.

**Key Concepts:**

*   **Rated Voltage:** The voltage at which the motor is designed to operate.
*   **Rated Speed:** The speed of the motor at rated voltage and load.
*   **Rated Torque:** The torque the motor can continuously deliver at rated voltage and speed.
*   **No-Load Speed:** The speed of the motor when no load is applied.
*   **Stall Torque:** The torque produced by the motor when its shaft is prevented from rotating (speed is zero).
*   **Torque Constant ($K_T$)**: The torque produced per ampere of armature current. Units: Nm/A.
*   **Back EMF Constant ($K_E$)**: The back EMF generated per unit speed. Units: V/(rad/s) or V/(rpm).
*   **Armature Resistance ($R_A$)**: The resistance of the armature windings.
*   **Armature Inductance ($L_A$)**: The inductance of the armature windings.
*   **Efficiency ($\eta$)**: The ratio of mechanical output power to electrical input power.

**Motor Equations:**

*   **Voltage Equation:** $V_A = I_A R_A + L_A \frac{dI_A}{dt} + E_b$
    *   Where $V_A$ is armature voltage, $I_A$ is armature current, $R_A$ is armature resistance, $L_A$ is armature inductance, and $E_b$ is back EMF.
*   **Back EMF:** $E_b = K_E \omega$
    *   Where $K_E$ is the back EMF constant and $\omega$ is the angular velocity (rad/s).
*   **Torque Equation:** $T = K_T I_A$
    *   Where $T$ is torque and $K_T$ is the torque constant.

**Important Relationship:**

For many DC motors, $K_E \approx K_T$ (when appropriate units are used).

**Efficiency Calculation:**

$\eta = \frac{P_{out}}{P_{in}} = \frac{T\omega}{V_A I_A}$

**Example:**

A DC motor has a rated voltage of 12V, a no-load speed of 5000 RPM, and a stall torque of 0.5 Nm. The armature resistance is 2 Ohms. If the motor is operated at 12V and draws 1A of current, what is its torque output?

*   Using the torque equation: $T = K_T I_A$
*   We need $K_T$. We know stall torque ($T_{stall}$) occurs when speed is 0, so back EMF is 0.
*   $V_A = I_{A\_stall} R_A$ (ignoring inductance for DC stall condition)
*   $0.5 \, \text{Nm} = K_T I_{A\_stall}$
*   $I_{A\_stall} = \frac{V_A}{R_A} = \frac{12\, \text{V}}{2\, \Omega} = 6\, \text{A}$
*   $K_T = \frac{T_{stall}}{I_{A\_stall}} = \frac{0.5\, \text{Nm}}{6\, \text{A}} \approx 0.0833\, \text{Nm/A}$
*   Now, with $I_A = 1\, \text{A}$, the torque is: $T = K_T I_A = 0.0833\, \text{Nm/A} \times 1\, \text{A} \approx 0.0833\, \text{Nm}$

**References:**

*   **Bishop (2022):** Provides a thorough treatment of motor parameters and their impact on performance.
*   **Fraden (2010):** Discusses actuator characteristics and how they relate to system requirements.

---

## 6. Applications of DC Motors

DC motors are ubiquitous in modern technology due to their versatility and ease of control.

**Examples:**

*   **Robotics:** Driving robot joints, wheels, grippers.
*   **Automotive:** Power windows, windshield wipers, electric seats, electric power steering.
*   **Consumer Electronics:** CD/DVD players, printers, hard drives, electric toothbrushes, toys.
*   **Industrial Automation:** Conveyor belts, pumps, small machine tools, actuators in control systems.
*   **Aerospace:** Actuating control surfaces, driving pumps and fans.

**Learning Outcome Alignment:**

This section directly addresses **CO4: Explain the working principle of different types of actuators.** By understanding DC motors, you are fulfilling this outcome. The various applications highlight their practical implementation as actuators.

---

## 7. Practice Questions and Exercises

1.  **Conceptual Question:** Explain how the commutator and brushes work together to ensure continuous rotation in a DC motor. (Relates to CO4)
    *   **Answer:** The commutator is a segmented ring that rotates with the armature. Brushes are stationary contacts that press against the commutator segments. As the armature rotates, the commutator segments switch contact with the brushes, effectively reversing the direction of current flow in the armature windings at the precise moment needed to maintain a continuous torque in the same rotational direction. This ensures that the forces on the armature always contribute to rotation in the desired direction.

2.  **Calculation Question:** A DC motor has a torque constant ($K_T$) of 0.05 Nm/A and an armature resistance ($R_A$) of 3 Ohms. If the motor is operated at 24V and runs at a speed where it produces 0.2 Nm of torque, what is the armature current? (Relates to understanding motor parameters)
    *   **Answer:**
        *   We know the torque equation: $T = K_T I_A$.
        *   Given $T = 0.2$ Nm and $K_T = 0.05$ Nm/A.
        *   $I_A = \frac{T}{K_T} = \frac{0.2\, \text{Nm}}{0.05\, \text{Nm/A}} = 4\, \text{A}$.
        *   The armature current is 4 A.

3.  **Application-based Question:** For a robotic arm that needs to lift heavy objects with precision and control, which type of DC motor would you recommend and why? Consider starting torque and speed regulation. (Relates to CO4 and practical selection)
    *   **Answer:** A **compound wound DC motor** or a **shunt wound DC motor with a good speed control system (like PWM)** would be suitable.
        *   **Compound Wound:** Offers good starting torque to lift heavy loads and relatively stable speed regulation, preventing jerky movements during lifting.
        *   **Shunt Wound:** While having less inherent starting torque than series motors, its good speed regulation is advantageous for precise control. Using PWM control can further enhance its ability to handle varying loads smoothly. Series motors are generally not preferred for applications requiring precise speed control or operation at light loads due to their high speed variations. PMDC motors might be an option for lighter loads but may lack the necessary torque for heavier lifting.

4.  **PWM Understanding:** What is the primary advantage of using Pulse Width Modulation (PWM) for controlling DC motor speed compared to using a variable resistor in series with the armature? (Relates to CO4 and control methods)
    *   **Answer:** The primary advantage of PWM is its **high efficiency**. When using a variable resistor, power is dissipated as heat in the resistor, leading to significant energy loss, especially at lower speeds. PWM, by rapidly switching the power ON and OFF, ensures that the motor transistors are either fully ON or fully OFF, minimizing power dissipation and thus achieving much higher efficiency. This also leads to less heat generation.

---

## 8. Summary and Key Takeaways

*   DC motors are essential actuators that convert electrical energy into mechanical rotational energy.
*   Their operation is based on the Lorentz force and the principles of electromagnetism, with the commutator and brushes playing a vital role in continuous rotation.
*   Different types of DC motors (series, shunt, compound, PMDC) offer distinct speed-torque characteristics, making them suitable for various applications.
*   DC motor speed can be controlled by varying armature voltage, field flux, or through techniques like Pulse Width Modulation (PWM).
*   PWM is a highly efficient method for precise DC motor speed control.
*   Understanding motor parameters like torque constant, back EMF constant, and armature resistance is crucial for performance prediction and motor selection.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
