---
title: "Electrical Actuation System-I"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 2: Actuators and mechanisms: Mechanical Actuation System"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cbe"
status: "completed"
scrapedAt: "2026-05-23T16:43:25.209Z"
---
# MECHATRONIC SYSTEMS AND CONTROL: Module 2 - Actuators and Mechanisms: Mechanical Actuation System

## Topic: Electrical Actuation System-I

---

### **Introduction to Electrical Actuation Systems**

Electrical actuators are devices that convert electrical energy into mechanical motion. They are fundamental components in mechatronic systems, enabling control over physical processes. This section will introduce the basic principles and common types of electrical actuators.

**Key Concept:** Actuators are the "muscles" of a mechatronic system, providing the force or motion needed to interact with the physical world.

**Learning Outcome Addressed:**
*   **CO1 (K2):** Comprehend the importance of sensors and actuators with application to mechatronic systems. (Understanding the role of electrical actuators in providing mechanical output from electrical input).

**Reference (General):**
*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* (Chapter on Actuators)
*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems.* (Chapter on Actuators)

---

### **1. DC Motors**

DC motors are widely used in mechatronic systems due to their simple control characteristics and readily available power supplies. They convert DC electrical energy into rotational mechanical energy.

**Key Concepts & Definitions:**

*   **Stator:** The stationary part of the motor, typically containing field windings or permanent magnets to create a magnetic field.
*   **Rotor (Armature):** The rotating part of the motor, usually consisting of coils of wire.
*   **Commutator:** A mechanical switch that reverses the direction of current in the rotor coils as it rotates, ensuring continuous torque.
*   **Brushes:** Stationary contacts that conduct current to the commutator.
*   **Torque:** The rotational force produced by the motor.
*   **Speed:** The rotational velocity of the motor shaft.

**Working Principle:**

The operation of a DC motor is based on the Lorentz force law, which states that a current-carrying conductor placed in a magnetic field experiences a force. In a DC motor, the magnetic field is produced by the stator, and the current-carrying conductor is the rotor winding. The interaction between the magnetic field and the current in the rotor coils generates a torque, causing the rotor to spin. The commutator and brushes ensure that the torque is always in the same direction.

**Types of DC Motors (based on field winding connection):**

*   **Permanent Magnet DC (PMDC) Motor:** The stator field is created by permanent magnets.
    *   **Advantages:** Simple construction, no need for separate field excitation, good starting torque.
    *   **Disadvantages:** Field strength can degrade over time, limited field control.
    *   **Example:** Small fans, toys, battery-powered devices.
*   **Series DC Motor:** The field winding is connected in series with the armature winding.
    *   **Characteristics:** High starting torque, speed varies significantly with load.
    *   **Example:** Traction motors (electric vehicles, trains), cranes, hoists.
*   **Shunt DC Motor:** The field winding is connected in parallel (shunt) with the armature winding.
    *   **Characteristics:** Relatively constant speed irrespective of load, lower starting torque compared to series motors.
    *   **Example:** Machine tools, conveyors, pumps.
*   **Compound DC Motor:** Combines characteristics of both series and shunt motors, with both series and shunt field windings.
    *   **Characteristics:** Good starting torque and relatively constant speed.
    *   **Example:** Elevators, presses.

**Electrical Equation (Simplified):**

The relationship between voltage ($V$), armature current ($I_a$), armature resistance ($R_a$), and back EMF ($E_b$) is given by:
$V = I_a R_a + E_b$

The back EMF is proportional to the motor's speed ($\omega$):
$E_b = k_e \omega$

The torque ($T$) produced by the motor is proportional to the armature current and the field flux ($\phi$):
$T = k_t \phi I_a$
For PMDC motors, $\phi$ is constant, so $T = k_t I_a$.

**Control of DC Motors:**

*   **Speed Control:** Primarily achieved by varying the armature voltage or armature current.
    *   **Voltage Control:** The most common method. Applying a lower voltage reduces the speed.
    *   **Field Control (for shunt/series motors):** Reducing the field current (and thus field strength) increases speed, but typically at the expense of torque.
*   **Torque Control:** Achieved by controlling the armature current.

**Learning Outcomes Addressed:**
*   **CO1 (K2):** Comprehend the importance of actuators (DC motors as a key electrical actuator).
*   **CO2 (K2):** Identify actuator mechanisms (basic components and working principle of DC motors).
*   **CO4 (K3):** Analyze the models and responses of different systems (understanding the electrical and torque equations).

**Reference:**
*   **Bolton, W. (2010).** Chapter on DC Motors.
*   **Histand, M. B., & Alciatore, D. G. (2003).** Chapter on DC Motors.
*   **Shetty, D., & Kolk, R. A. (2010).** Section on DC Motor Actuation.

---

### **2. Stepper Motors**

