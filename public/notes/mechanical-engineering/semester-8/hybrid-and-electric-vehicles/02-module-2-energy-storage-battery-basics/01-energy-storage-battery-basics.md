---
title: "Energy storage – Battery basics"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464433"
status: "completed"
scrapedAt: "2026-05-20T18:20:41.762Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 2: Energy Storage – Battery Basics

---

### Topic: Energy Storage – Battery Basics

---

### Learning Outcomes:

*   **LO1:** Understand the fundamental principles of electrochemical energy storage.
*   **LO2:** Identify and differentiate various types of batteries used in EVs.
*   **LO3:** Define key battery parameters such as voltage, capacity, energy density, and power density.
*   **LO4:** Explain the concept of battery internal resistance and its impact on performance.
*   **LO5:** Discuss the factors affecting battery performance and lifespan.

---

### Course Outcomes Addressed:

*   **CO2: Describe various battery, charging types and battery management of Electric vehicles. (Knowledge Level: K2)**
    *   This module lays the foundational knowledge for understanding battery types and their characteristics, which is crucial for comprehending battery management systems.

---

### Introduction to Electrochemical Energy Storage (Batteries)

Batteries are electrochemical devices that convert chemical energy into electrical energy through reversible or irreversible chemical reactions. In the context of Electric Vehicles (EVs), batteries serve as the primary energy storage system, providing the power to drive the electric motor.

**Key Concept:** *Electrochemical Cell*
An electrochemical cell consists of two electrodes (anode and cathode) separated by an electrolyte. The chemical reactions at the electrodes drive the flow of electrons through an external circuit, generating electricity.

*   **Anode:** The negative electrode where oxidation occurs (loss of electrons).
*   **Cathode:** The positive electrode where reduction occurs (gain of electrons).
*   **Electrolyte:** A medium that allows ions to move between the electrodes, completing the electrical circuit internally.

---

### Fundamental Principles of Battery Operation

*   **Discharge (Providing Power):**
    *   At the anode, a chemical reaction releases electrons and positively charged ions.
    *   Electrons flow through the external circuit (e.g., to the EV's motor), creating an electric current.
    *   Ions migrate through the electrolyte to the cathode.
    *   At the cathode, ions and electrons combine to form a new chemical compound.

*   **Charge (Replenishing Energy):**
    *   An external electrical source (charger) forces electrons and ions to move in the opposite direction.
    *   The chemical reactions at the electrodes are reversed, converting electrical energy back into chemical energy stored within the battery.

**Important Point to Remember:**
The energy density and power density of a battery are critical for EV performance. Energy density relates to how much energy can be stored per unit of weight or volume, affecting the EV's range. Power density relates to how quickly energy can be delivered, affecting the EV's acceleration and ability to handle high power demands.

---

### Types of Batteries Used in EVs

While various battery chemistries exist, some are more prevalent in EVs due to their performance characteristics.

**1. Lead-Acid Batteries**
*   **Chemistry:** Lead anode, lead dioxide cathode, sulfuric acid electrolyte.
*   **Pros:** Mature technology, low cost, good high-current performance.
*   **Cons:** Low energy density (heavy for their capacity), limited cycle life, environmental concerns with lead.
*   **EV Application:** Primarily used in hybrid vehicles for starting the internal combustion engine and powering auxiliary systems, less common as the main traction battery in modern EVs. (Ehsani et al., 3rd ed., Ch 4)

**2. Nickel-Cadmium (NiCd) Batteries**
*   **Chemistry:** Cadmium anode, nickel oxyhydroxide cathode, alkaline electrolyte.
*   **Pros:** Good power density, long cycle life, operates well at low temperatures.
*   **Cons:** Lower energy density compared to lithium-ion, memory effect (capacity loss if repeatedly partially discharged), cadmium is toxic.
*   **EV Application:** Historically used in some early EVs and hybrid vehicles, largely superseded by NiMH and Li-ion.

**3. Nickel-Metal Hydride (NiMH) Batteries**
*   **Chemistry:** Metal hydride alloy anode, nickel oxyhydroxide cathode, alkaline electrolyte.
*   **Pros:** Higher energy density than NiCd, no memory effect, less toxic than NiCd.
*   **Cons:** Relatively lower energy density than Li-ion, self-discharge rate can be higher, prone to thermal runaway under certain conditions.
*   **EV Application:** Widely used in hybrid vehicles (e.g., Toyota Prius) as the primary traction battery. (Larminie & Lowry, 2nd ed., Ch 5)

**4. Lithium-ion (Li-ion) Batteries**
*   **Chemistry:** Various chemistries based on lithium compounds. Common types include:
    *   **Lithium Cobalt Oxide (LCO):** High energy density, used in portable electronics, less common in EVs due to safety and cost.
    *   **Lithium Manganese Oxide (LMO):** Good safety, good power capability, lower energy density.
    *   **Lithium Nickel Manganese Cobalt Oxide (NMC):** Excellent balance of energy density, power, safety, and lifespan. **Most common in modern EVs.**
    *   **Lithium Iron Phosphate (LFP):** Excellent safety and long cycle life, lower energy density and power density than NMC. Gaining popularity for its cost and safety benefits.
    *   **Lithium Nickel Cobalt Aluminum Oxide (NCA):** High energy density and good power, but can have thermal stability concerns. Used by some manufacturers.
*   **Pros:** Very high energy density, high voltage per cell, long cycle life, low self-discharge.
*   **Cons:** Higher cost, potential safety concerns (thermal runaway if not managed properly), performance degradation at extreme temperatures.
*   **EV Application:** The dominant battery technology for most modern Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs). (Husain, 2nd ed., Ch 6; Ehsani et al., 3rd ed., Ch 5)

