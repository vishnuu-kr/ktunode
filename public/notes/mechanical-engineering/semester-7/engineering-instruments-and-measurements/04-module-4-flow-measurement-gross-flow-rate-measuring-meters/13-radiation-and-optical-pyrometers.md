---
title: "radiation and optical pyrometers"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464332"
status: "completed"
scrapedAt: "2026-05-20T18:12:00.074Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 4: Flow Measurement: Gross Flow Rate Measuring Meters

### Topic: Radiation and Optical Pyrometers

---

### **1. Introduction to Pyrometers and Temperature Measurement**

*   **What is a Pyrometer?**
    *   A pyrometer is a non-contact device used to measure temperature. They are essential for measuring the temperature of objects that are too hot to be measured by contact thermometers (like thermocouples or RTDs) or are in motion, corrosive environments, or difficult to access.
    *   This topic focuses on pyrometers as they are used to infer flow rate indirectly by measuring the temperature of the fluid.
    *   **Knowledge Level (K4):** Understanding the fundamental principles of temperature measurement using pyrometers is crucial for Course Outcome 4 (CO4).

*   **Why Non-Contact Measurement?**
    *   **High Temperatures:** For temperatures exceeding the practical limits of contact sensors.
    *   **Moving Objects:** To measure the temperature of objects in motion without affecting their movement or temperature.
    *   **Corrosive or Reactive Environments:** To avoid contamination or damage to the sensor.
    *   **Difficult Access:** For targets that are remote or difficult to physically reach.
    *   **No Heat Loss:** Prevents heat transfer from the object to the sensor, ensuring a more accurate reading of the object's true temperature.

*   **Key Principle:** Pyrometers work based on the principle that all objects above absolute zero temperature emit thermal radiation. The intensity and spectral distribution of this radiation are dependent on the object's temperature.

---

### **2. Radiation Pyrometers**

Radiation pyrometers measure temperature by detecting the intensity of thermal radiation emitted by a hot object.

*   **Underlying Physics:**
    *   **Planck's Law of Blackbody Radiation:** Describes the spectral radiance of electromagnetic radiation at a given temperature as a function of wavelength. While real objects are not perfect blackbodies, they approximate blackbody behavior to varying degrees.
    *   **Stefan-Boltzmann Law:** States that the total energy radiated per unit surface area of a black body across all wavelengths is proportional to the fourth power of its absolute temperature ($E_b = \sigma T^4$, where $\sigma$ is the Stefan-Boltzmann constant). For real objects, this is modified by emissivity ($\epsilon$): $E = \epsilon \sigma T^4$.
    *   **Wien's Displacement Law:** States that the wavelength at which the spectral radiance is maximum is inversely proportional to the absolute temperature ($\lambda_{max} T = b$, where $b$ is Wien's displacement constant).

*   **Types of Radiation Pyrometers:**

    *   **Broadband Radiation Pyrometers (Total Radiation Pyrometers):**
        *   **Principle:** Measure the total radiation emitted by the object over a wide range of wavelengths.
        *   **Construction:** Typically consist of a lens or mirror system to focus the radiation onto a detector. The detector is usually a thermopile or a bolometer.
        *   **Thermopile Detector:** A series of thermocouples connected in series. The incident radiation heats one junction, creating a temperature difference that generates a voltage proportional to the temperature.
        *   **Bolometer Detector:** A resistive element whose resistance changes significantly with temperature.
        *   **Calibration:** Calibrated against a blackbody source.
        *   **Limitations:** Can be affected by ambient temperature variations and the presence of intervening materials (dust, steam, smoke) that absorb or scatter radiation. Emissivity of the target is crucial.
        *   **Example:** Used for measuring the temperature of molten metal in furnaces, glass surfaces, or hot gases.

    *   **Narrowband Radiation Pyrometers (Spectral Radiation Pyrometers):**
        *   **Principle:** Measure the radiation intensity at a specific wavelength or within a narrow wavelength band.
        *   **Construction:** Incorporate optical filters to select the desired wavelength. The detector is often a photovoltaic cell (like a silicon or InGaAs photodiode) or a photo-resistor.
        *   **Advantages:** Less susceptible to errors from ambient temperature changes and spectral emissivity variations compared to broadband pyrometers. They are more sensitive to temperature variations.
        *   **Example:** Silicon detectors are commonly used for temperatures from ~300°C to ~1500°C (visible light range), while InGaAs detectors are used for higher temperatures.
        *   **Correction for Emissivity:** For both types, the measured radiation is related to temperature through the object's emissivity. The relationship can be expressed as:
            $M_{measured} = \epsilon \cdot M_{blackbody}(T)$
            Where $M$ is the measured or blackbody radiation.

