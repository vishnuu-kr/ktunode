---
title: "reversible and irreversible processes"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f5c"
status: "completed"
scrapedAt: "2026-05-20T17:53:37.310Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement

## Topic: Reversible and Irreversible Processes

---

**Learning Outcomes:**

*   Understand the distinction between reversible and irreversible processes in thermodynamics.
*   Identify the characteristics and conditions for a process to be reversible.
*   Recognize common causes of irreversibility.
*   Relate reversible and irreversible processes to the second law of thermodynamics.
*   Analyze simple systems undergoing reversible and irreversible processes.

---

**Course Outcomes Alignment:**

*   **CO1 (Understand basic concepts of thermodynamics):** This topic builds upon fundamental concepts like system, state, property, and process. (K1, K2)
*   **CO2 (Understand the laws of thermodynamics):** This topic is central to understanding the implications of the Second Law, particularly the Kelvin-Planck statement. (K1, K2)
*   **CO3 (Conduct first law analysis of open and closed systems):** While this topic focuses on the second law, understanding reversibility is crucial for defining ideal limits for energy conversion efficiencies (e.g., Carnot efficiency), which is a consequence of first law analysis. (K3)
*   **CO4 (Determine entropy changes associated with different processes):** Reversibility is directly linked to entropy generation. Reversible processes have zero entropy generation, while irreversible processes generate entropy. (K3)

---

### 1. Introduction to Reversible Processes

**Definition:**

A **reversible process** is a process that can be reversed in such a way that both the system and the surroundings are returned to their initial states, without leaving any trace on the surroundings.

*(Cengel & Boles, p. 213)*

**Key Characteristics of a Reversible Process:**

*   **Infinitely Slow:** A reversible process must occur infinitely slowly, allowing the system to remain in thermodynamic equilibrium at all times. This means the process can be stopped at any point and reversed without any change.
*   **Quasi-equilibrium:** For a process to be reversible, it must be a **quasi-equilibrium process**. This implies that the system passes through a continuous sequence of equilibrium states. For a system to be in equilibrium, there must be no driving force for change, or the driving force must be infinitesimally small.
*   **No Dissipative Effects:** Reversible processes are free from any dissipative effects like friction, unrestrained expansion, or inelastic deformation. These effects convert useful work into internal energy (heat) and are inherently irreversible.
*   **No Heat Transfer Across Finite Temperature Differences:** Heat transfer must occur across infinitesimally small temperature differences. If there is a finite temperature difference, heat will flow spontaneously, which is an irreversible process.

**Examples of Idealized Reversible Processes:**

*   **Isothermal Expansion/Compression of an Ideal Gas in Contact with a Heat Reservoir:** If the gas expands or compresses infinitely slowly, and its temperature is always infinitesimally different from the reservoir's temperature, the process can be considered reversible.
*   **Isentropic Expansion/Compression:** Processes occurring with no heat transfer ($Q=0$) and no friction are isentropic (constant entropy). These are ideal adiabatic reversible processes.
*   **Phase Change at Saturation Conditions:** A substance undergoing a phase change at its saturation temperature and pressure (e.g., boiling water at 100°C and 1 atm) can be considered reversible if the heat transfer occurs across an infinitesimal temperature difference.
*   **Stretching a Spring Infinitely Slowly:** If a spring is stretched or compressed very slowly, the work done can be recovered by reversing the process.

**Significance of Reversible Processes:**

Reversible processes represent the theoretical **upper limit** for the efficiency of any thermodynamic cycle (like heat engines) or the maximum work output from a process. They serve as a benchmark against which the performance of real (irreversible) processes is compared. The Carnot cycle, consisting of reversible processes, defines the maximum possible efficiency for a heat engine operating between two temperature reservoirs.

---

### 2. Irreversible Processes

**Definition:**

An **irreversible process** is a process that cannot be reversed to restore both the system and the surroundings to their original states. When an irreversible process is reversed, either the system or the surroundings (or both) will remain in a changed state.

*(P.K. Nag, p. 164)*

**Key Characteristics of an Irreversible Process:**

*   **Finite Rate of Change:** Irreversible processes occur at a finite rate, meaning there are significant driving forces for change.
*   **Departure from Equilibrium:** The system is not in equilibrium throughout the process. There are gradients in temperature, pressure, or velocity.
*   **Presence of Dissipative Effects:** All real processes involve irreversibilities due to effects like friction, viscosity, electrical resistance, inelastic deformation, and free expansion.
*   **Heat Transfer Across Finite Temperature Differences:** Heat transfer typically occurs from a hotter object to a colder object across a finite temperature difference, which is a primary source of irreversibility.

