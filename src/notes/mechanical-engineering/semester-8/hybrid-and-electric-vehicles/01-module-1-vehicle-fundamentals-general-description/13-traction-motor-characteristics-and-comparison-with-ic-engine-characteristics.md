---
title: "Traction motor characteristics and comparison with IC engine characteristics."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464428"
status: "completed"
scrapedAt: "2026-05-20T18:20:34.902Z"
---
# HYBRID AND ELECTRIC VEHICLES - MODULE 1: VEHICLE FUNDAMENTALS – GENERAL DESCRIPTION

## TOPIC: TRACTION MOTOR CHARACTERISTICS AND COMPARISON WITH IC ENGINE CHARACTERISTICS

---

### 1. INTRODUCTION

This topic delves into the fundamental characteristics of electric traction motors used in electric and hybrid vehicles and contrasts them with the well-established characteristics of internal combustion (IC) engines. Understanding these differences is crucial for appreciating the design, performance, and operational advantages and disadvantages of electric and hybrid powertrains. This aligns with **CO1** (Explain the general architecture of Electric vehicles) and **CO3** (Describe various motors and drives of Electric vehicles).

---

### 2. TRACTION MOTOR CHARACTERISTICS

Traction motors are the heart of electric vehicle (EV) propulsion. Their performance is defined by how they deliver torque and speed under varying conditions.

#### 2.1. Torque-Speed Characteristics

*   **Definition:** The torque-speed characteristic is a graphical representation showing the torque produced by a motor at different speeds. This is a critical factor in determining a vehicle's acceleration and ability to overcome resistance.
*   **Key Features:**
    *   **Constant Torque Region (Low Speed):** Most electric motors, particularly DC motors and induction motors with appropriate control, can produce near-constant maximum torque from zero speed up to a certain base speed. This provides excellent low-speed acceleration and hill-climbing capability.
        *   *Example:* A DC motor or a permanent magnet synchronous motor (PMSM) can deliver high starting torque, allowing an EV to accelerate quickly from a standstill.
    *   **Constant Power Region (High Speed):** Beyond the base speed, the motor's torque typically decreases as speed increases, often following a "constant power" envelope. This means the motor can deliver increasing speed, but the rate of increase in torque diminishes.
        *   *Example:* As an EV gains speed, the motor might maintain a consistent power output, allowing it to reach higher top speeds, though the acceleration might feel less intense.
    *   **Peak Torque:** The maximum torque the motor can deliver, usually available at low speeds.
    *   **Base Speed:** The speed at which the constant torque region ends and the constant power region begins.
    *   **Maximum Speed:** The highest speed at which the motor can operate safely and effectively.

*   **Textbook Reference:**
    *   **Husain (2010):** Discusses the fundamental torque-speed curves of various motor types (DC, AC induction, PMSM) and their implications for vehicle performance.
    *   **Ehsani, Gao, Gay, Emadi (2018):** Provides detailed analysis of torque-speed characteristics for different EV motor technologies, including their limitations and control strategies.
    *   **Larminie & Lowry (2012):** Explains how motor design and control influence the torque-speed curve and how this relates to driving feel and efficiency.

#### 2.2. Efficiency Characteristics

*   **Definition:** Efficiency is the ratio of mechanical output power to electrical input power. It indicates how effectively the motor converts electrical energy into mechanical work, with the remainder lost as heat and other forms of energy.
*   **Key Features:**
    *   **High Peak Efficiency:** Electric motors, especially modern designs like PMSMs, can achieve very high peak efficiencies (often 90% or more).
    *   **Broad Efficiency Band:** A significant advantage of electric motors is their ability to maintain high efficiency over a wide range of speeds and torques, particularly in the typical operating conditions of a vehicle.
    *   **Efficiency Droop at Low Loads and High Speeds:** Efficiency can decrease at very low torque demands or at extremely high speeds due to increased copper losses (I²R losses) and iron losses.

*   **Textbook Reference:**
    *   **Husain (2010):** Analyzes the sources of losses in electric motors (copper losses, iron losses, friction and windage losses) and their impact on efficiency curves.
    *   **Larminie & Lowry (2012):** Presents efficiency maps for different motor types, showing how efficiency varies with speed and torque.

#### 2.3. Power Density and Torque Density

