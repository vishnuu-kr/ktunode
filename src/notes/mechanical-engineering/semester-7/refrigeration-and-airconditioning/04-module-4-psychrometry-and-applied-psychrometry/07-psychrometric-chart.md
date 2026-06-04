---
title: "Psychrometric chart"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f85"
status: "completed"
scrapedAt: "2026-05-20T18:17:36.201Z"
---
Sure, here are comprehensive study notes for the topic "Psychrometric Chart" from Module 4: Psychrometry and Applied Psychrometry in Refrigeration and Air Conditioning.

# Module 4: Psychrometry and Applied Psychrometry

## Topic: Psychrometric Chart

### Introduction

The psychrometric chart is a graphical representation of the thermodynamic properties of moist air. It is an essential tool for analyzing and designing air conditioning systems, as it allows for the visualization and calculation of various air processes like heating, cooling, humidification, dehumidification, and mixing. This chart is based on the principles of psychrometry, which deals with the properties of moist air and its behavior under different conditions.

**Key Concept:** Moist air is a mixture of dry air and water vapor. Its properties are dependent on temperature, pressure, and the amount of water vapor present.

### Learning Outcomes Covered:

*   **Analyze properties of moist air using psychrometric principles and chart:** This entire topic focuses on this outcome. We will learn how to read and interpret the various properties of moist air from the chart. (CO5 - K2, K4)

### Key Concepts and Definitions:

*   **Dry Air:** Air that contains no water vapor.
*   **Moist Air:** A mixture of dry air and water vapor.
*   **Humidity Ratio (or Specific Humidity, $\omega$):** The mass of water vapor per unit mass of dry air. It is typically expressed in kg of water vapor per kg of dry air (kgw/kga) or g of water vapor per kg of dry air (gw/kga).
    *   **Formula:** $\omega = \frac{m_v}{m_a}$
    *   **Importance:** Directly related to the amount of moisture in the air.
*   **Saturation Humidity Ratio ($\omega_s$):** The maximum humidity ratio that moist air can hold at a given temperature and pressure. This occurs when the air is saturated with water vapor.
*   **Relative Humidity ($\phi$):** The ratio of the actual partial pressure of water vapor in the moist air to the saturation partial pressure of water vapor at the same dry-bulb temperature, expressed as a percentage.
    *   **Formula:** $\phi = \frac{p_v}{p_g(T_{db})} \times 100\%$
    *   **Importance:** Indicates how close the air is to saturation. At 100% relative humidity, the air is saturated, and condensation may occur.
*   **Dry-Bulb Temperature ($T_{db}$):** The temperature of the air as measured by a standard thermometer that is not affected by humidity. This is the primary temperature scale on the psychrometric chart.
*   **Wet-Bulb Temperature ($T_{wb}$):** The temperature measured by a thermometer whose bulb is covered with a wet wick and exposed to a stream of air. The evaporation of water from the wick cools the thermometer. It is an indicator of the moistness of the air and is related to the latent heat of vaporization.
*   **Dew-Point Temperature ($T_{dp}$):** The temperature to which moist air must be cooled at constant pressure and constant humidity ratio for saturation to occur. At the dew-point temperature, the water vapor in the air begins to condense.
    *   **Relationship:** For a given humidity ratio, the dew-point temperature is constant.
*   **Enthalpy ($h$):** The total heat content of the moist air, which includes the sensible heat of the dry air and the latent heat of the water vapor. It is typically expressed in kJ/kg of dry air (kJ/kga).
    *   **Importance:** Crucial for analyzing heat transfer in air conditioning processes.
*   **Specific Volume ($v_s$):** The volume of moist air per unit mass of dry air. It is typically expressed in m³ per kg of dry air (m³/kga).
    *   **Importance:** Important for sizing ducts and fans.
*   **Absolute Humidity:** Similar to humidity ratio, often used interchangeably.

### The Psychrometric Chart: Structure and Components

The psychrometric chart is typically plotted for standard atmospheric pressure (1 atm or 101.325 kPa). Different charts exist for different pressures, but the standard chart is most common.

**Axes:**

1.  **Horizontal Axis:** Dry-Bulb Temperature ($T_{db}$) (usually in °C or °F).
2.  **Vertical Axis:** Humidity Ratio ($\omega$) (usually in kgw/kga or gw/kga).

