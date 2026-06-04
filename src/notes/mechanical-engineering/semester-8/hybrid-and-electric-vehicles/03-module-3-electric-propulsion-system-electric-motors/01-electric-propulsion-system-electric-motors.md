---
title: "Electric propulsion system – electric motors"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446444a"
status: "completed"
scrapedAt: "2026-05-20T18:20:57.426Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 3: Electric Propulsion System – Electric Motors

This module delves into the heart of electric vehicles (EVs) and hybrid electric vehicles (HEVs): the electric propulsion system, with a particular focus on the electric motors. Understanding electric motors is crucial for comprehending how EVs and HEVs generate power, achieve propulsion, and how their performance is managed.

---

### 3.1 Introduction to Electric Motors in EVs/HEVs

**Objective:** To understand the fundamental role of electric motors in vehicle propulsion and their advantages over internal combustion engines (ICEs).

**Key Concepts:**

*   **Electric Motor:** A device that converts electrical energy into mechanical energy, typically rotational motion.
*   **Propulsion System:** The collection of components responsible for generating and transmitting motive power to move a vehicle.
*   **Torque:** A rotational force produced by the motor.
*   **Power:** The rate at which work is done, derived from torque and rotational speed.

**Why Electric Motors in EVs/HEVs?**

Electric motors are the primary actuators in EVs and a crucial component in HEVs for propulsion. They offer several advantages:

*   **High Efficiency:** Convert a larger percentage of electrical energy into mechanical energy compared to ICEs (often 85-95% vs. 20-40% for ICEs). (Husain, 2010)
*   **High Torque at Low Speeds:** Deliver maximum torque from standstill, resulting in excellent acceleration and responsiveness. This is a significant advantage for city driving and initial vehicle movement.
*   **Regenerative Braking Capability:** Can act as generators during deceleration, converting kinetic energy back into electrical energy to recharge the battery. (Ehsani et al., 2018)
*   **Zero Tailpipe Emissions:** Contribute to cleaner air and reduced environmental impact in urban areas.
*   **Simpler Mechanical Design:** Fewer moving parts compared to ICEs (no crankshaft, pistons, valves, etc.), leading to lower maintenance and higher reliability. (Larminie & Lowry, 2012)
*   **Quiet Operation:** Significantly reduce noise pollution compared to ICEs.
*   **Fast Response:** React quickly to driver inputs, providing instant acceleration.

**Types of Electric Motors Used in EVs/HEVs:**

The choice of electric motor significantly impacts the vehicle's performance, efficiency, and cost. The most common types are:

1.  **DC Motors:**
    *   **Brushed DC Motors:** Historically used, but less common in modern EVs due to brush wear and maintenance issues. They are relatively simple to control.
    *   **Brushless DC (BLDC) Motors:** Very popular in some EV applications (e.g., scooters, smaller vehicles) due to good efficiency and robustness. They require electronic commutation.

2.  **AC Motors:**
    *   **Induction Motors (Asynchronous Motors):** Widely used in EVs due to their robustness, cost-effectiveness, and reliability. They are simple in construction and require less maintenance. (Ehsani et al., 2018)
    *   **Permanent Magnet Synchronous Motors (PMSM):** Increasingly dominant in modern EVs. They offer higher efficiency, higher power density, and better torque control than induction motors. The use of permanent magnets on the rotor is key to their performance. (Husain, 2010)
    *   **Switched Reluctance Motors (SRM):** Less common but have potential due to their inherent robustness and low cost. However, they can suffer from torque ripple and acoustic noise, requiring sophisticated control.

---

### 3.2 DC Motors (Brief Overview for Context)

**Objective:** To briefly understand the principles of DC motors as a foundational concept.

**Key Concepts:**

*   **Commutator:** A mechanical switch that reverses the current direction in the rotor coils to maintain continuous rotation.
*   **Brushes:** Conductive contacts that transfer current to the commutator.
*   **Armature:** The rotating part of the motor, containing coils that carry current.
*   **Stator:** The stationary part, typically containing field windings or permanent magnets.

