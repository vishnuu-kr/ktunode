---
title: "representation of the cycle on T-s and P-h diagram"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f63"
status: "completed"
scrapedAt: "2026-05-20T18:17:12.772Z"
---
# Refrigeration and Air Conditioning: Module 2 - Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Representation of the Cycle on T-s and P-h Diagram

### Introduction

This module focuses on the thermodynamic analysis of fundamental refrigeration cycles. Understanding how these cycles are represented on property diagrams is crucial for analyzing their performance, calculating energy transfers, and identifying areas for improvement. We will primarily focus on the **Vapour Compression Refrigeration (VCR) cycle** and the **Vapour Absorption Refrigeration (VAR) cycle**.

---

### 1. Vapour Compression Refrigeration (VCR) Cycle

The VCR cycle is the most common refrigeration cycle used today. It involves a working fluid (refrigerant) that undergoes phase changes to absorb heat from a low-temperature reservoir and reject it to a high-temperature reservoir.

**Core Components:**

*   **Compressor:** Increases the pressure and temperature of the refrigerant vapor.
*   **Condenser:** Rejects heat from the high-pressure refrigerant, causing it to condense into a liquid.
*   **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the liquid refrigerant.
*   **Evaporator:** Absorbs heat from the refrigerated space, causing the liquid refrigerant to vaporize.

**Ideal VCR Cycle (Theoretical Cycle):**

The ideal VCR cycle assumes reversible processes with no pressure drops in connecting pipes or components (except the expansion valve).

#### 1.1 Representation on the Temperature-Entropy (T-s) Diagram

The T-s diagram plots temperature (T) on the y-axis and entropy (s) on the x-axis. Each process in the VCR cycle is represented by a curve or line on this diagram.

**Processes on the T-s Diagram (Ideal VCR Cycle):**

*   **1-2: Isentropic Compression:**
    *   **Description:** The refrigerant vapor enters the compressor as a saturated or superheated vapor at low pressure and temperature. It is compressed isentropically (reversibly and adiabatically) to a high pressure and temperature.
    *   **T-s Representation:** A vertical line (constant entropy, $s_1 = s_2$) from state 1 to state 2. The temperature increases significantly.
    *   **Work Input:** The area under the curve 1-2 represents the work done on the compressor.
*   **2-3: Isobaric Heat Rejection (Condensation):**
    *   **Description:** The high-pressure, high-temperature superheated vapor enters the condenser. Heat is rejected at constant pressure ($P_2 = P_3$), causing the refrigerant to condense into a saturated liquid.
    *   **T-s Representation:** A horizontal line (constant pressure, $T_{condenser}$) from state 2 to state 3. The entropy decreases as heat is removed.
*   **3-4: Isenthalpic Expansion (Throttling):**
    *   **Description:** The saturated liquid refrigerant from the condenser passes through an expansion valve, where its pressure and temperature are drastically reduced. This is a throttling process, which is irreversible and adiabatic, meaning enthalpy remains constant ($h_3 = h_4$).
    *   **T-s Representation:** A curve sloping downwards and to the left from state 3 to state 4. Entropy increases due to irreversibility.
*   **4-1: Isobaric Heat Absorption (Evaporation):**
    *   **Description:** The low-pressure, low-temperature mixture of liquid and vapor refrigerant enters the evaporator. Heat is absorbed from the refrigerated space at constant pressure ($P_4 = P_1$), causing the refrigerant to vaporize into a saturated vapor.
    *   **T-s Representation:** A horizontal line (constant pressure, $T_{evaporator}$) from state 4 to state 1. Entropy increases as heat is absorbed.

**Key Characteristics on T-s Diagram:**

*   The area enclosed by the cycle (1-2-3-4-1) represents the net work done on the system plus the heat rejected.
*   The area between the evaporator line (4-1) and the temperature axis represents the heat absorbed ($Q_{evap}$).
*   The area between the condenser line (2-3) and the temperature axis represents the heat rejected ($Q_{cond}$).
*   The coefficient of performance (COP) can be conceptually related to the temperatures: $COP = \frac{T_{evap}}{T_{cond} - T_{evap}}$ (for Carnot cycle, and an approximation for VCR).

