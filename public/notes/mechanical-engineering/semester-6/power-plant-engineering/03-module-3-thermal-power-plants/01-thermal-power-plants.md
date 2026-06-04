---
title: "Thermal power plants"
subject: "POWER PLANT ENGINEERING"
module: "Module 3: Thermal power plants"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446378c"
status: "completed"
scrapedAt: "2026-05-20T18:06:32.141Z"
---
# Power Plant Engineering: Module 3 - Thermal Power Plants

## Introduction to Thermal Power Plants

**Definition:** Thermal power plants are facilities that generate electricity by converting the thermal energy of fuel (typically fossil fuels like coal, natural gas, or oil) into mechanical energy, which then drives an electric generator. This process primarily relies on the steam cycle.

**Key Concepts:**

*   **Fuel:** The source of thermal energy.
*   **Boiler:** Where fuel is combusted to heat water and produce steam.
*   **Steam Turbine:** A device that converts the thermal energy of high-pressure steam into rotational mechanical energy.
*   **Generator:** Converts mechanical energy into electrical energy.
*   **Condenser:** Cools the exhaust steam from the turbine back into water.
*   **Pump:** Returns the condensed water (feedwater) to the boiler.

**Primary Cycle:** The fundamental cycle used in most thermal power plants is the **Rankine Cycle**.

---

## 1. Components and Working of Thermal Power Plants (CO1: K2)

### 1.1 Layout of a Thermal Power Plant

A typical thermal power plant layout involves several interconnected systems.

**Main Components:**

*   **Fuel Handling System:** Stores and transports fuel to the boiler.
    *   **Coal:** Unloading, crushing, pulverizing, and conveying systems.
    *   **Oil:** Storage tanks, pumps, and preheaters.
    *   **Natural Gas:** Pipelines and pressure regulators.
*   **Boiler (Steam Generator):**
    *   **Furnace/Combustion Chamber:** Where fuel is burned.
    *   **Water Walls:** Tubes containing water that absorb heat from combustion gases.
    *   **Superheater:** Heats the steam further above its saturation temperature, increasing its enthalpy and improving turbine efficiency.
    *   **Reheater (in some plants):** Reheats steam after it has partially expanded through a high-pressure turbine, before it enters a low-pressure turbine.
    *   **Economizer:** Preheats feedwater using flue gases before it enters the boiler, improving thermal efficiency.
    *   **Air Preheater:** Heats combustion air using flue gases, also improving efficiency.
*   **Steam Turbine:**
    *   **High-Pressure (HP) Turbine:** Where steam first expands.
    *   **Intermediate-Pressure (IP) Turbine:** Often used after HP turbine, sometimes with reheating.
    *   **Low-Pressure (LP) Turbine:** Where steam expands to the lowest pressure before condensation.
    *   **Nozzles:** Accelerate steam to high velocity.
    *   **Blades:** Attached to the rotor, they are acted upon by the steam jet, causing rotation.
*   **Generator:**
    *   **Rotor:** Rotating part, typically an electromagnet.
    *   **Stator:** Stationary part, containing windings where electricity is induced.
*   **Condenser:**
    *   **Cooling Medium:** Usually water from a river, lake, or cooling tower.
    *   **Tube/Shell Design:** Steam condenses on tubes carrying cooling water.
*   **Feedwater System:**
    *   **Condensate Pump:** Pumps condensed water from the condenser hotwell.
    *   **Feedwater Heater:** Heats feedwater using steam bled from the turbine.
    *   **Feedwater Pump:** Pumps high-pressure feedwater to the boiler.
*   **Cooling System:**
    *   **Cooling Towers:** Evaporative cooling of water.
    *   **Once-Through Cooling:** Using a large body of water.
*   **Flue Gas System:**
    *   **Induced Draft (ID) Fan:** Draws flue gases through the boiler and exits to the atmosphere.
    *   **Electrostatic Precipitator (ESP) / Baghouse Filter:** Removes particulate matter (fly ash) from flue gases.
    *   **Chimney/Stack:** Discharges cleaned flue gases to the atmosphere.
*   **Ash Handling System:** Removes ash from the boiler and ESP.

**Diagrammatic Representation (Conceptual):**

```
Fuel -> Boiler -> Steam Turbine -> Generator -> Electricity
        ^                                       |
        |-------------------Condenser----------|
        |                                       ^
        |-------------------Feedwater Pump------|
```

*(Refer to diagrams in El Wakil (Chapter 5, Figure 5.1) and P.K. Nag (Chapter 2, Figure 2.1) for detailed plant layouts.)*

