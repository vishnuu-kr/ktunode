---
title: "Ocean Energy – Devices for Wave Energy conversion, Ocean Thermal Energy Conversion (OTEC): Principle of OTEC system, Methods of OTEC power generation – Open Cycle (Claude cycle), Closed Cycle (Anderson cycle) and Hybrid cycle (block diagram description of OTEC);"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 3: Ocean Energy – Devices for Wave Energy conversion, Ocean Thermal Energy Conversion (OTEC): Principle of OTEC system, Methods of OTEC power generation – Open Cycle (Claude cycle), Closed Cycle (Anderson cycle) and Hybrid cycle (block diagram description of OTEC);"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463ae5"
status: "completed"
scrapedAt: "2026-05-20T18:07:48.150Z"
---
# Renewable Energy Engineering: Module 3 - Ocean Energy

This module delves into the fascinating world of ocean energy, focusing on two primary conversion methods: Wave Energy Conversion (WEC) and Ocean Thermal Energy Conversion (OTEC). We will explore the principles, devices, and power generation methods associated with these vast, untapped resources.

**Course Outcome Alignment:** This module directly addresses **CO3: Explain the ocean energy and conversion devices and different Geothermal sources (Knowledge Level: K2)**.

---

## 1. Devices for Wave Energy Conversion (WEC)

Ocean waves are a significant and consistent source of renewable energy, driven primarily by wind. Wave energy converters (WECs) are devices designed to harness this kinetic and potential energy and convert it into usable electricity. The efficiency and effectiveness of WECs depend on various factors, including wave climate, water depth, and the device's design.

### 1.1. Principles of Wave Energy Conversion

*   **Kinetic Energy:** The movement of water particles within a wave as it propagates.
*   **Potential Energy:** The elevation difference of water particles relative to their mean sea level due to the wave crests and troughs.
*   **Conversion Mechanism:** WECs utilize various mechanisms to capture this energy, typically involving the relative motion of a submerged and surface component, or the force of waves on a structure. This motion is then used to drive a generator, either directly or indirectly through a hydraulic or pneumatic system.

### 1.2. Classification of Wave Energy Converters

WECs can be broadly classified based on their operating principle, location, and the type of energy they primarily harness.

#### 1.2.1. Based on Operating Principle

*   **Attenuators:** Long, floating structures oriented parallel to the wave direction. They consist of multiple segments connected by hinges, which flex as waves pass, driving hydraulic pumps at the hinges to generate electricity.
    *   **Example:** Pelamis (though now defunct, it was a prominent example).
    *   **Key Concept:** Harnesses the differential motion along its length.

*   **Point Absorbers:** Buoys or floating structures that are relatively small compared to the wavelength. They absorb energy from waves coming from all directions by oscillating vertically or rotationally.
    *   **Key Concept:** Efficiently captures energy from waves that "overwhelm" it. Often utilize a spar buoy with a submerged damper or a floating structure with a reaction plate.
    *   **Example:** OPT PowerBuoy, Archimedes Wave Swing.

*   **Oscillating Water Columns (OWCs):** Shoreline or offshore structures that capture waves, which then force air in a chamber to move back and forth. This airflow drives a bidirectional turbine (e.g., Wells turbine) to generate electricity.
    *   **Key Concept:** Utilizes the wave-induced rise and fall of the water level to compress and decompress air.
    *   **Example:** LIMPET (Land Installed Marine Power Energy Transformer) in Scotland, Mutriku wave power plant in Spain.

*   **Overtopping Devices (Terminators):** Structures that capture water from waves as they break over a ramp or reservoir. The water stored at a higher level is then released through a low-head turbine to generate electricity.
    *   **Key Concept:** Relies on waves "overtopping" a barrier.
    *   **Example:** Wave Dragon, Wave Dragon prototype.

