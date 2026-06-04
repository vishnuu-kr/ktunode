---
title: "angle of incidence on a tilted plane"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bb1"
status: "completed"
scrapedAt: "2026-05-20T18:08:02.100Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS
## Module 1: Introduction: Energy Scenario: India and World
### Topic: Angle of Incidence on a Tilted Plane

---

### 1. Introduction to Solar Radiation and the Sun-Earth Relationship (CO1, K2)

Solar energy, derived from the sun's electromagnetic radiation, is a fundamental source of energy for our planet. Understanding its behavior is crucial for efficient solar energy conservation systems.

*   **The Sun:** A star at the center of our solar system, emitting vast amounts of energy in the form of electromagnetic radiation.
*   **Sun-Earth Relationship:** The Earth orbits the sun, and its axis of rotation is tilted at approximately 23.5 degrees relative to its orbital plane. This tilt is the primary reason for the seasons and the variation in the amount of solar radiation received at different locations and times of the year.

    *   **Solstices:** The points in Earth's orbit when the sun is farthest north or south of the celestial equator.
        *   Summer Solstice (around June 21): Northern Hemisphere tilted towards the sun, experiencing longest day.
        *   Winter Solstice (around December 21): Northern Hemisphere tilted away from the sun, experiencing shortest day.
    *   **Equinoxes:** The points in Earth's orbit when the sun is directly above the equator.
        *   Vernal Equinox (around March 20): Day and night are approximately equal length.
        *   Autumnal Equinox (around September 22): Day and night are approximately equal length.

*   **Atmospheric Effects on Solar Energy:** As solar radiation travels through the Earth's atmosphere, it undergoes several processes that affect its intensity and spectral distribution:
    *   **Scattering:** Light is deflected in various directions by atmospheric particles (gases, dust, aerosols). Rayleigh scattering affects shorter wavelengths more, leading to the blue sky.
    *   **Absorption:** Certain atmospheric gases (e.g., ozone, water vapor, carbon dioxide) absorb specific wavelengths of solar radiation, converting it into heat.
    *   **Reflection:** Clouds and the Earth's surface reflect a portion of the incoming solar radiation back into space.

**Key Concept:** The amount of solar radiation reaching a surface is not constant. It varies with time of day, day of year, latitude, and atmospheric conditions. For effective solar energy system design, we need to quantify this radiation, especially how it falls on a surface oriented to capture it.

**Reference:**
*   Sukhatme, S. P. (2017). *Solar Energy*. Chapter 2: Solar Radiation (deals with sun-earth relationship and atmospheric effects).
*   Goswami, D. Y., Kreith, F., & Kreider, J. F. (2015). *Principles of Solar Engineering*. Chapter 1: Solar Radiation Fundamentals (covers sun-earth geometry and atmospheric transmission).

---

### 2. Understanding the Angle of Incidence on a Tilted Plane (CO1, K2, K3)

The **angle of incidence (θ)** is the angle between the direction of the sun's rays and the normal (perpendicular) to a surface. For solar energy systems, particularly solar collectors (both thermal and photovoltaic), maximizing the energy captured requires orienting the surface such that the angle of incidence is minimized.

On a flat, horizontal surface, the angle of incidence changes throughout the day and year due to the sun's apparent movement. However, most solar collectors are tilted and often faced towards the equator (in the Northern Hemisphere) to capture more energy throughout the year, especially during winter when the sun is lower in the sky.

**Definitions:**

*   **Solar Altitude Angle ($\alpha_s$):** The angle between the sun's rays and the horizontal plane.
*   **Solar Azimuth Angle ($\gamma_s$):** The angle between the sun's rays and the local meridian (north-south line). It is measured eastward from the south.
*   **Surface Azimuth Angle ($\gamma$):** The angle between the normal to the tilted surface and the local meridian. It is measured eastward from the south. For a surface facing due South, $\gamma = 0^\circ$.
*   **Surface Tilt Angle ($\beta$):** The angle between the tilted surface and the horizontal plane. A horizontal surface has $\beta = 0^\circ$, and a vertical surface has $\beta = 90^\circ$.

**Calculating the Angle of Incidence ($\theta$) on a Tilted Plane:**

The angle of incidence on a tilted plane is a crucial parameter. It can be calculated using the following relationship, derived from spherical trigonometry:

$\cos(\theta) = \sin(\alpha_s) \cos(\beta) + \cos(\alpha_s) \sin(\beta) \cos(\gamma_s - \gamma)$

Where:
*   $\theta$ is the angle of incidence.
*   $\alpha_s$ is the solar altitude angle.
*   $\beta$ is the surface tilt angle.
*   $\gamma_s$ is the solar azimuth angle.
*   $\gamma$ is the surface azimuth angle.

