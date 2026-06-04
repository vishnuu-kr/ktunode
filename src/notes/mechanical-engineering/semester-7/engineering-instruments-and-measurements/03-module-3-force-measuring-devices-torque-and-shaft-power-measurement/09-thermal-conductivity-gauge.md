---
title: "Thermal conductivity gauge"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446431d"
status: "completed"
scrapedAt: "2026-05-20T18:11:46.079Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

### Topic: Thermal Conductivity Gauge

---

### 1. Introduction to Thermal Conductivity Gauges

**Context:** While this topic is listed under "Force Measuring Devices: Torque and Shaft Power Measurement," it's important to note that thermal conductivity gauges are primarily used for **pressure measurement**, specifically in vacuum applications. Their inclusion in this module might be due to indirect connections or a broader scope of "measurements" within force-related systems, but their direct application is not in force or torque measurement. This is a crucial point to understand for proper application and understanding of Course Outcome CO3.

**Definition:** A thermal conductivity gauge is a vacuum gauge that measures the pressure of a gas by detecting its ability to conduct heat away from a heated filament. The thermal conductivity of a gas is dependent on its pressure.

**Princ of Operation:**
*   A heated filament (typically tungsten or platinum) is placed in the gas whose pressure is to be measured.
*   The filament is heated to a constant temperature, or a constant current is supplied to it.
*   As the gas pressure changes, the rate at which heat is transferred from the filament to the surrounding gas changes.
*   This change in heat transfer rate affects the filament's temperature (if constant current is supplied) or the current required to maintain a constant temperature.
*   This change in filament temperature or current is then measured and calibrated to indicate the gas pressure.

**Relevance to Course Outcomes:**
*   **CO3 (Knowledge Level: K5):** This topic directly relates to CO3 by examining a device used for pressure measurement, contributing to the understanding of how various devices measure pressure accurately. While not a force gauge, pressure is intrinsically linked to force (Pressure = Force/Area), making its measurement relevant in broader engineering contexts.
*   **CO1 (Knowledge Level: K2):** Understanding the working principle and characteristics of a thermal conductivity gauge helps in classifying measuring instruments and understanding their static and dynamic characteristics (though primarily static in this context).
*   **CO5 (Knowledge Level: K3):** Understanding how this gauge functions assists in selecting appropriate measurement systems for specific applications, particularly in vacuum environments.

---

### 2. Types of Thermal Conductivity Gauges

There are two main types of thermal conductivity gauges, distinguished by their operating principle:

#### 2.1. Pirani Gauge (Constant Resistance/Constant Temperature Type)

*   **Princ:** The Pirani gauge aims to maintain the filament at a constant temperature.
    *   A heated filament (often a tungsten wire) is placed in the vacuum system.
    *   The filament is part of a Wheatstone bridge circuit.
    *   As the gas pressure changes, heat is lost from the filament to the gas.
    *   To maintain the filament at a constant resistance (and thus constant temperature), the current supplied to the bridge is adjusted.
    *   The amount of current required to maintain constant resistance is proportional to the pressure.
*   **Components:**
    *   **Sensing element:** A heated filament (e.g., tungsten, platinum) enclosed in a glass or metal envelope.
    *   **Wheatstone bridge:** Typically consists of four resistors. The sensing element is one arm, and a reference resistor (often in a sealed reference bulb at a known pressure or evacuated) is in another arm.
    *   **Power supply and amplifier:** To provide current to the bridge and amplify the unbalance signal.
    *   **Indicator:** A meter that displays the pressure.
*   **Operation:**
    1.  When the vacuum is good (low pressure), less heat is lost from the filament, and it gets very hot.
    2.  As gas molecules increase (higher pressure), they conduct heat away from the filament more efficiently, causing it to cool.
    3.  The Wheatstone bridge detects the change in the filament's resistance due to cooling.
    4.  The circuit then adjusts the current to bring the filament back to its reference temperature, and this adjustment is calibrated to show the pressure.
*   **Reference:** Dobelin's "Measurement Systems (Applications and Design)" may discuss thermal methods of measurement, which could include principles behind such gauges. Sawhney & Sawhney's "Mechanical Measurements and Instrumentation & Control" is a primary source for detailed descriptions of various gauges.

#### 2.2. Thermistor Gauge (Constant Current Type)

