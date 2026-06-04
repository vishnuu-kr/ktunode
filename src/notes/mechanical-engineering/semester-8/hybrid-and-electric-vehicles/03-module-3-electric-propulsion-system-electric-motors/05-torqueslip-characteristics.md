---
title: "torque–slip characteristics."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446444e"
status: "completed"
scrapedAt: "2026-05-20T18:21:00.296Z"
---
## HYBRID AND ELECTRIC VEHICLES

**Module 3: Electric Propulsion System – Electric Motors**

**Topic: Torque–Slip Characteristics**

---

### 1. Introduction to Electric Motor Torque and Slip

Electric motors are the heart of the electric propulsion system in EVs. Their ability to generate torque is crucial for vehicle motion. Understanding the relationship between torque and slip is fundamental to controlling and optimizing motor performance.

**Key Concepts:**

*   **Torque:** The rotational force produced by an electric motor. It is the primary driver of vehicle acceleration and movement. Torque is typically measured in Newton-meters (Nm).
*   **Slip (s):** In AC induction motors, slip is the difference between the synchronous speed of the rotating magnetic field and the actual speed of the rotor, expressed as a fraction or percentage of the synchronous speed.
    *   Synchronous speed ($N_s$) is the speed at which the magnetic field rotates in the stator. It is determined by the frequency of the AC supply ($f$) and the number of poles ($p$) in the motor:
        $N_s = \frac{120f}{p}$ (in RPM)
    *   Rotor speed ($N_r$) is the actual mechanical speed of the motor shaft.
    *   Slip ($s$) is calculated as:
        $s = \frac{N_s - N_r}{N_s}$
        *   When the rotor is stationary ($N_r = 0$), slip is $s = 1$.
        *   When the rotor rotates at synchronous speed ($N_r = N_s$), slip is $s = 0$.
        *   In normal operation of an induction motor, $0 < s < 1$.
*   **Torque-Slip Characteristic:** A graphical representation or mathematical relationship showing how the torque produced by an electric motor varies with the slip. This is a critical characteristic for understanding motor operation, control strategies, and performance limits.

**Textbook References:**

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press.** Chapter 5 often covers electric motor principles, including torque-speed and torque-slip relationships for different motor types.
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press.** Likely covers torque-slip characteristics in detail within its chapters on electric motors and drives.
*   **Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell.** Chapter 3 or 4 would typically discuss the fundamental principles of electric motors, including their torque production and slip.

---

### 2. Torque-Slip Characteristics of Induction Motors

Induction motors are widely used in EVs due to their robustness, cost-effectiveness, and good power density. Their torque-slip characteristics are particularly important for their control.

**Key Concepts:**

*   **Starting Torque:** The torque produced by the motor when it is at standstill ($N_r = 0$, $s = 1$). A higher starting torque is desirable for quick acceleration.
*   **Pull-out Torque (Maximum Torque):** The maximum torque the motor can produce. If the load torque exceeds this value, the motor will stall.
*   **Synchronous Torque:** The torque produced when the rotor speed is close to synchronous speed ($s$ is small).
*   **Regions of Operation:**
    *   **Motoring Region ($0 < s < 1$):** The motor produces positive torque, driving the load.
    *   **Generating Region (s < 0):** The motor acts as a generator. This occurs when the rotor is driven at a speed higher than the synchronous speed (e.g., during regenerative braking).
    *   **Braking Region (s > 1):** The motor produces negative torque, opposing the rotation. This is also utilized in braking.

**Mathematical Representation (Simplified):**

The torque ($T$) of an induction motor can be approximated by the following equation (often derived from equivalent circuit analysis):

