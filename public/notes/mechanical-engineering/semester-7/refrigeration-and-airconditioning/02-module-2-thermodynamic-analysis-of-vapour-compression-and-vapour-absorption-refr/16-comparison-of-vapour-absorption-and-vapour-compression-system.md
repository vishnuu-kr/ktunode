---
title: "Comparison of vapour absorption and vapour compression system."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f70"
status: "completed"
scrapedAt: "2026-05-20T18:17:22.638Z"
---
# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Comparison of Vapour Absorption and Vapour Compression Systems

### 1. Introduction

Refrigeration and air conditioning systems are crucial for various applications, from preserving food to ensuring comfortable living and working environments. Two fundamental refrigeration cycles are the vapour compression cycle and the vapour absorption cycle. While both achieve cooling, they differ significantly in their operational principles, energy sources, and applications. This topic will provide a comprehensive comparison of these two systems, focusing on their thermodynamic aspects and practical implications.

**Learning Outcome Addressed:** The entire module, and specifically this topic, directly addresses the learning outcomes related to understanding and comparing thermodynamic cycles.

**Course Outcome Alignment:**
*   **CO1:** Defines and describes basic concepts and applications, and analyzes performance of ideal refrigeration cycles (Knowledge Level: K2, K4). This topic allows for comparison of the practical performance of two major cycles.
*   **CO3:** Performs Thermodynamic Analysis of Vapour Compression and Absorption Systems (Knowledge Level: K3, K4). Understanding the differences between these systems is a prerequisite for performing and comparing their thermodynamic analyses.

### 2. Vapour Compression Refrigeration System (VCRS)

The VCRS is the most widely used refrigeration system. It relies on the mechanical compression of a refrigerant to raise its pressure and temperature.

#### 2.1. Working Principle

The VCRS operates on a closed thermodynamic cycle consisting of four main processes:

1.  **Compression:** The refrigerant vapor from the evaporator is compressed by a compressor, increasing its pressure and temperature. (Isentropic compression is the ideal case).
2.  **Condensation:** The high-pressure, high-temperature vapor enters the condenser where it rejects heat to the surroundings and condenses into a high-pressure liquid. (Isobaric heat rejection is ideal).
3.  **Expansion:** The high-pressure liquid refrigerant passes through an expansion valve (or capillary tube), where its pressure and temperature drop significantly. (Isenthalpic expansion is ideal).
4.  **Evaporation:** The low-pressure, low-temperature liquid-vapor mixture enters the evaporator, where it absorbs heat from the refrigerated space, vaporizing into a low-pressure vapor. (Isobaric heat absorption is ideal).

#### 2.2. Key Components

*   **Compressor:** The "heart" of the system, responsible for compressing the refrigerant vapor.
*   **Condenser:** Rejects heat from the refrigerant to the environment.
*   **Expansion Valve/Capillary Tube:** Reduces the pressure and temperature of the liquid refrigerant.
*   **Evaporator:** Absorbs heat from the refrigerated space, providing the cooling effect.

#### 2.3. Refrigerants Used

Common refrigerants include R-134a, R-410A, R-22 (historically, being phased out), Ammonia, etc.

#### 2.4. Thermodynamic Analysis (Brief Overview)

*   **COP (Coefficient of Performance):** $\text{COP} = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{\text{Cooling Effect}}{\text{Work Input}} = \frac{h_1 - h_4}{h_2 - h_1}$ (for ideal cycle, where 1, 2, 3, 4 are points on the T-s diagram).
*   **Work Input:** Primarily electrical energy for the compressor.
*   **Efficiency:** Generally high COP compared to absorption systems.

**Textbook Reference:**
*   **Arora C.P., "Refrigeration and Air Conditioning" (4th edition/2021):** Chapter 3 provides a detailed explanation of the vapour compression cycle, its analysis, and components.
*   **Ramesh Chandra Arora, "Refrigeration and Air Conditioning" (4th Printing/2015):** Chapter 2 covers the vapour compression cycle in depth.
*   **Stoecker & Jons, "Refrigeration & Air-conditioning" (2nd edition):** Chapter 3 and 4 discuss the fundamental principles and analysis of the vapour compression cycle.

### 3. Vapour Absorption Refrigeration System (VARS)

The VARS uses a heat source (like natural gas, steam, or waste heat) to drive the refrigeration cycle, rather than mechanical work. The most common VARS is the ammonia-water system, though lithium bromide-water systems are also prevalent.

