---
title: "ideal refrigeration cycles"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 1: Introduction to refrigeration and air conditioning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f52"
status: "completed"
scrapedAt: "2026-05-20T18:17:01.079Z"
---
## REFRIGERATION AND AIR CONDITIONING

### Module 1: Introduction to Refrigeration and Air Conditioning

### Topic: Ideal Refrigeration Cycles

---

**Objective:** To understand the fundamental principles and thermodynamic analysis of ideal refrigeration cycles.

**Target Audience:** Students of Refrigeration and Air Conditioning.

**Knowledge Level Alignment:** K2 (Understand), K3 (Apply), K4 (Analyze), K5 (Evaluate) - Primarily K2 and K4 for this topic.

---

### 1. Introduction to Refrigeration

*   **Definition:** Refrigeration is the process of removing heat from a low-temperature reservoir and transferring it to a high-temperature reservoir, thereby maintaining the low-temperature reservoir at a temperature below the ambient temperature. This is contrary to the natural flow of heat.
*   **Purpose:**
    *   Food preservation (chilling, freezing)
    *   Comfort cooling (air conditioning)
    *   Industrial processes (chemical reactions, material processing)
    *   Medical applications (organ preservation, blood storage)
    *   Ice manufacturing
*   **Key Components of a Refrigeration System:**
    *   **Evaporator:** Absorbs heat from the refrigerated space.
    *   **Compressor:** Compresses the refrigerant vapor, increasing its pressure and temperature.
    *   **Condenser:** Rejects heat from the refrigerant to the high-temperature reservoir (ambient air or cooling water).
    *   **Expansion Valve/Device:** Reduces the pressure and temperature of the liquid refrigerant.
*   **Reversed Carnot Cycle:** The theoretical ideal refrigeration cycle.

---

### 2. Ideal Refrigeration Cycles: The Reversed Carnot Cycle

The Reversed Carnot cycle is a theoretical, reversible cycle that provides the maximum possible Coefficient of Performance (COP) for any refrigeration cycle operating between two given temperature limits.

#### 2.1. Thermodynamic Processes

The Reversed Carnot Cycle consists of four reversible processes:

1.  **Isentropic Compression (1-2):**
    *   **Description:** Refrigerant vapor is compressed isentropically (reversible adiabatic) from a low pressure and temperature to a high pressure and temperature.
    *   **Work Input:** Required to drive the compressor.
    *   **State Change:** Entropy ($s_1 = s_2$), Temperature ($T_1 < T_2$), Pressure ($P_1 < P_2$).
    *   **Textbook Reference:** Arora, C.P. (2021) - Chapter on ideal cycles.

2.  **Isothermal Heat Rejection (2-3):**
    *   **Description:** The high-pressure, high-temperature refrigerant vapor condenses into a liquid at constant temperature by rejecting heat to the high-temperature reservoir ($T_H$). This is an isothermal process.
    *   **Heat Rejected ($Q_H$):** Rejected to the surroundings.
    *   **State Change:** Temperature ($T_2 = T_3 = T_H$), Pressure ($P_2 = P_3$).
    *   **Textbook Reference:** Ramesh Chandra Arora (2015) - Discusses heat transfer in ideal cycles.

3.  **Isentropic Expansion (3-4):**
    *   **Description:** The high-pressure, saturated liquid refrigerant expands isentropically (reversible adiabatic) through an expansion valve or turbine to a low pressure and temperature.
    *   **Work Output (if using a turbine):** Can be obtained.
    *   **State Change:** Entropy ($s_3 = s_4$), Temperature ($T_3 > T_4$), Pressure ($P_3 > P_4$).
    *   **Textbook Reference:** Arora, S.C. & Domkundwar, S. (2018) - Explains the role of expansion devices.

4.  **Isothermal Heat Absorption (4-1):**
    *   **Description:** The low-pressure, low-temperature refrigerant vaporizes into a vapor at constant temperature by absorbing heat from the low-temperature reservoir ($T_L$). This is an isothermal process.
    *   **Heat Absorbed ($Q_L$):** Absorbed from the refrigerated space.
    *   **State Change:** Temperature ($T_4 = T_1 = T_L$), Pressure ($P_4 = P_1$).
    *   **Textbook Reference:** Ahamadul Ameen (2020) - Covers the heat absorption process in the evaporator.

