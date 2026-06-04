---
title: "Measurement of screw thread parameters"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463706"
status: "completed"
scrapedAt: "2026-05-20T18:01:28.723Z"
---
Sure, here are comprehensive study notes on the measurement of screw thread parameters, designed for your Mechanical Engineering Lab course.

---

# Mechanical Engineering Lab: Module 1 - Calibration and Measurement

## Topic: Measurement of Screw Thread Parameters

**Learning Outcomes:**

*   Understand the basic geometry of screw threads.
*   Identify the key parameters of a screw thread that need to be measured.
*   Select and use appropriate metrology instruments for measuring screw thread parameters.
*   Perform measurements of screw thread parameters accurately.
*   Analyze and interpret the measured data to assess thread quality.
*   Understand the principles of calibration of instruments used for thread measurement.

---

### 1. Introduction to Screw Threads

Screw threads are helical ridges formed on a cylinder or cone, used for fastening or transmitting power. Their precise dimensions are crucial for proper functioning and interchangeability.

**Key Concepts:**

*   **Thread Form:** The shape of the thread profile (e.g., V-thread, square thread, Acme thread).
*   **Thread Series:** Classification based on the pitch diameter and the number of threads per inch or pitch.
*   **Hand:** Right-hand (clockwise tightening) or left-hand (counter-clockwise tightening).

---

### 2. Key Screw Thread Parameters

Accurate measurement of these parameters ensures that mating parts will assemble correctly and function as intended.

**Parameters and their Definitions:**

*   **Major Diameter (D):** The largest diameter of the thread. It is the diameter of the cylinder that contains the crests of the threads.
    *   *As per Shotbolt & Gayler, "Metrology for Engineers," the major diameter is the nominal diameter of the fastener.*
*   **Minor Diameter (d):** The smallest diameter of the thread. It is the diameter of the cylinder that contains the roots of the threads.
    *   *Shotbolt & Gayler also define the minor diameter as the diameter at the root of the external thread.*
*   **Pitch Diameter (P):** The diameter of a theoretical cylinder on which the thread form intersects the flank, such that the width of the thread is equal to the width of the gap. This is the most important parameter for interchangeability.
    *   *Sharp & Hume, "Practical Engineering Metrology," emphasize that the pitch diameter is critical for ensuring proper meshing of mating threads.*
*   **Pitch (p):** The distance between corresponding points on adjacent threads, measured parallel to the axis of the screw. For Unified threads, this is often expressed as Threads Per Inch (TPI).
    *   *TPI is the reciprocal of the pitch in inches. For example, 24 TPI means a pitch of 1/24 inches.*
*   **Lead (L):** The axial distance advanced by the screw in one complete revolution. For single-start threads, Lead = Pitch. For multiple-start threads, Lead = (Number of starts) * Pitch.
*   **Flank Angle ($\alpha$):** The angle between the thread profile in a plane containing the axis and passing through the pitch diameter. For standard V-threads (like Unified or Metric), this is typically 60 degrees.
    *   *Bolton, "Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering," highlights the importance of flank angle in load transmission.*
*   **Crest:** The highest point of the thread.
*   **Root:** The lowest point of the thread.
*   **Flank:** The sloping surface of the thread between the crest and the root.
*   **Depth of Thread:** The perpendicular distance between the crest and the root.

---

### 3. Instruments for Measuring Screw Thread Parameters

The selection of instruments depends on the parameter to be measured, the required accuracy, and the size of the thread.

**Instruments and their Applications:**

*   **Vernier Caliper:**
    *   **Use:** Primarily for measuring external major diameter and can be used for internal major diameter with internal jaws. Can also approximate pitch by measuring between adjacent threads.
    *   **Limitations:** Limited accuracy for pitch diameter and flank angle.
    *   *Calibration of Vernier Calipers was covered in a previous session. Ensure the jaws are clean and free from damage.*
*   **Micrometer:**
    *   **Outside Micrometer:**
        *   **Use:** Highly accurate measurement of external major diameter.
        *   **Limitations:** Cannot directly measure pitch diameter.
    *   **Micrometer Screw Gauge (Thread Micrometer):**
        *   **Use:** Specifically designed to measure the **pitch diameter** of external threads. It has a special pointed anvil and a V-shaped spindle.
        *   **Princ:** The V-shaped spindle contacts the flanks of the thread at the pitch diameter, and the pointed anvil contacts the root.
        *   *Refer to Shotbolt & Gayler for detailed diagrams of thread micrometers.*
    *   **Inside Micrometer:**
        *   **Use:** Measuring internal major diameter.
    *   **Depth Micrometer:**
        *   **Use:** Measuring thread depth.
