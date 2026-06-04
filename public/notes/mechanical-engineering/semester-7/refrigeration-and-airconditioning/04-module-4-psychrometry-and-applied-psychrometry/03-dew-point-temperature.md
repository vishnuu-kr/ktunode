---
title: "Dew point temperature"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 4: Psychrometry and applied psychrometry"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f81"
status: "completed"
scrapedAt: "2026-05-20T18:17:33.386Z"
---
# Module 4: Psychrometry and Applied Psychrometry

## Topic: Dew Point Temperature

### 1. Introduction to Dew Point Temperature

The dew point temperature ($T_{dp}$) is a fundamental concept in psychrometry, which is the study of the thermodynamic properties of moist air. It's the temperature at which moist air becomes saturated when cooled at constant pressure and constant specific humidity. At this temperature, water vapor begins to condense out of the air.

**Key Concepts:**

*   **Moist Air:** A mixture of dry air and water vapor.
*   **Saturation:** The state where the air contains the maximum amount of water vapor it can hold at a given temperature and pressure.
*   **Condensation:** The process of water vapor changing into liquid water.

**Importance in HVAC:**

Understanding dew point temperature is crucial in air conditioning systems for several reasons:

*   **Comfort:** High dew point temperatures lead to a sticky and uncomfortable feeling as sweat doesn't evaporate effectively.
*   **Condensation Control:** Preventing condensation on surfaces (like cold coils, windows, and ducts) is essential to avoid mold growth, material degradation, and water damage.
*   **Dehumidification:** The process of removing moisture from the air relies on cooling the air below its dew point.

### 2. Defining Dew Point Temperature

The dew point temperature ($T_{dp}$) is the temperature to which air must be cooled, at constant pressure and constant specific humidity, to reach saturation. At the dew point, the partial pressure of water vapor in the air is equal to the saturation pressure of water at that temperature.

**Formal Definition:**

$T_{dp}$ is the temperature at which the partial pressure of water vapor ($p_v$) in the air is equal to the saturation pressure ($p_g$) at $T_{dp}$.

Mathematically: $p_v = p_g(T_{dp})$

**Relationship with Relative Humidity:**

Relative Humidity (RH) is defined as the ratio of the actual partial pressure of water vapor to the saturation pressure at the dry bulb temperature, expressed as a percentage:

$RH = \frac{p_v}{p_g(T_{db})} \times 100\%$

Where:
*   $p_v$ is the partial pressure of water vapor.
*   $T_{db}$ is the dry bulb temperature.
*   $p_g(T_{db})$ is the saturation pressure of water vapor at the dry bulb temperature.

When the air is cooled to its dew point, $p_v = p_g(T_{dp})$. If the dry bulb temperature is higher than the dew point temperature, the relative humidity will be less than 100%. As the air cools and approaches the dew point, the relative humidity increases.

**Example:**

If moist air has a dry bulb temperature of 25°C and a dew point temperature of 15°C, then at 25°C, the air is not saturated. However, if it's cooled to 15°C (at constant pressure and specific humidity), it will become saturated, and condensation will begin.

### 3. Relationship between Dew Point Temperature and Other Psychrometric Properties

The dew point temperature is directly related to the specific humidity (or humidity ratio) of the air.

*   **Specific Humidity ($w$)**: The mass of water vapor per unit mass of dry air.
    $w = 0.622 \frac{p_v}{p - p_v}$
    Where:
    *   $p$ is the total atmospheric pressure.
    *   $p_v$ is the partial pressure of water vapor.

Since $p_v = p_g(T_{dp})$, the specific humidity can be expressed in terms of the dew point temperature:

$w = 0.622 \frac{p_g(T_{dp})}{p - p_g(T_{dp})}$

**Key Observations:**

*   **Constant Pressure:** At a constant total pressure, a higher dew point temperature indicates a higher partial pressure of water vapor, and therefore a higher specific humidity.
*   **Constant Specific Humidity:** If the specific humidity remains constant, and the air is cooled, the dew point temperature remains constant until condensation occurs.

**Referencing Textbooks:**

*   **Arora C.P. (2021):** Chapter 5 (Psychrometric Properties of Moist Air) discusses the relationship between partial pressure of water vapor and dew point temperature, and how this relates to specific humidity.
*   **Ramesh Chandra Arora (2015):** Similar to C.P. Arora, this text covers the fundamental psychrometric relationships, including those involving dew point.
*   **Jones (2001):** Chapter 3 (Psychrometry) elaborates on how dew point temperature is a direct indicator of the absolute moisture content of the air.

### 4. Determining Dew Point Temperature