*   **Emissivity ($\epsilon$):**
    *   **Definition:** A measure of how effectively a surface emits thermal radiation compared to a perfect blackbody at the same temperature. It ranges from 0 to 1.
    *   **Importance:** Crucial for accurate temperature readings with radiation pyrometers. If the emissivity of the object is not known or is incorrectly assumed, significant errors will occur.
    *   **Factors Affecting Emissivity:** Surface material, surface roughness, surface condition (oxide layers, dirt), and wavelength of measurement.
    *   **Correction Techniques:**
        *   **Known Emissivity:** If the emissivity of the material is known, it can be programmed into the pyrometer.
        *   **Two-Color Pyrometers:** These are a type of narrowband pyrometer that measure the ratio of radiation intensities at two different wavelengths. This ratio is largely independent of emissivity, making them very useful for measuring temperatures of surfaces with unknown or varying emissivity.
            *   **Princ:** $T \propto \frac{1}{\ln(\frac{I_1}{I_2} \cdot (\frac{\lambda_2}{\lambda_1})^\beta)}$ where $\beta$ is a constant related to the spectral emissivity. By measuring the intensity ratio, the temperature can be determined without knowing $\epsilon$.
            *   **Advantages:** Good for measuring temperatures of materials like molten metals, flames, and plasmas where emissivity is often unknown or changes rapidly.

*   **Applications in Flow Measurement:**
    *   **Hot Gas Flow:** Measuring the temperature of hot gases in industrial processes (e.g., exhaust gases from turbines, furnaces, boilers). The flow rate can then be estimated using gas laws and energy balance principles.
    *   **Molten Metal Flow:** Measuring the temperature of molten metal flowing through pipes or channels. This is critical in foundries and metal processing.
    *   **Steam Flow:** While less direct, the temperature of steam can be measured, and along with pressure, the flow rate can be determined using steam tables.

*   **Key Concepts Recap:** Planck's Law, Stefan-Boltzmann Law, Wien's Displacement Law, Emissivity, Thermopile, Bolometer, Photovoltaic Cell, Two-Color Pyrometer.

*   **Textbook References:**
    *   **Dobelin (1990):** Likely discusses the fundamental physics of thermal radiation and the principles behind non-contact temperature measurement.
    *   **Sawhney & Sawhney (2009):** Will provide practical aspects of construction, operation, and applications of various pyrometers, potentially including schematic diagrams.
    *   **Nakra & Chaudhry (2009):** Offers a detailed treatment of radiation pyrometers, including calibration procedures and error analysis.

---

### **3. Optical Pyrometers**

Optical pyrometers are a specific type of radiation pyrometer that relies on the human eye to compare the brightness of the target with a calibrated light source.

*   **Princ of Operation:**
    *   The operator looks through an eyepiece at the hot object and a calibrated filament.
    *   The filament's brightness is adjusted by varying its current until it matches the brightness of the target object.
    *   At this point, the filament is at the same apparent temperature as the object's radiating surface.
    *   The temperature is then read from a calibration scale linked to the filament current.

