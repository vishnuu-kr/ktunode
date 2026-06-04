---
title: "Simple vapour compression refrigeration system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f62"
status: "completed"
scrapedAt: "2026-05-20T18:17:12.058Z"
---
# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Simple Vapour Compression Refrigeration System

---

### 1. Introduction to Refrigeration and Air Conditioning (CO1, K2)

*   **Refrigeration:** The process of removing heat from a substance or space to maintain it at a temperature below the ambient temperature.
*   **Air Conditioning:** The process of treating air to control simultaneously its temperature, humidity, cleanliness, and motion to meet the requirements of a human occupancy, process or equipment.
*   **Applications of Refrigeration:** Food preservation, medical storage, industrial processes, air conditioning, ice making, etc.
*   **Applications of Air Conditioning:** Comfort cooling/heating for residential and commercial buildings, industrial process control, clean rooms, etc.

---

### 2. Basic Principles of Vapour Compression Refrigeration (CO1, K2; CO3, K4)

The vapour compression refrigeration (VCR) system is the most common type of refrigeration system. It operates on the **vapour compression cycle**, which is a thermodynamic cycle that involves the compression, condensation, expansion, and evaporation of a refrigerant.

**Key Components of a Simple VCR System:**

1.  **Compressor:** Compresses the low-pressure, low-temperature refrigerant vapour into a high-pressure, high-temperature vapour.
2.  **Condenser:** Condenses the high-pressure, high-temperature refrigerant vapour into a high-pressure, high-temperature liquid by rejecting heat to the surroundings (ambient air or water).
3.  **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the high-pressure liquid refrigerant, causing a portion of it to flash into vapour.
4.  **Evaporator:** Absorbs heat from the space to be cooled, causing the low-pressure, low-temperature liquid-vapour mixture refrigerant to evaporate into a low-pressure, low-temperature vapour.

**The Four Processes of the Ideal Vapour Compression Cycle:**

The ideal vapour compression cycle can be represented on a **Pressure-Enthalpy (P-h) diagram** or a **Temperature-Entropy (T-s) diagram**.

**(a) Isentropic Compression (Process 1-2):**
*   **Description:** The low-pressure, saturated or superheated vapour from the evaporator enters the compressor and is compressed isentropically (adiabatically and reversibly) to a high pressure.
*   **State Change:** From low-pressure vapour to high-pressure superheated vapour.
*   **Work Input:** Work is done on the refrigerant by the compressor.
*   **Thermodynamic Principle:** First Law of Thermodynamics for a steady flow system.
    $W_{in} = h_2 - h_1$ (where $h$ is specific enthalpy)

**(b) Isobaric Heat Rejection (Process 2-3):**
*   **Description:** The high-pressure, superheated vapour from the compressor enters the condenser and is cooled at constant pressure until it becomes saturated liquid. This process involves rejecting heat to the surroundings.
*   **State Change:** From high-pressure superheated vapour to high-pressure saturated liquid.
*   **Heat Rejected:** Heat is rejected from the refrigerant to the cooling medium (e.g., air or water).
*   **Thermodynamic Principle:** First Law of Thermodynamics for a steady flow system.
    $Q_{out} = h_2 - h_3$

**(c) Isenthalpic Expansion (Process 3-4):**
*   **Description:** The high-pressure liquid refrigerant from the condenser passes through an expansion valve or throttling device. This is a throttling process, which is irreversible and occurs at constant enthalpy.
*   **State Change:** From high-pressure saturated liquid to a low-pressure, low-temperature mixture of liquid and vapour.
*   **Pressure Drop:** Significant pressure drop occurs.
*   **Temperature Drop:** Significant temperature drop occurs, preparing the refrigerant for evaporation.
*   **Thermodynamic Principle:** $h_3 = h_4$

**(d) Isobaric Heat Absorption (Process 4-1):**
*   **Description:** The low-pressure, low-temperature liquid-vapour mixture from the expansion valve enters the evaporator. Here, it absorbs heat from the refrigerated space at constant pressure, causing it to completely vaporize into a low-pressure vapour.
*   **State Change:** From low-pressure mixture to low-pressure saturated or superheated vapour.
*   **Heat Absorbed:** This is the desired cooling effect.
*   **Thermodynamic Principle:** First Law of Thermodynamics for a steady flow system.
    $Q_{in} = h_1 - h_4$