Dew point temperature can be determined in several ways:

**a) Using Saturation Pressure Tables/Charts:**

Given the partial pressure of water vapor ($p_v$), you can look up the corresponding saturation temperature in steam tables or psychrometric charts. This temperature will be the dew point temperature.

**Example:**

If the partial pressure of water vapor ($p_v$) in the air is 1.8 kPa, and the atmospheric pressure is 101.3 kPa, you would consult a steam table for the saturation temperature corresponding to a pressure of 1.8 kPa. This would give you the dew point temperature.

**b) Using Psychrometric Charts:**

Psychrometric charts graphically represent the properties of moist air. The dew point temperature is usually indicated on the temperature axis, and lines of constant dew point temperature are horizontal lines. To find the dew point temperature from a psychrometric chart, you locate the point representing the current state of the air (defined by dry bulb temperature and relative humidity, or dry bulb temperature and humidity ratio) and then follow the horizontal line corresponding to that specific humidity until it intersects the saturation curve. The temperature on the saturation curve at this intersection is the dew point temperature.

**c) Using Empirical Formulas and Calculators:**

There are various empirical formulas that approximate the relationship between dew point temperature and other psychrometric properties. These are often used in software and online calculators for convenience. For instance, the August-Roche-Magnus formula and its approximations are commonly used.

**Example of an approximation:**

A commonly cited approximation for dew point temperature ($T_{dp}$) in Celsius, given the dry bulb temperature ($T_{db}$) in Celsius and relative humidity ($RH$) in percent, is:

$T_{dp} = \frac{b \alpha(T_{db}, RH)}{c - \alpha(T_{db}, RH)}$

where $\alpha(T_{db}, RH) = \frac{b T_{db}}{c + T_{db}} + \ln\left(\frac{RH}{100}\right)$ and b=17.62, c=243.12 (constants specific to water vapor).

**d) Using Wet Bulb Temperature:**

Dew point temperature can also be inferred from the wet bulb temperature ($T_{wb}$) and dry bulb temperature ($T_{db}$), though it's not a direct readout. On a psychrometric chart, the dew point is found by locating the intersection of the constant wet bulb temperature line and the saturation curve.

**Referencing Textbooks:**

*   **Kothandaraman (2023):** The data book will contain extensive psychrometric charts and tables that are essential for directly reading dew point temperatures.
*   **Ahamadul Ameen (2020):** This textbook likely provides methods for calculating dew point temperature from given psychrometric data, possibly including simplified formulas.
*   **Arora S.C. and Domkundwar (2018):** This book will offer practical examples and methods for using psychrometric charts to determine dew point temperature.

### 5. Dew Point Temperature in Applied Psychrometry

Dew point temperature plays a critical role in various air conditioning processes.

**a) Cooling and Dehumidification:**

When air is cooled below its dew point temperature, excess water vapor condenses into liquid water. This is the primary mechanism for dehumidification in air conditioning systems.

*   **Cooling Coils:** Air is passed over a cold surface (cooling coil) which is maintained at a temperature below the dew point of the incoming air. As the air contacts the cold surface, it cools and loses moisture through condensation.
*   **Process:**
    1.  Warm, humid air enters the cooling coil.
    2.  Air is cooled to a temperature below its dew point.
    3.  Water vapor condenses on the coil surface.
    4.  The condensed water (condensate) is drained away.
    5.  Cooled, dehumidified air leaves the coil.

**Example:**

If air enters an air conditioner at 30°C dry bulb and 60% RH (dew point ≈ 22°C), and the cooling coil surface temperature is 12°C, the air will be cooled significantly below its dew point. The air leaving the coil will be close to saturation at 12°C (dew point ≈ 12°C), thus significantly reducing its moisture content.

**b) Humidification:**

While not directly related to condensation, understanding the dew point of the incoming air is still relevant for processes that aim to add moisture. For instance, when adding moisture, it's important not to exceed the dew point of the conditioned space's air to prevent condensation.

**c) Air Washers:**

Air washers can both cool/dehumidify and humidify/sensible heat. When operating in a cooling mode with spray water at a lower temperature than the dew point of the air, they achieve dehumidification.

**d) Refrigeration Systems:**

In refrigeration systems, the dew point temperature of the air being cooled is critical for determining the frost formation on evaporator coils. If the coil temperature is below the dew point, moisture will condense, and if it's below the freezing point, frost will form, reducing heat transfer efficiency.

**Referencing Textbooks:**

