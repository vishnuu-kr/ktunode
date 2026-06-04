---
title: "Inspection techniques like SWSI, DWSI, DWDI, panoramic exposure, real-time radiography, films used in industrial radiography, types of film, speed of films, qualities of film screens used in radiography, quality of a good radiograph, film processing, interpretation, evaluation of test results, safety aspects required in radiography."
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 3: Ultrasonic Testing:  UT testing methods, contact testing and immersion testing, normal beam and straight beam testing, angle beam testing, dual crystal probe, ultrasonic testing techniques, resonance testing, through transmission technique, pulse echo testing technique, instruments used UT, accessories such as transducers, types, frequencies, and sizes commonly used."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463895"
status: "completed"
scrapedAt: "2026-05-20T18:06:16.591Z"
---
This is a very interesting request, as it asks to combine topics from **Ultrasonic Testing (UT)** (Module 3) with a topic description that clearly belongs to **Industrial Radiography (RT)**. This indicates a potential misunderstanding in the prompt itself, where the "Description" section seems misaligned with the "Module" and "Topic" headings.

Given this discrepancy, I will proceed by creating comprehensive study notes for **Industrial Radiography (RT)**, as that is what the "Description" section explicitly details. I will also briefly touch upon how RT relates to other NDT methods as a broader context, and acknowledge the UT content that was originally mentioned but not described.

---

# NON-DESTRUCTIVE TESTING

## Module 3: Ultrasonic Testing (UT) - Overview and Context

**Note:** While the detailed topic provided for study belongs to Industrial Radiography (RT), it's important to acknowledge the original module context. Module 3 of this course focuses on Ultrasonic Testing (UT).

**Key Concepts of UT (Briefly):**

*   **Principle:** UT utilizes high-frequency sound waves (ultrasound) to detect internal flaws or measure material properties.
*   **Methods:**
    *   **Contact Testing:** Transducer directly placed on the surface with a couplant.
    *   **Immersion Testing:** Specimen and transducer are submerged in a liquid (couplant).
*   **Beam Types:**
    *   **Normal Beam (Straight Beam):** Sound waves travel perpendicular to the surface. Good for detecting planar flaws parallel to the surface.
    *   **Angle Beam:** Sound waves enter the material at an angle, allowing detection of flaws on angled surfaces or those oriented in different directions.
*   **Transducers:** Devices that convert electrical energy into mechanical vibrations (sound) and vice-versa.
    *   **Types:** Single element, dual element (separate transmit and receive elements), phased array (multiple elements controlled electronically).
    *   **Frequencies:** Typically 0.5 MHz to 20 MHz. Lower frequencies penetrate deeper but offer lower resolution; higher frequencies provide better resolution but have less penetration.
    *   **Sizes:** Vary depending on the application and desired beam characteristics.
*   **UT Techniques:**
    *   **Pulse-Echo:** A pulse of sound is transmitted, and reflections (echoes) from flaws or boundaries are detected. This is the most common method.
    *   **Through-Transmission:** Sound is transmitted through the material from one transducer to another on the opposite side. Attenuation of the signal indicates flaws.
    *   **Resonance Testing:** The frequency of sound is varied to find a resonant frequency of the material. Changes in resonance can indicate thickness variations or flaws.
*   **Instruments:** UT flaw detectors, ultrasonic scanners, phased array systems.
*   **Accessories:** Couplants (gels, greases), calibration blocks.

**Importance of Context:** Understanding the fundamental principles of UT helps in appreciating how different NDT methods complement each other in providing a comprehensive inspection strategy.

---

## TOPIC: Industrial Radiography (RT) Inspection Techniques and Practices

**Learning Outcomes Covered:**

*   **CO1 (K2):** Have a basic knowledge of NDT Techniques which enables to carry out various inspections in accordance with the established procedures. (This section provides this knowledge for RT).
*   **CO3 (K3):** Apply the principles of signal processing of ultrasonic signals and image processing of radiographic images. (Understanding RT image formation and interpretation aligns with image processing principles).
*   **CO4 (K2):** Have a better knowledge in the field of advanced techniques in NDT (While not explicitly advanced here, RT is a foundational NDT method and its variations can be considered advanced).

