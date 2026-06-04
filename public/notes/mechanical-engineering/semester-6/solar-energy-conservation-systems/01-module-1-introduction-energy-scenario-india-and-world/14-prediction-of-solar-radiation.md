---
title: "prediction of solar radiation"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463baf"
status: "completed"
scrapedAt: "2026-05-20T18:08:00.647Z"
---
# Module 1: Introduction: Energy Scenario: India and World - Topic: Prediction of Solar Radiation

## 1. Introduction to Solar Radiation and its Importance in Solar Energy Conservation Systems

Solar energy is a fundamental renewable energy source with immense potential. To effectively harness and conserve solar energy through various technologies, a thorough understanding of solar radiation is crucial. This topic focuses on understanding and predicting the amount of solar energy reaching the Earth's surface, which is the primary driver for solar energy systems.

**Key Concepts:**

*   **Solar Radiation:** The electromagnetic radiation emitted by the Sun.
*   **Energy Scenario:** The current state and future outlook of energy production, consumption, and availability, both globally and within specific regions like India.
*   **Solar Energy Conservation Systems:** Technologies and strategies designed to capture, convert, store, and efficiently utilize solar energy.

**Importance of Predicting Solar Radiation:**

*   **System Design:** Crucial for sizing solar collectors, photovoltaic (PV) panels, and other components to meet energy demands.
*   **Performance Estimation:** Enables accurate prediction of energy output and generation potential of solar systems.
*   **Economic Feasibility:** Helps in evaluating the financial viability and return on investment for solar projects.
*   **Grid Integration:** Essential for managing the intermittent nature of solar power and integrating it into the electricity grid.
*   **Resource Assessment:** Identifies suitable locations for solar power plants and estimates the available solar resource.

## 2. The Sun-Earth Relationship and Solar Geometry

Understanding the relative positions and movements of the Sun and Earth is fundamental to predicting solar radiation at any given location.

**Key Concepts:**

*   **Solar Constant ($I_{sc}$):** The rate at which solar energy is received by a unit area perpendicular to the Sun's rays at the Earth's mean distance from the Sun.
    *   **Value:** Approximately 1361 W/m² (Messenger & Ventre, 2012).
    *   **Note:** While often referred to as a "constant," it can vary slightly due to solar activity.

*   **Earth's Orbit:** The elliptical path the Earth follows around the Sun.
    *   **Perihelion:** Earth is closest to the Sun (around January 3rd).
    *   **Aphelion:** Earth is farthest from the Sun (around July 4th).
    *   **Effect:** Causes a slight variation (about 3.5%) in solar radiation received throughout the year.

*   **Earth's Rotation:** The spin of the Earth on its axis, causing day and night.

*   **Earth's Tilt:** The Earth's axis is tilted at approximately 23.5° with respect to its orbital plane. This tilt is responsible for the seasons.

**Solar Geometry Parameters:**

*   **Zenith Angle ($\theta$):** The angle between the Sun's rays and the vertical (zenith). A zenith angle of 0° means the Sun is directly overhead.
*   **Altitude Angle ($\alpha$):** The angle between the Sun's rays and the horizontal. $\alpha = 90^\circ - \theta$.
*   **Azimuth Angle ($\gamma$):** The angle between the Sun's rays and the local meridian (North-South line). Usually measured eastward from South in the Northern Hemisphere and westward from South in the Southern Hemisphere.
*   **Hour Angle ($\omega$):** The angle of rotation of the Earth relative to the Sun. It's 0° at solar noon, positive in the afternoon, and negative in the morning. For every hour, it changes by 15°.

**Formulas for Solar Geometry (Sukhatme, 2017):**

The zenith angle ($\theta$) can be calculated using the following formula:

$$
\cos \theta = \sin \alpha \sin \phi - \cos \alpha \cos \phi \cos(\omega)
$$

Where:
*   $\alpha$ = Solar Altitude Angle
*   $\phi$ = Local Latitude
*   $\omega$ = Hour Angle

A more fundamental formula for the zenith angle is:

$$
\cos \theta = \sin \delta \sin \phi + \cos \delta \cos \phi \cos(\omega)
$$

Where:
*   $\delta$ = Declination Angle: The angle between the Earth's equatorial plane and the Sun's rays. It varies from +23.45° (summer solstice) to -23.45° (winter solstice).

**Declination Angle ($\delta$) Calculation:**

