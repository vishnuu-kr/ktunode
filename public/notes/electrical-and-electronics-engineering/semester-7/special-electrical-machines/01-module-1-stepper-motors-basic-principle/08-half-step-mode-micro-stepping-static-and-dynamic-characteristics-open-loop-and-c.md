---
title: "half-step mode – micro-stepping - static and dynamic characteristics – open-loop and closed loop control - applications – numerical problems."
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 1: Stepper motors – basic principle"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368a1"
status: "completed"
scrapedAt: "2026-05-23T16:39:32.156Z"
---
# Special Electrical Machines - Module 1: Stepper Motors - Basic Principle

## Introduction to Stepper Motors

Stepper motors are a type of brushless DC electric motor that divides a full rotation into a number of equal steps. The motor has no brushes, which eliminates a major cause of wear and tear. The position of the motor is known at all times, without a need for a position sensor, as long as the drive signal is properly sequenced. This is crucial for open-loop control.

**Key Concepts:**

*   **Rotor:** The rotating part of the motor, typically made of permanent magnets or ferromagnetic material.
*   **Stator:** The stationary part of the motor, containing windings that are energized in a specific sequence to produce a rotating magnetic field.
*   **Step Angle:** The angle through which the rotor moves for each discrete pulse of input signal. It determines the resolution of the motor.
*   **Resolution:** The number of steps required for one full revolution. A smaller step angle means higher resolution.
*   **Holding Torque:** The torque produced by the motor when it is stationary and energized, resisting external forces trying to rotate the rotor.
*   **Pull-in Torque:** The maximum torque at which the motor can start and synchronize with the applied pulse rate without losing steps.
*   **Pull-out Torque:** The maximum torque at which the motor can operate at a given speed without losing steps.
*   **Slew Rate:** The maximum stepping rate at which the motor can follow the input pulses without losing synchronism.

**Textbook References:**

*   **Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited.** (Provides fundamental principles and various types of stepper motors)
*   **Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press.** (Offers a good overview of stepper motor operation and control)

---

## 1. Stepper Motor Driving Modes

Stepper motors can be driven in different modes to control their step angle and performance.

### 1.1. Full-Step Mode

In full-step mode, adjacent stator phases are energized simultaneously, resulting in the maximum torque and the largest step angle.

*   **Operation:** Typically involves energizing two windings at a time. For a 2-phase motor, this means phases A & B energized, then B & C, then C & D, then D & A.
*   **Step Angle:** For a motor with $N$ stator poles and $N/2$ rotor poles (common for permanent magnet types), the full-step angle $\alpha_{FS}$ is given by:
    $\alpha_{FS} = \frac{360^\circ}{N_{phases} \times N_{steps/phase}}$
    For a 2-phase motor with $N$ rotor teeth, the step angle is $\frac{360^\circ}{N}$.
*   **Advantages:**
    *   Maximum torque is produced.
    *   Simple drive circuitry.
*   **Disadvantages:**
    *   Lower resolution (larger step angle).
    *   Can cause vibrations and resonance at certain speeds.

**Example:** A stepper motor with 50 rotor teeth will have a full-step angle of $360^\circ / 50 = 7.2^\circ$.

---

### 1.2. Half-Step Mode

Half-step mode interpolates between full steps by energizing only one phase at a time, then two adjacent phases. This effectively halves the step angle and doubles the resolution.

*   **Operation:** The sequence is A -> A+B -> B -> B+C -> C -> C+D -> D -> D+A (for a 4-phase system).
*   **Step Angle:** The half-step angle $\alpha_{HS}$ is half of the full-step angle:
    $\alpha_{HS} = \frac{\alpha_{FS}}{2}$
*   **Advantages:**
    *   Doubled resolution compared to full-step.
    *   Smoother operation and reduced vibration.
*   **Disadvantages:**
    *   Torque per phase is reduced by approximately 30% compared to full-step mode when only one phase is energized.
    *   More complex drive sequence.

**Example:** If a motor has a full-step angle of $7.2^\circ$, its half-step angle will be $3.6^\circ$.

**Textbook Reference:**

*   **Vedanarayanan, V. (2021). *A detailed study on Special Electrical Machines*. Notion Press.** (Discusses various stepping modes and their impact on performance)

