---
title: "Measurement of surface roughness of turned, milled, grounded, lapped surfaces and glass etc."
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463704"
status: "completed"
scrapedAt: "2026-05-20T18:01:27.330Z"
---
# Mechanical Engineering Lab: Study Notes

## Module 1: Calibration of Vernier Caliper, Micrometer, LVDT and Dial Gauge

### Topic: Measurement of Surface Roughness of Turned, Milled, Grounded, Lapped Surfaces and Glass etc.

---

### 1. Introduction to Surface Roughness Measurement

**1.1. Importance of Surface Roughness**

Surface roughness, also known as surface texture or surface finish, refers to the finely spaced irregularities on a surface. It is a critical parameter in engineering design and manufacturing for several reasons:

*   **Functional Performance:**
    *   **Wear Resistance:** Smoother surfaces generally exhibit less wear. (Ref: Shotbolt & Gayler, Chapter on Surface Finish)
    *   **Friction:** Surface roughness influences the coefficient of friction between mating surfaces.
    *   **Fatigue Strength:** Surface imperfections can act as stress concentrators, reducing fatigue life.
    *   **Lubrication:** Surface texture affects the ability of a surface to retain lubricant.
    *   **Sealing:** For sealing applications, a specific surface texture is required for effective sealing.
    *   **Aesthetics:** For visible surfaces, the perceived smoothness is important.

*   **Manufacturing Costs:** Achieving very smooth surfaces often requires more expensive manufacturing processes. Understanding the required roughness allows for optimization of manufacturing costs.

**1.2. Key Concepts and Definitions**

*   **Surface Texture:** The term used to describe the overall topography of a surface, encompassing roughness, waviness, and form error.
*   **Roughness:** The finely spaced, high-frequency irregularities on a surface. These are typically the result of the manufacturing process itself.
*   **Waviness:** The more widely spaced, low-frequency irregularities on a surface. Waviness is often superimposed on roughness and can be caused by factors like machine vibrations or workpiece deflections during manufacturing.
*   **Form Error:** Deviations from the ideal geometric shape of the workpiece (e.g., out-of-roundness, straightness errors).

**1.3. Measurement Parameters**

Surface roughness is quantified using various parameters. The most common ones are defined by international standards like ISO and ASME.

*   **Average Roughness (Ra):** This is the most widely used parameter. It represents the arithmetic average of the absolute values of the profile deviations from the mean line over a sampling length.
    *   **Formula:** $Ra = \frac{1}{L} \int_{0}^{L} |y(x)| dx$
        *   Where:
            *   $L$: Sampling length
            *   $y(x)$: Vertical profile deviation from the mean line at position $x$.

*   **Root Mean Square Roughness (Rrms or Rq):** This parameter is sensitive to larger deviations than Ra.
    *   **Formula:** $Rq = \sqrt{\frac{1}{L} \int_{0}^{L} [y(x)]^2 dx}$

*   **Maximum Roughness Depth (Rmax or Ry):** This is the maximum vertical distance between the highest peak and the lowest valley within the sampling length.

*   **Ten-Point Mean Roughness (Rz):** This parameter is the average of the five largest peak heights and the five largest valley depths within the sampling length. (Common in European standards).

*   **Profile Peak Count (Pc):** The number of peaks within a given sampling length that have a height greater than a specified percentage of the maximum roughness depth.

**1.4. Surface Roughness Standards**

*   **ISO Standards (e.g., ISO 4287):** Define the parameters and measurement methods.
*   **ASME Standards (e.g., ASME B46.1):** Similar to ISO standards, providing definitions and guidelines.

**1.5. Surface Roughness Symbolism on Drawings**

Understanding how surface roughness is specified on engineering drawings is crucial.

*   **Basic Roughness Symbol:** A checkmark shape.
*   **Roughness Value:** Specified above the horizontal line.
*   **Machining Method:** Can be specified above the horizontal line.
*   **Lay:** Indicates the direction of the predominant surface pattern, specified below the horizontal line.

**Example:**

```
      Ra = 0.8
   --------
      V
```
This symbol indicates a required average roughness (Ra) of 0.8 micrometers, with the machining process (e.g., milling) and lay direction to be specified.

---

