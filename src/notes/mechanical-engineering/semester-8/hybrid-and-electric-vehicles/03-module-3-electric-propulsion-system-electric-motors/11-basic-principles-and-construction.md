---
title: "basic principles and construction"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464454"
status: "completed"
scrapedAt: "2026-05-20T18:21:04.648Z"
---
# HYBRID AND ELECTRIC VEHICLES: Module 3 - Electric Propulsion System – Electric Motors

## Topic: Basic Principles and Construction

This module delves into the core of electric propulsion in vehicles, focusing on the electric motors that provide the motive force. We will explore their fundamental operating principles and the key components that make up their construction.

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the fundamental principles of electromagnetism that underpin electric motor operation.
*   Identify the basic components of common electric motor types used in EVs.
*   Explain how electrical energy is converted into mechanical energy in electric motors.
*   Differentiate between the construction of key electric motor technologies.
*   Relate motor principles and construction to their application in hybrid and electric vehicles.

### Course Outcome Alignment

This topic directly contributes to:

*   **CO3: Describe various motors and drives of Electric vehicles. (Knowledge Level: K2)**
    *   This topic lays the foundational knowledge for understanding the operation and characteristics of different EV motor types, a prerequisite for describing them.

### 1. Fundamental Principles of Electromagnetism

Electric motors operate based on the fundamental principles of electromagnetism, specifically the interaction between magnetic fields and electric currents.

#### 1.1. Lorentz Force

*   **Definition:** The Lorentz force is the force experienced by a charged particle moving in a magnetic field. In an electric motor, this force acts on the current-carrying conductors within a magnetic field.
*   **Formula:** $F = q(E + v \times B)$
    *   Where:
        *   $F$ is the force on the charged particle.
        *   $q$ is the charge of the particle.
        *   $E$ is the electric field.
        *   $v$ is the velocity of the particle.
        *   $B$ is the magnetic field.
    *   **Key takeaway for motors:** For motor operation, the $E$ field is negligible, and the force is primarily due to the magnetic field. Therefore, $F = q(v \times B)$.
*   **Application in Motors:** When a current-carrying conductor (which consists of moving charges) is placed in a magnetic field, it experiences a force. This force is perpendicular to both the direction of the current and the direction of the magnetic field.
    *   **Fleming's Left-Hand Rule:** This rule helps determine the direction of the force on a current-carrying conductor in a magnetic field.
        *   **Thumb:** Represents the direction of the Force.
        *   **Forefinger:** Represents the direction of the Magnetic Field (North to South).
        *   **Middle Finger:** Represents the direction of the Current.

#### 1.2. Electromagnetic Induction (Faraday's Law)

*   **Definition:** Faraday's Law of Electromagnetic Induction states that a changing magnetic flux through a circuit induces an electromotive force (EMF), which can drive a current.
*   **Formula:** $\mathcal{E} = -\frac{d\Phi_B}{dt}$
    *   Where:
        *   $\mathcal{E}$ is the induced EMF (voltage).
        *   $\Phi_B$ is the magnetic flux.
        *   $t$ is time.
    *   **Lenz's Law (the negative sign):** The induced current flows in a direction that opposes the change in magnetic flux that produced it.
*   **Application in Motors:**
    *   **Back EMF (Counter EMF):** As the rotor of an electric motor rotates within the magnetic field, conductors on the rotor also move through the magnetic field. This movement induces an EMF in the rotor conductors. This induced EMF opposes the applied voltage and is known as back EMF.
    *   **Importance of Back EMF:** Back EMF is crucial for motor speed regulation. The motor speed adjusts until the back EMF nearly equals the applied voltage, limiting the current drawn by the motor.

#### 1.3. Magnetic Fields

*   **Sources of Magnetic Fields:**
    *   **Permanent Magnets:** Materials with intrinsic magnetic properties that produce a constant magnetic field. Found in certain types of DC motors and Synchronous Motors (e.g., Permanent Magnet Synchronous Motors - PMSM).
    *   **Electromagnets:** Created by passing electric current through coils of wire. The magnetic field strength is proportional to the current and the number of turns in the coil. Used in most AC motors (induction motors, wound-rotor synchronous motors) and some DC motors.
*   **Magnetic Flux ($\Phi_B$)**: The measure of the total magnetic field passing through a given area.
*   **Magnetic Flux Density (B):** The amount of magnetic flux per unit area, often referred to as the strength of the magnetic field.

### 2. Basic Components of Electric Motors

While specific designs vary, most electric motors share fundamental components that are essential for their operation.

#### 2.1. Stator