**Example:** A Tesla Model 3 typically uses NMC or NCA lithium-ion battery cells for its traction battery pack.

---

### Key Battery Parameters

Understanding these parameters is crucial for evaluating battery suitability for EV applications.

*   **Nominal Voltage (V):** The average voltage of a battery cell or pack. This is a characteristic of the specific electrochemistry used.
    *   *Example:* A typical Li-ion cell might have a nominal voltage of 3.6V or 3.7V. A battery pack is a series/parallel combination of these cells to achieve the desired system voltage.

*   **Capacity (Ah - Ampere-hours):** The amount of electric charge a battery can deliver over a specific time. It's the product of current and time.
    *   *Example:* A battery with a capacity of 100 Ah can deliver 10 A for 10 hours, or 20 A for 5 hours, under ideal conditions.

*   **Energy (Wh - Watt-hours or kWh - kilowatt-hours):** The total amount of energy stored in a battery. It's calculated as Voltage × Capacity (V × Ah = Wh).
    *   *Example:* A 3.7V, 100Ah cell stores 3.7V × 100Ah = 370Wh or 0.37kWh. A typical EV battery pack might have a capacity of 50 kWh to over 100 kWh.

*   **Energy Density:**
    *   **Gravimetric Energy Density (Wh/kg):** Energy stored per unit of mass. Higher values mean lighter batteries for the same energy content, improving EV efficiency and range.
    *   **Volumetric Energy Density (Wh/L):** Energy stored per unit of volume. Higher values mean more compact batteries, important for packaging within the vehicle chassis.
    *   *Example:* Li-ion batteries typically have gravimetric energy densities between 100-250 Wh/kg, while NiMH batteries are in the range of 60-120 Wh/kg. (Denton, 2nd ed., Ch 4)

*   **Power Density:**
    *   **Gravimetric Power Density (W/kg):** The maximum power a battery can deliver per unit of mass. Crucial for acceleration and dynamic driving.
    *   **Volumetric Power Density (W/L):** The maximum power a battery can deliver per unit of volume. Important for packaging high-performance EVs.
    *   *Example:* Batteries with higher power density can deliver energy more rapidly, enabling quick acceleration.

---

### Battery Internal Resistance (R_int)

Internal resistance is the opposition to current flow within the battery itself, arising from the materials of the electrodes, electrolyte, and connections.

*   **Impact of Internal Resistance:**
    *   **Voltage Drop:** During discharge, a voltage drop occurs across the internal resistance ($V_{drop} = I \times R_{int}$), reducing the terminal voltage available to the load.
    *   **Power Loss and Heat Generation:** The power dissipated internally as heat is $P_{loss} = I^2 \times R_{int}$. This reduces the overall efficiency and can lead to overheating.
    *   **Reduced Power Capability:** High internal resistance limits the maximum current a battery can deliver, thus limiting the power output.
    *   **Effect on Charging:** Internal resistance also affects charging speed and efficiency.

**Factors Affecting Internal Resistance:**
*   **State of Charge (SoC):** Internal resistance generally increases as the battery discharges.
*   **Temperature:** Lower temperatures increase internal resistance.
*   **Age and Cycling:** Internal resistance tends to increase with battery age and the number of charge/discharge cycles.
*   **Battery Chemistry and Design:** Different chemistries and cell designs have inherently different internal resistances.

**Important Point to Remember:**
Minimizing internal resistance is a key design goal for EV batteries to maximize efficiency and power output.

---

### Factors Affecting Battery Performance and Lifespan

Several factors influence how well a battery performs and how long it lasts.

*   **Temperature:**
    *   **High Temperatures:** Accelerate chemical degradation, reducing lifespan and potentially leading to safety issues (thermal runaway).
    *   **Low Temperatures:** Increase internal resistance, reducing available power and energy capacity. Charging at very low temperatures can also cause lithium plating, damaging the battery.
    *   **Mitigation:** Battery thermal management systems (TMS) are essential for EVs to maintain batteries within their optimal temperature range. (Dhameja, 2001, Ch 3)

*   **Depth of Discharge (DoD):** The percentage of the battery's capacity that has been discharged.
    *   **Shallow Discharges:** Generally lead to longer cycle life.
    *   **Deep Discharges:** Can stress the battery materials and reduce the overall number of cycles it can endure.
    *   **EV Implication:** Battery management systems often limit the usable DoD to prolong battery life.