A simplified approximation for the declination angle is:

$$
\delta = 23.45^\circ \sin \left( \frac{360}{365} (n - 81) \right)
$$

Where:
*   $n$ = Day number of the year (e.g., January 1st is $n=1$, December 31st is $n=365$).

**Example:** Calculate the zenith angle for a location at 30° N latitude at solar noon on the summer solstice (n=172, $\delta$ = 23.45°).

*   Latitude ($\phi$) = 30°
*   Hour Angle ($\omega$) = 0° (solar noon)
*   Declination Angle ($\delta$) = 23.45°

$$
\cos \theta = \sin(23.45^\circ) \sin(30^\circ) + \cos(23.45^\circ) \cos(30^\circ) \cos(0^\circ)
$$
$$
\cos \theta = (0.3979)(0.5) + (0.9171)(0.8660)(1)
$$
$$
\cos \theta = 0.19895 + 0.7946
$$
$$
\cos \theta = 0.99355
$$
$$
\theta = \arccos(0.99355) \approx 6.5^\circ
$$

**Important Points to Remember:**

*   The sun's position changes throughout the day and year due to Earth's rotation and revolution.
*   Latitude and declination angle are key parameters for calculating solar angles.
*   Solar noon is when the sun is at its highest point in the sky.

## 3. Types of Solar Radiation

Solar radiation reaching the Earth's surface is not uniform and can be categorized into different components based on its interaction with the atmosphere.

**Key Concepts:**

*   **Extraterrestrial Radiation ($I_0$):** The solar radiation received outside the Earth's atmosphere. It is often represented as the solar constant multiplied by a correction factor for the Earth's orbital position.
    *   **Formula:** $I_0 = I_{sc} \cdot E_0$, where $E_0$ is the eccentricity correction factor.
    *   **Eccentricity Correction Factor ($E_0$):**
        $$
        E_0 = 1 + 0.033 \cos \left( \frac{360n}{365} \right)
        $$
        (Tiwari, 2016)

*   **Direct Normal Irradiance (DNI):** The solar radiation that travels directly from the Sun to the receiver, without being scattered or absorbed by the atmosphere. It is measured perpendicular to the Sun's rays.
    *   **Importance:** Crucial for concentrating solar power (CSP) systems.

*   **Diffuse Horizontal Irradiance (DHI):** The solar radiation that has been scattered by atmospheric particles (clouds, aerosols, etc.) and reaches the receiver from all directions in the sky dome. It is measured on a horizontal surface.
    *   **Importance:** Contributes to the energy captured by flat-plate collectors and PV panels.

*   **Global Horizontal Irradiance (GHI):** The total solar radiation received on a horizontal surface. It is the sum of DNI and DHI, adjusted for the angle of incidence.
    *   **Formula:** $GHI = DNI \cos \theta_z + DHI$
        *   $\theta_z$ = Zenith angle.
    *   **Importance:** Represents the total solar energy available on a horizontal plane, commonly measured by weather stations.

*   **Beam Radiation on a Tilted Surface ($I_b$):** The component of direct solar radiation that falls on a tilted surface.
    *   **Calculation:** Requires the DNI and the angle of incidence ($\theta_i$) on the tilted surface.
    *   **Formula:** $I_b = DNI \cos \theta_i$

*   **Diffuse Radiation on a Tilted Surface ($I_d$):** The diffuse component that falls on a tilted surface. Various models exist to estimate this, often assuming the sky is a uniform source of diffuse radiation or using anisotropic models (Goswami et al., 2015).

*   **Reflected Radiation ($I_r$):** Solar radiation reflected from the ground or surroundings onto the collector. This depends on the surface's albedo (reflectivity).

**Total Radiation on a Tilted Surface ($I_t$):**

$$
I_t = I_b + I_d + I_r
$$

**Important Points to Remember:**

*   The three primary components of solar radiation measured at the surface are DNI, DHI, and GHI.
*   The angle of incidence is critical for calculating the amount of radiation captured by any solar collector.
*   Atmospheric conditions (clouds, dust, water vapor) significantly affect the intensity and composition of solar radiation.

## 4. Methods for Predicting Solar Radiation

Predicting solar radiation is essential for the design and operation of solar energy systems. Various methods, ranging from empirical models to sophisticated numerical simulations, are used.

**Key Concepts:**

