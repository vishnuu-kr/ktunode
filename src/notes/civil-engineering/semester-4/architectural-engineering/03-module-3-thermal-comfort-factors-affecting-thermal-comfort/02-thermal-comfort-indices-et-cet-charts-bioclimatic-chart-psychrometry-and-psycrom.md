---
title: "Thermal comfort indices-ET-CET Charts- Bioclimatic chart- Psychrometry and Psycrometric chart."
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 3: Thermal comfort: Factors affecting thermal comfort"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bc6"
status: "completed"
scrapedAt: "2026-05-20T18:43:01.233Z"
---
# ARCHITECTURAL ENGINEERING: Module 3 - Thermal Comfort: Factors Affecting Thermal Comfort

## Topic: Thermal Comfort Indices, ET-CET Charts, Bioclimatic Chart, Psychrometry, and Psychrometric Chart

---

### Learning Outcomes:

*   Understand the principles and applications of various thermal comfort indices.
*   Interpret Effective Temperature (ET) and Corrected Effective Temperature (CET) charts.
*   Utilize the Bioclimatic Chart for passive design strategies.
*   Grasp the fundamentals of psychrometry and the psychrometric chart.
*   Apply psychrometric principles to analyze and predict building environmental conditions.

---

### 1. Thermal Comfort Indices

Thermal comfort is defined as "that condition of mind which expresses satisfaction with the thermal environment" (ASHRAE Standard 55). It's influenced by both the thermal environment and the individual's personal factors.

#### Key Concepts & Definitions:

*   **Metabolic Rate (Met):** The rate of internal heat production by the body. Units: Met (1 Met = 58.2 W/m² of body surface area). Varies with activity level (e.g., sitting, walking, exercising).
*   **Clothing Insulation (Clo):** The thermal resistance of clothing. Units: Clo (1 Clo = 0.155 m²·K/W). Varies with the type and amount of clothing.
*   **Environmental Factors:**
    *   **Air Temperature (Ta):** The dry-bulb temperature of the air.
    *   **Radiant Temperature (Tr):** The average temperature of the surrounding surfaces.
    *   **Air Velocity (Va):** The speed of air movement.
    *   **Humidity (Rh):** The amount of water vapor in the air.
*   **Personal Factors:**
    *   **Activity Level:** Affects metabolic rate.
    *   **Clothing:** Affects insulation.

#### Common Thermal Comfort Indices:

*   **Effective Temperature (ET):** An older index that combines air temperature, humidity, and air velocity into a single temperature value that represents the degree of warmth or cold perceived by a person. **It assumes standard clothing and activity levels.**
    *   **Limitation:** It does not account for radiant temperature, which is a significant factor in thermal perception.
*   **Corrected Effective Temperature (CET):** An improvement over ET, CET attempts to account for the effect of radiant temperature by adjusting the ET based on the difference between air temperature and mean radiant temperature.
    *   **Calculation:** CET is generally higher than ET when radiant temperature is higher than air temperature, and lower when it's the opposite.
*   **Operative Temperature (To):** A single temperature that represents the combined effect of air temperature and mean radiant temperature. It's the temperature of a body that loses or gains heat solely through convection and radiation.
    *   **Formula:** To ≈ (Ta + Tr) / 2 (for low air velocities, < 0.2 m/s)
    *   **More accurate formula:** To = Ta + (Tr - Ta) * f(Va), where f(Va) is a function of air velocity.
*   **Predicted Mean Vote (PMV):** A widely used index that predicts the average thermal sensation vote of a large group of people on a six-point scale (from -3 Cold to +3 Hot). It's based on a complex equation that considers all six basic factors of thermal comfort (metabolic rate, clothing insulation, air temperature, radiant temperature, air velocity, and humidity).
*   **Predicted Percentage of Dissatisfied (PPD):** A complementary index to PMV that predicts the percentage of people expected to be dissatisfied with the thermal environment, regardless of whether they feel too warm or too cold. PPD increases as PMV moves away from zero.

---

### 2. ET-CET Charts

These charts are graphical representations used to determine ET and CET values based on air temperature, humidity, and air velocity.

#### Key Concepts & Interpretation:

*   **Structure:** Typically, the X-axis represents dry-bulb temperature, and the Y-axis represents humidity ratio or relative humidity. Lines on the chart represent constant values of other parameters like air velocity and ET.
*   **How to Use:**
    1.  Locate the given dry-bulb temperature on the X-axis.
    2.  Locate the given humidity (e.g., relative humidity) on the Y-axis.
    3.  Find the intersection point.
    4.  Follow the lines of constant air velocity to find the corresponding ET value.
    5.  CET charts often involve an additional step to account for radiant temperature, typically by adjusting the operative temperature.
*   **Example:**
    *   Given: Air Temperature = 25°C, Relative Humidity = 60%, Air Velocity = 0.2 m/s.
    *   On an ET chart, locate 25°C on the X-axis and 60% RH on the Y-axis. Follow the curve for 0.2 m/s air velocity to read the ET value.
*   **Importance:** Useful for initial assessments of thermal comfort, especially in older buildings or for historical analysis. However, PMV and PPD are now more commonly used due to their comprehensiveness.

---

### 3. Bioclimatic Chart

Developed by Olgyay, the Bioclimatic Chart is a graphical tool that helps architects and engineers design buildings and select strategies for passive thermal comfort based on climate data.

#### Key Concepts & Interpretation:

*   **Structure:**
    *   **X-axis:** Represents **Dry-Bulb Temperature (Ta)**.
    *   **Y-axis:** Represents **Humidity Ratio (w)** (or sometimes relative humidity).
    *   **Comfort Zone:** A central region representing the range of Ta and w typically considered comfortable for humans in light clothing and at rest.
    *   **Climate Lines:** Curves representing various combinations of Ta and w for different locations and times of the year.
    *   **Psychrometric Lines:** Lines of constant relative humidity, dew point temperature, and enthalpy.
    *   **Physiological Comfort Regions:** Areas within the chart that indicate when the human body can achieve thermal comfort through different physiological responses (e.g., sweating, vasoconstriction).
*   **How to Use:**
    1.  Plot the climate data (e.g., average monthly dry-bulb temperature and humidity ratio) on the chart.
    2.  Observe the position of the climate data relative to the comfort zone and physiological comfort regions.
    3.  Identify the most appropriate passive design strategies to bring the climate data within the comfort zone.
*   **Passive Design Strategies Indicated by the Chart:**
    *   **For hot and humid climates (outside comfort zone, above humidity limit):**
        *   **Evaporative Cooling:** Increased air movement to enhance sweat evaporation (e.g., ventilation, fans).
        *   **Shading:** Reduce solar heat gain.
        *   **Insulation:** Reduce heat transfer from outside.
    *   **For hot and dry climates (outside comfort zone, below humidity limit):**
        *   **Evaporative Cooling:** Direct or indirect evaporative cooling.
        *   **Night Ventilation:** Cool the building mass at night.
        *   **Shading:** Reduce solar heat gain.
        *   **Moisture Addition:** Potentially to increase comfort by raising humidity.
    *   **For cool climates (outside comfort zone, low temperature):**
        *   **Solar Heating:** Utilize solar radiation.
        *   **Insulation:** Reduce heat loss.
        *   **Shelter from Wind:** Reduce convective heat loss.
    *   **For cold and humid climates (outside comfort zone, low temperature and high humidity):**
        *   **Heating:** Primary strategy.
        *   **Dehumidification:** To improve comfort.
        *   **Insulation:** To retain heat.
*   **Example:**
    *   A city with hot, dry summers. The Bioclimatic Chart would show the comfort zone for these conditions. The climate data would likely fall to the right of the comfort zone (high temperature) and below the high humidity lines. The chart would then suggest strategies like evaporative cooling, shading, and night ventilation to move the conditions towards the comfort zone.
*   **Importance:** A powerful tool for conceptual design and for understanding the relationship between climate and building performance. It guides the selection of passive strategies to minimize reliance on mechanical systems.

---

### 4. Psychrometry and Psychrometric Chart

Psychrometry is the study of the thermodynamic properties of moist air and the processes that affect them. A psychrometric chart is a graphical representation of these properties.

