---
title: "the increase of entropy principle"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f63"
status: "completed"
scrapedAt: "2026-05-20T17:53:42.255Z"
---
# ENGINEERING THERMODYNAMICS: MODULE 3 - SECOND LAW: KELVIN-PLANCK STATEMENT

## TOPIC: THE INCREASE OF ENTROPY PRINCIPLE

---

### 1. INTRODUCTION TO THE SECOND LAW AND ENTROPY

The Second Law of Thermodynamics places fundamental limitations on the efficiency of energy conversion processes and dictates the direction of spontaneous processes. While the First Law deals with the conservation of energy, it does not distinguish between different forms of energy or their quality. The Second Law introduces the concept of **entropy**, a property that quantifies the irreversibility and randomness of a system.

**Key Concepts:**

*   **Entropy (S):** A thermodynamic property that is a measure of the randomness or disorder of a system. It is also related to the unavailability of a system's energy to do work.
*   **Thermodynamic Equilibrium:** A state where a system is in thermal, mechanical, and chemical equilibrium. In such a state, there are no spontaneous changes occurring within the system.
*   **Reversible Process:** An idealized process that can be reversed by an infinitesimal change in a system property, returning both the system and surroundings to their initial states without any net change. These processes are theoretical benchmarks.
*   **Irreversible Process:** A process that cannot be reversed to restore both the system and its surroundings to their original states. All real-world processes are irreversible to some extent.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6 introduces the Second Law and the concept of entropy.
*   **P.K. Nag:** Chapter 6 covers the Second Law and introduces entropy.

**Course Outcomes Alignment:**

*   **CO1:** Understand basic concepts of thermodynamics (K1, K2) - *Introduction to entropy, equilibrium.*
*   **CO2:** Understand the laws of thermodynamics (K1, K2) - *Foundation for the Second Law.*

---

### 2. THE KELVIN-PLANCK STATEMENT OF THE SECOND LAW

The Kelvin-Planck statement is one of the most common formulations of the Second Law of Thermodynamics. It directly relates to the impossibility of certain heat engine operations.

**Statement:**

"It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir and the performance of an equivalent amount of work."

**Implications:**

*   **No perfect heat engine:** This statement implies that a heat engine cannot convert all the heat it receives from a high-temperature reservoir entirely into work. Some heat must always be rejected to a lower-temperature reservoir.
*   **Heat engines are cyclical devices:** The statement specifically refers to devices operating in a cycle.
*   **Foundation for efficiency limitations:** It sets a fundamental limit on the thermal efficiency of any heat engine.

**Example:**

Consider a steam power plant. It receives heat from the combustion of fuel (high-temperature reservoir), converts some of it into work (driving a turbine), and rejects the remaining heat to a cooling tower or river (low-temperature reservoir). According to the Kelvin-Planck statement, it's impossible to design a power plant that takes heat from the furnace and converts 100% of it into shaft work, with no heat rejection.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.1 discusses the Kelvin-Planck statement.
*   **P.K. Nag:** Chapter 6.2 presents the Kelvin-Planck statement.
*   **Moran & Shapiro:** Chapter 6.1 covers the Kelvin-Planck statement.

**Course Outcomes Alignment:**

*   **CO2:** Understand the laws of thermodynamics (K1, K2) - *Directly addresses the Second Law.*

---

### 3. THE INCREASE OF ENTROPY PRINCIPLE

The **increase of entropy principle** is a more general and widely applicable statement of the Second Law, directly related to the concept of entropy itself. It states that the entropy of an isolated system never decreases.

**Statement:**

"The entropy of an isolated system is always greater than or equal to the entropy of the initial state. For a reversible process, the entropy change is zero, and for an irreversible process, the entropy change is positive."

Mathematically, for an isolated system:

$\Delta S_{isolated} \ge 0$

Where:
*   $\Delta S_{isolated}$ is the change in entropy of the isolated system.

**Entropy Change of the Universe:**

For any process (reversible or irreversible), the entropy change of the universe (system + surroundings) is always positive or zero.

$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} \ge 0$

*   **$\Delta S_{universe} > 0$:** For irreversible (real) processes.
*   **$\Delta S_{universe} = 0$:** For reversible (ideal) processes.

