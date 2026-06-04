---
title: "internally reversible processes"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f5d"
status: "completed"
scrapedAt: "2026-05-20T17:53:38.026Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement

## Topic: Internally Reversible Processes

This module delves into the Second Law of Thermodynamics, focusing on the Kelvin-Planck statement and its implications. A crucial concept within this framework is the understanding of **internally reversible processes**. These processes are idealizations that allow us to apply fundamental thermodynamic principles and derive important relationships, particularly concerning entropy and the efficiency of heat engines.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of reversibility and irreversibility in thermodynamic processes.** (CO1, CO2)
*   **Define and explain the characteristics of an internally reversible process.** (CO1, CO2)
*   **Apply the concept of internal reversibility to analyze work and heat transfer in various thermodynamic systems.** (CO3)
*   **Relate internally reversible processes to the Kelvin-Planck statement and the Second Law.** (CO2)
*   **Recognize the significance of internally reversible processes in establishing theoretical limits for performance.** (CO2)

---

### 1. Reversibility and Irreversibility

Before diving into internally reversible processes, it's essential to grasp the fundamental difference between reversible and irreversible processes.

*   **Reversible Process:** A process that can be reversed in such a way that both the system and its surroundings are returned to their initial states, with no net change anywhere. Reversible processes are idealizations; they occur infinitely slowly and are in a continuous state of equilibrium.
    *   **Key Characteristics:**
        *   Occurs infinitely slowly.
        *   System is always in thermodynamic equilibrium.
        *   No dissipative effects like friction, viscosity, or electrical resistance.
        *   No unrestrained expansion or heat transfer across a finite temperature difference.
*   **Irreversible Process:** A process that cannot be reversed to restore both the system and surroundings to their initial states. All real-world processes are irreversible.
    *   **Causes of Irreversibility:**
        *   **Friction:** Mechanical friction, viscous friction within fluids.
        *   **Unrestrained Expansion:** Expansion of a gas into a vacuum.
        *   **Heat Transfer through a Finite Temperature Difference:** Heat naturally flows from higher to lower temperature, and this flow is inherently irreversible.
        *   **Mixing of substances:** Mixing of different fluids or gases.
        *   **Chemical reactions:** Most chemical reactions are irreversible.
        *   **Inelastic deformation:** Deformation of solids that does not return to the original shape.

**[Cengel, Boles, Kanoğlu, 2011, Chapter 4]** provides a detailed discussion on the concept of reversibility and its causes.

---

### 2. Internally Reversible Processes

An **internally reversible process** is a process that is reversible within the system's boundaries, but not necessarily with respect to the surroundings. This means that any irreversibilities associated with heat transfer across the system boundary are still present, but internal dissipative effects are absent.

*   **Definition:** A process in which there are no irreversibilities *within the system itself*. This means that the system is always in thermodynamic equilibrium during the process.
*   **Implication:** While heat transfer across the boundary might occur across a finite temperature difference (making the process externally irreversible), the internal states of the system can be precisely defined at any point during the process.

**Important Note:** Often, "reversible process" is used interchangeably with "internally reversible process" in many contexts, especially when analyzing the behavior of the system itself. However, understanding the distinction is crucial when considering the overall system and its interaction with the surroundings, particularly in the context of the Second Law and heat engines.

---

### 3. Characteristics of Internally Reversible Processes

*   **System is always in equilibrium:** During an internally reversible process, the system is assumed to be in a state of thermodynamic equilibrium at all times. This implies that intensive properties like temperature, pressure, and specific volume are uniformly distributed throughout the system.
*   **Quasi-equilibrium processes:** Internally reversible processes are often referred to as **quasi-equilibrium processes**. This means the process proceeds so slowly that the system remains infinitesimally close to an equilibrium state at all times.
*   **Absence of internal irreversibilities:** The key is the absence of friction, unrestrained expansion, mixing within the system, etc.
*   **Mathematical relations hold:** Because the system is always in equilibrium, the standard thermodynamic relations (e.g., $PV=mRT$, $du = c_v dT$) are valid throughout the process.
*   **Work calculation:** The work done by or on the system in an internally reversible process can be calculated using the integral $\int P dV$ for a closed system.

**[P.K. Nag, 2017, Chapter 4]** elaborates on quasi-equilibrium processes and their relevance to reversible work calculations.

