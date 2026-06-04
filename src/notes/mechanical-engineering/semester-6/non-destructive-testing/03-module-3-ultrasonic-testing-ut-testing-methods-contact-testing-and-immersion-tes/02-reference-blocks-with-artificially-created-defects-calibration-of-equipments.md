---
title: "Reference blocks with artificially created defects, calibration of equipments."
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 3: Ultrasonic Testing:  UT testing methods, contact testing and immersion testing, normal beam and straight beam testing, angle beam testing, dual crystal probe, ultrasonic testing techniques, resonance testing, through transmission technique, pulse echo testing technique, instruments used UT, accessories such as transducers, types, frequencies, and sizes commonly used."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463893"
status: "completed"
scrapedAt: "2026-05-20T18:06:15.140Z"
---
# Non-Destructive Testing: Module 3 - Ultrasonic Testing

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## Topic: Reference Blocks with Artificially Created Defects and Calibration of Equipment

---

### **1. Introduction to Reference Blocks and Calibration in UT**

*   **Purpose:** In Ultrasonic Testing (UT), accurately detecting and characterizing flaws is paramount. Reference blocks serve as essential tools for establishing baseline performance levels of UT equipment and for quantifying the size and severity of detected defects. Calibration ensures that the UT system is functioning correctly and providing reliable measurements.
*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Understanding the role of reference blocks and calibration directly enables carrying out inspections according to established procedures by ensuring the equipment is properly set up.
    *   **CO3 (K3):** While not directly signal or image processing, calibration is a prerequisite for reliable signal interpretation.

---

### **2. Reference Blocks with Artificially Created Defects**

#### **2.1 What are Reference Blocks?**

*   **Definition:** Reference blocks are standardized samples of a specific material (matching the material being inspected) that contain precisely located and characterized artificial defects or geometric features. These features are designed to mimic real-world flaws that might be encountered during an inspection.
*   **Key Concepts:**
    *   **Standardization:** Reference blocks are manufactured to strict specifications to ensure consistency and comparability of results.
    *   **Material Matching:** The material of the reference block should be as close as possible to the material of the component being inspected to account for variations in acoustic properties (e.g., sound velocity, attenuation).
    *   **Artificial Defects:** These are deliberately introduced flaws of known size, shape, and location.

#### **2.2 Types of Artificially Created Defects**

*   **Commonly Created Defects:**
    *   **Flat-bottomed holes (FBHs):** Cylindrical holes drilled into the block with a flat, perpendicular bottom. Used for calibrating sensitivity and determining defect depth.
    *   **Side-drilled holes (SDHs):** Holes drilled horizontally into the block, parallel to the surface. Used for calibrating angle beam probes and evaluating flaw orientation.
    *   **Notches:** Grooves or cuts made on the surface or subsurface of the block. Can be straight (rectangular), V-shaped, or rounded. Used to simulate surface cracks or other planar defects.
    *   **Slits:** Very narrow, planar openings, often created using wire inserts or EDM (Electrical Discharge Machining). Mimic tight cracks.
    *   **Holes of varying diameters:** Used for general sensitivity checks.
*   **Examples (Baldev Raj, 2008):** Chapter on UT calibration discusses various types of reference reflectors, including FBHs and SDHs, and their specific applications in sensitivity setting and distance-amplitude correction (DAC).

#### **2.3 Purpose and Application of Reference Blocks**

*   **Sensitivity Setting:** To establish the minimum signal amplitude required to indicate a defect of a specific size.
*   **Distance-Amplitude Correction (DAC):** To compensate for the natural attenuation of ultrasonic waves as they travel through the material, ensuring that defects at different depths produce comparable signal amplitudes.
*   **Velocity Measurement:** To determine the speed of sound in the material, which is crucial for accurate depth and positional measurements.
*   **Probe Angle Verification:** For angle beam testing, reference blocks with specific geometric features (like notches on edges) are used to verify the refracted angle of the ultrasonic beam.
*   **Resolution Testing:** To assess the ability of the UT system to distinguish between closely spaced reflectors.
*   **Discontinuity Evaluation:** To compare the amplitude of a detected flaw signal with those from known artificial defects to estimate the size and severity of the actual flaw.

#### **2.4 Common Reference Blocks**

*   **IIW Type 1 (International Institute of Welding):** A widely used block for general purpose calibration of angle beam and straight beam probes. It includes FBHs, SDHs, and a triangular slot. (Hull & V John, 2012) discusses the IIW block in detail.
*   **ASTM E164 Standard:** Specifies requirements for reference blocks used in ultrasonic examination of metallic materials.
*   **Vee-Notch Blocks:** Used for calibration and sensitivity adjustments, particularly for surface-breaking flaws.
*   **Calibration Blocks for Specific Applications:** Blocks designed for particular industries or inspection scenarios (e.g., aerospace, pipeline welding).