### 1.2 Working Principle (Rankine Cycle)

The Rankine cycle is the thermodynamic basis for thermal power plants. It consists of four main processes:

1.  **Isentropic Pumping (1-2):**
    *   Water is pumped from low pressure to high pressure.
    *   Work input is required by the pump.
    *   $W_p = v_f (P_2 - P_1)$, where $v_f$ is the specific volume of liquid.
    *   *(El Wakil, Chapter 5, Equation 5.2)*
2.  **Isobaric Heat Addition (2-3):**
    *   Water is heated at constant pressure in the boiler, economizer, and superheater to become high-temperature, high-pressure steam.
    *   Heat added, $Q_{in} = h_3 - h_2$.
    *   *(El Wakil, Chapter 5, Equation 5.3)*
3.  **Isentropic Expansion (3-4):**
    *   High-pressure steam expands through the turbine, producing work.
    *   Turbine work, $W_t = h_3 - h_4$.
    *   *(El Wakil, Chapter 5, Equation 5.4)*
4.  **Isobaric Heat Rejection (4-1):**
    *   Low-pressure steam from the turbine is condensed back into liquid water at constant pressure in the condenser.
    *   Heat rejected, $Q_{out} = h_4 - h_1$.
    *   *(El Wakil, Chapter 5, Equation 5.5)*

**Net Work Output:** $W_{net} = W_t - W_p$
**Thermal Efficiency:** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_t - W_p}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$

### 1.3 Modifications to the Rankine Cycle

To improve the efficiency and performance of the basic Rankine cycle, several modifications are employed:

*   **Regenerative Feedwater Heating (CO2: K3):**
    *   **Concept:** Bleeding a portion of steam from the turbine at various stages and using it to preheat the feedwater in feedwater heaters.
    *   **Benefits:** Reduces the amount of heat that needs to be added in the boiler at lower pressures, increasing thermal efficiency. Reduces the amount of heat rejected in the condenser.
    *   **Types of Feedwater Heaters:**
        *   **Open Feedwater Heaters:** Deaerating type; steam and feedwater mix directly.
        *   **Closed Feedwater Heaters:** Steam and feedwater flow in separate channels; heat is transferred through a surface.
    *   **Analysis:** Involves calculating the amount of steam bled at each stage and the temperature rise in each heater. For a single open feedwater heater:
        *   Let $y$ be the fraction of steam bled from turbine at point 'b' (pressure $P_b$) to heat feedwater from point 'a' to point 'c'.
        *   Energy balance for open heater: $(1-y)h_a + y h_b = 1 \cdot h_c$
        *   Turbine work becomes: $W_t = (h_3 - h_b) + (1-y)(h_b - h_a)$
        *   Pump work: $W_p = h_2 - h_1$
        *   Heat input: $Q_{in} = h_3 - h_2$
        *   *(P.K. Nag, Chapter 3, Sections 3.3 & 3.4, provides detailed analysis for multiple feedwater heaters.)*
        *   *(El Wakil, Chapter 5, Section 5.3 discusses regenerative feed heating in detail.)*

*   **Reheating (CO2: K3):**
    *   **Concept:** After partial expansion in the high-pressure (HP) turbine, the steam is sent back to the boiler to be reheated to its initial temperature before entering the intermediate-pressure (IP) or low-pressure (LP) turbine.
    *   **Benefits:** Increases the average temperature at which heat is supplied, thus increasing efficiency. Also, increases the dryness of steam at the turbine exhaust, reducing erosion damage to the last stage blades.
    *   **Rankine Cycle with Reheat:** The cycle includes an additional heat addition process at constant pressure (reheating) and an additional expansion process.
    *   **Analysis:**
        *   Steam expands in HP turbine from state 3 to state 4.
        *   Steam is reheated from state 4 to state 5 at constant pressure $P_{reheat}$.
        *   Steam expands in IP/LP turbine from state 5 to state 6.
        *   Heat input: $Q_{in} = (h_3 - h_2) + (h_5 - h_4)$
        *   Turbine work: $W_t = (h_3 - h_4) + (h_5 - h_6)$
        *   *(P.K. Nag, Chapter 3, Section 3.2, explains reheating and its effect on efficiency.)*
        *   *(El Wakil, Chapter 5, Section 5.2 also covers reheat cycle.)*

