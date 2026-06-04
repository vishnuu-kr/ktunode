---
title: "selection of gear ratio"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446445a"
status: "completed"
scrapedAt: "2026-05-20T18:21:08.798Z"
---
# HYBRID AND ELECTRIC VEHICLES: Module 3 - Electric Propulsion System – Electric Motors

## Topic: Selection of Gear Ratio

This module focuses on the crucial aspect of selecting the appropriate gear ratio for electric propulsion systems, directly impacting vehicle performance, efficiency, and drivability. This topic is particularly relevant to **Course Outcome 4 (CO4)**, which aims to explain power transmission and component selection.

---

### 1. Introduction to Gear Ratios in Electric Vehicles

Electric motors typically operate efficiently within a specific speed range. However, a vehicle requires a wide range of torque and speed to:
*   Start from rest (high torque, low speed).
*   Accelerate (varying torque and speed).
*   Maintain cruising speed (lower torque, higher speed).
*   Climb hills (high torque).

A **gear ratio** acts as a mechanical transformer, bridging the gap between the motor's operating characteristics and the vehicle's dynamic requirements. It allows the motor to operate closer to its optimal efficiency point across various driving conditions while providing the necessary torque and speed at the wheels.

**Key Concepts:**
*   **Gear Ratio (GR):** The ratio of the angular velocity of the input shaft (motor) to the angular velocity of the output shaft (wheels).
    $$GR = \frac{\omega_{motor}}{\omega_{wheel}}$$
    A higher gear ratio means the motor spins faster than the wheels, resulting in higher torque multiplication at the wheels.
*   **Torque Multiplication:** A higher gear ratio amplifies the motor's torque delivered to the wheels.
    $$T_{wheel} = T_{motor} \times GR \times \eta_{gearbox}$$
    where $\eta_{gearbox}$ is the efficiency of the gearbox.
*   **Speed Reduction:** A higher gear ratio also reduces the speed of the wheels relative to the motor speed.

**Reference:** Husain, "Electric and Hybrid Vehicles: Design Fundamentals," discusses the fundamental role of transmissions in matching motor and vehicle characteristics. Ehsani et al., "Modern Electric, Hybrid Electric and Fuel Cell Vehicles," elaborates on the torque-speed characteristics of electric motors and the need for gear reduction. Larminie & Lowry, "Electric Vehicle Technology Explained," also covers the basics of power transmission and the use of gearboxes.

---

### 2. Why Gear Ratios are Necessary for Electric Motors

Electric motors, especially permanent magnet synchronous motors (PMSMs) and induction motors (IMs) commonly used in EVs, have:
*   **Narrower Efficient Speed Range:** Compared to internal combustion engines (ICEs), electric motors have a more limited range where they achieve peak efficiency.
*   **High Torque at Zero Speed:** While a significant advantage, this can lead to excessive current draw and potential overheating if directly connected to the wheels for high-speed operation.
*   **High Rotational Speeds:** Many EV motors are designed to operate at very high RPMs for optimal power density and efficiency.

Without a gear reduction, the vehicle's performance would be severely compromised:
*   **Low Starting Torque:** The wheels would spin too fast relative to the motor's optimal torque-producing speed, resulting in poor acceleration.
*   **Limited Top Speed:** The motor would reach its maximum RPM at a relatively low vehicle speed.
*   **Reduced Efficiency:** The motor would be forced to operate outside its efficient speed range for much of the time.

---

### 3. Types of Transmissions Used in Electric Vehicles

The choice of transmission significantly influences how gear ratios are implemented.

*   **Single-Speed Reduction Gearbox:**
    *   Most common in battery electric vehicles (BEVs).
    *   Uses a fixed gear ratio to reduce motor speed and multiply torque.
    *   Simple, lightweight, and highly efficient.
    *   Example: Nissan Leaf, Tesla Model 3 (rear axle).
    *   **Considerations for selection:** The fixed ratio is a compromise, optimized for typical driving conditions (e.g., a balance between acceleration and cruising efficiency).

