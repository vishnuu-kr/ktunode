---
title: "architecture"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 1: Vehicle fundamentals – general description"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446442a"
status: "completed"
scrapedAt: "2026-05-20T18:20:36.308Z"
---
# HYBRID AND ELECTRIC VEHICLES - Module 1: Vehicle Fundamentals – General Description

## Topic: Architecture

### Course Outcomes Addressed:

*   **CO1:** Explain the general architecture of Electric vehicles. (Knowledge Level: K2)
*   **CO2:** Describe various battery, charging types and battery management of Electric vehicles. (Knowledge Level: K2)
*   **CO3:** Describe various motors and drives of Electric vehicles. (Knowledge Level: K2)
*   **CO4:** Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (Knowledge Level: K3)

---

### 1. Introduction to Electric Vehicle (EV) Architecture

This section introduces the fundamental building blocks and their arrangement that constitute an Electric Vehicle (EV). Understanding the architecture is crucial for comprehending how EVs function, their advantages, and their limitations compared to traditional Internal Combustion Engine (ICE) vehicles.

**Key Concept:** The architecture of an EV is centered around the electric powertrain, which replaces the ICE, transmission, and fuel system of a conventional vehicle.

**Definition:** **Electric Vehicle (EV) Architecture** refers to the arrangement and interconnection of the major electrical and mechanical components that enable propulsion and operation of an electric vehicle.

**Reference:**
*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press. (Chapter 1: Introduction to Electric and Hybrid Vehicles)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapter 1: Introduction to Electric and Hybrid Vehicles)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapter 1: Introduction)

---

### 2. Core Components of an Electric Vehicle Powertrain

The EV powertrain is a system designed to convert stored electrical energy into mechanical energy to drive the vehicle's wheels. It consists of several key components that work in harmony.

**2.1. Energy Storage System (Battery Pack)**

*   **Function:** Stores the electrical energy that powers the vehicle. It is the "fuel tank" of an EV.
*   **Key Concept:** The battery pack is typically composed of many individual cells connected in series and parallel to achieve the desired voltage and capacity.
*   **Characteristics:**
    *   **Voltage:** Determines the electrical potential available for the system.
    *   **Capacity (Ampere-hours, Ah):** Represents the total charge the battery can deliver.
    *   **Energy Density (Wh/kg or Wh/L):** How much energy can be stored per unit weight or volume. Higher energy density means longer range for the same battery size.
    *   **Power Density (W/kg or W/L):** How much power the battery can deliver. Important for acceleration.
    *   **Cycle Life:** The number of charge-discharge cycles a battery can undergo before its capacity degrades significantly.
    *   **State of Charge (SoC):** The current level of charge in the battery.
    *   **State of Health (SoH):** An indicator of the battery's overall condition and remaining lifespan.
*   **Common Technologies:**
    *   **Lithium-ion (Li-ion):** The most prevalent technology due to its high energy density, good power density, and long cycle life. Variations include Lithium Cobalt Oxide (LCO), Lithium Manganese Oxide (LMO), Lithium Nickel Manganese Cobalt Oxide (NMC), Lithium Nickel Cobalt Aluminum Oxide (NCA), Lithium Iron Phosphate (LFP).
    *   **Nickel-Metal Hydride (NiMH):** Used in earlier hybrid vehicles, less common in pure EVs now due to lower energy density compared to Li-ion.
*   **Important Point:** Battery pack design is a critical factor in EV performance, range, and cost.

**Reference:**
*   Dhameja, S. (2001). *Electric Vehicle Battery Systems*. Newnes. (Chapter 2: Battery Types and Characteristics)
*   Ehsani et al. (2018), Chapter 4: Battery Technology
*   Husain (2010), Chapter 4: Battery Technologies

**2.2. Electric Motor(s)**

*   **Function:** Converts electrical energy from the battery into mechanical rotational energy to drive the wheels.
*   **Key Concept:** EVs can have one or more electric motors, strategically placed for optimal performance and efficiency.
*   **Types:**
    *   **Permanent Magnet Synchronous Motors (PMSM):** High efficiency, excellent power density, widely used in modern EVs.
    *   **AC Induction Motors (ACIM):** Robust, cost-effective, and good performance, often used in Tesla vehicles.
    *   **Switched Reluctance Motors (SRM):** Simple construction, robust, but can be noisy and require complex control.
    *   **Brushless DC Motors (BLDC):** Offer good efficiency and controllability.
*   **Important Point:** The type of motor significantly impacts the vehicle's acceleration, top speed, and energy efficiency.