#### 3.1. Working Principle (Ammonia-Water System)

The VARS utilizes a thermodynamic cycle involving absorption and generation of a refrigerant (ammonia) in a solvent (water). Key components and their functions:

1.  **Evaporator:** Similar to VCRS, it absorbs heat from the refrigerated space, causing the refrigerant (ammonia) to vaporize at low pressure.
2.  **Absorber:** The low-pressure ammonia vapor from the evaporator is absorbed by a strong solution of ammonia in water (the absorbent). This is an exothermic process.
3.  **Pump:** The weak solution (from the absorber) is pumped to a higher pressure.
4.  **Generator (or Rectifier):** The strong solution is heated by an external heat source. This heat boils off the ammonia vapor, creating a weak solution. The ammonia vapor is then condensed.
5.  **Condenser:** The high-pressure ammonia vapor from the generator is condensed into a high-pressure liquid.
6.  **Expansion Valve:** The high-pressure liquid ammonia passes through an expansion valve, reducing its pressure and temperature before entering the evaporator.

**Note:** In LiBr-Water systems, water is the refrigerant and LiBr solution is the absorbent. The processes are similar, but the role of refrigerant and absorbent is reversed. LiBr systems cannot handle sub-zero temperatures as ice formation would occur in the evaporator.

#### 3.2. Key Components

*   **Evaporator:** Provides cooling.
*   **Absorber:** Absorbs refrigerant vapor into the absorbent.
*   **Generator:** Separates refrigerant from the absorbent using heat.
*   **Condenser:** Condenses the refrigerant vapor.
*   **Expansion Valve:** Reduces refrigerant pressure.
*   **Pump:** Circulates the absorbent solution.
*   **Rectifier (in some systems):** Further purifies the refrigerant vapor before condensation.

#### 3.3. Refrigerants and Absorbents

*   **Ammonia-Water System:** Ammonia (refrigerant), Water (absorbent).
*   **Lithium Bromide-Water System:** Water (refrigerant), Lithium Bromide (absorbent).

#### 3.4. Thermodynamic Analysis (Brief Overview)

*   **COP:** $\text{COP} = \frac{\text{Cooling Effect}}{\text{Heat Input (Generator) + Work Input (Pump)}}$. The COP is generally lower than VCRS because the heat input is significant.
*   **Energy Source:** Primarily heat. This is a major advantage when waste heat is available.
*   **"W" (Work Input):** The work input for the pump is very small compared to the compressor work in VCRS.

**Textbook Reference:**
*   **Arora C.P., "Refrigeration and Air Conditioning" (4th edition/2021):** Chapter 4 delves into the vapour absorption system, its cycles, and analysis.
*   **Ahamadul Ameen, "Refrigeration and air conditioning" (2020):** Chapter 6 provides a good explanation of the absorption refrigeration cycle.
*   **Arora S. C. and S. Domkundwar, "A Course in Refrigeration and Air Conditioning" (2018):** Chapter 7 discusses absorption refrigeration systems.

### 4. Comparison of Vapour Compression and Vapour Absorption Systems

| Feature                 | Vapour Compression Refrigeration System (VCRS)                               | Vapour Absorption Refrigeration System (VARS)                               |
| :---------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Primary Energy Source** | Mechanical work (electricity) to drive the compressor.                       | Heat (e.g., natural gas, solar thermal, waste heat).                        |
| **Driving Force**       | Mechanical compressor.                                                       | Heat input to the generator.                                                |
| **Efficiency (COP)**    | Higher COP (typically 2.5 - 5.0).                                            | Lower COP (typically 0.7 - 1.5).                                            |
| **Components**          | Compressor, Condenser, Expansion Valve, Evaporator.                          | Generator, Absorber, Pump, Condenser, Expansion Valve, Evaporator.          |
| **Complexity**          | Mechanically simpler (fewer distinct major components).                      | Thermodynamically and mechanically more complex (more auxiliary components). |
| **Cost**                | Lower initial cost for smaller systems; higher operating cost due to electricity. | Higher initial cost, but can have lower operating cost if heat is cheap/free. |
| **Refrigerants**        | CFCs, HCFCs, HFCs, HFOs, Hydrocarbons, Ammonia, CO2.                         | Ammonia-Water (Ammonia as refrigerant), LiBr-Water (Water as refrigerant). |
| **Operating Temperatures**| Can achieve very low temperatures.                                           | LiBr-Water systems are limited to above 0°C. Ammonia-Water can achieve lower. |
| **Noise Level**         | Compressor can be noisy.                                                     | Generally quieter operation as the main driver is heat.                     |
| **Maintenance**         | Compressor requires regular maintenance.                                     | Pump requires maintenance; potential issues with fluid degradation.         |
| **Applications**        | Residential AC, commercial refrigeration, industrial processes, automotive AC. | Where waste heat is available, hotels, large buildings, combined heat and power. |
| **Size & Weight**       | Generally more compact and lighter for equivalent capacity.                  | Larger and heavier due to additional components and fluid volumes.          |
| **Reliability**         | Generally very reliable with proper maintenance.                             | Can be sensitive to impurities and fluid degradation.                       |

