---
title: "Short Circuit Analysis  – Symmetrical Faults and Unsymmetrical Faults"
subject: "POWER SYSTEM LAB"
module: "Module 5: Short Circuit Analysis  – Symmetrical Faults and Unsymmetrical Faults"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367e9"
status: "completed"
scrapedAt: "2026-05-23T16:30:54.500Z"
---
# Power System Lab: Module 5 - Short Circuit Analysis (Symmetrical & Unsymmetrical Faults)

## 1. Introduction to Short Circuit Analysis

**Definition:** A short circuit is an unintended low-impedance path that allows electric current to flow between two or more points of a circuit where it is not supposed to flow. This bypasses the normal load, leading to excessively high currents.

**Importance in Power Systems:**
*   **Equipment Protection:** Understanding fault currents is crucial for selecting appropriate protective relays and circuit breakers to safely interrupt these high currents and prevent damage to power system equipment.
*   **System Stability:** Severe short circuits can lead to voltage collapse and loss of synchronism in generators, jeopardizing system stability.
*   **Equipment Rating:** The interrupting capacity of switchgear is determined by the maximum short circuit currents it might encounter.
*   **System Planning:** Short circuit analysis is vital for the proper design and expansion of power systems, ensuring adequate capacity and reliability.

**Knowledge Level Alignment:**
*   **CO1 (K3):** This topic directly supports CO1 by requiring the development of mathematical models (using per-unit systems and sequence networks) and conducting steady-state analysis of fault conditions. While the lab might not involve complex transient analysis in this module, the understanding of initial fault currents builds towards it.
*   **CO2 (K3):** While CO2 focuses on component testing, understanding the *effects* of faults on these components (e.g., heating, mechanical stress) is a prerequisite for designing and interpreting tests.

## 2. Symmetrical Faults

**Definition:** A symmetrical fault is a fault where all three phases are short-circuited together. These are the least common but often the most severe type of fault in terms of fault current magnitude.

**Types of Symmetrical Faults:**
*   **Three-Phase to Ground Fault (Line-to-Line-to-Line-to-Ground):** All three conductors are shorted to each other and to ground.
*   **Three-Phase Line-to-Line Fault (Line-to-Line-to-Line):** All three conductors are shorted together, but not to ground.

**Analysis using Per-Unit System:**
The per-unit system is a normalized system that simplifies calculations by expressing all quantities as fractions of base values.
*   **Per-Unit Value = Actual Value / Base Value**
*   **Benefits:** Per-unit impedance values of transformers are independent of voltage and current ratings, making it easier to combine impedances from different voltage levels.

**Sequence Networks:**
To analyze unsymmetrical faults, we decompose the power system into three sets of networks:
*   **Positive Sequence Network:** Represents the normal, balanced operating conditions of the system. It consists of positive sequence impedances of generators, transformers, transmission lines, etc.
*   **Negative Sequence Network:** Represents the unbalanced conditions caused by faults. It has similar structure to the positive sequence network but with negative sequence impedances. Generators typically have different negative sequence impedances than positive sequence impedances.
*   **Zero Sequence Network:** Represents the path of current flow during ground faults. It consists of zero sequence impedances of generators, transformers, and transmission lines. The zero sequence network is often different from the positive and negative sequence networks due to transformer connections and grounding practices.

**Analysis of Symmetrical Faults:**
For symmetrical faults, the system remains balanced. Therefore, we only need to consider the **positive sequence network**.
*   **Procedure:**
    1.  Convert all system impedances to per-unit values on a common base.
    2.  Draw the positive sequence network of the power system, including generators, transformers, and transmission lines.
    3.  Represent generators as their positive sequence internal voltage ($E_a$) in series with their positive sequence impedance ($Z_1$).
    4.  Represent transformers by their per-unit leakage reactances.
    5.  Represent transmission lines by their per-unit series impedances.
    6.  Assume the fault location and connect the positive sequence network to ground through a zero impedance fault (for three-phase to ground) or directly short the phases (for three-phase line-to-line).
    7.  Calculate the fault current by applying Kirchhoff's Voltage Law (KVL) and Ohm's Law to the positive sequence network.

