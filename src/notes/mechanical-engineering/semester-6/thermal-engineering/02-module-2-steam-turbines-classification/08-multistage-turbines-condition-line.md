---
title: "Multistage turbines  -Condition line"
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463992"
status: "completed"
scrapedAt: "2026-05-20T18:08:43.563Z"
---
# Study Notes: Multistage Turbines - Condition Line (Module 2: Steam Turbines - Classification)

## Subject: THERMAL ENGINEERING
## Module: Module 2: Steam Turbines: Classification
## Topic: Multistage Turbines - Condition Line

---

### **Learning Outcomes:**

*   Understand the necessity of staging in steam turbines.
*   Differentiate between various types of multistage turbines.
*   Explain the concept of the condition line for a multistage turbine.
*   Analyze the significance of the condition line in turbine design and performance evaluation.
*   Relate the condition line to the expansion process within a multistage turbine.

---

### **Course Outcomes Addressed:**

*   **CO1: Apply the basic thermodynamic principles and analyse the operation of steam power cycles (Knowledge Level: K4)**
    *   The condition line is a direct application of thermodynamic principles (enthalpy, entropy) to the expansion process in a turbine, linking it to the overall steam power cycle.
*   **CO2: Analyse the performance of steam turbines and identify methods to improve their efficiency. (Knowledge Level: K3)**
    *   Understanding the condition line is crucial for analyzing turbine performance, identifying energy losses, and evaluating efficiency improvements through staging.

---

### **1. Introduction to Multistage Steam Turbines**

*   **Why Staging?**
    *   Expanding the entire steam pressure drop across a single turbine stage would lead to:
        *   **Extremely High Rotational Speeds:** This would require very strong materials and pose significant mechanical challenges.
        *   **Low Stage Efficiency:** High velocity steam striking the blades would result in significant shock losses and inefficiency.
        *   **Blade Erosion:** High-velocity steam can cause significant erosion on the blades, especially in the presence of moisture.
*   **Staging:** To overcome these limitations, the total enthalpy drop (and thus pressure drop) is divided into several smaller drops across multiple stages. Each stage typically consists of a set of stationary nozzles (or guide vanes) and a set of rotating blades.
    *   **Nozzles/Guide Vanes:** Convert the thermal energy of steam into kinetic energy by expanding the steam.
    *   **Rotating Blades:** Extract kinetic energy from the steam and convert it into mechanical work.

---

### **2. Types of Multistage Turbines (Classification based on Pressure Drop Distribution):**

*   **(Refer to Rudra Moorthy, Chapter 12: Steam Turbines, Section 12.2.1 Types of Steam Turbines)**
*   The classification of multistage turbines primarily depends on how the pressure drop is distributed across the different stages.

    *   **a) Pressure Compounded Turbines (e.g., Curtis Turbine):**
        *   **Concept:** The total pressure drop is divided into several stages, but each stage comprises a set of nozzles followed by a series of impulse blades. The velocity drop occurs in the rotating blades.
        *   **Pressure Drop:** Most of the pressure drop occurs in the stationary nozzles of the first stage. Subsequent stages have minimal or no pressure drop in the nozzles.
        *   **Velocity Drop:** The velocity of steam decreases as it passes through the series of rotating blades within each stage.
        *   **Working:** Steam expands in the nozzles of the first stage, gaining high velocity. This high-velocity steam then impinges on multiple rows of impulse blades attached to a single wheel. The steam is redirected by stationary guide vanes (interstage vanes) to strike the next row of rotating blades, and so on.
        *   **Advantages:** Simple construction, suitable for very high initial steam pressures and temperatures.
        *   **Disadvantages:** Lower stage efficiency compared to reaction turbines, larger physical size.

    *   **b) Velocity Compounded Turbines (e.g., Rateau Turbine):**
        *   **Concept:** The total pressure drop is divided into multiple stages, and within each stage, there is one set of nozzles (or guide vanes) and one set of impulse blades.
        *   **Pressure Drop:** The pressure drops gradually across each set of nozzles in each stage.
        *   **Velocity Drop:** The velocity of steam drops in each set of rotating blades.
        *   **Working:** Steam expands in the nozzles of the first stage, gaining high velocity. It then passes through a row of rotating blades, doing work and losing some velocity. The steam then enters the nozzles of the second stage, where it expands further, gaining velocity again. This process repeats through all stages.
        *   **Advantages:** Higher efficiency than pressure-compounded turbines, more compact.
        *   **Disadvantages:** Still suffers from some impulse turbine limitations.

    *   **c) Reaction Turbines (e.g., Parsons Turbine):**
        *   **Concept:** The total pressure drop is divided into many stages. Within each stage, both the stationary nozzles (guide vanes) and the rotating blades are designed to act as expanding nozzles.
        *   **Pressure Drop:** The pressure drops in both the stationary nozzles and the rotating blades.
        *   **Velocity Drop:** Steam gains velocity in the stationary nozzles and continues to gain velocity (though at a lower rate) as it expands through the rotating blades, doing work.
        *   **Working:** Steam expands partially in the stationary nozzles, increasing its velocity. This high-velocity steam then enters the rotating blades, which are also shaped to allow expansion. As the steam expands through the rotating blades, its pressure and enthalpy decrease, and its velocity increases. The reaction force due to the change in momentum drives the rotor.
        *   **Advantages:** Higher stage efficiency due to the combined expansion and reaction, more compact than impulse turbines for a given output.
        *   **Disadvantages:** More complex blade design, sensitive to steam conditions.

    *   **d) Impulse-Reaction Turbines (Mixed Flow):**
        *   **Concept:** A combination of impulse and reaction principles. Often, the high-pressure stages might be impulse-compounded, while the low-pressure stages are reaction stages.
        *   **Purpose:** To optimize efficiency and cost over the entire operating range.