*   **Empirical Models:** Based on statistical relationships derived from historical solar radiation data and meteorological parameters.
*   **Statistical Models:** Utilize time-series analysis and regression techniques to forecast solar radiation.
*   **Physical Models:** Employ atmospheric physics and radiative transfer equations to simulate solar radiation.
*   **Machine Learning (ML) and Artificial Intelligence (AI):** Increasingly used for improved prediction accuracy by learning complex patterns from data.

**Common Prediction Methods:**

1.  **Clear Sky Models:**
    *   **Description:** Predict the solar radiation on a cloudless day. These models rely on solar geometry, atmospheric turbidity (cleanliness of the atmosphere), and water vapor content.
    *   **Examples:** Bird's Clear Sky Model, ASHRAE Clear Sky Model.
    *   **Application:** Provide an upper bound for solar energy availability and are useful for initial system sizing.

2.  **Sunshine Duration Models:**
    *   **Description:** Relate GHI to extraterrestrial radiation and the measured duration of bright sunshine (usually from a sunshine recorder).
    *   **Examples:** Angstrom-Prescott model, which correlates GHI with extraterrestrial radiation and sunshine hours.
        $$
        GHI = I_0 (a + b \frac{n}{N})
        $$
        Where:
        *   $I_0$ = Extraterrestrial radiation on a horizontal surface.
        *   $n$ = Actual sunshine hours.
        *   $N$ = Maximum possible sunshine hours (daylight hours).
        *   $a, b$ = Empirical coefficients that vary with location and atmospheric conditions.
    *   **Reference:** Sukhatme (2017) provides detailed discussion on these empirical correlations.

3.  **Cloud Cover Models:**
    *   **Description:** Adjust clear sky predictions based on observed or forecasted cloud cover.
    *   **Methods:**
        *   **Simple Cloudiness Factor:** A fraction of clear sky radiation is assumed to be available based on cloudiness percentage.
        *   **More Sophisticated Models:** Consider cloud type, thickness, and altitude.

4.  **Statistical Forecasting (Time Series Analysis):**
    *   **Description:** Uses past solar radiation data to predict future values. Techniques include:
        *   **Autoregressive Integrated Moving Average (ARIMA):** Models temporal dependencies in the data.
        *   **Exponential Smoothing:** Gives more weight to recent observations.
    *   **Application:** Short-term forecasting (hours to days ahead) for grid management and operational control.

5.  **Numerical Weather Prediction (NWP) Models:**
    *   **Description:** Simulate atmospheric processes using physics-based equations. They can predict cloud cover and other atmospheric variables that influence solar radiation.
    *   **Application:** Medium to long-term forecasting, often used by meteorological agencies.

6.  **Machine Learning (ML) Models:**
    *   **Description:** Algorithms like Artificial Neural Networks (ANNs), Support Vector Machines (SVMs), and Random Forests are trained on historical data (solar radiation, meteorological parameters, satellite imagery) to make predictions.
    *   **Advantages:** Can capture complex non-linear relationships and often achieve higher accuracy than traditional statistical models, especially for short to medium-term forecasting.
    *   **Reference:** Tiwari (2016) discusses the evolving role of AI in energy systems.

7.  **Satellite-Based Estimation:**
    *   **Description:** Uses data from geostationary satellites that monitor cloud cover and other atmospheric parameters. Algorithms are developed to convert satellite imagery into solar radiation estimates over large areas.
    *   **Application:** Providing solar resource maps and near-real-time solar radiation data for regions where ground measurements are sparse.

**Factors Affecting Prediction Accuracy:**

*   **Data Quality and Availability:** Accuracy depends heavily on the quality and temporal resolution of historical solar radiation and meteorological data.
*   **Atmospheric Variability:** Rapid changes in cloud cover and aerosol concentration are difficult to predict accurately.
*   **Geographic Location:** Local topography and microclimates can influence solar radiation patterns.
*   **Model Complexity and Assumptions:** Simpler models may be less accurate but easier to implement, while complex models require more data and computational resources.

**Important Points to Remember:**

*   No single method is perfect; the choice depends on the application (e.g., long-term resource assessment vs. short-term operational forecasting).
*   Combining multiple methods can often improve prediction accuracy.
*   Continuous validation and updating of models with new data are crucial.

## 5. Solar Radiation Data Sources in India

Reliable solar radiation data is vital for assessing India's solar energy potential and designing effective solar energy conservation systems.

**Key Sources:**

