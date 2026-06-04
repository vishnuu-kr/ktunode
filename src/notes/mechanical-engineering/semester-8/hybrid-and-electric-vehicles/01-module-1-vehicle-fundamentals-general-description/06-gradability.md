---
title: "gradability"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464421"
status: "completed"
scrapedAt: "2026-05-20T18:20:30.086Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 1: Vehicle Fundamentals – General Description

### Topic: Gradability

---

### **1. Introduction to Gradability in Vehicles**

Gradability refers to a vehicle's ability to climb an incline or slope. This is a crucial performance parameter for any vehicle, including electric and hybrid vehicles (HEVs), as it directly impacts their usability and performance in real-world driving conditions, especially in hilly or mountainous regions.

**Key Concept:** Gradability is typically expressed as a percentage (%) or an angle (degrees). A higher percentage or angle indicates a steeper incline.

**Relationship to Vehicle Performance:**
*   **Traction:** The vehicle must generate enough tractive force (the force propelling the vehicle forward) to overcome gravity acting against it on an incline.
*   **Power:** Climbing an incline requires significant power output from the powertrain.
*   **Torque:** High torque at the wheels is essential for accelerating and maintaining speed on slopes.

---

### **2. Factors Affecting Gradability**

Several factors influence a vehicle's gradability:

*   **Vehicle Mass (M):** A heavier vehicle requires more force to overcome gravity.
    *   *Calculation:* Gravitational force acting parallel to the incline is proportional to `M * g * sin(theta)`, where `g` is the acceleration due to gravity and `theta` is the angle of the incline.
*   **Tractive Force Available at the Wheels (F_t):** This is the maximum force the vehicle's powertrain and drivetrain can deliver to the road surface.
    *   **Traction Limit:** The maximum tractive force is also limited by the adhesion between the tires and the road surface.
*   **Rolling Resistance (F_r):** The force opposing motion due to tire deformation and friction with the road.
    *   *Formula (simplified):* `F_r ≈ Crr * M * g * cos(theta)`, where `Crr` is the coefficient of rolling resistance. On inclines, `cos(theta)` becomes relevant.
*   **Aerodynamic Drag (F_d):** The force opposing motion due to air resistance.
    *   *Formula:* `F_d = 0.5 * rho * Cd * A * v^2`, where `rho` is air density, `Cd` is the drag coefficient, `A` is the frontal area, and `v` is the velocity. While less significant at lower speeds on inclines, it still plays a role.
*   **Drivetrain Efficiency:** Losses in the transmission, motors, and other drivetrain components reduce the power available at the wheels.

---

### **3. Gradability Calculation and Analysis**

The fundamental principle for a vehicle to climb an incline is that the tractive force generated must be greater than or equal to the sum of the forces opposing motion.

**Equation of Motion on an Incline:**

At a constant speed on an incline, the forces are balanced:

`F_t = F_gravity_parallel + F_r + F_d`

Where:
*   `F_t` = Tractive force at the wheels
*   `F_gravity_parallel` = Component of gravitational force acting parallel to the incline `= M * g * sin(theta)`
*   `F_r` = Rolling resistance
*   `F_d` = Aerodynamic drag

**Maximum Gradability:**

Maximum gradability is achieved when the tractive force (`F_t`) is at its maximum possible value, often limited by the motor torque and drivetrain capabilities, or by the tire-road adhesion limit. Let `F_t_max` be the maximum available tractive force.

The maximum angle (`theta_max`) the vehicle can climb at a given speed can be found by setting `F_t = F_t_max` and solving for `theta`.

**Simplified Scenario (Neglecting Drag and Rolling Resistance for concept illustration):**

If we only consider overcoming gravity, then:
`F_t_max = M * g * sin(theta_max)`

Therefore, the maximum sine of the angle is:
`sin(theta_max) = F_t_max / (M * g)`

And the maximum angle is:
`theta_max = arcsin(F_t_max / (M * g))`

**Gradability Percentage:**

