---
title: "Permanent Magnet Synchronous Motors - construction - principle of operation – Control of PMSM – self-control – sensor-less control– applications - comparison with BLDC motors"
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 3: PM Brushless DC motor"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368a7"
status: "completed"
scrapedAt: "2026-05-23T16:39:40.872Z"
---
# SPECIAL ELECTRICAL MACHINES: Module 3: PM Brushless DC Motor

## Topic: Permanent Magnet Synchronous Motors (PMSM)

### 1. Introduction to PMSM

**Definition:** A Permanent Magnet Synchronous Motor (PMSM) is a type of AC synchronous electric motor that uses permanent magnets on its rotor to create the magnetic field. Unlike brushed DC motors, PMSMs do not require external excitation of the rotor, leading to higher efficiency and power density. They are widely used in applications requiring precise speed control, high efficiency, and compact size.

**Alignment with Course Outcomes:**
*   **CO3:** Explain the constructional details, working and drive circuits for brushless DC motor and permanent magnet synchronous motor. (Knowledge Level: K2) - This section directly addresses the explanation of PMSM construction and working.

**Key Concepts:**
*   **Synchronous Motor:** An AC motor where the rotor speed is synchronized with the frequency of the stator current.
*   **Permanent Magnets:** Materials that produce their own magnetic field and do not require external current to be magnetized.

**Reference Highlight:**
*   "PMSMs are characterized by their high efficiency, high power density, and excellent controllability, making them suitable for a wide range of applications." - *Permanent magnet synchronous and Brushless DC motor Drives* by R. Krishnan.

### 2. Construction of PMSM

PMSMs share a similar constructional layout with conventional synchronous motors, with the key difference being the rotor construction.

**2.1 Stator:**
*   **Core:** Made of laminated silicon steel to reduce eddy current losses.
*   **Windings:** Typically distributed windings placed in slots on the inner periphery of the stator core. The windings are usually three-phase, sinusoidally distributed to produce a rotating magnetic field when supplied with AC current.
*   **Enclosure:** Protects the stator core and windings from the environment.

**2.2 Rotor:**
The rotor is the distinguishing feature of a PMSM. Permanent magnets are mounted on the rotor to provide the magnetic flux. There are two main types of rotor construction:

*   **2.2.1 Surface-Mounted Permanent Magnet (SPM) Rotor:**
    *   Permanent magnets are mounted directly on the surface of the rotor shaft.
    *   Magnets are typically arc-shaped to conform to the rotor's cylindrical shape.
    *   They are held in place by adhesives, retaining sleeves (e.g., fiberglass or non-magnetic steel), or recessed slots.
    *   **Advantages:** Simpler manufacturing, lower cost, lower inertia.
    *   **Disadvantages:** Magnets are exposed, making them susceptible to mechanical damage and demagnetization at high temperatures. Lower reluctance torque component.
    *   **Textbook Reference:** *Special Electrical Machines* by K. Venkataratnam discusses SPM rotor construction and its characteristics.

*   **2.2.2 Interior Permanent Magnet (IPM) Rotor:**
    *   Permanent magnets are embedded within the rotor core.
    *   Magnets are typically placed in slots or cavities within the rotor structure, often with non-magnetic material (e.g., aluminum or plastic) filling the gaps.
    *   The rotor core material itself contributes to the magnetic flux path and provides magnetic saliency.
    *   **Advantages:** Magnets are protected, leading to better mechanical integrity and higher operating temperatures. Enables the exploitation of reluctance torque, allowing for higher power density and efficiency through advanced control strategies (e.g., Field-Weakening).
    *   **Disadvantages:** More complex manufacturing, higher inertia, higher cost.
    *   **Example:** Commonly found in electric vehicles for their efficiency and performance capabilities.
    *   **Textbook Reference:** *A detailed study on Special Electrical Machines* by V. Vedanarayanan provides detailed insights into IPM rotor construction and its advantages.

**Important Point to Remember:** The choice between SPM and IPM rotors depends on the application's requirements regarding cost, performance, operating environment, and desired control capabilities.

### 3. Principle of Operation

