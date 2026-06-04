---
title: "Energy Storage"
subject: "POWER PLANT ENGINEERING"
module: "Module 4: Energy Storage"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463797"
status: "completed"
scrapedAt: "2026-05-20T18:06:39.231Z"
---
# POWER PLANT ENGINEERING

## Module 4: Energy Storage

### Topic: Energy Storage

This module delves into the crucial aspect of energy storage in power plants, focusing on its necessity, various technologies, and their applications. Understanding energy storage is vital for grid stability, renewable energy integration, and efficient power plant operation.

---

### 1. Introduction and Necessity of Energy Storage

**Key Concepts:**

*   **Grid Stability:** Maintaining a constant balance between electricity generation and demand. Fluctuations in demand and intermittent generation (especially from renewables) can lead to instability.
*   **Peak Shaving:** Reducing the demand on power plants during peak hours by utilizing stored energy.
*   **Load Leveling:** Storing excess energy during off-peak hours (when generation exceeds demand) and discharging it during peak hours to smooth out the load curve.
*   **Renewable Energy Integration:** Storing energy generated from intermittent sources like solar and wind to provide a reliable power supply when these sources are not available.
*   **Ancillary Services:** Providing services to the grid that support the transmission and distribution of electricity, such as frequency regulation and voltage support.
*   **Black Start Capability:** The ability of a power plant to restart itself after a complete shutdown without relying on an external power source.

**Necessity of Energy Storage:**

*   **Balancing Supply and Demand:** Energy storage systems act as a buffer, absorbing excess generation and releasing it when demand is high, thus maintaining grid stability.
*   **Mitigating Intermittency of Renewables:** Solar and wind power are inherently variable. Storage allows us to capture this energy when it's available and use it when it's not, making renewables more dispatchable.
*   **Improving Grid Reliability and Resilience:** Storage can provide backup power during grid outages and help prevent cascading failures.
*   **Reducing the Need for Peaking Power Plants:** Peaking plants (often gas turbines) are expensive to operate and have higher emissions. Storage can replace their role in meeting peak demand.
*   **Enhancing Power Quality:** Storage systems can help regulate voltage and frequency, improving the overall quality of electricity delivered to consumers.
*   **Economic Benefits:** Shaving peak demand can reduce electricity costs for utilities and consumers. Storing cheaper off-peak power for use during peak hours improves profitability.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Discusses the role of storage in balancing thermal power plant operation and grid stability.)
*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Covers the evolution of power systems and the increasing importance of storage for managing diverse generation sources.)

---

### 2. Types of Energy Storage Systems

This section covers the various technologies used for energy storage, aligning with **CO4: Explain the working of various energy storage systems (Knowledge Level: K2)**.

#### 2.1 Mechanical Energy Storage

**2.1.1 Pumped Hydro Storage (PHS)**

**Key Concepts:**

*   **Working Principle:** Uses two reservoirs at different elevations connected by a penstock and turbine/pump system.
    *   **Charging (Pumping):** During off-peak hours, excess electricity is used to pump water from the lower reservoir to the upper reservoir.
    *   **Discharging (Generation):** During peak hours, water is released from the upper reservoir through the penstock to drive a turbine and generate electricity.
*   **Components:**
    *   **Upper Reservoir:** Stores water at a higher elevation.
    *   **Lower Reservoir:** Stores water at a lower elevation.
    *   **Penstock:** Conduit that carries water between reservoirs.
    *   **Turbine/Pump Unit:** Typically a reversible Francis turbine that functions as a pump during charging and a turbine during discharging.
    *   **Generator/Motor:** Connected to the turbine shaft, acts as a generator during discharging and a motor during charging.
    *   **Powerhouse:** Houses the turbine/pump and generator/motor.
*   **Advantages:**
    *   Mature and proven technology.
    *   Large-scale storage capacity.
    *   Long lifespan.
    *   High round-trip efficiency (typically 70-85%).
    *   Can provide ancillary services.
*   **Disadvantages:**
    *   Requires specific geographical locations with significant elevation difference and water availability.
    *   High initial capital cost.
    *   Environmental impact (land use, habitat disruption).
    *   Long construction times.

**Example:** The Bath County Pumped Storage Station in Virginia, USA, is one of the largest PHS facilities in the world, with a capacity of 3,000 MW.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Provides detailed schematics and discussions on the thermodynamics and mechanics of PHS.)
*   **Nagpal, G. R., & Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.** (Explains the fundamental principles of PHS and its integration with the power grid.)

