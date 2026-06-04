---
title: "rolling resistance"
subject: "ELECTRIC VEHICLES"
module: "Module 1: Conventional Vehicles : Basics of vehicle performance"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3629b"
status: "completed"
scrapedAt: "2026-05-23T16:21:26.203Z"
---
# Module 1: Conventional Vehicles - Basics of Vehicle Performance
## Topic: Rolling Resistance

---

### 1. Introduction to Rolling Resistance

Rolling resistance is a fundamental force that opposes the motion of a vehicle as its wheels roll over a surface. Understanding rolling resistance is crucial for analyzing vehicle performance, energy consumption, and optimizing powertrain design, both in conventional and electric vehicles.

**Definition:** Rolling resistance is the force resisting the motion when a body (such as a wheel) rolls on a surface. It is primarily caused by the deformation of both the rolling body and the surface it rolls on.

**Relevance to Electric Vehicles (EVs):**
*   **Energy Efficiency:** Reducing rolling resistance directly translates to lower energy consumption, extending the range of EVs. EVs are highly sensitive to efficiency due to battery limitations.
*   **Tire Selection:** Choosing appropriate tires with low rolling resistance is a key design consideration for EV manufacturers.
*   **Drivetrain Design:** Understanding how rolling resistance impacts overall vehicle performance informs the selection and sizing of motors, power electronics, and gearboxes.

---

### 2. Causes of Rolling Resistance

Rolling resistance arises from several physical phenomena, mainly related to energy dissipation during the rolling process.

*   **Hysteresis Losses (Deformation):**
    *   **Wheel Deformation:** As a wheel rolls, its contact patch deforms. The tire material, particularly the rubber, undergoes compression and expansion. Due to the viscoelastic nature of rubber, energy is lost as heat during these deformation cycles. This is often referred to as **"internal friction"** within the tire.
    *   **Surface Deformation:** The surface on which the wheel rolls also deforms. Softer surfaces (like asphalt or gravel) experience more significant deformation than harder surfaces (like concrete). This deformation also dissipates energy.

*   **Adhesion Forces:**
    *   At the molecular level, there can be temporary bonds formed between the tire and the road surface in the contact patch. Breaking these bonds requires energy, contributing to rolling resistance. This effect is more pronounced on smooth surfaces.

*   **Interlocking of Surfaces:**
    *   On rougher surfaces, the irregularities of the surface can interlock with the tire tread, requiring additional force to overcome.

*   **Aerodynamic Drag:** While often considered separately, aerodynamic drag can be influenced by tire design and rotation, but the primary component of rolling resistance is mechanical.

---

### 3. Mathematical Modeling of Rolling Resistance

Rolling resistance ($F_r$) is typically modeled as a force that opposes the direction of motion.

*   **Force Proportional to Normal Force:** A widely accepted empirical model states that rolling resistance is directly proportional to the normal force ($F_n$) acting on the wheel.

    $F_r = C_{rr} \cdot F_n$

    Where:
    *   $F_r$ is the rolling resistance force.
    *   $C_{rr}$ is the **coefficient of rolling resistance**. This is a dimensionless quantity that depends on the tire, the surface, and the operating conditions.
    *   $F_n$ is the normal force, which for a horizontal surface is equal to the vehicle's weight on that wheel.

*   **Weight (Normal Force):**
    *   For a vehicle with total mass $m$, the weight is $W = m \cdot g$, where $g$ is the acceleration due to gravity.
    *   If the vehicle weight is distributed evenly among four wheels, the normal force per wheel is $F_n = W/4 = (m \cdot g) / 4$.

*   **Rolling Resistance Torque:** In some contexts, it's useful to think of rolling resistance as a torque that must be overcome by the driving torque of the wheel.

*   **Power Loss due to Rolling Resistance:** The power dissipated by rolling resistance is given by:

    $P_{rr} = F_r \cdot v = C_{rr} \cdot F_n \cdot v$

    Where $v$ is the vehicle's velocity.

---

### 4. Coefficient of Rolling Resistance ($C_{rr}$)

The coefficient of rolling resistance is the key parameter in the rolling resistance model. It's not a constant and varies significantly with several factors.

**Factors Affecting $C_{rr}$:**