*   **Two-Speed or Multi-Speed Transmissions:**
    *   Less common but used in some performance EVs or for specific applications.
    *   Allows for different gear ratios to be selected, providing better optimization across a wider speed range.
    *   Example: Porsche Taycan (rear axle).
    *   **Advantages:** Better acceleration from standstill and higher top speeds.
    *   **Disadvantages:** Increased complexity, weight, and cost.

*   **Continuously Variable Transmissions (CVTs):**
    *   Can be used, but often less efficient than well-designed fixed-ratio gearboxes for EVs.
    *   Allows for infinite gear ratios within a range.
    *   **Considerations:** While theoretically offering optimal efficiency, the mechanical losses in traditional CVTs can outweigh the benefits for EVs compared to optimized single-speed units. Advanced electronically controlled CVTs are being explored.

*   **Direct Drive:**
    *   Involves no gearbox, directly connecting the motor to the wheels.
    *   Requires motors with a very wide torque-speed operating range or integrated in-wheel motors.
    *   Rarely used for mainstream passenger vehicles due to the challenging motor requirements.

**Reference:** Ehsani et al. provide an excellent overview of various transmission types and their applications in EVs. Husain also details the function and importance of reduction gears.

---

### 4. Factors Influencing Gear Ratio Selection

Selecting the optimal gear ratio is a multi-faceted engineering task involving trade-offs.

*   **Motor Characteristics:**
    *   **Maximum Torque ($T_{max}$):** The gear ratio must be low enough to allow the motor to deliver sufficient torque for starting and acceleration without exceeding motor torque limits.
    *   **Maximum Speed ($\omega_{max}$):** The gear ratio must be high enough to prevent the motor from reaching its maximum speed before the vehicle achieves its desired top speed.
    *   **Peak Efficiency Speed ($\omega_{eff}$):** Ideally, the selected gear ratio should allow the motor to operate at or near its peak efficiency speed for typical cruising conditions.
    *   **Power Curve:** Understanding the motor's power output across its speed range is crucial.

*   **Vehicle Performance Requirements:**
    *   **Target Top Speed ($V_{top}$):** Determines the maximum required wheel speed ($\omega_{wheel,max}$) and thus the minimum gear ratio needed.
    *   **Desired Acceleration ($a$):** Dictates the required wheel torque at different speeds.
    *   **Gradeability:** The ability to climb hills requires significant torque, often necessitating a lower gear ratio (higher numerical ratio).
    *   **Drivability:** Smoothness and responsiveness of acceleration.

*   **Wheel and Tire Specifications:**
    *   **Wheel Radius ($R_{wheel}$):** Relates vehicle speed to wheel angular velocity.
        $$V = \omega_{wheel} \times R_{wheel}$$
    *   **Tire Diameter:** Affects the effective wheel radius.
    *   **Tire Slip:** Important for traction-limited acceleration.

*   **Drivetrain Components:**
    *   **Differential Gear Ratio:** Often integrated with the reduction gearbox, this ratio further reduces speed and multiplies torque to the drive shafts. The total reduction is the product of the reduction gearbox ratio and the differential ratio.
    *   **Motor Controller/Inverter Limits:** Limits on motor current and voltage impact achievable torque.

**Reference:** Larminie & Lowry discuss how vehicle dynamics influence transmission selection. Husain and Ehsani et al. both delve into the interplay between motor capabilities and vehicle performance requirements when determining gear ratios.

---

### 5. Calculating and Optimizing the Gear Ratio

The selection process typically involves an iterative approach, balancing various design parameters.

**Steps:**

1.  **Determine Target Vehicle Speed and Wheel Speed:**
    *   Calculate the maximum required wheel speed ($\omega_{wheel,max}$) based on the target top speed ($V_{top}$) and wheel radius ($R_{wheel}$).
        $$\omega_{wheel,max} = \frac{V_{top}}{R_{wheel}}$$
    *   Convert units consistently (e.g., m/s for speed, rad/s for angular velocity, m for radius).

2.  **Determine Motor Speed Range:**
    *   Identify the motor's maximum operating speed ($\omega_{motor,max}$) and its typical efficient operating speed range.

3.  **Calculate Minimum Gear Ratio for Top Speed:**
    *   To achieve the top speed, the motor speed should not exceed its maximum at the maximum wheel speed.
        $$GR_{min} = \frac{\omega_{motor,max}}{\omega_{wheel,max}}$$
    *   This ratio ensures the motor doesn't redline.

