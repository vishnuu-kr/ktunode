---
title: "coefficient of performance (COP)"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 1: Introduction to refrigeration and air conditioning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f5a"
status: "completed"
scrapedAt: "2026-05-20T18:17:06.936Z"
---
# Module 1: Introduction to Refrigeration and Air Conditioning

## Topic: Coefficient of Performance (COP)

### 1. Introduction to Refrigeration and Air Conditioning

*   **Refrigeration:** The process of removing heat from a substance or space to maintain it at a temperature lower than its surroundings. This is primarily achieved by absorbing heat from the refrigerated space and rejecting it to a higher temperature heat sink.
*   **Air Conditioning:** The process of treating air to control its temperature, humidity, cleanliness, and motion to meet the comfort requirements of occupants or the process requirements of an application. It encompasses both cooling and heating, as well as humidity control and air purification.

### 2. Performance Evaluation of Refrigeration and Air Conditioning Systems

The performance of refrigeration and air conditioning systems is evaluated based on their efficiency in delivering the desired cooling or heating effect relative to the energy input required. This efficiency is quantified by the **Coefficient of Performance (COP)**.

### 3. Coefficient of Performance (COP)

The Coefficient of Performance (COP) is a dimensionless ratio that represents the ratio of the desired output (refrigeration effect or heating effect) to the required input (work input or heat input).

#### 3.1. COP for Refrigeration Systems (COP_R)

*   **Definition:** The COP of a refrigeration system is the ratio of the **useful refrigeration effect** (heat absorbed from the cold reservoir) to the **net work input** required to drive the system.

*   **Formula:**
    $COP_R = \frac{\text{Refrigeration Effect (Desired Output)}}{\text{Net Work Input (Required Input)}}$

    In terms of heat and work transfer in a cycle:
    $COP_R = \frac{Q_L}{W_{in}}$

    Where:
    *   $Q_L$ is the heat absorbed from the cold reservoir (refrigeration effect).
    *   $W_{in}$ is the net work input to the system (e.g., work done by the compressor).

*   **Knowledge Level (CO1, K2, K4):** Understanding and describing this definition and formula falls under Knowledge Level 2 (K2) and analyzing its implications for system performance is K4.

*   **Key Concepts:**
    *   **Refrigeration Effect ($Q_L$):** The amount of heat removed from the refrigerated space or substance. It is typically measured in kW or BTU/hr.
    *   **Work Input ($W_{in}$):** The energy consumed by the system to operate, most commonly in the form of electrical energy powering a compressor.
    *   **High COP is desirable:** A higher COP indicates that the system is more efficient in producing cooling for a given amount of work input.

*   **Example:** A refrigeration system absorbs 10 kJ of heat from the cold space and requires 2 kJ of work input to operate.
    $COP_R = \frac{10 \text{ kJ}}{2 \text{ kJ}} = 5$
    This means the system delivers 5 units of cooling for every 1 unit of work input.

*   **Important Point to Remember:** For refrigeration systems, the COP is always greater than 1, as the refrigeration effect is inherently larger than the work input required to achieve it.

#### 3.2. COP for Heat Pump Systems (COP_HP)

*   **Definition:** The COP of a heat pump system is the ratio of the **useful heating effect** (heat delivered to the hot reservoir) to the **net work input** required to drive the system.

*   **Formula:**
    $COP_{HP} = \frac{\text{Heating Effect (Desired Output)}}{\text{Net Work Input (Required Input)}}$

    In terms of heat and work transfer in a cycle:
    $COP_{HP} = \frac{Q_H}{W_{in}}$

    Where:
    *   $Q_H$ is the heat delivered to the hot reservoir (heating effect).
    *   $W_{in}$ is the net work input to the system.

*   **Knowledge Level (CO1, K2, K4):** Similar to COP_R, this definition and formula are K2, and their application to heat pump performance is K4.

*   **Relationship between COP_R and COP_HP:**
    From the First Law of Thermodynamics for a cycle, the heat rejected ($Q_H$) is equal to the heat absorbed ($Q_L$) plus the work input ($W_{in}$):
    $Q_H = Q_L + W_{in}$

    Therefore, the COP of a heat pump can be expressed in terms of the COP of a refrigeration system:
    $COP_{HP} = \frac{Q_H}{W_{in}} = \frac{Q_L + W_{in}}{W_{in}} = \frac{Q_L}{W_{in}} + \frac{W_{in}}{W_{in}} = COP_R + 1$

*   **Example:** Consider the previous refrigeration system. If it were operated as a heat pump, it would absorb 10 kJ from the cold space and require 2 kJ of work. The heat rejected to the hot space would be $10 \text{ kJ} + 2 \text{ kJ} = 12 \text{ kJ}$.
    $COP_{HP} = \frac{12 \text{ kJ}}{2 \text{ kJ}} = 6$
    Alternatively, $COP_{HP} = COP_R + 1 = 5 + 1 = 6$.

