---
title: "processes and cycles"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f3c"
status: "completed"
scrapedAt: "2026-05-20T17:53:16.245Z"
---
# Engineering Thermodynamics: Module 1 - Introduction and Basic Concepts: Processes and Cycles

## 1. Introduction to Processes and Cycles

This section introduces the fundamental concepts of thermodynamic processes and cycles, which are essential for understanding how energy is transferred and transformed in various engineering applications.

### 1.1 What is a Process?

*   **Definition:** A **process** is a transformation from one thermodynamic state to another. A **state** is a set of properties that uniquely define the condition of a system.
*   **Path:** The sequence of states through which a system passes during a process is called the **path** of the process.
*   **Notation:**
    *   A process is often denoted by a line connecting the initial and final states on a property diagram.
    *   The direction of the process is indicated by an arrow.
*   **Key Idea:** Thermodynamics deals with the changes in a system's state as it undergoes a process.

### 1.2 What is a Cycle?

*   **Definition:** A **cycle** is a process or a series of processes that start and end at the same initial state.
*   **Key Feature:** In a cycle, the system returns to its original condition.
*   **Importance:** Many thermodynamic devices operate in cycles, such as power plants and refrigeration systems. Analyzing cycles is crucial for evaluating their performance and efficiency.
*   **Example:** The **Carnot cycle** is a theoretical cycle used as a benchmark for the performance of heat engines.

### 1.3 Properties and State

*   **Properties:** **Properties** are characteristics of a system that can be observed and measured, such as pressure ($P$), temperature ($T$), volume ($V$), internal energy ($u$), enthalpy ($h$), and entropy ($s$).
*   **State:** The **state** of a system is defined by its properties at a given time. For a simple compressible system, two independent intensive properties are sufficient to fix the state. (Cengel, Boles, & Kanoğlu, 2011)
*   **Intensive Properties:** Properties that are independent of the mass of the system (e.g., temperature, pressure, density).
*   **Extensive Properties:** Properties that depend on the mass of the system (e.g., mass, volume, total energy).
*   **Specific Properties:** Extensive properties per unit mass (e.g., specific volume ($v$), specific internal energy ($u$), specific enthalpy ($h$)). These are intensive properties.

**Example:** A closed container of water at 25°C and 1 atm is in a specific state. If we heat it to 50°C, it undergoes a process to a new state.

### 1.4 Types of Processes

Thermodynamic processes can be classified based on how certain properties are held constant during the transformation.

#### 1.4.1 Quasi-equilibrium Process (Quasi-static Process)

*   **Definition:** A process that occurs so slowly and so smoothly that the system remains infinitesimally close to a state of equilibrium at all times.
*   **Characteristics:**
    *   The driving forces are only infinitesimally larger than the resisting forces.
    *   Such processes are idealized but provide a useful basis for analysis, as they allow us to define a unique path on property diagrams.
*   **Contrast:** A **non-quasi-equilibrium process** is one that involves significant unbalance of forces and occurs relatively rapidly.
*   **Importance:** Most analytical thermodynamic analyses assume quasi-equilibrium processes for simplicity. (Nag, 2017)

#### 1.4.2 Other Common Processes (Named Processes)

These are important to recognize as they appear frequently in thermodynamic analyses and cycles.

*   **Isothermal Process:**
    *   **Definition:** A process during which the temperature remains constant ($T = \text{constant}$).
    *   **Example:** The boiling of water at constant pressure is an isothermal process.
    *   **On a P-V Diagram:** Typically represented by a curve. For an ideal gas, this is a hyperbola ($Pv = \text{constant}$).

*   **Isobaric Process:**
    *   **Definition:** A process during which the pressure remains constant ($P = \text{constant}$).
    *   **Example:** Heating water in an open container.
    *   **On a P-V Diagram:** Represented by a horizontal line.

*   **Isochoric Process (Isometric Process):**
    *   **Definition:** A process during which the specific volume (or volume if the mass is constant) remains constant ($v = \text{constant}$ or $V = \text{constant}$).
    *   **Example:** Heating a rigid, sealed container.
    *   **On a P-V Diagram:** Represented by a vertical line.

*   **Adiabatic Process:**
    *   **Definition:** A process during which there is no heat transfer into or out of the system ($Q = 0$).
    *   **Key Point:** Adiabatic processes can be either reversible (isentropic) or irreversible.
    *   **Example:** Rapid compression or expansion of a gas in an insulated cylinder.

*   **Isentropic Process:**
    *   **Definition:** A process that is both **adiabatic** and **reversible**.
    *   **Key Property:** Entropy remains constant ($s = \text{constant}$).
    *   **Importance:** Represents the ideal efficiency for many processes involving fluid flow (e.g., turbine or compressor).
    *   **On a T-s Diagram:** Represented by a vertical line.

