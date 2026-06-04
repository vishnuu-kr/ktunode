---
title: "Basic concepts related to solar radiation"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463ba3"
status: "completed"
scrapedAt: "2026-05-20T18:07:52.277Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS
## Module 1: Introduction: Energy Scenario: India and World
### Topic: Basic Concepts Related to Solar Radiation

---

### 1. Introduction: The Energy Scenario

This module provides a foundational understanding of solar energy within the broader context of global and Indian energy landscapes. Understanding the energy scenario highlights the growing importance of solar energy as a sustainable and renewable resource.

*   **Global Energy Demand:** Driven by population growth, industrialization, and economic development, global energy demand is continuously increasing. Reliance on fossil fuels leads to environmental concerns like climate change and resource depletion.
*   **Indian Energy Scenario:**
    *   India is a rapidly developing nation with a high energy demand.
    *   A significant portion of India's energy is still derived from fossil fuels, leading to energy security issues and environmental pollution.
    *   There is a strong governmental push towards increasing the share of renewable energy, with solar energy being a key focus.
    *   **Key Initiatives:** National Solar Mission, targets for solar power capacity addition, incentives for solar installations. (Refer to Sukhatme, Chapter 1 for global and Indian energy perspectives).
*   **Importance of Solar Energy:** Solar energy offers a clean, abundant, and domestically available alternative to fossil fuels, contributing to energy independence and environmental sustainability.

---

### 2. Basic Concepts Related to Solar Radiation

Solar radiation is the fundamental energy source for all solar energy conversion systems. Understanding its characteristics, behavior, and variability is crucial for the design and performance analysis of these systems.

**Learning Outcome:** CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy.

#### 2.1 The Sun-Earth Relationship

The Earth receives energy from the Sun in the form of electromagnetic radiation. The relative position and movement of the Earth and Sun significantly influence the amount and intensity of solar radiation received at any given location on Earth.

*   **The Sun as a Blackbody Radiator:** The Sun can be approximated as a blackbody with a surface temperature of approximately 5778 K. It emits radiation across a wide spectrum.
    *   **Key Concept:** Blackbody radiation refers to the electromagnetic radiation emitted by an idealized object that absorbs all incident electromagnetic radiation. The spectral distribution of this radiation is described by Planck's law.
    *   **Example:** Wien's displacement law ($\lambda_{max} T = \text{constant}$) indicates that the peak wavelength of emission shifts to shorter wavelengths as temperature increases, explaining why the Sun's peak radiation is in the visible spectrum. (Refer to Goswami, Kreith, & Kreider, Chapter 2 for detailed physics of solar radiation).
*   **Solar Constant ($G_{sc}$):** The total solar irradiance received on a surface perpendicular to the Sun's rays at the mean distance between the Earth and the Sun, outside the Earth's atmosphere.
    *   **Value:** Approximately 1361 W/m² (can vary slightly).
    *   **Importance:** Serves as a reference for extraterrestrial solar radiation measurements.
*   **Earth's Orbit:** The Earth orbits the Sun in an elliptical path, meaning the distance between the Earth and the Sun varies throughout the year.
    *   **Perihelion:** Closest point to the Sun (early January).
    *   **Aphelion:** Farthest point from the Sun (early July).
    *   **Effect:** The variation in distance contributes to a small variation (about ±3.3%) in the solar constant.
*   **Earth's Rotation and Revolution:**
    *   **Rotation:** The Earth rotates on its axis once every 24 hours, causing day and night. This is the primary reason for diurnal variations in solar radiation received.
    *   **Revolution:** The Earth revolves around the Sun annually, completing one orbit in approximately 365.25 days.
*   **Earth's Axial Tilt (Obliquity):** The Earth's axis is tilted at approximately 23.5° with respect to its orbital plane (the ecliptic).
    *   **Effect:** This tilt is responsible for the seasons and causes variations in the angle of incidence of solar radiation on different parts of the Earth throughout the year.
    *   **Solstices:** Days when one hemisphere is maximally tilted towards or away from the Sun (e.g., Summer Solstice, Winter Solstice).
    *   **Equinoxes:** Days when neither hemisphere is tilted towards or away from the Sun (e.g., Vernal Equinox, Autumnal Equinox), resulting in nearly equal day and night lengths globally.

