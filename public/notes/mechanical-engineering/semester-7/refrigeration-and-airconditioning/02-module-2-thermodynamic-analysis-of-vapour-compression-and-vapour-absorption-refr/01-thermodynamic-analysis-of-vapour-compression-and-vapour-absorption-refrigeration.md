---
title: "Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f61"
status: "completed"
scrapedAt: "2026-05-20T18:17:11.342Z"
---
Absolutely! Here are comprehensive study notes for the topic "Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems" from Module 2 of REFRIGERATION AND AIRCONDITIONING, designed to meet your requirements.

---

# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

This module focuses on the thermodynamic principles governing the operation of vapour compression and vapour absorption refrigeration systems, enabling us to analyze their performance and efficiency.

**Course Outcomes Addressed:**

*   **CO1:** Define and describe the basic concepts and applications of refrigeration and air conditioning and analyse performance of ideal refrigeration cycles (Knowledge Level: K2, K4)
*   **CO3:** Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems. (Knowledge Level: K3, K4)

**Key Textbooks & References:**

*   **Arora C.P (Tata McGraw hill, 4th edition/2021):** Chapters on vapour compression and absorption systems, thermodynamic analysis.
*   **Ramesh Cahndra Arora (PHI, 4th Printing/2015):** Chapters on refrigeration cycles, COP, system analysis.
*   **Arora S. C. and S. Domkundwar (Dhanpat Rai and Company., 2018):** Chapters covering the fundamentals and performance of vapour compression and absorption systems.
*   **Ahamadul Ameen (Eastern economy addition, 2020):** Chapters detailing the thermodynamic analysis and performance evaluation.
*   **W P Jones (Spon Press, 5th edition/ 2001):** Sections on system performance and thermodynamic efficiency.
*   **C P Kothandaraman (New Age International., 2023):** Utilisation of refrigeration tables and charts for analysis.
*   **P NAnanthanarayanan (McGraw Hill, 4th Edition 2013):** Chapters on the fundamentals of vapour compression and absorption cycles.
*   **Stoecker & Jons (McGraw Hill, 2nd edition):** In-depth thermodynamic analysis and performance metrics.

---

## 1. Introduction to Refrigeration Systems

**Definition of Refrigeration:** Refrigeration is the process of removing heat from a substance or space to maintain it at a temperature lower than its surroundings.

**Applications:**
*   Food preservation (refrigerators, freezers)
*   Air conditioning (comfort cooling)
*   Industrial processes (chemical, pharmaceutical)
*   Medical applications (blood banks, vaccine storage)
*   Ice production

**Basic Principle:** Refrigeration systems operate on the reverse Carnot cycle, where a working fluid (refrigerant) undergoes a series of phase changes and state changes to absorb heat from a low-temperature source and reject it to a high-temperature sink.

---

## 2. Thermodynamic Analysis of Vapour Compression Refrigeration System (VCRS)

The Vapour Compression Refrigeration (VCR) system is the most widely used refrigeration technology. Its thermodynamic analysis is crucial for understanding its performance and efficiency.

### 2.1 Ideal Vapour Compression Cycle (Bell-Coleman Cycle)

The ideal VCRS cycle consists of four reversible processes:

1.  **Isentropic Compression (1-2):** The refrigerant vapour is compressed isentropically from the evaporator pressure ($P_e$) to the condenser pressure ($P_c$). This process increases the temperature and pressure of the refrigerant.
    *   **Thermodynamic Representation:** $s_1 = s_2$
    *   **Work Input:** $W_{comp} = h_2 - h_1$ (obtained from enthalpy values)
2.  **Isobaric Heat Rejection (2-3):** The high-pressure, high-temperature refrigerant vapour condenses into a saturated liquid at constant pressure in the condenser. Heat is rejected to the surroundings.
    *   **Thermodynamic Representation:** $P_2 = P_3 = P_c$, $T_2 = T_3 = T_{condenser}$
    *   **Heat Rejected:** $Q_{rej} = h_2 - h_3$
3.  **Isenthalpic Expansion (3-4):** The saturated liquid refrigerant passes through an expansion valve (throttling device), where its pressure and temperature drop significantly. This is an irreversible process.
    *   **Thermodynamic Representation:** $h_3 = h_4$ (constant enthalpy)