**2.1.2 Compressed Air Energy Storage (CAES)**

**Key Concepts:**

*   **Working Principle:** Stores energy by compressing air into an underground cavern or vessel. When electricity is needed, the compressed air is released, heated (usually with natural gas, but adiabatic/isothermal CAES are being developed), and expanded through a turbine to generate electricity.
    *   **Charging:** Electricity drives a compressor to store air.
    *   **Discharging:** Compressed air is released, heated, and expands through a turbine.
*   **Types:**
    *   **Diabatic CAES:** Uses a combustor to reheat the air using fossil fuels (typically natural gas) before expansion. This is the most common type.
    *   **Adiabatic CAES:** Stores the heat generated during compression in a thermal storage unit (e.g., rocks, molten salt) and uses this heat to reheat the air during discharge, eliminating the need for fossil fuels.
    *   **Isothermal CAES:** Aims to maintain a constant temperature during compression and expansion, theoretically achieving higher efficiencies, but technically challenging.
*   **Components:**
    *   **Compressor:** Compresses air.
    *   **Air Storage Vessel:** Underground cavern (salt caverns, depleted gas fields), or above-ground tanks.
    *   **Turbine (Expander):** Expands the compressed air to drive a generator.
    *   **Heat Exchanger/Combustor:** For reheating the air in diabatic/adiabatic systems.
    *   **Generator/Motor:** For charging and discharging.
*   **Advantages:**
    *   Can provide large-scale storage.
    *   Long lifespan of storage caverns.
    *   Lower initial cost compared to PHS for underground storage.
*   **Disadvantages:**
    *   Requires suitable geological formations for underground storage.
    *   Diabatic CAES still relies on fossil fuels, leading to emissions.
    *   Efficiency is moderate (around 40-50% for diabatic CAES).
    *   Adiabatic CAES technology is still developing.

**Example:** The Huntorf 300 MW CAES plant in Germany has been operational since 1978.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Explains the thermodynamic cycles and operational aspects of CAES.)
*   **Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.** (Discusses the practical implementation and challenges of CAES systems.)

**2.1.3 Flywheel Energy Storage (FES)**

**Key Concepts:**

*   **Working Principle:** Stores kinetic energy in a rotating rotor (flywheel). Electricity is converted to mechanical energy to accelerate the flywheel, and stored kinetic energy is converted back to electricity when needed.
*   **Components:**
    *   **Rotor:** The rotating mass, often made of high-strength materials like steel or composites.
    *   **Bearings:** Low-friction bearings (e.g., magnetic bearings) are crucial for efficient operation.
    *   **Motor/Generator:** Converts electrical energy to rotational kinetic energy and vice-versa.
    *   **Containment Structure:** To safely contain the flywheel in case of failure.
    *   **Power Conditioning System:** To interface with the grid.
*   **Advantages:**
    *   High power density (can deliver large amounts of power quickly).
    *   Fast response time (milliseconds).
    *   High charge/discharge cycle life.
    *   Environmentally friendly (no emissions).
    *   Good for grid stability and ancillary services.
*   **Disadvantages:**
    *   Limited energy storage capacity (stores energy for short durations, seconds to minutes).
    *   Self-discharge due to friction.
    *   High cost per unit of energy stored.
    *   Safety concerns due to high rotational speeds.

**Example:** Flywheels are used in uninterruptible power supplies (UPS) for critical facilities like data centers and in some grid applications for frequency regulation.

**Reference:**

*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Introduces FES as a method for dynamic energy storage and its application in power quality improvement.)

---

#### 2.2 Electrical Energy Storage

**2.2.1 Battery Energy Storage Systems (BESS)**

**Key Concepts:**

*   **Working Principle:** Stores energy in electrochemical cells. Electrical energy is converted into chemical energy during charging and released as electrical energy during discharging.
*   **Types of Batteries:**
    *   **Lead-Acid Batteries:** Mature technology, relatively inexpensive, but lower energy density and shorter lifespan.
    *   **Lithium-ion Batteries (Li-ion):** High energy density, high efficiency, longer lifespan, but more expensive and require thermal management. Different chemistries (e.g., LFP, NMC) offer varying characteristics.
    *   **Flow Batteries:** Store energy in liquid electrolytes circulating through electrochemical cells. Offers scalability in energy capacity independent of power capacity.
    *   **Sodium-Sulfur (NaS) Batteries:** High energy density, good for large-scale grid applications, but require high operating temperatures.
    *   **Redox Flow Batteries:** (e.g., Vanadium Redox Flow, Zinc-Bromine Flow) Electrolytes are stored in external tanks.
