---
title: "resistance thermometer"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446432f"
status: "completed"
scrapedAt: "2026-05-20T18:11:57.924Z"
---
# Engineering Instruments and Measurements - Module 4: Flow Measurement: Gross Flow Rate Measuring Meters

## Topic: Resistance Thermometer

---

### 1. Introduction to Resistance Thermometers

Resistance thermometers are **temperature-sensitive resistors** whose electrical resistance changes predictably with temperature. They are widely used in various industrial and scientific applications for accurate temperature measurement. The fundamental principle relies on the **thermoresistive effect**, where the resistance of a material changes as its temperature changes.

*   **Key Concept:** Thermoresistive Effect
*   **Princ of Operation:** As temperature increases, the electrical resistance of the sensing element increases (for most metals). This change in resistance can be measured and correlated to the temperature.
*   **Classification:**
    *   **Resistance Temperature Detectors (RTDs):** These are the most common type of resistance thermometers. They are constructed using pure metals like platinum, nickel, or copper.
    *   **Thermistors:** These are semiconductor devices whose resistance changes significantly with temperature. They are categorized as:
        *   **Negative Temperature Coefficient (NTC) Thermistors:** Resistance decreases as temperature increases.
        *   **Positive Temperature Coefficient (PTC) Thermistors:** Resistance increases as temperature increases.

---

### 2. Resistance Temperature Detectors (RTDs)

RTDs are highly accurate and stable sensors, making them preferred for demanding applications.

*   **Materials Used:**
    *   **Platinum (Pt):** Most common and preferred due to its high accuracy, stability, and wide operating temperature range (-200°C to 850°C). Standardized as Pt100 (100 ohms at 0°C).
    *   **Nickel (Ni):** Less expensive than platinum but has a more limited temperature range (-100°C to 300°C) and is prone to drift over time.
    *   **Copper (Cu):** Low cost and good linearity over a limited range (-100°C to 150°C), but susceptible to oxidation.

*   **Construction:**
    *   **Wire-wound RTDs:** A thin wire of the sensing material is wound around a ceramic bobbin or core. This offers good accuracy but can be susceptible to vibration.
    *   **Thin-film RTDs:** A thin layer of platinum is deposited onto a ceramic substrate. These are more compact, less expensive, and more resistant to vibration than wire-wound types.

*   **Resistance-Temperature Relationship (for Platinum RTDs):**
    The relationship between resistance ($R$) and temperature ($T$) for platinum is often approximated by the Callendar-Van Dusen equation:

    $R(T) = R_0 [1 + \alpha T + \beta T^2 + \gamma (T-100°C)^3]$

    For temperatures below 0°C, a simpler form is often used:

    $R(T) = R_0 (1 + \alpha T + \beta T^2)$

    Where:
    *   $R(T)$: Resistance at temperature $T$ (°C)
    *   $R_0$: Resistance at 0°C (e.g., 100 $\Omega$ for Pt100)
    *   $\alpha$: Temperature coefficient of resistance (TCR) for platinum, approximately 0.00385 °C⁻¹
    *   $\beta$: A second-order coefficient (typically around 5.775 x 10⁻⁷ °C⁻²)
    *   $\gamma$: A third-order coefficient (for wider temperature ranges)

    **Important Note:** The value of $\alpha$ for platinum is standardized by the International Electrotechnical Commission (IEC) as 0.00385 °C⁻¹.

*   **Types of RTD Circuits:**
    *   **Two-Wire RTD:** Simplest but suffers from lead wire resistance, which introduces errors.
    *   **Three-Wire RTD:** Uses a third wire to compensate for lead wire resistance, improving accuracy. One lead wire carries the current to the RTD, and the other two carry the voltage drop across the RTD back to the bridge circuit.
    *   **Four-Wire RTD:** Offers the highest accuracy by using separate current and voltage leads, eliminating lead resistance effects entirely.

*   **Advantages of RTDs:**
    *   High accuracy and repeatability.
    *   Good long-term stability.
    *   Wide operating temperature range.
    *   Linearity over a reasonable temperature range.

*   **Disadvantages of RTDs:**
    *   More expensive than thermocouples or thermistors.
    *   Slower response time compared to thermocouples.
    *   Self-heating can occur due to the current passing through the resistor, leading to measurement errors.

---

### 3. Thermistors

Thermistors are semiconductor devices with a much larger change in resistance for a given temperature change compared to RTDs.