**Significance of the Increase of Entropy Principle:**

*   **Direction of Spontaneous Processes:** It dictates the direction of natural processes. Processes occur spontaneously in the direction that increases the total entropy of the universe.
*   **Measure of Irreversibility:** The magnitude of the entropy generation ($S_{gen} = \Delta S_{universe}$) quantifies the irreversibility of a process. The greater the entropy generation, the more irreversible the process.
*   **Unavailability of Energy:** As entropy increases, the amount of energy available to do useful work decreases.

**Example:**

1.  **Heat Transfer between two bodies at different temperatures:**
    *   Consider a hot body ($T_H$) in contact with a cold body ($T_C$), where $T_H > T_C$. Heat flows spontaneously from the hot body to the cold body.
    *   The entropy change of the hot body is $\Delta S_H = -Q/T_H$.
    *   The entropy change of the cold body is $\Delta S_C = +Q/T_C$.
    *   The total entropy change is $\Delta S_{universe} = \Delta S_H + \Delta S_C = Q/T_C - Q/T_H = Q(1/T_C - 1/T_H)$.
    *   Since $T_H > T_C$, $1/T_C > 1/T_H$, thus $\Delta S_{universe} > 0$. This process increases entropy and is spontaneous.
    *   If heat were to flow from the cold to the hot body, it would require external work (e.g., a refrigerator), and the total entropy of the universe would still increase.

2.  **Free Expansion of a Gas:**
    *   When a gas expands into a vacuum (free expansion), its volume increases, and its molecules occupy a larger space, leading to increased randomness and therefore increased entropy. This is a highly irreversible process.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.5 discusses the increase of entropy principle.
*   **P.K. Nag:** Chapter 6.4 presents the increase of entropy principle.
*   **Moran & Shapiro:** Chapter 6.3 covers the increase of entropy principle.
*   **Sonntag, Borgnakke, VanWylen:** Chapter 7.6 discusses the increase of entropy principle.

**Course Outcomes Alignment:**

*   **CO2:** Understand the laws of thermodynamics (K1, K2) - *Core principle of the Second Law.*
*   **CO4:** Determine entropy changes associated with different processes (K3) - *This principle is fundamental to calculating $\Delta S$.*

---

### 4. ENTROPY CHANGE FOR DIFFERENT PROCESSES

Calculating entropy changes is crucial for analyzing thermodynamic processes.

#### 4.1 Entropy Change for Pure Substances

For a pure substance undergoing a process, the entropy change can be calculated using property tables or thermodynamic relations.

**Key Relations:**

*   **For a reversible process:** $dS = \frac{\delta Q_{rev}}{T}$
*   **Entropy change in terms of specific heat:**
    *   For incompressible substances (solids and liquids): $ds = c_p dT$ or $ds = c_v dT$ (since $c_p \approx c_v$).
        $\Delta s = \int_{T_1}^{T_2} c \frac{dT}{T} = c \ln\left(\frac{T_2}{T_1}\right)$
    *   For ideal gases:
        *   Using specific heats at constant volume ($c_v$): $\Delta s = c_{v,avg} \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)$
        *   Using specific heats at constant pressure ($c_p$): $\Delta s = c_{p,avg} \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$
        *   **Note:** For ideal gases with constant specific heats, these equations are exact. For variable specific heats, use average values or integrate.

**Example (Ideal Gas, Constant Specific Heats):**

Calculate the entropy change of 2 kg of nitrogen gas ($R = 0.2968 \, \text{kJ/kg} \cdot \text{K}$, $c_v = 0.745 \, \text{kJ/kg} \cdot \text{K}$) as it is heated from 300 K to 500 K at a constant volume.

