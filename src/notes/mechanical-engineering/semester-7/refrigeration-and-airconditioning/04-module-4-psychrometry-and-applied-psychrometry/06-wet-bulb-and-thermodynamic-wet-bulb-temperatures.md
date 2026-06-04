---
title: "wet bulb and thermodynamic wet bulb temperatures"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f84"
status: "completed"
scrapedAt: "2026-05-20T18:17:35.489Z"
---
Here are comprehensive study notes on Wet Bulb and Thermodynamic Wet Bulb Temperatures for Module 4 of Refrigeration and Air Conditioning, aligning with the provided learning outcomes, course outcomes, and textbooks.

---

# Module 4: Psychrometry and Applied Psychrometry

## Topic: Wet Bulb and Thermodynamic Wet Bulb Temperatures

---

### 1. Introduction to Psychrometry

Psychrometry is the study of the thermodynamic properties of moist air and the process of air conditioning. Moist air is a mixture of dry air and water vapor. Understanding the properties of moist air is crucial for designing and analyzing air conditioning systems.

---

### 2. Key Concepts and Definitions

#### 2.1 Dry Air
Dry air is air that contains no water vapor. It is primarily composed of nitrogen (N₂), oxygen (O₂), argon (Ar), and small amounts of other gases.

#### 2.2 Moist Air
Moist air is a mixture of dry air and water vapor.

#### 2.3 Saturation
A state where the air can hold no more water vapor at a given temperature and pressure. At saturation, the partial pressure of water vapor is equal to the saturation pressure of water at that temperature.

#### 2.4 Saturation Temperature
The temperature at which air becomes saturated with water vapor at a given pressure and moisture content.

#### 2.5 Relative Humidity ($ \phi $)
The ratio of the actual partial pressure of water vapor ($ p_v $) in the moist air to the saturation pressure of water vapor ($ p_g $) at the same dry-bulb temperature, expressed as a percentage.

$ \phi = \frac{p_v}{p_g} \times 100\% $

*   **Importance:** Indicates how close the air is to saturation. 100% relative humidity means the air is saturated.

#### 2.6 Specific Humidity ($ w $)
The ratio of the mass of water vapor ($ m_v $) to the mass of dry air ($ m_a $) in a given mass of moist air.

$ w = \frac{m_v}{m_a} $

*   **Calculation using partial pressures:** $ w = 0.622 \frac{p_v}{p_a} $, where $ p_a $ is the partial pressure of dry air and $ p_a = p - p_v $ (p is the total atmospheric pressure).
*   **Importance:** Represents the actual amount of moisture present in the air.

#### 2.7 Dew Point Temperature ($ T_{dp} $)
The temperature to which moist air must be cooled at constant pressure and constant specific humidity to reach saturation. At the dew point temperature, the partial pressure of water vapor equals the saturation pressure at that temperature.

*   **Relation to Specific Humidity:** The specific humidity remains constant during cooling to the dew point.
*   **Importance:** A direct indicator of the moisture content. Lower dew point means drier air.

---

### 3. Wet Bulb Temperature ($ T_{wb} $)

The wet bulb temperature is a fundamental psychrometric property measured by a thermometer whose bulb is covered with a wet wick. The wet wick is exposed to the moving air, and as water evaporates from the wick, it cools the bulb. The evaporation process continues until the heat gained by the bulb from the surrounding air is balanced by the latent heat of vaporization carried away by the evaporated water.

#### 3.1 Principle of Measurement
*   A thermometer with a wet wick (usually muslin) around its bulb is used.
*   The wick is kept moist by dipping it into a reservoir of clean water.
*   The thermometer is exposed to moving air. The air movement is crucial for accurate measurement.

#### 3.2 The Wet Bulb Process (Adiabatic Saturation)
The process occurring at the wet bulb thermometer is approximately **adiabatic saturation**. This means that as water evaporates, it cools the remaining water and the thermometer bulb. The process continues until the air in contact with the wet surface becomes saturated.