*   **Screw Thread Measuring Wires (Go-No-Go Gauges):**
    *   **Use:** **Pitch diameter** measurement of both external and internal threads.
    *   **Princ:** A set of wires of specific diameter (based on thread form and pitch) are placed between the thread flanks. The measurement is taken using a standard outside micrometer.
        *   **For external threads:** Wires are placed in the thread groove. The micrometer reading minus the wire diameter gives twice the pitch diameter (if no allowance for clearance exists in the thread form). More accurately, the formula is $M = P + d_w$, where $M$ is the micrometer reading, $P$ is the pitch diameter, and $d_w$ is the wire diameter.
        *   **For internal threads:** Special "button" or "roller" wires are used.
    *   **Types of Wires:**
        *   **Single wires:** For measuring pitch diameter of external threads.
        *   **Three wires (for external threads) or two wires (for internal threads):** The most common and accurate method for pitch diameter.
        *   **Rollers:** Used for internal threads.
    *   **Reference:** Shotbolt & Gayler provides comprehensive tables for wire sizes for different thread forms and pitches.
*   **Screw Thread Gauges (Go-No-Go Gauges):**
    *   **Use:** Primarily for checking the **major diameter, pitch diameter, and effective diameter** against specified limits. They are used for rapid inspection and to determine if a part is within tolerance.
    *   **Types:**
        *   **Ring Gauges:** For external threads.
        *   **Plug Gauges:** For internal threads.
    *   **Go Thread Gauge:** Checks if the thread is large enough (for external) or small enough (for internal) to mate with a corresponding part.
    *   **No-Go Thread Gauge:** Checks if the thread is too large (for external) or too small (for internal) to mate with a corresponding part.
    *   *According to Sharp & Hume, the "Go" thread gauge is often designed to engage the pitch diameter and the "No-Go" gauge to engage the major diameter, or vice-versa depending on the thread standard.*
*   **Optical Projector / Toolmaker's Microscope:**
    *   **Use:** For precise measurement of **thread profile, flank angle, pitch, and minor diameter**. It projects a magnified image of the thread profile onto a screen.
    *   **Princ:** The thread is illuminated, and its magnified silhouette is projected. Measurements are taken using a coordinate measuring system on the projector.
    *   *Bolton's discussion on mechatronics can relate to the advanced optical measurement systems used in modern manufacturing and inspection.*
*   **LVDT (Linear Variable Differential Transformer):**
    *   **Use:** While not directly used for measuring thread parameters, LVDTs are crucial components in **coordinate measuring machines (CMMs)** and other automated inspection systems that can measure thread parameters with high precision. They are used for precise displacement sensing.
    *   *The calibration of LVDTs is essential for ensuring the accuracy of measurements made by CMMs.*
*   **Dial Gauge:**
    *   **Use:** Can be used in conjunction with other setups to measure run-out or variations in pitch diameter by traversing along the thread. Can also be used with specialized fixtures for measuring thread pitch or variations.
    *   *Calibration of dial gauges, as discussed in the module, is vital for their accurate use in any measurement scenario.*

---

### 4. Measurement Procedures and Calculations

**a) Measuring Major Diameter (External Thread):**

1.  **Instrument:** Outside Micrometer.
2.  **Procedure:**
    *   Ensure the micrometer is calibrated and set to zero.
    *   Clean the thread and the micrometer anvil/spindle.
    *   Place the thread between the anvil and spindle.
    *   Rotate the thimble until the spindle contacts the crests of the thread. Use a ratchet stop for consistent pressure.
    *   Read the measurement.
3.  **Calculation:** The reading directly gives the major diameter ($D$).

**b) Measuring Pitch Diameter (External Thread - Thread Micrometer):**

1.  **Instrument:** Thread Micrometer.
2.  **Procedure:**
    *   Ensure calibration and zero setting.
    *   Select the correct thread micrometer for the thread pitch.
    *   Clean the thread and the micrometer's V-spindle and pointed anvil.
    *   Place the V-spindle over the thread groove and the pointed anvil at the root.
    *   Rotate the thimble until firm contact is made.
    *   Read the measurement.
3.  **Calculation:** The reading approximates the pitch diameter ($P_m$). The exact formula for calculating pitch diameter from thread micrometer reading ($M$) is:
    $M = P_m + \frac{d_w}{\sin(\alpha/2)}$
    where $d_w$ is the diameter of the V-groove in the micrometer spindle, and $\alpha$ is the flank angle (usually 60°). For a standard 60° thread, $d_w$ is designed such that this simplifies.

**c) Measuring Pitch Diameter (External Thread - Three Wire Method):**