*   **Tire Construction and Material:**
    *   **Tire Pressure:** Higher tire pressure generally leads to lower rolling resistance because it reduces tire deformation.
    *   **Tire Construction:** Radial tires typically have lower $C_{rr}$ than bias-ply tires.
    *   **Tread Compound:** The rubber compound used in the tire significantly impacts hysteresis. Tires designed for low rolling resistance often use silica-based compounds.
    *   **Tire Size and Profile:** Wider tires and lower-profile tires can sometimes increase rolling resistance.

*   **Road Surface:**
    *   **Hard, Smooth Surfaces (e.g., Concrete, Dry Asphalt):** Lower $C_{rr}$.
    *   **Softer Surfaces (e.g., Wet Asphalt, Gravel, Mud):** Higher $C_{rr}$.
    *   **Uneven Surfaces:** Higher $C_{rr}$ due to increased deformation and interlocking.

*   **Vehicle Load (Normal Force):**
    *   While the force $F_r$ is proportional to $F_n$, the coefficient $C_{rr}$ can change slightly with load. Typically, $C_{rr}$ may decrease slightly with increasing load up to a certain point.

*   **Tire Slip Angle and Camber:**
    *   When a wheel is not rolling straight (slip angle) or is tilted (camber), rolling resistance increases.

*   **Speed:**
    *   At very low speeds, $C_{rr}$ tends to be higher. As speed increases, $C_{rr}$ generally decreases initially, then starts to increase again at higher speeds due to dynamic effects and increased tire temperature.

*   **Temperature:**
    *   Tire temperature affects the viscoelastic properties of the rubber. Higher temperatures can increase deformation and therefore rolling resistance.

**Typical Values of $C_{rr}$:**
*   **Good radial tire on hard, smooth surface:** 0.010 - 0.015
*   **Standard tire on asphalt:** 0.015 - 0.020
*   **Low rolling resistance tire:** 0.007 - 0.010 (often used for EVs)
*   **Tire on gravel:** 0.04 - 0.10
*   **Tire on sand:** 0.10 - 0.20 or higher

---

### 5. Impact of Rolling Resistance on Vehicle Performance

*   **Energy Consumption:** This is the most significant impact. Higher rolling resistance requires more force from the engine or motor, leading to increased fuel or battery energy consumption.
    *   *Example:* A typical passenger car driving at 60 mph might experience rolling resistance forces of around 200-400 N, depending on conditions. This force can account for 20-30% of the total tractive force needed to maintain speed, and a significant portion of the total energy expenditure.

*   **Vehicle Acceleration:** More force is required to overcome rolling resistance during acceleration, impacting the vehicle's ability to reach desired speeds quickly.

*   **Braking:** While rolling resistance is typically considered during propulsion, it also acts as a retarding force during coasting and braking.

*   **Range (for EVs):** Reducing rolling resistance is a direct strategy to increase the driving range of electric vehicles.

---

### 6. Rolling Resistance in Electric Vehicles

EVs are particularly sensitive to rolling resistance due to the limitations of battery energy density and the need to maximize range.

*   **Tire Technology for EVs:**
    *   **Low Rolling Resistance (LRR) Tires:** Manufacturers are increasingly fitting EVs with LRR tires. These tires use specialized tread compounds (e.g., silica-rich), optimized tread patterns, and lighter construction to minimize energy loss.
    *   *Textbook Insight (Chau, 2015):* Chau's "Electric Vehicles Machines and Drives" likely emphasizes tire selection as a critical factor in overall EV efficiency, directly impacting energy consumption from the battery. The book would detail how tire design contributes to reducing hysteresis losses.

*   **Impact on Range:** A reduction in $C_{rr}$ can lead to a noticeable increase in EV range. For example, a 10% reduction in rolling resistance might translate to a 1-2% increase in range, which is significant for an EV.

*   **Design Considerations:**
    *   **Tire Pressure Monitoring Systems (TPMS):** Maintaining optimal tire pressure is crucial for minimizing rolling resistance. EVs often feature advanced TPMS.
    *   **Wheel Design:** Aerodynamic wheel designs can also indirectly reduce overall resistance.
    *   **Vehicle Weight:** Lighter vehicles inherently have less normal force, thus lower rolling resistance force. This is a major driver for lightweight materials in EV construction.

*   **Hybrid Vehicle Perspective (Miller, Mi et al.):**
    *   *Textbook Insight (Miller, 2010; Mi et al., 2011):* Books on hybrid propulsion systems would highlight rolling resistance as a key parameter influencing the energy management strategies and the downsizing of hybrid components (engine and electric motor). For instance, during coasting or regenerative braking, the forces opposing motion, including rolling resistance, are crucial for understanding energy recovery potential.