*   **Polytropic Process:**
    *   **Definition:** A process that follows the relationship $Pv^n = \text{constant}$, where 'n' is the polytropic exponent.
    *   **Significance:** This is a generalized process.
        *   If $n=1$, it's isothermal.
        *   If $n=0$, it's isobaric.
        *   If $n \to \infty$, it's isochoric.
        *   If $n=k$ (where $k = c_p/c_v$, the specific heat ratio), it's isentropic for ideal gases.
    *   **Example:** Many real-world compression and expansion processes can be approximated as polytropic.

### 1.5 Property Diagrams

*   **Definition:** Diagrams that plot one thermodynamic property against another. They are essential tools for visualizing and analyzing thermodynamic processes and cycles.
*   **Common Diagrams:**
    *   **P-V Diagram (Pressure-Volume Diagram):**
        *   $P$ on the y-axis, $V$ on the x-axis.
        *   Area under the curve represents the boundary work done by the system during expansion.
        *   Useful for visualizing work interactions in cycles.
    *   **T-s Diagram (Temperature-Entropy Diagram):**
        *   $T$ on the y-axis, $s$ on the x-axis.
        *   Area under the curve represents the heat transfer during a reversible process.
        *   Crucial for understanding thermal efficiency and entropy changes.
    *   **H-s Diagram (Enthalpy-Entropy Diagram or Mollier Diagram):**
        *   $h$ on the y-axis, $s$ on the x-axis.
        *   Useful for analyzing processes in turbines, compressors, and refrigeration cycles.
    *   **Other Diagrams:** T-v, P-T, h-T diagrams can also be used.

**Example:** An isobaric expansion of an ideal gas on a P-V diagram is a horizontal line. On a T-s diagram, it would generally be a curve, as temperature and entropy change.

## 2. Thermodynamic Cycles

### 2.1 Definition and Importance

*   **Definition:** A thermodynamic cycle consists of a series of processes that return the system to its initial state.
*   **Purpose:** Cycles are designed to transfer energy, typically heat, and convert it into useful work (heat engines) or to use work to transfer heat (refrigerators and heat pumps).
*   **Net Work:** For a cycle, the net work done is equal to the net heat transfer ($W_{net} = Q_{net}$). This is a direct consequence of the First Law of Thermodynamics applied to a cyclic process ($\oint dU = 0$).

### 2.2 Classification of Cycles

Thermodynamic cycles can be broadly classified based on their application and the nature of their processes.

#### 2.2.1 Power Cycles (Heat Engine Cycles)

