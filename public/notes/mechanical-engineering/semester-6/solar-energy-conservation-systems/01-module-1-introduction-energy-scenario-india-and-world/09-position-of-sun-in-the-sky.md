---
title: "position of sun in the sky"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463baa"
status: "completed"
scrapedAt: "2026-05-20T18:07:57.220Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 1: Introduction: Energy Scenario: India and World

### Topic: Position of the Sun in the Sky

**Course Outcomes Addressed:**

*   **CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy. (Knowledge Level: K2)** - This topic directly contributes to understanding the sun-earth relationship and its impact on the amount and intensity of solar radiation received on Earth.

---

### 1. Importance of Understanding the Sun's Position

The position of the sun in the sky is a fundamental parameter for any solar energy system design and operation. It dictates:

*   **Solar Irradiance:** The amount of solar power received per unit area. A higher solar altitude generally means more direct and intense sunlight.
*   **Energy Collection Efficiency:** The orientation and tilt of solar collectors (both thermal and photovoltaic) must be optimized based on the sun's apparent movement throughout the day and year to maximize energy capture.
*   **Shadowing Effects:** Understanding the sun's path helps in identifying potential shading from surrounding objects (buildings, trees, hills) which can significantly reduce energy output.
*   **Seasonal Performance Variations:** The sun's position changes with seasons, leading to different energy yields.

---

### 2. Key Astronomical Concepts

To understand the sun's position, we need to define a few key astronomical terms:

*   **Zenith:** The point in the sky directly overhead an observer.
*   **Nadir:** The point directly opposite the zenith, on the opposite side of the Earth.
*   **Horizon:** The apparent line that separates the Earth from the sky.
*   **Celestial Sphere:** An imaginary sphere of infinite radius, concentric to the Earth, onto which all celestial objects are projected.
*   **Zenith Angle (θz):** The angle between the zenith and the sun's rays. It is the angle of incidence for a horizontal surface.
    *   *Relationship:* Zenith Angle (θz) = 90° - Altitude Angle
*   **Altitude Angle (α):** The angle between the sun's rays and the horizon.
*   **Azimuth Angle (γ):** The angle between the sun's rays and the observer's local meridian, measured eastward from true south.
    *   Conventionally, south is 0°, east is positive, and west is negative.
*   **Solar Noon:** The time when the sun is at its highest point in the sky (maximum altitude) for a given day.

---

### 3. Describing the Sun's Position

The position of the sun can be described using two primary angles:

#### 3.1. Altitude Angle (α)

*   **Definition:** The angle between the sun's rays and the horizon.
*   **Range:** 0° (at sunrise/sunset on the horizon) to 90° (directly overhead at the zenith).
*   **Factors Affecting Altitude:**
    *   **Latitude of the observer:** Higher latitudes experience lower maximum altitudes, especially in winter.
    *   **Declination angle of the sun (δ):** The angle between the sun's rays and the plane of the Earth's equator. It varies with the day of the year due to the Earth's axial tilt.
    *   **Hour angle (ω):** The angular displacement of the sun east or west of the local meridian. It is 0° at solar noon and increases by 15° for every hour before or after solar noon.

*   **Calculation (Simplified):**
    The altitude angle (α) can be calculated using the following formula, derived from spherical trigonometry:

    `sin(α) = sin(φ) * sin(δ) + cos(φ) * cos(δ) * cos(ω)`

    Where:
    *   `α` = Altitude angle
    *   `φ` = Latitude of the observer
    *   `δ` = Declination angle of the sun (changes daily)
    *   `ω` = Hour angle (changes hourly)

    *Reference:* Sukhatme, S. P. (2017). *Solar Energy*. McGraw Hill Education (India). Chapter 2.

#### 3.2. Azimuth Angle (γ)

*   **Definition:** The angle between the sun's projected rays on the horizontal plane and the local meridian, measured eastward from true south.
*   **Range:** Typically -180° to +180°. Conventionally, 0° is South, +90° is West, -90° is East.
*   **Factors Affecting Azimuth:**
    *   **Latitude of the observer.**
    *   **Declination angle of the sun.**
    *   **Hour angle.**

*   **Calculation (Simplified):**
    The azimuth angle (γ) can be calculated using the following formula:

    `cos(γ) = (sin(δ) * cos(φ) - cos(δ) * sin(φ) * cos(ω)) / cos(α)`

    Where:
    *   `γ` = Azimuth angle
    *   `φ` = Latitude of the observer
    *   `δ` = Declination angle of the sun
    *   `ω` = Hour angle
    *   `α` = Altitude angle

    *Note:* The sign of the azimuth angle indicates whether the sun is east (negative) or west (positive) of the local meridian.

    *Reference:* Goswami, D. Y., Kreith, F., & Kreider, J. F. (2015). *Principles of Solar Engineering*. CRC Press. Chapter 2.

---

### 4. Daily and Seasonal Variations

#### 4.1. Daily Variation

*   **Sun's Path:** The sun rises in the east, moves across the sky, reaches its highest point at solar noon, and sets in the west.
*   **Altitude:** Starts low at sunrise, increases to a maximum at solar noon, and decreases towards sunset.
*   **Azimuth:** Starts at a significant angle in the east at sunrise (e.g., -90° for sunrise), approaches 0° at solar noon, and becomes a significant angle in the west at sunset (e.g., +90° for sunset).
*   **Solar Noon:** The altitude angle is maximum at solar noon.

#### 4.2. Seasonal Variation