*   **Jones (2001):** Chapter 4 (Cooling and Dehumidification) will detail the process of how dew point temperature dictates the amount of moisture removed by cooling.
*   **Stoecker & Jons:** This text would likely cover the practical implications of dew point in evaporator design and operation for frost control.
*   **ASHRAE Handbook:** The ASHRAE Handbook provides comprehensive data and guidelines on psychrometric processes, including detailed explanations of dehumidification and condensation control based on dew point temperature.

### 6. Practical Significance and "Points to Remember"

*   **Dew Point = Absolute Humidity Indicator:** A higher dew point means more water vapor is present in the air, regardless of the dry bulb temperature.
*   **Comfort Level:** For human comfort, it's generally desirable to maintain the dew point temperature below 15-18°C (59-64°F).
*   **Condensation Risk:** If the surface temperature of any material is below the dew point of the surrounding air, condensation will occur on that surface. This is critical for building design and HVAC system design.
*   **Dehumidification Target:** The target dew point temperature determines the required cooling coil temperature for effective dehumidification.
*   **Frost Formation:** If the dew point temperature is below the freezing point of water (0°C or 32°F) and the cooling surface is below this, frost will form. This is important for freezer coils.
*   **Psychrometric Chart is Your Friend:** Always utilize psychrometric charts for a visual understanding and accurate determination of dew point temperature.
*   **Saturation Curve:** The dew point temperature is always found on the saturation curve of the psychrometric chart for a given specific humidity.

### 7. Practice Questions and Answers

**Question 1:**
An air sample has a dry bulb temperature of 30°C and a wet bulb temperature of 22°C. The atmospheric pressure is 100 kPa. Using a psychrometric chart or relevant data, determine the dew point temperature of this air.

**Answer:**
By locating the intersection of the 30°C dry bulb line and the 22°C wet bulb line on a standard psychrometric chart, and then following the horizontal line to the saturation curve, you will find the dew point temperature. Alternatively, using psychrometric calculations or software, you would find the specific humidity corresponding to these conditions. For typical values, the dew point temperature would be approximately **18.5°C**.

**Question 2:**
What is the dew point temperature of air that is saturated at 25°C?

**Answer:**
When air is saturated, its dry bulb temperature, wet bulb temperature, and dew point temperature are all the same. Therefore, if the air is saturated at 25°C, its dew point temperature is **25°C**.

**Question 3:**
Explain why it is important to control the dew point temperature in an air-conditioned space.

**Answer:**
Controlling the dew point temperature is important for:
*   **Comfort:** Maintaining a low dew point (typically below 15-18°C) prevents a sticky feeling by allowing sweat to evaporate efficiently.
*   **Condensation Prevention:** If the dew point is too high, condensation can occur on cold surfaces like windows, cooling coils, and ducts. This can lead to mold growth, material damage, and reduced system efficiency.
*   **Health:** Excessive condensation can promote the growth of mold and bacteria, which are detrimental to indoor air quality and occupant health.

**Question 4:**
An air stream enters a cooling coil at 35°C dry bulb and 50% RH. The cooling coil surface temperature is 10°C. Will dehumidification occur? Explain your reasoning based on dew point temperature.

**Answer:**
Yes, dehumidification will occur.
*   First, determine the dew point temperature of the incoming air. At 35°C dry bulb and 50% RH, the dew point temperature is approximately 25.2°C.
*   The cooling coil surface temperature is 10°C, which is significantly below the dew point temperature of the air (25.2°C).
*   When air is cooled below its dew point temperature, the excess water vapor condenses into liquid water, thus reducing the moisture content of the air. This process is called dehumidification.

**Question 5:**
If the partial pressure of water vapor in the air is 1.5 kPa, and the total atmospheric pressure is 101.3 kPa, what is the dew point temperature? (Assume standard atmospheric pressure).

**Answer:**
The dew point temperature is the temperature at which the saturation pressure of water vapor equals the partial pressure of water vapor in the air. So, we need to find the saturation temperature corresponding to a pressure of 1.5 kPa.
Using steam tables (or a calculator), the saturation temperature at 1.5 kPa is approximately **11.5°C**. Therefore, the dew point temperature is **11.5°C**.

### 8. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K2, K4):** Understanding the definition and significance of dew point temperature aligns with defining basic concepts and analyzing properties of moist air.
*   **CO5 (Knowledge Level K2, K4):** This topic directly addresses analyzing properties of moist air using psychrometric principles. Determining and understanding dew point temperature is fundamental to understanding the working principles of air conditioning systems and how they manipulate air properties.

This detailed set of notes covers the concept of dew point temperature comprehensively, drawing upon the importance and typical content found in the referenced textbooks for Refrigeration and Air Conditioning.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
