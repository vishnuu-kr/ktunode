---
title: "Air washer"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f87"
status: "completed"
scrapedAt: "2026-05-20T18:17:37.640Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Air Washer

This module delves into the behavior of moist air and its manipulation, focusing on air washers as a key component in air conditioning systems.

## 1. Introduction to Air Washers

An air washer is a device used to condition air by bringing it into direct contact with water. It's a versatile piece of equipment capable of performing several functions simultaneously, making it crucial in various HVAC applications.

**Key Concepts:**

*   **Direct Contact:** Air is passed through a spray of water droplets.
*   **Moist Air Properties:** The interaction between air and water alters the temperature, humidity, and purity of the air.
*   **Functions:** Cooling, humidifying, dehumidifying, and cleaning of air.

**References:**

*   **Arora C.P (4th edition/2021):** Discusses air washers as a method for air conditioning, detailing their thermodynamic principles.
*   **Ahmadul Ameen (2020):** Provides a practical overview of air washer applications and design considerations.
*   **Jones W P (5th edition/2001):** Explains the role of air washers in achieving desired air conditions and their limitations.

## 2. Working Principle of an Air Washer

The core principle of an air washer is based on the mass and heat transfer between the air and water.

**Process:**

1.  **Air Inlet:** Moist air enters the air washer.
2.  **Water Spray:** Water is sprayed from nozzles, creating a fine mist.
3.  **Contact:** As the air passes through the water spray, it comes into intimate contact with the water droplets.
4.  **Heat and Mass Transfer:**
    *   **Evaporation:** If the water is colder than the air's adiabatic saturation temperature, water evaporates, cooling the air and increasing its humidity.
    *   **Condensation:** If the water is warmer than the dew point of the air, water vapor condenses from the air onto the water droplets, warming the air and decreasing its humidity.
    *   **Absorption:** Water can absorb soluble impurities from the air.
    *   **Impaction/Inertial Impingement:** Larger dust particles in the air are trapped by the water droplets.
5.  **Air Outlet:** Conditioned air leaves the washer.
6.  **Water Re-circulation/Drainage:** The water, now laden with heat and impurities, is collected at the bottom and either recirculated (after filtration and potentially cooling) or drained.

**Diagrammatic Representation:**

(Imagine a rectangular chamber with water spray nozzles at the top, air entering from one side, and a sump at the bottom. Water is recirculated via a pump and filter.)

## 3. Types of Air Washer Operations

Air washers can be designed and operated to achieve different air conditioning goals.

### 3.1. Adiabatic Cooling and Humidification

This is the most common operation.

**Conditions:**

*   Water temperature is lower than the air's wet-bulb temperature.
*   Water temperature is higher than the air's dew point temperature.

**Process:**

*   Water evaporates into the air.
*   This evaporation process absorbs latent heat from the air, causing the air temperature to drop.
*   The air becomes saturated or closer to saturation, meaning its humidity ratio increases.
*   The dry-bulb temperature of the air decreases, while the wet-bulb temperature remains constant (adiabatic process).
*   The final condition of the air will be on the adiabatic saturation line on the psychrometric chart.

**Example:** In hot and dry climates, an air washer can be used to cool and humidify the incoming air, improving occupant comfort.

**References:**

*   **Arora S. C. and S. Domkundwar (2018):** Provides detailed psychrometric analysis of adiabatic cooling processes.
*   **Kothandaraman (2023):** Utilizes psychrometric charts to illustrate adiabatic cooling and humidification.

### 3.2. Cooling and Dehumidification

This operation is more complex and requires specific design considerations.

**Conditions:**

*   Water temperature is lower than the air's dew point temperature.
*   Water temperature is also below the desired final air dew point.

**Process:**

*   Air is cooled below its dew point.
*   This causes moisture to condense out of the air and be absorbed by the water.
*   The air's humidity ratio decreases.
*   Simultaneously, the air is cooled in temperature.
*   This process is **not adiabatic** as sensible and latent heat are removed from the air. The water temperature will rise as it absorbs this heat.

**Design Considerations:**

*   **Multiple Stages:** Often achieved in multi-stage air washers or with a separate cooling coil before or after the washer.
*   **Water Temperature Control:** The water must be kept at a temperature below the dew point of the air entering the washer. This typically requires a chilled water system.