*   **Components:**
    *   **Battery Modules/Racks:** Contain multiple cells.
    *   **Battery Management System (BMS):** Monitors and controls cell voltage, temperature, and state of charge for safety and performance.
    *   **Power Conversion System (PCS) / Inverter:** Converts DC to AC power for grid connection.
    *   **Thermal Management System:** To maintain optimal operating temperatures.
*   **Advantages:**
    *   Modular and scalable.
    *   Fast response time.
    *   High round-trip efficiency (often >90% for Li-ion).
    *   Versatile applications (grid support, renewable integration, EVs).
    *   No geographical constraints.
*   **Disadvantages:**
    *   Higher capital cost compared to PHS.
    *   Limited lifespan (cycle life and calendar life).
    *   Degradation over time.
    *   Safety concerns (thermal runaway for some chemistries).
    *   Environmental impact of mining for materials (e.g., lithium, cobalt).

**Example:** Large-scale Li-ion battery farms are being deployed globally to support grid stability and integrate renewables. The Hornsdale Power Reserve in Australia, initially powered by Tesla's Megapack system, is a prominent example.

**Reference:**

*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Details the electrochemical principles of batteries and their application in power systems.)
*   **Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.** (Provides a comparative analysis of different battery technologies for power applications.)

**2.2.2 Supercapacitors (Ultracapacitors)**

**Key Concepts:**

*   **Working Principle:** Stores energy electrostatically by accumulating charge at the interface between an electrode and an electrolyte. Unlike batteries, there is no chemical reaction involved.
*   **Components:**
    *   **Electrodes:** High surface area materials (e.g., activated carbon).
    *   **Electrolyte:** Conductive medium.
    *   **Separator:** Prevents short circuits between electrodes.
    *   **Power Conditioning System:**
*   **Advantages:**
    *   Extremely fast charge and discharge rates.
    *   Very long cycle life (millions of cycles).
    *   High power density.
    *   Wide operating temperature range.
*   **Disadvantages:**
    *   Low energy density (stores much less energy than batteries).
    *   Lower voltage per cell.
    *   Higher cost per unit of energy stored.
    *   Higher self-discharge rate compared to batteries.

**Example:** Supercapacitors are often used in hybrid electric vehicles for regenerative braking and in power systems for short-duration power quality applications or to supplement batteries.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Covers advanced electrical storage technologies, including supercapacitors.)

---

#### 2.3 Thermal Energy Storage (TES)

**Key Concepts:**

*   **Working Principle:** Stores thermal energy by heating or cooling a storage medium.
*   **Types of TES:**
    *   **Sensible Heat Storage:** Storing heat by changing the temperature of a storage material without changing its phase.
        *   **Storage Materials:** Water, molten salts, rocks, concrete.
    *   **Latent Heat Storage:** Storing heat by changing the phase of a storage material (e.g., solid to liquid, liquid to gas). This offers higher energy density.
        *   **Storage Materials:** Phase Change Materials (PCMs) like paraffin waxes, hydrated salts, and eutectics.
    *   **Thermochemical Heat Storage:** Storing heat through reversible chemical reactions. Offers very high energy density but is complex.
*   **Advantages:**
    *   Can be integrated with solar thermal power plants, concentrated solar power (CSP), and industrial processes.
    *   Can provide heat or cooling when needed.
    *   Can improve the efficiency of power generation cycles.
*   **Disadvantages:**
    *   Lower round-trip efficiency for conversion back to electricity.
    *   Can be bulky.
    *   Temperature limitations for some materials.

**Example:** Molten salt storage is commonly used in Concentrated Solar Power (CSP) plants to store solar heat and generate electricity even after sunset.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Provides in-depth coverage of TES technologies, particularly for solar thermal applications.)
*   **Nagpal, G. R., & Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.** (Discusses TES in the context of enhancing the flexibility and efficiency of power plants.)

---

#### 2.4 Chemical Energy Storage

**Key Concepts:**

