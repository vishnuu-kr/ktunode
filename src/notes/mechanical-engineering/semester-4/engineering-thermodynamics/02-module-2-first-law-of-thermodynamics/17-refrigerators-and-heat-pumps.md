---
title: "refrigerators and heat pumps"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f54"
status: "completed"
scrapedAt: "2026-05-20T17:53:32.437Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics
## Topic: Refrigerators and Heat Pumps

This module focuses on the application of the First Law of Thermodynamics to cyclical devices that transfer heat. We will explore the operation, performance analysis, and fundamental principles governing refrigerators and heat pumps.

---

### **1. Introduction to Refrigerators and Heat Pumps**

Refrigerators and heat pumps are inverse refrigeration cycles. Instead of rejecting heat to a high-temperature reservoir and absorbing heat from a low-temperature reservoir, they absorb heat from a low-temperature reservoir and reject heat to a high-temperature reservoir.

**Key Concepts:**

*   **Refrigeration:** The process of maintaining a space at a lower temperature than its surroundings.
*   **Heat Pump:** A device that transfers heat from a low-temperature source to a high-temperature sink. Essentially, it's a refrigerator operating in reverse for heating purposes.
*   **Heat Engine:** A device that converts heat into work. Refrigerators and heat pumps are fundamentally different from heat engines, as they require work input to transfer heat.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Introduces the fundamental purpose of these devices.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *Sets the stage for applying the First Law.*

---

### **2. The Reversed Carnot Cycle**

The reversed Carnot cycle serves as an ideal theoretical cycle for refrigeration and heat pumps. It consists of four reversible processes:

1.  **Isentropic Compression:** The refrigerant (working fluid) is compressed reversibly and adiabatically, increasing its temperature and pressure.
2.  **Isothermal Heat Rejection:** The refrigerant rejects heat to the high-temperature reservoir at constant temperature ($T_H$), condensing from vapor to liquid.
3.  **Isentropic Expansion:** The refrigerant expands reversibly and adiabatically, decreasing its temperature and pressure.
4.  **Isothermal Heat Absorption:** The refrigerant absorbs heat from the low-temperature reservoir at constant temperature ($T_L$), vaporizing from liquid to vapor.

**Key Concepts:**

*   **Reversible Process:** A process that can be reversed without leaving any net change in the system or surroundings.
*   **Adiabatic Process:** A process where no heat is transferred between the system and its surroundings ($Q=0$).
*   **Isothermal Process:** A process where the temperature remains constant ($\Delta T = 0$).

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. This chapter likely details the reversed Carnot cycle as an ideal benchmark.
*   Nag (2017) - Chapter 9: Vapor Compression Refrigeration Cycles. The reversed Carnot cycle is a foundational concept discussed here.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Reinforces understanding of reversible processes and adiabatic/isothermal conditions.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *Illustrates the application of the First Law in a cyclical process.*

---

### **3. Performance of Refrigerators and Heat Pumps**

The performance of refrigerators and heat pumps is evaluated using **Coefficients of Performance (COP)**. Unlike heat engines where efficiency is less than 1, COP values can be greater than 1.

#### 3.1 Coefficient of Performance for Refrigerators ($COP_R$)

The COP of a refrigerator is defined as the ratio of the desired output (heat removed from the cold space, $Q_L$) to the required input (work input, $W_{in}$).

$$
COP_R = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_L}{W_{in}}
$$

According to the First Law of Thermodynamics for a cycle, the net work input is equal to the net heat transfer:

$$
W_{in} = Q_H - Q_L
$$

Where:
*   $Q_L$ is the heat absorbed from the cold reservoir.
*   $Q_H$ is the heat rejected to the hot reservoir.

Substituting this into the COP formula:

$$
COP_R = \frac{Q_L}{Q_H - Q_L}
$$

**For the ideal (Reversed Carnot) refrigerator:**

Since $Q \propto T$ for isothermal processes in a reversible cycle:

$$
COP_{R, ideal} = \frac{Q_L}{Q_H - Q_L} = \frac{T_L}{T_H - T_L}
$$

**Important Note:** Temperatures ($T_L$ and $T_H$) must be in absolute units (Kelvin or Rankine).

