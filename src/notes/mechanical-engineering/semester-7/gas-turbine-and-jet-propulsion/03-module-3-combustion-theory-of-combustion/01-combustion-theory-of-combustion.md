---
title: "Combustion – Theory of Combustion"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb0"
status: "completed"
scrapedAt: "2026-05-20T18:13:59.330Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 3: Combustion – Theory of Combustion

### Topic: Combustion – Theory of Combustion

---

### 1. Introduction to Combustion

**1.1 What is Combustion?**

Combustion is a rapid chemical process that involves the reaction between a substance with an oxidant, usually oxygen, to produce heat and light. In the context of gas turbines, it refers to the controlled burning of a fuel-air mixture to generate high-temperature, high-pressure gases that drive the turbine.

**Key Concepts:**

*   **Exothermic Reaction:** A reaction that releases energy in the form of heat and light.
*   **Oxidant:** Typically oxygen from the air.
*   **Fuel:** Can be liquid (kerosene, diesel), gaseous (natural gas, hydrogen), or solid (coal, in some industrial applications).
*   **Products of Combustion:** Primarily carbon dioxide ($\text{CO}_2$), water ($\text{H}_2\text{O}$), and often other species like carbon monoxide ($\text{CO}$), unburnt hydrocarbons, nitrogen oxides ($\text{NO}_x$), sulfur oxides ($\text{SO}_x$), and soot, depending on the fuel and combustion conditions.

**1.2 Importance of Combustion in Gas Turbines**

The primary function of the combustion chamber (combustor) in a gas turbine is to efficiently convert the chemical energy of the fuel into thermal energy of the working fluid (air). This thermal energy then expands through the turbine, producing mechanical work.

**Key Concepts:**

*   **Thermal Energy:** The energy associated with the temperature of a substance.
*   **Mechanical Work:** The output of the turbine.
*   **Efficiency:** The effectiveness of the combustion process in converting fuel energy to useful thermal energy.

**References:**

*   **Ganesan (2017):** Chapter 6, "Combustion Chambers."
*   **Yahya (2011):** Chapter 6, "Combustion Chambers."
*   **Mathur & Mathur (2010):** Chapter 3, "Combustion Chambers."

---

### 2. Fundamental Principles of Combustion

**2.1 Chemical Reactions**

Combustion is governed by stoichiometry, which deals with the quantitative relationships between reactants and products in a chemical reaction.

**Key Concepts:**

*   **Stoichiometric Ratio (Equivalence Ratio):** The ratio of the actual fuel-air ratio to the stoichiometric fuel-air ratio.
    *   **Equivalence Ratio ($\phi$) = (Actual Fuel-Air Ratio) / (Stoichiometric Fuel-Air Ratio)**
    *   $\phi = 1$: Stoichiometric combustion (ideal complete combustion).
    *   $\phi < 1$: Lean mixture (excess air).
    *   $\phi > 1$: Rich mixture (excess fuel).
*   **Complete Combustion:** Occurs when there is sufficient oxygen to convert all combustible elements into their highest oxidation states (e.g., carbon to $\text{CO}_2$ and hydrogen to $\text{H}_2\text{O}$).
*   **Incomplete Combustion:** Occurs when oxygen is insufficient, leading to the formation of $\text{CO}$, unburnt hydrocarbons, soot, etc.
*   **Enthalpy of Combustion ($\Delta H_c$):** The heat released or absorbed during a chemical reaction. For combustion, it's typically negative, indicating heat release.

**2.2 Combustion Stoichiometry - Examples**

*   **Combustion of Methane ($\text{CH}_4$) with Oxygen ($\text{O}_2$):**
    $\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O}$
    *   Molar masses: $\text{CH}_4$ (16), $\text{O}_2$ (32), $\text{CO}_2$ (44), $\text{H}_2\text{O}$ (18).
    *   Stoichiometric mass of air required per unit mass of fuel:
        *   Molecular weight of air $\approx 28.97$ kg/kmol (assuming $21\%$ $\text{O}_2$ and $79\%$ $\text{N}_2$ by volume).
        *   Mass of $\text{O}_2$ per kmol of $\text{CH}_4$ = $2 \times 32 = 64$ kg.
        *   Mass of air per kmol of $\text{CH}_4$ = $(64 / 0.21) \approx 304.76$ kg.
        *   Stoichiometric fuel-air ratio (mass basis) = $16 / 304.76 \approx 0.0525$.

