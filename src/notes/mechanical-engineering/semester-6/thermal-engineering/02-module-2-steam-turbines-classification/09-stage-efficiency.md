---
title: "stage efficiency"
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463993"
status: "completed"
scrapedAt: "2026-05-20T18:08:44.258Z"
---
# Thermal Engineering: Module 2 - Steam Turbines: Classification

## Topic: Stage Efficiency

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of stage efficiency in steam turbines.
*   Differentiate between various types of stage efficiencies.
*   Analyze the factors affecting stage efficiency.
*   Calculate stage efficiency using relevant thermodynamic principles.
*   Relate stage efficiency to overall turbine performance and efficiency improvement methods.

---

### Course Outcomes Alignment:

*   **CO1: Apply the basic thermodynamic principles and analyse the operation of steam power cycles (Knowledge Level: K4)**
    *   Stage efficiency directly utilizes thermodynamic principles (energy balance, enthalpy changes) to assess the performance of a single stage.
*   **CO2: Analyse the performance of steam turbines and identify methods to improve their efficiency. (Knowledge Level: K3)**
    *   This topic is central to analyzing steam turbine performance. Understanding stage efficiency is crucial for identifying areas of loss and implementing strategies for efficiency improvement.
*   **CO5: Conduct case studies, carry out simulation/testing, and prototyping. (Knowledge Level: K6)**
    *   The principles of stage efficiency are applied in performance analysis, simulations, and experimental testing of steam turbines.

---

### Key Concepts and Definitions:

**1. Stage Efficiency:**

*   **Definition:** Stage efficiency is a measure of the thermodynamic performance of a single stage (a nozzle and a moving blade row) of a steam turbine. It represents the ratio of the actual work done by the steam in a stage to the ideal work that would be done if the expansion through that stage were isentropic.
*   **Purpose:** It helps in pinpointing the inefficiencies within specific parts of the turbine, allowing for targeted improvements.
*   **Importance:** By analyzing the efficiency of each stage, one can understand the overall energy conversion process and identify sources of energy loss.

**2. Isentropic Expansion:**

*   **Definition:** An ideal expansion process where there is no heat transfer and the process is reversible. In a steam turbine stage, this represents the theoretical maximum work output from the enthalpy drop across the stage.
*   **Significance:** The isentropic enthalpy drop is used as the reference point for calculating stage efficiency.

**3. Enthalpy Drop:**

*   **Definition:** The decrease in enthalpy of the steam as it passes through a turbine stage. This enthalpy drop is converted into kinetic energy (in the nozzle) and then into mechanical work (in the moving blades).

---

### Types of Stage Efficiencies:

The efficiency of a turbine stage can be defined in a few ways, depending on how the "actual work" is measured. The most common types are:

**a) Isentropic Stage Efficiency (also known as Isentropic Efficiency of the Stage or Overall Stage Efficiency):**

*   **Concept:** This is the most comprehensive measure of stage efficiency. It considers the total actual work done by the steam in the stage (both from the nozzle and the blade) compared to the isentropic work.
*   **Formula:**
    $$ \eta_{stage} = \frac{\text{Actual Work Done per kg of Steam}}{\text{Isentropic Work Done per kg of Steam}} $$
    $$ \eta_{stage} = \frac{h_{01} - h_{02, a}}{h_{01} - h_{02, s}} $$
    Where:
    *   $h_{01}$ = Stagnation enthalpy before the stage (entering the nozzle).
    *   $h_{02, a}$ = Stagnation enthalpy after the stage (leaving the moving blades), considering all losses.
    *   $h_{02, s}$ = Stagnation enthalpy after the stage if the expansion were isentropic from the initial stagnation conditions to the same final pressure.

*   **Explanation:** This efficiency accounts for all irreversibilities (friction in nozzle and blades, leakage, etc.) within the stage.

**b) Nozzle Efficiency (or Velocity Coefficient):**