#### 3.2 Coefficient of Performance for Heat Pumps ($COP_{HP}$)

The COP of a heat pump is defined as the ratio of the desired output (heat delivered to the hot space, $Q_H$) to the required input (work input, $W_{in}$).

$$
COP_{HP} = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_H}{W_{in}}
$$

Substituting $W_{in} = Q_H - Q_L$:

$$
COP_{HP} = \frac{Q_H}{Q_H - Q_L}
$$

**For the ideal (Reversed Carnot) heat pump:**

$$
COP_{HP, ideal} = \frac{Q_H}{Q_H - Q_L} = \frac{T_H}{T_H - T_L}
$$

**Important Relationship:**

Notice that $COP_{HP} = COP_R + 1$. This makes intuitive sense because the heat pump delivers both the heat absorbed from the cold reservoir ($Q_L$) and the work input ($W_{in}$), whereas the refrigerator only aims to remove $Q_L$.

**Key Concepts:**

*   **Coefficient of Performance (COP):** A measure of the efficiency of refrigerators and heat pumps.
*   **Absolute Temperature:** Temperatures must be in Kelvin (K) or Rankine (°R) for COP calculations.

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. This section will provide detailed derivations and discussions on COP.
*   Nag (2017) - Chapter 9: Vapor Compression Refrigeration Cycles. COP calculations are central to performance analysis.
*   Moran & Shapiro (2006) - Chapter 11: Refrigeration and Heat Pumps. Expect thorough coverage of COP and its implications.
*   Sonntag, Borgnakke, & VanWylen (2014) - Chapter 13: Refrigeration and Power Cycles. This chapter will cover performance metrics for these cycles.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Defines and explains performance metrics.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *Applies the First Law to derive COP formulas.*
*   **CO3:** Conduct first law analysis of open and closed systems (Knowledge Level: K3) - *The COP formulas are derived from First Law analysis of the cyclic devices.*

---

### **4. Types of Refrigeration Cycles**

While the reversed Carnot cycle is ideal, real-world refrigeration systems operate on practical cycles. The most common is the **Vapor-Compression Refrigeration Cycle**.

#### 4.1 Vapor-Compression Refrigeration Cycle

This cycle is the most widely used in domestic refrigerators, air conditioners, and industrial refrigeration. It involves the phase change of a refrigerant. The main components are:

1.  **Compressor:** Compresses the refrigerant vapor from low pressure to high pressure. This is where work is input.
2.  **Condenser:** Rejects heat from the high-pressure refrigerant vapor to the surroundings (high-temperature reservoir), causing it to condense into a liquid.
3.  **Expansion Valve (Throttling Device):** Reduces the pressure and temperature of the liquid refrigerant, typically through an isenthalpic process (constant enthalpy).
4.  **Evaporator:** Absorbs heat from the refrigerated space (low-temperature reservoir), causing the liquid refrigerant to vaporize.

**Key Processes in the Cycle:**

*   **1-2: Compression:** Adiabatic (ideally reversible adiabatic) compression of refrigerant vapor.
*   **2-3: Condensation:** Isobaric heat rejection to the surroundings, phase change from superheated vapor to saturated liquid.
*   **3-4: Expansion:** Isenthalpic throttling (constant enthalpy) of liquid refrigerant.
*   **4-1: Evaporation:** Isobaric heat absorption from the refrigerated space, phase change from saturated liquid to superheated vapor.

**Diagrams:**

*   **P-h Diagram (Pressure-Enthalpy):** This is the most useful diagram for analyzing vapor-compression cycles. The processes are represented as follows:
    *   Compression: Vertical line upwards.
    *   Condensation: Horizontal line at constant pressure.
    *   Expansion: Vertical line downwards (constant enthalpy).
    *   Evaporation: Horizontal line at constant pressure.