*   **Combustion of a Hydrocarbon Fuel ($\text{C}_x\text{H}_y$):**
    $\text{C}_x\text{H}_y + (x + y/4)\text{O}_2 \rightarrow x\text{CO}_2 + (y/2)\text{H}_2\text{O}$
    *   To account for real air ( $21\%$ $\text{O}_2$, $79\%$ $\text{N}_2$ by volume):
        $\text{C}_x\text{H}_y + (x + y/4) (\text{O}_2 + 3.76\text{N}_2) \rightarrow x\text{CO}_2 + (y/2)\text{H}_2\text{O} + (x + y/4) 3.76\text{N}_2$

**2.3 Thermodynamics of Combustion**

**Key Concepts:**

*   **Adiabatic Flame Temperature ($T_{ad}$):** The maximum theoretical temperature achieved during combustion if no heat is lost to the surroundings and no work is done. It is calculated by equating the enthalpy of the reactants at the initial temperature to the enthalpy of the products at the final temperature.
    *   $H_{\text{reactants}}(T_{initial}) = H_{\text{products}}(T_{ad})$
    *   Factors influencing $T_{ad}$: fuel type, fuel-air ratio, initial temperature, pressure, presence of inert gases.
*   **Heat Release Rate:** The rate at which chemical energy is converted into thermal energy.
*   **Calorific Value (CV):** The amount of heat released per unit mass or volume of fuel upon complete combustion.
    *   **Higher Calorific Value (HCV):** Assumes water produced is in liquid form.
    *   **Lower Calorific Value (LCV):** Assumes water produced is in vapor form (more practical for gas turbines as exhaust is gaseous).
*   **Enthalpy of Formation ($\Delta H_f^0$):** The enthalpy change when one mole of a compound is formed from its elements in their standard states.

**Calculation of Adiabatic Flame Temperature (Simplified Approach):**

Assuming ideal gases and constant specific heats:

$\sum_{i} (\dot{n}_i \cdot c_{p,i} \cdot T_{initial})_{\text{reactants}} + Q_{\text{reaction}} = \sum_{j} (\dot{n}_j \cdot c_{p,j} \cdot T_{ad})_{\text{products}}$

Where:
*   $\dot{n}_i$ is the molar flow rate of reactant $i$.
*   $c_{p,i}$ is the specific heat at constant pressure of reactant $i$.
*   $Q_{\text{reaction}}$ is the heat released by combustion. This can be calculated using enthalpies of formation and combustion.

**Example:** For methane combustion with air:

$H_{\text{CH}_4}(T_{initial}) + H_{2\text{O}_2}(T_{initial}) + 7.52\text{H}_{2\text{N}_2}(T_{initial}) + Q_{\text{reaction}} = H_{\text{CO}_2}(T_{ad}) + 2\text{H}_2\text{O}(T_{ad}) + 7.52\text{H}_{2\text{N}_2}(T_{ad})$

(Note: Actual calculations involve precise thermochemical data and are often performed numerically.)

**References:**

*   **Cohen, Hass, & Rogers (2019):** Chapter 5, "Thermodynamics of Combustion."
*   **Ganesan (2017):** Chapter 6, "Combustion Chambers."
*   **Yahya (2011):** Chapter 6, "Combustion Chambers."

---

### 3. Combustion Process in Gas Turbines

**3.1 Role of the Combustor**

The combustor is a key component where fuel is injected, mixed with compressed air, and burned to produce a high-temperature gas stream for the turbine.

**3.2 Requirements of a Gas Turbine Combustor**

*   **High Combustion Efficiency:** To maximize energy release from the fuel.
*   **Stable Combustion:** To prevent flameouts and rough running across a wide range of operating conditions.
*   **Low Pressure Drop:** To minimize loss of compressor work.
*   **Uniform Temperature Distribution (Outlet):** To avoid hot spots on turbine blades, which can lead to premature failure.
*   **Low Emissions:** To comply with environmental regulations.
*   **Durability and Reliability:** To withstand high temperatures and cyclic operation.

**3.3 Types of Combustors**

The design of the combustor is critical for achieving efficient and stable combustion.

*   **Can Type (Tubular):**
    *   Consists of individual combustion cans surrounding the engine axis.
    *   Each can has its own fuel injector and igniter.
    *   Advantages: Easier maintenance and replacement of individual cans.
    *   Disadvantages: Can be bulky, potential for uneven heat distribution.
    *   **References:** Ganesan (2017), Yahya (2011).

*   **Annular Type:**
    *   A single annular combustion chamber surrounding the engine axis.
    *   Fuel injectors are distributed along the annulus.
    *   Advantages: Compact, lighter, better temperature distribution.
    *   Disadvantages: More complex manufacturing, maintenance can be more challenging.
    *   **References:** Ganesan (2017), Yahya (2011), Mathur & Mathur (2010).

