---
title: "closed cycle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c93"
status: "completed"
scrapedAt: "2026-05-20T18:13:40.021Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 1: Gas Turbines – Introduction

### Topic: Closed Cycle Gas Turbines

---

### 1. Introduction to Closed Cycle Gas Turbines

**Definition:** A closed cycle gas turbine is a thermodynamic system where the working fluid (typically air or an inert gas like helium or nitrogen) is continuously circulated through a series of components without being expelled to the atmosphere. The working fluid undergoes successive pressure changes and heat transfers, returning to its initial state to repeat the cycle.

**Contrast with Open Cycle:** Unlike open cycle gas turbines where the working fluid (air) is drawn from the atmosphere, compressed, mixed with fuel, combusted, expanded through the turbine, and then exhausted to the atmosphere, closed cycle systems are characterized by:
*   **Recirculation:** The working fluid is contained and reused.
*   **External Heat Source:** Combustion (or other heat sources like nuclear reactors or solar energy) occurs externally to the working fluid loop.

**Key Advantages:**
*   **Fuel Flexibility:** Can utilize a wide range of heat sources, including fossil fuels, nuclear energy, solar energy, geothermal energy, and waste heat. (Yahya, 2011)
*   **Higher Efficiency Potential:** Can achieve higher efficiencies, especially when operating at higher pressures and utilizing waste heat. (Ganesan, 2017)
*   **Clean Operation:** No pollutants are directly discharged from the combustion process to the atmosphere, as combustion happens in a separate chamber.
*   **Reduced Noise:** Generally quieter operation compared to open cycle systems.
*   **Working Fluid Choice:** The working fluid can be selected to optimize thermodynamic properties, leading to better performance.

**Key Disadvantages:**
*   **Higher Initial Cost:** More complex machinery and external heat exchangers lead to higher capital expenditure.
*   **Larger Size and Weight:** The inclusion of heat exchangers and larger working fluid volumes can increase the overall size and weight of the plant.
*   **Heat Exchanger Losses:** Pressure drops and heat transfer inefficiencies in the heat exchangers reduce overall cycle efficiency.
*   **Working Fluid Leakage:** Maintaining a perfectly sealed system is crucial, as leakage of the working fluid can be a concern.

---

### 2. Basic Closed Cycle Gas Turbine Components

A typical closed cycle gas turbine plant consists of the following main components:

*   **Compressor:** Compresses the working fluid to a higher pressure.
*   **Heat Exchanger (Pre-heater):** Transfers heat from the turbine exhaust to the compressed working fluid, preheating it before it enters the heat addition section. This improves cycle efficiency.
*   **Heat Source (Combustor/Furnace):** Supplies heat to the working fluid at constant pressure. This is where the primary energy input occurs.
*   **Turbine:** Expands the high-temperature, high-pressure working fluid, extracting work.
*   **Heat Exchanger (Cooler/Inter-cooler):** Rejects heat from the working fluid to an external sink (usually cooling water or air) at constant pressure, cooling it before it enters the compressor.

**Illustrative Diagram:**

```
     +-------------------+
     |                   |
     |      Turbine      | ----> Work Output
     |                   |
     +--------+----------+
              | High Pressure, High Temp
              |
      +-------+-------+
      |               |
      | Heat Source   |
      | (Combustor)   | ----> Heat Input
      |               |
      +-------+-------+
              | High Pressure, Medium Temp
              |
     +--------+----------+
     |                   |
     |  Heat Exchanger   |
     |  (Pre-heater)     | ----> Heat In (from Turbine Exhaust)
     |                   |
     +--------+----------+
              | High Pressure, Lower Temp
              |
     +--------+----------+
     |                   |
     |    Compressor     | ----> Work Input
     |                   |
     +--------+----------+
              | Low Pressure, Low Temp
              |
      +-------+-------+
      |               |
      | Heat Exchanger| ----> Heat Out (to Cooling Sink)
      | (Cooler)      |
      |               |
      +-------+-------+
              | Low Pressure, Medium Temp
              |
              (Back to Compressor Inlet)
```

---

### 3. Thermodynamic Cycles for Closed Cycle Gas Turbines

The ideal thermodynamic cycle for a closed cycle gas turbine is the **Brayton Cycle**. However, the practical implementation involves deviations from the ideal due to irreversibilities and the inclusion of heat exchangers.

#### 3.1. Ideal Closed Cycle (Ideal Brayton Cycle)

**Assumptions:**
*   Working fluid is an ideal gas.
*   Isentropic compression and expansion.
*   Heat addition and rejection at constant pressure.
*   No pressure drops in heat exchangers.

