---
title: "Thermal energy: General considerations -Storage media- Containment- Thermal energy storage in a power plant"
subject: "ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36257"
status: "completed"
scrapedAt: "2026-05-23T16:21:59.834Z"
---
# ENERGY STORAGE SYSTEMS - Module 1: Need and Role of Energy Storage Systems in Power System

## Topic: Thermal Energy: General Considerations, Storage Media, Containment, and Thermal Energy Storage in a Power Plant

### Learning Outcomes Covered:
*   **LO1:** Understanding the general considerations of thermal energy storage.
*   **LO2:** Identifying various storage media for thermal energy.
*   **LO3:** Exploring containment strategies for thermal energy storage.
*   **LO4:** Analyzing the role and application of thermal energy storage in power plants.

### Course Outcomes Alignment:
*   **CO1:** Identify the role of energy storage in power systems. (Thermal energy storage plays a crucial role in grid stability and renewable integration, thus contributing to the overall role of energy storage.)
*   **CO2:** Classify thermal, kinetic and potential energy storage systems and their applications. (This topic focuses specifically on thermal energy storage systems and their applications.)

---

### 1. Thermal Energy Storage: General Considerations

Thermal Energy Storage (TES) is a technology that stores energy in the form of heat or cold. It plays a significant role in modern power systems, particularly in enhancing grid flexibility, integrating renewable energy sources, and improving energy efficiency.

**Key Concepts & Definitions:**

*   **Thermal Energy:** The energy associated with the random motion of atoms and molecules in a substance. It is a form of internal energy that can be transferred as heat.
*   **Energy Storage System (ESS):** Any technology that can absorb energy, store it for a period, and then release it when needed.
*   **Thermal Energy Storage (TES):** A subset of ESS that stores energy in thermal form (heat or cold).
*   **Applications in Power Systems:**
    *   **Load Leveling:** Storing excess energy generated during off-peak hours (when demand is low and generation costs are cheaper) for use during peak hours (when demand is high and generation costs are higher).
    *   **Renewable Energy Integration:** Storing surplus energy from intermittent renewable sources like solar and wind to provide power when these sources are unavailable.
    *   **Grid Stability and Ancillary Services:** Providing services like frequency regulation and voltage support.
    *   **Waste Heat Recovery:** Capturing and storing waste heat from industrial processes or power generation for later use.
    *   **Cogeneration and Combined Heat and Power (CHP):** Enhancing the efficiency of CHP systems by storing heat generated alongside electricity.

**Key Considerations for TES:**

*   **Temperature Range:** The operating temperature of the TES system dictates the choice of storage medium and the application.
*   **Storage Capacity:** The amount of energy that can be stored, typically measured in kWh or MWh.
*   **Charge/Discharge Rates:** The speed at which energy can be absorbed and released.
*   **Round-trip Efficiency:** The ratio of energy discharged to energy charged, accounting for losses during storage and retrieval.
*   **Cost:** Capital costs (installation) and operational costs (maintenance, energy losses).
*   **Lifespan:** The operational life of the TES system.
*   **Safety:** Considerations related to the storage media and containment.
*   **Environmental Impact:** The sustainability of the materials used and the operation of the system.

**Reference & Content Incorporation:**

*   **Ter-Gazarian (2011):** Emphasizes the growing need for energy storage to manage intermittency of renewables and the role of TES in achieving this. Discusses various TES technologies and their suitability for different grid applications.
*   **Díaz-González, Sumper, & Gomis-Bellmunt (2016):** Provides a detailed overview of different energy storage technologies, including TES, and their integration challenges and benefits in power systems. They highlight TES's potential for load shifting and improving the economics of renewable energy.
*   **Rastler (2010):** In its primer, Rastler likely categorizes TES as a viable option for certain applications, discussing its benefits in terms of cost-effectiveness for specific temperature ranges and storage durations.

**Important Point to Remember:** The suitability of TES for a particular application is heavily dependent on the required temperature range, storage duration, and the cost-effectiveness compared to other storage technologies.

---

### 2. Storage Media for Thermal Energy Storage

The choice of storage medium is critical and depends on the desired temperature range, energy density, cost, and safety characteristics. TES media can be broadly classified into three categories: sensible heat, latent heat, and thermochemical storage.

**2.1 Sensible Heat Storage (SHS)**

