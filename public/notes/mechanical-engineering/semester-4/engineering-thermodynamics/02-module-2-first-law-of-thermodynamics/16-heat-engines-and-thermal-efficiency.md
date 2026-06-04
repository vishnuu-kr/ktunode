---
title: "heat engines and thermal efficiency"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f53"
status: "completed"
scrapedAt: "2026-05-20T17:53:31.724Z"
---
# ENGINEERING THERMODYNAMICS

## Module 2: First Law of Thermodynamics

### Topic: Heat Engines and Thermal Efficiency

---

### 1. Introduction to Heat Engines

*   **Definition:** A heat engine is a device that converts thermal energy (heat) into mechanical work. It operates in a cycle and absorbs heat from a high-temperature source, converts a portion of this heat into work, and rejects the remaining heat to a low-temperature sink.
*   **Key Components:**
    *   **High-Temperature Reservoir (Heat Source):** A body at a higher temperature ($T_H$) from which heat ($Q_H$) is absorbed.
    *   **Working Substance:** A fluid (e.g., gas, vapor) that undergoes a thermodynamic cycle.
    *   **Heat Engine:** The device that performs the cycle and produces work.
    *   **Low-Temperature Reservoir (Heat Sink):** A body at a lower temperature ($T_L$) to which waste heat ($Q_L$) is rejected.
*   **Purpose:** To produce useful work from heat, which is a fundamental goal in many engineering applications like power generation and transportation.

**Referencing Cengel & Boles (2011):** Chapter 9, "Thermodynamic Cycles," introduces the concept of heat engines as devices that operate on a cycle to produce work. They emphasize the cyclic nature and the interaction with two thermal reservoirs.

**Referencing P.K. Nag (2017):** Chapter 6, "Second Law of Thermodynamics," begins by defining heat engines and their role in converting heat into work. Nag highlights the continuous operation and the necessity of a temperature difference.

---

### 2. The Thermodynamic Cycle of a Heat Engine

*   **Cyclic Operation:** Heat engines operate on a cycle, meaning the working substance returns to its initial state at the end of each cycle. This is crucial because it allows for continuous operation and prevents depletion of the working substance.
*   **Energy Interactions:** During a cycle, the working substance interacts with the surroundings through heat and work transfer.
*   **First Law Application to a Cycle:** For a system undergoing a cycle, the net change in internal energy is zero ($\Delta U_{cycle} = 0$). Therefore, from the First Law of Thermodynamics ($\Delta U = Q - W$):
    $$ \sum Q_{cycle} = \sum W_{cycle} $$
    Where:
    *   $Q_{cycle}$ is the net heat transfer during the cycle.
    *   $W_{cycle}$ is the net work transfer during the cycle.

