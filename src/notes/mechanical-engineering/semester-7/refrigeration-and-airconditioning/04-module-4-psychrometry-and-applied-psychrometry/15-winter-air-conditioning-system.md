---
title: "Winter air-conditioning system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f8d"
status: "completed"
scrapedAt: "2026-05-20T18:17:42.001Z"
---
# Module 4: Psychrometry and Applied Psychrometry - Winter Air-Conditioning System

This module focuses on understanding the thermodynamic properties of moist air and how they are applied in air conditioning systems, particularly during winter conditions.

**Course Outcomes Addressed:**

*   **CO5:** Analyze properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)

---

## 1. Introduction to Winter Air-Conditioning

Winter air-conditioning aims to maintain a comfortable indoor environment during cold weather. This involves controlling both the **temperature** and the **humidity** of the air. Unlike summer air-conditioning, the primary goal in winter is to *heat* and *humidify* the incoming fresh air and recirculated air to comfortable levels.

**Key Concepts:**

*   **Comfort:** The state of thermal, psychological, and physical satisfaction with the thermal environment.
*   **Indoor Air Quality (IAQ):** The quality of air inside a building, which can affect the health and comfort of occupants.
*   **Ventilation:** The process of supplying or removing air, by natural or mechanical means, to or from any space. Essential for IAQ.

---

## 2. Psychrometric Properties of Air in Winter

Understanding the state of air using psychrometric charts is crucial for designing winter air-conditioning systems.

**Key Properties:**

*   **Dry Bulb Temperature (DBT):** The temperature of air measured by a thermometer freely exposed to the air, not influenced by humidity.
*   **Wet Bulb Temperature (WBT):** The temperature air would have if cooled adiabatically to saturation by evaporation of its water content, with the latent heat supplied by the air itself.
*   **Dew Point Temperature (DPT):** The temperature at which the air becomes saturated with water vapor.
*   **Specific Humidity ($\omega$):** The mass of water vapor per unit mass of dry air.
*   **Relative Humidity (RH):** The ratio of the actual partial pressure of water vapor to the saturation pressure of water vapor at the same temperature, expressed as a percentage.
*   **Enthalpy (h):** The total heat content of the air-moisture mixture.

**Psychrometric Chart (for Winter Conditions):**

*   The psychrometric chart plots these properties. In winter, the air is typically **cold** and **dry** (low DBT, low RH).
*   The process of heating and humidifying will move the air state point from the lower-left region of the chart towards the upper-right.

**Reference:**

*   **Arora C.P. (2021) - Refrigeration and Air Conditioning:** Chapter on Psychrometry will provide detailed charts and properties.
*   **Kothandaraman (2023) - Data book- Refrigeration tables and charts:** Essential for looking up specific psychrometric values.

---

## 3. Winter Air-Conditioning Processes

The primary processes involved in winter air-conditioning are:

### 3.1. Heating

*   **Sensible Heating:** Increasing the temperature of the air without changing its moisture content. This is the most common heating method.
    *   **Example:** Passing air over a hot surface (e.g., a coil with hot water or steam, or an electric heater).
    *   **Psychrometric Representation:** A horizontal line on the psychrometric chart, moving to the right (increasing DBT).

*   **Humidification:** Increasing the moisture content of the air. This is often necessary because heating cold outdoor air significantly reduces its relative humidity, leading to dry indoor conditions.
    *   **Methods:**
        *   **Evaporative Humidification:** Introducing water vapor into the air through evaporation.
            *   **Steam Humidifier:** Injecting steam directly into the airstream.
            *   **Water Spray Humidifier (Atomizer):** Spraying fine water droplets that evaporate.
            *   **Wetted Pad Humidifier:** Passing air through a pad kept moist by a water spray.
        *   **Adiabatic Humidification:** Adding moisture without adding sensible heat. The enthalpy remains constant, but both DBT and WBT decrease.
            *   **Psychrometric Representation:** A diagonal line moving down and to the right on the psychrometric chart (DBT decreases, $\omega$ increases, WBT decreases).
        *   **Non-Adiabatic Humidification (e.g., with steam injection):** Adding moisture and sensible heat.
            *   **Psychrometric Representation:** A line moving up and to the right on the psychrometric chart (DBT increases, $\omega$ increases, WBT increases).

