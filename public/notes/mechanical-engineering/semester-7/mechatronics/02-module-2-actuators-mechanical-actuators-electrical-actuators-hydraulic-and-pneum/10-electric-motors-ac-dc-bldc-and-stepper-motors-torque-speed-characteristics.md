---
title: "Electric motors, ac, dc, bldc and stepper motors, torque-speed characteristics"
subject: "MECHATRONICS"
module: "Module 2: Actuators: Mechanical actuators, Electrical actuators, Hydraulic and Pneumatic actuators."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f14"
status: "completed"
scrapedAt: "2026-05-20T18:14:46.224Z"
---
# MECHATRONICS: Module 2 - Actuators: Electrical Actuators - Electric Motors

## Topic: Electric Motors, AC, DC, BLDC, and Stepper Motors, Torque-Speed Characteristics

### 1. Introduction to Electric Motors

Electric motors are crucial components in mechatronic systems, converting electrical energy into mechanical energy to produce motion. They are widely used due to their efficiency, controllability, and versatility. This section will explore different types of electric motors and their fundamental operating principles, torque-speed characteristics, and suitability for various applications.

**Key Concept:** **Electromechanical Transduction:** The process by which electrical energy is converted into mechanical energy.

**Alignment with Course Outcomes:**

*   **CO2: Understand the characteristics and working of actuators and choose the optimal one based on the application (K2).** This topic directly addresses the working principles and characteristics of electric motors as a primary class of actuators.

**Textbook References:**

*   **Bolton, W. (7th ed.). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering*. Pearson.** (Likely covers fundamental motor principles and classifications.)
*   **Onwubolu, G. C. *Mechatronics: Principles and Applications*. Elsevier.** (May provide more detailed application-oriented discussions.)
*   **Shetty, D., & Kolk, R. *Mechatronics System Design*. PWS Pub.** (Often focuses on system integration, including motor selection.)
*   **Rajput, R. K. (2007). *A Text Book of Mechatronics*. S. Chanth.** (Provides foundational knowledge of electrical machines.)

### 2. Types of Electric Motors

This section will delve into the most common types of electric motors used in mechatronics.

#### 2.1. DC Motors (Direct Current Motors)

DC motors are characterized by their operation using direct current. They offer good speed control but often require brushes, which can wear out.

**Key Concepts:**

*   **Stator:** The stationary part of the motor, usually containing magnets or field windings.
*   **Rotor (Armature):** The rotating part, typically containing coils of wire.
*   **Commutator:** A mechanical switch that reverses the direction of current in the rotor coils, allowing continuous rotation.
*   **Brushes:** Conductors that make electrical contact with the commutator.
*   **Back EMF (Electromotive Force):** Voltage generated in the rotating coils due to Faraday's law of induction, opposing the applied voltage.

**Types of DC Motors:**

*   **Brushed DC Motors:**
    *   **Permanent Magnet DC (PMDC) Motors:** Stator uses permanent magnets. Simple, efficient, and cost-effective for small applications.
        *   **Example:** Toys, small fans, cordless drills.
    *   **Series Wound DC Motors:** Field winding is connected in series with the armature winding. High starting torque.
        *   **Example:** Traction motors (trains, electric vehicles), cranes.
    *   **Shunt Wound DC Motors:** Field winding is connected in parallel with the armature winding. Relatively constant speed.
        *   **Example:** Lathes, fans, machine tools.
    *   **Compound Wound DC Motors:** Combination of series and shunt windings. Combines characteristics of both.
        *   **Example:** Elevators, presses.

*   **Brushless DC (BLDC) Motors:** (Detailed in Section 2.3)

**Torque-Speed Characteristics of DC Motors:**

*   **PMDC Motors:**
    *   **Torque:** Proportional to armature current ($T \propto I_a$).
    *   **Speed:** Inversely proportional to magnetic flux and proportional to applied voltage ($N \propto \frac{V - I_a R_a}{\Phi}$). With constant flux, speed is roughly proportional to voltage.
    *   **Characteristic:** Relatively linear torque-speed curve. At no load, speed is high; as load increases, torque increases and speed decreases.
    *   **Diagram:** A roughly linear downward sloping line from a high no-load speed at zero torque to stall torque at zero speed.

