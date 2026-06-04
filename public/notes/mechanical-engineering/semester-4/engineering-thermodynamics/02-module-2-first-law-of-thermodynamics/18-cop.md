---
title: "COP"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f55"
status: "completed"
scrapedAt: "2026-05-20T17:53:33.149Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Coefficient of Performance (COP)

This topic delves into the efficiency of thermodynamic devices that involve heat transfer and work, specifically refrigeration and heat pump systems, by introducing the concept of the Coefficient of Performance (COP). This aligns with **CO2** (Understand the laws of thermodynamics) and **CO3** (Conduct first law analysis of open and closed systems) with a focus on practical applications of the First Law.

### 1. Introduction to COP

The First Law of Thermodynamics deals with the conservation of energy, stating that energy cannot be created or destroyed, only transformed. When analyzing energy conversion devices, we often need a metric to quantify their performance. For systems that transfer heat rather than produce work, the **Coefficient of Performance (COP)** is used.

**Key Concept:** COP is a ratio of the desired output to the required input. Unlike efficiency for work-producing devices (which is always less than 1), COP can be greater than 1.

### 2. COP for Refrigeration Systems

A refrigeration system's primary function is to remove heat from a low-temperature reservoir and transfer it to a high-temperature reservoir.

*   **Desired Output:** Heat removed from the cold space ($Q_L$).
*   **Required Input:** Work input to the system ($W_{in}$).

**Definition:**
The COP of a refrigeration system ($COP_R$) is defined as:

$COP_R = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_L}{W_{in}}$

**(Cengel & Boles, Thermodynamics: An Engineering Approach, 6th Ed., Chapter 6)**

*   **Explanation:** A higher $COP_R$ means that more heat is removed from the cold space for a given amount of work input, indicating a more efficient refrigerator.

**First Law Analysis for a Refrigeration Cycle:**
For a cyclic device operating in steady state, the net heat transfer equals the net work done. Considering the refrigeration cycle as a system, the energy balance is:

$Q_L + W_{in} = Q_H$

Where:
*   $Q_L$: Heat absorbed from the low-temperature reservoir (cold space).
*   $W_{in}$: Work input to the system (e.g., compressor work).
*   $Q_H$: Heat rejected to the high-temperature reservoir (surroundings).

From the energy balance, $W_{in} = Q_H - Q_L$. Substituting this into the $COP_R$ formula:

$COP_R = \frac{Q_L}{Q_H - Q_L}$

**(P.K. Nag, Engineering Thermodynamics, 6th Ed., Chapter 10)**

*   **Important Point:** Since $Q_L$ and $Q_H$ are energy quantities, they are positive. However, the heat rejected $Q_H$ is typically considered positive in energy balance equations.

**Example 2.1:** A refrigerator removes heat from the freezer compartment at a rate of 50 kJ/min and rejects heat to the room at a rate of 80 kJ/min. Calculate the COP of the refrigerator.

*   **Given:**
    *   $Q_L$ = 50 kJ/min
    *   $Q_H$ = 80 kJ/min
*   **To Find:** $COP_R$

*   **Solution:**
    First, calculate the work input:
    $W_{in} = Q_H - Q_L = 80 \text{ kJ/min} - 50 \text{ kJ/min} = 30 \text{ kJ/min}$

    Now, calculate the COP:
    $COP_R = \frac{Q_L}{W_{in}} = \frac{50 \text{ kJ/min}}{30 \text{ kJ/min}} = 1.67$

    The COP of the refrigerator is 1.67.

**(CO3, K3 - applying first law to analyze the system)**

### 3. COP for Heat Pump Systems

A heat pump's primary function is to transfer heat from a low-temperature reservoir to a high-temperature reservoir, but its desired output is the heat delivered to the high-temperature space.

*   **Desired Output:** Heat delivered to the high-temperature space ($Q_H$).
*   **Required Input:** Work input to the system ($W_{in}$).

**Definition:**
The COP of a heat pump ($COP_{HP}$) is defined as:

$COP_{HP} = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_H}{W_{in}}$

**(Cengel & Boles, Thermodynamics: An Engineering Approach, 6th Ed., Chapter 6)**

*   **Explanation:** A higher $COP_{HP}$ means that more heat is delivered to the heated space for a given amount of work input, indicating a more efficient heat pump.

**First Law Analysis for a Heat Pump Cycle:**
The energy balance is the same as for a refrigeration cycle:

$Q_L + W_{in} = Q_H$

