---
title: "Determination of characteristics of Thermal sensors: Thermistor, Thermocouple and RTD*."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 15: Determination of characteristics of Thermal sensors: Thermistor, Thermocouple and RTD*."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cff"
status: "completed"
scrapedAt: "2026-05-23T16:12:03.607Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 15: Determination of Characteristics of Thermal Sensors

## 1. Introduction to Thermal Sensors

Thermal sensors are devices that convert thermal energy (heat) into electrical signals or vice versa. They are crucial components in various electrical and electronic systems for monitoring, control, and measurement of temperature. This module focuses on three fundamental types of thermal sensors: Thermistors, Thermocouples, and Resistance Temperature Detectors (RTDs).

**Key Concept:** The primary characteristic of these sensors is their **sensitivity** to temperature changes, meaning their electrical properties change predictably with temperature.

**Relevance to Course Outcomes:** This module directly contributes to **CO6: Analyse the characteristics of various types of transducer systems**, as thermal sensors are a common type of transducer. Understanding their characteristics is vital for accurate measurement and control in electrical systems.

## 2. Thermistors

### 2.1. Definition and Principle of Operation

A **thermistor** is a type of resistor whose resistance is strongly dependent on temperature, more so than in standard resistors. The name is a portmanteau of "thermal" and "resistor."

*   **Princ:** Thermistors are semiconductor devices. Their resistance changes significantly with temperature due to the change in the number of charge carriers available for conduction.
*   **Types:**
    *   **NTC (Negative Temperature Coefficient) Thermistors:** Resistance decreases as temperature increases. This is the most common type.
    *   **PTC (Positive Temperature Coefficient) Thermistors:** Resistance increases as temperature increases.
*   **Material:** Typically made from metallic oxides (e.g., oxides of manganese, nickel, cobalt, iron) sintered into a ceramic-like material.

**Key Concepts:**
*   **Temperature Coefficient of Resistance ($\alpha$):** A measure of how much the resistance of a material changes per degree Celsius (or Kelvin) change in temperature. For thermistors, $\alpha$ is much larger than for metals.
*   **Steinhart-Hart Equation (for NTC thermistors):** A widely used empirical equation to describe the resistance-temperature relationship. A simplified form is:
    $R(T) = R_0 \exp(\beta(\frac{1}{T} - \frac{1}{T_0}))$
    Where:
    *   $R(T)$ is the resistance at temperature $T$ (in Kelvin).
    *   $R_0$ is the resistance at a reference temperature $T_0$ (in Kelvin).
    *   $\beta$ is the material constant, typically in Kelvin, and varies for different thermistors (commonly between 2500K and 4500K).
    *   The exponent term can be linearized over a narrow temperature range.

**Textbook Reference:**
*   Sawhney, A. K.: Chapter on Transducers and Measuring Instruments, likely covering thermistors.
*   Gupta, J. B.: Similar coverage on thermistors as transducers.
*   Kalsi, H. S.: Details on semiconductor-based transducers like thermistors.

### 2.2. Characteristics of Thermistors

*   **High Sensitivity:** Due to the large $\beta$ value, even small temperature changes result in significant resistance changes, allowing for precise temperature measurement.
*   **Non-Linearity:** The relationship between resistance and temperature is highly non-linear, especially over wider temperature ranges, requiring calibration or more complex linearization circuits.
*   **Limited Temperature Range:** Typically operate effectively within a range of -50°C to +300°C, depending on the material. Exceeding this can cause permanent damage.
*   **Self-Heating:** When current flows through the thermistor, it dissipates power, causing its own temperature to rise (self-heating). This can introduce errors in measurement if not accounted for. The dissipation constant ($D$) quantifies this effect.
*   **Response Time:** Varies with the physical construction and packaging, but generally faster than RTDs.

**Important Point:** Always consider the **self-heating effect** when designing circuits or taking measurements with thermistors. Using a voltage divider configuration and measuring voltage instead of current can help minimize self-heating.

### 2.3. Applications

