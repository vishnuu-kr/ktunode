---
title: "second-law efficiency"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f68"
status: "completed"
scrapedAt: "2026-05-20T17:53:45.864Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement & Second-Law Efficiency

## Topic: Second-Law Efficiency

**Learning Outcome:** Understand and apply the concept of second-law efficiency to analyze the performance of thermodynamic systems.

---

### 1. Introduction to Second-Law Efficiency

The Second Law of Thermodynamics places fundamental limitations on the efficiency of converting heat into work. While the First Law dictates energy conservation, the Second Law addresses the quality of energy and the direction of spontaneous processes. Second-law efficiency (also known as exergy efficiency or effectiveness) quantifies how well a system utilizes its available energy (exergy) compared to an ideal, reversible process.

**Key Concepts:**

*   **Exergy (Available Energy):** The maximum useful work that can be obtained from a system as it interacts with a reference environment (dead state). Exergy is a measure of the potential to cause change.
*   **Dead State:** The reference environment's state, typically at ambient temperature ($T_0$) and pressure ($P_0$), where the system has no further potential to do work.
*   **Irreversibility:** Processes that involve dissipative effects like friction, heat transfer across finite temperature differences, and unrestrained expansion. Irreversibilities reduce the actual work output and increase the exergy destruction.
*   **Reversible Process:** An idealized process that can be reversed without leaving any net change in the system or its surroundings. Reversible processes produce the maximum possible work and have zero exergy destruction.

**Textbook References:**

*   **Cengel, Boles, & Kanoğlu (2011):** Chapter 12 discusses Exergy and Exergy Analysis.
*   **P.K. Nag (2017):** Chapter 13 covers Exergy and Availability.

---

### 2. Defining Second-Law Efficiency ($\eta_{II}$ or $\epsilon$)

Second-law efficiency is a ratio of the *actual* useful work output to the *maximum possible* (reversible) work output, or similarly, the ratio of the *actual* useful work input to the *minimum possible* (reversible) work input.

**General Definition:**

$\eta_{II} = \frac{\text{Actual Useful Work Output}}{\text{Maximum Possible Work Output (Reversible Work)}}$

For heat engines, this translates to:

$\eta_{II, HE} = \frac{W_{actual, net}}{W_{rev, net}} = \frac{W_{actual, net}}{W_{rev, net}}$

For refrigeration and heat pump cycles, it's defined in terms of the desired effect (cooling or heating) and the work input:

*   **Refrigeration Cycle:** $\eta_{II, R} = \frac{Q_{L, actual} / (h_1 - h_4)_{actual}}{Q_{L, rev} / (h_1 - h_4)_{rev}}$ (where $Q_L$ is the heat absorbed from the cold reservoir and $h_1-h_4$ is the ideal work input)
    *   More commonly: $\eta_{II, R} = \frac{\text{Actual COP}_R}{\text{COP}_{R, rev}}$
*   **Heat Pump Cycle:** $\eta_{II, HP} = \frac{Q_H, actual / (h_1 - h_4)_{actual}}{Q_H, rev / (h_1 - h_4)_{rev}}$ (where $Q_H$ is the heat delivered to the hot reservoir and $h_1-h_4$ is the ideal work input)
    *   More commonly: $\eta_{II, HP} = \frac{\text{Actual COP}_{HP}}{\text{COP}_{HP, rev}}$

**Course Outcome Alignment:**

*   **CO2: Understand the laws of thermodynamics:** This topic directly relates to the Second Law by quantifying performance in relation to its limitations. (Knowledge Level: K1, K2)
*   **CO3: Conduct first law analysis of open and closed systems:** While this topic focuses on the Second Law, understanding work and heat transfer (first law concepts) is crucial for calculating actual work. (Knowledge Level: K3)

---

### 3. Calculation of Maximum Possible Work (Reversible Work)

The maximum possible work is determined by assuming the process occurs reversibly between the initial and final states, and between the system and the dead state. This often involves considering a Carnot cycle as the ideal benchmark.

**For a closed system undergoing a process from state 1 to state 2:**

$W_{rev} = W_{rev, total} - W_{0, rev}$

Where:
*   $W_{rev, total}$ is the reversible work associated with the system's internal process.
*   $W_{0, rev}$ is the work done by the system on the surroundings during the expansion or compression to match the dead state pressure ($P_0$).

Using the exergy concept:
$W_{rev} = \Delta \Psi = \Psi_1 - \Psi_2$
where $\Psi$ is the flow exergy, calculated as:
$\Psi = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2g_c} + gz$

For a simple compressible system (neglecting kinetic and potential energy changes and assuming no shaft work or electrical work), and for a reversible process from state 1 to state 2, the reversible work is:

