---
title: "flow work and the energy of a flowing fluid"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f4c"
status: "completed"
scrapedAt: "2026-05-20T17:53:26.788Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Flow Work and the Energy of a Flowing Fluid

This module delves into the application of the First Law of Thermodynamics to systems where mass is in motion across their boundaries. We will explore the concept of flow work, which is essential for understanding energy transfer in open systems (control volumes).

---

### Learning Outcomes Covered:

*   **Understand the concept of flow work and its role in energy transfer for flowing fluids.** (Relates to CO1, CO2)
*   **Identify and quantify the various forms of energy a flowing fluid possesses.** (Relates to CO1, CO2, CO5)
*   **Derive and apply the Steady-Flow Energy Equation (SFEE) for open systems.** (Relates to CO3)
*   **Analyze the energy transformations in common steady-flow devices.** (Relates to CO3)

---

### 1. Introduction to Flow Work (or Work of Motion)

**Key Concept:** In open systems, not only heat and shaft work can cross the boundary, but also energy carried by mass. When mass enters or leaves a system, it does work on the system or the system does work on it. This is called **flow work** or **work of motion**.

**Definition:** Flow work is the work done by a fluid entering a control volume to push the fluid already inside the control volume out of the way, and conversely, the work done by the fluid leaving the control volume to push the fluid outside the control volume out of the way.

**Analogy (Cengel & Boles, Chapter 4):** Imagine pushing a large pipe full of water through a narrow opening. To push the water in, you need to do work on the first parcel of water to displace it. This work is the flow work.

**Mathematical Representation:**

Consider a fluid element entering a control volume at a certain pressure ($P$) and with a volume ($\mathcal{V}$). If the fluid element moves a distance ($dx$) across the boundary, the work done by this element on the system within the control volume is:

$W_{flow,in} = P \cdot A \cdot dx$

where:
*   $P$ is the pressure of the fluid entering.
*   $A$ is the cross-sectional area of the flow.
*   $dx$ is the distance the fluid element moves.

Since $A \cdot dx = \mathcal{V}_{in}$ (the volume of the fluid element entering), the flow work entering the system is:

$W_{flow,in} = P_{in} \mathcal{V}_{in}$

Similarly, for a fluid element leaving the system:

$W_{flow,out} = P_{out} \mathcal{V}_{out}$

However, when we consider the conservation of energy for the system, the flow work done *by* the fluid leaving the system is work done *by* the system on the surroundings, thus it's usually considered as negative work *done on* the system.

**Specific Flow Work:** It is often more convenient to work with specific flow work (per unit mass):

$w_{flow,in} = \frac{W_{flow,in}}{m_{in}} = \frac{P_{in} \mathcal{V}_{in}}{m_{in}}$

Since $\mathcal{V}_{in} / m_{in} = v_{in}$ (specific volume), we have:

$w_{flow,in} = P_{in} v_{in}$

And similarly for the exit:

$w_{flow,out} = P_{out} v_{out}$

**Important Point:** Flow work is a form of work associated with the movement of mass across a system boundary. It's distinct from shaft work or boundary work.

**Reference:** This concept is thoroughly explained in **Cengel & Boles, Chapter 4.1**. **P.K. Nag, Chapter 4.1** also covers flow work, defining it as "the work done by the fluid in pushing the fluid in front of it through the boundary."

---

### 2. Energy of a Flowing Fluid

**Key Concept:** A fluid in motion possesses several forms of energy. When analyzing open systems, we need to account for these energy components that are transported across the control volume boundary by the mass flow.

**Forms of Energy:**

1.  **Internal Energy ($u$):** The sum of all microscopic forms of energy of a substance (kinetic and potential energies of molecules). This is an intrinsic property of the fluid.
2.  **Kinetic Energy (KE):** Energy associated with the motion of the fluid as a whole.
    *   $KE = \frac{1}{2} m \mathcal{V}^2$ (for a mass $m$ with velocity $\mathcal{V}$)
    *   **Specific Kinetic Energy:** $ke = \frac{1}{2} \mathcal{V}^2$ (per unit mass)
