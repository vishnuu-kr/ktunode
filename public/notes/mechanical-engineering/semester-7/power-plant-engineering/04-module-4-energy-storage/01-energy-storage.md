---
title: "Energy Storage"
subject: "POWER PLANT ENGINEERING"
module: "Module 4: Energy Storage"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf48044643ad"
status: "completed"
scrapedAt: "2026-05-20T18:16:20.783Z"
---
# POWER PLANT ENGINEERING: Module 4 - Energy Storage

This module focuses on the various methods of storing energy, their principles of operation, and their significance in modern power systems.

## 4.1 Introduction to Energy Storage

Energy storage is crucial for enhancing the flexibility, reliability, and efficiency of power generation systems. It allows for the decoupling of energy generation from energy consumption, enabling better management of intermittent renewable energy sources and improving grid stability.

**Key Concepts:**

*   **Peak Shaving:** Storing energy during off-peak hours when demand is low and releasing it during peak hours to meet high demand, thus reducing the need for expensive peak power plants.
*   **Load Leveling:** Smoothing out fluctuations in the power demand by storing excess energy during periods of low demand and discharging it during periods of high demand.
*   **Renewable Energy Integration:** Storing energy generated from intermittent sources like solar and wind to ensure a continuous and reliable power supply.
*   **Grid Stability:** Providing ancillary services like frequency regulation and voltage support through rapid charge and discharge capabilities.
*   **Black Start Capability:** Ability of an energy storage system to start up a power plant without external power.

**Importance in Power Plants:**

*   **Improved Efficiency:** By operating base-load power plants at their most efficient points, energy storage can capture and utilize otherwise wasted energy.
*   **Reduced Emissions:** Storing energy from cleaner sources or during off-peak hours can reduce reliance on fossil fuel-based peak power plants, leading to lower emissions.
*   **Enhanced Grid Reliability:** Energy storage systems can act as a buffer against grid disturbances, providing quick response to maintain power quality.

**Referenced Textbooks/References:**

*   **El Wakil (2017):** Discusses the role of energy storage in managing the intermittency of renewable sources.
*   **P. K. Nag (2017):** Provides an overview of various storage technologies and their applications in power systems.
*   **Nagpal & Sharma (2012):** Explores the economic aspects and technical challenges of integrating energy storage into existing power grids.
*   **Gupta (2012):** Covers the fundamentals of different energy storage mechanisms.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Explains the working of various energy storage systems. This section lays the groundwork for understanding the purpose and benefits of these systems.

## 4.2 Classification of Energy Storage Systems

Energy storage systems can be broadly classified based on the form of energy stored and the mechanism of storage.

**Key Concepts:**

*   **Mechanical Energy Storage:** Storing energy in potential or kinetic mechanical forms.
*   **Electrical Energy Storage:** Storing energy directly in electrical or magnetic fields.
*   **Thermal Energy Storage:** Storing energy as heat or cold.
*   **Chemical Energy Storage:** Storing energy through chemical reactions.

**Classifications:**

### 4.2.1 Mechanical Energy Storage

**a) Pumped Hydro Storage (PHS)**

*   **Princ:** Utilizes the gravitational potential energy of water. During off-peak hours, water is pumped from a lower reservoir to an upper reservoir. During peak hours, water is released from the upper reservoir through turbines to generate electricity.
*   **Components:** Two reservoirs (upper and lower), penstock, turbine-generator unit, pump-turbine unit (or separate pump and turbine).
*   **Working:**
    1.  **Pumping Mode (Off-peak):** Electricity from the grid powers a pump that lifts water from the lower reservoir to the upper reservoir.
    2.  **Generating Mode (Peak):** Water from the upper reservoir flows down through the penstock, driving a turbine connected to a generator, producing electricity.
*   **Advantages:** Large-scale storage capacity, long operational life, proven technology, provides grid services.
*   **Disadvantages:** Requires specific geographical locations with suitable topography and water availability, significant environmental impact, high initial capital cost.
*   **Efficiency:** Typically 70-85%.
*   **Capacity:** Can range from tens of MW to several GW.
*   **Response Time:** Minutes to tens of minutes.

**Example:** The Tehri Dam project in India, the Dinorwig Power Station in Wales.