**Example: Three-Phase Fault at a Bus**
Consider a system with a generator connected to a bus, and a transmission line connected to the bus. A three-phase fault occurs at the bus.

*   **Simplified Model:** Generator internal voltage $E_a$, Generator impedance $Z_G$, Transformer impedance $Z_T$, Transmission line impedance $Z_{line}$.
*   **Positive Sequence Network:** $E_a$ is in series with $Z_G + Z_T + Z_{line}$.
*   **Fault Current ($I_{fault}$):** $I_{fault} = E_a / (Z_G + Z_T + Z_{line})$ (all in per-unit).

**Important Points to Remember for Symmetrical Faults:**
*   Only the positive sequence network is needed.
*   The fault is represented as a short circuit to ground with zero impedance.
*   The fault current is the same in all three phases.

## 3. Unsymmetrical Faults

**Definition:** Unsymmetrical faults are those where the current distribution is not the same in all three phases. These are more common than symmetrical faults.

**Types of Unsymmetrical Faults:**
*   **Line-to-Ground Fault (Single Line-to-Ground Fault):** One conductor is faulted to ground. This is the most common type of fault, accounting for 70-80% of all faults.
*   **Line-to-Line Fault (Double Line-to-Ground Fault):** Two conductors are shorted together and also faulted to ground.
*   **Line-to-Line Fault (Double Line Fault):** Two conductors are shorted together, but not to ground.

**Analysis using Sequence Networks (Symmetrical Component Method):**
The symmetrical component method decomposes unbalanced currents and voltages into three sets of balanced components: positive, negative, and zero sequence.
*   **Procedure:**
    1.  Construct the positive, negative, and zero sequence networks for the system.
    2.  Connect these networks at the fault location according to the type of fault.
    3.  Calculate the fault current by solving for the sequence currents in the connected networks.

**3.1. Line-to-Ground Fault (L-G)**

*   **Sequence Network Connection:**
    *   Positive sequence network is connected to ground through the fault impedance (usually assumed zero for bolted faults).
    *   Negative sequence network is connected to ground through the fault impedance (same as positive).
    *   Zero sequence network is connected to ground through the fault impedance (same as positive).
    *   **Crucially, the positive, negative, and zero sequence networks are connected in *parallel* at the fault location.**
*   **Fault Current Calculation:**
    *   Let $E_a$ be the pre-fault phase voltage of the faulted phase (assumed to be phase 'a').
    *   The positive sequence voltage at the fault bus is $V_{a1}$.
    *   The negative sequence voltage at the fault bus is $V_{a2}$.
    *   The zero sequence voltage at the fault bus is $V_{a0}$.
    *   For a bolted L-G fault at bus 'a', $V_{a1} = V_{a2} = V_{a0} = 0$.
    *   The sequence currents are related to voltages by:
        *   $I_{a1} = V_{a1} / Z_1$
        *   $I_{a2} = V_{a2} / Z_2$
        *   $I_{a0} = V_{a0} / Z_0$
    *   The total fault current in phase 'a' is $I_{fault, a} = I_{a1} + I_{a2} + I_{a0}$.
    *   For a bolted L-G fault, $E_a$ is impressed across $Z_1$ (positive seq. network from source to fault), and the return path is through $Z_2$ and $Z_0$ in parallel to ground.
    *   $I_{fault, a} = E_a / (Z_1 + Z_2 + Z_0)$ (where $E_a$ is the pre-fault voltage at the fault point, typically considered as the source voltage).

**Example: L-G Fault at a Bus**
Consider a generator feeding a bus. A bolted L-G fault occurs at the bus.

*   **Sequence Networks:** The generator's positive sequence impedance is $Z_{G1}$, negative sequence is $Z_{G2}$, and zero sequence is $Z_{G0}$. Assume the bus is directly connected to the generator.
*   **Connection:** Positive, negative, and zero sequence networks are all connected to the bus and then to ground with zero impedance.
*   **Fault Current:** $I_{fault, a} = E_a / (Z_{G1} + Z_{G2} + Z_{G0})$ (in per-unit).

**3.2. Line-to-Line Fault (L-L)**

