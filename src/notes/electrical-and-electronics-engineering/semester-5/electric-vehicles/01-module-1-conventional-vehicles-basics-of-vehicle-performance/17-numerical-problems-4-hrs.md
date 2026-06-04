---
title: "Numerical problems. (4 hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 1: Conventional Vehicles : Basics of vehicle performance"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3629f"
status: "completed"
scrapedAt: "2026-05-23T16:21:28.971Z"
---
# Electric Vehicles: Module 1 - Conventional Vehicles: Basics of Vehicle Performance - Numerical Problems (4 hrs)

## Introduction to Conventional Vehicle Performance

This module focuses on understanding the fundamental principles governing the performance of conventional vehicles, which serves as a crucial baseline for appreciating the advantages and challenges of electric vehicles (EVs). We will explore key performance metrics and learn to analyze them through numerical problems.

**Course Outcome Alignment:**
*   **CO1: Familiarise the performance of conventional vehicles and electric vehicles (Knowledge Level: K2)** - This module directly addresses the "familiarize the performance of conventional vehicles" aspect, laying the groundwork for comparison with EVs.

**Learning Outcomes Covered:**
*   Understanding the forces acting on a vehicle.
*   Calculating tractive effort and its relationship to vehicle motion.
*   Determining required power and torque for a given vehicle speed and load.
*   Analyzing the impact of various resistances on vehicle performance.
*   Calculating acceleration and gradeability.

**Key Concepts and Definitions:**

