---
title: "Calibration of vernier caliper, micrometer, LVDT and dial gauge."
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636fe"
status: "completed"
scrapedAt: "2026-05-20T18:01:22.869Z"
---
# MECHANICAL ENGINEERING LAB

## Module 1: Calibration of Vernier Caliper, Micrometer, LVDT and Dial Gauge

### Topic: Calibration of Vernier Caliper, Micrometer, LVDT and Dial Gauge

This module focuses on understanding and performing the calibration of essential metrology instruments used for precise dimensional measurements. Calibration is crucial to ensure the accuracy and reliability of these instruments, which directly impacts the quality of manufactured components.

---

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the principles of operation for Vernier calipers, micrometers, LVDTs, and dial gauges.
*   Identify the sources of errors in these measuring instruments.
*   Perform calibration procedures for Vernier calipers and micrometers using standard gauge blocks.
*   Analyze the linearity and sensitivity of an LVDT.
*   Determine the accuracy and repeatability of a dial gauge.
*   Relate the importance of calibration to product quality and manufacturing precision.
*   Select the appropriate instrument for a given measurement task (CO1).
*   Accurately measure dimensions of components using these calibrated instruments (CO2).

---

### Introduction to Metrology and Calibration

**Metrology** is the scientific study of measurement. It involves the application of scientific knowledge to establish units of measurement and to develop methods of measurement. In mechanical engineering, accurate measurements are fundamental for:

*   Ensuring interchangeability of parts.
*   Controlling manufacturing processes.
*   Verifying product specifications.
*   Maintaining quality control.

**Calibration** is the process of comparing a measuring instrument to a known standard of known accuracy, to detect and record any deviation from that standard. It establishes a relationship between the instrument's readings and the true values of the measured quantity.

**Why is Calibration Important?**

*   **Accuracy:** Ensures measurements are close to the true values.
*   **Reliability:** Provides confidence in the instrument's performance.
*   **Traceability:** Links measurements to national or international standards.
*   **Compliance:** Meets industry standards and regulatory requirements.
*   **Cost Reduction:** Prevents scrap and rework due to inaccurate measurements.

*(Referenced from: Shotbolt C.R. and Gayler J.F.W - Metrology for Engineers)*

---

### 1. Vernier Caliper

A Vernier caliper is a precision instrument used for measuring external and internal dimensions, as well as depth, with greater accuracy than a standard ruler.

#### 1.1 Principle of Operation

The Vernier caliper utilizes a sliding jaw controlled by a Vernier scale. The main scale has graduations in millimeters and centimeters. The Vernier scale allows for reading fractions of the smallest division on the main scale.

*   **Main Scale:** Typically marked in millimeters (mm).
*   **Vernier Scale:** Has divisions that are slightly smaller than the divisions on the main scale. For a typical Vernier caliper, if the smallest division on the main scale is 1 mm, the Vernier scale might have 10 divisions that span 9 mm (i.e., each Vernier division = 0.9 mm).

**Least Count (LC):** The smallest measurement that can be read accurately using the instrument.

$$ \text{LC} = \text{Smallest division on main scale} - \text{Value of one Vernier scale division} $$

For the example above:
$$ \text{LC} = 1 \text{ mm} - 0.9 \text{ mm} = 0.1 \text{ mm} $$

A more general formula for LC is:
$$ \text{LC} = \frac{\text{Value of smallest division on main scale}}{\text{Number of divisions on the Vernier scale}} $$

#### 1.2 Components of a Vernier Caliper

*   **Main Scale:** Fixed scale with primary markings.
*   **Sliding Jaw (with Vernier Scale):** Movable jaw that slides along the main scale.
*   **Outside Jaws:** For measuring external dimensions.
*   **Inside Jaws:** For measuring internal dimensions.
*   **Depth Rod/Blade:** Extends from the end of the sliding jaw for depth measurements.
*   **Thumb Screw/Locking Screw:** To fix the sliding jaw in position.

#### 1.3 Sources of Error in Vernier Calipers

*   **Zero Error:** When the jaws are closed, the zero mark on the Vernier scale does not coincide with the zero mark on the main scale.
    *   **Positive Zero Error:** Vernier zero is to the right of the main scale zero.
    *   **Negative Zero Error:** Vernier zero is to the left of the main scale zero.
