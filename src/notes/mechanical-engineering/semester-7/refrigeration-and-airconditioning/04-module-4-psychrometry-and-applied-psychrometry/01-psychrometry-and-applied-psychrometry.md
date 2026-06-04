---
title: "Psychrometry and applied psychrometry"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f7f"
status: "completed"
scrapedAt: "2026-05-20T18:17:32.014Z"
---
# Module 4: Psychrometry and Applied Psychrometry

## Subject: Refrigeration and Air Conditioning

---

## Introduction to Psychrometry

**Psychrometry** is the study of the thermodynamic properties of moist air, specifically the relationship between temperature, humidity, and other properties of air when it contains water vapor. It is fundamental to understanding and designing air conditioning systems.

### Key Concepts and Definitions

*   **Moist Air:** A mixture of dry air and water vapor.
*   **Dry Air:** Air that contains no water vapor.
*   **Water Vapor:** The gaseous state of water.

**Important Point:** In air conditioning, we are primarily concerned with moist air because the presence of water vapor significantly affects comfort conditions and the operation of HVAC systems.

---

## Properties of Moist Air

The properties of moist air are determined by the properties of dry air and the water vapor present.

### Key Properties and Definitions

1.  **Dry Bulb Temperature ($T_{db}$):** The temperature of the air as measured by a standard thermometer. This is the temperature we typically refer to when discussing air temperature.
    *   **Textbook Reference:** Arora C.P., Refrigeration and Air Conditioning, 4th edition/2021, Chapter 9.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

2.  **Wet Bulb Temperature ($T_{wb}$):** The temperature read by a thermometer whose bulb is covered in a wet cloth, exposed to air flow. This temperature is lower than the dry bulb temperature due to evaporative cooling.
    *   **Textbook Reference:** Jones W P, Air Conditioning Engineering, 5th edition/2001, Chapter 3.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

3.  **Dew Point Temperature ($T_{dp}$):** The temperature at which the air becomes saturated with water vapor, and condensation begins to form. It is the temperature at which the partial pressure of water vapor equals the saturation pressure of water at that temperature.
    *   **Textbook Reference:** Arora, Ramesh Chandra, Refrigeration and Air Conditioning, 4th Printing/2015, Chapter 10.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

4.  **Specific Humidity (or Humidity Ratio, $\omega$):** The mass of water vapor per unit mass of dry air. It is often expressed in kg of water vapor per kg of dry air or g of water vapor per kg of dry air.
    $$ \omega = \frac{m_v}{m_a} $$
    Where:
    *   $m_v$ = mass of water vapor
    *   $m_a$ = mass of dry air
    *   **Textbook Reference:** Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning, 2018, Chapter 8.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

5.  **Relative Humidity ($RH$):** The ratio of the actual mass of water vapor in a given volume of air to the maximum mass of water vapor the air can hold at the same temperature and pressure. It is usually expressed as a percentage.
    $$ RH = \frac{\omega}{\omega_s} \times 100\% $$
    Where $\omega_s$ is the saturation humidity ratio at the same temperature. Alternatively, it's the ratio of the partial pressure of water vapor ($p_v$) to the saturation pressure of water vapor ($p_{vs}$) at the dry bulb temperature.
    $$ RH = \frac{p_v}{p_{vs}} \times 100\% $$
    *   **Textbook Reference:** Kothandaraman C P, Data book- Refrigeration tables and charts including air conditioning data, 2023, Section on Psychrometric Properties.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

6.  **Enthalpy ($h$):** The total energy of the moist air, which includes the sensible heat of the dry air and the latent heat of the water vapor. For moist air, enthalpy is usually expressed in kJ/kg of dry air.
    $$ h = h_a + h_v = c_{pa} T_{db} + \omega (h_{fg} + c_{pw} T_{db}) $$
    Where:
    *   $h_a$ = enthalpy of dry air
    *   $h_v$ = enthalpy of water vapor
    *   $c_{pa}$ = specific heat of dry air at constant pressure ($\approx 1.006 \text{ kJ/kg}^\circ\text{C}$)
    *   $h_{fg}$ = latent heat of vaporization of water ($\approx 2501 \text{ kJ/kg}$ at $0^\circ\text{C}$)
    *   $c_{pw}$ = specific heat of water vapor at constant pressure ($\approx 1.86 \text{ kJ/kg}^\circ\text{C}$)
    *   **Textbook Reference:** Ahamadul Ameen, Refrigeration and air conditioning, 2020, Chapter 11.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