*   **Definition:** Two conductors are shorted together, but not to ground.
*   **Sequence Network Connection:**
    *   Positive sequence network is connected to ground.
    *   Negative sequence network is connected to ground.
    *   Zero sequence network is **open-circuited** at the fault location (since there is no path for zero sequence current).
    *   **The positive and negative sequence networks are connected in *parallel* at the fault location.**
*   **Fault Current Calculation:**
    *   For a bolted L-L fault between phases 'b' and 'c' at bus 'a':
        *   $V_{ab} = 0$
        *   $V_{a1} + V_{a2} + V_{a0} = 0$ (Phase 'a' voltage)
        *   $V_{b1} + V_{b2} + V_{b0} = 0$ (Phase 'b' voltage)
        *   $V_{c1} + V_{c2} + V_{c0} = 0$ (Phase 'c' voltage)
    *   Also, for L-L faults:
        *   $V_{a1} = V_{a2}$ (Voltage in the unfaulted phase)
        *   $I_{a1} = -I_{a2}$
        *   $I_{a0} = 0$
    *   The fault current between phase 'b' and 'c' is $I_{fault, bc} = I_{b1} + I_{b2} + I_{b0} - (I_{c1} + I_{c2} + I_{c0})$.
    *   A simpler approach: The voltage difference between the faulted phases is zero.
        *   $V_{b} - V_{c} = 0$
        *   $(V_{b1}a^2 + V_{b2}a + V_{b0}) - (V_{c1}a + V_{c2}a^2 + V_{c0}) = 0$
        *   Using $V_{b1} = aV_{a1}$, $V_{c1} = a^2V_{a1}$, etc. and $V_{a1} = V_{a2}$ for L-L faults:
        *   $V_{a1}(a^2 - a) = 0$. This implies $V_{a1}=0$, which is incorrect.

    *   **Correct Approach:**
        *   The voltage difference between the faulted phases is zero: $V_b - V_c = 0$.
        *   This means $V_{b1} + V_{b2} + V_{b0} = V_{c1} + V_{c2} + V_{c0}$.
        *   Substitute phase shift relations: $a^2V_{a1} + aV_{a2} + V_{a0} = aV_{a1} + a^2V_{a2} + V_{a0}$.
        *   Rearrange: $V_{a1}(a^2-a) + V_{a2}(a-a^2) = 0$.
        *   $V_{a1}(a^2-a) - V_{a2}(a^2-a) = 0$.
        *   Since $a^2-a \neq 0$, we get $V_{a1} - V_{a2} = 0$, hence $V_{a1} = V_{a2}$.
        *   The currents are: $I_{a1} = V_{a1}/Z_1$, $I_{a2} = V_{a2}/Z_2$.
        *   For L-L fault, $I_{a0} = 0$.
        *   The current injected into the positive sequence network from the source is $I_{a1}$. The current injected into the negative sequence network is $I_{a2}$.
        *   The fault current between phases 'b' and 'c' is the current flowing through the positive sequence network branch connecting the source to the fault, which is $I_{b1}$ (or $I_{c2}$).
        *   The relationship at the fault is that the voltage difference between phases 'b' and 'c' is zero. This can be achieved by injecting $I_{a1}$ into the positive sequence network and $I_{a2}$ into the negative sequence network, where $I_{a1} = -I_{a2}$ and they are connected in parallel.
        *   $I_{fault, bc} = I_{b1} - I_{c1}$.
        *   Alternatively, $I_{fault, bc} = \sqrt{3} I_{a1}$.
        *   $I_{a1}$ is determined by the parallel combination of $Z_1$ and $Z_2$ connected to $E_a$.
        *   $I_{a1} = E_a / (Z_1 + Z_2)$ (in per-unit).
        *   Therefore, $I_{fault, bc} = \sqrt{3} \times [E_a / (Z_1 + Z_2)]$.

**Example: L-L Fault at a Bus**
Consider a generator feeding a bus. A bolted L-L fault occurs between phases 'b' and 'c' at the bus.

*   **Sequence Networks:** $Z_{G1}$, $Z_{G2}$, $Z_{G0}$ for the generator.
*   **Connection:** Positive and negative sequence networks are connected to the bus and then in parallel to ground. Zero sequence network is open at the fault.
*   **Fault Current:** $I_{fault, bc} = \sqrt{3} \times [E_a / (Z_{G1} + Z_{G2})]$ (in per-unit).

