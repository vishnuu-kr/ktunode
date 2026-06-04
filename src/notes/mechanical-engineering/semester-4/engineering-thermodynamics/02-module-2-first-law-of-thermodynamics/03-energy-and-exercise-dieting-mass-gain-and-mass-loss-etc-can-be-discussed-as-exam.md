---
title: "(energy and exercise, dieting, mass gain and mass loss, etc. Can be discussed as examples)"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f46"
status: "completed"
scrapedAt: "2026-05-20T17:53:22.474Z"
---
## Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

**Topic:** Energy and Exercise, Dieting, Mass Gain and Mass Loss (as examples of First Law Applications)

**Course Outcomes Addressed:**
*   **CO1:** Understand basic concepts of thermodynamics (K1, K2)
*   **CO2:** Understand the laws of thermodynamics (K1, K2)
*   **CO3:** Conduct first law analysis of open and closed systems (K3)

---

### 1. Introduction to the First Law of Thermodynamics

The First Law of Thermodynamics, also known as the law of conservation of energy, is a fundamental principle stating that energy cannot be created or destroyed, only transformed from one form to another.

**Key Concepts:**

*   **Energy:** The capacity to do work. It exists in various forms, including internal energy, kinetic energy, potential energy, chemical energy, and thermal energy.
*   **System:** A quantity of matter or region in space chosen for study.
*   **Surroundings:** Everything outside the system.
*   **Boundary:** The real or imaginary surface that separates the system from its surroundings.
*   **Closed System:** A system where energy can cross the boundary, but mass cannot. (Cengel et al., 2011)
*   **Open System (Control Volume):** A system where both energy and mass can cross the boundary. (Cengel et al., 2011)
*   **Isolated System:** A system where neither energy nor mass can cross the boundary.
*   **State:** The condition of a system characterized by its properties (e.g., temperature, pressure, volume).
*   **Process:** A transformation from one state to another.
*   **Cycle:** A process or series of processes that return a system to its initial state.
*   **Work (W):** Energy transferred by mechanical means.
*   **Heat (Q):** Energy transferred due to a temperature difference.

**The First Law Statement:**

For a **closed system** undergoing a process, the change in internal energy is equal to the net heat transferred into the system minus the net work done by the system.

$$
\Delta E = Q_{net,in} - W_{net,out}
$$

Where:
*   $\Delta E$ is the change in total energy of the system. For many applications, changes in kinetic and potential energy are negligible, so $\Delta E \approx \Delta U$.
*   $Q_{net,in}$ is the net heat transferred *to* the system.
*   $W_{net,out}$ is the net work done *by* the system.

**Sign Convention:**
*   Heat added *to* the system is positive ($Q_{in}$).
*   Heat removed *from* the system is negative ($Q_{out}$).
*   Work done *by* the system is positive ($W_{out}$).
*   Work done *on* the system is negative ($W_{in}$).

Therefore, the equation can also be written as:

$$
Q - W = \Delta E
$$

**Internal Energy (U):** The sum of all microscopic forms of energy within a system. For a pure substance, internal energy is primarily a function of temperature.

**Specific Internal Energy (u):** Internal energy per unit mass ($u = U/m$).

**First Law for a Cycle:** For a system undergoing a cycle, the net heat transfer equals the net work done.

$$
Q_{net} = W_{net}
$$

---

### 2. The First Law of Thermodynamics for Closed Systems

For a closed system, the First Law can be expressed in rate form as:

$$
\dot{Q}_{net,in} - \dot{W}_{net,out} = \frac{dE_{system}}{dt}
$$

Where $\dot{Q}$ and $\dot{W}$ are the rates of heat and work transfer, respectively.

**Specific Heat:** The amount of heat required to raise the temperature of a unit mass of a substance by one degree.

*   **Specific Heat at Constant Volume ($c_v$):** The heat transfer per unit mass per unit temperature change when the volume is held constant.
    *   $Q_{cv} = m \int_{T_1}^{T_2} c_v(T) dT$
    *   For ideal gases with constant specific heats: $Q_{cv} = m c_v (T_2 - T_1)$
    *   In differential form: $q_{cv} = c_v dT \implies \Delta u = c_v \Delta T$ (Cengel et al., 2011)