*   **Types of Optical Pyrometers:**

    *   **Disappearing Filament Pyrometer:**
        *   **Construction:** Consists of a telescope with an objective lens, an eyepiece, a filament (usually tungsten) placed in the focal plane of the objective, a variable resistor to control filament current, and a battery or power supply.
        *   **Operation:** The observer adjusts the filament current until the filament "disappears" against the background of the hot object, meaning their brightness is matched.
        *   **Wavelength Dependence:** The comparison is usually made at a specific wavelength determined by a colored filter in the eyepiece, making it a narrowband instrument.
        *   **Calibration:** The pyrometer is calibrated by measuring the filament current against known temperatures of blackbody sources.
        *   **Limitations:**
            *   **Subjective:** Relies on the judgment of the human eye, which can vary between observers and be affected by lighting conditions.
            *   **Limited Range:** Typically used for temperatures above ~700°C, as objects below this temperature are not bright enough for visual comparison.
            *   **Emissivity:** Requires knowledge of the object's emissivity for accurate readings.
        *   **Example:** Used for measuring the temperature of incandescent lamps, hot metals in forging, and glass manufacturing.

    *   **Two-Color Optical Pyrometers:**
        *   These are more advanced optical pyrometers that use filters to compare the intensity of radiation at two different wavelengths.
        *   Similar to the two-color radiation pyrometers, they are less sensitive to emissivity variations.
        *   Often employ electronic detectors rather than the human eye for comparison.

*   **Applications in Flow Measurement:**
    *   While less common for direct flow measurement, optical pyrometers could be used to measure the temperature of highly incandescent fluids or components within a flow stream. For instance, measuring the temperature of flame fronts within a combustion process.

*   **Key Concepts Recap:** Visual comparison, filament brightness, subjective judgment, emissivity correction, disappearing filament.

*   **Textbook References:**
    *   **Sawhney & Sawhney (2009):** Likely provides detailed descriptions and diagrams of disappearing filament pyrometers.
    *   **Nakra & Chaudhry (2009):** May discuss the optical principles and calibration methods for these instruments.
    *   **Rajput (2006):** Could offer insights into the practical operation and limitations of optical pyrometers.

---

### **4. Pyrometers in Flow Measurement Context**

*   **Indirect Flow Measurement:** Pyrometers primarily measure temperature. To infer flow rate, additional parameters and principles are needed.

*   **Methods:**
    *   **Energy Balance:** For a hot fluid flowing through a pipe, if its temperature ($T_{in}$) at the inlet and outlet ($T_{out}$) are known, along with the specific heat capacity ($c_p$) and density ($\rho$), the mass flow rate ($\dot{m}$) can be determined if heat loss to the surroundings is accounted for or negligible.
        *   Heat flow rate ($Q$) = $\dot{m} \cdot c_p \cdot (T_{in} - T_{out})$
        *   If heat transfer ($Q_{loss}$) to the environment is known, then the flow rate can be derived.
    *   **Correlation with Flow Rate:** In some specific processes, there might be an empirical correlation between the temperature of a fluid or a component within the flow and the flow rate itself. For example, the temperature of a gas turbine blade might indirectly correlate with the mass flow rate of the fuel.
    *   **Measuring Temperature of Flowing Particles:** For gas-solid flows, the temperature of the particles can be measured using pyrometers, which can then be used in conjunction with other measurements to infer flow characteristics.

*   **Example Scenario:**
    Consider a molten metal flowing in a channel. A radiation pyrometer measures the temperature of the metal surface. If the emissivity of the molten metal is known, a reliable temperature reading can be obtained. By monitoring this temperature and applying principles of fluid dynamics and heat transfer, one might deduce information about the flow rate or consistency of the flow.

*   **Important Considerations for Flow Measurement:**
    *   **Accuracy of Emissivity:** This is the biggest challenge. Any error in emissivity directly translates to a significant error in temperature.
    *   **Atmospheric Attenuation:** Dust, smoke, steam, or other particles in the flow path can absorb or scatter radiation, affecting the measurement. Narrowband or two-color pyrometers are generally more robust against these effects.
    *   **Field of View:** The pyrometer's field of view must be entirely filled by the target object to ensure an accurate reading.
    *   **Target Properties:** The surface properties of the flowing medium (e.g., transparency, reflectivity) can influence the measurement.

---

### **5. Selection of Pyrometers (CO5: K3)**

When selecting a pyrometer for a flow measurement application:

*   **Temperature Range:** The required temperature range of the flowing fluid.
*   **Accuracy Requirements:** The precision needed for the temperature measurement.
*   **Emissivity of the Target:** Whether the emissivity is known, constant, or variable. Two-color pyrometers are preferred for unknown or variable emissivity.
*   **Environmental Conditions:** Presence of dust, steam, smoke, ambient temperature variations, and potential interference from other radiation sources.
*   **Response Time:** How quickly the pyrometer needs to react to changes in temperature.
*   **Cost and Maintenance:** Practical considerations for implementation.
*   **Non-Contact Requirement:** Essential for this topic.

