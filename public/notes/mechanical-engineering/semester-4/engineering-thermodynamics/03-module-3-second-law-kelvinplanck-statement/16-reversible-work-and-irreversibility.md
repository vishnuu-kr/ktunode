---
title: "reversible work and irreversibility"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f67"
status: "completed"
scrapedAt: "2026-05-20T17:53:45.150Z"
---
# Engineering Thermodynamics - Module 3: Second Law: Kelvin–Planck Statement

## Topic: Reversible Work and Irreversibility

### 1. Introduction to the Second Law and its Implications (CO2: K1, K2)

The Second Law of Thermodynamics introduces the concept of **directionality** to thermodynamic processes. While the First Law deals with energy conservation, it doesn't tell us if a process can actually happen. The Second Law addresses this by stating that natural processes tend to move towards states of higher disorder or entropy.

**Key Concepts:**

*   **Reversible Process:** An idealized process that can be reversed without leaving any trace on the surroundings. In a reversible process, the system and surroundings can be restored to their initial states simultaneously. These processes are hypothetical but serve as benchmarks for real-world processes.
*   **Irreversible Process:** Any process that is not reversible. All real-world processes are irreversible due to factors like friction, heat transfer across a finite temperature difference, unrestrained expansion, mixing, and chemical reactions.

**Why are Reversible Processes Important?**

Reversible processes define the **maximum possible work output** or the **minimum possible work input** for a given process. By understanding reversible processes, we can quantify the losses incurred in real, irreversible processes.

### 2. Reversible Work (CO1: K2, CO2: K1, K2, CO3: K3)

Reversible work is the **maximum useful work** that can be obtained from a system as it undergoes a process between two given states. It represents the ideal scenario where no energy is wasted due to irreversibilities.

**Key Concepts:**

*   **Work Done by a System:** In thermodynamics, work is energy transferred by means other than heat. For a closed system undergoing a quasi-equilibrium process (a series of states close to equilibrium), the work done is given by:
    $W = \int_{1}^{2} P dV$
    where $P$ is the pressure and $V$ is the volume.

*   **Reversible Work ($W_{rev}$):** For a system interacting with its surroundings (e.g., a piston-cylinder device expanding against the atmosphere), the reversible work done by the system is the work done when the process is carried out infinitesimally slowly, maintaining equilibrium between the system and its surroundings.

    *   **For a closed system:**
        $W_{rev} = \int_{1}^{2} P_{sys} dV$
        Here, $P_{sys}$ is the pressure of the system. In a truly reversible process, $P_{sys}$ is infinitesimally close to the external pressure $P_{ext}$.

    *   **For a steady-flow system:** The reversible work done by the system is given by:
        $w_{rev} = \int_{1}^{2} v dP + (V_2 - V_1)g + \frac{1}{2}(V_{2,rel}^2 - V_{1,rel}^2)$ (for open systems where potential and kinetic energy changes are significant, this is the net shaft work)
        This equation highlights that reversible work in flow systems can be achieved by overcoming pressure forces and changes in potential and kinetic energy. The term $v dP$ represents the work associated with pressure changes.

**Cengel & Boles (2011), Chapter 6: Second Law of Thermodynamics:**
Cengel and Boles emphasize that for a reversible process involving a stationary system in equilibrium with its surroundings, the work transfer is given by the integral of pressure with respect to volume. They introduce the concept of **reversible work output** and **reversible work input**.

**Example:**
Consider a gas in a piston-cylinder device expanding isothermally and reversibly from volume $V_1$ to $V_2$ at temperature $T$. For an ideal gas, $PV = nRT$.
$W_{rev} = \int_{V_1}^{V_2} P dV = \int_{V_1}^{V_2} \frac{nRT}{V} dV = nRT \ln\left(\frac{V_2}{V_1}\right)$

### 3. Irreversibility (CO1: K2, CO2: K1, K2)

Irreversibility refers to the factors that cause a process to deviate from being reversible. These deviations lead to a reduction in the useful work output of a system or an increase in the work input required.

**Causes of Irreversibility:**