---

### **3. The Condition Line for a Multistage Turbine**

*   **(Refer to Rudra Moorthy, Chapter 12: Steam Turbines, Section 12.7 Condition Line and its Significance)**
*   **(Refer to R.K Rajput, Chapter 17: Steam Turbines, Section 17.15 Diagram of Conditions)**
*   The condition line represents the state of the steam (specifically, its enthalpy and entropy) as it expands through the various stages of a multistage turbine.

*   **Key Concepts:**
    *   **Enthalpy (h):** Represents the total energy content of the steam per unit mass.
    *   **Entropy (s):** Represents the randomness or disorder of the steam.
    *   **State of Steam:** Defined by parameters like pressure, temperature, enthalpy, and entropy.
    *   **Expansion Process:** The process where the steam loses energy to do work, and its pressure and temperature decrease.
    *   **Ideal Expansion (Isentropic):** An ideal, reversible process where entropy remains constant ($s_1 = s_2$). This is represented by a vertical line on an h-s (Mollier) diagram.
    *   **Actual Expansion:** The real-world expansion process where irreversible losses (friction, turbulence, leakage) occur, leading to an increase in entropy ($s_2 > s_1$).

*   **Representation on an h-s (Mollier) Diagram:**
    *   The condition line is plotted on a Mollier diagram (enthalpy vs. entropy).
    *   Each point on the diagram represents a specific state of the steam.
    *   The expansion of steam through a multistage turbine is shown as a series of steps, each corresponding to a stage.

*   **Ideal Condition Line:**
    *   In an ideal, isentropic expansion (no losses), the condition line would be a single vertical line from the initial state ($h_1, s_1$) to the final state ($h_2, s_2$).
    *   $s_{initial} = s_{final}$
    *   $h_{initial} - h_{final} = \text{Total ideal work output}$

*   **Actual Condition Line:**
    *   The actual condition line is not a single vertical line. Instead, it is a series of inclined steps, each representing a stage.
    *   **For each stage (ideal case within a stage):** The expansion is isentropic, so the steam state moves vertically downwards (enthalpy decreases) and stays on the same vertical line (entropy constant).
    *   **For each stage (actual case within a stage):** Due to irreversibilities, the entropy increases, and the enthalpy drop is less than the ideal isentropic drop for that pressure difference. The steam state moves downwards and to the right on the h-s diagram.
    *   **The "Condition Line" as a whole:** For a multistage turbine, the actual condition line is a series of stepped lines on the h-s diagram. Each step represents the state change within a stage. The overall trend is a decrease in enthalpy and an increase in entropy.
    *   **The "condition line" often refers to the curve connecting the points representing the steam state at the exit of each stage.** This curve is typically inclined, showing the cumulative increase in entropy and decrease in enthalpy through the turbine.

*   **Visualizing the Condition Line (h-s Diagram):**
    *   **Initial State:** Point 1 (e.g., $h_1, s_1$) at the turbine inlet (high pressure, high temperature).
    *   **Stage 1 (Nozzles):** Steam expands in the nozzles, gaining velocity. Ideally, $s$ is constant, $h$ drops. Actually, $s$ increases slightly, $h$ drops.
    *   **Stage 1 (Blades):** Steam does work, losing velocity. Ideally, $s$ is constant, $h$ drops. Actually, $s$ increases, $h$ drops.
    *   The exit of Stage 1 is Point 2 ($h_2, s_2$).
    *   This process repeats for each stage. The condition line connects points 1, 2, 3, ..., n (exit of stage n).