So, $W_{in} = Q_H - Q_L$. Substituting this into the $COP_{HP}$ formula:

$COP_{HP} = \frac{Q_H}{Q_H - Q_L}$

**(P.K. Nag, Engineering Thermodynamics, 6th Ed., Chapter 10)**

*   **Relationship between $COP_R$ and $COP_{HP}$:**
    We can see a direct relationship:
    $COP_{HP} = \frac{Q_H}{W_{in}} = \frac{Q_L + W_{in}}{W_{in}} = \frac{Q_L}{W_{in}} + 1 = COP_R + 1$

    This relationship is crucial for understanding that a heat pump is essentially a refrigerator that delivers the rejected heat to a desired location.

**Example 2.2:** Consider the same system from Example 2.1, operating as a heat pump. Calculate the COP of the heat pump.

*   **Given:**
    *   $Q_L$ = 50 kJ/min
    *   $Q_H$ = 80 kJ/min
*   **To Find:** $COP_{HP}$

*   **Solution:**
    Using the relationship $COP_{HP} = COP_R + 1$:
    $COP_{HP} = 1.67 + 1 = 2.67$

    Alternatively, using the definition:
    $W_{in} = 30 \text{ kJ/min}$
    $COP_{HP} = \frac{Q_H}{W_{in}} = \frac{80 \text{ kJ/min}}{30 \text{ kJ/min}} = 2.67$

    The COP of the heat pump is 2.67.

**(CO3, K3 - applying first law to analyze the system)**

### 4. Ideal COP (Carnot COP)

The maximum possible COP for a given set of operating temperatures is achieved by a **reversible cycle**, such as the Carnot cycle.

*   **For a Carnot Refrigerator:**
    The heat transfers in a Carnot cycle are directly proportional to the absolute temperatures of the reservoirs.

    $COP_{R, \text{Carnot}} = \frac{Q_L}{Q_H - Q_L} = \frac{T_L}{T_H - T_L}$

    Where:
    *   $T_L$: Absolute temperature of the cold reservoir (in Kelvin or Rankine).
    *   $T_H$: Absolute temperature of the high-temperature reservoir (in Kelvin or Rankine).

    **(Cengel & Boles, Thermodynamics: An Engineering Approach, 6th Ed., Chapter 6)**

*   **For a Carnot Heat Pump:**
    $COP_{HP, \text{Carnot}} = \frac{Q_H}{Q_H - Q_L} = \frac{T_H}{T_H - T_L}$

    **(Cengel & Boles, Thermodynamics: An Engineering Approach, 6th Ed., Chapter 6)**

**Important Points to Remember about Ideal COP:**

*   **Theoretical Maximum:** The Carnot COP represents the theoretical upper limit for the COP of any refrigeration or heat pump system operating between the same two temperatures. Real systems will always have lower COPs due to irreversibilities.
*   **Temperature Dependence:** The COP is highly dependent on the temperature difference between the hot and cold reservoirs. A smaller temperature difference leads to a higher COP.
*   **Units of Temperature:** Always use absolute temperatures (Kelvin or Rankine) when calculating Carnot COP.

**Example 2.3:** A refrigerator operates between a cold space at -10°C and a high-temperature reservoir at 25°C. Calculate its Carnot COP.

*   **Given:**
    *   $T_L = -10^\circ\text{C} = -10 + 273.15 = 263.15 \text{ K}$
    *   $T_H = 25^\circ\text{C} = 25 + 273.15 = 298.15 \text{ K}$
*   **To Find:** $COP_{R, \text{Carnot}}$

*   **Solution:**
    $COP_{R, \text{Carnot}} = \frac{T_L}{T_H - T_L} = \frac{263.15 \text{ K}}{298.15 \text{ K} - 263.15 \text{ K}} = \frac{263.15 \text{ K}}{35 \text{ K}} \approx 7.52$

    The Carnot COP of the refrigerator is approximately 7.52.

**(CO2, K2 - understanding the second law implications for ideal performance; CO3, K3 - application of temperature in COP calculations)**

**Example 2.4:** A heat pump is designed to maintain a house at 22°C when the outside ambient temperature is -5°C. Calculate its Carnot COP.

*   **Given:**
    *   $T_{room} = 22^\circ\text{C} = 22 + 273.15 = 295.15 \text{ K}$ (This is $T_H$ for the heat pump)
    *   $T_{ambient} = -5^\circ\text{C} = -5 + 273.15 = 268.15 \text{ K}$ (This is $T_L$ for the heat pump)
