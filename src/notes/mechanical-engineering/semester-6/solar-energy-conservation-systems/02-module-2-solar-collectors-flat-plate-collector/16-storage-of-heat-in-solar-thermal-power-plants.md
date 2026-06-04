---
title: "Storage of heat in solar thermal power plants"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bc8"
status: "completed"
scrapedAt: "2026-05-20T18:08:17.762Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 2: Solar Collectors: Flat Plate Collector

### Topic: Storage of Heat in Solar Thermal Power Plants

---

### 1. Introduction to Heat Storage in Solar Thermal Power Plants

Solar thermal power plants convert solar radiation into thermal energy, which is then used to generate electricity. A critical aspect of these plants is the ability to store this thermal energy for use when solar radiation is not available (e.g., at night or during cloudy periods). This storage capability enhances the reliability and dispatchability of solar thermal power.

**Key Concept:** Thermal energy storage (TES) is essential for overcoming the intermittent nature of solar energy and ensuring a continuous power supply from solar thermal power plants.

**Relation to Course Outcomes:**
*   **CO1 (Knowledge Level: K2):** Understanding the need for storage relates to the intermittency of solar energy, a foundational concept.
*   **CO2 (Knowledge Level: K1):** While this topic focuses on storage, it's directly linked to the output of solar collectors (flat plate collectors being a type) that generate the heat to be stored.

---

### 2. Why is Heat Storage Necessary?

*   **Intermittency of Solar Radiation:** Solar radiation is not constant. It varies with time of day, season, weather conditions (clouds), and geographical location.
*   **Matching Supply and Demand:** Storage allows the generated thermal energy to be used when needed, even if solar radiation is absent. This enables the plant to operate continuously or to dispatch power when electricity demand is high.
*   **Improving Plant Efficiency:** By storing excess heat generated during peak sunlight hours, plants can operate at higher average capacities and avoid curtailment of solar input.
*   **Grid Stability and Reliability:** Dispatchable solar thermal power plants with storage contribute to grid stability by providing a predictable and controllable power source, reducing reliance on fossil fuels for baseload power.

**Example:** A solar thermal power plant with a parabolic trough collector might collect a large amount of heat during the day. If not stored, this heat would be wasted once the sun sets. By storing it in a molten salt system, the plant can continue to generate steam and electricity throughout the night.

**Important Point to Remember:** Heat storage is the key to transforming solar thermal energy from an intermittent source into a reliable and dispatchable power source.

---

### 3. Types of Heat Storage Systems in Solar Thermal Power Plants

Heat storage systems can be broadly categorized based on the physical principle they employ. For solar thermal power plants, the most common methods involve storing sensible heat or latent heat.

#### 3.1 Sensible Heat Storage

This is the most common and mature technology. It involves storing heat by raising the temperature of a material without changing its phase.

*   **Mechanism:** Heat is absorbed by the storage medium, causing its temperature to increase. When energy is needed, the medium is cooled, releasing the stored heat.
*   **Storage Media:**
    *   **Molten Salts:** (e.g., a mixture of nitrates like NaNO₃, KNO₃, NaNO₂). This is the most widely used medium in large-scale solar thermal power plants (like parabolic trough and power tower systems).
        *   **Advantages:** High volumetric heat capacity, good thermal conductivity, operates at high temperatures (suitable for steam generation), relatively low cost, non-flammable.
        *   **Disadvantages:** Corrosive at high temperatures, requires careful handling and maintenance, freezing point needs to be managed.
        *   **Example:** Crescent Dunes Solar Energy Project in Nevada uses molten salt (a blend of 60% sodium nitrate and 40% potassium nitrate) stored in insulated tanks.
    *   **Water/Steam:** Can be used for low-temperature applications or as a secondary storage medium in conjunction with other collectors. High-temperature water storage is challenging due to pressure requirements.
    *   **Rocks/Gravel/Sand:** Suitable for low to medium-temperature applications (e.g., solar air heaters). Heat is stored in the solid matrix and the air passing through it.
    *   **Thermal Oils:** Can be used in systems employing flat plate or evacuated tube collectors, but typically have lower operating temperatures than molten salts.
*   **Design Considerations:**
    *   **Temperature Range:** The specific application dictates the required operating temperature range.
    *   **Storage Capacity:** Determined by the energy storage requirement (e.g., hours of backup power).
    *   **Heat Transfer:** Efficient heat exchangers are needed for charging and discharging the storage medium.
    *   **Insulation:** High-quality insulation is crucial to minimize heat losses.
    *   **Tank Design:** Tanks must withstand high temperatures and pressures, and be constructed from materials compatible with the storage medium.

