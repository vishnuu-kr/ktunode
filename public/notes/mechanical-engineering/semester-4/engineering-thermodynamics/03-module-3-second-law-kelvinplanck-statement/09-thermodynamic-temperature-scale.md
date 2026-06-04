---
title: "thermodynamic temperature scale"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f60"
status: "completed"
scrapedAt: "2026-05-20T17:53:40.126Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement

## Topic: Thermodynamic Temperature Scale

---

### **1. Introduction to Thermodynamic Temperature Scale (K1, K2)**

The thermodynamic temperature scale is a scale that is independent of the properties of any particular thermometric substance. It is based on the fundamental principles of the Second Law of Thermodynamics, specifically the Carnot cycle. This scale provides an absolute measure of temperature, meaning that its zero point is absolute zero, the lowest possible temperature.

*   **Why a Thermodynamic Scale?**
    *   Traditional temperature scales (like Celsius and Fahrenheit) are based on the properties of specific substances (e.g., water's freezing and boiling points). These properties can vary slightly depending on pressure and purity.
    *   A thermodynamic temperature scale provides a universal and absolute reference, independent of any material's behavior.

*   **Key Concept: Absolute Zero**
    *   Absolute zero (0 Kelvin or -273.15 °C) is the theoretical temperature at which all molecular motion ceases. It is an unattainable lower limit for temperature.

---

### **2. Kelvin-Planck Statement and its Relation to Temperature (K2)**

The Kelvin-Planck statement of the Second Law of Thermodynamics directly leads to the definition of the thermodynamic temperature scale.

*   **Kelvin-Planck Statement:** "It is impossible to construct a device that operates in a thermodynamic cycle and produces no effect other than the transfer of heat from a colder body to a hotter body." (Cengel & Boles, 2011)
    *   This statement essentially states that no heat engine can be 100% efficient. Some heat must always be rejected to a colder reservoir.

*   **Carnot Cycle and Efficiency:**
    *   The Carnot cycle is a theoretical thermodynamic cycle composed of four reversible processes: two isothermal processes and two adiabatic processes.
    *   It represents the most efficient possible cycle for converting heat into work between two temperature reservoirs.
    *   The efficiency of a Carnot engine is given by:
        $$ \eta_{\text{Carnot}} = 1 - \frac{T_L}{T_H} $$
        Where:
        *   $T_L$ is the absolute temperature of the cold reservoir.
        *   $T_H$ is the absolute temperature of the hot reservoir.

*   **Defining the Thermodynamic Temperature Scale:**
    *   The Carnot efficiency is independent of the working fluid. This crucial observation allows us to define temperature based on the *ratio* of heat transfers in a reversible cycle.
    *   If we define the temperature of one reservoir (e.g., the triple point of water at 273.16 K), we can determine the temperature of another reservoir by measuring the heat transferred to and from it during a reversible cycle.
    *   The thermodynamic temperature scale is often referred to as the **Kelvin scale**.

---

### **3. The Kelvin Scale (K2, K3)**

The Kelvin scale is the SI unit of thermodynamic temperature. It is an absolute scale where zero Kelvin represents absolute zero.

*   **Definition of the Kelvin Unit:**
    *   The Kelvin is defined by setting the triple point of water at exactly 273.16 K. (Cengel & Boles, 2011)
    *   The triple point of water is the temperature and pressure at which water can exist in equilibrium as a solid, liquid, and gas.

*   **Relationship to Other Scales:**
    *   **Celsius (°C):** The Celsius scale is related to the Kelvin scale by:
        $$ T(\text{K}) = T(^\circ\text{C}) + 273.15 $$
    *   **Fahrenheit (°F):** While not directly derived from the thermodynamic scale, it can be converted via Celsius:
        $$ T(^\circ\text{F}) = \frac{9}{5} T(^\circ\text{C}) + 32 $$
        $$ T(^\circ\text{F}) = \frac{9}{5} (T(\text{K}) - 273.15) + 32 $$

*   **Key Point:** When using the Carnot efficiency formula or any thermodynamic temperature relation, **always use absolute temperatures (Kelvin or Rankine)**.

---

### **4. Establishing Temperature Values on the Thermodynamic Scale (K3)**

The definition of the Kelvin scale allows for the establishment of any temperature by using a reversible heat engine (like a Carnot engine) as a thermometer.

*   **Methodology:**
    1.  **Choose a fixed point:** The triple point of water (273.16 K) is the fundamental fixed point.
    2.  **Construct a reversible engine:** A Carnot engine is the ideal choice.
    3.  **Operate the engine between the fixed point reservoir and an unknown temperature reservoir:** Let the fixed point reservoir be at $T_0$ and the unknown temperature reservoir be at $T$.
    4.  **Measure heat transfers:** Measure the heat absorbed from the hot reservoir ($Q_H$) and the heat rejected to the cold reservoir ($Q_L$) during a cycle.
    5.  **Calculate the unknown temperature:** Using the Carnot efficiency relationship:
        $$ \frac{Q_L}{Q_H} = \frac{T_L}{T_H} $$
        If the engine operates between $T$ and $T_0$, and $T_H = T$ and $T_L = T_0$:
        $$ \frac{Q_L}{Q_H} = \frac{T_0}{T} \implies T = T_0 \frac{Q_H}{Q_L} $$
        (Note: Conventionally, $Q_H$ is heat absorbed by the engine from the hot reservoir, and $Q_L$ is heat rejected to the cold reservoir. The formula can be rearranged depending on which heat transfer is measured).
    *   More precisely, if the engine absorbs heat $Q_1$ at temperature $T_1$ and rejects heat $Q_2$ at temperature $T_2$, then:
        $$ \frac{T_1}{T_2} = \frac{Q_1}{Q_2} \quad \text{(for reversible cycles)} $$
        If $T_2$ is the triple point of water ($T_{tp} = 273.16$ K) and $Q_2$ is the heat rejected to it, and $T_1$ is the unknown temperature $T$ and $Q_1$ is the heat absorbed from it:
        $$ \frac{T}{T_{tp}} = \frac{Q_1}{Q_2} \implies T = T_{tp} \frac{Q_1}{Q_2} $$

*   **Practical Thermometers:** Real thermometers are calibrated against known fixed points. While the thermodynamic scale is fundamental, practical scales like Celsius are derived from it for convenience.

---

### **5. Importance and Applications (K1, K2)**

The thermodynamic temperature scale is fundamental to many areas of science and engineering.

*   **Second Law Analysis:** It is essential for analyzing the efficiency of heat engines, refrigerators, and heat pumps.
*   **Thermodynamic Property Relations:** Many thermodynamic properties (like entropy) are defined based on temperature on an absolute scale.
*   **Statistical Mechanics:** It connects macroscopic thermodynamic properties to microscopic molecular behavior.
*   **Defining Absolute Zero:** It provides the theoretical lower limit of temperature.
*   **Ideal Gas Law:** The ideal gas law ($PV = nRT$) relies on absolute temperature.

---

### **6. Important Points to Remember**

*   **Absolute Scale:** The thermodynamic temperature scale is absolute; its zero point is absolute zero.
*   **Kelvin is the SI unit.**
*   **Carnot Efficiency:** The Carnot efficiency is directly proportional to absolute temperatures.
*   **Reversibility:** The relationships are based on reversible cycles (like the Carnot cycle).
*   **No Substance Dependence:** This scale is independent of the properties of any specific thermometric substance.
*   **Triple Point of Water:** The fundamental fixed point for defining the Kelvin scale is 273.16 K.
*   **Always use absolute temperatures (K or R) in thermodynamic calculations involving temperature ratios or absolute temperatures.**

---

### **7. Examples**

**Example 1: Carnot Engine Efficiency**

A Carnot engine operates between a heat reservoir at 800 K and a heat reservoir at 300 K. What is its efficiency?

*   **Given:**
    *   $T_H = 800$ K
    *   $T_L = 300$ K
*   **Formula:** $\eta_{\text{Carnot}} = 1 - \frac{T_L}{T_H}$
*   **Calculation:**
    $$ \eta_{\text{Carnot}} = 1 - \frac{300 \text{ K}}{800 \text{ K}} = 1 - 0.375 = 0.625 $$
*   **Answer:** The efficiency of the Carnot engine is 62.5%.

**Example 2: Determining Unknown Temperature**

A reversible heat engine absorbs 1500 kJ of heat from a reservoir at temperature $T$ and rejects 750 kJ of heat to a reservoir at the triple point of water (273.16 K). Determine the temperature $T$.

*   **Given:**
    *   $Q_H = 1500$ kJ (heat absorbed from reservoir at $T$)
    *   $Q_L = 750$ kJ (heat rejected to reservoir at $T_{tp}$)
    *   $T_{tp} = 273.16$ K
*   **Formula:** For a reversible cycle, $\frac{T_H}{T_L} = \frac{Q_H}{Q_L}$. Here, $T_H = T$ and $T_L = T_{tp}$.
*   **Calculation:**
    $$ \frac{T}{273.16 \text{ K}} = \frac{1500 \text{ kJ}}{750 \text{ kJ}} $$
    $$ \frac{T}{273.16 \text{ K}} = 2 $$
    $$ T = 2 \times 273.16 \text{ K} = 546.32 \text{ K} $$
*   **Answer:** The temperature of the hot reservoir is 546.32 K.

---

### **8. Practice Questions and Exercises**

**Question 1:** (CO1, CO2)
What is the fundamental advantage of the thermodynamic temperature scale over empirical scales like Celsius?

**Question 2:** (CO2, K2)
State the Kelvin-Planck statement of the Second Law of Thermodynamics and explain how it relates to the definition of thermodynamic temperature.

**Question 3:** (CO2, K3)
A Carnot refrigerator operates between two thermal reservoirs. If the hot reservoir is at 350 K and the cold reservoir is at 270 K, calculate the coefficient of performance (COP) of the refrigerator.
(Hint: $COP_{R} = \frac{T_L}{T_H - T_L}$ for a Carnot refrigerator)

**Question 4:** (CO1, K3)
Convert a temperature of 50 °C to Kelvin and Rankine scales. (Assume Rankine is approximately $1.8 \times$ Kelvin).

**Question 5:** (CO2, K3)
A hypothetical reversible engine operates between a reservoir at $T_1$ and a reservoir at the triple point of water ($T_{tp} = 273.16$ K). It absorbs 1200 kJ of heat from the reservoir at $T_1$ and rejects 400 kJ of heat to the reservoir at $T_{tp}$. What is the temperature $T_1$?

---

### **9. Answers to Practice Questions**

**Answer 1:**
The thermodynamic temperature scale is absolute and independent of the properties of any specific thermometric substance, unlike empirical scales (e.g., Celsius, Fahrenheit) which are based on the properties of substances like water. This makes it a universal standard for temperature.

**Answer 2:**
The Kelvin-Planck statement says: "It is impossible to construct a device that operates in a thermodynamic cycle and produces no effect other than the transfer of heat from a colder body to a hotter body." This implies that to move heat from a cold to a hot reservoir (as in a refrigerator), work must be done. For heat engines, it means not all heat absorbed can be converted to work; some must be rejected. The efficiency of a reversible engine (Carnot engine) is solely a function of the absolute temperatures of the reservoirs: $\eta_{\text{Carnot}} = 1 - T_L/T_H$. This relationship allows temperature to be defined based on ratios of heat transfers in reversible cycles, establishing the thermodynamic temperature scale.

**Answer 3:**
*   $T_H = 350$ K
*   $T_L = 270$ K
*   $COP_R = \frac{T_L}{T_H - T_L} = \frac{270 \text{ K}}{350 \text{ K} - 270 \text{ K}} = \frac{270 \text{ K}}{80 \text{ K}} = 3.375$

**Answer 4:**
*   **Kelvin:** $T(\text{K}) = T(^\circ\text{C}) + 273.15 = 50 + 273.15 = 323.15$ K
*   **Rankine:** $T(\text{R}) \approx 1.8 \times T(\text{K}) = 1.8 \times 323.15 \approx 581.67$ R

**Answer 5:**
*   $T_1 = ?$
*   $T_{tp} = 273.16$ K
*   $Q_1 = 1200$ kJ (heat absorbed from $T_1$)
*   $Q_{tp} = 400$ kJ (heat rejected to $T_{tp}$)
*   For a reversible engine: $\frac{T_1}{T_{tp}} = \frac{Q_1}{Q_{tp}}$
*   $\frac{T_1}{273.16 \text{ K}} = \frac{1200 \text{ kJ}}{400 \text{ kJ}} = 3$
*   $T_1 = 3 \times 273.16 \text{ K} = 819.48$ K

---
This concludes the study notes for the Thermodynamic Temperature Scale topic. Ensure to cross-reference these notes with your textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
