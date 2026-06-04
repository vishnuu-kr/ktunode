---
title: "Interferometry- Principle of Interference, Optical Flats, NPL Flatness Interferometer, Pitter–NPL Gauge Interferometer and Laser Interferometers"
subject: "MACHINE TOOLS AND METROLOGY"
module: "Module 4: Angular measurements"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f16"
status: "completed"
scrapedAt: "2026-05-20T17:54:10.579Z"
---
# MACHINE TOOLS AND METROLOGY: MODULE 4 - ANGULAR MEASUREMENTS

## Topic: Interferometry

### Learning Outcomes:

*   Understand the fundamental principle of interference and its application in metrology.
*   Explain the construction, working principle, and applications of Optical Flats.
*   Describe the design, operation, and significance of the NPL Flatness Interferometer.
*   Understand the working principle and applications of the Pitter–NPL Gauge Interferometer.
*   Explain the concept and applications of Laser Interferometers in precision measurement.

### Course Outcomes Alignment:

This topic primarily aligns with **CO4: Identify the uses of various advanced measuring instruments (Knowledge Level: K1)** by introducing and explaining several sophisticated optical and laser-based metrology instruments.

---

### 1. Principle of Interference

#### 1.1. Key Concepts:

*   **Interference:** A phenomenon in optics where two or more waves superimpose to form a resultant wave of greater, lower, or the same amplitude. This occurs when waves from coherent sources meet.
*   **Coherent Sources:** Two light sources whose waves have the same frequency and a constant phase difference. Lasers are excellent examples of coherent sources.
*   **Path Difference:** The difference in the distance traveled by two waves from their sources to a point of observation. This path difference is crucial in determining whether constructive or destructive interference occurs.
*   **Phase Difference:** The difference in the phase of two waves at a particular point. Path difference and phase difference are directly related ($\text{Phase Difference} = \frac{2\pi}{\lambda} \times \text{Path Difference}$, where $\lambda$ is the wavelength of light).

#### 1.2. Conditions for Interference:

1.  **Coherent Sources:** The sources must be coherent.
2.  **Monochromatic Light:** The light source should be monochromatic (of a single wavelength).
3.  **Amplitude:** The amplitudes of the interfering waves should be nearly equal for good contrast in the interference fringes.
4.  **Same Plane of Vibration:** The waves must vibrate in the same plane (or have components of vibration in the same plane).

#### 1.3. Types of Interference:

*   **Constructive Interference:** Occurs when waves meet in phase (path difference is an integer multiple of wavelength, $n\lambda$). This results in increased amplitude and brightness.
*   **Destructive Interference:** Occurs when waves meet out of phase (path difference is an odd multiple of half the wavelength, $(n + 1/2)\lambda$). This results in decreased amplitude and darkness.

#### 1.4. Interferometry in Metrology:

Interferometry leverages the principle of interference to achieve extremely high precision in length and angular measurements. By analyzing the interference patterns produced by light waves, minute dimensional deviations can be detected and quantified. This is particularly useful for measuring surface flatness, straightness, and small displacements.

**Reference:** *Elements of Workshop Technology Vol-II* and *Manufacturing Science* discuss wave phenomena and their applications in measurement. *Engineering Metrology and Measurements* provides detailed insights into interferometric techniques.

---

### 2. Optical Flats

#### 2.1. Key Concepts:

*   **Optical Flat:** A highly accurate flat surface made of a transparent material (like fused quartz or special glass) with an extremely smooth and flat surface finish. They are used as reference standards for checking the flatness of other surfaces.
*   **Wedge Film:** When an optical flat is placed on a surface to be tested, a thin film of air is trapped between the two surfaces. If the surfaces are not perfectly flat, this air gap forms a wedge.
*   **Newton's Rings:** The interference pattern observed when a convex surface (like a plano-convex lens) is placed on a flat surface. In the case of optical flats, the pattern consists of straight or slightly curved bands (fringes) if the test surface is reasonably flat.

#### 2.2. Construction and Working Principle:

*   **Material:** Typically made from fused quartz, optical glass, or specialized materials to ensure thermal stability and low thermal expansion.
*   **Surface Finish:** One or both surfaces are lapped and polished to a very high degree of flatness, often to within a fraction of a wavelength of light.
*   **Operation:**
    1.  The optical flat is placed on the surface to be inspected.
    2.  Monochromatic light (usually from a sodium lamp) is directed onto the optical flat at a near-normal incidence.
    3.  The light is partially reflected from the top surface of the optical flat and partially from the surface being tested.
    4.  These two reflected waves interfere.
    5.  If the surfaces are perfectly flat and parallel, no interference pattern (or a uniform faint pattern) will be observed.
    6.  If there are deviations from flatness, variations in the air gap thickness will occur, leading to path differences between the reflected waves.
    7.  This results in a series of bright and dark bands (interference fringes).