#### 2.2 Solar Geometry and Angles

Accurate calculation of the sun's position and the angle of incidence of solar radiation on a surface is critical for designing solar energy systems.

*   **Celestial Sphere:** An imaginary sphere of infinite radius centered on the Earth, onto which all celestial bodies appear to be projected.
*   **Key Astronomical Angles:**
    *   **Declination Angle ($\delta$):** The angle between the Sun's rays and the plane of the Earth's equator. It varies from approximately +23.5° on the summer solstice to -23.5° on the winter solstice.
        *   **Approximate Formula:** $\delta \approx 23.45^\circ \sin\left(\frac{360}{365}(n-81)\right)$ where 'n' is the day number (Julian day).
    *   **Hour Angle ($\omega$):** The angle representing the Sun's position east or west of the local meridian. It changes by 15° per hour, with $\omega = 0^\circ$ at solar noon, positive for afternoon, and negative for morning.
    *   **Zenith Angle ($\theta_z$):** The angle between the Sun's rays and the vertical (zenith).
        *   **Formula:** $\cos(\theta_z) = \sin(\phi) \sin(\delta) + \cos(\phi) \cos(\delta) \cos(\omega)$, where $\phi$ is the latitude.
    *   **Solar Altitude Angle ($\alpha_s$):** The angle between the Sun's rays and the horizontal plane. It is the complement of the zenith angle ($\alpha_s = 90^\circ - \theta_z$).
    *   **Solar Azimuth Angle ($\gamma_s$):** The angle between the Sun's rays projected onto the horizontal plane and the local meridian, measured eastwards from the north.
        *   **Formula:** $\cos(\gamma_s) = \frac{\cos(\theta_z)\sin(\phi) - \sin(\delta)}{\sin(\theta_z)\cos(\phi)}$
*   **Surface Angles:**
    *   **Latitude ($\phi$):** The angle of a location north or south of the equator.
    *   **Declination ($\delta$):** As described above.
    *   **Hour Angle ($\omega$):** As described above.
    *   **Solar Incident Angle ($\theta$):** The angle between the Sun's rays and the normal (perpendicular) to the surface of a solar collector. This is the most critical angle for determining the amount of radiation incident on the collector.
        *   **General Formula:** $\cos(\theta) = \sin(\delta)\sin(\phi)\cos(\beta) - \sin(\delta)\cos(\phi)\sin(\beta)\cos(\gamma) + \cos(\delta)\cos(\phi)\cos(\beta)\cos(\omega) + \cos(\delta)\sin(\phi)\sin(\beta)\cos(\gamma)\cos(\omega) + \cos(\delta)\sin(\beta)\sin(\gamma)\sin(\omega)$
        Where:
            *   $\beta$ is the collector tilt angle from the horizontal.
            *   $\gamma$ is the collector azimuth angle (orientation from north, positive east).
    *   **Collector Tilt Angle ($\beta$):** The angle the collector surface makes with the horizontal.
        *   **Optimal Tilt:** Often set to the latitude for year-round performance, or adjusted seasonally for better performance.
    *   **Collector Azimuth Angle ($\gamma$):** The angle the collector surface makes with the north direction (typically 0° for due south in the Northern Hemisphere).

**Important Point to Remember:** The **solar incident angle ($\theta$)** is the most crucial geometric parameter as it directly relates to the amount of solar radiation that can be absorbed by the collector surface. Minimizing this angle maximizes incident radiation.

**Example:** Calculate the solar incident angle on a flat plate collector tilted at $\beta = 30^\circ$ and oriented due south ($\gamma=0^\circ$) at a latitude of $\phi = 20^\circ$ at solar noon ($\omega = 0^\circ$) on the summer solstice ($\delta = +23.45^\circ$).

