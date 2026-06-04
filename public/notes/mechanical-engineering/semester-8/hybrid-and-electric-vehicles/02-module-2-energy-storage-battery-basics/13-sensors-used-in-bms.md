---
title: "sensors used in BMS"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446443f"
status: "completed"
scrapedAt: "2026-05-20T18:20:50.638Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 2: Energy Storage – Battery Basics

### Topic: Sensors Used in Battery Management Systems (BMS)

This topic delves into the crucial role of various sensors employed within a Battery Management System (BMS) for hybrid and electric vehicles. Understanding these sensors is vital for ensuring safe, efficient, and long-lasting battery operation, directly contributing to the overall vehicle performance and reliability.

---

### Learning Outcomes:

*   **LO1: Identify and describe the function of key sensors used in a BMS.**
*   **LO2: Explain how sensor measurements contribute to the primary functions of a BMS (e.g., State of Charge estimation, State of Health monitoring, cell balancing, safety).**
*   **LO3: Discuss the typical placement and integration of these sensors within a battery pack.**
*   **LO4: Briefly touch upon the impact of sensor accuracy and reliability on BMS performance.**

---

### Course Outcomes Alignment:

*   **CO2: Describe various battery, charging types and battery management of Electric vehicles. (Knowledge Level: K2)**
    *   This topic directly supports CO2 by explaining the components and principles behind battery management, which is a critical aspect of EV battery systems.

---

### Key Concepts and Definitions:

*   **Battery Management System (BMS):** An electronic system that monitors and controls the battery pack's various parameters, ensuring safety, performance, and longevity. It acts as the "brain" of the battery pack.
*   **State of Charge (SoC):** The current charge level of the battery, typically expressed as a percentage of its maximum capacity.
*   **State of Health (SoH):** An indication of the battery's overall condition and its ability to deliver its rated performance compared to a new battery.
*   **Cell Balancing:** The process of equalizing the charge levels across individual cells within a battery pack to prevent overcharging or undercharging of any specific cell.
*   **Coulomb Counting:** A method of estimating SoC by integrating the current flow into and out of the battery over time.
*   **Open Circuit Voltage (OCV):** The voltage of a battery when no current is flowing. It is often correlated with SoC.
*   **Internal Resistance:** The resistance within a battery cell that impedes the flow of current. It increases with degradation.
*   **Thermal Runaway:** An uncontrolled increase in battery temperature, potentially leading to fire or explosion.

---

### 1. Temperature Sensors

Temperature is a critical parameter influencing battery performance, lifespan, and safety. BMSs use temperature sensors to monitor the battery pack's thermal state.

**Key Concepts & Functions:**

*   **Impact of Temperature:**
    *   **High Temperatures:** Accelerate degradation, reduce capacity, and increase the risk of thermal runaway.
    *   **Low Temperatures:** Reduce power output, increase internal resistance, and can lead to plating if charging too rapidly.
*   **BMS Functions Supported:**
    *   **Safety:** Detecting overheating to prevent thermal runaway.
    *   **Performance Optimization:** Adjusting charging/discharging rates based on temperature to maximize efficiency and lifespan.
    *   **SoC/SoH Estimation:** Temperature significantly affects voltage and internal resistance, so accurate temperature readings are crucial for these estimations.
    *   **Cell Balancing:** Temperature variations can influence the effectiveness of balancing.

**Types of Temperature Sensors Used:**

*   **Thermistor (Negative Temperature Coefficient - NTC):**
    *   **Description:** A type of resistor whose resistance decreases significantly with increasing temperature. They are the most common type of temperature sensor in BMSs due to their low cost, good accuracy, and wide operating range.
    *   **Working Principle:** The semiconductor material within the thermistor changes its conductivity with temperature, altering its resistance.
    *   **Placement:** Typically placed at various locations within the battery pack – on individual cells, between cells, on busbars, and in the cooling system.
    *   **Reference:** Mentioned in Husain (2nd ed.) and Ehsani et al. (3rd ed.) as essential for battery thermal management.

*   **Resistance Temperature Detector (RTD):**
    *   **Description:** Sensors whose electrical resistance increases with temperature. Platinum (Pt100) is a common material.
    *   **Working Principle:** Based on the principle that the resistance of a metal increases predictably with temperature.
    *   **Advantages:** Higher accuracy and stability than NTC thermistors, especially at higher temperatures.
    *   **Disadvantages:** More expensive and slower to respond compared to NTCs.
    *   **Placement:** Used in applications requiring higher precision or wider temperature ranges.