*   **Superheating (CO2: K3):**
    *   **Concept:** Heating the steam above its saturation temperature at the boiler pressure.
    *   **Benefits:** Increases the enthalpy of steam entering the turbine, leading to higher work output and improved efficiency. Reduces moisture content in the low-pressure stages of the turbine.
    *   **Analysis:** The superheating process increases $h_3$ and decreases the final dryness fraction of the exhaust steam for a given condenser pressure.
    *   *(P.K. Nag, Chapter 2, Section 2.4, discusses superheating and its benefits.)*

---

## 2. Performance Parameters Calculation (CO2: K3)

### 2.1 Simple Rankine Cycle Performance Parameters

*   **Heat Supplied ($Q_{in}$):** $Q_{in} = h_3 - h_2$
    *   $h_3$: Enthalpy of steam entering the turbine.
    *   $h_2$: Enthalpy of water entering the boiler (after pump work).
*   **Heat Rejected ($Q_{out}$):** $Q_{out} = h_4 - h_1$
    *   $h_4$: Enthalpy of steam entering the condenser.
    *   $h_1$: Enthalpy of saturated liquid at condenser pressure.
*   **Pump Work Input ($W_p$):** $W_p = v_{f1} (P_2 - P_1)$
    *   $v_{f1}$: Specific volume of saturated liquid at boiler inlet pressure.
    *   $P_2$: Boiler pressure.
    *   $P_1$: Condenser pressure.
    *   Note: $h_2 = h_1 + W_p$.
*   **Turbine Work Output ($W_t$):** $W_t = h_3 - h_4$
*   **Net Work Output ($W_{net}$):** $W_{net} = W_t - W_p$
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_t - W_p}{h_3 - h_2}$
*   **Heat Rate:** The amount of heat energy required to produce one unit of electrical energy. Often expressed in BTU/kWh or kJ/kWh.
    *   Heat Rate (kJ/kWh) = $\frac{3600}{W_{net} (\text{in kJ/kg})} \times 1000$ (if $W_{net}$ is in kJ/kg and we want kWh)
    *   Heat Rate (kJ/kWh) = $\frac{Q_{in} (\text{in kJ/kg})}{W_{net} (\text{in kJ/kg})}$ -- This is incorrect for units.
    *   Correct: Heat Rate (kJ/kWh) = $\frac{3600 \text{ kJ/kWh}}{W_{net} (\text{in kJ/kg})} \times \frac{1 \text{ kg}}{1 \text{ cycle}}$ -- Still not right.
    *   Let's use specific work and heat:
        *   Specific Heat Input $q_{in} = h_3 - h_2$ (kJ/kg)
        *   Specific Net Work Output $w_{net} = w_t - w_p = (h_3 - h_4) - (h_2 - h_1)$ (kJ/kg)
        *   Thermal Efficiency $\eta_{th} = \frac{w_{net}}{q_{in}}$
        *   Heat Rate (kJ/kWh) = $\frac{q_{in}}{w_{net}} \times 3600$
*   **Specific Steam Consumption (SSC):** The amount of steam required to produce one unit of power.
    *   SSC (kg/kWh) = $\frac{3600}{W_{net} (\text{in kJ/kg})}$

**Example Problem (Simple Rankine Cycle):**

In a steam power plant, steam enters the turbine at 30 bar and $300^\circ\text{C}$ and exhausts at 0.1 bar. Calculate the thermal efficiency and specific steam consumption.
Assume pump work is negligible compared to turbine work (a common simplification for quick estimates).

**Solution:**

*   **State 3 (Turbine Inlet):** $P_3 = 30$ bar, $T_3 = 300^\circ\text{C}$. From steam tables, $h_3 = 3051.6$ kJ/kg (superheated steam). $s_3 = 6.9207$ kJ/kg·K.
*   **State 4 (Turbine Outlet):** $P_4 = 0.1$ bar. From steam tables at 0.1 bar, $h_f = 191.87$ kJ/kg, $h_g = 2392.8$ kJ/kg, $s_f = 0.6487$ kJ/kg·K, $s_g = 8.1502$ kJ/kg·K.
    Since the expansion is isentropic, $s_4 = s_3 = 6.9207$ kJ/kg·K.
    This is in the wet region ($s_f < s_4 < s_g$).
    Quality $x_4 = \frac{s_4 - s_f}{s_g - s_f} = \frac{6.9207 - 0.6487}{8.1502 - 0.6487} = \frac{6.272}{7.5015} \approx 0.8361$
    $h_4 = h_f + x_4 (h_g - h_f) = 191.87 + 0.8361 (2392.8 - 191.87) = 191.87 + 0.8361(2190.93) \approx 191.87 + 1830.97 \approx 2022.84$ kJ/kg.