*   **T-s Diagram (Temperature-Entropy):** Shows the cycle as a closed loop.

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. This chapter will have detailed diagrams and explanations of the vapor-compression cycle.
*   Nag (2017) - Chapter 9: Vapor Compression Refrigeration Cycles. Excellent coverage with P-h and T-s diagrams.
*   Moran & Shapiro (2006) - Chapter 11: Refrigeration and Heat Pumps. Detailed analysis of this cycle.
*   Sonntag, Borgnakke, & VanWylen (2014) - Chapter 13: Refrigeration and Power Cycles.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Introduces practical cycles and their components.*
*   **CO3:** Conduct first law analysis of open and closed systems (Knowledge Level: K3) - *The analysis of each component (compressor, condenser, evaporator, expansion valve) involves applying the First Law.*
*   **CO5:** Determine the properties of pure substances (Knowledge Level: K2, K3) - *Analyzing the cycle requires using refrigerant property tables or charts (like P-h diagrams).*

---

### **5. First Law Analysis of Components**

Applying the First Law of Thermodynamics to each component of the vapor-compression cycle allows for the calculation of heat and work interactions.

#### 5.1 Compressor

Assuming a steady-flow process, the First Law for the compressor (a control volume) is:

$$
\dot{Q}_{comp} + \dot{m} (h_1 + \frac{V_1^2}{2} + gz_1) = \dot{W}_{comp} + \dot{m} (h_2 + \frac{V_2^2}{2} + gz_2)
$$

Where:
*   $\dot{Q}_{comp}$ is the heat transfer to the compressor.
*   $\dot{W}_{comp}$ is the work done *on* the compressor.
*   $\dot{m}$ is the mass flow rate of the refrigerant.
*   $h$ is the specific enthalpy.
*   $V$ is the velocity.
*   $z$ is the elevation.

**Simplifications:**

*   **Adiabatic Compression:** $\dot{Q}_{comp} \approx 0$ (ideally).
*   **Kinetic and Potential Energy Changes:** Usually negligible for refrigerants.

So, for an adiabatic compressor:

$$
\dot{W}_{comp, in} = \dot{m} (h_2 - h_1)
$$

#### 5.2 Condenser

For a steady-flow condenser:

$$
\dot{Q}_{out, cond} + \dot{m} (h_2 + \frac{V_2^2}{2} + gz_2) = \dot{m} (h_3 + \frac{V_3^2}{2} + gz_3)
$$

Assuming negligible kinetic and potential energy changes:

$$
\dot{Q}_{out, cond} = \dot{m} (h_2 - h_3)
$$

This is the rate of heat rejected to the hot reservoir.

#### 5.3 Expansion Valve (Throttling Device)

The expansion valve is a simple device where the refrigerant undergoes a throttling process. For steady flow through a throttling device, it's assumed to be adiabatic, and kinetic and potential energy changes are negligible. The First Law reduces to:

$$
h_4 = h_3
$$

This means the enthalpy remains constant during the throttling process.

#### 5.4 Evaporator

For a steady-flow evaporator:

$$
\dot{Q}_{in, evap} + \dot{m} (h_4 + \frac{V_4^2}{2} + gz_4) = \dot{m} (h_1 + \frac{V_1^2}{2} + gz_1)
$$

Assuming negligible kinetic and potential energy changes:

$$
\dot{Q}_{in, evap} = \dot{m} (h_1 - h_4)
$$

This is the rate of heat absorbed from the cold reservoir ($Q_L$).

**Calculating COP from Enthalpies:**

Using the above relations, we can express COP in terms of enthalpies:

$$
COP_R = \frac{\dot{Q}_{in, evap}}{\dot{W}_{comp, in}} = \frac{\dot{m}(h_1 - h_4)}{\dot{m}(h_2 - h_1)} = \frac{h_1 - h_4}{h_2 - h_1}
$$

$$
COP_{HP} = \frac{\dot{Q}_{out, cond}}{\dot{W}_{comp, in}} = \frac{\dot{m}(h_2 - h_3)}{\dot{m}(h_2 - h_1)} = \frac{h_2 - h_3}{h_2 - h_1}
$$

**Important Note:** For calculations, it is essential to use the correct refrigerant properties from tables or charts.

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. Detailed First Law analysis of each component.
*   Nag (2017) - Chapter 9: Vapor Compression Refrigeration Cycles. Focus on enthalpy changes for performance analysis.
*   Moran & Shapiro (2006) - Chapter 11: Refrigeration and Heat Pumps. Thorough application of the First Law to component analysis.
*   Sonntag, Borgnakke, & VanWylen (2014) - Chapter 13: Refrigeration and Power Cycles.

