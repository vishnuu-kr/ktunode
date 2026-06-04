---
title: "Determine the class of fits between the given shaft and hole. etc"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636ff"
status: "completed"
scrapedAt: "2026-05-20T18:01:23.641Z"
---
# Mechanical Engineering Lab: Module 1 - Calibration and Fits

This module focuses on the fundamental principles of metrology and the practical application of precision measurement instruments. A key aspect is understanding how these measurements are used to define and achieve the desired functional relationships between mating parts, specifically in the context of fits between shafts and holes.

## Topic: Determine the Class of Fits Between Given Shaft and Hole

This topic directly addresses **Course Outcome 1 (CO1)** by requiring students to choose appropriate instruments for measurement and **Course Outcome 2 (CO2)** by enabling them to determine dimensional accuracies. While not directly about mechanism design (CO3), automation (CO4), or 3D printing (CO5), understanding fits is a prerequisite for designing and manufacturing components that function correctly within mechanisms.

### 1. Introduction to Fits

A **fit** describes the relationship between two mating parts, typically a shaft and a hole, after assembly. It is defined by the difference between the size of the hole and the size of the shaft, which is known as the **clearance** or **interference**.

*   **Clearance Fit:** The shaft is smaller than the hole, allowing for relative movement.
*   **Interference Fit (or Press Fit):** The shaft is larger than the hole, requiring force to assemble.
*   **Transition Fit:** The fit can result in either clearance or interference depending on the actual sizes of the shaft and hole.

### 2. Basic Terminology in Fits

Understanding precise terminology is crucial in metrology.

*   **Basic Size:** The nominal size of the hole or shaft from which the limits of size are derived.
*   **Actual Size:** The measured size of a feature.
*   **Limit Sizes:** The maximum and minimum permissible sizes of a feature.
    *   **Upper Limit of Size:** The maximum permissible size.
    *   **Lower Limit of Size:** The minimum permissible size.
*   **Tolerance:** The permissible variation in size of a feature. It is the difference between the upper and lower limits of size.
    *   **Unilateral Tolerance:** Variation is permitted in only one direction from the basic size.
    *   **Bilateral Tolerance:** Variation is permitted in both directions from the basic size.
*   **Fundamental Deviation:** The extreme of a size range, which lies nearest to the basic size.
*   **Allowance:** An intentional difference between the maximum shaft size and the minimum hole size (for clearance fits) or the minimum shaft size and the maximum hole size (for interference fits). It is usually a clearance.
*   **Tolerance Zone:** The region between the maximum and minimum permissible sizes.

**Reference:** _Metrology for Engineers_ by Shotbolt and Gayler provides detailed explanations and diagrams of these terms.

### 3. Types of Fits and their Classification

Fits are classified based on the expected outcome after assembly.

#### 3.1 Clearance Fits

*   **Definition:** All clearance fits have the shaft size smaller than the hole size. There is always a positive clearance between the shaft and the hole.
*   **Characteristics:** Allows for free movement or rotation between the mating parts.
*   **Sub-types:**
    *   **Slide Fit:** Allows for slow sliding movement.
    *   **Close Slide Fit:** Similar to slide fit but with tighter tolerances for smoother sliding.
    *   **Easy Slide Fit:** Generous clearance for easy movement.
    *   **Running Fit:** Allows for continuous rotation.
        *   **Loose Running Fit:** Large clearance for free rotation.
        *   **Free Running Fit:** Moderate clearance for efficient rotation.
        *   **Close Running Fit:** Minimal clearance for smooth, quiet running.
    *   **Locational Fit:** For parts that are to be assembled and located relative to each other.
        *   **Locational Clearance Fit:** Parts are located, but some clearance is present.
        *   **Locational Transition Fit:** Can result in either clearance or interference, used for precise location.
        *   **Locational Interference Fit:** Results in interference for a fixed location.

#### 3.2 Interference Fits (Press Fits)

*   **Definition:** All interference fits have the shaft size larger than the hole size. Assembly requires force.
*   **Characteristics:** Creates a strong, fixed joint.
*   **Sub-types:**
    *   **Light Drive Fit:** Requires light force for assembly.
    *   **Medium Drive Fit:** Requires moderate force for assembly.
    *   **Force Fit:** Requires significant force for assembly, often involving heating or cooling.
    *   **Shrink Fit:** A hole is heated, causing it to expand, or a shaft is cooled, causing it to contract, allowing for assembly. Upon returning to ambient temperature, the interference creates a strong bond.

