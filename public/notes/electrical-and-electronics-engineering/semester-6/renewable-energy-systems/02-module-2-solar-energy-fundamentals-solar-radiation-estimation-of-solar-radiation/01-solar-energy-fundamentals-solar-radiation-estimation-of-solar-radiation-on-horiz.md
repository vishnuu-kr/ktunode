---
title: "Solar Energy:  Fundamentals; Solar Radiation; Estimation of solar radiation on horizontal and inclined surfaces; Solar radiation Measurements - Pyrheliometers, Pyranometer, Sunshine Recorder."
subject: "RENEWABLE ENERGY SYSTEMS"
module: "Module 2: Solar Energy:  Fundamentals; Solar Radiation; Estimation of solar radiation on horizontal and inclined surfaces; Solar radiation Measurements "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36733"
status: "completed"
scrapedAt: "2026-05-23T16:31:51.206Z"
---
# Renewable Energy Systems: Module 2 - Solar Energy: Fundamentals, Solar Radiation, Estimation, and Measurement

---

## Module Overview

This module delves into the fundamental principles of solar energy, exploring the nature of solar radiation and how it can be quantified. We will also cover methods for estimating solar radiation on different surfaces and introduce the key instruments used for its measurement. This knowledge is crucial for the effective design and deployment of solar energy systems, directly contributing to **CO3** (Describe the use of solar energy and the various components used in the energy production with respect to applications like-heating, cooling, desalination, power generation).

---

## 1. Solar Energy: Fundamentals

### 1.1 What is Solar Energy?

*   **Definition:** Solar energy is the radiant light and heat from the Sun that is harnessed using a range of technologies such as solar heating, photovoltaics, solar thermal electricity, and artificial photosynthesis.
*   **Source:** The Sun, a giant ball of hot gas (primarily hydrogen and helium), generates energy through nuclear fusion in its core.
*   **Electromagnetic Radiation:** This energy travels to Earth as electromagnetic radiation across a wide spectrum, including visible light, infrared radiation (heat), and ultraviolet (UV) radiation.

### 1.2 Why is Solar Energy Important?

*   **Renewable:** It is an inexhaustible resource, unlike fossil fuels.
*   **Environmentally Friendly:** Produces no greenhouse gas emissions during operation, contributing to a cleaner environment and mitigating climate change (**CO1**).
*   **Abundant:** Available globally, although intensity varies by location and time.
*   **Decentralized Potential:** Can be deployed in a distributed manner, reducing reliance on large power grids and increasing energy security.
*   **Versatile Applications:** Can be used for heating, cooling, electricity generation, water purification, and more (**CO3**).

### 1.3 Basic Principles of Solar Energy Conversion

*   **Solar Thermal Systems:** These systems capture the Sun's heat and convert it into thermal energy. This thermal energy can be used directly for heating water or air, or it can be used to generate steam to drive turbines for electricity production.
    *   **Example:** Solar water heaters, solar space heating.
*   **Photovoltaic (PV) Systems:** These systems convert sunlight directly into electricity using semiconductor materials that exhibit the photovoltaic effect.
    *   **Example:** Solar panels on rooftops, solar farms.
*   **Artificial Photosynthesis:** Mimics the natural process of photosynthesis to convert sunlight, water, and carbon dioxide into energy-rich fuels. (This is an advanced topic but part of the broader solar energy landscape).

---

## 2. Solar Radiation

### 2.1 Nature of Solar Radiation

*   **Electromagnetic Spectrum:** Solar radiation reaching Earth encompasses various wavelengths. The intensity distribution across this spectrum is critical.
    *   **Ultraviolet (UV):** Wavelengths < 0.4 µm. Can cause sunburn, but also used in some sterilization processes.
    *   **Visible Light:** Wavelengths 0.4 µm to 0.7 µm. This is the light we see and is directly used in PV conversion.
    *   **Infrared (IR):** Wavelengths > 0.7 µm. This is felt as heat and is the primary component used in solar thermal systems.
*   **Solar Constant (Gsc):** The average solar irradiance on a surface perpendicular to the sun's rays, at the mean distance of the Earth from the Sun, outside the Earth's atmosphere.
    *   **Value:** Approximately **1361 W/m²** (as per recent measurements, though older texts might cite slightly different values like 1367 W/m² or 1370 W/m²).
    *   **Reference:** G. D. Rai, Chapter 3, "Solar Radiation and Measurements."

### 2.2 Atmospheric Effects on Solar Radiation

As solar radiation passes through the Earth's atmosphere, its intensity and spectral distribution are significantly altered by various phenomena:

*   **Absorption:** Gases like ozone, water vapor, and carbon dioxide absorb specific wavelengths.
*   **Scattering:** Atmospheric particles (molecules, aerosols, dust) scatter solar radiation.
    *   **Rayleigh Scattering:** Scattering by air molecules, responsible for the blue color of the sky. It preferentially scatters shorter wavelengths (blue and violet).
    *   **Mie Scattering:** Scattering by larger particles (aerosols, dust, water droplets). It is less wavelength-dependent and scatters light more forward.
*   **Extinction:** The combined effect of absorption and scattering reduces the amount of direct solar radiation reaching the surface.

### 2.3 Components of Solar Radiation at the Earth's Surface

When solar radiation reaches the Earth's surface, it can be broadly categorized into three components:

1.  **Direct Normal Irradiance (DNI):** The solar radiation arriving directly from the Sun without being scattered or absorbed by the atmosphere. It is measured on a surface perpendicular to the Sun's rays.
    *   **Importance:** Crucial for concentrating solar power (CSP) technologies.
    *   **Measurement:** Measured using a pyrheliometer.

2.  **Diffuse Horizontal Irradiance (DHI):** The solar radiation that has been scattered by atmospheric particles and arrives at the surface from all directions in the sky. It is measured on a horizontal surface.
    *   **Importance:** Contributes to PV electricity generation, especially on cloudy days.
    *   **Measurement:** Measured using a pyranometer with a shading disk.