1.  **Instrument:** Standard Outside Micrometer, Three wires of known diameter ($d_w$).
2.  **Procedure:**
    *   Calibrate the micrometer.
    *   Select wires of appropriate diameter for the thread pitch (refer to tables in Metrology handbooks like Shotbolt & Gayler). The wire diameter should be such that it contacts the thread flanks at the pitch diameter and clears the crests and roots.
    *   Clean the thread and wires.
    *   Place two wires on opposite sides of the thread, in the same groove.
    *   Place the third wire on top, in the adjacent groove, resting on the crests.
    *   Position the micrometer spindle and anvil over the wires. The spindle contacts the top wire, and the anvil contacts the two lower wires.
    *   Rotate the thimble until firm contact is made.
    *   Record the micrometer reading ($M$).
3.  **Calculation:**
    *   **Pitch Diameter ($P_m$)**:
        $P_m = M - d_w \left(1 + \frac{1}{\sin(\alpha/2)}\right)$
        Where:
        *   $M$ = Micrometer reading over wires
        *   $d_w$ = Diameter of the measuring wires
        *   $\alpha$ = Included flank angle (e.g., 60° for Unified/Metric)
    *   **Example:** For a 1/4"-20 UNC thread (pitch $p = 1/20$ inch, flank angle $\alpha = 60^\circ$), if the micrometer reading ($M$) is 6.450 mm and the wire diameter ($d_w$) is 1.083 mm:
        $\alpha/2 = 30^\circ$
        $\sin(30^\circ) = 0.5$
        $1/\sin(30^\circ) = 2$
        $P_m = 6.450 \text{ mm} - 1.083 \text{ mm} (1 + 2)$
        $P_m = 6.450 \text{ mm} - 1.083 \text{ mm} \times 3$
        $P_m = 6.450 \text{ mm} - 3.249 \text{ mm} = 3.201 \text{ mm}$
        *(Note: Ensure consistent units, convert if necessary. This example uses hypothetical metric values for illustration)*

**d) Measuring Pitch (p) or Threads Per Inch (TPI):**

1.  **Instrument:** Vernier Caliper or Toolmaker's Microscope.
2.  **Procedure:**
    *   **Using Vernier Caliper:**
        *   Place the jaws on two adjacent crests or roots.
        *   Measure the distance over a number of threads (e.g., 5 or 10 threads) to improve accuracy.
        *   Divide the total measured length by the number of threads to find the pitch.
    *   **Using Toolmaker's Microscope:**
        *   Align the crosshairs along the axis of the screw.
        *   Measure the distance between the centers of two adjacent threads.
3.  **Calculation:**
    *   $p = \frac{\text{Measured Length}}{\text{Number of Threads}}$
    *   $TPI = \frac{1}{p}$ (if $p$ is in inches)

**e) Measuring Flank Angle:**

1.  **Instrument:** Optical Projector or Toolmaker's Microscope.
2.  **Procedure:**
    *   Project or view a magnified profile of the thread.
    *   Align a protractor or angular scale on the microscope/projector with the flanks of the thread.
    *   Measure the angle between the flanks.
3.  **Calculation:** Direct reading from the instrument.

---

### 5. Calibration Considerations for Instruments Used

*   **Vernier Caliper/Micrometer:**
    *   Check for zero error.
    *   Verify calibration against standard slip gauges.
    *   Ensure measuring faces are clean and parallel.
    *   Ratchet stop ensures consistent measuring force.
*   **LVDT:**
    *   Calibrate its output against known displacements using a calibration bench or slip gauges.
    *   Ensure the core is properly aligned with the coils.
*   **Dial Gauge:**
    *   Check for zero error.
    *   Verify the linearity of its movement by comparing readings with known displacements.
    *   Ensure the contact point is not worn.

---

### 6. Practice Questions and Exercises

**Question 1:**
A standard outside micrometer is used to measure the pitch diameter of an external thread using the three-wire method. The measured reading ($M$) is 25.35 mm. The measuring wires used have a diameter ($d_w$) of 1.5 mm. The thread is a standard Metric thread with a 60° flank angle. Calculate the pitch diameter ($P_m$).

**Answer 1:**
Given:
$M = 25.35$ mm
$d_w = 1.5$ mm
Flank angle ($\alpha$) = 60°
$\alpha/2 = 30°$
$\sin(\alpha/2) = \sin(30°) = 0.5$
$1/\sin(\alpha/2) = 1/0.5 = 2$

Using the formula:
$P_m = M - d_w \left(1 + \frac{1}{\sin(\alpha/2)}\right)$
$P_m = 25.35 \text{ mm} - 1.5 \text{ mm} (1 + 2)$
$P_m = 25.35 \text{ mm} - 1.5 \text{ mm} (3)$
$P_m = 25.35 \text{ mm} - 4.50 \text{ mm}$
$P_m = 20.85$ mm

**Question 2:**
You are tasked with inspecting a batch of M10 x 1.5 (Metric thread) bolts. What are the key parameters you would measure, and which instruments would you primarily use for each?