7.  **Specific Volume ($v$):** The volume occupied by a unit mass of dry air in the moist air mixture.
    $$ v = \frac{V}{m_a} = \frac{R_a T_{db}}{p_a} = \frac{R_a T_{db}}{p - p_v} $$
    Where:
    *   $V$ = volume of moist air
    *   $m_a$ = mass of dry air
    *   $R_a$ = specific gas constant for dry air ($\approx 287 \text{ J/kg K}$)
    *   $T_{db}$ = dry bulb temperature in Kelvin
    *   $p$ = total atmospheric pressure
    *   $p_v$ = partial pressure of water vapor
    *   **Textbook Reference:** Stoecker & Jons, Refrigeration & Air-conditioning, 2nd edition, Chapter 14.
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K2 (Define).

### Relationships Between Properties

*   **Dew Point Temperature and Partial Pressure of Vapor:** $T_{dp}$ is directly related to $p_v$. As $p_v$ increases, $T_{dp}$ increases.
*   **Specific Humidity and Partial Pressure of Vapor:** $\omega$ is directly related to $p_v$ and inversely related to $p - p_v$.
    $$ \omega = 0.622 \frac{p_v}{p - p_v} $$
    *   **CO Alignment:** CO5 (Analyze properties of moist air) - K4 (Analyze).

**Important Point:** The wet bulb temperature and dew point temperature are indicators of the moisture content in the air.

---

## The Psychrometric Chart

The psychrometric chart is a graphical representation of the thermodynamic properties of moist air at a given atmospheric pressure. It is an invaluable tool for analyzing and solving air conditioning problems.

### Key Features of a Psychrometric Chart

*   **Axes:** Typically, dry bulb temperature is on the horizontal axis, and specific humidity (or humidity ratio) is on the vertical axis.
*   **Constant Lines:**
    *   **Dry Bulb Temperature Lines:** Vertical lines.
    *   **Specific Humidity Lines:** Horizontal lines.
    *   **Wet Bulb Temperature Lines:** Diagonal lines sloping upwards to the right.
    *   **Enthalpy Lines:** Often coincide with wet bulb temperature lines.
    *   **Relative Humidity Lines:** Curved lines that become steeper as humidity increases.
    *   **Specific Volume Lines:** Diagonal lines sloping downwards to the right.
*   **Regions:**
    *   **Saturation Line (100% RH):** The upper boundary of the chart, representing air fully saturated with water vapor.

**Textbook Reference:** Arora C.P., Refrigeration and Air Conditioning, 4th edition/2021, Appendix C (Psychrometric Chart).
**Reference Book Reference:** ASHRAE Handbook (for standard psychrometric charts and explanations).
**CO Alignment:** CO5 (Analyze properties of moist air) - K4 (Analyze).

### How to Use the Psychrometric Chart

1.  **Locate Points:** Given any two independent properties (e.g., $T_{db}$ and $RH$, or $T_{db}$ and $\omega$), locate the corresponding point on the chart.
2.  **Read Other Properties:** Once a point is located, read off the values of other properties by following the appropriate lines.
3.  **Analyze Processes:** Air conditioning processes (like cooling, heating, humidification, dehumidification) can be represented as lines or paths on the psychrometric chart.

**Example:** To find the specific humidity of air at $25^\circ\text{C}$ dry bulb temperature and 50% relative humidity, locate $25^\circ\text{C}$ on the x-axis and follow the 50% RH curve. Then, move horizontally to the right to read the specific humidity on the y-axis.

**Important Point:** Always ensure you are using a psychrometric chart corresponding to the correct atmospheric pressure. Standard charts are for sea-level pressure (101.325 kPa or 1 atm).