*   **Working Principle:** Stores energy in chemical bonds. The energy is released through chemical reactions.
*   **Hydrogen Storage:**
    *   **Production:** Electrolysis of water using renewable electricity.
    *   **Storage:** Compressed gas, liquefied gas, or in solid-state materials (metal hydrides, chemical hydrides).
    *   **Utilization:** Fuel cells (producing electricity and water), combustion (producing heat and water).
*   **Synthetic Fuels:** Producing fuels like ammonia or methanol from hydrogen and carbon dioxide, which can then be stored and used like conventional fuels.
*   **Advantages:**
    *   High energy density (especially for hydrogen).
    *   Long-term storage capability.
    *   Potential for decarbonization.
*   **Disadvantages:**
    *   Production efficiency can be low (e.g., electrolysis).
    *   Storage and transportation of hydrogen can be challenging and energy-intensive.
    *   Costly technologies.

**Example:** Green hydrogen produced using renewable energy is seen as a key enabler for decarbonizing various sectors, including power generation.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Explores emerging energy storage concepts, including hydrogen as an energy carrier.)

---

### 3. Applications of Energy Storage Systems in Power Plants

This section relates to **CO1: Explain the layout, components and working of steam, gas, hydro, and nuclear power plants (Knowledge Level: K2)** by showing how storage integrates with these systems, and **CO4: Explain the working of various energy storage systems (Knowledge Level: K2)**.

*   **Renewable Energy Firming:**
    *   **Solar PV and Wind:** Storing excess energy when generation is high and discharging when demand exceeds generation or when the resource is unavailable (e.g., night for solar, no wind).
*   **Grid Stability and Ancillary Services:**
    *   **Frequency Regulation:** Rapidly injecting or absorbing energy to maintain grid frequency. Batteries and flywheels are particularly effective.
    *   **Voltage Support:** Supplying or absorbing reactive power to maintain voltage levels.
    *   **Spinning Reserve:** Providing standby generation capacity that can be quickly brought online.
*   **Peak Shaving and Load Leveling:**
    *   **Peak Shaving:** Reducing the need for expensive peaking power plants by discharging stored energy during peak demand hours.
    *   **Load Leveling:** Shifting electricity consumption from peak to off-peak hours, improving the utilization of baseload power plants.
*   **Transmission and Distribution Deferral:**
    *   Installing storage at strategic locations can alleviate congestion on transmission and distribution lines, deferring costly upgrades.
*   **Black Start Capability:**
    *   Some storage systems (like batteries) can provide the necessary power to start up conventional power plants after a blackout.

**Reference:**

*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Discusses the operational flexibility that energy storage provides to different types of power plants.)
*   **Nagpal, G. R., & Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers.** (Explores the economic and operational benefits of integrating storage into power system planning.)

---

### 4. Economics of Energy Storage

This section relates to **CO5: Discuss the economics of power generation and pollution from power plants and their effect on the environment (Knowledge Level: K2)**.

**Key Concepts:**

*   **Capital Costs:** Initial investment for purchasing and installing the storage system.
*   **Operating Costs:** Maintenance, operational personnel, and any required consumables.
*   **Round-Trip Efficiency:** The ratio of energy discharged to energy charged, impacting the cost of energy delivered.
*   **Cycle Life/Lifespan:** How many charge-discharge cycles the system can endure or its expected operational life.
*   **Energy Capacity (kWh/MWh) vs. Power Capacity (kW/MW):** Different storage technologies have different cost structures and performance characteristics in terms of how much energy they can store versus how quickly they can deliver it.
*   **Market Value of Services:** The revenue generated from providing grid services (e.g., capacity payments, energy arbitrage, ancillary services).
*   **Levelized Cost of Storage (LCOS):** A metric to compare the cost of different storage technologies over their lifetime, taking into account capital, operating costs, and performance. LCOS = (Total Lifetime Costs) / (Total Lifetime Energy Throughput).

**Economic Benefits:**

*   **Reduced Electricity Bills:** Through peak shaving and load shifting.
*   **Revenue Generation:** From providing grid services.
*   **Increased Renewable Energy Penetration:** By making renewables more dispatchable, reducing curtailment.
*   **Deferral of Grid Infrastructure Upgrades:** By managing peak loads locally.

**Reference:**

