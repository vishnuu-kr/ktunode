---
title: "micro gas turbines – smart energy system"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cbe"
status: "completed"
scrapedAt: "2026-05-20T18:14:09.440Z"
---
## Gas Turbine and Jet Propulsion: Module 3 - Combustion - Theory of Combustion

**Topic: Micro Gas Turbines – Smart Energy System**

**Introduction:**

This module delves into the fundamental principles of combustion, a critical process within gas turbine engines. We will explore the theoretical underpinnings of combustion and then transition to its practical application in micro gas turbines (µGTs) as components of smart energy systems. Understanding combustion is crucial for analyzing the performance and efficiency of gas turbine cycles (CO1), component characteristics (CO3), and ultimately, the propulsion systems they power (CO4).

---

### 1. Fundamentals of Combustion

**1.1 What is Combustion?**

*   **Definition:** Combustion is a rapid chemical process, typically an exothermic reaction, between a substance with an oxidant, usually oxygen, to produce heat and light.
*   **Key Requirements:**
    *   **Fuel:** A combustible substance (e.g., natural gas, diesel, kerosene, hydrogen).
    *   **Oxidant:** Typically atmospheric oxygen.
    *   **Ignition Source:** Sufficient energy to initiate the reaction.
    *   **Chain Reaction:** A self-sustaining process where the products of reaction initiate further reactions.

**1.2 Chemical Kinetics of Combustion**

*   **Reaction Rate:** The speed at which reactants are consumed and products are formed. It depends on factors like temperature, pressure, concentration of reactants, and presence of catalysts.
*   **Arrhenius Equation:** A fundamental equation describing the temperature dependence of reaction rates:
    $k = A \cdot e^{-E_a / (RT)}$
    *   $k$: Rate constant
    *   $A$: Pre-exponential factor (frequency factor)
    *   $E_a$: Activation energy
    *   $R$: Universal gas constant
    *   $T$: Absolute temperature
*   **Reaction Mechanisms:** Complex pathways involving a series of elementary reactions, often involving radical species (highly reactive molecules with unpaired electrons).

**1.3 Thermodynamics of Combustion**

*   **Heat of Combustion (Enthalpy of Combustion):** The amount of heat released per unit mass or mole of fuel when it undergoes complete combustion. It is a crucial thermodynamic property.
    *   **Higher Heating Value (HHV):** Assumes water produced is in liquid form.
    *   **Lower Heating Value (LHV):** Assumes water produced is in gaseous form.
*   **Adiabatic Flame Temperature:** The theoretical maximum temperature reached if all the heat released by combustion is used to raise the temperature of the products, with no heat loss to the surroundings. This is a critical parameter for engine design.
    *   Calculated by balancing energy: Enthalpy of reactants = Enthalpy of products.
    *   Factors affecting adiabatic flame temperature:
        *   Fuel-air ratio
        *   Initial temperature and pressure of reactants
        *   Composition of fuel and air
*   **Equivalence Ratio (Φ):** A measure of how close the fuel-air mixture is to stoichiometric conditions.
    *   $\Phi = (\text{Fuel/Air ratio})_{\text{actual}} / (\text{Fuel/Air ratio})_{\text{stoichiometric}}$
    *   $\Phi < 1$: Lean mixture (excess air)
    *   $\Phi = 1$: Stoichiometric mixture (ideal combustion)
    *   $\Phi > 1$: Rich mixture (excess fuel)

**1.4 Combustion Products and Pollutants**

*   **Complete Combustion:** Ideal scenario where fuel reacts completely with oxygen to produce primarily carbon dioxide ($\text{CO}_2$) and water ($\text{H}_2\text{O}$).
*   **Incomplete Combustion:** Occurs with insufficient oxygen or poor mixing, leading to the formation of:
    *   Carbon monoxide ($\text{CO}$)
    *   Unburned hydrocarbons (UHC)
    *   Soot (particulate matter)
*   **Pollutants:**
    *   **Nitrogen Oxides ($\text{NO}_x$):** Formed at high temperatures due to the reaction of nitrogen and oxygen in the air.
    *   **Sulfur Oxides ($\text{SO}_x$):** Formed from sulfur in the fuel.
    *   **Particulate Matter (Soot):** Unburned carbon particles.