#### 2.2. T-s Diagram for Reversed Carnot Cycle

*   The Reversed Carnot cycle on a Temperature-Entropy (T-s) diagram is a rectangle.
*   The vertical sides represent the isentropic compression and expansion.
*   The horizontal sides represent the isothermal heat absorption and rejection.

    ```
    T
    ^
    |       2-------3 (T_H)
    |      /         \
    |     /           \
    |    /             \
    | 1-------4 (T_L)
    +----------------------> s
    ```

    *   1-2: Isentropic Compression
    *   2-3: Isothermal Heat Rejection ($Q_H$)
    *   3-4: Isentropic Expansion
    *   4-1: Isothermal Heat Absorption ($Q_L$)

#### 2.3. Performance Parameter: Coefficient of Performance (COP)

The primary measure of a refrigeration system's efficiency is its Coefficient of Performance (COP).

*   **Definition:** COP is the ratio of the desired output (refrigeration effect) to the required input (work done).
*   **Formula:**
    $COP_R = \frac{\text{Refrigeration Effect}}{\text{Work Input}}$
    $COP_R = \frac{Q_L}{W_{in}}$

*   **For the Reversed Carnot Cycle:**
    *   From the T-s diagram, the heat absorbed ($Q_L$) is proportional to the area under the isothermal process 4-1:
        $Q_L = m \times (s_1 - s_4) \times T_L$
        (where 'm' is the mass flow rate)
    *   The heat rejected ($Q_H$) is proportional to the area under the isothermal process 2-3:
        $Q_H = m \times (s_2 - s_3) \times T_H$
        Since $s_1 = s_2$ and $s_4 = s_3$, $Q_H = m \times (s_1 - s_4) \times T_H$
    *   The work input ($W_{in}$) is the difference between heat rejected and heat absorbed:
        $W_{in} = Q_H - Q_L$
        $W_{in} = m \times (s_1 - s_4) \times T_H - m \times (s_1 - s_4) \times T_L$
        $W_{in} = m \times (s_1 - s_4) \times (T_H - T_L)$

    *   Therefore, the COP for the Reversed Carnot Cycle is:
        $COP_{R, \text{Carnot}} = \frac{m \times (s_1 - s_4) \times T_L}{m \times (s_1 - s_4) \times (T_H - T_L)}$
        $$COP_{R, \text{Carnot}} = \frac{T_L}{T_H - T_L}$$

    *   **Important Note:** Temperatures ($T_L$ and $T_H$) must be in absolute units (Kelvin or Rankine).
    *   **Textbook Reference:** Stoecker & Jons (2nd ed.) - Provides detailed derivation of COP for Carnot cycle.
    *   **Data Book Reference:** C P Kothandaraman (2023) - Useful for temperature conversions.

#### 2.4. Advantages of the Reversed Carnot Cycle

*   **Theoretical Maximum Efficiency:** Achieves the highest possible COP for a given set of temperature limits.
*   **Foundation for Understanding:** Serves as a benchmark for comparing the performance of real refrigeration cycles.

#### 2.5. Disadvantages and Practical Limitations

*   **Impracticality:**
    *   **Isothermal Processes:** Achieving perfect isothermal heat transfer with rapid compression and expansion is difficult.
    *   **Isentropic Processes:** Reversible adiabatic processes are idealized and not achievable in practice due to irreversibilities like friction and heat transfer.
    *   **Reciprocating Compressor:** While compressors are used, the exact isentropic compression and expansion are not realized.
    *   **Expansion Valve:** A simple throttling expansion valve (like in many real systems) is an isenthalpic process, not isentropic. However, a turbine would be closer to isentropic expansion.
*   **Low COP at Small Temperature Differences:** While theoretically efficient, the COP can be very low if $T_H$ is only slightly higher than $T_L$.
*   **Use of Refrigerants:** The ideal cycle doesn't specify the refrigerant, but real refrigerants have limitations.

