---
title: "Study and performance test on refrigeration (Refrigeration Test rig)"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 14: Study and performance test on refrigeration (Refrigeration Test rig)"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c67"
status: "completed"
scrapedAt: "2026-05-20T18:09:20.680Z"
---
# THERMAL ENGINEERING LAB-2: Study and Performance Test on Refrigeration (Refrigeration Test Rig)

## Module 14

### Topic: Study and Performance Test on Refrigeration (Refrigeration Test Rig)

---

### 1. Introduction to Refrigeration

Refrigeration is a process of removing heat from a low-temperature reservoir and transferring it to a high-temperature reservoir. This is typically achieved using a refrigeration cycle, the most common of which is the **vapor-compression refrigeration cycle**.

**Key Concepts:**

*   **Refrigeration System:** A system designed to achieve and maintain a temperature below the ambient temperature.
*   **Refrigerant:** A working fluid that undergoes phase changes (evaporation and condensation) to absorb and reject heat.
*   **Cooling Effect/Capacity:** The rate at which heat is removed from the refrigerated space, usually measured in kW or Tons of Refrigeration (TR).
*   **Heat Rejected:** The amount of heat transferred to the high-temperature reservoir.
*   **Work Input:** The energy required to drive the refrigeration cycle, typically supplied by a compressor.

**Reference:** While the provided reference books (Ganesan, Heywood, Turns) primarily focus on Internal Combustion Engines and Combustion, the fundamental principles of thermodynamics, particularly heat transfer and work, are applicable to understanding refrigeration cycles. For a deeper understanding of refrigeration, standard textbooks on HVAC&R (Heating, Ventilation, Air Conditioning, and Refrigeration) are recommended, such as "Principles of Refrigeration" by Roy J. Dossat.

---

### 2. The Vapor-Compression Refrigeration Cycle

This is the most widely used refrigeration cycle. It consists of four main components:

*   **Compressor:** Compresses the refrigerant vapor from low pressure and temperature to high pressure and temperature.
*   **Condenser:** Rejects heat from the high-pressure, high-temperature vapor to the surroundings, causing it to condense into a high-pressure liquid.
*   **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the high-pressure liquid refrigerant, preparing it for evaporation. This is an **isenthalpic** process.
*   **Evaporator:** Absorbs heat from the refrigerated space, causing the low-pressure liquid refrigerant to evaporate into a low-pressure vapor.

**Cycle Diagram (P-h Diagram):**

A Pressure-Enthalpy (P-h) diagram is crucial for analyzing the vapor-compression cycle. It plots the thermodynamic properties of the refrigerant.

*   **State 1:** Low-pressure, low-temperature vapor entering the compressor.
*   **State 2:** High-pressure, high-temperature superheated vapor leaving the compressor.
*   **State 3:** High-pressure, saturated or subcooled liquid leaving the condenser.
*   **State 4:** Low-pressure, low-temperature mixture of liquid and vapor entering the evaporator after throttling.

**Process Representation on P-h Diagram:**

1.  **1-2:** Isentropic compression (ideal) or actual compression.
2.  **2-3:** Isobaric heat rejection in the condenser.
3.  **3-4:** Isenthalpic throttling (constant enthalpy).
4.  **4-1:** Isobaric heat absorption in the evaporator.

**Key Thermodynamic Processes and their Analysis:**

*   **Compression (1-2):** Work input to the compressor ($W_{comp}$).
    *   $W_{comp} = h_2 - h_1$ (kJ/kg)
*   **Condensation (2-3):** Heat rejected ($Q_{rejected}$).
    *   $Q_{rejected} = h_2 - h_3$ (kJ/kg)
*   **Throttling (3-4):** No heat transfer or work done; $h_3 = h_4$.
*   **Evaporation (4-1):** Refrigerating effect ($Q_{evaporator}$).
    *   $Q_{evaporator} = h_1 - h_4$ (kJ/kg)

**Relationship between Heat Transfer and Work:**

From the First Law of Thermodynamics applied to the cycle:
$Q_{rejected} = Q_{evaporator} + W_{comp}$
$h_2 - h_3 = (h_1 - h_4) + (h_2 - h_1)$
$h_2 - h_3 = h_1 - h_3$ (since $h_4 = h_3$)
This confirms energy conservation.

---

### 3. Performance Test on Refrigeration Test Rig

