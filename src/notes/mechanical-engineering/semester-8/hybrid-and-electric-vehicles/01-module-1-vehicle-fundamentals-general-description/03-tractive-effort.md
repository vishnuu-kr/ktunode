---
title: "tractive effort"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446441e"
status: "completed"
scrapedAt: "2026-05-20T18:20:28.032Z"
---
## HYBRID AND ELECTRIC VEHICLES: Module 1: Vehicle Fundamentals – General Description

### Topic: Tractive Effort

**Learning Outcomes Covered:**

*   Understanding the fundamental forces that act on a vehicle and how they are overcome by tractive effort.
*   Analyzing the relationship between tractive effort, vehicle speed, and power.
*   Identifying the components that contribute to generating and transmitting tractive effort.
*   Comparing tractive effort characteristics of different vehicle types (ICE, HEV, EV).

**Course Outcomes Alignment:**

*   **CO1 (K2):** While this topic focuses on forces, understanding tractive effort is crucial for explaining the basic operation and movement of EVs, which forms part of their general architecture.
*   **CO4 (K3):** This topic directly relates to power transmission, as tractive effort is the force delivered to the wheels. Understanding tractive effort is essential for selecting appropriate drivetrain components.

---

### 1. Introduction to Tractive Effort

**Definition:**
Tractive effort is the **total driving force exerted by the wheels of a vehicle on the ground**, which propels the vehicle forward and overcomes external resistive forces. It's the force that "pulls" the vehicle.

**Purpose:**
The primary purpose of tractive effort is to:
*   Accelerate the vehicle.
*   Maintain a constant speed against resistive forces.
*   Climb gradients (inclines).

**Key Concept:**
Tractive effort is the **output force of the drivetrain at the point of contact between the driving wheels and the road surface**.

**Reference:**
*   **Husain (2010), Chapter 2:** Discusses vehicle dynamics and the forces involved in motion, including tractive effort.
*   **Ehsani et al. (2018), Chapter 3:** Covers vehicle propulsion systems and the generation of tractive effort.
*   **Larminie & Lowry (2012), Chapter 5:** Explains how electric motors generate torque that translates to tractive effort.

---

### 2. Resistive Forces Affecting Tractive Effort

For a vehicle to move, the tractive effort must be greater than the sum of the resistive forces acting against it. These forces can be categorized as follows:

**2.1. Rolling Resistance ($F_r$)**

**Definition:**
Rolling resistance is the force opposing motion caused by the deformation of the tires and the road surface as the wheels roll.

**Factors Influencing Rolling Resistance:**
*   **Tire Pressure:** Lower tire pressure increases rolling resistance.
*   **Tire Construction and Material:** Softer compounds and thicker treads generally increase resistance.
*   **Road Surface:** Rough or soft surfaces (e.g., gravel, dirt) increase rolling resistance compared to smooth, hard surfaces (e.g., asphalt).
*   **Vehicle Load:** Heavier loads increase the pressure on the tires, leading to greater deformation and thus higher rolling resistance.
*   **Wheel Alignment:** Poor alignment can increase friction.

**Formula (Simplified):**
$F_r = C_r \times W$
Where:
*   $C_r$ is the coefficient of rolling resistance (a dimensionless value, typically 0.01 to 0.02 for pneumatic tires on asphalt).
*   $W$ is the total weight of the vehicle (including passengers and cargo).

**Example:**
A vehicle weighing 1500 kg (approx. 15000 N) on a level road with a rolling resistance coefficient of 0.015 will experience a rolling resistance of:
$F_r = 0.015 \times 15000 \text{ N} = 225 \text{ N}$

**Reference:**
*   **Ehsani et al. (2018), Chapter 3:** Provides detailed analysis of rolling resistance and its contributing factors.
*   **Larminie & Lowry (2012), Chapter 5:** Mentions rolling resistance as a key factor affecting vehicle efficiency.

---

**2.2. Air Resistance (Aerodynamic Drag) ($F_a$)**

**Definition:**
Air resistance is the force exerted by the air that opposes the forward motion of the vehicle.