Stepper motors are brushless DC electric motors that divide a full rotation into a number of equal steps. They are known for their ability to move in discrete steps without requiring a feedback sensor (open-loop control).

**Key Concepts & Definitions:**

*   **Step Angle:** The angle the rotor rotates for each step input. It is determined by the number of rotor poles and stator poles.
    *   $\text{Step Angle} = \frac{360^\circ}{\text{Number of Steps per Revolution}}$
    *   $\text{Number of Steps per Revolution} = N_r \times N_s / \text{gcd}(N_r, N_s)$ (for variable reluctance), or $N_r \times N_s$ (for permanent magnet).
*   **Full Step:** The motor moves from one step position to the next.
*   **Half Step:** An intermediate position between full steps, achieved by energizing coils in a specific sequence.
*   **Microstepping:** Dividing each step into smaller increments by varying the current to the stator coils proportionally. This results in smoother motion and higher resolution.
*   **Rotor:** The rotating part, typically made of permanent magnets or toothed iron pieces.
*   **Stator:** The stationary part with electromagnets (windings).

**Types of Stepper Motors:**

*   **Variable Reluctance (VR) Stepper Motor:** The rotor is made of soft iron and has teeth. Torque is produced by minimizing the reluctance of the magnetic path.
    *   **Advantages:** Simple construction, can achieve high speeds.
    *   **Disadvantages:** Lower torque, lower step resolution.
*   **Permanent Magnet (PM) Stepper Motor:** The rotor is a permanent magnet with poles.
    *   **Advantages:** Higher torque, good holding torque.
    *   **Disadvantages:** Step angle is fixed by rotor construction.
*   **Hybrid Stepper Motor:** Combines features of VR and PM motors. The rotor has permanent magnets and teeth, and the stator poles are also toothed.
    *   **Advantages:** High torque, high step resolution, good speed capabilities. This is the most common type in mechatronics.
    *   **Example:** Printers, CNC machines, robotics, disk drives.

**Working Principle (Hybrid Stepper Motor):**

The stator has multiple windings (phases). By sequentially energizing these windings, a rotating magnetic field is created. The rotor, with its permanent magnet poles, aligns itself with this rotating field, causing it to step forward.

**Control of Stepper Motors:**

Stepper motors are controlled by sending a sequence of pulses to their windings. The direction of rotation is determined by the sequence of pulses, and the speed is determined by the frequency of the pulses.

*   **Full-Step Driving:**
    *   **Wave Drive (1-phase ON):** Lowest torque, lowest power consumption.
    *   **Two-Phase ON:** Higher torque, higher power consumption.
*   **Half-Step Driving:** Doubles the resolution, smoother motion than full-step.
*   **Microstepping:** Achieved by controlling the current in the stator coils with Pulse Width Modulation (PWM). This provides very smooth motion and higher effective resolution.

**Advantages of Stepper Motors:**

*   Precise positioning in open-loop control (no feedback encoder needed for basic applications).
*   Excellent holding torque when stationary.
*   Good torque at low speeds.
*   Simple to control with digital pulses.

**Disadvantages of Stepper Motors:**

*   Can lose steps if overloaded or driven too fast (hence, open-loop control is not always foolproof).
*   Lower efficiency, consumes power even when stationary (holding torque).
*   Torque decreases significantly at higher speeds.
*   Can be noisy.

**Learning Outcomes Addressed:**
*   **CO1 (K2):** Comprehend the importance of actuators (stepper motors for precise positioning).
*   **CO2 (K2):** Identify actuator mechanisms (construction and types of stepper motors).
*   **CO4 (K3):** Analyze the models and responses of different systems (understanding step angle and control methods).

**Reference:**
*   **Bolton, W. (2010).** Chapter on Stepper Motors.
*   **Histand, M. B., & Alciatore, D. G. (2003).** Chapter on Stepper Motors.
*   **Bishop, R. H. (2017).** Section on Stepper Motor Operation.

---

### **3. Brushless DC (BLDC) Motors**

Brushless DC motors are DC motors that do not use brushes. Instead, they use electronic commutation to switch the current in the stator windings. They are known for their high efficiency, long lifespan, and high power density.

**Key Concepts & Definitions:**

*   **Commutation:** The process of switching the current direction in the stator windings to maintain continuous rotation. In BLDC motors, this is done electronically.
*   **Hall Effect Sensors:** Commonly used to detect the position of the rotor magnets, providing feedback for the electronic commutation.
*   **Electronic Commutation:** A controller (often a microcontroller) uses rotor position feedback to energize the stator windings in the correct sequence.
*   **Stator:** Contains the windings.
*   **Rotor:** Contains permanent magnets.

**Working Principle:**