A refrigeration test rig is an experimental setup designed to demonstrate and test the performance of a refrigeration system. It allows for the measurement of various parameters to evaluate its efficiency and capacity.

**Objectives of the Performance Test:**

*   To determine the refrigerating capacity of the system.
*   To determine the power input to the compressor.
*   To calculate the Coefficient of Performance (COP).
*   To investigate the effect of changing operating parameters (e.g., evaporator temperature, condenser temperature, refrigerant flow rate) on performance.
*   To compare actual performance with theoretical performance.

**Components of a Typical Refrigeration Test Rig:**

*   **Refrigeration Cycle Components:** Compressor, Condenser (with fan/water cooling), Expansion Valve, Evaporator (with heating element or fan for controlled load).
*   **Instrumentation:**
    *   **Pressure Gauges:** To measure suction and discharge pressure of the compressor, and pressures in the evaporator and condenser.
    *   **Thermometers/Temperature Sensors (RTDs/Thermocouples):** To measure refrigerant temperatures at various points (compressor inlet/outlet, condenser inlet/outlet, evaporator inlet/outlet) and air/water temperatures.
    *   **Flow Meters:** To measure refrigerant flow rate (e.g., rotameter, mass flow meter) and cooling water flow rate (if applicable).
    *   **Power Meter/Energy Meter:** To measure the electrical power consumed by the compressor motor.
    *   **Load Measurement:** For the evaporator, this could be a controlled electrical heater or a fan moving air over a heat exchanger with a known heat load.

**Procedure for Performance Test:**

1.  **Setup and Safety Checks:** Ensure all connections are secure, instruments are calibrated, and safety precautions are in place (e.g., ventilation, handling of refrigerants).
2.  **Initial System Startup:** Start the compressor and allow the system to stabilize.
3.  **Establish Operating Conditions:** Set the desired cooling load on the evaporator and ensure the condenser is adequately cooled.
4.  **Data Acquisition:** Once the system reaches a steady state, record all relevant parameters:
    *   Compressor suction pressure ($P_1$) and temperature ($T_1$).
    *   Compressor discharge pressure ($P_2$) and temperature ($T_2$).
    *   Refrigerant temperature and pressure entering the expansion valve ($T_3, P_3$).
    *   Refrigerant temperature and pressure entering the evaporator ($T_4, P_4$).
    *   Electrical power consumed by the compressor ($P_{elec}$).
    *   Cooling load on the evaporator ($Q_{evaporator}$), often measured by the power input to a heater.
    *   Cooling water flow rate and inlet/outlet temperatures (if water-cooled condenser).
    *   Air flow rate and inlet/outlet temperatures (if air-cooled condenser).
5.  **Vary Operating Parameters:** Repeat the data acquisition for different operating conditions (e.g., changing the evaporator load, adjusting condenser cooling).
6.  **Shutdown:** Properly shut down the system.

---

### 4. Performance Parameters and Calculations

**Key Performance Indicators:**

*   **Refrigerating Effect ($Q_{evaporator}$):**
    *   Calculated based on refrigerant properties: $Q_{evaporator} = \dot{m}_r (h_1 - h_4)$
        *   $\dot{m}_r$: Mass flow rate of refrigerant (kg/s)
        *   $h_1$: Enthalpy of refrigerant at compressor inlet (kJ/kg)
        *   $h_4$: Enthalpy of refrigerant at evaporator inlet (kJ/kg)
    *   Alternatively, if a direct electrical heater is used as the load: $Q_{evaporator} = P_{heater}$ (Watts or kW).

*   **Compressor Work Input ($W_{comp}$):**
    *   $W_{comp} = \dot{m}_r (h_2 - h_1)$
        *   $h_2$: Enthalpy of refrigerant at compressor outlet (kJ/kg)
    *   From electrical power measurement: $W_{elec} = P_{elec}$ (Watts or kW). The actual work input to the compressor is less than the electrical input due to motor efficiency: $W_{comp} = \eta_{motor} \times W_{elec}$.

*   **Heat Rejected ($Q_{rejected}$):**
    *   $Q_{rejected} = \dot{m}_r (h_2 - h_3)$
        *   $h_3$: Enthalpy of refrigerant at condenser outlet (kJ/kg)