#### **2.5 Important Points to Remember:**

*   Always use a reference block made of the same or a very similar material to the component being inspected.
*   Ensure the reference block is clean and free from surface contamination.
*   Understand the geometry and location of the artificial defects on the reference block.

---

### **3. Calibration of Ultrasonic Testing Equipment**

#### **3.1 What is Calibration?**

*   **Definition:** Calibration is the process of adjusting and verifying the performance of an ultrasonic testing instrument against known standards to ensure accurate and reliable measurements. It involves setting parameters and checking that the instrument behaves as expected.
*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Proper calibration is fundamental to performing inspections in accordance with established procedures.
    *   **CO3 (K3):** Calibration directly impacts the accuracy of the signals processed and interpreted.

#### **3.2 Key Calibration Parameters**

*   **Velocity:** Setting the correct sound velocity for the material being tested. This is crucial for accurate depth and distance measurements.
*   **Zero Offset (or Index Point):** Establishing the starting point of the ultrasonic pulse and its travel time.
*   **Sensitivity:** Adjusting the gain of the instrument to detect echoes from reflectors of a specific size at a given depth.
*   **Range:** Setting the display to cover the expected depth of investigation.
*   **Time Varied Gain (TVG) / Distance Amplitude Correction (DAC):** Programming the instrument to automatically adjust the gain based on the depth of the reflector.

#### **3.3 Calibration Procedures**

*   **Standard Calibration Blocks (as discussed in Section 2):** These are the primary tools for calibration.
*   **Velocity Calibration:**
    1.  Select a reference block with a known thickness (e.g., a simple block of the same material).
    2.  Using a straight beam transducer, obtain an echo from the back wall of the block.
    3.  Input the known thickness into the instrument.
    4.  The instrument calculates and displays the sound velocity. Alternatively, if the velocity is known, the thickness can be calculated.
*   **Zero Offset Calibration:**
    1.  Place a transducer (often a dual-element transducer for near-surface measurements) on a clean, flat surface of a calibration block.
    2.  Set the zero offset to accurately represent the distance to the surface of the block. This ensures that reflections from the front surface are displayed at zero depth.
*   **Sensitivity Calibration (Using FBHs):**
    1.  Select a reference block with a known size FBH at a specific depth.
    2.  Use the appropriate transducer and a suitable couplant.
    3.  Position the transducer over the FBH.
    4.  Adjust the instrument's gain (or attenuation) until the echo from the FBH reaches a specific reference amplitude, often a percentage of the screen height (e.g., 80%).
    5.  Record the gain setting. This establishes the baseline sensitivity.
*   **DAC Calibration:**
    1.  Using a reference block with FBHs or SDHs at different depths, obtain echoes from each reflector.
    2.  For each echo, adjust the gain to bring it to a specific reference amplitude.
    3.  Plot these gain settings against the corresponding reflector depths on a graph (or program them into the instrument). This creates the DAC curve.
    4.  The DAC curve is then used to evaluate the amplitude of signals from suspected flaws in the component. If a flaw echo exceeds the DAC curve at its corresponding depth, it indicates a potentially larger or more significant flaw than the reference reflectors.

#### **3.4 Instruments Used in UT**

*   **Ultrasonic Flaw Detector:** The core instrument that generates, receives, and displays ultrasonic signals. Key features include:
    *   **Pulser/Receiver:** Generates the ultrasonic pulse and processes the received echoes.
    *   **Display (A-Scan):** Presents the received echoes as a waveform (amplitude vs. time or depth).
    *   **Gain Control:** Adjusts the amplification of received signals.
    *   **Range Control:** Sets the depth displayed.
    *   **Frequency Control:** Allows selection of operating frequency.
    *   **Filtering:** Reduces unwanted noise.
    *   **DAC/AVG (Amplitude-Distance-Distance-Gain):** Capabilities for amplitude evaluation.
*   **Phased Array Systems:** More advanced instruments that control multiple transducer elements electronically, allowing for beam steering and focusing.
*   **Time-of-Flight Diffraction (TOFD) Systems:** Specialized systems for accurately sizing defects, especially cracks.

#### **3.5 Accessories Used in UT**

