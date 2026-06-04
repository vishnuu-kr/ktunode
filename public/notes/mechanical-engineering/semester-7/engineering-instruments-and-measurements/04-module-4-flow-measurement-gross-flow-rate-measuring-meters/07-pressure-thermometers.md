---
title: "pressure thermometers"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446432c"
status: "completed"
scrapedAt: "2026-05-20T18:11:55.889Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 4: Flow Measurement: Gross Flow Rate Measuring Meters

### Topic: Pressure Thermometers

---

### 1. Introduction to Pressure Thermometers

Pressure thermometers, also known as **filled system thermometers**, are widely used for measuring temperature, particularly in industrial applications where direct reading or remote indication is required. They operate on the principle of **thermal expansion** of a fluid (liquid, gas, or vapor) contained within a closed system.

**Key Concepts:**

*   **Principle of Operation:** The temperature change at the sensing bulb causes the volume of the filled fluid to change. This change in volume results in a pressure change within the enclosed system. This pressure change is then transmitted to an indicating or recording mechanism, typically a Bourdon tube, which moves a pointer to indicate the temperature.
*   **Components:**
    *   **Sensing Bulb (Thermobulb):** This is the part of the thermometer that is immersed in the medium whose temperature is to be measured. It contains the filling fluid.
    *   **Capillary Tube:** A thin, flexible tube that connects the sensing bulb to the indicating instrument. It transmits the pressure change.
    *   **Indicating Instrument:** Usually a Bourdon tube gauge connected to the capillary tube. The pressure change causes the Bourdon tube to deflect, moving a pointer across a calibrated scale.
    *   **Filling Fluid:** The substance that fills the entire system (bulb, capillary, and part of the instrument).

**Relevance to Course Outcomes:**

*   **CO3 (K5):** Understanding the fundamental principles behind pressure thermometers directly contributes to examining devices for accurate pressure measurement, as the thermometer's operation relies on pressure changes.
*   **CO4 (K4):** This topic is directly aligned with the ability to measure temperature, a critical aspect of flow measurement and process control.
*   **CO5 (K3):** Knowledge of pressure thermometers aids in selecting appropriate temperature measurement systems for various engineering applications based on their characteristics and limitations.

---

### 2. Types of Pressure Thermometers

Pressure thermometers are primarily classified based on the type of filling fluid used, which influences their operating range and characteristics.

#### 2.1 Liquid-Filled Thermometers

*   **Filling Fluid:** Typically mercury, but organic liquids like alcohol, ether, or specialized hydrocarbons are also used.
*   **Principle:** The volume expansion of the liquid with temperature causes a pressure increase transmitted to the Bourdon tube.
*   **Operating Range:** Generally suitable for temperatures from -100°C to 600°C. Mercury is preferred for higher temperatures due to its high boiling point. Organic liquids are used for lower temperatures.
*   **Advantages:**
    *   Good linearity over a wide range.
    *   Relatively fast response time.
    *   High sensitivity.
*   **Disadvantages:**
    *   Freezing point of the filling fluid limits the lower operating temperature.
    *   Boiling point of the filling fluid limits the upper operating temperature.
    *   Mercury is toxic.
*   **Examples:** Common in laboratory thermometers, industrial process temperature monitoring where a moderate range is involved.

#### 2.2 Gas-Filled Thermometers

*   **Filling Fluid:** Inert gases like nitrogen, helium, or hydrogen.
*   **Principle:** The pressure of the gas, which is nearly constant volume, changes almost linearly with absolute temperature. The relationship is governed by **Gay-Lussac's Law**.
*   **Operating Range:** Suitable for temperatures from -270°C to about 750°C.
*   **Advantages:**
    *   Extremely wide operating range.
    *   Good linearity.
    *   Can be used at very low temperatures.