*   **Coefficient of Performance (COP):**
    *   **COP (Ideal):** $COP_{ideal} = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{Q_{evaporator}}{W_{comp}}$
    *   **COP (Actual):** $COP_{actual} = \frac{Q_{evaporator} (\text{from load})}{W_{elec} (\text{measured})}$ (This is often the most practical COP to calculate from the test rig, as it accounts for overall system efficiency.)
    *   If using enthalpy values: $COP_{actual} = \frac{\dot{m}_r (h_1 - h_4)}{\dot{m}_r (h_2 - h_1)} = \frac{h_1 - h_4}{h_2 - h_1}$

**Important Points to Remember for Calculations:**

*   **Refrigerant Property Tables/Software:** Enthalpy ($h$), entropy ($s$), specific volume ($v$), and quality ($x$) values for the specific refrigerant (e.g., R134a, R22, etc.) at measured pressures and temperatures are essential. These are found in refrigerant property tables or thermodynamic property calculators.
*   **Units Consistency:** Ensure all units are consistent during calculations (e.g., kJ/kg for enthalpy, kW for power, kg/s for mass flow rate).
*   **State Determination:** Accurately determine the state of the refrigerant at each point (e.g., superheated vapor, saturated mixture, subcooled liquid) to select the correct property values.

---

### 5. Factors Affecting Performance

*   **Evaporator Temperature ($T_{evap}$):** Lowering the evaporator temperature increases the temperature difference required for heat transfer, leading to:
    *   Reduced refrigerating effect.
    *   Increased compressor work (due to higher compression ratio).
    *   Lower COP.
*   **Condenser Temperature ($T_{cond}$):** Higher condenser temperature leads to:
    *   Higher condensing pressure.
    *   Increased compressor work.
    *   Reduced refrigerating effect (as refrigerant leaves condenser at higher enthalpy).
    *   Lower COP.
*   **Superheating:** Excessive superheating at the evaporator outlet increases the specific volume, leading to higher compressor work.
*   **Subcooling:** Subcooling the liquid refrigerant before the expansion valve increases the refrigerating effect per unit mass flow, potentially increasing COP.
*   **Throttling Process:** The throttling process is irreversible and reduces the available cooling capacity.
*   **Refrigerant Mass Flow Rate ($\dot{m}_r$):** A higher mass flow rate generally increases the refrigerating capacity and power consumption proportionally.

---

### 6. Learning Outcomes Alignment

*   **CO1: Identify various systems and subsystems of Diesel and petrol engines (Knowledge Level: K1):** While this module is on refrigeration, understanding the basic components of the refrigeration cycle (compressor, condenser, evaporator, expansion valve) can be linked to the understanding of engine components in terms of their function within a system. This is a foundational knowledge aspect.
*   **CO2: Analyse the performance characteristics of internal combustion engines (Knowledge Level: K4):** Understanding the performance of a refrigeration system involves analyzing parameters like COP, refrigerating effect, and power consumption. This is analogous to analyzing engine efficiency, power output, and fuel consumption, requiring similar analytical skills.
*   **CO3: Investigate the emission characteristics of exhaust gases from IC Engines (Knowledge Level: K4):** This is not directly related to the refrigeration test rig itself. However, the ability to measure and analyze data from a test rig and draw conclusions about performance aligns with the investigative and analytical skills required for emission testing.
*   **CO4: Interpret the performance characteristics of air compressors / blowers (Knowledge Level: K4):** The compressor is a key component in the refrigeration system. The principles of analyzing compressor work, efficiency, and the effect of operating conditions are directly transferable from studying air compressors and blowers.
*   **CO5: Interpret the performance characteristics of air conditioning and refrigeration systems (Knowledge Level: K4):** This is the **primary alignment**. This module directly focuses on performing tests, collecting data, and interpreting the performance characteristics (COP, capacity) of a refrigeration system.

---

### 7. Practice Questions and Exercises

**Question 1:**

A vapor-compression refrigeration system uses R134a as the refrigerant. At the compressor inlet, the conditions are saturated vapor at -10°C. At the compressor outlet, the conditions are 10 bar and 60°C. The refrigerant leaves the condenser as a saturated liquid at 10 bar. Using R134a property tables:

a)  Determine the enthalpy at each state (compressor inlet, compressor outlet, condenser outlet, evaporator inlet).
b)  Calculate the refrigerating effect per kg of refrigerant.
c)  Calculate the work input per kg of refrigerant.
d)  Calculate the Coefficient of Performance (COP) of the cycle.

**Answer 1:**