*   **Concept:** This efficiency specifically relates to the performance of the nozzle within the stage. It measures how effectively the thermal energy of the steam is converted into kinetic energy.
*   **Formula:**
    $$ \eta_{nozzle} = \frac{\text{Actual Kinetic Energy Utilized}}{\text{Isentropic Kinetic Energy Available}} $$
    $$ \eta_{nozzle} = \frac{C_a^2 / 2}{C_s^2 / 2} = \left( \frac{C_a}{C_s} \right)^2 $$
    Where:
    *   $C_a$ = Actual velocity of steam leaving the nozzle.
    *   $C_s$ = Isentropic velocity of steam leaving the nozzle (for the given pressure drop).
    *   Alternatively, using enthalpy:
        $$ \eta_{nozzle} = \frac{h_{01} - h_{02, a, nozzle}}{h_{01} - h_{02, s}} $$
        Where $h_{02, a, nozzle}$ is the stagnation enthalpy after the nozzle considering losses within the nozzle.

*   **Explanation:** A nozzle efficiency of less than 1 indicates losses due to friction and turbulence within the nozzle passages.

**c) Blade Efficiency (or Mechanical Efficiency of the Stage):**

*   **Concept:** This efficiency relates to the performance of the moving blades in extracting work from the steam's kinetic energy. It measures how much of the kinetic energy imparted to the steam by the nozzle is converted into useful work by the blades.
*   **Formula:**
    $$ \eta_{blade} = \frac{\text{Actual Work Done by Blade}}{\text{Kinetic Energy Supplied by Nozzle}} $$
    $$ \eta_{blade} = \frac{W_{actual}}{C_a^2 / 2} $$
    Where $W_{actual}$ is the actual work done per kg of steam by the moving blades.

*   **Explanation:** Blade losses include friction of steam over the blade surfaces, leakage past the blades, and deviations from optimal blade angles.

**Relationship between Stage Efficiencies:**

It's important to note that the isentropic stage efficiency is the most fundamental measure for the entire stage. The nozzle and blade efficiencies are components that contribute to the overall stage efficiency. A detailed analysis might consider the isentropic enthalpy drop across the nozzle and the subsequent enthalpy drop (or work done) by the blades.

---

### Factors Affecting Stage Efficiency:

Several factors influence the efficiency of a steam turbine stage:

*   **Friction:**
    *   **Nozzle Friction:** Steam flowing through the nozzle experiences friction with the nozzle walls, reducing the exit velocity and thus the kinetic energy available for the blades. (Refer to Rudra Moorthy, Chapter 11).
    *   **Blade Friction:** Steam flowing over the moving blades also experiences friction, reducing the work output.
*   **Leakage:**
    *   **Blade Tip Leakage:** Steam can leak across the tips of the moving blades from the high-pressure side to the low-pressure side, bypassing the intended flow path and reducing the work output. (Refer to R.K Rajput, Chapter 14).
    *   **Shaft Leakage:** Leakage of steam past seals at the shaft also contributes to losses.
*   **Blade Design and Aerodynamics:**
    *   **Blade Shape and Angle:** The design of the blade profile significantly impacts the efficiency of work extraction. Incorrect blade angles lead to impact losses (steam striking the blade at an angle other than perpendicular to the relative velocity). (Refer to Rudra Moorthy, Chapter 11).
    *   **Blade Surface Roughness:** Rough surfaces increase frictional losses.
*   **Steam Conditions:**
    *   **Wetness of Steam:** In later stages of a turbine, the steam can become wet (contain water droplets). Water droplets have higher friction and can cause erosion of blades, significantly reducing efficiency. (Refer to R.K Rajput, Chapter 14).
    *   **Superheat:** Superheating the steam at the inlet reduces the likelihood of wet steam in later stages.
*   **Operating Conditions:**
    *   **Partial Admission:** In impulse turbines, if only a portion of the blade circumference is admitted steam (partial admission), it can lead to reheating of steam due to inter-stage leakage and impact losses.
    *   **Incomplete Expansion:** If the pressure drop across a stage is not fully utilized, it leads to inefficiencies.
*   **Nozzle Carry-over (for impulse stages):** In impulse turbines, the nozzle converts the entire pressure drop into kinetic energy. The efficiency of this conversion is crucial.

---

### Calculation of Stage Efficiency:

To calculate stage efficiency, we need to determine the initial and final stagnation enthalpies and the pressure after the stage.

