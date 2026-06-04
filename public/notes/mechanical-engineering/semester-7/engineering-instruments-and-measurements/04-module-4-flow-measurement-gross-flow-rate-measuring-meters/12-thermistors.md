---
title: "thermistors"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464331"
status: "completed"
scrapedAt: "2026-05-20T18:11:59.340Z"
---
# Engineering Instruments and Measurements: Module 4 - Flow Measurement: Gross Flow Rate Measuring Meters - Thermistors

This module delves into various methods and instruments used for measuring gross flow rates. In this topic, we will focus on **thermistors**, a type of temperature-sensitive resistor, and their application in flow measurement.

---

## 1. Introduction to Thermistors

Thermistors are semiconductor devices whose electrical resistance changes significantly with temperature. They are primarily used as temperature sensors but can also be employed in flow measurement based on the principle of heat transfer from the thermistor to the flowing fluid.

*   **Definition:** A thermistor is a resistor whose resistance is highly dependent on temperature, more so than in standard resistors. The term "thermistor" is a portmanteau of "thermal" and "resistor."
*   **Material Composition:** Thermistors are typically made from metal oxides (like oxides of manganese, nickel, cobalt, iron, copper, and uranium) mixed with ceramic compounds and sintered.
*   **Two Types:**
    *   **Negative Temperature Coefficient (NTC) Thermistors:** Resistance decreases as temperature increases. This is the most common type.
    *   **Positive Temperature Coefficient (PTC) Thermistors:** Resistance increases as temperature increases.
*   **Key Characteristic:** The high sensitivity of thermistors to temperature variations allows them to detect subtle changes in fluid temperature caused by flow.

---

## 2. Working Principle of Thermistors in Flow Measurement

Thermistors are used in flow measurement through two primary principles:

### 2.1. Thermal Mass Flow Measurement

This method directly relates the heat dissipation from a thermistor to the mass flow rate of the fluid.

*   **Princ:** A thermistor element is heated to a constant temperature above the fluid temperature, or to a constant power dissipation. As the fluid flows past the thermistor, it carries away heat. The amount of heat dissipated is proportional to the mass flow rate of the fluid.
*   **Mechanism:**
    1.  A heated thermistor (often an NTC type operated in a heating circuit) is placed in the fluid stream.
    2.  The thermistor's temperature is maintained constant by adjusting the current flowing through it. As the flow rate increases, more heat is transferred from the thermistor to the fluid, requiring more current to maintain the constant temperature.
    3.  Alternatively, the thermistor can be operated at a constant current. In this case, as the flow rate increases, the thermistor's temperature decreases due to increased convective cooling, leading to a change in its resistance.
*   **Relationship:** The heat transfer rate from the thermistor is a function of the fluid's thermal properties and its velocity. For a given fluid, this often translates to a relationship between the thermistor's electrical characteristics (current or resistance) and the mass flow rate.
*   **Advantages:**
    *   Can measure mass flow directly, independent of fluid density changes.
    *   No moving parts, leading to low pressure drop.
    *   Good for low flow rates.
*   **Disadvantages:**
    *   Sensitive to changes in fluid temperature and composition.
    *   Requires a heating element or constant current source.
    *   Can be affected by fouling or deposits on the thermistor.

### 2.2. Indirect Flow Measurement (Velocity Measurement)

In this approach, thermistors are used to measure fluid velocity by detecting changes in temperature caused by the movement of fluid. This is often seen in anemometry.

*   **Princ:** This method relies on the cooling effect of a moving fluid on a heated thermistor.
*   **Mechanism:**
    1.  A thermistor (often a thin-wire type, but solid-state thermistors can also be used) is heated to a temperature above the ambient fluid temperature.
    2.  As the fluid flows past, it cools the thermistor. The rate of cooling is dependent on the fluid velocity.
    3.  The change in resistance of the thermistor due to cooling is measured. This change in resistance is correlated to the fluid velocity.
*   **Types of Thermistor Anemometers:**
    *   **Constant Temperature Anemometer (CTA):** The thermistor is kept at a constant temperature by a feedback circuit that adjusts the current flowing through it. The current required to maintain this constant temperature is then a measure of the velocity.
    *   **Constant Current Anemometer (CCA):** A constant current is passed through the thermistor. The change in the thermistor's resistance due to cooling indicates the velocity.
*   **Relationship:** The relationship between velocity and resistance (or current) is typically established through calibration.
*   **Advantages:**
    *   Can measure low velocities.
    *   Fast response time.
*   **Disadvantages:**
    *   Affected by changes in fluid temperature, pressure, and composition.
    *   Requires calibration.
    *   Can be fragile (especially thin-wire types).

---

## 3. Thermistor Characteristics Relevant to Flow Measurement