*   **Purpose:** To produce net work from a net heat input.
*   **Direction of Heat Transfer:** Heat is absorbed from a high-temperature reservoir and rejected to a low-temperature reservoir.
*   **Efficiency:** Characterized by **thermal efficiency** ($\eta_{th}$), which is the ratio of net work output to the total heat input.
    *   $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{Q_{in} - Q_{out}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$
*   **Examples:**
    *   **Carnot Cycle:** The most efficient possible cycle operating between two temperature reservoirs. It consists of two isothermal and two isentropic processes.
    *   **Rankine Cycle:** The basis for most steam power plants. Involves phase change of the working fluid (water/steam).
    *   **Otto Cycle:** Ideal cycle for spark-ignition internal combustion engines.
    *   **Diesel Cycle:** Ideal cycle for compression-ignition internal combustion engines.
    *   **Brayton Cycle:** Ideal cycle for gas turbines and jet engines.

#### 2.2.2 Refrigeration and Heat Pump Cycles

*   **Purpose:** To transfer heat from a low-temperature region to a high-temperature region.
*   **Work Input:** Requires a net work input.
*   **Performance Measure:**
    *   **Refrigeration Cycle:** Measured by **Coefficient of Performance (COP$_R$)**, which is the ratio of the desired heat transfer (from the cold space) to the net work input.
        *   $COP_R = \frac{Q_L}{W_{net}} = \frac{Q_L}{Q_H - Q_L}$
    *   **Heat Pump Cycle:** Measured by **Coefficient of Performance (COP$_{HP}$)**, which is the ratio of the desired heat transfer (to the hot space) to the net work input.
        *   $COP_{HP} = \frac{Q_H}{W_{net}} = \frac{Q_H}{Q_H - Q_L}$
*   **Relationship:** $COP_{HP} = COP_R + 1$
*   **Examples:**
    *   **Vapor Compression Refrigeration Cycle:** The most common type of refrigeration system.
    *   **Gas Refrigeration Cycle (Brayton Cycle in reverse):** Used for very low-temperature applications.
    *   **Absorption Refrigeration Cycle:** Uses heat as the primary energy source.

### 2.3 Ideal vs. Real Cycles

*   **Ideal Cycles:** Assume reversible processes, no friction, and ideal working fluids. They provide a benchmark for performance.
*   **Real Cycles:** Involve irreversible processes (friction, heat loss, finite-rate processes), which reduce efficiency and performance.

**Important Point:** Understanding ideal cycles is crucial for developing a theoretical basis for analyzing and improving the performance of real engineering systems. (Sonntag, Borgnakke, & VanWylen, 2014)

## 3. Examples of Processes and Cycles

Let's illustrate some key concepts with examples.

### 3.1 Example: Isobaric Expansion of an Ideal Gas

Consider an ideal gas undergoing an isobaric expansion from state 1 to state 2.

*   **Process:** $P_1 = P_2 = \text{constant}$
*   **On P-V Diagram:** A horizontal line.
*   **Work Done:** For a quasi-equilibrium isobaric process, the boundary work is $W_b = \int_{V_1}^{V_2} P dV = P(V_2 - V_1)$.
*   **Heat Transfer:** For an ideal gas, $Q = m c_p (T_2 - T_1)$.

### 3.2 Example: Isothermal Compression of an Ideal Gas

Consider an ideal gas undergoing an isothermal compression from state 1 to state 2.

*   **Process:** $T_1 = T_2 = \text{constant}$
*   **On P-V Diagram:** A hyperbola ($Pv = \text{constant}$).
*   **Work Done:** For a quasi-equilibrium isothermal process, $W_b = \int_{V_1}^{V_2} P dV = \int_{V_1}^{V_2} \frac{mRT}{V} dV = mRT \ln\left(\frac{V_2}{V_1}\right) = mRT \ln\left(\frac{P_1}{P_2}\right)$.
*   **Heat Transfer:** For an ideal gas, internal energy change $\Delta u = 0$ for an isothermal process, so $Q = W_b$. Heat is rejected from the system.

### 3.3 Example: Carnot Cycle (A Theoretical Power Cycle)

*   **Processes:**
    1.  Isothermal expansion at $T_H$ (heat absorbed, $Q_H$).
    2.  Isentropic expansion (temperature drops from $T_H$ to $T_L$).
    3.  Isothermal compression at $T_L$ (heat rejected, $Q_L$).
    4.  Isentropic compression (temperature rises from $T_L$ to $T_H$).
*   **Thermal Efficiency:** $\eta_{th, Carnot} = 1 - \frac{T_L}{T_H}$ (where $T_L$ and $T_H$ are absolute temperatures). This is the maximum possible efficiency for any heat engine operating between these two temperatures. (Cengel, Boles, & Kanoğlu, 2011)

### 3.4 Example: Simple Vapor Compression Refrigeration Cycle

*   **Components:** Compressor, Condenser, Expansion Valve, Evaporator.
*   **Working Fluid:** A refrigerant (e.g., R-134a).
*   **Processes:**
    1.  **Compression:** Isentropic compression of vapor (work input).
    2.  **Condensation:** Isobaric and isothermal heat rejection to the surroundings.
    3.  **Expansion:** Throttling process (isenthalpic, $h_3 = h_4$), where pressure and temperature drop.
    4.  **Evaporation:** Isobaric and isothermal heat absorption from the cold space.
*   **Key Analysis Point:** The state of the refrigerant at each point (before/after compressor, condenser, evaporator) is critical for calculating work and heat transfer. Properties are often found using refrigerant tables or diagrams. (Moran & Shapiro, 2006)

## 4. Practice Questions and Exercises

**(Note: Answers are provided at the end of this section.)**

**Question 1 (CO1, K2):**
Define a thermodynamic process and a thermodynamic cycle. What is the fundamental difference between them?

**Question 2 (CO1, K2):**
What are the common named processes, and what property remains constant in each?
a) Isothermal
b) Isobaric
c) Isochoric
d) Adiabatic
e) Isentropic

**Question 3 (CO3, K3):**
An ideal gas is contained in a rigid, insulated vessel. The gas undergoes a process.
a) What type of process is this in terms of heat transfer?
b) What can you say about the volume during this process?
c) If the vessel is not insulated but the gas is heated such that its temperature remains constant, what type of process is this? What can you say about the heat transfer in this case?

**Question 4 (CO1, K2):**
Consider a P-V diagram for a process. What does the area under the curve represent? What does the area under the curve on a T-s diagram represent for a reversible process?

**Question 5 (CO1, K2, CO2):**
For a closed system undergoing a cycle, what is the net change in internal energy? How does this relate to the net heat transfer and net work transfer for the cycle?