**Reference to Textbooks & Course Outcomes:**

*   This topic directly addresses the practical aspects of radiography, supporting **CO1**.
*   Understanding the formation and interpretation of radiographic images is crucial for the image processing aspect of **CO3**.
*   This foundational knowledge is a stepping stone to understanding more advanced NDT techniques as mentioned in **CO4**.
*   The provided textbooks (Baldev Raj, Hull & John, Ravi Prakash) are classic references for general NDT, including radiography. The reference books offer more contemporary insights.

---

### 1. Introduction to Industrial Radiography (RT)

**Definition:** Industrial Radiography (RT) is a non-destructive testing method that uses penetrating ionizing radiation (X-rays or gamma rays) to examine the internal structure of materials and components. It is particularly effective for detecting volumetric flaws, such as porosity, slag inclusions, and voids, as well as planar flaws like cracks, though their detection might be orientation-dependent.

**Principle:**
When X-rays or gamma rays pass through a material, they are attenuated (absorbed or scattered) to varying degrees depending on the material's density, thickness, and the presence of internal discontinuities. A detector (film or digital detector) placed on the opposite side records the intensity of radiation that has passed through. Areas with higher density or fewer flaws will transmit more radiation, appearing darker on the final image (film or digital display), while areas with lower density or more flaws will transmit less radiation, appearing lighter.

---

### 2. Inspection Techniques in Radiography

**Key Concept:** Different geometric arrangements of the radiation source, object, and detector are employed to optimize flaw detection based on the component's geometry and the type of flaws expected.

*   **Single Wall Single Image (SWSI):**
    *   **Description:** The radiation source is on one side of the object, and the detector is on the opposite side. Only one wall of the object is imaged.
    *   **Application:** Typically used for welds, castings, and forgings where the primary interest is in flaws within a single plane or volume.
    *   **Advantages:** Simple setup, good for detecting flaws in a specific area.
    *   **Disadvantages:** Limited ability to detect flaws on the back wall or in complex geometries.

*   **Double Wall Single Image (DWSI):**
    *   **Description:** The radiation source is placed on one side of the object, and the detector is placed on the opposite side. However, the component is usually cylindrical (e.g., pipes), and both walls are imaged simultaneously onto a single detector.
    *   **Application:** Primarily used for inspecting pipes and tubes where access to only one side is possible.
    *   **Advantages:** Inspects both inner and outer surfaces in a single exposure.
    *   **Disadvantages:** Images from both walls are superimposed, which can lead to difficulties in interpretation and may mask certain flaws. The geometrical unsharpness can be higher.

*   **Double Wall Double Image (DWDI):**
    *   **Description:** This technique involves two separate exposures.
        *   **Exposure 1:** Source on one side, detector on the other, imaging one wall.
        *   **Exposure 2:** Source and detector are moved, and the component is repositioned so that the radiation beam passes through the component at an angle, imaging the second wall onto a separate detector.
    *   **Application:** Used for inspecting the entire circumference of pipes or similar cylindrical components when high sensitivity is required for flaws on both walls.
    *   **Advantages:** Provides clearer images of flaws on both walls compared to DWSI, with less image superimposition.
    *   **Disadvantages:** Requires two separate exposures, increasing inspection time and cost.

*   **Panoramic Exposure:**
    *   **Description:** The radiation source (often a small-diameter source like a radioisotope or a specialized X-ray tube) is placed inside a component or in the center of a group of components, and the detectors are placed around the periphery. The beam emanates in all directions.
    *   **Application:** Inspection of circular welds, complex assemblies, or large structures where a single source position can cover multiple areas.
    *   **Advantages:** Efficient for inspecting multiple locations simultaneously or internal structures.
    *   **Disadvantages:** Requires careful shielding and control of the radiation source. Image quality can vary depending on the angle and distance from the source.

---

### 3. Real-Time Radiography (RTR)

**Definition:** Real-Time Radiography is an advanced form of radiography where the X-ray or gamma-ray image is captured by a digital detector and displayed on a monitor almost instantaneously. This eliminates the need for film processing.