*   Temperature measurement and control (thermometers, thermostats).
*   Temperature compensation in electronic circuits.
*   Inrush current limiting (NTC thermistors).
*   Over-temperature protection.
*   Liquid level sensing.

### 2.4. Practical Considerations for Measurement

*   **Measurement Circuit:** Commonly measured using a voltage divider or a Wheatstone bridge.
*   **Calibration:** Requires calibration against a known temperature standard to determine the specific $\beta$ value or to generate a look-up table for accurate readings.
*   **Circuit Design:** Linearization circuits (e.g., using op-amps) are often employed to create a more linear output signal.

**Example:**
Consider an NTC thermistor with $R_0 = 10 \text{ k}\Omega$ at $T_0 = 25^\circ\text{C}$ (298.15 K) and a $\beta$ value of 3950 K. To find its resistance at $50^\circ\text{C}$ (323.15 K):
$R(323.15) = 10 \text{ k}\Omega \times \exp(3950 \text{ K} \times (\frac{1}{323.15 \text{ K}} - \frac{1}{298.15 \text{ K}}))$
$R(323.15) \approx 10 \text{ k}\Omega \times \exp(3950 \times (0.0030947 - 0.0033538))$
$R(323.15) \approx 10 \text{ k}\Omega \times \exp(3950 \times (-0.0002591))$
$R(323.15) \approx 10 \text{ k}\Omega \times \exp(-1.023)$
$R(323.15) \approx 10 \text{ k}\Omega \times 0.359 \approx 3.59 \text{ k}\Omega$

## 3. Thermocouples

### 3.1. Definition and Principle of Operation

A **thermocouple** is a temperature-measuring device consisting of two dissimilar conductors that produce a small voltage proportional to a temperature difference between the measuring junction (hot junction) and the reference junction (cold junction).

*   **Princ:** Based on the **Seebeck Effect**. When two different metals are joined at two junctions and these junctions are at different temperatures, a voltage is generated that is proportional to the temperature difference.
*   **Seebeck Effect:** The creation of a voltage difference in a conductor when there is a temperature gradient across it. When two different conductors are joined, the differing Seebeck coefficients create a net voltage.

**Key Concepts:**
*   **Seebeck Effect:** The fundamental principle behind thermocouple operation.
*   **Junctions:**
    *   **Measuring Junction (Hot Junction):** The junction where the temperature is to be measured.
    *   **Reference Junction (Cold Junction):** The junction kept at a known, constant temperature (historically 0°C).
*   **Thermocouple Types:** Classified by letter designations (e.g., Type K, J, T, E, R, S, B) based on the combination of metals used, each having a specific temperature range and output characteristics.
    *   **Type K (Chromel-Alumel):** Most common, wide temperature range (-200°C to +1250°C), good sensitivity.
    *   **Type J (Iron-Constantan):** Lower temperature range (-40°C to +750°C), good for vacuum and reducing atmospheres.
    *   **Type T (Copper-Constantan):** Good for low temperatures (-200°C to +350°C), stable.
    *   **Type S & R (Platinum-Rhodium):** For very high temperatures (up to 1700°C), very stable but expensive.
*   **Reference Junction Compensation:** Since the output voltage depends on the temperature difference between the hot and cold junctions, the cold junction temperature must be known or compensated for. Modern instruments typically use electronic cold junction compensation (CJC) by measuring the ambient temperature near the connection terminals.

**Textbook Reference:**
*   Sawhney, A. K.: Detailed explanation of the Seebeck effect and thermocouple construction.
*   Gupta, J. B.: Coverage of different thermocouple types and their characteristics.
*   Kalsi, H. S.: Discusses thermoelectric transducers and cold junction compensation techniques.

### 3.2. Characteristics of Thermocouples