#### 2.3. Interpretation of Fringes:

*   **Flatness:** If the fringes are straight and equally spaced, the surface is flat and parallel to the optical flat.
*   **Curvature:** If the fringes are curved, it indicates a deviation from flatness.
*   **Number of Fringes:** The number of fringes indicates the degree of deviation. Each fringe represents a change in the air gap thickness by half a wavelength of the monochromatic light used.
*   **Spacing of Fringes:** The spacing of the fringes indicates the sensitivity of the measurement.

#### 2.4. Applications:

*   Checking the flatness of precision machine tool beds, surface plates, gauge blocks, and other critical components.
*   Measuring the deviation from flatness of optical components like mirrors and lenses.
*   Used in conjunction with other interferometers for more complex measurements.

#### 2.5. Important Points to Remember:

*   The accuracy of the measurement depends on the flatness of the optical flat itself and the wavelength of the light source.
*   The coefficient of thermal expansion of the materials used is critical for stable measurements.
*   Cleanliness of the surfaces is essential to avoid spurious fringes.

**Reference:** *Engineering Metrology and Measurements* provides excellent diagrams and explanations of optical flats and Newton's rings. *Elements of Workshop Technology Vol-II* also covers optical methods for inspection.

---

### 3. NPL Flatness Interferometer

#### 3.1. Key Concepts:

*   **NPL:** National Physical Laboratory (UK), which developed many advanced metrology instruments.
*   **Flatness Interferometer:** An instrument specifically designed to measure the flatness of surfaces using interferometric principles. The NPL design is a well-known example.

#### 3.2. Construction and Working Principle:

The NPL Flatness Interferometer is essentially an improved version of the Michelson interferometer adapted for surface flatness testing.

*   **Light Source:** Usually a monochromatic light source (e.g., mercury vapor lamp or laser).
*   **Beam Splitter:** Divides the incident light beam into two paths.
*   **Reference Mirror:** A highly accurate, fixed flat mirror in one arm of the interferometer.
*   **Test Surface:** The surface being inspected is placed in the other arm, often on a movable stage. The optical flat is typically placed on top of the test surface.
*   **Observation/Detection:** The two reflected beams are recombined at the beam splitter, and the resulting interference pattern is observed or recorded.

*   **Operation:**
    1.  Light from the source is split into two beams by the beam splitter.
    2.  One beam travels to the reference mirror and is reflected back.
    3.  The other beam travels to the surface under test (via the optical flat) and is reflected back.
    4.  The two reflected beams recombine and interfere.
    5.  The stage holding the test surface is adjusted to achieve alignment and then moved laterally to scan different areas of the surface.
    6.  Changes in the interference fringe pattern (e.g., fringes moving, appearing, or disappearing) indicate deviations in the flatness of the test surface relative to the reference mirror.

#### 3.3. Significance and Advantages:

*   **High Accuracy:** Capable of measuring flatness deviations to within a few nanometers.
*   **Non-Contact Measurement:** No physical contact with the surface is required, preventing damage.
*   **Visualization:** Provides a visual representation of surface flatness errors.
*   **Quantitative Measurement:** Fringe shifts can be precisely quantified to determine the magnitude of flatness deviations.

#### 3.4. Applications:

*   Calibration and testing of high-precision surfaces like those on machine tool guideways, optical benches, and reference standards.
*   Inspection of critical components in semiconductor manufacturing and optical industries.

**Reference:** While specific details of the NPL Flatness Interferometer might be found in specialized metrology journals or advanced textbooks, the underlying principles are extensions of the Michelson interferometer, as explained in *Engineering Metrology and Measurements* and *Manufacturing Science*.

---

### 4. Pitter–NPL Gauge Interferometer

#### 4.1. Key Concepts:

*   **Gauge Interferometer:** An instrument designed for the precise measurement of lengths, particularly for gauge blocks or other standards.
*   **Pitter–NPL Design:** A specific configuration of a gauge interferometer developed at the Pitter Instrument Company in collaboration with the NPL. It is particularly suited for measuring the length of gauge blocks.

#### 4.2. Construction and Working Principle:

This interferometer is a specialized type of Michelson interferometer.

*   **Light Source:** Monochromatic light source.
*   **Beam Splitter:** Divides the light.
*   **Reference Standard:** A known standard length, often a highly accurate gauge block or a precisely set optical flat.
*   **Test Gauge Block:** The gauge block whose length is to be measured.
*   **Wavelength of Light:** The known wavelength of the light source is critical.

