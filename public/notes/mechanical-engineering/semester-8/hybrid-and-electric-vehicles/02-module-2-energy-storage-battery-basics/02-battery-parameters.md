---
title: "battery parameters"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464434"
status: "completed"
scrapedAt: "2026-05-20T18:20:42.460Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 2: Energy Storage – Battery Basics

### Topic: Battery Parameters

---

**Course Outcomes Addressed:**
*   **CO2:** Describe various battery, charging types and battery management of Electric vehicles. (Knowledge Level: K2)

**Learning Outcomes:**
*   Understand fundamental battery parameters relevant to electric vehicle applications.
*   Differentiate between various battery parameter definitions and their significance.
*   Analyze how different battery parameters impact the performance and operation of electric vehicles.

---

### 1. Introduction to Battery Parameters

Batteries are the heart of electric vehicles (EVs), providing the energy to power the electric motor. To effectively design, select, and manage EV battery systems, a thorough understanding of key battery parameters is crucial. These parameters define a battery's performance, longevity, safety, and suitability for automotive applications.

---

### 2. Key Battery Parameters

This section delves into the critical parameters that characterize battery performance. We will draw upon concepts from the specified textbooks to provide a comprehensive overview.

#### 2.1. Voltage (V)

*   **Definition:** Voltage represents the electrical potential difference between the positive and negative terminals of a battery. It is the "push" that drives electric current through a circuit.
*   **Significance in EVs:**
    *   **Motor Performance:** The voltage of the battery pack directly influences the speed and torque characteristics of the electric motor. Higher voltages generally allow for higher motor speeds and can reduce current draw for a given power output, leading to potentially lower resistive losses.
    *   **System Design:** EV powertrains are designed to operate within specific voltage ranges. Different battery chemistries have different nominal voltages per cell.
*   **Types of Voltage:**
    *   **Nominal Voltage:** The average voltage of a cell or battery pack under typical operating conditions. This is often a stated value for a particular chemistry (e.g., 3.7V for Lithium-ion NMC).
    *   **Open-Circuit Voltage (OCV):** The voltage of a battery when no current is flowing. It is a function of the state of charge (SOC) and temperature.
    *   **Under Load Voltage (Voltage Drop):** The voltage of a battery when current is being drawn. It is lower than the OCV due to internal resistance.
*   **Textbook References:**
    *   Husain (2010) discusses voltage as a fundamental property for power delivery in EVs.
    *   Ehsani et al. (2018) highlight the importance of battery voltage for motor selection and system efficiency.
    *   Larminie & Lowry (2012) explain voltage characteristics and their relation to battery state.

#### 2.2. Capacity (Ah)

*   **Definition:** Capacity is the amount of electrical charge a battery can deliver. It is typically measured in Ampere-hours (Ah) or milliAmpere-hours (mAh). One Ampere-hour means the battery can deliver one Ampere of current for one hour.
*   **Significance in EVs:**
    *   **Range:** Battery capacity is a primary determinant of an EV's driving range. A larger capacity battery can store more energy, allowing the vehicle to travel further on a single charge.
    *   **Energy Content:** Capacity is directly related to the total energy stored in the battery, usually expressed in kilowatt-hours (kWh). Energy (Wh) = Nominal Voltage (V) × Capacity (Ah).
*   **Factors Affecting Capacity:**
    *   **Discharge Rate (C-rate):** Capacity can decrease at higher discharge rates (see C-rate section).
    *   **Temperature:** Extreme temperatures can affect the available capacity.
    *   **Age and Cycling:** Over time and with repeated charge/discharge cycles, capacity degrades.
*   **Textbook References:**
    *   Ehsani et al. (2018) dedicate significant attention to capacity as a key metric for EV range.
    *   Larminie & Lowry (2012) explain how capacity dictates the energy storage capability.
    *   Denton (2020) emphasizes capacity for calculating driving range.

#### 2.3. Energy Density (Wh/kg or Wh/L)

*   **Definition:** Energy density is the amount of energy a battery can store per unit of mass (specific energy, Wh/kg) or per unit of volume (volumetric energy density, Wh/L).
*   **Significance in EVs:**
    *   **Vehicle Weight and Space:** High energy density is crucial for EVs to maximize range without excessive weight or bulk. Lighter vehicles are more efficient and offer better performance.
    *   **Packaging:** Volumetric energy density is important for fitting the battery pack into the available chassis space.
