---
title: "Instruments for measuring solar radiation and sunshine"
subject: "RENEWABLE ENERGY ENGINEERING"
module: "Module 1: Commercial energy sources "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464075"
status: "completed"
scrapedAt: "2026-05-20T18:18:24.191Z"
---
# RENEWABLE ENERGY ENGINEERING

## Module 1: Commercial Energy Sources

### Topic: Instruments for Measuring Solar Radiation and Sunshine

---

### **1. Introduction to Solar Radiation and Sunshine Measurement**

Solar energy is a crucial commercial energy source. Accurate measurement of solar radiation and sunshine is fundamental for:

*   **Site assessment:** Determining the solar potential of a location for solar power plant installation.
*   **System design:** Sizing solar collectors, photovoltaic panels, and other solar energy systems.
*   **Performance monitoring:** Evaluating the efficiency and output of installed solar systems.
*   **Research and development:** Advancing solar energy technologies.
*   **Weather forecasting:** Understanding atmospheric conditions.

This module focuses on the instruments used to quantify these vital parameters.

---

### **2. Key Concepts and Definitions**

*   **Solar Radiation:** The electromagnetic radiation emitted by the Sun. It is typically measured in terms of **irradiance** (power per unit area) or **insolation** (energy per unit area).
    *   **Irradiance:** Measured in Watts per square meter ($W/m^2$).
    *   **Insolation:** Measured in Joules per square meter ($J/m^2$) or kilowatt-hours per square meter ($kWh/m^2$).

*   **Types of Solar Radiation:**
    *   **Direct Normal Irradiance (DNI):** Solar radiation received directly from the Sun in a beam, perpendicular to the surface of the receiver. Crucial for concentrating solar power (CSP) systems.
    *   **Global Horizontal Irradiance (GHI):** The total solar radiation received on a horizontal surface. It includes both direct and diffuse radiation. This is the most common measurement for general solar resource assessment.
        *   $GHI = DNI \times \cos(\theta_z) + Diffuse Horizontal Irradiance (DHI)$
        where $\theta_z$ is the zenith angle (angle between the sun and the vertical).
    *   **Diffuse Horizontal Irradiance (DHI):** Solar radiation scattered by the atmosphere (clouds, aerosols, etc.) that reaches a horizontal surface.
    *   **Global Tilted Irradiance (GTI):** Solar radiation received on a surface tilted at a specific angle, typically matching the tilt of solar panels.

*   **Sunshine:** Refers to the duration of time during which direct sunlight is received, often measured by the number of hours the sun is visible.

---

### **3. Instruments for Measuring Solar Radiation**

The primary instruments for measuring solar radiation are **pyranometers** and **pyrheliometers**.

#### **3.1. Pyranometers**

*   **Function:** Measure **global horizontal irradiance (GHI)**, which is the total solar radiation (direct + diffuse) incident on a horizontal surface.
*   **Working Principle:**
    *   Typically consists of a thermopile detector that absorbs solar radiation and converts it into heat.
    *   This heat generates a voltage difference proportional to the absorbed radiation.
    *   A black coating on the detector maximizes absorption.
    *   A double-glazed glass dome or a clear acrylic dome protects the detector from the elements while allowing solar radiation to pass through. The dome also reduces convection effects.
    *   A shading ring is sometimes used to block direct sunlight, allowing only diffuse radiation to be measured (creating a "shadow ring pyranometer" for DHI).
*   **Types of Pyranometers:**
    *   **Thermopile Pyranometers:** The most common type, based on the thermoelectric effect. They provide a continuous, integrated measurement.
        *   **Examples:** Eppley PSP, Kipp & Zonen CM series.
    *   **Photovoltaic Pyranometers:** Use a silicon solar cell as a sensor. They are generally less accurate and have a narrower spectral response compared to thermopile pyranometers but are often more cost-effective and have a faster response time.
*   **Key Features:**
    *   **Sensitivity:** Typically in the range of $5-15 \mu V/(W/m^2)$.
    *   **Response Time:** Usually a few seconds.
    *   **Spectral Range:** Designed to cover the solar spectrum (approximately 280-4000 nm).
    *   **Cosine Response:** The output should be proportional to the cosine of the angle of incidence of the radiation. Good cosine response is crucial for accurate GHI measurements.
*   **Application:** Essential for assessing solar resource for photovoltaic (PV) systems, solar thermal systems, and general meteorological studies.
*   **Reference:**
    *   **Twidell & Weir:** Discusses thermopile pyranometers and their working principles in detail, emphasizing the importance of cosine response and spectral characteristics. They often classify pyranometers based on their accuracy classes (e.g., Class A, B). (Chapter 4, "Solar Radiation")
    *   **Kothari, Singal, & Ranjan:** Provides an overview of pyranometers, mentioning their applications and basic working mechanisms. (Chapter 3, "Solar Energy Conversion Technologies")

#### **3.2. Pyrheliometers**

