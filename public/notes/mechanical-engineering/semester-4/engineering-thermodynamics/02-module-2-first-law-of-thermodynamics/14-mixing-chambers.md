---
title: "mixing chambers"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f51"
status: "completed"
scrapedAt: "2026-05-20T17:53:30.347Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Mixing Chambers

This module delves into the application of the First Law of Thermodynamics to control volumes, specifically focusing on mixing chambers. We will analyze these devices as steady-flow systems, applying the energy balance equation to determine changes in properties and energy transfer.

---

### Learning Outcomes Covered:

*   **Understand basic concepts of thermodynamics (K1, K2):** Through the analysis of mixing chambers, we'll reinforce understanding of concepts like enthalpy, specific heat, and steady-flow processes.
*   **Understand the laws of thermodynamics (K1, K2):** The core of this topic is the application of the First Law of Thermodynamics to control volumes.
*   **Conduct first law analysis of open and closed systems (K3):** We will focus specifically on the first law analysis of open systems, which are characteristic of mixing chambers.
*   **Determine entropy changes associated with different processes (K3):** While the primary focus is the First Law, discussions on ideal mixing and irreversibility will touch upon entropy changes, albeit not as the main analytical tool.
*   **Determine the properties of pure substances (K2, K3):** To analyze mixing chambers, we need to know or be able to determine properties like enthalpy, specific volume, and temperature of the substances involved.

---

### Key Concepts and Definitions:

*   **Mixing Chamber:** A device where two or more streams of fluid enter and combine to form a single stream. Examples include heat exchangers, boilers, condensers, and economizers where fluids mix and exchange energy.
*   **Control Volume:** A fixed or variable region in space chosen for thermodynamic analysis. For mixing chambers, we consider the volume encompassing the mixing process.
*   **Steady-Flow Process:** A process during which the fluid properties at any point within the control volume do not change with time. Mixing chambers are often analyzed under steady-flow conditions.
*   **Enthalpy (h):** A thermodynamic property defined as $h = u + Pv$, where $u$ is internal energy, $P$ is pressure, and $v$ is specific volume. Enthalpy is particularly useful for analyzing flow processes as it accounts for both internal energy and the work done by pressure forces.
*   **Specific Heat:** The amount of heat required to raise the temperature of one unit mass of a substance by one degree Celsius (or Kelvin).
    *   **Specific Heat at Constant Volume ($c_v$):** $c_v = (\partial u / \partial T)_v$
    *   **Specific Heat at Constant Pressure ($c_p$):** $c_p = (\partial h / \partial T)_p$
    *   For ideal gases, $h = u + RT$, so $c_p = c_v + R$.
*   **Energy Balance for Steady-Flow Systems:** The First Law of Thermodynamics for a steady-flow system can be expressed as:
    $$\dot{E}_{in} - \dot{E}_{out} = \frac{dE_{CV}}{dt} = 0$$
    Since the process is steady, the rate of change of energy within the control volume is zero. The energy transfer by mass crossing the boundaries is accounted for by the enthalpy term.

---

### First Law Analysis of Mixing Chambers:

Mixing chambers are typically analyzed as **steady-flow devices**. The general steady-flow energy equation is:

$$\dot{Q}_{in} + \sum_{i} \dot{m}_i h_i + \sum_{i} \dot{m}_i \frac{V_i^2}{2} + \sum_{i} \dot{m}_i g z_i = \dot{Q}_{out} + \sum_{j} \dot{m}_j h_j + \sum_{j} \dot{m}_j \frac{V_j^2}{2} + \sum_{j} \dot{m}_j g z_j$$

Where:
*   $\dot{Q}$ is the net rate of heat transfer *to* the system.
*   $\dot{m}$ is the mass flow rate.
*   $h$ is the specific enthalpy.
*   $V$ is the velocity.
*   $g$ is the acceleration due to gravity.
*   $z$ is the elevation.
*   Subscripts $i$ and $j$ refer to inlet and outlet streams, respectively.

For a mixing chamber, we typically have multiple inlets ($i=1, 2, ...$) and a single outlet ($j=1$). The energy equation simplifies to:

$$\dot{Q}_{in} + \sum_{i} \dot{m}_i h_i + \sum_{i} \dot{m}_i \frac{V_i^2}{2} + \sum_{i} \dot{m}_i g z_i = \dot{Q}_{out} + \dot{m}_{out} h_{out} + \dot{m}_{out} \frac{V_{out}^2}{2} + \dot{m}_{out} g z_{out}$$

**Simplifications commonly made for mixing chambers:**

1.  **Negligible Kinetic and Potential Energy Changes:** In most mixing chamber applications, the changes in kinetic and potential energy between the inlet and outlet streams are very small compared to the enthalpy changes. Therefore, these terms are often neglected:
    $$\sum_{i} \dot{m}_i \frac{V_i^2}{2} \approx 0$$
    $$\sum_{i} \dot{m}_i g z_i \approx 0$$

2.  **Adiabatic Operation:** Many mixing chambers are designed to be adiabatic, meaning there is no heat transfer across their boundaries ($\dot{Q}_{in} = \dot{Q}_{out} = 0$). This is common in processes where the primary goal is mixing and energy exchange occurs internally through the fluid streams.

With these simplifications, the energy balance for an adiabatic mixing chamber with multiple inlets ($1, 2, ...$) and one outlet (out) becomes:

$$\sum_{i} \dot{m}_i h_i = \dot{m}_{out} h_{out}$$

**Mass Balance:**

In addition to the energy balance, a mass balance is crucial:

$$\sum_{i} \dot{m}_i = \dot{m}_{out}$$

Substituting the mass balance into the energy balance (for adiabatic, negligible KE/PE changes):

$$\sum_{i} \dot{m}_i h_i = \left(\sum_{i} \dot{m}_i\right) h_{out}$$

This equation allows us to determine the enthalpy of the exit stream, which can then be used to find other properties like temperature or quality, depending on the nature of the substances being mixed.

---

### Types of Substances and Property Determination:

The calculation of enthalpy ($h$) depends on the phase and properties of the substances being mixed.

**1. Mixing of Liquids or Solids (Incompressible Substances):**

For liquids and solids, the specific heat is often assumed to be constant over the temperature range of interest. The change in enthalpy can be approximated as:

$$h_2 - h_1 = c (T_2 - T_1)$$

Where $c$ is the specific heat (either $c_p$ or $c_v$, as they are nearly equal for incompressible substances).

The energy balance for mixing two incompressible substances (1 and 2) at an adiabatic mixing chamber:

$$\dot{m}_1 h_1 + \dot{m}_2 h_2 = (\dot{m}_1 + \dot{m}_2) h_{out}$$

Using the approximation $h_2 - h_1 = c (T_2 - T_1)$:

$$\dot{m}_1 c_1 (T_{in,1}) + \dot{m}_2 c_2 (T_{in,2}) = (\dot{m}_1 + \dot{m}_2) c_{out} (T_{out})$$

If the specific heats are assumed to be constant and equal, $c_1 = c_2 = c_{out} = c$:

$$\dot{m}_1 T_{in,1} + \dot{m}_2 T_{in,2} = (\dot{m}_1 + \dot{m}_2) T_{out}$$

$$T_{out} = \frac{\dot{m}_1 T_{in,1} + \dot{m}_2 T_{in,2}}{\dot{m}_1 + \dot{m}_2}$$

*(This is a weighted average of the inlet temperatures, weighted by their mass flow rates.)*

**Example:** Mixing hot and cold water.

**2. Mixing of Ideal Gases:**

For ideal gases, enthalpy is a function of temperature only: $h = h(T)$. The change in enthalpy is given by:

$$h_2 - h_1 = \int_{T_1}^{T_2} c_p(T) dT$$

If $c_p$ is assumed constant:

$$h_2 - h_1 = c_p (T_2 - T_1)$$

The energy balance for mixing two ideal gases (1 and 2) at an adiabatic mixing chamber with constant specific heats:

$$\dot{m}_1 c_{p1} T_{in,1} + \dot{m}_2 c_{p2} T_{in,2} = (\dot{m}_1 + \dot{m}_2) c_{p,out} T_{out}$$

