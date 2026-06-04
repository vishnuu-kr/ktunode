---
title: "Calculation of motor power from traction torque"
subject: "ELECTRIC VEHICLES"
module: "Module 1: Conventional Vehicles : Basics of vehicle performance"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3629e"
status: "completed"
scrapedAt: "2026-05-23T16:21:28.255Z"
---
# Electric Vehicles: Module 1 - Conventional Vehicles: Basics of Vehicle Performance

## Topic: Calculation of Motor Power from Traction Torque

This topic focuses on understanding the fundamental relationship between the torque required to move a vehicle and the power of the electric motor needed to produce that torque. While this module covers conventional vehicles, the principles of torque and power are foundational for understanding electric vehicle (EV) propulsion systems.

**Course Outcomes Alignment:**

*   **CO1:** Familiarise the performance of conventional vehicles and electric vehicles (Knowledge Level: K2) - This topic directly contributes by explaining basic performance metrics like torque and power, which are crucial for comparing and understanding both vehicle types.

---

### 1. Understanding Torque and Power

#### 1.1 Torque

*   **Definition:** Torque is a measure of rotational force. In the context of vehicles, it's the twisting force applied to the drive wheels by the motor, which propels the vehicle forward.
*   **Unit:** The standard SI unit for torque is Newton-meter (Nm).
*   **Importance:** Torque is directly related to the vehicle's ability to accelerate from a standstill and climb inclines. Higher torque generally means better acceleration and hill-climbing capability.
*   **Reference:**
    *   Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application*. Discusses torque as a fundamental output of electric motors for propulsion.
    *   Miller, J. M. (2010). *Propulsion Systems for Hybrid Vehicles*. Explains torque generation in various propulsion systems.

#### 1.2 Power

*   **Definition:** Power is the rate at which work is done or energy is transferred. In a vehicle, it's the rate at which the engine or motor can deliver torque over a period of time.
*   **Unit:** The standard SI unit for power is Watt (W). However, for automotive applications, Kilowatt (kW) and horsepower (hp) are commonly used.
    *   1 kW = 1000 W
    *   1 hp ≈ 0.746 kW (or 1 kW ≈ 1.341 hp)
*   **Importance:** Power determines the vehicle's top speed and its ability to maintain speed under various conditions (e.g., wind resistance, rolling resistance).
*   **Reference:**
    *   Mi, C., Masrur, M. A., & Gao, D. W. (2011). *Hybrid Electric Vehicles – Principles and applications with practical perspectives*. Covers power flow and calculation in hybrid powertrains.

#### 1.3 The Relationship: Torque and Power

The fundamental relationship between power ($P$), torque ($T$), and angular velocity ($\omega$) is:

$P = T \times \omega$

Where:
*   $P$ is power (in Watts)
*   $T$ is torque (in Newton-meters)
*   $\omega$ is angular velocity (in radians per second)

**Important Point:** To calculate motor power, we need to know the **traction torque** required at the wheels and the **angular velocity of the wheels** (or the motor, depending on the drivetrain configuration).

---

### 2. Calculating Traction Torque Requirements

Traction torque is the torque that the vehicle's drivetrain must deliver to the drive wheels to overcome various forces and achieve desired performance. These forces include:

*   **Aerodynamic Drag ($F_{aero}$):** Resistance from the air as the vehicle moves.
    $F_{aero} = \frac{1}{2} \rho C_d A v^2$
    Where:
    *   $\rho$ is air density
    *   $C_d$ is the drag coefficient
    *   $A$ is the frontal area
    *   $v$ is the vehicle speed
*   **Rolling Resistance ($F_{roll}$):** Resistance from the deformation of tires and the road surface.
    $F_{roll} = C_{rr} m g$
    Where:
    *   $C_{rr}$ is the coefficient of rolling resistance
    *   $m$ is the vehicle mass
    *   $g$ is the acceleration due to gravity
*   **Grade Resistance ($F_{grade}$):** The force component due to gravity when the vehicle is on an incline.
    $F_{grade} = m g \sin(\theta)$
    Where:
    *   $\theta$ is the angle of the incline
*   **Acceleration Force ($F_{accel}$):** The force required to accelerate the vehicle.
    $F_{accel} = m a$
    Where:
    *   $a$ is the vehicle acceleration

**Total Traction Force ($F_{traction}$):** The sum of all forces the vehicle needs to overcome.
$F_{traction} = F_{aero} + F_{roll} + F_{grade} + F_{accel}$

**Traction Torque ($T_{traction}$):** This is the force applied at the circumference of the drive wheels.
$T_{traction} = F_{traction} \times r_{wheel}$

Where:
*   $r_{wheel}$ is the effective radius of the drive wheel.

**Reference:**
*   Ehsani, M., Gao, Y., & Gay, S. E. (n.d.). *Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design*. Provides detailed analysis of forces acting on a vehicle.
*   Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals*. Explains the components of vehicle resistance and their impact on power requirements.

---

### 3. Calculating Motor Power from Traction Torque

Once we know the required traction torque ($T_{traction}$) at the wheels, we can calculate the necessary motor power. This involves considering the drivetrain.