**Question 6 (CO1, K2):**
A heat engine operates between a high temperature reservoir at 500 K and a low temperature reservoir at 300 K.
a) What is the maximum possible thermal efficiency it can achieve?
b) If the engine absorbs 1000 kJ of heat and rejects 600 kJ of heat, what is its thermal efficiency?

**Question 7 (CO1, K2):**
A refrigerator is to be used to maintain a space at 250 K while rejecting heat to the surroundings at 300 K.
a) What is the maximum possible COP$_R$ for this refrigerator?
b) If the refrigerator absorbs 500 kJ of heat from the cold space and requires 100 kJ of work input, what is its COP$_R$?

---

### Answers to Practice Questions

**Answer 1:**
*   **Thermodynamic Process:** A transformation from one thermodynamic state to another.
*   **Thermodynamic Cycle:** A series of processes that return the system to its initial state.
*   **Difference:** The key difference is that a process involves a change in the system's state, while a cycle involves a complete return to the starting state.

**Answer 2:**
a) **Isothermal:** Temperature ($T$) remains constant.
b) **Isobaric:** Pressure ($P$) remains constant.
c) **Isochoric:** Volume ($V$) or specific volume ($v$) remains constant.
d) **Adiabatic:** No heat transfer ($Q=0$).
e) **Isentropic:** Both adiabatic and reversible, so entropy ($s$) remains constant.

**Answer 3:**
a) Since the vessel is insulated, the heat transfer ($Q$) is zero. This is an **adiabatic** process.
b) The vessel is **rigid**, meaning its volume is constant. This is an **isochoric** process. Therefore, it is an adiabatic and isochoric process.
c) If the temperature remains constant during heating, it is an **isothermal** process. In this case, the heat transfer ($Q$) is not zero; it is equal to the work done by or on the system (for an ideal gas, $\Delta u = 0$). If it's heated in a constant volume vessel, it is isochoric and isothermal.

**Answer 4:**
*   **P-V Diagram:** The area under the curve represents the **boundary work** done by the system (during expansion) or on the system (during compression).
*   **T-s Diagram (Reversible Process):** The area under the curve represents the **heat transfer** ($Q_{rev} = \int T ds$).

**Answer 5:**
For a closed system undergoing a cycle, the net change in internal energy ($\Delta U_{cycle}$) is zero because the system returns to its initial state. According to the First Law of Thermodynamics, $\Delta U = Q_{net} - W_{net}$. Therefore, for a cycle, $0 = Q_{net} - W_{net}$, which means $Q_{net} = W_{net}$. The net heat transfer equals the net work transfer.

**Answer 6:**
a) Maximum possible thermal efficiency (Carnot efficiency):
$\eta_{th, Carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{300 \text{ K}}{500 \text{ K}} = 1 - 0.6 = 0.4$ or 40%.

b) Actual thermal efficiency:
$\eta_{th} = 1 - \frac{Q_{out}}{Q_{in}} = 1 - \frac{600 \text{ kJ}}{1000 \text{ kJ}} = 1 - 0.6 = 0.4$ or 40%.
*(In this case, the actual efficiency is equal to the Carnot efficiency, implying a reversible cycle).*

**Answer 7:**
a) Maximum possible COP$_R$ (Carnot COP$_R$):
$COP_{R, Carnot} = \frac{T_L}{T_H - T_L} = \frac{250 \text{ K}}{300 \text{ K} - 250 \text{ K}} = \frac{250}{50} = 5$.

b) Actual COP$_R$:
$COP_R = \frac{Q_L}{W_{net}} = \frac{500 \text{ kJ}}{100 \text{ kJ}} = 5$.
*(Again, the actual COP is equal to the Carnot COP, suggesting a reversible operation).*

## 5. Important Points to Remember

*   **States are defined by properties.** Two independent intensive properties define the state of a simple substance.
*   **Processes are changes between states.** Understanding the path is crucial for calculating work and heat.
*   **Cycles return to the initial state.** The net change in all properties for a cycle is zero.
*   **Property diagrams (P-V, T-s) are essential tools.** They help visualize work and heat transfer.
*   **Ideal cycles provide benchmarks.** Real cycles are less efficient due to irreversibilities.
*   **The First Law of Thermodynamics ($\Delta U = Q - W$) is fundamental** for analyzing processes and cycles. For a cycle, $\Delta U = 0$, so $Q_{net} = W_{net}$.
*   **Named processes (isothermal, isobaric, isochoric, adiabatic, isentropic)** are common and have specific characteristics that simplify analysis.
*   **The Carnot cycle sets the upper limit for efficiency** for heat engines and the upper limit for COP for refrigerators/heat pumps operating between two given temperatures.

This concludes Module 1, Topic: Processes and Cycles. A solid understanding of these concepts is foundational for all subsequent topics in Engineering Thermodynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