Assume saturated vapor at -10°C: $P_1 = 2.91$ bar (from saturated R134a table), $h_1 = 384.0$ kJ/kg, $s_1 = 1.740$ kJ/kg.K.
Compressor outlet: $P_2 = 10$ bar, $T_2 = 60$°C. From R134a superheated tables at 10 bar, $h_2 = 467.0$ kJ/kg, $s_2 = 1.770$ kJ/kg.K.
Condenser outlet: Saturated liquid at 10 bar. From R134a saturated tables at 10 bar, $h_3 = 274.2$ kJ/kg.
Throttling (Isenthalpic): $h_4 = h_3 = 274.2$ kJ/kg.

a)  **Enthalpies:**
    *   $h_1 = 384.0$ kJ/kg (Compressor Inlet)
    *   $h_2 = 467.0$ kJ/kg (Compressor Outlet)
    *   $h_3 = 274.2$ kJ/kg (Condenser Outlet)
    *   $h_4 = 274.2$ kJ/kg (Evaporator Inlet)

b)  **Refrigerating Effect ($Q_{evaporator}$):**
    *   $Q_{evaporator} = h_1 - h_4 = 384.0 - 274.2 = 109.8$ kJ/kg

c)  **Compressor Work Input ($W_{comp}$):**
    *   $W_{comp} = h_2 - h_1 = 467.0 - 384.0 = 83.0$ kJ/kg

d)  **Coefficient of Performance (COP):**
    *   $COP = \frac{Q_{evaporator}}{W_{comp}} = \frac{109.8}{83.0} \approx 1.32$

**Question 2:**

How would an increase in the condenser cooling water flow rate affect the COP of the refrigeration system, and why?

**Answer 2:**

An increase in the condenser cooling water flow rate would generally **increase the COP** of the refrigeration system.

**Reasoning:**

*   **Lower Condensing Temperature/Pressure:** With more efficient cooling, the refrigerant in the condenser will be cooled more effectively, leading to a lower condensing temperature and pressure.
*   **Reduced Compressor Work:** A lower condensing pressure means the compressor has to work against a smaller pressure difference, thus reducing the work input required per kg of refrigerant.
*   **Increased Refrigerating Effect (Slightly):** The refrigerant leaving the condenser will be subcooled to a lower temperature. This leads to a slight increase in the refrigerating effect per kg of refrigerant.
*   **Improved COP:** Since the COP is the ratio of refrigerating effect to compressor work, the reduction in compressor work has a more significant impact than any minor change in refrigerating effect, resulting in an overall increase in COP.

**Question 3:**

What is the role of the expansion valve in the refrigeration cycle?

**Answer 3:**

The expansion valve, also known as a throttling device, plays a crucial role in the refrigeration cycle by:

1.  **Reducing Pressure:** It significantly reduces the pressure of the high-pressure liquid refrigerant coming from the condenser.
2.  **Reducing Temperature:** This pressure drop causes a rapid decrease in the refrigerant's temperature (due to the Joule-Thomson effect and latent heat vaporization) to a level below the temperature of the refrigerated space.
3.  **Controlling Flow:** It regulates the flow rate of the refrigerant into the evaporator to match the cooling load and maintain the desired evaporator pressure.
4.  **Preparing for Evaporation:** By reducing the pressure and temperature, it ensures that the refrigerant can readily absorb heat from the refrigerated space by evaporating.

---

### 8. Important Points to Remember

*   **Safety First:** Always handle refrigerants with care and ensure proper ventilation.
*   **Accurate Readings:** Precise measurements of pressure, temperature, and power are critical for accurate performance analysis.
*   **Refrigerant Properties:** Have access to reliable refrigerant property tables or software for the specific refrigerant being used.
*   **Steady State:** Ensure the system has reached a stable operating condition before taking measurements.
*   **COP Definition:** Understand the different ways COP can be defined (theoretical vs. actual, based on compressor work vs. electrical input).
*   **System Losses:** Be aware that real-world systems have inefficiencies (e.g., compressor efficiency, heat leakages, pressure drops) that reduce the actual COP compared to the ideal Carnot cycle or ideal vapor-compression cycle.
*   **Thermodynamic Principles:** Apply the first and second laws of thermodynamics correctly in analyzing the cycle.

---

This concludes the study notes for Module 14. Remember to practice taking readings from the test rig and performing these calculations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