4.  **Isobaric Heat Absorption (4-1):** The low-pressure, low-temperature refrigerant liquid-vapour mixture evaporates into saturated vapour at constant pressure in the evaporator. Heat is absorbed from the refrigerated space.
    *   **Thermodynamic Representation:** $P_4 = P_1 = P_e$, $T_4 = T_1 = T_{evaporator}$
    *   **Refrigerating Effect:** $Q_{evap} = h_1 - h_4$

#### **Performance Metric: Coefficient of Performance (COP)**

The COP of a refrigeration system is the ratio of the desired output (cooling effect) to the required input (work done).

$$COP_R = \frac{\text{Refrigerating Effect}}{\text{Work Input}} = \frac{Q_{evap}}{W_{comp}} = \frac{h_1 - h_4}{h_2 - h_1}$$

**Important Considerations for Ideal Cycle:**

*   **Isentropic compression:** Ensures maximum efficiency for the compression process.
*   **Saturated vapour at compressor inlet:** Prevents liquid from entering the compressor, which can cause damage.
*   **Saturated liquid at expansion valve inlet:** Ensures maximum cooling effect in the evaporator.

**Example using P-h Diagram:** The ideal VCRS cycle can be effectively visualized and analyzed using a Pressure-Enthalpy (P-h) diagram for the refrigerant.

### 2.2 Actual Vapour Compression Cycle

The actual VCRS cycle deviates from the ideal cycle due to various irreversibilities and practical considerations.

**Deviations and their impact:**

1.  **Incomplete Compression (Wet Compression):** If compression is not to the dry saturated vapour stage, some liquid refrigerant remains in the compressor, leading to reduced work input but also reduced refrigerating effect.
    *   *Impact:* Lower COP.
2.  **Superheating in the Evaporator:** The refrigerant vapour leaves the evaporator at a temperature higher than the saturation temperature at the evaporator pressure.
    *   *Impact:* Increases work input for compression ($h_1$ increases), but can also increase refrigerating effect if the superheat temperature is not excessively high.
3.  **Subcooling in the Condenser:** The liquid refrigerant leaving the condenser is at a temperature lower than the saturation temperature at the condenser pressure.
    *   *Impact:* Increases the refrigerating effect ($h_4$ decreases, as $h_3$ is lower), leading to a higher COP.
4.  **Pressure Drops:** Pressure drops occur in the evaporator, condenser, and refrigerant lines due to friction.
    *   *Impact:* Reduces the effective pressure difference, lowering the refrigerating effect and increasing the work input.
5.  **Inefficiencies in Compressor:** Mechanical and volumetric inefficiencies of the compressor lead to increased work input.
    *   *Impact:* Reduced COP.
6.  **Throttling Process:** While ideal, the expansion through the valve is isenthalpic, which is a key characteristic.

**Revised COP for Actual Cycle:**

$$COP_{R, Actual} = \frac{h_1 - h_4}{h_2 - h_1} \quad \text{(where } h_1, h_2, h_4 \text{ are actual enthalpy values)}$$

**Key Equations for Analysis:**

*   **Work of Compressor:** $W_{comp} = m \times (h_2 - h_1)$
*   **Refrigerating Effect:** $Q_{evap} = m \times (h_1 - h_4)$
*   **Heat Rejected in Condenser:** $Q_{rej} = m \times (h_2 - h_3)$
*   **Mass flow rate:** $m = \frac{Q_{evap}}{h_1 - h_4}$

**Textbook Insights:**

*   **Arora C.P. (2021):** Provides detailed P-h diagrams and T-s diagrams for analyzing the ideal and actual VCRS cycles, including methods for calculating enthalpy values using steam tables and refrigerant property data.
*   **Kothandaraman (2023):** Essential for referring to refrigeration tables and charts to obtain enthalpy and entropy values at different states.

### 2.3 Effect of Operating Conditions on COP

*   **Evaporator Temperature ($T_e$):** Lowering $T_e$ (for a fixed condenser temperature) increases the work of compression and reduces the refrigerating effect, thus decreasing COP.
*   **Condenser Temperature ($T_c$):** Increasing $T_c$ (for a fixed evaporator temperature) increases the work of compression and reduces the refrigerating effect, thus decreasing COP.
*   **Superheating:** Moderate superheating can improve COP by ensuring dry vapour enters the compressor, but excessive superheating increases work input.
*   **Subcooling:** Subcooling always improves COP by increasing the refrigerating effect.

