---
title: "EV motor sizing – need of gearbox."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446445c"
status: "completed"
scrapedAt: "2026-05-20T18:21:10.214Z"
---
# HYBRID AND ELECTRIC VEHICLES - Module 3: Electric Propulsion System – Electric Motors

## Topic: EV Motor Sizing – Need of Gearbox

This module focuses on the electric motors used in Electric Vehicles (EVs), their characteristics, and how they are integrated into the powertrain. Specifically, this topic addresses the crucial aspects of EV motor sizing and the essential role of gearboxes in the electric propulsion system.

---

### 1. Introduction to EV Motor Sizing

EV motor sizing involves selecting an electric motor that can meet the vehicle's performance requirements, such as acceleration, top speed, and gradeability, while operating efficiently and within its thermal limits. This process is critical for optimizing the vehicle's range, performance, and cost.

**Key Concepts:**

*   **Torque:** The rotational force produced by the motor. It's crucial for accelerating the vehicle from rest and overcoming resistive forces.
*   **Speed (RPM):** The rotational speed of the motor shaft.
*   **Power:** The rate at which the motor can do work, calculated as Power = Torque × Speed.
*   **Continuous Power:** The power a motor can deliver for an extended period without overheating.
*   **Peak Power:** The maximum power a motor can deliver for a short duration (e.g., during acceleration).
*   **Torque-Speed Characteristics:** The relationship between the torque a motor can produce and its rotational speed. Each motor type has a unique torque-speed curve.

**Importance of Sizing:**

*   **Performance:** An undersized motor will lead to poor acceleration and inability to reach desired speeds or climb grades. An oversized motor can be inefficient, heavier, and more expensive.
*   **Efficiency:** Motors operate most efficiently within a specific speed and torque range. Proper sizing ensures the motor spends a significant portion of its operating time in its high-efficiency region, improving the vehicle's range.
*   **Thermal Management:** Motors generate heat due to electrical resistance and mechanical friction. Sizing must consider the motor's thermal capacity to prevent overheating and damage.
*   **Cost and Weight:** Larger, more powerful motors are generally heavier and more expensive. Optimal sizing balances performance needs with cost and weight considerations.

**Textbook Reference:**

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*.** This textbook delves into the fundamental principles of motor sizing, including the calculation of required torque and power based on vehicle dynamics.
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*.** Provides detailed methods for determining motor sizing based on vehicle performance targets and efficiency considerations.

**Course Outcome Alignment:**

*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. Motor sizing is a fundamental aspect of selecting powertrain components.

---

### 2. Understanding Electric Motor Characteristics Relevant to Sizing

Different types of electric motors have distinct torque-speed characteristics, which significantly influence their suitability for EV applications and the need for a gearbox.

**Key Motor Types and Their Characteristics:**

*   **DC Series Motors:**
    *   **Characteristics:** High starting torque, torque decreases as speed increases.
    *   **Suitability:** Good for initial acceleration but not ideal for high-speed cruising due to poor speed regulation.
    *   **Gearbox Need:** Often requires a gearbox to operate efficiently across a wide speed range.

*   **DC Shunt Motors:**
    *   **Characteristics:** Relatively constant torque over a speed range, but lower starting torque compared to series motors.
    *   **Suitability:** Better speed regulation than series motors.
    *   **Gearbox Need:** May still benefit from a gearbox for optimal efficiency across the entire speed spectrum.

*   **Permanent Magnet Synchronous Motors (PMSMs):**
    *   **Characteristics:** High efficiency, high torque density, excellent speed control, constant torque capability over a wide speed range (up to base speed), then field weakening for higher speeds.
    *   **Suitability:** Very popular in modern EVs due to their efficiency and performance.
    *   **Gearbox Need:** While capable of high-speed operation, a gearbox is often still used to match the motor's optimal operating speed to the vehicle's required wheel speed range.

*   **Induction Motors (AC Squirrel Cage Motors):**
    *   **Characteristics:** Robust, reliable, cost-effective, good torque at lower speeds. Torque-speed curve is typically characterized by a peak torque at a certain slip frequency.
    *   **Suitability:** Widely used in EVs, especially in earlier models and some current ones.
    *   **Gearbox Need:** A gearbox is almost always used to optimize the motor's operating speed for efficiency and to achieve the required wheel torque.