---

### 3. Thermodynamic Analysis and Performance Evaluation (CO3, K4)

**Key Performance Indicators:**

*   **Coefficient of Performance (COP) or Refrigerating Effect per Unit of Work Input:** This is the most important parameter to evaluate the efficiency of a refrigeration system.
    $$COP_R = \frac{\text{Desired Output}}{\text{Required Input}} = \frac{\text{Refrigerating Effect}}{\text{Compressor Work Input}}$$
    $$COP_R = \frac{h_1 - h_4}{h_2 - h_1}$$

*   **Refrigerating Effect (RE):** The amount of heat absorbed by the refrigerant in the evaporator per unit mass flow rate.
    $$RE = h_1 - h_4 \quad (\text{kJ/kg})$$

*   **Heat Rejected in Condenser ($Q_{out}$):** The amount of heat rejected by the refrigerant in the condenser per unit mass flow rate.
    $$Q_{out} = h_2 - h_3 \quad (\text{kJ/kg})$$

*   **Mass Flow Rate of Refrigerant ($\dot{m}$):** The amount of refrigerant flowing through the system per unit time.
    $$RE_{total} = \dot{m} \times (h_1 - h_4) \quad (\text{kW})$$
    $$W_{total} = \dot{m} \times (h_2 - h_1) \quad (\text{kW})$$
    $$Q_{out, total} = \dot{m} \times (h_2 - h_3) \quad (\text{kW})$$

*   **Energy Balance for the System:**
    $$W_{in} + Q_{in} = Q_{out}$$
    $$(h_2 - h_1) + (h_1 - h_4) = (h_2 - h_3)$$
    $$h_2 - h_4 = h_2 - h_3 \quad (\text{This equation should hold if there are no losses})$$
    For the entire system:
    $$W_{in, total} + RE_{total} = Q_{out, total}$$

---

### 4. Ideal Vapour Compression Cycle vs. Actual Vapour Compression Cycle (CO1, K4; CO3, K4)

**Ideal Cycle Assumptions:**

*   Isentropic compression.
*   Isobaric and isothermal heat absorption in the evaporator.
*   Isentropic expansion.
*   Isobaric and isothermal heat rejection in the condenser.

**Actual Cycle Deviations:**

*   **Compressor:**
    *   **Non-isentropic compression:** Real compressors have inefficiencies, leading to higher work input (compression is not isentropic, usually resulting in higher enthalpy at the outlet). Compression is typically polytropic ($PV^n = constant$).
    *   **Volumetric efficiency:** The actual volume of vapour delivered by the compressor is less than its swept volume due to clearance volume and re-expansion of trapped gas.
*   **Condenser:**
    *   **Superheating:** The vapour leaving the compressor is superheated, and it cools down to the saturation temperature before condensation begins.
    *   **Subcooling:** The liquid refrigerant leaving the condenser is often subcooled below its saturation temperature, which is beneficial for the cycle.
*   **Expansion Valve:**
    *   **Throttling is irreversible:** Real expansion valves cause a pressure drop but are isenthalpic.
*   **Evaporator:**
    *   **Incomplete vaporization:** The refrigerant may not fully vaporize, leaving some liquid droplets at the evaporator outlet.
    *   **Superheating:** The vapour leaving the evaporator is often superheated to ensure no liquid enters the compressor.

**Impact of Deviations on COP:**

*   **Non-isentropic compression:** Increases compressor work, thus decreasing COP.
*   **Superheating in evaporator:** Increases refrigerating effect (enthalpy difference $h_1 - h_4$), thus increasing COP, provided it doesn't lead to excessive superheating at compressor inlet.
*   **Subcooling in condenser:** Increases refrigerating effect (enthalpy difference $h_1 - h_4$), thus increasing COP.
*   **Liquid refrigerant leaving expansion valve (flashing):** Reduces the amount of liquid available for evaporation in the evaporator, thus reducing the refrigerating effect and COP.

---

### 5. Properties of Refrigerants (CO4, K2)