4.  **Calculate Required Torque for Acceleration and Gradeability:**
    *   Determine the maximum torque required at the wheels ($T_{wheel,max}$) for:
        *   **Starting from rest:** This is often the most critical. It depends on the vehicle's mass ($m$), desired acceleration ($a$), rolling resistance, and aerodynamic drag.
        *   **Climbing a grade ($\theta$):** The torque needed to overcome gravity is $T_{grade} = m \cdot g \cdot \sin(\theta) \cdot R_{wheel}$.
    *   The required motor torque ($T_{motor}$) is then calculated using the *inverse* of the gear ratio formula, considering gearbox efficiency ($\eta_{gb}$).
        $$T_{motor} = \frac{T_{wheel}}{GR \times \eta_{gb}}$$

5.  **Calculate Maximum Gear Ratio for Starting Torque:**
    *   To provide the necessary starting torque at the wheels, the gear ratio must be sufficiently high to allow the motor to operate at a speed where it can produce enough torque.
        $$GR_{max} = \frac{T_{motor, max} \times GR \times \eta_{gb}}{T_{wheel, required}}$$
    *   Rearranging, we get:
        $$GR_{max} = \frac{T_{motor, max} \times \eta_{gb}}{T_{wheel, required}}$$
    *   This calculation gives the *minimum* required motor torque for a given wheel torque requirement.

6.  **Select a Compromise Gear Ratio:**
    *   The selected gear ratio ($GR_{selected}$) must satisfy both $GR_{min}$ (for top speed) and $GR_{max}$ (for acceleration/gradeability) conditions.
    *   A common approach is to select a ratio that allows the motor to operate near its peak efficiency speed during typical cruising conditions while still providing adequate torque for acceleration.
    *   Often, the **reduction ratio of the gearbox is combined with a differential ratio**. For example, a 10:1 gearbox ratio combined with a 3:1 differential ratio results in an overall reduction of 30:1.

**Example Calculation:**

Consider a small electric vehicle with the following specifications:
*   Motor Maximum Speed ($\omega_{motor,max}$): 10,000 RPM = 1047 rad/s
*   Motor Maximum Torque ($T_{motor, max}$): 150 Nm
*   Target Top Speed ($V_{top}$): 120 km/h = 33.3 m/s
*   Wheel Radius ($R_{wheel}$): 0.3 m
*   Gearbox Efficiency ($\eta_{gb}$): 95% (0.95)
*   Desired Starting Acceleration: To be determined for torque calculation.

**Step 1 & 2:**
*   $\omega_{wheel,max} = \frac{33.3 \text{ m/s}}{0.3 \text{ m}} = 111 \text{ rad/s}$ (approx. 1060 RPM)

**Step 3 (Minimum Gear Ratio for Top Speed):**
*   $GR_{min} = \frac{\omega_{motor,max}}{\omega_{wheel,max}} = \frac{1047 \text{ rad/s}}{111 \text{ rad/s}} \approx 9.43$

**Step 4 & 5 (Maximum Gear Ratio for Starting Torque):**
Let's assume a required wheel torque ($T_{wheel,req}$) of 1000 Nm at the wheels to start from rest.
*   $GR_{max} = \frac{T_{motor, max} \times \eta_{gb}}{T_{wheel, req}} = \frac{150 \text{ Nm} \times 0.95}{1000 \text{ Nm}} \approx 0.142$

**Wait, something is wrong here.** The calculation for $GR_{max}$ needs to be approached correctly. We want to find the gear ratio that *enables* the motor to provide the required torque.

Let's rephrase Step 5: **Determine the required motor torque at a given motor speed to achieve required wheel torque, and then find the gear ratio.**

Assume the motor achieves its maximum torque of 150 Nm at 2000 RPM (209.4 rad/s).
If we need 1000 Nm at the wheels:
*   The gear ratio must be such that: $T_{motor} \times GR \times \eta_{gb} = T_{wheel}$
*   $150 \text{ Nm} \times GR \times 0.95 = 1000 \text{ Nm}$
*   $GR = \frac{1000 \text{ Nm}}{150 \text{ Nm} \times 0.95} \approx 7.02$