*   **State 1 & 2 (Condenser/Boiler Inlet):** $P_1 = P_4 = 0.1$ bar. At this pressure, $h_1 = h_f$ at 0.1 bar = 191.87 kJ/kg. $v_{f1} = 0.001043$ m³/kg.
    $P_2 = P_3 = 30$ bar = 3000 kPa.
    Pump work $W_p = v_{f1} (P_2 - P_1) = 0.001043 \, \text{m}^3/\text{kg} \times (3000 - 10) \, \text{kPa} = 0.001043 \times 2990 \, \text{kPa} \approx 3.12$ kJ/kg.
    $h_2 = h_1 + W_p = 191.87 + 3.12 = 195.0$ kJ/kg.
*   **Turbine Work ($W_t$):** $W_t = h_3 - h_4 = 3051.6 - 2022.84 = 1028.76$ kJ/kg.
*   **Net Work ($W_{net}$):** $W_{net} = W_t - W_p = 1028.76 - 3.12 = 1025.64$ kJ/kg.
*   **Heat Supplied ($Q_{in}$):** $Q_{in} = h_3 - h_2 = 3051.6 - 195.0 = 2856.6$ kJ/kg.
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{1025.64}{2856.6} \approx 0.359$ or 35.9%.
*   **Specific Steam Consumption (SSC):** SSC = $\frac{3600}{W_{net}} = \frac{3600}{1025.64} \approx 3.51$ kg/kWh.

### 2.2 Performance Parameters for Modified Rankine Cycles

*   **Regenerative Cycle:**
    *   **Efficiency:** Calculated by performing an energy balance on each feedwater heater and the turbine, considering the fraction of steam bled. The general formula for thermal efficiency of a regenerative cycle with $n$ heaters is complex and usually derived by summing up work and heat transfers across all stages.
    *   *(P.K. Nag, Chapter 3, Section 3.4 provides a step-by-step method for calculating efficiency with multiple heaters.)*
    *   **General Observation:** Efficiency increases with the number of feedwater heaters, up to a practical limit.
*   **Reheat Cycle:**
    *   **Turbine Work:** $W_t = (h_3 - h_4) + (h_5 - h_6)$
    *   **Pump Work:** $W_p = v_{f1}(P_{boiler} - P_{condenser})$ (same as simple cycle)
    *   **Net Work:** $W_{net} = W_t - W_p$
    *   **Heat Supplied:** $Q_{in} = (h_3 - h_2) + (h_5 - h_4)$
    *   **Thermal Efficiency:** $\eta_{th} = \frac{W_{net}}{Q_{in}}$
    *   **Benefit of Reheating:** Improves efficiency, especially for higher boiler pressures. The optimal reheat pressure for a single reheat cycle to maximize efficiency is the geometric mean of the boiler and condenser pressures: $P_{reheat} = \sqrt{P_{boiler} \times P_{condenser}}$.
    *   *(P.K. Nag, Chapter 3, Section 3.2 elaborates on the effect of reheat pressure on efficiency.)*
    *   *(El Wakil, Chapter 5, Section 5.2 provides analysis for reheat cycles.)*

---

## 3. Steam Turbines and Steam Nozzles (CO3: K3)

### 3.1 Steam Turbines

**Function:** To convert the thermal and pressure energy of steam into mechanical rotational energy.

**Classification:**

*   **Based on steam pressure:** High-pressure, medium-pressure, low-pressure turbines.
*   **Based on expansion process:**
    *   **Impulse Turbines:** Pressure drop occurs entirely in the stationary nozzles. The steam jet then impinges on moving blades, imparting impulse.
        *   **De Laval Turbine:** Single stage impulse turbine with a nozzle and a single row of moving blades.
        *   **Rateau Turbine:** Series of stages, each with a set of nozzles and a set of moving blades.
        *   **Curtis Turbine:** Velocity compounding stage (nozzles, moving blades, stationary blades, moving blades).
    *   **Reaction Turbines:** Pressure drop occurs in both stationary (nozzles/guide vanes) and moving blades. Steam expands and accelerates as it passes through the moving blades, producing a reaction force.
        *   **Parsons Turbine:** Half-reaction turbine (equal pressure drop in fixed and moving blades).
        *   **Gifford-Eiffel Turbine:** Fully reaction turbine.

**Key Concepts in Turbine Performance:**

