---
title: "Bore diameter measurement"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463708"
status: "completed"
scrapedAt: "2026-05-20T18:01:30.124Z"
---
# Mechanical Engineering Lab - Module 1: Calibration & Measurement

## Topic: Bore Diameter Measurement

### 1. Introduction to Bore Diameter Measurement

**Understanding Bore Diameter:**
A bore diameter refers to the internal diameter of a cylindrical hole or tube. Accurate measurement of bore diameter is crucial in various engineering applications, including the manufacturing of engine cylinders, pipes, bearings, and firearm barrels. Deviations from the specified bore diameter can lead to improper fitting, increased wear, reduced efficiency, and premature failure of components.

**Importance in Engineering:**
*   **Interchangeability:** Ensures parts can be assembled without custom fitting.
*   **Functionality:** Critical for proper sealing, fluid flow, and load bearing.
*   **Performance:** Affects engine power, fuel efficiency, and vibration levels.
*   **Wear and Durability:** Influences the lifespan of components.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Choosing the appropriate instrument for bore diameter measurement based on required accuracy and accessibility.
*   **CO2 (K3):** Determining the dimensional accuracy of components by measuring their bore diameters.

### 2. Instruments for Bore Diameter Measurement

This section will focus on instruments that can be used for bore diameter measurement, linking them to the calibration covered in Module 1.

#### 2.1 Vernier Caliper

**Key Concepts & Definitions:**
*   **Vernier Caliper:** A precision measuring instrument used to measure external dimensions, internal dimensions, and depth.
*   **Main Scale:** The fixed scale on the caliper.
*   **Vernier Scale:** The sliding scale that allows for finer readings.
*   **Least Count (LC):** The smallest measurement the vernier caliper can accurately measure.
    *   *Formula:* LC = Value of smallest division on main scale / Total number of divisions on vernier scale.
*   **Inside Jaws:** The upper jaws of the caliper are used for measuring internal diameters.

**How to Measure Bore Diameter with Vernier Caliper:**
1.  **Calibration Check:** Ensure the vernier caliper is properly calibrated. When the jaws are fully closed, the zero mark of the vernier scale should coincide with the zero mark of the main scale.
2.  **Insertion:** Carefully insert the inside jaws of the vernier caliper into the bore.
3.  **Expansion:** Gently open the jaws until they firmly touch the inner walls of the bore.
4.  **Withdrawal:** Carefully withdraw the caliper without disturbing the jaw setting.
5.  **Reading:**
    *   Read the main scale reading (MSR) just before the zero mark of the vernier scale.
    *   Find the vernier scale division that perfectly coincides with a main scale division. Multiply this vernier scale reading (VSR) by the least count of the caliper.
    *   Total reading = MSR + (VSR × LC).

**Limitations for Bore Measurement:**
*   **Accuracy:** Generally less accurate than micrometers for precise measurements.
*   **Accessibility:** Can be difficult to use in tight or deep bores where the jaws cannot reach the bottom.
*   **Contact Point:** The rounded end of the inside jaws can lead to slight inaccuracies, especially in smaller bores.

**Reference (Shotbolt & Gayler):** Chapter 4 "The Vernier Caliper" provides detailed information on the construction, working principles, and reading of vernier calipers. It also discusses their applications, including internal measurements.

#### 2.2 Micrometer (Inside Micrometer/Bore Gauge)

**Key Concepts & Definitions:**
*   **Micrometer:** A precision measuring instrument that uses a calibrated screw to measure small distances very accurately.
*   **Inside Micrometer:** Specifically designed for measuring internal diameters. They typically have a U-shaped frame with a measuring spindle and an anvil.
*   **Bore Gauge:** A specialized instrument for measuring bore diameters, often consisting of a handle, a measuring rod, and interchangeable anvils of different sizes.
*   **Thimble:** The rotating part with a graduated scale for fine readings.
*   **Sleeve:** The fixed barrel with the main scale.
*   **Anvil:** The fixed measuring surface.
*   **Spindle:** The movable measuring surface.
*   **Ratchet Stop:** Ensures consistent measuring force.