*   **Transducers (Probes):** The heart of the UT system. They convert electrical energy into ultrasonic energy and vice-versa.
    *   **Types:**
        *   **Straight Beam (Normal Incidence):** Used for detecting flaws perpendicular to the surface and for thickness gauging.
        *   **Angle Beam:** Used for detecting flaws oriented at an angle to the surface (e.g., cracks in welds) by refracting the ultrasonic beam into the material at a specific angle.
        *   **Dual Element:** Consist of two piezoelectric elements – one for transmitting and one for receiving. They have a wear plate that protects the elements and allows for near-surface flaw detection and easier contact.
        *   **Center-Drilled Holes:** Used for calibrating angle beam probes.
        *   **Thru-Transmission:** Two probes (one transmitting, one receiving) are used on opposite sides of the material. Used for inspecting materials with high attenuation or for specific applications like thickness gauging of coatings.
    *   **Frequencies:** Typically range from 0.5 MHz to 20 MHz or higher.
        *   **Lower Frequencies (0.5-2 MHz):** Provide better penetration into highly attenuative or coarse-grained materials but offer lower resolution.
        *   **Higher Frequencies (5-20+ MHz):** Provide higher resolution for detecting smaller defects in fine-grained materials but have less penetration.
    *   **Sizes (Diameter of Element):**
        *   **Smaller diameters:** Offer better resolution and are more sensitive to small defects.
        *   **Larger diameters:** Provide better sound beaming (less divergence) and are more suitable for long-range inspection.
*   **Couplant:** A substance (e.g., water-based gel, grease, oil) used between the transducer and the surface of the component to eliminate air gaps and ensure efficient transmission of ultrasonic energy.
*   **Cables:** Connect the transducer to the UT instrument.
*   **Reference Blocks:** (As discussed previously).

#### **3.6 Important Points to Remember:**

*   Calibration is a critical step and must be performed regularly and according to established procedures.
*   The choice of reference block and calibration method depends on the material, component geometry, and the type of defects being sought.
*   Proper selection of transducers, frequencies, and couplant is essential for effective UT.
*   Understanding the limitations of the UT system and the reference standards is crucial for accurate interpretation.

---

### **4. Practice Questions and Exercises**

**Question 1:** What is the primary purpose of using a reference block with a flat-bottomed hole (FBH) in ultrasonic testing?
    *   a) To measure the surface roughness of the component.
    *   b) To calibrate the gain and establish the minimum detectable flaw size.
    *   c) To determine the material's density.
    *   d) To verify the couplant's viscosity.

**Question 2:** Explain why it is important for the reference block to be made of the same material as the component being inspected.
    *   **Answer:** This is crucial because different materials have different acoustic properties, such as sound velocity and attenuation. Using a matching material ensures that the calibration reflects the actual conditions of the inspection, leading to more accurate defect characterization and sizing.

**Question 3:** A UT technician is calibrating their equipment on a 25 mm thick steel block using a straight beam transducer. They obtain a backwall echo. If the instrument displays a sound velocity of 5900 m/s, what is the actual thickness of the block if the round trip time to the backwall was 8.5 µs?
    *   **Answer:**
        *   Round trip time = 8.5 µs = $8.5 \times 10^{-6}$ s
        *   Velocity = 5900 m/s
        *   Distance (round trip) = Velocity $\times$ Time
        *   Distance = $5900 \, \text{m/s} \times 8.5 \times 10^{-6} \, \text{s} = 0.05015 \, \text{m} = 50.15 \, \text{mm}$
        *   Actual thickness = Distance / 2
        *   Actual thickness = $50.15 \, \text{mm} / 2 = 25.075 \, \text{mm}$ (This confirms the calibration is reasonable).

**Question 4:** List three common types of artificial defects found on UT reference blocks and briefly describe their typical use.
    *   **Answer:**
        *   **Flat-Bottomed Holes (FBHs):** Used for calibrating sensitivity and setting the initial gain to detect flaws of a specific size. They represent volumetric flaws.
        *   **Side-Drilled Holes (SDHs):** Used for calibrating angle beam probes and for checking the resolution and sensitivity to planar flaws oriented perpendicular to the beam path.
        *   **Notches (e.g., Vee-Notch):** Used to simulate surface-breaking planar defects, such as cracks, and to assess the UT system's ability to detect flaws originating from the surface.

**Question 5:** What is the function of a couplant in ultrasonic testing?
    *   **Answer:** A couplant is a material used to eliminate air gaps between the transducer and the surface of the component. This ensures efficient transmission of ultrasonic energy from the transducer into the material and back from the material to the transducer, which is essential for obtaining clear and meaningful signals.

---

### **5. Summary and Key Takeaways**

*   **Reference Blocks:** Standardized samples with artificial defects crucial for UT calibration and performance verification.
*   **Artificial Defects:** FBHs, SDHs, notches, and slits are commonly used to mimic real-world flaws.
*   **Calibration:** Ensures equipment accuracy in velocity, zero offset, sensitivity, and amplitude evaluation (DAC/AVG).
*   **UT Instruments:** Flaw detectors, phased array systems.
*   **Transducers:** Key accessories with varying types (straight, angle, dual), frequencies (0.5-20+ MHz), and sizes (diameters).
*   **Couplant:** Essential for efficient ultrasonic transmission.
*   **Accurate calibration and appropriate use of reference standards are fundamental to reliable ultrasonic testing.**

---
**Note:** This study material is designed to supplement the provided textbooks and reference books. For a deeper understanding, consult the recommended literature.