**Factors Influencing Air Resistance:**
*   **Vehicle Speed:** Air resistance increases significantly with speed, approximately with the square of the velocity.
*   **Frontal Area (A):** The projected area of the vehicle perpendicular to the direction of motion.
*   **Aerodynamic Drag Coefficient ($C_d$):** A dimensionless number representing how aerodynamically "slippery" the vehicle is. Sleeker designs have lower $C_d$ values.
*   **Air Density ($\rho$):** Denser air (at lower altitudes and temperatures) causes greater resistance.

**Formula:**
$F_a = \frac{1}{2} \times \rho \times A \times C_d \times v^2$
Where:
*   $\rho$ is the density of air (approx. 1.225 kg/m³ at sea level and 15°C).
*   $A$ is the frontal area of the vehicle (m²).
*   $C_d$ is the drag coefficient (dimensionless).
*   $v$ is the vehicle speed (m/s).

**Example:**
Consider a vehicle with a frontal area of 2.2 m² and a drag coefficient of 0.3. At a speed of 100 km/h (approx. 27.8 m/s):
$F_a = \frac{1}{2} \times 1.225 \times 2.2 \times 0.3 \times (27.8)^2$
$F_a \approx 0.6125 \times 2.2 \times 0.3 \times 772.84 \approx 327.4 \text{ N}$

**Important Note:** Air resistance becomes the dominant resistive force at higher speeds. This is a key consideration for EV range.

**Reference:**
*   **Husain (2010), Chapter 2:** Elaborates on aerodynamic forces and their impact.
*   **Ehsani et al. (2018), Chapter 3:** Provides detailed formulas and discussion on air resistance.
*   **Larminie & Lowry (2012), Chapter 5:** Highlights the importance of aerodynamics for energy efficiency in EVs.

---

**2.3. Gradient Resistance ($F_g$)**

**Definition:**
Gradient resistance is the force that opposes motion when a vehicle is moving uphill or assists motion when moving downhill. It's due to gravity.

**Factors Influencing Gradient Resistance:**
*   **Gradient Angle ($\theta$):** The steepness of the incline.
*   **Vehicle Weight ($W$):** Heavier vehicles experience greater gradient resistance.

**Formula:**
$F_g = W \times \sin(\theta)$
Where:
*   $W$ is the total weight of the vehicle (N).
*   $\theta$ is the angle of the gradient.

For small angles (common in road gradients), $\sin(\theta) \approx \tan(\theta)$.
If the gradient is expressed as a percentage ($G$), then $\tan(\theta) = G/100$.
So, for small angles:
$F_g \approx W \times (G/100)$

**Example:**
A 1500 kg vehicle (15000 N) climbing a 5% gradient:
$F_g \approx 15000 \times (5/100) = 750 \text{ N}$

**Reference:**
*   **Husain (2010), Chapter 2:** Explains gradient resistance and its calculation.
*   **Ehsani et al. (2018), Chapter 3:** Discusses the impact of gradients on tractive effort requirements.

---

**2.4. Acceleration Resistance ($F_{accel}$)**

**Definition:**
Acceleration resistance is the force required to increase the vehicle's kinetic energy, i.e., to accelerate it.

**Factors Influencing Acceleration Resistance:**
*   **Vehicle Mass ($m$):** Heavier vehicles require more force to accelerate.
*   **Acceleration Rate ($a$):** Higher acceleration demands greater force.
*   **Rotational Inertia of Drivetrain Components:** The wheels, motor, and other rotating parts also have inertia that needs to be overcome during acceleration. This is often approximated by adding a fraction of the vehicle's mass.

**Formula (Simplified, neglecting rotational inertia):**
$F_{accel} = m \times a$
Where:
*   $m$ is the vehicle mass (kg).
*   $a$ is the acceleration (m/s²).

**Example:**
A 1500 kg vehicle accelerating at 2 m/s²:
$F_{accel} = 1500 \text{ kg} \times 2 \text{ m/s}^2 = 3000 \text{ N}$

**Reference:**
*   **Husain (2010), Chapter 2:** Introduces the concept of inertia and acceleration forces.
*   **Ehsani et al. (2018), Chapter 3:** Discusses acceleration performance and the forces involved.

---

### 3. Total Resistive Force and Required Tractive Effort