*   **Parallax Error:** Occurs when the observer's eye is not perpendicular to the scale.
*   **Wear on Jaws:** Worn jaws can lead to inaccurate measurements.
*   **Defective Vernier Scale:** Improperly manufactured Vernier scale.
*   **Loose Jaw:** The sliding jaw is not held firmly.

#### 1.4 Calibration Procedure for Vernier Caliper

Calibration involves checking for zero error and comparing readings against a known standard.

**Materials Required:**

*   Vernier Caliper to be calibrated.
*   Standard Gauge Blocks of known accurate dimensions (e.g., 25 mm, 50 mm).
*   Clean cloth.

**Steps:**

1.  **Clean the instrument:** Ensure the jaws and scales are clean and free from dust or oil.
2.  **Check for Zero Error:**
    *   Close the jaws of the Vernier caliper gently.
    *   Observe the alignment of the zero marks on the main scale and the Vernier scale.
    *   If the zeros do not coincide:
        *   **Positive Zero Error:** Note the Vernier division that aligns with a main scale division. Multiply this by the LC to get the error.
        *   **Negative Zero Error:** Note the Vernier division to the *left* of the main scale zero that aligns. Multiply this by the LC and subtract from zero (e.g., -0.1 mm).
    *   **Correction:**
        *   Corrected Reading = Observed Reading - Zero Error
3.  **Calibration with Gauge Blocks:**
    *   Select a gauge block of known dimension (e.g., 25 mm).
    *   Place the gauge block between the outside jaws of the Vernier caliper.
    *   Close the jaws gently onto the gauge block.
    *   Lock the sliding jaw.
    *   Read the measurement from the scales.
    *   Compare the observed reading with the known dimension of the gauge block.
    *   Repeat this process for several gauge blocks of different sizes.
    *   Record the observed reading, zero error, and corrected reading for each gauge block.

**Example:**

Suppose a Vernier caliper has an LC of 0.02 mm.
When jaws are closed, the 3rd Vernier division aligns with a main scale division. The Vernier zero is to the right of the main scale zero.

*   **Zero Error Type:** Positive
*   **Zero Error Value:** 3 divisions * 0.02 mm/division = 0.06 mm

If you measure a 50 mm gauge block and get an observed reading of 50.08 mm:

*   **Corrected Reading:** 50.08 mm - 0.06 mm = 50.02 mm

The error in calibration is the difference between the corrected reading and the standard gauge block size: 50.02 mm - 50.00 mm = 0.02 mm.

#### 1.5 Important Points to Remember for Vernier Caliper

*   Always use the Vernier caliper gently.
*   Ensure jaws are parallel to the surface being measured.
*   Read the main scale first, then find the aligning Vernier division.
*   Always apply the zero error correction.
*   Properly lock the sliding jaw before taking the reading.

---

### 2. Micrometer (Outside Micrometer)

An outside micrometer is a precision instrument used for measuring external dimensions with higher accuracy than a Vernier caliper, typically up to 0.01 mm or 0.001 mm.

#### 2.1 Principle of Operation

The micrometer operates on the principle of a screw thread. A finely threaded spindle moves linearly when rotated. The precise pitch of the screw thread and the graduated scales allow for very fine measurements.

*   **Screw Pitch:** The distance the spindle moves axially for one complete rotation of the thimble. A common pitch is 0.5 mm or 1 mm.
*   **Thimble:** Rotates with the spindle and has a scale marked on it.
*   **Sleeve/Barrel:** Has the main scale (datum line) marked on it, showing whole millimeters and half millimeters.

**Least Count (LC):**

$$ \text{LC} = \frac{\text{Pitch of the screw}}{\text{Number of divisions on the thimble}} $$

**Example:**
If the pitch of the screw is 0.5 mm and the thimble has 50 divisions, then:
$$ \text{LC} = \frac{0.5 \text{ mm}}{50} = 0.01 \text{ mm} $$

#### 2.2 Components of an Outside Micrometer

*   **Frame:** The U-shaped structure holding the anvil and spindle.
*   **Anvil:** The fixed measuring surface.
*   **Spindle:** The movable measuring surface, threaded internally.
*   **Sleeve/Barrel:** Fixed to the frame, contains the main scale (datum line).
*   **Thimble:** Rotates along the spindle, contains the circular scale.
*   **Ratchet Stop:** Provides a consistent measuring force by slipping when a preset torque is reached.
*   **Locking Nut/Ring:** To lock the spindle in position.

#### 2.3 Sources of Error in Micrometers

