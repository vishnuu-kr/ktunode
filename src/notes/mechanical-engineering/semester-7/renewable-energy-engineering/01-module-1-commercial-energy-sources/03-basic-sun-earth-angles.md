---
title: "Basic Sun-Earth Angles"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 1: Commercial energy sources "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464074"
status: "completed"
scrapedAt: "2026-05-20T18:18:23.491Z"
---
## Renewable Energy Engineering: Module 1 - Commercial Energy Sources

### Topic: Basic Sun-Earth Angles

**Course Outcomes Addressed:**
*   **CO1:** Differentiate between commercial energy systems and alternatives (Knowledge Level: K2) - *Understanding the Sun's geometry is foundational to appreciating solar as an alternative energy source.*
*   **CO2:** Obtain a detailed knowledge in solar energy implementation for collection, conversion and storage (Knowledge Level: K2) - *This topic is a prerequisite for understanding how solar radiation interacts with the Earth and its collection systems.*

**Introduction:**

This module introduces commercial energy sources, with a focus on understanding the fundamental principles of solar energy. To effectively harness solar energy, it is crucial to comprehend the geometric relationship between the Sun and the Earth. This understanding allows us to predict the amount of solar radiation reaching a specific location at any given time, which is vital for designing and optimizing solar energy systems.

---

### 1. The Earth's Motion and its Influence on Solar Radiation

The Earth's rotation and revolution around the Sun are the primary drivers behind variations in solar radiation received at any point on its surface.

*   **Earth's Rotation:** The Earth rotates on its axis, completing one rotation approximately every 24 hours. This rotation causes the apparent movement of the Sun across the sky from East to West, leading to the diurnal cycle of day and night.
    *   **Impact:** This dictates the availability of solar radiation during daylight hours.

*   **Earth's Revolution:** The Earth revolves around the Sun in an elliptical orbit, completing one revolution approximately every 365.25 days. This revolution, combined with the tilt of the Earth's axis, causes the seasons and variations in the length of day and the intensity of solar radiation throughout the year.
    *   **Impact:** This leads to seasonal variations in solar energy potential.

---

### 2. Key Sun-Earth Angles

Understanding these angles is paramount for calculating the intensity and duration of solar radiation incident on a surface.

#### 2.1. Zenith Angle ($\theta_z$)

*   **Definition:** The angle between the zenith (the point directly overhead) and the solar disc. It is the angle between the vertical and the sun's rays.
*   **Range:** 0° to 90°. When the sun is directly overhead (at the zenith), the zenith angle is 0°. When the sun is on the horizon, the zenith angle is 90°.
*   **Significance:** A smaller zenith angle indicates more direct sunlight and higher intensity of solar radiation.
*   **Calculation:**
    *   $\theta_z = 90^\circ - \text{Altitude Angle}$

#### 2.2. Altitude Angle ($\alpha$)

*   **Definition:** The angle between the horizontal plane and the solar disc. It is the angle of elevation of the Sun above the horizon.
*   **Range:** 0° to 90°. 0° when the sun is on the horizon, and 90° when the sun is at the zenith.
*   **Significance:** Directly relates to the amount of atmosphere the solar rays pass through. Higher altitude angles mean less atmospheric attenuation.
*   **Relationship with Zenith Angle:** $\alpha = 90^\circ - \theta_z$

#### 2.3. Azimuth Angle ($\gamma$)

*   **Definition:** The angle between the horizontal projection of the sun's rays and the local meridian (the north-south line). It is measured eastward from true north.
*   **Range:** Typically 0° to 360°. Conventionally, North is 0°, East is 90°, South is 180°, and West is 270°.
*   **Significance:** Determines the direction of the Sun in the sky.
*   **Variations:**
    *   **Solar Noon:** The Sun is due South (in the Northern Hemisphere) or due North (in the Southern Hemisphere), so the azimuth angle is 0° or 180°.
    *   **Sunrise/Sunset:** The azimuth angle is approximately ±90° from South (or North).

