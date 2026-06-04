---
title: "Surface Roughness Measurement- Components of surface texture, Analysis of surface traces, Specification of surface texture, Measurement of surface roughness-Stylus probe instruments"
subject: "MACHINE TOOLS AND METROLOGY"
module: "Module 4: Angular measurements"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f19"
status: "completed"
scrapedAt: "2026-05-20T17:54:12.710Z"
---
# Machine Tools and Metrology: Module 4 - Angular Measurements

## Topic: Surface Roughness Measurement

This module focuses on understanding and measuring surface characteristics, particularly surface roughness. While the module title is "Angular Measurements," this topic delves into a critical aspect of manufacturing that directly impacts product performance and functionality, often influenced by the finishing processes performed on machine tools.

---

### Learning Outcomes Covered:

*   **Understand the components of surface texture.**
*   **Learn to analyze surface traces.**
*   **Understand the methods for specifying surface texture.**
*   **Gain knowledge of stylus probe instruments for measuring surface roughness.**

---

### Course Outcomes Alignment:

*   **CO1: Describe various machine tool operations (Knowledge Level: K2)** - Understanding surface roughness is intrinsically linked to the finishing operations performed on machine tools (e.g., turning, milling, grinding).
*   **CO4: Identify the uses of various advanced measuring instruments (Knowledge Level: K1)** - This topic introduces profilometers, which are advanced measuring instruments used for surface texture analysis.

---

## 1. Components of Surface Texture

Surface texture refers to the finely spaced irregularities that form the surface of a machined part. It's a composite of several characteristics, and understanding these components is crucial for proper measurement and specification.

**Key Concepts:**

*   **Surface Texture:** The overall topography of a surface, encompassing both macroscopic and microscopic deviations from the ideal geometric form.
*   **Roughness:** The finely spaced, usually high-frequency, deviations from the nominal surface. It's the result of the material removal process.
*   **Waviness:** The more widely spaced, lower-frequency deviations from the nominal surface. It's often caused by factors like machine vibrations, tool runout, or workpiece deflection.
*   **Lay:** The predominant direction of the tool marks or the texture on the surface. It's usually determined by the manufacturing process.
*   **Flaws:** Irregularities that occur at one or more random locations on the surface, such as cracks, pores, scratches, or blowholes.

**Visual Representation (Imagine a graph):**

```
^ Amplitude
|      ___      ___
|     /   \    /   \   <- Roughness (high frequency)
|    /     \  /     \
|   ---------- -----    <- Waviness (low frequency)
|  /            \
| /              \
|---------------------> Distance along surface
```

**Textbook References:**

*   **Elements of Workshop Technology Vol-II Machine Tools by S K Hajra Choudhury Nirjhar Roy:** Likely discusses surface finish as a result of machining operations.
*   **Manufacturing Science by Amitabha Ghosh Asok Kumar Mallik:** Provides a theoretical basis for surface generation and texture formation during machining.
*   **Engineering Metrology and Measurements by N.V. Raghavendra, l. Krishnamurthy:** Offers detailed explanations of surface texture parameters and measurement techniques.
*   **Manufacturing Engineering and Technology by Serope Kalpakjian Steven R Schmid:** Covers surface integrity and finishing processes, linking them to surface texture.

**Important Points to Remember:**

*   Roughness is a component of surface texture, characterized by high-frequency deviations.
*   Waviness is a component of surface texture, characterized by low-frequency deviations.
*   Lay indicates the directional pattern of the surface.
*   Flaws are random imperfections.

---

## 2. Analysis of Surface Traces

To analyze surface texture, we typically obtain a graphical representation of the surface profile, known as a surface trace or profile graph. This trace is then analyzed using various parameters to quantify its characteristics.

**Key Concepts:**

*   **Surface Trace:** A graph representing the variations in height of a surface along a specified length, as measured by a stylus.
*   **Sampling Length (l):** The length over which a particular surface texture parameter is measured.
*   **Evaluation Length (L):** The total length over which the surface trace is analyzed. The evaluation length is typically composed of a number of sampling lengths.
*   **Profile Filtering:** Techniques used to separate roughness from waviness or to isolate specific components of the surface texture.
    *   **Cut-off (λc):** The wavelength separating roughness from waviness. It's a filtering parameter.
    *   **Short-term cut-off:** Used for measuring roughness.
    *   **Long-term cut-off:** Used for measuring waviness.

**Common Surface Texture Parameters (Derived from Surface Traces):**

These parameters quantify the peaks and valleys of the surface profile.

*   **Arithmetic Average Roughness (Ra):** The arithmetic average of the absolute values of the deviations from the mean line, over the sampling length.
    *   Formula: $Ra = \frac{1}{l} \int_{0}^{l} |y(x)| dx$
    *   This is the most commonly used parameter.