---

### 4. Significance in Relation to the Kelvin-Planck Statement

The Kelvin-Planck statement of the Second Law deals with the impossibility of constructing a heat engine that operates in a cycle and produces no effect other than the extraction of heat from a single reservoir and the conversion of this heat into work.

The concept of internally reversible processes is fundamental to understanding and proving the Kelvin-Planck statement and related corollaries:

*   **Establishing Theoretical Limits:** Internally reversible processes allow us to determine the maximum possible work output from a heat engine or the minimum possible work input for a refrigerator/heat pump operating between two thermal reservoirs. These theoretical limits are crucial for evaluating the performance of real, irreversible devices.
*   **Entropy Calculations:** Internally reversible processes are essential for calculating the entropy changes of substances. The entropy change of a system undergoing an internally reversible process is given by $\Delta S = \int \frac{\delta Q_{rev}}{T}$. For irreversible processes, entropy generation occurs, making direct calculation more complex.
*   **Efficiency Analysis:** The Carnot cycle, which represents the most efficient heat engine operating between two temperature reservoirs, is composed of four *internally reversible* processes. This allows us to derive the Carnot efficiency, $\eta_{Carnot} = 1 - \frac{T_L}{T_H}$, which serves as the benchmark for all heat engines.

**[Moran & Shapiro, 2006, Chapter 7]** thoroughly explains the role of reversible processes in the development of the Second Law and its corollaries.

---

### 5. Work Transfer in Internally Reversible Processes (Closed Systems)

For a closed system undergoing an internally reversible process, the work done by the system is given by:

$W_{by} = \int_{1}^{2} P dV$

And the work done on the system is:

$W_{on} = -\int_{1}^{2} P dV = \int_{2}^{1} P dV$

*   **Graphical Interpretation:** The work done is the area under the process curve on a P-V diagram.
*   **Different Internally Reversible Processes:**
    *   **Isobaric (Constant Pressure):** $W = P(V_2 - V_1)$
    *   **Isothermal (Constant Temperature) for Ideal Gas:** $W = mRT \ln\left(\frac{V_2}{V_1}\right) = mRT \ln\left(\frac{P_1}{P_2}\right)$
    *   **Isochoric (Constant Volume):** $W = 0$ (since $dV=0$)
    *   **Adiabatic (No Heat Transfer) for a reversible adiabatic process:** $W = \frac{P_1V_1 - P_2V_2}{n-1}$ for $PV^n = \text{constant}$, where $n$ is the adiabatic index ($\gamma$ for ideal gases).

**[Sonntag, Borgnakke, VanWylen, 2014, Chapter 6]** provides in-depth coverage of work calculations for various reversible processes.

---

### 6. Heat Transfer in Internally Reversible Processes

In an internally reversible process, the heat transfer can be expressed as:

$\delta Q_{rev} = T dS$

This equation is fundamental for calculating entropy changes.

For specific internally reversible processes with ideal gases:

*   **Isothermal Process:** $\delta Q_{rev} = P dV + dU$. Since $dU=0$ for an isothermal process with an ideal gas, $\delta Q_{rev} = P dV$. Integrating gives $Q_{rev} = W_{rev}$.
*   **Isochoric Process:** $\delta Q_{rev} = m c_v dT$. Integrating gives $Q_{rev} = m c_v (T_2 - T_1)$. Also, $W_{rev} = 0$. From the First Law ($Q = \Delta U + W$), we get $Q_{rev} = \Delta U$.
*   **Isobaric Process:** $\delta Q_{rev} = m c_p dT$. Integrating gives $Q_{rev} = m c_p (T_2 - T_1)$. Work is $W_{rev} = P(V_2 - V_1) = mR(T_2 - T_1)$.
*   **Adiabatic Process (Reversible):** $Q_{rev} = 0$.

**[Ansermet & Brechet, 2019, Chapter 3]** discusses the relationship between heat transfer and entropy for reversible processes.

---

### 7. Examples of Internally Reversible Processes

*   **Slow Compression/Expansion of a Gas in a Piston-Cylinder Assembly:** If the compression or expansion is done very slowly and without friction, it can be approximated as internally reversible.
*   **Phase Changes at Constant Temperature and Pressure:** Melting of ice at 0°C and 1 atm, or boiling of water at 100°C and 1 atm, are considered internally reversible as long as equilibrium is maintained.
*   **Isothermal Expansion of a Gas:** An ideal gas expanding isothermally in contact with a large heat reservoir is internally reversible.
*   **Carnot Cycle:** All four processes (isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression) are internally reversible.

