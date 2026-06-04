---
title: "low pressure gauges such as McLeod gauge"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446431c"
status: "completed"
scrapedAt: "2026-05-20T18:11:45.378Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

### Topic: Low Pressure Gauges - McLeod Gauge

**Course Outcomes Alignment:**

*   **CO3:** To examine various devices to measure pressure accurately using a variety of devices and techniques (Knowledge Level: K5). This topic directly addresses the measurement of pressure, a fundamental force-related parameter.
*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2). Understanding the operation and limitations of the McLeod gauge contributes to classifying and selecting pressure measurement devices.
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3). Knowledge of the McLeod gauge's capabilities and limitations aids in selecting appropriate vacuum measurement systems.

**Learning Outcomes Covered:**

*   Understanding the principle of operation of low pressure gauges, specifically the McLeod gauge.
*   Identifying the construction and working of a McLeod gauge.
*   Analyzing the advantages and disadvantages of a McLeod gauge.
*   Recognizing the applications of McLeod gauges in various engineering fields.
*   Understanding the calibration and limitations of McLeod gauges.

---

### 1. Introduction to Low Pressure Measurement

*   **Definition of Low Pressure:** In engineering, low pressure typically refers to pressures significantly below atmospheric pressure (approximately $101.325 \, \text{kPa}$ or $1 \, \text{atm}$). This range can extend from atmospheric pressure down to ultra-high vacuum ($<10^{-6} \, \text{Pa}$).
*   **Importance of Low Pressure Measurement:**
    *   **Vacuum Technology:** Essential in processes like vacuum deposition, semiconductor manufacturing, freeze-drying, and particle accelerators.
    *   **Scientific Research:** Critical for experiments in physics, chemistry, and material science.
    *   **Industrial Processes:** Used in distillation, evaporation, and plasma processing.
*   **Challenges in Low Pressure Measurement:**
    *   Low force exerted by the gas molecules.
    *   Sensitivity to ambient temperature variations.
    *   Outgassing from materials used in the gauge.
    *   The nature of the gas itself can affect the measurement.

---

### 2. The McLeod Gauge

The McLeod gauge is a **mechanical vacuum gauge** used for measuring low pressures. It operates on the principle of **compressing a known volume of gas into a smaller volume and then measuring the resultant pressure**.

#### 2.1 Principle of Operation

*   **Boyle's Law:** The operation of the McLeod gauge is based on Boyle's Law, which states that for a fixed mass of gas at constant temperature, the pressure and volume are inversely proportional ($PV = \text{constant}$).
*   **Gas Compression:** A known volume of gas from the system under vacuum is isolated. This isolated volume of gas is then compressed by raising a mercury column.
*   **Pressure Measurement:** When the gas is compressed to a very small volume, the pressure exerted by this gas is balanced by the height difference of the mercury columns in the gauge. This height difference is a direct measure of the original pressure of the gas in the system.

#### 2.2 Construction and Working

**Construction:**

A typical McLeod gauge consists of the following key components:

1.  **Capillary Tube (Measuring Tube):** A graduated glass tube (often of uniform bore) where the compressed gas is trapped and its volume measured.
2.  **Mercury Reservoir:** A larger bulb or reservoir containing mercury.
3.  **Movable Mercury Reservoir:** A reservoir that can be raised or lowered to control the mercury level.
4.  **Connection to Vacuum System:** A port that connects the gauge to the system whose pressure is to be measured.
5.  **Vent:** A port that can be opened to atmospheric pressure to isolate the mercury reservoir.
6.  **Fixed Mercury Reservoir:** A fixed mercury level in a companion capillary tube, used as a reference.

**Working:**

*   **Initial State (Measurement):**
    *   The mercury reservoir is lowered, drawing mercury from the measuring tube. This connects the vacuum system to the measuring tube and the fixed capillary tube.
    *   The mercury level in both the measuring tube and the fixed capillary tube is at the same level, indicating that the pressure in the trapped gas is the same as the system pressure.
    *   The mercury level in the measuring tube is typically set to a specific marking (e.g., the start of the capillary).

*   **Compression Stage:**
    *   The movable mercury reservoir is slowly raised. This traps a known volume of gas from the vacuum system into the measuring tube.
    *   As the mercury level rises, it compresses the trapped gas.

*   **Measurement Stage:**
    *   The movable mercury reservoir is raised until the mercury level in the measuring tube rises to a marked level (often aligned with the closed end of the capillary tube).
    *   At the same time, the movable mercury reservoir is adjusted such that the mercury level in the fixed capillary tube is exactly level with the mercury in the measuring tube. This ensures that the pressure of the trapped gas is being measured against the reference level.
    *   The pressure of the trapped gas is then indicated by the height of the mercury column in the measuring tube above the level in the fixed capillary tube. This height difference, often denoted by 'h', is proportional to the logarithm of the original pressure.

**Mathematical Relationship:**

