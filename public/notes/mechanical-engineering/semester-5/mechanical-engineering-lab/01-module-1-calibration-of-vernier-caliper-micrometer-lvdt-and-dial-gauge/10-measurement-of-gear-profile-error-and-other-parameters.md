---
title: "Measurement of gear profile error and other parameters"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463707"
status: "completed"
scrapedAt: "2026-05-20T18:01:29.423Z"
---
# Mechanical Engineering Lab - Module 1: Calibration and Measurement of Gear Parameters

## Topic: Measurement of Gear Profile Error and Other Parameters

This module focuses on understanding and performing essential metrology tasks, with a specific emphasis on gear measurements. We will explore how to calibrate fundamental measuring instruments and then apply this knowledge to assess the quality of gears, a critical component in many mechanical systems.

---

### 1. Introduction to Gears and Their Importance

Gears are fundamental elements in transmitting rotary motion and torque between shafts. Their accurate functioning relies heavily on the precision of their manufactured profiles. Deviations from the ideal profile can lead to:

*   **Increased Noise and Vibration:** Improper tooth meshing causes rattling and vibrations.
*   **Reduced Efficiency:** Energy loss due to friction and backlash.
*   **Accelerated Wear:** Uneven loading and contact stress lead to premature tooth wear.
*   **Failure:** In severe cases, significant errors can cause tooth breakage.

**(Reference: Wilson & Sadler, *Kinematics and Dynamics of Machinery*)**

---

### 2. Essential Measuring Instruments and Their Calibration

Before measuring gear parameters, it's crucial to ensure the accuracy of the measuring instruments used. This section revisits the calibration of key instruments covered in Module 1.

#### 2.1 Vernier Caliper

*   **Definition:** A precision measuring instrument used to measure external dimensions, internal dimensions, and depth of objects.
*   **Princ of Operation:** Utilizes a sliding jaw (vernier scale) that moves along a fixed scale (main scale) to obtain finer readings.
*   **Least Count (LC):** The smallest measurement that can be accurately made.
    *   `LC = Smallest division on main scale - Smallest division on vernier scale`
    *   Common LCs: 0.02 mm, 0.05 mm, 0.01 mm.
*   **Calibration Procedure:**
    1.  **Zero Error Check:** Close the jaws completely. The zero mark of the vernier scale should coincide with the zero mark of the main scale.
        *   If the vernier zero is to the right of the main scale zero, it's a **positive zero error**.
        *   If the vernier zero is to the left of the main scale zero, it's a **negative zero error**.
    2.  **Coincidence Check:** Identify a clear coinciding line between the vernier and main scales. The vernier reading at this point should indicate the LC.
    3.  **Systematic Error Check:** Measure a gauge block or a known standard. Compare the reading with the known dimension.
*   **Corrections:**
    *   `True Reading = Observed Reading - (Zero Error)`
    *   If Zero Error is positive, subtract it. If negative, add its magnitude (effectively subtracting a negative).

**(Reference: Shotbolt & Gayler, *Metrology for Engineers*)**

#### 2.2 Micrometer (External Micrometer)

*   **Definition:** A precision instrument used for highly accurate measurement of small dimensions, typically external diameters.
*   **Princ of Operation:** Based on the principle of a screw thread. Rotating the thimble moves the spindle by a precise amount corresponding to the screw pitch.
*   **Least Count (LC):**
    *   `LC = Pitch of the screw / Number of divisions on the thimble`
    *   Common LC: 0.01 mm, 0.001 inch.
*   **Calibration Procedure:**
    1.  **Zero Error Check:** Close the spindle against the anvil using the ratchet mechanism (to ensure consistent pressure). The zero mark of the thimble should align with the datum line on the sleeve.
        *   **Positive Zero Error:** Thimble zero is ahead of the datum line.
        *   **Negative Zero Error:** Thimble zero is behind the datum line.
    2.  **Standard Rod Check:** Measure a standard calibrating rod. Compare the reading with the certified dimension.
*   **Corrections:**
    *   `True Reading = Observed Reading - (Zero Error)`

**(Reference: Shotbolt & Gayler, *Metrology for Engineers*)**

#### 2.3 LVDT (Linear Variable Differential Transformer)