#### Key Concepts & Definitions:

*   **Moist Air:** A mixture of dry air and water vapor.
*   **Dry Air:** Air containing no water vapor.
*   **Water Vapor:** Gaseous state of water.
*   **Humidity:** The amount of water vapor in the air.
    *   **Absolute Humidity (Humidity Ratio, w):** The mass of water vapor per unit mass of dry air. Units: kg water vapor / kg dry air (or g/kg).
    *   **Relative Humidity (RH):** The ratio of the partial pressure of water vapor to the saturation pressure of water vapor at the same temperature, expressed as a percentage. It indicates how "full" the air is of water vapor.
    *   **Dew Point Temperature (Tdp):** The temperature to which air must be cooled at constant pressure and moisture content to reach saturation. At or below the dew point, condensation will occur.
*   **Temperature:**
    *   **Dry-Bulb Temperature (Ta):** The temperature measured by a standard thermometer. This is the primary temperature reading.
    *   **Wet-Bulb Temperature (Twb):** The temperature read by a thermometer whose bulb is covered with a wet wick and exposed to airflow. It represents the temperature achieved by evaporative cooling.
*   **Enthalpy (h):** The total heat content of the moist air, including the sensible heat of the dry air and the latent heat of the water vapor. Units: kJ/kg dry air.
*   **Specific Volume (v):** The volume occupied by a unit mass of dry air, including the water vapor it contains. Units: m³/kg dry air.

#### The Psychrometric Chart:

A graphical representation of the thermodynamic properties of moist air at a given atmospheric pressure (usually sea level, 1 atm).

#### Key Properties and How to Find Them on the Chart:

*   **X-axis:** Dry-Bulb Temperature (Ta)
*   **Y-axis:** Humidity Ratio (w)
*   **Saturation Curve (100% RH):** A curved line on the far left of the chart. Any point on this curve represents air that is saturated with water vapor. The dew point temperature of saturated air is equal to its dry-bulb temperature.
*   **Lines of Constant Relative Humidity:** Curved lines parallel to the saturation curve, typically labeled with percentages (e.g., 90%, 80%, 70%).
*   **Lines of Constant Wet-Bulb Temperature:** Diagonal lines sloping from lower left to upper right.
*   **Lines of Constant Enthalpy:** Diagonal lines that often run parallel to the wet-bulb temperature lines or are sometimes combined with them.
*   **Lines of Constant Specific Volume:** Straight lines sloping from upper left to lower right.
*   **Lines of Constant Dew Point Temperature:** Horizontal lines extending from the saturation curve to the right.

#### Psychrometric Processes (How moist air changes state):

These are important for analyzing HVAC system processes.

*   **Sensible Cooling/Heating:** Changing the dry-bulb temperature without changing the humidity ratio. Represented by a horizontal line on the chart.
*   **Cooling & Dehumidification:** Occurs when air is cooled below its dew point. Represented by moving down and to the left on the chart. The cooling coil temperature (dew point) determines the final humidity ratio.
*   **Heating & Humidification:** Increasing both temperature and moisture content. Represented by moving up and to the right.
*   **Adiabatic Humidification (Evaporative Cooling):** Adding moisture to the air without adding or removing heat from the air itself (heat is used for evaporation). This process follows a line of constant enthalpy (or wet-bulb temperature). Air moves up and to the left on the chart (temperature decreases, humidity increases).
*   **Mixing of Air Streams:** The resulting state of mixed air streams will lie on the straight line connecting the states of the individual streams, with the position determined by the mass flow rates.

#### Example:

*   **Problem:** Given moist air at 25°C dry-bulb temperature and 60% relative humidity. Determine its humidity ratio, dew point temperature, and enthalpy at standard atmospheric pressure.
*   **Solution using Psychrometric Chart:**
    1.  Locate 25°C on the X-axis.
    2.  Locate 60% RH on the curved lines of constant relative humidity.
    3.  The intersection point is the state of the air.
    4.  Read the **Humidity Ratio (w)** on the Y-axis corresponding to this point (e.g., approx. 0.013 kg/kg).
    5.  Follow the horizontal line from this point to the left until it intersects the saturation curve. Read the **Dew Point Temperature (Tdp)** on the X-axis (e.g., approx. 17°C).
    6.  Follow the diagonal line of constant enthalpy passing through the point to read the **Enthalpy (h)** (e.g., approx. 50 kJ/kg dry air).