**3.3. Double Line-to-Ground Fault (L-L-G)**

*   **Definition:** Two conductors are shorted together and to ground.
*   **Sequence Network Connection:**
    *   Positive sequence network is connected to ground through the fault impedance.
    *   Negative sequence network is connected to ground through the fault impedance.
    *   Zero sequence network is connected to ground through the fault impedance.
    *   **The positive, negative, and zero sequence networks are connected in *parallel* at the fault location.**
*   **Fault Current Calculation:**
    *   For a bolted L-L-G fault between phases 'b' and 'c' to ground at bus 'a':
        *   $V_{b} = V_{c} = V_{ground} = 0$.
        *   This implies $V_{b1}+V_{b2}+V_{b0}=0$ and $V_{c1}+V_{c2}+V_{c0}=0$.
        *   At the fault point: $V_{a1} = V_{a2} = V_{a0} = 0$.
        *   The currents are: $I_{b1} = V_{b1}/Z_1$, $I_{b2} = V_{b2}/Z_2$, $I_{b0} = V_{b0}/Z_0$.
        *   $I_{c1} = V_{c1}/Z_1$, $I_{c2} = V_{c2}/Z_2$, $I_{c0} = V_{c0}/Z_0$.
        *   The fault currents are $I_{fault, b} = I_{b1} + I_{b2} + I_{b0}$ and $I_{fault, c} = I_{c1} + I_{c2} + I_{c0}$.
    *   The conditions at the fault are:
        *   $V_{a1} = V_{a2} = V_{a0}$ (voltages at the common point).
        *   $I_{a1} = V_{a1}/Z_1$, $I_{a2} = V_{a2}/Z_2$, $I_{a0} = V_{a0}/Z_0$.
    *   The total current flowing from the source into the faulted bus is $I_{fault, a} = I_{a1} + I_{a2} + I_{a0}$.
    *   The fault current is injected into parallel branches of $Z_1$, $Z_2$, and $Z_0$.
    *   $I_{fault, a} = E_a / (Z_1 + Z_2 || Z_0)$ where $Z_1$ is from the source to the fault, and $Z_2 || Z_0$ is the parallel combination of the negative and zero sequence impedances from the fault to ground.
    *   $I_{fault, a} = E_a / (Z_1 + (Z_2 \times Z_0) / (Z_2 + Z_0))$.

**Example: L-L-G Fault at a Bus**
Consider a generator feeding a bus. A bolted L-L-G fault occurs between phases 'b' and 'c' to ground at the bus.

*   **Sequence Networks:** $Z_{G1}$, $Z_{G2}$, $Z_{G0}$ for the generator.
*   **Connection:** Positive, negative, and zero sequence networks are all connected to the bus and then to ground with zero impedance.
*   **Fault Current:** $I_{fault, a} = E_a / (Z_{G1} + (Z_{G2} \times Z_{G0}) / (Z_{G2} + Z_{G0}))$ (in per-unit).
*   The fault currents in phases 'b' and 'c' will be related to the sequence currents.

**Important Points to Remember for Unsymmetrical Faults:**
*   Requires positive, negative, and zero sequence networks.
*   The connection of these networks at the fault location depends on the fault type.
*   L-G and L-L-G faults: Positive, negative, and zero sequence networks are in parallel.
*   L-L faults: Positive and negative sequence networks are in parallel; zero sequence network is open.
*   Pre-fault voltages are often assumed to be balanced, with the unfaulted phase voltage being the highest.
*   Zero sequence current can only flow if there is a path through grounded neutral and/or phase conductors through which zero sequence currents can circulate (e.g., delta-wye transformers block zero sequence current in the delta winding, but allow it in the wye winding if grounded).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 4. Textbooks and Reference Materials

The following are commonly used textbooks for Power System Analysis and Labs. It is essential to consult these for detailed derivations, examples, and specific methodologies.