$W_{rev} = \int_{1}^{2} P dV - P_0 (V_2 - V_1)$

If the process is isothermal ($T=constant$), $W_{rev} = P_1V_1 \ln\left(\frac{V_2}{V_1}\right) - P_0 (V_2 - V_1)$.

**For a steady-flow system:**

The reversible work is related to the change in flow exergy:
$W_{rev, SF} = \Psi_1 - \Psi_2 = (h_1 - h_2) - T_0(s_1 - s_2) + \frac{V_1^2 - V_2^2}{2} + g(z_1 - z_2)$

**Textbook References:**

*   **Cengel, Boles, & Kanoğlu (2011):** Section 12-4 discusses Exergy destruction and Second-law efficiency.
*   **P.K. Nag (2017):** Section 13-3 covers Exergy of a closed system and Section 13-4 covers Exergy of a flow process.

---

### 4. Examples of Second-Law Efficiency

**4.1 Heat Engines (e.g., Power Plants)**

A power plant receives heat from a high-temperature source ($Q_H$) and converts some of it into work ($W_{net}$). The rest is rejected to a low-temperature sink ($Q_L$).

*   **First-Law Efficiency ($\eta_I$):** $\eta_I = \frac{W_{net}}{Q_H}$
*   **Maximum Possible Work (Reversible Work):** For a heat engine operating between $T_H$ and $T_L$, the maximum work is given by the Carnot efficiency: $W_{rev, net} = Q_H (1 - \frac{T_L}{T_H})$.
*   **Second-Law Efficiency ($\eta_{II}$):**
    $\eta_{II, HE} = \frac{W_{actual, net}}{W_{rev, net}} = \frac{W_{actual, net}}{Q_H (1 - \frac{T_L}{T_H})}$

**Example:** A power plant generates 100 MW of net work. It receives 300 MW of heat from a source at 600°C and rejects 200 MW of heat to a sink at 25°C. Calculate the first-law and second-law efficiencies. (Assume $T_0 = 25^\circ$C for exergy calculations.)

**Solution:**

*   **First-Law Efficiency:**
    $\eta_I = \frac{100 \text{ MW}}{300 \text{ MW}} = 0.333$ or 33.3%

*   **Maximum Work (Carnot):**
    $T_H = 600^\circ\text{C} = 873.15 \text{ K}$
    $T_L = 25^\circ\text{C} = 298.15 \text{ K}$
    $W_{rev, net} = Q_H (1 - \frac{T_L}{T_H}) = 300 \text{ MW} (1 - \frac{298.15}{873.15}) = 300 \text{ MW} (1 - 0.3415) = 300 \text{ MW} \times 0.6585 = 197.55 \text{ MW}$

*   **Second-Law Efficiency:**
    $\eta_{II, HE} = \frac{W_{actual, net}}{W_{rev, net}} = \frac{100 \text{ MW}}{197.55 \text{ MW}} = 0.506$ or 50.6%

**Interpretation:** The plant converts 33.3% of the heat input into work (first-law), but it achieves only 50.6% of the maximum possible work that could have been obtained from the given heat source and sink. The remaining 49.4% of the maximum work is lost due to irreversibilities within the plant.

**4.2 Refrigeration and Heat Pump Cycles**

*   **Refrigeration:** The goal is to transfer heat ($Q_L$) from a cold space to the surroundings using work input ($W_{in}$).
    *   **First-Law (COP):** $\text{COP}_R = \frac{Q_L}{W_{in}}$
    *   **Maximum Possible COP (Carnot):** $\text{COP}_{R, rev} = \frac{T_L}{T_H - T_L}$
    *   **Second-Law Efficiency:** $\eta_{II, R} = \frac{\text{COP}_{R, actual}}{\text{COP}_{R, rev}}$

*   **Heat Pump:** The goal is to transfer heat ($Q_H$) to a hot space using work input ($W_{in}$).
    *   **First-Law (COP):** $\text{COP}_{HP} = \frac{Q_H}{W_{in}}$
    *   **Maximum Possible COP (Carnot):** $\text{COP}_{HP, rev} = \frac{T_H}{T_H - T_L}$
    *   **Second-Law Efficiency:** $\eta_{II, HP} = \frac{\text{COP}_{HP, actual}}{\text{COP}_{HP, rev}}$

**Example:** A refrigerator cools a space to 4°C, absorbing heat at a rate of 1 kW. It consumes 0.5 kW of power. The ambient temperature is 25°C. Calculate the actual COP and the second-law efficiency.

**Solution:**

*   **Actual COP$_R$:**
    $\text{COP}_{R, actual} = \frac{Q_L}{W_{in}} = \frac{1 \text{ kW}}{0.5 \text{ kW}} = 2$