**Steps for Calculation (using Isentropic Stage Efficiency):**

1.  **Determine Initial Stagnation Enthalpy ($h_{01}$):** This is usually found from steam tables using the initial pressure and temperature (or dryness fraction) of the steam entering the stage.
2.  **Determine Final Pressure ($P_{02}$):** This is the pressure after the stage, leaving the moving blades.
3.  **Determine Isentropic Final Stagnation Enthalpy ($h_{02, s}$):** Using the initial state and the final pressure ($P_{02}$), find the enthalpy corresponding to an isentropic expansion from the initial state to $P_{02}$. This is done using steam tables.
4.  **Determine Actual Final Stagnation Enthalpy ($h_{02, a}$):** This is more complex and often obtained through measurements or estimations of losses. In many theoretical calculations, a known stage efficiency is used to *find* the actual enthalpy drop. However, if one is analyzing a design or measured data, $h_{02, a}$ might be determined from measured temperatures/pressures or by accounting for specific losses.

    *   **Example of finding $h_{02, a}$ conceptually:** If we know the actual work done per kg of steam ($W_{actual}$), then $h_{02, a} = h_{01} - W_{actual}$.

5.  **Calculate Isentropic Work ($W_s$):**
    $$ W_s = h_{01} - h_{02, s} $$
6.  **Calculate Actual Work ($W_a$):**
    $$ W_a = h_{01} - h_{02, a} $$
7.  **Calculate Isentropic Stage Efficiency ($\eta_{stage}$):**
    $$ \eta_{stage} = \frac{W_a}{W_s} = \frac{h_{01} - h_{02, a}}{h_{01} - h_{02, s}} $$

---

### Example Problem:

**Problem:** Steam enters the first stage of a turbine at a stagnation pressure of 40 bar and a temperature of 400°C. The steam expands through the stage to a pressure of 35 bar. Assuming the expansion in the stage is isentropic, calculate the isentropic work done per kg of steam and the initial stage efficiency.

**Solution:**

From steam tables (using pressure and temperature):
*   At 40 bar and 400°C, the stagnation enthalpy $h_{01} \approx 3213.6 \text{ kJ/kg}$ (This value can vary slightly depending on the steam table used. Always state your source.)

For isentropic expansion to 35 bar:
*   Using steam tables, find the enthalpy at 35 bar for an isentropic process from the initial state. This means finding the enthalpy at 35 bar with the same entropy value as the initial state.
*   Let $s_1 = s_{01} \approx 6.7685 \text{ kJ/kg.K}$ (entropy at 40 bar, 400°C).
*   At 35 bar, find the enthalpy $h_{02, s}$ corresponding to $s = 6.7685 \text{ kJ/kg.K}$.
*   Using interpolation or steam table values, $h_{02, s} \approx 3174.3 \text{ kJ/kg}$.

**Calculations:**

*   **Isentropic Work Done ($W_s$):**
    $$ W_s = h_{01} - h_{02, s} = 3213.6 - 3174.3 = 39.3 \text{ kJ/kg} $$
*   **Stage Efficiency:**
    The problem statement implies an isentropic expansion for calculating the work. If we were given actual final conditions, we would calculate actual work and then efficiency. However, the question asks for "initial stage efficiency" assuming isentropic expansion, which can be interpreted as the ideal work output. If we assume the *stage efficiency itself* is 100% for this calculation as implied by "isentropic expansion", then the actual work would equal the isentropic work.

    *Let's rephrase the problem slightly to be more typical for calculating efficiency:*

**Revised Example Problem:** Steam enters the first stage of a turbine at a stagnation pressure of 40 bar and a temperature of 400°C. The steam expands through the stage to a pressure of 35 bar. The actual final stagnation enthalpy after the stage is measured to be $h_{02, a} = 3185.0 \text{ kJ/kg}$. Calculate the isentropic work done per kg of steam and the isentropic stage efficiency.

**Revised Solution:**

*   $h_{01} \approx 3213.6 \text{ kJ/kg}$ (at 40 bar, 400°C)
*   $P_{02} = 35 \text{ bar}$

