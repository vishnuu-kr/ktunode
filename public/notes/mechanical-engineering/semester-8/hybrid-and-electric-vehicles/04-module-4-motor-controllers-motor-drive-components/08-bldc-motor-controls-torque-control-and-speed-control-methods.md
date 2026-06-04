---
title: "BLDC motor controls – torque control and speed control methods"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 4: Motor controllers – motor drive components"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464465"
status: "completed"
scrapedAt: "2026-05-20T18:21:15.870Z"
---
## HYBRID AND ELECTRIC VEHICLES

---

### Module 4: Motor Controllers – Motor Drive Components

---

### Topic: BLDC Motor Controls – Torque Control and Speed Control Methods

---

**Course Outcomes Alignment:**

*   **CO3:** Describe various motors and drives of Electric vehicles. (Knowledge Level: K2) - *This topic directly addresses the control methods for Brushless DC (BLDC) motors, a key component in EV drives.*
*   **CO4:** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (Knowledge Level: K3) - *Understanding BLDC motor control is crucial for efficient power delivery and component selection in EV powertrains.*

**Learning Outcomes for this Topic:**

*   Understand the fundamental principles of Brushless DC (BLDC) motor operation.
*   Identify the key components of a BLDC motor drive system.
*   Explain the different methods for controlling the torque of a BLDC motor.
*   Explain the different methods for controlling the speed of a BLDC motor.
*   Analyze the relationship between torque control and speed control in BLDC motors.
*   Discuss the advantages and disadvantages of different BLDC motor control strategies.

---

### 1. Introduction to Brushless DC (BLDC) Motors

**Definition:** A Brushless DC (BLDC) motor is a type of synchronous electric motor that uses an electronic commutator instead of mechanical brushes and a commutator. It is powered by a DC power source via an integrated electronic driver, which synchronizes with the motor's rotor position.

**Key Features:**

*   **Permanent Magnets:** The rotor typically contains permanent magnets, eliminating the need for rotor windings and slip rings.
*   **Stator Windings:** The stator has windings that are sequentially energized to create a rotating magnetic field.
*   **Electronic Commutation:** An electronic controller determines the sequence and timing of energizing the stator windings based on the rotor's position.

**Advantages in EVs:**

*   **High Efficiency:** Reduced friction losses due to the absence of brushes.
*   **High Power Density:** More power output for a given size and weight.
*   **Long Lifespan:** No brush wear, leading to lower maintenance.
*   **Good Torque Characteristics:** Excellent starting torque and controllable torque.
*   **Low EMI:** Reduced electromagnetic interference.

**(Reference: Ehsani et al., 3rd Ed., Chapter 7 - Electric Motors and Drives)**

---

### 2. BLDC Motor Drive System Components

A typical BLDC motor drive system comprises the following essential components:

*   **BLDC Motor:** The motor itself, with permanent magnets on the rotor and windings on the stator.
*   **Position Sensor (Optional but common):**
    *   **Hall Effect Sensors:** Commonly used to detect the position of the rotor by sensing the magnetic field. Typically three Hall sensors are used.
    *   **Encoders (Optical or Magnetic):** Provide more precise position information but are generally more expensive.
    *   **Sensorless Control:** Advanced algorithms estimate rotor position without dedicated sensors, reducing cost and complexity.
*   **Power Electronic Converter (Inverter):**
    *   The heart of the BLDC drive, responsible for switching the DC voltage from the battery to the stator windings in the correct sequence.
    *   Typically a three-phase inverter configuration using MOSFETs or IGBTs.
*   **Controller/Microcontroller:**
    *   Receives input signals (e.g., throttle position, speed feedback).
    *   Processes rotor position information.
    *   Generates switching signals (PWM - Pulse Width Modulation) for the inverter.
    *   Implements control algorithms for torque and speed.

**(Reference: Husain, 2nd Ed., Chapter 5 - Electric Motor Drives)**

---

### 3. BLDC Motor Control Principles

The fundamental principle of BLDC motor control is to create a rotating magnetic field in the stator that "chases" the magnetic field of the rotor magnets. This is achieved by electronically switching the current through the stator windings.

**Commutation:**

*   **Electromechanical Commutation (Traditional DC Motors):** Uses physical brushes and a commutator.
*   **Electronic Commutation (BLDC Motors):** Uses a controller to determine which stator windings to energize and in what sequence.

**Rotor Position Sensing:**