---

## Applied Psychrometry: Air Conditioning Processes

Applied psychrometry deals with the application of psychrometric principles to analyze and design air conditioning processes.

### Key Air Conditioning Processes

These processes involve changing the state of moist air by adding or removing heat and/or moisture. They are typically represented by lines on the psychrometric chart.

1.  **Sensible Heating:** Increasing the dry bulb temperature of air without changing its moisture content.
    *   **Process:** Horizontal line to the right on the psychrometric chart ($T_{db}$ increases, $\omega$ is constant).
    *   **Equation:** $Q_{sensible} = m_a \times c_p \times (T_{db,out} - T_{db,in})$
    *   **Application:** Heating coils in HVAC systems.
    *   **Textbook Reference:** Arora C.P., Refrigeration and Air Conditioning, 4th edition/2021, Chapter 9.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

2.  **Sensible Cooling:** Decreasing the dry bulb temperature of air without changing its moisture content.
    *   **Process:** Horizontal line to the left on the psychrometric chart ($T_{db}$ decreases, $\omega$ is constant).
    *   **Equation:** $Q_{sensible} = m_a \times c_p \times (T_{db,in} - T_{db,out})$
    *   **Application:** Passing air over a cooling coil that is above the dew point temperature of the air.
    *   **Textbook Reference:** Jones W P, Air Conditioning Engineering, 5th edition/2001, Chapter 4.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

3.  **Cooling and Dehumidification (Cooling Coil Process):** Decreasing both the dry bulb temperature and the specific humidity of air.
    *   **Process:** Line sloping downwards and to the left on the psychrometric chart, ending on the saturation line if the coil surface is at or below the dew point. The process is often approximated as a straight line from the initial state to the apparatus dew point (ADP) of the cooling coil.
    *   **Application:** Air conditioners using cooling coils to cool and dehumidify air.
    *   **Textbook Reference:** Arora, Ramesh Chandra, Refrigeration and Air Conditioning, 4th Printing/2015, Chapter 11.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

4.  **Heating and Humidification:** Increasing both the dry bulb temperature and the specific humidity of air.
    *   **Process:** A combination of sensible heating and humidification.
    *   **Application:** Steam humidifiers or evaporative cooling followed by a heating coil.
    *   **Textbook Reference:** Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning, 2018, Chapter 9.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

5.  **Humidification (Adiabatic Saturation):** Increasing the specific humidity of air without any heat addition or removal (latent heat of vaporization comes from the air itself, causing a slight drop in $T_{db}$).
    *   **Process:** A line on the psychrometric chart that moves upwards and slightly to the left (or is nearly vertical, depending on the approximation). The process ideally follows an adiabatic saturation line.
    *   **Application:** Evaporative coolers (swamp coolers).
    *   **Textbook Reference:** Ahamadul Ameen, Refrigeration and air conditioning, 2020, Chapter 12.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

6.  **Dehumidification:** Decreasing the specific humidity of air. This is typically achieved by cooling the air below its dew point.
    *   **Process:** Moving downwards on the psychrometric chart.
    *   **Application:** Cooling coils, desiccant dehumidifiers.
    *   **Textbook Reference:** Kothandaraman C P, Data book- Refrigeration tables and charts including air conditioning data, 2023, Section on Psychrometric Properties.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

---

## Air Washers and Their Applications

An air washer is a device that cleans, cools, humidifies, or dehumidifies air by passing it through a spray of water. It's a common component in HVAC systems.

### Types of Air Washers and Processes

1.  **Adiabatic Cooler/Humidifier:** Air is passed through a fine spray of water. Evaporation occurs, cooling and humidifying the air. This process is adiabatic (no heat transfer with surroundings) and is represented by a movement along an adiabatic saturation line on the psychrometric chart. The final state will have a lower $T_{db}$ and higher $\omega$ than the initial state, approaching saturation.
    *   **Application:** Cooling and humidifying air in dry climates.
    *   **Textbook Reference:** Jones W P, Air Conditioning Engineering, 5th edition/2001, Chapter 5.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air washers) - K2 (Explain).