3.  **Global Horizontal Irradiance (GHI):** The total solar radiation received on a horizontal surface. It is the sum of direct and diffuse radiation falling on a horizontal plane.
    *   **GHI = DNI * cos(θz) + DHI**
        *   Where θz is the zenith angle (angle between the sun's rays and the vertical).
    *   **Importance:** Represents the total solar energy available for most flat-plate collectors and PV panels mounted horizontally.
    *   **Measurement:** Measured using a pyranometer.

### 2.4 Types of Solar Radiation on Inclined Surfaces

Solar energy systems often use collectors or panels that are not horizontal. Therefore, it's important to estimate solar radiation on inclined surfaces.

*   **Global Tilted Irradiance (GTI):** The total solar radiation received on an inclined surface.
*   **Components of GTI:**
    *   **Direct Tilted Irradiance:** The direct normal irradiance projected onto the tilted surface.
    *   **Diffuse Tilted Irradiance:** The diffuse radiation from the sky incident on the tilted surface.
    *   **Reflected Irradiance (Albedo):** Radiation reflected from the ground surface onto the tilted surface.

---

## 3. Estimation of Solar Radiation on Horizontal and Inclined Surfaces

Estimating solar radiation is crucial for system design and performance prediction. These estimations rely on various models, often using meteorological data and astronomical calculations.

### 3.1 Estimation on Horizontal Surfaces (GHI)

*   **Empirical Models:** These models use statistical relationships between solar radiation and other meteorological parameters like sunshine hours, cloud cover, temperature, and humidity.
    *   **Angstrom-Prescott Model:** A widely used empirical model relating GHI to extraterrestrial radiation and sunshine duration.
        *   **Formula:** $GHI = G_{on} (a + b \frac{n}{N})$
            *   $GHI$: Global Horizontal Irradiance (MJ/m²/day)
            *   $G_{on}$: Extraterrestrial radiation on a horizontal surface (MJ/m²/day)
            *   $n$: Actual sunshine hours (hours/day)
            *   $N$: Maximum possible sunshine hours (hours/day)
            *   $a, b$: Empirical coefficients, typically around 0.25 and 0.50 respectively, but vary with location and atmospheric conditions.
        *   **Reference:** G. D. Rai, Chapter 3, "Solar Radiation and Measurements." Sawhney G. S., Chapter 4, "Solar Radiation Data."
    *   **Other models:** Hargreaves-Samani model (uses temperature), Black-Johnston model.

*   **Physical Models:** These models are based on atmospheric physics and radiative transfer principles. They are more complex but can provide more accurate estimates if atmospheric data is available.

### 3.2 Estimation on Inclined Surfaces (GTI)

To estimate solar radiation on an inclined surface, we need to consider how the three components of radiation (direct, diffuse, and reflected) are projected onto the tilted plane. Various models exist for this conversion:

*   **Anisotropic Models:** These models account for the non-uniform distribution of diffuse sky radiation. They are more complex but provide better accuracy.
    *   **Isotropic Model:** Assumes diffuse radiation comes equally from all parts of the sky. Simple but less accurate.
    *   **Circumsolar Radiation Models:** Account for increased diffuse radiation around the Sun's disk.
    *   **Horizon Brightening Models:** Account for increased diffuse radiation near the horizon.
*   **Commonly Used Models:**
    *   **Liu-Jordan Model:** An early model that defines a "view factor" to represent the fraction of diffuse radiation incident on a tilted surface.
    *   **Hay-Davies Model:** Considers circumsolar diffuse radiation based on the sun's position.
    *   **Perez Model:** A more sophisticated model that accounts for various sky conditions and terrain effects.
    *   **Reference:** Thomas E. Kissell, Chapter 3, "Solar Radiation Fundamentals."

**Key Concept:** The inclination angle and azimuth angle of the collector surface significantly affect the amount of solar radiation it receives. Optimizing these angles is crucial for maximizing energy capture.

---

## 4. Solar Radiation Measurements

Accurate measurement of solar radiation is essential for understanding local resource availability, validating estimation models, and monitoring the performance of solar energy systems.

### 4.1 Importance of Measurement

*   **Site Assessment:** Determining the solar potential of a location for system design.
*   **System Performance Monitoring:** Evaluating the actual energy output of solar installations.
*   **Model Calibration:** Fine-tuning empirical and physical models for specific regions.
*   **Research and Development:** Advancing the understanding of solar radiation and its interaction with the atmosphere and surfaces.

### 4.2 Instruments for Solar Radiation Measurement

The primary instruments for measuring solar radiation are:

#### 4.2.1 Pyranometer

*   **Function:** Measures the **Global Horizontal Irradiance (GHI)** – the total solar radiation received on a horizontal surface from the entire celestial hemisphere (direct, diffuse, and reflected radiation).
*   **Working Principle:**
    *   It typically consists of a thermopile sensor housed in a weatherproof casing.
    *   The sensor has a black surface that absorbs all incident solar radiation, converting it into heat.
    *   A temperature difference is created between the black absorber and a reference junction.
    *   This temperature difference generates a voltage, which is proportional to the incident solar irradiance.
    *   A glass dome (often double-glazed) is used to transmit solar radiation while protecting the sensor and preventing convection effects.
    *   **Reference:** G. D. Rai, Chapter 3, "Solar Radiation and Measurements." Sawhney G. S., Chapter 4, "Solar Radiation Data."
*   **Types of Pyranometers:**
    *   **First-class (ISO 9060):** High accuracy, stable, and suitable for long-term measurements.
    *   **Second-class:** Less accurate, more affordable, suitable for general monitoring.
    *   **Silicon Pyranometers:** Use a silicon photodiode. Less accurate and sensitive to temperature changes, but cheaper and provide faster response.
*   **Measurement of Diffuse Radiation (DHI):** To measure DHI using a pyranometer, a shading disk or band is used to block the direct solar beam. The pyranometer is then positioned to measure only the diffuse component.

#### 4.2.2 Pyrheliometer

*   **Function:** Measures the **Direct Normal Irradiance (DNI)** – the solar radiation received directly from the Sun on a surface perpendicular to the sun's rays.
*   **Working Principle:**
    *   Similar to a pyranometer in that it uses a thermopile sensor.
    *   However, it has a narrow field of view (typically 5° or less) and is mounted on a **solar tracker** that continuously points it directly at the Sun.
    *   The tracker compensates for the Earth's rotation to keep the instrument aimed at the Sun throughout the day.
    *   The sensor is usually housed in a tube to minimize the acceptance of diffuse and reflected radiation.
    *   **Reference:** G. D. Rai, Chapter 3, "Solar Radiation and Measurements."
*   **Applications:** Crucial for concentrating solar power (CSP) systems, where the efficiency depends heavily on the direct beam radiation.

#### 4.2.3 Sunshine Recorder

*   **Function:** Provides a measure of **sunshine duration** – the total period during a day that direct solar radiation is strong enough to cause scorching or burning. It does not measure irradiance intensity.
*   **Working Principle:**
    *   **Campbell-Stokes Sunshine Recorder:** The most common type. It consists of a glass sphere that focuses the Sun's rays onto a specially shaped record card held in a groove. As the Sun moves across the sky, the focused beam traces a scorched line on the card. The length of this scorched line is proportional to the duration of bright sunshine.
    *   **Heliograph:** A more modern electronic device that uses a photodetector to record when the direct solar radiation exceeds a certain threshold.
    *   **Reference:** G. D. Rai, Chapter 3, "Solar Radiation and Measurements." Sawhney G. S., Chapter 4, "Solar Radiation Data."
*   **Significance:** Sunshine duration is a key input parameter for empirical models (like Angstrom-Prescott) used to estimate solar irradiance. It's a simple and cost-effective way to get an indication of solar resource availability.

---

## 5. Important Points to Remember

*   Solar radiation is the primary energy source for Earth's climate and many renewable energy technologies.
*   Solar radiation reaching the Earth's surface is composed of direct, diffuse, and reflected components.
*   The atmosphere significantly affects solar radiation through absorption and scattering.
*   Global Horizontal Irradiance (GHI) is the total radiation on a horizontal surface, while Direct Normal Irradiance (DNI) is the direct radiation perpendicular to the Sun.
*   Estimating solar radiation on inclined surfaces is essential for designing solar collectors and PV panels.
*   Pyranometers measure GHI (total solar radiation on a horizontal surface).
*   Pyrheliometers measure DNI (direct solar radiation only) and require a solar tracker.
*   Sunshine recorders measure sunshine duration, not intensity.

---

## 6. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  The solar radiation that has been scattered by atmospheric particles and arrives at the surface from all directions is called:
    a) Direct Normal Irradiance (DNI)
    b) Global Horizontal Irradiance (GHI)
    c) Diffuse Horizontal Irradiance (DHI)
    d) Reflected Irradiance