### 2. Instruments for Surface Roughness Measurement

Surface roughness can be measured using two main types of instruments:

**2.1. Stylus Profilometers**

These are the most common instruments. They use a sharp stylus (typically diamond) that is moved across the surface. The vertical displacement of the stylus is detected and converted into an electrical signal, which is then processed to display the roughness parameters.

*   **Princ of Operation:** As the stylus traverses the surface, it follows the contours. Any vertical movement of the stylus is amplified and recorded. The instrument then calculates the various roughness parameters based on the recorded profile. (Ref: Shotbolt & Gayler, Chapter on Surface Measurement)

*   **Components:**
    *   **Stylus:** A sharp tip, usually made of diamond, with a defined tip radius.
    *   **Transducer:** Converts the stylus's vertical movement into an electrical signal (e.g., piezoelectric, electromagnetic).
    *   **Driving Unit:** Moves the stylus assembly at a constant speed over a specified length.
    *   **Processor/Display Unit:** Analyzes the signal and displays the roughness parameters.

*   **Types:**
    *   **Contact Profilometers:** The most common type, using a physical stylus.
    *   **Non-Contact Profilometers:** Employ optical (e.g., confocal microscopy, interferometry) or other non-contact methods. While not typically covered in basic metrology labs for surface roughness, it's important to be aware of them.

**2.2. Comparative Methods (Surface Roughness Comparators)**

These are sets of standardized surface roughness specimens with known values of various roughness parameters. They are used for visual and tactile comparison.

*   **Princ of Operation:** The machined surface is compared visually or by touch against the specimens to find the closest match.
*   **Advantages:** Simple, inexpensive, and quick for initial assessment or quality control where precise values are not critical.
*   **Disadvantages:** Subjective, less accurate, and limited to the range of specimens available.

---

### 3. Measurement of Surface Roughness for Different Surfaces

The characteristics of surfaces produced by different manufacturing processes vary significantly, influencing the choice of measurement parameters and the interpretation of results.

**3.1. Turned Surfaces**

*   **Process:** Material is removed by a cutting tool rotating against a workpiece.
*   **Surface Characteristics:** Typically exhibits circumferential ridges or grooves left by the cutting tool. The spacing and depth of these ridges depend on the feed rate, nose radius, and depth of cut.
*   **Typical Roughness Parameters:** Ra, Rz are commonly used. The lay (direction of the tool marks) is often circumferential.
*   **Example:** A turned shaft for bearing applications will have a specified surface roughness to ensure smooth rotation and proper lubrication. (Ref: Practical Engineering Metrology, Chapter on Machined Surfaces)

**3.2. Milled Surfaces**

*   **Process:** Material is removed by a rotating cutting tool with multiple teeth.
*   **Surface Characteristics:** Can exhibit parallel grooves or a more random pattern depending on the milling operation (e.g., face milling, end milling). Feed marks are a common feature.
*   **Typical Roughness Parameters:** Ra, Rz. The lay is usually in the direction of the milling cutter's travel.
*   **Example:** A flat machined surface on a machine tool base will have a specified roughness for stability and flatness.

**3.3. Ground Surfaces**

*   **Process:** Material is removed by abrasive particles bonded in a wheel. Grinding is a finishing process.
*   **Surface Characteristics:** Generally much smoother than turned or milled surfaces. It produces a fine, abrasive pattern with random particle contacts.
*   **Typical Roughness Parameters:** Very low Ra values (e.g., 0.1 to 0.4 µm).
*   **Example:** Precision shafts, bearing races, and optical components often require ground surfaces for their low friction and wear characteristics.

**3.4. Lapped Surfaces**

*   **Process:** A finer abrasive slurry is used with a laps (a tool with a specific shape) to produce very smooth surfaces. Lapping is a precision finishing process.
*   **Surface Characteristics:** Extremely smooth, with very low roughness values. The surface texture is often characterized by a random distribution of fine abrasive scratches or a plateaued surface.
*   **Typical Roughness Parameters:** Very low Ra values (e.g., 0.02 to 0.2 µm).
*   **Example:** Sealing faces of valves, optical flats, and precision bearing surfaces are often lapped to achieve excellent sealing and minimal friction.

**3.5. Glass Surfaces**