*   **Stage Efficiency:** Efficiency of a single stage (nozzle + blades).
*   **Isentropic Efficiency (Overall):** Ratio of isentropic work output to the actual work output.
    *   $\eta_{turbine} = \frac{\text{Actual Work Output}}{\text{Isentropic Work Output}} = \frac{h_3 - h_{4,actual}}{h_3 - h_4}$ (where $h_4$ is isentropic enthalpy drop).
*   **Blade Speed ($u$):** Tangential velocity of the blades.
*   **Steam Jet Velocity ($v$):** Velocity of steam exiting the nozzle.
*   **Whirling Factor:** Accounts for the velocity component of steam along the blade.
*   **Work Done per Stage:** Depends on blade and steam velocities, angles, and number of stages.

**Work done in a simple impulse stage (based on velocity diagrams):**

*   Axial impulse turbine: $W_{stage} = v_w \cdot u$, where $v_w$ is the change in whirl velocity of steam.
*   *(P.K. Nag, Chapter 4, Section 4.3.1 provides detailed derivation of work done and forces on blades using velocity triangles.)*
*   *(El Wakil, Chapter 6, Section 6.3 discusses impulse and reaction turbine types and their analysis.)*

### 3.2 Steam Nozzles

**Function:** To convert the thermal energy (enthalpy) of high-pressure steam into kinetic energy (velocity) by allowing it to expand through a converging-diverging passage.

**Types of Nozzles:**

*   **Converging Nozzle:** Used when the back pressure is above the critical pressure. The maximum velocity achieved is sonic (Mach 1) at the throat.
*   **Converging-Diverging (De Laval) Nozzle:** Used when the back pressure is below the critical pressure. It allows supersonic flow to develop in the diverging section.

**Critical Pressure Ratio:** The ratio of the pressure at the throat ($P^*$) to the inlet pressure ($P_0$) for isentropic flow, where the velocity is sonic.
    *   For ideal gases: $\frac{P^*}{P_0} = \left(\frac{2}{k+1}\right)^{k/(k-1)}$
    *   For steam (using steam tables/ Mollier chart): The critical pressure ratio is approximately 0.577 for steam with $k=1.3$.
    *   *(P.K. Nag, Chapter 4, Section 4.1.2 explains critical pressure and velocity in nozzles.)*

**Velocity of Steam at Nozzle Exit:**

*   **Converging Nozzle (to throat):** $v^* = \sqrt{2 h_0 (1 - (P^*/P_0)^{(k-1)/k})}$ where $h_0$ is initial enthalpy.
*   **Converging-Diverging Nozzle (to exit):** $v_{exit} = \sqrt{2 h_0 (1 - (P_{exit}/P_0)^{(k-1)/k})}$
    *   If the expansion is isentropic to the back pressure $P_{exit}$: $v_{exit} = \sqrt{2(h_0 - h_{exit})}$.
    *   *(El Wakil, Chapter 6, Section 6.1 provides detailed theory of nozzle flow and velocity calculation.)*

**Nozzle Efficiency:** Accounts for frictional losses in the nozzle.
    *   $\eta_{nozzle} = \frac{\text{Actual Kinetic Energy at Exit}}{\text{Isentropic Kinetic Energy at Exit}} = \frac{v_{actual}^2/2}{v_{isentropic}^2/2} = \frac{h_0 - h_{actual,exit}}{h_0 - h_{isentropic,exit}}$

**Example Problem (Nozzle Velocity):**

Steam at 10 bar, $200^\circ\text{C}$ expands isentropically in a nozzle to 1 bar. Calculate the exit velocity of the steam.

**Solution:**

*   **State 0 (Nozzle Inlet):** $P_0 = 10$ bar, $T_0 = 200^\circ\text{C}$. From steam tables, $h_0 = 2827.9$ kJ/kg, $s_0 = 7.1332$ kJ/kg·K.
*   **State 1 (Nozzle Outlet):** $P_1 = 1$ bar. From steam tables at 1 bar, $h_f = 417.5$ kJ/kg, $h_g = 2675.4$ kJ/kg, $s_f = 1.3028$ kJ/kg·K, $s_g = 7.3589$ kJ/kg·K.
    Since expansion is isentropic, $s_1 = s_0 = 7.1332$ kJ/kg·K.
    This is in the wet region ($s_f < s_1 < s_g$).
    Quality $x_1 = \frac{s_1 - s_f}{s_g - s_f} = \frac{7.1332 - 1.3028}{7.3589 - 1.3028} = \frac{5.8304}{6.0561} \approx 0.9627$
    $h_1 = h_f + x_1 (h_g - h_f) = 417.5 + 0.9627 (2675.4 - 417.5) = 417.5 + 0.9627(2257.9) \approx 417.5 + 2174.1 \approx 2591.6$ kJ/kg.