*   **Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education.** (Analyzes the economic factors influencing the deployment of various power generation and storage technologies.)
*   **Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd.** (Discusses cost-benefit analysis and economic viability studies for energy storage projects.)

---

### 5. Environmental Impact of Energy Storage

This section also relates to **CO5: Discuss the economics of power generation and pollution from power plants and their effect on the environment (Knowledge Level: K2)**.

**Key Considerations:**

*   **Manufacturing:** The environmental impact of mining raw materials (lithium, cobalt, rare earths for magnets, etc.) for batteries and other components. This can include habitat destruction, water pollution, and energy-intensive extraction processes.
*   **Operation:**
    *   **CAES (Diabatic):** Combustion of natural gas leads to greenhouse gas emissions.
    *   **PHS:** Land use changes, impact on aquatic ecosystems, and potential methane release from reservoirs.
    *   **BESS:** While operational emissions are zero, the energy required to manufacture them, and their thermal management systems (if they use refrigerants), can have an environmental footprint.
*   **End-of-Life:**
    *   **Recycling and Disposal:** Proper recycling of batteries and other components is crucial to recover valuable materials and prevent hazardous waste. Many materials are toxic if not handled properly.
    *   Developing efficient and cost-effective recycling processes is a significant challenge.

**Mitigation Strategies:**

*   **Sustainable Sourcing of Materials:** Ethical and environmentally responsible mining practices.
*   **Developing Recyclable Technologies:** Designing storage systems with recyclability in mind.
*   **Improving Manufacturing Processes:** Reducing energy and material consumption.
*   **Advancing Adiabatic/Isothermal CAES and Hydrogen Storage:** To eliminate fossil fuel dependence in storage operations.
*   **Lifecycle Assessment (LCA):** To comprehensively evaluate the environmental impact from cradle to grave.

**Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education.** (Touches upon the sustainability aspects and future trends in energy storage technologies.)

---

### 6. Important Points to Remember

*   Energy storage is not a single technology but a portfolio of diverse solutions.
*   The choice of storage technology depends on the application, required duration, power output, cost, and site-specific constraints.
*   PHS is the most mature large-scale storage technology, but geographically limited.
*   Batteries (especially Li-ion) are rapidly evolving and becoming crucial for grid flexibility and renewable integration.
*   CAES offers large-scale storage but often requires specific geology and can involve fossil fuels (diabatic).
*   Flywheels and supercapacitors are ideal for high-power, short-duration applications and grid stability services.
*   TES is vital for integrating solar thermal power and for industrial heat management.
*   Chemical storage, particularly hydrogen, holds promise for long-duration storage and decarbonization but faces significant technological and cost hurdles.
*   The economic viability of energy storage is improving due to falling technology costs and increasing value of grid services.
*   Addressing the environmental impact of storage manufacturing and end-of-life management is critical for sustainable deployment.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the working principle of Pumped Hydro Storage (PHS) and list its main advantages and disadvantages. (CO4, K2)

**Answer:**
*   **Working Principle:** PHS utilizes two reservoirs at different elevations. During off-peak hours, electricity powers pumps to move water from the lower reservoir to the upper reservoir. During peak hours, water is released from the upper reservoir, flows through a penstock to a turbine, generating electricity.
*   **Advantages:** Mature technology, large capacity, long lifespan, high round-trip efficiency, provides ancillary services.
*   **Disadvantages:** Requires specific geography, high initial cost, environmental impact, long construction time.

**Question 2:**
Compare and contrast Lithium-ion batteries and compressed air energy storage (CAES) in terms of their operational principles, typical applications, and key environmental considerations. (CO4, K2; CO5, K2)

**Answer:**
*   **Lithium-ion Batteries:**
    *   **Principle:** Electrochemical energy storage in cells.
    *   **Applications:** Grid-scale storage for renewables, EVs, UPS, frequency regulation.
    *   **Environmental:** Zero operational emissions, but manufacturing impact (mining), disposal/recycling challenges.
*   **Compressed Air Energy Storage (CAES):**
    *   **Principle:** Stores energy as compressed air in underground caverns or tanks.
    *   **Applications:** Large-scale grid energy storage, load leveling.
    *   **Environmental:** Diabatic CAES uses natural gas (GHG emissions); Adiabatic CAES aims to eliminate this. Requires suitable geology.