### 3.2. Recirculation and Outdoor Air Mixing

*   Winter air-conditioning systems typically mix a certain amount of fresh outdoor air with recirculated indoor air.
*   **Purpose of Outdoor Air:** To maintain good indoor air quality by diluting indoor pollutants and providing fresh oxygen.
*   **Purpose of Recirculated Air:** To reduce the energy required for heating and humidifying, as the recirculated air is already warmer and has more moisture than outdoor air.

**Mixing Process:**

*   When two air streams at different states are mixed, the resulting state lies on the straight line connecting the two initial states on the psychrometric chart. The position of the mixed state depends on the ratio of the masses of the two streams.
*   **Example:** Mixing cold, dry outdoor air with warm, humid recirculated air will result in a mixture that is warmer and more humid than the outdoor air but cooler and drier than the recirculated air.

**Reference:**

*   **Arora S. C. and Domkundwar (2018) - A Course in Refrigeration and Air Conditioning:** Detailed explanations of these processes and their psychrometric representation.

---

## 4. Typical Winter Air-Conditioning System Layout and Processes

A typical system involves several components that perform the necessary conditioning processes.

**System Components:**

1.  **Mixing Box/Chamber:** Where outdoor air and recirculated air are mixed.
2.  **Filter:** Removes dust and other particulate matter from the air.
3.  **Pre-heater (Optional):** A small heater to prevent freezing of moisture in humidifiers or to raise the air temperature slightly before entering the main heating coil.
4.  **Humidifier:** Adds moisture to the air.
5.  **Main Heater (Heating Coil):** Heats the air to the desired supply air temperature.
6.  **Fan:** Circulates the conditioned air to the conditioned space.
7.  **Cooling Coil (Dehumidifier - for cooling load):** Though primarily a winter system, some systems might have a cooling coil for occasional dehumidification if the space has internal latent loads that exceed the latent capacity of heating and humidifying. However, for pure winter comfort, this is less common.

**Typical Psychrometric Process (Winter):**

Let's consider a common scenario:

*   **Outdoor Air State (1):** Cold and dry (e.g., 5°C DBT, 60% RH).
*   **Recirculated Air State (2):** Comfortable indoor conditions (e.g., 20°C DBT, 40% RH).
*   **Mixing:** Outdoor air (State 1) mixes with recirculated air (State 2). Let's assume a mix of 20% outdoor air and 80% recirculated air. The mixed air state (3) will lie on the line connecting State 1 and State 2.
*   **Humidification:** The mixed air (State 3) is humidified to a desired relative humidity (e.g., 50% RH) at a temperature slightly below the final supply temperature. Let's call this state (4). This process might be adiabatic or non-adiabatic depending on the humidifier.
*   **Heating:** The humidified air (State 4) is then heated to the final supply air temperature (State 5) required for the conditioned space (e.g., 25°C DBT, 50% RH). This is sensible heating.

**Diagrammatic Representation on Psychrometric Chart:**

1.  Start at the outdoor air condition (e.g., 5°C DBT, 60% RH).
2.  Move along the line connecting State 1 to State 2 (recirclulated air) to find State 3 (mixed air). The exact location of State 3 depends on the mixing ratio.
3.  From State 3, move upwards and to the right to State 4 (after humidification). If adiabatic humidification, the line would be diagonal downwards and to the right (in terms of DBT) while increasing moisture. If steam injection, it's upwards and to the right.
4.  From State 4, move horizontally to the right to State 5 (supply air condition).

**Reference:**

*   **Jones (2001) - Air Conditioning Engineering:** Provides detailed schematics and process flow for various AC systems, including winter operations.