*   **Definition:** The stationary part of the electric motor.
*   **Function:** To provide a magnetic field. This magnetic field can be generated by permanent magnets or by electromagnets (coils of wire).
*   **Construction:**
    *   **Stator Core:** Typically made of laminated sheets of soft iron or silicon steel. Lamination reduces eddy current losses, which are currents induced in the conductive core material by changing magnetic fields.
    *   **Stator Windings:** Coils of insulated copper wire are wound around the stator core. When current flows through these windings, they create magnetic poles. In AC motors, these windings are arranged to produce a rotating magnetic field.
    *   **Permanent Magnets (in some designs):** Instead of windings, permanent magnets are mounted on the stator to create the stationary magnetic field.

#### 2.2. Rotor

*   **Definition:** The rotating part of the electric motor.
*   **Function:** To produce torque, which causes rotation. It interacts with the magnetic field of the stator.
*   **Construction:**
    *   **Rotor Core:** Also typically made of laminated steel to minimize eddy current losses.
    *   **Rotor Windings or Conductors:**
        *   **Squirrel Cage Rotor (Induction Motors):** Consists of conducting bars (e.g., aluminum or copper) embedded in the rotor core and shorted at both ends by end rings. This creates a "squirrel cage" like structure. No external electrical connection is required for the rotor.
        *   **Wound Rotor:** Consists of coils of wire wound on the rotor core. These windings are connected to slip rings or a commutator, allowing electrical connection to an external circuit.
        *   **Permanent Magnets (in PMSM):** Magnets are mounted on or embedded within the rotor to provide the rotor's magnetic field.
    *   **Shaft:** A central shaft connects the rotor to the vehicle's drivetrain.

#### 2.3. Air Gap

*   **Definition:** The small space between the stator and the rotor.
*   **Function:** Allows the rotor to rotate freely without physical contact with the stator.
*   **Importance:** A smaller air gap generally results in a stronger magnetic coupling between the stator and rotor, leading to higher torque and efficiency. However, a very small air gap can increase manufacturing complexity and risk of mechanical contact.

#### 2.4. Bearings

*   **Function:** Support the rotor shaft and allow it to rotate smoothly with minimal friction.
*   **Types:** Ball bearings or roller bearings are commonly used.

#### 2.5. Commutator and Brushes (DC Motors only)

*   **Commutator:** A rotating electrical switch that reverses the direction of current in the rotor windings at the appropriate time to ensure continuous rotation. It is typically a segmented copper cylinder mounted on the rotor shaft.
*   **Brushes:** Stationary electrical contacts (usually made of carbon) that press against the commutator segments. They conduct current from the stationary power source to the rotating rotor windings.

### 3. Conversion of Electrical to Mechanical Energy

The fundamental process of converting electrical energy into mechanical energy in an electric motor can be summarized as follows:

1.  **Current in Stator:** Current flows through the stator windings (or the stator has permanent magnets), creating a magnetic field.
2.  **Interaction with Rotor:** The rotor's conductors (or permanent magnets) are placed within this magnetic field.
3.  **Lorentz Force on Rotor:** When current flows through the rotor conductors (either induced or supplied), it experiences a force due to its interaction with the stator's magnetic field (Lorentz force).
4.  **Torque Production:** These forces, acting at a distance from the axis of rotation, create a torque.
5.  **Rotation:** The torque causes the rotor to spin.
6.  **Continuous Rotation:**
    *   **DC Motors:** The commutator and brushes ensure that the current direction in the rotor windings is reversed as the rotor turns, maintaining the torque in the same direction.
    *   **AC Motors:** The stator windings are typically energized in a way that creates a rotating magnetic field, which then "drags" the rotor along with it (either through induced currents in induction motors or by magnetically locking with rotor magnets in synchronous motors).

### 4. Types of Electric Motors Used in EVs (Introduction)

While this topic focuses on basic principles, it's important to acknowledge the types of motors commonly found in EVs, as their construction reflects these principles.

#### 4.1. DC Motors (Brushed and Brushless)

*   **Brushed DC Motors:** Simple construction, but wear and tear on brushes and commutator limit their efficiency and lifespan. Less common in modern EVs due to these drawbacks.
*   **Brushless DC (BLDC) Motors:**
    *   **Principle:** Permanent magnets on the rotor, electromagnets on the stator.
    *   **Construction:** Stator has windings. Rotor has permanent magnets. Electronic commutation (using an Electronic Speed Controller - ESC) replaces mechanical brushes and commutator.
    *   **Advantages:** High efficiency, high power density, low maintenance, long lifespan.
    *   **Textbook Reference:** Husain, Chapter 4 (DC Motors and their applications), Ehsani et al., Chapter 4 (Electric Motors).

#### 4.2. AC Motors

