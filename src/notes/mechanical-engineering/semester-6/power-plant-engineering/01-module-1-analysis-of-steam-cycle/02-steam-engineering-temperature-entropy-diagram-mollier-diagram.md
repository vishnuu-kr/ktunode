---
title: "Steam engineering-temperature entropy diagram- mollier diagram-"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463778"
status: "completed"
scrapedAt: "2026-05-20T18:06:19.403Z"
---
# Power Plant Engineering: Module 1: Analysis of Steam Cycle

## Topic: Steam Engineering - Temperature-Entropy Diagram & Mollier Diagram

This module delves into the fundamental thermodynamic cycles that underpin thermal power generation, with a focus on the steam power cycle. Understanding these cycles is crucial for analyzing and improving the efficiency of power plants.

### 1. Introduction to Steam Engineering

Steam power plants are the backbone of electricity generation worldwide. They utilize the thermal energy of steam to drive turbines, which in turn generate electricity. Steam engineering involves the study of the properties of steam and its behavior in various thermodynamic processes within a power plant.

**Key Concepts:**

*   **Thermodynamics:** The study of energy and its transformations.
*   **Steam:** Water in its gaseous phase.
*   **Cycle:** A series of thermodynamic processes that return a working fluid to its initial state.
*   **Working Fluid:** The substance that absorbs and rejects heat in a thermodynamic cycle (in this case, water/steam).

### 2. The Carnot Cycle (Ideal Steam Cycle)

While not practically implemented in steam power plants due to engineering limitations, the Carnot cycle serves as the theoretical benchmark for maximum possible efficiency between two temperature reservoirs. It consists of four reversible processes:

1.  **Isothermal Expansion:** Heat is absorbed at the high temperature ($T_H$) from a reservoir.
2.  **Adiabatic Expansion:** The working fluid expands, doing work, without heat exchange.
3.  **Isothermal Compression:** Heat is rejected at the low temperature ($T_L$) to a reservoir.
4.  **Adiabatic Compression:** The working fluid is compressed, requiring work, without heat exchange.

**Efficiency of Carnot Cycle:**
$\eta_{Carnot} = 1 - \frac{T_L}{T_H}$ (where temperatures are in absolute units like Kelvin)

**Relevance to Steam Power Plants:** The Carnot cycle highlights the importance of maximizing the temperature difference between the heat source and heat sink for higher efficiency. However, practical limitations like the inability to achieve perfect isothermal processes and the difficulty of handling wet steam at low temperatures prevent its direct application.

### 3. The Rankine Cycle (Practical Steam Cycle)

The Rankine cycle is the idealized thermodynamic cycle for a basic steam power plant. It overcomes some of the practical limitations of the Carnot cycle by modifying the processes.

**Processes of the Ideal Rankine Cycle:**

1.  **Isentropic Compression (Pumping):** Liquid water is pumped from the condenser pressure ($P_2$) to the boiler pressure ($P_1$). This is an isentropic process (constant entropy), approximated by a pump.
    *   *State changes:* 1 -> 2 (Liquid)
2.  **Isobaric Heat Addition (Boiling):** Water is heated at constant pressure ($P_1$) in the boiler, turning into saturated vapor and then superheated steam.
    *   *State changes:* 2 -> 3 (Liquid -> Saturated Vapor -> Superheated Vapor)
3.  **Isentropic Expansion (Turbine):** Superheated steam expands in a turbine, doing work and producing electricity. This is an isentropic process (constant entropy).
    *   *State changes:* 3 -> 4 (Superheated Vapor -> Wet Steam)
4.  **Isobaric Heat Rejection (Condensing):** Steam is condensed at constant pressure ($P_2$) in the condenser, rejecting heat to a cooling medium.
    *   *State changes:* 4 -> 1 (Wet Steam -> Saturated Liquid)