3.  **Potential Energy (PE):** Energy associated with the elevation of the fluid relative to a reference point.
    *   $PE = m g z$ (for a mass $m$ at height $z$, with gravitational acceleration $g$)
    *   **Specific Potential Energy:** $pe = g z$ (per unit mass)

**Total Energy of a Flowing Fluid:**

The total energy ($E$) of a unit mass of flowing fluid is the sum of its internal energy, specific kinetic energy, and specific potential energy:

$e = u + ke + pe = u + \frac{1}{2} \mathcal{V}^2 + g z$

**Incorporating Flow Work:**

When a fluid flows, the flow work ($Pv$) must also be considered as part of the energy carried by the fluid across the boundary. Therefore, the **total energy of a unit mass of flowing fluid** can be expressed as:

$E_{flow} = u + Pv + \frac{1}{2} \mathcal{V}^2 + g z$

**Enthalpy ($h$):**

The term $u + Pv$ is defined as **enthalpy** ($h$). It is a thermodynamic property that conveniently combines internal energy and flow work.

$h = u + Pv$

**Therefore, the total energy of a unit mass of flowing fluid, often referred to as the specific stagnation energy or total specific energy, is:**

$E_{flow} = h + \frac{1}{2} \mathcal{V}^2 + g z$

**Reference:**
*   **Cengel & Boles, Chapter 4.1:** Introduces enthalpy as $h = u + Pv$ and relates it to the energy of flowing fluids.
*   **P.K. Nag, Chapter 4.1:** Also defines enthalpy and its significance in flowing systems.
*   **Sonntag, Borgnakke, VanWylen, Chapter 5:** Discusses the energy of a flowing fluid, including kinetic and potential energy terms.

**Important Point:** Enthalpy ($h$) is a crucial property for analyzing steady-flow processes because it encapsulates both the internal energy and the flow work associated with the fluid.

---

### 3. The Steady-Flow Energy Equation (SFEE)

**Key Concept:** The First Law of Thermodynamics, when applied to open systems operating under steady-flow conditions, simplifies to the Steady-Flow Energy Equation (SFEE). Steady flow means that fluid properties at any point within the control volume do not change with time.

**Derivation (Conceptual):**

Consider a control volume (e.g., a turbine, pump, heat exchanger). Over a time interval $\Delta t$:

*   **Mass entering:** $\Delta m_{in} = \dot{m}_{in} \Delta t$
*   **Mass leaving:** $\Delta m_{out} = \dot{m}_{out} \Delta t$
*   **Energy entering with mass:** $E_{in} = \Delta m_{in} (h_{in} + \frac{1}{2} \mathcal{V}_{in}^2 + g z_{in})$
*   **Energy leaving with mass:** $E_{out} = \Delta m_{out} (h_{out} + \frac{1}{2} \mathcal{V}_{out}^2 + g z_{out})$
*   **Heat transfer into the system:** $Q$
*   **Shaft work done by the system:** $W_{shaft}$ (convention: positive for work done *by* the system)

By the First Law of Thermodynamics (conservation of energy):

(Net energy transfer by heat and work) + (Net energy change of the mass within the control volume) = 0

For steady flow, the mass within the control volume is constant, so the net energy change of the mass within the control volume is zero. Also, for steady flow, the mass flow rate entering equals the mass flow rate leaving: $\dot{m}_{in} = \dot{m}_{out} = \dot{m}$.

Therefore, the net energy transfer into the control volume must equal the net energy transferred out by the mass flow.

$\dot{Q}_{in} + \dot{W}_{in} = \dot{m} (h_{out} + \frac{1}{2} \mathcal{V}_{out}^2 + g z_{out}) - \dot{m} (h_{in} + \frac{1}{2} \mathcal{V}_{in}^2 + g z_{in})$

Rearranging and adopting the convention that heat added to the system ($\dot{Q}$) and work done *by* the system ($\dot{W}_{shaft}$) are positive:

$\dot{Q} - \dot{W}_{shaft} = \dot{m} [(h_{out} + \frac{1}{2} \mathcal{V}_{out}^2 + g z_{out}) - (h_{in} + \frac{1}{2} \mathcal{V}_{in}^2 + g z_{in})]$

This is the **Steady-Flow Energy Equation (SFEE) in terms of power (rate of energy transfer)**.

**SFEE per unit mass:**

Dividing by the mass flow rate ($\dot{m}$), we get the SFEE per unit mass:

$q - w_{shaft} = (h_{out} - h_{in}) + \frac{1}{2} (\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + g (z_{out} - z_{in})$

where:
*   $q = \dot{Q}/\dot{m}$ (heat transfer per unit mass)
*   $w_{shaft} = \dot{W}_{shaft}/\dot{m}$ (shaft work per unit mass)

**The SFEE is fundamental for analyzing steady-flow devices.**

**Reference:**
*   **Cengel & Boles, Chapter 4.1:** Provides a detailed derivation and explanation of the SFEE.
*   **P.K. Nag, Chapter 4.2:** Presents the SFEE and its components.
*   **Moran & Shapiro, Chapter 5.1:** Derives the SFEE for control volumes.

**Important Points:**
*   **Steady Flow:** This equation is strictly valid only for steady-flow processes.
*   **Control Volume:** It applies to open systems (control volumes).
*   **Enthalpy:** Enthalpy ($h=u+Pv$) is a key term.
*   **Sign Conventions:** Be consistent with sign conventions for heat and work.
*   **Energy Terms:** Account for changes in enthalpy, kinetic energy, and potential energy.

---

### 4. Analysis of Steady-Flow Devices

The SFEE is applied to various engineering devices where fluid flows steadily.

#### 4.1 Turbines

*   **Function:** Extract energy from a fluid, usually causing a decrease in pressure and temperature. The fluid work is delivered as shaft work.
*   **Assumptions:**
    *   Steady flow
    *   Negligible changes in kinetic and potential energy (often a valid assumption for large turbines).
    *   No heat transfer (adiabatic process).
*   **SFEE Simplification:**
    $0 - w_{shaft} = (h_{out} - h_{in}) + 0 + 0$
    $w_{shaft} = h_{in} - h_{out}$
*   **Interpretation:** The work output of a turbine is equal to the decrease in the enthalpy of the fluid.

**Example:** A steam turbine expands steam from high pressure and temperature to low pressure and temperature, producing shaft work.

#### 4.2 Compressors, Pumps, and Fans

*   **Function:** Add energy to a fluid, usually causing an increase in pressure. Work is supplied to the fluid.
*   **Assumptions:**
    *   Steady flow
    *   Negligible changes in kinetic and potential energy (often valid).
    *   No heat transfer (adiabatic process).
*   **SFEE Simplification:**
    $0 - w_{shaft} = (h_{out} - h_{in}) + 0 + 0$
    $w_{shaft} = h_{in} - h_{out}$
*   **Interpretation:** The work input to a compressor/pump/fan is equal to the increase in the enthalpy of the fluid. Since work is done *on* the system, $w_{shaft}$ is negative in the convention $q - w_{shaft}$, so $w_{in} = -(h_{out} - h_{in}) = h_{in} - h_{out}$.

**Example:** A compressor increases the pressure of air for an air conditioning system. A pump increases the pressure of water for a boiler feed. A fan circulates air.

#### 4.3 Heat Exchangers (e.g., Condensers, Evaporators)

*   **Function:** Transfer heat between two fluids.
*   **Assumptions:**
    *   Steady flow for both fluids.
    *   No shaft work.
    *   Negligible changes in kinetic and potential energy.
*   **SFEE Simplification for Fluid 1:**
    $q_1 - 0 = (h_{out,1} - h_{in,1}) + 0 + 0$
    $q_1 = h_{out,1} - h_{in,1}$
*   **Interpretation:** The heat transferred to or from a fluid is equal to the change in its enthalpy. For the other fluid (Fluid 2), $q_2 = h_{out,2} - h_{in,2}$. By conservation of energy, the heat lost by one fluid must equal the heat gained by the other (assuming no heat loss to the surroundings): $q_1 + q_2 = 0$.

**Example:** A condenser in a power plant transfers heat from steam to cooling water, causing the steam to condense.

#### 4.4 Boilers and Superheaters

*   **Function:** Add heat to a fluid, usually vaporizing or superheating it.
*   **Assumptions:**
    *   Steady flow.
    *   No shaft work.
    *   Negligible changes in kinetic and potential energy.
*   **SFEE Simplification:**
    $q - 0 = (h_{out} - h_{in}) + 0 + 0$
    $q = h_{out} - h_{in}$
*   **Interpretation:** The heat added to the fluid is equal to the increase in its enthalpy.

**Example:** A boiler heats water to produce steam.

#### 4.5 Nozzles and Diffusers

*   **Nozzles:** Increase the velocity of a fluid by decreasing its pressure and internal energy (enthalpy). Often used to convert thermal energy into kinetic energy.
*   **Diffusers:** Decrease the velocity of a fluid by increasing its pressure and internal energy (enthalpy). Often used to convert kinetic energy into thermal energy.
*   **Assumptions:**
    *   Steady flow.
    *   No shaft work.
    *   Adiabatic (no heat transfer).
    *   Often negligible changes in potential energy.
*   **SFEE Simplification:**
    $0 - 0 = (h_{out} - h_{in}) + \frac{1}{2} (\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + 0$
    $h_{in} - h_{out} = \frac{1}{2} (\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2)$
    or $h_{out} - h_{in} = \frac{1}{2} (\mathcal{V}_{in}^2 - \mathcal{V}_{out}^2)$
*   **Interpretation:**
    *   **Nozzle:** The decrease in enthalpy is converted into an increase in kinetic energy.
    *   **Diffuser:** The increase in enthalpy is a result of the decrease in kinetic energy.

**Example:** A nozzle in a jet engine accelerates exhaust gases. A diffuser in an aircraft inlet slows down the incoming air.

**Reference:** **Cengel & Boles, Chapter 4.3** and **P.K. Nag, Chapter 4.3** provide excellent coverage of the application of SFEE to these devices.

---

### 5. Important Points to Remember

*   **Flow Work ($Pv$):** It's the work done to push fluid across a boundary and is included in the enthalpy term ($h = u + Pv$).
*   **Total Energy of Flowing Fluid:** $e = h + \frac{1}{2}\mathcal{V}^2 + gz$.
*   **Steady-Flow Energy Equation (SFEE):** $\dot{Q} - \dot{W}_{shaft} = \dot{m} [(h_{out} - h_{in}) + \frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + g(z_{out} - z_{in})]$.
*   **SFEE per unit mass:** $q - w_{shaft} = (h_{out} - h_{in}) + \frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + g(z_{out} - z_{in})$.
*   **Assumptions:** Always state the assumptions made when applying the SFEE (e.g., steady flow, adiabatic, negligible KE/PE changes).
*   **Sign Conventions:** Maintain consistent sign conventions for heat ($Q > 0$ for heat added to the system) and work ($W_{shaft} > 0$ for work done *by* the system).
*   **Properties:** Ensure you can find enthalpy ($h$) from steam tables or property relations for the fluid being considered (links to CO5).

---

### 6. Practice Questions

**Question 1 (CO1, CO2, CO3):**
A steady flow turbine expands steam from 6000 kPa and 500°C to 100 kPa. The mass flow rate of steam is 40 kg/s. The inlet velocity is 60 m/s, and the exit velocity is 300 m/s. The inlet and exit elevations are 10 m and 2 m, respectively. If the turbine produces a power output of 50 MW, determine the rate of heat transfer per unit mass (in kJ/kg).

**Solution:**
Given:
$P_{in} = 6000 \text{ kPa}$, $T_{in} = 500^\circ\text{C}$
$P_{out} = 100 \text{ kPa}$
$\dot{m} = 40 \text{ kg/s}$
$\mathcal{V}_{in} = 60 \text{ m/s}$, $\mathcal{V}_{out} = 300 \text{ m/s}$
$z_{in} = 10 \text{ m}$, $z_{out} = 2 \text{ m}$
$\dot{W}_{shaft} = 50 \text{ MW} = 50,000 \text{ kW}$

First, find the specific enthalpies from steam tables (assuming ideal conditions or using appropriate tables/software for superheated steam):
From steam tables at 6000 kPa and 500°C: $h_{in} \approx 3471.7 \text{ kJ/kg}$
From steam tables at 100 kPa (saturated steam or superheated depending on the condition): $h_{out} \approx 2679.6 \text{ kJ/kg}$ (This value is for saturated vapor at 100 kPa, assuming the expansion goes to saturation. A specific exit condition would be needed for a precise value, but this is a reasonable assumption for a problem.)

SFEE per unit mass:
$q - w_{shaft} = (h_{out} - h_{in}) + \frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + g(z_{out} - z_{in})$

Calculate the terms:
$w_{shaft} = \dot{W}_{shaft} / \dot{m} = 50,000 \text{ kW} / 40 \text{ kg/s} = 1250 \text{ kJ/kg}$
$h_{out} - h_{in} = 2679.6 - 3471.7 = -792.1 \text{ kJ/kg}$
$\frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) = \frac{1}{2} (300^2 - 60^2) \text{ (m/s)}^2 = \frac{1}{2} (90000 - 3600) = \frac{1}{2}(86400) = 43200 \text{ (m/s)}^2$
Convert KE to kJ/kg: $43200 \text{ m}^2/\text{s}^2 \times \frac{1 \text{ kJ}}{1000 \text{ m}^2/\text{s}^2} = 43.2 \text{ kJ/kg}$
$g(z_{out} - z_{in}) = 9.81 \text{ m/s}^2 \times (2 - 10) \text{ m} = 9.81 \times (-8) = -78.48 \text{ m}^2/\text{s}^2$
Convert PE to kJ/kg: $-78.48 \text{ m}^2/\text{s}^2 \times \frac{1 \text{ kJ}}{1000 \text{ m}^2/\text{s}^2} = -0.07848 \approx -0.08 \text{ kJ/kg}$

Substitute into SFEE:
$q - 1250 \text{ kJ/kg} = (-792.1 \text{ kJ/kg}) + (43.2 \text{ kJ/kg}) + (-0.08 \text{ kJ/kg})$
$q - 1250 = -792.1 + 43.2 - 0.08$
$q - 1250 = -748.98$
$q = 1250 - 748.98$
$q = 501.02 \text{ kJ/kg}$

Answer: The rate of heat transfer per unit mass is approximately 501.02 kJ/kg. This indicates that heat is being added to the steam as it passes through the turbine, which is unusual for a turbine; often, turbines are assumed to be adiabatic. This result highlights the importance of considering all terms. (Note: If the turbine was assumed adiabatic, the work output would be different, or the exit enthalpy/pressure would be different.)

**Question 2 (CO1, CO3):**
Air enters an adiabatic compressor at 100 kPa, 290 K, with negligible velocity. The air is compressed to 500 kPa. The exit velocity is 50 m/s. The mass flow rate is 2 kg/s. For air, assume $c_p = 1.005$ kJ/kg·K and $c_v = 0.718$ kJ/kg·K. Calculate the power input to the compressor.

**Solution:**
Given:
$P_{in} = 100 \text{ kPa}$, $T_{in} = 290 \text{ K}$, $\mathcal{V}_{in} \approx 0 \text{ m/s}$
$P_{out} = 500 \text{ kPa}$, $\mathcal{V}_{out} = 50 \text{ m/s}$
$\dot{m} = 2 \text{ kg/s}$
$q = 0$ (adiabatic)
$c_p = 1.005 \text{ kJ/kg}\cdot\text{K}$
$c_v = 0.718 \text{ kJ/kg}\cdot\text{K}$
$R = c_p - c_v = 0.287 \text{ kJ/kg}\cdot\text{K}$

SFEE per unit mass:
$q - w_{shaft} = (h_{out} - h_{in}) + \frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) + g(z_{out} - z_{in})$