This is the most common form of TES, where the storage medium's temperature changes as heat is added or removed.

*   **Key Concept:** Heat is stored by increasing the internal energy of the storage medium without changing its phase.
*   **Formula:** $Q = m \cdot c_p \cdot \Delta T$, where:
    *   $Q$ = Heat stored (Joules)
    *   $m$ = Mass of the storage medium (kg)
    *   $c_p$ = Specific heat capacity of the medium (J/kg·K)
    *   $\Delta T$ = Change in temperature (K or °C)
*   **Advantages:** Relatively simple technology, wide range of available materials, low cost for many materials.
*   **Disadvantages:** Lower energy density compared to latent or thermochemical storage, requires larger volumes.

**Common Sensible Heat Storage Media:**

| Medium         | State    | Typical Temperature Range (°C) | Specific Heat Capacity ($c_p$, kJ/kg·K) | Thermal Conductivity (W/m·K) | Examples of Application                                      |
| :------------- | :------- | :----------------------------- | :-------------------------------------- | :--------------------------- | :----------------------------------------------------------- |
| **Water**      | Liquid   | 0-100                          | 4.18                                    | 0.6                          | Residential heating, low-temperature industrial processes.   |
| **Molten Salts** | Liquid   | 200-560                        | 1.5 - 3.5                               | 0.5 - 0.8                    | Concentrated Solar Power (CSP) plants, industrial heat.      |
| **Concrete/Rock** | Solid    | Up to 300                      | 0.8 - 1.2                               | 0.5 - 1.5                    | Building heating, industrial heat storage.                   |
| **Sand/Gravel**  | Solid    | Up to 600                      | 0.8 - 1.0                               | 0.3 - 0.6                    | Industrial heat storage, biomass power plants.               |
| **Ceramics**     | Solid    | Up to 1000                     | 0.8 - 1.2                               | 0.5 - 2.0                    | High-temperature industrial processes, TES for electricity. |
| **Air/Gases**    | Gas      | Varies                         | Varies                                  | Low                          | High-temperature industrial applications, TES for electricity. |

**2.2 Latent Heat Storage (LHS)**

This method stores heat by utilizing the phase change of a material (e.g., solid to liquid, liquid to gas).

*   **Key Concept:** Heat is absorbed or released during a phase transition at a nearly constant temperature.
*   **Formula:** $Q = m \cdot L$, where:
    *   $Q$ = Heat stored (Joules)
    *   $m$ = Mass of the storage medium (kg)
    *   $L$ = Latent heat of fusion/vaporization (J/kg)
*   **Advantages:** High energy density at a specific temperature, can provide heat at a constant temperature during discharge.
*   **Disadvantages:** Material selection is crucial due to melting point requirements, potential for subcooling or superheating, challenges in heat transfer during phase change.

**Common Latent Heat Storage Media (Phase Change Materials - PCMs):**

| Medium           | Phase Change | Melting Point (°C) | Latent Heat of Fusion (kJ/kg) | Thermal Conductivity (W/m·K) | Examples of Application                                    |
| :--------------- | :----------- | :----------------- | :---------------------------- | :--------------------------- | :--------------------------------------------------------- |
| **Paraffin Waxes** | Solid-Liquid | 40-70              | 150-250                       | ~0.2                         | Building heating, passive solar systems.                   |
| **Salt Hydrates** | Solid-Liquid | 30-80              | 150-250                       | ~0.5                         | Residential heating, solar thermal applications.           |
| **Fatty Acids**  | Solid-Liquid | 30-70              | 180-220                       | ~0.2                         | Building heating, temperature stabilization.               |
| **Eutectic Salts** | Solid-Liquid | Varies             | 100-250                       | ~0.5                         | Industrial heat storage, CSP.                              |
| **Water/Ice**    | Solid-Liquid | 0                  | 334                           | ~2.2                         | Air conditioning, ice storage for thermal management.    |

**2.3 Thermochemical Storage (TCS)**

This method stores heat through reversible chemical reactions.

*   **Key Concept:** Heat is absorbed to drive an endothermic chemical reaction, storing energy in chemical bonds. The reverse exothermic reaction releases this stored heat.
*   **Advantages:** Very high energy density, potentially long-term storage with negligible losses.
*   **Disadvantages:** Complex systems, requires higher temperatures for reactions, chemical stability and material degradation can be issues, lower round-trip efficiency due to reaction kinetics.