*   **Materials Used:** Metal oxides (e.g., nickel, manganese, cobalt, iron) sintered together.

*   **Types:**
    *   **NTC (Negative Temperature Coefficient) Thermistors:**
        *   **Princ:** As temperature increases, more charge carriers are released, leading to a significant decrease in resistance.
        *   **Applications:** Temperature sensing, current limiting, inrush current suppression.
        *   **Resistance-Temperature Relationship:** Typically described by the Steinhart-Hart equation:
            $1/T = A + B \ln(R) + C (\ln(R))^3$
            Where:
            *   $T$: Temperature in Kelvin
            *   $R$: Resistance in Ohms
            *   $A, B, C$: Empirical coefficients specific to the thermistor.
            A simpler form, the Beta (β) equation, is often used:
            $R(T) = R_0 \exp[\beta (1/T - 1/T_0)]$
            Where:
            *   $R_0$: Resistance at reference temperature $T_0$
            *   $\beta$: Thermistor constant (material property)
            *   $T, T_0$: Absolute temperatures (Kelvin).

    *   **PTC (Positive Temperature Coefficient) Thermistors:**
        *   **Princ:** At a specific "Curie temperature," the material undergoes a phase transition, causing a sharp increase in resistance.
        *   **Applications:** Overcurrent protection (self-resetting fuses), self-regulating heaters.

*   **Advantages of Thermistors:**
    *   High sensitivity (large change in resistance for a small temperature change).
    *   Fast response time.
    *   Low cost.
    *   Compact size.

*   **Disadvantages of Thermistors:**
    *   Non-linear resistance-temperature relationship (especially NTCs).
    *   Limited temperature range compared to RTDs.
    *   Lower accuracy and stability than RTDs.
    *   More susceptible to self-heating.

---

### 4. Measurement Techniques and Instrumentation

The change in resistance of a resistance thermometer needs to be converted into a usable electrical signal (e.g., voltage or current) for display or processing.

*   **Wheatstone Bridge:** The most common circuit used to measure the resistance change.
    *   **Princ:** A four-resistor network where an unknown resistance is measured by balancing the bridge. The resistance change of the RTD unbalances the bridge, producing a voltage output proportional to the temperature.
    *   **Circuit Configuration:** The RTD is usually placed in one arm of the bridge.
    *   **Output:** The output voltage of the bridge is typically small and requires amplification.

*   **Signal Conditioning:**
    *   **Amplification:** The small output voltage from the bridge is amplified to a usable level.
    *   **Linearization:** For non-linear sensors like thermistors, linearization circuits may be used.
    *   **Filtering:** To remove noise from the signal.

*   **Instrumentation:**
    *   **Digital Multimeters (DMMs):** Can measure resistance directly, but may not be suitable for continuous monitoring or integration into control systems.
    *   **Temperature Controllers/Indicators:** Devices specifically designed to read temperature from RTDs or thermistors, often with built-in signal conditioning and display.
    *   **Data Acquisition Systems (DAQ):** Used to acquire and process temperature data from multiple sensors.

---

### 5. Applications and Selection Criteria

Resistance thermometers are used in a vast array of applications where accurate and reliable temperature measurement is crucial.

*   **Applications:**
    *   **Industrial Process Control:** Monitoring temperatures in chemical reactors, pipelines, furnaces, and manufacturing equipment.
    *   **HVAC Systems:** Controlling heating and cooling in buildings.
    *   **Automotive Industry:** Engine temperature monitoring, climate control.
    *   **Medical Devices:** Incubators, patient monitoring systems.
    *   **Food and Beverage Industry:** Temperature control during processing and storage.
    *   **Aerospace:** Environmental control, engine monitoring.

*   **Selection Criteria:**
    *   **Required Accuracy:** RTDs are chosen for high accuracy applications.
    *   **Temperature Range:** The operating temperature of the application must match the sensor's capabilities.
    *   **Response Time:** For fast-changing temperatures, a faster sensor is needed (e.g., thermistor or thin-film RTD).
    *   **Cost:** Thermistors are generally more cost-effective for less demanding applications.
    *   **Environment:** Harsh environments might require specialized RTD constructions.
    *   **Linearity:** If a linear output is critical, RTDs are preferred over thermistors.
    *   **Power Dissipation:** Self-heating must be considered, especially in low-power applications.

---