*   $\Delta S = m \Delta s = m \left[c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)\right]$
*   Since $v_1 = v_2$, $\ln(v_2/v_1) = \ln(1) = 0$.
*   $\Delta S = (2 \, \text{kg}) \times (0.745 \, \text{kJ/kg} \cdot \text{K}) \times \ln\left(\frac{500 \, \text{K}}{300 \, \text{K}}\right)$
*   $\Delta S = 1.49 \, \text{kJ/K} \times \ln(1.6667) \approx 1.49 \, \text{kJ/K} \times 0.5108 \approx 0.761 \, \text{kJ/K}$

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.4 discusses entropy calculation for various substances.
*   **P.K. Nag:** Chapter 6.3 details entropy calculations for solids, liquids, gases, and ideal gases.
*   **Moran & Shapiro:** Chapter 6.5 covers entropy changes for pure substances and ideal gases.
*   **Sonntag, Borgnakke, VanWylen:** Chapter 7.4 deals with entropy changes for pure substances, and Chapter 7.5 for ideal gases.
*   **Ansermet & Brechet:** Chapters on specific thermodynamic processes will likely detail entropy calculations.

**Course Outcomes Alignment:**

*   **CO4:** Determine entropy changes associated with different processes (K3) - *This is the core of this section.*
*   **CO5:** Determine the properties of pure substances (K2, K3) - *Requires knowledge of substance properties to use tables.*

#### 4.2 Entropy Change for Isentropic Processes

An **isentropic process** is a reversible adiabatic process. Since it's reversible and adiabatic ($\delta Q = 0$), the entropy change is zero.

$\Delta s = 0$ (isentropic)

**Key Relations for Ideal Gases (Constant Specific Heats):**

*   $\frac{T_2}{T_1} = \left(\frac{v_2}{v_1}\right)^{-(k-1)}$
*   $\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}$
*   $\frac{P_2}{P_1} = \left(\frac{v_1}{v_2}\right)^{k}$

Where $k = c_p / c_v$ is the specific heat ratio.

**Example (Isentropic Compression of Air):**

Air is compressed isentropically from 100 kPa and 20°C to 500 kPa. Determine the final temperature. Assume air behaves as an ideal gas with $k=1.4$.

*   $T_1 = 20^\circ\text{C} = 293.15 \, \text{K}$
*   $\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}$
*   $\frac{T_2}{293.15 \, \text{K}} = \left(\frac{500 \, \text{kPa}}{100 \, \text{kPa}}\right)^{(1.4-1)/1.4} = (5)^{0.4/1.4} = (5)^{0.2857}$
*   $\frac{T_2}{293.15 \, \text{K}} \approx 1.541$
*   $T_2 \approx 1.541 \times 293.15 \, \text{K} \approx 451.6 \, \text{K}$
*   $T_2 \approx 451.6 - 273.15 \approx 178.45 \, \text{°C}$

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.4 discusses isentropic processes.
*   **P.K. Nag:** Chapter 6.3 covers isentropic processes for ideal gases.
*   **Moran & Shapiro:** Chapter 6.5 includes relations for isentropic processes of ideal gases.

**Course Outcomes Alignment:**

*   **CO4:** Determine entropy changes associated with different processes (K3) - *Understanding $\Delta s = 0$ for isentropic processes.*

#### 4.3 Entropy Change for Adiabatic Irreversible Processes

For an adiabatic irreversible process ($\delta Q = 0$), the entropy change is positive ($\Delta s > 0$).

$\Delta s > 0$ (adiabatic irreversible)

**Example:**

*   **Unrestrained Expansion of a Gas:** A gas expanding freely into a vacuum is adiabatic and irreversible, leading to an increase in entropy.
*   **Real Turbines and Compressors:** These devices operate adiabatically (ideally), but due to friction and turbulence, they are irreversible, resulting in an increase in entropy of the working fluid.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.5 discusses entropy generation in irreversible processes.
*   **P.K. Nag:** Chapter 6.4 discusses entropy generation for irreversible processes.

**Course Outcomes Alignment:**

*   **CO4:** Determine entropy changes associated with different processes (K3) - *Recognizing $\Delta s > 0$ for these processes.*

---

### 5. ENTROPY GENERATION

Entropy generation is a key concept to quantify the irreversibility within a system or process.

**Definition:**

Entropy generation ($S_{gen}$) is the total entropy change of the universe for a given process. It is always a positive quantity for irreversible processes and zero for reversible processes.

$S_{gen} = \Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings}$

For a system where heat transfer occurs across a boundary at temperature $T$:

$\Delta S_{system} = \int_{1}^{2} \frac{\delta Q_{rev}}{T}$ (for reversible processes)
$\Delta S_{system} \ge \int_{1}^{2} \frac{\delta Q}{T}$ (for irreversible processes)

And for the surroundings:

$\Delta S_{surroundings} = -\frac{Q_{surr}}{T_{surr}}$ (assuming heat transfer to the surroundings is from a single reservoir at $T_{surr}$)

Therefore, for a system and its surroundings:

$S_{gen} = \Delta S_{system} + \Delta S_{surroundings} = \int_{1}^{2} \frac{\delta Q_{rev}}{T} - \frac{Q_{surr}}{T_{surr}} \ge 0$

**Interpretation:**

*   $S_{gen} > 0$: Irreversible process. Energy is degraded, and the quality of energy is reduced.
*   $S_{gen} = 0$: Reversible process. No energy degradation occurs.

**Example (Heat Transfer):**

Consider heat transfer of 10 kJ from a reservoir at 500 K to another reservoir at 300 K.

*   $T_1 = 500 \, \text{K}$, $Q = -10 \, \text{kJ}$ (from reservoir 1)
*   $T_2 = 300 \, \text{K}$, $Q = +10 \, \text{kJ}$ (to reservoir 2)
*   $\Delta S_{reservoir1} = \frac{-10 \, \text{kJ}}{500 \, \text{K}} = -0.02 \, \text{kJ/K}$
*   $\Delta S_{reservoir2} = \frac{+10 \, \text{kJ}}{300 \, \text{K}} = +0.0333 \, \text{kJ/K}$
*   $S_{gen} = \Delta S_{reservoir1} + \Delta S_{reservoir2} = -0.02 \, \text{kJ/K} + 0.0333 \, \text{kJ/K} = 0.0133 \, \text{kJ/K}$
*   Since $S_{gen} > 0$, the process is irreversible.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6.5 introduces entropy generation.
*   **P.K. Nag:** Chapter 6.4 discusses entropy generation and its meaning.
*   **Moran & Shapiro:** Chapter 6.3 discusses entropy generation.

**Course Outcomes Alignment:**

*   **CO4:** Determine entropy changes associated with different processes (K3) - *Directly related to calculating $S_{gen}$.*

---

### 6. SIGNIFICANCE AND APPLICATIONS OF THE INCREASE OF ENTROPY PRINCIPLE

The increase of entropy principle has profound implications across various engineering disciplines.

**Key Applications:**

*   **Efficiency Analysis:** It sets limits on the maximum theoretical efficiency of heat engines, refrigerators, and heat pumps (e.g., Carnot efficiency).
*   **Process Evaluation:** It helps in evaluating the performance of real-world devices like turbines, compressors, pumps, and heat exchangers by quantifying their irreversibilities.
*   **Direction of Chemical Reactions:** Spontaneous chemical reactions tend to increase the entropy of the universe.
*   **Mixing Processes:** Mixing of different substances or diffusion processes are typically irreversible and lead to an increase in entropy.
*   **Thermal Pollution:** The rejection of waste heat to the environment contributes to an increase in the entropy of the atmosphere or water bodies.
*   **Information Theory:** Entropy is also a fundamental concept in information theory, measuring the uncertainty or information content.

**Important Points to Remember:**

*   **Entropy is a property:** Like temperature, pressure, and volume, entropy is a state function. Its change depends only on the initial and final states, not the path taken.
*   **Entropy of an isolated system never decreases:** This is the most fundamental statement of the Second Law.
*   **Entropy generation quantifies irreversibility:** Higher entropy generation means a less efficient and more irreversible process.
*   **The universe tends towards greater disorder:** This is the macroscopic interpretation of the increase of entropy principle.
*   **Reversible processes are theoretical benchmarks:** Real processes are always irreversible to some extent.

**Textbook References:**

*   **Cengel, Boles, Kanoğlu:** Chapter 6 summarizes the implications of the Second Law.
*   **P.K. Nag:** Chapter 6 provides a good overview of applications.
*   **Moran & Shapiro:** Chapter 6.6 discusses the second law in relation to performance and limitations.
*   **Sonntag, Borgnakke, VanWylen:** Chapter 7 covers the broad implications of entropy.