---

### 1.3. Micro-stepping

Micro-stepping is a technique that further subdivides the basic step angle of the motor, allowing for smoother rotation and higher resolution. It achieves this by varying the current in the stator windings in a sinusoidal or trapezoidal manner, effectively creating intermediate rotor positions between the full and half steps.

*   **Principle:** By controlling the current levels in the windings to approximate a sinusoidal waveform, the rotor can be positioned at any point within a step. The motor is essentially treated as an analog servo system.
*   **Divisions:** Micro-stepping can divide a full step into 2, 4, 8, 16, 32, 64, 128, 256, or even more micro-steps.
*   **Operation:**
    *   **Sinusoidal Micro-stepping:** The current in each phase winding is varied sinusoidally according to the desired micro-step position. The current in phase A might be proportional to $\cos(\theta)$ and phase B to $\sin(\theta)$, where $\theta$ is the desired rotor angle.
    *   **Trapezoidal Micro-stepping:** A simpler approximation where current levels are changed in discrete steps, resembling a trapezoidal waveform.
*   **Advantages:**
    *   Very smooth motion.
    *   Significantly increased resolution.
    *   Reduced torque ripple and resonance.
    *   Improved holding torque stability between steps.
*   **Disadvantages:**
    *   Requires more complex drive circuitry and control algorithms.
    *   Reduced torque at intermediate (micro-step) positions compared to full-step operation.
    *   Requires precise current control for optimal performance.

**Control Methods for Micro-stepping:**

*   **Current Control:** The primary method is to control the current amplitude in each winding. This is typically achieved using Pulse Width Modulation (PWM) techniques.
*   **D/A Converters:** Digital-to-analog converters can generate the required analog current signals for the windings.

**Textbook Reference:**

*   **Krishnan, R. (2016). *Permanent magnet synchronous and Brushless DC motor Drives*. CRC Press.** (While focused on PMAC and BLDC, the principles of precise current control for positioning are relevant to micro-stepping in stepper motors).
*   **Miller, T. J. E. (1989). *Brushless PM and Reluctance Motor Drives*. Clarendon Press, Oxford.** (Discusses advanced drive techniques, some of which are applicable to understanding micro-stepping)

---

## 2. Static and Dynamic Characteristics

The performance of a stepper motor is characterized by its static and dynamic properties.

### 2.1. Static Characteristics

Static characteristics describe the motor's behavior when it is stationary or moving at very low speeds.

*   **Step Angle Accuracy:** The actual angle moved per step compared to the theoretical step angle. This is influenced by manufacturing tolerances.
    *   **Step Angle Error:** The difference between the actual and theoretical step angle.
    *   **Cumulative Error:** The total deviation of the rotor position after a series of steps.
*   **Torque-Position Curve:** This curve shows how the holding torque varies with the rotor position within a step.
    *   In full-step and half-step modes, the torque is maximum when the rotor poles are aligned with the energized stator poles and drops to zero at the inter-pole positions.
    *   In micro-stepping, the torque is controlled to be relatively constant across a micro-step.
*   **Holding Torque:** The torque required to displace the rotor by one step angle when the windings are energized. It's a measure of the motor's ability to resist external forces when stationary.
*   **Bifilar Stepping:** A winding technique where each phase winding is made of two separate coils wound bifilar. By changing the direction of current in one coil while maintaining it in the other, the step angle can be effectively halved, similar to half-stepping, but with improved torque characteristics.

**Important Point to Remember:** Static characteristics are important for understanding the motor's precision and holding capabilities.

---

### 2.2. Dynamic Characteristics

Dynamic characteristics describe the motor's behavior when it is in motion and subject to changing load conditions or input frequencies.

