---
title: "Electrical Actuation System-I"
subject: "MECHATRONIC SYSTEMS"
module: "Module 2: Actuators and mechanisms: Mechanical Actuation System"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b9e"
status: "completed"
scrapedAt: "2026-05-23T16:42:21.971Z"
---
# MECHATRONIC SYSTEMS - Module 2: Actuators and Mechanisms: Mechanical Actuation System

## Topic: Electrical Actuation System - I

---

### **Introduction to Electrical Actuation Systems**

Electrical actuators are the devices that convert electrical energy into mechanical motion or force. They are fundamental components in mechatronic systems, enabling the system to interact with its environment. This section will introduce the basic principles and common types of electrical actuators.

---

### **1. Learning Outcomes**

By the end of this topic, you should be able to:

*   **Understand the role of electrical actuators in mechatronic systems.** (CO1: K2)
*   **Identify and describe the operating principles of common electrical actuators like DC motors and stepper motors.** (CO2: K2)
*   **Explain the basic characteristics and parameters of electrical actuators.** (CO4: K3)
*   **Differentiate between the applications of various electrical actuators.** (CO1: K2)

---

### **2. Key Concepts and Definitions**

*   **Actuator:** A component of a mechatronic system that converts an input signal (typically electrical) into a physical action (motion, force, torque, etc.).
*   **Electrical Actuator:** An actuator that utilizes electrical energy as its primary input.
*   **Torque:** The rotational equivalent of force; a twisting or turning force.
*   **Speed/Velocity:** The rate at which an object moves.
*   **Force:** A push or pull on an object.
*   **Efficiency:** The ratio of output mechanical power to input electrical power.
*   **Duty Cycle:** The proportion of time an actuator is active over a given period.

---

### **3. Types of Electrical Actuators (Introduction)**

Electrical actuators can be broadly categorized based on their output motion (rotary or linear) and the underlying physical principles of operation. This section focuses on common rotary actuators.

---

#### **3.1. Direct Current (DC) Motors**

DC motors are widely used in mechatronic systems due to their simplicity, ease of control, and good performance characteristics.

**3.1.1. Operating Principle:**

*   **Lorentz Force:** A current-carrying conductor placed in a magnetic field experiences a force. This is the fundamental principle.
*   **Construction:**
    *   **Stator:** The stationary part, typically containing permanent magnets or electromagnets to provide the magnetic field.
    *   **Rotor (Armature):** The rotating part, consisting of coils of wire wound around a soft iron core.
    *   **Commutator:** A segmented ring that reverses the direction of current in the rotor coils as it rotates, ensuring continuous unidirectional torque.
    *   **Brushes:** Stationary contacts that provide electrical connection to the rotating commutator.

**3.1.2. Working:**

1.  When a voltage is applied across the brushes, current flows through the rotor coils.
2.  The rotor coils are placed within the magnetic field produced by the stator.
3.  According to the Lorentz force law, a force acts on the current-carrying conductors in the rotor coils.
4.  These forces create a torque, causing the rotor to rotate.
5.  As the rotor rotates, the commutator segments switch contact with the brushes, reversing the current direction in the coils at the appropriate moment to maintain continuous torque in the same direction.

**3.1.3. Types of DC Motors:**

*   **Brushed DC Motors:** The most common type, using brushes and a commutator.
    *   **Permanent Magnet DC (PMDC) Motors:** Stator field is created by permanent magnets. Simple, efficient for small sizes. (Histand & Alciatore)
    *   **Series Wound DC Motors:** Field winding is in series with the armature. High starting torque, speed varies greatly with load.
    *   **Shunt Wound DC Motors:** Field winding is in parallel with the armature. Relatively constant speed regardless of load.
    *   **Compound Wound DC Motors:** Combination of series and shunt windings, offering characteristics of both.

*   **Brushless DC (BLDC) Motors:** Commutation is done electronically, eliminating brushes and commutator. More complex control but offer higher reliability, efficiency, and longer lifespan. (Bolton)

**3.1.4. Key Parameters and Characteristics:**

*   **Torque-Speed Characteristic:** A fundamental curve showing the relationship between the motor's torque output and its rotational speed. Typically, torque decreases as speed increases.
    *   *Example:* A PMDC motor might have a linear torque-speed characteristic. (Histand & Alciatore)