*   **Heat Transfer:** Heat is transferred from the air to the water on the wick, causing evaporation.
*   **Mass Transfer:** Water vapor is transferred from the wick to the air.
*   **Energy Balance:** The rate of heat transfer to the wick from the air (sensible heat transfer) is equal to the rate of latent heat carried away by the evaporated moisture.

#### 3.3 Definition of Wet Bulb Temperature ($ T_{wb} $)
The wet bulb temperature is the temperature of the air-water vapor mixture after it has undergone adiabatic saturation at the wet bulb temperature. More precisely, it is the temperature that is reached when water is evaporated into the air by an adiabatic process, thereby cooling the air and increasing its humidity.

#### 3.4 Relationship to Other Psychrometric Properties
*   The wet bulb temperature is a measure of both the sensible heat (temperature) and latent heat (moisture content) of the air.
*   For **saturated air** ($ \phi = 100\% $), the wet bulb temperature is equal to the dry bulb temperature ($ T_{wb} = T_{db} $).
*   For **unsaturated air** ($ \phi < 100\% $), the wet bulb temperature is always **lower** than the dry bulb temperature ($ T_{wb} < T_{db} $). The difference ($ T_{db} - T_{wb} $) is known as the wet bulb depression.
*   The wet bulb depression is an indicator of the relative humidity. A larger depression means lower relative humidity.
*   The wet bulb temperature is related to the enthalpy of the moist air. For a given atmospheric pressure, lines of constant wet bulb temperature on a psychrometric chart are also lines of constant enthalpy (approximately).

#### 3.5 Measuring Wet Bulb Temperature
*   **Sling Psychrometer:** A common instrument consisting of two thermometers, one dry bulb and one wet bulb, mounted on a frame that can be swung to ensure adequate air circulation.
*   **Aspirated Psychrometer:** Uses a fan to draw air over the wet and dry bulb thermometers, providing more consistent air velocity and thus more accurate readings.

#### 3.6 Importance in Air Conditioning
*   **Cooling Load Calculations:** The wet bulb temperature is crucial for calculating sensible and latent cooling loads, especially in processes involving evaporative cooling.
*   **System Design:** Used to determine the required cooling capacity of air conditioning equipment.
*   **Performance Monitoring:** Can be used to assess the effectiveness of cooling processes.

---

### 4. Thermodynamic Wet Bulb Temperature ($ T_{twb} $)

The thermodynamic wet bulb temperature, often denoted as $ T_{twb} $ or simply $ T_{wb}^* $, is the temperature that a sample of moist air would have if it were cooled adiabatically to saturation by the evaporation of water into it. This process occurs at a **constant enthalpy**.

#### 4.1 The Adiabatic Saturation Process
Consider a process where air enters a long, insulated duct containing a large reservoir of water. As the air flows through the duct, water evaporates into the air until the air becomes saturated. The energy for this evaporation comes from the sensible heat of the air, which cools the air. The process is assumed to be adiabatic, meaning no heat is exchanged with the surroundings.

*   **Energy Balance:** For an adiabatic process with evaporation, the enthalpy of the air remains constant.
    $ h_{in} = h_{out} $
*   **Final State:** The air leaves the duct at saturation ($ \phi = 100\% $) and at a temperature called the adiabatic saturation temperature.

#### 4.2 Defining Thermodynamic Wet Bulb Temperature
The thermodynamic wet bulb temperature ($ T_{twb} $) is the temperature of a mass of air after it has been cooled adiabatically to saturation by evaporation of water into it. The process is governed by the conservation of enthalpy.

*   **Constant Enthalpy:** $ h_{final} = h_{initial} $
*   **Final State:** Saturated air at temperature $ T_{twb} $.