*   **Pull-in Torque:** The maximum stepping rate at which the motor can start rotating from rest and synchronize with the applied pulse rate without losing any steps. As the stepping rate increases, the pull-in torque typically decreases.
*   **Pull-out Torque:** The maximum torque that the motor can produce at a given stepping rate without losing synchronism. This is equivalent to the load torque capacity at speed.
*   **Slew Rate:** The maximum stepping rate at which the motor can operate continuously without losing steps. It is the highest frequency of pulses the motor can reliably follow.
*   **Acceleration/Deceleration:** Stepper motors require controlled acceleration and deceleration to avoid losing steps, especially when starting or stopping under load. Rapid changes in stepping rate can lead to instability.
*   **Resonance:** Stepper motors have natural mechanical resonance frequencies. If the stepping rate matches these frequencies, the motor can experience excessive vibration, noise, and loss of torque. This is often mitigated by using half-stepping, micro-stepping, or operating at speeds away from resonance.
*   **Speed-Torque Curve:** This curve plots the torque the motor can deliver against its stepping rate (speed). It typically shows a peak torque at low speeds and a gradual decrease as speed increases.

**Textbook Reference:**

*   **Janardhan, E. G. (2014). *Special Electrical Machines*. PHI Learning Private Limited.** (Provides detailed analysis of speed-torque characteristics and dynamic behavior)

---

## 3. Open-Loop and Closed-Loop Control

Stepper motors are primarily used in open-loop systems due to their inherent ability to maintain rotor position. However, closed-loop control can be implemented for enhanced performance and reliability.

### 3.1. Open-Loop Control

In open-loop control, the controller sends a sequence of pulses to the motor, and it is assumed that the motor follows these pulses precisely.

*   **Principle:** The position of the rotor is inferred from the number of pulses sent to the motor. No feedback mechanism is used to verify the actual rotor position.
*   **Advantages:**
    *   Simplicity and low cost of the control system.
    *   No need for position sensors (encoders, resolvers), reducing system complexity and potential failure points.
    *   Suitable for applications where the load torque is predictable and within the motor's capabilities.
*   **Disadvantages:**
    *   **Loss of Steps:** If the load torque exceeds the motor's pull-out torque at a given speed, or if the acceleration is too rapid, the motor can miss steps, leading to position errors.
    *   **No Error Correction:** The system cannot detect or correct for step loss.
    *   **Performance Limitations:** May not be suitable for high-precision or critical applications where absolute certainty of position is required.

**Drive Circuitry:** Typically involves a microcontroller or dedicated driver IC that translates input signals into the correct sequence of energizing stator windings.

**Textbook Reference:**

*   **Venkataratnam, K. (2008). *Special Electrical Machines*. Universities Press.** (Covers the basics of open-loop driving of stepper motors)

---

### 3.2. Closed-Loop Control

Closed-loop control incorporates a feedback mechanism to monitor the actual rotor position and compare it with the commanded position. If there is a discrepancy, the controller adjusts the motor's excitation to correct the error.

*   **Principle:** A position sensor (e.g., encoder, resolver, Hall-effect sensors) is mounted on the motor shaft to provide feedback on the rotor's actual position. The controller compares this feedback with the desired position and adjusts the stepping sequence accordingly.
*   **Advantages:**
    *   **Elimination of Step Loss:** The system can detect and correct for missed steps, ensuring accurate positioning.
    *   **Higher Torque Utilization:** The motor can be driven closer to its torque limits without the risk of losing steps.
    *   **Improved Dynamic Performance:** Allows for faster acceleration and deceleration, as the controller can react to deviations.
    *   **Robustness:** Less susceptible to variations in load or supply voltage.
    *   Suitable for high-precision and critical applications.
*   **Disadvantages:**
    *   **Increased Complexity and Cost:** Requires additional hardware (sensors) and more sophisticated control algorithms.
    *   **Sensor Calibration and Maintenance:** Sensors may require calibration and can be a source of failure.
    *   **Potential for Instability:** Improperly tuned closed-loop control can lead to oscillations or instability.

**Control Strategies:**

*   **Position Feedback:** Using encoders or resolvers to directly measure rotor angle.
*   **Current Feedback:** Monitoring current in the windings can also provide information about rotor position, especially in permanent magnet synchronous motors that can be operated in a similar fashion to steppers.
*   **Servos with Stepper Motors:** Often, stepper motors are used in conjunction with position feedback to operate as a "pseudo-servo" system, offering a balance between the simplicity of steppers and the precision of servos.

**Textbook Reference:**

*   **Krishnan, R. (2016). *Permanent magnet synchronous and Brushless DC motor Drives*. CRC Press.** (Discusses closed-loop control strategies for PM motors, which can be adapted for stepper control)