*   **Wide Temperature Range:** Can measure extremely high temperatures, unlike thermistors and RTDs.
*   **Low Sensitivity:** Produce small voltages (millivolts) for a given temperature change, requiring sensitive amplification.
*   **Non-Linearity:** The voltage-temperature relationship is non-linear, though less so than thermistors over a narrow range. Polynomials or look-up tables are used for linearization.
*   **Ruggedness:** Can be made very robust and suitable for harsh environments.
*   **Fast Response Time:** Can be very fast, especially when the measuring junction is small.
*   **Requires Reference Junction Compensation:** A critical aspect of accurate measurement.
*   **Cost:** Varies greatly with type; platinum-based thermocouples are expensive.

**Important Point:** The accuracy of a thermocouple reading is heavily dependent on the **accurate compensation of the reference junction temperature**.

### 3.3. Applications

*   High-temperature industrial processes (furnaces, kilns, molten metal).
*   Automotive engines.
*   Gas turbines.
*   Scientific research in extreme conditions.
*   Ovens, grills, and other domestic appliances.

### 3.4. Practical Considerations for Measurement

*   **Instrumentation:** Requires a sensitive voltmeter (or specialized thermocouple reader) with built-in CJC.
*   **Extension Wires:** Special extension wires made of similar or compensating alloys are used to connect the thermocouple to the measuring instrument to avoid introducing errors.
*   **Calibration:** Can be calibrated using fixed-point temperature standards (e.g., ice bath, boiling water, melting metals).
*   **Noise Immunity:** Due to low voltage signals, proper shielding and grounding are important.

**Example:**
A Type K thermocouple produces approximately 41 µV/°C for small temperature changes relative to a 0°C reference. If the measuring junction is at 100°C and the reference junction is at 0°C, the output voltage would be roughly $100^\circ\text{C} \times 41 \text{ µV/}^\circ\text{C} = 4.1 \text{ mV}$. If the reference junction is at $20^\circ\text{C}$ (293.15 K), the measured voltage would correspond to the temperature difference of $100^\circ\text{C} - 20^\circ\text{C} = 80^\circ\text{C}$, resulting in approximately $80^\circ\text{C} \times 41 \text{ µV/}^\circ\text{C} = 3.28 \text{ mV}$. The instrument would then need to add the voltage corresponding to $20^\circ\text{C}$ to the measured voltage to infer the correct temperature.

## 4. Resistance Temperature Detectors (RTDs)

### 4.1. Definition and Principle of Operation

An **RTD** is a temperature-dependent resistor that uses the principle that the resistance of a pure metal increases or decreases with temperature in a predictable manner.

*   **Princ:** Based on the **change in resistance of a metal with temperature**. Unlike semiconductors, the resistance of metals generally increases with temperature.
*   **Metals Used:** Most commonly platinum (Pt), nickel (Ni), and copper (Cu).
    *   **Platinum (Pt):** Most popular due to its stability, accuracy, and wide temperature range. Platinum RTDs are standardized (e.g., Pt100, Pt1000 meaning 100 $\Omega$ or 1000 $\Omega$ at 0°C).
    *   **Nickel (Ni):** Less expensive, higher resistance change (sensitivity), but less linear and prone to oxidation at higher temperatures.
    *   **Copper (Cu):** Very linear over a limited range, but oxidizes easily and has a lower resistance than platinum.
*   **Standardization:** The relationship between resistance and temperature for platinum RTDs is standardized by IEC 60751 (often referred to as the "Callendar-Van Dusen" equation, though Callendar-Van Dusen is an earlier formulation).

**Key Concepts:**
*   **Linearity:** RTDs (especially platinum) are significantly more linear than thermistors and thermocouples over a wider temperature range.
*   **Callendar-Van Dusen Equation (simplified form for platinum):**
    $R(T) = R_0 (1 + AT + BT^2 + C(T-100^\circ\text{C})T^3)$
    For a narrower range (e.g., $-200^\circ\text{C}$ to $0^\circ\text{C}$):
    $R(T) = R_0 (1 + AT + BT^2)$
    For a wider range (e.g., $0^\circ\text{C}$ to $850^\circ\text{C}$):
    $R(T) = R_0 (1 + AT + BT^2)$ where A and B are constants specific to platinum.
    A more common form for a wider range using the $\alpha$ value:
    $R(T) = R_0 (1 + \alpha T)$ for a single-point linear approximation.
    $R(T) = R_0 (1 + \alpha T + \beta T^2)$ for a more accurate two-point approximation.
    The IEC 60751 standard defines specific polynomial coefficients for platinum.