#### 4.3 Relationship to Other Psychrometric Properties
*   For any given initial state of moist air (defined by $ T_{db} $ and $ w $ or $ \phi $), the thermodynamic wet bulb temperature ($ T_{twb} $) is unique.
*   On a psychrometric chart, lines of constant enthalpy are nearly coincident with lines of constant thermodynamic wet bulb temperature.

#### 4.4 Distinction from the Measured Wet Bulb Temperature ($ T_{wb} $)
The thermodynamic wet bulb temperature ($ T_{twb} $) is a theoretical concept derived from an ideal adiabatic saturation process, where the air is cooled to saturation by evaporation of water, with the entire process being adiabatic.

The **measured wet bulb temperature ($ T_{wb} $)** is obtained using a thermometer with a wet wick. This process is *not* perfectly adiabatic. There are small amounts of heat transfer from the surroundings to the wet bulb, and the air flow might not be perfectly uniform.

*   **Key Difference:** The measured wet bulb temperature ($ T_{wb} $) is slightly different from the thermodynamic wet bulb temperature ($ T_{twb} $) due to these non-ideal effects. For most practical air conditioning applications, the difference is small and the measured wet bulb temperature is used as a close approximation of the thermodynamic wet bulb temperature.
*   **The approximation:** $ T_{wb} \approx T_{twb} $.
*   **Why the approximation holds:** The wet bulb thermometer aims to create a similar cooling effect through evaporation, and the design (air movement, wet wick) is intended to minimize deviations from the adiabatic process.

#### 4.5 Practical Significance
*   **Enthalpy Indicator:** The thermodynamic wet bulb temperature is a direct indicator of the enthalpy of the moist air. If you know $ T_{twb} $ and the atmospheric pressure, you can determine the enthalpy of the air.
*   **Cooling Limits:** It represents a lower limit of cooling achievable by evaporative cooling processes.
*   **Psychrometric Chart:** Lines of constant $ T_{twb} $ are fundamental to understanding processes on the psychrometric chart, as they often coincide with lines of constant enthalpy.

---

### 5. The Psychrometric Chart

The psychrometric chart is a graphical representation of the psychrometric properties of moist air at a given atmospheric pressure. It is an invaluable tool for air conditioning engineers.

*   **Key Axes:** Typically, the dry bulb temperature ($ T_{db} $) is plotted on the horizontal axis, and specific humidity ($ w $) or humidity ratio is plotted on the vertical axis.
*   **Lines on the Chart:**
    *   **Vertical Lines:** Constant Dry Bulb Temperature ($ T_{db} $)
    *   **Horizontal Lines:** Constant Specific Humidity ($ w $)
    *   **Curved Lines (parabolic):** Constant Relative Humidity ($ \phi $)
    *   **Diagonal Lines:** Constant Wet Bulb Temperature ($ T_{wb} $) and approximately constant Enthalpy ($ h $). These lines run from upper left to lower right.
    *   **Lines of Constant Dew Point Temperature ($ T_{dp} $):** These are horizontal lines.

**How to find $ T_{wb} $ and $ T_{twb} $ on the chart:**
*   Locate the intersection of the constant dry bulb temperature line and the constant specific humidity line (or constant relative humidity line) for the given air condition.
*   Follow the diagonal line passing through this intersection point to the right until it intersects the saturation curve (where $ \phi = 100\% $).
*   The dry bulb temperature at this intersection point on the saturation curve is the wet bulb temperature ($ T_{wb} $).
*   Since lines of constant enthalpy are nearly parallel to lines of constant wet bulb temperature, this value also approximates the thermodynamic wet bulb temperature ($ T_{twb} $).

---

### 6. Examples and Applications

#### Example 1: Understanding the Difference
Consider air at $ T_{db} = 30^\circ C $ and $ \phi = 50\% $.
*   If you measure its wet bulb temperature with a sling psychrometer, you might get $ T_{wb} = 22.4^\circ C $.
*   The thermodynamic wet bulb temperature for this air condition, found by following the constant enthalpy line on a psychrometric chart, would also be approximately $ 22.4^\circ C $.