*   **Resistance-Temperature (R-T) Relationship:** This is the fundamental characteristic. For NTC thermistors, the relationship is generally non-linear and can be approximated by the Steinhart-Hart equation or a simpler beta ($\beta$) parameter equation.
    *   **Beta Parameter Equation:** $R = R_0 \cdot e^{\beta \left( \frac{1}{T} - \frac{1}{T_0} \right)}$
        *   $R$: Resistance at temperature $T$ (in Kelvin)
        *   $R_0$: Resistance at reference temperature $T_0$ (in Kelvin)
        *   $\beta$: Material constant (typically 3000-5000 K)
*   **Sensitivity:** The rate of change of resistance with temperature ($\frac{dR}{dT}$). Thermistors have high sensitivity compared to RTDs or thermocouples.
*   **Response Time:** How quickly the thermistor's resistance changes in response to a temperature change. This is important for tracking dynamic flow variations.
*   **Power Dissipation:** The power consumed by the thermistor when current flows through it. Excessive power dissipation can lead to self-heating errors and damage.

---

## 4. Applications in Flow Measurement

Thermistors are particularly useful for measuring low flow rates and in applications where a low pressure drop is desired.

*   **Gas Flow Meters:**
    *   **Thermal Mass Flow Meters:** Used in HVAC systems, medical equipment (e.g., ventilators), and industrial processes to measure the flow of air or other gases.
    *   **Hot-Wire Anemometers (using thermistor principles):** Used in research and development, meteorology, and for measuring air currents.
*   **Liquid Flow Meters:** Less common than in gas flow, but can be used for low-viscosity liquids where the heating/cooling effect is pronounced.
*   **Medical Devices:** Ventilation monitoring, respiratory flow measurement.

---

## 5. Advantages and Disadvantages of Thermistors for Flow Measurement

### 5.1. Advantages

*   **High Sensitivity:** Detects small changes in temperature, allowing for measurement of low flow rates.
*   **Fast Response Time:** Can respond quickly to changes in flow.
*   **Small Size:** Can be easily integrated into various flow paths.
*   **Low Cost:** Generally more affordable than other flow measurement technologies.
*   **Low Pressure Drop:** No moving parts means minimal obstruction to flow.
*   **Direct Mass Flow Measurement (Thermal Mass Flow Meters):** Independent of density variations, which is a significant advantage for gases.

### 5.2. Disadvantages

*   **Non-Linearity:** The R-T relationship is often non-linear, requiring linearization circuitry or software.
*   **Sensitivity to Ambient Temperature:** If not properly compensated, changes in ambient fluid temperature can affect readings.
*   **Drift:** Resistance can drift over time due to material aging or contamination.
*   **Limited Temperature Range:** Semiconductor materials have inherent temperature limits.
*   **Fragility:** Some thermistor types (especially bead or thin-film) can be physically fragile.
*   **Power Dissipation:** Self-heating can introduce errors if not managed.
*   **Fouling:** Deposits on the thermistor surface can alter heat transfer characteristics and affect accuracy.

---

## 6. Measurement System Design Considerations

When designing a flow measurement system using thermistors, several factors need to be considered:

*   **Fluid Properties:** Viscosity, density, thermal conductivity, specific heat.
*   **Flow Rate Range:** Thermistors are best suited for low to moderate flow rates.
*   **Operating Temperature and Pressure:** Ensure the thermistor material can withstand the conditions.
*   **Accuracy Requirements:** The need for linearization and calibration.
*   **Environmental Conditions:** Ambient temperature, vibration, potential for contamination.
*   **Power Supply and Signal Conditioning:** Design of circuits to operate the thermistor (e.g., constant temperature bridge) and process its output signal.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 7. Textbook and Reference Material Integration

*   **Dobelin, E.O. (1990) - Measurement Systems (Applications and Design):** Likely discusses the fundamental principles of heat transfer and its application in instrumentation. May cover thermistors as temperature sensors and their use in sensitive measurement circuits. (CO4, K4)
*   **Sawhney, A.K. & Sawhney, P. (2009) - Mechanical Measurements and Instrumentation & Control:** Expected to cover various flow measurement techniques, including thermal methods. Thermistors would be discussed as components in thermal anemometers or mass flow meters. (CO1, K2; CO4, K4)
*   **Nakra, B.C. & Chaudhry, K.K. (2009) - Instrumentation Measurement and Analysis:** Similar to Sawhney, this book will likely detail the physics of thermistors and their application in measuring physical quantities like flow, emphasizing the instrumentation aspects. (CO1, K2; CO4, K4)
*   **Raghavendra, N.V. (2013) - Engineering metrology and Measurements:** Might offer insights into the calibration and metrological aspects of thermistor-based flow meters. (CO1, K2)
*   **Jain, R.K. (2022) - A Text Book of Engineering Metrology:** Similar to Raghavendra, focusing on the measurement accuracy and standards. (CO1, K2)
*   **Kumar, D.S. (2012) - Mechanical Measurement and Control:** Likely covers the control aspects of systems employing thermistors, such as feedback loops for constant temperature operation. (CO4, K4)
*   **Singh, S.K. (2009) - Industrial Instrumentation and Control:** Provides practical industrial applications of thermistors in flow measurement within process control systems. (CO4, K4; CO5, K3)
*   **Rajput, R.K. (2006) - Mechanical Measurements and Instrumentation:** Expected to cover the mechanical design and principles behind instruments, including thermistor applications in flow. (CO1, K2; CO4, K4)