**Simplifications and Common Cases:**

1.  **For a Surface Facing Due South ($\gamma = 0^\circ$):**
    $\cos(\theta) = \sin(\alpha_s) \cos(\beta) + \cos(\alpha_s) \cos(\gamma_s) \sin(\beta)$

2.  **For a Horizontal Surface ($\beta = 0^\circ$):**
    $\cos(\theta) = \sin(\alpha_s)$
    This means the angle of incidence is the complement of the solar altitude angle, which is expected.

3.  **For a Vertical Surface Facing South ($\beta = 90^\circ$, $\gamma = 0^\circ$):**
    $\cos(\theta) = \cos(\alpha_s) \cos(\gamma_s)$
    The angle of incidence is the complement of the solar azimuth angle.

**Maximizing Annual Energy Collection:**

To maximize the annual energy collected by a fixed tilted collector, the tilt angle ($\beta$) is often set equal to the latitude ($\phi$) of the location. This aims to position the collector perpendicular to the average sun path throughout the year.

*   **Optimal Tilt Angle ($\beta_{opt}$):** For year-round performance, $\beta_{opt} \approx \phi$.
*   **Optimal Tilt Angle for Summer:** $\beta_{summer} \approx \phi - 15^\circ$.
*   **Optimal Tilt Angle for Winter:** $\beta_{winter} \approx \phi + 15^\circ$.

**Example:**

Let's consider a location at a latitude of $30^\circ$ N.
Suppose at a specific time of day and year:
*   Solar altitude angle ($\alpha_s$) = $40^\circ$
*   Solar azimuth angle ($\gamma_s$) = $15^\circ$ (Sun is $15^\circ$ East of South)

We want to calculate the angle of incidence on a collector tilted at $\beta = 30^\circ$ and facing due South ($\gamma = 0^\circ$).

Using the formula for a surface facing due South:
$\cos(\theta) = \sin(\alpha_s) \cos(\beta) + \cos(\alpha_s) \cos(\gamma_s) \sin(\beta)$
$\cos(\theta) = \sin(40^\circ) \cos(30^\circ) + \cos(40^\circ) \cos(15^\circ) \sin(30^\circ)$
$\cos(\theta) = (0.6428) \times (0.8660) + (0.7660) \times (0.9659) \times (0.5000)$
$\cos(\theta) = 0.5566 + 0.3706$
$\cos(\theta) = 0.9272$
$\theta = \arccos(0.9272) \approx 22.04^\circ$

**Important Point:** A smaller angle of incidence means that the sun's rays are more perpendicular to the collector surface, leading to higher energy absorption.

**Reference:**
*   Sukhatme, S. P. (2017). *Solar Energy*. Chapter 2: Solar Radiation (provides detailed derivations for angles and the incidence angle formula).
*   Tiwari, G. N. (2016). *Handbook of Solar Energy: Theory, Analysis and Applications*. Chapter 2: Solar Radiation and Measurements (includes sections on angle of incidence and its calculation).
*   Messenger, R. A., & Ventre, J. (2012). *Photovoltaic Systems Engineering*. Chapter 3: Solar Radiation (discusses radiation on tilted surfaces and incidence angles for PV panels).

---

### 3. Relevance to Solar Energy Conservation Systems (CO1, K2, K3)

The angle of incidence is a fundamental parameter that directly impacts the performance of any solar energy conservation system.

*   **Solar Thermal Systems (e.g., Flat Plate Collectors, Concentrating Collectors):** The amount of solar radiation absorbed by the collector surface determines the amount of heat generated. A higher angle of incidence means less radiation is incident per unit area, thus reducing the thermal output. Concentrating collectors are particularly sensitive to the angle of incidence because they focus sunlight onto a receiver; if the sun's rays are not properly aligned, the concentration ratio is lost. (CO2, K1)
*   **Solar Photovoltaic (PV) Systems:** The power output of PV panels is directly proportional to the intensity of solar radiation falling on their surface. An increased angle of incidence leads to lower power generation. Efficient PV system design involves orienting panels to minimize the angle of incidence over the desired period (daily, seasonally, or annually). (CO3, K3)

**Key Concept:** Accurate calculation and optimization of the angle of incidence are vital for maximizing the energy yield from solar installations and ensuring their economic viability. This influences the choice of collector type, mounting structure, and tracking systems (if used).

**Reference:**
*   Solanki, C. S. (2013). *Solar Photovoltaic Technology and Systems*. Chapter 4: Solar Radiation and its Measurement (discusses incidence angle and its effect on PV performance).
*   Boyle, G. (2012). *Renewable Energy*. Chapter 5: Solar Heating (explains how incidence angle affects solar thermal collector efficiency).