**How to Measure Bore Diameter with Inside Micrometer/Bore Gauge:**
1.  **Calibration Check:**
    *   **Inside Micrometer:** Ensure the spindle and anvil are clean and touch each other when the micrometer is closed. Check that the zero mark on the thimble aligns with the datum line on the sleeve.
    *   **Bore Gauge:** The calibration involves selecting the correct anvil size to match the bore diameter approximately. This is often done by setting the bore gauge against a known standard (e.g., a ring gauge or a micrometer reading).
2.  **Selection (Bore Gauge):** Choose the appropriate anvil for the bore gauge that is slightly smaller than the expected bore diameter.
3.  **Insertion & Setting:**
    *   **Inside Micrometer:** Insert the measuring surfaces into the bore. Rotate the thimble until the spindle touches one side of the bore and the anvil touches the opposite side.
    *   **Bore Gauge:** Insert the bore gauge into the bore. Expand the measuring rod until it touches both sides of the bore. Lock the measuring rod using the locking mechanism.
4.  **Reading:**
    *   **Inside Micrometer:** Read the main scale on the sleeve, then the thimble scale. Total reading = Sleeve Reading + (Thimble Reading × LC). The Least Count of a micrometer is typically 0.01 mm or 0.001 inch.
    *   **Bore Gauge:** Once locked, the bore gauge is removed and the measurement is taken using an external micrometer or a vernier caliper against the extended measuring rod.

**Advantages for Bore Measurement:**
*   **High Accuracy:** Significantly more accurate than vernier calipers.
*   **Consistent Force:** Ratchet stop ensures uniform pressure, reducing measurement error.
*   **Reach:** Can measure in deeper bores compared to standard vernier calipers.

**Reference (Sharp & Hume):** Chapter 5 "The Micrometer" elaborates on the design, types (including internal micrometers), and precise measurement techniques. Chapter 7 "Measuring Internal Diameters" will cover bore gauges and their use.

#### 2.3 LVDT (Linear Variable Differential Transformer) for Bore Measurement

**Key Concepts & Definitions:**
*   **LVDT:** An electromechanical transducer that converts linear displacement into a corresponding analog electrical signal. It is a non-contact measurement device.
*   **Primary Coil (Excitation Coil):** Connected to an AC excitation source.
*   **Secondary Coils (Two):** Connected in series opposition.
*   **Core (Armature):** A movable ferromagnetic core that links the magnetic flux from the primary to the secondary coils.
*   **Differential Output:** The voltage difference between the two secondary coils. This voltage is proportional to the displacement of the core.

**Application in Bore Measurement:**
LVDTs are often used in automated inspection systems or in specialized bore gauges where continuous measurement or high-speed inspection is required. The LVDT's probe is brought into contact with the bore surface, and its displacement is measured.

**How it Works for Bore Measurement:**
1.  **Setup:** The LVDT probe is mounted on a spindle that can be moved linearly. The bore is often placed on a rotary table or fixture.
2.  **Contact:** The probe is positioned against the inner surface of the bore.
3.  **Rotation/Movement:** The bore is slowly rotated, or the LVDT probe is moved across the diameter.
4.  **Signal Processing:** As the probe moves, the displacement of the core within the LVDT changes the magnetic coupling between the coils. This induces a voltage signal that is amplified and conditioned by a signal conditioner.
5.  **Reading:** The conditioned signal is displayed on a digital readout, representing the bore diameter. The system can be calibrated using known bore standards.

**Advantages:**
*   **Non-contact (potentially):** Can be used without direct mechanical contact in some setups, reducing wear on the probe and bore.
*   **High Sensitivity & Accuracy:** Capable of very precise measurements.
*   **Linearity:** Provides a linear output over its measurement range.
*   **Robustness:** LVDTs are generally rugged and can withstand industrial environments.

**Reference (Bolton):** Chapter 8 "Transducers" discusses the principles of LVDTs, their operation, and their role in mechatronic systems. While not specifically on bore measurement, it provides the foundational knowledge for understanding LVDT applications.

#### 2.4 Dial Gauge (Dial Indicator) for Bore Measurement

**Key Concepts & Definitions:**
*   **Dial Gauge/Dial Indicator:** A mechanical instrument that measures small linear distances and surface variations.
*   **Plunger:** A movable rod that contacts the surface being measured.
*   **Gearing Mechanism:** Converts the linear motion of the plunger into rotational motion of a pointer.
*   **Dial:** Marked with a scale for reading the measurement.
*   **Least Count:** The smallest division on the dial.