**Example:** Used in humid climates where both cooling and dehumidification are needed, such as in industrial processes or certain commercial buildings.

**References:**

*   **Stoecker & Jons (2nd edition):** Explains the principles of dehumidification using cooling coils and air washers.
*   **ASHRAE Handbook:** Provides extensive data and design guidelines for dehumidification systems.

### 3.3. Heating and Humidification

This is less common for air washers alone and is usually achieved in combination with other equipment.

**Conditions:**

*   Water temperature is higher than the air's dry-bulb temperature.

**Process:**

*   Warm water is sprayed.
*   Heat is transferred from the water to the air, increasing the air's dry-bulb temperature.
*   Water evaporates, increasing the air's humidity ratio.

**Example:** Typically achieved using a hot water spray or steam injection. Often combined with preheating coils.

### 3.4. Heating and Dehumidification

This is generally not achievable with a standard air washer, as bringing air into contact with water, especially warmer water, tends to increase humidity. This process is usually accomplished by passing air over a hot, dry surface or through a desiccant material.

## 4. Air Washer Components and Design

A typical air washer consists of several key components.

**Components:**

*   **Casing:** The main enclosure of the unit, designed to withstand water spray and airflow.
*   **Water Spray Nozzles:** Atomize the water into fine droplets for efficient contact with the air. Nozzle types can vary (e.g., spray nozzles, impact nozzles).
*   **Water Distribution System:** Pipes and manifolds to supply water to the nozzles.
*   **Water Collection Sump:** Collects the water after it has passed through the air.
*   **Water Pump:** Circulates the water from the sump to the nozzles.
*   **Water Strainer/Filter:** Removes impurities from the recirculated water to prevent nozzle clogging and maintain water quality.
*   **Drift Eliminators (Mist Eliminators):** Placed downstream of the spray section to remove entrained water droplets from the air, preventing them from being carried into the downstream ductwork.
*   **Air Inlet and Outlet:** Connections for air entry and exit.
*   **Drain Pan:** Collects any condensate in cooling and dehumidification mode.

**Design Considerations:**

*   **Air Velocity:** The speed at which air moves through the washer affects the contact time and efficiency.
*   **Water Flow Rate:** Sufficient water flow is needed to create an effective spray.
*   **Nozzle Design and Spacing:** Crucial for creating a uniform water mist.
*   **Water Temperature:** Dictates the type of conditioning achieved (cooling/humidifying or cooling/dehumidifying).
*   **Contact Time:** The duration for which air is in contact with the water spray.
*   **Number of Stages:** Multi-stage washers can achieve more precise control and greater conditioning.
*   **Material of Construction:** Must be resistant to corrosion from water and dissolved impurities.

**References:**

*   **Ahamadul Ameen (2020):** Discusses practical design aspects and component selection.
*   **Jones W P (5th edition/2001):** Covers detailed design principles and performance evaluation of air washers.

## 5. Psychrometric Analysis of Air Washer Processes

Understanding the psychrometric chart is essential for analyzing air washer performance.

**Key Principles:**

*   **Adiabatic Saturation Process:** During adiabatic cooling and humidification, the air follows a line of constant wet-bulb temperature (adiabatic saturation temperature). The dry-bulb temperature decreases, and the humidity ratio increases.
*   **Sensible Cooling/Heating:** Change in dry-bulb temperature only.
*   **Latent Cooling/Heating:** Change in humidity ratio only (condensation or evaporation).
*   **Total Cooling/Heating:** Combination of sensible and latent effects.

**Visualizing on the Psychrometric Chart:**

*   **Adiabatic Cooling & Humidification:** A straight line from the inlet air condition (DBT1, W1) to the outlet air condition (DBT2, W2) along a constant wet-bulb temperature line.
*   **Cooling & Dehumidification:** A path that moves downwards (cooler DBT) and leftwards (lower W). The water temperature must be below the dew point of the inlet air. The outlet condition will be on a line connecting the inlet air condition and the temperature of the cooled water (if it were a single-stage direct contact cooling coil).

**Example:**

Let's assume the following for an air washer operating in adiabatic cooling mode:

*   **Inlet Air:** DBT = 35°C, WBT = 25°C, Humidity Ratio (W1) = 0.020 kg/kg dry air.
*   **Air Washer Operation:** Adiabatic cooling and humidification.

