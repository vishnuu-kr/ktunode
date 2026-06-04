---
title: "Thermal energy: General considerations -Storage media- Containment-"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36aad"
status: "completed"
scrapedAt: "2026-05-23T16:37:18.866Z"
---
# INTRODUCTION TO ENERGY STORAGE SYSTEMS
## Module 1: Need and Role of Energy Storage Systems in Power System
### Topic: Thermal Energy: General Considerations - Storage Media - Containment

---

## 1. Introduction to Thermal Energy Storage (TES)

Thermal energy storage is a key technology for managing energy in various applications, particularly within power systems. It involves storing thermal energy (heat or cold) for later use, offering significant benefits in terms of efficiency, reliability, and integration of renewable energy sources.

**Key Concepts:**

*   **Thermal Energy:** Energy associated with the temperature of a substance. It can be transferred by conduction, convection, and radiation.
*   **Energy Storage:** The process of capturing energy produced at one time for use at a later time.
*   **Power System:** A network of electrical components used to supply, transport, and distribute electric power.

**Relevance to Power Systems:**

*   **Grid Stability and Reliability:** TES can help balance supply and demand, mitigating intermittency of renewable sources like solar and wind.
*   **Peak Shaving:** Storing energy during off-peak hours (when demand is low and electricity is cheaper) and releasing it during peak hours (when demand is high).
*   **Renewable Energy Integration:** TES can absorb excess renewable energy when generation exceeds demand and release it when generation is low.
*   **Efficiency Improvements:** TES can improve the efficiency of thermal power plants by recovering waste heat.

**Learning Outcome Alignment:**
*   This section directly addresses **CO1: Identify the role of energy storage in power systems.**

**Textbook References:**
*   "Energy Storage for Power Systems" by A.G.Ter- Gazarian (The Institution of Engineering and Technology (IET) Publication, UK, Second Edition, 2011) - Provides a foundational understanding of various energy storage technologies, including thermal.
*   "Energy Storage in Power Systems" by Francisco Díaz-González, Andreas Sumper, Oriol Gomis-Bellmunt (Wiley Publication, 2016) - Offers insights into the operational aspects and integration challenges of storage systems in modern power grids.

---

## 2. General Considerations for Thermal Energy Storage

When designing and implementing TES systems, several factors need careful consideration to ensure optimal performance, cost-effectiveness, and safety.

**Key Considerations:**

*   **Temperature Range:** The desired operating temperature of the TES system significantly influences the choice of storage media and containment.
    *   **Low Temperature (<100°C):** Useful for building heating and cooling, solar thermal applications.
    *   **Medium Temperature (100°C - 400°C):** Relevant for industrial process heat, CSP (Concentrated Solar Power) plants.
    *   **High Temperature (>400°C):** Applicable for advanced power cycles, industrial furnaces, and high-temperature CSP.
*   **Energy Density:** The amount of energy that can be stored per unit volume or mass of the storage medium. Higher energy density leads to smaller storage systems.
*   **Efficiency (Round-trip):** The ratio of energy discharged from the storage system to the energy initially charged. This includes charging, storage, and discharging losses.
*   **Charge/Discharge Rates:** The speed at which energy can be absorbed and released. This is crucial for applications requiring rapid response.
*   **Cost:** Capital costs (installation, materials) and operating costs (maintenance, energy losses).
*   **Lifespan and Durability:** The expected operational life of the storage system and its components, especially under cyclic loading.
*   **Safety:** Potential hazards associated with the storage medium (flammability, toxicity, pressure) and containment.
*   **Thermal Stability:** The ability of the storage medium to withstand repeated thermal cycling without significant degradation.
*   **Heat Transfer Characteristics:** How efficiently heat can be transferred into and out of the storage medium.

**Reference Book Insights:**
*   D. Rastler's "Electricity Energy Storage Technology Options" (EPRI, 2010) provides a comparative analysis of different storage technologies, including thermal, highlighting their advantages and disadvantages in various grid applications.