---

## 5. Calculations in Winter Air-Conditioning

Calculations are essential for determining the required heating and humidification loads.

**5.1. Heat Load Calculation**

*   **Sensible Heat Load:** The amount of heat that needs to be added to raise the air temperature.
    *   $Q_s = \dot{m}_a \times c_{pa} \times (T_{supply,DB} - T_{mixed,DB})$
        *   $Q_s$: Sensible heat load (W or kW)
        *   $\dot{m}_a$: Mass flow rate of dry air (kg/s)
        *   $c_{pa}$: Specific heat of dry air ($\approx$ 1.005 kJ/kg·K)
        *   $T_{supply,DB}$: Supply air dry bulb temperature (°C)
        *   $T_{mixed,DB}$: Mixed air dry bulb temperature (°C)

*   **Latent Heat Load (Humidification):** The amount of heat (latent heat of vaporization) required to add moisture to the air.
    *   $Q_l = \dot{m}_a \times h_{fg} \times (\omega_{supply} - \omega_{mixed})$
        *   $Q_l$: Latent heat load (W or kW)
        *   $h_{fg}$: Latent heat of vaporization of water (kJ/kg) - can be taken as $\approx$ 2501 kJ/kg at 0°C, varies slightly with temperature.
        *   $\omega_{supply}$: Specific humidity of supply air (kg water/kg dry air)
        *   $\omega_{mixed}$: Specific humidity of mixed air (kg water/kg dry air)

*   **Total Heat Load:** $Q_{total} = Q_s + Q_l$

**5.2. Air Flow Rate Calculation**

*   The required air flow rate is typically specified based on the cooling/heating load and the temperature difference.
*   Volumetric flow rate ($V$): Often given in m³/s or cfm (cubic feet per minute).
*   Mass flow rate ($\dot{m}_a$): $\dot{m}_a = \rho_a \times V$, where $\rho_a$ is the density of dry air. At standard conditions (20°C, 1 atm), $\rho_a \approx 1.2$ kg/m³.

**5.3. Humidifier Capacity**

*   The humidifier needs to add $(\omega_{supply} - \omega_{4})$ kg of water per kg of dry air.

**Example Calculation:**

Consider a room requiring a supply air of 25°C DBT and 50% RH.
Outdoor air is 5°C DBT and 60% RH.
Recirculated air is 20°C DBT and 40% RH.
System uses 20% outdoor air and 80% recirculated air.
The air is humidified adiabatically to 45% RH before final heating to the supply condition.
Mass flow rate of air is 1 kg/s (for simplicity).

**Steps:**

1.  **Find properties from Psychrometric Chart or Tables:**
    *   Outdoor air (5°C DBT, 60% RH): $\omega_1 = 0.0038$ kg/kg, $h_1 = 17.5$ kJ/kg
    *   Recirculated air (20°C DBT, 40% RH): $\omega_2 = 0.0056$ kg/kg, $h_2 = 37.2$ kJ/kg
    *   Supply air (25°C DBT, 50% RH): $\omega_5 = 0.0106$ kg/kg, $h_5 = 51.7$ kJ/kg

2.  **Calculate Mixed Air Condition (State 3):**
    *   Mass flow of outdoor air: $\dot{m}_{a1} = 0.2 \times 1 = 0.2$ kg/s
    *   Mass flow of recirculated air: $\dot{m}_{a2} = 0.8 \times 1 = 0.8$ kg/s
    *   Total mass flow: $\dot{m}_{a3} = 1.0$ kg/s
    *   Specific humidity of mixed air: $\omega_3 = \frac{\dot{m}_{a1} \omega_1 + \dot{m}_{a2} \omega_2}{\dot{m}_{a1} + \dot{m}_{a2}} = \frac{0.2 \times 0.0038 + 0.8 \times 0.0056}{1.0} = 0.00524$ kg/kg
    *   DBT of mixed air: $T_{DB3} = \frac{\dot{m}_{a1} T_{DB1} + \dot{m}_{a2} T_{DB2}}{\dot{m}_{a1} + \dot{m}_{a2}} = \frac{0.2 \times 5 + 0.8 \times 20}{1.0} = 17$ °C
    *   Mixed air condition: 17°C DBT, $\omega_3 = 0.00524$ kg/kg (approx. 43% RH at 17°C)