**Important Point to Remember:**
The **torque-speed curve** of an electric motor dictates its performance. A flat torque curve is desirable for good acceleration across a wide speed range. However, most electric motors have a torque that drops off at higher speeds.

**Textbook Reference:**

*   **Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*.** This book provides detailed comparisons of different motor types and their torque-speed characteristics, which are fundamental to understanding sizing and gearbox requirements.
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*.** Chapter 3 specifically covers motor types and their performance curves.

**Course Outcome Alignment:**

*   **CO3 (K2):** Describe various motors and drives of Electric vehicles. Understanding motor characteristics is key to this outcome.
*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. Motor characteristics directly influence gearbox selection.

---

### 3. The Need for a Gearbox in Electric Vehicle Powertrains

Electric motors generally have a relatively narrow optimal operating speed range for maximum efficiency and torque delivery. Vehicles, however, require a wide range of speeds and torques to handle acceleration, cruising, and climbing hills. This mismatch is where the gearbox plays a crucial role.

**Reasons for Using a Gearbox:**

1.  **Bridging the Torque-Speed Mismatch:**
    *   Electric motors typically produce maximum torque at low speeds and their torque decreases as speed increases.
    *   Vehicles require high torque at low speeds for acceleration and climbing, and lower torque at high speeds for cruising.
    *   A gearbox, with its fixed gear ratios, can multiply the torque from the motor and reduce the motor speed relative to the wheel speed.

    **Example:**
    Imagine a PMSM that operates most efficiently between 2,000 and 8,000 RPM. A typical EV might need to accelerate from 0 to 60 mph (approximately 100 km/h). Without a gearbox, the motor would either have to produce very high torque at low speeds (potentially outside its efficient range) or operate at very high RPMs to achieve highway speeds. A single-speed reduction gearbox allows the motor to operate within its efficient band while providing sufficient torque to the wheels for both acceleration and cruising.

2.  **Optimizing Motor Efficiency:**
    *   By selecting an appropriate gear ratio, the gearbox ensures that the electric motor operates closer to its peak efficiency point for most driving conditions (e.g., city driving, highway cruising). This directly contributes to improved vehicle range.

3.  **Reducing Motor Size and Cost:**
    *   If a gearbox were not used, a motor would need to be designed to produce the required torque and speed across the entire vehicle operating range. This would likely result in a larger, heavier, and more expensive motor, potentially operating less efficiently for a significant portion of the time.

4.  **Achieving Higher Vehicle Speeds:**
    *   Electric motors have a maximum safe operating speed. A gearbox with a higher gear ratio (lower output speed for a given input speed) allows the vehicle to reach higher speeds without over-speeding the motor.

5.  **Providing Reverse Gear:**
    *   Most electric motors are bidirectional, but a simple gearbox can be designed to provide a reverse gear by reversing the direction of rotation of the output shaft.

**Textbook Reference:**

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*.** Chapter 5 discusses the transmission system, including the role of gearboxes in matching motor characteristics to vehicle requirements.
*   **Denton, T. (2020). *Electric and Hybrid Vehicles*.** This reference provides practical insights into transmission design for EVs and the necessity of gearboxes.

**Course Outcome Alignment:**

*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. This is the core of this section.

---

### 4. Types of Gearboxes Used in EVs

While many EVs use a single-speed reduction gearbox, multi-speed gearboxes are also employed.

**Types of Gearboxes:**

1.  **Single-Speed Reduction Gearbox:**
    *   **Description:** The most common type. It consists of a simple gear train that reduces the motor's rotational speed and increases torque.
    *   **Advantages:** Simple, lightweight, compact, cost-effective, reliable.
    *   **Disadvantages:** Limits the motor's operating efficiency window, may not provide optimal torque for all driving conditions (e.g., very steep hills at low speeds).
    *   **Examples:** Tesla Model S (until recently), Nissan Leaf, Chevrolet Bolt EV.

    **Example:**
    If the motor operates at 8,000 RPM and the desired wheel speed for cruising is 500 RPM, a reduction ratio of 16:1 would be needed (8000 / 500 = 16). This would multiply the motor's torque by 16 (minus efficiency losses).