The total resistive force ($F_{resistive}$) that the vehicle must overcome is the sum of all individual resistive forces:

$F_{resistive} = F_r + F_a + F_g + F_{accel}$

For the vehicle to move, accelerate, or climb, the **tractive effort ($F_{tractive}$) generated by the wheels must be equal to or greater than the total resistive force:**

$F_{tractive} \geq F_{resistive}$

**For constant speed on a level road:**
$F_{tractive} = F_r + F_a$

**For climbing a gradient at constant speed:**
$F_{tractive} = F_r + F_a + F_g$

**For acceleration on a level road:**
$F_{tractive} = F_r + F_a + F_{accel}$

**For acceleration while climbing a gradient:**
$F_{tractive} = F_r + F_a + F_g + F_{accel}$

---

### 4. Generating Tractive Effort: The Drivetrain

Tractive effort is generated by the torque produced by the powertrain (engine or electric motor) and transmitted through the drivetrain to the wheels.

**Relationship between Torque and Tractive Effort:**

Tractive effort at the wheels is directly related to the torque at the drive wheels and the radius of the wheels.

$F_{tractive} = \frac{T_{wheels}}{r_{wheel}}$

Where:
*   $T_{wheels}$ is the total torque delivered to the driving wheels (Nm).
*   $r_{wheel}$ is the effective rolling radius of the wheels (m).

**Drivetrain Components and their Role:**

*   **Power Source (Engine/Motor):** Generates rotational power and torque.
*   **Transmission/Gearbox:** Multiplies torque and adjusts speed. EVs often use simpler transmissions (single-speed reduction gears).
*   **Differential:** Splits torque between the driving wheels and allows them to rotate at different speeds when cornering.
*   **Drive Shafts/Axles:** Transmit torque to the wheels.
*   **Wheels:** Apply the force to the road.

**Important Point:** The **gear ratio** in the transmission plays a crucial role in multiplying the motor's torque to achieve the required tractive effort, especially at low speeds and during acceleration. Higher gear ratios provide higher torque and thus higher tractive effort but at lower speeds.

**Reference:**
*   **Husain (2010), Chapter 2 & 3:** Discusses torque generation and transmission through the drivetrain.
*   **Ehsani et al. (2018), Chapter 3 & 4:** Covers drivetrain components and their impact on tractive effort.
*   **Larminie & Lowry (2012), Chapter 5:** Details the role of electric motors and their torque characteristics in generating tractive effort.

---

### 5. Tractive Effort vs. Speed Characteristics

The tractive effort available from a vehicle varies with its speed. This characteristic is fundamental to understanding vehicle performance.

**5.1. Internal Combustion Engine (ICE) Vehicles:**

*   **Low Speeds/Idle:** Torque is low, requires high gear ratios to generate sufficient tractive effort for starting and slow movement.
*   **Mid-Range Speeds:** Torque output typically peaks in a specific engine speed range. The transmission is used to keep the engine in this optimal range for acceleration and cruising.
*   **High Speeds:** Torque may decrease, and air resistance becomes the dominant force. Tractive effort may limit the top speed.

**5.2. Electric Vehicles (EVs):**

*   **Electric Motor Torque Characteristics:**
    *   **Constant Torque Region (from 0 RPM up to base speed):** Electric motors (especially DC and permanent magnet synchronous motors) can produce their **maximum torque from a standstill (0 RPM)**. This provides excellent initial acceleration and pulling power, ideal for starting and low-speed maneuverability.
    *   **Constant Power Region (from base speed up to base speed):** Beyond the base speed, the motor's torque typically decreases, but it can maintain a constant power output by increasing its speed. This allows for good acceleration at higher speeds.

*   **Tractive Effort Curve for EVs:**
    *   The tractive effort curve starts at a high value at 0 speed due to the motor's inherent high starting torque.
    *   It remains relatively constant or decreases slowly in the low-to-medium speed range (constant torque region).
    *   As speed increases further (entering the constant power region), the tractive effort decreases more rapidly (inversely proportional to speed).
    *   The maximum tractive effort is limited by the motor's torque and the gearbox ratio, while the maximum speed is limited by the motor's power and aerodynamic drag.

**5.3. Hybrid Electric Vehicles (HEVs):**