**Analysis:**

*   The wet-bulb temperature remains constant at 25°C.
*   The air will be cooled along the 25°C WBT line until it reaches a saturated or near-saturated state.
*   Let's assume the air leaves at a DBT of 28°C. On the psychrometric chart, locate 35°C DBT and find the intersection with the 25°C WBT line. Follow this line to 28°C DBT.
*   The humidity ratio at the outlet (W2) will be approximately 0.018 kg/kg dry air (This is just an illustration; precise values require a chart).

**Equations (Simplified for Adiabatic Operation):**

*   **Sensible heat absorbed by evaporation:** $h_{fg} \times (W_2 - W_1)$
*   **Sensible heat removed by cooling:** $C_p \times (DBT_1 - DBT_2)$
*   **Energy Balance:** $C_p \times (DBT_1 - DBT_2) = h_{fg} \times (W_2 - W_1)$

Where:
*   $C_p$ is the specific heat of dry air (approx. 1.006 kJ/kg·K).
*   $h_{fg}$ is the latent heat of vaporization of water (approx. 2500 kJ/kg).

**References:**

*   **Arora C.P (4th edition/2021):** Dedicates significant portions to psychrometric calculations and their application to air washers.
*   **Kothandaraman (2023):** Provides clear explanations and examples of using psychrometric charts for air washer analysis.

## 6. Applications of Air Washers

Air washers are employed in a variety of applications due to their versatility.

**Common Applications:**

*   **Comfort Air Conditioning:**
    *   **Cooling and Humidification:** In arid regions where cooling and adding moisture to the air is desired.
    *   **Cooling and Dehumidification:** In humid regions, often in conjunction with cooling coils or as a primary means of dehumidification.
*   **Industrial Processes:**
    *   **Textile Mills:** To maintain specific humidity levels required for yarn and fabric processing.
    *   **Paper Mills:** To control humidity and prevent static electricity.
    *   **Printing Industry:** To control ink drying and paper dimensional stability.
    *   **Pharmaceutical Manufacturing:** To maintain sterile and controlled environments.
*   **Air Cleaning:** The water spray effectively removes dust, pollen, and other airborne particles, acting as an air cleaner. This is particularly useful in environments with high particulate matter.
*   **Evaporative Cooling:** A simpler form of air washing used in dry climates for direct cooling.

**References:**

*   **Ahamadul Ameen (2020):** Highlights diverse industrial and commercial applications.
*   **Jones W P (5th edition/2001):** Discusses specific industry requirements and how air washers meet them.

## 7. Advantages and Disadvantages of Air Washers

Like any HVAC component, air washers have their pros and cons.

**Advantages:**

*   **Simultaneous Conditioning:** Can perform multiple functions (cooling, humidifying, dehumidifying, cleaning) in a single unit.
*   **Effective Air Cleaning:** Removes particulate matter efficiently.
*   **Low Operating Cost (for adiabatic cooling):** In adiabatic operation, the primary energy is for water circulation and fan, which can be lower than refrigeration systems.
*   **Simple Design and Maintenance:** Generally less complex than refrigeration coils.
*   **Effective in High Humidity:** Can be very effective for dehumidification when operated correctly with chilled water.

**Disadvantages:**

*   **Water Quality:** Requires clean water. Scaling, algae growth, and bacterial contamination can be issues if water is not properly treated.
*   **Corrosion:** The presence of water can lead to corrosion of casing materials.
*   **Water Consumption:** Can consume significant amounts of water, especially in cooling and humidification modes.
*   **Limited Temperature Control (for adiabatic):** Adiabatic cooling is limited by the wet-bulb temperature.
*   **Potential for Oversaturation:** Risk of over-humidifying the air if not controlled properly.
*   **Condensate Management:** Requires proper drainage and handling of condensate in dehumidification mode.
*   **Space Requirements:** Can be larger than equivalent capacity cooling coils.

**References:**

*   **Arora S. C. and S. Domkundwar (2018):** Compares air washers with other air conditioning equipment.
*   **Stoecker & Jons (2nd edition):** Discusses operational limitations and maintenance aspects.

## 8. Practice Questions and Answers

---