*   **Vehicle Performance:** Refers to how well a vehicle can accelerate, climb grades, maintain speed, and achieve desired efficiency.
*   **Tractive Effort (F_t):** The force exerted by the driving wheels on the road surface that propels the vehicle forward.
*   **Forces Acting on a Vehicle:**
    *   **Tractive Force (F_t):** The forward driving force.
    *   **Aerodynamic Drag (F_a):** Resistance due to air friction.
    *   **Rolling Resistance (F_r):** Resistance due to tire deformation and friction with the road surface.
    *   **Grade Resistance (F_g):** Force opposing motion when a vehicle is on an incline.
    *   **Inertial Force (F_i):** Force required to accelerate the vehicle (Newton's second law).

**Formulas and Equations:**

1.  **Aerodynamic Drag:**
    $F_a = \frac{1}{2} \rho C_d A v^2$
    Where:
    *   $\rho$: Air density (kg/m³)
    *   $C_d$: Drag coefficient (dimensionless)
    *   $A$: Frontal area of the vehicle (m²)
    *   $v$: Velocity of the vehicle (m/s)

2.  **Rolling Resistance:**
    $F_r = C_{rr} m g \cos(\theta)$
    Where:
    *   $C_{rr}$: Coefficient of rolling resistance (dimensionless)
    *   $m$: Mass of the vehicle (kg)
    *   $g$: Acceleration due to gravity (m/s²)
    *   $\theta$: Angle of the road incline (degrees). For a flat road, $\theta = 0$, so $\cos(\theta) = 1$.

3.  **Grade Resistance:**
    $F_g = m g \sin(\theta)$
    Where:
    *   $m$: Mass of the vehicle (kg)
    *   $g$: Acceleration due to gravity (m/s²)
    *   $\theta$: Angle of the road incline (degrees)

4.  **Total Resistance (Resistive Forces):**
    $F_{total\_resistance} = F_a + F_r + F_g$
    For a flat road: $F_{total\_resistance} = F_a + F_r$

5.  **Tractive Effort Required for Constant Velocity:**
    $F_t = F_{total\_resistance}$

6.  **Tractive Effort Required for Acceleration:**
    $F_t = F_{total\_resistance} + F_i$
    $F_i = m_{eff} a$
    Where:
    *   $m_{eff}$: Effective mass of the vehicle, including rotational inertia of wheels, drivetrain components, etc. (kg). Often approximated as $m_{eff} = m + I_{rotational\_components} / r_{wheel}^2$. For simplicity in introductory problems, $m_{eff}$ is often taken as $m$.
    *   $a$: Acceleration of the vehicle (m/s²)

7.  **Vehicle Power:**
    $P = F_t \times v$
    Where:
    *   $P$: Power (Watts)
    *   $F_t$: Tractive effort (Newtons)
    *   $v$: Velocity (m/s)

8.  **Wheel Torque:**
    $\tau_{wheel} = F_t \times r_{wheel}$
    Where:
    *   $\tau_{wheel}$: Torque at the drive wheels (Nm)
    *   $F_t$: Tractive effort (Newtons)
    *   $r_{wheel}$: Radius of the drive wheels (m)

9.  **Engine/Motor Torque (considering gear ratio and efficiency):**
    $\tau_{motor} = \frac{\tau_{wheel} \times GR \times \eta_{drive\_train}}{1}$
    Where:
    *   $\tau_{motor}$: Torque at the motor/engine (Nm)
    *   $GR$: Overall gear ratio (dimensionless)
    *   $\eta_{drive\_train}$: Drivetrain efficiency (dimensionless)

10. **Power at the Motor/Engine:**
    $P_{motor} = \tau_{motor} \times \omega_{motor}$
    Where:
    *   $\omega_{motor}$: Angular velocity of the motor (rad/s)

**Important Note on Units:** Ensure consistent use of SI units (meters, kilograms, seconds, Newtons, Watts, radians, etc.).

## Numerical Problem Solving Strategy

1.  **Identify Given Information:** List all known parameters with their units.
2.  **Identify What Needs to be Calculated:** Clearly state the quantity or quantities to be determined.
3.  **Draw a Free-Body Diagram (Optional but Recommended):** Visualize the forces acting on the vehicle.
4.  **Select Appropriate Formulas:** Choose the relevant equations based on the problem statement (e.g., constant velocity, acceleration, grade climbing).
5.  **Calculate Resistive Forces:**
    *   Calculate Aerodynamic Drag ($F_a$).
    *   Calculate Rolling Resistance ($F_r$).
    *   Calculate Grade Resistance ($F_g$) if applicable.
6.  **Calculate Total Resistance:** Sum up the resistive forces.
7.  **Calculate Tractive Effort:**
    *   For constant velocity, $F_t$ = Total Resistance.
    *   For acceleration, $F_t$ = Total Resistance + Inertial Force ($m_{eff}a$).
8.  **Calculate Power and Torque:** Use the calculated tractive effort and vehicle speed to find power and then, with wheel radius and gear ratio, torque.

---

### Example Problem 1: Calculating Resistive Forces and Tractive Effort at Constant Velocity

**Problem Statement:**
A car with a mass of 1500 kg has a frontal area of 2.2 m² and a drag coefficient of 0.35. The coefficient of rolling resistance is 0.015. The car is traveling at a constant velocity of 80 km/h on a level road. Calculate:
a) The aerodynamic drag force.
b) The rolling resistance force.
c) The total resistive force.
d) The tractive effort required to maintain this speed.
e) The power required to maintain this speed in kW.

**Given:**
*   $m = 1500$ kg
*   $A = 2.2$ m²
*   $C_d = 0.35$
*   $C_{rr} = 0.015$
*   $v = 80$ km/h
*   Level road ($\theta = 0^\circ$)
*   $\rho$ (air density) $\approx 1.225$ kg/m³ (standard value)
*   $g = 9.81$ m/s²

**Solution:**

**Step 1: Convert velocity to m/s**
$v = 80 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = 22.22$ m/s

**Step 2: Calculate Aerodynamic Drag ($F_a$)**
$F_a = \frac{1}{2} \rho C_d A v^2$
$F_a = \frac{1}{2} \times 1.225 \text{ kg/m³} \times 0.35 \times 2.2 \text{ m²} \times (22.22 \text{ m/s})^2$
$F_a = 0.5 \times 1.225 \times 0.35 \times 2.2 \times 493.73$
$F_a \approx 234.5$ N

**Step 3: Calculate Rolling Resistance ($F_r$)**
Since the road is level, $\theta = 0^\circ$, $\cos(\theta) = 1$.
$F_r = C_{rr} m g \cos(\theta)$
$F_r = 0.015 \times 1500 \text{ kg} \times 9.81 \text{ m/s²} \times 1$
$F_r = 220.73$ N