---

### 3. The Ideal Vapor Compression Refrigeration Cycle (VCRS)

The Vapor Compression Refrigeration (VCR) cycle is the most common refrigeration cycle used in practice. The ideal VCRS assumes reversible processes, but with practical components like compressors and expansion valves.

#### 3.1. Thermodynamic Processes

1.  **Isentropic Compression (1-2):**
    *   **Description:** Saturated vapor refrigerant is compressed isentropically (reversible adiabatic) to a superheated vapor state at a higher pressure and temperature.
    *   **Component:** Compressor.
    *   **State Change:** $s_1 = s_2$, $T_1 < T_2$, $P_1 < P_2$.
    *   **Textbook Reference:** Arora, C.P. (2021) - Focuses on compressor work.

2.  **Isobaric Heat Rejection (2-3):**
    *   **Description:** The superheated vapor rejects heat to the surroundings at constant pressure, condensing into saturated liquid.
    *   **Component:** Condenser.
    *   **State Change:** $P_2 = P_3$, $T_2 > T_3$.
    *   **Textbook Reference:** Ahamadul Ameen (2020) - Details the condensation process.

3.  **Isenthalpic Expansion (3-4):**
    *   **Description:** The saturated liquid refrigerant undergoes throttling (isenthalpic expansion) through an expansion valve, reducing its pressure and temperature, resulting in a mixture of liquid and vapor.
    *   **Component:** Expansion Valve (or capillary tube).
    *   **State Change:** $h_3 = h_4$ (enthalpy remains constant), $P_3 > P_4$, $T_3 > T_4$.
    *   **Textbook Reference:** Ramesh Chandra Arora (2015) - Explains the throttling process.

4.  **Isobaric Heat Absorption (4-1):**
    *   **Description:** The low-pressure liquid-vapor mixture absorbs heat from the refrigerated space at constant pressure, vaporizing completely into saturated vapor.
    *   **Component:** Evaporator.
    *   **State Change:** $P_4 = P_1$, $T_4 < T_1$.
    *   **Textbook Reference:** Arora, S.C. & Domkundwar, S. (2018) - Covers evaporator operation.

#### 3.2. T-s Diagram for Ideal Vapor Compression Cycle

*   The T-s diagram for the ideal VCRS is similar to the Reversed Carnot but with different process shapes.
*   Compression (1-2) is isentropic.
*   Heat rejection (2-3) is isobaric and ends at the saturated liquid line.
*   Expansion (3-4) is a vertical line (isenthalpic).
*   Heat absorption (4-1) is isobaric and ends at the saturated vapor line.

    ```
    T
    ^
    |       2-------3 (Condensing)
    |      /         \
    |     /           \
    |    /             \
    | 1-------4 (Evaporating)
    +----------------------> s
    ```

    *   1-2: Isentropic Compression
    *   2-3: Isobaric Heat Rejection
    *   3-4: Isenthalpic Expansion (throttling)
    *   4-1: Isobaric Heat Absorption

#### 3.3. COP for Ideal Vapor Compression Cycle

*   **Refrigeration Effect ($Q_L$):** The heat absorbed in the evaporator.
    $Q_L = h_1 - h_4$ (per unit mass of refrigerant)
*   **Work Input ($W_{in}$):** The work done by the compressor.
    $W_{in} = h_2 - h_1$ (per unit mass of refrigerant)
*   **COP of Refrigeration ($COP_R$):**
    $$COP_{R, \text{VCRS}} = \frac{Q_L}{W_{in}} = \frac{h_1 - h_4}{h_2 - h_1}$$

    *   Where $h_1$, $h_2$, $h_4$ are specific enthalpies at the respective states. These values are obtained from refrigerant property tables (e.g., using a data book or software).
    *   **Textbook Reference:** W P Jones (2001) - Emphasizes the calculation of COP using enthalpy values.
    *   **Data Book Reference:** C P Kothandaraman (2023) - Essential for obtaining enthalpy values.