Now consider the same air at $ T_{db} = 30^\circ C $ but with much lower humidity, say $ \phi = 10\% $.
*   The wet bulb depression ($ T_{db} - T_{wb} $) will be much larger. You might measure $ T_{wb} = 14.5^\circ C $.
*   The thermodynamic wet bulb temperature ($ T_{twb} $) would again be approximately $ 14.5^\circ C $.

**Key takeaway:** Both temperatures are measures of the combined sensible and latent heat content of the air. $ T_{twb} $ is the theoretical value from an adiabatic saturation process, while $ T_{wb} $ is the measured value from a wet bulb thermometer, which is a practical approximation.

#### Example 2: Evaporative Cooling
In arid climates, evaporative coolers can cool air significantly. If outdoor air is at $ T_{db} = 35^\circ C $ and $ T_{wb} = 20^\circ C $, an ideal evaporative cooler can cool the air to its thermodynamic wet bulb temperature.
*   The theoretical outlet air temperature would be $ T_{twb} = 20^\circ C $ (saturated at this temperature).
*   In reality, due to inefficiencies, the outlet air might be slightly warmer than $ T_{twb} $, but still much cooler than the initial $ T_{db} $.

#### Example 3: Comfort Conditions
Comfortable indoor air conditions are often around $ T_{db} = 24^\circ C $ and $ \phi = 50\% $.
*   Looking up these values on a psychrometric chart (or using psychrometric calculators), we find the wet bulb temperature is approximately $ 17.5^\circ C $.
*   This $ T_{wb} $ value helps engineers select appropriate cooling coils and understand the latent load in the conditioned space.

---

### 7. Key Points to Remember

*   **Wet Bulb Temperature ($ T_{wb} $):** Measured temperature by a wet thermometer bulb. It's a practical indicator of air's thermal state.
*   **Thermodynamic Wet Bulb Temperature ($ T_{twb} $):** Theoretical temperature reached through adiabatic saturation. It's directly related to enthalpy.
*   **$ T_{wb} \approx T_{twb} $:** The measured wet bulb temperature is a good approximation of the thermodynamic wet bulb temperature for most AC applications.
*   **$ T_{wb} < T_{db} $ for unsaturated air:** The difference ($ T_{db} - T_{wb} $) is the wet bulb depression and indicates the relative humidity.
*   **$ T_{wb} = T_{db} $ for saturated air:** No evaporation occurs as the air is already holding maximum moisture.
*   **Enthalpy:** Lines of constant $ T_{twb} $ are approximately lines of constant enthalpy, making $ T_{twb} $ a key parameter for energy calculations.
*   **Psychrometric Chart:** Essential tool for visualizing and calculating psychrometric processes. Lines of constant $ T_{wb} $ and $ T_{twb} $ are diagonal lines representing constant enthalpy.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References and Incorporations from Textbooks

*   **Arora C.P. (2021), Refrigeration and Air Conditioning:** This textbook extensively covers psychrometry in Chapters dedicated to air conditioning. It will provide detailed explanations of the definitions, principles of measurement for $ T_{wb} $, and its relation to enthalpy and psychrometric charts. The adiabatic saturation process leading to $ T_{twb} $ will be explained, highlighting the ideal nature of this process.
*   **Arora Ramesh Chandra (2015), Refrigeration and Air Conditioning:** Similar to C.P. Arora, this book will offer comprehensive coverage. It likely details the theory behind wet bulb depression and its direct correlation with relative humidity, and how $ T_{wb} $ is used in cooling load calculations.
*   **Arora S. C. and Domkundwar S. (2018), A Course in Refrigeration and Air Conditioning:** This textbook provides fundamental understanding. It will likely introduce $ T_{wb} $ and $ T_{twb} $ with clear diagrams and examples, explaining their significance in various air conditioning cycles and processes.
*   **Ahamadul Ameen (2020), Refrigeration and air conditioning:** This book will offer practical insights and theoretical underpinnings. It will likely discuss the empirical nature of the wet bulb thermometer and the theoretical basis for thermodynamic wet bulb temperature, including its role in determining the absolute amount of moisture and heat in the air.
*   **Jones W P (2001), Air Conditioning Engineering:** This reference will focus on the engineering applications. It will detail how $ T_{wb} $ and $ T_{twb} $ are used in the design of air handling units, cooling towers, and in calculating the performance of HVAC systems. The distinction and approximations between $ T_{wb} $ and $ T_{twb} $ will be explained in the context of real-world engineering challenges.
*   **Kothandaraman C P (2023), Data book- Refrigeration tables and charts:** This data book is crucial for practical application. It provides the psychrometric charts and tables necessary to find $ T_{wb} $ and $ T_{twb} $ for various air conditions, enabling calculations for specific problems.