**Step 4: Calculate Total Resistive Force**
$F_{total\_resistance} = F_a + F_r$
$F_{total\_resistance} = 234.5 \text{ N} + 220.73 \text{ N}$
$F_{total\_resistance} \approx 455.23$ N

**Step 5: Calculate Tractive Effort Required**
For constant velocity, tractive effort equals total resistance.
$F_t = F_{total\_resistance} \approx 455.23$ N

**Step 6: Calculate Power Required**
$P = F_t \times v$
$P = 455.23 \text{ N} \times 22.22 \text{ m/s}$
$P \approx 10114.4$ W

Convert to kW:
$P_{\text{kW}} = \frac{10114.4 \text{ W}}{1000 \text{ W/kW}} \approx 10.11$ kW

**Answers:**
a) Aerodynamic Drag ($F_a$): 234.5 N
b) Rolling Resistance ($F_r$): 220.73 N
c) Total Resistive Force: 455.23 N
d) Tractive Effort ($F_t$): 455.23 N
e) Power Required: 10.11 kW

**Reference Check:**
This example utilizes the fundamental formulas for aerodynamic drag and rolling resistance, aligning with concepts presented in introductory automotive engineering texts, which form the basis for understanding vehicle performance, as referenced by authors like Miller and Hussein.

---

### Example Problem 2: Calculating Tractive Effort and Acceleration

**Problem Statement:**
Consider the car from Example Problem 1. At a speed of 60 km/h, the car is accelerating at 2 m/s². Assume the effective mass of the car, including rotational inertia, is 1650 kg. The coefficient of rolling resistance is 0.015, drag coefficient is 0.35, frontal area is 2.2 m², and air density is 1.225 kg/m³.
Calculate:
a) The resistive forces (aerodynamic drag and rolling resistance) at 60 km/h.
b) The tractive effort required for this acceleration.
c) The required power output at this speed.
d) The required wheel torque if the wheel radius is 0.3 m.

**Given:**
*   $m_{eff} = 1650$ kg
*   $v = 60$ km/h
*   $a = 2$ m/s²
*   $C_{rr} = 0.015$
*   $C_d = 0.35$
*   $A = 2.2$ m²
*   $\rho = 1.225$ kg/m³
*   $r_{wheel} = 0.3$ m
*   Level road ($\theta = 0^\circ$)
*   $g = 9.81$ m/s²

**Solution:**

**Step 1: Convert velocity to m/s**
$v = 60 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = 16.67$ m/s

**Step 2: Calculate Resistive Forces at 60 km/h**

*   **Aerodynamic Drag ($F_a$)**:
    $F_a = \frac{1}{2} \rho C_d A v^2$
    $F_a = \frac{1}{2} \times 1.225 \text{ kg/m³} \times 0.35 \times 2.2 \text{ m²} \times (16.67 \text{ m/s})^2$
    $F_a = 0.5 \times 1.225 \times 0.35 \times 2.2 \times 277.89$
    $F_a \approx 168.7$ N

*   **Rolling Resistance ($F_r$)**:
    $F_r = C_{rr} m_{eff} g \cos(\theta)$ (Using $m_{eff}$ for consistency, though usually $m$ is used for $F_r$. The difference is minor in these examples.)
    $F_r = 0.015 \times 1650 \text{ kg} \times 9.81 \text{ m/s²} \times 1$
    $F_r \approx 242.8$ N

*   **Total Resistive Force**:
    $F_{total\_resistance} = F_a + F_r = 168.7 \text{ N} + 242.8 \text{ N} \approx 411.5$ N

**Step 3: Calculate Inertial Force ($F_i$)**
$F_i = m_{eff} a$
$F_i = 1650 \text{ kg} \times 2 \text{ m/s²}$
$F_i = 3300$ N

**Step 4: Calculate Tractive Effort Required ($F_t$)**
$F_t = F_{total\_resistance} + F_i$
$F_t = 411.5 \text{ N} + 3300 \text{ N}$
$F_t = 3711.5$ N