**b) Compressed Air Energy Storage (CAES)**

*   **Princ:** Stores energy by compressing air into underground caverns, depleted gas fields, or man-made tanks. During peak demand, the compressed air is released, heated (often using natural gas), and expanded through a turbine to generate electricity.
*   **Components:** Compressor, turbine, air storage facility (cavern, tanks), heat exchanger (for diabatic CAES).
*   **Working:**
    1.  **Charging Mode:** Electricity from the grid drives a compressor to store air at high pressure.
    2.  **Discharging Mode:** Compressed air is released, heated (in diabatic CAES), and expands through a turbine connected to a generator.
*   **Types:**
    *   **Diabatic CAES:** Uses a combustor to heat the compressed air before expansion, increasing efficiency. Requires a fuel source.
    *   **Adiabatic CAES:** Stores the heat generated during compression in a thermal storage unit and uses it to reheat the air during expansion, eliminating the need for fuel. More complex.
*   **Advantages:** Large-scale storage potential, long lifespan.
*   **Disadvantages:** Requires suitable geological formations for caverns, efficiency is moderate (40-50% for diabatic), environmental concerns related to air emissions and land use.
*   **Capacity:** Can be very large (hundreds of MW).
*   **Response Time:** Minutes to tens of minutes.

**Example:** The McIntosh CAES plant in Alabama, USA.

**c) Flywheel Energy Storage (FES)**

*   **Princ:** Stores kinetic energy in a rotating rotor (flywheel). The rotor is accelerated by an electric motor during charging and its kinetic energy is converted back to electrical energy by a generator during discharging.
*   **Components:** Rotor, bearings, motor-generator, casing, power electronics.
*   **Working:**
    1.  **Charging:** Electric motor accelerates the flywheel to high speeds.
    2.  **Discharging:** The spinning flywheel drives a generator, producing electricity.
*   **Advantages:** Very fast response time (milliseconds), high cycle life, high efficiency (85-95%), environmentally friendly.
*   **Disadvantages:** Limited energy storage capacity (typically for short durations), high self-discharge rate, high capital cost for large systems, safety concerns with high-speed rotors.
*   **Capacity:** Usually in kWh to MWh range, for short durations (seconds to minutes).
*   **Response Time:** Milliseconds to seconds.

**Example:** Used in uninterruptible power supplies (UPS) for critical facilities like data centers and hospitals.

**Referenced Textbooks/References:**

*   **El Wakil (2017):** Details the principles of PHS and CAES.
*   **P. K. Nag (2017):** Provides a comparative analysis of mechanical storage systems.
*   **Gupta (2012):** Explains the mechanical principles behind flywheels.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Explains the working of various energy storage systems – PHS, CAES, and FES are covered here.

### 4.2.2 Electrical Energy Storage

**a) Batteries (Electrochemical Storage)**

*   **Princ:** Stores energy electrochemically through reversible chemical reactions.
*   **Components:** Anode, cathode, electrolyte, separator.
*   **Working:**
    1.  **Charging:** Electrical energy drives a chemical reaction, storing energy within the battery materials.
    2.  **Discharging:** The chemical reaction reverses, releasing stored electrical energy.
*   **Key Battery Technologies:**
    *   **Lithium-ion (Li-ion):** High energy density, long cycle life, wide range of applications. Used in electric vehicles and grid-scale storage.
    *   **Lead-acid:** Mature technology, lower cost, lower energy density. Used in automotive starting batteries and some UPS systems.
    *   **Flow Batteries (e.g., Vanadium Redox Flow Battery - VRFB):** Stores energy in liquid electrolytes held in external tanks. Offers scalability in terms of power and energy capacity independently. Good for long-duration storage.
    *   **Sodium-Sulfur (NaS) Batteries:** High energy density, suitable for grid-scale applications, but requires high operating temperatures.
*   **Advantages:** High energy efficiency (80-95%), modularity, relatively fast response time, silent operation, minimal environmental impact during operation.
*   **Disadvantages:** Limited lifespan (cycle life, calendar life), degradation over time, safety concerns (thermal runaway for some chemistries), high capital cost, limited energy density for some applications.
*   **Capacity:** Varies widely from kWh to MWh.
*   **Response Time:** Milliseconds to seconds.