3.  **Humidification (Adiabatic):**
    *   Air is humidified adiabatically to 45% RH at the mixed air DBT of 17°C.
    *   State 3: 17°C DBT, $\omega_3 = 0.00524$ kg/kg.
    *   At 17°C, saturation specific humidity is approx. 0.0125 kg/kg.
    *   State 4: Target RH = 45%.
    *   $\omega_4 = 0.45 \times \omega_{sat} @ 17°C = 0.45 \times 0.0125 = 0.005625$ kg/kg.
    *   Since it's adiabatic humidification, WBT remains constant. WBT of mixed air (State 3) can be found (approx. 10.5°C). The DBT will decrease slightly.
    *   Using the psychrometric chart or equations, at 17°C DBT, $\omega_3 = 0.00524$ kg/kg, the WBT is approximately 10.5°C. For adiabatic humidification, WBT of State 4 is also 10.5°C.
    *   At 10.5°C WBT and 45% RH, the DBT of State 4 is approximately 14.8°C.
    *   So, State 4 is approximately 14.8°C DBT and $\omega_4 = 0.005625$ kg/kg.

4.  **Heating:**
    *   Sensible heating from State 4 (14.8°C DBT, $\omega_4=0.005625$ kg/kg) to State 5 (25°C DBT, $\omega_5=0.0106$ kg/kg).
    *   Sensible Heat Load per kg/s of air: $Q_s = 1.005 \times (25 - 14.8) = 10.25$ kW
    *   Latent Heat Load for humidification: $Q_l = 1.005 \times 2501 \times (0.005625 - 0.00524) = 0.955$ kW (This is the humidification load, not part of the heating coil load).
    *   The heating coil adds sensible heat only. The total enthalpy change from State 4 to State 5 is $h_5 - h_4$.
    *   Let's find $h_4$: $h_4 \approx c_{pa} T_{DB4} + \omega_4 h_{fg} = 1.005 \times 14.8 + 0.005625 \times 2501 \approx 14.87 + 14.07 = 28.94$ kJ/kg.
    *   Total Heat Load (from mixed air to supply): $Q_{total} = \dot{m}_a (h_5 - h_3) = 1 \times (51.7 - (1.005 \times 17 + 0.00524 \times 2501)) = 51.7 - (17.085 + 13.11) = 51.7 - 30.195 = 21.505$ kW.
    *   This total load is met by the humidifier and the heater.
    *   Load on Heater = $\dot{m}_a (h_5 - h_4) = 1 \times (51.7 - 28.94) = 22.76$ kW. This is the sensible heat required from State 4 to State 5. Note: The calculation for $h_4$ at adiabatic saturation might not be perfectly accurate without precise psychrometric formulas.

**Reference:**

*   **Ananthanarayanan (2013) - Basic Refrigeration and Air Conditioning:** Provides many worked examples for these calculations.

---

## 6. Winter Air-Conditioning System Types

### 6.1. Centralized Systems

*   A single unit conditions air for multiple zones or the entire building.
*   **Advantages:** Efficient for large buildings, easier maintenance of a single unit.
*   **Disadvantages:** Less zoning flexibility, potential for uneven comfort if not designed properly.

### 6.2. Packaged Terminal Air Conditioners (PTACs) or Rooftop Units (RTUs)

*   Self-contained units, often installed in individual rooms or zones.
*   **Advantages:** Good for zoning, individual control.
*   **Disadvantages:** More units to maintain, potentially less efficient than central systems for large loads.

