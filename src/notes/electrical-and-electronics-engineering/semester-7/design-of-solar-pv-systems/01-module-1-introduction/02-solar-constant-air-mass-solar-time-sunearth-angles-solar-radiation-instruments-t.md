---
title: "Solar Constant -Air Mass -Solar Time-Sun‒Earth Angles-Solar Radiation-Instruments to Measure Solar Radiation-Pyrheliometer –Pyranometer - Sunshine Recorder -Solar Radiation on a Horizontal Surface"
subject: "DESIGN OF SOLAR PV SYSTEMS"
module: "Module 1: Introduction  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a88"
status: "completed"
scrapedAt: "2026-05-23T16:34:22.421Z"
---
# DESIGN OF SOLAR PV SYSTEMS

## Module 1: Introduction

### Topic: Solar Constant, Air Mass, Solar Time, Sun-Earth Angles, Solar Radiation, Instruments to Measure Solar Radiation, Pyrheliometer, Pyranometer, Sunshine Recorder, Solar Radiation on a Horizontal Surface

---

This module introduces fundamental concepts related to solar energy, crucial for understanding and designing solar photovoltaic (PV) systems. It lays the groundwork for comprehending how solar energy is quantified, how its availability varies, and the tools used to measure it.

---

### 1. Solar Constant (S₀)

**Key Concept:** The solar constant is a measure of the total solar irradiance received on a surface perpendicular to the sun's rays, at a mean distance from the sun, outside Earth's atmosphere.

**Definition:**
*   The solar constant is the average solar irradiance incident on a surface normal to the sun's rays at the mean Earth-Sun distance, in the absence of atmospheric attenuation.
*   It represents the maximum solar energy available for conversion on Earth.

**Value:**
*   The accepted value for the solar constant is approximately **1361 W/m²** (or 1.361 kW/m²). (Source: Chetan Singh Solanki, 3rd Edition)
*   This value is subject to slight variations due to changes in the Earth's orbital distance and solar activity.

**Importance:**
*   Provides a baseline for calculating solar radiation reaching the Earth.
*   Essential for energy balance calculations for the Earth and for estimating the potential energy available for solar technologies.

**Highlight:** The solar constant is measured *outside* the atmosphere. Once solar radiation enters the atmosphere, it is attenuated.

---

### 2. Air Mass (AM)

**Key Concept:** Air mass is a measure of the path length that solar radiation travels through the Earth's atmosphere to reach a given point on the Earth's surface.

**Definition:**
*   Air Mass is defined as the ratio of the actual path length of solar radiation through the atmosphere to the path length when the sun is directly overhead (zenith).
*   Mathematically, it is often approximated as $AM = \frac{1}{\cos(\theta_z)}$, where $\theta_z$ is the zenith angle.

**Types of Air Mass:**
*   **AM0:** Represents solar radiation outside the Earth's atmosphere (like the solar constant).
*   **AM1:** Represents solar radiation when the sun is directly overhead at sea level (zenith angle = 0°). This is the standard reference for solar cell testing.
*   **AM1.5:** Represents solar radiation when the sun is at a zenith angle of approximately 48.2° at sea level. This is the most commonly used standard for global solar energy applications as it accounts for typical atmospheric conditions and angles. (Source: Chetan Singh Solanki, 3rd Edition)
*   **AM2, AM3, etc.:** Indicate longer path lengths through the atmosphere, corresponding to larger zenith angles or higher altitudes.

**Factors Affecting Air Mass:**
*   **Zenith Angle ($\theta_z$):** The primary factor. Larger zenith angles mean greater air mass.
*   **Atmospheric Pressure/Altitude:** Higher altitudes have less atmosphere, leading to lower air mass for the same zenith angle.
*   **Temperature and Humidity:** These also influence the atmospheric density and composition, slightly affecting the path length.

**Importance:**
*   Determines the intensity and spectral distribution of solar radiation reaching the Earth's surface.
*   Higher air mass leads to lower solar irradiance and a shift in the spectrum towards longer wavelengths due to scattering and absorption by atmospheric constituents (gases, dust, water vapor).