**Application in Bore Measurement:**
Dial gauges are often used in conjunction with other measuring tools or in specialized bore gauges (like a snap gauge or a telescopic gauge). They are particularly useful for checking variations or out-of-roundness within a bore.

**How it Works for Bore Measurement (using a Bore Gauge or Snap Gauge):**
1.  **Setup:** A bore gauge or snap gauge is used, which has a mechanism to hold the dial gauge and a movable contact point that interacts with the bore.
2.  **Initial Setting:** The dial gauge is set to zero against a master ring gauge or a known standard, or the bore gauge is set to the approximate diameter using a micrometer.
3.  **Insertion:** The bore gauge (with the dial indicator) is inserted into the bore.
4.  **Measurement:** The contact point of the bore gauge is brought into contact with the bore wall. As the bore is rotated or the gauge is moved, the dial indicator shows any deviation from the initial setting. The maximum reading on the dial indicator indicates the bore diameter or any variation from the set dimension.

**Advantages:**
*   **Visual Indication:** Easy to interpret readings.
*   **Sensitivity:** Can detect very small variations.
*   **Cost-effective:** Generally less expensive than LVDTs.

**Limitations:**
*   **Direct Reading:** Often requires a secondary instrument (like a micrometer) to get the absolute diameter.
*   **Contact:** Relies on physical contact.

**Reference (Collett & Hope):** Chapter 6 "Dial Indicators and Gauges" would provide details on their construction, working, and various applications in metrology.

### 3. Calibration Procedures for Instruments

**Importance of Calibration:**
Calibration is essential to ensure the accuracy and reliability of measurement instruments. It involves comparing the instrument's readings against a known standard and adjusting it or documenting the deviation.

#### 3.1 Vernier Caliper Calibration

*   **Zero Error:** Close the jaws completely. The zero mark of the vernier scale should align perfectly with the zero mark of the main scale.
    *   **Positive Zero Error:** If the vernier zero is to the right of the main scale zero, the error is positive.
    *   **Negative Zero Error:** If the vernier zero is to the left of the main scale zero, the error is negative (indicated by finding the coinciding division and subtracting from the total divisions).
*   **Calibration Check:** Measure a known standard length (e.g., a gauge block) and compare the reading with the standard.
*   **Correction:** Actual reading = Observed reading - Zero error.

#### 3.2 Micrometer Calibration

*   **Zero Error:** Close the spindle and anvil. The zero mark on the thimble should align with the datum line on the sleeve.
    *   **Positive Zero Error:** Thimble zero is past the datum line.
    *   **Negative Zero Error:** Thimble zero is before the datum line.
*   **Calibration Check:** Measure a gauge block. Compare the micrometer reading with the gauge block's known size.
*   **Correction:** Actual reading = Observed reading + Zero error.

#### 3.3 LVDT Calibration

*   **Zero Setting:** Position the LVDT core at the center of its travel and set the output to zero.
*   **Linearity Check:** Move the core through its measurement range in known increments and record the output voltage. Plot displacement vs. voltage to check for linearity.
*   **Sensitivity Calculation:** Determine the voltage change per unit of displacement.
*   **Offset Adjustment:** Adjust the output to correct for any DC offset.

#### 3.4 Dial Gauge Calibration

*   **Zero Setting:** Ensure the plunger is fully retracted or extended as per the manufacturer's recommendation and set the dial to zero.
*   **Sensitivity Check:** Compare the dial indicator's reading with readings from a more precise instrument (like a micrometer) for small movements.
*   **Range Check:** Verify that the dial indicator provides accurate readings across its specified measurement range.

### 4. Practical Aspects and Error Analysis

#### 4.1 Factors Affecting Bore Diameter Measurement Accuracy