*   **Charge/Discharge Rate (C-rate):** The speed at which a battery is charged or discharged, expressed as a multiple of its nominal capacity.
    *   **High Discharge Rates:** Can lead to increased internal resistance voltage drop, reduced effective capacity, and increased heat generation.
    *   **High Charge Rates:** Can also increase heat generation and potentially lead to faster degradation if not managed properly.
    *   **C-rate Definition:** 1C means discharging/charging at a rate that empties/fills the battery in one hour. A 0.5C rate means it takes two hours.

*   **Cycle Life:** The number of charge/discharge cycles a battery can endure before its capacity drops to a specified percentage of its initial capacity (e.g., 80%).
    *   **Factors Influencing Cycle Life:** DoD, temperature, charge/discharge rates, and the specific battery chemistry.

*   **Calendar Life:** The lifespan of a battery in terms of years, regardless of usage. Degradation occurs even when the battery is not actively cycled due to slow chemical reactions.
    *   **Factors Influencing Calendar Life:** Storage temperature, state of charge during storage.

*   **State of Charge (SoC) Management:** Maintaining the battery within an optimal SoC range (often not 0% to 100%) can significantly improve both cycle and calendar life.

**Example:** A battery that is consistently charged to 100% and discharged to 0% will likely have a shorter lifespan than one that is typically kept between 20% and 80% SoC.

---

### Summary of Key Points

*   Batteries store chemical energy and convert it to electrical energy through electrochemical reactions.
*   Key components of an electrochemical cell are the anode, cathode, and electrolyte.
*   Li-ion batteries, particularly NMC and LFP chemistries, are the dominant technology in modern EVs due to their high energy density.
*   Essential battery parameters include nominal voltage, capacity (Ah), energy (Wh), energy density (Wh/kg, Wh/L), and power density (W/kg, W/L).
*   Internal resistance causes voltage drop and power loss, impacting EV performance and efficiency.
*   Battery performance and lifespan are critically affected by temperature, depth of discharge, charge/discharge rates, and overall management.

---

### Practice Questions

1.  **Define the terms energy density and power density in the context of EV batteries. Why are they important?**
    *   **Answer:** Energy density (Wh/kg or Wh/L) refers to the amount of energy stored per unit of mass or volume, impacting the EV's range. Power density (W/kg or W/L) refers to the maximum power a battery can deliver per unit of mass or volume, impacting the EV's acceleration and dynamic performance. Both are critical for optimizing EV performance and utility.

2.  **Compare and contrast NiMH and Li-ion batteries in terms of their typical usage in EVs and their key advantages/disadvantages.**
    *   **Answer:**
        *   **NiMH:** Higher energy density than NiCd, no memory effect. Used in many hybrid vehicles. Lower energy density than Li-ion, higher self-discharge.
        *   **Li-ion:** Very high energy density, high voltage, long cycle life. Dominant technology in modern BEVs and PHEVs. Higher cost, potential safety concerns if not managed, performance degradation at extreme temperatures.

3.  **Explain how internal resistance affects the performance of an EV battery during acceleration.**
    *   **Answer:** During acceleration, the EV motor draws high current from the battery. A higher internal resistance leads to a larger voltage drop across the battery ($V_{drop} = I \times R_{int}$), reducing the terminal voltage available to the motor. This can limit the power delivered to the motor, resulting in slower acceleration. Additionally, the internal resistance causes power loss as heat ($P_{loss} = I^2 \times R_{int}$), reducing overall efficiency and potentially causing the battery to overheat.

4.  **What are the primary impacts of high temperatures on a Li-ion battery used in an EV?**
    *   **Answer:** High temperatures accelerate the chemical degradation processes within the battery, leading to a reduced lifespan and capacity fade. In extreme cases, high temperatures can also increase the risk of thermal runaway, a dangerous self-heating process that can lead to fire or explosion.

5.  **A 400V battery pack has a capacity of 60 kWh. What is the total capacity in Ampere-hours (Ah) if the cells are designed to operate at a nominal voltage of 3.7V per cell?**
    *   **Answer:**
        *   First, find the total capacity in Ah for the pack:
            *   Energy (Wh) = Voltage (V) × Capacity (Ah)
            *   60 kWh = 60,000 Wh
            *   Capacity (Ah) = Energy (Wh) / Voltage (V)
            *   Capacity (Ah) = 60,000 Wh / 400 V = 150 Ah
        *   Therefore, the battery pack has a capacity of 150 Ah at 400V.

---

### Important Points to Remember:

*   **Battery Management System (BMS):** While not the focus of this module, the BMS is critical for monitoring and controlling battery parameters to ensure safety, performance, and longevity. This includes managing temperature, SoC, state of health (SoH), and balancing cells.
*   **Series and Parallel Connections:** Battery cells are connected in series to increase voltage and in parallel to increase capacity and current capability, forming a battery pack.
*   **Degradation:** All batteries degrade over time and with use. Understanding the factors influencing degradation is key to designing robust EV battery systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References:

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press.
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press.
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell.
*   Denton, T. (2020). *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd.
*   Dhameja, S. (2001). *Electric Vehicle Battery Systems*. Newnes (an imprint of Butterworth-Heinemann Ltd).

---