**Example:** If the sun is at a zenith angle of 60°, the air mass would be $AM = \frac{1}{\cos(60^\circ)} = \frac{1}{0.5} = 2$. This means the sunlight travels twice the distance through the atmosphere compared to when the sun is directly overhead.

**Highlight:** AM1.5 is the standard for testing solar PV modules, as it represents a typical and realistic scenario for many locations.

---

### 3. Solar Time and Earth-Sun Angles

**Key Concept:** Solar time accounts for the Earth's rotation and orbital motion, determining the apparent position of the sun in the sky. Various angles are used to describe this position.

#### 3.1 Solar Time (Apparent Solar Time)

**Definition:**
*   Solar time is based on the apparent position of the sun in the sky. It is local time as determined by the sun's position, independent of standard time zones.
*   Noon is defined as the moment the sun is at its highest point in the sky (local meridian passage).

**Relationship to Standard Time:**
*   **Local Apparent Time (LAT) = Standard Time (ST) + Equation of Time (EoT) + 4 x (Longitude Difference)**
    *   **Equation of Time (EoT):** The difference between apparent solar time and mean solar time, due to the Earth's elliptical orbit and axial tilt. It varies throughout the year. (Source: G.N. Tiwari, 2002)
    *   **Longitude Difference:** The difference in longitude between the observer's location and the reference meridian of the standard time zone. The Earth rotates 15° per hour, so a 1° difference corresponds to 4 minutes.

**Importance:**
*   Crucial for accurately tracking the sun's position for solar energy systems.
*   Essential for calculating the angle of incidence of solar radiation on a surface.

#### 3.2 Sun-Earth Angles

**a) Zenith Angle ($\theta_z$):**
*   **Definition:** The angle between the zenith (the point directly overhead) and the sun's rays.
*   **Calculation:** $\cos(\theta_z) = \sin(\phi) \sin(\delta) + \cos(\phi) \cos(\delta) \cos(\omega)$
    *   $\phi$: Latitude of the location.
    *   $\delta$: Declination angle of the sun.
    *   $\omega$: Hour angle.
*   **Range:** 0° (sun directly overhead) to 90° (sun on the horizon) and beyond.
*   **Importance:** Directly affects the intensity of solar radiation reaching a surface. Intensity is proportional to $\cos(\theta_z)$.

**b) Altitude Angle ($\alpha$):**
*   **Definition:** The angle between the horizontal plane and the sun's rays.
*   **Relationship to Zenith Angle:** $\alpha = 90^\circ - \theta_z$.
*   **Range:** 0° (sun on the horizon) to 90° (sun directly overhead).
*   **Importance:** Another way to express the sun's height in the sky.

**c) Azimuth Angle ($\gamma$):**
*   **Definition:** The angle between the true south direction (in the Northern Hemisphere) or true north direction (in the Southern Hemisphere) and the projection of the sun's rays onto the horizontal plane.
*   **Convention:** Often measured clockwise from South (Northern Hemisphere).
*   **Calculation:** $\sin(\gamma) = \frac{\cos(\delta) \sin(\omega)}{\cos(\alpha)}$
*   **Range:** Typically -180° to +180°.
*   **Importance:** Describes the sun's position relative to North/South. Important for tracking systems and optimizing the orientation of fixed surfaces.

**d) Declination Angle ($\delta$):**
*   **Definition:** The angle between the equatorial plane and the line joining the center of the Earth to the center of the sun. It varies with the day of the year due to the Earth's axial tilt.
*   **Approximate Formula:** $\delta \approx 23.45^\circ \sin\left(\frac{360}{365}(n - 81)\right)$ degrees, where 'n' is the day number of the year. (Source: Chetan Singh Solanki, 3rd Edition)
*   **Range:** Approximately +23.45° (summer solstice) to -23.45° (winter solstice).
*   **Importance:** A fundamental angle determining the sun's path and height throughout the year.

