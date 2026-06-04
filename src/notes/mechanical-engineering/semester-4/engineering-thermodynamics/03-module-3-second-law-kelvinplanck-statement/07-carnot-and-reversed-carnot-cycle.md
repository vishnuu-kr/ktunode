---
title: "Carnot and Reversed Carnot cycle"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f5e"
status: "completed"
scrapedAt: "2026-05-20T17:53:38.746Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin–Planck Statement

## Topic: Carnot and Reversed Carnot Cycle

This module delves into the foundational principles of the Second Law of Thermodynamics, focusing on the Kelvin–Planck statement. We will explore the theoretical limits of efficiency imposed by this law and introduce the Carnot cycle, a benchmark for all heat engines, and its inverse, the Reversed Carnot cycle, crucial for refrigeration and heat pump applications.

---

### 1. Introduction to the Second Law of Thermodynamics

The Second Law of Thermodynamics governs the direction of natural processes and establishes limitations on the conversion of heat into work. It introduces the concept of irreversibility and the tendency towards entropy increase.

**Key Concepts:**

*   **Heat Reservoir (Thermal Reservoir):** A body of matter and energy whose temperature remains constant despite the transfer of large amounts of heat. It can either supply or absorb heat.
    *   **Source:** A reservoir that supplies heat.
    *   **Sink:** A reservoir that absorbs heat.
*   **Heat Engine:** A device that operates in a cycle and produces net work by transferring heat from a high-temperature reservoir to a low-temperature reservoir.
*   **Refrigerator:** A device that operates in a cycle and produces net work to transfer heat from a low-temperature reservoir to a high-temperature reservoir.
*   **Heat Pump:** A device that operates in a cycle and produces net work to transfer heat from a low-temperature reservoir to a high-temperature reservoir (similar to a refrigerator, but the primary purpose is heating).

**Kelvin–Planck Statement of the Second Law:**

"It is impossible for any device that operates in a cycle to receive heat from a single reservoir and produce a net amount of work."

*   **Implication:** This statement implies that any device producing net work from a heat source must reject some heat to a colder reservoir. Therefore, a 100% efficient heat engine is impossible.
*   **Relation to Course Outcomes:** This directly addresses **CO2: Understand the laws of thermodynamics**.

**Cengel et al., Chapter 6:** Introduces the Second Law and its statements, including Kelvin–Planck, and defines heat engines, refrigerators, and heat pumps.

**P.K. Nag, Chapter 6:** Provides a thorough explanation of the Second Law, its postulates, and the basic heat engine and refrigerator concepts.

---

### 2. The Carnot Cycle

The Carnot cycle, proposed by Sadi Carnot, is a theoretical thermodynamic cycle consisting of four reversible processes. It represents the most efficient possible cycle for converting heat into work between two temperature reservoirs.

**The Carnot Cycle consists of:**

1.  **Isothermal Expansion (Process 1-2):**
    *   The working substance absorbs heat ($Q_H$) from the high-temperature reservoir ($T_H$) and expands isothermally at constant temperature.
    *   Work is done by the system during expansion.
    *   **Thermodynamic Property Change:** Entropy increases.
    *   **Equation:** $Q_H = W_{12}$ (for ideal gas, $Q_H = n R T_H \ln \frac{V_2}{V_1}$)
    *   **Textbook Reference:** Cengel et al., Fig. 6.5; P.K. Nag, Fig. 6.3.

2.  **Adiabatic Expansion (Process 2-3):**
    *   The working substance is insulated, and it expands adiabatically.
    *   Temperature of the working substance decreases from $T_H$ to $T_L$.
    *   Work is done by the system during expansion.
    *   **Thermodynamic Property Change:** Entropy remains constant.
    *   **Equation:** $Q_{23} = 0$

3.  **Isothermal Compression (Process 3-4):**
    *   The working substance rejects heat ($Q_L$) to the low-temperature reservoir ($T_L$) and is compressed isothermally at constant temperature.
    *   Work is done on the system during compression.
    *   **Thermodynamic Property Change:** Entropy decreases.
    *   **Equation:** $Q_L = W_{34}$ (for ideal gas, $Q_L = n R T_L \ln \frac{V_4}{V_3}$) (Note: $Q_L$ is absorbed by the reservoir, so the system rejects heat).

4.  **Adiabatic Compression (Process 4-1):**
    *   The working substance is insulated, and it is compressed adiabatically.
    *   Temperature of the working substance increases from $T_L$ to $T_H$.
    *   Work is done on the system during compression.
    *   **Thermodynamic Property Change:** Entropy remains constant.
    *   **Equation:** $Q_{41} = 0$