*   **Types:**
    *   **Specific Energy (Gravimetric Energy Density):** Energy per unit mass.
    *   **Volumetric Energy Density:** Energy per unit volume.
*   **Textbook References:**
    *   Husain (2010) highlights energy density as a critical factor in EV design for achieving competitive range.
    *   Ehsani et al. (2018) compare the energy densities of different battery chemistries.
    *   Larminie & Lowry (2012) explain the trade-offs between energy density, power density, and cost.

#### 2.4. Power Density (W/kg or W/L)

*   **Definition:** Power density is the rate at which a battery can deliver energy, expressed per unit of mass (specific power, W/kg) or per unit of volume (volumetric power density, W/L).
*   **Significance in EVs:**
    *   **Acceleration and Performance:** High power density is essential for providing the high current required for rapid acceleration, regenerative braking, and overcoming hills.
    *   **Peak Power Demand:** Electric motors often have high peak power demands that the battery must be able to meet.
*   **Trade-offs:** Often, there's a trade-off between energy density and power density. Batteries optimized for high power might have lower energy density, and vice versa.
*   **Textbook References:**
    *   Ehsani et al. (2018) discuss power density in relation to vehicle acceleration and performance.
    *   Larminie & Lowry (2012) analyze the relationship between power density and discharge rate.

#### 2.5. Internal Resistance (R_int)

*   **Definition:** Internal resistance is the opposition to current flow within the battery itself. It arises from the resistance of the electrolyte, electrodes, and interconnections.
*   **Significance in EVs:**
    *   **Voltage Drop:** High internal resistance causes a significant voltage drop when current is drawn, reducing the effective voltage available to the motor.
    *   **Heat Generation:** Power dissipated as heat due to internal resistance ($P_{loss} = I^2 \times R_{int}$) can reduce efficiency and potentially damage the battery if not managed.
    *   **Efficiency:** Lower internal resistance leads to higher efficiency and less wasted energy.
*   **Factors Affecting Internal Resistance:**
    *   **Temperature:** Resistance generally decreases with increasing temperature.
    *   **State of Charge (SOC):** Resistance can vary with SOC.
    *   **Age and Cycling:** Internal resistance tends to increase as the battery ages and undergoes more cycles.
*   **Textbook References:**
    *   Husain (2010) emphasizes the impact of internal resistance on voltage drop and efficiency.
    *   Ehsani et al. (2018) present equivalent circuit models that incorporate internal resistance.
    *   Larminie & Lowry (2012) explain how internal resistance affects battery performance under load.
    *   Dhameja (2001) provides detailed analysis of internal resistance in various battery types.

#### 2.6. C-rate (Current Rate)

*   **Definition:** The C-rate is a measure of the rate at which a battery is discharged or charged relative to its capacity. A 1C rate means the battery is discharged at a current equal to its capacity (e.g., for a 100Ah battery, 1C is 100A). A 0.5C rate would be 50A, and a 2C rate would be 200A.
*   **Significance in EVs:**
    *   **Performance Capabilities:** EV batteries must be able to sustain high C-rates for acceleration and regenerative braking.
    *   **Battery Life:** Very high C-rates can shorten battery life due to increased stress and heat generation.
    *   **Charging Speed:** The C-rate also defines how quickly a battery can be charged.
*   **Example:** A 100Ah battery discharged at 20A is discharging at a 0.2C rate (20A / 100Ah = 0.2C).
*   **Textbook References:**
    *   Ehsani et al. (2018) use C-rate to define discharge and charge currents.
    *   Larminie & Lowry (2012) explain how C-rate affects available capacity and battery life.

#### 2.7. Depth of Discharge (DoD)

*   **Definition:** Depth of Discharge (DoD) is the percentage of the battery's capacity that has been discharged since the last full charge. A 100% DoD means the battery has been completely discharged.
*   **Significance in EVs:**
    *   **Battery Lifespan:** Regularly discharging a battery to very low DoD levels (close to 0%) can significantly reduce its lifespan. Modern Battery Management Systems (BMS) aim to keep the DoD within optimal ranges.
    *   **Usable Capacity:** The maximum usable capacity of a battery is often limited by preventing deep discharges.
