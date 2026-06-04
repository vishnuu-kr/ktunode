---
title: "Thermography"
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 4: Advanced NDT Techniques: Principle and Procedure of Digital Signal and image Processing & Digital Image correlation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642e2"
status: "completed"
scrapedAt: "2026-05-20T18:15:48.084Z"
---
# NON-DESTRUCTIVE TESTING - Module 4: Advanced NDT Techniques

## Topic: Thermography

---

### 1. Introduction to Thermography

**Thermography** is an advanced Non-Destructive Testing (NDT) technique that utilizes infrared (IR) technology to detect and visualize temperature variations on the surface of an object. These temperature variations are then correlated with the underlying material properties, defects, or structural anomalies. It's a passive or active sensing method that relies on the principle that all objects above absolute zero emit thermal radiation.

**Key Concepts:**

*   **Infrared Radiation:** A form of electromagnetic radiation with wavelengths longer than visible light and shorter than microwaves. Objects emit IR radiation based on their temperature.
*   **Thermal Camera (Infrared Camera):** A device that detects and measures infrared radiation and converts it into a visual image (thermogram).
*   **Thermogram:** A visual representation of the temperature distribution on an object's surface.
*   **Emissivity:** A measure of how efficiently a surface emits thermal radiation compared to a perfect blackbody at the same temperature. It's a crucial factor for accurate temperature measurement.
*   **Reflectivity:** The ability of a surface to reflect incident thermal radiation. High reflectivity can interfere with accurate temperature measurements.
*   **Transmissivity:** The ability of a material to allow thermal radiation to pass through it.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the principle of thermography as an inspection method allows for carrying out basic inspections based on thermal patterns.
*   **CO4 (K2):** Thermography falls under advanced NDT techniques, providing a deeper understanding of its capabilities and applications.

**Textbook References:**

*   **Baldev Raj (2008):** Practical Non-destructive testing likely discusses thermography as an emerging technology for material characterization and defect detection.
*   **Hull & John (2012):** Non-destructive testing would provide foundational knowledge on thermal properties of materials and how they relate to surface temperature.
*   **Ravi Prakash (2009):** Non Destructive testing Techniques would offer insights into the instrumentation and practical aspects of thermographic inspections.

---

### 2. Principles of Thermography

Thermography operates on the principle of detecting and analyzing infrared radiation emitted by an object. The intensity of this radiation is directly proportional to the object's temperature.

**Key Principles:**