Assumptions:
*   Negligible change in potential energy: $z_{out} - z_{in} \approx 0$.
*   Adiabatic: $q = 0$.

SFEE becomes:
$0 - w_{shaft} = (h_{out} - h_{in}) + \frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2)$

For an ideal gas, $h_{out} - h_{in} = c_p (T_{out} - T_{in})$.
We need to find $T_{out}$. For an adiabatic process in an ideal gas:
$T_{out} / T_{in} = (P_{out} / P_{in})^{(k-1)/k}$
where $k = c_p / c_v = 1.005 / 0.718 \approx 1.4$.
$(k-1)/k = (1.4-1)/1.4 = 0.4/1.4 \approx 0.2857$.

$T_{out} = 290 \text{ K} \times (500 \text{ kPa} / 100 \text{ kPa})^{0.2857}$
$T_{out} = 290 \text{ K} \times (5)^{0.2857}$
$T_{out} \approx 290 \times 1.5227 \approx 441.58 \text{ K}$

Now calculate the enthalpy change:
$h_{out} - h_{in} = c_p (T_{out} - T_{in}) = 1.005 \text{ kJ/kg}\cdot\text{K} \times (441.58 - 290) \text{ K}$
$h_{out} - h_{in} = 1.005 \times 151.58 \approx 152.34 \text{ kJ/kg}$

