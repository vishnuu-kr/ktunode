---
title: "Types of evaporators and condensers"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 3: Refrigerants and refrigeration system components"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f7c"
status: "completed"
scrapedAt: "2026-05-20T18:17:30.578Z"
---
# Module 3: Refrigerants and Refrigeration System Components

## Topic: Types of Evaporators and Condensers

This module focuses on the essential components of a refrigeration system: the evaporator and the condenser. We will explore their functions, various types, and their selection criteria, ensuring a foundational understanding for analyzing and selecting appropriate components (CO1, CO4).

---

### 1. Introduction to Evaporators and Condensers

Both the evaporator and condenser are heat exchangers crucial for the vapor-compression refrigeration cycle. Their primary function is to facilitate the transfer of heat between the refrigerant and a surrounding medium.

**Key Concepts:**

*   **Heat Exchanger:** A device designed to efficiently transfer thermal energy from one fluid to another.
*   **Refrigerant:** A working fluid that undergoes phase changes (evaporation and condensation) to absorb and release heat.
*   **Vapor-Compression Refrigeration Cycle:** The most common type of refrigeration cycle, involving compression, condensation, expansion, and evaporation of a refrigerant.

---

### 2. The Evaporator

**Function:**
The evaporator is where the refrigerant absorbs heat from the space or substance to be cooled. It's the component responsible for producing the desired cooling effect. The refrigerant, in its low-pressure liquid-vapor mixture state, enters the evaporator and absorbs heat, causing it to vaporize completely into a low-pressure vapor.

**Thermodynamic Process:**
*   **Heat Absorption:** Refrigerant absorbs heat from the surrounding medium (e.g., air, water, food).
*   **Phase Change:** The absorbed heat causes the liquid refrigerant to boil and turn into a vapor.
*   **Superheating (Optional but desirable):** The vapor may absorb a small amount of additional heat to ensure it is completely dry before entering the compressor, preventing liquid slugging.

**Key Parameters:**
*   **Evaporating Temperature ($T_e$):** The temperature at which the refrigerant boils inside the evaporator. This is directly related to the desired cooling temperature.
*   **Evaporating Pressure ($P_e$):** The pressure at which the refrigerant boils inside the evaporator.
*   **Heat Duty:** The amount of heat absorbed by the refrigerant.

**Types of Evaporators:**

Based on the medium from which heat is absorbed and the construction, evaporators can be classified as follows:

#### 2.1. Based on the Medium of Heat Transfer:

*   **Air Coolers (or Dry Expansion Evaporators):** Used for cooling air. These are the most common type.
    *   **Finned Tube Evaporators:** Consist of tubes (often copper or aluminum) through which the refrigerant flows, with fins attached to increase the surface area for heat transfer with the air.
        *   **Applications:** Air conditioners (residential, commercial), refrigerators, freezers.
        *   **Example:** The coils found at the back of your refrigerator or in the indoor unit of a split AC.
        *   **Advantages:** High heat transfer rates, compact design.
        *   **Disadvantages:** Prone to frost formation, requires defrosting.
        *   **Referenced in:** Arora C.P. (4th ed.), Arora R.C. (4th printing), Jones W.P. (5th ed.) discuss heat transfer enhancement using fins.

    *   **Bare Tube Evaporators:** Consist of plain tubes without fins.
        *   **Applications:** Refrigerated display cases, some specialized industrial cooling applications where air velocity is high or fin fouling is an issue.
        *   **Advantages:** Less prone to fouling, simpler to clean.
        *   **Disadvantages:** Lower heat transfer coefficient compared to finned tubes.