### 6. Learning Outcomes Alignment and Course Outcomes

This topic directly supports several learning outcomes and course outcomes:

*   **Learning Outcomes:**
    *   All learning outcomes related to understanding the principles, construction, working, and application of resistance thermometers are covered.

*   **Course Outcomes:**
    *   **CO1 (K2):** Identifying and classifying RTDs and thermistors based on their principles and characteristics.
    *   **CO2 (K3):** While not directly measuring displacement or strain, understanding the resistance change of these sensors is a precursor to measuring temperature accurately.
    *   **CO3 (K5):** This topic directly addresses the measurement of temperature, which is a key physical parameter alongside force and pressure.
    *   **CO4 (K4):** "To acquire the ability to measure flow and temperature..." - this topic provides the foundational knowledge and understanding for temperature measurement.
    *   **CO5 (K3):** Selecting the appropriate resistance thermometer (RTD vs. thermistor, platinum vs. nickel) based on application requirements.

---

### 7. Important Points to Remember

*   **RTDs** (especially platinum) offer high accuracy and stability but are more expensive and slower.
*   **Thermistors** are highly sensitive, fast, and inexpensive but are non-linear and less stable.
*   The **thermoresistive effect** is the core principle.
*   **Platinum RTDs (Pt100)** are standardized with $\alpha \approx 0.00385$ °C⁻¹.
*   **Wheatstone bridges** are commonly used to convert resistance changes into voltage signals.
*   **Lead wire resistance** is a significant error source for two-wire RTDs, addressed by three- and four-wire configurations.
*   **Self-heating** is a concern for both RTDs and thermistors due to the current used for measurement.
*   Careful **selection criteria** (accuracy, temperature range, cost, environment) are crucial for choosing the right sensor.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary principle of operation for a resistance thermometer?
*(Answer: The thermoresistive effect, where the electrical resistance of a material changes predictably with temperature.)*

**Question 2:**
Compare and contrast RTDs and Thermistors based on their accuracy, sensitivity, and typical applications.
*(Answer: RTDs are highly accurate and stable, used in precise applications like industrial process control. Thermistors are highly sensitive and fast but less accurate and stable, used in applications like consumer electronics and overcurrent protection.)*

**Question 3:**
A Pt100 RTD is used to measure temperature. If its resistance is 160 $\Omega$ at a certain temperature, estimate the temperature. Assume the Callendar-Van Dusen equation can be simplified to $R(T) = R_0 (1 + \alpha T)$ with $R_0 = 100 \Omega$ and $\alpha = 0.00385$ °C⁻¹.
*(Solution:
$R(T) = R_0 (1 + \alpha T)$
$160 = 100 (1 + 0.00385 T)$
$1.6 = 1 + 0.00385 T$
$0.6 = 0.00385 T$
$T = 0.6 / 0.00385 \approx 155.84$ °C)*

**Question 4:**
Why are three-wire and four-wire RTD circuits preferred over two-wire circuits for accurate measurements?
*(Answer: Three-wire and four-wire circuits compensate for the resistance of the connecting wires, which can otherwise lead to significant measurement errors, especially over long distances or with changing ambient temperatures.)*

**Question 5:**
Describe a common application for an NTC thermistor and explain why it is suitable for that application.
*(Answer: An NTC thermistor can be used for inrush current limiting in electronic circuits. When the circuit is powered on, the thermistor's resistance is high, limiting the initial current surge. As it heats up due to the current, its resistance drops significantly, allowing normal operation with minimal power loss.)*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References

*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)* (4th ed.). McGraw Hill. (Refer to chapters on temperature measurement and sensor principles).
*   **Sawhney, A.K., & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control* (12th ed.). Dhanpat Rai & Co. (Refer to chapters on temperature measurement techniques).
*   **Nakra, B.C., & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis* (3rd ed.). Tata McGraw Hill. (Refer to chapters covering resistance thermometers and their circuits).
*   **Singh, S.K. (2009).** *Industrial Instrumentation and Control*. McGraw Hill Education (India). (Refer to sections on temperature sensors in industrial contexts).
*   **Rajput, R. K. (2006).** *Mechanical Measurements and Instrumentation*. S K Kataria & Sons. (Refer to chapters on thermal measuring instruments).

---
This concludes the study notes for Resistance Thermometers as part of Flow Measurement: Gross Flow Rate Measuring Meters in Engineering Instruments and Measurements.