---

## 8. Alignment with Course Outcomes

*   **CO1 (Identify and classify instruments):** This topic helps classify thermistors as temperature sensors with specific applications in flow measurement, fitting into thermal flow meters and anemometers. (K2)
*   **CO2 (Measure displacement, strain, surface characteristics):** While not directly measuring these, understanding how thermistor resistance changes with temperature is analogous to how other sensors respond to their measured quantities. (K3 - indirectly related to understanding sensor principles)
*   **CO3 (Measure force, pressure):** Similar to CO2, the underlying principle of sensing physical effects (temperature change due to flow) is relevant. (K5 - indirectly related to sensing principles)
*   **CO4 (Measure flow and temperature):** This is the primary focus. Thermistors are direct tools for measuring flow (via thermal effects) and are inherently temperature-sensitive devices. (K4)
*   **CO5 (Select measurement system):** Understanding the pros and cons of thermistors allows for their selection in appropriate flow measurement applications where their characteristics are advantageous. (K3)

---

## 9. Practice Questions and Exercises

**Question 1:**
Explain the two primary principles by which thermistors are used for flow measurement. Which principle offers direct mass flow measurement?

**Answer:**
The two primary principles are:
1.  **Thermal Mass Flow Measurement:** A thermistor is heated, and its heat dissipation rate, which is influenced by the mass flow rate of the fluid, is measured. This method offers direct mass flow measurement.
2.  **Indirect Flow Measurement (Velocity Measurement):** A thermistor is heated, and its cooling rate due to fluid flow (which is velocity-dependent) is measured by observing its resistance change.

**Question 2:**
A negative temperature coefficient (NTC) thermistor has a resistance of 10 k$\Omega$ at 25°C (298.15 K). The $\beta$ value for this thermistor is 3435 K. Calculate its resistance at 50°C (323.15 K).

**Answer:**
Using the beta parameter equation:
$R = R_0 \cdot e^{\beta \left( \frac{1}{T} - \frac{1}{T_0} \right)}$
Where:
$R_0 = 10$ k$\Omega$ = $10 \times 10^3 \Omega$
$T_0 = 25^\circ C = 298.15$ K
$T = 50^\circ C = 323.15$ K
$\beta = 3435$ K

$R = (10 \times 10^3 \Omega) \cdot e^{3435 K \left( \frac{1}{323.15 K} - \frac{1}{298.15 K} \right)}$
$R = (10 \times 10^3 \Omega) \cdot e^{3435 \left( 0.0030945 - 0.0033540 \right)}$
$R = (10 \times 10^3 \Omega) \cdot e^{3435 \left( -0.0002595 \right)}$
$R = (10 \times 10^3 \Omega) \cdot e^{-0.89177}$
$R = (10 \times 10^3 \Omega) \cdot 0.4100$
$R \approx 4.10$ k$\Omega$

**Question 3:**
List three advantages of using thermistors for flow measurement compared to other common flow meter types (e.g., orifice plates or turbines).

**Answer:**
Three advantages are:
1.  **Low Pressure Drop:** Thermistors have no moving parts, resulting in minimal obstruction and a negligible pressure drop across the sensor.
2.  **Suitability for Low Flow Rates:** Their high sensitivity to temperature changes allows for accurate measurement of very low flow rates, which can be challenging for mechanical meters.
3.  **Direct Mass Flow Measurement (Thermal Mass Flow Meters):** Unlike volumetric flow meters that are affected by density changes, thermal mass flow meters using thermistors directly measure mass flow, which is often the desired quantity.

**Question 4:**
What is the main challenge associated with using thermistors for precise flow measurement, and how is it typically addressed?

**Answer:**
The main challenge is the **non-linear relationship between resistance and temperature**. This is typically addressed by:
*   **Calibration:** Performing rigorous calibration against known flow rates to establish a specific R-V (Resistance-Velocity) or R-Flow Rate curve.
*   **Linearization Circuits:** Using electronic circuits (e.g., bridge circuits with specific resistor combinations) or digital signal processing (DSP) algorithms to linearize the output.

---

## 10. Important Points to Remember

*   **NTC vs. PTC:** NTC thermistors are most common in flow measurement applications due to their decreasing resistance with increasing temperature, which aligns well with heat dissipation principles.
*   **Heat Transfer is Key:** The core principle is exploiting the heat transfer between the thermistor and the flowing fluid.
*   **Mass Flow Directness:** Thermal mass flow meters offer a significant advantage by measuring mass flow directly, unaffected by density changes.
*   **Low Flow Expertise:** Thermistors excel in applications with low flow rates.
*   **Calibration is Crucial:** Due to non-linearity and sensitivity to various factors, accurate calibration is essential for reliable flow measurement.
*   **Self-Heating:** Always consider the power dissipated by the thermistor to avoid measurement errors or damage.

---