*   **Thermistors (Positive Temperature Coefficient - PTC):**
    *   **Description:** Resistors whose resistance increases significantly with increasing temperature above a certain threshold.
    *   **Working Principle:** Exhibit a sharp increase in resistance at a specific "Curie temperature."
    *   **Application:** Often used for overcurrent protection or as self-regulating heating elements. While less common for primary temperature monitoring, they can be used for safety cut-off.

**Example:** An NTC thermistor placed on the surface of a lithium-ion cell will measure its temperature. If this temperature exceeds a safe threshold (e.g., 60°C), the BMS can initiate protective measures like reducing the charging/discharging current or even disconnecting the battery.

**Important Point to Remember:** Multiple temperature sensors are crucial across the battery pack to capture localized hot spots.

---

### 2. Voltage Sensors

Voltage is a fundamental parameter for monitoring the state of a battery cell or pack.

**Key Concepts & Functions:**

*   **Cell Voltage:** The voltage across the terminals of a single battery cell.
*   **Pack Voltage:** The sum of individual cell voltages (series connection) or the voltage of a group of cells connected in parallel.
*   **BMS Functions Supported:**
    *   **SoC Estimation:** Voltage is a primary indicator of SoC, especially when correlated with temperature and known cell characteristics (OCV curves).
    *   **Cell Balancing:** Monitoring individual cell voltages to identify cells that are overcharged or undercharged.
    *   **Overvoltage/Undervoltage Protection:** Detecting if any cell or the pack exceeds or falls below safe voltage limits.
    *   **SoH Estimation:** Changes in voltage response under load can indicate battery degradation.

**Types of Voltage Sensors Used:**

*   **High-Precision Voltage Dividers with Analog-to-Digital Converters (ADCs):**
    *   **Description:** The most common method. A precise voltage divider network reduces the battery voltage to a level suitable for an ADC. The ADC then converts this analog voltage into a digital value that the BMS microcontroller can read.
    *   **Working Principle:** Ohm's Law and voltage division principles are applied. Accurate resistor values are critical.
    *   **Placement:** Connected directly across each individual cell, or across series strings of cells, to monitor their respective voltages.
    *   **Reference:** Essential for SoC and balancing, as detailed in Larminie & Lowry (2nd ed.) and Dhameja (2001).

*   **Dedicated Voltage Monitoring ICs:**
    *   **Description:** Integrated circuits specifically designed for battery voltage monitoring, often incorporating ADCs and calibration features.
    *   **Advantages:** High accuracy, integrated functionality, and reduced component count.
    *   **Placement:** Similar to voltage dividers, connected across cells or cell groups.

**Example:** The BMS might read the voltage of each of the 96 cells in a Nissan Leaf battery pack. If one cell's voltage drops significantly lower than others during discharge, the BMS knows it's a potential issue.

**Important Point to Remember:** The accuracy of voltage measurement directly impacts the accuracy of SoC estimation and cell balancing.

---

### 3. Current Sensors

Current measurement is crucial for understanding the flow of energy into and out of the battery.

**Key Concepts & Functions:**

*   **Charging Current:** Current flowing into the battery.
*   **Discharging Current:** Current flowing out of the battery.
*   **BMS Functions Supported:**
    *   **SoC Estimation (Coulomb Counting):** By integrating the current over time, the BMS can track the amount of charge that has entered or left the battery. This is a fundamental method for SoC calculation.
    *   **Power Calculation:** Current multiplied by voltage gives the instantaneous power.
    *   **Overcurrent Protection:** Detecting excessive charging or discharging currents that could damage the battery.
    *   **SoH Estimation:** Changes in battery internal resistance affect current draw and voltage drop under load, which can be used to infer SoH.

**Types of Current Sensors Used:**