**Important Points to Remember:**

*   Combustion efficiency is a measure of how completely the fuel is burned.
*   Adiabatic flame temperature is an upper limit and is reduced by heat losses and dissociation at high temperatures.
*   Equivalence ratio significantly impacts combustion temperature, completeness, and pollutant formation.

---

### 2. Gas Turbine Combustion Chambers

*   **Function:** To burn the fuel and mix the hot combustion products with excess air to achieve the desired turbine inlet temperature.
*   **Types of Combustion Chambers (referencing Ganesan, Chapter 5):**
    *   **Can Combustor:** Separate cylindrical chambers for each combustor, housed within the casing. Simpler to manufacture but can be heavier and more prone to hot spots.
    *   **Annular Combustor:** A single annular (ring-shaped) chamber surrounding the compressor-turbine shaft. More compact, lighter, and generally leads to better temperature distribution.
    *   **Can-Annular Combustor:** A hybrid design with individual can combustors mounted within an annular casing. Offers some advantages of both types.
*   **Key Features:**
    *   **Liner:** The inner wall of the combustor that contains the flame. Designed to withstand high temperatures and thermal stresses.
    *   **Primary Zone:** Where fuel and most of the air are introduced for initial combustion.
    *   **Secondary Zone:** Where additional air is introduced to complete combustion and dilute the hot gases to the desired turbine inlet temperature.
    *   **Tertiary Zone (Dilution Zone):** Further air addition to achieve the final turbine inlet temperature and ensure a uniform temperature profile.
    *   **Swirler:** Induces swirling motion in the incoming air to promote better mixing of fuel and air.
    *   **Igniter:** Initiates combustion.
    *   **Fuel Injector:** Atomizes and sprays fuel into the combustor.

**1.5 Combustion Instabilities**

*   **Definition:** Oscillations in pressure and heat release rate within the combustor, which can lead to structural damage and reduced engine performance.
*   **Causes:**
    *   **Feedback Mechanism:** The interaction between flow oscillations and heat release rate fluctuations.
    *   **Acoustic Resonances:** The natural frequencies of the combustor cavity matching the frequency of heat release oscillations.
*   **Types:**
    *   **Choked Flow Instability:** Associated with unsteady flow through the primary zone.
    *   **Resonance Instability:** Driven by acoustic modes within the combustor.
    *   **Chuffing:** Low-frequency, high-amplitude oscillations.
*   **Mitigation:** Careful combustor design, flame stabilization techniques, and acoustic damping.

---

### 3. Micro Gas Turbines (µGTs) – Smart Energy Systems

**3.1 What are Micro Gas Turbines?**

*   **Definition:** Gas turbines with power outputs typically ranging from a few kilowatts (kW) to a few megawatts (MW) (often up to ~300 kW for distributed generation). They are scaled-down versions of larger industrial gas turbines.
*   **Key Characteristics:**
    *   **High Speed:** Operate at very high rotational speeds (tens of thousands to over 100,000 RPM).
    *   **Compact and Lightweight:** Due to their small size and use of advanced materials.
    *   **Low Emissions:** Often designed for cleaner combustion due to their operating characteristics and use of advanced combustion technologies.
    *   **Simple Cycle Operation:** Typically operate on the simple Brayton cycle, though some may incorporate recuperation.
    *   **Continuous Operation:** Capable of continuous power generation.

**3.2 Components of a µGT**

*   **Compressor:** Compresses the intake air. Often a centrifugal compressor in smaller µGTs.
*   **Combustor:** Mixes and burns fuel with compressed air. Designed for efficient and low-emission combustion.
*   **Turbine:** Extracts energy from the hot combustion gases to drive the compressor and an output shaft (for power generation).
*   **Alternator/Generator:** Connected to the turbine shaft to produce electricity.
*   **Heat Exchanger (Optional, for CHP):** Recovers waste heat from the exhaust gases.

**3.3 µGTs in Smart Energy Systems**