**Types of DC Motors:**

*   **Series Wound DC Motor:** Field winding is in series with the armature. High starting torque.
*   **Shunt Wound DC Motor:** Field winding is in parallel with the armature. Relatively constant speed.
*   **Compound Wound DC Motor:** Combination of series and shunt windings.
*   **Permanent Magnet DC (PMDC) Motor:** Field is created by permanent magnets. Simpler and more efficient than wound-field DC motors.

**Limitations in Modern EVs:**

*   **Brush Wear:** Brushes are a wear item, requiring replacement and maintenance, leading to reduced reliability.
*   **Sparking:** Brushing action can cause sparking, leading to electromagnetic interference (EMI) and potential fire hazards.
*   **Lower Efficiency:** Generally less efficient than AC motors, especially at higher speeds.

---

### 3.3 AC Motors: Induction Motors

**Objective:** To understand the working principle, advantages, and disadvantages of AC induction motors in EVs.

**Key Concepts:**

*   **Stator:** Contains windings that produce a rotating magnetic field when supplied with AC power.
*   **Rotor:** Usually a "squirrel cage" rotor, consisting of conductive bars short-circuited at the ends by rings.
*   **Rotating Magnetic Field:** The magnetic field created by the stator windings that rotates at synchronous speed.
*   **Synchronous Speed ($N_s$):** The speed of the rotating magnetic field, determined by the frequency ($f$) and the number of poles ($p$) of the stator winding: $N_s = \frac{120f}{p}$ (in RPM).
*   **Slip:** The difference between the synchronous speed and the rotor speed, expressed as a percentage or a fraction. Slip is necessary for torque production. Rotor speed ($N_r$) is always less than synchronous speed ($N_s$) in motoring mode.
*   **Torque Production:** The rotating magnetic field induces currents in the rotor bars, which then interact with the magnetic field to produce torque.

**Working Principle:**

1.  AC voltage is applied to the stator windings, creating a rotating magnetic field.
2.  This rotating magnetic field cuts across the rotor conductors.
3.  According to Faraday's law of induction, a voltage is induced in the rotor conductors.
4.  Since the rotor conductors are short-circuited, current flows through them.
5.  This current-carrying rotor interacts with the stator's rotating magnetic field, producing a force that creates torque on the rotor, causing it to rotate.
6.  The rotor speed will lag behind the rotating magnetic field (slip) because if the rotor reached synchronous speed, there would be no relative motion, no induced voltage, and therefore no torque.

**Types of Induction Motors Used in EVs:**

*   **Squirrel Cage Induction Motors (SCIM):** Most common due to simplicity, ruggedness, and low cost.
*   **Wound Rotor Induction Motors:** Less common in EVs due to the need for slip rings and brushes, increasing maintenance.

**Advantages in EVs/HEVs:**

*   **Robustness and Reliability:** Simple construction with no brushes or commutators makes them very durable.
*   **Low Cost:** Generally cheaper to manufacture than PMSMs.
*   **Low Maintenance:** Minimal wear parts.
*   **Good Torque Production:** Can provide good torque for acceleration.

**Disadvantages in EVs/HEVs:**

*   **Lower Efficiency than PMSM:** Especially at lighter loads and higher speeds, due to rotor copper losses.
*   **Lower Power Density than PMSM:** Larger and heavier for the same power output.
*   **Reliance on Slip:** Torque generation is dependent on slip, which can affect precise speed control without sophisticated vector control.
*   **Requires Variable Frequency Drive (VFD):** To control speed and torque, AC induction motors need a VFD (also known as an inverter), which converts DC battery power to variable-frequency AC power.

**Example:**

Early Tesla models (e.g., Model S 60 and 75) used three-phase AC induction motors.

---

### 3.4 AC Motors: Permanent Magnet Synchronous Motors (PMSM)