*   **Submerged Pressure Differential Devices:** Devices placed on the seabed that harness the pressure fluctuations caused by passing waves.
    *   **Key Concept:** Exploits the cyclic change in hydrostatic pressure.
    *   **Example:** SeaGen (although it's a tidal turbine, the principle of harnessing fluid motion is similar).

#### 1.2.2. Based on Location

*   **Shoreline Devices:** Installed on the coast, often integrated into breakwaters or cliffs.
    *   **Advantages:** Easier access for maintenance, potentially lower installation costs.
    *   **Disadvantages:** Limited by coastal wave conditions, potential environmental impact on coastal ecosystems.
*   **Nearshore Devices:** Deployed in relatively shallow water, typically within a few kilometers of the coast.
*   **Offshore Devices:** Deployed in deeper water, further from the coast.
    *   **Advantages:** Access to stronger and more consistent wave energy.
    *   **Disadvantages:** Higher installation and maintenance costs, more challenging in terms of survivability in harsh conditions.

### 1.3. Key Considerations for WEC Design and Deployment

*   **Survivability:** WECs must withstand extreme wave conditions, storms, and the corrosive marine environment.
*   **Efficiency:** Maximizing the energy captured from incident waves.
*   **Cost-Effectiveness:** Achieving a competitive levelized cost of energy (LCOE).
*   **Environmental Impact:** Minimizing negative effects on marine life and coastal processes.
*   **Grid Connection:** Reliable transmission of generated power to the shore.

**Important Point to Remember:** The choice of WEC technology depends heavily on the specific site conditions and the economic viability of the project. No single WEC technology is universally optimal.

---

## 2. Ocean Thermal Energy Conversion (OTEC)

Ocean Thermal Energy Conversion (OTEC) is a technology that harnesses the temperature difference between warm surface waters and cold deep ocean waters to produce electricity. This temperature gradient, known as the Ocean Thermal Energy Gradient (OTEG), is a continuous and vast energy resource, particularly in tropical regions.

### 2.1. Principle of OTEC System

*   **Temperature Difference (ΔT):** The core principle relies on a sufficient temperature difference between the warm surface water and the cold deep water. A minimum ΔT of around 20°C (36°F) is generally required for practical OTEC systems.
*   **Thermodynamic Cycle:** OTEC systems operate on a thermodynamic cycle, similar to conventional thermal power plants but using a much lower temperature difference. The working fluid (e.g., ammonia, Freon, or even seawater itself) is vaporized by the warm surface water, drives a turbine, and is then condensed by the cold deep water.

### 2.2. Methods of OTEC Power Generation

OTEC systems are primarily categorized into three types based on how the working fluid interacts with the ocean water.

#### 2.2.1. Open Cycle (Claude Cycle)

*   **Princ:** Uses warm surface seawater directly as the working fluid. The warm seawater is flash-evaporated in a low-pressure chamber to produce steam. This steam then drives a low-pressure turbine. The low-pressure steam is then condensed by pumping cold deep seawater through a heat exchanger. The condensed water is desalinated and can be a valuable byproduct.
*   **Working Fluid:** Warm Seawater.
*   **Process:**
    1.  **Evaporation:** Warm surface seawater (e.g., 25-30°C) is supplied to a low-pressure evaporator. Due to the reduced pressure, a portion of the water flashes into steam.
    2.  **Turbine Expansion:** The low-pressure steam expands through a turbine, generating electricity.
    3.  **Condensation:** The exhaust steam from the turbine is condensed by flowing cold deep seawater (e.g., 4-5°C) through a condenser.
    4.  **Desalination:** The condensed fresh water is collected and can be used for drinking or irrigation.
*   **Block Diagram Description:**
    ```
    [Warm Seawater Intake] ---> [Low-Pressure Evaporator] ---> [Low-Pressure Turbine] ---> [Generator] ---> [Grid]
                                         ^                               |
                                         |                               |
                                         |                               v
    [Cold Deep Seawater Intake] ---> [Condenser] <---------------------
                                         |
                                         v
                                     [Discharge]
                                         |
                                         v
                                    [Fresh Water] (Byproduct)
    ```
*   **Advantages:**
    *   Produces desalinated water as a byproduct, which can be highly valuable.
    *   Simpler turbine design due to low pressure.
*   **Disadvantages:**
    *   Lower thermal efficiency due to the large volume of water that needs to be vaporized.
    *   Potential for biofouling on the evaporator surfaces.
    *   Requires very large volumes of seawater for evaporation.

#### 2.2.2. Closed Cycle (Anderson Cycle)

*   **Princ:** Uses a closed-loop working fluid with a low boiling point (e.g., ammonia, propane, or Freon) that circulates continuously. Warm surface seawater heats the working fluid in an evaporator, causing it to vaporize. The high-pressure vapor drives a turbine, generating electricity. The vapor is then condensed by cold deep seawater in a condenser, and the liquid working fluid is pumped back to the evaporator.
*   **Working Fluid:** Typically Ammonia (NH3) or similar refrigerants.
*   **Process:**
    1.  **Evaporation:** Warm surface seawater flows through a heat exchanger (evaporator), transferring heat to the working fluid and causing it to vaporize.
    2.  **Turbine Expansion:** The high-pressure vapor of the working fluid expands through a turbine, driving a generator.
    3.  **Condensation:** The exhaust vapor from the turbine flows through another heat exchanger (condenser), where cold deep seawater removes heat, condensing the working fluid back into a liquid.
    4.  **Pumping:** The liquid working fluid is pumped back to the evaporator to restart the cycle.
*   **Block Diagram Description:**
    ```
    [Warm Seawater Intake] ---> [Evaporator (Heat Exchanger)] ---> [Working Fluid Vapor] ---> [Turbine] ---> [Generator] ---> [Grid]
                                                                              ^                               |
                                                                              |                               |
                                                                              |                               v
    [Cold Deep Seawater Intake] ---> [Condenser (Heat Exchanger)] <------------ [Working Fluid Liquid] --------
                                               ^                                                              |
                                               |                                                              |
                                               ----------------------------------------------------------------- [Pump]
    ```
*   **Advantages:**
    *   Higher thermal efficiency compared to the open cycle due to the working fluid's properties and operating pressures.
    *   The working fluid is contained, reducing the risk of leaks and contamination.
*   **Disadvantages:**
    *   The working fluid (e.g., ammonia) can be toxic and flammable, requiring careful handling and containment.
    *   Requires two separate heat exchangers (evaporator and condenser), increasing complexity and cost.
    *   Does not produce desalinated water as a byproduct.

#### 2.2.3. Hybrid Cycle

*   **Princ:** Combines aspects of both the open and closed cycles to potentially achieve higher efficiencies or overcome some of their limitations. One common hybrid approach involves using the warm surface seawater to vaporize a secondary working fluid (like ammonia) which then drives a turbine. This process can potentially improve the thermal efficiency while still producing desalinated water as a byproduct through an intermediate step.
*   **Working Fluid:** Varies, often involves a working fluid like ammonia in conjunction with seawater.
*   **Process (One common type):**
    1.  **Seawater Evaporation (Low Pressure):** Warm surface seawater is used to create a low-pressure vapor (e.g., from heated desalinated water).
    2.  **Working Fluid Evaporation:** This low-pressure vapor then indirectly heats a secondary working fluid (e.g., ammonia) in a heat exchanger, causing it to vaporize.
    3.  **Turbine Expansion:** The vaporized working fluid drives a turbine and generator.
    4.  **Condensation:** Cold deep seawater condenses the working fluid.
    5.  **Desalinated Water:** The vapor from the initial seawater evaporation is condensed to produce desalinated water.
*   **Block Diagram Description (Conceptual):**
    ```
    [Warm Seawater Intake] ---> [Pre-Heater/Evaporator 1] ---> [Low-Pressure Vapor]
                                                                      |
                                                                      v
    [Working Fluid (e.g., Ammonia)] ---> [Evaporator 2 (Heat Exchanger)] ---> [Working Fluid Vapor] ---> [Turbine] ---> [Generator] ---> [Grid]
                                                                                             ^                               |
                                                                                             |                               |
                                                                                             |                               v
    [Cold Deep Seawater Intake] ---> [Condenser (Heat Exchanger)] <------------------------- [Working Fluid Liquid] --------
                                                                                             |
                                                                                             v
                                                                                       [Discharge]
                                                                                             |
                                                                                             v
                                                                                        [Fresh Water] (Byproduct)
    ```
*   **Advantages:**
    *   Can potentially offer improved thermal efficiency over open cycle.
    *   Can produce desalinated water as a byproduct.
*   **Disadvantages:**
    *   More complex system design and operation.
    *   Higher capital costs.

### 2.3. Key Components of OTEC Systems

*   **Warm Water Intake Pipe:** Draws warm surface seawater.
*   **Cold Water Intake Pipe:** Draws cold deep seawater from the ocean floor.
*   **Evaporator:** Where the working fluid is vaporized (or seawater is vaporized in open cycle).
*   **Turbine and Generator:** Converts the kinetic energy of the vapor into electrical energy.
*   **Condenser:** Where the vapor is condensed back into liquid using cold deep seawater.
*   **Pumps:** Circulate warm and cold seawater, and the working fluid (in closed/hybrid cycles).
*   **Working Fluid:** The substance used to transfer heat and drive the turbine (if applicable).

### 2.4. Practical Considerations for OTEC

*   **Capital Cost:** OTEC plants are expensive to build, especially the large intake pipes for cold water.
*   **Thermal Efficiency:** The thermodynamic efficiency of OTEC is inherently low (typically 2-3%) due to the small temperature difference.
*   **Biofouling:** The growth of marine organisms on heat exchanger surfaces reduces their efficiency and requires regular cleaning.
*   **Environmental Impact:** Discharge of warmed and cooled water needs careful consideration to avoid negative impacts on marine ecosystems.
*   **Location:** OTEC is only feasible in tropical and subtropical regions where a significant temperature gradient exists year-round.

**Reference Integration:**
*   **Sukhatme & Nayak (2015):** Provides fundamental principles of thermal collection and storage, which are relevant to understanding the heat exchange processes in OTEC.
*   **Tiwari & Ghosal (2007):** Offers a broad overview of renewable energy sources, likely covering the basic principles of OTEC and its potential.
*   **Tester et al. (2006):** Discusses sustainable energy choices, which would include the economic and environmental trade-offs associated with OTEC.
*   **Kothari (2011):** Likely covers emerging technologies, including OTEC as a significant renewable resource.
*   **Çengel, Cimbala (2019):** Provides fundamental knowledge of thermodynamics and fluid mechanics, crucial for understanding the working cycles of OTEC.

---

## 3. Practice Questions and Answers

**Question 1:** Which type of wave energy converter is a long, floating structure oriented parallel to the wave direction and uses the flexing motion between its segments to generate power?
    a) Point Absorber
    b) Oscillating Water Column
    c) Attenuator
    d) Overtopping Device