**Key Concept:** The fundamental difference lies in how the cycle is driven. VCRS uses electrical energy to do mechanical work on the refrigerant via a compressor, while VARS uses thermal energy to drive a chemical process of absorption and desorption.

**Example:**
*   **VCRS:** Your household refrigerator or split AC unit operates on this principle.
*   **VARS:** A large hotel might use steam from its boiler or waste heat from a turbine to power an absorption chiller for air conditioning. Solar-powered absorption chillers also exist.

**Important Point to Remember:** The COP of a VARS is often referred to as the "Thermal COP" when comparing it to the "Electrical COP" of a VCRS, to account for the different forms of energy input.

### 5. When to Choose Which System?

*   **Choose VCRS when:**
    *   Electricity is readily available and relatively inexpensive.
    *   Compactness and lower initial cost are priorities.
    *   Very low operating temperatures are required.
    *   High energy efficiency (COP) is paramount.

*   **Choose VARS when:**
    *   Abundant and cheap sources of heat (especially waste heat) are available.
    *   Reduced reliance on electricity is desired.
    *   Noise reduction is important.
    *   Environmental regulations favour systems that reduce electrical load or utilize waste energy.

### 6. Practice Questions

1.  **Distinguish between the primary energy sources used by Vapour Compression and Vapour Absorption Refrigeration Systems.** (CO1, CO3)
    *   **Answer:** VCRS primarily uses electrical energy to power a compressor. VARS primarily uses heat energy (from natural gas, solar, or waste heat) to drive the absorption process.

2.  **Explain why the COP of a Vapour Absorption Refrigeration System is generally lower than that of a Vapour Compression Refrigeration System.** (CO1, CO3)
    *   **Answer:** The COP of VARS is lower because a significant amount of heat energy is required in the generator to separate the refrigerant from the absorbent. This heat input, along with minimal pump work, is divided into the cooling effect, resulting in a lower COP compared to the work input required for compression in VCRS.

3.  **List the main components of an ammonia-water absorption refrigeration system and briefly describe the function of each.** (CO1, CO3)
    *   **Answer:**
        *   **Evaporator:** Absorbs heat to vaporize ammonia.
        *   **Absorber:** Absorbs ammonia vapor into water solution.
        *   **Generator:** Heats the solution to release ammonia vapor.
        *   **Condenser:** Condenses ammonia vapor into liquid.
        *   **Expansion Valve:** Reduces pressure of liquid ammonia.
        *   **Pump:** Circulates the absorbent solution.

4.  **Under what circumstances would a Vapour Absorption Refrigeration System be preferred over a Vapour Compression Refrigeration System?** (CO1, CO3)
    *   **Answer:** VARS is preferred when waste heat is available, when electricity costs are very high, or when there is a desire to reduce electrical consumption. It's also favored for quieter operation.

5.  **Calculate the COP of a VCRS if the cooling effect is 5 kW and the work input to the compressor is 1.5 kW.** (CO3)
    *   **Answer:** $\text{COP} = \frac{\text{Cooling Effect}}{\text{Work Input}} = \frac{5 \text{ kW}}{1.5 \text{ kW}} = 3.33$

### 7. Important Points to Remember

*   The fundamental difference between VCRS and VARS is the form of energy input (work vs. heat).
*   VCRS typically has a higher COP than VARS.
*   VARS is advantageous when waste heat is available, making it an energy-efficient solution in such scenarios.
*   The choice between the two systems depends on factors like energy availability, cost, and specific application requirements.
*   LiBr-Water systems are limited to applications requiring temperatures above 0°C due to the nature of the refrigerant.

This concludes the comparison of vapour compression and vapour absorption refrigeration systems, highlighting their thermodynamic principles, operational differences, and practical considerations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