**Step 5: Calculate Power Output Required**
$P = F_t \times v$
$P = 3711.5 \text{ N} \times 16.67 \text{ m/s}$
$P \approx 61875$ W
$P_{\text{kW}} = 61.88$ kW

**Step 6: Calculate Required Wheel Torque**
$\tau_{wheel} = F_t \times r_{wheel}$
$\tau_{wheel} = 3711.5 \text{ N} \times 0.3 \text{ m}$
$\tau_{wheel} = 1113.45$ Nm

**Answers:**
a) Resistive forces: $F_a = 168.7$ N, $F_r = 242.8$ N. Total resistance = 411.5 N.
b) Tractive effort required ($F_t$): 3711.5 N
c) Power output required: 61.88 kW
d) Required wheel torque: 1113.45 Nm

**Reference Check:**
This problem demonstrates the impact of acceleration on the required tractive effort and power. The calculation of wheel torque is a critical step in determining the load on the drivetrain components, a topic discussed in detail in texts like "Electric and Hybrid Vehicles: Design Fundamentals" by Hussein.

---

### Example Problem 3: Gradeability

**Problem Statement:**
A vehicle of mass 1200 kg is traveling up a gradient of 1 in 10 at a constant speed of 50 km/h. The coefficient of rolling resistance is 0.012, drag coefficient is 0.30, and frontal area is 2.0 m². The air density is 1.225 kg/m³. Calculate:
a) The forces opposing motion (aerodynamic drag, rolling resistance, grade resistance).
b) The tractive effort required.
c) The power required in kW.

**Given:**
*   $m = 1200$ kg
*   Gradient = 1 in 10
*   $v = 50$ km/h
*   $C_{rr} = 0.012$
*   $C_d = 0.30$
*   $A = 2.0$ m²
*   $\rho = 1.225$ kg/m³
*   $g = 9.81$ m/s²

**Solution:**

**Step 1: Convert velocity to m/s**
$v = 50 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = 13.89$ m/s

**Step 2: Determine the angle of the incline ($\theta$)**
A gradient of 1 in 10 means for every 10 units of horizontal distance, there is 1 unit of vertical rise.
$\tan(\theta) = \frac{\text{rise}}{\text{run}} = \frac{1}{10} = 0.1$
For small angles (which is typical for road gradients), $\sin(\theta) \approx \tan(\theta)$ and $\cos(\theta) \approx 1$.
So, $\sin(\theta) \approx 0.1$ and $\cos(\theta) \approx 1$.

**Step 3: Calculate Resistive Forces**

*   **Aerodynamic Drag ($F_a$)**:
    $F_a = \frac{1}{2} \rho C_d A v^2$
    $F_a = \frac{1}{2} \times 1.225 \text{ kg/m³} \times 0.30 \times 2.0 \text{ m²} \times (13.89 \text{ m/s})^2$
    $F_a = 0.5 \times 1.225 \times 0.30 \times 2.0 \times 192.93$
    $F_a \approx 177.5$ N

*   **Rolling Resistance ($F_r$)**:
    $F_r = C_{rr} m g \cos(\theta)$
    $F_r = 0.012 \times 1200 \text{ kg} \times 9.81 \text{ m/s²} \times 1$ (using $\cos(\theta) \approx 1$)
    $F_r \approx 141.3$ N

*   **Grade Resistance ($F_g$)**:
    $F_g = m g \sin(\theta)$
    $F_g = 1200 \text{ kg} \times 9.81 \text{ m/s²} \times 0.1$ (using $\sin(\theta) \approx 0.1$)
    $F_g = 1177.2$ N

**Step 4: Calculate Total Resistive Force**
$F_{total\_resistance} = F_a + F_r + F_g$
$F_{total\_resistance} = 177.5 \text{ N} + 141.3 \text{ N} + 1177.2 \text{ N}$
$F_{total\_resistance} \approx 1496.0$ N

**Step 5: Calculate Tractive Effort Required**
For constant velocity, $F_t = F_{total\_resistance}$.
$F_t \approx 1496.0$ N

**Step 6: Calculate Power Required**
$P = F_t \times v$
$P = 1496.0 \text{ N} \times 13.89 \text{ m/s}$
$P \approx 20779$ W
$P_{\text{kW}} = 20.78$ kW