*   **Hall-Effect Based Commutation:**
    *   Three Hall sensors are typically placed 120 electrical degrees apart on the stator.
    *   As the rotor rotates, the magnets change the magnetic field detected by the Hall sensors.
    *   The controller reads the Hall sensor outputs (digital signals) to determine the rotor's position (typically in 60-degree or 30-degree electrical sectors).
    *   Based on the sector, the controller energizes the appropriate stator phases.
*   **Sensorless Control:**
    *   Relies on sensing the **Back-EMF (ElectroMotive Force)** generated in the unenergized stator windings.
    *   The back-EMF is proportional to the rotor speed and its phase relative to the stator current.
    *   By monitoring the back-EMF, the controller can infer the rotor position.
    *   This is more complex but reduces cost and improves reliability.

**(Reference: Larminie & Lowry, 2nd Ed., Chapter 6 - Brushless DC Motors)**

---

### 4. BLDC Motor Torque Control Methods

Torque in a BLDC motor is primarily controlled by regulating the **current flowing through the stator windings**. The torque is approximately proportional to the stator current.

**Key Concepts:**

*   **Torque Equation (Simplified):**
    $T_e \propto \lambda_m \times i_a$
    Where:
    *   $T_e$ is the electromagnetic torque.
    *   $\lambda_m$ is the permanent magnet flux linkage (assumed constant).
    *   $i_a$ is the stator phase current.

*   **Pulse Width Modulation (PWM):** This is the primary technique used to control the average current supplied to the stator windings. The inverter switches the power transistors on and off at a high frequency (typically 10-50 kHz). The **duty cycle** of the PWM signal determines the average voltage applied to the winding, and thus the average current.

**Methods for Torque Control:**

1.  **Direct Current Control (Current Amplitude Control):**
    *   **Principle:** The magnitude of the stator current is directly controlled. Higher current means higher torque.
    *   **Implementation:**
        *   **Open-loop PWM:** A fixed PWM duty cycle is applied, resulting in a roughly constant torque. This is simple but less precise.
        *   **Closed-loop Current Control:**
            *   A current sensor (e.g., shunt resistor or Hall effect current sensor) measures the phase current.
            *   A Proportional-Integral (PI) controller compares the measured current to a reference current (set by the desired torque).
            *   The PI controller adjusts the PWM duty cycle to minimize the error between the reference and measured current.
    *   **Advantages:** Precise torque control, fast response.
    *   **Disadvantages:** Requires current sensing, can be complex.

2.  **Torque-Speed Curve (BLDC Motors are not truly constant torque over wide speed ranges like DC-PM motors):**
    *   While BLDC motors are called "DC" motors, their torque-speed characteristics are more like AC synchronous motors.
    *   The **back-EMF (e)** is proportional to speed ($\omega$): $e \propto \omega$.
    *   To achieve maximum torque at any given speed, the current should be in phase with the back-EMF. However, this is difficult to achieve in practice with simple control.
    *   In many BLDC drives, a simplified assumption is made that torque is directly proportional to current amplitude.

**Example:** To achieve a target torque, the controller sets a reference current. If the measured current is lower, the PWM duty cycle is increased to deliver more current, thereby increasing torque. If the measured current is higher, the duty cycle is decreased.

**(Reference: Ehsani et al., 3rd Ed., Chapter 7 - Electric Motors and Drives)**

---

### 5. BLDC Motor Speed Control Methods

Speed control in BLDC motors is achieved by controlling the **voltage applied to the stator windings**, which indirectly affects the motor's rotational speed.

**Key Concepts:**

*   **Motor Speed Equation (Simplified):**
    $T_e = K_t I_a$ (Torque proportional to current)
    $V_{dc} - K_e \omega = I_a R_a$ (Voltage equation for one phase, neglecting back-EMF in unenergized phases)
    Where:
    *   $V_{dc}$ is the DC supply voltage.
    *   $K_e$ is the back-EMF constant.
    *   $\omega$ is the motor speed.
    *   $I_a$ is the phase current.
    *   $R_a$ is the phase resistance.

    Rearranging for speed:
    $\omega = \frac{V_{applied} - I_a R_a}{K_e}$ (where $V_{applied}$ is the effective voltage applied to the winding)

    From this, we can see that speed is primarily controlled by the applied voltage.

**Methods for Speed Control:**

1.  **Voltage Control using PWM (Primary Method):**
    *   **Principle:** The average voltage applied to the stator windings is varied using PWM. A higher duty cycle results in higher average voltage and thus higher speed, and vice versa.
    *   **Implementation:**
        *   **Open-loop Speed Control:** A fixed PWM duty cycle is set based on a desired speed reference, without feedback. Simple, but not accurate due to variations in load and voltage.
        *   **Closed-loop Speed Control:**
            *   A speed sensor (e.g., encoder, tachometer, or inferred from back-EMF) measures the actual motor speed.
            *   A PI controller compares the measured speed to a desired speed setpoint.
            *   The PI controller adjusts the PWM duty cycle to achieve the target speed.
    *   **Advantages:** Efficient, widely used, good speed regulation in closed-loop.
    *   **Disadvantages:** Requires PWM generation and potentially speed sensing.