*   **Specific Heat at Constant Pressure ($c_p$):** The heat transfer per unit mass per unit temperature change when the pressure is held constant.
    *   $Q_{cp} = m \int_{T_1}^{T_2} c_p(T) dT$
    *   For ideal gases with constant specific heats: $Q_{cp} = m c_p (T_2 - T_1)$
    *   The relationship $c_p = c_v + R$ holds for ideal gases, where R is the gas constant. (Nag, 2017)

**Enthalpy (H):** A property defined as $H = U + PV$, where $P$ is pressure and $V$ is volume.
*   **Specific Enthalpy (h):** $h = u + Pv = U/m + Pv$
*   Enthalpy is particularly useful for analyzing processes involving constant pressure heat transfer and open systems.
*   For isobaric (constant pressure) processes: $Q_{cp} = \Delta H = m (h_2 - h_1)$.
*   In differential form: $q_{cp} = dh$.

**Important Note on Enthalpy:** For ideal gases, enthalpy is solely a function of temperature, just like internal energy. Therefore, $h_2 - h_1 = c_p(T_2 - T_1)$ and $u_2 - u_1 = c_v(T_2 - T_1)$ for ideal gases. (Sonntag et al., 2014)

**Work Done by Expanding Gas in a Closed System:**
The work done when a system expands or contracts against a variable pressure is given by:

$$
W_{out} = \int_{V_1}^{V_2} P dV
$$

This integral represents the area under the process curve on a P-V diagram. Different processes (isothermal, isobaric, adiabatic) will have different forms of $P(V)$ and thus different amounts of work done.

---

### 3. The First Law of Thermodynamics for Open Systems (Control Volumes)

The First Law for open systems is expressed in terms of the flow of energy associated with mass crossing the boundary.

**Steady-Flow Process:** A process where the properties of the control volume do not change with time.

The steady-flow energy equation is derived by applying the First Law to a control volume:

$$
\dot{Q}_{in} + \sum_{in} \dot{m} (h + \frac{V^2}{2} + gz)_{in} = \dot{W}_{out} + \sum_{out} \dot{m} (h + \frac{V^2}{2} + gz)_{out}
$$

Where:
*   $\dot{Q}_{in}$ is the net rate of heat transfer *into* the control volume.
*   $\dot{W}_{out}$ is the net rate of work done *by* the control volume (including shaft work and flow work).
*   $\dot{m}$ is the mass flow rate.
*   $h$ is the specific enthalpy.
*   $V$ is the velocity.
*   $z$ is the elevation.
*   The subscripts 'in' and 'out' refer to the properties at the inlet and exit streams.

**Simplifications for Steady Flow:**

*   **Single Inlet, Single Outlet:**
    $$
    \dot{Q}_{in} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{W}_{out} + \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)
    $$
*   **Negligible Kinetic and Potential Energy Changes:** If $\Delta KE$ and $\Delta PE$ are small (e.g., in heat exchangers, boilers, condensers), the equation simplifies to:
    $$
    \dot{Q}_{in} + \dot{m}h_1 = \dot{W}_{out} + \dot{m}h_2
    $$
    Or, in terms of specific heat transfer and work:
    $$
    q_{in} + h_1 = w_{out} + h_2 \implies q_{in} - w_{out} = h_2 - h_1 = \Delta h
    $$

**Flow Work:** The work done by the fluid to push itself into or out of the control volume. It is equal to $PV$.

**Shaft Work:** The work transmitted by a rotating shaft (e.g., in a turbine or compressor).

**Energy Balance for a Control Volume (General Form):**
$$
E_{in} - E_{out} = \Delta E_{CV}
$$
Where $E_{in}$ and $E_{out}$ represent the total energy entering and leaving the control volume, including internal energy, kinetic energy, potential energy, and flow work.

---