*   **Definition:**
    *   **Power Density:** The ratio of the motor's continuous power output to its volume or weight. A higher power density means a smaller and lighter motor for a given power output.
    *   **Torque Density:** The ratio of the motor's continuous torque output to its volume or weight. A higher torque density means a motor can produce more torque for its size and weight.
*   **Significance:** These metrics are crucial for vehicle design, as they impact overall vehicle weight, packaging space, and handling.
*   **Key Trends:**
    *   Permanent Magnet Synchronous Motors (PMSMs) generally offer superior power and torque density compared to induction motors and brushed DC motors, making them a popular choice for modern EVs.
    *   Advancements in motor materials (e.g., high-energy magnets, improved electrical steels) and cooling techniques are continuously improving power and torque density.

*   **Textbook Reference:**
    *   **Ehsani, Gao, Gay, Emadi (2018):** Compares the power and torque densities of various motor technologies and discusses factors influencing them.
    *   **Husain (2010):** Provides detailed calculations and comparisons of power and torque densities for different motor types.

#### 2.4. Motor Types and Their Characteristics

*   **Brushed DC Motors:**
    *   **Characteristics:** Simple construction, good starting torque, but require brushes which wear out and need maintenance. Torque-speed characteristic is roughly linear.
    *   **Usage:** Primarily used in early EVs and for auxiliary functions.
*   **Brushless DC (BLDC) Motors:**
    *   **Characteristics:** Electronically commutated, no brushes, higher efficiency, better reliability, and longer lifespan than brushed DC. Good torque-speed characteristics.
    *   **Usage:** Increasingly common in hybrid and electric vehicles, especially for smaller EVs or auxiliary systems.
*   **AC Induction Motors (ACIM):**
    *   **Characteristics:** Robust, reliable, cost-effective, and can be controlled to offer good torque-speed characteristics. Do not require permanent magnets.
    *   **Usage:** Widely used in many EVs, including some from major manufacturers.
*   **Permanent Magnet Synchronous Motors (PMSM):**
    *   **Characteristics:** High efficiency, high torque density, excellent power density, smooth operation, and precise control. Require permanent magnets, which can be expensive and have supply chain considerations.
    *   **Usage:** The dominant motor technology in many modern high-performance EVs.

*   **Textbook Reference:**
    *   **Larminie & Lowry (2012):** Provides a comprehensive overview of the operating principles and characteristics of each motor type relevant to EV propulsion.
    *   **Ehsani, Gao, Gay, Emadi (2018):** Offers in-depth comparisons of their performance, cost, and suitability for different EV applications.

---

### 3. INTERNAL COMBUSTION (IC) ENGINE CHARACTERISTICS

IC engines have been the workhorse of the automotive industry for over a century. Understanding their characteristics is key to appreciating why EVs and HEVs offer a different driving experience and operational profile.

#### 3.1. Torque-Speed Characteristics

*   **Definition:** Similar to electric motors, this describes the torque output at different engine speeds.
*   **Key Features:**
    *   **Limited Torque at Low Speeds:** IC engines produce very little torque at very low RPM. They require a minimum speed to operate and produce useful power.
    *   **Narrow Torque Band:** The peak torque is typically available over a relatively narrow RPM range.
    *   **Power Peak Follows Torque Peak:** Engine power generally continues to increase beyond the torque peak, but at a decreasing rate.
    *   **Requires Transmission:** To utilize the engine's power effectively across the wide range of vehicle speeds, a multi-speed transmission (manual or automatic) is essential. The transmission continuously adjusts the engine's RPM relative to the vehicle's speed.

*   **Textbook Reference:**
    *   **Husain (2010):** Explains the torque-speed curves of gasoline and diesel engines, highlighting the need for transmissions.
    *   **Ehsani, Gao, Gay, Emadi (2018):** Discusses how the torque-speed characteristics of IC engines influence vehicle acceleration and overall performance, and how transmissions overcome these limitations.

#### 3.2. Efficiency Characteristics