*   **Series Wound DC Motors:**
    *   **Torque:** Proportional to the square of the field flux, which is proportional to the armature current at low loads ($T \propto I_a^2$). At high loads, flux saturates, and $T \propto I_a$.
    *   **Speed:** Highly dependent on load. Very high speed at no load (dangerous if operated without load). Speed decreases sharply with increasing load.
    *   **Characteristic:** Highly non-linear. Extremely high starting torque.
    *   **Diagram:** A steep curve that starts at zero torque/zero speed, rises sharply to a high torque at low speeds, and then becomes less steep as speed increases.

*   **Shunt Wound DC Motors:**
    *   **Torque:** Proportional to the product of armature current and field flux ($T \propto \Phi I_a$). With constant field flux, $T \propto I_a$.
    *   **Speed:** Relatively constant, with a slight drop as load increases due to armature resistance drop.
    *   **Characteristic:** Nearly constant speed independent of load.
    *   **Diagram:** A curve that starts at zero torque/high speed and slopes slightly downwards as torque increases.

**Important Point to Remember:** The speed of a DC motor can be controlled by varying the applied voltage or the field flux.

**Practice Question 1:** A PMDC motor is operated with a constant voltage supply. If the load torque is doubled, how will the motor speed and current likely change?
**Answer:** The motor speed will decrease slightly due to the increased armature current causing a larger voltage drop across the armature resistance. The armature current will increase proportionally to the torque (assuming linearity).

#### 2.2. AC Motors (Alternating Current Motors)

AC motors are powered by alternating current and are widely used in industrial applications due to their robustness and lack of brushes (in many types).

**Key Concepts:**

*   **Rotating Magnetic Field:** The fundamental principle behind AC motor operation, created by the stator windings energized by AC supply.
*   **Synchronous Speed ($N_s$):** The speed at which the rotating magnetic field rotates, determined by the frequency of the AC supply and the number of poles. $N_s = \frac{120f}{P}$ (rpm), where $f$ is frequency (Hz) and $P$ is the number of poles.
*   **Slip:** The difference between synchronous speed and rotor speed in induction motors, crucial for torque production. $s = \frac{N_s - N_r}{N_s}$, where $N_r$ is the rotor speed.

**Types of AC Motors:**

*   **Induction Motors:** The most common type. The rotor current is induced by the rotating magnetic field.
    *   **Squirrel Cage Induction Motor:** Rotor consists of conducting bars embedded in a laminated iron core, short-circuited at both ends by end rings. Simple, rugged, and low maintenance.
        *   **Example:** Pumps, fans, compressors, general industrial machinery.
    *   **Wound Rotor Induction Motor:** Rotor has windings similar to the stator, connected to slip rings. Allows for external resistance to be added for starting torque control and speed variation.
        *   **Example:** High-inertia loads, applications requiring precise starting control.

*   **Synchronous Motors:** Rotor rotates at synchronous speed. Requires a DC excitation for the rotor to produce torque.
    *   **Example:** Power factor correction, applications requiring constant speed regardless of load (e.g., clocks, timers, some compressors).

**Torque-Speed Characteristics of Induction Motors:**

*   **Starting Torque:** Torque developed at zero speed.
*   **Pull-out Torque (Breakdown Torque):** The maximum torque the motor can develop. Beyond this point, the motor will stall.
*   **Full Load Torque:** The torque required at the rated output power.
*   **Characteristic:**
    *   At starting (slip = 1), there is a certain starting torque.
    *   As the motor accelerates, slip decreases, and torque increases.
    *   Torque reaches a maximum at the pull-out torque.
    *   Beyond the pull-out torque, speed decreases, slip increases, and torque drops rapidly, leading to stalling.
    *   Under normal operating conditions, the motor operates at a slip slightly less than 1 (e.g., 2-5%).
    *   **Diagram:** A curve starting at a positive starting torque, increasing to a peak (pull-out torque), and then decreasing as speed approaches synchronous speed.

**Important Points to Remember:**

*   Induction motors cannot start without slip.
*   The speed of an induction motor is inherently linked to the frequency of the supply. Variable Frequency Drives (VFDs) are used to control AC motor speed.

