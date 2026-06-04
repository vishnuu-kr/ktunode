---
title: "Diffuse and direct radiation"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bb6"
status: "completed"
scrapedAt: "2026-05-20T18:08:05.640Z"
---
# Module 1: Introduction: Energy Scenario: India and World

## Topic: Diffuse and Direct Radiation

**Learning Outcomes:**

*   Understand the distinction between direct and diffuse solar radiation.
*   Identify factors influencing the proportion of direct and diffuse radiation.
*   Recognize the importance of both radiation types in solar energy applications.

**Course Outcomes Alignment:**

*   **CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy. (Knowledge Level: K2)** - This topic directly addresses the nature of solar radiation reaching the Earth's surface, a fundamental concept required for CO1.

---

### 1. Introduction to Solar Radiation

Solar radiation is the energy emitted by the Sun in the form of electromagnetic waves. When this radiation reaches the Earth's atmosphere, it interacts with various atmospheric constituents, leading to different forms of radiation reaching the surface. For solar energy systems, understanding these different forms is crucial for accurate performance prediction and system design.

**Key Concept:** Solar radiation incident on a surface can be broadly categorized into direct and diffuse components.

---

### 2. Direct Solar Radiation (Beam Radiation)

**Definition:** Direct solar radiation is the radiation that travels directly from the Sun to the Earth's surface without being scattered or absorbed by atmospheric particles. It is the radiation that, when passing through a small aperture, casts a sharp shadow.

**Characteristics:**

*   **Directional:** It arrives from a specific direction, originating from the Sun's disc.
*   **Intensity:** It is highly intense and concentrated.
*   **Shadow Casting:** Objects illuminated by direct radiation cast sharp shadows.
*   **Measurement:** Measured by instruments oriented directly towards the Sun, like pyrheliometers.

**Factors Affecting Direct Radiation:**

*   **Solar Altitude Angle:** The angle of the Sun above the horizon. Higher altitudes mean less atmospheric path length, leading to more direct radiation.
*   **Atmospheric Path Length:** The distance radiation travels through the atmosphere. Longer paths lead to more scattering and absorption.
*   **Atmospheric Conditions:** Presence of clouds, dust, aerosols, water vapor, and ozone significantly reduces direct radiation.
*   **Latitude and Time of Day/Year:** These influence the solar altitude angle.

**Example:** On a clear, cloudless day, the sunlight you feel directly on your skin without any obstruction is direct radiation. The shadow cast by a pole on the ground is a representation of the direction of direct radiation.

**Reference (Sukhatme, Chapter 2):** Sukhatme's textbook extensively discusses direct solar radiation, its measurement, and the factors affecting its intensity on Earth. He emphasizes that direct radiation is the component that can be focused by concentrating solar collectors.

---

### 3. Diffuse Solar Radiation (Sky Radiation)

**Definition:** Diffuse solar radiation is the solar radiation that has been scattered by atmospheric particles (molecules of air, dust, water droplets, aerosols, etc.) and thus arrives at the Earth's surface from all directions in the sky. It does not cast a sharp shadow.

**Characteristics:**

*   **Omnidirectional:** It comes from all parts of the sky.
*   **Intensity:** Less intense than direct radiation and spread over a larger area.
*   **Shadows:** Objects illuminated by diffuse radiation do not cast sharp shadows; they appear uniformly lit.
*   **Measurement:** Measured by instruments that capture radiation from all directions, like pyranometers with a shaded sensor or an integrated hemispherical sensor.

**Factors Affecting Diffuse Radiation:**

*   **Atmospheric Conditions:** The amount of scattering is directly related to the presence and type of atmospheric particles. Cloud cover significantly increases diffuse radiation (e.g., overcast skies).
*   **Solar Altitude Angle:** While direct radiation decreases with lower altitude, diffuse radiation can increase due to longer atmospheric paths and increased scattering.
*   **Albedo of the Surroundings:** Reflected radiation from the ground or surrounding surfaces can also contribute to the diffuse component, especially in snow-covered or bright urban environments.

**Example:** On a cloudy or overcast day, the light you see is predominantly diffuse radiation. This is why shadows are soft or non-existent.

**Reference (Goswami, Kreith, Kreider, Chapter 3):** Goswami et al. explain that diffuse radiation is a result of scattering phenomena like Rayleigh scattering (by gas molecules) and Mie scattering (by larger particles like aerosols and water droplets). They highlight its importance for flat-plate collectors which can utilize both direct and diffuse radiation.

---

### 4. Relationship between Direct and Diffuse Radiation

The total solar radiation incident on a horizontal surface is the sum of direct and diffuse radiation.

**Total Horizontal Irradiance ($G_h$) = Direct Normal Irradiance ($G_n$) * cos($\theta_z$) + Diffuse Horizontal Irradiance ($G_d$)**