*   **To Find:** $COP_{HP, \text{Carnot}}$

*   **Solution:**
    $COP_{HP, \text{Carnot}} = \frac{T_H}{T_H - T_L} = \frac{295.15 \text{ K}}{295.15 \text{ K} - 268.15 \text{ K}} = \frac{295.15 \text{ K}}{27 \text{ K}} \approx 10.93$

    The Carnot COP of the heat pump is approximately 10.93.

**(CO2, K2 - understanding the second law implications for ideal performance; CO3, K3 - application of temperature in COP calculations)**

### 5. COP for Other Cyclic Devices

**a) Heat Engines:**
For heat engines, the performance is measured by **thermal efficiency** ($\eta_{th}$), not COP.

*   **Desired Output:** Net work output ($W_{net,out}$).
*   **Required Input:** Heat input from the high-temperature reservoir ($Q_H$).

$\eta_{th} = \frac{W_{net,out}}{Q_H} = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H}$

**(Cengel & Boles, Thermodynamics: An Engineering Approach, 6th Ed., Chapter 5)**

**b) Gas Liquefaction Cycles:**
Similar to refrigeration, gas liquefaction processes aim to cool a substance to very low temperatures. Their performance is also measured by a COP.

*   **Desired Output:** Heat removed from the substance being cooled ($Q_L$).
*   **Required Input:** Work input ($W_{in}$).

$COP_{LP} = \frac{Q_L}{W_{in}}$

**(Moran & Shapiro, Fundamentals of Engineering Thermodynamics, 7th Ed., Chapter 13)**

### 6. Factors Affecting COP

*   **Temperature Difference:** As established, a smaller temperature difference between the hot and cold reservoirs significantly increases COP. This is why refrigerators work best when the outside temperature is not excessively high, and heat pumps are more effective in milder climates.
*   **Irreversibilities:** Real-world systems always have irreversibilities (e.g., friction, heat transfer across finite temperature differences, throttling) that reduce the actual COP compared to the ideal Carnot COP.
*   **System Design and Components:** The efficiency of components like compressors, heat exchangers, and expansion valves directly impacts the overall COP.

### 7. Summary of Key Concepts and Formulas

| Device            | Desired Output | Required Input | COP/Efficiency Formula                                      | Ideal (Carnot) COP/Efficiency Formula | Relationship to $Q_L, Q_H, W_{in}$ |
| :---------------- | :------------- | :------------- | :---------------------------------------------------------- | :------------------------------------ | :--------------------------------- |
| **Refrigerator**  | $Q_L$          | $W_{in}$       | $COP_R = \frac{Q_L}{W_{in}}$                                | $COP_{R, \text{Carnot}} = \frac{T_L}{T_H - T_L}$ | $W_{in} = Q_H - Q_L$               |
| **Heat Pump**     | $Q_H$          | $W_{in}$       | $COP_{HP} = \frac{Q_H}{W_{in}}$                             | $COP_{HP, \text{Carnot}} = \frac{T_H}{T_H - T_L}$ | $W_{in} = Q_H - Q_L$               |
| **Heat Engine**   | $W_{net,out}$  | $Q_H$          | $\eta_{th} = \frac{W_{net,out}}{Q_H}$                       | $\eta_{th, \text{Carnot}} = 1 - \frac{T_L}{T_H}$ | $W_{net,out} = Q_H - Q_L$          |

**Important Relationships:**
*   $COP_{HP} = COP_R + 1$
*   $Q_H = Q_L + W_{in}$ (for cyclic devices)

### 8. Practice Questions

1.  A window air conditioner cools a room by absorbing heat from the room and rejecting it to the outside. During operation, it removes 400 kJ of heat from the room and consumes 0.1 kWh of electrical energy. If the outdoor temperature is 35°C and the indoor temperature is 22°C, calculate the actual COP of the air conditioner. (Assume 1 kWh = 3600 kJ).
2.  A heat pump is used to heat a building. It absorbs heat from the ambient air at 5°C and delivers it to the building at 45°C. The heat pump requires a work input of 5 kW. What is the rate of heat delivered to the building if its COP is 3.5?
3.  Calculate the Carnot COP for a refrigeration system operating between a cold reservoir at -23°C and a hot reservoir at 27°C. What is the maximum rate of heat that can be removed from the cold reservoir if the power input is 1 kW?
4.  A refrigerator has a COP of 2. If it rejects 100 kJ of heat to the surroundings, how much heat is removed from the cold space, and what is the work input?
5.  Show that for a reversible cycle, $COP_{HP} = COP_R + 1$.