**Objective:** To understand the working principle, advantages, and disadvantages of PMSMs in EVs.

**Key Concepts:**

*   **Permanent Magnets:** Mounted on the rotor, providing a constant magnetic field.
*   **Stator:** Similar to induction motors, with windings that create a rotating magnetic field when supplied with AC power.
*   **Synchronous Speed:** The rotor rotates at the same speed as the rotating magnetic field, hence "synchronous." There is no slip in ideal PMSMs.
*   **Torque Production:** The interaction between the stator's rotating magnetic field and the rotor's permanent magnet field produces torque.
*   **Power Factor Control:** Advanced control strategies can optimize the power factor for improved efficiency.

**Working Principle:**

1.  AC voltage is applied to the stator windings, creating a rotating magnetic field.
2.  The rotor, equipped with permanent magnets, is "dragged" along by this rotating magnetic field, rotating at the same speed.
3.  The magnetic poles of the permanent magnets on the rotor align with the rotating magnetic field of the stator.
4.  By controlling the frequency and magnitude of the AC power supplied to the stator, the speed and torque of the rotor can be precisely controlled.

**Types of PMSM Rotor Configurations:**

*   **Surface-Mounted PMSM (SPMSM):** Permanent magnets are mounted on the surface of the rotor. Generally simpler to manufacture, but magnets can be susceptible to demagnetization at high temperatures and speeds.
*   **Internal Permanent Magnet Synchronous Motor (IPMSM) or Interior Permanent Magnet Synchronous Motor:** Permanent magnets are embedded within the rotor core. This design offers better protection for the magnets, higher mechanical robustness, and can provide reluctance torque in addition to magnetic torque, further improving efficiency and torque control. (Ehsani et al., 2018)

**Advantages in EVs/HEVs:**

*   **High Efficiency:** Generally more efficient than induction motors, especially over a wider operating range, due to the absence of rotor copper losses.
*   **High Power Density:** Smaller and lighter for the same power output, contributing to vehicle weight reduction.
*   **Excellent Torque Control:** Precise and responsive torque control, leading to smooth acceleration and better dynamic response.
*   **High Torque at Low Speeds:** Similar to induction motors, they provide good starting torque.
*   **No Slip:** Rotor speed is locked to the rotating magnetic field, allowing for precise speed and position control.

**Disadvantages in EVs/HEVs:**

*   **Higher Cost:** Permanent magnets (especially rare-earth magnets like Neodymium) can be expensive, increasing the motor cost.
*   **Magnet Demagnetization Risk:** Under extreme conditions (high temperature, high current), permanent magnets can lose their magnetic strength.
*   **Requires Complex Control (Vector Control):** To achieve optimal performance, PMSMs typically require sophisticated electronic control systems (inverters with advanced control algorithms like Field-Oriented Control (FOC)).
*   **No Regenerative Braking from Rotor:** Unlike induction motors where rotor can induce current, regeneration relies solely on stator control.

**Example:**

Most modern EVs, including Tesla Model 3/Y (using IPMSMs), Nissan Leaf, Chevrolet Bolt, and many others, utilize PMSMs for their superior efficiency and performance.

---

### 3.5 AC Motors: Switched Reluctance Motors (SRM)

**Objective:** To briefly understand the principles, advantages, and disadvantages of SRMs.

**Key Concepts:**

*   **Switched Reluctance Principle:** Torque is produced by the tendency of the rotor to align itself with the magnetic field produced by energized stator poles, minimizing the magnetic reluctance of the path.
*   **Salient Pole Construction:** Both rotor and stator have salient poles (protruding poles).
*   **No Magnets or Rotor Windings:** The rotor consists only of a laminated iron core.
*   **Sequential Energization of Stator Phases:** Only one phase winding is energized at a time, in a specific sequence.

**Working Principle:**