Calculate the kinetic energy change:
$\frac{1}{2}(\mathcal{V}_{out}^2 - \mathcal{V}_{in}^2) = \frac{1}{2}(50^2 - 0^2) \text{ (m/s)}^2 = \frac{1}{2}(2500) = 1250 \text{ m}^2/\text{s}^2$
Convert to kJ/kg: $1250 \text{ m}^2/\text{s}^2 \times \frac{1 \text{ kJ}}{1000 \text{ m}^2/\text{s}^2} = 1.25 \text{ kJ/kg}$

Substitute into the SFEE:
$-w_{shaft} = 152.34 \text{ kJ/kg} + 1.25 \text{ kJ/kg}$
$-w_{shaft} = 153.59 \text{ kJ/kg}$
$w_{shaft} = -153.59 \text{ kJ/kg}$ (This is the work done *by* the system. For work *input*, we take the positive value).

Work input ($w_{in}$) per unit mass: $w_{in} = -w_{shaft} = 153.59 \text{ kJ/kg}$.

Total power input ($\dot{W}_{in}$):
$\dot{W}_{in} = \dot{m} \times w_{in} = 2 \text{ kg/s} \times 153.59 \text{ kJ/kg}$
$\dot{W}_{in} = 307.18 \text{ kJ/s} = 307.18 \text{ kW}$

Answer: The power input to the compressor is approximately 307.18 kW.

---

### 7. Alignment with Course Outcomes:

*   **CO1 (Understand basic concepts of thermodynamics):** Covered by explaining flow work, enthalpy, and different energy forms.
*   **CO2 (Understand the laws of thermodynamics):** Covered by deriving and applying the First Law for steady-flow systems (SFEE).
*   **CO3 (Conduct first law analysis of open and closed systems):** This entire topic focuses on the First Law analysis of open systems (steady-flow).
*   **CO4 (Determine entropy changes associated with different processes):** Not directly covered in this specific topic, as entropy is discussed in later modules.
*   **CO5 (Determine the properties of pure substances):** While not explicitly detailing property determination, understanding enthalpy requires knowledge of how to find it, often from tables or equations for pure substances.

---
This concludes the notes on Flow Work and the Energy of a Flowing Fluid. This topic is fundamental for understanding the energy balance in open systems, which are ubiquitous in engineering applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