**Reference:** Arora, C.P. (4th ed., 2021), Chapter 5, "Thermodynamic Principles of Refrigeration".

#### 1.2 Representation on the Pressure-Enthalpy (P-h) Diagram (Mollier Diagram)

The P-h diagram plots pressure (P) on the y-axis and enthalpy (h) on the x-axis. This diagram is particularly useful for VCR cycle analysis because enthalpy is directly related to the energy transferred during phase changes and compression.

**Processes on the P-h Diagram (Ideal VCR Cycle):**

*   **1-2: Isentropic Compression:**
    *   **Description:** Same as on the T-s diagram.
    *   **P-h Representation:** A curve sloping upwards and to the right from state 1 to state 2. Entropy is constant along this path, but enthalpy increases due to work input. The pressure also increases.
    *   **Work Input:** The vertical distance between state 1 and state 2 multiplied by the specific heat at constant pressure is not directly work. Work input is calculated as $W_{in} = h_2 - h_1$ (per unit mass).
*   **2-3: Isobaric Heat Rejection (Condensation):**
    *   **Description:** Same as on the T-s diagram.
    *   **P-h Representation:** A vertical line (constant pressure, $P_2 = P_3$) from state 2 to state 3. The enthalpy decreases as heat is rejected. This path lies within the saturation dome, showing the phase change from superheated vapor to saturated liquid.
    *   **Heat Rejected:** $Q_{cond} = h_2 - h_3$.
*   **3-4: Isenthalpic Expansion (Throttling):**
    *   **Description:** Same as on the T-s diagram.
    *   **P-h Representation:** A vertical line (constant enthalpy, $h_3 = h_4$) from state 3 to state 4. The pressure decreases, and the state becomes a mixture of liquid and vapor.
*   **4-1: Isobaric Heat Absorption (Evaporation):**
    *   **Description:** Same as on the T-s diagram.
    *   **P-h Representation:** A vertical line (constant pressure, $P_4 = P_1$) from state 4 to state 1. The enthalpy increases as heat is absorbed. This path also lies within the saturation dome, showing the phase change from a liquid-vapor mixture to saturated or superheated vapor.
    *   **Heat Absorbed:** $Q_{evap} = h_1 - h_4$.

**Key Characteristics on P-h Diagram:**

*   The area between state 1 and state 4 on the enthalpy axis ($h_1 - h_4$) represents the useful refrigeration effect (heat absorbed in the evaporator).
*   The vertical distance between states 1 and 2 ($h_2 - h_1$) represents the work input to the compressor.
*   The vertical distance between states 2 and 3 ($h_2 - h_3$) represents the heat rejected in the condenser.
*   **COP Calculation:** $COP = \frac{\text{Useful Refrigeration Effect}}{\text{Work Input}} = \frac{h_1 - h_4}{h_2 - h_1}$. This formula is directly obtained from the P-h diagram.
*   The saturation dome is clearly visible, indicating the regions of single-phase liquid, two-phase mixture, and single-phase vapor.

**Reference:** Arora, S. C. and Domkundwar, S. (2018), Chapter 4, "Thermodynamic Analysis of Refrigeration Cycles".

---

### 2. Vapour Absorption Refrigeration (VAR) Cycle

The VAR cycle is an alternative to the VCR cycle. Instead of mechanical compression, it uses heat energy to drive the refrigeration process. It typically uses a mixture of an absorbent and a refrigerant. Common pairs include Ammonia-Water and Lithium Bromide-Water.

**Core Components:**

*   **Evaporator:** Similar to VCR, absorbs heat to vaporize the refrigerant.
*   **Absorber:** Absorbs the refrigerant vapor from the evaporator using an absorbent.
*   **Generator (Boiler):** Uses heat input to separate the refrigerant from the absorbent.
*   **Condenser:** Condenses the high-pressure refrigerant vapor.
*   **Expansion Valve:** Reduces the pressure and temperature of the liquid refrigerant.
*   **Pump:** Pumps the weak absorbent solution to the generator (low pressure).
*   **Pressure Reducing Valve:** Reduces the pressure of the strong absorbent-rich solution before it enters the absorber.