*   **Zero Error:** Similar to Vernier calipers, when the anvil and spindle touch, the zero on the thimble should align with the datum line on the sleeve.
    *   **Positive Zero Error:** Thimble zero is above the datum line.
    *   **Negative Zero Error:** Thimble zero is below the datum line.
*   **Parallax Error:** Reading the thimble scale at an angle.
*   **Backlash:** Play in the screw threads that causes a slight delay in spindle movement when reversing direction.
*   **Non-perpendicularity:** Spindle not perpendicular to the anvil.
*   **Wear on Measuring Surfaces:** Anvil and spindle faces can wear out.
*   **Unequal Pitch of Screw Thread:** The thread pitch is not uniform along the spindle.
*   **Defective Ratchet:** If the ratchet is not functioning correctly, the measuring force will be inconsistent.

#### 2.4 Calibration Procedure for Outside Micrometer

**Materials Required:**

*   Outside Micrometer to be calibrated.
*   Standard Gauge Blocks of known accurate dimensions (e.g., 25 mm, 50 mm).
*   Clean cloth.
*   Micrometer calibration standard (if available, for a more rigorous check).

**Steps:**

1.  **Clean the instrument:** Ensure the anvil, spindle face, and sleeve are clean.
2.  **Check for Zero Error:**
    *   Rotate the ratchet until the spindle makes contact with the anvil.
    *   Observe the alignment of the zero mark on the thimble with the datum line on the sleeve.
    *   If the zeros do not coincide:
        *   **Positive Zero Error:** The zero of the thimble is above the datum line.
        *   **Negative Zero Error:** The zero of the thimble is below the datum line.
    *   **Correction:**
        *   Corrected Reading = Observed Reading - Zero Error
    *   *Note:* Backlash can be checked by approaching the zero from opposite directions. If the reading differs, backlash is present.
3.  **Calibration with Gauge Blocks:**
    *   Select a gauge block of known dimension (e.g., 25 mm).
    *   Place the gauge block between the anvil and the spindle.
    *   Rotate the thimble using the ratchet stop until it clicks three times, ensuring consistent pressure.
    *   Read the measurement from the sleeve and thimble scales.
    *   Compare the observed reading with the known dimension of the gauge block.
    *   Repeat for several gauge blocks.
    *   Record observed reading, zero error, and corrected reading for each gauge block.

**Reading a Micrometer:**

*   **Sleeve Reading:** Read the last fully visible millimeter mark on the sleeve. Then, look for the half-millimeter mark after the millimeter mark.
*   **Thimble Reading:** Find the division on the thimble that aligns perfectly with the datum line on the sleeve.
*   **Total Reading:** Sleeve Reading + (Thimble Reading × LC)

**Example:**

Micrometer LC = 0.01 mm.
Sleeve shows the 6.5 mm mark as the last fully visible mark.
Thimble shows the 23rd division aligned with the datum line.

*   **Observed Reading:** 6.5 mm + (23 × 0.01 mm) = 6.5 mm + 0.23 mm = 6.73 mm

If there is a positive zero error of 0.02 mm:
*   **Corrected Reading:** 6.73 mm - 0.02 mm = 6.71 mm

#### 2.5 Important Points to Remember for Micrometer

*   Always use the ratchet stop for consistent pressure.
*   Ensure the measuring faces are clean and parallel.
*   The object being measured should be firmly placed against the anvil.
*   Read the scales carefully, avoiding parallax error.
*   Apply zero error correction.

---

### 3. Linear Variable Differential Transformer (LVDT)

An LVDT is an electro-mechanical transducer that converts linear displacement into an electrical signal (voltage). It is widely used for precise measurement of displacement, position, and velocity.

#### 3.1 Principle of Operation

An LVDT consists of a primary coil and two secondary coils arranged coaxially. A movable magnetic core (armature) is placed inside these coils.

1.  **Primary Coil:** Energized by an AC excitation voltage.
2.  **Secondary Coils:** Connected in series opposition.
3.  **Armature:** The movable core, when displaced, changes the magnetic coupling between the primary and secondary coils.

When the armature is at the **null position** (equidistant from both secondary coils), the induced voltages in the secondary coils are equal in magnitude but 180 degrees out of phase. Due to the series opposition, the net output voltage is zero.

When the armature is moved from the null position:

*   **Movement in one direction:** Induces a higher voltage in one secondary coil than the other. This results in a non-zero AC output voltage.
*   **Movement in the opposite direction:** Reverses the phase of the output voltage.

The magnitude of the output voltage is directly proportional to the displacement of the armature from the null position, within a certain range.

*(Referenced from: Bolton W. - Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering)*

#### 3.2 Components of an LVDT

*   **Primary Coil:** Driven by AC excitation.
*   **Secondary Coils (2):** Wound oppositely, connected in series.
*   **Armature (Core):** Movable ferromagnetic rod.
*   **Housing:** Protects the internal components.

#### 3.3 Calibration Procedure for LVDT

Calibration involves establishing the relationship between the LVDT's electrical output (voltage) and the actual linear displacement of its core.

**Materials Required:**

*   LVDT with its associated signal conditioner/amplifier and readout unit.
*   Precision displacement mechanism (e.g., micrometer head, calibrated lead screw, or a precise jig with a Vernier caliper).
*   Gauge blocks (optional, for setting reference points).
*   Power supply for LVDT excitation.

**Steps:**

1.  **Setup:**
    *   Mount the LVDT securely.
    *   Couple the LVDT core to the precision displacement mechanism.
    *   Connect the LVDT to its signal conditioner and readout unit.
    *   Apply excitation voltage to the LVDT.
2.  **Establish Null Position:**
    *   Move the armature to the position where the output voltage reading is zero (or at its minimum). This is the null position. Mark this position.
3.  **Linearity Test:**
    *   Set the displacement mechanism to zero (corresponding to the null position). Record the output voltage (should be close to zero).
    *   Incrementally move the armature over its specified range of travel using the displacement mechanism.
    *   For each increment of displacement (e.g., 0.1 mm, 0.2 mm, etc.), record the corresponding output voltage reading.
    *   Ensure you move the armature in both positive and negative directions from the null position.
4.  **Data Analysis:**
    *   Plot the output voltage (y-axis) against the displacement (x-axis).
    *   The ideal plot should be a straight line passing through the origin (or the defined null point).
    *   **Sensitivity:** Calculate the slope of this line. Sensitivity is usually expressed in volts per millimeter (V/mm) or millivolts per millimeter (mV/mm).
        $$ \text{Sensitivity} = \frac{\Delta \text{Output Voltage}}{\Delta \text{Displacement}} $$
    *   **Linearity Error:** The maximum deviation of the actual output curve from the best-fit straight line over the operating range. This indicates how linear the sensor's response is.
5.  **Repeatability Test:**
    *   Set the armature to various positions and return it to a specific position multiple times. The output readings at that specific position should be consistent.

#### 3.4 Importance of LVDT Calibration

*   **Accuracy of Displacement Measurement:** Ensures the measured displacement is close to the actual displacement.
*   **Linearity Check:** Verifies the LVDT's suitability for the intended application range.
*   **Sensitivity Determination:** Provides the conversion factor for converting raw voltage output to displacement units.
*   **System Integration:** Essential for integrating the LVDT into control systems (CO4).

#### 3.5 Important Points to Remember for LVDT

*   The AC excitation frequency and voltage are critical.
*   The signal conditioner's settings (gain, filtering) affect the output.
*   Environmental factors like temperature can influence readings.
*   Ensure the mechanical coupling is smooth and without play.

---

### 4. Dial Gauge (Dial Indicator)

A dial gauge is a comparator instrument used for measuring small linear displacements, deviations from a flat surface, runout, and concentricity. It magnifies small movements of a contact point into larger movements of a pointer on a calibrated dial.

#### 4.1 Principle of Operation

A dial gauge typically uses a rack-and-pinion mechanism combined with a Geneva mechanism (or similar gearing) to amplify the linear motion of a plunger into the rotational motion of a pointer on a graduated dial.

*   **Plunger:** The part that contacts the surface being measured. It moves linearly.
*   **Rack:** A toothed bar attached to the plunger.
*   **Pinion:** A gear that meshes with the rack.
*   **Gears:** A series of gears to further amplify the rotation.
*   **Pointer:** Attached to the final gear, rotates on the dial.
*   **Dial:** Marked with divisions representing small units of displacement (e.g., 0.01 mm, 0.001 mm).

*(Referenced from: Sharp K.W.B. and Hume Sir Isaac - Practical Engineering Metrology)*

#### 4.2 Components of a Dial Gauge