**Net Work Done:** $W_{net} = W_{turbine} - W_{pump}$
**Net Heat Supplied:** $Q_{in} = Q_{boiler}$
**Heat Rejected:** $Q_{out} = Q_{condenser}$
**Thermal Efficiency:** $\eta_{Rankine} = \frac{W_{net}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$

**CO2 Alignment:** This section directly addresses **CO2: Calculate the performance parameters of simple and modified Rankine cycles**. Understanding the ideal Rankine cycle is the prerequisite for this.

**Textbook References:**
*   **M. M. El Wakil, "Power Plant Technology":** Discusses the fundamental thermodynamics of steam cycles, including the Rankine cycle and its components.
*   **P. K. Nag, "Power Plant Engineering":** Provides a detailed analysis of the Rankine cycle, its variations, and efficiency calculations.

---

### 4. Temperature-Entropy (T-s) Diagram

The T-s diagram is a powerful tool for visualizing and analyzing thermodynamic processes.

*   **Axes:**
    *   **Temperature (T):** Vertical axis (absolute temperature, Kelvin or Rankine).
    *   **Entropy (s):** Horizontal axis.
*   **Key Features:**
    *   **Area under a curve:** Represents the heat transferred during that process.
    *   **Isentropic Process:** A vertical line (constant entropy).
    *   **Isothermal Process:** A horizontal line (constant temperature).
    *   **Isobaric Process:** A curve.
    *   **Isochoric (Isometric) Process:** A curve.
    *   **Saturation Dome:** A bell-shaped curve enclosing the region where water and steam coexist (wet steam region).
        *   **Saturated Liquid Line:** Left boundary of the dome.
        *   **Saturated Vapor Line:** Right boundary of the dome.
        *   **Critical Point:** The highest point of the dome.
    *   **Constant Pressure Lines:** Appear as upward sloping curves, becoming horizontal in the two-phase region.
    *   **Constant Specific Volume Lines:** Appear as curves.

**Analyzing the Rankine Cycle on a T-s Diagram:**

*   **1-2 (Isentropic Compression):** Vertical line in the subcooled liquid region. Work done by the pump is relatively small and often neglected in simplified analyses.
*   **2-3 (Isobaric Heat Addition):** Horizontal line in the saturated liquid region, followed by a curve up to the saturated vapor line, and then a curve in the superheated region. The area under this curve represents $Q_{in}$.
*   **3-4 (Isentropic Expansion):** Vertical line from the superheated region down into the wet steam region. The area under this curve represents the work done by the turbine.
*   **4-1 (Isobaric Heat Rejection):** Horizontal line in the two-phase region where steam condenses to saturated liquid. The area under this curve represents $Q_{out}$.

**CO2 Alignment:** This section is fundamental to **CO2: Calculate the performance parameters of simple and modified Rankine cycles** by providing a visual and analytical framework.

**Learning Outcome Alignment:** Supports the understanding of steam cycles for **CO1: Explain the layout, components and working of steam...power plants**.

**Important Point to Remember:** The T-s diagram visually represents heat transfer as areas.

---

### 5. Mollier Diagram (Enthalpy-Entropy Diagram)

The Mollier diagram (also known as the h-s diagram) is specifically designed for steam power plant analysis and is particularly useful for turbine expansion processes.

*   **Axes:**
    *   **Enthalpy (h):** Vertical axis (kJ/kg).
    *   **Entropy (s):** Horizontal axis.
*   **Key Features:**
    *   **Isentropic Process:** A vertical line. This is very convenient for turbine analysis.
    *   **Constant Pressure Lines:** Curved lines that generally slope upwards and to the right.
    *   **Constant Temperature Lines:** Curved lines that slope downwards and to the right.
    *   **Constant Quality Lines (Dryness Fraction Lines):** Lines in the wet steam region, representing the fraction of vapor in a mixture of water and steam.

**Analyzing the Rankine Cycle on a Mollier Diagram:**

*   **1-2 (Isentropic Compression):** A vertical line representing the work done by the pump. The change in enthalpy ($\Delta h_{pump}$) represents the pump work.
*   **2-3 (Isobaric Heat Addition):** Process from saturated liquid to superheated steam at constant pressure. The change in enthalpy ($\Delta h_{boiler} = h_3 - h_2$) represents the heat added in the boiler.
*   **3-4 (Isentropic Expansion):** A vertical line from the turbine inlet conditions (superheated steam, state 3) to the condenser pressure (state 4). The vertical distance between states 3 and 4 directly gives the specific work done by the turbine ($w_{turbine} = h_3 - h_4$). This is the primary advantage of the Mollier diagram.
*   **4-1 (Isobaric Heat Rejection):** Process from the turbine exhaust pressure to the saturated liquid state at condenser pressure. The change in enthalpy ($\Delta h_{condenser} = h_4 - h_1$) represents the heat rejected in the condenser.

**Relationship between T-s and Mollier Diagrams:**

Both diagrams are useful for analyzing the Rankine cycle.
*   The T-s diagram emphasizes **heat transfer** as areas.
*   The Mollier diagram emphasizes **work done by the turbine** as vertical distances (changes in enthalpy) during isentropic expansion.

**CO2 Alignment:** Crucial for **CO2: Calculate the performance parameters of steam turbines**. The Mollier diagram directly provides the enthalpy drop across a turbine for an isentropic expansion. It also supports **CO2: Calculate the performance parameters of simple and modified Rankine cycles**.

**Learning Outcome Alignment:** Supports the understanding of steam cycles for **CO1: Explain the layout, components and working of steam...power plants**.

**Example (Mollier Diagram):**
Consider steam entering a turbine at 40 bar pressure and 400°C and expanding isentropically to 0.1 bar pressure. Using a Mollier diagram, locate the point corresponding to 40 bar and 400°C. Then, draw a vertical line downwards until it intersects the 0.1 bar pressure line. The difference in enthalpy between these two points ($h_3 - h_4$) gives the turbine work per kg of steam.

**Important Points to Remember:**
*   The Mollier diagram is ideal for turbine expansion calculations.
*   Vertical lines on a Mollier diagram represent isentropic processes.
*   The enthalpy drop in an isentropic expansion directly represents the specific work output of a turbine.

---

### 6. Modified Rankine Cycles and their Representation on T-s and Mollier Diagrams

To improve the efficiency of the basic Rankine cycle, several modifications are employed:

#### a) Reheating

**Description:** After partial expansion in the high-pressure (HP) turbine, the steam is sent back to the boiler for reheating to a higher temperature before entering the low-pressure (LP) turbine for further expansion.

**Benefits:**
*   Increases the average temperature at which heat is supplied, improving efficiency.
*   Reduces the moisture content in the steam at the turbine exhaust, preventing damage to the turbine blades.

**On T-s Diagram:**
*   The expansion line (3-4) is now split into two parts: 3-4' (HP turbine) and 4'-4'' (LP turbine).
*   Between 4' and 4'', there's an isobaric heat addition process (reheating).
*   The overall average temperature of heat addition increases.

**On Mollier Diagram:**
*   The expansion line is split: 3-4' (isentropic expansion in HP turbine), then 4'-4'' (isentropic expansion in LP turbine).
*   The total enthalpy drop ($h_3 - h_4''$) is the same as or slightly larger than the basic Rankine cycle, but the process is split and often leads to higher overall work output due to reduced moisture.

#### b) Regenerative Feedwater Heating

**Description:** A portion of the steam is bled from the turbine at various stages and used to preheat the feedwater leaving the pump before it enters the boiler.

**Benefits:**
*   Increases the average temperature of heat addition.
*   Reduces the amount of heat that needs to be supplied in the boiler by preheating the feedwater.
*   Improves cycle efficiency.

**On T-s Diagram:**
*   The feed pump process (1-2) is followed by a series of heating processes at different pressures.
*   The heat addition in the boiler (2-3) starts from a higher initial temperature (preheated feedwater).
*   The heat rejection in the condenser (4-1) starts from a lower initial temperature.

**On Mollier Diagram:**
*   The expansion line (3-4) shows steam extraction points.
*   The enthalpy of the feedwater increases in stages before entering the boiler.

**CO2 Alignment:** Both reheating and regenerative feedwater heating are modifications addressed by **CO2: Calculate the performance parameters of simple and modified Rankine cycles**.

**Textbook References:**
*   **P. K. Nag, "Power Plant Engineering":** Provides detailed explanations and performance calculations for reheating and regenerative cycles.
*   **M. M. El Wakil, "Power Plant Technology":** Discusses the principles and thermodynamic advantages of these modifications.

---

### 7. Steam Turbines and Nozzles (Introduction and Relevance)

**Steam Turbine:** A rotary mechanical device that extracts thermal energy from pressurized steam and converts it into useful mechanical work. This mechanical work is then used to drive an electric generator.

*   **Working Principle:** Steam expands through a series of stationary nozzles and moving blades. The high-velocity steam jet from the nozzles impinges on the blades, causing them to rotate.
*   **Energy Conversion:** Thermal energy of steam -> Kinetic energy of steam -> Mechanical energy of rotor.

**Steam Nozzles:** Devices that convert the thermal and pressure energy of steam into kinetic energy by accelerating the steam flow.

*   **Working Principle:** Steam expands through a converging-diverging duct. The expansion causes a drop in pressure and temperature, and a corresponding increase in velocity.
*   **Types:** Convergent, Divergent, Convergent-Divergent (for supersonic flow).

**CO3 Alignment:** This topic directly relates to **CO3: Calculate the performance parameters of steam turbines and steam nozzles**. While detailed calculations are in later modules, understanding the role of isentropic expansion (on Mollier diagrams) and the energy conversion process is foundational.

---

### 8. Practice Questions and Answers

**Question 1:**
Which thermodynamic diagram is most convenient for determining the specific work output of a steam turbine during an isentropic expansion?
a) Temperature-Entropy (T-s) Diagram
b) Enthalpy-Entropy (h-s) Diagram (Mollier Diagram)
c) Pressure-Volume (P-v) Diagram
d) Pressure-Enthalpy (P-h) Diagram