**Key Lines and Curves on the Chart:**

*   **Dry-Bulb Temperature Lines:** Vertical lines, indicating constant $T_{db}$.
*   **Humidity Ratio Lines:** Horizontal lines, indicating constant $\omega$.
*   **Saturation Curve (or Curve of 100% Relative Humidity):** A curved line at the top of the chart. Points on this curve represent saturated air.
*   **Constant Relative Humidity Lines:** Curves that originate from the saturation curve and slope downwards to the right. They represent constant $\phi$ values (e.g., 10%, 20%, ..., 90%).
*   **Constant Wet-Bulb Temperature Lines:** Straight lines that slope downwards from left to right, originating from the saturation curve. These lines are nearly parallel to the enthalpy lines.
*   **Constant Enthalpy Lines:** Straight lines that are nearly parallel to the wet-bulb temperature lines, sloping downwards from left to right. They indicate constant enthalpy (h).
*   **Constant Specific Volume Lines:** Straight lines that slope upwards from left to right, originating from the saturation curve. They indicate constant specific volume ($v_s$).
*   **Dew-Point Temperature Lines:** Vertical lines, identical to the humidity ratio lines for saturated air. A point on the saturation curve has its dew-point temperature equal to its dry-bulb and wet-bulb temperatures.

**How to Read the Chart:**

To find any property of moist air, you typically need two independent properties. For example, if you know the dry-bulb temperature and the relative humidity, you can locate the corresponding point on the chart and read off all other properties.

**Example:**

Let's find the properties of air at 25°C $T_{db}$ and 50% $\phi$.

1.  Locate 25°C on the horizontal (Dry-Bulb Temperature) axis.
2.  Follow the vertical line up from 25°C.
3.  Find the curve representing 50% relative humidity.
4.  The intersection point of the vertical line (25°C) and the 50% relative humidity curve gives the state of the air.
5.  From this point, you can read:
    *   **Humidity Ratio ($\omega$):** Follow horizontally to the left to read the $\omega$ value.
    *   **Wet-Bulb Temperature ($T_{wb}$):** Follow the slanted line representing constant $T_{wb}$ that passes through this point, and read the intersection with the saturation curve or the appropriate $T_{wb}$ scale.
    *   **Dew-Point Temperature ($T_{dp}$):** Follow horizontally to the left to find the corresponding $T_{dp}$ on the saturation curve.
    *   **Enthalpy ($h$):** Follow the slanted line representing constant enthalpy that passes through this point, and read the intersection with the enthalpy scale (often on the right edge of the chart).
    *   **Specific Volume ($v_s$):** Follow the slanted line representing constant specific volume and read the intersection with the $v_s$ scale.

### Using the Psychrometric Chart for Air Conditioning Processes

The psychrometric chart is invaluable for visualizing and analyzing various psychrometric processes. Each process can be represented as a line or a vector on the chart, showing the change in air properties.

**Common Psychrometric Processes:**

1.  **Sensible Heating:**
    *   **Description:** Adding heat to air without changing its moisture content.
    *   **Chart Representation:** A horizontal line moving to the right (increasing $T_{db}$). $\omega$ remains constant.
    *   **Example:** Heating air in a furnace.

2.  **Sensible Cooling:**
    *   **Description:** Removing heat from air without changing its moisture content.
    *   **Chart Representation:** A horizontal line moving to the left (decreasing $T_{db}$). $\omega$ remains constant.
    *   **Example:** Air passing over a cool surface above its dew point.

3.  **Cooling and Dehumidification:**
    *   **Description:** Cooling air below its dew-point temperature, causing some water vapor to condense out.
    *   **Chart Representation:** A line moving downwards and to the left, generally parallel to the constant enthalpy lines, until the dew-point is reached, then horizontally to the left. The process is often approximated as a constant enthalpy process.
    *   **Example:** Cooling coil in an air conditioner.

4.  **Heating and Humidification:**
    *   **Description:** Heating air and adding moisture simultaneously.
    *   **Chart Representation:** A line moving upwards and to the right, with both $T_{db}$ and $\omega$ increasing.
    *   **Example:** Humidifier followed by a heater.