### 2.4 Common Refrigerants and their Properties

The choice of refrigerant significantly impacts the system's performance and safety. Key properties include:
*   Boiling point at atmospheric pressure
*   Critical temperature and pressure
*   Latent heat of vaporization
*   Specific heat of liquid and vapour
*   Ozone Depletion Potential (ODP)
*   Global Warming Potential (GWP)
*   Toxicity and flammability

**Examples of Refrigerants:** R-134a, R-410A, Ammonia (R-717), CO2 (R-744).

---

## 3. Thermodynamic Analysis of Vapour Absorption Refrigeration System (VARS)

Vapour Absorption Refrigeration (VAR) systems utilize heat energy as the primary input instead of mechanical work, making them suitable for applications where waste heat is available.

### 3.1 Basic Principles of VAR

VAR systems work on a thermodynamic cycle similar to VCRS but replace the mechanical compressor with a thermal compressor, which consists of an absorber, a generator, and an ejector (or pump).

**Key Components and Processes:**

1.  **Evaporator:** Similar to VCRS, absorbs heat ($Q_{evap}$) from the refrigerated space by evaporating the refrigerant (e.g., ammonia or water).
2.  **Absorber:** The low-pressure refrigerant vapour from the evaporator is absorbed by an absorbent solution (e.g., water in an ammonia system or lithium bromide in a water system) at low temperature and pressure. This is an exothermic process.
3.  **Pump:** The rich absorbent solution (containing refrigerant) is pumped from the absorber to the generator at a higher pressure. This requires work input ($W_p$).
4.  **Generator (or Reboiler):** Heat is supplied to the generator ($Q_{in}$) to boil off the refrigerant from the absorbent solution, producing high-pressure refrigerant vapour. This is the primary heat input.
5.  **Condenser:** The high-pressure refrigerant vapour is condensed into a liquid, rejecting heat to the surroundings ($Q_{rej}$).
6.  **Expansion Valve:** The liquid refrigerant is expanded to a low pressure, ready to enter the evaporator.

**Working Fluid Pairs:**

*   **Ammonia-Water:** Refrigerant is ammonia, absorbent is water. Ammonia has a low boiling point, while water is the absorbent.
*   **Water-Lithium Bromide (LiBr):** Refrigerant is water, absorbent is LiBr. LiBr is a salt that readily absorbs water. Water has a high boiling point, so it is used for air conditioning applications at higher temperatures.

### 3.2 Ideal Vapour Absorption Cycle

The analysis of the ideal VAR cycle involves understanding the energy and mass balance across each component.

**Key Performance Metric: Coefficient of Performance (COP)**

In VAR systems, COP is defined as the ratio of the refrigerating effect to the total heat input (including the heat input to the generator and the work input to the pump).

$$COP_{AR} = \frac{\text{Refrigerating Effect}}{\text{Heat Input to Generator + Work Input to Pump}} = \frac{Q_{evap}}{Q_{gen} + W_p}$$

Since the pump work is generally negligible compared to the heat input, it is often approximated as:

$$COP_{AR} \approx \frac{Q_{evap}}{Q_{gen}}$$

**Thermodynamic Analysis using Mass and Energy Balances:**

For each component, mass and energy balances are applied to determine the required heat inputs and outputs.

*   **Generator:** $Q_{gen} + m_a h_a + m_r h_r = m_g h_g + m_r h_r$ (simplified)
*   **Absorber:** $Q_{abs} + m_r h_r + m_a h_a = (m_r + m_a) h_{rich}$
*   **Condenser:** $Q_{rej} = m_r (h_{condenser, in} - h_{condenser, out})$
*   **Evaporator:** $Q_{evap} = m_r (h_{evap, in} - h_{evap, out})$

**Textbook Insights:**

*   **Ramesh Chandra Arora (2015):** Provides detailed derivations of mass and energy balance equations for both ammonia-water and LiBr-water absorption systems, along with typical performance data.
*   **Ahamadul Ameen (2020):** Discusses the different types of absorption systems (single-effect, double-effect) and their thermodynamic analyses, highlighting the improvement in COP for double-effect systems.