*   **Friction:** Mechanical friction between moving parts (e.g., piston and cylinder walls) converts mechanical energy into thermal energy, which is then dissipated. This is a common source of irreversibility in mechanical systems.
*   **Unrestrained Expansion:** When a gas expands into a vacuum without a piston, the expansion occurs rapidly and is highly irreversible. The system is not in equilibrium with its surroundings throughout the process.
*   **Heat Transfer Across a Finite Temperature Difference ($\Delta T$):** Heat naturally flows from a region of higher temperature to a region of lower temperature. If this temperature difference is significant, the heat transfer process is irreversible. In a reversible process, heat transfer would occur across an infinitesimally small temperature difference.
*   **Mixing of Fluids:** When two or more fluids mix, entropy increases, and the process is irreversible.
*   **Chemical Reactions:** Most chemical reactions are inherently irreversible.
*   **Electrical Resistance:** The flow of electric current through a resistive material generates heat, representing an irreversible conversion of electrical energy.

**P.K. Nag (2017), Chapter 5: Second Law of Thermodynamics:**
Nag's textbook extensively discusses irreversibilities and their impact on the efficiency of thermodynamic cycles. He highlights friction, free expansion, and finite temperature differences as key sources.

**Moran & Shapiro (2006), Chapter 7: Second Law of Thermodynamics:**
Moran and Shapiro define irreversibility as the "destruction of exergy" or "useful work." They introduce the concept of **exergy** (or availability) as a measure of the maximum work potential of a system. Irreversibilities reduce the exergy of a system.

### 4. The Second Law of Thermodynamics and its Statements (Kelvin–Planck Statement) (CO2: K1, K2)

The Kelvin–Planck statement is a fundamental articulation of the Second Law.

**Kelvin–Planck Statement:**
"It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir and the performance of an equivalent amount of work."

**Implications of the Kelvin–Planck Statement:**

*   **Perpetual Motion Machines of the Second Kind are Impossible:** This statement directly prohibits the creation of a device that could convert all heat input from a single heat reservoir into work in a continuous cycle. This means that no engine can be 100% efficient.
*   **Heat Engines Require Two Reservoirs:** To produce work in a cycle, a heat engine must transfer heat from a high-temperature reservoir and reject some of that heat to a low-temperature reservoir.

**Relationship to Reversible Work:**

The Kelvin–Planck statement implies that the **maximum work output** from a heat engine operating between two reservoirs occurs when the engine operates reversibly. Any irreversibility in the process will reduce the net work output.

**Example:**
A power plant generating electricity from burning fuel is a heat engine. It takes heat from the hot combustion gases (high-temperature reservoir) and rejects waste heat to the atmosphere or a cooling body of water (low-temperature reservoir). It is impossible to convert *all* the heat from the combustion gases into electricity; some heat must always be rejected.

### 5. Reversible Work vs. Actual Work (CO3: K3)

For any process between two states, the actual work delivered by a system ($W_{actual}$) is always less than or equal to the reversible work ($W_{rev}$).

$W_{actual} \leq W_{rev}$

**Explanation:**

*   **$W_{actual} = W_{rev}$:** This equality holds only for reversible processes.
*   **$W_{actual} < W_{rev}$:** This inequality holds for irreversible processes. The difference ($W_{rev} - W_{actual}$) represents the **work potential lost** due to irreversibilities.

**For work input (e.g., compressor or pump):**
The actual work input required by a device is always greater than or equal to the reversible work input.

$W_{actual, input} \geq W_{rev, input}$

**Explanation:**

*   **$W_{actual, input} = W_{rev, input}$:** This equality holds only for reversible processes.
*   **$W_{actual, input} > W_{rev, input}$:** This inequality holds for irreversible processes. The difference ($W_{actual, input} - W_{rev, input}$) represents the **extra work input** needed to overcome irreversibilities.

**Richard E. Sonntag et al. (2014), Chapter 5: The Second Law of Thermodynamics:**
Sonntag's textbook provides detailed explanations of the differences between reversible and actual work, often illustrating these concepts with examples of compressors and turbines.

**Example:**
Consider a compression process. A reversible compressor would require less work input than an actual compressor that experiences friction and other irreversibilities. The extra work input in the actual compressor is dissipated as heat due to these irreversible effects.