*   HEVs can combine the characteristics of ICE and EV powertrains.
*   The electric motor's ability to provide instant torque can supplement the ICE, especially during acceleration, improving overall tractive effort and responsiveness.
*   The control strategy of the hybrid system determines how the torque from the ICE and electric motor is blended to achieve the desired tractive effort.

**Reference:**
*   **Husain (2010), Chapter 3 & 7:** Discusses electric motor characteristics and their application in traction.
*   **Ehsani et al. (2018), Chapter 4:** Compares tractive effort characteristics of different vehicle types.
*   **Larminie & Lowry (2012), Chapter 5:** Provides excellent graphical representations of electric motor torque/speed and tractive effort/speed curves.

---

### 6. Power and Tractive Effort

**Definition of Power (P):**
Power is the rate at which work is done or energy is transferred. In the context of vehicles, it's the rate at which the drivetrain delivers force to move the vehicle.

**Relationship between Power, Tractive Effort, and Velocity:**

$P = F_{tractive} \times v$

Where:
*   $P$ is power (Watts).
*   $F_{tractive}$ is tractive effort (Newtons).
*   $v$ is velocity (m/s).

**Implications:**

*   **To achieve higher tractive effort at a given speed, more power is required.**
*   **To achieve higher speed at a given tractive effort, more power is required.**
*   **At higher speeds, tractive effort must decrease to stay within the power limits of the motor/engine, especially in the constant power region.**

**Example:**
A vehicle delivering 50,000 N of tractive effort at 10 m/s is using:
$P = 50,000 \text{ N} \times 10 \text{ m/s} = 500,000 \text{ W} = 500 \text{ kW}$

If the vehicle can only produce a maximum of 100 kW (100,000 W), the maximum tractive effort it can provide at 20 m/s (72 km/h) is:
$F_{tractive} = P / v = 100,000 \text{ W} / 20 \text{ m/s} = 5,000 \text{ N}$

**Reference:**
*   **Husain (2010), Chapter 2:** Emphasizes the power-speed-force relationship.
*   **Ehsani et al. (2018), Chapter 3:** Discusses the power requirements for vehicle motion.

---

### 7. Key Considerations for Hybrid and Electric Vehicles

*   **Instant Torque:** EVs' ability to deliver maximum torque from 0 RPM is a significant advantage for immediate acceleration and responsiveness.
*   **Regenerative Braking:** During braking, electric motors can act as generators, converting kinetic energy back into electrical energy and storing it in the battery. This reduces wear on friction brakes and can "regenerate" some of the energy used for acceleration, effectively increasing the net tractive effort over a driving cycle.
*   **Drivetrain Simplicity:** EVs often have simpler transmissions (typically a single-speed reduction gear) compared to ICE vehicles, reducing losses and complexity.
*   **Weight Distribution:** The placement of batteries can affect vehicle dynamics and how tractive effort is applied.
*   **Battery Power Limitations:** The maximum power the battery can deliver and the motor can accept will dictate the peak tractive effort and acceleration capabilities.
*   **Motor Efficiency:** The efficiency of the electric motor across its operating range affects the overall tractive effort achieved for a given electrical power input.

**Reference:**
*   **Larminie & Lowry (2012), Chapters 5 & 6:** Discusses EV drivetrains, regenerative braking, and motor characteristics in detail.
*   **Ehsani et al. (2018), Chapter 4 & 10:** Covers hybrid system architectures and regenerative braking strategies.

---

### 8. Practice Questions and Answers

**Question 1:**
A 1200 kg electric vehicle is traveling at a constant speed of 72 km/h on a level road. The rolling resistance coefficient is 0.012, and the frontal area is 2.0 m². The drag coefficient is 0.28. The effective rolling radius of the wheels is 0.3 m. What is the tractive effort required to maintain this speed?
(Assume air density $\rho = 1.225$ kg/m³).