**Ideal VAR Cycle (Simplified):**

The VAR cycle involves a mixture of refrigerant and absorbent, and its representation on T-s and P-h diagrams is more complex due to the mixture properties. However, we can simplify by focusing on the refrigerant's path.

#### 2.1 Representation on the T-s Diagram (Simplified for Ammonia-Water)

In an Ammonia-Water system, Ammonia is the refrigerant and Water is the absorbent.

**Processes on the T-s Diagram (Simplified VAR Cycle):**

*   **Evaporator (similar to VCR 4-1):** Ammonia absorbs heat and vaporizes. The process is often assumed to be isobaric and isothermal (constant temperature and pressure) if the concentration of ammonia in the liquid is low.
*   **Absorber:** Ammonia vapor from the evaporator is absorbed by water. This is an exothermic process (heat is released) and is often considered approximately isothermal and isobaric. The resulting mixture is a "strong" or "rich" solution of ammonia in water.
*   **Generator:** Heat is supplied to the rich solution, driving off the ammonia as vapor at higher pressure and temperature. The remaining liquid is a "weak" or "lean" solution of ammonia in water. This process is generally represented as isobaric heat addition followed by separation.
*   **Condenser (similar to VCR 2-3):** Ammonia vapor is condensed at high pressure and temperature.
*   **Expansion Valve (similar to VCR 3-4):** The liquid ammonia is throttled to low pressure.
*   **Pump (weak solution):** Pumps the weak solution to the generator.
*   **Pressure Reducing Valve (strong solution):** Reduces the pressure of the strong solution before it enters the absorber.

**T-s Diagram Consideration:**
*   Due to the presence of mixtures, the lines on the T-s diagram representing processes involving the absorbent-refrigerant mixture will not be simple straight lines.
*   The absorption and generation processes involve mixing and separating, making direct representation of the entire cycle on a single T-s diagram for both components challenging without specific property data for the mixture.
*   However, the refrigerant's phase changes (evaporation, condensation) can be shown similarly to the VCR cycle if we consider the refrigerant's state points.

**Reference:** Ahamadul Ameen (2020), Chapter 6, "Absorption Refrigeration Systems".

#### 2.2 Representation on the P-h Diagram (Simplified for Ammonia-Water)

The P-h diagram for VAR systems, especially for mixtures, is more complex and often involves specific charts for the refrigerant-absorbent mixture (e.g., Ammonia-Water P-h diagram).

**Processes on the P-h Diagram (Simplified VAR Cycle):**

*   **Evaporator:** Refrigerant (Ammonia) absorbs heat, moving from a liquid-vapor mixture to vapor. This is represented by an increase in enthalpy at constant low pressure.
*   **Absorber:** Refrigerant vapor is absorbed by the absorbent (Water). Heat is released, and the mixture becomes richer in refrigerant. This process involves complex phase equilibrium.
*   **Generator:** Heat is added to the rich mixture, driving off the refrigerant vapor. This increases the temperature and pressure of the refrigerant. The weak solution is left behind.
*   **Condenser:** Refrigerant vapor is condensed at high pressure, releasing heat.
*   **Expansion Valve:** Refrigerant liquid is throttled to low pressure.

**P-h Diagram Consideration:**

*   The P-h diagram for mixtures is crucial for accurate analysis of VAR cycles. These diagrams often show lines of constant temperature, constant pressure, constant refrigerant concentration, and lines representing phase change boundaries.
*   The heat absorbed in the evaporator and rejected in the condenser are directly related to enthalpy changes of the refrigerant.
*   The heat input to the generator and heat rejected in the absorber are also important for performance analysis and can be determined from the enthalpy changes of the mixture.

**Reference:** Arora, C.P. (4th ed., 2021), Chapter 6, "Absorption Refrigeration Systems".