*   **Operation (Simplified):**
    1.  The test gauge block and the reference standard are placed in the two arms of the interferometer.
    2.  The optical path lengths of the two arms are adjusted to bring the reflected beams into interference.
    3.  The interferometer measures the difference in optical path length between the test gauge block and the reference standard.
    4.  This difference is directly related to the difference in the lengths of the two items and the wavelength of the light.
    5.  The number of interference fringes observed as one of the components (e.g., the test gauge block) is moved relative to the other allows for the precise determination of the length difference.

#### 4.3. Measurement of Gauge Block Length:

The Pitter-NPL interferometer allows for the precise measurement of the length of a gauge block by comparing it to a known standard. The process typically involves:

1.  **Setting up:** Placing the test gauge block and a reference standard (e.g., a standard of known length) in the interferometer arms.
2.  **Interference:** Adjusting the paths to produce interference fringes.
3.  **Counting Fringes:** Gradually increasing or decreasing the path difference in one arm (e.g., by moving the test gauge block or the reference standard) and counting the number of fringes that pass a reference point.
4.  **Calculation:** The length difference ($\Delta L$) is calculated using the formula:
    $\Delta L = N \times \frac{\lambda}{2}$
    where $N$ is the number of fringes counted and $\lambda$ is the wavelength of the light. The total length of the gauge block is then calculated by adding this difference to the known length of the reference standard.

#### 4.4. Advantages:

*   **High Precision:** Capable of measuring gauge blocks to an accuracy of $\pm 0.01 \mu \text{m}$ or better.
*   **Absolute Measurement:** When used with a precisely known standard, it can provide a very accurate absolute length measurement.
*   **Calibration:** Essential for calibrating gauge blocks and other length standards.

**Reference:** Information on gauge interferometers, including the principles behind the Pitter-NPL design, can be found in *Engineering Metrology and Measurements* and *Metrology for Engineers*.

---

### 5. Laser Interferometers

#### 5.1. Key Concepts:

*   **Laser:** Light Amplification by Stimulated Emission of Radiation. Lasers produce highly monochromatic, coherent, and collimated (parallel) beams of light.
*   **Laser Interferometer:** An interferometer that uses a laser as the light source. The properties of laser light make them exceptionally well-suited for interferometric measurements, offering higher accuracy and longer measurement ranges.
*   **Doppler Effect:** The change in frequency of a wave in relation to an observer who is moving relative to the wave source. In laser interferometry, this effect can be used to measure velocity.
*   **Heterodyning:** A technique used to measure small frequency shifts (and thus small displacements) by mixing two optical signals.

#### 5.2. Types of Laser Interferometers:

Laser interferometers can be categorized based on their configurations and applications, often derived from the Michelson or Fabry-Perot interferometer designs. Common types include:

*   **Michelson Laser Interferometer:** Used for linear displacement, velocity, and angle measurements.
*   **Fabry-Perot Laser Interferometer:** Used for measuring wavelengths and as optical filters.
*   **Homodyne Interferometers:** The reference and measurement beams are derived from the same laser source.
*   **Heterodyne Interferometers:** Utilize two slightly different frequencies, often generated by acousto-optic modulators or Zeeman split lasers, allowing for non-ambiguous measurement of direction and higher resolutions.

#### 5.3. Construction and Working Principle (Typical Linear Displacement Measurement):

A common configuration for measuring linear displacement is based on the Michelson interferometer.

*   **Laser Source:** Emits a stable, monochromatic beam.
*   **Beam Splitter:** Divides the laser beam.
*   **Reference Arm:** Contains a fixed mirror.
*   **Measurement Arm:** Contains a retroreflector (often a corner cube) attached to the moving object.
*   **Optics:** Lenses and mirrors are used to direct and recombine the beams.
*   **Detector:** A photodetector (e.g., photodiode) that converts the light intensity variations (interference fringes) into electrical signals.
*   **Signal Processing Electronics:** Count the fringes and interpret the electrical signals to determine displacement.

*   **Operation:**
    1.  The laser beam is split into two.
    2.  One beam travels to the fixed reference mirror, reflects back, and returns to the detector.
    3.  The other beam travels to the retroreflector on the moving object, reflects back, and returns to the detector.
    4.  As the object moves, the path length of the measurement arm changes.
    5.  This causes a change in the phase difference between the two beams, resulting in a change in the interference pattern.
    6.  Each complete fringe shift (bright to dark and back to bright) corresponds to a displacement of half the wavelength of the laser light ($\lambda/2$).
    7.  The electronics count these fringe shifts and convert them into a precise displacement measurement.