**Answer 1:**
*   Convert speed to m/s: $v = 72 \text{ km/h} = 72 \times \frac{1000}{3600} \text{ m/s} = 20 \text{ m/s}$
*   Calculate weight: $W = m \times g = 1200 \text{ kg} \times 9.81 \text{ m/s}^2 \approx 11772 \text{ N}$
*   Calculate rolling resistance: $F_r = C_r \times W = 0.012 \times 11772 \text{ N} \approx 141.3 \text{ N}$
*   Calculate air resistance: $F_a = \frac{1}{2} \times \rho \times A \times C_d \times v^2 = \frac{1}{2} \times 1.225 \times 2.0 \times 0.28 \times (20)^2 = 0.6125 \times 2.0 \times 0.28 \times 400 = 137.2 \text{ N}$
*   Total resistive force (on a level road, constant speed): $F_{resistive} = F_r + F_a = 141.3 \text{ N} + 137.2 \text{ N} = 278.5 \text{ N}$
*   Required tractive effort: $F_{tractive} = F_{resistive} = 278.5 \text{ N}$

**Question 2:**
An electric motor produces a maximum torque of 300 Nm. This torque is transmitted to the wheels through a single-speed reduction gearbox with a ratio of 10:1 and a differential with a ratio of 4:1. The effective rolling radius of the wheels is 0.3 m. What is the maximum tractive effort the vehicle can produce at the wheels?

**Answer 2:**
*   Torque at the output of the gearbox (before differential): $T_{gearbox\_out} = T_{motor} \times Ratio_{gearbox} = 300 \text{ Nm} \times 10 = 3000 \text{ Nm}$
*   Torque at the driving wheels (after differential): $T_{wheels} = T_{gearbox\_out} \times Ratio_{differential} = 3000 \text{ Nm} \times 4 = 12000 \text{ Nm}$
*   Maximum tractive effort: $F_{tractive} = \frac{T_{wheels}}{r_{wheel}} = \frac{12000 \text{ Nm}}{0.3 \text{ m}} = 40000 \text{ N}$

**Question 3:**
A 1500 kg EV needs to accelerate from 0 to 10 m/s in 8 seconds on a level road.
a) What is the average tractive effort required for acceleration?
b) If the EV's motor can deliver a constant torque of 400 Nm from 0 to 15 m/s, and the total gear reduction (including differential) is 15:1, what is the maximum tractive effort the vehicle can produce?
c) What is the vehicle's maximum speed if its motor has a maximum power output of 80 kW? (Ignore resistive forces for simplicity).

**Answer 3:**
a)
*   Calculate acceleration: $a = \frac{\Delta v}{\Delta t} = \frac{10 \text{ m/s} - 0 \text{ m/s}}{8 \text{ s}} = 1.25 \text{ m/s}^2$
*   Tractive effort for acceleration: $F_{accel} = m \times a = 1500 \text{ kg} \times 1.25 \text{ m/s}^2 = 1875 \text{ N}$
    (Note: This ignores rolling and air resistance. A more realistic calculation would include these.)

b)
*   Torque at the wheels: $T_{wheels} = T_{motor} \times Gear\_Ratio = 400 \text{ Nm} \times 15 = 6000 \text{ Nm}$
*   Assuming wheel radius is 0.3 m:
    Maximum tractive effort: $F_{tractive\_max} = \frac{T_{wheels}}{r_{wheel}} = \frac{6000 \text{ Nm}}{0.3 \text{ m}} = 20000 \text{ N}$

