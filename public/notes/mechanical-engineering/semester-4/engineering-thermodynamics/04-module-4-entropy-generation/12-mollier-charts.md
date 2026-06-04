---
title: "Mollier charts"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f75"
status: "completed"
scrapedAt: "2026-05-20T17:53:54.226Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Mollier Charts

### Introduction to Mollier Charts

Mollier charts are graphical representations of thermodynamic properties, primarily used for analyzing processes involving pure substances, particularly in steam power cycles and refrigeration cycles. They are a valuable tool for visualizing and calculating energy transfers, especially enthalpy changes, during various thermodynamic processes.

**Key Concept:** A Mollier chart is essentially an **enthalpy-entropy (h-s)** diagram.

**Reference:**
*   **Cengel & Boles:** Often refer to Mollier charts as h-s diagrams and highlight their utility in analyzing vapor power cycles and refrigeration cycles. (Chapter 9, "Thermodynamic Cycles," and Chapter 11, "Vapor and Gas Power Cycles").
*   **P.K. Nag:** Provides detailed explanations and examples of using Mollier charts for steam. (Chapter 7, "Thermodynamic Relations," and Chapter 9, "Power Cycles").

### Understanding the Mollier Chart (h-s Diagram)

A Mollier chart plots enthalpy (h) on the vertical axis against entropy (s) on the horizontal axis. Several other thermodynamic properties are represented by lines or regions on the chart.

**1. Axes:**
    *   **Vertical Axis:** Enthalpy ($h$) - Typically in kJ/kg. Represents the total energy content of the substance.
    *   **Horizontal Axis:** Entropy ($s$) - Typically in kJ/kg·K. Represents the degree of disorder or randomness.

**2. Lines of Constant Property:**
    *   **Isothermal lines (Constant Temperature, T):** These lines generally curve downwards from left to right. In the superheated region, they are more horizontal. In the two-phase region, they are horizontal.
    *   **Isobaric lines (Constant Pressure, P):** These lines curve downwards from left to right, with higher pressure lines generally being steeper. In the two-phase region, they are horizontal.
    *   **Isentropic lines (Constant Entropy, s):** These are vertical lines on the h-s diagram. They represent ideal, reversible adiabatic processes.
    *   **Isochoric lines (Constant Specific Volume, v):** These lines curve downwards from left to right, becoming steeper at higher pressures.
    *   **Saturated Liquid Line:** Represents the state of saturated liquid.
    *   **Saturated Vapor Line:** Represents the state of saturated vapor.
    *   **Saturation Dome:** The region enclosed by the saturated liquid and saturated vapor lines, representing the two-phase mixture (liquid-vapor). Within the dome, temperature and pressure are constant for a given saturation curve.

**Important Point to Remember:** The slope of an isobaric line on an h-s diagram is given by $T$. This is evident from the relationship $dh = Tds + vdP$. For a constant pressure process ($dP=0$), $dh = Tds$, so $(dh/ds)_P = T$.

### Using the Mollier Chart for Thermodynamic Analysis

Mollier charts are primarily used to:
*   Determine the enthalpy change ($\Delta h$) during a process.
*   Determine other thermodynamic properties at different states.
*   Visualize and analyze the efficiency of thermodynamic cycles.

**Key Concept:** On an h-s diagram, the heat transfer ($q$) during a process from state 1 to state 2 is represented by the area under the process curve if the process is reversible and the curve is plotted against entropy. For an isobaric process, $q = h_2 - h_1$. For a process with varying pressure, the area under the curve on an h-s diagram represents $h_2 - h_1$ only if it's an isentropic process. However, the *vertical distance* between two points on the Mollier chart directly gives the enthalpy difference ($\Delta h$).

**CO4 Alignment:** Determine entropy changes associated with different processes (via locating points on the chart).
**CO5 Alignment:** Determine the properties of pure substances (by reading values from the chart).

#### Example 1: Determining Enthalpy Change in a Turbine

Consider steam entering a turbine at a high pressure and temperature and exiting at a lower pressure. We want to find the work output of the turbine per unit mass.

**Assumptions:**
*   The turbine process is often approximated as an isentropic (reversible adiabatic) process.

**Steps:**
1.  **Locate State 1:** Find the intersection of the initial pressure ($P_1$) and initial temperature ($T_1$) lines on the Mollier chart. This gives the initial enthalpy ($h_1$) and entropy ($s_1$).
2.  **Locate State 2:** Since the process is assumed isentropic, move vertically upwards (constant entropy) from state 1 until you intersect the exit pressure line ($P_2$). This is state 2.
3.  **Determine State 2 Properties:** Read the enthalpy ($h_2$) at state 2 from the vertical axis.
4.  **Calculate Turbine Work:** The work output of the turbine per unit mass is the enthalpy drop: $w_{out} = h_1 - h_2$.

**Reference:**
*   **P.K. Nag:** Chapter 9 provides detailed examples of using Mollier charts for turbine and compressor analysis.

#### Example 2: Analyzing a Refrigeration Cycle

Consider the compressor and condenser in a refrigeration cycle.

**Steps:**
1.  **Compressor Inlet (State 1):** Locate the state of the refrigerant entering the compressor (usually saturated vapor at the evaporator pressure). Read $h_1$ and $s_1$.
2.  **Compressor Outlet (State 2):** Assume the compressor is isentropic. Move vertically from state 1 to the condenser pressure line. Read $h_2$. The compressor work is $w_{in} = h_2 - h_1$.
3.  **Condenser Outlet (State 3):** Locate the state of the refrigerant leaving the condenser. This is typically saturated liquid at the condenser pressure. Read $h_3$. The heat rejected in the condenser is $q_{out} = h_2 - h_3$.