*   **Exit Velocity ($v_1$):** $v_1 = \sqrt{2(h_0 - h_1)} = \sqrt{2 \times (2827.9 - 2591.6) \times 1000}$ J/kg (multiply by 1000 to convert kJ to J)
    $v_1 = \sqrt{2 \times 236.3 \times 1000} = \sqrt{472600} \approx 687.5$ m/s.

---

## 4. Energy Storage Systems (CO4: K2)

While not the primary focus of conventional thermal power plants, energy storage is increasingly integrated to improve grid stability and renewable energy utilization.

*   **Thermal Energy Storage (TES):** Storing thermal energy generated by a primary source for later use.
    *   **Sensible Heat Storage:** Storing heat by changing the temperature of a storage medium (e.g., water, molten salts, rocks).
    *   **Latent Heat Storage:** Storing heat by changing the phase of a storage medium (e.g., phase change materials - PCM).
    *   **Thermochemical Storage:** Storing heat through reversible chemical reactions.
*   **Applications in Thermal Power Plants:**
    *   **Concentrated Solar Power (CSP) Plants:** TES (typically molten salt) stores solar heat to generate steam for electricity production even when the sun is not shining. This allows CSP plants to dispatch power on demand.
    *   **Peak Shaving:** Storing excess energy (e.g., from renewables or off-peak electricity) to be released during peak demand periods.
    *   **Integration with Combined Heat and Power (CHP) plants:** Storing heat for later use in industrial processes or district heating.