### 3.3 Single-Effect Absorption System

This is the most common type of VAR system. It uses one generator to produce refrigerant vapour.

**Typical COP:** Single-effect VAR systems have lower COPs compared to VCRS, typically ranging from 0.6 to 1.2, depending on the operating temperatures.

**Factors Affecting COP in VAR Systems:**

*   **Generator Temperature ($T_{gen}$):** Higher generator temperatures generally lead to higher COPs.
*   **Condenser Temperature ($T_{cond}$):** Lower condenser temperatures improve COP.
*   **Evaporator Temperature ($T_{evap}$):** Lower evaporator temperatures decrease COP.
*   **Concentration of Solutions:** The concentration of refrigerant in the absorbent solution at various stages impacts the heat transfer and separation processes.

### 3.4 Double-Effect Absorption System

To improve efficiency, double-effect absorption systems use two generators operating at different pressures and temperatures. Waste heat from the first generator can be used to heat the second generator, significantly reducing the overall heat input required.

**Benefits:**
*   Higher COP (typically 1.5 to 2.0) compared to single-effect systems.
*   More efficient utilization of waste heat.

**Disadvantages:**
*   More complex design and higher initial cost.

### 3.5 Comparison of VCRS and VAR Systems

| Feature                 | Vapour Compression Refrigeration (VCRS)              | Vapour Absorption Refrigeration (VAR)                      |
| :---------------------- | :--------------------------------------------------- | :-------------------------------------------------------- |
| **Primary Energy Input**| Mechanical Work (electricity)                        | Heat Energy (waste heat, solar energy)                    |
| **Compressor**          | Mechanical Compressor                                | Thermal Compressor (Absorber, Generator, Pump/Ejector)    |
| **COP**                 | Higher (typically 2.5 - 5.0 for AC)                  | Lower (typically 0.6 - 1.2 for single-effect)             |
| **Operating Cost**      | Higher electricity consumption                     | Lower if waste heat is readily available                  |
| **Initial Cost**        | Generally lower for equivalent capacity              | Higher                                                    |
| **Complexity**          | Relatively simpler                                   | More complex                                              |
| **Applications**        | General refrigeration, air conditioning, industrial  | Applications with abundant waste heat or solar energy     |
| **Refrigerant/Absorbent**| Refrigerant (e.g., R-134a, R-410A)                   | Refrigerant-Absorbent Pairs (e.g., NH3-H2O, H2O-LiBr)     |
| **Maintenance**         | Mechanical compressor maintenance                    | Potential for corrosion, leaks in absorption circuit      |

**Textbook Insights:**

*   **Stoecker & Jons:** Provides a detailed comparison of the thermodynamic cycles and performance characteristics of both VCRS and VAR systems, including their economic implications.
*   **ASHRAE Handbook:** Offers practical data and performance charts for various refrigeration and air-conditioning systems, including VAR systems.

---

## 4. Practice Questions and Exercises

**Question 1 (VCRS):**
A VCRS using R-134a operates with an evaporator temperature of $-10^\circ C$ and a condenser temperature of $40^\circ C$. The refrigerant leaves the evaporator as saturated vapour and leaves the condenser as saturated liquid. If the actual compressor discharge temperature is $50^\circ C$ and there is no superheating or subcooling specified for the actual cycle, determine:
a) The COP of the ideal cycle.
b) The COP of the actual cycle.
*(Assume you have access to R-134a tables/charts to find enthalpy values.)*

**Answer 1:**
*   **For the ideal cycle:**
    *   State 1: Saturated vapour at $-10^\circ C$. From R-134a tables, $h_1 = h_g(-10^\circ C)$ and $s_1 = s_g(-10^\circ C)$.
    *   State 2: Isentropic compression. $s_2 = s_1$ at condenser pressure ($P_c$, corresponding to $40^\circ C$). Find $h_2$.
    *   State 3: Saturated liquid at $40^\circ C$. From R-134a tables, $h_3 = h_f(40^\circ C)$.
    *   State 4: Isenthalpic expansion. $h_4 = h_3$.
    *   $COP_{ideal} = (h_1 - h_4) / (h_2 - h_1)$