**Answer 1:**
b) Enthalpy-Entropy (h-s) Diagram (Mollier Diagram)
**Reasoning:** The Mollier diagram plots enthalpy against entropy. An isentropic process is represented by a vertical line. The vertical distance between two points on an isentropic line directly represents the change in enthalpy, which for a turbine is the specific work output.

**Question 2:**
In the T-s diagram of a Rankine cycle, what does the area under the heat addition process represent?
a) Turbine work
b) Pump work
c) Heat supplied to the cycle
d) Heat rejected from the cycle

**Answer 2:**
c) Heat supplied to the cycle
**Reasoning:** On a T-s diagram, the area under a process curve represents the heat transferred during that process. The heat addition occurs in the boiler, so the area under the boiler process represents the heat supplied ($Q_{in}$).

**Question 3:**
Reheating in a steam power cycle primarily aims to:
a) Increase the dryness fraction of steam at the condenser.
b) Decrease the heat rejected in the condenser.
c) Increase the work output of the turbine and improve efficiency.
d) Reduce the pressure drop in the boiler.

**Answer 3:**
c) Increase the work output of the turbine and improve efficiency.
**Reasoning:** Reheating increases the average temperature of heat addition, which improves efficiency. It also reduces the moisture content in the steam at the turbine exhaust, leading to higher turbine work output and preventing blade erosion.