**Sources of Irreversibility (Irreversibilities):**

The deviations from reversibility are called **irreversibilities**. Common sources include:

1.  **Friction:** Mechanical friction (between moving surfaces) and fluid friction (viscosity) dissipate mechanical energy as heat.
2.  **Unrestrained Expansion:** The expansion of a gas or liquid into a vacuum or into a region of lower pressure without doing work. This is a rapid and uncontrolled expansion.
3.  **Heat Transfer Across a Finite Temperature Difference:** Heat naturally flows from a higher temperature to a lower temperature. The larger the temperature difference, the faster the heat transfer, and the greater the irreversibility.
4.  **Mixing of Substances:** Mixing of two different fluids or gases, or mixing of hot and cold substances, leads to irreversibility.
5.  **Phase Changes:** Although phase changes at saturation can be reversible under ideal conditions, most real-world phase changes involve temperature differences.
6.  **Chemical Reactions:** Spontaneous chemical reactions are generally irreversible.
7.  **Electrical Resistance (Joule Heating):** When current flows through a resistor, electrical energy is converted into heat.
8.  **Inelastic Deformation:** Materials undergoing plastic deformation convert work into internal energy.

**Relationship to the Second Law of Thermodynamics:**

The Second Law of Thermodynamics, particularly the Kelvin-Planck statement, fundamentally distinguishes between reversible and irreversible processes.

*   **Kelvin-Planck Statement:** "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a cooler body to a hotter body."
    *   This statement implies that a **100% efficient heat engine is impossible**. Real heat engines are always irreversible and thus have efficiencies less than the Carnot efficiency.
*   **Entropy Generation:** A key consequence of the Second Law is that **entropy generation is always non-negative**.
    *   For a **reversible process**, the total entropy change of the system and its surroundings is zero ($\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} = 0$). No entropy is generated.
    *   For an **irreversible process**, the total entropy change is always positive ($\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} > 0$). Entropy is generated due to the irreversibilities.

*(Moran & Shapiro, p. 235)*

---

### 3. Classifying Processes as Reversible or Irreversible

To determine if a process is reversible or irreversible, we need to consider the conditions under which it occurs and look for the presence of irreversibilities.

**General Approach:**

1.  **Identify the System and Surroundings:** Clearly define the boundaries of the system.
2.  **Examine the Process Path:** Is it a quasi-equilibrium process, or does it involve rapid changes?
3.  **Look for Driving Forces:** Are there significant temperature, pressure, or chemical potential differences?
4.  **Check for Dissipative Effects:** Is there friction, electrical resistance, or unrestrained expansion?
5.  **Calculate Total Entropy Change:** If possible, calculate the entropy change of the system and the surroundings. If $\Delta S_{total} = 0$, it's reversible. If $\Delta S_{total} > 0$, it's irreversible.

**Examples:**

**Example 1: Free Expansion of a Gas**

*   **Description:** A gas in a container is allowed to expand into an evacuated chamber (vacuum).
*   **Analysis:**
    *   This is a rapid and uncontrolled expansion.
    *   The system is not in equilibrium during the expansion.
    *   There is no work done by the gas.
    *   No heat transfer is assumed (adiabatic).
    *   **Irreversibility:** The unrestrained expansion itself is a major irreversibility.
*   **Conclusion:** This is an **irreversible** process. The entropy of the gas increases, and since no heat is transferred to the surroundings, the total entropy change is positive.

**Example 2: Isothermal Expansion of an Ideal Gas Against a Constant External Pressure**

*   **Description:** An ideal gas in a cylinder with a piston expands isothermally, with the external pressure being slightly less than the gas pressure at all times. The temperature is maintained constant by heat transfer from a reservoir.
*   **Analysis:**
    *   If the external pressure is *slightly* less than the gas pressure (e.g., $P_{ext} = P_{gas} - dP$), the process approaches a quasi-equilibrium process.
    *   Heat transfer occurs, but if it's across an *infinitesimal* temperature difference between the gas and the reservoir, it's considered reversible heat transfer.
    *   The process is isothermal, so $\Delta T = 0$. For an ideal gas, internal energy depends only on temperature, so $\Delta U = 0$.
    *   From the First Law: $Q - W = \Delta U = 0 \implies Q = W$.
    *   For a reversible isothermal expansion, $W_{rev} = \int P dV = P_1V_1 \ln(V_2/V_1)$. If $P_{ext}$ is constant and slightly less than $P_{gas}$, then $W = P_{ext}(V_2 - V_1)$.
    *   If $P_{ext}$ is constant and slightly less than $P_{gas}$, the process is *not* strictly reversible because the pressure difference is finite. It's irreversible.
    *   If $P_{ext}$ is equal to the *initial* gas pressure and remains constant, and the gas expands, the pressure drops, making $P_{ext}$ significantly different from the gas pressure during expansion, leading to significant irreversibility.