**Course Outcomes Alignment:**

*   **CO2:** Understand the laws of thermodynamics (K1, K2) - *Appreciating the practical significance.*
*   **CO4:** Determine entropy changes associated with different processes (K3) - *Understanding *why* we calculate entropy changes.*

---

### 7. PRACTICE QUESTIONS AND EXERCISES

**Question 1 (CO4, K3):**
Calculate the entropy change of 5 kg of steam at 2 MPa as it is cooled at constant pressure to 200°C. Use steam tables.

**Question 2 (CO4, K3):**
Air at 27°C and 100 kPa undergoes a process. Determine the entropy change per unit mass if the final state is 127°C and 300 kPa. Assume air behaves as an ideal gas with constant specific heats ($c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$, $c_v = 0.718 \, \text{kJ/kg} \cdot \text{K}$, $R = 0.287 \, \text{kJ/kg} \cdot \text{K}$).

**Question 3 (CO2, CO4, K3):**
A heat pump is used to heat a house. It exchanges heat with the outdoor air at 5°C and the indoor air at 22°C. The heat pump delivers 100 MJ of energy to the house in 5 hours. The heat pump has a coefficient of performance (COP) of 2.5.
a) Calculate the rate of heat absorbed from the outdoor air.
b) Calculate the rate of heat rejected to the indoor air.
c) Calculate the rate of work input to the heat pump.
d) Is this heat pump operating on a reversible cycle? Justify your answer using the increase of entropy principle for the universe.

**Question 4 (CO4, K3):**
Calculate the entropy change of a 10 kg block of iron initially at 100°C as it is cooled to 20°C in a room at 20°C. The specific heat of iron is approximately $c = 0.45 \, \text{kJ/kg} \cdot \text{K}$.

**Question 5 (CO2, K1):**
State the Kelvin-Planck statement of the Second Law and explain its significance.

---

### 8. ANSWERS TO PRACTICE QUESTIONS

**Answer 1:**
To solve this, you would need to use steam tables.
*   Find the specific entropy of steam at 2 MPa and 200°C ($s_2$).
*   Find the specific entropy of steam at 2 MPa in the saturated vapor state (or the relevant state at 2 MPa if superheated and then cooled to saturated vapor at the same pressure) if you are starting from there, or use the initial given state. Assuming the question implies cooling from a superheated state at 2 MPa to a saturated vapor state at 2 MPa and 200°C.
    *   From steam tables, at 2 MPa and 200°C, the specific entropy ($s_2$) is approximately 6.7986 kJ/kg·K.
    *   If the initial state was saturated vapor at 2 MPa (15.09 bar), $s_1 = 6.4513 \, \text{kJ/kg} \cdot \text{K}$.
    *   $\Delta s = s_2 - s_1 = 6.7986 - 6.4513 = 0.3473 \, \text{kJ/kg} \cdot \text{K}$.
    *   $\Delta S = m \times \Delta s = 5 \, \text{kg} \times 0.3473 \, \text{kJ/kg} \cdot \text{K} = 1.7365 \, \text{kJ/K}$.
    *(Note: The exact initial state needs to be specified for a definitive calculation. This answer assumes cooling from saturated vapor at 2 MPa to the stated final state.)*

**Answer 2:**
We use the formula for ideal gases with constant specific heats:
$\Delta s = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$
Given:
$T_1 = 27^\circ\text{C} = 300 \, \text{K}$
$P_1 = 100 \, \text{kPa}$
$T_2 = 127^\circ\text{C} = 400 \, \text{K}$
$P_2 = 300 \, \text{kPa}$
$c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$
$R = 0.287 \, \text{kJ/kg} \cdot \text{K}$

$\Delta s = (1.005 \, \text{kJ/kg} \cdot \text{K}) \ln\left(\frac{400}{300}\right) - (0.287 \, \text{kJ/kg} \cdot \text{K}) \ln\left(\frac{300}{100}\right)$
$\Delta s = (1.005) \ln(1.333) - (0.287) \ln(3)$
$\Delta s = (1.005)(0.2877) - (0.287)(1.0986)$
$\Delta s = 0.2891 \, \text{kJ/kg} \cdot \text{K} - 0.3153 \, \text{kJ/kg} \cdot \text{K}$
$\Delta s = -0.0262 \, \text{kJ/kg} \cdot \text{K}$