*   **Smart Energy System:** An integrated energy system that leverages digital technologies to optimize energy generation, distribution, and consumption. It aims for higher efficiency, reliability, and reduced environmental impact.
*   **Role of µGTs:**
    *   **Distributed Generation (DG):** µGTs can be deployed at the point of consumption (e.g., commercial buildings, industrial facilities), reducing transmission losses and improving grid reliability.
    *   **Combined Heat and Power (CHP) / Cogeneration:** The high-temperature exhaust from µGTs can be used to produce steam or hot water for heating and industrial processes, significantly increasing overall energy utilization efficiency (often to 70-90%). This is a key aspect of their integration into smart energy systems.
        *   **Example:** A commercial building can use a µGT to generate electricity and simultaneously provide heating and hot water.
    *   **Peak Shaving:** µGTs can quickly start up and provide power during periods of high demand, reducing reliance on more expensive grid power.
    *   **Grid Support:** Can provide ancillary services to the grid, such as voltage and frequency regulation.
    *   **Fuel Flexibility:** Many µGTs can operate on a variety of fuels, including natural gas, biogas, landfill gas, and even hydrogen, making them versatile for different energy mixes.
    *   **Modular and Scalable:** Multiple µGT units can be combined to meet varying energy demands.
    *   **Low $\text{NO}_x$ and $\text{CO}$ Emissions:** Advanced combustor designs and lean-burn strategies allow µGTs to meet stringent environmental regulations.

**3.4 Advantages of µGTs in Smart Energy Systems**

*   **High Overall Efficiency (with CHP):** Significant fuel savings compared to separate generation of electricity and heat.
*   **Reduced Grid Dependence:** Enhanced energy security and reliability.
*   **Lower Emissions:** Contribution to environmental sustainability.
*   **Flexibility and Responsiveness:** Ability to ramp up and down quickly.
*   **Modularity:** Easy scaling of power generation capacity.
*   **Quiet Operation:** Compared to some reciprocating engines.

**3.5 Challenges and Considerations**

*   **Cost:** Initial capital cost can be higher than conventional power generation for the same output.
*   **Efficiency at Part Load:** Efficiency can drop at significantly reduced load conditions.
*   **Maintenance:** Require specialized maintenance due to high rotational speeds.
*   **Integration Complexity:** Integrating µGTs into existing energy infrastructure requires careful planning.

**Referencing Textbooks and Reference Books:**

*   **Ganesan (Gas Turbines, Third Edition):** Chapters on combustion chambers will provide detailed insights into the design principles, types, and challenges associated with combustor technology, directly relevant to µGT applications.
*   **Yahya (Turbines, Compressors and Fans, Fourth Edition):** While focusing on components, understanding the scaled-down nature of compressors and turbines in µGTs, as discussed in this book, is essential.
*   **Mathur & Mathur (Gas Turbine & Jet Rocket Propulsion, First Edition):** This book provides a broad overview of gas turbine technology, which can inform the understanding of basic cycles and principles applied to µGTs.
*   **Rolls Royce (The Jet Engine, First Edition):** Though focused on large jet engines, the fundamental principles of combustion and its impact on performance are transferable.
*   **Cohen (Gas Turbine Theory, Seventh Edition):** Provides advanced theoretical treatments of thermodynamics and combustion, which are foundational to understanding the design and optimization of µGT combustion.

**Connecting to Course Outcomes:**

*   **CO1 (Thermodynamics & Fluid Dynamics):** Understanding adiabatic flame temperature, heat of combustion, and fuel-air ratios directly relates to thermodynamic principles governing the combustion process in µGTs. Fluid dynamics principles are crucial for airflow and mixing within the combustor.
*   **CO2 (Compressors & Turbines):** While this topic focuses on combustion, the performance of the compressor and turbine in a µGT is directly impacted by the heat release in the combustor and the temperature of the working fluid.
*   **CO3 (Component Characteristics):** This topic directly addresses the characteristics of the combustion component within a µGT, its function, design considerations, and its role in achieving desired operating parameters for the entire gas turbine system.
*   **CO4 (Jet & Rocket Propulsion):** While µGTs are primarily for power generation, the fundamental combustion process and the physics of heat release are common to both gas turbines and jet engines. Understanding this will build a foundation for later modules on propulsion.

---

