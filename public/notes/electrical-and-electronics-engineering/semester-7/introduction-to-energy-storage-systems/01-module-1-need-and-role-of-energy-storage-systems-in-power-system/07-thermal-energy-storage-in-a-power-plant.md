---
title: "Thermal energy storage in a power plant"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36aae"
status: "completed"
scrapedAt: "2026-05-23T16:37:20.935Z"
---
# Introduction to Energy Storage Systems

## Module 1: Need and Role of Energy Storage Systems in Power Systems

### Topic: Thermal Energy Storage in a Power Plant

---

### **Learning Outcomes Covered:**

*   **LO1:** Understand the fundamental principles of thermal energy storage.
*   **LO2:** Identify the components and working mechanisms of thermal energy storage systems in power plants.
*   **LO3:** Analyze the advantages and disadvantages of using thermal energy storage in power plants.
*   **LO4:** Explore the different applications of thermal energy storage in various types of power plants.
*   **LO5:** Evaluate the economic and technical feasibility of thermal energy storage solutions.

---

### **1. Introduction to Thermal Energy Storage (TES)**

Thermal Energy Storage (TES) is a technology that allows for the capture and storage of thermal energy (heat or cold) for later use. In the context of power plants, TES plays a crucial role in enhancing efficiency, grid stability, and the integration of renewable energy sources.

*   **Definition:** TES systems store thermal energy in a storage medium, which can then be released to generate electricity or provide heating/cooling services.
*   **Need in Power Systems (CO1):**
    *   **Mismatch between supply and demand:** Power plants often operate most efficiently at a specific output level. TES can absorb excess energy during low demand periods and release it during high demand periods, smoothing out production.
    *   **Integration of Variable Renewable Energy (VRE) Sources:** Solar thermal power plants and other VRE sources often have intermittent output. TES allows for the storage of solar heat generated during peak sunlight hours for use when sunlight is unavailable, improving their dispatchability. (CO4, CO5)
    *   **Improving Plant Efficiency:** By capturing waste heat from power generation processes (e.g., flue gases), TES can be used to preheat working fluids or provide district heating, improving the overall thermal efficiency of the plant.
    *   **Grid Stability and Ancillary Services:** TES can provide rapid response capabilities for frequency regulation, voltage support, and load leveling, contributing to overall grid stability. (CO1)

---

### **2. Types of Thermal Energy Storage**

TES systems are generally classified based on the physical principle used to store thermal energy:

#### **2.1 Sensible Heat Storage**

This is the most common and simplest form of TES. It involves storing heat by raising or lowering the temperature of a storage medium without changing its phase.

*   **Key Concept:** Heat is absorbed or released by changing the temperature of a solid or liquid. The amount of heat stored is proportional to the mass of the material, its specific heat capacity, and the temperature change.
    *   *Equation:* $Q = m \cdot c_p \cdot \Delta T$
        *   $Q$: Heat stored (Joules)
        *   $m$: Mass of the storage medium (kg)
        *   $c_p$: Specific heat capacity of the medium (J/kg·K)
        *   $\Delta T$: Change in temperature (K)
*   **Storage Media:**
    *   **Solids:** Rocks, bricks, concrete, ceramics, sand.
    *   **Liquids:** Water, molten salts, thermal oils.
*   **Advantages:**
    *   Simple technology, well-understood.
    *   Wide range of materials available.
    *   Relatively low cost for many materials.
*   **Disadvantages:**
    *   Lower energy density compared to latent heat or thermochemical storage.
    *   Requires large volumes for significant energy storage.
    *   Temperature control can be challenging.
*   **Examples in Power Plants:**
    *   **Molten Salt Storage in Concentrated Solar Power (CSP) Plants:** This is a prime example. Solar thermal energy heats molten salts, which are then stored in insulated tanks. The hot molten salt can be used to produce steam to drive turbines even after sunset. (CO2, CO4)
        *   *Ter-Gazarian (2011)* and *Díaz-González et al. (2016)* extensively discuss TES in CSP applications, particularly molten salt systems.
    *   **Hot Water/Steam Storage in Cogeneration Plants:** Waste heat from industrial processes or power generation can be used to heat water, which is then stored in large insulated tanks for district heating or other process needs.

#### **2.2 Latent Heat Storage (Phase Change Materials - PCMs)**

This method stores heat by utilizing the latent heat associated with a phase change (e.g., solid to liquid, liquid to solid) of a storage medium at a relatively constant temperature.