*   **Liquid Coolers (or Flooded Evaporators):** Used for cooling liquids like water or brine.
    *   **Shell and Tube Evaporators:** A bundle of tubes carries the refrigerant (inside tubes), and the liquid to be cooled flows around the tubes (in the shell). This is a very common industrial design.
        *   **Applications:** Chillers for air conditioning systems, process cooling in industries.
        *   **Example:** Water chillers in large buildings.
        *   **Advantages:** Efficient heat transfer, can handle large cooling loads, relatively compact for their capacity.
        *   **Disadvantages:** More complex construction, potential for refrigerant leakage.
        *   **Referenced in:** Arora C.P. (4th ed.), Arora R.C. (4th printing) often detail shell and tube designs.

    *   **Shell and Coil Evaporators:** Refrigerant flows through a coiled tube submerged in the liquid to be cooled, which is contained within a shell.
        *   **Applications:** Often used for cooling water or ice making.
        *   **Advantages:** Simpler construction than shell and tube, good for moderate capacities.
        *   **Disadvantages:** Lower efficiency compared to shell and tube for very large loads.

    *   **Plate Evaporators (or Plate Heat Exchangers):** Consist of a series of corrugated metal plates, creating narrow channels for both refrigerant and the fluid being cooled.
        *   **Applications:** Industrial refrigeration, food processing, compact chilling systems.
        *   **Advantages:** High heat transfer efficiency, very compact, easy to clean and expand.
        *   **Disadvantages:** Prone to clogging if the fluid contains solids, can be expensive.
        *   **Referenced in:** Modern texts like Arora C.P. (4th ed.) and Jones W.P. (5th ed.) would cover plate heat exchangers.

#### 2.2. Based on Refrigerant Flow Arrangement:

*   **Direct Expansion (DX) Evaporators:** Refrigerant flows through the evaporator in a controlled manner, absorbing heat and evaporating.
    *   **Mechanism:** A thermostatic expansion valve (TXV) or capillary tube meters the refrigerant flow. The refrigerant typically enters as a low-quality vapor-liquid mixture and leaves as a superheated vapor.
    *   **Advantages:** Simpler system, less refrigerant charge required.
    *   **Disadvantages:** Superheat control can be critical; improper superheat can lead to compressor damage.
    *   **Examples:** Most domestic refrigerators, split ACs, window ACs.

*   **Flooded Evaporators:** The evaporator is kept nearly full of liquid refrigerant. Vapor is generated and rises to the top, separating from the liquid.
    *   **Mechanism:** Often uses a surge drum or accumulator to separate vapor and liquid. A level control mechanism ensures a constant liquid level.
    *   **Advantages:** High heat transfer coefficient as the tubes are wetted by liquid refrigerant, less superheating is required.
    *   **Disadvantages:** Requires a larger refrigerant charge, potential for liquid refrigerant to be carried over to the compressor if not properly designed, requires a surge drum.
    *   **Examples:** Large industrial chillers, some larger commercial applications.

---

### 3. The Condenser

**Function:**
The condenser is where the refrigerant releases the absorbed heat (from the evaporator) plus the heat of compression to a cooling medium. This causes the high-pressure refrigerant vapor to condense into a high-pressure liquid.

**Thermodynamic Process:**
*   **Heat Rejection:** Refrigerant rejects heat to the surrounding medium (e.g., air, water).
*   **Phase Change:** The refrigerant vapor condenses into a liquid.
*   **Subcooling (Optional but desirable):** The liquid refrigerant may be cooled further below its saturation temperature, increasing the efficiency of the expansion process.

**Key Parameters:**
*   **Condensing Temperature ($T_c$):** The temperature at which the refrigerant condenses inside the condenser. This is typically higher than the ambient temperature.
*   **Condensing Pressure ($P_c$):** The pressure at which the refrigerant condenses inside the condenser.
*   **Heat Rejection Duty:** The total heat rejected by the refrigerant.

**Types of Condensers:**

Based on the cooling medium used and the construction, condensers can be classified as follows:

#### 3.1. Based on the Cooling Medium:

*   **Air-Cooled Condensers:** Use ambient air as the cooling medium.
    *   **Finned Tube Condensers:** Similar to finned tube evaporators, but the refrigerant flows through the tubes, and air is blown over the fins to dissipate heat. Fans are used to move the air.
        *   **Applications:** Residential air conditioners, small commercial systems, refrigerators, car AC systems.
        *   **Example:** The outdoor unit of a split AC, the coils at the back of a refrigerator.
        *   **Advantages:** No need for a separate water supply, easy installation.
        *   **Disadvantages:** Efficiency depends heavily on ambient air temperature, can be noisy due to fans, requires significant space for airflow.
        *   **Referenced in:** Arora C.P. (4th ed.), Arora R.C. (4th printing), Jones W.P. (5th ed.), Ameen (2020) provide extensive details on air-cooled condensers.

    *   **Plate Condensers (Air-Cooled):** Less common for air-cooled, but can be designed using plates for air to pass over.