Gradability is often expressed as a percentage, which is `tan(theta) * 100%`.
*   For small angles (typical for roads), `sin(theta) ≈ tan(theta)`.
*   Therefore, `Gradability (%) ≈ (F_t_max / (M * g)) * 100%`

**Example:**
If a vehicle can produce a maximum tractive force of 5000 N and has a mass of 1500 kg, what is its approximate maximum gradability in percentage?
`g ≈ 9.81 m/s^2`
`Gradability (%) ≈ (5000 N / (1500 kg * 9.81 m/s^2)) * 100%`
`Gradability (%) ≈ (5000 / 14715) * 100% ≈ 34%`

**Important Note (Ehsani et al., 3rd Ed.):** The torque at the motor shaft must be converted to wheel torque through the gear ratios and drivetrain. The motor's torque-speed characteristics are crucial here. Electric motors typically provide high torque at low speeds, which is advantageous for gradability.

---

### **4. Gradability in Electric Vehicles (EVs) and Hybrid Electric Vehicles (HEVs)**

EVs and HEVs have distinct advantages regarding gradability compared to traditional Internal Combustion Engine (ICE) vehicles.

**Advantages of EVs for Gradability:**

*   **High Torque at Low Speeds:** Electric motors deliver maximum torque from zero RPM. This means EVs can start climbing a steep hill from a standstill or maintain speed with minimal downshifting.
    *   *Reference:* Husain, "Design Fundamentals," highlights the inherent torque characteristics of electric motors.
*   **Instantaneous Torque Delivery:** Unlike ICEs which require revving up, electric motors respond instantly, providing immediate power for inclines.
*   **Efficient Regenerative Braking:** While primarily for braking, the ability to capture energy can be indirectly beneficial. However, during active climbing, regenerative braking is not utilized.
*   **Simple Drivetrain:** Many EVs use single-speed transmissions, eliminating the need for complex gear changes under load. This simplifies the torque management on inclines.
*   **Power-to-Weight Ratio:** Modern EVs often have excellent power-to-weight ratios, contributing to better gradability.

**Advantages of HEVs for Gradability:**

*   **Combined Powertrain:** HEVs can leverage the electric motor's high low-speed torque and the ICE's higher power output at speed.
*   **Electric Boost:** The electric motor can provide an additional torque boost to the ICE during climbing, improving performance.
*   **Optimized Operation:** The power management system can blend power from both sources to achieve optimal gradability and efficiency.

**Challenges:**

*   **Battery Capacity and Power Output:** The ability of the battery to deliver sustained high power for climbing is crucial.
*   **Thermal Management:** High power output during sustained climbing can lead to increased heat generation in the battery and motor, requiring effective thermal management systems.
    *   *Reference:* Larminie & Lowry, "Electric Vehicle Technology Explained," discusses the importance of thermal management for battery performance and longevity.

---

### **5. Designing for Gradability**

Engineers consider gradability during the vehicle design phase by:

*   **Motor Sizing:** Selecting electric motors with sufficient peak torque and power output.
*   **Battery Selection:** Choosing batteries that can sustain the required discharge rates for climbing.
*   **Gear Ratios/Transmission Design:** Determining appropriate single-speed reduction ratios or multi-speed gearboxes (less common in EVs but can be used in HEVs) to match motor characteristics to wheel requirements.
*   **Tire Selection:** Ensuring tires provide adequate grip (adhesion) for the maximum tractive force.
*   **Weight Reduction:** Minimizing vehicle mass to reduce the force required to overcome gravity.

**Example Scenario (CO4 Alignment):**

A design requirement for a new urban delivery electric van is to be able to climb a 20% grade with a full payload.
*   Vehicle mass (empty): 2000 kg
*   Maximum payload: 1000 kg
*   Total mass (M): 3000 kg
*   Target gradability: 20% (which is `tan(theta) = 0.2`)

Let's assume `theta` is small, so `sin(theta) ≈ tan(theta) = 0.2`.
We need to calculate the minimum tractive force required to overcome gravity:
`F_gravity_parallel = M * g * sin(theta)`
`F_gravity_parallel = 3000 kg * 9.81 m/s^2 * 0.2 ≈ 5886 N`