---

## 4. Applications of Stepper Motors

Stepper motors are widely used in applications requiring precise positioning, controlled speed, and digital control.

*   **Printers:** Driving print heads, paper feed mechanisms.
*   **Scanners:** Positioning the scanning element.
*   **Robotics:** Joint actuation, precise movement control.
*   **CNC Machines:** Controlling axis movement for cutting, drilling, and milling.
*   **3D Printers:** High-precision positioning of the print head and build platform.
*   **Medical Equipment:** Syringe pumps, analytical instruments, imaging systems.
*   **Camera Systems:** Auto-focus mechanisms, lens control.
*   **Automation and Control Systems:** Conveyor belts, pick-and-place machines.
*   **Disk Drives:** Head positioning mechanisms (though less common now with SSDs).
*   **Textile Machinery:** Precise fabric feeding and control.

**Key Characteristics Suited for Applications:**

*   **Digital Input Compatibility:** Easily interfaced with microprocessors and digital control systems.
*   **Precise Incremental Motion:** Ability to move in discrete, repeatable steps.
*   **Holding Torque:** Ability to maintain position without external power (in some designs) or with minimal power.
*   **Low-Speed Torque:** Generally good torque at low speeds.

---

## 5. Numerical Problems

This section will cover practice problems to reinforce understanding of stepper motor principles.

**Key Formulas Recap:**

*   **Full-Step Angle ($\alpha_{FS}$):** $\frac{360^\circ}{N_{steps\_per\_rev}}$ (where $N_{steps\_per\_rev}$ is the total number of steps in a full revolution)
*   **Half-Step Angle ($\alpha_{HS}$):** $\frac{\alpha_{FS}}{2}$
*   **Speed in RPM:** $N_{steps\_per\_sec} \times \frac{60}{N_{steps\_per\_rev}}$
*   **Speed in Hz (stepping frequency):** $N_{steps\_per\_sec}$

---

**Problem 1:**
A permanent magnet stepper motor has 50 teeth on its rotor and 4 phases on the stator. It is driven in the full-step mode. Calculate:
a) The step angle in degrees.
b) The number of steps required for one full revolution.
c) If the motor is driven at a stepping rate of 1000 steps/sec, what is its speed in RPM?

**Solution:**
a) For a permanent magnet stepper motor, the number of steps per revolution is directly related to the number of rotor teeth.
    $N_{steps\_per\_rev} = \text{Number of rotor teeth} = 50$
    Step Angle ($\alpha_{FS}$) = $\frac{360^\circ}{N_{steps\_per\_rev}} = \frac{360^\circ}{50} = 7.2^\circ$

b) The number of steps required for one full revolution is equal to the number of rotor teeth.
    $N_{steps\_per\_rev} = 50$ steps

c) Speed in RPM = $N_{steps\_per\_sec} \times \frac{60}{N_{steps\_per\_rev}}$
    Speed = $1000 \frac{\text{steps}}{\text{sec}} \times \frac{60 \text{ sec/min}}{50 \text{ steps/rev}}$
    Speed = $1000 \times 1.2 \text{ RPM} = 1200 \text{ RPM}$

---

**Problem 2:**
A hybrid stepper motor has a step angle of $1.8^\circ$ in full-step mode. If it is operated in half-step mode, what is:
a) The new step angle?
b) The number of steps required for one full revolution?
c) If the motor is driven at 5000 steps/sec in half-step mode, what is its speed in RPM?

**Solution:**
a) Half-step mode halves the step angle.
    Step Angle in half-step mode ($\alpha_{HS}$) = $\frac{\alpha_{FS}}{2} = \frac{1.8^\circ}{2} = 0.9^\circ$

b) Number of steps per revolution in half-step mode = $\frac{360^\circ}{\alpha_{HS}} = \frac{360^\circ}{0.9^\circ} = 400$ steps.
    Alternatively, since half-stepping doubles the resolution, the number of steps per revolution is doubled from full-step. If full-step mode yields $360^\circ / 1.8^\circ = 200$ steps/rev, then half-step mode yields $200 \times 2 = 400$ steps/rev.

