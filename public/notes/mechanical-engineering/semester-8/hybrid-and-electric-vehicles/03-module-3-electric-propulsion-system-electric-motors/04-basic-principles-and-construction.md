---
title: "basic principles and construction"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446444d"
status: "completed"
scrapedAt: "2026-05-20T18:20:59.533Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 3: Electric Propulsion System – Electric Motors

## Topic: Basic Principles and Construction

---

### 1. Introduction to Electric Motors in EVs

Electric motors are the heart of an EV's propulsion system, converting electrical energy into mechanical energy to drive the wheels. Their efficiency, power density, and controllability are crucial for EV performance and range. This module focuses on the fundamental principles and construction of electric motors commonly used in hybrid and electric vehicles (HEVs and EVs).

**Key Concept:** Electric motors operate based on the principle of electromagnetic induction and the Lorentz force.

---

### 2. Fundamental Principles of Electric Motors

The operation of electric motors relies on the interaction between magnetic fields and electric currents.

#### 2.1 Electromagnetic Induction

*   **Faraday's Law of Induction:** A changing magnetic flux through a coil induces an electromotive force (EMF) or voltage in the coil. This principle is fundamental to how electric motors generate torque when a conductor moves through a magnetic field.
*   **Lenz's Law:** The direction of the induced current is such that it opposes the change in magnetic flux that produced it. This law helps determine the direction of forces and torques.

#### 2.2 Lorentz Force

*   **Definition:** When a current-carrying conductor is placed in a magnetic field, it experiences a force. The magnitude of this force is proportional to the current, the length of the conductor, and the strength of the magnetic field, and is perpendicular to both the conductor and the field.
*   **Formula:** $F = BIl \sin(\theta)$, where:
    *   $F$ is the force
    *   $B$ is the magnetic flux density
    *   $I$ is the current
    *   $l$ is the length of the conductor
    *   $\theta$ is the angle between the conductor and the magnetic field.
*   **Application in Motors:** This force is what causes the rotor to spin within the stator.

#### 2.3 Torque Generation

*   **Principle:** Torque is generated when the forces acting on opposite sides of the rotor create a rotational moment. This is achieved by strategically arranging conductors and magnetic fields.
*   **Relationship to Magnetic Fields and Current:** Torque is directly proportional to the strength of the magnetic field and the current flowing through the rotor windings.

---

### 3. Basic Construction of Electric Motors

Electric motors generally consist of two main parts: a **stator** and a **rotor**. The interaction between the magnetic fields produced by these components drives the motor's rotation.

#### 3.1 Stator

*   **Definition:** The stationary part of the electric motor.
*   **Components:**
    *   **Stator Core:** Typically made of laminated sheets of high-grade silicon steel or similar magnetic materials. Lamination reduces eddy current losses, improving efficiency.
    *   **Stator Windings (Coils):** Copper conductors wound around the stator core. These coils are energized by the electrical power source to create a rotating magnetic field. The number and arrangement of windings determine the motor's characteristics (e.g., number of poles, phase).
*   **Function:** The stator generates a magnetic field, which can be either permanent or electromagnetically created. In AC motors, the stator windings create a rotating magnetic field.

#### 3.2 Rotor

*   **Definition:** The rotating part of the electric motor.
*   **Components:**
    *   **Rotor Core:** Also made of laminated magnetic material to minimize eddy current losses.
    *   **Rotor Windings or Magnets:** The construction of the rotor depends on the motor type. It can have:
        *   **Windings:** Similar to stator windings, carrying current.
        *   **Permanent Magnets:** Used in permanent magnet motors to create a magnetic field without requiring current.
        *   **Squirrel Cage:** A common feature in induction motors, consisting of conducting bars short-circuited at the ends by rings.
*   **Function:** The rotor interacts with the stator's magnetic field, experiencing forces that cause it to rotate.

#### 3.3 Air Gap

*   **Definition:** The small space between the stator and the rotor.
*   **Importance:** Crucial for allowing the rotor to spin freely. The width of the air gap significantly affects the motor's performance, particularly its torque and efficiency. A smaller air gap generally leads to better magnetic coupling and higher torque.

#### 3.4 Bearings

*   **Function:** Support the rotor shaft and allow it to rotate smoothly with minimal friction.
*   **Types:** Ball bearings or roller bearings are commonly used.

#### 3.5 Commutator (for DC Motors)

*   **Definition:** A mechanical switch that reverses the direction of current in the rotor windings at the appropriate time to maintain continuous rotation.
*   **Construction:** A segmented cylindrical structure made of conductive material (e.g., copper) insulated from each other and mounted on the rotor shaft. Brushes make contact with the commutator segments to supply current.
*   **Note:** Commutators are not present in AC motors like induction motors and permanent magnet synchronous motors.

#### 3.6 Brushes (for DC Motors)

*   **Definition:** Stationary electrical contacts, typically made of carbon, that conduct current to and from the commutator segments.
*   **Function:** Allow electrical connection between the stationary power source and the rotating commutator.

