---
title: "ideal COP of absorption system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f6c"
status: "completed"
scrapedAt: "2026-05-20T18:17:19.279Z"
---
# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Ideal COP of Absorption System

### 1. Introduction to Absorption Refrigeration Systems

Absorption refrigeration systems are thermal compression refrigeration systems that use a heat source (instead of a mechanical compressor) to drive the refrigeration cycle. They are particularly useful where waste heat is available or electricity is expensive.

**Key Concept:** Absorption systems use two refrigerants, one that evaporates at low pressure (the primary refrigerant) and another that absorbs the primary refrigerant (the absorbent).

**Comparison with Vapour Compression Systems:**
*   **Energy Input:** VCRS uses mechanical work for the compressor; ARS uses heat energy.
*   **Complexity:** ARS generally has more components and is more complex.
*   **Efficiency:** VCRS generally has higher COP than ARS, especially at lower temperatures.
*   **Applications:** ARS are suitable for applications with abundant waste heat, such as industrial processes, solar thermal energy, or combined heat and power (CHP) systems.

### 2. The Basic Absorption Refrigeration Cycle (LiBr-Water and Ammonia-Water Systems)

The most common absorption refrigeration systems are based on the following pairs:

*   **Lithium Bromide (LiBr) - Water:**
    *   **Refrigerant:** Water (evaporates at low pressure, creating the cooling effect).
    *   **Absorbent:** LiBr (absorbs water vapour).
    *   **Operating Pressure:** Water evaporates at very low pressure (sub-atmospheric) to achieve desired low temperatures. LiBr solution operates at higher pressures.
    *   **Limitations:** Cannot achieve temperatures below the freezing point of water (0°C).

*   **Ammonia (NH₃) - Water:**
    *   **Refrigerant:** Ammonia (evaporates at low pressure, creating the cooling effect).
    *   **Absorbent:** Water (absorbs ammonia vapour).
    *   **Operating Pressure:** Ammonia evaporates at low pressure (typically below atmospheric) and condenses at higher pressure. Water remains in liquid phase.
    *   **Advantages:** Can achieve much lower temperatures than LiBr-Water systems.

#### Components of a Basic Absorption System:

1.  **Evaporator:** Where the primary refrigerant (e.g., water or ammonia) absorbs heat and evaporates at low pressure, providing the cooling effect.
2.  **Absorber:** Where the weak solution of absorbent and refrigerant vapour mixes, and the absorbent absorbs the refrigerant vapour. This is an exothermic process, requiring heat rejection.
3.  **Generator (or Reboiler):** Where heat is supplied to the rich solution of absorbent and refrigerant. The refrigerant (e.g., water or ammonia) boils off, separating from the absorbent.
4.  **Rectifier (Optional, but usually present):** To remove any remaining absorbent from the refrigerant vapour before it goes to the condenser.
5.  **Condenser:** Where the primary refrigerant vapour is condensed into a liquid by rejecting heat.
6.  **Expansion Valve:** Reduces the pressure of the liquid refrigerant before it enters the evaporator.
7.  **Pump:** Circulates the weak and rich solutions between the absorber and generator.

### 3. Thermodynamic Analysis and Ideal COP of Absorption Systems

The Coefficient of Performance (COP) for an absorption refrigeration system is defined as:

$COP_{ARS} = \frac{\text{Desired Cooling Effect (Evaporator Heat absorbed)}}{\text{Heat Supplied to Generator} + \text{Net Work input (primarily for pump)}}$

Assuming the work input to the pump is negligible compared to the heat supplied to the generator (a common simplification for ideal analysis), the COP becomes:

$COP_{ARS} \approx \frac{\text{Evaporator Heat absorbed}}{\text{Heat Supplied to Generator}}$

Let's denote the heat absorbed in the evaporator as $Q_e$.
Let's denote the heat rejected in the condenser as $Q_c$.
Let's denote the heat rejected in the absorber as $Q_a$.
Let's denote the heat supplied to the generator as $Q_g$.

From the first law of thermodynamics applied to the entire system:
$Q_g + Q_e = Q_c + Q_a$ (ignoring pump work)

So, $COP_{ARS} = \frac{Q_e}{Q_g}$

#### Ideal Analysis of Absorption Systems:

The ideal analysis assumes reversible processes within the components and ideal behaviour of the working fluids. This is often conceptualized using a Carnot cycle or a sequence of Carnot-equivalent cycles.

**1. Carnot Analogy:**
An absorption system can be conceptually linked to two heat engines and a refrigerator. The heat supplied to the generator ($Q_g$) is used by a high-temperature heat engine to drive a low-temperature refrigerator. The heat rejected by this engine ($Q_{engine\_reject}$) is then used by a second heat engine operating between the absorber and condenser temperatures, and the work from this second engine is used to drive the primary refrigeration cycle. This is complex and often leads to a theoretical limit that is not easily achievable in practice.

A more direct approach for ideal COP involves considering the thermodynamic properties of the working fluids and ideal heat exchangers.

**2. Ideal COP based on Carnot Cycles (Simplified Approach):**

Consider a simplified model where the absorption system can be represented by a heat engine and a refrigerator working between temperature reservoirs.

*   Let $T_e$ be the temperature of the evaporator (cooling temperature).
*   Let $T_g$ be the temperature of the generator (heat source temperature).
*   Let $T_c$ be the temperature of the condenser (heat rejection temperature).
*   Let $T_a$ be the temperature of the absorber (heat rejection temperature).

In an ideal absorption system, the absorber and condenser operate at the same temperature, and the evaporator operates at its respective temperature. The generator operates at its heat source temperature. For ideal analysis, we assume $T_a = T_c$.

**Simplified Ideal COP Derivation:**

Imagine the absorption system is equivalent to a heat engine driving a vapor compression refrigeration cycle.

*   **Heat Engine:** Operates between $T_g$ (hot reservoir) and $T_a$ (cold reservoir, which is also the condenser temperature $T_c$). The work produced by this engine is used to drive a VCR.
    $COP_{HE} = \frac{W_{HE}}{Q_g} = \frac{T_g - T_a}{T_g}$ (Carnot COP for a heat engine)

*   **Vapor Compression Refrigerator:** Operates between $T_e$ (cold reservoir) and $T_c$ (hot reservoir, which is also the absorber temperature $T_a$).
    $COP_{VCR} = \frac{Q_e}{W_{VCR}} = \frac{T_e}{T_c - T_e}$ (Carnot COP for a refrigerator)

The work required by the VCR is $W_{VCR}$. In the ideal absorption system, this work is supplied by the heat engine: $W_{HE} = W_{VCR}$.
Therefore, $\frac{Q_g}{COP_{HE}} = \frac{Q_e}{COP_{VCR}}$.

Substituting the Carnot COPs:
$\frac{Q_g}{(T_g - T_a) / T_g} = \frac{Q_e}{T_e / (T_c - T_e)}$

Rearranging for $Q_e/Q_g$:
$\frac{Q_e}{Q_g} = \frac{T_e}{T_c - T_e} \times \frac{T_g - T_a}{T_g}$

Assuming $T_a = T_c$:
$COP_{ARS, ideal} = \frac{T_e}{T_c - T_e} \times \frac{T_g - T_c}{T_g}$

This formula represents the ideal COP of a two-stage absorption system or a system that is conceptually equivalent to a heat engine driving a VCR.

**Crucial Point (Arora, C.P. 4th Ed., Chapter 11, Section 11.16):**
The ideal COP of a **basic single-stage absorption system** is derived by considering the heat transfer processes in the absorber and generator. The ideal scenario often involves reversible processes and the absence of mixing losses.

The ideal COP can also be expressed by considering the thermodynamic availability (exergy) of the heat streams. However, for a direct thermodynamic analysis using heat quantities:

Let's consider the mass flow rates and enthalpies.
For an ideal system, the COP is determined by the temperature levels.

Consider the state points and the properties of the working fluids.
In an ideal LiBr-Water system:
*   Evaporator: Water evaporates at $T_e$. Heat absorbed $Q_e$.
*   Generator: Water is boiled off from LiBr solution at $T_g$. Heat supplied $Q_g$.
*   Condenser: Water vapour condenses at $T_c$. Heat rejected $Q_c$.
*   Absorber: Water vapour is absorbed by LiBr solution at $T_a$. Heat rejected $Q_a$.

A more rigorous ideal COP for a basic single-stage absorption system is derived from the first and second laws of thermodynamics applied to the components.