Using the formula for $\cos(\theta)$:
$\cos(\theta) = \sin(\delta)\sin(\phi)\cos(\beta) - \sin(\delta)\cos(\phi)\sin(\beta)\cos(\gamma) + \cos(\delta)\cos(\phi)\cos(\beta)\cos(\omega) + \cos(\delta)\sin(\phi)\sin(\beta)\cos(\gamma)\cos(\omega) + \cos(\delta)\sin(\beta)\sin(\gamma)\sin(\omega)$

Since $\omega=0^\circ$ and $\gamma=0^\circ$:
$\cos(\theta) = \sin(\delta)\sin(\phi)\cos(\beta) - \sin(\delta)\cos(\phi)\sin(\beta) + \cos(\delta)\cos(\phi)\cos(\beta)$

Plugging in values:
$\delta = 23.45^\circ$, $\phi = 20^\circ$, $\beta = 30^\circ$
$\sin(23.45^\circ) \approx 0.398$
$\cos(23.45^\circ) \approx 0.917$
$\sin(20^\circ) \approx 0.342$
$\cos(20^\circ) \approx 0.940$
$\sin(30^\circ) = 0.5$
$\cos(30^\circ) \approx 0.866$

$\cos(\theta) = (0.398)(0.342)(0.866) - (0.398)(0.940)(0.5)(1) + (0.917)(0.940)(0.866)$
$\cos(\theta) = 0.117 - 0.187 + 0.745$
$\cos(\theta) = 0.675$
$\theta = \arccos(0.675) \approx 47.55^\circ$

This incident angle of 47.55° would be used to calculate the solar flux on the collector.

#### 2.3 Solar Radiation Components

Solar radiation reaching the Earth's surface is not just a single beam. It comprises different components, each with distinct characteristics.

*   **Extraterrestrial Radiation ($G_n$):** Radiation outside the atmosphere. Often considered in terms of daily total values.
*   **Direct (Beam) Radiation ($G_b$ or $I_b$):** Radiation that travels in a straight line from the Sun to the surface without being scattered or absorbed by atmospheric constituents. This is the radiation that can be focused by concentrating collectors.
    *   **Characteristics:** Highly directional.
    *   **Measurement:** Measured by a pyrheliometer, which tracks the sun.
*   **Diffuse (Sky) Radiation ($G_d$ or $I_d$):** Radiation scattered and re-emitted by atmospheric particles (molecules, aerosols, clouds). It comes from all parts of the sky dome.
    *   **Characteristics:** Non-directional, isotropic or anisotropic.
    *   **Measurement:** Measured by a pyranometer with a shaded sensor to block direct beam.
*   **Reflected Radiation ($G_r$ or $I_r$):** Radiation that is reflected off the ground or surrounding surfaces onto the collector. The amount depends on the surface's albedo (reflectivity).
    *   **Albedo:** Varies greatly (e.g., snow has high albedo, dark soil has low albedo).

*   **Global Horizontal Irradiance (GHI):** The total solar irradiance received on a horizontal surface, which is the sum of direct, diffuse, and reflected radiation (when the surface is horizontal).
    *   **Formula:** $G_{HI} = G_b \cos(\theta_z) + G_d + G_r$
    *   **Note:** When the surface is tilted, the beam component incident on the tilted surface ($I_b$) changes based on the incident angle ($\theta$), and the diffuse component ($I_d$) and reflected component ($I_r$) also need to be accounted for using appropriate models.

#### 2.4 Effects of the Atmosphere on Solar Radiation

The Earth's atmosphere plays a crucial role in modifying the solar radiation that reaches the surface.

*   **Absorption:** Certain atmospheric gases absorb solar radiation.
    *   **Ozone ($O_3$):** Absorbs most of the ultraviolet (UV) radiation in the stratosphere.
    *   **Water Vapor ($H_2O$) and Carbon Dioxide ($CO_2$):** Absorb infrared (IR) radiation.
    *   **Oxygen ($O_2$):** Absorbs some UV radiation.
*   **Scattering:** Solar radiation is scattered by atmospheric molecules (Rayleigh scattering, responsible for the blue sky) and aerosols (Mie scattering, which is more complex and depends on particle size and wavelength).
    *   **Rayleigh Scattering:** Dominant for clear skies, preferentially scatters shorter wavelengths (blue).
    *   **Mie Scattering:** Occurs due to larger particles (dust, pollutants, water droplets), scatters radiation more broadly across the spectrum.