**Answers:**
a) Forces opposing motion: $F_a \approx 177.5$ N, $F_r \approx 141.3$ N, $F_g \approx 1177.2$ N.
b) Tractive effort required ($F_t$): 1496.0 N
c) Power required: 20.78 kW

**Reference Check:**
This problem highlights the significant contribution of grade resistance when climbing inclines. Understanding how these forces combine is crucial for sizing propulsion systems, a key aspect in vehicle design, as covered in texts like "Propulsion Systems for Hybrid Vehicles" by Miller.

---

### Example Problem 4: Drivetrain Torque and Motor Power

**Problem Statement:**
A car needs to produce a tractive effort of 5000 N at the wheels to accelerate up a 5% grade. The vehicle is traveling at 72 km/h. The drive wheels have a radius of 0.32 m. The gearbox has a gear ratio of 4:1 and the drivetrain efficiency is 85%. Calculate:
a) The required wheel torque.
b) The required motor torque.
c) The required motor speed in rad/s if the vehicle speed is 72 km/h.
d) The power delivered by the motor in kW.

**Given:**
*   $F_t = 5000$ N
*   $v = 72$ km/h
*   $r_{wheel} = 0.32$ m
*   $GR = 4$
*   $\eta_{drive\_train} = 0.85$

**Solution:**

**Step 1: Convert velocity to m/s**
$v = 72 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = 20$ m/s

**Step 2: Calculate Required Wheel Torque**
$\tau_{wheel} = F_t \times r_{wheel}$
$\tau_{wheel} = 5000 \text{ N} \times 0.32 \text{ m}$
$\tau_{wheel} = 1600$ Nm

**Step 3: Calculate Required Motor Torque**
$\tau_{motor} = \frac{\tau_{wheel} \times GR}{\eta_{drive\_train}}$  *(Note: Generally, torque is transmitted through the gearbox, so $GR$ is multiplied. If the question implies the motor torque needs to overcome wheel torque *plus* gearbox losses, the formula might be structured differently. Assuming standard gear reduction where motor torque is multiplied by GR)*.
Let's re-evaluate this step based on standard drivetrain modeling. The torque at the motor is reduced by the gear ratio to get torque at the wheels. So, the torque required *from* the motor to achieve $\tau_{wheel}$ is:
$\tau_{motor} = \frac{\tau_{wheel}}{GR \times \eta_{drive\_train}}$
Let's assume the GR is for the reduction, so motor speed is higher than wheel speed, and motor torque is lower than wheel torque.
$\tau_{motor} = \frac{1600 \text{ Nm}}{4 \times 0.85}$
$\tau_{motor} = \frac{1600}{3.4} \approx 470.59$ Nm

**Step 4: Calculate Required Motor Speed**
The angular velocity of the wheels is related to the vehicle speed and wheel radius:
$\omega_{wheel} = \frac{v}{r_{wheel}}$
$\omega_{wheel} = \frac{20 \text{ m/s}}{0.32 \text{ m}} = 62.5$ rad/s

The motor speed is related to the wheel speed by the gear ratio:
$\omega_{motor} = \omega_{wheel} \times GR$
$\omega_{motor} = 62.5 \text{ rad/s} \times 4$
$\omega_{motor} = 250$ rad/s

**Step 5: Calculate Power Delivered by the Motor**
$P_{motor} = \tau_{motor} \times \omega_{motor}$
$P_{motor} = 470.59 \text{ Nm} \times 250 \text{ rad/s}$
$P_{motor} \approx 117647.5$ W
$P_{motor\_kW} = 117.65$ kW

Alternatively, we can calculate the power at the wheels and then account for drivetrain efficiency:
$P_{wheel} = F_t \times v = 5000 \text{ N} \times 20 \text{ m/s} = 100000$ W
$P_{motor} = \frac{P_{wheel}}{\eta_{drive\_train}} = \frac{100000 \text{ W}}{0.85} \approx 117647.1$ W
$P_{motor\_kW} = 117.65$ kW