2.  **Stator Voltage Control (Less Common for BLDC):**
    *   **Principle:** Directly varying the DC link voltage supplied to the inverter.
    *   **Implementation:** Using a DC-DC converter (e.g., buck-boost converter) to regulate the input voltage to the inverter.
    *   **Advantages:** Can offer smoother voltage control.
    *   **Disadvantages:** Adds complexity and another power conversion stage.

3.  **Stator Winding Configuration (Pole Count/Voltage Rating):**
    *   While not a dynamic control method, the choice of motor with a specific voltage rating and winding configuration influences the achievable speed range.

**Example:** To maintain a constant speed under varying load, the speed controller monitors the actual speed. If the speed drops, the controller increases the PWM duty cycle, applying more voltage to the windings to increase torque and bring the speed back up.

**(Reference: Husain, 2nd Ed., Chapter 5 - Electric Motor Drives)**
**(Reference: Larminie & Lowry, 2nd Ed., Chapter 6 - Brushless DC Motors)**

---

### 6. Relationship Between Torque and Speed Control

Torque and speed control are intrinsically linked in BLDC motor operation.

*   **Torque determines the acceleration/deceleration:** To change speed, torque must be applied.
*   **Speed influences the required torque for a given load:** As speed increases, the back-EMF increases, which reduces the available voltage for current flow, thus reducing torque for a given PWM duty cycle.

**Control Strategies:**

1.  **Torque Control Mode:**
    *   The controller aims to maintain a specific torque output.
    *   Typically achieved by directly regulating the phase current amplitude using closed-loop current control.
    *   Speed is a consequence of the applied torque and load.

2.  **Speed Control Mode:**
    *   The controller aims to maintain a specific speed output.
    *   Typically achieved by regulating the PWM duty cycle.
    *   The current (and therefore torque) is automatically adjusted by the PI speed controller to overcome load torque and maintain the set speed.

3.  **Combined Control (Most Common in EVs):**
    *   EV drivetrains often employ a cascade control structure:
        *   An outer speed control loop sets the desired torque (or current) command.
        *   An inner current control loop directly controls the phase current to achieve the commanded torque.
    *   This allows for precise speed regulation while ensuring that the torque is managed effectively.

**Example:** When accelerating an EV, the driver presses the accelerator pedal. This signal is translated into a desired speed reference. The speed controller then determines the necessary torque command. The current controller ensures the motor produces this torque by regulating the current to the stator windings.

**(Reference: Ehsani et al., 3rd Ed., Chapter 7 - Electric Motors and Drives)**

---

### 7. Advanced Control Techniques and Considerations

*   **Field-Oriented Control (FOC) / Vector Control:**
    *   **Principle:** Aims to decouple the torque-producing and flux-producing components of the stator current, similar to AC induction motor control.
    *   **Implementation:** Uses coordinate transformations (e.g., Clarke, Park) to represent stator currents in a rotating reference frame aligned with the rotor flux. This allows for independent control of torque and flux.
    *   **Advantages:** Highly efficient, excellent dynamic performance, smooth torque.
    *   **Disadvantages:** Computationally intensive, requires accurate rotor position sensing.
*   **Six-Step Commutation:**
    *   **Principle:** A simpler form of electronic commutation where the inverter switches in a six-step sequence, energizing two phases at a time.
    *   **Advantages:** Simpler controller, lower switching losses in some configurations.
    *   **Disadvantages:** Produces pulsating torque, lower efficiency compared to sinusoidal or FOC.
*   **Sinusoidal PWM (SPWM) Control:**
    *   **Principle:** Generates sinusoidal voltage waveforms to drive the motor. This requires knowing the rotor position precisely.
    *   **Advantages:** Smooth torque, higher efficiency, quieter operation.
    *   **Disadvantages:** Requires precise position information, more complex PWM generation.
*   **Back-EMF based Sensorless Control:**
    *   **Advantages:** Eliminates costly and potentially unreliable Hall sensors or encoders.
    *   **Challenges:** Difficult at very low speeds or during start-up where back-EMF is weak or zero. Requires sophisticated algorithms to estimate position.
*   **Maximum Torque Per Ampere (MTPA):**
    *   Control strategy to maximize torque output for a given current, leading to higher efficiency.