*   **Conclusion:** If the external pressure is constant and only slightly less than the initial gas pressure, it's an **irreversible** process because the pressure difference is finite. For a truly reversible isothermal expansion, the external pressure must continuously adjust to be infinitesimally less than the gas pressure.

**Example 3: Isothermal Expansion of an Ideal Gas with Reversible Heat Transfer**

*   **Description:** An ideal gas in a cylinder with a piston expands isothermally. The external pressure is always infinitesimally less than the gas pressure ($P_{ext} = P_{gas} - dP$). Heat transfer occurs from a reservoir with a temperature $T_{res} = T_{gas}$.
*   **Analysis:**
    *   Quasi-equilibrium process (since $P_{ext}$ is always very close to $P_{gas}$).
    *   Isothermal process for an ideal gas implies $\Delta U = 0$.
    *   First Law: $Q - W = 0 \implies Q = W$.
    *   Work done is $W_{rev} = \int_{V_1}^{V_2} P_{gas} dV$. Since $P_{gas} = P_{ext}$ (infinitesimally), $W_{rev} = \int_{V_1}^{V_2} P_{ext} dV$.
    *   Heat transfer occurs across an infinitesimal temperature difference ($T_{res} - T_{gas} = dT$, which is negligible for reversibility).
    *   Entropy change of the gas: $\Delta S_{gas} = \int \frac{\delta Q_{rev}}{T_{gas}}$. Since $Q_{rev}$ is transferred from the reservoir, $Q_{rev} = -Q_{res}$.
    *   If heat is absorbed by the gas, $\Delta S_{gas} = Q/T$.
    *   If the process is reversible, $\Delta S_{total} = \Delta S_{gas} + \Delta S_{surroundings} = 0$. The surroundings (reservoir) lose heat $Q$, so $\Delta S_{surroundings} = -Q/T_{res}$.
    *   $\Delta S_{gas} + \Delta S_{surroundings} = Q/T_{gas} - Q/T_{res} = Q/T_{gas} - Q/T_{gas} = 0$.
*   **Conclusion:** This is a **reversible** process.

---

### 4. Work Done in Reversible and Irreversible Processes

The work done by a system is path-dependent. For a reversible process, the work done is the maximum possible work that can be extracted.

*   **Reversible Work ($W_{rev}$):** For a simple compressible system, $W_{rev} = \int_{V_1}^{V_2} P dV$, where $P$ is the system pressure at each point along the path. This integral represents the area under the $P-V$ curve for a reversible process.
*   **Actual Work ($W_{actual}$):** For an irreversible process, $W_{actual} < W_{rev}$ (for expansion) and $W_{actual} > W_{rev}$ (for compression). This is because some of the energy that could have been converted into work is lost due to irreversibilities.

*(Cengel & Boles, p. 216)*

**Example:** Isothermal expansion of an ideal gas from $V_1$ to $V_2$ at temperature $T$.

*   **Reversible Isothermal Expansion:** $W_{rev} = \int_{V_1}^{V_2} P dV = \int_{V_1}^{V_2} \frac{nRT}{V} dV = nRT \ln(V_2/V_1)$.
*   **Irreversible Isothermal Expansion Against a Constant External Pressure $P_{ext}$:** $W_{actual} = P_{ext} (V_2 - V_1)$.
    *   Since $P_{ext} < P_{gas}$ during expansion, and for an ideal gas $P_{gas} = nRT/V$, the average pressure during expansion is greater than $P_{ext}$. Thus, $P_{ext}(V_2-V_1) < nRT \ln(V_2/V_1)$.

---

### 5. Practice Questions and Exercises

**Question 1:**

Define a reversible process and list three key characteristics that distinguish it from an irreversible process.

**Answer 1:**

A reversible process is a process that can be reversed in such a way that both the system and the surroundings are returned to their initial states, without leaving any trace on the surroundings.

Key characteristics:
1.  **Quasi-equilibrium:** The process occurs through a sequence of equilibrium states.
2.  **Infinitely slow:** The process proceeds infinitely slowly.
3.  **No dissipations:** Free from friction, unrestrained expansion, and heat transfer across finite temperature differences.