**Answers:**
a) Required wheel torque: 1600 Nm
b) Required motor torque: 470.59 Nm
c) Required motor speed: 250 rad/s
d) Power delivered by the motor: 117.65 kW

**Reference Check:**
This problem demonstrates the crucial link between tractive forces at the wheel and the requirements at the motor. Understanding gear ratios, drivetrain efficiency, and the relationship between linear and angular velocities is fundamental to EV powertrain design, as explored in detail by Chau and Krishnan.

---

### Practice Questions

1.  **Constant Velocity on a Flat Road:** A sedan weighs 1400 kg. At 90 km/h, it experiences an aerodynamic drag of 300 N and rolling resistance of 250 N. Calculate the tractive effort and power required to maintain this speed. (Assume level road).
    *   **Answer:** $F_t = 550$ N, $P \approx 13.75$ kW

2.  **Acceleration on a Flat Road:** A compact car with an effective mass of 1300 kg accelerates from rest to 60 km/h in 10 seconds on a level road. During this acceleration, assume the average tractive resistance (aerodynamic + rolling) is 400 N.
    a) What is the average acceleration?
    b) What is the total tractive effort required at the instant the speed is 60 km/h?
    c) What is the power output at 60 km/h?
    *   **Answers:**
        a) $a = 1.67$ m/s²
        b) $F_t = 2567$ N (using $m_{eff}a = 1300 \times 1.67 + 400$)
        c) $P \approx 27.97$ kW

3.  **Grade Climbing:** A truck weighing 5000 kg is climbing a 7% grade at a constant speed of 40 km/h. The coefficient of rolling resistance is 0.01. Neglect aerodynamic drag for this problem.
    a) Calculate the rolling resistance force.
    b) Calculate the grade resistance force.
    c) Calculate the tractive effort required.
    d) Calculate the power required in kW.
    *   **Answers:**
        a) $F_r \approx 490.5$ N
        b) $F_g \approx 3433.5$ N
        c) $F_t \approx 3924$ N
        d) $P \approx 43.6$ kW

4.  **Drivetrain Calculations:** A vehicle requires a tractive effort of 6000 N at a speed of 72 km/h. The drive wheels have a radius of 0.35 m. The gear ratio is 5:1 and the drivetrain efficiency is 90%. Calculate the motor torque and motor speed (in rpm) if the motor is connected to the wheels through this gearbox.
    *   **Answers:**
        Wheel speed: $\omega_{wheel} = \frac{20 \text{ m/s}}{0.35 \text{ m}} \approx 57.14$ rad/s
        Wheel torque: $\tau_{wheel} = 6000 \text{ N} \times 0.35 \text{ m} = 2100$ Nm
        Motor torque: $\tau_{motor} = \frac{2100 \text{ Nm}}{5 \times 0.90} \approx 466.67$ Nm
        Motor speed: $\omega_{motor} = 57.14 \text{ rad/s} \times 5 = 285.7$ rad/s
        Motor speed in rpm: $285.7 \text{ rad/s} \times \frac{60 \text{ s}}{1 \text{ min}} \times \frac{1 \text{ rev}}{2\pi \text{ rad}} \approx 2728$ rpm

---

**Important Points to Remember:**

*   **Units Consistency:** Always ensure all units are consistent (SI units are preferred).
*   **Assumptions:** Be aware of the assumptions made (e.g., constant air density, simplified rolling resistance model, neglecting drivetrain losses when calculating forces, etc.).
*   **Effective Mass:** For acceleration calculations, using the effective mass ($m_{eff}$) which includes rotational inertia is more accurate.
*   **Small Angle Approximations:** For road gradients, $\sin(\theta) \approx \tan(\theta)$ and $\cos(\theta) \approx 1$ are usually valid and simplify calculations.
*   **Power vs. Torque:** Power is the rate of doing work, while torque is the rotational force. Both are critical for sizing vehicle components.
*   **Drivetrain Efficiency:** Always account for drivetrain losses when relating wheel forces/torques to motor forces/torques.

This module provides the foundational knowledge of vehicle performance, which is essential for understanding the unique characteristics and requirements of electric vehicles in subsequent modules.