Where:
*   $G_h$ is the total solar radiation incident on a horizontal surface.
*   $G_n$ is the direct solar radiation perpendicular to the Sun's rays (Normal Irradiance).
*   $\theta_z$ is the zenith angle (the angle between the Sun's rays and the vertical). cos($\theta_z$) converts the normal irradiance to irradiance on a horizontal surface.
*   $G_d$ is the diffuse radiation incident on a horizontal surface.

**Important Point:** The ratio of diffuse to direct radiation varies significantly with time of day, season, latitude, and atmospheric conditions. On clear days, direct radiation dominates, while on cloudy days, diffuse radiation is the primary component.

**Reference (Tiwari, Chapter 4):** Tiwari's handbook delves into the mathematical models for calculating both direct and diffuse components and their contributions to the total insolation on various surfaces. He discusses empirical models that estimate diffuse radiation based on the clearness index, which relates the actual solar radiation to the extraterrestrial radiation.

---

### 5. Importance for Solar Energy Systems

The distinction between direct and diffuse radiation is critical for the design and performance of different solar energy systems:

*   **Concentrating Solar Power (CSP) Systems:** These systems use mirrors or lenses to focus sunlight onto a receiver. They rely heavily on **direct radiation** because only parallel rays can be effectively focused. Therefore, CSP systems perform poorly on cloudy days or in locations with high atmospheric turbidity.
    *   **Example:** Parabolic troughs, solar power towers.

*   **Photovoltaic (PV) Systems:** PV panels can convert both **direct and diffuse radiation** into electricity. While direct radiation is more intense and contributes more to power generation, diffuse radiation is also captured, especially by flat-plate PV panels. This makes PV systems more versatile and capable of generating power even on partially cloudy days or under diffuse sky conditions.
    *   **Example:** Rooftop solar panels, solar farms.

*   **Solar Thermal Systems (Flat Plate Collectors):** Similar to PV, flat-plate solar thermal collectors designed for water heating or space heating can effectively utilize both direct and diffuse radiation. They are less sensitive to the directional nature of sunlight compared to concentrating systems.

**Reference (Messenger & Ventre, Chapter 3):** Messenger and Ventre emphasize that understanding the spectral distribution and intensity of both direct and diffuse radiation is essential for accurate PV system sizing and performance estimation. They discuss how irradiance data, often broken down into direct and diffuse components, is used in simulation software.

**Reference (Boyle, Chapter 3):** Boyle's book explains that the ability of flat-plate collectors to utilize diffuse radiation makes them suitable for a wider range of applications and geographical locations compared to concentrating collectors, especially in regions with frequent cloud cover.

---

### 6. Key Points to Remember

*   **Direct Radiation:** Travels straight from the Sun, has high intensity, casts sharp shadows, and is essential for concentrating solar systems.
*   **Diffuse Radiation:** Scattered by the atmosphere, comes from all directions, has lower intensity, produces soft shadows, and is utilized by flat-plate collectors (PV and thermal).
*   The proportion of direct to diffuse radiation changes significantly with atmospheric clarity, time of day, and season.
*   Accurate solar energy system design requires understanding and accounting for both radiation components.

---

### 7. Practice Questions

**Question 1:** Define direct solar radiation and provide an example of its effect on an object.
**Answer:** Direct solar radiation is the sunlight that travels directly from the Sun to the Earth's surface without being scattered. An example is the sharp shadow cast by a tree on a clear sunny day.

**Question 2:** What is diffuse solar radiation, and what causes it?
**Answer:** Diffuse solar radiation is sunlight that has been scattered by atmospheric particles (like dust, water vapor, and air molecules). This scattering causes the radiation to arrive at the Earth's surface from all directions.

**Question 3:** Which type of solar energy system is most dependent on direct solar radiation, and why?
**Answer:** Concentrating Solar Power (CSP) systems are most dependent on direct solar radiation because their mirrors or lenses need parallel rays to effectively focus sunlight onto a receiver.

**Question 4:** Can photovoltaic (PV) panels generate electricity from diffuse radiation? Explain briefly.
**Answer:** Yes, PV panels can generate electricity from diffuse radiation. Flat-plate PV panels can capture and convert scattered sunlight into electricity, making them functional even on cloudy days.

**Question 5:** If you were designing a solar water heating system using flat-plate collectors for a region known for frequent cloud cover, would diffuse radiation be an important factor to consider? Justify your answer.
**Answer:** Yes, diffuse radiation would be a very important factor. Since the region experiences frequent cloud cover, the system will receive a significant amount of diffuse radiation. Flat-plate collectors are efficient at utilizing this scattered sunlight, so understanding the magnitude of diffuse radiation is crucial for sizing the collector area and estimating the system's performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
