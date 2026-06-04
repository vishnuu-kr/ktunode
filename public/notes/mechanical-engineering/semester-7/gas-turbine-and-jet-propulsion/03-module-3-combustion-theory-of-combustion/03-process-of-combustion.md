---
title: "process of combustion"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb2"
status: "completed"
scrapedAt: "2026-05-20T18:14:00.778Z"
---
# GAS TURBINE AND JET PROPULSION: Module 3: Combustion – Theory of Combustion

## Topic: Process of Combustion

This module delves into the fundamental principles governing the process of combustion, a critical component in gas turbine engines and jet propulsion systems. Understanding combustion is essential for optimizing performance, efficiency, and emission control.

### Learning Outcomes Covered:

*   **LO1: To explain the chemical and physical processes involved in combustion.** (Relates to CO1, CO3)
*   **LO2: To define and differentiate between various types of combustion reactions.** (Relates to CO1, CO3)
*   **LO3: To describe the factors influencing the rate and completeness of combustion.** (Relates to CO1, CO3)
*   **LO4: To explain the concepts of flame propagation and flame stabilization.** (Relates to CO1, CO3)
*   **LO5: To identify and describe the major products of combustion and their impact on engine performance and emissions.** (Relates to CO1, CO3)

---

### 1. Introduction to Combustion

Combustion, in the context of gas turbines and jet propulsion, is a rapid chemical process that involves the oxidation of a fuel, releasing significant amounts of thermal energy. This energy release drives the turbine and generates thrust.

*   **Definition:** Combustion is a high-temperature exothermic redox chemical reaction between a fuel and an oxidant, usually atmospheric oxygen, that produces oxidized, often gaseous, products, in a mixture called smoke.
*   **Key Components:**
    *   **Fuel:** The substance that is oxidized. In gas turbines and jet engines, common fuels include kerosene, diesel, natural gas, and specialized jet fuels.
    *   **Oxidant:** Typically atmospheric oxygen.
    *   **Energy Release:** The primary output of combustion is heat (thermal energy).

**Key Concept (Ganesan, Chapter 7):** Combustion is the core energy conversion process in a gas turbine. The efficiency of this process directly impacts the overall engine performance.

---

### 2. Chemical Fundamentals of Combustion

Combustion is governed by chemical kinetics and thermodynamics.

#### 2.1. Chemical Reactions

*   **Stoichiometric Combustion:** The ideal scenario where the fuel is completely burned with exactly the required amount of oxygen, producing only carbon dioxide ($\text{CO}_2$) and water ($\text{H}_2\text{O}$) as products, assuming a pure hydrocarbon fuel.
    *   **Equation Example (Methane, $\text{CH}_4$):**
        $\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O}$
    *   **Stoichiometric Air-Fuel Ratio (AFR):** The ratio of air to fuel by mass for stoichiometric combustion. This is a crucial parameter for engine design and operation.
        *   *Calculation:* For a hydrocarbon fuel $\text{C}_x\text{H}_y$, the stoichiometric AFR can be calculated based on the molar masses of oxygen, carbon, hydrogen, and nitrogen (which constitutes about 76.7% of air by mass).
        *   *Example (Kerosene $\text{C}_{12}\text{H}_{23}$):* Stoichiometric AFR is approximately 15:1.
*   **Rich Combustion:** Occurs when there is insufficient oxygen for complete combustion of the fuel. This results in the formation of carbon monoxide ($\text{CO}$), unburnt hydrocarbons (UHC), and soot (carbon particles) in addition to $\text{CO}_2$ and $\text{H}_2\text{O}$.
    *   *Consequences:* Reduced thermal efficiency, increased $\text{CO}$ and soot emissions.
*   **Lean Combustion:** Occurs when there is an excess of oxygen relative to the fuel. This leads to more complete combustion, but the excess air absorbs heat, reducing the adiabatic flame temperature.
    *   *Consequences:* Lower flame temperatures can reduce $\text{NO}_x$ formation, but incomplete combustion at very lean conditions can lead to $\text{CO}$ and UHC.

**Key Concept (Yahya, Chapter 8):** The air-fuel ratio significantly influences combustion temperature, completeness, and the formation of pollutants.

#### 2.2. Thermodynamics of Combustion