### 4. Applications of the First Law: Energy and Exercise, Dieting, Mass Gain/Loss

The human body can be modeled as a thermodynamic system. The First Law of Thermodynamics is essential for understanding energy balance in biological systems.

**Human Body as a System:**

*   **Closed System Approximation (Short Term):** For short periods of activity, we can often approximate the body as a closed system where mass exchange is minimal.
*   **Open System Approximation (Long Term):** Over longer periods, considering the intake of food (mass and energy) and elimination of waste products, an open system approach is more appropriate.

**Energy Intake:**

*   **Food:** Food provides chemical energy. When metabolized, this energy is released and can be used for work (muscle activity), stored as fat (internal energy), or lost as heat.
    *   Macronutrients have specific caloric values:
        *   Carbohydrates: ~4 kcal/g
        *   Proteins: ~4 kcal/g
        *   Fats: ~9 kcal/g
    *   Alcohol: ~7 kcal/g (also contributes to energy intake)
*   **Oxygen:** Oxygen intake is crucial for aerobic metabolism, where food energy is converted into usable energy (ATP) and heat.

**Energy Output:**

*   **Metabolic Rate:** The rate at which the body consumes energy.
    *   **Basal Metabolic Rate (BMR):** The minimum energy expenditure required to maintain basic bodily functions at rest. (K1)
    *   **Resting Metabolic Rate (RMR):** Similar to BMR but measured under less strict conditions.
    *   **Activity-Based Thermogenesis:** Energy expended during physical activity.
*   **Work:**
    *   **External Work:** Muscular work that results in movement of the body or objects (e.g., running, lifting weights).
    *   **Internal Work:** Work done for bodily functions (e.g., breathing, circulation, cellular processes).
*   **Heat Transfer:** The body continuously loses heat to the surroundings to maintain its core temperature. This is a significant component of energy output.
*   **Waste Products:** Energy is lost in waste products (urine, feces), though this is typically a small percentage.

**Applying the First Law to the Body:**

Let's consider the body as a system over a period of time ($\Delta t$).

*   **Energy In:** $E_{in} = E_{food} + E_{oxygen}$ (where $E_{oxygen}$ is the energy released from metabolizing oxygen with food)
*   **Energy Out:** $E_{out} = W_{external} + W_{internal} + Q_{loss} + E_{waste}$
*   **Change in Stored Energy:** $\Delta E_{stored} = \Delta U$ (primarily as fat, muscle, glycogen)

**First Law Equation:**

$$
E_{in} - E_{out} = \Delta E_{stored}
$$

$$
E_{food} + E_{metabolized\_oxygen} - (W_{external} + W_{internal} + Q_{loss} + E_{waste}) = \Delta U
$$