### 4. Practice Questions and Exercises

**Question 1:** Define adiabatic flame temperature and list three factors that influence it. (CO1, K2)

**Answer:** Adiabatic flame temperature is the theoretical maximum temperature reached by the combustion products if all the heat released by combustion is used to raise the temperature of the products, with no heat loss to the surroundings. Factors influencing it include:
1.  Fuel-air ratio (or equivalence ratio).
2.  Initial temperature and pressure of reactants.
3.  Composition of fuel and air (e.g., presence of inert gases).
4.  Dissociation of combustion products at high temperatures (though the ideal definition assumes no dissociation).

**Question 2:** Explain the concept of Combined Heat and Power (CHP) and how micro gas turbines are well-suited for CHP applications in smart energy systems. (CO3, K4)

**Answer:** Combined Heat and Power (CHP), also known as cogeneration, is a process that generates electricity and useful thermal energy (heat) from a single fuel source. Micro gas turbines (µGTs) are well-suited for CHP because their exhaust gases are still at a high temperature after passing through the turbine. This waste heat can be recovered using a heat exchanger to produce hot water or steam for space heating, process heating, or absorption chilling. In smart energy systems, this significantly increases the overall energy utilization efficiency of the fuel, reduces energy costs, and lowers the carbon footprint.

**Question 3:** A µGT operates with natural gas as fuel. If the stoichiometric fuel-air ratio is 0.055, calculate the equivalence ratio if the actual fuel-air ratio is 0.040. Is the mixture lean or rich? (CO1, K3)

**Answer:**
Equivalence Ratio $(\Phi) = (\text{Fuel/Air ratio})_{\text{actual}} / (\text{Fuel/Air ratio})_{\text{stoichiometric}}$
$\Phi = 0.040 / 0.055$
$\Phi \approx 0.727$

Since $\Phi < 1$, the mixture is **lean**.

**Question 4:** Briefly describe the primary function of the liner in a gas turbine combustor. What are some of the challenges in its design? (CO3, K2)

**Answer:** The primary function of the liner in a gas turbine combustor is to contain the high-temperature combustion process and guide the airflow through the combustion zone. It is designed to withstand extreme temperatures, thermal shock, and oxidation.

Challenges in liner design include:
*   **High-temperature resistance:** Must withstand temperatures exceeding 1500°C.
*   **Thermal fatigue:** Cyclic temperature variations can cause cracking.
*   **Oxidation and corrosion:** Exposure to hot combustion gases can lead to material degradation.
*   **Uniform temperature distribution:** Achieving a uniform exit temperature profile to protect the turbine blades.
*   **Durability and lifespan:** Ensuring a long service life under harsh operating conditions.

**Question 5:** What are the main advantages of using µGTs for distributed generation in smart energy systems? (CO3, K2)

**Answer:** The main advantages of using µGTs for distributed generation in smart energy systems include:
*   **Reduced transmission losses:** Power is generated closer to the point of consumption.
*   **Improved grid reliability and stability:** Can provide power during grid outages and support grid frequency/voltage.
*   **Flexibility in fuel sourcing:** Can often utilize various fuels, including renewables.
*   **Modular and scalable:** Capacity can be easily adjusted to meet demand.
*   **Potential for CHP:** Significantly enhances overall energy efficiency.
*   **Lower emissions:** Often designed for cleaner combustion.

---

**Summary of Key Concepts:**

*   Combustion requires fuel, oxidant, and ignition.
*   Combustion kinetics are governed by reaction rates, temperature, and pressure.
*   Adiabatic flame temperature is a critical thermodynamic parameter.
*   Equivalence ratio ($\Phi$) dictates mixture richness and combustion characteristics.
*   Micro gas turbines (µGTs) are small-scale gas turbines with power outputs from kW to MW.
*   µGTs are integral to smart energy systems for distributed generation, CHP, and grid support.
*   CHP significantly boosts overall energy efficiency by recovering waste heat.

This concludes the study notes for "Micro Gas Turbines – Smart Energy System" within Module 3 of Gas Turbine and Jet Propulsion. Ensure you review the relevant chapters in your textbooks for a deeper understanding of the theoretical underpinnings.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