*   **Dial Face:** Calibrated scale and pointer.
*   **Plunger:** Movable contact element.
*   **Contact Point:** Tip of the plunger.
*   **Sleeve:** Guides the plunger.
*   **Bezel:** Rotatable ring to set the dial zero.
*   **Lug/Clamp:** For mounting the dial gauge.

#### 4.3 Calibration Procedure for Dial Gauge

Calibration aims to verify the accuracy of the divisions on the dial and the overall linearity of the instrument.

**Materials Required:**

*   Dial Gauge to be calibrated.
*   Precision height gauge or a calibrated surface plate with a fine-adjustment screw mechanism.
*   Standard gauge blocks.
*   Magnetic stand or clamp for mounting the dial gauge.

**Steps:**

1.  **Mounting and Zeroing:**
    *   Mount the dial gauge securely on a stand.
    *   Set the plunger to a reference position.
    *   Rotate the bezel to align the pointer with the '0' mark on the dial.
2.  **Calibration using Gauge Blocks:**
    *   Place a stack of gauge blocks (e.g., 10 mm) on the surface plate.
    *   Position the dial gauge so its contact point rests on the top surface of the gauge blocks.
    *   Ensure the plunger is depressed by a small amount, and set the dial to zero.
    *   Now, increase the height by adding or removing a gauge block (e.g., add a 1 mm gauge block).
    *   The pointer should move by the increment corresponding to the added gauge block.
    *   Record the dial reading for each increment.
    *   Compare the observed displacement on the dial with the actual change in height.
3.  **Calibration using a Precision Screw Mechanism:**
    *   Mount the dial gauge so its plunger is controlled by a precision screw mechanism (like a micrometer head or specialized calibrator).
    *   Set the dial to zero at a reference position.
    *   Advance the screw mechanism in precise increments (e.g., 0.1 mm).
    *   Record the dial reading at each increment.
    *   Compare the observed reading with the known displacement from the screw mechanism.
4.  **Repeatability Test:**
    *   Move the plunger to several positions within its range and return it to each position multiple times.
    *   The readings at each specific position should be consistent.

#### 4.4 Sources of Error in Dial Gauges

*   **Zero Error:** The dial does not read zero at the intended reference position.
*   **Backlash:** Play in the gearing and plunger mechanism.
*   **Hysteresis:** Difference in readings when approaching a point from different directions.
*   **Uneven Graduation:** The divisions on the dial are not uniformly spaced.
*   **Parallax Error:** Reading the dial at an angle.
*   **Wear on Contact Point or Sleeve:** Affects the accuracy of plunger movement.

#### 4.5 Importance of Dial Gauge Calibration

*   **Accuracy of Comparator Measurements:** Essential for comparing dimensions and checking form errors.
*   **Ensuring Repeatability:** Crucial for processes requiring consistent measurements.
*   **Detecting Mechanical Issues:** Helps identify wear or internal problems.
*   **Surface Finish and Form Evaluation:** Calibration ensures the reliability of these checks (CO2).

#### 4.6 Important Points to Remember for Dial Gauge

*   Ensure the dial is mounted rigidly.
*   The contact point should be perpendicular to the surface being measured.
*   Avoid excessive force on the plunger.
*   Check for backlash and hysteresis.
*   Rotate the bezel to set the zero precisely.

---

### Linking to Course Outcomes (COs)

*   **CO1: Choose the appropriate instruments for different measurements:**
    *   Understanding the capabilities and accuracy of Vernier calipers (typically 0.02-0.05 mm), micrometers (0.01 mm or better), LVDTs (high precision, analog output), and dial gauges (comparator, magnified readings) helps you select the right tool. For example, a micrometer is preferred over a Vernier caliper for measuring the diameter of a precision shaft where higher accuracy is needed. An LVDT is suitable for automated systems or continuous monitoring of displacement.
*   **CO2: Determine dimensional and form accuracies of various components:**
    *   Calibrated Vernier calipers and micrometers are used to directly measure dimensions. Calibrated dial gauges are essential for checking flatness, roundness, runout, and parallelism by comparing component features to a master reference.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation:**
    *   LVDTs are key sensors in automated systems for feedback control (e.g., position control of actuators). Their calibration is crucial for the system's accuracy and performance. Understanding how to interface and use calibrated LVDTs is fundamental.
*   **General Importance:** Calibration ensures that the measurements taken in any engineering lab or industrial setting are reliable and lead to correct decisions regarding quality and process control.