Where $c_{p,out}$ would be the effective specific heat of the mixture. For ideal gas mixtures, the specific heat of the mixture can be calculated as a weighted average of the component specific heats:

$$c_{p,mix} = y_1 c_{p1} + y_2 c_{p2}$$
$$c_{v,mix} = y_1 c_{v1} + y_2 c_{v2}$$
where $y_i$ is the mole fraction or mass fraction (depending on how $c_p$ is defined, usually mass fraction for molar specific heats). For enthalpy, we use mass fractions.

$$h_{out} = \frac{\dot{m}_1 h_1 + \dot{m}_2 h_2}{\dot{m}_1 + \dot{m}_2}$$

Using $h = c_p T$ (assuming a reference state where $h=0$ at $T=0$ or some other reference):

$$(\dot{m}_1 + \dot{m}_2) c_{p,mix} T_{out} = \dot{m}_1 c_{p1} T_{in,1} + \dot{m}_2 c_{p2} T_{in,2}$$

**Example:** Mixing hot air with cold air.

**3. Mixing of Steam (Real Gases/Pure Substances):**

For steam or other pure substances that deviate significantly from ideal gas behavior, enthalpy values must be obtained from thermodynamic property tables (e.g., steam tables) or property software.

The energy balance remains:

$$\dot{m}_1 h_1 + \dot{m}_2 h_2 = (\dot{m}_1 + \dot{m}_2) h_{out}$$

Here, $h_1$, $h_2$, and $h_{out}$ are specific enthalpies read from tables based on the respective temperatures, pressures, and phases of the streams.

**Example:** Mixing hot steam with cold water to produce warm water.

---

### Ideal Mixing:

In some idealized scenarios, mixing can occur without any heat transfer or work transfer, and the exit stream is assumed to be in a single phase. The analysis focuses on determining the exit temperature and properties.

**Isentropic Mixing (Theoretical Concept):**

While mixing processes are generally irreversible (due to friction and diffusion), one might theoretically consider an isentropic mixing process for comparison. However, in practical mixing chambers, irreversibility is inherent.

---

### Examples and Applications:

*   **Heat Exchangers:** Although often treated as separate entities, the fundamental principle of mixing fluids with different enthalpies to achieve a desired temperature is similar to the energy transfer in heat exchangers.
*   **Boilers and Condensers:** In boilers, water is mixed with heat to become steam. In condensers, steam is mixed with cooling water to become liquid.
*   **Chemical Reactors:** Often involve mixing reactants at different temperatures and compositions.
*   **Spray Drying:** Hot air is mixed with wet particles.
*   **Turbine Exhaust Mixing:** Exhaust streams from different turbine stages might be mixed.

---

### Important Points to Remember:

*   **Steady-Flow Assumption:** Most mixing chamber analyses are performed under steady-flow conditions.
*   **First Law Application:** The core principle is the conservation of energy for a control volume.
*   **Mass Balance is Essential:** Always perform a mass balance alongside the energy balance.
*   **Enthalpy is Key:** Enthalpy is the most convenient property for flow processes, representing internal energy plus flow work.
*   **Property Data is Crucial:** For real substances (like steam), consult property tables or software for accurate enthalpy values. For ideal gases or incompressible substances, use appropriate correlations ($h = c_p T$ or $h_2 - h_1 = c(T_2 - T_1)$).
*   **Neglect KE/PE unless specified:** Typically, kinetic and potential energy changes are negligible in mixing chambers.
*   **Adiabatic Assumption:** Many mixing chambers are adiabatic. If heat transfer occurs, include it in the energy balance.
*   **Irreversibility:** Mixing is an irreversible process, leading to an increase in entropy. The First Law, however, only deals with energy conservation.

---

### Practice Questions and Exercises:

**Question 1 (Ideal Gas Mixing - Simple):**

Two streams of air at 200 kPa enter a steady-flow mixing chamber. One stream enters at $15^\circ$C with a mass flow rate of 2 kg/s, and the other enters at $90^\circ$C with a mass flow rate of 4 kg/s. The air is assumed to behave as an ideal gas with a constant specific heat $c_p = 1.005$ kJ/(kg·K). Assuming the mixing chamber is adiabatic and the changes in kinetic and potential energies are negligible, determine the exit temperature of the mixture.