*   **Wire-Wound Construction:** Typically consists of a fine wire wound around a ceramic or glass former.
*   **Thin-Film Construction:** A thin layer of platinum deposited onto a ceramic substrate.

**Textbook Reference:**
*   Sawhney, A. K.: Discusses RTDs as resistance-based transducers.
*   Gupta, J. B.: Explains the construction and characteristics of RTDs.
*   Kalsi, H. S.: Provides detailed information on resistance thermometers and their applications.

### 4.2. Characteristics of RTDs

*   **High Accuracy and Stability:** Platinum RTDs offer excellent accuracy and long-term stability.
*   **Good Linearity:** The resistance-temperature relationship is relatively linear compared to thermistors and thermocouples.
*   **Moderate Sensitivity:** Higher than thermocouples but lower than thermistors.
*   **Wide Temperature Range:** Can operate over a wide range, typically -200°C to +850°C (for platinum), sometimes higher.
*   **Slower Response Time:** Generally slower than thermocouples and some thermistors due to their larger thermal mass.
*   **Self-Heating:** Similar to thermistors, self-heating can occur due to the excitation current.
*   **Wiring Resistance Error:** In 2-wire configurations, the resistance of the lead wires can introduce significant errors, especially with low-resistance RTDs. This is mitigated by using 3-wire or 4-wire configurations.

**Important Point:** For accurate measurements, especially with Pt100 sensors, **3-wire or 4-wire configurations are essential to compensate for lead wire resistance**.

### 4.3. Applications

*   Industrial process control (chemical plants, power generation).
*   Laboratory measurements requiring high accuracy.
*   Food industry.
*   HVAC systems.
*   Medical equipment.

### 4.4. Practical Considerations for Measurement

*   **Measurement Circuit:**
    *   **2-Wire:** Simple but susceptible to lead wire resistance.
    *   **3-Wire:** One lead wire compensates for resistance.
    *   **4-Wire (Kelvin Connection):** Two wires for excitation current and two for voltage measurement, cancelling out lead wire resistance.
*   **Excitation Current:** A small, constant DC current is passed through the RTD to measure its resistance. The current must be kept low to minimize self-heating.
*   **Calibration:** Typically calibrated by the manufacturer against standards. Calibration involves determining the resistance at specific temperatures (e.g., 0°C, 100°C).
*   **Bridge Circuits:** Wheatstone bridge is commonly used to measure the resistance change.

**Example:**
A Pt100 RTD has a resistance of 100 $\Omega$ at 0°C. At 100°C, its resistance is approximately 138.5 $\Omega$. Using the linear approximation $R(T) = R_0 (1 + \alpha T)$, where $R_0 = 100 \Omega$ and $\alpha \approx 0.00385 \text{ /}^\circ\text{C}$:
$R(100^\circ\text{C}) \approx 100 \Omega (1 + 0.00385 \times 100) = 100 \Omega (1 + 0.385) = 138.5 \Omega$.
A 3-wire configuration would measure the resistance with a known lead resistance $R_L$. The bridge circuit would effectively nullify the effect of $R_L$.

## 5. Comparison of Thermal Sensors