*   **Heat of Combustion:** The amount of heat released per unit mass or mole of fuel during complete combustion.
    *   **Higher Heating Value (HHV):** Assumes water produced is in liquid form.
    *   **Lower Heating Value (LHV):** Assumes water produced is in gaseous form. LHV is more relevant for high-temperature applications like gas turbines where water remains vaporized.
*   **Adiabatic Flame Temperature:** The theoretical maximum temperature reached during combustion if no heat is lost to the surroundings and all the released energy is used to heat the combustion products. This is a key parameter for turbine inlet temperature.
    *   **Factors Affecting Adiabatic Flame Temperature:**
        *   Fuel heating value
        *   Stoichiometry (AFR)
        *   Initial temperature of reactants
        *   Specific heat capacities of products (which are temperature-dependent)
    *   **Equation (Simplified, for ideal gas):** $Q = m \cdot c_p \cdot \Delta T$
        Where $Q$ is the heat released, $m$ is the mass of products, $c_p$ is the average specific heat capacity, and $\Delta T$ is the temperature rise.

**Important Point to Remember (Mathur, Chapter 6):** The adiabatic flame temperature is a theoretical upper limit. Actual flame temperatures are lower due to heat losses, incomplete combustion, and dissociation of molecules at very high temperatures.

---

### 3. Physical Processes of Combustion

Beyond the chemical reactions, physical processes play a crucial role in making combustion efficient and stable.

#### 3.1. Fuel Atomization and Vaporization

*   **Liquid Fuels:** For liquid fuels (like kerosene in jet engines), efficient combustion requires the fuel to be atomized into fine droplets and then vaporized.
    *   **Atomization:** Breaking down a liquid into small droplets. This is typically achieved by fuel injectors using various techniques like pressure atomization, airblast atomization, or ultrasonic atomization.
    *   **Vaporization:** The process of converting liquid fuel into a gaseous state. This requires heat transfer from the surrounding hot gases.
*   **Gaseous Fuels:** Gaseous fuels (like natural gas in some industrial gas turbines) are easier to mix with air and vaporize, simplifying combustion.

**Key Concept (Rolls Royce, Chapter 3):** Effective atomization and vaporization are critical for achieving rapid and complete mixing of fuel and air, leading to efficient combustion.

#### 3.2. Mixing of Fuel and Air

*   **Homogeneous Combustion:** Fuel and air are thoroughly mixed before ignition. This leads to faster and more complete combustion. This is the goal in many gas turbine combustors.
*   **Heterogeneous Combustion:** Fuel and air are not uniformly mixed. Combustion occurs at the interface between fuel and air. This is common in diffusion flames.

**Example (Yahya, Chapter 8):** In a diffusion flame, the flame front moves with the mixing rate of fuel and air. In a premixed flame, the flame front propagates at the flame speed, which depends on the mixture properties.

#### 3.3. Ignition

*   **Ignition Source:** A spark plug, glow plug, or hot surface is needed to initiate combustion.
*   **Ignition Delay Period:** The time between the introduction of the fuel-air mixture into the hot environment and the onset of self-sustaining combustion. This depends on fuel properties, temperature, pressure, and mixture composition.

---

### 4. Flame Propagation and Stabilization

Once ignition occurs, the flame must propagate through the mixture and remain stable within the combustor.

#### 4.1. Flame Propagation

*   **Flame Speed:** The speed at which the flame front moves through a combustible mixture. It is a fundamental property of the mixture and depends on chemical kinetics and transport processes (diffusion of heat and species).
*   **Mechanism:** Flame propagation is driven by the diffusion of heat and reactive species from the reaction zone to the unburnt mixture, which preheats and mixes it to its autoignition temperature.

#### 4.2. Flame Stabilization

*   **Importance:** In a continuous flow system like a gas turbine, the flame must be stabilized so it doesn't blow out or propagate upstream.
*   **Methods:**
    *   **Recirculation Zones:** Creating regions of slow-moving or recirculating gases within the combustor. These zones provide a hot, well-mixed environment that can reignite the incoming fresh fuel-air mixture, keeping the flame anchored. This is often achieved using bluff bodies or swirl vanes.
    *   **Swirl:** Imparting a swirling motion to the incoming air and fuel. This promotes mixing and creates a central recirculation zone.
    *   **Stabilizing Devices:** Flame holders, bluff bodies, and swirlers are common in jet engine and gas turbine combustors to ensure flame stability across a wide range of operating conditions.