*   **Important Point to Remember:** The COP of a heat pump is always higher than the COP of the same system operating as a refrigerator, by exactly 1. This is because the desired output for a heat pump includes both the heat absorbed from the cold source and the work input.

#### 3.3. Carnot COP (Ideal COP)

*   **Definition:** The Carnot COP represents the maximum possible COP for a refrigeration or heat pump cycle operating between two given temperature reservoirs. It is based on the reversible Carnot cycle, which is the most efficient thermodynamic cycle possible.

*   **Formulas:**
    For a Carnot refrigerator:
    $COP_{R, Carnot} = \frac{T_L}{T_H - T_L}$

    For a Carnot heat pump:
    $COP_{HP, Carnot} = \frac{T_H}{T_H - T_L}$

    Where:
    *   $T_L$ is the absolute temperature of the cold reservoir (in Kelvin or Rankine).
    *   $T_H$ is the absolute temperature of the hot reservoir (in Kelvin or Rankine).
    *   **Crucially, temperatures must be in absolute units (Kelvin or Rankine).**

*   **Knowledge Level (CO1, K2, K4):** Understanding these formulas and their theoretical implications is K2, and analyzing them in the context of ideal cycles is K4.

*   **Example:** A Carnot refrigerator operates between $-5^\circ C$ (268.15 K) and $25^\circ C$ (298.15 K).
    $COP_{R, Carnot} = \frac{268.15 \text{ K}}{298.15 \text{ K} - 268.15 \text{ K}} = \frac{268.15}{30} \approx 8.94$

    For a Carnot heat pump operating between the same temperatures:
    $COP_{HP, Carnot} = \frac{298.15 \text{ K}}{298.15 \text{ K} - 268.15 \text{ K}} = \frac{298.15}{30} \approx 9.94$

*   **Important Point to Remember:** The Carnot COP sets an upper limit on the performance of any refrigeration or heat pump system operating between the same temperature limits. Real systems always have lower COPs due to irreversible processes (friction, heat transfer across finite temperature differences, etc.).

#### 3.4. Factors Affecting COP in Real Systems

*   **Temperature Difference:** A larger temperature difference between the cold and hot reservoirs ($T_H - T_L$) leads to a lower COP for both refrigeration and heat pump systems. This is evident from the Carnot COP formulas.
*   **Irreversibilities:** Real cycles involve irreversible processes, such as:
    *   Friction in compressors and pumps.
    *   Heat transfer across finite temperature differences (exergy destruction).
    *   Throttling process in expansion valves.
*   **System Design and Component Efficiency:** The efficiency of individual components (compressor, evaporator, condenser, expansion valve) significantly impacts the overall COP.
*   **Refrigerant Properties:** The thermodynamic properties of the refrigerant used influence the COP.
*   **Operating Conditions:** Variations in load and ambient conditions can affect COP.

### 4. COP in Air Conditioning

While the primary function of an air conditioner is cooling, it also controls humidity and can provide heating.

*   **Cooling Mode (Air Conditioner):** The COP is calculated as the ratio of the **cooling capacity** (heat removed from the conditioned space) to the **electrical power consumed** by the system (compressor, fans, etc.).
    $COP_{AC} = \frac{\text{Cooling Capacity}}{\text{Power Input}}$

*   **Heating Mode (Heat Pump Function):** When an air conditioner operates in reverse cycle for heating, its performance is measured by the COP of a heat pump.
    $COP_{AC(Heating)} = \frac{\text{Heating Capacity}}{\text{Power Input}}$

*   **Energy Efficiency Ratio (EER):** In many countries, the energy efficiency of air conditioners is also expressed using the EER. EER is the ratio of the cooling capacity in BTU/hr to the power input in Watts.
    $EER = \frac{\text{Cooling Capacity (BTU/hr)}}{\text{Power Input (Watts)}}$

    The relationship between COP and EER is:
    $COP = \frac{EER}{3.412}$
    This means a higher EER corresponds to a higher COP.

*   **Seasonal Energy Efficiency Ratio (SEER):** SEER is a measure of the energy efficiency of an air conditioner over an entire cooling season. It accounts for variations in cooling load and ambient temperatures. SEER is generally higher than EER.

*   **Knowledge Level (CO1, K2, K4):** Understanding these different metrics for air conditioning is K2, and analyzing their implications for energy consumption is K4.

### 5. Practice Questions and Exercises

**Question 1:**
A vapor compression refrigeration system has a cooling capacity of 5 kW. The work input to the compressor is 1.5 kW. Calculate the COP of the refrigeration system.
*   **Answer:**
    $COP_R = \frac{\text{Cooling Capacity}}{\text{Work Input}} = \frac{5 \text{ kW}}{1.5 \text{ kW}} = 3.33$

**Question 2:**
A heat pump is used for heating a building. It absorbs heat from the outdoor air at $5^\circ C$ and delivers heat to the indoor air at $25^\circ C$. If the COP of the heat pump is 3.5, what is the ratio of the heating delivered to the work input?
*   **Answer:**
    The ratio of heating delivered to work input is the definition of COP for a heat pump.
    $COP_{HP} = 3.5$