**Learning Outcome Alignment:**
*   **CO1: Identify the role of energy storage in power systems.**
*   **CO2: Classify thermal, kinetic and potential energy storage systems and their applications.** (Understanding these general considerations is key to classifying TES systems and their applications).

---

## 3. Thermal Energy Storage Media

The choice of storage medium is fundamental to the performance and economics of a TES system. Different media are suitable for different temperature ranges and applications.

**Types of Thermal Energy Storage Media:**

### 3.1. Sensible Heat Storage

This method stores thermal energy by changing the temperature of a solid or liquid material without a change in its phase. The amount of energy stored is proportional to the material's specific heat capacity, mass, and temperature change.

*   **Specific Heat Capacity (c):** The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius. Higher 'c' means more energy can be stored for a given mass and temperature change.
*   **Formula for Energy Stored:** $Q = m \cdot c \cdot \Delta T$
    *   $Q$: Heat energy stored (Joules)
    *   $m$: Mass of the storage medium (kg)
    *   $c$: Specific heat capacity of the medium (J/kg·°C)
    *   $\Delta T$: Temperature change (°C)

**Common Sensible Heat Storage Media:**

*   **Water:**
    *   **Pros:** Abundant, low cost, non-toxic, high specific heat capacity.
    *   **Cons:** Limited to temperatures below boiling point (unless pressurized), potential for freezing at low temperatures.
    *   **Applications:** Domestic hot water heating, building heating and cooling, solar thermal systems.
*   **Molten Salts:**
    *   **Pros:** High operating temperatures (up to 500-600°C), good volumetric heat capacity, low vapor pressure.
    *   **Cons:** Can be corrosive, require careful handling, can solidify at lower temperatures (requiring trace heating).
    *   **Commonly used:** Nitrates (e.g., Sodium Nitrate, Potassium Nitrate), Chlorides.
    *   **Applications:** Concentrated Solar Power (CSP) plants for generating electricity, industrial process heat. (Gazarian, 2011)
*   **Rocks/Gravel/Sand:**
    *   **Pros:** Low cost, readily available, good thermal stability, high-temperature capability.
    *   **Cons:** Lower specific heat capacity compared to water, lower thermal conductivity leading to slower charge/discharge rates and potential temperature stratification.
    *   **Applications:** Solar air heating, thermal storage in buildings, industrial heat recovery.
*   **Concrete/Ceramics:**
    *   **Pros:** High temperature capability, good thermal stability, can be structural elements.
    *   **Cons:** Lower specific heat capacity, lower thermal conductivity.
    *   **Applications:** Thermal storage in buildings, industrial furnaces.
*   **Oils (Thermal Oils):**
    *   **Pros:** Operate at moderate temperatures, good thermal conductivity.
    *   **Cons:** Flammable at high temperatures, can degrade over time.
    *   **Applications:** Industrial heating, solar thermal systems.

### 3.2. Latent Heat Storage (Phase Change Materials - PCMs)

This method stores thermal energy by utilizing the phase change of a material (e.g., solid to liquid, liquid to gas). The energy is absorbed or released at a nearly constant temperature during the phase transition.

*   **Latent Heat of Fusion (or Vaporization):** The amount of heat absorbed or released per unit mass during a phase change at constant temperature.
*   **Formula for Energy Stored:** $Q = m \cdot L$
    *   $Q$: Heat energy stored (Joules)
    *   $m$: Mass of the storage medium (kg)
    *   $L$: Latent heat of fusion (J/kg)

**Common Latent Heat Storage Media (PCMs):**

*   **Organic PCMs:**
    *   **Examples:** Paraffins (alkanes), fatty acids, glycols.
    *   **Pros:** Non-corrosive, chemically stable, wide range of melting points, low supercooling.
    *   **Cons:** Low thermal conductivity, relatively low latent heat of fusion, can be flammable.
*   **Inorganic PCMs:**
    *   **Examples:** Salt hydrates (e.g., $\text{MgCl}_2 \cdot 6\text{H}_2\text{O}$, $\text{CaCl}_2 \cdot 6\text{H}_2\text{O}$), metallic alloys.
    *   **Pros:** Higher latent heat of fusion, higher thermal conductivity than organic PCMs.
    *   **Cons:** Can be corrosive, prone to phase segregation and supercooling, chemical stability issues.