*   **Instrument Precision:** The inherent accuracy and least count of the measuring tool.
*   **Calibration Status:** Whether the instrument is recently calibrated and has no zero error.
*   **Operator Skill:** Proper technique in handling and reading the instrument.
*   **Temperature Effects:** Thermal expansion/contraction of both the workpiece and the measuring instrument.
*   **Surface Finish:** Rough surfaces can make consistent contact difficult.
*   **Bore Condition:** Ovality, taper, or presence of burrs can lead to varying readings.
*   **Alignment:** Ensuring the measuring jaws/probe are perpendicular to the bore axis.
*   **Measuring Force:** Excessive force can deform the workpiece or instrument, leading to inaccurate readings (especially with dial gauges and micrometers without a ratchet).

#### 4.2 Error Analysis

*   **Systematic Errors:** Errors that are consistent and predictable (e.g., zero error, incorrect calibration). These can often be corrected.
*   **Random Errors:** Errors that vary unpredictably (e.g., variations in operator technique, small fluctuations in temperature). These are minimized by taking multiple readings and averaging.

**Important Point to Remember:**
When measuring bore diameters with instruments that have jaws (like vernier calipers), ensure the jaws are inserted correctly and are making contact on the diameter. For internal micrometers and bore gauges, ensure the anvil/contact point is on the true diameter and not skewed.

### 5. Practice Questions and Exercises

**Question 1:**
A vernier caliper has a main scale with divisions of 0.5 mm. The vernier scale has 50 divisions that coincide with 49 main scale divisions. What is the least count of this vernier caliper? If the main scale reading is 12.5 mm and the 15th vernier scale division coincides with a main scale division, what is the measured bore diameter?

**Answer 1:**
*   **Least Count (LC):**
    *   Value of smallest division on main scale = 0.5 mm
    *   Number of divisions on vernier scale = 50
    *   LC = 0.5 mm / 50 = 0.01 mm
*   **Measured Bore Diameter:**
    *   Main Scale Reading (MSR) = 12.5 mm
    *   Vernier Scale Reading (VSR) = 15
    *   Measured Diameter = MSR + (VSR × LC) = 12.5 mm + (15 × 0.01 mm) = 12.5 mm + 0.15 mm = **12.65 mm**

**Question 2:**
Explain why a micrometer is generally preferred over a vernier caliper for precise bore diameter measurements, especially in high-tolerance applications.

**Answer 2:**
A micrometer is preferred due to its higher precision and accuracy. Its finer graduation (typically 0.01 mm or 0.001 inch) allows for more precise readings than a vernier caliper (typically 0.02 mm or 0.0005 inch). Furthermore, micrometers often feature a ratchet stop mechanism, which ensures a consistent and appropriate measuring force is applied, reducing errors caused by operator pressure variations. This consistent force is crucial for obtaining reliable measurements on the often sensitive internal surfaces of bores.

**Question 3:**
How can an LVDT be used to detect out-of-roundness in a bore?

**Answer 3:**
An LVDT can be used to detect out-of-roundness by mounting its probe on a mechanism that allows it to sweep across the diameter of the bore while the bore itself is slowly rotated or the probe is moved linearly across the diameter. As the bore is measured at different angular positions, the LVDT's linear output signal will fluctuate if the bore is not perfectly round. The variations in the output voltage, when calibrated, directly correspond to changes in the bore diameter. By analyzing these variations, one can determine the extent and nature of the out-of-roundness (e.g., ovality).

### 6. Important Points to Remember

*   **Instrument Selection:** Choose the instrument based on the required accuracy, accessibility of the bore, and cost. For high accuracy, micrometers or bore gauges with dial indicators/LVDTs are preferred. For general checks, vernier calipers can be used.
*   **Calibration is Key:** Always check for zero error before taking measurements. Calibrate instruments against known standards regularly.
*   **Cleanliness:** Ensure the instrument and the bore being measured are clean to avoid inaccuracies.
*   **Proper Technique:** Gentle and consistent application of measuring force is crucial. Avoid forcing the instrument.
*   **Multiple Readings:** For critical measurements or when suspecting random errors, take multiple readings at different positions and average them.
*   **Temperature Compensation:** Be aware of ambient temperature and its potential effect on measurements. For highly precise work, temperature control or correction might be necessary.
*   **Understanding Limitations:** Recognize the limitations of each instrument (e.g., vernier caliper's jaw shape for small bores, dial gauge's need for a master setting).

This concludes the study notes for Bore Diameter Measurement, covering the instruments relevant to Module 1 and their application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