**Question 1:** An air washer is used for adiabatic cooling. If the inlet air has a dry-bulb temperature of 30°C and a wet-bulb temperature of 22°C, what will be the approximate wet-bulb temperature of the leaving air?

**Answer:** In adiabatic cooling, the wet-bulb temperature remains constant. Therefore, the leaving air will also have a wet-bulb temperature of **22°C**.

---

**Question 2:** What is the primary function of drift eliminators in an air washer?

**Answer:** Drift eliminators are used to remove entrained **water droplets** from the air stream, preventing them from being carried into the ductwork and downstream equipment.

---

**Question 3:** Describe the conditions under which an air washer can achieve dehumidification.

**Answer:** An air washer can achieve dehumidification when the water temperature used in the spray is **lower than the dew point temperature of the incoming air**. This causes moisture to condense from the air onto the cooler water droplets.

---

**Question 4:** List three applications of air washers other than comfort air conditioning.

**Answer:**
1.  **Textile Mills:** For humidity control in yarn and fabric processing.
2.  **Paper Mills:** To control humidity and prevent static.
3.  **Printing Industry:** For ink drying and paper dimensional stability.
(Other valid answers include pharmaceutical manufacturing, food processing, etc.)

---

**Question 5 (Calculation):**
An air washer cools 1 kg/s of air from 35°C DBT and 20°C WBT to 28°C DBT. Assuming adiabatic operation, calculate the humidity ratio of the leaving air and the amount of water evaporated per second.

**Given:**
*   Mass flow rate of dry air ($\dot{m}_a$) = 1 kg/s
*   Inlet conditions: $DBT_1 = 35^\circ$C, $WBT_1 = 20^\circ$C
*   Outlet condition: $DBT_2 = 28^\circ$C
*   Operation: Adiabatic

**Solution:**

1.  **Find Inlet Humidity Ratio ($W_1$)**: From a psychrometric chart or formula, for air at 35°C DBT and 20°C WBT, $W_1 \approx 0.0136$ kg/kg dry air.

2.  **Outlet Wet-Bulb Temperature:** Since it's adiabatic operation, $WBT_2 = WBT_1 = 20^\circ$C.

3.  **Find Outlet Humidity Ratio ($W_2$)**: On the psychrometric chart, locate the intersection of 28°C DBT and 20°C WBT. This gives $W_2 \approx 0.0116$ kg/kg dry air.

4.  **Amount of Water Evaporated:** The change in humidity ratio represents the water evaporated per kg of dry air.
    Water evaporated per kg dry air = $W_1 - W_2 = 0.0136 - 0.0116 = 0.002$ kg/kg dry air.

    Total water evaporated per second = Water evaporated per kg dry air $\times \dot{m}_a$
    Total water evaporated per second = $0.002$ kg/kg dry air $\times 1$ kg/s = **0.002 kg/s**.

    *(Note: These humidity ratio values are approximate and depend on the specific psychrometric chart or calculator used. The principle remains the same.)*

---

## 9. Important Points to Remember

*   **Adiabatic Saturation Temperature:** The wet-bulb temperature is a key parameter for adiabatic cooling and humidification. The air will approach this temperature.
*   **Dehumidification requires water below the dew point.**
*   **Drift eliminators are crucial** to prevent water carryover.
*   **Water treatment** is essential to prevent scaling, corrosion, and biological growth.
*   Air washers are effective **air cleaners** due to the water spray.
*   The psychrometric chart is your best tool for **analyzing air washer processes**.

---

## 10. Alignment with Course Outcomes

*   **CO5 (Analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems):** This entire module directly addresses CO5. We've analyzed psychrometric processes of air washers, explained their working principles, and discussed their applications. The practice questions reinforce the ability to analyze these processes.
*   **CO1 (Define and describe the basic concepts and applications of refrigeration and air conditioning and analyse performance of ideal refrigeration cycles):** While this module focuses on air washers, understanding psychrometric principles (analyzing properties of moist air) is fundamental to air conditioning. Air washers are a key part of applied air conditioning systems.
*   **CO4 (Explain and Select Appropriate Refrigerants and System Components):** Understanding the function and limitations of air washers helps in selecting them as appropriate components for specific air conditioning needs.

This comprehensive study guide should provide a solid foundation for understanding air washers in the context of Refrigeration and Air Conditioning. Remember to refer to your textbooks for more detailed examples and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