**Solution:**

**Given:**
*   Stream 1: $T_1 = 15^\circ\text{C}$, $\dot{m}_1 = 2$ kg/s
*   Stream 2: $T_2 = 90^\circ\text{C}$, $\dot{m}_2 = 4$ kg/s
*   $c_p = 1.005$ kJ/(kg·K)
*   Adiabatic mixing, $\dot{Q} = 0$
*   Negligible KE and PE changes.

**Mass Balance:**
$\dot{m}_{out} = \dot{m}_1 + \dot{m}_2 = 2 \text{ kg/s} + 4 \text{ kg/s} = 6$ kg/s

**Energy Balance (for adiabatic steady flow):**
$\sum \dot{m}_i h_i = \dot{m}_{out} h_{out}$

For ideal gases with constant $c_p$: $h = c_p T$ (relative to a reference)
$\dot{m}_1 c_p T_1 + \dot{m}_2 c_p T_2 = (\dot{m}_1 + \dot{m}_2) c_p T_{out}$

Since $c_p$ is constant, it cancels out:
$\dot{m}_1 T_1 + \dot{m}_2 T_2 = (\dot{m}_1 + \dot{m}_2) T_{out}$

**Note:** Ensure consistent temperature units (Celsius or Kelvin). Using Celsius here is fine as we are calculating a temperature difference implicitly. However, for strict adherence, convert to Kelvin if needed, but here, it cancels out for the weighted average calculation.

$2 \text{ kg/s} \times 15^\circ\text{C} + 4 \text{ kg/s} \times 90^\circ\text{C} = (2 \text{ kg/s} + 4 \text{ kg/s}) \times T_{out}$
$30 \text{ kg}\cdot^\circ\text{C/s} + 360 \text{ kg}\cdot^\circ\text{C/s} = 6 \text{ kg/s} \times T_{out}$
$390 \text{ kg}\cdot^\circ\text{C/s} = 6 \text{ kg/s} \times T_{out}$

$T_{out} = \frac{390}{6} ^\circ\text{C} = 65^\circ\text{C}$

**Answer:** The exit temperature of the mixture is $65^\circ$C.

---

**Question 2 (Steam Mixing - Property Tables):**

In a mixing chamber, a stream of saturated liquid water at $50^\circ$C is mixed with a stream of steam at 1 MPa and $200^\circ$C. The mass flow rate of the liquid water is 1 kg/s, and the mass flow rate of the steam is 0.5 kg/s. The mixing chamber is adiabatic, and kinetic and potential energy changes are negligible. Determine the final temperature and quality of the mixture.

**Solution:**

**Given:**
*   Stream 1 (Liquid Water): $T_1 = 50^\circ\text{C}$, phase = saturated liquid, $\dot{m}_1 = 1$ kg/s
*   Stream 2 (Steam): $P_2 = 1$ MPa, $T_2 = 200^\circ\text{C}$, $\dot{m}_2 = 0.5$ kg/s
*   Adiabatic mixing, $\dot{Q} = 0$
*   Negligible KE and PE changes.

**Mass Balance:**
$\dot{m}_{out} = \dot{m}_1 + \dot{m}_2 = 1 \text{ kg/s} + 0.5 \text{ kg/s} = 1.5$ kg/s

**Energy Balance:**
$\dot{m}_1 h_1 + \dot{m}_2 h_2 = \dot{m}_{out} h_{out}$

**1. Find $h_1$ (saturated liquid water at $50^\circ$C):**
From saturated water - temperature tables (e.g., Cengel & Boles, Table A-4):
At $T = 50^\circ$C, $h_f = h_1 = 209.44$ kJ/kg

**2. Find $h_2$ (superheated steam at 1 MPa and $200^\circ$C):**
From superheated water - pressure tables (e.g., Cengel & Boles, Table A-6):
At $P = 1$ MPa and $T = 200^\circ$C, $h_2 = 2870.7$ kJ/kg

