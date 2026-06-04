---
title: "heat pumps"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f56"
status: "completed"
scrapedAt: "2026-05-20T17:53:33.856Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Heat Pumps

### 1. Introduction to Heat Pumps (CO1, CO2)

A heat pump is a device that transfers thermal energy from a lower temperature source to a higher temperature sink, requiring work input. Unlike natural heat flow (from hot to cold), a heat pump *forces* heat to move in the opposite direction. This process is fundamentally governed by the First and Second Laws of Thermodynamics.

**Key Concept:** The First Law of Thermodynamics (Conservation of Energy) states that energy cannot be created or destroyed, only transformed. For a heat pump, this means the total energy output (heat delivered to the hot reservoir) must equal the energy input (work done + heat absorbed from the cold reservoir).

**Definition:**
*   **Heat Pump:** A thermodynamic device that absorbs heat from a low-temperature reservoir and delivers it to a high-temperature reservoir, with the aid of work input.

**Real-world Analogy:** Think of a refrigerator as a heat pump operating in reverse. A refrigerator moves heat from inside the cold compartment to the warmer room. A heat pump moves heat from a cooler environment (like outside air, ground, or water) into a warmer building.

### 2. Working Principle and Cycle (CO2, CO3)

Heat pumps typically operate on a **vapor-compression refrigeration cycle**, which is a reversed Carnot cycle. The cycle consists of four essential components:

1.  **Evaporator:** Absorbs heat from the low-temperature source (e.g., outside air). The refrigerant enters as a low-pressure liquid-vapor mixture and exits as a low-pressure saturated or slightly superheated vapor.
2.  **Compressor:** Increases the pressure and temperature of the refrigerant vapor. This is where the work input occurs.
3.  **Condenser:** Rejects heat to the high-temperature sink (e.g., inside the building). The refrigerant enters as a high-pressure superheated vapor and exits as a high-pressure saturated or subcooled liquid.
4.  **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the liquid refrigerant. This is a throttling process, which is isenthalpic ($h_1 = h_2$).

**Thermodynamic Analysis (First Law Applied):**

Consider a steady-flow system for each component. Applying the First Law to a heat pump operating in a cycle:

*   **For the entire cycle:** $\dot{Q}_H = \dot{W}_{in} + \dot{Q}_L$
    *   $\dot{Q}_H$: Rate of heat transfer to the high-temperature reservoir (heating capacity).
    *   $\dot{W}_{in}$: Rate of work input to the compressor.
    *   $\dot{Q}_L$: Rate of heat transfer from the low-temperature source (refrigerating capacity).

*   **From Cengel & Boles (2011), Chapter 4:** The steady-flow energy equation for any component is:
    $\dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) + \dot{Q} = \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2) + \dot{W}$
    In most heat pump analyses, kinetic and potential energy changes are negligible.
    So, for the compressor: $\dot{W}_{in} = \dot{m}(h_2 - h_1)$
    For the evaporator: $\dot{Q}_L = \dot{m}(h_1 - h_4)$
    For the condenser: $\dot{Q}_H = \dot{m}(h_3 - h_2)$
    Where:
        *   $\dot{m}$: Mass flow rate of the refrigerant.
        *   $h_1, h_2, h_3, h_4$: Specific enthalpies at different points in the cycle.

**Cycle Representation:**

*   **P-h Diagram:** Commonly used to visualize the vapor-compression cycle.
    *   1-2: Isentropic compression in the compressor.
    *   2-3: Isobaric heat rejection in the condenser.
    *   3-4: Isenthalpic expansion in the expansion valve.
    *   4-1: Isobaric heat absorption in the evaporator.

*   **T-s Diagram:** Also useful for visualizing the cycle and calculating work and heat transfers.

### 3. Performance Metric: Coefficient of Performance (COP) (CO1, CO2)

Unlike refrigerators, which are evaluated by their COP of refrigeration ($\beta$), heat pumps are evaluated by their **Coefficient of Performance of Heating (COP$_H$)**.

**Definition:**
*   **COP$_H$**: The ratio of the desired output (heat delivered to the hot space) to the required input (work).

**Formula:**
*   $COP_H = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{\dot{Q}_H}{\dot{W}_{in}}$

Using the First Law for a cycle ($\dot{Q}_H = \dot{W}_{in} + \dot{Q}_L$):
*   $COP_H = \frac{\dot{W}_{in} + \dot{Q}_L}{\dot{W}_{in}} = 1 + \frac{\dot{Q}_L}{\dot{W}_{in}} = 1 + COP_R$
    Where $COP_R = \frac{\dot{Q}_L}{\dot{W}_{in}}$ is the COP of refrigeration for the same cycle.

**Ideal (Carnot) Heat Pump:**
For a reversible heat pump operating between two reservoirs at temperatures $T_L$ and $T_H$ (absolute temperatures):
*   $COP_{H,ideal} = \frac{T_H}{T_H - T_L}$
*   $COP_{R,ideal} = \frac{T_L}{T_H - T_L}$