*   **Disadvantages:**
    *   Requires a large sensing bulb to achieve adequate sensitivity.
    *   The presence of gas in the capillary can lead to significant errors if there is a significant temperature gradient along the capillary.
    *   Requires compensation for ambient temperature variations along the capillary.
*   **Examples:** Used in applications requiring very wide temperature ranges or very low temperatures.

#### 2.3 Vapor-Pressure Thermometers (Self-Contained Thermometers)

*   **Filling Fluid:** A volatile liquid that is partially vaporized at the operating temperature. Examples include sulfur dioxide, propane, ethyl chloride, or pentane.
*   **Principle:** The temperature change at the sensing bulb causes a change in the vapor pressure of the volatile liquid. This vapor pressure is transmitted to the Bourdon tube.
*   **Operating Range:** Typically from -100°C to about 300°C, depending on the filling fluid.
*   **Advantages:**
    *   High sensitivity, especially at the lower end of the range.
    *   No significant error due to temperature changes along the capillary tube because the Bourdon tube is designed to be at the same temperature as the bulb, or the pressure is independent of the volume of the capillary. This makes them "self-contained."
    *   No need for ambient temperature compensation.
*   **Disadvantages:**
    *   The scale is non-linear and compressed at the upper end.
    *   The operating range is limited by the vapor pressure characteristics of the fluid.
    *   The sensing bulb must be adequately sized to contain both liquid and vapor.
*   **Examples:** Widely used in refrigeration systems, ovens, and other applications where high sensitivity and remote indication without capillary compensation are desired.

**Reference Integration:**

*   **Dobelin (4th, 1990):** Likely discusses the fundamental principles of thermal expansion and the basic types of thermometers.
*   **Sawhney & Sawhney (12th, 2009):** Expected to provide detailed coverage of different types, their construction, and operating principles.
*   **Nakra & Chaudhry (3rd, 2009):** Will offer insights into the instrumentation aspects, including the Bourdon tube mechanism and the characteristics of different filling fluids.

---

### 3. Construction and Working of Pressure Thermometers

#### 3.1 Sensing Bulb

*   **Material:** Typically made of copper, brass, stainless steel, or other corrosion-resistant materials, depending on the application.
*   **Design:** Can be straight, angled, or have special fittings for immersion in the process. The size and shape are designed to optimize heat transfer and accommodate the filling fluid.

#### 3.2 Capillary Tube

*   **Material:** Usually made of copper, stainless steel, or sometimes monel.
*   **Length:** Can vary from a few feet to over 100 feet, allowing for remote indication.
*   **Protection:** Often covered with a braided metal sheath or plastic insulation for protection against physical damage and temperature effects.

#### 3.3 Indicating Instrument (Bourdon Tube Gauge)

*   **Bourdon Tube:** A curved, flattened tube sealed at one end and connected to the capillary at the other. When pressure is applied internally, the tube tends to straighten.
*   **Linkage Mechanism:** A system of levers and gears amplifies the small movement of the Bourdon tube's free end to move a pointer across a calibrated dial.
*   **Compensation:**
    *   **Gas-filled thermometers** often require **ambient temperature compensation**. This is achieved by placing a second, shorter Bourdon tube with a similar filling, but exposed to ambient temperature, in the indicating instrument. The difference in expansion between the two tubes cancels out the effect of ambient temperature on the capillary.
    *   **Vapor-pressure thermometers** are generally **self-compensating** for capillary temperature errors if the instrument is at the same temperature as the bulb.

**Working Example (Liquid-Filled):**

1.  **Temperature Increase:** When the temperature of the medium surrounding the sensing bulb increases, the liquid filling the bulb expands.
2.  **Pressure Transmission:** This expansion increases the pressure inside the bulb and capillary tube.
3.  **Bourdon Tube Deflection:** The increased pressure acts on the inside of the Bourdon tube, causing it to straighten slightly.
4.  **Pointer Movement:** The free end of the Bourdon tube is connected to a linkage mechanism that translates this straightening motion into the rotation of a pointer on a calibrated scale, indicating the temperature.