**T-s Diagram of Carnot Cycle:**

*   The Carnot cycle is represented by a rectangle on a Temperature-Entropy (T-s) diagram.
*   The area under the upper horizontal line ($T_H$) represents the heat absorbed ($Q_H$).
*   The area under the lower horizontal line ($T_L$) represents the heat rejected ($Q_L$).
*   The area enclosed by the rectangle represents the net work output ($W_{net}$).

    **(Imagine a rectangle with vertices (s1, TH), (s2, TH), (s3, TL), (s4, TL) where s1=s4 and s2=s3. The top side is isothermal expansion, bottom is isothermal compression, vertical sides are adiabatic processes.)**

**Net Work Output of Carnot Cycle:**

$W_{net} = Q_H - Q_L$

**Thermal Efficiency ($\eta_{Carnot}$):**

The thermal efficiency of a heat engine is defined as the ratio of the net work output to the heat input from the high-temperature reservoir.

$\eta_{Carnot} = \frac{W_{net}}{Q_H} = \frac{Q_H - Q_L}{Q_H} = 1 - \frac{Q_L}{Q_H}$

For a reversible cycle (like Carnot), the ratio of heat transfers is equal to the ratio of absolute temperatures of the reservoirs:

$\frac{Q_L}{Q_H} = \frac{T_L}{T_H}$

Therefore, the Carnot efficiency is given by:

$\eta_{Carnot} = 1 - \frac{T_L}{T_H}$

*   $T_H$: Absolute temperature of the high-temperature reservoir (Kelvin or Rankine).
*   $T_L$: Absolute temperature of the low-temperature reservoir (Kelvin or Rankine).

**Important Points to Remember:**

*   The Carnot efficiency is the **maximum possible efficiency** for any heat engine operating between two given temperatures $T_H$ and $T_L$.
*   The efficiency depends **only on the temperatures of the reservoirs**, not on the working substance.
*   To achieve higher efficiency, one must increase $T_H$ or decrease $T_L$.

**Relation to Course Outcomes:**

*   **CO1: Understand basic concepts of thermodynamics:** Understanding of heat engines, reservoirs, work, and heat.
*   **CO2: Understand the laws of thermodynamics:** Direct application of the Second Law's implications on efficiency.
*   **CO3: Conduct first law analysis of open and closed systems:** The work and heat transfer calculations for each process in the Carnot cycle are a form of First Law analysis.
*   **CO5: Determine the properties of pure substances:** While the Carnot cycle is often explained with ideal gases, its principles apply to any working substance where these reversible processes can be approximated.

**Cengel et al., Chapter 6:** Focuses on the Carnot cycle, its efficiency, and its significance as a theoretical benchmark.
**P.K. Nag, Chapter 6:** Provides detailed derivations of Carnot cycle analysis and its efficiency.
**Moran & Shapiro, Chapter 5:** Discusses the Carnot cycle in the context of thermodynamic irreversibility and maximum efficiency.
**Sonntag et al., Chapter 5:** Explains the Carnot cycle and its relation to the Second Law, often using graphical representations.

**Example:**

A Carnot heat engine operates between a high-temperature reservoir at 600 K and a low-temperature reservoir at 300 K. If it receives 1000 kJ of heat from the high-temperature reservoir, determine:
a) The thermal efficiency of the engine.
b) The net work output.
c) The heat rejected to the low-temperature reservoir.

**Solution:**

Given: $T_H = 600$ K, $T_L = 300$ K, $Q_H = 1000$ kJ

a) **Thermal efficiency:**
   $\eta_{Carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{300 \text{ K}}{600 \text{ K}} = 1 - 0.5 = 0.5$ or 50%

b) **Net work output:**
   $W_{net} = \eta_{Carnot} \times Q_H = 0.5 \times 1000 \text{ kJ} = 500 \text{ kJ}$

c) **Heat rejected:**
   $W_{net} = Q_H - Q_L$
   $500 \text{ kJ} = 1000 \text{ kJ} - Q_L$
   $Q_L = 1000 \text{ kJ} - 500 \text{ kJ} = 500 \text{ kJ}$

   Alternatively, using the temperature ratio:
   $\frac{Q_L}{Q_H} = \frac{T_L}{T_H} \implies Q_L = Q_H \times \frac{T_L}{T_H} = 1000 \text{ kJ} \times \frac{300 \text{ K}}{600 \text{ K}} = 500 \text{ kJ}$