*   **Shunt Resistors:**
    *   **Description:** A low-value, high-precision resistor placed in series with the main current path (e.g., the positive terminal of the battery pack). The small voltage drop across the shunt resistor is proportional to the current flowing through it (Ohm's Law: V = I * R).
    *   **Working Principle:** Based on Ohm's Law. The voltage drop is measured by a differential amplifier and then digitized by an ADC.
    *   **Advantages:** Relatively simple, low cost, and can handle high currents.
    *   **Disadvantages:** Generates heat (power dissipation), can be affected by temperature drift, and requires careful selection of the shunt resistor value to balance voltage drop and power loss.
    *   **Placement:** Typically placed in the main positive or negative path of the battery pack to measure the total pack current.
    *   **Reference:** A staple in battery current sensing, discussed in most EV battery textbooks, including Denton (2nd ed.).

*   **Hall Effect Sensors:**
    *   **Description:** These sensors measure the magnetic field produced by the current flowing through a conductor. The strength of the magnetic field is proportional to the current.
    *   **Working Principle:** Based on the Hall effect, where a voltage (Hall voltage) is generated across a conductor carrying current when placed in a perpendicular magnetic field.
    *   **Types:**
        *   **Open-Loop Hall Effect Sensors:** Simpler, less expensive, but generally less accurate, especially at low currents.
        *   **Closed-Loop Hall Effect Sensors (or Magneto-Resistive Sensors):** Use a feedback mechanism to create a counter-magnetic field, cancelling the field from the current. This results in much higher accuracy and linearity across a wider current range, including zero current.
    *   **Advantages:** Non-contact measurement (no resistance in the main path, no power loss, no self-heating), can measure AC and DC currents, good isolation. Closed-loop versions offer excellent accuracy.
    *   **Disadvantages:** More expensive than shunts, can be sensitive to external magnetic fields (requiring shielding).
    *   **Placement:** Clamped around the main power cables of the battery pack.
    *   **Reference:** Emphasized for their accuracy and non-contact nature in Ehsani et al. (3rd ed.) and Dhameja (2001).

*   **Current Transducers:**
    *   **Description:** Devices that convert a current into a proportional voltage or current output. Often incorporate sophisticated sensing technologies like Hall effect or flux gate magnetometry.
    *   **Advantages:** High accuracy, bandwidth, and isolation.
    *   **Placement:** Installed in series with the main current path.

**Example:** A shunt resistor might measure the 150A current flowing out of the battery when the electric motor is accelerating the vehicle. The BMS integrates this current over time to update the SoC.

**Important Point to Remember:** Accurate current sensing is fundamental for Coulomb counting and overcurrent protection.

---

### 4. Other Important Sensors (Less Common but Crucial in Some BMS Architectures)

*   **Gas Sensors:**
    *   **Description:** Used to detect the presence of gases that might be released by battery cells under fault conditions (e.g., hydrogen, volatile organic compounds from lithium-ion cells).
    *   **BMS Functions Supported:** Primarily for safety, detecting internal cell failures or venting.
    *   **Placement:** Within the battery pack enclosure, near cells that are prone to venting.
    *   **Reference:** Mentioned in advanced BMS discussions in Ehsani et al. (3rd ed.).

*   **Isolation Sensors:**
    *   **Description:** Monitor the integrity of the electrical isolation between the high-voltage battery pack and the vehicle chassis or other low-voltage systems.
    *   **BMS Functions Supported:** Critical safety function to detect insulation breakdown, preventing electric shock.
    *   **Working Principle:** Often use voltage dividers or capacitive coupling to sense small leakage currents or voltage differences.
    *   **Placement:** Between the high-voltage battery terminals and the chassis ground.

*   **Humidity Sensors:**
    *   **Description:** Measure the humidity levels inside the battery pack enclosure.
    *   **BMS Functions Supported:** High humidity can lead to corrosion and affect electronic components, potentially impacting BMS reliability.
    *   **Placement:** Inside the battery pack enclosure.

---

### Sensor Integration and Placement

*   **Cell-Level Monitoring:** Critical for lithium-ion batteries where imbalances are common. Voltage and temperature sensors are typically placed directly on or very near each individual cell.
*   **String/Module-Level Monitoring:** For larger battery packs, monitoring might occur at the level of series strings of cells or entire modules.
*   **Pack-Level Monitoring:** Current sensors are almost always at the pack level to measure the total energy flow. Pack voltage and overall temperature are also monitored.
*   **Wiring Harnesses:** Sensors are connected to the BMS microcontroller via dedicated wiring harnesses. Careful routing and shielding are necessary to prevent electromagnetic interference (EMI).
*   **Connectors:** Robust connectors are used to ensure reliable connections, especially in harsh automotive environments (vibration, temperature extremes).

---

### Impact of Sensor Accuracy and Reliability

*   **SoC Accuracy:** Inaccurate voltage or current measurements lead to significant errors in SoC estimation, potentially causing the driver to experience unexpected power loss or misjudging the remaining range.
*   **SoH Accuracy:** Incorrect temperature or voltage readings under load can lead to inaccurate SoH assessment, affecting the BMS's ability to optimize battery usage and predict remaining useful life.
*   **Cell Balancing Efficiency:** Poorly measured cell voltages result in ineffective cell balancing, leading to premature degradation of cells and reduced overall pack capacity.
*   **Safety:** Inaccurate temperature or isolation sensors could fail to detect hazardous conditions, compromising the safety of the vehicle and its occupants.
*   **Reliability:** Sensors must be robust enough to withstand the demanding automotive environment (vibration, thermal cycling, humidity). Sensor failure can cripple BMS functionality.

---

### Practice Questions and Answers

**Question 1:** Which type of temperature sensor is most commonly used in EV BMS due to its cost-effectiveness and good accuracy?
    a) RTD
    b) PTC Thermistor
    c) NTC Thermistor
    d) Hall Effect Sensor