*   **Can-Annular Type:**
    *   A compromise between can and annular types.
    *   Multiple individual combustion chambers housed within a single casing.
    *   Advantages: Combines some benefits of both types, good reliability.
    *   **References:** Ganesan (2017), Yahya (2011).

**3.4 Zones within a Combustor (Common for Annular/Can-Annular)**

The combustor is typically divided into different zones to manage the combustion process:

*   **Primary Zone:**
    *   Where most of the fuel and a portion of the air are mixed and combustion initiates.
    *   Operates with a fuel-rich mixture ($\phi > 1$) to ensure stable combustion and minimize $\text{NO}_x$ formation at high temperatures.
    *   Key for flame stabilization.
    *   **References:** Ganesan (2017), Yahya (2011).

*   **Intermediate Zone (Dilution Zone):**
    *   Additional air is introduced to complete the combustion process and dilute the hot combustion gases.
    *   Reduces the overall temperature to a level suitable for the turbine inlet.
    *   Aims for uniform temperature distribution.
    *   **References:** Ganesan (2017), Yahya (2011).

*   **Secondary Zone (Swirler):**
    *   Often a swirler is used at the inlet of the primary zone to promote mixing of fuel and air.

**3.5 Combustion Instabilities**

*   **Definition:** Oscillations in pressure and heat release rate that can lead to excessive noise, vibration, and damage to the engine components.
*   **Causes:**
    *   **Acoustic Resonances:** Interaction between flame dynamics and the acoustic modes of the combustor.
    *   **Feedback Mechanisms:** Fluctuations in fuel flow, air flow, or flame structure trigger subsequent fluctuations.
*   **Types:**
    *   **Longitudinal Oscillations:** Along the length of the combustor.
    *   **Tangential Oscillations:** Around the circumference.
*   **Mitigation:** Careful design of the combustor geometry, fuel injection system, and air flow passages.
*   **References:** Cohen, Hass, & Rogers (2019), Ganesan (2017).

---

### 4. Combustion Efficiency and Performance Parameters

**4.1 Combustion Efficiency ($\eta_b$)**

*   **Definition:** The ratio of the actual heat released by the fuel to the total heat available in the fuel.
    *   $\eta_b = \frac{\text{Actual heat released}}{\text{Theoretical maximum heat release}} = \frac{\dot{m}_a (h_{out} - h_{in}) - \dot{m}_f \cdot LCV}{\dot{m}_f \cdot LCV}$
    *   Where:
        *   $\dot{m}_a$ = mass flow rate of air
        *   $\dot{m}_f$ = mass flow rate of fuel
        *   $h_{out}$ = enthalpy of the gas mixture leaving the combustor
        *   $h_{in}$ = enthalpy of the air entering the combustor
        *   LCV = Lower Calorific Value of the fuel

*   **Factors Affecting $\eta_b$:**
    *   **Combustor Design:** Mixing efficiency, residence time.
    *   **Operating Conditions:** Air flow rate, fuel-air ratio, pressure.
    *   **Fuel Properties:** Volatility, atomization.
    *   **Incomplete Combustion:** Formation of $\text{CO}$, unburnt hydrocarbons, soot.

**4.2 Pressure Drop ($\Delta P_b$)**

*   **Definition:** The reduction in static pressure of the air as it passes through the combustor.
*   **Causes:** Friction, flow separation, turbulence.
*   **Impact:** Reduces the overall efficiency of the gas turbine cycle (thermodynamically equivalent to a loss in compressor work).
*   **Design Considerations:** Minimize turbulence, optimize flow paths.
*   **References:** Ganesan (2017), Yahya (2011).

**4.3 Pattern Factor (PF)**

*   **Definition:** A measure of the uniformity of the temperature distribution at the combustor exit plane.
    *   $PF = \frac{T_{max} - T_{avg}}{T_{avg} - T_{in}}$
    *   Where:
        *   $T_{max}$ = maximum temperature at the exit plane
        *   $T_{avg}$ = average temperature at the exit plane
        *   $T_{in}$ = inlet air temperature

*   **Importance:** A low pattern factor is crucial for preventing hot spots on turbine blades and ensuring turbine longevity.
*   **References:** Ganesan (2017), Yahya (2011).

**4.4 Specific Fuel Consumption (SFC)**

*   **Definition:** The rate of fuel consumption per unit of power output.
*   While not solely a combustion parameter, it is directly influenced by the efficiency of the combustion process. Lower combustion efficiency leads to higher SFC.

---

### 5. Emissions from Combustion