2.  **Isothermal Cooler/Humidifier:** Air is passed through a water bath at a constant temperature. This results in cooling and humidification without a drop in dry bulb temperature.
    *   **Application:** Less common than adiabatic cooling but used in specific scenarios.
    *   **Textbook Reference:** Stoecker & Jons, Refrigeration & Air-conditioning, 2nd edition, Chapter 15.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air washers) - K2 (Explain).

3.  **Dehumidifier (using cold water):** If the spray water is colder than the dew point of the air, condensation will occur, leading to dehumidification and cooling.
    *   **Application:** Removing moisture from the air.
    *   **Textbook Reference:** Ahamadul Ameen, Refrigeration and air conditioning, 2020, Chapter 12.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air washers) - K2 (Explain).

4.  **Air Washer as a Particulate Filter:** The water spray can also trap airborne particles, acting as a simple air filter.

**Important Point:** The effectiveness of an air washer depends on the spray water temperature, air flow rate, and the design of the nozzles and spray sections.

---

## Applications of Psychrometry in Air Conditioning

Psychrometric principles are applied in virtually all aspects of air conditioning design and operation.

### Key Applications

1.  **Comfort Air Conditioning:** Maintaining indoor air conditions (temperature, humidity) within a comfortable range for occupants. This involves understanding how the body interacts with the thermal environment.
    *   **Textbook Reference:** Arora C.P., Refrigeration and Air Conditioning, 4th edition/2021, Chapter 9.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

2.  **Industrial Air Conditioning:** Providing specific environmental conditions for manufacturing processes, storage, and preservation. Examples include:
    *   **Food Processing:** Maintaining low temperatures and controlled humidity to prevent spoilage.
    *   **Pharmaceuticals:** Strict control of temperature and humidity for drug manufacturing and storage.
    *   **Textile Industry:** Controlling humidity to prevent static electricity and improve yarn strength.
    *   **Electronics Manufacturing:** Clean rooms with precise environmental control.
    *   **Textbook Reference:** Jones W P, Air Conditioning Engineering, 5th edition/2001, Chapter 1.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

3.  **Ventilation:** Designing systems to bring in fresh outdoor air and remove stale indoor air, while conditioning the incoming air to match the desired indoor conditions.
    *   **Textbook Reference:** Arora, Ramesh Chandra, Refrigeration and Air Conditioning, 4th Printing/2015, Chapter 12.
    *   **CO Alignment:** CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

4.  **Load Calculations:** Determining the heating and cooling loads of a building based on outdoor and indoor air conditions, building insulation, solar gains, internal heat sources, etc. Psychrometric principles are used to quantify the sensible and latent heat gains.
    *   **Textbook Reference:** Ahamadul Ameen, Refrigeration and air conditioning, 2020, Chapter 10.
    *   **CO Alignment:** CO1 (Analyze performance of ideal refrigeration cycles) - K4 (Analyze) (indirectly, as psychrometry informs load calculations which feed into system analysis).

5.  **System Selection and Design:** Choosing appropriate equipment (cooling coils, humidifiers, dehumidifiers, fans) and sizing them correctly based on psychrometric analysis of the required air conditioning processes.
    *   **Textbook Reference:** Arora S. C. and S. Domkundwar, A Course in Refrigeration and Air Conditioning, 2018, Chapter 10.
    *   **CO Alignment:** CO4 (Select Appropriate Refrigerants and System Components) - K3 (Perform) (in the context of system design based on psychrometric data). CO5 (Explain working principles and applications of air-conditioning systems) - K4 (Analyze).

---

## Practice Questions and Exercises

**Question 1:**
Air at a dry bulb temperature of $30^\circ\text{C}$ and a wet bulb temperature of $22^\circ\text{C}$ is cooled and dehumidified to a final state of $22^\circ\text{C}$ dry bulb temperature and 60% relative humidity. Using a psychrometric chart, determine:
a) The initial specific humidity.
b) The initial relative humidity.
c) The final specific humidity.
d) The amount of moisture removed per kg of dry air.
e) The sensible heat removed per kg of dry air.
f) The total heat removed per kg of dry air.