**(Reference: Ehsani et al., 3rd Ed., Chapter 7 - Electric Motors and Drives)**
**(Reference: Husain, 2nd Ed., Chapter 5 - Electric Motor Drives)**
**(Reference: Larminie & Lowry, 2nd Ed., Chapter 6 - Brushless DC Motors)**

---

### 8. Important Points to Remember

*   BLDC motors use **electronic commutation** for efficient operation.
*   Torque is primarily controlled by regulating the **stator phase current** using PWM.
*   Speed is primarily controlled by regulating the **average voltage** applied to the stator windings, also using PWM.
*   **Closed-loop control** using feedback (current and/or speed sensors) is essential for precise and dynamic control.
*   **Hall effect sensors** are common for position sensing, but **sensorless methods** are gaining popularity.
*   **Field-Oriented Control (FOC)** offers superior performance but is more complex than simple six-step commutation.
*   In EVs, a **cascade control structure** (speed outer loop, current inner loop) is commonly used.
*   Understanding the **back-EMF** is crucial for both sensor-based and sensorless BLDC control.

---

### 9. Practice Questions and Answers

**Question 1:** What is the primary method used to control the torque of a BLDC motor?
    a) Varying the motor voltage
    b) Varying the stator phase current
    c) Changing the number of poles
    d) Adjusting the PWM frequency

**Answer:** b) Varying the stator phase current. Torque is directly proportional to the stator current amplitude.

---

**Question 2:** How is speed typically controlled in a BLDC motor drive?
    a) By directly controlling the rotor magnets' strength
    b) By regulating the PWM duty cycle to vary the effective voltage
    c) By switching the motor winding connections
    d) By altering the DC supply voltage through a resistor

**Answer:** b) By regulating the PWM duty cycle to vary the effective voltage. The average voltage applied to the windings determines the motor speed.

---

**Question 3:** Name two common types of position sensors used in BLDC motor control.
    a) Potentiometers and Thermocouples
    b) Hall Effect Sensors and Encoders
    c) Accelerometers and Gyroscopes
    d) Strain Gauges and Pressure Sensors

**Answer:** b) Hall Effect Sensors and Encoders. Hall sensors detect magnetic fields, while encoders provide precise rotational position data.

---

**Question 4:** Briefly explain the concept of sensorless control for BLDC motors.
**Answer:** Sensorless control uses algorithms to estimate the rotor's position without dedicated sensors like Hall effect sensors. This is typically done by monitoring the back-EMF generated in the unenergized stator windings.

---

**Question 5:** In a typical EV application, a speed controller for a BLDC motor often acts as the ___________ loop, while a current controller acts as the ___________ loop.
    a) Inner, Outer
    b) Outer, Inner
    c) Parallel, Series
    d) Series, Parallel

**Answer:** b) Outer, Inner. The speed loop sets the desired torque (current) command, and the current loop ensures this commanded current is achieved.

---

**Question 6 (Conceptual):** If a BLDC motor is operating at a constant speed but the load torque suddenly increases, what will happen to the stator current and torque if the PWM duty cycle remains unchanged?
**Answer:** If the PWM duty cycle remains unchanged, the applied average voltage also remains unchanged. However, the increased load torque will cause the motor to slow down slightly, which in turn reduces the back-EMF. According to the voltage equation ($V_{applied} - K_e \omega = I_a R_a$), a reduced back-EMF (due to lower speed) would lead to an increase in phase current ($I_a$) and consequently an increase in torque to try and meet the load. However, if the motor cannot overcome the load, it will continue to slow down, and the torque output will be limited by the available current for that PWM duty cycle. In an open-loop system, the speed would decrease. In a closed-loop system, the speed controller would detect the speed drop and increase the PWM duty cycle to restore the speed.

---

**Question 7 (Application):** An electric vehicle needs to provide maximum acceleration from standstill. What would be the strategy for controlling its BLDC motor?
**Answer:** To achieve maximum acceleration from standstill, the BLDC motor controller would aim to deliver maximum possible torque. This is achieved by:
1.  Setting the desired speed reference to the maximum achievable or to a point that demands maximum torque.
2.  Maximizing the PWM duty cycle to supply maximum allowable current to the stator windings, within the motor's and inverter's thermal and current limits.
3.  Using a fast and responsive current control loop to ensure the motor produces this high torque quickly.
4.  In FOC, aligning the stator current vector to produce maximum torque (MTPA strategy).

---

This concludes the study notes for BLDC motor torque and speed control methods. Refer to the specified textbooks for more in-depth details and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