*   **Maximum Possible COP$_R$ (Carnot):**
    $T_L = 4^\circ\text{C} = 277.15 \text{ K}$
    $T_H = 25^\circ\text{C} = 298.15 \text{ K}$
    $\text{COP}_{R, rev} = \frac{T_L}{T_H - T_L} = \frac{277.15}{298.15 - 277.15} = \frac{277.15}{21} = 13.197$

*   **Second-Law Efficiency:**
    $\eta_{II, R} = \frac{\text{COP}_{R, actual}}{\text{COP}_{R, rev}} = \frac{2}{13.197} = 0.1515$ or 15.15%

**Interpretation:** The refrigerator has a COP of 2, meaning it moves 2 units of heat for every unit of work. However, ideally, it could have moved over 13 units of heat for the same work input. The low second-law efficiency indicates significant irreversibilities in the refrigeration cycle.

**Textbook References:**

*   **Cengel, Boles, & Kanoğlu (2011):** Chapter 13 (Refrigeration and Air Conditioning) will have examples of calculating COP and comparing with ideal values.
*   **P.K. Nag (2017):** Chapter 14 (Refrigeration and Air Conditioning) will also cover these aspects.

---

### 5. Exergy Destruction and its Relation to Second-Law Efficiency

Exergy destruction ($I$) is the irreversibility associated with a process. It represents the loss of useful work potential.

**Relationship for a Process:**

$I = W_{rev} - W_{actual}$ (for work producing devices)
$I = W_{actual, rev} - W_{actual}$ (for work consuming devices)

In terms of exergy:
$I = \Psi_1 - \Psi_2 - W_{actual}$ (for a closed system)
$I = \dot{\Psi}_{in} - \dot{\Psi}_{out} - \dot{W}_{actual}$ (for a steady-flow system)

The exergy destruction is directly related to the second-law efficiency:

$\eta_{II} = \frac{W_{rev} - I}{W_{rev}} = 1 - \frac{I}{W_{rev}}$

**Key Points:**

*   A reversible process has $I=0$ and $\eta_{II}=1$.
*   Higher exergy destruction leads to lower second-law efficiency.

**Course Outcome Alignment:**

*   **CO4: Determine entropy changes associated with different processes:** Exergy destruction is directly related to entropy generation ($I = T_0 S_{gen}$), and understanding entropy is fundamental to calculating exergy destruction. (Knowledge Level: K3)

---

### 6. Importance and Applications of Second-Law Efficiency

*   **Identifying Areas for Improvement:** Second-law efficiency highlights the components or processes within a system that are most responsible for losses (i.e., have the highest irreversibilities). This allows engineers to focus improvement efforts where they will be most impactful.
*   **Evaluating System Performance:** It provides a more realistic assessment of how well a system utilizes its energy resources compared to the theoretical maximum.
*   **Comparing Different Technologies:** It allows for a fair comparison of different thermodynamic cycles or systems, even if they operate under different conditions.
*   **Resource Conservation:** By understanding and improving second-law efficiency, we can reduce the consumption of high-quality energy (like fuel) to achieve a given task.

**Examples:**

*   **Power Plants:** Analyzing the second-law efficiency of turbines, boilers, and condensers to pinpoint areas of significant heat transfer irreversibilities or frictional losses.
*   **Refrigeration Systems:** Identifying the most irreversible components (e.g., expansion valve, compressor) in a refrigerator or air conditioner.
*   **Chemical Processes:** Assessing the efficiency of reactors and separation units.
*   **Combustion:** Evaluating the exergy destruction in combustion processes.

**Textbook References:**

*   **Cengel, Boles, & Kanoğlu (2011):** Chapter 12 provides a thorough discussion on the significance of exergy and second-law efficiency in system analysis.
*   **Moran & Shapiro (2006):** Chapter 11 delves into Second-Law analysis of cycles and systems, emphasizing performance evaluation.
*   **Sonntag, Borgnakke, & VanWylen (2014):** Chapter 12 discusses Exergy and its applications in assessing system performance.

---

### 7. Practice Questions & Exercises

**Question 1 (Conceptual):**
Explain the difference between first-law efficiency and second-law efficiency. Why is second-law efficiency often a more meaningful measure of performance?

**Answer:**
First-law efficiency (e.g., thermal efficiency, COP) is the ratio of the desired output (work or heat moved) to the required input (heat or work). It conserves energy but doesn't account for energy quality or the limitations imposed by the Second Law. Second-law efficiency compares the actual performance to the theoretical maximum achievable performance under ideal, reversible conditions. It is more meaningful because it quantifies the losses due to irreversibilities, identifying where improvements can be made to conserve high-quality energy resources.