**Processes:**
1.  **1-2: Isentropic Compression:** Working fluid is compressed from pressure $P_1$ to $P_2$.
2.  **2-3: Isobaric Heat Addition:** Heat is added to the working fluid at constant pressure $P_2$.
3.  **3-4: Isentropic Expansion:** Working fluid expands through the turbine from pressure $P_2$ to $P_1$.
4.  **4-1: Isobaric Heat Rejection:** Heat is rejected from the working fluid at constant pressure $P_1$.

**Analysis:**
*   **Net Work Output:** $W_{net} = W_{turbine} - W_{compressor}$
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$
    where $r_p = P_2/P_1$ is the pressure ratio and $\gamma$ is the ratio of specific heats.

**Limitation:** The ideal Brayton cycle requires heat addition and rejection at constant pressures, which is not practically achievable in a closed system without heat exchangers that inherently cause pressure drops.

#### 3.2. Practical Closed Cycle (with Intercooling, Reheating, and Heat Exchangers)

To improve efficiency and overcome limitations, practical closed cycle gas turbines often incorporate:

*   **Intercooling:** Dividing the compression process into stages with cooling between stages.
*   **Reheating:** Dividing the expansion process into stages with reheating between stages.
*   **Recuperation (Preheating):** Using a heat exchanger to transfer heat from the turbine exhaust to the compressor discharge.

Let's consider a closed cycle with **recuperation (preheating)** as this is a key differentiator from the ideal Brayton cycle in practical implementation.

**Components and Processes:**
1.  **Compressor (Process 1-2):**
    *   Working fluid enters at low pressure ($P_1$) and low temperature ($T_1$).
    *   It is compressed isentropically (ideally) to pressure $P_2$ and temperature $T_2$.
    *   In reality, it's polytropic, with losses leading to higher $T_2$ for a given $P_2$.
    *   Work consumed by compressor: $W_c = m \cdot c_p (T_2 - T_1)$