Let:
*   $P$ = Initial pressure of the gas in the vacuum system.
*   $V$ = Volume of gas trapped in the measuring tube at pressure $P$. This volume is determined by the initial mercury level in the measuring tube.
*   $A$ = Cross-sectional area of the capillary measuring tube.
*   $V_{capillary} = A \times l$, where $l$ is the length of the capillary tube occupied by the trapped gas.
*   $P_{compressed}$ = Pressure of the compressed gas.
*   $h$ = Height difference between the mercury column in the measuring tube and the mercury column in the fixed capillary tube.
*   $P_{atm}$ = Atmospheric pressure.

When the mercury is raised to trap the gas and compress it, the total pressure at the level of the mercury in the fixed capillary tube is $P + \rho g h$, where $\rho$ is the density of mercury and $g$ is the acceleration due to gravity.

According to Boyle's Law:
$P \times V = P_{compressed} \times V_{compressed}$

The compressed volume is the volume of the capillary tube up to the point where the mercury level is equalized in both tubes. If the mercury level in the fixed capillary tube is at a reference mark, and the mercury in the measuring tube is raised to the same level, the compressed volume is determined by the volume of gas trapped in the measuring tube.

A more practical way to express it is:
$P \times V = (P_{ref} + h) \times A \times l$

Where $P_{ref}$ is the pressure corresponding to the mercury level in the fixed capillary tube. For a well-designed gauge, the fixed capillary tube's mercury level is often set to a reference point, and the pressure is read as the difference in height 'h'.

The pressure reading on the gauge is proportional to the height $h$. The scale is usually calibrated such that $P \propto h$.

**Referencing Textbooks:**

*   **Dobelin (Measurement Systems: Applications and Design):** Discusses mechanical gauges and their principles. Emphasizes the inverse relationship between pressure and volume in gas compression.
*   **Sawhney & Sawhney (Mechanical Measurements and Instrumentation & Control):** Provides detailed constructional diagrams and working principles of various vacuum gauges, including the McLeod gauge. Explains the theoretical basis and practical considerations.
*   **Nakra & Chaudhry (Instrumentation Measurement and Analysis):** Covers the fundamental physics behind pressure measurement and the specific application of Boyle's Law in mechanical vacuum gauges like the McLeod gauge.

---

#### 2.3 Range and Accuracy

*   **Pressure Range:** McLeod gauges are typically used for measuring pressures in the **low to medium vacuum range**, generally from **100 Pa (1 Torr) down to $10^{-2}$ Pa ($10^{-4}$ Torr)**.
*   **Accuracy:** The accuracy is dependent on several factors:
    *   Precision of the capillary bore and volume measurements.
    *   Accuracy of reading the mercury height.
    *   Temperature of the mercury (affects its density).
    *   The presence of mercury vapor.
    *   Non-ideal gas behavior at very low pressures.

---

#### 2.4 Advantages of McLeod Gauge

*   **Absolute Gauge:** It is an absolute gauge as it measures pressure directly from fundamental physical principles (Boyle's Law) and does not require calibration against a reference standard for its primary operation.
*   **Independent of Gas Type:** For most practical purposes, it is insensitive to the type of gas being measured, as Boyle's Law holds true for most gases. This is a significant advantage over many other vacuum gauges.
*   **No Electrical Power Required:** It is a purely mechanical device, requiring no electrical power.
*   **Relatively Robust:** Compared to some electronic vacuum gauges, it can be quite robust if handled carefully.

---

#### 2.5 Disadvantages of McLeod Gauge

*   **Not Suitable for Continuous Monitoring:** It is a batch process instrument, requiring manual operation to take a reading. It cannot provide continuous or automatic readings.
*   **Limited to Low Pressures:** Not suitable for measuring pressures above approximately 100 Pa (1 Torr) as the compression ratio would become too large or the mercury column height would exceed practical limits.
*   **Mercury Vapor Pressure:** At very low pressures, the vapor pressure of mercury itself can introduce errors, as mercury vapor contributes to the total pressure being measured.
*   **Temperature Sensitivity:** The density of mercury is temperature-dependent, so accurate readings require knowledge of the ambient temperature.
*   **Fragile:** Being made of glass, it is susceptible to breakage.
*   **Operating Skill Required:** Requires careful manipulation of mercury to obtain accurate readings.
*   **Difficult to Automate:** Automation is complex and typically requires specialized servo systems for mercury level control.

---

#### 2.6 Applications of McLeod Gauge

*   **Calibration of Other Vacuum Gauges:** Its absolute nature makes it suitable for calibrating other vacuum gauges (like Pirani or thermocouple gauges) in the low-pressure range.
*   **Laboratory Research:** Widely used in scientific laboratories for vacuum experiments where precise measurements are needed and continuous monitoring is not essential.
*   **Industrial Vacuum Processes:** Used in certain industrial vacuum systems, especially where accuracy is paramount and manual operation is acceptable (e.g., vacuum metallurgy, freeze-drying in niche applications).
*   **Educational Purposes:** Demonstrates fundamental principles of gas laws and vacuum measurement.

---

#### 2.7 Calibration and Limitations

*   **Calibration:** While considered an absolute gauge, the accuracy of a McLeod gauge can be affected by:
    *   **Capillary Bore Uniformity:** Any non-uniformity in the capillary bore will lead to errors.
    *   **Mercury Purity and Temperature:** Impurities in mercury or significant temperature variations can affect density and vapor pressure.
    *   **Leakage:** Leaks in the system can lead to erroneous low-pressure readings.
    *   **Outgassing:** Outgassing from the glass walls can contribute to measured pressure.
*   **Limitations:**
    *   **Measurement of Non-Condensable Gases:** Assumes the gas is non-condensable at the operating temperature and pressure. Condensable vapors (like water vapor) can affect readings.
    *   **Mercury Vapor Contribution:** At pressures below $10^{-4}$ Pa, the mercury vapor pressure becomes significant and can lead to overestimation of the system pressure.
    *   **Response Time:** Not instantaneous, requiring time for the mercury to settle and the gas to reach thermal equilibrium.

---

### 3. Practice Questions and Answers

**Q1. What is the fundamental principle on which the McLeod gauge operates?**
    a) Archimedes' Principle
    b) Boyle's Law
    c) Bernoulli's Principle
    d) Pascal's Law