*   **Heat Engine Specifics:** For a heat engine, there are typically two main heat interactions:
    *   Heat absorbed from the high-temperature reservoir: $Q_H$ (positive, as it's added to the system).
    *   Heat rejected to the low-temperature reservoir: $Q_L$ (negative, as it's removed from the system).
    *   Net work output: $W_{net,out}$.

    Applying the First Law to the cycle:
    $$ Q_H - Q_L = W_{net,out} $$

**Referencing Moran & Shapiro (2006):** Chapter 5, "The Second Law of Thermodynamics," elaborates on cyclic processes and their application to heat engines, emphasizing the conservation of energy over the entire cycle.

**Referencing Sonntag, Borgnakke, & VanWylen (2014):** Chapter 5, "The Second Law of Thermodynamics," discusses the cyclic nature of heat engines and the energy balance within a cycle, linking it to the First Law.

---

### 3. Thermal Efficiency of a Heat Engine

*   **Definition:** Thermal efficiency ($\eta_{th}$) is a measure of how effectively a heat engine converts the heat absorbed from the high-temperature reservoir into useful work. It is defined as the ratio of the net work output to the heat input.
    $$ \eta_{th} = \frac{W_{net,out}}{Q_H} $$
*   **Relationship with Heat Transfers:** Substituting $W_{net,out} = Q_H - Q_L$ into the efficiency equation:
    $$ \eta_{th} = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H} $$
*   **Interpretation:**
    *   An efficiency of 1 (or 100%) would mean all the heat absorbed is converted into work, with no heat rejected. This is impossible according to the Second Law of Thermodynamics (Kelvin-Planck statement).
    *   An efficiency of 0 would mean no work is produced, and all heat is rejected.
    *   The higher the efficiency, the more work is produced for a given amount of heat input.

**Important Point to Remember:** Thermal efficiency is always less than 1 (or 100%). $0 \le \eta_{th} < 1$.

**Referencing Cengel & Boles (2011):** Chapter 9, "Thermodynamic Cycles," provides a thorough explanation of thermal efficiency, its formula, and its implications. They often use examples of familiar heat engines like steam power plants and internal combustion engines.

**Referencing P.K. Nag (2017):** Chapter 6, "Second Law of Thermodynamics," clearly defines thermal efficiency and its calculation, often illustrating it with the Otto and Diesel cycles.

**Referencing Ansermet & Brechet (2019):** Chapter 3, "The First Law of Thermodynamics," while primarily focused on the First Law, lays the groundwork for understanding work and heat transfer, which are directly used in the definition of efficiency.

---

### 4. Types of Heat Engines and Examples

Heat engines can be broadly classified into two categories based on how they operate:

#### 4.1. External Combustion Engines

*   **Description:** The combustion of fuel occurs *outside* the engine's working fluid. Heat is transferred to the working fluid through a heat exchanger.
*   **Examples:**
    *   **Steam Power Plants (Rankine Cycle):**
        *   Heat source: Burning fossil fuels (coal, natural gas) or nuclear reactions heat water in a boiler.
        *   Working fluid: Steam.
        *   Work output: Turbine.
        *   Heat sink: Condenser (cooling water from a river or atmosphere).
        *   **Cengel & Boles (2011):** Chapter 9 discusses the Rankine cycle in detail.
        *   **P.K. Nag (2017):** Chapter 10, "Vapour Power Cycles," covers the Rankine cycle.
    *   **Stirling Engines:**
        *   Heat source: Can be any external heat source (solar, combustion, geothermal).
        *   Working fluid: Gas (e.g., air, helium, hydrogen).
        *   Work output: Pistons connected to a crankshaft.
        *   Heat sink: Ambient air or cooling water.
        *   **Cengel & Boles (2011):** Mentioned in Chapter 9 as a representative of external combustion engines.

#### 4.2. Internal Combustion Engines (ICE)

*   **Description:** The combustion of fuel occurs *inside* the engine's working fluid (which is usually air). The hot combustion gases directly expand and do work.
*   **Examples:**
    *   **Gasoline Engines (Otto Cycle):**
        *   Fuel: Gasoline.
        *   Working fluid: Air-fuel mixture.
        *   Process: Intake, Compression, Combustion (spark ignition), Expansion (power stroke), Exhaust.
        *   **Cengel & Boles (2011):** Chapter 9 covers the Otto cycle.
        *   **P.K. Nag (2017):** Chapter 8, "Gas Power Cycles," details the Otto cycle.
    *   **Diesel Engines (Diesel Cycle):**
        *   Fuel: Diesel.
        *   Working fluid: Air.
        *   Process: Intake, Compression (auto-ignition due to high temperature), Fuel Injection & Combustion, Expansion, Exhaust.
        *   **Cengel & Boles (2011):** Chapter 9 covers the Diesel cycle.
        *   **P.K. Nag (2017):** Chapter 8, "Gas Power Cycles," details the Diesel cycle.
    *   **Jet Engines (Brayton Cycle):**
        *   Used in aircraft.
        *   Process: Compression, Combustion, Expansion (through a turbine and nozzle).
        *   **Cengel & Boles (2011):** Chapter 9 covers the Brayton cycle.
        *   **P.K. Nag (2017):** Chapter 9, "Gas Turbine Engines," discusses the Brayton cycle.

**Referencing Moran & Shapiro (2006):** Chapter 7, "Second-Law Analysis of Processes," often uses ICE examples to illustrate the concepts of efficiency and irreversibility.

**Referencing Sonntag, Borgnakke, & VanWylen (2014):** Chapter 6, "Second-Law Aspects of Processes," also provides examples of practical heat engines like power cycles.

---

### 5. Relating Heat Engine Concepts to Course Outcomes

*   **CO1: Understand basic concepts of thermodynamics (K1, K2)**
    *   This topic directly builds upon basic concepts like heat, work, system, surroundings, and temperature.
    *   The definition of a heat engine and its components reinforces these fundamental ideas.
*   **CO2: Understand the laws of thermodynamics (K1, K2)**
    *   The **First Law** is applied to understand the energy balance in a heat engine cycle ($Q_H - Q_L = W_{net,out}$).
    *   The concept of thermal efficiency is intrinsically linked to the **Second Law**, as it highlights the impossibility of achieving 100% efficiency and the necessity of heat rejection.
*   **CO3: Conduct first law analysis of open and closed systems (K3)**
    *   While this topic focuses on *cycles*, the principles of First Law analysis learned for open and closed systems are foundational.
    *   The net work and net heat transfer over a cycle can be thought of as the sum of work and heat transfers across different stages of the cycle, which are often analyzed as closed or open systems depending on the engine type.
*   **CO5: Determine the properties of pure substances (K2, K3)**
    *   For heat engines using steam (like Rankine cycle), understanding the properties of water/steam (enthalpy, entropy, specific volume) is crucial for analyzing the performance and efficiency of the engine. This links to CO5.

---

### 6. Important Points to Remember

*   **Heat engines operate in cycles.** This means the working fluid returns to its initial state after each cycle, and the net change in internal energy over a cycle is zero.
*   **Heat engines require a temperature difference.** They must operate between a high-temperature reservoir and a low-temperature reservoir.
*   **The First Law of Thermodynamics governs energy conservation in a heat engine cycle:** $W_{net,out} = Q_H - Q_L$.
*   **Thermal efficiency ($\eta_{th}$) quantifies performance:** $\eta_{th} = W_{net,out} / Q_H = 1 - Q_L / Q_H$.
*   **No heat engine can be 100% efficient.** This is a consequence of the Second Law of Thermodynamics.
*   **Increasing $Q_H$ or decreasing $Q_L$ (while keeping the other constant) increases thermal efficiency.** However, there are practical and thermodynamic limits.

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain, in your own words, why a heat engine cannot achieve 100% thermal efficiency. Relate your answer to the First and Second Laws of Thermodynamics.

**Answer:**
A heat engine cannot achieve 100% thermal efficiency due to the Second Law of Thermodynamics. The First Law states that energy is conserved ($Q_H - Q_L = W_{net,out}$). If an engine were 100% efficient, it would mean $W_{net,out} = Q_H$, which implies $Q_L = 0$. The Kelvin-Planck statement of the Second Law explicitly forbids a process whose sole effect is to transfer heat from a colder body to a hotter body, or equivalently, to convert heat completely into work in a cyclic process. Therefore, some heat ($Q_L$) must always be rejected to a low-temperature reservoir.

**Question 2 (Calculation):**
A heat engine absorbs 1500 kJ of heat from a high-temperature reservoir at 800 K and rejects 600 kJ of heat to a low-temperature reservoir at 300 K.
(a) Calculate the net work output of the heat engine.
(b) Calculate the thermal efficiency of the heat engine.
(c) Calculate the Carnot efficiency for this temperature range.

**Answer:**
Given:
$Q_H = 1500 \text{ kJ}$
$T_H = 800 \text{ K}$
$Q_L = 600 \text{ kJ}$
$T_L = 300 \text{ K}$

(a) Net work output:
Using the First Law: $W_{net,out} = Q_H - Q_L$
$W_{net,out} = 1500 \text{ kJ} - 600 \text{ kJ} = 900 \text{ kJ}$

(b) Thermal efficiency:
$\eta_{th} = \frac{W_{net,out}}{Q_H} = \frac{900 \text{ kJ}}{1500 \text{ kJ}} = 0.60$
$\eta_{th} = 60\%$

(c) Carnot efficiency:
The Carnot efficiency is the maximum possible efficiency for a heat engine operating between two temperatures:
$\eta_{Carnot} = 1 - \frac{T_L}{T_H}$
$\eta_{Carnot} = 1 - \frac{300 \text{ K}}{800 \text{ K}} = 1 - 0.375 = 0.625$
$\eta_{Carnot} = 62.5\%$

**Observation:** The actual efficiency (60%) is less than the Carnot efficiency (62.5%), as expected.

**Question 3 (Application):**
A power plant burns 10,000 kg of coal per hour, releasing $30,000,000 \text{ kJ/h}$ of heat. The plant generates $500,000 \text{ kJ/h}$ of work. The heat is rejected to a river at a constant temperature.
(a) Calculate the thermal efficiency of this power plant.
(b) How much heat is rejected to the river per hour?
(c) Is this power plant operating on a cycle? Explain.

**Answer:**
Given:
Heat input rate $\dot{Q}_H = 30,000,000 \text{ kJ/h}$
Net work output rate $\dot{W}_{net,out} = 500,000 \text{ kJ/h}$

(a) Thermal efficiency:
$\eta_{th} = \frac{\dot{W}_{net,out}}{\dot{Q}_H} = \frac{500,000 \text{ kJ/h}}{30,000,000 \text{ kJ/h}} = \frac{1}{60} \approx 0.0167$
$\eta_{th} \approx 1.67\%$

(b) Heat rejected to the river per hour:
Using the First Law: $\dot{W}_{net,out} = \dot{Q}_H - \dot{Q}_L$
$\dot{Q}_L = \dot{Q}_H - \dot{W}_{net,out}$
$\dot{Q}_L = 30,000,000 \text{ kJ/h} - 500,000 \text{ kJ/h} = 29,500,000 \text{ kJ/h}$

(c) Operation on a cycle:
Yes, a power plant operates on a thermodynamic cycle (e.g., the Rankine cycle for a steam power plant). This means that the working fluid (water/steam) undergoes a series of processes and returns to its initial state, allowing for continuous generation of work. The continuous input of heat and output of work, while the working fluid is recycled, is characteristic of cyclic operation.

---
This concludes the study notes for Heat Engines and Thermal Efficiency within Module 2 of Engineering Thermodynamics. Remember to consult your textbooks for more detailed explanations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