*   **Shape of the Actual Condition Line:**
    *   The actual condition line is generally a series of downward and rightward sloping segments (on an h-s diagram) representing the successive stages.
    *   The slope of each segment depends on the isentropic efficiency of that stage. A more efficient stage will have a steeper downward slope (larger enthalpy drop for a given entropy increase).

---

### **4. Significance of the Condition Line**

*   **(Refer to Rudra Moorthy, Chapter 12: Steam Turbines, Section 12.7 Condition Line and its Significance)**
*   **(Refer to R.K Rajput, Chapter 17: Steam Turbines, Section 17.15 Diagram of Conditions)**

*   **a) Determining Actual Enthalpy Drop:**
    *   The condition line directly shows the actual enthalpy drop across each stage and the total enthalpy drop across the turbine.
    *   The total actual work done by the turbine is the sum of the enthalpy drops across all stages.
    *   $W_{actual} = h_{initial} - h_{final\_actual}$

*   **b) Calculating Stage Efficiency:**
    *   For each stage, the actual enthalpy drop can be compared to the ideal isentropic enthalpy drop for the same pressure ratio.
    *   **Isentropic Efficiency of a Stage ($\eta_{stage}$):**
        *   $\eta_{stage} = \frac{\text{Actual Enthalpy Drop in Stage}}{\text{Isentropic Enthalpy Drop in Stage}} = \frac{\Delta h_{actual}}{\Delta h_{isentropic}}$
    *   The condition line helps visualize and calculate these efficiencies.

*   **c) Steam Rate and Specific Steam Consumption:**
    *   Knowing the actual enthalpy drop allows calculation of the steam rate (mass of steam required per unit power output) and specific steam consumption.
    *   Steam Rate = $\frac{3600}{W_{actual}}$ (kg/kWh)
    *   Specific Steam Consumption = $\frac{\text{Mass flow rate of steam}}{\text{Power output}}$

*   **d) Predicting Final Steam Conditions:**
    *   The condition line, based on known stage efficiencies and pressure ratios, can predict the enthalpy and entropy (and thus pressure and temperature) of the steam at the turbine exhaust. This is crucial for condenser design.

*   **e) Identifying Losses:**
    *   Deviations from the ideal isentropic expansion on the h-s diagram represent losses due to friction, turbulence, leakage, etc. The condition line helps pinpoint where these losses are most significant.

*   **f) Turbine Design and Optimization:**
    *   Engineers use the condition line to:
        *   Determine the number of stages required for a given pressure drop.
        *   Distribute the total enthalpy drop effectively among the stages.
        *   Select appropriate nozzle and blade geometries for each stage to maximize efficiency.
        *   Optimize the overall turbine design for performance and cost.

---

### **5. Example Illustrating the Condition Line**

Let's consider a simplified scenario for a two-stage turbine:

*   **Initial Steam Conditions:** $P_1 = 10$ bar, $T_1 = 300^\circ C$. From steam tables, $h_1 = 3051$ kJ/kg, $s_1 = 6.757$ kJ/kg.K.
*   **Intermediate Pressure:** $P_2 = 5$ bar.
*   **Final Pressure:** $P_3 = 1$ bar.

**Ideal Isentropic Expansion (for comparison):**

*   **Stage 1 (Ideal):** Expansion from 10 bar to 5 bar, isentropic.
    *   Find $s_{mid\_ideal} = s_1 = 6.757$ kJ/kg.K.
    *   At $P_2 = 5$ bar and $s = 6.757$ kJ/kg.K, find $h_{mid\_ideal}$ from steam tables. Let's assume $h_{mid\_ideal} = 2870$ kJ/kg.
    *   Ideal enthalpy drop in Stage 1: $\Delta h_{ideal\_1} = h_1 - h_{mid\_ideal} = 3051 - 2870 = 181$ kJ/kg.
*   **Stage 2 (Ideal):** Expansion from 5 bar to 1 bar, isentropic.
    *   Find $s_{final\_ideal} = s_1 = 6.757$ kJ/kg.K.
    *   At $P_3 = 1$ bar and $s = 6.757$ kJ/kg.K, find $h_{final\_ideal}$ from steam tables. Let's assume $h_{final\_ideal} = 2650$ kJ/kg.
    *   Ideal enthalpy drop in Stage 2: $\Delta h_{ideal\_2} = h_{mid\_ideal} - h_{final\_ideal} = 2870 - 2650 = 220$ kJ/kg.
*   **Total Ideal Enthalpy Drop:** $181 + 220 = 401$ kJ/kg.

**Actual Expansion:**

Assume stage efficiencies: $\eta_{stage1} = 80\%$, $\eta_{stage2} = 85\%$.