**Answer:** c) NTC Thermistor

**Explanation:** NTC thermistors offer a good balance of accuracy, wide operating range, and cost, making them the preferred choice for general temperature monitoring in BMS. RTDs are more accurate but expensive, and PTCs are typically used for protection.

---

**Question 2:** What is the primary function of a shunt resistor in a BMS?
    a) Measuring battery pack voltage
    b) Measuring battery pack current
    c) Monitoring individual cell temperature
    d) Detecting insulation faults

**Answer:** b) Measuring battery pack current

**Explanation:** Shunt resistors are low-value resistors placed in the main current path. The voltage drop across them is proportional to the current, allowing the BMS to measure it.

---

**Question 3:** Coulomb counting for State of Charge (SoC) estimation relies heavily on accurate measurements from which sensor?
    a) Temperature Sensor
    b) Voltage Sensor
    c) Current Sensor
    d) Gas Sensor

**Answer:** c) Current Sensor

**Explanation:** Coulomb counting involves integrating current over time to track charge flow. Therefore, accurate current measurement is fundamental. While voltage is used in other SoC estimation methods, current is key for Coulomb counting.

---

**Question 4:** Why is it important to have multiple temperature sensors distributed throughout a battery pack?

**Answer:** It is important to have multiple temperature sensors to detect localized temperature variations or "hot spots" within the battery pack. Different cells or regions of the pack might experience different thermal conditions due to variations in current distribution, cooling efficiency, or internal resistance. Monitoring these localized temperatures allows the BMS to prevent thermal runaway and optimize performance by identifying and mitigating any cells that are overheating or underperforming due to temperature.

---

**Question 5:** Discuss one advantage and one disadvantage of using Hall effect sensors compared to shunt resistors for current sensing.

**Answer:**
    *   **Advantage:** Hall effect sensors offer non-contact measurement, meaning they don't introduce resistance into the main current path. This eliminates power loss and self-heating in the sensing element itself, which can be a significant advantage, especially for high-power applications.
    *   **Disadvantage:** Hall effect sensors are generally more expensive than shunt resistors. They can also be susceptible to interference from external magnetic fields, which might require additional shielding.

---

### Important Points to Remember:

*   **Redundancy and Accuracy:** BMSs often employ redundant sensors or sophisticated algorithms to compensate for sensor drift and improve overall accuracy.
*   **Automotive Grade:** All sensors must meet automotive-grade specifications for reliability and durability in harsh environmental conditions.
*   **Calibration:** Sensors often require calibration during manufacturing and potentially during the vehicle's lifetime to maintain accuracy.
*   **Interdependence:** Sensor data is often interdependent. For example, voltage measurements are temperature-compensated, and current measurements are used to refine SoC estimates derived from voltage.
*   **BMS as a System:** The effectiveness of sensors is realized through their integration and processing by the BMS microcontroller, which applies algorithms to interpret the data and make control decisions.

---

This comprehensive overview of sensors used in BMS provides a strong foundation for understanding how critical parameters are monitored and managed within electric vehicle battery systems, directly supporting the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