#### 3.3 Transition Fits

*   **Definition:** The tolerance zones of the shaft and hole overlap. The fit can be clearance or interference depending on the actual dimensions.
*   **Characteristics:** Used when a precise location is required, but some assembly force is acceptable. Often used for dowel pins.

### 4. Standards for Fits

To ensure interchangeability of parts, standardized systems for fits are used. The most common system is the **ISO System of Limits and Fits** (based on ISO 286).

*   **Hole Basis System:** The basic size of the hole is kept constant (H-hole), and the shaft size is varied to achieve the desired fit. This is generally preferred because reaming holes to a standard size is easier than turning shafts to a standard size.
*   **Shaft Basis System:** The basic size of the shaft is kept constant, and the hole size is varied.

**Key Concept:** In the Hole Basis System, an 'H' designation for a hole signifies that its lower limit of size is equal to the basic size (i.e., it has zero fundamental deviation).

### 5. Determining the Class of Fit

To determine the class of fit between a given shaft and hole, you need to:

1.  **Measure the actual size of the hole and the shaft.**
2.  **Compare these measurements to the specified or expected nominal sizes and tolerances.**
3.  **Calculate the clearance or interference.**

#### 5.1 Measurement Instruments

As per **CO1**, selecting the right instrument is crucial. For measuring shafts and holes, the following instruments (covered in other parts of Module 1) are commonly used:

*   **Vernier Caliper:** For rough to moderate accuracy measurements of external and internal diameters.
*   **Micrometer:** For high accuracy measurements of external diameters (for shafts) and external dimensions of ring gauges.
*   **Inside Micrometer/Bore Gauge:** For high accuracy measurements of internal diameters (for holes).
*   **Dial Gauge with Stand:** Can be used to compare dimensions or for checking concentricity/runout, indirectly aiding in fit determination.
*   **LVDT (Linear Variable Differential Transformer):** Primarily for displacement measurement, but can be incorporated into gauging systems for high-precision dimensional inspection.

**Example:**
Let's say you have a shaft specified as $\phi 20$ $H7$ and a hole specified as $\phi 20$ $g6$.

*   **Basic Size:** 20 mm
*   **Hole Tolerance (H7):** Requires consulting standard tolerance tables (e.g., ISO 286). For a 20 mm basic size, H7 typically has an upper deviation of +0.018 mm and a lower deviation of 0 mm.
    *   Hole Limits: $20.000$ mm to $20.018$ mm
*   **Shaft Tolerance (g6):** For a 20 mm basic size, g6 typically has a fundamental deviation of -0.007 mm and a tolerance of 0.009 mm.
    *   Shaft Limits: $20.000 - 0.007 = 19.993$ mm to $19.993 + 0.009 = 20.002$ mm

**Calculating Clearance/Interference:**

*   **Maximum Clearance:** Max Hole Size - Min Shaft Size = $20.018$ mm - $19.993$ mm = $0.025$ mm
*   **Minimum Clearance:** Min Hole Size - Max Shaft Size = $20.000$ mm - $20.002$ mm = $-0.002$ mm

Since the minimum clearance is negative, this indicates a potential for interference. However, the maximum shaft size (20.002 mm) is larger than the minimum hole size (20.000 mm), suggesting it's a **transition fit**. The tolerance zone for the shaft extends beyond the tolerance zone for the hole.

#### 5.2 Procedure for Determining Fit Class

1.  **Obtain Specifications:** Get the nominal sizes and tolerance grades for both the shaft and the hole (e.g., from a drawing).
2.  **Measure Dimensions:** Accurately measure the actual diameter of the shaft and the hole using appropriate measuring instruments. Record these measurements.
3.  **Calculate Actual Clearance/Interference:**
    *   Clearance = Actual Hole Diameter - Actual Shaft Diameter
4.  **Compare with Tolerance Limits:** Determine the theoretical maximum and minimum clearances/interferences based on the specified tolerance limits for the shaft and hole.
5.  **Classify the Fit:**
    *   If the minimum clearance is always positive, it's a **clearance fit**.
    *   If the minimum interference is always positive (meaning the minimum shaft size is larger than the maximum hole size), it's an **interference fit**.
    *   If there is an overlap in the tolerance zones, allowing for both positive and negative clearances (or zero clearance), it's a **transition fit**.