**Answer 2:**
*   **Major Diameter:** Primarily an **Outside Micrometer**. A **Go-No-Go Ring Gauge** for quick inspection.
*   **Pitch Diameter:** The most critical for interchangeability. Primarily the **Three-Wire Method** with a standard micrometer, or a specialized **Thread Micrometer**. A **Go-No-Go Thread Ring Gauge** for quick inspection.
*   **Pitch:** Measured using a **Vernier Caliper** (over multiple threads) or a **Toolmaker's Microscope**.
*   **Flank Angle:** Best measured using an **Optical Projector** or **Toolmaker's Microscope**.
*   **Thread Depth:** A **Depth Micrometer** can be used.

**Question 3:**
Explain the purpose of a "Go" thread gauge and a "No-Go" thread gauge in screw thread inspection.

**Answer 3:**
*   **"Go" Thread Gauge:** This gauge is designed to pass over or into the thread if the thread dimensions are within the acceptable **maximum material condition (MMC)**. For external threads, it checks if the thread is not too large in major diameter and not too small in pitch diameter. For internal threads, it checks if the thread is not too small in minor diameter and not too large in pitch diameter. If the "Go" gauge does not fit, the thread is undersized or has other dimensional defects.
*   **"No-Go" Thread Gauge:** This gauge is designed to **not pass** over or into the thread if the thread dimensions are within acceptable limits. It is used to check the **least material condition (LMC)**. For external threads, it checks if the thread is not too large in pitch diameter or too small in major diameter. For internal threads, it checks if the thread is not too small in pitch diameter or too large in minor diameter. If the "No-Go" gauge passes, the thread is oversized or has other dimensional defects.

---

### 7. Important Points to Remember

*   **Calibration is Key:** Ensure all measuring instruments are properly calibrated before use. This directly relates to CO1 (Choose the appropriate instruments).
*   **Cleanliness:** Keep threads and instrument measuring surfaces meticulously clean to avoid errors.
*   **Consistent Force:** Use the ratchet stop on micrometers to apply a consistent measuring force.
*   **Wire Selection:** For the three-wire method, selecting the correct wire diameter is crucial for accurate pitch diameter measurement. Consult relevant tables.
*   **Pitch Diameter is Critical:** For interchangeability, the pitch diameter is the most important thread parameter.
*   **Toolmaker's Microscope:** Provides the most detailed information about the thread profile but is slower than gauges.
*   **LVDT and Dial Gauges:** While not directly measuring threads, they are vital components in more sophisticated measurement systems. Understanding their calibration (as per module 1) is essential for accurate overall measurement outcomes. This relates to CO4 (Demonstrate the functions and control of various devices).
*   **Accuracy vs. Speed:** Choose instruments based on the required accuracy and the need for rapid inspection (e.g., gauges for speed, micrometers/wires for accuracy). This aligns with CO2 (Determine dimensional and form accuracies).

---

### 8. Alignment with Course Outcomes

*   **CO1: Choose the appropriate instruments for different measurements (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by detailing various instruments (micrometers, calipers, gauges, optical tools) and their specific applications for measuring different screw thread parameters.
*   **CO2: Determine dimensional and form accuracies of various components (Knowledge Level: K3)**
    *   The entire focus of measuring screw thread parameters is to determine their dimensional accuracy. This topic teaches how to measure key dimensions like major diameter, pitch diameter, pitch, and flank angle, which are essential for assessing form accuracy.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3)**
    *   While not directly about mechanism design, understanding screw thread parameters is fundamental to designing and analyzing mechanisms that use screws for power transmission (e.g., lead screws in machine tools) or fastening. Accurate thread measurements ensure proper meshing and functionality of these components.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (Knowledge Level: K3)**
    *   This topic indirectly supports CO4 by highlighting how instruments like LVDTs are integral parts of automated inspection systems (like CMMs) used in industrial automation. The calibration of these devices is crucial for reliable automated measurements.
*   **CO5: Demonstrate 3D printing technique (Knowledge Level: K3)**
    *   This topic has a weaker direct link to CO5. However, understanding precise dimensional measurement of manufactured parts is a prerequisite for verifying the accuracy of 3D printed components, especially those with threaded features.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References

*   **Shotbolt C.R. and Gayler J.F.W, "Metrology for Engineers, 5th edition"**: Crucial for detailed procedures, formulas, and tables for thread measurement, especially the three-wire method.
*   **Sharp K.W.B. and Hume Sir Isaac, "Practical Engineering Metrology"**: Provides foundational knowledge on metrology principles and instrument usage for thread measurement.
*   **Bolton W., "Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering"**: Offers context on the advanced instrumentation and automated systems where LVDTs and other sensors play a role in measurement.
*   **Collett, C.V. and Hope, A.D, "Engineering Measurements"**: A good reference for general measurement principles applicable to screw threads.

---