*   **Function:** Measure **direct normal irradiance (DNI)**, which is the solar radiation arriving directly from the Sun's disk.
*   **Working Principle:**
    *   Similar to pyranometers, they use a thermopile detector.
    *   However, they are designed to track the Sun's position and have a narrow field of view (typically a few degrees) to only capture direct beam radiation.
    *   This is achieved using a sun-tracking mechanism and a tube or aperture that defines the field of view.
*   **Key Features:**
    *   **Sun Tracking:** Requires a dual-axis solar tracker to keep the sensor pointed directly at the Sun.
    *   **Field of View:** Narrow, typically 2.5° to 5°.
    *   **Sensitivity:** Similar to pyranometers.
*   **Application:** Crucial for the design and performance evaluation of concentrating solar power (CSP) systems, which rely on direct sunlight to focus energy.
*   **Reference:**
    *   **Twidell & Weir:** Dedicates a section to pyrheliometers, explaining their necessity for CSP applications and the role of sun trackers. (Chapter 4, "Solar Radiation")
    *   **Kothari, Singal, & Ranjan:** Briefly mentions pyrheliometers and their importance for concentrating solar collectors. (Chapter 3, "Solar Energy Conversion Technologies")

#### **3.3. Other Radiation Measuring Instruments**

*   **Silicon Photodiode Sensors:** Used in some low-cost sensors and light meters. They provide an output proportional to irradiance but have a narrower spectral range and can be sensitive to temperature. Less accurate for scientific measurements.
*   **UV Radiometers:** Specifically designed to measure ultraviolet (UV) radiation.
*   **Infrared (IR) Radiometers:** Measure infrared radiation.

---

### **4. Instruments for Measuring Sunshine Duration**

Sunshine duration refers to the amount of time direct sunlight is received. The primary instrument is the **Sunshine Recorder**.

#### **4.1. Sunshine Recorders (Campbell-Stokes Sunshine Recorder)**

*   **Function:** Measures the duration of bright sunshine.
*   **Working Principle:**
    *   A glass sphere acts as a lens, focusing the Sun's rays onto a specially grooved paper card placed in a metal frame.
    *   When the Sun is shining brightly, the focused beam burns a trace on the card.
    *   As the Sun moves across the sky, the traced line moves along the grooves of the card.
    *   The length of the burnt trace on the card indicates the duration of bright sunshine.
*   **Types of Cards:** Daily cards (long), half-day cards (short).
*   **Limitations:**
    *   Requires bright sunshine; does not measure periods of hazy or broken cloud cover where the sun is still visible but diffused.
    *   The accuracy depends on the correct positioning of the card and the quality of the glass sphere.
    *   It's a manual recording instrument requiring daily card replacement and analysis.
*   **Application:** Provides historical data on sunshine hours, useful for general site assessment and comparisons.
*   **Reference:**
    *   **Twidell & Weir:** Describes the Campbell-Stokes recorder in detail, including its operation and limitations. (Chapter 4, "Solar Radiation")
    *   **G.D. Rai:** Likely covers the Campbell-Stokes recorder as a fundamental instrument for sunshine measurement. (Chapter 2, "Solar Energy")

#### **4.2. Electronic Sunshine Sensors (Heliographs)**

*   **Function:** Measure sunshine duration electronically.
*   **Working Principle:**
    *   These sensors typically use photovoltaic cells.
    *   They detect the presence of direct sunlight based on a threshold irradiance level.
    *   When the irradiance exceeds a predefined value, the sensor registers a "sunshine hour."
*   **Advantages:**
    *   Automated recording and data logging.
    *   Can potentially detect the presence of the sun even in slightly hazy conditions where a Campbell-Stokes recorder might fail.
    *   Can be integrated into automated weather stations.
*   **Disadvantages:**
    *   The threshold setting can affect the accuracy and definition of "sunshine hour."
    *   May not perfectly correlate with the manual Campbell-Stokes definition.
*   **Application:** Increasingly used in modern meteorological and solar energy monitoring systems.

---

### **5. Integrating Measurements for Solar Energy Systems**

*   **Data Acquisition Systems (DAS):** Pyranometers and pyrheliometers are connected to data loggers or data acquisition systems that record the irradiance values at regular intervals (e.g., every minute, every 10 minutes).
*   **Weather Stations:** Comprehensive weather stations often include multiple solar sensors (pyranometers, pyrheliometers) along with other meteorological instruments (temperature, humidity, wind speed, etc.) to provide a complete picture of the solar resource and its environmental context.
*   **Importance of Data Quality:**
    *   **Calibration:** Instruments need regular calibration against reference standards to ensure accuracy.
    *   **Maintenance:** Cleaning sensor domes, checking wiring, and ensuring the proper functioning of trackers are crucial.
    *   **Data Validation:** Identifying and discarding erroneous data points (e.g., due to sensor malfunction or shading).

---

### **6. Alignment with Course Outcomes**

*   **CO1: Differentiate between commercial energy systems and alternatives (Knowledge Level: K2)**
    *   Understanding solar radiation measurement is key to assessing solar energy's viability as a commercial alternative to fossil fuels. This section provides the tools to quantify its resource availability.