*   **Stage 1 (Actual):**
    *   Actual enthalpy drop in Stage 1: $\Delta h_{actual\_1} = \eta_{stage1} \times \Delta h_{ideal\_1} = 0.80 \times 181 = 144.8$ kJ/kg.
    *   Enthalpy at exit of Stage 1: $h_2 = h_1 - \Delta h_{actual\_1} = 3051 - 144.8 = 2906.2$ kJ/kg.
    *   At $P_2 = 5$ bar and $h_2 = 2906.2$ kJ/kg, find $s_2$ from steam tables. Let's assume $s_2 = 6.85$ kJ/kg.K (entropy has increased).
*   **Stage 2 (Actual):**
    *   Now, the expansion is from $h_2, s_2$ (at 5 bar) to $P_3=1$ bar.
    *   We need the ideal enthalpy drop from state $(h_2, s_2)$ to $P_3=1$ bar. This means finding $h_{mid\_ideal\_from\_s2}$ at $P_3=1$ bar and $s = s_2 = 6.85$ kJ/kg.K. Let's assume this value is $h_{final\_ideal\_from\_s2} = 2675$ kJ/kg.
    *   Isentropic enthalpy drop in Stage 2 (starting from actual $s_2$): $\Delta h_{ideal\_from\_s2} = h_2 - h_{final\_ideal\_from\_s2} = 2906.2 - 2675 = 231.2$ kJ/kg.
    *   Actual enthalpy drop in Stage 2: $\Delta h_{actual\_2} = \eta_{stage2} \times \Delta h_{ideal\_from\_s2} = 0.85 \times 231.2 = 196.52$ kJ/kg.
    *   Enthalpy at exit of Stage 2: $h_3 = h_2 - \Delta h_{actual\_2} = 2906.2 - 196.52 = 2709.68$ kJ/kg.
    *   At $P_3 = 1$ bar and $h_3 = 2709.68$ kJ/kg, find $s_3$. Let's assume $s_3 = 7.05$ kJ/kg.K.

**Condition Line Points (on h-s diagram):**

*   Point 1: $(h_1, s_1) = (3051, 6.757)$ kJ/kg, kJ/kg.K
*   Point 2 (exit Stage 1): $(h_2, s_2) = (2906.2, 6.85)$ kJ/kg, kJ/kg.K
*   Point 3 (exit Stage 2): $(h_3, s_3) = (2709.68, 7.05)$ kJ/kg, kJ/kg.K

The condition line is formed by connecting these points. It shows the actual path of steam during expansion. The total actual work is $h_1 - h_3 = 3051 - 2709.68 = 341.32$ kJ/kg.

---

### **6. Important Points to Remember:**

*   Staging is essential for efficient and safe operation of steam turbines.
*   The condition line on an h-s diagram represents the actual expansion path of steam through a multistage turbine.
*   The condition line is characterized by a decrease in enthalpy and an increase in entropy across each stage.
*   The deviation of the actual condition line from an ideal isentropic line indicates irreversibilities and losses.
*   Understanding the condition line is vital for calculating actual work output, stage efficiencies, and overall turbine performance.
*   The shape and position of the condition line depend on the turbine type (impulse, reaction, pressure-compounded, velocity-compounded) and the efficiency of each stage.

---

### **7. Practice Questions:**

**Q1.** What is the primary reason for dividing the total pressure drop into multiple stages in a steam turbine?
    *   **Answer:** To avoid extremely high rotational speeds, reduce shock losses, and minimize blade erosion.

**Q2.** Explain the difference between pressure compounding and velocity compounding in steam turbines.
    *   **Answer:** In pressure compounding, the entire pressure drop is distributed over multiple sets of nozzles and blade rows within a stage, with most of the pressure drop occurring in the nozzles. In velocity compounding, the pressure drop is distributed across stages, with each stage having one set of nozzles and multiple rows of impulse blades.

**Q3.** How is the condition line represented on an h-s (Mollier) diagram for a multistage turbine?
    *   **Answer:** It is represented as a series of stepped lines connecting the initial state to the exit state, with each step typically showing a decrease in enthalpy and an increase in entropy.

**Q4.** If the actual enthalpy drop in a turbine stage is 150 kJ/kg and the ideal isentropic enthalpy drop for the same pressure difference is 200 kJ/kg, what is the isentropic efficiency of that stage?
    *   **Answer:** $\eta_{stage} = (150 / 200) \times 100\% = 75\%$.

**Q5.** What information can be obtained by analyzing the condition line of a multistage turbine?
    *   **Answer:** Actual enthalpy drop, stage efficiencies, final steam conditions, and identification of areas of significant losses.

---

This concludes the study notes on the condition line for multistage turbines. Remember to consult the provided textbooks for detailed diagrams and further explanations. Good luck with your studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