**Question 3:**
Calculate the Carnot COP for a refrigerator operating between $-10^\circ C$ and $30^\circ C$.
*   **Answer:**
    Convert temperatures to Kelvin:
    $T_L = -10^\circ C = 263.15 \text{ K}$
    $T_H = 30^\circ C = 303.15 \text{ K}$
    $COP_{R, Carnot} = \frac{T_L}{T_H - T_L} = \frac{263.15 \text{ K}}{303.15 \text{ K} - 263.15 \text{ K}} = \frac{263.15}{40} = 6.58$

**Question 4:**
If the Carnot COP of a heat pump operating between $2^\circ C$ and $40^\circ C$ is 8.5, what is the actual COP of a real heat pump operating between the same temperatures if its COP is 70% of the Carnot COP?
*   **Answer:**
    First, calculate the Carnot COP:
    $T_L = 2^\circ C = 275.15 \text{ K}$
    $T_H = 40^\circ C = 313.15 \text{ K}$
    $COP_{HP, Carnot} = \frac{T_H}{T_H - T_L} = \frac{313.15 \text{ K}}{313.15 \text{ K} - 275.15 \text{ K}} = \frac{313.15}{38} \approx 8.24$
    Actual COP = 70% of Carnot COP = $0.70 \times 8.24 \approx 5.77$

**Question 5:**
An air conditioner has a cooling capacity of 12,000 BTU/hr and consumes 1.2 kW of electrical power. Calculate its COP.
*   **Answer:**
    Convert power to BTU/hr:
    Power input = $1.2 \text{ kW} \times 3412 \text{ BTU/hr/kW} = 4094.4 \text{ BTU/hr}$
    $COP = \frac{\text{Cooling Capacity}}{\text{Power Input}} = \frac{12000 \text{ BTU/hr}}{4094.4 \text{ BTU/hr}} \approx 2.93$

### 6. Highlighting Important Points to Remember

*   **COP is a measure of efficiency:** Higher COP means a more efficient system.
*   **$COP_R = Q_L / W_{in}$:** For refrigeration, it's heat absorbed divided by work input.
*   **$COP_{HP} = Q_H / W_{in}$:** For heat pumps, it's heat delivered divided by work input.
*   **$COP_{HP} = COP_R + 1$:** The COP of a heat pump is always 1 greater than the COP of the same system as a refrigerator.
*   **Carnot COP is the theoretical maximum:** Real systems always have lower COPs due to irreversibilities.
*   **Absolute temperatures (K or R) are crucial for Carnot COP calculations.**
*   **The temperature difference ($T_H - T_L$) significantly impacts COP:** A smaller difference leads to a higher COP.
*   **EER and SEER are common metrics for air conditioning efficiency.**

### 7. Referencing Textbooks and Course Outcomes Alignment

This topic is fundamental to understanding the performance of refrigeration and air conditioning systems, directly aligning with **Course Outcome CO1: Define and describe the basic concepts and applications of refrigeration and air conditioning and analyse performance of ideal refrigeration cycles (Knowledge Level: K2, K4)**.

*   **Arora C.P. (4th edition/2021):** Chapters on basic refrigeration and air conditioning principles will cover the definition and calculation of COP for various cycles. The concept of ideal cycles and their performance limits will also be discussed.
*   **Ramesh Chandra Arora (4th Printing/2015):** Similar to Arora C.P., this text will detail the thermodynamic analysis of refrigeration cycles, including the evaluation of COP for practical and ideal scenarios.
*   **Arora S. C. and Domkundwar (2018):** This book will likely provide a clear explanation of COP as a performance indicator, with examples relevant to different refrigeration and heat pump applications.
*   **Ahamadul Ameen (2020):** The foundational concepts of refrigeration, including COP, will be a key focus in the introductory chapters.
*   **W P Jones (5th edition/2001):** This text, focusing on air conditioning engineering, will cover COP in the context of air conditioning equipment, potentially introducing metrics like EER and SEER.
*   **C P Kothandaraman (2023):** The data book will provide tables and charts that can be used to calculate performance parameters and understand the effect of various thermodynamic properties on COP.
*   **P Nananthanarayanan (4th Edition 2013):** Will offer fundamental principles and likely provide comparative analysis of different systems through their COP values.
*   **Stoecker & Jons (2nd edition):** A classic text that will offer in-depth coverage of refrigeration cycles and their thermodynamic performance, including detailed explanations of COP.

The knowledge levels are met as follows:
*   **K2 (Understand):** Defining COP, understanding its formulas and its meaning.
*   **K4 (Analyze):** Analyzing the factors affecting COP, comparing the COP of real vs. ideal cycles, and understanding the implications of different COP values for system efficiency and energy consumption.

This comprehensive set of notes provides a solid foundation for understanding the Coefficient of Performance in Refrigeration and Air Conditioning.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