### 6.3. Split Systems

*   Consist of an indoor unit (fan coil, air handler) and an outdoor unit (compressor, condenser). In winter, the outdoor unit can also be a heat pump to provide heating.
*   **Advantages:** Flexible installation, can provide heating and cooling.
*   **Disadvantages:** Requires refrigerant lines between indoor and outdoor units.

---

## 7. Important Points to Remember

*   **Comfort is paramount:** Maintain desired temperature and humidity levels for occupant comfort and health.
*   **IAQ is crucial:** Always include sufficient fresh outdoor air in the design.
*   **Winter air is often dry:** Humidification is a key process.
*   **Psychrometric chart is your tool:** Visualize and calculate all processes accurately.
*   **Energy efficiency:** Optimize mixing ratios and heating strategies to minimize energy consumption.
*   **Condensation:** Avoid surface temperatures in the ductwork or conditioned space that are below the dew point of the air, which can lead to condensation and mold growth.

---

## 8. Practice Questions and Exercises

**Question 1:**
Outdoor air is at 2°C DBT and 80% RH. It is mixed with recirculated air at 22°C DBT and 50% RH in a ratio of 1:3 (outdoor air:recirculated air). The mixture is then heated sensibly to 25°C DBT. Calculate the amount of sensible heat required per kg of dry air. Assume the final desired humidity is 45% RH.

**Answer:**
1.  **Properties:**
    *   Outdoor air (2°C DBT, 80% RH): $\omega_1 \approx 0.0029$ kg/kg, $h_1 \approx 11.5$ kJ/kg
    *   Recirculated air (22°C DBT, 50% RH): $\omega_2 \approx 0.0082$ kg/kg, $h_2 \approx 44.6$ kJ/kg
    *   Supply air (25°C DBT, 45% RH): $\omega_5 \approx 0.0091$ kg/kg, $h_5 \approx 47.1$ kJ/kg

2.  **Mixed Air Condition (State 3):**
    *   Ratio 1:3 means for every 1 kg outdoor air, there are 3 kg recirculated air. Total mass flow = 4 kg.
    *   $\omega_3 = \frac{1 \times 0.0029 + 3 \times 0.0082}{4} = \frac{0.0029 + 0.0246}{4} = \frac{0.0275}{4} \approx 0.006875$ kg/kg
    *   $T_{DB3} = \frac{1 \times 2 + 3 \times 22}{4} = \frac{2 + 66}{4} = \frac{68}{4} = 17$ °C
    *   Mixed air state: 17°C DBT, $\omega_3 = 0.006875$ kg/kg.
    *   From psychrometric chart at 17°C DBT and $\omega_3 = 0.006875$ kg/kg, the enthalpy $h_3 \approx 31.5$ kJ/kg.