**Question 4:**
Calculate the thermal efficiency of a Carnot cycle operating between $500^\circ C$ and $50^\circ C$.

**Solution 4:**
First, convert temperatures to absolute scale (Kelvin):
$T_H = 500^\circ C + 273.15 = 773.15 K$
$T_L = 50^\circ C + 273.15 = 323.15 K$

Efficiency, $\eta_{Carnot} = 1 - \frac{T_L}{T_H}$
$\eta_{Carnot} = 1 - \frac{323.15 K}{773.15 K}$
$\eta_{Carnot} = 1 - 0.4180$
$\eta_{Carnot} = 0.5820$ or 58.2%

**Question 5:**
Explain the primary difference between the T-s diagram and the Mollier diagram in terms of what they directly represent for turbine expansion.

**Answer 5:**
The primary difference is how they represent turbine expansion:
*   **T-s Diagram:** Turbine expansion is an isentropic process (vertical line). The **area under the expansion curve down to the absolute zero temperature axis** represents the work done by the turbine. This area can be complex to calculate directly.
*   **Mollier Diagram:** Turbine expansion is also an isentropic process (vertical line). The **vertical distance (change in enthalpy)** between the inlet and outlet states on the Mollier diagram directly represents the specific work output of the turbine. This is a significant advantage for turbine performance analysis.

---

### 9. Important Points to Remember

*   **Thermodynamic Cycles:** The Carnot cycle is the theoretical maximum efficiency cycle, while the Rankine cycle is the practical basis for steam power plants.
*   **T-s Diagram:** Visually represents heat transfer as areas and simplifies the understanding of different thermodynamic processes.
*   **Mollier Diagram:** Specifically useful for steam power plants, directly representing turbine work as enthalpy drop during isentropic expansion.
*   **Efficiency Improvements:** Reheating and regenerative feedwater heating are key modifications to the Rankine cycle to improve overall thermal efficiency.
*   **Turbine Work:** The core function of a steam turbine is to convert steam's enthalpy into rotational mechanical work.

---

### 10. Conclusion

Understanding the T-s and Mollier diagrams is fundamental for analyzing the performance of steam power cycles and their components, particularly steam turbines. These diagrams provide a graphical representation of the thermodynamic processes involved, allowing engineers to visualize energy transformations and calculate key performance parameters. Modifications like reheating and regeneration are crucial for enhancing the efficiency of practical steam power plants, moving closer to the theoretical maximum efficiency allowed by the laws of thermodynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