5.  **Cooling and Humidification:**
    *   **Description:** Cooling air and adding moisture simultaneously. This is typically achieved by spraying water into the air.
    *   **Chart Representation:** A line moving downwards and to the right, generally along a constant wet-bulb temperature line, as the process involves evaporative cooling.
    *   **Example:** Air washer or evaporative cooler.

6.  **Heating and Dehumidification:**
    *   **Description:** Heating air while removing moisture. This is usually achieved by passing air over a heated surface and then through a dehumidifier.
    *   **Chart Representation:** A line moving upwards and to the left, with $T_{db}$ increasing and $\omega$ decreasing.
    *   **Example:** Air passing over a hot, dry surface that absorbs moisture.

7.  **Adiabatic Saturation (or Evaporative Cooling):**
    *   **Description:** Air is passed over a wetted surface, leading to evaporation of water. This process occurs at constant wet-bulb temperature and constant enthalpy.
    *   **Chart Representation:** A vertical line moving downwards along a constant wet-bulb temperature line.
    *   **Example:** Swamp coolers.

**Incorporating Textbook Content:**

*   **Arora C.P. (2021), Refrigeration and Air Conditioning:** This book provides a thorough explanation of psychrometric principles and the construction of the psychrometric chart. It emphasizes the graphical solution of various air conditioning processes and the calculation of heat loads.
*   **Ramesh Chandra Arora (2015), Refrigeration and Air Conditioning:** Similar to C.P. Arora, this text covers the fundamentals of psychrometry and the application of the psychrometric chart in detail, often with practical examples related to comfort air conditioning.
*   **Arora S.C. and Domkundwar S. (2018), A Course in Refrigeration and Air Conditioning:** This book likely presents the psychrometric chart as a primary tool for understanding the performance of HVAC systems, focusing on the thermodynamic analysis of processes.
*   **Ahamadul Ameen (2020), Refrigeration and Air conditioning:** Expect a clear introduction to psychrometry and the chart, with a focus on its utility in determining required capacities and operating conditions for air conditioning equipment.
*   **W.P. Jones (2001), Air Conditioning Engineering:** This book might focus more on the engineering applications and design considerations using the psychrometric chart, including calculations for duct sizing and equipment selection.
*   **C.P. Kothandaraman (2023), Data book- Refrigeration tables and charts including air conditioning data:** This data book is crucial for having access to the actual psychrometric charts and associated tables to perform calculations and find precise values.

### Examples with Psychrometric Chart Usage:

**Example 1: Sensible Cooling**

*   **Problem:** Air enters an air conditioning coil at 30°C dry-bulb temperature and 50% relative humidity. It leaves the coil at 20°C dry-bulb temperature. The process is sensible cooling (no change in moisture content). Determine the humidity ratio and enthalpy of the air at both conditions.
*   **Solution using Psychrometric Chart:**
    1.  Locate State 1: 30°C $T_{db}$ and 50% $\phi$. Find the intersection point.
        *   Read $\omega_1 \approx 0.0134$ kgw/kga
        *   Read $h_1 \approx 75$ kJ/kga
    2.  Locate State 2: 20°C $T_{db}$. Since it's sensible cooling, $\omega_2 = \omega_1 = 0.0134$ kgw/kga.
    3.  Follow the vertical line at 20°C $T_{db}$ down to the horizontal line of $\omega_2$.
        *   Read $h_2 \approx 47$ kJ/kga
*   **Observation:** The dry-bulb temperature decreased, and the enthalpy decreased, while the humidity ratio remained constant.

**Example 2: Cooling and Dehumidification**

*   **Problem:** Air enters an air conditioner coil at 35°C dry-bulb temperature and 60% relative humidity. It leaves the coil at 25°C dry-bulb temperature and 50% relative humidity. Determine the initial and final humidity ratios and enthalpy, and the amount of moisture removed per kg of dry air.
*   **Solution using Psychrometric Chart:**
    1.  Locate State 1: 35°C $T_{db}$ and 60% $\phi$.
        *   Read $\omega_1 \approx 0.0227$ kgw/kga
        *   Read $h_1 \approx 98$ kJ/kga
    2.  Locate State 2: 25°C $T_{db}$ and 50% $\phi$.
        *   Read $\omega_2 \approx 0.0107$ kgw/kga
        *   Read $h_2 \approx 57$ kJ/kga
    3.  Moisture Removed = $\omega_1 - \omega_2 = 0.0227 - 0.0107 = 0.012$ kgw/kga
    4.  Cooling Load = $h_1 - h_2 = 98 - 57 = 41$ kJ/kga