1.  **Isentropic Final Stagnation Enthalpy ($h_{02, s}$):**
    As before, $h_{02, s} \approx 3174.3 \text{ kJ/kg}$ (isentropic expansion to 35 bar).

2.  **Isentropic Work Done ($W_s$):**
    $$ W_s = h_{01} - h_{02, s} = 3213.6 - 3174.3 = 39.3 \text{ kJ/kg} $$

3.  **Actual Work Done ($W_a$):**
    $$ W_a = h_{01} - h_{02, a} = 3213.6 - 3185.0 = 28.6 \text{ kJ/kg} $$

4.  **Isentropic Stage Efficiency ($\eta_{stage}$):**
    $$ \eta_{stage} = \frac{W_a}{W_s} = \frac{28.6}{39.3} \approx 0.7277 \text{ or } 72.77\% $$

---

### Practice Questions and Exercises:

1.  **Question:** Define stage efficiency in the context of a steam turbine. What is its significance?
    *   **Answer:** Stage efficiency measures the thermodynamic performance of a single stage (nozzle + blades) in a steam turbine. It's the ratio of actual work done to isentropic work done. It's significant because it helps identify and quantify losses within specific sections of the turbine, guiding efforts for performance improvement.

2.  **Question:** Steam enters a turbine stage at stagnation conditions of 30 bar, 350°C. The stage expands the steam to 25 bar. If the isentropic enthalpy drop across the stage is 50 kJ/kg and the actual enthalpy drop is 40 kJ/kg, calculate the isentropic stage efficiency.
    *   **Answer:**
        *   Isentropic Work ($W_s$) = Isentropic enthalpy drop = 50 kJ/kg
        *   Actual Work ($W_a$) = Actual enthalpy drop = 40 kJ/kg
        *   Stage Efficiency ($\eta_{stage}$) = $W_a / W_s = 40 / 50 = 0.80$ or 80%.

3.  **Question:** List at least three factors that contribute to the reduction in stage efficiency of a steam turbine.
    *   **Answer:** Friction (in nozzles and blades), leakage (blade tip, shaft), impact losses due to misalignment of steam and blade velocity, wetness of steam, and blade surface roughness.

4.  **Question:** Differentiate between nozzle efficiency and blade efficiency.
    *   **Answer:** Nozzle efficiency measures the effectiveness of converting thermal energy into kinetic energy in the nozzle, while blade efficiency measures how well the blades extract work from the steam's kinetic energy. Nozzle efficiency is typically defined as the ratio of actual kinetic energy developed to the isentropic kinetic energy available. Blade efficiency is the ratio of actual work done by the blades to the kinetic energy supplied by the nozzle.

---

### Important Points to Remember:

*   **Stage efficiency is crucial for analyzing the performance of individual components of a steam turbine.**
*   **The denominator in the stage efficiency calculation is always the isentropic work.**
*   **Losses are the primary reason for stage efficiency being less than 100%.**
*   **Friction, leakage, and aerodynamic imperfections are key sources of losses.**
*   **Understanding stage efficiency allows engineers to identify stages with poor performance and implement design modifications or operational adjustments.**
*   **The overall efficiency of a multi-stage turbine is the product of the efficiencies of its individual stages, but this is a simplification and doesn't account for inter-stage losses or reheat factors.**
*   **In impulse turbine stages, the nozzle converts the entire enthalpy drop into kinetic energy. In reaction turbine stages, part of the enthalpy drop occurs in the stationary nozzle and part in the moving blades.** This distinction can affect how blade and nozzle efficiencies are analyzed. (Refer to Rudra Moorthy, Chapter 11 for detailed impulse/reaction stage analysis).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References and Further Reading:

*   **Thermal Engineering by Rudra Moorthy:** Chapter 11 provides detailed explanations of steam turbine stages, including impulse and reaction types, and concepts related to efficiency.
*   **Thermal Engineering by R.K Rajput:** Chapter 14 discusses the performance and efficiency of steam turbines, including stage efficiency and losses.
*   **Thermal Engineering by Mahesh Rathore:** This reference book likely covers similar topics on steam turbine performance and efficiency.

---