---
title: "Extra-terrestrial Region.- Terrestrial Region -Solar Radiation on an Inclined Surface -Conversion Factors -Total Solar Radiation on an Inclined/Tilted Surface -Monthly Average Daily Solar Radiation on Inclined Surfaces ."
subject: "DESIGN OF SOLAR PV SYSTEMS"
module: "Module 1: Introduction  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a89"
status: "completed"
scrapedAt: "2026-05-23T16:34:23.915Z"
---
# DESIGN OF SOLAR PV SYSTEMS - Module 1: Introduction

## Topic: Solar Radiation and Its Components

This module introduces the fundamental concepts of solar radiation, its behavior both outside and within Earth's atmosphere, and how it interacts with inclined surfaces. Understanding these principles is crucial for accurately designing and optimizing solar photovoltaic (PV) systems.

**Learning Outcomes Covered:**

*   **CO1 (K1):** Explain the basics of solar energy conversion systems. (This topic lays the groundwork for understanding where solar energy comes from and how it's measured, essential for any conversion system.)

---

### 1. Extra-terrestrial Region: The Sun's Energy

The Sun is the ultimate source of solar energy. The radiation leaving the Sun is what we aim to capture and convert into electricity.

**Key Concepts:**

*   **Solar Constant ($G_{sc}$):**
    *   Definition: The total solar irradiance received on a surface perpendicular to the Sun's rays at the Earth's mean distance from the Sun, outside the atmosphere.
    *   Value: Approximately **1361 W/m²** (This value can vary slightly with solar activity and is periodically updated by scientific bodies like the World Radiation Center).
    *   Significance: It represents the maximum possible solar irradiance available for capture before atmospheric effects.
*   **Source of Energy:** Nuclear fusion reactions within the Sun's core.
*   **Electromagnetic Spectrum:** Solar radiation encompasses a wide range of electromagnetic waves, including visible light, infrared (heat), and ultraviolet (UV) radiation. For PV systems, the focus is primarily on the wavelength range that silicon-based solar cells can efficiently convert (roughly 300 nm to 1100 nm, peaking around 500-700 nm).

**Reference:**
*   *Solar Photovoltaics: Fundamentals, Technologies And Applications* by Chetan Singh Solanki (PHI, 3rd Edition) provides detailed information on the solar constant and the solar spectrum.

---

### 2. Terrestrial Region: Solar Radiation Reaching Earth

When solar radiation passes through Earth's atmosphere, it undergoes various processes that alter its intensity and spectral distribution.

**Key Concepts:**

*   **Atmospheric Effects:**
    *   **Scattering:** Atmospheric gases (nitrogen, oxygen) and particles (dust, water vapor, aerosols) can scatter solar radiation in different directions. This leads to diffuse radiation.
    *   **Absorption:** Atmospheric gases like ozone, carbon dioxide, and water vapor absorb certain wavelengths of solar radiation, reducing the overall energy reaching the surface.
    *   **Reflection (Albedo):** Clouds and atmospheric particles can reflect solar radiation back into space.
*   **Types of Terrestrial Solar Radiation:**
    *   **Direct Normal Irradiance (DNI):** The solar radiation received directly from the Sun, measured on a surface perpendicular to the Sun's rays at the Earth's surface. This is the radiation that forms shadows.
    *   **Diffuse Horizontal Irradiance (DHI):** The solar radiation received from all parts of the sky dome, excluding the direct beam from the Sun. This radiation is scattered by the atmosphere and clouds.
    *   **Global Horizontal Irradiance (GHI):** The total solar radiation received on a horizontal surface. It is the sum of DNI (after it's been angled to the horizontal) and DHI.
        *   **GHI = DNI * cos($\theta_z$) + DHI**
            *   Where $\theta_z$ is the zenith angle (angle between the Sun and the vertical).
*   **Clear Sky vs. Cloudy Sky:** Solar irradiance is significantly higher and more predictable on clear days than on cloudy days. Cloud cover drastically reduces both direct and diffuse components.

**Reference:**
*   *Solar Energy-Fundamentals, Design, Modelling and Applications* by G.N. Tiwari (Narosa Publishers, 2002) elaborates on atmospheric effects and the different components of terrestrial solar radiation.

---

### 3. Solar Radiation on an Inclined Surface

Most solar PV panels are mounted on tilted surfaces to maximize the capture of solar energy throughout the year. Understanding how radiation components are distributed on an inclined surface is critical.

**Key Concepts:**

*   **Surface Orientation:**
    *   **Tilt Angle ($\beta$):** The angle between the PV panel surface and the horizontal plane.
    *   **Azimuth Angle ($\gamma$):** The angle between the projection of the PV panel surface normal onto the horizontal plane and the local meridian (North-South direction). A common convention is 0° for South-facing and positive angles towards West.
*   **Components of Irradiance on an Inclined Surface ($I_t$):** The total irradiance on an inclined surface is the sum of the direct, diffuse, and reflected components.
    *   $I_t = I_b + I_d + I_r$
        *   $I_t$: Total irradiance on the tilted surface.
        *   $I_b$: Direct irradiance on the tilted surface.
        *   $I_d$: Diffuse irradiance on the tilted surface.
        *   $I_r$: Reflected irradiance (albedo) on the tilted surface.

**Reference:**
*   Both *Solar Photovoltaics: Fundamentals, Technologies And Applications* by Chetan Singh Solanki and *Solar Energy-Fundamentals, Design, Modelling and Applications* by G.N. Tiwari extensively cover the geometry of solar radiation and its components on inclined surfaces.

---

### 4. Conversion Factors

To calculate the radiation on an inclined surface, we need to convert the horizontal components (GHI, DHI) and the extra-terrestrial component to their respective values on the inclined plane.

**Key Concepts:**

*   **Angle of Incidence ($\theta$):** The angle between the Sun's rays and the normal to the inclined surface. This is a crucial parameter for calculating the direct component on the tilted surface.
    *   The formula for $\theta$ is derived from solar geometry and depends on the latitude, declination angle, hour angle, tilt angle, and azimuth angle. (Detailed derivation is often covered in more advanced modules, but understanding its importance is key).
*   **Cosine Law:** The direct irradiance on an inclined surface ($I_b$) is proportional to the cosine of the angle of incidence:
    *   $I_b = G_{bn} \times \cos(\theta)$
        *   $G_{bn}$ is the direct normal irradiance (DNI).
*   **Geometric Factors (View Factors):** These factors determine how much of the diffuse and reflected radiation from the surroundings (sky, ground) falls onto the inclined surface.

**Reference:**
*   *Solar Energy-Fundamentals, Design, Modelling and Applications* by G.N. Tiwari provides detailed methods and formulas for calculating these conversion factors.

---

### 5. Total Solar Radiation on an Inclined/Tilted Surface

This section explains how to sum up the contributions from direct, diffuse, and reflected radiation to get the total irradiance on a tilted surface.

**Key Concepts:**

*   **Modeling of Diffuse Radiation:** Since diffuse radiation comes from all directions, models are used to estimate the portion falling on an inclined surface. Common models include:
    *   **Isotropic Model:** Assumes diffuse radiation is uniformly distributed across the sky.
    *   **Anisotropic Models:** Account for the fact that diffuse radiation is not uniform; it's brighter around the sun and along the horizon. Examples include Hay-Davies, Perez, and Koronatos models.
*   **Modeling of Reflected Radiation (Ground Albedo):** The ground surface reflects solar radiation onto the PV panel.
    *   $I_r = \rho \times GHI \times \frac{(1 + \cos(\beta))}{2}$
        *   $\rho$ (rho) is the ground reflectance (albedo), typically 0.1-0.4 for grass, sand, or snow.
        *   The term $\frac{(1 + \cos(\beta))}{2}$ is the view factor for the ground.
*   **Total Irradiance Calculation ($I_t$):**
    *   $I_t = DNI \times \frac{\sin(h_s)}{\sin(\alpha_s)} \times \cos(\theta) + DHI \times (\frac{1 + \cos(\beta)}{2}) \times F_{sky} + \rho \times GHI \times (\frac{1 + \cos(\beta)}{2})$
        *   Where $h_s$ is the solar altitude angle, $\alpha_s$ is the solar elevation angle, $\theta$ is the angle of incidence. The factors $F_{sky}$ and other terms represent the diffuse and reflected contributions based on the chosen models.

**Important Point to Remember:** The choice of diffuse and albedo models significantly impacts the accuracy of the calculated total irradiance. Anisotropic models for diffuse radiation generally provide better accuracy.

**Reference:**
*   *Solar Photovoltaics: Fundamentals, Technologies And Applications* by Chetan Singh Solanki and *Solar Energy-Fundamentals, Design, Modelling and Applications* by G.N. Tiwari both offer detailed explanations and formulas for these models.

---

### 6. Monthly Average Daily Solar Radiation on Inclined Surfaces

For system design, it's often more practical to work with daily average values over a month rather than instantaneous irradiance.

**Key Concepts:**

*   **Daily Irradiation ($H_t$):** The total solar energy received on an inclined surface per unit area over a day. It's the integral of total irradiance ($I_t$) over the daylight hours.
*   **Monthly Average Daily Irradiation:** The average daily irradiation for each month of the year. This data is crucial for estimating the total annual energy production and for sizing components like batteries.
*   **Sources of Data:**
    *   **Meteorological Stations:** Ground-based measurements (e.g., pyranometers) provide actual GHI and DHI data.
    *   **Satellite Data:** Satellites provide global coverage and can be used to estimate solar irradiance, especially in regions with sparse ground stations.
    *   **PV Simulation Software:** Tools like PVsyst, SAM (System Advisor Model), and Homer use various models and databases to provide monthly average daily solar radiation data for specific locations and orientations.

**Calculation Approach:**
1.  Obtain monthly average daily GHI and DHI data for a specific location.
2.  For each month, calculate the average daily angle of incidence for the direct component.
3.  Apply the appropriate models (e.g., isotropic or anisotropic for diffuse, and albedo model) to convert monthly average daily GHI and DHI to monthly average daily total irradiation on the inclined surface.

**Example:** If the monthly average daily GHI on a horizontal surface is 5 kWh/m²/day, and you have a PV system tilted at 30 degrees facing South in the Northern Hemisphere, the total daily energy received on the tilted surface will be different from 5 kWh/m²/day due to the angle of incidence and the contribution of diffuse and reflected radiation.

**Reference:**
*   *Grid Integration of Solar Photovoltaic Systems* by D.P. Kothari, M Jamil (CRC Press, 2018) may touch upon energy yield estimation, which relies on these monthly average values.
*   *Solar Energy-Fundamentals, Design, Modelling and Applications* by G.N. Tiwari provides methods for calculating daily irradiation from hourly or instantaneous values.

---

### Practice Questions and Answers

**Question 1:**
What is the approximate value of the solar constant, and what does it represent?

**Answer:**
The solar constant is approximately **1361 W/m²**. It represents the total solar irradiance received on a surface perpendicular to the Sun's rays at the Earth's mean distance from the Sun, outside the atmosphere.

---

**Question 2:**
Differentiate between Direct Normal Irradiance (DNI) and Diffuse Horizontal Irradiance (DHI).

**Answer:**
*   **DNI:** Solar radiation received directly from the Sun on a surface perpendicular to the Sun's rays at the Earth's surface. It forms shadows.
*   **DHI:** Solar radiation scattered by the atmosphere and clouds, received from all parts of the sky dome, excluding the direct beam from the Sun. It does not form sharp shadows.

---

**Question 3:**
What are the three main components of total solar radiation on an inclined surface?

**Answer:**
The three main components are:
1.  **Direct Irradiance ($I_b$):** The portion of the solar beam that hits the inclined surface.
2.  **Diffuse Irradiance ($I_d$):** The scattered radiation from the sky that hits the inclined surface.
3.  **Reflected Irradiance ($I_r$):** Radiation reflected from the ground (albedo) that hits the inclined surface.

---

**Question 4:**
A solar panel is installed on a horizontal surface (tilt angle = 0°). If the sun is directly overhead, what is the angle of incidence for the direct solar radiation on the panel?

**Answer:**
If the sun is directly overhead, its rays are perpendicular to the horizontal surface. Therefore, the angle of incidence ($\theta$) is **0°**.
*   *Explanation:* The angle of incidence is the angle between the Sun's rays and the normal to the surface. For a horizontal surface, the normal is vertical. If the sun is overhead, it's also vertical, hence the angle between the rays and the normal is 0°.

---

**Question 5:**
Explain why it's often beneficial to tilt solar panels at an angle rather than keeping them horizontal.

**Answer:**
Tilting solar panels allows them to be more optimally oriented towards the sun throughout the year. In most locations (outside the tropics), the sun is lower in the sky during winter and higher during summer. By tilting the panels, you can increase the average capture of solar energy over the year, especially by optimizing for the periods of lower sun angles when a horizontal surface would receive less direct radiation. The optimal tilt angle is often close to the latitude of the location, with adjustments for seasonal variations if a tracking system is not used.

---

### Important Points to Remember

*   **Solar Constant (1361 W/m²):** The baseline solar energy available outside the atmosphere.
*   **Atmospheric Effects:** Scattering, absorption, and reflection significantly reduce solar radiation before it reaches the ground.
*   **DNI, DHI, GHI:** Understanding these components is crucial for calculating radiation on any surface.
*   **Inclined Surfaces:** Tilt and azimuth angles are key parameters for optimizing energy capture.
*   **Total Irradiance ($I_t = I_b + I_d + I_r$):** All three components must be considered for accurate system performance estimation.
*   **Modeling:** Various models exist to estimate diffuse and reflected radiation, with anisotropic models generally providing better accuracy.
*   **Monthly Averages:** Monthly average daily solar radiation data is essential for annual energy yield calculations and system sizing.

---

This concludes Module 1, providing a foundational understanding of solar radiation and its interaction with surfaces, which is vital for the subsequent design of solar PV systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