Refrigerants are the working fluids in refrigeration systems. Their properties are crucial for system performance.

**Desirable Properties of Refrigerants:**

*   **Thermodynamic Properties:**
    *   Low boiling point at desired evaporating pressure.
    *   High critical temperature.
    *   High latent heat of vaporization (for higher refrigerating effect per unit mass).
    *   Good thermal conductivity.
*   **Physical Properties:**
    *   Non-flammable and non-explosive.
    *   Non-toxic and odourless.
    *   Chemically stable.
    *   Low viscosity.
    *   Non-corrosive to system materials.
*   **Environmental Properties:**
    *   Zero Ozone Depletion Potential (ODP).
    *   Low Global Warming Potential (GWP).
*   **Economic Properties:**
    *   Readily available and low cost.
    *   Easy to detect leaks.

**Common Refrigerants and their Applications:**

*   **CFCs (Chlorofluorocarbons) - e.g., R-12 (Dichlorodifluoromethane):** Historically widely used due to excellent thermodynamic properties. However, they have high ODP and GWP and are being phased out under the Montreal Protocol.
*   **HCFCs (Hydrochlorofluorocarbons) - e.g., R-22 (Chlorodifluoromethane):** Lower ODP than CFCs but still contribute to ozone depletion. Also being phased out. Used in many existing AC systems.
*   **HFCs (Hydrofluorocarbons) - e.g., R-134a (Tetrafluoroethane):** Zero ODP, but have significant GWP. Widely used in automotive AC and medium-temperature refrigeration.
*   **HFOs (Hydrofluoroolefins) - e.g., R-1234yf:** Very low GWP and zero ODP. Emerging as replacements for HFCs, but some have mild flammability.
*   **Natural Refrigerants - e.g., Ammonia (R-717), Carbon Dioxide (R-744), Hydrocarbons (e.g., Propane R-290):**
    *   **Ammonia:** Excellent thermodynamic properties, zero ODP and GWP. Used in large industrial refrigeration systems. Toxic and flammable.
    *   **Carbon Dioxide:** Zero ODP and GWP. Operates at very high pressures, requiring special system design. Used in some commercial refrigeration and automotive AC.
    *   **Hydrocarbons:** Excellent thermodynamic properties, zero ODP and GWP. Highly flammable, limiting their use to small systems or specific applications with safety precautions.

**Referencing Textbooks:**

*   **Arora, C.P. (2021), Chapter 5:** Discusses properties of refrigerants in detail, including their classifications and selection criteria.
*   **Ahamadul Ameen (2020), Chapter 3:** Provides an overview of common refrigerants and their characteristics.
*   **Data book - Kothandaraman (2023):** Essential for looking up thermodynamic properties of various refrigerants at different temperatures and pressures.

---

### 6. Worked Examples

**Example 1 (Ideal Vapour Compression Cycle):**

A simple vapour compression refrigeration system has a capacity of 5 tons of refrigeration. The evaporating temperature is $-5^\circ$C and the condensing temperature is $40^\circ$C. The refrigerant leaves the evaporator as saturated vapour and is condensed to saturated liquid. Assuming the cycle is ideal, determine:
(a) The COP of the system.
(b) The mass flow rate of the refrigerant.
(c) The power required by the compressor.

**Given:**
*   Capacity = 5 tons of refrigeration
*   Evaporating Temperature ($T_e$) = $-5^\circ$C
*   Condensing Temperature ($T_c$) = $40^\circ$C
*   Refrigerant: R-134a (Assume you have access to R-134a tables/charts)

**Solution Steps:**

1.  **Determine Refrigerant Properties at Evaporator Outlet (State 1):**
    At $-5^\circ$C, R-134a is saturated vapour.
    From R-134a tables:
    $h_1 = h_g @ -5^\circ$C (specific enthalpy of saturated vapour)
    $s_1 = s_g @ -5^\circ$C (specific entropy of saturated vapour)

2.  **Determine Refrigerant Properties at Condenser Outlet (State 3):**
    At $40^\circ$C, R-134a is saturated liquid.
    From R-134a tables:
    $h_3 = h_f @ 40^\circ$C (specific enthalpy of saturated liquid)