*   **Princ:** The thermistor gauge maintains a constant current through the sensing element (a thermistor).
    *   A thermistor (a semiconductor device whose resistance changes significantly with temperature) is used as the sensing element.
    *   A constant current is passed through the thermistor.
    *   As the gas pressure changes, the heat loss from the thermistor changes.
    *   This change in heat loss causes the thermistor's temperature to change, which in turn changes its resistance.
    *   The change in resistance is measured and calibrated to indicate pressure.
*   **Components:**
    *   **Sensing element:** A thermistor bead or probe.
    *   **Constant current source:** To supply a stable current to the thermistor.
    *   **Resistance measurement circuit:** To measure the thermistor's resistance (e.g., by measuring the voltage drop across it).
    *   **Indicator:** A meter that displays the pressure.
*   **Operation:**
    1.  With constant current, the thermistor's temperature is determined by the balance between the heat generated by the current and the heat dissipated to the surrounding gas.
    2.  At higher pressures, more heat is dissipated, leading to a lower thermistor temperature and higher resistance.
    3.  At lower pressures, less heat is dissipated, leading to a higher thermistor temperature and lower resistance.
    4.  The change in resistance is measured and correlated to pressure.
*   **Reference:** Nakra & Chaudhry's "Instrumentation Measurement and Analysis" would be a good source for details on thermistor-based measurements and their application in pressure sensing.

---

### 3. Operating Range and Applications

*   **Operating Range:** Thermal conductivity gauges are typically used for measuring **medium to low vacuum pressures**.
    *   **Pirani Gauges:** Generally operate from approximately 10<sup>-1</sup> to 10<sup>-3</sup> Torr (or 10<sup>1</sup> to 10<sup>-1</sup> mbar, or 1 to 100 Pa).
    *   **Thermistor Gauges:** Similar range, sometimes slightly extended to higher pressures depending on the design.
*   **Limitations:**
    *   **Gas Dependency:** The thermal conductivity of gases varies significantly. Therefore, these gauges are calibrated for a specific gas (usually air or nitrogen). If measuring a different gas, the indicated pressure will be inaccurate unless a correction factor is applied. This is a critical point for understanding their limitations and selecting appropriate measurement systems (CO5).
    *   **Sensitivity at Very Low Pressures:** At very low pressures (high vacuum), the thermal conductivity of gases becomes very low, and the heat loss from the filament is primarily due to radiation, making the gauge less sensitive and accurate. For such ranges, other vacuum gauges (like ion gauges) are preferred.
    *   **Filament Burnout:** The filament can burn out if exposed to atmospheric pressure when hot.
    *   **Contamination:** Contamination of the filament can affect its thermal properties and thus the gauge's accuracy.
*   **Applications:**
    *   **Vacuum system monitoring:** In laboratories and industrial processes where medium vacuum is required.
    *   **Industrial drying and coating processes.**
    *   **Refrigeration and air conditioning systems.**
    *   **Semiconductor manufacturing.**
    *   **Scientific research.**

---

### 4. Key Concepts and Definitions

*   **Thermal Conductivity (k):** A material property that describes its ability to conduct heat. For gases, it's related to the kinetic energy of molecules and their collisions.
*   **Vacuum:** A space devoid of matter, or with a pressure significantly below atmospheric pressure.
*   **Torr:** A unit of pressure, approximately equal to 1/760 of an atmosphere (1 Torr ≈ 133.322 Pa).
*   **Pascal (Pa):** The SI unit of pressure.
*   **mbar:** Millibar, another common unit of pressure (1 mbar = 100 Pa).
*   **Wheatstone Bridge:** An electrical circuit used to measure an unknown resistance by balancing two legs of the bridge, one leg of which includes the unknown component.
*   **Thermistor:** A type of resistor whose resistance is strongly dependent on temperature, more so than in standard resistors.
*   **Gas Dependency:** The phenomenon where the measurement of a gauge is influenced by the type of gas being measured, due to variations in their physical properties like thermal conductivity.

---

### 5. Comparison with Other Vacuum Gauges (Brief Mention)

While not the primary focus, understanding the context helps:
*   **Mechanical Gauges (e.g., Bourdon tube):** Measure pressure relative to atmospheric or a reference pressure. Suitable for higher pressures.
*   **Capacitance Manometers:** Measure pressure based on the change in capacitance between a diaphragm and a fixed plate. Accurate over a wide range, including high vacuum.
*   **Ionization Gauges (Hot Cathode, Cold Cathode):** Used for very low pressures (high vacuum). They ionize gas molecules and measure the ion current.