**Examples of Thermochemical Reactions:**

*   **Absorption/Adsorption:** Using solid desiccants to absorb water vapor, releasing heat when the desiccant is regenerated at higher temperatures.
*   **Decomposition/Synthesis:** Reversible decomposition of compounds like metal hydroxides or carbonates. For example, the dehydration of $\text{Ca(OH)}_2$ to $\text{CaO}$ and $\text{H}_2\text{O}$ releases heat.
*   **Salt Hydrates:** Reversible hydration/dehydration of salt hydrates (e.g., $\text{Na}_2\text{SO}_4 \cdot 10\text{H}_2\text{O}$).

**Reference & Content Incorporation:**

*   **Ter-Gazarian (2011):** Provides detailed analysis of different storage media for TES, comparing their properties (energy density, cost, temperature ranges) and suitability for various power system applications. Discusses the advantages of molten salts for high-temperature SHS in CSP.
*   **Díaz-González, Sumper, & Gomis-Bellmunt (2016):** Categorizes TES media and discusses the trade-offs between SHS, LHS, and TCS in terms of performance and cost. They highlight PCMs for their high energy density and specific temperature applications.
*   **Denholm et al. (2010):** May touch upon TES media as part of its analysis of energy storage for renewable integration, likely focusing on media suitable for large-scale applications like molten salts in CSP.

**Important Points to Remember:**
*   Sensible heat storage is the most mature and widely used TES technology.
*   Latent heat storage offers higher energy density at specific temperatures.
*   Thermochemical storage has the highest energy density but is more complex and less mature.
*   The choice of medium is driven by application requirements, particularly temperature and energy density needs.

---

### 3. Containment for Thermal Energy Storage

Effective containment is crucial for safely and efficiently storing thermal energy. It involves designing vessels or structures that can hold the storage medium, withstand operating temperatures and pressures, and minimize heat loss to the surroundings.

**Key Considerations for Containment:**

*   **Material Compatibility:** The containment material must be compatible with the storage medium at operating temperatures and pressures to prevent corrosion or degradation.
*   **Thermal Insulation:** Minimizing heat loss to the environment is essential for maintaining stored energy and improving overall efficiency.
*   **Structural Integrity:** The containment must be able to withstand thermal stresses, pressure differentials, and external loads.
*   **Cost:** The cost of materials, fabrication, and installation.
*   **Safety:** Preventing leaks, ruptures, or other hazardous events.
*   **Thermal Expansion:** Accounting for the expansion and contraction of materials with temperature changes.

**Types of Containment:**

**3.1 For Sensible Heat Storage:**

*   **Tanks/Vessels:**
    *   **Liquid Storage (e.g., water, molten salts):** Typically made of steel, stainless steel, or specialized alloys. For high-temperature molten salts, materials resistant to thermal shock and corrosion are used. Insulation is applied externally.
    *   **Solid Storage (e.g., rocks, sand, ceramics):** Often involves large insulated enclosures or silos. The storage medium itself might be contained within smaller porous structures or simply piled within a heavily insulated space.
*   **Insulated Enclosures/Buildings:** For bulk solid storage, large insulated structures are used, often with a double-wall construction filled with insulation.

**3.2 For Latent Heat Storage (PCMs):**

*   **Encapsulation:** PCMs are often encapsulated to prevent leakage and facilitate handling. This can be in:
    *   **Macro-encapsulation:** Larger containers like tubes, spheres, or panels containing the PCM.
    *   **Micro-encapsulation:** Tiny spherical capsules where the PCM is enclosed within a protective polymer shell. This is useful for integrating PCMs into other materials like concrete or textiles.
*   **Heat Exchanger Design:** The containment is intrinsically linked to the heat exchanger design to facilitate efficient heat transfer to and from the PCM during charging and discharging.

**3.3 For Thermochemical Storage:**

*   **Reactors:** Containment is designed as a reactor vessel where the chemical reaction occurs. This requires materials that can withstand high temperatures and potentially reactive chemical environments.
*   **Sealed Systems:** Due to the nature of chemical reactions, sealed systems are often necessary to prevent loss of reactants or products.
*   **Heat Exchanger Integration:** Similar to LHS, efficient heat exchange is critical for driving and reversing the chemical reactions.

**3.4 Insulation Materials:**