3.  **Heating:**
    *   The air is heated from mixed air condition (17°C DBT, $\omega_3=0.006875$ kg/kg) to supply air condition (25°C DBT, 45% RH which implies $\omega_5 = 0.0091$ kg/kg).
    *   The problem states "heated sensibly to 25°C DBT". This implies the humidifier is not part of the calculation for this specific question's heating requirement. However, for complete conditioning, humidification would be needed to reach 45% RH from the mixed air condition. Let's assume the mixed air is first humidified to 45% RH (then DBT would slightly reduce) and then heated to 25°C.
    *   **Correct interpretation:** The question asks for sensible heating *to* 25°C DBT. This suggests the state *before* sensible heating is at 17°C DBT. The final state is 25°C DBT and 45% RH. This implies a process that first humidifies, then heats.
    *   Let's assume the process is: Mix -> Humidify (to 45% RH) -> Sensible Heat to 25°C DBT.
    *   Mixed air (State 3): 17°C DBT, $\omega_3 = 0.006875$ kg/kg.
    *   Humidify to 45% RH. At 17°C, saturation humidity is $\approx 0.0125$ kg/kg.
    *   Target $\omega_4 = 0.45 \times 0.0125 = 0.005625$ kg/kg.
    *   **Wait, humidity *increases* in winter.** The mixed air $\omega_3 = 0.006875$ kg/kg. The desired supply $\omega_5 = 0.0091$ kg/kg. So, moisture needs to be added.
    *   Let's re-interpret: Mix -> Humidify -> Sensible Heat.
    *   Mixed Air (State 3): 17°C DBT, $\omega_3 = 0.006875$ kg/kg.
    *   Target supply: 25°C DBT, 45% RH. $\omega_5 = 0.0091$ kg/kg.
    *   Humidification needed: $\Delta\omega = \omega_5 - \omega_3 = 0.0091 - 0.006875 = 0.002225$ kg/kg (if humidified directly to final specific humidity before heating).
    *   If the process is: Mix -> Humidify (to some intermediate state 4) -> Heat to 25°C DBT.
    *   Let's assume the air is humidified to a state that, when heated to 25°C, results in 45% RH.
    *   The sensible heating is from some $T_{DB4}$ to 25°C DBT.
    *   Let's simplify: Assume the process is just sensible heating of the mixed air to the final supply DBT. However, the question specifies a final RH, which means moisture *must* be added.
    *   **Most likely interpretation:** The mixed air is conditioned to meet the supply conditions. The *heating* part is sensible.
    *   The question implies the mixed air is conditioned such that it ends up at 25°C DBT and 45% RH.
    *   So, let's assume the mixed air (17°C DBT, $\omega_3=0.006875$ kg/kg) needs to reach supply condition (25°C DBT, $\omega_5=0.0091$ kg/kg).
    *   This requires both humidification and sensible heating.
    *   Let's assume the question means: Mix -> Humidify to $\omega_4$ -> Sensible heat to 25°C DBT (State 5).
    *   If the air is humidified adiabatically to a state where its DBT is $T_{DB4}$ and specific humidity is $\omega_4$, then it is sensible heated to 25°C DBT, reaching $\omega_5$.
    *   **Let's take the sensible heating as the difference in sensible heat.**
    *   The air must reach 25°C DBT. The mixed air is 17°C DBT.
    *   Sensible heat required per kg/s of air = $c_{pa} \times (T_{supply,DB} - T_{mixed,DB}) = 1.005 \times (25 - 17) = 1.005 \times 8 = 8.04$ kJ/kg.
    *   If the air mass flow rate was given, we could calculate the total sensible heat load.

**Question 2:**
What are the main purposes of humidification in winter air-conditioning? (CO5)

**Answer:**
The main purposes of humidification in winter air-conditioning are:
1.  **Occupant Comfort:** Very dry air can cause discomfort, such as dry skin, irritated eyes, and sore throats. Maintaining a relative humidity between 30-60% is generally considered comfortable.
2.  **Health:** Proper humidity levels can help reduce the spread of airborne viruses and bacteria, as many pathogens thrive in dry conditions. It also helps keep mucous membranes moist, which is the body's first line of defense.
3.  **Protection of Furnishings:** Extremely dry air can damage wooden furniture, musical instruments, and other materials by causing them to dry out, shrink, and crack.
4.  **Static Electricity Reduction:** Dry air increases the buildup of static electricity, which can be unpleasant and potentially hazardous in some environments.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 9. Further Reading and References

*   **Arora C.P. (2021) - Refrigeration and Air Conditioning:** Chapters on Psychrometry and Air Conditioning Systems.
*   **Jones (2001) - Air Conditioning Engineering:** Comprehensive coverage of system design and psychrometric processes.
*   **Kothandaraman (2023) - Data book- Refrigeration tables and charts:** Essential for precise property values.
*   **ASHRAE Handbooks:** Authoritative resource for standards and technical data.

---

This comprehensive set of notes covers the fundamental aspects of winter air-conditioning systems, emphasizing the role of psychrometry in their design and operation, and aligning with the specified learning and course outcomes.