*   **For the actual cycle:**
    *   State 1: Saturated vapour at $-10^\circ C$. $h_1 = h_g(-10^\circ C)$.
    *   State 2: Compressor discharge at $50^\circ C$ and condenser pressure ($P_c$). Find $h_2$. (Note: The actual compression might not be perfectly isentropic, but this question implies the discharge state is given).
    *   State 3: Saturated liquid at $40^\circ C$. $h_3 = h_f(40^\circ C)$.
    *   State 4: Isenthalpic expansion. $h_4 = h_3$.
    *   $COP_{actual} = (h_1 - h_4) / (h_2 - h_1)$

*(Note: To provide numerical answers, actual enthalpy values from R-134a tables are required. This question is designed to test the understanding of the cycle analysis process.)*

**Question 2 (VAR):**
A single-effect ammonia-water absorption refrigeration system produces a cooling effect of 10 TR (Tons of Refrigeration). The evaporator operates at $0^\circ C$, the generator at $100^\circ C$, and the condenser at $30^\circ C$. If the COP of the system is 0.8, determine:
a) The rate of heat supplied to the generator.
b) The rate of heat rejected by the condenser.
*(1 TR = 3.517 kW)*

**Answer 2:**
a) Given $Q_{evap} = 10 \text{ TR} = 10 \times 3.517 \text{ kW} = 35.17 \text{ kW}$.
   $COP_{AR} = \frac{Q_{evap}}{Q_{gen}}$
   $0.8 = \frac{35.17 \text{ kW}}{Q_{gen}}$
   $Q_{gen} = \frac{35.17}{0.8} = 43.96 \text{ kW}$

b) For a VAR system, the energy balance on the entire system (excluding pump work) is:
   $Q_{gen} + Q_{evap} = Q_{condenser} + Q_{absorber}$
   However, a more direct approach to find $Q_{condenser}$ requires detailed component analysis or assumptions about the absorber heat rejection. In a typical analysis, the primary outputs are the cooling effect and the heat rejected. The heat rejected from the condenser and absorber are significant.

   Let's consider the overall energy balance if we assume minimal pump work:
   Energy In = Energy Out
   $Q_{gen} + Q_{evap} + W_{pump} = Q_{condenser} + Q_{absorber}$

   Without specific concentration data and absorber heat balance, it's challenging to directly calculate $Q_{condenser}$ from the given information alone. However, if we consider the mass flow rates and enthalpy changes, it could be determined.

   **A common simplification or approach in such problems is to relate $Q_{condenser}$ to the refrigerant mass flow and enthalpy difference during condensation.**

   **Alternative calculation (often used for estimation or when absorber heat is not explicitly given):**
   $Q_{condenser} \approx Q_{evap} + Q_{gen} - W_{pump}$ (assuming absorber heat is part of the rejected heat or not the focus).
   If $W_{pump}$ is negligible:
   $Q_{condenser} \approx 35.17 \text{ kW} + 43.96 \text{ kW} = 79.13 \text{ kW}$.

   **Important Note:** This simplified calculation of $Q_{condenser}$ often neglects the heat rejected in the absorber, which is a substantial portion. A precise calculation requires a full component-wise analysis using mass and energy balances for each part of the absorption cycle.

---

## 5. Important Points to Remember

*   **Thermodynamic analysis is key to understanding and optimizing refrigeration system performance.**
*   **The P-h diagram is an invaluable tool for visualizing and analyzing VCRS cycles.**
*   **COP is the primary performance indicator, representing efficiency.**
*   **Actual cycles deviate from ideal cycles due to irreversibilities; account for superheating, subcooling, and pressure drops.**
*   **VARS utilize heat energy, making them suitable for waste heat recovery, but generally have lower COPs than VCRS.**
*   **The choice of refrigerant (VCRS) or refrigerant-absorbent pair (VAR) significantly impacts system performance and safety.**
*   **Subcooling in VCRS always improves COP, while superheating has a mixed effect.**
*   **Lowering evaporator temperature and raising condenser temperature decreases the COP of VCRS.**

---

These notes provide a comprehensive overview of the thermodynamic analysis of vapour compression and vapour absorption refrigeration systems, covering the core concepts, performance metrics, and practical considerations, aligned with the specified learning and course outcomes. Remember to refer to your textbooks for detailed property data and specific calculation methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