*   **Definition:** The ratio of useful mechanical output power to the energy contained in the fuel.
*   **Key Features:**
    *   **Narrow Efficiency Band:** IC engines achieve their highest efficiency only within a relatively small range of speed and load conditions.
    *   **Low Efficiency at Low Loads/Speeds:** When an IC engine is idling or operating at low loads (e.g., cruising at low speed), its efficiency is significantly lower, and it produces more emissions relative to the work done.
    *   **Idling Losses:** Even when not providing propulsion, an idling engine consumes fuel and generates emissions.
    *   **Complex Emission Control Systems:** Modern IC engines require sophisticated catalytic converters and other systems to meet stringent emission standards, which can also impact efficiency.

*   **Textbook Reference:**
    *   **Larminie & Lowry (2012):** Compares the efficiency maps of IC engines with those of electric motors, highlighting the broader operating range of EV efficiency.
    *   **Husain (2010):** Details the thermodynamic cycles and loss mechanisms in IC engines that contribute to their lower and more constrained efficiency.

#### 3.3. Power Density and Torque Density

*   **Definition:** Similar to motors, but referring to the engine's output power/torque relative to its size/weight.
*   **Key Features:**
    *   **Generally Lower:** Compared to modern electric motors, IC engines typically have lower power and torque density. This means a larger and heavier engine is needed for a given power output.
    *   **Inclusion of Ancillary Systems:** The power and weight of the engine also need to account for its associated systems like the gearbox, exhaust system, cooling system, fuel system, etc., which further increases the overall powertrain weight.

*   **Textbook Reference:**
    *   **Ehsani, Gao, Gay, Emadi (2018):** Provides comparative data on power and torque densities of IC engines versus electric motors.

---

### 4. COMPARISON: TRACTION MOTOR VS. IC ENGINE

| Feature                      | Traction Motor (EV/HEV)                                    | Internal Combustion Engine (ICE)                                | Implications for Vehicles                                                                                                                                                                                                                                                                                                |
| :--------------------------- | :--------------------------------------------------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Torque-Speed Curve**       | **High and constant torque from zero speed**; then constant power. | **Low torque at low speeds**; peak torque in a narrow RPM band. | **EVs:** Instantaneous acceleration, smooth and powerful from standstill, often requires simpler transmissions (or none). **ICEs:** Require multi-speed transmissions to keep the engine in its efficient RPM range; acceleration from standstill is less immediate.                                           |
| **Efficiency**               | **High peak efficiency (90%+)**, efficient over a **wide operating range**. | **Lower peak efficiency (30-40%)**, efficient only in a **narrow operating range**. | **EVs:** Higher energy efficiency leads to longer range and lower energy costs per mile. Less waste heat. **ICEs:** Less efficient, more energy wasted as heat and exhaust gases, leading to higher fuel consumption and emissions.                                                                         |
| **Power Density/Torque Density** | **High**, enabling smaller and lighter powertrains.         | **Lower**, requiring larger and heavier powertrains.             | **EVs:** Potential for lighter vehicles, better packaging, improved handling, and more space for batteries or passengers. **ICEs:** Contribute significantly to vehicle weight and size.                                                                                                                      |
| **Responsiveness/Control**   | **Instantaneous and precise control** of torque and speed.   | **Slight delay** due to throttle response, combustion process, and transmission. | **EVs:** Quick and nimble response to driver input. **ICEs:** Can feel less direct, especially with automatic transmissions.                                                                                                                                                                             |
| **Noise and Vibration**      | **Very low noise and vibration**.                          | **Significant noise and vibration** inherent to combustion process. | **EVs:** Quieter and smoother ride, leading to improved passenger comfort. **ICEs:** Contribute to road noise and vibration.                                                                                                                                                                               |
| **Emissions (Tailpipe)**     | **Zero tailpipe emissions**.                               | **Produces tailpipe emissions** (CO2, NOx, particulates, etc.).   | **EVs:** Environmentally friendly at the point of use, contributing to cleaner urban air quality. **ICEs:** Contribute to air pollution and greenhouse gas emissions.                                                                                                                                     |
| **Maintenance**              | **Fewer moving parts**, lower maintenance (e.g., no oil changes, spark plugs). | **More moving parts**, requires regular maintenance (oil changes, filters, spark plugs, exhaust system). | **EVs:** Lower running costs due to reduced maintenance. **ICEs:** Higher maintenance costs and more frequent servicing.                                                                                                                                                                                    |
| **Energy Source**            | **Electricity** stored in batteries.                       | **Fossil fuels** (gasoline, diesel).                             | **EVs:** Dependence on charging infrastructure and battery technology. **ICEs:** Dependence on fuel availability and price volatility.                                                                                                                                                                     |