*   **Root Mean Square Roughness (Rrms or Rq):** The root mean square average of the deviations from the mean line, over the sampling length. It gives more weight to larger deviations than Ra.
    *   Formula: $Rq = \sqrt{\frac{1}{l} \int_{0}^{l} y(x)^2 dx}$

*   **Maximum Peak Height (Rp):** The height of the highest peak from the mean line within the sampling length.

*   **Maximum Valley Depth (Rv):** The depth of the deepest valley from the mean line within the sampling length.

*   **Maximum Roughness Height (Rt):** The distance between the highest peak and the deepest valley within the sampling length.
    *   Formula: $Rt = Rp + Rv$

*   **Ten-Point Height (Rz - ISO System):** The average of the five largest peak heights and the five largest valley depths. It's a more robust parameter than Ra against isolated peaks/valleys.

*   **Average Roughness Depth (Rz - DIN System):** The average difference between successive peak and valley heights.

**Example:**

Imagine a surface trace with the following deviations (in micrometers) from the mean line: +5, -3, +8, -2, +4, -6, +3, -7, +2, -4.

*   **Sampling Length (l) = 10 units**
*   **Ra Calculation:**
    *   Absolute deviations: 5, 3, 8, 2, 4, 6, 3, 7, 2, 4
    *   Sum of absolute deviations = 5 + 3 + 8 + 2 + 4 + 6 + 3 + 7 + 2 + 4 = 44
    *   $Ra = 44 / 10 = 4.4 \mu m$

*   **Rz (ISO System) Calculation:**
    *   Peaks: +5, +8, +4, +3, +2 (sorted: +8, +5, +4, +3, +2)
    *   Valleys: -3, -2, -6, -7, -4 (sorted by magnitude: -7, -6, -4, -3, -2)
    *   Sum of 5 largest peaks = 8 + 5 + 4 + 3 + 2 = 22
    *   Sum of 5 largest valley depths (absolute values) = 7 + 6 + 4 + 3 + 2 = 22
    *   $Rz = (22 + 22) / 5 = 44 / 5 = 8.8 \mu m$

**Reference Books:**

*   **Metrology for Engineers by Galyer J.F.W., Schotbolt C.R.:** Provides detailed explanations and examples of calculating various surface texture parameters.
*   **Practical Engineering Metrology by Sharp K.W.B:** Likely covers the practical aspects of analyzing surface traces.

**Important Points to Remember:**

*   Ra is the most common parameter but can be misleading with outlier peaks/valleys.
*   Rz (ISO) is more sensitive to significant peaks and valleys.
*   Understanding the sampling and evaluation lengths is crucial for accurate parameter interpretation.
*   Filtering (using cut-off values) is essential to differentiate between roughness and waviness.

---

## 3. Specification of Surface Texture

Specifying surface texture on engineering drawings is critical to ensure that manufactured parts meet the required functional performance. Standards define how to represent these specifications.

**Key Concepts:**

*   **Surface Texture Symbols:** Standardized graphical symbols used on drawings to indicate the required surface texture.
*   **Basic Symbol:** A checkmark shape.
*   **Withdrawal Ridge:** A small line added to the basic symbol.
*   **Surface Texture Requirements:** The specific parameters (e.g., Ra, Rz), sampling length, and any other constraints placed on the surface.

**Common Symbols and Their Meanings (based on ISO and ASME standards):**

*   **$\surd$ (Basic Symbol):** Indicates that a surface texture requirement applies, but no specific operation is mandated.
*   **$\surd$ with a horizontal line:** Surface texture obtained by any process.
*   **$\surd$ with a circle:** Surface texture obtained by removing material.
*   **$\surd$ with a vertical line:** Surface texture obtained without removing material.
*   **$\surd$ with a horizontal line and a circle:** Surface texture obtained by removing material, with specific surface texture requirements.

**How to Specify Requirements:**

The symbol is typically placed on the surface of the part on the drawing, with the required parameters specified adjacent to it.

*   **Example 1 (ISO Standard):**
    *   $\surd$ 0.8 / 0.01
        *   $\surd$: Basic symbol.
        *   0.8: Represents the maximum Ra value (in micrometers).
        *   0.01: Represents the sampling length (in millimeters).
    *   This would mean the surface roughness should not exceed 0.8 $\mu m$ Ra, measured over a sampling length of 0.01 mm.

*   **Example 2 (ASME Standard):**
    *   $\stackrel{\nabla}{0.8}$
        *   $\stackrel{\nabla}{}$: Basic symbol.
        *   0.8: Represents the maximum Ra value (in microinches or micrometers, depending on the standard used).
    *   Further specifications like sampling length or other parameters can be added above or below the symbol.