We also need to consider rolling resistance and aerodynamic drag, which will increase this requirement.

If the motor provides a maximum torque of 400 Nm and the final drive ratio is 10:1, and the wheel radius is 0.35 m:
*   Maximum wheel torque: `400 Nm * 10 = 4000 Nm`
*   Maximum tractive force (ignoring drivetrain losses): `4000 Nm / 0.35 m ≈ 11428 N`

This calculated tractive force (11428 N) is significantly higher than the force needed just to overcome gravity (5886 N), suggesting the vehicle should be capable of climbing the 20% grade, provided the tire adhesion is sufficient and other resistive forces are manageable. This demonstrates selecting components based on requirements.

---

### **6. Important Points to Remember**

*   **Gradability is a key performance metric** for both EVs and HEVs, affecting their practicality.
*   **Electric motors' inherent high torque at low speeds** provide a significant advantage for gradability.
*   **Vehicle mass, available tractive force, rolling resistance, and aerodynamic drag** are the primary factors influencing gradability.
*   **Gradability can be expressed as a percentage or an angle.**
*   **Proper sizing of motors, batteries, and drivetrain components** is critical for achieving desired gradability.
*   **Thermal management** is essential to prevent performance degradation during sustained climbing.

---

### **7. Practice Questions and Answers**

**Question 1:**
Define gradability and explain its significance in the context of electric vehicles. (CO1, K2)

**Answer:**
Gradability refers to a vehicle's ability to climb an incline or slope. It is significant for electric vehicles (EVs) because it directly impacts their usability in diverse terrains, especially in hilly or mountainous areas. EVs' inherent advantage of providing high torque at low speeds makes them well-suited for climbing, but their performance is still limited by factors like motor power, battery capacity, and vehicle weight.

**Question 2:**
An electric vehicle has a mass of 1800 kg and can produce a maximum tractive force of 7000 N at the wheels. Ignoring rolling resistance and aerodynamic drag, calculate the maximum gradability in percentage. (CO4, K3)

**Answer:**
Given:
Mass (M) = 1800 kg
Maximum Tractive Force (F_t_max) = 7000 N
Acceleration due to gravity (g) ≈ 9.81 m/s²

We use the simplified formula for gradability percentage, assuming sin(theta) ≈ tan(theta):
Gradability (%) ≈ (F_t_max / (M * g)) * 100%
Gradability (%) ≈ (7000 N / (1800 kg * 9.81 m/s²)) * 100%
Gradability (%) ≈ (7000 / 17658) * 100%
Gradability (%) ≈ 39.64%

**Question 3:**
Compare the gradability characteristics of a typical Battery Electric Vehicle (BEV) and an Internal Combustion Engine (ICE) vehicle, highlighting the advantages of the BEV. (CO1, K2)

**Answer:**
BEVs generally offer better gradability at lower speeds compared to ICE vehicles. This is primarily due to electric motors delivering maximum torque from zero RPM, allowing for instant acceleration and strong performance when starting from a stop on an incline or climbing at low speeds. ICE vehicles need to reach a certain RPM range to produce their peak torque, often requiring downshifts to maintain speed on hills, which can be less smooth and responsive.

**Question 4:**
A designer is selecting a motor for an electric vehicle that needs to climb a 15% grade with a total vehicle mass of 2500 kg. What is the approximate minimum tractive force required to overcome the gravitational pull on this incline? (CO4, K3)

**Answer:**
Given:
Total Mass (M) = 2500 kg
Gradability = 15%
This means tan(theta) = 0.15. For small angles, sin(theta) ≈ 0.15.
Acceleration due to gravity (g) ≈ 9.81 m/s²

Minimum tractive force to overcome gravity = M * g * sin(theta)
Force = 2500 kg * 9.81 m/s² * 0.15
Force ≈ 3678.75 N

The motor must provide at least this much force, plus additional force to overcome rolling resistance and aerodynamic drag, to successfully climb the incline.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
