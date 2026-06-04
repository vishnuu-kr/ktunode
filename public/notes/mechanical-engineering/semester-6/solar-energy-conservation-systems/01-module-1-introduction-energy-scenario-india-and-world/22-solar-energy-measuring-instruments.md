---
title: "Solar energy measuring instruments"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 1: Introduction: Energy Scenario: India and world"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bb7"
status: "completed"
scrapedAt: "2026-05-20T18:08:06.359Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 1: Introduction: Energy Scenario: India and World

### Topic: Solar Energy Measuring Instruments

---

### Learning Outcomes:

*   Understand the importance of accurate measurement of solar radiation and related parameters.
*   Identify and describe the working principles of various instruments used for measuring solar radiation (global, direct, diffuse).
*   Explain the function and application of instruments used for measuring other relevant parameters like temperature, wind speed, and humidity.
*   Understand the calibration and accuracy considerations for solar energy measuring instruments.
*   Relate the measurements obtained from these instruments to the design and performance evaluation of solar energy systems.

---

### Course Outcomes Alignment:

*   **CO1 (K2):** Understanding the basic concepts of solar radiation and the effects of the atmosphere on solar energy directly relies on instruments that quantify these aspects.
*   **CO2 (K1):** While not directly about collectors, understanding the input solar radiation (measured by instruments) is crucial for evaluating collector performance.
*   **CO3 (K3):** Accurate measurements of solar radiation, ambient temperature, and other meteorological data are essential for applying thermal analysis techniques and implementing design principles for PV systems.
*   **CO4 (K2):** Economic feasibility of solar projects is often assessed based on expected energy yields, which are derived from solar radiation data measured by these instruments.

---

### 1. Introduction: Why Measure Solar Energy?

Accurate measurement of solar energy and related environmental parameters is fundamental for:

*   **Resource Assessment:** Determining the potential of a location for solar energy harvesting.
*   **System Design:** Sizing solar collectors (PV panels, thermal collectors) and other components based on available solar radiation.
*   **Performance Monitoring:** Evaluating the actual output of solar energy systems and identifying performance deviations.
*   **Research and Development:** Validating theoretical models and developing new solar technologies.
*   **Weather Forecasting:** Providing data for meteorological services and climate studies.
*   **Economic Feasibility:** Estimating energy yields for financial projections and project viability (CO4).

---

### 2. Key Solar Radiation Components & Measurement

Solar radiation incident on a surface can be divided into three main components:

*   **Global Horizontal Irradiance (GHI):** The total solar irradiance incident on a horizontal surface. It includes direct normal irradiance (DNI) and diffuse horizontal irradiance (DHI), both projected onto the horizontal plane.
    *   *Formula:* GHI = DNI \* cos($\theta_z$) + DHI
        where $\theta_z$ is the zenith angle (angle between the sun's rays and the vertical).
*   **Direct Normal Irradiance (DNI):** The solar irradiance received directly from the sun's disc, measured perpendicular to the sun's rays. This is crucial for concentrating solar power (CSP) technologies.
*   **Diffuse Horizontal Irradiance (DHI):** The solar irradiance received from the sky after being scattered by atmospheric constituents (clouds, aerosols, molecules). It is measured on a horizontal surface.

---

### 3. Solar Radiation Measuring Instruments

#### 3.1. Pyranometers

*   **Purpose:** Measure Global Horizontal Irradiance (GHI).
*   **Working Principle:**
    *   Typically based on the **thermopile effect**. A thermopile detector (made of junctions of dissimilar metals) absorbs solar radiation, which causes a temperature difference between the detector junction and a reference junction.
    *   This temperature difference generates a small voltage proportional to the absorbed radiation.
    *   The detector is usually covered with a glass dome (like a black bulb) that absorbs most of the solar spectrum and transmits UV and IR. The dome is designed to be transparent to the wavelengths of interest and minimize convective heat loss.
    *   **Spectrally flat response** is crucial for accurate GHI measurement across the solar spectrum.
*   **Types:**
    *   **First-class pyranometers (e.g., Eppley PSP, Kipp & Zonen CM21/CM22):** High accuracy, stable, often used for reference standards and long-term monitoring. Have a ventilated casing to reduce temperature effects.
    *   **Second-class pyranometers:** Lower accuracy, more affordable, suitable for general meteorological applications.
    *   **Third-class pyranometers:** Basic accuracy, often used for educational purposes or non-critical applications.
*   **Calibration:** Must be calibrated against a reference standard (e.g., absolute cavity radiometer) periodically.
*   **Placement:** Mounted horizontally to measure GHI.
*   **Reference:**
    *   *Sukhatme, S. P.* (Chapter 3, "Solar Radiation") discusses pyranometers and their operating principles in detail.
    *   *Goswami, Kreith, & Kreider* (Chapter 2, "Solar Radiation") also provides a comprehensive overview.

#### 3.2. Pyrheliometers

*   **Purpose:** Measure Direct Normal Irradiance (DNI).
*   **Working Principle:**
    *   Similar to pyranometers but designed to measure only the direct beam radiation from the sun.
    *   They have a collimating tube or shadow ring that prevents diffuse and reflected radiation from reaching the detector.
    *   Requires a **solar tracker** to continuously point the instrument directly at the sun.
*   **Types:**
    *   **Active Tracking Pyrheliometers:** Use a motorized tracking system (e.g., two-axis tracker) to follow the sun.
    *   **Movable Shadow-Band Pyrheliometers:** Use a shadow band that moves across the sky to block diffuse radiation, allowing only direct radiation to hit the sensor.
*   **Calibration:** Requires calibration against a reference pyrheliometer.
*   **Placement:** Mounted on a sun-tracking device.
*   **Reference:**
    *   *Tiwari, G. N.* (Chapter 2, "Solar Radiation") details pyrheliometers and their importance for CSP.
    *   *Solanki, C. S.* (Chapter 2, "Solar Radiation Measurement") covers various instruments including pyrheliometers.

#### 3.3. Shadow Rings (or Bands)

*   **Purpose:** Used in conjunction with a pyranometer to measure Diffuse Horizontal Irradiance (DHI).
*   **Working Principle:**
    *   A shadow ring is positioned around a pyranometer such that it shades the pyranometer from direct solar beam radiation throughout the day, while allowing diffuse radiation to reach it.
    *   The pyranometer then measures DHI.
    *   *Alternatively*, a pyranometer can measure GHI, and another pyranometer (with a shadow band) can measure DHI. DNI can then be calculated using the GHI formula if the sun's position is known.
*   **Calibration:** The geometry of the shadow ring and its placement are critical for accurate DHI measurement.
*   **Reference:**
    *   *Sukhatme, S. P.* (Chapter 3) discusses the measurement of diffuse radiation using shadow rings.

---

### 4. Other Important Meteorological Parameters and Instruments

Accurate solar system design and performance monitoring also require measuring other environmental parameters:

#### 4.1. Ambient Temperature Sensors

*   **Purpose:** Measure the temperature of the surrounding air. Crucial for PV panel efficiency (PV panels degrade in performance at higher temperatures) and thermal collector performance.
*   **Types:**
    *   **Thermocouples:** Generate a voltage proportional to temperature difference.
    *   **RTDs (Resistance Temperature Detectors):** Resistance changes predictably with temperature.
    *   **Thermistors:** Semiconductor devices with a highly sensitive resistance-temperature relationship.
*   **Important Considerations:**
    *   **Shielding:** Sensors should be shielded from direct solar radiation to measure true ambient air temperature. Stevenson screens are commonly used.
    *   **Placement:** Located at standard meteorological heights (e.g., 2 meters above ground).
*   **Reference:**
    *   *Messenger, R. A., & Ventre, J.* (Chapter 4, "Environmental Conditions") discusses the impact of temperature on PV systems and the need for accurate measurement.

#### 4.2. Wind Speed and Direction Sensors (Anemometers and Wind Vanes)

*   **Purpose:**
    *   **Wind Speed:** Affects convective heat loss from collectors (influencing thermal efficiency) and can impact the structural integrity of solar arrays. Also crucial for wind energy assessment.
    *   **Wind Direction:** Important for understanding airflow patterns and potential shading.
*   **Types:**
    *   **Anemometers:**
        *   **Cup Anemometers:** Common, with rotating cups driven by wind.
        *   **Vane Anemometers:** Propeller-like rotors.
        *   **Sonic Anemometers:** Measure wind speed by timing the travel of sound pulses.
    *   **Wind Vanes:** Indicate wind direction by aligning with the wind flow.
*   **Placement:** Typically at a height of 10 meters for standard meteorological measurements, or at the height of the solar array for system-specific wind loading analysis.
*   **Reference:**
    *   *Boyle, G.* (Chapter 3, "Wind Energy") discusses wind measurement principles, applicable to understanding wind's impact on solar installations.

#### 4.3. Humidity Sensors (Hygrometers)

*   **Purpose:** Measure the amount of water vapor in the air. Affects atmospheric absorption and scattering of solar radiation, and can impact condensation on PV modules.
*   **Types:**
    *   **Capacitive Hygrometers:** Measure the change in capacitance of a dielectric material as it absorbs moisture.
    *   **Resistive Hygrometers:** Measure the change in resistance of a material as it absorbs moisture.
    *   **Psychrometers:** Use a wet-bulb and dry-bulb thermometer.
*   **Reference:**
    *   *Tiwari, G. N.* (Chapter 2) often discusses the role of atmospheric parameters in solar radiation models.

#### 4.4. Sunshine Recorders

*   **Purpose:** Provide a qualitative measure of sunshine duration.
*   **Working Principle:**
    *   **Campbell-Stokes Sunshine Recorder:** Uses a glass sphere to focus sunlight onto a paper card, burning a trace as the sun moves across the sky. The length of the trace indicates sunshine duration.
*   **Limitations:**
    *   Does not provide irradiance values, only duration.
    *   Accuracy can be affected by cloud cover and instrument calibration.
*   **Reference:**
    *   *Sukhatme, S. P.* (Chapter 3) briefly mentions sunshine recorders.

---

### 5. Calibration and Accuracy

*   **Importance:** Inaccurate measurements lead to incorrect system design, underperformance, and economic losses.
*   **Calibration:**
    *   Instruments must be calibrated periodically against **traceable primary or secondary standards**.
    *   **Absolute Cavity Radiometers (ACRs)** are often used as primary standards for pyrheliometers and pyranometers.
    *   Calibration is typically done by national metrology institutes or accredited laboratories.
    *   The calibration factor (e.g., W/m²/mV) relates the instrument's output (voltage) to the measured quantity (irradiance).
*   **Accuracy Classes:** Instruments are classified into different accuracy classes (e.g., Class A, Class B) based on their performance specifications.
*   **Key Considerations for Accurate Measurements:**
    *   **Proper Installation:** Horizontal orientation for pyranometers, tracking for pyrheliometers.
    *   **Cleanliness:** Keep sensor surfaces (glass domes) clean from dust, dirt, and bird droppings.
    *   **Ventilation:** For some instruments, proper ventilation is crucial to minimize temperature errors.
    *   **Data Acquisition System:** Ensure the data logger is also calibrated and has sufficient resolution.
*   **Reference:**
    *   *Messenger, R. A., & Ventre, J.* (Chapter 4) emphasizes the need for accurate sensor calibration and maintenance for PV systems.
    *   *Luque, A., & Hegedus, S.* (Chapter 1, "Fundamentals of Photovoltaics") might touch upon the importance of accurate spectral irradiance measurements for PV device characterization.

---

### 6. Data Acquisition and Processing

*   **Data Loggers:** Devices used to collect and store data from various sensors at regular intervals.
*   **Sampling Rate:** The frequency at which measurements are taken (e.g., every minute, every 10 minutes).
*   **Data Quality Control:** Checking for erroneous readings, gaps in data, and inconsistencies.
*   **Irradiance to Energy Conversion:**
    *   The measured irradiance (W/m²) can be integrated over time to estimate the total solar energy received (Wh/m² or kWh/m²).
    *   *Example:* If GHI is 800 W/m² for 1 hour, the energy received is approximately $800 \, \text{W/m}^2 \times 1 \, \text{h} = 800 \, \text{Wh/m}^2 = 0.8 \, \text{kWh/m}^2$.
*   **Reference:**
    *   *Boxwell, M.* (Chapters on System Design and Performance) would implicitly cover the use of collected data for system sizing and operation.

---

### 7. Applications in Solar Energy Systems

*   **PV Systems (CO3, CO4):**
    *   GHI and DNI are used to estimate the energy yield of PV panels.
    *   Temperature measurements are critical for calculating PV system output, as panel efficiency decreases with increasing temperature.
    *   Economic feasibility (CO4) calculations rely heavily on accurate energy yield predictions derived from irradiance data.
*   **Solar Thermal Systems (CO2, CO3):**
    *   GHI is used to calculate the energy absorbed by flat-plate collectors.
    *   DNI is essential for sizing and performance analysis of concentrating solar collectors (e.g., parabolic troughs, solar towers).
    *   Ambient temperature and wind speed affect heat losses from collectors, influencing their thermal efficiency.

---

### Important Points to Remember:

*   **GHI** measures total radiation on a horizontal plane.
*   **DNI** measures direct beam radiation and is critical for CSP.
*   **DHI** measures diffuse radiation from the sky.
*   **Pyranometers** measure GHI.
*   **Pyrheliometers** measure DNI and require sun tracking.
*   **Shadow rings** are used with pyranometers to measure DHI.
*   **Accurate calibration** of instruments is paramount for reliable data.
*   **Environmental parameters** like temperature, wind speed, and humidity also significantly impact solar system performance.
*   Measured solar radiation data directly influences system design, performance evaluation, and economic feasibility assessments.

---

### Practice Questions:

1.  **Define and differentiate between Global Horizontal Irradiance (GHI), Direct Normal Irradiance (DNI), and Diffuse Horizontal Irradiance (DHI).**
    *   **Answer:** GHI is the total solar radiation on a horizontal surface, including direct and diffuse components. DNI is the direct solar radiation from the sun's disc, measured perpendicular to the sun's rays. DHI is the solar radiation scattered by the atmosphere, measured on a horizontal surface.

2.  **Which instrument is used to measure Direct Normal Irradiance (DNI), and what is a key requirement for its operation?**
    *   **Answer:** A pyrheliometer is used to measure DNI. A key requirement is a solar tracker to continuously point it at the sun.

3.  **A pyranometer is found to be consistently reading lower than expected. What are two possible reasons for this inaccurate reading, assuming it was initially calibrated correctly?**
    *   **Answer:**
        *   The sensor surface (glass dome) is dirty or obscured by debris, reducing the amount of radiation reaching the detector.
        *   The instrument is not perfectly horizontal, leading to an incorrect measurement of GHI.

4.  **Explain why measuring ambient temperature is important for designing and operating a photovoltaic (PV) system.** (Relates to CO3)
    *   **Answer:** PV panel efficiency decreases as their temperature increases. Accurate ambient temperature measurements help in predicting the actual power output of the PV system under varying weather conditions, which is crucial for system sizing and performance calculations.

5.  **If a solar thermal system uses parabolic dish collectors, which type of solar irradiance measurement would be most critical for its performance analysis? Justify your answer.** (Relates to CO2, CO3)
    *   **Answer:** Direct Normal Irradiance (DNI) would be most critical. Parabolic dish collectors concentrate the direct sunlight onto a focal point to generate heat. Therefore, the intensity and availability of direct sunlight are the primary drivers of their energy output.

6.  **What is the role of calibration in ensuring the reliability of solar energy measuring instruments?**
    *   **Answer:** Calibration ensures that the instrument's output is accurately correlated to the physical quantity being measured (e.g., irradiance). It links the instrument's readings to established standards, ensuring accuracy, comparability, and traceability of the measurements. Without calibration, the collected data would be unreliable for system design, performance monitoring, and economic analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