This implies that a gear ratio of **at least 7.02** is needed to provide 1000 Nm of wheel torque if the motor produces 150 Nm at a suitable speed and the gearbox is 95% efficient.

**Step 6 (Selection):**
We need a gear ratio that is **at least 7.02** for starting torque and **at least 9.43** for top speed.
This means our target gear ratio must be **at least 9.43**.

**Refined Example Scenario:**
Let's say the motor's efficiency is highest around 6000 RPM (628 rad/s).
If we choose a gear ratio of **9.5**:
*   At $V_{top}$ (111 rad/s wheel speed): Motor speed = $111 \text{ rad/s} \times 9.5 = 1054.5 \text{ rad/s}$ (approx. 10070 RPM). This is within the motor's max speed of 10,000 RPM (let's adjust $V_{top}$ slightly or motor max speed).
    *   Let's assume motor max speed is 10,500 RPM (1099.6 rad/s). Then $GR_{min} = 1099.6 / 111 \approx 9.9$.
    *   So, if we choose $GR = 10$, motor speed at $V_{top}$ = $111 \times 10 = 1110$ rad/s (10600 RPM), which is acceptable.

*   At $V_{start}$ (low speed, high torque): If we select $GR=10$, and the motor operates at 2000 RPM (209.4 rad/s) producing 150 Nm:
    *   Wheel Torque = $150 \text{ Nm} \times 10 \times 0.95 = 1425 \text{ Nm}$. This is sufficient for starting torque.
    *   At this motor speed (2000 RPM) and $GR=10$, the wheel speed is $2000 \text{ RPM} / 10 = 200 \text{ RPM}$ (approx. 20.9 rad/s).
    *   Vehicle speed = $20.9 \text{ rad/s} \times 0.3 \text{ m} = 6.27 \text{ m/s} \approx 22.6 \text{ km/h}$.

*   Cruising speed (e.g., 80 km/h = 22.2 m/s):
    *   Wheel speed = $22.2 \text{ m/s} / 0.3 \text{ m} = 74 \text{ rad/s}$ (approx. 707 RPM).
    *   Motor speed = $74 \text{ rad/s} \times 10 = 740 \text{ rad/s}$ (approx. 7070 RPM).
    *   This motor speed (7070 RPM) is higher than the assumed peak efficiency speed of 6000 RPM, but likely still within an acceptable range for good efficiency.

**Therefore, a gear ratio of around 10:1 (or a total reduction ratio of 10:1, potentially split between a gearbox and differential) would be a reasonable starting point for this example.**

**Important Note:** This is a simplified calculation. Detailed selection involves simulating vehicle performance across the entire speed range, considering rolling resistance, aerodynamic drag, tire slip, and motor efficiency maps.

**Reference:** Husain and Ehsani et al. provide the foundational equations and methodologies for these calculations.

---

### 6. Impact of Gear Ratio on Vehicle Performance and Efficiency

*   **Acceleration:**
    *   **Higher Gear Ratio (e.g., 10:1):** Provides more torque multiplication at the wheels, leading to stronger initial acceleration.
    *   **Lower Gear Ratio (e.g., 5:1):** Provides less torque multiplication, resulting in weaker initial acceleration but higher potential top speed with the same motor.

*   **Top Speed:**
    *   **Higher Gear Ratio:** Limits the vehicle's top speed as the motor will reach its maximum RPM at a lower vehicle speed.
    *   **Lower Gear Ratio:** Allows for a higher top speed.

*   **Cruising Efficiency:**
    *   The gear ratio should ideally place the motor in its most efficient operating region at typical cruising speeds. An inappropriate ratio can force the motor to operate at lower efficiency, reducing the vehicle's range.

*   **Drivability:**
    *   A well-chosen gear ratio ensures smooth power delivery and responsive acceleration without the need for frequent gear changes (in single-speed systems).

*   **Component Stress:**
    *   Very high gear ratios can lead to high torques within the gearbox and driveshaft components, requiring them to be robustly designed.
    *   Extremely low gear ratios might put excessive strain on the motor if it has to operate at high loads for extended periods.

