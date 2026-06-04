---
title: "Thermistors"
subject: "SENSORS AND ACTUATORS"
module: "Module 3: Flow Sensors "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea81"
status: "completed"
scrapedAt: "2026-05-23T17:58:03.819Z"
---
# Sensors and Actuators: Module 3 - Flow Sensors

## Topic: Thermistors

### 1. Introduction to Thermistors

*   **Definition:** A thermistor is a type of resistor whose resistance is strongly dependent on temperature, more so than in standard resistors. The name is a portmanteau of "thermal" and "resistor."
*   **Primary Function:** To sense temperature changes by measuring the variation in their electrical resistance.
*   **Classification based on Temperature Coefficient of Resistance (TCR):**
    *   **Negative Temperature Coefficient (NTC) Thermistors:** Resistance decreases as temperature increases. This is the most common type.
    *   **Positive Temperature Coefficient (PTC) Thermistors:** Resistance increases as temperature increases. These often exhibit a sharp increase in resistance above a specific "Curie temperature."
*   **Materials:** Typically made from metal oxides (like oxides of manganese, nickel, cobalt, iron, copper, and uranium) or semiconductor materials.
*   **Advantages:** High sensitivity, fast response time, low cost, small size.
*   **Disadvantages:** Non-linear output, limited temperature range compared to RTDs, self-heating issues, less accurate than RTDs at very high temperatures.

### 2. Working Principle of Thermistors

*   **NTC Thermistors:**
    *   The resistance of NTC thermistors is primarily governed by the **semiconductor physics** of their constituent materials.
    *   As temperature increases, more charge carriers (electrons and holes) are thermally excited into the conduction band, increasing conductivity and thus decreasing resistance.
    *   The relationship between resistance ($R$) and absolute temperature ($T$ in Kelvin) is often approximated by the **Steinhart-Hart equation** or a simplified form:
        $R(T) = R_0 \exp\left(\beta \left(\frac{1}{T} - \frac{1}{T_0}\right)\right)$
        Where:
        *   $R(T)$: Resistance at temperature $T$.
        *   $R_0$: Resistance at a reference temperature $T_0$.
        *   $\beta$: A material constant (in Kelvin), often called the "beta value" or "characteristic temperature." It represents the sensitivity of the thermistor.
    *   **Reference:** Fraden, Chapter 5.1 (Thermistors), discusses the underlying physics and the Steinhart-Hart equation for characterizing thermistors.
*   **PTC Thermistors:**
    *   PTC thermistors often use polycrystalline ceramic materials, such as doped barium titanate ($BaTiO_3$).
    *   At low temperatures, the grain boundaries in these materials have low resistance.
    *   As the temperature approaches the Curie temperature, the dielectric properties of the material change, leading to a significant increase in the resistance across the grain boundaries.
    *   Beyond the Curie temperature, the resistance may plateau or continue to increase gradually.
    *   **Reference:** Fraden, Chapter 5.1 (Thermistors), also touches upon PTC materials and their behavior.

### 3. Thermistors in Flow Sensing Applications

While primarily temperature sensors, thermistors are indirectly used in flow sensing through techniques that rely on the convective cooling of a heated element.