**Practice Question 2:** A 4-pole, 60 Hz AC induction motor runs at 1720 rpm. What is the slip of the motor?
**Answer:**
Synchronous speed ($N_s$) = $\frac{120 \times 60}{4} = 1800$ rpm.
Slip ($s$) = $\frac{N_s - N_r}{N_s} = \frac{1800 - 1720}{1800} = \frac{80}{1800} \approx 0.0444$ or 4.44%.

#### 2.3. BLDC Motors (Brushless Direct Current Motors)

BLDC motors are a type of DC motor that uses electronic commutation instead of mechanical brushes. This leads to higher efficiency, longer lifespan, and better speed control.

**Key Concepts:**

*   **Electronic Commutation:** Achieved using Hall effect sensors or sensorless control algorithms to detect rotor position and switch the current in the stator windings appropriately.
*   **Permanent Magnet Rotor:** The rotor typically contains permanent magnets.
*   **Stator Windings:** The stator houses the windings.
*   **Controller (ESC - Electronic Speed Controller):** An external circuit that manages the commutation.

**Operation:**
The controller energizes the stator windings in a specific sequence based on the rotor's position. This creates a rotating magnetic field that interacts with the rotor's permanent magnets, causing rotation.

**Torque-Speed Characteristics of BLDC Motors:**

*   **Torque:** Directly proportional to the applied voltage (or PWM duty cycle) and current.
*   **Speed:** Proportional to the applied voltage and inversely proportional to the load.
*   **Characteristic:** Similar to PMDC motors, BLDC motors have a relatively linear torque-speed characteristic. They can maintain torque over a wide speed range. The controller significantly impacts the shape of the curve by controlling the voltage and current.
*   **Diagram:** Similar to PMDC, a downward sloping linear curve.

**Advantages of BLDC Motors:**

*   High efficiency
*   Longer lifespan (no brushes to wear out)
*   Higher speed ranges
*   Better heat dissipation (windings are on the stator)
*   Quieter operation
*   Precise speed and torque control

**Disadvantages of BLDC Motors:**

*   Require complex electronic controllers
*   Higher initial cost

**Alignment with Course Outcomes:**

*   **CO2: Understand the characteristics and working of actuators and choose the optimal one based on the application (K2).** BLDC motors represent an advanced actuator with specific characteristics suitable for high-performance applications.

**Practice Question 3:** What is the primary advantage of a BLDC motor over a brushed DC motor?
**Answer:** The primary advantage is the absence of brushes, leading to higher efficiency, longer lifespan, and less maintenance.

#### 2.4. Stepper Motors

Stepper motors are DC motors that divide a full rotation into a number of discrete steps. They are ideal for applications requiring precise positioning and controlled movement without feedback sensors.

**Key Concepts:**

*   **Steps:** Each discrete angular movement of the rotor.
*   **Step Angle:** The angular displacement of the rotor for each step.
*   **Holding Torque:** The torque the motor can exert when stationary in a stepped position, preventing movement.
*   **Phases:** Stepper motors typically have two or more phases (windings).
*   **Excitation Modes:**
    *   **Wave Drive (1-phase on):** Lowest torque, lowest power consumption.
    *   **Full Step (2-phase on):** Higher torque than wave drive.
    *   **Half Step (alternating 1-phase and 2-phase on):** Double the resolution, smoother operation.
    *   **Microstepping:** Dividing full steps into smaller microsteps for very smooth motion and higher resolution.

**Types of Stepper Motors:**

*   **Variable Reluctance (VR) Stepper Motors:** Rotor is made of a ferromagnetic material with teeth. Stator has electromagnets. Torque is produced by the rotor aligning itself with the energized stator poles to minimize reluctance.
*   **Permanent Magnet (PM) Stepper Motors:** Rotor is a permanent magnet. Stator poles are energized to attract/repel the rotor poles.
*   **Hybrid Stepper Motors:** Combines features of VR and PM motors, with toothed rotors magnetized by permanent magnets. Offers high torque and resolution. Most common type.

**Torque-Speed Characteristics of Stepper Motors:**