**Example:** Tesla Powerpack and Megapack for grid-scale storage, EV batteries, consumer electronics.

**b) Supercapacitors (Ultracapacitors)**

*   **Princ:** Stores energy electrostatically by accumulating charge at the interface between an electrode and an electrolyte, without undergoing chemical reactions.
*   **Components:** Electrodes (often carbon-based with high surface area), electrolyte, separator.
*   **Working:**
    1.  **Charging:** Applying a voltage across the electrodes causes ions from the electrolyte to accumulate at the electrode surfaces, forming an electric double layer.
    2.  **Discharging:** The accumulated charge is released rapidly.
*   **Advantages:** Extremely fast charge/discharge rates, very high cycle life (millions of cycles), high power density, excellent safety.
*   **Disadvantages:** Low energy density compared to batteries, higher self-discharge rate than batteries, higher cost per unit of energy.
*   **Capacity:** Typically in Wh to a few kWh, for very short durations.
*   **Response Time:** Microseconds to milliseconds.

**Example:** Used for regenerative braking in vehicles, short-term power backup, and smoothing out power fluctuations.

**Referenced Textbooks/References:**

*   **P. K. Nag (2017):** Provides a comprehensive overview of various battery chemistries and supercapacitors.
*   **Gupta (2012):** Explains the electrochemical principles of batteries and the electrostatic principles of supercapacitors.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Explains the working of various energy storage systems – batteries and supercapacitors are covered here.

### 4.2.3 Thermal Energy Storage (TES)

**Princ:** Stores thermal energy by changing the temperature of a storage medium (sensible heat, latent heat) or by using reversible chemical reactions (thermochemical heat storage).

**Key Concepts:**

*   **Sensible Heat Storage:** Storing energy by raising or lowering the temperature of a material without changing its phase. The amount of energy stored depends on the specific heat capacity, mass, and temperature difference.
    *   **Media:** Water, molten salts, rocks, concrete.
*   **Latent Heat Storage:** Storing energy by changing the phase of a material (e.g., melting/solidifying, vaporizing/condensing) at a constant temperature.
    *   **Media:** Phase Change Materials (PCMs) like paraffins, salt hydrates, fatty acids.
*   **Thermochemical Heat Storage:** Storing energy through reversible endothermic and exothermic chemical reactions.

**Working:**

1.  **Charging:** Heat is supplied to the storage medium, raising its temperature (sensible heat), changing its phase (latent heat), or driving an endothermic reaction.
2.  **Discharging:** The stored heat is released by cooling the medium (sensible heat), reversing the phase change (latent heat), or allowing the exothermic reaction to occur.

**Applications:**

*   **Concentrated Solar Power (CSP):** Molten salt storage is widely used to store solar thermal energy collected by mirrors, allowing for electricity generation even when the sun is not shining.
*   **Building Heating and Cooling:** TES can be used to store off-peak electricity as heat or cold for later use in buildings.
*   **Industrial Processes:** Storing waste heat from industrial processes.

**Advantages:** Can be cost-effective for specific applications, especially when integrated with thermal power plants or solar thermal systems.

**Disadvantages:** Energy density can be lower than other storage methods, energy losses due to heat transfer, efficiency depends on the storage medium and operating temperatures.

**Referenced Textbooks/References:**

*   **El Wakil (2017):** Discusses TES in the context of solar thermal power plants.
*   **P. K. Nag (2017):** Explains the different types of TES and their applications.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Explains the working of various energy storage systems – TES is covered here.

### 4.2.4 Chemical Energy Storage

**Princ:** Stores energy in the chemical bonds of molecules. This energy is released through chemical reactions, such as combustion or electrochemical processes.

**Key Concepts:**

*   **Hydrogen Storage:**
    *   **Production:** Hydrogen can be produced through electrolysis of water, powered by renewable energy (green hydrogen), or from fossil fuels with carbon capture (blue hydrogen).
    *   **Storage Methods:**
        *   **Compressed Gas:** Storing hydrogen at high pressures (e.g., 350-700 bar).
        *   **Liquefied Hydrogen:** Cooling hydrogen to very low temperatures (-253 °C). Energy-intensive.
        *   **Metal Hydrides:** Storing hydrogen by reacting it with metals.
        *   **Chemical Hydrides:** Storing hydrogen in liquid organic compounds.
    *   **Utilization:** Hydrogen can be used in fuel cells to generate electricity or burned in turbines.