*   **Definition:** An electromechanical transducer that converts linear displacement into an analog electrical signal.
*   **Princ of Operation:** Consists of a primary coil and two secondary coils wound around a movable ferromagnetic core. As the core moves, the magnetic coupling between the primary and secondary coils changes, inducing a differential voltage output proportional to the displacement.
*   **Calibration:**
    1.  **Setup:** Connect the LVDT to a suitable signal conditioning unit and a readout device (e.g., voltmeter, oscilloscope).
    2.  **Zero Setting:** Position the core at a reference point (e.g., center of its travel) and set the output to zero.
    3.  **Displacement Measurement:** Apply known linear displacements (using a micrometer stage or gauge blocks) and record the corresponding output voltage.
    4.  **Plotting:** Plot the output voltage against the displacement. The resulting graph should be linear within the LVDT's operating range.
    5.  **Sensitivity Determination:** Calculate the sensitivity (mV/mm or V/mm) from the slope of the calibration curve.
*   **Importance:** LVDTs are essential for precise, non-contact measurements and are often used in automated inspection systems.

**(Reference: Bolton, *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering*)**

#### 2.4 Dial Gauge

*   **Definition:** A mechanical comparator that uses a rack and pinion mechanism to amplify small linear displacements into a larger rotational movement of a pointer on a dial.
*   **Princ of Operation:** A plunger moves linearly, actuating a rack that rotates a pinion. The pinion is connected to a pointer, which moves over a graduated dial.
*   **Least Count (LC):** Determined by the smallest division on the dial face.
*   **Calibration:**
    1.  **Zero Setting:** Extend the plunger and set the pointer to zero.
    2.  **Accuracy Check:** Use a micrometer stage or gauge blocks to apply known displacements and verify that the dial gauge readings are accurate. Check for linearity and backlash.
    3.  **Sensitivity:** The dial face markings indicate the sensitivity (e.g., 0.01 mm per division).
*   **Applications:** Used for checking flatness, runout, parallelism, and concentricity of surfaces.

**(Reference: Shotbolt & Gayler, *Metrology for Engineers*)**

---

### 3. Measurement of Gear Profile Errors

Gear profile errors refer to deviations of the actual tooth flank from its designed involute or cycloidal profile.

#### 3.1 Types of Gear Errors

*   **Profile Error:** Deviation of the tooth flank from the ideal involute curve.
*   **Lead Error:** Deviation in the helix angle along the face width of the tooth (for helical gears).
*   **Pitch Error:** Variation in the spacing between adjacent teeth.
*   **Runout Error:** Wobble or eccentricity of the gear, causing variations in pitch and profile as the gear rotates.
*   **Tooth Thickness Error:** Deviation in the measured thickness of the tooth.

**(Reference: Sharp & Hume, *Practical Engineering Metrology*)**

#### 3.2 Measurement Techniques for Profile Error

The fundamental principle involves comparing the actual tooth profile with the ideal involute curve. This is typically achieved using specialized gear testing equipment.

##### 3.2.1 Profile Projector / Optical Comparator

*   **Princ:** The gear is illuminated, and its magnified image is projected onto a screen. The projected profile is compared with a master template of the correct involute profile.
*   **Procedure:**
    1.  Mount the gear on a suitable fixture, ensuring proper alignment.
    2.  Set up the profile projector and focus on the gear tooth.
    3.  Overlay or align a master involute template (often etched onto glass) with the projected tooth profile.
    4.  Observe and mark any deviations between the actual and ideal profile.
*   **Advantages:** Non-contact method, visual and quick comparison.
*   **Disadvantages:** Limited by the magnification and accuracy of the projector and template.

##### 3.2.2 Gear Tooth Measuring Machine (Form Tester)

*   **Princ:** A highly accurate machine that uses a stylus to trace the gear tooth profile. The stylus movement is converted into electrical signals (often by an LVDT) and recorded by a computer.
*   **Procedure:**
    1.  Mount the gear on the machine's work spindle.
    2.  Position a calibrated stylus on the tooth flank.
    3.  The machine rotates the gear while the stylus traverses along the tooth profile, maintaining contact through a controlled force.
    4.  The recorded data points represent the actual tooth profile.
    5.  This data is then compared with the theoretically generated involute curve for the specific gear parameters. The deviation can be plotted as a graph or quantified as a maximum error.
*   **Key Parameters Measured:**
    *   **Involute Error:** The deviation of the tooth flank from the ideal involute curve.
    *   **Base Tangent Length:** The length of a straight line tangent to the pitch circle and spanning a specified number of teeth.
    *   **Tooth Thickness:** Measured along a chord or tangent.
    *   **Profile Angle:** Deviation from the specified pressure angle.
*   **Calibration of Machine:** The stylus, rotation encoders, and linear transducers (like LVDTs) of the machine must be regularly calibrated using standards.