---

### 8. Important Points to Remember

*   **Idealization:** Internally reversible processes are idealizations, not achievable in reality. However, they are essential for theoretical analysis and setting performance benchmarks.
*   **Equilibrium:** The core of internal reversibility is that the system is always in thermodynamic equilibrium.
*   **Work Calculation:** Work done in internally reversible processes can be calculated using $\int P dV$.
*   **Entropy:** The fundamental relation $\Delta S = \int \frac{\delta Q_{rev}}{T}$ is derived from internally reversible processes.
*   **Kelvin-Planck Connection:** Internally reversible cycles are key to understanding the limits imposed by the Second Law and the Kelvin-Planck statement. Real cycles are always less efficient than their internally reversible counterparts operating between the same reservoirs.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary characteristic that distinguishes an internally reversible process from an irreversible process?

**Answer:** The primary characteristic is that an internally reversible process occurs without any irreversibilities *within the system*. This means the system remains in thermodynamic equilibrium throughout the process.

---

**Question 2:**
Consider a gas in a piston-cylinder assembly undergoing a compression process. Under what conditions can this process be considered internally reversible?

**Answer:** The process can be considered internally reversible if:
1.  The compression occurs infinitely slowly (quasi-statically).
2.  There is no friction between the piston and cylinder walls.
3.  There are no other internal dissipative effects within the gas (e.g., viscosity, turbulence).

---

**Question 3:**
Calculate the work done per unit mass when an ideal gas expands isothermally from $P_1 = 500$ kPa and $T = 300$ K to $P_2 = 100$ kPa in an internally reversible process. Assume $R = 0.287$ kJ/kg·K.

**Solution:**
For an isothermal process with an ideal gas, the work done per unit mass is given by:
$w = R T \ln\left(\frac{P_1}{P_2}\right)$

Given:
$R = 0.287$ kJ/kg·K
$T = 300$ K
$P_1 = 500$ kPa
$P_2 = 100$ kPa

$w = (0.287 \text{ kJ/kg·K}) \times (300 \text{ K}) \times \ln\left(\frac{500 \text{ kPa}}{100 \text{ kPa}}\right)$
$w = 86.1 \text{ kJ/kg} \times \ln(5)$
$w = 86.1 \text{ kJ/kg} \times 1.6094$
$w \approx 138.5$ kJ/kg

The work done per unit mass is approximately **138.5 kJ/kg**.

---

**Question 4:**
Why are internally reversible processes important for understanding the Second Law of Thermodynamics and the Kelvin-Planck statement?

**Answer:** Internally reversible processes are important because they allow us to:
*   **Define theoretical limits:** They establish the maximum possible efficiency for heat engines and the minimum possible work input for refrigerators/heat pumps operating between given temperature reservoirs (e.g., Carnot efficiency).
*   **Calculate entropy changes:** The fundamental equation for entropy change, $\Delta S = \int \frac{\delta Q_{rev}}{T}$, is derived from these processes. This allows us to quantify the total entropy change of the universe for any process, which must be greater than or equal to zero.
*   **Prove statements:** They are used in proofs of fundamental theorems related to the Second Law, such as the Kelvin-Planck statement and the Clausius statement.

---

### 10. Alignment with Course Outcomes

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   This topic directly addresses basic concepts like reversibility, equilibrium, and idealizations in thermodynamics.
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**
    *   The significance of internally reversible processes in relation to the Kelvin-Planck statement and the Second Law is a core focus.
*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3)**
    *   The calculation of work transfer in internally reversible processes utilizes First Law principles.
*   **CO4: Determine entropy changes associated with different processes (Knowledge Level: K3)**
    *   The relationship $\delta Q_{rev} = T dS$ highlights the importance of these processes for entropy calculations.
*   **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**
    *   While not explicitly focused on pure substance property determination, the principles applied to ideal gases can be extended to understanding how properties change during reversible processes.

---
This comprehensive set of notes should provide a solid foundation for understanding internally reversible processes within the context of the Second Law of Thermodynamics. Remember to consult the referenced textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