*   **"Power System Analysis and Design" by J. Duncan Glover, Mulukutla S. Sarma, and Openshaw.** (Often referred to as the "Glover, Sarma, and Openshaw" book). This book provides comprehensive coverage of fault analysis, per-unit system, and sequence networks.
*   **"Elements of Power System Analysis" by William D. Stevenson Jr.** A classic text that provides a foundational understanding of power system analysis, including fault calculations.
*   **"Modern Power Systems Analysis" by D. P. Kothari and I. J. Nagrath.** Another popular book offering detailed explanations and examples of fault analysis techniques.

**Key Concepts to Reference from Textbooks:**
*   **Per-Unit Conversions:** Chapter on the per-unit system for calculating base values and converting impedances.
*   **Sequence Networks Construction:** Chapters detailing how to construct positive, negative, and zero sequence networks for various power system components (generators, transformers, transmission lines). Pay close attention to transformer connections and their impact on zero sequence impedance.
*   **Fault Analysis Procedures:** Detailed step-by-step procedures for calculating fault currents for all types of symmetrical and unsymmetrical faults.
*   **Bus Impendances Matrix (Zbus):** Many modern analysis techniques involve constructing the Zbus matrix, which can be used to directly calculate fault currents without explicit network analysis for each fault.

## 5. Practice Questions and Exercises

**Question 1:**
A 100 MVA, 13.8 kV generator has the following positive, negative, and zero sequence reactances:
$X_1 = 0.15$ pu, $X_2 = 0.10$ pu, $X_0 = 0.05$ pu.
The generator is connected to a bus. Calculate the fault currents for the following faults occurring at the bus:
a) Three-phase fault
b) Line-to-ground fault
c) Line-to-line fault
d) Double line-to-ground fault

**Answer 1:**
**Base MVA = 100 MVA, Base kV = 13.8 kV**

We assume the pre-fault voltage at the bus is the nominal phase voltage.
Base $V_{ph} = 13.8 \text{ kV} / \sqrt{3} = 7.967 \text{ kV}$
Base $I_{ph} = 100 \text{ MVA} / (\sqrt{3} \times 13.8 \text{ kV}) = 4183.7 \text{ A}$

**a) Three-phase fault:**
Only positive sequence network is considered.
$Z_1 = X_1 = 0.15$ pu
$I_{fault, 3\phi} = E_a / Z_1 = 1.0 \text{ pu} / 0.15 \text{ pu} = 6.667$ pu
$I_{fault, 3\phi} = 6.667 \text{ pu} \times 4183.7 \text{ A} = 27892.5 \text{ A}$

**b) Line-to-ground fault:**
Positive, negative, and zero sequence networks are in parallel.
$Z_{L-G} = Z_1 + Z_2 + Z_0 = 0.15 + 0.10 + 0.05 = 0.30$ pu
$I_{fault, L-G} = E_a / Z_{L-G} = 1.0 \text{ pu} / 0.30 \text{ pu} = 3.333$ pu
$I_{fault, L-G} = 3.333 \text{ pu} \times 4183.7 \text{ A} = 13945.7 \text{ A}$

**c) Line-to-line fault:**
Positive and negative sequence networks are in parallel.
$Z_{L-L} = Z_1 + Z_2 = 0.15 + 0.10 = 0.25$ pu
$I_{fault, L-L} = \sqrt{3} \times (E_a / Z_{L-L}) = \sqrt{3} \times (1.0 \text{ pu} / 0.25 \text{ pu}) = \sqrt{3} \times 4.0 \text{ pu} = 6.928$ pu
$I_{fault, L-L} = 6.928 \text{ pu} \times 4183.7 \text{ A} = 29000.0 \text{ A}$

**d) Double line-to-ground fault:**
Positive, negative, and zero sequence networks are in parallel.
$Z_{L-L-G} = Z_1 + (Z_2 \times Z_0) / (Z_2 + Z_0) = 0.15 + (0.10 \times 0.05) / (0.10 + 0.05)$
$Z_{L-L-G} = 0.15 + 0.005 / 0.15 = 0.15 + 0.0333 = 0.1833$ pu
$I_{fault, L-L-G} = E_a / Z_{L-L-G} = 1.0 \text{ pu} / 0.1833 \text{ pu} = 5.455$ pu
$I_{fault, L-L-G} = 5.455 \text{ pu} \times 4183.7 \text{ A} = 22823.0 \text{ A}$