**Reference:** Sukhatme (Chapter 12) discusses sensible heat storage materials and their properties for solar thermal applications. Goswami, Kreith, and Kreider (Chapter 10) also provide in-depth analysis of thermal energy storage technologies.

#### 3.2 Latent Heat Storage (Phase Change Materials - PCMs)

This method utilizes materials that absorb or release large amounts of energy during a phase transition (e.g., solid to liquid, liquid to gas) at a nearly constant temperature.

*   **Mechanism:** When the PCM is heated to its melting point, it absorbs latent heat of fusion, melting into a liquid. Upon cooling, it solidifies, releasing this latent heat.
*   **Storage Media (PCMs):**
    *   **Organic Compounds:** Paraffins, fatty acids, glycols.
        *   **Advantages:** Low vapor pressure, non-corrosive, good stability, can have melting points over a wide range.
        *   **Disadvantages:** Low thermal conductivity, lower volumetric latent heat storage compared to some inorganics, can be flammable.
    *   **Inorganic Compounds:** Salt hydrates (e.g., MgCl₂·6H₂O, CaCl₂·6H₂O), metallic alloys.
        *   **Advantages:** Higher latent heat storage capacity, higher thermal conductivity than organics.
        *   **Disadvantages:** Can undergo phase segregation and supercooling, potential corrosion issues, higher vapor pressure.
    *   **Eutectics:** Mixtures of compounds that melt at a single temperature, often lower than the melting points of the individual components.
*   **Advantages of Latent Heat Storage:**
    *   **High Energy Density:** Can store significantly more energy in a given volume or mass compared to sensible heat storage, especially if the temperature difference is small.
    *   **Isothermal Storage:** Heat is absorbed or released at a nearly constant temperature, which can be advantageous for applications requiring specific temperature levels.
*   **Disadvantages of Latent Heat Storage:**
    *   **Thermal Conductivity:** Many PCMs have poor thermal conductivity, requiring careful heat exchanger design (e.g., using extended surfaces or incorporating conductive fillers).
    *   **Phase Segregation:** In some PCMs (especially salt hydrates), the solid and liquid phases can separate over multiple thermal cycles, reducing storage performance.
    *   **Corrosion:** Certain PCMs can be corrosive to common container materials.
    *   **Cost:** PCMs can be more expensive than sensible heat storage materials.

**Reference:** Tiwari (Chapter 10) dedicates a significant section to phase change materials for thermal energy storage and their applications.

#### 3.3 Thermochemical Heat Storage

This method involves reversible chemical reactions to store thermal energy. Heat is supplied to drive an endothermic reaction, storing energy in chemical bonds. The reverse exothermic reaction releases this heat.

*   **Mechanism:** Involves storing heat through changes in chemical composition. Examples include dehydration/hydration of salt hydrates or decomposition/synthesis of materials.
*   **Advantages:**
    *   **Very High Energy Density:** Potentially higher than both sensible and latent heat storage.
    *   **Long-Term Storage:** Stored energy can be retained indefinitely with negligible losses, as it's stored chemically.
*   **Disadvantages:**
    *   **Technological Immaturity:** Thermochemical storage systems are generally less developed and more complex than sensible or latent heat storage.
    *   **Cost:** High initial costs are often associated with complex reactor designs and catalysts.
    *   **Reversibility and Cycle Life:** Ensuring the long-term reversibility and stability of the chemical reactions can be challenging.

**Example:** Decomposition of calcium hydroxide to calcium oxide and water at high temperatures, and the reverse reaction (hydration) releasing heat.

**Reference:** While not heavily detailed for flat plate collectors in Sukhatme's initial chapters, advanced TES technologies like thermochemical storage are covered in more comprehensive engineering texts like Goswami, Kreith, and Kreider (Chapter 10, advanced sections).

---

### 4. Key Components of a Thermal Storage System

Regardless of the storage medium, a thermal storage system typically consists of:

*   **Storage Medium:** The material that stores the thermal energy.
*   **Storage Container/Tank:** A vessel designed to hold the storage medium, insulated to minimize heat loss.
*   **Heat Exchanger:** A device that facilitates the transfer of heat between the solar collector fluid and the storage medium (charging) and between the storage medium and the power cycle fluid (discharging).
*   **Pumps and Piping:** To circulate the fluids.
*   **Control System:** To manage the charging and discharging processes.

---

### 5. Design Considerations for Storage in Solar Thermal Power Plants

*   **Storage Duration:** How many hours or days of energy storage are required? This determines the size of the storage system. A common target for solar thermal power plants is to provide power for 4-6 hours after sunset.
*   **Charging and Discharging Rates:** The storage system must be able to absorb heat from the collectors at the required rate and deliver it to the power block at the required rate.
*   **Temperature Requirements:** The storage system must operate within the temperature range required by the power block (e.g., to produce steam at the desired pressure and temperature).
*   **Heat Losses:** Minimizing heat loss from the storage tank is crucial for efficiency. This involves effective insulation and minimizing tank surface area.
*   **Cost:** The cost-effectiveness of the storage system is a major factor in the overall plant economics.
*   **Safety and Environmental Impact:** The chosen storage medium and system design must be safe to operate and have minimal environmental impact.