The rotor with permanent magnets rotates within the stator, which has electromagnets. The controller monitors the rotor position using sensors (e.g., Hall effect sensors). Based on this position, it energizes the appropriate stator windings to create a magnetic field that attracts/repels the rotor magnets, causing continuous rotation.

**Types of BLDC Motors (based on stator/rotor configuration):**

*   **Outrunner:** The rotor (magnets) surrounds the stator (windings).
    *   **Advantages:** High torque at low speeds, simple construction.
    *   **Example:** Electric aircraft, electric bicycles, drones.
*   **Inrunner:** The stator (windings) surrounds the rotor (magnets).
    *   **Advantages:** Higher speed capabilities, more compact for a given power.
    *   **Example:** Power tools, electric vehicles, high-performance applications.

**Control of BLDC Motors:**

*   **Speed Control:** Achieved by varying the voltage applied to the motor or by using PWM to control the duty cycle of the switching signals to the windings.
*   **Torque Control:** Directly related to the current flowing through the windings.

**Advantages of BLDC Motors:**

*   High efficiency.
*   Longer lifespan (no brushes to wear out).
*   Higher power density (more power for a given size/weight).
*   Quieter operation.
*   Better heat dissipation (windings on the stator).
*   Precise speed and torque control possible.

**Disadvantages of BLDC Motors:**

*   More complex electronic control circuitry required.
*   Higher initial cost compared to brushed DC motors.
*   Requires rotor position feedback.

**Learning Outcomes Addressed:**
*   **CO1 (K2):** Comprehend the importance of actuators (BLDC motors for efficiency and longevity).
*   **CO2 (K2):** Identify actuator mechanisms (basic concept of electronic commutation).
*   **CO4 (K3):** Analyze the models and responses of different systems (understanding the role of electronic control for speed/torque).

**Reference:**
*   **Bolton, W. (2010).** Chapter on Brushless DC Motors.
*   **Histand, M. B., & Alciatore, D. G. (2003).** Chapter on Brushless DC Motors.
*   **Merzouki, R., et al. (2003).** Potential reference for advanced control aspects of BLDC motors.

---

### **Practice Questions & Exercises**

1.  **Question:** A mechatronic system requires precise positioning with a step resolution of 1.8 degrees. What type of motor would be most suitable for this application, and what are its key advantages?
    *   **Answer:** A stepper motor would be most suitable. Its key advantages include precise positioning in open-loop control and good holding torque.

2.  **Question:** Explain the fundamental difference in how motion is generated in a brushed DC motor versus a brushless DC (BLDC) motor.
    *   **Answer:**
        *   **Brushed DC Motor:** Uses mechanical commutation (commutator and brushes) to switch the current direction in the rotor windings, producing torque.
        *   **BLDC Motor:** Uses electronic commutation, typically with Hall effect sensors or sensorless techniques, to switch current in the stator windings based on rotor position, creating torque.

3.  **Question:** For a given torque requirement at low speed, which type of DC motor is generally preferred: a series DC motor or a shunt DC motor? Justify your answer.
    *   **Answer:** A series DC motor is generally preferred for high torque at low speed. This is because the field flux is proportional to the armature current (since they are in series), leading to a rapid increase in torque as current increases, which is beneficial for starting and low-speed operation.

4.  **Exercise:** Consider a hybrid stepper motor with 50 teeth on the rotor and 4 stator poles. If the stator has two phases, and each phase has 4 poles (2 poles per phase), what is the full step angle of this motor?
    *   **Hint:** The number of steps per revolution for a hybrid stepper motor is typically $N_{rotor\_teeth} \times N_{phases}$.
    *   **Calculation:** Number of steps per revolution = 50 teeth * 2 phases = 100 steps.
    *   **Step Angle:** $360^\circ / 100 \text{ steps} = 3.6^\circ$.
    *   **Answer:** The full step angle is 3.6 degrees.

5.  **Question:** What is the primary advantage of using microstepping in stepper motor control compared to full-stepping?
    *   **Answer:** Microstepping significantly improves the smoothness of motion and increases the effective resolution of the motor by dividing each full step into smaller increments. This reduces torque ripple and vibration.

---

### **Important Points to Remember**

*   **Actuators:** Convert electrical energy into mechanical energy.
*   **DC Motors:** Characterized by continuous rotation, controlled by voltage/current. PMDC are simple, series have high starting torque, shunt have constant speed.
*   **Stepper Motors:** Move in discrete steps, enable open-loop positioning, controlled by pulse sequences. Hybrid steppers offer a good balance of torque and resolution.
*   **BLDC Motors:** Offer high efficiency, long lifespan, and precise control via electronic commutation, but require more complex electronics.
*   Understanding the trade-offs between different motor types is crucial for selecting the appropriate actuator for a mechatronic system.

---

This concludes the first part of the Electrical Actuation System. The next section will likely cover other types of electrical actuators like servo motors and solenoids.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