---

### 3. Coefficient of Performance (COP) and its relation to Diagrams

**VCR Cycle:**

*   **COP (Coefficient of Performance):** The ratio of the desired output (refrigerating effect) to the required input (work input).
    $COP_{VCR} = \frac{\text{Refrigerating Effect}}{\text{Work Input}} = \frac{Q_{evap}}{W_{in}}$
*   **From P-h Diagram:** $COP_{VCR} = \frac{h_1 - h_4}{h_2 - h_1}$
*   **From T-s Diagram (Conceptual):** $COP \approx \frac{T_{evap}}{T_{cond} - T_{evap}}$ (for ideal Carnot cycle, where temperatures are in absolute scale). The T-s diagram helps visualize the temperature difference driving the cycle.

**VAR Cycle:**

*   **COP (Coefficient of Performance):** The ratio of the desired output (refrigerating effect) to the required input (heat input to the generator).
    $COP_{VAR} = \frac{\text{Refrigerating Effect}}{\text{Heat Input to Generator}} = \frac{Q_{evap}}{Q_{gen}}$
*   **Diagrammatic Relation:** The diagrams help in calculating $Q_{evap}$ (from evaporator enthalpy change) and $Q_{gen}$ (from generator enthalpy change and potentially enthalpy of weak/rich solutions).

---

### 4. Real Cycle vs. Ideal Cycle Representation

In practice, real cycles deviate from the ideal cycles due to irreversibilities and component inefficiencies.