*   **Synthetic Fuels (Power-to-X):**
    *   **Princ:** Using excess renewable electricity to produce fuels like synthetic methane, synthetic ammonia, or synthetic methanol from abundant resources like water, CO2, and nitrogen.
    *   **Utilization:** These fuels can be stored and transported using existing infrastructure and used in engines or turbines.

**Advantages:** High energy density (especially hydrogen), potential for long-term and large-scale storage, can be transported, enables sector coupling (linking power sector with transportation and industry).

**Disadvantages:** High costs, technological challenges in production, storage, and transport (especially for hydrogen), safety concerns associated with hydrogen, efficiency losses in conversion processes.

**Referenced Textbooks/References:**

*   **El Wakil (2017):** May touch upon the role of hydrogen as a potential energy carrier.
*   **P. K. Nag (2017):** Discusses hydrogen production and its storage challenges.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Explains the working of various energy storage systems – Chemical energy storage, particularly hydrogen, is covered here.

## 4.3 Applications of Energy Storage in Power Systems

Energy storage systems are becoming increasingly vital for the modern power grid, enabling a transition to a more sustainable and resilient energy future.

**Key Applications:**

*   **Grid-Scale Energy Storage:**
    *   **Renewable Energy Integration:** Smoothing out the intermittency of solar and wind power, providing dispatchable renewable energy.
    *   **Ancillary Services:**
        *   **Frequency Regulation:** Rapidly charging or discharging to maintain grid frequency within acceptable limits.
        *   **Voltage Support:** Providing reactive power to stabilize voltage levels.
        *   **Spinning Reserve:** Providing immediate power generation during sudden load increases or generation outages.
    *   **Peak Shaving and Load Leveling:** Reducing the need for expensive peaking power plants.
    *   **Congestion Management:** Storing energy in areas with high renewable generation and discharging it in congested areas to alleviate grid constraints.
*   **Behind-the-Meter Storage:**
    *   **Customer Energy Management:** Reducing electricity bills by storing cheap off-peak electricity for use during peak hours.
    *   **Backup Power:** Providing power during grid outages (e.g., for residential customers, critical facilities).
    *   **Electric Vehicle (EV) Charging:** Smart charging and vehicle-to-grid (V2G) applications.

**Example Scenarios:**

*   A solar farm paired with a battery storage system can store excess solar energy during the day and discharge it in the evening when solar generation drops but demand remains high.
*   A flywheel system can provide millisecond-level frequency regulation to a grid experiencing sudden load changes.
*   Pumped hydro storage can be used to store large amounts of energy from a base-load nuclear power plant during low demand periods and release it during peak demand.

**Referenced Textbooks/References:**

*   **P. K. Nag (2017):** Provides detailed case studies and applications of energy storage.
*   **Nagpal & Sharma (2012):** Discusses the economic and operational benefits of energy storage in various grid applications.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding energy storage helps contextualize the operation of various power plants, especially in relation to renewable energy integration and grid stability.
*   **CO4 (K2):** Reinforces the practical applications of the storage technologies discussed.

## 4.4 Economics of Energy Storage

The economic viability of energy storage systems depends on various factors, including capital costs, operational costs, revenue streams, and incentives.

**Key Economic Considerations:**

*   **Capital Costs:** The initial investment for the storage system (e.g., batteries, turbines, reservoirs). This is often the most significant cost factor.
*   **Operational Costs:** Maintenance, repair, degradation, and potential replacement costs over the system's lifetime.
*   **Revenue Streams:**
    *   **Energy Arbitrage:** Buying energy when prices are low and selling it when prices are high.
    *   **Ancillary Services Market Participation:** Revenue from providing frequency regulation, voltage support, etc.
    *   **Capacity Payments:** Revenue for being available to provide power during peak demand.
    *   **Renewable Energy Credits (RECs):** If paired with renewable generation.