*   **Declination Angle (δ):** The primary driver of seasonal variation.
    *   **Summer Solstice (around June 21st):** The Northern Hemisphere is tilted towards the sun. `δ` is approximately +23.45°. The sun is higher in the sky, and days are longer.
    *   **Winter Solstice (around December 21st):** The Northern Hemisphere is tilted away from the sun. `δ` is approximately -23.45°. The sun is lower in the sky, and days are shorter.
    *   **Equinoxes (around March 20th and September 22nd):** The Earth's axis is neither tilted towards nor away from the sun. `δ` is approximately 0°. The day and night are of approximately equal length.

*   **Impact on Altitude:** The maximum altitude angle at solar noon is higher in summer and lower in winter.
    *   `Maximum Altitude (at noon) = 90° - Latitude + Declination`
    *   `α_noon = 90° - φ + δ`

*   **Impact on Azimuth:** The sunrise and sunset positions shift seasonally. In summer, the sun rises north of east and sets north of west. In winter, it rises south of east and sets south of west.

---

### 5. The Sun-Earth Relationship and Solar Radiation Intensity

*   **Angle of Incidence:** The angle at which solar radiation strikes a surface. A lower angle of incidence means the radiation is spread over a larger area, reducing its intensity per unit area.
    *   For a surface tilted to the sun's rays, the angle of incidence is generally lower than the zenith angle.
*   **Atmospheric Extinction:** As the sun's rays travel through the atmosphere, they are scattered and absorbed. The longer the path length through the atmosphere (i.e., the lower the sun's altitude), the greater the atmospheric extinction, leading to reduced solar radiation intensity.
    *   *Reference:* Tiwari, G. N. (2016). *Handbook of Solar Energy: Theory, Analysis and Applications*. Springer. Chapter 3.
*   **On a Clear Day:**
    *   Solar radiation intensity is highest around solar noon when the sun is highest and the atmospheric path is shortest.
    *   Intensity decreases in the morning and afternoon as the sun's altitude decreases.

---

### 6. Practical Implications for Solar Energy Systems

*   **Fixed-Tilt Solar Collectors:**
    *   **Latitude Adjustment:** Fixed collectors are often tilted at an angle equal to the latitude of the location to optimize annual energy collection.
    *   **Seasonal Adjustment:** For better seasonal performance, tilt angles can be adjusted:
        *   **Summer:** Lower tilt angle (closer to horizontal) to capture the higher sun.
        *   **Winter:** Higher tilt angle (closer to vertical) to capture the lower sun and minimize shading from snow or obstructions.
    *   *Reference:* Solanki, C. S. (2013). *Solar Photovoltaic Technology and Systems*. PHI Learning. Chapter 4.

*   **Sun Tracking Systems:**
    *   **Single-Axis Tracking:** Tracks the sun's movement from east to west throughout the day.
    *   **Dual-Axis Tracking:** Tracks both the daily east-west movement and the seasonal north-south movement, keeping the collector surface perpendicular to the sun's rays. This maximizes energy capture but is more complex and costly.
    *   *Reference:* Messenger, R. A., & Ventre, J. (2012). *Photovoltaic Systems Engineering*. CRC Press. Chapter 5.

*   **Site Assessment:**
    *   **Shadow Analysis:** Understanding the sun's path throughout the year is crucial for identifying potential shading issues from trees, buildings, or terrain. This is often done using tools like sun path diagrams or specialized software.
    *   *Reference:* Boxwell, M. (2020). *Solar Electricity Handbook*. Greenstream Publishing.

---

### 7. Key Points to Remember

*   The **altitude angle (α)** measures the sun's height above the horizon.
*   The **azimuth angle (γ)** measures the sun's position relative to the local meridian (south).
*   **Solar noon** is when the sun reaches its highest altitude for the day.
*   The **declination angle (δ)** is key to seasonal variations, being positive in summer, negative in winter, and zero at equinoxes.
*   The **hour angle (ω)** represents the time of day relative to solar noon.
*   The sun's position significantly impacts **solar irradiance intensity** due to the angle of incidence and atmospheric path length.
*   Proper orientation and tilt of solar collectors, or the use of tracking systems, are essential for maximizing energy yield.

---

### 8. Practice Questions

1.  **What are the two primary angles used to describe the position of the sun in the sky?**
    *   **Answer:** Altitude angle (α) and Azimuth angle (γ).

2.  **Define the zenith angle and explain its relationship with the altitude angle.**
    *   **Answer:** The zenith angle (θz) is the angle between the zenith (point directly overhead) and the sun's rays. It is the complement of the altitude angle, meaning θz = 90° - α.

3.  **How does the declination angle (δ) of the sun change from the Summer Solstice to the Winter Solstice?**
    *   **Answer:** The declination angle is approximately +23.45° at the Summer Solstice, 0° at the equinoxes, and approximately -23.45° at the Winter Solstice.

4.  **For a fixed-tilt solar collector, what is a common strategy for setting the tilt angle to optimize annual energy collection?**
    *   **Answer:** The tilt angle is often set equal to the latitude of the location.

5.  **Explain why solar radiation intensity is generally lower in the early morning and late afternoon compared to solar noon.**
    *   **Answer:** In the early morning and late afternoon, the sun's altitude angle is lower. This leads to a higher angle of incidence (sun's rays strike the surface at a more oblique angle) and a longer path through the atmosphere, causing greater scattering and absorption, thus reducing the intensity of solar radiation received per unit area.

6.  **What advantage does a dual-axis solar tracking system offer over a fixed-tilt system?**
    *   **Answer:** A dual-axis tracking system can continuously adjust the collector's orientation to be perpendicular to the sun's rays throughout the day and year. This maximizes the capture of direct solar radiation compared to a fixed-tilt system, which is optimized for a specific period or average condition.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