Common insulation materials used in TES containment include:
*   **Fiberglass**
*   **Mineral Wool**
*   **Polyurethane Foam**
*   **Ceramic Fibers** (for very high temperatures)
*   **Vacuum Insulation Panels (VIPs)** (for high performance)

**Reference & Content Incorporation:**

*   **Ter-Gazarian (2011):** Discusses the engineering challenges of containment for TES, especially for molten salt systems used in CSP, highlighting material selection and insulation techniques to minimize heat losses.
*   **Díaz-González, Sumper, & Gomis-Bellmunt (2016):** Addresses the importance of containment design for different TES types, emphasizing encapsulation strategies for PCMs and robust reactor designs for TCS.
*   **Rastler (2010):** Likely covers the practical aspects of containment in its cost and application analysis, mentioning the materials and engineering considerations for different TES scales.

**Important Points to Remember:**
*   Containment design must balance cost, safety, thermal performance, and structural integrity.
*   Minimizing heat loss through effective insulation is paramount for TES efficiency.
*   For PCMs and TCS, the containment is often integrated with the heat exchanger and may involve encapsulation.

---

### 4. Thermal Energy Storage in a Power Plant

TES can be integrated into various types of power plants to improve their efficiency, flexibility, and ability to integrate renewable energy.

**4.1 Applications in Conventional Thermal Power Plants (Coal, Gas, Nuclear):**

*   **Waste Heat Recovery:** Power plants generate significant amounts of waste heat (e.g., from flue gases, cooling systems). TES can store this heat for:
    *   **District Heating:** Providing thermal energy to nearby buildings, increasing the overall efficiency of the power plant.
    *   **Process Heat:** Supplying heat for industrial processes.
    *   **Reheat Cycles:** Preheating feedwater or reheat steam, thereby improving the thermodynamic efficiency of the power cycle.
*   **Load Following and Flexibility:** TES can store excess heat generated during low demand periods and release it to generate electricity during peak demand, allowing the plant to operate more efficiently or reduce cycling of expensive generation units.

**4.2 Applications in Concentrated Solar Power (CSP) Plants:**

This is one of the most prominent applications of TES.

*   **Key Concept:** CSP plants use mirrors to concentrate sunlight onto a receiver, heating a fluid. This hot fluid is then used to produce steam for a turbine to generate electricity.
*   **TES Role:** Molten salt is commonly used as both the heat transfer fluid and the storage medium.
    *   **Charging:** During periods of high solar irradiance, excess heat is used to heat the molten salt and store it in insulated tanks.
    *   **Discharging:** When solar irradiance is low or absent (e.g., at night, cloudy days), the stored hot molten salt is circulated to generate steam and produce electricity, extending the plant's operational hours and smoothing out solar output.
*   **Benefits:**
    *   **Dispatchability:** Allows CSP plants to provide electricity on demand, acting as a reliable power source.
    *   **Increased Capacity Factor:** Significantly increases the operating hours of the plant.
    *   **Grid Stability:** Contributes to grid reliability by providing firm power.

**Example:** The Solana Generating Station in Arizona, USA, is a large CSP plant with a molten salt TES system capable of storing enough energy to generate electricity for 6 hours after sunset.

**4.3 Applications in Renewable Energy Integration (Solar PV, Wind):**

While less direct than CSP, TES can support variable renewable sources:

*   **Electric Boilers/Heaters:** Surplus electricity from Solar PV or wind can be used to heat a TES medium (e.g., water, molten salt). This stored heat can then be used for:
    *   **District Heating:** Displacing fossil fuel heating.
    *   **Process Heat:** Providing heat for industries.
    *   **Electricity Generation (via Rankine cycle):** While less efficient for this purpose compared to direct electricity storage, it can be an option if electricity storage is more expensive or if there's a strong demand for heat.
*   **Thermal Batteries:** Concepts like "thermal batteries" that use electricity to heat a material (e.g., graphite, ceramics) to very high temperatures and then use this heat to generate electricity via thermoelectric devices or Stirling engines are being explored.

**4.4 Thermal Energy Storage for Grid Services:**

*   **Peak Shaving:** Storing energy during off-peak hours and releasing it during peak demand to reduce the need for expensive peaking power plants.
*   **Ancillary Services:** TES can be used to provide rapid response services like frequency regulation by adjusting heat input or output.

**Reference & Content Incorporation:**