2.  **Two-Speed Gearbox:**
    *   **Description:** Offers two distinct gear ratios. One for low-speed, high-torque applications (like acceleration and climbing) and another for high-speed, efficient cruising.
    *   **Advantages:** Improves efficiency and performance across a wider speed range compared to single-speed gearboxes.
    *   **Disadvantages:** More complex, heavier, and expensive than single-speed gearboxes.
    *   **Examples:** Porsche Taycan, Audi e-tron GT.

    **Example:**
    A two-speed gearbox might have a 10:1 ratio for acceleration and a 5:1 ratio for cruising. This allows the motor to operate at a lower, more efficient speed for highway driving while still providing the strong torque needed for initial acceleration.

3.  **Continuously Variable Transmission (CVT) - Less Common in EVs:**
    *   **Description:** While often associated with internal combustion engines, some EV concepts and niche applications might explore CVTs. They provide an infinite range of gear ratios.
    *   **Advantages:** Theoretically offers the highest potential for matching motor speed to optimal efficiency.
    *   **Disadvantages:** Mechanical complexity, potential for reduced efficiency due to friction, often perceived as less engaging by drivers. Electric motor control is often precise enough to negate the need for mechanical CVTs.

**Important Point to Remember:**
The choice of gearbox depends on the desired performance, efficiency targets, and cost constraints of the EV. Single-speed gearboxes are the current industry standard for most mainstream EVs due to their balance of benefits.

**Textbook Reference:**

*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*.** Chapter 7 discusses transmissions and drivetrain components, including multi-speed gearboxes.

**Course Outcome Alignment:**

*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. This section directly addresses the types of components used.

---

### 5. EV Motor Sizing and Gearbox Interaction - A Holistic Approach

Sizing the electric motor and selecting the gearbox are intertwined processes. The requirements placed on the motor are heavily influenced by the gearbox.

**Key Considerations for Sizing and Gearbox Interaction:**

*   **Peak Torque Requirement:** The gearbox multiplies the motor's peak torque. If a very high peak torque is needed for acceleration, either the motor must be oversized, or a gearbox with a higher reduction ratio is required.
*   **Continuous Torque Requirement:** The motor must be able to sustain the continuous torque required for steady-state operation (e.g., climbing a moderate grade at a specific speed) without overheating. The gearbox's reduction ratio affects the motor speed at which this continuous torque is delivered.
*   **Maximum Speed Requirement:** The motor's maximum speed rating and the gearbox's highest gear ratio must be compatible to achieve the vehicle's top speed without over-speeding the motor.
*   **Motor Efficiency Map:** The motor's efficiency varies significantly with speed and torque. The gearbox ratio should be chosen to place the most common operating points (e.g., highway cruising) within the motor's high-efficiency region.
*   **Inverter Limitations:** The inverter that controls the motor also has limitations on voltage and current, which indirectly affect the motor's power output.
*   **Thermal Limits:** The motor's continuous power rating is often limited by its ability to dissipate heat. The gearbox allows the motor to operate at speeds where its torque-speed curve is favorable, thereby managing heat generation.

**Example:**
A vehicle needs to accelerate from 0 to 100 km/h. The required torque at the wheels is calculated for various speeds. Let's say at 50 km/h, 500 Nm of torque is needed at the wheels.

*   **Scenario 1: Single-speed gearbox with 10:1 reduction.**
    *   The motor needs to produce 50 Nm of torque (500 Nm / 10).
    *   The motor speed will be 10 times the wheel speed. If wheel speed is 1000 RPM at 50 km/h, motor speed is 10,000 RPM.
    *   We need to ensure the motor can provide 50 Nm at 10,000 RPM and that this operating point is within its efficiency range.

*   **Scenario 2: Two-speed gearbox with a lower gear of 15:1 for acceleration.**
    *   At 50 km/h (1000 RPM wheel speed), the motor speed is 15,000 RPM.
    *   The motor needs to produce 33.3 Nm of torque (500 Nm / 15).
    *   This might allow for a smaller motor if it can produce 33.3 Nm at a higher, potentially more efficient speed of 15,000 RPM, compared to the first scenario.

**Important Point to Remember:**
The design of the powertrain is a system-level optimization. Motor sizing and gearbox selection must be considered together to achieve the best balance of performance, efficiency, cost, and weight.

**Textbook Reference:**

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*.** Chapter 5 discusses the integrated approach to selecting motor and transmission components.
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*.** Chapter 6 focuses on vehicle propulsion systems, covering motor-gearbox integration.

**Course Outcome Alignment:**

*   **CO4 (K3):** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. This is the core of this section, emphasizing component interaction.

---

### 6. Practice Questions and Answers