*   **Extinction:** The combined effect of absorption and scattering is called extinction, which reduces the intensity of solar radiation as it passes through the atmosphere.
    *   **Beer-Lambert Law:** Often used to model atmospheric transmission, relating the intensity of radiation to the path length and absorption/scattering coefficients.
*   **Cloud Cover:** Clouds are the most significant factor affecting solar radiation variability at the surface. They significantly reduce both direct and diffuse radiation.
    *   **Impact:** Can reduce GHI by 50-90% or more.
*   **Water Vapor Content:** Higher humidity leads to increased absorption and scattering.
*   **Aerosol Concentration:** Pollution, dust, and smoke increase scattering and absorption.
*   **Air Mass (m):** A measure of the path length of solar radiation through the atmosphere relative to the shortest path (when the sun is directly overhead).
    *   **Formula (simplified):** $m \approx \frac{1}{\cos(\theta_z)}$ for $\theta_z < 70^\circ$. For larger zenith angles, a more complex formula is used.
    *   **Effect:** Higher air mass means more atmospheric attenuation.

**Important Point to Remember:** The **clear sky index** is a measure of how clear the sky is, comparing the actual global horizontal irradiance to the clear-sky irradiance for the same atmospheric conditions and solar geometry.

#### 2.5 Measurement of Solar Radiation

Accurate measurement of solar radiation is essential for site assessment, performance monitoring, and data analysis.

*   **Pyrheliometer:** Measures direct (beam) solar irradiance. It is typically mounted on a solar tracker to keep the sensor pointed directly at the sun.
*   **Pyranometer:** Measures global solar irradiance on a horizontal surface (or tilted surface if specifically designed). It measures both direct and diffuse radiation.
    *   **Types:** First-class, second-class, third-class pyranometers, with varying accuracy and calibration standards.
    *   **Calibration:** Crucial for accurate data. Often calibrated against absolute radiometers or other calibrated pyranometers.
*   **Shadow Ring Pyranometer:** A modified pyranometer with a shadow ring designed to block the direct beam radiation, thus measuring only diffuse radiation.
*   **Sunshine Recorder:** Instruments that indicate the duration of bright sunshine (e.g., Campbell-Stokes sunshine recorder, which uses a glass sphere to focus sunlight onto a card, burning a trace).
*   **Data Loggers:** Used to record the output from these instruments at regular intervals.

**Reference:** Sukhatme (Chapter 2) provides detailed information on the measurement of solar radiation and the characteristics of various instruments.

---

### 3. Practice Questions and Exercises

**Instructions:** Answer the following questions, referencing the concepts covered in these notes.

**Question 1 (Knowledge Level K2):**
Explain why the Earth experiences seasons. Relate your answer to the Earth's axial tilt and its orbit around the Sun.

**Answer 1:**
The Earth experiences seasons due to its axial tilt of approximately 23.5° relative to its orbital plane around the Sun. As the Earth revolves around the Sun, this tilt causes different hemispheres to receive more direct sunlight at different times of the year.
*   When a hemisphere is tilted towards the Sun, it receives more direct sunlight, leading to longer days and higher solar energy intensity, resulting in summer.
*   When a hemisphere is tilted away from the Sun, it receives less direct sunlight, with shorter days and lower solar energy intensity, resulting in winter.
The equinoxes occur when the Earth's axis is tilted neither towards nor away from the Sun, resulting in roughly equal day and night lengths and moderate temperatures.

**Question 2 (Knowledge Level K2):**
Differentiate between direct (beam) radiation and diffuse radiation. What type of solar collector would be most affected by the difference between these two components?

**Answer 2:**
*   **Direct (Beam) Radiation:** This is solar radiation that travels in a straight line from the Sun to the Earth's surface, without being scattered or absorbed by the atmosphere. It is highly directional.
*   **Diffuse Radiation:** This is solar radiation that has been scattered by atmospheric particles (molecules, aerosols, clouds) and reaches the Earth's surface from all directions in the sky. It is non-directional.

