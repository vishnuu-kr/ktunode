---
title: "Regeneration-Regenerative feed water heating-Feed water heaters-"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446377c"
status: "completed"
scrapedAt: "2026-05-20T18:06:22.261Z"
---
# Power Plant Engineering: Module 1 - Analysis of Steam Cycle

## Topic: Regeneration - Regenerative Feed Water Heating - Feed Water Heaters

This topic delves into the principles and practical applications of regenerative feed water heating in steam power plants, a crucial technique for improving thermal efficiency. We will explore the concept of regeneration, the various types of feed water heaters, their placement within the cycle, and their impact on performance.

---

### 1. Introduction to Regeneration and its Importance

**Learning Outcome Addressed:** CO2 (Calculate the performance parameters of simple and modified Rankine cycles)

**Key Concepts:**

*   **Rankine Cycle:** The theoretical thermodynamic cycle upon which most steam power plants operate. It consists of four processes: isentropic compression (pump work), isobaric heat addition (boiler), isentropic expansion (turbine), and isobaric heat rejection (condenser).
*   **Thermal Efficiency:** The ratio of the net work output to the heat input, $\eta_{th} = \frac{W_{net}}{Q_{in}}$.
*   **Regeneration:** A thermodynamic process where a portion of the working fluid (steam) is extracted at an intermediate pressure from the turbine and used to heat the feed water.
*   **Purpose of Regeneration:** To increase the average temperature at which heat is supplied to the working fluid, thereby increasing the thermal efficiency of the cycle. It aims to reduce the heat rejected in the condenser by preheating the feed water.

**Elaboration:**

In a simple Rankine cycle, feed water enters the boiler at a relatively low temperature (typically saturated liquid at condenser pressure). This means a significant amount of heat must be added in the boiler to raise the water temperature to saturation temperature and then to convert it into steam.

Regeneration aims to preheat the feed water before it enters the boiler by utilizing the heat available in the steam extracted from the turbine. This preheating reduces the amount of heat that needs to be supplied in the boiler, leading to a higher thermal efficiency.

**El Wakil (Chapter 5, Rankine Cycle and its Modifications):** El Wakil emphasizes that regeneration is a way to approach the Carnot cycle efficiency by increasing the average temperature of heat addition. He explains that by bleeding steam at various points in the turbine and using it to heat the feed water, the overall efficiency can be significantly improved.

**Nag (Chapter 3, The Rankine Cycle and its Modifications):** Nag highlights regeneration as a method to reduce irreversibility in the cycle by minimizing the temperature difference between the heat source and the working fluid during heat addition.

---

### 2. Regenerative Feed Water Heating

**Learning Outcome Addressed:** CO2 (Calculate the performance parameters of simple and modified Rankine cycles)

**Key Concepts:**

*   **Extraction Points:** Locations on the turbine where steam is extracted at various pressure levels.
*   **Feed Water Heaters (FWHs):** Devices where the extracted steam is used to heat the feed water.
*   **Reheating:** While not strictly regeneration, reheating (expanding steam in two stages with intermediate heating) is often combined with regeneration in modern power plants to further improve efficiency.
*   **Open Feed Water Heaters:** Direct contact heaters where extracted steam mixes with the feed water.
*   **Closed Feed Water Heaters:** Indirect contact heaters where extracted steam heats the feed water through a heat transfer surface.

**Working Principle:**

1.  **Steam Extraction:** Steam is extracted from the turbine at specific pressure stages.
2.  **Heating:** This extracted steam flows into a feed water heater.
3.  **Heat Transfer:** The extracted steam transfers its heat to the feed water passing through the heater.
4.  **Feed Water Preheating:** The feed water temperature increases.
5.  **Condensate Handling:**
    *   In **open heaters**, the extracted steam condenses and mixes with the feed water, forming a single stream.
    *   In **closed heaters**, the extracted steam condenses, and the resulting condensate can be returned to the feed water line (drip type), pumped to the next higher pressure heater, or returned to the condenser.

**Elaboration:**

The temperature of the feed water leaving the feed water heater will be less than the saturation temperature of the steam extracted for heating, due to heat losses and finite temperature differences required for heat transfer.

---

### 3. Types of Feed Water Heaters