*   **Levelized Cost of Storage (LCOS):** A metric used to compare the cost of different storage technologies over their lifetime, typically expressed in $/kWh or $/MWh.
*   **Government Policies and Incentives:** Tax credits, subsidies, and renewable portfolio standards can significantly improve the economic attractiveness of energy storage.
*   **Degradation and Lifespan:** The rate at which storage capacity degrades over time and the expected operational lifespan of the system impact its long-term economics.

**Example:** A battery storage system might have a high upfront cost, but if it can consistently generate revenue through participation in ancillary services markets and energy arbitrage, its LCOS could be competitive with traditional power generation technologies.

**Referenced Textbooks/References:**

*   **P. K. Nag (2017):** Discusses the economic feasibility studies for different storage technologies.
*   **Nagpal & Sharma (2012):** Dedicates significant portions to the economic analysis and market integration of energy storage.
*   **Gupta (2012):** Provides a basic understanding of cost analysis in power plant engineering.

**Alignment with Course Outcomes:**

*   **CO5 (K2):** Discusses the economics of power generation and their effect on the environment. This section directly addresses the economic aspect of integrating energy storage, which impacts the overall cost of power generation and potentially environmental benefits.

## 4.5 Environmental Aspects of Energy Storage

While energy storage systems are often deployed to mitigate environmental impacts from conventional power generation, they also have their own environmental considerations.

**Key Environmental Aspects:**

*   **Manufacturing:**
    *   **Resource Extraction:** Mining of materials for batteries (e.g., lithium, cobalt), rare earth metals for flywheels.
    *   **Energy Intensity:** Manufacturing processes can be energy-intensive.
    *   **Waste Generation:** Production of by-products and waste materials.
*   **Operation:**
    *   **Emissions:** Most storage technologies have negligible operational emissions (e.g., batteries, flywheels, PHS). CAES with combustion has emissions.
    *   **Land Use:** PHS requires large reservoirs; CAES can require significant land for caverns or tanks.
    *   **Water Use:** PHS requires water; some battery cooling systems may use water.
*   **End-of-Life:**
    *   **Recycling:** Developing effective recycling processes for batteries and other components is crucial to recover valuable materials and minimize waste.
    *   **Disposal:** Improper disposal can lead to soil and water contamination (e.g., heavy metals from batteries).

**Mitigation Strategies:**

*   **Sustainable Sourcing:** Responsible sourcing of raw materials.
*   **Improving Manufacturing Efficiency:** Reducing energy consumption and waste during production.
*   **Developing Robust Recycling Infrastructure:** Establishing closed-loop recycling systems.
*   **Life Cycle Assessment (LCA):** Evaluating the environmental impact of storage systems throughout their entire lifecycle.

**Example:** The environmental impact of lithium mining for batteries is a significant concern. However, compared to the continuous emissions from a fossil fuel power plant, the lifecycle impact of a battery storage system deployed for renewable energy integration is generally considered much lower.

**Referenced Textbooks/References:**

*   **El Wakil (2017):** May discuss environmental aspects related to pumped hydro.
*   **P. K. Nag (2017):** Provides an overview of the environmental considerations for various power generation and storage technologies.
*   **Nagpal & Sharma (2012):** Touches upon the broader environmental implications of energy systems.

**Alignment with Course Outcomes:**

*   **CO5 (K2):** Discusses the economics of power generation and pollution from power plants and their effect on the environment. This section directly addresses the environmental aspect of energy storage in the context of reducing pollution from traditional power plants.

## 4.6 Practice Questions and Exercises

**Instructions:** Answer the following questions to test your understanding of the topic.

**Q1. (CO4, K2) Explain the fundamental principle of operation for Pumped Hydro Storage (PHS) and list its primary advantages and disadvantages.**

**Answer:**
PHS operates on the principle of converting electrical energy into gravitational potential energy of water and then back into electrical energy.
*   **Princ:** During off-peak hours, electricity is used to pump water from a lower reservoir to an upper reservoir. During peak hours, water is released from the upper reservoir through turbines connected to generators to produce electricity.
*   **Advantages:** Large-scale storage capacity, long operational life, proven technology, provides grid services.
*   **Disadvantages:** Requires specific geographical locations, significant environmental impact, high initial capital cost.