---

### 4. Characteristics and Performance

#### 4.1 Rangeability

*   The specified temperature limits (minimum and maximum) for which the thermometer is designed. This is heavily dependent on the filling fluid.

#### 4.2 Sensitivity

*   The change in pressure output per unit change in temperature. Vapor-pressure thermometers generally exhibit higher sensitivity.

#### 4.3 Accuracy

*   The closeness of the measured temperature to the true temperature. It is influenced by calibration, ambient temperature effects, and instrument limitations. Accuracy specifications are typically given as a percentage of full-scale reading.

#### 4.4 Response Time

*   The time it takes for the thermometer to indicate a specific percentage (e.g., 90%) of the final temperature change after a sudden step change in the medium temperature. This depends on the bulb design, filling fluid, and heat transfer characteristics.

#### 4.5 Linearity

*   The degree to which the pressure output is proportional to the temperature input. Gas-filled and liquid-filled thermometers generally offer good linearity, while vapor-pressure thermometers are non-linear.

#### 4.6 Pressure Drop in Capillary

*   A potential source of error, especially in liquid-filled systems if there are significant temperature gradients along the capillary. This can cause a deviation from true pressure transmission.

---

### 5. Applications

Pressure thermometers are used in a wide variety of industrial and scientific applications, including:

*   **Process Industries:** Chemical plants, oil refineries, power generation for monitoring temperatures of pipelines, reactors, boilers, and other equipment.
*   **HVAC Systems:** Controlling heating and cooling systems.
*   **Ovens and Furnaces:** Monitoring and controlling baking and drying processes.
*   **Refrigeration and Freezing Equipment:** Ensuring proper operating temperatures.
*   **Laboratories:** For precise temperature measurements.
*   **Automotive:** In engine temperature monitoring systems.

---

### 6. Advantages and Disadvantages

#### 6.1 Advantages

*   **Remote Indication:** Capillary tubes allow the temperature to be indicated at a distance from the point of measurement.
*   **Robust Construction:** Generally durable and can withstand harsh industrial environments.
*   **No External Power Required:** They are self-powered instruments.
*   **High Sensitivity (Vapor-Pressure):** Particularly useful for low-temperature measurements or where small temperature changes need to be detected.
*   **Cost-Effective:** Often less expensive than other temperature measurement methods for certain applications.

#### 6.2 Disadvantages

*   **Limited Accuracy:** Generally less accurate than thermocouples or RTDs, especially for very high or very low temperatures.
*   **Ambient Temperature Effects:** Gas-filled thermometers can be significantly affected by ambient temperature variations along the capillary.
*   **Limited Response Speed:** Compared to thermocouples or thermistors, their response can be slower.
*   **Capillary Limitations:** Long capillaries can be susceptible to damage or kinking, and can introduce pressure drop errors.
*   **Bulb Size:** To achieve adequate sensitivity, gas-filled bulbs may need to be larger.

---

### 7. Important Points to Remember

*   **Filling Fluid is Key:** The choice of filling fluid dictates the temperature range and specific characteristics of the pressure thermometer.
*   **Bourdon Tube Principle:** The core of the indication mechanism is the Bourdon tube's response to pressure changes.
*   **Compensation for Gas-Filled:** Be aware of the need for ambient temperature compensation for gas-filled systems.
*   **Vapor-Pressure Non-linearity:** Understand that vapor-pressure thermometers have a non-linear scale.
*   **Self-Contained Feature:** Vapor-pressure thermometers are often described as "self-contained" due to their inherent capillary temperature compensation.
*   **Trade-offs:** Pressure thermometers offer a good balance of cost, robustness, and remote indication capability, but often at the expense of accuracy and response speed compared to electronic methods.

---

### 8. Practice Questions and Answers

**Question 1:**
What is the fundamental principle on which pressure thermometers operate?
(a) Resistive change
(b) Thermal expansion of a fluid
(c) Seebeck effect
(d) Piezoelectric effect