**Learning Outcome Addressed:** CO1 (Explain the layout, components and working of steam, gas, hydro, and nuclear power plants.), CO2 (Calculate the performance parameters of simple and modified Rankine cycles.)

#### 3.1. Open Feed Water Heaters (Direct Contact Heaters)

**Key Concepts:**

*   **Direct Mixing:** Extracted steam mixes directly with the feed water.
*   **Simpler Design:** Generally simpler and less expensive than closed heaters.
*   **No Risk of Leakage:** Since steam and water mix, there's no risk of leakage from the extraction steam to the feed water.
*   **Condensate Reheat:** The mixed stream (feed water + condensate) is heated to the saturation temperature of the extraction steam.

**Working:**

Extracted steam from the turbine is introduced into a shell containing the feed water. The steam condenses, releasing its latent heat, and mixes with the feed water, raising its temperature.

**El Wakil (Chapter 5):** El Wakil describes open feed water heaters as efficient but mentions that they require an extra pump if multiple open heaters are used in series, as the mixed stream needs to be pumped to the next stage.

**Nag (Chapter 3):** Nag provides examples of open feed water heaters used in power plants and explains the enthalpy calculations involved.

**Example:**

Consider a turbine with extraction at point 'x'. The steam extracted at pressure $P_x$ is fed into an open feed water heater. The feed water entering the heater at enthalpy $h_{fw,in}$ mixes with the extracted steam at enthalpy $h_x$. The resulting mixture leaves the heater at a temperature corresponding to the saturation temperature of $P_x$ and enthalpy $h_{fw,out}$.

#### 3.2. Closed Feed Water Heaters (Indirect Contact Heaters)

**Key Concepts:**

*   **Indirect Heat Transfer:** Heat is transferred from the extracted steam to the feed water through a heat transfer surface (tubes).
*   **Separation of Streams:** The extracted steam and feed water remain in separate circuits.
*   **Condensate Handling:** The condensate formed from the extracted steam needs to be managed.
*   **Higher Pressure Operation:** Can operate at higher pressures compared to open heaters without requiring additional pumps.

**Working:**

Extracted steam flows through tubes, and the feed water flows around these tubes, absorbing heat.

**Types of Condensate Handling in Closed Feed Water Heaters:**

*   **Drip Type:** The condensate from the heater is returned directly to the feed water line, usually through a drip pipe. This is the simplest arrangement.
*   **Cascade Type:** The condensate from a higher-pressure heater is cascaded (pumped) to a lower-pressure heater, eventually mixing with the feed water in the lowest pressure heater or being returned to the condenser. This requires interstage pumps.
*   **Overboard Discharge Type:** Condensate is discharged to the condenser. This is less common as it results in a loss of heat and can lead to a slight decrease in efficiency.

**El Wakil (Chapter 5):** El Wakil discusses the design considerations for closed feed water heaters, including the heat transfer area required and the materials used for tubes.

**Nag (Chapter 3):** Nag explains the advantages of closed feed water heaters, such as maintaining the purity of the feed water and avoiding the need for additional pumping for each heater in a series.

**Example:**

In a closed feed water heater, the enthalpy of the feed water leaving the heater ($h_{fw,out}$) will be less than the enthalpy of the extracted steam ($h_x$) due to irreversible heat transfer. The condensate leaving the heater will be saturated liquid at the extraction pressure.

---

### 4. Arrangement of Feed Water Heaters

**Learning Outcome Addressed:** CO1 (Explain the layout, components and working of steam, gas, hydro, and nuclear power plants.), CO2 (Calculate the performance parameters of simple and modified Rankine cycles.)

**Key Concepts:**

*   **Series Arrangement:** Feed water heaters are typically arranged in series, with the feed water flowing sequentially through them.
*   **Pressure Progression:** Feed water flows from lower pressure heaters to higher pressure heaters.
*   **Extraction Pressure:** Steam is extracted from progressively higher pressure stages of the turbine for higher pressure heaters.
*   **Number of Heaters:** The number of feed water heaters used depends on the desired efficiency improvement and economic considerations. Modern large power plants can have 6-8 or even more regenerative feed water heaters.

**Arrangement Considerations:**