**Question 1:**
Why is a gearbox generally required in electric vehicles even though electric motors can produce high torque at low speeds?

**Answer:**
While electric motors offer good low-speed torque, they typically have a relatively narrow optimal operating speed range for maximum efficiency. Vehicles, however, require a wide range of speeds and torques to cover acceleration, cruising, and climbing hills. A gearbox allows the motor to operate within its efficient speed band for most driving conditions while multiplying the torque to meet the vehicle's demands, thus improving overall efficiency and performance.

**Question 2:**
List three advantages of using a single-speed reduction gearbox in an EV.

**Answer:**
1.  **Simplicity and Reliability:** Fewer moving parts and simpler design lead to higher reliability.
2.  **Lower Cost:** Simpler manufacturing processes and fewer components reduce the overall cost.
3.  **Compactness and Lightweight:** A single-speed gearbox is generally smaller and lighter than multi-speed or more complex transmissions.

**Question 3:**
Which type of electric motor is most commonly used in modern EVs, and what is its typical torque-speed characteristic that necessitates a gearbox?

**Answer:**
The most commonly used motor type in modern EVs is the **Permanent Magnet Synchronous Motor (PMSM)**. Its typical torque-speed characteristic is that it can produce high, constant torque up to a certain "base speed." Beyond the base speed, to increase speed further, the motor utilizes field weakening, which causes the torque to decrease inversely with speed. This fall-off in torque at higher speeds, and the desire to keep the motor operating efficiently across a broad vehicle speed range, is why a gearbox is still beneficial.

**Question 4 (Calculation):**
A vehicle requires 400 Nm of torque at the wheels at a speed of 80 km/h. The electric motor used has a peak torque of 100 Nm and an operating speed of 12,000 RPM at 80 km/h. If a single-speed reduction gearbox is used, what is the required reduction ratio?

**Answer:**
Given:
*   Torque at wheels ($T_{wheel}$) = 400 Nm
*   Motor torque ($T_{motor}$) = 100 Nm

The gear ratio (GR) is the ratio of motor torque to wheel torque (ignoring gearbox efficiency for simplicity in this calculation):
$GR = \frac{T_{wheel}}{T_{motor}}$
$GR = \frac{400 \text{ Nm}}{100 \text{ Nm}}$
$GR = 4$

So, the required reduction ratio is 4:1. This means the motor shaft rotates 4 times for every 1 rotation of the wheel shaft.

**Question 5 (Conceptual):**
How does the choice of a two-speed gearbox potentially improve the efficiency of an EV compared to a single-speed gearbox?

**Answer:**
A two-speed gearbox offers two different reduction ratios. This allows the vehicle to utilize a lower gear (higher reduction ratio) for strong acceleration, keeping the motor in a high-torque, moderate-speed region. For highway cruising, a higher gear (lower reduction ratio) can be engaged, allowing the motor to operate at a lower speed and thus a more efficient point for sustained driving. This flexibility helps keep the motor within its optimal efficiency map for a wider range of driving conditions, leading to improved overall energy consumption and range.

---

### 7. Important Points to Remember

*   **Motor Sizing is a System Design Process:** It's not just about the motor's specifications but how it integrates with the entire powertrain, including the gearbox and battery.
*   **Torque-Speed Curve is Key:** Understanding the motor's torque-speed characteristics is fundamental to determining the need and type of gearbox.
*   **Efficiency is Paramount:** Gearboxes help electric motors operate within their most efficient speed ranges, directly impacting the vehicle's driving range.
*   **Single-Speed is the Norm:** For most EVs, a simple single-speed reduction gearbox offers the best compromise between performance, cost, weight, and complexity.
*   **Trade-offs Exist:** Multi-speed gearboxes can improve performance and efficiency but come with increased complexity, weight, and cost.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and Textual References

*   **Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals*.** (CRC press, 2nd edition) - Chapters 3 & 5.
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design*.** (CRC press, 3rd edition) - Chapters 3, 6 & 7.
*   **Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained*.** (Wiley-Blackwell, 2nd edition) - Chapters 3 & 4.
*   **Denton, T. (2020). *Electric and Hybrid Vehicles*.** (CBS Publishers & Distributors Pvt. Ltd., 2nd edition) - Relevant sections on powertrain and transmission.

---

This comprehensive study note covers the critical aspects of EV motor sizing and the essential role of gearboxes in the electric propulsion system, aligning with the provided learning outcomes and course objectives.