2.  **Pre-heater (Recuperator) (Process 2-2'):**
    *   Compressed working fluid from the compressor ($T_2, P_2$) enters one side of the heat exchanger.
    *   It receives heat from the hot exhaust gases from the turbine ($T_4, P_1'$).
    *   The working fluid is preheated to $T_{2'}$.
    *   **Important Note:** Pressure drop occurs in the pre-heater ($P_2 > P_2'$).
    *   Heat transferred: $Q_{preheat} = m \cdot c_p (T_{2'} - T_2)$

3.  **Heat Source (Combustor/Furnace) (Process 2'-3):**
    *   Preheated working fluid enters the heat addition section at $T_{2'}$ and pressure $P_{2'}$.
    *   Heat is added externally at roughly constant pressure ($P_{2'} \approx P_3$).
    *   Working fluid is heated to a maximum temperature $T_3$.
    *   Heat added: $Q_{in} = m \cdot c_p (T_3 - T_{2'})$

4.  **Turbine (Process 3-4):**
    *   High-temperature, high-pressure working fluid from the heat source expands through the turbine.
    *   Ideally, it expands isentropically from $T_3, P_3$ to $T_4, P_4$.
    *   In reality, it's polytropic, with losses leading to lower $T_4$ for a given expansion ratio.
    *   **Important Note:** Pressure drop occurs in the turbine ($P_3 > P_4$).
    *   Work produced by turbine: $W_t = m \cdot c_p (T_3 - T_4)$

5.  **Cooler (Process 4-1):**
    *   Hot exhaust from the turbine ($T_4, P_4$) enters the cooler.
    *   Heat is rejected to an external cooling medium (e.g., water) at roughly constant pressure ($P_4 \approx P_1$).
    *   Working fluid is cooled to its initial temperature $T_1$.
    *   **Important Note:** Pressure drop occurs in the cooler ($P_4 > P_1$).
    *   Heat rejected: $Q_{out} = m \cdot c_p (T_4 - T_1)$

**Cycle Efficiency with Recuperation:**
The thermal efficiency of a closed cycle with recuperation is given by:
$\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_t - W_c}{Q_{in}}$

This can be approximated as:
$\eta_{th} \approx 1 - \frac{T_{1}}{T_{3}} \left( \frac{T_{2'}-T_1}{T_3-T_{2'}} \right) $ (This is a simplified form; a more rigorous analysis involves the effectiveness of the recuperator).

**The Effectiveness of the Recuperator ($\epsilon$):**
The effectiveness of the recuperator is defined as the ratio of the actual heat transfer to the maximum possible heat transfer.
$\epsilon = \frac{Q_{actual}}{Q_{max}} = \frac{m \cdot c_p (T_{2'} - T_2)}{m \cdot c_p (T_4 - T_2)}$ (assuming $c_p$ is constant and mass flow is the same on both sides)

A higher recuperator effectiveness leads to higher cycle efficiency. The ideal recuperator would preheat the compressed air to the turbine exhaust temperature ($T_{2'} = T_4$), thus reducing the heat to be added in the heat source.

**Impact of Pressure Drop:**
Pressure drops in the pre-heater, turbine, and cooler reduce the net work output and hence the cycle efficiency. The effective pressure ratio for expansion in the turbine is lower than the pressure ratio of the compressor.

**Influence of Working Fluid:**
The choice of working fluid significantly impacts the performance of a closed cycle gas turbine.
*   **Air:** Readily available, but has a relatively high molecular weight, leading to lower specific heat and higher specific volume.
*   **Helium:** Very low molecular weight, high specific heat, low viscosity. Allows for very high turbine inlet temperatures and high efficiencies. Used in nuclear applications.
*   **Hydrogen:** Similar advantages to Helium, but poses significant handling and containment challenges due to its low molecular weight and flammability.
*   **Nitrogen:** Inert, stable, and has properties closer to air.

(Ganesan, 2017 discusses the impact of working fluid properties on cycle efficiency in detail.)

---

### 4. Advanced Closed Cycle Configurations

To further improve efficiency and expand the operational envelope, several advanced closed cycle configurations exist:

#### 4.1. Intercooling and Reheating in Closed Cycles

Just like in open cycle gas turbines, intercooling and reheating can be applied to closed cycles.

*   **Intercooling:** Reduces compressor work by cooling the working fluid between compression stages. This is particularly beneficial at high pressure ratios and when the initial temperature is high.
*   **Reheating:** Increases the work output from the turbine by reheating the working fluid between expansion stages. This allows for higher turbine inlet temperatures.

When combined with recuperation, these configurations lead to more complex but potentially more efficient cycles.

#### 4.2. Combined Cycles in Closed Systems

Closed cycle gas turbines can be integrated with other power generation systems, such as steam turbines, to form combined cycles. For example, waste heat from the cooler of a closed cycle gas turbine could be used to generate steam for a steam turbine.

---

### 5. Applications of Closed Cycle Gas Turbines

Closed cycle gas turbines are employed in applications where their advantages are paramount:

*   **Nuclear Power Plants:** The inert working fluid (e.g., Helium, Nitrogen) is ideal for use with nuclear reactors as the heat source. The absence of combustion products and the ability to use inert gases prevents contamination of the nuclear fuel and reactor core. (Yahya, 2011)
*   **Solar Power Plants:** Concentrated solar power systems can provide a clean and reliable heat source for closed cycle gas turbines, especially using high-temperature fluids.
*   **Waste Heat Recovery:** They can be used to recover waste heat from industrial processes, other power plants, or geothermal sources.
*   **Specialized Applications:** Due to their quiet operation and high efficiency potential, they have been used in some specialized applications like submarines and land vehicles where fuel flexibility and reduced exhaust are critical.

---

### 6. Learning Outcome Alignment

This topic addresses the following learning outcomes:

*   **CO1: To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles.** (K3)
    *   The study of ideal and practical closed cycles, including the Brayton cycle and the impact of heat exchangers and pressure drops, directly relates to thermodynamic principles. Fluid dynamics principles are implicitly involved in understanding flow through components and pressure losses.
*   **CO3: To analyse the performance of gas turbine systems by understanding the characteristics of various components.** (K4)
    *   This topic focuses on the components specific to closed cycle systems (pre-heater, cooler, external heat source) and how their characteristics (effectiveness, pressure drops) influence the overall system performance.

---

### 7. Key Points to Remember

*   **Recirculation of Working Fluid:** The defining characteristic of closed cycle gas turbines.
*   **External Heat Source:** Combustion or other heat sources are separate from the working fluid loop.
*   **Fuel Flexibility:** Can use a wide array of heat sources.
*   **Recuperator (Pre-heater):** Crucial for improving efficiency by preheating the compressed working fluid.
*   **Cooler:** Essential for rejecting heat to the environment.
*   **Working Fluid Choice:** Impacts performance significantly (e.g., Helium for nuclear, air for simpler systems).
*   **Pressure Drops:** A major source of inefficiency in practical closed cycles due to heat exchangers and component pressure losses.
*   **Efficiency Potential:** Higher than simple open cycles due to recuperation and ability to use higher working fluid temperatures, especially with optimized working fluids.

---

### 8. Practice Questions and Exercises

**Question 1:**
Describe the fundamental difference between an open cycle and a closed cycle gas turbine. What are the primary advantages of a closed cycle system?

**Answer:**
The fundamental difference lies in the working fluid. In an **open cycle** system, air is drawn from the atmosphere, used as the working fluid, and then exhausted. In a **closed cycle** system, the same working fluid is continuously recirculated within the system.

**Primary advantages of a closed cycle system:**
*   **Fuel Flexibility:** Can utilize various heat sources (nuclear, solar, waste heat) as combustion is external.
*   **Clean Operation:** No direct emission of combustion products to the atmosphere.
*   **Working Fluid Optimization:** Choice of working fluid can optimize thermodynamic properties.
*   **Higher Efficiency Potential:** Especially with recuperation and advanced configurations.

**Question 2:**
A closed cycle gas turbine operates with air ($\gamma = 1.4$, $c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$). The air enters the compressor at 300 K and 1 bar. The pressure ratio is 5:1. The maximum temperature in the cycle is 800 K. The compressor and turbine are isentropic.
Calculate:
a) The net work output per kg of air.
b) The thermal efficiency of the ideal cycle.

**Solution:**
*   Given: $T_1 = 300 \, \text{K}$, $P_1 = 1 \, \text{bar}$, $r_p = 5$, $T_3 = 800 \, \text{K}$, $\gamma = 1.4$, $c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$.

*   **Compressor Outlet Temperature ($T_2$):**
    For isentropic compression: $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma}$
    $T_2 = T_1 \cdot r_p^{(\gamma-1)/\gamma} = 300 \cdot 5^{(1.4-1)/1.4} = 300 \cdot 5^{0.2857} = 300 \cdot 1.525 = 457.5 \, \text{K}$

*   **Turbine Outlet Temperature ($T_4$):**
    For isentropic expansion: $T_3/T_4 = (P_3/P_4)^{(\gamma-1)/\gamma}$
    Assuming ideal cycle where $P_3=P_2$ and $P_4=P_1$, so $P_3/P_4 = r_p$.
    $T_4 = T_3 / r_p^{(\gamma-1)/\gamma} = 800 / 5^{0.2857} = 800 / 1.525 = 524.6 \, \text{K}$

*   **a) Net work output per kg of air:**
    Compressor work: $W_c = c_p (T_2 - T_1) = 1.005 \cdot (457.5 - 300) = 1.005 \cdot 157.5 = 158.3 \, \text{kJ/kg}$
    Turbine work: $W_t = c_p (T_3 - T_4) = 1.005 \cdot (800 - 524.6) = 1.005 \cdot 275.4 = 276.8 \, \text{kJ/kg}$
    Net work output: $W_{net} = W_t - W_c = 276.8 - 158.3 = 118.5 \, \text{kJ/kg}$

*   **b) Thermal efficiency of the ideal cycle:**
    Heat input: $Q_{in} = c_p (T_3 - T_2) = 1.005 \cdot (800 - 457.5) = 1.005 \cdot 342.5 = 344.2 \, \text{kJ/kg}$
    Thermal efficiency: $\eta_{th} = W_{net} / Q_{in} = 118.5 / 344.2 = 0.344$ or 34.4%

    Alternatively, using the formula:
    $\eta_{th} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}} = 1 - \frac{1}{1.525} = 1 - 0.6557 = 0.3443$ or 34.43%

**Question 3:**
Discuss the role of the recuperator in a closed cycle gas turbine and its impact on efficiency. What are the limitations imposed by pressure drops in the recuperator and other components?

**Answer:**
The recuperator (pre-heater) transfers heat from the hot turbine exhaust gases to the compressed working fluid before it enters the main heat source. This preheating reduces the amount of heat that needs to be supplied externally in the combustor, thereby increasing the net work output for a given heat input and improving the overall thermal efficiency of the cycle.

**Impact of Pressure Drops:**
Pressure drops in the recuperator, as well as in the turbine inlet/outlet passages and the cooler, cause the actual expansion ratio in the turbine to be less than the compression ratio in the compressor. This leads to:
*   **Reduced Turbine Work Output:** The pressure difference available for expansion is lower.
*   **Reduced Net Work Output:** $W_{net} = W_t - W_c$ decreases.
*   **Lower Thermal Efficiency:** As the net work output is reduced, the thermal efficiency suffers.
*   **Increased Working Fluid Temperature:** Pressure drops in the cooler mean the fluid entering the compressor is at a higher temperature than if there were no losses, increasing compressor work.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References

*   **Ganesan, V.** (2017). *Gas Turbines* (3rd ed.). McGraw Hill Education.
*   **Yahya, S. M.** (2011). *Turbines, Compressors and Fans* (4th ed.). McGraw Hill.
*   **Mathur, M. L.** (2010). *Gas Turbine & Jet Rocket Propulsion* (1st ed.). Standard Publishers Distributors.
*   **Rolls Royce.** (2015). *The Jet Engine* (1st ed.). Wiley.
*   **Cohen, H.** (2019). *Gas Turbine Theory* (7th ed.). Pearson Education.

---