---

### 9. Alignment with Course Outcomes

*   **CO1: Define and describe the basic concepts and applications of refrigeration and air conditioning and analyse performance of ideal refrigeration cycles (Knowledge Level: K2, K4)**
    *   This topic directly contributes by defining fundamental psychrometric properties ($ T_{wb} $, $ T_{twb} $) that are essential for understanding air conditioning applications. Analyzing ideal cycles (like evaporative cooling) relies on these properties.
*   **CO5: Analyse properties of moist air using psychrometric principles and chart and explain the working principles and applications of air washers and air-conditioning systems. (Knowledge Level: K2, K4)**
    *   This topic is central to CO5. Understanding $ T_{wb} $ and $ T_{twb} $ is crucial for analyzing moist air properties using psychrometric principles and charts. These temperatures are directly used in explaining the working principles of air washers (evaporative cooling) and the overall design considerations for air conditioning systems.

---

### 10. Practice Questions and Exercises

**Question 1:** Define wet bulb temperature and thermodynamic wet bulb temperature. Explain the difference between them and state when they are approximately equal.

**Answer 1:**
*   **Wet Bulb Temperature ($ T_{wb} $):** The temperature indicated by a thermometer whose bulb is covered with a wet wick and exposed to circulating air. It's the result of evaporative cooling until equilibrium is reached.
*   **Thermodynamic Wet Bulb Temperature ($ T_{twb} $):** The temperature of moist air after it has been cooled adiabatically to saturation by the evaporation of water, with the process occurring at constant enthalpy.
*   **Difference:** $ T_{wb} $ is a measured value from a thermometer, subject to minor non-adiabatic effects. $ T_{twb} $ is a theoretical value from an ideal adiabatic saturation process.
*   **Equality:** They are approximately equal when the wet bulb thermometer is designed to minimize heat transfer from the surroundings and ensures adequate air circulation, making the process nearly adiabatic. For practical purposes in HVAC, they are often used interchangeably.

**Question 2:** Air enters an air conditioner at $ 35^\circ C $ dry bulb temperature and $ 24^\circ C $ wet bulb temperature. What are the approximate dry bulb and wet bulb temperatures of the air leaving the cooling coil if it is cooled to a dry bulb temperature of $ 13^\circ C $ with a re-heat of $ 5^\circ C $? (Assume no change in specific humidity during cooling and re-heat).

**Answer 2:**
This question seems to have a misunderstanding of a typical cooling process. Let's clarify the process:
*   **Entering Air:** $ T_{db,in} = 35^\circ C $, $ T_{wb,in} = 24^\circ C $.
*   **Cooling Coil Process:** The air is typically cooled to a coil surface temperature, often below its dew point, causing dehumidification. This means the specific humidity *will* change.
*   The question states "cooled to a dry bulb temperature of $ 13^\circ C $ with a re-heat of $ 5^\circ C $". This implies two stages: cooling and then re-heating.
*   A more typical process would be cooling the air to $ 13^\circ C $ (which would also involve dehumidification, reducing the specific humidity) and then re-heating it by $ 5^\circ C $ (i.e., increasing the dry bulb temperature by $ 5^\circ C $).