**Other Specification Aspects:**

*   **Lay Specification:** The direction of the lay can be specified using symbols placed near the surface texture symbol.
    *   Horizontal: ||
    *   Vertical: $\perp$
    *   Angular: / or \
    *   Radial: $\odot$
    *   Unidirectional: →
*   **Waviness Specification:** Waviness can be specified by adding its parameters (e.g., waviness height, waviness width) to the drawing.
*   **Flaw Specification:** If critical flaws are to be avoided, this can also be indicated.

**Textbook References:**

*   **Elements of Workshop Technology Vol-II Machine Tools by S K Hajra Choudhury Nirjhar Roy:** May illustrate drawing practices.
*   **Engineering Metrology and Measurements by N.V. Raghavendra, l. Krishnamurthy:** Provides comprehensive coverage of surface texture symbols and specification methods.
*   **Manufacturing Engineering and Technology by Serope Kalpakjian Steven R Schmid:** Discusses surface integrity requirements and how they are translated into specifications.

**Important Points to Remember:**

*   Clear and unambiguous specification of surface texture on drawings is crucial for manufacturing.
*   Standard symbols must be used correctly.
*   The most common parameter specified is Ra, but Rz and others are also used.
*   Always consider the sampling length and other relevant parameters.

---

## 4. Measurement of Surface Roughness - Stylus Probe Instruments

Stylus probe instruments, also known as profilometers, are the most common instruments for measuring surface roughness. They work by tracing the surface with a fine stylus and converting the vertical movements into an electrical signal, which is then processed to display various surface parameters.

**Key Concepts:**

*   **Stylus:** A very fine tip (often diamond or sapphire) that makes physical contact with the surface. The tip radius is a critical parameter, typically ranging from 0.5 to 10 micrometers.
*   **Transducer:** Converts the mechanical displacement of the stylus into an electrical signal. Common types include:
    *   **Variable Reluctance:** Changes in inductance.
    *   **Piezoelectric:** Generates voltage due to pressure.
    *   **Capacitive:** Changes in capacitance.
*   **Motor-driven Skid/Trace Unit:** Moves the stylus across the surface at a constant speed. The skid follows the general contour of the surface, allowing the stylus to focus on the finer irregularities (roughness).
*   **Amplifier and Signal Processor:** Amplifies the electrical signal from the transducer and processes it to calculate surface texture parameters (Ra, Rz, Rq, etc.).
*   **Display Unit:** Shows the calculated parameters, often with a digital readout and sometimes a graphical display of the surface trace.

**Working Principle:**

1.  The stylus is placed on the surface to be measured.
2.  The trace unit moves the stylus across the surface over a predefined sampling length.
3.  As the stylus encounters peaks and valleys, it moves up and down.
4.  This vertical movement is detected by the transducer, which generates an electrical signal proportional to the displacement.
5.  The signal is amplified and processed by the instrument's electronics.
6.  The instrument calculates and displays the selected surface texture parameters (e.g., Ra). Many instruments can also display a graphical profile of the surface trace.

**Components of a Stylus Probe Instrument:**

*   **Stylus Unit:** Contains the stylus tip and its mounting.
*   **Trace Unit:** The motor and mechanism for moving the stylus/skid.
*   **Preamplifier:** Initial amplification of the transducer signal.
*   **Filter:** To separate roughness from waviness (e.g., using a short-term cut-off filter).
*   **Integrator/Processor:** Calculates the surface texture parameters.
*   **Display:** Digital readout of parameters and sometimes a screen for the surface profile.

**Types of Stylus Probe Instruments:**

*   **Portable Surface Roughness Testers:** Compact, handheld devices suitable for in-process inspection and on-site measurements. They are generally less accurate than benchtop models but offer convenience.
*   **Benchtop Stylus Profilometers:** More sophisticated instruments with higher accuracy and a wider range of features, including advanced filtering and data analysis capabilities.

**Calibration:**

Stylus probe instruments must be calibrated regularly using calibrated reference standards with known surface roughness values to ensure accuracy.

**Textbook References:**

*   **Engineering Metrology and Measurements by N.V. Raghavendra, l. Krishnamurthy:** Provides detailed descriptions of stylus probe instruments and their working principles.
*   **Metrology for Engineers by Galyer J.F.W., Schotbolt C.R.:** Explains the operation and selection of stylus profilometers.
*   **Manufacturing Engineering and Technology by Serope Kalpakjian Steven R Schmid:** Discusses surface metrology and the role of profilometers.

**Important Points to Remember:**