*   **Economizer:** The feed water is often preheated in an economizer within the boiler, utilizing exhaust flue gases. This is a form of heat recovery but distinct from regenerative feed water heating.
*   **Deaerator:** Typically, one of the feed water heaters is a deaerator, which is an open type heater designed to remove dissolved gases (oxygen and carbon dioxide) from the feed water, preventing corrosion. It is usually placed at a higher pressure to ensure the water is at a sufficiently high temperature to drive off these gases.

**El Wakil (Chapter 5):** El Wakil illustrates typical regenerative cycles with multiple feed water heaters, showing the flow paths and pressure levels.

**Nag (Chapter 3):** Nag presents diagrams of power plant layouts incorporating various types of feed water heaters in series.

**Example:**

A common arrangement might include:

1.  **Low-pressure closed heater:** Heated by steam extracted from a low-pressure turbine stage.
2.  **Deaerator (open heater):** Heated by steam extracted from an intermediate-pressure turbine stage. This removes dissolved gases.
3.  **High-pressure closed heaters (multiple):** Heated by steam extracted from progressively higher pressure turbine stages.

The feed water is pumped between heaters. The condensate from the high-pressure heaters is typically cascaded to the next lower pressure heater.

---

### 5. Performance Analysis and Efficiency Calculations

**Learning Outcome Addressed:** CO2 (Calculate the performance parameters of simple and modified Rankine cycles.)

**Key Concepts:**

*   **Enthalpy Balance:** Applying the first law of thermodynamics (energy balance) to each feed water heater to determine the enthalpy of the feed water leaving the heater.
*   **Work Calculation:** Calculating pump work and turbine work at each stage.
*   **Heat Input/Output:** Determining the heat added in the boiler and rejected in the condenser.
*   **Thermal Efficiency:** Calculating the overall thermal efficiency using the net work and heat input.
*   **Internal Feed Water Heater Efficiency:** The ratio of the actual temperature rise to the maximum possible temperature rise.

**Calculations for a Single Open Feed Water Heater:**

Let:
*   $\dot{m}_1$: Mass flow rate of feed water entering the heater.
*   $h_{fw,in}$: Enthalpy of feed water entering.
*   $\dot{m}_x$: Mass flow rate of steam extracted from the turbine.
*   $h_x$: Enthalpy of extracted steam.
*   $\dot{m}_2$: Mass flow rate of feed water leaving the heater.
*   $h_{fw,out}$: Enthalpy of feed water leaving.

Energy balance for the open heater:
$\dot{m}_1 h_{fw,in} + \dot{m}_x h_x = (\dot{m}_1 + \dot{m}_x) h_{fw,out}$

Since $\dot{m}_2 = \dot{m}_1 + \dot{m}_x$, we have:
$\dot{m}_1 h_{fw,in} + \dot{m}_x h_x = \dot{m}_2 h_{fw,out}$

The fraction of steam extracted ($y_x$) is often expressed as:
$y_x = \frac{\dot{m}_x}{\dot{m}_{boiler}}$, where $\dot{m}_{boiler}$ is the total mass flow rate through the boiler.
The mass flow rate through the turbine after the extraction point is $(1 - y_x)\dot{m}_{boiler}$.

**Calculations for a Single Closed Feed Water Heater:**

Let:
*   $\dot{m}_{fw}$: Mass flow rate of feed water.
*   $h_{fw,in}$: Enthalpy of feed water entering.
*   $h_{fw,out}$: Enthalpy of feed water leaving.
*   $\dot{m}_x$: Mass flow rate of extracted steam.
*   $h_x$: Enthalpy of extracted steam.
*   $h_{cond}$: Enthalpy of condensate leaving.

Energy balance for the closed heater:
$\dot{m}_{fw} h_{fw,in} + \dot{m}_x h_x = \dot{m}_{fw} h_{fw,out} + \dot{m}_x h_{cond}$

The extraction fraction $y_x$ relates the mass flow rate through the turbine before and after the extraction point:
Mass flow before extraction = $(1 + y_x) \dot{m}_{boiler}$
Mass flow after extraction = $\dot{m}_{boiler}$
Hence, $\dot{m}_x = y_x \dot{m}_{boiler}$

**Example of Efficiency Improvement:**