$T \approx \frac{3V_{ph}^2 R_r'}{(R_r')^2 + (X_s' + X_r')^2 \omega_s} \cdot \frac{s}{(s)^2 + (\frac{R_r'}{X_s' + X_r'})^2}$

Where:
*   $V_{ph}$ = Phase voltage
*   $R_r'$ = Rotor resistance referred to the stator
*   $X_s'$ = Stator leakage reactance
*   $X_r'$ = Rotor leakage reactance referred to the stator
*   $\omega_s$ = Synchronous angular speed ($2\pi N_s / 60$)

**Key Features of the Induction Motor Torque-Slip Curve:**

1.  **Starting Torque (s=1):** At $s=1$, the rotor is stationary. The torque is given by:
    $T_{start} \approx \frac{3V_{ph}^2 R_r'}{\omega_s ((R_r')^2 + (X_s' + X_r')^2)}$
2.  **Maximum Torque (Pull-out Torque):** This occurs at a specific slip value, often called the critical slip ($s_{crit}$). For typical parameters, $s_{crit}$ is around 0.1 to 0.3. The maximum torque is given by:
    $T_{max} = \frac{3V_{ph}^2}{2\omega_s (\sqrt{(R_r')^2 + (X_s' + X_r')^2})}$
    The slip at which maximum torque occurs is:
    $s_{crit} = \frac{R_r'}{\sqrt{(R_r')^2 + (X_s' + X_r')^2}}$
3.  **Low Slip Region (Near Synchronous Speed):** In this region, torque is roughly proportional to slip. The motor operates efficiently here.
4.  **High Slip Region:** As slip increases beyond $s_{crit}$, the torque decreases.

**Example:**

Consider an induction motor where the starting torque is $T_{start}$ and the pull-out torque is $T_{max}$. The motor will have the highest torque output at a slip between 0 and 1, and if the load demands more torque than $T_{max}$, the motor will stall.

**Important Points to Remember:**

*   The shape of the torque-slip curve is influenced by the motor's design parameters (rotor resistance, stator and rotor reactances).
*   By controlling the stator voltage and frequency (via a Variable Frequency Drive - VFD), the torque-slip characteristic can be modified to achieve desired performance.
*   For efficient operation, induction motors are generally operated in the low slip region.

**Textbook References:**

*   **Husain, I. (2010).** Chapter 5 discusses the torque-speed characteristics of induction motors and their relationship to slip.
*   **Ehsani et al. (2018).** Chapter 5 or similar would likely provide detailed mathematical models and graphical representations of induction motor torque-slip behavior.
*   **Larminie & Lowry (2012).** Chapter 3 or 4 explains the fundamental torque generation mechanism and how it relates to slip in induction motors.

---

### 3. Torque-Slip Characteristics of Permanent Magnet Synchronous Motors (PMSMs)

PMSMs are another popular choice for EVs due to their high efficiency and power density. Their torque-slip characteristics are different from induction motors.

**Key Concepts:**

*   **Synchronous Speed:** In PMSMs, the rotor rotates at the same speed as the rotating magnetic field of the stator. Theoretically, the slip is zero ($s=0$) in steady-state motoring.
*   **Torque Production:** Torque is generated by the interaction between the stator's rotating magnetic field and the rotor's permanent magnets.
*   **Control Strategy:** PMSMs are typically controlled using Field-Oriented Control (FOC) or Direct Torque Control (DTC) to precisely manage torque and speed.
*   **"Slip" in PMSMs:** While there isn't "slip" in the same sense as induction motors (where rotor currents are induced due to slip), the concept of rotor position relative to the stator field is crucial. Control algorithms effectively manage this to produce torque. A deviation from synchronous speed is often considered an undesirable operating state or a precursor to instability.

**Torque Equation for PMSM (simplified, d-q frame):**

$T_e = \frac{3}{2} P (\lambda_{pm} i_{qs} + (L_d - L_q) i_{ds} i_{qs})$

Where:
*   $T_e$ = Electromagnetic torque
*   $P$ = Number of pole pairs
*   $\lambda_{pm}$ = Permanent magnet flux linkage
*   $i_{qs}$ = Quadrature axis stator current
*   $i_{ds}$ = Direct axis stator current
*   $L_d$, $L_q$ = Inductance in d and q axes respectively

**Key Features of PMSM Torque Control:**

*   **Precise Torque Control:** PMSMs, when controlled with FOC, can produce torque very accurately across a wide speed range.
*   **High Starting Torque:** With proper control, PMSMs can deliver high starting torque.
*   **Zero Slip Operation:** In ideal synchronous operation, the slip is zero.
*   **Operating Range:** They can operate efficiently at both low and high speeds.

**Example:**

During acceleration, the PMSM controller will adjust the stator currents ($i_{ds}$, $i_{qs}$) to produce the required torque. During regenerative braking, the motor is operated to produce a braking torque, effectively acting as a generator.

**Important Points to Remember:**

*   PMSM torque is directly controlled by managing stator currents, not by inducing currents via slip.
*   The control strategy is key to achieving the desired torque-slip (or torque-speed relative to synchronous) characteristics.
*   The presence of permanent magnets on the rotor simplifies torque production but requires careful consideration of demagnetization at high temperatures or currents.

**Textbook References:**

*   **Ehsani et al. (2018).** Chapters on PMSMs and their control (e.g., FOC) will provide detailed information on torque generation.
*   **Husain, I. (2010).** May cover PMSM principles and control in later chapters related to motor drives.
*   **Larminie & Lowry (2012).** Chapters dedicated to PMSMs will explain their operating principles and torque control.

---

### 4. Torque-Slip Characteristics of Brushless DC (BLDC) Motors

BLDC motors are another common motor type in EVs, offering high efficiency and good power-to-weight ratio. Their operation can be understood in terms of their torque-speed characteristics, which are influenced by the commutation strategy.

**Key Concepts:**

*   **Commutation:** The process of switching current to different stator windings to create a rotating magnetic field that interacts with the rotor's permanent magnets. This is typically done electronically using Hall effect sensors or sensorless methods.
*   **Torque-Speed Curve:** For a BLDC motor, the torque produced is largely independent of speed up to a certain base speed (determined by the motor's winding, voltage, and back EMF). Beyond the base speed, the torque typically drops off as the voltage available to drive current decreases due to increasing back EMF.
*   **"Slip" in BLDC:** Similar to PMSMs, BLDC motors operate synchronously. The "slip" is effectively zero in ideal conditions. The control aims to maintain synchronization between the stator field and rotor magnets.
*   **Control:** The torque is controlled by adjusting the voltage applied to the motor or by modulating the current.

**Torque Equation for BLDC (simplified):**

$T_e = k_t \phi \cdot i_a$

Where:
*   $T_e$ = Electromagnetic torque
*   $k_t$ = Torque constant
*   $\phi$ = Magnetic flux
*   $i_a$ = Armature current

**Key Features of BLDC Torque Control:**

*   **High Torque Density:** BLDCs offer excellent torque output for their size and weight.
*   **Efficiency:** High efficiency over a wide operating range.
*   **Torque Ripple:** A potential issue with BLDC motors is torque ripple, which can be minimized through advanced control techniques and motor design.

**Example:**

When accelerating an EV from rest, the BLDC motor controller supplies current to create torque. As the vehicle speed increases, the back EMF of the motor increases. The controller adjusts the supply voltage to maintain the desired current and thus torque, until it reaches the base speed. Beyond the base speed, torque typically decreases as the motor approaches its voltage limit.

**Important Points to Remember:**

*   BLDC torque is directly proportional to the current and flux.
*   The effective "slip" is zero in normal operation, with commutation ensuring synchronization.
*   Back EMF plays a significant role in limiting the motor's speed and torque at higher speeds.

**Textbook References:**

*   **Ehsani et al. (2018).** Likely has dedicated sections on BLDC motors and their control methods.
*   **Husain, I. (2010).** May include BLDC motors in broader discussions of electric motor types and drives.
*   **Larminie & Lowry (2012).** Chapter 4 or 5 would likely cover BLDC motor principles.

---

### 5. Importance of Torque-Slip Characteristics in EV Propulsion

Understanding and controlling torque-slip characteristics are crucial for various aspects of EV design and operation.

**Key Applications and Benefits:**

*   **Vehicle Performance:**
    *   **Acceleration:** High starting torque (at $s \approx 1$ for induction motors) is vital for quick acceleration from a standstill.
    *   **Top Speed:** The motor's ability to maintain torque at higher speeds (low slip region for induction motors, or controlled torque for PMSM/BLDC) determines the vehicle's top speed.
    *   **Hill Climbing:** Sufficient torque is needed to overcome gravitational forces on inclines.
*   **Energy Efficiency:**
    *   Operating the motor in its most efficient torque-slip region maximizes the range of the EV.
    *   For induction motors, efficiency is typically highest when operating close to synchronous speed (low slip).
*   **Regenerative Braking:**
    *   By operating the motor in the generating region (negative slip for induction motors, or reverse control for PMSM/BLDC), kinetic energy is converted back into electrical energy and stored in the battery. This significantly improves the overall energy efficiency of the vehicle.
    *   The torque-slip characteristic dictates the braking torque that can be achieved.
*   **Motor Control:**
    *   **Variable Frequency Drives (VFDs):** These are essential for controlling induction motor speed and torque by varying frequency and voltage. The VFD manipulates the stator field to control the slip and thus the torque.
    *   **Field-Oriented Control (FOC) / Vector Control:** For PMSMs and BLDCs, sophisticated control algorithms like FOC are used to achieve precise torque control by independently controlling the d-axis and q-axis currents, which directly influences torque production.
*   **Motor Sizing and Selection:**
    *   Designers use torque-slip curves to select motors that can meet the vehicle's torque requirements under various operating conditions (starting, cruising, acceleration, braking).
    *   Understanding the pull-out torque of an induction motor is essential to prevent stalling under heavy loads.

**Course Outcomes Alignment:**

*   **CO1: Explain the general architecture of Electric vehicles.** Understanding motor characteristics is part of the propulsion subsystem within the EV architecture.
*   **CO3: Describe various motors and drives of Electric vehicles.** This topic directly addresses the fundamental operating principles and characteristics of electric motors.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** Torque-slip characteristics are crucial for selecting motors and understanding how they interact with the transmission system to deliver power to the wheels.

**Reference Book Integration:**

*   **Denton T. (2020). *Electric and hybrid vehicles*.** This book would provide practical insights into how these motor characteristics are applied in real EV systems and how they influence vehicle design choices.
*   **Dhameja S. (2001). *Electric Vehicle Battery Systems*.** While focused on batteries, it indirectly relates by understanding how the motor's demand for power, dictated by its torque-slip performance, impacts the battery system.

---

### 6. Practice Questions and Answers

**Question 1:**
What is slip in an induction motor, and how is it defined mathematically? What is the typical range of slip for normal motoring operation?

**Answer 1:**
Slip ($s$) in an induction motor is the difference between the synchronous speed ($N_s$) of the rotating magnetic field and the actual rotor speed ($N_r$), expressed as a fraction of the synchronous speed.
Mathematically, $s = \frac{N_s - N_r}{N_s}$.
For normal motoring operation, the slip is typically in the range of $0 < s < 1$.

**Question 2:**
At what point on the torque-slip curve does an induction motor produce its maximum torque? What is this torque called?

**Answer 2:**
An induction motor produces its maximum torque at the "pull-out torque" point, which occurs at a specific slip value known as the critical slip ($s_{crit}$).

**Question 3:**
How does the torque-slip characteristic of a PMSM differ from that of an induction motor?

**Answer 3:**
In a PMSM, the rotor (containing permanent magnets) rotates at synchronous speed with the stator's magnetic field, meaning the slip is ideally zero ($s=0$) in steady-state motoring. Torque is generated by the interaction of the stator field and rotor magnets, and is controlled by adjusting stator currents. In contrast, induction motors rely on induced rotor currents due to slip to generate torque, and their torque output varies significantly with slip.

**Question 4:**
Why is understanding the torque-slip characteristic important for regenerative braking in EVs?

**Answer 4:**
Understanding the torque-slip characteristic is crucial for regenerative braking because it defines the braking torque the motor can produce and the operating regime (e.g., negative slip for induction motors) where it acts as a generator. This allows for controlled deceleration of the vehicle while recovering energy.

**Question 5:**
If an induction motor stalls, what would be the value of its slip?

**Answer 5:**
If an induction motor stalls, its rotor speed ($N_r$) becomes zero. Therefore, the slip ($s = \frac{N_s - N_r}{N_s}$) becomes $s = \frac{N_s - 0}{N_s} = 1$.

---

### 7. Important Points to Remember Summary

*   **Slip (s)** is the relative speed difference between the stator magnetic field and the rotor in AC induction motors.
*   The **Torque-Slip Characteristic** is a fundamental curve defining motor performance.
*   **Induction Motors:** Have a defined starting torque and pull-out torque. Maximum torque occurs at a critical slip. Efficient operation is in the low slip region.
*   **PMSMs and BLDCs:** Ideally operate at zero slip in synchronous mode. Torque is controlled via stator currents and commutation.
*   **Regenerative Braking:** Utilizes the motor's ability to act as a generator (negative slip for induction motors, reverse control for PMSM/BLDC) to recover energy.
*   **Control:** VFDs for induction motors and FOC for PMSMs/BLDCs are essential for optimizing torque-slip performance and achieving desired vehicle dynamics.
*   **EV Design:** Torque-slip characteristics directly influence acceleration, top speed, efficiency, and regenerative braking capabilities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