*   **Relation to SOC:** DoD is the inverse of SOC. If a battery is at 80% SOC, its DoD is 20%.
*   **Textbook References:**
    *   Ehsani et al. (2018) discuss DoD as a critical factor in battery cycle life.
    *   Larminie & Lowry (2012) explain the impact of DoD on battery degradation.
    *   Dhameja (2001) provides detailed studies on DoD and its effect on various battery chemistries.

#### 2.8. Cycle Life

*   **Definition:** Cycle life is the number of charge-discharge cycles a battery can undergo before its capacity degrades to a specified percentage of its initial capacity (often 80%).
*   **Significance in EVs:**
    *   **Vehicle Longevity:** A longer cycle life means the battery will last longer, reducing the need for premature replacement and contributing to the overall cost-effectiveness and sustainability of the EV.
    *   **Second-life Applications:** Batteries with degraded cycle life in EVs can sometimes be repurposed for less demanding applications (e.g., grid storage).
*   **Factors Affecting Cycle Life:** DoD, C-rate, temperature, charging rate, and depth of discharge.
*   **Textbook References:**
    *   Ehsani et al. (2018) compare cycle lives of different battery chemistries.
    *   Larminie & Lowry (2012) detail the mechanisms of battery degradation and their impact on cycle life.
    *   Dhameja (2001) extensively covers cycle life testing and influencing factors.

#### 2.9. Temperature Range

*   **Definition:** Batteries have specific operating temperature ranges for charging and discharging. Exceeding these limits can lead to performance degradation, reduced lifespan, or safety hazards.
*   **Significance in EVs:**
    *   **Performance Degradation:** Performance (capacity, power) generally decreases at low temperatures and can be severely affected at high temperatures.
    *   **Safety:** Overheating is a significant safety concern for EV batteries.
    *   **Thermal Management:** Effective thermal management systems (cooling and heating) are essential for maintaining batteries within their optimal temperature range.
*   **Textbook References:**
    *   Husain (2010) emphasizes the need for thermal management in EVs due to battery temperature sensitivity.
    *   Ehsani et al. (2018) discuss the impact of temperature on battery performance and lifespan.
    *   Larminie & Lowry (2012) provide insights into battery thermal behavior.

#### 2.10. Efficiency (Round-trip Efficiency)

*   **Definition:** Battery efficiency refers to the ratio of energy delivered by the battery during discharge to the energy supplied to charge it. Round-trip efficiency accounts for both charging and discharging losses.
*   **Significance in EVs:**
    *   **Energy Consumption:** Higher battery efficiency means less energy is lost during charging and discharging, improving the overall energy economy of the vehicle.
    *   **Heat Generation:** Inefficiencies manifest as heat, contributing to thermal management challenges.
*   **Factors Affecting Efficiency:** Internal resistance, charge/discharge rates, temperature, and battery age.
*   **Textbook References:**
    *   Ehsani et al. (2018) analyze the sources of energy loss in battery systems.
    *   Larminie & Lowry (2012) discuss factors influencing battery efficiency.

---

### 3. Relationship Between Parameters and EV Performance

*   **Range:** Primarily determined by **Energy Density (Wh/kg, Wh/L)** and **Capacity (Ah)**.
*   **Acceleration/Performance:** Driven by **Power Density (W/kg, W/L)** and the ability to sustain high **C-rates** without excessive voltage sag or heat.
*   **Lifespan/Durability:** Heavily influenced by **Cycle Life**, **DoD**, operating **Temperature**, and **C-rate**.
*   **Efficiency:** Affected by **Internal Resistance** and overall **Battery Efficiency**.
*   **Vehicle Packaging:** Dictated by **Volumetric Energy Density (Wh/L)**.

---

### 4. Key Points to Remember