1.  When a stator phase winding is energized, it creates a magnetic field.
2.  The rotor, with its unmagnetized poles, will rotate to align the nearest rotor pole with the energized stator pole, minimizing reluctance.
3.  As the rotor aligns, the current is switched off, and the next stator phase is energized in sequence, pulling the rotor along.
4.  This sequential energization creates continuous rotation.

**Advantages in EVs/HEVs:**

*   **Extreme Robustness and Reliability:** No rotor windings, permanent magnets, or brushes. Very simple and durable construction.
*   **Low Cost:** Potentially lower manufacturing cost due to simplicity.
*   **High-Temperature Capability:** Can operate at higher temperatures than PMSMs without performance degradation.
*   **Good Regenerative Braking:** Can offer good regenerative braking capability.

**Disadvantages in EVs/HEVs:**

*   **High Torque Ripple:** Torque output can be pulsating, leading to vibrations and noise.
*   **Acoustic Noise:** Can be inherently noisy due to the switching process and torque ripple.
*   **Complex Control:** Requires sophisticated electronic control (power electronics and sophisticated algorithms) to manage switching and minimize torque ripple.
*   **Lower Power Density:** Can be larger and heavier than PMSMs for equivalent power.

**Example:**

While not as widespread as induction motors or PMSMs, SRMs have been explored and used in some niche applications or experimental EV designs due to their robustness.

---

### 3.6 Motor Sizing and Selection

**Objective:** To understand the factors influencing motor sizing and selection for EVs/HEVs. (Aligns with CO4: K3)

**Key Concepts:**

*   **Power Rating:** The continuous or peak power output of the motor.
*   **Torque Rating:** The continuous or peak torque the motor can deliver.
*   **Speed Rating:** The maximum operating speed of the motor.
*   **Duty Cycle:** The pattern of operation (e.g., continuous, intermittent) and the associated load and speed requirements.
*   **Vehicle Performance Requirements:** Acceleration, top speed, gradeability.
*   **Efficiency Map:** A chart showing motor efficiency across different torque and speed conditions.
*   **Power Density and Torque Density:** Motor size and weight relative to its power or torque output.
*   **Cost:** Motor purchase and manufacturing cost.
*   **Reliability and Maintenance:** Expected lifespan and maintenance requirements.
*   **Operating Environment:** Temperature, vibration, humidity.

**Factors to Consider for Sizing and Selection:**

1.  **Vehicle Performance Needs:**
    *   **Acceleration:** Requires high peak torque, often at low speeds. This often dictates the peak torque requirement of the motor.
    *   **Top Speed:** Dictates the motor's maximum power and speed capabilities.
    *   **Gradeability:** The ability to climb inclines, also requiring significant torque.

2.  **Driving Cycle Analysis:**
    *   Analyzing typical driving patterns (city, highway, aggressive driving) helps determine the motor's operating points.
    *   **Continuous Power:** The motor must be able to deliver its rated power continuously without overheating.
    *   **Peak Power:** The motor must be able to deliver higher power for short durations (e.g., during acceleration).

3.  **Efficiency:**
    *   Choosing a motor that operates efficiently over the most common parts of the driving cycle is crucial for maximizing vehicle range.
    *   Understanding the motor's efficiency map is important. PMSMs often have a wider and flatter efficiency curve compared to induction motors.

4.  **Power Electronics and Control:**
    *   The motor's performance is intrinsically linked to the inverter/controller that drives it.
    *   The controller must be able to handle the motor's voltage, current, and switching frequency requirements.

5.  **Cooling System:**
    *   High-performance motors generate heat. An effective cooling system (air or liquid) is necessary to maintain optimal operating temperatures and prevent derating or damage.

6.  **Cost vs. Performance Trade-off:**
    *   Higher performance and efficiency motors (like PMSMs) typically come at a higher cost.
    *   Induction motors offer a good balance of cost and performance for many applications.

**Example:**

A sports EV aiming for rapid acceleration will require a motor with very high peak torque and power density. A city commuter EV might prioritize efficiency over peak performance, opting for a motor that is highly efficient at lower speeds and moderate power levels.