| Feature            | Thermistor (NTC)             | Thermocouple                 | RTD (Platinum)                 |
| :----------------- | :--------------------------- | :--------------------------- | :----------------------------- |
| **Princ**          | Semiconductor resistance     | Seebeck Effect               | Metal resistance               |
| **Sensitivity**    | Very High                    | Low                          | Moderate                       |
| **Linearity**      | Highly Non-linear            | Non-linear (less than NTC)   | Relatively Linear              |
| **Temperature Range**| Moderate (-50°C to 300°C)   | Very Wide (-200°C to 1700°C+) | Wide (-200°C to 850°C+)        |
| **Accuracy**       | Good (in narrow range)       | Moderate                     | Very High                      |
| **Stability**      | Moderate                     | Good                         | Excellent                      |
| **Response Time**  | Fast                         | Very Fast                    | Moderate                       |
| **Self-Heating**   | Significant                  | Negligible                   | Moderate                       |
| **Cost**           | Low                          | Low to High (type dependent) | Moderate to High               |
| **Circuitry**      | Simple, often needs linearization | Needs amplification & CJC    | Needs 3/4-wire, stable current |
| **Ruggedness**     | Moderate                     | High                         | Moderate to High               |

**Relevance to Course Outcomes:** This comparison directly aids in understanding the characteristics of various transducer systems (CO6) and choosing the appropriate sensor for a given application.

## 6. Laboratory Experiments and Measurement Techniques

The core of this module involves practical determination of the characteristics of these sensors.

### 6.1. Experimental Setup

*   **Water Bath/Oil Bath:** To provide a stable and controlled temperature environment.
*   **Heat Source:** For raising the temperature of the bath.
*   **Thermometer/Calibrated Sensor:** As a reference for temperature.
*   **DC Power Supply:** For excitation current/voltage.
*   **Multimeter:** For measuring resistance and voltage.
*   **Wheatstone Bridge (optional):** For more precise resistance measurements.
*   **Circuit Components:** Resistors, potentiometers, operational amplifiers (for linearization circuits).
*   **The sensors:** Thermistor, Thermocouple (with CJC instrument), RTD.

### 6.2. Procedure for Determining Characteristics

**For Thermistor:**
1.  Set up a voltage divider circuit with the thermistor and a known fixed resistor.
2.  Place the thermistor in the temperature-controlled bath.
3.  Vary the bath temperature across its operating range.
4.  At each temperature, record the bath temperature (from the reference thermometer) and the voltage across the thermistor (or the fixed resistor).
5.  Calculate the resistance of the thermistor at each temperature.
6.  Plot Resistance vs. Temperature.
7.  From the data, determine the $\beta$ value or fit the Steinhart-Hart equation.
8.  Observe the non-linearity.

**For Thermocouple:**
1.  Connect the thermocouple to a compatible measuring instrument (with CJC).
2.  Place the measuring junction in the temperature-controlled bath.
3.  Vary the bath temperature.
4.  At each temperature, record the bath temperature and the output voltage from the instrument.
5.  Plot Output Voltage vs. Temperature.
6.  Compare the readings with the known characteristics of the thermocouple type and the CJC accuracy.

**For RTD:**
1.  Set up a 2-wire, 3-wire, or 4-wire measurement circuit (preferably 3 or 4-wire).
2.  Place the RTD in the temperature-controlled bath.
3.  Vary the bath temperature.
4.  At each temperature, record the bath temperature and the resistance of the RTD (measured using a multimeter or bridge).
5.  Plot Resistance vs. Temperature.
6.  Verify the linearity of the relationship.
7.  If using a 2-wire setup, compare with a 3/4-wire setup to show the lead wire effect.

**Relevance to Course Outcomes:** These experimental procedures directly contribute to:
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems**, as we are essentially calibrating the sensor's output.
*   **CO6: Analyse the characteristics of various types of transducer systems**, by experimentally determining their response to temperature.
*   **CO7: Determine electrical parameters using various bridges**, if a bridge circuit is used for RTD measurement.

## 7. Practice Questions and Answers