#### 3.4. Comparison with Reversed Carnot Cycle

*   **COP:** The ideal VCRS always has a lower COP than the Reversed Carnot cycle operating between the same temperature limits.
*   **Reason:** The VCRS involves a throttling process (isenthalpic expansion), which is irreversible and leads to a less efficient cycle compared to the reversible isentropic expansion of the Carnot cycle. Also, the heat rejection and absorption processes in VCRS are isobaric, not isothermal, which also impacts COP.

---

### 4. Other Ideal Cycles (Brief Mention)

While the Reversed Carnot and Ideal Vapor Compression cycles are central, other ideal cycles exist for specific applications.

*   **Ideal Gas Refrigeration Cycle (Brayton Cycle - Reversed):** Used in aircraft refrigeration where air is the working fluid. Consists of isentropic compression, isobaric heat rejection, isentropic expansion, and isobaric heat absorption.

    *   **CO2 Alignment:** CO2 mentions aircraft refrigeration systems (CO2).
    *   **Textbook Reference:** Arora, C.P. (2021) - Chapter on air refrigeration.

*   **Ideal Absorption Refrigeration Cycle:** Works on the principle of absorption and desorption of a refrigerant by a absorbent. It uses heat as the primary energy input instead of mechanical work.

    *   **CO2 Alignment:** CO3 mentions absorption systems.
    *   **Textbook Reference:** Ramesh Chandra Arora (2015) - Covers the basic principles of absorption cycles.

---

### 5. Key Concepts and Definitions Recap

*   **Refrigeration:** Transferring heat from a cold reservoir to a hot reservoir.
*   **Thermodynamic Cycle:** A sequence of processes that returns a working fluid to its initial state.
*   **Reversible Process:** A process that can be reversed without leaving any trace on the surroundings.
*   **Isentropic Process:** A reversible adiabatic process where entropy remains constant.
*   **Isothermal Process:** A process occurring at constant temperature.
*   **Isenthalpic Process:** A process where enthalpy remains constant (e.g., throttling).
*   **Coefficient of Performance (COP):** Ratio of desired output to required input.
*   **Refrigeration Effect (Useful Output):** Heat absorbed from the cold reservoir.
*   **Work Input (Required Input):** Energy required to drive the cycle (e.g., compressor work).
*   **Superheated Vapor:** Vapor at a temperature higher than its saturation temperature at a given pressure.
*   **Saturated Vapor:** Vapor at the temperature where it can coexist with liquid.
*   **Saturated Liquid:** Liquid at the temperature where it can coexist with vapor.
*   **Throttling Process:** A rapid expansion process through a restriction, characterized by constant enthalpy.

---

### 6. Important Points to Remember

*   **Temperature Scales:** Always use absolute temperatures (Kelvin or Rankine) when calculating COP for the Carnot cycle.
*   **Ideal vs. Real Cycles:** Ideal cycles (like Carnot) represent the theoretical maximum performance. Real cycles (like VCRS) have lower performance due to irreversibilities.
*   **COP is a Measure of Efficiency:** Higher COP means more cooling effect for the same energy input.
*   **Enthalpy is Crucial for VCRS:** Refrigerant property tables are essential for calculating the COP of the ideal VCRS.
*   **Reversed Carnot Cycle COP:** $COP_R = \frac{T_L}{T_H - T_L}$
*   **Ideal VCRS COP:** $COP_R = \frac{h_1 - h_4}{h_2 - h_1}$
*   **Refrigerant State:** Understanding the state of the refrigerant (saturated vapor, superheated vapor, saturated liquid, liquid-vapor mixture) at each point in the cycle is vital.

---

### 7. Practice Questions and Exercises

**Question 1:**
A Carnot refrigerator operates between a low-temperature reservoir at $-10^\circ\text{C}$ and a high-temperature reservoir at $30^\circ\text{C}$. Calculate the COP of the refrigerator.