**Answer:** c) Attenuator

**Question 2:** In an Open Cycle OTEC system, what is used as the working fluid?
    a) Ammonia
    b) Propane
    c) Warm Seawater
    d) Cold Seawater

**Answer:** c) Warm Seawater

**Question 3:** What is the primary advantage of a Closed Cycle OTEC system over an Open Cycle OTEC system in terms of thermal efficiency?
    a) Open cycle has higher efficiency due to direct steam generation.
    b) Closed cycle uses a working fluid with better thermodynamic properties at these temperature ranges.
    c) Open cycle requires less pumping power.
    d) Closed cycle generates desalinated water as a byproduct.

**Answer:** b) Closed cycle uses a working fluid with better thermodynamic properties at these temperature ranges.

**Question 4:** Briefly explain the working principle of an Oscillating Water Column (OWC) for wave energy conversion.

**Answer:** An OWC structure captures waves, causing the water level inside a chamber to rise and fall. This movement forces air in the chamber to flow back and forth through a turbine, which generates electricity.

**Question 5:** What is the minimum temperature difference (ΔT) generally required for a viable OTEC system?

**Answer:** Approximately 20°C (36°F).

---

## 4. Important Points to Remember

*   **Wave Energy:** Harnesses kinetic and potential energy of ocean waves; diverse device types exist (Attenuators, Point Absorbers, OWCs, Overtopping).
*   **OTEC:** Leverages the temperature difference between warm surface and cold deep ocean waters.
*   **OTEC Cycles:**
    *   **Open Cycle:** Uses warm seawater directly as working fluid, produces desalinated water.
    *   **Closed Cycle:** Uses a contained working fluid (e.g., ammonia), potentially higher efficiency, no desalinated water byproduct.
    *   **Hybrid Cycle:** Combines features of both, aiming for improved efficiency and byproduct potential.
*   **OTEC Challenges:** High capital costs, low thermal efficiency, biofouling, location specificity.
*   **Wave Energy Challenges:** Survivability, efficiency, cost-effectiveness, environmental impact.

---

This comprehensive set of notes covers the fundamental aspects of wave energy conversion devices and Ocean Thermal Energy Conversion (OTEC) systems, aligning with the learning objectives and course outcomes specified.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