*   **Ter-Gazarian (2011):** Provides extensive details on TES in CSP plants, explaining the technical configurations and economic benefits. Also discusses the role of TES in enhancing the flexibility of conventional thermal power plants.
*   **Díaz-González, Sumper, & Gomis-Bellmunt (2016):** Integrates TES within the broader context of power system operation, discussing how TES in CSP contributes to the integration of renewables and how TES can be used for electric-thermal conversion for grid services.
*   **Denholm et al. (2010):** Specifically addresses the role of energy storage in renewable electricity generation. While the primary focus might be on electrochemical storage, TES, especially in CSP, is highlighted as a key technology for making solar thermal power dispatchable.
*   **Nezamabadi & Gharehpetian (2011):** Their work on virtual power plants in distribution networks with renewables might include scenarios where thermal storage is used in conjunction with distributed generation or to manage local grid constraints.

**Important Points to Remember:**
*   CSP plants are prime examples of TES integration for dispatchable renewable energy.
*   TES can improve the efficiency and operational flexibility of conventional thermal power plants through waste heat recovery.
*   TES can indirectly support variable renewables like PV and wind by storing electricity as heat for later use.

---

### Practice Questions & Answers

**Question 1:** Differentiate between sensible heat storage and latent heat storage. Provide one advantage and one disadvantage of each.

**Answer 1:**
*   **Sensible Heat Storage (SHS):** Heat is stored by changing the temperature of the storage medium.
    *   **Advantage:** Simplicity and availability of many low-cost materials.
    *   **Disadvantage:** Lower energy density compared to LHS.
*   **Latent Heat Storage (LHS):** Heat is stored during a phase change of the storage medium at a nearly constant temperature.
    *   **Advantage:** Higher energy density at a specific temperature.
    *   **Disadvantage:** Material selection is critical, and heat transfer during phase change can be challenging.

**Question 2:** What are the key considerations when selecting a storage medium for thermal energy storage?

**Answer 2:** Key considerations include:
*   Required temperature range
*   Energy density
*   Cost (capital and operational)
*   Specific heat capacity (for SHS) or latent heat (for LHS)
*   Thermal conductivity
*   Material stability and lifespan
*   Safety and environmental impact

**Question 3:** Explain how thermal energy storage is utilized in Concentrated Solar Power (CSP) plants.

**Answer 3:** In CSP plants, TES (typically using molten salts) stores excess heat collected from concentrated sunlight during the day. This stored heat is then used to generate steam to produce electricity when solar irradiance is insufficient (e.g., at night or during cloudy periods), making CSP a dispatchable renewable energy source.

**Question 4:** Identify three potential applications of thermal energy storage in a power system beyond CSP.

**Answer 4:**
1.  **Load Leveling:** Storing off-peak electricity as heat for peak-hour use.
2.  **Waste Heat Recovery:** Capturing and storing waste heat from conventional power plants for district heating or process heat.
3.  **Supporting Variable Renewables:** Using surplus wind or PV electricity to charge a TES system for later use in district heating or potentially electricity generation.

**Question 5:** What is the primary advantage of thermochemical storage over sensible and latent heat storage?

**Answer 5:** The primary advantage of thermochemical storage is its very high energy density, allowing for more energy to be stored in a smaller volume or mass, and potentially long-term storage with minimal losses.

---

### Important Points to Remember (Summary for Module 1, Topic Thermal Energy)

*   **Role of TES:** Enhances grid flexibility, integrates renewables, improves efficiency, and provides dispatchability.
*   **Storage Media:**
    *   **Sensible:** Changes temperature (water, molten salts, solids). Simple, lower density.
    *   **Latent:** Undergoes phase change (PCMs). High density at specific temps.
    *   **Thermochemical:** Reversible chemical reactions. Highest density, complex.
*   **Containment:** Essential for safety, efficiency, and longevity. Requires appropriate materials, robust insulation, and consideration for thermal expansion.
*   **Power Plant Integration:**
    *   **CSP:** Primary application for dispatchable solar power.
    *   **Conventional Plants:** Waste heat recovery for district heating/process heat; improves efficiency.
    *   **Renewable Support:** Indirectly supports PV/wind by storing electricity as heat.

---
This concludes the study notes for the topic "Thermal Energy: General Considerations - Storage Media - Containment - Thermal Energy Storage in a Power Plant" from Module 1.