*   **Holding Torque:** High torque when stationary, providing precise positioning.
*   **Pull-in Torque:** The maximum torque at which the motor can start rotating without losing steps from a standstill.
*   **Pull-out Torque:** The maximum torque at which the motor can continue to run without losing steps at a given speed.
*   **Characteristic:**
    *   The torque capability decreases significantly as the stepping rate (speed) increases.
    *   There is a specific speed at which the motor can no longer overcome the load and will stall or miss steps.
    *   The torque-speed curve is typically L-shaped, with high torque at low speeds and rapidly decreasing torque at higher speeds.
    *   **Diagram:** A curve starting at a high holding torque at zero speed, dropping sharply as speed increases, indicating the maximum torque the motor can deliver at each speed without losing steps.

**Advantages of Stepper Motors:**

*   Precise positioning and speed control without feedback
*   Excellent holding torque
*   Repeatable moves
*   Simple to drive (though requires a driver circuit)

**Disadvantages of Stepper Motors:**

*   Lower efficiency compared to other motors
*   Can miss steps if overloaded or driven too fast
*   Torque decreases significantly with speed
*   Resonance issues can occur at certain speeds

**Alignment with Course Outcomes:**

*   **CO2: Understand the characteristics and working of actuators and choose the optimal one based on the application (K2).** Stepper motors are crucial for positioning applications in mechatronics.
*   **CO3: Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour (K2).** Understanding the torque-speed characteristics is fundamental for modeling and predicting the behavior of systems using stepper motors.

**Practice Question 4:** What is the main application area where stepper motors excel, and why?
**Answer:** Stepper motors excel in precise positioning applications (e.g., robotics, CNC machines, 3D printers) because they can move in discrete steps, allowing for accurate angular control without the need for position feedback sensors.

### 3. Torque-Speed Characteristics in General

Understanding the torque-speed characteristics of any motor is vital for selecting the appropriate motor for a given application and for designing control systems.

**Key Parameters:**

*   **No-load Speed:** The maximum speed the motor can achieve when no external load is applied.
*   **Stall Torque:** The torque the motor produces when its shaft is held stationary (zero speed).
*   **Rated Torque:** The torque at which the motor can operate continuously without overheating or damage, at its rated speed.
*   **Rated Speed:** The speed at which the motor operates at its rated torque.
*   **Peak Torque:** The maximum torque the motor can produce for a short duration.

**General Shape of Torque-Speed Curves:**

*   **DC Motors (PMDC):** Generally linear, decreasing from a high no-load speed at zero torque to zero speed at stall torque.
*   **AC Induction Motors:** Start with a starting torque, increase to a peak (pull-out torque), and then decrease towards synchronous speed.
*   **Stepper Motors:** High torque at low speeds, decreasing rapidly as speed increases.

**Importance of Torque-Speed Curves:**

*   **Motor Selection:** Helps match motor capabilities to the load requirements.
*   **Performance Prediction:** Allows engineers to predict how a motor will perform under different load conditions.
*   **Control System Design:** Essential for designing speed and position control loops to ensure stability and proper operation.
*   **Efficiency Analysis:** Can indicate the range of speeds and torques where the motor operates most efficiently.

**Textbook References:**

*   All textbooks will provide detailed discussions and graphical representations of torque-speed characteristics for various motor types. Bolton's text, in particular, often provides clear explanations of these fundamental relationships.

**Alignment with Course Outcomes:**

*   **CO2: Understand the characteristics and working of actuators and choose the optimal one based on the application (K2).** This section directly addresses the core characteristics needed for selection.

### 4. Examples and Applications

*   **Robotics:** DC motors (especially BLDC) for joint actuation, stepper motors for precise arm positioning.
*   **Automation:** AC induction motors for conveyors and pumps, DC motors for actuators in assembly lines.
*   **Automotive:** DC motors for window regulators, wipers; BLDC motors for electric power steering, cooling fans; AC motors for traction in EVs.
*   **Consumer Electronics:** Small DC motors in CD players, printers; BLDC motors in drones, washing machines.
*   **Medical Devices:** Precision DC motors for surgical robots, stepper motors for drug delivery pumps.

### 5. Summary and Key Takeaways