**5.1 Types of Emissions**

*   **Carbon Dioxide ($\text{CO}_2$):** A greenhouse gas, directly related to the carbon content of the fuel.
*   **Water Vapor ($\text{H}_2\text{O}$):** A natural component of combustion products, not considered a pollutant in this context.
*   **Carbon Monoxide ($\text{CO}$):** Product of incomplete combustion. Indicates poor combustion efficiency.
*   **Unburnt Hydrocarbons (UHC):** Fuel that has not been burned. Also indicates poor combustion.
*   **Nitrogen Oxides ($\text{NO}_x$):** Formed at high temperatures when nitrogen and oxygen in the air react.
    *   **Thermal $\text{NO}_x$:** Dominant mechanism at high combustion temperatures.
    *   **Prompt $\text{NO}_x$:** Formed by a different mechanism involving hydrocarbon radicals.
    *   **Fuel $\text{NO}_x$:** From nitrogen compounds present in the fuel.
*   **Soot (Particulate Matter):** Carbon particles formed in fuel-rich zones. Affects emissions and can deposit on engine components.
*   **Sulfur Oxides ($\text{SO}_x$):** Formed from sulfur present in the fuel. Contribute to acid rain.

**5.2 Factors Affecting Emissions**

*   **Fuel-Air Ratio (Equivalence Ratio, $\phi$):**
    *   Rich mixtures ($\phi > 1$) tend to produce more $\text{CO}$ and soot.
    *   Lean mixtures ($\phi < 1$) can lead to higher $\text{NO}_x$ if the temperature is high.
*   **Combustion Temperature:** Higher temperatures favor $\text{NO}_x$ formation.
*   **Residence Time:** Longer residence times in high-temperature zones increase $\text{NO}_x$.
*   **Mixing Rates:** Efficient mixing can reduce localized rich zones and soot formation.
*   **Quenching:** Rapid cooling in the dilution zone can freeze intermediate species, affecting final emissions.

**5.3 Strategies for Emission Control**

*   **Lean Premixed Combustion (LPC):** Pre-mixing fuel and air in a lean ratio before combustion. This lowers the peak flame temperature, significantly reducing thermal $\text{NO}_x$. However, it requires careful control to prevent flame instability and combustion blow-out.
*   **Staged Combustion:** Introducing fuel in stages to control the local fuel-air ratio and temperature profile.
*   **Rich Burn - Quick Quench - Lean Burn (RQL) Combustors:** A staged approach designed to minimize $\text{NO}_x$ and soot simultaneously. The primary zone is rich, then gases are rapidly quenched by mixing with excess air to prevent $\text{NO}_x$ formation, and finally, combustion is completed in a lean secondary zone.
*   **Catalytic Combustion:** Using a catalyst to lower the combustion temperature and achieve complete combustion with low emissions.
*   **Water/Steam Injection:** Injecting water or steam into the combustor to lower the flame temperature and reduce $\text{NO}_x$.

**References:**

*   **Cohen, Hass, & Rogers (2019):** Chapter 11, "Emissions and Noise."
*   **Ganesan (2017):** Chapter 6, "Combustion Chambers."
*   **Yahya (2011):** Chapter 6, "Combustion Chambers."
*   **Rolls Royce (2015):** Discusses emissions in relation to engine design and operation.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define stoichiometric fuel-air ratio and explain the significance of equivalence ratio ($\phi$) in gas turbine combustion.

**Answer:**
The stoichiometric fuel-air ratio (F/A)$_{\text{stoich}}$ is the ratio of fuel to air (by mass) required for complete combustion of the fuel. The equivalence ratio ($\phi$) is the ratio of the actual fuel-air ratio to the stoichiometric fuel-air ratio.
*   $\phi = 1$: Stoichiometric (ideal complete combustion).
*   $\phi < 1$: Lean mixture (excess air).
*   $\phi > 1$: Rich mixture (excess fuel).
In gas turbines, the equivalence ratio is critical for managing combustion efficiency, flame stability, and emissions. Lean mixtures ($\phi < 1$) are generally used for low $\text{NO}_x$ emissions, while rich mixtures ($\phi > 1$) can improve flame stability but increase $\text{CO}$ and soot.

---

**Question 2:**
What is adiabatic flame temperature ($T_{ad}$)? List three factors that influence $T_{ad}$.