*   **Induction Motors (Asynchronous Motors):**
    *   **Principle:** A rotating magnetic field is created in the stator, which induces current in the rotor conductors (typically squirrel cage). The rotor "chases" the rotating magnetic field but always rotates slightly slower (hence "asynchronous").
    *   **Construction:** Stator with windings. Rotor is usually a squirrel cage design.
    *   **Advantages:** Robust, reliable, cost-effective, low maintenance.
    *   **Textbook Reference:** Husain, Chapter 5 (AC Motors: Induction Motors), Ehsani et al., Chapter 5 (Induction Motors).
*   **Synchronous Motors:**
    *   **Principle:** Rotor magnetic field and stator magnetic field rotate at the same speed. The rotor can be excited by DC current via slip rings or use permanent magnets (Permanent Magnet Synchronous Motors - PMSM).
    *   **Permanent Magnet Synchronous Motors (PMSM):**
        *   **Construction:** Stator with windings. Rotor with permanent magnets.
        *   **Advantages:** High efficiency, high power density, excellent torque control. Very popular in modern EVs.
        *   **Textbook Reference:** Husain, Chapter 6 (AC Motors: Synchronous Motors), Ehsani et al., Chapter 6 (Synchronous Motors).

### 5. Constructional Differences and Impact on Performance

The choice of motor technology significantly impacts the EV's performance characteristics.

| Feature            | Brushed DC Motor                               | BLDC Motor                                     | Induction Motor                                | PMSM                                          |
| :----------------- | :--------------------------------------------- | :--------------------------------------------- | :--------------------------------------------- | :-------------------------------------------- |
| **Stator**         | Electromagnets (windings)                      | Electromagnets (windings)                      | Electromagnets (windings)                      | Electromagnets (windings)                     |
| **Rotor**          | Electromagnets (windings), commutator, brushes | Permanent Magnets                              | Conductors (squirrel cage or wound)            | Permanent Magnets                             |
| **Commutation**    | Mechanical (brushes & commutator)              | Electronic (ESC)                               | N/A (natural slip)                             | Electronic (ESC)                              |
| **Efficiency**     | Moderate                                       | High                                           | High                                           | Very High                                     |
| **Power Density**  | Moderate                                       | High                                           | Moderate to High                               | Very High                                     |
| **Torque Ripple**  | Can be high                                    | Low                                            | Moderate                                       | Low                                           |
| **Maintenance**    | High (brush wear)                              | Low                                            | Low                                            | Low                                           |
| **Cost**           | Lower (for basic motors)                       | Moderate to High (depends on magnets & ESC)    | Moderate                                       | High (due to rare-earth magnets)              |
| **Typical EV Use** | Older/smaller EVs, auxiliary systems           | Increasingly common, especially for higher performance | Common in many EVs (e.g., early Nissan Leaf) | Very common in modern, high-performance EVs |

**Important Note:** The construction of AC motors (Induction and Synchronous) relies heavily on electronic control (inverters or Variable Frequency Drives - VFDs) to manage the frequency and voltage supplied to the stator windings, thereby controlling speed and torque.

### 6. Key Points to Remember

*   **Lorentz Force is fundamental:** The interaction between a magnetic field and a current-carrying conductor produces force, the basis of motor torque.
*   **Back EMF is crucial for speed control:** It limits current and helps maintain stable operation.
*   **Stator:** Provides the magnetic field.
*   **Rotor:** Rotates and produces torque.
*   **Air gap:** Affects magnetic coupling and motor efficiency.
*   **Laminations:** Reduce eddy current losses in magnetic cores.
*   **Brushless designs (BLDC, PMSM) are dominant in modern EVs:** Due to their high efficiency, power density, and reliability.
*   **Induction motors are also prevalent:** Offering a good balance of cost, robustness, and performance.

---

### Practice Questions and Exercises

**Question 1:**

A conductor of length $L$ carrying a current $I$ is placed in a uniform magnetic field of flux density $B$. What is the magnitude of the force experienced by the conductor if it is perpendicular to the magnetic field?

a) $F = ILB$
b) $F = I/LB$
c) $F = IL/B$
d) $F = 0$

**Answer:** a) $F = ILB$ (This is a specific case of the Lorentz force where $v$ is related to $I$, and the angle between the conductor and magnetic field is 90 degrees).

**Question 2:**

Explain the role of the commutator in a brushed DC motor. What is the main disadvantage of using commutators and brushes in EV applications?

**Answer:**
The commutator acts as a mechanical switch that reverses the direction of current in the rotor windings at the correct moment in each rotation. This ensures that the torque on the rotor is always in the same direction, leading to continuous rotation. The main disadvantage is wear and tear on the brushes and commutator, leading to increased maintenance, reduced lifespan, and potential sparking, which reduces efficiency.

**Question 3:**