*   **Hot-Wire Anemometry (HWA) and Hot-Film Anemometry (HFA):**
    *   **Principle:** A thin wire or film (the sensor) is heated to a constant temperature above the ambient fluid temperature. As the fluid flows over the sensor, it removes heat through convection. The rate of heat loss is proportional to the mass flow rate or velocity of the fluid.
    *   **Thermistor Role:** In some anemometry designs, a thermistor can act as the sensing element.
        *   **Constant Temperature (CT) Operation:** A feedback circuit maintains the thermistor at a constant temperature. The electrical power required to compensate for the convective cooling is measured. This power is directly related to the fluid velocity.
        *   **Constant Current (CC) Operation:** A constant current is passed through the thermistor, causing it to heat up. The fluid flow then cools the thermistor, and the change in its resistance (and hence voltage drop) is measured. This change is related to the fluid velocity.
    *   **Mechanism:**
        1.  The thermistor element is heated.
        2.  As fluid flows, it carries heat away from the thermistor.
        3.  The rate of heat removal depends on the fluid's velocity and properties (density, viscosity, thermal conductivity).
        4.  By monitoring the thermistor's resistance (or the power needed to maintain its temperature), the fluid velocity can be inferred.
    *   **Example:** Measuring air speed in HVAC systems, wind speed in meteorological applications, or gas flow in industrial processes.
    *   **Reference:**
        *   Fraden, Chapter 5.1, while focusing on temperature measurement, lays the foundation for understanding how resistance changes with temperature, which is critical for anemometry.
        *   Parr, Chapter 7 (Flow Measurement), discusses various flow measurement techniques, including thermal mass flow meters, which often utilize principles similar to HWA/HFA.
        *   Johnson, Chapter 13 (Flow Measurement Instruments), likely covers thermal flow meters and the principles behind them.

### 4. Types of Thermistors

*   **NTC Thermistors:**
    *   **Disc Thermistors:** Compact, often coated for protection. Used in general-purpose temperature sensing.
    *   **Bead Thermistors:** Very small, glass-encapsulated beads. Offer very fast response times and high sensitivity. Ideal for precise temperature control.
    *   **Rod Thermistors:** Larger, cylindrical shape, often used for higher power applications or where robust mounting is required.
    *   **Surface Mount Thermistors:** Designed for integration into PCBs.
*   **PTC Thermistors:**
    *   **Switching PTCs:** Exhibit a rapid increase in resistance at their characteristic temperature. Used for overcurrent protection, self-regulating heaters, and as over-temperature cutoffs.
    *   **Silistors:** These are silicon-based PTCs that operate over a wider temperature range and have a more linear positive temperature coefficient than ceramic PTCs.
    *   **Reference:** Fraden, Chapter 5.1, provides descriptions and typical applications for various thermistor constructions.

### 5. Thermistor Characterization and Calibration

*   **Beta Value ($\beta$):** A key parameter for NTC thermistors, indicating sensitivity. A higher $\beta$ means greater resistance change per degree Celsius.
*   **Steinhart-Hart Equation:** A more accurate model for NTC thermistors, especially over wider temperature ranges:
    $\frac{1}{T} = A + B \ln(R) + C (\ln(R))^3$
    Where A, B, and C are coefficients determined by calibration at three different temperatures.
*   **Calibration:** Thermistors need to be calibrated to achieve accurate readings. This involves measuring their resistance at known, precise temperatures and using this data to determine the appropriate coefficients for the chosen equation.
*   **Self-Heating:** When a current flows through a thermistor, it dissipates power as heat ($P = I^2R$ or $P = V^2/R$), causing its own temperature to rise. This can lead to measurement errors, especially in still air or low-flow conditions.
    *   **Mitigation:** Use a lower excitation current, ensure adequate ventilation or fluid flow, or operate in a CT mode where heating is carefully controlled.
    *   **Reference:** Fraden, Chapter 5.1, discusses self-heating and its impact.

### 6. Course Outcomes Alignment

*   **CO1: Describe Sensor Fundamentals (Knowledge Level: K2):**
    *   This topic covers the fundamental principle of thermistors: resistance change with temperature. It explains how this property is exploited for measurement.
*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available (Knowledge Level: K2):**
    *   Thermistors are a common type of temperature sensor. This topic details their working principle (NTC vs. PTC), materials, construction types, and their application in inferring fluid flow through anemometry.
*   **CO3: Illustrate the working principles of smart sensors (Knowledge Level: K2):**
    *   While thermistors themselves are not inherently "smart," their integration into systems like hot-wire anemometers that use feedback (e.g., constant temperature control) demonstrates principles of intelligent sensing where the sensor's output is actively managed or processed for a more robust measurement.