Let's assume a standard cooling process followed by re-heating, and that the target coil surface temperature is below the dew point of the incoming air.

1.  **Cooling to $ 13^\circ C $ $ T_{db} $:**
    *   The air is cooled to a dry bulb temperature of $ 13^\circ C $. On a psychrometric chart, this would be a vertical drop.
    *   The *wet bulb temperature will also decrease* during this cooling process. A typical coil leaving condition from $ 35^\circ C $ $ T_{db} $, $ 24^\circ C $ $ T_{wb} $ to $ 13^\circ C $ $ T_{db} $ would result in a significantly lower wet bulb temperature (e.g., around $ 13.5^\circ C $ if dehumidification occurs). The specific humidity would also decrease.
2.  **Re-heating by $ 5^\circ C $:**
    *   If the air is at $ 13^\circ C $ $ T_{db} $ after cooling (and is now drier), and then re-heated by $ 5^\circ C $, the final dry bulb temperature will be $ 13^\circ C + 5^\circ C = 18^\circ C $.
    *   The wet bulb temperature and specific humidity remain unchanged during re-heating.

**Therefore, if the process is:**
*   Cooling from ($ 35^\circ C $ $ T_{db} $, $ 24^\circ C $ $ T_{wb} $) to ($ 13^\circ C $ $ T_{db} $, say $ 13.5^\circ C $ $ T_{wb} $ due to dehumidification).
*   Followed by re-heating by $ 5^\circ C $.

**The leaving air conditions would be approximately $ 18^\circ C $ $ T_{db} $ and $ 13.5^\circ C $ $ T_{wb} $.**

*Note: Without a psychrometric chart or specific dehumidification calculations for the cooling coil, the exact leaving wet bulb temperature after cooling cannot be precisely determined. The question's phrasing "assume no change in specific humidity during cooling" is contradictory to typical AC coil behavior which involves dehumidification when cooling below the dew point.*

**Question 3:** An air sample has a dry bulb temperature of $ 30^\circ C $ and a relative humidity of 60%.
    a) What is its wet bulb temperature?
    b) What is its thermodynamic wet bulb temperature?
    c) What is the dew point temperature?

**Answer 3:**
To answer this precisely, one would need a psychrometric chart or a psychrometric calculator. Using an online calculator or chart for air at $ 30^\circ C $ $ T_{db} $ and $ 60\% $ $ \phi $:

    a) **Wet Bulb Temperature ($ T_{wb} $):** Approximately $ 24.1^\circ C $.
    b) **Thermodynamic Wet Bulb Temperature ($ T_{twb} $):** Approximately $ 24.1^\circ C $. (As discussed, they are very close).
    c) **Dew Point Temperature ($ T_{dp} $):** Approximately $ 22.1^\circ C $.

**Question 4:** Explain why the wet bulb temperature is always less than or equal to the dry bulb temperature for moist air.

**Answer 4:**
The wet bulb temperature is a result of evaporative cooling. When air is not saturated, there is a driving force for water to evaporate from the wet wick of the thermometer. This evaporation consumes latent heat, which is drawn from the thermometer bulb and the surrounding air. This heat transfer process cools the bulb. The cooling effect continues until the rate of heat transfer to the bulb from the air (sensible heat) is balanced by the rate of latent heat removed by evaporation. Since there is no energy source for further cooling beyond the ambient air temperature, the bulb's temperature cannot drop below the air's dry bulb temperature.

*   If the air is saturated ($ \phi = 100\% $), no evaporation can occur, so the heat transfer is zero, and $ T_{wb} = T_{db} $.
*   If the air is unsaturated ($ \phi < 100\% $), evaporation occurs, leading to cooling, and thus $ T_{wb} < T_{db} $.

---