*   **Key Concept:** Energy is absorbed or released during the phase transition of a material at a specific melting/freezing point. The amount of heat stored is primarily dependent on the latent heat of fusion and the mass of the material.
    *   *Equation:* $Q = m \cdot L$
        *   $Q$: Heat stored (Joules)
        *   $m$: Mass of the PCM (kg)
        *   $L$: Latent heat of fusion (J/kg)
*   **Storage Media:** Phase Change Materials (PCMs) – organic compounds (paraffins, fatty acids) or inorganic compounds (salt hydrates, metallic alloys).
*   **Advantages:**
    *   High energy density compared to sensible heat storage.
    *   Stores and releases heat at a nearly constant temperature, which is beneficial for many applications.
    *   Compact storage volumes.
*   **Disadvantages:**
    *   PCMs can be more expensive than sensible heat materials.
    *   Challenges related to heat transfer during phase change.
    *   Potential for degradation or cycling instability in some PCMs.
*   **Examples in Power Plants:**
    *   While less common than sensible heat in large-scale power plants, PCMs can be used for specific applications like thermal management of power electronics or preheating boiler feed water.
    *   *Rastler (2010)* touches upon various energy storage technologies, including those that could potentially utilize PCMs for enhanced thermal performance in specific components.

#### **2.3 Thermochemical Heat Storage**

This method stores thermal energy through reversible chemical reactions. Heat is absorbed during an endothermic reaction, and energy is released when the reaction is reversed.

*   **Key Concept:** Energy is stored in chemical bonds through reversible endothermic and exothermic reactions. The reaction can be driven by temperature changes.
*   **Storage Media:** Pairs of reactants that undergo reversible chemical reactions (e.g., salt hydrates, metal hydrides, chemical decomposition reactions).
*   **Advantages:**
    *   Very high energy density.
    *   Long-term, lossless storage is possible as the energy is stored in chemical bonds.
    *   Can operate at ambient temperatures.
*   **Disadvantages:**
    *   Complex systems and reactions.
    *   High initial costs.
    *   Durability and stability of reaction materials over many cycles.
    *   Heat transfer challenges can be significant.
*   **Examples in Power Plants:**
    *   Thermochemical storage is generally considered a more advanced TES technology and is less widely implemented in current large-scale power plants compared to sensible heat. However, research is ongoing for applications in advanced solar thermal systems or for capturing waste heat from high-temperature processes.

---

### **3. Thermal Energy Storage in Specific Power Plant Types**

TES is particularly relevant to certain types of power plants:

#### **3.1 Concentrated Solar Power (CSP) Plants**

*   **Role of TES:** TES is integral to CSP plants with thermal cycles (e.g., parabolic trough, solar tower) to provide dispatchability and extend generation beyond daylight hours.
*   **Working Principle:** Solar radiation is concentrated by mirrors to heat a fluid (e.g., thermal oil, molten salt). This hot fluid is then used to heat water and produce steam, which drives a turbine. TES stores excess heat from the solar collector field.
*   **Molten Salt Storage:** The most prevalent TES in CSP. Hot molten salt is pumped to a hot tank, and when needed, it's pumped from the hot tank to a steam generator to produce steam.
*   **Benefits:**
    *   Allows CSP plants to operate as baseload or dispatchable power sources, unlike photovoltaics.
    *   Provides grid services like load following and frequency regulation.
    *   Maximizes solar energy utilization.
*   **References:**
    *   *Ter-Gazarian (2011)* and *Díaz-González et al. (2016)* dedicate significant sections to TES in CSP, detailing the operation of molten salt systems and their benefits for renewable integration.
    *   *Denholm et al. (2010)* also discusses the role of TES in enabling renewable electricity generation, with CSP being a key example.

#### **3.2 Conventional Thermal Power Plants (Coal, Gas, Nuclear)**

*   **Role of TES:** Primarily for waste heat recovery and improving overall plant efficiency.
*   **Waste Heat Recovery:** TES can capture waste heat from flue gases or exhaust streams. This recovered heat can be used for:
    *   **Preheating boiler feed water:** Reduces the amount of fuel needed.
    *   **District heating:** In cogeneration plants, heat is provided to nearby communities.
    *   **Bottoming cycles:** Using lower-temperature heat to drive additional turbines.
*   **Load Following:** In some advanced concepts, TES could be used to store excess heat during periods of low electricity demand, allowing the primary generator to operate at a more optimal, stable point.
*   **References:**
    *   While not the primary focus, *Ter-Gazarian (2011)* and *Díaz-González et al. (2016)* may touch upon waste heat recovery as a form of TES within conventional power plants.
    *   *Rastler (2010)* might explore efficiency improvement strategies in conventional plants that could involve TES.