*   **Interdependence:** Battery parameters are often interdependent. For example, high discharge rates (C-rate) can reduce usable capacity and increase internal resistance, affecting voltage and efficiency.
*   **Trade-offs:** Battery technology involves numerous trade-offs (e.g., energy density vs. power density, cost vs. performance).
*   **Operating Conditions:** A battery's performance is highly dependent on its operating conditions, especially temperature and charge/discharge rates.
*   **Battery Management System (BMS):** A sophisticated BMS is essential to monitor and manage these parameters to optimize performance, ensure safety, and extend battery life.
*   **EV Design:** The selection and sizing of the battery pack involve balancing these parameters against vehicle requirements, cost, and regulatory standards.

---

### 5. Practice Questions & Exercises

**Question 1 (CO2):**
Explain the difference between energy density and power density, and describe their significance in the context of an electric vehicle's performance.

**Answer:**
*   **Energy Density:** Measures the amount of energy stored per unit mass (specific energy, Wh/kg) or volume (volumetric energy density, Wh/L). It is crucial for determining an EV's driving range, as higher energy density means more energy can be stored in a lighter and smaller package.
*   **Power Density:** Measures the rate at which energy can be delivered per unit mass (specific power, W/kg) or volume (volumetric power density, W/L). It dictates the EV's acceleration capability and ability to handle high power demands, such as during regenerative braking or climbing steep inclines.
*   **Significance:** An EV needs a good balance of both. High energy density is needed for long range, while high power density is needed for good acceleration and dynamic performance.

**Question 2 (CO2):**
A 100 kWh battery pack has a nominal voltage of 400V.
(a) Calculate the total capacity of the battery pack in Ampere-hours (Ah).
(b) If the vehicle draws 100 kW of power, what is the current drawn from the battery pack?
(c) If the internal resistance of the pack is 0.05 ohms, calculate the power loss due to internal resistance.

**Answer:**
(a) Capacity (Ah) = Energy (kWh) / Voltage (kV)
   Capacity = 100 kWh / 0.4 kV = 250 Ah

(b) Power (W) = Voltage (V) × Current (A)
   Current (A) = Power (W) / Voltage (V)
   Current = 100,000 W / 400 V = 250 A

(c) Power Loss ($P_{loss}$) = $I^2 \times R_{int}$
   $P_{loss}$ = $(250 \text{ A})^2 \times 0.05 \text{ }\Omega$
   $P_{loss}$ = $62,500 \text{ A}^2 \times 0.05 \text{ }\Omega$
   $P_{loss}$ = 3125 W = 3.125 kW

**Question 3 (CO2):**
What is the C-rate, and why is it important for EV battery performance? Give an example of a C-rate calculation.

**Answer:**
The C-rate is a measure of the rate at which a battery is discharged or charged relative to its capacity. It's a way to normalize current based on the battery's size.

**Importance in EV Battery Performance:**
*   **Performance:** EV batteries must be capable of high C-rates for quick acceleration and regeneration.
*   **Lifespan:** High C-rates can stress the battery, potentially reducing its lifespan.
*   **Charging:** It indicates how fast a battery can be charged without damage.

**Example Calculation:**
Consider a 150 Ah battery.
*   A discharge current of 75 A corresponds to a 0.5C rate (75 A / 150 Ah = 0.5C).
*   A charge current of 150 A corresponds to a 1C rate (150 A / 150 Ah = 1C).

**Question 4 (CO2):**
How does the Depth of Discharge (DoD) affect a battery's cycle life?

**Answer:**
The Depth of Discharge (DoD) significantly impacts a battery's cycle life. Discharging a battery to a very deep level (high DoD) puts more stress on the battery's internal components and chemical processes. This leads to faster degradation and a reduction in the number of charge-discharge cycles the battery can endure before its capacity drops below a usable threshold. Consequently, operating with a lower DoD (meaning shallower discharges) generally extends the battery's cycle life.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 6. Further Reading and References

*   **Husain, I. (2010).** *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press. (Chapters on Battery Technology)
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018).** *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapters on Battery Technologies and Energy Storage)
*   **Larminie, J., & Lowry, J. (2012).** *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapters on Battery Characteristics)
*   **Denton, T. (2020).** *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd. (Chapters related to Battery Systems)
*   **Dhameja, S. (2001).** *Electric Vehicle Battery Systems*. Newnes (an imprint of Butterworth-Heinemann Ltd). (Comprehensive coverage of battery parameters and their implications)

---