**Important Point:** The actual measured values are crucial. Even if the specifications indicate a clearance fit, manufacturing variations could lead to an interference if the actual shaft is too large or the hole is too small.

### 6. Examples of Fit Selection and Application

*   **Running Fits:** Used in bearings, shafts in rotating machines, gears. The choice of running fit (loose, free, close) depends on the speed and precision required.
*   **Locational Fits:** Used for locating components, like dowel pins, keyways, or splines. Locational clearance fits are used where slight movement is permissible, while transition and interference fits provide a more rigid location.
*   **Interference Fits:** Used for press-fitting bearings onto shafts, gears onto shafts, or for creating shrink-fit assemblies that require high strength and rigidity.

### 7. Practice Questions and Exercises

**Question 1:**
A hole is specified as $\phi 50$ $H7$ and a shaft as $\phi 50$ $h6$. Using the standard ISO tolerance tables, determine the limits of size for both the hole and the shaft. Calculate the maximum and minimum clearances. What type of fit is this?

**Answer 1:**
*   **Basic Size:** 50 mm
*   **Hole Tolerance (H7):** From ISO 286 tables for a 50 mm basic size, H7 has an upper deviation of +0.030 mm and a lower deviation of 0 mm.
    *   Hole Limits: $50.000$ mm to $50.030$ mm
*   **Shaft Tolerance (h6):** From ISO 286 tables for a 50 mm basic size, h6 has a fundamental deviation of 0 mm and a tolerance of 0.019 mm.
    *   Shaft Limits: $50.000$ mm to $50.019$ mm

*   **Maximum Clearance:** Max Hole Size - Min Shaft Size = $50.030$ mm - $50.000$ mm = $0.030$ mm
*   **Minimum Clearance:** Min Hole Size - Max Shaft Size = $50.000$ mm - $50.019$ mm = $-0.019$ mm

Since the minimum clearance is negative, there is a possibility of interference. The shaft tolerance zone overlaps with the hole tolerance zone. This is a **transition fit**.

**Question 2:**
You measure a shaft to be $15.005$ mm and a hole to be $15.015$ mm. What is the actual clearance or interference?

**Answer 2:**
Clearance = Actual Hole Diameter - Actual Shaft Diameter
Clearance = $15.015$ mm - $15.005$ mm = $0.010$ mm

This is a **clearance fit**.

**Question 3:**
A stud is press-fitted into a hole. The specification requires an interference. The hole's upper limit is $25.000$ mm, and its lower limit is $24.985$ mm. The stud's upper limit is $25.020$ mm, and its lower limit is $25.005$ mm.
Calculate the maximum interference and the minimum interference.

**Answer 3:**
*   **Maximum Interference:** Max Stud Size - Min Hole Size = $25.020$ mm - $24.985$ mm = $0.035$ mm
*   **Minimum Interference:** Min Stud Size - Max Hole Size = $25.005$ mm - $25.000$ mm = $0.005$ mm

Since both the maximum and minimum interferences are positive, this is an **interference fit**.

### 8. Important Points to Remember

*   Accurate measurement is paramount for determining fits.
*   Standard tolerance tables (like ISO 286) are essential for understanding the expected size ranges.
*   The Hole Basis system is commonly used and simplifies manufacturing processes.
*   Fits are classified into clearance, interference, and transition types based on their expected assembly outcome.
*   The actual measured dimensions, not just the nominal sizes, determine the actual fit achieved.
*   Understanding fits is critical for ensuring the proper function and longevity of assembled mechanical components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Further Reading and References

*   **Metrology for Engineers, 5th edition by Shotbolt C.R. and Gayler J.F.W:** This book provides a comprehensive understanding of measurement principles, including detailed sections on fits and tolerances. (Pages related to Fits and Tolerances)
*   **Practical Engineering Metrology by Sharp K.W.B. and Hume Sir Isaac:** Offers practical guidance on using various metrology instruments and applying metrology concepts in engineering. (Chapters on Limit Gauging and Fits)
*   **ISO 286:** International Standard for "System of limits and fits — Part 1: Bases and general technical principles". This is the primary reference for understanding the ISO system of fits.

This module provides a foundational understanding of how precision measurements translate into functional relationships between mating parts, which is a cornerstone of mechanical design and manufacturing.