**Answer 1:**
*(Assume standard atmospheric pressure for the psychrometric chart)*
a) Locate $30^\circ\text{C}$ DB and $22^\circ\text{C}$ WB. Read specific humidity (approx. $0.0161$ kg/kg dry air).
b) From the same point, find the relative humidity curve (approx. 54%).
c) Locate $22^\circ\text{C}$ DB and 60% RH. Read specific humidity (approx. $0.0117$ kg/kg dry air).
d) Moisture removed = Initial $\omega$ - Final $\omega$ = $0.0161 - 0.0117 = 0.0044$ kg/kg dry air.
e) Initial enthalpy (at $30^\circ\text{C}$ DB, $22^\circ\text{C}$ WB) $\approx 75.8$ kJ/kg dry air. Final enthalpy (at $22^\circ\text{C}$ DB, 60% RH) $\approx 56.3$ kJ/kg dry air.
Sensible heat removed = $c_p \times (T_{db,initial} - T_{db,final}) = 1.006 \times (30 - 22) = 1.006 \times 8 = 8.048$ kJ/kg dry air.
f) Total heat removed = Initial enthalpy - Final enthalpy = $75.8 - 56.3 = 19.5$ kJ/kg dry air.

**Question 2:**
Explain the difference between sensible heating and adiabatic humidification in terms of their effect on the psychrometric properties of air. Illustrate the processes on a psychrometric chart.

**Answer 2:**
*   **Sensible Heating:** Increases dry bulb temperature ($T_{db}$) while keeping specific humidity ($\omega$) constant. Represented by a horizontal line moving to the right on the psychrometric chart. No change in moisture content.
*   **Adiabatic Humidification:** Increases specific humidity ($\omega$) by evaporating water. This process absorbs latent heat from the air itself, causing a slight decrease in dry bulb temperature ($T_{db}$). Represented by a line that moves upwards and slightly to the left (along an adiabatic saturation line).

**Question 3:**
Describe the working principle of an air washer used for adiabatic cooling. What are its limitations?

**Answer 3:**
*   **Working Principle:** An air washer for adiabatic cooling sprays fine water droplets into the air stream. As air passes through the spray, water evaporates, absorbing latent heat from the air. This evaporation cools the air and increases its humidity. The process is adiabatic as the heat for evaporation is drawn from the air itself, not from external sources. The air's dry bulb temperature decreases, and its specific humidity increases, approaching saturation.
*   **Limitations:**
    *   **Humidity Limit:** The air cannot be cooled below its wet bulb temperature.
    *   **Effectiveness:** Dependent on the initial humidity of the air. Less effective in already humid climates.
    *   **Water Consumption:** Requires a continuous supply of water.
    *   **Particulate Matter:** While it can trap particles, it might also introduce water-soluble contaminants if the water source is not pure.

**CO Alignment for Questions:** All questions align with CO5 by testing the understanding and application of psychrometric principles and air conditioning processes.

---

## Important Points to Remember

*   **Moist Air Properties:** Always distinguish between dry air and moist air.
*   **Psychrometric Chart:** Master its use for analyzing air conditioning processes. Ensure the correct pressure is used.
*   **Dew Point:** A direct indicator of moisture content.
*   **Wet Bulb:** An indicator of total heat content (enthalpy).
*   **Comfort Zone:** Defined by specific ranges of temperature and humidity.
*   **Sensible vs. Latent Heat:** Understand their distinct roles in air conditioning loads and processes.
*   **Apparatus Dew Point (ADP):** Crucial for calculating the performance of cooling and dehumidifying coils.
*   **Air Washers:** Effective for adiabatic cooling and humidification, but with limitations related to ambient humidity.

---

This comprehensive study guide covers the core concepts of psychrometry and its applications in refrigeration and air conditioning, directly addressing the learning outcomes and course objectives for Module 4. The content is drawn from the specified textbooks and reference materials, ensuring accuracy and relevance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