The operation of a PMSM is based on the interaction between the rotating magnetic field produced by the stator and the magnetic field produced by the permanent magnets on the rotor.

**3.1 Magnetic Field Interaction:**
*   When a three-phase AC voltage is applied to the stator windings, it creates a rotating magnetic field (RMF) in the air gap.
*   The rotor, with its embedded or surface-mounted permanent magnets, acts as a rotating magnet.
*   The rotor's magnetic poles are attracted to the opposite poles of the stator's RMF.
*   For synchronous operation, the rotor rotates at the same speed as the stator's RMF. This speed is called the synchronous speed, determined by the stator frequency and the number of poles:
    $$N_s = \frac{120f}{P}$$
    where:
    *   $N_s$ is the synchronous speed in RPM.
    *   $f$ is the stator current frequency in Hz.
    *   $P$ is the number of poles.

**3.2 Torque Production:**
*   Torque is produced by the magnetic attraction between the stator's RMF and the rotor's permanent magnets.
*   The torque angle (or load angle, $\delta$) is the angle between the rotor's magnetic axis and the stator's RMF.
*   For stable operation, the rotor lags behind the stator's RMF by the torque angle.
*   The torque is proportional to the product of the magnetic field strengths and the sine of the torque angle.

**3.3 Sinusoidal vs. Trapezoidal Back EMF:**
While the fundamental principle remains the same, the nature of the back EMF waveform is crucial for understanding the difference between PMSMs and Brushless DC (BLDC) motors, which are often discussed together.

*   **Sinusoidal Back EMF (PMSM):** The stator windings are designed to produce a sinusoidal air-gap flux distribution. This results in a sinusoidal back EMF waveform when the rotor rotates. PMSMs with sinusoidal back EMF are typically driven by sinusoidal voltage/current waveforms, resulting in smooth torque and low ripple.
*   **Trapezoidal Back EMF (BLDC):** The stator windings and magnet arrangement are designed to produce a trapezoidal air-gap flux distribution. This results in a trapezoidal back EMF waveform. BLDC motors are typically driven by rectangular voltage/current waveforms (120-degree conduction), resulting in pulsating torque and higher torque ripple.

**Important Point to Remember:** The "synchronous" nature refers to the rotor's speed being locked to the stator field frequency, irrespective of whether the back EMF is sinusoidal or trapezoidal, as long as the control appropriately energizes the stator windings. However, the *type* of PMSM is often classified by its back EMF waveform.

### 4. Control of PMSM

Controlling a PMSM involves managing the stator currents to control its speed, torque, and position. Due to the synchronous nature and the need for variable speed operation, sophisticated control strategies are employed.

**4.1 Vector Control (Field-Oriented Control - FOC):**
*   **Concept:** Vector control aims to decouple the control of torque and flux by controlling the stator current vector components independently, similar to how DC motors are controlled.
*   **Reference Frame Transformation:** The stator currents, which are sinusoidal in the stationary frame (abc frame), are transformed into a rotating reference frame (dq frame) that is synchronized with the rotor's magnetic field.
    *   **d-axis (direct axis):** Aligned with the rotor's magnetic flux. Current along the d-axis controls the flux.
    *   **q-axis (quadrature axis):** Perpendicular to the rotor's magnetic flux. Current along the q-axis controls the torque.
*   **Control Loops:**
    *   **Flux Control:** The d-axis current ($I_d$) is controlled to maintain the desired magnetic flux. For permanent magnet motors, $I_d$ is typically kept negative to achieve field weakening at high speeds or zero for maximum torque per ampere.
    *   **Torque Control:** The q-axis current ($I_q$) is controlled to produce the desired torque. Torque is directly proportional to $I_q$.
*   **Implementation:** Requires a position or speed sensor to perform the dq transformation and an inverter to synthesize the required voltage waveforms to achieve the desired current.
*   **Advantages:** Excellent dynamic performance, high efficiency, smooth torque.
*   **Textbook Reference:** *Permanent magnet synchronous and Brushless DC motor Drives* by R. Krishnan extensively covers vector control techniques for PMSMs.