#### 3.1 Drivetrain Efficiency

The drivetrain (gearbox, differential, axles) is not perfectly efficient. Some power is lost due to friction. The overall drivetrain efficiency ($\eta_{drivetrain}$) is a value less than 1 (e.g., 0.85 to 0.95 for a well-designed system).

#### 3.2 Motor Torque and Speed

The torque required from the electric motor ($T_{motor}$) is related to the traction torque by the gear ratio ($G$) of the final drive:

$T_{motor} = \frac{T_{traction}}{G \times \eta_{transmission}}$

Where:
*   $G$ is the overall gear ratio in the drivetrain (often includes differential and gearbox ratios).
*   $\eta_{transmission}$ is the efficiency of the transmission components.

The angular velocity of the motor ($\omega_{motor}$) is related to the angular velocity of the wheels ($\omega_{wheel}$) by the gear ratio:

$\omega_{motor} = \omega_{wheel} \times G$

The angular velocity of the wheels ($\omega_{wheel}$) can be calculated from the vehicle speed ($v$) and wheel radius ($r_{wheel}$):

$\omega_{wheel} = \frac{v}{r_{wheel}}$

Therefore, $\omega_{motor} = \frac{v}{r_{wheel}} \times G$.

#### 3.3 Calculating Motor Power

Now we can combine these relationships to find the motor power:

**Method 1: Using Traction Torque and Wheel Speed**

1.  Calculate the required traction torque ($T_{traction}$) at the wheels.
2.  Calculate the angular velocity of the wheels ($\omega_{wheel}$) based on the desired vehicle speed ($v$).
3.  Calculate the power delivered to the wheels ($P_{wheels}$):
    $P_{wheels} = T_{traction} \times \omega_{wheel}$
4.  Calculate the required motor power ($P_{motor}$) considering drivetrain efficiency:
    $P_{motor} = \frac{P_{wheels}}{\eta_{drivetrain}}$

**Method 2: Using Motor Torque and Motor Speed**

1.  Calculate the required motor torque ($T_{motor}$).
2.  Calculate the required motor angular velocity ($\omega_{motor}$).
3.  Calculate the motor power:
    $P_{motor} = T_{motor} \times \omega_{motor}$

**Key Formula:**

Combining all relationships, the power required from the motor is:

$P_{motor} = T_{motor} \times \omega_{motor}$
$P_{motor} = \left(\frac{T_{traction}}{G \times \eta_{transmission}}\right) \times (\omega_{wheel} \times G)$
$P_{motor} = \frac{T_{traction} \times \omega_{wheel}}{\eta_{transmission}}$

Since $P_{wheels} = T_{traction} \times \omega_{wheel}$, we get:

$P_{motor} = \frac{P_{wheels}}{\eta_{transmission}}$

If we consider the overall drivetrain efficiency $\eta_{drivetrain} = G \times \eta_{transmission} \times \eta_{gearbox\_etc}$, the formula becomes more general as:

$P_{motor} = \frac{F_{traction} \times v}{\eta_{drivetrain}}$

This formula is crucial and highlights that motor power is the sum of forces multiplied by velocity, adjusted for drivetrain losses.

**Reference:**
*   Krishnan, R. (n.d.). *Permanent Magnet Synchronous and Brushless DC Motors Drives*. Explains motor sizing and power calculations based on torque and speed requirements.

---

### 4. Example Calculation

Let's consider a vehicle scenario to illustrate the calculation.

**Vehicle Parameters:**

*   Vehicle mass ($m$): 1500 kg
*   Wheel radius ($r_{wheel}$): 0.3 m
*   Drivetrain efficiency ($\eta_{drivetrain}$): 0.90 (90%)
*   Desired acceleration ($a$): 2 m/s²
*   Vehicle speed ($v$): 20 m/s (which is 72 km/h)
*   Incline ($\theta$): 0 degrees (level road)
*   Aerodynamic drag coefficient ($C_d$): 0.3
*   Frontal area ($A$): 2.2 m²
*   Air density ($\rho$): 1.225 kg/m³
*   Coefficient of rolling resistance ($C_{rr}$): 0.01
*   Acceleration due to gravity ($g$): 9.81 m/s²

**Calculations:**

1.  **Calculate forces at $v = 20$ m/s:**
    *   Aerodynamic Drag:
        $F_{aero} = \frac{1}{2} \times 1.225 \times 0.3 \times 2.2 \times (20)^2 = 80.85$ N
    *   Rolling Resistance:
        $F_{roll} = 0.01 \times 1500 \times 9.81 = 147.15$ N
    *   Grade Resistance:
        $F_{grade} = 1500 \times 9.81 \times \sin(0^\circ) = 0$ N
    *   Acceleration Force:
        $F_{accel} = 1500 \times 2 = 3000$ N

2.  **Calculate Total Traction Force:**
    $F_{traction} = F_{aero} + F_{roll} + F_{grade} + F_{accel}$
    $F_{traction} = 80.85 + 147.15 + 0 + 3000 = 3228$ N