*(M.M. El Wakil's "Power Plant Technology" may have sections on advanced concepts or integrations that touch upon energy storage. For detailed TES, other specialized texts would be more comprehensive.)*

---

## 5. Economics of Power Generation and Pollution (CO5: K2)

### 5.1 Economics of Power Generation

**Key Economic Factors:**

*   **Capital Costs:** Initial investment for plant construction (land, civil works, equipment).
*   **Fixed Operating Costs:** Costs incurred regardless of power output (salaries, maintenance, insurance).
*   **Variable Operating Costs:** Costs that depend on power output (fuel costs, consumables, some maintenance).
*   **Fuel Costs:** The most significant operating cost for thermal power plants.
*   **Capacity Factor:** Ratio of actual energy generated over a period to the maximum possible energy that could have been generated. Higher capacity factor reduces cost per kWh.
*   **Load Factor:** Ratio of average load over a period to the peak load during that period.
*   **Cost of Electricity ($C_{elec}$):**
    *   $C_{elec} = \frac{\text{Total Annual Cost}}{\text{Total Annual Energy Generated (kWh)}}$
    *   Total Annual Cost = Fixed Costs + Variable Costs.
*   **Levelized Cost of Electricity (LCOE):** A more comprehensive metric that accounts for the time value of money by discounting all future costs and energy production over the plant's lifetime.
    *   LCOE = $\frac{\sum_{t=1}^{n} \frac{\text{Investment}_t + \text{Operating Cost}_t + \text{Fuel Cost}_t}{(1+r)^t}}{\sum_{t=1}^{n} \frac{\text{Energy Produced}_t}{(1+r)^t}}$, where $r$ is the discount rate.

*(P.K. Nag, Chapter 1, Section 1.6, and Chapter 10, discuss power plant economics in detail, including cost analysis and tariffs.)*
*(G.R. Nagpal & S.C. Sharma, Chapter 1, also covers economic aspects of power generation.)*

### 5.2 Pollution from Power Plants and Environmental Effects

Thermal power plants, especially those using fossil fuels, are significant sources of air pollution.

**Pollutants and their Sources:**

*   **Carbon Dioxide ($CO_2$):**
    *   **Source:** Complete combustion of carbonaceous fuels.
    *   **Environmental Effect:** Primary greenhouse gas, contributing to climate change and global warming.
*   **Sulfur Dioxide ($SO_2$):**
    *   **Source:** Combustion of fuels containing sulfur (especially coal).
    *   **Environmental Effect:** Causes acid rain, respiratory problems, and damages vegetation and buildings.
*   **Nitrogen Oxides ($NO_x$):**
    *   **Source:** High-temperature combustion in the furnace, where nitrogen in the air and fuel reacts with oxygen.
    *   **Environmental Effect:** Contributes to smog formation, acid rain, and respiratory irritation. Precursors to ozone formation.
*   **Particulate Matter (PM) / Fly Ash:**
    *   **Source:** Incomplete combustion of fuels, ash content in coal.
    *   **Environmental Effect:** Respiratory and cardiovascular diseases, reduces visibility, contributes to acid rain.
*   **Carbon Monoxide (CO):**
    *   **Source:** Incomplete combustion.
    *   **Environmental Effect:** Toxic gas, reduces oxygen-carrying capacity of blood.
*   **Other Pollutants:** Unburned hydrocarbons, ash, heavy metals (e.g., mercury from coal).

**Pollution Control Technologies:**

*   **For $SO_2$:**
    *   **Flue Gas Desulfurization (FGD):** Wet scrubbers (limestone-gypsum process), dry scrubbers.
    *   **Fuel Treatment:** Washing coal, using low-sulfur fuels.
*   **For $NO_x$:**
    *   **Low $NO_x$ Burners (LNB):** Modify combustion conditions to reduce $NO_x$ formation.
    *   **Overfire Air (OFA):** Staged combustion.
    *   **Selective Catalytic Reduction (SCR) / Selective Non-Catalytic Reduction (SNCR):** Injecting ammonia or urea to convert $NO_x$ to nitrogen and water.
*   **For Particulate Matter:**
    *   **Electrostatic Precipitators (ESPs):** Electrically charges particles, which are then collected on oppositely charged plates.
    *   **Baghouses (Fabric Filters):** Filters flue gas through fabric bags, capturing particulate matter.
*   **For $CO_2$:**
    *   **Energy Efficiency Improvements:** Reduces fuel consumption.
    *   **Carbon Capture and Storage (CCS):** Technologies to capture $CO_2$ from flue gases and store it underground.
    *   **Fuel Switching:** Using natural gas (lower $CO_2$ per unit energy) or renewable energy sources.

*(P.K. Nag, Chapter 9, discusses environmental impacts and pollution control measures in detail.)*
*(El Wakil, Chapter 5, Section 5.6 covers air pollution and control.)*

---

## Important Points to Remember

*   The Rankine cycle is the fundamental thermodynamic cycle for thermal power plants.
*   Efficiency of the Rankine cycle can be improved by **superheating**, **reheating**, and **regenerative feedwater heating**.
*   The **dryness fraction** of steam at the turbine exhaust is crucial; low dryness can cause blade erosion.
*   **Nozzle efficiency** and **turbine isentropic efficiency** are key parameters for evaluating component performance.
*   **Heat rate** is a measure of fuel consumption efficiency; lower heat rate is better.
*   **Pollution control technologies** are essential for minimizing the environmental impact of thermal power plants.
*   **Fuel cost** is a major driver of the economics of electricity generation.

---

## Practice Questions

**Question 1 (CO2):**
A Rankine cycle operates between a boiler pressure of 40 bar and a condenser pressure of 0.1 bar. Steam enters the turbine at $350^\circ\text{C}$. Calculate the net work output per kg of steam and the thermal efficiency. (Assume isentropic expansion and use steam tables.)

**Question 2 (CO3):**
Steam at 15 bar and $250^\circ\text{C}$ enters a nozzle with negligible velocity. It expands isentropically to a pressure of 2 bar. Calculate the exit velocity of the steam. (Use steam tables.)

**Question 3 (CO1 & CO2):**
Explain how reheating and regenerative feedwater heating improve the thermal efficiency of a Rankine cycle. Briefly describe the components involved in each process.

**Question 4 (CO5):**
List the major pollutants emitted from a coal-fired thermal power plant and describe their environmental effects. Name at least one pollution control technology for each major pollutant ($SO_2$, $NO_x$, PM).

---

## Answers to Practice Questions

**Answer 1:**

*   **State 3 (Turbine Inlet):** $P_3 = 40$ bar, $T_3 = 350^\circ\text{C}$. From steam tables, $h_3 = 3213.6$ kJ/kg, $s_3 = 6.9417$ kJ/kg·K.
*   **State 4 (Turbine Outlet):** $P_4 = 0.1$ bar. From steam tables at 0.1 bar, $h_f = 191.87$ kJ/kg, $h_g = 2392.8$ kJ/kg, $s_f = 0.6487$ kJ/kg·K, $s_g = 8.1502$ kJ/kg·K.
    $s_4 = s_3 = 6.9417$ kJ/kg·K.
    $x_4 = \frac{6.9417 - 0.6487}{8.1502 - 0.6487} = \frac{6.293}{7.5015} \approx 0.8389$
    $h_4 = 191.87 + 0.8389 (2392.8 - 191.87) \approx 191.87 + 0.8389(2200.93) \approx 191.87 + 1846.5 \approx 2038.4$ kJ/kg.
*   **State 1 & 2 (Condenser/Boiler Inlet):** $P_1 = 0.1$ bar, $h_1 = 191.87$ kJ/kg, $v_{f1} = 0.001043$ m³/kg.
    $P_2 = 40$ bar = 4000 kPa.
    $W_p = v_{f1} (P_2 - P_1) = 0.001043 \times (4000 - 10) \approx 4.16$ kJ/kg.
    $h_2 = h_1 + W_p = 191.87 + 4.16 = 196.03$ kJ/kg.
*   **Turbine Work ($W_t$):** $W_t = h_3 - h_4 = 3213.6 - 2038.4 = 1175.2$ kJ/kg.
*   **Net Work ($W_{net}$):** $W_{net} = W_t - W_p = 1175.2 - 4.16 = 1171.04$ kJ/kg.
*   **Heat Supplied ($Q_{in}$):** $Q_{in} = h_3 - h_2 = 3213.6 - 196.03 = 3017.57$ kJ/kg.
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{1171.04}{3017.57} \approx 0.388$ or 38.8%.

**Answer 2:**

*   **State 0 (Nozzle Inlet):** $P_0 = 15$ bar, $T_0 = 250^\circ\text{C}$. From steam tables, $h_0 = 2925.7$ kJ/kg, $s_0 = 7.1584$ kJ/kg·K.
*   **State 1 (Nozzle Outlet):** $P_1 = 2$ bar. From steam tables at 2 bar, $h_f = 504.7$ kJ/kg, $h_g = 2706.7$ kJ/kg, $s_f = 1.5301$ kJ/kg·K, $s_g = 6.5833$ kJ/kg·K.
    $s_1 = s_0 = 7.1584$ kJ/kg·K.
    This is in the superheated region since $s_1 > s_g$.
    Using superheated steam tables for 2 bar, find the enthalpy corresponding to $s_1 = 7.1584$ kJ/kg·K.
    At 2 bar, $h$ at $s_g=6.5833$ is $2706.7$, and $h$ at $T=300^\circ$C (approx. $s=7.53$) is $3024.2$.
    Interpolating for $s=7.1584$:
    $h_1 = 2706.7 + \frac{7.1584 - 6.5833}{7.53 - 6.5833} \times (3024.2 - 2706.7)$
    $h_1 = 2706.7 + \frac{0.5751}{0.9467} \times 317.5 \approx 2706.7 + 0.6075 \times 317.5 \approx 2706.7 + 192.8 \approx 2899.5$ kJ/kg.
*   **Exit Velocity ($v_1$):** $v_1 = \sqrt{2(h_0 - h_1)} = \sqrt{2 \times (2925.7 - 2899.5) \times 1000}$
    $v_1 = \sqrt{2 \times 26.2 \times 1000} = \sqrt{52400} \approx 229.0$ m/s.

**Answer 3:**

*   **Reheating:** Improves efficiency by increasing the average temperature of heat addition. Steam is partially expanded in the HP turbine, then sent back to the boiler to be reheated before expanding in the LP turbine. This increases the enthalpy drop across the turbine and reduces moisture content at the exhaust, mitigating blade erosion.
*   **Regenerative Feedwater Heating:** Improves efficiency by preheating the feedwater using steam extracted from the turbine. This reduces the amount of heat that needs to be supplied in the boiler, particularly at lower temperatures, and also reduces the heat rejected in the condenser. Components involved are **feedwater heaters** (open or closed type) and **extraction points** on the turbine.

**Answer 4:**

*   **Sulfur Dioxide ($SO_2$):**
    *   **Environmental Effects:** Acid rain, respiratory problems.
    *   **Control Technology:** Flue Gas Desulfurization (FGD), e.g., wet scrubbers using limestone.
*   **Nitrogen Oxides ($NO_x$):**
    *   **Environmental Effects:** Smog, acid rain, respiratory irritation.
    *   **Control Technology:** Low $NO_x$ Burners (LNB), Selective Catalytic Reduction (SCR).
*   **Particulate Matter (PM) / Fly Ash:**
    *   **Environmental Effects:** Respiratory and cardiovascular diseases, visibility reduction.
    *   **Control Technology:** Electrostatic Precipitators (ESPs), Baghouses.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