*   **Indian Meteorological Department (IMD):**
    *   **Role:** The primary agency responsible for meteorological observations in India.
    *   **Data:** Collects and archives solar radiation data (GHI, DHI) from a network of meteorological stations across the country.
    *   **Accessibility:** Data can be accessed through IMD's publications, databases, and potentially through specific requests.

*   **National Institute of Solar Energy (NISE):**
    *   **Role:** A premier autonomous institution established under the Ministry of New and Renewable Energy (MNRE) for research and development in solar energy.
    *   **Data:** NISE often conducts solar resource assessments and may maintain its own solar radiation databases, especially from its research sites and demonstration projects.

*   **Solar Energy Corporation of India (SECI):**
    *   **Role:** A nodal agency of the MNRE for the development of solar energy.
    *   **Data:** SECI's projects and tenders often require detailed solar resource assessments, and they may have access to or generate significant solar radiation data.

*   **Satellite-Based Data Providers:**
    *   **Examples:** Solargis, NASA's Surface Meteorology and Solar Energy (SM&SE) project, European Organization for the Exploitation of Meteorological Satellites (EUMETSAT).
    *   **Data:** These providers offer global and regional solar radiation datasets derived from satellite imagery, often with high spatial and temporal resolution. They are valuable for regions with limited ground-based measurements.

*   **Academic and Research Institutions:**
    *   Various universities and research laboratories in India conduct solar energy research and may collect and publish specific solar radiation datasets.

**Data Formats:**

*   **Ground-Based Measurements:** Typically provided in CSV, text files, or specialized meteorological data formats, often on an hourly or daily basis.
*   **Satellite-Based Data:** Available in formats like NetCDF, GeoTIFF, often with hourly, daily, or monthly averages.

**Important Points to Remember:**

*   Always try to obtain data from reliable and officially recognized sources.
*   Understand the units and time resolution of the data provided.
*   Be aware of the limitations of ground-based data (e.g., missing values due to instrument malfunction) and satellite data (e.g., potential inaccuracies under persistent cloud cover).

## 6. Practice Questions and Exercises

**Question 1:**
Define solar constant and list its approximate value. What is the primary reason for the slight variation in solar radiation received at the top of the atmosphere throughout the year?
*(Corresponds to CO1)*

**Question 2:**
Explain the difference between Direct Normal Irradiance (DNI) and Diffuse Horizontal Irradiance (DHI). Which type of solar energy technology primarily relies on DNI?
*(Corresponds to CO1, CO2)*

**Question 3:**
Calculate the declination angle for day number 250 of the year.
*(Corresponds to CO1)*

**Question 4:**
A solar collector is to be installed in a location at 20° N latitude. What is the hour angle at 2:00 PM solar time?
*(Corresponds to CO1)*

**Question 5:**
Discuss the role of atmospheric conditions like turbidity and cloud cover in predicting solar radiation.
*(Corresponds to CO1)*

**Question 6:**
Name two common sources of solar radiation data in India and briefly describe their roles.
*(Corresponds to CO1)*

**Question 7:**
The Angstrom-Prescott model relates Global Horizontal Irradiance (GHI) to extraterrestrial radiation and sunshine hours. What are the typical empirical coefficients ($a$ and $b$) used in this model, and what do they represent? (Refer to Sukhatme, 2017 for typical values if needed).
*(Corresponds to CO1)*

---

## Answers to Practice Questions

**Answer 1:**
The solar constant ($I_{sc}$) is the rate at which solar energy is received by a unit area perpendicular to the Sun's rays at the Earth's mean distance from the Sun. Its approximate value is 1361 W/m². The primary reason for the slight variation in solar radiation received at the top of the atmosphere throughout the year is the **elliptical nature of Earth's orbit** around the Sun. Earth is closer to the Sun at perihelion (January) and farther at aphelion (July), causing about a 3.5% variation in solar irradiance.

**Answer 2:**
*   **Direct Normal Irradiance (DNI):** This is the solar radiation that travels directly from the Sun to the receiver, without being scattered or absorbed by the atmosphere. It is measured perpendicular to the Sun's rays.
*   **Diffuse Horizontal Irradiance (DHI):** This is the solar radiation that has been scattered by atmospheric particles and reaches the receiver from all directions in the sky dome. It is measured on a horizontal surface.

The solar energy technology that primarily relies on **DNI** is **Concentrating Solar Power (CSP)** systems, which use mirrors to focus direct sunlight.