*   **DC Motors:** Good for variable speed applications, PMDC offers simplicity, series for high starting torque, shunt for constant speed.
*   **AC Motors:** Robust, low maintenance (induction), synchronous for constant speed. Induction motors are versatile for industrial use.
*   **BLDC Motors:** High efficiency, long life, good for demanding applications requiring precise control.
*   **Stepper Motors:** Ideal for precise positioning without feedback, but torque drops significantly with speed.
*   **Torque-Speed Characteristics:** Crucial for understanding motor behavior under load and for proper selection and control.

**Important Points to Remember:**

*   The choice of motor depends heavily on the application's requirements for speed, torque, precision, efficiency, cost, and environmental conditions.
*   Understanding the torque-speed curve is paramount for successful mechatronic system design.
*   Control electronics play a significant role in realizing the full potential of modern electric motors, especially BLDC and stepper motors.

### 6. Practice Questions and Answers (Comprehensive)

**Question 1:** Compare and contrast the torque-speed characteristics of a brushed DC shunt motor and a stepper motor.
**Answer:**
*   **Brushed DC Shunt Motor:** Exhibits a relatively linear torque-speed characteristic. Speed decreases slightly as load (torque) increases. It has a high no-load speed and a significant stall torque. It offers smooth, continuous rotation.
*   **Stepper Motor:** Has a distinctly different characteristic. It offers high holding torque at zero speed, and this torque capability decreases sharply as the stepping frequency (speed) increases. It operates in discrete steps. Its usable speed range is limited by its ability to avoid losing steps.

**Question 2:** A mechatronic system requires an actuator for a robotic arm joint that needs to move to precise angular positions and hold them firmly. Which type of motor would be most suitable, and why?
**Answer:** A **stepper motor** would be the most suitable. Its ability to move in discrete, repeatable steps allows for precise angular positioning without the need for expensive feedback sensors. The holding torque also ensures that the robotic arm joint remains in its designated position when stationary.

**Question 3:** What is the fundamental difference in how brushed DC motors and BLDC motors achieve commutation?
**Answer:**
*   **Brushed DC Motors:** Use **mechanical commutation** via a commutator and brushes. As the rotor rotates, the brushes physically switch the current direction in the armature coils.
*   **BLDC Motors:** Use **electronic commutation**. An external controller detects the rotor's position (using sensors or algorithms) and electronically switches the current to the stator windings.

**Question 4:** An AC induction motor has a synchronous speed of 1800 rpm. If it is operating at 1750 rpm under load, what is its slip?
**Answer:**
Synchronous speed ($N_s$) = 1800 rpm
Rotor speed ($N_r$) = 1750 rpm
Slip ($s$) = $\frac{N_s - N_r}{N_s} = \frac{1800 - 1750}{1800} = \frac{50}{1800} = \frac{1}{36} \approx 0.0278$ or 2.78%.

**Question 5:** List three key advantages of BLDC motors over traditional brushed DC motors.
**Answer:**
1.  **Higher Efficiency:** No energy loss due to brush friction and arcing.
2.  **Longer Lifespan and Reliability:** No brushes to wear out, leading to reduced maintenance.
3.  **Better Speed Range and Control:** Can operate at higher speeds and offer more precise speed control.
4.  **Quieter Operation:** No brush noise.
5.  **Better Heat Dissipation:** Heat generated in windings is on the stator, which is easier to cool.

**Question 6:** What are the primary components of a stepper motor system?
**Answer:**
1.  **Stepper Motor:** The motor itself.
2.  **Stepper Motor Driver (Controller):** An electronic circuit that converts low-power control signals into the higher-power pulses required to drive the motor's windings. It manages the stepping sequence and current.
3.  **Power Supply:** Provides the necessary DC voltage and current for the driver and motor.
4.  **Control Signal Source:** Microcontroller, PLC, or other logic circuits that generate the step and direction commands.

**Question 7:** For a heavy-duty industrial application requiring a motor that can deliver high torque and operate reliably for extended periods with minimal maintenance, which motor type would generally be preferred, and what are its typical torque-speed characteristics?
**Answer:** An **AC Induction Motor** (specifically a squirrel cage type) would generally be preferred.
*   **Characteristics:** Induction motors offer robust construction, low maintenance, and reasonable efficiency. Their torque-speed curve starts with a decent starting torque, increases to a maximum pull-out torque, and then drops as the speed approaches the synchronous speed. They operate efficiently at their rated load and speed.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