**Answer 1:**
*   $T_L = -10^\circ\text{C} = -10 + 273.15 = 263.15 \, \text{K}$
*   $T_H = 30^\circ\text{C} = 30 + 273.15 = 303.15 \, \text{K}$
*   $COP_R = \frac{T_L}{T_H - T_L} = \frac{263.15}{303.15 - 263.15} = \frac{263.15}{40} = 6.57875$

**Question 2:**
In an ideal vapor compression refrigeration cycle, the refrigerant enters the compressor as saturated vapor at $0.1 \, \text{MPa}$ and leaves as superheated vapor at $1.0 \, \text{MPa}$. Saturated liquid leaves the condenser at $1.0 \, \text{MPa}$, and the refrigerant enters the expansion valve at this state. The enthalpy values are:
*   $h_1$ (inlet to compressor) = $250 \, \text{kJ/kg}$
*   $h_2$ (outlet of compressor) = $290 \, \text{kJ/kg}$
*   $h_3$ (inlet to expansion valve) = $100 \, \text{kJ/kg}$
*   $h_4$ (inlet to compressor) = $h_3$ (after expansion) $= 100 \, \text{kJ/kg}$ (This is incorrect in the question, $h_4$ should be used for calculation after expansion)
Let's correct the state point:
*   $h_1$ (inlet to compressor, saturated vapor) = $250 \, \text{kJ/kg}$
*   $h_2$ (outlet of compressor, superheated vapor) = $290 \, \text{kJ/kg}$
*   $h_3$ (inlet to expansion valve, saturated liquid) = $100 \, \text{kJ/kg}$
*   $h_4$ (inlet to evaporator, liquid-vapor mixture) = $h_3 = 100 \, \text{kJ/kg}$ (since expansion is isenthalpic)

Calculate the COP of the ideal vapor compression refrigeration cycle.

**Answer 2:**
*   Refrigeration Effect ($Q_L$) = $h_1 - h_4 = 250 \, \text{kJ/kg} - 100 \, \text{kJ/kg} = 150 \, \text{kJ/kg}$
*   Work Input ($W_{in}$) = $h_2 - h_1 = 290 \, \text{kJ/kg} - 250 \, \text{kJ/kg} = 40 \, \text{kJ/kg}$
*   $COP_R = \frac{Q_L}{W_{in}} = \frac{150}{40} = 3.75$

**Question 3:**
Why is the COP of the ideal vapor compression cycle always lower than the COP of the reversed Carnot cycle operating between the same temperature limits?

**Answer 3:**
The ideal vapor compression cycle uses an isenthalpic expansion (throttling) process, which is irreversible and less efficient than the isentropic expansion of the Carnot cycle. Additionally, the heat rejection and absorption processes in the VCRS are isobaric, not isothermal, which also contributes to a lower COP compared to the theoretical maximum achieved by the Carnot cycle.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and References

*   **Arora, C.P. (2021).** *Refrigeration and Air Conditioning.* Tata McGraw hill. (Provides a strong foundation on thermodynamic cycles and their analysis).
*   **Ramesh Chandra Arora (2015).** *Refrigeration and Air Conditioning.* PHI. (Offers insights into various refrigeration principles and cycle variations).
*   **Arora, S. C., & Domkundwar, S. (2018).** *A Course in Refrigeration and Air Conditioning.* Dhanpat Rai and Company. (Covers fundamental concepts and practical aspects).
*   **Ahamadul Ameen (2020).** *Refrigeration and air conditioning.* Eastern economy edition. (Focuses on the practical implementation and working of systems).
*   **W P Jones (2001).** *Air Conditioning Engineering.* Spon Press. (Relevant for the broader context of air conditioning systems, where refrigeration is a key component).
*   **C P Kothandaraman (2023).** *Data book- Refrigeration tables and charts including air conditioning data.* New Age International. (Crucial for obtaining refrigerant properties needed for calculations).
*   **Stoecker & Jons (2nd ed.).** *Refrigeration & Air-conditioning.* McGraw Hill. (A classic text offering in-depth analysis).

---
This concludes the study notes for Ideal Refrigeration Cycles. Remember to practice calculations and understand the underlying thermodynamic principles for a strong grasp of the subject.