**Reference:**
*   Ehsani et al. (2018), Chapter 5: Electric Motors and Drives
*   Larminie & Lowry (2012), Chapter 3: Electric Motors
*   Husain (2010), Chapter 5: Electric Motors

**2.3. Power Electronics Controller (Inverter/Converter)**

*   **Function:** Manages the flow of electrical power between the battery and the motor. It converts DC power from the battery into AC power for the motor (inverter) and can also control the motor's speed and torque. It can also convert AC to DC for charging the battery (rectifier).
*   **Key Concept:** This component is crucial for controlling the vehicle's speed, acceleration, and regenerative braking.
*   **Components:**
    *   **Inverter:** Converts DC to AC (for AC motors).
    *   **Converter (DC-DC):** Steps up or down voltage for different loads (e.g., powering auxiliary systems like lights, infotainment).
*   **Important Point:** Efficient power electronics are vital for maximizing range and performance.

**Reference:**
*   Ehsani et al. (2018), Chapter 6: Power Electronic Converters and Motor Drives
*   Husain (2010), Chapter 6: Power Electronics
*   Larminie & Lowry (2012), Chapter 4: Power Electronics

**2.4. Drivetrain/Transmission**

*   **Function:** Transmits the mechanical power from the motor to the wheels.
*   **Key Concept:** Unlike ICE vehicles with multi-gear transmissions, EVs often utilize single-speed gearboxes or simpler multi-speed transmissions due to the wide operating speed and torque range of electric motors.
*   **Types:**
    *   **Single-Speed Transmission:** Most common in EVs. Provides a fixed gear ratio, offering simplicity and efficiency.
    *   **Two-Speed Transmission:** Found in some high-performance EVs (e.g., early Porsche Taycan) to optimize efficiency at different speeds.
    *   **Differential:** Distributes torque to the wheels, enabling them to rotate at different speeds during turns.
*   **Important Point:** The transmission system in EVs is significantly simpler and lighter than in ICE vehicles.

**Reference:**
*   Ehsani et al. (2018), Chapter 7: Drivetrain Components
*   Denton (2020), Chapter 5: Transmission Systems
*   Husain (2010), Chapter 7: Drivetrain

**2.5. On-Board Charger (OBC)**

*   **Function:** Converts the incoming AC power from the charging station into DC power to charge the battery pack.
*   **Key Concept:** The OBC's power rating (kW) determines how quickly the vehicle can charge from an AC source.
*   **Important Point:** The OBC is an integral part of the EV for AC charging.

**Reference:**
*   Ehsani et al. (2018), Chapter 9: Electric Vehicle Charging Systems
*   Larminie & Lowry (2012), Chapter 6: Charging of Electric Vehicles

**2.6. Battery Management System (BMS)**

*   **Function:** Monitors and manages the battery pack to ensure its safety, performance, and longevity.
*   **Key Concept:** The BMS is the "brain" of the battery pack, constantly assessing critical parameters.
*   **Key Functions:**
    *   **State of Charge (SoC) estimation:** Determines how much energy is remaining.
    *   **State of Health (SoH) estimation:** Assesses the battery's overall condition and degradation.
    *   **Cell balancing:** Ensures all cells in the pack have similar voltage levels, maximizing pack capacity and lifespan.
    *   **Temperature monitoring and management:** Prevents overheating or overcooling, which can damage the battery.
    *   **Overcharge/over-discharge protection:** Prevents damage from exceeding voltage limits.
    *   **Fault detection and diagnosis:** Identifies and reports any issues within the battery pack.
*   **Important Point:** A sophisticated BMS is crucial for the safe and efficient operation of modern EVs.

**Reference:**
*   Dhameja, S. (2001). *Electric Vehicle Battery Systems*. Newnes. (Chapter 5: Battery Management Systems)
*   Ehsani et al. (2018), Chapter 4: Battery Technology (specifically BMS aspects)
*   Husain (2010), Chapter 4: Battery Technologies (specifically BMS aspects)

---

### 3. Different EV Architectures (Series, Parallel, Series-Parallel)

EV architectures can be broadly categorized based on how the electric motor(s) and the power source are integrated. While this module focuses on general EV architecture, understanding these variations is important for context.

**3.1. Battery Electric Vehicle (BEV) Architecture**