---

### **6. Practice Questions and Answers**

**Question 1:** What is the primary advantage of using a radiation pyrometer over a thermocouple for measuring the temperature of molten metal?
**Answer:** The primary advantage is that radiation pyrometers are non-contact devices. This avoids contamination of the molten metal and potential damage to the sensor when immersed in a high-temperature, corrosive environment. It also allows measurement of moving molten metal without physical contact. (Relates to CO1: K2, CO4: K4)

**Question 2:** Explain the concept of emissivity and its importance in radiation pyrometry.
**Answer:** Emissivity ($\epsilon$) is a dimensionless quantity that describes how efficiently a surface emits thermal radiation compared to a perfect blackbody at the same temperature. It ranges from 0 (perfect reflector, no emission) to 1 (perfect emitter, blackbody). For radiation pyrometers, the measured radiation is directly proportional to emissivity. Therefore, an inaccurate emissivity value will lead to a significant error in the calculated temperature. (Relates to CO1: K2, CO4: K4)

**Question 3:** A disappearing filament optical pyrometer is used to measure the temperature of a hot surface. What condition must be met for an accurate measurement, and why?
**Answer:** For an accurate measurement, the filament's brightness must be matched to the brightness of the hot surface. This matching is typically done at a specific wavelength band. The operator must ensure that the filament "disappears" completely against the background, indicating that their spectral radiance is identical. Furthermore, the emissivity of the surface must be known or accounted for to convert the observed brightness temperature into the true temperature. (Relates to CO1: K2, CO4: K4)

**Question 4:** How can a two-color pyrometer overcome the problem of unknown emissivity in temperature measurements?
**Answer:** A two-color pyrometer measures the ratio of radiation intensity at two different wavelengths. The relationship between temperature and this ratio is largely independent of the emissivity of the object, provided that the emissivity at both wavelengths is the same (which is often a reasonable assumption for many materials, especially at higher temperatures, and for grey bodies). By utilizing this ratio, the instrument can determine the true temperature without needing to know the specific emissivity value. (Relates to CO1: K2, CO4: K4)

**Question 5:** While pyrometers measure temperature, how might they be indirectly used in flow measurement?
**Answer:** Pyrometers can be indirectly used in flow measurement by:
1.  **Energy Balance:** Measuring the inlet and outlet temperatures of a hot fluid. With known specific heat and mass flow rate, or vice-versa, the flow rate can be calculated if heat loss is accounted for.
2.  **Empirical Correlations:** Establishing a relationship between the temperature of a component in the flow (e.g., a turbine blade, a reactor wall) and the mass flow rate of the process fluid.
3.  **Monitoring Process Conditions:** In processes where flow rate directly influences fluid temperature (e.g., cooling systems), temperature monitoring can be an indicator of flow rate.
(Relates to CO4: K4)

---

### **7. Important Points to Remember**

*   **Non-Contact Measurement:** The defining characteristic of pyrometers, crucial for high temperatures and difficult environments.
*   **Emissivity is Key:** Accurate knowledge or compensation for emissivity is paramount for accurate temperature readings.
*   **Radiation Pyrometers:** Measure total or spectral radiation. Thermopiles, bolometers, photodiodes are common detectors.
*   **Optical Pyrometers:** Rely on visual brightness comparison, subjective but historically significant.
*   **Two-Color Pyrometers:** Offer robustness against emissivity variations and atmospheric attenuation by using ratios of intensities at different wavelengths.
*   **Indirect Use in Flow:** Pyrometers measure temperature, which can then be correlated with flow rate through energy balance or empirical relationships.
*   **Field of View:** Must be filled by the target for accurate readings.
*   **Atmospheric Attenuation:** Dust, smoke, etc., can interfere with measurements, especially for broadband pyrometers.

---

This comprehensive study material covers the principles, types, applications, and selection criteria for radiation and optical pyrometers, directly addressing the learning outcomes and course outcomes related to temperature measurement within the context of flow measurement.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