Consider a simple Rankine cycle and a regenerative cycle with one open feed water heater. The regenerative cycle will generally have a higher thermal efficiency because the average temperature of heat addition is increased.

**Nagpal & Sharma (Chapter 8, Steam Power Plants):** These authors provide detailed examples of calculating thermal efficiency for regenerative cycles with multiple feed water heaters, including how to determine the extraction fractions for optimal performance.

**Gupta (Chapter 4, Rankine Cycle and its Modifications):** Gupta offers step-by-step procedures for analyzing regenerative cycles using T-s and h-s diagrams, making the calculations more intuitive.

---

### 6. Advantages and Disadvantages of Regeneration

**Learning Outcome Addressed:** CO2 (Calculate the performance parameters of simple and modified Rankine cycles.), CO5 (Discuss the economics of power generation and pollution from power plants and their effect on the environment.)

**Advantages:**

*   **Improved Thermal Efficiency:** The primary advantage. Reduces heat input required for the same net work output.
*   **Reduced Heat Rejection:** Less heat is rejected to the condenser as feed water is preheated.
*   **Improved Steam Quality at Turbine Exit:** By extracting steam at intermediate stages, the moisture content in the steam at the turbine exhaust is reduced, leading to less erosion of turbine blades.
*   **Reduced Boiler Size (for the same output):** Due to improved efficiency, a smaller boiler may be sufficient for a given power output.

**Disadvantages:**

*   **Increased Capital Cost:** The cost of feed water heaters, extraction piping, and additional pumps (if needed) increases the initial investment.
*   **Increased Complexity:** The plant layout becomes more complex.
*   **Additional Pumping Power:** If multiple open heaters are used in cascade, additional pump work is required, which slightly reduces the net gain in efficiency.
*   **Reduced Net Work Output (per unit mass of steam through boiler):** Since some steam is extracted, the mass flow rate through the latter stages of the turbine is reduced, thus reducing the total turbine work per unit mass of steam entering the boiler. However, the increase in efficiency due to preheating usually more than compensates for this.

**El Wakil:** El Wakil presents a balanced view, discussing the trade-offs between increased efficiency and increased capital costs.

**Nag:** Nag highlights that the economic viability of regeneration depends on the cost of fuel and the capital cost of the additional equipment.

---

### 7. Practice Questions and Answers

**Question 1:**
A regenerative Rankine cycle uses one open feed water heater. Steam is extracted from the turbine at 5 bar. The feed water enters the heater at 70°C and leaves at 150°C. If the extraction steam is saturated steam at 5 bar, what is the enthalpy of the feed water leaving the heater? (Assume relevant steam table data).

**Answer 1:**
The feed water leaves the open feed water heater at the saturation temperature of the extraction steam. From steam tables, the saturation temperature of steam at 5 bar is approximately 151.8°C. Since the feed water is in direct contact with the steam, it will reach this saturation temperature (assuming ideal conditions, neglecting minor heat losses). Therefore, the enthalpy of the feed water leaving the heater will correspond to saturated liquid at 5 bar.