**Alignment with Course Outcomes:**

*   **CO3:** Conduct first law analysis of open and closed systems (Knowledge Level: K3) - *This section is entirely about applying the First Law to open systems (components).*
*   **CO5:** Determine the properties of pure substances (Knowledge Level: K2, K3) - *Crucial for finding enthalpy values (h) from tables.*

---

### **6. Ideal vs. Real Cycles**

The reversed Carnot cycle represents the maximum possible performance. Real vapor-compression cycles deviate from this ideal due to:

*   **Irreversibilities:** Friction, non-quasi-equilibrium processes.
*   **Pressure Drops:** In piping and heat exchangers.
*   **Heat Transfer to Surroundings:** During compression and expansion (if not perfectly adiabatic).
*   **Superheating and Subcooling:** In the evaporator and condenser, respectively.
*   **Non-ideal Compression:** Real compressors do not achieve isentropic compression.

**Impact on Performance:**

*   **Lower COP:** Irreversibilities increase the work input required and/or reduce the heat transfer.
*   **Deviation from Ideal Cycles:** Real cycles have different shapes on thermodynamic diagrams compared to the ideal reversed Carnot cycle.

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. Discusses limitations of ideal cycles and the impact of irreversibilities.
*   Nag (2017) - Chapter 9: Vapor Compression Refrigeration Cycles. Compares ideal and actual cycles.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Introduces the concept of irreversibility and its impact on performance.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *Relates practical limitations to deviations from ideal thermodynamic behavior.*

---

### **7. Other Refrigeration Cycles (Brief Mention)**

While vapor-compression is dominant, other cycles exist:

*   **Vapor-Absorption Refrigeration:** Uses a heat source instead of work input to drive the cycle (e.g., ammonia-water systems).
*   **Gas Refrigeration Cycles (e.g., Brayton Cycle Refrigeration):** Uses a gas as the refrigerant, typically for very low-temperature applications.
*   **Stirling Cycle Refrigeration:** A closed-cycle refrigeration method.

**Textbook Reference:**

*   Cengel, Boles, & Kanoğlu (2011) - Chapter 11: Refrigeration and Air-Conditioning Systems. May briefly introduce these.
*   Nag (2017) - Chapter 10: Other Refrigeration Systems. Likely covers these in more detail.

**Alignment with Course Outcomes:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *Broadens understanding of refrigeration principles.*

---

### **8. Key Points to Remember**

*   **Refrigerators and heat pumps are inverse refrigeration cycles.** They require work input.
*   **COP is used for performance evaluation, not efficiency.** COP can be greater than 1.
*   **$COP_R = Q_L / W_{in}$** (for refrigeration)
*   **$COP_{HP} = Q_H / W_{in}$** (for heating)
*   **$COP_{HP} = COP_R + 1$**
*   **Ideal COP depends only on the absolute temperatures of the reservoirs: $COP_{R, ideal} = T_L / (T_H - T_L)$ and $COP_{HP, ideal} = T_H / (T_H - T_L)$.**
*   **The vapor-compression cycle is the most common practical cycle.**
*   **P-h diagrams are essential for analyzing vapor-compression cycles.**
*   **First Law analysis is applied to each component (compressor, condenser, evaporator, expansion valve).**
*   **Enthalpy is constant across a throttling valve ($h_3 = h_4$).**
*   **Real cycles have lower COP than ideal cycles due to irreversibilities.**

---

### **9. Practice Questions and Exercises**

**Question 1:**

A refrigerator maintains its refrigerated space at -18°C when the surroundings are at 25°C. The heat leakage into the refrigerator is 0.5 kW. If the refrigerator consumes 1.5 kW of electrical power, determine its coefficient of performance ($COP_R$). Is this a good performance?

**Question 2:**

A heat pump is used to heat a house. It extracts heat from the outside air at 5°C and delivers it to the house at 50°C. The rate of heat delivery required is 20 kW. Determine the minimum power required by the heat pump.

**Question 3:**

A simple vapor-compression refrigeration system uses refrigerant-134a. The refrigerant enters the compressor as a saturated vapor at -20°C and leaves the compressor as a superheated vapor at 1 MPa and 60°C. The condenser pressure is 1 MPa, and the refrigerant leaves the condenser as a saturated liquid. The expansion valve throttles the refrigerant to -20°C.