**Ideal COP of a Basic Single-Stage Absorption System (Arora, C.P. 4th Ed., Chapter 11, Section 11.16):**

The ideal COP is given by:

$COP_{ARS, ideal} = \frac{T_e (T_g - T_c)}{T_c (T_g - T_e)}$

Where:
*   $T_e$ = Evaporator Temperature (in Kelvin)
*   $T_g$ = Generator Temperature (in Kelvin)
*   $T_c$ = Condenser/Absorber Temperature (in Kelvin)

**Derivation based on Equilibrium and Reversible Processes:**
The derivation often involves relating the heat absorbed in the evaporator ($Q_e$) to the heat supplied in the generator ($Q_g$) through the properties of the working fluid mixture at different temperature levels, assuming equilibrium and no irreversibilities.

A key insight from the second law is that the net heat rejected must be at least equal to the heat absorbed plus the heat supplied.

**Example Application of the Ideal COP Formula:**
Let's consider a LiBr-Water system:
*   Evaporator temperature, $T_e = 5^\circ C = 278 K$.
*   Generator temperature, $T_g = 90^\circ C = 363 K$.
*   Condenser/Absorber temperature, $T_c = 35^\circ C = 308 K$.

$COP_{ARS, ideal} = \frac{278 (363 - 308)}{308 (363 - 278)}$
$COP_{ARS, ideal} = \frac{278 (55)}{308 (85)}$
$COP_{ARS, ideal} = \frac{15290}{26180}$
$COP_{ARS, ideal} \approx 0.584$

**Important Points to Remember about Ideal COP:**

*   **Temperature Dependence:** The ideal COP is highly dependent on the operating temperatures ($T_e, T_g, T_c$).
*   **$T_g$ Effect:** Increasing $T_g$ (generator temperature) generally increases the ideal COP, as more "useful" heat is available for the cycle.
*   **$T_c$ Effect:** Increasing $T_c$ (condenser/absorber temperature) decreases the ideal COP, as it makes heat rejection harder.
*   **$T_e$ Effect:** Increasing $T_e$ (evaporator temperature) also decreases the ideal COP, as the cooling effect is achieved at a less demanding temperature.
*   **Practical Limitations:** Real systems have lower COPs due to irreversibilities (heat transfer across finite temperature differences, pressure drops, mixing losses, pump inefficiencies, etc.).

### 4. Factors Affecting Real COP of Absorption Systems

*   **Heat Transfer Irreversibilities:** All heat exchangers (evaporator, absorber, generator, condenser) operate with finite temperature differences, leading to irreversibilities.
*   **Pressure Drops:** Pressure drops in pipes and components reduce the effectiveness of the cycle.
*   **Mixing Losses:** In the absorber, mixing of refrigerant vapour with the absorbent solution is not perfectly reversible.
*   **Pumps:** Pumps require work input, and their efficiency is not 100%.
*   **Solution Imperfections:** Deviations from ideal thermodynamic behaviour of the LiBr-Water or Ammonia-Water solutions.
*   **Rectifier Efficiency:** Incomplete separation of refrigerant from absorbent can reduce efficiency.
*   **External Heat Losses/Gains:** Heat exchange with the surroundings.

### 5. Multi-Stage and Multi-Effect Absorption Systems

To improve COP, multi-stage and multi-effect systems are employed.

*   **Multi-Stage Compression:** Not applicable in the same way as VCR. Instead, it refers to multi-stage absorption.
*   **Multi-Effect Systems:** These systems use multiple generators operating at different pressures and temperatures to increase the overall COP. By utilizing the latent heat of condensation from one stage in another, they can achieve higher COPs. A double-effect system can have ideal COPs around 1.0 to 1.5.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. Practical Examples and Textual References

*   **Arora C.P. (2021), 4th Edition:** Chapter 11, "Absorption Refrigeration Systems," specifically sections dealing with the thermodynamic analysis and COP of basic and advanced absorption cycles. The ideal COP formula $COP_{ARS, ideal} = \frac{T_e (T_g - T_c)}{T_c (T_g - T_e)}$ is a standard result discussed.
*   **Ramesh Chandra Arora (2015), 4th Printing:** Similar coverage to C.P. Arora, focusing on the fundamental principles and thermodynamic analysis.
*   **A. Ameen (2020):** Provides clear explanations of the absorption cycle components and the factors influencing COP.
*   **W. P. Jones (2001), 5th Edition:** Chapter 9, "Absorption Refrigeration," offers a detailed thermodynamic treatment and discussion of ideal cycles.