**Important Point to Remember:** For isentropic processes, the process path on the Mollier chart is a straight vertical line.

### Practice Questions and Exercises

**Question 1:** (CO5, K3)
Steam at 3 MPa and 400°C enters a turbine. The steam leaves the turbine at 50 kPa. Assuming the turbine process is isentropic, determine the work output of the turbine per unit mass of steam. Use a Mollier chart for steam.

**Answer 1:**
1.  **State 1:** On the Mollier chart, find the intersection of $P_1 = 3$ MPa and $T_1 = 400°C$. Read $h_1 \approx 3231$ kJ/kg and $s_1 \approx 6.924$ kJ/kg·K.
2.  **State 2:** Move vertically upwards from state 1 (constant $s = 6.924$ kJ/kg·K) to the pressure line $P_2 = 50$ kPa.
3.  **State 2 Properties:** Read $h_2 \approx 2305$ kJ/kg.
4.  **Work Output:** $w_{out} = h_1 - h_2 = 3231 - 2305 = 926$ kJ/kg.

**Question 2:** (CO4, CO5, K3)
Refrigerant-134a enters the compressor of a refrigerator at $-10°C$ and saturated vapor. It is compressed to 0.8 MPa. Assuming the compression process is isentropic, determine the specific work input to the compressor and the specific heat rejected in the condenser if the refrigerant leaves the condenser as a saturated liquid at 0.8 MPa. Use the Mollier chart for R-134a.

**Answer 2:**
1.  **State 1 (Compressor Inlet):** At $-10°C$, saturated vapor R-134a has $P_{sat} \approx 0.29$ MPa (read from a pressure-temperature table or chart if a Mollier chart is not readily available for R-134a at this exact point). Assume $P_1 \approx 0.29$ MPa. Read $h_1 \approx 247.3$ kJ/kg and $s_1 \approx 0.921$ kJ/kg.
2.  **State 2 (Compressor Outlet):** Move vertically from state 1 (constant $s = 0.921$ kJ/kg) to $P_2 = 0.8$ MPa. Read $h_2 \approx 277.0$ kJ/kg.
3.  **Specific Work Input:** $w_{in} = h_2 - h_1 = 277.0 - 247.3 = 29.7$ kJ/kg.
4.  **State 3 (Condenser Outlet):** At $P_3 = 0.8$ MPa, saturated liquid R-134a has $h_3 \approx 94.2$ kJ/kg (read from the saturated liquid line at 0.8 MPa).
5.  **Specific Heat Rejected:** $q_{out} = h_2 - h_3 = 277.0 - 94.2 = 182.8$ kJ/kg.

**Question 3:** (CO5, K2)
What are the primary thermodynamic properties plotted on a Mollier chart?

**Answer 3:**
Enthalpy (h) on the vertical axis and Entropy (s) on the horizontal axis.

### Importance of Mollier Charts

*   **Visual Aid:** Provide a clear graphical representation of the thermodynamic states and processes.
*   **Efficient Calculation:** Allow for quick determination of enthalpy changes, which are directly related to work and heat transfer in many applications.
*   **Cycle Analysis:** Essential for understanding and optimizing the performance of power generation cycles (e.g., Rankine cycle) and refrigeration cycles.
*   **Property Determination:** Enable the reading of various thermodynamic properties at specific states.

### Relation to Other Thermodynamic Concepts

*   **First Law of Thermodynamics (CO3):** The enthalpy changes read from the Mollier chart are crucial for applying the First Law to open systems (e.g., turbines, compressors, heat exchangers) where mass flows across boundaries. For a steady-flow system, the energy balance is often expressed in terms of enthalpy changes.
    *   For a turbine: $\dot{W}_{out} = \dot{m}(h_1 - h_2) + \dot{Q}_{out}$
    *   For a compressor: $\dot{W}_{in} = \dot{m}(h_2 - h_1) - \dot{Q}_{in}$
*   **Second Law of Thermodynamics (CO4):** Isentropic lines on the Mollier chart represent ideal reversible adiabatic processes. Real processes (e.g., adiabatic compression/expansion with friction) will have entropy generation, causing a deviation from the vertical line, leading to a higher final enthalpy for compression and a lower final enthalpy for expansion compared to the ideal case, thus reducing work output or increasing work input.
*   **Entropy Generation:** While Mollier charts themselves don't directly plot entropy generation, the deviation of a process from an isentropic path indicates irreversibility and hence entropy generation. An irreversible adiabatic process will move to the right on the h-s diagram (increasing entropy).

### Limitations of Mollier Charts

*   **Specific to Substance:** A Mollier chart is specific to a particular pure substance (e.g., steam, R-134a). Different substances require different charts.
*   **Accuracy:** The accuracy of readings depends on the quality and resolution of the chart. For highly precise calculations, thermodynamic tables or property software are preferred.
*   **Limited Property Range:** Charts may not cover all desired temperature or pressure ranges.

### Important Points to Remember

*   **h-s Diagram:** Mollier charts are enthalpy-entropy diagrams.
*   **Isentropic Process:** Represented by a vertical line.
*   **Enthalpy Difference:** The vertical distance between two points on the chart represents the enthalpy difference.
*   **Work/Heat Transfer:** Enthalpy changes are directly linked to work and heat transfer in many steady-flow devices.
*   **Irreversibility:** Real processes deviate from isentropic paths due to irreversibilities, leading to increased entropy.

---
**End of Module 4: Mollier Charts**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