---

### 3. The Reversed Carnot Cycle

The Reversed Carnot cycle is the inverse of the Carnot cycle. It is used in refrigeration and heat pump applications to transfer heat from a low-temperature reservoir to a high-temperature reservoir. It requires a net work input.

**The Reversed Carnot Cycle consists of:**

1.  **Isothermal Compression (Process 1-2):**
    *   The working substance absorbs heat ($Q_L$) from the low-temperature reservoir ($T_L$) and is compressed isothermally at constant temperature.
    *   Work is done on the system during compression.
    *   **Thermodynamic Property Change:** Entropy decreases.

2.  **Adiabatic Compression (Process 2-3):**
    *   The working substance is insulated, and it is compressed adiabatically.
    *   Temperature of the working substance increases from $T_L$ to $T_H$.
    *   Work is done on the system during compression.
    *   **Thermodynamic Property Change:** Entropy remains constant.

3.  **Isothermal Expansion (Process 3-4):**
    *   The working substance rejects heat ($Q_H$) to the high-temperature reservoir ($T_H$) and expands isothermally at constant temperature.
    *   Work is done by the system during expansion.
    *   **Thermodynamic Property Change:** Entropy increases.

4.  **Adiabatic Expansion (Process 4-1):**
    *   The working substance is insulated, and it expands adiabatically.
    *   Temperature of the working substance decreases from $T_H$ to $T_L$.
    *   Work is done by the system during expansion.
    *   **Thermodynamic Property Change:** Entropy remains constant.

**T-s Diagram of Reversed Carnot Cycle:**

*   The Reversed Carnot cycle is also represented by a rectangle on a T-s diagram, but traversed in the opposite direction.
*   The area under the lower horizontal line ($T_L$) represents the heat absorbed from the cold reservoir ($Q_L$).
*   The area under the upper horizontal line ($T_H$) represents the heat rejected to the hot reservoir ($Q_H$).
*   The area enclosed by the rectangle represents the net work input ($W_{in}$).

    **(Imagine a rectangle with vertices (s1, TH), (s2, TH), (s3, TL), (s4, TL) where s1=s4 and s2=s3. The bottom side is isothermal expansion, top is isothermal compression, vertical sides are adiabatic processes. The cycle direction is reversed compared to the Carnot heat engine.)**

**Net Work Input of Reversed Carnot Cycle:**

$W_{in} = Q_H - Q_L$

**Performance Measures for Reversed Cycles:**

Unlike efficiency, performance is measured by a **Coefficient of Performance (COP)**.

**Coefficient of Performance for Refrigeration (COPR):**

The COPR is defined as the ratio of the desired output (heat removed from the cold space) to the required input (net work input).

$COPR = \frac{Q_L}{W_{in}} = \frac{Q_L}{Q_H - Q_L}$

For a reversible cycle (Reversed Carnot):

$COPR_{Carnot} = \frac{Q_L}{Q_H - Q_L} = \frac{T_L}{T_H - T_L}$

*   **Implication:** COPR is always greater than 1, indicating that more heat can be removed from the cold space than the work input.

**Coefficient of Performance for Heat Pump (COPHP):**

The COPHP is defined as the ratio of the desired output (heat delivered to the hot space) to the required input (net work input).

$COPHP = \frac{Q_H}{W_{in}} = \frac{Q_H}{Q_H - Q_L}$

For a reversible cycle (Reversed Carnot):

$COPHP_{Carnot} = \frac{Q_H}{Q_H - Q_L} = \frac{T_H}{T_H - T_L}$

*   **Relationship between COPs:** $COPHP = COPR + 1$

**Important Points to Remember:**

*   The Reversed Carnot cycle provides the **maximum possible COP** for a refrigerator or heat pump operating between two given temperatures.
*   The COP depends **only on the temperatures of the reservoirs**.
*   To achieve a higher COP, one must decrease the temperature difference ($T_H - T_L$), i.e., bring the reservoirs closer in temperature.

**Relation to Course Outcomes:**

*   **CO1: Understand basic concepts of thermodynamics:** Understanding of refrigerators, heat pumps, work input, heat transfer.
*   **CO2: Understand the laws of thermodynamics:** Illustrates the work input requirement for transferring heat against its natural flow.
*   **CO3: Conduct first law analysis of open and closed systems:** Work and heat transfer calculations are based on the First Law.
*   **CO5: Determine the properties of pure substances:** Applicable to understanding refrigerant cycles.