**Q2. (CO4, K2) Differentiate between sensible heat storage and latent heat storage in Thermal Energy Storage (TES) systems. Provide an example of a storage medium for each.**

**Answer:**
*   **Sensible Heat Storage:** Stores thermal energy by changing the temperature of a material without changing its phase. The energy stored is proportional to the material's specific heat capacity, mass, and temperature change.
    *   **Example Medium:** Water, rocks, molten salts.
*   **Latent Heat Storage:** Stores thermal energy by utilizing the phase change of a material (e.g., melting or solidification) at a constant temperature. This allows for higher energy storage density for a given volume.
    *   **Example Medium:** Phase Change Materials (PCMs) like paraffins, salt hydrates.

**Q3. (CO4, K2) What is the primary mechanism of energy storage in supercapacitors, and how does it differ from batteries?**

**Answer:**
The primary mechanism of energy storage in supercapacitors is **electrostatic** by accumulating charge at the electrode-electrolyte interface, forming an electric double layer. This is different from batteries, which store energy **electrochemically** through reversible chemical reactions.

**Q4. (CO4, K2) Discuss the role of energy storage systems in integrating intermittent renewable energy sources like solar and wind power.**

**Answer:**
Intermittent renewable sources like solar and wind power are characterized by their variability in output. Energy storage systems help integrate them by:
*   **Smoothing Output:** Storing excess energy generated during periods of high availability (e.g., sunny or windy days) and discharging it when generation is low.
*   **Providing Dispatchability:** Making renewable energy available on demand, even when the source is not actively generating.
*   **Improving Grid Stability:** Mitigating the impact of rapid fluctuations in renewable generation on the grid frequency and voltage.

**Q5. (CO5, K2) Briefly discuss two economic benefits of implementing energy storage systems in a power grid.**

**Answer:**
Two economic benefits of energy storage systems include:
1.  **Peak Shaving/Load Leveling:** By storing energy during off-peak hours and discharging during peak hours, storage systems reduce the reliance on expensive "peaker" plants that are only used during times of high demand. This can lower overall electricity generation costs.
2.  **Ancillary Services Revenue:** Storage systems can participate in ancillary services markets (e.g., frequency regulation, voltage support) by rapidly responding to grid signals, generating revenue streams that offset their costs.

**Q6. (CO4, K2) Identify the main components of a Compressed Air Energy Storage (CAES) system.**

**Answer:**
The main components of a CAES system are:
*   Compressor
*   Turbine
*   Air storage facility (e.g., cavern, tank)
*   Heat exchanger (for diabatic CAES)
*   Generator/Motor

**Q7. (CO4, K2) What are the limitations of flywheel energy storage systems compared to battery storage systems, particularly concerning energy capacity?**

**Answer:**
The main limitation of flywheel energy storage systems compared to battery storage systems is their **lower energy storage capacity**. Flywheels are generally suitable for short-duration energy storage (seconds to minutes) and high-power applications, whereas batteries can store significantly larger amounts of energy for longer durations (hours).

**Q8. (CO4, K2) Describe one application of Thermal Energy Storage (TES) in the power sector.**

**Answer:**
A major application of TES in the power sector is in **Concentrated Solar Power (CSP) plants**. Molten salt is commonly used as the storage medium to store the thermal energy collected by solar mirrors. This stored heat can then be used to generate steam to drive turbines for electricity production even after sunset or during cloudy periods, making solar power more dispatchable.

---

**Important Points to Remember:**

*   Energy storage is essential for grid flexibility, reliability, and the integration of renewables.
*   PHS and CAES are suitable for large-scale, long-duration storage but require specific infrastructure.
*   Batteries offer high efficiency and fast response but have limitations in lifespan and cost.
*   Supercapacitors are ideal for very rapid charge/discharge cycles and high power density but have low energy density.
*   TES is effectively used in solar thermal power plants.
*   Chemical storage, particularly hydrogen, holds promise for long-term and sector-coupling applications but faces significant technical and economic hurdles.
*   The economic viability of storage depends on capital costs, operational revenue, and market mechanisms.
*   Environmental impacts need to be considered across the entire lifecycle of storage technologies, from manufacturing to end-of-life.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