#### Importance:

*   Essential for understanding and designing HVAC systems.
*   Helps predict the thermal and moisture behavior of air in different processes.
*   Crucial for calculations involving cooling, heating, humidification, dehumidification, and ventilation.

---

### Practice Questions & Exercises

**Question 1:** Define Effective Temperature (ET) and explain its limitations.

**Answer:** Effective Temperature (ET) is a single temperature value that represents the combined effect of air temperature, humidity, and air velocity on human perception of warmth or cold. It is based on empirical studies and assumes standard clothing and activity levels. Its main limitation is that it does not directly account for the influence of mean radiant temperature, which significantly affects how people feel the thermal environment.

**Question 2:** A building in a hot, arid climate requires passive design strategies. Using the principles of the Bioclimatic Chart, what strategies would be most effective to achieve thermal comfort?

**Answer:** For a hot, arid climate (high temperature, low humidity), the Bioclimatic Chart would indicate strategies focused on reducing solar gain and utilizing the low humidity for evaporative cooling. Effective strategies include:
    *   **Shading:** To block direct solar radiation from entering the building.
    *   **Evaporative Cooling:** Utilizing the low humidity to cool the air through evaporation (e.g., through water features, wet walls, or evaporative coolers).
    *   **Night Ventilation:** To cool down the building mass during cooler night hours.
    *   **Thermal Mass:** To absorb heat during the day and release it at night.

**Question 3:** Explain the difference between Absolute Humidity and Relative Humidity.

**Answer:**
    *   **Absolute Humidity (Humidity Ratio):** Refers to the actual mass of water vapor present in a unit mass of dry air. It's a direct measure of the moisture content.
    *   **Relative Humidity:** Expresses the amount of water vapor in the air as a percentage of the maximum amount of water vapor the air can hold at that specific temperature. It's a measure of saturation.

**Question 4:** Describe the process of adiabatic humidification on a psychrometric chart. What happens to the dry-bulb temperature and humidity ratio?

**Answer:** Adiabatic humidification, also known as evaporative cooling, involves adding moisture to the air without adding or removing sensible heat. On a psychrometric chart, this process is represented by a line of constant enthalpy (or constant wet-bulb temperature). As moisture is added, the **dry-bulb temperature decreases** (due to the latent heat of vaporization being absorbed from the air), and the **humidity ratio increases**.

**Question 5:** If air at 30°C dry-bulb and 70% relative humidity is cooled to 20°C dry-bulb without changing its moisture content (sensible cooling), how would you represent this on a psychrometric chart? What is the initial and final humidity ratio?

**Answer:**
    *   **Representation on Psychrometric Chart:** This process is represented by a horizontal line on the psychrometric chart, moving from right to left. The dry-bulb temperature decreases from 30°C to 20°C, while the humidity ratio remains constant.
    *   **Initial Humidity Ratio (at 30°C, 70% RH):** Approximately 0.022 kg/kg dry air.
    *   **Final Humidity Ratio (at 20°C, on the same horizontal line):** Approximately 0.022 kg/kg dry air (as moisture content is unchanged).

---

### Important Points to Remember:

*   **Thermal comfort is subjective:** It depends on individual factors like metabolic rate and clothing, as well as environmental factors.
*   **Mean Radiant Temperature (MRT) is crucial:** It has a significant impact on thermal comfort and is often overlooked in simpler indices.
*   **Bioclimatic Chart is a design tool:** It helps in selecting appropriate passive strategies based on climate.
*   **Psychrometric Chart is a thermodynamic tool:** It's essential for analyzing HVAC processes and the behavior of moist air.
*   **Units are important:** Always pay attention to the units used for different parameters and indices.
*   **PMV/PPD are modern standards:** While ET/CET charts are useful, PMV and PPD are more comprehensive and widely used in contemporary building design.
*   **Dew point temperature indicates saturation:** If air is cooled to its dew point, condensation will occur.

---