**Answer 3:**
Given: $T_{outdoor} = 5^\circ\text{C} = 278.15 \, \text{K}$, $T_{indoor} = 22^\circ\text{C} = 295.15 \, \text{K}$, $\dot{Q}_{delivered} = \frac{100 \, \text{MJ}}{5 \, \text{h}} = 20 \, \text{MJ/h}$, COP = 2.5.

a)  **Rate of heat absorbed from outdoor air ($\dot{Q}_L$):**
    COP = $\frac{\dot{Q}_{delivered}}{\dot{W}_{in}}$ and for a heat pump, COP = $\frac{\dot{Q}_H}{\dot{W}_{in}}$, where $\dot{Q}_H = \dot{Q}_L + \dot{W}_{in}$.
    So, COP = $\frac{\dot{Q}_L + \dot{W}_{in}}{\dot{W}_{in}} = \frac{\dot{Q}_L}{\dot{W}_{in}} + 1$.
    This is not correct for COP definition. For a heat pump, COP is defined as $\frac{\text{Desired Output}}{\text{Required Input}} = \frac{\dot{Q}_H}{\dot{W}_{in}}$.
    Where $\dot{Q}_H$ is the heat delivered to the hot space (house).
    So, $\dot{Q}_H = 20 \, \text{MJ/h}$.
    COP = $\frac{\dot{Q}_H}{\dot{W}_{in}} \implies 2.5 = \frac{20 \, \text{MJ/h}}{\dot{W}_{in}}$
    $\dot{W}_{in} = \frac{20}{2.5} = 8 \, \text{MJ/h}$.

    Now, for a heat pump, $\dot{Q}_H = \dot{Q}_L + \dot{W}_{in}$.
    $20 \, \text{MJ/h} = \dot{Q}_L + 8 \, \text{MJ/h}$
    $\dot{Q}_L = 20 - 8 = 12 \, \text{MJ/h}$.

b)  **Rate of heat rejected to the indoor air ($\dot{Q}_H$):**
    $\dot{Q}_H = 20 \, \text{MJ/h}$ (given as delivered to the house).

c)  **Rate of work input to the heat pump ($\dot{W}_{in}$):**
    Calculated in part (a): $\dot{W}_{in} = 8 \, \text{MJ/h}$.

d)  **Is this heat pump operating on a reversible cycle?**
    To check if it's reversible, we need to see if $\Delta S_{universe} \ge 0$. For a reversible cycle, $\Delta S_{universe} = 0$.
    The ideal COP for a reversible heat pump (Carnot COP) is:
    COP$_{Carnot}$ = $\frac{T_H}{T_H - T_L} = \frac{295.15 \, \text{K}}{295.15 \, \text{K} - 278.15 \, \text{K}} = \frac{295.15}{17} \approx 17.36$.
    The actual COP is 2.5, which is significantly lower than the Carnot COP. This indicates irreversibilities.

    Let's calculate $\Delta S_{universe}$ for the actual heat pump.
    $\Delta S_{system} = 0$ because it operates in a cycle.
    $\Delta S_{surroundings} = \Delta S_{outdoor\_air} + \Delta S_{indoor\_air}$
    $\Delta S_{outdoor\_air} = \frac{\dot{Q}_L}{T_{outdoor}} = \frac{12 \, \text{MJ/h}}{278.15 \, \text{K}}$
    $\Delta S_{indoor\_air} = -\frac{\dot{Q}_H}{T_{indoor}} = -\frac{20 \, \text{MJ/h}}{295.15 \, \text{K}}$

    $\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} = 0 + \frac{12 \, \text{MJ/h}}{278.15 \, \text{K}} - \frac{20 \, \text{MJ/h}}{295.15 \, \text{K}}$
    $\Delta S_{universe} = 0.04314 \, \text{MJ/h} \cdot \text{K} - 0.06776 \, \text{MJ/h} \cdot \text{K}$
    $\Delta S_{universe} = -0.02462 \, \text{MJ/h} \cdot \text{K}$

    **Correction needed:** The sign convention for entropy transfer to/from the surroundings needs to be consistent. If $\dot{Q}_L$ is absorbed from the outdoor air (system is the heat pump), then outdoor air entropy increases. If $\dot{Q}_H$ is rejected to the indoor air, then indoor air entropy decreases.

    Let's re-evaluate:
    $\Delta S_{universe} = \Delta S_{house} + \Delta S_{environment}$
    The heat pump adds heat to the house: $\Delta S_{house} = \frac{\dot{Q}_H}{T_{indoor}} = \frac{20 \, \text{MJ/h}}{295.15 \, \text{K}} = 0.06776 \, \text{MJ/h} \cdot \text{K}$.
    The heat pump absorbs heat from the outdoor environment: $\Delta S_{environment} = -\frac{\dot{Q}_L}{T_{outdoor}} = -\frac{12 \, \text{MJ/h}}{278.15 \, \text{K}} = -0.04314 \, \text{MJ/h} \cdot \text{K}$.

    $\Delta S_{universe} = \Delta S_{house} + \Delta S_{environment} = 0.06776 - 0.04314 = 0.02462 \, \text{MJ/h} \cdot \text{K}$.

    Since $\Delta S_{universe} > 0$, the process is irreversible. Therefore, the heat pump is **not** operating on a reversible cycle.