**Question 3:**
A pumped hydro storage system has an upper reservoir capacity of $500,000 \text{ m}^3$ and an average head of $100 \text{ m}$. The overall efficiency of the pumping and generating process (including motor-generator and turbine efficiencies) is 75%. If electricity costs $0.10/kWh$ for pumping and can be sold at $0.20/kWh$ when generating, calculate the net profit per full cycle of storing and generating all $500,000 \text{ m}^3$ of water.
(CO2, K3 - adapted for storage context; CO4, K2)

**Solution:**
1.  **Volume of water (V):** $500,000 \text{ m}^3$
2.  **Density of water ($\rho$):** $1000 \text{ kg/m}^3$
3.  **Head (h):** $100 \text{ m}$
4.  **Acceleration due to gravity (g):** $9.81 \text{ m/s}^2$
5.  **Overall Efficiency ($\eta$):** 75% or 0.75
6.  **Cost of electricity for pumping ($C_{pump}$):** $0.10/kWh$
7.  **Revenue from generation ($R_{gen}$):** $0.20/kWh$

*   **Potential Energy stored in the water (Joules):**
    $PE = mgh = (\rho \times V) \times g \times h$
    $PE = (1000 \text{ kg/m}^3 \times 500,000 \text{ m}^3) \times 9.81 \text{ m/s}^2 \times 100 \text{ m}$
    $PE = 500,000,000 \text{ kg} \times 9.81 \text{ m/s}^2 \times 100 \text{ m}$
    $PE = 4.905 \times 10^{11} \text{ J}$

*   **Energy to be generated (kWh):**
    $E_{generated\_theoretical} = \frac{PE}{3.6 \times 10^6 \text{ J/kWh}}$
    $E_{generated\_theoretical} = \frac{4.905 \times 10^{11} \text{ J}}{3.6 \times 10^6 \text{ J/kWh}} \approx 136,250 \text{ kWh}$

*   **Actual energy generated (kWh) due to efficiency:**
    $E_{generated\_actual} = E_{generated\_theoretical} \times \eta$
    $E_{generated\_actual} = 136,250 \text{ kWh} \times 0.75 \approx 102,187.5 \text{ kWh}$

*   **Cost of electricity to pump this energy (kWh):**
    To generate $102,187.5 \text{ kWh}$ with 75% efficiency, the energy pumped must be:
    $E_{pumped} = \frac{E_{generated\_actual}}{\eta} = \frac{102,187.5 \text{ kWh}}{0.75} = 136,250 \text{ kWh}$
    *Note: This is the same as the theoretical energy generated; the efficiency factor is already accounted for in the generation calculation.*
    The energy that needs to be supplied by the grid to pump the water to achieve this potential energy is $E_{pumped} = 136,250 \text{ kWh}$.

*   **Cost of pumping:**
    $Cost_{pump} = E_{pumped} \times C_{pump}$
    $Cost_{pump} = 136,250 \text{ kWh} \times 0.10 \text{ $/kWh}$
    $Cost_{pump} = 13,625$

*   **Revenue from generation:**
    $Revenue_{gen} = E_{generated\_actual} \times R_{gen}$
    $Revenue_{gen} = 102,187.5 \text{ kWh} \times 0.20 \text{ $/kWh}$
    $Revenue_{gen} = 20,437.5$

*   **Net Profit:**
    $Net Profit = Revenue_{gen} - Cost_{pump}$
    $Net Profit = 20,437.5 - 13,625$
    $Net Profit = 6,812.5$

**Answer:** The net profit per full cycle is $6,812.5.

**Question 4:**
Discuss how energy storage systems can contribute to the integration of renewable energy sources like solar and wind into the power grid, addressing the challenge of intermittency. (CO4, K2)

**Answer:**
Renewable sources like solar and wind are intermittent. Energy storage systems help overcome this by:
1.  **Capturing Excess Generation:** When solar or wind output is high, excess electricity can be stored (e.g., in batteries or pumped hydro).
2.  **Providing Power During Low/No Generation:** Stored energy can be discharged when solar is not shining or wind is not blowing, ensuring a continuous supply.
3.  **Smoothing Output:** Storage can smooth out rapid fluctuations in renewable generation, making the power output more stable and predictable for the grid operator.
4.  **Arbitrage:** Storing energy when prices are low (due to high renewable generation) and selling it when prices are high.

---
This concludes the study notes for Energy Storage. Ensure you review the textbooks and reference materials for deeper understanding and additional details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