**4.2 Direct Torque Control (DTC):**
*   **Concept:** DTC directly controls the torque and flux of the motor without requiring rotor position information for the primary control loop (though it might be used for flux estimation). It operates by directly switching the inverter voltage vectors to achieve desired changes in torque and flux.
*   **Key Components:**
    *   **Flux Estimator:** Estimates the stator flux linkage magnitude and position.
    *   **Torque Estimator:** Estimates the motor torque based on flux and current.
    *   **Flux and Torque Controllers:** These are usually hysteresis controllers.
    *   **Switching Table:** Selects the appropriate inverter voltage vector based on the output of the hysteresis controllers and the position of the flux vector.
*   **Advantages:** Fast torque response, inherent robustness to parameter variations, simpler control implementation compared to FOC (no dq transformation needed for the main control).
*   **Disadvantages:** Higher torque and flux ripple compared to FOC.
*   **Textbook Reference:** *Special Electrical Machines* by E. G. Janardhan provides an overview of DTC as a control strategy for AC motor drives.

### 5. Self-Control

**Definition:** Self-control, in the context of PMSM drives, refers to control strategies where the stator current waveforms (or voltage waveforms) are synchronized with the rotor's position, eliminating the need for explicit rotor position sensing for the main control loop. This is achieved by generating the control signals based on the back EMF or induced voltage waveforms, which are inherent to the motor's operation.

**5.1 Synchronous Commutation / Self-Commutation:**
*   This is the principle behind BLDC motor control. The stator phases are energized sequentially (typically 120-degree conduction) based on the back EMF of the non-energized phases.
*   While primarily associated with BLDC motors (trapezoidal back EMF), the concept can be extended to PMSMs with sinusoidal back EMF, though the waveform shape influences the control strategy.

**5.2 Application to PMSM:**
*   If the PMSM has a sinusoidal back EMF, controlling the stator currents to be sinusoidal and synchronized with the back EMF results in smooth torque and synchronous operation.
*   **Virtual Sensing:** Techniques exist where rotor position is *estimated* from the motor's voltage and current measurements, allowing for self-controlled operation. This is a form of sensorless control.

**5.3 Key Principle:** The control signals (e.g., switching instants of the inverter) are generated based on the motor's internal electrical signals (like back EMF) which are naturally synchronized with the rotor position.

**Important Point to Remember:** Self-control inherently implies a form of synchronization between the electrical excitation and the rotor's electrical position, often achieved by sensing or estimating the back EMF.

### 6. Sensorless Control of PMSM

**Definition:** Sensorless control of PMSMs eliminates the need for a physical rotor position sensor (like an encoder or resolver), reducing system cost, size, and complexity. This is achieved by estimating the rotor position and speed from the electrical measurements of the motor, typically stator voltages and currents.

**6.1 Principle:**
*   The fundamental idea is to use the motor's electrical behavior (currents and voltages) to deduce its mechanical state (rotor position and speed).
*   **Back EMF Estimation:** In PMSMs operating at sufficient speeds, the back EMF is significant and proportional to speed and rotor position. By measuring stator currents and voltages, and knowing the motor parameters, the back EMF can be estimated. From the back EMF, the rotor position and speed can be inferred.
*   **Current Model:** The motor's dynamic equations are used to predict the rotor position based on applied voltages and measured currents.
*   **Flux Model:** Similar to the current model, but focuses on estimating the rotor flux.

**6.2 Methods for Sensorless Control:**

*   **6.2.1 High-Speed Operation (Back EMF Based):**
    *   **Princ:** At higher speeds, the back EMF voltage is dominant over the stator resistance drop.
    *   **Method:** The stator voltage equation is simplified, and the back EMF terms are isolated and estimated. The rotor position can then be calculated from the estimated back EMF.
    *   **Challenges:** Accuracy degrades at low speeds and standstill due to the dominance of stator resistance and inductance.
    *   **Textbook Reference:** *Brushless PM and Reluctance Motor Drives* by T. J. E. Miller discusses the back-EMF based sensorless control methods for PMSMs.