**Question 2:**
A transmission line has a positive sequence impedance of $Z_1 = 0.05 + j0.2$ pu and a zero sequence impedance of $Z_0 = 0.15 + j0.6$ pu. The negative sequence impedance is $Z_2 = Z_1$.
A line-to-ground fault occurs at the receiving end of the line. The sending end voltage is $E_s = 1.0$ pu.
Calculate the fault current.

**Answer 2:**
**Base MVA and kV are not specified, so we work in per-unit.**

The fault is L-G, so positive, negative, and zero sequence networks are in parallel.
The total impedance seen by the source is the sum of the source impedance (assumed 0 for now, or just $E_s$) and the line impedances in parallel.
$Z_{total, L-G} = Z_1 + Z_2 + Z_0$
$Z_{total, L-G} = (0.05 + j0.2) + (0.05 + j0.2) + (0.15 + j0.6)$
$Z_{total, L-G} = (0.05 + 0.05 + 0.15) + j(0.2 + 0.2 + 0.6)$
$Z_{total, L-G} = 0.25 + j1.0$ pu

Assuming the fault is at the receiving end, the source impedance contributes. Let's assume the fault is at the end of the line, and the source is at the beginning. So the entire line impedance is between the source and the fault.

The fault current for an L-G fault is given by:
$I_{fault, L-G} = E_a / (Z_1 + Z_2 + Z_0)$

Here, $E_a$ is the pre-fault voltage at the fault location. If we consider the source at one end and the fault at the other, and no other loads or lines, then the source voltage is directly responsible.

$I_{fault, L-G} = 1.0 \text{ pu} / (0.25 + j1.0)$ pu
$I_{fault, L-G} = 1.0 / (0.25 + j1.0)$
$I_{fault, L-G} = 1.0 \times (0.25 - j1.0) / ((0.25)^2 + (1.0)^2)$
$I_{fault, L-G} = (0.25 - j1.0) / (0.0625 + 1.0)$
$I_{fault, L-G} = (0.25 - j1.0) / 1.0625$
$I_{fault, L-G} \approx 0.235 - j0.941$ pu

The magnitude of the fault current is $|I_{fault, L-G}| = \sqrt{(0.235)^2 + (-0.941)^2} \approx \sqrt{0.055 + 0.885} = \sqrt{0.940} \approx 0.970$ pu.

**If the question implies the fault is at the bus, and this line is connected to it:**
In this case, the question is very similar to Question 1 where the fault is at the bus. If this line's impedance is the *only* impedance, then the calculation is as above. If there are other impedances, they would need to be added in series with the line impedance.

## 6. Important Points to Remember

*   **Per-Unit System Simplifies Calculations:** Always convert all system quantities to per-unit for easier analysis.
*   **Sequence Networks are Key:** For unsymmetrical faults, the concept of sequence networks (positive, negative, zero) is fundamental.
*   **Transformer Connections Matter:** The type of transformer connection (e.g., Y-Y, Y-Δ, Δ-Y) significantly affects the zero sequence network and the flow of zero sequence currents. Delta windings provide a path for zero sequence current and can isolate it from other parts of the system.
*   **Fault Impedance:** For "bolted" faults, fault impedance is assumed to be zero. In reality, fault resistance exists, which reduces the fault current.
*   **Location of Fault:** The impedance between the source and the fault location is critical in calculating the fault current.
*   **Generator Asynchronous Operation:** During a severe short circuit, generators can lose synchronism if the fault is not cleared quickly. This is a transient stability issue.
*   **Software Tools:** For complex power systems, software like PSS/E, ETAP, or MATLAB/Simulink are used to perform fault analysis. Understanding the underlying principles is crucial even when using these tools.
*   **Relay Settings:** Fault current calculations are directly used to set protective relays (e.g., overcurrent relays, differential relays) to detect and isolate faults.

This detailed note covers the core concepts of symmetrical and unsymmetrical faults in power system analysis, aligning with the specified learning and course outcomes. Remember to practice drawing the sequence networks and applying the network connection rules for different fault types.