1.  **Question:** A thermistor has a resistance of 5 k$\Omega$ at 25°C and a $\beta$ value of 3500 K. What is its resistance at 75°C? (Assume $T_0 = 25^\circ\text{C} = 298.15 \text{ K}$).
    **Answer:**
    $R(T) = R_0 \exp(\beta(\frac{1}{T} - \frac{1}{T_0}))$
    $T = 75^\circ\text{C} = 348.15 \text{ K}$
    $R(348.15) = 5 \text{ k}\Omega \times \exp(3500 \text{ K} \times (\frac{1}{348.15 \text{ K}} - \frac{1}{298.15 \text{ K}}))$
    $R(348.15) \approx 5 \text{ k}\Omega \times \exp(3500 \times (0.002872 - 0.003354))$
    $R(348.15) \approx 5 \text{ k}\Omega \times \exp(3500 \times (-0.000482))$
    $R(348.15) \approx 5 \text{ k}\Omega \times \exp(-1.687)$
    $R(348.15) \approx 5 \text{ k}\Omega \times 0.185 \approx 0.925 \text{ k}\Omega = 925 \Omega$.

2.  **Question:** What is the primary principle behind the operation of a thermocouple?
    **Answer:** The Seebeck Effect.

3.  **Question:** Why are 3-wire or 4-wire connections preferred for RTDs over 2-wire connections?
    **Answer:** To compensate for the resistance of the lead wires, which can introduce significant measurement errors, especially for low-resistance RTDs. The extra wires allow the resistance of the connecting wires to be subtracted or cancelled out.

4.  **Question:** List two advantages of RTDs over thermistors.
    **Answer:**
    *   Better linearity over a wider temperature range.
    *   Higher stability and accuracy.

5.  **Question:** A Type J thermocouple reads 10 mV at a certain temperature with a reference junction at 0°C. If the reference junction is accidentally at 20°C, what voltage would be measured, and what would be the apparent temperature difference (assume a linear sensitivity of 50 µV/°C for simplicity)?
    **Answer:**
    *   **Actual Temperature Difference:** The 10 mV reading corresponds to an actual temperature difference of $10 \text{ mV} / 50 \text{ µV/}^\circ\text{C} = 10000 \text{ µV} / 50 \text{ µV/}^\circ\text{C} = 200^\circ\text{C}$.
    *   **Apparent Temperature Difference (with CJC at 20°C):** The instrument measures the difference between the hot junction and the cold junction (20°C). The voltage measured will correspond to a temperature difference of $200^\circ\text{C} - 20^\circ\text{C} = 180^\circ\text{C}$.
    *   **Measured Voltage:** The measured voltage would be $180^\circ\text{C} \times 50 \text{ µV/}^\circ\text{C} = 9000 \text{ µV} = 9 \text{ mV}$.
    *   **Apparent Temperature:** The instrument would display a temperature that is $20^\circ\text{C}$ lower than the actual temperature.

## 8. Important Points to Remember

*   **Sensor Selection:** Choose the sensor based on required temperature range, accuracy, linearity, response time, and cost.
*   **Non-Linearity:** Thermistors and thermocouples are non-linear and often require linearization techniques or look-up tables. RTDs are more linear.
*   **Self-Heating:** Always consider the effect of excitation current causing the sensor to heat up. Minimize current or use appropriate measurement techniques.
*   **Reference Junction Compensation:** Crucial for thermocouple accuracy.
*   **Lead Wire Resistance:** Critical for RTD accuracy, necessitating 3-wire or 4-wire connections.
*   **Calibration:** Essential for accurate temperature measurements.

## 9. Conclusion

This module provides a foundational understanding of thermistors, thermocouples, and RTDs. By conducting experiments and analyzing their characteristics, students gain practical experience in transducer operation, measurement techniques, and the factors affecting measurement accuracy. This knowledge is directly applicable to designing and troubleshooting systems involving temperature sensing and control.

**Alignment with Course Outcomes:**
*   **CO6 (Transducer Characteristics):** Directly addressed by experimentally determining the characteristics of these three major transducer types.
*   **CO4 (Meter Calibration):** The process of measuring sensor output against a known temperature standard is essentially a calibration process for the sensor-measurement system.
*   **CO7 (Bridge Measurements):** If bridges are used for RTD measurements, this outcome is also satisfied.

This comprehensive set of notes should equip you for understanding and performing the experiments related to the determination of characteristics of thermal sensors.