*   **6.2.2 Low-Speed and Standstill Operation (Current/Flux Model Based):**
    *   **Princ:** At low speeds and standstill, the back EMF is negligible. Instead, high-frequency voltage pulses are injected into the stator windings. The motor's inductance changes depending on the rotor position relative to the stator.
    *   **Method:** By analyzing the resulting high-frequency currents, the rotor position can be determined.
    *   **Challenges:** Injects high-frequency noise, may cause slight torque ripple, requires precise knowledge of motor parameters.
    *   **Textbook Reference:** *Permanent magnet synchronous and Brushless DC motor Drives* by R. Krishnan elaborates on the challenges and techniques for low-speed sensorless control, including high-frequency injection.

*   **6.2.3 Extended Kalman Filter (EKF):**
    *   **Princ:** EKF is a powerful state estimation technique that can be used to simultaneously estimate rotor position, speed, and other motor parameters, even in the presence of noise.
    *   **Method:** It uses a mathematical model of the motor and measurement updates to provide optimal estimates of the system states.
    *   **Advantages:** Can provide accurate estimates over a wide speed range, including low speeds and standstill.
    *   **Disadvantages:** Computationally intensive.

**Important Point to Remember:** Sensorless control is crucial for cost-sensitive applications. The choice of sensorless technique depends heavily on the required operating speed range and accuracy.

### 7. Applications of PMSM

PMSMs are used in a vast array of applications due to their high efficiency, power density, and controllability.

*   **Electric Vehicles (EVs) and Hybrid Electric Vehicles (HEVs):** High efficiency and power density are critical for range and performance.
*   **Industrial Automation:** Robotics, servo drives, machine tools, conveyors, where precise speed and position control are essential.
*   **Appliances:** Washing machines, refrigerators, air conditioners, for energy efficiency and quiet operation.
*   **Aerospace:** Actuators, pumps, and fans where weight and efficiency are paramount.
*   **Medical Devices:** MRI machines, surgical robots, diagnostic equipment.
*   **Renewable Energy:** Wind turbines (especially direct-drive generators).
*   **Consumer Electronics:** Drones, electric bikes, power tools.

**Example:** In electric vehicles, PMSMs are often used in conjunction with sophisticated control strategies like FOC to maximize range and provide dynamic acceleration.

**Textbook Reference:** *Special Electrical Machines* by E. G. Janardhan and *A detailed study on Special Electrical Machines* by V. Vedanarayanan both list numerous applications and highlight the benefits of PMSMs in these fields.

### 8. Comparison with BLDC Motors

PMSMs and BLDC motors are often grouped together due to their use of permanent magnets on the rotor and electronic commutation. However, they differ significantly in their construction, operating principle, and control strategies, leading to different performance characteristics.

| Feature             | Permanent Magnet Synchronous Motor (PMSM)                                    | Brushless DC Motor (BLDC)                                                |
| :------------------ | :--------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Stator Winding**  | Sinusoidally distributed windings.                                           | Concentrated or distributed windings, often producing trapezoidal flux. |
| **Back EMF**        | Sinusoidal back EMF.                                                         | Trapezoidal back EMF.                                                    |
| **Torque**          | Smooth, low torque ripple (especially with sinusoidal current control).      | Pulsating torque (especially with 120-degree commutation), higher ripple. |
| **Control Strategy**| Vector Control (FOC), Direct Torque Control (DTC). Requires precise position feedback or estimation. | Trapezoidal commutation (often 120-degree conduction), simpler control. |
| **Efficiency**      | Generally higher, especially at varying speeds, due to smoother operation and better flux utilization. | High, but can be lower than PMSM at certain operating points due to torque ripple. |
| **Power Density**   | High, often higher than BLDC due to better utilization of magnets and lower losses. | High, but generally lower than PMSM.                                     |
| **Speed Range**     | Wide speed range, can achieve high speeds.                                   | Can achieve high speeds, but FOC control is more common for very wide ranges. |
| **Cost**            | Can be higher due to more complex control and potentially higher quality components. | Generally lower due to simpler control requirements.                     |
| **Applications**    | EVs, industrial automation, servo drives, high-performance applications.     | Appliances, drones, electric bikes, simpler industrial applications.       |
| **Textbook Reference** | *Permanent magnet synchronous and Brushless DC motor Drives* by R. Krishnan provides a comprehensive comparison. | *Special Electrical Machines* by K. Venkataratnam covers BLDC motor characteristics in detail. |