**Answer:** (b) Thermal expansion of a fluid

**Question 2:**
Which type of pressure thermometer is generally considered "self-contained" and does not require significant capillary temperature compensation?
(a) Liquid-filled thermometer
(b) Gas-filled thermometer
(c) Vapor-pressure thermometer
(d) All of the above

**Answer:** (c) Vapor-pressure thermometer

**Explanation:** In vapor-pressure thermometers, the pressure within the system is dependent on the temperature of the liquid/vapor interface. If the indicating instrument is designed to be at the same temperature as the sensing bulb, or if the volume of vapor in the capillary is negligible compared to the bulb's volume, the capillary temperature has minimal effect on the pressure reading.

**Question 3:**
List three common filling fluids used in pressure thermometers and specify their typical application ranges.

**Answer:**
*   **Mercury:** -38°C to 600°C (widely used for its linearity and high boiling point).
*   **Organic Liquids (e.g., alcohol, pentane):** -100°C to 150°C (used for lower temperature ranges due to lower freezing points).
*   **Inert Gases (e.g., Nitrogen, Helium):** -270°C to 750°C (suitable for extremely wide ranges).
*   **Volatile Liquids (e.g., Sulfur Dioxide, Propane):** -100°C to 300°C (used in vapor-pressure thermometers).

**Question 4:**
Explain why gas-filled thermometers often require ambient temperature compensation, and how this compensation is typically achieved.

**Answer:**
Gas-filled thermometers operate based on the pressure-temperature relationship of a gas at near-constant volume (Gay-Lussac's Law). If there is a temperature gradient along the capillary tube connecting the sensing bulb to the indicating instrument, the gas in the capillary will also experience temperature changes. This will affect its pressure, leading to an inaccurate reading at the instrument.

**Compensation:** This is typically achieved by using a **bi-metallic helix** or a **dual Bourdon tube mechanism** within the indicating instrument. One Bourdon tube is connected to the filled system (bulb and capillary), while a second, shorter Bourdon tube is filled with the same gas but is exposed to the ambient temperature. The expansion of the gas in the second tube counteracts the effect of ambient temperature changes on the gas in the capillary of the first tube, effectively cancelling out the error.

**Question 5:**
What are the main advantages of using a vapor-pressure thermometer over a liquid-filled thermometer for a low-temperature application?
(a) Better linearity and faster response
(b) Higher sensitivity and no capillary temperature error
(c) Wider operating range and lower cost
(d) More robust construction and simpler design

**Answer:** (b) Higher sensitivity and no capillary temperature error

**Explanation:** Vapor-pressure thermometers are known for their high sensitivity, especially at the lower end of their operating range, making them suitable for detecting small temperature changes. Their "self-contained" nature means that capillary temperature variations have minimal impact on the reading, which is a significant advantage in applications with long capillary runs or fluctuating ambient temperatures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References and Further Reading

*   **Measurement Systems (Applications and Design) by E.O. Dobelin:** Provides fundamental principles of measurement systems, including those related to thermal measurements.
*   **Mechanical Measurements and Instrumentation & Control by A.K. Sawhney & Puneet Sawhney:** Offers detailed explanations of various mechanical measuring instruments, including pressure thermometers.
*   **Instrumentation Measurement and Analysis by B.C. Nakra and K.K. Chaudhry:** Covers a broad range of instrumentation topics, likely including detailed discussions on temperature measurement devices.
*   **Engineering metrology and Measurements by N.V. Raghavendra:** Discusses metrology concepts and their application to various measurements, potentially including thermal measurements.
*   **A Text Book of Engineering Metrology by R.K. Jain:** Another valuable resource for understanding metrology principles and instruments.
*   **Industrial Instrumentation and Control by S. K. Singh:** Focuses on instruments used in industrial settings, where pressure thermometers are commonly found.

---