**Answer:**
Adiabatic flame temperature ($T_{ad}$) is the maximum theoretical temperature that can be achieved during combustion if no heat is lost to the surroundings and no work is done.
Three factors influencing $T_{ad}$ are:
1.  **Fuel-Air Ratio:** $T_{ad}$ typically peaks at slightly lean or stoichiometric conditions.
2.  **Initial Temperature of Reactants:** Higher initial temperatures lead to higher $T_{ad}$.
3.  **Pressure:** While less significant for $T_{ad}$ itself compared to the effect of specific heat, pressure affects the equilibrium composition of products and hence indirectly influences the final temperature.
4.  **Fuel Composition:** Fuels with higher calorific values and lower molecular weights of products tend to produce higher $T_{ad}$.

---

**Question 3:**
Explain the role of the primary zone in a gas turbine combustor. Why is it often operated in a fuel-rich condition?

**Answer:**
The primary zone is where most of the fuel is injected and mixed with a portion of the compressed air to initiate combustion. Its main roles are:
*   **Flame Stabilization:** The design of the primary zone (e.g., using swirlers) creates recirculation zones that trap hot combustion products, re-igniting fresh incoming fuel-air mixture, thus stabilizing the flame.
*   **Initial Heat Release:** A significant portion of the fuel's chemical energy is released here.

It is often operated in a fuel-rich condition ($\phi > 1$) to:
*   **Enhance Flame Stability:** Rich mixtures are generally more stable and easier to ignite and maintain, especially at low engine speeds.
*   **Minimize $\text{NO}_x$ Formation:** While high temperatures promote $\text{NO}_x$, a rich primary zone leads to lower peak temperatures compared to a stoichiometric or lean primary zone, thus suppressing the formation of thermal $\text{NO}_x$.

---

**Question 4:**
Define combustion efficiency and pattern factor. How do these parameters affect gas turbine performance?

**Answer:**
*   **Combustion Efficiency ($\eta_b$):** The ratio of the actual heat released to the theoretical maximum heat available from the fuel. High combustion efficiency means more fuel energy is converted to thermal energy for the turbine. Low efficiency results in higher fuel consumption (higher SFC) and reduced power output.
*   **Pattern Factor (PF):** A measure of the temperature uniformity at the combustor exit. A low pattern factor indicates a more uniform temperature distribution. A high pattern factor (large temperature variations) can lead to localized overheating of turbine blades, reducing their lifespan and potentially causing premature failure.

Both parameters are critical for efficient and reliable operation of the gas turbine.

---

**Question 5:**
Briefly describe the Lean Premixed Combustion (LPC) strategy for emission control. What is its main advantage and potential drawback?

**Answer:**
Lean Premixed Combustion (LPC) involves thoroughly mixing the fuel and air before combustion occurs, with the mixture being significantly lean (excess air).
*   **Advantage:** By reducing the peak flame temperature (due to the excess air acting as a diluent), LPC significantly reduces the formation of thermal $\text{NO}_x$.
*   **Drawback:** Lean mixtures are inherently less stable and can be prone to flame blow-out or instabilities (like combustion oscillations), requiring sophisticated combustor designs and control systems.

---

### 7. Important Points to Remember

*   **Combustion is the core energy conversion process in a gas turbine.**
*   **Stoichiometry and equivalence ratio ($\phi$) are fundamental to understanding fuel-air mixing and combustion completeness.**
*   **Adiabatic Flame Temperature ($T_{ad}$) is the theoretical maximum temperature, influenced by fuel-air ratio, initial temperature, and fuel properties.**
*   **Combustor design is crucial for achieving high efficiency, stability, uniform outlet temperature, and low emissions.**
*   **Key combustor performance parameters are combustion efficiency, pressure drop, and pattern factor.**
*   **Emissions like $\text{NO}_x$, $\text{CO}$, and soot are major concerns, and strategies like LPC and RQL are employed to mitigate them.**
*   **The LCV (Lower Calorific Value) is typically used for gas turbine performance calculations as the water produced is in vapor form.**

---

### 8. Alignment with Course Outcomes

*   **CO1 (Apply principles of thermodynamics and fluid dynamics):** Understanding adiabatic flame temperature, enthalpy changes, and pressure drop in the combustor directly applies thermodynamic and fluid dynamic principles.
*   **CO2 (Analyze performance characteristics of compressors and turbines):** The output of the combustion process (high-temperature, high-pressure gas) is the input to the turbine. The efficiency and temperature distribution from the combustor directly impact turbine performance.
*   **CO3 (Analyze performance of gas turbine systems):** Combustion efficiency, pressure drop, and emissions are critical performance parameters for the overall gas turbine system.
*   **CO4 (Understand principles and characteristics of jet and rocket propulsion systems):** The fundamental combustion process is also at the heart of jet propulsion. Understanding the theory here is a prerequisite for analyzing jet engines.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