3.  **Determine Refrigerant Properties at Compressor Outlet (State 2):**
    Compression is isentropic, so $s_2 = s_1$.
    The pressure at the condenser is the saturation pressure corresponding to $40^\circ$C.
    From R-134a tables: $P_c = P_{sat} @ 40^\circ$C.
    Using $s_2$ and $P_c$, find $h_2$ from superheated refrigerant tables.

4.  **Determine Refrigerant Properties at Expansion Valve Outlet (State 4):**
    Expansion is isenthalpic, so $h_4 = h_3$.
    The pressure at the evaporator is the saturation pressure corresponding to $-5^\circ$C.
    From R-134a tables: $P_e = P_{sat} @ -5^\circ$C.

5.  **Calculate Refrigerating Effect (RE):**
    $RE = h_1 - h_4 \quad (\text{kJ/kg})$

6.  **Calculate Compressor Work Input ($W_{in}$):**
    $W_{in} = h_2 - h_1 \quad (\text{kJ/kg})$

7.  **Calculate COP_R:**
    $COP_R = \frac{RE}{W_{in}} = \frac{h_1 - h_4}{h_2 - h_1}$

8.  **Calculate Mass Flow Rate ($\dot{m}$):**
    1 ton of refrigeration = 211 kJ/min = 3.517 kW
    Capacity = 5 tons = $5 \times 211 = 1055$ kJ/min
    $RE_{total} = \dot{m} \times RE$
    $\dot{m} = \frac{RE_{total}}{RE}$ (Ensure units are consistent, e.g., kg/s or kg/min)

9.  **Calculate Compressor Power:**
    Compressor Power $= \dot{m} \times W_{in}$ (Ensure consistent units for kW)

**Note:** You will need to use actual refrigerant property tables or software for R-134a. For this exercise, we will assume representative values for demonstration.

**Let's assume (hypothetical values for illustration, use actual tables for real problems):**
*   $h_1 = 255$ kJ/kg
*   $s_1 = 0.92$ kJ/(kg·K)
*   $h_3 = 105$ kJ/kg
*   $P_c = 1000$ kPa (approx. saturation pressure at $40^\circ$C)
*   $P_e = 250$ kPa (approx. saturation pressure at $-5^\circ$C)

From $s_1 = 0.92$ kJ/(kg·K) and $P_c = 1000$ kPa, assume $h_2 = 295$ kJ/kg.
$h_4 = h_3 = 105$ kJ/kg.

**(a) COP_R:**
$COP_R = \frac{255 - 105}{295 - 255} = \frac{150}{40} = 3.75$

**(b) Mass Flow Rate:**
$RE = h_1 - h_4 = 255 - 105 = 150$ kJ/kg
Capacity = 5 tons = $5 \times 3.517$ kW = 17.585 kW = $17.585 \times 60$ kJ/min = 1055.1 kJ/min
$\dot{m} = \frac{1055.1 \text{ kJ/min}}{150 \text{ kJ/kg}} = 7.034$ kg/min

**(c) Compressor Power:**
Compressor Power $= \dot{m} \times (h_2 - h_1)$
Compressor Power $= (7.034 \text{ kg/min}) \times (40 \text{ kJ/kg})$
Compressor Power $= 281.36$ kJ/min
Compressor Power $= \frac{281.36}{60}$ kW $\approx 4.69$ kW

---

### 7. Practice Questions

1.  **Short Answer:**
    (a) List the four essential components of a vapour compression refrigeration system.
    (b) What is the Coefficient of Performance (COP) for a refrigeration system? Write down its formula in terms of enthalpies.
    (c) What are the main assumptions made in the ideal vapour compression cycle?
    (d) Name two desirable thermodynamic properties of a refrigerant.
    (e) What is the primary function of the expansion valve in a VCR system?