#### 5.4. Applications:

*   **Machine Tool Calibration:** Measuring and correcting geometric errors in CNC machines, CMMs, and other precision machinery.
*   **Precision Positioning:** High-accuracy positioning systems in semiconductor lithography, manufacturing, and scientific research.
*   **Surface Profilometry:** Measuring surface roughness and topography.
*   **Distance Measurement:** Long-range, high-accuracy distance measurement.
*   **Velocity Measurement:** Using the Doppler shift of the laser beam reflected from a moving object.
*   **Angular Measurement:** Specialized laser interferometers can measure small angular deviations.

#### 5.5. Advantages:

*   **Extremely High Accuracy:** Can measure displacements to within nanometers or even picometers.
*   **Non-Contact:** Ideal for measuring delicate or sensitive objects.
*   **High Resolution:** Capable of detecting very small movements.
*   **Speed:** Can measure dynamic movements in real-time.
*   **Long Measurement Ranges:** Some systems can measure over significant distances.

#### 5.6. Important Points to Remember:

*   The accuracy is dependent on the stability of the laser wavelength and the environmental conditions (temperature, pressure, humidity affect the refractive index of air).
*   Environmental compensation (e.g., using refractive index compensation systems) is often necessary for the highest accuracies.
*   Alignment is critical for optimal performance.

**Reference:** *Manufacturing Engineering and Technology* by Kalpakjian & Schmid touches upon precision measurement techniques. *Engineering Metrology and Measurements* and *Manufacturing Science* provide detailed theoretical explanations of laser interferometry.

---

### Practice Questions and Answers

**Question 1:** What are the fundamental conditions required for interference of light?
**Answer:** The light sources must be coherent, monochromatic, have similar amplitudes, and vibrate in the same plane.

**Question 2:** Explain how an optical flat is used to check the flatness of a surface.
**Answer:** An optical flat is placed on the surface to be tested. Monochromatic light is shone through the flat. Interference fringes are formed between the bottom surface of the flat and the test surface due to variations in the air gap. The pattern of these fringes indicates the flatness of the test surface. Straight, equally spaced fringes indicate a flat surface.

**Question 3:** What is the primary advantage of using a laser as a light source in interferometry?
**Answer:** Lasers provide highly monochromatic, coherent, and collimated light, which results in sharper interference fringes, greater fringe visibility, and the ability to perform measurements over longer distances with higher accuracy.

**Question 4:** If you observe 15 interference fringes across a surface when using a sodium lamp (wavelength = 589 nm) with an optical flat, what is the maximum deviation from flatness over that span?
**Answer:**
Each fringe represents a change in path difference of one wavelength ($\lambda$).
The total change in path difference is $15 \times \lambda = 15 \times 589 \text{ nm} = 8835 \text{ nm}$.
The change in gap height is half the path difference, so the maximum deviation from flatness is:
Deviation $= \frac{\text{Total Path Difference}}{2} = \frac{15 \times \lambda}{2} = \frac{8835 \text{ nm}}{2} = 4417.5 \text{ nm}$
So, the maximum deviation is approximately 4.42 micrometers.

**Question 5:** What is the significance of the Pitter–NPL Gauge Interferometer in metrology?
**Answer:** The Pitter–NPL Gauge Interferometer is significant for the highly accurate calibration and measurement of gauge blocks and other length standards. It utilizes interferometric principles to determine the length of these standards with extremely high precision, contributing to metrological traceability.

---

### Important Points to Remember:

*   **Interference** is the cornerstone of interferometric measurement.
*   **Optical flats** are reference standards for checking surface flatness.
*   The number of fringes in an optical flat test directly relates to the magnitude of the deviation from flatness.
*   **NPL Flatness Interferometers** are advanced instruments for high-precision flatness assessment.
*   **Pitter–NPL Gauge Interferometers** are specialized for calibrating length standards like gauge blocks.
*   **Laser interferometers** offer unparalleled accuracy and versatility for linear, angular, and velocity measurements due to the properties of laser light.
*   **Environmental factors** (temperature, air pressure, humidity) can affect the accuracy of interferometric measurements due to changes in the refractive index of air.

---
This comprehensive set of study notes covers the principle of interference, optical flats, NPL Flatness Interferometer, Pitter–NPL Gauge Interferometer, and Laser Interferometers. It is structured with clear headings, bullet points, key concepts, working principles, applications, and practice questions, aligning with the provided learning outcomes and course outcomes. The content also references the types of textbooks and reference books mentioned.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
