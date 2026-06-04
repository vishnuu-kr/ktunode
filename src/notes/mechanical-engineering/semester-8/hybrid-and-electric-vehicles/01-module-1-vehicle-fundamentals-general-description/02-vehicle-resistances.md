---
title: "vehicle resistances"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446441d"
status: "completed"
scrapedAt: "2026-05-20T18:20:27.326Z"
---
## Study Notes: HYBRID AND ELECTRIC VEHICLES

### Module 1: Vehicle Fundamentals – General Description

#### Topic: Vehicle Resistances

**Learning Outcomes:**

*   Understand the fundamental forces that oppose vehicle motion.
*   Identify and quantify the primary sources of resistance encountered by a vehicle.
*   Analyze how these resistances affect vehicle performance and energy consumption.
*   Relate vehicle resistances to the design considerations of hybrid and electric vehicles (HEVs and EVs).

---

### 1. Introduction: The Battle Against Motion

For a vehicle to move, an external force must overcome various opposing forces, collectively known as **vehicle resistances**. In the context of HEVs and EVs, understanding and minimizing these resistances is crucial for maximizing efficiency, extending range, and optimizing battery usage. This topic delves into the nature of these resistances and their impact on vehicle performance.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 2. Major Vehicle Resistances

The total resistance force ($F_R$) acting on a vehicle can be broadly categorized into the following components:

$F_R = F_{a} + F_{r} + F_{g} + F_{s} + F_{b}$