**Reference:** Denton, "Electric and Hybrid Vehicles," discusses the practical implications of gear ratio selection on overall vehicle performance and range.

---

### 7. Practice Questions and Answers

**Question 1:**
A BEV uses a motor with a maximum speed of 12,000 RPM and a maximum torque of 200 Nm. The vehicle has a target top speed of 150 km/h. The wheel radius is 0.35 m. Assuming a single-speed reduction gearbox with an efficiency of 96%, what is the *minimum* gear ratio required to achieve the top speed?

**Answer 1:**
*   Convert top speed to m/s: 150 km/h = $150 \times \frac{1000}{3600}$ m/s = 41.67 m/s
*   Convert motor max speed to rad/s: 12,000 RPM = $12000 \times \frac{2\pi}{60}$ rad/s = 1256.6 rad/s
*   Calculate max wheel speed: $\omega_{wheel,max} = \frac{V_{top}}{R_{wheel}} = \frac{41.67 \text{ m/s}}{0.35 \text{ m}} = 119.06 \text{ rad/s}$
*   Calculate minimum gear ratio: $GR_{min} = \frac{\omega_{motor,max}}{\omega_{wheel,max}} = \frac{1256.6 \text{ rad/s}}{119.06 \text{ rad/s}} \approx 10.55$
*   **Minimum Gear Ratio (approx.): 10.55:1**

**Question 2:**
Using the motor from Question 1, if a gear ratio of 9:1 is chosen, what is the maximum torque that can be delivered at the wheels, assuming the motor operates at its peak torque of 200 Nm?

**Answer 2:**
*   Wheel Torque ($T_{wheel}$) = Motor Torque ($T_{motor}$) × Gear Ratio ($GR$) × Gearbox Efficiency ($\eta_{gb}$)
*   $T_{wheel} = 200 \text{ Nm} \times 9 \times 0.96$
*   $T_{wheel} = 1728 \text{ Nm}$
*   **Maximum Wheel Torque: 1728 Nm**

**Question 3:**
A vehicle requires 800 Nm of torque at the wheels to climb a steep hill. The motor can deliver 180 Nm at 4000 RPM (418.9 rad/s). If the gearbox efficiency is 95%, what is the *minimum* gear ratio required for this hill climb?

**Answer 3:**
*   We know $T_{wheel} = T_{motor} \times GR \times \eta_{gb}$
*   We need to solve for GR: $GR = \frac{T_{wheel}}{T_{motor} \times \eta_{gb}}$
*   $GR = \frac{800 \text{ Nm}}{180 \text{ Nm} \times 0.95}$
*   $GR = \frac{800}{171} \approx 4.68$
*   **Minimum Gear Ratio for Hill Climb: 4.68:1**

---

### 8. Important Points to Remember

*   **Gear ratio is a critical design parameter** for electric propulsion systems, bridging the gap between motor and vehicle performance.
*   It dictates the **trade-off between acceleration and top speed**.
*   The primary goal is to keep the motor operating within its **optimal efficiency range** for common driving conditions.
*   **Single-speed reduction gearboxes** are prevalent in BEVs due to their simplicity, low weight, and high efficiency.
*   Calculations involve matching the motor's **speed and torque capabilities** with the vehicle's **speed and torque requirements**.
*   **Gearbox efficiency** must always be considered in torque calculations.
*   **Total reduction ratio** includes any differential gearing.
*   The selection process is an **optimization problem** with multiple competing factors.

---

### 9. Connecting to Course Outcomes

*   **CO1: Explain the general architecture of Electric vehicles.** Understanding the gear ratio selection is part of understanding the power transmission architecture, connecting the motor to the wheels.
*   **CO3: Describe various motors and drives of Electric vehicles.** The motor's characteristics (speed-torque curve, efficiency map) are fundamental inputs to the gear ratio selection process.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** This topic directly addresses CO4 by detailing the function of gear reduction in power transmission and providing the methodology for selecting the gear ratio based on vehicle and motor requirements.

---
This concludes the study notes for the selection of gear ratio in electric propulsion systems. Remember to refer to the provided textbooks for more in-depth understanding and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