**e) Hour Angle ($\omega$):**
*   **Definition:** The angle that measures the time of day, based on the Earth's rotation. It is 0° at solar noon, increasing by 15° for every hour before or after solar noon.
*   **Calculation:** $\omega = 15^\circ \times (\text{Solar Time in hours} - 12)$
*   **Example:** At 10:00 AM solar time, $\omega = 15^\circ \times (10 - 12) = -30^\circ$. At 2:00 PM solar time, $\omega = 15^\circ \times (14 - 12) = +30^\circ$.
*   **Importance:** Directly used in calculating zenith and altitude angles.

**Example Calculation:**
Let's calculate the zenith angle for a location at latitude $\phi = 30^\circ$ N on the summer solstice ($\delta = +23.45^\circ$) at solar noon ($\omega = 0^\circ$).
$\cos(\theta_z) = \sin(30^\circ) \sin(23.45^\circ) + \cos(30^\circ) \cos(23.45^\circ) \cos(0^\circ)$
$\cos(\theta_z) = (0.5)(0.3979) + (0.8660)(0.9174)(1)$
$\cos(\theta_z) = 0.1990 + 0.7940 = 0.9930$
$\theta_z = \arccos(0.9930) \approx 7.3^\circ$
The altitude angle would be $\alpha = 90^\circ - 7.3^\circ = 82.7^\circ$.

**Highlight:** Understanding these angles is critical for determining the **angle of incidence (AOI)** of solar radiation onto a solar panel, which directly impacts its energy output. For a flat-plate collector tilted at an angle $\beta$ and facing a certain azimuth $\gamma_s$, the AOI ($\theta$) is calculated using these fundamental angles.

---

### 4. Solar Radiation

**Key Concept:** Solar radiation is the energy emitted by the sun in the form of electromagnetic waves. On Earth, it's quantified as irradiance (power per unit area) or insolation (energy per unit area over time).

**Components of Solar Radiation at the Surface:**

**a) Direct Normal Irradiance (DNI):**
*   **Definition:** The solar radiation that has traveled directly from the sun to the receiver without being scattered or absorbed by the atmosphere. It is measured in W/m² and is perpendicular to the sun's rays.
*   **Source:** This is the radiation that causes shadows.
*   **Importance:** Crucial for concentrating solar power (CSP) systems and for calculating radiation on tilted surfaces.

**b) Diffuse Horizontal Irradiance (DHI):**
*   **Definition:** Solar radiation that has been scattered by atmospheric components (molecules, aerosols, clouds) and reaches the receiver from all directions in the sky. It is measured in W/m² and is measured on a horizontal surface.
*   **Source:** The "blue sky" radiation.
*   **Importance:** Contributes to the energy captured by flat-plate PV panels and is significant on cloudy days.

**c) Global Horizontal Irradiance (GHI):**
*   **Definition:** The total solar radiation received on a horizontal surface. It is the sum of direct normal irradiance (on a horizontal surface) and diffuse horizontal irradiance.
*   **Calculation:** $GHI = DNI \cos(\theta_z) + DHI$
    *   $DNI \cos(\theta_z)$ is the direct component from the sun, projected onto the horizontal plane.
*   **Importance:** This is the most commonly measured and reported form of solar radiation on a flat surface.

**d) Tilted Irradiance:**
*   **Definition:** Solar radiation received on a surface that is tilted at an angle to the horizontal plane. This is what a solar panel typically receives.
*   **Calculation:** It involves transforming DNI and DHI to account for the tilt angle and orientation of the surface. Various models exist for this (e.g., Hay-Davies, Perez models).
*   **Importance:** Directly relates to the energy output of a solar PV array.

**Highlight:** The total solar energy available at any location is a combination of direct and diffuse radiation. The proportions of each vary significantly with weather conditions, time of day, and season.

---

### 5. Instruments to Measure Solar Radiation

**Key Concept:** Specialized instruments are used to accurately measure the different components of solar radiation.

#### 5.1 Pyrheliometer