---

### Practice Questions

**Question 1:**
A Vernier caliper has a main scale with a least count of 1 mm. The Vernier scale has 10 divisions that coincide with 9 divisions on the main scale. If, when the jaws are closed, the zero of the Vernier scale is to the right of the main scale zero, and the 4th Vernier division aligns with a main scale division, what is the zero error?

**Answer:**
*   LC of Vernier caliper = (Smallest main scale division) / (Number of Vernier divisions) = 1 mm / 10 = 0.1 mm.
*   The zero of the Vernier scale is to the right, indicating a positive zero error.
*   The 4th Vernier division aligns.
*   Zero Error = (Number of aligned Vernier division) × LC = 4 × 0.1 mm = **0.4 mm**.

---

**Question 2:**
An outside micrometer has a screw pitch of 0.5 mm and its thimble is divided into 50 equal divisions. When measuring a component, the sleeve shows 15.5 mm and the 28th thimble division aligns with the datum line. The micrometer has a negative zero error of 0.03 mm. What is the actual dimension of the component?

**Answer:**
*   LC of micrometer = Pitch / Number of thimble divisions = 0.5 mm / 50 = 0.01 mm.
*   Sleeve reading = 15.5 mm.
*   Thimble reading = 28 divisions × 0.01 mm/division = 0.28 mm.
*   Observed reading = Sleeve reading + Thimble reading = 15.5 mm + 0.28 mm = 15.78 mm.
*   Zero error is negative (-0.03 mm).
*   Actual dimension = Observed reading - Zero error = 15.78 mm - (-0.03 mm) = 15.78 mm + 0.03 mm = **15.81 mm**.

---

**Question 3:**
An LVDT is calibrated and produces the following readings:
| Displacement (mm) | Output Voltage (V) |
| :---------------- | :----------------- |
| 0                 | 0.00               |
| 0.5               | 0.25               |
| 1.0               | 0.50               |
| 1.5               | 0.75               |
| 2.0               | 1.00               |

Calculate the sensitivity of the LVDT and comment on its linearity.

**Answer:**
*   **Sensitivity Calculation:**
    *   Using the first two points: Sensitivity = (0.25 V - 0.00 V) / (0.5 mm - 0 mm) = 0.25 V / 0.5 mm = **0.5 V/mm**.
    *   Using points 3 and 4: Sensitivity = (0.75 V - 0.50 V) / (1.5 mm - 1.0 mm) = 0.25 V / 0.5 mm = **0.5 V/mm**.
    *   The sensitivity is constant across the range.
*   **Linearity Comment:** The output voltage is directly proportional to the displacement. For every 0.5 mm increase in displacement, the output voltage increases by 0.25 V. This indicates that the LVDT exhibits excellent linearity over the tested range.

---

**Question 4:**
When calibrating a dial gauge, you add a 5 mm gauge block to a stack that was previously set to zero on the dial. The dial gauge pointer moves and indicates a reading of 4.98 mm. What does this deviation suggest about the dial gauge?

**Answer:**
The dial gauge is showing a reading of 4.98 mm for an actual displacement of 5 mm. This indicates a small error.
*   **Error:** Actual Displacement - Observed Displacement = 5.00 mm - 4.98 mm = 0.02 mm.
*   This suggests a potential **negative error** in the dial gauge's calibration or a **slight backlash** that causes the pointer to not fully reach the 5 mm mark. It's also possible the contact point didn't engage perfectly at the start or end of travel. This deviation should be noted and accounted for if high precision is required.

---

### Summary and Key Takeaways

*   **Calibration is paramount** for ensuring the accuracy and reliability of measuring instruments.
*   **Zero error** is a common error in mechanical instruments that must be identified and corrected.
*   **Vernier calipers** offer good accuracy for general-purpose measurements.
*   **Micrometers** provide higher precision for external dimensions due to their screw-thread mechanism.
*   **LVDTs** are electronic transducers ideal for continuous monitoring and automated systems, with their calibration focusing on linearity and sensitivity.
*   **Dial gauges** are comparators that magnify small displacements, used for checking form and deviations.
*   Understanding the principles of operation and potential errors is crucial for performing accurate measurements and selecting the right instrument for the job (CO1, CO2, CO4).

---
*(Note: Content is synthesized from general metrology principles and conceptual understanding relevant to the mentioned textbooks. Specific page references are not provided as this is a synthesized study note.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