**3. Calculate the outlet enthalpy $h_{out}$:**
$1 \text{ kg/s} \times 209.44 \text{ kJ/kg} + 0.5 \text{ kg/s} \times 2870.7 \text{ kJ/kg} = 1.5 \text{ kg/s} \times h_{out}$
$209.44 \text{ kJ/s} + 1435.35 \text{ kJ/s} = 1.5 \text{ kg/s} \times h_{out}$
$1644.79 \text{ kJ/s} = 1.5 \text{ kg/s} \times h_{out}$
$h_{out} = \frac{1644.79}{1.5} \text{ kJ/kg} = 1096.53$ kJ/kg

**4. Determine the exit state (temperature and quality):**
We need to find the state of the mixture at $P_{out}$ (which is usually assumed to be the same as the inlet pressure if not specified otherwise, or it might be a lower pressure due to expansion/friction, but for simplicity, let's assume we need to find the temperature corresponding to $h_{out}$ at some implied outlet pressure, or just that this enthalpy exists in the steam tables. Often, in mixing problems, the exit pressure is not explicitly given unless it's a component like a nozzle or diffuser following the mixer. If we assume the exit pressure is also 1 MPa, we'd look for $h=1096.53$ kJ/kg at 1 MPa in the tables.

Looking at the saturated water-temperature table (Table A-4) for $h_f$:
At $40^\circ$C, $h_f = 167.53$ kJ/kg
At $50^\circ$C, $h_f = 209.44$ kJ/kg
At $60^\circ$C, $h_f = 251.55$ kJ/kg

The calculated $h_{out} = 1096.53$ kJ/kg is much higher than these values. This indicates the mixture is not saturated liquid.

Let's check the saturated steam table at 1 MPa (Table A-5):
At 1 MPa:
$h_f$ (saturated liquid) = 762.81 kJ/kg
$h_g$ (saturated vapor) = 2778.1 kJ/kg

Our $h_{out} = 1096.53$ kJ/kg is between $h_f$ and $h_g$ at 1 MPa. This means the mixture at the exit is **saturated mixture** (if the pressure remained at 1 MPa).

**Exit Temperature (for saturated mixture):**
The temperature of a saturated mixture is the saturation temperature corresponding to the pressure. If we assume the exit pressure is still 1 MPa, then the exit temperature is the saturation temperature at 1 MPa.
From Table A-5, $T_{sat} @ 1 \text{ MPa} = 179.88^\circ$C.

**Exit Quality ($x_{out}$):**
For a saturated mixture, $h_{out} = h_f + x_{out} h_{fg}$.
We need $h_{fg} = h_g - h_f$.
At 1 MPa: $h_{fg} = 2778.1 - 762.81 = 2015.29$ kJ/kg.

$1096.53 = 762.81 + x_{out} \times 2015.29$
$1096.53 - 762.81 = x_{out} \times 2015.29$
$333.72 = x_{out} \times 2015.29$
$x_{out} = \frac{333.72}{2015.29} \approx 0.1656$

**Answer:** The final temperature of the mixture is $179.88^\circ$C, and the quality is approximately 0.166 (or 16.6%).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Textbook References:

*   **Cengel & Boles (2011):** Chapter 4, "Energy Analysis of Control Volumes," particularly sections on steady-flow energy equation and its application to devices like mixing chambers and heat exchangers. They emphasize the systematic approach to analyzing control volumes.
*   **P.K. Nag (2017):** Chapter 5, "First Law of Thermodynamics," and Chapter 6, "Applications of First Law of Thermodynamics," which include sections on steady flow energy equation and its application to various devices. Nag provides detailed derivations and examples for different types of mixers.
*   **Moran & Shapiro (2006):** Chapter 4, "Mass and Energy Balances for Closed Systems and Control Volumes," which covers the general principles for steady-state flow devices.
*   **Sonntag, Borgnakke & VanWylen (2014):** Chapter 6, "General Steady-Flow Energy Equation," which applies the First Law to open systems and discusses devices like mixers.
*   **Ansermet & Brechet (2019):** While this book might focus more on statistical thermodynamics and applications, its foundational chapters on the First Law would provide the underlying principles for analyzing energy balances in control volumes.

---

This comprehensive study note covers the essential aspects of mixing chambers within the context of the First Law of Thermodynamics, aligning with the stated learning and course outcomes.