### 6. Quantifying Irreversibility: The Work Potential Lost (CO3: K3, CO4: K3)

The difference between reversible work and actual work can be used to quantify the extent of irreversibility.

*   **For work output:**
    $W_{lost} = W_{rev} - W_{actual} \geq 0$
    This is the amount of work that *could have been* obtained but was lost due to irreversibilities.

*   **For work input:**
    $W_{lost} = W_{actual, input} - W_{rev, input} \geq 0$
    This is the amount of extra work that *had to be supplied* due to irreversibilities.

**Connection to Entropy (CO4: K3):**
Irreversibilities are directly linked to the generation of entropy. The total entropy change of the universe for any process is always greater than or equal to zero:

$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} \geq 0$

For a **reversible process**, $\Delta S_{universe} = 0$.
For an **irreversible process**, $\Delta S_{universe} > 0$.

The **entropy generation ($S_{gen}$)** is a measure of irreversibility:
$S_{gen} = \Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings}$

**Relationship between Work Lost and Entropy Generation:**
For a process involving heat transfer $Q$ at temperature $T$, the entropy change of the surroundings is $\Delta S_{surr} = -Q/T$.

For a closed system undergoing a process at constant temperature $T$:
$W_{lost} = T_{surr} \times S_{gen}$

This equation shows that the work lost is directly proportional to the entropy generated and the temperature of the surroundings. Higher entropy generation (more irreversibility) leads to greater work loss.

**Example:**
If a process has an entropy generation of 1 kJ/K and the surroundings are at 300 K, then the work lost due to irreversibilities is $1 \text{ kJ/K} \times 300 \text{ K} = 300 \text{ kJ}$.

### 7. Ideal Processes and Benchmarks (CO1: K2, CO2: K1, K2)

Reversible processes serve as ideal benchmarks against which real-world processes are compared.

*   **Isothermal Reversible Expansion/Compression:** Work is calculated as $\int P dV$.
*   **Adiabatic Reversible Expansion/Compression (Isentropic Process):** Entropy remains constant. For an ideal gas, $PV^\gamma = \text{constant}$. Work is calculated based on this relationship.
*   **Isobaric Reversible Expansion/Compression:** Work is $P(V_2 - V_1)$.
*   **Isochoric Reversible Process:** No work is done ($dV=0$).

**Comparing Actual to Ideal:**

*   **Turbines/Expanders:** Actual work output is less than isentropic (reversible adiabatic) work output.
*   **Compressors/Pumps:** Actual work input is greater than isentropic work input.
*   **Heat Engines:** Reversible heat engines achieve the Carnot efficiency, the maximum possible efficiency between two given temperatures.

**Jean-Philippe Ansermet & Sylvain D. Brechet (2019), Chapter 4: The Second Law:**
This book likely discusses the theoretical limits set by reversible processes and the efficiency of ideal cycles like the Carnot cycle, which is based on reversible processes.

### 8. Practice Questions and Exercises

**Question 1:**
A gas is compressed isothermally and reversibly from 1 m³ to 0.2 m³ at 200 kPa and 300 K. Calculate the reversible work done *on* the gas.
(Assume the gas behaves ideally for simplicity in calculation).

**Solution:**
For an isothermal reversible process of an ideal gas, $W_{rev} = \int_{V_1}^{V_2} P dV = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)$.
Here, $P_1 = 200$ kPa, $V_1 = 1$ m³, $V_2 = 0.2$ m³.
$W_{rev} = (200 \text{ kPa}) \times (1 \text{ m}^3) \times \ln\left(\frac{0.2 \text{ m}^3}{1 \text{ m}^3}\right)$
$W_{rev} = 200 \text{ kPa} \cdot \text{m}^3 \times \ln(0.2)$
$W_{rev} = 200 \text{ kJ} \times (-1.6094)$
$W_{rev} = -321.88 \text{ kJ}$

The work done *on* the gas is the negative of the work done *by* the gas. So, the reversible work done on the gas is **321.88 kJ**.