*   **Eutectics:**
    *   **Examples:** Mixtures of salts or organic compounds that melt at a single temperature lower than the melting points of individual components.
    *   **Pros:** Wide range of melting points, can offer improved properties.
    *   **Cons:** Similar challenges to their constituent materials.

**Applications of PCMs:**
*   Building thermal management (passive solar heating and cooling).
*   Temperature regulation in electronic devices.
*   Thermal energy storage for solar thermal power plants.
*   Waste heat recovery.

### 3.3. Thermochemical Heat Storage

This method stores thermal energy by using reversible endothermic and exothermic chemical reactions. Energy is stored in the chemical bonds.

*   **Endothermic Reaction:** Absorbs heat to break chemical bonds.
*   **Exothermic Reaction:** Releases heat when new chemical bonds are formed.

**Common Thermochemical Storage Systems:**

*   **Metal Hydrides:** Metal + Hydrogen $\leftrightarrow$ Metal Hydride + Heat
    *   **Pros:** High energy density, storability at ambient temperatures.
    *   **Cons:** Slow reaction kinetics, high cost, degradation over cycles.
*   **Salt Hydrates:** Anhydrous Salt + Water $\leftrightarrow$ Salt Hydrate + Heat
    *   **Pros:** High latent heat, potential for high energy density.
    *   **Cons:** Dehydration requires high temperatures, rehydration can be slow, phase segregation.
*   **Ammonia-based Systems:** $\text{NH}_3 \leftrightarrow \text{N}_2 + 3\text{H}_2$ (Decomposition requires heat).
    *   **Pros:** High energy density.
    *   **Cons:** Complex systems, safety concerns with ammonia.

**Advantages of Thermochemical Storage:**
*   Potentially very high energy density.
*   Long-term, isothermal energy storage (no self-discharge due to heat loss).

**Disadvantages of Thermochemical Storage:**
*   Complex system design and operation.
*   Challenges with kinetics, reversibility, and material degradation.
*   Higher capital costs.

**Learning Outcome Alignment:**
*   **CO2: Classify thermal, kinetic and potential energy storage systems and their applications.** (This section provides the classification of TES based on storage media and principles).

**Textbook and Reference Book Content:**
*   Gazarian (2011) and Díaz-González et al. (2016) will detail the properties and performance characteristics of these various storage media and their suitability for different power system applications.
*   Rastler (2010) will provide comparative cost and performance data.
*   Denholm et al. (NREL, 2010) would likely discuss the role of TES in renewable energy integration, highlighting which media are best suited for specific renewable sources.

---

## 4. Containment for Thermal Energy Storage Systems

The containment system is crucial for safely and efficiently storing thermal energy. It must prevent leakage of the storage medium, maintain its integrity under operating conditions (temperature, pressure), and minimize heat losses to the surroundings.

**Key Requirements for Containment:**

*   **Structural Integrity:** Withstand thermal expansion/contraction, pressure (if applicable), and mechanical stresses.
*   **Thermal Insulation:** Minimize heat gain or loss to the environment, which impacts system efficiency.
*   **Corrosion Resistance:** Protect against degradation by the storage medium or the environment.
*   **Material Compatibility:** Ensure the containment material does not react adversely with the storage medium.
*   **Cost-Effectiveness:** The cost of the containment system should be justifiable by the overall system economics.
*   **Safety:** Prevent leaks or catastrophic failures.

**Types of Containment and Associated Considerations:**

### 4.1. Tanks and Vessels

These are the most common forms of containment for liquids and molten salts.

*   **Materials:**
    *   **Steel:** Common for water and oils. Stainless steel for higher temperatures or corrosive environments.
    *   **Special Alloys:** For high-temperature molten salts or aggressive chemical environments.
    *   **Concrete:** Used for large-scale sensible heat storage (e.g., rock beds) or for containing molten salt tanks.
*   **Insulation:**
    *   **High-temperature insulation:** Ceramic fibers, refractory bricks, aerogels.
    *   **Vacuum insulation:** For very high temperatures or to minimize heat loss.