**Cengel et al., Chapter 6:** Details the Reversed Carnot cycle, COPR, and COPHP, and their theoretical limits.
**P.K. Nag, Chapter 6:** Explains the reversed cycles with derivations for COPs.
**Moran & Shapiro, Chapter 5:** Discusses the reversed Carnot cycle and its COP in the context of Second Law limitations.
**Sonntag et al., Chapter 5:** Covers the reversed Carnot cycle and its performance metrics.

**Example:**

A Carnot refrigerator is used to maintain a food storage compartment at 4°C by removing heat from it and rejecting it to the surroundings at 25°C. If the refrigerator consumes 1.2 kW of power, determine:
a) The COPR of the refrigerator.
b) The rate of heat removed from the cold space.
c) The rate of heat rejected to the surroundings.

**Solution:**

Given: $T_L = 4$°C = $4 + 273.15 = 277.15$ K, $T_H = 25$°C = $25 + 273.15 = 298.15$ K, $W_{in} = 1.2$ kW

a) **COPR of the refrigerator:**
   $COPR_{Carnot} = \frac{T_L}{T_H - T_L} = \frac{277.15 \text{ K}}{298.15 \text{ K} - 277.15 \text{ K}} = \frac{277.15}{21} \approx 13.20$

b) **Rate of heat removed from the cold space ($Q_L$):**
   $COPR = \frac{Q_L}{W_{in}}$
   $Q_L = COPR \times W_{in} = 13.20 \times 1.2 \text{ kW} \approx 15.84 \text{ kW}$

c) **Rate of heat rejected to the surroundings ($Q_H$):**
   $W_{in} = Q_H - Q_L$
   $Q_H = W_{in} + Q_L = 1.2 \text{ kW} + 15.84 \text{ kW} \approx 17.04 \text{ kW}$

   Alternatively, using the temperature ratio for $Q_H$:
   $\frac{Q_H}{Q_L} = \frac{T_H}{T_L} \implies Q_H = Q_L \times \frac{T_H}{T_L} = 15.84 \text{ kW} \times \frac{298.15 \text{ K}}{277.15 \text{ K}} \approx 17.04 \text{ kW}$

---

### 4. Carnot's Theorem

Carnot's theorem is a fundamental theorem in thermodynamics that builds upon the Carnot cycle. It has two parts:

**Part 1:** "No heat engine operating between two heat reservoirs can be more efficient than a reversible heat engine operating between the same two reservoirs."

*   **Implication:** The Carnot engine represents the theoretical maximum efficiency. Any real-world engine will have lower efficiency due to irreversibilities.
*   **Relation to Course Outcomes:** **CO2: Understand the laws of thermodynamics**, establishing the limit imposed by the Second Law.

**Part 2:** "All reversible heat engines operating between the same two heat reservoirs have the same efficiency."

*   **Implication:** The efficiency of a reversible heat engine depends only on the temperatures of the reservoirs, not on the working substance or the design of the engine. This is why the Carnot efficiency formula is so general.
*   **Relation to Course Outcomes:** **CO2: Understand the laws of thermodynamics**.

**Cengel et al., Chapter 6:** States and explains Carnot's Theorem.
**P.K. Nag, Chapter 6:** Provides proofs for Carnot's Theorem.
**Moran & Shapiro, Chapter 5:** Discusses Carnot's Theorem in the context of establishing efficiency limits.

---

### 5. Practice Questions and Exercises

**Question 1:**
A power plant operates on a Carnot cycle between a high-temperature reservoir at 550°C and a low-temperature reservoir at 25°C. It generates 150 MW of power. Calculate:
a) The thermal efficiency of the power plant.
b) The amount of heat that must be supplied from the high-temperature reservoir per unit time.
c) The amount of heat that must be rejected to the low-temperature reservoir per unit time.

**Answer 1:**
Given: $T_H = 550^\circ\text{C} = 550 + 273.15 = 823.15$ K
$T_L = 25^\circ\text{C} = 25 + 273.15 = 298.15$ K
$W_{net} = 150$ MW

a) **Thermal efficiency:**
   $\eta_{Carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{298.15 \text{ K}}{823.15 \text{ K}} \approx 1 - 0.362 = 0.638$ or 63.8%

b) **Heat supplied ($Q_H$):**
   $W_{net} = \eta_{Carnot} \times Q_H$
   $Q_H = \frac{W_{net}}{\eta_{Carnot}} = \frac{150 \text{ MW}}{0.638} \approx 235.1$ MW