*   **Textbook Reference:**
    *   **Denton (2020):** Provides a comparative analysis of powertrain architectures, including detailed comparisons of motor and engine characteristics.
    *   **Ehsani, Gao, Gay, Emadi (2018):** Offers comprehensive comparative tables and discussions on the advantages and disadvantages of electric traction motors versus IC engines for automotive applications.

---

### 5. PRACTICE QUESTIONS AND ANSWERS

**Question 1:** Describe the typical torque-speed characteristic of an electric traction motor and contrast it with that of an internal combustion engine. What are the advantages of the electric motor's characteristic for vehicle performance?

**Answer 1:**
An electric traction motor typically exhibits a **constant torque** region from zero speed up to its base speed, followed by a **constant power** region where torque decreases as speed increases.
In contrast, an internal combustion engine has very **low torque at low speeds**, a **narrow peak torque band**, and requires a transmission to operate effectively across different vehicle speeds.
The advantage of the electric motor's characteristic for vehicle performance is its **instantaneous and high torque delivery from standstill**, enabling excellent acceleration from a stop and strong performance during climbing. This often allows for simpler or no multi-speed transmissions compared to IC engines.

**Question 2:** Which type of electric motor generally offers the highest power and torque density? Briefly explain why this is important for electric vehicle design.

**Answer 2:**
Permanent Magnet Synchronous Motors (PMSMs) generally offer the highest power and torque density among common electric traction motor types.
This is important for electric vehicle design because higher power and torque density mean that a motor can produce the required propulsion force using a **smaller and lighter unit**. This contributes to overall vehicle weight reduction, improved packaging space (allowing for larger batteries or more passenger/cargo room), and potentially better vehicle dynamics and efficiency.

**Question 3:** Discuss the efficiency characteristics of electric traction motors and IC engines, highlighting the key differences and their impact.

**Answer 3:**
Electric traction motors typically boast **high peak efficiencies (often exceeding 90%)** and maintain high efficiency over a **wide range of operating speeds and torques**.
Internal combustion engines, on the other hand, have **lower peak efficiencies (around 30-40%)** and are only efficient within a **narrow band of specific speed and load conditions**. They are particularly inefficient at low loads and during idling.
The impact of these differences is significant: EVs with their efficient motors can travel further on less energy, have lower running costs, and produce less waste heat. IC engines' inefficiency leads to higher fuel consumption, greater heat generation, and more emissions relative to the work performed.

---

### 6. IMPORTANT POINTS TO REMEMBER

*   **Instant Torque:** Electric motors deliver maximum torque from zero RPM, unlike IC engines which need to rev up.
*   **Broad Efficiency Range:** EVs are efficient across a wider operating envelope than ICE vehicles.
*   **Power/Torque Density Matters:** Higher density means lighter and smaller powertrains, crucial for vehicle design.
*   **PMSMs Lead in Density:** Permanent Magnet Synchronous Motors are favoured for their high power and torque density.
*   **Transmissions:** EVs often require simpler transmissions due to the motor's characteristics, while ICEs rely on complex multi-speed transmissions.
*   **Zero Tailpipe Emissions:** A key advantage of electric traction motors.

---

### 7. ALIGNMENT WITH COURSE OUTCOMES

*   **CO1: Explain the general architecture of Electric vehicles.**
    *   This topic contributes by detailing a core component of the EV powertrain – the traction motor, and its functional characteristics which dictate powertrain architecture choices.
*   **CO3: Describe various motors and drives of Electric vehicles.**
    *   This topic directly addresses the characteristics of various traction motor types (DC, BLDC, ACIM, PMSM) and their performance attributes (torque-speed, efficiency, density).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. FURTHER READING (Refer to listed textbooks)

*   **Husain (2010):** Chapters on motor performance and characteristics.
*   **Ehsani, Gao, Gay, Emadi (2018):** Chapters covering traction motor types, performance, and comparisons with ICE.
*   **Larminie & Lowry (2012):** Sections dedicated to motor characteristics, efficiency maps, and comparative analyses.
*   **Denton (2020):** Comparative chapters on powertrain technologies.

---