*   **Design Features:**
    *   **Expansion Joints:** To accommodate thermal expansion and contraction.
    *   **Trace Heating:** For molten salts to prevent solidification.
    *   **Pressure Relief Systems:** For safety.

**Example:** Molten salt tanks in CSP plants are typically large steel vessels lined with refractory materials and heavily insulated.

### 4.2. Packed Beds (for Solids)

Used for storing thermal energy in granular materials like rocks, gravel, or sand.

*   **Containment Structure:** Can be simple insulated bins, silos, or cavities within the ground or buildings.
*   **Material Considerations:** The containment structure needs to be robust enough to hold the weight of the packed material.
*   **Airflow/Heat Transfer:** The design must facilitate efficient heat transfer to/from the packed bed.

**Example:** Solar air collectors often use rock beds in insulated boxes for thermal storage.

### 4.3. Encapsulation (for PCMs)

Phase Change Materials are often encapsulated to prevent leakage during phase transitions and to improve their handling.

*   **Encapsulation Materials:**
    *   **Polymers:** Polyethylene, polypropylene for low-to-medium temperatures.
    *   **Metals:** Aluminum, stainless steel for higher temperatures or enhanced thermal conductivity.
    *   **Ceramics:** For very high temperatures.
*   **Forms:** Microencapsulation (tiny spheres), macroencapsulation (larger containers like spheres, cylinders).
*   **Considerations:** The encapsulation material must be compatible with the PCM, have good thermal conductivity, and be robust.

**Example:** PCMs encapsulated in small plastic spheres are mixed with concrete to create a "phase change material concrete" for building applications.

### 4.4. Reaction Vessels (for Thermochemical Storage)

These are more complex and involve containment for reactants and products, often under specific temperature and pressure conditions.

*   **Materials:** Must be chosen for extreme temperature and chemical resistance, potentially involving specialized alloys or ceramics.
*   **Design:** Often involves heat exchangers integrated within the vessel to manage the endothermic/exothermic reactions.

**Learning Outcome Alignment:**
*   **CO2: Classify thermal, kinetic and potential energy storage systems and their applications.** (Understanding containment is part of understanding the system as a whole).
*   **CO4: Illustrate energy storage technology in renewable energy integration.** (Proper containment is vital for the reliable operation of TES in renewable energy systems).

**Textbook and Reference Book Content:**
*   Gazarian (2011) and Díaz-González et al. (2016) will provide detailed descriptions of containment strategies for different TES technologies, including material selection and design principles.

---

## 5. Applications of Thermal Energy Storage in Power Systems

TES plays a critical role in modernizing power systems and integrating renewable energy sources.

**Key Applications:**

*   **Concentrated Solar Power (CSP) Plants:**
    *   **Role:** Molten salt TES is widely used to store heat captured from solar collectors. This allows electricity generation to continue for several hours after sunset or during cloudy periods, improving the dispatchability of solar power.
    *   **How it works:** Solar collectors heat a fluid (often molten salt), which then transfers heat to a storage tank of molten salt. This stored heat is used to generate steam for a turbine-generator.
    *   **Example:** Several CSP plants in the USA (e.g., Ivanpah Solar Electric Generating System) and Spain utilize molten salt TES with capacities of several hours of thermal storage.
*   **Industrial Waste Heat Recovery:**
    *   **Role:** TES can capture waste heat from industrial processes, which can then be reused for heating or to generate electricity.
    *   **Media:** Molten salts, thermal oils, or packed beds can be used depending on the temperature of the waste heat.
    *   **Benefits:** Improved energy efficiency, reduced operating costs, lower emissions.
*   **District Heating and Cooling:**
    *   **Role:** Storing excess heat or cold generated during off-peak hours or from renewable sources for later distribution to buildings.
    *   **Media:** Water tanks are common for low temperatures, while PCMs can be used for building-specific thermal regulation.
    *   **Benefits:** Load leveling, improved grid efficiency, integration of renewables.