*   **Process:** Glass manufacturing processes (e.g., float glass, grinding, polishing).
*   **Surface Characteristics:** Can range from relatively rough (e.g., patterned glass) to extremely smooth (e.g., optical lenses). The surface is typically amorphous.
*   **Typical Roughness Parameters:** Ra is used. For optical applications, extremely low Ra values are specified.
*   **Example:** Eyeglass lenses and telescope mirrors require highly polished surfaces with minimal roughness to avoid light scattering and distortion.

---

### 4. Calibration and Operation of a Surface Roughness Tester (Stylus Profilometer)

**4.1. Calibration**

*   **Purpose:** To ensure the accuracy and reliability of the instrument.
*   **Procedure:**
    1.  **Check Stylus Condition:** Ensure the stylus is clean and not worn or damaged. The tip radius is critical.
    2.  **Use Calibration Standards:** Most profilometers come with calibration standards – typically a flat surface with a known, stable roughness value (e.g., a calibrated steel block with a specified Ra).
    3.  **Perform Calibration Measurement:** Measure the calibration standard according to the instrument's instructions.
    4.  **Adjust/Verify:** If the measured value deviates significantly from the standard's specified value, the instrument may have internal calibration adjustments or require servicing. Many modern instruments perform an automatic self-calibration check at startup. (Ref: Manufacturer's Manual for the specific profilometer)

**4.2. Operation**

1.  **Turn on the Instrument:** Allow it to warm up if required.
2.  **Select Parameters:** Choose the desired roughness parameters (e.g., Ra, Rz) and the sampling length (e.g., 0.8mm, 2.5mm, 8.0mm). The sampling length is often determined by the surface finish specification on the drawing or the nature of the surface.
3.  **Position the Workpiece:** Securely place the workpiece on the instrument's stage.
4.  **Set the Traverse:** Position the stylus at the starting point of the measurement on the surface. Ensure the stylus is in contact with the surface.
5.  **Initiate Traverse:** Start the measurement. The stylus will traverse the specified length.
6.  **Read Results:** The instrument will display the measured roughness values. Multiple readings at different locations on the surface are usually recommended to get a representative value.
7.  **Record Data:** Note down the surface type, instrument settings, measured values, and any observations.

---

### 5. Learning Outcomes Addressed and Alignment with Course Outcomes

**5.1. Learning Outcomes Covered in this Topic:**

*   **Measurement of surface roughness of turned, milled, grounded, lapped surfaces and glass etc.:** This entire section is dedicated to this learning outcome, covering the nature of these surfaces and how their roughness is measured.

**5.2. Alignment with Course Outcomes (COs):**

*   **CO1: Choose the appropriate instruments for different measurements (Knowledge Level: K3):**
    *   This topic necessitates choosing between stylus profilometers and comparators based on the required accuracy and context. It also involves selecting appropriate roughness parameters (Ra, Rz, etc.) for different surface types.
    *   *Example:* For a critical bearing surface (ground or lapped), a stylus profilometer is chosen. For a general-purpose machined surface where visual inspection is sufficient, a comparator might be used.

*   **CO2: Determine dimensional and form accuracies of various components (Knowledge Level: K3):**
    *   Surface roughness is a form of surface accuracy. This topic directly addresses how to determine this accuracy for various manufactured components (turned, milled, etc.).
    *   *Example:* Determining the Ra value of a milled mounting surface to ensure proper seating of another component.

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3):**
    *   While not directly about mechanism design, understanding surface finish is crucial for designing reliable mechanisms. Wear, friction, and fatigue are directly influenced by surface roughness, impacting the lifespan and performance of moving parts.
    *   *Example:* A designer needs to specify a suitable surface roughness for a gear tooth to minimize wear and ensure smooth meshing, thus affecting the mechanism's longevity and efficiency.

*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (Knowledge Level: K3):**
    *   Surface roughness testers (profilometers) are automated instruments that perform precise measurements. Understanding their operation, calibration, and the parameters they measure is essential for automated quality control systems.
    *   *Example:* Integrating a surface roughness measurement station into an automated production line for continuous quality monitoring.

---

### 6. Important Points to Remember