c) **Heat rejected ($Q_L$):**
   $W_{net} = Q_H - Q_L$
   $Q_L = Q_H - W_{net} = 235.1 \text{ MW} - 150 \text{ MW} \approx 85.1$ MW

**Question 2:**
A Carnot refrigerator is used to cool a space to -5°C. The heat is rejected to the ambient air at 20°C. If the COP of the refrigerator is 5.0, determine:
a) The amount of heat that must be removed from the cold space per kJ of work input.
b) The actual COP if the refrigerator operated on the Carnot cycle.
c) What would be the COP of a Carnot heat pump operating between the same two temperatures?

**Answer 2:**
Given: $T_L = -5^\circ\text{C} = -5 + 273.15 = 268.15$ K
$T_H = 20^\circ\text{C} = 20 + 273.15 = 293.15$ K
$COPR_{actual} = 5.0$

a) **Heat removed from cold space per kJ of work input ($Q_L/W_{in}$):**
   By definition, $COPR = \frac{Q_L}{W_{in}}$. So, the amount of heat removed from the cold space per kJ of work input is equal to the COPR.
   $Q_L/W_{in} = 5.0$ kJ/kJ

b) **Actual COP if operated on Carnot cycle:**
   $COPR_{Carnot} = \frac{T_L}{T_H - T_L} = \frac{268.15 \text{ K}}{293.15 \text{ K} - 268.15 \text{ K}} = \frac{268.15}{25} \approx 10.73$

c) **COP of a Carnot heat pump ($COPHP_{Carnot}$):**
   $COPHP_{Carnot} = \frac{T_H}{T_H - T_L} = \frac{293.15 \text{ K}}{293.15 \text{ K} - 268.15 \text{ K}} = \frac{293.15}{25} \approx 11.73$
   Alternatively, $COPHP_{Carnot} = COPR_{Carnot} + 1 = 10.73 + 1 = 11.73$.

---

### 6. Important Points to Remember

*   **Kelvin–Planck Statement:** No heat engine can convert heat entirely into work in a cycle. Some heat must be rejected to a colder reservoir.
*   **Carnot Cycle:** A theoretical cycle of four reversible processes (isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression).
*   **Carnot Efficiency:** $\eta_{Carnot} = 1 - \frac{T_L}{T_H}$. It's the maximum possible efficiency for any heat engine operating between $T_H$ and $T_L$.
*   **Reversed Carnot Cycle:** The inverse cycle for refrigeration and heat pumps.
*   **COPR:** $\frac{Q_L}{W_{in}} = \frac{T_L}{T_H - T_L}$. Maximum possible COP for a refrigerator.
*   **COPHP:** $\frac{Q_H}{W_{in}} = \frac{T_H}{T_H - T_L}$. Maximum possible COP for a heat pump.
*   **Carnot's Theorem:** Establishes that the Carnot engine sets the upper limit for efficiency and that all reversible engines between the same reservoirs are equally efficient.
*   **Absolute Temperatures:** Always use absolute temperatures (Kelvin or Rankine) in Carnot efficiency and COP calculations.

---

### 7. Alignment with Course Outcomes

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** This topic is fundamental to understanding heat engines, refrigerators, heat pumps, work, heat, and thermal reservoirs.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** The entire discussion on Carnot cycles directly relates to the implications of the Second Law of Thermodynamics, particularly the Kelvin–Planck statement and Carnot's Theorem.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** While the focus is on the cycle, the calculation of heat and work transfers in each process and for the cycle as a whole are direct applications of the First Law of Thermodynamics.
*   **CO4: Determine entropy changes associated with different processes (K3):** The adiabatic processes in the Carnot cycle are by definition isentropic (constant entropy), and the isothermal processes involve entropy changes directly proportional to the heat transfer and temperature, which can be calculated using $\Delta S = Q/T$.
*   **CO5: Determine the properties of pure substances (K2, K3):** Although often illustrated with ideal gases, the principles of the Carnot cycle apply to any working substance. Understanding these cycles is a precursor to analyzing more practical cycles like the Rankine or vapor-compression refrigeration cycles, which use pure substances (e.g., water, refrigerants).

---

This concludes the study notes for the Carnot and Reversed Carnot cycle. A deep understanding of these concepts is crucial for comprehending the limitations and possibilities within thermodynamic systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