*   **Water-Cooled Condensers:** Use water as the cooling medium. Generally more efficient than air-cooled condensers, especially in warmer climates.
    *   **Shell and Tube Condensers:** The most common type. Refrigerant flows through the shell, and cooling water flows through the tubes.
        *   **Applications:** Large commercial and industrial air conditioning systems, large capacity chillers.
        *   **Example:** Condensers used in the central AC systems of large buildings.
        *   **Advantages:** High heat transfer efficiency, compact for their capacity, can operate with lower condensing temperatures, less dependent on ambient air temperature.
        *   **Disadvantages:** Requires a continuous supply of cooling water, which may need a cooling tower or a natural water source, risk of scaling or corrosion in the tubes if water quality is poor.
        *   **Referenced in:** Arora C.P. (4th ed.), Arora R.C. (4th printing), Jones W.P. (5th ed.) extensively cover shell and tube designs.

    *   **Shell and Coil Condensers:** Water flows through the coil, and refrigerant flows through the shell.
        *   **Applications:** Smaller water-cooled systems.
        *   **Advantages:** Simpler construction than shell and tube.
        *   **Disadvantages:** Lower heat transfer efficiency compared to shell and tube for larger capacities.

    *   **Double Pipe Condensers:** Consist of one pipe inside another. Refrigerant flows in one circuit, and cooling water in the other.
        *   **Applications:** Small capacity units, specialized applications.
        *   **Advantages:** Simple construction.
        *   **Disadvantages:** Low heat transfer surface area per unit volume, expensive for large capacities.

*   **Evaporative Condensers:** Combine the functions of a condenser and a cooling tower. Refrigerant flows through tubes which are sprayed with water. Air is drawn over the wet tubes, causing evaporation of the water, which cools the tubes and thus the refrigerant.
    *   **Applications:** Industrial refrigeration plants, where water availability is limited, or for efficiency gains.
    *   **Advantages:** More efficient than air-cooled condensers and more economical than water-cooled condensers (if cooling water is scarce), relatively compact compared to separate condenser and cooling tower.
    *   **Disadvantages:** Requires a water supply for spraying, can be susceptible to scaling and corrosion, higher maintenance than air-cooled.
    *   **Referenced in:** Arora C.P. (4th ed.), Stoecker & Jons discuss evaporative condensers as an integrated solution.

#### 3.2. Based on Refrigerant Flow Arrangement:

*   **Counterflow:** The cooling medium flows in the opposite direction to the refrigerant. This design generally offers better heat transfer efficiency and allows for greater subcooling.
*   **Parallel flow:** The cooling medium flows in the same direction as the refrigerant. Less common for condensers due to lower efficiency.

---

### 4. Selection Criteria for Evaporators and Condensers

The choice of evaporator and condenser depends on several factors:

*   **Cooling Capacity Required:** The size and type of heat exchanger must match the system's cooling load.
*   **Refrigerant Used:** Different refrigerants have different thermodynamic properties, influencing the design of the evaporator and condenser.
*   **Temperature Requirements:** The evaporating temperature dictates the evaporator design, while the condensing temperature (influenced by ambient conditions) dictates the condenser design.
*   **Availability and Cost of Cooling Medium:**
    *   If water is readily available and cheap, water-cooled condensers are often preferred for their efficiency.
    *   If water is scarce or expensive, air-cooled or evaporative condensers are better choices.
*   **Ambient Conditions:** Air temperature and humidity significantly impact the performance of air-cooled and evaporative condensers.
*   **Space Availability:** Some types (e.g., finned tube air-cooled condensers) require more space for airflow.
*   **Maintenance and Reliability:** Ease of cleaning, susceptibility to fouling, and overall system reliability are crucial considerations.
*   **Energy Efficiency:** The thermal performance of the heat exchanger directly impacts the overall system efficiency (COP).
*   **Cost:** Initial cost, operating cost, and maintenance cost are all important factors.