**(Reference: Shotbolt & Gayler, *Metrology for Engineers*; Sharp & Hume, *Practical Engineering Metrology*)**

##### 3.2.3 Roll Test (for Runout and Pitch Errors)

*   **Princ:** Two gears are meshed, and one gear is rotated while observing the total indicator reading (TIR) on the other gear's axis. This indirectly assesses pitch errors and runout.
*   **Procedure:**
    1.  Mesh the gear to be tested with a master gear of known accuracy.
    2.  Mount a dial gauge on the axis of either gear.
    3.  Slowly rotate the master gear.
    4.  Observe the TIR on the dial gauge. A high TIR indicates significant runout or accumulated pitch errors.
*   **Advantages:** Relatively simple and quick for checking overall gear quality.
*   **Disadvantages:** Doesn't directly measure profile errors.

**(Reference: Wilson & Sadler, *Kinematics and Dynamics of Machinery*)**

---

### 4. Measurement of Other Gear Parameters

Besides profile errors, other crucial parameters define a gear's quality and performance.

#### 4.1 Module (m)

*   **Definition:** The ratio of the pitch diameter to the number of teeth. It's a fundamental parameter defining the size of the gear teeth.
*   `m = D / z`
    *   `D`: Pitch diameter
    *   `z`: Number of teeth
*   **Measurement:** The pitch diameter can be measured using a gear tooth vernier caliper or by measuring the distance between the centers of two meshing gears of known module.

#### 4.2 Pressure Angle ($\phi$)

*   **Definition:** The angle between the common normal to the tooth profile and the line of action at the pitch point. Standard pressure angles are 14.5°, 20°, and 25°.
*   **Measurement:** Can be measured on a gear tooth measuring machine or by using a toolmaker's microscope to determine the slope of the involute profile at specific points.

#### 4.3 Circular Pitch (p)

*   **Definition:** The distance along the pitch circle between corresponding points on adjacent teeth.
*   `p = πm`
*   **Measurement:** Can be measured by marking corresponding points on adjacent teeth and measuring the arc length along the pitch circle (requires knowing the pitch diameter).

#### 4.4 Tooth Thickness

*   **Definition:** The width of the tooth measured along the circular pitch.
*   **Measurement:**
    *   **Gear Tooth Vernier Caliper:** Specifically designed for measuring tooth thickness over a set number of teeth or across the pitch line.
    *   **Micrometer with special anvils:** Can be used to measure tooth thickness over wires or rolls placed in the tooth spaces.

#### 4.5 Backlash

*   **Definition:** The clearance between mating teeth when the gears are in mesh. It's the amount one gear can rotate relative to the other without the teeth engaging.
*   **Measurement:**
    1.  Mesh the gear with its mating gear.
    2.  Hold one gear stationary.
    3.  Gently rock the other gear back and forth and measure the angular or linear movement using a dial gauge or protractor.
*   **Importance:** Backlash is necessary to prevent binding and allow for lubrication, but excessive backlash leads to noise and impact loading.

**(Reference: Wilson & Sadler, *Kinematics and Dynamics of Machinery*; Sharp & Hume, *Practical Engineering Metrology*)**

---

### 5. Practical Experiment: Measuring Gear Profile Error and Pitch

**Objective:** To measure the profile error and circular pitch of a given gear using available metrology instruments.

**Instruments Required:**

*   Gear Tooth Vernier Caliper
*   Micrometer
*   Dial Gauge
*   Profile Projector (if available) or Gear Tooth Measuring Machine (if available)
*   Master Gear (if using Roll Test)
*   Gauge Blocks/Standard Rods for instrument calibration

**Procedure:**

1.  **Instrument Calibration:** Ensure the Vernier Caliper and Micrometer are calibrated and their zero errors corrected.
2.  **Circular Pitch Measurement:**
    *   Using the gear tooth vernier caliper, measure the circular pitch. Calibrate the caliper first.
    *   Alternatively, measure the pitch diameter (D) and count the number of teeth (z) to calculate the circular pitch (`p = πD/z`).
3.  **Profile Error Measurement (using Profile Projector):**
    *   Set up the profile projector.
    *   Mount the gear and focus on a tooth flank.
    *   Align the master involute template with the projected profile.
    *   Note the deviations and sketch the profile error.
4.  **Profile Error Measurement (using Gear Tooth Measuring Machine):**
    *   Mount the gear on the machine.
    *   Execute the measurement cycle to trace the tooth profile.
    *   Analyze the output data to determine the maximum profile deviation.