*   **Principle:** Radiation passes through the object and strikes a detector (e.g., scintillator coupled to a camera, or a direct-conversion detector). The detected radiation is converted into an electronic signal, amplified, digitized, and displayed as a live image.
*   **Advantages:**
    *   **Speed:** Immediate feedback allows for rapid inspection and decision-making.
    *   **Flexibility:** Image manipulation (brightness, contrast, zoom) is possible.
    *   **Reduced Costs:** Eliminates film and processing chemicals.
    *   **Potential for Automation:** Can be integrated with automated inspection systems.
*   **Disadvantages:**
    *   **Initial Cost:** Digital detectors and imaging systems can be expensive.
    *   **Image Quality:** Historically, image quality (spatial resolution, contrast sensitivity) could be inferior to film, though advancements are continuously improving this.
    *   **Radiation Safety:** Requires robust safety protocols due to the "real-time" nature and potential for extended exposure.

---

### 4. Films Used in Industrial Radiography

**Key Concept:** Radiographic film is a sensitive medium coated with silver halide crystals that records the intensity of radiation after it has passed through the object.

*   **Types of Film:**
    *   **General Purpose Films:** Offer a balance of sensitivity, resolution, and processing latitude. Suitable for a wide range of applications.
    *   **High-Sensitivity Films:** Designed to detect very fine flaws. Often have finer grain structure and require longer exposure times or more intense radiation.
    *   **High-Definition Films:** Optimized for maximum resolution, often used for inspecting thin materials or very small flaws.
    *   **Industrial X-ray Films:** Specifically manufactured for the rigors of industrial inspection, with thicker emulsions and support layers.

*   **Speed of Films:**
    *   **Definition:** Film speed refers to the amount of radiation exposure required to produce a certain density on the processed film.
    *   **Fast Films:** Require less exposure time or lower radiation intensity to achieve a given density. They have larger silver halide crystals and a thicker emulsion.
    *   **Slow Films:** Require more exposure time or higher radiation intensity. They have smaller silver halide crystals and a thinner emulsion, resulting in better image detail and contrast.
    *   **Important Note:** There is a trade-off between film speed and image quality. Faster films are less sensitive to fine details and have lower contrast.

---

### 5. Qualities of Film Screens Used in Radiography

**Key Concept:** Intensifying screens are used in conjunction with radiographic film to improve image quality and reduce exposure times. They convert X-ray or gamma-ray energy into light, which then exposes the film.

*   **Types of Screens:**
    *   **Lead Screens:**
        *   **Description:** Thin sheets of lead foil placed in front of and behind the film.
        *   **Function:** Lead absorbs X-rays and emits secondary electrons, which in turn produce X-rays (characteristic radiation). These secondary X-rays then expose the film. Lead screens improve contrast and reduce the effect of scattered radiation.
        *   **Usage:** Generally used with higher energy radiation (gamma rays, high-kV X-rays).
    *   **Fluorescent Screens (Rare Earth Screens):**
        *   **Description:** Screens coated with phosphorescent materials (like rare earth elements) that emit visible light when struck by X-rays or gamma rays.
        *   **Function:** The emitted light causes a significant portion of the film exposure.
        *   **Usage:** Provide much higher film speed (reduce exposure time significantly) compared to lead screens, but can result in slightly lower image resolution due to the larger grain size of phosphors and diffusion of light.

*   **Qualities of Good Film Screens:**
    *   **High Intensification Factor:** Ability to significantly reduce exposure time.
    *   **Good Resolution:** Ability to maintain fine image detail.
    *   **Low Background Fog:** Should not introduce unwanted density into the image.
    *   **Durability:** Should withstand repeated handling and cleaning.
    *   **Cleanliness:** Free from dust, dirt, and scratches that could cause artifacts.

---

### 6. Quality of a Good Radiograph

**Key Concept:** A good radiograph effectively reveals the internal features of the component, allowing for accurate flaw detection and evaluation.