*   **Surface roughness is a critical functional parameter.**
*   **Ra is the most common roughness parameter, but others like Rz are also important.**
*   **Different manufacturing processes produce surfaces with distinct characteristics.**
*   **Stylus profilometers are the primary instruments for accurate surface roughness measurement.**
*   **Calibration of the instrument with a known standard is essential for accurate results.**
*   **The sampling length is a crucial setting for surface roughness measurement.**
*   **Always refer to the engineering drawing for the specified roughness requirements.**
*   **Multiple measurements are recommended for representative results.**

---

### 7. Practice Questions and Exercises

**Question 1:**

Define surface roughness and explain why it is an important parameter in mechanical engineering. (CO1, CO2)

**Answer:** Surface roughness refers to the finely spaced irregularities on a surface. It is important because it significantly impacts functional performance such as wear resistance, friction, fatigue strength, and sealing. For example, a rougher surface on a shaft may lead to increased wear in a bearing.

**Question 2:**

What is the most commonly used parameter for quantifying surface roughness, and what does it represent? (CO1)

**Answer:** The most commonly used parameter is Average Roughness (Ra). It represents the arithmetic average of the absolute values of the profile deviations from the mean line over a sampling length.

**Question 3:**

You are tasked with measuring the surface finish of a critical component like a valve sealing face, which has been lapped. Which instrument would you choose, and why? What would be a typical roughness value you might expect? (CO1, CO2)

**Answer:** I would choose a stylus profilometer for accurate measurement of the lapped surface. Lapping is a precision finishing process that results in very smooth surfaces, requiring precise measurement. A typical roughness value for a lapped surface might be in the range of 0.02 to 0.2 µm (Ra).

**Question 4:**

Explain the basic principle of operation of a stylus profilometer. (CO4)

**Answer:** A stylus profilometer uses a sharp stylus that is traced across the surface of the workpiece. The vertical movements of the stylus, caused by the surface irregularities, are converted into an electrical signal by a transducer. This signal is then processed to calculate and display various surface roughness parameters like Ra and Rz.

**Question 5:**

Consider a turned shaft for a bearing application. What would be the likely direction of the lay of the surface texture, and which roughness parameter might be most critical in addition to Ra? (CO1, CO2)

**Answer:** The likely direction of the lay for a turned shaft would be circumferential, following the path of the cutting tool. In addition to Ra, the Maximum Roughness Depth (Rmax or Ry) might also be critical, as a deep single groove could significantly impact bearing performance even if the average roughness is acceptable.

**Question 6 (Practical Exercise Simulation):**

You are given a grounded steel block with a specified surface roughness of Ra = 0.4 µm. You use a profilometer and measure Ra = 0.55 µm.

a) What could be the reasons for this discrepancy? (CO1, CO4)
b) What steps would you take to verify the instrument's accuracy? (CO1, CO4)

**Answer:**

a) Possible reasons for the discrepancy include:
    *   **Instrument Calibration Issue:** The profilometer may not be properly calibrated.
    *   **Stylus Wear/Damage:** The stylus tip might be worn or damaged, leading to inaccurate readings.
    *   **Incorrect Sampling Length:** A sampling length not appropriate for the surface might have been chosen.
    *   **Surface Contamination:** Dirt or debris on the surface could affect the measurement.
    *   **Variability in the Surface:** The actual surface roughness might be higher than specified, or the measurement location might be on a slightly rougher area.
    *   **Environmental Factors:** Vibrations during measurement.

b) Steps to verify the instrument's accuracy:
    *   **Check Stylus:** Visually inspect the stylus for any signs of damage or wear.
    *   **Re-measure Calibration Standard:** Measure the instrument's calibration standard again and compare it to its certified value.
    *   **Use a Different Calibration Standard:** If available, use a different calibrated standard to cross-check.
    *   **Perform Internal Calibration/Diagnostic:** Many instruments have built-in calibration routines.
    *   **Clean the Surface:** Ensure the surface being measured is clean.
    *   **Try Different Sampling Lengths:** Measure with different valid sampling lengths if applicable.
    *   **Consult Manufacturer's Manual:** Refer to the instrument's manual for troubleshooting and calibration procedures.

---

This comprehensive set of notes covers the measurement of surface roughness, its importance, measurement techniques, and instrument operation, directly addressing the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