3.  **Calculate Traction Torque at the wheels:**
    $T_{traction} = F_{traction} \times r_{wheel}$
    $T_{traction} = 3228 \times 0.3 = 968.4$ Nm

4.  **Calculate Wheel Angular Velocity:**
    $\omega_{wheel} = \frac{v}{r_{wheel}}$
    $\omega_{wheel} = \frac{20}{0.3} \approx 66.67$ rad/s

5.  **Calculate Power delivered to the wheels:**
    $P_{wheels} = T_{traction} \times \omega_{wheel}$
    $P_{wheels} = 968.4 \times 66.67 \approx 64563$ W
    $P_{wheels} \approx 64.56$ kW

6.  **Calculate Required Motor Power:**
    $P_{motor} = \frac{P_{wheels}}{\eta_{drivetrain}}$
    $P_{motor} = \frac{64563}{0.90} \approx 71737$ W
    $P_{motor} \approx 71.7$ kW

**Conclusion for Example:** For this vehicle to accelerate at 2 m/s² at a speed of 72 km/h on a level road, the electric motor needs to deliver approximately 71.7 kW of power.

---

### 5. Important Points to Remember

*   **Torque is for acceleration and hill climbing.**
*   **Power is for top speed and maintaining speed.**
*   The fundamental relationship is **Power = Torque x Angular Velocity**.
*   **Traction torque** is the torque required at the wheels.
*   **Motor torque and speed** are different from wheel torque and speed due to the gear ratio.
*   **Drivetrain efficiency** must always be considered to calculate the *required* motor power from the *delivered* power at the wheels.
*   The calculation of required traction torque involves summing up forces like aerodynamic drag, rolling resistance, grade resistance, and acceleration force.
*   Electric motors can often deliver peak torque from zero RPM, which is a significant advantage for acceleration compared to internal combustion engines.

---

### 6. Practice Questions and Exercises

**Question 1:**

A vehicle requires a traction torque of 1200 Nm at the wheels when traveling at a speed of 80 km/h. The effective wheel radius is 0.35 m, and the overall drivetrain efficiency is 88%.
Calculate:
a) The angular velocity of the wheels in rad/s.
b) The power delivered to the wheels in kW.
c) The required motor power in kW.

**Answer 1:**

a) **Angular velocity of wheels ($\omega_{wheel}$):**
    *   Convert speed to m/s: 80 km/h = 80 * 1000 m / 3600 s = 22.22 m/s
    *   $\omega_{wheel} = \frac{v}{r_{wheel}} = \frac{22.22 \, \text{m/s}}{0.35 \, \text{m}} \approx 63.49 \, \text{rad/s}$

b) **Power delivered to wheels ($P_{wheels}$):**
    *   $P_{wheels} = T_{traction} \times \omega_{wheel} = 1200 \, \text{Nm} \times 63.49 \, \text{rad/s} \approx 76188 \, \text{W}$
    *   $P_{wheels} \approx 76.19 \, \text{kW}$

c) **Required motor power ($P_{motor}$):**
    *   $P_{motor} = \frac{P_{wheels}}{\eta_{drivetrain}} = \frac{76188 \, \text{W}}{0.88} \approx 86577 \, \text{W}$
    *   $P_{motor} \approx 86.58 \, \text{kW}$

**Question 2:**

An electric motor has a maximum power output of 100 kW. It is used in a vehicle with a final drive gear ratio of 10:1 and a drivetrain efficiency of 92%. The effective wheel radius is 0.3 m.
If the motor operates at its maximum power, what is the maximum traction torque the vehicle can produce at the wheels when traveling at a speed of 100 km/h?

**Answer 2:**

*   Motor Power ($P_{motor}$): 100 kW = 100,000 W
*   Gear Ratio ($G$): 10
*   Drivetrain Efficiency ($\eta_{drivetrain}$): 0.92
*   Wheel Radius ($r_{wheel}$): 0.3 m
*   Vehicle Speed ($v$): 100 km/h = 27.78 m/s

1.  **Calculate Power at the wheels:**
    $P_{wheels} = P_{motor} \times \eta_{drivetrain} = 100,000 \, \text{W} \times 0.92 = 92,000 \, \text{W}$

2.  **Calculate Wheel Angular Velocity ($\omega_{wheel}$):**
    $\omega_{wheel} = \frac{v}{r_{wheel}} = \frac{27.78 \, \text{m/s}}{0.3 \, \text{m}} \approx 92.6 \, \text{rad/s}$

3.  **Calculate Maximum Traction Torque at the wheels ($T_{traction}$):**
    $P_{wheels} = T_{traction} \times \omega_{wheel}$
    $T_{traction} = \frac{P_{wheels}}{\omega_{wheel}} = \frac{92000 \, \text{W}}{92.6 \, \text{rad/s}} \approx 993.5 \, \text{Nm}$

**Conclusion for Question 2:** The maximum traction torque the vehicle can produce at the wheels under these conditions is approximately 993.5 Nm.

---

This concludes the notes for the topic "Calculation of Motor Power from Traction Torque." Understanding these fundamentals is crucial for the subsequent modules that delve deeper into electric vehicle propulsion systems and their performance.