*   **Description:** The simplest EV architecture. It relies solely on a battery pack to store energy and one or more electric motors for propulsion. There is no internal combustion engine.
*   **Components:** Battery Pack, Electric Motor(s), Power Electronics Controller, Drivetrain, On-Board Charger.
*   **Operation:** Energy from the battery is converted by the power electronics and delivered to the motor(s), which drive the wheels. Regenerative braking recaptures energy during deceleration.
*   **Example:** Tesla Model 3, Nissan Leaf, Chevrolet Bolt.
*   **CO1 Alignment:** Explains the fundamental architecture of BEVs.

**3.2. Hybrid Electric Vehicle (HEV) Architectures (for context, as they share EV components)**

While the focus is on EVs, understanding HEV architectures helps appreciate the integration of electric components.

*   **Series Hybrid Architecture:**
    *   **Description:** The ICE acts solely as a generator to produce electricity for the battery or to power the electric motor directly. The ICE is NOT mechanically connected to the wheels.
    *   **Components:** ICE, Generator, Battery Pack, Electric Motor(s), Power Electronics, Drivetrain.
    *   **Operation:** ICE -> Generator -> Battery/Motor -> Wheels.
    *   **Example:** BMW i3 (Range Extender variant), Chevrolet Volt (first generation).
    *   **CO1 Alignment:** Shows how EV components can be integrated with other power sources.

*   **Parallel Hybrid Architecture:**
    *   **Description:** Both the ICE and the electric motor can independently or jointly drive the wheels.
    *   **Components:** ICE, Clutch, Electric Motor, Battery Pack, Power Electronics, Drivetrain.
    *   **Operation:** ICE directly drives wheels OR Motor directly drives wheels OR ICE + Motor drive wheels.
    *   **Example:** Honda Insight (early models), Ford Escape Hybrid.
    *   **CO1 Alignment:** Demonstrates alternative power flow paths involving electric motors.

*   **Series-Parallel (or Power-Split) Hybrid Architecture:**
    *   **Description:** Combines features of series and parallel architectures. A power-split device (e.g., planetary gearset) allows for flexible power flow. Both ICE and electric motor can drive the wheels, and the ICE can also act as a generator.
    *   **Components:** ICE, Planetary Gearset (Power-Split Device), Generator, Electric Motor, Battery Pack, Power Electronics, Drivetrain.
    *   **Operation:** Highly flexible, allowing for various combinations of power delivery.
    *   **Example:** Toyota Prius.
    *   **CO1 Alignment:** Illustrates complex integration of electric powertrain components.

**Important Point:** Modern EVs (BEVs) are the purest form of electric vehicle architecture, focusing solely on battery power.

---

### 4. EV Charging Architectures

Charging is a critical aspect of EV operation. Understanding charging architectures involves how energy is supplied to the battery.

**4.1. AC Charging (Level 1 & Level 2)**

*   **Description:** Uses the vehicle's On-Board Charger (OBC) to convert AC power from the grid to DC power for the battery.
*   **Level 1:**
    *   **Source:** Standard household 120V AC outlet.
    *   **Power:** Low (typically 1-2 kW).
    *   **Charging Speed:** Slow, overnight charging.
    *   **Connector:** Standard household plug.
*   **Level 2:**
    *   **Source:** 240V AC (household or commercial).
    *   **Power:** Moderate (typically 3-19 kW).
    *   **Charging Speed:** Faster than Level 1, suitable for home or workplace charging.
    *   **Connector:** J1772 (North America), Type 2 (Europe).
*   **CO2 Alignment:** Describes AC charging types.

**4.2. DC Fast Charging (Level 3)**