#### **3.3 Geothermal Power Plants**

*   **Role of TES:** While geothermal energy is a relatively constant source, TES can be used for:
    *   **Thermal Energy Storage for Heating/Cooling:** In binary cycle geothermal plants, the geothermal fluid might be used to heat a secondary working fluid. TES could store this heat for direct use or for stabilizing output.
    *   **Seasonal Thermal Energy Storage:** For district heating applications powered by geothermal resources.

---

### **4. Components of a Thermal Energy Storage System**

A typical TES system in a power plant comprises several key components:

*   **Storage Medium:** The material used to store thermal energy (e.g., molten salts, water, rocks).
*   **Storage Tank/Container:** An insulated vessel designed to hold the storage medium and minimize heat loss.
    *   **Insulation:** Crucial for reducing heat losses and maintaining the temperature of the stored energy.
    *   **Materials:** High-temperature insulation materials are used for molten salt tanks.
*   **Heat Exchanger:** Transfers heat to and from the storage medium.
    *   **Charging:** Transfers heat from the energy source (e.g., solar collector, waste heat stream) to the storage medium.
    *   **Discharging:** Transfers heat from the storage medium to the end-use application (e.g., steam generator).
*   **Piping and Pumps:** Circulate the heat transfer fluid and the storage medium.
*   **Control System:** Manages the charging and discharging processes, monitors temperatures, and ensures safe operation.

---

### **5. Advantages and Disadvantages of TES in Power Plants**

#### **5.1 Advantages**

*   **Enhanced Grid Flexibility and Reliability (CO1):** TES allows for the decoupling of energy generation from immediate demand, improving grid stability.
*   **Integration of Renewables (CO4):** Crucial for making intermittent renewable sources like solar thermal dispatchable.
*   **Improved Thermal Efficiency:** Capturing and utilizing waste heat can significantly boost the overall efficiency of power plants.
*   **Reduced Emissions:** By improving efficiency and enabling renewable integration, TES can contribute to lower greenhouse gas emissions.
*   **Load Leveling:** Can shift energy consumption to off-peak hours, reducing peak demand charges and stress on the grid.
*   **Ancillary Services:** Can provide valuable grid services like frequency response. (CO1)

#### **5.2 Disadvantages**

*   **Capital Costs:** TES systems, especially for large-scale applications like CSP, can have significant upfront investment costs.
*   **Energy Losses:** Heat losses from storage tanks over time, though minimized by insulation, are unavoidable.
*   **System Complexity:** Some TES technologies, particularly thermochemical storage, are complex to design and operate.
*   **Space Requirements:** Sensible heat storage, in particular, can require substantial physical space.
*   **Material Degradation:** Some storage media can degrade over many charge/discharge cycles, affecting performance and lifespan.

---

### **6. Economic and Technical Feasibility (CO5)**

The economic and technical feasibility of TES in power plants depends on several factors:

*   **Energy Storage Duration:** The required duration (hours) of storage significantly impacts cost and system size.
*   **Cost of Storage Medium:** The price and availability of suitable storage materials.
*   **Efficiency of Charging/Discharging:** Higher round-trip efficiency reduces energy losses and improves economic viability.
*   **Capital Costs of System Components:** Tanks, heat exchangers, pumps, and controls.
*   **Operation and Maintenance (O&M) Costs:** Ongoing costs for maintaining the system.
*   **Value of Services Provided:** The revenue generated from dispatchable power, grid services, or improved efficiency.
*   **Policy and Market Support:** Government incentives, carbon pricing, and market structures for ancillary services can greatly influence feasibility.
*   **Technical Maturity:** The level of technological readiness and proven reliability.

*   *Ter-Gazarian (2011)* and *Díaz-González et al. (2016)* provide detailed analyses of the technical characteristics and economic considerations for various energy storage technologies, including TES in different power system contexts.
*   *Rastler (2010)* offers a broad overview of cost-benefit analyses for different storage options, which can be applied to evaluating TES.
*   *Nezamabadi and Gharehpetian (2011)* discuss the integration of energy storage in smart grids, highlighting how TES can contribute to economic and operational efficiencies in distribution networks with renewables.

---

### **7. Key Points to Remember**