**Type of Collector Affected:** **Concentrating solar collectors** are most affected by the difference. These collectors are designed to focus sunlight onto a small receiver. They rely on the direct (beam) component of solar radiation to achieve high temperatures, as diffuse radiation cannot be effectively focused. Flat-plate collectors, on the other hand, can utilize both direct and diffuse radiation to some extent, as their absorber surface is typically large.

**Question 3 (Knowledge Level K1):**
Define the Solar Constant.

**Answer 3:**
The Solar Constant is the total solar irradiance received on a surface perpendicular to the Sun's rays at the mean distance between the Earth and the Sun, outside the Earth's atmosphere. Its approximate value is 1361 W/m².

**Question 4 (Knowledge Level K2):**
List the key atmospheric constituents or phenomena that affect the amount of solar radiation reaching the Earth's surface and explain one of them in brief.

**Answer 4:**
Key atmospheric constituents and phenomena affecting solar radiation:
*   Absorption by gases (Ozone, Water Vapor, Carbon Dioxide)
*   Scattering by molecules (Rayleigh scattering) and aerosols (Mie scattering)
*   Cloud cover
*   Water vapor content
*   Aerosol concentration

**Explanation of Cloud Cover:** Clouds are the most significant factor. They can absorb, scatter, and reflect solar radiation. Dense clouds can drastically reduce both direct and diffuse solar radiation reaching the surface, leading to significant drops in the overall solar energy availability.

**Question 5 (Conceptual Application):**
A solar collector is to be installed at a latitude of 30° N. To maximize the annual energy yield, what tilt angle and azimuth angle would generally be recommended? (Assume Northern Hemisphere).

**Answer 5:**
*   **Azimuth Angle:** For the Northern Hemisphere, to capture the maximum amount of sunlight throughout the day, the collector should generally face **due South**. This corresponds to an azimuth angle of **0°** (if north is 0° and east is positive).
*   **Tilt Angle:** For maximizing annual energy yield, a common recommendation is to set the tilt angle equal to the latitude. Therefore, a tilt angle of approximately **30°** from the horizontal would be recommended. This angle optimizes the capture of solar radiation on average throughout the year. Seasonal adjustments (e.g., steeper tilt in winter, shallower in summer) can further improve performance but are often more complex to implement.

---

### 4. Important Points to Remember

*   **Sun-Earth Geometry:** Angles like declination, hour angle, zenith angle, and incident angle are crucial for calculating solar radiation on any surface.
*   **Solar Radiation Components:** Direct, diffuse, and reflected radiation contribute to the total energy received. The type of collector determines which component is most important.
*   **Atmospheric Effects:** The atmosphere attenuates solar radiation through absorption and scattering, with cloud cover being the most significant variable factor.
*   **Measurement:** Pyrheliometers measure direct radiation, while pyranometers measure global radiation.
*   **Applications:** Understanding solar radiation is the first step in designing efficient solar thermal and photovoltaic systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 5. Textbook and Reference Material Coverage

This module's content is drawn from the fundamental principles discussed in the following texts:

*   **Sukhatme, S. P. - Solar Energy:** Provides a strong foundation in solar radiation, its measurement, and basic solar energy principles. Chapters on extraterrestrial and terrestrial radiation, solar geometry, and atmospheric effects are particularly relevant.
*   **Goswami, D. Yogi, Kreith, Frank, & Kreider, Jan F. - Principles of Solar Engineering:** Offers in-depth coverage of the physics of solar radiation, including blackbody radiation, atmospheric transmission models, and solar geometry calculations.
*   **Tiwari, G. N. - Handbook of Solar Energy:** Details various aspects of solar radiation, including its measurement, models for estimation, and the influence of atmospheric parameters.
*   **Boyle, Godfrey - Renewable Energy:** Provides context for solar energy within the broader renewable energy landscape and discusses the global energy scenario.

---

### Course Outcome Alignment

*   **CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy.** (Knowledge Level: K2)
    *   This entire module is dedicated to fulfilling CO1, covering the sun-earth relationship (axial tilt, orbit), solar geometry (angles), radiation components (direct, diffuse, reflected), and atmospheric effects (absorption, scattering, clouds).

---