**Important Note:** The COP of a real heat pump is always less than the COP of an ideal Carnot heat pump operating between the same temperature limits due to irreversibilities (friction, heat losses, etc.).

**Factors Affecting COP$_H$:**
*   **Temperature Difference ($T_H - T_L$):** A larger temperature difference leads to a lower COP. This means heat pumps are more efficient when the outdoor temperature ($T_L$) is closer to the indoor temperature ($T_H$).
*   **Compressor Efficiency:** Real compressors are not isentropic.
*   **Refrigerant Properties:** Choice of refrigerant affects cycle performance.
*   **Heat Exchanger Effectiveness:** Inefficient evaporators or condensers reduce performance.

### 4. Types of Heat Pumps (CO1, CO2)

Heat pumps are classified based on the source of the low-temperature heat and the sink for the high-temperature heat. The most common types are:

1.  **Air-Source Heat Pumps (ASHPs):**
    *   **How they work:** Extract heat from the outdoor air (even when it's cold) and transfer it inside. In cooling mode, they reverse the cycle to extract heat from the indoor air and reject it to the outdoor air.
    *   **Pros:** Relatively low installation cost, widely available.
    *   **Cons:** Performance degrades significantly at very low outdoor temperatures. May require supplemental heating.
    *   **Reference:** Cengel & Boles (2011) discusses air-source heat pumps as a common application of refrigeration cycles.

2.  **Geothermal Heat Pumps (GSHPs) / Ground-Source Heat Pumps:**
    *   **How they work:** Utilize the stable temperature of the earth or groundwater as the heat source/sink. A closed or open loop system circulates a fluid through the ground.
    *   **Pros:** High efficiency, consistent performance regardless of outdoor air temperature, long lifespan.
    *   **Cons:** Higher initial installation cost due to ground loop installation.
    *   **Reference:** Moran & Shapiro (2006) provides examples of thermodynamic systems and their efficiency, which applies to GSHPs as efficient energy transfer devices.

3.  **Water-Source Heat Pumps (WSHPs):**
    *   **How they work:** Use a body of water (like a lake, pond, or well) as the heat source/sink.
    *   **Pros:** Can be very efficient if a suitable water source is available.
    *   **Cons:** Availability of suitable water bodies is a constraint.

### 5. First Law Analysis of Heat Pumps (CO3)

The First Law is crucial for quantifying the energy flows and work requirements of a heat pump.

**Example: Analyzing a Vapor-Compression Heat Pump**

Consider a heat pump that cools a space to $20^\circ C$ by absorbing heat from the outside at $5^\circ C$. It delivers heat to the interior space at $45^\circ C$.
Assume the refrigerant absorbs heat at $5^\circ C$ and rejects heat at $45^\circ C$.

*   **Goal:** Determine the COP$_H$.
*   **Given (ideal case):**
    *   $T_L = 5^\circ C = 278.15 K$
    *   $T_H = 45^\circ C = 318.15 K$

*   **Ideal COP$_H$ Calculation:**
    $COP_{H,ideal} = \frac{T_H}{T_H - T_L} = \frac{318.15 K}{318.15 K - 278.15 K} = \frac{318.15 K}{40 K} = 7.95$

*   **Real-World Scenario:** Let's assume the compressor requires 2 kW of work input, and the heat absorbed from the outside is 8 kW.

    *   **Calculate heat delivered:** Using the First Law for the cycle:
        $\dot{Q}_H = \dot{W}_{in} + \dot{Q}_L$
        $\dot{Q}_H = 2 kW + 8 kW = 10 kW$

    *   **Calculate COP$_H$:**
        $COP_H = \frac{\dot{Q}_H}{\dot{W}_{in}} = \frac{10 kW}{2 kW} = 5$

This shows that the real COP (5) is less than the ideal COP (7.95) due to irreversibilities.

**Practice Question 1 (CO3):**
A heat pump provides $12 kW$ of heating to a house. The refrigerant absorbs heat from the outdoors at $2^\circ C$ and rejects heat indoors at $50^\circ C$. If the compressor has an isentropic efficiency of 80% and the actual work input is $3 kW$, what is the actual COP of the heat pump?

**Answer 1:**
*   Desired Output = $\dot{Q}_H = 12 kW$
*   Required Input = $\dot{W}_{in} = 3 kW$
*   $COP_H = \frac{\dot{Q}_H}{\dot{W}_{in}} = \frac{12 kW}{3 kW} = 4$

*(Note: The information about outdoor and indoor temperatures and compressor efficiency is context but not directly used to calculate the COP if $\dot{Q}_H$ and $\dot{W}_{in}$ are given. However, these parameters would be used to *predict* the performance.)*

**Practice Question 2 (CO3):**
A heat pump uses a refrigerant that absorbs heat from a heat source at $10^\circ C$ and delivers heat to a sink at $60^\circ C$. The mass flow rate of the refrigerant is $0.05 kg/s$. The enthalpy of the refrigerant entering the compressor is $250 kJ/kg$ and leaving the compressor is $400 kJ/kg$. The enthalpy of the refrigerant entering the expansion valve is $120 kJ/kg$. Calculate the COP of the heat pump.

**Answer 2:**
*   **Heat absorbed ($\dot{Q}_L$):**
    The refrigerant absorbs heat in the evaporator. Let the state entering the compressor be state 2 and leaving the evaporator be state 1. From the problem statement, $h_1 = 250 kJ/kg$.
    The state entering the expansion valve is state 4. $h_4 = 120 kJ/kg$.
    In the evaporator, heat absorbed per unit mass is $h_1 - h_4$.
    $\dot{Q}_L = \dot{m}(h_1 - h_4) = 0.05 kg/s \times (250 kJ/kg - 120 kJ/kg) = 0.05 kg/s \times 130 kJ/kg = 6.5 kW$

*   **Work input ($\dot{W}_{in}$):**
    Work input to the compressor per unit mass is $h_2 - h_1$.
    $\dot{W}_{in} = \dot{m}(h_2 - h_1) = 0.05 kg/s \times (400 kJ/kg - 250 kJ/kg) = 0.05 kg/s \times 150 kJ/kg = 7.5 kW$

*   **Heat delivered ($\dot{Q}_H$):**
    Using the First Law: $\dot{Q}_H = \dot{W}_{in} + \dot{Q}_L = 7.5 kW + 6.5 kW = 14 kW$

*   **COP$_H$ Calculation:**
    $COP_H = \frac{\dot{Q}_H}{\dot{W}_{in}} = \frac{14 kW}{7.5 kW} \approx 1.87$

*(Self-Correction: Notice how the COP is quite low in this example. This is likely due to the high work input relative to the heat absorbed, possibly representing a system operating with a large temperature difference or significant irreversibilities.)*

### 6. Heat Pumps vs. Furnaces/Boilers (CO1)

*   **Furnaces/Boilers:** Directly convert fuel (like natural gas or electricity) into heat. They have an efficiency rating, typically 80-95%, meaning 80-95% of the fuel's energy is converted to heat, and the rest is lost. Their COP is always $\le 1$.
*   **Heat Pumps:** Do not generate heat; they *move* it. They can deliver more thermal energy than the electrical energy they consume, resulting in a COP greater than 1. This makes them highly energy-efficient, especially in moderate climates.

**Important Point to Remember:** A heat pump with a COP of 3, for example, delivers 3 units of heat energy for every 1 unit of electrical energy consumed. This is far more efficient than electric resistance heating, which has a COP of 1.

### 7. Applications and Limitations (CO1)

**Applications:**
*   **Space Heating and Cooling:** The most common application in residential and commercial buildings.
*   **Water Heating:** Heat pump water heaters are increasingly popular for energy savings.
*   **Industrial Processes:** Drying, process heating, and cooling.

**Limitations:**
*   **Performance Degradation in Cold Climates (Air-Source):** As outdoor temperatures drop, the temperature difference between the source and the sink increases, reducing the COP and heating capacity. Supplemental heating (often electric resistance or a fossil fuel furnace) may be needed.
*   **Installation Costs:** Geothermal systems have significant upfront costs.
*   **Refrigerant Concerns:** Environmental impact of refrigerants (e.g., global warming potential) is a consideration.

### 8. Key Concepts and Important Points to Remember

*   **Definition of Heat Pump:** A device that moves heat from a cold reservoir to a hot reservoir using work input.
*   **First Law Application:** $\dot{Q}_H = \dot{W}_{in} + \dot{Q}_L$ is fundamental.
*   **COP$_H$:** The performance metric, defined as $\frac{\dot{Q}_H}{\dot{W}_{in}}$. A COP > 1 indicates efficiency relative to direct electric heating.
*   **Ideal COP$_H$:** $\frac{T_H}{T_H - T_L}$ (using absolute temperatures).
*   **Types:** Air-source, geothermal, water-source, classified by heat source.
*   **Cycle:** Typically a reversed vapor-compression cycle with four main components: evaporator, compressor, condenser, expansion valve.
*   **P-h and T-s diagrams** are essential tools for analysis.
*   **Limitations:** Performance drops with larger temperature differences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. Further Reading and References

*   **Cengel & Boles (2011):** Chapter 4 (Energy Analysis of Control Volumes) and Chapter 11 (Refrigeration and Air Conditioning) will provide detailed thermodynamic analysis of refrigeration cycles, applicable to heat pumps.
*   **P.K. Nag (2017):** Chapters related to refrigeration and vapor-compression cycles.
*   **Moran & Shapiro (2006):** Chapters on thermodynamic cycles and their analysis.
*   **Sonntag, Borgnakke, & VanWylen (2014):** Chapters on vapor-compression cycles and system efficiencies.

---

This set of notes covers the fundamental aspects of heat pumps within the context of the First Law of Thermodynamics, addressing the learning outcomes and referencing the provided textbooks. Remember to practice applying the First Law to different scenarios and understand the factors that influence the performance of these energy-efficient systems.