*   **Armature Resistance ($R_a$):** The electrical resistance of the rotor coils.
*   **Back EMF ($E_b$):** A voltage generated in the rotor coils due to their rotation in the magnetic field. It opposes the applied voltage. $E_b \propto \omega$ (where $\omega$ is angular velocity).
*   **Torque Constant ($K_t$):** Relates the motor torque to the armature current ($T = K_t I_a$). Units are typically N-m/A.
*   **Voltage Constant ($K_v$):** Relates the back EMF to the motor speed ($E_b = K_v \omega$). Units are typically V/(rad/s) or V/(rpm).
*   **Power:** Output mechanical power ($P_{out} = T\omega$) and input electrical power ($P_{in} = VI$).
*   **Efficiency ($\eta$):** $\eta = P_{out} / P_{in} = (T\omega) / (VI)$.

**3.1.5. Applications:**

*   Toys, electric vehicles, robotics (joint actuation), power tools, automotive applications (window regulators, wipers).

---

#### **3.2. Stepper Motors**

Stepper motors are DC motors that divide a full rotation into a number of equal steps. They are ideal for precise positioning applications.

**3.2.1. Operating Principle:**

*   **Electromagnetic Attraction/Repulsion:** Stepper motors work by sequentially energizing electromagnets (stator poles) to attract or repel rotor poles, causing the rotor to move in discrete steps.

**3.2.2. Construction:**

*   **Stator:** Has multiple poles wound with coils that can be energized independently or in combination.
*   **Rotor:** Typically a permanent magnet or toothed ferromagnetic material.

**3.2.3. Types of Stepper Motors:**

*   **Permanent Magnet Stepper Motor:** Rotor is a permanent magnet with external poles. Stator poles are electromagnets.
*   **Variable Reluctance (VR) Stepper Motor:** Rotor is made of soft iron with teeth and has no permanent magnets. Rotor aligns with the energized stator pole to minimize reluctance in the magnetic path.
*   **Hybrid Stepper Motor:** Combines features of both permanent magnet and variable reluctance motors. Rotor has teeth and is magnetized. This type offers the best performance (step resolution, torque). (Shetty & Kolk)

**3.2.4. Working (Simplified Hybrid Stepper Motor):**

1.  The stator has multiple phases, each with several poles.
2.  When a phase is energized, it creates a magnetic field.
3.  The rotor, with its magnetized teeth, aligns itself with the energized stator poles to minimize magnetic reluctance.
4.  By sequentially energizing different phases in a specific order (stepping sequence), the rotor is made to rotate in discrete angular steps.

**3.2.5. Key Parameters and Characteristics:**

*   **Step Angle:** The angle the rotor moves with each step. It depends on the number of stator phases and the number of rotor teeth.
    *   *Formula:* Step Angle = 360° / (Number of phases × Number of rotor teeth/poles)
    *   *Example:* A motor with 2 phases and 50 rotor teeth has a step angle of 360° / (2 × 50) = 3.6°.
*   **Holding Torque:** The torque that can be applied to the rotor when the motor is energized but not stepping, without causing it to move.
*   **Pull-in Torque:** The maximum torque at which the motor can start stepping without losing steps.
*   **Pull-out Torque:** The maximum torque at which the motor can continue stepping at a given speed without losing steps.
*   **Slew Rate:** The maximum stepping rate at which the motor can operate without losing steps.
*   **Resolution:** The number of steps per revolution. Higher resolution means finer positional control.

**3.2.6. Control Methods:**

*   **Full Step:** Energizes two phases at a time, resulting in maximum torque.
*   **Half Step:** Alternates between energizing one phase and then two phases. Doubles the resolution and provides smoother motion.
*   **Microstepping:** Divides each full step into smaller sub-steps by controlling the current to the phases in a sinusoidal manner. Achieves much higher resolution and smoother motion, reducing resonance. (Bishop)

**3.2.7. Applications:**

*   Printers (paper feed, print head movement), CNC machines, robotics (precise positioning of arms), disk drives, medical equipment.

---

### **4. Comparison of DC Motors and Stepper Motors**

| Feature           | DC Motor (Brushed)                                    | Stepper Motor                                       |
| :---------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| **Primary Function** | Continuous rotation, speed control.                   | Precise angular positioning, incremental motion.      |
| **Positioning**   | Requires feedback (e.g., encoder) for precise positioning. | Open-loop positioning is inherent due to steps.       |
| **Speed Control** | Relatively easy to control speed via voltage.         | Speed is proportional to stepping frequency.          |
| **Torque**        | Higher torque for a given size/weight.                | Torque drops significantly at higher speeds.         |
| **Efficiency**    | Generally higher efficiency, especially at higher loads. | Lower efficiency, consumes power even when holding.   |
| **Complexity**    | Mechanically simpler (brushes/commutator).           | Electronically more complex (driver circuitry).     |
| **Cost**          | Generally lower cost for basic applications.          | Can be higher due to driver circuitry and precision. |
| **Noise/Vibration** | Can be noisy due to brushes.                          | Can experience resonance at certain speeds.          |