5.  **Pitch Error Measurement (Indirectly via Roll Test):**
    *   Mesh the test gear with a master gear.
    *   Mount a dial gauge on one of the gear axes.
    *   Rotate the assembly and record the TIR.
6.  **Data Recording and Analysis:** Record all measured values, including instrument readings, zero errors, and calculated true values. Plot any profile deviations if possible.

**Precautions:**

*   Ensure instruments are calibrated before use.
*   Handle gears carefully to avoid damage.
*   Maintain consistent pressure when using calipers and micrometers.
*   Properly align the gear for accurate measurements.
*   Ensure the stylus in a gear tooth measuring machine is not worn.

---

### 6. Alignment with Course Outcomes (COs)

*   **CO1: Choose the appropriate instruments for different measurements (K3):**
    *   This topic directly addresses CO1 by requiring students to select instruments like gear tooth vernier calipers, micrometers, dial gauges, and specialized gear testers for specific gear measurements. Understanding their application (e.g., micrometer for fine tooth thickness, dial gauge for runout, profile projector for visual profile comparison) is key.
*   **CO2: Determine dimensional and form accuracies of various components (K3):**
    *   The core of this topic is determining the dimensional (pitch, tooth thickness) and form (profile error, runout) accuracies of gears. Students learn to quantify these deviations.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3):**
    *   Accurate gear measurements are critical for analyzing the performance of mechanisms. Understanding gear errors helps in predicting backlash, noise, and overall mechanism efficiency, contributing to mechanism analysis.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3):**
    *   Modern gear measurement often involves automated gear tooth measuring machines that use sensors (like LVDTs) and control systems. Understanding these instruments and their calibration relates to demonstrating functions and control in automated inspection.
*   **CO5: Demonstrate 3D printing technique (K3):**
    *   While not directly about 3D printing, the precision required in gear manufacturing and measurement highlights the need for advanced manufacturing techniques. Understanding the defects that arise in traditional manufacturing emphasizes the potential benefits of additive manufacturing for creating complex gear profiles with high accuracy. (This connection is more indirect but still relevant to the broader scope of modern manufacturing and metrology).

---

### 7. Key Points to Remember

*   **Calibration is paramount:** Always calibrate measuring instruments before use to ensure accurate results.
*   **Gear accuracy impacts performance:** Deviations in gear profiles and dimensions directly affect the function of the machinery they are part of.
*   **Multiple measurement techniques exist:** From simple comparative methods to highly sophisticated automated machines, choose the method appropriate for the required accuracy and type of error.
*   **Understanding gear terminology:** Familiarity with terms like module, pressure angle, backlash, and pitch is essential for accurate measurement and analysis.
*   **Record all data meticulously:** Include zero errors, corrections, and final true values.

---

### 8. Practice Questions and Answers

**Question 1:** A vernier caliper has 10 divisions on the vernier scale that coincide with 9 divisions on the main scale. If the smallest division on the main scale is 1 mm, what is the least count of the vernier caliper?

**Answer 1:**
*   Value of 10 vernier scale divisions (VSD) = Value of 9 main scale divisions (MSD)
*   10 VSD = 9 * 1 mm = 9 mm
*   1 VSD = 0.9 mm
*   Least Count (LC) = 1 MSD - 1 VSD = 1 mm - 0.9 mm = **0.1 mm**

**Question 2:** When measuring a gear tooth thickness with a micrometer, the reading observed is 5.23 mm. The micrometer has a zero error of +0.04 mm. What is the true tooth thickness?

**Answer 2:**
*   True Reading = Observed Reading - Zero Error
*   True Tooth Thickness = 5.23 mm - (+0.04 mm) = **5.19 mm**

**Question 3:** In a roll test for a gear, what does a high Total Indicator Reading (TIR) typically indicate?

**Answer 3:** A high TIR in a roll test typically indicates significant **runout** or accumulated **pitch errors** in the gear.

**Question 4:** What is the primary purpose of calibrating an LVDT?

**Answer 4:** The primary purpose of calibrating an LVDT is to establish a **linear relationship between its output voltage and the input linear displacement**, allowing for accurate conversion of mechanical motion into an electrical signal. This also determines its sensitivity.

**Question 5:** Why is backlash necessary in meshing gears?

**Answer 5:** Backlash is necessary to **prevent binding** due to thermal expansion, manufacturing tolerances, and slight misalignments, and to **allow space for lubrication** between the mating teeth.

---
This comprehensive set of notes should provide a solid foundation for understanding and performing gear profile measurements in the Mechanical Engineering Lab. Remember to refer to the specified textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