**Answer 3:**
Using the simplified formula for declination angle:
$$
\delta = 23.45^\circ \sin \left( \frac{360}{365} (n - 81) \right)
$$
For $n = 250$:
$$
\delta = 23.45^\circ \sin \left( \frac{360}{365} (250 - 81) \right)
$$
$$
\delta = 23.45^\circ \sin \left( \frac{360}{365} (169) \right)
$$
$$
\delta = 23.45^\circ \sin (166.74^\circ)
$$
$$
\delta = 23.45^\circ \times 0.3946
$$
$$
\delta \approx 9.25^\circ
$$
The declination angle for day number 250 is approximately 9.25°.

**Answer 4:**
Solar time is based on the Sun's position. Solar noon is when the Sun is at its highest point (hour angle = 0°). The Earth rotates 15° per hour.
Therefore, 2:00 PM solar time is 2 hours after solar noon.
Hour Angle ($\omega$) = 2 hours * 15°/hour = 30°.
The hour angle at 2:00 PM solar time is 30°.

**Answer 5:**
*   **Turbidity:** Refers to the amount of dust, aerosols, and other microscopic particles in the atmosphere. Higher turbidity scatters and absorbs more solar radiation, reducing the amount reaching the surface, especially the direct component.
*   **Cloud Cover:** Clouds are major attenuators of solar radiation. They can block direct sunlight (reducing DNI significantly) and scatter radiation (increasing DHI). The type, thickness, and altitude of clouds greatly influence the amount and type of solar radiation reaching the ground. Predicting cloud movement and formation is crucial for accurate solar radiation forecasting.

**Answer 6:**
1.  **Indian Meteorological Department (IMD):** The primary government agency responsible for meteorological observations in India. It collects and archives solar radiation data from a network of ground stations across the country, providing valuable data for resource assessment.
2.  **National Institute of Solar Energy (NISE):** An autonomous institution under MNRE. NISE conducts research and development in solar energy and often maintains solar radiation databases from its research sites and projects, contributing to a better understanding of the solar resource in specific regions.

**Answer 7:**
The Angstrom-Prescott model is: $GHI = I_0 (a + b \frac{n}{N})$.
*   $I_0$ is the extraterrestrial radiation on a horizontal surface.
*   $n$ is the actual sunshine hours.
*   $N$ is the maximum possible sunshine hours.
*   **$a$ and $b$ are empirical coefficients.**
    *   The term $(a + b \frac{n}{N})$ represents the ratio of actual GHI to extraterrestrial radiation.
    *   Coefficient $a$ is often interpreted as the fraction of extraterrestrial radiation received on a clear day with zero sunshine hours (e.g., heavily overcast conditions where only diffuse radiation might penetrate).
    *   Coefficient $b$ represents the additional fraction of extraterrestrial radiation received per unit of sunshine duration.
    *   Typical values for $a$ range from 0.25 to 0.35, and for $b$ range from 0.45 to 0.65, but these values are location-specific and can be determined by correlating local GHI measurements with sunshine duration data (as per Sukhatme, 2017).

---

## 7. Important Points to Remember for Module 1, Topic: Prediction of Solar Radiation

*   **Foundation for Solar Systems:** Accurate prediction of solar radiation is the bedrock for designing, sizing, and evaluating the performance of all solar energy conservation systems.
*   **Sun-Earth Geometry is Key:** Understanding the Earth's tilt, orbit, and rotation is essential for calculating the angle of the Sun relative to any point on Earth throughout the day and year.
*   **Components of Radiation:** Differentiate between Direct, Diffuse, and Global radiation, as different solar technologies utilize these components differently.
*   **Atmospheric Influence:** The atmosphere significantly alters solar radiation through scattering and absorption by gases, aerosols, and clouds.
*   **Predictive Methods Vary:** Choose the prediction method based on the required accuracy, timescale (short-term vs. long-term), and available data. Clear sky, sunshine duration, statistical, and ML models all have their applications.
*   **Data is Crucial:** Access to reliable, high-quality solar radiation data (from IMD, NISE, satellite sources, etc.) is paramount for both model development and system design.
*   **India's Potential:** Understanding the variability and availability of solar radiation across different regions of India is key to developing effective solar energy strategies.

This comprehensive set of notes covers the fundamental aspects of predicting solar radiation, aligning with the learning outcomes and course objectives for Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