---

### 4. Types of Electric Motors Used in EVs

While various electric motors exist, a few types are particularly suited for EV applications due to their efficiency, power density, and controllability.

#### 4.1 DC Motors

*   **Brushed DC Motors:**
    *   **Principle:** Use a commutator and brushes to switch the current direction in the rotor windings, creating continuous torque.
    *   **Construction:** Stator with field windings or permanent magnets, rotor with armature windings, commutator, and brushes.
    *   **Advantages:** Simple control, relatively inexpensive.
    *   **Disadvantages:** Brush wear, sparking, lower efficiency, maintenance requirements.
    *   **Usage in EVs:** Less common in modern EVs due to the disadvantages, but were used in early electric vehicles.
*   **Brushless DC (BLDC) Motors:**
    *   **Principle:** Electrically commutated motors where the commutation is done electronically using a motor controller and Hall-effect sensors (or sensorless control algorithms). The rotor typically has permanent magnets, and the stator has windings.
    *   **Construction:** Stator with windings, rotor with permanent magnets. Requires an electronic speed controller (ESC).
    *   **Advantages:** High efficiency, good power density, low maintenance (no brushes), precise control.
    *   **Disadvantages:** Requires complex electronic control.
    *   **Usage in EVs:** Increasingly popular in hybrid and electric vehicles due to their performance. (Ehsani et al., 3rd ed., Ch. 4)

#### 4.2 AC Motors

*   **Induction Motors (AC Asynchronous Motors):**
    *   **Principle:** The rotor's magnetic field is induced by the rotating magnetic field of the stator. The rotor rotates at a slightly slower speed than the stator's magnetic field (this difference is called "slip").
    *   **Construction:**
        *   **Stator:** Laminated core with windings connected to an AC supply.
        *   **Rotor:** Squirrel cage rotor (conductors embedded in the rotor core and short-circuited at the ends) or wound rotor (with windings connected to slip rings).
    *   **Advantages:** Robust, reliable, relatively inexpensive, good torque at low speeds.
    *   **Disadvantages:** Lower efficiency than PMSMs, slip is required for torque production, can be heavier.
    *   **Usage in EVs:** Widely used, especially by manufacturers like Tesla. (Larminie & Lowry, 2nd ed., Ch. 3)
*   **Synchronous Motors:**
    *   **Principle:** The rotor rotates at the same speed as the rotating magnetic field of the stator.
    *   **Types:**
        *   **Permanent Magnet Synchronous Motors (PMSM):**
            *   **Construction:** Stator with windings creating a rotating magnetic field. Rotor has permanent magnets.
            *   **Advantages:** High efficiency, high power density, good torque characteristics, compact size.
            *   **Disadvantages:** Higher cost due to rare-earth magnets, risk of demagnetization at high temperatures.
            *   **Usage in EVs:** Very common in modern EVs due to their excellent performance. (Husain, 2nd ed., Ch. 5)
        *   **Synchronous Reluctance Motors (SynRM):**
            *   **Principle:** Torque is generated by the tendency of the rotor to align with the stator's magnetic field, exploiting the difference in magnetic reluctance along different axes of the rotor. The rotor has no magnets or windings.
            *   **Construction:** Stator with windings. Rotor is designed with salient poles (e.g., flux barriers) to create magnetic saliency.
            *   **Advantages:** No magnets (lower cost, no demagnetization issues), robust rotor, good efficiency.
            *   **Disadvantages:** Lower power density and torque compared to PMSMs, can be noisy.
            *   **Usage in EVs:** Emerging as a viable alternative, especially for cost-sensitive applications.
        *   **Wound Rotor Synchronous Motors:**
            *   **Construction:** Rotor has field windings that are energized by a DC current, creating an electromagnet.
            *   **Usage in EVs:** Less common in mainstream EVs due to the need for slip rings and a separate DC excitation system for the rotor.

---

### 5. Key Performance Characteristics of Electric Motors for EVs

When selecting an electric motor for an EV, several characteristics are considered:

*   **Torque:** The rotational force produced by the motor. Higher torque is needed for acceleration.
*   **Power:** The rate at which the motor can do work (Torque × Speed).
*   **Efficiency:** The ratio of mechanical output power to electrical input power. Higher efficiency means less energy is wasted as heat, leading to better range.
*   **Power Density:** The amount of power a motor can produce relative to its size and weight. Important for packaging and overall vehicle weight.
*   **Speed Range:** The range of rotational speeds over which the motor can operate effectively.
*   **Controllability:** The ability to precisely control the motor's speed and torque, which is essential for smooth driving and regenerative braking.
*   **Cost:** The manufacturing cost of the motor.
*   **Reliability and Durability:** The motor's lifespan and ability to withstand operating conditions.

---

### 6. Motor Control and Power Electronics