*   **Observation:** Both dry-bulb temperature and humidity ratio decreased, indicating cooling and dehumidification.

### Important Points to Remember:

*   The psychrometric chart is specific to a given atmospheric pressure. Use the chart corresponding to your operating pressure. The standard chart is for 1 atm.
*   Two independent properties are needed to fix the state of moist air on the chart.
*   The dew-point temperature is constant for a given humidity ratio.
*   The wet-bulb temperature and enthalpy lines are nearly parallel.
*   The saturation curve represents the limit of moisture-holding capacity for air at a given temperature.
*   Processes involving condensation (dehumidification) usually involve a change in enthalpy. Adiabatic saturation (evaporative cooling) is a special case where enthalpy and wet-bulb temperature are constant.

### Practice Questions:

1.  Air at 20°C dry-bulb temperature and 60% relative humidity is heated sensibly to 35°C dry-bulb temperature. Using the psychrometric chart, determine:
    *   The initial humidity ratio and enthalpy.
    *   The final humidity ratio and enthalpy.
    *   The amount of sensible heat added per kg of dry air.

2.  Moist air at 32°C dry-bulb temperature and 70% relative humidity is cooled to 22°C dry-bulb temperature and 55% relative humidity. Using the psychrometric chart, determine:
    *   The initial and final humidity ratios.
    *   The initial and final enthalpies.
    *   The total amount of cooling and dehumidification required per kg of dry air.

3.  Explain the significance of the dew-point temperature and its relationship to condensation.

4.  Describe the graphical representation of sensible heating and evaporative cooling on a psychrometric chart.

### Answers to Practice Questions:

**Answer 1:**

Using a standard psychrometric chart (assuming 1 atm pressure):

*   **State 1 (20°C $T_{db}$, 60% $\phi$):**
    *   $\omega_1 \approx 0.0097$ kgw/kga
    *   $h_1 \approx 44$ kJ/kga
*   **State 2 (35°C $T_{db}$, $\omega_2 = \omega_1 = 0.0097$ kgw/kga):**
    *   $\omega_2 \approx 0.0097$ kgw/kga
    *   $h_2 \approx 65$ kJ/kga
*   **Sensible Heat Added:** $Q_s = h_2 - h_1 = 65 - 44 = 21$ kJ/kga

**Answer 2:**

Using a standard psychrometric chart (assuming 1 atm pressure):

*   **State 1 (32°C $T_{db}$, 70% $\phi$):**
    *   $\omega_1 \approx 0.0208$ kgw/kga
    *   $h_1 \approx 88$ kJ/kga
*   **State 2 (22°C $T_{db}$, 55% $\phi$):**
    *   $\omega_2 \approx 0.0095$ kgw/kga
    *   $h_2 \approx 45$ kJ/kga
*   **Humidity Ratio Change:** $\Delta \omega = \omega_1 - \omega_2 = 0.0208 - 0.0095 = 0.0113$ kgw/kga (Moisture removed)
*   **Total Cooling:** $\Delta h = h_1 - h_2 = 88 - 45 = 43$ kJ/kga (Total cooling load)

**Answer 3:**

The dew-point temperature ($T_{dp}$) is the temperature at which the air becomes saturated when cooled at constant pressure and humidity ratio. It is a direct measure of the absolute moisture content of the air. When the air temperature drops to its dew-point temperature, condensation begins to form. A higher dew-point temperature indicates a greater amount of water vapor in the air. On the psychrometric chart, the dew-point temperature for a given state of moist air is found by moving horizontally from the state point to the saturation curve.

**Answer 4:**

*   **Sensible Heating:** Represented by a **horizontal line moving to the right** on the psychrometric chart. The dry-bulb temperature increases, while the humidity ratio remains constant.
*   **Evaporative Cooling (Adiabatic Saturation):** Represented by a **vertical line moving downwards along a constant wet-bulb temperature line**. As water evaporates, it cools the air, increasing the humidity ratio. The process is adiabatic (no heat transfer with the surroundings), and the enthalpy and wet-bulb temperature remain constant.

This concludes the study notes for the Psychrometric Chart. Remember to practice using an actual psychrometric chart to gain proficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