*   **Characteristics of a Good Radiograph:**
    *   **Adequate Density:** The overall darkness of the film should be sufficient for proper viewing under standardized lighting conditions. Too light (underexposed) or too dark (overexposed) can obscure flaws.
    *   **Good Contrast:** The difference in density between adjacent areas of the radiograph should be sufficient to distinguish flaws from the background material.
    *   **Sharpness:** The edges of the image should be well-defined, indicating minimal geometrical and intensifying screen unsharpness.
    *   **Freedom from Artifacts:** The radiograph should be free from unwanted marks, spots, scratches, chemical stains, or processing defects that could be mistaken for actual flaws.
    *   **Sensitivity:** The radiograph should be able to reveal flaws of a size and nature relevant to the inspection requirements (e.g., ability to resolve penetrameter holes).

---

### 7. Film Processing

**Key Concept:** Radiographic film processing is a chemical process that converts the latent image (formed by radiation exposure) into a visible, permanent image.

*   **Steps in Film Processing:**
    1.  **Developer:** Converts exposed silver halide crystals into metallic silver, forming the visible image.
    2.  **Stop Bath (or Rinse):** Stops the development action and removes excess developer from the film.
    3.  **Fixer:** Removes unexposed and undeveloped silver halide crystals, making the image permanent and insensitive to further light exposure.
    4.  **Washing:** Removes residual processing chemicals from the film emulsion.
    5.  **Drying:** Removes moisture from the film, preventing sticking and degradation.

*   **Factors Affecting Quality:**
    *   **Developer Temperature and Time:** Crucial for achieving correct density and contrast.
    *   **Fixer Replenishment:** Ensures the fixer remains active.
    *   **Wash Water Purity and Temperature:** Prevents staining and ensures complete chemical removal.
    *   **Drying Conditions:** Proper drying prevents film damage.

*   **Automation:** Automated film processors are common in industrial settings to ensure consistency and efficiency.

---

### 8. Interpretation and Evaluation of Test Results

**Key Concept:** Radiographic interpretation involves carefully examining the processed radiograph to identify, locate, and characterize any discontinuities present.

*   **Interpretation Process:**
    1.  **Viewing Conditions:** Radiographs must be viewed on a calibrated light source (viewbox) with appropriate intensity and brightness.
    2.  **Identification of Flaws:** Recognizing deviations from the expected image that indicate a discontinuity. This requires knowledge of common flaw types and their radiographic appearances.
    3.  **Location of Flaws:** Determining the position of the flaw within the component, often referencing a coordinate system or markers on the radiograph.
    4.  **Characterization of Flaws:** Classifying the flaw based on its type (e.g., porosity, crack, inclusion, lack of fusion) and its orientation.
    5.  **Evaluation Against Standards:** Comparing the identified and characterized flaws against acceptance criteria defined in relevant codes, standards, or specifications (e.g., ASME, AWS). This determines whether the component is acceptable or requires rejection/repair.

*   **Common Flaw Indications:**
    *   **Radiolucent Indications:** Appear darker than the surrounding material, indicating areas of lower density (e.g., porosity, voids, gas pockets).
    *   **Radiopaque Indications:** Appear lighter than the surrounding material, indicating areas of higher density (e.g., slag inclusions, tungsten inclusions, dense foreign material).
    *   **Linear Indications:** Elongated indications, often associated with cracks or lack of fusion.

*   **Key Considerations:**
    *   **Sensitivity of the Radiograph:** The interpretation is only as good as the quality of the radiograph.
    *   **Operator Experience:** Radiographic interpretation requires significant training and experience.
    *   **Three-Dimensional Nature:** A 2D radiograph represents a 3D object, which can sometimes make it challenging to pinpoint the exact location and size of a flaw.

---

### 9. Safety Aspects Required in Radiography

**Key Concept:** Radiation, whether from X-ray machines or radioactive isotopes, is a significant hazard. Strict safety protocols are mandatory to protect personnel and the public.

*   **Types of Radiation Sources:**
    *   **X-ray Machines:** Produce X-rays when high-energy electrons strike a target material. The radiation is generated only when the machine is operating.
    *   **Gamma Ray Sources (Isotopes):** Such as Iridium-192 (Ir-192) or Cobalt-60 (Co-60), emit gamma rays continuously.

*   **Radiation Hazards:**
    *   **Ionizing Radiation:** Can damage living tissue, leading to short-term effects (radiation sickness) and long-term effects (cancer, genetic mutations).
    *   **Penetrating Power:** Gamma rays and high-energy X-rays can penetrate significant thicknesses of materials, including the human body.