**Key Concept (Cohen, Chapter 9):** Flame stabilization is a critical design aspect of gas turbine combustors. Without it, the flame would extinguish or move away from the injector.

---

### 5. Products of Combustion and Emissions

The products of combustion have significant implications for engine performance and environmental impact.

#### 5.1. Major Combustion Products

*   **Ideal Products (Stoichiometric Combustion):** $\text{CO}_2$, $\text{H}_2\text{O}$
*   **Actual Products (Non-Ideal Combustion):**
    *   **Carbon Monoxide ($\text{CO}$):** Indicates incomplete combustion.
    *   **Unburnt Hydrocarbons (UHC):** Unreacted fuel.
    *   **Soot ($\text{C}$):** Formed from incomplete combustion, especially in fuel-rich zones.
    *   **Oxides of Nitrogen ($\text{NO}_x$):** Primarily $\text{NO}$ and $\text{NO}_2$. Formed at high temperatures through complex chemical pathways (thermal $\text{NO}_x$, prompt $\text{NO}_x$, fuel $\text{NO}_x$).
    *   **Oxides of Sulfur ($\text{SO}_x$):** Formed if sulfur is present in the fuel.
    *   **Particulate Matter (PM):** Includes soot and other solid particles.

#### 5.2. Impact on Engine Performance and Emissions

*   **Temperature Reduction:** The presence of excess air (lean operation) or incomplete combustion products ($\text{CO}$, $\text{H}_2\text{O}$ as diluents) lowers the adiabatic flame temperature. This can be beneficial for reducing $\text{NO}_x$ formation but can also reduce turbine inlet temperature and overall efficiency if not managed carefully.
*   **Emissions Control:** $\text{NO}_x$, $\text{CO}$, UHC, and soot are regulated pollutants. Engine design focuses on minimizing their formation.
    *   **Lean Premixed Prevaporized (LPP) Combustion:** A strategy to reduce $\text{NO}_x$ by premixing fuel and air and operating in a lean condition, leading to lower flame temperatures. However, careful control is needed to avoid lean blow-out and $\text{CO}$/UHC formation.
    *   **Rich Lean Combustion:** Burning fuel in a rich primary zone followed by a lean secondary zone for complete combustion.

**Key Concept (Ganesan, Chapter 7):** Modern gas turbine combustor design aims to achieve complete combustion with minimal emissions while maintaining high thermal efficiency and stable operation.

---

### 6. Practice Questions and Answers

**Question 1:** Define stoichiometric combustion and provide the balanced chemical equation for the complete combustion of octane ($\text{C}_8\text{H}_{18}$).
**(LO1, LO2)**

**Answer 1:**
Stoichiometric combustion is the ideal combustion process where a fuel reacts with the exact amount of oxygen required for complete conversion into carbon dioxide and water.
For octane ($\text{C}_8\text{H}_{18}$):
The reaction is: $\text{C}_8\text{H}_{18} + \text{O}_2 \rightarrow \text{CO}_2 + \text{H}_2\text{O}$
Balancing for Carbon: $\text{C}_8\text{H}_{18} + \text{O}_2 \rightarrow 8\text{CO}_2 + \text{H}_2\text{O}$
Balancing for Hydrogen: $\text{C}_8\text{H}_{18} + \text{O}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O}$
Balancing for Oxygen: The oxygen on the right is $(8 \times 2) + (9 \times 1) = 16 + 9 = 25$ atoms.
Since oxygen exists as $\text{O}_2$, we need $25/2 = 12.5$ molecules of $\text{O}_2$.
The balanced equation is:
$\text{C}_8\text{H}_{18} + 12.5\text{O}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O}$

**Question 2:** What is adiabatic flame temperature, and what are the primary factors that influence it?
**(LO1)**