### 7. Practice Questions and Exercises

**Question 1:**
Calculate the ideal COP of a single-stage absorption refrigeration system operating with the following temperatures:
*   Evaporator temperature: $0^\circ C$
*   Generator temperature: $100^\circ C$
*   Condenser/Absorber temperature: $30^\circ C$

**Answer:**
First, convert temperatures to Kelvin:
$T_e = 0^\circ C = 273.15 K$
$T_g = 100^\circ C = 373.15 K$
$T_c = 30^\circ C = 303.15 K$

Using the ideal COP formula:
$COP_{ARS, ideal} = \frac{T_e (T_g - T_c)}{T_c (T_g - T_e)}$
$COP_{ARS, ideal} = \frac{273.15 (373.15 - 303.15)}{303.15 (373.15 - 273.15)}$
$COP_{ARS, ideal} = \frac{273.15 (70)}{303.15 (100)}$
$COP_{ARS, ideal} = \frac{19120.5}{30315}$
$COP_{ARS, ideal} \approx 0.631$

**Question 2:**
How would an increase in the generator temperature affect the ideal COP of an absorption refrigeration system? Explain using the ideal COP formula.

**Answer:**
The ideal COP formula is:
$COP_{ARS, ideal} = \frac{T_e (T_g - T_c)}{T_c (T_g - T_e)}$

Let's rewrite the formula:
$COP_{ARS, ideal} = \frac{T_e}{T_c} \times \frac{T_g - T_c}{T_g - T_e}$

The term $\frac{T_g - T_c}{T_g - T_e}$ is a multiplier.
As $T_g$ increases, the numerator $(T_g - T_c)$ increases, and the denominator $(T_g - T_e)$ also increases.
Let's examine the derivative with respect to $T_g$ or consider the fractional change:
If $T_g$ increases, $(T_g - T_c)$ becomes larger, and $(T_g - T_e)$ also becomes larger.

Consider the fraction $\frac{T_g - T_c}{T_g - T_e}$.
Let $f(T_g) = \frac{T_g - T_c}{T_g - T_e}$.
If $T_g$ increases, both the numerator and denominator increase. However, the increase in the numerator (difference from $T_c$) is generally greater than the increase in the denominator (difference from $T_e$, which is usually lower than $T_c$).
Mathematically, the derivative $\frac{df}{dT_g} = \frac{(T_g - T_e) - (T_g - T_c)}{(T_g - T_e)^2} = \frac{T_c - T_e}{(T_g - T_e)^2}$.
Since $T_c > T_e$, the derivative is positive. This means the fraction increases as $T_g$ increases.
Therefore, an increase in the generator temperature ($T_g$) will increase the ideal COP of an absorption refrigeration system. This is because a higher generator temperature provides more "useful" heat energy to drive the separation process, making the cycle more efficient.

**Question 3 (Conceptual):**
Why is the COP of an absorption system typically lower than that of a comparable vapour compression system operating at similar temperature ranges?

**Answer:**
The COP of an absorption system is generally lower than a vapour compression system primarily because the energy input is in the form of heat, not work. Heat is inherently less "valuable" (has lower exergy) than work. The conversion of heat into the necessary work (even indirectly through a heat engine) involves thermodynamic losses that are not present in a direct mechanical compression. The ideal COP of a vapour compression system (Carnot COP) is $T_e / (T_c - T_e)$, which is usually higher than the ideal COP of a basic absorption system, $T_e (T_g - T_c) / (T_c (T_g - T_e))$, especially when $T_g$ is not significantly higher than $T_c$.

### 8. Alignment with Course Outcomes

*   **CO1 (K2, K4):** This topic directly addresses the basic concepts and applications of absorption refrigeration systems and the analysis of their performance using ideal COP.
*   **CO3 (K3, K4):** The core of this topic is the thermodynamic analysis of absorption systems, including the derivation and application of the ideal COP.
*   **CO4 (K2, K3):** While not directly about selecting refrigerants or components, understanding the ideal COP is crucial for evaluating system performance and making informed component selections.

---
**End of Notes**
---