---

**Question 2:**

Identify the primary source of irreversibility in each of the following scenarios:
a) Heat transfer between a hot object and a cold object.
b) The expansion of a gas into a vacuum.
c) The flow of electricity through a resistor.

**Answer 2:**

a) **Heat transfer between a hot object and a cold object:** Finite temperature difference.
b) **The expansion of a gas into a vacuum:** Unrestrained expansion (also known as free expansion).
c) **The flow of electricity through a resistor:** Electrical resistance (Joule heating).

---

**Question 3:**

Consider an ideal gas undergoing an isothermal expansion from state 1 ($P_1, V_1, T$) to state 2 ($P_2, V_2, T$).
Calculate the work done if the expansion is:
a) Reversible.
b) Irreversible, against a constant external pressure $P_{ext} = P_2$.

**Answer 3:**

Let the number of moles of the ideal gas be $n$ and the universal gas constant be $R$. The temperature is $T$.
From the ideal gas law, $PV = nRT$.

a) **Reversible Isothermal Expansion:**
For a reversible isothermal expansion, the work done is given by:
$W_{rev} = \int_{V_1}^{V_2} P dV$
Since $PV = nRT$, $P = nRT/V$.
$W_{rev} = \int_{V_1}^{V_2} \frac{nRT}{V} dV = nRT [\ln V]_{V_1}^{V_2} = nRT \ln(V_2/V_1)$
Since the process is isothermal, $P_1V_1 = P_2V_2$, so $V_2/V_1 = P_1/P_2$.
Thus, $W_{rev} = nRT \ln(P_1/P_2)$.

b) **Irreversible Isothermal Expansion Against a Constant External Pressure $P_{ext} = P_2$:**
For expansion against a constant external pressure, the work done is:
$W_{actual} = P_{ext} (V_2 - V_1)$
Given $P_{ext} = P_2$.
Using the ideal gas law for state 2, $P_2V_2 = nRT$. So $V_2 = nRT/P_2$.
Using the ideal gas law for state 1, $P_1V_1 = nRT$. So $V_1 = nRT/P_1$.
$W_{actual} = P_2 \left(\frac{nRT}{P_2} - \frac{nRT}{P_1}\right) = nRT \left(1 - \frac{P_2}{P_1}\right)$.

**Comparison:** For an expansion ($V_2 > V_1$, $P_2 < P_1$), $P_1/P_2 > 1$, so $\ln(P_1/P_2) > 0$. Thus, $W_{rev} > 0$.
Also, $P_2/P_1 < 1$, so $1 - P_2/P_1 > 0$. Thus, $W_{actual} > 0$.
However, $W_{actual}$ will always be less than $W_{rev}$ because $P_{ext} < P_{avg\_gas}$ during irreversible expansion.

---

### 6. Important Points to Remember

*   **Reversibility is an idealization.** Real processes are always irreversible.
*   **Reversible processes are always quasi-equilibrium.** The reverse is not always true; a quasi-equilibrium process can still be irreversible if it involves dissipative effects.
*   **Entropy generation is the hallmark of irreversibility.** $\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} \ge 0$. It is zero for reversible processes and positive for irreversible processes.
*   **Reversible processes define the maximum possible performance.** For heat engines, this is the Carnot efficiency; for refrigerators and heat pumps, this is the COP of the Carnot refrigerator/heat pump.
*   **Friction, unrestrained expansion, and heat transfer across finite temperature differences are the most common sources of irreversibility.**
*   **Work done by expansion is maximized for reversible processes.** Work done *on* a system for compression is minimized for reversible processes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References and Further Reading

*   **Cengel & Boles, "Thermodynamics: An Engineering Approach," 8th Edition:**
    *   Chapter 5: Entropy
    *   Chapter 6: Second Law Analysis of Processes (especially sections on irreversibility and reversible work)
*   **P.K. Nag, "Engineering Thermodynamics," 6th Edition:**
    *   Chapter 5: Second Law of Thermodynamics (sections on irreversibility and reversible process)
*   **Moran & Shapiro, "Fundamentals of Engineering Thermodynamics," 8th Edition:**
    *   Chapter 6: Second Law of Thermodynamics (sections on irreversibility and the criterion for reversibility)
*   **Sonntag, Borgnakke, VanWylen, "Fundamentals of Thermodynamics," 8th Edition:**
    *   Chapter 6: The Second Law of Thermodynamics (sections on irreversibility, ideal processes, and the comparison of reversible and irreversible work)

---