Where:
*   $F_{a}$ = Aerodynamic Resistance
*   $F_{r}$ = Rolling Resistance
*   $F_{g}$ = Grade Resistance (Gradient Resistance)
*   $F_{s}$ = Acceleration Resistance (Inertia Force)
*   $F_{b}$ = Braking Resistance (though not always considered in steady-state analysis, it's important for energy regeneration in HEVs/EVs)

Let's examine each component in detail:

---

### 3. Aerodynamic Resistance ($F_{a}$)

Aerodynamic resistance is the force exerted by the air opposing the vehicle's motion. It is a significant factor, especially at higher speeds.

*   **Definition:** The force that opposes the movement of an object through a fluid (in this case, air).
*   **Formula:**
    $F_{a} = \frac{1}{2} \rho C_{d} A v^2$
    Where:
    *   $\rho$ (rho) = Air density (typically around 1.225 kg/m³ at sea level and 15°C)
    *   $C_{d}$ = Drag coefficient (dimensionless; depends on vehicle shape and design)
    *   $A$ = Frontal area of the vehicle (m²)
    *   $v$ = Vehicle speed relative to the air (m/s)

*   **Key Concepts:**
    *   **Drag Coefficient ($C_d$):** A measure of how aerodynamically "slippery" a vehicle is. Lower $C_d$ values indicate less air resistance. Streamlined shapes significantly reduce $C_d$.
    *   **Frontal Area ($A$):** The cross-sectional area of the vehicle perpendicular to the direction of motion. Larger vehicles generally have a larger frontal area.
    *   **Speed Dependence:** Aerodynamic resistance increases with the square of the velocity. This means doubling the speed quadruples the air resistance. This is a critical consideration for the range of EVs, as driving at high speeds dramatically reduces efficiency.

*   **Examples:**
    *   A typical sedan might have a $C_d$ of 0.25-0.35.
    *   A sports car with a sleek design might have a $C_d$ as low as 0.20.
    *   An SUV or truck will generally have a higher $C_d$ due to their less aerodynamic shape.
    *   Electric vehicles often feature aerodynamic designs to compensate for battery weight and improve range. Features like smooth underbodies, covered wheel wells, and active grille shutters are employed.

*   **Impact on HEVs/EVs:** At highway speeds, aerodynamic resistance can be the dominant force. Efficient aerodynamic design is therefore paramount for maximizing the range of EVs and improving the fuel economy of HEVs.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 4. Rolling Resistance ($F_{r}$)

Rolling resistance is the force that opposes motion due to the deformation of the tires and the road surface.

*   **Definition:** The force that opposes the motion of a body rolling on a surface.
*   **Formula:**
    $F_{r} = C_{rr} N$
    Where:
    *   $C_{rr}$ = Coefficient of rolling resistance (dimensionless; depends on tire type, inflation pressure, road surface, and tire construction)
    *   $N$ = Normal force (usually equal to the vehicle's weight, $m \cdot g$)

*   **Key Concepts:**
    *   **Coefficient of Rolling Resistance ($C_{rr}$):** This coefficient is influenced by several factors:
        *   **Tire Properties:** Tire pressure, tread pattern, and sidewall stiffness all affect $C_{rr}$. Under-inflated tires increase rolling resistance.
        *   **Road Surface:** Smooth, hard surfaces (like asphalt) have lower $C_{rr}$ than rough or soft surfaces (like gravel or sand).
        *   **Tire Material:** The viscoelastic properties of the rubber compound play a role.
    *   **Normal Force:** The greater the weight of the vehicle, the greater the deformation of the tires and road, leading to higher rolling resistance.

*   **Examples:**
    *   A typical passenger car tire on asphalt might have a $C_{rr}$ of 0.010-0.015.
    *   Truck tires may have slightly higher $C_{rr}$ due to higher loads.
    *   Special low-rolling-resistance tires are often used in EVs to improve efficiency.

*   **Impact on HEVs/EVs:** While less dominant than aerodynamic resistance at high speeds, rolling resistance is a constant factor and contributes significantly to energy consumption, particularly in stop-and-go driving and at lower to moderate speeds. Maintaining proper tire pressure is crucial for minimizing this resistance.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 5. Grade Resistance ($F_{g}$)

Grade resistance is the force that opposes a vehicle's motion when it is traveling uphill. It is essentially a component of the vehicle's weight acting against the direction of motion.

*   **Definition:** The force that opposes motion due to the vehicle being on an incline.
*   **Formula:**
    $F_{g} = m g \sin(\theta)$
    Where:
    *   $m$ = Vehicle mass (kg)
    *   $g$ = Acceleration due to gravity (approx. 9.81 m/s²)
    *   $\theta$ (theta) = Angle of the incline (degrees or radians)

*   **Key Concepts:**
    *   **Uphill vs. Downhill:**
        *   **Uphill:** $F_g$ is positive, opposing motion. The vehicle needs to exert more power to overcome it.
        *   **Downhill:** $F_g$ is negative, acting in the direction of motion. It can be used for regenerative braking in EVs/HEVs.
    *   **Approximation for Small Angles:** For small angles (typical road grades), $\sin(\theta) \approx \tan(\theta) \approx \frac{\text{grade percentage}}{100}$.
        So, $F_{g} \approx m g \frac{\text{grade percentage}}{100}$.

*   **Examples:**
    *   Driving up a 5% grade (a 5-meter rise for every 100 meters traveled horizontally) means $\theta \approx \arctan(0.05) \approx 2.86^\circ$.
    *   The grade resistance force would be approximately $m \cdot 9.81 \cdot 0.05$.

*   **Impact on HEVs/EVs:** Climbing hills requires significant power. For EVs, this can lead to rapid battery depletion. The ability to capture energy through regenerative braking when descending hills is a key advantage of EVs and HEVs. This energy can be stored in the battery and used later, improving overall efficiency.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 6. Acceleration Resistance ($F_{s}$)

Acceleration resistance, often referred to as inertia force, is the force required to accelerate the vehicle's mass.

*   **Definition:** The force needed to change the velocity of a mass. According to Newton's second law ($F=ma$), a force is required to accelerate an object.
*   **Formula:**
    $F_{s} = m_{eff} a$
    Where:
    *   $m_{eff}$ = Effective mass of the vehicle (kg). This includes the vehicle's mass and a portion of the rotational inertia of the wheels, drive shafts, and motor.
    *   $a$ = Acceleration of the vehicle (m/s²)

*   **Key Concepts:**
    *   **Effective Mass ($m_{eff}$):** This is a more accurate representation of the inertia the powertrain must overcome during acceleration. It's calculated as:
        $m_{eff} = m_{vehicle} + I_{rotational} / r^2$
        Where $I_{rotational}$ is the total rotational inertia of all rotating components (wheels, drivetrain, motor), and $r$ is the wheel radius. In many simplified calculations, the rotational inertia is approximated by adding a percentage (e.g., 5-10%) to the vehicle's mass.
    *   **Acceleration Demand:** The higher the desired acceleration, the greater the force required. This directly impacts the power output needed from the motor.

*   **Examples:**
    *   A heavy EV with a large battery pack will have a higher effective mass, requiring more torque for the same acceleration compared to a lighter vehicle.
    *   The ability to provide high torque at low speeds makes electric motors particularly well-suited for rapid acceleration.

*   **Impact on HEVs/EVs:** EVs and HEVs are known for their quick acceleration due to the instantaneous torque delivery from electric motors. However, rapid acceleration also draws significant current from the battery, impacting range. Energy regeneration during deceleration can partially offset the energy consumed during acceleration.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 7. Braking Resistance and Regenerative Braking

While not a resistance to *forward motion* in the same way as the others, braking force is crucial for slowing down and, in HEVs/EVs, for energy recovery.

*   **Definition:** The force applied by the braking system to decelerate the vehicle.
*   **Braking Force ($F_b$):**
    $F_b = m a_{decel}$ (where $a_{decel}$ is negative acceleration)
*   **Regenerative Braking:**
    *   In EVs and HEVs, the electric motor can operate in reverse, acting as a generator.
    *   This converts the vehicle's kinetic energy into electrical energy, which is then stored in the battery.
    *   **Advantages:** Improves energy efficiency, extends range, reduces wear on mechanical brakes.
    *   **Limitations:** The amount of energy that can be regenerated is limited by the battery's charging rate and the motor's efficiency as a generator. In emergency braking or very high deceleration rates, mechanical brakes are still required.

*   **Impact on HEVs/EVs:** Regenerative braking is a cornerstone of EV/HEV efficiency. It allows for recapturing energy that would otherwise be lost as heat in conventional friction brakes. This is especially beneficial in urban driving with frequent stops.

*(Referenced from: Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 4)*

---

### 8. Total Traction Force Required ($F_{T}$)

The total force that the powertrain (motor, transmission, wheels) must provide to overcome all resistances and achieve a desired acceleration is the sum of these forces.

*   **Formula for Steady-State Driving (no acceleration):**
    $F_{T, steady} = F_{a} + F_{r} + F_{g}$

*   **Formula for Accelerated Driving:**
    $F_{T, accel} = F_{a} + F_{r} + F_{g} + F_{s}$

*   **Power Requirement ($P$):** The power required at the wheels is given by:
    $P_{wheels} = F_{T} \cdot v$

*   **Implications for HEVs/EVs:**
    *   **Low Speed:** Rolling resistance and acceleration forces dominate. Electric motors are efficient here.
    *   **High Speed:** Aerodynamic resistance dominates. This is where range is most affected.
    *   **Hills:** Grade resistance significantly increases the power demand.
    *   **Optimization:** Vehicle design aims to minimize all these resistances through aerodynamic shaping, low-rolling-resistance tires, efficient powertrains, and lightweight construction.

*(Referenced from: Husain, Ch. 4; Ehsani et al., Ch. 3; Larminie & Lowry, Ch. 2)*

---

### 9. Important Points to Remember

*   **Speed is Key:** Aerodynamic resistance is proportional to the square of speed, making it the dominant factor at higher velocities.
*   **Tire Health:** Proper tire inflation and selection of low-rolling-resistance tires are crucial for efficiency.
*   **Weight Matters:** Vehicle mass affects rolling resistance (normal force) and acceleration resistance. Lightweight materials are important for EVs.
*   **Regeneration is Gold:** Regenerative braking is a significant advantage of HEVs and EVs for improving overall energy efficiency.
*   **Driving Style:** Aggressive acceleration and high-speed driving significantly increase energy consumption due to higher resistance forces.

---

### 10. Practice Questions and Exercises

**Question 1:**
A car has a mass of 1500 kg. At a speed of 20 m/s (72 km/h), the aerodynamic resistance is 250 N and the rolling resistance is 150 N. Calculate the total resistance force at this speed. If the car is driving on a level road, what is the power required to maintain this speed?

**Question 2:**
An electric vehicle needs to accelerate from 0 to 15 m/s (54 km/h) in 10 seconds. If the effective mass of the vehicle is 1600 kg, calculate the average acceleration and the average force required to overcome inertia during this acceleration period.

**Question 3:**
A vehicle is traveling uphill on a 6% grade. If the vehicle's mass is 1800 kg, calculate the grade resistance force. How would this force change if the vehicle were traveling downhill on the same grade?

**Question 4 (Conceptual):**
Explain why driving an EV at 120 km/h consumes significantly more energy than driving at 80 km/h, even though the power required isn't proportionally higher.

---

### 11. Answers to Practice Questions

**Answer 1:**
*   **Total Resistance Force:** $F_R = F_a + F_r = 250 \text{ N} + 150 \text{ N} = 400 \text{ N}$
*   **Power Required:** $P = F_R \cdot v = 400 \text{ N} \cdot 20 \text{ m/s} = 8000 \text{ W} = 8 \text{ kW}$

**Answer 2:**
*   **Average Acceleration ($a$):**
    $a = \frac{\Delta v}{\Delta t} = \frac{15 \text{ m/s} - 0 \text{ m/s}}{10 \text{ s}} = 1.5 \text{ m/s}^2$
*   **Average Force to Overcome Inertia ($F_s$):**
    $F_s = m_{eff} \cdot a = 1600 \text{ kg} \cdot 1.5 \text{ m/s}^2 = 2400 \text{ N}$

**Answer 3:**
*   **Grade Resistance Force ($F_g$):**
    Using the approximation for small angles: Grade percentage = 6% = 0.06
    $F_g \approx m \cdot g \cdot (\text{grade percentage}) = 1800 \text{ kg} \cdot 9.81 \text{ m/s}^2 \cdot 0.06$
    $F_g \approx 1059.5 \text{ N}$
    (Using $\sin(\theta)$ where $\theta = \arctan(0.06) \approx 3.43^\circ$: $F_g = 1800 \cdot 9.81 \cdot \sin(3.43^\circ) \approx 1058.4 \text{ N}$)
*   **Downhill:** If traveling downhill, the grade resistance force would be negative, meaning it acts in the direction of motion, assisting the vehicle's movement. This force could be used for regenerative braking.

**Answer 4:**
Driving an EV at 120 km/h requires significantly more energy than at 80 km/h primarily due to the **aerodynamic resistance**. Aerodynamic resistance increases with the **square** of the velocity ($F_a \propto v^2$). Therefore, increasing speed from 80 km/h to 120 km/h (a 50% increase in speed) causes aerodynamic resistance to increase by a factor of $(1.5)^2 = 2.25$ (a 125% increase). While rolling resistance also increases with speed, its relationship is less drastic. The combined effect means the vehicle needs to overcome much larger forces at higher speeds, leading to a disproportionately higher energy consumption and a reduction in driving range.

---

**Alignment with Course Outcomes:**

*   **CO1 (General Architecture):** Understanding resistances is fundamental to comprehending the forces the EV powertrain must overcome, thus influencing architectural choices for motors, batteries, and drivetrains.
*   **CO2 (Batteries, Charging, BMS):** Knowledge of resistances directly impacts energy consumption from the battery, informing decisions about battery capacity, charging strategies, and the need for efficient energy management systems (BMS) to optimize range.
*   **CO3 (Motors and Drives):** Different resistances dictate the torque and power requirements of the electric motor. For example, high acceleration demands require motors capable of delivering high torque at low speeds, while high-speed driving necessitates motors that can operate efficiently at higher power levels.
*   **CO4 (Power Transmission):** Understanding how these resistances translate to forces at the wheels informs the selection of appropriate gear ratios, transmission types, and final drive designs to efficiently deliver power from the motor to the road. The need to overcome grade resistance, for instance, highlights the importance of sufficient torque at the wheels.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