*   **TES is crucial for dispatchability:** It allows for energy to be stored when abundant and released when needed, making renewable sources more reliable.
*   **Molten salt is the dominant TES in CSP:** It provides high-temperature storage essential for steam generation.
*   **Sensible heat storage is the most common form:** Utilizing temperature changes in solids or liquids.
*   **Latent heat storage offers higher energy density:** Using phase change materials.
*   **Thermochemical storage promises very high energy density:** But is more complex and less mature.
*   **Waste heat recovery:** A significant application of TES in conventional power plants to boost efficiency.
*   **Cost and performance:** The economic viability depends on the application, duration, and efficiency of the TES system.

---

### **8. Practice Questions and Answers**

**Question 1 (CO1, CO2, CO4):** Explain why thermal energy storage is considered essential for the integration of solar thermal power plants into the electricity grid. What is the most common type of TES used in these plants?

**Answer 1:** Solar thermal power plants (CSP) generate heat from sunlight, which is intermittent. Thermal energy storage allows CSP plants to store excess heat captured during peak sunlight hours and use it to generate electricity when sunlight is unavailable (e.g., at night or during cloudy periods). This makes CSP plants dispatchable, similar to conventional power plants, and provides grid stability. The most common type of TES used in CSP plants is **sensible heat storage using molten salts**.

**Question 2 (CO2, CO3, CO5):** Differentiate between sensible heat storage and latent heat storage in terms of their operating principles and typical storage media.

**Answer 2:**
*   **Sensible Heat Storage:**
    *   **Princ:** Stores heat by changing the temperature of a material without changing its phase.
    *   **Media:** Solids (rocks, concrete) and liquids (water, thermal oils, molten salts).
    *   **Storage:** Proportional to mass, specific heat capacity, and temperature change ($Q = m \cdot c_p \cdot \Delta T$).
*   **Latent Heat Storage:**
    *   **Princ:** Stores heat by utilizing the phase change of a material (e.g., melting/freezing) at a nearly constant temperature.
    *   **Media:** Phase Change Materials (PCMs) like paraffins, salt hydrates.
    *   **Storage:** Proportional to mass and latent heat of fusion ($Q = m \cdot L$). Offers higher energy density.

**Question 3 (CO1, CO5):** Besides enabling renewable energy integration, what other significant roles can thermal energy storage systems play in the modern power system?

**Answer 3:** Thermal energy storage systems can play several vital roles:
*   **Improving Power Plant Efficiency:** By capturing and utilizing waste heat for preheating or district heating.
*   **Providing Grid Ancillary Services:** Such as frequency regulation and voltage support, enhancing grid stability.
*   **Load Leveling:** Shifting energy demand from peak to off-peak hours, reducing strain on the grid and potentially lowering electricity costs.
*   **Enhancing Reliability:** By ensuring a more stable and predictable power supply.

**Question 4 (CO2):** A power plant has a waste heat stream at 300°C. It is proposed to use this heat to preheat boiler feed water using a thermal energy storage system. Which type of TES would be most suitable for storing this heat if a medium-temperature range is required for preheating? Briefly explain why.

**Answer 4:** For a medium-temperature range requirement, **sensible heat storage** using a suitable high-temperature liquid (like thermal oil or a specific molten salt mixture) or a solid medium (like ceramic bricks or sand) would likely be most suitable. This is because sensible heat storage is simpler, more cost-effective for many applications, and readily available for medium-temperature ranges. While PCMs could also be used if their melting point aligns, and thermochemical storage offers higher density, sensible heat is often the most practical choice for waste heat recovery and preheating in this temperature range due to its maturity and cost-effectiveness, as suggested by references like Ter-Gazarian and Díaz-González.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **9. References**

*   **Primary Textbooks:**
    *   Ter-Gazarian, A.G. (2011). *Energy Storage for Power Systems*. The Institution of Engineering and Technology (IET) Publication, UK.
    *   Díaz-González, F., Sumper, A., & Gomis-Bellmunt, O. (2016). *Energy Storage in Power Systems*. Wiley Publication.
*   **Reference Books:**
    *   Rastler, D. (2010). *Electricity Energy Storage Technology Options: A White Paper Primer on Applications, Costs, and Benefits*. Electric Power Research Institute (EPRI) Technical Update.
    *   Denholm, P., Ela, E., Kirby, B., & Milligan, M. (2010). *The Role of Energy Storage with Renewable Electricity Generation*. National Renewable Energy Laboratory (NREL).
    *   Nezamabadi, P., & Gharehpetian, G. B. (2011). *Electrical energy management of virtual power plants in distribution networks with renewable energy resources and energy storage systems*. IEEE Power Distribution Conference.

---