c) Speed in RPM = $N_{steps\_per\_sec} \times \frac{60}{N_{steps\_per\_rev}}$
    Speed = $5000 \frac{\text{steps}}{\text{sec}} \times \frac{60 \text{ sec/min}}{400 \text{ steps/rev}}$
    Speed = $5000 \times 0.15 \text{ RPM} = 750 \text{ RPM}$

---

**Problem 3:**
A stepper motor is to be used for a positioning system. It has a step angle of $0.72^\circ$.
a) How many steps are required to move the rotor by $90^\circ$?
b) If the desired speed is 300 RPM, what is the required stepping frequency in steps per second?

**Solution:**
a) Number of steps = $\frac{\text{Desired angle}}{\text{Step angle}} = \frac{90^\circ}{0.72^\circ} = 125$ steps.

b) First, find the number of steps per revolution: $N_{steps\_per\_rev} = \frac{360^\circ}{0.72^\circ} = 500$ steps/rev.
    Now, convert RPM to steps per second:
    Stepping frequency (steps/sec) = Speed (RPM) $\times \frac{N_{steps\_per\_rev}}{60}$
    Stepping frequency = $300 \frac{\text{rev}}{\text{min}} \times \frac{500 \text{ steps/rev}}{60 \text{ sec/min}}$
    Stepping frequency = $300 \times \frac{500}{60} \frac{\text{steps}}{\text{sec}} = 300 \times 8.333 \approx 2500$ steps/sec.

---

**Problem 4:**
A stepper motor driver operates in micro-stepping mode, dividing each full step into 32 micro-steps. The motor has a full-step angle of $1.8^\circ$.
a) What is the micro-step angle?
b) If the motor is driven at a stepping rate of 10,000 full steps per second, what is the effective micro-stepping rate in micro-steps per second?

**Solution:**
a) Micro-step angle = $\frac{\text{Full-step angle}}{\text{Number of micro-steps per full step}}$
    Micro-step angle = $\frac{1.8^\circ}{32} = 0.05625^\circ$

b) Effective micro-stepping rate = (Full step rate) $\times$ (Micro-steps per full step)
    Effective micro-stepping rate = $10,000 \frac{\text{full steps}}{\text{sec}} \times 32 \frac{\text{micro-steps}}{\text{full step}}$
    Effective micro-stepping rate = $320,000 \frac{\text{micro-steps}}{\text{sec}}$

---

## 6. Important Points to Remember

*   Stepper motors are brushless DC motors that move in discrete steps.
*   Their position is known in open-loop control.
*   **Full-step** mode offers maximum torque but lower resolution.
*   **Half-step** mode doubles the resolution and smooths motion but slightly reduces torque.
*   **Micro-stepping** provides very smooth motion and high resolution by interpolating positions between basic steps through current control.
*   **Static characteristics** define holding torque and step angle accuracy.
*   **Dynamic characteristics** include pull-in torque, pull-out torque, and slew rate, which are crucial for understanding operational limits.
*   Resonance can be a problem and needs to be managed.
*   **Open-loop control** is simple and cost-effective but risks step loss.
*   **Closed-loop control** uses feedback for precision and reliability but is more complex.
*   The choice of driving mode and control strategy depends on the application's requirements for precision, speed, torque, and cost.

---

## Course Outcome Alignment

*   **CO1: Explain the constructional details, working and drive circuits for various types of stepper motor.**
    *   This module covers the working principles of stepper motors, different stepping modes (full-step, half-step, micro-stepping), and implicitly touches upon the drive circuits through the discussion of control methods. The different modes directly relate to how the drive circuits operate.
*   **CO2, CO3, CO4, CO5:** While this module focuses on stepper motors, the understanding of stepper motor operation (especially precision positioning, brushless nature, and different excitation strategies) lays a foundation for understanding other special electrical machines like reluctance motors, BLDC motors, and PM synchronous motors, which are covered in other modules. The concepts of magnetic field generation via stator windings and rotor interaction are fundamental.

---

This comprehensive study note covers the essential aspects of stepper motor modes, characteristics, control, applications, and includes practice problems with solutions. It is structured to align with the provided learning outcomes and course outcomes for Special Electrical Machines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