*   **CO4: Explain the working principle of different types of actuators (Knowledge Level: K2):**
    *   This topic doesn't directly cover actuators. However, understanding sensors is a prerequisite for designing mechatronic systems that involve both sensors and actuators. For example, a thermistor measuring fluid temperature could be used as input to a control system that drives a heating element actuator.

### 7. Important Points to Remember

*   **NTC vs. PTC:** NTC resistance decreases with temperature; PTC resistance increases. NTCs are more common for general temperature sensing.
*   **Non-linearity:** Thermistor resistance is non-linear with temperature, requiring specific equations (like Steinhart-Hart) for accurate conversion.
*   **Sensitivity:** Thermistors offer high sensitivity to temperature changes.
*   **Indirect Flow Sensing:** Thermistors are used in anemometry to infer flow by measuring the convective cooling of a heated element.
*   **Self-Heating:** A crucial consideration that can affect accuracy, especially at low flow rates or in still environments.
*   **$\beta$ Value:** A key parameter for NTC thermistor characterization.

### 8. Practice Questions and Exercises

**Question 1:**
Explain the fundamental difference in the temperature-resistance relationship between NTC and PTC thermistors.

**Answer:**
NTC (Negative Temperature Coefficient) thermistors exhibit a decrease in resistance as temperature increases. PTC (Positive Temperature Coefficient) thermistors show an increase in resistance as temperature increases, often with a sharp rise around a specific characteristic temperature.

**Question 2:**
A thermistor has a resistance of 10 k$\Omega$ at 25°C. Its $\beta$ value is 3435 K. Calculate its resistance at 50°C using the simplified formula: $R(T) = R_0 \exp\left(\beta \left(\frac{1}{T} - \frac{1}{T_0}\right)\right)$. (Assume $T$ and $T_0$ are in Kelvin).

**Answer:**
*   $R_0 = 10 \text{ k}\Omega = 10000 \, \Omega$
*   $T_0 = 25^\circ\text{C} = 25 + 273.15 = 298.15 \, \text{K}$
*   $T = 50^\circ\text{C} = 50 + 273.15 = 323.15 \, \text{K}$
*   $\beta = 3435 \, \text{K}$

$R(323.15) = 10000 \, \Omega \times \exp\left(3435 \, \text{K} \left(\frac{1}{323.15 \, \text{K}} - \frac{1}{298.15 \, \text{K}}\right)\right)$
$R(323.15) = 10000 \, \Omega \times \exp\left(3435 \left(0.0030946 - 0.0033540\right)\right)$
$R(323.15) = 10000 \, \Omega \times \exp\left(3435 \times (-0.0002594)\right)$
$R(323.15) = 10000 \, \Omega \times \exp(-0.891473)$
$R(323.15) = 10000 \, \Omega \times 0.4103$
$R(323.15) \approx 4103 \, \Omega$

**Question 3:**
Briefly explain how a thermistor can be used in a hot-wire anemometer system. What is the primary physical principle involved?

**Answer:**
In a hot-wire anemometer, a thermistor element is heated above the ambient fluid temperature. As fluid flows past the thermistor, it cools the element through convection. The rate of heat loss is proportional to the fluid velocity. By either maintaining the thermistor at a constant temperature (requiring more power at higher flow) or by allowing its temperature to vary under a constant current (measuring the resistance change), the fluid velocity can be determined. The primary physical principle is convective heat transfer.

**Question 4:**
What is "self-heating" in a thermistor, and why is it a concern, particularly in flow measurement applications?

**Answer:**
Self-heating occurs when the electrical current flowing through the thermistor generates heat ($I^2R$ losses), causing its own temperature to rise above the ambient fluid temperature. This is a concern because the thermistor's resistance is highly temperature-dependent. If the self-heating is significant and not accounted for, it leads to inaccurate temperature readings and, consequently, erroneous flow rate calculations, especially in situations with low fluid flow or poor thermal contact, where the generated heat is not efficiently dissipated.

---

This comprehensive set of notes covers the essential aspects of thermistors as relevant to Module 3: Flow Sensors, drawing upon the principles discussed in the provided textbooks and reference materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