*   Stylus probe instruments measure the physical profile of the surface.
*   The stylus tip radius and the skid contact can influence the measurement.
*   Sampling length and cut-off are critical settings for accurate measurement.
*   Calibration with standards is essential for reliable results.
*   Portable instruments offer convenience, while benchtop models provide higher accuracy and analysis capabilities.

---

### Practice Questions and Exercises

**Question 1:**

Define the terms: Roughness, Waviness, and Lay. (Aligns with CO1 - K2, Understanding of machining outcomes)

**Answer:**

*   **Roughness:** Refers to the finely spaced, high-frequency deviations from the nominal surface, usually a result of the material removal process.
*   **Waviness:** Refers to the more widely spaced, low-frequency deviations from the nominal surface, often caused by factors like machine vibrations or workpiece deflection.
*   **Lay:** The predominant direction of the tool marks or the texture on the surface, determined by the manufacturing process.

**Question 2:**

Explain the significance of the Ra parameter in surface roughness measurement. What are its limitations? (Aligns with CO4 - K1, Identifying instrument uses)

**Answer:**

*   **Significance:** Ra (Arithmetic Average Roughness) is the most commonly used parameter. It provides a general measure of the average height of the surface deviations from the mean line. A lower Ra value generally indicates a smoother surface.
*   **Limitations:** Ra can be misleading as it treats all deviations equally (taking absolute values). Two surfaces with the same Ra value can have very different profiles. For instance, a surface with many small peaks and valleys might have the same Ra as a surface with a few large peaks and valleys. It doesn't adequately represent the bearing area characteristics or the presence of isolated significant peaks.

**Question 3:**

A surface trace shows the following deviations from the mean line over a sampling length: +10, -5, +12, -3, +6, -8, +4, -7, +2, -4 (in $\mu m$). Calculate the Ra value for this surface. (Aligns with CO4 - K1, Instrument uses leading to calculation)

**Answer:**

*   Deviations: +10, -5, +12, -3, +6, -8, +4, -7, +2, -4
*   Absolute Deviations: 10, 5, 12, 3, 6, 8, 4, 7, 2, 4
*   Sum of Absolute Deviations = 10 + 5 + 12 + 3 + 6 + 8 + 4 + 7 + 2 + 4 = 61 $\mu m$
*   Sampling Length (number of points) = 10
*   $Ra = \frac{\text{Sum of Absolute Deviations}}{\text{Sampling Length}} = \frac{61 \mu m}{10} = 6.1 \mu m$

**Question 4:**

Describe the basic working principle of a stylus probe instrument used for surface roughness measurement. (Aligns with CO4 - K1, Identifying instrument uses)

**Answer:**

A stylus probe instrument uses a very fine stylus that physically traces the surface of a component. As the stylus moves across the surface (often driven by a motor), it follows the irregularities (peaks and valleys). The vertical movement of the stylus is converted into an electrical signal by a transducer. This signal is then amplified, filtered, and processed by the instrument's electronics to calculate and display various surface texture parameters, most commonly Ra. Some instruments also display a graphical representation of the surface profile.

**Question 5:**

When specifying surface texture on a drawing, what information should typically be included next to the surface texture symbol? (Aligns with CO1 - K2, Understanding of manufacturing requirements)

**Answer:**

When specifying surface texture on a drawing, the following information should typically be included next to the surface texture symbol:

*   **Roughness Value:** The primary parameter, most commonly Ra (e.g., 0.8 $\mu m$).
*   **Sampling Length (Cut-off):** The length over which the parameter is measured (e.g., 0.8 / 0.01).
*   **Material Removal Specification:** Indication of whether the surface is produced by removing material or not (e.g., using $\surd$ with a circle or a vertical line).
*   **Lay:** The direction of the surface texture, if it's critical (e.g., || for parallel, $\perp$ for perpendicular).
*   **Waviness Specification:** If required, parameters for waviness can also be included.

---

### Important Points to Remember for the Entire Topic:

*   **Surface texture is a composite of roughness, waviness, lay, and flaws.**
*   **Roughness refers to high-frequency deviations, while waviness refers to low-frequency deviations.**
*   **Ra is the most common but not always the most informative roughness parameter.** Rz (ISO) is often preferred when significant peaks/valleys are critical.
*   **Sampling length and cut-off are crucial settings for accurate measurement and specification.**
*   **Stylus probe instruments (profilometers) are the primary tools for measuring surface roughness.**
*   **Clear and standardized surface texture specification on drawings is essential for ensuring functional requirements.**
*   **The choice of surface texture specification depends heavily on the part's function and the manufacturing process used.**

This comprehensive set of notes should provide a solid foundation for understanding surface roughness measurement within the context of Machine Tools and Metrology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