*   **Integration with Combined Heat and Power (CHP) Plants:**
    *   **Role:** TES can store heat generated by CHP plants, decoupling heat and electricity production to better match demand.
    *   **Benefits:** Increased flexibility, improved economics of CHP.
*   **Grid Services (Ancillary Services):**
    *   **Role:** TES can provide services like frequency regulation and voltage support by rapidly absorbing or releasing thermal energy, which can be converted to electrical power.
    *   **Challenges:** Requires fast-response TES systems and advanced control strategies.

**Learning Outcome Alignment:**
*   **CO1: Identify the role of energy storage in power systems.**
*   **CO2: Classify thermal, kinetic and potential energy storage systems and their applications.**
*   **CO4: Illustrate energy storage technology in renewable energy integration.** (CSP is a prime example).
*   **CO5: Summarise energy storage technology applications for smart grids.** (District heating/cooling and grid services are relevant smart grid applications).

**Reference Book Insights:**
*   The NREL white paper by Denholm et al. (2010) specifically addresses the role of energy storage, including TES, in the context of renewable electricity generation, highlighting its importance for smoothing out the variability of sources like solar and wind.
*   P. Nezamabadi and G. B. Gharehpetian's work on virtual power plants (2011) would likely discuss how TES can be integrated into smart grid architectures to optimize resource allocation and improve grid stability with renewables.

---

## 6. Important Points to Remember

*   **TES is classified into sensible, latent, and thermochemical heat storage based on the physical or chemical principle used.**
*   **The choice of storage medium is dictated by the required temperature range, energy density, cost, and efficiency.**
*   **Molten salts are crucial for high-temperature applications like CSP.**
*   **PCMs offer isothermal storage at specific phase-change temperatures.**
*   **Containment systems must be robust, thermally insulated, and chemically compatible with the storage medium.**
*   **TES is a vital technology for enabling the widespread integration of renewable energy sources like solar and wind.**
*   **Key applications include CSP, industrial waste heat recovery, and district heating/cooling.**

---

## 7. Practice Questions and Answers

**Question 1:**
What are the three main categories of thermal energy storage based on the principle of operation?
**(CO2)**

**Answer 1:**
The three main categories are:
1.  **Sensible Heat Storage:** Storing energy by changing the temperature of a material.
2.  **Latent Heat Storage:** Storing energy during a phase change (e.g., solid to liquid).
3.  **Thermochemical Heat Storage:** Storing energy in chemical bonds through reversible reactions.

**Question 2:**
Name two common sensible heat storage media and one common latent heat storage medium.
**(CO2)**

**Answer 2:**
*   **Sensible Heat Media:** Water, Molten Salts, Rocks/Gravel.
*   **Latent Heat Medium:** Paraffins (or any specific Phase Change Material like Magnesium Chloride Hexahydrate).

**Question 3:**
Explain the role of thermal energy storage in Concentrated Solar Power (CSP) plants.
**(CO1, CO4)**

**Answer 3:**
In CSP plants, thermal energy storage (typically using molten salts) is used to store the heat captured from solar collectors. This stored heat can then be used to generate steam for electricity production even when the sun is not shining (e.g., at night or during cloudy periods). This makes solar power more dispatchable and reliable, improving its integration into the power grid.

**Question 4:**
What are the primary challenges associated with thermochemical heat storage systems?
**(General Consideration)**

**Answer 4:**
Primary challenges include:
*   Complex system design and operation.
*   Slow reaction kinetics.
*   Material degradation over repeated cycles.
*   Potential for phase segregation or unwanted side reactions.
*   Higher capital costs compared to sensible or latent heat storage.

**Question 5:**
Why is thermal insulation critical for TES systems?
**(General Consideration)**

**Answer 5:**
Thermal insulation is critical to minimize unwanted heat loss to the environment during storage. This directly impacts the round-trip efficiency of the TES system, reducing the amount of energy available for later use and increasing operational costs. Good insulation ensures that the stored energy is retained for when it is needed.

---

This concludes the study notes for Thermal Energy: General Considerations, Storage Media, and Containment. Remember to refer back to the textbooks and reference materials for deeper insights and specific technical details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