#### 2.4. Solar Declination Angle ($\delta$)

*   **Definition:** The angle between the solar rays and the plane of the Earth's equator. It is the angular distance of the Sun north or south of the celestial equator.
*   **Range:** Approximately +23.45° (Summer Solstice in Northern Hemisphere) to -23.45° (Winter Solstice in Northern Hemisphere).
*   **Causes:** Due to the tilt of the Earth's axis (approximately 23.45°) relative to its orbital plane.
*   **Significance:** Varies throughout the year, causing seasonal changes in the apparent path of the Sun and the length of daylight.
*   **Approximation Formula (Spencer's Equation):**
    $\delta = 23.45^\circ \sin \left( \frac{360}{365} (n - 81) \right)$
    where $n$ is the day number of the year (e.g., January 1st is $n=1$).
    *   **Note:** More accurate formulas exist, but this provides a good approximation for understanding. (Twidell & Weir, 3rd Edn, Chapter 2)

#### 2.5. Hour Angle ($\omega$)

*   **Definition:** The angle representing the Earth's rotation relative to the Sun. It is the angle between the local meridian and the meridian passing through the center of the Sun's disc.
*   **Convention:** 0° at solar noon, positive for the afternoon (West of local meridian), and negative for the morning (East of local meridian).
*   **Rate of Change:** The Earth rotates at 15° per hour ($360^\circ / 24 \text{ hours}$).
*   **Calculation:**
    $\omega = 15^\circ \times (\text{Solar Time} - 12 \text{ hours})$
    where Solar Time is measured in hours.
    *   **Note:** Local Apparent Solar Time (LAST) is crucial here, which can differ from clock time due to the equation of time and longitude. (Kothari, Singal, Ranjan, 2nd Edn, Chapter 3)

---

### 3. Calculating Incident Solar Radiation on a Surface

The intensity of solar radiation incident on a surface depends on the angles at which the sun's rays strike that surface.

#### 3.1. Incident Angle ($\theta$)

*   **Definition:** The angle between the incoming solar rays and the normal (perpendicular) to the surface receiving the radiation.
*   **Significance:** This is the most critical angle for determining the energy received. A smaller incident angle means the radiation is more concentrated and the intensity is higher. Zero incident angle (sun's rays perpendicular to the surface) leads to maximum intensity.
*   **Calculation (General Case):**
    $\cos \theta = \sin \alpha \cos \beta + \cos \alpha \sin \beta \cos(\gamma - \phi) + \cos \alpha \cos \beta \cos(\omega) - \sin \alpha \sin \beta \cos(\gamma - \phi) \cos(\omega) + \sin \alpha \sin \beta \sin(\gamma - \phi) \sin(\omega)$
    where:
    *   $\alpha$ = Altitude angle of the sun
    *   $\beta$ = Tilt angle of the surface (0° for horizontal, 90° for vertical)
    *   $\gamma$ = Azimuth angle of the sun
    *   $\phi$ = Azimuth angle of the surface (direction the surface is facing, e.g., South = 180°)
    *   $\omega$ = Hour angle of the sun

*   **Simplified Cases:**

    *   **Horizontal Surface ($\beta = 0^\circ$):**
        $\cos \theta = \sin \alpha$
        Since $\sin \alpha = \cos \theta_z$, this simplifies to:
        $\cos \theta = \cos \theta_z$
        Or more directly, for a horizontal surface, the incident angle is equal to the zenith angle.
        $\theta = \theta_z$
        Therefore, $\cos \theta = \sin \delta \sin \phi_{lat} + \cos \delta \cos \phi_{lat} \cos \omega$
        where $\phi_{lat}$ is the latitude.

    *   **Tilted Surface facing South ($\phi = 180^\circ$ for Northern Hemisphere):**
        For a surface tilted at an angle $\beta$ towards the equator (South in the Northern Hemisphere), the calculation involves a more complex form, but the principle remains: minimize the incident angle for maximum energy.

    *   **Surface Normal to Sun's Rays:** When the incident angle $\theta = 0^\circ$, the surface is directly facing the Sun, leading to maximum radiation intensity.

---

### 4. Earth's Tilt and its Effect on Day Length and Sun's Path

*   **Earth's Axial Tilt (Obliquity):** The Earth's axis is tilted at approximately 23.45° with respect to its orbital plane (the ecliptic). This tilt is constant and always points in the same direction in space.
*   **Effect on Sun's Path:**
    *   **Summer Solstice (around June 21st in Northern Hemisphere):** The Northern Hemisphere is tilted towards the Sun. The Sun's declination ($\delta$) is approximately +23.45°. Days are longest, and the Sun's path is highest in the sky.
    *   **Winter Solstice (around December 21st in Northern Hemisphere):** The Northern Hemisphere is tilted away from the Sun. The Sun's declination ($\delta$) is approximately -23.45°. Days are shortest, and the Sun's path is lowest in the sky.
    *   **Equinoxes (around March 20th and September 22nd):** Neither hemisphere is tilted towards or away from the Sun. The Earth's axis is perpendicular to the line connecting the Earth and the Sun. The Sun's declination ($\delta$) is approximately 0°. Days and nights are approximately equal in length everywhere on Earth.

---

### 5. Important Points to Remember

*   **Latitude ($\phi_{lat}$):** Your location on Earth determines the altitude and path of the Sun.
*   **Time of Day:** Hour angle ($\omega$) changes throughout the day, affecting the Sun's position.
*   **Time of Year:** Declination angle ($\delta$) changes throughout the year, affecting seasonal variations.
*   **Surface Orientation (Tilt and Azimuth):** The angle of the surface receiving solar radiation is critical for maximizing energy capture. A horizontal surface receives diffuse and direct radiation, while a tilted surface can be optimized to receive more direct radiation at specific times of the year.
*   **Zenith Angle:** A lower zenith angle means higher solar intensity.
*   **Incident Angle:** A lower incident angle (closer to 0°) on a surface means higher energy capture.
*   **Solar Noon:** The time when the Sun is at its highest point in the sky, and the hour angle is 0°.

---

### 6. Examples and Practice Questions

**Example 1: Calculating Declination Angle**

Calculate the solar declination angle on March 21st.
*   **Solution:** March 21st is approximately the Vernal Equinox. The day number $n$ is approximately $31 (\text{Jan}) + 28 (\text{Feb}) + 21 (\text{Mar}) = 80$.
    Using Spencer's equation:
    $\delta = 23.45^\circ \sin \left( \frac{360}{365} (80 - 81) \right)$
    $\delta = 23.45^\circ \sin \left( \frac{360}{365} (-1) \right)$
    $\delta = 23.45^\circ \sin (-0.986^\circ)$
    $\delta \approx -0.407^\circ$
    This is close to 0°, as expected for an equinox.

**Example 2: Zenith Angle at Solar Noon**

On the Summer Solstice in the Northern Hemisphere (around June 21st), what is the zenith angle of the sun at solar noon in London (Latitude = 51.5° N)?
*   **Solution:**
    *   On Summer Solstice, $\delta \approx +23.45^\circ$.
    *   At solar noon, the hour angle $\omega = 0^\circ$.
    *   For a horizontal surface, the incident angle $\theta$ equals the zenith angle $\theta_z$.
    *   The zenith angle at solar noon for a horizontal surface is given by: $\theta_z = |\phi_{lat} - \delta|$.
    *   $\theta_z = |51.5^\circ - 23.45^\circ| = 28.05^\circ$.
    *   **Important Note:** The altitude angle $\alpha = 90^\circ - \theta_z = 90^\circ - 28.05^\circ = 61.95^\circ$.

**Practice Question 1:**

On the Winter Solstice in the Northern Hemisphere (around December 21st), what is the zenith angle of the sun at solar noon in Delhi (Latitude = 28.6° N)?
*   **Answer:**
    *   On Winter Solstice, $\delta \approx -23.45^\circ$.
    *   At solar noon, $\omega = 0^\circ$.
    *   $\theta_z = |\phi_{lat} - \delta|$
    *   $\theta_z = |28.6^\circ - (-23.45^\circ)| = |28.6^\circ + 23.45^\circ| = 52.05^\circ$.

**Practice Question 2:**

Consider a flat solar collector facing due South. If the tilt angle $\beta = 30^\circ$ and the latitude $\phi_{lat} = 40^\circ$ N. What is the incidence angle of the sun on the collector at solar noon on the Autumnal Equinox?
*   **Answer:**
    *   On Autumnal Equinox, $\delta \approx 0^\circ$.
    *   At solar noon, $\omega = 0^\circ$.
    *   The surface is facing South, so its azimuth angle $\phi = 180^\circ$.
    *   The Sun's azimuth angle at solar noon is also $180^\circ$ (in the Northern Hemisphere).
    *   The formula for $\cos \theta$ for a tilted surface is:
        $\cos \theta = \sin \alpha \cos \beta + \cos \alpha \sin \beta \cos(\gamma - \phi)$
    *   At solar noon, the Sun's altitude angle $\alpha = 90^\circ - |\phi_{lat} - \delta| = 90^\circ - |40^\circ - 0^\circ| = 50^\circ$.
    *   The Sun's azimuth angle $\gamma = 180^\circ$.
    *   The surface azimuth angle $\phi = 180^\circ$.
    *   So, $(\gamma - \phi) = 180^\circ - 180^\circ = 0^\circ$.
    *   $\cos \theta = \sin(50^\circ) \cos(30^\circ) + \cos(50^\circ) \sin(30^\circ) \cos(0^\circ)$
    *   $\cos \theta = (0.766)(0.866) + (0.643)(0.5)(1)$
    *   $\cos \theta = 0.663 + 0.3215 = 0.9845$
    *   $\theta = \arccos(0.9845) \approx 10.18^\circ$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References and Further Reading

*   **Twidell & Weir (2015), Chapter 2: Solar Geometry:** This chapter provides a thorough explanation of the Sun-Earth angles, including detailed derivations and examples.
*   **Kothari, Singal, & Ranjan (2014), Chapter 3: Solar Radiation and Measurement:** This chapter covers solar geometry, declination, hour angle, and how these relate to calculating solar radiation.
*   **Rai (2004), Chapter 1: Introduction to Non-conventional Energy Sources:** While broader, this chapter may touch upon the importance of solar geometry as a foundational concept.
*   **Tester (2006), Chapter on Solar Energy:** Provides context on how these geometric principles influence solar energy system design.
*   **Çengel, Cimbala, & Kanoğlu (2019), Chapter on Solar Energy:** Offers practical insights and calculations related to solar angles for energy applications.

---

### 8. Connections to Course Outcomes

*   **CO1 (Differentiate between commercial energy systems and alternatives):** By understanding the geometric factors that govern solar radiation, students can better appreciate the unique characteristics and challenges of solar energy as an alternative to conventional fossil fuels. The predictable yet variable nature of solar energy, dictated by these angles, contrasts with the more stable (though depletable) supply of commercial sources.
*   **CO2 (Obtain a detailed knowledge in solar energy implementation for collection, conversion and storage):** This topic is the bedrock for CO2. Without understanding the angles, one cannot determine the optimal tilt and orientation of solar collectors, predict the amount of solar energy available at a specific location and time, or design systems to maximize energy capture and efficiency. The subsequent topics in solar energy implementation will build directly upon this foundational knowledge of solar geometry.