### 9. Answers to Practice Questions

1.  **Solution:**
    *   $Q_L = 400 \text{ kJ}$
    *   $W_{in} = 0.1 \text{ kWh} \times 3600 \text{ kJ/kWh} = 360 \text{ kJ}$
    *   $COP_R = \frac{Q_L}{W_{in}} = \frac{400 \text{ kJ}}{360 \text{ kJ}} = 1.11$

2.  **Solution:**
    *   $COP_{HP} = 3.5$
    *   $W_{in} = 5 \text{ kW}$
    *   $COP_{HP} = \frac{Q_H}{W_{in}} \implies Q_H = COP_{HP} \times W_{in} = 3.5 \times 5 \text{ kW} = 17.5 \text{ kW}$
    The rate of heat delivered is 17.5 kW.

3.  **Solution:**
    *   $T_L = -23^\circ\text{C} = -23 + 273.15 = 250.15 \text{ K}$
    *   $T_H = 27^\circ\text{C} = 27 + 273.15 = 300.15 \text{ K}$
    *   $COP_{R, \text{Carnot}} = \frac{T_L}{T_H - T_L} = \frac{250.15 \text{ K}}{300.15 \text{ K} - 250.15 \text{ K}} = \frac{250.15 \text{ K}}{50 \text{ K}} = 5.003$
    *   $W_{in} = 1 \text{ kW}$
    *   $COP_R = \frac{Q_L}{W_{in}} \implies Q_L = COP_R \times W_{in} = 5.003 \times 1 \text{ kW} = 5.003 \text{ kW}$
    The maximum rate of heat removed is 5.003 kW.

4.  **Solution:**
    *   $COP_R = 2$
    *   $Q_H = 100 \text{ kJ}$
    *   $COP_R = \frac{Q_L}{W_{in}} \implies Q_L = 2 W_{in}$
    *   $W_{in} = Q_H - Q_L = 100 \text{ kJ} - 2 W_{in}$
    *   $3 W_{in} = 100 \text{ kJ} \implies W_{in} = \frac{100}{3} \text{ kJ} \approx 33.33 \text{ kJ}$
    *   $Q_L = 2 W_{in} = 2 \times 33.33 \text{ kJ} \approx 66.67 \text{ kJ}$
    The heat removed is approximately 66.67 kJ, and the work input is approximately 33.33 kJ.

5.  **Solution:**
    For a reversible cycle, the heat transfer is proportional to the absolute temperature:
    $\frac{Q_L}{Q_H} = \frac{T_L}{T_H}$
    From the definitions:
    $COP_{HP} = \frac{Q_H}{W_{in}}$ and $COP_R = \frac{Q_L}{W_{in}}$
    And $W_{in} = Q_H - Q_L$.
    So, $COP_{HP} = \frac{Q_H}{Q_H - Q_L}$ and $COP_R = \frac{Q_L}{Q_H - Q_L}$.
    $COP_{HP} = \frac{Q_H - Q_L + Q_L}{Q_H - Q_L} = \frac{Q_H - Q_L}{Q_H - Q_L} + \frac{Q_L}{Q_H - Q_L} = 1 + COP_R$.
    This relationship holds true for any cycle where the First Law $W_{in} = Q_H - Q_L$ is applicable, and thus for reversible cycles which achieve the Carnot COP.

### 10. Alignment with Course Outcomes

*   **CO1 (K1, K2):** This topic introduces and defines key performance metrics (COP) for thermodynamic devices, enhancing the understanding of basic thermodynamic concepts related to energy transfer.
*   **CO2 (K1, K2):** By analyzing refrigerators and heat pumps, students gain a deeper understanding of the First Law of Thermodynamics and its application in cyclic devices. The introduction of Carnot COP implicitly connects to the Second Law's implications for efficiency limits.
*   **CO3 (K3):** The core of this topic involves applying the First Law of Thermodynamics to open and closed systems (implicitly, as cyclic devices are often analyzed as control volumes in steady flow) to derive and utilize COP formulas. Examples and practice questions directly assess this ability.
*   **CO5 (K2, K3):** While not directly dealing with pure substance properties, understanding the heat transfer ($Q_L$, $Q_H$) and work ($W_{in}$) often relies on the ability to determine or be given these properties, which are derived from substance behavior.

This comprehensive set of notes should provide a solid foundation for understanding the Coefficient of Performance in the context of the First Law of Thermodynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