*   **Real VCR Cycle on T-s Diagram:**
    *   **Compression (1-2):** Isentropic compression is not achievable; it becomes polytropic with slight deviation from vertical. Work input is higher ($h_2' > h_2$).
    *   **Condensation (2-3):** Pressure drop in condenser and condenser outlet might not be saturated liquid (subcooled liquid at lower pressure).
    *   **Expansion (3-4):** Throttling is inherently irreversible.
    *   **Evaporation (4-1):** Pressure drop in evaporator.

*   **Real VCR Cycle on P-h Diagram:**
    *   **Compression (1-2):** Actual compression line will be slightly curved, not perfectly vertical, reflecting polytropic compression.
    *   **Condensation (2-3):** A slight downward slope might indicate a pressure drop. Outlet may be subcooled liquid.
    *   **Expansion (3-4):** Vertical line (isenthalpic).
    *   **Evaporation (4-1):** A slight downward slope indicates a pressure drop, meaning absorption occurs at a slightly lower pressure and temperature.

**Impact on COP:** Real cycle COPs are always lower than ideal cycle COPs due to increased work input and/or reduced refrigerating effect.

---

### Learning Outcome Alignment:

*   **CO1 (Define and describe basic concepts and analyze performance of ideal refrigeration cycles):** This topic directly addresses the representation and analysis of ideal VCR and simplified VAR cycles on T-s and P-h diagrams, enabling performance evaluation (COP).
*   **CO3 (Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems):** The ability to read and interpret these diagrams is fundamental to performing thermodynamic analysis, calculating energy balances, and determining COP.

---

### Important Points to Remember:

*   **T-s Diagram:** Useful for visualizing temperature levels and heat transfer as areas. Processes at constant temperature and pressure appear as horizontal lines. Isentropic processes are vertical lines.
*   **P-h Diagram:** Essential for VCR cycle analysis as it directly relates pressure and enthalpy, allowing for easy calculation of work input and heat transfer. Vertical lines represent constant pressure and isenthalpic processes.
*   **Ideal vs. Real Cycles:** Real cycles have irreversibilities (friction, heat losses) that reduce their efficiency. These deviations are visible on the diagrams.
*   **VCR COP:** Directly calculable from P-h diagram as $(h_1 - h_4) / (h_2 - h_1)$.
*   **VAR Cycle Complexity:** Involves mixtures, making diagrammatic representation more intricate, often requiring specialized charts.

---

### Practice Questions:

**Question 1:**
Sketch the ideal Vapour Compression Refrigeration (VCR) cycle on both a T-s diagram and a P-h diagram. Label all four processes and the key states (1, 2, 3, 4).

**Question 2:**
For the ideal VCR cycle represented on the diagrams, which diagram is more convenient for calculating the work input to the compressor and the refrigerating effect? Justify your answer.

**Question 3:**
Consider an ideal VCR cycle. If the evaporator temperature is $-10^\circ C$ and the condenser temperature is $30^\circ C$, what is the theoretical maximum COP (Carnot COP)? Briefly explain how the T-s diagram helps in understanding this maximum COP.

**Question 4:**
What is the fundamental difference in the energy input required between a Vapour Compression Refrigeration (VCR) cycle and a Vapour Absorption Refrigeration (VAR) cycle? How does this difference impact their typical applications?

---

### Answers to Practice Questions:

**Answer 1:**
*(Sketches would be provided here in a visual format. For text-based representation:*)

*   **T-s Diagram:**
    *   1-2: Vertical line (Isentropic Compression), Temp & Entropy increase.
    *   2-3: Horizontal line (Isobaric Heat Rejection), Temp constant, Entropy decreases.
    *   3-4: Downward sloping curve (Isenthalpic Expansion), Temp & Entropy decrease.
    *   4-1: Horizontal line (Isobaric Heat Absorption), Temp constant, Entropy increases.

*   **P-h Diagram:**
    *   1-2: Upward sloping curve (Isentropic Compression), Pressure & Enthalpy increase.
    *   2-3: Vertical line (Isobaric Heat Rejection), Pressure constant, Enthalpy decreases.
    *   3-4: Vertical line (Isenthalpic Expansion), Enthalpy constant, Pressure decreases.
    *   4-1: Vertical line (Isobaric Heat Absorption), Pressure constant, Enthalpy increases.

**Answer 2:**
The **P-h diagram** is more convenient for calculating work input and refrigerating effect.
*   **Work Input:** On the P-h diagram, the work input to the compressor is directly the difference in enthalpy between the compressor outlet (state 2) and inlet (state 1): $W_{in} = h_2 - h_1$.
*   **Refrigerating Effect:** Similarly, the refrigerating effect (heat absorbed in the evaporator) is the difference in enthalpy between the evaporator outlet (state 1) and inlet (state 4): $Q_{evap} = h_1 - h_4$.
On the T-s diagram, these quantities are represented by areas under the curves, which are harder to calculate directly without integration.

**Answer 3:**
The theoretical maximum COP (Carnot COP) is given by:
$COP_{Carnot} = \frac{T_L}{T_H - T_L}$
where $T_L$ is the evaporating temperature and $T_H$ is the condensing temperature, both in absolute Kelvin.

Given:
$T_L = -10^\circ C = 263.15 \, K$
$T_H = 30^\circ C = 303.15 \, K$

$COP_{Carnot} = \frac{263.15 \, K}{303.15 \, K - 263.15 \, K} = \frac{263.15}{40} \approx 6.58$

The T-s diagram helps in understanding this maximum COP because it visually represents the temperature difference ($T_H - T_L$) across which the heat pump cycle operates. A smaller temperature difference leads to a higher COP. The Carnot cycle is the most efficient cycle operating between these two temperatures, and its COP is determined by the ratio of these absolute temperatures.

**Answer 4:**
*   **VCR Cycle:** Primarily uses **mechanical work** (supplied by a compressor) to raise the pressure and temperature of the refrigerant.
*   **VAR Cycle:** Primarily uses **heat energy** (supplied to the generator) to drive the separation of the refrigerant from the absorbent, thereby creating the pressure difference required for refrigeration. It also requires a small amount of mechanical work for the pump.

This difference leads to different applications. VCR systems are generally more efficient in terms of energy consumption (especially when electricity is cheap) and are widely used for small to medium-scale cooling. VAR systems are advantageous where waste heat or low-grade heat is readily available (e.g., from industrial processes, solar thermal collectors) or where electricity is expensive. They are often used for larger-scale applications like district cooling or absorption chillers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