---

### 4. Practice Questions and Exercises

**Question 1:**
Define the angle of incidence and explain why it is important in solar energy systems. (CO1, K2)

**Answer:**
The angle of incidence is the angle between the sun's rays and the normal to a surface. It is important because it determines how much solar radiation falls perpendicularly onto the collector surface. A smaller angle of incidence means more direct radiation per unit area, leading to higher energy absorption and thus better system performance for both solar thermal and PV systems.

---

**Question 2:**
A solar collector is mounted on a flat roof and is tilted at an angle of $25^\circ$ towards the South. The latitude of the location is $35^\circ$ N. At solar noon on the winter solstice, the sun's altitude angle is $31.5^\circ$ and the sun's azimuth angle is $0^\circ$ (directly South). Calculate the angle of incidence on the collector at this time. (CO1, K3)

**Given:**
*   Latitude ($\phi$) = $35^\circ$ N
*   Surface Tilt Angle ($\beta$) = $25^\circ$
*   Surface Azimuth Angle ($\gamma$) = $0^\circ$ (facing South)
*   Solar Altitude Angle ($\alpha_s$) = $31.5^\circ$
*   Solar Azimuth Angle ($\gamma_s$) = $0^\circ$ (at solar noon, South)

**Formula:**
$\cos(\theta) = \sin(\alpha_s) \cos(\beta) + \cos(\alpha_s) \sin(\beta) \cos(\gamma_s - \gamma)$

**Calculation:**
$\cos(\theta) = \sin(31.5^\circ) \cos(25^\circ) + \cos(31.5^\circ) \sin(25^\circ) \cos(0^\circ - 0^\circ)$
$\cos(\theta) = (0.5225) \times (0.9063) + (0.8526) \times (0.4226) \times (1)$
$\cos(\theta) = 0.4736 + 0.3599$
$\cos(\theta) = 0.8335$
$\theta = \arccos(0.8335) \approx 33.54^\circ$

**Answer:** The angle of incidence on the collector at solar noon on the winter solstice is approximately $33.54^\circ$.

---

**Question 3:**
For a location at latitude $20^\circ$ N, what is the recommended tilt angle for a solar collector intended for year-round energy collection? (CO1, K2)

**Answer:**
For year-round energy collection, the recommended tilt angle for a solar collector is generally equal to the latitude of the location. Therefore, for a location at $20^\circ$ N latitude, the recommended tilt angle would be approximately $20^\circ$ towards the South.

---

### 5. Important Points to Remember

*   The **angle of incidence ($\theta$)** is the angle between the sun's rays and the normal to a surface.
*   Minimizing the angle of incidence maximizes the solar radiation incident per unit area.
*   The **sun's altitude ($\alpha_s$)** and **azimuth ($\gamma_s$)** angles change throughout the day and year.
*   The **surface tilt ($\beta$)** and **azimuth ($\gamma$)** angles are fixed design parameters for static collectors.
*   The formula $\cos(\theta) = \sin(\alpha_s) \cos(\beta) + \cos(\alpha_s) \sin(\beta) \cos(\gamma_s - \gamma)$ is used to calculate the angle of incidence on a tilted plane.
*   For year-round performance, orienting the collector with a tilt angle equal to the latitude is a common and effective strategy.
*   Understanding the angle of incidence is crucial for optimizing the energy yield and efficiency of solar thermal and photovoltaic systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 6. Further Reading and References

*   **Sukhatme, S. P.** (2017). *Solar Energy*. McGraw Hill Education (India) Private Limited. (Chapters 2 & 3 are particularly relevant).
*   **Goswami, D. Yogi, Kreith, Frank, & Kreider, Jan F.** (2015). *Principles of Solar Engineering*. CRC Press. (Chapter 1 covers solar radiation fundamentals).
*   **Tiwari, G. N.** (2016). *Handbook of Solar Energy: Theory, Analysis and Applications*. Springer. (Chapter 2 is highly relevant).
*   **Messenger, Roger A., & Ventre, Jerry.** (2012). *Photovoltaic Systems Engineering*. CRC Press. (Chapter 3 discusses solar radiation and its impact on PV).
*   **Boyle, Godfrey.** (2012). *Renewable Energy: Power for a Sustainable Future*. Oxford University Press. (Chapter 5 on solar heating).
*   **Solanki, Chetan Singh.** (2013). *Solar Photovoltaic Technology and Systems: A Manual for Technicians, Trainers and Engineers*. PHI Learning Pvt. Ltd. (Chapter 4 discusses solar radiation).

---