**Description:**
*   A pyrheliometer is an instrument designed to measure **direct normal irradiance (DNI)**.
*   It typically consists of a tube with a small aperture that aims at the sun. This tube minimizes the amount of diffuse radiation that enters the sensor.
*   The sensor inside is usually a thermopile or a silicon photodiode calibrated to measure the solar radiation incident on a surface perpendicular to the sun's rays.
*   Requires a tracking mechanism to keep it pointed precisely at the sun throughout the day. (Source: Chetan Singh Solanki, 3rd Edition)

**Use:**
*   Essential for CSP systems.
*   Used in meteorological stations and research to characterize the direct solar component.

#### 5.2 Pyranometer

**Description:**
*   A pyranometer is used to measure **global horizontal irradiance (GHI)**, which is the sum of direct and diffuse solar radiation received on a horizontal surface.
*   It has a wide field of view (nearly 180°) to capture radiation from the entire hemisphere of the sky.
*   The sensor is typically a thermopile or a silicon photodiode covered by a glass dome.
*   Does not require a tracking mechanism.
*   Calibration is critical for accurate measurements. (Source: Chetan Singh Solanki, 3rd Edition)

**Use:**
*   Widely used in weather stations to measure total solar energy.
*   Essential for PV performance monitoring and site assessment for PV systems.
*   Can be tilted to measure radiation on a tilted surface, but the standard is horizontal.

#### 5.3 Sunshine Recorder

**Description:**
*   A sunshine recorder is an instrument that indicates the duration of bright sunshine. It doesn't measure the intensity of radiation but rather the hours the sun is strong enough to burn or scorch.
*   **Campbell-Stokes Sunshine Recorder:** The most common type. It uses a glass sphere to focus the sun's rays onto a specially designed card. The focused beam burns a trace on the card. The length of the burn mark indicates the duration of bright sunshine.
*   **Heliograph:** A more modern electronic device that uses a photodiode to detect direct sunlight and record the hours of sunshine.

**Use:**
*   Provides an indication of the amount of time the sun is unobscured by clouds.
*   Useful for understanding the availability of direct sunlight for PV systems, especially for estimating system performance in relation to cloud cover.

**Highlight:** While sunshine recorders indicate *duration*, pyrheliometers and pyranometers measure the *intensity* and *amount* of solar radiation, which are more critical for energy calculations.

---

### 6. Solar Radiation on a Horizontal Surface (GHI)

**Key Concept:** This section focuses on how solar radiation intensity and energy vary on a flat, horizontal plane throughout the day and year.

**Factors Influencing GHI:**
1.  **Zenith Angle ($\theta_z$):** As the sun moves across the sky, the zenith angle changes, reducing the effective area presented to the sun, thus reducing direct radiation.
2.  **Atmospheric Attenuation:** Scattering and absorption by atmosphere (gases, aerosols, water vapor, clouds) reduce the intensity of both direct and diffuse radiation.
3.  **Cloud Cover:** Clouds significantly reduce both direct and diffuse radiation, with significant variability depending on cloud type and thickness.
4.  **Altitude:** Higher altitudes generally have higher solar radiation due to less atmospheric attenuation.
5.  **Latitude:** Affects the sun's path and maximum altitude throughout the year.
6.  **Time of Day/Year:** Directly influences the zenith angle and declination angle.

**Daily Variation of GHI:**
*   **Morning:** GHI starts from zero at sunrise, increases as the sun rises and the zenith angle decreases.
*   **Solar Noon:** GHI reaches its peak when the sun is at its highest point (smallest zenith angle).
*   **Afternoon:** GHI decreases as the sun moves west and the zenith angle increases towards sunset.
*   **Spectral Distribution:** The color of the sunlight also changes throughout the day. Bluer light is scattered more (making the sky blue), so sunlight is redder at sunrise/sunset when it passes through more atmosphere.

**Annual Variation of GHI:**
*   GHI is generally higher in summer and lower in winter due to changes in the declination angle and day length.
*   The peak GHI values occur around the summer solstice.

**Measurement and Data Sources:**
*   Ground-based measurements from pyranometers.
*   Satellite-derived data (e.g., from NASA, NOAA, European Space Agency).
*   Typical PV system design relies on long-term historical solar radiation data (usually averaged over decades) to predict performance.