c)
*   Maximum power is 80 kW = 80,000 W.
*   We know $P = F_{tractive} \times v$.
*   In the constant power region, tractive effort decreases as speed increases. The maximum speed is reached when the required tractive effort (to overcome resistances) equals the available tractive effort, and this is limited by the maximum power.
*   To find the maximum speed, we need to know the tractive effort at that speed. If we ignore resistive forces, then the tractive effort is solely determined by power and speed. However, the question implies a limit by the motor's power.
*   Let's assume the 20,000 N tractive effort from part (b) is achievable up to a certain speed. The power used to achieve this at a speed of, say, 10 m/s is: $P = 20000 \text{ N} \times 10 \text{ m/s} = 200,000 \text{ W} = 200 \text{ kW}$. This indicates that the motor's constant torque capability of 400 Nm is likely limited by a higher power rating than 80 kW, or the 80 kW limit is for a higher speed.

    Let's re-interpret part (c): If the motor has a *peak power limit* of 80 kW, and we assume this limit is reached in the constant power region. We need to find the speed at which the available tractive effort (from the motor and gearbox) is such that $F_{tractive} \times v = 80 \text{ kW}$.
    If we assume the motor has a base speed (where constant torque ends) which is greater than the speed corresponding to 80 kW of power at maximum torque, then we use the maximum power limit.
    Let's assume the 20,000 N tractive effort is the *peak* tractive effort. The speed at which 80 kW power is delivered with this tractive effort is:
    $v_{max\_speed} = \frac{P_{max}}{F_{tractive\_at\_max\_speed}}$

    If we assume that at the maximum speed, the tractive effort is *just enough* to overcome resistances, and that the motor is operating at its 80kW limit:
    Let's consider the point where the motor's constant torque region ends (base speed). If the motor's base speed is, say, 3000 RPM (which is $3000 \times 2\pi / 60 \approx 314$ rad/s, or a vehicle speed of roughly $314 \times 0.3 \approx 94$ m/s if it were a direct drive, but with gearing it's much lower).
    The peak power of the motor is 80 kW. We use the relationship $P = F \times v$.
    If the motor is operating at its peak power of 80 kW, and we need to find the maximum speed *under this power limit*, we need to know the tractive effort at that speed.

    **Let's simplify the question:** At what speed can the vehicle travel if it is using its maximum power of 80 kW to maintain a constant speed, assuming resistive forces are negligible and the available tractive effort is 15,000 N (a hypothetical value lower than the peak 20,000 N)?
    $v = P / F = 80000 \text{ W} / 15000 \text{ N} \approx 5.33 \text{ m/s}$

    **Correct interpretation for (c):** The question implies the vehicle is limited by its 80 kW power output. We need to find the speed where the tractive effort *provided* by the drivetrain (which might be decreasing with speed) results in 80 kW of power.
    If we assume the motor can produce 400 Nm up to a certain RPM, and then enters constant power.
    Let's assume the 80 kW is the peak power output. If the tractive effort at maximum speed is X N, then $80000 = X \times v_{max}$.
    Without knowing the speed at which the motor's torque starts to drop, or the speed at which resistive forces match the tractive effort provided at 80kW, it's hard to give a definitive answer.

    **A more typical question would be:** If the vehicle's motor has a maximum power of 80 kW and a maximum torque of 400 Nm, and the total gear ratio is 15:1, what is the *maximum speed the motor can achieve* if it's geared such that it operates at its peak power?
    First, find the speed at which the motor produces 80 kW at its peak torque (400 Nm):
    $P_{motor} = T_{motor} \times \omega_{motor}$
    $80000 \text{ W} = 400 \text{ Nm} \times \omega_{motor}$
    $\omega_{motor} = 80000 / 400 = 200 \text{ rad/s}$

    Now, translate this motor speed to vehicle speed using the total gear ratio (15:1) and wheel radius (0.3 m):
    Wheel speed: $\omega_{wheel} = \omega_{motor} / 15 = 200 / 15 \approx 13.33 \text{ rad/s}$
    Vehicle speed: $v = \omega_{wheel} \times r_{wheel} = 13.33 \text{ rad/s} \times 0.3 \text{ m} \approx 4 \text{ m/s}$

    This suggests that with these parameters, the motor would reach its peak power of 80 kW at a vehicle speed of about 4 m/s. This is a very low speed, which indicates these numbers are illustrative rather than realistic for typical EVs.

---

### 9. Important Points to Remember

*   **Tractive effort is the force pushing the vehicle forward.**
*   It must overcome rolling resistance, air resistance, gradient resistance, and acceleration resistance.
*   **Air resistance increases with the square of speed.**
*   **Electric motors offer peak tractive effort from zero speed, a key advantage for EVs.**
*   **Power is the product of tractive effort and speed ($P = F \times v$).**
*   **The drivetrain (gearbox, differential) multiplies torque to generate tractive effort.**
*   **Regenerative braking recovers energy during deceleration.**
*   Aerodynamic efficiency and tire selection significantly impact tractive effort requirements.

---

This concludes the study notes on Tractive Effort for Module 1. Remember to cross-reference these notes with your textbooks for a deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