**Answer 4:**
We use the formula for incompressible substances:
$\Delta s = c \ln\left(\frac{T_2}{T_1}\right)$
Given:
$m = 10 \, \text{kg}$
$T_1 = 100^\circ\text{C} = 373.15 \, \text{K}$
$T_2 = 20^\circ\text{C} = 293.15 \, \text{K}$
$c = 0.45 \, \text{kJ/kg} \cdot \text{K}$
Room temperature $T_{room} = 20^\circ\text{C} = 293.15 \, \text{K}$

Entropy change of the iron block:
$\Delta s_{iron} = (0.45 \, \text{kJ/kg} \cdot \text{K}) \ln\left(\frac{293.15}{373.15}\right)$
$\Delta s_{iron} = (0.45) \ln(0.7856)$
$\Delta s_{iron} = (0.45)(-0.2413)$
$\Delta s_{iron} = -0.1086 \, \text{kJ/kg} \cdot \text{K}$

Total entropy change of the iron block:
$\Delta S_{iron} = m \times \Delta s_{iron} = 10 \, \text{kg} \times (-0.1086 \, \text{kJ/kg} \cdot \text{K}) = -1.086 \, \text{kJ/K}$.

The process is from the iron's perspective. The question asks for the entropy change *of the iron block*.

If the question implied the entropy change of the universe (iron + room):
Entropy change of the room (surroundings): Heat lost by iron is gained by the room. $Q_{lost} = - \Delta S_{iron} \times T_{room} = -(-1.086 \, \text{kJ/K}) \times 293.15 \, \text{K} \approx 318.4 \, \text{kJ}$.
$\Delta S_{room} = \frac{Q_{gained}}{T_{room}} = \frac{318.4 \, \text{kJ}}{293.15 \, \text{K}} \approx 1.086 \, \text{kJ/K}$.
$\Delta S_{universe} = \Delta S_{iron} + \Delta S_{room} = -1.086 \, \text{kJ/K} + 1.086 \, \text{kJ/K} = 0 \, \text{kJ/K}$.
This implies the cooling to the room at the same temperature is a reversible process from the universe's perspective.

However, typically, questions asking for the "entropy change of a block" refer only to the block.

**Answer 5:**
**Kelvin-Planck Statement:** "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir and the performance of an equivalent amount of work."

**Significance:**
This statement implies that no heat engine can be 100% efficient. For a heat engine to produce work, it must reject some heat to a colder reservoir. This is because converting all thermal energy into mechanical work is fundamentally impossible without violating the Second Law. It highlights the necessity of a temperature difference for work production from heat and sets a theoretical upper limit on the efficiency of heat engines (Carnot efficiency). It also implies that heat naturally flows from hotter to colder bodies, and the reverse requires work.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