**Answer 2:**
Adiabatic flame temperature is the theoretical maximum temperature achieved during combustion if all the heat released by the reaction is used to raise the temperature of the combustion products, with no heat loss to the surroundings.
The primary factors influencing adiabatic flame temperature are:
*   **Fuel Heating Value:** Higher heating values result in higher temperatures.
*   **Stoichiometry (Air-Fuel Ratio):** The temperature is highest at slightly lean conditions, as very rich mixtures lead to incomplete combustion and excess air (lean mixtures) acts as a diluent, absorbing heat.
*   **Initial Temperature of Reactants:** Higher initial temperatures of fuel and air increase the final temperature.
*   **Specific Heat Capacities of Products:** The specific heat capacities of the combustion products, which increase with temperature, absorb some of the released energy, lowering the final temperature compared to an ideal gas with constant specific heats.

**Question 3:** Describe two common methods used to stabilize a flame in a gas turbine combustor.
**(LO4)**

**Answer 3:**
Two common methods for flame stabilization are:
1.  **Recirculation Zones:** Using bluff bodies or V-gutters placed in the airflow. These devices create zones behind them where the flow velocity is low and recirculates. This hot, well-mixed recirculating gas mixes with the incoming fresh fuel-air mixture, preheating and igniting it, thus anchoring the flame.
2.  **Swirl:** Imparting a swirling motion to the incoming air and fuel. This swirl creates a central recirculation zone due to the centrifugal forces pushing the flow outwards, and a low-pressure core at the center, which promotes mixing and flame anchoring.

**Question 4:** What are the main sources of $\text{NO}_x$ formation in gas turbine engines, and how can they be mitigated?
**(LO5)**

**Answer 4:**
The main sources of $\text{NO}_x$ formation are:
*   **Thermal $\text{NO}_x$:** Formed by the high-temperature reaction between nitrogen and oxygen in the air. This is the dominant mechanism at high combustion temperatures.
*   **Prompt $\text{NO}_x$ (Zeldovich mechanism):** Formed in the early stages of combustion from intermediate hydrocarbon radicals reacting with nitrogen.
*   **Fuel $\text{NO}_x$:** Formed if the fuel contains nitrogen compounds that are oxidized during combustion.

Mitigation strategies include:
*   **Lowering Flame Temperature:** Operating in lean-burn conditions, using exhaust gas recirculation (EGR), or employing staged combustion (e.g., rich-lean) can reduce peak flame temperatures, thereby suppressing thermal $\text{NO}_x$.
*   **Reducing Residence Time at High Temperatures:** Optimizing combustor design to minimize the time the combustion products spend at peak temperatures.
*   **Controlling Fuel-Air Mixing:** Lean premixed prevaporized (LPP) combustion aims to achieve uniform, lean mixtures, leading to lower and more uniform flame temperatures, thus reducing $\text{NO}_x$.

---

### 7. Important Points to Remember

*   Combustion is the heart of the gas turbine cycle, converting chemical energy into thermal energy.
*   The air-fuel ratio is a critical parameter governing combustion completeness, temperature, and emissions.
*   Adiabatic flame temperature is a theoretical maximum; real-world temperatures are lower due to heat losses and dissociation.
*   Efficient atomization and vaporization of liquid fuels are essential for rapid and complete combustion.
*   Flame stabilization is crucial for continuous operation in gas turbine engines and is achieved through methods like recirculation zones and swirl.
*   $\text{NO}_x$ formation is highly dependent on temperature; lowering combustion temperatures is key to reducing $\text{NO}_x$ emissions.
*   Modern gas turbine combustor design focuses on balancing efficiency, stability, and minimal emissions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References

*   Ganesan, V. (2017). *Gas Turbines* (3rd ed.). McGraw Hill Education. (Chapter 7: Combustion)
*   Yahya, S. M. (2011). *Turbines, Compressors and Fans* (4th ed.). McGraw Hill. (Chapter 8: Combustion Chambers)
*   Mathur, M. L. (2010). *Gas Turbine & Jet Rocket Propulsion* (1st ed.). Standard Publishers Distributors. (Chapter 6: Combustion)
*   Rolls Royce. (2015). *The Jet Engine* (1st ed.). Wiley. (Chapter 3: Combustion)
*   Cohen, H., Rogers, G. F. C., & Saravanamuttoo, H. I. H. (2019). *Gas Turbine Theory* (7th ed.). Pearson Education. (Chapter 9: Combustion Chambers)

---

This detailed study note covers the process of combustion as it applies to gas turbines and jet propulsion, addressing the learning outcomes and aligning with the course objectives. The inclusion of chemical and physical aspects, flame behavior, and emission considerations provides a comprehensive understanding.