*   **Motor Controller (Inverter):** Converts DC power from the battery pack into variable-frequency AC power to control the speed and torque of AC motors (Induction, PMSM, BLDC). For DC motors, a DC-DC converter or chopper is used.
*   **Regenerative Braking:** Electric motors can operate in reverse as generators, converting kinetic energy back into electrical energy to recharge the battery during deceleration. This is a key feature of EVs and HEVs.

---

### 7. Examples and Applications

*   **Tesla Model S/3:** Primarily uses AC Induction Motors and Permanent Magnet Synchronous Motors, depending on the variant and generation.
*   **Nissan Leaf:** Uses a Permanent Magnet Synchronous Motor.
*   **Chevrolet Bolt EV:** Uses a Permanent Magnet Synchronous Motor.
*   **Toyota Prius (Hybrid):** Uses a Permanent Magnet Synchronous Motor as its primary electric drive motor.

---

### 8. Important Points to Remember

*   **Lorentz Force** is the fundamental principle behind torque generation in electric motors.
*   The **stator** creates a magnetic field (rotating or stationary), and the **rotor** interacts with it to produce rotation.
*   **Lamination** of stator and rotor cores is crucial to reduce **eddy current losses**.
*   **Brushless DC (BLDC)** and **Permanent Magnet Synchronous Motors (PMSM)** are highly efficient and power-dense, making them popular choices for modern EVs.
*   **Induction Motors** are robust and cost-effective but generally less efficient than PMSMs.
*   **Regenerative braking** is a key advantage of electric propulsion, enabled by the motor's ability to act as a generator.
*   The **air gap** between the stator and rotor is critical for magnetic coupling.

---

### 9. Practice Questions

**Question 1:**
Which fundamental physical principle describes the force experienced by a current-carrying conductor in a magnetic field, which is responsible for producing torque in an electric motor?
(a) Faraday's Law of Induction
(b) Lenz's Law
(c) Lorentz Force
(d) Ampere's Law

**Question 2:**
In a typical electric motor used in EVs, what is the primary function of the stator?
(a) To provide the rotating magnetic field.
(b) To carry the main current and produce torque.
(c) To provide mechanical support for the rotor.
(d) To convert AC to DC power.

**Question 3:**
What is the main disadvantage of brushed DC motors compared to brushless DC motors in EV applications?
(a) Lower efficiency
(b) Need for electronic commutation
(c) Brush wear and maintenance requirements
(d) Lower torque density

**Question 4:**
Explain the difference between the rotor construction of a squirrel cage induction motor and a permanent magnet synchronous motor. (Short Answer)

**Question 5:**
What is "slip" in the context of an induction motor, and why is it necessary for torque production? (Short Answer)

---

### 10. Answers to Practice Questions

**Answer 1:**
(c) Lorentz Force. Faraday's Law and Lenz's Law describe electromagnetic induction, while Ampere's Law relates current to magnetic fields. The Lorentz force is the direct cause of motion in this scenario.

**Answer 2:**
(a) To provide the rotating magnetic field. The stator windings are energized to create a magnetic field, which can be designed to rotate in the case of AC motors.

**Answer 3:**
(c) Brush wear and maintenance requirements. Brushed DC motors have brushes that wear out, requiring replacement and maintenance, and can cause electrical noise (sparking).

**Answer 4:**
*   **Squirrel Cage Induction Motor:** The rotor consists of conductive bars (often aluminum or copper) embedded in a laminated iron core and short-circuited at both ends by end rings. It resembles a squirrel cage.
*   **Permanent Magnet Synchronous Motor:** The rotor has permanent magnets mounted on its surface or embedded within the rotor core. These magnets provide a constant magnetic field without requiring electrical excitation.

**Answer 5:**
"Slip" in an induction motor is the difference between the speed of the rotating magnetic field of the stator and the actual speed of the rotor. It is expressed as a percentage or a fraction. Slip is necessary for torque production because a relative motion between the stator's magnetic field and the rotor conductors is required to induce a voltage and current in the rotor bars (according to Faraday's Law). This induced current then interacts with the stator's magnetic field to produce torque. If the rotor were to spin at the same speed as the stator's field (synchronous speed), there would be no relative motion, no induced current, and therefore no torque.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 11. References and Further Reading

*   **Husain, I. (2010).** *Electric and Hybrid Vehicles”: Design Fundamentals (2nd ed.).* CRC Press. (Chapter 5 on Electric Motor Drive Systems)
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018).** *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design (3rd ed.).* CRC Press. (Chapter 4 on Electric Traction Motors)
*   **Larminie, J., & Lowry, J. (2012).** *Electric Vehicle Technology Explained (2nd ed.).* Wiley-Blackwell. (Chapter 3 on Electric Motor Technology)
*   **Denton, T. (2020).** *Electric and hybrid vehicles (2nd ed.).* CBS Publishers & Distributors Pvt. Ltd.
*   **Dhameja, S. (2001).** *Electric Vehicle Battery Systems.* Newnes. (While focused on batteries, provides context for motor power requirements).

---

**(End of Module 3, Topic: Basic Principles and Construction)**