Using the provided P-h diagram for R-134a (or property tables), determine:
a) The mass flow rate of the refrigerant if the cooling load is 300 kW.
b) The $COP_R$ of the system.
c) The power input to the compressor.

*(Note: To answer this question fully, you would need access to R-134a property tables or a P-h diagram. The enthalpy values would be looked up at the given states.)*

**Example of using property tables (hypothetical values for illustration):**

Let's assume from R-134a tables:
*   State 1 (Saturated vapor at -20°C): $h_1 = 240 \text{ kJ/kg}$, $P_1 = 0.106 \text{ MPa}$
*   State 2 (Superheated vapor at 1 MPa, 60°C): $h_2 = 295 \text{ kJ/kg}$
*   State 3 (Saturated liquid at 1 MPa): $h_3 = 100 \text{ kJ/kg}$ (This is assumed from saturation pressure corresponding to condensation temperature, e.g., ~40°C at 1 MPa)
*   State 4 (Throttled from state 3): $h_4 = h_3 = 100 \text{ kJ/kg}$

**Calculations for Question 3 (using hypothetical values):**

*   **Heat absorbed in evaporator ($q_L$):** $q_L = h_1 - h_4 = 240 - 100 = 140 \text{ kJ/kg}$
*   **Work input to compressor ($w_{in}$):** $w_{in} = h_2 - h_1 = 295 - 240 = 55 \text{ kJ/kg}$
*   **Heat rejected in condenser ($q_H$):** $q_H = h_2 - h_3 = 295 - 100 = 195 \text{ kJ/kg}$
*   **a) Mass flow rate ($\dot{m}$):** $\dot{m} = \frac{\text{Cooling Load}}{q_L} = \frac{300 \text{ kW}}{140 \text{ kJ/kg}} = 2.14 \text{ kg/s}$
*   **b) $COP_R$:** $COP_R = \frac{q_L}{w_{in}} = \frac{140}{55} \approx 2.55$
*   **c) Power input to compressor ($\dot{W}_{in}$):** $\dot{W}_{in} = \dot{m} \times w_{in} = 2.14 \text{ kg/s} \times 55 \text{ kJ/kg} = 117.7 \text{ kW}$

---

### **10. Answers to Practice Questions**

**Answer 1:**

*   **Desired output (heat removed):** $Q_L = 0.5 \text{ kW}$
*   **Work input:** $W_{in} = 1.5 \text{ kW}$
*   **$COP_R = Q_L / W_{in} = 0.5 \text{ kW} / 1.5 \text{ kW} \approx 0.33$**
*   **Is this good?** No. Typical $COP_R$ values for domestic refrigerators are in the range of 2 to 4. A COP of 0.33 indicates very poor performance, likely due to significant inefficiencies or excessive heat leakage.

**Answer 2:**

*   **Desired output (heat delivered):** $Q_H = 20 \text{ kW}$
*   **Temperatures:** $T_L = 5^\circ\text{C} = 5 + 273.15 = 278.15 \text{ K}$, $T_H = 50^\circ\text{C} = 50 + 273.15 = 323.15 \text{ K}$
*   **Minimum power required (for an ideal Carnot heat pump):**
    $COP_{HP, ideal} = \frac{T_H}{T_H - T_L} = \frac{323.15}{323.15 - 278.15} = \frac{323.15}{45} \approx 7.18$
    $COP_{HP} = \frac{Q_H}{W_{in, min}}$
    $W_{in, min} = \frac{Q_H}{COP_{HP, ideal}} = \frac{20 \text{ kW}}{7.18} \approx 2.78 \text{ kW}$
*   **The minimum power required by the heat pump is approximately 2.78 kW.**

**Answer 3 (using hypothetical values provided in the question):**

a) The mass flow rate of the refrigerant is **2.14 kg/s**.
b) The $COP_R$ of the system is approximately **2.55**.
c) The power input to the compressor is **117.7 kW**.

---

This concludes the study notes for refrigerators and heat pumps within Module 2 of Engineering Thermodynamics. Remember to consult your textbooks for more in-depth explanations, diagrams, and detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