Identify the key components of a Permanent Magnet Synchronous Motor (PMSM) commonly used in electric vehicles. How does its construction differ from a squirrel cage induction motor?

**Answer:**
Key components of a PMSM:
*   **Stator:** Contains windings that produce a rotating magnetic field when supplied with AC power.
*   **Rotor:** Contains permanent magnets mounted on or embedded within it, providing a constant magnetic field.
*   **Shaft:** Connects the rotor to the drivetrain.
*   **Bearings:** Support the rotor.
*   **Electronic Speed Controller (ESC)/Inverter:** Controls the frequency and voltage supplied to the stator windings.

**Difference from Squirrel Cage Induction Motor:**
*   **Rotor Type:** PMSM uses permanent magnets on the rotor, while an induction motor typically uses a squirrel cage rotor with conductive bars.
*   **Rotor Excitation:** PMSM rotor field is permanent; induction motor rotor field is induced by the stator's magnetic field. This difference in rotor construction leads to higher efficiency and power density in PMSMs.

**Question 4:**

What is back EMF and why is it important for the operation of electric motors in vehicles?

**Answer:**
Back EMF (Electromotive Force), also known as counter-EMF, is a voltage generated within the motor's rotating conductors as they move through the magnetic field. According to Lenz's Law, this induced voltage opposes the applied voltage driving the motor. It is important because:
1.  **Speed Regulation:** The motor's speed will increase until the back EMF is nearly equal to the applied voltage. This self-regulating mechanism prevents the motor from drawing excessive current and damaging itself.
2.  **Efficiency:** A higher back EMF generally indicates a more efficient motor operating at a given speed and voltage.
3.  **Regenerative Braking:** In some EV systems, the motor can be operated as a generator. The back EMF generated during deceleration can be used to convert kinetic energy back into electrical energy, which can be stored in the battery.

**Question 5 (Application-based):**

An EV manufacturer is designing a new performance electric car. They are considering using either a BLDC motor or an induction motor. Based on the principles and construction discussed, which motor is likely to offer higher acceleration and overall efficiency? Justify your answer.

**Answer:**
A **BLDC motor** is likely to offer higher acceleration and overall efficiency for a performance EV.

**Justification:**
*   **Higher Power Density:** BLDC motors, utilizing permanent magnets on the rotor, generally achieve a higher power density (power per unit volume or weight) compared to induction motors. This means a smaller, lighter motor can produce the same power, which is critical for performance vehicles.
*   **Higher Efficiency:** The use of permanent magnets in the rotor eliminates the rotor losses associated with induced currents in induction motors. This leads to higher efficiency across a wider operating range, especially at lower speeds and loads.
*   **Better Torque Response:** BLDC motors, coupled with sophisticated electronic control, can offer very precise and rapid torque control, contributing to superior acceleration.

While induction motors are robust and cost-effective, their efficiency can drop more significantly at light loads, and they typically have lower power density than comparable PMSMs/BLDCs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References from Textbooks and Reference Books

*   **Iqbal Husain, "Electric and Hybrid Vehicles”: Design Fundamentals (2nd edition, 2010):**
    *   Chapters 4, 5, and 6 provide detailed explanations of DC motors, Induction motors, and Synchronous motors, respectively, including their operating principles and construction.
    *   The text often discusses the suitability of different motor types for EV applications.
*   **Mehrdad Ehsani, Yimi Gao, Sebastian E. Gay, Ali Emadi, "Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design (3rd edition, 2018):**
    *   This book offers extensive coverage of electric motor technologies in the context of EVs. Chapters 4, 5, and 6 specifically discuss DC motors, Induction motors, and Synchronous motors, respectively, with a strong focus on their EV applications and characteristics.
    *   Provides practical design considerations related to motor construction and performance.
*   **James Larminie, John Lowry, "Electric Vehicle Technology Explained (2nd edition, 2012):**
    *   Chapter 3 ("Electric Motors") is highly relevant, detailing the fundamental principles of electromagnetism and the construction of various electric motor types, with a clear emphasis on their use in electric vehicles.
    *   It likely contrasts the advantages and disadvantages of different motor technologies from a practical EV perspective.
*   **Denton T., "Electric and hybrid vehicles" (2nd edition, 2020):**
    *   Likely covers the basic principles and construction of motors as part of the overall EV powertrain. May offer comparative analyses of motor types for EV applications.
*   **Dhameja S., "Electric Vehicle Battery Systems" (2001):**
    *   While focused on batteries, this reference might indirectly touch upon motor requirements and how they interact with the power electronics and battery systems, which are influenced by motor principles.

This topic provides the foundational understanding of how electric motors work, which is essential for understanding the rest of the electric propulsion system in EVs.