---

### 7. Practice Questions and Exercises

**Question 1:**
Define rolling resistance and list its primary causes. (Knowledge Level: K2)

**Answer 1:**
Rolling resistance is the force that opposes the motion of a vehicle as its wheels roll over a surface. Its primary causes are hysteresis losses due to the deformation of the tire and the road surface, adhesion forces between the tire and the road, and interlocking of surfaces on rough terrain.

---

**Question 2:**
A 1500 kg electric vehicle is equipped with tires that have a coefficient of rolling resistance ($C_{rr}$) of 0.008 on dry asphalt. If the vehicle is traveling on a level road at a constant speed, calculate the rolling resistance force. Assume $g = 9.81 \, m/s^2$. (Knowledge Level: K3)

**Answer 2:**
*   **Total Vehicle Weight:** $W = m \cdot g = 1500 \, kg \cdot 9.81 \, m/s^2 = 14715 \, N$
*   **Normal Force per Wheel (assuming 4 wheels):** $F_n = W / 4 = 14715 \, N / 4 = 3678.75 \, N$
*   **Rolling Resistance Force per Wheel:** $F_r = C_{rr} \cdot F_n = 0.008 \cdot 3678.75 \, N = 29.43 \, N$
*   **Total Rolling Resistance Force (for all 4 wheels):** $F_{total\_rr} = 4 \cdot F_r = 4 \cdot 29.43 \, N = 117.72 \, N$

The total rolling resistance force is approximately 117.72 N.

---

**Question 3:**
Explain why reducing rolling resistance is particularly important for electric vehicles compared to conventional vehicles. (Knowledge Level: K2)

**Answer 3:**
Reducing rolling resistance is crucial for EVs because it directly impacts their energy consumption and, consequently, their driving range. EVs rely on stored electrical energy in batteries, which have a lower energy density than fossil fuels. Therefore, any reduction in energy losses, such as those due to rolling resistance, leads to a more efficient use of battery power, allowing the vehicle to travel further on a single charge. Conventional vehicles also benefit, but the impact on overall fuel consumption might be less pronounced compared to the direct effect on EV range.

---

**Question 4:**
List three factors that can significantly influence the coefficient of rolling resistance ($C_{rr}$) and describe how they affect it. (Knowledge Level: K2)

**Answer 4:**
1.  **Tire Pressure:** **Higher tire pressure generally leads to lower $C_{rr}$.** This is because higher pressure reduces the deformation of the tire sidewall and tread, minimizing hysteresis losses.
2.  **Road Surface:** **Harder, smoother surfaces (like concrete or dry asphalt) result in lower $C_{rr}$** compared to softer or rougher surfaces (like gravel or wet asphalt). Softer surfaces deform more significantly, leading to greater energy dissipation.
3.  **Tire Compound:** Tires with compounds designed for low rolling resistance (often incorporating silica) have **lower $C_{rr}$**. These compounds are engineered to minimize energy loss (hysteresis) during the tire's deformation cycles.

---

### 8. Important Points to Remember

*   Rolling resistance is a force opposing vehicle motion due to tire and surface deformation.
*   It is generally modeled as $F_r = C_{rr} \cdot F_n$.
*   The coefficient of rolling resistance ($C_{rr}$) is highly dependent on tire pressure, tire construction, road surface, load, speed, and temperature.
*   Lower rolling resistance leads to better fuel economy (conventional vehicles) and increased range (electric vehicles).
*   EVs are particularly sensitive to rolling resistance, making Low Rolling Resistance (LRR) tires a key technology.
*   Maintaining correct tire pressure is one of the simplest ways to minimize rolling resistance.

---

### 9. Alignment with Course Outcomes

*   **CO1: Familiarise the performance of conventional vehicles and electric vehicles (Knowledge Level: K2)**
    *   This topic directly addresses the performance aspect by explaining a key resistive force that affects how vehicles move and consume energy, applicable to both types.
*   **CO3: Discuss the propulsion unit for electric vehicles and selection of drive systems (Knowledge Level: K3)**
    *   Understanding rolling resistance is crucial for selecting appropriate propulsion units and driveline components for EVs. A lower rolling resistance means the propulsion system doesn't need to work as hard, potentially allowing for smaller, lighter, and more efficient motors and gearboxes.

---