---

### **5. Practice Questions and Exercises**

**Question 1:**
A DC motor is characterized by a torque constant $K_t = 0.05$ N-m/A and a voltage constant $K_v = 0.01$ V/(rad/s). If the armature resistance $R_a = 2 \Omega$, what is the speed of the motor when it delivers a torque of $0.2$ N-m and is supplied with $12$ V?

**Answer 1:**
1.  **Calculate armature current ($I_a$):**
    Using the torque equation: $T = K_t I_a$
    $0.2 \text{ N-m} = 0.05 \text{ N-m/A} \times I_a$
    $I_a = 0.2 / 0.05 = 4$ A

2.  **Calculate back EMF ($E_b$):**
    Using Ohm's law for the armature circuit: $V = E_b + I_a R_a$
    $12 \text{ V} = E_b + (4 \text{ A} \times 2 \Omega)$
    $12 \text{ V} = E_b + 8 \text{ V}$
    $E_b = 12 \text{ V} - 8 \text{ V} = 4$ V

3.  **Calculate angular velocity ($\omega$):**
    Using the back EMF equation: $E_b = K_v \omega$
    $4 \text{ V} = 0.01 \text{ V/(rad/s)} \times \omega$
    $\omega = 4 / 0.01 = 400$ rad/s

**Question 2:**
A hybrid stepper motor has a step angle of $1.8^\circ$. How many steps are required to complete one revolution? If the motor is driven at a stepping rate of $500$ steps per second, what is its speed in RPM?

**Answer 2:**
1.  **Steps per revolution:**
    Number of steps per revolution = $360^\circ$ / Step Angle
    Steps per revolution = $360^\circ / 1.8^\circ = 200$ steps/revolution

2.  **Speed in RPM:**
    Steps per second = 500 steps/s
    Steps per minute = 500 steps/s * 60 s/min = 30,000 steps/min
    Speed in RPM = Steps per minute / Steps per revolution
    Speed in RPM = 30,000 steps/min / 200 steps/revolution = 150 RPM

**Question 3:**
Explain the primary advantage of using a stepper motor over a brushed DC motor in an application that requires precise positioning of a robotic arm. (CO1: K2)

**Answer 3:**
The primary advantage of a stepper motor for precise positioning is its inherent open-loop positional control. Each electrical pulse sent to the stepper motor driver results in a predictable, discrete angular movement (a step). This means that the motor's position can be controlled directly by counting the pulses sent to it, without the need for external feedback sensors like encoders, which are typically required for precise positioning with brushed DC motors.

---

### **6. Important Points to Remember**

*   Electrical actuators are crucial for converting electrical signals into mechanical action in mechatronic systems.
*   DC motors provide continuous rotation and are controlled by voltage and current. Their performance is described by torque-speed characteristics and constants ($K_t$, $K_v$).
*   Stepper motors are ideal for precise incremental motion and open-loop positioning. Their movement is controlled by the stepping frequency and sequence.
*   The choice between a DC motor and a stepper motor depends heavily on the specific application requirements, particularly regarding the need for precise positioning versus continuous speed control.
*   Efficiency and power considerations are vital when selecting and designing with actuators.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. References and Further Reading**

*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* (4th Edition). Pearson Education. (Covers DC motor principles and control).
*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems.* McGraw-Hill Series in Mechanical Engineering. (Provides excellent coverage of DC motor characteristics and applications).
*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics system design.* CL-Engineering. (Discusses various actuator types including stepper motors and their system design aspects).
*   **Bishop, R. H. (2017).** *Mechatronics: an introduction.* CRC Press. (Offers a foundational understanding of mechatronic components, including electric motors).

---

### **8. Alignment with Course Outcomes**

*   **CO1 (Comprehend the importance of sensors and actuators):** This topic directly addresses the importance of electrical actuators as a key component enabling mechatronic systems to perform physical tasks.
*   **CO2 (Identify actuator mechanisms and signal conditioning):** We have identified the mechanisms of DC motors (Lorentz force, commutation) and stepper motors (electromagnetic alignment) and their internal working principles.
*   **CO4 (Analyze the models and responses of different systems):** The discussion of torque-speed characteristics, back EMF, and step angles provides the foundational understanding needed to analyze the behavior and response of these actuator systems.

---