*   **Safety Measures:**
    *   **Time, Distance, Shielding:** The fundamental principles of radiation protection.
        *   **Time:** Minimize the time spent in radiation areas.
        *   **Distance:** Maximize the distance from the radiation source; radiation intensity decreases rapidly with distance (inverse square law).
        *   **Shielding:** Use appropriate shielding materials (lead, concrete) to absorb radiation.
    *   **Controlled Areas:** Designating specific areas where radiation sources are used and restricting access to authorized personnel.
    *   **Monitoring:**
        *   **Area Monitoring:** Using radiation survey meters to measure radiation levels in controlled areas.
        *   **Personnel Monitoring:** Using dosimeters (e.g., film badges, TLDs, electronic dosimeters) to track individual cumulative radiation exposure.
    *   **Training and Certification:** All personnel involved in radiography must be properly trained and certified.
    *   **Warning Signs and Lights:** Clearly indicating when radiation is active.
    *   **Source Security:** Ensuring that radiation sources are properly stored and secured when not in use.
    *   **Emergency Procedures:** Having established procedures for radiation incidents.
    *   **Regulatory Compliance:** Adhering to all local, national, and international regulations governing radiation safety.

---

### Practice Questions and Answers

**Question 1:**
What is the primary advantage of Double Wall Single Image (DWSI) radiography?
a) It provides the clearest image of flaws on both walls.
b) It is the most efficient technique for inspecting thin materials.
c) It allows for inspection of both inner and outer surfaces in a single exposure, useful when access is limited.
d) It eliminates the need for chemical processing of films.

**Answer:** c) It allows for inspection of both inner and outer surfaces in a single exposure, useful when access is limited.

**Question 2:**
Which of the following best describes the role of intensifying screens in industrial radiography?
a) They absorb radiation to prevent it from reaching the film.
b) They convert radiation energy into light, which exposes the film, thereby reducing exposure time and improving image quality.
c) They are used to develop the latent image on the film after exposure.
d) They are used to magnify the image for easier interpretation.

**Answer:** b) They convert radiation energy into light, which exposes the film, thereby reducing exposure time and improving image quality.

**Question 3:**
A radiograph appears too light, making it difficult to see internal details. What is the likely cause?
a) Overexposure
b) Underexposure
c) Insufficient contrast
d) Too much scatter radiation

**Answer:** b) Underexposure

**Question 4:**
List the five main steps in conventional film processing in radiography.

**Answer:**
1.  Developer
2.  Stop Bath (or Rinse)
3.  Fixer
4.  Washing
5.  Drying

**Question 5:**
Explain the safety principle of "Time, Distance, Shielding" in the context of radiation protection in radiography.

**Answer:**
*   **Time:** Minimizing the duration of exposure to the radiation source.
*   **Distance:** Maximizing the distance from the radiation source, as radiation intensity decreases with the square of the distance.
*   **Shielding:** Using materials like lead or concrete to absorb the radiation and prevent it from reaching personnel.

---

### Important Points to Remember

*   **RT vs. UT:** While Module 3 is UT, this detailed topic focuses on RT. Be aware of the distinct principles and applications of each method.
*   **Image Formation:** Radiography relies on differential absorption of radiation. Darker areas on film mean more radiation passed through (less dense/thinner material or more flaw presence in some cases). Lighter areas mean less radiation passed through (denser/thicker material or fewer flaws).
*   **Technique Selection:** The choice of SWSI, DWSI, DWDI, or panoramic exposure depends heavily on the component geometry, weld configuration, and expected flaw types.
*   **Real-Time vs. Film:** RTR offers speed and digital manipulation, while film traditionally offers higher resolution but requires processing.
*   **Film Speed vs. Sensitivity:** Faster films require less exposure but offer lower detail and contrast. Slower films require more exposure but provide better detail and contrast.
*   **Screen Function:** Intensifying screens improve sensitivity and reduce exposure times by converting X-rays/gamma rays into light.
*   **Radiograph Quality:** Density, contrast, sharpness, and absence of artifacts are critical for accurate interpretation.
*   **Radiation Safety is Paramount:** Always adhere to strict safety protocols, including time, distance, shielding, and monitoring.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