*   **CO2: Obtain a detailed knowledge in solar energy implementation for collection, conversion and storage (Knowledge Level: K2)**
    *   Accurate measurements of DNI and GHI (using pyrheliometers and pyranometers respectively) are critical for designing and optimizing solar collectors (thermal and PV), concentrating solar power systems, and evaluating their energy output. Sunshine duration data also informs system sizing and operational strategies.
*   **CO3: Understand the possibilities of wind energy and small hydel power plants (Knowledge Level: K2)**
    *   While not directly about wind or hydro, this topic lays the groundwork for understanding the tools used in renewable energy assessment across different sources. The principles of measurement and data acquisition are transferable.
*   **CO4: Gain knowledge about tidal and wave energy, energy from biomass and hydrogen (Knowledge Level: K2)**
    *   Similar to CO3, the measurement principles are foundational to any energy resource assessment.
*   **CO5: Understand about the energy alternatives by hybrid system (Knowledge Level: K2)**
    *   Hybrid systems often combine solar with other sources. The precise measurement of solar resource is essential for balancing and integrating these different energy inputs effectively.

---

### **7. Important Points to Remember**

*   **Pyranometers measure GHI (total radiation on a horizontal surface).**
*   **Pyrheliometers measure DNI (direct radiation perpendicular to the sun).**
*   **DNI is critical for CSP systems.**
*   **GHI is critical for PV systems.**
*   **Sunshine recorders (Campbell-Stokes) measure bright sunshine duration.**
*   **Electronic sunshine sensors offer automated measurement.**
*   **Instrument calibration and maintenance are vital for data accuracy.**
*   **Understanding the spectral response and cosine response of pyranometers is important for their correct application.**

---

### **8. Practice Questions and Exercises**

**Question 1:**
A photovoltaic (PV) power plant is to be installed in a location. Which instrument would be most crucial for determining the total solar energy available for the PV panels on a horizontal surface?
(a) Pyrheliometer
(b) Campbell-Stokes Sunshine Recorder
(c) Pyranometer
(d) UV Radiometer

**Answer:** (c) Pyranometer. PV panels are typically mounted horizontally or at a tilt, and the total radiation incident on this surface (GHI) is what determines their energy output.

**Question 2:**
For a concentrating solar power (CSP) plant that uses mirrors to focus sunlight onto a receiver, what specific type of solar radiation measurement is most important?
(a) Diffuse Horizontal Irradiance (DHI)
(b) Global Horizontal Irradiance (GHI)
(c) Direct Normal Irradiance (DNI)
(d) Sunshine Duration

**Answer:** (c) Direct Normal Irradiance (DNI). CSP systems rely on the concentrated beam of sunlight from the sun's disk, which is measured by a pyrheliometer as DNI.

**Question 3:**
Explain the fundamental difference in the working principle between a pyranometer and a pyrheliometer.

**Answer:**
A pyranometer measures the total solar radiation (direct and diffuse) incident on a horizontal surface. It has a wide field of view and does not require sun tracking.
A pyrheliometer measures only the direct solar radiation from the sun's disk. It has a narrow field of view and requires a sun-tracking mechanism to continuously point towards the sun.

**Question 4:**
What is the primary limitation of a Campbell-Stokes Sunshine Recorder compared to an electronic sunshine sensor?

**Answer:** The Campbell-Stokes recorder requires bright sunshine to burn a trace on the card and thus cannot accurately record sunshine duration under hazy or partly cloudy conditions. Electronic sensors can often detect the presence of the sun even in these less intense conditions based on an irradiance threshold.

**Question 5:**
A solar energy engineer is analyzing historical weather data for a potential solar farm site. They find data for "insolation" on a horizontal surface. What instrument likely provided this data?

**Answer:** A pyranometer. Insolation is the integrated energy per unit area over a period, and the pyranometer measures irradiance ($W/m^2$) on a horizontal surface (GHI), which can be integrated over time to yield insolation ($kWh/m^2$ or $J/m^2$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **9. Further Reading and References**

*   **Twidell & Weir, "Renewable Energy Resources" (3rd Edn, 2015):** Chapter 4 provides comprehensive details on solar radiation, its measurement, and the instruments used.
*   **Kothari, Singal, & Ranjan, "Renewable Energy Sources and Emerging Technologies" (2nd Edn, 2014):** Chapter 3 discusses solar energy conversion technologies, including instruments.
*   **G.D. Rai, "Non-conventional Energy Sources" (2004):** Likely includes sections on solar radiation measurement and sunshine recorders.
*   **Tester, J. W., "Sustainable Energy: Choosing Among Options" (2006):** May offer context on the importance of accurate resource assessment for energy policy and implementation.
*   **Çengel, Y. A., Cimbala, J. M., & Kanoğlu, M., "Fundamentals and Applications of Renewable Energy" (2019):** Provides fundamental principles and applications, likely covering solar measurement in its solar energy chapters.

---
This concludes the study notes for "Instruments for Measuring Solar Radiation and Sunshine." Ensure you refer to the textbooks for deeper understanding and specific technical details.