*   **Description:** Bypasses the vehicle's OBC. External DC chargers convert AC power to DC power directly and supply it to the battery.
*   **Source:** High-power AC grid connection.
*   **Power:** High (typically 50 kW to 350 kW and above).
*   **Charging Speed:** Very fast, adding significant range in minutes.
*   **Connector:** CCS (Combined Charging System), CHAdeMO, NACS (Tesla's proprietary, now becoming more open).
*   **CO2 Alignment:** Describes DC charging types.

**Important Point:** The choice of charging infrastructure significantly impacts the user experience and practicality of owning an EV.

---

### 5. Power Transmission and Drivetrain Architecture

This section focuses on how the mechanical power generated by the electric motor is delivered to the wheels.

**5.1. Motor-to-Wheel Connection**

*   **Direct Drive:** In some very simple EVs or specific applications, the motor might be directly coupled to the wheel (e.g., in-wheel motors). This is less common in mainstream passenger cars.
*   **Single-Speed Transmission:**
    *   **Mechanism:** A reduction gear (e.g., spur gears, planetary gears) connects the motor to the differential. This gear reduction increases torque at the wheels and reduces the motor speed.
    *   **Advantages:** Simple, lightweight, reliable, cost-effective.
    *   **Example:** Most mass-produced EVs like Nissan Leaf, Tesla Model 3 (rear motor), Chevrolet Bolt.
*   **Multi-Speed Transmission:**
    *   **Mechanism:** Similar to ICE transmissions but typically with fewer gears (e.g., 2-speed). Allows the motor to operate more efficiently across a wider range of vehicle speeds.
    *   **Advantages:** Potentially improved efficiency and performance at different speed ranges.
    *   **Disadvantages:** Increased complexity, weight, and cost.
    *   **Example:** Porsche Taycan (2-speed rear transmission), some Lucid Air models.
*   **Differential:**
    *   **Function:** Allows the drive wheels to rotate at different speeds when turning, preventing tire scrubbing and improving handling.
    *   **Types:** Open differential, limited-slip differential (LSD), electronic differential (torque vectoring).
*   **CO4 Alignment:** Explains details of power transmission and selection criteria.

**5.2. Drivetrain Layouts**

*   **Front-Wheel Drive (FWD):** Motor and transmission are located at the front, driving the front wheels.
    *   **Advantages:** Space-efficient, simpler drivetrain.
    *   **Disadvantages:** Can lead to torque steer under acceleration, less ideal weight distribution for performance.
*   **Rear-Wheel Drive (RWD):** Motor and transmission are located at the rear, driving the rear wheels.
    *   **Advantages:** Better weight distribution, good handling characteristics, less torque steer.
    *   **Disadvantages:** Can be less space-efficient, potential for oversteer.
*   **All-Wheel Drive (AWD):**
    *   **Description:** Utilizes two or more motors (or one motor with a sophisticated transfer case) to drive all four wheels. Typically, a motor on the front axle and a motor on the rear axle.
    *   **Advantages:** Excellent traction, stability, and performance in various conditions.
    *   **Disadvantages:** More complex, heavier, potentially reduced efficiency due to increased drivetrain losses.
    *   **Example:** Tesla Model S/X, Audi e-tron, Ford Mustang Mach-E.
*   **CO4 Alignment:** Explains different drivetrain configurations.

**Selection Criteria for Drivetrain Components (CO4 - K3):**

When selecting components for a specific EV drivetrain, several factors must be considered:

*   **Vehicle Performance Requirements:**
    *   **Acceleration:** Requires high motor torque and efficient power delivery. AWD systems generally provide better acceleration.
    *   **Top Speed:** Influenced by motor power and gear ratios.
    *   **Handling:** Achieved through weight distribution and AWD capabilities.
*   **Range and Efficiency:**
    *   **Motor Efficiency:** PMSMs are generally more efficient than ACIMs.
    *   **Drivetrain Losses:** Simpler, single-speed transmissions and optimized AWD systems minimize losses.
    *   **Regenerative Braking Efficiency:** How effectively the motor can act as a generator to recapture energy.
*   **Cost:**
    *   **Motor Type:** ACIMs are often cheaper than PMSMs.
    *   **Transmission Complexity:** Single-speed is cheaper than multi-speed.
    *   **Number of Motors:** AWD configurations with dual motors are more expensive.
*   **Weight and Packaging:**
    *   **Motor Size:** High-power motors can be bulky.
    *   **Battery Pack Size:** Impacts overall vehicle weight and available space.
    *   **Transmission Design:** Single-speed transmissions are lighter and more compact.
*   **Reliability and Durability:**
    *   **Motor Type:** Robustness of motor technology.
    *   **Gearbox Durability:** Simpler designs often offer better reliability.

**Example Scenario (CO4 - K3):**

*   **Requirement:** Design a compact, efficient city car focused on affordability and good range.
    *   **Drivetrain Selection:** A **front-wheel-drive (FWD) layout** with a **single-speed transmission** and a **Permanent Magnet Synchronous Motor (PMSM)** would be a suitable choice.
    *   **Justification:** FWD is space-efficient for a city car. Single-speed transmission is simple, lightweight, and cost-effective. PMSM offers high efficiency, crucial for maximizing range in urban driving cycles.
*   **Requirement:** Design a high-performance SUV with strong towing capacity and all-weather capability.
    *   **Drivetrain Selection:** An **all-wheel-drive (AWD) layout** with **two powerful motors** (one front, one rear) and potentially a **two-speed transmission** on the rear axle might be considered.
    *   **Justification:** AWD provides superior traction and stability for an SUV. Dual motors offer high power output for performance and towing. A two-speed transmission could optimize efficiency at both low-speed towing and higher highway speeds.

---

### 6. General EV Architecture Diagram

A typical BEV architecture can be visualized as follows:

```
+---------------------+      +---------------------+      +---------------------+
|     Battery Pack    |----->| Power Electronics   |----->|    Electric Motor   |
| (Energy Storage)    |      | (Inverter/Converter)|      | (Propulsion)        |
+---------------------+      +---------------------+      +---------------------+
        ^                                                        |
        |                                                        |
        | (DC Charging)                                          V
+---------------------+                                +---------------------+
| On-Board Charger    |                                |     Drivetrain      |
| (AC to DC)          |                                | (Gears, Axles, Diff)|
+---------------------+                                +---------------------+
                                                                     |
                                                                     V
                                                                +----------+
                                                                |  Wheels  |
                                                                +----------+

+---------------------+
| Battery Management  |
| System (BMS)        | <------------------------------------------+
| (Monitoring & Control)|
+---------------------+
```

**Key:**
*   **Arrows:** Indicate the direction of power flow.
*   **BMS:** Interacts with the battery pack and the power electronics controller to manage operations.

---

### 7. Important Points to Remember

*   **Central Role of the Battery:** The battery pack is the most critical and often the most expensive component of an EV.
*   **Simplicity of the Powertrain:** EVs have fewer moving parts compared to ICE vehicles, leading to potentially lower maintenance.
*   **Importance of Power Electronics:** The inverter and converter are vital for controlling motor speed, torque, and energy flow.
*   **Regenerative Braking:** A key feature where the electric motor acts as a generator to recapture energy during deceleration, improving efficiency and range.
*   **BMS is Crucial:** A sophisticated BMS is essential for battery safety, performance, and longevity.
*   **Modular Design:** Many EVs utilize modular battery packs and powertrains, allowing for variations in range and performance.
*   **Therma l Management:** Effective thermal management systems are required for both the battery pack and the power electronics to ensure optimal performance and lifespan.

---

### 8. Practice Questions

**Question 1 (CO1):**
Describe the fundamental difference in architecture between a Battery Electric Vehicle (BEV) and a conventional Internal Combustion Engine (ICE) vehicle.

**Answer:**
A BEV's architecture is centered around an electric powertrain, utilizing a battery pack as the energy source and electric motor(s) for propulsion. It eliminates the ICE, fuel tank, exhaust system, and traditional multi-gear transmission. In contrast, an ICE vehicle relies on an ICE for power generation, a fuel system for storing gasoline/diesel, and a complex transmission to transfer power to the wheels.

**Question 2 (CO2):**
List and briefly explain three key functions of a Battery Management System (BMS) in an electric vehicle.

**Answer:**
1.  **State of Charge (SoC) Estimation:** Determines the remaining energy level in the battery, crucial for range prediction.
2.  **Cell Balancing:** Ensures that all individual cells within the battery pack have similar voltage levels, maximizing overall pack capacity and lifespan.
3.  **Temperature Monitoring and Management:** Tracks battery temperature and can control cooling/heating systems to prevent damage from extreme temperatures.

**Question 3 (CO3):**
Name two common types of electric motors used in EVs and mention one advantage of each.

**Answer:**
1.  **Permanent Magnet Synchronous Motor (PMSM):** Advantage: High efficiency and excellent power density.
2.  **AC Induction Motor (ACIM):** Advantage: Robust construction and cost-effectiveness.

**Question 4 (CO4):**
Consider a scenario where you need to design an electric vehicle for a delivery service that operates primarily in urban environments with frequent stops and starts. What drivetrain layout and transmission type would you recommend and why?

**Answer:**
For a delivery service operating in urban environments with frequent stops and starts, a **front-wheel-drive (FWD) layout** with a **single-speed transmission** would be recommended.
*   **FWD:** Offers good packaging efficiency, which is valuable for maximizing cargo space in a delivery vehicle, and its simpler design can contribute to lower manufacturing costs.
*   **Single-speed transmission:** The wide torque band of electric motors makes multi-speed transmissions often unnecessary in urban driving. A single-speed transmission is simpler, lighter, more reliable, and cost-effective, aligning well with the needs of a commercial vehicle focused on operational efficiency. The frequent braking in urban settings also means ample opportunity for regenerative braking, making the simpler drivetrain more efficient overall.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