Thermal conductivity gauges fit into the medium vacuum range, bridging the gap between mechanical gauges and ionization gauges.

---

### 6. Important Points to Remember

*   **Primary Application:** **Pressure measurement**, not force or torque.
*   **Operating Principle:** Based on the **thermal conductivity of gases**, which changes with pressure.
*   **Types:** Pirani (constant temperature/resistance) and Thermistor (constant current).
*   **Gas Dependency:** Accuracy is significantly affected by the type of gas. Always calibrate or correct for the specific gas.
*   **Range:** Best suited for **medium to low vacuum** (e.g., 10<sup>-1</sup> to 10<sup>-3</sup> Torr).
*   **Filament Integrity:** Sensitive to filament burnout at atmospheric pressure.

---

### 7. Practice Questions and Exercises

**Question 1:**
A thermal conductivity gauge is used to measure the pressure in a vacuum chamber. The gauge is calibrated for air. If the gas in the chamber is changed to helium, what is the expected effect on the indicated pressure compared to the actual pressure? Explain why.

**Answer:**
Helium has a significantly higher thermal conductivity than air. A thermal conductivity gauge indicates pressure based on the rate of heat loss from its sensing element.
*   At a given actual pressure, helium will conduct heat away from the filament *more effectively* than air.
*   The gauge will interpret this increased heat loss as a *higher pressure*.
*   Therefore, the indicated pressure will be **higher** than the actual pressure.

**Question 2:**
Which type of thermal conductivity gauge operates by adjusting the current to maintain a constant filament resistance?
a) Thermistor Gauge
b) Pirani Gauge
c) Capacitance Manometer
d) Ionization Gauge

**Answer:**
b) Pirani Gauge

**Question 3:**
What is the typical operating pressure range for a thermal conductivity gauge?
a) High vacuum (below 10⁻⁶ Torr)
b) Medium vacuum (10⁻¹ to 10⁻³ Torr)
c) Atmospheric pressure to low vacuum (100 to 1 Torr)
d) Ultra-high vacuum (below 10⁻⁹ Torr)

**Answer:**
b) Medium vacuum (10⁻¹ to 10⁻³ Torr)

**Question 4:**
Discuss the primary limitation of thermal conductivity gauges that makes them unsuitable for precise measurements in a wide variety of gas environments without recalibration or correction. Relate this to CO5.

**Answer:**
The primary limitation is **gas dependency**. The thermal conductivity of gases varies significantly (e.g., Helium > Hydrogen > Air > Nitrogen > Argon > CO2). A thermal conductivity gauge interprets heat loss due to gas molecules. Since different gases remove heat at different rates for the same pressure, the gauge calibration for one gas (e.g., air) will not be accurate for another gas. This means that for precise measurements across different gases, the gauge must either be recalibrated for each gas or a known correction factor must be applied. This understanding is crucial for **CO5: To select measurement system for engineering applications**, as it dictates when a thermal conductivity gauge is an appropriate choice and what precautions are necessary.

---

### 8. Referencing Textbooks and Course Outcomes

*   **Dobelin, E.O. "Measurement Systems (Applications and Design)":** While specific details on thermal conductivity gauges might be sparse in older editions concerning modern implementations, its foundational principles of measurement, heat transfer in sensing elements, and bridge circuits are highly relevant. Chapters on thermal sensing or principles of measurement could offer context.
*   **Sawhney & Sawhney, A.K. & Puneet Sawhney. "Mechanical Measurements and Instrumentation & Control":** This is a core textbook for this subject. Expect detailed descriptions of Pirani and Thermistor gauges, their construction, working principles, electrical circuits, calibration procedures, and applications. This text directly supports CO1, CO3, and CO5.
*   **Nakra & Chaudhry, B.C. & K.K. Chaudhry. "Instrumentation Measurement and Analysis":** This book likely provides a strong theoretical background on thermal properties of gases, thermistors, and the physics behind such measurements, directly contributing to the understanding required for CO1 and CO3.

By studying this topic, students will enhance their understanding of:
*   **CO1:** Classifying pressure measuring instruments and their operating principles.
*   **CO3:** Examining a specific device used for pressure measurement.
*   **CO5:** Recognizing the limitations and application scope of this gauge when selecting measurement systems.

---
This concludes the study notes for the Thermal Conductivity Gauge. Remember to cross-reference these notes with your textbooks for a more in-depth understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