**Answer:** b) Boyle's Law. The McLeod gauge uses the inverse relationship between pressure and volume of a gas at constant temperature.

**Q2. In what range of pressures is a McLeod gauge typically used?**
    a) High vacuum ($< 10^{-6} \, \text{Pa}$)
    b) Medium vacuum ($1 \, \text{Pa}$ to $100 \, \text{Pa}$)
    c) Low vacuum ($100 \, \text{Pa}$ to $10^{5} \, \text{Pa}$)
    d) Absolute pressure ($> 10^{5} \, \text{Pa}$)

**Answer:** b) Medium vacuum ($1 \, \text{Pa}$ to $100 \, \text{Pa}$) or more precisely, from about $10^2 \, \text{Pa}$ down to $10^{-2} \, \text{Pa}$. Option (b) is the closest common range.

**Q3. State one major advantage of the McLeod gauge over other vacuum gauges.**
    a) It requires electrical power.
    b) It is suitable for continuous monitoring.
    c) It is an absolute gauge and independent of gas type.
    d) It can measure very high vacuum accurately.

**Answer:** c) It is an absolute gauge and independent of gas type.

**Q4. What is a significant disadvantage of using a McLeod gauge at very low pressures (e.g., below $10^{-4} \, \text{Pa}$)?**
    a) The mercury column becomes too short to measure.
    b) The mercury vapor pressure becomes significant.
    c) The gauge requires external cooling.
    d) It is highly sensitive to external magnetic fields.

**Answer:** b) The mercury vapor pressure becomes significant.

**Q5. Briefly explain the role of the movable mercury reservoir in a McLeod gauge.**
    a) To provide a constant reference pressure.
    b) To trap a known volume of gas and compress it.
    c) To absorb any unwanted gas molecules.
    d) To measure the temperature of the vacuum system.

**Answer:** b) To trap a known volume of gas and compress it.

---

### 4. Important Points to Remember

*   **Absolute Gauge:** McLeod gauge measures pressure based on fundamental gas laws, not requiring calibration against a standard.
*   **Boyle's Law:** The core principle is the inverse relationship between pressure and volume of a gas at constant temperature.
*   **Compression Method:** It works by compressing a known volume of gas and measuring the resulting mercury column height.
*   **Pressure Range:** Effective for low to medium vacuum (approx. $10^2 \, \text{Pa}$ to $10^{-2} \, \text{Pa}$).
*   **Limitations:** Not for continuous monitoring, susceptible to mercury vapor error at ultra-low pressures, temperature sensitive.
*   **Gas Type Independence:** Generally insensitive to the type of gas being measured.
*   **Calibration Tool:** Often used for calibrating other vacuum gauges due to its absolute nature.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 5. References

*   **Dobelin, E. O. (1990).** *Measurement Systems: Applications and Design* (4th ed.). McGraw Hill.
*   **Sawhney, A. K., & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control* (12th ed.). Dhanpat Rai & Co.
*   **Nakra, B. C., & Chaudhry, K. K. (2009).** *Instrumentation Measurement and Analysis* (3rd ed.). Tata McGraw Hill.
*   **Raghavendra, N. V. (2013).** *Engineering Metrology and Measurements*. Oxford University Press. (Provides context on metrology for instrument design)
*   **Kumar, D. S. (2012).** *Mechanical Measurement and Control*. Metropolitan Publication.
*   **Singh, S. K. (2009).** *Industrial Instrumentation and Control*. McGraw Hill Education (India).

---