**Question 2 (Calculation - Heat Engine):**
A gas turbine engine receives air at 1000 K and produces 150 MW of power. The heat is rejected to the atmosphere at 300 K. If the ideal Carnot engine operating between the same temperatures could produce 200 MW of power from the same heat input, what is the second-law efficiency of the gas turbine?

**Answer:**
$W_{actual} = 150 \text{ MW}$
$W_{rev} = 200 \text{ MW}$
$\eta_{II} = \frac{W_{actual}}{W_{rev}} = \frac{150 \text{ MW}}{200 \text{ MW}} = 0.75$ or 75%

**Question 3 (Calculation - Refrigerator):**
A refrigerator maintains its interior at -10°C while operating in an environment at 20°C. It consumes 0.8 kW of power and removes heat from the interior at a rate of 1.5 kW. Calculate the actual COP, the Carnot COP, and the second-law efficiency of the refrigerator.

**Answer:**
$T_L = -10^\circ\text{C} = 263.15 \text{ K}$
$T_H = 20^\circ\text{C} = 293.15 \text{ K}$
$Q_L = 1.5 \text{ kW}$
$W_{in} = 0.8 \text{ kW}$

*   **Actual COP$_R$:**
    $\text{COP}_{R, actual} = \frac{Q_L}{W_{in}} = \frac{1.5 \text{ kW}}{0.8 \text{ kW}} = 1.875$

*   **Carnot COP$_R$:**
    $\text{COP}_{R, rev} = \frac{T_L}{T_H - T_L} = \frac{263.15}{293.15 - 263.15} = \frac{263.15}{30} = 8.77$

*   **Second-Law Efficiency:**
    $\eta_{II, R} = \frac{\text{COP}_{R, actual}}{\text{COP}_{R, rev}} = \frac{1.875}{8.77} = 0.2138$ or 21.38%

**Question 4 (Application):**
Consider a steam power plant. Where might significant exergy destruction occur in the main components (boiler, turbine, condenser, pump)? How would you use second-law efficiency to assess the performance of the turbine?

**Answer:**
*   **Boiler:** Heat transfer across a large temperature difference between the combustion gases and the steam. Incomplete combustion.
*   **Turbine:** Friction within the steam, throttling losses, heat transfer to surroundings.
*   **Condenser:** Heat transfer across a large temperature difference between the steam and the cooling water.
*   **Pump:** Friction within the fluid, internal recirculation.

To assess the turbine's performance using second-law efficiency, you would compare the actual work output of the turbine per unit mass flow rate to the maximum possible work output. The maximum possible work (reversible work) would be calculated using the inlet steam conditions and the exit conditions at the dead state pressure, assuming a reversible expansion (e.g., isentropic expansion from the actual inlet state to the actual exit pressure). The second-law efficiency would then be:

$\eta_{II, Turbine} = \frac{W_{actual, turbine}}{W_{rev, turbine}}$

**Course Outcome Alignment:**

*   **CO1 & CO2:** These questions test basic understanding of thermodynamic concepts and laws. (Knowledge Level: K1, K2)
*   **CO3 & CO5:** Calculations involve work, heat, and properties of substances, aligning with these outcomes. (Knowledge Level: K3)

---

### 8. Important Points to Remember

*   **Second-law efficiency (exergy efficiency) is always less than or equal to first-law efficiency.** ($\eta_{II} \leq \eta_I$ for heat engines; $\eta_{II} \leq \text{COP}_{ideal}$ for refrigerators/heat pumps).
*   **The reference environment (dead state) must be clearly defined** ($T_0$, $P_0$) for exergy calculations.
*   **Irreversibilities are the root cause of second-law losses.** Minimizing irreversibilities is key to improving second-law efficiency.
*   **Second-law analysis provides a more critical assessment of system performance** by considering the quality of energy and theoretical limits.
*   **Focus on the ratio of actual performance to ideal (reversible) performance.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Further Reading and References

*   **Cengel, Y. A., Boles, M. A., & Kanoğlu, M. (2011).** *Thermodynamics: An Engineering Approach.* McGraw-Hill. (Chapters 12 & 13)
*   **Nag, P. K. (2017).** *Engineering Thermodynamics.* McGraw-Hill Education. (Chapters 13 & 14)
*   **Moran, J. M., & Shapiro, N. M. (2006).** *Fundamentals of Engineering Thermodynamics.* Wiley. (Chapter 11)
*   **Sonntag, R. E., Borgnakke, C., & VanWylen, G. J. (2014).** *Fundamentals of Thermodynamics.* Wiley. (Chapter 12)
*   **Ansermet, J.-P., & Brechet, S. D. (2019).** *Thermodynamics: Principles and Applications.* Cambridge University Press. (Relevant chapters on exergy and efficiency)

---