**Example:** A location at the equator will have a more consistent daily and annual GHI compared to a location at a higher latitude, where seasonal variations are more pronounced.

**Highlight:** Understanding the daily and annual profile of GHI is essential for sizing PV systems, estimating annual energy production, and predicting system performance under varying weather conditions.

---

### Learning Outcome Alignment & Course Outcomes (CO)

*   **CO1: Explain the basics of solar energy conversion systems. (K1)**
    *   This module directly contributes by explaining the fundamental "fuel" for these systems: solar radiation. Understanding solar constant, air mass, and radiation components is foundational.

*   **CO2: Design a standalone PV system. (K3)**
    *   Knowledge of GHI, DNI, DHI, and sun-earth angles is critical for selecting the appropriate PV technology, determining the optimal tilt and orientation of panels, and estimating energy yield, all essential for standalone system design.

*   **CO3: Demonstrate the operation of a grid interactive PV system. (K2)**
    *   Understanding the availability and variability of solar radiation (as covered in this module) helps in understanding how the output of a grid-interactive PV system fluctuates and how it interacts with the grid.

*   **CO4: Utilize life cycle cost analysis in the planning of Solar PV System (K3)**
    *   While not directly a cost analysis topic, accurate estimation of energy production (dependent on solar radiation data) is a key input for financial modeling and life cycle cost analysis. Without knowing how much energy a system will produce, cost-effectiveness cannot be determined.

---

### Practice Questions and Answers

**Q1.** What is the approximate value of the solar constant?
    a) 1000 W/m²
    b) 1361 W/m²
    c) 1500 W/m²
    d) 500 W/m²

**A1.** b) 1361 W/m²

---

**Q2.** Air Mass 1.5 (AM1.5) refers to solar radiation when the sun is:
    a) Directly overhead at sea level.
    b) At a zenith angle of 48.2° at sea level.
    c) Outside the Earth's atmosphere.
    d) On the horizon.

**A2.** b) At a zenith angle of 48.2° at sea level.

---

**Q3.** Which instrument measures direct normal irradiance (DNI)?
    a) Pyranometer
    b) Sunshine Recorder
    c) Pyrheliometer
    d) Altimeter

**A3.** c) Pyrheliometer

---

**Q4.** If the zenith angle ($\theta_z$) is 60°, what is the air mass (AM)?
    a) 0.5
    b) 1
    c) 2
    d) 4

**A4.** c) 2 (AM = 1 / cos(60°) = 1 / 0.5 = 2)

---

**Q5.** Define Global Horizontal Irradiance (GHI) and explain its main components.

**A5.** Global Horizontal Irradiance (GHI) is the total solar radiation received on a horizontal surface. Its main components are:
    *   **Direct Normal Irradiance (DNI):** Solar radiation that travels directly from the sun, measured perpendicular to the sun's rays. On a horizontal surface, this component is $DNI \times \cos(\theta_z)$, where $\theta_z$ is the zenith angle.
    *   **Diffuse Horizontal Irradiance (DHI):** Solar radiation that has been scattered by the atmosphere and comes from all directions in the sky.
    *   Therefore, $GHI = (DNI \times \cos(\theta_z)) + DHI$.

---

### Important Points to Remember

*   **Solar Constant:** The extraterrestrial solar irradiance (1361 W/m²). It's the baseline.
*   **Air Mass:** A measure of atmospheric path length. AM1.5 is the standard for PV testing. Higher AM means lower irradiance and a red-shifted spectrum.
*   **Sun-Earth Angles:** Zenith, Altitude, Declination, and Hour angles are critical for calculating the sun's position and the angle of incidence.
*   **Solar Radiation Components:** DNI, DHI, and GHI are fundamental for assessing solar energy availability.
*   **Instruments:** Pyrheliometers measure DNI; Pyranometers measure GHI.
*   **GHI:** The most common measure of total solar radiation on a flat surface, influenced by atmospheric conditions and sun position.

---
This module provides the essential scientific and measurement principles required to understand how solar energy is quantified and how its availability is described. These concepts form the basis for analyzing the performance of any solar PV system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