**Example:** A parabolic trough power plant designed to operate for 10 hours at night will require a significantly larger storage system than one designed for 3 hours of backup.

**Reference:** Sukhatme (Chapter 12) discusses the performance and economics of various storage configurations.

---

### 6. Integration with Solar Thermal Power Plants (e.g., Parabolic Trough, Power Tower)

*   **Parabolic Trough Systems:** Typically use molten salt as the storage medium. Solar collectors heat a heat transfer fluid (HTF), which then heats the molten salt in a heat exchanger to charge the storage tanks. The hot molten salt is then pumped through another heat exchanger to generate steam for the turbine.
*   **Power Tower Systems:** Often use molten salt or sometimes sand/rocks. A field of heliostats focuses sunlight onto a receiver on top of a tower. The heat from the receiver is transferred to the storage medium.

**Note:** While flat plate collectors are mentioned in the module title, their typical operating temperatures are generally too low for direct integration into large-scale thermal power plants generating electricity via steam turbines. They are more commonly used for low-temperature heating applications (e.g., domestic hot water, space heating, industrial process heat). However, understanding their limitations highlights why other collector types are preferred for power generation and why high-temperature storage is essential in that context.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary reason for incorporating heat storage systems in solar thermal power plants?
    a) To increase the efficiency of solar collectors.
    b) To improve the aesthetics of the power plant.
    c) To overcome the intermittency of solar radiation and provide dispatchable power.
    d) To reduce the amount of land required for the plant.

**Answer 1:** c) To overcome the intermittency of solar radiation and provide dispatchable power.

**Question 2:** Which type of heat storage is most commonly used in large-scale solar thermal power plants generating electricity and why?
    a) Latent Heat Storage using PCMs, due to its high energy density.
    b) Sensible Heat Storage using molten salts, due to its high operating temperatures, good volumetric heat capacity, and established technology.
    c) Thermochemical Storage, due to its very high energy density and long-term storage capability.
    d) Sensible Heat Storage using rocks, due to its low cost.

**Answer 2:** b) Sensible Heat Storage using molten salts, due to its high operating temperatures, good volumetric heat capacity, and established technology. (Molten salts are well-suited for the high temperatures required for steam generation in power cycles).

**Question 3:** Briefly describe the difference between sensible heat storage and latent heat storage.

**Answer 3:**
    *   **Sensible Heat Storage:** Involves storing heat by changing the temperature of a material without changing its phase. The amount of heat stored is proportional to the specific heat capacity of the material and the temperature change.
    *   **Latent Heat Storage:** Involves storing heat by utilizing the phase change of a material (e.g., melting or freezing) at a constant temperature. This phase change absorbs or releases a significant amount of energy (latent heat).

**Question 4:** Identify one advantage and one disadvantage of using Phase Change Materials (PCMs) for heat storage.

**Answer 4:**
    *   **Advantage:** High energy storage density in a narrow temperature range.
    *   **Disadvantage:** Often have low thermal conductivity, which can impede heat transfer.

---

### 8. Important Points to Remember

*   **Storage is Key:** Heat storage transforms solar thermal energy from an intermittent source into a reliable energy source.
*   **Molten Salts Dominate:** For large-scale electricity generation via steam turbines, sensible heat storage using molten salts is the most prevalent and mature technology.
*   **PCM Potential:** Latent heat storage with PCMs offers high energy density but faces challenges in heat transfer and material stability for large-scale applications.
*   **Temperature Matters:** The operating temperature of the storage system must match the requirements of the power generation cycle.
*   **Minimizing Losses:** Effective insulation is critical for the efficiency of any thermal storage system.

---

### 9. Alignment with Course Outcomes

*   **CO1 (K2):** This topic directly supports understanding the need for storage due to solar intermittency, a core concept in solar energy.
*   **CO2 (K1):** While focused on storage, it builds upon the output of collectors (like flat plate, though less common for power plants) by addressing what happens to the collected heat.
*   **CO3 (K3):** Understanding storage systems, their materials, and design considerations is essential for applying thermal analysis and designing integrated solar thermal systems.
*   **CO4 (K2):** The discussion of storage duration, cost, and efficiency directly relates to economic feasibility and plant design, influencing calculations of plant economy.

---
This study note aims to provide a comprehensive understanding of heat storage in solar thermal power plants, linking it to the broader context of solar energy conservation systems and aligning with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