---

### 3.7 Motor Control Strategies

**Objective:** To understand the fundamental principles of controlling electric motors in EVs/HEVs. (Aligns with CO3: K2, CO4: K3)

**Key Concepts:**

*   **Variable Frequency Drive (VFD) / Inverter:** A power electronic device that converts DC battery voltage into variable-frequency AC voltage and current to control the motor's speed and torque.
*   **Pulse Width Modulation (PWM):** A technique used by inverters to synthesize AC waveforms from DC by rapidly switching power transistors on and off. The width of the pulses determines the effective voltage and current.
*   **Voltage/Frequency (V/f) Control:** A simple control method for induction motors where the ratio of voltage to frequency is kept constant to maintain constant torque. Less effective at low speeds and for precise torque control.
*   **Field-Oriented Control (FOC) / Vector Control:** An advanced control technique for AC motors (both induction and PMSM) that decouples the stator current into components representing flux and torque. This allows for independent control of flux and torque, similar to DC motor control, enabling precise torque control, high efficiency, and smooth operation. (Larminie & Lowry, 2012)
*   **Direct Torque Control (DTC):** Another advanced control method, particularly for PMSMs and SRMs, which directly controls the torque and flux without the need for coordinate transformations or PWM generation.

**Control of Induction Motors:**

*   **V/f Control:** Basic control for speed regulation.
*   **Vector Control (FOC):** Provides precise torque and speed control by independently managing the stator current's flux and torque-producing components. This is essential for modern EV performance.

**Control of PMSMs:**

*   **Back-EMF (BEMF) Sensing:** Used in some BLDC and PMSM applications for commutation without Hall effect sensors.
*   **Hall Effect Sensors:** Provide rotor position information for commutation and control.
*   **Sensorless Control:** Techniques that estimate rotor position using motor back-EMF or current/voltage signals, reducing cost and complexity.
*   **Vector Control (FOC):** The most common and effective method for PMSMs, offering excellent performance.
*   **Direct Torque Control (DTC):** Can offer very fast torque response.

**Regenerative Braking Control:**

*   The motor is driven by the vehicle's inertia, acting as a generator.
*   The inverter controls the direction of energy flow from the motor back to the battery.
*   The control system adjusts the motor's operating parameters (e.g., field excitation in PMSMs, slip in induction motors) to achieve the desired braking torque and energy recovery. (Ehsani et al., 2018)

---

### 3.8 Motor Integration with Drivetrain

**Objective:** To understand how electric motors are integrated with the vehicle's mechanical drivetrain. (Aligns with CO4: K3)

**Key Concepts:**

*   **Gearbox / Transmission:**
    *   **Single-Speed Transmission:** Most EVs use a single-speed reduction gearbox. Electric motors have a wide operating speed range and high torque at low speeds, making multi-speed transmissions often unnecessary. This simplifies the drivetrain, reduces weight, and improves efficiency. (Husain, 2010)
    *   **Multi-Speed Transmission:** Some high-performance EVs or specific HEV configurations might employ multi-speed transmissions for optimized performance across a wider range of speeds or for specific operating modes.
*   **Differential:** Distributes torque to the drive wheels and allows them to rotate at different speeds during cornering.
*   **Inverter/Controller:** The crucial interface between the DC battery and the AC motor. It converts DC to AC, controls motor speed and torque, and manages regenerative braking.
*   **Power Electronics Packaging:** Integration of the inverter, DC-DC converter, and other power electronic components into a compact and robust unit.
*   **Thermal Management:** The motor and inverter generate heat, requiring efficient cooling systems (liquid cooling is common) to maintain performance and longevity.

**Integration of Motor Types:**