2.  Which instrument is used to measure the Direct Normal Irradiance (DNI)?
    a) Pyranometer
    b) Sunshine Recorder
    c) Pyrheliometer
    d) Anemometer

3.  The Angstrom-Prescott model relates Global Horizontal Irradiance (GHI) to:
    a) Temperature and humidity
    b) Sunshine duration and extraterrestrial radiation
    c) Wind speed and atmospheric pressure
    d) Cloud cover and altitude

4.  The solar constant is the solar irradiance outside the Earth's atmosphere on a surface perpendicular to the Sun's rays. Its approximate value is:
    a) 1000 W/m²
    b) 1361 W/m²
    c) 500 W/m²
    d) 2000 W/m²

5.  A Campbell-Stokes sunshine recorder works by:
    a) Measuring the voltage from a thermopile
    b) Tracking the Sun and measuring its angular position
    c) Focusing sunlight to scorch a card
    d) Detecting changes in air pressure

**Short Answer Questions:**

1.  Explain the difference between Global Horizontal Irradiance (GHI) and Direct Normal Irradiance (DNI).
2.  Describe the primary function of a pyranometer and how it measures solar radiation.
3.  Why is it important to estimate solar radiation on inclined surfaces?
4.  List and briefly describe the three components of solar radiation that reach the Earth's surface.
5.  What is the role of atmospheric scattering in determining the solar radiation received at the ground?

**Calculation/Application Questions:**

1.  Given the following data for a location:
    *   Actual sunshine hours (n) = 6 hours
    *   Maximum possible sunshine hours (N) = 12 hours
    *   Extraterrestrial radiation on a horizontal surface ($G_{on}$) = 30 MJ/m²/day
    *   Angstrom-Prescott coefficients: a = 0.25, b = 0.50
    Calculate the estimated Global Horizontal Irradiance (GHI) using the Angstrom-Prescott model. (Note: Convert MJ/m² to W/m² by dividing by 3.6 if needed, but the question asks for GHI in MJ/m²/day as per the model).

**Answers:**

**Multiple Choice Questions:**

1.  c) Diffuse Horizontal Irradiance (DHI)
2.  c) Pyrheliometer
3.  b) Sunshine duration and extraterrestrial radiation
4.  b) 1361 W/m²
5.  c) Focusing sunlight to scorch a card

**Short Answer Questions:**

1.  **GHI:** Total solar radiation on a horizontal surface, including direct, diffuse, and reflected radiation. **DNI:** Solar radiation arriving directly from the Sun on a surface perpendicular to the Sun's rays.
2.  A pyranometer measures GHI. It uses a thermopile sensor with a black absorber that heats up when exposed to radiation. This temperature difference generates a voltage proportional to the incident irradiance.
3.  Solar collectors and PV panels are often tilted to optimize energy capture, so understanding how radiation varies with tilt and orientation is crucial for design.
4.  The three components are: Direct Normal Irradiance (DNI), Diffuse Horizontal Irradiance (DHI), and Reflected Irradiance (from the ground).
5.  Atmospheric scattering (Rayleigh and Mie scattering) redirects solar radiation, reducing the direct component and increasing the diffuse component. This affects the overall intensity and spectral distribution of radiation reaching the surface, and is responsible for the blue sky.

**Calculation/Application Questions:**

1.  Using the Angstrom-Prescott model:
    $GHI = G_{on} (a + b \frac{n}{N})$
    $GHI = 30 \text{ MJ/m²/day} \times (0.25 + 0.50 \times \frac{6 \text{ hours}}{12 \text{ hours}})$
    $GHI = 30 \text{ MJ/m²/day} \times (0.25 + 0.50 \times 0.5)$
    $GHI = 30 \text{ MJ/m²/day} \times (0.25 + 0.25)$
    $GHI = 30 \text{ MJ/m²/day} \times 0.5$
    $GHI = 15 \text{ MJ/m²/day}$

---
This module provides the foundational understanding of solar energy and its measurement, directly supporting **CO3** by explaining the energy source and the principles behind its utilization in various applications. The concepts of atmospheric effects and measurement instruments also indirectly contribute to **CO1** by highlighting the environmental factors influencing renewable energy resources.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