**Question 2:**
An actual compressor requires 150 kJ of work to compress a gas from state 1 to state 2. If the reversible work for this compression process between the same states is 120 kJ, calculate:
a) The work lost due to irreversibilities.
b) If the process occurred in surroundings at 27°C, what is the minimum entropy generation during the process?

**Solution:**
a) Work lost ($W_{lost}$) for work input:
$W_{lost} = W_{actual, input} - W_{rev, input}$
$W_{lost} = 150 \text{ kJ} - 120 \text{ kJ} = 30 \text{ kJ}$

b) Minimum entropy generation ($S_{gen}$):
The relationship is $W_{lost} = T_{surr} \times S_{gen}$.
First, convert temperature to Kelvin: $T_{surr} = 27^\circ\text{C} + 273.15 = 300.15 \text{ K}$.
$S_{gen} = \frac{W_{lost}}{T_{surr}}$
$S_{gen} = \frac{30 \text{ kJ}}{300.15 \text{ K}}$
$S_{gen} \approx 0.09995 \text{ kJ/K}$
The minimum entropy generation is approximately **0.100 kJ/K**.

**Question 3:**
A heat engine operates between a hot reservoir at 800 K and a cold reservoir at 300 K.
a) What is the maximum possible efficiency of this heat engine?
b) If the actual heat engine has an efficiency of 30%, what is the work lost per kJ of heat supplied from the hot reservoir?

**Solution:**
a) Maximum possible efficiency (Carnot efficiency) is for a reversible heat engine:
$\eta_{carnot} = 1 - \frac{T_L}{T_H} = 1 - \frac{300 \text{ K}}{800 \text{ K}} = 1 - 0.375 = 0.625$ or 62.5%.

b) Actual efficiency ($\eta_{actual}$) = 30% = 0.30.
Work output per kJ of heat supplied from the hot reservoir ($Q_H$):
Actual work output ($W_{actual}$) = $\eta_{actual} \times Q_H = 0.30 \times 1 \text{ kJ} = 0.30 \text{ kJ}$.
Reversible work output ($W_{rev}$) = $\eta_{carnot} \times Q_H = 0.625 \times 1 \text{ kJ} = 0.625 \text{ kJ}$.
Work lost ($W_{lost}$) per kJ of heat supplied from the hot reservoir:
$W_{lost} = W_{rev} - W_{actual} = 0.625 \text{ kJ} - 0.30 \text{ kJ} = 0.325 \text{ kJ}$.
The work lost is **0.325 kJ per kJ of heat supplied**.

### 9. Important Points to Remember

*   **Reversible processes are idealizations** used as benchmarks; all real processes are irreversible.
*   **Irreversibilities lead to a reduction in useful work output** or an **increase in required work input**.
*   **Friction, heat transfer across a finite temperature difference, and unrestrained expansion** are major causes of irreversibility.
*   The Kelvin–Planck statement of the Second Law implies that **100% efficient heat engines are impossible**.
*   **Entropy generation** is a direct measure of irreversibility ($\Delta S_{universe} \ge 0$).
*   **Work lost** due to irreversibilities is related to entropy generation by $W_{lost} = T_{surr} S_{gen}$.
*   Always compare actual performance to ideal (reversible) performance to assess the effectiveness of a process.

### 10. Alignment with Course Outcomes

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** This topic directly addresses fundamental concepts like work, reversible processes, and irreversibility, which are building blocks for thermodynamics.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** The Kelvin–Planck statement is a core component of the Second Law, and its implications for reversible and irreversible processes are explained.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** While this topic focuses on the Second Law, understanding reversible work is crucial for performing *meaningful* First Law analyses, as it defines the theoretical limits of energy conversion. The distinction between actual and reversible work is key for evaluating system performance.
*   **CO4: Determine entropy changes associated with different processes (K3):** The concept of entropy generation as a measure of irreversibility is a direct link between this topic and entropy calculations.
*   **CO5: Determine the properties of pure substances (K2, K3):** While not directly focused on property determination, understanding the idealized processes (like reversible adiabatic expansion) often requires knowledge of substance properties (e.g., specific heat ratios for ideal gases).

These notes provide a foundational understanding of reversible work and irreversibility, which are essential for comprehending the limitations and capabilities of thermodynamic systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