**(Cengel et al., 2011 and Nag, 2017's principles of energy balance are directly applicable here.)**

**Example 1: Exercise**

*   A person consumes 2500 kcal of food in a day.
*   Their resting metabolic rate is 1500 kcal.
*   They engage in 1 hour of vigorous exercise, burning an additional 500 kcal (external work and associated heat).
*   The body loses heat to the surroundings at a rate of 100 kcal/hour for the entire day (24 hours). Assume negligible waste energy.

Let's analyze the energy balance for the day.

*   **Energy In:** $E_{food} = 2500$ kcal.
*   **Energy Out:**
    *   Resting metabolism (includes internal work and heat loss): $1500$ kcal.
    *   Exercise (external work + increased metabolic heat): $500$ kcal.
    *   Additional general heat loss (if the 1500 kcal already accounts for resting heat loss, we might need to be careful here. Let's assume the 1500 kcal is the total energy expenditure at rest).
    *   Let's refine: Energy expenditure at rest = 1500 kcal. Energy expenditure during exercise = 500 kcal. Total expenditure = 2000 kcal.
    *   Total heat loss ($Q_{loss}$) needs careful consideration. The body's metabolism generates heat. The 1500 kcal and 500 kcal figures represent total energy *expenditure*, which includes work and heat. The net heat transfer *to the surroundings* is the difference between heat generated and heat used for work.

Let's simplify the analysis by focusing on total energy conversions.

*   **Energy In:** $E_{food} = 2500$ kcal.
*   **Energy Expenditure (converted to work and heat):**
    *   Resting expenditure: $1500$ kcal. This comprises internal work and heat loss.
    *   Exercise expenditure: $500$ kcal. This comprises external work and increased metabolic heat.
    *   Total energy output from metabolism = $1500 + 500 = 2000$ kcal.

Using the First Law:
$E_{in} - E_{out} = \Delta E_{stored}$

$2500 \text{ kcal} - 2000 \text{ kcal} = \Delta E_{stored}$
$\Delta E_{stored} = 500$ kcal.

This indicates a positive energy balance, meaning the body stored 500 kcal. This stored energy would primarily be converted to fat.

**Example 2: Dieting (Caloric Deficit)**

*   A person aims to lose weight by consuming 1800 kcal per day.
*   Their daily energy expenditure (resting metabolic rate + moderate activity) is 2300 kcal.

Using the First Law:
$E_{in} - E_{out} = \Delta E_{stored}$
$1800 \text{ kcal} - 2300 \text{ kcal} = \Delta E_{stored}$
$\Delta E_{stored} = -500$ kcal.

This indicates a negative energy balance. The body must draw 500 kcal from its stored energy reserves (primarily fat) to meet its daily requirements. This leads to weight loss.

**Example 3: Mass Gain (Caloric Surplus)**

*   A person consumes 3000 kcal per day to gain muscle mass.
*   Their daily energy expenditure is 2500 kcal.

Using the First Law:
$E_{in} - E_{out} = \Delta E_{stored}$
$3000 \text{ kcal} - 2500 \text{ kcal} = \Delta E_{stored}$
$\Delta E_{stored} = 500$ kcal.

This positive energy balance means the body has an excess of 500 kcal per day. This surplus energy is used for building new tissue (muscle gain) and also some fat storage.

**Key Points for Human Applications:**

*   The human body is a complex thermodynamic system.
*   Energy intake comes from food, and energy is expelled through work and heat loss.
*   The First Law dictates that any imbalance between energy intake and expenditure results in a change in stored energy (body mass).
*   A sustained caloric surplus leads to mass gain, while a sustained caloric deficit leads to mass loss.
*   The efficiency of converting food energy into external work is not 100%. A significant portion is lost as heat. (Moran et al., 2006). This relates to the concept of thermodynamic efficiency, though not explicitly covered by the First Law alone.

---

### 5. Learning Outcome Coverage Check

*   **CO1: Understand basic concepts of thermodynamics (K1, K2)**
    *   Covered through definitions of energy, system, surroundings, boundary, closed/open systems, state, process, heat, work, internal energy, enthalpy.
*   **CO2: Understand the laws of thermodynamics (K1, K2)**
    *   The First Law of Thermodynamics is the central theme of this module. Its statement and implications are thoroughly discussed.
*   **CO3: Conduct first law analysis of open and closed systems (K3)**
    *   The First Law equations for both closed and open (steady-flow) systems are presented.
    *   Examples involving energy and exercise, dieting, and mass gain/loss demonstrate the application of these principles to calculate energy balances and predict changes in stored energy.

---

### 6. Important Points to Remember

*   **Conservation of Energy:** Energy is always conserved; it just changes form.
*   **System Definition is Crucial:** Clearly define your system and its boundaries for accurate analysis.
*   **Sign Conventions Matter:** Be consistent with the sign conventions for heat and work.
*   **Internal Energy vs. Enthalpy:**
    *   $\Delta U$ is the change in the energy stored *within* the system. For ideal gases, $\Delta U = m c_v \Delta T$.
    *   $H = U + PV$. $\Delta H$ is particularly useful for constant pressure processes and flow streams in open systems. For ideal gases, $\Delta H = m c_p \Delta T$.
*   **Steady-Flow Energy Equation:** Essential for analyzing devices like pumps, turbines, heat exchangers, and nozzles.
*   **Human Body Energy Balance:** The First Law provides the fundamental framework for understanding weight management and the impact of diet and exercise. A caloric surplus leads to storage, and a deficit leads to depletion.

---

### 7. Practice Questions and Exercises

**Question 1 (Closed System):**
A 2 kg rigid tank contains steam at 1 MPa and 200°C. The tank is cooled until the pressure is 0.3 MPa.
(a) Determine the initial internal energy and volume.
(b) Determine the final internal energy and volume.
(c) Calculate the heat transfer for this process.
*(Hint: Use steam tables from Cengel et al. or Nag.)*

**Question 2 (Ideal Gas - Closed System):**
1 kg of an ideal gas has a specific heat ratio $k = 1.4$ and a gas constant $R = 0.287$ kJ/kg·K. The gas is heated in a closed system from 27°C to 127°C. If the process is isobaric, calculate the heat transfer and the work done. Assume $c_p$ is constant.
($c_p = \frac{kR}{k-1}$)

**Question 3 (Open System - Steady Flow):**
Steam enters a turbine at 4 MPa and 400°C with a velocity of 80 m/s and leaves at 80 kPa with a velocity of 150 m/s. The mass flow rate is 12 kg/s. The turbine produces 8 MW of shaft work. Neglecting potential energy changes, determine the rate of heat transfer for the turbine.
*(Hint: Use steam tables.)*

**Question 4 (Human Energy Balance):**
An individual consumes 2000 kcal of food per day. Their body expends 1800 kcal through basal metabolism and 600 kcal through moderate physical activity.
(a) What is the net energy balance for this individual?
(b) What will happen to their body mass over time if this continues?

---

### 8. Answers to Practice Questions

**Answer 1:**
*(Requires steam tables – example calculation steps)*
(a) From steam tables at 1 MPa and 200°C (superheated steam):
    *   $u_1 \approx 2643.5$ kJ/kg
    *   Specific volume $v_1 \approx 0.2047$ m³/kg
    *   Mass $m = 2$ kg
    *   Volume $V_1 = m \times v_1 = 2 \text{ kg} \times 0.2047 \text{ m³/kg} = 0.4094$ m³

(b) At 0.3 MPa:
    *   Check saturation temperature. If $T > T_{sat}$, it's superheated. If $T < T_{sat}$, it's compressed liquid (unlikely for steam cooling from 200°C). If it's saturated or two-phase, need quality.
    *   Assuming it cools to a state at 0.3 MPa (e.g., saturated vapor or a specific temperature): Let's assume for simplicity it reaches saturated vapor at 0.3 MPa.
        *   From steam tables at 0.3 MPa (saturated vapor):
            *   $u_{g2} \approx 2507.2$ kJ/kg
            *   $v_{g2} \approx 0.6338$ m³/kg
        *   $u_2 = u_{g2} = 2507.2$ kJ/kg
        *   $V_2 = m \times v_{g2} = 2 \text{ kg} \times 0.6338 \text{ m³/kg} = 1.2676$ m³
    *   *Note: The volume of a rigid tank should remain constant ($V_1 = V_2$). This implies the final state is not necessarily saturated vapor if the pressure drops. If it's a rigid tank, then $V_2 = V_1 = 0.4094$ m³. We'd find the specific volume $v_2 = V_2/m = 0.4094/2 = 0.2047$ m³/kg. Then, at 0.3 MPa, we'd find the corresponding temperature and internal energy from steam tables based on this specific volume.*

(c) Heat Transfer ($\Delta E = m \Delta u$ for a rigid tank, since $V$ is constant, no $PdV$ work):
    *   $\Delta E = m(u_2 - u_1) = 2 \text{ kg} \times (2507.2 - 2643.5) \text{ kJ/kg} = -267.4$ kJ.
    *   Since $\Delta E = Q - W$, and $W=0$ for a rigid tank (no boundary work), $Q = \Delta E$.
    *   $Q = -267.4$ kJ. The negative sign indicates heat is transferred *out* of the system.

**Answer 2:**
Given: $m = 1$ kg, $k = 1.4$, $R = 0.287$ kJ/kg·K, $T_1 = 27°C = 300.15$ K, $T_2 = 127°C = 400.15$ K.
$c_p = \frac{kR}{k-1} = \frac{1.4 \times 0.287}{1.4 - 1} = \frac{0.4018}{0.4} = 1.0045$ kJ/kg·K.
For an isobaric process in a closed system, $\Delta U = Q - W$.
Also, for ideal gases, $\Delta U = m c_v (T_2 - T_1)$ and $Q = m c_p (T_2 - T_1)$.
$c_v = c_p - R = 1.0045 - 0.287 = 0.7175$ kJ/kg·K.
$Q = 1 \text{ kg} \times 1.0045 \text{ kJ/kg}·\text{K} \times (400.15 - 300.15) \text{ K} = 100.45$ kJ.
For an isobaric process, $W = P \Delta V = m R \Delta T$.
$W = 1 \text{ kg} \times 0.287 \text{ kJ/kg}·\text{K} \times (400.15 - 300.15) \text{ K} = 28.7$ kJ.
*Check:* $\Delta U = m c_v (T_2 - T_1) = 1 \text{ kg} \times 0.7175 \text{ kJ/kg}·\text{K} \times 100 \text{ K} = 71.75$ kJ.
First Law: $Q - W = 100.45 \text{ kJ} - 28.7 \text{ kJ} = 71.75$ kJ. This matches $\Delta U$.
**Answer:** Heat transfer $Q = 100.45$ kJ, Work done $W = 28.7$ kJ.

**Answer 3:**
Given: $\dot{m} = 12$ kg/s, $V_1 = 80$ m/s, $V_2 = 150$ m/s, $\dot{W}_{out} = 8$ MW = 8000 kJ/s.
From steam tables:
At 4 MPa, 400°C: $h_1 \approx 3213.7$ kJ/kg.
At 80 kPa: $h_2 \approx 2762.0$ kJ/kg (saturated vapor if not specified, or use superheated tables if temperature is given). Let's assume saturated vapor for this example.
Steady-flow energy equation:
$\dot{Q}_{in} + \dot{m}(h_1 + \frac{V_1^2}{2}) = \dot{W}_{out} + \dot{m}(h_2 + \frac{V_2^2}{2})$ (neglecting potential energy)
$\dot{Q}_{in} = \dot{W}_{out} + \dot{m}[(h_2 - h_1) + \frac{V_2^2 - V_1^2}{2}]$
$\frac{V_1^2}{2} = \frac{(80 \text{ m/s})^2}{2} = 3200$ J/kg = 3.2 kJ/kg.
$\frac{V_2^2}{2} = \frac{(150 \text{ m/s})^2}{2} = 11250$ J/kg = 11.25 kJ/kg.
$\dot{Q}_{in} = 8000 \text{ kJ/s} + 12 \text{ kg/s} \times [(2762.0 - 3213.7) \text{ kJ/kg} + (11.25 - 3.2) \text{ kJ/kg}]$
$\dot{Q}_{in} = 8000 + 12 \times [-451.7 + 8.05]$
$\dot{Q}_{in} = 8000 + 12 \times (-443.65)$
$\dot{Q}_{in} = 8000 - 5323.8 = 2676.2$ kJ/s = 2.6762 MW.
**Answer:** The rate of heat transfer for the turbine is 2.6762 MW (heat is added to the system).

**Answer 4:**
(a) Energy In = 2000 kcal.
Energy Out = 1800 kcal (basal) + 600 kcal (activity) = 2400 kcal.
Net energy balance = Energy In - Energy Out = 2000 kcal - 2400 kcal = -400 kcal.
**Answer (a):** The net energy balance is -400 kcal.

(b) Since there is a consistent energy deficit of 400 kcal per day, the body will draw upon its stored energy reserves (primarily fat) to meet the energy requirements. This will lead to a decrease in body mass over time.
**Answer (b):** The individual will lose body mass.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