2.  **Problem:**
    A vapour compression refrigeration system uses R-134a as the refrigerant. The evaporating temperature is $-10^\circ$C and the condensing temperature is $45^\circ$C. The refrigerant leaves the evaporator as saturated vapour and is condensed to saturated liquid in the condenser. The refrigerant is then throttled to the evaporator pressure. Assume the compression process is isentropic. Using the given R-134a properties:
    *   Saturation pressure at $-10^\circ$C: $P_e = 232.5$ kPa
    *   Enthalpy of saturated vapour at $-10^\circ$C ($h_1$): $247.4$ kJ/kg
    *   Entropy of saturated vapour at $-10^\circ$C ($s_1$): $0.9227$ kJ/(kg·K)
    *   Saturation pressure at $45^\circ$C: $P_c = 1140$ kPa
    *   Enthalpy of saturated liquid at $45^\circ$C ($h_3$): $119.7$ kJ/kg
    *   Enthalpy at state 2 (isentropic compression): $h_2 = 285.5$ kJ/kg

    Determine:
    (a) The COP of the refrigeration system.
    (b) The amount of heat rejected in the condenser per kg of refrigerant.
    (c) If the system produces 1 ton of refrigeration, what is the mass flow rate of the refrigerant in kg/min?

---

### 8. Answers to Practice Questions

**1. Short Answer:**

(a) **Four essential components:** Compressor, Condenser, Expansion Valve, Evaporator.
(b) **COP Formula:** $COP_R = \frac{\text{Refrigerating Effect}}{\text{Compressor Work Input}} = \frac{h_1 - h_4}{h_2 - h_1}$
(c) **Assumptions:** Isentropic compression, Isobaric heat rejection, Isenthalpic expansion, Isobaric heat absorption.
(d) **Desirable properties:** Low boiling point, high latent heat of vaporization, non-toxic, non-flammable, zero ODP, low GWP. (Any two)
(e) **Function of Expansion Valve:** To reduce the pressure and temperature of the high-pressure liquid refrigerant before it enters the evaporator.

**2. Problem:**

Given data:
*   $T_e = -10^\circ$C, $P_e = 232.5$ kPa, $h_1 = 247.4$ kJ/kg, $s_1 = 0.9227$ kJ/(kg·K)
*   $T_c = 45^\circ$C, $P_c = 1140$ kPa, $h_3 = 119.7$ kJ/kg
*   $h_2 = 285.5$ kJ/kg (isentropic compression)
*   $h_4 = h_3 = 119.7$ kJ/kg (isenthalpic expansion)

(a) **COP of the system:**
$COP_R = \frac{h_1 - h_4}{h_2 - h_1} = \frac{247.4 - 119.7}{285.5 - 247.4} = \frac{127.7}{38.1} \approx 3.35$

(b) **Heat rejected in the condenser per kg:**
$Q_{out} = h_2 - h_3 = 285.5 - 119.7 = 165.8$ kJ/kg

(c) **Mass flow rate for 1 ton refrigeration:**
1 ton refrigeration = 211 kJ/min
Refrigerating Effect (RE) per kg = $h_1 - h_4 = 127.7$ kJ/kg
Mass flow rate ($\dot{m}$) = $\frac{\text{Total Refrigeration Effect}}{\text{RE per kg}}$
$\dot{m} = \frac{211 \text{ kJ/min}}{127.7 \text{ kJ/kg}} \approx 1.652$ kg/min

---

### 9. Important Points to Remember

*   The P-h diagram is a powerful tool for visualizing and analyzing the vapour compression cycle.
*   The COP is a measure of the efficiency and is always greater than 1 for a refrigeration system.
*   Superheating at the evaporator outlet and subcooling at the condenser outlet generally improve the COP.
*   Real cycles deviate from the ideal due to irreversibilities and inefficiencies in components.
*   Selection of an appropriate refrigerant is critical and depends on the desired evaporating and condensing temperatures, as well as environmental and safety considerations.
*   Always ensure consistent units when performing calculations.
*   Familiarize yourself with refrigerant property tables and charts (e.g., from Kothandaraman's data book).

---

### 10. Alignment with Course Outcomes

*   **CO1:** Defined basic concepts of refrigeration and analysed performance of ideal refrigeration cycles through the understanding of the VCR system. (K2, K4)
*   **CO3:** Performed thermodynamic analysis of the VCR system by calculating COP and heat transfer quantities, enabling evaluation of its efficiency. (K3, K4)
*   **CO4:** Discussed the properties of various refrigerants and their selection criteria, contributing to the understanding of selecting appropriate refrigerants. (K2)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