**Referenced in:** All textbooks and reference books provide guidance on selection criteria. For example, Jones W.P. (5th ed.) and the ASHRAE Handbooks offer detailed design considerations and selection guidelines.

---

### 5. Important Points to Remember

*   **Evaporator's role:** Absorbs heat from the cooled space, causing refrigerant to evaporate.
*   **Condenser's role:** Rejects heat to the surroundings, causing refrigerant to condense.
*   **Finned tubes** are common for air-to-refrigerant heat exchange to increase surface area.
*   **Shell and tube** designs are prevalent for liquid-to-refrigerant heat exchange, especially in industrial and large commercial applications.
*   **Air-cooled condensers** are suitable where water is scarce, while **water-cooled condensers** offer higher efficiency when water is available.
*   **Evaporative condensers** offer a compromise, providing better efficiency than air-cooled but requiring less water than standard water-cooled systems.
*   **DX evaporators** use expansion valves for refrigerant control, while **flooded evaporators** maintain a higher liquid refrigerant level.
*   Proper selection ensures optimal system performance, energy efficiency, and longevity.

---

### 6. Practice Questions and Exercises

**Question 1 (CO1, CO4 - Knowledge Level: K2):**
What is the primary function of an evaporator in a refrigeration system?
(a) To absorb heat from the refrigerated space.
(b) To reject heat to the atmosphere.
(c) To compress the refrigerant vapor.
(d) To expand the high-pressure liquid refrigerant.

**Answer:** (a) To absorb heat from the refrigerated space.

**Question 2 (CO4 - Knowledge Level: K2):**
Which type of condenser is generally preferred for its high efficiency when cooling water is readily available?
(a) Air-cooled condenser
(b) Evaporative condenser
(c) Water-cooled shell and tube condenser
(d) Finned tube condenser

**Answer:** (c) Water-cooled shell and tube condenser

**Question 3 (CO1, CO4 - Knowledge Level: K2, K3):**
Describe the main difference between a Direct Expansion (DX) evaporator and a Flooded evaporator in terms of refrigerant management and heat transfer characteristics.

**Answer:**
*   **DX Evaporator:** Refrigerant flow is metered by an expansion valve, and it evaporates as it travels through the tubes, leaving as a superheated vapor. Heat transfer is efficient, but precise superheat control is crucial to prevent compressor damage.
*   **Flooded Evaporator:** The evaporator shell is kept nearly full of liquid refrigerant. Vapor forms at the surface and separates. This provides excellent heat transfer as the tubes are constantly wetted by liquid. It requires a surge drum and a level control system, and a larger refrigerant charge.

**Question 4 (CO4 - Knowledge Level: K3):**
A commercial refrigeration system requires a cooling capacity of 10 tons. The ambient air temperature is expected to be around 35°C. Discuss the suitability of using an air-cooled condenser versus a water-cooled condenser for this application, considering both efficiency and practical aspects.

**Answer:**
For a 10-ton system with an ambient temperature of 35°C:
*   **Air-cooled condenser:** This would be a common choice, especially if water availability or cost is a concern. However, at 35°C ambient, an air-cooled condenser will operate at a higher condensing temperature and pressure, leading to reduced system efficiency (COP). The condenser will also likely be quite large to handle the heat rejection effectively.
*   **Water-cooled condenser:** If a reliable source of cooling water (e.g., from a cooling tower or well) is available and cost-effective, a water-cooled condenser would be more efficient. It can maintain a lower condensing temperature and pressure, thus improving the system's COP. The condenser unit itself might be more compact for its capacity.

**Conclusion:** While air-cooled is often simpler to install, a water-cooled condenser offers better performance and energy efficiency in this scenario, assuming water availability. The decision would ultimately depend on the specific site conditions and economic analysis.

**Question 5 (CO1 - Knowledge Level: K2):**
What is the purpose of fins on an evaporator or condenser?
(a) To increase the strength of the tubes.
(b) To reduce the amount of refrigerant needed.
(c) To increase the surface area for heat transfer.
(d) To improve the flow rate of the cooling medium.

**Answer:** (c) To increase the surface area for heat transfer.

---
These notes cover the fundamental types of evaporators and condensers used in refrigeration and air conditioning systems, their functions, and key selection factors, aligning with the stated learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