*   **PMSM:** Integrated with a single-speed reduction gearbox. The high torque density allows for smaller gearboxes.
*   **Induction Motor:** Also typically integrated with a single-speed reduction gearbox. The lower power density might lead to slightly larger gearboxes compared to PMSM-based systems for the same performance.
*   **HEVs:** Can have more complex integrations, sometimes with multiple motors and planetary gearsets (e.g., Toyota's Hybrid Synergy Drive), allowing for blending of electric and ICE power.

**Example:**

In a typical EV: Battery -> Inverter -> Electric Motor -> Single-Speed Reduction Gearbox -> Differential -> Drive Wheels.

---

### Practice Questions and Answers

**Question 1:** What is the primary advantage of electric motors over internal combustion engines regarding torque at low speeds?
**Answer:** Electric motors provide high torque from standstill (zero RPM), which is crucial for quick acceleration, whereas ICEs need to reach a certain RPM range to generate significant torque.

**Question 2:** Name the two most common types of AC electric motors used in modern electric vehicles and briefly state their main advantages.
**Answer:**
1.  **Permanent Magnet Synchronous Motors (PMSM):** High efficiency, high power density.
2.  **Induction Motors:** Robustness, reliability, and lower cost.

**Question 3:** Explain the concept of "slip" in an AC induction motor and why it is necessary.
**Answer:** Slip is the difference between the synchronous speed of the rotating magnetic field and the actual speed of the rotor. It is necessary because if the rotor spun at synchronous speed, there would be no relative motion between the magnetic field and the rotor conductors, hence no induced voltage or current, and no torque production.

**Question 4:** What is Field-Oriented Control (FOC), and why is it important for EV motor control?
**Answer:** FOC (or Vector Control) is an advanced control strategy that decouples the stator current into flux-producing and torque-producing components. This allows for precise, independent control of torque and flux, similar to DC motor control, leading to smoother operation, higher efficiency, and better dynamic response, which are critical for EV performance.

**Question 5:** Why do most electric vehicles use a single-speed transmission instead of a multi-speed transmission like most gasoline cars?
**Answer:** Electric motors produce high torque across a wide speed range, including from zero RPM. This characteristic, combined with the efficiency of their power electronics, eliminates the need for multiple gear ratios to keep the motor within its optimal operating band, thus simplifying the drivetrain, reducing weight, and improving overall efficiency.

---

### Important Points to Remember

*   **Efficiency is Key:** Electric motors are inherently more efficient than ICEs, contributing significantly to EV range.
*   **Torque Characteristics:** High starting torque from electric motors is a major performance advantage.
*   **PMSM vs. Induction Motor:** PMSMs offer better efficiency and power density but at a higher cost. Induction motors are robust and cost-effective.
*   **Inverter/Controller:** This power electronic component is vital for controlling AC motors in EVs and enabling regenerative braking.
*   **Regenerative Braking:** A unique capability of electric propulsion systems that recovers energy during deceleration.
*   **Simplification of Drivetrain:** Electric propulsion systems generally require fewer moving parts and simpler transmissions than ICE vehicles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press.
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press.
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell.
*   Denton, T. (2020). *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd. (While not directly cited for specific concepts above, it provides supplementary context on the overall field).
*   Dhameja, S. (2001). *Electric Vehicle Battery Systems*. Newnes (an imprint of Butterworth-Heinemann Ltd). (This reference is more related to battery systems but provides context for the overall EV architecture).

---

### Alignment with Course Outcomes

*   **CO1: Explain the general architecture of Electric vehicles.** (K2) - This module contributes by detailing the electric propulsion system's role within the overall architecture.
*   **CO2: Describe various battery, charging types and battery management of Electric vehicles.** (K2) - While not the primary focus, understanding motor requirements is linked to battery sizing and power delivery.
*   **CO3: Describe various motors and drives of Electric vehicles.** (K2) - This module directly addresses the core of this outcome by detailing DC motors, induction motors, PMSMs, and SRMs, along with their basic principles and control.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** (K3) - This module directly addresses motor sizing, selection, integration with the drivetrain, and control strategies, enabling students to understand how to choose and integrate these components based on vehicle requirements.