**Important Distinction:** While both are "brushless," the term "PMSM" typically refers to motors with sinusoidal back EMF and controlled by advanced AC control techniques (like FOC), whereas "BLDC" typically refers to motors with trapezoidal back EMF controlled by simpler commutation schemes. However, the lines can blur, and some motors are referred to as "sinusoidal BLDC" or "trapezoidal PMSM." The key is the back EMF waveform and the control strategy used.

### 9. Practice Questions and Answers

**Question 1:** What is the primary difference in rotor construction between a Surface-Mounted Permanent Magnet (SPM) rotor and an Interior Permanent Magnet (IPM) rotor?
**Answer:** In SPM rotors, the permanent magnets are mounted directly on the outer surface of the rotor core, while in IPM rotors, the permanent magnets are embedded within the rotor core.

**Question 2:** Explain the basic principle of operation for a PMSM.
**Answer:** A PMSM operates by the interaction between the rotating magnetic field produced by the stator currents and the magnetic field of the permanent magnets on the rotor. The rotor magnetic poles are attracted to the opposite poles of the stator's rotating magnetic field, causing the rotor to rotate at the same speed as the field (synchronous speed).

**Question 3:** What is the main advantage of using Vector Control (FOC) for PMSM drives?
**Answer:** The main advantage of FOC is its ability to independently control torque and flux by transforming the stator currents into a rotating reference frame (dq frame), leading to excellent dynamic performance, high efficiency, and smooth torque control.

**Question 4:** What is the challenge in sensorless control of PMSMs at very low speeds or standstill? How is this overcome?
**Answer:** At low speeds and standstill, the back EMF is negligible, making it difficult to estimate rotor position based on back EMF. This is overcome by injecting high-frequency voltage pulses into the stator windings and analyzing the resulting high-frequency currents to determine the rotor position.

**Question 5:** List three applications where PMSMs are commonly used and explain why they are suitable for those applications.
**Answer:**
1.  **Electric Vehicles (EVs):** High efficiency and power density are crucial for maximizing range and providing strong acceleration.
2.  **Industrial Automation (Servo Drives):** Precise speed and position control, smooth torque, and high dynamic response are required for robotics and machine tools.
3.  **Appliances (e.g., Washing Machines):** High efficiency leads to energy savings, and smooth operation contributes to reduced noise and vibration.

**Question 6:** How does the back EMF waveform of a PMSM differ from that of a typical BLDC motor, and what are the implications for control?
**Answer:** A PMSM typically has a sinusoidal back EMF waveform, leading to smooth torque when driven with sinusoidal currents. A typical BLDC motor has a trapezoidal back EMF waveform, which is usually driven with trapezoidal (120-degree conduction) currents, resulting in more torque ripple. This difference influences the complexity of the control required for smooth operation.

### 10. Important Points to Remember

*   **Rotor Magnet Arrangement:** The construction of the rotor (SPM vs. IPM) significantly impacts performance and protection.
*   **Synchronous Operation:** Rotor speed is locked to the stator field frequency.
*   **Vector Control (FOC):** The gold standard for high-performance PMSM control, offering decoupled torque and flux control.
*   **Sensorless Control:** Essential for cost reduction, but requires sophisticated estimation techniques, especially at low speeds.
*   **PMSM vs. BLDC:** The key differentiator is the back EMF waveform (sinusoidal for PMSM, trapezoidal for BLDC) and the associated control strategies, leading to differences in torque smoothness and efficiency.
*   **Field Weakening:** IPM rotors enable field-weakening operation by injecting negative d-axis current, allowing operation above base speed.

This comprehensive study note aims to cover the essential aspects of Permanent Magnet Synchronous Motors as per the provided topic and learning outcomes, drawing upon the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