*   **Blackbody Radiation (Planck's Law):** A theoretical perfect emitter and absorber of radiation. Real objects are imperfect emitters and are described by their emissivity.
*   **Stefan-Boltzmann Law:** States that the total energy radiated per unit surface area of a black body is proportional to the fourth power of its absolute temperature ($E = \sigma T^4$).
*   **Wien's Displacement Law:** Relates the peak wavelength of emitted radiation to the temperature of the blackbody. Hotter objects emit radiation at shorter peak wavelengths.
*   **Heat Transfer Mechanisms:**
    *   **Conduction:** Heat transfer through direct contact. Defects can impede or alter heat conduction.
    *   **Convection:** Heat transfer through fluid movement. External heating methods can induce convective cooling which is affected by surface properties.
    *   **Radiation:** Heat transfer through electromagnetic waves. The emitted IR radiation is what thermal cameras detect.

**How Defects are Detected:**

Defects such as voids, delaminations, cracks, or areas of poor adhesion act as thermal anomalies. When an object is subjected to a thermal stimulus (heating or cooling), these defects will either:

*   **Resist Heat Flow:** Leading to hotter spots on the surface if heated externally.
*   **Facilitate Heat Flow:** Leading to cooler spots on the surface if heated externally (compared to surrounding sound material).
*   **Alter Surface Emissivity/Reflectivity:** Affecting the amount of IR radiation detected.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding these principles allows for interpreting thermal patterns and identifying anomalies.
*   **CO4 (K2):** Delves into the fundamental physics behind an advanced NDT technique.

---

### 3. Types of Thermography

Thermography can be broadly categorized based on the method of thermal excitation and data acquisition.

#### 3.1. Passive Thermography

**Principle:**
Passive thermography observes naturally occurring temperature differences on an object's surface. It does not involve any external heating or cooling stimulus.

**Procedure:**
1.  The object or system is monitored using a thermal camera.
2.  Naturally occurring heat sources (e.g., operating electrical components, friction, internal heat generation) create temperature gradients.
3.  These gradients are visualized and analyzed for anomalies.

**Applications:**
*   Detecting overheating in electrical connections and machinery.
*   Monitoring thermal insulation integrity in buildings.
*   Identifying leaks in pipelines carrying hot fluids.

**Limitations:**
*   Reliant on existing temperature differences, which may not always be present or significant enough for defect detection.
*   Difficult to isolate the cause of temperature variations without additional information.

**Textbook References:**

*   **Hull & John (2012):** Might discuss passive thermography in the context of electrical and mechanical system monitoring.
*   **Ravi Prakash (2009):** Could provide case studies on applications of passive thermography.

#### 3.2. Active Thermography

**Principle:**
Active thermography involves applying a controlled external thermal stimulus to the object and monitoring the resulting surface temperature changes over time. This allows for the detection of subsurface defects that influence heat propagation.

**Procedure:**
1.  The object is subjected to a thermal stimulus (heat or cold).
2.  A thermal camera monitors the surface temperature evolution.
3.  Defects are identified by their impact on the rate and pattern of heating/cooling.

**Types of Active Thermography:**

*   **Pulsed Thermography (PT):**
    *   **Stimulus:** A short, high-intensity energy pulse (e.g., flash lamp, laser).
    *   **Procedure:** The object is illuminated with a brief, intense pulse of energy. The surface temperature rises rapidly, and the subsequent cooling is monitored. Defects appear as localized areas that cool slower (if they impede heat flow) or faster (if they create air pockets) than the surrounding material.
    *   **Advantages:** Relatively fast inspection, good for detecting subsurface defects of varying depths.
    *   **Disadvantages:** Requires a powerful energy source, can be sensitive to surface emissivity variations.
    *   **Reference:** **Elena Lysenko et al. (2022)** and **Carosena Meola (2010)** would likely have detailed discussions on pulsed thermography and its recent advancements.

*   **Thermographic Lock-in (Phase Thermography/Modulated Thermography):**
    *   **Stimulus:** A periodic, modulated heat source (e.g., heat lamps operating at a specific frequency).
    *   **Procedure:** The object is heated with a sinusoidal modulated heat source. The thermal response of the material at different locations will have a phase lag relative to the excitation signal, which is affected by subsurface defects. Analyzing the phase information helps to reduce the influence of emissivity variations and background noise.
    *   **Advantages:** Highly sensitive to subsurface defects, robust against emissivity variations and surface roughness.
    *   **Disadvantages:** Slower inspection process compared to pulsed thermography, requires precise control of the heat source and data acquisition.
    *   **Reference:** **Songling Huang & Shen Wang (2016)** might discuss advancements in modulated thermography for electromagnetic NDT, which could extend to thermal principles.

*   **Step-Heating Thermography:**
    *   **Stimulus:** A step-wise or ramp-wise increase in temperature of the heat source.
    *   **Procedure:** The heat source is applied, and the temperature rise is monitored. The rate of temperature increase is analyzed.

*   **Laser Line Scan Thermography:**
    *   **Stimulus:** A moving laser beam that scans across the surface.
    *   **Procedure:** A line of laser light is scanned across the object, and the thermal response along that line is captured.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding active thermography principles is essential for performing inspections.
*   **CO3 (K3):** Analyzing the time-series thermal data (signal processing) and the resulting thermograms (image processing) is core to this technique.
*   **CO4 (K2):** Active thermography represents a significant advancement in NDT capabilities.

---

### 4. Digital Signal and Image Processing in Thermography

The raw data from a thermal camera is a sequence of images (thermograms) representing temperature distribution over time. Digital signal and image processing techniques are crucial for enhancing the quality of these images, extracting meaningful information, and quantifying defects.

**Key Processing Steps and Techniques:**

*   **Image Acquisition:** Capturing a series of thermograms at specific time intervals.
*   **Noise Reduction:**
    *   **Spatial Filtering:** Applying filters like Gaussian, Median, or Bilateral filters to smooth out random noise without blurring important features.
    *   **Temporal Filtering:** Averaging multiple frames to reduce random noise and improve signal-to-noise ratio.
*   **Contrast Enhancement:**
    *   **Histogram Equalization:** Redistributing the pixel intensity values to improve contrast and reveal subtle thermal variations.
    *   **Gamma Correction:** Adjusting the brightness and contrast of the image.
*   **Defect Detection Algorithms:**
    *   **Thresholding:** Setting a pixel intensity threshold to identify areas above or below a certain temperature.
    *   **Edge Detection:** Algorithms like Sobel, Prewitt, or Canny can highlight the boundaries of thermal anomalies.
    *   **Blob Analysis:** Identifying connected regions (blobs) of similar pixel intensity, which can correspond to defects.
*   **Quantitative Analysis:**
    *   **Temperature Profiling:** Extracting temperature values along specific lines or regions of interest.
    *   **Thermal Contrast Calculation:** Measuring the difference in temperature between a suspected defect area and the surrounding sound material.
    *   **Defect Sizing and Depth Estimation:** Using models and image processing to estimate the size and depth of subsurface defects based on their thermal signature and cooling/heating rates.
    *   **Phase Analysis (for Lock-in Thermography):** Calculating the phase shift of the thermal wave propagation, which is less sensitive to emissivity and surface irregularities.
*   **Data Visualization:** Presenting processed data in an understandable format, often involving false-color mapping or overlaying defect outlines on the original image.

**Alignment with Course Outcomes:**

*   **CO3 (K3):** This is the core of this section. Students need to apply principles of signal processing (temporal analysis of temperature) and image processing (spatial analysis of thermograms) to extract defect information.
*   **CO4 (K2):** Understanding these processing techniques highlights the sophisticated nature of advanced NDT.

**Reference Books:**

*   **Baldev Raj (2008):** Might touch upon digital processing of NDT data, including thermography.
*   **Ravi Prakash (2009):** Would likely offer practical guidance on image processing for NDT applications.
*   **Recent developments in the field of non-destructive testing, safety and material science by Elena Lysenko, Alexander Rogachev, Oldrich Stary (Springer, 2022):** This book is highly relevant for contemporary digital processing techniques applied to NDT.

---

### 5. Digital Image Correlation (DIC)

While thermography focuses on temperature distribution, Digital Image Correlation (DIC) is a complementary optical-based technique used for measuring displacement and strain fields on a material's surface during testing. It can be used in conjunction with thermography to understand the mechanical response of a material under thermal stress or to validate thermal models.

**Key Concepts:**

*   **Speckle Pattern:** A random pattern of dots or "speckles" applied to the surface of the object. This pattern is crucial for tracking surface displacement.
*   **Image Tracking:** Digital cameras capture images of the speckle pattern before and after deformation.
*   **Correlation Algorithms:** Sophisticated algorithms match small subsets (facets) of the speckle pattern between the reference and deformed images to calculate displacement.
*   **Displacement Field:** A map showing the displacement of every point on the surface.
*   **Strain Field:** Derived from the displacement field, it represents the deformation of the material.

**Principle:**
DIC works by tracking the apparent motion of a random speckle pattern applied to the surface of an object. As the object deforms, the speckle pattern deforms with it. By comparing images taken before and after deformation, algorithms can precisely measure the displacement of points on the surface.

**Procedure:**
1.  **Surface Preparation:** Apply a random speckle pattern to the surface of the object.
2.  **Image Acquisition:** Capture a series of high-resolution images using one or more digital cameras.
3.  **Subset Selection:** Identify small regions (facets) of the speckle pattern in the reference image.
4.  **Correlation:** Use correlation algorithms to find the corresponding deformed facets in subsequent images.
5.  **Displacement Calculation:** Compute the pixel shifts of the correlated facets to determine the displacement vector for each point.
6.  **Strain Calculation:** Differentiate the displacement field to obtain the strain field.

**Applications:**
*   Measuring deformation under various loading conditions (tensile, compression, bending).
*   Validating finite element models.
*   Analyzing crack propagation and fracture mechanics.
*   **In conjunction with thermography:** Studying thermal expansion, thermal stresses, and their impact on material deformation.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** DIC is an advanced NDT technique that provides valuable mechanical information.
*   **CO3 (K3):** While not directly signal processing of ultrasonic or radiographic data, DIC heavily relies on advanced image processing to extract displacement and strain information.

**Reference Books:**

*   **Hull & John (2012):** May briefly mention optical methods for strain analysis.
*   **Recent developments in the field of non-destructive testing, safety and material science by Elena Lysenko, Alexander Rogachev, Oldrich Stary (Springer, 2022):** Likely to cover advanced optical techniques like DIC.

---

### 6. Advantages and Limitations of Thermography

**Advantages:**

*   **Non-Contact:** No physical contact is required with the test object, preventing damage and allowing inspection of difficult-to-reach areas.
*   **Non-Destructive:** Preserves the integrity of the component being inspected.
*   **Surface and Subsurface Detection:** Can detect both surface-breaking defects and subsurface anomalies that influence thermal behavior.
*   **Fast and Real-time:** Active thermography can provide near real-time inspection results.
*   **Wide Area Coverage:** Thermal cameras can cover large surface areas quickly.
*   **Versatile:** Applicable to a wide range of materials and industries.
*   **Visual Data:** Provides intuitive thermal images for interpretation.
*   **Sensitivity to Thermal Anomalies:** Excellent for identifying areas with different thermal properties.

**Limitations:**

*   **Surface Emissivity Dependence:** Accurate temperature measurement and defect interpretation can be significantly affected by variations in surface emissivity.
*   **Limited Penetration Depth:** The depth of detectable defects is generally limited and depends on the material, the defect type, and the thermography technique used.
*   **Environmental Sensitivity:** Ambient temperature, air currents, and reflected thermal radiation can influence readings.
*   **Requires Thermal Gradient:** Active thermography needs a thermal stimulus to create temperature differences.
*   **Cost of Equipment:** High-resolution thermal cameras and associated processing software can be expensive.
*   **Interpretation Expertise:** Requires skilled operators for accurate interpretation of thermograms.
*   **Cannot Directly Measure Material Properties:** Thermography infers properties based on thermal response; it doesn't directly measure parameters like Young's modulus or fracture toughness.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding these aspects helps in selecting the appropriate NDT method for a given inspection task.
*   **CO4 (K2):** Provides a balanced perspective on the capabilities and constraints of an advanced NDT technique.

**Textbook References:**

*   **Baldev Raj (2008), Hull & John (2012), Ravi Prakash (2009):** All these textbooks would likely cover both the benefits and drawbacks of various NDT methods, including thermography.

---

### 7. Applications of Thermography

Thermography finds widespread applications across various industries due to its ability to detect thermal anomalies.

**Key Application Areas:**

*   **Aerospace:**
    *   Detecting delaminations and disbonds in composite structures.
    *   Inspecting for foreign object damage (FOD).
    *   Monitoring thermal performance of components.
*   **Automotive:**
    *   Inspecting composite parts for manufacturing defects.
    *   Monitoring brake systems and engine components.
    *   Quality control of painted surfaces.
*   **Civil Engineering & Construction:**
    *   Detecting moisture ingress and thermal bridging in buildings.
    *   Inspecting bridges and tunnels for structural defects.
    *   Monitoring the integrity of concrete structures.
*   **Electrical Engineering:**
    *   Identifying overheating in electrical connections, switchgear, and transformers.
    *   Detecting faulty circuit breakers.
    *   Inspecting PCBs for faulty components.
*   **Manufacturing:**
    *   Quality control of welding and soldering processes.
    *   Detecting internal defects in castings.
    *   Monitoring curing processes of polymers and coatings.
*   **Oil and Gas:**
    *   Inspecting pipelines for insulation integrity and leaks.
    *   Monitoring process equipment for hotspots.
    *   Detecting anomalies in storage tanks.
*   **Medical:**
    *   Diagnosing inflammation and circulatory disorders.
    *   Monitoring wound healing.
    *   Breast cancer screening (though not a primary diagnostic tool).

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Familiarity with these applications enhances the ability to conduct various inspections.
*   **CO4 (K2):** Demonstrates the practical relevance and advanced nature of thermography.

**Textbook References:**

*   **Baldev Raj (2008), Hull & John (2012), Ravi Prakash (2009):** These texts would provide fundamental examples of thermographic applications.
*   **Recent developments in the field of non-destructive testing, safety and material science by Elena Lysenko, Alexander Rogachev, Oldrich Stary (Springer, 2022):** Would offer more modern and niche applications.

---

### 8. Practice Questions and Answers

**Question 1:**
What is the primary principle behind thermography as an NDT technique?
(a) Eddy current induction
(b) Absorption of ultrasonic waves
(c) Detection of infrared radiation emitted by an object
(d) X-ray penetration

**Answer:** (c) Detection of infrared radiation emitted by an object

**Explanation:** Thermography relies on detecting the thermal energy (infrared radiation) emitted by an object, which is directly related to its surface temperature.

---

**Question 2:**
In active thermography, what is the typical response of a subsurface void or delamination to an external heating stimulus?
(a) It will heat up faster than the surrounding material.
(b) It will cool down faster than the surrounding material.
(c) It will exhibit a localized area of slower or faster heating/cooling compared to the surrounding sound material.
(d) It will have no measurable effect on the surface temperature.

**Answer:** (c) It will exhibit a localized area of slower or faster heating/cooling compared to the surrounding sound material.

**Explanation:** Voids and delaminations often act as insulators or create air pockets, altering the rate of heat conduction. This leads to a localized deviation in the heating or cooling pattern on the surface.

---

**Question 3:**
Which type of active thermography is known for its high sensitivity to subsurface defects and robustness against emissivity variations, but typically involves a slower inspection process?
(a) Pulsed Thermography
(b) Thermographic Lock-in (Phase Thermography)
(c) Flash Thermography
(d) Passive Thermography

**Answer:** (b) Thermographic Lock-in (Phase Thermography)

**Explanation:** Thermographic lock-in uses modulated heating and phase analysis, which makes it very sensitive and less affected by surface properties, but the data acquisition and processing take longer.

---

**Question 4:**
Digital Image Correlation (DIC) is primarily used for:
(a) Measuring thermal conductivity
(b) Detecting surface cracks through thermal signatures
(c) Measuring surface displacement and strain
(d) Assessing material density

**Answer:** (c) Measuring surface displacement and strain

**Explanation:** DIC is an optical method that tracks the movement of a speckle pattern to quantify deformation.

---

**Question 5 (Application Scenario):**
You are inspecting a composite aircraft panel for signs of internal damage after impact. You are using pulsed thermography. Describe what you would expect to see on the thermogram if a significant delamination is present beneath the surface.

**Answer:**
When applying a heat pulse to the composite panel, the heat will propagate through the material. If a delamination is present, it will likely create an insulating layer of trapped air. Consequently, the region of the delamination on the surface will heat up more slowly than the surrounding sound material. As the panel cools down, the delaminated area will also cool down more slowly, appearing as a localized "hot spot" in the thermogram during the cooling phase, or a "cold spot" if analyzed during the heating phase as a deviation from the expected heating rate. The exact appearance (hot or cold spot) depends on the timing of the image acquisition relative to the excitation.

---

### 9. Important Points to Remember

*   **Emissivity is Key:** Always consider the emissivity of the surface when performing and interpreting thermographic data. Coatings or surface treatments can significantly alter emissivity.
*   **Active vs. Passive:** Understand the difference between passive thermography (observing existing temperature gradients) and active thermography (applying a stimulus).
*   **Thermal Response:** Defects influence how heat propagates. The anomaly in temperature observed is a consequence of altered heat transfer.
*   **Processing is Crucial:** Digital signal and image processing are essential for enhancing thermograms, reducing noise, and accurately identifying and characterizing defects.
*   **DIC Complementarity:** DIC can provide complementary mechanical information to thermal data, especially in applications involving thermal stresses.
*   **Depth Limitation:** Be aware that thermography has a limited penetration depth, which varies with the material and technique.
*   **Calibration:** Ensure that thermal cameras are properly calibrated for accurate temperature measurements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