*   $T_{sat} @ 5 \text{ bar} \approx 151.8^\circ\text{C}$
*   Since the feed water leaves at 150°C and is heated by steam at 151.8°C, it will approach the saturation temperature. For an ideal open heater, it reaches $T_{sat}$.
*   Enthalpy of saturated liquid at 5 bar ($h_f @ 5 \text{ bar}$) from steam tables is approximately 640.2 kJ/kg.
    **(Note: The question provides the exit temperature as 150°C. In an open heater, it should reach the saturation temperature of the steam. There might be a slight discrepancy in the question's premise or it implies a non-ideal scenario. If we strictly follow the premise that it leaves at 150°C, then we would find the enthalpy corresponding to 150°C and the pressure of the mixed stream.)**

**Revisiting the premise:** If the feed water leaves at 150°C, and it was heated by steam at 151.8°C, this implies an incomplete heat transfer or slightly imperfect mixing. In a typical problem, for an open heater, the exit water temperature is assumed to be the saturation temperature of the extraction steam. Let's assume the question intends for it to reach the saturation temperature.

**Question 2:**
A closed feed water heater receives steam extracted from the turbine at 20 bar with an enthalpy of 2870 kJ/kg. The feed water enters the heater at 100°C with an enthalpy of 419 kJ/kg and leaves at 170°C with an enthalpy of 715 kJ/kg. The mass flow rate of feed water is 100 kg/s. Calculate the mass flow rate of extracted steam, assuming the condensate leaves the heater as saturated liquid at 20 bar.

**Answer 2:**
We use the energy balance for the closed feed water heater:
$\dot{m}_{fw} h_{fw,in} + \dot{m}_x h_x = \dot{m}_{fw} h_{fw,out} + \dot{m}_x h_{cond}$

Given:
*   $\dot{m}_{fw} = 100$ kg/s
*   $h_{fw,in} = 419$ kJ/kg
*   $h_{fw,out} = 715$ kJ/kg
*   $h_x = 2870$ kJ/kg (enthalpy of extracted steam at 20 bar)
*   $h_{cond}$: Enthalpy of saturated liquid at 20 bar. From steam tables, $h_f @ 20 \text{ bar} \approx 908.8$ kJ/kg.

Rearranging the energy balance to solve for $\dot{m}_x$:
$\dot{m}_x (h_x - h_{cond}) = \dot{m}_{fw} (h_{fw,out} - h_{fw,in})$
$\dot{m}_x = \frac{\dot{m}_{fw} (h_{fw,out} - h_{fw,in})}{(h_x - h_{cond})}$

Plugging in the values:
$\dot{m}_x = \frac{100 \text{ kg/s} \times (715 \text{ kJ/kg} - 419 \text{ kJ/kg})}{(2870 \text{ kJ/kg} - 908.8 \text{ kJ/kg})}$
$\dot{m}_x = \frac{100 \times 296}{1961.2}$
$\dot{m}_x \approx 15.09$ kg/s

**Question 3:**
Discuss the impact of increasing the number of feed water heaters on the thermal efficiency of the Rankine cycle and the overall plant cost.

**Answer 3:**
Increasing the number of feed water heaters generally leads to a higher thermal efficiency. This is because the feed water is preheated to a higher temperature, closer to the saturation temperature of the steam in the boiler, thus reducing the heat input required. However, each additional heater adds to the capital cost of the plant (cost of heaters, piping, and potentially additional pumps). There is an economic optimum where the increase in fuel savings due to higher efficiency is balanced by the increased capital cost and operating costs (e.g., maintenance of more equipment). Beyond a certain point, the marginal increase in efficiency per additional heater diminishes.

---

### 8. Important Points to Remember

*   **Regeneration** significantly improves the thermal efficiency of the Rankine cycle by preheating the feed water using extracted turbine steam.
*   **Open Feed Water Heaters** involve direct mixing of steam and water.
*   **Closed Feed Water Heaters** involve indirect heat transfer through a surface.
*   The **deaerator** is a crucial open feed water heater for removing dissolved gases and preventing corrosion.
*   The **number of feed water heaters** is a trade-off between efficiency gains and capital costs.
*   **Enthalpy balances** are used to analyze the performance of feed water heaters.
*   Regeneration reduces **moisture content** at the turbine exhaust, protecting turbine blades.
*   **Condensate handling** in closed heaters (drip, cascade, overboard) affects overall cycle performance.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K2):** This topic explains the layout and working of a key component (feed water heaters) in steam power plants, contributing to understanding plant configuration.
*   **CO2 (Knowledge Level K3):** The core of this topic involves calculating performance parameters (efficiency, work, heat transfer) of modified Rankine cycles using thermodynamic principles.
*   **CO3 (Knowledge Level K3):** While not directly about turbines and nozzles, understanding steam extraction points is linked to turbine performance.
*   **CO5 (Knowledge Level K2):** The economic implications of regeneration (capital cost vs. fuel savings) and the environmental benefit of improved efficiency (reduced fuel consumption, hence reduced emissions) are discussed.

---

**References:**

*   Power Plant Technology by M. M. El Wakil
*   Power Plant Engineering by P. K. Nag
*   Power Plant Engineering by G. R. Nagpal, S. C. Sharma
*   Power Plant Engineering by Manoj Kumar Gupta

This detailed study note provides a comprehensive understanding of regeneration and feed water heating in steam power plants, aligning with the learning objectives and course outcomes. Remember to consult the recommended textbooks for further details and in-depth analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
